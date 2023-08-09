// exporting setData function for utility and reusability purposes
export function setData(key, value) {
    // fetching existing data or empty array if there's no data 
    const existingData = getData(key) || []; 
    // merging existing data with new value to avoid overriding existing data
    const updatedData = [...existingData, value]; 
    // posts data in localStorage and it only takes strings (C of CRUD)
    localStorage.setItem(key, JSON.stringify(updatedData)); // Store updated data
}



// exporting getData function for utility and reusability purposes
export function getData(key) {
    // getting data from localStorage (R of CRUD)
   const sValue = localStorage.getItem(key)
   // parsing because sValue is an object 
   return JSON.parse(sValue); 
}