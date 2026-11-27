export const id = 165;
export const ids = [165];
export const modules = {
  7365: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AdMobSdkAdaptor: () => Re
    });
    var ye = He(1300),
      be = He(18),
      Me = He(1682),
      Ke = He(125),
      Ue = He(3856),
      Fe = He(347),
      Je = He(1746);
    const oe = {
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
    class Re extends ye.d {
      constructor(ee) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = oe[ee], Me.c.on("ads.bannerStatus", (ee => {
          let {
            placementId: ie,
            shown: He,
            error: ye
          } = ee;
          const be = !this.bannerFirstResponseSeen.has(ie);
          this.bannerFirstResponseSeen.add(ie), be ? ((0, Je.j)(He), He ? console.log(`AD ${ie}: AdMob banner loaded`) : console.warn(`AD ${ie}: AdMob banner failed to load: ${ye}`)) : He || console.warn(`AD ${ie}: AdMob banner refresh failed: ${ye}`)
        }))
      }
      static async setup() {
        const ee = "mobileIos" === Ke.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${ee}`), new Re(ee)
      }
      muteGameDuring(ee) {
        return this.fullScreenAdsInFlight++, be.e.set({
          soundOnFromAd: !1
        }), ee.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && be.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(ee, ie) {
        const He = this.adUnitIds.rewarded;
        this.muteGameDuring(Me.c.request("ads.showRewarded", {
          placementId: He
        })).then((He => {
          let {
            rewarded: ye
          } = He;
          ye ? ee() : ie()
        }), (ee => {
          console.warn(`AD ${He}: AdMob rewarded failed:`, ee), ie()
        }))
      }
      playVideoAd(ee, ie) {
        const He = this.adUnitIds.interstitial;
        this.muteGameDuring(Me.c.request("ads.showInterstitial", {
          placementId: He
        })).then((() => {
          ee()
        }), (ie => {
          console.warn(`AD ${He}: AdMob interstitial failed:`, ie), ee()
        }))
      }
      renderBanner(ee) {
        const ie = (0, Ue.c)(ee),
          He = this.adUnitIds.banners[ie];
        if (void 0 === He) return;
        const ye = document.getElementById(ee.divId);
        if (!ye) return void console.warn(`AD ${ie}: AdMob renderBanner called but div ${ee.divId} is not in DOM`);
        const be = ye.getBoundingClientRect(),
          Ke = window.innerWidth,
          oe = window.innerHeight;
        if (0 === Ke || 0 === oe) return void console.warn(`AD ${ie}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Re = {
          x1: Fe.c.clamp(be.left / Ke * 100, 0, 100),
          y1: Fe.c.clamp(be.top / oe * 100, 0, 100),
          x2: Fe.c.clamp(be.right / Ke * 100, 0, 100),
          y2: Fe.c.clamp(be.bottom / oe * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(ie, He), console.log(`AD ${ie}: AdMob renderBanner placementId=${He} box=`, Re), (0, Je.h)("site_sdk"), Me.c.emit("ads.showBanner", {
          placementId: He,
          ...Re
        })
      }
      clearBanner(ee) {
        const ie = (0, Ue.c)(ee),
          He = this.bannerPlacementByBloxdId.get(ie);
        void 0 !== He && (this.bannerPlacementByBloxdId.delete(ie), this.bannerFirstResponseSeen.delete(He), console.log(`AD ${ie}: AdMob clearBanner placementId=${He}`), Me.c.emit("ads.hideBanner", {
          placementId: He
        }))
      }
      canShowBloxdAd(ee) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);