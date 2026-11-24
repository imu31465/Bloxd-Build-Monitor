export const id = 148;
export const ids = [148];
export const modules = {
  8264: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdMsnAccountSdk: () => fS,
      MsnSdkAdaptor: () => jS,
      msnMockIdentityStorageKey: () => qS
    });
    var tS = gS(1397),
      bS = gS(1267),
      XS = gS(3602),
      xS = gS(680);
    gS(45);
    const NS = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      qS = "msnMockIdentity";
    let uS = null;

    function IS() {
      return uS ??= async function() {
        await (0, bS.c)(NS, {}, !1);
        for (let SS = 0; SS < 50 && !window.$msstart; SS++) await (0, xS.Q)(100)
      }(), uS
    }
    class fS {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([IS(), (0, xS.Q)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (SS) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", SS), null
        }
        return window.$msstart ? new fS : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, xS.Q)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (SS) {
          return "USER_NOT_CONSENTED" !== (null === SS || void 0 === SS ? void 0 : SS.code) && console.error("Failed to get the signed-in MSN Play player:", SS), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const kS = 20,
      aS = {
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
      KS = {
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
    class jS extends tS.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await IS(), new jS
      }
      playVideoAd(SS, HS) {
        this.playVideoOrRewarded("video", SS, SS)
      }
      playRewarded(SS, HS) {
        this.playVideoOrRewarded("rewarded", SS, HS)
      }
      canShowBloxdAd(SS) {
        for (const HS in KS)
          if (SS.adId in KS[HS]) return !1;
        return !0
      }
      async renderBanner(SS) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,XS.b)(SS)}: msn placement is already showing so not requesting`);
        const HS = KS[SS.adType][SS.adId];
        if ((0, xS.K)(HS)) return void console.warn(`AD ${(0,XS.b)(SS)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const gS = [];
        for (const tS of HS)
          for (const SS of aS[tS])
            if (SS.width <= window.innerWidth - 40 && SS.height <= window.innerHeight - 40) {
              const HS = {
                placement: tS,
                width: SS.width,
                height: SS.height
              };
              if (!gS.some((SS => CS(HS, SS)))) {
                gS.push(HS);
                break
              }
            } if (gS.length > 0) {
          console.log(`AD ${(0,XS.b)(SS)}: Attempting to show msn units: `, gS);
          const HS = gS.map((SS => `${SS.placement}:${SS.width}x${SS.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, XS.b)(SS),
            renderPromise: window.$msstart.showDisplayAdsAsync(HS).then((() => {
              console.log(`AD ${(0,XS.b)(SS)}: Successfully request msn banner ad`)
            })).catch((HS => {
              console.log(`AD ${(0,XS.b)(SS)}: Error while requesting msn banner ad`, HS)
            }))
          }
        } else console.warn(`AD ${(0,XS.b)(SS)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(SS) {
        null !== this.currentlyShowingBannerPlacement && (0, XS.b)(SS) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,XS.b)(SS)}: Attempting to clear msn banner ads for banner`, SS), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (SS) {
          console.log("AD: Error while clearing all msn banner ads", SS)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(SS, HS, gS) {
        const tS = HS => {
          console.error(`AD: Error while playing MSN ${SS} ad: `, HS), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), gS()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${SS} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const gS = async () => {
            try {
              const gS = await window.$msstart.loadAdsAsync("rewarded" === SS),
                tS = await window.$msstart.showAdsAsync(gS.instanceId);
              this.clearAllBannerAds(), await tS.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${SS} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), HS()
            } catch (gS) {
              tS(gS)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), gS()
        } else tS(`AD: Can't play MSN ${SS} ad because sdk is not loaded`)
      }
    }

    function GS(SS) {
      let HS, gS;
      switch (SS.placement) {
        case "top":
          HS = (window.innerWidth - SS.width) / 2, gS = kS;
          break;
        case "right":
          HS = window.innerWidth - SS.width - kS, gS = window.innerHeight / 2 - SS.height / 2 - 10;
          break;
        case "left":
          HS = kS, gS = window.innerHeight / 2 - SS.height / 2 - 10
      }
      return {
        x1: HS,
        y1: gS,
        x2: HS + SS.width,
        y2: gS + SS.height
      }
    }

    function CS(SS, HS) {
      const gS = GS(SS),
        tS = GS(HS);
      return !(gS.x2 <= tS.x1 || tS.x2 <= gS.x1 || gS.y2 <= tS.y1 || tS.y2 <= gS.y1)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);