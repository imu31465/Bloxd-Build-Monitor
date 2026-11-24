export const id = 53;
export const ids = [53];
export const modules = {
  4803: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      MAX_LINES: () => xp,
      MAX_SETTLE_MS: () => Sp,
      SETTLE_MS: () => Ip,
      ScrollDebugLog: () => dp,
      changeText: () => wp,
      elementText: () => tp,
      fullStateText: () => Up,
      startScrollDebug: () => ep,
      touchedText: () => Hp
    });
    var Op = cp(25),
      op = cp(2908);
    const Ip = 300,
      Sp = 2e3,
      xp = 40,
      Lp = 2,
      Yp = {
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
      Dp = Object.keys(Yp),
      Ap = new Set(["scrollHeight", "innerHeight"]);

    function Pp(pp, ip) {
      const cp = 10 ** ip;
      return Math.round(pp * cp) / cp
    }

    function Wp() {
      const pp = window.visualViewport;
      return {
        vvOffsetTop: Pp(pp.offsetTop, 1),
        vvOffsetLeft: Pp(pp.offsetLeft, 1),
        vvPageTop: Pp(pp.pageTop, 1),
        vvPageLeft: Pp(pp.pageLeft, 1),
        vvHeight: Pp(pp.height, 1),
        vvScale: Pp(pp.scale, 3),
        scrollX: Pp(window.scrollX, 1),
        scrollY: Pp(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function yp(pp, ip) {
      return `${Yp[pp]} ${ip}`
    }

    function Up(pp) {
      return Dp.map((ip => yp(ip, String(pp[ip])))).join(", ")
    }

    function wp(pp, ip, cp, Op) {
      return Dp.flatMap((op => {
        const Ip = pp[op] !== ip[op],
          Sp = cp[op] < Math.min(pp[op], ip[op]) || Op[op] > Math.max(pp[op], ip[op]);
        if (!Ip && !Sp && !Ap.has(op)) return [];
        return [yp(op, `${Ip?`${pp[op]} -> ${ip[op]}`:String(ip[op])}${Sp?` (via ${cp[op]}..${Op[op]})`:""}`)]
      })).join(", ")
    }

    function vp(pp, ip, cp) {
      return Object.fromEntries(Dp.map((Op => [Op, cp(pp[Op], ip[Op])])))
    }

    function tp(pp) {
      var ip;
      const cp = (null !== (ip = pp.getAttribute("class")) && void 0 !== ip ? ip : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${pp.tagName.toLowerCase()}${cp?`.${cp}`:""}`
    }

    function Hp(pp, ip) {
      const cp = [];
      for (let Op = pp.parentElement; null !== Op && cp.length < Lp; Op = Op.parentElement) {
        const pp = ip(Op);
        "auto" !== pp && cp.push(`${pp} on ${tp(Op)}`)
      }
      return `${tp(pp)} touch-action ${ip(pp)}${cp.length>0?` (${cp.join(", ")})`:""}`
    }
    class dp {
      constructor(pp) {
        this.deps = pp, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const pp = this.deps.now(),
            ip = pp - this.lastEventMs;
          if (ip < Ip && pp - this.burstStartMs < Sp) return void(this.timer = setTimeout(this.settle, Ip - ip));
          this.timer = null;
          const cp = this.deps.read(),
            {
              last: Op,
              innerScrolled: op,
              burstTouch: Lp
            } = this,
            Yp = vp(this.low, cp, Math.min),
            Ap = vp(this.high, cp, Math.max);
          if (this.last = cp, this.low = cp, this.high = cp, this.innerScrolled = null, Wp = Yp, yp = Ap, Dp.every((pp => Wp[pp] === yp[pp])) || !this.burstInGame || !this.deps.inGame()) return;
          var Wp, yp;
          if (this.lines === xp) return this.capped = !0, void this.deps.log(`further changes unlogged: ${xp} lines logged`);
          this.lines++;
          const Up = null === Lp ? "no touch yet" : `touch on ${Lp.text}, ${Math.round(this.burstStartMs-Lp.atMs)} ms before`,
            Hp = null === op ? "" : `; inner scroll ${tp(op)} scrollTop ${Pp(op.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(pp-this.burstStartMs)} ms; ${Up}${Hp}: ${wp(Op,cp,Yp,Ap)}`)
        }, this.last = pp.read(), this.low = this.last, this.high = this.last, pp.log(`start: ${Up(this.last)}`)
      }
      moved() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const ip = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== pp && (null === ip || !pp.contains(ip.target))) return;
        const cp = this.deps.now();
        this.lastEventMs = cp, null === this.timer && (this.burstStartMs = cp, this.burstInGame = this.deps.inGame(), this.burstTouch = ip, this.timer = setTimeout(this.settle, Ip));
        const Op = this.deps.read();
        this.low = vp(this.low, Op, Math.min), this.high = vp(this.high, Op, Math.max), this.innerScrolled = null !== pp && void 0 !== pp ? pp : this.innerScrolled
      }
    }

    function ep() {
      let pp = null;
      const ip = new dp({
        read: Wp,
        inGame: () => "inGame" === Op.c.get("gameState"),
        lastTouch: () => pp,
        log: pp => {
          (0, op.n)("scroll", pp)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (ip => {
        if (ip.target instanceof Element) {
          const cp = Hp(ip.target, (pp => getComputedStyle(pp).touchAction));
          pp = {
            target: ip.target,
            text: cp,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (pp => {
        ip.moved(pp.target instanceof Element ? pp.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const cp = () => {
        ip.moved()
      };
      window.addEventListener("resize", cp, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", cp, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", cp, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);