export const id = 169;
export const ids = [169];
export const modules = {
  7669: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdMsnAccountSdk: () => xr,
      MsnSdkAdaptor: () => tr
    });
    var Zr = Qr(1418),
      Wr = Qr(1240),
      ar = Qr(4738),
      jr = Qr(688),
      Ir = Qr(1855);
    const fr = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let Er = null;

    function pr() {
      return Er ??= async function() {
        await (0, Wr.e)(fr, {}, !1);
        for (let rr = 0; rr < 50 && !window.$msstart; rr++) await (0, jr.T)(100)
      }(), Er
    }
    class xr {
      constructor() {}
      static async setup() {
        if (null !== (0, Ir.b)()) return new xr;
        try {
          await Promise.race([pr(), (0, jr.T)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (rr) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", rr), null
        }
        return window.$msstart ? new xr : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const rr = (0, Ir.b)();
        if (null !== rr) return rr;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, jr.T)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (Sr) {
          return "USER_NOT_CONSENTED" !== (null === Sr || void 0 === Sr ? void 0 : Sr.code) && console.error("Failed to get the signed-in MSN Play player:", Sr), null
        }
      }
      async signIn() {
        var rr;
        return null !== (rr = (0, Ir.b)()) && void 0 !== rr ? rr : await window.$msstart.signInAsync()
      }
    }
    const mr = 20,
      Nr = {
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
      Ur = {
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
    class tr extends Zr.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await pr(), new tr
      }
      playVideoAd(rr, Sr) {
        this.playVideoOrRewarded("video", rr, rr)
      }
      playRewarded(rr, Sr) {
        this.playVideoOrRewarded("rewarded", rr, Sr)
      }
      canShowBloxdAd(rr) {
        for (const Sr in Ur)
          if (rr.adId in Ur[Sr]) return !1;
        return !0
      }
      async renderBanner(rr) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,ar.e)(rr)}: msn placement is already showing so not requesting`);
        const Sr = Ur[rr.adType][rr.adId];
        if ((0, jr.L)(Sr)) return void console.warn(`AD ${(0,ar.e)(rr)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const Qr = [];
        for (const Zr of Sr)
          for (const rr of Nr[Zr])
            if (rr.width <= window.innerWidth - 40 && rr.height <= window.innerHeight - 40) {
              const Sr = {
                placement: Zr,
                width: rr.width,
                height: rr.height
              };
              if (!Qr.some((rr => zr(Sr, rr)))) {
                Qr.push(Sr);
                break
              }
            } if (Qr.length > 0) {
          console.log(`AD ${(0,ar.e)(rr)}: Attempting to show msn units: `, Qr);
          const Sr = Qr.map((rr => `${rr.placement}:${rr.width}x${rr.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, ar.e)(rr),
            renderPromise: window.$msstart.showDisplayAdsAsync(Sr).then((() => {
              console.log(`AD ${(0,ar.e)(rr)}: Successfully request msn banner ad`)
            })).catch((Sr => {
              console.log(`AD ${(0,ar.e)(rr)}: Error while requesting msn banner ad`, Sr)
            }))
          }
        } else console.warn(`AD ${(0,ar.e)(rr)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(rr) {
        null !== this.currentlyShowingBannerPlacement && (0, ar.e)(rr) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,ar.e)(rr)}: Attempting to clear msn banner ads for banner`, rr), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (rr) {
          console.log("AD: Error while clearing all msn banner ads", rr)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(rr, Sr, Qr) {
        const Zr = Sr => {
          console.error(`AD: Error while playing MSN ${rr} ad: `, Sr), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Qr()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${rr} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const Qr = async () => {
            try {
              const Qr = await window.$msstart.loadAdsAsync("rewarded" === rr),
                Zr = await window.$msstart.showAdsAsync(Qr.instanceId);
              this.clearAllBannerAds(), await Zr.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${rr} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Sr()
            } catch (Qr) {
              Zr(Qr)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), Qr()
        } else Zr(`AD: Can't play MSN ${rr} ad because sdk is not loaded`)
      }
    }

    function hr(rr) {
      let Sr, Qr;
      switch (rr.placement) {
        case "top":
          Sr = (window.innerWidth - rr.width) / 2, Qr = mr;
          break;
        case "right":
          Sr = window.innerWidth - rr.width - mr, Qr = window.innerHeight / 2 - rr.height / 2 - 10;
          break;
        case "left":
          Sr = mr, Qr = window.innerHeight / 2 - rr.height / 2 - 10
      }
      return {
        x1: Sr,
        y1: Qr,
        x2: Sr + rr.width,
        y2: Qr + rr.height
      }
    }

    function zr(rr, Sr) {
      const Qr = hr(rr),
        Zr = hr(Sr);
      return !(Qr.x2 <= Zr.x1 || Zr.x2 <= Qr.x1 || Qr.y2 <= Zr.y1 || Zr.y2 <= Qr.y1)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);