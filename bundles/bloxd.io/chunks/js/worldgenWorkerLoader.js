export const id = 71;
export const ids = [71];
export const modules = {
  36487: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    const hm = {
      wait: function(mm) {
        return new Promise((Tm => {
          setTimeout(Tm, mm)
        }))
      },
      stallMs: 2e4
    };
    class Am {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hm;
        this.url = mm, this.options = Tm, this.timing = fm, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = mm
      }
      ready() {
        if (null === this.fetched) {
          const mm = new AbortController;
          this.fetchAbort = mm, this.fetched = this.fetchWithRetries(mm.signal).then((Tm => (this.fetchAbort === mm && (this.fetchAbort = null), Tm)))
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
      async fetchWithRetries(mm) {
        for (let Tm = 0;; Tm++) {
          const fm = new URL(this.url);
          if (Tm > 0 && fm.searchParams.set("cache-bust", `${Date.now()}-${Tm}`), await this.fetchWhole(fm, mm)) return this.scriptUrl = fm, !0;
          if (Tm >= 3 || mm.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Tm), mm.aborted) return !1
        }
      }
      async fetchWhole(mm, Tm) {
        const fm = new AbortController;
        let hm;
        const Am = () => {
            clearTimeout(hm), hm = setTimeout((() => {
              fm.abort()
            }), this.timing.stallMs)
          },
          am = () => {
            fm.abort()
          };
        Tm.addEventListener("abort", am, {
          once: !0
        }), Am();
        try {
          var xm;
          const Tm = await fetch(mm, {
            signal: fm.signal
          });
          if (!Tm.ok) return !1;
          const hm = null === (xm = Tm.body) || void 0 === xm ? void 0 : xm.getReader();
          if (!hm) return !1;
          for (;;) {
            const {
              done: mm
            } = await hm.read();
            if (mm) return !0;
            Am()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(hm), Tm.removeEventListener("abort", am)
        }
      }
    }
  },
  51020: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      createWorldgenWorker: () => im,
      prefetchWorldgenWorker: () => wm,
      stopWorldgenWorkerPrefetch: () => Dm,
      worldgenWorkerReady: () => xm
    });
    const hm = new(fm(36487).d)(new URL(fm.p + fm.u(70), fm.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Am = !1,
      am = !1;

    function xm() {
      return Am = !0, hm.ready()
    }

    function wm() {
      hm.ready()
    }

    function Dm() {
      Am || am || (am = !0, hm.cancel())
    }

    function im() {
      return hm.start()
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);