export const id = 145;
export const ids = [145];
export const modules = {
  7741: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AdMobSdkAdaptor: () => fb
    });
    var kb = sb(1307),
      Wb = sb(19),
      ab = sb(1670),
      Tb = sb(167),
      Ub = sb(3234),
      Ib = sb(344);
    const Hb = {
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
    class fb extends kb.c {
      constructor(bb) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Hb[bb], ab.b.on("ads.bannerStatus", (bb => {
          let {
            placementId: cb,
            shown: sb,
            error: kb
          } = bb;
          const Wb = !this.bannerFirstResponseSeen.has(cb);
          this.bannerFirstResponseSeen.add(cb), Wb ? sb ? console.log(`AD ${cb}: AdMob banner loaded`) : console.warn(`AD ${cb}: AdMob banner failed to load: ${kb}`) : sb || console.warn(`AD ${cb}: AdMob banner refresh failed: ${kb}`)
        }))
      }
      static async setup() {
        const bb = "mobileIos" === Tb.r ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${bb}`), new fb(bb)
      }
      muteGameDuring(bb) {
        return this.fullScreenAdsInFlight++, Wb.d.set({
          soundOnFromAd: !1
        }), bb.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Wb.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(bb, cb) {
        const sb = this.adUnitIds.rewarded;
        this.muteGameDuring(ab.b.request("ads.showRewarded", {
          placementId: sb
        })).then((sb => {
          let {
            rewarded: kb
          } = sb;
          kb ? bb() : cb()
        }), (bb => {
          console.warn(`AD ${sb}: AdMob rewarded failed:`, bb), cb()
        }))
      }
      playVideoAd(bb, cb) {
        const sb = this.adUnitIds.interstitial;
        this.muteGameDuring(ab.b.request("ads.showInterstitial", {
          placementId: sb
        })).then((() => {
          bb()
        }), (cb => {
          console.warn(`AD ${sb}: AdMob interstitial failed:`, cb), bb()
        }))
      }
      renderBanner(bb) {
        const cb = (0, Ub.c)(bb),
          sb = this.adUnitIds.banners[cb];
        if (void 0 === sb) return;
        const kb = document.getElementById(bb.divId);
        if (!kb) return void console.warn(`AD ${cb}: AdMob renderBanner called but div ${bb.divId} is not in DOM`);
        const Wb = kb.getBoundingClientRect(),
          Tb = window.innerWidth,
          Hb = window.innerHeight;
        if (0 === Tb || 0 === Hb) return void console.warn(`AD ${cb}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const fb = {
          x1: Ib.d.clamp(Wb.left / Tb * 100, 0, 100),
          y1: Ib.d.clamp(Wb.top / Hb * 100, 0, 100),
          x2: Ib.d.clamp(Wb.right / Tb * 100, 0, 100),
          y2: Ib.d.clamp(Wb.bottom / Hb * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(cb, sb), console.log(`AD ${cb}: AdMob renderBanner placementId=${sb} box=`, fb), ab.b.emit("ads.showBanner", {
          placementId: sb,
          ...fb
        })
      }
      clearBanner(bb) {
        const cb = (0, Ub.c)(bb),
          sb = this.bannerPlacementByBloxdId.get(cb);
        void 0 !== sb && (this.bannerPlacementByBloxdId.delete(cb), this.bannerFirstResponseSeen.delete(sb), console.log(`AD ${cb}: AdMob clearBanner placementId=${sb}`), ab.b.emit("ads.hideBanner", {
          placementId: sb
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