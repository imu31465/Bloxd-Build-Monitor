export const id = 84;
export const ids = [84];
export const modules = {
  38022: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    const Wd = {
      wait: function(dd) {
        return new Promise((Od => {
          setTimeout(Od, dd)
        }))
      },
      stallMs: 2e4
    };
    class Fd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wd;
        this.url = dd, this.options = Od, this.timing = md, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).then((Od => (this.fetchAbort === dd && (this.fetchAbort = null), Od)))
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
      async fetchWithRetries(dd) {
        for (let Od = 0;; Od++) {
          const md = new URL(this.url);
          if (Od > 0 && md.searchParams.set("cache-bust", `${Date.now()}-${Od}`), await this.fetchWhole(md, dd)) return this.scriptUrl = md, !0;
          if (Od >= 3 || dd.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Od), dd.aborted) return !1
        }
      }
      async fetchWhole(dd, Od) {
        const md = new AbortController;
        let Wd;
        const Fd = () => {
            clearTimeout(Wd), Wd = setTimeout((() => {
              md.abort()
            }), this.timing.stallMs)
          },
          Rd = () => {
            md.abort()
          };
        Od.addEventListener("abort", Rd, {
          once: !0
        }), Fd();
        try {
          var Xd;
          const Od = await fetch(dd, {
            signal: md.signal
          });
          if (!Od.ok) return !1;
          const Wd = null === (Xd = Od.body) || void 0 === Xd ? void 0 : Xd.getReader();
          if (!Wd) return !1;
          for (;;) {
            const {
              done: dd
            } = await Wd.read();
            if (dd) return !0;
            Fd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Wd), Od.removeEventListener("abort", Rd)
        }
      }
    }
  },
  55121: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      createWorldgenWorker: () => Qd,
      prefetchWorldgenWorker: () => Kd,
      stopWorldgenWorkerPrefetch: () => hd,
      worldgenWorkerReady: () => Xd,
      worldgenWorkerScriptUrl: () => vd
    });
    const Wd = new(md(38022).c)(new URL(md.p + md.u(83), md.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Fd = !1,
      Rd = !1;

    function Xd() {
      return Fd = !0, Wd.ready()
    }

    function Kd() {
      Wd.ready()
    }

    function hd() {
      Fd || Rd || (Rd = !0, Wd.cancel())
    }

    function vd() {
      return Wd.href
    }

    function Qd() {
      return Wd.start()
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);