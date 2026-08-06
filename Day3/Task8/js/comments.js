// Task 8 (45 min) - Blog Comment System
// 390. Comment section on blog article page: name + comment input, comments shown newest first
// 391. Support nested replies: each comment has a Reply button that opens an inline form
// 392. Upvotes persisted to localStorage - each user can upvote once per comment
// 393. Sanitise comment text using textContent not innerHTML to prevent XSS

const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");
const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");

let comments = JSON.parse(localStorage.getItem("comments"));

if(comments === null) {
    comments = [];
}

let votedComments = JSON.parse(localStorage.getItem("votedComments"));

if(votedComments === null) {
    votedComments = [];
}

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function saveVotes() {
    localStorage.setItem("votedComments", JSON.stringify(votedComments));
}

function renderComments() {
    commentList.innerHTML = "";

    for(let i = comments.length - 1; i>=0; i--) {
        const comment = comments[i];
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        const name = document.createElement("h3");
        name.textContent = comment.name;

        const text = document.createElement("p");
        text.textContent = comment.text;

        const votes = document.createElement("p");
        votes.textContent = "⬆️ " +comment.upvotes;

        const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        replyButton.className = "reply-btn";
        replyButton.dataset.id = comment.id;

        const upvoteButton = document.createElement("button");
        upvoteButton.textContent = "Upvote";
        upvoteButton.className = "upvote-btn";
        upvoteButton.dataset.id = comment.id;

        const replyContainer = document.createElement("div");
        replyContainer.className = "reply-container";

        // show replies

        for(let j = 0; j < comment.replies.length; j++) {
            const reply = document.createElement("div");
            reply.className = "comment";

            const replyName = document.createElement("h4");
            replyName.textContent = comment.replies[j].name ;

            const replyText = document.createElement("p");
            replyText.textContent = comment.replies[j].text;

            reply.appendChild(replyName);
            reply.appendChild(replyText);
            replyContainer.appendChild(reply);
        }

        commentDiv.appendChild(name);
        commentDiv.appendChild(text);
        commentDiv.appendChild(votes);
        commentDiv.appendChild(replyButton);
        commentDiv.appendChild(upvoteButton);
        commentDiv.appendChild(replyContainer);
        commentList.appendChild(commentDiv);
    }
}

// posting comments

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const comment = {
        id: Date.now(),
        name: nameInput.value,
        text: commentInput.value,
        upvotes: 0,
        replies: []
    };

    comments.push(comment);
    saveComments();
    renderComments();
    commentForm.reset();
});

// reply

commentList.addEventListener("click", function(event) {
    if(!event.target.classList.contains("reply-btn")) {
        return;
    }

    const id = Number(event.target.dataset.id);

    const container = event.target.nextSibling.nextSibling;
    container.innerHTML = "";

    const form = document.createElement("form");

    const name = document.createElement("input");
    name.placeholder = "Your name";

    const text = document.createElement("textarea");
    text.placeholder = "Your reply: ";

    const button = document.createElement("button");
    button.className = "post-reply-btn"
    button.textContent = "Post reply"

    form.appendChild(name);
    form.appendChild(text);
    form.appendChild(button);
    container.appendChild(form);
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        for(let i=0; i<comments.length; i++) {
            if(comments[i].id === id){
                comments[i].replies.push({
                    name: name.value,
                    text: text.value
                });
            }
        }
        saveComments();
        renderComments();
    });

    

});

commentList.addEventListener("click", function(event) {
    if(!event.target.classList.contains("upvote-btn")) {
        return;
    }

    const id = Number(event.target.dataset.id);
    if(votedComments.includes(id)) {
        alert("You have already upvoted this comment");
        return;
    }

    votedComments.push(id);
    for(let i=0; i<comments.length; i++) {
        if(comments[i].id === id){
            comments[i].upvotes++;
        }
    }

    saveComments();
    saveVotes();
    renderComments();

})

renderComments();