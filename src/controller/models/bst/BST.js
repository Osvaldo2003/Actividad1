import Node from "./Node.js";

class BST {
    #root;
    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            return true;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.lastName < node.value.lastName) {
            if (node.left == null) {
                node.left = new Node(value);
                return true;
            } else {
                return this.insertNode(node.left, value);
            }
        } else if (value.lastName > node.value.lastName) {
            if (node.right == null) {
                node.right = new Node(value);
                return true;
            } else {
                return this.insertNode(node.right, value);
            }
        } else {
            return false; // El contacto ya existe
        }
    }

    search(lastName) {
        return this.searchNode(this.#root, lastName);
    }

    searchNode(node, lastName) {
        if (node == null) {
            return [];
        }
        if (lastName < node.value.lastName) {
            return this.searchNode(node.left, lastName);
        } else if (lastName > node.value.lastName) {
            return this.searchNode(node.right, lastName);
        } else {
            // Encontrado el nodo
            return [node.value];
        }
    }
}

export default BST