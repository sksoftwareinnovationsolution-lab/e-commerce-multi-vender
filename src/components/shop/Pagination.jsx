import "../shop/Pagination.css";

const PER_PAGE_OPTIONS = [16, 24, 32, 48];

function buildPageItems(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, "...", total];
  }
  if (current >= total - 3) {
    return [1, "...", total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

function Pagination({
  currentPage = 1,
  totalPages = 1,
  perPage = 16,
  onPageChange = () => {},
  onPerPageChange = () => {},
}) {
  const pageItems = buildPageItems(currentPage, totalPages);

  const handlePerPageChange = (e) => {
    onPerPageChange(Number(e.target.value));
  };

  return (
    <div className="pagination-wrap">
      <nav className="pagination" aria-label="Pagination">
        <button
          className="pagination__btn pagination__btn--prev"
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <span className="pagination__chevron">&lt;</span>
          <span className="pagination__label">Previous</span>
        </button>
        {pageItems.map((p, i) =>
          p === "..." ? (
            <span key={`ellipsis-${i}`} className="pagination__ellipsis">
              ...
            </span>
          ) : (
            <button
              key={p}
              className={`pagination__btn ${
                p === currentPage ? "pagination__btn--active" : ""
              }`}
              type="button"
              onClick={() => onPageChange(p)}
              aria-label={`Page ${p}`}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          )
        )}
        <button
          className="pagination__btn pagination__btn--next"
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <span className="pagination__label">Next</span>
          <span className="pagination__chevron">&gt;</span>
        </button>
      </nav>
      <div className="pagination__per-page">
        <span className="pagination__per-page-label">Show:</span>
        <select
          className="pagination__per-page-select"
          value={perPage}
          onChange={handlePerPageChange}
          aria-label="Products per page"
        >
          {PER_PAGE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pagination__per-page-text">per page</span>
      </div>
    </div>
  );
}

export default Pagination;
