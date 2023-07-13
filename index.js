// Code your solution here
var drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array,condition){
    return array.filter(function (el){
       return el.toLowerCase().includes(condition.toLowerCase());
    })
}
console.log(findMatching(drivers,'bby'));
function fuzzyMatch(array,condition){
  return array.filter(function (el){
    return el.startsWith(condition);
 })
}
console.log(findMatching(drivers,'Bo'))
{
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
function matchName(array, condition){
    return array.filter(function (el){
        return el['name'].toLowerCase().includes(condition.toLowerCase());
     })
}
console.log(matchName(drivers,'Bo'));
}