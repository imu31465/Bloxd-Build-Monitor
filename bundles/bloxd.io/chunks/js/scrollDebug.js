export const id = 52;
export const ids = [52];
export const modules = {
  4819: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      MAX_LINES: () => NS,
      MAX_SETTLE_MS: () => xS,
      SETTLE_MS: () => XS,
      ScrollDebugLog: () => QS,
      changeText: () => GS,
      elementText: () => nS,
      fullStateText: () => jS,
      startScrollDebug: () => DS,
      touchedText: () => PS
    });
    var tS = gS(24),
      bS = gS(2953);
    const XS = 300,
      xS = 2e3,
      NS = 40,
      qS = 2,
      uS = {
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
      IS = Object.keys(uS),
      fS = new Set(["scrollHeight", "innerHeight"]);

    function kS(SS, HS) {
      const gS = 10 ** HS;
      return Math.round(SS * gS) / gS
    }

    function aS() {
      const SS = window.visualViewport;
      return {
        vvOffsetTop: kS(SS.offsetTop, 1),
        vvOffsetLeft: kS(SS.offsetLeft, 1),
        vvPageTop: kS(SS.pageTop, 1),
        vvPageLeft: kS(SS.pageLeft, 1),
        vvHeight: kS(SS.height, 1),
        vvScale: kS(SS.scale, 3),
        scrollX: kS(window.scrollX, 1),
        scrollY: kS(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function KS(SS, HS) {
      return `${uS[SS]} ${HS}`
    }

    function jS(SS) {
      return IS.map((HS => KS(HS, String(SS[HS])))).join(", ")
    }

    function GS(SS, HS, gS, tS) {
      return IS.flatMap((bS => {
        const XS = SS[bS] !== HS[bS],
          xS = gS[bS] < Math.min(SS[bS], HS[bS]) || tS[bS] > Math.max(SS[bS], HS[bS]);
        if (!XS && !xS && !fS.has(bS)) return [];
        return [KS(bS, `${XS?`${SS[bS]} -> ${HS[bS]}`:String(HS[bS])}${xS?` (via ${gS[bS]}..${tS[bS]})`:""}`)]
      })).join(", ")
    }

    function CS(SS, HS, gS) {
      return Object.fromEntries(IS.map((tS => [tS, gS(SS[tS], HS[tS])])))
    }

    function nS(SS) {
      var HS;
      const gS = (null !== (HS = SS.getAttribute("class")) && void 0 !== HS ? HS : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${SS.tagName.toLowerCase()}${gS?`.${gS}`:""}`
    }

    function PS(SS, HS) {
      const gS = [];
      for (let tS = SS.parentElement; null !== tS && gS.length < qS; tS = tS.parentElement) {
        const SS = HS(tS);
        "auto" !== SS && gS.push(`${SS} on ${nS(tS)}`)
      }
      return `${nS(SS)} touch-action ${HS(SS)}${gS.length>0?` (${gS.join(", ")})`:""}`
    }
    class QS {
      constructor(SS) {
        this.deps = SS, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const SS = this.deps.now(),
            HS = SS - this.lastEventMs;
          if (HS < XS && SS - this.burstStartMs < xS) return void(this.timer = setTimeout(this.settle, XS - HS));
          this.timer = null;
          const gS = this.deps.read(),
            {
              last: tS,
              innerScrolled: bS,
              burstTouch: qS
            } = this,
            uS = CS(this.low, gS, Math.min),
            fS = CS(this.high, gS, Math.max);
          if (this.last = gS, this.low = gS, this.high = gS, this.innerScrolled = null, aS = uS, KS = fS, IS.every((SS => aS[SS] === KS[SS])) || !this.burstInGame || !this.deps.inGame()) return;
          var aS, KS;
          if (this.lines === NS) return this.capped = !0, void this.deps.log(`further changes unlogged: ${NS} lines logged`);
          this.lines++;
          const jS = null === qS ? "no touch yet" : `touch on ${qS.text}, ${Math.round(this.burstStartMs-qS.atMs)} ms before`,
            PS = null === bS ? "" : `; inner scroll ${nS(bS)} scrollTop ${kS(bS.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(SS-this.burstStartMs)} ms; ${jS}${PS}: ${GS(tS,gS,uS,fS)}`)
        }, this.last = SS.read(), this.low = this.last, this.high = this.last, SS.log(`start: ${jS(this.last)}`)
      }
      moved() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const HS = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== SS && (null === HS || !SS.contains(HS.target))) return;
        const gS = this.deps.now();
        this.lastEventMs = gS, null === this.timer && (this.burstStartMs = gS, this.burstInGame = this.deps.inGame(), this.burstTouch = HS, this.timer = setTimeout(this.settle, XS));
        const tS = this.deps.read();
        this.low = CS(this.low, tS, Math.min), this.high = CS(this.high, tS, Math.max), this.innerScrolled = null !== SS && void 0 !== SS ? SS : this.innerScrolled
      }
    }

    function DS() {
      let SS = null;
      const HS = new QS({
        read: aS,
        inGame: () => "inGame" === tS.b.get("gameState"),
        lastTouch: () => SS,
        log: SS => {
          (0, bS.i)("scroll", SS)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (HS => {
        if (HS.target instanceof Element) {
          const gS = PS(HS.target, (SS => getComputedStyle(SS).touchAction));
          SS = {
            target: HS.target,
            text: gS,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (SS => {
        HS.moved(SS.target instanceof Element ? SS.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const gS = () => {
        HS.moved()
      };
      window.addEventListener("resize", gS, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", gS, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", gS, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);