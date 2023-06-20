'use strict';

console.log("object")

const hours = ["6am", "7am", "8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm",]

let container = document.getElementById("container");

function StoreLocation(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){    
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0
}

StoreLocation.prototype.calcCustomersEachHour = function() {
    for (let i = 0; i < hours.length; i++) {
      const randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.customersEachHour.push(randomCustomers);
    }
  };

  StoreLocation.prototype.calcCookiesEachHour = function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
            let customersCount = this.customersEachHour * this.avgCookiesPerCust;
            this.cookiesEachHour.push(customersCount);
            this.totalDailyCookies = this.customersCount;
    }
}

const seattle = new StoreLocation("Seattle", "36", "70", "5.8");
const tokyo = new StoreLocation("Tokyo", "29", "65", "3.9");
const dubai = new StoreLocation("Dubai", "40", "61", "4.7");
const paris = new StoreLocation("Paris", "15", "55", "3.5");
const milan = new StoreLocation("Milan", "32", "63", "4.2");

console.log(seattle);
console.log(tokyo);
console.log(paris);
console.log(milan);


