var fs = require('fs');
var readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUserInput() {
    return new Promise((resolve) => {
        rl.question('Please enter your input: ', (input) => {
            resolve(input.trim());
        });
    });
}


function validateInput(input) {
    if (!input || input === '') {
        console.log('Error: Input cannot be empty or whitespace!');
        return false;
    }
    return true;
}

//function .then()
function writeFileWithThen(input) {
    return new Promise((resolve, reject) => {
        fs.appendFile('user/user_data.txt', input + '\n', (err) => {
            if (err) {
                reject('Error writing to file using .then()');
            } else {
                resolve('Success: Input saved using .then()');
            }
        });
    });
}

//function Async
async function writeFileWithAsync(input) {
    try {
        await fs.promises.appendFile('user_data.txt', input + '\n');
        console.log('Success: Input saved using async/await');
    } catch (err) {
        console.error('Error writing to file using async/await', err);
    }
}


async function main() {
    let validInput = false;
    let input = '';
    
    while (!validInput) {
        input = await promptUserInput();
        if (validateInput(input)) {
            validInput = true;
        }
    }
    rl.question('Choose method for saving input (1 for .then, 2 for async/await): ', async (choice) => {
        if (choice === '1') {
            writeFileWithThen(input)
                .then((message) => console.log(message))
                .catch((error) => console.error(error));
        } else if (choice === '2') {
            await writeFileWithAsync(input);
        } else {
            console.log('Invalid choice. Please restart and choose 1 or 2.');
        }
        rl.close();
    });
}
main();
