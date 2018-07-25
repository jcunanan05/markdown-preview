import React, { Component } from 'react';
import marked, { markedOptions } from '../customMarked';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import Footer from './Footer';
import defaultMarkdownText from '../defaultMarkdownText';


class App extends Component {
  state = {
    markdownText: defaultMarkdownText
  };

  handleTextChange = (e) => {
    //get the event value
    //update markdownText state
    this.setState({markdownText: e.target.value});
  }

  clearText = () => {
    this.setState({markdownText: ''});
  }

  render() {
    const markdownText = this.state.markdownText;

    return (
      <div className="App">
        <Header title={'Markdown Preview!'} />

        <main className="main">
          <Editor 
            text={markdownText}
            clearText={this.clearText}
            handleTextChange={this.handleTextChange} />

          <Preview markdownText={marked(markdownText, markedOptions)} />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
