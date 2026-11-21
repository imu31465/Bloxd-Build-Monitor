export const id = 143;
export const ids = [143];
export const modules = {
  7964: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdMsnAccountSdk: () => od,
      MsnSdkAdaptor: () => Od,
      msnMockIdentityStorageKey: () => gd
    });
    var pd = kd(1341),
      Nd = kd(1195),
      Wd = kd(3300),
      Pd = kd(610);
    kd(33);
    const Zd = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      gd = "msnMockIdentity";
    let Cd = null;

    function Kd() {
      return Cd ??= async function() {
        await (0, Nd.c)(Zd, {}, !1);
        for (let dd = 0; dd < 50 && !window.$msstart; dd++) await (0, Pd.O)(100)
      }(), Cd
    }
    class od {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Kd(), (0, Pd.O)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (dd) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", dd), null
        }
        return window.$msstart ? new od : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Pd.O)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (dd) {
          return "USER_NOT_CONSENTED" !== (null === dd || void 0 === dd ? void 0 : dd.code) && console.error("Failed to get the signed-in MSN Play player:", dd), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const ld = 20,
      Qd = {
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
      Ld = {
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
    class Od extends pd.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Kd(), new Od
      }
      playVideoAd(dd, Jd) {
        this.playVideoOrRewarded("video", dd, dd)
      }
      playRewarded(dd, Jd) {
        this.playVideoOrRewarded("rewarded", dd, Jd)
      }
      canShowBloxdAd(dd) {
        for (const Jd in Ld)
          if (dd.adId in Ld[Jd]) return !1;
        return !0
      }
      async renderBanner(dd) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Wd.c)(dd)}: msn placement is already showing so not requesting`);
        const Jd = Ld[dd.adType][dd.adId];
        if ((0, Pd.I)(Jd)) return void console.warn(`AD ${(0,Wd.c)(dd)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const kd = [];
        for (const pd of Jd)
          for (const dd of Qd[pd])
            if (dd.width <= window.innerWidth - 40 && dd.height <= window.innerHeight - 40) {
              const Jd = {
                placement: pd,
                width: dd.width,
                height: dd.height
              };
              if (!kd.some((dd => Rd(Jd, dd)))) {
                kd.push(Jd);
                break
              }
            } if (kd.length > 0) {
          console.log(`AD ${(0,Wd.c)(dd)}: Attempting to show msn units: `, kd);
          const Jd = kd.map((dd => `${dd.placement}:${dd.width}x${dd.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Wd.c)(dd),
            renderPromise: window.$msstart.showDisplayAdsAsync(Jd).then((() => {
              console.log(`AD ${(0,Wd.c)(dd)}: Successfully request msn banner ad`)
            })).catch((Jd => {
              console.log(`AD ${(0,Wd.c)(dd)}: Error while requesting msn banner ad`, Jd)
            }))
          }
        } else console.warn(`AD ${(0,Wd.c)(dd)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(dd) {
        null !== this.currentlyShowingBannerPlacement && (0, Wd.c)(dd) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Wd.c)(dd)}: Attempting to clear msn banner ads for banner`, dd), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (dd) {
          console.log("AD: Error while clearing all msn banner ads", dd)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(dd, Jd, kd) {
        const pd = Jd => {
          console.error(`AD: Error while playing MSN ${dd} ad: `, Jd), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), kd()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${dd} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const kd = async () => {
            try {
              const kd = await window.$msstart.loadAdsAsync("rewarded" === dd),
                pd = await window.$msstart.showAdsAsync(kd.instanceId);
              this.clearAllBannerAds(), await pd.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${dd} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Jd()
            } catch (kd) {
              pd(kd)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), kd()
        } else pd(`AD: Can't play MSN ${dd} ad because sdk is not loaded`)
      }
    }

    function ed(dd) {
      let Jd, kd;
      switch (dd.placement) {
        case "top":
          Jd = (window.innerWidth - dd.width) / 2, kd = ld;
          break;
        case "right":
          Jd = window.innerWidth - dd.width - ld, kd = window.innerHeight / 2 - dd.height / 2 - 10;
          break;
        case "left":
          Jd = ld, kd = window.innerHeight / 2 - dd.height / 2 - 10
      }
      return {
        x1: Jd,
        y1: kd,
        x2: Jd + dd.width,
        y2: kd + dd.height
      }
    }

    function Rd(dd, Jd) {
      const kd = ed(dd),
        pd = ed(Jd);
      return !(kd.x2 <= pd.x1 || pd.x2 <= kd.x1 || kd.y2 <= pd.y1 || pd.y2 <= kd.y1)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);