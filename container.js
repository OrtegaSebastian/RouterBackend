
// Class container
    
class Contenedor {
    
    constructor(path) {
    
    this.nameFile = path;
    
    this.producto = [];
    
    }
    
// Metodo Save(Object)
    
    async save(objeto) {
    
        const contenido = fs.readFileSync(this.archivo, "utf-8");
        const productos = JSON.parse(contenido);
        const id = productos.length + 1;
        const producto = { id, ...objeto };
        productos.push(producto);
        fs.writeFileSync(this.archivo, JSON.stringify(productos, null, 2));
        return id;
    
    }
    // Metodo getById(Number)
    
    async getById(id ) {
        const data = fs.readFileSync(this.archivo, "utf-8");
        const dataParseada = JSON.parse(data);
        const objeto = dataParseada.find((objeto) => objeto.id === id);
        return objeto;
    }
    
    // Metodo getAll(Number)
    
    async getAll() {
        const data = fs.readFileSync(this.archivo, "utf-8");
        const dataParseada = JSON.parse(data);
        return dataParseada;
    }
    
    // Metodo deleteById(Number)
    
    async deleteById(id) {

        const data = fs.readFileSync(this.archivo, "utf-8");
        const dataParseada = JSON.parse(data);
        const dataFiltrada = dataParseada.filter((objeto) => objeto.id !== id);
        const dataString = JSON.stringify(dataFiltrada);
        fs.writeFileSync(this.archivo, dataString);
        return dataFiltrada;
        }
    
    // Metodo deleteAll(Number)
    
    async deleteAll() {
      fs.writeFileSync(this.archivo, "[]");
      return "[]";
    }
    
    // Metodo updateById(id, prodcut)

async updateById(id, objetoNuevo) {
    const data = fs.readFileSync(this.archivo, "utf-8");
    let dataParseada = JSON.parse(data);
    let productoViejo = dataParseada.find((objeto) => objeto.id === id);
    let mensaje = "Se reemplazo el producto";
    if (productoViejo === undefined) {
    throw { msg: "404 Not found" };
    }
    let productosFiltrados = dataParseada.filter((objeto) => objeto.id !== id);
    productoViejo = { id, ...objetoNuevo };
    productosFiltrados.push(productoViejo);
    fs.writeFileSync(this.archivo, JSON.stringify(productosFiltrados, null, 2));
    return mensaje;
    }

}

module.exports = Contenedor;