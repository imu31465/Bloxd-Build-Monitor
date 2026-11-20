export const id = 145;
export const ids = [145];
export const modules = {
  7704: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AdMobSdkAdaptor: () => vb
    });
    var Ab = Ub(1240),
      Mb = Ub(19),
      Tb = Ub(1605),
      Eb = Ub(137),
      Yb = Ub(3142),
      Bb = Ub(325);
    const eb = {
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
    class vb extends Ab.d {
      constructor(bb) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = eb[bb], Tb.d.on("ads.bannerStatus", (bb => {
          let {
            placementId: ab,
            shown: Ub,
            error: Ab
          } = bb;
          const Mb = !this.bannerFirstResponseSeen.has(ab);
          this.bannerFirstResponseSeen.add(ab), Mb ? Ub ? console.log(`AD ${ab}: AdMob banner loaded`) : console.warn(`AD ${ab}: AdMob banner failed to load: ${Ab}`) : Ub || console.warn(`AD ${ab}: AdMob banner refresh failed: ${Ab}`)
        }))
      }
      static async setup() {
        const bb = "mobileIos" === Eb.p ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${bb}`), new vb(bb)
      }
      muteGameDuring(bb) {
        return this.fullScreenAdsInFlight++, Mb.c.set({
          soundOnFromAd: !1
        }), bb.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Mb.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(bb, ab) {
        const Ub = this.adUnitIds.rewarded;
        this.muteGameDuring(Tb.d.request("ads.showRewarded", {
          placementId: Ub
        })).then((Ub => {
          let {
            rewarded: Ab
          } = Ub;
          Ab ? bb() : ab()
        }), (bb => {
          console.warn(`AD ${Ub}: AdMob rewarded failed:`, bb), ab()
        }))
      }
      playVideoAd(bb, ab) {
        const Ub = this.adUnitIds.interstitial;
        this.muteGameDuring(Tb.d.request("ads.showInterstitial", {
          placementId: Ub
        })).then((() => {
          bb()
        }), (ab => {
          console.warn(`AD ${Ub}: AdMob interstitial failed:`, ab), bb()
        }))
      }
      renderBanner(bb) {
        const ab = (0, Yb.d)(bb),
          Ub = this.adUnitIds.banners[ab];
        if (void 0 === Ub) return;
        const Ab = document.getElementById(bb.divId);
        if (!Ab) return void console.warn(`AD ${ab}: AdMob renderBanner called but div ${bb.divId} is not in DOM`);
        const Mb = Ab.getBoundingClientRect(),
          Eb = window.innerWidth,
          eb = window.innerHeight;
        if (0 === Eb || 0 === eb) return void console.warn(`AD ${ab}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const vb = {
          x1: Bb.d.clamp(Mb.left / Eb * 100, 0, 100),
          y1: Bb.d.clamp(Mb.top / eb * 100, 0, 100),
          x2: Bb.d.clamp(Mb.right / Eb * 100, 0, 100),
          y2: Bb.d.clamp(Mb.bottom / eb * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(ab, Ub), console.log(`AD ${ab}: AdMob renderBanner placementId=${Ub} box=`, vb), Tb.d.emit("ads.showBanner", {
          placementId: Ub,
          ...vb
        })
      }
      clearBanner(bb) {
        const ab = (0, Yb.d)(bb),
          Ub = this.bannerPlacementByBloxdId.get(ab);
        void 0 !== Ub && (this.bannerPlacementByBloxdId.delete(ab), this.bannerFirstResponseSeen.delete(Ub), console.log(`AD ${ab}: AdMob clearBanner placementId=${Ub}`), Tb.d.emit("ads.hideBanner", {
          placementId: Ub
        }))
      }
      canShowBloxdAd(bb) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);