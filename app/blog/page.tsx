import { getBlogPosts } from "../lib/getBlogPosts";

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Nuestras Recomendaciones
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Descubre nuevos lugares y actividades para planear en tu siguiente viaje.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts?.map((post) => {
                        const {
                            titulo,
                            descripcion,
                            fecha,
                            portada,
                            slug,
                            etiquetas,
                        } = post.fields;

                        return (
                            <a href={`/blog/${slug}`}>
                                <article key={slug} className="flex flex-col items-start justify-between">
                                    <div className="relative w-full">
                                        <img
                                            alt=""
                                            src={portada.fields?.file?.url}
                                            className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="max-w-xl">
                                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                                            <time dateTime={fecha} className="text-gray-500">
                                                {fecha}
                                            </time>
                                            <span
                                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                            >
                                                {etiquetas.map((etiqueta) => etiqueta).join(', ')}
                                            </span>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                                <span className="absolute inset-0" />
                                                {titulo}
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{descripcion}</p>
                                        </div>
                                    </div>
                                </article>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
