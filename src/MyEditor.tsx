import { Dispatch, useEffect, VFC, useState } from "react";
import {
  DraftHandleValue,
  Editor,
  EditorState,
  ContentState,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { RichContent } from "./App";

type Props = {
  title: string;
  content: ContentState;
  setArticles: Dispatch<React.SetStateAction<RichContent[]>>;
};

const MyEditor: VFC<Props> = ({ title, content, setArticles }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(content)
  );
  useEffect(() => {
    setEditorState(EditorState.createWithContent(content));
  }, [content]);
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

  return (
    <>
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
