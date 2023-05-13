// const chunkArray = (arr,length) =>{

//     //init chunked array
//     const chunkedArr = [];

//     // loop through arr
//     arr.forEach(val => {

//         //get last element

//     const last = chunkedArr[chunkedArr.length - 1];

//     //check if last or last length is equal to the chunk length
//     if(!last || last.length === length){
//         chunkedArr.push([val]);
//     }
//     else {
//         last.push(val);
//     }   

//     });
//     return chunkedArr;
// }

function chunkArray(array, number) {
  // Initialize an empty array to hold the chunks
  let chunkedArray = [];
  // Loop through the input array and divide it into chunks
  for (let i = 0; i < array.length; i += number) {
    // Slice the input array into a chunk of length 'number'
    let chunk = array.slice(i, i + number);
    // Add the chunk to the chunked array
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}


module.exports = chunkArray