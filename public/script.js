fetch("/posts") 
.then((response) => { 
    return response.json()
})
.then((json) => {

    json.forEach((post) => {
        console.log(post)
        //Get the post information 
        const postTitle = post.title 
        const postImage = post.image 
        const postUpvotes = post.upvotes 
        const postAuthor = post.author 
        const postSubreddit = post.subreddit 
        const postId = post.id
        console.log(postId)

        //Create HTML Elements
        let postDiv = document.createElement("div")
        let postUpvoteTag = document.createElement("p")
        let postImg = document.createElement("img")
        let postInfoDiv = document.createElement("div")
        let postTitleTag = document.createElement("h1")
        let postDetailDiv = document.createElement("div")
        let postAuthorTag = document.createElement("p")
        let postSubredditTag = document.createElement("p")
        let upvoteContainerDiv = document.createElement("div")
        let upvoteButton = document.createElement("button")
        let downvoteButton = document.createElement("button")

        //Format our HTMl
        upvoteContainerDiv.appendChild(upvoteButton)
        upvoteContainerDiv.appendChild(postUpvoteTag)
        upvoteContainerDiv.appendChild(downvoteButton)

        postDiv.appendChild(upvoteContainerDiv)
        postDiv.appendChild(postImg)
        postDiv.appendChild(postInfoDiv)

        postInfoDiv.appendChild(postTitleTag)
        postInfoDiv.appendChild(postDetailDiv)

        postDetailDiv.appendChild(postAuthorTag)
        postDetailDiv.appendChild(postSubredditTag)

        //Add Classes to our html elements 
        postDiv.classList.add("post")
        postUpvoteTag.classList.add("upvotes")
        postImg.classList.add("post-image")
        postInfoDiv.classList.add("post-info")
        postTitleTag.classList.add("post-title")
        postDetailDiv.classList.add("post-details")
        postAuthorTag.classList.add("post-author")
        postSubredditTag.classList.add("post-subreddit")
        upvoteContainerDiv.classList.add("upvote-container")


    upvoteButton.classList.add("upvote");
    downvoteButton.classList.add("downvote");


// Add functionality to our buttons
upvoteButton.addEventListener("click", () => upvote(postId)); 
downvoteButton.addEventListener("click", () => downvote(postId));


        //post our info in our tags
        postUpvoteTag.innerText = postUpvotes
        postImg.src = postImage
        postTitleTag.innerText = postTitle
        postAuthorTag.innerText = postAuthor
        postSubredditTag.innerText = postSubreddit 
        upvoteButton.innerText = "Upvote"
        downvoteButton.innerText = "Downvote"

        //Add functionality to our buttons
        upvoteButton.setAttribute("onclick",`upvote(${postId})`); 
        downvoteButton.setAttribute("onclick",`downvote(${postId})`);
        //

        //Post our posts on the page 
        const postContainter = document.getElementById("post-container")
        postContainter.appendChild(postDiv)  
    })
})
.catch((error) => {
    console.log(error)
})

function upvote(id) { 
    console.log("Upvoted!")
    console.log(id)
}

function downvote(id) { 
    console.log("Downvoted!")
    console.log(id)
}

//anything you want to do in HTML, can be done in JS 