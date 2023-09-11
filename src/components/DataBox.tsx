// DataBox.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DataItem {
  title: string;
  description: string;
}

interface DataBoxProps {
  data: DataItem;
}

const DataBox: React.FC<DataBoxProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '300px',
        border: '1px solid #ccc',
        padding: '8px',
        margin: '8px 0',
        color:'white'
      }}
    >
      <Typography variant="h6"><p>Titulo</p><p>{data.title}</p><Typography variant="body1"><p>Descrição</p><p>{data.description}</p></Typography></Typography>
      
    </Box>
  );
};

export default DataBox;
