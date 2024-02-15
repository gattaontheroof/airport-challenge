class Airplane {
    #id;

    constructor(id) {
        this.#id = id;
    }

    getId() {
        return this.#id;
    }
}
export default Airplane;