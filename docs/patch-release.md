```
git checkout master
git pull origin master
git checkout -b hotfix/user-info-error-syntax
npm version patch -m "Version to 1.0.1"
git push origin hotfix/user-info-error-syntax
git push origin v1.0.1
```
