export const id = 150;
export const ids = [150];
export const modules = {
  8320: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdMsnAccountSdk: () => bu,
      MsnSdkAdaptor: () => Yu
    });
    var su = ju(1364),
      Uu = ju(1227),
      Zu = ju(3660),
      Xu = ju(649),
      lu = ju(1774);
    const qu = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let fu = null;

    function Cu() {
      return fu ??= async function() {
        await (0, Uu.e)(qu, {}, !1);
        for (let uu = 0; uu < 50 && !window.$msstart; uu++) await (0, Xu.K)(100)
      }(), fu
    }
    class bu {
      constructor() {}
      static async setup() {
        if (null !== (0, lu.e)()) return new bu;
        try {
          await Promise.race([Cu(), (0, Xu.K)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (uu) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", uu), null
        }
        return window.$msstart ? new bu : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const uu = (0, lu.e)();
        if (null !== uu) return uu;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Xu.K)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (Eu) {
          return "USER_NOT_CONSENTED" !== (null === Eu || void 0 === Eu ? void 0 : Eu.code) && console.error("Failed to get the signed-in MSN Play player:", Eu), null
        }
      }
      async signIn() {
        var uu;
        return null !== (uu = (0, lu.e)()) && void 0 !== uu ? uu : await window.$msstart.signInAsync()
      }
    }
    const cu = 20,
      Nu = {
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
      Ou = {
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
    class Yu extends su.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Cu(), new Yu
      }
      playVideoAd(uu, Eu) {
        this.playVideoOrRewarded("video", uu, uu)
      }
      playRewarded(uu, Eu) {
        this.playVideoOrRewarded("rewarded", uu, Eu)
      }
      canShowBloxdAd(uu) {
        for (const Eu in Ou)
          if (uu.adId in Ou[Eu]) return !1;
        return !0
      }
      async renderBanner(uu) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Zu.c)(uu)}: msn placement is already showing so not requesting`);
        const Eu = Ou[uu.adType][uu.adId];
        if ((0, Xu.H)(Eu)) return void console.warn(`AD ${(0,Zu.c)(uu)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const ju = [];
        for (const su of Eu)
          for (const uu of Nu[su])
            if (uu.width <= window.innerWidth - 40 && uu.height <= window.innerHeight - 40) {
              const Eu = {
                placement: su,
                width: uu.width,
                height: uu.height
              };
              if (!ju.some((uu => Du(Eu, uu)))) {
                ju.push(Eu);
                break
              }
            } if (ju.length > 0) {
          console.log(`AD ${(0,Zu.c)(uu)}: Attempting to show msn units: `, ju);
          const Eu = ju.map((uu => `${uu.placement}:${uu.width}x${uu.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Zu.c)(uu),
            renderPromise: window.$msstart.showDisplayAdsAsync(Eu).then((() => {
              console.log(`AD ${(0,Zu.c)(uu)}: Successfully request msn banner ad`)
            })).catch((Eu => {
              console.log(`AD ${(0,Zu.c)(uu)}: Error while requesting msn banner ad`, Eu)
            }))
          }
        } else console.warn(`AD ${(0,Zu.c)(uu)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(uu) {
        null !== this.currentlyShowingBannerPlacement && (0, Zu.c)(uu) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Zu.c)(uu)}: Attempting to clear msn banner ads for banner`, uu), await this.clearAllBannerAds())
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
      playVideoOrRewarded(uu, Eu, ju) {
        const su = Eu => {
          console.error(`AD: Error while playing MSN ${uu} ad: `, Eu), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ju()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${uu} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const ju = async () => {
            try {
              const ju = await window.$msstart.loadAdsAsync("rewarded" === uu),
                su = await window.$msstart.showAdsAsync(ju.instanceId);
              this.clearAllBannerAds(), await su.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${uu} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Eu()
            } catch (ju) {
              su(ju)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), ju()
        } else su(`AD: Can't play MSN ${uu} ad because sdk is not loaded`)
      }
    }

    function hu(uu) {
      let Eu, ju;
      switch (uu.placement) {
        case "top":
          Eu = (window.innerWidth - uu.width) / 2, ju = cu;
          break;
        case "right":
          Eu = window.innerWidth - uu.width - cu, ju = window.innerHeight / 2 - uu.height / 2 - 10;
          break;
        case "left":
          Eu = cu, ju = window.innerHeight / 2 - uu.height / 2 - 10
      }
      return {
        x1: Eu,
        y1: ju,
        x2: Eu + uu.width,
        y2: ju + uu.height
      }
    }

    function Du(uu, Eu) {
      const ju = hu(uu),
        su = hu(Eu);
      return !(ju.x2 <= su.x1 || su.x2 <= ju.x1 || ju.y2 <= su.y1 || su.y2 <= ju.y1)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);