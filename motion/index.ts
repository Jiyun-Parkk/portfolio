export const FlipVerticalMotion = {
  start: {
    opacity: 0,
    y: 20,
    rotateX: 180,
  },
  end: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
};

export const FlipHorizontalMotion = {
  start: {
    opacity: 0,
    rotateY: 180,
  },
  end: {
    opacity: 1,
    rotateY: 0,
  },
};

export const StaggerMotion = {
  start: {
    opacity: 0,
    y: 20,
    rotateX: 180,
  },
  end: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export const ShowupMotion = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export const ShowMotion = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

export const ShakeMotion = {
  start: {
    y: -10,
  },
  end: {
    y: 0,
  },
};
