export const id = 153;
export const ids = [153];
export const modules = {
  8088: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AdMobSdkAdaptor: () => aB
    });
    var QB = zB(1351),
      nB = zB(28),
      dB = zB(1725),
      IB = zB(145),
      NB = zB(3584),
      uB = zB(376);
    const UB = {
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
    class aB extends QB.c {
      constructor(BB) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = UB[BB], dB.c.on("ads.bannerStatus", (BB => {
          let {
            placementId: jB,
            shown: zB,
            error: QB
          } = BB;
          const nB = !this.bannerFirstResponseSeen.has(jB);
          this.bannerFirstResponseSeen.add(jB), nB ? zB ? console.log(`AD ${jB}: AdMob banner loaded`) : console.warn(`AD ${jB}: AdMob banner failed to load: ${QB}`) : zB || console.warn(`AD ${jB}: AdMob banner refresh failed: ${QB}`)
        }))
      }
      static async setup() {
        const BB = "mobileIos" === IB.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${BB}`), new aB(BB)
      }
      muteGameDuring(BB) {
        return this.fullScreenAdsInFlight++, nB.c.set({
          soundOnFromAd: !1
        }), BB.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && nB.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(BB, jB) {
        const zB = this.adUnitIds.rewarded;
        this.muteGameDuring(dB.c.request("ads.showRewarded", {
          placementId: zB
        })).then((zB => {
          let {
            rewarded: QB
          } = zB;
          QB ? BB() : jB()
        }), (BB => {
          console.warn(`AD ${zB}: AdMob rewarded failed:`, BB), jB()
        }))
      }
      playVideoAd(BB, jB) {
        const zB = this.adUnitIds.interstitial;
        this.muteGameDuring(dB.c.request("ads.showInterstitial", {
          placementId: zB
        })).then((() => {
          BB()
        }), (jB => {
          console.warn(`AD ${zB}: AdMob interstitial failed:`, jB), BB()
        }))
      }
      renderBanner(BB) {
        const jB = (0, NB.b)(BB),
          zB = this.adUnitIds.banners[jB];
        if (void 0 === zB) return;
        const QB = document.getElementById(BB.divId);
        if (!QB) return void console.warn(`AD ${jB}: AdMob renderBanner called but div ${BB.divId} is not in DOM`);
        const nB = QB.getBoundingClientRect(),
          IB = window.innerWidth,
          UB = window.innerHeight;
        if (0 === IB || 0 === UB) return void console.warn(`AD ${jB}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const aB = {
          x1: uB.b.clamp(nB.left / IB * 100, 0, 100),
          y1: uB.b.clamp(nB.top / UB * 100, 0, 100),
          x2: uB.b.clamp(nB.right / IB * 100, 0, 100),
          y2: uB.b.clamp(nB.bottom / UB * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(jB, zB), console.log(`AD ${jB}: AdMob renderBanner placementId=${zB} box=`, aB), dB.c.emit("ads.showBanner", {
          placementId: zB,
          ...aB
        })
      }
      clearBanner(BB) {
        const jB = (0, NB.b)(BB),
          zB = this.bannerPlacementByBloxdId.get(jB);
        void 0 !== zB && (this.bannerPlacementByBloxdId.delete(jB), this.bannerFirstResponseSeen.delete(zB), console.log(`AD ${jB}: AdMob clearBanner placementId=${zB}`), dB.c.emit("ads.hideBanner", {
          placementId: zB
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