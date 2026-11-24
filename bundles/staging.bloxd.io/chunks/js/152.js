export const id = 152;
export const ids = [152];
export const modules = {
  8343: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CoolMathGamesSdkAdaptor: () => Dt
    });
    var Ot = Vt(1419),
      qt = Vt(1275);
    class Dt extends Ot.e {
      constructor() {
        super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
          console.error("adBreakStartCallback not set")
        }, this.adBreakCompleteCallback = () => {
          console.error("adBreakCompleteCallback not set")
        }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
      }
      doAdBreakStart() {
        this.adBreakStartCallback();
        const tt = document.getElementsByClassName("ads-popup");
        for (const et of tt) et instanceof HTMLElement && (et.style.position = "fixed")
      }
      doAdBreakComplete() {
        this.adBreakCompleteCallback()
      }
      static async setup() {
        return await (0, qt.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, qt.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Dt
      }
      playVideoAd(tt, et) {
        this.adBreakStartCallback = () => {
          console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
            preventMovement: !0
          })
        }, this.adBreakCompleteCallback = () => {
          console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), tt()
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
for (const tt in modules) Object.freeze(modules[tt]);