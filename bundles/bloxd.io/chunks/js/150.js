export const id = 150;
export const ids = [150];
export const modules = {
  8332: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdMsnAccountSdk: () => Qt,
      MsnSdkAdaptor: () => wt
    });
    var Ot = Vt(1419),
      qt = Vt(1275),
      Dt = Vt(3540),
      mt = Vt(710),
      dt = Vt(1822);
    const jt = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let Ht = null;

    function Xt() {
      return Ht ??= async function() {
        await (0, qt.d)(jt, {}, !1);
        for (let tt = 0; tt < 50 && !window.$msstart; tt++) await (0, mt.G)(100)
      }(), Ht
    }
    class Qt {
      constructor() {}
      static async setup() {
        if (null !== (0, dt.c)()) return new Qt;
        try {
          await Promise.race([Xt(), (0, mt.G)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (tt) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", tt), null
        }
        return window.$msstart ? new Qt : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const tt = (0, dt.c)();
        if (null !== tt) return tt;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, mt.G)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (et) {
          return "USER_NOT_CONSENTED" !== (null === et || void 0 === et ? void 0 : et.code) && console.error("Failed to get the signed-in MSN Play player:", et), null
        }
      }
      async signIn() {
        var tt;
        return null !== (tt = (0, dt.c)()) && void 0 !== tt ? tt : await window.$msstart.signInAsync()
      }
    }
    const lt = 20,
      Et = {
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
      ft = {
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
    class wt extends Ot.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Xt(), new wt
      }
      playVideoAd(tt, et) {
        this.playVideoOrRewarded("video", tt, tt)
      }
      playRewarded(tt, et) {
        this.playVideoOrRewarded("rewarded", tt, et)
      }
      canShowBloxdAd(tt) {
        for (const et in ft)
          if (tt.adId in ft[et]) return !1;
        return !0
      }
      async renderBanner(tt) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Dt.c)(tt)}: msn placement is already showing so not requesting`);
        const et = ft[tt.adType][tt.adId];
        if ((0, mt.B)(et)) return void console.warn(`AD ${(0,Dt.c)(tt)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Vt = [];
        for (const Ot of et)
          for (const tt of Et[Ot])
            if (tt.width <= window.innerWidth - 40 && tt.height <= window.innerHeight - 40) {
              const et = {
                placement: Ot,
                width: tt.width,
                height: tt.height
              };
              if (!Vt.some((tt => Nt(et, tt)))) {
                Vt.push(et);
                break
              }
            } if (Vt.length > 0) {
          console.log(`AD ${(0,Dt.c)(tt)}: Attempting to show msn units: `, Vt);
          const et = Vt.map((tt => `${tt.placement}:${tt.width}x${tt.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Dt.c)(tt),
            renderPromise: window.$msstart.showDisplayAdsAsync(et).then((() => {
              console.log(`AD ${(0,Dt.c)(tt)}: Successfully request msn banner ad`)
            })).catch((et => {
              console.log(`AD ${(0,Dt.c)(tt)}: Error while requesting msn banner ad`, et)
            }))
          }
        } else console.warn(`AD ${(0,Dt.c)(tt)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(tt) {
        null !== this.currentlyShowingBannerPlacement && (0, Dt.c)(tt) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Dt.c)(tt)}: Attempting to clear msn banner ads for banner`, tt), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (tt) {
          console.log("AD: Error while clearing all msn banner ads", tt)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(tt, et, Vt) {
        const Ot = et => {
          console.error(`AD: Error while playing MSN ${tt} ad: `, et), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Vt()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${tt} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Vt = async () => {
            try {
              const Vt = await window.$msstart.loadAdsAsync("rewarded" === tt),
                Ot = await window.$msstart.showAdsAsync(Vt.instanceId);
              this.clearAllBannerAds(), await Ot.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${tt} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), et()
            } catch (Vt) {
              Ot(Vt)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Vt()
        } else Ot(`AD: Can't play MSN ${tt} ad because sdk is not loaded`)
      }
    }

    function yt(tt) {
      let et, Vt;
      switch (tt.placement) {
        case "top":
          et = (window.innerWidth - tt.width) / 2, Vt = lt;
          break;
        case "right":
          et = window.innerWidth - tt.width - lt, Vt = window.innerHeight / 2 - tt.height / 2 - 10;
          break;
        case "left":
          et = lt, Vt = window.innerHeight / 2 - tt.height / 2 - 10
      }
      return {
        x1: et,
        y1: Vt,
        x2: et + tt.width,
        y2: Vt + tt.height
      }
    }

    function Nt(tt, et) {
      const Vt = yt(tt),
        Ot = yt(et);
      return !(Vt.x2 <= Ot.x1 || Ot.x2 <= Vt.x1 || Vt.y2 <= Ot.y1 || Ot.y2 <= Vt.y1)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);