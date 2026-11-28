(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var bb = __webpack_require__.u,
        wb = __webpack_require__.e,
        Mb = {},
        eb = {};
      __webpack_require__.u = function(wb) {
        return bb(wb) + (Mb.hasOwnProperty(wb) ? "?" + Mb[wb] : "")
      }, __webpack_require__.e = function(Hb) {
        return wb(Hb).catch((function(wb) {
          var pb = eb.hasOwnProperty(Hb) ? eb[Hb] : 4;
          if (pb < 1) {
            var Vb = bb(Hb);
            if (wb.message = "Loading chunk " + Hb + " failed after 4 retries.\n(" + Vb + ")", wb.request = Vb, Mb[Hb] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete eb[Hb]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === wb.code) {
              var gb = __webpack_require__.miniCssF(Hb);
              wb.message = wb.message.replace("Loading chunk", "Loading CSS chunk").replace(Vb, gb), wb.request = gb
            }
            throw wb
          }
          return new Promise((function(bb) {
            var wb = 4 - pb + 1;
            setTimeout((function() {
              var wb = "cache-bust=" + Date.now();
              Mb[Hb] = wb, eb[Hb] = pb - 1, bb(__webpack_require__.e(Hb))
            }), function(bb) {
              return 500 * Math.pow(2, bb)
            }(wb))
          }))
        }))
      }
    }
  })();
  const bb = Math.SQRT1_2,
    wb = Math.SQRT1_2 / 2,
    Mb = Math.sqrt(3) / 2,
    eb = 2 * bb,
    Hb = 2 * wb + Mb;

  function pb(wb, Mb) {
    const eb = Mb > 0 ? Mb + 1 : 0,
      pb = .6 * wb - Mb / bb;
    return Math.max(0, Math.min(pb, (wb - 2 * eb) / Hb))
  }
  const Vb = [15, 15, 15],
    gb = {
      top: 1,
      left: .85,
      right: .7
    };

  function lb(bb, wb, Mb, Vb) {
    const {
      vertices: gb,
      uvs: lb,
      indices: Lb,
      shades: Ib
    } = bb, Ub = function(bb, wb) {
      const Mb = pb(bb, wb),
        Vb = eb * Mb,
        gb = Hb * Mb;
      return {
        left: (bb - Vb) / 2,
        top: (bb - gb) / 2,
        width: Vb,
        height: gb
      }
    }(Mb, Vb), tb = new Float32Array(gb.length);
    for (let eb = 0; eb < gb.length; eb += 3) tb[eb] = Ub.left + gb[eb] * Ub.width, tb[eb + 1] = Ub.top + gb[eb + 1] * Ub.height, tb[eb + 2] = gb[eb + 2];
    const Cb = new Float32Array(Mb * Mb).fill(-1 / 0),
      Eb = new Uint8ClampedArray(Mb * Mb * 4),
      Fb = 255 * bb.alphaCutoff;
    for (let eb = 0; eb < Lb.length; eb += 3) {
      const [bb, Hb, pb] = [Lb[eb], Lb[eb + 1], Lb[eb + 2]], [Vb, gb, Ob] = [3 * bb, 3 * Hb, 3 * pb], [Ub, Bb, sb, mb, hb, zb] = [tb[Vb], tb[Vb + 1], tb[gb], tb[gb + 1], tb[Ob], tb[Ob + 1]], Xb = (sb - Ub) * (zb - Bb) - (hb - Ub) * (mb - Bb);
      if (Math.abs(Xb) < 1e-9) continue;
      const xb = Ib[eb / 3],
        [jb, Kb, rb, Rb, Db, cb] = [lb[2 * bb], lb[2 * bb + 1], lb[2 * Hb], lb[2 * Hb + 1], lb[2 * pb], lb[2 * pb + 1]],
        Yb = Math.max(0, Math.floor(Math.min(Ub, sb, hb))),
        Zb = Math.min(Mb - 1, Math.ceil(Math.max(Ub, sb, hb))),
        fb = Math.max(0, Math.floor(Math.min(Bb, mb, zb))),
        Ab = Math.min(Mb - 1, Math.ceil(Math.max(Bb, mb, zb)));
      for (let eb = fb; eb <= Ab; eb++)
        for (let bb = Yb; bb <= Zb; bb++) {
          const [Hb, pb] = [bb + .5, eb + .5], lb = ((Hb - Ub) * (zb - Bb) - (hb - Ub) * (pb - Bb)) / Xb, Lb = ((sb - Ub) * (pb - Bb) - (Hb - Ub) * (mb - Bb)) / Xb, Ib = 1 - lb - Lb;
          if (Ib < 0 || lb < 0 || Lb < 0) continue;
          const Yb = Ib * tb[Vb + 2] + lb * tb[gb + 2] + Lb * tb[Ob + 2],
            Zb = eb * Mb + bb;
          if (Yb <= Cb[Zb]) continue;
          const fb = Math.max(0, Math.min(wb.width - 1, Math.floor((Ib * jb + lb * rb + Lb * Db) * wb.width))),
            Ab = 4 * (Math.max(0, Math.min(wb.height - 1, Math.floor((Ib * Kb + lb * Rb + Lb * cb) * wb.height))) * wb.width + fb);
          wb.pixels[Ab + 3] < Fb || (Cb[Zb] = Yb, Eb[4 * Zb] = wb.pixels[Ab] * xb, Eb[4 * Zb + 1] = wb.pixels[Ab + 1] * xb, Eb[4 * Zb + 2] = wb.pixels[Ab + 2] * xb, Eb[4 * Zb + 3] = 255)
        }
    }
    return Ob(Eb, Mb, Vb), Eb
  }
  let Lb = NaN,
    Ib = new Int32Array(0);

  function Ob(bb, wb, Mb) {
    let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb => 0 !== bb[4 * wb + 3];
    const Hb = new Uint8Array(wb * wb);
    for (let Vb = 0; Vb < wb * wb; Vb++) Hb[Vb] = eb(Vb) ? 1 : 0;
    const pb = (bb, Mb) => bb >= 0 && Mb >= 0 && bb < wb && Mb < wb && 0 === Hb[Mb * wb + bb],
      gb = new Float32Array(wb * wb).fill(1 / 0),
      lb = function(bb) {
        if (bb !== Lb) {
          const wb = Math.ceil(bb + 1),
            Mb = [];
          for (let eb = -wb; eb <= wb; eb++)
            for (let Hb = -wb; Hb <= wb; Hb++) {
              const wb = Hb * Hb + eb * eb;
              wb > 0 && wb < (bb + 1) ** 2 && Mb.push(Hb, eb, wb)
            }
          Lb = bb, Ib = Int32Array.from(Mb)
        }
        return Ib
      }(Mb);
    for (let Vb = 0; Vb < wb; Vb++)
      for (let bb = 0; bb < wb; bb++) {
        if (1 === Hb[Vb * wb + bb] && (pb(bb - 1, Vb) || pb(bb + 1, Vb) || pb(bb, Vb - 1) || pb(bb, Vb + 1)))
          for (let Mb = 0; Mb < lb.length; Mb += 3) {
            const eb = bb + lb[Mb],
              Hb = Vb + lb[Mb + 1];
            if (eb >= 0 && Hb >= 0 && eb < wb && Hb < wb) {
              const bb = Hb * wb + eb;
              gb[bb] = Math.min(gb[bb], lb[Mb + 2])
            }
          }
      }
    for (let Lb = 0; Lb < wb * wb; Lb++) 1 !== Hb[Lb] && gb[Lb] !== 1 / 0 && (bb.set(Vb, 4 * Lb), bb[4 * Lb + 3] = Math.round(255 * Math.min(1, Mb + 1 - Math.sqrt(gb[Lb]))))
  }
  const Ub = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    tb = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Cb = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Eb = 1e-6;

  function Fb(bb, wb, Mb, eb) {
    let {
      origin: Hb,
      across: pb,
      down: Vb,
      texture: gb,
      rect: [lb, Lb, Ib, Ob],
      shade: Ub
    } = eb;
    const tb = pb.x * Vb.y - pb.y * Vb.x;
    if (Math.abs(tb) < 1e-9) return;
    const Cb = [Hb.x, Hb.x + pb.x, Hb.x + Vb.x, Hb.x + pb.x + Vb.x],
      Fb = [Hb.y, Hb.y + pb.y, Hb.y + Vb.y, Hb.y + pb.y + Vb.y],
      Bb = Math.max(0, Math.floor(Math.min(...Cb))),
      sb = Math.min(Mb - 1, Math.ceil(Math.max(...Cb))),
      mb = Math.max(0, Math.floor(Math.min(...Fb))),
      hb = Math.min(Mb - 1, Math.ceil(Math.max(...Fb)));
    for (let zb = mb; zb <= hb; zb++)
      for (let eb = Bb; eb <= sb; eb++) {
        const Cb = eb + .5 - Hb.x,
          Fb = zb + .5 - Hb.y,
          Bb = (Cb * Vb.y - Fb * Vb.x) / tb,
          sb = (pb.x * Fb - pb.y * Cb) / tb;
        if (Bb < -Eb || Bb > 1 + Eb || sb < -Eb || sb > 1 + Eb) continue;
        const mb = zb * Mb + eb;
        wb[mb] = 1;
        const hb = lb + Math.min(Math.max(Bb, 0), 1) * (Ib - lb),
          Xb = Lb + Math.min(Math.max(sb, 0), 1) * (Ob - Lb),
          xb = Math.min(gb.width - 1, Math.floor(hb * gb.width)),
          jb = 4 * (Math.min(gb.height - 1, Math.floor(Xb * gb.height)) * gb.width + xb),
          Kb = gb.pixels[jb + 3] / 255;
        if (0 === Kb) continue;
        const rb = 4 * mb,
          Rb = bb[rb + 3] / 255 * (1 - Kb),
          Db = Kb + Rb;
        for (let wb = 0; wb < 3; wb++) bb[rb + wb] = (gb.pixels[jb + wb] * Ub * Kb + bb[rb + wb] * Rb) / Db;
        bb[rb + 3] = 255 * Db
      }
  }

  function Bb(bb, wb, Mb) {
    const eb = bb.get(wb);
    if (void 0 === eb) throw new Error(`no ${Mb} was sent for ${wb.slice(0,100)}`);
    return eb
  }
  const sb = {
      pixelsOf(bb) {
        const wb = new OffscreenCanvas(bb.width, bb.height),
          Mb = wb.getContext("2d");
        if (!Mb) throw new Error("no 2D context");
        return Mb.drawImage(bb, 0, 0), bb.close(), {
          width: wb.width,
          height: wb.height,
          pixels: Mb.getImageData(0, 0, wb.width, wb.height).data
        }
      },
      async encode(bb, wb) {
        const Mb = new OffscreenCanvas(wb, wb),
          eb = Mb.getContext("2d");
        if (!eb) throw new Error("no 2D context");
        eb.putImageData(new ImageData(bb, wb, wb), 0, 0);
        const Hb = await Mb.convertToBlob();
        return new Promise(((bb, wb) => {
          const Mb = new FileReader;
          Mb.onload = () => {
            bb(Mb.result)
          }, Mb.onerror = () => {
            var bb;
            wb(null !== (bb = Mb.error) && void 0 !== bb ? bb : new Error("the icon did not encode"))
          }, Mb.readAsDataURL(Hb)
        }))
      }
    },
    mb = globalThis.WorkerGlobalScope;
  void 0 !== mb && globalThis instanceof mb && function(eb, Hb) {
    const Vb = new Map,
      Lb = new Map,
      Ib = (bb, wb, Mb) => {
        (async () => {
          try {
            eb.postMessage({
              type: "drawn",
              id: bb,
              url: await Hb.encode(Mb(), wb)
            })
          } catch (pb) {
            eb.postMessage({
              type: "failed",
              message: String(pb)
            })
          }
        })()
      };
    eb.onmessage = eb => {
      let {
        data: Eb
      } = eb;
      if ("texture" === Eb.type) Vb.set(Eb.url, Hb.pixelsOf(Eb.bitmap));
      else if ("model" === Eb.type) Lb.set(Eb.name, {
        geometry: Eb.geometry,
        texture: Hb.pixelsOf(Eb.bitmap)
      });
      else if ("draw" === Eb.type) {
        const {
          id: eb,
          top: Hb,
          left: lb,
          right: Lb,
          itemType: sb,
          size: mb,
          outlineWidth: hb
        } = Eb;
        Ib(eb, mb, (() => function(eb, Hb, Vb, lb) {
          const Lb = pb(Vb, lb),
            Ib = Lb * bb,
            Ub = Lb * wb,
            tb = Lb * Mb,
            Cb = Math.max(...Hb.boxes.map((bb => bb[4]))),
            Eb = Vb / 2,
            Bb = Ub + (Vb - Ub - Ub - Cb * tb) / 2,
            sb = (bb, wb, Mb) => ({
              x: Eb + (bb - Mb) * Ib,
              y: Bb - Ub + (bb + Mb) * Ub + (Cb - wb) * tb
            }),
            mb = (bb, wb, Mb, eb, pb, Vb) => ({
              origin: bb,
              across: {
                x: wb.x - bb.x,
                y: wb.y - bb.y
              },
              down: {
                x: Mb.x - bb.x,
                y: Mb.y - bb.y
              },
              texture: eb,
              rect: Hb.cropFaces ? pb : [0, 0, 1, 1],
              shade: Vb
            }),
            hb = new Uint8ClampedArray(Vb * Vb * 4),
            zb = new Uint8Array(Vb * Vb),
            Xb = gb;
          for (const [bb, wb, Mb, pb, gb, Ob] of Hb.boxes) {
            const Hb = mb(sb(pb, gb, Ob), sb(pb, gb, Mb), sb(pb, wb, Ob), eb.right, [1 - Ob, 1 - gb, 1 - Mb, 1 - wb], Xb.right),
              lb = mb(sb(bb, gb, Ob), sb(pb, gb, Ob), sb(bb, wb, Ob), eb.left, [bb, 1 - gb, pb, 1 - wb], Xb.left),
              Lb = mb(sb(bb, gb, Mb), sb(pb, gb, Mb), sb(bb, gb, Ob), eb.top, [bb, Mb, pb, Ob], Xb.top);
            for (const bb of [Hb, lb, Lb]) Fb(hb, zb, Vb, bb)
          }
          return Ob(hb, Vb, lb, (bb => 1 === zb[bb])), hb
        }({
          top: Bb(Vb, Hb, "texture"),
          left: Bb(Vb, lb, "texture"),
          right: Bb(Vb, Lb, "texture")
        }, function(bb) {
          return "SlabBlock" === bb ? tb : "StairsBlock" === bb ? Cb : Ub
        }(sb), mb, hb)))
      } else {
        const {
          id: bb,
          name: wb,
          size: Mb,
          outlineWidth: eb
        } = Eb;
        Ib(bb, Mb, (() => {
          const {
            geometry: bb,
            texture: Hb
          } = Bb(Lb, wb, "model");
          return lb(bb, Hb, Mb, eb)
        }))
      }
    }, eb.postMessage({
      type: "started"
    })
  }(globalThis, sb)
})();