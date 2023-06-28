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
      //console.log(data)
      setSearchResult(data)
    }
    
  }, [searchText])


  return (
    <>
      <div className='w-full flex justify-center items-start bg-blue-200'>
        <form className='m-2 p-4 w-full flex flex-col justify-start items-center' action="">
          <label className='font-bold text-4xl m-2 p-2 text-gray-900' htmlFor="search">Search Text Box</label>
          <input type="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)} className='p-4 rounded-md w-1/2 shadow-md border-blue-300 border-2' name="search" id="search" />
        </form>
      </div>
      <div className=" w-full h-full p-4">
        {
          
          searchResult && searchResult.map((item:any, index:number) => {
            return (
              <div key={index} className='bg-gray-900 p-1 m-2 rounded-md shadow-md'>
                
                <div className='font-bold text-xl text-white'> 
                  <div className="p-1 gap-2 flex">
                  <span>{index} - </span> 
                    <div className="bg-gray-700">
                      Avarage : <span className="bg-red-700">{item.searchAvarage}</span>
                    </div>    
                    <div className="bg-gray-700">
                      Term : <span className="bg-red-700">{item.searchTerm}</span>
                    </div>  
                  </div>             
                </div>
              </div>
            )
          })
        }
      </div>
      
    </>
  )
}

export default SearchBar
