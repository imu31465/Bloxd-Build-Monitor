export const id = 145;
export const ids = [145];
export const modules = {
  7776: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AdMobSdkAdaptor: () => sk
    });
    var Rk = Bk(1262),
      tk = Bk(22),
      ak = Bk(1625),
      Xk = Bk(132),
      bk = Bk(3265),
      wk = Bk(291);
    const dk = {
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
    class sk extends Rk.d {
      constructor(kk) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = dk[kk], ak.d.on("ads.bannerStatus", (kk => {
          let {
            placementId: Fk,
            shown: Bk,
            error: Rk
          } = kk;
          const tk = !this.bannerFirstResponseSeen.has(Fk);
          this.bannerFirstResponseSeen.add(Fk), tk ? Bk ? console.log(`AD ${Fk}: AdMob banner loaded`) : console.warn(`AD ${Fk}: AdMob banner failed to load: ${Rk}`) : Bk || console.warn(`AD ${Fk}: AdMob banner refresh failed: ${Rk}`)
        }))
      }
      static async setup() {
        const kk = "mobileIos" === Xk.q ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${kk}`), new sk(kk)
      }
      muteGameDuring(kk) {
        return this.fullScreenAdsInFlight++, tk.c.set({
          soundOnFromAd: !1
        }), kk.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && tk.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(kk, Fk) {
        const Bk = this.adUnitIds.rewarded;
        this.muteGameDuring(ak.d.request("ads.showRewarded", {
          placementId: Bk
        })).then((Bk => {
          let {
            rewarded: Rk
          } = Bk;
          Rk ? kk() : Fk()
        }), (kk => {
          console.warn(`AD ${Bk}: AdMob rewarded failed:`, kk), Fk()
        }))
      }
      playVideoAd(kk, Fk) {
        const Bk = this.adUnitIds.interstitial;
        this.muteGameDuring(ak.d.request("ads.showInterstitial", {
          placementId: Bk
        })).then((() => {
          kk()
        }), (Fk => {
          console.warn(`AD ${Bk}: AdMob interstitial failed:`, Fk), kk()
        }))
      }
      renderBanner(kk) {
        const Fk = (0, bk.d)(kk),
          Bk = this.adUnitIds.banners[Fk];
        if (void 0 === Bk) return;
        const Rk = document.getElementById(kk.divId);
        if (!Rk) return void console.warn(`AD ${Fk}: AdMob renderBanner called but div ${kk.divId} is not in DOM`);
        const tk = Rk.getBoundingClientRect(),
          Xk = window.innerWidth,
          dk = window.innerHeight;
        if (0 === Xk || 0 === dk) return void console.warn(`AD ${Fk}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const sk = {
          x1: wk.b.clamp(tk.left / Xk * 100, 0, 100),
          y1: wk.b.clamp(tk.top / dk * 100, 0, 100),
          x2: wk.b.clamp(tk.right / Xk * 100, 0, 100),
          y2: wk.b.clamp(tk.bottom / dk * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Fk, Bk), console.log(`AD ${Fk}: AdMob renderBanner placementId=${Bk} box=`, sk), ak.d.emit("ads.showBanner", {
          placementId: Bk,
          ...sk
        })
      }
      clearBanner(kk) {
        const Fk = (0, bk.d)(kk),
          Bk = this.bannerPlacementByBloxdId.get(Fk);
        void 0 !== Bk && (this.bannerPlacementByBloxdId.delete(Fk), this.bannerFirstResponseSeen.delete(Bk), console.log(`AD ${Fk}: AdMob clearBanner placementId=${Bk}`), ak.d.emit("ads.hideBanner", {
          placementId: Bk
        }))
      }
      canShowBloxdAd(kk) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);