export const id = 150;
export const ids = [150];
export const modules = {
  8217: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdMsnAccountSdk: () => lT,
      MsnSdkAdaptor: () => ZT
    });
    var WT = mT(1423),
      zT = mT(1277),
      MT = mT(3561),
      gT = mT(653),
      nT = mT(1847);
    const HT = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let kT = null;

    function jT() {
      return kT ??= async function() {
        await (0, zT.d)(HT, {}, !1);
        for (let TT = 0; TT < 50 && !window.$msstart; TT++) await (0, gT.G)(100)
      }(), kT
    }
    class lT {
      constructor() {}
      static async setup() {
        if (null !== (0, nT.b)()) return new lT;
        try {
          await Promise.race([jT(), (0, gT.G)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (TT) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", TT), null
        }
        return window.$msstart ? new lT : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const TT = (0, nT.b)();
        if (null !== TT) return TT;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, gT.G)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (UT) {
          return "USER_NOT_CONSENTED" !== (null === UT || void 0 === UT ? void 0 : UT.code) && console.error("Failed to get the signed-in MSN Play player:", UT), null
        }
      }
      async signIn() {
        var TT;
        return null !== (TT = (0, nT.b)()) && void 0 !== TT ? TT : await window.$msstart.signInAsync()
      }
    }
    const LT = 20,
      pT = {
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
      BT = {
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
    class ZT extends WT.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await jT(), new ZT
      }
      playVideoAd(TT, UT) {
        this.playVideoOrRewarded("video", TT, TT)
      }
      playRewarded(TT, UT) {
        this.playVideoOrRewarded("rewarded", TT, UT)
      }
      canShowBloxdAd(TT) {
        for (const UT in BT)
          if (TT.adId in BT[UT]) return !1;
        return !0
      }
      async renderBanner(TT) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,MT.d)(TT)}: msn placement is already showing so not requesting`);
        const UT = BT[TT.adType][TT.adId];
        if ((0, gT.E)(UT)) return void console.warn(`AD ${(0,MT.d)(TT)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const mT = [];
        for (const WT of UT)
          for (const TT of pT[WT])
            if (TT.width <= window.innerWidth - 40 && TT.height <= window.innerHeight - 40) {
              const UT = {
                placement: WT,
                width: TT.width,
                height: TT.height
              };
              if (!mT.some((TT => vT(UT, TT)))) {
                mT.push(UT);
                break
              }
            } if (mT.length > 0) {
          console.log(`AD ${(0,MT.d)(TT)}: Attempting to show msn units: `, mT);
          const UT = mT.map((TT => `${TT.placement}:${TT.width}x${TT.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, MT.d)(TT),
            renderPromise: window.$msstart.showDisplayAdsAsync(UT).then((() => {
              console.log(`AD ${(0,MT.d)(TT)}: Successfully request msn banner ad`)
            })).catch((UT => {
              console.log(`AD ${(0,MT.d)(TT)}: Error while requesting msn banner ad`, UT)
            }))
          }
        } else console.warn(`AD ${(0,MT.d)(TT)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(TT) {
        null !== this.currentlyShowingBannerPlacement && (0, MT.d)(TT) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,MT.d)(TT)}: Attempting to clear msn banner ads for banner`, TT), await this.clearAllBannerAds())
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
      playVideoOrRewarded(TT, UT, mT) {
        const WT = UT => {
          console.error(`AD: Error while playing MSN ${TT} ad: `, UT), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), mT()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${TT} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const mT = async () => {
            try {
              const mT = await window.$msstart.loadAdsAsync("rewarded" === TT),
                WT = await window.$msstart.showAdsAsync(mT.instanceId);
              this.clearAllBannerAds(), await WT.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${TT} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), UT()
            } catch (mT) {
              WT(mT)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), mT()
        } else WT(`AD: Can't play MSN ${TT} ad because sdk is not loaded`)
      }
    }

    function cT(TT) {
      let UT, mT;
      switch (TT.placement) {
        case "top":
          UT = (window.innerWidth - TT.width) / 2, mT = LT;
          break;
        case "right":
          UT = window.innerWidth - TT.width - LT, mT = window.innerHeight / 2 - TT.height / 2 - 10;
          break;
        case "left":
          UT = LT, mT = window.innerHeight / 2 - TT.height / 2 - 10
      }
      return {
        x1: UT,
        y1: mT,
        x2: UT + TT.width,
        y2: mT + TT.height
      }
    }

    function vT(TT, UT) {
      const mT = cT(TT),
        WT = cT(UT);
      return !(mT.x2 <= WT.x1 || WT.x2 <= mT.x1 || mT.y2 <= WT.y1 || WT.y2 <= mT.y1)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);