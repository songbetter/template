const keys = {
  all: ['review'],
  detail: id => [...keys.all, id],
};

export default keys;
