const UserService = require('../services/UserService');

const createUser = async (req, res) => {
  try {
      const response = await UserService.createUser(req.body)
      if (response.status === 'OK') {
          return res.status(200).json(response)
      } else {
          return res.status(400).json(response) 
      }
  } catch (e) {
      return res.status(500).json({ error: e.message }) 
  }
}

const loginUser = async (req, res) => {
  try {
      const response = await UserService.loginUser(req.body)
      const { refresh_token, ...newReponse } = response
      res.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
          path: '/',
      })
      if (response.status === 'OK') {
          return res.status(200).json({...newReponse, refresh_token})
      } else {
          return res.status(400).json(response) 
      }
  } catch (e) {
      return res.status(500).json({
          message: e
      })
  }
}

const logout = async (req, res, next) => {
    try {
      
    } catch (error) {
      
    }
}

module.exports = {
  createUser,
  loginUser,
  logout
}
