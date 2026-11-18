export const id = 138;
export const ids = [138];
export const modules = {
  7459: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AdMobSdkAdaptor: () => oB
    });
    var VB = dB(1204),
      yB = dB(21),
      pB = dB(1573),
      lB = dB(138),
      JB = dB(2947),
      YB = dB(279);
    const gB = {
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
    class oB extends VB.e {
      constructor(BB) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = gB[BB], pB.d.on("ads.bannerStatus", (BB => {
          let {
            placementId: TB,
            shown: dB,
            error: VB
          } = BB;
          const yB = !this.bannerFirstResponseSeen.has(TB);
          this.bannerFirstResponseSeen.add(TB), yB ? dB ? console.log(`AD ${TB}: AdMob banner loaded`) : console.warn(`AD ${TB}: AdMob banner failed to load: ${VB}`) : dB || console.warn(`AD ${TB}: AdMob banner refresh failed: ${VB}`)
        }))
      }
      static async setup() {
        const BB = "mobileIos" === lB.v ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${BB}`), new oB(BB)
      }
      muteGameDuring(BB) {
        return this.fullScreenAdsInFlight++, yB.d.set({
          soundOnFromAd: !1
        }), BB.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && yB.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(BB, TB) {
        const dB = this.adUnitIds.rewarded;
        this.muteGameDuring(pB.d.request("ads.showRewarded", {
          placementId: dB
        })).then((dB => {
          let {
            rewarded: VB
          } = dB;
          VB ? BB() : TB()
        }), (BB => {
          console.warn(`AD ${dB}: AdMob rewarded failed:`, BB), TB()
        }))
      }
      playVideoAd(BB, TB) {
        const dB = this.adUnitIds.interstitial;
        this.muteGameDuring(pB.d.request("ads.showInterstitial", {
          placementId: dB
        })).then((() => {
          BB()
        }), (TB => {
          console.warn(`AD ${dB}: AdMob interstitial failed:`, TB), BB()
        }))
      }
      renderBanner(BB) {
        const TB = (0, JB.d)(BB),
          dB = this.adUnitIds.banners[TB];
        if (void 0 === dB) return;
        const VB = document.getElementById(BB.divId);
        if (!VB) return void console.warn(`AD ${TB}: AdMob renderBanner called but div ${BB.divId} is not in DOM`);
        const yB = VB.getBoundingClientRect(),
          lB = window.innerWidth,
          gB = window.innerHeight;
        if (0 === lB || 0 === gB) return void console.warn(`AD ${TB}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const oB = {
          x1: YB.e.clamp(yB.left / lB * 100, 0, 100),
          y1: YB.e.clamp(yB.top / gB * 100, 0, 100),
          x2: YB.e.clamp(yB.right / lB * 100, 0, 100),
          y2: YB.e.clamp(yB.bottom / gB * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(TB, dB), console.log(`AD ${TB}: AdMob renderBanner placementId=${dB} box=`, oB), pB.d.emit("ads.showBanner", {
          placementId: dB,
          ...oB
        })
      }
      clearBanner(BB) {
        const TB = (0, JB.d)(BB),
          dB = this.bannerPlacementByBloxdId.get(TB);
        void 0 !== dB && (this.bannerPlacementByBloxdId.delete(TB), this.bannerFirstResponseSeen.delete(dB), console.log(`AD ${TB}: AdMob clearBanner placementId=${dB}`), pB.d.emit("ads.hideBanner", {
          placementId: dB
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