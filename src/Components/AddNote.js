import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
      </div>
      <div className="container my-3">
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={note.title}
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleChange}
              minLength={5} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={note.description}
              className="form-control"
              id="description"
              name="description"
              onChange={handleChange}
              minLength={5} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tag
            </label>
            <input
              type="text"
              value={note.tag}
              className="form-control"
              id="tag"
              name="tag"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={note.title.length<5 || note.description.length<5}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
