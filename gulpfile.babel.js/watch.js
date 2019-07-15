import {exec} from 'child_process';
import gulp from 'gulp';

export default function watch() {
    //define project path to watch
    let projPath = 'force-app/main/default';
    
    gulp.watch(projPath).on('change', function(file) {
        
        console.log('starting to deploy file: ' +file);
        //utilise exec() from child_process
        const res = exec(`sfdx force:source:deploy --sourcepath ${file} --json --loglevel fatal`, (err, stdout, stderr) => {
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