export const id = 142;
export const ids = [142];
export const modules = {
  8135: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdMsnAccountSdk: () => AT,
      MsnSdkAdaptor: () => tT,
      msnMockIdentityStorageKey: () => fT
    });
    var lT = cT(1321),
      MT = cT(1190),
      KT = cT(3396),
      OT = cT(617);
    cT(47);
    const yT = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      fT = "msnMockIdentity";
    let xT = null;

    function IT() {
      return xT ??= async function() {
        await (0, MT.e)(yT, {}, !1);
        for (let TT = 0; TT < 50 && !window.$msstart; TT++) await (0, OT.Y)(100)
      }(), xT
    }
    class AT {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([IT(), (0, OT.Y)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (TT) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", TT), null
        }
        return window.$msstart ? new AT : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, OT.Y)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (TT) {
          return "USER_NOT_CONSENTED" !== (null === TT || void 0 === TT ? void 0 : TT.code) && console.error("Failed to get the signed-in MSN Play player:", TT), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const CT = 20,
      jT = {
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
      vT = {
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
    class tT extends lT.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await IT(), new tT
      }
      playVideoAd(TT, kT) {
        this.playVideoOrRewarded("video", TT, TT)
      }
      playRewarded(TT, kT) {
        this.playVideoOrRewarded("rewarded", TT, kT)
      }
      canShowBloxdAd(TT) {
        for (const kT in vT)
          if (TT.adId in vT[kT]) return !1;
        return !0
      }
      async renderBanner(TT) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,KT.b)(TT)}: msn placement is already showing so not requesting`);
        const kT = vT[TT.adType][TT.adId];
        if ((0, OT.R)(kT)) return void console.warn(`AD ${(0,KT.b)(TT)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const cT = [];
        for (const lT of kT)
          for (const TT of jT[lT])
            if (TT.width <= window.innerWidth - 40 && TT.height <= window.innerHeight - 40) {
              const kT = {
                placement: lT,
                width: TT.width,
                height: TT.height
              };
              if (!cT.some((TT => NT(kT, TT)))) {
                cT.push(kT);
                break
              }
            } if (cT.length > 0) {
          console.log(`AD ${(0,KT.b)(TT)}: Attempting to show msn units: `, cT);
          const kT = cT.map((TT => `${TT.placement}:${TT.width}x${TT.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, KT.b)(TT),
            renderPromise: window.$msstart.showDisplayAdsAsync(kT).then((() => {
              console.log(`AD ${(0,KT.b)(TT)}: Successfully request msn banner ad`)
            })).catch((kT => {
              console.log(`AD ${(0,KT.b)(TT)}: Error while requesting msn banner ad`, kT)
            }))
          }
        } else console.warn(`AD ${(0,KT.b)(TT)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(TT) {
        null !== this.currentlyShowingBannerPlacement && (0, KT.b)(TT) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,KT.b)(TT)}: Attempting to clear msn banner ads for banner`, TT), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (TT) {
          console.log("AD: Error while clearing all msn banner ads", TT)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(TT, kT, cT) {
        const lT = kT => {
          console.error(`AD: Error while playing MSN ${TT} ad: `, kT), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), cT()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${TT} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const cT = async () => {
            try {
              const cT = await window.$msstart.loadAdsAsync("rewarded" === TT),
                lT = await window.$msstart.showAdsAsync(cT.instanceId);
              this.clearAllBannerAds(), await lT.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${TT} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), kT()
            } catch (cT) {
              lT(cT)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), cT()
        } else lT(`AD: Can't play MSN ${TT} ad because sdk is not loaded`)
      }
    }

    function hT(TT) {
      let kT, cT;
      switch (TT.placement) {
        case "top":
          kT = (window.innerWidth - TT.width) / 2, cT = CT;
          break;
        case "right":
          kT = window.innerWidth - TT.width - CT, cT = window.innerHeight / 2 - TT.height / 2 - 10;
          break;
        case "left":
          kT = CT, cT = window.innerHeight / 2 - TT.height / 2 - 10
      }
      return {
        x1: kT,
        y1: cT,
        x2: kT + TT.width,
        y2: cT + TT.height
      }
    }

    function NT(TT, kT) {
      const cT = hT(TT),
        lT = hT(kT);
      return !(cT.x2 <= lT.x1 || lT.x2 <= cT.x1 || cT.y2 <= lT.y1 || lT.y2 <= cT.y1)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);