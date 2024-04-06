const goBack = document.getElementById('goBack')
const second = JSON.parse(localStorage.getItem('formData'))
const user = document.getElementById('username')
const newUser = document.createElement('div')
const title = document.getElementById('title')
const newTitle = document.createElement('div')
const con = document.getElementById('content')
const newCon = document.createElement('div')

console.log(second)

newUser.textContent = second.username

newTitle.textContent = second.blogtitle

newCon.textContent = second.blogcontent

user.appendChild(newUser)
title.appendChild(newTitle)
con.appendChild(newCon)

goBack.addEventListener('click', function () {
    window.location.replace('./index.html')
})