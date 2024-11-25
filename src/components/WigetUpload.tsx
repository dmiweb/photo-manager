type WigetUploadProps = {
  onAdd: (urls: string[]) => void
}

const WigetUpload = (props: WigetUploadProps): JSX.Element => {
  const { onAdd } = props;

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader: FileReader = new FileReader();

      fileReader.addEventListener('load', (evt: ProgressEvent<FileReader>): void => {
        const result = String((evt.target as FileReader).result);
        resolve(result);
      });

      fileReader.addEventListener('error', (evt: ProgressEvent<FileReader>): void => {
        const error = (evt.target as FileReader).error;
        reject(error);
      });

      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!evt.target.files) return;

    const files: File[] = [...evt.target.files];
    const urls: string[] = await Promise.all(files.map(o => fileToDataUrl(o)));

    onAdd(urls)

    evt.target.value = '';
  }

  return (
    <div className="widget-file-upload">
      <div className="file-container">
        <input
          type="file"
          className="file-container__input"
          accept="image/*"
          onChange={handleSelect}
          multiple />
        <div className="file-container__overlap overlap-content">
          <span className="overlap-content__text">Click to select</span>
        </div>
      </div>
    </div>
  );
}

export default WigetUpload;