export const slideFromLeft = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.35,
      easings: ['easeOut'],
    },
  },
  exit: {
    opacity: 0,
    x: 25,
    transition: {
      duration: 0.35,
      easings: ['easeOut'],
    },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      easings: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      easings: 'easeIn',
    },
  },
};
