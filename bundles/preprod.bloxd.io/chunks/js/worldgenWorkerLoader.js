export const id = 72;
export const ids = [72];
export const modules = {
  36630: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    const Op = {
      wait: function(pp) {
        return new Promise((ip => {
          setTimeout(ip, pp)
        }))
      },
      stallMs: 2e4
    };
    class op {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Op;
        this.url = pp, this.options = ip, this.timing = cp, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = pp
      }
      ready() {
        if (null === this.fetched) {
          const pp = new AbortController;
          this.fetchAbort = pp, this.fetched = this.fetchWithRetries(pp.signal).then((ip => (this.fetchAbort === pp && (this.fetchAbort = null), ip)))
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
      async fetchWithRetries(pp) {
        for (let ip = 0;; ip++) {
          const cp = new URL(this.url);
          if (ip > 0 && cp.searchParams.set("cache-bust", `${Date.now()}-${ip}`), await this.fetchWhole(cp, pp)) return this.scriptUrl = cp, !0;
          if (ip >= 3 || pp.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ip), pp.aborted) return !1
        }
      }
      async fetchWhole(pp, ip) {
        const cp = new AbortController;
        let Op;
        const op = () => {
            clearTimeout(Op), Op = setTimeout((() => {
              cp.abort()
            }), this.timing.stallMs)
          },
          Ip = () => {
            cp.abort()
          };
        ip.addEventListener("abort", Ip, {
          once: !0
        }), op();
        try {
          var Sp;
          const ip = await fetch(pp, {
            signal: cp.signal
          });
          if (!ip.ok) return !1;
          const Op = null === (Sp = ip.body) || void 0 === Sp ? void 0 : Sp.getReader();
          if (!Op) return !1;
          for (;;) {
            const {
              done: pp
            } = await Op.read();
            if (pp) return !0;
            op()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Op), ip.removeEventListener("abort", Ip)
        }
      }
    }
  },
  51244: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      createWorldgenWorker: () => Yp,
      prefetchWorldgenWorker: () => xp,
      stopWorldgenWorkerPrefetch: () => Lp,
      worldgenWorkerReady: () => Sp
    });
    const Op = new(cp(36630).b)(new URL(cp.p + cp.u(71), cp.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let op = !1,
      Ip = !1;

    function Sp() {
      return op = !0, Op.ready()
    }

    function xp() {
      Op.ready()
    }

    function Lp() {
      op || Ip || (Ip = !0, Op.cancel())
    }

    function Yp() {
      return Op.start()
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);