import React from "react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  delay: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  image,
  date,
  delay,
}) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animation-delay-${delay}`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <button className="text-red-500 hover:text-red-600 transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
