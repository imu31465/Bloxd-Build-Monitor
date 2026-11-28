export const id = 172;
export const ids = [172];
export const modules = {
  7937: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AdMobSdkAdaptor: () => Ob
    });
    var eb = Mb(1440),
      Hb = Mb(26),
      pb = Mb(1889),
      Vb = Mb(160),
      gb = Mb(4879),
      lb = Mb(382),
      Lb = Mb(1946);
    const Ib = {
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
    class Ob extends eb.b {
      constructor(bb) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Ib[bb], pb.e.on("ads.bannerStatus", (bb => {
          let {
            placementId: wb,
            shown: Mb,
            error: eb
          } = bb;
          const Hb = !this.bannerFirstResponseSeen.has(wb);
          this.bannerFirstResponseSeen.add(wb), Hb ? ((0, Lb.l)(Mb), Mb ? console.log(`AD ${wb}: AdMob banner loaded`) : console.warn(`AD ${wb}: AdMob banner failed to load: ${eb}`)) : Mb || console.warn(`AD ${wb}: AdMob banner refresh failed: ${eb}`)
        }))
      }
      static async setup() {
        const bb = "mobileIos" === Vb.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${bb}`), new Ob(bb)
      }
      muteGameDuring(bb) {
        return this.fullScreenAdsInFlight++, Hb.c.set({
          soundOnFromAd: !1
        }), bb.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Hb.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(bb, wb) {
        const Mb = this.adUnitIds.rewarded;
        this.muteGameDuring(pb.e.request("ads.showRewarded", {
          placementId: Mb
        })).then((Mb => {
          let {
            rewarded: eb
          } = Mb;
          eb ? bb() : wb()
        }), (bb => {
          console.warn(`AD ${Mb}: AdMob rewarded failed:`, bb), wb()
        }))
      }
      playVideoAd(bb, wb) {
        const Mb = this.adUnitIds.interstitial;
        this.muteGameDuring(pb.e.request("ads.showInterstitial", {
          placementId: Mb
        })).then((() => {
          bb()
        }), (wb => {
          console.warn(`AD ${Mb}: AdMob interstitial failed:`, wb), bb()
        }))
      }
      renderBanner(bb) {
        const wb = (0, gb.b)(bb),
          Mb = this.adUnitIds.banners[wb];
        if (void 0 === Mb) return;
        const eb = document.getElementById(bb.divId);
        if (!eb) return void console.warn(`AD ${wb}: AdMob renderBanner called but div ${bb.divId} is not in DOM`);
        const Hb = eb.getBoundingClientRect(),
          Vb = window.innerWidth,
          Ib = window.innerHeight;
        if (0 === Vb || 0 === Ib) return void console.warn(`AD ${wb}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Ob = {
          x1: lb.e.clamp(Hb.left / Vb * 100, 0, 100),
          y1: lb.e.clamp(Hb.top / Ib * 100, 0, 100),
          x2: lb.e.clamp(Hb.right / Vb * 100, 0, 100),
          y2: lb.e.clamp(Hb.bottom / Ib * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(wb, Mb), console.log(`AD ${wb}: AdMob renderBanner placementId=${Mb} box=`, Ob), (0, Lb.i)("site_sdk"), pb.e.emit("ads.showBanner", {
          placementId: Mb,
          ...Ob
        })
      }
      clearBanner(bb) {
        const wb = (0, gb.b)(bb),
          Mb = this.bannerPlacementByBloxdId.get(wb);
        void 0 !== Mb && (this.bannerPlacementByBloxdId.delete(wb), this.bannerFirstResponseSeen.delete(Mb), console.log(`AD ${wb}: AdMob clearBanner placementId=${Mb}`), pb.e.emit("ads.hideBanner", {
          placementId: Mb
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