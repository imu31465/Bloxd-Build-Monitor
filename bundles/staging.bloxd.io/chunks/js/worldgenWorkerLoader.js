export const id = 69;
export const ids = [69];
export const modules = {
  36564: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    const pd = {
      wait: function(dd) {
        return new Promise((Jd => {
          setTimeout(Jd, dd)
        }))
      },
      stallMs: 2e4
    };
    class Nd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pd;
        this.url = dd, this.options = Jd, this.timing = kd, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).finally((() => {
            this.fetchAbort === dd && (this.fetchAbort = null)
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
      async fetchWithRetries(dd) {
        for (let Jd = 0;; Jd++) {
          const kd = new URL(this.url);
          if (Jd > 0 && kd.searchParams.set("cache-bust", `${Date.now()}-${Jd}`), await this.fetchWhole(kd, dd)) return void(this.scriptUrl = kd);
          if (Jd >= 3 || dd.aborted) return;
          if (await this.timing.wait(500 * 2 ** Jd), dd.aborted) return
        }
      }
      async fetchWhole(dd, Jd) {
        const kd = new AbortController;
        let pd;
        const Nd = () => {
            clearTimeout(pd), pd = setTimeout((() => {
              kd.abort()
            }), this.timing.stallMs)
          },
          Wd = () => {
            kd.abort()
          };
        Jd.addEventListener("abort", Wd, {
          once: !0
        }), Nd();
        try {
          var Pd;
          const Jd = await fetch(dd, {
            signal: kd.signal
          });
          if (!Jd.ok) return !1;
          const pd = null === (Pd = Jd.body) || void 0 === Pd ? void 0 : Pd.getReader();
          if (!pd) return !1;
          for (;;) {
            const {
              done: dd
            } = await pd.read();
            if (dd) return !0;
            Nd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(pd), Jd.removeEventListener("abort", Wd)
        }
      }
    }
  },
  43268: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      createWorldgenWorker: () => Cd,
      prefetchWorldgenWorker: () => Zd,
      stopWorldgenWorkerPrefetch: () => gd,
      worldgenWorkerReady: () => Pd
    });
    const pd = new(kd(36564).c)(new URL(kd.p + kd.u(68), kd.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Nd = !1,
      Wd = !1;

    function Pd() {
      return Nd = !0, pd.ready()
    }

    function Zd() {
      pd.ready()
    }

    function gd() {
      Nd || Wd || (Wd = !0, pd.cancel())
    }

    function Cd() {
      return pd.start()
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);