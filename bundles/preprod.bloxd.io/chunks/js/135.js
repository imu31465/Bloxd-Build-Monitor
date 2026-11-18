export const id = 135;
export const ids = [135];
export const modules = {
  7255: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdMsnAccountSdk: () => Ky,
      MsnSdkAdaptor: () => Sy,
      msnMockIdentityStorageKey: () => Py
    });
    var Uy = Wy(1169),
      hy = Wy(1029),
      fy = Wy(2761),
      Zy = Wy(547);
    Wy(33);
    const cb = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Py = "msnMockIdentity";
    let oy = null;

    function By() {
      return oy ??= async function() {
        await (0, hy.b)(cb, {}, !1);
        for (let yb = 0; yb < 50 && !window.$msstart; yb++) await (0, Zy.H)(100)
      }(), oy
    }
    class Ky {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([By(), (0, Zy.H)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (yb) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", yb), null
        }
        return window.$msstart ? new Ky : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Zy.H)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (yb) {
          return "USER_NOT_CONSENTED" !== (null === yb || void 0 === yb ? void 0 : yb.code) && console.error("Failed to get the signed-in MSN Play player:", yb), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const ey = 20,
      qb = {
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
      sy = {
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
    class Sy extends Uy.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await By(), new Sy
      }
      playVideoAd(yb, bb) {
        this.playVideoOrRewarded("video", yb, yb)
      }
      playRewarded(yb, bb) {
        this.playVideoOrRewarded("rewarded", yb, bb)
      }
      canShowBloxdAd(yb) {
        for (const bb in sy)
          if (yb.adId in sy[bb]) return !1;
        return !0
      }
      async renderBanner(yb) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,fy.c)(yb)}: msn placement is already showing so not requesting`);
        const bb = sy[yb.adType][yb.adId];
        if ((0, Zy.D)(bb)) return void console.warn(`AD ${(0,fy.c)(yb)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Wy = [];
        for (const Uy of bb)
          for (const yb of qb[Uy])
            if (yb.width <= window.innerWidth - 40 && yb.height <= window.innerHeight - 40) {
              const bb = {
                placement: Uy,
                width: yb.width,
                height: yb.height
              };
              if (!Wy.some((yb => ly(bb, yb)))) {
                Wy.push(bb);
                break
              }
            } if (Wy.length > 0) {
          console.log(`AD ${(0,fy.c)(yb)}: Attempting to show msn units: `, Wy);
          const bb = Wy.map((yb => `${yb.placement}:${yb.width}x${yb.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, fy.c)(yb),
            renderPromise: window.$msstart.showDisplayAdsAsync(bb).then((() => {
              console.log(`AD ${(0,fy.c)(yb)}: Successfully request msn banner ad`)
            })).catch((bb => {
              console.log(`AD ${(0,fy.c)(yb)}: Error while requesting msn banner ad`, bb)
            }))
          }
        } else console.warn(`AD ${(0,fy.c)(yb)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(yb) {
        null !== this.currentlyShowingBannerPlacement && (0, fy.c)(yb) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,fy.c)(yb)}: Attempting to clear msn banner ads for banner`, yb), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (yb) {
          console.log("AD: Error while clearing all msn banner ads", yb)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(yb, bb, Wy) {
        const Uy = bb => {
          console.error(`AD: Error while playing MSN ${yb} ad: `, bb), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Wy()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${yb} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Wy = async () => {
            try {
              const Wy = await window.$msstart.loadAdsAsync("rewarded" === yb),
                Uy = await window.$msstart.showAdsAsync(Wy.instanceId);
              this.clearAllBannerAds(), await Uy.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${yb} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), bb()
            } catch (Wy) {
              Uy(Wy)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Wy()
        } else Uy(`AD: Can't play MSN ${yb} ad because sdk is not loaded`)
      }
    }

    function Ey(yb) {
      let bb, Wy;
      switch (yb.placement) {
        case "top":
          bb = (window.innerWidth - yb.width) / 2, Wy = ey;
          break;
        case "right":
          bb = window.innerWidth - yb.width - ey, Wy = window.innerHeight / 2 - yb.height / 2 - 10;
          break;
        case "left":
          bb = ey, Wy = window.innerHeight / 2 - yb.height / 2 - 10
      }
      return {
        x1: bb,
        y1: Wy,
        x2: bb + yb.width,
        y2: Wy + yb.height
      }
    }

    function ly(yb, bb) {
      const Wy = Ey(yb),
        Uy = Ey(bb);
      return !(Wy.x2 <= Uy.x1 || Uy.x2 <= Wy.x1 || Wy.y2 <= Uy.y1 || Uy.y2 <= Wy.y1)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);