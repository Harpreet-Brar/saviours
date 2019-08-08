
signup.addEventListener('click', (e) => {
    let d = new Date();
    let newMonth = d.getMonth() + 1;
    if(newMonth < 10){
        newMonth = "0" + newMonth;
    }
    let newDay = d.getDate();
    if(newDay<10){
        newDay="0"+newDay;
    }
    let newDate = `${d.getFullYear()}-${newMonth}-${newDay}`;
    let jsonPut = {
        firstName : fName.value,
        lastName : lName.value,
        Email : email.value,
        age : age.value,
        bloodGroup : bloodGroup.value,
        Gender : gender.value,
        Address : address.value,
        City : city.value,
        postalCode : postal.value,
};
jsonPut = JSON.stringify(jsonPut);
fetch(`http://api.saviours.wmdd.ca/signup`, { method: 'POST', headers: {'content-Type': 'application/json'},body: jsonPut}).then((res) => {
res.json().then((data) => {
if(data.err) {
    console.log(err);
} else {

        }
})
})

});

