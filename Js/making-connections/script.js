var requests = document.getElementById("requests");
var connections = document.getElementById("connections");
var requestsCard = document.getElementById("requests-card");
var userName = document.getElementById("name");

function acceptCon(id) {
  document.getElementById(id).remove()
  requests.innerText--
  connections.innerText++
  if (requests.innerText == 0) {
    requestsCard.remove()
  }
}

function rejectCon(id) {
  document.getElementById(id).remove()
  requests.innerText--
  if (requests.innerText == 0) {
    requestsCard.remove()
  }
}

function changeName() {
  userName.innerText = "Chuck Norris"
}
