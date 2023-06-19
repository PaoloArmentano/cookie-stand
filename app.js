'use strict';

console.log('yo');

const hours = ["6am", "7am", "8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm",]

let container = document.getElementById("container");

const seattle = {
    storeName: 'Seattle',
    minCustPerHour: "",
    maxCustPerHour: "",
    avgCookiesPerCust: "",
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies:"168",
    cookiesData(){
            let h3 = document.createElement("h3");
            h3.textContent = this.storeName;
            container.appendChild(h3);
            let ul = document.createElement("ul");
            container.appendChild(ul);
            for (let i = 0; i < hours.length; i++) {
                const li = document.createElement("li");
                li.textContent = `${hours[i]}: ${seattle.totalDailyCookies}`;
                ul.appendChild(li);

    }
}
}

seattle.cookiesData()


