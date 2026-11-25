export const id = 72;
export const ids = [72];
export const modules = {
  36792: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    const su = {
      wait: function(uu) {
        return new Promise((Eu => {
          setTimeout(Eu, uu)
        }))
      },
      stallMs: 2e4
    };
    class Uu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : su;
        this.url = uu, this.options = Eu, this.timing = ju, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = uu
      }
      ready() {
        if (null === this.fetched) {
          const uu = new AbortController;
          this.fetchAbort = uu, this.fetched = this.fetchWithRetries(uu.signal).then((Eu => (this.fetchAbort === uu && (this.fetchAbort = null), Eu)))
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
      async fetchWithRetries(uu) {
        for (let Eu = 0;; Eu++) {
          const ju = new URL(this.url);
          if (Eu > 0 && ju.searchParams.set("cache-bust", `${Date.now()}-${Eu}`), await this.fetchWhole(ju, uu)) return this.scriptUrl = ju, !0;
          if (Eu >= 3 || uu.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Eu), uu.aborted) return !1
        }
      }
      async fetchWhole(uu, Eu) {
        const ju = new AbortController;
        let su;
        const Uu = () => {
            clearTimeout(su), su = setTimeout((() => {
              ju.abort()
            }), this.timing.stallMs)
          },
          Zu = () => {
            ju.abort()
          };
        Eu.addEventListener("abort", Zu, {
          once: !0
        }), Uu();
        try {
          var Xu;
          const Eu = await fetch(uu, {
            signal: ju.signal
          });
          if (!Eu.ok) return !1;
          const su = null === (Xu = Eu.body) || void 0 === Xu ? void 0 : Xu.getReader();
          if (!su) return !1;
          for (;;) {
            const {
              done: uu
            } = await su.read();
            if (uu) return !0;
            Uu()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(su), Eu.removeEventListener("abort", Zu)
        }
      }
    }
  },
  51298: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      createWorldgenWorker: () => fu,
      prefetchWorldgenWorker: () => lu,
      stopWorldgenWorkerPrefetch: () => qu,
      worldgenWorkerReady: () => Xu
    });
    const su = new(ju(36792).d)(new URL(ju.p + ju.u(71), ju.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Uu = !1,
      Zu = !1;

    function Xu() {
      return Uu = !0, su.ready()
    }

    function lu() {
      su.ready()
    }

    function qu() {
      Uu || Zu || (Zu = !0, su.cancel())
    }

    function fu() {
      return su.start()
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);