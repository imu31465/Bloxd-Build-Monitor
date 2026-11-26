export const id = 60;
export const ids = [60];
export const modules = {
  5190: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      MAX_LINES: () => FU,
      MAX_SETTLE_MS: () => AU,
      SETTLE_MS: () => QU,
      ScrollDebugLog: () => BU,
      changeText: () => tU,
      elementText: () => kU,
      fullStateText: () => aU,
      startScrollDebug: () => ZU,
      touchedText: () => GU
    });
    var cU = zU(27),
      yU = zU(3099);
    const QU = 300,
      AU = 2e3,
      FU = 40,
      oU = 2,
      DU = {
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
      EU = Object.keys(DU),
      YU = new Set(["scrollHeight", "innerHeight"]);

    function NU(UU, XU) {
      const zU = 10 ** XU;
      return Math.round(UU * zU) / zU
    }

    function IU() {
      const UU = window.visualViewport;
      return {
        vvOffsetTop: NU(UU.offsetTop, 1),
        vvOffsetLeft: NU(UU.offsetLeft, 1),
        vvPageTop: NU(UU.pageTop, 1),
        vvPageLeft: NU(UU.pageLeft, 1),
        vvHeight: NU(UU.height, 1),
        vvScale: NU(UU.scale, 3),
        scrollX: NU(window.scrollX, 1),
        scrollY: NU(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function pU(UU, XU) {
      return `${DU[UU]} ${XU}`
    }

    function aU(UU) {
      return EU.map((XU => pU(XU, String(UU[XU])))).join(", ")
    }

    function tU(UU, XU, zU, cU) {
      return EU.flatMap((yU => {
        const QU = UU[yU] !== XU[yU],
          AU = zU[yU] < Math.min(UU[yU], XU[yU]) || cU[yU] > Math.max(UU[yU], XU[yU]);
        if (!QU && !AU && !YU.has(yU)) return [];
        return [pU(yU, `${QU?`${UU[yU]} -> ${XU[yU]}`:String(XU[yU])}${AU?` (via ${zU[yU]}..${cU[yU]})`:""}`)]
      })).join(", ")
    }

    function gU(UU, XU, zU) {
      return Object.fromEntries(EU.map((cU => [cU, zU(UU[cU], XU[cU])])))
    }

    function kU(UU) {
      var XU;
      const zU = (null !== (XU = UU.getAttribute("class")) && void 0 !== XU ? XU : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${UU.tagName.toLowerCase()}${zU?`.${zU}`:""}`
    }

    function GU(UU, XU) {
      const zU = [];
      for (let cU = UU.parentElement; null !== cU && zU.length < oU; cU = cU.parentElement) {
        const UU = XU(cU);
        "auto" !== UU && zU.push(`${UU} on ${kU(cU)}`)
      }
      return `${kU(UU)} touch-action ${XU(UU)}${zU.length>0?` (${zU.join(", ")})`:""}`
    }
    class BU {
      constructor(UU) {
        this.deps = UU, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const UU = this.deps.now(),
            XU = UU - this.lastEventMs;
          if (XU < QU && UU - this.burstStartMs < AU) return void(this.timer = setTimeout(this.settle, QU - XU));
          this.timer = null;
          const zU = this.deps.read(),
            {
              last: cU,
              innerScrolled: yU,
              burstTouch: oU
            } = this,
            DU = gU(this.low, zU, Math.min),
            YU = gU(this.high, zU, Math.max);
          if (this.last = zU, this.low = zU, this.high = zU, this.innerScrolled = null, IU = DU, pU = YU, EU.every((UU => IU[UU] === pU[UU])) || !this.burstInGame || !this.deps.inGame()) return;
          var IU, pU;
          if (this.lines === FU) return this.capped = !0, void this.deps.log(`further changes unlogged: ${FU} lines logged`);
          this.lines++;
          const aU = null === oU ? "no touch yet" : `touch on ${oU.text}, ${Math.round(this.burstStartMs-oU.atMs)} ms before`,
            GU = null === yU ? "" : `; inner scroll ${kU(yU)} scrollTop ${NU(yU.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(UU-this.burstStartMs)} ms; ${aU}${GU}: ${tU(cU,zU,DU,YU)}`)
        }, this.last = UU.read(), this.low = this.last, this.high = this.last, UU.log(`start: ${aU(this.last)}`)
      }
      moved() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const XU = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== UU && (null === XU || !UU.contains(XU.target))) return;
        const zU = this.deps.now();
        this.lastEventMs = zU, null === this.timer && (this.burstStartMs = zU, this.burstInGame = this.deps.inGame(), this.burstTouch = XU, this.timer = setTimeout(this.settle, QU));
        const cU = this.deps.read();
        this.low = gU(this.low, cU, Math.min), this.high = gU(this.high, cU, Math.max), this.innerScrolled = null !== UU && void 0 !== UU ? UU : this.innerScrolled
      }
    }

    function ZU() {
      let UU = null;
      const XU = new BU({
        read: IU,
        inGame: () => "inGame" === cU.e.get("gameState"),
        lastTouch: () => UU,
        log: UU => {
          (0, yU.l)("scroll", UU)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (XU => {
        if (XU.target instanceof Element) {
          const zU = GU(XU.target, (UU => getComputedStyle(UU).touchAction));
          UU = {
            target: XU.target,
            text: zU,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (UU => {
        XU.moved(UU.target instanceof Element ? UU.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const zU = () => {
        XU.moved()
      };
      window.addEventListener("resize", zU, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", zU, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", zU, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);