export const packages = [
    {
        id: 421312,
        imagen: 'https://images.unsplash.com/photo-1557683316-973673baf926',
        imagenAlt: 'Imagen de la Torre Eiffel',
        nombre: 'Mega Europa',
        precio: 1000,
        impuestos: [
            {
                fecha: '2024',
                impuesto: 200
            },
            {
                fecha: '2025',
                impuesto: 300
            }
        ],
        precioPromocional: 800,
        continente: 'Europa',
        aerolinea: 'Iberia',
        claseDelVuelo: 'Turista',
        dias: 7,
        noches: 6,
        paises: ['España', 'Francia', 'Italia'],
        ciudades: ['Madrid', 'Paris', 'Roma'],
        descripcion: 'Visita las ciudades más emblemáticas de Europa en un solo viaje',
        tarifas: {
            menor: 100,
            sencilla: 200,
            doble: 150,
            triple: 120,
            cuadruple: 100
        },
        proximasSalidas: [
            {
                fecha: '2022-03-01',
                suplemento: 1000
            },
            {
                fecha: '2022-04-01',
                suplemento: 1200
            }
        ],
        itinerario: [
            {
                dia: 1,
                encabezado: 'México - Madrid',
                descripcion: 'Llegada a Madrid y traslado al hotel'
            },
            {
                dia: 2,
                encabezado: 'Madrid',
                descripcion: 'Visita al Museo del Prado'
            },
            {
                dia: 3,
                encabezado: 'Paris',
                descripcion: 'Llegada a Paris y traslado al hotel',
                excursiones: [
                    {
                        nombre: 'Tour de la ciudad',
                        descripcion: 'Tour por los lugares más emblemáticos de la ciudad'
                    }
                ]
            },
            {
                dia: 4,
                ciudad: 'Paris',
                descripcion: 'Visita a la Torre Eiffel'
            },
            {
                dia: 5,
                ciudad: 'Roma',
                descripcion: 'Llegada a Roma y traslado al hotel'
            },
            {
                dia: 6,
                ciudad: 'Roma',
                descripcion: 'Visita al Coliseo'
            },
            {
                dia: 7,
                ciudad: 'Roma',
                descripcion: 'Traslado al aeropuerto'
            }
        ]
    },
    {
        id: 123142,
        nombre: 'Japón Express',
        precio: 1200,
        impuestos: 200,
        precioPromocional: 1000,
        continente: 'Asia',
        aerolinea: 'ANA',
        claseDelVuelo: 'Turista',
        dias: 7,
        noches: 6,
        paises: ['Japón'],
        ciudades: ['Tokio', 'Kioto', 'Osaka'],
        descripcion: 'Conoce la cultura japonesa en un viaje express',
        tarifas: {
            menor: 100,
            sencilla: 200,
            doble: 150,
            triple: 120,
            cuadruple: 100
        },
        proximasSalidas: [
            {
                fecha: '2022-03-01',
                suplemento: 1000
            },
            {
                fecha: '2022-04-01',
                suplemento: 1200
            }
        ],
        itinerario: [
            {
                dia: 1,
                encabezado: 'México - Tokio',
                descripcion: 'Llegada a Tokio y traslado al hotel'
            },
            {
                dia: 2,
                ciudad: 'Tokio',
                descripcion: 'Visita al Palacio Imperial'
            },
            {
                dia: 3,
                ciudad: 'Kioto',
                descripcion: 'Llegada a Kioto y traslado al hotel'
            },
            {
                dia: 4,
                ciudad: 'Kioto',
                descripcion: 'Visita al Templo Kinkaku-ji'
            },
            {
                dia: 5,
                ciudad: 'Osaka',
                descripcion: 'Llegada a Osaka y traslado al hotel'
            },
            {
                dia: 6,
                ciudad: 'Osaka',
                descripcion: 'Visita al Castillo de Osaka'
            },
            {
                dia: 7,
                ciudad: 'Osaka',
                descripcion: 'Traslado al aeropuerto'
            }
        ]
    }
]