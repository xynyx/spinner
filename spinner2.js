let timer = 100;
const chars = [‘|',‘/’, ‘-’, ‘\\‘, ‘|', ‘/’, ‘-’, ‘\\‘, ‘|'];
for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer += 200);
};
setTimeout(() => {
  process.stdout.write(‘\r   \n’);
}, 1900);
