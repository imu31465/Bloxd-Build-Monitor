export const id = 145;
export const ids = [145];
export const modules = {
  7868: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AdMobSdkAdaptor: () => Vu
    });
    var Eu = yu(1277),
      Ku = yu(27),
      Qu = yu(1626),
      mu = yu(145),
      Ju = yu(3269),
      Nu = yu(343);
    const Xu = {
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
    class Vu extends Eu.b {
      constructor(uu) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Xu[uu], Qu.d.on("ads.bannerStatus", (uu => {
          let {
            placementId: Ru,
            shown: yu,
            error: Eu
          } = uu;
          const Ku = !this.bannerFirstResponseSeen.has(Ru);
          this.bannerFirstResponseSeen.add(Ru), Ku ? yu ? console.log(`AD ${Ru}: AdMob banner loaded`) : console.warn(`AD ${Ru}: AdMob banner failed to load: ${Eu}`) : yu || console.warn(`AD ${Ru}: AdMob banner refresh failed: ${Eu}`)
        }))
      }
      static async setup() {
        const uu = "mobileIos" === mu.v ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${uu}`), new Vu(uu)
      }
      muteGameDuring(uu) {
        return this.fullScreenAdsInFlight++, Ku.d.set({
          soundOnFromAd: !1
        }), uu.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Ku.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(uu, Ru) {
        const yu = this.adUnitIds.rewarded;
        this.muteGameDuring(Qu.d.request("ads.showRewarded", {
          placementId: yu
        })).then((yu => {
          let {
            rewarded: Eu
          } = yu;
          Eu ? uu() : Ru()
        }), (uu => {
          console.warn(`AD ${yu}: AdMob rewarded failed:`, uu), Ru()
        }))
      }
      playVideoAd(uu, Ru) {
        const yu = this.adUnitIds.interstitial;
        this.muteGameDuring(Qu.d.request("ads.showInterstitial", {
          placementId: yu
        })).then((() => {
          uu()
        }), (Ru => {
          console.warn(`AD ${yu}: AdMob interstitial failed:`, Ru), uu()
        }))
      }
      renderBanner(uu) {
        const Ru = (0, Ju.b)(uu),
          yu = this.adUnitIds.banners[Ru];
        if (void 0 === yu) return;
        const Eu = document.getElementById(uu.divId);
        if (!Eu) return void console.warn(`AD ${Ru}: AdMob renderBanner called but div ${uu.divId} is not in DOM`);
        const Ku = Eu.getBoundingClientRect(),
          mu = window.innerWidth,
          Xu = window.innerHeight;
        if (0 === mu || 0 === Xu) return void console.warn(`AD ${Ru}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Vu = {
          x1: Nu.c.clamp(Ku.left / mu * 100, 0, 100),
          y1: Nu.c.clamp(Ku.top / Xu * 100, 0, 100),
          x2: Nu.c.clamp(Ku.right / mu * 100, 0, 100),
          y2: Nu.c.clamp(Ku.bottom / Xu * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Ru, yu), console.log(`AD ${Ru}: AdMob renderBanner placementId=${yu} box=`, Vu), Qu.d.emit("ads.showBanner", {
          placementId: yu,
          ...Vu
        })
      }
      clearBanner(uu) {
        const Ru = (0, Ju.b)(uu),
          yu = this.bannerPlacementByBloxdId.get(Ru);
        void 0 !== yu && (this.bannerPlacementByBloxdId.delete(Ru), this.bannerFirstResponseSeen.delete(yu), console.log(`AD ${Ru}: AdMob clearBanner placementId=${yu}`), Qu.d.emit("ads.hideBanner", {
          placementId: yu
        }))
      }
      canShowBloxdAd(uu) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);