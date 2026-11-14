export const id = 131;
export const ids = [131];
export const modules = {
  7028: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdMsnAccountSdk: () => BW,
      MsnSdkAdaptor: () => iR,
      msnMockIdentityStorageKey: () => yR
    });
    var wW = MW(1144),
      CW = MW(1020),
      zR = MW(2571),
      AW = MW(564);
    MW(50);
    const bR = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      yR = "msnMockIdentity";
    let NW = null;

    function eW() {
      return NW ??= async function() {
        await (0, CW.d)(bR, {}, !1);
        for (let WW = 0; WW < 50 && !window.$msstart; WW++) await (0, AW.U)(100)
      }(), NW
    }
    class BW {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([eW(), (0, AW.U)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (WW) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", WW), null
        }
        return window.$msstart ? new BW : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, AW.U)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (WW) {
          return "USER_NOT_CONSENTED" !== (null === WW || void 0 === WW ? void 0 : WW.code) && console.error("Failed to get the signed-in MSN Play player:", WW), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const tR = 20,
      TW = {
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
      gR = {
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
    class iR extends wW.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await eW(), new iR
      }
      playVideoAd(WW, RW) {
        this.playVideoOrRewarded("video", WW, WW)
      }
      playRewarded(WW, RW) {
        this.playVideoOrRewarded("rewarded", WW, RW)
      }
      canShowBloxdAd(WW) {
        for (const RW in gR)
          if (WW.adId in gR[RW]) return !1;
        return !0
      }
      async renderBanner(WW) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,zR.b)(WW)}: msn placement is already showing so not requesting`);
        const RW = gR[WW.adType][WW.adId];
        if ((0, AW.S)(RW)) return void console.warn(`AD ${(0,zR.b)(WW)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const MW = [];
        for (const wW of RW)
          for (const WW of TW[wW])
            if (WW.width <= window.innerWidth - 40 && WW.height <= window.innerHeight - 40) {
              const RW = {
                placement: wW,
                width: WW.width,
                height: WW.height
              };
              if (!MW.some((WW => JW(RW, WW)))) {
                MW.push(RW);
                break
              }
            } if (MW.length > 0) {
          console.log(`AD ${(0,zR.b)(WW)}: Attempting to show msn units: `, MW);
          const RW = MW.map((WW => `${WW.placement}:${WW.width}x${WW.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, zR.b)(WW),
            renderPromise: window.$msstart.showDisplayAdsAsync(RW).then((() => {
              console.log(`AD ${(0,zR.b)(WW)}: Successfully request msn banner ad`)
            })).catch((RW => {
              console.log(`AD ${(0,zR.b)(WW)}: Error while requesting msn banner ad`, RW)
            }))
          }
        } else console.warn(`AD ${(0,zR.b)(WW)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(WW) {
        null !== this.currentlyShowingBannerPlacement && (0, zR.b)(WW) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,zR.b)(WW)}: Attempting to clear msn banner ads for banner`, WW), await this.clearAllBannerAds())
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
      playVideoOrRewarded(WW, RW, MW) {
        const wW = RW => {
          console.error(`AD: Error while playing MSN ${WW} ad: `, RW), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), MW()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${WW} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const MW = async () => {
            try {
              const MW = await window.$msstart.loadAdsAsync("rewarded" === WW),
                wW = await window.$msstart.showAdsAsync(MW.instanceId);
              this.clearAllBannerAds(), await wW.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${WW} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), RW()
            } catch (MW) {
              wW(MW)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), MW()
        } else wW(`AD: Can't play MSN ${WW} ad because sdk is not loaded`)
      }
    }

    function YW(WW) {
      let RW, MW;
      switch (WW.placement) {
        case "top":
          RW = (window.innerWidth - WW.width) / 2, MW = tR;
          break;
        case "right":
          RW = window.innerWidth - WW.width - tR, MW = window.innerHeight / 2 - WW.height / 2 - 10;
          break;
        case "left":
          RW = tR, MW = window.innerHeight / 2 - WW.height / 2 - 10
      }
      return {
        x1: RW,
        y1: MW,
        x2: RW + WW.width,
        y2: MW + WW.height
      }
    }

    function JW(WW, RW) {
      const MW = YW(WW),
        wW = YW(RW);
      return !(MW.x2 <= wW.x1 || wW.x2 <= MW.x1 || MW.y2 <= wW.y1 || wW.y2 <= MW.y1)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);