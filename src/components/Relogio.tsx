"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, useRef } from 'react';

export default function Relogio() {
     const [time, setTime] = useState(''); 
     const [posicao, setPosicao] = useState({ x: 0, y: 770 });
     const [arrastando, setArrastando] = useState(false);
     const posicaoInicialRef = useRef({ x: 0, y: 0 });

     let date = new Date()
     let horas:number = date.getHours();
     let greeting:string = '';


   const fulltime = () => {
        let fulltime = new Intl.DateTimeFormat('pt-br', {timeStyle: 'long', hour12: false}).format();
          setTime(fulltime);
     }
     setInterval(fulltime, 1000)

     if (horas >= 0 && horas < 12) {
          greeting = 'BOM DIA 😎'
     } else if (horas >= 12 && horas < 18) {
          greeting = 'BOA TARDE 🤗'
     } else if (horas >= 18) {
          greeting = 'BOA NOITE 😴'
     }
     
     //MOVE ELEMENT
     useEffect(() => {
          const handleMouseMove = (event: MouseEvent) => {
            if (arrastando) {
              const deltaX = event.pageX - posicaoInicialRef.current.x;
              const deltaY = event.pageY - posicaoInicialRef.current.y;
              setPosicao({ x: posicao.x + deltaX, y: posicao.y + deltaY });
              posicaoInicialRef.current = { x: event.pageX, y: event.pageY };
            }
          };
      
          const handleMouseUp = () => {
            setArrastando(false);
          };
      
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
      
          return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
        }, [arrastando, posicao.x, posicao.y]);

        const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
          setArrastando(true);
          posicaoInicialRef.current = { x: event.pageX, y: event.pageY };
        };

    return(
          <div className={`text-sm flex-col text-slate-200 absolute text-center pt-5 select-none p-5`}
          style={{
               position: 'absolute',
               left: posicao.x,
               top: posicao.y,
               cursor: arrastando ? 'grabbing' : 'grab',
             }}
          onMouseDown={handleMouseDown}
          >
               <div>
                    <h1>{time}</h1>
                    <h3 className="text-sm">{greeting} </h3>
               </div>
          </div>
    )
}
