import { getTripByMT } from '@/app/lib/getTripByMT'
import { PageProps } from '@/.next/types/app/page'
import { redirect } from 'next/navigation'

export default async function ExperienciaPage({ params }: PageProps) {
    const { experiencia } = await params;
    const experience = await getTripByMT(experiencia);
    
    redirect(`/paquetes/${experience.fields.destino.fields.id}/${experience.fields.slug}`);
}
