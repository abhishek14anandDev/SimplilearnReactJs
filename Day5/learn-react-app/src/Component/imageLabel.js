import React from 'react';

class ImageLabel extends React.Component{

    render(){

        var p1 = require("../Content/Images/Logo1.jpg");
        var p2 = require("../Content/Images/Logo2.jpg");
var title1 = "My company logo";
var title2 = "My wife company logo";
        return<div>
            <h1>Image Demo1</h1>
            <img src={p1} title={title1}></img>
            <img src={p2} title={title2}></img>
        </div>
    }
}

export default ImageLabel;