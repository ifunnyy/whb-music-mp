const baseUrl = 'https://whb-music-1839650-1311324754.ap-shanghai.run.tcloudbase.com/api'

export function get<T, D = ResponseResult<T>>(uri: string): Promise<D> {
    wx.showLoading({
        title: '加载中'
    })

    return new Promise((resolve, reject) => {
        wx.request<D>({
            url: baseUrl + uri,
            method: 'GET',
            success: (res) => {
                handleHttpError(res, reject);
                resolve(res.data)
            },
            fail: (res) => {
                handleHttpError(res, reject);
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    })
}

// 错误处理
function handleHttpError(response: any, reject: (reason?: any) => void) {
    if (response.statusCode != 200) {
        reject('请求错误，请重试')
    }
}
