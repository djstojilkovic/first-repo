const container = document.querySelector("#container");
const display = document.createElement("h1");
display.innerHTML = "Contact Us Today";
container.append(display);

const form = document.createElement("form");

const fnameLabel = document.createElement("p");
fnameLabel.innerHTML = "First Name ";
form.append(fnameLabel);
const fname = document.createElement("input");
fname.type = "text";
fname.placeholder = "First Name";
fnameLabel.append(fname);

const lnameLabel = document.createElement("p");
lnameLabel.innerHTML = "Last Name ";
form.append(lnameLabel);
const lname = document.createElement("input");
lname.type = "text";
lname.placeholder = "Last Name";
lnameLabel.append(lname);

const mailLabel = document.createElement("p");
mailLabel.innerHTML = "E-Mail ";
form.append(mailLabel);
const mail = document.createElement("input");
mail.type = "text";
mail.placeholder = "E-Mail Address";
mailLabel.append(mail);

const phoneLabel = document.createElement("p");
phoneLabel.innerHTML = "Phone # ";
form.append(phoneLabel);
const phone = document.createElement("input");
phone.type = "text";
phone.placeholder = "(845)555-1212";
phoneLabel.append(phone);

const addressLabel = document.createElement("p");
addressLabel.innerHTML = "Address ";
form.append(addressLabel);
const address = document.createElement("input");
address.type = "text";
address.placeholder = "Address";
addressLabel.append(address);

const cityLabel = document.createElement("p");
cityLabel.innerHTML = "City ";
form.append(cityLabel);
const city = document.createElement("input");
city.type = "text";
city.placeholder = "City";
cityLabel.append(city);

const stateLabel = document.createElement("p");
stateLabel.innerHTML = "State ";
form.append(stateLabel);
const state = document.createElement("select");
state.type = "text";
stateLabel.append(state);
const opt1 = document.createElement("option");
opt1.innerHTML = "Please select your state";
state.append(opt1);
const opt2 = document.createElement("option");
opt2.innerHTML = "Hawaii";
state.append(opt2);
const opt3 = document.createElement("option");
opt3.innerHTML = "Texas";
state.append(opt3);
const opt4 = document.createElement("option");
opt4.innerHTML = "California";
state.append(opt4);
const opt5 = document.createElement("option");
opt5.innerHTML = "New York";
state.append(opt5);

const zipLabel = document.createElement("p");
zipLabel.innerHTML = "Zip Code ";
form.append(zipLabel);
const zip = document.createElement("input");
zip.type = "text";
zip.placeholder = "Zip Code";
zipLabel.append(zip);

const websiteLabel = document.createElement("p");
websiteLabel.innerHTML = "Website or domain name ";
form.append(websiteLabel);
const website = document.createElement("input");
website.type = "text";
website.placeholder = "Website or domain name";
websiteLabel.append(website);

const hostingLabel = document.createElement("p");
hostingLabel.innerHTML = "Do you have hosting? ";
form.append(hostingLabel);
const hostingYes = document.createElement("span");
hostingYes.innerHTML = "Yes";
hostingLabel.append(hostingYes);
const hostingNo = document.createElement("span");
hostingNo.innerHTML = "No";
form.append(hostingNo);
const hostingNoRadio = document.createElement("input");
hostingNoRadio.type = "radio";
hostingNoRadio.name = "hosting";
form.append(hostingNoRadio);
const hostingYesRadio = document.createElement("input");
hostingYesRadio.type = "radio";
hostingYesRadio.name = "hosting";
hostingLabel.append(hostingYesRadio);

const descLabel = document.createElement("p");
descLabel.innerHTML = "Project Description ";
form.append(descLabel);
const desc = document.createElement("textarea");
desc.placeholder = "Project Description";
descLabel.append(desc);
const button = document.createElement("button");
button.innerHTML = "Send";
form.append(button);

button.onclick = (event) => {
  event.preventDefault();
  const objData = {
    firstName: fname.value,
    lastName: lname.value,
    email: mail.value,
    phone: phone.value,
    address: address.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    website: website.value,
    description: desc.value,
  };
  if (hostingNoRadio.checked) {
    objData.hosting = "no";
  }
  if (hostingYesRadio.checked) {
    objData.hosting = "yes";
  }
  console.log(objData);
};
document.body.append(form);
