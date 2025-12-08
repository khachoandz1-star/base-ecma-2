import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



function ListPage() {
    const API="http://localhost:3000";

  const[students,setStudents]=useState([""]);

  useEffect(()=>{
    axios.get(`${API}/students`)
    .then((response)=>{
      setStudents(response.data);
      toast.success("Thành công");
    })
    .catch(()=>{
      toast.error("Không thành công");
    })
  },[]);

 const Delete=(id)=>{
  if(window.confirm("Bạn có chắc muốn xóa không ?")){
    axios.delete(`${API}/students/${id}`)
    .then((response)=>{
      setStudents(students.filter((item) => item.id !== id));
      toast.success("Xóa thành công");
    })
    .catch(()=>{
      toast.error("Lỗi xóa không thành công");
    });
  }
 }

 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
               age
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
               subject
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                major
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                action
              </th>

            </tr>
          </thead>

          <tbody>
            {students.map((item,index)=>

            <tr className="hover:bg-gray-50" key={item.id}>
              <td className="px-4 py-2 border border-gray-300">{index+1}</td>
              <td className="px-4 py-2 border border-gray-300">{item.name}</td>
              <td className="px-4 py-2 border border-gray-300">{item.age}</td>
              <td className="px-4 py-2 border border-gray-300">{item.subject}</td>
              <td className="px-4 py-2 border border-gray-300">{item.major}</td>
             
              <td className="px-4 py-2 border border-gray-300">
                <button onClick={()=>{Delete(item.id)}}>Xóa</button>
                <Link to={`/edit/${item.id}`}>Sửa</Link>
                

              </td>
            </tr>


            )}
          
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
