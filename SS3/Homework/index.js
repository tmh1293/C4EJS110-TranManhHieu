// function cau1() //swap
// {
//     let a = 5;
//     let b = 6;
//     [a, b] = [b, a];
//     console.log(`a: ${a}`);
//     console.log(`b: ${b}`);
// }

// function cau2() // split
// {
//     const s = 'Hello beauty there';
//     const a = s.split(" ");
//     console.log(a);
// }

// function cau3()
// {
//     const a = [4, 5, 7, -8];
//     console.log(...a);
// }


let itemShop = ['Jean','T-Shirt','Socks'];
function loaditemshop()
{
    console.clear();
    for(i = 0; i<itemShop.length;i++)
    {
        console.log(`${i+1}. `+itemShop[i]);
    }              
}
function cau4()
{
    let ask = prompt('Hi there, welcome to shop admin panel, what do you want (C, R ,U ,D)?');
    if(ask != null)
    {
        ask = ask.toLowerCase();
        switch(ask)
        {              
            case 'c':
                while(true)
                {
                    let addItem = prompt('Nhập tên sản phẩm mới');
                    if(addItem)
                    {
                        itemShop.push(addItem);
                        alert('Done');
                        loaditemshop();
                    }
                    else
                    {
                        let cfa = confirm('Không có gì xảy ra cả ! Bạn có muốn tiếp tục?');
                        if(!cfa)
                        {
                            cau4()
                            break;
                        }  
                    }
                }
                break;
            case 'r':
                loaditemshop();
                cau4();
                break;
            case 'u':
                while(true)
                {
                    let pUpdate = Number(prompt('Chọn vị trí bạn muốn cập nhật'));

                    if(pUpdate%1!=0 || pUpdate > itemShop.length)
                    {
                        alert('Vị trí nhập không tồn tại');
                    }
                    else if(!pUpdate)
                    {
                        let cfu = confirm('Không có gì xảy ra cả ! Bạn có muốn tiếp tục?');
                        if(!cfu)
                        {
                            break;
                        }  
                    }
                    else
                    {
                        while(true)
                        {
                            let newName = prompt('Nhập tên mới');
                            if(newName)
                            {
                                itemShop[pUpdate-1] = newName;
                                alert('Xong');
                                loaditemshop();
                                break;
                            }
                            else if(!newName)
                            {
                                alert('Bạn chưa nhập gì cả');
                            }
                        }    
                    }
                }
                cau4();
                break;
            case 'd':
                while(true)
                {
                    let pDelete = Number(prompt('Nhập vị trí muốn xóa'));
                    if(pDelete%1!=0 || pDelete > itemShop.length)
                    {
                        alert('Vị trí bạn nhập chưa đúng');
                    }
                    else if(!pDelete)
                    {
                        let cfc = confirm('Không có gì xảy ra cả ! Bạn có muốn tiếp tục?');
                        if(!cfc)
                        {   
                            cau4();
                            break;
                        }  
                    }
                    else
                    {
                        let cfd = confirm(`Bạn chắc chắn muốn xóa ${itemShop[pDelete-1]} khỏi danh sách không?`)
                        if(cfd)
                        {
                            itemShop.splice(pDelete-1,1);
                            alert('Xong');
                            loaditemshop();
                        }
                        else
                        {
                            alert('Không xóa nữa');
                            loaditemshop();
                        } 
                    }
                }
                break;
            default:
                alert('This command is not supported');
                cau4();
                break;
        }
    }
    else
    {
        console.log('Out!')
    }
}

function cau5()
{
    let sumNum = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) để tính tổng dãy số đó');
    let arNum = sumNum.split(",");
    let sum = 0;
    
    for(i=0;i<arNum.length;i++)
    {
        arNum[i] = Number(arNum[i]);
        sum +=arNum[i];   
    }
    console.log(`Tổng của dãy số đó là ${sum}`);
}

function cau6() //Google
{
    let inNum = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) tìm số nhỏ nhất của dãy số đó');
    let arNum = inNum.split(",");
    
    var maxInNumbers = Math.max.apply(Math, arNum); 
    var minInNumbers = Math.min.apply(Math, arNum);
 
    // In giá trị ra màn hình
    console.log("Giá trị lớn nhất là " +maxInNumbers);
    console.log("Giá trị nhỏ nhất là " +minInNumbers);
}

function cau7()
{
    const arr = [3, 4, 6, -9, 10, -88, 2];
    let inNum = Number(prompt('Tìm 1 số trong mảng'));
    let index = arr.indexOf(inNum);
    if(index != -1)
    {
        console.log(`Số ${inNum} có trong mảng`);
    }
    else
    {
        console.log(`Số ${inNum} không có trong mảng`);
    }
}
let sheepsizeArr = [5,7,300,90,24,50,75];
function cau81()
{
    console.log('Hello, my name is Hieu, and here is my Sheep sizes');
    console.log(sheepsizeArr.join(" "));
    
}
function cau82()
{
    var maxsizeSheep = Math.max.apply(Math,sheepsizeArr);
    console.log(`Now my biggest sheep has size ${maxsizeSheep}, let's save it`);
}

function cau83()
{
    let index = sheepsizeArr.indexOf(Math.max.apply(Math,sheepsizeArr));
    sheepsizeArr[index] = 8;
    console.log('After shearing, he is my flock');
    console.log(sheepsizeArr.join(" "));
}

function cau84(i)
{
    console.log(`MONTH ${i}`);
    console.log('One month has, passed, my sheeps has grown, here are their size');
    for(let i = 0;i<sheepsizeArr.length;i++)
    {
        sheepsizeArr[i] += 50;
    }
    console.log(sheepsizeArr.join(" "));
}

function cau85()
{
    for(i=1;i<=4;i++)
    {
        cau82();
        cau83();
        cau84(i);
    }
}

function cau86()
{
    //let sizeSheep = sheepsizeArr.split(",");
    let sumSize = 0;
    
    for(i=0;i<sheepsizeArr.length;i++)
    {
        sheepsizeArr[i] = Number(sheepsizeArr[i]);
        sumSize +=sheepsizeArr[i];   
    }
    console.log(`My flock has size in total: ${sumSize}`);
    console.log(`I would get ${sumSize} * 2$ = ${sumSize*2} `)

}
// cau81()
// cau85()
// cau86()

function cau9()
{

}
cau11()
function cau10()
{
    let name = prompt("Enter a sequence of names");
    console.log(name);
    let aName = name.split(",");
    for(i=0;i<aName.length;i++)
    {
        aName[i]= '<'+aName[i]+'>';
    }
    alert(name+'=>'+aName);
}

function cau11()
{
    let listNum = prompt("Nhập 1 dãy số, mỗi số ngăn cách nhau bằng dấu phẩy(,), in ra màn hình dãy số lẻ");
    let aNum = listNum.split(",");
    let oddNum = [];
    for(i=0;i<aNum.length;i++)
    {
        
        if(aNum[i]%2 != 0)
        {
            oddNum.push(aNum[i]);
        }
    }
    alert(listNum+' => '+oddNum);
}


