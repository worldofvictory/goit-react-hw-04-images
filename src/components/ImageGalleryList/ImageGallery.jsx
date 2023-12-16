import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery =  ({ images, openModal}) => {
  return (
    <ul >
      {images.map(image => (
        <ImageGalleryItem  key={image.id} image={image} onClick={openModal}>  </ImageGalleryItem>
      ))}
    </ul>
  );
};

 





