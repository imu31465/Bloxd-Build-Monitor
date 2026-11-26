export const id = 165;
export const ids = [165];
export const modules = {
  7276: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AdMobSdkAdaptor: () => PB
    });
    var YB = GB(1341),
      DB = GB(16),
      QB = GB(1748),
      oB = GB(120),
      jB = GB(3922),
      yB = GB(353),
      JB = GB(1800);
    const MB = {
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
    class PB extends YB.c {
      constructor(BB) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = MB[BB], QB.e.on("ads.bannerStatus", (BB => {
          let {
            placementId: OB,
            shown: GB,
            error: YB
          } = BB;
          const DB = !this.bannerFirstResponseSeen.has(OB);
          this.bannerFirstResponseSeen.add(OB), DB ? ((0, JB.g)(GB), GB ? console.log(`AD ${OB}: AdMob banner loaded`) : console.warn(`AD ${OB}: AdMob banner failed to load: ${YB}`)) : GB || console.warn(`AD ${OB}: AdMob banner refresh failed: ${YB}`)
        }))
      }
      static async setup() {
        const BB = "mobileIos" === oB.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${BB}`), new PB(BB)
      }
      muteGameDuring(BB) {
        return this.fullScreenAdsInFlight++, DB.c.set({
          soundOnFromAd: !1
        }), BB.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && DB.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(BB, OB) {
        const GB = this.adUnitIds.rewarded;
        this.muteGameDuring(QB.e.request("ads.showRewarded", {
          placementId: GB
        })).then((GB => {
          let {
            rewarded: YB
          } = GB;
          YB ? BB() : OB()
        }), (BB => {
          console.warn(`AD ${GB}: AdMob rewarded failed:`, BB), OB()
        }))
      }
      playVideoAd(BB, OB) {
        const GB = this.adUnitIds.interstitial;
        this.muteGameDuring(QB.e.request("ads.showInterstitial", {
          placementId: GB
        })).then((() => {
          BB()
        }), (OB => {
          console.warn(`AD ${GB}: AdMob interstitial failed:`, OB), BB()
        }))
      }
      renderBanner(BB) {
        const OB = (0, jB.d)(BB),
          GB = this.adUnitIds.banners[OB];
        if (void 0 === GB) return;
        const YB = document.getElementById(BB.divId);
        if (!YB) return void console.warn(`AD ${OB}: AdMob renderBanner called but div ${BB.divId} is not in DOM`);
        const DB = YB.getBoundingClientRect(),
          oB = window.innerWidth,
          MB = window.innerHeight;
        if (0 === oB || 0 === MB) return void console.warn(`AD ${OB}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const PB = {
          x1: yB.b.clamp(DB.left / oB * 100, 0, 100),
          y1: yB.b.clamp(DB.top / MB * 100, 0, 100),
          x2: yB.b.clamp(DB.right / oB * 100, 0, 100),
          y2: yB.b.clamp(DB.bottom / MB * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(OB, GB), console.log(`AD ${OB}: AdMob renderBanner placementId=${GB} box=`, PB), (0, JB.e)("site_sdk"), QB.e.emit("ads.showBanner", {
          placementId: GB,
          ...PB
        })
      }
      clearBanner(BB) {
        const OB = (0, jB.d)(BB),
          GB = this.bannerPlacementByBloxdId.get(OB);
        void 0 !== GB && (this.bannerPlacementByBloxdId.delete(OB), this.bannerFirstResponseSeen.delete(GB), console.log(`AD ${OB}: AdMob clearBanner placementId=${GB}`), QB.e.emit("ads.hideBanner", {
          placementId: GB
        }))
      }
      canShowBloxdAd(BB) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);