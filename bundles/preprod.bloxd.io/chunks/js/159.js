export const id = 159;
export const ids = [159];
export const modules = {
  8517: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AditudeSdkAdaptor: () => zQ
    });
    var wQ = XQ(1368),
      qQ = XQ(1216);
    const TQ = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class zQ extends wQ.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, qQ.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new zQ
      }
      playVideoAd(QQ, WQ) {
        this.playVideoOrRewarded("video", QQ, QQ)
      }
      playRewarded(QQ, WQ) {
        this.playVideoOrRewarded("rewarded", QQ, WQ)
      }
      renderBanner(QQ) {
        const WQ = this.getBaseDivId(QQ.adId, QQ.width, QQ.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: QQ.divId,
            baseDivId: WQ
          }])
        }))
      }
      getBaseDivId(QQ, WQ, XQ) {
        return `pb-slot-bloxdio-${WQ}-${XQ}${QQ>1?`-${QQ}`:""}`
      }
      playVideoOrRewarded(QQ, WQ, XQ) {
        var wQ;
        let qQ = !1;
        const zQ = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", qQ = !0
          },
          sQ = (QQ, WQ) => {
            console.error(`AD: Error while playing Aditude video ad: ${QQ}:`, WQ), zQ(), XQ()
          };
        if (console.log(`AD: Requesting Aditude ${QQ} ad`), void 0 === (null === (wQ = window.tude) || void 0 === wQ ? void 0 : wQ.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${QQ} ad playing`), void sQ("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: TQ[QQ],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((XQ => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), XQ.on("playerClose", ((XQ, wQ) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${QQ} ad`), zQ(), WQ()
              })).on("adPrefetchError", ((QQ, WQ) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), sQ("Prefetch error", WQ)
              })).on("adError", ((QQ, WQ) => {
                console.log("AD: Inside Aditude player.on adError"), sQ("Generic error", WQ)
              }));
              const wQ = QQ => {
                setTimeout((() => {
                  qQ || XQ.setVideoVolume(.5)
                }), QQ)
              };
              wQ(500), wQ(1e3), wQ(1500), wQ(2e3)
            })).catch((QQ => {
              sQ("Error occurred while requesting instream player", QQ)
            }))
          } catch (XQ) {
            sQ("Failed to request instream player", XQ)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);