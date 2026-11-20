export const id = 68;
export const ids = [68];
export const modules = {
  35917: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    const Fz = {
      wait: function(zz) {
        return new Promise((tz => {
          setTimeout(tz, zz)
        }))
      },
      stallMs: 2e4
    };
    class Wz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fz;
        this.url = zz, this.options = tz, this.timing = sz, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = zz
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
        for (let tz = 0;; tz++) {
          const sz = new URL(this.url);
          if (tz > 0 && sz.searchParams.set("cache-bust", `${Date.now()}-${tz}`), await this.fetchWhole(sz, zz)) return void(this.scriptUrl = sz);
          if (tz >= 3 || zz.aborted) return;
          if (await this.timing.wait(500 * 2 ** tz), zz.aborted) return
        }
      }
      async fetchWhole(zz, tz) {
        const sz = new AbortController;
        let Fz;
        const Wz = () => {
            clearTimeout(Fz), Fz = setTimeout((() => {
              sz.abort()
            }), this.timing.stallMs)
          },
          Xz = () => {
            sz.abort()
          };
        tz.addEventListener("abort", Xz, {
          once: !0
        }), Wz();
        try {
          var Oz;
          const tz = await fetch(zz, {
            signal: sz.signal
          });
          if (!tz.ok) return !1;
          const Fz = null === (Oz = tz.body) || void 0 === Oz ? void 0 : Oz.getReader();
          if (!Fz) return !1;
          for (;;) {
            const {
              done: zz
            } = await Fz.read();
            if (zz) return !0;
            Wz()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Fz), tz.removeEventListener("abort", Xz)
        }
      }
    }
  },
  42398: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      createWorldgenWorker: () => Uz,
      prefetchWorldgenWorker: () => oz,
      stopWorldgenWorkerPrefetch: () => vz,
      worldgenWorkerReady: () => Oz
    });
    const Fz = new(sz(35917).d)(new URL(sz.p + sz.u(67), sz.b), {
      name: "worldgenWorker",
      type: "module"
    });
    let Wz = !1,
      Xz = !1;

    function Oz() {
      return Wz = !0, Fz.ready()
    }

    function oz() {
      Fz.ready()
    }

    function vz() {
      Wz || Xz || (Xz = !0, Fz.cancel())
    }

    function Uz() {
      return Fz.start()
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);