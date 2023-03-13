async function traerPais()
{
    const respuesta = await fetch("https://api.nationalize.io/?name=jonas");

    if(!respuesta.ok)
    {
        let oops = "404 not found";
        alert(oops);
        throw new Error(oops);
    }

    const data = respuesta.json();

    return data;
}

function mostrarNombre(n)
{
    document.getElementById("nombre").innerHTML = n.country[0].country_id;

}

traerPais().then(mostrarNombre);
