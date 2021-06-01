
'use strict'

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let globalVar = document.getElementById('cookies');


let tableOne = document.createElement('table')
globalVar.appendChild(tableOne)



let arrOfObject = [];
let hours = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7']



function Location (maxNo, minNo,avgNo,){
    this.maxNo = maxNo;
    this.minNo = minNo;
    this.avgNo = avgNo;
    this.numberOfCustomersPerHour = [];
    this.numberOfCookiesPerHour = [];
    this.total = 0;
    this.updateHours = [];
    arrOfObject.push(this)
    // console.log(this)
}

    Location.prototype.updateNumberOfCustomersPerHour = function(){
    for(let i = 0; i< hours.length;i++){
   
            this.numberOfCustomersPerHour.push(randomValue(this.minNo,this.maxNo));
            // console.log(this.numberOfCustomersPerHour)
}
    }
    Location.prototype.updateNumberOfCookiesPerHour = function(){
        for(let i = 0 ; i < hours.length; i++){
             this.numberOfCookiesPerHour.push(this.numberOfCustomersPerHour[i] * Math.ceil(this.avgNo));
            //  console.log(this.numberOfCookiesPerHour)
            this.total = this.total + this.numberOfCookiesPerHour[i];
                }
    }





    Location.prototype.renderH = function(){


        

        let initialRow = document.createElement('tr')
        tableOne.appendChild(initialRow);
        let thI = document.createElement('th');
        initialRow.appendChild(thI);
        thI.textContent = 'Hours';

        for(let i = 0; i < hours.length; i++){
            let th111 = document.createElement('th');
            initialRow.appendChild(th111);
            th111.textContent = `${this.updateHours[i]}`;
        }
        let tdaily1 = document.createElement('td');
        initialRow.appendChild(tdaily1);
        tdaily1.textContent = "Daily Total"
}








    Location.prototype.renderS = function(){


        

            let firstRow = document.createElement('tr')
            tableOne.appendChild(firstRow);
            let thF = document.createElement('td');
            firstRow.appendChild(thF);
            thF.textContent = 'Seattle';

            for(let i = 0; i < hours.length; i++){
                let th1 = document.createElement('td');
                firstRow.appendChild(th1);
                th1.textContent = `${this.numberOfCookiesPerHour[i]}`;
            }
              let tdaily2 = document.createElement('td');
              firstRow.appendChild(tdaily2);
              tdaily2.textContent = this.total
    }


    Location.prototype.renderT = function(){


        

        let secondRow = document.createElement('tr')
        tableOne.appendChild(secondRow);
        let thS = document.createElement('td');
        secondRow.appendChild(thS);
        thS.textContent = 'Tokyo';

        for(let i = 0; i < hours.length; i++){
            let th2 = document.createElement('td');
            secondRow.appendChild(th2);
            th2.textContent = `${this.numberOfCookiesPerHour[i]}`;
        }
        let tdaily3 = document.createElement('td');
        secondRow.appendChild(tdaily3);
        tdaily3.textContent = this.total
}



Location.prototype.renderD = function(){


        

    let thirdRow = document.createElement('tr')
    tableOne.appendChild(thirdRow);
    let thD = document.createElement('td');
    thirdRow.appendChild(thD);
    thD.textContent = 'Dubai';

    for(let i = 0; i < hours.length; i++){
        let th3 = document.createElement('td');
        thirdRow.appendChild(th3);
        th3.textContent = `${this.numberOfCookiesPerHour[i]}`;
    }
    let tdaily4 = document.createElement('td');
    thirdRow.appendChild(tdaily4);
    tdaily4.textContent = this.total
}


Location.prototype.renderP = function(){


        

    let fourthRow = document.createElement('tr')
    tableOne.appendChild(fourthRow);
    let thP = document.createElement('td');
    fourthRow.appendChild(thP);
    thP.textContent = 'Paris';

    for(let i = 0; i < hours.length; i++){
        let th4 = document.createElement('td');
        fourthRow.appendChild(th4);
        th4.textContent = `${this.numberOfCookiesPerHour[i]}`;
    }
    let tdaily5 = document.createElement('td');
    fourthRow.appendChild(tdaily5);
    tdaily5.textContent = this.total
}



Location.prototype.renderL = function(){


        

    let fifthRow = document.createElement('tr')
    tableOne.appendChild(fifthRow);
    let thL = document.createElement('td');
    fifthRow.appendChild(thL);
    thL.textContent = 'Lima';

    for(let i = 0; i < hours.length; i++){
        let th5 = document.createElement('td');
        fifthRow.appendChild(th5);
        th5.textContent = `${this.numberOfCookiesPerHour[i]}`;
    }
    let tdaily6 = document.createElement('td');
    fifthRow.appendChild(tdaily6);
    tdaily6.textContent = this.total
}











    let seattle = new Location(65,23,6.3);
    let tokyo = new Location(24,3,1.2);
    let dubai = new Location(38,11,1.2);
    let paris = new Location(38,20,2.3);
    let lima = new Location(16,2,4.6);


    seattle.updateNumberOfCustomersPerHour();
    seattle.updateNumberOfCookiesPerHour();
    tokyo.updateNumberOfCustomersPerHour();
    tokyo.updateNumberOfCookiesPerHour();
    paris.updateNumberOfCustomersPerHour();
    paris.updateNumberOfCookiesPerHour();
    lima.updateNumberOfCustomersPerHour()
    lima.updateNumberOfCookiesPerHour();
    seattle.renderH();
    


    seattle.renderS();
    tokyo.renderT();
    tokyo.renderD();
    paris.renderP();
    lima.renderL();
    
    


console.log(arrOfObject);








