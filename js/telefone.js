var telefone;
var telefones = [];
var telefones2;

var telefoneTR = document.getElementById("telefoneIdentity");

function Read_Telefone() {
    telefoneTR.innerHTML = "";
    telefones2 = JSON.parse(localStorage.getItem("telefones"));
  
    if (telefones2 != null) {
      for (var b = 0; b < telefones2.length; b++) {
        telefoneTR.innerHTML += `
            
      <div class="bg-primary border border-success text-white card mb-2">
      <div class="card-body">
   
        <p><i class="fas fa-phone p-2"></i>Telefone: ${telefones2[b]}</p>
  
        <p><i class="fas fa-phone p-2"></i>Telefone_ID: ${b}</p>
  
        <button class="col-5 text-white btn btn-warning" onclick="TelefoneUpdadte(${b})">
          <i class="fas fa-edit"></i>
          Edite
        </button>
  
        <button class="col-5 text-white btn btn-danger" onclick="Delete_Telefone(${b})">
          <i class="far fa-trash-alt"></i>Delete
        </button>
      </div>
    </div>
              `;
      }
    }
  }
  


function Create_Telefone() {
    let storageTelefone = JSON.parse(localStorage.getItem("telefones"));
    telefone = document.getElementById("telefone").value;
    if (telefone == "") {
      alert("Write the name");
    } else {
      if (storageTelefone == null) {
        telefones.push(telefone);
        localStorage.setItem("telefones", JSON.stringify(telefones));
      } else {
        telefones = JSON.parse(localStorage.getItem("telefones"));
        telefones.push(telefone);
        localStorage.setItem("telefones", JSON.stringify(telefones));
      }
    }
  }



function TelefoneUpdadte(b3) {
    let telefones4 = JSON.parse(localStorage.getItem("telefones"));
    telefoneTR.innerHTML = "";
  
    for (var b = 0; b < telefones4.length; b++) {
      if (b == b3) {
        telefoneTR.innerHTML += `
  <div class="bg-primary border border-danger text-white card mb-4">
      <div class="card-body">
        <p><i class="fas fa-phone p-2"></i>Telefone: </p>
        <input
          class="mb-5 form-control"
          id="telefonesNew"
          placeholder="${telefones4[b]}"
        />
    
      
        <button class="col-5 text-white btn btn-success" onclick="Update_Telefone02(${b})">
          <i class="fas fa-edit"> Update</i>
        </button>
        <button class="col-5 text-white btn btn-danger" onclick="Read_Telefone()">
          <i class="fas fa-ban"> Cancel</i>
        </button>
      </div>
    </div>
            
            `;
      } else {
        telefoneTR.innerHTML += `
                      
    <div class="bg-primary border border-success text-white card mb-2">
    <div class="card-body">
      <p><i class="fas fa-envelope p-2"></i> Telefone: ${telefones2[b]}</p>
  
  
      <button disabled class="col-5 text-white btn btn-warning" onclick="Update_Telefone02(${b})">
        <i class="fas fa-edit"></i>
        Edite
      </button>
  
      <button disabled class="col-5 text-white btn btn-danger" onclick="Delete_Telefone(${b})">
        <i class="far fa-trash-alt"></i>Delete
      </button>
    </div>
  </div>
            
            `;
      }
    }
  }
  
  function Update_Telefone02(b) {
    /////////
  
    let telefones5 = JSON.parse(localStorage.getItem("telefones"));
  
    telefones5[b] = document.getElementById("telefonesNew").value;
  
    if (telefones5[b] == "") {
      alert("Escreva seu telefone...");
    } else {
      localStorage.setItem("telefones", JSON.stringify(telefones5));
      Read_Telefone();
    }
  }

  function Delete_Telefone(b2) {
    let telefones3 = JSON.parse(localStorage.getItem("telefones"));
    telefones3.splice(b2, 1);
    localStorage.setItem("telefones", JSON.stringify(telefones3));
  
    Read_Telefone();
  }
  