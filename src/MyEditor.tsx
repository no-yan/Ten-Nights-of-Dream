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

  const handleSave = (e: any) => {
    e.preventDefault();
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
      <div className="flex justify-between mx-auto my-2 px-24 w-10/12 text-lg bg-white rounded-lg space-x-4">
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
        <button type="button" onMouseDown={handleSave}>
          Save
        </button>
      </div>
      <div
        className="px-4　text-justify mt-4 my-10 p-4 text-gray-900 text-base leading-normal bg-white rounded-xl shadow-lg opacity-100"
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
