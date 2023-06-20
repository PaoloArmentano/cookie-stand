'use strict';

console.log("object")

const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");

const hours = ["6am", "7am", "8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm",]

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }  

function CookieStore(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){    
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
    this.render()
}

CookieStore.prototype.calcCustomersEachHour = function() {
    for (let i = 0; i < hours.length; i++) {
      const randomCustomers = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.customersEachHour.push(randomCustomers);
    }
  };

  CookieStore.prototype.calcCookiesEachHour = function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
            let customersCount = this.customersEachHour * this.avgCookiesPerCust;
            this.cookiesEachHour.push(customersCount);
            this.totalDailyCookies = this.customersCount;
    }
}

const seattle = new CookieStore("Seattle", "36", "70", "5.8");
const tokyo = new CookieStore("Tokyo", "29", "65", "3.9");
const dubai = new CookieStore("Dubai", "40", "61", "4.7");
const paris = new CookieStore("Paris", "15", "55", "3.5");
const milan = new CookieStore("Milan", "32", "63", "4.2");

console.log(seattle);
console.log(tokyo);
console.log(paris);
console.log(milan);


