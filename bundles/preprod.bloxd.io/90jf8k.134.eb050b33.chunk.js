export const id = 134;
export const ids = [134];
export const modules = {
  7079: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AdMobSdkAdaptor: () => PF
    });
    var CF = SF(1171),
      AF = SF(2848),
      uF = SF(132),
      hF = SF(2642),
      bW = SF(271);
    const dF = {
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
    class PF extends CF.b {
      constructor(FF) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.inflightRewarded = null, this.inflightInterstitial = null, this.adUnitIds = dF[FF], this.subscribeToRNResponses()
      }
      static async setup() {
        const FF = "mobileIos" === uF.s ? "mobileIos" : "mobileAndroid";
        return (0, AF.c)() || console.error(`AD: AdMobSDK initialised on ${FF} but ReactNativeWebView is unavailable; ads will be no-ops`), console.log(`AD: AdMobSDK initialised for ${FF}`), new PF(FF)
      }
      subscribeToRNResponses() {
        (0, AF.n)("renderBanner", (FF => {
          let {
            placementId: WF,
            success: SF,
            error: CF
          } = FF;
          const AF = !this.bannerFirstResponseSeen.has(WF);
          this.bannerFirstResponseSeen.add(WF), AF ? SF ? console.log(`AD ${WF}: AdMob banner loaded`) : console.warn(`AD ${WF}: AdMob banner failed to load: ${CF}`) : SF || console.warn(`AD ${WF}: AdMob banner refresh failed: ${CF}`)
        })), (0, AF.n)("playRewarded", (FF => {
          let {
            placementId: WF,
            completed: SF
          } = FF;
          const CF = this.inflightRewarded;
          null !== CF && CF.placementId === WF ? CF.finish(SF) : console.warn(`AD ${WF}: AdMob rewarded response received with no matching in-flight request`)
        })), (0, AF.n)("playVideoAd", (FF => {
          let {
            placementId: WF,
            completed: SF
          } = FF;
          const CF = this.inflightInterstitial;
          null !== CF && CF.placementId === WF ? CF.finish(SF) : console.warn(`AD ${WF}: AdMob interstitial response received with no matching in-flight request`)
        })), (0, AF.n)("clearBanner", (FF => {
          let {
            placementId: WF,
            success: SF
          } = FF;
          SF || console.log(`AD ${WF}: AdMob clearBanner returned success=false (no active banner)`)
        }))
      }
      playRewarded(FF, WF) {
        const SF = this.adUnitIds.rewarded;
        if (null !== this.inflightRewarded) return console.error(`AD ${SF}: AdMob rewarded already in flight, failing new request`), void WF();
        const CF = SF => {
            clearTimeout(this.inflightRewarded.timeoutHandle), this.inflightRewarded = null, SF ? FF() : WF()
          },
          uF = setTimeout((() => {
            console.warn(`AD ${SF}: AdMob rewarded timed out after 30000ms`), CF(!1)
          }), 3e4);
        this.inflightRewarded = {
          placementId: SF,
          timeoutHandle: uF,
          finish: CF
        }, (0, AF.k)("playRewarded", {
          placementId: SF
        }) || CF(!1)
      }
      playVideoAd(FF, WF) {
        const SF = this.adUnitIds.interstitial;
        if (null !== this.inflightInterstitial) return console.error(`AD ${SF}: AdMob interstitial already in flight, skipping`), void FF();
        let CF = !1;
        const uF = WF => {
            clearTimeout(this.inflightInterstitial.timeoutHandle), this.inflightInterstitial = null, CF || (CF = !0, FF())
          },
          hF = setTimeout((() => {
            console.warn(`AD ${SF}: AdMob interstitial timed out after 30000ms`), uF()
          }), 3e4);
        this.inflightInterstitial = {
          placementId: SF,
          timeoutHandle: hF,
          finish: uF
        }, (0, AF.k)("playVideoAd", {
          placementId: SF
        }) || uF()
      }
      renderBanner(FF) {
        const WF = (0, hF.c)(FF),
          SF = this.adUnitIds.banners[WF];
        if (void 0 === SF) return;
        const CF = document.getElementById(FF.divId);
        if (!CF) return void console.warn(`AD ${WF}: AdMob renderBanner called but div ${FF.divId} is not in DOM`);
        const uF = CF.getBoundingClientRect(),
          dF = window.innerWidth,
          PF = window.innerHeight;
        if (0 === dF || 0 === PF) return void console.warn(`AD ${WF}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const RF = {
          x1: bW.c.clamp(uF.left / dF * 100, 0, 100),
          y1: bW.c.clamp(uF.top / PF * 100, 0, 100),
          x2: bW.c.clamp(uF.right / dF * 100, 0, 100),
          y2: bW.c.clamp(uF.bottom / PF * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(WF, SF), console.log(`AD ${WF}: AdMob renderBanner placementId=${SF} box=`, RF), (0, AF.k)("renderBanner", {
          placementId: SF,
          ...RF
        })
      }
      clearBanner(FF) {
        const WF = (0, hF.c)(FF),
          SF = this.bannerPlacementByBloxdId.get(WF);
        void 0 !== SF && (this.bannerPlacementByBloxdId.delete(WF), this.bannerFirstResponseSeen.delete(SF), console.log(`AD ${WF}: AdMob clearBanner placementId=${SF}`), (0, AF.k)("clearBanner", {
          placementId: SF
        }))
      }
      canShowBloxdAd(FF) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);