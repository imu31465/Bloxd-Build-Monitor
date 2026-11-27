export const id = 162;
export const ids = [162];
export const modules = {
  7349: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdMsnAccountSdk: () => Re,
      MsnSdkAdaptor: () => Te
    });
    var ye = He(1300),
      be = He(1119),
      Me = He(3856),
      Ke = He(610),
      Ue = He(1737);
    const Fe = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
    let Je = null;

    function oe() {
      return Je ??= async function() {
        await (0, be.b)(Fe, {}, !1);
        for (let ee = 0; ee < 50 && !window.$msstart; ee++) await (0, Ke.U)(100)
      }(), Je
    }
    class Re {
      constructor() {}
      static async setup() {
        if (null !== (0, Ue.c)()) return new Re;
        try {
          await Promise.race([oe(), (0, Ke.U)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (ee) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", ee), null
        }
        return window.$msstart ? new Re : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        const ee = (0, Ue.c)();
        if (null !== ee) return ee;
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Ke.U)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (ie) {
          return "USER_NOT_CONSENTED" !== (null === ie || void 0 === ie ? void 0 : ie.code) && console.error("Failed to get the signed-in MSN Play player:", ie), null
        }
      }
      async signIn() {
        var ee;
        return null !== (ee = (0, Ue.c)()) && void 0 !== ee ? ee : await window.$msstart.signInAsync()
      }
    }
    const ke = 20,
      qe = {
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
      fe = {
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
    class Te extends ye.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await oe(), new Te
      }
      playVideoAd(ee, ie) {
        this.playVideoOrRewarded("video", ee, ee)
      }
      playRewarded(ee, ie) {
        this.playVideoOrRewarded("rewarded", ee, ie)
      }
      canShowBloxdAd(ee) {
        for (const ie in fe)
          if (ee.adId in fe[ie]) return !1;
        return !0
      }
      async renderBanner(ee) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Me.c)(ee)}: msn placement is already showing so not requesting`);
        const ie = fe[ee.adType][ee.adId];
        if ((0, Ke.P)(ie)) return void console.warn(`AD ${(0,Me.c)(ee)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const He = [];
        for (const ye of ie)
          for (const ee of qe[ye])
            if (ee.width <= window.innerWidth - 40 && ee.height <= window.innerHeight - 40) {
              const ie = {
                placement: ye,
                width: ee.width,
                height: ee.height
              };
              if (!He.some((ee => Xe(ie, ee)))) {
                He.push(ie);
                break
              }
            } if (He.length > 0) {
          console.log(`AD ${(0,Me.c)(ee)}: Attempting to show msn units: `, He);
          const ie = He.map((ee => `${ee.placement}:${ee.width}x${ee.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Me.c)(ee),
            renderPromise: window.$msstart.showDisplayAdsAsync(ie).then((() => {
              console.log(`AD ${(0,Me.c)(ee)}: Successfully request msn banner ad`)
            })).catch((ie => {
              console.log(`AD ${(0,Me.c)(ee)}: Error while requesting msn banner ad`, ie)
            }))
          }
        } else console.warn(`AD ${(0,Me.c)(ee)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(ee) {
        null !== this.currentlyShowingBannerPlacement && (0, Me.c)(ee) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Me.c)(ee)}: Attempting to clear msn banner ads for banner`, ee), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (ee) {
          console.log("AD: Error while clearing all msn banner ads", ee)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(ee, ie, He) {
        const ye = ie => {
          console.error(`AD: Error while playing MSN ${ee} ad: `, ie), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), He()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${ee} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const He = async () => {
            try {
              const He = await window.$msstart.loadAdsAsync("rewarded" === ee),
                ye = await window.$msstart.showAdsAsync(He.instanceId);
              this.clearAllBannerAds(), await ye.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${ee} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), ie()
            } catch (He) {
              ye(He)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), He()
        } else ye(`AD: Can't play MSN ${ee} ad because sdk is not loaded`)
      }
    }

    function pe(ee) {
      let ie, He;
      switch (ee.placement) {
        case "top":
          ie = (window.innerWidth - ee.width) / 2, He = ke;
          break;
        case "right":
          ie = window.innerWidth - ee.width - ke, He = window.innerHeight / 2 - ee.height / 2 - 10;
          break;
        case "left":
          ie = ke, He = window.innerHeight / 2 - ee.height / 2 - 10
      }
      return {
        x1: ie,
        y1: He,
        x2: ie + ee.width,
        y2: He + ee.height
      }
    }

    function Xe(ee, ie) {
      const He = pe(ee),
        ye = pe(ie);
      return !(He.x2 <= ye.x1 || ye.x2 <= He.x1 || He.y2 <= ye.y1 || ye.y2 <= He.y1)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);