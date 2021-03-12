function cau1a(){
    //alert('In JavaScript, in what cases, you will get the SyntaxError telling you that some of your variables have invalid names? Can you give 3 different examples of invalid variable names?');
    console.log('Trong JS, bạn sẽ gặp lỗi nếu đặt tên biến bắt đầu bằng số, kí tự đặc biệt, và các từ trùng với từ khóa của JS.')
    console.log('VD: let 1a; let @a; let return;')   
}

function cau1b(){
    //alert('In JavaScript, how to check a variable data types?');
    console.log('Sử dụng toán tử typeof để kiểm tra một dữ liệu bất kì');
    console.log('VD: "typeof hieu" trả về string ');
    alert(typeof 'hieu');
}

function cau2(){
    console.log('1-b. Front-end - Consists of HTML, CSS, JS');
    console.log('2-a, HTML - Content')
    console.log('3-e, CSS - Decoration, appearance')
    console.log('4-c, JS - Direct User interaction')
}

function cau3a(){
    //alert('A String named message with value ‘Coding is great’, then use console.log to print it out');
    let strname = 'Coding is great';
    console.log(strname);
}

function cau3b(){
    //alert('A Number named studentCount with value 0, then use console.log to  print it out');
    let studentCount = Number(0);
    console.log(studentCount);
}

function cau4a(){
    // alert('Change message into ‘Coding might not be easy, but still great’, then use console.log to  print it out');
    strname = 'Coding might not be easy, but still great';
    console.log(strname.toUpperCase());

}

function cau4b(){
    // alert('Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out');
    studentCount = 17;
    console.log(studentCount);
}

function cau4c(){
    // alert('After completing exercise a, change the message into lowercase, then use console.log to print it out');
    console.log(strname.toLowerCase());
}

function cau4d(){
    // alert('After completing exercise b, increase studentCount by 1, then use console.log to print it out');
    studentCount++;
    console.log(studentCount);
}

function cau5(){
    // alert('Write a script to show user a nice message');
    alert('This is a nice message!')
}

function cau6(){
    // alert('Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)');
    let stryourname = prompt('What is your name?');
    alert('Hi, '+stryourname+'!')

}

function cau7(){
    // alert('Write a script that ask 2 things from users, their first name and last name, then greet them with their full name');
    let strFirstname = prompt('Enter your first name?');
    let strLastname = prompt('Enter your last name?');
    alert('Nice to meet you, ' +strFirstname+' '+strLastname)
}

function cau8(){
    // alert('Write a script that calculates the area of a square');
    let sizeSquare = prompt('Nhập vào độ dài cạnh của hình vuông (m)');
    let numSzSquare = Number(sizeSquare);
    alert('Diện tích hình vuông là: '+Math.pow(numSzSquare,2)+'m²');
}

function cau9(){
    // alert('Write a script that calculates the area of a circle');
    let radius = prompt('Nhập vào bán kính hình tròn:');
    let numradius = Number(radius);
    alert('Diện tích hình tròn là: '+numradius*numradius*3.14);
    alert('Chu vi hình tròn là: '+2*numradius*3.14)

}

function cau10(){
    // alert('Write a script that converts Celsius (°C) into Fahrenheit (°F)');
    let doC = prompt('Nhập vào nhiệt độ C:');
    let numdoC = Number(doC);
    let numdoF = (doC*1.8)+32;
    alert(numdoC+ '°C tương ứng với: '+numdoF+' °F');

}