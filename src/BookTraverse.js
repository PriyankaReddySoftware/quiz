import React, { Component } from 'react'
import { useState } from 'react'


/**
* @author
* @class BookTraverse
**/

class  BookTraverse extends Component {
    constructor()
    {
        super();
        this.state = {
            highlight : 'white',
            ansSelected : 'false'
        }
        this.handleclick = this.handleclick.bind(this);
    }
//     var [highlight, setHighlight] = useState('white');
//     var [ansSelected, setAnsSelected] = useState(false);
//     // function Restart() {
//     //     return (window.location.reload())
//     // }
   handleclick=(event) =>  {
       
       if (event.target.value == this.props.answer) {
            this.setState({highlight : 'green'})
            event.target.value = ''
           
            alert('correct'+ '  '+  'books written by ' + ' ' + this.props.QuesItem.name + ' are ' + this.props.QuesItem.books);

        }
        else {
            event.preventDefault()
            
           this.setState ({ansSelected : true})
              alert('wrong'+ '  '+  'books written by ' + ' ' + this.props.QuesItem.name + ' are ' + this.props.QuesItem.books);
              
           this.setState({highlight : 'red'})
            event.target.value = ''

        }
      
    }
render(){
    return (
        <form className='answer' style={{ backgroundColor: this.state.highlight }} >


            <input className=" list-group-item col-12 " style={{ backgroundColor: this.state.highlight   }} type='button' name='checkboxtitle' value={this.props.title} onClick={this.handleclick} />
        </form>
    )
    }
}



export default BookTraverse;