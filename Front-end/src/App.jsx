
import './App.css';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useEffect, useState } from 'react';
import Editor from "react-simple-code-editor";
import axios from 'axios';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css"


function App() {
  const [code, setCode] = useState(`function sum(){
    sum a + b
    }`);
  const [review, setReview] = useState(``);

   async function reviewCode() {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/ai/get-review`, { code });
    setReview(response.data);
    
  }

  useEffect(() => {
    prism.highlightAll();
  },[]);
  return (
    <>
    <main>

      <div className='left'>
        <div className="code">
            <Editor
                  value={code}
                  onValueChange={code => setCode(code)}
                  highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
                  padding={10}
                  style={{
                    fontSize: 16,
                    borderRadius: "5px",
                    border:"1px solid #ddd",
                    height: "100%",
                    width: "100%"
                  }}
                />
        </div>
        <div className="review-btn" onClick={reviewCode}>Review</div>
        
      </div>

      <div className="right">
        <div className='markdown'>
          <Markdown remarkPlugins={[remarkBreaks]} rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
