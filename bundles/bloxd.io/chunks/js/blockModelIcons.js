export const id = 4;
export const ids = [4];
export const modules = {
  35856: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      getBlockModelIconUrl: () => Pb,
      hasBlockModelIcon: () => eb
    });
    var Ab = Ub(35843),
      Mb = Ub(35836);
    const Tb = Ub(35862),
      Eb = new Map(Tb.keys().filter((bb => bb.startsWith("./"))).map((bb => [bb.slice(2, -5), bb]))),
      Yb = new Map,
      Bb = new Map;

    function eb(bb) {
      return Eb.has(bb)
    }

    function vb(bb) {
      return Tb(Eb.get(bb))
    }
    async function Lb(bb, ab, Ub) {
      const {
        data: Ab,
        texture: Tb
      } = await
      function(bb) {
        let ab = Yb.get(bb);
        return ab || (ab = vb(bb).then((async bb => {
          const ab = new Image;
          ab.src = bb.texture, await ab.decode();
          const Ub = document.createElement("canvas");
          Ub.width = ab.width, Ub.height = ab.height;
          const Ab = Ub.getContext("2d");
          return Ab.drawImage(ab, 0, 0), {
            data: bb,
            texture: {
              width: ab.width,
              height: ab.height,
              pixels: Ab.getImageData(0, 0, ab.width, ab.height).data
            }
          }
        })), ab.catch((() => {
          Yb.delete(bb)
        })), Yb.set(bb, ab)), ab
      }(bb), Eb = document.createElement("canvas");
      return Eb.width = ab, Eb.height = ab, Eb.getContext("2d").putImageData(new ImageData((0, Mb.g)(Ab, Tb, ab, Ub), ab, ab), 0, 0), Eb.toDataURL()
    }

    function Pb(bb, ab, Ub) {
      const Mb = `${ab}|${Ub}|${bb}`;
      let Tb = Bb.get(Mb);
      return Tb || (Tb = (0, Ab.d)(bb, (() => vb(bb)), ab, Ub).then((Ab => null !== Ab && void 0 !== Ab ? Ab : Lb(bb, ab, Ub))), Tb.catch((() => {
        Bb.delete(Mb)
      })), Bb.set(Mb, Tb)), Tb
    }
  },
  35843: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Nb,
      d: () => Wb,
      g: () => Db
    });
    var Ab = Ub(294),
      Mb = Ub(101);
    const Tb = new(Ub(35850).d)(new URL(Ub.p + Ub.u(3), Ub.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Eb = Ub(1687),
      Yb = Ub(2930);
    const Bb = 1e4,
      eb = 3e4;
    let vb = null,
      Lb = null,
      Pb = null,
      Xb = !1,
      jb = 0;
    const Rb = new Map;
    let kb = null;
    const yb = new Map,
      Zb = new Map;

    function Db(bb) {
      const ab = new Promise(((ab, Ub) => {
        const Ab = new Image;
        Ab.crossOrigin = "anonymous", Ab.fetchPriority = "high", Ab.onload = () => {
          ab(Ab)
        }, Ab.onerror = () => {
          Ub(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
        }, Ab.src = bb
      }));
      return (0, Yb.i)(ab)
    }

    function zb(bb) {
      var ab, Ub;
      Xb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), Xb = !0, null === (ab = vb) || void 0 === ab || ab.terminate(), vb = null, Lb = null, yb.clear(), Zb.clear();
      for (const Ab of Rb.values()) Ab(null);
      Rb.clear(), null === (Ub = kb) || void 0 === Ub || Ub()
    }

    function xb() {
      return Pb ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Ab.c.ios_icon_worker_v1 && (0, Mb.isWebKit)()) return;
        try {
          vb = await async function() {
            return await Tb.ready(), Tb.start()
          }()
        } catch (Yb) {
          return void zb(`did not start (${String(Yb)})`)
        }
        let bb = () => {};
        const ab = new Promise((ab => {
          bb = ab
        }));
        vb.onmessage = ab => {
          let {
            data: Ub
          } = ab;
          if ("started" === Ub.type) Lb = vb, bb();
          else if ("failed" === Ub.type) zb(`failed a draw (${Ub.message})`);
          else {
            var Ab, Mb;
            null === (Ab = Rb.get(Ub.id)) || void 0 === Ab || Ab(Ub.url), Rb.delete(Ub.id), null === (Mb = kb) || void 0 === Mb || Mb()
          }
        }, vb.onerror = ab => {
          ab.preventDefault(), zb(`stopped (${ab.message||"its script did not load or run"})`), bb()
        };
        const Ub = `did not start in ${eb/1e3} s`;
        await (0, Eb.o)(ab, eb, Ub).catch((() => {
          zb(Ub)
        }))
      }(), Pb
    }

    function ib() {
      if (null !== kb || 0 === Rb.size) return;
      const bb = new Promise((bb => {
          kb = bb
        })),
        ab = `did not answer in ${Bb/1e3} s`;
      (0, Eb.o)(bb, Bb, ab).then((() => {
        kb = null, ib()
      }), (() => {
        kb = null, zb(ab)
      }))
    }

    function fb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      bb.postMessage(ab, Ub)
    }

    function mb(bb, ab, Ub, Ab) {
      let Mb = ab.get(Ub);
      return void 0 === Mb && (Mb = Ab().then((async ab => {
        let {
          image: Ub,
          request: Ab
        } = ab;
        try {
          const ab = await createImageBitmap(Ub);
          fb(bb, Ab(ab), [ab])
        } catch (Mb) {
          zb(`could not take an image (${String(Mb)})`)
        }
      })), Mb.catch((() => {
        ab.get(Ub) === Mb && ab.delete(Ub)
      })), ab.set(Ub, Mb)), Mb
    }
    async function pb(bb, ab) {
      xb();
      const Ub = Lb;
      if (null === Ub) return null;
      if (await bb(Ub), Lb !== Ub) return null;
      const Ab = ++jb;
      return new Promise((bb => {
        Rb.set(Ab, bb), fb(Ub, ab(Ab)), ib()
      }))
    }

    function Nb(bb, ab, Ub) {
      return pb((ab => Promise.all([bb.top, bb.left, bb.right].map((bb => function(bb, ab) {
        return mb(bb, yb, ab, (async () => ({
          image: await Db(ab),
          request: bb => ({
            type: "texture",
            url: ab,
            bitmap: bb
          })
        })))
      }(ab, bb))))), (Ab => ({
        type: "draw",
        id: Ab,
        ...bb,
        size: ab,
        outlineWidth: Ub
      })))
    }

    function Wb(bb, ab, Ub, Ab) {
      return pb((Ub => function(bb, ab, Ub) {
        return mb(bb, Zb, ab, (async () => {
          const {
            texture: bb,
            ...Ab
          } = await Ub();
          return {
            image: await Db(bb),
            request: bb => ({
              type: "model",
              name: ab,
              bitmap: bb,
              geometry: Ab
            })
          }
        }))
      }(Ub, bb, ab)), (ab => ({
        type: "drawModel",
        id: ab,
        name: bb,
        size: Ub,
        outlineWidth: Ab
      })))
    }
  },
  35836: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      d: () => Yb,
      g: () => Eb
    });
    const Ab = 1 / 32,
      Mb = [15, 15, 15],
      Tb = {
        top: 1,
        left: .85,
        right: .7
      };

    function Eb(bb, ab, Ub, Mb) {
      const {
        vertices: Tb,
        uvs: Eb,
        indices: Bb,
        shades: eb
      } = bb, vb = Ub * Ab, Lb = Ub - 2 * vb, Pb = new Float32Array(Tb.length);
      for (let Ab = 0; Ab < Tb.length; Ab += 3) Pb[Ab] = vb + Tb[Ab] * Lb, Pb[Ab + 1] = vb + Tb[Ab + 1] * Lb, Pb[Ab + 2] = Tb[Ab + 2];
      const Xb = new Float32Array(Ub * Ub).fill(-1 / 0),
        jb = new Uint8ClampedArray(Ub * Ub * 4),
        Rb = 255 * bb.alphaCutoff;
      for (let Ab = 0; Ab < Bb.length; Ab += 3) {
        const [bb, Mb, Tb] = [Bb[Ab], Bb[Ab + 1], Bb[Ab + 2]], [Yb, vb, Lb] = [3 * bb, 3 * Mb, 3 * Tb], [kb, yb, Zb, Db, zb, xb] = [Pb[Yb], Pb[Yb + 1], Pb[vb], Pb[vb + 1], Pb[Lb], Pb[Lb + 1]], ib = (Zb - kb) * (xb - yb) - (zb - kb) * (Db - yb);
        if (Math.abs(ib) < 1e-9) continue;
        const fb = eb[Ab / 3],
          [mb, pb, Nb, Wb, Hb, Ib] = [Eb[2 * bb], Eb[2 * bb + 1], Eb[2 * Mb], Eb[2 * Mb + 1], Eb[2 * Tb], Eb[2 * Tb + 1]],
          db = Math.max(0, Math.floor(Math.min(kb, Zb, zb))),
          Fb = Math.min(Ub - 1, Math.ceil(Math.max(kb, Zb, zb))),
          hb = Math.max(0, Math.floor(Math.min(yb, Db, xb))),
          Gb = Math.min(Ub - 1, Math.ceil(Math.max(yb, Db, xb)));
        for (let Ab = hb; Ab <= Gb; Ab++)
          for (let bb = db; bb <= Fb; bb++) {
            const [Mb, Tb] = [bb + .5, Ab + .5], Eb = ((Mb - kb) * (xb - yb) - (zb - kb) * (Tb - yb)) / ib, Bb = ((Zb - kb) * (Tb - yb) - (Mb - kb) * (Db - yb)) / ib, eb = 1 - Eb - Bb;
            if (eb < 0 || Eb < 0 || Bb < 0) continue;
            const db = eb * Pb[Yb + 2] + Eb * Pb[vb + 2] + Bb * Pb[Lb + 2],
              Fb = Ab * Ub + bb;
            if (db <= Xb[Fb]) continue;
            const hb = Math.max(0, Math.min(ab.width - 1, Math.floor((eb * mb + Eb * Nb + Bb * Hb) * ab.width))),
              Gb = 4 * (Math.max(0, Math.min(ab.height - 1, Math.floor((eb * pb + Eb * Wb + Bb * Ib) * ab.height))) * ab.width + hb);
            ab.pixels[Gb + 3] < Rb || (Xb[Fb] = db, jb[4 * Fb] = ab.pixels[Gb] * fb, jb[4 * Fb + 1] = ab.pixels[Gb + 1] * fb, jb[4 * Fb + 2] = ab.pixels[Gb + 2] * fb, jb[4 * Fb + 3] = 255)
          }
      }
      return Yb(jb, Ub, Mb), jb
    }

    function Yb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ab => 0 !== bb[4 * ab + 3];
      const Tb = (bb, Ub) => bb < 0 || Ub < 0 || bb >= ab || Ub >= ab || !Ab(Ub * ab + bb),
        Eb = [];
      for (let Mb = 0; Mb < ab; Mb++)
        for (let bb = 0; bb < ab; bb++)
          if (!Tb(bb, Mb)) bb: for (let Ab = -Ub; Ab <= Ub; Ab++) {
            const Yb = Ub - Math.abs(Ab);
            for (let Ub = -Yb; Ub <= Yb; Ub++)
              if (Tb(bb + Ub, Mb + Ab)) {
                Eb.push(Mb * ab + bb);
                break bb
              }
          }
      for (const Yb of Eb) bb.set(Mb, 4 * Yb), bb[4 * Yb + 3] = 255
    }
  },
  35850: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    const Ab = {
      wait: function(bb) {
        return new Promise((ab => {
          setTimeout(ab, bb)
        }))
      },
      stallMs: 2e4
    };
    class Mb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ab;
        this.url = bb, this.options = ab, this.timing = Ub, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
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
        for (let ab = 0;; ab++) {
          const Ub = new URL(this.url);
          if (ab > 0 && Ub.searchParams.set("cache-bust", `${Date.now()}-${ab}`), await this.fetchWhole(Ub, bb)) return void(this.scriptUrl = Ub);
          if (ab >= 3 || bb.aborted) return;
          if (await this.timing.wait(500 * 2 ** ab), bb.aborted) return
        }
      }
      async fetchWhole(bb, ab) {
        const Ub = new AbortController;
        let Ab;
        const Mb = () => {
            clearTimeout(Ab), Ab = setTimeout((() => {
              Ub.abort()
            }), this.timing.stallMs)
          },
          Tb = () => {
            Ub.abort()
          };
        ab.addEventListener("abort", Tb, {
          once: !0
        }), Mb();
        try {
          var Eb;
          const ab = await fetch(bb, {
            signal: Ub.signal
          });
          if (!ab.ok) return !1;
          const Ab = null === (Eb = ab.body) || void 0 === Eb ? void 0 : Eb.getReader();
          if (!Ab) return !1;
          for (;;) {
            const {
              done: bb
            } = await Ab.read();
            if (bb) return !0;
            Mb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Ab), ab.removeEventListener("abort", Tb)
        }
      }
    }
  },
  35862: (bb, ab, Ub) => {
    var Ab = {
      "./Artisan Bench.json": [40287, 265],
      "./Aspen Item Pedestal.json": [40296, 266],
      "./Cedar Item Pedestal.json": [40299, 267],
      "./Cherry Item Pedestal.json": [40306, 268],
      "./Furnace.json": [40312, 269],
      "./Jungle Item Pedestal.json": [40321, 270],
      "./Mango Item Pedestal.json": [40325, 271],
      "./Palm Item Pedestal.json": [40333, 272],
      "./Pear Item Pedestal.json": [40336, 273],
      "./Pine Item Pedestal.json": [40341, 274],
      "./Plum Item Pedestal.json": [40344, 275],
      "./Potion Table.json": [40346, 276],
      "./Salvaging Table.json": [40350, 277],
      "./Showcase.json": [40357, 278],
      "./Spectral Item Pedestal.json": [40361, 279],
      "./Workbench.json": [40364, 280]
    };

    function Mb(bb) {
      if (!Ub.o(Ab, bb)) return Promise.resolve().then((() => {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }));
      var ab = Ab[bb],
        Mb = ab[0];
      return Ub.e(ab[1]).then((() => Ub(Mb)))
    }
    Mb.keys = () => Object.keys(Ab), Mb.id = 35862, bb.exports = Mb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);