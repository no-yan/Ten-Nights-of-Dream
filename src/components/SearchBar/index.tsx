import { useState, ChangeEvent } from 'react';
import { RichContent } from '../../App';
import { SearchList } from './SearchList';
type Props = {
  contents: RichContent[];
  handleSelect: (articleNumber: number) => void;
};
export type Suggestion = [number, RegExpMatchArray];
const SearchBar: React.FC<Props> = ({ contents, handleSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState<Suggestion[]>();

  const handleSearch = (contents: RichContent[], text: string) => {
    if (text.length === 0) return;

    const result = [];

    const regExpEscape = (str: string) => {
      return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    const regExpObj = new RegExp(regExpEscape(text), 'g');

    const textContents = contents.map((content) => content.body.getPlainText());
    const limit = contents.length;

    for (let i = 0; i < limit; i += 1) {
      const content = textContents[i];
      const match = content.matchAll(regExpObj);
      for (let res of match) {
        result.push([i, res]);
      }
    }
    return result as Suggestion[];
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSuggestion(handleSearch(contents, e.target.value));
    setQuery(e.target.value);
  };

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
        {query && suggestion && (
          <SearchList
            text={query}
            result={suggestion}
            handleSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
