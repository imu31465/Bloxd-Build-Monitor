export const id = 142;
export const ids = [142];
export const modules = {
  7726: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdMsnAccountSdk: () => Mb,
      MsnSdkAdaptor: () => lb,
      msnMockIdentityStorageKey: () => Ib
    });
    var kb = sb(1307),
      Wb = sb(1185),
      ab = sb(3234),
      Tb = sb(628);
    sb(37);
    const Ub = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Ib = "msnMockIdentity";
    let Hb = null;

    function fb() {
      return Hb ??= async function() {
        await (0, Wb.d)(Ub, {}, !1);
        for (let bb = 0; bb < 50 && !window.$msstart; bb++) await (0, Tb.Q)(100)
      }(), Hb
    }
    class Mb {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([fb(), (0, Tb.Q)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (bb) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", bb), null
        }
        return window.$msstart ? new Mb : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Tb.Q)(1e4).then((() => {
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
    const Xb = 20,
      nb = {
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
      mb = {
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
    class lb extends kb.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await fb(), new lb
      }
      playVideoAd(bb, cb) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, cb) {
        this.playVideoOrRewarded("rewarded", bb, cb)
      }
      canShowBloxdAd(bb) {
        for (const cb in mb)
          if (bb.adId in mb[cb]) return !1;
        return !0
      }
      async renderBanner(bb) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,ab.c)(bb)}: msn placement is already showing so not requesting`);
        const cb = mb[bb.adType][bb.adId];
        if ((0, Tb.L)(cb)) return void console.warn(`AD ${(0,ab.c)(bb)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const sb = [];
        for (const kb of cb)
          for (const bb of nb[kb])
            if (bb.width <= window.innerWidth - 40 && bb.height <= window.innerHeight - 40) {
              const cb = {
                placement: kb,
                width: bb.width,
                height: bb.height
              };
              if (!sb.some((bb => eb(cb, bb)))) {
                sb.push(cb);
                break
              }
            } if (sb.length > 0) {
          console.log(`AD ${(0,ab.c)(bb)}: Attempting to show msn units: `, sb);
          const cb = sb.map((bb => `${bb.placement}:${bb.width}x${bb.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, ab.c)(bb),
            renderPromise: window.$msstart.showDisplayAdsAsync(cb).then((() => {
              console.log(`AD ${(0,ab.c)(bb)}: Successfully request msn banner ad`)
            })).catch((cb => {
              console.log(`AD ${(0,ab.c)(bb)}: Error while requesting msn banner ad`, cb)
            }))
          }
        } else console.warn(`AD ${(0,ab.c)(bb)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(bb) {
        null !== this.currentlyShowingBannerPlacement && (0, ab.c)(bb) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,ab.c)(bb)}: Attempting to clear msn banner ads for banner`, bb), await this.clearAllBannerAds())
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
      playVideoOrRewarded(bb, cb, sb) {
        const kb = cb => {
          console.error(`AD: Error while playing MSN ${bb} ad: `, cb), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), sb()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const sb = async () => {
            try {
              const sb = await window.$msstart.loadAdsAsync("rewarded" === bb),
                kb = await window.$msstart.showAdsAsync(sb.instanceId);
              this.clearAllBannerAds(), await kb.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), cb()
            } catch (sb) {
              kb(sb)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), sb()
        } else kb(`AD: Can't play MSN ${bb} ad because sdk is not loaded`)
      }
    }

    function Qb(bb) {
      let cb, sb;
      switch (bb.placement) {
        case "top":
          cb = (window.innerWidth - bb.width) / 2, sb = Xb;
          break;
        case "right":
          cb = window.innerWidth - bb.width - Xb, sb = window.innerHeight / 2 - bb.height / 2 - 10;
          break;
        case "left":
          cb = Xb, sb = window.innerHeight / 2 - bb.height / 2 - 10
      }
      return {
        x1: cb,
        y1: sb,
        x2: cb + bb.width,
        y2: sb + bb.height
      }
    }

    function eb(bb, cb) {
      const sb = Qb(bb),
        kb = Qb(cb);
      return !(sb.x2 <= kb.x1 || kb.x2 <= sb.x1 || sb.y2 <= kb.y1 || kb.y2 <= sb.y1)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);