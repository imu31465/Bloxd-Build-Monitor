export const id = 145;
export const ids = [145];
export const modules = {
  7772: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AdMobSdkAdaptor: () => cU
    });
    var tU = gU(1312),
      pU = gU(21),
      EU = gU(1614),
      PU = gU(135),
      TU = gU(3161),
      qU = gU(311);
    const KU = {
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
    class cU extends tU.b {
      constructor(UU) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = KU[UU], EU.b.on("ads.bannerStatus", (UU => {
          let {
            placementId: RU,
            shown: gU,
            error: tU
          } = UU;
          const pU = !this.bannerFirstResponseSeen.has(RU);
          this.bannerFirstResponseSeen.add(RU), pU ? gU ? console.log(`AD ${RU}: AdMob banner loaded`) : console.warn(`AD ${RU}: AdMob banner failed to load: ${tU}`) : gU || console.warn(`AD ${RU}: AdMob banner refresh failed: ${tU}`)
        }))
      }
      static async setup() {
        const UU = "mobileIos" === PU.t ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${UU}`), new cU(UU)
      }
      muteGameDuring(UU) {
        return this.fullScreenAdsInFlight++, pU.b.set({
          soundOnFromAd: !1
        }), UU.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && pU.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(UU, RU) {
        const gU = this.adUnitIds.rewarded;
        this.muteGameDuring(EU.b.request("ads.showRewarded", {
          placementId: gU
        })).then((gU => {
          let {
            rewarded: tU
          } = gU;
          tU ? UU() : RU()
        }), (UU => {
          console.warn(`AD ${gU}: AdMob rewarded failed:`, UU), RU()
        }))
      }
      playVideoAd(UU, RU) {
        const gU = this.adUnitIds.interstitial;
        this.muteGameDuring(EU.b.request("ads.showInterstitial", {
          placementId: gU
        })).then((() => {
          UU()
        }), (RU => {
          console.warn(`AD ${gU}: AdMob interstitial failed:`, RU), UU()
        }))
      }
      renderBanner(UU) {
        const RU = (0, TU.e)(UU),
          gU = this.adUnitIds.banners[RU];
        if (void 0 === gU) return;
        const tU = document.getElementById(UU.divId);
        if (!tU) return void console.warn(`AD ${RU}: AdMob renderBanner called but div ${UU.divId} is not in DOM`);
        const pU = tU.getBoundingClientRect(),
          PU = window.innerWidth,
          KU = window.innerHeight;
        if (0 === PU || 0 === KU) return void console.warn(`AD ${RU}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const cU = {
          x1: qU.c.clamp(pU.left / PU * 100, 0, 100),
          y1: qU.c.clamp(pU.top / KU * 100, 0, 100),
          x2: qU.c.clamp(pU.right / PU * 100, 0, 100),
          y2: qU.c.clamp(pU.bottom / KU * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(RU, gU), console.log(`AD ${RU}: AdMob renderBanner placementId=${gU} box=`, cU), EU.b.emit("ads.showBanner", {
          placementId: gU,
          ...cU
        })
      }
      clearBanner(UU) {
        const RU = (0, TU.e)(UU),
          gU = this.bannerPlacementByBloxdId.get(RU);
        void 0 !== gU && (this.bannerPlacementByBloxdId.delete(RU), this.bannerFirstResponseSeen.delete(gU), console.log(`AD ${RU}: AdMob clearBanner placementId=${gU}`), EU.b.emit("ads.hideBanner", {
          placementId: gU
        }))
      }
      canShowBloxdAd(UU) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);