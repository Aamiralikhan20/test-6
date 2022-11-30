let a = "working";
 console.log(a); 

const locatn = document.getElementById('location');
const acecstoken = document.getElementById('acestoken');

const locwarning= document.getElementById('location-warning');
const actowarning = document.getElementById('acestoken - warning');




function myFunction(){

     function checkforerrors(inputvalue, warningelement){
        let error =false;
        if (inputvalue === ''){
            warningelement.innerHTML= 'Location and Acess Token field cannot be empty';
            error=true;
        }
        else{
            warningelement.innerHTML = '';
        }
        return error;
        }
      const loerro = checkforerrors(locatn.value, locwarning);
      const acto =checkforerrors(acecstoken.value,actowarning);

      if (!loerro && !acto)
      {

    
   
      const location1 = document.getElementById("location").value;
      const key= document.getElementById("acestoken").value;
 
      async function fetchdata() {
     const url = `http://api.weatherstack.com/current?access_key=${key}&query=${location1}`;