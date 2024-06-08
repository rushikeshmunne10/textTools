import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleclear = ()=>{
        let newText = ' '
        setText(newText)
        props.showAlert("Text has been cleared", "success")
    }

    const handlecopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState(' ');

    return (
    <>
    <div className='container1' style={{color: props.mode === 'light'?'black':'white'}} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode == 'light'?'white':'#092348' , color: props.mode == 'light'?'black':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary " onClick={handleclear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>

    </div>
    <div className="container2 my-3" style={{color: props.mode === 'light'?'black':'white'}} >
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Write something in textbox to preview" }</p>

    </div>
    </>
  )
}