var email;
var emails = [];
var emails2;

var emailTR = document.getElementById("emailIdentity");

function Read_Email() {
    emailTR.innerHTML = "";
    emails2 = JSON.parse(localStorage.getItem("emails"));
  
    if (emails2 != null) {
      for (var e = 0; e < emails2.length; e++) {
        emailTR.innerHTML += `
            
      <div class="bg-primary border border-success text-white card mb-2">
      <div class="card-body">
      <p><i class="fas fa-envelope p-2"></i> EmailID: </p>
      <p class="mt-2">${emails2[e]}</p>
      <p><i class="fas fa-envelope p-2"></i> Email_ID: ${e}</p>
  
        <button class="col-5 text-white btn btn-warning" onclick="EmailUpdate(${e})">
          <i class="fas fa-edit"></i>
          Edite
        </button>
  
        <button class="col-5 text-white btn btn-danger" onclick="Delete(${e})">
          <i class="far fa-trash-alt"></i>Delete
        </button>
      </div>
    </div>
              `;
      }
    }
  }
  


function Create_Email() {
    let storageEmail = JSON.parse(localStorage.getItem("emails"));
    email = document.getElementById("email").value;
    if (email == "") {
      alert("Digite seu Email");
    } else {
      if (storageEmail == null) {
        emails.push(email);
        localStorage.setItem("emails", JSON.stringify(emails));
      } else {
        emails = JSON.parse(localStorage.getItem("emails"));
        emails.push(email);
        localStorage.setItem("emails", JSON.stringify(emails));
      }
    }
  }



function EmailUpdate(e3) {
    let emails4 = JSON.parse(localStorage.getItem("emails"));
    emailTR.innerHTML = "";
  
    for (var e = 0; e < emails4.length; e++) {
      if (e == e3) {
        emailTR.innerHTML += `
  <div class="bg-primary border border-danger text-white card mb-4">
      <div class="card-body">
        <p><i class="fas fa-envelope p-2"></i> Email :</p>
        <input
          class="mb-5 form-control"
          id="emailsNew"
          placeholder="${emails4[e]}"
        />
    
      
        <button class="col-5 text-white btn btn-success" onclick="Update_Email02(${e})">
          <i class="fas fa-edit"> Update</i>
        </button>
        <button class="col-5 text-white btn btn-danger" onclick="Read_Email03()">
          <i class="fas fa-ban"> Cancel</i>
        </button>
      </div>
    </div>
            
            `;
      } else {
        emailTR.innerHTML += `
                      
    <div class="bg-primary border border-success text-white card mb-2">
    <div class="card-body">
      <p><i class="fas fa-envelope p-2"></i> Email : ${emails2[e]}</p>
  
  
      <button disabled class="col-5 text-white btn btn-warning" onclick="Update_Email02(${e})">
        <i class="fas fa-edit"></i>
        Edite
      </button>
  
      <button disabled class="col-5 text-white btn btn-danger" onclick="Delete(${e})">
        <i class="far fa-trash-alt"></i>Delete
      </button>
    </div>
  </div>
            
            `;
      }
    }
  }
  
  function Update_Email02(e) {
    /////////
  
    let emails5 = JSON.parse(localStorage.getItem("emails"));
  
    emails5[e] = document.getElementById("emailsNew").value;
  
    if (emails5[e] == "") {
      alert("Escreva seu Email...");
    } else {
      localStorage.setItem("emails", JSON.stringify(emails5));
      Read_Email();
    }
  }

  function Delete(e2) {
    let emails3 = JSON.parse(localStorage.getItem("emails"));
    emails3.splice(e2, 1);
    localStorage.setItem("emails", JSON.stringify(emails3));
  
    Read_Email();
  }
  