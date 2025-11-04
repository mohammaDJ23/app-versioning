```
git checkout master
git pull origin master
git checkout -b hotfix/redesign
npm version major -m "Version to 2.0.0"
git push origin hotfix/redesign
git push origin v2.0.0
```
