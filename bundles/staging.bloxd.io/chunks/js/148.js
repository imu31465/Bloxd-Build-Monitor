export const id = 148;
export const ids = [148];
export const modules = {
  8089: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdMsnAccountSdk: () => tk,
      MsnSdkAdaptor: () => wk,
      msnMockIdentityStorageKey: () => ak
    });
    var Xk = Ik(1295),
      Tk = Ik(1173),
      ik = Ik(3407),
      yk = Ik(628);
    Ik(41);
    const lk = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      ak = "msnMockIdentity";
    let qk = null;

    function Lk() {
      return qk ??= async function() {
        await (0, Tk.d)(lk, {}, !1);
        for (let kk = 0; kk < 50 && !window.$msstart; kk++) await (0, yk.U)(100)
      }(), qk
    }
    class tk {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Lk(), (0, yk.U)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (kk) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", kk), null
        }
        return window.$msstart ? new tk : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, yk.U)(1e4).then((() => {
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
    const Zk = 20,
      jk = {
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
    class wk extends Xk.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Lk(), new wk
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
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,ik.b)(kk)}: msn placement is already showing so not requesting`);
        const Fk = ek[kk.adType][kk.adId];
        if ((0, yk.Q)(Fk)) return void console.warn(`AD ${(0,ik.b)(kk)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Ik = [];
        for (const Xk of Fk)
          for (const kk of jk[Xk])
            if (kk.width <= window.innerWidth - 40 && kk.height <= window.innerHeight - 40) {
              const Fk = {
                placement: Xk,
                width: kk.width,
                height: kk.height
              };
              if (!Ik.some((kk => Jk(Fk, kk)))) {
                Ik.push(Fk);
                break
              }
            } if (Ik.length > 0) {
          console.log(`AD ${(0,ik.b)(kk)}: Attempting to show msn units: `, Ik);
          const Fk = Ik.map((kk => `${kk.placement}:${kk.width}x${kk.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, ik.b)(kk),
            renderPromise: window.$msstart.showDisplayAdsAsync(Fk).then((() => {
              console.log(`AD ${(0,ik.b)(kk)}: Successfully request msn banner ad`)
            })).catch((Fk => {
              console.log(`AD ${(0,ik.b)(kk)}: Error while requesting msn banner ad`, Fk)
            }))
          }
        } else console.warn(`AD ${(0,ik.b)(kk)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(kk) {
        null !== this.currentlyShowingBannerPlacement && (0, ik.b)(kk) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,ik.b)(kk)}: Attempting to clear msn banner ads for banner`, kk), await this.clearAllBannerAds())
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
      playVideoOrRewarded(kk, Fk, Ik) {
        const Xk = Fk => {
          console.error(`AD: Error while playing MSN ${kk} ad: `, Fk), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Ik()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Ik = async () => {
            try {
              const Ik = await window.$msstart.loadAdsAsync("rewarded" === kk),
                Xk = await window.$msstart.showAdsAsync(Ik.instanceId);
              this.clearAllBannerAds(), await Xk.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${kk} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Fk()
            } catch (Ik) {
              Xk(Ik)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Ik()
        } else Xk(`AD: Can't play MSN ${kk} ad because sdk is not loaded`)
      }
    }

    function Hk(kk) {
      let Fk, Ik;
      switch (kk.placement) {
        case "top":
          Fk = (window.innerWidth - kk.width) / 2, Ik = Zk;
          break;
        case "right":
          Fk = window.innerWidth - kk.width - Zk, Ik = window.innerHeight / 2 - kk.height / 2 - 10;
          break;
        case "left":
          Fk = Zk, Ik = window.innerHeight / 2 - kk.height / 2 - 10
      }
      return {
        x1: Fk,
        y1: Ik,
        x2: Fk + kk.width,
        y2: Ik + kk.height
      }
    }

    function Jk(kk, Fk) {
      const Ik = Hk(kk),
        Xk = Hk(Fk);
      return !(Ik.x2 <= Xk.x1 || Xk.x2 <= Ik.x1 || Ik.y2 <= Xk.y1 || Xk.y2 <= Ik.y1)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);