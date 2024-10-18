<<<<<<< HEAD
connexiondirect();
window.onload = function() {
    ListenerSelector("chaussure");
}
var selectElement = document.getElementById("categorie");
selectElement.addEventListener("change", function() {
    var selectedValue = selectElement.value;
    ListenerSelector(selectedValue);
});

=======
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.setItem("letConnect","0");
    window.location.assign("login.html");
<<<<<<< HEAD
}
function addProductPage(){
    window.location.assign("addproduct.html");
}
function deleteProduct(idProduct){
    $(document).ready(function () {
        $.ajax({
            url: "../pages/server/serversr.php",
            data: {
                functionValue: "deleteProduct",
                idProduct: idProduct
            },
            type: "POST",
            dataType: "json",
            success: function (result) {
                if(result.state){
                    var selectElement = document.getElementById("categorie");
                    var selectedValue = selectElement.value;
                    ListenerSelector(selectedValue);
                }
            },
            error: function (xhr, status, error) {
               
            }
        });
    });
}

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
                            // featchData();
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

function ListenerSelector(catigorieVla){
    let allProduct =document.getElementById('allProduct');
    var html ='';
    $(document).ready(function () {
        $.ajax({
            url: "../pages/server/serversr.php",
            data: {
                functionValue: "getDataProduct",
                catigorieVla: catigorieVla
            },
            type: "POST",
            dataType: "json",
            success: function (result) {
                let i=0;
                result.dataDescription.forEach(function (description) {
                    html += '<div class="div_product_unitaire"><div class="div_productImgAndDescription"><div class="div_img_product"><div class="div_img_product_unitaire"><img class="product_img" src="data:image/jpeg;base64,'+result.imageProduct[i]+'" ></div></div><div class="div_product_description"><div class="div_product_description_unitaire">'+description+'</div></div></div><div class="div_product_supression"><button class="btn_delete" onclick="deleteProduct(\'' + result.dataIdProduct[i] + '\')"><img class="icon_delete" src="../icones/delete_icon.png"></button></div></div>';
                    i+=1;
                });
                allProduct.innerHTML=html;
            },
            error: function (xhr, status, error) {
               
            }
        });
    });
}
=======
}
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
