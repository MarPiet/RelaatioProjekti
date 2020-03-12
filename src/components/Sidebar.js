import React from "react"
let buttons = document.getElementsByTagName("button");

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            page: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(value){
        this.setState({page : value}, () => this.props.changePage(this.state.page));     
        for(let i=0; i<buttons.length; ++i){
            buttons[i].style.backgroundColor = "";

            if(buttons[i].textContent == value){
                buttons[i].style.backgroundColor = "#3D9970";
            }
        } 
     
    }

    render(){
        return(
            <div id= "sidebar">
                <div id = "map">
                    <button onClick={() => this.handleClick(1)}>1</button>
                    <button onClick={() => this.handleClick(2)}>2</button>
                    <button onClick={() => this.handleClick(3)}>3</button>
                    <button onClick={() => this.handleClick(4)}>4</button>
                    <button onClick={() => this.handleClick(5)}>5</button>
                    <button onClick={() => this.handleClick(6)}>6</button>
                    <button onClick={() => this.handleClick(7)}>7</button>
                    <button onClick={() => this.handleClick(8)}>8</button>
                    <button onClick={() => this.handleClick(9)}>9</button>
                </div>
    
        </div>
        )
    }
}

export default Sidebar