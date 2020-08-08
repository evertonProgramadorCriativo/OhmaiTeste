



document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  Create_Name();
  Create_Email();
  Create_Telefone();
  
  Read_Name();
  Read_Email()
  Read_Telefone();
  document.getElementById("form").reset();
});



