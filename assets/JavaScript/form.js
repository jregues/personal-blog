// Create an object with form data
$('form').on('submit', function (event) {
    event.preventDefault();
    const formData = {
        username: document.getElementById('uname').value,
        blogtitle: document.getElementById('btitle').value,
        blogcontent: document.getElementById('pcontent').value
    };

    // Convert object to JSON string
    const jsonData = JSON.stringify(formData);

    // Store JSON string in local storage
    localStorage.setItem('formData', jsonData);
    const form = localStorage.getItem('formData');
    const formD = JSON.parse(form);

    console.log(formD);
    if (formData.username && formData.blogtitle && formData.blogcontent) {
    window.location.replace('./blog.html')
    } else if (!formData.username) {
        window.alert('Please fill out your username!')
    } else if (!formData.blogtitle) {
        window.alert('Please enter your blog title!')
    } else if (!formData.blogcontent) {
        window.alert('Please enter your blog content!')
    } else {
        window.alert('Please fill out the form!')
    }
})
