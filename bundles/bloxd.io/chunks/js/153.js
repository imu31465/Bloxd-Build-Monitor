export const id = 153;
export const ids = [153];
export const modules = {
  8169: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AdMobSdkAdaptor: () => VG
    });
    var wG = ZG(1280),
      SG = ZG(17),
      LG = ZG(1634),
      yG = ZG(116),
      kG = ZG(3449),
      UG = ZG(352);
    const YG = {
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
    class VG extends wG.e {
      constructor(GG) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = YG[GG], LG.c.on("ads.bannerStatus", (GG => {
          let {
            placementId: bG,
            shown: ZG,
            error: wG
          } = GG;
          const SG = !this.bannerFirstResponseSeen.has(bG);
          this.bannerFirstResponseSeen.add(bG), SG ? ZG ? console.log(`AD ${bG}: AdMob banner loaded`) : console.warn(`AD ${bG}: AdMob banner failed to load: ${wG}`) : ZG || console.warn(`AD ${bG}: AdMob banner refresh failed: ${wG}`)
        }))
      }
      static async setup() {
        const GG = "mobileIos" === yG.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${GG}`), new VG(GG)
      }
      muteGameDuring(GG) {
        return this.fullScreenAdsInFlight++, SG.e.set({
          soundOnFromAd: !1
        }), GG.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && SG.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(GG, bG) {
        const ZG = this.adUnitIds.rewarded;
        this.muteGameDuring(LG.c.request("ads.showRewarded", {
          placementId: ZG
        })).then((ZG => {
          let {
            rewarded: wG
          } = ZG;
          wG ? GG() : bG()
        }), (GG => {
          console.warn(`AD ${ZG}: AdMob rewarded failed:`, GG), bG()
        }))
      }
      playVideoAd(GG, bG) {
        const ZG = this.adUnitIds.interstitial;
        this.muteGameDuring(LG.c.request("ads.showInterstitial", {
          placementId: ZG
        })).then((() => {
          GG()
        }), (bG => {
          console.warn(`AD ${ZG}: AdMob interstitial failed:`, bG), GG()
        }))
      }
      renderBanner(GG) {
        const bG = (0, kG.e)(GG),
          ZG = this.adUnitIds.banners[bG];
        if (void 0 === ZG) return;
        const wG = document.getElementById(GG.divId);
        if (!wG) return void console.warn(`AD ${bG}: AdMob renderBanner called but div ${GG.divId} is not in DOM`);
        const SG = wG.getBoundingClientRect(),
          yG = window.innerWidth,
          YG = window.innerHeight;
        if (0 === yG || 0 === YG) return void console.warn(`AD ${bG}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const VG = {
          x1: UG.c.clamp(SG.left / yG * 100, 0, 100),
          y1: UG.c.clamp(SG.top / YG * 100, 0, 100),
          x2: UG.c.clamp(SG.right / yG * 100, 0, 100),
          y2: UG.c.clamp(SG.bottom / YG * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(bG, ZG), console.log(`AD ${bG}: AdMob renderBanner placementId=${ZG} box=`, VG), LG.c.emit("ads.showBanner", {
          placementId: ZG,
          ...VG
        })
      }
      clearBanner(GG) {
        const bG = (0, kG.e)(GG),
          ZG = this.bannerPlacementByBloxdId.get(bG);
        void 0 !== ZG && (this.bannerPlacementByBloxdId.delete(bG), this.bannerFirstResponseSeen.delete(ZG), console.log(`AD ${bG}: AdMob clearBanner placementId=${ZG}`), LG.c.emit("ads.hideBanner", {
          placementId: ZG
        }))
      }
      canShowBloxdAd(GG) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);