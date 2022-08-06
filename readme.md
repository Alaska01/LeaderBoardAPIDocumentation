# Tutorial on Leaderboard API from Microverse

# VIDEO Documentation
-[VIDEO](https://www.youtube.com/watch?v=nDz4sDN9sPk)

# Start Project

- To run this project on your local system run `$ npx live-server .` or `$ npx live-server`
- This is purely JavaScript Code, No webpack

# How To POST, GET data from LeaderBoad API Service
- Leaderboad [Link](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3)
- You need to create a unique key for your game, so that you can post to it and read data from your game
- To create **UNIQUE ID** for your **GAME** use the curl command in your terminal with the API endpoint as shown, ensure to change the name from Gladiators to a Unique name of your choice `$ curl -X POST -d 'name=Nancy' https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/
`
- You will get a response like this in the terminal `{"result":"Game with ID: NvYHfEPmQZtyuBJeIesV added."}aye@aye-HP-EliteBook-850-G3:~$ ` the message shows you have successfully created a user. Below is a Screenshot of how  your response should be

![screenshot](/images/Curl01.png)

- You may also decide to use your postman to perform the same action, here is a screenshot of how it should look as well.
![screenshot](/images/CurlPostMan.png)

- Next Thing you need to do is to add the key you just got to your project url where you will perform the **POST** and **GET** requests

## GET REQUEST WITH FETCH API
 
 - Set your fetch this way or anyway you usually do, but remember to have the `{    method: "GET"   }` after your **URL** `fetch(url, 
    {    method: "GET"   }
   )
   .then(res=> res.json())
   .then(data => {
    // Perform Any action you want to do with the data here, make it display to your DOM
   return  console.log(data)})`

## POST REQUEST WITH FETCH API

- To make a post request to create a score for a new user use this code for fetch `
 fetch(url, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(payloadObject)
    })
    .then((res)=> {
        return res.json()})
    .then(data => {
        console.log("Data",data)})
    .catch(error=> console.log(error))
` customize the code the way you usually write your code. 

- Ensure you have this content after the url in your fetch method ` {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(payloadObject)
    }`

- Feel free to look at how to set headers using this API [link](https://rapidapi.com/digiwalls/api/free-to-play-games-database)