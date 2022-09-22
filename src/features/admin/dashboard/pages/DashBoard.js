import { Button, FormControl, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { Box } from '@mui/system';
import BasicDatePicker from 'components/FormElement/DatetimePicker';
import BasicSelect from 'components/FormElement/SelectBox';
import React from 'react';
import { StyledTableCell, StyledTableCellRow } from '../styles/StyledDashboard';

function createData(name, calories, fat, carbs, protein, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10) {
    return { name, calories, fat, carbs, protein, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10 };
}

const rows = [
    createData('Frozen fds', 159, 6.0, 24, 4.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Ice cresssam sandwich', 237, 9.0, 37, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Eclair', 262, 16.0, 24, 6.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Cupcake', 305, 3.7, 67, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Gingerfbread', 356, 16.0, 49, 3.9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Frozen555 yoghurt', 159, 6.0, 24, 4.0, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4),
    createData('Eclair', 262, 16.0, 24, 6.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Cupcake', 305, 3.7, 67, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Eclair', 262, 16.0, 24, 6.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Cupcake', 305, 3.7, 67, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4),
    createData('Eclair', 262, 16.0, 24, 6.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Cupcake', 305, 3.7, 67, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Eclair', 262, 16.0, 24, 6.0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Cupcake', 305, 3.7, 67, 4.3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4),
];
const DashBoard = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box padding={3}>
            <Box alignItems="center">
                <BasicDatePicker lable="Từ ngày" />
                <BasicDatePicker lable="Đến ngày" />
                <FormControl sx={{ minWidth: 220 }}>
                    <BasicSelect
                        name="typeTransaccsion"
                        label="Phân loại giao dịch"

                        options={[
                            { label: 'Tất cả', value: '1' },
                            { label: 'Công ty thành viên', value: '2' },
                            { label: 'Tài xế', value: '3' },
                            { label: 'Lãi xuất ngân hàng', value: '4' },
                            { label: 'Phí ngân hàng', value: '5' },
                            { label: 'Khác', value: '6' },
                        ]}
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 220, flexGrow: 1 }}>
                    <BasicSelect
                        name="typeAccount"
                        label="Phân loại Tài khoản"

                        options={[
                            { label: 'Tất cả', value: '1' },
                            { label: 'Tài khoản nạp tiền chuyên dụng', value: '2' },
                            { label: 'Tài khoản rút tiền chuyên dụng', value: '3' },

                        ]}
                    />
                </FormControl>
                <Button variant="contained" color="success" size="medium" sx={{ mr: 1, ml: 1 }}>  Xuất Exel </Button>
                <Button variant="contained" size="medium">  Tra cứu </Button>
            </Box>
            <TableContainer component={Paper} sx={{ p: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" rowSpan={2}>Ngày giờ</StyledTableCell>
                            <StyledTableCell align="center" rowSpan={2}>Phân loại</StyledTableCell>
                            <StyledTableCell align="center" colSpan={2}>Trụ sở chính</StyledTableCell>
                            <StyledTableCell align="center" colSpan={2}>Đại lý</StyledTableCell>
                            <StyledTableCell align="center" colSpan={2}>Công ty thành viên</StyledTableCell>
                            <StyledTableCell align="center" rowSpan={2}>Phân loại tài khoản</StyledTableCell>
                            <StyledTableCell align="center" colSpan={2}>Tài khoản</StyledTableCell>
                            <StyledTableCell align="center" rowSpan={2}>Rút tiền</StyledTableCell>
                            <StyledTableCell align="center" rowSpan={2}>Nạp tiền</StyledTableCell>
                            <StyledTableCell align="center" rowSpan={2}>Ghi chú</StyledTableCell>
                            <StyledTableCell align="center" rowSpan={2}>Nội dung</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align="center">Mã</StyledTableCell>
                            <StyledTableCell align="center">Tên trụ sở chính</StyledTableCell>
                            <StyledTableCell align="center">Mã</StyledTableCell>
                            <StyledTableCell align="center">Đại lý</StyledTableCell>
                            <StyledTableCell align="center">Mã</StyledTableCell>
                            <StyledTableCell align="center">Công ty thành viên</StyledTableCell>
                            <StyledTableCell align="center">Số tài khoản</StyledTableCell>
                            <StyledTableCell align="center">Tên tài xế</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <TableRow
                                key={row.name}

                            >
                                <StyledTableCellRow component="th" scope="row">
                                    {row.name}
                                </StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.calories}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.fat}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.carbs}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.protein}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l1}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l2}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l3}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l4}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l5}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l6}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l7}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l8}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l9}</StyledTableCellRow>
                                <StyledTableCellRow align="center">{row.l10}</StyledTableCellRow>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'Tât cả', value: -1 }]}
                                colSpan={15}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'Số dòng trên trang',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    );

}

export default DashBoard;