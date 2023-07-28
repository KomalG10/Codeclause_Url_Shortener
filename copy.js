let newurl = document.getElementById("shorturl");
let copybtn = document.getElementById("copy");

copybtn.onclick = () =>{
    newurl.select();
    window.navigator.clipboard.writeText(newurl.value);
}