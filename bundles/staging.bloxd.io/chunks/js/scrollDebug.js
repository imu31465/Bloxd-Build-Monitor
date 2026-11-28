export const id = 61;
export const ids = [61];
export const modules = {
  5438: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      MAX_LINES: () => Kd,
      MAX_SETTLE_MS: () => Xd,
      SETTLE_MS: () => Rd,
      ScrollDebugLog: () => Yd,
      changeText: () => yd,
      elementText: () => Td,
      fullStateText: () => Hd,
      startScrollDebug: () => gd,
      touchedText: () => pd
    });
    var Wd = md(29),
      Fd = md(3903);
    const Rd = 300,
      Xd = 2e3,
      Kd = 40,
      hd = 2,
      vd = {
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
      Qd = Object.keys(vd),
      td = new Set(["scrollHeight", "innerHeight"]);

    function od(dd, Od) {
      const md = 10 ** Od;
      return Math.round(dd * md) / md
    }

    function Nd() {
      const dd = window.visualViewport;
      return {
        vvOffsetTop: od(dd.offsetTop, 1),
        vvOffsetLeft: od(dd.offsetLeft, 1),
        vvPageTop: od(dd.pageTop, 1),
        vvPageLeft: od(dd.pageLeft, 1),
        vvHeight: od(dd.height, 1),
        vvScale: od(dd.scale, 3),
        scrollX: od(window.scrollX, 1),
        scrollY: od(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function qd(dd, Od) {
      return `${vd[dd]} ${Od}`
    }

    function Hd(dd) {
      return Qd.map((Od => qd(Od, String(dd[Od])))).join(", ")
    }

    function yd(dd, Od, md, Wd) {
      return Qd.flatMap((Fd => {
        const Rd = dd[Fd] !== Od[Fd],
          Xd = md[Fd] < Math.min(dd[Fd], Od[Fd]) || Wd[Fd] > Math.max(dd[Fd], Od[Fd]);
        if (!Rd && !Xd && !td.has(Fd)) return [];
        return [qd(Fd, `${Rd?`${dd[Fd]} -> ${Od[Fd]}`:String(Od[Fd])}${Xd?` (via ${md[Fd]}..${Wd[Fd]})`:""}`)]
      })).join(", ")
    }

    function bd(dd, Od, md) {
      return Object.fromEntries(Qd.map((Wd => [Wd, md(dd[Wd], Od[Wd])])))
    }

    function Td(dd) {
      var Od;
      const md = (null !== (Od = dd.getAttribute("class")) && void 0 !== Od ? Od : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${dd.tagName.toLowerCase()}${md?`.${md}`:""}`
    }

    function pd(dd, Od) {
      const md = [];
      for (let Wd = dd.parentElement; null !== Wd && md.length < hd; Wd = Wd.parentElement) {
        const dd = Od(Wd);
        "auto" !== dd && md.push(`${dd} on ${Td(Wd)}`)
      }
      return `${Td(dd)} touch-action ${Od(dd)}${md.length>0?` (${md.join(", ")})`:""}`
    }
    class Yd {
      constructor(dd) {
        this.deps = dd, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const dd = this.deps.now(),
            Od = dd - this.lastEventMs;
          if (Od < Rd && dd - this.burstStartMs < Xd) return void(this.timer = setTimeout(this.settle, Rd - Od));
          this.timer = null;
          const md = this.deps.read(),
            {
              last: Wd,
              innerScrolled: Fd,
              burstTouch: hd
            } = this,
            vd = bd(this.low, md, Math.min),
            td = bd(this.high, md, Math.max);
          if (this.last = md, this.low = md, this.high = md, this.innerScrolled = null, Nd = vd, qd = td, Qd.every((dd => Nd[dd] === qd[dd])) || !this.burstInGame || !this.deps.inGame()) return;
          var Nd, qd;
          if (this.lines === Kd) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Kd} lines logged`);
          this.lines++;
          const Hd = null === hd ? "no touch yet" : `touch on ${hd.text}, ${Math.round(this.burstStartMs-hd.atMs)} ms before`,
            pd = null === Fd ? "" : `; inner scroll ${Td(Fd)} scrollTop ${od(Fd.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(dd-this.burstStartMs)} ms; ${Hd}${pd}: ${yd(Wd,md,vd,td)}`)
        }, this.last = dd.read(), this.low = this.last, this.high = this.last, dd.log(`start: ${Hd(this.last)}`)
      }
      moved() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const Od = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== dd && (null === Od || !dd.contains(Od.target))) return;
        const md = this.deps.now();
        this.lastEventMs = md, null === this.timer && (this.burstStartMs = md, this.burstInGame = this.deps.inGame(), this.burstTouch = Od, this.timer = setTimeout(this.settle, Rd));
        const Wd = this.deps.read();
        this.low = bd(this.low, Wd, Math.min), this.high = bd(this.high, Wd, Math.max), this.innerScrolled = null !== dd && void 0 !== dd ? dd : this.innerScrolled
      }
    }

    function gd() {
      let dd = null;
      const Od = new Yd({
        read: Nd,
        inGame: () => "inGame" === Wd.e.get("gameState"),
        lastTouch: () => dd,
        log: dd => {
          (0, Fd.k)("scroll", dd)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (Od => {
        if (Od.target instanceof Element) {
          const md = pd(Od.target, (dd => getComputedStyle(dd).touchAction));
          dd = {
            target: Od.target,
            text: md,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (dd => {
        Od.moved(dd.target instanceof Element ? dd.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const md = () => {
        Od.moved()
      };
      window.addEventListener("resize", md, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", md, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", md, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);