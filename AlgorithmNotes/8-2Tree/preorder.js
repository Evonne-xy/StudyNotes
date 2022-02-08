// 先序遍历算法(preorder)「根左右」 

// 1: 访问根节点 

// 2:对根节点的左子树进行先序遍历 

// ​3:对根节点的右子树进行先序遍历

const bt = {
    val: 1,
    left: {
      val: 2,
          left: {
              val: 4,
              left: null,
              right: null,
          },
          right: {
              val: 5,
              left: null,
              right: null,
          },
    },
    right: {
      val: 3,
          left: {
              val: 6,
              left: null,
              right: null,
          },
          right: {
              val: 7,
              left: null,
              right: null,
          },
    },
  };


//递归版先序遍历
// const preorder = (root) => {
//     if(!root){return;}
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
// }



//非递归版先序遍历

const preorder = (root)=> {
    if(!root) {return;}
    const stack = [root];
    while(stack.length){
        const node =  stack.pop();
        console.log(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);   
        
    }
    
}

preorder(bt);


