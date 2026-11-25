export const id = 72;
export const ids = [72];
export const modules = {
  36637: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    const Ot = {
      wait: function(tt) {
        return new Promise((et => {
          setTimeout(et, tt)
        }))
      },
      stallMs: 2e4
    };
    class qt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ot;
        this.url = tt, this.options = et, this.timing = Vt, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = tt
      }
      ready() {
        if (null === this.fetched) {
          const tt = new AbortController;
          this.fetchAbort = tt, this.fetched = this.fetchWithRetries(tt.signal).then((et => (this.fetchAbort === tt && (this.fetchAbort = null), et)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(tt) {
        for (let et = 0;; et++) {
          const Vt = new URL(this.url);
          if (et > 0 && Vt.searchParams.set("cache-bust", `${Date.now()}-${et}`), await this.fetchWhole(Vt, tt)) return this.scriptUrl = Vt, !0;
          if (et >= 3 || tt.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** et), tt.aborted) return !1
        }
      }
      async fetchWhole(tt, et) {
        const Vt = new AbortController;
        let Ot;
        const qt = () => {
            clearTimeout(Ot), Ot = setTimeout((() => {
              Vt.abort()
            }), this.timing.stallMs)
          },
          Dt = () => {
            Vt.abort()
          };
        et.addEventListener("abort", Dt, {
          once: !0
        }), qt();
        try {
          var mt;
          const et = await fetch(tt, {
            signal: Vt.signal
          });
          if (!et.ok) return !1;
          const Ot = null === (mt = et.body) || void 0 === mt ? void 0 : mt.getReader();
          if (!Ot) return !1;
          for (;;) {
            const {
              done: tt
            } = await Ot.read();
            if (tt) return !0;
            qt()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Ot), et.removeEventListener("abort", Dt)
        }
      }
    }
  },
  51323: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      createWorldgenWorker: () => Ht,
      prefetchWorldgenWorker: () => dt,
      stopWorldgenWorkerPrefetch: () => jt,
      worldgenWorkerReady: () => mt
    });
    const Ot = new(Vt(36637).b)(new URL(Vt.p + Vt.u(71), Vt.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let qt = !1,
      Dt = !1;

    function mt() {
      return qt = !0, Ot.ready()
    }

    function dt() {
      Ot.ready()
    }

    function jt() {
      qt || Dt || (Dt = !0, Ot.cancel())
    }

    function Ht() {
      return Ot.start()
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);