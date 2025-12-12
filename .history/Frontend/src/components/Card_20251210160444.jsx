import React from 'react';

const Card = ({ post, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <div className="text-sm text-gray-500">
        <span>By {post.author}</span>
        <span className="ml-4">{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Card;
