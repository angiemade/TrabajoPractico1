import "./sideBar.css"


function Item({ nombre, vuelos }) {
    if (vuelos) {

        return <li >{nombre} 🗺</li>

    }
    return <li >{nombre}✘</li>
}


function SideBar() {
    return (
        <section>
            <h1 className="lista">Lista de Pilotos </h1>
            <ul className="nombres">
                <Item

                    vuelos={true}
                    nombre="Albornoz Kamila"
                />
                <Item
                    vuelos={true}
                    nombre="Alvarez Solana"
                />

                <Item
                    vuelos={false}
                    nombre="Cordoba Geronimo"
                />

                <Item
                    vuelos={true}
                    nombre="Maria de los Angeles Made"
                />

                <Item
                    vuelos={false}
                    nombre="Martin Mauricio"
                />

                <Item
                    vuelos={false}
                    nombre="Naiman Mauricio"
                />

                <Item
                    vuelos={false}
                    nombre="Colella Giulliano"
                />

                <Item
                    vuelos={false}
                    nombre="Cabrera Esteban"
                />

                <Item
                    vuelos={false}
                    nombre="Cristori Juan Marcos"
                />

            </ul>
        </section>
    )
}

export default SideBar;