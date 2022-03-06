## 继"Black Lives Matter"运动后 git如何上传

1. cd /d e:....(path)  //定位到那个位置
2. git init    // init local repository as git repository
3. git add .   // Add files in the local repository (The file will be staged for their first commit)
4. git status // 可以看到所有file即将被commit
5. git commit -m "first commit" //commit the file that staged in the local repository
6. git remote add origin (repositoryURL)
7. git branch -m master main //继运动后， 统一远程和本地的仓库名称 把本地的 master 仓库名称修改为远端的 main
8. git pull https://github.com/*username*/*repository*.git main  //将远程分支拉取与本地分支合并（相当于git fetch + git merge）这样做的目的是你的local branch 与 tracking branch 同步
9. git push -u origin main


常见错误：

错误：
```
 Failed to connect to github.com port 443: Timed out
```

```
Could not resolve host: github.com
```

解决方案：
git config --global --unset http.proxy 
git config --global --unset https.proxy