//index.js
// const app = getApp()

// Page({
//   data: {
//     avatarUrl: './user-unlogin.png',
//     userInfo: {},
//     logged: false,
//     takeSession: false,
//     requestResult: ''
//   },

//   onLoad: function() {
//     if (!wx.cloud) {
//       wx.redirectTo({
//         url: '../chooseLib/chooseLib',
//       })
//       return
//     }

//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               this.setData({
//                 avatarUrl: res.userInfo.avatarUrl,
//                 userInfo: res.userInfo
//               })
//             }
//           })
//         }
//       }
//     })
//   },

//   onGetUserInfo: function(e) {
//     if (!this.data.logged && e.detail.userInfo) {
//       this.setData({
//         logged: true,
//         avatarUrl: e.detail.userInfo.avatarUrl,
//         userInfo: e.detail.userInfo
//       })
//     }
//   },

//   onGetOpenid: function() {
//     // 调用云函数
//     wx.cloud.callFunction({
//       name: 'login',
//       data: {},
//       success: res => {
//         console.log('[云函数] [login] user openid: ', res.result.openid)
//         app.globalData.openid = res.result.openid
//         wx.navigateTo({
//           url: '../userConsole/userConsole',
//         })
//       },
//       fail: err => {
//         console.error('[云函数] [login] 调用失败', err)
//         wx.navigateTo({
//           url: '../deployFunctions/deployFunctions',
//         })
//       }
//     })
//   },

//   // 上传图片
//   doUpload: function () {
//     // 选择图片
//     wx.chooseImage({
//       count: 1,
//       sizeType: ['compressed'],
//       sourceType: ['album', 'camera'],
//       success: function (res) {

//         wx.showLoading({
//           title: '上传中',
//         })

//         const filePath = res.tempFilePaths[0]
        
//         // 上传图片
//         const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
//         wx.cloud.uploadFile({
//           cloudPath,
//           filePath,
//           success: res => {
//             console.log('[上传文件] 成功：', res)

//             app.globalData.fileID = res.fileID
//             app.globalData.cloudPath = cloudPath
//             app.globalData.imagePath = filePath
            
//             wx.navigateTo({
//               url: '../storageConsole/storageConsole'
//             })
//           },
//           fail: e => {
//             console.error('[上传文件] 失败：', e)
//             wx.showToast({
//               icon: 'none',
//               title: '上传失败',
//             })
//           },
//           complete: () => {
//             wx.hideLoading()
//           }
//         })

//       },
//       fail: e => {
//         console.error(e)
//       }
//     })
//   },

// })
//引入本地json数据，这里引入的就是第一步定义的json数据

var getData = require('../../data/data.js');



Page({

  data: {

    imgUrls: [],

    indicatorDots: true,

    autoplay: true,

    interval: 5000,

    duration: 1000,

    toView: 'red',

    scrollTop: 100,

    author: 'oreo是我呀',

    leassonList: [],

    actIndex: 'first',

    leassonId: ''

  },

  upper: function(e) {

    console.log(e)

  },

  lower: function(e) {

    console.log(e)

  },

  scroll: function(e) {

    console.log(e)

  },

  tap: function(e) {

    for (var i = 0; i < order.length; ++i) {

      if (order[i] === this.data.toView) {

        this.setData({

          toView: order[i + 1]

        })

        break

      }

    }

  },

  tapMove: function(e) {

    this.setData({

      scrollTop: this.data.scrollTop + 10

    })

  },

  // tab切换事件

  changeMenu: function(e) {

    this.setData({

      actIndex: e.currentTarget.id

    })

    if (this.data.actIndex == 'first') {

      var arr = []

      for (var i = 0; i < getData.detailList.length; i++) {

        console.log(getData.detailList[i].leassonType)

        if (getData.detailList[i].leassonType == 1) {

          arr.push({

            id: getData.detailList[i].id,

            imgUrl: getData.detailList[i].imgUrl,

            title: getData.detailList[i].title,

            leassonType: getData.detailList[i].leassonType,

          })

        }

      }

      this.setData({

        leassonList: arr.reverse()

      })

    } else if (this.data.actIndex == 'second') {

      var arr = []

      for (var i = 0; i < getData.detailList.length; i++) {

        console.log(getData.detailList[i].leassonType)

        if (getData.detailList[i].leassonType == 2) {

          arr.push({

            id: getData.detailList[i].id,

            imgUrl: getData.detailList[i].imgUrl,

            title: getData.detailList[i].title,

            leassonType: getData.detailList[i].leassonType,

          })

        }

      }

      this.setData({

        leassonList: arr.reverse()

      })

    } else if (this.data.actIndex == 'third') {

      var arr = []

      for (var i = 0; i < getData.detailList.length; i++) {

        console.log(getData.detailList[i].leassonType)

        if (getData.detailList[i].leassonType == 3) {

          arr.push({

            id: getData.detailList[i].id,

            imgUrl: getData.detailList[i].imgUrl,

            title: getData.detailList[i].title,

            leassonType: getData.detailList[i].leassonType,

          })

        }

      }

      this.setData({

        leassonList: arr.reverse()

      })

    }

  },

  onLoad: function() {

    console.log(getData)

    var arr = []

    for (var i = 0; i < getData.detailList.length; i++) {

      console.log(getData.detailList[i].leassonType)

      if (getData.detailList[i].leassonType == 1) {

        arr.push({

          id: getData.detailList[i].id,

          imgUrl: getData.detailList[i].imgUrl,

          title: getData.detailList[i].title,

          leassonType: getData.detailList[i].leassonType,

        })

      }

    }

    this.setData({

      imgUrls: getData.bannerList,

      leassonList: arr.reverse()

    })

  },

  //详情页面

  seeDetail: function(e) {

    console.log(e)

    this.setData({

      leassonId: e.currentTarget.dataset.id

    })

    wx.navigateTo({

      url: '../detail/detail?id=' + this.data.leassonId

    })

  },

  /**

   * 用户点击右上角分享

   */

  onShareAppMessage: function() {

    return {

      title: '分享你的生活',

      path: 'pages/index/index'

    }

  }

})