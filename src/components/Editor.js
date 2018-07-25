import React from 'react';

const Editor = (props) => (
  <section className="section container editor__section">
    <button 
      class="button is-danger editor__button"
      onClick={props.clearText} >
      <i class="fas fa-trash-alt"></i>&nbsp;Clear Text
    </button>

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