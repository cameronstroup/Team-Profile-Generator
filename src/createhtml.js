
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


function createManagerCard(manager) {
  return `<div class="card" style="width:500px">
  
    <div class="card-img-overlay">
    <h4>${manager.getName()}</h4>
    <h5>${manager.getRole()}</h5>
    <p>ID:${manager.id}</p>
    <p>Email:<a href="mailto:${Manager.email}"> ${manager.email}</a></p>
    <p>Office number: ${Manager.officeNumber}</p>
  </div>
    </div>
  </div>
      
              `;
}

function createEngineerCard(engineer) {
  return `<div class="card" style="width:500px">
  
  <div class="card-img-overlay">
  <h4>${engineer.getName()}</h4>
  <h5>${engineer.getRole()}</h5>
  <p>ID:${engineer.id}</p>
  <p>Email:<a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
  <p>Office number: ${engineer.github}</p>
</div>
  </div>
</div>
    
            `;
}

function createInternCard(intern) {
  return `<div class="card" style="width:500px">
    
      <div class="card-img-overlay">
      <h4>${intern.getName()}</h4>
      <h5>${manager.getRole()}</h5>
      <p>ID:${intern.id}</p>
      <p>Email:<a href="mailto:${intern.email}"> ${intern.email}</a></p>
      <p>Office number: ${intern.school}</p>
    </div>
      </div>
    </div>
        
                `;
}

const generatePage = data => {
    pageArray = [];
    
    for (let i = 0; i < data.length - 1; i++) {
      let employee = data[i];
      let role = employee.getRole();
      
      if (role === 'Manager') {
        const managerCard = generateManager(employee);
  
        pageArray.push(managerCard);
      }
  
      // call engineer function
      if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);
  
        pageArray.push(engineerCard);
      }
  
      // call intern function 
      if (role === 'Intern') {
        const internCard = generateIntern(employee);
  
        pageArray.push(internCard);
      }
    }
  
    // joining strings 
    const cards = pageArray.join('')
  
    // return to generated page
    const generateTeam = generateHTML(employeeCards);
    return generateTeam;



    function createHTML(staff) {
 
        const cards = staff.map((employee) => {
            if (employee.getRole() == "Manager") {
                return createManagerCard(employee);
            } else if (employee.getRole() == "Engineer") {
                return createEngineerCard(employee);
            } else if (employee.getRole() == "Intern") {
                return createInternCard(employee);
            }
        }).join('')
    
     return `<!DOCTYPE html>
     <html lang="en">
     
     <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
        <title>Team Profile</title>
     </head>
     
     <body>
     
         <!-- Header -->
         <header class="container-fluid bg-danger mb-3 p-2">
             <h1 class="display-5 text-white text-center">My Team</h1>
         </header>
         <!-- Main -->
         <main class = "container">
             <div class = "row d-flex justify-content-center">
     
             ${cards}
     
             </div>
         </main>
     
     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
     
     </body>
     
     </html>
     `
    }
    

module.exports = createHTML;\
