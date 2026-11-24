export const id = 148;
export const ids = [148];
export const modules = {
  8015: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdMsnAccountSdk: () => pm,
      MsnSdkAdaptor: () => Ym,
      msnMockIdentityStorageKey: () => Dm
    });
    var hm = fm(1318),
      Am = fm(1198),
      am = fm(3469),
      xm = fm(653);
    fm(37);
    const wm = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Dm = "msnMockIdentity";
    let im = null;

    function Rm() {
      return im ??= async function() {
        await (0, Am.c)(wm, {}, !1);
        for (let mm = 0; mm < 50 && !window.$msstart; mm++) await (0, xm.L)(100)
      }(), im
    }
    class pm {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Rm(), (0, xm.L)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (mm) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", mm), null
        }
        return window.$msstart ? new pm : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, xm.L)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (mm) {
          return "USER_NOT_CONSENTED" !== (null === mm || void 0 === mm ? void 0 : mm.code) && console.error("Failed to get the signed-in MSN Play player:", mm), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Em = 20,
      om = {
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
      Om = {
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
    class Ym extends hm.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Rm(), new Ym
      }
      playVideoAd(mm, Tm) {
        this.playVideoOrRewarded("video", mm, mm)
      }
      playRewarded(mm, Tm) {
        this.playVideoOrRewarded("rewarded", mm, Tm)
      }
      canShowBloxdAd(mm) {
        for (const Tm in Om)
          if (mm.adId in Om[Tm]) return !1;
        return !0
      }
      async renderBanner(mm) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,am.c)(mm)}: msn placement is already showing so not requesting`);
        const Tm = Om[mm.adType][mm.adId];
        if ((0, xm.H)(Tm)) return void console.warn(`AD ${(0,am.c)(mm)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const fm = [];
        for (const hm of Tm)
          for (const mm of om[hm])
            if (mm.width <= window.innerWidth - 40 && mm.height <= window.innerHeight - 40) {
              const Tm = {
                placement: hm,
                width: mm.width,
                height: mm.height
              };
              if (!fm.some((mm => jm(Tm, mm)))) {
                fm.push(Tm);
                break
              }
            } if (fm.length > 0) {
          console.log(`AD ${(0,am.c)(mm)}: Attempting to show msn units: `, fm);
          const Tm = fm.map((mm => `${mm.placement}:${mm.width}x${mm.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, am.c)(mm),
            renderPromise: window.$msstart.showDisplayAdsAsync(Tm).then((() => {
              console.log(`AD ${(0,am.c)(mm)}: Successfully request msn banner ad`)
            })).catch((Tm => {
              console.log(`AD ${(0,am.c)(mm)}: Error while requesting msn banner ad`, Tm)
            }))
          }
        } else console.warn(`AD ${(0,am.c)(mm)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(mm) {
        null !== this.currentlyShowingBannerPlacement && (0, am.c)(mm) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,am.c)(mm)}: Attempting to clear msn banner ads for banner`, mm), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (mm) {
          console.log("AD: Error while clearing all msn banner ads", mm)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(mm, Tm, fm) {
        const hm = Tm => {
          console.error(`AD: Error while playing MSN ${mm} ad: `, Tm), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), fm()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${mm} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const fm = async () => {
            try {
              const fm = await window.$msstart.loadAdsAsync("rewarded" === mm),
                hm = await window.$msstart.showAdsAsync(fm.instanceId);
              this.clearAllBannerAds(), await hm.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${mm} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Tm()
            } catch (fm) {
              hm(fm)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), fm()
        } else hm(`AD: Can't play MSN ${mm} ad because sdk is not loaded`)
      }
    }

    function qm(mm) {
      let Tm, fm;
      switch (mm.placement) {
        case "top":
          Tm = (window.innerWidth - mm.width) / 2, fm = Em;
          break;
        case "right":
          Tm = window.innerWidth - mm.width - Em, fm = window.innerHeight / 2 - mm.height / 2 - 10;
          break;
        case "left":
          Tm = Em, fm = window.innerHeight / 2 - mm.height / 2 - 10
      }
      return {
        x1: Tm,
        y1: fm,
        x2: Tm + mm.width,
        y2: fm + mm.height
      }
    }

    function jm(mm, Tm) {
      const fm = qm(mm),
        hm = qm(Tm);
      return !(fm.x2 <= hm.x1 || hm.x2 <= fm.x1 || fm.y2 <= hm.y1 || hm.y2 <= fm.y1)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);