import { BinarySearchTree } from "./binary-search-tree.mjs";

const binarySearchTree = new BinarySearchTree();

console.log("--데이터 삽입--");
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);

binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

console.log("------6 검색------");
console.log(binarySearchTree.search(6));

console.log("------1 검색------");
console.log(binarySearchTree.search(1));

console.log("------10 제거------");
binarySearchTree.remove(10);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);