import { useState, useEffect } from 'preact/hooks'
import './app.css'
const quiz = [
  {
    question: "ถ้าเจอแมว 1 ตัวบนถนน เธอจะทำยังไง?",
    choices: ["เดินผ่าน", "ลูบหัว", "พากลับบ้าน"]
  },
  {
    question: "ถ้าวันนี้ฝนตก เธอเลือกที่จะ…",
    choices: ["นอน 🛌", "ดูหนัง 🍿", "คิดถึงใครบางคน 💭"]
  },
  {
    question: "ถ้าเธอเลือกได้ 1 อย่าง:",
    choices: ["เงิน 💰", "เวลา ⏱️", "เค้า 😜"]
  },
  {
    question: "ถ้าเค้าบอกว่าคิดถึงเธอจะ...:",
    choices: ["มาหาเค้า", "มาหาเค้า 😆", "มาหาเค้า 🤪"]
  },
  {
    question: "เอาจริง ๆ นะ…ยังคิดว่านี่เป็น quiz อยู่ปะ?",
    choices: ["ใช่", "เริ่มไม่แน่ใจ", "รู้ละว่าโดนหลอก 😂"]
  },
  {
    question: "คำถามสุดท้ายละ ถ้าให้เลือกอย่างนึงเธอจะเลือกอะไร",
    choices: ["เธอเป็นแฟนเค้า", "เค้าเป็นแฟนเธอ", "เราเป็นแฟนกัน"]
  }
];
export function App() {
  const [current, setCurrent] = useState(0)
  const [showModal, setShowModal] = useState(true)
  const [showModalResult, setShowModalResult] = useState(false)

   useEffect(() => {
    setShowModal(true); // เปิดตอนเข้าเว็บ
    setCurrent(0);
  }, []);
  
  const handleClick = () => {
    if (current < quiz.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowModalResult(true)
    }
  };

  const q = quiz[current];
  return (
    <>
      <div>
        {showModal && (
          <div className="modal-overlay">
           <div className="modal">
              <h2>คำเตือน ⚠️</h2>
              <h3>เล่นจบระวังถูกรัก 💖</h3>
              <button onClick={() => setShowModal(false)}>
                เริ่มเลย
              </button>
            </div>
          </div>
        )}
        <div class="outer-box">
          <h6>**ไม่เก็บ log เล่นได้เลยเค้าไม่รู้คำตอบ**</h6>
          <p>ข้อ {current+1}/{quiz.length}</p>
          <p class="question">Q: {q.question}</p>
          {q.choices.map((choice, i) => (
          <div class="answer-box">
              <button className={`ans-btn ans-${i+1}`} onClick={handleClick}>{choice}</button><br></br>
          </div>
          ))}
        </div>
        {showModalResult && (
          <div className="modal-overlay">
           <div className="modal">
              <h2>เฉลยผลลัพธ์:</h2>
              <p>
                เธอเป็นคนประเภท... <br></br>
                “โดนเค้าหลอกให้เล่นจนจบ” 🤣 <br></br>
                แต่ที่บอกว่ารักอะ ไม่ได้หลอกนะ 💖
              </p>
              <button onClick={() => setShowModalResult(false)}>
                ปิด
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
