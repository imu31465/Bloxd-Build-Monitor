export const id = 61;
export const ids = [61];
export const modules = {
  5570: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      MAX_LINES: () => qR,
      MAX_SETTLE_MS: () => ZR,
      SETTLE_MS: () => uR,
      ScrollDebugLog: () => AR,
      changeText: () => LR,
      elementText: () => UR,
      fullStateText: () => aR,
      startScrollDebug: () => CR,
      touchedText: () => WR
    });
    var yR = GR(25),
      tR = GR(3960);
    const uR = 300,
      ZR = 2e3,
      qR = 40,
      iR = 2,
      fR = {
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
      VR = Object.keys(fR),
      KR = new Set(["scrollHeight", "innerHeight"]);

    function wR(RR, JR) {
      const GR = 10 ** JR;
      return Math.round(RR * GR) / GR
    }

    function rR() {
      const RR = window.visualViewport;
      return {
        vvOffsetTop: wR(RR.offsetTop, 1),
        vvOffsetLeft: wR(RR.offsetLeft, 1),
        vvPageTop: wR(RR.pageTop, 1),
        vvPageLeft: wR(RR.pageLeft, 1),
        vvHeight: wR(RR.height, 1),
        vvScale: wR(RR.scale, 3),
        scrollX: wR(window.scrollX, 1),
        scrollY: wR(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function eR(RR, JR) {
      return `${fR[RR]} ${JR}`
    }

    function aR(RR) {
      return VR.map((JR => eR(JR, String(RR[JR])))).join(", ")
    }

    function LR(RR, JR, GR, yR) {
      return VR.flatMap((tR => {
        const uR = RR[tR] !== JR[tR],
          ZR = GR[tR] < Math.min(RR[tR], JR[tR]) || yR[tR] > Math.max(RR[tR], JR[tR]);
        if (!uR && !ZR && !KR.has(tR)) return [];
        return [eR(tR, `${uR?`${RR[tR]} -> ${JR[tR]}`:String(JR[tR])}${ZR?` (via ${GR[tR]}..${yR[tR]})`:""}`)]
      })).join(", ")
    }

    function nR(RR, JR, GR) {
      return Object.fromEntries(VR.map((yR => [yR, GR(RR[yR], JR[yR])])))
    }

    function UR(RR) {
      var JR;
      const GR = (null !== (JR = RR.getAttribute("class")) && void 0 !== JR ? JR : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${RR.tagName.toLowerCase()}${GR?`.${GR}`:""}`
    }

    function WR(RR, JR) {
      const GR = [];
      for (let yR = RR.parentElement; null !== yR && GR.length < iR; yR = yR.parentElement) {
        const RR = JR(yR);
        "auto" !== RR && GR.push(`${RR} on ${UR(yR)}`)
      }
      return `${UR(RR)} touch-action ${JR(RR)}${GR.length>0?` (${GR.join(", ")})`:""}`
    }
    class AR {
      constructor(RR) {
        this.deps = RR, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const RR = this.deps.now(),
            JR = RR - this.lastEventMs;
          if (JR < uR && RR - this.burstStartMs < ZR) return void(this.timer = setTimeout(this.settle, uR - JR));
          this.timer = null;
          const GR = this.deps.read(),
            {
              last: yR,
              innerScrolled: tR,
              burstTouch: iR
            } = this,
            fR = nR(this.low, GR, Math.min),
            KR = nR(this.high, GR, Math.max);
          if (this.last = GR, this.low = GR, this.high = GR, this.innerScrolled = null, rR = fR, eR = KR, VR.every((RR => rR[RR] === eR[RR])) || !this.burstInGame || !this.deps.inGame()) return;
          var rR, eR;
          if (this.lines === qR) return this.capped = !0, void this.deps.log(`further changes unlogged: ${qR} lines logged`);
          this.lines++;
          const aR = null === iR ? "no touch yet" : `touch on ${iR.text}, ${Math.round(this.burstStartMs-iR.atMs)} ms before`,
            WR = null === tR ? "" : `; inner scroll ${UR(tR)} scrollTop ${wR(tR.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(RR-this.burstStartMs)} ms; ${aR}${WR}: ${LR(yR,GR,fR,KR)}`)
        }, this.last = RR.read(), this.low = this.last, this.high = this.last, RR.log(`start: ${aR(this.last)}`)
      }
      moved() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const JR = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== RR && (null === JR || !RR.contains(JR.target))) return;
        const GR = this.deps.now();
        this.lastEventMs = GR, null === this.timer && (this.burstStartMs = GR, this.burstInGame = this.deps.inGame(), this.burstTouch = JR, this.timer = setTimeout(this.settle, uR));
        const yR = this.deps.read();
        this.low = nR(this.low, yR, Math.min), this.high = nR(this.high, yR, Math.max), this.innerScrolled = null !== RR && void 0 !== RR ? RR : this.innerScrolled
      }
    }

    function CR() {
      let RR = null;
      const JR = new AR({
        read: rR,
        inGame: () => "inGame" === yR.d.get("gameState"),
        lastTouch: () => RR,
        log: RR => {
          (0, tR.k)("scroll", RR)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (JR => {
        if (JR.target instanceof Element) {
          const GR = WR(JR.target, (RR => getComputedStyle(RR).touchAction));
          RR = {
            target: JR.target,
            text: GR,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (RR => {
        JR.moved(RR.target instanceof Element ? RR.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const GR = () => {
        JR.moved()
      };
      window.addEventListener("resize", GR, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", GR, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", GR, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);