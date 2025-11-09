function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
	const cookies = document.cookie.split(';');
		for(let i=0; i< cookies.length;i++){
			let cookie = cookies[i].trim();

		if(cookie.startsWith(name + '='))
			return(cookie.substring(name.length + 1));
					
}

				
}
function Light(){
    document.getElementById("mainpage").style="background-color:white; color: black;";
    document.getElementById("mode").innerHTML="Light";
    setCookie('userMode','light',30);
} 

function Dark(){
    document.getElementById("mainpage").style="background-color:black; color: white;";
    document.getElementById("mode").innerHTML="Dark";
    setCookie('userMode','dark',30);
} 

function Default(){
    document.getElementById("mainpage").style="background-color:#dea561; color: bisque;";
    document.getElementById("mode").innerHTML="Default";
    setCookie('userMode','default',30);
} 

window.addEventListener('DOMContentLoaded', () => {
    const savedMode = getCookie('userMode') || 'default';

    if(savedMode === 'light') Light();
    else if(savedMode === 'dark') Dark();
    else Default();
});