const fs = require("fs-extra");
const path = require("path");

async function copyTemplates() {
  try {
    await fs.copy(
      path.join(__dirname, "../src/templates"),
      path.join(__dirname, "../dist/templates")
    );
  } catch (err) {
    console.error("Error copying templates:", err);
    process.exit(1);
  }
}

copyTemplates();
