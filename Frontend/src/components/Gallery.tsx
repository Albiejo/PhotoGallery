import { useEffect , useState } from 'react';
import {fetchPhotos , deletePhoto} from '../api.js';
import { Photo } from '../types';


const Gallery = () => {

  const [photo , setPhoto] = useState<Photo[]>([])
  const [search , setSearch] = useState<string>('')


  useEffect(()=>{
    fetchPhotos().then(({data})=> setPhoto(data))    
    console.log("fetching photos",photo);
  },[ ])


  const handleDelete  = async (id:string) =>{
    await deletePhoto(id);
    setPhoto(photo.filter((p)=>p._id !== id))
  }

  return (
    <div>
      <input 
      type='text'
      placeholder="search"
      onChange={(e)=>setSearch(e.target.value)}
      className='border p-2 w-1/2 rounde mb-2'
      />
      <div className='grid grid-cols-3 gap-4'>
    {
      photo.filter((p)=>p.category.includes(search))
      .map((p)=>(
        <div key={p._id} className='relative'>
          <img src={p.filepath} alt={p.filename} className='w-full h-auto rounded-lg'/>
                <button
                onClick={()=>handleDelete(p._id)}
                className="asolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-lg">Delete
                </button>
        </div>
       ))
    }

      </div>
    </div>
  )
}

export default Gallery