export const id = 151;
export const ids = [151];
export const modules = {
  8029: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AdMobSdkAdaptor: () => Rm
    });
    var hm = fm(1318),
      Am = fm(23),
      am = fm(1681),
      xm = fm(135),
      wm = fm(3469),
      Dm = fm(354);
    const im = {
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
    class Rm extends hm.c {
      constructor(mm) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = im[mm], am.e.on("ads.bannerStatus", (mm => {
          let {
            placementId: Tm,
            shown: fm,
            error: hm
          } = mm;
          const Am = !this.bannerFirstResponseSeen.has(Tm);
          this.bannerFirstResponseSeen.add(Tm), Am ? fm ? console.log(`AD ${Tm}: AdMob banner loaded`) : console.warn(`AD ${Tm}: AdMob banner failed to load: ${hm}`) : fm || console.warn(`AD ${Tm}: AdMob banner refresh failed: ${hm}`)
        }))
      }
      static async setup() {
        const mm = "mobileIos" === xm.q ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${mm}`), new Rm(mm)
      }
      muteGameDuring(mm) {
        return this.fullScreenAdsInFlight++, Am.c.set({
          soundOnFromAd: !1
        }), mm.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Am.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(mm, Tm) {
        const fm = this.adUnitIds.rewarded;
        this.muteGameDuring(am.e.request("ads.showRewarded", {
          placementId: fm
        })).then((fm => {
          let {
            rewarded: hm
          } = fm;
          hm ? mm() : Tm()
        }), (mm => {
          console.warn(`AD ${fm}: AdMob rewarded failed:`, mm), Tm()
        }))
      }
      playVideoAd(mm, Tm) {
        const fm = this.adUnitIds.interstitial;
        this.muteGameDuring(am.e.request("ads.showInterstitial", {
          placementId: fm
        })).then((() => {
          mm()
        }), (Tm => {
          console.warn(`AD ${fm}: AdMob interstitial failed:`, Tm), mm()
        }))
      }
      renderBanner(mm) {
        const Tm = (0, wm.c)(mm),
          fm = this.adUnitIds.banners[Tm];
        if (void 0 === fm) return;
        const hm = document.getElementById(mm.divId);
        if (!hm) return void console.warn(`AD ${Tm}: AdMob renderBanner called but div ${mm.divId} is not in DOM`);
        const Am = hm.getBoundingClientRect(),
          xm = window.innerWidth,
          im = window.innerHeight;
        if (0 === xm || 0 === im) return void console.warn(`AD ${Tm}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Rm = {
          x1: Dm.c.clamp(Am.left / xm * 100, 0, 100),
          y1: Dm.c.clamp(Am.top / im * 100, 0, 100),
          x2: Dm.c.clamp(Am.right / xm * 100, 0, 100),
          y2: Dm.c.clamp(Am.bottom / im * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Tm, fm), console.log(`AD ${Tm}: AdMob renderBanner placementId=${fm} box=`, Rm), am.e.emit("ads.showBanner", {
          placementId: fm,
          ...Rm
        })
      }
      clearBanner(mm) {
        const Tm = (0, wm.c)(mm),
          fm = this.bannerPlacementByBloxdId.get(Tm);
        void 0 !== fm && (this.bannerPlacementByBloxdId.delete(Tm), this.bannerFirstResponseSeen.delete(fm), console.log(`AD ${Tm}: AdMob clearBanner placementId=${fm}`), am.e.emit("ads.hideBanner", {
          placementId: fm
        }))
      }
      canShowBloxdAd(mm) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);