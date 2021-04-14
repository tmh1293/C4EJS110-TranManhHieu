function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function checklogin()
{
    var username=getCookie("username");
    if(username != 'admin')
    {
        window.location='login.html'
    }
}
checklogin()
let btnLogout = document.getElementById('logout');
btnLogout.addEventListener('click',logout);
function logout()
{
    document.cookie = 'username=';
    console.log(document.cookie)
    checklogin()
}
const category = fetch('https://6070720985c3f00017470277.mockapi.io/api/shopmindx/category');
async function loadCategory()
{
    const conncate = await category;
    const data = await conncate.json();
    console.log(data);
    let thead = document.getElementById('thead');
    for(let i in data)
    {
       
        thead.insertAdjacentHTML('beforeend',`
        <tr>
            <td>${data[i].categoryId}</td>
            <td>${data[i].categoryName}</td>
            <td><input type="checkbox" id="ckb${i}" onclick="return false;"></td>
            <td>
                <button id="btnUpd${i}">Cập nhật</button>
                <button id="btnRmv${i}">Xóa</button>
            </td>
        </tr>`);
        let ckb = document.getElementById(`ckb${i}`);
        if(data[i].categoryEnable)
        {
            ckb.checked = true;
        }

        let btnRemove = document.getElementById(`btnRmv${i}`)
        btnRemove.addEventListener('click',()=>{
            deleteData(`https://6070720985c3f00017470277.mockapi.io/api/shopmindx/category/${data[i].categoryId}`)
            .then(()=>{location.reload()});
        })

        
    }
}
const postcategory = fetch('https://6070720985c3f00017470277.mockapi.io/api/shopmindx/category');
async function addCategory()
{
    const conncate = await postcategory;
    const data = await conncate.json();
    let cateName = document.getElementById('cateName');
    let cateDes = document.getElementById('cateDes');
    let cateImg = document.getElementById('cateImg');
    let cateEnb = document.getElementById('cateEnb');
    let cateAdd = document.getElementById('cateAdd');
    cateAdd.addEventListener('click',()=>{
        postData('https://6070720985c3f00017470277.mockapi.io/api/shopmindx/category',{
            "categoryName": cateName.value,
            "categoryDes": cateDes.value,
            "categoryImage": cateImg.value,
            "categoryEnable": cateEnb.checked,  
        })
        .then(()=>{location.reload()});
        
    });
    
}

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers:{
            'Content-Type': 'application/json'
            },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteData(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    const resData = 'resource deleted...';
    return resData;
}

async function putData(url, data) {

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json'
        },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }
console.log(document.cookie)
loadCategory();
addCategory();