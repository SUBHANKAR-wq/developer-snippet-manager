import React, { useState } from "react";

function AddSnippet({ addSnippet }) {

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !code) return;

    const newSnippet = {
      id: Date.now(),
      title,
      code
    };

    addSnippet(newSnippet);

    setTitle("");
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Snippet Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Paste your code here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button>Add Snippet</button>

    </form>
  );
}

export default AddSnippet;