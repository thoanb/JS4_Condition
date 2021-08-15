
/**
 * XUẤT 3 SỐ NGUYÊN THEO THỨ TỰ TĂNG DẦN
 * Khối 1: input
 * num1, num2, num3
 * 
 * Khối 2:
 * - Nếu num1 > num2 && num1 > num3
 *  + Đồng thời  num2 > num3 => num1 > num2 > num3
 *  + Ngược lại => num1 > num3 > num2
 * - neu num2 > num 1 && num 2 > num3
 *  + Đồng thời num1 > num3 => num2 > num1 > num3
 *  + Ngược lại => num2 > num3 > num1
 * - neu num3 > num1 && num3 > num2
 *  + Đồng thời num1 > num2 => num3 > num1 > num2
 *  + Ngược lại => num3 > num2 > num1
 * 
 * Khối 3: output
 * num1, num2, num3 theo thứ tự tăng dần
 * 
 */

document.getElementById("btnSort").onclick = function(){
    var num1 = document.getElementById("inputNum1").value;
    var num2 = document.getElementById("inputNum2").value;
    var num3 = document.getElementById("inputNum3").value;
    console.log(num1, num2, num3);
    var max = 0;
    var medium = 0;
    var min = 0;

    if(num1 > num2 && num1 > num3){
        if(num2 > num3){
            console.log("Thứ tự tăng dần: " +num3, num2, num1);
            var max = num1;
            var medium = num2;
            var min = num3;
        }else{
            console.log("Thứ tự tăng dần: " +num2, num3, num1);
            var max = num1;
            var medium = num3;
            var min = num2;
        }
    }else if(num2 > num1 && num2 > num3){
        if(num1 > num3){
            console.log("Thứ tự tăng dần: " +num3, num1, num2);
            var max = num2;
            var medium = num1;
            var min = num3;
        }else{
            console.log("Thứ tự tăng dần: " +num1, num3, num2);
            var max = num2;
            var medium = num3;
            var min = num1;
        }
    }else if(num3 > num1 && num3 > num2){
        if(num1 > num2){
            console.log("Thứ tự tăng dần: " +num2, num1, num3);
            var max = num3;
            var medium = num1;
            var min = num2;
        }else{
            console.log("Thứ tự tăng dần: " +num1, num2, num3);
            var max = num3;
            var medium = num2;
            var min = num1;
        }
    }else{
        console.log("Hãy nhập lại");
    }
    document.getElementById("txtNum").innerHTML = ("Thứ tự tăng dần: " +min +"," +medium +"," +max);
}


/**
 * CHƯƠNG TRÌNH CHÀO HỎI
 * Khối 1: input
 * Người sử dụng máy: ba, me, anh, em
 * 
 * Khối 2: 
 * Nếu là ba => Hello ba
 * Nếu là me => Hello me
 * Nếu là anh => Hello anh
 * Nếu là em => Hello em
 * 
 * Khối 3: output
 * Hello ba, Hello me, Hello anh, Hello em
 * 
 */

 document.getElementById("btnRun").onclick = function(){
    var member = document.getElementById("inputMember").value;
    console.log("Nguoi su dung la: " +member);

    var Ba = "";
    var Me = "";
    var Anh = "";
    var Em = "";

    if(member === Ba){
        console.log("Người sử dụng là: " +member);
    }else if(member === Me){
        console.log("Người sử dụng là: " +member);
    }else if(member === Anh){
        console.log("Người sử dụng là: " +member);
    }else if(member === Em){
        console.log("Người sử dụng là: " +member);
    }else{
        console.log("Nhập lại người sử dụng");
    }
    document.getElementById("txtMember").innerHTML = ("Hello " +member);
}


/**
 * SỐ LẺ, SỐ CHẴN
 * Khối 1: input
 * number1, number2, number3
 * 
 * Khối 2:
 * - Nếu number1%2 == 0 => number1 là số chẵn
 * Ngược lại là số lẻ => count
 * - Nếu number2%2 == 0 => number2 là số chẵn
 * Ngược lại là số lẻ => count
 * - Nếu number3%2 == 0 => number3 là số chẵn
 * Ngược lại là số lẻ => count
 * 
 * Khối 3: output
 * Số lượng số lẻ
 * Số lượng số chẵn
 * 
 */

document.getElementById("btnExport").onclick = function(){
    var number1 = document.getElementById("inputNumber1").value;
    var number2 = document.getElementById("inputNumber2").value;
    var number3 = document.getElementById("inputNumber3").value;
    console.log(number1, number2, number3);

    var countEven = 0;
    var countOdd = 0;

    if(number1%2 == 0){
        countEven++;
        console.log("Number1 là số chẵn");
    }else{
        countOdd++;
        console.log("Number1 là số lẻ");
    }

    if(number2%2 == 0){
        countEven++;
        console.log("Number2 là số chẵn");
    }else{
        countOdd++;
        console.log("Number2 là số lẻ");
    }

    if(number3%2 == 0){
        countEven++;
        console.log("Number3 là số chẵn");
    }else{
        countOdd++;
        console.log("Number3 là số lẻ");
    }
    document.getElementById("txtNumber").innerHTML = ("Số lương số lẻ là: " + +countOdd +"<br>" +"Số lượng số chẵn là: " +countEven);
}


/**
 * XÁC ĐỊNH LOẠI TAM GIÁC
 * Khối 1: input
 * edge1, edge2, edge3
 * 
 * Khối 2:
 * - Nếu edge1 == edge2 || edge2 == edge3 || edge1 == edge3
 * => Tam giác cân
 * - Nếu edge1 == edge2 == edge3
 * => Tam giác đều
 * - Nếu edge1*edge1 + edge2*edge2 == edge3*edge3 
 * || edge2*edge2 + edge3*edge3 == edge1*edge1 
 * || edge1*edge1 + edge3*edge3 == edge2*edge2 
 * => Tam giác vuông
 * 
 * Khối 3: output
 * Loại tam giác
 */

 document.getElementById("btnConfirm").onclick = function(){
    var edge1 = parseFloat(document.getElementById("inputEdge1").value);
    var edge2 = parseFloat(document.getElementById("inputEdge2").value);
    var edge3 = parseFloat(document.getElementById("inputEdge3").value);
    console.log(edge1, edge2, edge3);

    var triangle = "";

    if(edge1 == edge2 || edge2 == edge3 || edge1 == edge3){
        var triangle = "Tam giác cân";
        console.log("Đây là: "+triangle);
    }else if(edge1 == edge2 == edge3){
        var triangle = "Tam giác đều";
        console.log("Đây là: "+triangle);
    }else if(edge1*edge1 + edge2*edge2 == edge3*edge3 || edge2*edge2 + edge3*edge3 == edge1*edge1 || edge1*edge1 + edge3*edge3 == edge2*edge2){
        var triangle = "Tam giác vuông";
        console.log("Đây là: "+triangle);
    }else{
        var triangle = "Tam giác thường";
        console.log("Đây là: "+triangle);
    }

    document.getElementById("txtTriangle").innerHTML = triangle;
}






















