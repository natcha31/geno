import React, { useState } from "react";
import "../src/index.css";

const wordData = {
  animals: [
    { front: "Cat", back: "แมว" },
    { front: "Dog", back: "สุนัข" },
    { front: "Elephant", back: "ช้าง" },
    { front: "Lion", back: "สิงโต" },
    { front: "Tiger", back: "เสือ" },
    { front: "Giraffe", back: "ยีราฟ" },
    { front: "Monkey", back: "ลิง" },
    { front: "Horse", back: "ม้า" },
    { front: "Rabbit", back: "กระต่าย" },
    { front: "Cow", back: "วัว" },
    // เพิ่มให้ครบ 30 คำ
  ],
  colors: [
    { front: "Red", back: "สีแดง" },
    { front: "Blue", back: "สีน้ำเงิน" },
    { front: "Green", back: "สีเขียว" },
    { front: "Yellow", back: "สีเหลือง" },
    { front: "Purple", back: "สีม่วง" },
    { front: "Pink", back: "สีชมพู" },
    { front: "Orange", back: "สีส้ม" },
    { front: "White", back: "สีขาว" },
    { front: "Black", back: "สีดำ" },
  ],
  fruits: [
    { front: "Apple", back: "แอปเปิ้ล" },
    { front: "Banana", back: "กล้วย" },
    { front: "Orange", back: "ส้ม" },
    { front: "Grapes", back: "องุ่น" },
    { front: "Mango", back: "มะม่วง" },
  ],
  body: [
    { front: "Hand", back: "มือ" },
    { front: "Leg", back: "ขา" },
    { front: "Eye", back: "ตา" },
    { front: "Ear", back: "หู" },
    { front: "Mouth", back: "ปาก" },
  ],
  school: [
    { front: "Pencil", back: "ดินสอ" },
    { front: "Book", back: "หนังสือ" },
    { front: "Eraser", back: "ยางลบ" },
    { front: "Desk", back: "โต๊ะ" },
  ],
  clothes: [
    { front: "Shirt", back: "เสื้อเชิ้ต" },
    { front: "Shoes", back: "รองเท้า" },
    { front: "Pants", back: "กางเกง" },
    { front: "Hat", back: "หมวก" },
  ],
  food: [
    { front: "Rice", back: "ข้าว" },
    { front: "Egg", back: "ไข่" },
    { front: "Bread", back: "ขนมปัง" },
    { front: "Chicken", back: "ไก่" },
  ],
  weather: [
    { front: "Rain", back: "ฝน" },
    { front: "Sun", back: "พระอาทิตย์" },
    { front: "Cloud", back: "เมฆ" },
    { front: "Wind", back: "ลม" },
  ],
  transport: [
    { front: "Car", back: "รถยนต์" },
    { front: "Bus", back: "รถบัส" },
    { front: "Bicycle", back: "จักรยาน" },
    { front: "Plane", back: "เครื่องบิน" },
  ],
  jobs: [
    { front: "Doctor", back: "หมอ" },
    { front: "Teacher", back: "ครู" },
    { front: "Engineer", back: "วิศวกร" },
    { front: "Chef", back: "เชฟ" },
  ],
};

const FlashcardApp = () => {
  const categories = Object.keys(wordData);
  const [category, setCategory] = useState("animals");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cards = wordData[category];
  
  // กรองคำที่ค้นหา
  const filteredCards = cards.filter((card) =>
    card.front.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.back.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const currentCard = filteredCards[index] || cards[index]; // fallback

  const handleFlip = () => setFlipped(!flipped);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % filteredCards.length);
    setFlipped(false);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
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

      {/* Input for search */}
      <input 
        type="text" 
        placeholder="ค้นหาคำศัพท์..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      {/* Category selector */}
      <select value={category} onChange={handleCategoryChange}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Flashcard display */}
      <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="front">{currentCard.front}</div>
        <div className="back">{currentCard.back}</div>
      </div>

      {/* Navigation buttons */}
      <div className="buttons">
        <button onClick={prevCard} disabled={filteredCards.length === 0}>
          ก่อนหน้า
        </button>
        <button onClick={nextCard} disabled={filteredCards.length === 0}>
          ถัดไป
        </button>
      </div>

      {/* Card number */}
      <p>คำที่ {index + 1} จาก {filteredCards.length || cards.length}</p>
    </div>
  );
};

export default FlashcardApp;
