import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        {featuredImage && (
          <div className="overflow-hidden h-52">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        )}

        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Click to read more...
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
