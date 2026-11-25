export const id = 153;
export const ids = [153];
export const modules = {
  8343: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AdMobSdkAdaptor: () => Cu
    });
    var su = ju(1364),
      Uu = ju(22),
      Zu = ju(1735),
      Xu = ju(131),
      lu = ju(3660),
      qu = ju(349);
    const fu = {
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
    class Cu extends su.b {
      constructor(uu) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = fu[uu], Zu.d.on("ads.bannerStatus", (uu => {
          let {
            placementId: Eu,
            shown: ju,
            error: su
          } = uu;
          const Uu = !this.bannerFirstResponseSeen.has(Eu);
          this.bannerFirstResponseSeen.add(Eu), Uu ? ju ? console.log(`AD ${Eu}: AdMob banner loaded`) : console.warn(`AD ${Eu}: AdMob banner failed to load: ${su}`) : ju || console.warn(`AD ${Eu}: AdMob banner refresh failed: ${su}`)
        }))
      }
      static async setup() {
        const uu = "mobileIos" === Xu.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${uu}`), new Cu(uu)
      }
      muteGameDuring(uu) {
        return this.fullScreenAdsInFlight++, Uu.d.set({
          soundOnFromAd: !1
        }), uu.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Uu.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(uu, Eu) {
        const ju = this.adUnitIds.rewarded;
        this.muteGameDuring(Zu.d.request("ads.showRewarded", {
          placementId: ju
        })).then((ju => {
          let {
            rewarded: su
          } = ju;
          su ? uu() : Eu()
        }), (uu => {
          console.warn(`AD ${ju}: AdMob rewarded failed:`, uu), Eu()
        }))
      }
      playVideoAd(uu, Eu) {
        const ju = this.adUnitIds.interstitial;
        this.muteGameDuring(Zu.d.request("ads.showInterstitial", {
          placementId: ju
        })).then((() => {
          uu()
        }), (Eu => {
          console.warn(`AD ${ju}: AdMob interstitial failed:`, Eu), uu()
        }))
      }
      renderBanner(uu) {
        const Eu = (0, lu.c)(uu),
          ju = this.adUnitIds.banners[Eu];
        if (void 0 === ju) return;
        const su = document.getElementById(uu.divId);
        if (!su) return void console.warn(`AD ${Eu}: AdMob renderBanner called but div ${uu.divId} is not in DOM`);
        const Uu = su.getBoundingClientRect(),
          Xu = window.innerWidth,
          fu = window.innerHeight;
        if (0 === Xu || 0 === fu) return void console.warn(`AD ${Eu}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Cu = {
          x1: qu.b.clamp(Uu.left / Xu * 100, 0, 100),
          y1: qu.b.clamp(Uu.top / fu * 100, 0, 100),
          x2: qu.b.clamp(Uu.right / Xu * 100, 0, 100),
          y2: qu.b.clamp(Uu.bottom / fu * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Eu, ju), console.log(`AD ${Eu}: AdMob renderBanner placementId=${ju} box=`, Cu), Zu.d.emit("ads.showBanner", {
          placementId: ju,
          ...Cu
        })
      }
      clearBanner(uu) {
        const Eu = (0, lu.c)(uu),
          ju = this.bannerPlacementByBloxdId.get(Eu);
        void 0 !== ju && (this.bannerPlacementByBloxdId.delete(Eu), this.bannerFirstResponseSeen.delete(ju), console.log(`AD ${Eu}: AdMob clearBanner placementId=${ju}`), Zu.d.emit("ads.hideBanner", {
          placementId: ju
        }))
      }
      canShowBloxdAd(uu) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);