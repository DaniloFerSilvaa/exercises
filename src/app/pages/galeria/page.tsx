'use client';
import { photos } from "@/helper/FakerHelper";
import Image from "next/image";
import { useState } from "react";

interface GaleriaProps {

}

export default function Galeria(props : GaleriaProps){
     const [getPhoto, setGetPhoto] = useState('')
     const [showModal, setShowModal] = useState(false)

     const openPhoto = (item:string) => {
          setGetPhoto(item)
          setShowModal(true);
     }

     const closeModal = () => {
          setShowModal(false)
     }

    return(
          <>
          <h1 className="text-5xl container max-w-5xl mx-auto mt-4 mb-5">Galeria:</h1>
               <div className=" container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                         photos.map((item, index) => (
                              <div key={index} 
                                        className="cursor-pointer hover:opacity-80"
                                        onClick={() => {openPhoto(item)}} 
                                        >

                                   <img className="w-64 h-64 object-cover m-auto"  src={item} alt="" />
                              
                              </div>
                         ))
                    }
               </div>
               {showModal &&
                    <>
                    <div className=" fixed bg-black/90 top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                              onClick={closeModal}
                    >

                         <img className="" src={getPhoto} alt="" />
                    </div>
                    <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" 
                              onClick={closeModal}
                    >
                         x
                    </div>
                    </>
               }
               
          </>
     )
}