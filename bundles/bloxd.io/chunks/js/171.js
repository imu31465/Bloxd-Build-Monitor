export const id = 171;
export const ids = [171];
export const modules = {
  7678: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CoolMathGamesSdkAdaptor: () => ar
    });
    var Zr = Qr(1418),
      Wr = Qr(1240);
    class ar extends Zr.d {
      constructor() {
        super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
          console.error("adBreakStartCallback not set")
        }, this.adBreakCompleteCallback = () => {
          console.error("adBreakCompleteCallback not set")
        }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
      }
      doAdBreakStart() {
        this.adBreakStartCallback();
        const rr = document.getElementsByClassName("ads-popup");
        for (const Sr of rr) Sr instanceof HTMLElement && (Sr.style.position = "fixed")
      }
      doAdBreakComplete() {
        this.adBreakCompleteCallback()
      }
      static async setup() {
        return await (0, Wr.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, Wr.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new ar
      }
      playVideoAd(rr, Sr) {
        this.adBreakStartCallback = () => {
          console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
            preventMovement: !0
          })
        }, this.adBreakCompleteCallback = () => {
          console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), rr()
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
for (const rr in modules) Object.freeze(modules[rr]);