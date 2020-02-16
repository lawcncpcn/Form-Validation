function validate(){

    
    var title= document.getElementById('eventTitle').value;
    var date1=document.getElementById('firstDate').value;
    var date2=document.getElementById('secondDate').value;
    var pd=document.getElementById('postingDate').value;
    

    if (title=="" || date1=="" || date2=="" ||pd==""){
        alert("all field required!");
     document.getElementById("result").innerHTML ="all field required!";
        return false;
    }else{
        alert("Your form entry have been successfully submitted!");
        document.getElementById("result").innerHTML ="Your form entry have been successfully submitted!"
        return true;
    }
}