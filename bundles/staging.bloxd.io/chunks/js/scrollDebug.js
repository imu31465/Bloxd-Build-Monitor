export const id = 53;
export const ids = [53];
export const modules = {
  4881: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      MAX_LINES: () => vB,
      MAX_SETTLE_MS: () => GB,
      SETTLE_MS: () => oB,
      ScrollDebugLog: () => dB,
      changeText: () => qB,
      elementText: () => UB,
      fullStateText: () => gB,
      startScrollDebug: () => CB,
      touchedText: () => WB
    });
    var TB = ZB(20),
      JB = ZB(2973);
    const oB = 300,
      GB = 2e3,
      vB = 40,
      kB = 2,
      cB = {
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
      nB = Object.keys(cB),
      hB = new Set(["scrollHeight", "innerHeight"]);

    function zB(BB, IB) {
      const ZB = 10 ** IB;
      return Math.round(BB * ZB) / ZB
    }

    function FB() {
      const BB = window.visualViewport;
      return {
        vvOffsetTop: zB(BB.offsetTop, 1),
        vvOffsetLeft: zB(BB.offsetLeft, 1),
        vvPageTop: zB(BB.pageTop, 1),
        vvPageLeft: zB(BB.pageLeft, 1),
        vvHeight: zB(BB.height, 1),
        vvScale: zB(BB.scale, 3),
        scrollX: zB(window.scrollX, 1),
        scrollY: zB(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function NB(BB, IB) {
      return `${cB[BB]} ${IB}`
    }

    function gB(BB) {
      return nB.map((IB => NB(IB, String(BB[IB])))).join(", ")
    }

    function qB(BB, IB, ZB, TB) {
      return nB.flatMap((JB => {
        const oB = BB[JB] !== IB[JB],
          GB = ZB[JB] < Math.min(BB[JB], IB[JB]) || TB[JB] > Math.max(BB[JB], IB[JB]);
        if (!oB && !GB && !hB.has(JB)) return [];
        return [NB(JB, `${oB?`${BB[JB]} -> ${IB[JB]}`:String(IB[JB])}${GB?` (via ${ZB[JB]}..${TB[JB]})`:""}`)]
      })).join(", ")
    }

    function yB(BB, IB, ZB) {
      return Object.fromEntries(nB.map((TB => [TB, ZB(BB[TB], IB[TB])])))
    }

    function UB(BB) {
      var IB;
      const ZB = (null !== (IB = BB.getAttribute("class")) && void 0 !== IB ? IB : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${BB.tagName.toLowerCase()}${ZB?`.${ZB}`:""}`
    }

    function WB(BB, IB) {
      const ZB = [];
      for (let TB = BB.parentElement; null !== TB && ZB.length < kB; TB = TB.parentElement) {
        const BB = IB(TB);
        "auto" !== BB && ZB.push(`${BB} on ${UB(TB)}`)
      }
      return `${UB(BB)} touch-action ${IB(BB)}${ZB.length>0?` (${ZB.join(", ")})`:""}`
    }
    class dB {
      constructor(BB) {
        this.deps = BB, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const BB = this.deps.now(),
            IB = BB - this.lastEventMs;
          if (IB < oB && BB - this.burstStartMs < GB) return void(this.timer = setTimeout(this.settle, oB - IB));
          this.timer = null;
          const ZB = this.deps.read(),
            {
              last: TB,
              innerScrolled: JB,
              burstTouch: kB
            } = this,
            cB = yB(this.low, ZB, Math.min),
            hB = yB(this.high, ZB, Math.max);
          if (this.last = ZB, this.low = ZB, this.high = ZB, this.innerScrolled = null, FB = cB, NB = hB, nB.every((BB => FB[BB] === NB[BB])) || !this.burstInGame || !this.deps.inGame()) return;
          var FB, NB;
          if (this.lines === vB) return this.capped = !0, void this.deps.log(`further changes unlogged: ${vB} lines logged`);
          this.lines++;
          const gB = null === kB ? "no touch yet" : `touch on ${kB.text}, ${Math.round(this.burstStartMs-kB.atMs)} ms before`,
            WB = null === JB ? "" : `; inner scroll ${UB(JB)} scrollTop ${zB(JB.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(BB-this.burstStartMs)} ms; ${gB}${WB}: ${qB(TB,ZB,cB,hB)}`)
        }, this.last = BB.read(), this.low = this.last, this.high = this.last, BB.log(`start: ${gB(this.last)}`)
      }
      moved() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const IB = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== BB && (null === IB || !BB.contains(IB.target))) return;
        const ZB = this.deps.now();
        this.lastEventMs = ZB, null === this.timer && (this.burstStartMs = ZB, this.burstInGame = this.deps.inGame(), this.burstTouch = IB, this.timer = setTimeout(this.settle, oB));
        const TB = this.deps.read();
        this.low = yB(this.low, TB, Math.min), this.high = yB(this.high, TB, Math.max), this.innerScrolled = null !== BB && void 0 !== BB ? BB : this.innerScrolled
      }
    }

    function CB() {
      let BB = null;
      const IB = new dB({
        read: FB,
        inGame: () => "inGame" === TB.d.get("gameState"),
        lastTouch: () => BB,
        log: BB => {
          (0, JB.o)("scroll", BB)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (IB => {
        if (IB.target instanceof Element) {
          const ZB = WB(IB.target, (BB => getComputedStyle(BB).touchAction));
          BB = {
            target: IB.target,
            text: ZB,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (BB => {
        IB.moved(BB.target instanceof Element ? BB.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const ZB = () => {
        IB.moved()
      };
      window.addEventListener("resize", ZB, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", ZB, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", ZB, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);