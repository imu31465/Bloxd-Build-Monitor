export const id = 60;
export const ids = [60];
export const modules = {
  5158: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      MAX_LINES: () => tH,
      MAX_SETTLE_MS: () => hH,
      SETTLE_MS: () => SH,
      ScrollDebugLog: () => PH,
      changeText: () => WH,
      elementText: () => xH,
      fullStateText: () => QH,
      startScrollDebug: () => TH,
      touchedText: () => vH
    });
    var AH = LH(15),
      rH = LH(3105);
    const SH = 300,
      hH = 2e3,
      tH = 40,
      zH = 2,
      CH = {
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
      EH = Object.keys(CH),
      XH = new Set(["scrollHeight", "innerHeight"]);

    function GH(HH, BH) {
      const LH = 10 ** BH;
      return Math.round(HH * LH) / LH
    }

    function YH() {
      const HH = window.visualViewport;
      return {
        vvOffsetTop: GH(HH.offsetTop, 1),
        vvOffsetLeft: GH(HH.offsetLeft, 1),
        vvPageTop: GH(HH.pageTop, 1),
        vvPageLeft: GH(HH.pageLeft, 1),
        vvHeight: GH(HH.height, 1),
        vvScale: GH(HH.scale, 3),
        scrollX: GH(window.scrollX, 1),
        scrollY: GH(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function uH(HH, BH) {
      return `${CH[HH]} ${BH}`
    }

    function QH(HH) {
      return EH.map((BH => uH(BH, String(HH[BH])))).join(", ")
    }

    function WH(HH, BH, LH, AH) {
      return EH.flatMap((rH => {
        const SH = HH[rH] !== BH[rH],
          hH = LH[rH] < Math.min(HH[rH], BH[rH]) || AH[rH] > Math.max(HH[rH], BH[rH]);
        if (!SH && !hH && !XH.has(rH)) return [];
        return [uH(rH, `${SH?`${HH[rH]} -> ${BH[rH]}`:String(BH[rH])}${hH?` (via ${LH[rH]}..${AH[rH]})`:""}`)]
      })).join(", ")
    }

    function MH(HH, BH, LH) {
      return Object.fromEntries(EH.map((AH => [AH, LH(HH[AH], BH[AH])])))
    }

    function xH(HH) {
      var BH;
      const LH = (null !== (BH = HH.getAttribute("class")) && void 0 !== BH ? BH : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${HH.tagName.toLowerCase()}${LH?`.${LH}`:""}`
    }

    function vH(HH, BH) {
      const LH = [];
      for (let AH = HH.parentElement; null !== AH && LH.length < zH; AH = AH.parentElement) {
        const HH = BH(AH);
        "auto" !== HH && LH.push(`${HH} on ${xH(AH)}`)
      }
      return `${xH(HH)} touch-action ${BH(HH)}${LH.length>0?` (${LH.join(", ")})`:""}`
    }
    class PH {
      constructor(HH) {
        this.deps = HH, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const HH = this.deps.now(),
            BH = HH - this.lastEventMs;
          if (BH < SH && HH - this.burstStartMs < hH) return void(this.timer = setTimeout(this.settle, SH - BH));
          this.timer = null;
          const LH = this.deps.read(),
            {
              last: AH,
              innerScrolled: rH,
              burstTouch: zH
            } = this,
            CH = MH(this.low, LH, Math.min),
            XH = MH(this.high, LH, Math.max);
          if (this.last = LH, this.low = LH, this.high = LH, this.innerScrolled = null, YH = CH, uH = XH, EH.every((HH => YH[HH] === uH[HH])) || !this.burstInGame || !this.deps.inGame()) return;
          var YH, uH;
          if (this.lines === tH) return this.capped = !0, void this.deps.log(`further changes unlogged: ${tH} lines logged`);
          this.lines++;
          const QH = null === zH ? "no touch yet" : `touch on ${zH.text}, ${Math.round(this.burstStartMs-zH.atMs)} ms before`,
            vH = null === rH ? "" : `; inner scroll ${xH(rH)} scrollTop ${GH(rH.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(HH-this.burstStartMs)} ms; ${QH}${vH}: ${WH(AH,LH,CH,XH)}`)
        }, this.last = HH.read(), this.low = this.last, this.high = this.last, HH.log(`start: ${QH(this.last)}`)
      }
      moved() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const BH = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== HH && (null === BH || !HH.contains(BH.target))) return;
        const LH = this.deps.now();
        this.lastEventMs = LH, null === this.timer && (this.burstStartMs = LH, this.burstInGame = this.deps.inGame(), this.burstTouch = BH, this.timer = setTimeout(this.settle, SH));
        const AH = this.deps.read();
        this.low = MH(this.low, AH, Math.min), this.high = MH(this.high, AH, Math.max), this.innerScrolled = null !== HH && void 0 !== HH ? HH : this.innerScrolled
      }
    }

    function TH() {
      let HH = null;
      const BH = new PH({
        read: YH,
        inGame: () => "inGame" === AH.c.get("gameState"),
        lastTouch: () => HH,
        log: HH => {
          (0, rH.j)("scroll", HH)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (BH => {
        if (BH.target instanceof Element) {
          const LH = vH(BH.target, (HH => getComputedStyle(HH).touchAction));
          HH = {
            target: BH.target,
            text: LH,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (HH => {
        BH.moved(HH.target instanceof Element ? HH.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const LH = () => {
        BH.moved()
      };
      window.addEventListener("resize", LH, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", LH, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", LH, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);