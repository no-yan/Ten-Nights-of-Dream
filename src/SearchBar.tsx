import { useTransition, useState, ChangeEvent } from "react"
import { RichContent } from "./App"
type Props = { contents: RichContent[] }
type Suggestion = [number, RegExpMatchArray]
const SearchBar: React.FC<Props> = ({ contents }) => {
  const [query, setQuery] = useState("")
  const [suggestion, setSuggestion] = useState<Suggestion[]>()

  // TODO: User Input can be escape character.
  const handleSearch = (contents: RichContent[], text: string) => {
    if (text.length === 0) return

    const result = []
    const regExpObj = new RegExp(text, "g")

    const textContents = contents.map((content) => content.body.getPlainText())
    const limit = contents.length

    for (let i = 0; i < limit; i += 1) {
      const content = textContents[i]
      const match = content.matchAll(regExpObj)
      for (let res of match) {
        result.push([i, res])
      }
    }
    return result as Suggestion[]
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSuggestion(handleSearch(contents, e.target.value))
    setQuery(e.target.value)

    // console.log(e.target.value);
  }

  return (
    <div className="relative flex items-center mr-4 p-2 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm">
      <button className="outline-none focus:outline-none">
        <svg
          className="w-5 h-5 text-red-400 cursor-pointer"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        value={query}
        onChange={(e) => handleChange(e)}
        className="pl-3 w-full text-black text-sm bg-transparent outline-none focus:outline-none"
      />
      <div className="absolute z-10 left-2 right-0 top-12 bg-white rounded">
        {query && suggestion && <SearchList text={query} result={suggestion} />}
      </div>
    </div>
  )
}

type ListProps = { text: string; result: Suggestion[] }
const SearchList = ({ text, result }: ListProps) => {
  console.log(result)

  const x = result.map((res) => {
    let textArray
    if (res[1]) {
      // This is a work around for typescript error(ts2488).
      // When 'for of' syntax used,Typescript will warn `[a,b,c] = getText(res[1])`.
      //  https://github.com/Microsoft/TypeScript/issues/12707
      textArray = getText(res[1])
      return textArray
    }
    return null
  })

  return (
    <>
      {x && (
        <ul className="p-2 shadow-2xl divide-gray-200 divide-solid divide-y">
          {x.map((t) => {
            if (!t) return null
            const { beforeText, markedText, afterText } = t

            return (
              <ListItem
                beforeText={beforeText}
                matchedText={markedText}
                afterText={afterText}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}

const getText = (reg: RegExpMatchArray) => {
  const textLengthLimit = 30
  const index = reg.index
  const input = reg.input
  if (!(index && input)) return

  let beforeText: string
  let markedText = reg[0]
  let afterText: string
  if (index < (textLengthLimit - markedText.length) / 2) {
    beforeText = input.slice(0, index)
    const afterTextLength = textLengthLimit - (index + markedText.length)
    afterText = input.slice(
      index + markedText.length,
      index + markedText.length + afterTextLength
    )
  } else if (input.length - index <= textLengthLimit / 2) {
    afterText = input.slice(index + markedText.length, input.length)
    const beforeTextLength = textLengthLimit
    beforeText = input.slice(index - beforeTextLength, index)
  } else {
    beforeText = input.slice(
      index - Math.floor((textLengthLimit - markedText.length) / 2),
      index
    )
    afterText = input.slice(
      index + markedText.length,
      index +
        markedText.length +
        Math.ceil((textLengthLimit - markedText.length) / 2)
    )
  }
  // console.log(beforeText)
  // console.log(markedText)
  // console.log(afterText)
  // console.log((beforeText + markedText + afterText).length)
  return { beforeText, markedText, afterText }
}

type ListItemProps = {
  beforeText: string
  matchedText: string
  afterText: string
}
const ListItem = ({ beforeText, matchedText, afterText }: ListItemProps) => {
  return (
    <li className="py-1">
      <p>
        {beforeText.replace(/\s+/g, "")}
        <span className="bg-yellow-200">{matchedText.replace(/\s+/g, "")}</span>
        {afterText.replace(/\s+/g, "")}
      </p>
    </li>
  )
}
export default SearchBar
