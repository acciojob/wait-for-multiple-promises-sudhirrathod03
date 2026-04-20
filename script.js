let tbody = document.getElementById("output");

let promise1 = () => {
  return new Promise((resolve) => {
    let time = Math.random() * 2 + 1; 
    setTimeout(() => {
      resolve(time);
    }, time * 1000); 
  });
};

let promise2 = () => {
  return new Promise((resolve) => {
    let time = Math.random() * 2 + 1;
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
};

let promise3 = () => {
  return new Promise((resolve) => {
    let time = Math.random() * 2 + 1;
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
};

let maxTime = 0;

Promise.all([promise1(), promise2(), promise3()]).then((tdata) => {

  tbody.innerHTML = "";

  tdata.forEach((data, idx) => {
    maxTime = Math.max(maxTime, data);
    
    let dataRow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    
    td1.textContent = `Promise ${idx + 1}`;
    td2.textContent = data.toFixed(3); 
    
    dataRow.appendChild(td1);
    dataRow.appendChild(td2);
    tbody.appendChild(dataRow);
  });
  
  let lastRow = document.createElement("tr");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  
  td3.textContent = "Total";
  td4.textContent = maxTime.toFixed(3);
  
  lastRow.appendChild(td3);
  lastRow.appendChild(td4);
  tbody.appendChild(lastRow);
});