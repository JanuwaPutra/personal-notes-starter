import NotesItem from './NotesItem';
import React from "react";

function NotesList({ notes, onDelete, onArchive  }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? ( 
        <p className="notes-list__empty-message">Tidak ada catatan.</p>
      ) : (
        notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            onDelete={onDelete}
            onArchive={onArchive} 
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default NotesList;
