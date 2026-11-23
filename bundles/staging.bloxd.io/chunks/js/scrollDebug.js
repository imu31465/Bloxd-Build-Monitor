export const id = 52;
export const ids = [52];
export const modules = {
  4646: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      MAX_LINES: () => fC,
      MAX_SETTLE_MS: () => nC,
      SETTLE_MS: () => bC,
      ScrollDebugLog: () => AC,
      changeText: () => pC,
      elementText: () => GC,
      fullStateText: () => SC,
      startScrollDebug: () => xC,
      touchedText: () => RC
    });
    var QC = ZC(20),
      wC = ZC(2800);
    const bC = 300,
      nC = 2e3,
      fC = 40,
      oC = 2,
      qC = {
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
      FC = Object.keys(qC),
      WC = new Set(["scrollHeight", "innerHeight"]);

    function NC(CC, zC) {
      const ZC = 10 ** zC;
      return Math.round(CC * ZC) / ZC
    }

    function MC() {
      const CC = window.visualViewport;
      return {
        vvOffsetTop: NC(CC.offsetTop, 1),
        vvOffsetLeft: NC(CC.offsetLeft, 1),
        vvPageTop: NC(CC.pageTop, 1),
        vvPageLeft: NC(CC.pageLeft, 1),
        vvHeight: NC(CC.height, 1),
        vvScale: NC(CC.scale, 3),
        scrollX: NC(window.scrollX, 1),
        scrollY: NC(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function gC(CC, zC) {
      return `${qC[CC]} ${zC}`
    }

    function SC(CC) {
      return FC.map((zC => gC(zC, String(CC[zC])))).join(", ")
    }

    function pC(CC, zC, ZC, QC) {
      return FC.flatMap((wC => {
        const bC = CC[wC] !== zC[wC],
          nC = ZC[wC] < Math.min(CC[wC], zC[wC]) || QC[wC] > Math.max(CC[wC], zC[wC]);
        if (!bC && !nC && !WC.has(wC)) return [];
        return [gC(wC, `${bC?`${CC[wC]} -> ${zC[wC]}`:String(zC[wC])}${nC?` (via ${ZC[wC]}..${QC[wC]})`:""}`)]
      })).join(", ")
    }

    function PC(CC, zC, ZC) {
      return Object.fromEntries(FC.map((QC => [QC, ZC(CC[QC], zC[QC])])))
    }

    function GC(CC) {
      var zC;
      const ZC = (null !== (zC = CC.getAttribute("class")) && void 0 !== zC ? zC : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${CC.tagName.toLowerCase()}${ZC?`.${ZC}`:""}`
    }

    function RC(CC, zC) {
      const ZC = [];
      for (let QC = CC.parentElement; null !== QC && ZC.length < oC; QC = QC.parentElement) {
        const CC = zC(QC);
        "auto" !== CC && ZC.push(`${CC} on ${GC(QC)}`)
      }
      return `${GC(CC)} touch-action ${zC(CC)}${ZC.length>0?` (${ZC.join(", ")})`:""}`
    }
    class AC {
      constructor(CC) {
        this.deps = CC, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const CC = this.deps.now(),
            zC = CC - this.lastEventMs;
          if (zC < bC && CC - this.burstStartMs < nC) return void(this.timer = setTimeout(this.settle, bC - zC));
          this.timer = null;
          const ZC = this.deps.read(),
            {
              last: QC,
              innerScrolled: wC,
              burstTouch: oC
            } = this,
            qC = PC(this.low, ZC, Math.min),
            WC = PC(this.high, ZC, Math.max);
          if (this.last = ZC, this.low = ZC, this.high = ZC, this.innerScrolled = null, MC = qC, gC = WC, FC.every((CC => MC[CC] === gC[CC])) || !this.burstInGame || !this.deps.inGame()) return;
          var MC, gC;
          if (this.lines === fC) return this.capped = !0, void this.deps.log(`further changes unlogged: ${fC} lines logged`);
          this.lines++;
          const SC = null === oC ? "no touch yet" : `touch on ${oC.text}, ${Math.round(this.burstStartMs-oC.atMs)} ms before`,
            RC = null === wC ? "" : `; inner scroll ${GC(wC)} scrollTop ${NC(wC.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(CC-this.burstStartMs)} ms; ${SC}${RC}: ${pC(QC,ZC,qC,WC)}`)
        }, this.last = CC.read(), this.low = this.last, this.high = this.last, CC.log(`start: ${SC(this.last)}`)
      }
      moved() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const zC = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== CC && (null === zC || !CC.contains(zC.target))) return;
        const ZC = this.deps.now();
        this.lastEventMs = ZC, null === this.timer && (this.burstStartMs = ZC, this.burstInGame = this.deps.inGame(), this.burstTouch = zC, this.timer = setTimeout(this.settle, bC));
        const QC = this.deps.read();
        this.low = PC(this.low, QC, Math.min), this.high = PC(this.high, QC, Math.max), this.innerScrolled = null !== CC && void 0 !== CC ? CC : this.innerScrolled
      }
    }

    function xC() {
      let CC = null;
      const zC = new AC({
        read: MC,
        inGame: () => "inGame" === QC.b.get("gameState"),
        lastTouch: () => CC,
        log: CC => {
          (0, wC.i)("scroll", CC)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (zC => {
        if (zC.target instanceof Element) {
          const ZC = RC(zC.target, (CC => getComputedStyle(CC).touchAction));
          CC = {
            target: zC.target,
            text: ZC,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (CC => {
        zC.moved(CC.target instanceof Element ? CC.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const ZC = () => {
        zC.moved()
      };
      window.addEventListener("resize", ZC, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", ZC, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", ZC, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);