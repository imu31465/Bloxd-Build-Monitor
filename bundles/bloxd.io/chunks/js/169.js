export const id = 169;
export const ids = [169];
export const modules = {
  7659: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdMsnAccountSdk: () => td,
      MsnSdkAdaptor: () => Hd
    });
    var Wd = md(1410),
      Fd = md(1229),
      Rd = md(4708),
      Xd = md(701),
      Kd = md(1863);
    const hd = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let vd = null;

    function Qd() {
      return vd ??= async function() {
        await (0, Fd.d)(hd, {}, !1);
        for (let dd = 0; dd < 50 && !window.$msstart; dd++) await (0, Xd.S)(100)
      }(), vd
    }
    class td {
      constructor() {}
      static async setup() {
        if (null !== (0, Kd.c)()) return new td;
        try {
          await Promise.race([Qd(), (0, Xd.S)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (dd) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", dd), null
        }
        return window.$msstart ? new td : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const dd = (0, Kd.c)();
        if (null !== dd) return dd;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Xd.S)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (Od) {
          return "USER_NOT_CONSENTED" !== (null === Od || void 0 === Od ? void 0 : Od.code) && console.error("Failed to get the signed-in MSN Play player:", Od), null
        }
      }
      async signIn() {
        var dd;
        return null !== (dd = (0, Kd.c)()) && void 0 !== dd ? dd : await window.$msstart.signInAsync()
      }
    }
    const od = 20,
      Nd = {
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
      qd = {
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
    class Hd extends Wd.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Qd(), new Hd
      }
      playVideoAd(dd, Od) {
        this.playVideoOrRewarded("video", dd, dd)
      }
      playRewarded(dd, Od) {
        this.playVideoOrRewarded("rewarded", dd, Od)
      }
      canShowBloxdAd(dd) {
        for (const Od in qd)
          if (dd.adId in qd[Od]) return !1;
        return !0
      }
      async renderBanner(dd) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Rd.c)(dd)}: msn placement is already showing so not requesting`);
        const Od = qd[dd.adType][dd.adId];
        if ((0, Xd.O)(Od)) return void console.warn(`AD ${(0,Rd.c)(dd)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const md = [];
        for (const Wd of Od)
          for (const dd of Nd[Wd])
            if (dd.width <= window.innerWidth - 40 && dd.height <= window.innerHeight - 40) {
              const Od = {
                placement: Wd,
                width: dd.width,
                height: dd.height
              };
              if (!md.some((dd => bd(Od, dd)))) {
                md.push(Od);
                break
              }
            } if (md.length > 0) {
          console.log(`AD ${(0,Rd.c)(dd)}: Attempting to show msn units: `, md);
          const Od = md.map((dd => `${dd.placement}:${dd.width}x${dd.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Rd.c)(dd),
            renderPromise: window.$msstart.showDisplayAdsAsync(Od).then((() => {
              console.log(`AD ${(0,Rd.c)(dd)}: Successfully request msn banner ad`)
            })).catch((Od => {
              console.log(`AD ${(0,Rd.c)(dd)}: Error while requesting msn banner ad`, Od)
            }))
          }
        } else console.warn(`AD ${(0,Rd.c)(dd)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(dd) {
        null !== this.currentlyShowingBannerPlacement && (0, Rd.c)(dd) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Rd.c)(dd)}: Attempting to clear msn banner ads for banner`, dd), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (dd) {
          console.log("AD: Error while clearing all msn banner ads", dd)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(dd, Od, md) {
        const Wd = Od => {
          console.error(`AD: Error while playing MSN ${dd} ad: `, Od), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), md()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${dd} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const md = async () => {
            try {
              const md = await window.$msstart.loadAdsAsync("rewarded" === dd),
                Wd = await window.$msstart.showAdsAsync(md.instanceId);
              this.clearAllBannerAds(), await Wd.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${dd} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), Od()
            } catch (md) {
              Wd(md)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), md()
        } else Wd(`AD: Can't play MSN ${dd} ad because sdk is not loaded`)
      }
    }

    function yd(dd) {
      let Od, md;
      switch (dd.placement) {
        case "top":
          Od = (window.innerWidth - dd.width) / 2, md = od;
          break;
        case "right":
          Od = window.innerWidth - dd.width - od, md = window.innerHeight / 2 - dd.height / 2 - 10;
          break;
        case "left":
          Od = od, md = window.innerHeight / 2 - dd.height / 2 - 10
      }
      return {
        x1: Od,
        y1: md,
        x2: Od + dd.width,
        y2: md + dd.height
      }
    }

    function bd(dd, Od) {
      const md = yd(dd),
        Wd = yd(Od);
      return !(md.x2 <= Wd.x1 || Wd.x2 <= md.x1 || md.y2 <= Wd.y1 || Wd.y2 <= md.y1)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);