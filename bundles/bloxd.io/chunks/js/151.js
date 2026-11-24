export const id = 151;
export const ids = [151];
export const modules = {
  8282: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AdMobSdkAdaptor: () => IS
    });
    var tS = gS(1397),
      bS = gS(24),
      XS = gS(1792),
      xS = gS(138),
      NS = gS(3602),
      qS = gS(387);
    const uS = {
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
    class IS extends tS.c {
      constructor(SS) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = uS[SS], XS.d.on("ads.bannerStatus", (SS => {
          let {
            placementId: HS,
            shown: gS,
            error: tS
          } = SS;
          const bS = !this.bannerFirstResponseSeen.has(HS);
          this.bannerFirstResponseSeen.add(HS), bS ? gS ? console.log(`AD ${HS}: AdMob banner loaded`) : console.warn(`AD ${HS}: AdMob banner failed to load: ${tS}`) : gS || console.warn(`AD ${HS}: AdMob banner refresh failed: ${tS}`)
        }))
      }
      static async setup() {
        const SS = "mobileIos" === xS.r ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${SS}`), new IS(SS)
      }
      muteGameDuring(SS) {
        return this.fullScreenAdsInFlight++, bS.b.set({
          soundOnFromAd: !1
        }), SS.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && bS.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(SS, HS) {
        const gS = this.adUnitIds.rewarded;
        this.muteGameDuring(XS.d.request("ads.showRewarded", {
          placementId: gS
        })).then((gS => {
          let {
            rewarded: tS
          } = gS;
          tS ? SS() : HS()
        }), (SS => {
          console.warn(`AD ${gS}: AdMob rewarded failed:`, SS), HS()
        }))
      }
      playVideoAd(SS, HS) {
        const gS = this.adUnitIds.interstitial;
        this.muteGameDuring(XS.d.request("ads.showInterstitial", {
          placementId: gS
        })).then((() => {
          SS()
        }), (HS => {
          console.warn(`AD ${gS}: AdMob interstitial failed:`, HS), SS()
        }))
      }
      renderBanner(SS) {
        const HS = (0, NS.b)(SS),
          gS = this.adUnitIds.banners[HS];
        if (void 0 === gS) return;
        const tS = document.getElementById(SS.divId);
        if (!tS) return void console.warn(`AD ${HS}: AdMob renderBanner called but div ${SS.divId} is not in DOM`);
        const bS = tS.getBoundingClientRect(),
          xS = window.innerWidth,
          uS = window.innerHeight;
        if (0 === xS || 0 === uS) return void console.warn(`AD ${HS}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const IS = {
          x1: qS.b.clamp(bS.left / xS * 100, 0, 100),
          y1: qS.b.clamp(bS.top / uS * 100, 0, 100),
          x2: qS.b.clamp(bS.right / xS * 100, 0, 100),
          y2: qS.b.clamp(bS.bottom / uS * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(HS, gS), console.log(`AD ${HS}: AdMob renderBanner placementId=${gS} box=`, IS), XS.d.emit("ads.showBanner", {
          placementId: gS,
          ...IS
        })
      }
      clearBanner(SS) {
        const HS = (0, NS.b)(SS),
          gS = this.bannerPlacementByBloxdId.get(HS);
        void 0 !== gS && (this.bannerPlacementByBloxdId.delete(HS), this.bannerFirstResponseSeen.delete(gS), console.log(`AD ${HS}: AdMob clearBanner placementId=${gS}`), XS.d.emit("ads.hideBanner", {
          placementId: gS
        }))
      }
      canShowBloxdAd(SS) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);