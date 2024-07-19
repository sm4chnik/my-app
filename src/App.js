import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement } from './store';
import { AnimatePresence, motion } from 'framer-motion';

import styled from 'styled-components';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const Element = styled(motion.div)`
  width: 20%;
  height: 100px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;

const App = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.elements);

  const handleAdd = () => {
    const newElement = { id: Date.now(), color: generateRandomColor() };
    dispatch(addElement(newElement));
  };

  const handleRemove = () => {
    dispatch(removeElement());
  };

  return (
    <div>
      <Button onClick={handleAdd}>Добавить</Button>
      <Button onClick={handleRemove}>Удалить</Button>
      <List>
        <AnimatePresence>
          {elements.map((element) => (
            <Element
              key={element.id}
              color={element.color}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </AnimatePresence>
      </List>
    </div>
  );
};

export default App;
