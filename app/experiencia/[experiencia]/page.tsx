import { getTrip } from '@/app/lib/getTrip'
import { PageProps } from '@/.next/types/app/page'
import { redirect } from 'next/navigation'

export default async function ExperienciaPage({ params }: PageProps) {
    const { experiencia } = await params;
    const experience = await getTrip(experiencia);
    
    redirect(`/paquetes/${experience.fields.destino.fields.id}/${experience.fields.slug}`);
}
