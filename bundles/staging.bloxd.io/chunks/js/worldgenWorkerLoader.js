export const id = 68;
export const ids = [68];
export const modules = {
  35985: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    const tU = {
      wait: function(UU) {
        return new Promise((RU => {
          setTimeout(RU, UU)
        }))
      },
      stallMs: 2e4
    };
    class pU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tU;
        this.url = UU, this.options = RU, this.timing = gU, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = UU
      }
      ready() {
        if (null === this.fetched) {
          const UU = new AbortController;
          this.fetchAbort = UU, this.fetched = this.fetchWithRetries(UU.signal).finally((() => {
            this.fetchAbort === UU && (this.fetchAbort = null)
          }))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(UU) {
        for (let RU = 0;; RU++) {
          const gU = new URL(this.url);
          if (RU > 0 && gU.searchParams.set("cache-bust", `${Date.now()}-${RU}`), await this.fetchWhole(gU, UU)) return void(this.scriptUrl = gU);
          if (RU >= 3 || UU.aborted) return;
          if (await this.timing.wait(500 * 2 ** RU), UU.aborted) return
        }
      }
      async fetchWhole(UU, RU) {
        const gU = new AbortController;
        let tU;
        const pU = () => {
            clearTimeout(tU), tU = setTimeout((() => {
              gU.abort()
            }), this.timing.stallMs)
          },
          EU = () => {
            gU.abort()
          };
        RU.addEventListener("abort", EU, {
          once: !0
        }), pU();
        try {
          var PU;
          const RU = await fetch(UU, {
            signal: gU.signal
          });
          if (!RU.ok) return !1;
          const tU = null === (PU = RU.body) || void 0 === PU ? void 0 : PU.getReader();
          if (!tU) return !1;
          for (;;) {
            const {
              done: UU
            } = await tU.read();
            if (UU) return !0;
            pU()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(tU), RU.removeEventListener("abort", EU)
        }
      }
    }
  },
  42671: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      createWorldgenWorker: () => KU,
      prefetchWorldgenWorker: () => TU,
      stopWorldgenWorkerPrefetch: () => qU,
      worldgenWorkerReady: () => PU
    });
    const tU = new(gU(35985).c)(new URL(gU.p + gU.u(67), gU.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let pU = !1,
      EU = !1;

    function PU() {
      return pU = !0, tU.ready()
    }

    function TU() {
      tU.ready()
    }

    function qU() {
      pU || EU || (EU = !0, tU.cancel())
    }

    function KU() {
      return tU.start()
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);