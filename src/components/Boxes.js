import React from "react"

class Boxes extends React.Component{
    constructor(){
        super()
        this.state = {
            id: 0,
            className: "q",
        }
    }
    
    displayString(str){
        let returnstr = "..............................";
        returnstr = returnstr.substr(0, str.length);
        return returnstr + " (" + str.length + ")"
    }
    displayCompleted(str){      
        return str.charAt(0).toUpperCase() + str.substr(1);
    }


    render(){
        if(this.props.available === true){
            return(
            <div style={{top: this.props.top, left: this.props.left}} className="q" id={this.props.id}>
                {this.props.completed ? this.displayCompleted(this.props.text)  : this.displayString(this.props.text)}
                </div>
                )            
        }
        else
            return(null)
      
    }
}


export default Boxes 