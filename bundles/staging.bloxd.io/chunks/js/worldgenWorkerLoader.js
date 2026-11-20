export const id = 69;
export const ids = [69];
export const modules = {
  36461: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    const Yq = {
      wait: function(qq) {
        return new Promise((Eq => {
          setTimeout(Eq, qq)
        }))
      },
      stallMs: 2e4
    };
    class lq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yq;
        this.url = qq, this.options = Eq, this.timing = gq, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = qq
      }
      ready() {
        if (null === this.fetched) {
          const qq = new AbortController;
          this.fetchAbort = qq, this.fetched = this.fetchWithRetries(qq.signal).finally((() => {
            this.fetchAbort === qq && (this.fetchAbort = null)
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
      async fetchWithRetries(qq) {
        for (let Eq = 0;; Eq++) {
          const gq = new URL(this.url);
          if (Eq > 0 && gq.searchParams.set("cache-bust", `${Date.now()}-${Eq}`), await this.fetchWhole(gq, qq)) return void(this.scriptUrl = gq);
          if (Eq >= 3 || qq.aborted) return;
          if (await this.timing.wait(500 * 2 ** Eq), qq.aborted) return
        }
      }
      async fetchWhole(qq, Eq) {
        const gq = new AbortController;
        let Yq;
        const lq = () => {
            clearTimeout(Yq), Yq = setTimeout((() => {
              gq.abort()
            }), this.timing.stallMs)
          },
          Oq = () => {
            gq.abort()
          };
        Eq.addEventListener("abort", Oq, {
          once: !0
        }), lq();
        try {
          var mq;
          const Eq = await fetch(qq, {
            signal: gq.signal
          });
          if (!Eq.ok) return !1;
          const Yq = null === (mq = Eq.body) || void 0 === mq ? void 0 : mq.getReader();
          if (!Yq) return !1;
          for (;;) {
            const {
              done: qq
            } = await Yq.read();
            if (qq) return !0;
            lq()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Yq), Eq.removeEventListener("abort", Oq)
        }
      }
    }
  },
  43110: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      createWorldgenWorker: () => cq,
      prefetchWorldgenWorker: () => xq,
      stopWorldgenWorkerPrefetch: () => Aq,
      worldgenWorkerReady: () => mq
    });
    const Yq = new(gq(36461).d)(new URL(gq.p + gq.u(68), gq.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let lq = !1,
      Oq = !1;

    function mq() {
      return lq = !0, Yq.ready()
    }

    function xq() {
      Yq.ready()
    }

    function Aq() {
      lq || Oq || (Oq = !0, Yq.cancel())
    }

    function cq() {
      return Yq.start()
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);