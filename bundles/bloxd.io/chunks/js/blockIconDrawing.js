export const id = 2;
export const ids = [2];
export const modules = {
  37933: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      drawBlockIcon: () => Yr,
      drawBlockIconUrl: () => nr,
      getDrawnBlockIcon: () => zr,
      resetBlockIconDrawingForTests: () => Ur
    });
    var Zr = Qr(37939);
    const Wr = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      ar = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      jr = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const Ir = 1e-6;

    function fr(rr, Sr, Qr, Zr) {
      let {
        origin: Wr,
        across: ar,
        down: jr,
        texture: fr,
        rect: [Er, pr, xr, mr],
        shade: Nr
      } = Zr;
      const Ur = ar.x * jr.y - ar.y * jr.x;
      if (Math.abs(Ur) < 1e-9) return;
      const tr = [Wr.x, Wr.x + ar.x, Wr.x + jr.x, Wr.x + ar.x + jr.x],
        hr = [Wr.y, Wr.y + ar.y, Wr.y + jr.y, Wr.y + ar.y + jr.y],
        zr = Math.max(0, Math.floor(Math.min(...tr))),
        Yr = Math.min(Qr - 1, Math.ceil(Math.max(...tr))),
        nr = Math.max(0, Math.floor(Math.min(...hr))),
        er = Math.min(Qr - 1, Math.ceil(Math.max(...hr)));
      for (let Kr = nr; Kr <= er; Kr++)
        for (let Zr = zr; Zr <= Yr; Zr++) {
          const tr = Zr + .5 - Wr.x,
            hr = Kr + .5 - Wr.y,
            zr = (tr * jr.y - hr * jr.x) / Ur,
            Yr = (ar.x * hr - ar.y * tr) / Ur;
          if (zr < -Ir || zr > 1 + Ir || Yr < -Ir || Yr > 1 + Ir) continue;
          const nr = Kr * Qr + Zr;
          Sr[nr] = 1;
          const er = Er + Math.min(Math.max(zr, 0), 1) * (xr - Er),
            yr = pr + Math.min(Math.max(Yr, 0), 1) * (mr - pr),
            Br = Math.min(fr.width - 1, Math.floor(er * fr.width)),
            Tr = 4 * (Math.min(fr.height - 1, Math.floor(yr * fr.height)) * fr.width + Br),
            vr = fr.pixels[Tr + 3] / 255;
          if (0 === vr) continue;
          const Or = 4 * nr,
            Lr = rr[Or + 3] / 255 * (1 - vr),
            lr = vr + Lr;
          for (let Sr = 0; Sr < 3; Sr++) rr[Or + Sr] = (fr.pixels[Tr + Sr] * Nr * vr + rr[Or + Sr] * Lr) / lr;
          rr[Or + 3] = 255 * lr
        }
    }
    var Er = Qr(37942);
    const pr = new Map,
      xr = new Map,
      mr = new Map,
      Nr = new Map;

    function Ur() {
      pr.clear(), xr.clear(), mr.clear(), Nr.clear()
    }

    function tr(rr, Sr, Qr) {
      return `${Sr}|${Qr}|${rr}`
    }

    function hr(rr, Sr, Qr) {
      let Zr = rr.get(Sr);
      return void 0 === Zr && (Zr = Qr().catch((Qr => {
        throw rr.delete(Sr), Qr
      })), rr.set(Sr, Zr)), Zr
    }

    function zr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return xr.get(tr(rr, Sr, Qr))
    }

    function Yr(rr, Sr, Qr, Zr) {
      const Wr = tr(rr, Sr, Qr);
      return hr(pr, Wr, (async () => {
        const ar = await er(Zr(rr), Sr, Qr);
        return xr.set(Wr, ar), ar
      }))
    }

    function nr(rr, Sr, Qr, Zr) {
      return hr(mr, tr(rr, Sr, Qr), (async () => {
        var Wr;
        const ar = Zr(rr);
        return null !== (Wr = await (0, Er.b)(ar, Sr, Qr)) && void 0 !== Wr ? Wr : (await er(ar, Sr, Qr)).toDataURL()
      }))
    }
    async function er(rr, Sr, Qr) {
      let {
        top: Ir,
        left: Er,
        right: pr,
        itemType: xr
      } = rr;
      const [mr, Nr, Ur] = await Promise.all([Kr(Ir), Kr(Er), Kr(pr)]), tr = function(rr, Sr, Qr, Wr) {
        const ar = (0, Zr.j)(Qr, Wr),
          jr = ar * Zr.d.across,
          Ir = ar * Zr.d.down,
          Er = ar * Zr.d.up,
          pr = Math.max(...Sr.boxes.map((rr => rr[4]))),
          xr = Qr / 2,
          mr = Ir + (Qr - Ir - Ir - pr * Er) / 2,
          Nr = (rr, Sr, Qr) => ({
            x: xr + (rr - Qr) * jr,
            y: mr - Ir + (rr + Qr) * Ir + (pr - Sr) * Er
          }),
          Ur = (rr, Qr, Zr, Wr, ar, jr) => ({
            origin: rr,
            across: {
              x: Qr.x - rr.x,
              y: Qr.y - rr.y
            },
            down: {
              x: Zr.x - rr.x,
              y: Zr.y - rr.y
            },
            texture: Wr,
            rect: Sr.cropFaces ? ar : [0, 0, 1, 1],
            shade: jr
          }),
          tr = new Uint8ClampedArray(Qr * Qr * 4),
          hr = new Uint8Array(Qr * Qr),
          zr = Zr.g;
        for (const [Zr, Yr, nr, er, Kr, yr] of Sr.boxes) {
          const Sr = Ur(Nr(er, Kr, yr), Nr(er, Kr, nr), Nr(er, Yr, yr), rr.right, [1 - yr, 1 - Kr, 1 - nr, 1 - Yr], zr.right),
            Wr = Ur(Nr(Zr, Kr, yr), Nr(er, Kr, yr), Nr(Zr, Yr, yr), rr.left, [Zr, 1 - Kr, er, 1 - Yr], zr.left),
            ar = Ur(Nr(Zr, Kr, nr), Nr(er, Kr, nr), Nr(Zr, Kr, yr), rr.top, [Zr, nr, er, yr], zr.top);
          for (const rr of [Sr, Wr, ar]) fr(tr, hr, Qr, rr)
        }
        return (0, Zr.l)(tr, Qr, Wr, (rr => 1 === hr[rr])), tr
      }({
        top: mr,
        left: Nr,
        right: Ur
      }, function(rr) {
        return "SlabBlock" === rr ? ar : "StairsBlock" === rr ? jr : Wr
      }(xr), Sr, Qr), hr = document.createElement("canvas");
      hr.width = Sr, hr.height = Sr;
      const zr = hr.getContext("2d");
      if (!zr) throw new Error("Failed to get 2D context");
      return zr.putImageData(new ImageData(tr, Sr, Sr), 0, 0), hr
    }

    function Kr(rr) {
      return hr(Nr, rr, (async () => {
        const Sr = await (0, Er.g)(rr),
          Qr = document.createElement("canvas");
        Qr.width = Sr.width, Qr.height = Sr.height;
        const Zr = Qr.getContext("2d");
        if (!Zr) throw new Error("Failed to get 2D context");
        return Zr.drawImage(Sr, 0, 0), {
          width: Sr.width,
          height: Sr.height,
          pixels: Zr.getImageData(0, 0, Sr.width, Sr.height).data
        }
      }))
    }
  },
  37942: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Lr,
      d: () => lr,
      f: () => Kr,
      g: () => nr,
      k: () => yr
    });
    var Zr = Qr(300),
      Wr = Qr(109);
    const ar = new(Qr(37945).d)(new URL(Qr.p + Qr.u(3), Qr.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var jr = Qr(1783),
      Ir = Qr(2311);
    const fr = 1e4,
      Er = 3e4;
    let pr = null,
      xr = null,
      mr = null,
      Nr = !1,
      Ur = 0;
    const tr = new Map;
    let hr = null;
    const zr = new Map,
      Yr = new Map;

    function nr(rr) {
      const Sr = new Promise(((Sr, Qr) => {
        const Zr = new Image;
        Zr.crossOrigin = "anonymous", Zr.fetchPriority = "high", Zr.onload = () => {
          Sr(Zr)
        }, Zr.onerror = () => {
          Qr(new Error(`A block icon's texture did not load: ${rr.slice(0,100)}`))
        }, Zr.src = rr
      }));
      return (0, Ir.g)(Sr)
    }

    function er(rr) {
      var Sr, Qr;
      Nr || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${rr}`), Nr = !0, null === (Sr = pr) || void 0 === Sr || Sr.terminate(), pr = null, xr = null, zr.clear(), Yr.clear();
      for (const Zr of tr.values()) Zr(null);
      tr.clear(), null === (Qr = hr) || void 0 === Qr || Qr()
    }

    function Kr() {
      return null !== xr
    }

    function yr() {
      return mr ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Zr.e.ios_icon_worker_v1 && (0, Wr.isWebKit)()) return;
        try {
          pr = await async function() {
            return await ar.ready(), ar.start()
          }()
        } catch (Ir) {
          return void er(`did not start (${String(Ir)})`)
        }
        let rr = () => {};
        const Sr = new Promise((Sr => {
          rr = Sr
        }));
        pr.onmessage = Sr => {
          let {
            data: Qr
          } = Sr;
          if ("started" === Qr.type) xr = pr, rr();
          else if ("failed" === Qr.type) er(`failed a draw (${Qr.message})`);
          else {
            var Zr, Wr;
            null === (Zr = tr.get(Qr.id)) || void 0 === Zr || Zr(Qr.url), tr.delete(Qr.id), null === (Wr = hr) || void 0 === Wr || Wr()
          }
        }, pr.onerror = Sr => {
          Sr.preventDefault(), er(`stopped (${Sr.message||"its script did not load or run"})`), rr()
        };
        const Qr = `did not start in ${Er/1e3} s`;
        await (0, jr.h)(Sr, Er, Qr).catch((() => {
          er(Qr)
        }))
      }(), mr
    }

    function Br() {
      if (null !== hr || 0 === tr.size) return;
      const rr = new Promise((rr => {
          hr = rr
        })),
        Sr = `did not answer in ${fr/1e3} s`;
      (0, jr.h)(rr, fr, Sr).then((() => {
        hr = null, Br()
      }), (() => {
        hr = null, er(Sr)
      }))
    }

    function Tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      rr.postMessage(Sr, Qr)
    }

    function vr(rr, Sr, Qr, Zr) {
      let Wr = Sr.get(Qr);
      return void 0 === Wr && (Wr = Zr().then((async Sr => {
        let {
          image: Qr,
          request: Zr
        } = Sr;
        try {
          const Sr = await createImageBitmap(Qr);
          Tr(rr, Zr(Sr), [Sr])
        } catch (Wr) {
          er(`could not take an image (${String(Wr)})`)
        }
      })), Wr.catch((() => {
        Sr.get(Qr) === Wr && Sr.delete(Qr)
      })), Sr.set(Qr, Wr)), Wr
    }
    async function Or(rr, Sr) {
      yr();
      const Qr = xr;
      if (null === Qr) return null;
      if (await rr(Qr), xr !== Qr) return null;
      const Zr = ++Ur;
      return new Promise((rr => {
        tr.set(Zr, rr), Tr(Qr, Sr(Zr)), Br()
      }))
    }

    function Lr(rr, Sr, Qr) {
      return Or((Sr => Promise.all([rr.top, rr.left, rr.right].map((rr => function(rr, Sr) {
        return vr(rr, zr, Sr, (async () => ({
          image: await nr(Sr),
          request: rr => ({
            type: "texture",
            url: Sr,
            bitmap: rr
          })
        })))
      }(Sr, rr))))), (Zr => ({
        type: "draw",
        id: Zr,
        ...rr,
        size: Sr,
        outlineWidth: Qr
      })))
    }

    function lr(rr, Sr, Qr, Zr) {
      return Or((Qr => function(rr, Sr, Qr) {
        return vr(rr, Yr, Sr, (async () => {
          const {
            texture: rr,
            ...Zr
          } = await Qr();
          return {
            image: await nr(rr),
            request: rr => ({
              type: "model",
              name: Sr,
              bitmap: rr,
              geometry: Zr
            })
          }
        }))
      }(Qr, rr, Sr)), (Sr => ({
        type: "drawModel",
        id: Sr,
        name: rr,
        size: Qr,
        outlineWidth: Zr
      })))
    }
  },
  37939: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      g: () => fr,
      j: () => jr,
      l: () => mr,
      n: () => Er
    });
    const Zr = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Wr = .6,
      ar = {
        width: 2 * Zr.across,
        height: 2 * Zr.down + Zr.up
      };

    function jr(rr, Sr) {
      const Qr = Sr > 0 ? Sr + 1 : 0,
        jr = rr * Wr - Sr / Zr.across;
      return Math.max(0, Math.min(jr, (rr - 2 * Qr) / ar.height))
    }
    const Ir = [15, 15, 15],
      fr = {
        top: 1,
        left: .85,
        right: .7
      };

    function Er(rr, Sr, Qr, Zr) {
      const {
        vertices: Wr,
        uvs: Ir,
        indices: fr,
        shades: Er
      } = rr, pr = function(rr, Sr) {
        const Qr = jr(rr, Sr),
          Zr = ar.width * Qr,
          Wr = ar.height * Qr;
        return {
          left: (rr - Zr) / 2,
          top: (rr - Wr) / 2,
          width: Zr,
          height: Wr
        }
      }(Qr, Zr), xr = new Float32Array(Wr.length);
      for (let ar = 0; ar < Wr.length; ar += 3) xr[ar] = pr.left + Wr[ar] * pr.width, xr[ar + 1] = pr.top + Wr[ar + 1] * pr.height, xr[ar + 2] = Wr[ar + 2];
      const Nr = new Float32Array(Qr * Qr).fill(-1 / 0),
        Ur = new Uint8ClampedArray(Qr * Qr * 4),
        tr = 255 * rr.alphaCutoff;
      for (let ar = 0; ar < fr.length; ar += 3) {
        const [rr, Zr, Wr] = [fr[ar], fr[ar + 1], fr[ar + 2]], [jr, pr, mr] = [3 * rr, 3 * Zr, 3 * Wr], [hr, zr, Yr, nr, er, Kr] = [xr[jr], xr[jr + 1], xr[pr], xr[pr + 1], xr[mr], xr[mr + 1]], yr = (Yr - hr) * (Kr - zr) - (er - hr) * (nr - zr);
        if (Math.abs(yr) < 1e-9) continue;
        const Br = Er[ar / 3],
          [Tr, vr, Or, Lr, lr, Xr] = [Ir[2 * rr], Ir[2 * rr + 1], Ir[2 * Zr], Ir[2 * Zr + 1], Ir[2 * Wr], Ir[2 * Wr + 1]],
          Pr = Math.max(0, Math.floor(Math.min(hr, Yr, er))),
          Hr = Math.min(Qr - 1, Math.ceil(Math.max(hr, Yr, er))),
          qr = Math.max(0, Math.floor(Math.min(zr, nr, Kr))),
          Rr = Math.min(Qr - 1, Math.ceil(Math.max(zr, nr, Kr)));
        for (let ar = qr; ar <= Rr; ar++)
          for (let rr = Pr; rr <= Hr; rr++) {
            const [Zr, Wr] = [rr + .5, ar + .5], Ir = ((Zr - hr) * (Kr - zr) - (er - hr) * (Wr - zr)) / yr, fr = ((Yr - hr) * (Wr - zr) - (Zr - hr) * (nr - zr)) / yr, Er = 1 - Ir - fr;
            if (Er < 0 || Ir < 0 || fr < 0) continue;
            const Pr = Er * xr[jr + 2] + Ir * xr[pr + 2] + fr * xr[mr + 2],
              Hr = ar * Qr + rr;
            if (Pr <= Nr[Hr]) continue;
            const qr = Math.max(0, Math.min(Sr.width - 1, Math.floor((Er * Tr + Ir * Or + fr * lr) * Sr.width))),
              Rr = 4 * (Math.max(0, Math.min(Sr.height - 1, Math.floor((Er * vr + Ir * Lr + fr * Xr) * Sr.height))) * Sr.width + qr);
            Sr.pixels[Rr + 3] < tr || (Nr[Hr] = Pr, Ur[4 * Hr] = Sr.pixels[Rr] * Br, Ur[4 * Hr + 1] = Sr.pixels[Rr + 1] * Br, Ur[4 * Hr + 2] = Sr.pixels[Rr + 2] * Br, Ur[4 * Hr + 3] = 255)
          }
      }
      return mr(Ur, Qr, Zr), Ur
    }
    let pr = NaN,
      xr = new Int32Array(0);

    function mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sr => 0 !== rr[4 * Sr + 3];
      const Wr = new Uint8Array(Sr * Sr);
      for (let Ir = 0; Ir < Sr * Sr; Ir++) Wr[Ir] = Zr(Ir) ? 1 : 0;
      const ar = (rr, Qr) => rr >= 0 && Qr >= 0 && rr < Sr && Qr < Sr && 0 === Wr[Qr * Sr + rr],
        jr = new Float32Array(Sr * Sr).fill(1 / 0),
        fr = function(rr) {
          if (rr !== pr) {
            const Sr = Math.ceil(rr + 1),
              Qr = [];
            for (let Zr = -Sr; Zr <= Sr; Zr++)
              for (let Wr = -Sr; Wr <= Sr; Wr++) {
                const Sr = Wr * Wr + Zr * Zr;
                Sr > 0 && Sr < (rr + 1) ** 2 && Qr.push(Wr, Zr, Sr)
              }
            pr = rr, xr = Int32Array.from(Qr)
          }
          return xr
        }(Qr);
      for (let Ir = 0; Ir < Sr; Ir++)
        for (let rr = 0; rr < Sr; rr++) {
          if (1 === Wr[Ir * Sr + rr] && (ar(rr - 1, Ir) || ar(rr + 1, Ir) || ar(rr, Ir - 1) || ar(rr, Ir + 1)))
            for (let Qr = 0; Qr < fr.length; Qr += 3) {
              const Zr = rr + fr[Qr],
                Wr = Ir + fr[Qr + 1];
              if (Zr >= 0 && Wr >= 0 && Zr < Sr && Wr < Sr) {
                const rr = Wr * Sr + Zr;
                jr[rr] = Math.min(jr[rr], fr[Qr + 2])
              }
            }
        }
      for (let Er = 0; Er < Sr * Sr; Er++) 1 !== Wr[Er] && jr[Er] !== 1 / 0 && (rr.set(Ir, 4 * Er), rr[4 * Er + 3] = Math.round(255 * Math.min(1, Qr + 1 - Math.sqrt(jr[Er]))))
    }
  },
  37945: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = {
      wait: function(rr) {
        return new Promise((Sr => {
          setTimeout(Sr, rr)
        }))
      },
      stallMs: 2e4
    };
    class Wr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zr;
        this.url = rr, this.options = Sr, this.timing = Qr, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = rr
      }
      ready() {
        if (null === this.fetched) {
          const rr = new AbortController;
          this.fetchAbort = rr, this.fetched = this.fetchWithRetries(rr.signal).then((Sr => (this.fetchAbort === rr && (this.fetchAbort = null), Sr)))
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
      async fetchWithRetries(rr) {
        for (let Sr = 0;; Sr++) {
          const Qr = new URL(this.url);
          if (Sr > 0 && Qr.searchParams.set("cache-bust", `${Date.now()}-${Sr}`), await this.fetchWhole(Qr, rr)) return this.scriptUrl = Qr, !0;
          if (Sr >= 3 || rr.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Sr), rr.aborted) return !1
        }
      }
      async fetchWhole(rr, Sr) {
        const Qr = new AbortController;
        let Zr;
        const Wr = () => {
            clearTimeout(Zr), Zr = setTimeout((() => {
              Qr.abort()
            }), this.timing.stallMs)
          },
          ar = () => {
            Qr.abort()
          };
        Sr.addEventListener("abort", ar, {
          once: !0
        }), Wr();
        try {
          var jr;
          const Sr = await fetch(rr, {
            signal: Qr.signal
          });
          if (!Sr.ok) return !1;
          const Zr = null === (jr = Sr.body) || void 0 === jr ? void 0 : jr.getReader();
          if (!Zr) return !1;
          for (;;) {
            const {
              done: rr
            } = await Zr.read();
            if (rr) return !0;
            Wr()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Zr), Sr.removeEventListener("abort", ar)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);