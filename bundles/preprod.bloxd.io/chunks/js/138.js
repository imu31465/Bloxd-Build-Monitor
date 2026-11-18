export const id = 138;
export const ids = [138];
export const modules = {
  7277: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AdMobSdkAdaptor: () => oy
    });
    var Uy = Wy(1169),
      hy = Wy(1524),
      fy = Wy(139),
      Zy = Wy(2761),
      cb = Wy(258);
    const Py = {
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
    class oy extends Uy.b {
      constructor(yb) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.inflightRewarded = null, this.inflightInterstitial = null, this.adUnitIds = Py[yb], this.subscribeToRNResponses()
      }
      static async setup() {
        const yb = "mobileIos" === fy.u ? "mobileIos" : "mobileAndroid";
        return (0, hy.h)() || console.error(`AD: AdMobSDK initialised on ${yb} but ReactNativeWebView is unavailable; ads will be no-ops`), console.log(`AD: AdMobSDK initialised for ${yb}`), new oy(yb)
      }
      subscribeToRNResponses() {
        (0, hy.q)("renderBanner", (yb => {
          let {
            placementId: bb,
            success: Wy,
            error: Uy
          } = yb;
          const hy = !this.bannerFirstResponseSeen.has(bb);
          this.bannerFirstResponseSeen.add(bb), hy ? Wy ? console.log(`AD ${bb}: AdMob banner loaded`) : console.warn(`AD ${bb}: AdMob banner failed to load: ${Uy}`) : Wy || console.warn(`AD ${bb}: AdMob banner refresh failed: ${Uy}`)
        })), (0, hy.q)("playRewarded", (yb => {
          let {
            placementId: bb,
            completed: Wy
          } = yb;
          const Uy = this.inflightRewarded;
          null !== Uy && Uy.placementId === bb ? Uy.finish(Wy) : console.warn(`AD ${bb}: AdMob rewarded response received with no matching in-flight request`)
        })), (0, hy.q)("playVideoAd", (yb => {
          let {
            placementId: bb,
            completed: Wy
          } = yb;
          const Uy = this.inflightInterstitial;
          null !== Uy && Uy.placementId === bb ? Uy.finish(Wy) : console.warn(`AD ${bb}: AdMob interstitial response received with no matching in-flight request`)
        })), (0, hy.q)("clearBanner", (yb => {
          let {
            placementId: bb,
            success: Wy
          } = yb;
          Wy || console.log(`AD ${bb}: AdMob clearBanner returned success=false (no active banner)`)
        }))
      }
      playRewarded(yb, bb) {
        const Wy = this.adUnitIds.rewarded;
        if (null !== this.inflightRewarded) return console.error(`AD ${Wy}: AdMob rewarded already in flight, failing new request`), void bb();
        const Uy = Wy => {
            clearTimeout(this.inflightRewarded.timeoutHandle), this.inflightRewarded = null, Wy ? yb() : bb()
          },
          fy = setTimeout((() => {
            console.warn(`AD ${Wy}: AdMob rewarded timed out after 30000ms`), Uy(!1)
          }), 3e4);
        this.inflightRewarded = {
          placementId: Wy,
          timeoutHandle: fy,
          finish: Uy
        }, (0, hy.o)("playRewarded", {
          placementId: Wy
        }) || Uy(!1)
      }
      playVideoAd(yb, bb) {
        const Wy = this.adUnitIds.interstitial;
        if (null !== this.inflightInterstitial) return console.error(`AD ${Wy}: AdMob interstitial already in flight, skipping`), void yb();
        let Uy = !1;
        const fy = bb => {
            clearTimeout(this.inflightInterstitial.timeoutHandle), this.inflightInterstitial = null, Uy || (Uy = !0, yb())
          },
          Zy = setTimeout((() => {
            console.warn(`AD ${Wy}: AdMob interstitial timed out after 30000ms`), fy()
          }), 3e4);
        this.inflightInterstitial = {
          placementId: Wy,
          timeoutHandle: Zy,
          finish: fy
        }, (0, hy.o)("playVideoAd", {
          placementId: Wy
        }) || fy()
      }
      renderBanner(yb) {
        const bb = (0, Zy.c)(yb),
          Wy = this.adUnitIds.banners[bb];
        if (void 0 === Wy) return;
        const Uy = document.getElementById(yb.divId);
        if (!Uy) return void console.warn(`AD ${bb}: AdMob renderBanner called but div ${yb.divId} is not in DOM`);
        const fy = Uy.getBoundingClientRect(),
          Py = window.innerWidth,
          oy = window.innerHeight;
        if (0 === Py || 0 === oy) return void console.warn(`AD ${bb}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const By = {
          x1: cb.c.clamp(fy.left / Py * 100, 0, 100),
          y1: cb.c.clamp(fy.top / oy * 100, 0, 100),
          x2: cb.c.clamp(fy.right / Py * 100, 0, 100),
          y2: cb.c.clamp(fy.bottom / oy * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(bb, Wy), console.log(`AD ${bb}: AdMob renderBanner placementId=${Wy} box=`, By), (0, hy.o)("renderBanner", {
          placementId: Wy,
          ...By
        })
      }
      clearBanner(yb) {
        const bb = (0, Zy.c)(yb),
          Wy = this.bannerPlacementByBloxdId.get(bb);
        void 0 !== Wy && (this.bannerPlacementByBloxdId.delete(bb), this.bannerFirstResponseSeen.delete(Wy), console.log(`AD ${bb}: AdMob clearBanner placementId=${Wy}`), (0, hy.o)("clearBanner", {
          placementId: Wy
        }))
      }
      canShowBloxdAd(yb) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);