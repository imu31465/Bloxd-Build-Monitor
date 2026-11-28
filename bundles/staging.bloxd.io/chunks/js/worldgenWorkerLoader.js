export const id = 84;
export const ids = [84];
export const modules = {
  37707: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = {
      wait: function(bb) {
        return new Promise((wb => {
          setTimeout(wb, bb)
        }))
      },
      stallMs: 2e4
    };
    class Hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eb;
        this.url = bb, this.options = wb, this.timing = Mb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).then((wb => (this.fetchAbort === bb && (this.fetchAbort = null), wb)))
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
      async fetchWithRetries(bb) {
        for (let wb = 0;; wb++) {
          const Mb = new URL(this.url);
          if (wb > 0 && Mb.searchParams.set("cache-bust", `${Date.now()}-${wb}`), await this.fetchWhole(Mb, bb)) return this.scriptUrl = Mb, !0;
          if (wb >= 3 || bb.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** wb), bb.aborted) return !1
        }
      }
      async fetchWhole(bb, wb) {
        const Mb = new AbortController;
        let eb;
        const Hb = () => {
            clearTimeout(eb), eb = setTimeout((() => {
              Mb.abort()
            }), this.timing.stallMs)
          },
          pb = () => {
            Mb.abort()
          };
        wb.addEventListener("abort", pb, {
          once: !0
        }), Hb();
        try {
          var Vb;
          const wb = await fetch(bb, {
            signal: Mb.signal
          });
          if (!wb.ok) return !1;
          const eb = null === (Vb = wb.body) || void 0 === Vb ? void 0 : Vb.getReader();
          if (!eb) return !1;
          for (;;) {
            const {
              done: bb
            } = await eb.read();
            if (bb) return !0;
            Hb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(eb), wb.removeEventListener("abort", pb)
        }
      }
    }
  },
  54925: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      createWorldgenWorker: () => Ib,
      prefetchWorldgenWorker: () => gb,
      stopWorldgenWorkerPrefetch: () => lb,
      worldgenWorkerReady: () => Vb,
      worldgenWorkerScriptUrl: () => Lb
    });
    const eb = new(Mb(37707).b)(new URL(Mb.p + Mb.u(83), Mb.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Hb = !1,
      pb = !1;

    function Vb() {
      return Hb = !0, eb.ready()
    }

    function gb() {
      eb.ready()
    }

    function lb() {
      Hb || pb || (pb = !0, eb.cancel())
    }

    function Lb() {
      return eb.href
    }

    function Ib() {
      return eb.start()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);