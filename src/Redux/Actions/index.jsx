export const changeTexture = (action) => {
  return {
    type: action,
  };
};

export const changePart = (action) => {
  return {
    type: 'SET',
    payload: action,
  };
};

export const applyKonva = (part, imgBase) => {
  return {
    type: part,
    payload: imgBase,
  };
};

export const applyKonva2 = (imgBase) => {
  return {
    type: 'CUSTOM_ADD_DESIGN',
    payload: imgBase,
  };
};

export const cleanShirt = () => {
  return {
    type: 'CLEAN_SHIRT',
  };
};
