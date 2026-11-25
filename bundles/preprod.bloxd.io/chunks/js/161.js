export const id = 161;
export const ids = [161];
export const modules = {
  7190: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdMsnAccountSdk: () => LM,
      MsnSdkAdaptor: () => JM
    });
    var OM = iM(1367),
      SM = iM(1177),
      jM = iM(3868),
      aM = iM(625),
      PM = iM(1821);
    const nM = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let QM = null;

    function zM() {
      return QM ??= async function() {
        await (0, SM.d)(nM, {}, !1);
        for (let MM = 0; MM < 50 && !window.$msstart; MM++) await (0, aM.Q)(100)
      }(), QM
    }
    class LM {
      constructor() {}
      static async setup() {
        if (null !== (0, PM.b)()) return new LM;
        try {
          await Promise.race([zM(), (0, aM.Q)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (MM) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", MM), null
        }
        return window.$msstart ? new LM : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const MM = (0, PM.b)();
        if (null !== MM) return MM;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, aM.Q)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (rM) {
          return "USER_NOT_CONSENTED" !== (null === rM || void 0 === rM ? void 0 : rM.code) && console.error("Failed to get the signed-in MSN Play player:", rM), null
        }
      }
      async signIn() {
        var MM;
        return null !== (MM = (0, PM.b)()) && void 0 !== MM ? MM : await window.$msstart.signInAsync()
      }
    }
    const mM = 20,
      HM = {
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
      hM = {
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
    class JM extends OM.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await zM(), new JM
      }
      playVideoAd(MM, rM) {
        this.playVideoOrRewarded("video", MM, MM)
      }
      playRewarded(MM, rM) {
        this.playVideoOrRewarded("rewarded", MM, rM)
      }
      canShowBloxdAd(MM) {
        for (const rM in hM)
          if (MM.adId in hM[rM]) return !1;
        return !0
      }
      async renderBanner(MM) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,jM.b)(MM)}: msn placement is already showing so not requesting`);
        const rM = hM[MM.adType][MM.adId];
        if ((0, aM.J)(rM)) return void console.warn(`AD ${(0,jM.b)(MM)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const iM = [];
        for (const OM of rM)
          for (const MM of HM[OM])
            if (MM.width <= window.innerWidth - 40 && MM.height <= window.innerHeight - 40) {
              const rM = {
                placement: OM,
                width: MM.width,
                height: MM.height
              };
              if (!iM.some((MM => yM(rM, MM)))) {
                iM.push(rM);
                break
              }
            } if (iM.length > 0) {
          console.log(`AD ${(0,jM.b)(MM)}: Attempting to show msn units: `, iM);
          const rM = iM.map((MM => `${MM.placement}:${MM.width}x${MM.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, jM.b)(MM),
            renderPromise: window.$msstart.showDisplayAdsAsync(rM).then((() => {
              console.log(`AD ${(0,jM.b)(MM)}: Successfully request msn banner ad`)
            })).catch((rM => {
              console.log(`AD ${(0,jM.b)(MM)}: Error while requesting msn banner ad`, rM)
            }))
          }
        } else console.warn(`AD ${(0,jM.b)(MM)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(MM) {
        null !== this.currentlyShowingBannerPlacement && (0, jM.b)(MM) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,jM.b)(MM)}: Attempting to clear msn banner ads for banner`, MM), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (MM) {
          console.log("AD: Error while clearing all msn banner ads", MM)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(MM, rM, iM) {
        const OM = rM => {
          console.error(`AD: Error while playing MSN ${MM} ad: `, rM), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), iM()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${MM} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const iM = async () => {
            try {
              const iM = await window.$msstart.loadAdsAsync("rewarded" === MM),
                OM = await window.$msstart.showAdsAsync(iM.instanceId);
              this.clearAllBannerAds(), await OM.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${MM} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), rM()
            } catch (iM) {
              OM(iM)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), iM()
        } else OM(`AD: Can't play MSN ${MM} ad because sdk is not loaded`)
      }
    }

    function dM(MM) {
      let rM, iM;
      switch (MM.placement) {
        case "top":
          rM = (window.innerWidth - MM.width) / 2, iM = mM;
          break;
        case "right":
          rM = window.innerWidth - MM.width - mM, iM = window.innerHeight / 2 - MM.height / 2 - 10;
          break;
        case "left":
          rM = mM, iM = window.innerHeight / 2 - MM.height / 2 - 10
      }
      return {
        x1: rM,
        y1: iM,
        x2: rM + MM.width,
        y2: iM + MM.height
      }
    }

    function yM(MM, rM) {
      const iM = dM(MM),
        OM = dM(rM);
      return !(iM.x2 <= OM.x1 || OM.x2 <= iM.x1 || iM.y2 <= OM.y1 || OM.y2 <= iM.y1)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);