module.exports = {
    sendResult(data = {},code = 0,message = '') {

        let codeMessage = {
            0: 'success',
            4001: '缺少必要参数'
        }

        return {
            code,
            data,
            message: message || codeMessage[code]
        }
    }
}