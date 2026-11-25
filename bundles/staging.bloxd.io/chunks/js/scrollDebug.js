export const id = 53;
export const ids = [53];
export const modules = {
  4717: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      MAX_LINES: () => kG,
      MAX_SETTLE_MS: () => yG,
      SETTLE_MS: () => LG,
      ScrollDebugLog: () => EG,
      changeText: () => dG,
      elementText: () => rG,
      fullStateText: () => hG,
      startScrollDebug: () => oG,
      touchedText: () => zG
    });
    var wG = ZG(17),
      SG = ZG(2801);
    const LG = 300,
      yG = 2e3,
      kG = 40,
      UG = 2,
      YG = {
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
      VG = Object.keys(YG),
      pG = new Set(["scrollHeight", "innerHeight"]);

    function fG(GG, bG) {
      const ZG = 10 ** bG;
      return Math.round(GG * ZG) / ZG
    }

    function QG() {
      const GG = window.visualViewport;
      return {
        vvOffsetTop: fG(GG.offsetTop, 1),
        vvOffsetLeft: fG(GG.offsetLeft, 1),
        vvPageTop: fG(GG.pageTop, 1),
        vvPageLeft: fG(GG.pageLeft, 1),
        vvHeight: fG(GG.height, 1),
        vvScale: fG(GG.scale, 3),
        scrollX: fG(window.scrollX, 1),
        scrollY: fG(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function KG(GG, bG) {
      return `${YG[GG]} ${bG}`
    }

    function hG(GG) {
      return VG.map((bG => KG(bG, String(GG[bG])))).join(", ")
    }

    function dG(GG, bG, ZG, wG) {
      return VG.flatMap((SG => {
        const LG = GG[SG] !== bG[SG],
          yG = ZG[SG] < Math.min(GG[SG], bG[SG]) || wG[SG] > Math.max(GG[SG], bG[SG]);
        if (!LG && !yG && !pG.has(SG)) return [];
        return [KG(SG, `${LG?`${GG[SG]} -> ${bG[SG]}`:String(bG[SG])}${yG?` (via ${ZG[SG]}..${wG[SG]})`:""}`)]
      })).join(", ")
    }

    function JG(GG, bG, ZG) {
      return Object.fromEntries(VG.map((wG => [wG, ZG(GG[wG], bG[wG])])))
    }

    function rG(GG) {
      var bG;
      const ZG = (null !== (bG = GG.getAttribute("class")) && void 0 !== bG ? bG : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${GG.tagName.toLowerCase()}${ZG?`.${ZG}`:""}`
    }

    function zG(GG, bG) {
      const ZG = [];
      for (let wG = GG.parentElement; null !== wG && ZG.length < UG; wG = wG.parentElement) {
        const GG = bG(wG);
        "auto" !== GG && ZG.push(`${GG} on ${rG(wG)}`)
      }
      return `${rG(GG)} touch-action ${bG(GG)}${ZG.length>0?` (${ZG.join(", ")})`:""}`
    }
    class EG {
      constructor(GG) {
        this.deps = GG, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const GG = this.deps.now(),
            bG = GG - this.lastEventMs;
          if (bG < LG && GG - this.burstStartMs < yG) return void(this.timer = setTimeout(this.settle, LG - bG));
          this.timer = null;
          const ZG = this.deps.read(),
            {
              last: wG,
              innerScrolled: SG,
              burstTouch: UG
            } = this,
            YG = JG(this.low, ZG, Math.min),
            pG = JG(this.high, ZG, Math.max);
          if (this.last = ZG, this.low = ZG, this.high = ZG, this.innerScrolled = null, QG = YG, KG = pG, VG.every((GG => QG[GG] === KG[GG])) || !this.burstInGame || !this.deps.inGame()) return;
          var QG, KG;
          if (this.lines === kG) return this.capped = !0, void this.deps.log(`further changes unlogged: ${kG} lines logged`);
          this.lines++;
          const hG = null === UG ? "no touch yet" : `touch on ${UG.text}, ${Math.round(this.burstStartMs-UG.atMs)} ms before`,
            zG = null === SG ? "" : `; inner scroll ${rG(SG)} scrollTop ${fG(SG.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(GG-this.burstStartMs)} ms; ${hG}${zG}: ${dG(wG,ZG,YG,pG)}`)
        }, this.last = GG.read(), this.low = this.last, this.high = this.last, GG.log(`start: ${hG(this.last)}`)
      }
      moved() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const bG = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== GG && (null === bG || !GG.contains(bG.target))) return;
        const ZG = this.deps.now();
        this.lastEventMs = ZG, null === this.timer && (this.burstStartMs = ZG, this.burstInGame = this.deps.inGame(), this.burstTouch = bG, this.timer = setTimeout(this.settle, LG));
        const wG = this.deps.read();
        this.low = JG(this.low, wG, Math.min), this.high = JG(this.high, wG, Math.max), this.innerScrolled = null !== GG && void 0 !== GG ? GG : this.innerScrolled
      }
    }

    function oG() {
      let GG = null;
      const bG = new EG({
        read: QG,
        inGame: () => "inGame" === wG.e.get("gameState"),
        lastTouch: () => GG,
        log: GG => {
          (0, SG.j)("scroll", GG)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (bG => {
        if (bG.target instanceof Element) {
          const ZG = zG(bG.target, (GG => getComputedStyle(GG).touchAction));
          GG = {
            target: bG.target,
            text: ZG,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (GG => {
        bG.moved(GG.target instanceof Element ? GG.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const ZG = () => {
        bG.moved()
      };
      window.addEventListener("resize", ZG, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", ZG, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", ZG, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);