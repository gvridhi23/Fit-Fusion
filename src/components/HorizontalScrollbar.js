import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const arrowStyle = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px'
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} style={arrowStyle}>
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '100%', height: 'auto' }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} style={arrowStyle}>
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: '100%', height: 'auto' }} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {Array.isArray(data) && data.length > 0 ? (
      data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ display: 'inline-block' }} // Ensures items are in a line horizontally
        >
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))
    ) : (
      <Typography>No items available</Typography>
    )}
  </ScrollMenu>
);

export default HorizontalScrollbar;