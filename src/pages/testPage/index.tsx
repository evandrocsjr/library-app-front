import { useState } from "react";

export function TestPage() {
  const [link, setLink] = useState("");
  setLink("/");
  return (
    <div>
      <a href={link}></a>
    </div>
  );
}
