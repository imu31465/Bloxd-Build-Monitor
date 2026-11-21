export const id = 146;
export const ids = [146];
export const modules = {
  7983: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AdMobSdkAdaptor: () => Kd
    });
    var pd = kd(1341),
      Nd = kd(22),
      Wd = kd(1726),
      Pd = kd(126),
      Zd = kd(3300),
      gd = kd(313);
    const Cd = {
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
    class Kd extends pd.d {
      constructor(dd) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Cd[dd], Wd.e.on("ads.bannerStatus", (dd => {
          let {
            placementId: Jd,
            shown: kd,
            error: pd
          } = dd;
          const Nd = !this.bannerFirstResponseSeen.has(Jd);
          this.bannerFirstResponseSeen.add(Jd), Nd ? kd ? console.log(`AD ${Jd}: AdMob banner loaded`) : console.warn(`AD ${Jd}: AdMob banner failed to load: ${pd}`) : kd || console.warn(`AD ${Jd}: AdMob banner refresh failed: ${pd}`)
        }))
      }
      static async setup() {
        const dd = "mobileIos" === Pd.t ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${dd}`), new Kd(dd)
      }
      muteGameDuring(dd) {
        return this.fullScreenAdsInFlight++, Nd.d.set({
          soundOnFromAd: !1
        }), dd.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Nd.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(dd, Jd) {
        const kd = this.adUnitIds.rewarded;
        this.muteGameDuring(Wd.e.request("ads.showRewarded", {
          placementId: kd
        })).then((kd => {
          let {
            rewarded: pd
          } = kd;
          pd ? dd() : Jd()
        }), (dd => {
          console.warn(`AD ${kd}: AdMob rewarded failed:`, dd), Jd()
        }))
      }
      playVideoAd(dd, Jd) {
        const kd = this.adUnitIds.interstitial;
        this.muteGameDuring(Wd.e.request("ads.showInterstitial", {
          placementId: kd
        })).then((() => {
          dd()
        }), (Jd => {
          console.warn(`AD ${kd}: AdMob interstitial failed:`, Jd), dd()
        }))
      }
      renderBanner(dd) {
        const Jd = (0, Zd.c)(dd),
          kd = this.adUnitIds.banners[Jd];
        if (void 0 === kd) return;
        const pd = document.getElementById(dd.divId);
        if (!pd) return void console.warn(`AD ${Jd}: AdMob renderBanner called but div ${dd.divId} is not in DOM`);
        const Nd = pd.getBoundingClientRect(),
          Pd = window.innerWidth,
          Cd = window.innerHeight;
        if (0 === Pd || 0 === Cd) return void console.warn(`AD ${Jd}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Kd = {
          x1: gd.b.clamp(Nd.left / Pd * 100, 0, 100),
          y1: gd.b.clamp(Nd.top / Cd * 100, 0, 100),
          x2: gd.b.clamp(Nd.right / Pd * 100, 0, 100),
          y2: gd.b.clamp(Nd.bottom / Cd * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Jd, kd), console.log(`AD ${Jd}: AdMob renderBanner placementId=${kd} box=`, Kd), Wd.e.emit("ads.showBanner", {
          placementId: kd,
          ...Kd
        })
      }
      clearBanner(dd) {
        const Jd = (0, Zd.c)(dd),
          kd = this.bannerPlacementByBloxdId.get(Jd);
        void 0 !== kd && (this.bannerPlacementByBloxdId.delete(Jd), this.bannerFirstResponseSeen.delete(kd), console.log(`AD ${Jd}: AdMob clearBanner placementId=${kd}`), Wd.e.emit("ads.hideBanner", {
          placementId: kd
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