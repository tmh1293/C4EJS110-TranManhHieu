var cart = [];
const product = fetch(`https://6070720985c3f00017470277.mockapi.io/api/shopmindx/product`);
let tablecart = document.getElementById('cart');
let totalelement = document.getElementById('total'); 
async function loadCart()
{
    
    let connprod = await product;
    let data = await connprod.json();
    for(let value of cart)
    {
        for (let i in data) {
            if(data[i].productId==value)
            {
                tablecart.insertAdjacentHTML('beforeend',`
                <tr>
                    <td>${data[i].productId}</td>
                    <td>${data[i].productName}</td>
                    <td>${data[i].productColor}</td>
                    <td>${data[i].productSize}</td>
                    <td class="priceCart">${data[i].productPrice}</td>
                    <td><input type="number" onchange="totalValue()" class="qtyCart" value="1" style="width:50px"></td>
                    <td>
                        <button>Xóa</button>
                    </td>
                </tr>
                `)
            }        
        }
    }
    totalValue()

}

function totalValue()
{
    let total = 0;
    
    let cartPrice = document.getElementsByClassName("priceCart");
    let cartQty = document.getElementsByClassName("qtyCart");
    
    for(let i = 0; i<cartPrice.length;i++)
    {
        if(Number(cartQty[i].value)<=0)
        {
            alert('Số lượng phải lớn hơn 0');
            cartQty[i].value = 1;
        }
        total += Number(cartPrice[i].innerHTML)*Number(cartQty[i].value);
        totalelement.innerHTML = total;
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
}
checkCookie();
loadCart();
