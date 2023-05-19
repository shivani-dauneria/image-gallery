import { format } from "date-fns"
import React, { useState } from 'react';





export default function Article({ id, urls, user, created_at, likes }) {
  const [lik, setLikes] = useState(0);
const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="p-5 rounded-3xl shadow-md bg-white">
        <article key={id} className="rounded-3xl">
        <a href={urls.regular} target="_blank" rel="noreferrer">
          <img
            src={urls.regular}
            alt={user.username} 
            
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
          />
          </a>
          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">
              <img
                src={user.profile_image.medium}
                alt={user.username}
                className="rounded-full mr-2 w-10 md:w-auto"
              />
              <ul>
                <li className="text-slate-800 font-bold">{user.name}</li>
                <li className="text-sm text-slate-800 opacity-75">
                  {format(new Date(created_at), "dd MMMM yyyy")}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username} 
              </a>
              {/* <small className="text-slate-800 opacity-75 block">
                {likes} <LikeButton/>
              </small>
               */}
               <div className="like-button-container">
        <button
           className={`like-button ${liked ? 'liked' : ''}`}
           onClick={() => {
              setLikes(lik+ 1);
              setLiked(true);
           }}
        >
          {likes} Likes
        </button>
     </div>
              
              

          

            </article>
          </div>
        </article>
      </div>
    </>
  )
}
