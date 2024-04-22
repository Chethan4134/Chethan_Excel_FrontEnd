import React,{Component} from "react";

// class Heading extends Component {
//     constructor(props) {
//         super(props)
//         this.state={
//             name:""
//         }
//     }
//     render() {
//         return(
//             <div>Heading, {this.props.mark}</div>
//         )
//     }
// }

class Heading extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            name : "jhon"
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick()
    {
        this.setState(
            {...this.state,name:"Oliver"}
        )
    }
    render(){
        return(
            <div>   <h1>{this.state.name}</h1>
            <button onClick={this.handleOnClick}>click</button>
            </div>
           )
       }
    }
 


export default Heading