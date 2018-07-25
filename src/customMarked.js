import marked from 'marked';

const renderer = new marked.Renderer();

renderer.heading = function (text, level) {
  return `
    <h${level} class="title is-${level}">
      ${text}
    </h${level}>`;
};

const markedOptions = {
  gfm: true
}

export {
  markedOptions
};

export default marked;