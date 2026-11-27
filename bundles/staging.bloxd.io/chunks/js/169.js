export const id = 169;
export const ids = [169];
export const modules = {
  7862: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdMsnAccountSdk: () => KR,
      MsnSdkAdaptor: () => aR
    });
    var yR = GR(1447),
      tR = GR(1258),
      uR = GR(4822),
      ZR = GR(679),
      qR = GR(1926);
    const iR = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let fR = null;

    function VR() {
      return fR ??= async function() {
        await (0, tR.c)(iR, {}, !1);
        for (let RR = 0; RR < 50 && !window.$msstart; RR++) await (0, ZR.T)(100)
      }(), fR
    }
    class KR {
      constructor() {}
      static async setup() {
        if (null !== (0, qR.d)()) return new KR;
        try {
          await Promise.race([VR(), (0, ZR.T)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (RR) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", RR), null
        }
        return window.$msstart ? new KR : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const RR = (0, qR.d)();
        if (null !== RR) return RR;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, ZR.T)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (JR) {
          return "USER_NOT_CONSENTED" !== (null === JR || void 0 === JR ? void 0 : JR.code) && console.error("Failed to get the signed-in MSN Play player:", JR), null
        }
      }
      async signIn() {
        var RR;
        return null !== (RR = (0, qR.d)()) && void 0 !== RR ? RR : await window.$msstart.signInAsync()
      }
    }
    const wR = 20,
      rR = {
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
      eR = {
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
    class aR extends yR.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await VR(), new aR
      }
      playVideoAd(RR, JR) {
        this.playVideoOrRewarded("video", RR, RR)
      }
      playRewarded(RR, JR) {
        this.playVideoOrRewarded("rewarded", RR, JR)
      }
      canShowBloxdAd(RR) {
        for (const JR in eR)
          if (RR.adId in eR[JR]) return !1;
        return !0
      }
      async renderBanner(RR) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,uR.e)(RR)}: msn placement is already showing so not requesting`);
        const JR = eR[RR.adType][RR.adId];
        if ((0, ZR.I)(JR)) return void console.warn(`AD ${(0,uR.e)(RR)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const GR = [];
        for (const yR of JR)
          for (const RR of rR[yR])
            if (RR.width <= window.innerWidth - 40 && RR.height <= window.innerHeight - 40) {
              const JR = {
                placement: yR,
                width: RR.width,
                height: RR.height
              };
              if (!GR.some((RR => nR(JR, RR)))) {
                GR.push(JR);
                break
              }
            } if (GR.length > 0) {
          console.log(`AD ${(0,uR.e)(RR)}: Attempting to show msn units: `, GR);
          const JR = GR.map((RR => `${RR.placement}:${RR.width}x${RR.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, uR.e)(RR),
            renderPromise: window.$msstart.showDisplayAdsAsync(JR).then((() => {
              console.log(`AD ${(0,uR.e)(RR)}: Successfully request msn banner ad`)
            })).catch((JR => {
              console.log(`AD ${(0,uR.e)(RR)}: Error while requesting msn banner ad`, JR)
            }))
          }
        } else console.warn(`AD ${(0,uR.e)(RR)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(RR) {
        null !== this.currentlyShowingBannerPlacement && (0, uR.e)(RR) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,uR.e)(RR)}: Attempting to clear msn banner ads for banner`, RR), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (RR) {
          console.log("AD: Error while clearing all msn banner ads", RR)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(RR, JR, GR) {
        const yR = JR => {
          console.error(`AD: Error while playing MSN ${RR} ad: `, JR), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), GR()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${RR} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const GR = async () => {
            try {
              const GR = await window.$msstart.loadAdsAsync("rewarded" === RR),
                yR = await window.$msstart.showAdsAsync(GR.instanceId);
              this.clearAllBannerAds(), await yR.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${RR} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), JR()
            } catch (GR) {
              yR(GR)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), GR()
        } else yR(`AD: Can't play MSN ${RR} ad because sdk is not loaded`)
      }
    }

    function LR(RR) {
      let JR, GR;
      switch (RR.placement) {
        case "top":
          JR = (window.innerWidth - RR.width) / 2, GR = wR;
          break;
        case "right":
          JR = window.innerWidth - RR.width - wR, GR = window.innerHeight / 2 - RR.height / 2 - 10;
          break;
        case "left":
          JR = wR, GR = window.innerHeight / 2 - RR.height / 2 - 10
      }
      return {
        x1: JR,
        y1: GR,
        x2: JR + RR.width,
        y2: GR + RR.height
      }
    }

    function nR(RR, JR) {
      const GR = LR(RR),
        yR = LR(JR);
      return !(GR.x2 <= yR.x1 || yR.x2 <= GR.x1 || GR.y2 <= yR.y1 || yR.y2 <= GR.y1)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);