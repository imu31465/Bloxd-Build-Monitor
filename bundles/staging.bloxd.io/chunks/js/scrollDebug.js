export const id = 52;
export const ids = [52];
export const modules = {
  4733: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      MAX_LINES: () => LD,
      MAX_SETTLE_MS: () => rD,
      SETTLE_MS: () => KD,
      ScrollDebugLog: () => OD,
      changeText: () => GD,
      elementText: () => nD,
      fullStateText: () => BD,
      startScrollDebug: () => JD,
      touchedText: () => MD
    });
    var pD = wD(20),
      sD = wD(2811);
    const KD = 300,
      rD = 2e3,
      LD = 40,
      cD = 2,
      gD = {
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
      RD = Object.keys(gD),
      AD = new Set(["scrollHeight", "innerHeight"]);

    function UD(DD, zD) {
      const wD = 10 ** zD;
      return Math.round(DD * wD) / wD
    }

    function fD() {
      const DD = window.visualViewport;
      return {
        vvOffsetTop: UD(DD.offsetTop, 1),
        vvOffsetLeft: UD(DD.offsetLeft, 1),
        vvPageTop: UD(DD.pageTop, 1),
        vvPageLeft: UD(DD.pageLeft, 1),
        vvHeight: UD(DD.height, 1),
        vvScale: UD(DD.scale, 3),
        scrollX: UD(window.scrollX, 1),
        scrollY: UD(window.scrollY, 1),
        scrollHeight: document.documentElement.scrollHeight,
        innerHeight: window.innerHeight
      }
    }

    function ID(DD, zD) {
      return `${gD[DD]} ${zD}`
    }

    function BD(DD) {
      return RD.map((zD => ID(zD, String(DD[zD])))).join(", ")
    }

    function GD(DD, zD, wD, pD) {
      return RD.flatMap((sD => {
        const KD = DD[sD] !== zD[sD],
          rD = wD[sD] < Math.min(DD[sD], zD[sD]) || pD[sD] > Math.max(DD[sD], zD[sD]);
        if (!KD && !rD && !AD.has(sD)) return [];
        return [ID(sD, `${KD?`${DD[sD]} -> ${zD[sD]}`:String(zD[sD])}${rD?` (via ${wD[sD]}..${pD[sD]})`:""}`)]
      })).join(", ")
    }

    function hD(DD, zD, wD) {
      return Object.fromEntries(RD.map((pD => [pD, wD(DD[pD], zD[pD])])))
    }

    function nD(DD) {
      var zD;
      const wD = (null !== (zD = DD.getAttribute("class")) && void 0 !== zD ? zD : "").trim().replace(/\s+/g, ".").slice(0, 40);
      return `${DD.tagName.toLowerCase()}${wD?`.${wD}`:""}`
    }

    function MD(DD, zD) {
      const wD = [];
      for (let pD = DD.parentElement; null !== pD && wD.length < cD; pD = pD.parentElement) {
        const DD = zD(pD);
        "auto" !== DD && wD.push(`${DD} on ${nD(pD)}`)
      }
      return `${nD(DD)} touch-action ${zD(DD)}${wD.length>0?` (${wD.join(", ")})`:""}`
    }
    class OD {
      constructor(DD) {
        this.deps = DD, this.last = void 0, this.low = void 0, this.high = void 0, this.innerScrolled = null, this.burstInGame = !1, this.burstTouch = null, this.lines = 0, this.capped = !1, this.burstStartMs = 0, this.lastEventMs = 0, this.timer = null, this.settle = () => {
          const DD = this.deps.now(),
            zD = DD - this.lastEventMs;
          if (zD < KD && DD - this.burstStartMs < rD) return void(this.timer = setTimeout(this.settle, KD - zD));
          this.timer = null;
          const wD = this.deps.read(),
            {
              last: pD,
              innerScrolled: sD,
              burstTouch: cD
            } = this,
            gD = hD(this.low, wD, Math.min),
            AD = hD(this.high, wD, Math.max);
          if (this.last = wD, this.low = wD, this.high = wD, this.innerScrolled = null, fD = gD, ID = AD, RD.every((DD => fD[DD] === ID[DD])) || !this.burstInGame || !this.deps.inGame()) return;
          var fD, ID;
          if (this.lines === LD) return this.capped = !0, void this.deps.log(`further changes unlogged: ${LD} lines logged`);
          this.lines++;
          const BD = null === cD ? "no touch yet" : `touch on ${cD.text}, ${Math.round(this.burstStartMs-cD.atMs)} ms before`,
            MD = null === sD ? "" : `; inner scroll ${nD(sD)} scrollTop ${UD(sD.scrollTop,1)}`;
          this.deps.log(`moved over ${Math.round(DD-this.burstStartMs)} ms; ${BD}${MD}: ${GD(pD,wD,gD,AD)}`)
        }, this.last = DD.read(), this.low = this.last, this.high = this.last, DD.log(`start: ${BD(this.last)}`)
      }
      moved() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.capped) return;
        const zD = null === this.timer ? this.deps.lastTouch() : this.burstTouch;
        if (null !== DD && (null === zD || !DD.contains(zD.target))) return;
        const wD = this.deps.now();
        this.lastEventMs = wD, null === this.timer && (this.burstStartMs = wD, this.burstInGame = this.deps.inGame(), this.burstTouch = zD, this.timer = setTimeout(this.settle, KD));
        const pD = this.deps.read();
        this.low = hD(this.low, pD, Math.min), this.high = hD(this.high, pD, Math.max), this.innerScrolled = null !== DD && void 0 !== DD ? DD : this.innerScrolled
      }
    }

    function JD() {
      let DD = null;
      const zD = new OD({
        read: fD,
        inGame: () => "inGame" === pD.e.get("gameState"),
        lastTouch: () => DD,
        log: DD => {
          (0, sD.l)("scroll", DD)
        },
        now: () => performance.now()
      });
      document.addEventListener("touchstart", (zD => {
        if (zD.target instanceof Element) {
          const wD = MD(zD.target, (DD => getComputedStyle(DD).touchAction));
          DD = {
            target: zD.target,
            text: wD,
            atMs: performance.now()
          }
        }
      }), {
        capture: !0,
        passive: !0
      }), document.addEventListener("scroll", (DD => {
        zD.moved(DD.target instanceof Element ? DD.target : null)
      }), {
        capture: !0,
        passive: !0
      });
      const wD = () => {
        zD.moved()
      };
      window.addEventListener("resize", wD, {
        passive: !0
      }), window.visualViewport.addEventListener("scroll", wD, {
        passive: !0
      }), window.visualViewport.addEventListener("resize", wD, {
        passive: !0
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);