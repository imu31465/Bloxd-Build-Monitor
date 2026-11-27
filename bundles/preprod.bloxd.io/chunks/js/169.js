export const id = 169;
export const ids = [169];
export const modules = {
  7726: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdMsnAccountSdk: () => ZW,
      MsnSdkAdaptor: () => bW
    });
    var mW = OW(1343),
      EW = OW(1162),
      NW = OW(4712),
      PW = OW(643),
      LW = OW(1830);
    const cW = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let wW = null;

    function tW() {
      return wW ??= async function() {
        await (0, EW.d)(cW, {}, !1);
        for (let WW = 0; WW < 50 && !window.$msstart; WW++) await (0, PW.R)(100)
      }(), wW
    }
    class ZW {
      constructor() {}
      static async setup() {
        if (null !== (0, LW.c)()) return new ZW;
        try {
          await Promise.race([tW(), (0, PW.R)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (WW) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", WW), null
        }
        return window.$msstart ? new ZW : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const WW = (0, LW.c)();
        if (null !== WW) return WW;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, PW.R)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (iW) {
          return "USER_NOT_CONSENTED" !== (null === iW || void 0 === iW ? void 0 : iW.code) && console.error("Failed to get the signed-in MSN Play player:", iW), null
        }
      }
      async signIn() {
        var WW;
        return null !== (WW = (0, LW.c)()) && void 0 !== WW ? WW : await window.$msstart.signInAsync()
      }
    }
    const xW = 20,
      lW = {
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
      AW = {
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
    class bW extends mW.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await tW(), new bW
      }
      playVideoAd(WW, iW) {
        this.playVideoOrRewarded("video", WW, WW)
      }
      playRewarded(WW, iW) {
        this.playVideoOrRewarded("rewarded", WW, iW)
      }
      canShowBloxdAd(WW) {
        for (const iW in AW)
          if (WW.adId in AW[iW]) return !1;
        return !0
      }
      async renderBanner(WW) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,NW.c)(WW)}: msn placement is already showing so not requesting`);
        const iW = AW[WW.adType][WW.adId];
        if ((0, PW.K)(iW)) return void console.warn(`AD ${(0,NW.c)(WW)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const OW = [];
        for (const mW of iW)
          for (const WW of lW[mW])
            if (WW.width <= window.innerWidth - 40 && WW.height <= window.innerHeight - 40) {
              const iW = {
                placement: mW,
                width: WW.width,
                height: WW.height
              };
              if (!OW.some((WW => UW(iW, WW)))) {
                OW.push(iW);
                break
              }
            } if (OW.length > 0) {
          console.log(`AD ${(0,NW.c)(WW)}: Attempting to show msn units: `, OW);
          const iW = OW.map((WW => `${WW.placement}:${WW.width}x${WW.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, NW.c)(WW),
            renderPromise: window.$msstart.showDisplayAdsAsync(iW).then((() => {
              console.log(`AD ${(0,NW.c)(WW)}: Successfully request msn banner ad`)
            })).catch((iW => {
              console.log(`AD ${(0,NW.c)(WW)}: Error while requesting msn banner ad`, iW)
            }))
          }
        } else console.warn(`AD ${(0,NW.c)(WW)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(WW) {
        null !== this.currentlyShowingBannerPlacement && (0, NW.c)(WW) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,NW.c)(WW)}: Attempting to clear msn banner ads for banner`, WW), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (WW) {
          console.log("AD: Error while clearing all msn banner ads", WW)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(WW, iW, OW) {
        const mW = iW => {
          console.error(`AD: Error while playing MSN ${WW} ad: `, iW), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), OW()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${WW} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const OW = async () => {
            try {
              const OW = await window.$msstart.loadAdsAsync("rewarded" === WW),
                mW = await window.$msstart.showAdsAsync(OW.instanceId);
              this.clearAllBannerAds(), await mW.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${WW} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), iW()
            } catch (OW) {
              mW(OW)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), OW()
        } else mW(`AD: Can't play MSN ${WW} ad because sdk is not loaded`)
      }
    }

    function jW(WW) {
      let iW, OW;
      switch (WW.placement) {
        case "top":
          iW = (window.innerWidth - WW.width) / 2, OW = xW;
          break;
        case "right":
          iW = window.innerWidth - WW.width - xW, OW = window.innerHeight / 2 - WW.height / 2 - 10;
          break;
        case "left":
          iW = xW, OW = window.innerHeight / 2 - WW.height / 2 - 10
      }
      return {
        x1: iW,
        y1: OW,
        x2: iW + WW.width,
        y2: OW + WW.height
      }
    }

    function UW(WW, iW) {
      const OW = jW(WW),
        mW = jW(iW);
      return !(OW.x2 <= mW.x1 || mW.x2 <= OW.x1 || OW.y2 <= mW.y1 || mW.y2 <= OW.y1)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);