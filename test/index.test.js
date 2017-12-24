const supertest = require('supertest')
const app = require('../src')

const request = supertest.agent(app.listen())

describe('Sputnik', () => {
  describe('GET /', () => {
    it('should see "Mother Russia"', async () =>
      request
        .get('/')
        .expect(200)
        .then((res) => {
          expect(res.text).toBe('Mother Russia')
        })
    )
  })

  describe('GET /ping', () => {
    it('should see "pong"', async () =>
      request
        .get('/ping')
        .expect(200)
        .then((res) => {
          expect(res.text).toBe('pong')
        })
    )
  })

  describe('GET /pong', () => {
    it('should see "ping"', async () =>
      request
        .get('/pong')
        .expect(200)
        .then((res) => {
          expect(res.text).toBe('ping')
        })
    )
  })
})
