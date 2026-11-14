export const id = 137;
export const ids = [137];
export const modules = {
  7006: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AdMobSdkAdaptor: () => Pc
    });
    var Vc = nc(1168),
      Ic = nc(2831),
      rB = nc(145),
      uc = nc(2642),
      sc = nc(302);
    const Mc = {
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
    class Pc extends Vc.e {
      constructor(cB) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.inflightRewarded = null, this.inflightInterstitial = null, this.adUnitIds = Mc[cB], this.subscribeToRNResponses()
      }
      static async setup() {
        const cB = "mobileIos" === rB.r ? "mobileIos" : "mobileAndroid";
        return (0, Ic.c)() || console.error(`AD: AdMobSDK initialised on ${cB} but ReactNativeWebView is unavailable; ads will be no-ops`), console.log(`AD: AdMobSDK initialised for ${cB}`), new Pc(cB)
      }
      subscribeToRNResponses() {
        (0, Ic.i)("renderBanner", (cB => {
          let {
            placementId: Bc,
            success: nc,
            error: Vc
          } = cB;
          const Ic = !this.bannerFirstResponseSeen.has(Bc);
          this.bannerFirstResponseSeen.add(Bc), Ic ? nc ? console.log(`AD ${Bc}: AdMob banner loaded`) : console.warn(`AD ${Bc}: AdMob banner failed to load: ${Vc}`) : nc || console.warn(`AD ${Bc}: AdMob banner refresh failed: ${Vc}`)
        })), (0, Ic.i)("playRewarded", (cB => {
          let {
            placementId: Bc,
            completed: nc
          } = cB;
          const Vc = this.inflightRewarded;
          null !== Vc && Vc.placementId === Bc ? Vc.finish(nc) : console.warn(`AD ${Bc}: AdMob rewarded response received with no matching in-flight request`)
        })), (0, Ic.i)("playVideoAd", (cB => {
          let {
            placementId: Bc,
            completed: nc
          } = cB;
          const Vc = this.inflightInterstitial;
          null !== Vc && Vc.placementId === Bc ? Vc.finish(nc) : console.warn(`AD ${Bc}: AdMob interstitial response received with no matching in-flight request`)
        })), (0, Ic.i)("clearBanner", (cB => {
          let {
            placementId: Bc,
            success: nc
          } = cB;
          nc || console.log(`AD ${Bc}: AdMob clearBanner returned success=false (no active banner)`)
        }))
      }
      playRewarded(cB, Bc) {
        const nc = this.adUnitIds.rewarded;
        if (null !== this.inflightRewarded) return console.error(`AD ${nc}: AdMob rewarded already in flight, failing new request`), void Bc();
        const Vc = nc => {
            clearTimeout(this.inflightRewarded.timeoutHandle), this.inflightRewarded = null, nc ? cB() : Bc()
          },
          rB = setTimeout((() => {
            console.warn(`AD ${nc}: AdMob rewarded timed out after 30000ms`), Vc(!1)
          }), 3e4);
        this.inflightRewarded = {
          placementId: nc,
          timeoutHandle: rB,
          finish: Vc
        }, (0, Ic.f)("playRewarded", {
          placementId: nc
        }) || Vc(!1)
      }
      playVideoAd(cB, Bc) {
        const nc = this.adUnitIds.interstitial;
        if (null !== this.inflightInterstitial) return console.error(`AD ${nc}: AdMob interstitial already in flight, skipping`), void cB();
        let Vc = !1;
        const rB = Bc => {
            clearTimeout(this.inflightInterstitial.timeoutHandle), this.inflightInterstitial = null, Vc || (Vc = !0, cB())
          },
          uc = setTimeout((() => {
            console.warn(`AD ${nc}: AdMob interstitial timed out after 30000ms`), rB()
          }), 3e4);
        this.inflightInterstitial = {
          placementId: nc,
          timeoutHandle: uc,
          finish: rB
        }, (0, Ic.f)("playVideoAd", {
          placementId: nc
        }) || rB()
      }
      renderBanner(cB) {
        const Bc = (0, uc.b)(cB),
          nc = this.adUnitIds.banners[Bc];
        if (void 0 === nc) return;
        const Vc = document.getElementById(cB.divId);
        if (!Vc) return void console.warn(`AD ${Bc}: AdMob renderBanner called but div ${cB.divId} is not in DOM`);
        const rB = Vc.getBoundingClientRect(),
          Mc = window.innerWidth,
          Pc = window.innerHeight;
        if (0 === Mc || 0 === Pc) return void console.warn(`AD ${Bc}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const qB = {
          x1: sc.b.clamp(rB.left / Mc * 100, 0, 100),
          y1: sc.b.clamp(rB.top / Pc * 100, 0, 100),
          x2: sc.b.clamp(rB.right / Mc * 100, 0, 100),
          y2: sc.b.clamp(rB.bottom / Pc * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Bc, nc), console.log(`AD ${Bc}: AdMob renderBanner placementId=${nc} box=`, qB), (0, Ic.f)("renderBanner", {
          placementId: nc,
          ...qB
        })
      }
      clearBanner(cB) {
        const Bc = (0, uc.b)(cB),
          nc = this.bannerPlacementByBloxdId.get(Bc);
        void 0 !== nc && (this.bannerPlacementByBloxdId.delete(Bc), this.bannerFirstResponseSeen.delete(nc), console.log(`AD ${Bc}: AdMob clearBanner placementId=${nc}`), (0, Ic.f)("clearBanner", {
          placementId: nc
        }))
      }
      canShowBloxdAd(cB) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);