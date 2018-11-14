//  关于二叉树的理解  之前一直感觉二叉树比较偏向数据结构 也感觉比较神秘 一直不敢触碰 ,今天在leedcode上遇见几道题被卡住了，才解开了二叉树的面纱
function Node(data,left,right){
    this.data=data;
    this.left=left;
    this.right=right;
} 

function BinaryTree (){
    this.root=null;
    this.insert=insert;
}

function insert(data){
    var node= new Node(data,null,null);
    if(this.root==null){
        this.root=node;
    }else {
        var current=this.root;
        var parent;
        while(true){
            parent=current;
            if(data<current.data){
                current = current.left;
                if(current==null){
                    parent.left=node;
                    break;
                }
            }else{
                current=current.right;
                if(current==null){
                    parent.right=node;
                    break
                }
            }
        }
       
    }
}

var binaryTree = new BinaryTree();


binaryTree.insert(34)
binaryTree.insert(39)
binaryTree.insert(30)
console.log(binaryTree)














