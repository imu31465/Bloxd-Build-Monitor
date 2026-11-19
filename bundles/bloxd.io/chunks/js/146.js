export const id = 146;
export const ids = [146];
export const modules = {
  7564: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AdMobSdkAdaptor: () => ST
    });
    var iT = IT(1286),
      zT = IT(12),
      kT = IT(1635),
      WT = IT(139),
      XT = IT(3019),
      BT = IT(314);
    const FT = {
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
    class ST extends iT.d {
      constructor(TT) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = FT[TT], kT.c.on("ads.bannerStatus", (TT => {
          let {
            placementId: oT,
            shown: IT,
            error: iT
          } = TT;
          const zT = !this.bannerFirstResponseSeen.has(oT);
          this.bannerFirstResponseSeen.add(oT), zT ? IT ? console.log(`AD ${oT}: AdMob banner loaded`) : console.warn(`AD ${oT}: AdMob banner failed to load: ${iT}`) : IT || console.warn(`AD ${oT}: AdMob banner refresh failed: ${iT}`)
        }))
      }
      static async setup() {
        const TT = "mobileIos" === WT.p ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${TT}`), new ST(TT)
      }
      muteGameDuring(TT) {
        return this.fullScreenAdsInFlight++, zT.c.set({
          soundOnFromAd: !1
        }), TT.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && zT.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(TT, oT) {
        const IT = this.adUnitIds.rewarded;
        this.muteGameDuring(kT.c.request("ads.showRewarded", {
          placementId: IT
        })).then((IT => {
          let {
            rewarded: iT
          } = IT;
          iT ? TT() : oT()
        }), (TT => {
          console.warn(`AD ${IT}: AdMob rewarded failed:`, TT), oT()
        }))
      }
      playVideoAd(TT, oT) {
        const IT = this.adUnitIds.interstitial;
        this.muteGameDuring(kT.c.request("ads.showInterstitial", {
          placementId: IT
        })).then((() => {
          TT()
        }), (oT => {
          console.warn(`AD ${IT}: AdMob interstitial failed:`, oT), TT()
        }))
      }
      renderBanner(TT) {
        const oT = (0, XT.e)(TT),
          IT = this.adUnitIds.banners[oT];
        if (void 0 === IT) return;
        const iT = document.getElementById(TT.divId);
        if (!iT) return void console.warn(`AD ${oT}: AdMob renderBanner called but div ${TT.divId} is not in DOM`);
        const zT = iT.getBoundingClientRect(),
          WT = window.innerWidth,
          FT = window.innerHeight;
        if (0 === WT || 0 === FT) return void console.warn(`AD ${oT}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const ST = {
          x1: BT.e.clamp(zT.left / WT * 100, 0, 100),
          y1: BT.e.clamp(zT.top / FT * 100, 0, 100),
          x2: BT.e.clamp(zT.right / WT * 100, 0, 100),
          y2: BT.e.clamp(zT.bottom / FT * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(oT, IT), console.log(`AD ${oT}: AdMob renderBanner placementId=${IT} box=`, ST), kT.c.emit("ads.showBanner", {
          placementId: IT,
          ...ST
        })
      }
      clearBanner(TT) {
        const oT = (0, XT.e)(TT),
          IT = this.bannerPlacementByBloxdId.get(oT);
        void 0 !== IT && (this.bannerPlacementByBloxdId.delete(oT), this.bannerFirstResponseSeen.delete(IT), console.log(`AD ${oT}: AdMob clearBanner placementId=${IT}`), kT.c.emit("ads.hideBanner", {
          placementId: IT
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