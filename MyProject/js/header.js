let header = document.getElementById('header');
if(header)
{
    header.insertAdjacentHTML('beforeend',`
        <div id="header">
            <div id="headerTop">
                <div><p>Miễn phí vận chuyển với đơn hàng trên 500k</p></div>
            </div>
            <div id="headerMid">
                <div id="logo">Logo</div>
                <div id="menu">Menu</div>
                <div id="icon">Tìm kiếm - Giỏ hàng</div>
            </div>
        </div>`)
}  