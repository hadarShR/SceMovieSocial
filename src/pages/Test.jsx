import React, { useState } from 'react';
import PopUp from './components/PopUp';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className='closeBtn'
      onClick={() => setOpenModal(true)} 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

