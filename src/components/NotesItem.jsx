
import NotesItemBody from './NotesItemBody';
import NotesItemAction from './NotesItemAction';
import React from "react";

function NotesItem({ title, body , id, onDelete,createdAt,  onArchive, archived }) {
  return (
    
    <div className="note-item">
        <div className="note-item__action"></div>
      <NotesItemBody title={title} body={body} createdAt={createdAt}  />
      <NotesItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}  />
    </div>
  );
}

export default NotesItem;