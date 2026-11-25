export const id = 150;
export const ids = [150];
export const modules = {
  8147: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdMsnAccountSdk: () => pG,
      MsnSdkAdaptor: () => hG
    });
    var wG = ZG(1280),
      SG = ZG(1143),
      LG = ZG(3449),
      yG = ZG(604),
      kG = ZG(1691);
    const UG = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let YG = null;

    function VG() {
      return YG ??= async function() {
        await (0, SG.b)(UG, {}, !1);
        for (let GG = 0; GG < 50 && !window.$msstart; GG++) await (0, yG.R)(100)
      }(), YG
    }
    class pG {
      constructor() {}
      static async setup() {
        if (null !== (0, kG.e)()) return new pG;
        try {
          await Promise.race([VG(), (0, yG.R)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (GG) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", GG), null
        }
        return window.$msstart ? new pG : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const GG = (0, kG.e)();
        if (null !== GG) return GG;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, yG.R)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (bG) {
          return "USER_NOT_CONSENTED" !== (null === bG || void 0 === bG ? void 0 : bG.code) && console.error("Failed to get the signed-in MSN Play player:", bG), null
        }
      }
      async signIn() {
        var GG;
        return null !== (GG = (0, kG.e)()) && void 0 !== GG ? GG : await window.$msstart.signInAsync()
      }
    }
    const fG = 20,
      QG = {
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
      KG = {
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
    class hG extends wG.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await VG(), new hG
      }
      playVideoAd(GG, bG) {
        this.playVideoOrRewarded("video", GG, GG)
      }
      playRewarded(GG, bG) {
        this.playVideoOrRewarded("rewarded", GG, bG)
      }
      canShowBloxdAd(GG) {
        for (const bG in KG)
          if (GG.adId in KG[bG]) return !1;
        return !0
      }
      async renderBanner(GG) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,LG.e)(GG)}: msn placement is already showing so not requesting`);
        const bG = KG[GG.adType][GG.adId];
        if ((0, yG.L)(bG)) return void console.warn(`AD ${(0,LG.e)(GG)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const ZG = [];
        for (const wG of bG)
          for (const GG of QG[wG])
            if (GG.width <= window.innerWidth - 40 && GG.height <= window.innerHeight - 40) {
              const bG = {
                placement: wG,
                width: GG.width,
                height: GG.height
              };
              if (!ZG.some((GG => JG(bG, GG)))) {
                ZG.push(bG);
                break
              }
            } if (ZG.length > 0) {
          console.log(`AD ${(0,LG.e)(GG)}: Attempting to show msn units: `, ZG);
          const bG = ZG.map((GG => `${GG.placement}:${GG.width}x${GG.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, LG.e)(GG),
            renderPromise: window.$msstart.showDisplayAdsAsync(bG).then((() => {
              console.log(`AD ${(0,LG.e)(GG)}: Successfully request msn banner ad`)
            })).catch((bG => {
              console.log(`AD ${(0,LG.e)(GG)}: Error while requesting msn banner ad`, bG)
            }))
          }
        } else console.warn(`AD ${(0,LG.e)(GG)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(GG) {
        null !== this.currentlyShowingBannerPlacement && (0, LG.e)(GG) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,LG.e)(GG)}: Attempting to clear msn banner ads for banner`, GG), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (GG) {
          console.log("AD: Error while clearing all msn banner ads", GG)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(GG, bG, ZG) {
        const wG = bG => {
          console.error(`AD: Error while playing MSN ${GG} ad: `, bG), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ZG()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${GG} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const ZG = async () => {
            try {
              const ZG = await window.$msstart.loadAdsAsync("rewarded" === GG),
                wG = await window.$msstart.showAdsAsync(ZG.instanceId);
              this.clearAllBannerAds(), await wG.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${GG} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), bG()
            } catch (ZG) {
              wG(ZG)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), ZG()
        } else wG(`AD: Can't play MSN ${GG} ad because sdk is not loaded`)
      }
    }

    function dG(GG) {
      let bG, ZG;
      switch (GG.placement) {
        case "top":
          bG = (window.innerWidth - GG.width) / 2, ZG = fG;
          break;
        case "right":
          bG = window.innerWidth - GG.width - fG, ZG = window.innerHeight / 2 - GG.height / 2 - 10;
          break;
        case "left":
          bG = fG, ZG = window.innerHeight / 2 - GG.height / 2 - 10
      }
      return {
        x1: bG,
        y1: ZG,
        x2: bG + GG.width,
        y2: ZG + GG.height
      }
    }

    function JG(GG, bG) {
      const ZG = dG(GG),
        wG = dG(bG);
      return !(ZG.x2 <= wG.x1 || wG.x2 <= ZG.x1 || ZG.y2 <= wG.y1 || wG.y2 <= ZG.y1)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);