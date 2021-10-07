const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const { hashSync, compareSync  } = require('bcrypt')
const { resolve } = require('path')
const { json } = require('body-parser')

const server = jsonServer.create();

const userdb = JSON.parse(fs.readFileSync(resolve('./fake-api/users.json'), 'UTF-8'))
const salesdb = JSON.parse(fs.readFileSync(resolve('./fake-api/sales.json'), 'UTF-8'))

// Secret word 'cashmeback' hashed md5
const SECRET_KEY = '9f0594d701a21395dce53684d39517c9'
const expiresIn = '1h'

server.use(jsonServer.defaults());
server.use(json());

// Create a token from a payload 
function createToken( payload ){
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken( token ){
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return userdb.users.find(user => user.email === email && compareSync(password, user.password) === true ? user : null);
}

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body

  if (!email | !password) {
    return res.status(400).json({ error: 'Email or password not provided'})
  }

  const userIsAuthenticate = isAuthenticated({email, password});

  if (!userIsAuthenticate) {
    return res.status(401).json({ error: 'Incorrect email or password'})
  }

  const access_token = createToken(userIsAuthenticate)

  res.status(200).json({ access_token })
})

server.post('/users', (req, res) => {
  const { name, cpf, email, password } = req.body;

  if (!name | !cpf | !email | !password ) {
    return res.status(400).json({ error: 'User infos not provided'})
  }

  const userEmailAlreadyInUse = userdb.users.find(user => user.email === email);

  if (userEmailAlreadyInUse) {
    return res.status(400).json({ error: 'Email already in use'})
  }

  const passwordHashed = hashSync(password, 8);

  const user = {
    id: 
    name, 
    cpf, 
    email, 
    password: passwordHashed
  }

  userdb.users.push(user)

  fs.writeFileSync(resolve('./fake-api/users.json'), JSON.stringify(userdb))

  return res.status(201).json({ info: "User created" });
})

//Authentication token middleware 
server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Token is not provided'})
  }
  try {
     verifyToken(req.headers.authorization.split(' ')[1])
     next();
  } catch (err) {
    return res.status(401).json({ error: 'Access token is not valid'})
  }
})

server.get('/sales', (req, res) => {
  const user_id = Number(req.query.id);

  if(!user_id) {
    return res.status(400).json({ error: 'Id for user sales not provided'})
  }
  
  const sales = salesdb.sales.filter(sale => sale.user_id === user_id);

  return res.status(200).json(sales);
})

server.post('/sales', (req, res) => {
  const user_id = Number(req.query.id);
  const { sale_code, amount, sale_date } = req.body;

  if(!user_id) {
    return res.status(400).json({ error: 'Id for user sale not provided'})
  }

  if (!sale_code | !amount | !sale_date) {
    return res.status(400).json({ error: 'Sale infos not provided'})
  }

  const saleWithSameCode = salesdb.sales.find(sale => sale.sale_code === sale_code);

  if (saleWithSameCode) {
    return res.status(400).json({ error: 'Already exists a sale with this code'})
  }

  salesdb.sales.push({ id: '1', user_id, sale_code, amount: amount * 100, sale_date, percent_cashback: 15, cashback_amount: (amount * (15/100)) * 100, sale_status: "APROVADA" })

  fs.writeFileSync(resolve('./fake-api/sales.json'), JSON.stringify(salesdb));

  return res.status(201).json({ info: 'Sale created success!' })
})

server.listen(3333, () => {
  console.log('Run Auth API Server')
})