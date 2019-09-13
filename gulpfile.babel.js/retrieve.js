/* 
    ------------------------------------------------------------------------------
    retrieve.js
    author: Kenny Soetjipto
    ------------------------------------------------------------------------------    
    purpose: A function which retrieves all sources from Salesforce
*/

import {exec} from 'child_process';
import fs from 'fs';

export default function retrieve() {
    const package_path = 'manifest/package.xml';
    
    //check if package.xml exist
    if(fs.existsSync(package_path)) {
        return exec(`sfdx force:source:retrieve --manifest ${package_path}`, (err, stdout, stderr) => {
            if(err) {
                
                console.log(`error log: ${err}`); 
                //console.log('error occur: ' +stderr);             
                return;
            }
            else {
                //below is required 
                console.log(`stdout: ${stdout}`);
                console.log('\x1b[36m%s\x1b[0m','Retrieved Successful and start watching file changes');
            }            
         })
    }
    else {
        console.log(`\nmanifest/package.xml is not exist\n`);        
    }
    
}