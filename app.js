const express = require("express")
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))

/*
1. Set up basic UI 
2. Create posts (seeding) 
3. Display those posts on the webpage 
    a. create a path to send data 
    b. fetch data from express
    c. create html elements 
4. Be able to upvote and downvote posts
    a. Add buttons to our posts 
    b. When you click the button it should add 1 to upvotes if its upvoted and subtract 1 if its downvoted 
        1. Create an onclick function for our buttons 
        2. Post to our express app that we needto update value 
            a.Figure out what post is being updated 
            b. Create routes to handle the request 
            c. Update the values
        3. Create routes for upvoting and downvoting 
        4. Convert our string to a number 
        5. Update upvote value in the array 
5. View specific subreddits 

Last: CSS is always the last step 
*/

let posts = [ 
{
    "id": "1",
    "upvotes": "100", 
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Dollar_bill_and_small_change.jpg", 
    "title": "$100 billion lottery winner",
    "author": "Maria Ortiz", 
    "subreddit": "News"
}, 
{
    "id": "2",
    "upvotes": "300", 
    "image": "https://canary.contestimg.wish.com/api/webimage/5b9780306c0333198f54854c-large.jpg?cache_buster=4e57a6c329e78b69a3568131f145a02e", 
    "title": "Brenna invents tattoo machine that causes the most pain",
    "author": "Brenna Greenwell", 
    "subreddit": "Tats"
}, 
{
    "id": "3",
    "upvotes": "432", 
    "image": "https://i.etsystatic.com/11865871/r/il/42c3f4/2270722380/il_570xN.2270722380_ts69.jpg", 
    "title": "Cassie invents new type of art",
    "author": "Cassie Payne", 
    "subreddit": "Art"
}, 
{
    "id": "4",
    "upvotes": "234", 
    "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61htHcHeTGL._AC_UF1000,1000_QL80_.jpg", 
    "title": "Doctor finds a way to turn someone into a pizza",
    "author": "Josh Gibson", 
    "subreddit": "Entertainment"
}, 
{
    "id": "5",
    "upvotes": "100", 
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lucas_Cranach_-_Der_Jungbrunnen_%28Gem%C3%A4ldegalerie_Berlin%29.jpg/1200px-Lucas_Cranach_-_Der_Jungbrunnen_%28Gem%C3%A4ldegalerie_Berlin%29.jpg", 
    "title": "Fountain of Youth has been found",
    "author": "Kendria Henderson", 
    "subreddit": "Life"
}
]; 

app.get("/", (req, res) => { 
//path to the file that we want to send 
    res.sendFile(path.join(__dirname, 'public/html/index.html'))
})

//Create a route that sends all posts 
app.get("/posts", (req, res) => { 
    res.send(posts)
})


//Create a route for upvoting
app.get("/upvote/:id", (req, res) => { 
    const id = req.params.id

    for(let i = 0; i < posts.length; i++) { 
        if(posts[i].id === id) { 
            let upvotes = Nuber(posts[i].upvotes)
            upvotes = upvotes + 1 
            posts[i].upvotes = upvotes.toString()
        }
    }
})


//Create a route for downvoting 
app.get("/downvote/:id", (req, res) => { 
    const id = req.params.id

    for(let i = 0; i < posts.length; i++) { 
        if(posts[i].id === id) { 
            let downvotes = Number(posts[i].upvotes)
            upvotes = downvotes - 1
            posts[i].upvotes = downvotes.toString()
        }
    }
})



app.listen(3000)
console.log("Express app is running!")