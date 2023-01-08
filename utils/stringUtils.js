// Write a function that takes a string and a number and repeats the string n times with a space in te middle of each time

// 'Kim',3 => 'Kim Kim Kim'
function repeatNTimesWithSpace(string, n){
return (string + ' ').repeat(n);
};
console.log(repeatNTimesWithSpace('Kim',3))


// 'library' => 'Library'
function capitalizeFirstLetter(string){
  return string[0].toUpperCase() + string.slice(1)
}
console.log(capitalizeFirstLetter('kenyetta'))


module.exports = {repeatNTimesWithSpace,capitalizeFirstLetter}