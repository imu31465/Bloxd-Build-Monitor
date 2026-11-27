export const id = 61;
export const ids = [61];
export const modules = {
  5433: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      MAX_LINES: () => LW,
      MAX_SETTLE_MS: () => PW,
      SETTLE_MS: () => NW,
      ScrollDebugLog: () => MW,
      changeText: () => jW,
      elementText: () => kW,
      fullStateText: () => bW,
      startScrollDebug: () => KW,
      touchedText: () => sW
    });
    var mW = OW(25),
      EW = OW(3866);
    const NW = 300,
      PW = 2e3,
      LW = 40,
      cW = 2,
      wW = {
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
      tW = Object.keys(wW),
      ZW = new Set(["scrollHeight", "innerHeight"]);

    function xW(WW, iW) {
      const OW = 10 ** iW;
      return Math.round(WW * OW) / OW
    }

    function lW() {
      const WW = window.visualViewport;
      return {
        vvOffsetTop: xW(WW.offsetTop, 1),
        vvOffsetLeft: xW(WW.offsetLeft, 1),
        vvPageTop: xW(WW.pageTop, 1),
        vvPageLeft: xW(WW.pageLeft, 1),
        vvHeight: xW(WW.height, 1),
        vvScale: xW(WW.scale, 3),
        scrollX: xW(window.scrollX, 1),
        scrollY: xW(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function AW(WW, iW) {
      return `${wW[WW]} ${iW}`
    }

    function bW(WW) {
      return tW.map((iW => AW(iW, String(WW[iW])))).join(", ")
    }

    function jW(WW, iW, OW, mW) {
      return tW.flatMap((EW => {
        const NW = WW[EW] !== iW[EW],
          PW = OW[EW] < Math.min(WW[EW], iW[EW]) || mW[EW] > Math.max(WW[EW], iW[EW]);
        if (!NW && !PW && !ZW.has(EW)) return [];
        return [AW(EW, `${NW?`${WW[EW]} -> ${iW[EW]}`:String(iW[EW])}${PW?` (via ${OW[EW]}..${mW[EW]})`:""}`)]
      })).join(", ")
    }

    function UW(WW, iW, OW) {
      return Object.fromEntries(tW.map((mW => [mW, OW(WW[mW], iW[mW])])))
    }

    function kW(WW) {
      var iW;
      const OW = (null !== (iW = WW.getAttribute("class")) && void 0 !== iW ? iW : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${WW.tagName.toLowerCase()}${OW?`.${OW}`:""}`
    }

    function sW(WW, iW) {
      const OW = [];
      for (let mW = WW.parentElement; null !== mW && OW.length < cW; mW = mW.parentElement) {
        const WW = iW(mW);
        "auto" !== WW && OW.push(`${WW} on ${kW(mW)}`)
      }
      return `${kW(WW)} touch-action ${iW(WW)}${OW.length>0?` (${OW.join(", ")})`:""}`
    }
    class MW {
      constructor(WW) {
        this.deps = WW, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const WW = this.deps.now(),
            iW = WW - this.lastEventMs;
          if (iW < NW && WW - this.burstStartMs < PW) return void(this.timer = setTimeout(this.settle, NW - iW));
          this.timer = null;
          const OW = this.deps.read(),
            {
              last: mW,
              innerScrolled: EW,
              burstTouch: cW
            } = this,
            wW = UW(this.low, OW, Math.min),
            ZW = UW(this.high, OW, Math.max);
          if (this.last = OW, this.low = OW, this.high = OW, this.innerScrolled = null, lW = wW, AW = ZW, tW.every((WW => lW[WW] === AW[WW])) || !this.burstInGame || !this.deps.inGame()) return;
          var lW, AW;
          if (this.lines === LW) return this.capped = !0, void this.deps.log(`further changes unlogged: ${LW} lines logged`);
          this.lines++;
          const bW = null === cW ? "no touch yet" : `touch on ${cW.text}, ${Math.round(this.burstStartMs-cW.atMs)} ms before`,
            sW = null === EW ? "" : `; inner scroll ${kW(EW)} scrollTop ${xW(EW.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(WW-this.burstStartMs)} ms; ${bW}${sW}: ${jW(mW,OW,wW,ZW)}`)
        }, this.last = WW.read(), this.low = this.last, this.high = this.last, WW.log(`start: ${bW(this.last)}`)
      }
      moved() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const iW = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== WW && (null === iW || !WW.contains(iW.target))) return;
        const OW = this.deps.now();
        this.lastEventMs = OW, null === this.timer && (this.burstStartMs = OW, this.burstInGame = this.deps.inGame(), this.burstTouch = iW, this.timer = setTimeout(this.settle, NW));
        const mW = this.deps.read();
        this.low = UW(this.low, mW, Math.min), this.high = UW(this.high, mW, Math.max), this.innerScrolled = null !== WW && void 0 !== WW ? WW : this.innerScrolled
      }
    }

    function KW() {
      let WW = null;
      const iW = new MW({
        read: lW,
        inGame: () => "inGame" === mW.d.get("gameState"),
        lastTouch: () => WW,
        log: WW => {
          (0, EW.m)("scroll", WW)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (iW => {
        if (iW.target instanceof Element) {
          const OW = sW(iW.target, (WW => getComputedStyle(WW).touchAction));
          WW = {
            target: iW.target,
            text: OW,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (WW => {
        iW.moved(WW.target instanceof Element ? WW.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const OW = () => {
        iW.moved()
      };
      window.addEventListener("resize", OW, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", OW, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", OW, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);