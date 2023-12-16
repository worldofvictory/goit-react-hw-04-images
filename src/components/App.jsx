import { useState, useEffect } from "react";
import { ImageGallery } from "./ImageGalleryList/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer, toast} from 'react-toastify';
import { getImages } from './Api/Api'
import { Loader } from './Loader/Loader'
import { Button } from "./Button/Button";
import  Modal  from './Modal/Modal'


/*function App() {
  const [isLoadMore, setIsLoadMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])


  useEffect(() => {
       if (query !== '' || page !== 1) {
      setIsLoading(true);
      setIsLoadMore(false);
   getImages({ query, page })
        .then(({ hits: photos, totalHits, hits }) => {
          if (!photos.length) {
            return toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }

         setImages(prevState => ({
            images: [...prevState.images, ...hits],

            isLoadMore: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          toast.error(
            'Oops! Something went wrong! Try reloading the page or make another choice');
        })
        .finally(() => {
          setIsLoading({ isLoading: false });
        }); 
    
    } }
  

 [query, page])
  

 const handleLoadMore = () => {
    setIsLoadMore(prevState => ({ page: prevState.page + 1 }));
  };

    const handleSubmit = query => {
    if (setQuery === query) {
      return;
      }
      setImages([])
      setPage (1)
      setQuery ('')
    };
    
  
  const openModal = url => {
    setUrl({ url });
  };
      
      

  return (
     <div>
        
              <Searchbar onSubmit={handleSubmit} />
              {isLoading && <Loader />}  
              <ImageGallery images={images} openModal={openModal} />
              <ToastContainer autoClose={1000} />  
        {url && <Modal closeModal={openModal} url={url} />}
        {isLoadMore && <Button onClick={() => handleLoadMore()} />}      
       </div> 
  )
}

export default App*/






   const App = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (query !== '' || page !== 1) {
      setIsLoading(true);
      setIsLoadMore(false);

      getImages({ query, page })
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            toast.error("Sorry, there are no images matching your search query. Please try again.");
          }

          setImages(prevImages => [...prevImages, ...hits]);
          setIsLoadMore(page < Math.ceil(totalHits / 12));
        })
        .catch(error => {
          toast.error("Oops! Something went wrong! Try reloading the page or make another choice");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = newQuery => {
    if (query === newQuery) {
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = newUrl => {
    setUrl(newUrl);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} openModal={openModal} />
      <ToastContainer autoClose={1000} />
      {url && <Modal closeModal={() => setUrl('')} url={url} />}
      {isLoadMore && <Button onClick={handleLoadMore} />}
    </div>
  );
};

export default App;

 
    
 


    
       
   


