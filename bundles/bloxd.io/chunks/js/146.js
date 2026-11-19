export const id = 146;
export const ids = [146];
export const modules = {
  7563: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AdMobSdkAdaptor: () => vY
    });
    var FY = DY(1318),
      AY = DY(19),
      IY = DY(1665),
      RY = DY(144),
      OY = DY(3030),
      gY = DY(341);
    const aY = {
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
    class vY extends FY.c {
      constructor(YY) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = aY[YY], IY.e.on("ads.bannerStatus", (YY => {
          let {
            placementId: rY,
            shown: DY,
            error: FY
          } = YY;
          const AY = !this.bannerFirstResponseSeen.has(rY);
          this.bannerFirstResponseSeen.add(rY), AY ? DY ? console.log(`AD ${rY}: AdMob banner loaded`) : console.warn(`AD ${rY}: AdMob banner failed to load: ${FY}`) : DY || console.warn(`AD ${rY}: AdMob banner refresh failed: ${FY}`)
        }))
      }
      static async setup() {
        const YY = "mobileIos" === RY.s ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${YY}`), new vY(YY)
      }
      muteGameDuring(YY) {
        return this.fullScreenAdsInFlight++, AY.b.set({
          soundOnFromAd: !1
        }), YY.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && AY.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(YY, rY) {
        const DY = this.adUnitIds.rewarded;
        this.muteGameDuring(IY.e.request("ads.showRewarded", {
          placementId: DY
        })).then((DY => {
          let {
            rewarded: FY
          } = DY;
          FY ? YY() : rY()
        }), (YY => {
          console.warn(`AD ${DY}: AdMob rewarded failed:`, YY), rY()
        }))
      }
      playVideoAd(YY, rY) {
        const DY = this.adUnitIds.interstitial;
        this.muteGameDuring(IY.e.request("ads.showInterstitial", {
          placementId: DY
        })).then((() => {
          YY()
        }), (rY => {
          console.warn(`AD ${DY}: AdMob interstitial failed:`, rY), YY()
        }))
      }
      renderBanner(YY) {
        const rY = (0, OY.d)(YY),
          DY = this.adUnitIds.banners[rY];
        if (void 0 === DY) return;
        const FY = document.getElementById(YY.divId);
        if (!FY) return void console.warn(`AD ${rY}: AdMob renderBanner called but div ${YY.divId} is not in DOM`);
        const AY = FY.getBoundingClientRect(),
          RY = window.innerWidth,
          aY = window.innerHeight;
        if (0 === RY || 0 === aY) return void console.warn(`AD ${rY}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const vY = {
          x1: gY.c.clamp(AY.left / RY * 100, 0, 100),
          y1: gY.c.clamp(AY.top / aY * 100, 0, 100),
          x2: gY.c.clamp(AY.right / RY * 100, 0, 100),
          y2: gY.c.clamp(AY.bottom / aY * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(rY, DY), console.log(`AD ${rY}: AdMob renderBanner placementId=${DY} box=`, vY), IY.e.emit("ads.showBanner", {
          placementId: DY,
          ...vY
        })
      }
      clearBanner(YY) {
        const rY = (0, OY.d)(YY),
          DY = this.bannerPlacementByBloxdId.get(rY);
        void 0 !== DY && (this.bannerPlacementByBloxdId.delete(rY), this.bannerFirstResponseSeen.delete(DY), console.log(`AD ${rY}: AdMob clearBanner placementId=${DY}`), IY.e.emit("ads.hideBanner", {
          placementId: DY
        }))
      }
      canShowBloxdAd(YY) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);