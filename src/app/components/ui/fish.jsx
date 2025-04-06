import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FishAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Анимация пузырьков
  const bubbleVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: (i) => ({
      y: -100,
      opacity: [0.3, 0.8, 0],
      transition: {
        delay: i * 0.5,
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        repeatDelay: 1 + Math.random() * 2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      style={{
        position: "absolute", // оставляем только это
        height: "150px",
        overflow: "hidden",
        left: 0,
        top: 0,
        width: "100%",
        background: "#0693e3",
      }}
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={bubbleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            position: "absolute",
            backgroundColor: "rgba(173, 216, 230, 0.7)",
            borderRadius: "50%",
            width: `${5 + Math.random() * 5}px`,
            height: `${5 + Math.random() * 5}px`,
            left: `${10 + Math.random() * 80}%`,
            bottom: "10px",
          }}
        />
      ))}

      {/* Рыбка */}
      <motion.img
        src="./img/clown-fish.png"
        alt="Рыбка"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "-100px",
          width: "80px",
          scaleX: -1,
        }}
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={
          inView
            ? {
                x: "-120vw",
                y: [0, -15, 0, 10, 0, -5, 0], // Волнообразное движение по вертикали
                rotate: [0, -5, 3, -2, 0], // Легкие повороты
                transition: {
                  x: { duration: 10, ease: "linear" },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }
            : {}
        }
      />
    </div>
  );
};

export default FishAnimation;
