'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const HotelQuotationForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [habitaciones, setHabitaciones] = useState([{ adultos: 2, menores: 0 }])

    const [formData, setFormData] = useState({
        correo: '',
        telefono: '',
        fechaSalida: '',
        noches: '',
        destino: '',
        descripcion: '',
        presupuesto: '',
    })


    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleAddHabitacion = () => {
        setHabitaciones([...habitaciones, { adultos: 2, menores: 0 }])
    }

    const handleRemoveHabitacion = (index: number) => {
        setHabitaciones(habitaciones.filter((_, i) => i !== index))
    }


    const handleSubmit = async (e: any) => {
        setIsSending(true)
        e.preventDefault()

        const emailData = {
            to: 'contacto@aliworld.mx',
            subject: `Solicitud de Cotización Hotel - ${formData.destino}`,
            html: `
            Correo: ${formData.correo}<br>
            Teléfono: ${formData.telefono}<br>
            Fecha de Salida: ${formData.fechaSalida}<br>
            Noches: ${formData.noches}<br>
            Destino: ${formData.destino}<br>
            Presupuesto total: ${formData.presupuesto}<br>
            Descripción: ${formData.descripcion}<br>
            Habitaciones:<br> ${habitaciones.map((h, i) => `Habitación ${i + 1}: ${h.adultos} adultos, ${h.menores} menores`).join('<br>')}
            `,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                setIsSent(true)
            } else {
                alert('Hubo un error al enviar el correo');
            }

        } catch (error: any) {
            alert('Error al enviar el correo');
            console.warn(error);
        }
        finally {
            setIsSending(false)
        }
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="flex mt-6 mx-auto items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Cotizar
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-12 text-center">
                        <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle className="text-2xl font-semibold text-gray-900">Formulario de Cotización</DialogTitle>
                            {isSent ? (
                                <div className='my-8'>
                                    <p>Su solicitud se ha enviado correctamente. Nuestros ejecutivos le enviarán su cotización lo antes posible vía WhatsApp y correo proporcionados.</p>
                                    <button onClick={() => setIsOpen(false)} className="mt-4 ml-auto block px-4 py-2 bg-sky-600 text-white rounded-md">Cerrar</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="mt-4">
                                    <div className="space-y-6">
                                        {/* Correo */}
                                        <div>
                                            <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                                            <input
                                                type="email"
                                                id="correo"
                                                name="correo"
                                                value={formData.correo}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                        {/* Telefono */}
                                        <div>
                                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                                            <input
                                                type="text"
                                                id="telefono"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                        {/* Fecha de Salida */}
                                        <div>
                                            <label htmlFor="fechaSalida" className="block text-sm font-medium text-gray-700">Fecha de Salida</label>
                                            <input
                                                type="date"
                                                id="fechaSalida"
                                                name="fechaSalida"
                                                value={formData.fechaSalida}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                        {/* Noches */}
                                        <div>
                                            <label htmlFor="noches" className="block text-sm font-medium text-gray-700">Noches</label>
                                            <input
                                                type="number"
                                                id="noches"
                                                name="noches"
                                                value={formData.noches}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                        {/* Destino */}
                                        <div>
                                            <label htmlFor="destino" className="block text-sm font-medium text-gray-700">Destino (Ciudad o Municipio)</label>
                                            <input
                                                type="text"
                                                id="destino"
                                                name="destino"
                                                value={formData.destino}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                        {/* Presupuesto */}
                                        <div>
                                            <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700">Presupuesto (Total en Pesos Mexicanos)</label>
                                            <input
                                                type="number"
                                                id="presupuesto"
                                                name="presupuesto"
                                                value={formData.presupuesto}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                        {/* Descripcion */}
                                        <div>
                                            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Platicanos un poco de tu idea de viaje</label>
                                            <textarea
                                                id="descripcion"
                                                name="descripcion"
                                                rows={4}
                                                value={formData.descripcion}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>

                                        {/* Habitaciones */}
                                        <div>
                                            <label className="block text-sm font-lg font-bold text-gray-700">Habitaciones</label>
                                            {habitaciones.map((habitacion, index) => (
                                                <div key={index} className="mt-4 space-y-4">
                                                    <div className="flex space-x-4">
                                                        <div className="w-1/2">
                                                            <label className="block text-sm font-medium text-gray-700">Adultos</label>
                                                            <input
                                                                type="number"
                                                                value={habitacion.adultos}
                                                                onChange={(e) =>
                                                                    setHabitaciones(
                                                                        habitaciones.map((h, i) =>
                                                                            i === index ? { ...h, adultos: Number(e.target.value) } : h
                                                                        )
                                                                    )
                                                                }
                                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="w-1/2">
                                                            <label className="block text-sm font-medium text-gray-700">Menores</label>
                                                            <input
                                                                type="number"
                                                                value={habitacion.menores}
                                                                onChange={(e) =>
                                                                    setHabitaciones(
                                                                        habitaciones.map((h, i) =>
                                                                            i === index ? { ...h, menores: Number(e.target.value) } : h
                                                                        )
                                                                    )
                                                                }
                                                                className="mt-2 block w-full rounded-md text-gray-700 border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                                required
                                                            />
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveHabitacion(index)}
                                                        >
                                                            <XMarkIcon className="text-red-600 hover:text-red-800 w-6" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={handleAddHabitacion}
                                                className="text-sky-600 hover:text-sky-800 mt-2"
                                            >
                                                Agregar otra habitación
                                            </button>
                                        </div>

                                        {/* Botones */}
                                        <div className="mt-6 flex justify-end space-x-4">
                                            <button
                                                type="button"
                                                onClick={() => setIsOpen(false)}
                                                className="px-4 py-2 bg-white rounded-md text-gray-700"
                                                disabled={isSending}
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-4 py-2 bg-sky-600 text-white rounded-md"
                                                disabled={isSending}
                                            >
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
