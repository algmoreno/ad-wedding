"use client";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import "@/styles/globals.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);


  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function GalleryStack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "..." },
          { id: 2, img: "..." },
          { id: 3, img: "..." },
          { id: 4, img: "..." }
        ]
  );

  // ✅ State to hold fixed random tilts after hydration
  const [cardTilts, setCardTilts] = useState([]);

  useEffect(() => {
    if (randomRotation) {
      // Only run on client to avoid SSR mismatch
      setCardTilts(
        cards.map(() => Math.random() * 10 - 5) // -5° to +5° random tilt
      );
    } else {
      setCardTilts(cards.map(() => 0));
    }
  }, [cards.length, randomRotation]); // recalc if number of cards changes

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container m-auto"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {cards.map((card, index) => {
        const isFront = index === cards.length - 1;

        // If cardTilts isn’t ready yet (SSR phase), default to 0
        const tilt = cardTilts[index] || 0;

        // Symmetrical spread: alternate left/right tilt for back cards
        const fanAngle = isFront ? 0 : ((index % 2 === 0 ? 1 : -1) * Math.abs(tilt));

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: fanAngle,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%"
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="card-image"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
