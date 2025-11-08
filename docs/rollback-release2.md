##### Let's say there is a bad version called v2.0.1.
##### Remove it locally and remotely.
```
git tag -d v2.0.1
git push origin --delete v2.0.1
```
##### Checkout the last good version.
```
git checkout v2.0.0
```
##### Create a branch.
```
git checkout -b hotfix/emergency-rollback-v2.0.1
```
##### Update version to indicate this is a fix.
```
npm version patch -m "Emergency rollback: fixing issues from failed v2.0.1 release"
```
##### Create a new version and push them.
```
git push origin hotfix/emergency-rollback-v2.0.1
git push origin v2.0.1
```
