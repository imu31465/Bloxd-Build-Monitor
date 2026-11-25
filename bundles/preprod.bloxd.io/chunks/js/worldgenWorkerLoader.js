export const id = 74;
export const ids = [74];
export const modules = {
  36713: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    const wQ = {
      wait: function(QQ) {
        return new Promise((WQ => {
          setTimeout(WQ, QQ)
        }))
      },
      stallMs: 2e4
    };
    class qQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wQ;
        this.url = QQ, this.options = WQ, this.timing = XQ, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = QQ
      }
      ready() {
        if (null === this.fetched) {
          const QQ = new AbortController;
          this.fetchAbort = QQ, this.fetched = this.fetchWithRetries(QQ.signal).then((WQ => (this.fetchAbort === QQ && (this.fetchAbort = null), WQ)))
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
      async fetchWithRetries(QQ) {
        for (let WQ = 0;; WQ++) {
          const XQ = new URL(this.url);
          if (WQ > 0 && XQ.searchParams.set("cache-bust", `${Date.now()}-${WQ}`), await this.fetchWhole(XQ, QQ)) return this.scriptUrl = XQ, !0;
          if (WQ >= 3 || QQ.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** WQ), QQ.aborted) return !1
        }
      }
      async fetchWhole(QQ, WQ) {
        const XQ = new AbortController;
        let wQ;
        const qQ = () => {
            clearTimeout(wQ), wQ = setTimeout((() => {
              XQ.abort()
            }), this.timing.stallMs)
          },
          TQ = () => {
            XQ.abort()
          };
        WQ.addEventListener("abort", TQ, {
          once: !0
        }), qQ();
        try {
          var zQ;
          const WQ = await fetch(QQ, {
            signal: XQ.signal
          });
          if (!WQ.ok) return !1;
          const wQ = null === (zQ = WQ.body) || void 0 === zQ ? void 0 : zQ.getReader();
          if (!wQ) return !1;
          for (;;) {
            const {
              done: QQ
            } = await wQ.read();
            if (QQ) return !0;
            qQ()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(wQ), WQ.removeEventListener("abort", TQ)
        }
      }
    }
  },
  51269: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      createWorldgenWorker: () => gQ,
      prefetchWorldgenWorker: () => sQ,
      stopWorldgenWorkerPrefetch: () => FQ,
      worldgenWorkerReady: () => zQ,
      worldgenWorkerScriptUrl: () => PQ
    });
    const wQ = new(XQ(36713).d)(new URL(XQ.p + XQ.u(73), XQ.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let qQ = !1,
      TQ = !1;

    function zQ() {
      return qQ = !0, wQ.ready()
    }

    function sQ() {
      wQ.ready()
    }

    function FQ() {
      qQ || TQ || (TQ = !0, wQ.cancel())
    }

    function PQ() {
      return wQ.href
    }

    function gQ() {
      return wQ.start()
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);