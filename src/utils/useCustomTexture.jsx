import { useState } from 'react';
import { useTexture } from '@react-three/drei';
const useCustomTexture = (texture) => {
  const [txture, setTxture] = useState({
    bump: null,
    normal: null,
  });

  const { bump, normal } = useTexture({
    bump: `/bump/${texture.bumpMap}.png`,
    normal: `/normal/${texture.normalMap}.jpg`,
  });

  setTxture({
    bump,
    normal,
  });

  return txture;
};

export default useCustomTexture;
