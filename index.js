// document.addEventListener('DOMContentLoaded', ()=> {
    var name = document.querySelector(".name");
    let mail = document.querySelector(".mail");
    let password = document.querySelector(".password");
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");
    let select3 = document.getElementById("select3");
    select1.addEventListener("change", function(){
        select2.innerHTML = '';
        if(select1.value =='india'){
            var optionArray = ['--Choose State--|--Choose State--','up|UP', 'mp|MP', 'maharashtra|Maharashtra'];
         }
        else if(select1.value =='america'){
            var optionArray = ['--Choose State--|--Choose State--','texas|Texas', 'florida|Florida',  'california|California'];
         }
    
         else if(select1.value =='australia') {
            var optionArray = ['--Choose State--|--Choose State--','queensland|Queensland', 'tasmania|Tasmania', 'victoria|Victoria'];
         }
           
          

    
         for(var option in optionArray){
            var pair = optionArray[option].split("|");
            var newoption = document.createElement("option");
              newoption.value = pair[0];
              newoption.innerHTML = pair[1];
              select2.options.add(newoption);
         }

    })
    select2.addEventListener("change", function(){
        select3.innerHTML = '';
        if(select2.value =='up'){
            var optionArray1 = ['--Choose City--|--Choose City--','lucknow|Lucknow', 'kanpur|Kanpur', 'varanasi|Varanasi'];
         }
        else if(select2.value =='mp'){
            var optionArray1 = ['--Choose City--|--Choose City--','bhopa|Bhopal', 'indore|Indore', 'jabalpur|Jabalpur'];
         }
    
         else if(select2.value =='maharashtra') {
            var optionArray1 = ['--Choose City--|--Choose City--','mumbai|Mumbai', 'pune|Pune', 'nagpur|Nagpur'];
         }

         if(select2.value =='texas'){
            var optionArray1 = ['--Choose City--|--Choose City--','texas city|Texas City', 'houston|Houston', 'austin|Austin'];
         }
        else if(select2.value =='florida'){
            var optionArray1 = ['--Choose City--|--Choose City--','florida city|Florida City', 'miami|Miami'];
         }
    
         else if(select2.value =='california') {
            var optionArray1 = ['--Choose City--|--Choose City--','los angeles|Los Angeles', 'san fransisco|San Fransisco', 'san diego|San Diego'];
         }

         
         for(var option in optionArray1){
            var pair = optionArray1[option].split("|");
            var newoption = document.createElement("option");
              newoption.value = pair[0];
              newoption.innerHTML = pair[1];
              select3.options.add(newoption);
         }
    
        
        
        })
    
        
    
    
    
    
    
    let form = document.querySelector("form");
    form.addEventListener('submit',(e)=> {
       e.preventDefault()
       console.log(e);
    
       const myForm = new FormData(form)
        
       for (const p of myForm.entries()){
           // console.log(p[0], p[1]);
           console.log(p);
       } 
       //  console.log(mail.value);
    
    })


    // let populate = (s1, s2) =>{
    //      let se1 = document.getElementById(s1);
    //      let se2 = document.getElementById(s2);
        //  se2.innerHTML = "";
        

// })