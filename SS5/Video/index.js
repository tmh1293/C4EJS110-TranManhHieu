function cau11()
{
    let i = Math.random();
    console.log(i);
}

function cau12()
{
    const num = [2,5,6,9,10];

    const random = Math.floor(Math.random() * num.length);
    
    console.log(num[random]);
}


let quizzes = [
    {
        question:'Gần mực thì đen, gần đèn thì ...!',
        choices:[
            {
                name:'Sáng',
                rightchoice:true,
            },
            {
                name:'Chói',
                rightchoice:false,
            },
            {
                name:'Lóa',
                rightchoice:false,
            },
            {
                name:'Tươi',
                rightchoice:false,
            }],
    },
    {
        question:'Từ nào sau đây khác nghĩa với 3 từ còn lại?',
        choices:[
            {
                name:'Sinh nở',
                rightchoice:false,
            },
            {
                name:'Sinh sôi',
                rightchoice:false,
            },
            {
                name:'Sinh trưởng',
                rightchoice:false,
            },
            {
                name:'Sinh viên',
                rightchoice:true,
            }],
    },
    {
        question:'Màu đỏ pha với màu xanh lam ta được màu nào sau đây?',
        choices:[
            {
                name:'Nâu',
                rightchoice:false,
            },
            {
                name:'Tím',
                rightchoice:true,
            },
            {
                name:'Hồng',
                rightchoice:false,
            },
            {
                name:'Đen',
                rightchoice:false,
            }],
    }
];
function cau148()//1.4==>1.8
{
    let answered = [];
    let point = 0;
        while(true)
        {
            let randomquiz = Math.floor(Math.random() * quizzes.length);
            let quiz = quizzes[randomquiz]; 
            let listAnswer = []; 
            let checkquiz = answered.indexOf(quiz)
            if(checkquiz == -1)
            {
                while(true)
                {
                    let randomchoiced = Math.floor(Math.random() * quiz.choices.length);
                    let checkAns = listAnswer.indexOf(quiz.choices[randomchoiced]);
                    
                    if(checkAns != -1)
                    {
                        continue;
                    }
                    else
                    {
                        listAnswer.push(quiz.choices[randomchoiced]);
                    }
        
                    if(listAnswer.length == quiz.choices.length)
                    {
                        break;
                    }
                }
                
        
                let a = '';
                for(let j = 0; j<listAnswer.length;j++)
                {
                    a += `${j+1}. ${listAnswer[j].name}\r\n`;
                }
        
                let answer = prompt(`${quiz.question}\r\n${a}`);
                if(listAnswer[answer-1].rightchoice)
                {
                    alert('Bạn trả lời đúng');
                    point++;
                }
                else
                {
                    alert('Sai bét');
                }
                answered.push(quiz);
            }
            else
            {
                continue;
            }
    
            console.log(answered);
            if(answered.length == quizzes.length)
            {
                alert('Hết câu hỏi');
                alert(`Bạn trả lời đúng ${point}/${quizzes.length} câu`);
                break;
            }
        }
}

function cau21()
{
    let listWord = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
    let countWord = {};
    
    for(let i in listWord)
    {
        let a = listWord[i];
        if(countWord[a])
        {
            countWord[a]++;
        }
        else
        {
            countWord[a]=1;
        }
    }
    console.log(countWord.length);

}

function cau22() //2.2==>2.7
{
    const inventory = [
        {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
        },
        {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
        },
        {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
        },
        {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
        },
        {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
        },
        {
        name: 'HP Pavilion',     
        brand: 'HP',
        price: 14000,
        quantity: 7,
        },]
        
        let inventoryByBrand = {};
        
        for(i=0;i<inventory.length;i++)
        {
            let dBrand = inventory[i].brand;
            let checkGroup = inventoryByBrand.hasOwnProperty(dBrand);
            if(!checkGroup)
            {
                inventoryByBrand[dBrand]=[inventory[i]];
            }
            else
            {
                inventoryByBrand[dBrand].push(inventory[i]);
            }
            
        }
        console.log(inventoryByBrand);
        
        let enterBrand = prompt('Which brand').toLowerCase();
        for(let igroup in inventoryByBrand)
        {
            let detail ='';
            let totalValue = 0;

            if(enterBrand==igroup.toLowerCase())
            {
                for(let jgroup in inventoryByBrand[igroup])
                {
                    detail += `${inventoryByBrand[igroup][jgroup].name}\r\n`;
                    totalValue += inventoryByBrand[igroup][jgroup].price*inventoryByBrand[igroup][jgroup].quantity;
                    convertTT = (totalValue*1000).toLocaleString();            
                }
                let countB = inventoryByBrand[igroup].length;
                alert(`There are ${countB} generations of '${enterBrand.toUpperCase()}' in inventory:\r\r\n${detail}\r\nWith total value: ${convertTT} VND`);
                break;
            } 
        } 
}
