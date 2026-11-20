export const id = 142;
export const ids = [142];
export const modules = {
  7849: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdMsnAccountSdk: () => ru,
      MsnSdkAdaptor: () => pu,
      msnMockIdentityStorageKey: () => Nu
    });
    var Eu = yu(1277),
      Ku = yu(1153),
      Qu = yu(3269),
      mu = yu(610);
    yu(47);
    const Ju = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Nu = "msnMockIdentity";
    let Xu = null;

    function Vu() {
      return Xu ??= async function() {
        await (0, Ku.b)(Ju, {}, !1);
        for (let uu = 0; uu < 50 && !window.$msstart; uu++) await (0, mu.M)(100)
      }(), Xu
    }
    class ru {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Vu(), (0, mu.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (uu) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", uu), null
        }
        return window.$msstart ? new ru : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, mu.M)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (uu) {
          return "USER_NOT_CONSENTED" !== (null === uu || void 0 === uu ? void 0 : uu.code) && console.error("Failed to get the signed-in MSN Play player:", uu), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Bu = 20,
      xu = {
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
      Su = {
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
    class pu extends Eu.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Vu(), new pu
      }
      playVideoAd(uu, Ru) {
        this.playVideoOrRewarded("video", uu, uu)
      }
      playRewarded(uu, Ru) {
        this.playVideoOrRewarded("rewarded", uu, Ru)
      }
      canShowBloxdAd(uu) {
        for (const Ru in Su)
          if (uu.adId in Su[Ru]) return !1;
        return !0
      }
      async renderBanner(uu) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Qu.b)(uu)}: msn placement is already showing so not requesting`);
        const Ru = Su[uu.adType][uu.adId];
        if ((0, mu.E)(Ru)) return void console.warn(`AD ${(0,Qu.b)(uu)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const yu = [];
        for (const Eu of Ru)
          for (const uu of xu[Eu])
            if (uu.width <= window.innerWidth - 40 && uu.height <= window.innerHeight - 40) {
              const Ru = {
                placement: Eu,
                width: uu.width,
                height: uu.height
              };
              if (!yu.some((uu => Wu(Ru, uu)))) {
                yu.push(Ru);
                break
              }
            } if (yu.length > 0) {
          console.log(`AD ${(0,Qu.b)(uu)}: Attempting to show msn units: `, yu);
          const Ru = yu.map((uu => `${uu.placement}:${uu.width}x${uu.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Qu.b)(uu),
            renderPromise: window.$msstart.showDisplayAdsAsync(Ru).then((() => {
              console.log(`AD ${(0,Qu.b)(uu)}: Successfully request msn banner ad`)
            })).catch((Ru => {
              console.log(`AD ${(0,Qu.b)(uu)}: Error while requesting msn banner ad`, Ru)
            }))
          }
        } else console.warn(`AD ${(0,Qu.b)(uu)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(uu) {
        null !== this.currentlyShowingBannerPlacement && (0, Qu.b)(uu) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Qu.b)(uu)}: Attempting to clear msn banner ads for banner`, uu), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (uu) {
          console.log("AD: Error while clearing all msn banner ads", uu)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(uu, Ru, yu) {
        const Eu = Ru => {
          console.error(`AD: Error while playing MSN ${uu} ad: `, Ru), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), yu()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${uu} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const yu = async () => {
            try {
              const yu = await window.$msstart.loadAdsAsync("rewarded" === uu),
                Eu = await window.$msstart.showAdsAsync(yu.instanceId);
              this.clearAllBannerAds(), await Eu.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${uu} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Ru()
            } catch (yu) {
              Eu(yu)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), yu()
        } else Eu(`AD: Can't play MSN ${uu} ad because sdk is not loaded`)
      }
    }

    function Tu(uu) {
      let Ru, yu;
      switch (uu.placement) {
        case "top":
          Ru = (window.innerWidth - uu.width) / 2, yu = Bu;
          break;
        case "right":
          Ru = window.innerWidth - uu.width - Bu, yu = window.innerHeight / 2 - uu.height / 2 - 10;
          break;
        case "left":
          Ru = Bu, yu = window.innerHeight / 2 - uu.height / 2 - 10
      }
      return {
        x1: Ru,
        y1: yu,
        x2: Ru + uu.width,
        y2: yu + uu.height
      }
    }

    function Wu(uu, Ru) {
      const yu = Tu(uu),
        Eu = Tu(Ru);
      return !(yu.x2 <= Eu.x1 || Eu.x2 <= yu.x1 || yu.y2 <= Eu.y1 || Eu.y2 <= yu.y1)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);