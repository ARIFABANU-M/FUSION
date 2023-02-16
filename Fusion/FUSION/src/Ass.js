import './test.css';
import React, { useEffect, useState } from 'react';
import{BrowserRouter, Route,Routes,Router} from 'react-router-dom';
import Test from './Test';
import {db} from './firebase-config';
import {collection,addDoc} from 'firebase/firestore'

const questions = [
    {
        questionText: 'What is the capital of France?',
  no:1,
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
        questiontag:'Science',
        bloomslevel:'create'
    },
    {
        questionText: 'Who is CEO of Tesla?',
        no:2,
  answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
        questiontag:'Science',
        bloomslevel:'create'
    },
    {
        questionText: 'The iPhone was created by which company?',
        no:3,
  answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
        questiontag:'Science',
        bloomslevel:'apply'
    },
    {
        questionText: 'How many Harry Potter books are there?',
        no:4,
  answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
        questiontag:'Science',
        bloomslevel:'evaluate'
    },
];


function Ass() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const[mins,setmins] = useState(0);
    const[sec,setsecs] = useState(5);
    const userCollectionRef = collection(db,"Asses")


    var timer;
useEffect(()=>{
 timer = setInterval (()=>{
    setsecs(sec-1);
    if(sec===0){
        setmins(mins-1);
        setsecs(59);
    }
 },1000)
 return () => clearInterval(timer) 

})

	const handleAnswerOptionClick = async(answerOption) => {
		if (answerOption.isCorrect) {
			setScore(score + 1);
		}
    console.log(currentQuestion)
    await addDoc(userCollectionRef,{blooms:questions[currentQuestion].bloomslevel,id:questions[currentQuestion].no,tag:questions[currentQuestion].questiontag});
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    console.log(nextQuestion)
  };

  return (
        <div>
<nav class="topnav">
        <a class="active" href="###">Fusion</a>
    </nav>
<div className='Container'>
    <h1 className='headO'>Question Overview</h1>
<button className='btn-rp' onClick={()=>setCurrentQuestion(0)}>1</button>
<button className='btn-rp' onClick={()=>setCurrentQuestion(1)}>2</button>
<button className='btn-rp' onClick={()=>setCurrentQuestion(2)}>3</button>
<button className='btn-rp' onClick={()=>setCurrentQuestion(3)}>4</button>
<button className='btn-rp'>5</button>
<button className='btn-rp'>6</button>
<button className='btn-rp'>7</button>
<button className='btn-rp'>8</button>
<button className='btn-rp'>9</button>
<div>
<div className='cont-2'>
<button className='btn-rp1'></button><span className='spn'>Answered</span>
<button className='btn-rp3'></button><span className='spn' >Not Viewed</span><br></br>
<button className='btn-rp2'></button> <span className='spn' >Not Answered</span>
</div>
<button className='btn-fin'>SUBMIT</button>
</div>
</div>
<div>
    <div className='subh'>
        <h1 className='ass'>Science Assessment-1</h1>
        <h5 className='ass-1'>{mins}m:{sec}s Left</h5>
    </div>
    <div className='app'>
			{showScore ? <button className='btn-fin'>FINISH</button> : 
				<>
					<div className='question-section'>
						
						<div className='question-count'>{currentQuestion+1} . {questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
              <div>
							<div className='btn-opt'>
              <button className='btn-ans' onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
              </div>
          	</div>
            ))}

					</div>
			
            	</>
			}
		</div>

    </div>
{(mins === 0) && <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>}
    </div>
  )
}

export default Ass;


