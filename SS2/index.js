function cau1()
{
    console.clear();
    //1.1
    console.log('1.1');
    console.log('var là từ khóa khai báo biến toàn cục - globally scoped, khai báo 1 lần dùng ở mọi nơi trừ khi nằm trong function');
    console.log('const là từ khóa khai báo biến hằng số');
    //1.2
    console.log('1.2');
    console.log('var có thể được khai báo lại, let thì không');
    console.log('let chỉ có thể khai báo biến trong 1 khối - block scoped');
    console.log('var dù được khai báo ở đâu đều được đem lên đầu scope trước khi code chạy');
    //1.3
    console.log('1.3');
    console.log('const không thể khai báo lại giá trị mới cũng như cập nhật');
    
    //1.4
    console.log('1.4');
    console.log('const sử dụng khi bạn muốn biến này không được thay đổi');
    console.log('let sử dụng khi bạn muốn cập nhật dữ liệu của biến trong tương lai');
    console.log('var sử dụng khi bạn muốn chia sẻ biến đó qua các scope khác nhau')
}   

function cau2()
{
    console.clear();
    console.log('boolean là 1 kiểu dữ liệu, trả về giá trị true hoặc false')
}

function cau3a()
{
    console.clear();
    for(let i = 0;i<7;i++)
    {
        console.log(i);
    }
}
function cau3b()
{
    console.clear();
    let i = Number(prompt('Nhập 1 số nguyên bất kì:'));
    for(let x = 0;x<i;x++)
    {
        console.log(x);
    }
}

function cau3c()
{
    console.clear();
    let i = Number(prompt('Nhập 1 số bất kì: '));
    for(let x = 3;x<i;x++)
    {
        console.log(x);
    }
}

function cau3d()
{

    console.clear();
    let n = Number(prompt('Nhập 1 số n bất kì: '));
    let c = Number(prompt('Nhập 1 số c bất kì: '));
    for(c;c<n;c++)
    {
        console.log(c);
    }
}

function cau3e()
{
    console.clear();
    let n = Number(prompt('Nhập 1 số n bất kì: '));
    let c = Number(prompt('Nhập 1 số c bất kì: '));
    while(c<n)
    {
        console.log(c);
        c=c+3;
    }
}

function cau3f()
{
    console.clear();
    let n = Number(prompt('Nhập 1 số n bất kì: '));
    let c = Number(prompt('Nhập 1 số c bất kì: '));
    let s = Number(prompt('Nhập 1 số s bất kì: '));
    while(c<n)
    {
        console.log(c);
        c=c+s;
    }
}

function cau4()
{
    let n = Number(prompt('Nhập x:'));
    var kq = 1;
    for(let i=1;i<=n;i++)
    {
        kq = kq * i;
    }
    alert(`The factorial of ${n} is ${kq}`);
}

function cau5()
{
    console.clear();
    let yourAge = Number(prompt('Dưới 18 tuổi không được xem phim con heo'));
    if(yourAge >= 18)
    {
        alert('Bạn đủ tuổi');
    }
    else
    {
        alert('Bạn không đủ tuổi truy cập nội dung này');
    }
}

function cau6()
{
    console.clear();
    let x = Number(prompt('Nhập một số x bất kì từ 0 - 9: '));
    if(x>9)
    {
        alert('Không thỏa mãn điều kiện');
        cau6()
    }
    else
    {
        let n=9/2;
        if(x>n)
        {
            alert(`${x} là nửa trên của 9`);
        }
        else if(x==n)
        {
            alert(`${x} bằng một nửa của 9`);
        }
        else
        {
            alert(`${x} là nửa dưới của 9`);
        }
    }
}

function cau7()
{
    console.clear();
    let n = Number(prompt('Nhập một số n bất kì ( số lớn ): '));
    let x = Number(prompt('Nhập một số x bất kì ( số nhỏ ): '));
    
    if(x>n)
    {
        alert('Bạn nhập sai, '+x+' lớn hơn '+ n +'!');
    }
    else 
    {
        n = n/2;
        if(x==n)
        {
            alert(x+' bằng '+ n +'!');
    
        }
        else if(x<n)
        {
            alert(x+' là nửa dưới của '+n*2);
        }
        else
        {
            alert(x+' là nửa trên của '+n*2);
        }
    }
}

function cau8()
{
    console.clear();
    let x = Number(prompt('Nhập một số x bất kì để kiểm tra chắn lẻ: '));
    if(x%2)
    {
        alert('Đây là số lẻ');
    }
    else
        alert('Đây là số chẵn');
}

function cau9a()
{ 
    console.clear();
    let x = 6;
    let l;
    let h;
    for(l=0;l<x/2;l++)
    {
        console.log('L');
    }
    for(h=0;h<x-l;h++)
    {
        console.log('H');
    }
}

function cau9b()
{ 
    console.clear();
    let x = Number(prompt('Nhập 1 số bất kì để in L với H'));
    for(let l=0;l<x/2;l++)
    {
        console.log('L');
    }
    for(let h=0;h<x-l;h++)
    {
        console.log('H');
    }
}

function cau9c()
{
    console.clear();
    for(let i = 1; i< 8; i++)
    {
        console.log(0);
        i++;
        console.log(1);
    }
}

function cau9d()
{
    console.clear();
    let x = Number(prompt('Nhập 1 số x bất kì'));
    let i = 0;
    while(i<x)
    {
        if(i<x)
        {
            console.log(0);
            i++;
        }  
        if(i<x)
        {
            console.log(1);
            i++;
        }
        
    }
}

function cau10()
{
    console.clear();
    let weigth = Number(prompt('Nhập cân nặng của bạn ( kg )'));
    let height = Number(prompt('Nhập chiều cao của bạn ( cm )'));
    height = height/100;
    let bmi = weigth / (height*height)
    alert(`Cân nặng của bạn là ${weigth}kg. Chiều cao là ${height}m`);
    if(bmi<16)
    {
        alert('Suy dinh dưỡng');
    }
    else if(bmi <= 18.5)
    {
        alert('Thiếu cân');
    }
    else if(bmi < 25)
    {
        alert('Bình thường');
    }
    else if( bmi < 30)
    {
        alert('Thừa cân');
    }
    else
    {
        alert('Béo phì');
    }
}
