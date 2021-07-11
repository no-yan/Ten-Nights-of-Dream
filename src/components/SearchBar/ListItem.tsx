type ListItemProps = {
  beforeText: string;
  matchedText: string;
  afterText: string;
};
export const ListItem = ({
  beforeText,
  matchedText,
  afterText,
}: ListItemProps) => {
  return (
    <li className="py-1">
      <p>
        {beforeText.replace(/\s+/g, '')}
        <span className="bg-yellow-200">{matchedText.replace(/\s+/g, '')}</span>
        {afterText.replace(/\s+/g, '')}
      </p>
    </li>
  );
};
