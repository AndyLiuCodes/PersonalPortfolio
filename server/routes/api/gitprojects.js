const express = require("express");
const mongodb = require("mongodb");
const axios = require("axios");

const router = express.Router();

//grab repositories from DB
router.get('/', async (req, res) => {
    const projects = await loadProjectCollection();
    res.send(await projects.find({}).toArray());
});

//Insert repositories in DB
router.post('/insert', async (req, result) =>{
    projects = [];
    //Grab respositories from github API
    await axios.get("https://api.github.com/users/andyliucodes/repos")
        .then(res => {
            projects = res.data

        })
        .catch(err => {
            console.log(err);
        });

    simpProjects = []

    for(let project of projects){
        simplifiedProject = {
            name: project.name,
            id: project.id,
            URL: project.html_url,
            description: project.description,
            usedTech: "",
            deployedURL: ""
        }
        simpProjects.push(simplifiedProject)
    }

    const projectsCollection = await loadProjectCollection();
    await projectsCollection.deleteMany({}, (err, num) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Removed: " + num)
        }
    });
    await projectsCollection.insertMany(simpProjects);

    result.status(201).send(simpProjects);

    //Process repositories

    //if respository exist update repository

    //else insert repository

});

//update repositories

//process repositories regular function

//??Create a whitelist/blacklist

async function loadProjectCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://root123:1927Brownst@personalwebsite-jnyn0.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('PersonalWebsite').collection('projects');
}
module.exports = router;