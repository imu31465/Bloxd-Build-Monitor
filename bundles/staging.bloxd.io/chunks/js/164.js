export const id = 164;
export const ids = [164];
export const modules = {
  7206: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AdMobSdkAdaptor: () => zM
    });
    var OM = iM(1367),
      SM = iM(19),
      jM = iM(1771),
      aM = iM(119),
      PM = iM(3868),
      nM = iM(332);
    const QM = {
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
    class zM extends OM.d {
      constructor(MM) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = QM[MM], jM.e.on("ads.bannerStatus", (MM => {
          let {
            placementId: rM,
            shown: iM,
            error: OM
          } = MM;
          const SM = !this.bannerFirstResponseSeen.has(rM);
          this.bannerFirstResponseSeen.add(rM), SM ? iM ? console.log(`AD ${rM}: AdMob banner loaded`) : console.warn(`AD ${rM}: AdMob banner failed to load: ${OM}`) : iM || console.warn(`AD ${rM}: AdMob banner refresh failed: ${OM}`)
        }))
      }
      static async setup() {
        const MM = "mobileIos" === aM.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${MM}`), new zM(MM)
      }
      muteGameDuring(MM) {
        return this.fullScreenAdsInFlight++, SM.d.set({
          soundOnFromAd: !1
        }), MM.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && SM.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(MM, rM) {
        const iM = this.adUnitIds.rewarded;
        this.muteGameDuring(jM.e.request("ads.showRewarded", {
          placementId: iM
        })).then((iM => {
          let {
            rewarded: OM
          } = iM;
          OM ? MM() : rM()
        }), (MM => {
          console.warn(`AD ${iM}: AdMob rewarded failed:`, MM), rM()
        }))
      }
      playVideoAd(MM, rM) {
        const iM = this.adUnitIds.interstitial;
        this.muteGameDuring(jM.e.request("ads.showInterstitial", {
          placementId: iM
        })).then((() => {
          MM()
        }), (rM => {
          console.warn(`AD ${iM}: AdMob interstitial failed:`, rM), MM()
        }))
      }
      renderBanner(MM) {
        const rM = (0, PM.b)(MM),
          iM = this.adUnitIds.banners[rM];
        if (void 0 === iM) return;
        const OM = document.getElementById(MM.divId);
        if (!OM) return void console.warn(`AD ${rM}: AdMob renderBanner called but div ${MM.divId} is not in DOM`);
        const SM = OM.getBoundingClientRect(),
          aM = window.innerWidth,
          QM = window.innerHeight;
        if (0 === aM || 0 === QM) return void console.warn(`AD ${rM}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const zM = {
          x1: nM.d.clamp(SM.left / aM * 100, 0, 100),
          y1: nM.d.clamp(SM.top / QM * 100, 0, 100),
          x2: nM.d.clamp(SM.right / aM * 100, 0, 100),
          y2: nM.d.clamp(SM.bottom / QM * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(rM, iM), console.log(`AD ${rM}: AdMob renderBanner placementId=${iM} box=`, zM), jM.e.emit("ads.showBanner", {
          placementId: iM,
          ...zM
        })
      }
      clearBanner(MM) {
        const rM = (0, PM.b)(MM),
          iM = this.bannerPlacementByBloxdId.get(rM);
        void 0 !== iM && (this.bannerPlacementByBloxdId.delete(rM), this.bannerFirstResponseSeen.delete(iM), console.log(`AD ${rM}: AdMob clearBanner placementId=${iM}`), jM.e.emit("ads.hideBanner", {
          placementId: iM
        }))
      }
      canShowBloxdAd(MM) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);