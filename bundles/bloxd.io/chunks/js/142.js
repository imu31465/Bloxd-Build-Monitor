export const id = 142;
export const ids = [142];
export const modules = {
  7690: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdMsnAccountSdk: () => Lb,
      MsnSdkAdaptor: () => Rb,
      msnMockIdentityStorageKey: () => Bb
    });
    var Ab = Ub(1240),
      Mb = Ub(1118),
      Tb = Ub(3142),
      Eb = Ub(591);
    Ub(31);
    const Yb = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      Bb = "msnMockIdentity";
    let eb = null;

    function vb() {
      return eb ??= async function() {
        await (0, Mb.b)(Yb, {}, !1);
        for (let bb = 0; bb < 50 && !window.$msstart; bb++) await (0, Eb.O)(100)
      }(), eb
    }
    class Lb {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([vb(), (0, Eb.O)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (bb) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", bb), null
        }
        return window.$msstart ? new Lb : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Eb.O)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (bb) {
          return "USER_NOT_CONSENTED" !== (null === bb || void 0 === bb ? void 0 : bb.code) && console.error("Failed to get the signed-in MSN Play player:", bb), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Pb = 20,
      Xb = {
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
      jb = {
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
    class Rb extends Ab.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await vb(), new Rb
      }
      playVideoAd(bb, ab) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, ab) {
        this.playVideoOrRewarded("rewarded", bb, ab)
      }
      canShowBloxdAd(bb) {
        for (const ab in jb)
          if (bb.adId in jb[ab]) return !1;
        return !0
      }
      async renderBanner(bb) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Tb.d)(bb)}: msn placement is already showing so not requesting`);
        const ab = jb[bb.adType][bb.adId];
        if ((0, Eb.I)(ab)) return void console.warn(`AD ${(0,Tb.d)(bb)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Ub = [];
        for (const Ab of ab)
          for (const bb of Xb[Ab])
            if (bb.width <= window.innerWidth - 40 && bb.height <= window.innerHeight - 40) {
              const ab = {
                placement: Ab,
                width: bb.width,
                height: bb.height
              };
              if (!Ub.some((bb => yb(ab, bb)))) {
                Ub.push(ab);
                break
              }
            } if (Ub.length > 0) {
          console.log(`AD ${(0,Tb.d)(bb)}: Attempting to show msn units: `, Ub);
          const ab = Ub.map((bb => `${bb.placement}:${bb.width}x${bb.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Tb.d)(bb),
            renderPromise: window.$msstart.showDisplayAdsAsync(ab).then((() => {
              console.log(`AD ${(0,Tb.d)(bb)}: Successfully request msn banner ad`)
            })).catch((ab => {
              console.log(`AD ${(0,Tb.d)(bb)}: Error while requesting msn banner ad`, ab)
            }))
          }
        } else console.warn(`AD ${(0,Tb.d)(bb)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(bb) {
        null !== this.currentlyShowingBannerPlacement && (0, Tb.d)(bb) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Tb.d)(bb)}: Attempting to clear msn banner ads for banner`, bb), await this.clearAllBannerAds())
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
      playVideoOrRewarded(bb, ab, Ub) {
        const Ab = ab => {
          console.error(`AD: Error while playing MSN ${bb} ad: `, ab), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Ub()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Ub = async () => {
            try {
              const Ub = await window.$msstart.loadAdsAsync("rewarded" === bb),
                Ab = await window.$msstart.showAdsAsync(Ub.instanceId);
              this.clearAllBannerAds(), await Ab.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${bb} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ab()
            } catch (Ub) {
              Ab(Ub)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Ub()
        } else Ab(`AD: Can't play MSN ${bb} ad because sdk is not loaded`)
      }
    }

    function kb(bb) {
      let ab, Ub;
      switch (bb.placement) {
        case "top":
          ab = (window.innerWidth - bb.width) / 2, Ub = Pb;
          break;
        case "right":
          ab = window.innerWidth - bb.width - Pb, Ub = window.innerHeight / 2 - bb.height / 2 - 10;
          break;
        case "left":
          ab = Pb, Ub = window.innerHeight / 2 - bb.height / 2 - 10
      }
      return {
        x1: ab,
        y1: Ub,
        x2: ab + bb.width,
        y2: Ub + bb.height
      }
    }

    function yb(bb, ab) {
      const Ub = kb(bb),
        Ab = kb(ab);
      return !(Ub.x2 <= Ab.x1 || Ab.x2 <= Ub.x1 || Ub.y2 <= Ab.y1 || Ab.y2 <= Ub.y1)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);