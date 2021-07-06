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

  const handleSave = () => {
    const currentEditorState = editorState;
    onChange(currentEditorState);
    const newContent = currentEditorState.getCurrentContent();
    const newObj = {
      title: title,
      body: newContent,
    };
    setArticles((prev) => {
      const newArticles = prev.map((prevArticle) => {
        if (prevArticle.title === title) return newObj;
        return prevArticle;
      });

      return newArticles;
    });
  };

  useEffect(() => {
    setEditorState(EditorState.createWithContent(content));
  }, [content]);

  return (
    <>
      <div className="space-x-4 bg-white opacity-30 rounded-lg flex justify-between w-10/12 m-auto px-6 text-lg">
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
        <button type={"button"} onClick={handleSave}>
          Save
        </button>
      </div>
      <div
        className="p-4 mt-4 my-10  bg-white opacity-90 shadow-lg rounded-xl"
        style={{ border: "1px solid white", fontSize: 20 }}
      >
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
