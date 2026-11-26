export const id = 163;
export const ids = [163];
export const modules = {
  7337: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AdMobSdkAdaptor: () => YU
    });
    var cU = zU(1351),
      yU = zU(27),
      QU = zU(1734),
      AU = zU(142),
      FU = zU(3861),
      oU = zU(344),
      DU = zU(1783);
    const EU = {
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
    class YU extends cU.d {
      constructor(UU) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = EU[UU], QU.d.on("ads.bannerStatus", (UU => {
          let {
            placementId: XU,
            shown: zU,
            error: cU
          } = UU;
          const yU = !this.bannerFirstResponseSeen.has(XU);
          this.bannerFirstResponseSeen.add(XU), yU ? ((0, DU.k)(zU), zU ? console.log(`AD ${XU}: AdMob banner loaded`) : console.warn(`AD ${XU}: AdMob banner failed to load: ${cU}`)) : zU || console.warn(`AD ${XU}: AdMob banner refresh failed: ${cU}`)
        }))
      }
      static async setup() {
        const UU = "mobileIos" === AU.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${UU}`), new YU(UU)
      }
      muteGameDuring(UU) {
        return this.fullScreenAdsInFlight++, yU.e.set({
          soundOnFromAd: !1
        }), UU.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && yU.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(UU, XU) {
        const zU = this.adUnitIds.rewarded;
        this.muteGameDuring(QU.d.request("ads.showRewarded", {
          placementId: zU
        })).then((zU => {
          let {
            rewarded: cU
          } = zU;
          cU ? UU() : XU()
        }), (UU => {
          console.warn(`AD ${zU}: AdMob rewarded failed:`, UU), XU()
        }))
      }
      playVideoAd(UU, XU) {
        const zU = this.adUnitIds.interstitial;
        this.muteGameDuring(QU.d.request("ads.showInterstitial", {
          placementId: zU
        })).then((() => {
          UU()
        }), (XU => {
          console.warn(`AD ${zU}: AdMob interstitial failed:`, XU), UU()
        }))
      }
      renderBanner(UU) {
        const XU = (0, FU.c)(UU),
          zU = this.adUnitIds.banners[XU];
        if (void 0 === zU) return;
        const cU = document.getElementById(UU.divId);
        if (!cU) return void console.warn(`AD ${XU}: AdMob renderBanner called but div ${UU.divId} is not in DOM`);
        const yU = cU.getBoundingClientRect(),
          AU = window.innerWidth,
          EU = window.innerHeight;
        if (0 === AU || 0 === EU) return void console.warn(`AD ${XU}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const YU = {
          x1: oU.d.clamp(yU.left / AU * 100, 0, 100),
          y1: oU.d.clamp(yU.top / EU * 100, 0, 100),
          x2: oU.d.clamp(yU.right / AU * 100, 0, 100),
          y2: oU.d.clamp(yU.bottom / EU * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(XU, zU), console.log(`AD ${XU}: AdMob renderBanner placementId=${zU} box=`, YU), (0, DU.g)("site_sdk"), QU.d.emit("ads.showBanner", {
          placementId: zU,
          ...YU
        })
      }
      clearBanner(UU) {
        const XU = (0, FU.c)(UU),
          zU = this.bannerPlacementByBloxdId.get(XU);
        void 0 !== zU && (this.bannerPlacementByBloxdId.delete(XU), this.bannerFirstResponseSeen.delete(zU), console.log(`AD ${XU}: AdMob clearBanner placementId=${zU}`), QU.d.emit("ads.hideBanner", {
          placementId: zU
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