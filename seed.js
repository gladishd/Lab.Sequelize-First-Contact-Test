// This is our seed file. We'll import our Sequelize models from
// ./database/index and create some dummy data in the database. Seeding a
// database is very useful for development.
const { blue, cyan, green, red } = require('chalk');
const { db, Plant } = require('./database');

async function seed() {
  try {
    console.log(cyan('📡 Connecting to the database...'));
    // Connect to the database
    // ^^^ Code above omitted for brevity
    console.log(cyan("📡 Connecting to the database..."))
    // Connect to the database
    await db.sync({ force: true }) // 👈 Add this line

    // vvv Code below omitted for brevity

    console.log(blue('🌱 Seeding the database...'));
    await Plant.create({ name: 'Cauliflower' }); // 👈 Add this line. You can add a different vegetable if you don't like cauliflower.
    await Plant.create({ name: "hello" })

    // Seed the database

    // Close the database connection
    await db.close();

    console.log(green('🌲 Finished seeding the database!'));
    await db.close();
  } catch (err) {
    console.log(red('🔥 An error occured!!'));
    console.error(err);
    await db.close();
  }
}
seed();
