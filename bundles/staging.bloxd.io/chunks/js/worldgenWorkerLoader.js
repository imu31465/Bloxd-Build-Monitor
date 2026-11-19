export const id = 68;
export const ids = [68];
export const modules = {
  35892: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    const Ez = {
      wait: function(zz) {
        return new Promise((uz => {
          setTimeout(uz, zz)
        }))
      },
      stallMs: 2e4
    };
    class nz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ez;
        this.url = zz, this.options = uz, this.timing = bz, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = zz
      }
      ready() {
        if (null === this.fetched) {
          const zz = new AbortController;
          this.fetchAbort = zz, this.fetched = this.fetchWithRetries(zz.signal).finally((() => {
            this.fetchAbort === zz && (this.fetchAbort = null)
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
      async fetchWithRetries(zz) {
        for (let uz = 0;; uz++) {
          const bz = new URL(this.url);
          if (uz > 0 && bz.searchParams.set("cache-bust", `${Date.now()}-${uz}`), await this.fetchWhole(bz, zz)) return void(this.scriptUrl = bz);
          if (uz >= 3 || zz.aborted) return;
          if (await this.timing.wait(500 * 2 ** uz), zz.aborted) return
        }
      }
      async fetchWhole(zz, uz) {
        const bz = new AbortController;
        let Ez;
        const nz = () => {
            clearTimeout(Ez), Ez = setTimeout((() => {
              bz.abort()
            }), this.timing.stallMs)
          },
          iz = () => {
            bz.abort()
          };
        uz.addEventListener("abort", iz, {
          once: !0
        }), nz();
        try {
          var lz;
          const uz = await fetch(zz, {
            signal: bz.signal
          });
          if (!uz.ok) return !1;
          const Ez = null === (lz = uz.body) || void 0 === lz ? void 0 : lz.getReader();
          if (!Ez) return !1;
          for (;;) {
            const {
              done: zz
            } = await Ez.read();
            if (zz) return !0;
            nz()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Ez), uz.removeEventListener("abort", iz)
        }
      }
    }
  },
  42630: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      createWorldgenWorker: () => Hz,
      prefetchWorldgenWorker: () => Mz,
      stopWorldgenWorkerPrefetch: () => tz,
      worldgenWorkerReady: () => lz
    });
    const Ez = new(bz(35892).c)(new URL(bz.p + bz.u(67), bz.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let nz = !1,
      iz = !1;

    function lz() {
      return nz = !0, Ez.ready()
    }

    function Mz() {
      Ez.ready()
    }

    function tz() {
      nz || iz || (iz = !0, Ez.cancel())
    }

    function Hz() {
      return Ez.start()
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);