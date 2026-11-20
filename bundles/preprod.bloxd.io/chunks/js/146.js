export const id = 146;
export const ids = [146];
export const modules = {
  8025: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AdMobSdkAdaptor: () => uq
    });
    var Yq = gq(1304),
      lq = gq(24),
      Oq = gq(1677),
      mq = gq(136),
      xq = gq(3337),
      Aq = gq(307);
    const cq = {
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
    class uq extends Yq.e {
      constructor(qq) {
        super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = cq[qq], Oq.c.on("ads.bannerStatus", (qq => {
          let {
            placementId: Eq,
            shown: gq,
            error: Yq
          } = qq;
          const lq = !this.bannerFirstResponseSeen.has(Eq);
          this.bannerFirstResponseSeen.add(Eq), lq ? gq ? console.log(`AD ${Eq}: AdMob banner loaded`) : console.warn(`AD ${Eq}: AdMob banner failed to load: ${Yq}`) : gq || console.warn(`AD ${Eq}: AdMob banner refresh failed: ${Yq}`)
        }))
      }
      static async setup() {
        const qq = "mobileIos" === mq.n ? "mobileIos" : "mobileAndroid";
        return console.log(`AD: AdMobSDK initialised for ${qq}`), new uq(qq)
      }
      muteGameDuring(qq) {
        return this.fullScreenAdsInFlight++, lq.b.set({
          soundOnFromAd: !1
        }), qq.finally((() => {
          this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && lq.b.set({
            soundOnFromAd: !0
          })
        }))
      }
      playRewarded(qq, Eq) {
        const gq = this.adUnitIds.rewarded;
        this.muteGameDuring(Oq.c.request("ads.showRewarded", {
          placementId: gq
        })).then((gq => {
          let {
            rewarded: Yq
          } = gq;
          Yq ? qq() : Eq()
        }), (qq => {
          console.warn(`AD ${gq}: AdMob rewarded failed:`, qq), Eq()
        }))
      }
      playVideoAd(qq, Eq) {
        const gq = this.adUnitIds.interstitial;
        this.muteGameDuring(Oq.c.request("ads.showInterstitial", {
          placementId: gq
        })).then((() => {
          qq()
        }), (Eq => {
          console.warn(`AD ${gq}: AdMob interstitial failed:`, Eq), qq()
        }))
      }
      renderBanner(qq) {
        const Eq = (0, xq.b)(qq),
          gq = this.adUnitIds.banners[Eq];
        if (void 0 === gq) return;
        const Yq = document.getElementById(qq.divId);
        if (!Yq) return void console.warn(`AD ${Eq}: AdMob renderBanner called but div ${qq.divId} is not in DOM`);
        const lq = Yq.getBoundingClientRect(),
          mq = window.innerWidth,
          cq = window.innerHeight;
        if (0 === mq || 0 === cq) return void console.warn(`AD ${Eq}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
        const uq = {
          x1: Aq.c.clamp(lq.left / mq * 100, 0, 100),
          y1: Aq.c.clamp(lq.top / cq * 100, 0, 100),
          x2: Aq.c.clamp(lq.right / mq * 100, 0, 100),
          y2: Aq.c.clamp(lq.bottom / cq * 100, 0, 100)
        };
        this.bannerPlacementByBloxdId.set(Eq, gq), console.log(`AD ${Eq}: AdMob renderBanner placementId=${gq} box=`, uq), Oq.c.emit("ads.showBanner", {
          placementId: gq,
          ...uq
        })
      }
      clearBanner(qq) {
        const Eq = (0, xq.b)(qq),
          gq = this.bannerPlacementByBloxdId.get(Eq);
        void 0 !== gq && (this.bannerPlacementByBloxdId.delete(Eq), this.bannerFirstResponseSeen.delete(gq), console.log(`AD ${Eq}: AdMob clearBanner placementId=${gq}`), Oq.c.emit("ads.hideBanner", {
          placementId: gq
        }))
      }
      canShowBloxdAd(qq) {
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);