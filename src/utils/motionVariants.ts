const springTransition = {
  duration: 0.8,
  type: 'spring',
  bounce: 0.1,
};

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
      delay: 0.2,
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

export const formVariants = {
  hidden: {
    x: '-100%',
  },
  show: {
    x: 0,
    transition: springTransition,
  },
  exit: {
    x: '-100%',
    transition: springTransition,
  },
};

export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    transition: springTransition,
  },
};
