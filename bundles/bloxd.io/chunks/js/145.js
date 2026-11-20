export const id = 145;
export const ids = [145];
export const modules = {
  8151: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AdMobSdkAdaptor: () => IT
    });
    var lT = cT(1321),
      MT = cT(31),
      KT = cT(1710),
      OT = cT(159),
      yT = cT(3396),
      fT = cT(339);
    const xT = {
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
    class IT extends lT.b {
      constructor(TT) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = xT[TT], KT.c.on("ads.bannerStatus", (TT => {
          let {
            placementId: kT,
            shown: cT,
            error: lT
          } = TT;
          const MT = !this.bannerFirstResponseSeen.has(kT);
          this.bannerFirstResponseSeen.add(kT), MT ? cT ? console.log(`AD ${kT}: AdMob banner loaded`) : console.warn(`AD ${kT}: AdMob banner failed to load: ${lT}`) : cT || console.warn(`AD ${kT}: AdMob banner refresh failed: ${lT}`)
        }))
      }
      static async setup() {
        const TT = "mobileIos" === OT.u ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${TT}`), new IT(TT)
      }
      muteGameDuring(TT) {
        return this.fullScreenAdsInFlight++, MT.e.set({
          soundOnFromAd: !1
        }), TT.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && MT.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(TT, kT) {
        const cT = this.adUnitIds.rewarded;
        this.muteGameDuring(KT.c.request("ads.showRewarded", {
          placementId: cT
        })).then((cT => {
          let {
            rewarded: lT
          } = cT;
          lT ? TT() : kT()
        }), (TT => {
          console.warn(`AD ${cT}: AdMob rewarded failed:`, TT), kT()
        }))
      }
      playVideoAd(TT, kT) {
        const cT = this.adUnitIds.interstitial;
        this.muteGameDuring(KT.c.request("ads.showInterstitial", {
          placementId: cT
        })).then((() => {
          TT()
        }), (kT => {
          console.warn(`AD ${cT}: AdMob interstitial failed:`, kT), TT()
        }))
      }
      renderBanner(TT) {
        const kT = (0, yT.b)(TT),
          cT = this.adUnitIds.banners[kT];
        if (void 0 === cT) return;
        const lT = document.getElementById(TT.divId);
        if (!lT) return void console.warn(`AD ${kT}: AdMob renderBanner called but div ${TT.divId} is not in DOM`);
        const MT = lT.getBoundingClientRect(),
          OT = window.innerWidth,
          xT = window.innerHeight;
        if (0 === OT || 0 === xT) return void console.warn(`AD ${kT}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const IT = {
          x1: fT.d.clamp(MT.left / OT * 100, 0, 100),
          y1: fT.d.clamp(MT.top / xT * 100, 0, 100),
          x2: fT.d.clamp(MT.right / OT * 100, 0, 100),
          y2: fT.d.clamp(MT.bottom / xT * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(kT, cT), console.log(`AD ${kT}: AdMob renderBanner placementId=${cT} box=`, IT), KT.c.emit("ads.showBanner", {
          placementId: cT,
          ...IT
        })
      }
      clearBanner(TT) {
        const kT = (0, yT.b)(TT),
          cT = this.bannerPlacementByBloxdId.get(kT);
        void 0 !== cT && (this.bannerPlacementByBloxdId.delete(kT), this.bannerFirstResponseSeen.delete(cT), console.log(`AD ${kT}: AdMob clearBanner placementId=${cT}`), KT.c.emit("ads.hideBanner", {
          placementId: cT
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