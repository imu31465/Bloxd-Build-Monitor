export const id = 2;
export const ids = [2];
export const modules = {
  35093: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      f: () => sc,
      j: () => uc
    });
    const Vc = 1 / 32,
      Ic = [15, 15, 15],
      rB = {
        top: 1,
        left: .85,
        right: .7
      };

    function uc(cB, Bc, nc, Ic) {
      const {
        vertices: rB,
        uvs: uc,
        indices: Mc,
        shades: Pc
      } = cB, qB = nc * Vc, Oc = nc - 2 * qB, Tc = new Float32Array(rB.length);
      for (let Vc = 0; Vc < rB.length; Vc += 3) Tc[Vc] = qB + rB[Vc] * Oc, Tc[Vc + 1] = qB + rB[Vc + 1] * Oc, Tc[Vc + 2] = rB[Vc + 2];
      const fc = new Float32Array(nc * nc).fill(-1 / 0),
        mB = new Uint8ClampedArray(nc * nc * 4),
        ec = 255 * cB.alphaCutoff;
      for (let Vc = 0; Vc < Mc.length; Vc += 3) {
        const [cB, Ic, rB] = [Mc[Vc], Mc[Vc + 1], Mc[Vc + 2]], [sc, qB, Oc] = [3 * cB, 3 * Ic, 3 * rB], [tB, Sc, yB, zB, pc, hc] = [Tc[sc], Tc[sc + 1], Tc[qB], Tc[qB + 1], Tc[Oc], Tc[Oc + 1]], aB = (yB - tB) * (hc - Sc) - (pc - tB) * (zB - Sc);
        if (Math.abs(aB) < 1e-9) continue;
        const lc = Pc[Vc / 3],
          [Yc, Lc, gB, Uc, bB, Zc] = [uc[2 * cB], uc[2 * cB + 1], uc[2 * Ic], uc[2 * Ic + 1], uc[2 * rB], uc[2 * rB + 1]],
          Qc = Math.max(0, Math.floor(Math.min(tB, yB, pc))),
          Cc = Math.min(nc - 1, Math.ceil(Math.max(tB, yB, pc))),
          vB = Math.max(0, Math.floor(Math.min(Sc, zB, hc))),
          Dc = Math.min(nc - 1, Math.ceil(Math.max(Sc, zB, hc)));
        for (let Vc = vB; Vc <= Dc; Vc++)
          for (let cB = Qc; cB <= Cc; cB++) {
            const [Ic, rB] = [cB + .5, Vc + .5], uc = ((Ic - tB) * (hc - Sc) - (pc - tB) * (rB - Sc)) / aB, Mc = ((yB - tB) * (rB - Sc) - (Ic - tB) * (zB - Sc)) / aB, Pc = 1 - uc - Mc;
            if (Pc < 0 || uc < 0 || Mc < 0) continue;
            const Qc = Pc * Tc[sc + 2] + uc * Tc[qB + 2] + Mc * Tc[Oc + 2],
              Cc = Vc * nc + cB;
            if (Qc <= fc[Cc]) continue;
            const vB = Math.max(0, Math.min(Bc.width - 1, Math.floor((Pc * Yc + uc * gB + Mc * bB) * Bc.width))),
              Dc = 4 * (Math.max(0, Math.min(Bc.height - 1, Math.floor((Pc * Lc + uc * Uc + Mc * Zc) * Bc.height))) * Bc.width + vB);
            Bc.pixels[Dc + 3] < ec || (fc[Cc] = Qc, mB[4 * Cc] = Bc.pixels[Dc] * lc, mB[4 * Cc + 1] = Bc.pixels[Dc + 1] * lc, mB[4 * Cc + 2] = Bc.pixels[Dc + 2] * lc, mB[4 * Cc + 3] = 255)
          }
      }
      return sc(mB, nc, Ic), mB
    }

    function sc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bc => 0 !== cB[4 * Bc + 3];
      const rB = (cB, nc) => cB < 0 || nc < 0 || cB >= Bc || nc >= Bc || !Vc(nc * Bc + cB),
        uc = [];
      for (let Ic = 0; Ic < Bc; Ic++)
        for (let cB = 0; cB < Bc; cB++)
          if (!rB(cB, Ic)) cB: for (let Vc = -nc; Vc <= nc; Vc++) {
            const sc = nc - Math.abs(Vc);
            for (let nc = -sc; nc <= sc; nc++)
              if (rB(cB + nc, Ic + Vc)) {
                uc.push(Ic * Bc + cB);
                break cB
              }
          }
      for (const sc of uc) cB.set(Ic, 4 * sc), cB[4 * sc + 3] = 255
    }
  },
  35085: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      drawBlockIcon: () => Wc,
      drawBlockIconUrl: () => wc,
      getDrawnBlockIcon: () => oc
    });
    var Vc = nc(35093);
    const Ic = Math.SQRT1_2,
      rB = Math.sqrt(3) / 2,
      uc = .5,
      sc = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Mc = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Pc = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const qB = 1e-6;

    function Oc(cB, Bc, nc, Vc) {
      let {
        origin: Ic,
        across: rB,
        down: uc,
        texture: sc,
        rect: [Mc, Pc, Oc, Tc],
        shade: fc
      } = Vc;
      const mB = rB.x * uc.y - rB.y * uc.x;
      if (Math.abs(mB) < 1e-9) return;
      const ec = [Ic.x, Ic.x + rB.x, Ic.x + uc.x, Ic.x + rB.x + uc.x],
        tB = [Ic.y, Ic.y + rB.y, Ic.y + uc.y, Ic.y + rB.y + uc.y],
        Sc = Math.max(0, Math.floor(Math.min(...ec))),
        yB = Math.min(nc - 1, Math.ceil(Math.max(...ec))),
        zB = Math.max(0, Math.floor(Math.min(...tB))),
        pc = Math.min(nc - 1, Math.ceil(Math.max(...tB)));
      for (let hc = zB; hc <= pc; hc++)
        for (let Vc = Sc; Vc <= yB; Vc++) {
          const ec = Vc + .5 - Ic.x,
            tB = hc + .5 - Ic.y,
            Sc = (ec * uc.y - tB * uc.x) / mB,
            yB = (rB.x * tB - rB.y * ec) / mB;
          if (Sc < -qB || Sc > 1 + qB || yB < -qB || yB > 1 + qB) continue;
          const zB = hc * nc + Vc;
          Bc[zB] = 1;
          const pc = Mc + Math.min(Math.max(Sc, 0), 1) * (Oc - Mc),
            aB = Pc + Math.min(Math.max(yB, 0), 1) * (Tc - Pc),
            lc = Math.min(sc.width - 1, Math.floor(pc * sc.width)),
            Yc = 4 * (Math.min(sc.height - 1, Math.floor(aB * sc.height)) * sc.width + lc),
            Lc = sc.pixels[Yc + 3] / 255;
          if (0 === Lc) continue;
          const gB = 4 * zB,
            Uc = cB[gB + 3] / 255 * (1 - Lc),
            bB = Lc + Uc;
          for (let Bc = 0; Bc < 3; Bc++) cB[gB + Bc] = (sc.pixels[Yc + Bc] * fc * Lc + cB[gB + Bc] * Uc) / bB;
          cB[gB + 3] = 255 * bB
        }
    }
    const Tc = new(nc(35095).c)(new URL(nc.p + nc.u(3), nc.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var fc = nc(35097);
    const mB = 1e4,
      ec = 3e4;
    let tB = null,
      Sc = null,
      yB = null,
      zB = !1,
      pc = 0;
    const hc = new Map;
    let aB = null;
    const lc = new Map;

    function Yc(cB) {
      return new Promise(((Bc, nc) => {
        const Vc = new Image;
        Vc.crossOrigin = "anonymous", Vc.onload = () => {
          Bc(Vc)
        }, Vc.onerror = () => {
          nc(new Error(`A block icon's face did not load: ${cB.slice(0,100)}`))
        }, Vc.src = cB
      }))
    }

    function Lc(cB) {
      var Bc, nc;
      zB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${cB}`), zB = !0, null === (Bc = tB) || void 0 === Bc || Bc.terminate(), tB = null, Sc = null, lc.clear();
      for (const Vc of hc.values()) Vc(null);
      hc.clear(), null === (nc = aB) || void 0 === nc || nc()
    }

    function gB() {
      return yB ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        try {
          tB = await async function() {
            return await Tc.ready(), Tc.start()
          }()
        } catch (Vc) {
          return void Lc(`did not start (${String(Vc)})`)
        }
        let cB = () => {};
        const Bc = new Promise((Bc => {
          cB = Bc
        }));
        tB.onmessage = Bc => {
          let {
            data: nc
          } = Bc;
          if ("started" === nc.type) Sc = tB, cB();
          else if ("failed" === nc.type) Lc(`failed a draw (${nc.message})`);
          else {
            var Vc, Ic;
            null === (Vc = hc.get(nc.id)) || void 0 === Vc || Vc(nc.url), hc.delete(nc.id), null === (Ic = aB) || void 0 === Ic || Ic()
          }
        }, tB.onerror = Bc => {
          Bc.preventDefault(), Lc(`stopped (${Bc.message||"its script did not load or run"})`), cB()
        };
        const nc = `did not start in ${ec/1e3} s`;
        await (0, fc.f)(Bc, ec, nc).catch((() => {
          Lc(nc)
        }))
      }(), yB
    }

    function Uc() {
      if (null !== aB || 0 === hc.size) return;
      const cB = new Promise((cB => {
          aB = cB
        })),
        Bc = `did not answer in ${mB/1e3} s`;
      (0, fc.f)(cB, mB, Bc).then((() => {
        aB = null, Uc()
      }), (() => {
        aB = null, Lc(Bc)
      }))
    }

    function bB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      cB.postMessage(Bc, nc)
    }
    async function Zc(cB, Bc, nc) {
      gB();
      const Vc = Sc;
      if (null === Vc) return null;
      if (await Promise.all([cB.top, cB.left, cB.right].map((cB => function(cB, Bc) {
          let nc = lc.get(Bc);
          return void 0 === nc && (nc = Yc(Bc).then((async nc => {
            try {
              const Vc = await createImageBitmap(nc);
              bB(cB, {
                type: "texture",
                url: Bc,
                bitmap: Vc
              }, [Vc])
            } catch (Vc) {
              Lc(`could not take a texture (${String(Vc)})`)
            }
          })), nc.catch((() => {
            lc.get(Bc) === nc && lc.delete(Bc)
          })), lc.set(Bc, nc)), nc
        }(Vc, cB)))), Sc !== Vc) return null;
      const Ic = ++pc;
      return new Promise((rB => {
        hc.set(Ic, rB), bB(Vc, {
          type: "draw",
          id: Ic,
          ...cB,
          size: Bc,
          outlineWidth: nc
        }), Uc()
      }))
    }
    const Qc = new Map,
      Cc = new Map,
      vB = new Map,
      Dc = new Map;

    function Nc(cB, Bc, nc) {
      return `${Bc}|${nc}|${cB}`
    }

    function Ec(cB, Bc, nc) {
      let Vc = cB.get(Bc);
      return void 0 === Vc && (Vc = nc().catch((nc => {
        throw cB.delete(Bc), nc
      })), cB.set(Bc, Vc)), Vc
    }

    function oc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Cc.get(Nc(cB, Bc, nc))
    }

    function Wc(cB, Bc, nc, Vc) {
      const Ic = Nc(cB, Bc, nc);
      return Ec(Qc, Ic, (async () => {
        const rB = await Xc(Vc(cB), Bc, kB(nc));
        return Cc.set(Ic, rB), rB
      }))
    }

    function wc(cB, Bc, nc, Vc) {
      return Ec(vB, Nc(cB, Bc, nc), (async () => {
        var Ic;
        const rB = Vc(cB),
          uc = kB(nc);
        return null !== (Ic = await Zc(rB, Bc, uc)) && void 0 !== Ic ? Ic : (await Xc(rB, Bc, uc)).toDataURL()
      }))
    }

    function kB(cB) {
      return Math.max(1, Math.round(cB))
    }
    async function Xc(cB, Bc, nc) {
      let {
        top: qB,
        left: Tc,
        right: fc,
        itemType: mB
      } = cB;
      const [ec, tB, Sc] = await Promise.all([Hc(qB), Hc(Tc), Hc(fc)]), yB = function(cB, Bc, nc, sc) {
        const Mc = .6 * nc,
          Pc = Mc * Ic,
          qB = Mc * Ic * uc,
          Tc = Mc * rB,
          fc = Math.max(...Bc.boxes.map((cB => cB[4]))),
          mB = Pc / 2 + (nc - Pc) / 2,
          ec = qB + (nc - qB - qB - fc * Tc) / 2,
          tB = (cB, Bc, nc) => ({
            x: mB + (cB - nc) * Pc,
            y: ec - qB + (cB + nc) * qB + (fc - Bc) * Tc
          }),
          Sc = (cB, nc, Vc, Ic, rB, uc) => ({
            origin: cB,
            across: {
              x: nc.x - cB.x,
              y: nc.y - cB.y
            },
            down: {
              x: Vc.x - cB.x,
              y: Vc.y - cB.y
            },
            texture: Ic,
            rect: Bc.cropFaces ? rB : [0, 0, 1, 1],
            shade: uc
          }),
          yB = new Uint8ClampedArray(nc * nc * 4),
          zB = new Uint8Array(nc * nc),
          pc = Vc.d;
        for (const [Vc, Ic, rB, uc, hc, aB] of Bc.boxes) {
          const Bc = Sc(tB(uc, hc, aB), tB(uc, hc, rB), tB(uc, Ic, aB), cB.right, [1 - aB, 1 - hc, 1 - rB, 1 - Ic], pc.right),
            sc = Sc(tB(Vc, hc, aB), tB(uc, hc, aB), tB(Vc, Ic, aB), cB.left, [Vc, 1 - hc, uc, 1 - Ic], pc.left),
            Mc = Sc(tB(Vc, hc, rB), tB(uc, hc, rB), tB(Vc, hc, aB), cB.top, [Vc, rB, uc, aB], pc.top);
          for (const cB of [Bc, sc, Mc]) Oc(yB, zB, nc, cB)
        }
        return (0, Vc.f)(yB, nc, sc, (cB => 1 === zB[cB])), yB
      }({
        top: ec,
        left: tB,
        right: Sc
      }, function(cB) {
        return "SlabBlock" === cB ? Mc : "StairsBlock" === cB ? Pc : sc
      }(mB), Bc, nc), zB = document.createElement("canvas");
      zB.width = Bc, zB.height = Bc;
      const pc = zB.getContext("2d");
      if (!pc) throw new Error("Failed to get 2D context");
      return pc.putImageData(new ImageData(yB, Bc, Bc), 0, 0), zB
    }

    function Hc(cB) {
      return Ec(Dc, cB, (async () => {
        const Bc = await Yc(cB),
          nc = document.createElement("canvas");
        nc.width = Bc.width, nc.height = Bc.height;
        const Vc = nc.getContext("2d");
        if (!Vc) throw new Error("Failed to get 2D context");
        return Vc.drawImage(Bc, 0, 0), {
          width: Bc.width,
          height: Bc.height,
          pixels: Vc.getImageData(0, 0, Bc.width, Bc.height).data
        }
      }))
    }
  },
  35097: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      e: () => rB,
      f: () => sc
    });
    const Vc = 250,
      Ic = 1e3;

    function rB() {
      return "undefined" !== typeof document && document.hidden
    }
    class uc extends Error {}

    function sc(cB, Bc, nc) {
      let sc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
        Mc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rB;
      return new Promise(((rB, Pc) => {
        let qB = !1,
          Oc = Bc,
          Tc = performance.now(),
          fc = !Mc();
        const mB = setInterval((() => {
          const cB = performance.now(),
            Bc = fc;
          fc = !Mc(), Bc && fc && (Oc -= Math.min(cB - Tc, Ic)), Tc = cB, Oc <= 0 && (qB = !0, clearInterval(mB), Pc(new uc(nc)))
        }), Vc);
        cB.then((cB => {
          clearInterval(mB), qB ? sc(cB) : (qB = !0, rB(cB))
        }), (cB => {
          clearInterval(mB), qB || (qB = !0, Pc(cB))
        }))
      }))
    }
  },
  35095: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    const Vc = {
      wait: function(cB) {
        return new Promise((Bc => {
          setTimeout(Bc, cB)
        }))
      },
      stallMs: 2e4
    };
    class Ic {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vc;
        this.url = cB, this.options = Bc, this.timing = nc, this.fetched = null, this.scriptUrl = void 0, this.scriptUrl = cB
      }
      ready() {
        return this.fetched ??= this.fetchWithRetries(), this.fetched
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries() {
        for (let cB = 0;; cB++) {
          const Bc = new URL(this.url);
          if (cB > 0 && Bc.searchParams.set("cache-bust", `${Date.now()}-${cB}`), await this.fetchWhole(Bc)) return void(this.scriptUrl = Bc);
          if (cB >= 3) return;
          await this.timing.wait(500 * 2 ** cB)
        }
      }
      async fetchWhole(cB) {
        const Bc = new AbortController;
        let nc;
        const Vc = () => {
          clearTimeout(nc), nc = setTimeout((() => {
            Bc.abort()
          }), this.timing.stallMs)
        };
        Vc();
        try {
          var Ic;
          const nc = await fetch(cB, {
            signal: Bc.signal
          });
          if (!nc.ok) return !1;
          const rB = null === (Ic = nc.body) || void 0 === Ic ? void 0 : Ic.getReader();
          if (!rB) return !1;
          for (;;) {
            const {
              done: cB
            } = await rB.read();
            if (cB) return !0;
            Vc()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(nc)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);