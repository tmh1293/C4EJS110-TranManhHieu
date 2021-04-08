function cau1()
{
    var count = document.getElementById("kq1");
    var btn = document.querySelectorAll("#cau1 button");
    console.log(btn)
    count.innerText = 0;
    console.log(count);
    
    for(i=0;i<btn.length;i++)
    {
        if(btn[i].innerHTML=="-")
        {
            btn[i].addEventListener('click',()=>{
                count.innerHTML--;
            })
        }
        else
        {
            btn[i].addEventListener('click',()=>{
                count.innerHTML++;
            })
        }
    }

}

function cau2()
{
    var kq2 = document.getElementById("kq2");
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    btnStop.disabled = true;
    var input = document.getElementById("value");

    //kq2.innerText = 5;
    console.log(input);
    // setInterval(() => {
    //     if(kq2.innerText==0)
    //     {
    //         clearInterval();
    //     }
    //     else
    //     {
    //         kq2.innerText--;
    //     }        
    // }, 1000);
    
    // var time;
    // btnStart.addEventListener('click',()=>{
    //     btnStart.disabled = true;
    //     btnStop.disabled = false;
    //     time = setInterval(() => {
    //         if(kq2.innerText==0)
    //         {
    //             clearInterval();
    //         }
    //         else
    //         {
    //             kq2.innerText--;
    //         }   
    //     }, 1000);
    // })

    // btnStop.addEventListener('click',()=>{
    //     btnStart.disabled = false;
    //     btnStop.disabled = true;
    //     clearInterval(time);
    // })

    var time;
    btnStart.addEventListener('click',()=>{
        btnStart.disabled = true;
        btnStop.disabled = false;
        input.disabled = true;
        kq2.innerText = input.value;
        time = setInterval(() => {
            if(kq2.innerText==0)
            {
                clearInterval();
            }
            else
            {
                kq2.innerText--;
            }   
        }, 1000);
    })

    btnStop.addEventListener('click',()=>{
        btnStart.disabled = false;
        btnStop.disabled = true;
        input.disabled = false;
        kq2.innerText = "Stopped";
        clearInterval(time);
    })
}

var cauba =[{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Nothing happens unless first we dream.",
    "quoteAuthor": "Carl Sandburg"
    }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "Life is a learning experience, only if you learn.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
    }, {
    "quoteText": "Peace comes from within. Do not seek it without.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
    }, {
    "quoteText": "Life is change. Growth is optional. Choose wisely.",
    "quoteAuthor": "Karen Clark"
    }, {
    "quoteText": "You'll see it when you believe it.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "Today is the tomorrow we worried about yesterday.",
    "quoteAuthor": "Hieu Tran Manh"
    }, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": "Hieu Tran Manh"
    }, {
    "quoteText": "Every man dies. Not every man really lives.",
    "quoteAuthor": "Hieu Tran Manh"
    }, {
    "quoteText": "To lead people walk behind them.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Having nothing, nothing can he lose.",
    "quoteAuthor": "William Shakespeare"
    }, {
    "quoteText": "Trouble is only opportunity in work clothes.",
    "quoteAuthor": "Henry J. Kaiser"
    }, {
    "quoteText": "A rolling stone gathers no moss.",
    "quoteAuthor": "Publilius Syrus"
    }, {
    "quoteText": "Ideas are the beginning points of all fortunes.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Everything in life is luck.",
    "quoteAuthor": "Donald Trump"
    }, {
    "quoteText": "Doing nothing is better than being busy doing nothing.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Trust yourself. You know more than you think you do.",
    "quoteAuthor": "Benjamin Spock"
    }, {
    "quoteText": "Study the past, if you would divine the future.",
    "quoteAuthor": "Confucius"
    }, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": "Hieu Tran Manh"
    }, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
    }, {
    "quoteText": "Well done is better than well said.",
    "quoteAuthor": "Benjamin Franklin"
    }, {
    "quoteText": "Bite off more than you can chew, then chew it.",
    "quoteAuthor": "Ella Williams"
    }, {
    "quoteText": "Work out your own salvation. Do not depend on others.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "One today is worth two tomorrows.",
    "quoteAuthor": "Benjamin Franklin"
    }, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
    }, {
    "quoteText": "God always takes the simplest way.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "From small beginnings come great things.",
    "quoteAuthor": "Hieu Tran Manh"
    }, {
    "quoteText": "Learning is a treasure that will follow its owner everywhere",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "The world is always in movement.",
    "quoteAuthor": "V. Naipaul"
    }, {
    "quoteText": "Never mistake activity for achievement.",
    "quoteAuthor": "John Wooden"
    }, {
    "quoteText": "What worries you masters you.",
    "quoteAuthor": "Haddon Robinson"
    }, {
    "quoteText": "One faces the future with ones past.",
    "quoteAuthor": "Pearl Buck"
    }, {
    "quoteText": "Goals are the fuel in the furnace of achievement.",
    "quoteAuthor": "Brian Tracy"
    }, {
    "quoteText": "Who sows virtue reaps honour.",
    "quoteAuthor": "Leonardo da Vinci"
    }, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
    }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "A goal without a plan is just a wish.",
    "quoteAuthor": "Larry Elder"
    }, {
    "quoteText": "To succeed, we must first believe that we can.",
    "quoteAuthor": "Michael Korda"
    }, {
    "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "A weed is no more than a flower in disguise.",
    "quoteAuthor": "James Lowell"
    }, {
    "quoteText": "Do, or do not. There is no try.",
    "quoteAuthor": "Yoda"
    }, {
    "quoteText": "All serious daring starts from within.",
    "quoteAuthor": "Harriet Beecher Stowe"
    }, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
    }, {
    "quoteText": "Love is the flower you've got to let grow.",
    "quoteAuthor": "John Lennon"
    }, {
    "quoteText": "Don't wait. The time will never be just right.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "Time is the wisest counsellor of all.",
    "quoteAuthor": "Pericles"
    }, {
    "quoteText": "You give before you get.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Wisdom begins in wonder.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "Without courage, wisdom bears no fruit.",
    "quoteAuthor": "Baltasar Gracian"
    }, {
    "quoteText": "Change in all things is sweet.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "What you fear is that which requires action to overcome.",
    "quoteAuthor": "Byron Pulsifer"
    }
    ];
    
