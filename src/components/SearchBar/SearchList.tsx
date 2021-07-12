import { Suggestion } from '.';
import { getText } from './getText';
import { ListItem } from './ListItem';

type ListProps = { text: string; result: Suggestion[] };

export const SearchList = ({ text, result }: ListProps) => {
  const items = result.map((item) => {
    let textArray;
    if (item[1]) {
      textArray = getText(item[1]);
      return textArray;
    }
    return null;
  });

  return (
    <>
      {items.length > 0 && (
        <ul className="p-2 shadow-2xl divide-gray-200 divide-solid divide-y">
          {items.map((item) => {
            if (!item) return null;
            const { beforeText, markedText, afterText } = item;

            return (
              <ListItem
                beforeText={beforeText}
                matchedText={markedText}
                afterText={afterText}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
