function changeImage(id){
    let imP = document.getElementById('imP');
    let im1 = document.getElementById('im1');
    let im2 = document.getElementById('im2');
    let im3 = document.getElementById('im3');
    let im4 = document.getElementById('im4');

    if(id=='im1'){
        let val = im1.src;
        imP.src=val;
    }else if(id=='im2'){
        let val = im2.src;
        imP.src=val;
    }else if(id=='im3'){
        let val = im3.src;
        imP.src=val;
    }else if(id=='im4'){
        let val = im4.src;
        imP.src=val;
    }
}
function addQuantite(type){
    let numberInput=document.getElementById('numberInput');
    if(type==="plus"){
        numberInput.value=parseInt(numberInput.value, 10)+1;
    }else{
        if(numberInput.value=="0"){
            numberInput.value=0;
        }else{
            numberInput.value=parseInt(numberInput.value, 10)-1;
        }
    }
<<<<<<< HEAD
}
getDataProductUnit()
function getDataProductUnit(){
    var idProduct = window.location.href;
    if (extractPFromURL(idProduct)!="null"){
        $(document).ready(function () {
            $.ajax({
                url: "../pages/server/serversr.php",
                data: {
                    functionValue: "getDataProductUnit",
                    idProduct: extractPFromURL(idProduct)
                },
                type: "POST",
                dataType: "json",
                success: function (result) {
                   if(result.state){
                        document.getElementById('descriptionPlace').innerText=result.Description;
                        document.getElementById('priceAF').innerText=result.price;
                        document.getElementById('priceBF').innerText=result.priceAvant;
                        document.getElementById('imP').src="data:image/jpeg;base64,"+result.imagesProducts[0];
                        document.getElementById('im1').src="data:image/jpeg;base64,"+result.imagesProducts[0];
                        document.getElementById('im2').src="data:image/jpeg;base64,"+result.imagesProducts[1];
                        document.getElementById('im3').src="data:image/jpeg;base64,"+result.imagesProducts[2];
                        document.getElementById('im4').src="data:image/jpeg;base64,"+result.imagesProducts[3];
                        document.getElementById('imShow1').src="data:image/jpeg;base64,"+result.imagesProducts[3];
                        document.getElementById('imShow2').src="data:image/jpeg;base64,"+result.imagesProducts[3];
                        document.getElementById('imShow3').src="data:image/jpeg;base64,"+result.imagesProducts[3];
                        document.getElementById('imShow4').src="data:image/jpeg;base64,"+result.imagesProducts[3];

                   }else{
                        console.log("dont EXIST");
                   }
                },
                error: function (xhr, status, error) {
                   
                }
            });
        });
    }
}

function extractPFromURL(url) {
    const urlObj = new URL(url);
    const searchParams = urlObj.searchParams;
  
    if (searchParams.has('p')) {
      return searchParams.get('p');
    }else {
        window.location.assign("../index.html");
        return "null";
    }
  }


=======
}
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
