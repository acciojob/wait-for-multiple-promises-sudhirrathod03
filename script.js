
//your JS code here. If required.
let tbody = document.getElementById("output")
let loadingRow = document.createElement("tr")
loadingRow.textContent = "Loading..."
tbody.appendChild(loadingRow)
let promise1 = () => {
  return new Promise(( resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

let promise2 = () => {
  return new Promise(( resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

let promise3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1.5);
    }, 1500);
  });
};
let maxTime = 0
Promise.all([promise1(), promise2(), promise3()]).then((tdata) => {
  loadingRow.textContent = ""
	tdata.forEach((data,idx)=>{
	 maxTime = Math.max(maxTime, data)
	  let dataRow = document.createElement("tr")
	  let td1= document.createElement("td")
	  let td2= document.createElement("td")
	  td1.textContent = `Promise ${idx + 1}`
	  td2.textContent = data
	  dataRow.appendChild(td1)
	  dataRow.appendChild(td2)
	  tbody.appendChild(dataRow)
	  
  })
  let lastRow = document.createElement("tr")
  let td3= document.createElement("td")
  let td4= document.createElement("td")
	td3.textContent = "Total"
	td3.style.fontWeight = "600"
	td4.textContent = maxTime
	lastRow.appendChild(td3)
	lastRow.appendChild(td4)
	tbody.appendChild(lastRow)
	
	
})
