export const id = 53;
export const ids = [53];
export const modules = {
  4861: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      MAX_LINES: () => dt,
      MAX_SETTLE_MS: () => mt,
      SETTLE_MS: () => Dt,
      ScrollDebugLog: () => Jt,
      changeText: () => yt,
      elementText: () => Mt,
      fullStateText: () => wt,
      startScrollDebug: () => Ct,
      touchedText: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(2902);
    const Dt = 300,
      mt = 2e3,
      dt = 40,
      jt = 2,
      Ht = {
        vvOffsetTop: "vv offsetTop",
        vvOffsetLeft: "vv offsetLeft",
        vvPageTop: "vv pageTop",
        vvPageLeft: "vv pageLeft",
        vvHeight: "vv height",
        vvScale: "vv scale",
        scrollX: "scrollX",
        scrollY: "scrollY",
        scrollHeight: "scrollHeight",
        innerHeight: "innerHeight"
      },
      Xt = Object.keys(Ht),
      Qt = new Set(["scrollHeight", "innerHeight"]);

    function lt(tt, et) {
      const Vt = 10 ** et;
      return Math.round(tt * Vt) / Vt
    }

    function Et() {
      const tt = window.visualViewport;
      return {
        vvOffsetTop: lt(tt.offsetTop, 1),
        vvOffsetLeft: lt(tt.offsetLeft, 1),
        vvPageTop: lt(tt.pageTop, 1),
        vvPageLeft: lt(tt.pageLeft, 1),
        vvHeight: lt(tt.height, 1),
        vvScale: lt(tt.scale, 3),
        scrollX: lt(window.scrollX, 1),
        scrollY: lt(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function ft(tt, et) {
      return `${Ht[tt]} ${et}`
    }

    function wt(tt) {
      return Xt.map((et => ft(et, String(tt[et])))).join(", ")
    }

    function yt(tt, et, Vt, Ot) {
      return Xt.flatMap((qt => {
        const Dt = tt[qt] !== et[qt],
          mt = Vt[qt] < Math.min(tt[qt], et[qt]) || Ot[qt] > Math.max(tt[qt], et[qt]);
        if (!Dt && !mt && !Qt.has(qt)) return [];
        return [ft(qt, `${Dt?`${tt[qt]} -> ${et[qt]}`:String(et[qt])}${mt?` (via ${Vt[qt]}..${Ot[qt]})`:""}`)]
      })).join(", ")
    }

    function Nt(tt, et, Vt) {
      return Object.fromEntries(Xt.map((Ot => [Ot, Vt(tt[Ot], et[Ot])])))
    }

    function Mt(tt) {
      var et;
      const Vt = (null !== (et = tt.getAttribute("class")) && void 0 !== et ? et : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${tt.tagName.toLowerCase()}${Vt?`.${Vt}`:""}`
    }

    function bt(tt, et) {
      const Vt = [];
      for (let Ot = tt.parentElement; null !== Ot && Vt.length < jt; Ot = Ot.parentElement) {
        const tt = et(Ot);
        "auto" !== tt && Vt.push(`${tt} on ${Mt(Ot)}`)
      }
      return `${Mt(tt)} touch-action ${et(tt)}${Vt.length>0?` (${Vt.join(", ")})`:""}`
    }
    class Jt {
      constructor(tt) {
        this.deps = tt, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const tt = this.deps.now(),
            et = tt - this.lastEventMs;
          if (et < Dt && tt - this.burstStartMs < mt) return void(this.timer = setTimeout(this.settle, Dt - et));
          this.timer = null;
          const Vt = this.deps.read(),
            {
              last: Ot,
              innerScrolled: qt,
              burstTouch: jt
            } = this,
            Ht = Nt(this.low, Vt, Math.min),
            Qt = Nt(this.high, Vt, Math.max);
          if (this.last = Vt, this.low = Vt, this.high = Vt, this.innerScrolled = null, Et = Ht, ft = Qt, Xt.every((tt => Et[tt] === ft[tt])) || !this.burstInGame || !this.deps.inGame()) return;
          var Et, ft;
          if (this.lines === dt) return this.capped = !0, void this.deps.log(`further changes unlogged: ${dt} lines logged`);
          this.lines++;
          const wt = null === jt ? "no touch yet" : `touch on ${jt.text}, ${Math.round(this.burstStartMs-jt.atMs)} ms before`,
            bt = null === qt ? "" : `; inner scroll ${Mt(qt)} scrollTop ${lt(qt.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(tt-this.burstStartMs)} ms; ${wt}${bt}: ${yt(Ot,Vt,Ht,Qt)}`)
        }, this.last = tt.read(), this.low = this.last, this.high = this.last, tt.log(`start: ${wt(this.last)}`)
      }
      moved() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const et = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== tt && (null === et || !tt.contains(et.target))) return;
        const Vt = this.deps.now();
        this.lastEventMs = Vt, null === this.timer && (this.burstStartMs = Vt, this.burstInGame = this.deps.inGame(), this.burstTouch = et, this.timer = setTimeout(this.settle, Dt));
        const Ot = this.deps.read();
        this.low = Nt(this.low, Ot, Math.min), this.high = Nt(this.high, Ot, Math.max), this.innerScrolled = null !== tt && void 0 !== tt ? tt : this.innerScrolled
      }
    }

    function Ct() {
      let tt = null;
      const et = new Jt({
        read: Et,
        inGame: () => "inGame" === Ot.b.get("gameState"),
        lastTouch: () => tt,
        log: tt => {
          (0, qt.n)("scroll", tt)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (et => {
        if (et.target instanceof Element) {
          const Vt = bt(et.target, (tt => getComputedStyle(tt).touchAction));
          tt = {
            target: et.target,
            text: Vt,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (tt => {
        et.moved(tt.target instanceof Element ? tt.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const Vt = () => {
        et.moved()
      };
      window.addEventListener("resize", Vt, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", Vt, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", Vt, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);