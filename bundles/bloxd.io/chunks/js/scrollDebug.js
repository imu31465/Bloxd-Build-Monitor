export const id = 61;
export const ids = [61];
export const modules = {
  5593: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      MAX_LINES: () => gb,
      MAX_SETTLE_MS: () => Vb,
      SETTLE_MS: () => pb,
      ScrollDebugLog: () => hb,
      changeText: () => Fb,
      elementText: () => sb,
      fullStateText: () => Eb,
      startScrollDebug: () => zb,
      touchedText: () => mb
    });
    var eb = Mb(26),
      Hb = Mb(4060);
    const pb = 300,
      Vb = 2e3,
      gb = 40,
      lb = 2,
      Lb = {
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
      Ib = Object.keys(Lb),
      Ob = new Set(["scrollHeight", "innerHeight"]);

    function Ub(bb, wb) {
      const Mb = 10 ** wb;
      return Math.round(bb * Mb) / Mb
    }

    function tb() {
      const bb = window.visualViewport;
      return {
        vvOffsetTop: Ub(bb.offsetTop, 1),
        vvOffsetLeft: Ub(bb.offsetLeft, 1),
        vvPageTop: Ub(bb.pageTop, 1),
        vvPageLeft: Ub(bb.pageLeft, 1),
        vvHeight: Ub(bb.height, 1),
        vvScale: Ub(bb.scale, 3),
        scrollX: Ub(window.scrollX, 1),
        scrollY: Ub(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function Cb(bb, wb) {
      return `${Lb[bb]} ${wb}`
    }

    function Eb(bb) {
      return Ib.map((wb => Cb(wb, String(bb[wb])))).join(", ")
    }

    function Fb(bb, wb, Mb, eb) {
      return Ib.flatMap((Hb => {
        const pb = bb[Hb] !== wb[Hb],
          Vb = Mb[Hb] < Math.min(bb[Hb], wb[Hb]) || eb[Hb] > Math.max(bb[Hb], wb[Hb]);
        if (!pb && !Vb && !Ob.has(Hb)) return [];
        return [Cb(Hb, `${pb?`${bb[Hb]} -> ${wb[Hb]}`:String(wb[Hb])}${Vb?` (via ${Mb[Hb]}..${eb[Hb]})`:""}`)]
      })).join(", ")
    }

    function Bb(bb, wb, Mb) {
      return Object.fromEntries(Ib.map((eb => [eb, Mb(bb[eb], wb[eb])])))
    }

    function sb(bb) {
      var wb;
      const Mb = (null !== (wb = bb.getAttribute("class")) && void 0 !== wb ? wb : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${bb.tagName.toLowerCase()}${Mb?`.${Mb}`:""}`
    }

    function mb(bb, wb) {
      const Mb = [];
      for (let eb = bb.parentElement; null !== eb && Mb.length < lb; eb = eb.parentElement) {
        const bb = wb(eb);
        "auto" !== bb && Mb.push(`${bb} on ${sb(eb)}`)
      }
      return `${sb(bb)} touch-action ${wb(bb)}${Mb.length>0?` (${Mb.join(", ")})`:""}`
    }
    class hb {
      constructor(bb) {
        this.deps = bb, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const bb = this.deps.now(),
            wb = bb - this.lastEventMs;
          if (wb < pb && bb - this.burstStartMs < Vb) return void(this.timer = setTimeout(this.settle, pb - wb));
          this.timer = null;
          const Mb = this.deps.read(),
            {
              last: eb,
              innerScrolled: Hb,
              burstTouch: lb
            } = this,
            Lb = Bb(this.low, Mb, Math.min),
            Ob = Bb(this.high, Mb, Math.max);
          if (this.last = Mb, this.low = Mb, this.high = Mb, this.innerScrolled = null, tb = Lb, Cb = Ob, Ib.every((bb => tb[bb] === Cb[bb])) || !this.burstInGame || !this.deps.inGame()) return;
          var tb, Cb;
          if (this.lines === gb) return this.capped = !0, void this.deps.log(`further changes unlogged: ${gb} lines logged`);
          this.lines++;
          const Eb = null === lb ? "no touch yet" : `touch on ${lb.text}, ${Math.round(this.burstStartMs-lb.atMs)} ms before`,
            mb = null === Hb ? "" : `; inner scroll ${sb(Hb)} scrollTop ${Ub(Hb.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(bb-this.burstStartMs)} ms; ${Eb}${mb}: ${Fb(eb,Mb,Lb,Ob)}`)
        }, this.last = bb.read(), this.low = this.last, this.high = this.last, bb.log(`start: ${Eb(this.last)}`)
      }
      moved() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const wb = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== bb && (null === wb || !bb.contains(wb.target))) return;
        const Mb = this.deps.now();
        this.lastEventMs = Mb, null === this.timer && (this.burstStartMs = Mb, this.burstInGame = this.deps.inGame(), this.burstTouch = wb, this.timer = setTimeout(this.settle, pb));
        const eb = this.deps.read();
        this.low = Bb(this.low, eb, Math.min), this.high = Bb(this.high, eb, Math.max), this.innerScrolled = null !== bb && void 0 !== bb ? bb : this.innerScrolled
      }
    }

    function zb() {
      let bb = null;
      const wb = new hb({
        read: tb,
        inGame: () => "inGame" === eb.c.get("gameState"),
        lastTouch: () => bb,
        log: bb => {
          (0, Hb.j)("scroll", bb)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (wb => {
        if (wb.target instanceof Element) {
          const Mb = mb(wb.target, (bb => getComputedStyle(bb).touchAction));
          bb = {
            target: wb.target,
            text: Mb,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (bb => {
        wb.moved(bb.target instanceof Element ? bb.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const Mb = () => {
        wb.moved()
      };
      window.addEventListener("resize", Mb, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", Mb, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", Mb, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);