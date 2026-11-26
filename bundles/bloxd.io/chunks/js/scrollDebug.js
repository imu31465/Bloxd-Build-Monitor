export const id = 60;
export const ids = [60];
export const modules = {
  5175: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      MAX_LINES: () => jB,
      MAX_SETTLE_MS: () => oB,
      SETTLE_MS: () => QB,
      ScrollDebugLog: () => AB,
      changeText: () => ZB,
      elementText: () => RB,
      fullStateText: () => qB,
      startScrollDebug: () => VB,
      touchedText: () => WB
    });
    var YB = GB(16),
      DB = GB(3136);
    const QB = 300,
      oB = 2e3,
      jB = 40,
      yB = 2,
      JB = {
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
      MB = Object.keys(JB),
      PB = new Set(["scrollHeight", "innerHeight"]);

    function zB(BB, OB) {
      const GB = 10 ** OB;
      return Math.round(BB * GB) / GB
    }

    function lB() {
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

    function pB(BB, OB) {
      return `${JB[BB]} ${OB}`
    }

    function qB(BB) {
      return MB.map((OB => pB(OB, String(BB[OB])))).join(", ")
    }

    function ZB(BB, OB, GB, YB) {
      return MB.flatMap((DB => {
        const QB = BB[DB] !== OB[DB],
          oB = GB[DB] < Math.min(BB[DB], OB[DB]) || YB[DB] > Math.max(BB[DB], OB[DB]);
        if (!QB && !oB && !PB.has(DB)) return [];
        return [pB(DB, `${QB?`${BB[DB]} -> ${OB[DB]}`:String(OB[DB])}${oB?` (via ${GB[DB]}..${YB[DB]})`:""}`)]
      })).join(", ")
    }

    function NB(BB, OB, GB) {
      return Object.fromEntries(MB.map((YB => [YB, GB(BB[YB], OB[YB])])))
    }

    function RB(BB) {
      var OB;
      const GB = (null !== (OB = BB.getAttribute("class")) && void 0 !== OB ? OB : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${BB.tagName.toLowerCase()}${GB?`.${GB}`:""}`
    }

    function WB(BB, OB) {
      const GB = [];
      for (let YB = BB.parentElement; null !== YB && GB.length < yB; YB = YB.parentElement) {
        const BB = OB(YB);
        "auto" !== BB && GB.push(`${BB} on ${RB(YB)}`)
      }
      return `${RB(BB)} touch-action ${OB(BB)}${GB.length>0?` (${GB.join(", ")})`:""}`
    }
    class AB {
      constructor(BB) {
        this.deps = BB, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const BB = this.deps.now(),
            OB = BB - this.lastEventMs;
          if (OB < QB && BB - this.burstStartMs < oB) return void(this.timer = setTimeout(this.settle, QB - OB));
          this.timer = null;
          const GB = this.deps.read(),
            {
              last: YB,
              innerScrolled: DB,
              burstTouch: yB
            } = this,
            JB = NB(this.low, GB, Math.min),
            PB = NB(this.high, GB, Math.max);
          if (this.last = GB, this.low = GB, this.high = GB, this.innerScrolled = null, lB = JB, pB = PB, MB.every((BB => lB[BB] === pB[BB])) || !this.burstInGame || !this.deps.inGame()) return;
          var lB, pB;
          if (this.lines === jB) return this.capped = !0, void this.deps.log(`further changes unlogged: ${jB} lines logged`);
          this.lines++;
          const qB = null === yB ? "no touch yet" : `touch on ${yB.text}, ${Math.round(this.burstStartMs-yB.atMs)} ms before`,
            WB = null === DB ? "" : `; inner scroll ${RB(DB)} scrollTop ${zB(DB.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(BB-this.burstStartMs)} ms; ${qB}${WB}: ${ZB(YB,GB,JB,PB)}`)
        }, this.last = BB.read(), this.low = this.last, this.high = this.last, BB.log(`start: ${qB(this.last)}`)
      }
      moved() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const OB = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== BB && (null === OB || !BB.contains(OB.target))) return;
        const GB = this.deps.now();
        this.lastEventMs = GB, null === this.timer && (this.burstStartMs = GB, this.burstInGame = this.deps.inGame(), this.burstTouch = OB, this.timer = setTimeout(this.settle, QB));
        const YB = this.deps.read();
        this.low = NB(this.low, YB, Math.min), this.high = NB(this.high, YB, Math.max), this.innerScrolled = null !== BB && void 0 !== BB ? BB : this.innerScrolled
      }
    }

    function VB() {
      let BB = null;
      const OB = new AB({
        read: lB,
        inGame: () => "inGame" === YB.c.get("gameState"),
        lastTouch: () => BB,
        log: BB => {
          (0, DB.m)("scroll", BB)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (OB => {
        if (OB.target instanceof Element) {
          const GB = WB(OB.target, (BB => getComputedStyle(BB).touchAction));
          BB = {
            target: OB.target,
            text: GB,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (BB => {
        OB.moved(BB.target instanceof Element ? BB.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const GB = () => {
        OB.moved()
      };
      window.addEventListener("resize", GB, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", GB, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", GB, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);