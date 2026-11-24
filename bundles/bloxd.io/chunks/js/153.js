export const id = 153;
export const ids = [153];
export const modules = {
  8247: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AdMobSdkAdaptor: () => nB
    });
    var TB = ZB(1379),
      JB = ZB(20),
      oB = ZB(1755),
      GB = ZB(140),
      vB = ZB(3657),
      kB = ZB(360);
    const cB = {
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
    class nB extends TB.d {
      constructor(BB) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = cB[BB], oB.d.on("ads.bannerStatus", (BB => {
          let {
            placementId: IB,
            shown: ZB,
            error: TB
          } = BB;
          const JB = !this.bannerFirstResponseSeen.has(IB);
          this.bannerFirstResponseSeen.add(IB), JB ? ZB ? console.log(`AD ${IB}: AdMob banner loaded`) : console.warn(`AD ${IB}: AdMob banner failed to load: ${TB}`) : ZB || console.warn(`AD ${IB}: AdMob banner refresh failed: ${TB}`)
        }))
      }
      static async setup() {
        const BB = "mobileIos" === GB.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${BB}`), new nB(BB)
      }
      muteGameDuring(BB) {
        return this.fullScreenAdsInFlight++, JB.d.set({
          soundOnFromAd: !1
        }), BB.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && JB.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(BB, IB) {
        const ZB = this.adUnitIds.rewarded;
        this.muteGameDuring(oB.d.request("ads.showRewarded", {
          placementId: ZB
        })).then((ZB => {
          let {
            rewarded: TB
          } = ZB;
          TB ? BB() : IB()
        }), (BB => {
          console.warn(`AD ${ZB}: AdMob rewarded failed:`, BB), IB()
        }))
      }
      playVideoAd(BB, IB) {
        const ZB = this.adUnitIds.interstitial;
        this.muteGameDuring(oB.d.request("ads.showInterstitial", {
          placementId: ZB
        })).then((() => {
          BB()
        }), (IB => {
          console.warn(`AD ${ZB}: AdMob interstitial failed:`, IB), BB()
        }))
      }
      renderBanner(BB) {
        const IB = (0, vB.e)(BB),
          ZB = this.adUnitIds.banners[IB];
        if (void 0 === ZB) return;
        const TB = document.getElementById(BB.divId);
        if (!TB) return void console.warn(`AD ${IB}: AdMob renderBanner called but div ${BB.divId} is not in DOM`);
        const JB = TB.getBoundingClientRect(),
          GB = window.innerWidth,
          cB = window.innerHeight;
        if (0 === GB || 0 === cB) return void console.warn(`AD ${IB}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const nB = {
          x1: kB.e.clamp(JB.left / GB * 100, 0, 100),
          y1: kB.e.clamp(JB.top / cB * 100, 0, 100),
          x2: kB.e.clamp(JB.right / GB * 100, 0, 100),
          y2: kB.e.clamp(JB.bottom / cB * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(IB, ZB), console.log(`AD ${IB}: AdMob renderBanner placementId=${ZB} box=`, nB), oB.d.emit("ads.showBanner", {
          placementId: ZB,
          ...nB
        })
      }
      clearBanner(BB) {
        const IB = (0, vB.e)(BB),
          ZB = this.bannerPlacementByBloxdId.get(IB);
        void 0 !== ZB && (this.bannerPlacementByBloxdId.delete(IB), this.bannerFirstResponseSeen.delete(ZB), console.log(`AD ${IB}: AdMob clearBanner placementId=${ZB}`), oB.d.emit("ads.hideBanner", {
          placementId: ZB
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