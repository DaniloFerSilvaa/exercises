"use client"; // This is a client component 👈🏽
import Relogio from "@/components/Relogio";
import { Pageslink } from "@/data/workouts";
import Link from "next/link";


export default function Home() {


    return(
          <main className="text-white">
               {//<Rating nota={0.6} />
                    //<ListStudents students={students}/>
                    //<Link href="/pages/about"> Ir para pagina about</Link>
                    //<FakerJs/>
               }
               <h1 className="text-5xl ml-3 mt-3 font-semibold">Exercicios:</h1>
               <ul className="flex flex-col m-2">
                    {
                         Pageslink.map((item, index) => (
                              <Link className="p-3 border border-neutral-900 m-2 hover:border-neutral-300" key={index} href={`pages/${item.link}`}> {item.name}</Link>
                         ))
                    }
               </ul>


               <Relogio/>
          </main>
    )
}
