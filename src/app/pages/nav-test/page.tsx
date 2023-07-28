'use client';
import { navTests } from "@/data/navTests";
import { useState } from "react"



export default function NavTest(){
     const [selectLi, setSelectLi] = useState<number|null>(null)
     const styleLi = `p-3`

     const fisthandlerLi = (n:number) => {
          setSelectLi(n);

     }
     const outHandlerLi = (n:number) => {
          setSelectLi(null);
     }
    return(
     <>
          <div className="w-screen h-screen">
               <nav className="h-16 w-full container m-auto bg-lime-900 flex items-center">
                    <ul className=" flex justify-around items-center w-full">
                         {
                              navTests.map((item, index) => (
                                   <li key={index} className={`${styleLi} cursor-pointer`}
                                        onMouseMove={() => fisthandlerLi(index)}
                                        onMouseOut={() => outHandlerLi(index)}
                                   >
                                        {item.name}
                                        <div className={` bg-red-900 w-96 opacity-100 transition-all ease-linear cursor-auto
                                             ${ selectLi !== null && selectLi === index ? 'h-[500px] absolute' : 'h-0 hidden' }
                                        `}>

                                        </div>
                                   </li>
                              ))
                         }
                    </ul>
               </nav>
          </div>
     </>
    )
}