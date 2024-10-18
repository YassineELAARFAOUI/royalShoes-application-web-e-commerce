connexiondirect();
function connexiondirect(){
    let usernameLocal = localStorage.getItem("usernameLocal");
    let passwordLocal = localStorage.getItem("passwordLocal");
    let letConnect = localStorage.getItem("letConnect");
    if(letConnect==="1"){
        if (usernameLocal && passwordLocal){
            $(document).ready(function () {
                $.ajax({
                    url: "../pages/server/serversr.php",
                    data: {
                        functionValue: "login",
                        username: usernameLocal,
                        password: passwordLocal,
                    },
                    type: "POST",
                    dataType: "json",
                    success: function (result) {
                        if(result.state){
                            window.location.assign("dashboard.html");
                        }
                    },
                    error: function (xhr, status, error) {
                        // Handle the error here
                    }
                });
            });
        }
    }
}

function verifierInput(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let addMessage=document.getElementById('addMessage');

    if(username==="" || password===""){
        addMessage.innerText="إملأ المعلومات كاملة";
    }else{
        addMessage.innerText="";
        $(document).ready(function () {
            $.ajax({
                url: "../pages/server/serversr.php",
                data: {
                    functionValue: "login",
                    username: username,
                    password: password,
                },
                type: "POST",
                dataType: "json",
                success: function (result) {
                    if(result.state){
                        addMessage.innerText="";
                        console.log(username);
                        console.log(password);
                        localStorage.setItem("usernameLocal",username);
                        localStorage.setItem("passwordLocal",password);
                        localStorage.setItem("letConnect","1");
                        window.location.href = "./dashboard.html";
                    }else{
                        addMessage.innerText="إسم المستخدم او الرمز السري خاطئ";
                    }
                },
                error: function (xhr, status, error) {
                    // Handle the error here
                }
            });
        });
    }
}