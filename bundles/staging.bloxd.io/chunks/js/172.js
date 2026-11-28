export const id = 172;
export const ids = [172];
export const modules = {
  7671: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AdMobSdkAdaptor: () => td
    });
    var Wd = md(1410),
      Fd = md(29),
      Rd = md(1822),
      Xd = md(151),
      Kd = md(4708),
      hd = md(405),
      vd = md(1866);
    const Qd = {
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
    class td extends Wd.b {
      constructor(dd) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Qd[dd], Rd.c.on("ads.bannerStatus", (dd => {
          let {
            placementId: Od,
            shown: md,
            error: Wd
          } = dd;
          const Fd = !this.bannerFirstResponseSeen.has(Od);
          this.bannerFirstResponseSeen.add(Od), Fd ? ((0, vd.k)(md), md ? console.log(`AD ${Od}: AdMob banner loaded`) : console.warn(`AD ${Od}: AdMob banner failed to load: ${Wd}`)) : md || console.warn(`AD ${Od}: AdMob banner refresh failed: ${Wd}`)
        }))
      }
      static async setup() {
        const dd = "mobileIos" === Xd.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${dd}`), new td(dd)
      }
      muteGameDuring(dd) {
        return this.fullScreenAdsInFlight++, Fd.e.set({
          soundOnFromAd: !1
        }), dd.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Fd.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(dd, Od) {
        const md = this.adUnitIds.rewarded;
        this.muteGameDuring(Rd.c.request("ads.showRewarded", {
          placementId: md
        })).then((md => {
          let {
            rewarded: Wd
          } = md;
          Wd ? dd() : Od()
        }), (dd => {
          console.warn(`AD ${md}: AdMob rewarded failed:`, dd), Od()
        }))
      }
      playVideoAd(dd, Od) {
        const md = this.adUnitIds.interstitial;
        this.muteGameDuring(Rd.c.request("ads.showInterstitial", {
          placementId: md
        })).then((() => {
          dd()
        }), (Od => {
          console.warn(`AD ${md}: AdMob interstitial failed:`, Od), dd()
        }))
      }
      renderBanner(dd) {
        const Od = (0, Kd.c)(dd),
          md = this.adUnitIds.banners[Od];
        if (void 0 === md) return;
        const Wd = document.getElementById(dd.divId);
        if (!Wd) return void console.warn(`AD ${Od}: AdMob renderBanner called but div ${dd.divId} is not in DOM`);
        const Fd = Wd.getBoundingClientRect(),
          Xd = window.innerWidth,
          Qd = window.innerHeight;
        if (0 === Xd || 0 === Qd) return void console.warn(`AD ${Od}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const td = {
          x1: hd.b.clamp(Fd.left / Xd * 100, 0, 100),
          y1: hd.b.clamp(Fd.top / Qd * 100, 0, 100),
          x2: hd.b.clamp(Fd.right / Xd * 100, 0, 100),
          y2: hd.b.clamp(Fd.bottom / Qd * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Od, md), console.log(`AD ${Od}: AdMob renderBanner placementId=${md} box=`, td), (0, vd.h)("site_sdk"), Rd.c.emit("ads.showBanner", {
          placementId: md,
          ...td
        })
      }
      clearBanner(dd) {
        const Od = (0, Kd.c)(dd),
          md = this.bannerPlacementByBloxdId.get(Od);
        void 0 !== md && (this.bannerPlacementByBloxdId.delete(Od), this.bannerFirstResponseSeen.delete(md), console.log(`AD ${Od}: AdMob clearBanner placementId=${md}`), Rd.c.emit("ads.hideBanner", {
          placementId: md
        }))
      }
      canShowBloxdAd(dd) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);