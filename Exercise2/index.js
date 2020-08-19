const fetch = require("node-fetch");
const username = process.argv[2];
const API = "https://api.github.com/users";
const link = `${API}/${username}/repos?per_page=100`
fetch(link)
    .then(res => {
        if(res.status === 404) {
            throw "Username not found"
        } else if(res.status > 404) {
            throw "Connection not found"
        }
        return res.json();
    })
    .then(repos => {
        repos.forEach(repo => {
            console.log(repo.name)
        })
    })