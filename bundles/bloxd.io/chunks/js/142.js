export const id = 142;
export const ids = [142];
export const modules = {
  7797: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdMsnAccountSdk: () => BD,
      MsnSdkAdaptor: () => ZD,
      msnMockIdentityStorageKey: () => QD
    });
    var ID = cD(1308),
      pD = cD(1181),
      iD = cD(3266),
      fD = cD(624);
    cD(36);
    const bD = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      QD = "msnMockIdentity";
    let wD = null;

    function SD() {
      return wD ??= async function() {
        await (0, pD.e)(bD, {}, !1);
        for (let DD = 0; DD < 50 && !window.$msstart; DD++) await (0, fD.H)(100)
      }(), wD
    }
    class BD {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([SD(), (0, fD.H)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (DD) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", DD), null
        }
        return window.$msstart ? new BD : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, fD.H)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (DD) {
          return "USER_NOT_CONSENTED" !== (null === DD || void 0 === DD ? void 0 : DD.code) && console.error("Failed to get the signed-in MSN Play player:", DD), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const yD = 20,
      MD = {
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
      tD = {
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
    class ZD extends ID.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await SD(), new ZD
      }
      playVideoAd(DD, CD) {
        this.playVideoOrRewarded("video", DD, DD)
      }
      playRewarded(DD, CD) {
        this.playVideoOrRewarded("rewarded", DD, CD)
      }
      canShowBloxdAd(DD) {
        for (const CD in tD)
          if (DD.adId in tD[CD]) return !1;
        return !0
      }
      async renderBanner(DD) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,iD.b)(DD)}: msn placement is already showing so not requesting`);
        const CD = tD[DD.adType][DD.adId];
        if ((0, fD.C)(CD)) return void console.warn(`AD ${(0,iD.b)(DD)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const cD = [];
        for (const ID of CD)
          for (const DD of MD[ID])
            if (DD.width <= window.innerWidth - 40 && DD.height <= window.innerHeight - 40) {
              const CD = {
                placement: ID,
                width: DD.width,
                height: DD.height
              };
              if (!cD.some((DD => vD(CD, DD)))) {
                cD.push(CD);
                break
              }
            } if (cD.length > 0) {
          console.log(`AD ${(0,iD.b)(DD)}: Attempting to show msn units: `, cD);
          const CD = cD.map((DD => `${DD.placement}:${DD.width}x${DD.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, iD.b)(DD),
            renderPromise: window.$msstart.showDisplayAdsAsync(CD).then((() => {
              console.log(`AD ${(0,iD.b)(DD)}: Successfully request msn banner ad`)
            })).catch((CD => {
              console.log(`AD ${(0,iD.b)(DD)}: Error while requesting msn banner ad`, CD)
            }))
          }
        } else console.warn(`AD ${(0,iD.b)(DD)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(DD) {
        null !== this.currentlyShowingBannerPlacement && (0, iD.b)(DD) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,iD.b)(DD)}: Attempting to clear msn banner ads for banner`, DD), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (DD) {
          console.log("AD: Error while clearing all msn banner ads", DD)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(DD, CD, cD) {
        const ID = CD => {
          console.error(`AD: Error while playing MSN ${DD} ad: `, CD), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), cD()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${DD} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const cD = async () => {
            try {
              const cD = await window.$msstart.loadAdsAsync("rewarded" === DD),
                ID = await window.$msstart.showAdsAsync(cD.instanceId);
              this.clearAllBannerAds(), await ID.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${DD} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), CD()
            } catch (cD) {
              ID(cD)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), cD()
        } else ID(`AD: Can't play MSN ${DD} ad because sdk is not loaded`)
      }
    }

    function oD(DD) {
      let CD, cD;
      switch (DD.placement) {
        case "top":
          CD = (window.innerWidth - DD.width) / 2, cD = yD;
          break;
        case "right":
          CD = window.innerWidth - DD.width - yD, cD = window.innerHeight / 2 - DD.height / 2 - 10;
          break;
        case "left":
          CD = yD, cD = window.innerHeight / 2 - DD.height / 2 - 10
      }
      return {
        x1: CD,
        y1: cD,
        x2: CD + DD.width,
        y2: cD + DD.height
      }
    }

    function vD(DD, CD) {
      const cD = oD(DD),
        ID = oD(CD);
      return !(cD.x2 <= ID.x1 || ID.x2 <= cD.x1 || cD.y2 <= ID.y1 || ID.y2 <= cD.y1)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);