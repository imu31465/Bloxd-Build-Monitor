export const id = 145;
export const ids = [145];
export const modules = {
  7799: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AdMobSdkAdaptor: () => Oz
    });
    var Ez = bz(1288),
      nz = bz(20),
      iz = bz(1638),
      lz = bz(128),
      Mz = bz(3210),
      tz = bz(328);
    const Hz = {
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
    class Oz extends Ez.b {
      constructor(zz) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Hz[zz], iz.d.on("ads.bannerStatus", (zz => {
          let {
            placementId: uz,
            shown: bz,
            error: Ez
          } = zz;
          const nz = !this.bannerFirstResponseSeen.has(uz);
          this.bannerFirstResponseSeen.add(uz), nz ? bz ? console.log(`AD ${uz}: AdMob banner loaded`) : console.warn(`AD ${uz}: AdMob banner failed to load: ${Ez}`) : bz || console.warn(`AD ${uz}: AdMob banner refresh failed: ${Ez}`)
        }))
      }
      static async setup() {
        const zz = "mobileIos" === lz.x ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${zz}`), new Oz(zz)
      }
      muteGameDuring(zz) {
        return this.fullScreenAdsInFlight++, nz.e.set({
          soundOnFromAd: !1
        }), zz.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && nz.e.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(zz, uz) {
        const bz = this.adUnitIds.rewarded;
        this.muteGameDuring(iz.d.request("ads.showRewarded", {
          placementId: bz
        })).then((bz => {
          let {
            rewarded: Ez
          } = bz;
          Ez ? zz() : uz()
        }), (zz => {
          console.warn(`AD ${bz}: AdMob rewarded failed:`, zz), uz()
        }))
      }
      playVideoAd(zz, uz) {
        const bz = this.adUnitIds.interstitial;
        this.muteGameDuring(iz.d.request("ads.showInterstitial", {
          placementId: bz
        })).then((() => {
          zz()
        }), (uz => {
          console.warn(`AD ${bz}: AdMob interstitial failed:`, uz), zz()
        }))
      }
      renderBanner(zz) {
        const uz = (0, Mz.c)(zz),
          bz = this.adUnitIds.banners[uz];
        if (void 0 === bz) return;
        const Ez = document.getElementById(zz.divId);
        if (!Ez) return void console.warn(`AD ${uz}: AdMob renderBanner called but div ${zz.divId} is not in DOM`);
        const nz = Ez.getBoundingClientRect(),
          lz = window.innerWidth,
          Hz = window.innerHeight;
        if (0 === lz || 0 === Hz) return void console.warn(`AD ${uz}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Oz = {
          x1: tz.d.clamp(nz.left / lz * 100, 0, 100),
          y1: tz.d.clamp(nz.top / Hz * 100, 0, 100),
          x2: tz.d.clamp(nz.right / lz * 100, 0, 100),
          y2: tz.d.clamp(nz.bottom / Hz * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(uz, bz), console.log(`AD ${uz}: AdMob renderBanner placementId=${bz} box=`, Oz), iz.d.emit("ads.showBanner", {
          placementId: bz,
          ...Oz
        })
      }
      clearBanner(zz) {
        const uz = (0, Mz.c)(zz),
          bz = this.bannerPlacementByBloxdId.get(uz);
        void 0 !== bz && (this.bannerPlacementByBloxdId.delete(uz), this.bannerFirstResponseSeen.delete(bz), console.log(`AD ${uz}: AdMob clearBanner placementId=${bz}`), iz.d.emit("ads.hideBanner", {
          placementId: bz
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