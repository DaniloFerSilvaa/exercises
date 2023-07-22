'use client';
import { questions } from "@/data/quiz"
import { Quiz } from "@/types/types"
import { useState } from "react";

export default function Quiz(){
const [selectAnswers, setSelectAnswerst] = useState<number | null>(null) 
const [currentQuestion, setCurrentQuestion] = useState(0);
const [finishQuiz, setFinishQuiz] = useState(false);
const [countAnswer, setCountAnswer] = useState(0);

     const selectQuestion = (idx:number) => {
          if (selectAnswers === null) {
               setSelectAnswerst(idx);
               setSelectAnswerst(c => {
                    if (c === questions[currentQuestion].answers) {
                         setCountAnswer(countAnswer + 1);
                    }
                    return c;
               })
               setTimeout(() => {
                    onAnswer(idx);
                    setSelectAnswerst(null);
               }, 1500);
     }
          
     }
     const onAnswer = (idx:number) => {
          if ((currentQuestion + 1) < questions.length) {
               setCurrentQuestion(currentQuestion + 1); 
               return
          }
          
          setFinishQuiz(true);

     } 

     const resetGame = () => {
          setSelectAnswerst(null);
          setCurrentQuestion(0);
          setCountAnswer(0);
          setFinishQuiz(false);

     }

     return(
          <>
               <section className="flex w-screen h-screen justify-center items-center">
                    <div className="w-1/3 h-2/3 bg-white rounded-3xl ">
                         <div 
                              className="text-black flex flex-col justify-between h-full"
                         >
                              <div className="flex flex-col">
                                   <h3 className="border-b border-slate-900 p-5 font-semibold text-sm">Pergunta sobre {questions[currentQuestion].theme}</h3>

                                   <h1 className="p-3 font-semibold text-xl">{questions[currentQuestion].id}. {questions[currentQuestion].question}</h1>
                                   <ul className="flex flex-col w-full mt-2">
                                        {
                                             questions[currentQuestion].options.map((itm,idx) => (
                                                  <li
                                                       key={idx}
                                                       className={`p-2 mx-4 my-1 font-medium text-lg bg-blue-100 border-blue-300 border-2 rounded-md 
                                                       ${ selectAnswers !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-70' }
                                                       ${ selectAnswers !== null && selectAnswers === questions[currentQuestion].answers && selectAnswers === idx && 'bg-green-100 border-green-300' }
                                                       ${ selectAnswers !== null && selectAnswers !== questions[currentQuestion].answers && selectAnswers === idx && 'bg-red-100 border-red-300' }
                                                       `}
                                                       onClick={() => selectQuestion(idx)}
                                                  >
                                                       {itm}
                                                  </li>
                                             ))
                                        }
                                   </ul>
                              </div>
                              <div className="p-5 border-t border-slate-900"> 
                                   {currentQuestion + 1} de {questions.length} pergunta{(questions.length === 1) ? '' : 's'}
                              </div> 
                         </div>
                    </div>
               </section>  
               { finishQuiz &&
               <div className="fixed top-0 left-0 w-screen h-screen">
                    <div className="flex w-full h-full justify-center items-center"> 
                         <div className="bg-white text-black rounded-3xl w-1/2 h-2/3 p-5 flex flex-col justify-around">
                              <h1 className="text-7xl text-center font-semibold ">FIM DE JOGO</h1>
                              <div className="text-center ">Você acertou {countAnswer} Resposta{countAnswer===1 ? '' : 's'} 🥳🥳</div>
                              <button className=" p-4 text-4xl bg-blue-100 border-blue-300 border-2 ml-auto mr-auto"
                                   onClick={resetGame}
                              >Reiniciar jogo</button>
                         </div>
                    </div>
               </div>
               }
          </>

    )
}