const initialState = {
  bumpMap: 'Fabric_Knitted',
  normalMap: 'Fabric_Knitted',
};

const Textures = (state = initialState, action) => {
  switch (action.type) {
    case 'FABRIC_034':
      return (state = { normalMap: 'Fabric_034', bumpMap: 'Fabric_034' });
    case 'FABRIC_KNIT':
      return (state = {
        normalMap: 'Fabric_Knitted',
        bumpMap: 'Fabric_Knitted',
      });
    case 'FABRIC_NYLON':
      return (state = { normalMap: 'Fabric_Nylon', bumpMap: 'Fabric_Nylon' });

    default:
      return state;
  }
};

export default Textures;
