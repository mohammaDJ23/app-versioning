#### Getting sync with the default branch
```
git checkout master
git pull origin master
```
#### Create a new branch
```
git checkout -b hotfix/user-info-error-syntax
```
#### After adding the new changes, commit them.
```
git add ./
git commit -m "..."
```
#### After that you have to change the package.json version.
```
npm version patch -m "Version to 1.0.1"
```
#### Rebasing with your parent branch
```
git rebase -i master
```
#### Push your changes to the branch and tag.
```
git push origin hotfix/user-info-error-syntax
git push origin v1.0.1
```
