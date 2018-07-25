import React from 'react';

const Preview = (props) => {
  const dangerousHTML = {__html: props.markdownText};

  return (
    <section className="section preview">
      <div id="preview" className="box container preview__box content"
        dangerouslySetInnerHTML={dangerousHTML}>
      </div>
    </section>
  );
};

export default Preview