document.getElementById("myForm").addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById("submitMessage").style.display = "block";
    document.getElementById('myForm').style.display = "none";
});
