var productnameinput=document.getElementById("productname");
var productpriceinput=document.getElementById("productprice");
var productcategouryinput=document.getElementById("productcategoury");
var productdescinput=document.getElementById("productdesc");

var addbtn =document.getElementById("addbtn");
var uppdatebtn =document.getElementById("uppdatebtn");

var allproducts=[]

var updateIndex;
if(localStorage.getItem("products")!=null){

    allproducts =JSON.parse(localStorage.getItem("products"));

displayproduct(allproducts)

}





function addproduct(){


    if( validateProductName() ==true){
        var product ={
            namee  : productnameinput.value,
            price : productpriceinput.value,
            categoury : productcategouryinput.value,
            desc :productdescinput.value
            }
            console.log(product);
            
            allproducts.push(product);
             localStorage.setItem("products",JSON.stringify(allproducts));
            displayproduct(allproducts);
            // clearproduct()
            
    }
    else{
        alert("productNameinvalide");
    }



}



function clearproduct(){
    productnameinput.value="";  
    productpriceinput.value="";
    productcategouryinput.value="";
    productdescinput.value="";
}



function displayproduct(array){
    var cartona =""
    for(var i=0; i< array.length;i++){


       cartona+= `
       <tr>
       <td>${array[i].namee}</td>
       <td>${array[i].price}</td>
       <td>${array[i].categoury}</td>
       <td>${array[i].desc}</td>
       <td><button onclick="setFormForupdate(${i})" class="btn btn-danger">update</button> </td>
       <td> <button onclick="deletproduct(${i})" class="btn btn-info">delete</button> </td>  
       </tr> 
       `
       document.getElementById("tablebody").innerHTML=cartona;
    }

 
}


function deletproduct(i){

    allproducts.splice(i,1);
    localStorage.setItem("products",JSON.stringify(allproducts)) ;
    displayproduct(allproducts);
}


function searchproducts(term){

    
    var matchedproducts = [];
    for(var i=0 ; i<allproducts.length ; i++){

        if(allproducts[i].namee.toLowerCase().includes(term.toLowerCase())){

            matchedproducts.push(allproducts[i]);
            
        
         }
            } 
            
            displayproduct(matchedproducts)
}

function setFormForupdate(index){
    productnameinput.value = allproducts[index].namee;
    productpriceinput.value = allproducts[index].price;
    productcategouryinput.value = allproducts[index].categoury;
    productdescinput.value = allproducts[index].desc;

    addbtn.classList.replace("d-block","d-none");
    uppdatebtn.classList.replace("d-none","d-block");

updateIndex=index

}

function setupdateProduct(){
     allproducts[updateIndex].namee = productnameinput.value;
    allproducts[updateIndex].price = productpriceinput.value ;
     allproducts[updateIndex].categoury = productcategouryinput.value ;
      allproducts[updateIndex].desc = productdescinput.value;
localStorage.setItem("product",JSON.stringify(allproducts));
displayproduct(allproducts)
clearproduct();
addbtn.classList.replace("d-none","d-block");
uppdatebtn.classList.replace("d-block","d-none")
}
function  validateProductName(){
 var regex = /^[A-Z][a-z]{1,20}$/;
 
 if(regex.test(productnameinput.value)==false){
    return "Your name must be from 1 to 20 charachter and starts with capital letter";
 }
 else{
    return true;
 }
    // or 
 /* return regex.test(productnameinput.value); */
 


}