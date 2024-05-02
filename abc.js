
function callApi(){
let p = fetch('https://jsonplaceholder.typicode.com/todos');
p.then(function(response){
    return response.json();
}).then(function(response1){
    console.log(response1);
    document.getElementById("userData").innerHTML =
     response1.map(function(user){
        `
        <tr>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.completed}</td>
        </tr>
        `;
     }).join("");
})
}
