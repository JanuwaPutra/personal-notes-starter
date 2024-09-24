import NotesList from "./NotesList";
import { getInitialData } from "../utils/index";
import React from 'react';
import NotesInput from './NotesInput';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this); 
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(notes => notes.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }
  onSearchChangeHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }
  

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, archived: !note.archived }; // Toggle the archived state
        }
        return note;
      });
      return { notes };
    });
  }
  
  render() {
    const { notes, searchKeyword } = this.state;

    
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));

    const unarchivedNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);


    return (
  <div className="note-app">
    <header header className="note-app__header">
    <h1>Notes</h1>
  <input 
            type="text" 
            placeholder="Cari catatan..." 
            value={searchKeyword} 
            onChange={this.onSearchChangeHandler} 
          />
  </header>

  <div className="note-app__body">
  <h2>Buat Catatan</h2>
    <NotesInput addNotes={this.onAddNotesHandler} />
    <h2>Catatan Aktif</h2>
    <NotesList notes={unarchivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

    <h2>Catatan Arsip</h2>
    <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
  </div>
</div>
    );
  }
 }
  

export default NotesApp;