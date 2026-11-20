(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var bb = __webpack_require__.u,
        cb = __webpack_require__.e,
        sb = {},
        kb = {};
      __webpack_require__.u = function(cb) {
        return bb(cb) + (sb.hasOwnProperty(cb) ? "?" + sb[cb] : "")
      }, __webpack_require__.e = function(Wb) {
        return cb(Wb).catch((function(cb) {
          var ab = kb.hasOwnProperty(Wb) ? kb[Wb] : 4;
          if (ab < 1) {
            var Tb = bb(Wb);
            throw cb.message = "Loading chunk " + Wb + " failed after 4 retries.\n(" + Tb + ")", cb.request = Tb, sb[Wb] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete kb[Wb]
            }), 0), cb
          }
          return new Promise((function(bb) {
            var cb = 4 - ab + 1;
            setTimeout((function() {
              var cb = "cache-bust=" + Date.now();
              sb[Wb] = cb, kb[Wb] = ab - 1, bb(__webpack_require__.e(Wb))
            }), function(bb) {
              return 500 * Math.pow(2, bb)
            }(cb))
          }))
        }))
      }
    }
  })();
  const bb = [15, 15, 15],
    cb = {
      top: 1,
      left: .85,
      right: .7
    };

  function sb(cb, sb, kb) {
    let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => 0 !== cb[4 * bb + 3];
    const ab = (bb, cb) => bb < 0 || cb < 0 || bb >= sb || cb >= sb || !Wb(cb * sb + bb),
      Tb = [];
    for (let bb = 0; bb < sb; bb++)
      for (let cb = 0; cb < sb; cb++)
        if (!ab(cb, bb)) bb: for (let Wb = -kb; Wb <= kb; Wb++) {
          const Ub = kb - Math.abs(Wb);
          for (let kb = -Ub; kb <= Ub; kb++)
            if (ab(cb + kb, bb + Wb)) {
              Tb.push(bb * sb + cb);
              break bb
            }
        }
    for (const Ub of Tb) cb.set(bb, 4 * Ub), cb[4 * Ub + 3] = 255
  }
  const kb = Math.SQRT1_2,
    Wb = Math.sqrt(3) / 2,
    ab = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Tb = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Ub = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Ib = 1e-6;

  function Hb(bb, cb, sb, kb) {
    let {
      origin: Wb,
      across: ab,
      down: Tb,
      texture: Ub,
      rect: [Hb, fb, Mb, Xb],
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
        if (eb < -Ib || eb > 1 + Ib || Cb < -Ib || Cb > 1 + Ib) continue;
        const Nb = Lb * sb + kb;
        cb[Nb] = 1;
        const Vb = Hb + Math.min(Math.max(eb, 0), 1) * (Mb - Hb),
          ub = fb + Math.min(Math.max(Cb, 0), 1) * (Xb - fb),
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

  function fb(bb, cb, sb) {
    const kb = bb.get(cb);
    if (void 0 === kb) throw new Error(`no ${sb} was sent for ${cb.slice(0,100)}`);
    return kb
  }
  const Mb = {
      pixelsOf(bb) {
        const cb = new OffscreenCanvas(bb.width, bb.height),
          sb = cb.getContext("2d");
        if (!sb) throw new Error("no 2D context");
        return sb.drawImage(bb, 0, 0), bb.close(), {
          width: cb.width,
          height: cb.height,
          pixels: sb.getImageData(0, 0, cb.width, cb.height).data
        }
      },
      async encode(bb, cb) {
        const sb = new OffscreenCanvas(cb, cb),
          kb = sb.getContext("2d");
        if (!kb) throw new Error("no 2D context");
        kb.putImageData(new ImageData(bb, cb, cb), 0, 0);
        const Wb = await sb.convertToBlob();
        return new Promise(((bb, cb) => {
          const sb = new FileReader;
          sb.onload = () => {
            bb(sb.result)
          }, sb.onerror = () => {
            var bb;
            cb(null !== (bb = sb.error) && void 0 !== bb ? bb : new Error("the icon did not encode"))
          }, sb.readAsDataURL(Wb)
        }))
      }
    },
    Xb = globalThis.WorkerGlobalScope;
  void 0 !== Xb && globalThis instanceof Xb && function(bb, Ib) {
    const Mb = new Map,
      Xb = new Map,
      nb = (cb, sb, kb) => {
        (async () => {
          try {
            bb.postMessage({
              type: "drawn",
              id: cb,
              url: await Ib.encode(kb(), sb)
            })
          } catch (Wb) {
            bb.postMessage({
              type: "failed",
              message: String(Wb)
            })
          }
        })()
      };
    bb.onmessage = bb => {
      let {
        data: mb
      } = bb;
      if ("texture" === mb.type) Mb.set(mb.url, Ib.pixelsOf(mb.bitmap));
      else if ("model" === mb.type) Xb.set(mb.name, {
        geometry: mb.geometry,
        texture: Ib.pixelsOf(mb.bitmap)
      });
      else if ("draw" === mb.type) {
        const {
          id: bb,
          top: Ib,
          left: Xb,
          right: lb,
          itemType: Qb,
          size: eb,
          outlineWidth: Cb
        } = mb;
        nb(bb, eb, (() => function(bb, ab, Tb, Ub) {
          const Ib = .6 * Tb,
            fb = Ib * kb,
            Mb = Ib * kb * .5,
            Xb = Ib * Wb,
            nb = Math.max(...ab.boxes.map((bb => bb[4]))),
            mb = fb / 2 + (Tb - fb) / 2,
            lb = Mb + (Tb - Mb - Mb - nb * Xb) / 2,
            Qb = (bb, cb, sb) => ({
              x: mb + (bb - sb) * fb,
              y: lb - Mb + (bb + sb) * Mb + (nb - cb) * Xb
            }),
            eb = (bb, cb, sb, kb, Wb, Tb) => ({
              origin: bb,
              across: {
                x: cb.x - bb.x,
                y: cb.y - bb.y
              },
              down: {
                x: sb.x - bb.x,
                y: sb.y - bb.y
              },
              texture: kb,
              rect: ab.cropFaces ? Wb : [0, 0, 1, 1],
              shade: Tb
            }),
            Cb = new Uint8ClampedArray(Tb * Tb * 4),
            Nb = new Uint8Array(Tb * Tb),
            Vb = cb;
          for (const [cb, sb, kb, Wb, Lb, ub] of ab.boxes) {
            const ab = eb(Qb(Wb, Lb, ub), Qb(Wb, Lb, kb), Qb(Wb, sb, ub), bb.right, [1 - ub, 1 - Lb, 1 - kb, 1 - sb], Vb.right),
              Ub = eb(Qb(cb, Lb, ub), Qb(Wb, Lb, ub), Qb(cb, sb, ub), bb.left, [cb, 1 - Lb, Wb, 1 - sb], Vb.left),
              Ib = eb(Qb(cb, Lb, kb), Qb(Wb, Lb, kb), Qb(cb, Lb, ub), bb.top, [cb, kb, Wb, ub], Vb.top);
            for (const bb of [ab, Ub, Ib]) Hb(Cb, Nb, Tb, bb)
          }
          return sb(Cb, Tb, Ub, (bb => 1 === Nb[bb])), Cb
        }({
          top: fb(Mb, Ib, "texture"),
          left: fb(Mb, Xb, "texture"),
          right: fb(Mb, lb, "texture")
        }, function(bb) {
          return "SlabBlock" === bb ? Tb : "StairsBlock" === bb ? Ub : ab
        }(Qb), eb, Cb)))
      } else {
        const {
          id: bb,
          name: cb,
          size: kb,
          outlineWidth: Wb
        } = mb;
        nb(bb, kb, (() => {
          const {
            geometry: bb,
            texture: ab
          } = fb(Xb, cb, "model");
          return function(bb, cb, kb, Wb) {
            const {
              vertices: ab,
              uvs: Tb,
              indices: Ub,
              shades: Ib
            } = bb, Hb = .03125 * kb, fb = kb - 2 * Hb, Mb = new Float32Array(ab.length);
            for (let sb = 0; sb < ab.length; sb += 3) Mb[sb] = Hb + ab[sb] * fb, Mb[sb + 1] = Hb + ab[sb + 1] * fb, Mb[sb + 2] = ab[sb + 2];
            const Xb = new Float32Array(kb * kb).fill(-1 / 0),
              nb = new Uint8ClampedArray(kb * kb * 4),
              mb = 255 * bb.alphaCutoff;
            for (let sb = 0; sb < Ub.length; sb += 3) {
              const [bb, Wb, ab] = [Ub[sb], Ub[sb + 1], Ub[sb + 2]], [Hb, fb, lb] = [3 * bb, 3 * Wb, 3 * ab], [Qb, eb, Cb, Nb, Vb, Lb] = [Mb[Hb], Mb[Hb + 1], Mb[fb], Mb[fb + 1], Mb[lb], Mb[lb + 1]], ub = (Cb - Qb) * (Lb - eb) - (Vb - Qb) * (Nb - eb);
              if (Math.abs(ub) < 1e-9) continue;
              const Yb = Ib[sb / 3],
                [hb, Jb, gb, Bb, tb, yb] = [Tb[2 * bb], Tb[2 * bb + 1], Tb[2 * Wb], Tb[2 * Wb + 1], Tb[2 * ab], Tb[2 * ab + 1]],
                Pb = Math.max(0, Math.floor(Math.min(Qb, Cb, Vb))),
                Db = Math.min(kb - 1, Math.ceil(Math.max(Qb, Cb, Vb))),
                Eb = Math.max(0, Math.floor(Math.min(eb, Nb, Lb))),
                ib = Math.min(kb - 1, Math.ceil(Math.max(eb, Nb, Lb)));
              for (let sb = Eb; sb <= ib; sb++)
                for (let bb = Pb; bb <= Db; bb++) {
                  const [Wb, ab] = [bb + .5, sb + .5], Tb = ((Wb - Qb) * (Lb - eb) - (Vb - Qb) * (ab - eb)) / ub, Ub = ((Cb - Qb) * (ab - eb) - (Wb - Qb) * (Nb - eb)) / ub, Ib = 1 - Tb - Ub;
                  if (Ib < 0 || Tb < 0 || Ub < 0) continue;
                  const Pb = Ib * Mb[Hb + 2] + Tb * Mb[fb + 2] + Ub * Mb[lb + 2],
                    Db = sb * kb + bb;
                  if (Pb <= Xb[Db]) continue;
                  const Eb = Math.max(0, Math.min(cb.width - 1, Math.floor((Ib * hb + Tb * gb + Ub * tb) * cb.width))),
                    ib = 4 * (Math.max(0, Math.min(cb.height - 1, Math.floor((Ib * Jb + Tb * Bb + Ub * yb) * cb.height))) * cb.width + Eb);
                  cb.pixels[ib + 3] < mb || (Xb[Db] = Pb, nb[4 * Db] = cb.pixels[ib] * Yb, nb[4 * Db + 1] = cb.pixels[ib + 1] * Yb, nb[4 * Db + 2] = cb.pixels[ib + 2] * Yb, nb[4 * Db + 3] = 255)
                }
            }
            return sb(nb, kb, Wb), nb
          }(bb, ab, kb, Wb)
        }))
      }
    }, bb.postMessage({
      type: "started"
    })
  }(globalThis, Mb)
})();