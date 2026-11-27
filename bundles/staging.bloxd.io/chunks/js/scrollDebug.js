export const id = 60;
export const ids = [60];
export const modules = {
  5164: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      MAX_LINES: () => Ue,
      MAX_SETTLE_MS: () => Ke,
      SETTLE_MS: () => Me,
      ScrollDebugLog: () => Ee,
      changeText: () => pe,
      elementText: () => ze,
      fullStateText: () => Te,
      startScrollDebug: () => ge,
      touchedText: () => Be
    });
    var ye = He(18),
      be = He(3037);
    const Me = 300,
      Ke = 2e3,
      Ue = 40,
      Fe = 2,
      Je = {
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
      oe = Object.keys(Je),
      Re = new Set(["scrollHeight", "innerHeight"]);

    function ke(ee, ie) {
      const He = 10 ** ie;
      return Math.round(ee * He) / He
    }

    function qe() {
      const ee = window.visualViewport;
      return {
        vvOffsetTop: ke(ee.offsetTop, 1),
        vvOffsetLeft: ke(ee.offsetLeft, 1),
        vvPageTop: ke(ee.pageTop, 1),
        vvPageLeft: ke(ee.pageLeft, 1),
        vvHeight: ke(ee.height, 1),
        vvScale: ke(ee.scale, 3),
        scrollX: ke(window.scrollX, 1),
        scrollY: ke(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function fe(ee, ie) {
      return `${Je[ee]} ${ie}`
    }

    function Te(ee) {
      return oe.map((ie => fe(ie, String(ee[ie])))).join(", ")
    }

    function pe(ee, ie, He, ye) {
      return oe.flatMap((be => {
        const Me = ee[be] !== ie[be],
          Ke = He[be] < Math.min(ee[be], ie[be]) || ye[be] > Math.max(ee[be], ie[be]);
        if (!Me && !Ke && !Re.has(be)) return [];
        return [fe(be, `${Me?`${ee[be]} -> ${ie[be]}`:String(ie[be])}${Ke?` (via ${He[be]}..${ye[be]})`:""}`)]
      })).join(", ")
    }

    function Xe(ee, ie, He) {
      return Object.fromEntries(oe.map((ye => [ye, He(ee[ye], ie[ye])])))
    }

    function ze(ee) {
      var ie;
      const He = (null !== (ie = ee.getAttribute("class")) && void 0 !== ie ? ie : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${ee.tagName.toLowerCase()}${He?`.${He}`:""}`
    }

    function Be(ee, ie) {
      const He = [];
      for (let ye = ee.parentElement; null !== ye && He.length < Fe; ye = ye.parentElement) {
        const ee = ie(ye);
        "auto" !== ee && He.push(`${ee} on ${ze(ye)}`)
      }
      return `${ze(ee)} touch-action ${ie(ee)}${He.length>0?` (${He.join(", ")})`:""}`
    }
    class Ee {
      constructor(ee) {
        this.deps = ee, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const ee = this.deps.now(),
            ie = ee - this.lastEventMs;
          if (ie < Me && ee - this.burstStartMs < Ke) return void(this.timer = setTimeout(this.settle, Me - ie));
          this.timer = null;
          const He = this.deps.read(),
            {
              last: ye,
              innerScrolled: be,
              burstTouch: Fe
            } = this,
            Je = Xe(this.low, He, Math.min),
            Re = Xe(this.high, He, Math.max);
          if (this.last = He, this.low = He, this.high = He, this.innerScrolled = null, qe = Je, fe = Re, oe.every((ee => qe[ee] === fe[ee])) || !this.burstInGame || !this.deps.inGame()) return;
          var qe, fe;
          if (this.lines === Ue) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Ue} lines logged`);
          this.lines++;
          const Te = null === Fe ? "no touch yet" : `touch on ${Fe.text}, ${Math.round(this.burstStartMs-Fe.atMs)} ms before`,
            Be = null === be ? "" : `; inner scroll ${ze(be)} scrollTop ${ke(be.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(ee-this.burstStartMs)} ms; ${Te}${Be}: ${pe(ye,He,Je,Re)}`)
        }, this.last = ee.read(), this.low = this.last, this.high = this.last, ee.log(`start: ${Te(this.last)}`)
      }
      moved() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const ie = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== ee && (null === ie || !ee.contains(ie.target))) return;
        const He = this.deps.now();
        this.lastEventMs = He, null === this.timer && (this.burstStartMs = He, this.burstInGame = this.deps.inGame(), this.burstTouch = ie, this.timer = setTimeout(this.settle, Me));
        const ye = this.deps.read();
        this.low = Xe(this.low, ye, Math.min), this.high = Xe(this.high, ye, Math.max), this.innerScrolled = null !== ee && void 0 !== ee ? ee : this.innerScrolled
      }
    }

    function ge() {
      let ee = null;
      const ie = new Ee({
        read: qe,
        inGame: () => "inGame" === ye.e.get("gameState"),
        lastTouch: () => ee,
        log: ee => {
          (0, be.m)("scroll", ee)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (ie => {
        if (ie.target instanceof Element) {
          const He = Be(ie.target, (ee => getComputedStyle(ee).touchAction));
          ee = {
            target: ie.target,
            text: He,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (ee => {
        ie.moved(ee.target instanceof Element ? ee.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const He = () => {
        ie.moved()
      };
      window.addEventListener("resize", He, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", He, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", He, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);