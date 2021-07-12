import { Suggestion } from '.';
import { getText } from './getText';
import { ListItem } from './ListItem';

type Props = {
  text: string;
  result: Suggestion[];
  handleSelect: (articleNumber: number) => void;
};

export const SearchList = ({ text, result, handleSelect }: Props) => {
  const items = result.map((item) => {
    let textArray;
    if (item[1]) {
      textArray = getText(item[1]);
      return textArray ? { ...textArray, articleNumber: item[0] } : null;
    }
    return null;
  });

  return (
    <>
      {items.length > 0 && (
        <ul className="p-2 shadow-2xl divide-gray-200 divide-solid divide-y">
          {items.map((item) => {
            if (!item) return null;
            const { beforeText, markedText, afterText, articleNumber } = item;

            return (
              <li className="py-1 hover:bg-gray-100">
                <button
                  onClick={() => handleSelect(articleNumber)}
                  className="rounded-lg focus:outline-none focus-visible:ring-yellow-500 focus-visible:ring-2"
                >
                  <ListItem
                    beforeText={beforeText}
                    matchedText={markedText}
                    afterText={afterText}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
