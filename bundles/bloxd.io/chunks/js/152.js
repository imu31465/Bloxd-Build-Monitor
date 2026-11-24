export const id = 152;
export const ids = [152];
export const modules = {
  8225: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CoolMathGamesSdkAdaptor: () => MT
    });
    var WT = mT(1423),
      zT = mT(1277);
    class MT extends WT.d {
      constructor() {
        super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
          console.error("adBreakStartCallback not set")
        }, this.adBreakCompleteCallback = () => {
          console.error("adBreakCompleteCallback not set")
        }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
      }
      doAdBreakStart() {
        this.adBreakStartCallback();
        const TT = document.getElementsByClassName("ads-popup");
        for (const UT of TT) UT instanceof HTMLElement && (UT.style.position = "fixed")
      }
      doAdBreakComplete() {
        this.adBreakCompleteCallback()
      }
      static async setup() {
        return await (0, zT.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, zT.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new MT
      }
      playVideoAd(TT, UT) {
        this.adBreakStartCallback = () => {
          console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
            preventMovement: !0
          })
        }, this.adBreakCompleteCallback = () => {
          console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), TT()
        }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
      }
      onGameplayStart() {
        try {
          window.parent.cmgGameEvent("start")
        } catch {
          console.log("Couldn't access cmgGameEvent on parent")
        }
      }
      onGameplayStop() {}
      onGameEntered() {
        try {
          window.parent.cmgGameEvent("start")
        } catch {
          console.log("Couldn't access cmgGameEvent on parent")
        }
      }
      onGameExited() {}
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);