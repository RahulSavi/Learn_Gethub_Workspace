//Immediately Invoked Funtion Expressions(IIFE)

(function iife() {
    console.log(`DB connection done..`);

})();

//()-dffiniation () -excution, using for ingnore the golbal scop Pollution

(function iife2()
//Named IIFE
{
    console.log(`DB connection done..`);

})();

(() => {
    console.log(`DB connection done..3`);

})();

((Rahul) => {
    console.log(`DB connection done ... ${Rahul}`);

})('Database');