export const id = 152;
export const ids = [152];
export const modules = {
  8477: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdMsnAccountSdk: () => JQ,
      MsnSdkAdaptor: () => BQ
    });
    var wQ = XQ(1368),
      qQ = XQ(1216),
      TQ = XQ(3727),
      zQ = XQ(663),
      sQ = XQ(1786);
    const FQ = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let PQ = null;

    function gQ() {
      return PQ ??= async function() {
        await (0, qQ.d)(FQ, {}, !1);
        for (let QQ = 0; QQ < 50 && !window.$msstart; QQ++) await (0, zQ.L)(100)
      }(), PQ
    }
    class JQ {
      constructor() {}
      static async setup() {
        if (null !== (0, sQ.b)()) return new JQ;
        try {
          await Promise.race([gQ(), (0, zQ.L)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (QQ) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", QQ), null
        }
        return window.$msstart ? new JQ : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const QQ = (0, sQ.b)();
        if (null !== QQ) return QQ;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, zQ.L)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (WQ) {
          return "USER_NOT_CONSENTED" !== (null === WQ || void 0 === WQ ? void 0 : WQ.code) && console.error("Failed to get the signed-in MSN Play player:", WQ), null
        }
      }
      async signIn() {
        var QQ;
        return null !== (QQ = (0, sQ.b)()) && void 0 !== QQ ? QQ : await window.$msstart.signInAsync()
      }
    }
    const rQ = 20,
      IQ = {
        top: [{
          width: 970,
          height: 250
        }, {
          width: 728,
          height: 90
        }, {
          width: 320,
          height: 50
        }],
        right: [{
          width: 300,
          height: 600
        }, {
          width: 160,
          height: 600
        }, {
          width: 300,
          height: 250
        }, {
          width: 320,
          height: 50
        }],
        left: [{
          width: 300,
          height: 600
        }, {
          width: 160,
          height: 600
        }, {
          width: 300,
          height: 250
        }, {
          width: 320,
          height: 50
        }]
      },
      jQ = {
        leaderboard: {
          1: ["right", "left"],
          5: ["top", "left"]
        },
        square: {
          1: []
        },
        skyscraper: {
          2: []
        }
      };
    class BQ extends wQ.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await gQ(), new BQ
      }
      playVideoAd(QQ, WQ) {
        this.playVideoOrRewarded("video", QQ, QQ)
      }
      playRewarded(QQ, WQ) {
        this.playVideoOrRewarded("rewarded", QQ, WQ)
      }
      canShowBloxdAd(QQ) {
        for (const WQ in jQ)
          if (QQ.adId in jQ[WQ]) return !1;
        return !0
      }
      async renderBanner(QQ) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,TQ.b)(QQ)}: msn placement is already showing so not requesting`);
        const WQ = jQ[QQ.adType][QQ.adId];
        if ((0, zQ.G)(WQ)) return void console.warn(`AD ${(0,TQ.b)(QQ)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const XQ = [];
        for (const wQ of WQ)
          for (const QQ of IQ[wQ])
            if (QQ.width <= window.innerWidth - 40 && QQ.height <= window.innerHeight - 40) {
              const WQ = {
                placement: wQ,
                width: QQ.width,
                height: QQ.height
              };
              if (!XQ.some((QQ => VQ(WQ, QQ)))) {
                XQ.push(WQ);
                break
              }
            } if (XQ.length > 0) {
          console.log(`AD ${(0,TQ.b)(QQ)}: Attempting to show msn units: `, XQ);
          const WQ = XQ.map((QQ => `${QQ.placement}:${QQ.width}x${QQ.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, TQ.b)(QQ),
            renderPromise: window.$msstart.showDisplayAdsAsync(WQ).then((() => {
              console.log(`AD ${(0,TQ.b)(QQ)}: Successfully request msn banner ad`)
            })).catch((WQ => {
              console.log(`AD ${(0,TQ.b)(QQ)}: Error while requesting msn banner ad`, WQ)
            }))
          }
        } else console.warn(`AD ${(0,TQ.b)(QQ)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(QQ) {
        null !== this.currentlyShowingBannerPlacement && (0, TQ.b)(QQ) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,TQ.b)(QQ)}: Attempting to clear msn banner ads for banner`, QQ), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (QQ) {
          console.log("AD: Error while clearing all msn banner ads", QQ)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(QQ, WQ, XQ) {
        const wQ = WQ => {
          console.error(`AD: Error while playing MSN ${QQ} ad: `, WQ), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), XQ()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${QQ} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const XQ = async () => {
            try {
              const XQ = await window.$msstart.loadAdsAsync("rewarded" === QQ),
                wQ = await window.$msstart.showAdsAsync(XQ.instanceId);
              this.clearAllBannerAds(), await wQ.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${QQ} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), WQ()
            } catch (XQ) {
              wQ(XQ)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), XQ()
        } else wQ(`AD: Can't play MSN ${QQ} ad because sdk is not loaded`)
      }
    }

    function yQ(QQ) {
      let WQ, XQ;
      switch (QQ.placement) {
        case "top":
          WQ = (window.innerWidth - QQ.width) / 2, XQ = rQ;
          break;
        case "right":
          WQ = window.innerWidth - QQ.width - rQ, XQ = window.innerHeight / 2 - QQ.height / 2 - 10;
          break;
        case "left":
          WQ = rQ, XQ = window.innerHeight / 2 - QQ.height / 2 - 10
      }
      return {
        x1: WQ,
        y1: XQ,
        x2: WQ + QQ.width,
        y2: XQ + QQ.height
      }
    }

    function VQ(QQ, WQ) {
      const XQ = yQ(QQ),
        wQ = yQ(WQ);
      return !(XQ.x2 <= wQ.x1 || wQ.x2 <= XQ.x1 || XQ.y2 <= wQ.y1 || wQ.y2 <= XQ.y1)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);