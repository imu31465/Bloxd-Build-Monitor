export const id = 221;
export const ids = [221];
export const modules = {
  36635: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Wt,
      e: () => St,
      g: () => bt
    });
    var Ot = Vt(318),
      qt = Vt(106);
    const Dt = new(Vt(36637).b)(new URL(Vt.p + Vt.u(3), Vt.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var mt = Vt(1883),
      dt = Vt(2214);
    const jt = 1e4,
      Ht = 3e4;
    let Xt = null,
      Qt = null,
      lt = null,
      Et = !1,
      ft = 0;
    const wt = new Map;
    let yt = null;
    const Nt = new Map,
      Mt = new Map;

    function bt(tt) {
      const et = new Promise(((et, Vt) => {
        const Ot = new Image;
        Ot.crossOrigin = "anonymous", Ot.fetchPriority = "high", Ot.onload = () => {
          et(Ot)
        }, Ot.onerror = () => {
          Vt(new Error(`A block icon's texture did not load: ${tt.slice(0,100)}`))
        }, Ot.src = tt
      }));
      return (0, dt.f)(et)
    }

    function Jt(tt) {
      var et, Vt;
      Et || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${tt}`), Et = !0, null === (et = Xt) || void 0 === et || et.terminate(), Xt = null, Qt = null, Nt.clear(), Mt.clear();
      for (const Ot of wt.values()) Ot(null);
      wt.clear(), null === (Vt = yt) || void 0 === Vt || Vt()
    }

    function Ct() {
      return lt ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Ot.c.ios_icon_worker_v1 && (0, qt.isWebKit)()) return;
        try {
          Xt = await async function() {
            return await Dt.ready(), Dt.start()
          }()
        } catch (dt) {
          return void Jt(`did not start (${String(dt)})`)
        }
        let tt = () => {};
        const et = new Promise((et => {
          tt = et
        }));
        Xt.onmessage = et => {
          let {
            data: Vt
          } = et;
          if ("started" === Vt.type) Qt = Xt, tt();
          else if ("failed" === Vt.type) Jt(`failed a draw (${Vt.message})`);
          else {
            var Ot, qt;
            null === (Ot = wt.get(Vt.id)) || void 0 === Ot || Ot(Vt.url), wt.delete(Vt.id), null === (qt = yt) || void 0 === qt || qt()
          }
        }, Xt.onerror = et => {
          et.preventDefault(), Jt(`stopped (${et.message||"its script did not load or run"})`), tt()
        };
        const Vt = `did not start in ${Ht/1e3} s`;
        await (0, mt.h)(et, Ht, Vt).catch((() => {
          Jt(Vt)
        }))
      }(), lt
    }

    function ut() {
      if (null !== yt || 0 === wt.size) return;
      const tt = new Promise((tt => {
          yt = tt
        })),
        et = `did not answer in ${jt/1e3} s`;
      (0, mt.h)(tt, jt, et).then((() => {
        yt = null, ut()
      }), (() => {
        yt = null, Jt(et)
      }))
    }

    function Kt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      tt.postMessage(et, Vt)
    }

    function ht(tt, et, Vt, Ot) {
      let qt = et.get(Vt);
      return void 0 === qt && (qt = Ot().then((async et => {
        let {
          image: Vt,
          request: Ot
        } = et;
        try {
          const et = await createImageBitmap(Vt);
          Kt(tt, Ot(et), [et])
        } catch (qt) {
          Jt(`could not take an image (${String(qt)})`)
        }
      })), qt.catch((() => {
        et.get(Vt) === qt && et.delete(Vt)
      })), et.set(Vt, qt)), qt
    }
    async function vt(tt, et) {
      Ct();
      const Vt = Qt;
      if (null === Vt) return null;
      if (await tt(Vt), Qt !== Vt) return null;
      const Ot = ++ft;
      return new Promise((tt => {
        wt.set(Ot, tt), Kt(Vt, et(Ot)), ut()
      }))
    }

    function Wt(tt, et, Vt) {
      return vt((et => Promise.all([tt.top, tt.left, tt.right].map((tt => function(tt, et) {
        return ht(tt, Nt, et, (async () => ({
          image: await bt(et),
          request: tt => ({
            type: "texture",
            url: et,
            bitmap: tt
          })
        })))
      }(et, tt))))), (Ot => ({
        type: "draw",
        id: Ot,
        ...tt,
        size: et,
        outlineWidth: Vt
      })))
    }

    function St(tt, et, Vt, Ot) {
      return vt((Vt => function(tt, et, Vt) {
        return ht(tt, Mt, et, (async () => {
          const {
            texture: tt,
            ...Ot
          } = await Vt();
          return {
            image: await bt(tt),
            request: tt => ({
              type: "model",
              name: et,
              bitmap: tt,
              geometry: Ot
            })
          }
        }))
      }(Vt, tt, et)), (et => ({
        type: "drawModel",
        id: et,
        name: tt,
        size: Vt,
        outlineWidth: Ot
      })))
    }
  },
  36632: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      h: () => jt,
      l: () => mt,
      o: () => lt,
      s: () => Ht
    });
    const Ot = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      qt = .6,
      Dt = {
        width: 2 * Ot.across,
        height: 2 * Ot.down + Ot.up
      };

    function mt(tt, et) {
      const Vt = et > 0 ? et + 1 : 0,
        mt = tt * qt - et / Ot.across;
      return Math.max(0, Math.min(mt, (tt - 2 * Vt) / Dt.height))
    }
    const dt = [15, 15, 15],
      jt = {
        top: 1,
        left: .85,
        right: .7
      };

    function Ht(tt, et, Vt, Ot) {
      const {
        vertices: qt,
        uvs: dt,
        indices: jt,
        shades: Ht
      } = tt, Xt = function(tt, et) {
        const Vt = mt(tt, et),
          Ot = Dt.width * Vt,
          qt = Dt.height * Vt;
        return {
          left: (tt - Ot) / 2,
          top: (tt - qt) / 2,
          width: Ot,
          height: qt
        }
      }(Vt, Ot), Qt = new Float32Array(qt.length);
      for (let Dt = 0; Dt < qt.length; Dt += 3) Qt[Dt] = Xt.left + qt[Dt] * Xt.width, Qt[Dt + 1] = Xt.top + qt[Dt + 1] * Xt.height, Qt[Dt + 2] = qt[Dt + 2];
      const Et = new Float32Array(Vt * Vt).fill(-1 / 0),
        ft = new Uint8ClampedArray(Vt * Vt * 4),
        wt = 255 * tt.alphaCutoff;
      for (let Dt = 0; Dt < jt.length; Dt += 3) {
        const [tt, Ot, qt] = [jt[Dt], jt[Dt + 1], jt[Dt + 2]], [mt, Xt, lt] = [3 * tt, 3 * Ot, 3 * qt], [yt, Nt, Mt, bt, Jt, Ct] = [Qt[mt], Qt[mt + 1], Qt[Xt], Qt[Xt + 1], Qt[lt], Qt[lt + 1]], ut = (Mt - yt) * (Ct - Nt) - (Jt - yt) * (bt - Nt);
        if (Math.abs(ut) < 1e-9) continue;
        const Kt = Ht[Dt / 3],
          [ht, vt, Wt, St, ct, Rt] = [dt[2 * tt], dt[2 * tt + 1], dt[2 * Ot], dt[2 * Ot + 1], dt[2 * qt], dt[2 * qt + 1]],
          It = Math.max(0, Math.floor(Math.min(yt, Mt, Jt))),
          Pt = Math.min(Vt - 1, Math.ceil(Math.max(yt, Mt, Jt))),
          Zt = Math.max(0, Math.floor(Math.min(Nt, bt, Ct))),
          Lt = Math.min(Vt - 1, Math.ceil(Math.max(Nt, bt, Ct)));
        for (let Dt = Zt; Dt <= Lt; Dt++)
          for (let tt = It; tt <= Pt; tt++) {
            const [Ot, qt] = [tt + .5, Dt + .5], dt = ((Ot - yt) * (Ct - Nt) - (Jt - yt) * (qt - Nt)) / ut, jt = ((Mt - yt) * (qt - Nt) - (Ot - yt) * (bt - Nt)) / ut, Ht = 1 - dt - jt;
            if (Ht < 0 || dt < 0 || jt < 0) continue;
            const It = Ht * Qt[mt + 2] + dt * Qt[Xt + 2] + jt * Qt[lt + 2],
              Pt = Dt * Vt + tt;
            if (It <= Et[Pt]) continue;
            const Zt = Math.max(0, Math.min(et.width - 1, Math.floor((Ht * ht + dt * Wt + jt * ct) * et.width))),
              Lt = 4 * (Math.max(0, Math.min(et.height - 1, Math.floor((Ht * vt + dt * St + jt * Rt) * et.height))) * et.width + Zt);
            et.pixels[Lt + 3] < wt || (Et[Pt] = It, ft[4 * Pt] = et.pixels[Lt] * Kt, ft[4 * Pt + 1] = et.pixels[Lt + 1] * Kt, ft[4 * Pt + 2] = et.pixels[Lt + 2] * Kt, ft[4 * Pt + 3] = 255)
          }
      }
      return lt(ft, Vt, Ot), ft
    }
    let Xt = NaN,
      Qt = new Int32Array(0);

    function lt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : et => 0 !== tt[4 * et + 3];
      const qt = new Uint8Array(et * et);
      for (let dt = 0; dt < et * et; dt++) qt[dt] = Ot(dt) ? 1 : 0;
      const Dt = (tt, Vt) => tt >= 0 && Vt >= 0 && tt < et && Vt < et && 0 === qt[Vt * et + tt],
        mt = new Float32Array(et * et).fill(1 / 0),
        jt = function(tt) {
          if (tt !== Xt) {
            const et = Math.ceil(tt + 1),
              Vt = [];
            for (let Ot = -et; Ot <= et; Ot++)
              for (let qt = -et; qt <= et; qt++) {
                const et = qt * qt + Ot * Ot;
                et > 0 && et < (tt + 1) ** 2 && Vt.push(qt, Ot, et)
              }
            Xt = tt, Qt = Int32Array.from(Vt)
          }
          return Qt
        }(Vt);
      for (let dt = 0; dt < et; dt++)
        for (let tt = 0; tt < et; tt++) {
          if (1 === qt[dt * et + tt] && (Dt(tt - 1, dt) || Dt(tt + 1, dt) || Dt(tt, dt - 1) || Dt(tt, dt + 1)))
            for (let Vt = 0; Vt < jt.length; Vt += 3) {
              const Ot = tt + jt[Vt],
                qt = dt + jt[Vt + 1];
              if (Ot >= 0 && qt >= 0 && Ot < et && qt < et) {
                const tt = qt * et + Ot;
                mt[tt] = Math.min(mt[tt], jt[Vt + 2])
              }
            }
        }
      for (let Ht = 0; Ht < et * et; Ht++) 1 !== qt[Ht] && mt[Ht] !== 1 / 0 && (tt.set(dt, 4 * Ht), tt[4 * Ht + 3] = Math.round(255 * Math.min(1, Vt + 1 - Math.sqrt(mt[Ht]))))
    }
  },
  36637: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    const Ot = {
      wait: function(tt) {
        return new Promise((et => {
          setTimeout(et, tt)
        }))
      },
      stallMs: 2e4
    };
    class qt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ot;
        this.url = tt, this.options = et, this.timing = Vt, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = tt
      }
      ready() {
        if (null === this.fetched) {
          const tt = new AbortController;
          this.fetchAbort = tt, this.fetched = this.fetchWithRetries(tt.signal).then((et => (this.fetchAbort === tt && (this.fetchAbort = null), et)))
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
      async fetchWithRetries(tt) {
        for (let et = 0;; et++) {
          const Vt = new URL(this.url);
          if (et > 0 && Vt.searchParams.set("cache-bust", `${Date.now()}-${et}`), await this.fetchWhole(Vt, tt)) return this.scriptUrl = Vt, !0;
          if (et >= 3 || tt.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** et), tt.aborted) return !1
        }
      }
      async fetchWhole(tt, et) {
        const Vt = new AbortController;
        let Ot;
        const qt = () => {
            clearTimeout(Ot), Ot = setTimeout((() => {
              Vt.abort()
            }), this.timing.stallMs)
          },
          Dt = () => {
            Vt.abort()
          };
        et.addEventListener("abort", Dt, {
          once: !0
        }), qt();
        try {
          var mt;
          const et = await fetch(tt, {
            signal: Vt.signal
          });
          if (!et.ok) return !1;
          const Ot = null === (mt = et.body) || void 0 === mt ? void 0 : mt.getReader();
          if (!Ot) return !1;
          for (;;) {
            const {
              done: tt
            } = await Ot.read();
            if (tt) return !0;
            qt()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Ot), et.removeEventListener("abort", Dt)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);