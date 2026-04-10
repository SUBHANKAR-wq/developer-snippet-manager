import React, { useState, useEffect } from "react";
import AddSnippet from "./components/AddSnippet";
import SnippetList from "./components/SnippetList";
import SearchBar from "./components/SearchBar";

function App() {

  const [snippets, setSnippets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("snippets"));
    if (stored) {
      setSnippets(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("snippets", JSON.stringify(snippets));
  }, [snippets]);

  const addSnippet = (snippet) => {
    setSnippets([...snippets, snippet]);
  };

  const deleteSnippet = (id) => {
    const filtered = snippets.filter((s) => s.id !== id);
    setSnippets(filtered);
  };

  const filteredSnippets = snippets.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Developer Snippet Manager</h1>

      <SearchBar setSearch={setSearch} />

      <AddSnippet addSnippet={addSnippet} />

      <SnippetList
        snippets={filteredSnippets}
        deleteSnippet={deleteSnippet}
      />

    </div>
  );
}

export default App;