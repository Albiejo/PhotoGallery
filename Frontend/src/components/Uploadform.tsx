import {uploadPhoto} from '../api.js'
import { useState } from 'react'

const Uploadform = () => {

     const [category, setCategory] = useState('');
     const [file, setFile] = useState<File | null >(null);



     const handleupload =()=>{

     }



     const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if(files){
         setFile(files[0]);
      }  else{
         setFile(null);
      }
     }


     const handleCategoryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);

     }

  return (
    <div className='justify-center items-center flex flex-col gap-4'>
       <form onSubmit={handleupload} className='p-4 flex gap-2'>
        <input  type='file' onChange={(e)=>handleFileChange(e)} required />

        <input type='text' placeholder='category' onChange={(e)=>handleCategoryChange(e)} required />

        <button type='submit'  className='bg-blue-500 text-white px-4 py-2'>Upload</button>
        </form> 
    </div>
  )


}


export default Uploadform