export const id = 52;
export const ids = [52];
export const modules = {
  4700: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      MAX_LINES: () => lk,
      MAX_SETTLE_MS: () => yk,
      SETTLE_MS: () => ik,
      ScrollDebugLog: () => Kk,
      changeText: () => Hk,
      elementText: () => xk,
      fullStateText: () => wk,
      startScrollDebug: () => Qk,
      touchedText: () => Pk
    });
    var Xk = Ik(25),
      Tk = Ik(2744);
    const ik = 300,
      yk = 2e3,
      lk = 40,
      ak = 2,
      qk = {
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
      Lk = Object.keys(qk),
      tk = new Set(["scrollHeight", "innerHeight"]);

    function Zk(kk, Fk) {
      const Ik = 10 ** Fk;
      return Math.round(kk * Ik) / Ik
    }

    function jk() {
      const kk = window.visualViewport;
      return {
        vvOffsetTop: Zk(kk.offsetTop, 1),
        vvOffsetLeft: Zk(kk.offsetLeft, 1),
        vvPageTop: Zk(kk.pageTop, 1),
        vvPageLeft: Zk(kk.pageLeft, 1),
        vvHeight: Zk(kk.height, 1),
        vvScale: Zk(kk.scale, 3),
        scrollX: Zk(window.scrollX, 1),
        scrollY: Zk(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function ek(kk, Fk) {
      return `${qk[kk]} ${Fk}`
    }

    function wk(kk) {
      return Lk.map((Fk => ek(Fk, String(kk[Fk])))).join(", ")
    }

    function Hk(kk, Fk, Ik, Xk) {
      return Lk.flatMap((Tk => {
        const ik = kk[Tk] !== Fk[Tk],
          yk = Ik[Tk] < Math.min(kk[Tk], Fk[Tk]) || Xk[Tk] > Math.max(kk[Tk], Fk[Tk]);
        if (!ik && !yk && !tk.has(Tk)) return [];
        return [ek(Tk, `${ik?`${kk[Tk]} -> ${Fk[Tk]}`:String(Fk[Tk])}${yk?` (via ${Ik[Tk]}..${Xk[Tk]})`:""}`)]
      })).join(", ")
    }

    function Jk(kk, Fk, Ik) {
      return Object.fromEntries(Lk.map((Xk => [Xk, Ik(kk[Xk], Fk[Xk])])))
    }

    function xk(kk) {
      var Fk;
      const Ik = (null !== (Fk = kk.getAttribute("class")) && void 0 !== Fk ? Fk : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${kk.tagName.toLowerCase()}${Ik?`.${Ik}`:""}`
    }

    function Pk(kk, Fk) {
      const Ik = [];
      for (let Xk = kk.parentElement; null !== Xk && Ik.length < ak; Xk = Xk.parentElement) {
        const kk = Fk(Xk);
        "auto" !== kk && Ik.push(`${kk} on ${xk(Xk)}`)
      }
      return `${xk(kk)} touch-action ${Fk(kk)}${Ik.length>0?` (${Ik.join(", ")})`:""}`
    }
    class Kk {
      constructor(kk) {
        this.deps = kk, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const kk = this.deps.now(),
            Fk = kk - this.lastEventMs;
          if (Fk < ik && kk - this.burstStartMs < yk) return void(this.timer = setTimeout(this.settle, ik - Fk));
          this.timer = null;
          const Ik = this.deps.read(),
            {
              last: Xk,
              innerScrolled: Tk,
              burstTouch: ak
            } = this,
            qk = Jk(this.low, Ik, Math.min),
            tk = Jk(this.high, Ik, Math.max);
          if (this.last = Ik, this.low = Ik, this.high = Ik, this.innerScrolled = null, jk = qk, ek = tk, Lk.every((kk => jk[kk] === ek[kk])) || !this.burstInGame || !this.deps.inGame()) return;
          var jk, ek;
          if (this.lines === lk) return this.capped = !0, void this.deps.log(`further changes unlogged: ${lk} lines logged`);
          this.lines++;
          const wk = null === ak ? "no touch yet" : `touch on ${ak.text}, ${Math.round(this.burstStartMs-ak.atMs)} ms before`,
            Pk = null === Tk ? "" : `; inner scroll ${xk(Tk)} scrollTop ${Zk(Tk.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(kk-this.burstStartMs)} ms; ${wk}${Pk}: ${Hk(Xk,Ik,qk,tk)}`)
        }, this.last = kk.read(), this.low = this.last, this.high = this.last, kk.log(`start: ${wk(this.last)}`)
      }
      moved() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const Fk = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== kk && (null === Fk || !kk.contains(Fk.target))) return;
        const Ik = this.deps.now();
        this.lastEventMs = Ik, null === this.timer && (this.burstStartMs = Ik, this.burstInGame = this.deps.inGame(), this.burstTouch = Fk, this.timer = setTimeout(this.settle, ik));
        const Xk = this.deps.read();
        this.low = Jk(this.low, Xk, Math.min), this.high = Jk(this.high, Xk, Math.max), this.innerScrolled = null !== kk && void 0 !== kk ? kk : this.innerScrolled
      }
    }

    function Qk() {
      let kk = null;
      const Fk = new Kk({
        read: jk,
        inGame: () => "inGame" === Xk.d.get("gameState"),
        lastTouch: () => kk,
        log: kk => {
          (0, Tk.g)("scroll", kk)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (Fk => {
        if (Fk.target instanceof Element) {
          const Ik = Pk(Fk.target, (kk => getComputedStyle(kk).touchAction));
          kk = {
            target: Fk.target,
            text: Ik,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (kk => {
        Fk.moved(kk.target instanceof Element ? kk.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const Ik = () => {
        Fk.moved()
      };
      window.addEventListener("resize", Ik, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", Ik, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", Ik, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);