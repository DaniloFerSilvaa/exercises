import { clients } from '@/helper/FakerHelper';


export default function FakerJs(){
        
    return(
        <>
         <div>
               <ul className=' flex flex-col'>
                    {clients.map((item, index) => (
                         <li key={index} className='p-3'>
                              <img src={item.avatar} alt="" className=' w-40 h-40 object-cover rounded-full' />
                              <h1>{item.firstName} {item.lastName} - {item.titleJob}</h1>
                         </li>
                    ))

                    }
               </ul>
         </div>
        
        </>
    )
}