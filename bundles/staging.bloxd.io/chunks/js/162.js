export const id = 162;
export const ids = [162];
export const modules = {
  7269: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdMsnAccountSdk: () => XH,
      MsnSdkAdaptor: () => QH
    });
    var AH = LH(1289),
      rH = LH(1110),
      SH = LH(3870),
      hH = LH(619),
      tH = LH(1766);
    const zH = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let CH = null;

    function EH() {
      return CH ??= async function() {
        await (0, rH.e)(zH, {}, !1);
        for (let HH = 0; HH < 50 && !window.$msstart; HH++) await (0, hH.Q)(100)
      }(), CH
    }
    class XH {
      constructor() {}
      static async setup() {
        if (null !== (0, tH.b)()) return new XH;
        try {
          await Promise.race([EH(), (0, hH.Q)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (HH) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", HH), null
        }
        return window.$msstart ? new XH : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const HH = (0, tH.b)();
        if (null !== HH) return HH;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, hH.Q)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (BH) {
          return "USER_NOT_CONSENTED" !== (null === BH || void 0 === BH ? void 0 : BH.code) && console.error("Failed to get the signed-in MSN Play player:", BH), null
        }
      }
      async signIn() {
        var HH;
        return null !== (HH = (0, tH.b)()) && void 0 !== HH ? HH : await window.$msstart.signInAsync()
      }
    }
    const GH = 20,
      YH = {
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
      uH = {
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
    class QH extends AH.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await EH(), new QH
      }
      playVideoAd(HH, BH) {
        this.playVideoOrRewarded("video", HH, HH)
      }
      playRewarded(HH, BH) {
        this.playVideoOrRewarded("rewarded", HH, BH)
      }
      canShowBloxdAd(HH) {
        for (const BH in uH)
          if (HH.adId in uH[BH]) return !1;
        return !0
      }
      async renderBanner(HH) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,SH.c)(HH)}: msn placement is already showing so not requesting`);
        const BH = uH[HH.adType][HH.adId];
        if ((0, hH.M)(BH)) return void console.warn(`AD ${(0,SH.c)(HH)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const LH = [];
        for (const AH of BH)
          for (const HH of YH[AH])
            if (HH.width <= window.innerWidth - 40 && HH.height <= window.innerHeight - 40) {
              const BH = {
                placement: AH,
                width: HH.width,
                height: HH.height
              };
              if (!LH.some((HH => MH(BH, HH)))) {
                LH.push(BH);
                break
              }
            } if (LH.length > 0) {
          console.log(`AD ${(0,SH.c)(HH)}: Attempting to show msn units: `, LH);
          const BH = LH.map((HH => `${HH.placement}:${HH.width}x${HH.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, SH.c)(HH),
            renderPromise: window.$msstart.showDisplayAdsAsync(BH).then((() => {
              console.log(`AD ${(0,SH.c)(HH)}: Successfully request msn banner ad`)
            })).catch((BH => {
              console.log(`AD ${(0,SH.c)(HH)}: Error while requesting msn banner ad`, BH)
            }))
          }
        } else console.warn(`AD ${(0,SH.c)(HH)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(HH) {
        null !== this.currentlyShowingBannerPlacement && (0, SH.c)(HH) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,SH.c)(HH)}: Attempting to clear msn banner ads for banner`, HH), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (HH) {
          console.log("AD: Error while clearing all msn banner ads", HH)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(HH, BH, LH) {
        const AH = BH => {
          console.error(`AD: Error while playing MSN ${HH} ad: `, BH), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), LH()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${HH} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const LH = async () => {
            try {
              const LH = await window.$msstart.loadAdsAsync("rewarded" === HH),
                AH = await window.$msstart.showAdsAsync(LH.instanceId);
              this.clearAllBannerAds(), await AH.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${HH} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), BH()
            } catch (LH) {
              AH(LH)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), LH()
        } else AH(`AD: Can't play MSN ${HH} ad because sdk is not loaded`)
      }
    }

    function WH(HH) {
      let BH, LH;
      switch (HH.placement) {
        case "top":
          BH = (window.innerWidth - HH.width) / 2, LH = GH;
          break;
        case "right":
          BH = window.innerWidth - HH.width - GH, LH = window.innerHeight / 2 - HH.height / 2 - 10;
          break;
        case "left":
          BH = GH, LH = window.innerHeight / 2 - HH.height / 2 - 10
      }
      return {
        x1: BH,
        y1: LH,
        x2: BH + HH.width,
        y2: LH + HH.height
      }
    }

    function MH(HH, BH) {
      const LH = WH(HH),
        AH = WH(BH);
      return !(LH.x2 <= AH.x1 || AH.x2 <= LH.x1 || LH.y2 <= AH.y1 || AH.y2 <= LH.y1)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);