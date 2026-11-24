export const id = 52;
export const ids = [52];
export const modules = {
  4646: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      MAX_LINES: () => wm,
      MAX_SETTLE_MS: () => xm,
      SETTLE_MS: () => am,
      ScrollDebugLog: () => Km,
      changeText: () => qm,
      elementText: () => Vm,
      fullStateText: () => Ym,
      startScrollDebug: () => Qm,
      touchedText: () => Im
    });
    var hm = fm(23),
      Am = fm(2813);
    const am = 300,
      xm = 2e3,
      wm = 40,
      Dm = 2,
      im = {
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
      Rm = Object.keys(im),
      pm = new Set(["scrollHeight", "innerHeight"]);

    function Em(mm, Tm) {
      const fm = 10 ** Tm;
      return Math.round(mm * fm) / fm
    }

    function om() {
      const mm = window.visualViewport;
      return {
        vvOffsetTop: Em(mm.offsetTop, 1),
        vvOffsetLeft: Em(mm.offsetLeft, 1),
        vvPageTop: Em(mm.pageTop, 1),
        vvPageLeft: Em(mm.pageLeft, 1),
        vvHeight: Em(mm.height, 1),
        vvScale: Em(mm.scale, 3),
        scrollX: Em(window.scrollX, 1),
        scrollY: Em(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function Om(mm, Tm) {
      return `${im[mm]} ${Tm}`
    }

    function Ym(mm) {
      return Rm.map((Tm => Om(Tm, String(mm[Tm])))).join(", ")
    }

    function qm(mm, Tm, fm, hm) {
      return Rm.flatMap((Am => {
        const am = mm[Am] !== Tm[Am],
          xm = fm[Am] < Math.min(mm[Am], Tm[Am]) || hm[Am] > Math.max(mm[Am], Tm[Am]);
        if (!am && !xm && !pm.has(Am)) return [];
        return [Om(Am, `${am?`${mm[Am]} -> ${Tm[Am]}`:String(Tm[Am])}${xm?` (via ${fm[Am]}..${hm[Am]})`:""}`)]
      })).join(", ")
    }

    function jm(mm, Tm, fm) {
      return Object.fromEntries(Rm.map((hm => [hm, fm(mm[hm], Tm[hm])])))
    }

    function Vm(mm) {
      var Tm;
      const fm = (null !== (Tm = mm.getAttribute("class")) && void 0 !== Tm ? Tm : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${mm.tagName.toLowerCase()}${fm?`.${fm}`:""}`
    }

    function Im(mm, Tm) {
      const fm = [];
      for (let hm = mm.parentElement; null !== hm && fm.length < Dm; hm = hm.parentElement) {
        const mm = Tm(hm);
        "auto" !== mm && fm.push(`${mm} on ${Vm(hm)}`)
      }
      return `${Vm(mm)} touch-action ${Tm(mm)}${fm.length>0?` (${fm.join(", ")})`:""}`
    }
    class Km {
      constructor(mm) {
        this.deps = mm, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const mm = this.deps.now(),
            Tm = mm - this.lastEventMs;
          if (Tm < am && mm - this.burstStartMs < xm) return void(this.timer = setTimeout(this.settle, am - Tm));
          this.timer = null;
          const fm = this.deps.read(),
            {
              last: hm,
              innerScrolled: Am,
              burstTouch: Dm
            } = this,
            im = jm(this.low, fm, Math.min),
            pm = jm(this.high, fm, Math.max);
          if (this.last = fm, this.low = fm, this.high = fm, this.innerScrolled = null, om = im, Om = pm, Rm.every((mm => om[mm] === Om[mm])) || !this.burstInGame || !this.deps.inGame()) return;
          var om, Om;
          if (this.lines === wm) return this.capped = !0, void this.deps.log(`further changes unlogged: ${wm} lines logged`);
          this.lines++;
          const Ym = null === Dm ? "no touch yet" : `touch on ${Dm.text}, ${Math.round(this.burstStartMs-Dm.atMs)} ms before`,
            Im = null === Am ? "" : `; inner scroll ${Vm(Am)} scrollTop ${Em(Am.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(mm-this.burstStartMs)} ms; ${Ym}${Im}: ${qm(hm,fm,im,pm)}`)
        }, this.last = mm.read(), this.low = this.last, this.high = this.last, mm.log(`start: ${Ym(this.last)}`)
      }
      moved() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const Tm = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== mm && (null === Tm || !mm.contains(Tm.target))) return;
        const fm = this.deps.now();
        this.lastEventMs = fm, null === this.timer && (this.burstStartMs = fm, this.burstInGame = this.deps.inGame(), this.burstTouch = Tm, this.timer = setTimeout(this.settle, am));
        const hm = this.deps.read();
        this.low = jm(this.low, hm, Math.min), this.high = jm(this.high, hm, Math.max), this.innerScrolled = null !== mm && void 0 !== mm ? mm : this.innerScrolled
      }
    }

    function Qm() {
      let mm = null;
      const Tm = new Km({
        read: om,
        inGame: () => "inGame" === hm.c.get("gameState"),
        lastTouch: () => mm,
        log: mm => {
          (0, Am.g)("scroll", mm)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (Tm => {
        if (Tm.target instanceof Element) {
          const fm = Im(Tm.target, (mm => getComputedStyle(mm).touchAction));
          mm = {
            target: Tm.target,
            text: fm,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (mm => {
        Tm.moved(mm.target instanceof Element ? mm.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const fm = () => {
        Tm.moved()
      };
      window.addEventListener("resize", fm, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", fm, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", fm, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);