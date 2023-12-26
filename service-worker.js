/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c2ceeee26b0515c745e550851fc824f"
  },
  {
    "url": "assets/css/0.styles.f730c823.css",
    "revision": "e1fe8e49396e157106a91e2e6551fd00"
  },
  {
    "url": "assets/img/deleteProjects.aadb85b5.jpg",
    "revision": "aadb85b576a0ddfdf59881f505324ebd"
  },
  {
    "url": "assets/img/deleteProjectsErr.c43f7523.jpg",
    "revision": "c43f75239ea94aa4ae49aa2b4ecae7fb"
  },
  {
    "url": "assets/img/deleteRoleGrant.a1bc02ca.jpg",
    "revision": "a1bc02cabdda0e73e3373a8639efacef"
  },
  {
    "url": "assets/img/getProjects.86065dc1.jpg",
    "revision": "86065dc18b2002be0b3c0b5e40a200a8"
  },
  {
    "url": "assets/img/getRoleGrants.c1b8368d.jpg",
    "revision": "c1b8368d35308cb64f709b6d723becd0"
  },
  {
    "url": "assets/img/postErrProjects.8999b9cc.jpg",
    "revision": "8999b9cc10b1869b97dc9910df706841"
  },
  {
    "url": "assets/img/postProjects.8a6ce07e.jpg",
    "revision": "8a6ce07ebf6fad492e7632d54051f821"
  },
  {
    "url": "assets/img/postRoleGrantErr.564d7979.jpg",
    "revision": "564d7979824c0674e40adbe32c88efd9"
  },
  {
    "url": "assets/img/postRoleGrants.813640b0.jpg",
    "revision": "813640b00291292dba17a6ca9e2ee8f9"
  },
  {
    "url": "assets/img/runProgram.37cc24be.jpg",
    "revision": "37cc24bebb7b800ce0d5d4c5b927e12c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/startProgram.49b871bf.jpg",
    "revision": "49b871bfe78acdc3c96674c017679a22"
  },
  {
    "url": "assets/img/updateProjects.c3d34f0a.jpg",
    "revision": "c3d34f0a972da13e6cdc9157a424b26d"
  },
  {
    "url": "assets/js/10.eb16c742.js",
    "revision": "0462b08e2d13728ec9c2fb460bfc2ff7"
  },
  {
    "url": "assets/js/11.9f95bcea.js",
    "revision": "c75aad72b17e49d4b15996b43d37148f"
  },
  {
    "url": "assets/js/12.21fae77a.js",
    "revision": "141802a57741398351f7dafa27475b53"
  },
  {
    "url": "assets/js/13.033738b9.js",
    "revision": "578da4254193a1b62f04dcfa3fcf63ea"
  },
  {
    "url": "assets/js/14.5941802d.js",
    "revision": "d56dc17a74faefebf903f9dc80455982"
  },
  {
    "url": "assets/js/15.119334d1.js",
    "revision": "f188577397eff9882e792c9c4702e574"
  },
  {
    "url": "assets/js/16.201723f5.js",
    "revision": "15a60880ccad21c22ccd2681836722f5"
  },
  {
    "url": "assets/js/17.3efddd89.js",
    "revision": "bfd0789a469f0a4b57431ae417cf2713"
  },
  {
    "url": "assets/js/18.da80ce7f.js",
    "revision": "717de22e34a229159ea73a99246f7a4e"
  },
  {
    "url": "assets/js/19.855f0a2f.js",
    "revision": "cbe503c29e6ad51785cf422b58e8bc9a"
  },
  {
    "url": "assets/js/2.b3766421.js",
    "revision": "6e385980e1361a82053c75467019136d"
  },
  {
    "url": "assets/js/20.d8eaa887.js",
    "revision": "13fd923d26566076282c331fa8bae30a"
  },
  {
    "url": "assets/js/21.5dfa310e.js",
    "revision": "4edc0610c1e778eb2ec2aa83e8b5ed22"
  },
  {
    "url": "assets/js/22.27a8c14b.js",
    "revision": "8b536ec0f421cee6e98e745658311d49"
  },
  {
    "url": "assets/js/23.1831dbc9.js",
    "revision": "cffcef8e17def723488b421b8b3a9ac0"
  },
  {
    "url": "assets/js/24.6175ea94.js",
    "revision": "0d003f9c1975ad1faa4f2f8b2f620775"
  },
  {
    "url": "assets/js/26.d055c4e2.js",
    "revision": "72ceaebfab60dab1c69530cf4a1c6117"
  },
  {
    "url": "assets/js/3.80e64538.js",
    "revision": "a3dd678faa1039d1d350b8372161e134"
  },
  {
    "url": "assets/js/4.47bd8645.js",
    "revision": "1f5d106ae36de262c9dc9e3d06fd3da8"
  },
  {
    "url": "assets/js/5.bb25f919.js",
    "revision": "2e688bc88dc1351c9748b25b8258bf19"
  },
  {
    "url": "assets/js/6.5f069b17.js",
    "revision": "d7a9f3c1277b47974b07a41ea4ab1134"
  },
  {
    "url": "assets/js/7.5ff1b33f.js",
    "revision": "cb29f8aaf0845b8f129f8c3496f1215d"
  },
  {
    "url": "assets/js/8.41a96ea7.js",
    "revision": "9e76e554525db01fa2088c8714e67270"
  },
  {
    "url": "assets/js/9.4ed8c080.js",
    "revision": "4119d9ce5fe2ca70e543b1e6e733a4fc"
  },
  {
    "url": "assets/js/app.d007e7e9.js",
    "revision": "8108bbddcb848c806ff8d4ed375a7d8f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4b5f0161ae97af71ec26ad427c0f57e2"
  },
  {
    "url": "design/index.html",
    "revision": "95061ddc1b0515e56221c0a0720826a3"
  },
  {
    "url": "index.html",
    "revision": "4a252e82abf01ab2b7f0f3b1ad3ec2d2"
  },
  {
    "url": "intro/index.html",
    "revision": "9c9b3805ee0c787cdbba785de8ed4b0a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8b128a0ac078588060d9fbba10944b75"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "10d447d195aaefd2c240290518e97208"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "00037c2fbb51ba71b6785763879092b5"
  },
  {
    "url": "software/index.html",
    "revision": "da8ae898524c61d8f3d7d056b4e22665"
  },
  {
    "url": "test/index.html",
    "revision": "7a5a1a8874c4214a59c1935ffdb12736"
  },
  {
    "url": "use cases/index.html",
    "revision": "71517c3d73097272da17d0ec9e002b0d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
