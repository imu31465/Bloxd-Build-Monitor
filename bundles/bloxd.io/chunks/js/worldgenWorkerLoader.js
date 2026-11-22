export const id = 71;
export const ids = [71];
export const modules = {
  35939: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk
    });
    const Dk = {
      wait: function(kk) {
        return new Promise((ek => {
          setTimeout(ek, kk)
        }))
      },
      stallMs: 2e4
    };
    class fk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dk;
        this.url = kk, this.options = ek, this.timing = ik, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = kk
      }
      ready() {
        if (null === this.fetched) {
          const kk = new AbortController;
          this.fetchAbort = kk, this.fetched = this.fetchWithRetries(kk.signal).then((ek => (this.fetchAbort === kk && (this.fetchAbort = null), ek)))
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
        for (let ek = 0;; ek++) {
          const ik = new URL(this.url);
          if (ek > 0 && ik.searchParams.set("cache-bust", `${Date.now()}-${ek}`), await this.fetchWhole(ik, kk)) return this.scriptUrl = ik, !0;
          if (ek >= 3 || kk.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ek), kk.aborted) return !1
        }
      }
      async fetchWhole(kk, ek) {
        const ik = new AbortController;
        let Dk;
        const fk = () => {
            clearTimeout(Dk), Dk = setTimeout((() => {
              ik.abort()
            }), this.timing.stallMs)
          },
          Sk = () => {
            ik.abort()
          };
        ek.addEventListener("abort", Sk, {
          once: !0
        }), fk();
        try {
          var bk;
          const ek = await fetch(kk, {
            signal: ik.signal
          });
          if (!ek.ok) return !1;
          const Dk = null === (bk = ek.body) || void 0 === bk ? void 0 : bk.getReader();
          if (!Dk) return !1;
          for (;;) {
            const {
              done: kk
            } = await Dk.read();
            if (kk) return !0;
            fk()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Dk), ek.removeEventListener("abort", Sk)
        }
      }
    }
  },
  50593: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      createWorldgenWorker: () => mk,
      prefetchWorldgenWorker: () => rk,
      stopWorldgenWorkerPrefetch: () => Pk,
      worldgenWorkerReady: () => bk
    });
    const Dk = new(ik(35939).d)(new URL(ik.p + ik.u(70), ik.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let fk = !1,
      Sk = !1;

    function bk() {
      return fk = !0, Dk.ready()
    }

    function rk() {
      Dk.ready()
    }

    function Pk() {
      fk || Sk || (Sk = !0, Dk.cancel())
    }

    function mk() {
      return Dk.start()
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);