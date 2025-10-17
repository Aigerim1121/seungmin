import React from "react";
import { useNavigate } from "react-router-dom";
import "./Articles.scss";

const newsItems = [
  { id: 1, image:"https://vietnamstory.ru/wp-content/uploads/2019/11/il_fullxfull.803529165_tuf8-1024x720.jpg", title: "Наименование новости", desc: "Краткое описание в несколько строк данной новости или статьи" },
  { id: 2, image: "https://app-minsk.by/files/galleries/2347/9206/src_480x390.jpg", title: "Наименование новости", desc: "Краткое описание в несколько строк данной новости или статьи" },
  { id: 3, image: "https://ae01.alicdn.com/kf/HTB1VrnAk8jTBKNjSZFwq6AG4XXah.jpg_960x960.jpg", title: "Наименование новости", desc: "Краткое описание в несколько строк данной новости или статьи" },
  { id: 4, image: "https://chemodan-na-kolesah.ru/upload/resize_cache/iblock/338/vrongo3b28onxo59brf6mrp5dwgc89c0/1000_1500_1897cc27404b5a3a68a1955d8a4258e92/diamond_7829_01_leather_bag_black_9.jpg", title: "Наименование новости", desc: "Краткое описание в несколько строк данной новости или статьи" },
  { id: 5, image: "https://ae04.alicdn.com/kf/H43848e0f58cf4bcf8dc9400ae06a07d95.jpg_640x640.jpg", title: "Наименование новости", desc: "Краткое описание в несколько строк данной новости или статьи" },
  { id: 6, image: "https://i.pinimg.com/736x/f1/93/ed/f193ed119d3ae86d5e9bccd0811e3e6f.jpg", title: "Наименование новости", desc: "Краткое описание в несколько строк данной новости или статьи" },
];

function Articles() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/article/${id}`, { state: { newsItems } });
  };

  return (
    <div className='articles container'>
      <h2>Обзоры и статьи</h2>
      <div className="news-container">
        <div className="news-grid">
          {newsItems.map((item) => (
            <div className="news-card" key={item.id} onClick={() => handleClick(item.id)}>
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
