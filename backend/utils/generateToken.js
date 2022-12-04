import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
  return jwt.sign({ id }, "ANCBUHWERIUWEYRTUYUWEYIUYU", {
    expiresIn: '1h',
  })
}
