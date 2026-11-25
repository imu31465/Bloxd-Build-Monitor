export const id = 55;
export const ids = [55];
export const modules = {
  5014: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      MAX_LINES: () => sQ,
      MAX_SETTLE_MS: () => zQ,
      SETTLE_MS: () => TQ,
      ScrollDebugLog: () => GQ,
      changeText: () => yQ,
      elementText: () => DQ,
      fullStateText: () => BQ,
      startScrollDebug: () => UQ,
      touchedText: () => pQ
    });
    var wQ = XQ(26),
      qQ = XQ(3045);
    const TQ = 300,
      zQ = 2e3,
      sQ = 40,
      FQ = 2,
      PQ = {
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
      gQ = Object.keys(PQ),
      JQ = new Set(["scrollHeight", "innerHeight"]);

    function rQ(QQ, WQ) {
      const XQ = 10 ** WQ;
      return Math.round(QQ * XQ) / XQ
    }

    function IQ() {
      const QQ = window.visualViewport;
      return {
        vvOffsetTop: rQ(QQ.offsetTop, 1),
        vvOffsetLeft: rQ(QQ.offsetLeft, 1),
        vvPageTop: rQ(QQ.pageTop, 1),
        vvPageLeft: rQ(QQ.pageLeft, 1),
        vvHeight: rQ(QQ.height, 1),
        vvScale: rQ(QQ.scale, 3),
        scrollX: rQ(window.scrollX, 1),
        scrollY: rQ(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function jQ(QQ, WQ) {
      return `${PQ[QQ]} ${WQ}`
    }

    function BQ(QQ) {
      return gQ.map((WQ => jQ(WQ, String(QQ[WQ])))).join(", ")
    }

    function yQ(QQ, WQ, XQ, wQ) {
      return gQ.flatMap((qQ => {
        const TQ = QQ[qQ] !== WQ[qQ],
          zQ = XQ[qQ] < Math.min(QQ[qQ], WQ[qQ]) || wQ[qQ] > Math.max(QQ[qQ], WQ[qQ]);
        if (!TQ && !zQ && !JQ.has(qQ)) return [];
        return [jQ(qQ, `${TQ?`${QQ[qQ]} -> ${WQ[qQ]}`:String(WQ[qQ])}${zQ?` (via ${XQ[qQ]}..${wQ[qQ]})`:""}`)]
      })).join(", ")
    }

    function VQ(QQ, WQ, XQ) {
      return Object.fromEntries(gQ.map((wQ => [wQ, XQ(QQ[wQ], WQ[wQ])])))
    }

    function DQ(QQ) {
      var WQ;
      const XQ = (null !== (WQ = QQ.getAttribute("class")) && void 0 !== WQ ? WQ : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${QQ.tagName.toLowerCase()}${XQ?`.${XQ}`:""}`
    }

    function pQ(QQ, WQ) {
      const XQ = [];
      for (let wQ = QQ.parentElement; null !== wQ && XQ.length < FQ; wQ = wQ.parentElement) {
        const QQ = WQ(wQ);
        "auto" !== QQ && XQ.push(`${QQ} on ${DQ(wQ)}`)
      }
      return `${DQ(QQ)} touch-action ${WQ(QQ)}${XQ.length>0?` (${XQ.join(", ")})`:""}`
    }
    class GQ {
      constructor(QQ) {
        this.deps = QQ, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const QQ = this.deps.now(),
            WQ = QQ - this.lastEventMs;
          if (WQ < TQ && QQ - this.burstStartMs < zQ) return void(this.timer = setTimeout(this.settle, TQ - WQ));
          this.timer = null;
          const XQ = this.deps.read(),
            {
              last: wQ,
              innerScrolled: qQ,
              burstTouch: FQ
            } = this,
            PQ = VQ(this.low, XQ, Math.min),
            JQ = VQ(this.high, XQ, Math.max);
          if (this.last = XQ, this.low = XQ, this.high = XQ, this.innerScrolled = null, IQ = PQ, jQ = JQ, gQ.every((QQ => IQ[QQ] === jQ[QQ])) || !this.burstInGame || !this.deps.inGame()) return;
          var IQ, jQ;
          if (this.lines === sQ) return this.capped = !0, void this.deps.log(`further changes unlogged: ${sQ} lines logged`);
          this.lines++;
          const BQ = null === FQ ? "no touch yet" : `touch on ${FQ.text}, ${Math.round(this.burstStartMs-FQ.atMs)} ms before`,
            pQ = null === qQ ? "" : `; inner scroll ${DQ(qQ)} scrollTop ${rQ(qQ.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(QQ-this.burstStartMs)} ms; ${BQ}${pQ}: ${yQ(wQ,XQ,PQ,JQ)}`)
        }, this.last = QQ.read(), this.low = this.last, this.high = this.last, QQ.log(`start: ${BQ(this.last)}`)
      }
      moved() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const WQ = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== QQ && (null === WQ || !QQ.contains(WQ.target))) return;
        const XQ = this.deps.now();
        this.lastEventMs = XQ, null === this.timer && (this.burstStartMs = XQ, this.burstInGame = this.deps.inGame(), this.burstTouch = WQ, this.timer = setTimeout(this.settle, TQ));
        const wQ = this.deps.read();
        this.low = VQ(this.low, wQ, Math.min), this.high = VQ(this.high, wQ, Math.max), this.innerScrolled = null !== QQ && void 0 !== QQ ? QQ : this.innerScrolled
      }
    }

    function UQ() {
      let QQ = null;
      const WQ = new GQ({
        read: IQ,
        inGame: () => "inGame" === wQ.b.get("gameState"),
        lastTouch: () => QQ,
        log: QQ => {
          (0, qQ.j)("scroll", QQ)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (WQ => {
        if (WQ.target instanceof Element) {
          const XQ = pQ(WQ.target, (QQ => getComputedStyle(QQ).touchAction));
          QQ = {
            target: WQ.target,
            text: XQ,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (QQ => {
        WQ.moved(QQ.target instanceof Element ? QQ.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const XQ = () => {
        WQ.moved()
      };
      window.addEventListener("resize", XQ, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", XQ, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", XQ, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);