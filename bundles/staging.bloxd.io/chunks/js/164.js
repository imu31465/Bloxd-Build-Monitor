export const id = 164;
export const ids = [164];
export const modules = {
  7359: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CoolMathGamesSdkAdaptor: () => Me
    });
    var ye = He(1300),
      be = He(1119);
    class Me extends ye.d {
      constructor() {
        super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
          console.error("adBreakStartCallback not set")
        }, this.adBreakCompleteCallback = () => {
          console.error("adBreakCompleteCallback not set")
        }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
      }
      doAdBreakStart() {
        this.adBreakStartCallback();
        const ee = document.getElementsByClassName("ads-popup");
        for (const ie of ee) ie instanceof HTMLElement && (ie.style.position = "fixed")
      }
      doAdBreakComplete() {
        this.adBreakCompleteCallback()
      }
      static async setup() {
        return await (0, be.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, be.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Me
      }
      playVideoAd(ee, ie) {
        this.adBreakStartCallback = () => {
          console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
            preventMovement: !0
          })
        }, this.adBreakCompleteCallback = () => {
          console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), ee()
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
for (const ee in modules) Object.freeze(modules[ee]);