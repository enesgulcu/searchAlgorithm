
// databse üzerinden sistemdeki arama sonuçlarını çekmek için kullanılan fonksiyon
const fetchData = async () => {
    try {
       const data = await fetch('data.json')
       if(data){
              return data.json()
       }
    } catch (error) {
        
    }
}

// input ile girilen verileri çeken fonksiyon
const fetchInput = async () => {
    try {
       const data = await fetch('input.json')
       if(data){
              return data.json()
       }
    } catch (error) {
        
    }
}

// verileri kelime kelime ayıran fonksiyon
const splitWords = async (data) => {
    
    data.map((item) => {
        console.log(item.sentence.split(' '))
    })
}


// uygulama
const App = async () => {
    const data = await fetchData()
    const input = await fetchInput()

    splitWords(input) 
  
}

App();


