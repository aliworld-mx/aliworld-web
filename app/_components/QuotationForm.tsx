'use client'

import { useMemo, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { TypeSalida } from '../_types/contentful/Salida'
import { toDate } from '../_utils/toDate'


interface QuotationFormProps {
    packageId: number
    departures: TypeSalida[];
}

export const QuotationForm = ({ packageId, departures }: QuotationFormProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [habitaciones, setHabitaciones] = useState([{ adultos: 2, menores: 0 }])
    const salidas = useMemo(() => departures?.map((salida) => ({
        id: salida.fields.id,
        title: toDate(salida.fields.fecha),
    })), [departures]);

    const [formData, setFormData] = useState({
        correo: '',
        nombre: '',
        apellido: '',
        telefono: '',
        salida: salidas?.[0]?.id ?? '',
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
            subject: `Solicitud de Cotización - ${packageId} - ${formData.nombre} ${formData.apellido}`,
            html: `
            Correo: ${formData.correo}<br>
            Teléfono: ${formData.telefono}<br>
            Nombre: ${formData.nombre}<br>
            Apellido: ${formData.apellido}<br>
            Salida: ${salidas?.find((s) => s.id === formData.salida)?.title}<br>
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
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Cotizar
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-12 text-center">
                        <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle className="text-2xl font-semibold text-gray-900">Formulario de Reserva</DialogTitle>
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
                                        {/* Correo */}
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
                                        {/* Nombre */}
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>

                                        {/* Apellido */}
                                        <div>
                                            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                                            <input
                                                type="text"
                                                id="apellido"
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>

                                        {/* Salida */}
                                        <div>
                                            <label htmlFor="salida" className="block text-sm font-medium text-gray-700">Salida</label>
                                            <select
                                                id="salida"
                                                name="salida"
                                                value={formData.salida}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
                                            >
                                                {salidas?.map((salida) => (
                                                    <option key={salida.id} value={salida.id} className='text-gray-700'>
                                                        {salida.title}
                                                    </option>
                                                ))}
                                            </select>
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
