export const id = 153;
export const ids = [153];
export const modules = {
  8348: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AdMobSdkAdaptor: () => Xt
    });
    var Ot = Vt(1419),
      qt = Vt(26),
      Dt = Vt(1784),
      mt = Vt(153),
      dt = Vt(3540),
      jt = Vt(391);
    const Ht = {
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
    class Xt extends Ot.e {
      constructor(tt) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Ht[tt], Dt.c.on("ads.bannerStatus", (tt => {
          let {
            placementId: et,
            shown: Vt,
            error: Ot
          } = tt;
          const qt = !this.bannerFirstResponseSeen.has(et);
          this.bannerFirstResponseSeen.add(et), qt ? Vt ? console.log(`AD ${et}: AdMob banner loaded`) : console.warn(`AD ${et}: AdMob banner failed to load: ${Ot}`) : Vt || console.warn(`AD ${et}: AdMob banner refresh failed: ${Ot}`)
        }))
      }
      static async setup() {
        const tt = "mobileIos" === mt.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${tt}`), new Xt(tt)
      }
      muteGameDuring(tt) {
        return this.fullScreenAdsInFlight++, qt.b.set({
          soundOnFromAd: !1
        }), tt.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && qt.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(tt, et) {
        const Vt = this.adUnitIds.rewarded;
        this.muteGameDuring(Dt.c.request("ads.showRewarded", {
          placementId: Vt
        })).then((Vt => {
          let {
            rewarded: Ot
          } = Vt;
          Ot ? tt() : et()
        }), (tt => {
          console.warn(`AD ${Vt}: AdMob rewarded failed:`, tt), et()
        }))
      }
      playVideoAd(tt, et) {
        const Vt = this.adUnitIds.interstitial;
        this.muteGameDuring(Dt.c.request("ads.showInterstitial", {
          placementId: Vt
        })).then((() => {
          tt()
        }), (et => {
          console.warn(`AD ${Vt}: AdMob interstitial failed:`, et), tt()
        }))
      }
      renderBanner(tt) {
        const et = (0, dt.c)(tt),
          Vt = this.adUnitIds.banners[et];
        if (void 0 === Vt) return;
        const Ot = document.getElementById(tt.divId);
        if (!Ot) return void console.warn(`AD ${et}: AdMob renderBanner called but div ${tt.divId} is not in DOM`);
        const qt = Ot.getBoundingClientRect(),
          mt = window.innerWidth,
          Ht = window.innerHeight;
        if (0 === mt || 0 === Ht) return void console.warn(`AD ${et}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Xt = {
          x1: jt.e.clamp(qt.left / mt * 100, 0, 100),
          y1: jt.e.clamp(qt.top / Ht * 100, 0, 100),
          x2: jt.e.clamp(qt.right / mt * 100, 0, 100),
          y2: jt.e.clamp(qt.bottom / Ht * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(et, Vt), console.log(`AD ${et}: AdMob renderBanner placementId=${Vt} box=`, Xt), Dt.c.emit("ads.showBanner", {
          placementId: Vt,
          ...Xt
        })
      }
      clearBanner(tt) {
        const et = (0, dt.c)(tt),
          Vt = this.bannerPlacementByBloxdId.get(et);
        void 0 !== Vt && (this.bannerPlacementByBloxdId.delete(et), this.bannerFirstResponseSeen.delete(Vt), console.log(`AD ${et}: AdMob clearBanner placementId=${Vt}`), Dt.c.emit("ads.hideBanner", {
          placementId: Vt
        }))
      }
      canShowBloxdAd(tt) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);