import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three';

const Tshirt = (props) => {
  const { texture, design, part } = props;

  const group = useRef();

  const { nodes } = useGLTF('/react_deploy/compressed_t-shirt.glb');
  console.log(
    '%c 🐓: Tshirt -> nodes ',
    'font-size:16px;background-color:#8601cb;color:white;',
    nodes
    // Object.keys(nodes)
  );

  const { bump, normal } = useTexture({
    bump: `/react_deploy/bump/${texture.bumpMap}.png`,
    normal: `/react_deploy/normal/${texture.normalMap}.jpg`,
  });

  const base64ToTexture = (base64) => {
    const texture = new TextureLoader().load(base64);
    texture.flipY = false;
    return texture;
  };

  return (
    <group ref={group} dispose={null}>
      {Object.keys(nodes).map((key) => {
        if (key !== 'Scene') {
          if (part === key.substr(5))
            return (
              <mesh
                key={nodes[key].uuid}
                geometry={nodes[key].geometry}
                material={nodes[key].material}
                material-bumpMap={bump}
                material-normalMap={normal}
                material-map={base64ToTexture(design[part].imgBase)}
              />
            );
          if (part === 'ALL') {
            return (
              <mesh
                key={nodes[key].uuid}
                geometry={nodes[key].geometry}
                material={nodes[key].material}
                material-bumpMap={bump}
                material-normalMap={normal}
                material-map={base64ToTexture(design[key.substr(5)].imgBase)}
              />
            );
          }
          return (
            <mesh
              key={nodes[key].uuid}
              geometry={nodes[key].geometry}
              material={nodes[key].material}
              material-bumpMap={bump}
              material-normalMap={normal}
              material-map={base64ToTexture(design[key.substr(5)].imgBase)}
            />
          );
        } // end of scene
      })}
    </group>
  );
};

useGLTF.preload('/compressed_t-shirt.glb');
export default Tshirt;

/* <mesh
        geometry={nodes.BASE_RIB.geometry}
        material={nodes.BASE_RIB.material}
      />
      <mesh
        geometry={nodes.BASE_MOON.geometry}
        material={nodes.BASE_MOON.material}
      />
      <mesh
        geometry={nodes.BASE_BODY_BACK_INNER.geometry}
        material={nodes.BASE_BODY_BACK_INNER.material}
      />
      <mesh
        geometry={nodes.BASE_BODY_FRONT_INNER.geometry}
        material={nodes.BASE_BODY_FRONT_INNER.material}
      />
      <mesh
        geometry={nodes.BASE_STITCH.geometry}
        material={nodes.BASE_STITCH.material}
      />
      <mesh
        geometry={nodes.BASE_BODY_BACK_OUTER.geometry}
        material={nodes.BASE_BODY_BACK_OUTER.material}
        material-bumpMap={bump}
        material-normalMap={normal}
        material-map={base64ToTexture(design.BODY_BACK_OUTER.imgBase)}
      />
      <mesh
        geometry={nodes.BASE_SLEEVE_LEFT_OUTER.geometry}
        material={nodes.BASE_SLEEVE_LEFT_OUTER.material}
        material-bumpMap={bump}
        material-normalMap={normal}
        material-map={base64ToTexture(design.SLEEVE_LEFT_OUTER.imgBase)}
      />
      <mesh
        geometry={nodes.BASE_SLEEVE_RIGHT_OUTER.geometry}
        material={nodes.BASE_SLEEVE_RIGHT_OUTER.material}
        material-bumpMap={bump}
        material-normalMap={normal}
        material-map={base64ToTexture(design.SLEEVE_RIGHT_OUTER.imgBase)}
      />
      <mesh
        geometry={nodes.BASE_SLEEVE_RIGHT_INNER.geometry}
        material={nodes.BASE_SLEEVE_RIGHT_INNER.material}
      />
      <mesh
        geometry={nodes.BASE_SLEEVE_LEFT_INNER.geometry}
        material={nodes.BASE_SLEEVE_LEFT_INNER.material}
      />
      <mesh
        geometry={nodes.BASE_BODY_FRONT_OUTER.geometry}
        material={nodes.BASE_BODY_FRONT_OUTER.material}
        material-bumpMap={bump}
        material-normalMap={normal}
        material-map={base64ToTexture(design.BODY_BACK_OUTER.imgBase)}
        material-map-center-x={2}
        material-map-center-y={2}
      /> */
