import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux';

import TransformStar from '../TranformStar';
import TransformQuad from '../TransformQuad';
import TransformPicture from '../TransformPicture';
import { applyKonva, applyKonva2, cleanShirt } from '../../Redux/Actions';

const Konva = () => {
  const part = useSelector((state) => state.part);
  const dispatch = useDispatch();
  const [shapes, setShapes] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [pic, setPic] = useState();
  const stageRef = useRef(null);
  useEffect(() => {
    const image = new window.Image();
    image.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=';
    setPic(image);
  }, []);

  const handleGenerateStar = () => {
    setShapes([
      ...shapes,
      {
        id: 'star'.concat(Math.random().toString()),
        type: 'star',
        key: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 100,
        y: (Math.random() * window.innerHeight) / 100,
        rotation: Math.random() * 180,
        isDragging: false,
        numPoints: 5,
        innerRadius: 100,
        outerRadius: 200,
        fill: '#89b717',
        opacity: 0.8,
      },
    ]);
  };

  const handleQuadangles = () => {
    setShapes([
      ...shapes,
      {
        id: 'quad'.concat(Math.random().toString()),
        type: 'quad',
        key: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 2,
        y: (Math.random() * window.innerHeight) / 2,
        rotation: Math.random() * 180,
        isDragging: false,

        width: 100,
        height: 90,
        fill: '#a31724',
        opacity: 0.8,
      },
    ]);
  };

  const handleGenerateImage = (image) => {
    setShapes([
      ...shapes,
      {
        id: 'image'.concat(Math.random().toString()),
        type: 'image',
        key: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 100,
        y: (Math.random() * window.innerHeight) / 100,
        isDragging: false,
        opacity: 0.8,
        image,
      },
    ]);
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area

    //const clickedOnEmpty = e.target === e.target.getStage();
    const clickedOnEmpty = e.target.attrs.id === 'backgroundWhite';

    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const handleUploadPicture = async (e) => {
    const file = e.target.files[0];
    if (file !== null && file !== undefined) {
      const base64 = await convertBase64(file);
      const image = new window.Image();
      image.src = base64;
      handleGenerateImage(image);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const image = new window.Image();
    image.src = base64;
    setPic(image);
  };

  const handleApply = () => {
    if (stageRef !== null) {
      console.log(
        '%c 🔅: handleApply -> part ',
        'font-size:16px;background-color:#c15fd4;color:white;',
        part
      );
      const imgBase65 = stageRef.current.toDataURL();
      dispatch(applyKonva(part, imgBase65));
    }
  };

  const handleApply2 = () => {
    if (stageRef !== null) {
      console.log(
        '%c 🔅: handleApply2 -> part ',
        'font-size:16px;background-color:#c15fd4;color:white;',
        part
      );
      const imgBase65 = stageRef.current.toDataURL();
      dispatch(applyKonva2(imgBase65));
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleClearStage = () => {
    setShapes([]);
  };

  const handleCleanShirt = () => {
    dispatch(cleanShirt());
  };

  return (
    <>
      {part !== 'NONE' && (
        <>
          <h1>Part: {part} </h1>
          <button onClick={handleApply}>Apply</button>
        </>
      )}

      <button onClick={handleGenerateStar}>Add Star</button>
      <button onClick={handleQuadangles}>Add Rectangle</button>
      <label>Upload Picture:</label>
      <input
        type="file"
        onChange={handleUploadPicture}
        id="myPic"
        name="myPic"
      />
      <label>Upload Pattern:</label>
      <input type="file" onChange={handleUpload} id="myfile" name="myfile" />
      <button onClick={handleCleanShirt}>Clean Shirt</button>
      <button onClick={handleClearStage}>Clean Stage</button>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <Rect
            id="backgroundWhite"
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fillPatternImage={pic}
            // fill="white"
          />

          {shapes.length !== 0 &&
            shapes.map((shape, i) => {
              if (shape.type === 'star')
                return (
                  <TransformStar
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      selectShape(shape.id);
                    }}
                    onChange={(newAttrs) => {
                      const shp = shapes.slice();
                      shp[i] = newAttrs;
                      setShapes(shp);
                    }}
                  />
                );
              if (shape.type === 'quad')
                return (
                  <TransformQuad
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      selectShape(shape.id);
                    }}
                    onChange={(newAttrs) => {
                      const shp = shapes.slice();
                      shp[i] = newAttrs;
                      setShapes(shp);
                    }}
                  />
                );
              if (shape.type === 'image')
                return (
                  <TransformPicture
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      selectShape(shape.id);
                    }}
                    onChange={(newAttrs) => {
                      const shp = shapes.slice();
                      shp[i] = newAttrs;
                      setShapes(shp);
                    }}
                  />
                );
            })}
        </Layer>
      </Stage>
    </>
  );
};

export default Konva;
