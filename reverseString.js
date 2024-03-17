function reverseString (str){
const character = str.split('')
const reversCharacter = character.reverse()
const reversedString = reversCharacter.join('')
return reversedString
}
console.log(reverseString('I m from bangladesh'));