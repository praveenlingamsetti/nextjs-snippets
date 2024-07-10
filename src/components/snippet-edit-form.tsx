"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor onChange={handleEditChange} height="40vh" language="javascript" defaultValue={snippet.code} theme="vs-dark" options={{ minimap: { enabled: false } }} />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded ">
          Save
        </button>
      </form>
    </div>
  );
}
