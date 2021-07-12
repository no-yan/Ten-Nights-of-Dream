type Props = {
  beforeText: string;
  matchedText: string;
  afterText: string;
};
export const ListItem = ({ beforeText, matchedText, afterText }: Props) => {
  const formatter = (text: string) => text.replace(/\s+/g, '');

  return (
    <li className="py-1">
      <p>
        {formatter(beforeText)}
        <span className="bg-yellow-200">{formatter(matchedText)}</span>
        {formatter(afterText)}
      </p>
    </li>
  );
};
