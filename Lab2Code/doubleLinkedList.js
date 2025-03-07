class DoubleNode {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
};
class DoubleLinkedList {
    #size;
    #head;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }
    getSize() {
        return this.#size;
    };
    isEmpty() {
        return this.#size === 0;
    };
    addNode(value) {
        if (this.isEmpty() === true) {
            this.#head = new DoubleNode(value);
        }
        else {
            let curr = this.#head;
            while (curr.next !== null)
                curr = curr.next;

            curr.next = new DoubleNode(value);
            curr.next.prev = curr;
        }
        this.#size++;
    };
    removeNode(index) {
        if (index >= this.#size && index < 0) {
            console.log("Index out of range!")
            return;
        }
        if (index === 0) {
            this.#head = this.#head.next;
            if (this.#head != null)
                this.#head.prev = null;
        }
        else {

            let indexCounter = 0;
            let curr = this.#head;

            while (indexCounter + 1 !== index) {
                curr = curr.next;
                indexCounter++;
            }
            curr.next = curr.next.next;
            if (curr.next !== null)
                curr.next.prev = curr;
        }
        this.#size--;
    };
    draw() {
        if (this.isEmpty() === true) {
            console.log("Empty list, nothing draw...");
            return;
        }
        let output = "";
        for (let curr = this.#head; curr !== null; curr = curr.next)
            output += `${curr.value} <--> `;
        output += `null`;
        console.log(output);
    };
    twoIndexes(pX, pY) {
        if (pX < 0 || pY < 0 || pX >= this.#size || pY >= this.#size) {
            console.log("Invalid indexes!");
            return;
        }

        if (pX < pY) {
            let tempDoubleLinkedList = new DoubleLinkedList();
            let index = 0;
            let curr = this.#head;

            while (index != pY) {

                if (index > pX) {
                    tempDoubleLinkedList.addNode(curr.value);
                }
                curr = curr.next;
                index++;
            }

            let secondIndex = tempDoubleLinkedList.#size === 0 ? null : tempDoubleLinkedList.#head;
            return {
                firstIndex: this.#head,
                secondIndex: secondIndex,
                list: tempDoubleLinkedList
            };
        }
        else
            console.log("PX index must be smaller than PY");
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
    clear() {
        this.#head = null;
        this.#size = 0;
    };
};
function Main() {
    let doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.addNode(10);
    doubleLinkedList.addNode(20);
    doubleLinkedList.addNode(30);
    doubleLinkedList.addNode(40);
    doubleLinkedList.addNode(50);
    doubleLinkedList.addNode(60);
    doubleLinkedList.addNode(70);
    doubleLinkedList.addNode(80);

    let gg = doubleLinkedList.twoIndexes(0, doubleLinkedList.getSize() - 1);
    console.log(gg.firstIndex);
    console.log(gg.secondIndex);

    console.log("COPY:")
    gg.list.draw();

    console.log("--------------------------");

    console.log("ORIGINAL:")
    doubleLinkedList.draw();
}
Main();