export const id = 4;
export const ids = [4];
export const modules = {
  36071: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      getBlockModelIconUrl: () => Xb,
      hasBlockModelIcon: () => Hb
    });
    var kb = sb(36061),
      Wb = sb(36056);
    const ab = sb(36077),
      Tb = new Map(ab.keys().filter((bb => bb.startsWith("./"))).map((bb => [bb.slice(2, -5), bb]))),
      Ub = new Map,
      Ib = new Map;

    function Hb(bb) {
      return Tb.has(bb)
    }

    function fb(bb) {
      return ab(Tb.get(bb))
    }
    async function Mb(bb, cb, sb) {
      const {
        data: kb,
        texture: ab
      } = await
      function(bb) {
        let cb = Ub.get(bb);
        return cb || (cb = fb(bb).then((async bb => {
          const cb = new Image;
          cb.src = bb.texture, await cb.decode();
          const sb = document.createElement("canvas");
          sb.width = cb.width, sb.height = cb.height;
          const kb = sb.getContext("2d");
          return kb.drawImage(cb, 0, 0), {
            data: bb,
            texture: {
              width: cb.width,
              height: cb.height,
              pixels: kb.getImageData(0, 0, cb.width, cb.height).data
            }
          }
        })), cb.catch((() => {
          Ub.delete(bb)
        })), Ub.set(bb, cb)), cb
      }(bb), Tb = document.createElement("canvas");
      return Tb.width = cb, Tb.height = cb, Tb.getContext("2d").putImageData(new ImageData((0, Wb.e)(kb, ab, cb, sb), cb, cb), 0, 0), Tb.toDataURL()
    }

    function Xb(bb, cb, sb) {
      const Wb = `${cb}|${sb}|${bb}`;
      let ab = Ib.get(Wb);
      return ab || (ab = (0, kb.g)(bb, (() => fb(bb)), cb, sb).then((kb => null !== kb && void 0 !== kb ? kb : Mb(bb, cb, sb))), ab.catch((() => {
        Ib.delete(Wb)
      })), Ib.set(Wb, ab)), ab
    }
  },
  36061: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => gb,
      g: () => Bb,
      k: () => Nb
    });
    var kb = sb(316),
      Wb = sb(117);
    const ab = new(sb(36068).b)(new URL(sb.p + sb.u(3), sb.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Tb = sb(1753),
      Ub = sb(2949);
    const Ib = 1e4,
      Hb = 3e4;
    let fb = null,
      Mb = null,
      Xb = null,
      nb = !1,
      mb = 0;
    const lb = new Map;
    let Qb = null;
    const eb = new Map,
      Cb = new Map;

    function Nb(bb) {
      const cb = new Promise(((cb, sb) => {
        const kb = new Image;
        kb.crossOrigin = "anonymous", kb.fetchPriority = "high", kb.onload = () => {
          cb(kb)
        }, kb.onerror = () => {
          sb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
        }, kb.src = bb
      }));
      return (0, Ub.h)(cb)
    }

    function Vb(bb) {
      var cb, sb;
      nb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), nb = !0, null === (cb = fb) || void 0 === cb || cb.terminate(), fb = null, Mb = null, eb.clear(), Cb.clear();
      for (const kb of lb.values()) kb(null);
      lb.clear(), null === (sb = Qb) || void 0 === sb || sb()
    }

    function Lb() {
      return Xb ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === kb.b.ios_icon_worker_v1 && (0, Wb.isWebKit)()) return;
        try {
          fb = await async function() {
            return await ab.ready(), ab.start()
          }()
        } catch (Ub) {
          return void Vb(`did not start (${String(Ub)})`)
        }
        let bb = () => {};
        const cb = new Promise((cb => {
          bb = cb
        }));
        fb.onmessage = cb => {
          let {
            data: sb
          } = cb;
          if ("started" === sb.type) Mb = fb, bb();
          else if ("failed" === sb.type) Vb(`failed a draw (${sb.message})`);
          else {
            var kb, Wb;
            null === (kb = lb.get(sb.id)) || void 0 === kb || kb(sb.url), lb.delete(sb.id), null === (Wb = Qb) || void 0 === Wb || Wb()
          }
        }, fb.onerror = cb => {
          cb.preventDefault(), Vb(`stopped (${cb.message||"its script did not load or run"})`), bb()
        };
        const sb = `did not start in ${Hb/1e3} s`;
        await (0, Tb.m)(cb, Hb, sb).catch((() => {
          Vb(sb)
        }))
      }(), Xb
    }

    function ub() {
      if (null !== Qb || 0 === lb.size) return;
      const bb = new Promise((bb => {
          Qb = bb
        })),
        cb = `did not answer in ${Ib/1e3} s`;
      (0, Tb.m)(bb, Ib, cb).then((() => {
        Qb = null, ub()
      }), (() => {
        Qb = null, Vb(cb)
      }))
    }

    function Yb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      bb.postMessage(cb, sb)
    }

    function hb(bb, cb, sb, kb) {
      let Wb = cb.get(sb);
      return void 0 === Wb && (Wb = kb().then((async cb => {
        let {
          image: sb,
          request: kb
        } = cb;
        try {
          const cb = await createImageBitmap(sb);
          Yb(bb, kb(cb), [cb])
        } catch (Wb) {
          Vb(`could not take an image (${String(Wb)})`)
        }
      })), Wb.catch((() => {
        cb.get(sb) === Wb && cb.delete(sb)
      })), cb.set(sb, Wb)), Wb
    }
    async function Jb(bb, cb) {
      Lb();
      const sb = Mb;
      if (null === sb) return null;
      if (await bb(sb), Mb !== sb) return null;
      const kb = ++mb;
      return new Promise((bb => {
        lb.set(kb, bb), Yb(sb, cb(kb)), ub()
      }))
    }

    function gb(bb, cb, sb) {
      return Jb((cb => Promise.all([bb.top, bb.left, bb.right].map((bb => function(bb, cb) {
        return hb(bb, eb, cb, (async () => ({
          image: await Nb(cb),
          request: bb => ({
            type: "texture",
            url: cb,
            bitmap: bb
          })
        })))
      }(cb, bb))))), (kb => ({
        type: "draw",
        id: kb,
        ...bb,
        size: cb,
        outlineWidth: sb
      })))
    }

    function Bb(bb, cb, sb, kb) {
      return Jb((sb => function(bb, cb, sb) {
        return hb(bb, Cb, cb, (async () => {
          const {
            texture: bb,
            ...kb
          } = await sb();
          return {
            image: await Nb(bb),
            request: bb => ({
              type: "model",
              name: cb,
              bitmap: bb,
              geometry: kb
            })
          }
        }))
      }(sb, bb, cb)), (cb => ({
        type: "drawModel",
        id: cb,
        name: bb,
        size: sb,
        outlineWidth: kb
      })))
    }
  },
  36056: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Ub,
      e: () => Tb
    });
    const kb = 1 / 32,
      Wb = [15, 15, 15],
      ab = {
        top: 1,
        left: .85,
        right: .7
      };

    function Tb(bb, cb, sb, Wb) {
      const {
        vertices: ab,
        uvs: Tb,
        indices: Ib,
        shades: Hb
      } = bb, fb = sb * kb, Mb = sb - 2 * fb, Xb = new Float32Array(ab.length);
      for (let kb = 0; kb < ab.length; kb += 3) Xb[kb] = fb + ab[kb] * Mb, Xb[kb + 1] = fb + ab[kb + 1] * Mb, Xb[kb + 2] = ab[kb + 2];
      const nb = new Float32Array(sb * sb).fill(-1 / 0),
        mb = new Uint8ClampedArray(sb * sb * 4),
        lb = 255 * bb.alphaCutoff;
      for (let kb = 0; kb < Ib.length; kb += 3) {
        const [bb, Wb, ab] = [Ib[kb], Ib[kb + 1], Ib[kb + 2]], [Ub, fb, Mb] = [3 * bb, 3 * Wb, 3 * ab], [Qb, eb, Cb, Nb, Vb, Lb] = [Xb[Ub], Xb[Ub + 1], Xb[fb], Xb[fb + 1], Xb[Mb], Xb[Mb + 1]], ub = (Cb - Qb) * (Lb - eb) - (Vb - Qb) * (Nb - eb);
        if (Math.abs(ub) < 1e-9) continue;
        const Yb = Hb[kb / 3],
          [hb, Jb, gb, Bb, tb, yb] = [Tb[2 * bb], Tb[2 * bb + 1], Tb[2 * Wb], Tb[2 * Wb + 1], Tb[2 * ab], Tb[2 * ab + 1]],
          Pb = Math.max(0, Math.floor(Math.min(Qb, Cb, Vb))),
          Db = Math.min(sb - 1, Math.ceil(Math.max(Qb, Cb, Vb))),
          Eb = Math.max(0, Math.floor(Math.min(eb, Nb, Lb))),
          ib = Math.min(sb - 1, Math.ceil(Math.max(eb, Nb, Lb)));
        for (let kb = Eb; kb <= ib; kb++)
          for (let bb = Pb; bb <= Db; bb++) {
            const [Wb, ab] = [bb + .5, kb + .5], Tb = ((Wb - Qb) * (Lb - eb) - (Vb - Qb) * (ab - eb)) / ub, Ib = ((Cb - Qb) * (ab - eb) - (Wb - Qb) * (Nb - eb)) / ub, Hb = 1 - Tb - Ib;
            if (Hb < 0 || Tb < 0 || Ib < 0) continue;
            const Pb = Hb * Xb[Ub + 2] + Tb * Xb[fb + 2] + Ib * Xb[Mb + 2],
              Db = kb * sb + bb;
            if (Pb <= nb[Db]) continue;
            const Eb = Math.max(0, Math.min(cb.width - 1, Math.floor((Hb * hb + Tb * gb + Ib * tb) * cb.width))),
              ib = 4 * (Math.max(0, Math.min(cb.height - 1, Math.floor((Hb * Jb + Tb * Bb + Ib * yb) * cb.height))) * cb.width + Eb);
            cb.pixels[ib + 3] < lb || (nb[Db] = Pb, mb[4 * Db] = cb.pixels[ib] * Yb, mb[4 * Db + 1] = cb.pixels[ib + 1] * Yb, mb[4 * Db + 2] = cb.pixels[ib + 2] * Yb, mb[4 * Db + 3] = 255)
          }
      }
      return Ub(mb, sb, Wb), mb
    }

    function Ub(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cb => 0 !== bb[4 * cb + 3];
      const ab = (bb, sb) => bb < 0 || sb < 0 || bb >= cb || sb >= cb || !kb(sb * cb + bb),
        Tb = [];
      for (let Wb = 0; Wb < cb; Wb++)
        for (let bb = 0; bb < cb; bb++)
          if (!ab(bb, Wb)) bb: for (let kb = -sb; kb <= sb; kb++) {
            const Ub = sb - Math.abs(kb);
            for (let sb = -Ub; sb <= Ub; sb++)
              if (ab(bb + sb, Wb + kb)) {
                Tb.push(Wb * cb + bb);
                break bb
              }
          }
      for (const Ub of Tb) bb.set(Wb, 4 * Ub), bb[4 * Ub + 3] = 255
    }
  },
  36068: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    const kb = {
      wait: function(bb) {
        return new Promise((cb => {
          setTimeout(cb, bb)
        }))
      },
      stallMs: 2e4
    };
    class Wb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kb;
        this.url = bb, this.options = cb, this.timing = sb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).finally((() => {
            this.fetchAbort === bb && (this.fetchAbort = null)
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
      async fetchWithRetries(bb) {
        for (let cb = 0;; cb++) {
          const sb = new URL(this.url);
          if (cb > 0 && sb.searchParams.set("cache-bust", `${Date.now()}-${cb}`), await this.fetchWhole(sb, bb)) return void(this.scriptUrl = sb);
          if (cb >= 3 || bb.aborted) return;
          if (await this.timing.wait(500 * 2 ** cb), bb.aborted) return
        }
      }
      async fetchWhole(bb, cb) {
        const sb = new AbortController;
        let kb;
        const Wb = () => {
            clearTimeout(kb), kb = setTimeout((() => {
              sb.abort()
            }), this.timing.stallMs)
          },
          ab = () => {
            sb.abort()
          };
        cb.addEventListener("abort", ab, {
          once: !0
        }), Wb();
        try {
          var Tb;
          const cb = await fetch(bb, {
            signal: sb.signal
          });
          if (!cb.ok) return !1;
          const kb = null === (Tb = cb.body) || void 0 === Tb ? void 0 : Tb.getReader();
          if (!kb) return !1;
          for (;;) {
            const {
              done: bb
            } = await kb.read();
            if (bb) return !0;
            Wb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(kb), cb.removeEventListener("abort", ab)
        }
      }
    }
  },
  36077: (bb, cb, sb) => {
    var kb = {
      "./Artisan Bench.json": [40605, 265],
      "./Aspen Item Pedestal.json": [40614, 266],
      "./Cedar Item Pedestal.json": [40616, 267],
      "./Cherry Item Pedestal.json": [40618, 268],
      "./Furnace.json": [40626, 269],
      "./Jungle Item Pedestal.json": [40630, 270],
      "./Mango Item Pedestal.json": [40637, 271],
      "./Palm Item Pedestal.json": [40645, 272],
      "./Pear Item Pedestal.json": [40647, 273],
      "./Pine Item Pedestal.json": [40651, 274],
      "./Plum Item Pedestal.json": [40655, 275],
      "./Potion Table.json": [40664, 276],
      "./Salvaging Table.json": [40668, 277],
      "./Showcase.json": [40677, 278],
      "./Spectral Item Pedestal.json": [40683, 279],
      "./Workbench.json": [40691, 280]
    };

    function Wb(bb) {
      if (!sb.o(kb, bb)) return Promise.resolve().then((() => {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }));
      var cb = kb[bb],
        Wb = cb[0];
      return sb.e(cb[1]).then((() => sb(Wb)))
    }
    Wb.keys = () => Object.keys(kb), Wb.id = 36077, bb.exports = Wb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);