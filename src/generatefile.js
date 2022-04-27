const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

const generateTeam = (team) => {
  function createManagerCard(manager) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-success">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNum}</p>
        </div>
    </div>
  </div>
          
                  `;
  }

  function createEngineerCard(engineer) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-success">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
</div>
                `;
  }

  function createInternCard(intern) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-success">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
                    `;
  }

  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createInternCard(intern))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineerCard(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManagerCard(manager))
  );
  return html.join("");
};
module.exports = (team) => {
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
     
             ${generateTeam(team)}
     
             </div>
         </main>
     
     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
     
     </body>
     
     </html>
     `;
};
