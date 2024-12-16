'use client';
import { ArrowLeftIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    const onBack = () => {
        router.push('/blog');
    }

    return (
        <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver
        </button>
    )
}

export default BackButton;