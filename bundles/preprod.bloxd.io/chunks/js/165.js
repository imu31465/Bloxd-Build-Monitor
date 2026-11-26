export const id = 165;
export const ids = [165];
export const modules = {
  7278: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AdMobSdkAdaptor: () => XH
    });
    var AH = LH(1289),
      rH = LH(15),
      SH = LH(1714),
      hH = LH(120),
      tH = LH(3870),
      zH = LH(317),
      CH = LH(1769);
    const EH = {
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
    class XH extends AH.b {
      constructor(HH) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = EH[HH], SH.b.on("ads.bannerStatus", (HH => {
          let {
            placementId: BH,
            shown: LH,
            error: AH
          } = HH;
          const rH = !this.bannerFirstResponseSeen.has(BH);
          this.bannerFirstResponseSeen.add(BH), rH ? ((0, CH.i)(LH), LH ? console.log(`AD ${BH}: AdMob banner loaded`) : console.warn(`AD ${BH}: AdMob banner failed to load: ${AH}`)) : LH || console.warn(`AD ${BH}: AdMob banner refresh failed: ${AH}`)
        }))
      }
      static async setup() {
        const HH = "mobileIos" === hH.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${HH}`), new XH(HH)
      }
      muteGameDuring(HH) {
        return this.fullScreenAdsInFlight++, rH.c.set({
          soundOnFromAd: !1
        }), HH.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && rH.c.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(HH, BH) {
        const LH = this.adUnitIds.rewarded;
        this.muteGameDuring(SH.b.request("ads.showRewarded", {
          placementId: LH
        })).then((LH => {
          let {
            rewarded: AH
          } = LH;
          AH ? HH() : BH()
        }), (HH => {
          console.warn(`AD ${LH}: AdMob rewarded failed:`, HH), BH()
        }))
      }
      playVideoAd(HH, BH) {
        const LH = this.adUnitIds.interstitial;
        this.muteGameDuring(SH.b.request("ads.showInterstitial", {
          placementId: LH
        })).then((() => {
          HH()
        }), (BH => {
          console.warn(`AD ${LH}: AdMob interstitial failed:`, BH), HH()
        }))
      }
      renderBanner(HH) {
        const BH = (0, tH.c)(HH),
          LH = this.adUnitIds.banners[BH];
        if (void 0 === LH) return;
        const AH = document.getElementById(HH.divId);
        if (!AH) return void console.warn(`AD ${BH}: AdMob renderBanner called but div ${HH.divId} is not in DOM`);
        const rH = AH.getBoundingClientRect(),
          hH = window.innerWidth,
          EH = window.innerHeight;
        if (0 === hH || 0 === EH) return void console.warn(`AD ${BH}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const XH = {
          x1: zH.d.clamp(rH.left / hH * 100, 0, 100),
          y1: zH.d.clamp(rH.top / EH * 100, 0, 100),
          x2: zH.d.clamp(rH.right / hH * 100, 0, 100),
          y2: zH.d.clamp(rH.bottom / EH * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(BH, LH), console.log(`AD ${BH}: AdMob renderBanner placementId=${LH} box=`, XH), (0, CH.h)("site_sdk"), SH.b.emit("ads.showBanner", {
          placementId: LH,
          ...XH
        })
      }
      clearBanner(HH) {
        const BH = (0, tH.c)(HH),
          LH = this.bannerPlacementByBloxdId.get(BH);
        void 0 !== LH && (this.bannerPlacementByBloxdId.delete(BH), this.bannerFirstResponseSeen.delete(LH), console.log(`AD ${BH}: AdMob clearBanner placementId=${LH}`), SH.b.emit("ads.hideBanner", {
          placementId: LH
        }))
      }
      canShowBloxdAd(HH) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);