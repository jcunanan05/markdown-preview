import React from 'react';

const Editor = (props) => (
  <section className="section container is-fluid editor__section is-flex-tablet">
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
      onKeyUp={props.handleTextChange}
      placeholder={props.placeholder}
      value={props.text} >
    </textarea>
  </section>
);

export default Editor;