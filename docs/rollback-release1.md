##### Let's say there is a bad version called v2.0.1.
##### Remove it locally and remotely.
```
git tag -d v2.0.1
git push origin --delete v2.0.1
```
##### Then back to the safe tag.
```
git checkout v2.0.0
```
##### Create a new tag.
```
git tag v2.0.1
git push origin v2.0.1
```
