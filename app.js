'use strict';

console.log('yo');

const hours = ["6am", "7am", "8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm",]

let container = document.getElementById("container");

const seattle = {
    storeName: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerCust: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    cookiesData(){
            let h3 = document.createElement("h3");
            h3.textContent = this.storeName;
            container.appendChild(h3);
            let ul = document.createElement("ul");
            container.appendChild(ul);
            for (let i = 0; i < hours.length; i++) {
                const li = document.createElement("li");
                li.textContent = `${hours[i]}: ${this.customersEachHour[i]}`;
                ul.appendChild(li);
                }
            },
    calcCustomersEachHour() {
                for (let i = 0; i < hours.length; i++) {
                  const randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
                  this.customersEachHour.push(randomCustomers);
                }
              },
    calcCookiesEachHour(){
        this.calcCustomersEachHour();
        for (let i = 0; i < hours.length; i++) {
                let customersCount = this.customersEachHour * this.avgCookiesPerCust;
                this.cookiesEachHour.push(customersCount);
                this.totalDailyCookies = this.customersCount;
        }
    }
            };





seattle.calcCookiesEachHour()
seattle.cookiesData();


