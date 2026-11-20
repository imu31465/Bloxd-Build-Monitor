export const id = 145;
export const ids = [145];
export const modules = {
  7634: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AdMobSdkAdaptor: () => Kz
    });
    var Fz = sz(1291),
      Wz = sz(30),
      Xz = sz(1636),
      Oz = sz(133),
      oz = sz(3137),
      vz = sz(321);
    const Uz = {
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
    class Kz extends Fz.d {
      constructor(zz) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Uz[zz], Xz.c.on("ads.bannerStatus", (zz => {
          let {
            placementId: tz,
            shown: sz,
            error: Fz
          } = zz;
          const Wz = !this.bannerFirstResponseSeen.has(tz);
          this.bannerFirstResponseSeen.add(tz), Wz ? sz ? console.log(`AD ${tz}: AdMob banner loaded`) : console.warn(`AD ${tz}: AdMob banner failed to load: ${Fz}`) : sz || console.warn(`AD ${tz}: AdMob banner refresh failed: ${Fz}`)
        }))
      }
      static async setup() {
        const zz = "mobileIos" === Oz.t ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${zz}`), new Kz(zz)
      }
      muteGameDuring(zz) {
        return this.fullScreenAdsInFlight++, Wz.b.set({
          soundOnFromAd: !1
        }), zz.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Wz.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(zz, tz) {
        const sz = this.adUnitIds.rewarded;
        this.muteGameDuring(Xz.c.request("ads.showRewarded", {
          placementId: sz
        })).then((sz => {
          let {
            rewarded: Fz
          } = sz;
          Fz ? zz() : tz()
        }), (zz => {
          console.warn(`AD ${sz}: AdMob rewarded failed:`, zz), tz()
        }))
      }
      playVideoAd(zz, tz) {
        const sz = this.adUnitIds.interstitial;
        this.muteGameDuring(Xz.c.request("ads.showInterstitial", {
          placementId: sz
        })).then((() => {
          zz()
        }), (tz => {
          console.warn(`AD ${sz}: AdMob interstitial failed:`, tz), zz()
        }))
      }
      renderBanner(zz) {
        const tz = (0, oz.c)(zz),
          sz = this.adUnitIds.banners[tz];
        if (void 0 === sz) return;
        const Fz = document.getElementById(zz.divId);
        if (!Fz) return void console.warn(`AD ${tz}: AdMob renderBanner called but div ${zz.divId} is not in DOM`);
        const Wz = Fz.getBoundingClientRect(),
          Oz = window.innerWidth,
          Uz = window.innerHeight;
        if (0 === Oz || 0 === Uz) return void console.warn(`AD ${tz}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Kz = {
          x1: vz.c.clamp(Wz.left / Oz * 100, 0, 100),
          y1: vz.c.clamp(Wz.top / Uz * 100, 0, 100),
          x2: vz.c.clamp(Wz.right / Oz * 100, 0, 100),
          y2: vz.c.clamp(Wz.bottom / Uz * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(tz, sz), console.log(`AD ${tz}: AdMob renderBanner placementId=${sz} box=`, Kz), Xz.c.emit("ads.showBanner", {
          placementId: sz,
          ...Kz
        })
      }
      clearBanner(zz) {
        const tz = (0, oz.c)(zz),
          sz = this.bannerPlacementByBloxdId.get(tz);
        void 0 !== sz && (this.bannerPlacementByBloxdId.delete(tz), this.bannerFirstResponseSeen.delete(sz), console.log(`AD ${tz}: AdMob clearBanner placementId=${sz}`), Xz.c.emit("ads.hideBanner", {
          placementId: sz
        }))
      }
      canShowBloxdAd(zz) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);