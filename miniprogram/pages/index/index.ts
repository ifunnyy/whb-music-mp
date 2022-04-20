// index.ts

import { sayHello } from "../..//api/hello"

Page({
  data: {
    message: 'Hello World'
  },
  async hi() {
    const response = await sayHello();
    this.setData({
      message: response.data.name
    })
  }
})
