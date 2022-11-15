process.stdout.write('hello from spinner1.js... \rheyyy\n');

let ratio = 50

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    process.stdout.write('\r |   ');
  }, ratio + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r /   ');
  }, (i + 1) * ratio + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r -   ');
  }, (i + 2) * ratio + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r \\   ');
  }, (i + 3) * ratio + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r |   ');
  }, (i + 4) * ratio + (i * 1000));
}