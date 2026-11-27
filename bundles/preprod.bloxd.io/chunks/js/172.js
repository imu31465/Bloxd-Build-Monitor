export const id = 172;
export const ids = [172];
export const modules = {
  7742: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AdMobSdkAdaptor: () => ZW
    });
    var mW = OW(1343),
      EW = OW(25),
      NW = OW(1787),
      PW = OW(136),
      LW = OW(4712),
      cW = OW(344),
      wW = OW(1836);
    const tW = {
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
    class ZW extends mW.c {
      constructor(WW) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = tW[WW], NW.d.on("ads.bannerStatus", (WW => {
          let {
            placementId: iW,
            shown: OW,
            error: mW
          } = WW;
          const EW = !this.bannerFirstResponseSeen.has(iW);
          this.bannerFirstResponseSeen.add(iW), EW ? ((0, wW.j)(OW), OW ? console.log(`AD ${iW}: AdMob banner loaded`) : console.warn(`AD ${iW}: AdMob banner failed to load: ${mW}`)) : OW || console.warn(`AD ${iW}: AdMob banner refresh failed: ${mW}`)
        }))
      }
      static async setup() {
        const WW = "mobileIos" === PW.siteUsed ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${WW}`), new ZW(WW)
      }
      muteGameDuring(WW) {
        return this.fullScreenAdsInFlight++, EW.d.set({
          soundOnFromAd: !1
        }), WW.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && EW.d.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(WW, iW) {
        const OW = this.adUnitIds.rewarded;
        this.muteGameDuring(NW.d.request("ads.showRewarded", {
          placementId: OW
        })).then((OW => {
          let {
            rewarded: mW
          } = OW;
          mW ? WW() : iW()
        }), (WW => {
          console.warn(`AD ${OW}: AdMob rewarded failed:`, WW), iW()
        }))
      }
      playVideoAd(WW, iW) {
        const OW = this.adUnitIds.interstitial;
        this.muteGameDuring(NW.d.request("ads.showInterstitial", {
          placementId: OW
        })).then((() => {
          WW()
        }), (iW => {
          console.warn(`AD ${OW}: AdMob interstitial failed:`, iW), WW()
        }))
      }
      renderBanner(WW) {
        const iW = (0, LW.c)(WW),
          OW = this.adUnitIds.banners[iW];
        if (void 0 === OW) return;
        const mW = document.getElementById(WW.divId);
        if (!mW) return void console.warn(`AD ${iW}: AdMob renderBanner called but div ${WW.divId} is not in DOM`);
        const EW = mW.getBoundingClientRect(),
          PW = window.innerWidth,
          tW = window.innerHeight;
        if (0 === PW || 0 === tW) return void console.warn(`AD ${iW}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const ZW = {
          x1: cW.e.clamp(EW.left / PW * 100, 0, 100),
          y1: cW.e.clamp(EW.top / tW * 100, 0, 100),
          x2: cW.e.clamp(EW.right / PW * 100, 0, 100),
          y2: cW.e.clamp(EW.bottom / tW * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(iW, OW), console.log(`AD ${iW}: AdMob renderBanner placementId=${OW} box=`, ZW), (0, wW.i)("site_sdk"), NW.d.emit("ads.showBanner", {
          placementId: OW,
          ...ZW
        })
      }
      clearBanner(WW) {
        const iW = (0, LW.c)(WW),
          OW = this.bannerPlacementByBloxdId.get(iW);
        void 0 !== OW && (this.bannerPlacementByBloxdId.delete(iW), this.bannerFirstResponseSeen.delete(OW), console.log(`AD ${iW}: AdMob clearBanner placementId=${OW}`), NW.d.emit("ads.hideBanner", {
          placementId: OW
        }))
      }
      canShowBloxdAd(WW) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);