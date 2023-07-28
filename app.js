let btn = document.getElementById("shorten");
 btn.addEventListener('click',short);


 async function short (){
    let Longurl= document.getElementById("longurl").value;
    let Shorturl = document.getElementById("shorturl");
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${Longurl}`);
    const data = await result.json();
     Shorturl.value = data.result.short_link2;
    console.log(data.result.short_link2);
 }