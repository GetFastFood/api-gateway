const crypto = require('crypto');

function encrypt (text, key) {
    try {
      const IV_LENGTH = 16 // For AES, this is always 16
      let iv = crypto.randomBytes(IV_LENGTH)
      let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
      let encrypted = cipher.update(text)
  
      encrypted = Buffer.concat([encrypted, cipher.final()])
  
      return iv.toString('hex') + ':' + encrypted.toString('hex')
    } catch (err) {
      throw err
    }
  }
  
  function decrypt (text, key) {
    try {
      let textParts = text.split(':')
      let iv = Buffer.from(textParts.shift(), 'hex')
      let encryptedText = Buffer.from(textParts.join(':'), 'hex')
      let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
      let decrypted = decipher.update(encryptedText)
  
      decrypted = Buffer.concat([decrypted, decipher.final()])
  
      return decrypted.toString()
    } catch (err) {
      throw err
    }
  }
  

module.exports = { encrypt, decrypt };