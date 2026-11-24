export const id = 217;
export const ids = [217];
export const modules = {
  36484: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Zm,
      e: () => km,
      i: () => Im
    });
    var hm = fm(294),
      Am = fm(105);
    const am = new(fm(36487).d)(new URL(fm.p + fm.u(3), fm.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var xm = fm(1782),
      wm = fm(2119);
    const Dm = 1e4,
      im = 3e4;
    let Rm = null,
      pm = null,
      Em = null,
      om = !1,
      Om = 0;
    const Ym = new Map;
    let qm = null;
    const jm = new Map,
      Vm = new Map;

    function Im(mm) {
      const Tm = new Promise(((Tm, fm) => {
        const hm = new Image;
        hm.crossOrigin = "anonymous", hm.fetchPriority = "high", hm.onload = () => {
          Tm(hm)
        }, hm.onerror = () => {
          fm(new Error(`A block icon's texture did not load: ${mm.slice(0,100)}`))
        }, hm.src = mm
      }));
      return (0, wm.e)(Tm)
    }

    function Km(mm) {
      var Tm, fm;
      om || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${mm}`), om = !0, null === (Tm = Rm) || void 0 === Tm || Tm.terminate(), Rm = null, pm = null, jm.clear(), Vm.clear();
      for (const hm of Ym.values()) hm(null);
      Ym.clear(), null === (fm = qm) || void 0 === fm || fm()
    }

    function Qm() {
      return Em ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === hm.e.ios_icon_worker_v1 && (0, Am.isWebKit)()) return;
        try {
          Rm = await async function() {
            return await am.ready(), am.start()
          }()
        } catch (wm) {
          return void Km(`did not start (${String(wm)})`)
        }
        let mm = () => {};
        const Tm = new Promise((Tm => {
          mm = Tm
        }));
        Rm.onmessage = Tm => {
          let {
            data: fm
          } = Tm;
          if ("started" === fm.type) pm = Rm, mm();
          else if ("failed" === fm.type) Km(`failed a draw (${fm.message})`);
          else {
            var hm, Am;
            null === (hm = Ym.get(fm.id)) || void 0 === hm || hm(fm.url), Ym.delete(fm.id), null === (Am = qm) || void 0 === Am || Am()
          }
        }, Rm.onerror = Tm => {
          Tm.preventDefault(), Km(`stopped (${Tm.message||"its script did not load or run"})`), mm()
        };
        const fm = `did not start in ${im/1e3} s`;
        await (0, xm.l)(Tm, im, fm).catch((() => {
          Km(fm)
        }))
      }(), Em
    }

    function nm() {
      if (null !== qm || 0 === Ym.size) return;
      const mm = new Promise((mm => {
          qm = mm
        })),
        Tm = `did not answer in ${Dm/1e3} s`;
      (0, xm.l)(mm, Dm, Tm).then((() => {
        qm = null, nm()
      }), (() => {
        qm = null, Km(Tm)
      }))
    }

    function Jm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      mm.postMessage(Tm, fm)
    }

    function cm(mm, Tm, fm, hm) {
      let Am = Tm.get(fm);
      return void 0 === Am && (Am = hm().then((async Tm => {
        let {
          image: fm,
          request: hm
        } = Tm;
        try {
          const Tm = await createImageBitmap(fm);
          Jm(mm, hm(Tm), [Tm])
        } catch (Am) {
          Km(`could not take an image (${String(Am)})`)
        }
      })), Am.catch((() => {
        Tm.get(fm) === Am && Tm.delete(fm)
      })), Tm.set(fm, Am)), Am
    }
    async function zm(mm, Tm) {
      Qm();
      const fm = pm;
      if (null === fm) return null;
      if (await mm(fm), pm !== fm) return null;
      const hm = ++Om;
      return new Promise((mm => {
        Ym.set(hm, mm), Jm(fm, Tm(hm)), nm()
      }))
    }

    function Zm(mm, Tm, fm) {
      return zm((Tm => Promise.all([mm.top, mm.left, mm.right].map((mm => function(mm, Tm) {
        return cm(mm, jm, Tm, (async () => ({
          image: await Im(Tm),
          request: mm => ({
            type: "texture",
            url: Tm,
            bitmap: mm
          })
        })))
      }(Tm, mm))))), (hm => ({
        type: "draw",
        id: hm,
        ...mm,
        size: Tm,
        outlineWidth: fm
      })))
    }

    function km(mm, Tm, fm, hm) {
      return zm((fm => function(mm, Tm, fm) {
        return cm(mm, Vm, Tm, (async () => {
          const {
            texture: mm,
            ...hm
          } = await fm();
          return {
            image: await Im(mm),
            request: mm => ({
              type: "model",
              name: Tm,
              bitmap: mm,
              geometry: hm
            })
          }
        }))
      }(fm, mm, Tm)), (Tm => ({
        type: "drawModel",
        id: Tm,
        name: mm,
        size: fm,
        outlineWidth: hm
      })))
    }
  },
  36481: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm,
      d: () => Dm,
      f: () => xm,
      g: () => Em,
      k: () => im
    });
    const hm = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Am = .6,
      am = {
        width: 2 * hm.across,
        height: 2 * hm.down + hm.up
      };

    function xm(mm, Tm) {
      const fm = Tm > 0 ? Tm + 1 : 0,
        xm = mm * Am - Tm / hm.across;
      return Math.max(0, Math.min(xm, (mm - 2 * fm) / am.height))
    }
    const wm = [15, 15, 15],
      Dm = {
        top: 1,
        left: .85,
        right: .7
      };

    function im(mm, Tm, fm, hm) {
      const {
        vertices: Am,
        uvs: wm,
        indices: Dm,
        shades: im
      } = mm, Rm = function(mm, Tm) {
        const fm = xm(mm, Tm),
          hm = am.width * fm,
          Am = am.height * fm;
        return {
          left: (mm - hm) / 2,
          top: (mm - Am) / 2,
          width: hm,
          height: Am
        }
      }(fm, hm), pm = new Float32Array(Am.length);
      for (let am = 0; am < Am.length; am += 3) pm[am] = Rm.left + Am[am] * Rm.width, pm[am + 1] = Rm.top + Am[am + 1] * Rm.height, pm[am + 2] = Am[am + 2];
      const om = new Float32Array(fm * fm).fill(-1 / 0),
        Om = new Uint8ClampedArray(fm * fm * 4),
        Ym = 255 * mm.alphaCutoff;
      for (let am = 0; am < Dm.length; am += 3) {
        const [mm, hm, Am] = [Dm[am], Dm[am + 1], Dm[am + 2]], [xm, Rm, Em] = [3 * mm, 3 * hm, 3 * Am], [qm, jm, Vm, Im, Km, Qm] = [pm[xm], pm[xm + 1], pm[Rm], pm[Rm + 1], pm[Em], pm[Em + 1]], nm = (Vm - qm) * (Qm - jm) - (Km - qm) * (Im - jm);
        if (Math.abs(nm) < 1e-9) continue;
        const Jm = im[am / 3],
          [cm, zm, Zm, km, bm, Sm] = [wm[2 * mm], wm[2 * mm + 1], wm[2 * hm], wm[2 * hm + 1], wm[2 * Am], wm[2 * Am + 1]],
          em = Math.max(0, Math.floor(Math.min(qm, Vm, Km))),
          Nm = Math.min(fm - 1, Math.ceil(Math.max(qm, Vm, Km))),
          Gm = Math.max(0, Math.floor(Math.min(jm, Im, Qm))),
          Xm = Math.min(fm - 1, Math.ceil(Math.max(jm, Im, Qm)));
        for (let am = Gm; am <= Xm; am++)
          for (let mm = em; mm <= Nm; mm++) {
            const [hm, Am] = [mm + .5, am + .5], wm = ((hm - qm) * (Qm - jm) - (Km - qm) * (Am - jm)) / nm, Dm = ((Vm - qm) * (Am - jm) - (hm - qm) * (Im - jm)) / nm, im = 1 - wm - Dm;
            if (im < 0 || wm < 0 || Dm < 0) continue;
            const em = im * pm[xm + 2] + wm * pm[Rm + 2] + Dm * pm[Em + 2],
              Nm = am * fm + mm;
            if (em <= om[Nm]) continue;
            const Gm = Math.max(0, Math.min(Tm.width - 1, Math.floor((im * cm + wm * Zm + Dm * bm) * Tm.width))),
              Xm = 4 * (Math.max(0, Math.min(Tm.height - 1, Math.floor((im * zm + wm * km + Dm * Sm) * Tm.height))) * Tm.width + Gm);
            Tm.pixels[Xm + 3] < Ym || (om[Nm] = em, Om[4 * Nm] = Tm.pixels[Xm] * Jm, Om[4 * Nm + 1] = Tm.pixels[Xm + 1] * Jm, Om[4 * Nm + 2] = Tm.pixels[Xm + 2] * Jm, Om[4 * Nm + 3] = 255)
          }
      }
      return Em(Om, fm, hm), Om
    }
    let Rm = NaN,
      pm = new Int32Array(0);

    function Em(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tm => 0 !== mm[4 * Tm + 3];
      const Am = new Uint8Array(Tm * Tm);
      for (let wm = 0; wm < Tm * Tm; wm++) Am[wm] = hm(wm) ? 1 : 0;
      const am = (mm, fm) => mm >= 0 && fm >= 0 && mm < Tm && fm < Tm && 0 === Am[fm * Tm + mm],
        xm = new Float32Array(Tm * Tm).fill(1 / 0),
        Dm = function(mm) {
          if (mm !== Rm) {
            const Tm = Math.ceil(mm + 1),
              fm = [];
            for (let hm = -Tm; hm <= Tm; hm++)
              for (let Am = -Tm; Am <= Tm; Am++) {
                const Tm = Am * Am + hm * hm;
                Tm > 0 && Tm < (mm + 1) ** 2 && fm.push(Am, hm, Tm)
              }
            Rm = mm, pm = Int32Array.from(fm)
          }
          return pm
        }(fm);
      for (let wm = 0; wm < Tm; wm++)
        for (let mm = 0; mm < Tm; mm++) {
          if (1 === Am[wm * Tm + mm] && (am(mm - 1, wm) || am(mm + 1, wm) || am(mm, wm - 1) || am(mm, wm + 1)))
            for (let fm = 0; fm < Dm.length; fm += 3) {
              const hm = mm + Dm[fm],
                Am = wm + Dm[fm + 1];
              if (hm >= 0 && Am >= 0 && hm < Tm && Am < Tm) {
                const mm = Am * Tm + hm;
                xm[mm] = Math.min(xm[mm], Dm[fm + 2])
              }
            }
        }
      for (let im = 0; im < Tm * Tm; im++) 1 !== Am[im] && xm[im] !== 1 / 0 && (mm.set(wm, 4 * im), mm[4 * im + 3] = Math.round(255 * Math.min(1, fm + 1 - Math.sqrt(xm[im]))))
    }
  },
  36487: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    const hm = {
      wait: function(mm) {
        return new Promise((Tm => {
          setTimeout(Tm, mm)
        }))
      },
      stallMs: 2e4
    };
    class Am {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hm;
        this.url = mm, this.options = Tm, this.timing = fm, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = mm
      }
      ready() {
        if (null === this.fetched) {
          const mm = new AbortController;
          this.fetchAbort = mm, this.fetched = this.fetchWithRetries(mm.signal).then((Tm => (this.fetchAbort === mm && (this.fetchAbort = null), Tm)))
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
      async fetchWithRetries(mm) {
        for (let Tm = 0;; Tm++) {
          const fm = new URL(this.url);
          if (Tm > 0 && fm.searchParams.set("cache-bust", `${Date.now()}-${Tm}`), await this.fetchWhole(fm, mm)) return this.scriptUrl = fm, !0;
          if (Tm >= 3 || mm.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Tm), mm.aborted) return !1
        }
      }
      async fetchWhole(mm, Tm) {
        const fm = new AbortController;
        let hm;
        const Am = () => {
            clearTimeout(hm), hm = setTimeout((() => {
              fm.abort()
            }), this.timing.stallMs)
          },
          am = () => {
            fm.abort()
          };
        Tm.addEventListener("abort", am, {
          once: !0
        }), Am();
        try {
          var xm;
          const Tm = await fetch(mm, {
            signal: fm.signal
          });
          if (!Tm.ok) return !1;
          const hm = null === (xm = Tm.body) || void 0 === xm ? void 0 : xm.getReader();
          if (!hm) return !1;
          for (;;) {
            const {
              done: mm
            } = await hm.read();
            if (mm) return !0;
            Am()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(hm), Tm.removeEventListener("abort", am)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);