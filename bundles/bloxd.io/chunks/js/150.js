export const id = 150;
export const ids = [150];
export const modules = {
  7935: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AdMobSdkAdaptor: () => Mk
    });
    var Dk = ik(1298),
      fk = ik(22),
      Sk = ik(1659),
      bk = ik(131),
      rk = ik(3430),
      Pk = ik(314);
    const mk = {
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
    class Mk extends Dk.e {
      constructor(kk) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = mk[kk], Sk.b.on("ads.bannerStatus", (kk => {
          let {
            placementId: ek,
            shown: ik,
            error: Dk
          } = kk;
          const fk = !this.bannerFirstResponseSeen.has(ek);
          this.bannerFirstResponseSeen.add(ek), fk ? ik ? console.log(`AD ${ek}: AdMob banner loaded`) : console.warn(`AD ${ek}: AdMob banner failed to load: ${Dk}`) : ik || console.warn(`AD ${ek}: AdMob banner refresh failed: ${Dk}`)
        }))
      }
      static async setup() {
        const kk = "mobileIos" === bk.t ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${kk}`), new Mk(kk)
      }
      muteGameDuring(kk) {
        return this.fullScreenAdsInFlight++, fk.b.set({
          soundOnFromAd: !1
        }), kk.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && fk.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(kk, ek) {
        const ik = this.adUnitIds.rewarded;
        this.muteGameDuring(Sk.b.request("ads.showRewarded", {
          placementId: ik
        })).then((ik => {
          let {
            rewarded: Dk
          } = ik;
          Dk ? kk() : ek()
        }), (kk => {
          console.warn(`AD ${ik}: AdMob rewarded failed:`, kk), ek()
        }))
      }
      playVideoAd(kk, ek) {
        const ik = this.adUnitIds.interstitial;
        this.muteGameDuring(Sk.b.request("ads.showInterstitial", {
          placementId: ik
        })).then((() => {
          kk()
        }), (ek => {
          console.warn(`AD ${ik}: AdMob interstitial failed:`, ek), kk()
        }))
      }
      renderBanner(kk) {
        const ek = (0, rk.d)(kk),
          ik = this.adUnitIds.banners[ek];
        if (void 0 === ik) return;
        const Dk = document.getElementById(kk.divId);
        if (!Dk) return void console.warn(`AD ${ek}: AdMob renderBanner called but div ${kk.divId} is not in DOM`);
        const fk = Dk.getBoundingClientRect(),
          bk = window.innerWidth,
          mk = window.innerHeight;
        if (0 === bk || 0 === mk) return void console.warn(`AD ${ek}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Mk = {
          x1: Pk.c.clamp(fk.left / bk * 100, 0, 100),
          y1: Pk.c.clamp(fk.top / mk * 100, 0, 100),
          x2: Pk.c.clamp(fk.right / bk * 100, 0, 100),
          y2: Pk.c.clamp(fk.bottom / mk * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(ek, ik), console.log(`AD ${ek}: AdMob renderBanner placementId=${ik} box=`, Mk), Sk.b.emit("ads.showBanner", {
          placementId: ik,
          ...Mk
        })
      }
      clearBanner(kk) {
        const ek = (0, rk.d)(kk),
          ik = this.bannerPlacementByBloxdId.get(ek);
        void 0 !== ik && (this.bannerPlacementByBloxdId.delete(ek), this.bannerFirstResponseSeen.delete(ik), console.log(`AD ${ek}: AdMob clearBanner placementId=${ik}`), Sk.b.emit("ads.hideBanner", {
          placementId: ik
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