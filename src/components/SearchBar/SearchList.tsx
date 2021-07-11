import { Suggestion } from '.';
import { getText } from './getText';
import { ListItem } from './ListItem';

type ListProps = { text: string; result: Suggestion[] };

export const SearchList = ({ text, result }: ListProps) => {
  const x = result.map((res) => {
    let textArray;
    if (res[1]) {
      textArray = getText(res[1]);
      return textArray;
    }
    return null;
  });

  return (
    <>
      {x.length > 0 && (
        <ul className="p-2 shadow-2xl divide-gray-200 divide-solid divide-y">
          {x.map((t) => {
            if (!t) return null;
            const { beforeText, markedText, afterText } = t;

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
