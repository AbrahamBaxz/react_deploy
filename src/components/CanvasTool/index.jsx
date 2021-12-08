import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTexture, changePart } from '../../Redux/Actions';

const CanvasTool = () => {
  const part = useSelector((state) => state.part);

  const dispatch = useDispatch();

  const handleChangeTexture = (e) => {
    dispatch(changeTexture(e.target.value));
  };

  const handleSetPart = (e) => {
    dispatch(changePart(e.target.value));
  };

  return (
    <>
      <select onChange={handleChangeTexture}>
        <option disabled>-- Select an Texture --</option>
        <option value="FABRIC_KNIT" selected>
          FABRIC KNIT
        </option>
        <option value="FABRIC_034">FABRIC 034 </option>
        <option value="FABRIC_NYLON">FABRIC NYLON</option>
      </select>
      <select onChange={handleSetPart}>
        <option disabled selected>
          -- Select an Part --
        </option>
        <option value="ALL">ALL</option>
        <option value="BODY_FRONT_OUTER">BODY_FRONT_OUTER</option>
        <option value="BODY_BACK_OUTER">BODY_BACK_OUTER</option>
        <option value="SLEEVE_LEFT_OUTER">SLEEVE_LEFT_OUTER</option>
        <option value="SLEEVE_RIGHT_OUTER">SLEEVE_RIGHT_OUTER</option>
      </select>
      <h2>Part: {part}</h2>
    </>
  );
};

export default CanvasTool;
