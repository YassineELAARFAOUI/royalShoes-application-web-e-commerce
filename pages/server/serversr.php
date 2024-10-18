<?php

<<<<<<< HEAD
require_once "db.php";
=======
// require_once "db.php";
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053

if ($_POST['functionValue'] === "login") {
    $resultReturn = array();
    $username = $_POST['username'];
    $password = $_POST['password'];

<<<<<<< HEAD
    if($username=="khalid" && $password=="12@@34"){
=======
    if($username=="khalid" && $password=="1234"){
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
        $resultReturn = array('state' => 1);
    }else{
        $resultReturn = array('state' => 0);
    }
    echo json_encode($resultReturn);

<<<<<<< HEAD
}else if($_POST['functionValue'] === "sendImage"){
    $resultReturn = array();

    do{
        $idImg=generateRandomString(25);
        $stmt = $conn->prepare("SELECT * FROM img_products WHERE idImgProduct LIKE ?");
        $stmt->bind_param('s', $idImg);
        $stmt->execute();
    
        $result = $stmt->get_result();
        $i=0;
        while ($row = $result->fetch_assoc()) {
            $i++;
        }
        $stmt->close();
    }while($i!=0);

    $stmt = $conn->prepare("INSERT INTO img_products (data,idImgProduct) VALUES (?,?)");
    $stmt->bind_param('ss', $imageData,$idImg);
    $imageData = file_get_contents($_FILES['img']['tmp_name']);
    if ($stmt->execute()) {
        $resultReturn = array('state' => 1,'idImg' => $idImg);
    }else{
        $resultReturn = array('state' => 0);
    }

    $stmt->close();
    $conn->close();
    echo json_encode($resultReturn);
}else if($_POST['functionValue'] === "sendDataOfProduct"){
    $resultReturn = array();

    $categorie = $_POST['categorie'];
    $price = $_POST['price'];
    $priceAvant = $_POST['priceAvant'];
    $description = $_POST['description'];
    $idImage1 = $_POST['idImage1'];
    $idImage2 = $_POST['idImage2'];
    $idImage3 = $_POST['idImage3'];
    $idImage4 = $_POST['idImage4'];

    do{
        $idProduct=generateRandomString(15);
        $stmt = $conn->prepare("SELECT * FROM products WHERE idProduct LIKE ?");
        $stmt->bind_param('s', $idProduct);
        $stmt->execute();
    
        $result = $stmt->get_result();
        $i=0;
        while ($row = $result->fetch_assoc()) {
            $i++;
        }
        $stmt->close();
    }while($i!=0);


    $stmt = $conn->prepare("INSERT INTO products (categorie,price,priceAvant,description,idImage1,idImage2,idImage3,idImage4,idProduct) VALUES (?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param('siissssss', $categorie,$price,$priceAvant,$description,$idImage1,$idImage2,$idImage3,$idImage4,$idProduct);
    if ($stmt->execute()) {
        $resultReturn = array('state' => 1);
    }else{
        $resultReturn = array('state' => 0);
    }

    $stmt->close();
    $conn->close();
    echo json_encode($resultReturn);

}else if($_POST['functionValue'] === "deleteProduct"){
    $resultReturn = array();
    $idProduct = $_POST['idProduct'];

    $stmt = $conn->prepare("SELECT * FROM products WHERE idProduct LIKE ?");
    $stmt->bind_param('s', $idProduct);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        $idIMG1 = $row['idImage1'];
        $idIMG2 = $row['idImage2'];
        $idIMG3 = $row['idImage3'];
        $idIMG4 = $row['idImage4'];
    }

    $idIMGs = [$idIMG1, $idIMG2, $idIMG3, $idIMG4];
    $stmt = $conn->prepare("DELETE FROM img_products WHERE idImgProduct LIKE ?");
    $stmt->bind_param('s', $idIMG);

    foreach ($idIMGs as $idIMG) {
        $stmt->execute();
    }

    
    $stmt = $conn->prepare("DELETE FROM products WHERE idProduct Like ?");
    $stmt->bind_param('s', $idProduct);
    if ($stmt->execute()) {
        $resultReturn = array('state' => 1);
    } else {
        $resultReturn = array('state' => 0);
    }

    echo json_encode($resultReturn);

    $stmt->close();
    $conn->close();
}else if($_POST['functionValue'] === "getDataProduct"){
    $resultReturn = array();
    $catigorieVla = $_POST['catigorieVla'];

    $stmt = $conn->prepare("SELECT * FROM products WHERE categorie Like ?");
    $stmt->bind_param('s', $catigorieVla);
    $stmt->execute();
    $result = $stmt->get_result();
    $dataDescription = array();
    $dataIdProduct = array();
    $dataIMG1Id= array();
    $prices= array();
    $pricesAvant= array();
    while ($row = $result->fetch_assoc()) {
        $dataDescription[] = $row['description'];
        $dataIdProduct[] = $row['idProduct'];
        $dataIMG1Id[] = $row['idImage1'];
        $prices[] =verifyDecimalPart($row['price']);
        $pricesAvant[] =verifyDecimalPart($row['priceAvant']);
    }

    $result = $conn->query("SELECT idImgProduct,data FROM img_products");

   if ($result) {
       $images = [];
       $imagesId=[];
       while ($row = $result->fetch_assoc()) {
           $images[] = base64_encode($row['data']);
           $imagesId[] = $row['idImgProduct'];
       }
    }
    $i=0;
    $imagesProducts=[];
    foreach ($imagesId as $imageId) {
        foreach ($dataIMG1Id as $item) {
            if($imageId==$item){
                $imagesProducts[]=$images[$i];
            }
        }
        $i++;
    }

    $resultReturn = array('imageProduct' => $imagesProducts,'dataDescription' => $dataDescription,'dataIdProduct' => $dataIdProduct,'price' => $prices,'priceAvant' => $pricesAvant);

    echo json_encode($resultReturn);
}else if($_POST['functionValue'] === "getDataProductUnit"){
    $resultReturn = array();
    $idProduct = $_POST['idProduct'];

    $stmt = $conn->prepare("SELECT * FROM products WHERE idProduct LIKE ?");
    $stmt->bind_param('s', $idProduct);  
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows == 1) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $Description = $row['description'];
            $prices =verifyDecimalPart($row['price']);
            $pricesAvant =verifyDecimalPart($row['priceAvant']);
            $IMG1 = $row['idImage1'];
            $IMG2 = $row['idImage2'];
            $IMG3 = $row['idImage3'];
            $IMG4 = $row['idImage4'];
        }

        $result = $conn->query("SELECT idImgProduct,data FROM img_products");

        if ($result) {
            $images = [];
            $imagesId=[];
            while ($row = $result->fetch_assoc()) {
                $images[] = base64_encode($row['data']);
                $imagesId[] = $row['idImgProduct'];
            }
        }
        $dataIMG1Id=[];
        $dataIMG1Id[] =$IMG1;
        $dataIMG1Id[] =$IMG2;
        $dataIMG1Id[] =$IMG3;
        $dataIMG1Id[] =$IMG4;
        $i=0;
        $imagesProducts=[];
        foreach ($imagesId as $imageId) {
            foreach ($dataIMG1Id as $item) {
                if($imageId==$item){
                    $imagesProducts[]=$images[$i];
                }
            }
            $i++;
        }

        $resultReturn = array('state' =>1,'Description' =>$Description,'price' =>$prices,'priceAvant' =>$pricesAvant,'imagesProducts' =>$imagesProducts);
    } else {
        $resultReturn = array('state' => 0);
    }
    echo json_encode($resultReturn);
=======
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
}



<<<<<<< HEAD
function generateRandomString($length) {
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }

    return $randomString;
}

function verifyDecimalPart($number_str) {
    if (strpos($number_str, '.') !== false) {
        if (substr($number_str, -3) === '.00') {
            return $number_str;
        } else {
            return $number_str;
        }
    } else {
        return $number_str . '.00';
    }
}




=======
>>>>>>> 70b1724af3eb6ebdfe174751cdfc5ba5a5838053
?>