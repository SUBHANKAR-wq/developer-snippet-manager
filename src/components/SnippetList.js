import React from "react";
import SnippetCard from "./SnippetCard";

function SnippetList({ snippets, deleteSnippet }) {

  return (
    <div className="snippet-list">

      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          deleteSnippet={deleteSnippet}
        />
      ))}

    </div>
  );

}

export default SnippetList;