export const id = 160;
export const ids = [160];
export const modules = {
  7315: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdMsnAccountSdk: () => YU,
      MsnSdkAdaptor: () => aU
    });
    var cU = zU(1351),
      yU = zU(1184),
      QU = zU(3861),
      AU = zU(646),
      FU = zU(1774);
    const oU = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let DU = null;

    function EU() {
      return DU ??= async function() {
        await (0, yU.c)(oU, {}, !1);
        for (let UU = 0; UU < 50 && !window.$msstart; UU++) await (0, AU.S)(100)
      }(), DU
    }
    class YU {
      constructor() {}
      static async setup() {
        if (null !== (0, FU.c)()) return new YU;
        try {
          await Promise.race([EU(), (0, AU.S)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (UU) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", UU), null
        }
        return window.$msstart ? new YU : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const UU = (0, FU.c)();
        if (null !== UU) return UU;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, AU.S)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (XU) {
          return "USER_NOT_CONSENTED" !== (null === XU || void 0 === XU ? void 0 : XU.code) && console.error("Failed to get the signed-in MSN Play player:", XU), null
        }
      }
      async signIn() {
        var UU;
        return null !== (UU = (0, FU.c)()) && void 0 !== UU ? UU : await window.$msstart.signInAsync()
      }
    }
    const NU = 20,
      IU = {
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
      pU = {
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
    class aU extends cU.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await EU(), new aU
      }
      playVideoAd(UU, XU) {
        this.playVideoOrRewarded("video", UU, UU)
      }
      playRewarded(UU, XU) {
        this.playVideoOrRewarded("rewarded", UU, XU)
      }
      canShowBloxdAd(UU) {
        for (const XU in pU)
          if (UU.adId in pU[XU]) return !1;
        return !0
      }
      async renderBanner(UU) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,QU.c)(UU)}: msn placement is already showing so not requesting`);
        const XU = pU[UU.adType][UU.adId];
        if ((0, AU.P)(XU)) return void console.warn(`AD ${(0,QU.c)(UU)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const zU = [];
        for (const cU of XU)
          for (const UU of IU[cU])
            if (UU.width <= window.innerWidth - 40 && UU.height <= window.innerHeight - 40) {
              const XU = {
                placement: cU,
                width: UU.width,
                height: UU.height
              };
              if (!zU.some((UU => gU(XU, UU)))) {
                zU.push(XU);
                break
              }
            } if (zU.length > 0) {
          console.log(`AD ${(0,QU.c)(UU)}: Attempting to show msn units: `, zU);
          const XU = zU.map((UU => `${UU.placement}:${UU.width}x${UU.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, QU.c)(UU),
            renderPromise: window.$msstart.showDisplayAdsAsync(XU).then((() => {
              console.log(`AD ${(0,QU.c)(UU)}: Successfully request msn banner ad`)
            })).catch((XU => {
              console.log(`AD ${(0,QU.c)(UU)}: Error while requesting msn banner ad`, XU)
            }))
          }
        } else console.warn(`AD ${(0,QU.c)(UU)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(UU) {
        null !== this.currentlyShowingBannerPlacement && (0, QU.c)(UU) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,QU.c)(UU)}: Attempting to clear msn banner ads for banner`, UU), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (UU) {
          console.log("AD: Error while clearing all msn banner ads", UU)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(UU, XU, zU) {
        const cU = XU => {
          console.error(`AD: Error while playing MSN ${UU} ad: `, XU), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zU()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${UU} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const zU = async () => {
            try {
              const zU = await window.$msstart.loadAdsAsync("rewarded" === UU),
                cU = await window.$msstart.showAdsAsync(zU.instanceId);
              this.clearAllBannerAds(), await cU.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${UU} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), XU()
            } catch (zU) {
              cU(zU)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), zU()
        } else cU(`AD: Can't play MSN ${UU} ad because sdk is not loaded`)
      }
    }

    function tU(UU) {
      let XU, zU;
      switch (UU.placement) {
        case "top":
          XU = (window.innerWidth - UU.width) / 2, zU = NU;
          break;
        case "right":
          XU = window.innerWidth - UU.width - NU, zU = window.innerHeight / 2 - UU.height / 2 - 10;
          break;
        case "left":
          XU = NU, zU = window.innerHeight / 2 - UU.height / 2 - 10
      }
      return {
        x1: XU,
        y1: zU,
        x2: XU + UU.width,
        y2: zU + UU.height
      }
    }

    function gU(UU, XU) {
      const zU = tU(UU),
        cU = tU(XU);
      return !(zU.x2 <= cU.x1 || cU.x2 <= zU.x1 || zU.y2 <= cU.y1 || cU.y2 <= zU.y1)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);