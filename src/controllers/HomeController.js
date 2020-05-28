const redisConfig = require('../config/redisConfig')
class HomeController {
	async index(request, response) {
		request.subscriber.subscribe('channel')

		return response.json({ ok: true })
	}
}

module.exports = new HomeController();
