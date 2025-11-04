#### Getting sync with the default branch
```
git checkout master
git pull origin master
```
#### Create a new branch
```
git checkout -b feature/redesign
```
#### After adding the new changes, commit them.
```
git add ./
git commit -m "..."
```
#### After that you have to change the package.json version.
```
npm version major -m "Version to 2.0.0"
```
#### Rebasing with your parent branch
```
git rebase -i master
```
#### Push your changes to the branch and tag.
```
git push origin feature/redesign
git push origin v2.0.0
```
