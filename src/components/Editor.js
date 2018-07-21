import React from 'react';

const Editor = (props) => (
  <section className="section container">
    <textarea 
      name="editor" 
      id="editor" 
      className="textarea editor"
      onChange={props.handleTextChange}
      value={props.text} >
    </textarea>
  </section>
);

export default Editor;