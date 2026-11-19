export const id = 142;
export const ids = [142];
export const modules = {
  7792: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdMsnAccountSdk: () => pz,
      MsnSdkAdaptor: () => Rz,
      msnMockIdentityStorageKey: () => tz
    });
    var Ez = bz(1288),
      nz = bz(1171),
      iz = bz(3210),
      lz = bz(588);
    bz(33);
    const Mz = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      tz = "msnMockIdentity";
    let Hz = null;

    function Oz() {
      return Hz ??= async function() {
        await (0, nz.e)(Mz, {}, !1);
        for (let zz = 0; zz < 50 && !window.$msstart; zz++) await (0, lz.L)(100)
      }(), Hz
    }
    class pz {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([Oz(), (0, lz.L)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (zz) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", zz), null
        }
        return window.$msstart ? new pz : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, lz.L)(1e4).then((() => {
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
    const dz = 20,
      Fz = {
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
      Zz = {
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
    class Rz extends Ez.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await Oz(), new Rz
      }
      playVideoAd(zz, uz) {
        this.playVideoOrRewarded("video", zz, zz)
      }
      playRewarded(zz, uz) {
        this.playVideoOrRewarded("rewarded", zz, uz)
      }
      canShowBloxdAd(zz) {
        for (const uz in Zz)
          if (zz.adId in Zz[uz]) return !1;
        return !0
      }
      async renderBanner(zz) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,iz.c)(zz)}: msn placement is already showing so not requesting`);
        const uz = Zz[zz.adType][zz.adId];
        if ((0, lz.F)(uz)) return void console.warn(`AD ${(0,iz.c)(zz)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const bz = [];
        for (const Ez of uz)
          for (const zz of Fz[Ez])
            if (zz.width <= window.innerWidth - 40 && zz.height <= window.innerHeight - 40) {
              const uz = {
                placement: Ez,
                width: zz.width,
                height: zz.height
              };
              if (!bz.some((zz => wz(uz, zz)))) {
                bz.push(uz);
                break
              }
            } if (bz.length > 0) {
          console.log(`AD ${(0,iz.c)(zz)}: Attempting to show msn units: `, bz);
          const uz = bz.map((zz => `${zz.placement}:${zz.width}x${zz.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, iz.c)(zz),
            renderPromise: window.$msstart.showDisplayAdsAsync(uz).then((() => {
              console.log(`AD ${(0,iz.c)(zz)}: Successfully request msn banner ad`)
            })).catch((uz => {
              console.log(`AD ${(0,iz.c)(zz)}: Error while requesting msn banner ad`, uz)
            }))
          }
        } else console.warn(`AD ${(0,iz.c)(zz)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(zz) {
        null !== this.currentlyShowingBannerPlacement && (0, iz.c)(zz) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,iz.c)(zz)}: Attempting to clear msn banner ads for banner`, zz), await this.clearAllBannerAds())
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
      playVideoOrRewarded(zz, uz, bz) {
        const Ez = uz => {
          console.error(`AD: Error while playing MSN ${zz} ad: `, uz), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), bz()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${zz} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const bz = async () => {
            try {
              const bz = await window.$msstart.loadAdsAsync("rewarded" === zz),
                Ez = await window.$msstart.showAdsAsync(bz.instanceId);
              this.clearAllBannerAds(), await Ez.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${zz} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), uz()
            } catch (bz) {
              Ez(bz)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), bz()
        } else Ez(`AD: Can't play MSN ${zz} ad because sdk is not loaded`)
      }
    }

    function Kz(zz) {
      let uz, bz;
      switch (zz.placement) {
        case "top":
          uz = (window.innerWidth - zz.width) / 2, bz = dz;
          break;
        case "right":
          uz = window.innerWidth - zz.width - dz, bz = window.innerHeight / 2 - zz.height / 2 - 10;
          break;
        case "left":
          uz = dz, bz = window.innerHeight / 2 - zz.height / 2 - 10
      }
      return {
        x1: uz,
        y1: bz,
        x2: uz + zz.width,
        y2: bz + zz.height
      }
    }

    function wz(zz, uz) {
      const bz = Kz(zz),
        Ez = Kz(uz);
      return !(bz.x2 <= Ez.x1 || Ez.x2 <= bz.x1 || bz.y2 <= Ez.y1 || Ez.y2 <= bz.y1)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);