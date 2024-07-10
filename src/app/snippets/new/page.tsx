"use client";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, { message: "" });

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="label">
            title
          </label>
          <input id="title" name="title" className="border rounded p-2 w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            code
          </label>
          <textarea id="code" name="code" className="border rounded p-2 w-full" />
        </div>
      </div>
      {formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null}
      <button type="submit" className="rounded p-2 bg-blue-200">
        Create
      </button>
    </form>
  );
}
