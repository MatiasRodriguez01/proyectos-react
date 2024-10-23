import { useContext } from "react";
import { CardProducto } from "../components/CardProducto";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/card.css"

export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    return (
        <>
            <h1>Compras:</h1>
            <hr />
            {
                productos.map(p => (
                    <CardProducto
                        key={p.id}
                        imagen={p.image}
                        titulo={p.title}
                        descripcion={p.description}
                        precio={p.price}
                        handleAgregar={() => handleAgregar(p)}
                        handleQuitar={() => handleQuitar(p.id)}
                    ></CardProducto>
                ))
            }

        </>
    )
}
