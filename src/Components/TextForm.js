import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUPClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClear = ()=>{
    let newText = "";
    setText(newText);
  }
  
  const handleCaseConversion = ()=>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  }

  const handleCopy = ()=>{
    let text = document.getElementById("Text");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  


  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className='container' /><div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="Text" rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUPClick}>Capitalize text</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lower case conversion</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCaseConversion}>Normalize text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3">
      <h3>Text Summary</h3>
      <p>{text.split(" ").length} words, {text.length} char</p>
    </div>

    </>
  );
}
