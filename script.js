function calc(){
    let income=document.getElementById("income").value;
    let needs=income*0.5;
    let wants=income*0.3;
    let savings=income*0.2;
    alert("Needs: "+needs+" Wants: "+wants+" Savings: "+savings);
}

function verify(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username=="latifa" && password=="1234"){
        alert("Login successful!");
        window.location.href="wallet.html";
    }else{
        alert("Invalid username or password!");
    }
}