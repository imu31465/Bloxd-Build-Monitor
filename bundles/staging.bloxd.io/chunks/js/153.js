export const id = 153;
export const ids = [153];
export const modules = {
  8260: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AdMobSdkAdaptor: () => Dp
    });
    var Op = cp(1341),
      op = cp(25),
      Ip = cp(1705),
      Sp = cp(131),
      xp = cp(3575),
      Lp = cp(337);
    const Yp = {
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
    class Dp extends Op.b {
      constructor(pp) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Yp[pp], Ip.b.on("ads.bannerStatus", (pp => {
          let {
            placementId: ip,
            shown: cp,
            error: Op
          } = pp;
          const op = !this.bannerFirstResponseSeen.has(ip);
          this.bannerFirstResponseSeen.add(ip), op ? cp ? console.log(`AD ${ip}: AdMob banner loaded`) : console.warn(`AD ${ip}: AdMob banner failed to load: ${Op}`) : cp || console.warn(`AD ${ip}: AdMob banner refresh failed: ${Op}`)
        }))
      }
      static async setup() {
        const pp = "mobileIos" === Sp.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${pp}`), new Dp(pp)
      }
      muteGameDuring(pp) {
        return this.fullScreenAdsInFlight++, op.c.set({
          soundOnFromAd: !1
        }), pp.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && op.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(pp, ip) {
        const cp = this.adUnitIds.rewarded;
        this.muteGameDuring(Ip.b.request("ads.showRewarded", {
          placementId: cp
        })).then((cp => {
          let {
            rewarded: Op
          } = cp;
          Op ? pp() : ip()
        }), (pp => {
          console.warn(`AD ${cp}: AdMob rewarded failed:`, pp), ip()
        }))
      }
      playVideoAd(pp, ip) {
        const cp = this.adUnitIds.interstitial;
        this.muteGameDuring(Ip.b.request("ads.showInterstitial", {
          placementId: cp
        })).then((() => {
          pp()
        }), (ip => {
          console.warn(`AD ${cp}: AdMob interstitial failed:`, ip), pp()
        }))
      }
      renderBanner(pp) {
        const ip = (0, xp.d)(pp),
          cp = this.adUnitIds.banners[ip];
        if (void 0 === cp) return;
        const Op = document.getElementById(pp.divId);
        if (!Op) return void console.warn(`AD ${ip}: AdMob renderBanner called but div ${pp.divId} is not in DOM`);
        const op = Op.getBoundingClientRect(),
          Sp = window.innerWidth,
          Yp = window.innerHeight;
        if (0 === Sp || 0 === Yp) return void console.warn(`AD ${ip}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const Dp = {
          x1: Lp.d.clamp(op.left / Sp * 100, 0, 100),
          y1: Lp.d.clamp(op.top / Yp * 100, 0, 100),
          x2: Lp.d.clamp(op.right / Sp * 100, 0, 100),
          y2: Lp.d.clamp(op.bottom / Yp * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(ip, cp), console.log(`AD ${ip}: AdMob renderBanner placementId=${cp} box=`, Dp), Ip.b.emit("ads.showBanner", {
          placementId: cp,
          ...Dp
        })
      }
      clearBanner(pp) {
        const ip = (0, xp.d)(pp),
          cp = this.bannerPlacementByBloxdId.get(ip);
        void 0 !== cp && (this.bannerPlacementByBloxdId.delete(ip), this.bannerFirstResponseSeen.delete(cp), console.log(`AD ${ip}: AdMob clearBanner placementId=${cp}`), Ip.b.emit("ads.hideBanner", {
          placementId: cp
        }))
      }
      canShowBloxdAd(pp) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);