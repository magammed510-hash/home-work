let box = document.querySelector(".box");

let dialogAdd = document.querySelector(".dialogAdd");
let addName = document.querySelector(".addName");
let addCity = document.querySelector(".addCity");
let addNumber = document.querySelector(".addNumber");
let addStatus = document.querySelector(".addStatus");
let addCancel = document.querySelector(".addCancel");
let addSave = document.querySelector(".addSave");
let addFoto = document.querySelector(".addFoto");
let Add = document.querySelector(".Add");

let dialogEdit = document.querySelector(".dialogEdit");
let editName = document.querySelector(".editName");
let editCity = document.querySelector(".editCity");
let editNumber = document.querySelector(".editNumber");
let editStatus = document.querySelector(".editStatus");
let editCancel = document.querySelector(".editCancel");
let editSave = document.querySelector(".editSave");
let editFoto = document.querySelector(".editFoto");

let searchStatus = document.querySelector(".searchStatus");
let searchCity = document.querySelector(".searchCity");
let search = document.querySelector(".search");

let data = JSON.parse(sessionStorage.getItem("data")) || [
    {
        id: 1,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2KSPmd-WDIPRG1IIv1cS6AlBlYu2FFm9QJ-CXx0gvQ&s=10",
        name: "Muhammadjon",
        city: "Dushanbe",
        status: true,
        phone: "+992845392837"
    },
    {
        id: 2,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2KSPmd-WDIPRG1IIv1cS6AlBlYu2FFm9QJ-CXx0gvQ&s=10",
        name: "Ali",
        city: "Kulob",
        status: false,
        phone: "+992845038490"
    },
    {
        id: 3,
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tIhn51KKN8HHvyxoGX1VpMj2KQap7FqmxkuMmpkIWg&s=10",
        name: "Abubakr",
        city: "Dushanbe",
        status: false,
        phone: "+9928499342837"
    }
];

search.oninput = () => {
    let filters = data.filter((elem) => 
        elem.name.toLowerCase().includes(search.value.toLowerCase().trim())
    );
    getData(filters);
};

searchStatus.onchange = () => {
    let selectValue = searchStatus.value;
    if (selectValue === "all") {
        getData(data);
    } else {
        let isStatus = selectValue === "active";
        let filterData = data.filter((elem) => elem.status === isStatus);
        getData(filterData);
    }
};

searchCity.onchange = () => {
    let selectedValue = searchCity.value;
    if (selectedValue === "all") {
        getData(data);
    } else {
        let filterData = data.filter((elem) => elem.city === selectedValue);
        getData(filterData);
    }
};

function deleteUser(id) {
    data = data.filter((elem) => elem.id !== id);
    getData(data);
    sessionStorage.setItem("data", JSON.stringify(data));
}

Add.onclick = () => {
    dialogAdd.showModal();
};

addCancel.onclick = () => {
    dialogAdd.close();
    addCity.value = '';
    addName.value = '';
    addNumber.value = '';
    addFoto.value = '';
};

addSave.onclick = () => {
    let newUser = {
        id: Date.now(),
        foto: addFoto.value,
        name: addName.value,
        city: addCity.value,
        status: addStatus.value === "active",
        phone: addNumber.value
    };
    data.push(newUser);
    getData(data);
    sessionStorage.setItem("data", JSON.stringify(data));
    dialogAdd.close();
    
    addCity.value = '';
    addName.value = '';
    addNumber.value = '';
    addFoto.value = '';
};

let idx = null;
function editShow(id) {
    idx = id;
    let user = data.find((elem) => elem.id === id);
    editFoto.value = user.foto;
    editName.value = user.name;
    editCity.value = user.city;
    editNumber.value = user.phone;
    editStatus.value = user.status ? "active" : "inactive";
    dialogEdit.showModal();
}

editSave.onclick = () => {
    let user = data.find((elem) => elem.id === idx);
    user.name = editName.value;
    user.city = editCity.value;
    user.foto = editFoto.value;
    user.phone = editNumber.value;
    user.status = editStatus.value === "active";
    getData(data);
    sessionStorage.setItem("data", JSON.stringify(data));
    dialogEdit.close();
};

editCancel.onclick = () => {
    dialogEdit.close();
};

function getData(dataArr) {
    box.innerHTML = '';
    dataArr.forEach(elem => {
        let tr = document.createElement("tr");

        let foto = document.createElement("img");
        foto.src = elem.foto;
        foto.classList.add("foto");
        foto.style.width = "40px"; 
        foto.style.height = "40px";
        foto.style.borderRadius = "50%";

        let tName = document.createElement("td");
        tName.classList.add("tName");

        let name = document.createElement("h2");
        name.innerHTML = elem.name;

        let city = document.createElement("td");
        city.innerHTML = elem.city;

        let status = document.createElement("td");
        status.innerHTML = elem.status ? "active" : "inactive";

        let number = document.createElement("td");
        number.innerHTML = elem.phone;

        let actions = document.createElement("td");

        let del = document.createElement("button");
        del.innerHTML = "Delete";
        del.onclick = () => {
            deleteUser(elem.id);
        };

        let edit = document.createElement("button");
        edit.innerHTML = "Edit";
        edit.onclick = () => {
            editShow(elem.id);
        };

        actions.append(del, edit);
        tName.append(foto, name);
        tr.append(tName, city, status, number, actions);
        box.append(tr);
    });
}

getData(data);