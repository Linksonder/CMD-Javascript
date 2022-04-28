
//plaatejs, helewebsites, XSLX

document.querySelector('button').addEventListener('click', async function(){

    //FETCHES MET PROMISES
    //Optie 1: Klassieke fetches met promises (.then)
    //1.
    // fetch('https://randomuser.me/api')
    //     .then((res) => {  return res.json()}) //regel 1. In de .THEN mag je een promise returnen
    //     .then(data => { return data.results[0]})
    //     .then((person) => {
    //         document.querySelector('h1').innerText = person.name.first;
    //         console.log('h1');
    //     })
    //     .catch(error => {
    //         alert('sample 1');
    //     })

    //Optie 2 (aanrader, maar performance problemen)
    // try
    // {
    //     let res1 = await fetch('https://randomuser.me/api');
    //     let data1 = await res1.json();
    //     document.querySelector('h1').innerText = data1.results[0].name.first;

    //     let response = await fetch('https://dog.ceo/api/breeds/image/random');
    //     let data = await response.json();
    //     document.querySelector('img').src = data.message;
    // }
    // catch(error)
    // {
    //     alert('sample 2');
    // }
   
    //Optie 3: bijna het zelfde maar 'cleaner' als optie 2
    //moeilijker omdat functies
    let name = await GetRandomUser();
    let picture = await GetRandomDogpic();

    document.querySelector('h1').innerText = name;
    document.querySelector('img').src = picture;


    //Optie 4: performance!
    // let promise1 = GetRandomUser();
    // let promise2 = GetRandomDogpic();

    // let results = await Promise.all([promise1, promise2]); //name, picture
    // console.log(results);

    // document.querySelector('h1').innerText = results[0];
    // document.querySelector('img').src = results[1]; 

})

//Optie 3: We maken mooie code!
async function GetRandomUser()
{
    let res = await fetch('https://randomuser.me/api');
    let data = await res.json();

    //Kies uit data wat je nodig hebt, tip, console.log hem even...
    return data.results[0].name.first;
}

async function GetRandomDogpic(){
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await res.json();
    return data.message;
}


