let movie = 
{ 
    title:'The dark knight rises',
    year:2012,
    rate:8.4
}
function cau1()
{  
    console.log(movie)
}

function cau21()
{
    console.log(movie.title);
    console.log(movie["title"]);
    console.log(movie.year);
    console.log(movie["year"]);
    console.log(movie.rate);
    console.log(movie["rate"]);
}

function cau22()
{
    console.log(movie.director);
}

function cau23()
{
    let x = prompt('What do you want to know?');
    let y = movie[`${x}`];
    if ( y == null || y == undefined)
    {
        alert(`${x} does not exit in our data`);
    }
    else
    {
        alert(movie[`${x}`]);
    }
}

function cau31()
{
    movie['rate'] = 8.7;
    console.log(movie.rate);
    movie['rate']+=0.5;
    console.log(movie['rate']);
}

function cau32()
{
    let update = prompt('What you want to update?');
    let check = movie[`${update}`];
    if ( check == null || check == undefined)
    {
        alert(`${x} does not exit in our data`);
    }
    else
    {
        let nameUpdate = prompt(`What is the update`);
        movie[`${update}`] = nameUpdate;
        console.log(`Done! New data:`);
        console.log(movie);
    }
}

function cau4()
{
    let update = prompt('What you want to update?');
    let check = movie[`${update}`];
    if ( check == null || check == undefined)
    {
        alert(`${update} does not exit in our data, we will add new`);
        let nameUpdate = prompt(`What is the update`);
        movie[`${update}`] = nameUpdate;
        console.log(movie);

    }
    else
    {
        let nameUpdate = prompt(`What is the update`);
        movie[`${update}`] = nameUpdate;
        console.log(`Done! New data:`);
        console.log(movie);
    }
}



function cau5()
{
    //5.1
    let movie1 = 
    {
        title:'Captain America',
        year: 2012,
        rate: 7.6
    }
    let movie2 = 
    {
        title:'Iron Man',
        year: 2015,
        rate: 7.5
    }
    let movie3 = 
    {
        title:'Thor',
        year: 2017,
        rate: 7.4
    }
    let movielist = [movie1,movie2,movie3];
    console.log(movielist);
    //5.2
    console.log(movielist[0]);
    //5.3
    let lastMovie = movielist[movielist.length-1];
    console.log(lastMovie["title"]);
    //5.4
    for(i=0;i<movielist.length;i++)
    {
        console.log(movielist[i]);
    }
    //5.5
    for(i=0;i<movielist.length;i++)
    {
        let prettified = movielist[i];
        console.log('------------------------')
        console.log(prettified["title"]);
        console.log(`Year: ${prettified["year"]}`);
        console.log(`Rate: ${prettified["rate"]}`);
    }
    //5.6
    lastMovie["rate"] += 0.7;
    console.log(lastMovie);
}

function cau6()
{
    //6.1
    let movie4 = {
        title: 'The avenger',
        rate: 8,
        year: 2012,
        character: ['Thor','Ironman','Captain America']
    }

    //6.2
    
    console.log(movie4.title);
    console.log(`Year: ${movie4["year"]}`);
    console.log(`Rate: ${movie4["rate"]}`);
    console.log(`Character: ${movie4["character"].toString().replace(/,/g," ")}`);

    //6.3
    movie4["character"].push('Hiếu');
    console.log(movie4);
}

function cau7()
{
    let movie1 = 
    {
        title:'Captain America',
        year: 2012,
        rate: 7.6,
        character: ['Black Widow','Captain America','Winter Soldier']
    }

    let movie2 = 
    {
        title:'Iron Man',
        year: 2015,
        rate: 7.5,
        character: ['Iron Man','War Machine']
    }
    let movie3 = 
    {
        title:'Thor',
        year: 2017,
        rate: 7.4,
        character: ['Thor','Loki']
    }
    let movielist = [movie1,movie2,movie3];

    for(i=0;i<movielist.length;i++)
    {
        let prettified = movielist[i];
        console.log('------------------------')
        console.log(prettified["title"]);
        console.log(`Year: ${prettified["year"]}`);
        console.log(`Rate: ${prettified["rate"]}`);
        console.log(`Character: ${prettified["character"].toString().replace(/,/g," ")}`);
    }
}
cau7()