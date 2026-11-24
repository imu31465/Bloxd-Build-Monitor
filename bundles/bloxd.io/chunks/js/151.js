export const id = 151;
export const ids = [151];
export const modules = {
  8142: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AdMobSdkAdaptor: () => RD
    });
    var pD = wD(1326),
      sD = wD(20),
      KD = wD(1702),
      rD = wD(128),
      LD = wD(3470),
      cD = wD(351);
    const gD = {
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
    class RD extends pD.b {
      constructor(DD) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = gD[DD], KD.c.on("ads.bannerStatus", (DD => {
          let {
            placementId: zD,
            shown: wD,
            error: pD
          } = DD;
          const sD = !this.bannerFirstResponseSeen.has(zD);
          this.bannerFirstResponseSeen.add(zD), sD ? wD ? console.log(`AD ${zD}: AdMob banner loaded`) : console.warn(`AD ${zD}: AdMob banner failed to load: ${pD}`) : wD || console.warn(`AD ${zD}: AdMob banner refresh failed: ${pD}`)
        }))
      }
      static async setup() {
        const DD = "mobileIos" === rD.v ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${DD}`), new RD(DD)
      }
      muteGameDuring(DD) {
        return this.fullScreenAdsInFlight++, sD.e.set({
          soundOnFromAd: !1
        }), DD.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && sD.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(DD, zD) {
        const wD = this.adUnitIds.rewarded;
        this.muteGameDuring(KD.c.request("ads.showRewarded", {
          placementId: wD
        })).then((wD => {
          let {
            rewarded: pD
          } = wD;
          pD ? DD() : zD()
        }), (DD => {
          console.warn(`AD ${wD}: AdMob rewarded failed:`, DD), zD()
        }))
      }
      playVideoAd(DD, zD) {
        const wD = this.adUnitIds.interstitial;
        this.muteGameDuring(KD.c.request("ads.showInterstitial", {
          placementId: wD
        })).then((() => {
          DD()
        }), (zD => {
          console.warn(`AD ${wD}: AdMob interstitial failed:`, zD), DD()
        }))
      }
      renderBanner(DD) {
        const zD = (0, LD.b)(DD),
          wD = this.adUnitIds.banners[zD];
        if (void 0 === wD) return;
        const pD = document.getElementById(DD.divId);
        if (!pD) return void console.warn(`AD ${zD}: AdMob renderBanner called but div ${DD.divId} is not in DOM`);
        const sD = pD.getBoundingClientRect(),
          rD = window.innerWidth,
          gD = window.innerHeight;
        if (0 === rD || 0 === gD) return void console.warn(`AD ${zD}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const RD = {
          x1: cD.c.clamp(sD.left / rD * 100, 0, 100),
          y1: cD.c.clamp(sD.top / gD * 100, 0, 100),
          x2: cD.c.clamp(sD.right / rD * 100, 0, 100),
          y2: cD.c.clamp(sD.bottom / gD * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(zD, wD), console.log(`AD ${zD}: AdMob renderBanner placementId=${wD} box=`, RD), KD.c.emit("ads.showBanner", {
          placementId: wD,
          ...RD
        })
      }
      clearBanner(DD) {
        const zD = (0, LD.b)(DD),
          wD = this.bannerPlacementByBloxdId.get(zD);
        void 0 !== wD && (this.bannerPlacementByBloxdId.delete(zD), this.bannerFirstResponseSeen.delete(wD), console.log(`AD ${zD}: AdMob clearBanner placementId=${wD}`), KD.c.emit("ads.hideBanner", {
          placementId: wD
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