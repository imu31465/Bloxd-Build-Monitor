export const id = 68;
export const ids = [68];
export const modules = {
  35822: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    const ID = {
      wait: function(DD) {
        return new Promise((CD => {
          setTimeout(CD, DD)
        }))
      },
      stallMs: 2e4
    };
    class pD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ID;
        this.url = DD, this.options = CD, this.timing = cD, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = DD
      }
      ready() {
        if (null === this.fetched) {
          const DD = new AbortController;
          this.fetchAbort = DD, this.fetched = this.fetchWithRetries(DD.signal).finally((() => {
            this.fetchAbort === DD && (this.fetchAbort = null)
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
      async fetchWithRetries(DD) {
        for (let CD = 0;; CD++) {
          const cD = new URL(this.url);
          if (CD > 0 && cD.searchParams.set("cache-bust", `${Date.now()}-${CD}`), await this.fetchWhole(cD, DD)) return void(this.scriptUrl = cD);
          if (CD >= 3 || DD.aborted) return;
          if (await this.timing.wait(500 * 2 ** CD), DD.aborted) return
        }
      }
      async fetchWhole(DD, CD) {
        const cD = new AbortController;
        let ID;
        const pD = () => {
            clearTimeout(ID), ID = setTimeout((() => {
              cD.abort()
            }), this.timing.stallMs)
          },
          iD = () => {
            cD.abort()
          };
        CD.addEventListener("abort", iD, {
          once: !0
        }), pD();
        try {
          var fD;
          const CD = await fetch(DD, {
            signal: cD.signal
          });
          if (!CD.ok) return !1;
          const ID = null === (fD = CD.body) || void 0 === fD ? void 0 : fD.getReader();
          if (!ID) return !1;
          for (;;) {
            const {
              done: DD
            } = await ID.read();
            if (DD) return !0;
            pD()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(ID), CD.removeEventListener("abort", iD)
        }
      }
    }
  },
  42507: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      createWorldgenWorker: () => wD,
      prefetchWorldgenWorker: () => bD,
      stopWorldgenWorkerPrefetch: () => QD,
      worldgenWorkerReady: () => fD
    });
    const ID = new(cD(35822).c)(new URL(cD.p + cD.u(67), cD.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let pD = !1,
      iD = !1;

    function fD() {
      return pD = !0, ID.ready()
    }

    function bD() {
      ID.ready()
    }

    function QD() {
      pD || iD || (iD = !0, ID.cancel())
    }

    function wD() {
      return ID.start()
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);