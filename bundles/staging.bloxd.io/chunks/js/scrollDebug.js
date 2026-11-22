export const id = 52;
export const ids = [52];
export const modules = {
  4643: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      MAX_LINES: () => rk,
      MAX_SETTLE_MS: () => bk,
      SETTLE_MS: () => Sk,
      ScrollDebugLog: () => Yk,
      changeText: () => wk,
      elementText: () => pk,
      fullStateText: () => Hk,
      startScrollDebug: () => Lk,
      touchedText: () => yk
    });
    var Dk = ik(22),
      fk = ik(2752);
    const Sk = 300,
      bk = 2e3,
      rk = 40,
      Pk = 2,
      mk = {
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
      Mk = Object.keys(mk),
      Kk = new Set(["scrollHeight", "innerHeight"]);

    function xk(kk, ek) {
      const ik = 10 ** ek;
      return Math.round(kk * ik) / ik
    }

    function nk() {
      const kk = window.visualViewport;
      return {
        vvOffsetTop: xk(kk.offsetTop, 1),
        vvOffsetLeft: xk(kk.offsetLeft, 1),
        vvPageTop: xk(kk.pageTop, 1),
        vvPageLeft: xk(kk.pageLeft, 1),
        vvHeight: xk(kk.height, 1),
        vvScale: xk(kk.scale, 3),
        scrollX: xk(window.scrollX, 1),
        scrollY: xk(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function Uk(kk, ek) {
      return `${mk[kk]} ${ek}`
    }

    function Hk(kk) {
      return Mk.map((ek => Uk(ek, String(kk[ek])))).join(", ")
    }

    function wk(kk, ek, ik, Dk) {
      return Mk.flatMap((fk => {
        const Sk = kk[fk] !== ek[fk],
          bk = ik[fk] < Math.min(kk[fk], ek[fk]) || Dk[fk] > Math.max(kk[fk], ek[fk]);
        if (!Sk && !bk && !Kk.has(fk)) return [];
        return [Uk(fk, `${Sk?`${kk[fk]} -> ${ek[fk]}`:String(ek[fk])}${bk?` (via ${ik[fk]}..${Dk[fk]})`:""}`)]
      })).join(", ")
    }

    function lk(kk, ek, ik) {
      return Object.fromEntries(Mk.map((Dk => [Dk, ik(kk[Dk], ek[Dk])])))
    }

    function pk(kk) {
      var ek;
      const ik = (null !== (ek = kk.getAttribute("class")) && void 0 !== ek ? ek : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${kk.tagName.toLowerCase()}${ik?`.${ik}`:""}`
    }

    function yk(kk, ek) {
      const ik = [];
      for (let Dk = kk.parentElement; null !== Dk && ik.length < Pk; Dk = Dk.parentElement) {
        const kk = ek(Dk);
        "auto" !== kk && ik.push(`${kk} on ${pk(Dk)}`)
      }
      return `${pk(kk)} touch-action ${ek(kk)}${ik.length>0?` (${ik.join(", ")})`:""}`
    }
    class Yk {
      constructor(kk) {
        this.deps = kk, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const kk = this.deps.now(),
            ek = kk - this.lastEventMs;
          if (ek < Sk && kk - this.burstStartMs < bk) return void(this.timer = setTimeout(this.settle, Sk - ek));
          this.timer = null;
          const ik = this.deps.read(),
            {
              last: Dk,
              innerScrolled: fk,
              burstTouch: Pk
            } = this,
            mk = lk(this.low, ik, Math.min),
            Kk = lk(this.high, ik, Math.max);
          if (this.last = ik, this.low = ik, this.high = ik, this.innerScrolled = null, nk = mk, Uk = Kk, Mk.every((kk => nk[kk] === Uk[kk])) || !this.burstInGame || !this.deps.inGame()) return;
          var nk, Uk;
          if (this.lines === rk) return this.capped = !0, void this.deps.log(`further changes unlogged: ${rk} lines logged`);
          this.lines++;
          const Hk = null === Pk ? "no touch yet" : `touch on ${Pk.text}, ${Math.round(this.burstStartMs-Pk.atMs)} ms before`,
            yk = null === fk ? "" : `; inner scroll ${pk(fk)} scrollTop ${xk(fk.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(kk-this.burstStartMs)} ms; ${Hk}${yk}: ${wk(Dk,ik,mk,Kk)}`)
        }, this.last = kk.read(), this.low = this.last, this.high = this.last, kk.log(`start: ${Hk(this.last)}`)
      }
      moved() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const ek = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== kk && (null === ek || !kk.contains(ek.target))) return;
        const ik = this.deps.now();
        this.lastEventMs = ik, null === this.timer && (this.burstStartMs = ik, this.burstInGame = this.deps.inGame(), this.burstTouch = ek, this.timer = setTimeout(this.settle, Sk));
        const Dk = this.deps.read();
        this.low = lk(this.low, Dk, Math.min), this.high = lk(this.high, Dk, Math.max), this.innerScrolled = null !== kk && void 0 !== kk ? kk : this.innerScrolled
      }
    }

    function Lk() {
      let kk = null;
      const ek = new Yk({
        read: nk,
        inGame: () => "inGame" === Dk.b.get("gameState"),
        lastTouch: () => kk,
        log: kk => {
          (0, fk.l)("scroll", kk)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (ek => {
        if (ek.target instanceof Element) {
          const ik = yk(ek.target, (kk => getComputedStyle(kk).touchAction));
          kk = {
            target: ek.target,
            text: ik,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (kk => {
        ek.moved(kk.target instanceof Element ? kk.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const ik = () => {
        ek.moved()
      };
      window.addEventListener("resize", ik, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", ik, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", ik, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);