function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return data;
}

function BinaryTree() {
	this.root = null;
	this.insert = insert;
	//this.inOrder = inOrder;
}
/**
 * 
 * @param {*} data 
 * 该方法的精妙之处在于  使用while根据data和parent节点的data比较 进行赋值左右的节点
 */

function insert(data) {
	//先得到一个node 节点
	var node = new Node(data, null, null);
	// 判断是否第一次二叉树是否创建
	if (this.root === null) {
		// 没有的话直接把当前的node节点保存为二叉树的根节点
		this.root = node;
	} else {
		// 存在的话  分为3步
		// 1 判断 当前的节点大于还是小于 根节点的data 为了方便比较建立两个临时变量 current 、 parent
		var current = this.root;
		var parent;
		// 2小于的 就进入左节点的轮询比较 直到左节点为nul 插入左节点 返回
		// 3 大于的话 就进入右节点轮询比较 直到右节点为null 插入右节点 返回
		while (true) {
			// 每次循环 不断的给parent赋值 现在的
			parent = current;
			if (data < current.data) {
				// 把根节点替换成左节点
				current = current.left;
				if (current === null) {
					// parent左节点赋值 并且跳出循环
					parent.left = node;
					break;
				}
			} else {
				// 右节点 轮询判断
				current = current.right;
				if (current === null) {
					parent.right = node;
					break;
				}
			}
		}
	}
}


var binaryTree =  new BinaryTree();
binaryTree.insert('5')
binaryTree.insert('4')
binaryTree.insert('3')
binaryTree.insert('6')
binaryTree.insert('7')

console.log(binaryTree)