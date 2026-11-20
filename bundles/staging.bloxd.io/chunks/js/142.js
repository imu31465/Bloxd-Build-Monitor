export const id = 142;
export const ids = [142];
export const modules = {
  7753: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdMsnAccountSdk: () => GU,
      MsnSdkAdaptor: () => hU,
      msnMockIdentityStorageKey: () => qU
    });
    var tU = gU(1312),
      pU = gU(1174),
      EU = gU(3161),
      PU = gU(581);
    gU(34);
    const TU = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      qU = "msnMockIdentity";
    let KU = null;

    function cU() {
      return KU ??= async function() {
        await (0, pU.e)(TU, {}, !1);
        for (let UU = 0; UU < 50 && !window.$msstart; UU++) await (0, PU.J)(100)
      }(), KU
    }
    class GU {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([cU(), (0, PU.J)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (UU) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", UU), null
        }
        return window.$msstart ? new GU : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, PU.J)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (UU) {
          return "USER_NOT_CONSENTED" !== (null === UU || void 0 === UU ? void 0 : UU.code) && console.error("Failed to get the signed-in MSN Play player:", UU), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const jU = 20,
      uU = {
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
      CU = {
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
    class hU extends tU.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await cU(), new hU
      }
      playVideoAd(UU, RU) {
        this.playVideoOrRewarded("video", UU, UU)
      }
      playRewarded(UU, RU) {
        this.playVideoOrRewarded("rewarded", UU, RU)
      }
      canShowBloxdAd(UU) {
        for (const RU in CU)
          if (UU.adId in CU[RU]) return !1;
        return !0
      }
      async renderBanner(UU) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,EU.e)(UU)}: msn placement is already showing so not requesting`);
        const RU = CU[UU.adType][UU.adId];
        if ((0, PU.E)(RU)) return void console.warn(`AD ${(0,EU.e)(UU)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const gU = [];
        for (const tU of RU)
          for (const UU of uU[tU])
            if (UU.width <= window.innerWidth - 40 && UU.height <= window.innerHeight - 40) {
              const RU = {
                placement: tU,
                width: UU.width,
                height: UU.height
              };
              if (!gU.some((UU => eU(RU, UU)))) {
                gU.push(RU);
                break
              }
            } if (gU.length > 0) {
          console.log(`AD ${(0,EU.e)(UU)}: Attempting to show msn units: `, gU);
          const RU = gU.map((UU => `${UU.placement}:${UU.width}x${UU.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, EU.e)(UU),
            renderPromise: window.$msstart.showDisplayAdsAsync(RU).then((() => {
              console.log(`AD ${(0,EU.e)(UU)}: Successfully request msn banner ad`)
            })).catch((RU => {
              console.log(`AD ${(0,EU.e)(UU)}: Error while requesting msn banner ad`, RU)
            }))
          }
        } else console.warn(`AD ${(0,EU.e)(UU)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(UU) {
        null !== this.currentlyShowingBannerPlacement && (0, EU.e)(UU) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,EU.e)(UU)}: Attempting to clear msn banner ads for banner`, UU), await this.clearAllBannerAds())
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
      playVideoOrRewarded(UU, RU, gU) {
        const tU = RU => {
          console.error(`AD: Error while playing MSN ${UU} ad: `, RU), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), gU()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${UU} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const gU = async () => {
            try {
              const gU = await window.$msstart.loadAdsAsync("rewarded" === UU),
                tU = await window.$msstart.showAdsAsync(gU.instanceId);
              this.clearAllBannerAds(), await tU.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${UU} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), RU()
            } catch (gU) {
              tU(gU)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), gU()
        } else tU(`AD: Can't play MSN ${UU} ad because sdk is not loaded`)
      }
    }

    function QU(UU) {
      let RU, gU;
      switch (UU.placement) {
        case "top":
          RU = (window.innerWidth - UU.width) / 2, gU = jU;
          break;
        case "right":
          RU = window.innerWidth - UU.width - jU, gU = window.innerHeight / 2 - UU.height / 2 - 10;
          break;
        case "left":
          RU = jU, gU = window.innerHeight / 2 - UU.height / 2 - 10
      }
      return {
        x1: RU,
        y1: gU,
        x2: RU + UU.width,
        y2: gU + UU.height
      }
    }

    function eU(UU, RU) {
      const gU = QU(UU),
        tU = QU(RU);
      return !(gU.x2 <= tU.x1 || tU.x2 <= gU.x1 || gU.y2 <= tU.y1 || tU.y2 <= gU.y1)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);