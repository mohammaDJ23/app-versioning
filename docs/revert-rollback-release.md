##### Let's say there is a bad version called v2.0.1.
##### Get the last changes.
```
git checkout master
git pull origin master
```
##### Create emergency rollback branch.
```
git checkout -b hotfix/rollback-v2.0.1
```
##### Identify the problematic commits.
```
git log --oneline v2.0.0..v2.0.1
```
##### Then revert.
```
git revert <commit-hash1> <commit-hash2> --no-edit
```
##### Create a new version and push them.
```
npm version patch -m "Emergency rollback: revert v2.0.1 changes"
git push origin hotfix/rollback-v2.0.1
git push origin v2.0.2
```
