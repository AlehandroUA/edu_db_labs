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
    "revision": "c5947b4e9d0dfb154939d6906f19d00a"
  },
  {
    "url": "assets/css/0.styles.1e5a53e3.css",
    "revision": "e1675fee86bc6d1e693787c4d261d0d3"
  },
  {
    "url": "assets/img/add_payment_test.64afe95c.png",
    "revision": "64afe95c7bc48703be6f4915907ccdbd"
  },
  {
    "url": "assets/img/add_payment.16049578.png",
    "revision": "160495783c19b38c793dd90a18224aef"
  },
  {
    "url": "assets/img/delete_payment_test.650601b1.png",
    "revision": "650601b1c34532eb9e566d1bedc8c5d2"
  },
  {
    "url": "assets/img/delete_payment.e0557188.png",
    "revision": "e0557188f47e029eaa2c5d7bd119a380"
  },
  {
    "url": "assets/img/get_payment_by_id.7b7469a0.png",
    "revision": "7b7469a0a2bd68222a01768aa48f5db7"
  },
  {
    "url": "assets/img/get_payments_by_project_id.6ccb9d00.png",
    "revision": "6ccb9d00d4409bd914a947e07cb70c1d"
  },
  {
    "url": "assets/img/get_payments.61f7eb5a.png",
    "revision": "61f7eb5a2bb32c3eca8585eb92b8b424"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_payment_test.4d7ebb46.png",
    "revision": "4d7ebb46acfbd978321e945f15685bad"
  },
  {
    "url": "assets/img/update_payment.33ef2503.png",
    "revision": "33ef2503d77d22ae639727b2efa8a41b"
  },
  {
    "url": "assets/js/1.d1aae1ba.js",
    "revision": "e327c91389c581c7e87a94a6b46e8da5"
  },
  {
    "url": "assets/js/10.1480a105.js",
    "revision": "a2c8d6dbd2c5534e06a0469f5e5be230"
  },
  {
    "url": "assets/js/13.fa04081f.js",
    "revision": "f3e06dc4f894a393f17024c5029f0d89"
  },
  {
    "url": "assets/js/14.8f152714.js",
    "revision": "00ba53c49061d163593ec25330721735"
  },
  {
    "url": "assets/js/15.91c24706.js",
    "revision": "2361a36c1d4a55ea47a942e2da9812a0"
  },
  {
    "url": "assets/js/16.71cf2634.js",
    "revision": "c225426bbecc3573489fc19537833bbe"
  },
  {
    "url": "assets/js/17.40a918a4.js",
    "revision": "b955e14c41f6c05543ad641824e95d19"
  },
  {
    "url": "assets/js/18.15adf88e.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.6010a24d.js",
    "revision": "45db4b71d30831cb67fc7d0be4d7767f"
  },
  {
    "url": "assets/js/20.ad2f3ef0.js",
    "revision": "22b57d887617565ed937e383000d0a24"
  },
  {
    "url": "assets/js/21.99b82fa4.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.c67875c4.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.a775c2fa.js",
    "revision": "e6cae50874390355e41c7ffd7c3b46a5"
  },
  {
    "url": "assets/js/25.e0495cad.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.ad577dbc.js",
    "revision": "15c785f28027fbb9c69a924ef7a17245"
  },
  {
    "url": "assets/js/27.5a575ac0.js",
    "revision": "3da310e9c588a02a77d278ba82c9e4d2"
  },
  {
    "url": "assets/js/28.0aad70fc.js",
    "revision": "6ead34b6f92e1b73554d36e399ea29f2"
  },
  {
    "url": "assets/js/29.6944b056.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5fb97a49.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.fefa69ca.js",
    "revision": "011c2faa22e6833d2b84e1033013db54"
  },
  {
    "url": "assets/js/31.9fe588ff.js",
    "revision": "a4507e81174129f3ad0a4d7eef20099a"
  },
  {
    "url": "assets/js/32.748f06b1.js",
    "revision": "9011ca5139a9301ef09f6134b5390c77"
  },
  {
    "url": "assets/js/33.0d308d99.js",
    "revision": "229135034da515525ab33e20629d052d"
  },
  {
    "url": "assets/js/34.50744da4.js",
    "revision": "ae946a31032f3e6a01ac9cdb4475cca6"
  },
  {
    "url": "assets/js/35.cd297037.js",
    "revision": "2d3729fd2a5f4fc985515528030027c1"
  },
  {
    "url": "assets/js/36.2d3aeae1.js",
    "revision": "ebffb4bffb3d17f4b912301411014d35"
  },
  {
    "url": "assets/js/37.cfe43dda.js",
    "revision": "80e2daac2c7829303224c11c296d1b72"
  },
  {
    "url": "assets/js/38.8c7bc9ff.js",
    "revision": "c932ac7fb3c30b3cc10b7aec296b0739"
  },
  {
    "url": "assets/js/39.8c2cdf4c.js",
    "revision": "a86fe50ebc28d706de41037e58036e87"
  },
  {
    "url": "assets/js/4.f22e4f51.js",
    "revision": "0da22bb342e2056ee1a1efea60c2fdab"
  },
  {
    "url": "assets/js/41.f8eb18c3.js",
    "revision": "9c5146a9be29a7d120e4bd85bcfed24a"
  },
  {
    "url": "assets/js/5.ea13b65b.js",
    "revision": "1483068be4ec9a10aedbbc228f8f1486"
  },
  {
    "url": "assets/js/6.4117c9c5.js",
    "revision": "7d18c32a329680bd930314e30080b036"
  },
  {
    "url": "assets/js/7.15f64505.js",
    "revision": "8528778f9092e25a136a3617aacbe26d"
  },
  {
    "url": "assets/js/8.83d2bb23.js",
    "revision": "57490fa037c377505c178dd3d529a198"
  },
  {
    "url": "assets/js/9.ba694011.js",
    "revision": "7ae6a3f503420b73a1f70753ffdd5e9a"
  },
  {
    "url": "assets/js/app.013e324b.js",
    "revision": "920e7e5f50c4bd9a4aa492a5de26eca5"
  },
  {
    "url": "assets/js/vendors~docsearch.2184b1dd.js",
    "revision": "01042a29b434baef327ddd17f11933e9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2ae368c02acdc94dace9dff49c9739c0"
  },
  {
    "url": "design/index.html",
    "revision": "926a6a29c757b1bcc66addcece382dff"
  },
  {
    "url": "index.html",
    "revision": "804b6448a4a09f576a04ae4ba6bf8e4b"
  },
  {
    "url": "intro/index.html",
    "revision": "2c3ae9508b7ba28e80a925bbc9b74aee"
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
    "revision": "e5e2c72c1a3caf9852ed320c5f239353"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5511ee942c7cfedd75949a06af1ba1e3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f40a776557db1a96e6b0a41867f7fcac"
  },
  {
    "url": "software/index.html",
    "revision": "63b73031d4feebabe4d9276617008d26"
  },
  {
    "url": "test/index.html",
    "revision": "67cf38739a672f845c90835065111c06"
  },
  {
    "url": "use cases/index.html",
    "revision": "924a49206e2a214870ba9c3294603c3d"
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
