export const id = 150;
export const ids = [150];
export const modules = {
  8231: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdMsnAccountSdk: () => hB,
      MsnSdkAdaptor: () => gB
    });
    var TB = ZB(1379),
      JB = ZB(1241),
      oB = ZB(3657),
      GB = ZB(665),
      vB = ZB(1793);
    const kB = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let cB = null;

    function nB() {
      return cB ??= async function() {
        await (0, JB.c)(kB, {}, !1);
        for (let BB = 0; BB < 50 && !window.$msstart; BB++) await (0, GB.Q)(100)
      }(), cB
    }
    class hB {
      constructor() {}
      static async setup() {
        if (null !== (0, vB.c)()) return new hB;
        try {
          await Promise.race([nB(), (0, GB.Q)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (BB) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", BB), null
        }
        return window.$msstart ? new hB : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const BB = (0, vB.c)();
        if (null !== BB) return BB;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, GB.Q)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (IB) {
          return "USER_NOT_CONSENTED" !== (null === IB || void 0 === IB ? void 0 : IB.code) && console.error("Failed to get the signed-in MSN Play player:", IB), null
        }
      }
      async signIn() {
        var BB;
        return null !== (BB = (0, vB.c)()) && void 0 !== BB ? BB : await window.$msstart.signInAsync()
      }
    }
    const zB = 20,
      FB = {
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
      NB = {
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
    class gB extends TB.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await nB(), new gB
      }
      playVideoAd(BB, IB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, IB) {
        this.playVideoOrRewarded("rewarded", BB, IB)
      }
      canShowBloxdAd(BB) {
        for (const IB in NB)
          if (BB.adId in NB[IB]) return !1;
        return !0
      }
      async renderBanner(BB) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,oB.e)(BB)}: msn placement is already showing so not requesting`);
        const IB = NB[BB.adType][BB.adId];
        if ((0, GB.L)(IB)) return void console.warn(`AD ${(0,oB.e)(BB)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const ZB = [];
        for (const TB of IB)
          for (const BB of FB[TB])
            if (BB.width <= window.innerWidth - 40 && BB.height <= window.innerHeight - 40) {
              const IB = {
                placement: TB,
                width: BB.width,
                height: BB.height
              };
              if (!ZB.some((BB => yB(IB, BB)))) {
                ZB.push(IB);
                break
              }
            } if (ZB.length > 0) {
          console.log(`AD ${(0,oB.e)(BB)}: Attempting to show msn units: `, ZB);
          const IB = ZB.map((BB => `${BB.placement}:${BB.width}x${BB.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, oB.e)(BB),
            renderPromise: window.$msstart.showDisplayAdsAsync(IB).then((() => {
              console.log(`AD ${(0,oB.e)(BB)}: Successfully request msn banner ad`)
            })).catch((IB => {
              console.log(`AD ${(0,oB.e)(BB)}: Error while requesting msn banner ad`, IB)
            }))
          }
        } else console.warn(`AD ${(0,oB.e)(BB)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(BB) {
        null !== this.currentlyShowingBannerPlacement && (0, oB.e)(BB) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,oB.e)(BB)}: Attempting to clear msn banner ads for banner`, BB), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (BB) {
          console.log("AD: Error while clearing all msn banner ads", BB)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(BB, IB, ZB) {
        const TB = IB => {
          console.error(`AD: Error while playing MSN ${BB} ad: `, IB), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ZB()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const ZB = async () => {
            try {
              const ZB = await window.$msstart.loadAdsAsync("rewarded" === BB),
                TB = await window.$msstart.showAdsAsync(ZB.instanceId);
              this.clearAllBannerAds(), await TB.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), IB()
            } catch (ZB) {
              TB(ZB)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), ZB()
        } else TB(`AD: Can't play MSN ${BB} ad because sdk is not loaded`)
      }
    }

    function qB(BB) {
      let IB, ZB;
      switch (BB.placement) {
        case "top":
          IB = (window.innerWidth - BB.width) / 2, ZB = zB;
          break;
        case "right":
          IB = window.innerWidth - BB.width - zB, ZB = window.innerHeight / 2 - BB.height / 2 - 10;
          break;
        case "left":
          IB = zB, ZB = window.innerHeight / 2 - BB.height / 2 - 10
      }
      return {
        x1: IB,
        y1: ZB,
        x2: IB + BB.width,
        y2: ZB + BB.height
      }
    }

    function yB(BB, IB) {
      const ZB = qB(BB),
        TB = qB(IB);
      return !(ZB.x2 <= TB.x1 || TB.x2 <= ZB.x1 || ZB.y2 <= TB.y1 || TB.y2 <= ZB.y1)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);