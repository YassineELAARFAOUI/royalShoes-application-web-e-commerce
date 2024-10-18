FirstExicute();
const imageUrls = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
slider(imageUrls, 'imgSlider', 3000);

getDataProduct("chaussure");
getDataProduct("eges");
getDataProduct("bottes");
getDataProduct("spadriers");
getDataProduct("sacs");
getDataProduct("sabots");
getDataProduct("pantoufles");





function FirstExicute(){
    let menu_list_mobile =document.getElementById('menu_list_mobile');
    menu_list_mobile.style.height="0px";
}
function openCloseMenu(){
    let menu_list_mobile =document.getElementById('menu_list_mobile');
    let bodyWeb =document.getElementById('bodyWeb');
    var bodyElement = document.body;

    if(menu_list_mobile.style.height==="0px"){
        menu_list_mobile.style.height='fit-content';
        bodyWeb.style.display="none";
        bodyElement.style.backgroundColor = "var(--color1)";
    }else{
        menu_list_mobile.style.height='0px';
        bodyWeb.style.display="block";
        bodyElement.style.backgroundColor = "var(--color11)";
    }


}
function slider(images, elementId, interval) {
    let i_Img = 0;
    const imgSlider = document.getElementById(elementId);

    function updateImgSlider() {
        imgSlider.src = "./sliderImages/" + images[i_Img];
    }

    function nextImage() {
        i_Img = (i_Img + 1) % images.length;
        updateImgSlider();
    }

    function prevImage() {
        i_Img = (i_Img - 1 + images.length) % images.length;
        updateImgSlider();
    }

    updateImgSlider(); // Display the first image immediately

    setInterval(nextImage, interval);

    document.getElementById("btnLeft").addEventListener("click", prevImage);
    document.getElementById("btnRight").addEventListener("click", nextImage);
}
function getImageFilenameById(imgElement) {
    if (imgElement) {
      var src = imgElement.getAttribute("src");
      var srcParts = src.split('/');
      var filename = srcParts[srcParts.length - 1]; 
      return (filename.split('.')[0]);
    } else {
      return null;
    }
}
function goLogin(){
    window.location.assign("./pages/login.html");
}
function getDataProduct(catigorieVla){
    let alldiv =document.getElementById('all'+catigorieVla);
    var html ='';
    $(document).ready(function () {
        $.ajax({
            url: "./pages/server/serversr.php",
            data: {
                functionValue: "getDataProduct",
                catigorieVla: catigorieVla
            },
            type: "POST",
            dataType: "json",
            success: function (result) {
                let i=0;
                result.dataDescription.forEach(function (description) {
                    html += '<a href="./pages/product.html?p='+result.dataIdProduct[i]+'" class="div_product_unitaire"><div class="div_img_product"><div class="div_img_product_unitaire"><img src="data:image/jpeg;base64,'+result.imageProduct[i]+'" class="prodImg"></div></div><div class="div_descrip_product"><div class="div_NameProduct_global"><div class="div_NameProduct_unitaire">'+description+'</div></div><div class="div_NameProduct_global "><div class="div_NameProduct_unitaire div_prix"><div class="div_dh">د.م</div><div class="div_number_prix">'+result.price[i]+'</div></div></div><div class="div_NameProduct_global "><div class="div_NameProduct_unitaire div_prix div_nameProduct_uni_oldprix_size"><div class="div_dh div_dh_oldPrice">د.م</div><div class="div_number_prix div_number_oldprix">'+result.priceAvant[i]+'</div></div></div></div></a>';
                    i+=1;
                });
                alldiv.innerHTML=html;
            },
            error: function (xhr, status, error) {
               
            }
        });
    });
}
function goHome(){
    let menu_list_mobile =document.getElementById('menu_list_mobile');
    let bodyWeb =document.getElementById('bodyWeb');
    var bodyElement = document.body;
    
    getDataProduct("chaussure");
    getDataProduct("eges");
    getDataProduct("bottes");
    getDataProduct("spadriers");
    getDataProduct("sacs");
    getDataProduct("sabots");
    getDataProduct("pantoufles");

    menu_list_mobile.style.height='0px';
    bodyWeb.style.display="block";
    bodyElement.style.backgroundColor = "var(--color11)";
}
  

  