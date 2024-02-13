// class Node {
//     constructor(d) {
//         this.data = d;
//         this.left = null;
//         this.right = null;
//     }
// }

// let root = null;

// function sortedArrayToBST(arr, start, end) {
//     // base case
//     if (start > end) {
//         return null;
//     }

//     // get the middle element and make it root
//     let mid = parseInt((start + end) / 2)
//     let node = new Node(arr[mid]);

//     /* Recursively construct the left subtree and make it left child of root */
//     node.left = sortedArrayToBST(arr, start, mid - 1);

//     /* Recursively construct the right subtree and make it right child of root */
//     node.right = sortedArrayToBST(arr, mid + 1, end);
//     return node;
// }

// /* A utility function to print preorder traversal of BST */
// function preOrder(node) {
//     if (node === null) {
//         return;
//     }
//     console.log(node.data + ' ');
//     preOrder(node.left);
//     preOrder(node.right);
// }



// console.log("Preorder traversal of constructed BST")
// preOrder(root)

// use node to sort
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// use tree to create the tree
class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = buildTree(arr, 0, arr.length - 1);
    }

    inOrder(root) {
        let out = [];
        DFSInorder(root, out);
        return out;
    }

    preOrder(root) {
        let out = [];
        DFSPreorder(root, out);
        return out;
    }

    postOrder(root) {
        let out = [];
        DFSPostorder(root, out);
        return out;
    }

    // height(node, heightVal = 0) {
    //     if (node === this.root) return 0;

    //     if (node.left) {
    //         heightVal++;
    //         this.height(node.left, heightVal);
    //     }

    //     if (node.right) {
    //         heightVal++;
    //         this.height(node.right, heightVal)
    //     }

    //     return heightVal;
    // }

    // depth(node, heightVal = 0) {
        //     if (node === this.root) return 0;
        
        //     // need to go from the root to the node given
        
        // }
    }

    // study this tomorrow
    // function maxHeight(node, heightVal = 0) {
    //     if (node === null) return 0;

    //     if (node.left) {
    //         heightVal++;
    //         maxHeight(node.left, heightVal);
    //     }

    //     if (node.right) {
    //         heightVal++;
    //         maxHeight(node.right, heightVal);
    //     }

    //     return heightVal;
    // }

    function maxHeight(node, heightVal = 0) {
        if (node === null) {
            return 0;
        } 

        if (node.left) {
            heightVal++;
            maxHeight(node.left, heightVal);
        }

        if (node.right) {
            heightVal++;
            maxHeight(node.right, heightVal);
        }

        return heightVal;


    }

    function leftRotation(node) {
        const newParent = node.right;
        const grandparent = node.parent;
        console.log(grandparent);
    }

  

    // study this tomorrow
    function maxDepth(node) {
        if (node === null) {
            return 0;
        } else {
            let lDepth = maxDepth(node.left);
            let rDepth = maxDepth(node.right);
            
            // use the larger one
            if (lDepth > rDepth) {
                return (lDepth + 1);
            } else {
                return (rDepth + 1);
            }
        }
    }

    // study this tomorrow
    function isBalanced(root) {
        if (root === null) return true;

        // for left and right subtree height
        let lh = maxHeight(root.left);
        let rh = maxHeight(root.right);

        // allowed values for (lh - rh) are 1, -1, 0
        if (Math.abs(lh - rh) <= 1 && isBalanced(root.left) === true && isBalanced(root.right) === true) {
            console.log(true)
            return true
        }

        // if we reach here, that means tree is not height balanced tree
        console.log(false)
        return false;
    }

    /* This function traverses the skewed binary tree and stores its
    nodes pointers in vector nodes [] */
    function storeBSTNodes(root, nodes) {
        if (root === null) return;

        storeBSTNodes(root.left, nodes);
        nodes.push(root);
        storeBSTNodes(root.right, nodes);
    }

    function rebalanceTree(root) {
        // store nodes of given BST in sorted order
        let nodes = [];
        storeBSTNodes(root, nodes);

        let n = nodes.length;
        return buildTree(nodes, 0, n - 1);
    }

function buildTree(array, start, end) {
    if (start > end) {
        return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    
    return node;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};


function DFSInorder(root, out) {
    if (root === null) return;
    
    if (root.left) {
        DFSInorder(root.left, out);
    }
    
    out.push(root.data);
    
    if (root.right) {
        DFSInorder(root.right, out);
    }

    console.log(out)
    return out;
}

function DFSPreorder(root, out) {
    if (root === null) return;

    out.push(root.data)

    if (root.left) {
        DFSPreorder(root.left, out)
    }

    if (root.right) {
        DFSPreorder(root.right, out)
    }

    console.log(out)
    return out;
}

function DFSPostorder(root, out) {
    if (root === null) return;

    if (root.left) {
        DFSPostorder(root.left, out)
    }

    if (root.right) {
        DFSPostorder(root.right, out)
    }

    out.push(root.data);
    console.log(out);
    return out;
}

function insertRec(root, key) {
    if (root === null) {
        root = new Node(key);
        return root;
    }

    if (key < root.data) {
        root.left = insertRec(root.left, key);
    } else if (key > root.data) {
        root.right = insertRec(root.right, key);
    }

    return root;
}

function deleteRec(root, key) {
    if (root === null) {
        return root;
    }
    
    if (root.data > key) {
        root.left = deleteRec(root.left, key);
        return root;
    } else if (root.data < key) {
        root.right = deleteRec(root.right, key);
        return root;
    }

    if (root.left === null) {
        let temp = root.right;
        delete root;
        return temp;
    } else if (root.right === null) {
        let temp = root.left;
        delete root;
        return temp;
    } else {
        let succParent = root;
    
        let succ = root.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }
        
        if (succParent !== root) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }
        
        // Copy successor data to root
        root.data = succ.data;
        
        delete succ;
        return root;
    }
}

function findVal(root, key) {
    if (root === null) {
        return 'This node does not exist';
    }

    if (key > root.data) {
        return root.left = findVal(root.left, key);
    } else if (key < root.data) {
        return root.right = findVal(root.right, key);
    } else if (key === root.data) {
        return root;
    }
}

function breadthFirstSearch(root) {
    let currentNode = root;
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        currentNode = queue.shift();
        result.push(currentNode);
        
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    console.log(result);
    return result;
}

function randomArrGenerator() {

    let arr = [];

    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

// let randomArr = randomArrGenerator();

function treeScript() {
    let randomTree = new Tree(randomArrGenerator());
    isBalanced(randomTree.root);
    prettyPrint(randomTree.root);
    insertRec(randomTree.root, 103);
    insertRec(randomTree.root, 130);
    insertRec(randomTree.root, 150);
    isBalanced(randomTree.root);
    prettyPrint(randomTree.root);
}

treeScript()



// create find function that finds the node with the given value


