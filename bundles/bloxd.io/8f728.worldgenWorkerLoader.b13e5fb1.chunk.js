export const id = 59;
export const ids = [59];
export const modules = {
  35095: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    const Vc = {
      wait: function(cB) {
        return new Promise((Bc => {
          setTimeout(Bc, cB)
        }))
      },
      stallMs: 2e4
    };
    class Ic {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vc;
        this.url = cB, this.options = Bc, this.timing = nc, this.fetched = null, this.scriptUrl = void 0, this.scriptUrl = cB
      }
      ready() {
        return this.fetched ??= this.fetchWithRetries(), this.fetched
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries() {
        for (let cB = 0;; cB++) {
          const Bc = new URL(this.url);
          if (cB > 0 && Bc.searchParams.set("cache-bust", `${Date.now()}-${cB}`), await this.fetchWhole(Bc)) return void(this.scriptUrl = Bc);
          if (cB >= 3) return;
          await this.timing.wait(500 * 2 ** cB)
        }
      }
      async fetchWhole(cB) {
        const Bc = new AbortController;
        let nc;
        const Vc = () => {
          clearTimeout(nc), nc = setTimeout((() => {
            Bc.abort()
          }), this.timing.stallMs)
        };
        Vc();
        try {
          var Ic;
          const nc = await fetch(cB, {
            signal: Bc.signal
          });
          if (!nc.ok) return !1;
          const rB = null === (Ic = nc.body) || void 0 === Ic ? void 0 : Ic.getReader();
          if (!rB) return !1;
          for (;;) {
            const {
              done: cB
            } = await rB.read();
            if (cB) return !0;
            Vc()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(nc)
        }
      }
    }
  },
  41258: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      createWorldgenWorker: () => rB,
      worldgenWorkerReady: () => Ic
    });
    const Vc = new(nc(35095).c)(new URL(nc.p + nc.u(58), nc.b), {
      name: "worldgenWorker",
      type: "module"
    });

    function Ic() {
      return Vc.ready()
    }

    function rB() {
      return Vc.start()
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);