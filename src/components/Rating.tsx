interface RatingProps {
     nota: number
}
export default function Rating({nota} : RatingProps){



     if (nota < 1) nota = 1;
     if (nota > 5) nota = 5; 


     const notaInt = Math.floor(nota);

     const emogisInfo:string[] = ['', '😭', '🙁', '😐', '🙂', '😀']

     const badEmogi:string = '🙁'
     const neutralEmogi:string = '😐'
     const happyEmogi:string = '😀'
     



     const emogis = emogisInfo[notaInt].repeat(notaInt) + '😶'.repeat(5 - notaInt);






    return(
          <>
               <div className="flex ml-5 mt-3 text-white font-medium">
                    <h1 className="pl-3 pr-3 bg-slate-500 mr-1">{nota.toFixed(1)}</h1>
                    { nota &&
                         <span>{emogis}</span>
                    }
               </div>
          </>
    )
}