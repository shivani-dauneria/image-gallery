import { useState, useEffect } from "react"
import Article from "./Article"
import Pagination from "./Pagination"
import axios from "axios";

  


// import { Link } from "react-router-dom"

export default function GetImages() {
  const [images, setImages] = useState([])

  const [page, setPage] = useState(1);
  
  const [currentImages, setCurrentImages] = useState(null);
const [pageCount, setPageCount] = useState(0);
const [imagesOffset, setImagesOffset] = useState(0);
const handlePageClick = (event) => {
  const newOffset = (event.selected * 8) % images.length;
  setImagesOffset(newOffset);
};

useEffect(() => {
  const endOffset = imagesOffset + 8;
  setCurrentImages(images.slice(imagesOffset, endOffset));
  setPageCount(Math.ceil(images.length / 8));
}, [images, imagesOffset]);

  
 
  

  
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
     setIsLoading(true);
      axios
        .get(
          `https://api.unsplash.com/photos?per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
        )
        .then((res) => {
          setImages((prevState) => [...res.data]);
          setIsLoading(false);
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }, []);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const response = await fetch(
  //       `https://api.unsplash.com/photos?per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  //     )
  //     const data = await response.json()
  //     console.log(data)
  //     setImages(data)
  //   }

  //   fetchImages()
  // }, [])

  return (
    <>
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-400 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
          Kursaha Image Gallery
        </h1>
        {/* pagination */}
        <div className="pagination">
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
     <button
        disabled={page === 1}
        onClick={() => setPage((prevState) => prevState - 1)}
      >
        Prev
      </button>
      <p>{page}</p>
     <button onClick={() => setPage((prevState) => prevState + 1)}>
        Next
      </button>
    </>
  )}
  </div>
    
      {/* <Pagination/>   */}

        
        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {images.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
       
      </div>
    </>
  )
}
