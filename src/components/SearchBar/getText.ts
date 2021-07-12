export const getText = (reg: RegExpMatchArray) => {
  const textLengthLimit = 30;
  const index = reg.index;
  const input = reg.input;
  if (!(index && input)) return;

  let beforeText: string;
  let markedText = reg[0];
  let afterText: string;

  if (index < (textLengthLimit - markedText.length) / 2) {
    beforeText = input.slice(0, index);
    const afterTextLength = textLengthLimit - (index + markedText.length);
    afterText = input.slice(
      index + markedText.length,
      index + markedText.length + afterTextLength
    );
  } else if (input.length - index <= textLengthLimit / 2) {
    afterText = input.slice(index + markedText.length, input.length);
    const beforeTextLength = textLengthLimit;
    beforeText = input.slice(index - beforeTextLength, index);
  } else {
    beforeText = input.slice(
      index - Math.floor((textLengthLimit - markedText.length) / 2),
      index
    );
    afterText = input.slice(
      index + markedText.length,
      index +
        markedText.length +
        Math.ceil((textLengthLimit - markedText.length) / 2)
    );
  }

  return { beforeText, markedText, afterText };
};
