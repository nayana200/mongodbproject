const payload = {}
const secret = process.env.ACCESS_TOKEN_SECRET
const options = {
    expiresIn: '15s',
    expiresIn: '1h',
    issuer: 'pickurpage.com',
    audience: userId,
}