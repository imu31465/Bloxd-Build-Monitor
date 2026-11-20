export const id = 142;
export const ids = [142];
export const modules = {
  7759: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdMsnAccountSdk: () => Vk,
      MsnSdkAdaptor: () => yk,
      msnMockIdentityStorageKey: () => wk
    });
    var Rk = Bk(1262),
      tk = Bk(1139),
      ak = Bk(3265),
      Xk = Bk(606);
    Bk(42);
    const bk = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      wk = "msnMockIdentity";
    let dk = null;

    function sk() {
      return dk ??= async function() {
        await (0, tk.b)(bk, {}, !1);
        for (let kk = 0; kk < 50 && !window.$msstart; kk++) await (0, Xk.M)(100)
      }(), dk
    }
    class Vk {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([sk(), (0, Xk.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (kk) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", kk), null
        }
        return window.$msstart ? new Vk : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Xk.M)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (kk) {
          return "USER_NOT_CONSENTED" !== (null === kk || void 0 === kk ? void 0 : kk.code) && console.error("Failed to get the signed-in MSN Play player:", kk), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Jk = 20,
      Ak = {
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
      ek = {
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
    class yk extends Rk.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await sk(), new yk
      }
      playVideoAd(kk, Fk) {
        this.playVideoOrRewarded("video", kk, kk)
      }
      playRewarded(kk, Fk) {
        this.playVideoOrRewarded("rewarded", kk, Fk)
      }
      canShowBloxdAd(kk) {
        for (const Fk in ek)
          if (kk.adId in ek[Fk]) return !1;
        return !0
      }
      async renderBanner(kk) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,ak.d)(kk)}: msn placement is already showing so not requesting`);
        const Fk = ek[kk.adType][kk.adId];
        if ((0, Xk.F)(Fk)) return void console.warn(`AD ${(0,ak.d)(kk)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Bk = [];
        for (const Rk of Fk)
          for (const kk of Ak[Rk])
            if (kk.width <= window.innerWidth - 40 && kk.height <= window.innerHeight - 40) {
              const Fk = {
                placement: Rk,
                width: kk.width,
                height: kk.height
              };
              if (!Bk.some((kk => mk(Fk, kk)))) {
                Bk.push(Fk);
                break
              }
            } if (Bk.length > 0) {
          console.log(`AD ${(0,ak.d)(kk)}: Attempting to show msn units: `, Bk);
          const Fk = Bk.map((kk => `${kk.placement}:${kk.width}x${kk.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, ak.d)(kk),
            renderPromise: window.$msstart.showDisplayAdsAsync(Fk).then((() => {
              console.log(`AD ${(0,ak.d)(kk)}: Successfully request msn banner ad`)
            })).catch((Fk => {
              console.log(`AD ${(0,ak.d)(kk)}: Error while requesting msn banner ad`, Fk)
            }))
          }
        } else console.warn(`AD ${(0,ak.d)(kk)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(kk) {
        null !== this.currentlyShowingBannerPlacement && (0, ak.d)(kk) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,ak.d)(kk)}: Attempting to clear msn banner ads for banner`, kk), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (kk) {
          console.log("AD: Error while clearing all msn banner ads", kk)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(kk, Fk, Bk) {
        const Rk = Fk => {
          console.error(`AD: Error while playing MSN ${kk} ad: `, Fk), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Bk()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Bk = async () => {
            try {
              const Bk = await window.$msstart.loadAdsAsync("rewarded" === kk),
                Rk = await window.$msstart.showAdsAsync(Bk.instanceId);
              this.clearAllBannerAds(), await Rk.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Fk()
            } catch (Bk) {
              Rk(Bk)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Bk()
        } else Rk(`AD: Can't play MSN ${kk} ad because sdk is not loaded`)
      }
    }

    function fk(kk) {
      let Fk, Bk;
      switch (kk.placement) {
        case "top":
          Fk = (window.innerWidth - kk.width) / 2, Bk = Jk;
          break;
        case "right":
          Fk = window.innerWidth - kk.width - Jk, Bk = window.innerHeight / 2 - kk.height / 2 - 10;
          break;
        case "left":
          Fk = Jk, Bk = window.innerHeight / 2 - kk.height / 2 - 10
      }
      return {
        x1: Fk,
        y1: Bk,
        x2: Fk + kk.width,
        y2: Bk + kk.height
      }
    }

    function mk(kk, Fk) {
      const Bk = fk(kk),
        Rk = fk(Fk);
      return !(Bk.x2 <= Rk.x1 || Rk.x2 <= Bk.x1 || Bk.y2 <= Rk.y1 || Rk.y2 <= Bk.y1)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);