const hello = 7;

function countHello(limit){
    let counter = 0;
    const helloCounterInterval = setInterval(function (){
       console.log("Hello " + (counter+1));
       counter++;
       if (counter === limit) {
           clearInterval(helloCounterInterval);
       }
    },2000);
}

countHello(hello);