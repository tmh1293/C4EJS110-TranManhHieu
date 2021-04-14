let id = getCookie('categoryId');
if(!id)
{
    location.href='index.html';
}
console.log(id)
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

async function loadDetail(id)
{
    const product = fetch(`https://6070720985c3f00017470277.mockapi.io/api/shopmindx/product`);
    let conn = await product;
    let data = await conn.json();
    for(let i in data)
    {
        if(data[i].categoryId == id)
        {
            console.log(data[i])
        }
    }
    
}
loadDetail(id);