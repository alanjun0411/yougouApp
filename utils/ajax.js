const ajax = (config = {}) => {
	if (config.url.search(/^http/) === -1) {
		config.url = "https://api-hmugo-web.itheima.net/api/public/v1" + config.url
	}
	config.method = config.method || "GET"
	return new Promise((resolve, reject) => {
		uni.request({
			...config,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
export default ajax