
// function handleSubmissionForm(event) {
//     event.preventDefault();
//     sub.on('submit', function() {
//         location.replace('blog.html')
//     })
// }

// // 



// const form = $('form-content');
// // form.style.display = 'none';

// form.submit(function(event){
//     event.preventDefault();
//     location.replace('blog.html')
// })
// const formContent = document.getElementById('form-content')

// function handleSubmissionForm() {
// addEventListener("submit", function(event) {
//     event.preventDefault(); // stop submission
//     const username = document.getElementById('username').value;
//     localStorage.setItem("username",username);
//     window.location.pathname = "resources/blog.html";
//     console.log('buttonclicked')
//   })
// }

// const button = document.getElementById("button");
//  button.addEventListener("submit", function() {
// console.log("Button was clicked!");
// });

const button = $('.s-button');

// button.on('submit', function(event) {
//     event.preventDefault(); // stop submission
//     const username = document.getElementById('username').value;
//     localStorage.setItem("username",username);
//     location.replace('blog.html')
//     console.log('buttonclicked')

// })

const username = $('#uname');



localStorage.getItem(username)
localStorage.setItem(username, 'username')
console.log(username)