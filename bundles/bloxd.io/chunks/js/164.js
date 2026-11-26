export const id = 164;
export const ids = [164];
export const modules = {
  7293: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AdMobSdkAdaptor: () => wV
    });
    var JV = xV(1389),
      YV = xV(27),
      UV = xV(1781),
      yV = xV(138),
      pV = xV(3919),
      QV = xV(375);
    const nV = {
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
    class wV extends JV.b {
      constructor(VV) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = nV[VV], UV.b.on("ads.bannerStatus", (VV => {
          let {
            placementId: eV,
            shown: xV,
            error: JV
          } = VV;
          const YV = !this.bannerFirstResponseSeen.has(eV);
          this.bannerFirstResponseSeen.add(eV), YV ? xV ? console.log(`AD ${eV}: AdMob banner loaded`) : console.warn(`AD ${eV}: AdMob banner failed to load: ${JV}`) : xV || console.warn(`AD ${eV}: AdMob banner refresh failed: ${JV}`)
        }))
      }
      static async setup() {
        const VV = "mobileIos" === yV.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${VV}`), new wV(VV)
      }
      muteGameDuring(VV) {
        return this.fullScreenAdsInFlight++, YV.b.set({
          soundOnFromAd: !1
        }), VV.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && YV.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(VV, eV) {
        const xV = this.adUnitIds.rewarded;
        this.muteGameDuring(UV.b.request("ads.showRewarded", {
          placementId: xV
        })).then((xV => {
          let {
            rewarded: JV
          } = xV;
          JV ? VV() : eV()
        }), (VV => {
          console.warn(`AD ${xV}: AdMob rewarded failed:`, VV), eV()
        }))
      }
      playVideoAd(VV, eV) {
        const xV = this.adUnitIds.interstitial;
        this.muteGameDuring(UV.b.request("ads.showInterstitial", {
          placementId: xV
        })).then((() => {
          VV()
        }), (eV => {
          console.warn(`AD ${xV}: AdMob interstitial failed:`, eV), VV()
        }))
      }
      renderBanner(VV) {
        const eV = (0, pV.e)(VV),
          xV = this.adUnitIds.banners[eV];
        if (void 0 === xV) return;
        const JV = document.getElementById(VV.divId);
        if (!JV) return void console.warn(`AD ${eV}: AdMob renderBanner called but div ${VV.divId} is not in DOM`);
        const YV = JV.getBoundingClientRect(),
          yV = window.innerWidth,
          nV = window.innerHeight;
        if (0 === yV || 0 === nV) return void console.warn(`AD ${eV}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const wV = {
          x1: QV.b.clamp(YV.left / yV * 100, 0, 100),
          y1: QV.b.clamp(YV.top / nV * 100, 0, 100),
          x2: QV.b.clamp(YV.right / yV * 100, 0, 100),
          y2: QV.b.clamp(YV.bottom / nV * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(eV, xV), console.log(`AD ${eV}: AdMob renderBanner placementId=${xV} box=`, wV), UV.b.emit("ads.showBanner", {
          placementId: xV,
          ...wV
        })
      }
      clearBanner(VV) {
        const eV = (0, pV.e)(VV),
          xV = this.bannerPlacementByBloxdId.get(eV);
        void 0 !== xV && (this.bannerPlacementByBloxdId.delete(eV), this.bannerFirstResponseSeen.delete(xV), console.log(`AD ${eV}: AdMob clearBanner placementId=${xV}`), UV.b.emit("ads.hideBanner", {
          placementId: xV
        }))
      }
      canShowBloxdAd(VV) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);