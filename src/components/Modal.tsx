// BasicModal.tsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DataBox from './DataBox'; // Importe o componente DataBox

interface DataItem {
  title: string;
  description: string;
}

const styleButton = {
  backgroundColor: 'blue',
  color: 'white',
  height: '60px',
  width: '100px',
};

const styleBox= {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'gray',
    border: '2px solid gray',
    boxShadow: 24,
    p: 4,
    color: 'black'
  };


const BasicModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataItem[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setData([...data, { title, description }]);
    setTitle('');
    setDescription('');
    handleClose();
  };

  return (
    <div>
      <Button style={styleButton} onClick={handleOpen}>
        Criar
      </Button>
      {data.map((item, index) => (
        <DataBox key={index} data={item} />
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleBox}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição"
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
              Salvar
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
