const container = document.getElementById('list');
for(let i = 0; i < 3; i++) {
container.insertAdjacentHTML('afterbegin', `<li>${i}</li>`)
}

function cau1()
{
    console.log('1-d,2-a,3-c,4-b');
}


function cau2()
{
    i=0;
    setInterval(() => {
        const d = document.getElementById('cau2');
        d.textContent = i;
        i++;
    }, 1000);
}
cau2()

function cau3()
{
    console.log('let + var đều không tồn tại bên ngoài khi khai báo trong 1 function')
}

function cau4()
{
    var x = document.getElementsByTagName("li");
    for(i=0;i<x.length;i++)
    {
        console.log(x[i]);
    }
}

function cau5()
{
    var x = document.getElementsByClassName("singer");
    for(i=0;i<x.length;i++)
    {
        console.log(x[i]);
    }
    
    var x = document.getElementById("singer1");
    x.remove();
}


function cau71()
{
var bt1 = document.getElementById("button1");
bt1.addEventListener('click', (e)=>{
    console.log(e.target);
});
var bt2 = document.getElementById("button2");
bt2.addEventListener('click', (e)=>{
    console.log(e.target);
});

}


function cau72()
{
    var bt1 = document.getElementById("button1");
    bt1.addEventListener('keydown', (e)=>{
        console.log(e.key);
    });
    console.log('Sau khi bấm button và bấm 1 phím bất kì, in ra phím vừa bấm');
    
}

function cau8(name,wish)
//cau8/9
{
    alert(`Tên tôi là ${name}. Điều tôi ước trong năm nay là ${wish}!`);
}
// cau8('Hiếu','có nhiều tiền')

function cau10(){
    let name = document.getElementById("name").value;
    var wish = document.getElementById("wish").value;
    if(!wish)
    {
        alert('Bạn không có ước mơ');
    }
    else
    {
        cau8(name,wish);
    }
    
}

function cau11()
{
    var nameInput = document.getElementById("nameinput");
    var nameInput1 = document.getElementById("nameinput");
    var upperBtn = document.getElementById("upper_btn");
    var divResult = document.getElementById("result_div");
    console.log(nameInput); //11.4 
    console.log(upperBtn); //11.2
    console.log(divResult); //11.7
    upperBtn.addEventListener('click',()=>{
        console.log(nameInput); //11.3
        console.log(nameInput1.value.toUpperCase()); //11.5 //11.6
        divResult.innerHTML = nameInput1.value.toUpperCase(); //11.8
    })
}
cau11()
var items = ['Backpack', 'Miband watch', 'Ring']; //12.1
function cau12()
{
    
    console.log(items);
    var ul = document.getElementById("item_list_ul");
    
    
    for(let j = 0; j < items.length; j++){
            ul.insertAdjacentHTML('beforeend', `<li><span>${items[j]}</span><button>Remove</button></li>`);//12.12    
        }

    var li = ul.getElementsByTagName('li');
    var removebtn = ul.getElementsByTagName('button');//12.13  
    console.log(removebtn);
    for(let i = 0; i < removebtn.length; i++){   
        let itemName = items[i]; 
        
        removebtn[i].addEventListener('click',getClick );
        function getClick()
		{
			console.log(`Index:${i}`); //12.14     
            items.splice(items.indexOf(itemName),1); //12.15
            li[i].remove();//12.16
            
            console.log(li);
            console.log(items); 
		}
    }

    


    console.log(ul); //12.4
    var btnadd = document.getElementById("add_btn");
    var inputitem = document.getElementById("inputitem");
    console.log(btnadd);
    console.log(inputitem); //12.6

    //12.7 12.8
    btnadd.addEventListener('click',()=>{
        items.push(inputitem.value); //12.9
        ul.insertAdjacentHTML('beforeend', `<li><span>${inputitem.value}</span><button>Remove</button></li>`); //12.10
        inputitem.value ="";//12.11
        
    })
}
cau12();
