export const id = 53;
export const ids = [53];
export const modules = {
  4792: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      MAX_LINES: () => NB,
      MAX_SETTLE_MS: () => IB,
      SETTLE_MS: () => dB,
      ScrollDebugLog: () => gB,
      changeText: () => yB,
      elementText: () => GB,
      fullStateText: () => mB,
      startScrollDebug: () => tB,
      touchedText: () => LB
    });
    var QB = zB(28),
      nB = zB(2912);
    const dB = 300,
      IB = 2e3,
      NB = 40,
      uB = 2,
      UB = {
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
      aB = Object.keys(UB),
      pB = new Set(["scrollHeight", "innerHeight"]);

    function rB(BB, jB) {
      const zB = 10 ** jB;
      return Math.round(BB * zB) / zB
    }

    function sB() {
      const BB = window.visualViewport;
      return {
        vvOffsetTop: rB(BB.offsetTop, 1),
        vvOffsetLeft: rB(BB.offsetLeft, 1),
        vvPageTop: rB(BB.pageTop, 1),
        vvPageLeft: rB(BB.pageLeft, 1),
        vvHeight: rB(BB.height, 1),
        vvScale: rB(BB.scale, 3),
        scrollX: rB(window.scrollX, 1),
        scrollY: rB(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function JB(BB, jB) {
      return `${UB[BB]} ${jB}`
    }

    function mB(BB) {
      return aB.map((jB => JB(jB, String(BB[jB])))).join(", ")
    }

    function yB(BB, jB, zB, QB) {
      return aB.flatMap((nB => {
        const dB = BB[nB] !== jB[nB],
          IB = zB[nB] < Math.min(BB[nB], jB[nB]) || QB[nB] > Math.max(BB[nB], jB[nB]);
        if (!dB && !IB && !pB.has(nB)) return [];
        return [JB(nB, `${dB?`${BB[nB]} -> ${jB[nB]}`:String(jB[nB])}${IB?` (via ${zB[nB]}..${QB[nB]})`:""}`)]
      })).join(", ")
    }

    function kB(BB, jB, zB) {
      return Object.fromEntries(aB.map((QB => [QB, zB(BB[QB], jB[QB])])))
    }

    function GB(BB) {
      var jB;
      const zB = (null !== (jB = BB.getAttribute("class")) && void 0 !== jB ? jB : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${BB.tagName.toLowerCase()}${zB?`.${zB}`:""}`
    }

    function LB(BB, jB) {
      const zB = [];
      for (let QB = BB.parentElement; null !== QB && zB.length < uB; QB = QB.parentElement) {
        const BB = jB(QB);
        "auto" !== BB && zB.push(`${BB} on ${GB(QB)}`)
      }
      return `${GB(BB)} touch-action ${jB(BB)}${zB.length>0?` (${zB.join(", ")})`:""}`
    }
    class gB {
      constructor(BB) {
        this.deps = BB, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const BB = this.deps.now(),
            jB = BB - this.lastEventMs;
          if (jB < dB && BB - this.burstStartMs < IB) return void(this.timer = setTimeout(this.settle, dB - jB));
          this.timer = null;
          const zB = this.deps.read(),
            {
              last: QB,
              innerScrolled: nB,
              burstTouch: uB
            } = this,
            UB = kB(this.low, zB, Math.min),
            pB = kB(this.high, zB, Math.max);
          if (this.last = zB, this.low = zB, this.high = zB, this.innerScrolled = null, sB = UB, JB = pB, aB.every((BB => sB[BB] === JB[BB])) || !this.burstInGame || !this.deps.inGame()) return;
          var sB, JB;
          if (this.lines === NB) return this.capped = !0, void this.deps.log(`further changes unlogged: ${NB} lines logged`);
          this.lines++;
          const mB = null === uB ? "no touch yet" : `touch on ${uB.text}, ${Math.round(this.burstStartMs-uB.atMs)} ms before`,
            LB = null === nB ? "" : `; inner scroll ${GB(nB)} scrollTop ${rB(nB.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(BB-this.burstStartMs)} ms; ${mB}${LB}: ${yB(QB,zB,UB,pB)}`)
        }, this.last = BB.read(), this.low = this.last, this.high = this.last, BB.log(`start: ${mB(this.last)}`)
      }
      moved() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const jB = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== BB && (null === jB || !BB.contains(jB.target))) return;
        const zB = this.deps.now();
        this.lastEventMs = zB, null === this.timer && (this.burstStartMs = zB, this.burstInGame = this.deps.inGame(), this.burstTouch = jB, this.timer = setTimeout(this.settle, dB));
        const QB = this.deps.read();
        this.low = kB(this.low, QB, Math.min), this.high = kB(this.high, QB, Math.max), this.innerScrolled = null !== BB && void 0 !== BB ? BB : this.innerScrolled
      }
    }

    function tB() {
      let BB = null;
      const jB = new gB({
        read: sB,
        inGame: () => "inGame" === QB.c.get("gameState"),
        lastTouch: () => BB,
        log: BB => {
          (0, nB.n)("scroll", BB)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (jB => {
        if (jB.target instanceof Element) {
          const zB = LB(jB.target, (BB => getComputedStyle(BB).touchAction));
          BB = {
            target: jB.target,
            text: zB,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (BB => {
        jB.moved(BB.target instanceof Element ? BB.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const zB = () => {
        jB.moved()
      };
      window.addEventListener("resize", zB, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", zB, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", zB, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);