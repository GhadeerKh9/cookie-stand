function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globalVar = document.getElementById('cookies');


let arrOfObject = [];
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']


const Seattle = {
cityName: "Seattle",   
maxNo: 65,
minNo: 23,
avgNo: 6.3,
numberOfCookiesPerHour: [],
numberOfCustomersPerHour: [],
total: 0,
updatingNumberOfCustomersPerHour: function(){

    for(let i = 0; i< hours.length;i++){
   
        this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
        console.log(this.numberOfCustomersPerHour)
}

},



updateNumberOfCookiesPerHour: function(){
    for(let i = 0 ; i < hours.length; i++){
         this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
         console.log(this.numberOfCookiesPerHour)
        this.total = this.total + this.numberOfCookiesPerHour[i];
      
            }
},

render: function(){
    let cityName= document.createElement('h2');
    globalVar.appendChild(cityName);
    cityName.textContent = this.cityName;


    let containingList= document.createElement('ul');
    globalVar.appendChild(containingList);

    for(let i = 0; i<hours.length; i++){
        let elementList = document.createElement('li');
        containingList.appendChild(elementList);
        elementList.textContent= `${hours[i]}       :      ${this.numberOfCookiesPerHour[i]} cookies`
    }

    let totalPerDay = document.createElement('li');
    containingList.appendChild(totalPerDay);
    totalPerDay.textContent = `Daily Total :  ${this.total}`;



}


}


Seattle.updatingNumberOfCustomersPerHour();
Seattle.updateNumberOfCookiesPerHour();
Seattle.render();


const Tokyo = {
cityName: "Tokyo",   
maxNo: 24,
minNo: 3,
avgNo: 1.2,
numberOfCookiesPerHour: [],
numberOfCustomersPerHour: [],
total: 0,
updatingNumberOfCustomersPerHour: function(){

    for(let i = 0; i< hours.length;i++){
   
        this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
        console.log(this.numberOfCustomersPerHour)
}

},



updateNumberOfCookiesPerHour: function(){
    for(let i = 0 ; i < hours.length; i++){
         this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
         console.log(this.numberOfCookiesPerHour)
        this.total = this.total + this.numberOfCookiesPerHour[i];
      
            }
},

render: function(){
    let cityName= document.createElement('h2');
    globalVar.appendChild(cityName);
    cityName.textContent = this.cityName;


    let containingList= document.createElement('ul');
    globalVar.appendChild(containingList);

    for(let i = 0; i<hours.length; i++){
        let elementList = document.createElement('li');
        containingList.appendChild(elementList);
        elementList.textContent= `${hours[i]}       :      ${this.numberOfCookiesPerHour[i]} cookies`
    }

    let totalPerDay = document.createElement('li');
    containingList.appendChild(totalPerDay);
    totalPerDay.textContent = `Daily Total :  ${this.total}`;



}


}



Tokyo.updatingNumberOfCustomersPerHour();
Tokyo.updateNumberOfCookiesPerHour();
Tokyo.render();




const Dubai = {
cityName: "Dubai",   
maxNo: 38,
minNo: 11,
avgNo: 3.7,
numberOfCookiesPerHour: [],
numberOfCustomersPerHour: [],
total: 0,
updatingNumberOfCustomersPerHour: function(){

    for(let i = 0; i< hours.length;i++){
   
        this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
        console.log(this.numberOfCustomersPerHour)
}

},



updateNumberOfCookiesPerHour: function(){
    for(let i = 0 ; i < hours.length; i++){
         this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
         console.log(this.numberOfCookiesPerHour)
        this.total = this.total + this.numberOfCookiesPerHour[i];
      
            }
},

render: function(){
    let cityName= document.createElement('h2');
    globalVar.appendChild(cityName);
    cityName.textContent = this.cityName;


    let containingList= document.createElement('ul');
    globalVar.appendChild(containingList);

    for(let i = 0; i<hours.length; i++){
        let elementList = document.createElement('li');
        containingList.appendChild(elementList);
        elementList.textContent= `${hours[i]}       :      ${this.numberOfCookiesPerHour[i]} cookies`
    }

    let totalPerDay = document.createElement('li');
    containingList.appendChild(totalPerDay);
    totalPerDay.textContent = `Daily Total :  ${this.total}`;



}


}


Dubai.updatingNumberOfCustomersPerHour();
Dubai.updateNumberOfCookiesPerHour();
Dubai.render();






const Paris = {
    cityName: "Paris",   
    maxNo: 38,
    minNo: 20,
    avgNo: 2.3,
    numberOfCookiesPerHour: [],
    numberOfCustomersPerHour: [],
    total: 0,
    updatingNumberOfCustomersPerHour: function(){
    
        for(let i = 0; i< hours.length;i++){
       
            this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
            console.log(this.numberOfCustomersPerHour)
    }
    
    },
    
    
    
    updateNumberOfCookiesPerHour: function(){
        for(let i = 0 ; i < hours.length; i++){
             this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
             console.log(this.numberOfCookiesPerHour)
            this.total = this.total + this.numberOfCookiesPerHour[i];
          
                }
    },
    
    render: function(){
        let cityName= document.createElement('h2');
        globalVar.appendChild(cityName);
        cityName.textContent = this.cityName;
    
    
        let containingList= document.createElement('ul');
        globalVar.appendChild(containingList);
    
        for(let i = 0; i<hours.length; i++){
            let elementList = document.createElement('li');
            containingList.appendChild(elementList);
            elementList.textContent= `${hours[i]}       :      ${this.numberOfCookiesPerHour[i]} cookies`
        }
    
        let totalPerDay = document.createElement('li');
        containingList.appendChild(totalPerDay);
        totalPerDay.textContent = `Daily Total :  ${this.total}`;
    
    
    
    }
    
    
    }




Paris.updatingNumberOfCustomersPerHour();
Paris.updateNumberOfCookiesPerHour();
Paris.render();








const Lima = {
    cityName: "Lima",   
    maxNo: 16,
    minNo: 2,
    avgNo: 4.6,
    numberOfCookiesPerHour: [],
    numberOfCustomersPerHour: [],
    total: 0,
    updatingNumberOfCustomersPerHour: function(){
    
        for(let i = 0; i< hours.length;i++){
       
            this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
            console.log(this.numberOfCustomersPerHour)
    }
    
    },
    
    
    
    updateNumberOfCookiesPerHour: function(){
        for(let i = 0 ; i < hours.length; i++){
             this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
             console.log(this.numberOfCookiesPerHour)
            this.total = this.total + this.numberOfCookiesPerHour[i];
          
                }
    },
    
    render: function(){
        let cityName= document.createElement('h2');
        globalVar.appendChild(cityName);
        cityName.textContent = this.cityName;
    
    
        let containingList= document.createElement('ul');
        globalVar.appendChild(containingList);
    
        for(let i = 0; i<hours.length; i++){
            let elementList = document.createElement('li');
            containingList.appendChild(elementList);
            elementList.textContent= `${hours[i]}       :      ${this.numberOfCookiesPerHour[i]} cookies`
        }
    
        let totalPerDay = document.createElement('li');
        containingList.appendChild(totalPerDay);
        totalPerDay.textContent = `Daily Total :  ${this.total}`;
    
    
    
    }
    
    
    }




Lima.updatingNumberOfCustomersPerHour();
Lima.updateNumberOfCookiesPerHour();
Lima.render();




