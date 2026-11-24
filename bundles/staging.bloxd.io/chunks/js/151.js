export const id = 151;
export const ids = [151];
export const modules = {
  8106: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AdMobSdkAdaptor: () => Lk
    });
    var Xk = Ik(1295),
      Tk = Ik(25),
      ik = Ik(1631),
      yk = Ik(129),
      lk = Ik(3407),
      ak = Ik(337);
    const qk = {
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
    class Lk extends Xk.d {
      constructor(kk) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = qk[kk], ik.b.on("ads.bannerStatus", (kk => {
          let {
            placementId: Fk,
            shown: Ik,
            error: Xk
          } = kk;
          const Tk = !this.bannerFirstResponseSeen.has(Fk);
          this.bannerFirstResponseSeen.add(Fk), Tk ? Ik ? console.log(`AD ${Fk}: AdMob banner loaded`) : console.warn(`AD ${Fk}: AdMob banner failed to load: ${Xk}`) : Ik || console.warn(`AD ${Fk}: AdMob banner refresh failed: ${Xk}`)
        }))
      }
      static async setup() {
        const kk = "mobileIos" === yk.v ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${kk}`), new Lk(kk)
      }
      muteGameDuring(kk) {
        return this.fullScreenAdsInFlight++, Tk.d.set({
          soundOnFromAd: !1
        }), kk.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Tk.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(kk, Fk) {
        const Ik = this.adUnitIds.rewarded;
        this.muteGameDuring(ik.b.request("ads.showRewarded", {
          placementId: Ik
        })).then((Ik => {
          let {
            rewarded: Xk
          } = Ik;
          Xk ? kk() : Fk()
        }), (kk => {
          console.warn(`AD ${Ik}: AdMob rewarded failed:`, kk), Fk()
        }))
      }
      playVideoAd(kk, Fk) {
        const Ik = this.adUnitIds.interstitial;
        this.muteGameDuring(ik.b.request("ads.showInterstitial", {
          placementId: Ik
        })).then((() => {
          kk()
        }), (Fk => {
          console.warn(`AD ${Ik}: AdMob interstitial failed:`, Fk), kk()
        }))
      }
      renderBanner(kk) {
        const Fk = (0, lk.b)(kk),
          Ik = this.adUnitIds.banners[Fk];
        if (void 0 === Ik) return;
        const Xk = document.getElementById(kk.divId);
        if (!Xk) return void console.warn(`AD ${Fk}: AdMob renderBanner called but div ${kk.divId} is not in DOM`);
        const Tk = Xk.getBoundingClientRect(),
          yk = window.innerWidth,
          qk = window.innerHeight;
        if (0 === yk || 0 === qk) return void console.warn(`AD ${Fk}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Lk = {
          x1: ak.e.clamp(Tk.left / yk * 100, 0, 100),
          y1: ak.e.clamp(Tk.top / qk * 100, 0, 100),
          x2: ak.e.clamp(Tk.right / yk * 100, 0, 100),
          y2: ak.e.clamp(Tk.bottom / qk * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Fk, Ik), console.log(`AD ${Fk}: AdMob renderBanner placementId=${Ik} box=`, Lk), ik.b.emit("ads.showBanner", {
          placementId: Ik,
          ...Lk
        })
      }
      clearBanner(kk) {
        const Fk = (0, lk.b)(kk),
          Ik = this.bannerPlacementByBloxdId.get(Fk);
        void 0 !== Ik && (this.bannerPlacementByBloxdId.delete(Fk), this.bannerFirstResponseSeen.delete(Ik), console.log(`AD ${Fk}: AdMob clearBanner placementId=${Ik}`), ik.b.emit("ads.hideBanner", {
          placementId: Ik
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