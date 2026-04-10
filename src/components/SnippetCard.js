import React from "react";

function SnippetCard({ snippet, deleteSnippet }) {

  return (
    <div className="card">

      <h3>{snippet.title}</h3>

      <pre>{snippet.code}</pre>

      <button onClick={() => deleteSnippet(snippet.id)}>
        Delete
      </button>

    </div>
  );

}

export default SnippetCard;