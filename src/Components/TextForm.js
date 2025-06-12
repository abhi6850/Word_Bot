import React, { useState } from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState('');
    const handleUpclick = () => {
        let newText = Text.toUpperCase();
        setText(newText);

    }
    const handleDownclick = () => {
        let newText = Text.toLowerCase();
        
        setText(newText);

    }
    const handleCleartext = () => {
        let newText = '';
        setText(newText);

    }
    const handleRemoveSpace = () => {
        let newText = Text.trim().replace(/\s+/g, ' ');
        setText(newText);

    }
    const handleInverse = () => {
        let newText = Text.split(' ').reverse().join(' ');
        setText(newText);

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(Text);

    }
    const handleOnchange = (event) => {
        setText(event.target.value)   

    }
    


    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control border-dark" value={Text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark' ? '#FCECDD':'white'}}  id="myBox" rows="8" placeholder='Enter text here'></textarea>
            </div>
            <div className="btn btn-primary mx-1" onClick={handleUpclick}><b>Convert to uppercase</b></div>
            <div className="btn btn-primary mx-1" onClick={handleDownclick}><b>Convert to lowercase</b></div>
            <div className="btn btn-primary mx-1" onClick={handleCleartext}><b>Clear Text</b></div>
            <div className="btn btn-primary mx-1" onClick={handleRemoveSpace}><b>Remove Extra Spaces</b></div>  
            <div className="btn btn-primary mx-1" onClick={handleInverse}><b>Inverse your sentence</b></div>
            <div className="btn btn-primary mx-1" onClick={handleCopy}><b>Copy Text</b></div>

        </div>
        <div className="container my-3">
            <h1>Your Text summary</h1>
            <p>{Text.split(" ").length} words and {Text.length} characters</p>
             <p>{Text.length===0 ?" ":`Time taken to read approximately is ${0.008 * Text.split(" ").length } minutes`}</p>
            
            <h2>Preview</h2>
            <p>{Text.length>0 ? Text:"Enter something in text box above to preview"}</p>
        </div>
        </>
    )
}
