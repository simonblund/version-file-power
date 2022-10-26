const core = require('@actions/core');
const fs = require('fs/promises');

async function run(){
    try{
        const pathToVersionFile =core.getInput('path-to-version')
        const version = core.getInput('version')

        const content = "__version__='"+version+"' \n # This project is versioned by version-power only change the MAJOR and MINOR parts of this file. \n # Do not add any quotes in this file.";
        await fs.writeFile(pathToVersionFile+'__version__.py', content);


    }
    catch(error){
        core.setFailed(error.message);
    }
}

run()