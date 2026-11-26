export const id = 161;
export const ids = [161];
export const modules = {
  7274: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdMsnAccountSdk: () => ZV,
      MsnSdkAdaptor: () => bV
    });
    var JV = xV(1389),
      YV = xV(1213),
      UV = xV(3919),
      yV = xV(657),
      pV = xV(1820);
    const QV = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let nV = null;

    function wV() {
      return nV ??= async function() {
        await (0, YV.d)(QV, {}, !1);
        for (let VV = 0; VV < 50 && !window.$msstart; VV++) await (0, yV.R)(100)
      }(), nV
    }
    class ZV {
      constructor() {}
      static async setup() {
        if (null !== (0, pV.c)()) return new ZV;
        try {
          await Promise.race([wV(), (0, yV.R)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (VV) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", VV), null
        }
        return window.$msstart ? new ZV : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const VV = (0, pV.c)();
        if (null !== VV) return VV;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, yV.R)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (eV) {
          return "USER_NOT_CONSENTED" !== (null === eV || void 0 === eV ? void 0 : eV.code) && console.error("Failed to get the signed-in MSN Play player:", eV), null
        }
      }
      async signIn() {
        var VV;
        return null !== (VV = (0, pV.c)()) && void 0 !== VV ? VV : await window.$msstart.signInAsync()
      }
    }
    const vV = 20,
      rV = {
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
      kV = {
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
    class bV extends JV.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await wV(), new bV
      }
      playVideoAd(VV, eV) {
        this.playVideoOrRewarded("video", VV, VV)
      }
      playRewarded(VV, eV) {
        this.playVideoOrRewarded("rewarded", VV, eV)
      }
      canShowBloxdAd(VV) {
        for (const eV in kV)
          if (VV.adId in kV[eV]) return !1;
        return !0
      }
      async renderBanner(VV) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,UV.e)(VV)}: msn placement is already showing so not requesting`);
        const eV = kV[VV.adType][VV.adId];
        if ((0, yV.J)(eV)) return void console.warn(`AD ${(0,UV.e)(VV)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const xV = [];
        for (const JV of eV)
          for (const VV of rV[JV])
            if (VV.width <= window.innerWidth - 40 && VV.height <= window.innerHeight - 40) {
              const eV = {
                placement: JV,
                width: VV.width,
                height: VV.height
              };
              if (!xV.some((VV => BV(eV, VV)))) {
                xV.push(eV);
                break
              }
            } if (xV.length > 0) {
          console.log(`AD ${(0,UV.e)(VV)}: Attempting to show msn units: `, xV);
          const eV = xV.map((VV => `${VV.placement}:${VV.width}x${VV.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, UV.e)(VV),
            renderPromise: window.$msstart.showDisplayAdsAsync(eV).then((() => {
              console.log(`AD ${(0,UV.e)(VV)}: Successfully request msn banner ad`)
            })).catch((eV => {
              console.log(`AD ${(0,UV.e)(VV)}: Error while requesting msn banner ad`, eV)
            }))
          }
        } else console.warn(`AD ${(0,UV.e)(VV)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(VV) {
        null !== this.currentlyShowingBannerPlacement && (0, UV.e)(VV) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,UV.e)(VV)}: Attempting to clear msn banner ads for banner`, VV), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (VV) {
          console.log("AD: Error while clearing all msn banner ads", VV)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(VV, eV, xV) {
        const JV = eV => {
          console.error(`AD: Error while playing MSN ${VV} ad: `, eV), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), xV()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${VV} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const xV = async () => {
            try {
              const xV = await window.$msstart.loadAdsAsync("rewarded" === VV),
                JV = await window.$msstart.showAdsAsync(xV.instanceId);
              this.clearAllBannerAds(), await JV.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${VV} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), eV()
            } catch (xV) {
              JV(xV)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), xV()
        } else JV(`AD: Can't play MSN ${VV} ad because sdk is not loaded`)
      }
    }

    function EV(VV) {
      let eV, xV;
      switch (VV.placement) {
        case "top":
          eV = (window.innerWidth - VV.width) / 2, xV = vV;
          break;
        case "right":
          eV = window.innerWidth - VV.width - vV, xV = window.innerHeight / 2 - VV.height / 2 - 10;
          break;
        case "left":
          eV = vV, xV = window.innerHeight / 2 - VV.height / 2 - 10
      }
      return {
        x1: eV,
        y1: xV,
        x2: eV + VV.width,
        y2: xV + VV.height
      }
    }

    function BV(VV, eV) {
      const xV = EV(VV),
        JV = EV(eV);
      return !(xV.x2 <= JV.x1 || JV.x2 <= xV.x1 || xV.y2 <= JV.y1 || JV.y2 <= xV.y1)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);