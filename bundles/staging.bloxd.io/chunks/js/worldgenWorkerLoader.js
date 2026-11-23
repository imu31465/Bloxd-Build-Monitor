export const id = 71;
export const ids = [71];
export const modules = {
  36393: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    const Xk = {
      wait: function(kk) {
        return new Promise((Fk => {
          setTimeout(Fk, kk)
        }))
      },
      stallMs: 2e4
    };
    class Tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xk;
        this.url = kk, this.options = Fk, this.timing = Ik, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = kk
      }
      ready() {
        if (null === this.fetched) {
          const kk = new AbortController;
          this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).then((Fk => (this.fetchAbort === kk && (this.fetchAbort = null), Fk)))
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
      async fetchWithRetries(kk) {
        for (let Fk = 0;; Fk++) {
          const Ik = new URL(this.url);
          if (Fk > 0 && Ik.searchParams.set("cache-bust", `${Date.now()}-${Fk}`), await this.fetchWhole(Ik, kk)) return this.scriptUrl = Ik, !0;
          if (Fk >= 3 || kk.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Fk), kk.aborted) return !1
        }
      }
      async fetchWhole(kk, Fk) {
        const Ik = new AbortController;
        let Xk;
        const Tk = () => {
            clearTimeout(Xk), Xk = setTimeout((() => {
              Ik.abort()
            }), this.timing.stallMs)
          },
          ik = () => {
            Ik.abort()
          };
        Fk.addEventListener("abort", ik, {
          once: !0
        }), Tk();
        try {
          var yk;
          const Fk = await fetch(kk, {
            signal: Ik.signal
          });
          if (!Fk.ok) return !1;
          const Xk = null === (yk = Fk.body) || void 0 === yk ? void 0 : yk.getReader();
          if (!Xk) return !1;
          for (;;) {
            const {
              done: kk
            } = await Xk.read();
            if (kk) return !0;
            Tk()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Xk), Fk.removeEventListener("abort", ik)
        }
      }
    }
  },
  51008: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      createWorldgenWorker: () => qk,
      prefetchWorldgenWorker: () => lk,
      stopWorldgenWorkerPrefetch: () => ak,
      worldgenWorkerReady: () => yk
    });
    const Xk = new(Ik(36393).c)(new URL(Ik.p + Ik.u(70), Ik.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Tk = !1,
      ik = !1;

    function yk() {
      return Tk = !0, Xk.ready()
    }

    function lk() {
      Xk.ready()
    }

    function ak() {
      Tk || ik || (ik = !0, Xk.cancel())
    }

    function qk() {
      return Xk.start()
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);