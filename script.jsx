
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
const databaseSplitWords = async (data, input) => {

    const subData  = []
    const inputData  = []

    const point = []

    await data.map((item) => {
        let counter = 0;
        item.subcategories.map((sub) => {
            subData.push(sub.split(' '))
        })
    })

    await input.map((item) => {
        inputData.push(item.sentence.split(' '))
    })
    
    subData.map((item, index) => {
        item.map((subItem, subIndex) => { // her cümlenin içini tek tek gezer
            inputData[0].map((inputItem, inputIndex) => { // inputun içindeki cümleleri tek tek gezer
                const chooseSubItem = subItem.toLowerCase();
                const chooseInputItem = inputItem.toLowerCase();

                if(chooseSubItem.includes(chooseInputItem)){ // eğer inputtaki cümle ile database cümlesi aynı ise
                    console.log(chooseSubItem);
                    console.log("cümle sırası :" + index);
                    console.log("kelime sırası :" + subIndex);
                    console.log("inputIndex :" + inputIndex);
                    console.log("##############################")
                }
            })
        })
    })

}



// uygulama
const App = async () => {
    const database = await fetchData()
    const input = await fetchInput()
    
    const databasewords = await databaseSplitWords(database, input)
    console.log(databasewords);
  
}

App();


