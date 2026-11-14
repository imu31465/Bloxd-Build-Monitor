export const id = 58;
export const ids = [58];
export const modules = {
  40791: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      createWorldgenWorker: () => AW,
      worldgenWorkerReady: () => zR
    });
    const wW = {
      wait: function(WW) {
        return new Promise((RW => {
          setTimeout(RW, WW)
        }))
      },
      stallMs: 2e4
    };
    const CW = new class {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wW;
        this.url = WW, this.options = RW, this.timing = MW, this.fetched = null, this.scriptUrl = void 0, this.scriptUrl = WW
      }
      ready() {
        return this.fetched ??= this.fetchWithRetries(), this.fetched
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries() {
        for (let WW = 0;; WW++) {
          const RW = new URL(this.url);
          if (WW > 0 && RW.searchParams.set("cache-bust", `${Date.now()}-${WW}`), await this.fetchWhole(RW)) return void(this.scriptUrl = RW);
          if (WW >= 3) return;
          await this.timing.wait(500 * 2 ** WW)
        }
      }
      async fetchWhole(WW) {
        const RW = new AbortController;
        let MW;
        const wW = () => {
          clearTimeout(MW), MW = setTimeout((() => {
            RW.abort()
          }), this.timing.stallMs)
        };
        wW();
        try {
          var CW;
          const MW = await fetch(WW, {
            signal: RW.signal
          });
          if (!MW.ok) return !1;
          const zR = null === (CW = MW.body) || void 0 === CW ? void 0 : CW.getReader();
          if (!zR) return !1;
          for (;;) {
            const {
              done: WW
            } = await zR.read();
            if (WW) return !0;
            wW()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(MW)
        }
      }
    }(new URL(MW.p + MW.u(57), MW.b), {
      name: "worldgenWorker",
      type: "module"
    });

    function zR() {
      return CW.ready()
    }

    function AW() {
      return CW.start()
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);