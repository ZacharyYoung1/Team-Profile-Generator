const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const { listenerCount } = require('events');
const Choices = require('Inquirer/lib/objects/choices');
const generatedhtml = './dist/TeamProfile.html'
let teamMembers = [];



inquirer.prompt([
{
    name:"managerName",
    type: input,
    message: "Enter team manager's name",
},
{
    name:"managerID",
    type: input,
    message: "Enter team manager's employee ID",
},
{
    name:"managerEmail",
    type: input,
    message: "Enter team manager's Email",
},
{
    name:"managerOfficeNumber",
    type: input,
    message: "Enter team manager's office number",
},
{
    name: "additionalTeamMember",
    type: list,
    message: "Select role of team member to add",
    choices: ["Engineer" , "Intern"],
}
])
.then(answers => {
    let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber )
    teamMembers.push(manager);
    evaluateAdditionalTeamMemberResult(answers.additionalTeamMember)

})
.catch(error => {
    if(error.isTtyError){

    } else {

    }
});



function addEngineer(){
    inquirer.prompt([
        {
            name: "engineerName",
            type: input,
            message: "Enter engineer's name",
        },
        {
            name: "engineerID",
            type: input,
            message: "Enter engineer's employee ID",
        },
        {
            name: "engineerEmail",
            type: input,
            message: "Enter engineer's Email",
        },
        {
            name: "engineerGithub",
            type: input,
            message: "Enter engineer's github username",
        },
        {
            name: "additionalTeamMember",
            type: list,
            message: "Select role of team member to add",
            choices: ["Engineer" , "Intern", "Exit"],
        },
    ])
    .then(answers => {
        let intern = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        evaluateAdditionalTeamMemberResult(answers.additionalTeamMember)
    
    })
    .catch(error => {
        if(error.isTtyError){
    
        } else {
    
        }
    });
    };

function addIntern(){
inquirer.prompt([
    {
        name: "internName",
        type: input,
        message: "Enter intern's name",
    },
    {
        name: "internID",
        type: input,
        message: "Enter intern's employee ID",
    },
    {
        name: "internEmail",
        type: input,
        message: "Enter intern's Email",
    },
    {
        name: "internSchool",
        type: input,
        message: "Enter intern's school",
    },
    {
        name: "additionalTeamMember",
        type: list,
        message: "Select role of team member to add",
        choices: ["Engineer" , "Intern", "Exit"],
    },
])
.then(answers => {
    let intern = new Intern(answers.internName, answers.internID, answers.internSchool);
    teamMembers.push(intern);
    evaluateAdditionalTeamMemberResult(answers.additionalTeamMember)

})
.catch(error => {
    if(error.isTtyError){

    } else {

    }
});
};

function evaluateAdditionalTeamMemberResult(result)
{
    if(result === "Engineer"){
        addEngineer();
    }else if(result === "Intern"){
        addIntern();
    }else {
        generateHTML();
    }
}

function generateHTML()
{
    fs.writeFileSync(generatedhtml, "");
}
