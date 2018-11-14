
class Node {
    constructor(props){
        this.data=props.data;
        this.left=props.left;
        this.right=props.right;
    }

}


class BinaryTree {
    constructor(){
        this.root=null;
    }
    insert(data){
    const node = new Node({data,left:null,right:null});
    if(this.root==null){
        this.root=node;
    }else{
        this.current=this.root;
        while(true){
            this.parent=this.current
            if(data<this.root.data){
                this.current=this.current.left;
                if(this.current==null){
                    this.parent.left=node;
                    break;
                }
            }else{
                this.current=this.current.right;
                if(this.current==null){
                    this.parent.right=node;
                    break;
                }
            }
        }
    }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(34)
binaryTree.insert(33)
binaryTree.insert(32)
binaryTree.insert(31)
binaryTree.insert(35)

console.log(binaryTree)

