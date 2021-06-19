import React, { useEffect, VFC } from "react";
import {
  DraftHandleValue,
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { Article } from "./ArticleContext";

type Props = {
  content: Article;
};

const MyEditor: VFC<Props> = ({ content }) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createWithContent(ContentState.createFromText(content.body))
  );
  const onChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command: string): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return "handled";
    }

    return "not-handled";
  };
  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(ContentState.createFromText(content.body))
    );
  }, [content]);

  return (
    <>
      <h1>{content.title}</h1>
      <button
        onMouseDown={(e) => {
          onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
          e.preventDefault();
        }}
      >
        Bold
      </button>
      <button
        onMouseDown={(e) => {
          onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
          e.preventDefault();
        }}
      >
        Italic
      </button>
      <button
        onMouseDown={(e) => {
          onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
          e.preventDefault();
        }}
      >
        get Content
      </button>
      <div style={{ border: "1px solid black", padding: 4, fontSize: 20 }}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder={"　こんな夢を見た。"}
        />
      </div>
    </>
  );
};

export default MyEditor;
