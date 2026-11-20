export const id = 69;
export const ids = [69];
export const modules = {
  35944: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    const hv = {
      wait: function(vv) {
        return new Promise((zv => {
          setTimeout(zv, vv)
        }))
      },
      stallMs: 2e4
    };
    class Sv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hv;
        this.url = vv, this.options = zv, this.timing = Pv, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = vv
      }
      ready() {
        if (null === this.fetched) {
          const vv = new AbortController;
          this.fetchAbort = vv, this.fetched = this.fetchWithRetries(vv.signal).finally((() => {
            this.fetchAbort === vv && (this.fetchAbort = null)
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
      async fetchWithRetries(vv) {
        for (let zv = 0;; zv++) {
          const Pv = new URL(this.url);
          if (zv > 0 && Pv.searchParams.set("cache-bust", `${Date.now()}-${zv}`), await this.fetchWhole(Pv, vv)) return void(this.scriptUrl = Pv);
          if (zv >= 3 || vv.aborted) return;
          if (await this.timing.wait(500 * 2 ** zv), vv.aborted) return
        }
      }
      async fetchWhole(vv, zv) {
        const Pv = new AbortController;
        let hv;
        const Sv = () => {
            clearTimeout(hv), hv = setTimeout((() => {
              Pv.abort()
            }), this.timing.stallMs)
          },
          ev = () => {
            Pv.abort()
          };
        zv.addEventListener("abort", ev, {
          once: !0
        }), Sv();
        try {
          var gv;
          const zv = await fetch(vv, {
            signal: Pv.signal
          });
          if (!zv.ok) return !1;
          const hv = null === (gv = zv.body) || void 0 === gv ? void 0 : gv.getReader();
          if (!hv) return !1;
          for (;;) {
            const {
              done: vv
            } = await hv.read();
            if (vv) return !0;
            Sv()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(hv), zv.removeEventListener("abort", ev)
        }
      }
    }
  },
  42740: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      createWorldgenWorker: () => Nv,
      prefetchWorldgenWorker: () => pv,
      stopWorldgenWorkerPrefetch: () => dv,
      worldgenWorkerReady: () => gv
    });
    const hv = new(Pv(35944).e)(new URL(Pv.p + Pv.u(68), Pv.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Sv = !1,
      ev = !1;

    function gv() {
      return Sv = !0, hv.ready()
    }

    function pv() {
      hv.ready()
    }

    function dv() {
      Sv || ev || (ev = !0, hv.cancel())
    }

    function Nv() {
      return hv.start()
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);