let username = document.getElementById('username');
let password = document.getElementById('password');
let btnsubmit = document.getElementById('submit');
const account = fetch('https://6070720985c3f00017470277.mockapi.io/api/shopmindx/user');

async function checkLogin()
{
    const connUser = await account;
    const data = await connUser.json();
    for(let i in data)
    {
        if(username.value == data[i].userName)
        {
            if(password.value == data[i].userPw)
            {
                document.cookie = `username=${username.value}`;
                window.location='admin.html';
                break;         
            }
            else
            {
                alert('Sai password!')
                break;
            }
        }
        else
        {
            alert('Username không tồn tại');
            break;
        }
    }
}

btnsubmit.addEventListener('click',checkLogin)
