export const id = 145;
export const ids = [145];
export const modules = {
  7822: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AdMobSdkAdaptor: () => lv
    });
    var hv = Pv(1299),
      Sv = Pv(22),
      ev = Pv(1657),
      gv = Pv(108),
      pv = Pv(3209),
      dv = Pv(312);
    const Nv = {
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
    class lv extends hv.c {
      constructor(vv) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Nv[vv], ev.d.on("ads.bannerStatus", (vv => {
          let {
            placementId: zv,
            shown: Pv,
            error: hv
          } = vv;
          const Sv = !this.bannerFirstResponseSeen.has(zv);
          this.bannerFirstResponseSeen.add(zv), Sv ? Pv ? console.log(`AD ${zv}: AdMob banner loaded`) : console.warn(`AD ${zv}: AdMob banner failed to load: ${hv}`) : Pv || console.warn(`AD ${zv}: AdMob banner refresh failed: ${hv}`)
        }))
      }
      static async setup() {
        const vv = "mobileIos" === gv.o ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${vv}`), new lv(vv)
      }
      muteGameDuring(vv) {
        return this.fullScreenAdsInFlight++, Sv.c.set({
          soundOnFromAd: !1
        }), vv.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Sv.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(vv, zv) {
        const Pv = this.adUnitIds.rewarded;
        this.muteGameDuring(ev.d.request("ads.showRewarded", {
          placementId: Pv
        })).then((Pv => {
          let {
            rewarded: hv
          } = Pv;
          hv ? vv() : zv()
        }), (vv => {
          console.warn(`AD ${Pv}: AdMob rewarded failed:`, vv), zv()
        }))
      }
      playVideoAd(vv, zv) {
        const Pv = this.adUnitIds.interstitial;
        this.muteGameDuring(ev.d.request("ads.showInterstitial", {
          placementId: Pv
        })).then((() => {
          vv()
        }), (zv => {
          console.warn(`AD ${Pv}: AdMob interstitial failed:`, zv), vv()
        }))
      }
      renderBanner(vv) {
        const zv = (0, pv.e)(vv),
          Pv = this.adUnitIds.banners[zv];
        if (void 0 === Pv) return;
        const hv = document.getElementById(vv.divId);
        if (!hv) return void console.warn(`AD ${zv}: AdMob renderBanner called but div ${vv.divId} is not in DOM`);
        const Sv = hv.getBoundingClientRect(),
          gv = window.innerWidth,
          Nv = window.innerHeight;
        if (0 === gv || 0 === Nv) return void console.warn(`AD ${zv}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const lv = {
          x1: dv.d.clamp(Sv.left / gv * 100, 0, 100),
          y1: dv.d.clamp(Sv.top / Nv * 100, 0, 100),
          x2: dv.d.clamp(Sv.right / gv * 100, 0, 100),
          y2: dv.d.clamp(Sv.bottom / Nv * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(zv, Pv), console.log(`AD ${zv}: AdMob renderBanner placementId=${Pv} box=`, lv), ev.d.emit("ads.showBanner", {
          placementId: Pv,
          ...lv
        })
      }
      clearBanner(vv) {
        const zv = (0, pv.e)(vv),
          Pv = this.bannerPlacementByBloxdId.get(zv);
        void 0 !== Pv && (this.bannerPlacementByBloxdId.delete(zv), this.bannerFirstResponseSeen.delete(Pv), console.log(`AD ${zv}: AdMob clearBanner placementId=${Pv}`), ev.d.emit("ads.hideBanner", {
          placementId: Pv
        }))
      }
      canShowBloxdAd(vv) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);