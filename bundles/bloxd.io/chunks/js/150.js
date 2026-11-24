export const id = 150;
export const ids = [150];
export const modules = {
  8241: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdMsnAccountSdk: () => Ap,
      MsnSdkAdaptor: () => Up
    });
    var Op = cp(1341),
      op = cp(1194),
      Ip = cp(3575),
      Sp = cp(640),
      xp = cp(1755);
    const Lp = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let Yp = null;

    function Dp() {
      return Yp ??= async function() {
        await (0, op.b)(Lp, {}, !1);
        for (let pp = 0; pp < 50 && !window.$msstart; pp++) await (0, Sp.M)(100)
      }(), Yp
    }
    class Ap {
      constructor() {}
      static async setup() {
        if (null !== (0, xp.c)()) return new Ap;
        try {
          await Promise.race([Dp(), (0, Sp.M)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (pp) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", pp), null
        }
        return window.$msstart ? new Ap : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const pp = (0, xp.c)();
        if (null !== pp) return pp;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Sp.M)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (ip) {
          return "USER_NOT_CONSENTED" !== (null === ip || void 0 === ip ? void 0 : ip.code) && console.error("Failed to get the signed-in MSN Play player:", ip), null
        }
      }
      async signIn() {
        var pp;
        return null !== (pp = (0, xp.c)()) && void 0 !== pp ? pp : await window.$msstart.signInAsync()
      }
    }
    const Pp = 20,
      Wp = {
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
      yp = {
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
    class Up extends Op.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Dp(), new Up
      }
      playVideoAd(pp, ip) {
        this.playVideoOrRewarded("video", pp, pp)
      }
      playRewarded(pp, ip) {
        this.playVideoOrRewarded("rewarded", pp, ip)
      }
      canShowBloxdAd(pp) {
        for (const ip in yp)
          if (pp.adId in yp[ip]) return !1;
        return !0
      }
      async renderBanner(pp) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Ip.d)(pp)}: msn placement is already showing so not requesting`);
        const ip = yp[pp.adType][pp.adId];
        if ((0, Sp.G)(ip)) return void console.warn(`AD ${(0,Ip.d)(pp)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const cp = [];
        for (const Op of ip)
          for (const pp of Wp[Op])
            if (pp.width <= window.innerWidth - 40 && pp.height <= window.innerHeight - 40) {
              const ip = {
                placement: Op,
                width: pp.width,
                height: pp.height
              };
              if (!cp.some((pp => vp(ip, pp)))) {
                cp.push(ip);
                break
              }
            } if (cp.length > 0) {
          console.log(`AD ${(0,Ip.d)(pp)}: Attempting to show msn units: `, cp);
          const ip = cp.map((pp => `${pp.placement}:${pp.width}x${pp.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Ip.d)(pp),
            renderPromise: window.$msstart.showDisplayAdsAsync(ip).then((() => {
              console.log(`AD ${(0,Ip.d)(pp)}: Successfully request msn banner ad`)
            })).catch((ip => {
              console.log(`AD ${(0,Ip.d)(pp)}: Error while requesting msn banner ad`, ip)
            }))
          }
        } else console.warn(`AD ${(0,Ip.d)(pp)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(pp) {
        null !== this.currentlyShowingBannerPlacement && (0, Ip.d)(pp) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Ip.d)(pp)}: Attempting to clear msn banner ads for banner`, pp), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (pp) {
          console.log("AD: Error while clearing all msn banner ads", pp)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(pp, ip, cp) {
        const Op = ip => {
          console.error(`AD: Error while playing MSN ${pp} ad: `, ip), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), cp()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${pp} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const cp = async () => {
            try {
              const cp = await window.$msstart.loadAdsAsync("rewarded" === pp),
                Op = await window.$msstart.showAdsAsync(cp.instanceId);
              this.clearAllBannerAds(), await Op.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${pp} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ip()
            } catch (cp) {
              Op(cp)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), cp()
        } else Op(`AD: Can't play MSN ${pp} ad because sdk is not loaded`)
      }
    }

    function wp(pp) {
      let ip, cp;
      switch (pp.placement) {
        case "top":
          ip = (window.innerWidth - pp.width) / 2, cp = Pp;
          break;
        case "right":
          ip = window.innerWidth - pp.width - Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10;
          break;
        case "left":
          ip = Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10
      }
      return {
        x1: ip,
        y1: cp,
        x2: ip + pp.width,
        y2: cp + pp.height
      }
    }

    function vp(pp, ip) {
      const cp = wp(pp),
        Op = wp(ip);
      return !(cp.x2 <= Op.x1 || Op.x2 <= cp.x1 || cp.y2 <= Op.y1 || Op.y2 <= cp.y1)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);