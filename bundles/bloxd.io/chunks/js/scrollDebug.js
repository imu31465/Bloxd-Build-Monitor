export const id = 61;
export const ids = [61];
export const modules = {
  5506: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      MAX_LINES: () => Ir,
      MAX_SETTLE_MS: () => jr,
      SETTLE_MS: () => ar,
      ScrollDebugLog: () => er,
      changeText: () => hr,
      elementText: () => Yr,
      fullStateText: () => tr,
      startScrollDebug: () => Kr,
      touchedText: () => nr
    });
    var Zr = Qr(26),
      Wr = Qr(3909);
    const ar = 300,
      jr = 2e3,
      Ir = 40,
      fr = 2,
      Er = {
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
      pr = Object.keys(Er),
      xr = new Set(["scrollHeight", "innerHeight"]);

    function mr(rr, Sr) {
      const Qr = 10 ** Sr;
      return Math.round(rr * Qr) / Qr
    }

    function Nr() {
      const rr = window.visualViewport;
      return {
        vvOffsetTop: mr(rr.offsetTop, 1),
        vvOffsetLeft: mr(rr.offsetLeft, 1),
        vvPageTop: mr(rr.pageTop, 1),
        vvPageLeft: mr(rr.pageLeft, 1),
        vvHeight: mr(rr.height, 1),
        vvScale: mr(rr.scale, 3),
        scrollX: mr(window.scrollX, 1),
        scrollY: mr(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function Ur(rr, Sr) {
      return `${Er[rr]} ${Sr}`
    }

    function tr(rr) {
      return pr.map((Sr => Ur(Sr, String(rr[Sr])))).join(", ")
    }

    function hr(rr, Sr, Qr, Zr) {
      return pr.flatMap((Wr => {
        const ar = rr[Wr] !== Sr[Wr],
          jr = Qr[Wr] < Math.min(rr[Wr], Sr[Wr]) || Zr[Wr] > Math.max(rr[Wr], Sr[Wr]);
        if (!ar && !jr && !xr.has(Wr)) return [];
        return [Ur(Wr, `${ar?`${rr[Wr]} -> ${Sr[Wr]}`:String(Sr[Wr])}${jr?` (via ${Qr[Wr]}..${Zr[Wr]})`:""}`)]
      })).join(", ")
    }

    function zr(rr, Sr, Qr) {
      return Object.fromEntries(pr.map((Zr => [Zr, Qr(rr[Zr], Sr[Zr])])))
    }

    function Yr(rr) {
      var Sr;
      const Qr = (null !== (Sr = rr.getAttribute("class")) && void 0 !== Sr ? Sr : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${rr.tagName.toLowerCase()}${Qr?`.${Qr}`:""}`
    }

    function nr(rr, Sr) {
      const Qr = [];
      for (let Zr = rr.parentElement; null !== Zr && Qr.length < fr; Zr = Zr.parentElement) {
        const rr = Sr(Zr);
        "auto" !== rr && Qr.push(`${rr} on ${Yr(Zr)}`)
      }
      return `${Yr(rr)} touch-action ${Sr(rr)}${Qr.length>0?` (${Qr.join(", ")})`:""}`
    }
    class er {
      constructor(rr) {
        this.deps = rr, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const rr = this.deps.now(),
            Sr = rr - this.lastEventMs;
          if (Sr < ar && rr - this.burstStartMs < jr) return void(this.timer = setTimeout(this.settle, ar - Sr));
          this.timer = null;
          const Qr = this.deps.read(),
            {
              last: Zr,
              innerScrolled: Wr,
              burstTouch: fr
            } = this,
            Er = zr(this.low, Qr, Math.min),
            xr = zr(this.high, Qr, Math.max);
          if (this.last = Qr, this.low = Qr, this.high = Qr, this.innerScrolled = null, Nr = Er, Ur = xr, pr.every((rr => Nr[rr] === Ur[rr])) || !this.burstInGame || !this.deps.inGame()) return;
          var Nr, Ur;
          if (this.lines === Ir) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Ir} lines logged`);
          this.lines++;
          const tr = null === fr ? "no touch yet" : `touch on ${fr.text}, ${Math.round(this.burstStartMs-fr.atMs)} ms before`,
            nr = null === Wr ? "" : `; inner scroll ${Yr(Wr)} scrollTop ${mr(Wr.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(rr-this.burstStartMs)} ms; ${tr}${nr}: ${hr(Zr,Qr,Er,xr)}`)
        }, this.last = rr.read(), this.low = this.last, this.high = this.last, rr.log(`start: ${tr(this.last)}`)
      }
      moved() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const Sr = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== rr && (null === Sr || !rr.contains(Sr.target))) return;
        const Qr = this.deps.now();
        this.lastEventMs = Qr, null === this.timer && (this.burstStartMs = Qr, this.burstInGame = this.deps.inGame(), this.burstTouch = Sr, this.timer = setTimeout(this.settle, ar));
        const Zr = this.deps.read();
        this.low = zr(this.low, Zr, Math.min), this.high = zr(this.high, Zr, Math.max), this.innerScrolled = null !== rr && void 0 !== rr ? rr : this.innerScrolled
      }
    }

    function Kr() {
      let rr = null;
      const Sr = new er({
        read: Nr,
        inGame: () => "inGame" === Zr.c.get("gameState"),
        lastTouch: () => rr,
        log: rr => {
          (0, Wr.l)("scroll", rr)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (Sr => {
        if (Sr.target instanceof Element) {
          const Qr = nr(Sr.target, (rr => getComputedStyle(rr).touchAction));
          rr = {
            target: Sr.target,
            text: Qr,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (rr => {
        Sr.moved(rr.target instanceof Element ? rr.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const Qr = () => {
        Sr.moved()
      };
      window.addEventListener("resize", Qr, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", Qr, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", Qr, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);