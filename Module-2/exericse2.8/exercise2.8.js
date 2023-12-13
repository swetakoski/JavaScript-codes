const nameList=["Charlie", "Jacky", "April", "Hachi"]
function concat(array) {
  let concatResult = '';
  for (let name of array) {
    concatResult +=name;
  }
  return concatResult;
}
document.querySelector('#target').innerHTML=concat(nameList);