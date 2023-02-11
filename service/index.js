import { TOKEN_KEY } from "../constants/token-const";

const token = wx.getStorageSync(TOKEN_KEY);

// const BASE_URL = "http://123.207.32.32:9001";
const BASE_URL = "http://localhost:3000";

const LOGIN_BASE_URL = "http://123.207.32.32:3000";

class MiniProgramMusicRequest {
  constructor(baseURL, authHeader = {}) {
    this.baseURL = baseURL;
    this.authHeader = authHeader;
  }

  request(url, method, params, isAuth = false, header = {}) {
    const finalHeader = isAuth ? { ...this.authHeader, ...header } : header;
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: method,
        data: params,
        header: finalHeader,
        success: function (res) {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }

  get(url, params, isAuth = false, header) {
    return this.request(url, "GET", params, isAuth, header);
  }

  post(url, data, isAuth = false, header) {
    return this.request(url, "POST", data, isAuth, header);
  }
}

const request = new MiniProgramMusicRequest(BASE_URL);

const loginRequest = new MiniProgramMusicRequest(LOGIN_BASE_URL, { token });

export default request;
export { loginRequest };
