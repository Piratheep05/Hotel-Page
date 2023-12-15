import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, Paper, IconButton } from '@mui/material';

function createData(room, Adults, children) {
  return { room, Adults, children };
}

const data = [
  createData('Room1', 0, 0 ),
 
];

const BasicTable =()=> {
  const handleIncrementChild = (row) => {
    if (row.children < 5) {
      row.children += 1;
      // Force re-render by creating a new array of rows
      setRows([...rows]);
    }
  };
  const handleIncrementAdult = (row) => {
    if (row.Adults < 5) {
      row.Adults += 1;
      // Force re-render by creating a new array of rows
      setRows([...rows]);
    }
  };

  const handleDecrementChild = (row) => {
    if (row.children > 0) {
      row.children -= 1;
      // Force re-render by creating a new array of rows
      setRows([...rows]);
    }
  };
  const handleDecrementAdult = (row) => {
    if (row.Adults > 0) {
      row.Adults -= 1;
      // Force re-render by creating a new array of rows
      setRows([...rows]);
    }
  };

  const handleAddRow = () => {
    if(rows.length < 5){
      const newRow = createData(`Room ${rows.length + 1}`, 0, 0, <CancelIcon onClick={() => handleRemoveRow(rows.length)} />);
      setRows([...rows, newRow]);
    }
   
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };

  const [rows, setRows] = useState(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center'>Adults</TableCell>
            <TableCell align='right'>Children(under 12)</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row,index) => (
            <TableRow
            key={index}
              sx={{
                '&:not(:first-child) td, &:not(:first-child) th': { border: 0 }, // Remove border for all rows except the first row
              }}
            >
              <TableCell component='th' scope='row'>
                {row.room}
              </TableCell>
              <TableCell align='center'>
                <Box sx={{ border: '1px solid #bdbdbd',width:100 }}>
                  <IconButton
                    variant='contained'
                    onClick={() => handleDecrementAdult(row)}
                  >
                    -
                  </IconButton>
                  {row.Adults}
                  <IconButton
                    variant='contained'
                    onClick={() => handleIncrementAdult(row)}
                  >
                    +
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Box sx={{ border: '1px solid #bdbdbd' }}>
                  <IconButton
                    variant='contained'
                    onClick={() => handleDecrementChild(row)}
                  >
                    -
                  </IconButton>
                  {row.children}
                  <IconButton
                    variant='contained'
                    onClick={() => handleIncrementChild(row)}
                  >
                    +
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell align='right' sx={{ color: '#876a20' }}>
              <CancelIcon onClick={() => handleRemoveRow(0)}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{ textAlign: 'center', border: '1px solid #876a20' }}
      >
         <Button sx={{ color: '#876a20' ,width: '100%'}} onClick={handleAddRow}>+ Add Room</Button>
      </Box>
    </TableContainer>
  );
}

export default BasicTable;
