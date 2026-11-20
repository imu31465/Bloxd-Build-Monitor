export const id = 2;
export const ids = [2];
export const modules = {
  36047: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      drawBlockIcon: () => Vb,
      drawBlockIconUrl: () => Lb,
      getDrawnBlockIcon: () => Nb
    });
    var kb = sb(36056);
    const Wb = Math.SQRT1_2,
      ab = Math.sqrt(3) / 2,
      Tb = .5,
      Ub = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Ib = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Hb = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const fb = 1e-6;

    function Mb(bb, cb, sb, kb) {
      let {
        origin: Wb,
        across: ab,
        down: Tb,
        texture: Ub,
        rect: [Ib, Hb, Mb, Xb],
        shade: nb
      } = kb;
      const mb = ab.x * Tb.y - ab.y * Tb.x;
      if (Math.abs(mb) < 1e-9) return;
      const lb = [Wb.x, Wb.x + ab.x, Wb.x + Tb.x, Wb.x + ab.x + Tb.x],
        Qb = [Wb.y, Wb.y + ab.y, Wb.y + Tb.y, Wb.y + ab.y + Tb.y],
        eb = Math.max(0, Math.floor(Math.min(...lb))),
        Cb = Math.min(sb - 1, Math.ceil(Math.max(...lb))),
        Nb = Math.max(0, Math.floor(Math.min(...Qb))),
        Vb = Math.min(sb - 1, Math.ceil(Math.max(...Qb)));
      for (let Lb = Nb; Lb <= Vb; Lb++)
        for (let kb = eb; kb <= Cb; kb++) {
          const lb = kb + .5 - Wb.x,
            Qb = Lb + .5 - Wb.y,
            eb = (lb * Tb.y - Qb * Tb.x) / mb,
            Cb = (ab.x * Qb - ab.y * lb) / mb;
          if (eb < -fb || eb > 1 + fb || Cb < -fb || Cb > 1 + fb) continue;
          const Nb = Lb * sb + kb;
          cb[Nb] = 1;
          const Vb = Ib + Math.min(Math.max(eb, 0), 1) * (Mb - Ib),
            ub = Hb + Math.min(Math.max(Cb, 0), 1) * (Xb - Hb),
            Yb = Math.min(Ub.width - 1, Math.floor(Vb * Ub.width)),
            hb = 4 * (Math.min(Ub.height - 1, Math.floor(ub * Ub.height)) * Ub.width + Yb),
            Jb = Ub.pixels[hb + 3] / 255;
          if (0 === Jb) continue;
          const gb = 4 * Nb,
            Bb = bb[gb + 3] / 255 * (1 - Jb),
            tb = Jb + Bb;
          for (let cb = 0; cb < 3; cb++) bb[gb + cb] = (Ub.pixels[hb + cb] * nb * Jb + bb[gb + cb] * Bb) / tb;
          bb[gb + 3] = 255 * tb
        }
    }
    var Xb = sb(36061);
    const nb = new Map,
      mb = new Map,
      lb = new Map,
      Qb = new Map;

    function eb(bb, cb, sb) {
      return `${cb}|${sb}|${bb}`
    }

    function Cb(bb, cb, sb) {
      let kb = bb.get(cb);
      return void 0 === kb && (kb = sb().catch((sb => {
        throw bb.delete(cb), sb
      })), bb.set(cb, kb)), kb
    }

    function Nb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return mb.get(eb(bb, cb, sb))
    }

    function Vb(bb, cb, sb, kb) {
      const Wb = eb(bb, cb, sb);
      return Cb(nb, Wb, (async () => {
        const ab = await Yb(kb(bb), cb, ub(sb));
        return mb.set(Wb, ab), ab
      }))
    }

    function Lb(bb, cb, sb, kb) {
      return Cb(lb, eb(bb, cb, sb), (async () => {
        var Wb;
        const ab = kb(bb),
          Tb = ub(sb);
        return null !== (Wb = await (0, Xb.d)(ab, cb, Tb)) && void 0 !== Wb ? Wb : (await Yb(ab, cb, Tb)).toDataURL()
      }))
    }

    function ub(bb) {
      return Math.max(1, Math.round(bb))
    }
    async function Yb(bb, cb, sb) {
      let {
        top: fb,
        left: Xb,
        right: nb,
        itemType: mb
      } = bb;
      const [lb, Qb, eb] = await Promise.all([hb(fb), hb(Xb), hb(nb)]), Cb = function(bb, cb, sb, Ub) {
        const Ib = .6 * sb,
          Hb = Ib * Wb,
          fb = Ib * Wb * Tb,
          Xb = Ib * ab,
          nb = Math.max(...cb.boxes.map((bb => bb[4]))),
          mb = Hb / 2 + (sb - Hb) / 2,
          lb = fb + (sb - fb - fb - nb * Xb) / 2,
          Qb = (bb, cb, sb) => ({
            x: mb + (bb - sb) * Hb,
            y: lb - fb + (bb + sb) * fb + (nb - cb) * Xb
          }),
          eb = (bb, sb, kb, Wb, ab, Tb) => ({
            origin: bb,
            across: {
              x: sb.x - bb.x,
              y: sb.y - bb.y
            },
            down: {
              x: kb.x - bb.x,
              y: kb.y - bb.y
            },
            texture: Wb,
            rect: cb.cropFaces ? ab : [0, 0, 1, 1],
            shade: Tb
          }),
          Cb = new Uint8ClampedArray(sb * sb * 4),
          Nb = new Uint8Array(sb * sb),
          Vb = kb.c;
        for (const [kb, Wb, ab, Tb, Lb, ub] of cb.boxes) {
          const cb = eb(Qb(Tb, Lb, ub), Qb(Tb, Lb, ab), Qb(Tb, Wb, ub), bb.right, [1 - ub, 1 - Lb, 1 - ab, 1 - Wb], Vb.right),
            Ub = eb(Qb(kb, Lb, ub), Qb(Tb, Lb, ub), Qb(kb, Wb, ub), bb.left, [kb, 1 - Lb, Tb, 1 - Wb], Vb.left),
            Ib = eb(Qb(kb, Lb, ab), Qb(Tb, Lb, ab), Qb(kb, Lb, ub), bb.top, [kb, ab, Tb, ub], Vb.top);
          for (const bb of [cb, Ub, Ib]) Mb(Cb, Nb, sb, bb)
        }
        return (0, kb.d)(Cb, sb, Ub, (bb => 1 === Nb[bb])), Cb
      }({
        top: lb,
        left: Qb,
        right: eb
      }, function(bb) {
        return "SlabBlock" === bb ? Ib : "StairsBlock" === bb ? Hb : Ub
      }(mb), cb, sb), Nb = document.createElement("canvas");
      Nb.width = cb, Nb.height = cb;
      const Vb = Nb.getContext("2d");
      if (!Vb) throw new Error("Failed to get 2D context");
      return Vb.putImageData(new ImageData(Cb, cb, cb), 0, 0), Nb
    }

    function hb(bb) {
      return Cb(Qb, bb, (async () => {
        const cb = await (0, Xb.k)(bb),
          sb = document.createElement("canvas");
        sb.width = cb.width, sb.height = cb.height;
        const kb = sb.getContext("2d");
        if (!kb) throw new Error("Failed to get 2D context");
        return kb.drawImage(cb, 0, 0), {
          width: cb.width,
          height: cb.height,
          pixels: kb.getImageData(0, 0, cb.width, cb.height).data
        }
      }))
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);