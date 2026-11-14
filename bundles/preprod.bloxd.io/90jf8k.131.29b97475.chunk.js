export const id = 131;
export const ids = [131];
export const modules = {
  7061: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdMsnAccountSdk: () => iW,
      MsnSdkAdaptor: () => rW,
      msnMockIdentityStorageKey: () => dF
    });
    var CF = SF(1171),
      AF = SF(1036),
      uF = SF(2642),
      hF = SF(568);
    SF(33);
    const bW = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
      dF = "msnMockIdentity";
    let PF = null;

    function RF() {
      return PF ??= async function() {
        await (0, AF.e)(bW, {}, !1);
        for (let FF = 0; FF < 50 && !window.$msstart; FF++) await (0, hF.W)(100)
      }(), PF
    }
    class iW {
      constructor() {}
      static async setup() {
        try {
          await Promise.race([RF(), (0, hF.W)(1e4).then((() => {
            throw new Error("Not loaded after 10000ms")
          }))])
        } catch (FF) {
          return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", FF), null
        }
        return window.$msstart ? new iW : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
      }
      async getSignedInUser() {
        try {
          return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, hF.W)(1e4).then((() => {
            throw new Error("No answer after 10000ms")
          }))])
        } catch (FF) {
          return "USER_NOT_CONSENTED" !== (null === FF || void 0 === FF ? void 0 : FF.code) && console.error("Failed to get the signed-in MSN Play player:", FF), null
        }
      }
      async signIn() {
        return null !== null ? null : await window.$msstart.signInAsync()
      }
    }
    const eF = 20,
      EF = {
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
      QF = {
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
    class rW extends CF.b {
      constructor() {
        super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
      }
      static async setup() {
        return await RF(), new rW
      }
      playVideoAd(FF, WF) {
        this.playVideoOrRewarded("video", FF, FF)
      }
      playRewarded(FF, WF) {
        this.playVideoOrRewarded("rewarded", FF, WF)
      }
      canShowBloxdAd(FF) {
        for (const WF in QF)
          if (FF.adId in QF[WF]) return !1;
        return !0
      }
      async renderBanner(FF) {
        if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,uF.c)(FF)}: msn placement is already showing so not requesting`);
        const WF = QF[FF.adType][FF.adId];
        if ((0, hF.Q)(WF)) return void console.warn(`AD ${(0,uF.c)(FF)}: no msn placement is configured for this bloxd placement so not showing any ad`);
        const SF = [];
        for (const CF of WF)
          for (const FF of EF[CF])
            if (FF.width <= window.innerWidth - 40 && FF.height <= window.innerHeight - 40) {
              const WF = {
                placement: CF,
                width: FF.width,
                height: FF.height
              };
              if (!SF.some((FF => tW(WF, FF)))) {
                SF.push(WF);
                break
              }
            } if (SF.length > 0) {
          console.log(`AD ${(0,uF.c)(FF)}: Attempting to show msn units: `, SF);
          const WF = SF.map((FF => `${FF.placement}:${FF.width}x${FF.height}`));
          this.currentlyShowingBannerPlacement = {
            placementId: (0, uF.c)(FF),
            renderPromise: window.$msstart.showDisplayAdsAsync(WF).then((() => {
              console.log(`AD ${(0,uF.c)(FF)}: Successfully request msn banner ad`)
            })).catch((WF => {
              console.log(`AD ${(0,uF.c)(FF)}: Error while requesting msn banner ad`, WF)
            }))
          }
        } else console.warn(`AD ${(0,uF.c)(FF)}: couldn't find an msn unit that fit screen size`)
      }
      async clearBanner(FF) {
        null !== this.currentlyShowingBannerPlacement && (0, uF.c)(FF) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,uF.c)(FF)}: Attempting to clear msn banner ads for banner`, FF), await this.clearAllBannerAds())
      }
      async clearAllBannerAds() {
        try {
          if (this.isCurrentlyClearingAllBanners) return;
          this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
        } catch (FF) {
          console.log("AD: Error while clearing all msn banner ads", FF)
        } finally {
          this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
        }
      }
      playVideoOrRewarded(FF, WF, SF) {
        const CF = WF => {
          console.error(`AD: Error while playing MSN ${FF} ad: `, WF), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), SF()
        };
        if (window.$msstart) {
          console.log(`AD: Attempting to play MSN ${FF} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
          const SF = async () => {
            try {
              const SF = await window.$msstart.loadAdsAsync("rewarded" === FF),
                CF = await window.$msstart.showAdsAsync(SF.instanceId);
              this.clearAllBannerAds(), await CF.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${FF} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), WF()
            } catch (SF) {
              CF(SF)
            }
          };
          window.adStartSoPause(null, {
            preventMovement: !0
          }), SF()
        } else CF(`AD: Can't play MSN ${FF} ad because sdk is not loaded`)
      }
    }

    function gW(FF) {
      let WF, SF;
      switch (FF.placement) {
        case "top":
          WF = (window.innerWidth - FF.width) / 2, SF = eF;
          break;
        case "right":
          WF = window.innerWidth - FF.width - eF, SF = window.innerHeight / 2 - FF.height / 2 - 10;
          break;
        case "left":
          WF = eF, SF = window.innerHeight / 2 - FF.height / 2 - 10
      }
      return {
        x1: WF,
        y1: SF,
        x2: WF + FF.width,
        y2: SF + FF.height
      }
    }

    function tW(FF, WF) {
      const SF = gW(FF),
        CF = gW(WF);
      return !(SF.x2 <= CF.x1 || CF.x2 <= SF.x1 || SF.y2 <= CF.y1 || CF.y2 <= SF.y1)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);