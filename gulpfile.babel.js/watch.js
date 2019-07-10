import gwatch from 'gulp-watch';
import {exec} from 'child_process';

export default function watch() {
    //define project path to watch
    let projPath = 'force-app/main/default';
    
    gwatch(projPath, (file) => {
        //construct file path.       
        //dirname - provide folder until root folder or before force-app
        //basename - provide filename that is changed
        const filePath = `${file.dirname}\\${file.basename}`;
        
        //utilise exec() from child_process
        const res = exec(`sfdx force:source:deploy --sourcepath ${filePath} --json --loglevel fatal`, (err, stdout, stderr) => {
            //if error occur
            if(err) {
            	 var errLog = stderr.split('"stack');
                console.log(`error log: ${errLog[0]}`); 
                //console.log('error occur: ' +stderr);             
                return;
            }
            else {
                 //below is required 
                 console.log(`stdout: ${stdout}`);
                 console.log('Uploaded successful');
            }            
        });       
    });    
}

