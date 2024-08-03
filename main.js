#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(names) {
        this.name = names;
    }
}
class Person {
    students = [];
    addName(ans) {
        this.students.push(ans);
    }
}
let person = new Person();
console.log(chalk.italic.cyan.bold(`
 ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄ ▄▄▄▄▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▐░░░░░░░░░░░▌  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▐░█▀▀▀▀▀▀▀▀▀   ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▐░▌            ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
▐░▌   ▄   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▐░█▄▄▄▄▄▄▄▄▄   ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▐░░░░░░░░░░░▌  ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌ ▐░▌░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▐░█▀▀▀▀▀▀▀▀▀   ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌▐░▌ ▐░▌▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▐░▌            ▐░▌       ▐░▌▐░▌          ▐░▌          
▐░▌░▌   ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▐░█▄▄▄▄▄▄▄▄▄   ▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌          
▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▐░░░░░░░░░░░▌  ▐░░░░░░░░░░░▌▐░▌          ▐░▌          
 ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ ▀▀▀▀▀▀▀▀▀▀▀    ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀          `));
const optionStart = async (person) => {
    do {
        let add = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.italic.yellowBright.bold("\nwhom would you like to interact with:\n"),
            choices: [
                chalk.italic.greenBright.bold("Staff"),
                chalk.italic.magentaBright.bold("Student"),
                chalk.italic.redBright.bold("Exit"),
            ]
        });
        if (add.select == chalk.italic.greenBright.bold("Staff")) {
            console.log(chalk.italic.cyanBright.bold("\nyou approach the staff room. Please feel free to aks any question?\n"));
        }
        else if (add.select == chalk.italic.magentaBright.bold("Student")) {
            const ans = await inquirer.prompt({
                name: "school",
                type: "input",
                message: chalk.italic.cyan.bold("\nEnter the student name you wish to engage with:\n"),
            });
            let student = person.students.find(val => val.name == ans.school);
            if (!student) {
                const name = new Student(ans.school);
                person.addName(name);
                console.log(chalk.italic.greenBright.bold(`\nHello i am ${name.name}. Nice to meet you!\n`));
                console.log(chalk.italic.blueBright.bold("\nNew Student added\n"));
                console.log(chalk.italic.magentaBright.bold("\nCurrent Student List:\n"));
                console.log(person.students);
            }
            else {
                console.log(chalk.italic.cyanBright.bold(`\nHello i am ${student.name}. Nice to see you again!\n`));
                console.log(chalk.italic.redBright.bold("\nExisting Student List\n"));
                console.log(person.students);
            }
        }
        else if (add.select == chalk.italic.redBright.bold("Exit")) {
            console.log(chalk.italic.yellowBright.bold("\nThank you for using the system. Have a nice day!...:)\n"));
            break;
        }
    } while (true);
};
optionStart(person);
