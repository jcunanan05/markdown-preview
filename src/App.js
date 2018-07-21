import React, { Component } from 'react';
import marked from 'marked';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Footer from './components/Footer';

const defaultMarkdownText = `# Hello World
## Hi World`;

class App extends Component {
  state = {
    markdownText: defaultMarkdownText
  };

  handleTextChange = (e) => {
    //get the event value
    //update markdownText state
    this.setState({markdownText: e.target.value});
  }

  render() {
    const markdownText = this.state.markdownText;

    return (
      <div className="App">
        <Header title={'Markdown Preview!'} />

        <main className="main">
          <Editor 
            text={markdownText}
            handleTextChange={this.handleTextChange} />

          <Preview markdownText={marked(markdownText)} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
