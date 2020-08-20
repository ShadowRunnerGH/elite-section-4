const fs = require('fs');
const path = require('path');
for(let filename = 1; filename <= 10; filename++) {
    fs.readFile(path.join(__dirname, '/questions', `${filename}`), 'utf-8', function(err, body) {
        if(err) throw err; 
        const questions = body.split("\n");
        fs.writeFile(path.join(__dirname, '/solutions', `${filename}`), '', err => {
            if (err) {
                console.log("")
            }
            questions.forEach((question) => {
                fs.appendFile(path.join(__dirname, '/solutions', `${filename}`), `${eval(question)}\n`, err => {
                    if (err) throw err;
                })
            })  
        })
    })
}