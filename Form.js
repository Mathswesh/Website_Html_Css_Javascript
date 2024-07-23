document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or do something else
    } else {
        alert('Invalid username or password. Please try again.');
    }
});


//for search bar
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchResults");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}