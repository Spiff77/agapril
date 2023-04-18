#!/bin/bash

commitmessage=$1
remotepath=git remote -v | grep push
echo -e "git add current folder"
git add .
echo -e "commiting with message: $commitmessage"
git commit -m $commitmessage
echo -e "pushing to : $remotepath"
git push origin main
