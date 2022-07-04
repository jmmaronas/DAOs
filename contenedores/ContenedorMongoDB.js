class ContenedorMongoDB{
    constructor(schema){
        this.schema=schema
    }

    findAll() {
        return this.schema.getAll()
    }

    find(id) {
        return this.schema.findById(id)
    }

    create(data) {
        return this.schema.create(data)
    }

    update(id, data) {
        return this.schema.findByIdAndUpdate(id, data)
    }

    delete(id) {
        return this.schema.findByIdAndDelet(id)
    }
}

module.exports= ContenedorMongoDB