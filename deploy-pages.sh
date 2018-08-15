#!/bin/bash
# Rebuild, copy, commit then upload gh-pages branch.

# Exit immediately on error.
set -e

echo -e "\033[0;32mDeploying Github Pages...\033[0m"

# Check that there are no uncommited files in master.
status=$(git status --short)
if [ $(echo "$status" | wc -w) -gt 0 ]; then
  echo "FAILED: There are uncommited changes."
  echo "$status"
  exit 1
fi

# Rebild application.
npm run build

# Copy built files to gh-pages.
rm -rf ../halvfems-gh-pages
mkdir ../halvfems-gh-pages

cd ../halvfems-gh-pages/
git remote add origin https://github.com/un0rsk/halvfems.git
git push origin gh-pages
git checkout gh-pages

cp -rf ../halvfems/build/* ../

# Add changes to git.
git init
git add .

# Commit changes.
msg="Rebuild Github Pages."
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"


cd ../halvfems/