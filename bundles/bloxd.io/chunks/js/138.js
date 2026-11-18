export const id = 138;
export const ids = [138];
export const modules = {
  7439: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AdMobSdkAdaptor: () => YJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(13),
      eJ = ZJ(1572),
      XJ = ZJ(112),
      AJ = ZJ(2946),
      qJ = ZJ(235);
    const jJ = {
      mobileAndroid: {
        banners: {
          leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
          leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
          leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
          skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
          skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
          square_1: "ca-app-pub-5991928098122027/6381115670"
        },
        rewarded: "ca-app-pub-5991928098122027/5726886857",
        interstitial: "ca-app-pub-5991928098122027/1979213537"
      },
      mobileIos: {
        banners: {
          leaderboard_1: "ca-app-pub-5991928098122027/4652945503",
          leaderboard_4: "ca-app-pub-5991928098122027/2921518285",
          leaderboard_5: "ca-app-pub-5991928098122027/7518781992",
          skyscraper_1: "ca-app-pub-5991928098122027/8344778507",
          skyscraper_2: "ca-app-pub-5991928098122027/3781201590",
          square_1: "ca-app-pub-5991928098122027/2468119924"
        },
        rewarded: "ca-app-pub-5991928098122027/5014392212",
        interstitial: "ca-app-pub-5991928098122027/4405533493"
      }
    };
    class YJ extends FJ.b {
      constructor(JJ) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = jJ[JJ], eJ.d.on("ads.bannerStatus", (JJ => {
          let {
            placementId: cJ,
            shown: ZJ,
            error: FJ
          } = JJ;
          const UJ = !this.bannerFirstResponseSeen.has(cJ);
          this.bannerFirstResponseSeen.add(cJ), UJ ? ZJ ? console.log(`AD ${cJ}: AdMob banner loaded`) : console.warn(`AD ${cJ}: AdMob banner failed to load: ${FJ}`) : ZJ || console.warn(`AD ${cJ}: AdMob banner refresh failed: ${FJ}`)
        }))
      }
      static async setup() {
        const JJ = "mobileIos" === XJ.n ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${JJ}`), new YJ(JJ)
      }
      muteGameDuring(JJ) {
        return this.fullScreenAdsInFlight++, UJ.d.set({
          soundOnFromAd: !1
        }), JJ.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && UJ.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(JJ, cJ) {
        const ZJ = this.adUnitIds.rewarded;
        this.muteGameDuring(eJ.d.request("ads.showRewarded", {
          placementId: ZJ
        })).then((ZJ => {
          let {
            rewarded: FJ
          } = ZJ;
          FJ ? JJ() : cJ()
        }), (JJ => {
          console.warn(`AD ${ZJ}: AdMob rewarded failed:`, JJ), cJ()
        }))
      }
      playVideoAd(JJ, cJ) {
        const ZJ = this.adUnitIds.interstitial;
        this.muteGameDuring(eJ.d.request("ads.showInterstitial", {
          placementId: ZJ
        })).then((() => {
          JJ()
        }), (cJ => {
          console.warn(`AD ${ZJ}: AdMob interstitial failed:`, cJ), JJ()
        }))
      }
      renderBanner(JJ) {
        const cJ = (0, AJ.c)(JJ),
          ZJ = this.adUnitIds.banners[cJ];
        if (void 0 === ZJ) return;
        const FJ = document.getElementById(JJ.divId);
        if (!FJ) return void console.warn(`AD ${cJ}: AdMob renderBanner called but div ${JJ.divId} is not in DOM`);
        const UJ = FJ.getBoundingClientRect(),
          XJ = window.innerWidth,
          jJ = window.innerHeight;
        if (0 === XJ || 0 === jJ) return void console.warn(`AD ${cJ}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const YJ = {
          x1: qJ.c.clamp(UJ.left / XJ * 100, 0, 100),
          y1: qJ.c.clamp(UJ.top / jJ * 100, 0, 100),
          x2: qJ.c.clamp(UJ.right / XJ * 100, 0, 100),
          y2: qJ.c.clamp(UJ.bottom / jJ * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(cJ, ZJ), console.log(`AD ${cJ}: AdMob renderBanner placementId=${ZJ} box=`, YJ), eJ.d.emit("ads.showBanner", {
          placementId: ZJ,
          ...YJ
        })
      }
      clearBanner(JJ) {
        const cJ = (0, AJ.c)(JJ),
          ZJ = this.bannerPlacementByBloxdId.get(cJ);
        void 0 !== ZJ && (this.bannerPlacementByBloxdId.delete(cJ), this.bannerFirstResponseSeen.delete(ZJ), console.log(`AD ${cJ}: AdMob clearBanner placementId=${ZJ}`), eJ.d.emit("ads.hideBanner", {
          placementId: ZJ
        }))
      }
      canShowBloxdAd(JJ) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);