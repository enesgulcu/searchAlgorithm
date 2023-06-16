'use client'
import { useState, useEffect } from "react"
import MainSearch from "@/functions/mainSearch"

const SearchBar:React.FC = () => {

  const [searchText, setSearchText] = useState<string>('')
  const [searchResult, setSearchResult] = useState<any>([])

  // SEARCHbAR HER DEĞİŞTİĞİNDE BURASI TETİKLENECEK VE ÇALIŞACAK
  useEffect(() => {
    
    const  data = MainSearch(searchText);
    if(data){
      setSearchResult(data)
    }
    
  }, [searchText])

  return (
    <>
      <div className='w-full flex justify-center items-start bg-blue-200'>
        <form className='m-2 p-4 w-full flex flex-col justify-start items-center' action="">
          <label className='font-bold text-4xl m-2 p-2 text-gray-900' htmlFor="search">Search Text Box</label>
          <input value={searchText} onChange={(e)=> setSearchText(e.target.value)} className='p-4 rounded-md w-1/2 shadow-md border-blue-300 border-2' type="text" name="search" id="search" />
        </form>
      </div>


      <div className=" w-full h-full p-4">
        {
          searchResult.map((item:any, index:number) => {
            return (
              <div key={index} className='bg-gray-900 p-1 m-2 rounded-md shadow-md'>
                <p className='font-bold text-xl text-white'> <span>{index} -</span> {item}</p>
              </div>
            )
          })
        }
      </div>
      
    </>
  )
}

export default SearchBar
