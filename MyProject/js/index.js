const categoryhome = fetch('https://6070720985c3f00017470277.mockapi.io/api/shopmindx/category');
const product = fetch('https://6070720985c3f00017470277.mockapi.io/api/shopmindx/product');
var cart = []; // tạo mảng chứa các sản phẩm được thêm vào giỏ hàng
document.cookie = `detailId=`;
document.cookie = `categoryId=`;
async function loadhome()
{
    const conn = await product;
    const data1 = await conn.json();
    let ulmenu = document.getElementById('ul_menu');
    console.log(data1);
    let bdtitle = document.getElementById('bd_title');

    
    

    let newProduct = document.getElementById('newProduct');
    for(let i = 0; i<16;i++) // load menu
    {
        newProduct.insertAdjacentHTML('beforeend',`
            <div class="colProduct">
                <a><img src="https://contents.mediadecathlon.com/p1074061/k$b4e83d47e5434f0e389a771a74c5f19d/ao-thun-tap-gym-pilates-sportee-cho-nam-trang.jpg?format=auto&f=700x700"></a>
                <a>${data1[i].productName}</a>
                <a>${data1[i].productPrice} vnđ</a>
            </div>
        `);
    }
        
}

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

function checkCookie() // load các sản phẩm đã thêm vào giỏ hàng trước đây
{
   let checkcart = getCookie('productAddtoCart');
   if(checkcart)
   {
       let ckCart = checkcart.split(',');
       for(let i in ckCart)
       {
           cart.push(Number(ckCart[i]));
       }
   }
   console.log(cart)
}
checkCookie();

function btnAddcart(id)// Hàm thêm sản phẩm vào giỏ hàng
{
    if(cart.indexOf(id)==-1)
    {
        cart.push(id);
        console.log(cart)
    }
    else
    {
        alert('Sản phẩm đã có trong giỏ hàng');
    }
    document.cookie = `productAddtoCart=${cart}`
    console.log(document.cookie);

}

function loadDetail(id)
{
    document.cookie = `detailId=${id}`;
    location.href = `detail.html`;
}

function loadCategory(id)
{
    document.cookie = `categoryId=${id}`;
    location.href = `category.html`;
}
loadhome()