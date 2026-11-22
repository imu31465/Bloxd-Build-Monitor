export const id = 147;
export const ids = [147];
export const modules = {
  7922: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdMsnAccountSdk: () => Kk,
      MsnSdkAdaptor: () => Hk,
      msnMockIdentityStorageKey: () => Pk
    });
    var Dk = ik(1298),
      fk = ik(1163),
      Sk = ik(3430),
      bk = ik(594);
    ik(38);
    const rk = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Pk = "msnMockIdentity";
    let mk = null;

    function Mk() {
      return mk ??= async function() {
        await (0, fk.d)(rk, {}, !1);
        for (let kk = 0; kk < 50 && !window.$msstart; kk++) await (0, bk.H)(100)
      }(), mk
    }
    class Kk {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Mk(), (0, bk.H)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (kk) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", kk), null
        }
        return window.$msstart ? new Kk : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, bk.H)(1e4).then((() => {
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
    const xk = 20,
      nk = {
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
      Uk = {
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
    class Hk extends Dk.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Mk(), new Hk
      }
      playVideoAd(kk, ek) {
        this.playVideoOrRewarded("video", kk, kk)
      }
      playRewarded(kk, ek) {
        this.playVideoOrRewarded("rewarded", kk, ek)
      }
      canShowBloxdAd(kk) {
        for (const ek in Uk)
          if (kk.adId in Uk[ek]) return !1;
        return !0
      }
      async renderBanner(kk) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Sk.d)(kk)}: msn placement is already showing so not requesting`);
        const ek = Uk[kk.adType][kk.adId];
        if ((0, bk.F)(ek)) return void console.warn(`AD ${(0,Sk.d)(kk)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const ik = [];
        for (const Dk of ek)
          for (const kk of nk[Dk])
            if (kk.width <= window.innerWidth - 40 && kk.height <= window.innerHeight - 40) {
              const ek = {
                placement: Dk,
                width: kk.width,
                height: kk.height
              };
              if (!ik.some((kk => lk(ek, kk)))) {
                ik.push(ek);
                break
              }
            } if (ik.length > 0) {
          console.log(`AD ${(0,Sk.d)(kk)}: Attempting to show msn units: `, ik);
          const ek = ik.map((kk => `${kk.placement}:${kk.width}x${kk.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Sk.d)(kk),
            renderPromise: window.$msstart.showDisplayAdsAsync(ek).then((() => {
              console.log(`AD ${(0,Sk.d)(kk)}: Successfully request msn banner ad`)
            })).catch((ek => {
              console.log(`AD ${(0,Sk.d)(kk)}: Error while requesting msn banner ad`, ek)
            }))
          }
        } else console.warn(`AD ${(0,Sk.d)(kk)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(kk) {
        null !== this.currentlyShowingBannerPlacement && (0, Sk.d)(kk) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Sk.d)(kk)}: Attempting to clear msn banner ads for banner`, kk), await this.clearAllBannerAds())
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
      playVideoOrRewarded(kk, ek, ik) {
        const Dk = ek => {
          console.error(`AD: Error while playing MSN ${kk} ad: `, ek), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ik()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const ik = async () => {
            try {
              const ik = await window.$msstart.loadAdsAsync("rewarded" === kk),
                Dk = await window.$msstart.showAdsAsync(ik.instanceId);
              this.clearAllBannerAds(), await Dk.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ek()
            } catch (ik) {
              Dk(ik)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), ik()
        } else Dk(`AD: Can't play MSN ${kk} ad because sdk is not loaded`)
      }
    }

    function wk(kk) {
      let ek, ik;
      switch (kk.placement) {
        case "top":
          ek = (window.innerWidth - kk.width) / 2, ik = xk;
          break;
        case "right":
          ek = window.innerWidth - kk.width - xk, ik = window.innerHeight / 2 - kk.height / 2 - 10;
          break;
        case "left":
          ek = xk, ik = window.innerHeight / 2 - kk.height / 2 - 10
      }
      return {
        x1: ek,
        y1: ik,
        x2: ek + kk.width,
        y2: ik + kk.height
      }
    }

    function lk(kk, ek) {
      const ik = wk(kk),
        Dk = wk(ek);
      return !(ik.x2 <= Dk.x1 || Dk.x2 <= ik.x1 || ik.y2 <= Dk.y1 || Dk.y2 <= ik.y1)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);