import "../shop/Pagination.css";

const pages = [1, 2, 3, 4, 5, "...", 20];

function Pagination() {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="pagination__btn" type="button" disabled aria-label="Previous page">
        &lt;
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="pagination__ellipsis">
            ...
          </span>
        ) : (
          <button
            key={p}
            className={`pagination__btn ${
              p === 1 ? "pagination__btn--active" : ""
            }`}
            type="button"
            aria-label={`Page ${p}`}
            aria-current={p === 1 ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}
      <button className="pagination__btn" type="button" aria-label="Next page">
        &gt;
      </button>
    </nav>
  );
}

export default Pagination;
