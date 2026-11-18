export const id = 135;
export const ids = [135];
export const modules = {
  7443: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdMsnAccountSdk: () => kB,
      MsnSdkAdaptor: () => uB,
      msnMockIdentityStorageKey: () => YB
    });
    var VB = dB(1204),
      yB = dB(1068),
      pB = dB(2947),
      lB = dB(572);
    dB(33);
    const JB = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      YB = "msnMockIdentity";
    let gB = null;

    function oB() {
      return gB ??= async function() {
        await (0, yB.c)(JB, {}, !1);
        for (let BB = 0; BB < 50 && !window.$msstart; BB++) await (0, lB.T)(100)
      }(), gB
    }
    class kB {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([oB(), (0, lB.T)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (BB) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", BB), null
        }
        return window.$msstart ? new kB : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, lB.T)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (BB) {
          return "USER_NOT_CONSENTED" !== (null === BB || void 0 === BB ? void 0 : BB.code) && console.error("Failed to get the signed-in MSN Play player:", BB), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const LB = 20,
      OB = {
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
      DB = {
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
    class uB extends VB.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await oB(), new uB
      }
      playVideoAd(BB, TB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, TB) {
        this.playVideoOrRewarded("rewarded", BB, TB)
      }
      canShowBloxdAd(BB) {
        for (const TB in DB)
          if (BB.adId in DB[TB]) return !1;
        return !0
      }
      async renderBanner(BB) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,pB.d)(BB)}: msn placement is already showing so not requesting`);
        const TB = DB[BB.adType][BB.adId];
        if ((0, lB.M)(TB)) return void console.warn(`AD ${(0,pB.d)(BB)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const dB = [];
        for (const VB of TB)
          for (const BB of OB[VB])
            if (BB.width <= window.innerWidth - 40 && BB.height <= window.innerHeight - 40) {
              const TB = {
                placement: VB,
                width: BB.width,
                height: BB.height
              };
              if (!dB.some((BB => EB(TB, BB)))) {
                dB.push(TB);
                break
              }
            } if (dB.length > 0) {
          console.log(`AD ${(0,pB.d)(BB)}: Attempting to show msn units: `, dB);
          const TB = dB.map((BB => `${BB.placement}:${BB.width}x${BB.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, pB.d)(BB),
            renderPromise: window.$msstart.showDisplayAdsAsync(TB).then((() => {
              console.log(`AD ${(0,pB.d)(BB)}: Successfully request msn banner ad`)
            })).catch((TB => {
              console.log(`AD ${(0,pB.d)(BB)}: Error while requesting msn banner ad`, TB)
            }))
          }
        } else console.warn(`AD ${(0,pB.d)(BB)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(BB) {
        null !== this.currentlyShowingBannerPlacement && (0, pB.d)(BB) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,pB.d)(BB)}: Attempting to clear msn banner ads for banner`, BB), await this.clearAllBannerAds())
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
      playVideoOrRewarded(BB, TB, dB) {
        const VB = TB => {
          console.error(`AD: Error while playing MSN ${BB} ad: `, TB), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), dB()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const dB = async () => {
            try {
              const dB = await window.$msstart.loadAdsAsync("rewarded" === BB),
                VB = await window.$msstart.showAdsAsync(dB.instanceId);
              this.clearAllBannerAds(), await VB.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), TB()
            } catch (dB) {
              VB(dB)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), dB()
        } else VB(`AD: Can't play MSN ${BB} ad because sdk is not loaded`)
      }
    }

    function HB(BB) {
      let TB, dB;
      switch (BB.placement) {
        case "top":
          TB = (window.innerWidth - BB.width) / 2, dB = LB;
          break;
        case "right":
          TB = window.innerWidth - BB.width - LB, dB = window.innerHeight / 2 - BB.height / 2 - 10;
          break;
        case "left":
          TB = LB, dB = window.innerHeight / 2 - BB.height / 2 - 10
      }
      return {
        x1: TB,
        y1: dB,
        x2: TB + BB.width,
        y2: dB + BB.height
      }
    }

    function EB(BB, TB) {
      const dB = HB(BB),
        VB = HB(TB);
      return !(dB.x2 <= VB.x1 || VB.x2 <= dB.x1 || dB.y2 <= VB.y1 || VB.y2 <= dB.y1)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);