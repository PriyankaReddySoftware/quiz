import React, { Component } from 'react'
import BookTraverse from './BookTraverse'
import './QuizApp.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { shuffle, sample } from 'underscore'
/**
* @author
* @class QuizApp
**/

class QuizApp extends Component {

    constructor(props) {
        super(props)
        this.state = {

            authorBooks: this.turn(),
        }

        this.turn = this.turn.bind(this)

    }

    turn = () => {
        const [...booksWritten] = this.props.QuesItem.books

        const threeRandomBooks = (this.props.allBooks.filter(item => item != booksWritten)).slice(0, 3);
        const answer = sample(booksWritten, 1);

        const FourBooks = [...threeRandomBooks, answer]
        return {
            Books: (shuffle(FourBooks).map((title) => <BookTraverse title={title} answer={answer} key={title} QuesItem={this.props.QuesItem} highlight={this.props.highlight} />)),
            Author: this.props.QuizQues.find((Author) =>
                Author.books.some((title) =>
                    title === answer))
        }
    }


    render() {

        return (
            <form>
                <div className="row turn">
                    <div className="col-3">
                        <img src={this.props.QuesItem.imageUrl} className="authorimage" alt="Author" />
                    </div>
<div className="options">
                    <button className=" list-group-item col-12" name='answ' value={this.state.authorBooks.Books} QuesItem={this.props.QuesItem}  >{this.state.authorBooks.Books}</button>
                    </div>
                </div >
            </form >
        )
    }
}

export default QuizApp