export const id = 143;
export const ids = [143];
export const modules = {
  7904: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdMsnAccountSdk: () => HQ,
      MsnSdkAdaptor: () => AQ,
      msnMockIdentityStorageKey: () => vQ
    });
    var LQ = wQ(1335),
      qQ = wQ(1196),
      oQ = wQ(3331),
      DQ = wQ(619);
    wQ(27);
    const kQ = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      vQ = "msnMockIdentity";
    let mQ = null;

    function uQ() {
      return mQ ??= async function() {
        await (0, qQ.e)(kQ, {}, !1);
        for (let QQ = 0; QQ < 50 && !window.$msstart; QQ++) await (0, DQ.J)(100)
      }(), mQ
    }
    class HQ {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([uQ(), (0, DQ.J)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (QQ) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", QQ), null
        }
        return window.$msstart ? new HQ : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, DQ.J)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (QQ) {
          return "USER_NOT_CONSENTED" !== (null === QQ || void 0 === QQ ? void 0 : QQ.code) && console.error("Failed to get the signed-in MSN Play player:", QQ), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const bQ = 20,
      YQ = {
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
      xQ = {
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
    class AQ extends LQ.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await uQ(), new AQ
      }
      playVideoAd(QQ, FQ) {
        this.playVideoOrRewarded("video", QQ, QQ)
      }
      playRewarded(QQ, FQ) {
        this.playVideoOrRewarded("rewarded", QQ, FQ)
      }
      canShowBloxdAd(QQ) {
        for (const FQ in xQ)
          if (QQ.adId in xQ[FQ]) return !1;
        return !0
      }
      async renderBanner(QQ) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,oQ.b)(QQ)}: msn placement is already showing so not requesting`);
        const FQ = xQ[QQ.adType][QQ.adId];
        if ((0, DQ.F)(FQ)) return void console.warn(`AD ${(0,oQ.b)(QQ)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const wQ = [];
        for (const LQ of FQ)
          for (const QQ of YQ[LQ])
            if (QQ.width <= window.innerWidth - 40 && QQ.height <= window.innerHeight - 40) {
              const FQ = {
                placement: LQ,
                width: QQ.width,
                height: QQ.height
              };
              if (!wQ.some((QQ => eQ(FQ, QQ)))) {
                wQ.push(FQ);
                break
              }
            } if (wQ.length > 0) {
          console.log(`AD ${(0,oQ.b)(QQ)}: Attempting to show msn units: `, wQ);
          const FQ = wQ.map((QQ => `${QQ.placement}:${QQ.width}x${QQ.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, oQ.b)(QQ),
            renderPromise: window.$msstart.showDisplayAdsAsync(FQ).then((() => {
              console.log(`AD ${(0,oQ.b)(QQ)}: Successfully request msn banner ad`)
            })).catch((FQ => {
              console.log(`AD ${(0,oQ.b)(QQ)}: Error while requesting msn banner ad`, FQ)
            }))
          }
        } else console.warn(`AD ${(0,oQ.b)(QQ)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(QQ) {
        null !== this.currentlyShowingBannerPlacement && (0, oQ.b)(QQ) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,oQ.b)(QQ)}: Attempting to clear msn banner ads for banner`, QQ), await this.clearAllBannerAds())
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
      playVideoOrRewarded(QQ, FQ, wQ) {
        const LQ = FQ => {
          console.error(`AD: Error while playing MSN ${QQ} ad: `, FQ), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), wQ()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${QQ} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const wQ = async () => {
            try {
              const wQ = await window.$msstart.loadAdsAsync("rewarded" === QQ),
                LQ = await window.$msstart.showAdsAsync(wQ.instanceId);
              this.clearAllBannerAds(), await LQ.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${QQ} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), FQ()
            } catch (wQ) {
              LQ(wQ)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), wQ()
        } else LQ(`AD: Can't play MSN ${QQ} ad because sdk is not loaded`)
      }
    }

    function tQ(QQ) {
      let FQ, wQ;
      switch (QQ.placement) {
        case "top":
          FQ = (window.innerWidth - QQ.width) / 2, wQ = bQ;
          break;
        case "right":
          FQ = window.innerWidth - QQ.width - bQ, wQ = window.innerHeight / 2 - QQ.height / 2 - 10;
          break;
        case "left":
          FQ = bQ, wQ = window.innerHeight / 2 - QQ.height / 2 - 10
      }
      return {
        x1: FQ,
        y1: wQ,
        x2: FQ + QQ.width,
        y2: wQ + QQ.height
      }
    }

    function eQ(QQ, FQ) {
      const wQ = tQ(QQ),
        LQ = tQ(FQ);
      return !(wQ.x2 <= LQ.x1 || LQ.x2 <= wQ.x1 || wQ.y2 <= LQ.y1 || LQ.y2 <= wQ.y1)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);