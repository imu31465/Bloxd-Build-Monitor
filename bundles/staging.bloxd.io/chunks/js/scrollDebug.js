export const id = 59;
export const ids = [59];
export const modules = {
  5196: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      MAX_LINES: () => pV,
      MAX_SETTLE_MS: () => yV,
      SETTLE_MS: () => UV,
      ScrollDebugLog: () => tV,
      changeText: () => EV,
      elementText: () => jV,
      fullStateText: () => bV,
      startScrollDebug: () => FV,
      touchedText: () => qV
    });
    var JV = xV(27),
      YV = xV(3142);
    const UV = 300,
      yV = 2e3,
      pV = 40,
      QV = 2,
      nV = {
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
      wV = Object.keys(nV),
      ZV = new Set(["scrollHeight", "innerHeight"]);

    function vV(VV, eV) {
      const xV = 10 ** eV;
      return Math.round(VV * xV) / xV
    }

    function rV() {
      const VV = window.visualViewport;
      return {
        vvOffsetTop: vV(VV.offsetTop, 1),
        vvOffsetLeft: vV(VV.offsetLeft, 1),
        vvPageTop: vV(VV.pageTop, 1),
        vvPageLeft: vV(VV.pageLeft, 1),
        vvHeight: vV(VV.height, 1),
        vvScale: vV(VV.scale, 3),
        scrollX: vV(window.scrollX, 1),
        scrollY: vV(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function kV(VV, eV) {
      return `${nV[VV]} ${eV}`
    }

    function bV(VV) {
      return wV.map((eV => kV(eV, String(VV[eV])))).join(", ")
    }

    function EV(VV, eV, xV, JV) {
      return wV.flatMap((YV => {
        const UV = VV[YV] !== eV[YV],
          yV = xV[YV] < Math.min(VV[YV], eV[YV]) || JV[YV] > Math.max(VV[YV], eV[YV]);
        if (!UV && !yV && !ZV.has(YV)) return [];
        return [kV(YV, `${UV?`${VV[YV]} -> ${eV[YV]}`:String(eV[YV])}${yV?` (via ${xV[YV]}..${JV[YV]})`:""}`)]
      })).join(", ")
    }

    function BV(VV, eV, xV) {
      return Object.fromEntries(wV.map((JV => [JV, xV(VV[JV], eV[JV])])))
    }

    function jV(VV) {
      var eV;
      const xV = (null !== (eV = VV.getAttribute("class")) && void 0 !== eV ? eV : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${VV.tagName.toLowerCase()}${xV?`.${xV}`:""}`
    }

    function qV(VV, eV) {
      const xV = [];
      for (let JV = VV.parentElement; null !== JV && xV.length < QV; JV = JV.parentElement) {
        const VV = eV(JV);
        "auto" !== VV && xV.push(`${VV} on ${jV(JV)}`)
      }
      return `${jV(VV)} touch-action ${eV(VV)}${xV.length>0?` (${xV.join(", ")})`:""}`
    }
    class tV {
      constructor(VV) {
        this.deps = VV, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const VV = this.deps.now(),
            eV = VV - this.lastEventMs;
          if (eV < UV && VV - this.burstStartMs < yV) return void(this.timer = setTimeout(this.settle, UV - eV));
          this.timer = null;
          const xV = this.deps.read(),
            {
              last: JV,
              innerScrolled: YV,
              burstTouch: QV
            } = this,
            nV = BV(this.low, xV, Math.min),
            ZV = BV(this.high, xV, Math.max);
          if (this.last = xV, this.low = xV, this.high = xV, this.innerScrolled = null, rV = nV, kV = ZV, wV.every((VV => rV[VV] === kV[VV])) || !this.burstInGame || !this.deps.inGame()) return;
          var rV, kV;
          if (this.lines === pV) return this.capped = !0, void this.deps.log(`further changes unlogged: ${pV} lines logged`);
          this.lines++;
          const bV = null === QV ? "no touch yet" : `touch on ${QV.text}, ${Math.round(this.burstStartMs-QV.atMs)} ms before`,
            qV = null === YV ? "" : `; inner scroll ${jV(YV)} scrollTop ${vV(YV.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(VV-this.burstStartMs)} ms; ${bV}${qV}: ${EV(JV,xV,nV,ZV)}`)
        }, this.last = VV.read(), this.low = this.last, this.high = this.last, VV.log(`start: ${bV(this.last)}`)
      }
      moved() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const eV = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== VV && (null === eV || !VV.contains(eV.target))) return;
        const xV = this.deps.now();
        this.lastEventMs = xV, null === this.timer && (this.burstStartMs = xV, this.burstInGame = this.deps.inGame(), this.burstTouch = eV, this.timer = setTimeout(this.settle, UV));
        const JV = this.deps.read();
        this.low = BV(this.low, JV, Math.min), this.high = BV(this.high, JV, Math.max), this.innerScrolled = null !== VV && void 0 !== VV ? VV : this.innerScrolled
      }
    }

    function FV() {
      let VV = null;
      const eV = new tV({
        read: rV,
        inGame: () => "inGame" === JV.b.get("gameState"),
        lastTouch: () => VV,
        log: VV => {
          (0, YV.i)("scroll", VV)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (eV => {
        if (eV.target instanceof Element) {
          const xV = qV(eV.target, (VV => getComputedStyle(VV).touchAction));
          VV = {
            target: eV.target,
            text: xV,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (VV => {
        eV.moved(VV.target instanceof Element ? VV.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const xV = () => {
        eV.moved()
      };
      window.addEventListener("resize", xV, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", xV, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", xV, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);