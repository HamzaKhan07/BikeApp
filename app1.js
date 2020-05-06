var cerror=false;
function check()
{

    document.getElementById("btn").addEventListener("click",checkFirstName);
    document.getElementById("btn").addEventListener("click",checkLastName);
    document.getElementById("btn").addEventListener("click",checkEmail);
    document.getElementById("btn").addEventListener("click",checkPass);
    document.getElementById("btn").addEventListener("click",checkAdd);
    document.getElementById("btn").addEventListener("click",Checknext);
}
function checkFirstName()
{
    firstNameInput=document.querySelector(".first-name").value;
    err=document.querySelector(".first-name-error");

    if(firstNameInput.length!=0)
    {
        if(firstNameInput.length < 3)
        {
        console.log("Field's length is too small");
        err.innerHTML="Field's length is too small";
        cerror=true;
        }
        else if(firstNameInput.length > 15)
        {
        console.log("Field's length must be smaller than 15");
        err.innerHTML="Length must be smaller than 15";
        cerror=true;
        }
        else
        {
            console.log("OK");
            err.innerHTML='';
            cerror=false;
        }
    }
    else
    {
        cerror=true;
        err.innerHTML="Field must not be empty";
    }
    
}
function checkLastName()
{
    lastNameInput=document.querySelector(".last-name").value;
    err=document.querySelector(".last-name-error");

    if(lastNameInput.length!=0)
    {
        if(lastNameInput.length < 3)
        {
            console.log("Field's length is too small");
            err.innerHTML="Field's length is too small";
            cerror=true;
        }
        else if(lastNameInput.length > 15)
        {
            console.log("Field's length must be smaller than 15");
            err.innerHTML="Length must be smaller than 15";
            cerror=true;
        }
        else
        {
            err.innerHTML='';
            cerror=false;
        }
    }
    else
    {
        cerror=true;
        err.innerHTML="Field must not be empty";
    }
    
}
function checkEmail()
{
    email=document.querySelector(".email").value;
    emailVal=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    err=document.querySelector(".email-error");
    
    if(email.length!=0)
    {
        if(emailVal.test(email))
        {
            console.log("Correct");
            err.innerHTML='';
            cerror=false;
        }
        else
        {
            console.log("Incorrect");
            cerror=true;
            err.innerHTML="Invalid Email address";
        }
    }
    else
    {
        cerror=true;
        err.innerHTML="Field must not be empty";
    }
    
}
function checkPass()
{
    pass=document.querySelector(".password").value;
    err=document.querySelector(".pass-error");
    
    if(pass.length!=0)
    {
        if(pass.length < 8)
        {
            console.log("Length must exceed 8");
            err.innerHTML="Length must exceed 8";
            cerror=true;
        }
        else if(pass.length> 20)
        {
            console.log("length is too big");
            err.innerHTML="Length is too big";
            cerror=true;
        }
        else
        {
            console.log("OK");
            err.innerHTML='';
            cerror=false;
        }
    }
    else
    {
        cerror=true;
        err.innerHTML="Field must not be empty";
    }
    
}
function checkAdd()
{
    var i=0;
    var flag=0;
    err=document.querySelector(".add-error");

    addr=document.querySelector(".add").value;
    addrArr=addr.split(',');

    if(addr.length!=0)
    {
        for(i=0; i<addrArr.length; i++)
        {
            if(addrArr[i]>='a' && addrArr[i]<='z' || addrArr[i]>='A' && addrArr[i]<='Z')
            {
                console.log("OK");
                flag=1;
                err.innerHTML='';
                cerror=false;
            }
        }
    
        if(addr.length < 10 || flag==0)
        {
            console.log("Field's length is too small");
            err.innerHTML="Field's length is too small";
            cerror=true;
        }
        else
        {
            err.innerHTML='';
            console.log("OK");
            cerror=false;
        }

        if(flag==0)
        {
            console.log("Incorrect address");
            err.innerHTML="Invalid address";
            cerror=true;
        }
    }
    else
    {
        err.innerHTML="Field must not be empty";
        cerror=true;
    }
}
    function Checknext()
    {
        //errors false
        console.log("Errors : "+cerror);

        if(cerror == false)
        {
            window.location.href="comp.html";
        }
    }
check();