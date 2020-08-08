var name;
var names = [];
var names2;


var userTR = document.getElementById("nameIdentity");

function Create_Name() {
    let storageName = JSON.parse(localStorage.getItem("names"));
    name = document.getElementById("name").value;
  
    if (name == "") {
      alert("Digite seu Nome");
    } else {
      if (storageName == null) {
        names.push(name);
        localStorage.setItem("names", JSON.stringify(names));
      } else {
        names = JSON.parse(localStorage.getItem("names"));
        names.push(name);
        localStorage.setItem("names", JSON.stringify(names));
      }
    }
  }
  
  function Read_Name() {
    userTR.innerHTML = "";
    names2 = JSON.parse(localStorage.getItem("names"));
   
  
    if (names2 != null) {
      for (var i = 0; i < names2.length; i++) {
        userTR.innerHTML += `
            
      <div class="bg-primary border border-success text-white card mb-2">
      <div class="card-body">
        <p><i class="fas fa-user"></i> User: ${names2[i]}</p>
        <p><i class="fas fa-user"></i> User_ID: ${i}</p>
       
        
        <button class="col-5  text-white btn btn-warning" onclick="Update(${i})">
          <i class="fas fa-edit"></i>
          Edite
        </button>
  
        <button class="col-5 text-white btn btn-danger" onclick="Delete_Name(${i})">
          <i class="far fa-trash-alt"></i>Delete
        </button>
      </div>
    </div>
              `;
      }
    }
  }
  
  
  function Update(i3) {
    let names4 = JSON.parse(localStorage.getItem("names"));
    userTR.innerHTML = "";
  
    for (var i = 0; i < names4.length; i++) {
      if (i == i3) {
        userTR.innerHTML += `
    <div class="bg-primary border border-danger text-white card mb-2">
        <div class="card-body">
          <p><i class="fas fa-user"></i> User:</p>
          <input
            class="mb-2 form-control"
            id="newName"
            placeholder="${names4[i]}"
          />
      
        
          <button class="col-5 text-white btn btn-success" onclick="Update_Name(${i})">
            <i class="fas fa-edit"> Update</i>
          </button>
          <button class="col-5 text-white btn btn-danger" onclick="Read_Name()">
            <i class="fas fa-ban"> Cancel</i>
          </button>
        </div>
      </div>
              
              `;
      } else {
        userTR.innerHTML += `
                        
      <div class="bg-primary border border-success text-white card mb-2">
      <div class="card-body">
        <p><i class="fas fa-user"></i> User: ${names2[i]}</p>
        <p><i class="fas fa-user"></i> UserID: ${i}</p>
  
        <button disabled class="col-5 text-white btn btn-warning" onclick="Update_Name(${i})">
          <i class="fas fa-edit"></i>
          Edite
        </button>
  
        <button disabled class="col-5 text-white btn btn-danger" onclick="Delete_Name(${i})">
          <i class="far fa-trash-alt"></i>Delete
        </button>
      </div>
    </div>
              
              `;
      }
    }
  }
  
  
  function Update_Name(i) {
    let names5 = JSON.parse(localStorage.getItem("names"));
    names5[i] = document.getElementById("newName").value;
    if (names5[i] == "") {
      alert("Escreva seu Nome...");
    } else {
      localStorage.setItem("names", JSON.stringify(names5));
      Read_Name();
    }
  }
  
  function Delete_Name(i2) {
    let names3 = JSON.parse(localStorage.getItem("names"));
    names3.splice(i2, 1);
    localStorage.setItem("names", JSON.stringify(names3));
  
    Read_Name();
  }
  