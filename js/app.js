const dot = document.querySelector('.dotm');
let numOfMovesSelected = 50;

let i = 0 ;
let currPosition = 0;

function fire() {
    const interval = setInterval(()=>{
        ++i;
        
        
        
        // console.log(nextLocation, `.item_${i}`)
        if(i >= 52){
            if(currPosition <= 4){
               
                let nextLocation = document.querySelector(`.item_red_${ currPosition}`)
                nextLocation.appendChild(dot)
                currPosition++
            }else{
                clearInterval(interval)
            }
        }else{
            let nextLocation = document.querySelector(`.item_${i}`)
            nextLocation.innerHTML='';
            nextLocation.appendChild(dot)
        }
    }, 500);
}


fire();


