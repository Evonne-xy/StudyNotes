Git如何多人合作管理代码呢？ 假设这里有三个人合作代码，假设Boss， employer1, employer2


`employer1` (登录功能)

1. git checkout -b ...(新分支名字) //创建一个新的分支，为了不影响master代码
2. git branch //查看你当前的分支
   
----- 开始做你的功能-------

3. git diff //查看你改动了哪里
4. git add .
5. git commit -m 'login feature'
6. git push origin ...(新分支名字)


`employer2` (做相同的事情)

现在的分支就有 master, loginFeature, registerFeature


`Boss`（当employer1,2做完后，boss需要查看代码并且进行合并）
1. git fetch // 把当前所有的分支全部拉下来
2. git checkout loginFeature // 切换到login分支
3. git pull origin loginFeature //获取远程仓库内容并合并
4. git checkout master
5. git merge loginFeature //将login feature分支内容合并到master上
6. git push -u origin main 


如果遇见conflict情况,为什么会发送conflict？因为两个人改了同一个文件

1. 打开VS code，找到冲突的文件 

![VSCode 上冲突的样子](/GitNotes/gitConflict.png)

2. 如上图，这三个选项中选择你想要的
3. git add . 
4. git commit -m 'merge'
5. git merge loginFeature
6. git push -u origin main


如果你直接在master上改了，忘记创建新的branch了，怎么办呢？
1. git stash //将修改的暂存在当前分支的另一个区域，不影响当前分支
2. git checkout -b ...(新分支)
3. git stash pop //将暂存的修改推出来


