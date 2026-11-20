export const id = 69;
export const ids = [69];
export const modules = {
  36209: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    const lT = {
      wait: function(TT) {
        return new Promise((kT => {
          setTimeout(kT, TT)
        }))
      },
      stallMs: 2e4
    };
    class MT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lT;
        this.url = TT, this.options = kT, this.timing = cT, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = TT
      }
      ready() {
        if (null === this.fetched) {
          const TT = new AbortController;
          this.fetchAbort = TT, this.fetched = this.fetchWithRetries(TT.signal).finally((() => {
            this.fetchAbort === TT && (this.fetchAbort = null)
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
      async fetchWithRetries(TT) {
        for (let kT = 0;; kT++) {
          const cT = new URL(this.url);
          if (kT > 0 && cT.searchParams.set("cache-bust", `${Date.now()}-${kT}`), await this.fetchWhole(cT, TT)) return void(this.scriptUrl = cT);
          if (kT >= 3 || TT.aborted) return;
          if (await this.timing.wait(500 * 2 ** kT), TT.aborted) return
        }
      }
      async fetchWhole(TT, kT) {
        const cT = new AbortController;
        let lT;
        const MT = () => {
            clearTimeout(lT), lT = setTimeout((() => {
              cT.abort()
            }), this.timing.stallMs)
          },
          KT = () => {
            cT.abort()
          };
        kT.addEventListener("abort", KT, {
          once: !0
        }), MT();
        try {
          var OT;
          const kT = await fetch(TT, {
            signal: cT.signal
          });
          if (!kT.ok) return !1;
          const lT = null === (OT = kT.body) || void 0 === OT ? void 0 : OT.getReader();
          if (!lT) return !1;
          for (;;) {
            const {
              done: TT
            } = await lT.read();
            if (TT) return !0;
            MT()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(lT), kT.removeEventListener("abort", KT)
        }
      }
    }
  },
  42859: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      createWorldgenWorker: () => xT,
      prefetchWorldgenWorker: () => yT,
      stopWorldgenWorkerPrefetch: () => fT,
      worldgenWorkerReady: () => OT
    });
    const lT = new(cT(36209).c)(new URL(cT.p + cT.u(68), cT.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let MT = !1,
      KT = !1;

    function OT() {
      return MT = !0, lT.ready()
    }

    function yT() {
      lT.ready()
    }

    function fT() {
      MT || KT || (KT = !0, lT.cancel())
    }

    function xT() {
      return lT.start()
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);