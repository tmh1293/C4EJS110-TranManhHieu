//Init
var listMovie = ['SuperMan','BatMan','SpiderMan'];
function init()
{
    console.log(listMovie);
}




//Create 
function create()
{
    let newMovie = prompt("Thêm phim mới vào danh sách");
    listMovie.push(newMovie);
    console.log(listMovie);
}

//Read 
function read()
{
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let chooseMovie = Number(prompt("Chọn phim"));
    console.log('Bạn vừa chọn '+listMovie[chooseMovie-1]);
}

//Update 1
function update1()
{
    console.clear();
    console.log(listMovie);
    let updateMovie = prompt("Đổi tên phim đầu tiên của danh sách");
    listMovie[0] = updateMovie;
    console.log(listMovie);
}

function update2()
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let n = prompt('Chọn vị trí tên phim muốn đổi');
    let updateMovie = prompt("Nhập tên phim mới");
    listMovie[n-1] = updateMovie;
    console.log(listMovie);
}

//Delete 1 
function delete1()
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let n = prompt("Nhập vị trí muốn xóa");
    listMovie.splice(n-1,1);
    console.log(listMovie);
}

//Delete 2
function delete2()
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let x = prompt("Nhập vị trí muốn xóa");
    let n = prompt("Nhập số phần tử muốn xóa");
    listMovie.splice(x-1,n);
    console.log(listMovie);
}

//Read All 1
function readall1()
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(listMovie[i]);
    }  
}

//Read All 2
function readall2()
{
    console.clear();
    for(i=0;i<listMovie.length/2;i++)
    {
        console.log(listMovie[i]);
    }
}

//Read All 3
function readall3()
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
}

//Update All
function updateall()
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i].toLowerCase());
    }
}

//Purpose of While
function purposeofwhile()
{
    console.clear();
    while(true){
        let yourName = prompt('Register an username ( 15 characters )');
        if(yourName.length<=15)
        {
            alert('Good username!');
            console.log('How many legs does a spider have?');
            let answer = ['None','4 legs','8 legs','12 legs'];
            for(i=0;i<answer.length;i++)
            {
                console.log(`${i+1}. `+answer[i])
            }
            
            while(true)
            {
                let reply = prompt('Your answer is:');
                if(reply<1 || reply >4)
                {
                    console.log('Invalide choice, the answer must be 1, 2, 3 or 4');
                }
                else if (reply!==3)
                {
                    console.log('Good luck next time'); 
                }
                else
                {
                    console.log('Bravo, you are correct');
                    break; 
                }
            }
            break;
        }
        else
        {
            alert('Your username is too long!');
        }
    }
}

function swap(a,b)
{
    let c = a;
    a=b;
    b=c;
}
function nangcao()
{
    let chuoi = [];
    
    while(true)
    {
        let x = Number(prompt('Bạn muốn nhập bao nhiêu số nguyên'));
        let y = x;
        y=x%1;
        if(y==0)
        {
            for(i=0;i<x;i++)
            {
                while(true)
                {
                    let n = Number(prompt(`Nhập số thứ ${i+1}`));
                    let m =n;
                    m=n%1;
                    if(m==0)
                    {
                        chuoi.push(n);
                        break;
                    }
                    else
                    {
                        alert('Bạn nhập không phải số nguyên');
                    }
                }     
            }
            console.log('Chuỗi vừa nhập vào là '+chuoi);
            //a
            console.log('a.Sắp xếp dãy vừa nhập theo chiều tăng dần.');
            console.log(chuoi.sort());
            //b
            console.log('b.Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ.');
            let chan = [];
            let le = [];
            for(p=0;p<chuoi.length;p++)
            {
                if(chuoi[p]%2==0)
                {
                    chan.push(chuoi[p]);
                }
                else
                {
                    le.push(chuoi[p]);
                }
            }
            console.log(`Dãy số chẵn: ${chan}`);
            console.log(`Dãy số lẻ: ${le}`);
            //c
            console.log('c.Loại bỏ các số trùng nhau ở 2 dãy.');
            let dpcchan = [...new Set(chan)];
            let dpcle = [...new Set(le)];

            console.log('Xóa trùng lặp ở dãy chắn: '+dpcchan);
            console.log('Xóa trùng lặp ở dãy lẻ: '+dpcle);
            break;
        }
        else
        {
            alert('Số nhập vào phải là số nguyên');
        }
    }
    
    
    
}

