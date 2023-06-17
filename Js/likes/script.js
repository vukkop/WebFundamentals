// var numOfLikesArr = [document.querySelector("#numberOfLikesUser0").innerText,
//   document.querySelector("#numberOfLikesUser1").innerText,
//   document.querySelector("#numberOfLikesUser2").innerText]

// function like(element) {


//   for (var i = 0; i < numOfLikesArr.length; i++) {
//     if (element.id == i) {
//       numOfLikesArr[i]++
//     }
//   }
//   document.querySelector("#numberOfLikesUser0").innerText = numOfLikesArr[0]
//   document.querySelector("#numberOfLikesUser1").innerText = numOfLikesArr[1]
//   document.querySelector("#numberOfLikesUser2").innerText = numOfLikesArr[2]
// }

function like(element) {
  document.querySelector(element).innerText++
}
