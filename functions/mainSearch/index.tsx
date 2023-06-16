import Data from '@/data.json'

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []
    data.map((item:any, itemIndex:number) => {
        item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {
            inputData = inputData.toLowerCase()
            subcatagory = subcatagory.toLowerCase()

              if(subcatagory.includes(inputData) && inputData != ''){
                filteredData.push(subcatagory);
              } 
              
        })
    })
    
    return filteredData
    
}

export default MainSearch
