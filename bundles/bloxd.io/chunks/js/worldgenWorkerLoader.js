export const id = 71;
export const ids = [71];
export const modules = {
  36415: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    const tS = {
      wait: function(SS) {
        return new Promise((HS => {
          setTimeout(HS, SS)
        }))
      },
      stallMs: 2e4
    };
    class bS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tS;
        this.url = SS, this.options = HS, this.timing = gS, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = SS
      }
      ready() {
        if (null === this.fetched) {
          const SS = new AbortController;
          this.fetchAbort = SS, this.fetched = this.fetchWithRetries(SS.signal).then((HS => (this.fetchAbort === SS && (this.fetchAbort = null), HS)))
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
      async fetchWithRetries(SS) {
        for (let HS = 0;; HS++) {
          const gS = new URL(this.url);
          if (HS > 0 && gS.searchParams.set("cache-bust", `${Date.now()}-${HS}`), await this.fetchWhole(gS, SS)) return this.scriptUrl = gS, !0;
          if (HS >= 3 || SS.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** HS), SS.aborted) return !1
        }
      }
      async fetchWhole(SS, HS) {
        const gS = new AbortController;
        let tS;
        const bS = () => {
            clearTimeout(tS), tS = setTimeout((() => {
              gS.abort()
            }), this.timing.stallMs)
          },
          XS = () => {
            gS.abort()
          };
        HS.addEventListener("abort", XS, {
          once: !0
        }), bS();
        try {
          var xS;
          const HS = await fetch(SS, {
            signal: gS.signal
          });
          if (!HS.ok) return !1;
          const tS = null === (xS = HS.body) || void 0 === xS ? void 0 : xS.getReader();
          if (!tS) return !1;
          for (;;) {
            const {
              done: SS
            } = await tS.read();
            if (SS) return !0;
            bS()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(tS), HS.removeEventListener("abort", XS)
        }
      }
    }
  },
  51055: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      createWorldgenWorker: () => uS,
      prefetchWorldgenWorker: () => NS,
      stopWorldgenWorkerPrefetch: () => qS,
      worldgenWorkerReady: () => xS
    });
    const tS = new(gS(36415).d)(new URL(gS.p + gS.u(70), gS.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let bS = !1,
      XS = !1;

    function xS() {
      return bS = !0, tS.ready()
    }

    function NS() {
      tS.ready()
    }

    function qS() {
      bS || XS || (XS = !0, tS.cancel())
    }

    function uS() {
      return tS.start()
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);