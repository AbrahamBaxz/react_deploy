const DEFAULT_DESIGN =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=';

const initialState = {
  MOON: {
    imgBase: DEFAULT_DESIGN,
  },
  BODY_FRONT_OUTER: {
    imgBase: DEFAULT_DESIGN,
    // x: 0.03,
    // y: -0.16,
    x: 0,
    y: 0,
    Xmin: -29,
    Xmax: 35,
    Ymin: -40,
    Ymax: 8,
    status: false,
  },
  BODY_BACK_OUTER: {
    imgBase: DEFAULT_DESIGN,
    // x: -0.27,
    // y: -0.17,
    x: 0,
    y: 0,
    Xmin: -54,
    Xmax: 0,
    Ymin: -42,
    Ymax: 7,
    status: false,
  },
  SLEEVE_LEFT_OUTER: {
    imgBase: DEFAULT_DESIGN,
    // x: -0.37,
    // y: -0.02,
    x: 0,
    y: 0,
    Xmin: -57,
    Xmax: 17,
    Ymin: -40,
    Ymax: 38,
    status: false,
  },
  SLEEVE_RIGHT_OUTER: {
    imgBase: DEFAULT_DESIGN,
    // x: 0.25,
    // y: 0,
    x: 0,
    y: 0,
    Xmin: -16,
    Xmax: 66,
    Ymin: -38,
    Ymax: 38,
    status: false,
  },
  BODY_FRONT_INNER: {
    imgBase: DEFAULT_DESIGN,
  },
  BODY_BACK_INNER: {
    imgBase: DEFAULT_DESIGN,
  },
  SLEEVE_LEFT_INNER: {
    imgBase: DEFAULT_DESIGN,
  },
  SLEEVE_RIGHT_INNER: {
    imgBase: DEFAULT_DESIGN,
  },
  RIB: {
    imgBase: DEFAULT_DESIGN,
  },
  STITCH: {
    imgBase: DEFAULT_DESIGN,
  },
  CUSTOM: {
    imgBase: DEFAULT_DESIGN,
  },
};

const Designs = (state = initialState, action) => {
  switch (action.type) {
    case 'BODY_FRONT_OUTER':
      return {
        ...state,
        BODY_FRONT_OUTER: {
          ...state.BODY_FRONT_OUTER,
          imgBase: action.payload,
        },
      };
    case 'BODY_BACK_OUTER':
      return {
        ...state,
        BODY_BACK_OUTER: {
          ...state.BODY_BACK_OUTER,
          imgBase: action.payload,
        },
      };
    case 'SLEEVE_LEFT_OUTER':
      return {
        ...state,
        SLEEVE_LEFT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          imgBase: action.payload,
        },
      };
    case 'SLEEVE_RIGHT_OUTER':
      return {
        ...state,

        SLEEVE_RIGHT_OUTER: {
          ...state.SLEEVE_RIGHT_OUTER,
          imgBase: action.payload,
        },
      };
    case 'ALL':
      return {
        ...state,
        BODY_FRONT_OUTER: {
          ...state.BODY_FRONT_OUTER,
          imgBase: action.payload,
        },
        BODY_BACK_OUTER: {
          ...state.BODY_BACK_OUTER,
          imgBase: action.payload,
        },
        SLEEVE_LEFT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          imgBase: action.payload,
        },
        SLEEVE_RIGHT_OUTER: {
          ...state.SLEEVE_RIGHT_OUTER,
          imgBase: action.payload,
        },
      };

    case 'CUSTOM_ADD_DESIGN':
      return {
        ...state,
        CUSTOM: {
          // ...state.CUSTOM,
          imgBase: action.payload,
        },
      };

    case 'CLEAN_SHIRT':
      return initialState;

    default:
      return state;
  }
};

export default Designs;
