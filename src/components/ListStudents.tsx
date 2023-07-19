import { Student } from "@/types/types"

interface PropsStudents {
     students:Student[]
}
export default function ListStudents({ students }: PropsStudents){
    return(
     <>
          <table className="w-full border border-gray-700 rounded-md overflow-hidden text-white" >
               <thead>
                    <tr className=" text-left border-b border-gray-700 bg-gray-800">
                         <th className="p-3">Name</th>
                         <th className="p-3">Status</th>
                         <th className="p-3">Grade 1</th>
                         <th className="p-3">Grade 2</th>
                         <th className="p-3">Final Grade</th>
                    </tr>
               </thead>
               <tbody>
                    {
                         students.map((item, index) => (
                              <tr key={index}>
                                   <td className="flex text-white p-3">
                                        <img className="w-12 rounded-full object-cover" src={item.avatar} alt="" />
                                        <div className=" flex flex-col pl-3">
                                             <h2 className=" font-medium">{item.name}</h2>
                                             <h4 className=" font-light text-sm">{item.email}</h4>
                                        </div>
                                   </td>
                                   <td>
                                        {item.active && <div className=" text-center inline-block p-2 bg-green-700 rounded-lg">Active</div>}
                                        {!item.active && <div className="text-center inline-block p-2 bg-red-700 rounded-lg">Inactive</div>}
                                   </td>
                                   <td>{(item.grade1).toFixed(1)}</td>
                                   <td>{(item.grade2).toFixed(1)}</td>
                                   <td className="font-bold">{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--'}</td>
                              </tr>
                         ))
                    }
               </tbody>
          </table>
     </>
    )
}