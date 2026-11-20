export const id = 143;
export const ids = [143];
export const modules = {
  8011: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdMsnAccountSdk: () => Bq,
      MsnSdkAdaptor: () => Vq,
      msnMockIdentityStorageKey: () => Aq
    });
    var Yq = gq(1304),
      lq = gq(1171),
      Oq = gq(3337),
      mq = gq(598);
    gq(38);
    const xq = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Aq = "msnMockIdentity";
    let cq = null;

    function uq() {
      return cq ??= async function() {
        await (0, lq.b)(xq, {}, !1);
        for (let qq = 0; qq < 50 && !window.$msstart; qq++) await (0, mq.M)(100)
      }(), cq
    }
    class Bq {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([uq(), (0, mq.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (qq) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", qq), null
        }
        return window.$msstart ? new Bq : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, mq.M)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (qq) {
          return "USER_NOT_CONSENTED" !== (null === qq || void 0 === qq ? void 0 : qq.code) && console.error("Failed to get the signed-in MSN Play player:", qq), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Wq = 20,
      Nq = {
        top: [{
          width: 970,
          height: 250
        }, {
          width: 728,
          height: 90
        }, {
          width: 320,
          height: 50
        }],
        right: [{
          width: 300,
          height: 600
        }, {
          width: 160,
          height: 600
        }, {
          width: 300,
          height: 250
        }, {
          width: 320,
          height: 50
        }],
        left: [{
          width: 300,
          height: 600
        }, {
          width: 160,
          height: 600
        }, {
          width: 300,
          height: 250
        }, {
          width: 320,
          height: 50
        }]
      },
      aq = {
        leaderboard: {
          1: ["right", "left"],
          5: ["top", "left"]
        },
        square: {
          1: []
        },
        skyscraper: {
          2: []
        }
      };
    class Vq extends Yq.e {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await uq(), new Vq
      }
      playVideoAd(qq, Eq) {
        this.playVideoOrRewarded("video", qq, qq)
      }
      playRewarded(qq, Eq) {
        this.playVideoOrRewarded("rewarded", qq, Eq)
      }
      canShowBloxdAd(qq) {
        for (const Eq in aq)
          if (qq.adId in aq[Eq]) return !1;
        return !0
      }
      async renderBanner(qq) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Oq.b)(qq)}: msn placement is already showing so not requesting`);
        const Eq = aq[qq.adType][qq.adId];
        if ((0, mq.H)(Eq)) return void console.warn(`AD ${(0,Oq.b)(qq)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const gq = [];
        for (const Yq of Eq)
          for (const qq of Nq[Yq])
            if (qq.width <= window.innerWidth - 40 && qq.height <= window.innerHeight - 40) {
              const Eq = {
                placement: Yq,
                width: qq.width,
                height: qq.height
              };
              if (!gq.some((qq => jq(Eq, qq)))) {
                gq.push(Eq);
                break
              }
            } if (gq.length > 0) {
          console.log(`AD ${(0,Oq.b)(qq)}: Attempting to show msn units: `, gq);
          const Eq = gq.map((qq => `${qq.placement}:${qq.width}x${qq.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Oq.b)(qq),
            renderPromise: window.$msstart.showDisplayAdsAsync(Eq).then((() => {
              console.log(`AD ${(0,Oq.b)(qq)}: Successfully request msn banner ad`)
            })).catch((Eq => {
              console.log(`AD ${(0,Oq.b)(qq)}: Error while requesting msn banner ad`, Eq)
            }))
          }
        } else console.warn(`AD ${(0,Oq.b)(qq)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(qq) {
        null !== this.currentlyShowingBannerPlacement && (0, Oq.b)(qq) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Oq.b)(qq)}: Attempting to clear msn banner ads for banner`, qq), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (qq) {
          console.log("AD: Error while clearing all msn banner ads", qq)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(qq, Eq, gq) {
        const Yq = Eq => {
          console.error(`AD: Error while playing MSN ${qq} ad: `, Eq), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), gq()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${qq} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const gq = async () => {
            try {
              const gq = await window.$msstart.loadAdsAsync("rewarded" === qq),
                Yq = await window.$msstart.showAdsAsync(gq.instanceId);
              this.clearAllBannerAds(), await Yq.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${qq} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Eq()
            } catch (gq) {
              Yq(gq)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), gq()
        } else Yq(`AD: Can't play MSN ${qq} ad because sdk is not loaded`)
      }
    }

    function dq(qq) {
      let Eq, gq;
      switch (qq.placement) {
        case "top":
          Eq = (window.innerWidth - qq.width) / 2, gq = Wq;
          break;
        case "right":
          Eq = window.innerWidth - qq.width - Wq, gq = window.innerHeight / 2 - qq.height / 2 - 10;
          break;
        case "left":
          Eq = Wq, gq = window.innerHeight / 2 - qq.height / 2 - 10
      }
      return {
        x1: Eq,
        y1: gq,
        x2: Eq + qq.width,
        y2: gq + qq.height
      }
    }

    function jq(qq, Eq) {
      const gq = dq(qq),
        Yq = dq(Eq);
      return !(gq.x2 <= Yq.x1 || Yq.x2 <= gq.x1 || gq.y2 <= Yq.y1 || Yq.y2 <= gq.y1)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);