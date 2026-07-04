import type { ButtonHTMLAttributes } from "react";

export default function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    />
  );
}
