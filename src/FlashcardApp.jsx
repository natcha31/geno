import React, { useState } from "react";
import "../src/index.css";

const wordData = {
  animals: [
    { front: "Cat", back: "แมว" },
    { front: "Dog", back: "สุนัข" },
    { front: "Elephant", back: "ช้าง" },
    { front: "Lion", back: "สิงโต" },
    { front: "Tiger", back: "เสือ" },
    { front: "Bear", back: "หมี" },
    { front: "Monkey", back: "ลิง" },
    { front: "Rabbit", back: "กระต่าย" },
    { front: "Snake", back: "งู" },
    { front: "Horse", back: "ม้า" },
    { front: "Cow", back: "วัว" },
    { front: "Pig", back: "หมู" },
    { front: "Sheep", back: "แกะ" },
    { front: "Goat", back: "แพะ" },
    { front: "Frog", back: "กบ" },
    { front: "Duck", back: "เป็ด" },
    { front: "Chicken", back: "ไก่" },
    { front: "Fish", back: "ปลา" },
    { front: "Wolf", back: "หมาป่า" },
    { front: "Deer", back: "กวาง" },
    { front: "Bee", back: "ผึ้ง" },
    { front: "Butterfly", back: "ผีเสื้อ" },
    { front: "Ant", back: "มด" },
    { front: "Spider", back: "แมงมุม" },
    { front: "Crocodile", back: "จระเข้" },
    { front: "Zebra", back: "ม้าลาย" },
    { front: "Kangaroo", back: "จิงโจ้" },
    { front: "Panda", back: "แพนด้า" },
    { front: "Owl", back: "นกฮูก" },
    { front: "Camel", back: "อูฐ" },
  ],
  colors: [
    { front: "Red", back: "สีแดง" },
    { front: "Blue", back: "สีน้ำเงิน" },
    { front: "Green", back: "สีเขียว" },
    { front: "Yellow", back: "สีเหลือง" },
    { front: "Pink", back: "สีชมพู" },
    { front: "Black", back: "สีดำ" },
    { front: "White", back: "สีขาว" },
    { front: "Purple", back: "สีม่วง" },
    { front: "Orange", back: "สีส้ม" },
    { front: "Brown", back: "สีน้ำตาล" },
    { front: "Gray", back: "สีเทา" },
    { front: "Light Blue", back: "สีฟ้าอ่อน" },
    { front: "Dark Green", back: "สีเขียวเข้ม" },
    { front: "Gold", back: "สีทอง" },
    { front: "Silver", back: "สีเงิน" },
    { front: "Beige", back: "สีเบจ" },
    { front: "Turquoise", back: "สีฟ้าน้ำทะเล" },
    { front: "Violet", back: "สีม่วงอ่อน" },
    { front: "Magenta", back: "สีแมจินต้า" },
    { front: "Cyan", back: "สีฟ้าคราม" },
    { front: "Maroon", back: "สีแดงเข้ม" },
    { front: "Navy Blue", back: "สีน้ำเงินกรมท่า" },
    { front: "Lime", back: "สีเขียวมะนาว" },
    { front: "Olive", back: "สีเขียวมะกอก" },
    { front: "Coral", back: "สีส้มอมชมพู" },
    { front: "Peach", back: "สีพีช" },
    { front: "Mint", back: "สีเขียวมิ้นท์" },
    { front: "Lavender", back: "สีลาเวนเดอร์" },
    { front: "Chocolate", back: "สีน้ำตาลเข้ม" },
    { front: "Crimson", back: "สีแดงเข้ม" },
  ],
  fruits: [
    { front: "Apple", back: "แอปเปิ้ล" },
    { front: "Banana", back: "กล้วย" },
    { front: "Orange", back: "ส้ม" },
    { front: "Mango", back: "มะม่วง" },
    { front: "Pineapple", back: "สับปะรด" },
    { front: "Grape", back: "องุ่น" },
    { front: "Watermelon", back: "แตงโม" },
    { front: "Papaya", back: "มะละกอ" },
    { front: "Strawberry", back: "สตรอว์เบอร์รี่" },
    { front: "Cherry", back: "เชอร์รี่" },
    { front: "Lemon", back: "มะนาว" },
    { front: "Peach", back: "ลูกพีช" },
    { front: "Kiwi", back: "กีวี" },
    { front: "Coconut", back: "มะพร้าว" },
    { front: "Avocado", back: "อะโวคาโด" },
    { front: "Blueberry", back: "บลูเบอร์รี่" },
    { front: "Guava", back: "ฝรั่ง" },
    { front: "Lychee", back: "ลิ้นจี่" },
    { front: "Durian", back: "ทุเรียน" },
    { front: "Jackfruit", back: "ขนุน" },
    { front: "Fig", back: "มะเดื่อ" },
    { front: "Pomegranate", back: "ทับทิม" },
    { front: "Plum", back: "ลูกพรุน" },
    { front: "Raspberry", back: "ราสเบอร์รี่" },
    { front: "Melon", back: "เมล่อน" },
    { front: "Cantaloupe", back: "แคนตาลูป" },
    { front: "Date", back: "อินทผลัม" },
    { front: "Persimmon", back: "ลูกพลับ" },
    { front: "Tangerine", back: "ส้มแมนดาริน" },
    { front: "Apricot", back: "แอปริคอต" },
  ],
  body: [
    { front: "Hand", back: "มือ" },
    { front: "Leg", back: "ขา" },
    { front: "Head", back: "หัว" },
    { front: "Eye", back: "ตา" },
    { front: "Ear", back: "หู" },
    { front: "Nose", back: "จมูก" },
    { front: "Mouth", back: "ปาก" },
    { front: "Neck", back: "คอ" },
    { front: "Arm", back: "แขน" },
    { front: "Finger", back: "นิ้วมือ" },
    { front: "Toe", back: "นิ้วเท้า" },
    { front: "Back", back: "หลัง" },
    { front: "Chest", back: "อก" },
    { front: "Stomach", back: "ท้อง" },
    { front: "Knee", back: "หัวเข่า" },
    { front: "Elbow", back: "ข้อศอก" },
    { front: "Shoulder", back: "ไหล่" },
    { front: "Hair", back: "ผม" },
    { front: "Teeth", back: "ฟัน" },
    { front: "Tongue", back: "ลิ้น" },
    { front: "Skin", back: "ผิวหนัง" },
    { front: "Brain", back: "สมอง" },
    { front: "Heart", back: "หัวใจ" },
    { front: "Lung", back: "ปอด" },
    { front: "Kidney", back: "ไต" },
    { front: "Liver", back: "ตับ" },
    { front: "Foot", back: "เท้า" },
    { front: "Heel", back: "ส้นเท้า" },
    { front: "Palm", back: "ฝ่ามือ" },
    { front: "Cheek", back: "แก้ม" },
  ],
  school: [
    { front: "Pencil", back: "ดินสอ" },
    { front: "Book", back: "หนังสือ" },
    { front: "Notebook", back: "สมุดจด" },
    { front: "Eraser", back: "ยางลบ" },
    { front: "Ruler", back: "ไม้บรรทัด" },
    { front: "Pen", back: "ปากกา" },
    { front: "Desk", back: "โต๊ะเรียน" },
    { front: "Chair", back: "เก้าอี้" },
    { front: "Blackboard", back: "กระดานดำ" },
    { front: "Teacher", back: "ครู" },
    { front: "Student", back: "นักเรียน" },
    { front: "Classroom", back: "ห้องเรียน" },
    { front: "Backpack", back: "กระเป๋าเป้" },
    { front: "Scissors", back: "กรรไกร" },
    { front: "Glue", back: "กาว" },
    { front: "Calculator", back: "เครื่องคิดเลข" },
    { front: "Computer", back: "คอมพิวเตอร์" },
    { front: "Projector", back: "โปรเจคเตอร์" },
    { front: "Library", back: "ห้องสมุด" },
    { front: "Schedule", back: "ตารางเรียน" },
    { front: "Exam", back: "การสอบ" },
    { front: "Homework", back: "การบ้าน" },
    { front: "Grade", back: "เกรด" },
    { front: "Lunch", back: "อาหารกลางวัน" },
    { front: "Bus", back: "รถโรงเรียน" },
    { front: "Playground", back: "สนามเด็กเล่น" },
    { front: "Science", back: "วิทยาศาสตร์" },
    { front: "Math", back: "คณิตศาสตร์" },
    { front: "History", back: "ประวัติศาสตร์" },
    { front: "Art", back: "ศิลปะ" },
  ],
  clothes: [
    { front: "Shirt", back: "เสื้อเชิ้ต" },
    { front: "Shoes", back: "รองเท้า" },
    { front: "Pants", back: "กางเกง" },
    { front: "Dress", back: "ชุดกระโปรง" },
    { front: "Hat", back: "หมวก" },
    { front: "Jacket", back: "แจ็คเก็ต" },
    { front: "Coat", back: "เสื้อโค้ท" },
    { front: "Skirt", back: "กระโปรง" },
    { front: "T-shirt", back: "เสื้อยืด" },
    { front: "Sweater", back: "เสื้อสเวตเตอร์" },
    { front: "Tie", back: "เนคไท" },
    { front: "Gloves", back: "ถุงมือ" },
    { front: "Socks", back: "ถุงเท้า" },
    { front: "Boots", back: "รองเท้าบูท" },
    { front: "Scarf", back: "ผ้าพันคอ" },
    { front: "Belt", back: "เข็มขัด" },
    { front: "Suit", back: "ชุดสูท" },
    { front: "Underwear", back: "ชุดชั้นใน" },
    { front: "Swimsuit", back: "ชุดว่ายน้ำ" },
    { front: "Raincoat", back: "เสื้อกันฝน" },
    { front: "Jeans", back: "กางเกงยีนส์" },
    { front: "Cap", back: "หมวกแก๊ป" },
    { front: "Hoodie", back: "เสื้อฮู้ด" },
    { front: "Vest", back: "เสื้อกั๊ก" },
    { front: "Pajamas", back: "ชุดนอน" },
    { front: "Blouse", back: "เสื้อเบลาส์" },
    { front: "Cardigan", back: "เสื้อคาร์ดิแกน" },
    { front: "Flip-flops", back: "รองเท้าแตะ" },
    { front: "Mittens", back: "ถุงมือหนา" },
  ],
  food: [
    { front: "Rice", back: "ข้าว" },
    { front: "Egg", back: "ไข่" },
    { front: "Bread", back: "ขนมปัง" },
    { front: "Chicken", back: "ไก่" },
    { front: "Fish", back: "ปลา" },
    { front: "Beef", back: "เนื้อวัว" },
    { front: "Pork", back: "หมู" },
    { front: "Vegetables", back: "ผัก" },
    { front: "Fruit", back: "ผลไม้" },
    { front: "Soup", back: "ซุป" },
    { front: "Noodles", back: "บะหมี่" },
    { front: "Rice noodles", back: "ก๋วยเตี๋ยว" },
    { front: "Salad", back: "สลัด" },
    { front: "Cheese", back: "ชีส" },
    { front: "Milk", back: "นม" },
    { front: "Butter", back: "เนย" },
    { front: "Yogurt", back: "โยเกิร์ต" },
    { front: "Ice cream", back: "ไอศกรีม" },
    { front: "Cake", back: "เค้ก" },
    { front: "Chocolate", back: "ช็อกโกแลต" },
    { front: "Honey", back: "น้ำผึ้ง" },
    { front: "Salt", back: "เกลือ" },
    { front: "Pepper", back: "พริกไทย" },
    { front: "Garlic", back: "กระเทียม" },
    { front: "Onion", back: "หัวหอม" },
    { front: "Carrot", back: "แครอท" },
    { front: "Potato", back: "มันฝรั่ง" },
    { front: "Tomato", back: "มะเขือเทศ" },
    { front: "Corn", back: "ข้าวโพด" },
    { front: "Mushroom", back: "เห็ด" },
  ],
  weather: [
    { front: "Rain", back: "ฝน" },
    { front: "Sun", back: "พระอาทิตย์" },
    { front: "Cloud", back: "เมฆ" },
    { front: "Snow", back: "หิมะ" },
    { front: "Storm", back: "พายุ" },
    { front: "Wind", back: "ลม" },
    { front: "Fog", back: "หมอก" },
    { front: "Thunder", back: "ฟ้าร้อง" },
    { front: "Lightning", back: "ฟ้าแลบ" },
    { front: "Hail", back: "ลูกเห็บ" },
    { front: "Tornado", back: "พายุทอร์นาโด" },
    { front: "Humidity", back: "ความชื้น" },
    { front: "Temperature", back: "อุณหภูมิ" },
    { front: "Drizzle", back: "ฝนปรอย" },
    { front: "Breeze", back: "ลมพัดเบาๆ" },
    { front: "Drought", back: "ภัยแล้ง" },
    { front: "Flood", back: "น้ำท่วม" },
    { front: "Sunrise", back: "พระอาทิตย์ขึ้น" },
    { front: "Sunset", back: "พระอาทิตย์ตก" },
    { front: "Cloudy", back: "มีเมฆมาก" },
    { front: "Clear", back: "แจ่มใส" },
    { front: "Overcast", back: "เมฆครึ้ม" },
    { front: "Freezing", back: "เย็นจัด" },
    { front: "Warm", back: "อุ่น" },
    { front: "Cool", back: "เย็นสบาย" },
    { front: "Stormy", back: "มีพายุ" },
    { front: "Wet", back: "เปียก" },
    { front: "Dry", back: "แห้ง" },
    { front: "Snowflake", back: "เกล็ดหิมะ" },
    { front: "Rainbow", back: "รุ้งกินน้ำ" },
  ],
  transport: [
    { front: "Car", back: "รถยนต์" },
    { front: "Bus", back: "รถบัส" },
    { front: "Bicycle", back: "จักรยาน" },
    { front: "Motorcycle", back: "มอเตอร์ไซค์" },
    { front: "Train", back: "รถไฟ" },
    { front: "Airplane", back: "เครื่องบิน" },
    { front: "Boat", back: "เรือ" },
    { front: "Taxi", back: "แท็กซี่" },
    { front: "Truck", back: "รถบรรทุก" },
    { front: "Subway", back: "รถไฟใต้ดิน" },
    { front: "Helicopter", back: "เฮลิคอปเตอร์" },
    { front: "Tram", back: "รถราง" },
    { front: "Scooter", back: "สกู๊ตเตอร์" },
    { front: "Ferry", back: "เรือข้ามฟาก" },
    { front: "Van", back: "รถตู้" },
    { front: "Cart", back: "เกวียน" },
    { front: "Skateboard", back: "สเก็ตบอร์ด" },
    { front: "Segway", back: "เซกเวย์" },
    { front: "Cable car", back: "รถเคเบิล" },
    { front: "Rickshaw", back: "รถลาก" },
    { front: "Horse carriage", back: "รถม้าลาก" },
    { front: "Hovercraft", back: "เรือฮอเวอร์คราฟต์" },
    { front: "Snowmobile", back: "รถเลื่อนหิมะ" },
    { front: "Blimp", back: "บอลลูนลมร้อน" },
    { front: "Glider", back: "เครื่องร่อน" },
    { front: "Tank", back: "รถถัง" },
    { front: "Cable car", back: "รถเคเบิล" },
    { front: "Monorail", back: "รถไฟโมโนเรล" },
    { front: "Rickshaw", back: "รถลาก" },
  ],
  jobs: [
    { front: "Doctor", back: "หมอ" },
    { front: "Teacher", back: "ครู" },
    { front: "Engineer", back: "วิศวกร" },
    { front: "Nurse", back: "พยาบาล" },
    { front: "Police", back: "ตำรวจ" },
    { front: "Firefighter", back: "นักดับเพลิง" },
    { front: "Chef", back: "พ่อครัว" },
    { front: "Driver", back: "คนขับรถ" },
    { front: "Farmer", back: "ชาวนา" },
    { front: "Pilot", back: "นักบิน" },
    { front: "Dentist", back: "ทันตแพทย์" },
    { front: "Pharmacist", back: "เภสัชกร" },
    { front: "Waiter", back: "พนักงานเสิร์ฟ" },
    { front: "Secretary", back: "เลขานุการ" },
    { front: "Mechanic", back: "ช่างซ่อม" },
    { front: "Electrician", back: "ช่างไฟฟ้า" },
    { front: "Plumber", back: "ช่างประปา" },
    { front: "Architect", back: "สถาปนิก" },
    { front: "Journalist", back: "นักข่าว" },
    { front: "Scientist", back: "นักวิทยาศาสตร์" },
    { front: "Artist", back: "ศิลปิน" },
    { front: "Musician", back: "นักดนตรี" },
    { front: "Lawyer", back: "ทนายความ" },
    { front: "Judge", back: "ผู้พิพากษา" },
    { front: "Photographer", back: "ช่างภาพ" },
    { front: "Carpenter", back: "ช่างไม้" },
    { front: "Tailor", back: "ช่างตัดเสื้อ" },
    { front: "Soldier", back: "ทหาร" },
    { front: "Receptionist", back: "พนักงานต้อนรับ" },
    { front: "Translator", back: "นักแปล" },
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
