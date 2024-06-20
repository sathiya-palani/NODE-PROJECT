
 const posts = [
    
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
 ]

 //1. import express module
const express = require ('express');

// 2. Create a express application
 const app = express();

 //4. Create a route
 app.get ('/posts', (request, response) =>{
    response.json(posts);
 });

 app.post('/posts' , (request ,response) =>{
    response.json (
        {
            ...request.body,
            id:posts.length + 1
        }
    ) 
 })

 //3. Run the server
 app.listen(3001,() => {
    console.log('server is running on http://localhost:3001');
 });