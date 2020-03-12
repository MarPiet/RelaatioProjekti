import React from "react"
import Boxes from "./Boxes.js"
import boxesData from "./boxesData"
let c = document.getElementsByTagName("canvas");
let boxes = document.getElementsByClassName("q");
let maxX = 1920;
let maxY = 937;


//pass input and selected page, check if available
class Page1 extends React.Component{
    constructor(props){
        super(props)      
        this.state = {
            guess: "",
            pagenum: 1,
            ctx: this.props.ctx
        }
    }

    getBoxes(pagenum){
        let allboxes = boxesData.map(p1box => <Boxes  id ={p1box.id}page={p1box.pid} top={p1box.top} left={p1box.left} available = {p1box.available} completed = {p1box.completed} text ={p1box.text}/>)   
        let p1boxes = allboxes.filter(box => box.props.page === 1)
        let p2boxes = allboxes.filter(box => box.props.page === 2)
        let p3boxes = allboxes.filter(box => box.props.page === 3)
        let p4boxes = allboxes.filter(box => box.props.page === 4)
        let p5boxes = allboxes.filter(box => box.props.page === 5)
        let p6boxes = allboxes.filter(box => box.props.page === 6)
        let p7boxes = allboxes.filter(box => box.props.page === 7)
        let p8boxes = allboxes.filter(box => box.props.page === 8)
        let p9boxes = allboxes.filter(box => box.props.page === 9)

        switch(pagenum){
            case 1:
                return (         
                    <div>
                        {p1boxes}                
                    </div>   
                )
            case 2:
                return (
                    <div>
                        {p2boxes}  
                    </div>   
                )  
            case 3:
                return(
                    <div>
                        {p3boxes}
                    </div>
                )   
            case 4:
                return(
                    <div>
                        {p4boxes}
                    </div>
                )     
            case 5:
                return(
                    <div>
                        {p5boxes}
                    </div>
                )
            case 6:
                return(
                    <div>
                        {p6boxes}
                    </div>
                )
            case 7:
                return(
                    <div>
                        {p7boxes}
                    </div>
                )
            case 8:
                return(
                    <div>
                        {p8boxes}
                    </div>
                )
            case 9:
                return(
                    <div>
                        {p9boxes}
                    </div>
                )
          
        }
    }
 
    componentDidMount(){
        console.log(boxesData[0])
        if(this.props.pagenum === 1 && this.props.ctx != null)
            this.drawLines(boxesData[0].id, boxesData[1].id)
    }

    componentDidUpdate(prevProps){
        if(this.props.pagenum !== prevProps.pagenum)
            this.setState({pagenum : this.props.pagenum}, this.loadPage())
        if(this.props.guess !== prevProps.guess){
            this.setState({guess : this.props.guess}, this.checkGuess())
        }
        if(prevProps.ctx !== this.props.ctx) {
            this.setState({ctx: this.props.ctx});
          }
    }

    loadPage(){
        this.props.clearCanvas();
        boxesData.forEach((box) =>{
            if(box.available && box.pid === this.props.pagenum){
                box.conn.forEach((conn) =>{
                    boxesData.forEach((connboxes)=>{
                        if(connboxes.id === conn && connboxes.available)
                            this.drawLines(box.id, conn)
                    })
                })
            }

        })
    }

    //if guess is correct, fill in text, open connected boxes and draw connection lines
    checkGuess(){  
        console.log()
        console.log(window.innerHeight) 

        boxesData.forEach((g) =>{
            if(g.text === this.props.guess && g.available && g.pid === this.props.pagenum){
                g.completed = true;
                //check for completed box's connections, make them available and draw lines to them         
                g.conn.forEach((conn) =>{
                    boxesData.forEach((box) =>{
                        if(box.id === conn){
                            box.available = true;
                            if(box.pid === this.props.pagenum){
                                this.drawLines(g.id, conn);

                            }

                            //check for available connections from newly opened boxes
                            box.conn.forEach((q)=>{
                                boxesData.forEach((connectedconns) =>{                          
                                    if(connectedconns.id === q && connectedconns.available && connectedconns.pid === this.props.pagenum)
                                        this.drawLines(conn, connectedconns.id)
                             
                                })
                             
                            })
                        }
                    })
                })
            }
        })
    }

    drawLines(startBoxID, targetBoxID){
        let startBox;
        let targetBox;
        for(let i = 0; i<boxesData.length; ++i){
            if(boxesData[i].id == startBoxID)
                startBox = boxesData[i]
            if(boxesData[i].id == targetBoxID)  
                targetBox = boxesData[i]
        }
        if(startBox.pid === targetBox.pid){
            let ctx = this.props.ctx;   
            ctx.beginPath();
            ctx.moveTo(startBox.left+50,startBox.top+30);
            ctx.lineTo(targetBox.left+50,targetBox.top+30);
            ctx.stroke();
        }

    }
    

    render(){
        return(
    
            <div>
                {this.getBoxes(this.props.pagenum)}
            </div>  
        )
    }
}





export default Page1
