const fs = require('fs');
const path = require('path');

const serverDir = "server";
const deployDir = "deploy";
const deployClient = deployDir + "/public";
const clientBuildDir = "client/build";

const serverFiles = [
    {
        src: serverDir + "/index.js",
        dest: deployDir + "/index.js"
    },
    {
        src: serverDir + "/package-lock.json",
        dest: deployDir + "/package-lock.json"
    },
    {
        src: serverDir + "/package.json",
        dest: deployDir + "/package.json"
    }
];

function copyDirRecursiveSync(src, target)
{
    if(!fs.lstatSync(src).isDirectory()) return;

    if(!fs.exists(target)) {
        fs.mkdirSync(target);
    }

    var files = fs.readdirSync(src);
    files.forEach( (file) => {
        var spath = path.join(src, file);
        var tpath = path.join(target, file);
        if(fs.lstatSync(spath).isDirectory()) 
        {
            copyDirRecursiveSync(spath, tpath);
        }
        else
        {
            console.log(" copy " + spath + " to " + tpath);
            fs.copyFileSync(spath, tpath);
        }
    });
}

function removeDirRecursiveSync(src)
{
    try
    {
        if(!fs.lstatSync(src).isDirectory()) return;
    
        var files = fs.readdirSync(src);
        files.forEach( (file) => {
            var spath = path.join(src, file);
            if(fs.lstatSync(spath).isDirectory()) 
            {
                removeDirRecursiveSync(spath);
            }
            else
            {
                console.log(" delete " + spath);
                fs.unlinkSync(spath);
            }
        });
    
        fs.rmdirSync(src);
    }
    catch (e) {}
}

removeDirRecursiveSync(deployDir);
fs.mkdir(deployDir);
copyDirRecursiveSync(clientBuildDir, deployClient);

serverFiles.forEach( fo => {
    console.log(" copy " + fo.src + " to " + fo.dest);
    fs.copyFileSync(fo.src, fo.dest);
});
