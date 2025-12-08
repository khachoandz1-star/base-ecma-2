import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function EditPage() {
  const API="http://localhost:3000";

  const [name,setName]=useState("");
   const [age,setAge]=useState("");
    const [subject,setSubject]=useState("");
     const [major,setMajor]=useState("");
     

  const submit=(e)=>{
    e.preventDefault();

    axios.post(`${API}/students`,{
      name,
      age,
      subject,
      major,
    
    })
    .then((response)=>{
      toast.success("Thêm thành công");
    })
    .catch(()=>{
      toast.error("Thêm sản phẩm không thành công");
    })
  }


   return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <form className="space-y-6" onSubmit={submit} > 
        {/* Text input */}
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
           
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

         <div>
          <label htmlFor="text" className="block font-medium mb-1">
            age
          </label>
          <input
            type="text"
            value={age}
             onChange={(e)=> setAge(e.target.value)}
           
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

         <div>
          <label htmlFor="text" className="block font-medium mb-1">
            subject
          </label>
          <input
            type="text"
            value={subject}
               onChange={(e)=> setSubject(e.target.value)}
           
            
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

         <div>
          <label htmlFor="text" className="block font-medium mb-1">
            major
          </label>
          <input
            type="text"
            value={major}
              onChange={(e)=> setMajor(e.target.value)}
           
            
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        

        {/* Submit button */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPage;
