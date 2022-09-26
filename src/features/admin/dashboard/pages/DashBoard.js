import React from 'react';
import DashBoardFilter from '../components/DashBoardFilter';
import DashBoardList from '../components/DashBoardList';
import { Box } from '@mui/system';

import managerApi from 'api/mangerAPI';
import FileSaver from 'file-saver';

const DashBoard = () => {

    const [loading, setLoading] = React.useState(false);
    const [list, setList] = React.useState({
        data: [],
        pagination: {
            total: 0,
            current_page: 1
        },
    });

    const [filter, setFilter] = React.useState({
        per_page: 5,
        page: 1,
    });
    const handleFilter = async (data) => {
        setFilter({
            ...filter,
            ...data,
        });
    };

    const handleExportExel = (data) => {
        (async () => {
            setLoading(true);
            const res = await managerApi.getExportExel(data);
            if (res.status) {
                FileSaver.saveAs(res.data, 'text.xlsx');
            }
            setLoading(false);
        })();
    }

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await managerApi.getAll(filter);
            //console.log(res.data);
            if (res.status) {
                setList(res.data.data);
            }
            setLoading(false);
        })();
    }, [filter]);

    return (
        <Box padding={3}>
            <DashBoardFilter loading={loading} filter={filter} onSubmit={handleFilter} onExport={handleExportExel} />
            <DashBoardList list={list.data}
                pagination={list.pagination}
                loading={loading}
                filter={filter}
                onFilter={handleFilter}
            />
        </Box>
    );

}

export default DashBoard;