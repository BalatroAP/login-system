import app from "./server.js";

function main() {
  const PORT = 3000;

  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (err) {
    console.error(`Server could not start on port: ${PORT}`);
  }
}

main();
