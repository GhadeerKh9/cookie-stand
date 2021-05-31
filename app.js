function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globVar = document.getElementById('cookies');
let hours = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7']


const Seattle = {
max: 65,
min: 23,
Avg: 6.3,
numberOfCookiesPerHour: [],
numberOfCustomersPerHour: [],
updatingNumberOfCustomersPerHour: function(){
    
    for (i = 0; i < hours.length; i++){
        console.log(randomValue(3,12));
        i+1
    }
    this.numberOfCustomersPerHour = randomValue(3,12);
    console.log(this.numberOfCustomersPerHour);
},

updatingNumberOfCookiesPerHour: function(){
    for(i =0; i< hours.length; i++){
        let cookies = randomValue(3,12)*6.2
        console.log(cookies)
        i+1
    }
},

render:function (){
    let articleElement = document.createElement('article');
   
    globVar.appendChild(articleElement);
   

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    let liElement = null;
    for(let i = 0 ; i < this.likes.length ; i++){
    liElement = document.createElement('li');
    ulEl.appendChild(liElement);
    liEl.textContent = this.likes[i];
    }


}
}





    Seattle.updatingNumberOfCustomersPerHour();
    Seattle.updatingNumberOfCookiesPerHour();
    Seattle.render();






console.log(numberOfCustomersPerHour)


















// let globVar = document.getElementById('kittenProfiles');
// // console.log(globVar);
// // its always better to use the container as a global variable!
// const frankie = {
//     kittenName:'frankie',
//     likes:['jumping','napping','eating','zzz'],
//     age:0, // initial value of zero
//     arr: [],
//     goodWithKids:true,
//     goodWithDogs:false,
//     goodWithOtherCats:false,
//     updatingTheAge:function(){
//         // in order to have a randomValue between two numbers
//         this.age = randomValue(3,12);
//         console.log(this.age);
//     }},
// //     render:function(){
// //         let articleEl = document.createElement('article');
//         // console.log(globVar);
//         //create
//         //append 
//         globVar.appendChild(articleEl);
//         // give it a textcontent if needed

//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.kittenName;

//         let paragraphEl = document.createElement('p');
//         articleEl.appendChild(paragraphEl);
//         paragraphEl.textContent = `${this.kittenName} is a cute cat and it has ${this.age} years old`;

//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         let liEl = null;
//         for(let i = 0 ; i < this.likes.length ; i++){
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
        
//         liEl.textContent = this.likes[i];
//         }
        
//         let imgEl = document.createElement('img');
//         articleEl.appendChild(imgEl);

//         imgEl.setAttribute('src',`images/${this.kittenName}.jpeg`)   


//         // let prev = document.createElement('h4');
//         // articleEl.appendChild(prev);
//         // prev.textContent = 'IsGoodWithDogs'
//         // let newBool = document.createElement('h5');
//         // articleEl.appendChild(newBool);
//         // newBool.textContent = this.goodWithDogs;

//     }
// };

// // using this out side its not possible at this moment
// frankie.updatingTheAge();
// frankie.render();





// const sereena = {
//     kittenName:'serena',
//     likes:['jumping','zzz'],
//     age:0, // initial value of zero
//     arr: [],
//     goodWithKids:false,
//     goodWithDogs:true,
//     goodWithOtherCats:false,
//     updatingTheAge:function(){
//         // in order to have a randomValue between two numbers
//         this.age = randomValue(3,12);
//         console.log(this.age);
//     },
//     render:function(){
//         let articleEl = document.createElement('article');
//         // console.log(globVar);
//         //create
//         //append 
//         globVar.appendChild(articleEl);
//         // give it a textcontent if needed

//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.kittenName;

//         let paragraphEl = document.createElement('p');
//         articleEl.appendChild(paragraphEl);
//         paragraphEl.textContent = `${this.kittenName} is a cute cat and it has ${this.age} years old`;

//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         let liEl = null;
//         for(let i = 0 ; i < this.likes.length ; i++){
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = this.likes[i];
//         }
        
//         let imgEl = document.createElement('img');
//         articleEl.appendChild(imgEl);

//         imgEl.setAttribute('src',`images/${this.kittenName}.jpeg`)   

//     }
// };

// // using this out side its not possible at this moment
// sereena.updatingTheAge();
// sereena.render();

