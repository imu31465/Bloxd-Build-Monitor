export const id = 135;
export const ids = [135];
export const modules = {
  7427: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdMsnAccountSdk: () => hJ,
      MsnSdkAdaptor: () => GJ,
      msnMockIdentityStorageKey: () => qJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(1075),
      eJ = ZJ(2946),
      XJ = ZJ(535);
    ZJ(29);
    const AJ = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      qJ = "msnMockIdentity";
    let jJ = null;

    function YJ() {
      return jJ ??= async function() {
        await (0, UJ.e)(AJ, {}, !1);
        for (let JJ = 0; JJ < 50 && !window.$msstart; JJ++) await (0, XJ.X)(100)
      }(), jJ
    }
    class hJ {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([YJ(), (0, XJ.X)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (JJ) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", JJ), null
        }
        return window.$msstart ? new hJ : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, XJ.X)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (JJ) {
          return "USER_NOT_CONSENTED" !== (null === JJ || void 0 === JJ ? void 0 : JJ.code) && console.error("Failed to get the signed-in MSN Play player:", JJ), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const DJ = 20,
      sJ = {
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
      nJ = {
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
    class GJ extends FJ.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await YJ(), new GJ
      }
      playVideoAd(JJ, cJ) {
        this.playVideoOrRewarded("video", JJ, JJ)
      }
      playRewarded(JJ, cJ) {
        this.playVideoOrRewarded("rewarded", JJ, cJ)
      }
      canShowBloxdAd(JJ) {
        for (const cJ in nJ)
          if (JJ.adId in nJ[cJ]) return !1;
        return !0
      }
      async renderBanner(JJ) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,eJ.c)(JJ)}: msn placement is already showing so not requesting`);
        const cJ = nJ[JJ.adType][JJ.adId];
        if ((0, XJ.P)(cJ)) return void console.warn(`AD ${(0,eJ.c)(JJ)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const ZJ = [];
        for (const FJ of cJ)
          for (const JJ of sJ[FJ])
            if (JJ.width <= window.innerWidth - 40 && JJ.height <= window.innerHeight - 40) {
              const cJ = {
                placement: FJ,
                width: JJ.width,
                height: JJ.height
              };
              if (!ZJ.some((JJ => xJ(cJ, JJ)))) {
                ZJ.push(cJ);
                break
              }
            } if (ZJ.length > 0) {
          console.log(`AD ${(0,eJ.c)(JJ)}: Attempting to show msn units: `, ZJ);
          const cJ = ZJ.map((JJ => `${JJ.placement}:${JJ.width}x${JJ.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, eJ.c)(JJ),
            renderPromise: window.$msstart.showDisplayAdsAsync(cJ).then((() => {
              console.log(`AD ${(0,eJ.c)(JJ)}: Successfully request msn banner ad`)
            })).catch((cJ => {
              console.log(`AD ${(0,eJ.c)(JJ)}: Error while requesting msn banner ad`, cJ)
            }))
          }
        } else console.warn(`AD ${(0,eJ.c)(JJ)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(JJ) {
        null !== this.currentlyShowingBannerPlacement && (0, eJ.c)(JJ) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,eJ.c)(JJ)}: Attempting to clear msn banner ads for banner`, JJ), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (JJ) {
          console.log("AD: Error while clearing all msn banner ads", JJ)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(JJ, cJ, ZJ) {
        const FJ = cJ => {
          console.error(`AD: Error while playing MSN ${JJ} ad: `, cJ), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ZJ()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${JJ} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const ZJ = async () => {
            try {
              const ZJ = await window.$msstart.loadAdsAsync("rewarded" === JJ),
                FJ = await window.$msstart.showAdsAsync(ZJ.instanceId);
              this.clearAllBannerAds(), await FJ.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${JJ} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), cJ()
            } catch (ZJ) {
              FJ(ZJ)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), ZJ()
        } else FJ(`AD: Can't play MSN ${JJ} ad because sdk is not loaded`)
      }
    }

    function fJ(JJ) {
      let cJ, ZJ;
      switch (JJ.placement) {
        case "top":
          cJ = (window.innerWidth - JJ.width) / 2, ZJ = DJ;
          break;
        case "right":
          cJ = window.innerWidth - JJ.width - DJ, ZJ = window.innerHeight / 2 - JJ.height / 2 - 10;
          break;
        case "left":
          cJ = DJ, ZJ = window.innerHeight / 2 - JJ.height / 2 - 10
      }
      return {
        x1: cJ,
        y1: ZJ,
        x2: cJ + JJ.width,
        y2: ZJ + JJ.height
      }
    }

    function xJ(JJ, cJ) {
      const ZJ = fJ(JJ),
        FJ = fJ(cJ);
      return !(ZJ.x2 <= FJ.x1 || FJ.x2 <= ZJ.x1 || ZJ.y2 <= FJ.y1 || FJ.y2 <= ZJ.y1)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);