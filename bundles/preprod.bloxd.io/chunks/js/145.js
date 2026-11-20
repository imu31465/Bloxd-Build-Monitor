export const id = 145;
export const ids = [145];
export const modules = {
  8023: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CoolMathGamesSdkAdaptor: () => Oq
    });
    var Yq = gq(1304),
      lq = gq(1171);
    class Oq extends Yq.e {
      constructor() {
        super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
          console.error("adBreakStartCallback not set")
        }, this.adBreakCompleteCallback = () => {
          console.error("adBreakCompleteCallback not set")
        }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
      }
      doAdBreakStart() {
        this.adBreakStartCallback();
        const qq = document.getElementsByClassName("ads-popup");
        for (const Eq of qq) Eq instanceof HTMLElement && (Eq.style.position = "fixed")
      }
      doAdBreakComplete() {
        this.adBreakCompleteCallback()
      }
      static async setup() {
        return await (0, lq.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, lq.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Oq
      }
      playVideoAd(qq, Eq) {
        this.adBreakStartCallback = () => {
          console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
            preventMovement: !0
          })
        }, this.adBreakCompleteCallback = () => {
          console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), qq()
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
for (const qq in modules) Object.freeze(modules[qq]);