const getdata = async ()=> {
    try {
        const response=await fetch("https://v2.jokeapi.dev/joke/Any");
        const data=await response.json();
        display_data(data);
        
    } catch (error) {
        console.log("error in fetching api: ",error);
        
    }
}

const display_data= (data)=>{
    try {
        let joke=document.getElementById("joke");
        joke.innerText=(
            `${data.setup}
            ${data.delivery}`
        );
        let chr_count=document.getElementById("chr_count");
        let chr=data.setup+data.delivery;
        let chr_len=chr.length;
        chr_count.innerText=(`Character Count= ${chr_len}`);
        
    } catch (error) {
        console.log("error in displaying data: ",error)
        
    }
}

const cleardata =()=>{
    try {
        let joke=document.getElementById("joke");
        joke.innerText=(
            `Press the Button for the Joke`
        );
        let chr_count=document.getElementById("chr_count");
        chr_count.innerText=(`Character Count = 0`);

        
    } catch (error) {
        console.log("error in clearing data ",error);
    }
}