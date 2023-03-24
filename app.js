import fs from "fs";
import path from "path";

export default function ReadableStreamDemo() {
  const readableStream = fs.createReadStream("./filesystem/article.txt", {
    highWaterMark: 10,
  });

  readableStream.on("readable", () => {
    try {
      process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
      // catch the error when the chunk cannot be read.
      console.log("{{ error }}");
    }
  });

  readableStream.on("end", () => {
    console.log("Done");
  });
}

// export default function app() {
//   const fileReadCallback = (error, data) => {
//     if (error) {
//       console.log("Gagal membaca berkas");
//       return;
//     }
//     console.log(data);
//   };

//   const readFiles = fs.readdirSync("filesystem");

//   /** to be fixed */
//   const allSources = readFiles.reduce((allSource, val) => {
//     const data = fs.readFileSync(`filesystem/${val}`, "UTF-8");
//     return [...allSource, data];
//   }, []);
//   /** to be fixed */

//   allSources.forEach((val) => console.log(val, "\n"));
// }

// export default function nowTo2030() {
//   const today = new Date();
//   const newYear = new Date("2030-01-01");

//   const timeDiff = newYear.getTime() - today.getTime();
//   const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

//   console.log(
//     `There are ${Math.floor(daysDiff)} days until January 1st, 2030.`
//   );
// }

// export default function featureTest() {
//   console.log(path.resolve("filesystem", "notes.txt"));
// }

// console.log(fs.readdirSync("filesystem"));

// fs.readFile("todo.txt", "UTF-8", fileReadCallback);

// const data = fs.readFileSync("todo.txt", "UTF-8");
// console.log(data);
