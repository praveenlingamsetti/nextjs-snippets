"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect(`/`);
}

export async function createSnippet(formState: { message: string }, formData: FormData) {
  const code = formData.get("code");
  const title = formData.get("title");

  try {
    if (typeof title !== "string" || title.length < 3) {
      return { message: "title should to be more than 3 letters" };
    }

    if (typeof code !== "string" || code.length < 10) {
      return { message: "code should to be more than 10 letters" };
    }

    await db.snippet.create({
      data: {
        code,
        title,
      },
    });
    //throw new Error("Failed to save to database!");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "something went wrong..." };
    }
  }

  redirect("/");
}
