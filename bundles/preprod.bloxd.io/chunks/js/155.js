export const id = 155;
export const ids = [155];
export const modules = {
  8493: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AdMobSdkAdaptor: () => gQ
    });
    var wQ = XQ(1368),
      qQ = XQ(26),
      TQ = XQ(1747),
      zQ = XQ(158),
      sQ = XQ(3727),
      FQ = XQ(402);
    const PQ = {
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
    class gQ extends wQ.c {
      constructor(QQ) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = PQ[QQ], TQ.e.on("ads.bannerStatus", (QQ => {
          let {
            placementId: WQ,
            shown: XQ,
            error: wQ
          } = QQ;
          const qQ = !this.bannerFirstResponseSeen.has(WQ);
          this.bannerFirstResponseSeen.add(WQ), qQ ? XQ ? console.log(`AD ${WQ}: AdMob banner loaded`) : console.warn(`AD ${WQ}: AdMob banner failed to load: ${wQ}`) : XQ || console.warn(`AD ${WQ}: AdMob banner refresh failed: ${wQ}`)
        }))
      }
      static async setup() {
        const QQ = "mobileIos" === zQ.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${QQ}`), new gQ(QQ)
      }
      muteGameDuring(QQ) {
        return this.fullScreenAdsInFlight++, qQ.b.set({
          soundOnFromAd: !1
        }), QQ.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && qQ.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(QQ, WQ) {
        const XQ = this.adUnitIds.rewarded;
        this.muteGameDuring(TQ.e.request("ads.showRewarded", {
          placementId: XQ
        })).then((XQ => {
          let {
            rewarded: wQ
          } = XQ;
          wQ ? QQ() : WQ()
        }), (QQ => {
          console.warn(`AD ${XQ}: AdMob rewarded failed:`, QQ), WQ()
        }))
      }
      playVideoAd(QQ, WQ) {
        const XQ = this.adUnitIds.interstitial;
        this.muteGameDuring(TQ.e.request("ads.showInterstitial", {
          placementId: XQ
        })).then((() => {
          QQ()
        }), (WQ => {
          console.warn(`AD ${XQ}: AdMob interstitial failed:`, WQ), QQ()
        }))
      }
      renderBanner(QQ) {
        const WQ = (0, sQ.b)(QQ),
          XQ = this.adUnitIds.banners[WQ];
        if (void 0 === XQ) return;
        const wQ = document.getElementById(QQ.divId);
        if (!wQ) return void console.warn(`AD ${WQ}: AdMob renderBanner called but div ${QQ.divId} is not in DOM`);
        const qQ = wQ.getBoundingClientRect(),
          zQ = window.innerWidth,
          PQ = window.innerHeight;
        if (0 === zQ || 0 === PQ) return void console.warn(`AD ${WQ}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const gQ = {
          x1: FQ.b.clamp(qQ.left / zQ * 100, 0, 100),
          y1: FQ.b.clamp(qQ.top / PQ * 100, 0, 100),
          x2: FQ.b.clamp(qQ.right / zQ * 100, 0, 100),
          y2: FQ.b.clamp(qQ.bottom / PQ * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(WQ, XQ), console.log(`AD ${WQ}: AdMob renderBanner placementId=${XQ} box=`, gQ), TQ.e.emit("ads.showBanner", {
          placementId: XQ,
          ...gQ
        })
      }
      clearBanner(QQ) {
        const WQ = (0, sQ.b)(QQ),
          XQ = this.bannerPlacementByBloxdId.get(WQ);
        void 0 !== XQ && (this.bannerPlacementByBloxdId.delete(WQ), this.bannerFirstResponseSeen.delete(XQ), console.log(`AD ${WQ}: AdMob clearBanner placementId=${XQ}`), TQ.e.emit("ads.hideBanner", {
          placementId: XQ
        }))
      }
      canShowBloxdAd(QQ) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);