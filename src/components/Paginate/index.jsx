import TablePagination from "@mui/material/TablePagination";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginateTask } from "../../redux/actions/action";

function getTotalPageCount(todoListLength) {
  const mod = todoListLength % 10;
  var mul = todoListLength - mod + 10;
  return mul;
}

const Paginate = () => {
  const { todoListCount } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  const paginationCount = getTotalPageCount(todoListCount);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(paginateTask(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="pagination-container">
      {todoListCount > 0 && (
        <TablePagination
          component="div"
          count={paginationCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

export default Paginate;
