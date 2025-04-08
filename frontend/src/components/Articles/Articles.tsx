import React from "react";
import ArticleCard from "./ArticleCard";

const Articles: React.FC = () => {
  const articles = [
    {
      title: "Top 10 Destinations for Summer 2023",
      excerpt:
        "Discover the hottest destinations for your summer vacation this year.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
    },
    {
      title: "How to Travel on a Budget",
      excerpt:
        "Learn the best tips and tricks for traveling without breaking the bank.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2023",
    },
    {
      title: "Must-Try Local Cuisines Around the World",
      excerpt: "Explore the most delicious local dishes from various cultures.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 5, 2023",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
        <p className="text-gray-600">
          Stay updated with our latest travel stories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} {...article} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
