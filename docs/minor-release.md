```
# Getting sync with the default branch

git checkout master
git pull origin master

# Create a new branch

git checkout -b hotfix/dashboard

# After adding the new changes, commit them.
# After that you have to change the package.json version.

npm version minor -m "Version to 1.1.0"

# Push your changes to the branch and tag.

git push origin hotfix/dashboard
git push origin v1.1.0
```
