#!/bin/bash

# introduce a 5-second delay
sleep 30

# change to the directory where the Git repository is located
cd /home/nstcg/Desktop/SwitchAutomation/wlePi

# fetch the latest changes from the remote repository
git fetch --all --force


# merge changes from the remote repository
git merge origin/main --no-edit


# change to the directory where the Node.js application is located
cd /home/nstcg/Desktop/SwitchAutomation/wlePi/NodeJSApp

# install any new dependencies from npm
npm install

# run the Node.js application with the app.js file
node app.js
