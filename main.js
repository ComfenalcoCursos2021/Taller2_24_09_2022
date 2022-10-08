addEventListener("DOMContentLoaded", (e) => {
    const listaHelados = [
        { nombre: "Bonice", precio: 400 },
        { nombre: "Palito de helado de agua", precio: 1000 },
        { nombre: "Palito de helado de crema", precio: 2200 },
        { nombre: "Bombón helado con arequipe", precio: 1500 },
        { nombre: "Bombón helado con chispas de chocolate", precio: 2500 },
        { nombre: "Bombón helado con fresas", precio: 2800 },
        { nombre: "Medio litro de helado", precio: 2000 },
    ];
    addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let helados = listaHelados.filter(helado => {
            if(data.dinero >= helado.precio){
                return helado;
            }
        })
        document.querySelector("#data").innerHTML = "";
        helados.forEach((value, indice) => {
            document.querySelector("#data").insertAdjacentHTML("beforeend", `
                <p><b>${indice}.</b> <ins>${value.nombre}</ins> <em>$${value.precio}</em> <button data-inventario="${indice}" data-compra='${JSON.stringify(value)}'>✓</button></p>
            `);
        })
    })
    addEventListener("click", (e)=>{
        if(e.target.nodeName == "BUTTON"){
            console.dir(e.target.dataset);
        }
    })
})