function validation(){
    var id=document.f1.user.value;
    var ps=document.f1.pass.value;
    if(id.length==""&&ps>length==""){
        alert("username and password are required");
        return false;
    }
    else
    {
        if(id.length==""){
            alert("username can not be blank");
        return false;
        }
if(ps.lenth==""){
    alert("password field is empty");
    return false;
}
    }
}