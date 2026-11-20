export const id = 142;
export const ids = [142];
export const modules = {
  7801: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdMsnAccountSdk: () => Tv,
      MsnSdkAdaptor: () => sv,
      msnMockIdentityStorageKey: () => dv
    });
    var hv = Pv(1299),
      Sv = Pv(1164),
      ev = Pv(3209),
      gv = Pv(626);
    Pv(39);
    const pv = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      dv = "msnMockIdentity";
    let Nv = null;

    function lv() {
      return Nv ??= async function() {
        await (0, Sv.d)(pv, {}, !1);
        for (let vv = 0; vv < 50 && !window.$msstart; vv++) await (0, gv.V)(100)
      }(), Nv
    }
    class Tv {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([lv(), (0, gv.V)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (vv) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", vv), null
        }
        return window.$msstart ? new Tv : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, gv.V)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (vv) {
          return "USER_NOT_CONSENTED" !== (null === vv || void 0 === vv ? void 0 : vv.code) && console.error("Failed to get the signed-in MSN Play player:", vv), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Wv = 20,
      wv = {
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
      av = {
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
    class sv extends hv.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await lv(), new sv
      }
      playVideoAd(vv, zv) {
        this.playVideoOrRewarded("video", vv, vv)
      }
      playRewarded(vv, zv) {
        this.playVideoOrRewarded("rewarded", vv, zv)
      }
      canShowBloxdAd(vv) {
        for (const zv in av)
          if (vv.adId in av[zv]) return !1;
        return !0
      }
      async renderBanner(vv) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,ev.e)(vv)}: msn placement is already showing so not requesting`);
        const zv = av[vv.adType][vv.adId];
        if ((0, gv.N)(zv)) return void console.warn(`AD ${(0,ev.e)(vv)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Pv = [];
        for (const hv of zv)
          for (const vv of wv[hv])
            if (vv.width <= window.innerWidth - 40 && vv.height <= window.innerHeight - 40) {
              const zv = {
                placement: hv,
                width: vv.width,
                height: vv.height
              };
              if (!Pv.some((vv => iv(zv, vv)))) {
                Pv.push(zv);
                break
              }
            } if (Pv.length > 0) {
          console.log(`AD ${(0,ev.e)(vv)}: Attempting to show msn units: `, Pv);
          const zv = Pv.map((vv => `${vv.placement}:${vv.width}x${vv.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, ev.e)(vv),
            renderPromise: window.$msstart.showDisplayAdsAsync(zv).then((() => {
              console.log(`AD ${(0,ev.e)(vv)}: Successfully request msn banner ad`)
            })).catch((zv => {
              console.log(`AD ${(0,ev.e)(vv)}: Error while requesting msn banner ad`, zv)
            }))
          }
        } else console.warn(`AD ${(0,ev.e)(vv)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(vv) {
        null !== this.currentlyShowingBannerPlacement && (0, ev.e)(vv) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,ev.e)(vv)}: Attempting to clear msn banner ads for banner`, vv), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (vv) {
          console.log("AD: Error while clearing all msn banner ads", vv)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(vv, zv, Pv) {
        const hv = zv => {
          console.error(`AD: Error while playing MSN ${vv} ad: `, zv), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Pv()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${vv} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Pv = async () => {
            try {
              const Pv = await window.$msstart.loadAdsAsync("rewarded" === vv),
                hv = await window.$msstart.showAdsAsync(Pv.instanceId);
              this.clearAllBannerAds(), await hv.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${vv} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zv()
            } catch (Pv) {
              hv(Pv)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Pv()
        } else hv(`AD: Can't play MSN ${vv} ad because sdk is not loaded`)
      }
    }

    function Cv(vv) {
      let zv, Pv;
      switch (vv.placement) {
        case "top":
          zv = (window.innerWidth - vv.width) / 2, Pv = Wv;
          break;
        case "right":
          zv = window.innerWidth - vv.width - Wv, Pv = window.innerHeight / 2 - vv.height / 2 - 10;
          break;
        case "left":
          zv = Wv, Pv = window.innerHeight / 2 - vv.height / 2 - 10
      }
      return {
        x1: zv,
        y1: Pv,
        x2: zv + vv.width,
        y2: Pv + vv.height
      }
    }

    function iv(vv, zv) {
      const Pv = Cv(vv),
        hv = Cv(zv);
      return !(Pv.x2 <= hv.x1 || hv.x2 <= Pv.x1 || Pv.y2 <= hv.y1 || hv.y2 <= Pv.y1)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);