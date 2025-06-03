import Link from "next/link"
import { BreadcrumbList, WithContext } from "schema-dts"

interface Bradcrumb {
    name: string
    href: string
}

interface BreadcrumbProps {
    breadcrumbs: Bradcrumb[]
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbProps) => {
    const structuredData: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: breadcrumb.name,
            item: `https://www.aliworld.mx${breadcrumb.href}`,
        })),
    }
    
    return (
        <nav aria-label="Ruta de navegación" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="rounded-xl w-max max-w-full px-4 py-4 bg-gray-50 border border-gray-200 overflow-x-auto">
                <ol role="list" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm whitespace-normal break-words">
                    {breadcrumbs.map((breadcrumb, idx) => (
                        <li key={breadcrumb.href} className="list-none flex items-center min-w-0 max-w-xs" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            {idx > 0 && (
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    className="mx-2 size-4 shrink-0 text-sky-500"
                                >
                                    <path d="M7.05 4.05a.75.75 0 0 1 1.06 0l5.19 5.19a.75.75 0 0 1 0 1.06l-5.19 5.19a.75.75 0 1 1-1.06-1.06L11.19 10 7.05 5.86a.75.75 0 0 1 0-1.06z" />
                                </svg>
                            )}
                            {idx < breadcrumbs.length - 1 ? (
                                <Link
                                    href={breadcrumb.href}
                                    className="font-medium text-gray-500 hover:text-sky-700 focus:outline-none focus:underline focus:text-sky-700 transition-colors truncate block max-w-xs"
                                    itemProp="item"
                                >
                                    <span itemProp="name" className="truncate block max-w-xs whitespace-normal break-words">{breadcrumb.name}</span>
                                </Link>
                            ) : (
                                <span className="font-semibold text-gray-900 truncate block max-w-xs whitespace-normal break-words" aria-current="page" itemProp="name">
                                    {breadcrumb.name.length > 20 ? breadcrumb.name.slice(0, 20) + '…' : breadcrumb.name}
                                </span>
                            )}
                            <meta itemProp="position" content={(idx + 1).toString()} />
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    )
}