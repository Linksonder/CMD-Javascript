// class Tinder
// {
//     constructor()
//     {
//         this.nameEl = document.querySelector('.tinder h1');
//         this.pictureEl = document.querySelector('.tinder img');
//         this.likes = [];
//         this.profile;
    
//         document.getElementById('left').addEventListener('click', () => {
//             //bad :(
//             this.ShowRandomProfile();
//         });
    
//         document.getElementById('right').addEventListener('click', () => {
//             //love
//             this.likes.push(this..profile);
//             this.ShowRandomProfile();
    
//         });
       
//         this.ShowRandomProfile();
//     }

//     async ShowRandomProfile()
//     {
//         this.profile = {
//             name: await this.GetRandomUser(),
//             picture: await this.GetRandomDogpic(),
//         }

//         this.nameEl.innerText = this.profile.name;
//         this.pictureEl.src = this.profile.picture;

//     }

//     //Optie 3: We maken mooie code!
//     async GetRandomUser()
//     {
//         let res = await fetch('https://randomuser.me/api');
//         let data = await res.json();

//         //Kies uit data wat je nodig hebt, tip, console.log hem even...
//         return data.results[0].name.first;
//     }

//     async GetRandomDogpic(){
//         let res = await fetch('https://dog.ceo/api/breeds/image/random');
//         let data = await res.json();
//         return data.message;
//     }
// }

// let tinder1 = new Tinder();

function Tinder()
{
   
    let nameEl = document.querySelector('.tinder h1');
    let pictureEl = document.querySelector('.tinder img');
    let likes = [];
    let profile;

    document.getElementById('left').addEventListener('click', () => {
        //bad :(
        ShowRandomProfile();
    });

    document.getElementById('right').addEventListener('click', () => {
        //love
        likes.push(profile);
        ShowRandomProfile();
    });
    
    ShowRandomProfile();
    

    async function ShowRandomProfile()
    {
        profile = {
            name: await GetRandomUser(),
            picture: await GetRandomDogpic(),
        }

        nameEl.innerText = profile.name;
        pictureEl.src = profile.picture;

    }

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
}

Tinder();
//setTimeout(Tinder, 0); //lijkt toch nietn nodig!