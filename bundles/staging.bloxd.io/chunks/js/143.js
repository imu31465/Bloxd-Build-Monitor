export const id = 143;
export const ids = [143];
export const modules = {
  7548: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdMsnAccountSdk: () => DT,
      MsnSdkAdaptor: () => KT,
      msnMockIdentityStorageKey: () => BT
    });
    var iT = IT(1286),
      zT = IT(1160),
      kT = IT(3019),
      WT = IT(618);
    IT(26);
    const XT = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      BT = "msnMockIdentity";
    let FT = null;

    function ST() {
      return FT ??= async function() {
        await (0, zT.b)(XT, {}, !1);
        for (let TT = 0; TT < 50 && !window.$msstart; TT++) await (0, WT.M)(100)
      }(), FT
    }
    class DT {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([ST(), (0, WT.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (TT) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", TT), null
        }
        return window.$msstart ? new DT : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, WT.M)(1e4).then((() => {
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
    const LT = 20,
      xT = {
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
      cT = {
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
    class KT extends iT.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await ST(), new KT
      }
      playVideoAd(TT, oT) {
        this.playVideoOrRewarded("video", TT, TT)
      }
      playRewarded(TT, oT) {
        this.playVideoOrRewarded("rewarded", TT, oT)
      }
      canShowBloxdAd(TT) {
        for (const oT in cT)
          if (TT.adId in cT[oT]) return !1;
        return !0
      }
      async renderBanner(TT) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,kT.e)(TT)}: msn placement is already showing so not requesting`);
        const oT = cT[TT.adType][TT.adId];
        if ((0, WT.K)(oT)) return void console.warn(`AD ${(0,kT.e)(TT)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const IT = [];
        for (const iT of oT)
          for (const TT of xT[iT])
            if (TT.width <= window.innerWidth - 40 && TT.height <= window.innerHeight - 40) {
              const oT = {
                placement: iT,
                width: TT.width,
                height: TT.height
              };
              if (!IT.some((TT => rT(oT, TT)))) {
                IT.push(oT);
                break
              }
            } if (IT.length > 0) {
          console.log(`AD ${(0,kT.e)(TT)}: Attempting to show msn units: `, IT);
          const oT = IT.map((TT => `${TT.placement}:${TT.width}x${TT.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, kT.e)(TT),
            renderPromise: window.$msstart.showDisplayAdsAsync(oT).then((() => {
              console.log(`AD ${(0,kT.e)(TT)}: Successfully request msn banner ad`)
            })).catch((oT => {
              console.log(`AD ${(0,kT.e)(TT)}: Error while requesting msn banner ad`, oT)
            }))
          }
        } else console.warn(`AD ${(0,kT.e)(TT)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(TT) {
        null !== this.currentlyShowingBannerPlacement && (0, kT.e)(TT) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,kT.e)(TT)}: Attempting to clear msn banner ads for banner`, TT), await this.clearAllBannerAds())
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
      playVideoOrRewarded(TT, oT, IT) {
        const iT = oT => {
          console.error(`AD: Error while playing MSN ${TT} ad: `, oT), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), IT()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${TT} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const IT = async () => {
            try {
              const IT = await window.$msstart.loadAdsAsync("rewarded" === TT),
                iT = await window.$msstart.showAdsAsync(IT.instanceId);
              this.clearAllBannerAds(), await iT.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${TT} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), oT()
            } catch (IT) {
              iT(IT)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), IT()
        } else iT(`AD: Can't play MSN ${TT} ad because sdk is not loaded`)
      }
    }

    function MT(TT) {
      let oT, IT;
      switch (TT.placement) {
        case "top":
          oT = (window.innerWidth - TT.width) / 2, IT = LT;
          break;
        case "right":
          oT = window.innerWidth - TT.width - LT, IT = window.innerHeight / 2 - TT.height / 2 - 10;
          break;
        case "left":
          oT = LT, IT = window.innerHeight / 2 - TT.height / 2 - 10
      }
      return {
        x1: oT,
        y1: IT,
        x2: oT + TT.width,
        y2: IT + TT.height
      }
    }

    function rT(TT, oT) {
      const IT = MT(TT),
        iT = MT(oT);
      return !(IT.x2 <= iT.x1 || iT.x2 <= IT.x1 || IT.y2 <= iT.y1 || iT.y2 <= IT.y1)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);