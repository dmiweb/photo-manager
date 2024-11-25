type PhotoProps = {
  photo: {
    id: string,
    name?: string,
    url: string
  },
  onRemove: (id: string) => void
}

const Photo = (props: PhotoProps): JSX.Element => {
  const {photo, onRemove} = props;

  return (
    <article id={photo.id} className="item-container">
      <div className="image-container">
        <img src={photo.url} className="image" alt={undefined} />
      </div>
      {/* <span className="name-img">{photo.name}</span> */}
      <span className="delete-image" onClick={() => onRemove(photo.id)}>X</span>
    </article>
  );
}

export default Photo;