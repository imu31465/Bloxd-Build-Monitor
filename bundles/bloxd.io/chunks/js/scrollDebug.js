export const id = 53;
export const ids = [53];
export const modules = {
  4883: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      MAX_LINES: () => lu,
      MAX_SETTLE_MS: () => Xu,
      SETTLE_MS: () => Zu,
      ScrollDebugLog: () => eu,
      changeText: () => hu,
      elementText: () => gu,
      fullStateText: () => Yu,
      startScrollDebug: () => Gu,
      touchedText: () => Mu
    });
    var su = ju(22),
      Uu = ju(2943);
    const Zu = 300,
      Xu = 2e3,
      lu = 40,
      qu = 2,
      fu = {
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
      Cu = Object.keys(fu),
      bu = new Set(["scrollHeight", "innerHeight"]);

    function cu(uu, Eu) {
      const ju = 10 ** Eu;
      return Math.round(uu * ju) / ju
    }

    function Nu() {
      const uu = window.visualViewport;
      return {
        vvOffsetTop: cu(uu.offsetTop, 1),
        vvOffsetLeft: cu(uu.offsetLeft, 1),
        vvPageTop: cu(uu.pageTop, 1),
        vvPageLeft: cu(uu.pageLeft, 1),
        vvHeight: cu(uu.height, 1),
        vvScale: cu(uu.scale, 3),
        scrollX: cu(window.scrollX, 1),
        scrollY: cu(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function Ou(uu, Eu) {
      return `${fu[uu]} ${Eu}`
    }

    function Yu(uu) {
      return Cu.map((Eu => Ou(Eu, String(uu[Eu])))).join(", ")
    }

    function hu(uu, Eu, ju, su) {
      return Cu.flatMap((Uu => {
        const Zu = uu[Uu] !== Eu[Uu],
          Xu = ju[Uu] < Math.min(uu[Uu], Eu[Uu]) || su[Uu] > Math.max(uu[Uu], Eu[Uu]);
        if (!Zu && !Xu && !bu.has(Uu)) return [];
        return [Ou(Uu, `${Zu?`${uu[Uu]} -> ${Eu[Uu]}`:String(Eu[Uu])}${Xu?` (via ${ju[Uu]}..${su[Uu]})`:""}`)]
      })).join(", ")
    }

    function Du(uu, Eu, ju) {
      return Object.fromEntries(Cu.map((su => [su, ju(uu[su], Eu[su])])))
    }

    function gu(uu) {
      var Eu;
      const ju = (null !== (Eu = uu.getAttribute("class")) && void 0 !== Eu ? Eu : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${uu.tagName.toLowerCase()}${ju?`.${ju}`:""}`
    }

    function Mu(uu, Eu) {
      const ju = [];
      for (let su = uu.parentElement; null !== su && ju.length < qu; su = su.parentElement) {
        const uu = Eu(su);
        "auto" !== uu && ju.push(`${uu} on ${gu(su)}`)
      }
      return `${gu(uu)} touch-action ${Eu(uu)}${ju.length>0?` (${ju.join(", ")})`:""}`
    }
    class eu {
      constructor(uu) {
        this.deps = uu, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const uu = this.deps.now(),
            Eu = uu - this.lastEventMs;
          if (Eu < Zu && uu - this.burstStartMs < Xu) return void(this.timer = setTimeout(this.settle, Zu - Eu));
          this.timer = null;
          const ju = this.deps.read(),
            {
              last: su,
              innerScrolled: Uu,
              burstTouch: qu
            } = this,
            fu = Du(this.low, ju, Math.min),
            bu = Du(this.high, ju, Math.max);
          if (this.last = ju, this.low = ju, this.high = ju, this.innerScrolled = null, Nu = fu, Ou = bu, Cu.every((uu => Nu[uu] === Ou[uu])) || !this.burstInGame || !this.deps.inGame()) return;
          var Nu, Ou;
          if (this.lines === lu) return this.capped = !0, void this.deps.log(`further changes unlogged: ${lu} lines logged`);
          this.lines++;
          const Yu = null === qu ? "no touch yet" : `touch on ${qu.text}, ${Math.round(this.burstStartMs-qu.atMs)} ms before`,
            Mu = null === Uu ? "" : `; inner scroll ${gu(Uu)} scrollTop ${cu(Uu.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(uu-this.burstStartMs)} ms; ${Yu}${Mu}: ${hu(su,ju,fu,bu)}`)
        }, this.last = uu.read(), this.low = this.last, this.high = this.last, uu.log(`start: ${Yu(this.last)}`)
      }
      moved() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const Eu = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== uu && (null === Eu || !uu.contains(Eu.target))) return;
        const ju = this.deps.now();
        this.lastEventMs = ju, null === this.timer && (this.burstStartMs = ju, this.burstInGame = this.deps.inGame(), this.burstTouch = Eu, this.timer = setTimeout(this.settle, Zu));
        const su = this.deps.read();
        this.low = Du(this.low, su, Math.min), this.high = Du(this.high, su, Math.max), this.innerScrolled = null !== uu && void 0 !== uu ? uu : this.innerScrolled
      }
    }

    function Gu() {
      let uu = null;
      const Eu = new eu({
        read: Nu,
        inGame: () => "inGame" === su.d.get("gameState"),
        lastTouch: () => uu,
        log: uu => {
          (0, Uu.k)("scroll", uu)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (Eu => {
        if (Eu.target instanceof Element) {
          const ju = Mu(Eu.target, (uu => getComputedStyle(uu).touchAction));
          uu = {
            target: Eu.target,
            text: ju,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (uu => {
        Eu.moved(uu.target instanceof Element ? uu.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const ju = () => {
        Eu.moved()
      };
      window.addEventListener("resize", ju, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", ju, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", ju, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);