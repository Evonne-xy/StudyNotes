const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
            val: "f",
            children: [],
          },
          {
            val: "g",
            children: [],
          },
      ],
    },
  ],
};

const dfs = (root) => {
    //访问根节点
    console.log(root.val);
    //对children进行遍历,先拿到根节点的child，再调用dfs方法，把这个child当作根节点，再次调用
    root.children.forEach((child) => {
        dfs(child);
    });
}

dfs(tree);
