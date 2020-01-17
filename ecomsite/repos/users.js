const fs = require("fs");
const crypto = require("crypto");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repo requires a filename");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8"
      })
    );
  }

  async create(attributes) {
    attributes.id = this.randomID();
    const records = await this.getAll();
    records.push(attributes);
    await this.writeAll(records);
    return attributes;
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  randomID() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find(record => record.id === id);
  }

  async deleteOne(id) {
    const records = await this.getAll();
    const filterRecords = records.filter(user => user.id !== id);
    await this.writeAll(filterRecords);
  }

  async update(id, attributes) {
    const records = await this.getAll();
    const record = records.find(record => record.id === id);
    if (!record) {
      throw new Error(`Record with ${id} not found`);
    }
    Object.assign(record, attributes);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();
    for (let record of records) {
      let found = true;
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }
      if (found) {
        return record;
      }
    }
  }
}

module.exports = new UsersRepository("users.json");

// const test = async () => {
//   const repo = new UsersRepository("users.json");
//   await repo.create({ email: "test@email.com" });
//   // await repo.create({ email: "steven@email.com", password: "1234" });
//   // await repo.create({ email: "boy@email.com", password: "1234" });
//   // const user = await repo.deleteOne("265abfc4");
//   // const users = await repo.getAll();
//   // console.log(users);
//   const user = await repo.getOneBy({ password: "no papisadasdasdas" });
//   console.log(user);
// };
//
// test();
// console.log("working");
