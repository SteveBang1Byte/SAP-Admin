const Pagination = ({ pageNumber, setPageNumber, pageSize, totalItems }) => {

    const totalPages = Math.ceil(totalItems / pageSize);
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totalPages;

    const displayListPage = () => {
        return (
            <span className="text-sm text-gray-500">
                    Page <b>{pageNumber}</b> of <b>{totalPages}</b>
            </span>
        )
    }

    return (

        <nav className="flex items-center justify-center gap-x-1 my-4">
        <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" disabled = {isFirstPage}>
          <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-sm text-gray-500">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
            {
                displayListPage()
            }
        
        </div>
        <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" disabled={isLastPage}>
          <span className="text-sm text-gray-500">Next</span>
          <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        </nav>

    );
};

export default Pagination;