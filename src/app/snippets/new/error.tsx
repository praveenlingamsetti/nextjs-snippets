"use client";

interface ErrorPageProp {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProp) {
  return <div>{error.message}</div>;
}
