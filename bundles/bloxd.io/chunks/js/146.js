export const id = 146;
export const ids = [146];
export const modules = {
  7922: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AdMobSdkAdaptor: () => uQ
    });
    var LQ = wQ(1335),
      qQ = wQ(17),
      oQ = wQ(1694),
      DQ = wQ(134),
      kQ = wQ(3331),
      vQ = wQ(317);
    const mQ = {
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
    class uQ extends LQ.b {
      constructor(QQ) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = mQ[QQ], oQ.d.on("ads.bannerStatus", (QQ => {
          let {
            placementId: FQ,
            shown: wQ,
            error: LQ
          } = QQ;
          const qQ = !this.bannerFirstResponseSeen.has(FQ);
          this.bannerFirstResponseSeen.add(FQ), qQ ? wQ ? console.log(`AD ${FQ}: AdMob banner loaded`) : console.warn(`AD ${FQ}: AdMob banner failed to load: ${LQ}`) : wQ || console.warn(`AD ${FQ}: AdMob banner refresh failed: ${LQ}`)
        }))
      }
      static async setup() {
        const QQ = "mobileIos" === DQ.r ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${QQ}`), new uQ(QQ)
      }
      muteGameDuring(QQ) {
        return this.fullScreenAdsInFlight++, qQ.c.set({
          soundOnFromAd: !1
        }), QQ.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && qQ.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(QQ, FQ) {
        const wQ = this.adUnitIds.rewarded;
        this.muteGameDuring(oQ.d.request("ads.showRewarded", {
          placementId: wQ
        })).then((wQ => {
          let {
            rewarded: LQ
          } = wQ;
          LQ ? QQ() : FQ()
        }), (QQ => {
          console.warn(`AD ${wQ}: AdMob rewarded failed:`, QQ), FQ()
        }))
      }
      playVideoAd(QQ, FQ) {
        const wQ = this.adUnitIds.interstitial;
        this.muteGameDuring(oQ.d.request("ads.showInterstitial", {
          placementId: wQ
        })).then((() => {
          QQ()
        }), (FQ => {
          console.warn(`AD ${wQ}: AdMob interstitial failed:`, FQ), QQ()
        }))
      }
      renderBanner(QQ) {
        const FQ = (0, kQ.b)(QQ),
          wQ = this.adUnitIds.banners[FQ];
        if (void 0 === wQ) return;
        const LQ = document.getElementById(QQ.divId);
        if (!LQ) return void console.warn(`AD ${FQ}: AdMob renderBanner called but div ${QQ.divId} is not in DOM`);
        const qQ = LQ.getBoundingClientRect(),
          DQ = window.innerWidth,
          mQ = window.innerHeight;
        if (0 === DQ || 0 === mQ) return void console.warn(`AD ${FQ}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const uQ = {
          x1: vQ.e.clamp(qQ.left / DQ * 100, 0, 100),
          y1: vQ.e.clamp(qQ.top / mQ * 100, 0, 100),
          x2: vQ.e.clamp(qQ.right / DQ * 100, 0, 100),
          y2: vQ.e.clamp(qQ.bottom / mQ * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(FQ, wQ), console.log(`AD ${FQ}: AdMob renderBanner placementId=${wQ} box=`, uQ), oQ.d.emit("ads.showBanner", {
          placementId: wQ,
          ...uQ
        })
      }
      clearBanner(QQ) {
        const FQ = (0, kQ.b)(QQ),
          wQ = this.bannerPlacementByBloxdId.get(FQ);
        void 0 !== wQ && (this.bannerPlacementByBloxdId.delete(FQ), this.bannerFirstResponseSeen.delete(wQ), console.log(`AD ${FQ}: AdMob clearBanner placementId=${wQ}`), oQ.d.emit("ads.hideBanner", {
          placementId: wQ
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