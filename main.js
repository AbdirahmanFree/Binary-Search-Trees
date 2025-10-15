/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binaryTree.js":
/*!***************************!*\
  !*** ./src/binaryTree.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _mergeSort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSort.js */ \"./src/mergeSort.js\");\n\nclass Tree {\n    constructor(array){\n        this.root = this.buildTree(array)\n        this.root.parent = null;\n\n    }\n\n    buildTree(array){\n        const sortedArray = this.sort(array);\n        return this.buildTreeHelp(sortedArray)\n        \n    }\n\n    buildTreeHelp(array){\n        if (array.length === 0) return null;\n        const root = new Node()\n        if(array.length <= 1){\n            root.data = array[0]\n            return root\n        }\n        const mid = Math.floor((array.length/2))\n        root.data = array[mid]\n        const leftSubTree = this.buildTreeHelp(array.slice(0,mid))\n        const rightSubTree = this.buildTreeHelp(array.slice(mid+1,))\n        if(leftSubTree != undefined){\n            root.leftChild = leftSubTree\n            leftSubTree.parent = root\n        }\n        if(rightSubTree != undefined){\n            root.rightChild = rightSubTree\n            rightSubTree.parent = root\n        }\n        return root\n        \n    }\n\n    prettyPrint(node, prefix = '', isLeft = true){\n        if (node === null) {\n            return;\n        }\n        if (node.rightChild !== null) {\n            this.prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n        }\n        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n        if (node.leftChild !== null) {\n            this.prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n        }\n    };\n\n    sort(array){\n        let seen = {}\n        let array2 = []\n        for (let i = 0; i <array.length; i++){\n            if(array[i] in seen){\n                continue;\n            }\n            else{\n                array2.push(array[i])\n                seen[array[i]] = 1\n            }\n        }\n        return (0,_mergeSort_js__WEBPACK_IMPORTED_MODULE_0__.mergeSort)(array2)\n\n    }\n\n    insert(value){\n        const node = new Node()\n        node.data = value\n        if(this.root === null){\n            return node\n        }\n        let root = this.root;\n        let subTree;\n        if (root.data < value){\n            subTree = root.rightChild\n        }\n        else{\n            subTree = root.leftChild\n        }\n            \n        \n        while(subTree != null){\n            root = subTree\n            if(subTree.data == value){\n                return false\n            }\n            if (subTree.data > value){\n                subTree = subTree.leftChild\n            }\n            else{\n                subTree = subTree.rightChild\n            }\n\n        }\n        if (root.data > value){\n                root.leftChild = node\n                node.parent = root\n        }\n        else {\n            root.rightChild = node\n            node.parent = root\n        }\n        return this.root\n\n\n    }\n    \n\n    findMax(root){\n        if(root.rightChild == null){\n            return root.data\n        }\n        this.findMax(root.rightChild)\n    }\n\n    findMin(root){\n        if(root.leftChild == null){\n            return root.data\n        }\n        this.findMin(root.leftChild)\n    }\n\n    find(value){\n        if(this.root.data == value){\n            return this.root\n        }\n\n       \n        let root = this.root\n\n        while(root != null){\n            if(root.data == value){\n                return root\n            }\n            else if(root.data < value){\n                root = root.rightChild\n            }\n            else{\n                root = root.leftChild\n            }\n        }\n        return null;\n    }\n\n    deleteItem(value){\n        let root = this.find(value)\n        if(root == null){\n            return null\n        }\n        let newData = null\n        if(root.rightChild == null && root.leftChild == null){\n            let parent = root.parent\n            if(parent.rightChild == root){\n                parent.rightChild = null;\n            }\n            else{\n                parent.leftChild = null;\n            }\n\n            \n            \n            return this.root\n        }\n        else if(root.rightChild == null){\n            newData = this.findMax(root.leftChild)\n            let temp = newData\n            this.deleteItem(newData)\n            root.data = temp;\n        }\n        else {\n            newData = this.findMin(root.rightChild)\n            let temp = newData\n            this.deleteItem(newData)\n            root.data = temp;\n        }\n    }\n\n    levelOrderForEach(callback){\n       if(typeof callback != 'function'){\n        throw console.error(\"need function\");\n       }\n       \n        if(this.root == null){\n            return\n        }\n        const queue = new Queue(6)\n        queue.enqueue(this.root)\n        while(! queue.isEmpty()){\n            let root = queue.dequeue()\n            callback(root)\n            if(root.leftChild != null){\n                queue.enqueue(root.leftChild)\n            }\n            if(root.rightChild != null){\n                queue.enqueue(root.rightChild)\n            }\n        }\n        \n\n    }\n    inOrderForEach(callback){\n        if(typeof callback != 'function'){\n            throw console.error(\"need function\");\n        }\n        this.inOrderHelper(callback,this.root)\n\n    }\n    inOrderHelper(callback, root){\n        if(root == null){\n            return\n        }\n        \n        this.inOrderHelper(callback,root.leftChild)\n        callback(root)\n        this.inOrderHelper(callback,root.rightChild)\n    }\n\n    preOrderForEach(callback){\n        if(typeof callback != 'function'){\n            throw console.error(\"need function\");\n        }\n        this.preOrderHelper(callback,this.root)\n\n    }\n\n    preOrderHelper(callback, root){\n        if(root == null){\n            return;\n        }\n        callback(root)\n        this.preOrderHelper(callback, root.leftChild)\n        this.preOrderHelper(callback, root.rightChild)\n\n    }\n\n    postOrderForEach(callback){\n        if(typeof callback != 'function'){\n            throw console.error(\"need function\");\n        }\n        this.postOrderHelper(callback,this.root)\n    }\n\n    postOrderHelper(callback, root){\n        if(root == null){\n            return;\n        }\n        this.preOrderHelper(callback, root.leftChild)\n        this.preOrderHelper(callback, root.rightChild)\n        callback(root)\n\n    }\n\n    height(value){\n        let root = this.root\n        let count = 0\n        while(root != null){\n            if(root.data == value){\n                return this.heightHelper(root)\n            }\n            if (value > root.data){\n                root = root.rightChild\n                \n            }\n            else{\n                root = root.leftChild\n            }\n        }\n        return null\n\n    }\n\n    heightHelper(node){\n        if( node == null){\n            return 0\n        }\n        if(node.leftChild == null && node.rightChild == null){\n            return 0\n        }\n        \n        const leftTreeDepth = this.heightHelper(node.leftChild)\n        const rightTreeDepth = this.heightHelper(node.rightChild)\n        return 1 + Math.max(leftTreeDepth, rightTreeDepth)\n    }\n\n    depth(value){\n        let root = this.root\n        let count = 0\n        while(root != null){\n            if(root.data == value){\n                return count\n            }\n            if (value > root.data){\n                root = root.rightChild\n                count+=1\n            }\n            else{\n                root = root.leftChild\n                count +=1\n            }\n        }\n        return null\n\n    }\n\n    checkBalance(node) {\n        if (node === null) return { balanced: true, height: 0 };\n\n        const left = this.checkBalance(node.leftChild);\n        const right = this.checkBalance(node.rightChild);\n\n        const balanced =\n            left.balanced &&\n            right.balanced &&\n            Math.abs(left.height - right.height) <= 1;\n\n        const height = 1 + Math.max(left.height, right.height);\n\n        return { balanced, height };\n    }\n\n    isBalanced(node = this.root) {\n        return this.checkBalance(node).balanced;\n    }\n\n    rebalance(node, array= []){\n        if(node == null){\n            return \n        }\n        this.rebalance(node.leftChild, array)\n        array.push(node.data)\n        this.rebalance(node.rightChild, array)\n        this.root = this.buildTree(array)\n        this.root.parent = null\n        \n    }\n    \n\n    \n}\n\n\n\n\n\n\n\nclass Node {\n    constructor(data, leftChild = null, rightChild = null){\n        this.data = data\n        this.leftChild = leftChild\n        this.rightChild = rightChild\n        this.parent = parent\n    }\n}\n\nclass Queue {\n  constructor(size = 4) {\n    this.size = size;\n    this.array = new Array(size).fill(null);\n    this.front = 0;\n    this.rear = 0;\n    this.count = 0;\n  }\n\n  isEmpty() { return this.count === 0; }\n  isFull() { return this.count === this.size; }\n\n  enqueue(element) {\n    if (this.isFull()) this.expand();\n\n    this.array[this.rear] = element;\n    this.rear = (this.rear + 1) % this.size;\n    this.count++;\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return null;\n\n    const val = this.array[this.front];\n    this.array[this.front] = null;\n    this.front = (this.front + 1) % this.size;\n    this.count--;\n    return val;\n  }\n\n  expand() {\n    const newSize = this.size * 2;\n    const newArray = new Array(newSize).fill(null);\n\n    // copy elements in correct order\n    for (let i = 0; i < this.count; i++) {\n      newArray[i] = this.array[(this.front + i) % this.size];\n    }\n\n    this.array = newArray;\n    this.size = newSize;\n    this.front = 0;\n    this.rear = this.count;\n  }\n\n  peek() {\n    return this.isEmpty() ? null : this.array[this.front];\n  }\n}\n\n\n\n\n//# sourceURL=webpack://binary-search-trees/./src/binaryTree.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _binaryTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binaryTree.js */ \"./src/binaryTree.js\");\n\n\n\n\nlet array = []\nfor (let i = 0; i< 15; i++){\n    array.push(Math.floor(100*Math.random()))\n}\n\nconst myTree = new _binaryTree_js__WEBPACK_IMPORTED_MODULE_0__.Tree(array);\nconsole.log(\"created an tree of random nums < 100\")\nmyTree.prettyPrint(myTree.root)\nconsole.log(\"Is the tree balanced ? : \",myTree.isBalanced(myTree.root))\nconsole.log(\"Adding a couple of values > 100\")\nfor(let i = 0; i <5; i++){\n    myTree.insert(Math.floor(100* (1+ Math.random())))\n}\n\nmyTree.prettyPrint(myTree.root)\n\nconsole.log(\"Is tree balanced?: \", myTree.isBalanced(myTree.root))\n\nconsole.log(\"rebalancing tree\")\nmyTree.rebalance(myTree.root)\nmyTree.prettyPrint(myTree.root)\n\nconsole.log(\"Is tree balanced?: \", myTree.isBalanced(myTree.root))\n\n\nlet levelOrder = []\nlet preOrder = []\nlet inOrder = []\nlet postOrder = []\n\nmyTree.levelOrderForEach((root) =>{\n    levelOrder.push(root.data)\n})\n\nmyTree.preOrderForEach((root) =>{\n    preOrder.push(root.data)\n})\n\nmyTree.inOrderForEach((root) =>{\n    inOrder.push(root.data)\n})\n\nmyTree.postOrderForEach((root) =>{\n    postOrder.push(root.data)\n})\n\nconsole.log(\"printing elements in level order: \", levelOrder);\nconsole.log(\"printing elements in preOrder: \", preOrder);\nconsole.log(\"printing elements in inOrder: \", inOrder);\nconsole.log(\"printing elements in postOrder: \", postOrder);\n\n\n//# sourceURL=webpack://binary-search-trees/./src/index.js?\n}");

/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeSort: () => (/* binding */ mergeSort)\n/* harmony export */ });\nfunction mergeSort(array){\n    if(array.length <=1){\n        return array\n    }\n    const mid = (array.length /2)\n    const left = mergeSort(array.slice(0,mid))\n    const right = mergeSort(array.slice(mid))\n\n    return merge((left || []),(right || []))\n}\n\nfunction merge(leftArr,rightArr){\n    let array = []\n    while(leftArr.length >0 && rightArr.length >0){\n        if(leftArr[0] < rightArr[0]){\n            array.push(leftArr[0])\n            leftArr.splice(0,1)\n        }\n        else{\n            array.push(rightArr[0])\n            rightArr.splice(0,1)\n        }\n    }\n\n    while(leftArr.length > 0){\n        array.push(leftArr[0])\n        leftArr.splice(0,1)\n    }\n\n    while (rightArr.length > 0) {\n        array.push(rightArr[0])\n        rightArr.splice(0,1)\n    }\n    return array\n    \n}\n\n\n\n//# sourceURL=webpack://binary-search-trees/./src/mergeSort.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;