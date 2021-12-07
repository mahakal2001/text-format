import React, { useState } from 'react';

export default function TextForm(props) {
    const upperbtn = () =>{
        // console.log("fuck boy"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase","success");
    }

    const lowerbtn = () =>{
        // console.log("fuck boy"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase","success");
    } 

    const clearBtn = () =>{
        // console.log("fuck boy"+text);
        let newText = "";
        setText(newText);
        props.bhim("Clear the Screen","success");
    }

    const extraSpace = () =>{
        // console.log("fuck boy"+text);
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove the Extra Space","success");
    }


    const handelbtn = (event) =>{
        // console.log("Onchange");
        setText(event.target.value)
    }
    

    const [text,setText] = useState('');

    return (
        <>
        <div className="container my-5">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelbtn} id="TextArea" placeholder="Enter the text" rows="3"></textarea>
            </div> 

            <div className="btnstyle">
                <button className="btn btn-primary" onClick={upperbtn}>Convert to Uppercase</button>           
                <button className="btn btn-primary" onClick={lowerbtn}>Convert to Lowercase</button>           
                <button className="btn btn-primary" onClick={clearBtn}>Clear Text</button> 
                <button className="btn btn-primary" onClick={extraSpace}>Remove Extra Space</button> 

            </div>   

            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} Character</p>
                <p> {0.008 * text.split(" ").length} Minutes read </p>
                <h2>Previews</h2>
                <p>{text}</p>
            </div>       
        </div> 
            
        </>
    )
}


