import React from "react"
import "./style.css"
import Header from "./Header.js"
import Sidebar from "./Sidebar"
import Display from "./Display"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            page: 1
        }
    }
    componentDidMount(){
        document.title = "Relaatio"
    }
  
    changePage(pagenum){
        this.setState({page : pagenum})
    }
    

    render(){
        return( 
            <div>
                <Header />
                <Sidebar pagenum = {this.state.page} changePage={this.changePage.bind(this)}/>
                <Display pagenum = {this.state.page}/>
         
             
            
     
             

                </div>
        )
    }
}

export default App