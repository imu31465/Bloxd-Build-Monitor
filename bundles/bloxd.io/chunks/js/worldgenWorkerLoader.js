export const id = 68;
export const ids = [68];
export const modules = {
  36132: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    const Rk = {
      wait: function(kk) {
        return new Promise((Fk => {
          setTimeout(Fk, kk)
        }))
      },
      stallMs: 2e4
    };
    class tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rk;
        this.url = kk, this.options = Fk, this.timing = Bk, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = kk
      }
      ready() {
        if (null === this.fetched) {
          const kk = new AbortController;
          this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).finally((() => {
            this.fetchAbort === kk && (this.fetchAbort = null)
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
      async fetchWithRetries(kk) {
        for (let Fk = 0;; Fk++) {
          const Bk = new URL(this.url);
          if (Fk > 0 && Bk.searchParams.set("cache-bust", `${Date.now()}-${Fk}`), await this.fetchWhole(Bk, kk)) return void(this.scriptUrl = Bk);
          if (Fk >= 3 || kk.aborted) return;
          if (await this.timing.wait(500 * 2 ** Fk), kk.aborted) return
        }
      }
      async fetchWhole(kk, Fk) {
        const Bk = new AbortController;
        let Rk;
        const tk = () => {
            clearTimeout(Rk), Rk = setTimeout((() => {
              Bk.abort()
            }), this.timing.stallMs)
          },
          ak = () => {
            Bk.abort()
          };
        Fk.addEventListener("abort", ak, {
          once: !0
        }), tk();
        try {
          var Xk;
          const Fk = await fetch(kk, {
            signal: Bk.signal
          });
          if (!Fk.ok) return !1;
          const Rk = null === (Xk = Fk.body) || void 0 === Xk ? void 0 : Xk.getReader();
          if (!Rk) return !1;
          for (;;) {
            const {
              done: kk
            } = await Rk.read();
            if (kk) return !0;
            tk()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Rk), Fk.removeEventListener("abort", ak)
        }
      }
    }
  },
  42804: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      createWorldgenWorker: () => dk,
      prefetchWorldgenWorker: () => bk,
      stopWorldgenWorkerPrefetch: () => wk,
      worldgenWorkerReady: () => Xk
    });
    const Rk = new(Bk(36132).c)(new URL(Bk.p + Bk.u(67), Bk.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let tk = !1,
      ak = !1;

    function Xk() {
      return tk = !0, Rk.ready()
    }

    function bk() {
      Rk.ready()
    }

    function wk() {
      tk || ak || (ak = !0, Rk.cancel())
    }

    function dk() {
      return Rk.start()
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);