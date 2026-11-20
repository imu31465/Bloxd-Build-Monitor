export const id = 143;
export const ids = [143];
export const modules = {
  7780: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdMsnAccountSdk: () => Hb,
      MsnSdkAdaptor: () => pb,
      msnMockIdentityStorageKey: () => Yb
    });
    var Bb = hb(1211),
      Ob = hb(1077),
      Gb = hb(3253),
      Ub = hb(588);
    hb(29);
    const Lb = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Yb = "msnMockIdentity";
    let Sb = null;

    function ab() {
      return Sb ??= async function() {
        await (0, Ob.d)(Lb, {}, !1);
        for (let bb = 0; bb < 50 && !window.$msstart; bb++) await (0, Ub.P)(100)
      }(), Sb
    }
    class Hb {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([ab(), (0, Ub.P)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (bb) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", bb), null
        }
        return window.$msstart ? new Hb : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Ub.P)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (bb) {
          return "USER_NOT_CONSENTED" !== (null === bb || void 0 === bb ? void 0 : bb.code) && console.error("Failed to get the signed-in MSN Play player:", bb), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const wb = 20,
      Zb = {
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
      Xb = {
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
    class pb extends Bb.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await ab(), new pb
      }
      playVideoAd(bb, ub) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, ub) {
        this.playVideoOrRewarded("rewarded", bb, ub)
      }
      canShowBloxdAd(bb) {
        for (const ub in Xb)
          if (bb.adId in Xb[ub]) return !1;
        return !0
      }
      async renderBanner(bb) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Gb.e)(bb)}: msn placement is already showing so not requesting`);
        const ub = Xb[bb.adType][bb.adId];
        if ((0, Ub.J)(ub)) return void console.warn(`AD ${(0,Gb.e)(bb)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const hb = [];
        for (const Bb of ub)
          for (const bb of Zb[Bb])
            if (bb.width <= window.innerWidth - 40 && bb.height <= window.innerHeight - 40) {
              const ub = {
                placement: Bb,
                width: bb.width,
                height: bb.height
              };
              if (!hb.some((bb => Ab(ub, bb)))) {
                hb.push(ub);
                break
              }
            } if (hb.length > 0) {
          console.log(`AD ${(0,Gb.e)(bb)}: Attempting to show msn units: `, hb);
          const ub = hb.map((bb => `${bb.placement}:${bb.width}x${bb.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Gb.e)(bb),
            renderPromise: window.$msstart.showDisplayAdsAsync(ub).then((() => {
              console.log(`AD ${(0,Gb.e)(bb)}: Successfully request msn banner ad`)
            })).catch((ub => {
              console.log(`AD ${(0,Gb.e)(bb)}: Error while requesting msn banner ad`, ub)
            }))
          }
        } else console.warn(`AD ${(0,Gb.e)(bb)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(bb) {
        null !== this.currentlyShowingBannerPlacement && (0, Gb.e)(bb) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Gb.e)(bb)}: Attempting to clear msn banner ads for banner`, bb), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (bb) {
          console.log("AD: Error while clearing all msn banner ads", bb)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(bb, ub, hb) {
        const Bb = ub => {
          console.error(`AD: Error while playing MSN ${bb} ad: `, ub), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), hb()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const hb = async () => {
            try {
              const hb = await window.$msstart.loadAdsAsync("rewarded" === bb),
                Bb = await window.$msstart.showAdsAsync(hb.instanceId);
              this.clearAllBannerAds(), await Bb.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ub()
            } catch (hb) {
              Bb(hb)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), hb()
        } else Bb(`AD: Can't play MSN ${bb} ad because sdk is not loaded`)
      }
    }

    function ob(bb) {
      let ub, hb;
      switch (bb.placement) {
        case "top":
          ub = (window.innerWidth - bb.width) / 2, hb = wb;
          break;
        case "right":
          ub = window.innerWidth - bb.width - wb, hb = window.innerHeight / 2 - bb.height / 2 - 10;
          break;
        case "left":
          ub = wb, hb = window.innerHeight / 2 - bb.height / 2 - 10
      }
      return {
        x1: ub,
        y1: hb,
        x2: ub + bb.width,
        y2: hb + bb.height
      }
    }

    function Ab(bb, ub) {
      const hb = ob(bb),
        Bb = ob(ub);
      return !(hb.x2 <= Bb.x1 || Bb.x2 <= hb.x1 || hb.y2 <= Bb.y1 || Bb.y2 <= hb.y1)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);