import marked from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => (
  `
    <a href="${href}" target="_blank" rel="noopener noreferrer">
      ${text}
    </a>
  `
);

const markedOptions = {
  gfm: true,
  breaks: true,
  renderer
};

function processMarkdown(text) {
  return marked(text, markedOptions);
}

export {
  markedOptions
};

export default processMarkdown;