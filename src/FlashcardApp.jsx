// FlashcardApp.jsx
import React, { useState } from "react";
import "../src/index.css"

const wordData = {
  animals: [
    { front: "Cat", back: "แมว" },
    { front: "Dog", back: "สุนัข" },
    // เพิ่มให้ครบ 30 คำ
  ],
  colors: [
    { front: "Red", back: "สีแดง" },
    { front: "Blue", back: "สีน้ำเงิน" },
  ],
  fruits: [
    { front: "Apple", back: "แอปเปิ้ล" },
    { front: "Banana", back: "กล้วย" },
  ],
  body: [
    { front: "Hand", back: "มือ" },
    { front: "Leg", back: "ขา" },
  ],
  school: [
    { front: "Pencil", back: "ดินสอ" },
    { front: "Book", back: "หนังสือ" },
  ],
  clothes: [
    { front: "Shirt", back: "เสื้อเชิ้ต" },
    { front: "Shoes", back: "รองเท้า" },
  ],
  food: [
    { front: "Rice", back: "ข้าว" },
    { front: "Egg", back: "ไข่" },
  ],
  weather: [
    { front: "Rain", back: "ฝน" },
    { front: "Sun", back: "พระอาทิตย์" },
  ],
  transport: [
    { front: "Car", back: "รถยนต์" },
    { front: "Bus", back: "รถบัส" },
  ],
  jobs: [
    { front: "Doctor", back: "หมอ" },
    { front: "Teacher", back: "ครู" },
  ],
};

const FlashcardApp = () => {
  const categories = Object.keys(wordData);
  const [category, setCategory] = useState("animals");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = wordData[category];
  const currentCard = cards[index];

  const handleFlip = () => setFlipped(!flipped);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setFlipped(false);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setFlipped(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="app-container">
      <h2>แฟลชการ์ดคำศัพท์ภาษาอังกฤษ</h2>

      <select value={category} onChange={handleCategoryChange}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="front">{currentCard.front}</div>
        <div className="back">{currentCard.back}</div>
      </div>

      <div className="buttons">
        <button onClick={prevCard}>ก่อนหน้า</button>
        <button onClick={nextCard}>ถัดไป</button>
      </div>

      <p>คำที่ {index + 1} จาก {cards.length}</p>
    </div>
  );
};

export default FlashcardApp;
