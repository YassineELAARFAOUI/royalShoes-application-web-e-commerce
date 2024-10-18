<<<<<<< HEAD
connexiondirect();
=======
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
const clickInpu1 = document.getElementById('clickInpu1');
const clickInpu2 = document.getElementById('clickInpu2');
const clickInpu3 = document.getElementById('clickInpu3');
const clickInpu4 = document.getElementById('clickInpu4');

const imgShow1 = document.getElementById('imgShow1');
const imgShow2 = document.getElementById('imgShow2');
const imgShow3 = document.getElementById('imgShow3');
const imgShow4 = document.getElementById('imgShow4');

clickInpu1.addEventListener('change', function () {
    const file = clickInpu1.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgShow1.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imgShow1.src = "";
    }
});
clickInpu2.addEventListener('change', function () {
    const file = clickInpu2.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgShow2.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imgShow2.src = "";
    }
});
clickInpu3.addEventListener('change', function () {
    const file = clickInpu3.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgShow3.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imgShow3.src = "";
    }
});
clickInpu4.addEventListener('change', function () {
    const file = clickInpu4.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgShow4.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imgShow4.src = "";
    }
<<<<<<< HEAD
});

function verifierData(){
    let categorie = document.getElementById('categorie');
    let price = document.getElementById('price');
    let priceAvant = document.getElementById('priceAvant');
    let description = document.getElementById('description');
    let messageInfo = document.getElementById('messageInfo');


    if(categorie.value==="null" || price.value==="" || priceAvant.value==="" || description.value==="" || nameFromURL(imgShow1.src)==="addproduct.png" || nameFromURL(imgShow2.src)==="addproduct.png" || nameFromURL(imgShow3.src)==="addproduct.png" || nameFromURL(imgShow4.src)==="addproduct.png"){
        messageInfo.style.backgroundColor="#ff3131";
        messageInfo.innerText="أدخل المعلومات كاملة";
        messageInfo.style.display="flex";
        window.scrollTo(0, 0);
    }else{
        sendImage('clickInpu1','idImg1');
        sendImage('clickInpu2','idImg2');
        sendImage('clickInpu3','idImg3');
        sendImage('clickInpu4','idImg4');
    }
}
function removeAll(){
    let categorie = document.getElementById('categorie');
    let price = document.getElementById('price');
    let priceAvant = document.getElementById('priceAvant');
    let description = document.getElementById('description');
    let imgShow1 = document.getElementById('imgShow1');
    let imgShow2 = document.getElementById('imgShow2');
    let imgShow3 = document.getElementById('imgShow3');
    let imgShow4 = document.getElementById('imgShow4');
    categorie.value="null";
    price.value="";
    priceAvant.value="";
    description.value="";
    imgShow1.src="../icones/addproduct.png";
    imgShow2.src="../icones/addproduct.png";
    imgShow3.src="../icones/addproduct.png";
    imgShow4.src="../icones/addproduct.png";

}
function lancerFunctionAddProduct() {
    let categorie = document.getElementById('categorie');
    let price = document.getElementById('price');
    let priceAvant = document.getElementById('priceAvant');
    let description = document.getElementById('description');

    let idImg1=document.getElementById('idImg1');
    let idImg2=document.getElementById('idImg2');
    let idImg3=document.getElementById('idImg3');
    let idImg4=document.getElementById('idImg4');

    if(idImg1.innerText!="" && idImg2.innerText!="" && idImg3.innerText!="" && idImg4.innerText!=""){
        sendDataOfProduct(categorie.value,price.value,priceAvant.value,description.value);
        removeAll();
    }
}
function sendDataOfProduct(categorie,price,priceAvant,description){
    let idImg1=document.getElementById('idImg1');
    let idImg2=document.getElementById('idImg2');
    let idImg3=document.getElementById('idImg3');
    let idImg4=document.getElementById('idImg4');
    $(document).ready(function () {
        $.ajax({
            url: "../pages/server/serversr.php",
            data: {
                functionValue: "sendDataOfProduct",
                categorie: categorie,
                price: price,
                priceAvant: priceAvant,
                description: description,
                idImage1: document.getElementById('idImg1').textContent,
                idImage2: document.getElementById('idImg2').textContent,
                idImage3: document.getElementById('idImg3').textContent,
                idImage4: document.getElementById('idImg4').textContent
            },
            type: "POST",
            dataType: "json",
            success: function (result) {
                messageInfo.style.backgroundColor="#34dd00d5";
                messageInfo.innerText="تم إضافة المنتج بنجاح";
                messageInfo.style.display="flex";
                window.scrollTo(0, 0);
               idImg1.innerText="";
               idImg2.innerText="";
               idImg3.innerText="";
               idImg4.innerText="";
            },
            error: function (xhr, status, error) {
                // Handle the error here
                console.log("fin error");
            }
        });
    });
}
function sendImage(img,idIMgDiv){
    var idIMgDivPut=document.getElementById(idIMgDiv);
    var formData = new FormData();
    formData.append('functionValue', 'sendImage');
    formData.append('img', document.getElementById(img).files[0]);

    $.ajax({
        url: '../pages/server/serversr.php',
        data: formData,
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',  // Specify the expected data type as JSON
        success: function (result) {
            idIMgDivPut.innerText=result.idImg;
        },
        error: function (xhr, status, error) {
            // Handle errors if needed
        }
    });
}
function nameFromURL(url) {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename;
}
setInterval(lancerFunctionAddProduct, 1000); 
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
                        }else{
                            window.location.assign("login.html");
                        }
                    },
                    error: function (xhr, status, error) {
                        // Handle the error here
                    }
                });
            });
        }
    }else{
        window.location.assign("login.html");
    }
}

function goback(){
    window.history.back();
}
=======
});
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
