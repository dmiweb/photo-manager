import { useState } from 'react'
import WigetUpload from "./WigetUpload";
import Gallery from "./Gallery";

type Photo = {
  id: string,
  name?: string,
  url: string
}

const PhotoManager = (): JSX.Element => {
  const [photos, setPhotos] = useState<Photo[] | []>([]);

  const hendleAddPhoto = (urls: string[]): void => {
    const photo = urls.map(url => {
      return {
        id: url.slice(-16) + Math.random(),
        url: url
      }
    });

    setPhotos(prevPhotos => [...prevPhotos, ...photo]);
  }

  const hendleRemovePhoto = (id: string): void => {
    setPhotos(photos.filter(o => o.id !== id));
  }

  return (
    <div className="photo-manager">
      <WigetUpload onAdd={hendleAddPhoto} />
      <Gallery photos={photos} onRemove={hendleRemovePhoto} />
    </div>
  );
}

export default PhotoManager;