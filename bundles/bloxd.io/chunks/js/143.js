export const id = 143;
export const ids = [143];
export const modules = {
  7545: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdMsnAccountSdk: () => uY,
      MsnSdkAdaptor: () => QY,
      msnMockIdentityStorageKey: () => gY
    });
    var FY = DY(1318),
      AY = DY(1204),
      IY = DY(3030),
      RY = DY(625);
    DY(40);
    const OY = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      gY = "msnMockIdentity";
    let aY = null;

    function vY() {
      return aY ??= async function() {
        await (0, AY.d)(OY, {}, !1);
        for (let YY = 0; YY < 50 && !window.$msstart; YY++) await (0, RY.M)(100)
      }(), aY
    }
    class uY {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([vY(), (0, RY.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (YY) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", YY), null
        }
        return window.$msstart ? new uY : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, RY.M)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (YY) {
          return "USER_NOT_CONSENTED" !== (null === YY || void 0 === YY ? void 0 : YY.code) && console.error("Failed to get the signed-in MSN Play player:", YY), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const sY = 20,
      iY = {
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
      yY = {
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
    class QY extends FY.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await vY(), new QY
      }
      playVideoAd(YY, rY) {
        this.playVideoOrRewarded("video", YY, YY)
      }
      playRewarded(YY, rY) {
        this.playVideoOrRewarded("rewarded", YY, rY)
      }
      canShowBloxdAd(YY) {
        for (const rY in yY)
          if (YY.adId in yY[rY]) return !1;
        return !0
      }
      async renderBanner(YY) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,IY.d)(YY)}: msn placement is already showing so not requesting`);
        const rY = yY[YY.adType][YY.adId];
        if ((0, RY.H)(rY)) return void console.warn(`AD ${(0,IY.d)(YY)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const DY = [];
        for (const FY of rY)
          for (const YY of iY[FY])
            if (YY.width <= window.innerWidth - 40 && YY.height <= window.innerHeight - 40) {
              const rY = {
                placement: FY,
                width: YY.width,
                height: YY.height
              };
              if (!DY.some((YY => WY(rY, YY)))) {
                DY.push(rY);
                break
              }
            } if (DY.length > 0) {
          console.log(`AD ${(0,IY.d)(YY)}: Attempting to show msn units: `, DY);
          const rY = DY.map((YY => `${YY.placement}:${YY.width}x${YY.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, IY.d)(YY),
            renderPromise: window.$msstart.showDisplayAdsAsync(rY).then((() => {
              console.log(`AD ${(0,IY.d)(YY)}: Successfully request msn banner ad`)
            })).catch((rY => {
              console.log(`AD ${(0,IY.d)(YY)}: Error while requesting msn banner ad`, rY)
            }))
          }
        } else console.warn(`AD ${(0,IY.d)(YY)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(YY) {
        null !== this.currentlyShowingBannerPlacement && (0, IY.d)(YY) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,IY.d)(YY)}: Attempting to clear msn banner ads for banner`, YY), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (YY) {
          console.log("AD: Error while clearing all msn banner ads", YY)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(YY, rY, DY) {
        const FY = rY => {
          console.error(`AD: Error while playing MSN ${YY} ad: `, rY), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), DY()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${YY} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const DY = async () => {
            try {
              const DY = await window.$msstart.loadAdsAsync("rewarded" === YY),
                FY = await window.$msstart.showAdsAsync(DY.instanceId);
              this.clearAllBannerAds(), await FY.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${YY} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), rY()
            } catch (DY) {
              FY(DY)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), DY()
        } else FY(`AD: Can't play MSN ${YY} ad because sdk is not loaded`)
      }
    }

    function oY(YY) {
      let rY, DY;
      switch (YY.placement) {
        case "top":
          rY = (window.innerWidth - YY.width) / 2, DY = sY;
          break;
        case "right":
          rY = window.innerWidth - YY.width - sY, DY = window.innerHeight / 2 - YY.height / 2 - 10;
          break;
        case "left":
          rY = sY, DY = window.innerHeight / 2 - YY.height / 2 - 10
      }
      return {
        x1: rY,
        y1: DY,
        x2: rY + YY.width,
        y2: DY + YY.height
      }
    }

    function WY(YY, rY) {
      const DY = oY(YY),
        FY = oY(rY);
      return !(DY.x2 <= FY.x1 || FY.x2 <= DY.x1 || DY.y2 <= FY.y1 || FY.y2 <= DY.y1)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);