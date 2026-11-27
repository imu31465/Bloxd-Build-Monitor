export const id = 84;
export const ids = [84];
export const modules = {
  37945: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = {
      wait: function(rr) {
        return new Promise((Sr => {
          setTimeout(Sr, rr)
        }))
      },
      stallMs: 2e4
    };
    class Wr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zr;
        this.url = rr, this.options = Sr, this.timing = Qr, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = rr
      }
      ready() {
        if (null === this.fetched) {
          const rr = new AbortController;
          this.fetchAbort = rr, this.fetched = this.fetchWithRetries(rr.signal).then((Sr => (this.fetchAbort === rr && (this.fetchAbort = null), Sr)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(rr) {
        for (let Sr = 0;; Sr++) {
          const Qr = new URL(this.url);
          if (Sr > 0 && Qr.searchParams.set("cache-bust", `${Date.now()}-${Sr}`), await this.fetchWhole(Qr, rr)) return this.scriptUrl = Qr, !0;
          if (Sr >= 3 || rr.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Sr), rr.aborted) return !1
        }
      }
      async fetchWhole(rr, Sr) {
        const Qr = new AbortController;
        let Zr;
        const Wr = () => {
            clearTimeout(Zr), Zr = setTimeout((() => {
              Qr.abort()
            }), this.timing.stallMs)
          },
          ar = () => {
            Qr.abort()
          };
        Sr.addEventListener("abort", ar, {
          once: !0
        }), Wr();
        try {
          var jr;
          const Sr = await fetch(rr, {
            signal: Qr.signal
          });
          if (!Sr.ok) return !1;
          const Zr = null === (jr = Sr.body) || void 0 === jr ? void 0 : jr.getReader();
          if (!Zr) return !1;
          for (;;) {
            const {
              done: rr
            } = await Zr.read();
            if (rr) return !0;
            Wr()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Zr), Sr.removeEventListener("abort", ar)
        }
      }
    }
  },
  55186: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      createWorldgenWorker: () => pr,
      prefetchWorldgenWorker: () => Ir,
      stopWorldgenWorkerPrefetch: () => fr,
      worldgenWorkerReady: () => jr,
      worldgenWorkerScriptUrl: () => Er
    });
    const Zr = new(Qr(37945).d)(new URL(Qr.p + Qr.u(83), Qr.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Wr = !1,
      ar = !1;

    function jr() {
      return Wr = !0, Zr.ready()
    }

    function Ir() {
      Zr.ready()
    }

    function fr() {
      Wr || ar || (ar = !0, Zr.cancel())
    }

    function Er() {
      return Zr.href
    }

    function pr() {
      return Zr.start()
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);