function clearSocials(){

   
}

function checkBoxes(checkboxId){

    var cb = document.getElementById(checkboxId);
    
    if(cb.checked == true){
        document.getElementById(checkboxId+"_name").style.display = "inline";
        
        //alert(checkboxId)
        document.getElementById(checkboxId+"_show").style.display = "block";
        
    }
    else{
        document.getElementById(checkboxId+"_name").style.display="none";
    }
}


function updateName(){
    document.getElementById("card-name").innerHTML = document.getElementById("name").value ;
}

function updateWork(){
    document.getElementById("add").innerHTML = document.getElementById("work").value ;
}

function updateWorkplace(){
    document.getElementById("add").innerHTML += " | "+document.getElementById("workplace").value ;
}

function updateCity(){
    document.getElementById("add").innerHTML += " | "+document.getElementById("city").value ;
}

function updateCountry(){
    document.getElementById("add").innerHTML += ", "+document.getElementById("country").value ;
}

function updateDesc(){
    document.getElementById("desc_content").innerHTML = document.getElementById("description").value ;
}

function updatePhone(){
    document.getElementById("contact_no").innerHTML = document.getElementById("phone").value ;
}

function updateEmail(){
    document.getElementById("contact_mail").innerHTML = document.getElementById("email").value ;
}




function lightTheme(){
    document.getElementById("card").style.backgroundColor = "white";
    document.getElementById("card").style.color = "black";

}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

  function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function PrintDiv(div)
{
    html2canvas((div), {
        onrendered: function(canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "MaSimulation.png");
      }
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}