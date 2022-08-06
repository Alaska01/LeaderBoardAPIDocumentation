const btn = document.querySelector(".btn-click");
const form = document.getElementById("form");

const userdatails = document.getElementById('user-details');
const apiKey = 'Hq9Hg5Ka0RmPyMTBG5Ig'; // This is the Key for your game from Curl Command

url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;

btn.addEventListener('click', () => {
  fetch(url,
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(data => {
      // Next line is used to set the dom content empty on each render 
      userdatails.innerHTML = ''
      // Be careful of the rturn keyword if that is not the last action you want to perform in this section
      return data.result.forEach((el) => {
        //  create DOM elements, append each Iteration content to display in the DOM
        const div = document.createElement('div')
        const user = document.createElement('h1')
        const score = document.createElement('h1')
        user.innerHTML = el.user,
          score.innerHTML = el.score
        div.append(user);
        div.append(score)
        userdatails.append(div)
      })
    })
})


form.addEventListener('submit', function (e) {

  e.preventDefault();

  // FormData is a JavaScript Constructor Used to get Data from forms, you may decide to do this in another way

  const formData = new FormData(form);

  let payload = formData;

  console.log(' This will be empty ', payload)

  // Clear Input Elements
  // Note If you console.log just formData without spreading the content, the response will be an empty object {}, but its not empty

  console.log('>>>>>><<<<<< The Shows the Content of FormData In Console ', [...payload]) //This code will log to console for you to have a look at the payload
  let extractedPayload = [...payload]
  let userValue = extractedPayload[0][1]
  let scoreValue = extractedPayload[1][1]

  // Create an Object to Stringify
  let payloadObject = {
    user: userValue,
    score: scoreValue,
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadObject)
  })
    .then((res) => {
      return res.json()
    })
    .then(data => {
      console.log("Data", data)
    })
    .catch(error => console.log(error))

})


