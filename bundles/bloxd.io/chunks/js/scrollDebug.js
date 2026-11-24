export const id = 53;
export const ids = [53];
export const modules = {
  4788: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      MAX_LINES: () => nT,
      MAX_SETTLE_MS: () => gT,
      SETTLE_MS: () => MT,
      ScrollDebugLog: () => iT,
      changeText: () => cT,
      elementText: () => fT,
      fullStateText: () => ZT,
      startScrollDebug: () => bT,
      touchedText: () => qT
    });
    var WT = mT(25),
      zT = mT(2929);
    const MT = 300,
      gT = 2e3,
      nT = 40,
      HT = 2,
      kT = {
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
      jT = Object.keys(kT),
      lT = new Set(["scrollHeight", "innerHeight"]);

    function LT(TT, UT) {
      const mT = 10 ** UT;
      return Math.round(TT * mT) / mT
    }

    function pT() {
      const TT = window.visualViewport;
      return {
        vvOffsetTop: LT(TT.offsetTop, 1),
        vvOffsetLeft: LT(TT.offsetLeft, 1),
        vvPageTop: LT(TT.pageTop, 1),
        vvPageLeft: LT(TT.pageLeft, 1),
        vvHeight: LT(TT.height, 1),
        vvScale: LT(TT.scale, 3),
        scrollX: LT(window.scrollX, 1),
        scrollY: LT(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function BT(TT, UT) {
      return `${kT[TT]} ${UT}`
    }

    function ZT(TT) {
      return jT.map((UT => BT(UT, String(TT[UT])))).join(", ")
    }

    function cT(TT, UT, mT, WT) {
      return jT.flatMap((zT => {
        const MT = TT[zT] !== UT[zT],
          gT = mT[zT] < Math.min(TT[zT], UT[zT]) || WT[zT] > Math.max(TT[zT], UT[zT]);
        if (!MT && !gT && !lT.has(zT)) return [];
        return [BT(zT, `${MT?`${TT[zT]} -> ${UT[zT]}`:String(UT[zT])}${gT?` (via ${mT[zT]}..${WT[zT]})`:""}`)]
      })).join(", ")
    }

    function vT(TT, UT, mT) {
      return Object.fromEntries(jT.map((WT => [WT, mT(TT[WT], UT[WT])])))
    }

    function fT(TT) {
      var UT;
      const mT = (null !== (UT = TT.getAttribute("class")) && void 0 !== UT ? UT : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${TT.tagName.toLowerCase()}${mT?`.${mT}`:""}`
    }

    function qT(TT, UT) {
      const mT = [];
      for (let WT = TT.parentElement; null !== WT && mT.length < HT; WT = WT.parentElement) {
        const TT = UT(WT);
        "auto" !== TT && mT.push(`${TT} on ${fT(WT)}`)
      }
      return `${fT(TT)} touch-action ${UT(TT)}${mT.length>0?` (${mT.join(", ")})`:""}`
    }
    class iT {
      constructor(TT) {
        this.deps = TT, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const TT = this.deps.now(),
            UT = TT - this.lastEventMs;
          if (UT < MT && TT - this.burstStartMs < gT) return void(this.timer = setTimeout(this.settle, MT - UT));
          this.timer = null;
          const mT = this.deps.read(),
            {
              last: WT,
              innerScrolled: zT,
              burstTouch: HT
            } = this,
            kT = vT(this.low, mT, Math.min),
            lT = vT(this.high, mT, Math.max);
          if (this.last = mT, this.low = mT, this.high = mT, this.innerScrolled = null, pT = kT, BT = lT, jT.every((TT => pT[TT] === BT[TT])) || !this.burstInGame || !this.deps.inGame()) return;
          var pT, BT;
          if (this.lines === nT) return this.capped = !0, void this.deps.log(`further changes unlogged: ${nT} lines logged`);
          this.lines++;
          const ZT = null === HT ? "no touch yet" : `touch on ${HT.text}, ${Math.round(this.burstStartMs-HT.atMs)} ms before`,
            qT = null === zT ? "" : `; inner scroll ${fT(zT)} scrollTop ${LT(zT.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(TT-this.burstStartMs)} ms; ${ZT}${qT}: ${cT(WT,mT,kT,lT)}`)
        }, this.last = TT.read(), this.low = this.last, this.high = this.last, TT.log(`start: ${ZT(this.last)}`)
      }
      moved() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const UT = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== TT && (null === UT || !TT.contains(UT.target))) return;
        const mT = this.deps.now();
        this.lastEventMs = mT, null === this.timer && (this.burstStartMs = mT, this.burstInGame = this.deps.inGame(), this.burstTouch = UT, this.timer = setTimeout(this.settle, MT));
        const WT = this.deps.read();
        this.low = vT(this.low, WT, Math.min), this.high = vT(this.high, WT, Math.max), this.innerScrolled = null !== TT && void 0 !== TT ? TT : this.innerScrolled
      }
    }

    function bT() {
      let TT = null;
      const UT = new iT({
        read: pT,
        inGame: () => "inGame" === WT.b.get("gameState"),
        lastTouch: () => TT,
        log: TT => {
          (0, zT.m)("scroll", TT)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (UT => {
        if (UT.target instanceof Element) {
          const mT = qT(UT.target, (TT => getComputedStyle(TT).touchAction));
          TT = {
            target: UT.target,
            text: mT,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (TT => {
        UT.moved(TT.target instanceof Element ? TT.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const mT = () => {
        UT.moved()
      };
      window.addEventListener("resize", mT, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", mT, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", mT, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);