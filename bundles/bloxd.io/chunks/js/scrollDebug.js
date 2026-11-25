export const id = 59;
export const ids = [59];
export const modules = {
  5083: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      MAX_LINES: () => PM,
      MAX_SETTLE_MS: () => aM,
      SETTLE_MS: () => jM,
      ScrollDebugLog: () => UM,
      changeText: () => dM,
      elementText: () => lM,
      fullStateText: () => JM,
      startScrollDebug: () => GM,
      touchedText: () => EM
    });
    var OM = iM(19),
      SM = iM(3122);
    const jM = 300,
      aM = 2e3,
      PM = 40,
      nM = 2,
      QM = {
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
      zM = Object.keys(QM),
      LM = new Set(["scrollHeight", "innerHeight"]);

    function mM(MM, rM) {
      const iM = 10 ** rM;
      return Math.round(MM * iM) / iM
    }

    function HM() {
      const MM = window.visualViewport;
      return {
        vvOffsetTop: mM(MM.offsetTop, 1),
        vvOffsetLeft: mM(MM.offsetLeft, 1),
        vvPageTop: mM(MM.pageTop, 1),
        vvPageLeft: mM(MM.pageLeft, 1),
        vvHeight: mM(MM.height, 1),
        vvScale: mM(MM.scale, 3),
        scrollX: mM(window.scrollX, 1),
        scrollY: mM(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function hM(MM, rM) {
      return `${QM[MM]} ${rM}`
    }

    function JM(MM) {
      return zM.map((rM => hM(rM, String(MM[rM])))).join(", ")
    }

    function dM(MM, rM, iM, OM) {
      return zM.flatMap((SM => {
        const jM = MM[SM] !== rM[SM],
          aM = iM[SM] < Math.min(MM[SM], rM[SM]) || OM[SM] > Math.max(MM[SM], rM[SM]);
        if (!jM && !aM && !LM.has(SM)) return [];
        return [hM(SM, `${jM?`${MM[SM]} -> ${rM[SM]}`:String(rM[SM])}${aM?` (via ${iM[SM]}..${OM[SM]})`:""}`)]
      })).join(", ")
    }

    function yM(MM, rM, iM) {
      return Object.fromEntries(zM.map((OM => [OM, iM(MM[OM], rM[OM])])))
    }

    function lM(MM) {
      var rM;
      const iM = (null !== (rM = MM.getAttribute("class")) && void 0 !== rM ? rM : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${MM.tagName.toLowerCase()}${iM?`.${iM}`:""}`
    }

    function EM(MM, rM) {
      const iM = [];
      for (let OM = MM.parentElement; null !== OM && iM.length < nM; OM = OM.parentElement) {
        const MM = rM(OM);
        "auto" !== MM && iM.push(`${MM} on ${lM(OM)}`)
      }
      return `${lM(MM)} touch-action ${rM(MM)}${iM.length>0?` (${iM.join(", ")})`:""}`
    }
    class UM {
      constructor(MM) {
        this.deps = MM, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const MM = this.deps.now(),
            rM = MM - this.lastEventMs;
          if (rM < jM && MM - this.burstStartMs < aM) return void(this.timer = setTimeout(this.settle, jM - rM));
          this.timer = null;
          const iM = this.deps.read(),
            {
              last: OM,
              innerScrolled: SM,
              burstTouch: nM
            } = this,
            QM = yM(this.low, iM, Math.min),
            LM = yM(this.high, iM, Math.max);
          if (this.last = iM, this.low = iM, this.high = iM, this.innerScrolled = null, HM = QM, hM = LM, zM.every((MM => HM[MM] === hM[MM])) || !this.burstInGame || !this.deps.inGame()) return;
          var HM, hM;
          if (this.lines === PM) return this.capped = !0, void this.deps.log(`further changes unlogged: ${PM} lines logged`);
          this.lines++;
          const JM = null === nM ? "no touch yet" : `touch on ${nM.text}, ${Math.round(this.burstStartMs-nM.atMs)} ms before`,
            EM = null === SM ? "" : `; inner scroll ${lM(SM)} scrollTop ${mM(SM.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(MM-this.burstStartMs)} ms; ${JM}${EM}: ${dM(OM,iM,QM,LM)}`)
        }, this.last = MM.read(), this.low = this.last, this.high = this.last, MM.log(`start: ${JM(this.last)}`)
      }
      moved() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const rM = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== MM && (null === rM || !MM.contains(rM.target))) return;
        const iM = this.deps.now();
        this.lastEventMs = iM, null === this.timer && (this.burstStartMs = iM, this.burstInGame = this.deps.inGame(), this.burstTouch = rM, this.timer = setTimeout(this.settle, jM));
        const OM = this.deps.read();
        this.low = yM(this.low, OM, Math.min), this.high = yM(this.high, OM, Math.max), this.innerScrolled = null !== MM && void 0 !== MM ? MM : this.innerScrolled
      }
    }

    function GM() {
      let MM = null;
      const rM = new UM({
        read: HM,
        inGame: () => "inGame" === OM.d.get("gameState"),
        lastTouch: () => MM,
        log: MM => {
          (0, SM.k)("scroll", MM)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (rM => {
        if (rM.target instanceof Element) {
          const iM = EM(rM.target, (MM => getComputedStyle(MM).touchAction));
          MM = {
            target: rM.target,
            text: iM,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (MM => {
        rM.moved(MM.target instanceof Element ? MM.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const iM = () => {
        rM.moved()
      };
      window.addEventListener("resize", iM, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", iM, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", iM, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);