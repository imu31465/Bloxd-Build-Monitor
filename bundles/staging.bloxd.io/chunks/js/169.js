export const id = 169;
export const ids = [169];
export const modules = {
  7912: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdMsnAccountSdk: () => Ob,
      MsnSdkAdaptor: () => Eb
    });
    var eb = Mb(1440),
      Hb = Mb(1250),
      pb = Mb(4879),
      Vb = Mb(661),
      gb = Mb(1938);
    const lb = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let Lb = null;

    function Ib() {
      return Lb ??= async function() {
        await (0, Hb.c)(lb, {}, !1);
        for (let bb = 0; bb < 50 && !window.$msstart; bb++) await (0, Vb.R)(100)
      }(), Lb
    }
    class Ob {
      constructor() {}
      static async setup() {
        if (null !== (0, gb.b)()) return new Ob;
        try {
          await Promise.race([Ib(), (0, Vb.R)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (bb) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", bb), null
        }
        return window.$msstart ? new Ob : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const bb = (0, gb.b)();
        if (null !== bb) return bb;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Vb.R)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (wb) {
          return "USER_NOT_CONSENTED" !== (null === wb || void 0 === wb ? void 0 : wb.code) && console.error("Failed to get the signed-in MSN Play player:", wb), null
        }
      }
      async signIn() {
        var bb;
        return null !== (bb = (0, gb.b)()) && void 0 !== bb ? bb : await window.$msstart.signInAsync()
      }
    }
    const Ub = 20,
      tb = {
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
      Cb = {
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
    class Eb extends eb.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Ib(), new Eb
      }
      playVideoAd(bb, wb) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, wb) {
        this.playVideoOrRewarded("rewarded", bb, wb)
      }
      canShowBloxdAd(bb) {
        for (const wb in Cb)
          if (bb.adId in Cb[wb]) return !1;
        return !0
      }
      async renderBanner(bb) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,pb.b)(bb)}: msn placement is already showing so not requesting`);
        const wb = Cb[bb.adType][bb.adId];
        if ((0, Vb.K)(wb)) return void console.warn(`AD ${(0,pb.b)(bb)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Mb = [];
        for (const eb of wb)
          for (const bb of tb[eb])
            if (bb.width <= window.innerWidth - 40 && bb.height <= window.innerHeight - 40) {
              const wb = {
                placement: eb,
                width: bb.width,
                height: bb.height
              };
              if (!Mb.some((bb => Bb(wb, bb)))) {
                Mb.push(wb);
                break
              }
            } if (Mb.length > 0) {
          console.log(`AD ${(0,pb.b)(bb)}: Attempting to show msn units: `, Mb);
          const wb = Mb.map((bb => `${bb.placement}:${bb.width}x${bb.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, pb.b)(bb),
            renderPromise: window.$msstart.showDisplayAdsAsync(wb).then((() => {
              console.log(`AD ${(0,pb.b)(bb)}: Successfully request msn banner ad`)
            })).catch((wb => {
              console.log(`AD ${(0,pb.b)(bb)}: Error while requesting msn banner ad`, wb)
            }))
          }
        } else console.warn(`AD ${(0,pb.b)(bb)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(bb) {
        null !== this.currentlyShowingBannerPlacement && (0, pb.b)(bb) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,pb.b)(bb)}: Attempting to clear msn banner ads for banner`, bb), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (bb) {
          console.log("AD: Error while clearing all msn banner ads", bb)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(bb, wb, Mb) {
        const eb = wb => {
          console.error(`AD: Error while playing MSN ${bb} ad: `, wb), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Mb()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Mb = async () => {
            try {
              const Mb = await window.$msstart.loadAdsAsync("rewarded" === bb),
                eb = await window.$msstart.showAdsAsync(Mb.instanceId);
              this.clearAllBannerAds(), await eb.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), wb()
            } catch (Mb) {
              eb(Mb)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Mb()
        } else eb(`AD: Can't play MSN ${bb} ad because sdk is not loaded`)
      }
    }

    function Fb(bb) {
      let wb, Mb;
      switch (bb.placement) {
        case "top":
          wb = (window.innerWidth - bb.width) / 2, Mb = Ub;
          break;
        case "right":
          wb = window.innerWidth - bb.width - Ub, Mb = window.innerHeight / 2 - bb.height / 2 - 10;
          break;
        case "left":
          wb = Ub, Mb = window.innerHeight / 2 - bb.height / 2 - 10
      }
      return {
        x1: wb,
        y1: Mb,
        x2: wb + bb.width,
        y2: Mb + bb.height
      }
    }

    function Bb(bb, wb) {
      const Mb = Fb(bb),
        eb = Fb(wb);
      return !(Mb.x2 <= eb.x1 || eb.x2 <= Mb.x1 || Mb.y2 <= eb.y1 || eb.y2 <= Mb.y1)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);