function cau3()
{
    var btnRandom = document.getElementById("btnRandom");
    btnRandom.addEventListener('click',()=>{
        var random = Math.floor(Math.random()*cauba.length);
        var text = document.getElementById("text");
        var author = document.getElementById("author");
        text.innerText = cauba[random].quoteText;
        author.innerText = cauba[random].quoteAuthor;
    })
}



var timeSheetData = 
[
    {
        "Project": "Learn front-end",
        "Task": "Learn HTML",
        "Time Spent": 6,
    },
    {
        "Project": "Learn front-end",
        "Task": "Learn CSS",
        "Time Spent": 8,
    },
    {
        "Project": "Learn front-end",
        "Task": "Learn JS Variables and Data Types",
        "Time Spent": 6,
    },
    {
        "Project": "Learn git",
        "Task": "Learn git basics",
        "Time Spent": 2,
    }
]
var inProject = document.getElementById("inputProject");
var inTask = document.getElementById("inputTask");
var inTime = document.getElementById("inputTime");
var btnAdd = document.getElementById("btnAddtask");
var btnClear = document.getElementById("btnClear");
var body = document.getElementById("ts_tbody");
var trbody = body.getElementsByTagName("tr");
var index;

function refreshtable()//
{
    for(i=0;i<timeSheetData.length;i++)
    {
        var project = timeSheetData[i].Project;
        var task = timeSheetData[i].Task;
        var timeSpend = timeSheetData[i]["Time Spent"];
        body.insertAdjacentHTML('beforeend',`<tr id="tr${i}"><td>${project}</td><td>${task}</td><td>${timeSpend}</td></tr>`);
    }
    for(j=0;j<timeSheetData.length;j++)
    {
        var addbtn=document.getElementById(`tr${j}`)
        addbtn.insertAdjacentHTML('beforeend',`<td><button onclick="remove(${j})">X</button><button onclick="update(${j})">U</button></td>`);
    }
}

function cau4()
{
    console.log(trbody);
    for(i=0;i<timeSheetData.length;i++)
    {
        var project = timeSheetData[i].Project;
        var task = timeSheetData[i].Task;
        var timeSpend = timeSheetData[i]["Time Spent"];
        body.insertAdjacentHTML('beforeend',`<tr id="tr${i}"><td>${project}</td><td>${task}</td><td>${timeSpend}</td></tr>`);
    }
    
    var thead = document.getElementById("thead");
    console.log(thead);
    var trheader = document.getElementById("t_header");
    trheader.insertAdjacentHTML('beforeend',`<th>Action</th>`);
    for(j=0;j<timeSheetData.length;j++)
    {
        var addbtn=document.getElementById(`tr${j}`)
        addbtn.insertAdjacentHTML('beforeend',`<td><button onclick="remove(${j})">X</button><button onclick="update(${j})">U</button></td>`);
    }
}


function remove(ind)
{
    timeSheetData.splice(ind,1);
    body.innerHTML='';
    console.log(timeSheetData);
    refreshtable();
    clearform();
}

function clearform()
{
    inProject.value='';
    inTask.value='';
    inTime.value='';
    btnAdd.innerText = "Add";
    
}

function update(ind)
{
    btnAdd.innerText = "Update";
    inProject.value = timeSheetData[ind].Project;
    inTask.value = timeSheetData[ind].Task;
    inTime.value = timeSheetData[ind]["Time Spent"];
    index = ind;
    
}

function addupdate()
{
    if(btnAdd.innerText =="Add")
    {
        var newdata=
        {
        "Project": inProject.value,
        "Task": inTask.value,
        "Time Spent": Number(inTime.value),
        }
        timeSheetData.push(newdata);
        console.log(timeSheetData);
        body.insertAdjacentHTML('beforeend',`<tr id="tr${timeSheetData.length-1}"><td>${inProject.value}</td><td>${inTask.value}</td><td>${inTime.value}</td></tr>`);
        var addbtn=document.getElementById(`tr${timeSheetData.length-1}`)
        addbtn.insertAdjacentHTML('beforeend',`<td><button onclick="remove(${timeSheetData.length-1})">X</button><button onclick="update(${timeSheetData.length-1})">U</button></td>`);
        console.log(body);
        clearform();
    }
    else
    {
        timeSheetData[index] = 
        {
            "Project": inProject.value,
            "Task": inTask.value,
            "Time Spent": Number(inTime.value), 
        }
        clearform();
        console.log(timeSheetData);
        body.innerHTML='';
        refreshtable();
    }
}
cau1()
cau2()
cau3()
cau4()