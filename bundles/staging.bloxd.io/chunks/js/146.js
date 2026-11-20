export const id = 146;
export const ids = [146];
export const modules = {
  7795: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AdMobSdkAdaptor: () => ab
    });
    var Bb = hb(1211),
      Ob = hb(13),
      Gb = hb(1593),
      Ub = hb(115),
      Lb = hb(3253),
      Yb = hb(314);
    const Sb = {
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
    class ab extends Bb.b {
      constructor(bb) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Sb[bb], Gb.e.on("ads.bannerStatus", (bb => {
          let {
            placementId: ub,
            shown: hb,
            error: Bb
          } = bb;
          const Ob = !this.bannerFirstResponseSeen.has(ub);
          this.bannerFirstResponseSeen.add(ub), Ob ? hb ? console.log(`AD ${ub}: AdMob banner loaded`) : console.warn(`AD ${ub}: AdMob banner failed to load: ${Bb}`) : hb || console.warn(`AD ${ub}: AdMob banner refresh failed: ${Bb}`)
        }))
      }
      static async setup() {
        const bb = "mobileIos" === Ub.s ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${bb}`), new ab(bb)
      }
      muteGameDuring(bb) {
        return this.fullScreenAdsInFlight++, Ob.d.set({
          soundOnFromAd: !1
        }), bb.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Ob.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(bb, ub) {
        const hb = this.adUnitIds.rewarded;
        this.muteGameDuring(Gb.e.request("ads.showRewarded", {
          placementId: hb
        })).then((hb => {
          let {
            rewarded: Bb
          } = hb;
          Bb ? bb() : ub()
        }), (bb => {
          console.warn(`AD ${hb}: AdMob rewarded failed:`, bb), ub()
        }))
      }
      playVideoAd(bb, ub) {
        const hb = this.adUnitIds.interstitial;
        this.muteGameDuring(Gb.e.request("ads.showInterstitial", {
          placementId: hb
        })).then((() => {
          bb()
        }), (ub => {
          console.warn(`AD ${hb}: AdMob interstitial failed:`, ub), bb()
        }))
      }
      renderBanner(bb) {
        const ub = (0, Lb.e)(bb),
          hb = this.adUnitIds.banners[ub];
        if (void 0 === hb) return;
        const Bb = document.getElementById(bb.divId);
        if (!Bb) return void console.warn(`AD ${ub}: AdMob renderBanner called but div ${bb.divId} is not in DOM`);
        const Ob = Bb.getBoundingClientRect(),
          Ub = window.innerWidth,
          Sb = window.innerHeight;
        if (0 === Ub || 0 === Sb) return void console.warn(`AD ${ub}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const ab = {
          x1: Yb.d.clamp(Ob.left / Ub * 100, 0, 100),
          y1: Yb.d.clamp(Ob.top / Sb * 100, 0, 100),
          x2: Yb.d.clamp(Ob.right / Ub * 100, 0, 100),
          y2: Yb.d.clamp(Ob.bottom / Sb * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(ub, hb), console.log(`AD ${ub}: AdMob renderBanner placementId=${hb} box=`, ab), Gb.e.emit("ads.showBanner", {
          placementId: hb,
          ...ab
        })
      }
      clearBanner(bb) {
        const ub = (0, Lb.e)(bb),
          hb = this.bannerPlacementByBloxdId.get(ub);
        void 0 !== hb && (this.bannerPlacementByBloxdId.delete(ub), this.bannerFirstResponseSeen.delete(hb), console.log(`AD ${ub}: AdMob clearBanner placementId=${hb}`), Gb.e.emit("ads.hideBanner", {
          placementId: hb
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