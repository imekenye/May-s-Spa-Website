export const imgVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      damping: 100,
      delay: 1,
    },
  },
};

export const openVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      damping: 100,
      delay: 2,
    },
  },
};

export const heroVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      damping: 100,
      delay: 1.5,
    },
  },
};
