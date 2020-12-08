
$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/todos",(res,status,xhr)=>{
        if(status == "success"){
            for (let index = 0; index < res.length; index++) {
                document.getElementById("list").innerHTML +='<input type="checkbox" onclick="javascript:check();"><label id=i1 for="item1">'+ res[index].title +'</label><br>';
            }
            // Promise.then(function(e){alert (e);}).catch(function(e){console.log(e);});    
        }
        if (status == "error") console.log ("error" + xhr.status + " and error is" + xhr.statusText);
        console.log(xhr.status + "error not working");
    });
});



function check(){
    var promise = new Promise(function(resolve,reject){
    var boxes = $('input:checkbox:checked').length;
    
    if(boxes>="5"){
        resolve("5 boxes checked");
        alert("5 boxes checked");
    }
    else{
        reject("tick more boxes");
    }
    
});

promise
.then(function(s){
    alert(s);
})
.catch(function(e){
    console.log(e);
})
}





