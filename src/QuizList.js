import React, { Component } from 'react'
import 'bootstrap'
import quizData from './QuizData'
import QuizApp from './QuizApp'
import { shuffle, sample } from 'underscore'
/**
* @author
* @class QuizList
**/

function QuizList() {


    const allBooks = quizData.reduce(function (p, c) {

        return p.concat(...c.books);
    }, []);
    const resetQuiz = sample(quizData, 1)
    const QuizTraverse = resetQuiz.map(quesItem =>
        <QuizApp key={quesItem.name} QuesItem={quesItem} allBooks={allBooks} QuizQues={resetQuiz} />
    )


    return (
        <div className='row'>
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
            
                <p>Select the book written by the author shown</p>
                <div class='list-group-item'>
                    <p>{QuizTraverse}</p>

                </div>
            </div>
        </div>
    )
}




export default QuizList