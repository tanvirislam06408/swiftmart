import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


export default function ProductsPagination({
  currentPage,
  totalPage,
}: { currentPage: number; totalPage: number }) {
  return (

    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/explore?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`/explore?page=${page}`} isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPage && (
          <PaginationItem>
            <PaginationNext href={`/explore?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>

  );
}