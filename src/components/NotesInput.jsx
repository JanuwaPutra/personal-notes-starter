import React from 'react';
 
class NotesInput extends React.Component {
 render() {
  const { title, body, charLimit } = this.state;
  const remainingChars = charLimit - title.length;
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          {remainingChars} karakter tersisa
        </p>
       <input className="note-input__title" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler}  />
       <textarea className="note-input__body" type="text" placeholder="Body"  value={this.state.body} onChange={this.onBodyChangeEventHandler} />
       <button type="submit">Tambah Catatan</button>
     </form>
   )
 }
 constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const { value } = event.target;
      if (value.length <= this.state.charLimit) {
        this.setState({ title: value });
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);

    if (title && body) {
      this.props.addNotes({ title, body });
      this.setState({ title: '', body: '' }); 
    }
  }
  

 
}
 
export default NotesInput