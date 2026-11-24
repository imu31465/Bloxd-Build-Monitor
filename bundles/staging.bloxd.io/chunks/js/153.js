export const id = 153;
export const ids = [153];
export const modules = {
  8232: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AdMobSdkAdaptor: () => jT
    });
    var WT = mT(1423),
      zT = mT(25),
      MT = mT(1802),
      gT = mT(133),
      nT = mT(3561),
      HT = mT(366);
    const kT = {
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
    class jT extends WT.d {
      constructor(TT) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = kT[TT], MT.e.on("ads.bannerStatus", (TT => {
          let {
            placementId: UT,
            shown: mT,
            error: WT
          } = TT;
          const zT = !this.bannerFirstResponseSeen.has(UT);
          this.bannerFirstResponseSeen.add(UT), zT ? mT ? console.log(`AD ${UT}: AdMob banner loaded`) : console.warn(`AD ${UT}: AdMob banner failed to load: ${WT}`) : mT || console.warn(`AD ${UT}: AdMob banner refresh failed: ${WT}`)
        }))
      }
      static async setup() {
        const TT = "mobileIos" === gT.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${TT}`), new jT(TT)
      }
      muteGameDuring(TT) {
        return this.fullScreenAdsInFlight++, zT.b.set({
          soundOnFromAd: !1
        }), TT.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && zT.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(TT, UT) {
        const mT = this.adUnitIds.rewarded;
        this.muteGameDuring(MT.e.request("ads.showRewarded", {
          placementId: mT
        })).then((mT => {
          let {
            rewarded: WT
          } = mT;
          WT ? TT() : UT()
        }), (TT => {
          console.warn(`AD ${mT}: AdMob rewarded failed:`, TT), UT()
        }))
      }
      playVideoAd(TT, UT) {
        const mT = this.adUnitIds.interstitial;
        this.muteGameDuring(MT.e.request("ads.showInterstitial", {
          placementId: mT
        })).then((() => {
          TT()
        }), (UT => {
          console.warn(`AD ${mT}: AdMob interstitial failed:`, UT), TT()
        }))
      }
      renderBanner(TT) {
        const UT = (0, nT.d)(TT),
          mT = this.adUnitIds.banners[UT];
        if (void 0 === mT) return;
        const WT = document.getElementById(TT.divId);
        if (!WT) return void console.warn(`AD ${UT}: AdMob renderBanner called but div ${TT.divId} is not in DOM`);
        const zT = WT.getBoundingClientRect(),
          gT = window.innerWidth,
          kT = window.innerHeight;
        if (0 === gT || 0 === kT) return void console.warn(`AD ${UT}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const jT = {
          x1: HT.e.clamp(zT.left / gT * 100, 0, 100),
          y1: HT.e.clamp(zT.top / kT * 100, 0, 100),
          x2: HT.e.clamp(zT.right / gT * 100, 0, 100),
          y2: HT.e.clamp(zT.bottom / kT * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(UT, mT), console.log(`AD ${UT}: AdMob renderBanner placementId=${mT} box=`, jT), MT.e.emit("ads.showBanner", {
          placementId: mT,
          ...jT
        })
      }
      clearBanner(TT) {
        const UT = (0, nT.d)(TT),
          mT = this.bannerPlacementByBloxdId.get(UT);
        void 0 !== mT && (this.bannerPlacementByBloxdId.delete(UT), this.bannerFirstResponseSeen.delete(mT), console.log(`AD ${UT}: AdMob clearBanner placementId=${mT}`), MT.e.emit("ads.hideBanner", {
          placementId: mT
        }))
      }
      canShowBloxdAd(TT) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);