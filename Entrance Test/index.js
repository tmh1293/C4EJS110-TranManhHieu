//Câu 1
function findOppositeNumber(n,inputNumber)
{
    if(inputNumber >= n) {
        console.log('inputnumber phải nằm trong khoảng từ 0 đến n-1');
    }
    else if(n%2 == 0 && n >= 4 && n <= 20){
        let opposite;
        if(inputNumber >= n/2){
            opposite = inputNumber - n/2;
        }
        else{
            opposite = inputNumber + n/2;
        }
        console.log(opposite);
    }
    else{
        console.log('n phải là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20');
    }
}
findOppositeNumber(10, 10)
findOppositeNumber(10, 2)
findOppositeNumber(10, 6)


//Cấu 2
function merge2String(string1,string2)
{
    let kq2 = document.getElementById('kq2');
    let splitStr1 = string1.split('');
    let splitStr2 = string2.split('');
    let stringKq = [];
    for(i=j=0;i<splitStr1.length||i<splitStr2.length;i++)
    {
        if(i< splitStr1.length)
        {
            stringKq[j++] = splitStr1[i];
        }
        if(i< splitStr2.length)
        {
            stringKq[j++] = splitStr2[i];
        }
    }
    console.log(stringKq.join(''));
    // kq2.innerHTML=`Kết quả:${stringKq.join('')}`;
}

merge2String("abc","123");
merge2String("abc","0123");
merge2String("abcd","123");


function cau2()
{
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;
    merge2String(string1,string2)
}

function cau3()
{
    var timer;
    let inputNumber = document.getElementById('inputNumber');
    let time = document.getElementById('time')
    let random = Math.floor(Math.random() * 10);
    time.innerText = 10;
    timer = setInterval(() => {
            if(time.innerText==0)
            {
                time.innerText =`Hết giờ`;
                clearInterval(timer);        
            }
            else
            {
                time.innerText--;
            }   
        }, 1000);

    if(inputNumber.value == random)
    {
        alert(`Bạn đoán đúng, kết quả là ${random}`);
    }
    else
    {
        let i = 2;
        while(true)
        {
            let reEnter = Number(prompt('Bạn đoán sai, mời nhập lại'))
            if(i>0)
            {
                if(reEnter == random)
                {
                    alert(`Bạn đoán đúng, kết quả là ${random}`);
                    break;
                }
                i--;
            }
            else
            {
                alert(`hết lượt đoán,kết quả là ${random}`);
                break;
            }
        }
    }
}


function hideTab()
{
    let tab1 = document.getElementById('A1');
    let tab2 = document.getElementById('A2');
    let tab3 = document.getElementById('A3');
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    tab3.style.display = 'none';
}
function opencau1()
{
    let tab1 = document.getElementById('A1');
    hideTab();
    tab1.style.display = 'block';
}
function opencau2()
{
    let tab2 = document.getElementById('A2');
    hideTab();
    tab2.style.display = 'block';
}
function opencau3()
{
    let tab3 = document.getElementById('A3');
    hideTab();
    tab3.style.display = 'block';
}
hideTab()