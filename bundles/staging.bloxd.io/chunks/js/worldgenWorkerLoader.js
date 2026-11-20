export const id = 68;
export const ids = [68];
export const modules = {
  36266: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    const Eu = {
      wait: function(uu) {
        return new Promise((Ru => {
          setTimeout(Ru, uu)
        }))
      },
      stallMs: 2e4
    };
    class Ku {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu;
        this.url = uu, this.options = Ru, this.timing = yu, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = uu
      }
      ready() {
        if (null === this.fetched) {
          const uu = new AbortController;
          this.fetchAbort = uu, this.fetched = this.fetchWithRetries(uu.signal).finally((() => {
            this.fetchAbort === uu && (this.fetchAbort = null)
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
      async fetchWithRetries(uu) {
        for (let Ru = 0;; Ru++) {
          const yu = new URL(this.url);
          if (Ru > 0 && yu.searchParams.set("cache-bust", `${Date.now()}-${Ru}`), await this.fetchWhole(yu, uu)) return void(this.scriptUrl = yu);
          if (Ru >= 3 || uu.aborted) return;
          if (await this.timing.wait(500 * 2 ** Ru), uu.aborted) return
        }
      }
      async fetchWhole(uu, Ru) {
        const yu = new AbortController;
        let Eu;
        const Ku = () => {
            clearTimeout(Eu), Eu = setTimeout((() => {
              yu.abort()
            }), this.timing.stallMs)
          },
          Qu = () => {
            yu.abort()
          };
        Ru.addEventListener("abort", Qu, {
          once: !0
        }), Ku();
        try {
          var mu;
          const Ru = await fetch(uu, {
            signal: yu.signal
          });
          if (!Ru.ok) return !1;
          const Eu = null === (mu = Ru.body) || void 0 === mu ? void 0 : mu.getReader();
          if (!Eu) return !1;
          for (;;) {
            const {
              done: uu
            } = await Eu.read();
            if (uu) return !0;
            Ku()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Eu), Ru.removeEventListener("abort", Qu)
        }
      }
    }
  },
  42923: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      createWorldgenWorker: () => Xu,
      prefetchWorldgenWorker: () => Ju,
      stopWorldgenWorkerPrefetch: () => Nu,
      worldgenWorkerReady: () => mu
    });
    const Eu = new(yu(36266).e)(new URL(yu.p + yu.u(67), yu.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Ku = !1,
      Qu = !1;

    function mu() {
      return Ku = !0, Eu.ready()
    }

    function Ju() {
      Eu.ready()
    }

    function Nu() {
      Ku || Qu || (Qu = !0, Eu.cancel())
    }

    function Xu() {
      return Eu.start()
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);