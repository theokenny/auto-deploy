# VSCode Auto Deploy
This tool deploys code changes from local to Salesforce automatically by save the file or ctrl+s


## Installation
1. It requires latest node.js to install in the computer. 
2. It requires to download and install gulp, gulp-cli globally.
3. Ensure that you have download and install VSCode, Salesforce CLI, and Salesforce Extension Pack.

### 1. Download and Install VSCode, Salesforce CLI, and Salesforce Extension Pack.
* Follow trailhead through this link: [VSCode Trail](https://trailhead.salesforce.com/content/learn/projects/quickstart-vscode-salesforce)

NOTE: It contains concise and summary features of VSCode and Salesforce extensions.

### 2. Node.js
* Download and install it from this link: [node.js](https://nodejs.org/en)
* Check if node.js is installed correctly:
   * Open command prompt as administrator, type command below: 
```javascript
node -v
```
It displays node version like: v10.16.0
### 3. Gulp, Gulp-cli
* Open command prompt as administrator, type command below:
```javascript
npm i -g gulp, gulp-cli
```

## Usage:
1. Create Project with Manifest
2. Authorize an Org
3. Retrieve Source in Manifest from Org

#### 1. Create Project with Manifest
1. Create new folder as Project root folder locally.
2. Use shortcut ctrl+shift+p > Choose "Create Project with Manifest"
3. Give name of the project
4. It prompts the files explorer menu, choose location to put the project
5. Select Create Project button

NOTE:
* VSCode creates a project root folder

### 2. Authorize an Org
1. type ctrl+shift+p > choose Authorize an Org
2. Select environments > trail is production > give alias
3. Salesforce will open up a browser with Salesforce login page
4. put username and password
5. Close the brwoser if authorization is succesful

### 3. Retrieve Source from Salesforce To Local
1. expand manifest folder, select package.xml
2. right-click, choose "Sfdx:Retrive Source in Manifest from Org" from the menu.

   * NOTE: if the options is not appear, try to authorize an org again.

3. VSCode will put all files in "force-app" folder

### File Structure:
* classes folder - it contains all apex files
* triggers folder - it contains all trigger files
* aura folder - it contains all Aura Component files
* lwc folder - it contains all Lightning Web Component related files

# Start Automation
1. Clone my public Github Repo - [VSCode-AutoDeploy](https://github.com/theokenny/vscode-AutoDeploy.git)
2. Extract out files and folder from that repo into root folder of your project.
3. Open up command prompt as admin at root project folder
4. Run command:
```javascript
npm i
```
NOTE:
* It download necessary packages into project folder

5. Run command:
```javascript
gulp
```
Gulp task runner starts to watch for changes. 
It deploys automatically everytime we save the changes. 

