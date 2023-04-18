#!/bin/bash

wcgit=-1
remotepath=''
commitmessage=$1
isgit=$(git rev-parse --is-inside-work-tree 2>/dev/null)

if [ -z "$isgit" ]
then
  echo "Not a git repo"
  exit 1;
fi
if [ -z $commitmessage ]
then
  echo "Need a commit message"
  exit 1
fi
wcgit=$(git diff --exit-code | wc -l)

if [ $wcgit == 0 ]
then
  echo "Nothing to commit..."
else
  remotepath=$(git remote -v | grep push)
  echo -e "git add current folder"
  git add .
  echo -e "commiting with message: $commitmessage"
  git commit -m $commitmessage
  echo -e "pushing to : $remotepath"
  git push origin main
fi
