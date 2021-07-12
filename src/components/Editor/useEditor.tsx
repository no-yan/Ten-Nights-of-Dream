import {
  EditorState,
  DraftHandleValue,
  RichUtils,
  ContentState,
} from 'draft-js';
import { useState, useEffect, Dispatch } from 'react';
import { RichContent } from '../../App';

export const useEditor = (
  title: string,
  content: ContentState,
  setArticles: Dispatch<React.SetStateAction<RichContent[]>>
) => {
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
      return 'handled';
    }

    return 'not-handled';
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

  return {
    handleSave,
    handleKeyCommand,
    editorState,
    setEditorState,
    onChange,
  };
};
