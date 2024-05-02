let name = document.querySelector(".name");
let mail = document.querySelector(".mail");
let password = document.querySelector(".password");

const states = {
   India:["UP", "MP", "Maharashtra"],
   America: ['Texas', 'Florida', 'California'] ,
   Australia: ['Queensland', 'Tasmania', 'Victoria']
 };
 
 function populateSubcategories() {
   const countrySelect = document.getElementById('countrySelect');
   const stateSelect = document.getElementById('stateSelect');
   const selectedCountry = countrySelect.value;
   stateSelect.innerHTML = '';
   // Clear previous options
   stateSelect.innerHTML = '<option value="">--Select State--</option>';
 
   // Populate states based on selected Countries
   switch (selectedCountry) {
     case 'India':
       states.India.forEach((state) => {
         stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
       });
       break;
     case 'America':
       states.America.forEach((state) => {
         stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
       });
       break;
     case 'Australia':
       states.Australia.forEach((state) => {
         stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
       });
       break;
     default:
       // If no Country is selected, reset the States dropdown
       stateSelect.innerHTML = '<option value="">--Select State--</option>';
       break;
   }
 }

 const cities = {
   UP:['Lucknow', 'Kanpur', 'Varanasi'],
   MP:['Bhopal', 'Indore', 'Jabalpur'],
   Maharashtra:['Mumbai', 'Pune', 'Nagpur'],
   Texas: ['Texas City', 'Houston', 'Austin'],
   Florida: ['Florida City', 'Miami'],
   California:['Los Angeles', 'San Fransisco', 'San Diego'],
   Queensland: ['Cairns', 'Brisbane', 'Gold Coast'],
   Tasmania : ['George Town', 'Hobart', 'Launceston'],
   Victoria: ['Melbourne', 'Geelong', 'Bendigo']   

 };

 function finalPopulate(){
   
   const stateSelect = document.getElementById('stateSelect');
   const citySelect = document.getElementById('citySelect');
   const selectedCities = stateSelect.value;

      // Clear previous options
   citySelect.innerHTML = '<option value="">--Select City--</option>';
 
   // Populate Cities based on selected States
   switch (selectedCities) {
     case 'UP':
      cities.UP.forEach((city) => {
         citySelect.innerHTML += `<option value="${city}">${city}</option>`;
       });
       break;
       case 'MP':
      cities.MP.forEach((city) => {
         citySelect.innerHTML += `<option value="${city}">${city}</option>`;
       });
       break;
       case 'Maharashtra':
      cities.Maharashtra.forEach((city) => {
         citySelect.innerHTML += `<option value="${city}">${city}</option>`;
       });
       break;
     case 'Texas':
      cities.Texas.forEach((city) => {
         citySelect.innerHTML += `<option value="${city}">${city}</option>`;
       });
       break;
     case 'Florida':
      cities.Florida.forEach((city) => {
         citySelect.innerHTML += `<option value="${city}">${city}</option>`;
       });
       break;
       case 'California':
         cities.California.forEach((city) => {
            citySelect.innerHTML += `<option value="${city}">${city}</option>`;
          });
          break;
          case 'Queensland':
         cities.Queensland.forEach((city) => {
            citySelect.innerHTML += `<option value="${city}">${city}</option>`;
          });
          break;
          case 'Tasmania':
         cities.Tasmania.forEach((city) => {
            citySelect.innerHTML += `<option value="${city}">${city}</option>`;
          });
          break;
          case 'Victoria':
         cities.Victoria.forEach((city) => {
            citySelect.innerHTML += `<option value="${city}">${city}</option>`;
          });
          break;
     default:
       // If no States is selected, reset the Cities dropdown
       citySelect.innerHTML = `<option value="">--Select City--</option>`;
       break;
   }
 }

let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
   e.preventDefault()
   console.log(e);

   const myForm = new FormData(form)

   for (const p of myForm.entries()) {
      // console.log(p[0], p[1]);
      console.log(p);
   }
   //  console.log(mail.value);
   form.reset();
alert("Form Submitted Succesfully");
// let modal = document.getElementById("modal")
// modal.style.display = "block";

})



// let select1 = document.getElementById("select1");
// let select2 = document.getElementById("select2");
// let select3 = document.getElementById("select3");
// let option3 = document.getElementById("option3");
// let optionArray = []
// let optionArray1 = [];

// function populate(s1,s2,s3) {
//     s1 = select1;
//     s2 = select2
//    //  s3 = option3
//    //  option3.value = ""
//    s2.innerHTML = '';
   

//    if (s1.value == 'india') {
//       optionArray = ['--Choose State--|--Choose State--', 'up|UP', 'mp|MP', 'maharashtra|Maharashtra'];
//    }
//    else if (s1.value == 'america') {
//       optionArray = ['--Choose State--|--Choose State--', 'texas|Texas', 'florida|Florida', 'california|California'];
//    }

//    else if (s1.value == 'australia') {
//       optionArray = ['--Choose State--|--Choose State--', 'queensland|Queensland', 'tasmania|Tasmania', 'victoria|Victoria'];
//    }




//    for (let option in optionArray) {
//       let pair = optionArray[option].split("|");
//       let newoption = document.createElement("option");
//       newoption.value = pair[0];
//       newoption.innerHTML = pair[1];
//       s2.options.add(newoption);

//    }

// }
// function populate1(s2,s3) {
//    s2 = select2;
//    s3 = select3;
//    s3.innerHTML = '';

//    if (s2.value == 'up') {
//       optionArray1 = ['--Choose City--|--Choose City--', 'lucknow|Lucknow', 'kanpur|Kanpur', 'varanasi|Varanasi'];
//    }
//    else if (s2.value == 'mp') {
//       optionArray1 = ['--Choose City--|--Choose City--', 'bhopa|Bhopal', 'indore|Indore', 'jabalpur|Jabalpur'];
//    }

//    else if (s2.value == 'maharashtra') {
//       optionArray1 = ['--Choose City--|--Choose City--', 'mumbai|Mumbai', 'pune|Pune', 'nagpur|Nagpur'];
//    }

//    else if (s2.value == 'texas') {
//       optionArray1 = ['--Choose City--|--Choose City--', 'texas city|Texas City', 'houston|Houston', 'austin|Austin'];
//    }
//    else if (s2.value == 'florida') {
//       optionArray1 = ['--Choose City--|--Choose City--', 'florida city|Florida City', 'miami|Miami'];
//    }

//    else if (s2.value == 'california') {
//       optionArray1 = ['--Choose City--|--Choose City--', 'los angeles|Los Angeles', 'san fransisco|San Fransisco', 'san diego|San Diego'];
//    }


//    for (let option1 in optionArray1) {
//       let pair1 = optionArray1[option1].split("|");
//       let newoption1 = document.createElement("option");
//       newoption1.value = pair1[0];
//       newoption1.innerHTML = pair1[1];
//       s3.options.add(newoption1);
//    }



// }











