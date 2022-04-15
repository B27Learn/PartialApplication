'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// solution is too short 👇
// const nowDate = new Date().toISOString().slice(0, 10);
const tagDate = (str) => {
  const date = new Date().toISOString();
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return tagged(`${year}-${month}-${day}`, str);
};

module.exports = { tagDate };
