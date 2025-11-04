```
git checkout master
git pull origin master
git checkout -b hotfix/dashboard
npm version minor -m "Version to 1.1.0"
git push origin hotfix/dashboard
git push origin v1.1.0
```
