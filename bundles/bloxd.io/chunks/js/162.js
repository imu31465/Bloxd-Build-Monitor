export const id = 162;
export const ids = [162];
export const modules = {
  7264: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdMsnAccountSdk: () => PB,
      MsnSdkAdaptor: () => qB
    });
    var YB = GB(1341),
      DB = GB(1168),
      QB = GB(3922),
      oB = GB(641),
      jB = GB(1796);
    const yB = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let JB = null;

    function MB() {
      return JB ??= async function() {
        await (0, DB.b)(yB, {}, !1);
        for (let BB = 0; BB < 50 && !window.$msstart; BB++) await (0, oB.U)(100)
      }(), JB
    }
    class PB {
      constructor() {}
      static async setup() {
        if (null !== (0, jB.d)()) return new PB;
        try {
          await Promise.race([MB(), (0, oB.U)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (BB) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", BB), null
        }
        return window.$msstart ? new PB : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const BB = (0, jB.d)();
        if (null !== BB) return BB;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, oB.U)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (OB) {
          return "USER_NOT_CONSENTED" !== (null === OB || void 0 === OB ? void 0 : OB.code) && console.error("Failed to get the signed-in MSN Play player:", OB), null
        }
      }
      async signIn() {
        var BB;
        return null !== (BB = (0, jB.d)()) && void 0 !== BB ? BB : await window.$msstart.signInAsync()
      }
    }
    const zB = 20,
      lB = {
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
      pB = {
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
    class qB extends YB.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await MB(), new qB
      }
      playVideoAd(BB, OB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, OB) {
        this.playVideoOrRewarded("rewarded", BB, OB)
      }
      canShowBloxdAd(BB) {
        for (const OB in pB)
          if (BB.adId in pB[OB]) return !1;
        return !0
      }
      async renderBanner(BB) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,QB.d)(BB)}: msn placement is already showing so not requesting`);
        const OB = pB[BB.adType][BB.adId];
        if ((0, oB.Q)(OB)) return void console.warn(`AD ${(0,QB.d)(BB)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const GB = [];
        for (const YB of OB)
          for (const BB of lB[YB])
            if (BB.width <= window.innerWidth - 40 && BB.height <= window.innerHeight - 40) {
              const OB = {
                placement: YB,
                width: BB.width,
                height: BB.height
              };
              if (!GB.some((BB => NB(OB, BB)))) {
                GB.push(OB);
                break
              }
            } if (GB.length > 0) {
          console.log(`AD ${(0,QB.d)(BB)}: Attempting to show msn units: `, GB);
          const OB = GB.map((BB => `${BB.placement}:${BB.width}x${BB.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, QB.d)(BB),
            renderPromise: window.$msstart.showDisplayAdsAsync(OB).then((() => {
              console.log(`AD ${(0,QB.d)(BB)}: Successfully request msn banner ad`)
            })).catch((OB => {
              console.log(`AD ${(0,QB.d)(BB)}: Error while requesting msn banner ad`, OB)
            }))
          }
        } else console.warn(`AD ${(0,QB.d)(BB)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(BB) {
        null !== this.currentlyShowingBannerPlacement && (0, QB.d)(BB) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,QB.d)(BB)}: Attempting to clear msn banner ads for banner`, BB), await this.clearAllBannerAds())
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
      playVideoOrRewarded(BB, OB, GB) {
        const YB = OB => {
          console.error(`AD: Error while playing MSN ${BB} ad: `, OB), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), GB()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const GB = async () => {
            try {
              const GB = await window.$msstart.loadAdsAsync("rewarded" === BB),
                YB = await window.$msstart.showAdsAsync(GB.instanceId);
              this.clearAllBannerAds(), await YB.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${BB} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), OB()
            } catch (GB) {
              YB(GB)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), GB()
        } else YB(`AD: Can't play MSN ${BB} ad because sdk is not loaded`)
      }
    }

    function ZB(BB) {
      let OB, GB;
      switch (BB.placement) {
        case "top":
          OB = (window.innerWidth - BB.width) / 2, GB = zB;
          break;
        case "right":
          OB = window.innerWidth - BB.width - zB, GB = window.innerHeight / 2 - BB.height / 2 - 10;
          break;
        case "left":
          OB = zB, GB = window.innerHeight / 2 - BB.height / 2 - 10
      }
      return {
        x1: OB,
        y1: GB,
        x2: OB + BB.width,
        y2: GB + BB.height
      }
    }

    function NB(BB, OB) {
      const GB = ZB(BB),
        YB = ZB(OB);
      return !(GB.x2 <= YB.x1 || YB.x2 <= GB.x1 || GB.y2 <= YB.y1 || YB.y2 <= GB.y1)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);