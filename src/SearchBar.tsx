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
    console.log(result)
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

  const TextComponent = result.map((res) => {
    let component
    if (res[1]) {
      component = getComponent(res[1])
    }
    return component
  })

  return (
    <ul className="p-2 shadow-2xl divide-gray-300 divide-solid divide-y space-y-2">
      {result.map(([article, RegMatchObject], index) => (
        <li className="px-4">{text}</li>
      ))}
      {TextComponent}
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
      <li className="px-4">hoge</li>
    </ul>
  )
}

const getComponent = (reg: RegExpMatchArray) => {
  const textLengthLimit = 20
  const index = reg.index
  const input = reg.input
  if (!(index && input)) return

  let beforeText: string
  let afterText: string
  if (index < (textLengthLimit - input.length) / 2) {
    beforeText = input.slice(0, index)
    const afterTextLength = textLengthLimit - (index + reg[0].length)
    beforeText = input.slice(0, index)
    afterText = input.slice(index + reg[0].length + 1, index + afterTextLength)
  } else if (input.length - index <= textLengthLimit) {
    afterText = input.slice(index + reg[0].length + 1, input.length)
    const beforeTextLength = textLengthLimit
    beforeText = input.slice(index - beforeTextLength, index)
  } else {
    beforeText = input.slice(
      index - Math.floor((textLengthLimit - reg[0].length) / 2),
      index
    )
    afterText = input.slice(
      index + reg[0].length,
      Math.ceil((textLengthLimit - reg[0].length) / 2)
    )
  }
  return (
    <p>
      {beforeText}
      <span className="bg-yellow-200">{input}</span>
      {afterText}
    </p>
  )
}

// const SearchDetail = () => {
//   return <></>
// }
export default SearchBar
