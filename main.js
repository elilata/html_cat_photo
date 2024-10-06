
async function getData() {
    const url = "./catslove.json";
    let json = [];
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
    return json;
}

function init() {
    console.log("Page loaded");
    
    let c = 0;
    const a = 5;
    const b = 6;
    c = a + b;
    
    console.log(`${a} + ${b} = ${c}`);
    
    const button = document.querySelector("#btnlike");
    const likeinput = document.querySelector("#likeinput");
    const catsloveList = document.querySelector("#catslove");
    
    //function populateList(parent) { 
    //}
    
    const populateList = async (parent) => {
        clData = await getData();
        
        console.log("Populating list");
        catsloveList.innerHTML = "";
        
        clData.forEach(str => {
            const item=document.createElement("li");
            item.textContent=str;
            catsloveList.appendChild(item);
        });
    };
    
    
    button.addEventListener("click", (event) => {
        //button.textContent = `Click count: ${event.detail}`;
        populateList(catsloveList);
    });

    likeinput.addEventListener("change", evt => {
        const str = evt.target.value;
        likeinput.value = "";

        console.log(`You wrote: ${str}`);

        const item=document.createElement("li");
        item.textContent=str;
        catsloveList.appendChild(item);
    });
}

window.addEventListener("load", init);
