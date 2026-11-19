export const id = 145;
export const ids = [145];
export const modules = {
  7808: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AdMobSdkAdaptor: () => SD
    });
    var ID = cD(1308),
      pD = cD(16),
      iD = cD(1664),
      fD = cD(120),
      bD = cD(3266),
      QD = cD(326);
    const wD = {
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
    class SD extends ID.e {
      constructor(DD) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = wD[DD], iD.b.on("ads.bannerStatus", (DD => {
          let {
            placementId: CD,
            shown: cD,
            error: ID
          } = DD;
          const pD = !this.bannerFirstResponseSeen.has(CD);
          this.bannerFirstResponseSeen.add(CD), pD ? cD ? console.log(`AD ${CD}: AdMob banner loaded`) : console.warn(`AD ${CD}: AdMob banner failed to load: ${ID}`) : cD || console.warn(`AD ${CD}: AdMob banner refresh failed: ${ID}`)
        }))
      }
      static async setup() {
        const DD = "mobileIos" === fD.p ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${DD}`), new SD(DD)
      }
      muteGameDuring(DD) {
        return this.fullScreenAdsInFlight++, pD.d.set({
          soundOnFromAd: !1
        }), DD.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && pD.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(DD, CD) {
        const cD = this.adUnitIds.rewarded;
        this.muteGameDuring(iD.b.request("ads.showRewarded", {
          placementId: cD
        })).then((cD => {
          let {
            rewarded: ID
          } = cD;
          ID ? DD() : CD()
        }), (DD => {
          console.warn(`AD ${cD}: AdMob rewarded failed:`, DD), CD()
        }))
      }
      playVideoAd(DD, CD) {
        const cD = this.adUnitIds.interstitial;
        this.muteGameDuring(iD.b.request("ads.showInterstitial", {
          placementId: cD
        })).then((() => {
          DD()
        }), (CD => {
          console.warn(`AD ${cD}: AdMob interstitial failed:`, CD), DD()
        }))
      }
      renderBanner(DD) {
        const CD = (0, bD.b)(DD),
          cD = this.adUnitIds.banners[CD];
        if (void 0 === cD) return;
        const ID = document.getElementById(DD.divId);
        if (!ID) return void console.warn(`AD ${CD}: AdMob renderBanner called but div ${DD.divId} is not in DOM`);
        const pD = ID.getBoundingClientRect(),
          fD = window.innerWidth,
          wD = window.innerHeight;
        if (0 === fD || 0 === wD) return void console.warn(`AD ${CD}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const SD = {
          x1: QD.e.clamp(pD.left / fD * 100, 0, 100),
          y1: QD.e.clamp(pD.top / wD * 100, 0, 100),
          x2: QD.e.clamp(pD.right / fD * 100, 0, 100),
          y2: QD.e.clamp(pD.bottom / wD * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(CD, cD), console.log(`AD ${CD}: AdMob renderBanner placementId=${cD} box=`, SD), iD.b.emit("ads.showBanner", {
          placementId: cD,
          ...SD
        })
      }
      clearBanner(DD) {
        const CD = (0, bD.b)(DD),
          cD = this.bannerPlacementByBloxdId.get(CD);
        void 0 !== cD && (this.bannerPlacementByBloxdId.delete(CD), this.bannerFirstResponseSeen.delete(cD), console.log(`AD ${CD}: AdMob clearBanner placementId=${cD}`), iD.b.emit("ads.hideBanner", {
          placementId: cD
        }))
      }
      canShowBloxdAd(DD) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);