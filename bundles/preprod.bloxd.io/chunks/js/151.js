export const id = 151;
export const ids = [151];
export const modules = {
  8130: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AdMobSdkAdaptor: () => FC
    });
    var QC = ZC(1269),
      wC = ZC(20),
      bC = ZC(1609),
      nC = ZC(113),
      fC = ZC(3441),
      oC = ZC(326);
    const qC = {
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
    class FC extends QC.c {
      constructor(CC) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = qC[CC], bC.d.on("ads.bannerStatus", (CC => {
          let {
            placementId: zC,
            shown: ZC,
            error: QC
          } = CC;
          const wC = !this.bannerFirstResponseSeen.has(zC);
          this.bannerFirstResponseSeen.add(zC), wC ? ZC ? console.log(`AD ${zC}: AdMob banner loaded`) : console.warn(`AD ${zC}: AdMob banner failed to load: ${QC}`) : ZC || console.warn(`AD ${zC}: AdMob banner refresh failed: ${QC}`)
        }))
      }
      static async setup() {
        const CC = "mobileIos" === nC.y ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${CC}`), new FC(CC)
      }
      muteGameDuring(CC) {
        return this.fullScreenAdsInFlight++, wC.b.set({
          soundOnFromAd: !1
        }), CC.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && wC.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(CC, zC) {
        const ZC = this.adUnitIds.rewarded;
        this.muteGameDuring(bC.d.request("ads.showRewarded", {
          placementId: ZC
        })).then((ZC => {
          let {
            rewarded: QC
          } = ZC;
          QC ? CC() : zC()
        }), (CC => {
          console.warn(`AD ${ZC}: AdMob rewarded failed:`, CC), zC()
        }))
      }
      playVideoAd(CC, zC) {
        const ZC = this.adUnitIds.interstitial;
        this.muteGameDuring(bC.d.request("ads.showInterstitial", {
          placementId: ZC
        })).then((() => {
          CC()
        }), (zC => {
          console.warn(`AD ${ZC}: AdMob interstitial failed:`, zC), CC()
        }))
      }
      renderBanner(CC) {
        const zC = (0, fC.c)(CC),
          ZC = this.adUnitIds.banners[zC];
        if (void 0 === ZC) return;
        const QC = document.getElementById(CC.divId);
        if (!QC) return void console.warn(`AD ${zC}: AdMob renderBanner called but div ${CC.divId} is not in DOM`);
        const wC = QC.getBoundingClientRect(),
          nC = window.innerWidth,
          qC = window.innerHeight;
        if (0 === nC || 0 === qC) return void console.warn(`AD ${zC}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const FC = {
          x1: oC.c.clamp(wC.left / nC * 100, 0, 100),
          y1: oC.c.clamp(wC.top / qC * 100, 0, 100),
          x2: oC.c.clamp(wC.right / nC * 100, 0, 100),
          y2: oC.c.clamp(wC.bottom / qC * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(zC, ZC), console.log(`AD ${zC}: AdMob renderBanner placementId=${ZC} box=`, FC), bC.d.emit("ads.showBanner", {
          placementId: ZC,
          ...FC
        })
      }
      clearBanner(CC) {
        const zC = (0, fC.c)(CC),
          ZC = this.bannerPlacementByBloxdId.get(zC);
        void 0 !== ZC && (this.bannerPlacementByBloxdId.delete(zC), this.bannerFirstResponseSeen.delete(ZC), console.log(`AD ${zC}: AdMob clearBanner placementId=${ZC}`), bC.d.emit("ads.hideBanner", {
          placementId: ZC
        }))
      }
      canShowBloxdAd(CC) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);