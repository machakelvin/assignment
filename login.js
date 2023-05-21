function validation(){
    var id = document.f1.user.value;
    var ps = document.f1.pass.value;
    if(id.length==""&&ps>length==""){
        alert("Username and Password are required");
        return false;
    }
    else
    {
        if(id.length==""){
            alert("Username can not be blank");
        return false;
        }
if(ps.lenth==""){
    alert("Password field is empty");
    return false;
}
    }
}
