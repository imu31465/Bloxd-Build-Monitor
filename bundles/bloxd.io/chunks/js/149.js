export const id = 149;
export const ids = [149];
export const modules = {
  7933: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AditudeSdkAdaptor: () => DQ
    });
    var LQ = wQ(1335),
      qQ = wQ(1196);
    const oQ = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class DQ extends LQ.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, qQ.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new DQ
      }
      playVideoAd(QQ, FQ) {
        this.playVideoOrRewarded("video", QQ, QQ)
      }
      playRewarded(QQ, FQ) {
        this.playVideoOrRewarded("rewarded", QQ, FQ)
      }
      renderBanner(QQ) {
        const FQ = this.getBaseDivId(QQ.adId, QQ.width, QQ.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: QQ.divId,
            baseDivId: FQ
          }])
        }))
      }
      getBaseDivId(QQ, FQ, wQ) {
        return `pb-slot-bloxdio-${FQ}-${wQ}${QQ>1?`-${QQ}`:""}`
      }
      playVideoOrRewarded(QQ, FQ, wQ) {
        var LQ;
        let qQ = !1;
        const DQ = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", qQ = !0
          },
          kQ = (QQ, FQ) => {
            console.error(`AD: Error while playing Aditude video ad: ${QQ}:`, FQ), DQ(), wQ()
          };
        if (console.log(`AD: Requesting Aditude ${QQ} ad`), void 0 === (null === (LQ = window.tude) || void 0 === LQ ? void 0 : LQ.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${QQ} ad playing`), void kQ("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: oQ[QQ],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((wQ => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), wQ.on("playerClose", ((wQ, LQ) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${QQ} ad`), DQ(), FQ()
              })).on("adPrefetchError", ((QQ, FQ) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), kQ("Prefetch error", FQ)
              })).on("adError", ((QQ, FQ) => {
                console.log("AD: Inside Aditude player.on adError"), kQ("Generic error", FQ)
              }));
              const LQ = QQ => {
                setTimeout((() => {
                  qQ || wQ.setVideoVolume(.5)
                }), QQ)
              };
              LQ(500), LQ(1e3), LQ(1500), LQ(2e3)
            })).catch((QQ => {
              kQ("Error occurred while requesting instream player", QQ)
            }))
          } catch (wQ) {
            kQ("Failed to request instream player", wQ)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);