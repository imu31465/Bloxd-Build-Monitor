export const id = 148;
export const ids = [148];
export const modules = {
  8126: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdMsnAccountSdk: () => AD,
      MsnSdkAdaptor: () => BD,
      msnMockIdentityStorageKey: () => cD
    });
    var pD = wD(1326),
      sD = wD(1186),
      KD = wD(3470),
      rD = wD(619);
    wD(35);
    const LD = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      cD = "msnMockIdentity";
    let gD = null;

    function RD() {
      return gD ??= async function() {
        await (0, sD.b)(LD, {}, !1);
        for (let DD = 0; DD < 50 && !window.$msstart; DD++) await (0, rD.H)(100)
      }(), gD
    }
    class AD {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([RD(), (0, rD.H)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (DD) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", DD), null
        }
        return window.$msstart ? new AD : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, rD.H)(1e4).then((() => {
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
    const UD = 20,
      fD = {
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
      ID = {
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
    class BD extends pD.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await RD(), new BD
      }
      playVideoAd(DD, zD) {
        this.playVideoOrRewarded("video", DD, DD)
      }
      playRewarded(DD, zD) {
        this.playVideoOrRewarded("rewarded", DD, zD)
      }
      canShowBloxdAd(DD) {
        for (const zD in ID)
          if (DD.adId in ID[zD]) return !1;
        return !0
      }
      async renderBanner(DD) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,KD.b)(DD)}: msn placement is already showing so not requesting`);
        const zD = ID[DD.adType][DD.adId];
        if ((0, rD.B)(zD)) return void console.warn(`AD ${(0,KD.b)(DD)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const wD = [];
        for (const pD of zD)
          for (const DD of fD[pD])
            if (DD.width <= window.innerWidth - 40 && DD.height <= window.innerHeight - 40) {
              const zD = {
                placement: pD,
                width: DD.width,
                height: DD.height
              };
              if (!wD.some((DD => hD(zD, DD)))) {
                wD.push(zD);
                break
              }
            } if (wD.length > 0) {
          console.log(`AD ${(0,KD.b)(DD)}: Attempting to show msn units: `, wD);
          const zD = wD.map((DD => `${DD.placement}:${DD.width}x${DD.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, KD.b)(DD),
            renderPromise: window.$msstart.showDisplayAdsAsync(zD).then((() => {
              console.log(`AD ${(0,KD.b)(DD)}: Successfully request msn banner ad`)
            })).catch((zD => {
              console.log(`AD ${(0,KD.b)(DD)}: Error while requesting msn banner ad`, zD)
            }))
          }
        } else console.warn(`AD ${(0,KD.b)(DD)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(DD) {
        null !== this.currentlyShowingBannerPlacement && (0, KD.b)(DD) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,KD.b)(DD)}: Attempting to clear msn banner ads for banner`, DD), await this.clearAllBannerAds())
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
      playVideoOrRewarded(DD, zD, wD) {
        const pD = zD => {
          console.error(`AD: Error while playing MSN ${DD} ad: `, zD), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), wD()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${DD} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const wD = async () => {
            try {
              const wD = await window.$msstart.loadAdsAsync("rewarded" === DD),
                pD = await window.$msstart.showAdsAsync(wD.instanceId);
              this.clearAllBannerAds(), await pD.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${DD} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zD()
            } catch (wD) {
              pD(wD)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), wD()
        } else pD(`AD: Can't play MSN ${DD} ad because sdk is not loaded`)
      }
    }

    function GD(DD) {
      let zD, wD;
      switch (DD.placement) {
        case "top":
          zD = (window.innerWidth - DD.width) / 2, wD = UD;
          break;
        case "right":
          zD = window.innerWidth - DD.width - UD, wD = window.innerHeight / 2 - DD.height / 2 - 10;
          break;
        case "left":
          zD = UD, wD = window.innerHeight / 2 - DD.height / 2 - 10
      }
      return {
        x1: zD,
        y1: wD,
        x2: zD + DD.width,
        y2: wD + DD.height
      }
    }

    function hD(DD, zD) {
      const wD = GD(DD),
        pD = GD(zD);
      return !(wD.x2 <= pD.x1 || pD.x2 <= wD.x1 || wD.y2 <= pD.y1 || pD.y2 <= wD.y1)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);