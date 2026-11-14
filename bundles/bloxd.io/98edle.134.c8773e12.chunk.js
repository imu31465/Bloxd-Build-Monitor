export const id = 134;
export const ids = [134];
export const modules = {
  7046: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AdMobSdkAdaptor: () => NW
    });
    var wW = MW(1144),
      CW = MW(2748),
      zR = MW(151),
      AW = MW(2571),
      bR = MW(284);
    const yR = {
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
    class NW extends wW.d {
      constructor(WW) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.inflightRewarded = null, this.inflightInterstitial = null, this.adUnitIds = yR[WW], this.subscribeToRNResponses()
      }
      static async setup() {
        const WW = "mobileIos" === zR.u ? "mobileIos" : "mobileAndroid";
        return (0, CW.c)() || console.error(`AD: AdMobSDK initialised on ${WW} but ReactNativeWebView is unavailable; ads will be no-ops`), console.log(`AD: AdMobSDK initialised for ${WW}`), new NW(WW)
      }
      subscribeToRNResponses() {
        (0, CW.l)("renderBanner", (WW => {
          let {
            placementId: RW,
            success: MW,
            error: wW
          } = WW;
          const CW = !this.bannerFirstResponseSeen.has(RW);
          this.bannerFirstResponseSeen.add(RW), CW ? MW ? console.log(`AD ${RW}: AdMob banner loaded`) : console.warn(`AD ${RW}: AdMob banner failed to load: ${wW}`) : MW || console.warn(`AD ${RW}: AdMob banner refresh failed: ${wW}`)
        })), (0, CW.l)("playRewarded", (WW => {
          let {
            placementId: RW,
            completed: MW
          } = WW;
          const wW = this.inflightRewarded;
          null !== wW && wW.placementId === RW ? wW.finish(MW) : console.warn(`AD ${RW}: AdMob rewarded response received with no matching in-flight request`)
        })), (0, CW.l)("playVideoAd", (WW => {
          let {
            placementId: RW,
            completed: MW
          } = WW;
          const wW = this.inflightInterstitial;
          null !== wW && wW.placementId === RW ? wW.finish(MW) : console.warn(`AD ${RW}: AdMob interstitial response received with no matching in-flight request`)
        })), (0, CW.l)("clearBanner", (WW => {
          let {
            placementId: RW,
            success: MW
          } = WW;
          MW || console.log(`AD ${RW}: AdMob clearBanner returned success=false (no active banner)`)
        }))
      }
      playRewarded(WW, RW) {
        const MW = this.adUnitIds.rewarded;
        if (null !== this.inflightRewarded) return console.error(`AD ${MW}: AdMob rewarded already in flight, failing new request`), void RW();
        const wW = MW => {
            clearTimeout(this.inflightRewarded.timeoutHandle), this.inflightRewarded = null, MW ? WW() : RW()
          },
          zR = setTimeout((() => {
            console.warn(`AD ${MW}: AdMob rewarded timed out after 30000ms`), wW(!1)
          }), 3e4);
        this.inflightRewarded = {
          placementId: MW,
          timeoutHandle: zR,
          finish: wW
        }, (0, CW.i)("playRewarded", {
          placementId: MW
        }) || wW(!1)
      }
      playVideoAd(WW, RW) {
        const MW = this.adUnitIds.interstitial;
        if (null !== this.inflightInterstitial) return console.error(`AD ${MW}: AdMob interstitial already in flight, skipping`), void WW();
        let wW = !1;
        const zR = RW => {
            clearTimeout(this.inflightInterstitial.timeoutHandle), this.inflightInterstitial = null, wW || (wW = !0, WW())
          },
          AW = setTimeout((() => {
            console.warn(`AD ${MW}: AdMob interstitial timed out after 30000ms`), zR()
          }), 3e4);
        this.inflightInterstitial = {
          placementId: MW,
          timeoutHandle: AW,
          finish: zR
        }, (0, CW.i)("playVideoAd", {
          placementId: MW
        }) || zR()
      }
      renderBanner(WW) {
        const RW = (0, AW.b)(WW),
          MW = this.adUnitIds.banners[RW];
        if (void 0 === MW) return;
        const wW = document.getElementById(WW.divId);
        if (!wW) return void console.warn(`AD ${RW}: AdMob renderBanner called but div ${WW.divId} is not in DOM`);
        const zR = wW.getBoundingClientRect(),
          yR = window.innerWidth,
          NW = window.innerHeight;
        if (0 === yR || 0 === NW) return void console.warn(`AD ${RW}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const eW = {
          x1: bR.d.clamp(zR.left / yR * 100, 0, 100),
          y1: bR.d.clamp(zR.top / NW * 100, 0, 100),
          x2: bR.d.clamp(zR.right / yR * 100, 0, 100),
          y2: bR.d.clamp(zR.bottom / NW * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(RW, MW), console.log(`AD ${RW}: AdMob renderBanner placementId=${MW} box=`, eW), (0, CW.i)("renderBanner", {
          placementId: MW,
          ...eW
        })
      }
      clearBanner(WW) {
        const RW = (0, AW.b)(WW),
          MW = this.bannerPlacementByBloxdId.get(RW);
        void 0 !== MW && (this.bannerPlacementByBloxdId.delete(RW), this.bannerFirstResponseSeen.delete(MW), console.log(`AD ${RW}: AdMob clearBanner placementId=${MW}`), (0, CW.i)("clearBanner", {
          placementId: MW
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