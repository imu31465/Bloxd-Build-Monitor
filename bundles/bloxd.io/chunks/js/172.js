export const id = 172;
export const ids = [172];
export const modules = {
  7880: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AdMobSdkAdaptor: () => KR
    });
    var yR = GR(1447),
      tR = GR(25),
      uR = GR(1879),
      ZR = GR(134),
      qR = GR(4822),
      iR = GR(377),
      fR = GR(1930);
    const VR = {
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
    class KR extends yR.d {
      constructor(RR) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = VR[RR], uR.c.on("ads.bannerStatus", (RR => {
          let {
            placementId: JR,
            shown: GR,
            error: yR
          } = RR;
          const tR = !this.bannerFirstResponseSeen.has(JR);
          this.bannerFirstResponseSeen.add(JR), tR ? ((0, fR.i)(GR), GR ? console.log(`AD ${JR}: AdMob banner loaded`) : console.warn(`AD ${JR}: AdMob banner failed to load: ${yR}`)) : GR || console.warn(`AD ${JR}: AdMob banner refresh failed: ${yR}`)
        }))
      }
      static async setup() {
        const RR = "mobileIos" === ZR.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${RR}`), new KR(RR)
      }
      muteGameDuring(RR) {
        return this.fullScreenAdsInFlight++, tR.d.set({
          soundOnFromAd: !1
        }), RR.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && tR.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(RR, JR) {
        const GR = this.adUnitIds.rewarded;
        this.muteGameDuring(uR.c.request("ads.showRewarded", {
          placementId: GR
        })).then((GR => {
          let {
            rewarded: yR
          } = GR;
          yR ? RR() : JR()
        }), (RR => {
          console.warn(`AD ${GR}: AdMob rewarded failed:`, RR), JR()
        }))
      }
      playVideoAd(RR, JR) {
        const GR = this.adUnitIds.interstitial;
        this.muteGameDuring(uR.c.request("ads.showInterstitial", {
          placementId: GR
        })).then((() => {
          RR()
        }), (JR => {
          console.warn(`AD ${GR}: AdMob interstitial failed:`, JR), RR()
        }))
      }
      renderBanner(RR) {
        const JR = (0, qR.e)(RR),
          GR = this.adUnitIds.banners[JR];
        if (void 0 === GR) return;
        const yR = document.getElementById(RR.divId);
        if (!yR) return void console.warn(`AD ${JR}: AdMob renderBanner called but div ${RR.divId} is not in DOM`);
        const tR = yR.getBoundingClientRect(),
          ZR = window.innerWidth,
          VR = window.innerHeight;
        if (0 === ZR || 0 === VR) return void console.warn(`AD ${JR}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const KR = {
          x1: iR.e.clamp(tR.left / ZR * 100, 0, 100),
          y1: iR.e.clamp(tR.top / VR * 100, 0, 100),
          x2: iR.e.clamp(tR.right / ZR * 100, 0, 100),
          y2: iR.e.clamp(tR.bottom / VR * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(JR, GR), console.log(`AD ${JR}: AdMob renderBanner placementId=${GR} box=`, KR), (0, fR.h)("site_sdk"), uR.c.emit("ads.showBanner", {
          placementId: GR,
          ...KR
        })
      }
      clearBanner(RR) {
        const JR = (0, qR.e)(RR),
          GR = this.bannerPlacementByBloxdId.get(JR);
        void 0 !== GR && (this.bannerPlacementByBloxdId.delete(JR), this.bannerFirstResponseSeen.delete(GR), console.log(`AD ${JR}: AdMob clearBanner placementId=${GR}`), uR.c.emit("ads.hideBanner", {
          placementId: GR
        }))
      }
      canShowBloxdAd(RR) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);