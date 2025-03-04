class Queue {
    #array;
    #P1;
    #P2;
    #Count;
    constructor() {
        this.#array = [];
        this.#P1 = 0;
        this.#P2 = 0;
        this.#Count = 0;
    };
    count() {
        return this.#Count;
    };
    isEmpty() {
        return this.#Count === 0;
    };
    enqueue(item) {
        this.#Count++;
        this.#P2 = this.#Count - 1;
        this.#array[this.#P2] = item; 
    };
    dequeue() {
        if (this.isEmpty() === false) {
            let item = this.#array.shift();
            this.#Count--;
            this.#P2--;
            return item;
        }
        else {
            console.log("Queue is empty! Cannot dequeue the element!");
        }
    };
    peek() {
        if (this.isEmpty() === false)
            return this.#array[this.#P1];
        else
            console.log("Queue is empty! Cannot peek the element!");
    };
    removeElements(N) {
        if (N <= 0)
            return; // якщо хочем видалити від'ємну або нульову кількість елементів то виходимо з методу
        else {
            if (N <= this.#P2 + 1) {
                for (let counter = 0; counter < N; counter++) { // N ВИСТУПАЄ ІНДЕКСОМ ДО ЯКОГО ТРЕБА ВИДАЛЯТИ!
                    this.dequeue();
                }
            }
            else this.clear(); // якщо N більше за розмір черги тоді очищаємо всю чергу
        }
    };
    clear() {
        let count = this.#Count;
        let counter = 0;
        while (counter < count) {
            this.dequeue();
            counter++;
        }
    };
    draw() {
        console.log("------------------------------")
        if (this.isEmpty() === false) {
            this.#array.forEach(elem => {
                console.log(elem);
            });
        }
        else
            console.log("Empty queue...")
        console.log("------------------------------")
    };
};
function Main() {
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(2);
    queue.enqueue(5);
    queue.enqueue(10);

    queue.clear();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.dequeue();
    queue.dequeue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.removeElements(3);
    queue.draw();
};

Main();