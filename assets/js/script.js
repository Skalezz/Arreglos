const pathname = window.location.pathname;

function cardGenerator(
    img,
    title,
    description,
    location,
    bedrooms,
    price,
    allowSmoke,
    allowPets
) {

    return ` <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="/assets/img/${img}" alt="imagen de la propiedad">
                    <div class="card-body">
                        <h1>${title}</h1>
                        <p>${description}</p>
                        <p>${location}</p>
                        <p>${bedrooms}</p>
                        <p>$ ${price}</p>
                        <div>
                            ${allowSmoke ? '<p class="text-success"></i> Permitido fumar</p>' : '<p class="text-danger"></i> No se permite fumar</p>'}   
                        </div>
                            ${allowPets ? '<p class="text-success"></i> Mascotas permitidas</p>' : '<p class="text-danger"></i> No se permiten mascotas</p>'}
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>`;
}
                   
if (pathname === '/index.html') {

    // container
    const ventas_container = document.querySelector('#propiedades_venta');
    const alquiler_container = document.querySelector('#propiedades_alquiler');


    // ventas
    const ventas = propiedades_venta.splice(4, 3);

    ventas.forEach(({ nombre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets }) => ventas_container.innerHTML += cardGenerator(src, nombre, descripcion, ubicacion, habitaciones, costo, smoke, pets))


    // alquiler

    const alquiler = propiedades_alquiler.splice(0, 3);

    alquiler.forEach(({ nombre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets }) => alquiler_container.innerHTML += cardGenerator(src, nombre, descripcion, ubicacion, habitaciones, costo, smoke, pets))

} else if (pathname === '/propiedades_venta.html') {
    // container
    const ventas_container = document.querySelector('#propiedades_venta');

    propiedades_venta.forEach(({ nombre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets }) => ventas_container.innerHTML += cardGenerator(src, nombre, descripcion, ubicacion, habitaciones, costo, smoke, pets))

    // console.log('Productos Venta:', propiedades_alquiler);

} else if (pathname === '/propiedades_alquiler.html') {

    const alquiler_container = document.querySelector('#propiedades_alquiler');

    propiedades_alquiler.forEach(({ nombre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets }) => alquiler_container.innerHTML += cardGenerator(src, nombre, descripcion, ubicacion, habitaciones, costo, smoke, pets))

}
