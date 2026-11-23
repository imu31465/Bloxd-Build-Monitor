export const id = 148;
export const ids = [148];
export const modules = {
  8116: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdMsnAccountSdk: () => WC,
      MsnSdkAdaptor: () => SC,
      msnMockIdentityStorageKey: () => oC
    });
    var QC = ZC(1269),
      wC = ZC(1127),
      bC = ZC(3441),
      nC = ZC(600);
    ZC(38);
    const fC = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      oC = "msnMockIdentity";
    let qC = null;

    function FC() {
      return qC ??= async function() {
        await (0, wC.e)(fC, {}, !1);
        for (let CC = 0; CC < 50 && !window.$msstart; CC++) await (0, nC.N)(100)
      }(), qC
    }
    class WC {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([FC(), (0, nC.N)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (CC) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", CC), null
        }
        return window.$msstart ? new WC : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, nC.N)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (CC) {
          return "USER_NOT_CONSENTED" !== (null === CC || void 0 === CC ? void 0 : CC.code) && console.error("Failed to get the signed-in MSN Play player:", CC), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const NC = 20,
      MC = {
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
      gC = {
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
    class SC extends QC.c {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await FC(), new SC
      }
      playVideoAd(CC, zC) {
        this.playVideoOrRewarded("video", CC, CC)
      }
      playRewarded(CC, zC) {
        this.playVideoOrRewarded("rewarded", CC, zC)
      }
      canShowBloxdAd(CC) {
        for (const zC in gC)
          if (CC.adId in gC[zC]) return !1;
        return !0
      }
      async renderBanner(CC) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,bC.c)(CC)}: msn placement is already showing so not requesting`);
        const zC = gC[CC.adType][CC.adId];
        if ((0, nC.H)(zC)) return void console.warn(`AD ${(0,bC.c)(CC)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const ZC = [];
        for (const QC of zC)
          for (const CC of MC[QC])
            if (CC.width <= window.innerWidth - 40 && CC.height <= window.innerHeight - 40) {
              const zC = {
                placement: QC,
                width: CC.width,
                height: CC.height
              };
              if (!ZC.some((CC => PC(zC, CC)))) {
                ZC.push(zC);
                break
              }
            } if (ZC.length > 0) {
          console.log(`AD ${(0,bC.c)(CC)}: Attempting to show msn units: `, ZC);
          const zC = ZC.map((CC => `${CC.placement}:${CC.width}x${CC.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, bC.c)(CC),
            renderPromise: window.$msstart.showDisplayAdsAsync(zC).then((() => {
              console.log(`AD ${(0,bC.c)(CC)}: Successfully request msn banner ad`)
            })).catch((zC => {
              console.log(`AD ${(0,bC.c)(CC)}: Error while requesting msn banner ad`, zC)
            }))
          }
        } else console.warn(`AD ${(0,bC.c)(CC)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(CC) {
        null !== this.currentlyShowingBannerPlacement && (0, bC.c)(CC) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,bC.c)(CC)}: Attempting to clear msn banner ads for banner`, CC), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (CC) {
          console.log("AD: Error while clearing all msn banner ads", CC)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(CC, zC, ZC) {
        const QC = zC => {
          console.error(`AD: Error while playing MSN ${CC} ad: `, zC), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ZC()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${CC} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const ZC = async () => {
            try {
              const ZC = await window.$msstart.loadAdsAsync("rewarded" === CC),
                QC = await window.$msstart.showAdsAsync(ZC.instanceId);
              this.clearAllBannerAds(), await QC.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${CC} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zC()
            } catch (ZC) {
              QC(ZC)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), ZC()
        } else QC(`AD: Can't play MSN ${CC} ad because sdk is not loaded`)
      }
    }

    function pC(CC) {
      let zC, ZC;
      switch (CC.placement) {
        case "top":
          zC = (window.innerWidth - CC.width) / 2, ZC = NC;
          break;
        case "right":
          zC = window.innerWidth - CC.width - NC, ZC = window.innerHeight / 2 - CC.height / 2 - 10;
          break;
        case "left":
          zC = NC, ZC = window.innerHeight / 2 - CC.height / 2 - 10
      }
      return {
        x1: zC,
        y1: ZC,
        x2: zC + CC.width,
        y2: ZC + CC.height
      }
    }

    function PC(CC, zC) {
      const ZC = pC(CC),
        QC = pC(zC);
      return !(ZC.x2 <= QC.x1 || QC.x2 <= ZC.x1 || ZC.y2 <= QC.y1 || QC.y2 <= ZC.y1)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);