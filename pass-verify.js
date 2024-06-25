const bcrypt = require('bcrypt');

async function verfyPassword(){
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$ydQGHfiM/K/5os6w3bVZxeI5reEh/WGSjb6hgJQVBJIheS.b/W8Im';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verfyPassword();
