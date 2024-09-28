import { BinaryTree } from "../이진트리/binary-tree.mjs";

export class BinarySearchTree {
  constructor(rootNode = null) {
    this.root = rootNode;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new BinaryTree(data);
      return;
    }

    let curNode = this.root;
    let parentNode = null;

    while (curNode) {
      parentNode = curNode;

      if (curNode.getData() > data) {
        curNode = curNode.getLeftSubTree();
      } else if (curNode.getData() < data) {
        curNode = curNode.getRightSubTree();
      } else {
        return;
      }
    }

    let newNode = new BinaryTree(data);

    if (parentNode.getData() > data) {
      parentNode.setLeftSubTree(newNode);
    } else {
      parentNode.setRightSubTree(newNode);
    }
  }

  search(targetData) {
    let curNode = this.root;

    while (curNode) {
      if (curNode.getData() === targetData) {
        return curNode;
      } else if (curNode.getData() > targetData) {
        curNode = curNode.getLeftSubTree();
      } else {
        curNode = curNode.rightSubTree();
      }
    }

    return null;
  }

  remove(targetData) {
    let fakeParentRootNode = new BinaryTree(0);
    let parentNode = fakeParentRootNode;
    let curNode = this.root;
    let deletingNode = null;

    fakeParentRootNode.setRightSubTree(this.root);

    while (curNode && curNode.getData() !== targetData) {
      parentNode = curNode;

      if (curNode.getData() > targetData) {
        curNode = curNode.getLeftSubTree();
      } else {
        curNode = curNode.getRightSubTree();
      }
    }

    if (!curNode) {
      return;
    }

    deletingNode = curNode;

    if (!deletingNode.getLeftSubTree() && !deletingNode.getRightSubTree()) {
      if (parentNode.getLeftSubTree() === deletingNode) {
        parentNode.removeLeftSubTree();
      } else {
        parentNode.removeRightSubTree();
      }
    } else if (
      !deletingNode.getLeftSubTree() ||
      !deletingNode.getRightSubTree()
    ) {
      let deletingNodeChild;

      if (deletingNode.getLeftSubTree()) {
        deletingNodeChild = deletingNode.getLeftSubTree();
      } else {
        deletingNodeChild = deletingNode.getRightSubTree();
      }

      if (parentNode.getLeftSubTree() === deletingNode) {
        parentNode.setLeftSubTree(deletingNodeChild);
      } else {
        parentNode.setRightSubTree(deletingNodeChild);
      }
    } else {
      let replacingNode = deletingNode.getLeftSubTree();
      let replacingNodeParent = deletingNode;

      while (replacingNode.getRightSubTree()) {
        replacingNodeParent = replacingNode;
        replacingNode = replacingNode.getRightSubTree();
      }

      let deletingNodeData = deletingNode.getData();
      deletingNode.setData(replacingNode.getData());

      if (replacingNodeParent.getLeftSubTree() === replacingNode) {
        replacingNodeParent.setLeftSubTree(replacingNode.getLeftSubTree());
      } else {
        replacingNodeParent.setRightSubTree(replacingNode.getLeftSubTree());
      }

      deletingNode = replacingNode;
      deletingNode.setData(deletingNodeData);
    }

    if (fakeParentRootNode.getRightSubTree() !== this.root) {
      this.root = fakeParentRootNode.getRightSubTree();
    }

    return deletingNode;
  }
}
