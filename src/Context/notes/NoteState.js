import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "634c195b0e2b373a5935d5a8",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description",
      tag: "first",
      date: "2022-10-16T14:46:51.243Z",
      __v: 0,
    },
    {
      _id: "634c195c0e2b373a5935d5aa",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description2",
      tag: "first",
      date: "2022-10-16T14:46:52.197Z",
      __v: 0,
    },
    {
      _id: "634c195b0e2b373a5935d5a8",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description",
      tag: "first",
      date: "2022-10-16T14:46:51.243Z",
      __v: 0,
    },
    {
      _id: "634c195b0e2b373a5935d5a8",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description",
      tag: "first",
      date: "2022-10-16T14:46:51.243Z",
      __v: 0,
    },
    {
      _id: "634c195b0e2b373a5935d5a8",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description",
      tag: "first",
      date: "2022-10-16T14:46:51.243Z",
      __v: 0,
    },
    {
      _id: "634c195c0e2b373a5935d5aa",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description2",
      tag: "first",
      date: "2022-10-16T14:46:52.197Z",
      __v: 0,
    },
    {
      _id: "634c195b0e2b373a5935d5a8",
      user: "634bb4bdd4d3acc0f515d18d",
      title: "Mytitle",
      description: "My first description",
      tag: "first",
      date: "2022-10-16T14:46:51.243Z",
      __v: 0,
    },
    
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
