# 🌳 Binary Search Tree Project (JavaScript)

A **JavaScript implementation** of a Binary Search Tree (BST) supporting **insertion, deletion, traversal, balance checking**, and **rebalancing** — built with helper classes (`Queue`, `Node`) and a custom `mergeSort`.

---

## 🧠 Overview

- Builds a **balanced BST** from random numbers `< 100`
- Checks balance, inserts extra values, and rebalances when needed
- Prints the tree structure and traversal orders (**level**, **pre**, **in**, **post**)

---

## 📂 File Structure

| File | Description |
|------|--------------|
| `index.js` | Driver script |
| `binaryTree.js` | Tree, Node, and Queue classes |
| `mergeSort.js` | Merge sort helper |
| `README.md` | Project documentation |

---

## ⚙️ Tree Class

Main structure handling all **BST operations**.

### 🧩 Key Methods

| Method | Description | Time Complexity |
|---------|--------------|----------------|
| `buildTree(array)` | Builds balanced BST from sorted array | **O(n log n)** |
| `insert(value)` | Adds node to correct position | **O(h)** |
| `deleteItem(value)` | Removes node (relinks children) | **O(h)** |
| `find(value)` | Finds a node | **O(h)** |
| `isBalanced()` | Checks if tree is balanced | **O(n)** |
| `rebalance()` | Rebuilds balanced tree from in-order list | **O(n)** |
| `prettyPrint()` | Prints tree visually | **O(n)** |

---

### 🌿 Traversal Methods

| Method | Order | Time Complexity |
|---------|--------|----------------|
| `levelOrderForEach(cb)` | Breadth-First | **O(n)** |
| `inOrderForEach(cb)` | Left → Root → Right | **O(n)** |
| `preOrderForEach(cb)` | Root → Left → Right | **O(n)** |
| `postOrderForEach(cb)` | Left → Right → Root | **O(n)** |

---

## 🌱 Node Class

```js
class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.parent = null;
  }
}
```

## 🧮 Queue Class

Circular queue used for **level-order traversal**.

| Method | Description | Time Complexity |
|---------|--------------|----------------|
| `enqueue()` / `dequeue()` | Add or remove element | **O(1)** |
| `expand()` | Doubles array size when full | **O(n)** |
| `isEmpty()` | Checks if the queue is empty | **O(1)** |


## 🔢 mergeSort Helper

```js
function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = array.length / 2;
  return merge(
    mergeSort(array.slice(0, mid)),
    mergeSort(array.slice(mid))
  );
}

```