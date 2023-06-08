import React from 'react'
import scss from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';


function Pagination({ onChangePage }:any) {
    return (
        <div>
            <ReactPaginate
                className={scss.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={5}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />

        </div>
    )
}

export default Pagination
