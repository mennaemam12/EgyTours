
let d=0;
function displayAddUser(id){
  let x = document.getElementById(id);
  if(d%2 == 0){
    x.style.display="block";
    d++;
  }
  else{
    x.style.display="none";
    d++;
  }
}

function myFunction() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  function updateDeleteButtons(index){
   let a;
   a=document.getElementById(index);
   a.getElementsByTagName("button")[0].style.display="flex";
   a.getElementsByTagName("button")[1].style.display="flex";
  }
  
  function exit(index){
      a=document.getElementById(index);
      a.getElementsByTagName("button")[0].style.display="none";
      a.getElementsByTagName("button")[1].style.display="none";
  }
  
  function bckText(id,txt){
    let text=document.createElement("p");
    let repNode=document.getElementById(id);
    text.innerHTML=(txt);
    text.setAttribute("id",id);
    repNode.replaceWith(text);
  }
  
  function replaceInfo(id){
    let textBox=document.createElement("input");
    textBox.setAttribute("type","text");
    let repNode=document.getElementById(id);
    textBox.setAttribute("value",repNode.innerText);
    textBox.setAttribute("id",id);
    repNode.replaceWith(textBox);
   // textBox.style.width="20px";
    textBox.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  
        bckText(id,textBox.value);
      }
    });
  }
  
  function onUpdate(id,username,email,phone,password){
    document.getElementById("updateInfo").style.display="none";
    document.getElementById("deleteUser").style.display="none";
    document.getElementById("u1").value=username
    document.getElementById("u2").value=email;
    document.getElementById("u3").value=phone;
    document.getElementById("u4").value=password;
    document.getElementById("currid").value=id;
    document.getElementById("updateInfo").style.display="block";
  }
  
  function save(){
    document.getElementById("updateInfo").style.display="none";
    document.getElementById("smsg").style.display="block";
    return true;
 
  }
  
  function onDelete(username,email,phone,password){
    document.getElementById("updateInfo").style.display="none";
    document.getElementById("deleteUser").style.display="none";
    document.getElementById("d1").innerHTML=username
    document.getElementById("d2").innerHTML=email;
    document.getElementById("d3").innerHTML=phone;
    document.getElementById("d4").innerHTML=password;
    
    document.getElementById("deleteUser").style.display="block";
  }
  
  function reset(){
    document.getElementById("uname").value=null;
    document.getElementById("email").value=null;
    document.getElementById("number").value=null;
    document.getElementById("password").value=null;
    document.getElementById("password-confirmation").value=null;
  }

  function cancel(){
    document.getElementById("id01").style.display="none";
  }

  function del(){
    document.getElementById("deleteUser").style.display="none";
    document.getElementById("msg").style.display="block";
  }


 
 

  
  
  