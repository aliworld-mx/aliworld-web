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
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="rounded-xl w-max bg-white ring-1 ring-black/10 shadow-lg px-4 py-4">
                <ol role="list" className="flex space-x-2">
                    {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                        <li key={breadcrumb.href} className="list-none">
                            <div className="flex items-center text-sm">
                                <Link href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                                    {breadcrumb.name}
                                </Link>
                                {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        className="ml-2 size-5 shrink-0 text-sky-500"
                                    >
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    )
}