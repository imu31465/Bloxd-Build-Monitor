export const id = 150;
export const ids = [150];
export const modules = {
  8072: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdMsnAccountSdk: () => pB,
      MsnSdkAdaptor: () => mB
    });
    var QB = zB(1351),
      nB = zB(1230),
      dB = zB(3584),
      IB = zB(658),
      NB = zB(1763);
    const uB = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let UB = null;

    function aB() {
      return UB ??= async function() {
        await (0, nB.c)(uB, {}, !1);
        for (let BB = 0; BB < 50 && !window.$msstart; BB++) await (0, IB.M)(100)
      }(), UB
    }
    class pB {
      constructor() {}
      static async setup() {
        if (null !== (0, NB.b)()) return new pB;
        try {
          await Promise.race([aB(), (0, IB.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (BB) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", BB), null
        }
        return window.$msstart ? new pB : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const BB = (0, NB.b)();
        if (null !== BB) return BB;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, IB.M)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (jB) {
          return "USER_NOT_CONSENTED" !== (null === jB || void 0 === jB ? void 0 : jB.code) && console.error("Failed to get the signed-in MSN Play player:", jB), null
        }
      }
      async signIn() {
        var BB;
        return null !== (BB = (0, NB.b)()) && void 0 !== BB ? BB : await window.$msstart.signInAsync()
      }
    }
    const rB = 20,
      sB = {
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
      JB = {
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
    class mB extends QB.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await aB(), new mB
      }
      playVideoAd(BB, jB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, jB) {
        this.playVideoOrRewarded("rewarded", BB, jB)
      }
      canShowBloxdAd(BB) {
        for (const jB in JB)
          if (BB.adId in JB[jB]) return !1;
        return !0
      }
      async renderBanner(BB) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,dB.b)(BB)}: msn placement is already showing so not requesting`);
        const jB = JB[BB.adType][BB.adId];
        if ((0, IB.I)(jB)) return void console.warn(`AD ${(0,dB.b)(BB)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const zB = [];
        for (const QB of jB)
          for (const BB of sB[QB])
            if (BB.width <= window.innerWidth - 40 && BB.height <= window.innerHeight - 40) {
              const jB = {
                placement: QB,
                width: BB.width,
                height: BB.height
              };
              if (!zB.some((BB => kB(jB, BB)))) {
                zB.push(jB);
                break
              }
            } if (zB.length > 0) {
          console.log(`AD ${(0,dB.b)(BB)}: Attempting to show msn units: `, zB);
          const jB = zB.map((BB => `${BB.placement}:${BB.width}x${BB.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, dB.b)(BB),
            renderPromise: window.$msstart.showDisplayAdsAsync(jB).then((() => {
              console.log(`AD ${(0,dB.b)(BB)}: Successfully request msn banner ad`)
            })).catch((jB => {
              console.log(`AD ${(0,dB.b)(BB)}: Error while requesting msn banner ad`, jB)
            }))
          }
        } else console.warn(`AD ${(0,dB.b)(BB)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(BB) {
        null !== this.currentlyShowingBannerPlacement && (0, dB.b)(BB) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,dB.b)(BB)}: Attempting to clear msn banner ads for banner`, BB), await this.clearAllBannerAds())
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
      playVideoOrRewarded(BB, jB, zB) {
        const QB = jB => {
          console.error(`AD: Error while playing MSN ${BB} ad: `, jB), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zB()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const zB = async () => {
            try {
              const zB = await window.$msstart.loadAdsAsync("rewarded" === BB),
                QB = await window.$msstart.showAdsAsync(zB.instanceId);
              this.clearAllBannerAds(), await QB.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), jB()
            } catch (zB) {
              QB(zB)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), zB()
        } else QB(`AD: Can't play MSN ${BB} ad because sdk is not loaded`)
      }
    }

    function yB(BB) {
      let jB, zB;
      switch (BB.placement) {
        case "top":
          jB = (window.innerWidth - BB.width) / 2, zB = rB;
          break;
        case "right":
          jB = window.innerWidth - BB.width - rB, zB = window.innerHeight / 2 - BB.height / 2 - 10;
          break;
        case "left":
          jB = rB, zB = window.innerHeight / 2 - BB.height / 2 - 10
      }
      return {
        x1: jB,
        y1: zB,
        x2: jB + BB.width,
        y2: zB + BB.height
      }
    }

    function kB(BB, jB) {
      const zB = yB(BB),
        QB = yB(jB);
      return !(zB.x2 <= QB.x1 || QB.x2 <= zB.x1 || zB.y2 <= QB.y1 || QB.y2 <= zB.y1)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);