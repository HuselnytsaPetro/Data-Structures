class SingleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class SingleLinkedList {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }
    addNode(value) {
        if (this.isEmpty() === true)
            this.#head = new SingleNode(value);
        else {
            let curr = this.#head;
            while (curr.next !== null)
                curr = curr.next;
            curr.next = new SingleNode(value);
        }
        this.#size++;
    };
    removeNode(index) {
        if (index >= 0 && index < this.#size) {
            if (index === 0) {
                this.#head = this.#head.next;
            }
            else {
                let indexCounter = 0;
                let curr = this.#head;

                while (indexCounter + 1 !== index) {
                    curr = curr.next;
                    indexCounter++;
                }
                curr.next = curr.next.next;
            }
            this.#size--;
        }
        else
            console.log("Index out of range!");
    };
    draw() {
        if (this.isEmpty() === true) {
            console.log("Empty list, nothing draw...");
            return;
        }
        let output = "";
        for (let curr = this.#head; curr !== null; curr = curr.next)
            output += `${curr.value} --> `;
        output += `null`;
        console.log(output);
    };
    isEmpty() {
        return this.#size === 0;
    };
    getSize() {
        return this.#size;
    };
    calculateMax() {
        let maxValue = -9999999999999;
        let curr = this.#head;

        while (curr != null) {
            if (curr.value > maxValue)
                maxValue = curr.value;
            curr = curr.next;
        }

        return maxValue;
    };
    clear() {
        this.#head = null;
        this.#size = 0;
    };
    pasteMaxValues() {
        let maxValue = this.calculateMax();
        let curr = this.#head;
        while (curr != null) {
            if (curr.value === 1) {
                if (curr.next !== null && curr.next.value == maxValue) {
                    curr = curr.next;
                }
                else {
                    let newBigNode = new SingleNode(maxValue);
                    newBigNode.next = curr.next;
                    curr.next = newBigNode;
                    curr = newBigNode.next;
                    this.#size++;
                }

            }
            else {
                curr = curr.next;
            }
        }
    };
    find(index) {
        if (index < 0 || index >= this.#size) {
            console.log("Index out of range!");
            return;
        }
        let indexCounter = 0;
        let current = this.#head;
        while (indexCounter != index) {
            current = current.next;
            indexCounter++;
        }
        return current.value;
    };
};

function Main() {
    let singleLinkedList = new SingleLinkedList();
    singleLinkedList.addNode(431);
    singleLinkedList.addNode(1);
    singleLinkedList.addNode(432);
    singleLinkedList.addNode(1);
    singleLinkedList.addNode(500);
    singleLinkedList.addNode(600);
    singleLinkedList.addNode(1);

    singleLinkedList.pasteMaxValues();

    singleLinkedList.draw();
    console.log(singleLinkedList.getSize());
    console.log(singleLinkedList.isEmpty())
};
Main();