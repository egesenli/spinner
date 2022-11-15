process.stdout.write('hello from spinner2.js... \rheyyy\n');

let ratio = 50;

let spinner = ['\r |', '\r /   ', '\r -   ', '\r \\   ','\r |   ' ];
for (let i = 0; i < 100; i++) {
  for (const r of spinner) {
    setTimeout(() => {
      process.stdout.write(r);
    }, ratio + (i * 1000))
    ratio += 50;
  }
}