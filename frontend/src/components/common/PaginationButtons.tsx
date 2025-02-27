'use client'

import { useRouter, useSearchParams } from "next/navigation";

interface IPagination {
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function PaginationButtons({
    currentPage,
    hasNextPage,
    hasPrevPage,
  }: IPagination){
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleNextPage(page: number){
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        router.push(`${window.location.pathname}?${params.toString()}`);
    }

    return(
        <div className="flex gap-4 mt-4 justify-center">
            <button
                disabled={!hasPrevPage}
                onClick={() => handleNextPage(currentPage - 1)}
                className="paginationButton"
            >
                {`<`}
            </button>
            <span className="font-bold">Página {currentPage}</span>
            <button
                disabled={!hasNextPage}
                onClick={() => handleNextPage(currentPage + 1)}
                className="paginationButton"
            >
                {`>`}
            </button>
        </div>
    );
}