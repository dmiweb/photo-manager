import Photo from "./Photo";

type GalleryProps = {
  photos: {
    id: string,
    name?: string,
    url: string
  }[],
  onRemove: (id: string) => void
}

const Gallery = (props: GalleryProps): JSX.Element => {
  const {photos, onRemove} = props;
  
  return (
    <div className="gallery">
      {photos.map(photo => <Photo key={photo.id} photo={photo} onRemove={onRemove}/>)}
    </div>
  );
}

export default Gallery;