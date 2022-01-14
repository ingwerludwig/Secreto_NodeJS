# secret.in

secret.in is a web app to create, retrive, update, delete (CRUD)

## Installation

Install the node package manager (npm) to use app modules.

```bash
npm install
```

## Usage

Make sure to install [MySQL](https://dev.mysql.com/downloads/installer/) as your operating system

```javascript
# Use this query to create Database (IMPORTANT!!)
CREATE DATABASE user_feedback;

# Run your app
npm start

# Use Seed
npm seed

# Undo Seed
npm undo-seed

# Migrate Database
npm run migrate

# Revert Migrate Database
npm run down
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
