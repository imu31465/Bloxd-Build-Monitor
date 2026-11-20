export const id = 142;
export const ids = [142];
export const modules = {
  7621: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdMsnAccountSdk: () => uz,
      MsnSdkAdaptor: () => Dz,
      msnMockIdentityStorageKey: () => vz
    });
    var Fz = sz(1291),
      Wz = sz(1167),
      Xz = sz(3137),
      Oz = sz(580);
    sz(44);
    const oz = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      vz = "msnMockIdentity";
    let Uz = null;

    function Kz() {
      return Uz ??= async function() {
        await (0, Wz.c)(oz, {}, !1);
        for (let zz = 0; zz < 50 && !window.$msstart; zz++) await (0, Oz.K)(100)
      }(), Uz
    }
    class uz {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Kz(), (0, Oz.K)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (zz) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", zz), null
        }
        return window.$msstart ? new uz : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, Oz.K)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (zz) {
          return "USER_NOT_CONSENTED" !== (null === zz || void 0 === zz ? void 0 : zz.code) && console.error("Failed to get the signed-in MSN Play player:", zz), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const Nz = 20,
      bz = {
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
      wz = {
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
    class Dz extends Fz.d {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Kz(), new Dz
      }
      playVideoAd(zz, tz) {
        this.playVideoOrRewarded("video", zz, zz)
      }
      playRewarded(zz, tz) {
        this.playVideoOrRewarded("rewarded", zz, tz)
      }
      canShowBloxdAd(zz) {
        for (const tz in wz)
          if (zz.adId in wz[tz]) return !1;
        return !0
      }
      async renderBanner(zz) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Xz.c)(zz)}: msn placement is already showing so not requesting`);
        const tz = wz[zz.adType][zz.adId];
        if ((0, Oz.G)(tz)) return void console.warn(`AD ${(0,Xz.c)(zz)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const sz = [];
        for (const Fz of tz)
          for (const zz of bz[Fz])
            if (zz.width <= window.innerWidth - 40 && zz.height <= window.innerHeight - 40) {
              const tz = {
                placement: Fz,
                width: zz.width,
                height: zz.height
              };
              if (!sz.some((zz => Hz(tz, zz)))) {
                sz.push(tz);
                break
              }
            } if (sz.length > 0) {
          console.log(`AD ${(0,Xz.c)(zz)}: Attempting to show msn units: `, sz);
          const tz = sz.map((zz => `${zz.placement}:${zz.width}x${zz.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, Xz.c)(zz),
            renderPromise: window.$msstart.showDisplayAdsAsync(tz).then((() => {
              console.log(`AD ${(0,Xz.c)(zz)}: Successfully request msn banner ad`)
            })).catch((tz => {
              console.log(`AD ${(0,Xz.c)(zz)}: Error while requesting msn banner ad`, tz)
            }))
          }
        } else console.warn(`AD ${(0,Xz.c)(zz)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(zz) {
        null !== this.currentlyShowingBannerPlacement && (0, Xz.c)(zz) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,Xz.c)(zz)}: Attempting to clear msn banner ads for banner`, zz), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (zz) {
          console.log("AD: Error while clearing all msn banner ads", zz)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(zz, tz, sz) {
        const Fz = tz => {
          console.error(`AD: Error while playing MSN ${zz} ad: `, tz), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), sz()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${zz} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const sz = async () => {
            try {
              const sz = await window.$msstart.loadAdsAsync("rewarded" === zz),
                Fz = await window.$msstart.showAdsAsync(sz.instanceId);
              this.clearAllBannerAds(), await Fz.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${zz} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), tz()
            } catch (sz) {
              Fz(sz)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), sz()
        } else Fz(`AD: Can't play MSN ${zz} ad because sdk is not loaded`)
      }
    }

    function gz(zz) {
      let tz, sz;
      switch (zz.placement) {
        case "top":
          tz = (window.innerWidth - zz.width) / 2, sz = Nz;
          break;
        case "right":
          tz = window.innerWidth - zz.width - Nz, sz = window.innerHeight / 2 - zz.height / 2 - 10;
          break;
        case "left":
          tz = Nz, sz = window.innerHeight / 2 - zz.height / 2 - 10
      }
      return {
        x1: tz,
        y1: sz,
        x2: tz + zz.width,
        y2: sz + zz.height
      }
    }

    function Hz(zz, tz) {
      const sz = gz(zz),
        Fz = gz(tz);
      return !(sz.x2 <= Fz.x1 || Fz.x2 <= sz.x1 || sz.y2 <= Fz.y1 || Fz.y2 <= sz.y1)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);