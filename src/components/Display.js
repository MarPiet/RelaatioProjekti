import React from "react"
import Page1 from "./Page1.js"
import boxesData from "./boxesData.js"
let ctx
let maxX = 1920;
let maxY = 1080;

class Display extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            input: "",
            guess: "",
            tip: "",
            ctx: ""

        }
        this.handleClick = this.handleClick.bind(this)
        this.updateInputValue = this.updateInputValue.bind(this)
        this.handlePress = this.handlePress.bind(this)
        this.handleClickTip = this.handleClickTip.bind(this)
    }
 

    componentDidMount(){
        if(window.innerHeight < 830){
            maxY = 1500
        }
 
        boxesData.forEach((box) =>{
            box.top = box.top * (window.innerHeight/maxY)
            box.left = box.left * (window.innerWidth/maxX)
        })
        const canvas = this.refs.canvas
        ctx = canvas.getContext("2d")
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
        
    }

    clearCanvas(){
        ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    }
 
    updateInputValue(event){
        this.setState({input : event.target.value})
    }

    handleClick(){
        this.setState({guess : this.state.input})
        this.setState({input : ""})
        this.setState({tip : ""})

    }
    handleClickTip(){
        boxesData.forEach((box) =>{
            if(box.pid === this.props.pagenum && box.available && !box.completed)
                this.setState({tip : box.text.charAt(0).toUpperCase() + box.text.substr(1)})
        }) 
    }
    handlePress(e){
        if(e.key === 'Enter'){
            this.setState({guess : this.state.input})
            this.setState({input : ""})
            this.setState({tip : ""})

        }
    }
 
 


    render(){
        return(      
        <div id = "gamedisplay">
            <canvas id="myCanvas" ref="canvas"></canvas>
            <h1 id="tipText">{this.state.tip}</h1>
            <div className="guessBar" id="guessbar">
                <p> {this.state.guess}</p>
                <input type="text"onChange={this.updateInputValue} onKeyPress={this.handlePress} value={this.state.input}></input>
                <button id ="guessBtn" onClick={this.handleClick}>Arvaa</button>   
                <button id="tipBtn" onClick={this.handleClickTip}>Vihje</button>
            </div>
            <Page1 guess={this.state.guess} pagenum={this.props.pagenum} ctx={ctx} clearCanvas={this.clearCanvas.bind(this)}/>
        </div>
   
    
        )
    }
}

export default Display