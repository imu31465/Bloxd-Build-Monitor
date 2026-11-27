export const id = 172;
export const ids = [172];
export const modules = {
  7686: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      AdMobSdkAdaptor: () => xr
    });
    var Zr = Qr(1418),
      Wr = Qr(26),
      ar = Qr(1815),
      jr = Qr(139),
      Ir = Qr(4738),
      fr = Qr(379),
      Er = Qr(1864);
    const pr = {
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
    class xr extends Zr.d {
      constructor(rr) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = pr[rr], ar.b.on("ads.bannerStatus", (rr => {
          let {
            placementId: Sr,
            shown: Qr,
            error: Zr
          } = rr;
          const Wr = !this.bannerFirstResponseSeen.has(Sr);
          this.bannerFirstResponseSeen.add(Sr), Wr ? ((0, Er.j)(Qr), Qr ? console.log(`AD ${Sr}: AdMob banner loaded`) : console.warn(`AD ${Sr}: AdMob banner failed to load: ${Zr}`)) : Qr || console.warn(`AD ${Sr}: AdMob banner refresh failed: ${Zr}`)
        }))
      }
      static async setup() {
        const rr = "mobileIos" === jr.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${rr}`), new xr(rr)
      }
      muteGameDuring(rr) {
        return this.fullScreenAdsInFlight++, Wr.c.set({
          soundOnFromAd: !1
        }), rr.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && Wr.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(rr, Sr) {
        const Qr = this.adUnitIds.rewarded;
        this.muteGameDuring(ar.b.request("ads.showRewarded", {
          placementId: Qr
        })).then((Qr => {
          let {
            rewarded: Zr
          } = Qr;
          Zr ? rr() : Sr()
        }), (rr => {
          console.warn(`AD ${Qr}: AdMob rewarded failed:`, rr), Sr()
        }))
      }
      playVideoAd(rr, Sr) {
        const Qr = this.adUnitIds.interstitial;
        this.muteGameDuring(ar.b.request("ads.showInterstitial", {
          placementId: Qr
        })).then((() => {
          rr()
        }), (Sr => {
          console.warn(`AD ${Qr}: AdMob interstitial failed:`, Sr), rr()
        }))
      }
      renderBanner(rr) {
        const Sr = (0, Ir.e)(rr),
          Qr = this.adUnitIds.banners[Sr];
        if (void 0 === Qr) return;
        const Zr = document.getElementById(rr.divId);
        if (!Zr) return void console.warn(`AD ${Sr}: AdMob renderBanner called but div ${rr.divId} is not in DOM`);
        const Wr = Zr.getBoundingClientRect(),
          jr = window.innerWidth,
          pr = window.innerHeight;
        if (0 === jr || 0 === pr) return void console.warn(`AD ${Sr}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const xr = {
          x1: fr.b.clamp(Wr.left / jr * 100, 0, 100),
          y1: fr.b.clamp(Wr.top / pr * 100, 0, 100),
          x2: fr.b.clamp(Wr.right / jr * 100, 0, 100),
          y2: fr.b.clamp(Wr.bottom / pr * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Sr, Qr), console.log(`AD ${Sr}: AdMob renderBanner placementId=${Qr} box=`, xr), (0, Er.i)("site_sdk"), ar.b.emit("ads.showBanner", {
          placementId: Qr,
          ...xr
        })
      }
      clearBanner(rr) {
        const Sr = (0, Ir.e)(rr),
          Qr = this.bannerPlacementByBloxdId.get(Sr);
        void 0 !== Qr && (this.bannerPlacementByBloxdId.delete(Sr), this.bannerFirstResponseSeen.delete(Qr), console.log(`AD ${Sr}: AdMob clearBanner placementId=${Qr}`), ar.b.emit("ads.hideBanner", {
          placementId: Qr
        }))
      }
      canShowBloxdAd(rr) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);