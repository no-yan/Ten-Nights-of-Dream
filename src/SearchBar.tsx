import { ContentState } from "draft-js";
import {
  useTransition,
  useState,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import { RichContent } from "./App";
type Props = { contents: RichContent[] };

const SearchBar: React.FC<Props> = ({ contents }) => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");

  // TODO: User Input can be escape character.
  const handleSearch = (contents: RichContent[], text: string) => {
    if (text.length === 0) return;

    const result = [];
    const regExpObj = new RegExp(text, "g");

    const textContents = contents.map((content) => content.body.getPlainText());
    const limit = contents.length;

    for (let i = 0; i < limit; i += 1) {
      const content = textContents[i];
      const match = content.matchAll(regExpObj);
      for (let res of match) {
        result.push([i, res]);
      }
    }
    console.log(result);
    return result as [number, RegExpMatchArray][];
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(contents, e.target.value);
    setQuery(e.target.value);

    // console.log(e.target.value);
  };
  return (
    <div className="bg-white flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border rounded-lg border-gray-200">
      <button className="outline-none focus:outline-none">
        <svg
          className="w-5 h-5 cursor-pointer text-red-400"
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
        className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
