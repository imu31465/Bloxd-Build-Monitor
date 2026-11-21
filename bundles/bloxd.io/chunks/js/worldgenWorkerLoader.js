export const id = 69;
export const ids = [69];
export const modules = {
  36050: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    const LQ = {
      wait: function(QQ) {
        return new Promise((FQ => {
          setTimeout(FQ, QQ)
        }))
      },
      stallMs: 2e4
    };
    class qQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LQ;
        this.url = QQ, this.options = FQ, this.timing = wQ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = QQ
      }
      ready() {
        if (null === this.fetched) {
          const QQ = new AbortController;
          this.fetchAbort = QQ, this.fetched = this.fetchWithRetries(QQ.signal).finally((() => {
            this.fetchAbort === QQ && (this.fetchAbort = null)
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
      async fetchWithRetries(QQ) {
        for (let FQ = 0;; FQ++) {
          const wQ = new URL(this.url);
          if (FQ > 0 && wQ.searchParams.set("cache-bust", `${Date.now()}-${FQ}`), await this.fetchWhole(wQ, QQ)) return void(this.scriptUrl = wQ);
          if (FQ >= 3 || QQ.aborted) return;
          if (await this.timing.wait(500 * 2 ** FQ), QQ.aborted) return
        }
      }
      async fetchWhole(QQ, FQ) {
        const wQ = new AbortController;
        let LQ;
        const qQ = () => {
            clearTimeout(LQ), LQ = setTimeout((() => {
              wQ.abort()
            }), this.timing.stallMs)
          },
          oQ = () => {
            wQ.abort()
          };
        FQ.addEventListener("abort", oQ, {
          once: !0
        }), qQ();
        try {
          var DQ;
          const FQ = await fetch(QQ, {
            signal: wQ.signal
          });
          if (!FQ.ok) return !1;
          const LQ = null === (DQ = FQ.body) || void 0 === DQ ? void 0 : DQ.getReader();
          if (!LQ) return !1;
          for (;;) {
            const {
              done: QQ
            } = await LQ.read();
            if (QQ) return !0;
            qQ()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(LQ), FQ.removeEventListener("abort", oQ)
        }
      }
    }
  },
  42767: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      createWorldgenWorker: () => mQ,
      prefetchWorldgenWorker: () => kQ,
      stopWorldgenWorkerPrefetch: () => vQ,
      worldgenWorkerReady: () => DQ
    });
    const LQ = new(wQ(36050).c)(new URL(wQ.p + wQ.u(68), wQ.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let qQ = !1,
      oQ = !1;

    function DQ() {
      return qQ = !0, LQ.ready()
    }

    function kQ() {
      LQ.ready()
    }

    function vQ() {
      qQ || oQ || (oQ = !0, LQ.cancel())
    }

    function mQ() {
      return LQ.start()
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);