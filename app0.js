function submitForm(e){
    e.preventDefault();
    let name = document.forms["form"]["name"].value
    sessionStorage.setItem("Name",name)
    
}
function jump(){
    location.href = "index1.html"
}