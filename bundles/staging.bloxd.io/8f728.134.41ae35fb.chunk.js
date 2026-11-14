export const id = 134;
export const ids = [134];
export const modules = {
  6990: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdMsnAccountSdk: () => Oc,
      MsnSdkAdaptor: () => ec,
      msnMockIdentityStorageKey: () => Mc
    });
    var Vc = nc(1168),
      Ic = nc(1040),
      rB = nc(2642),
      uc = nc(569);
    nc(51);
    const sc = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Mc = "msnMockIdentity";
    let Pc = null;

    function qB() {
      return Pc ??= async function() {
        await (0, Ic.b)(sc, {}, !1);
        for (let cB = 0; cB < 50 && !window.$msstart; cB++) await (0, uc.J)(100)
      }(), Pc
    }
    class Oc {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([qB(), (0, uc.J)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (cB) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", cB), null
        }
        return window.$msstart ? new Oc : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, uc.J)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (cB) {
          return "USER_NOT_CONSENTED" !== (null === cB || void 0 === cB ? void 0 : cB.code) && console.error("Failed to get the signed-in MSN Play player:", cB), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Tc = 20,
      fc = {
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
      mB = {
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
    class ec extends Vc.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await qB(), new ec
      }
      playVideoAd(cB, Bc) {
        this.playVideoOrRewarded("video", cB, cB)
      }
      playRewarded(cB, Bc) {
        this.playVideoOrRewarded("rewarded", cB, Bc)
      }
      canShowBloxdAd(cB) {
        for (const Bc in mB)
          if (cB.adId in mB[Bc]) return !1;
        return !0
      }
      async renderBanner(cB) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,rB.b)(cB)}: msn placement is already showing so not requesting`);
        const Bc = mB[cB.adType][cB.adId];
        if ((0, uc.E)(Bc)) return void console.warn(`AD ${(0,rB.b)(cB)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const nc = [];
        for (const Vc of Bc)
          for (const cB of fc[Vc])
            if (cB.width <= window.innerWidth - 40 && cB.height <= window.innerHeight - 40) {
              const Bc = {
                placement: Vc,
                width: cB.width,
                height: cB.height
              };
              if (!nc.some((cB => Sc(Bc, cB)))) {
                nc.push(Bc);
                break
              }
            } if (nc.length > 0) {
          console.log(`AD ${(0,rB.b)(cB)}: Attempting to show msn units: `, nc);
          const Bc = nc.map((cB => `${cB.placement}:${cB.width}x${cB.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, rB.b)(cB),
            renderPromise: window.$msstart.showDisplayAdsAsync(Bc).then((() => {
              console.log(`AD ${(0,rB.b)(cB)}: Successfully request msn banner ad`)
            })).catch((Bc => {
              console.log(`AD ${(0,rB.b)(cB)}: Error while requesting msn banner ad`, Bc)
            }))
          }
        } else console.warn(`AD ${(0,rB.b)(cB)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(cB) {
        null !== this.currentlyShowingBannerPlacement && (0, rB.b)(cB) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,rB.b)(cB)}: Attempting to clear msn banner ads for banner`, cB), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (cB) {
          console.log("AD: Error while clearing all msn banner ads", cB)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(cB, Bc, nc) {
        const Vc = Bc => {
          console.error(`AD: Error while playing MSN ${cB} ad: `, Bc), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), nc()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${cB} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const nc = async () => {
            try {
              const nc = await window.$msstart.loadAdsAsync("rewarded" === cB),
                Vc = await window.$msstart.showAdsAsync(nc.instanceId);
              this.clearAllBannerAds(), await Vc.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${cB} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Bc()
            } catch (nc) {
              Vc(nc)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), nc()
        } else Vc(`AD: Can't play MSN ${cB} ad because sdk is not loaded`)
      }
    }

    function tB(cB) {
      let Bc, nc;
      switch (cB.placement) {
        case "top":
          Bc = (window.innerWidth - cB.width) / 2, nc = Tc;
          break;
        case "right":
          Bc = window.innerWidth - cB.width - Tc, nc = window.innerHeight / 2 - cB.height / 2 - 10;
          break;
        case "left":
          Bc = Tc, nc = window.innerHeight / 2 - cB.height / 2 - 10
      }
      return {
        x1: Bc,
        y1: nc,
        x2: Bc + cB.width,
        y2: nc + cB.height
      }
    }

    function Sc(cB, Bc) {
      const nc = tB(cB),
        Vc = tB(Bc);
      return !(nc.x2 <= Vc.x1 || Vc.x2 <= nc.x1 || nc.y2 <= Vc.y1 || Vc.y2 <= nc.y1)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);