(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var bb = __webpack_require__.u,
        ub = __webpack_require__.e,
        hb = {},
        Bb = {};
      __webpack_require__.u = function(ub) {
        return bb(ub) + (hb.hasOwnProperty(ub) ? "?" + hb[ub] : "")
      }, __webpack_require__.e = function(Ob) {
        return ub(Ob).catch((function(ub) {
          var Gb = Bb.hasOwnProperty(Ob) ? Bb[Ob] : 4;
          if (Gb < 1) {
            var Ub = bb(Ob);
            throw ub.message = "Loading chunk " + Ob + " failed after 4 retries.\n(" + Ub + ")", ub.request = Ub, hb[Ob] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Bb[Ob]
            }), 0), ub
          }
          return new Promise((function(bb) {
            var ub = 4 - Gb + 1;
            setTimeout((function() {
              var ub = "cache-bust=" + Date.now();
              hb[Ob] = ub, Bb[Ob] = Gb - 1, bb(__webpack_require__.e(Ob))
            }), function(bb) {
              return 500 * Math.pow(2, bb)
            }(ub))
          }))
        }))
      }
    }
  })();
  const bb = [15, 15, 15],
    ub = {
      top: 1,
      left: .85,
      right: .7
    };

  function hb(ub, hb, Bb) {
    let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => 0 !== ub[4 * bb + 3];
    const Gb = (bb, ub) => bb < 0 || ub < 0 || bb >= hb || ub >= hb || !Ob(ub * hb + bb),
      Ub = [];
    for (let bb = 0; bb < hb; bb++)
      for (let ub = 0; ub < hb; ub++)
        if (!Gb(ub, bb)) bb: for (let Ob = -Bb; Ob <= Bb; Ob++) {
          const Lb = Bb - Math.abs(Ob);
          for (let Bb = -Lb; Bb <= Lb; Bb++)
            if (Gb(ub + Bb, bb + Ob)) {
              Ub.push(bb * hb + ub);
              break bb
            }
        }
    for (const Lb of Ub) ub.set(bb, 4 * Lb), ub[4 * Lb + 3] = 255
  }
  const Bb = Math.SQRT1_2,
    Ob = Math.sqrt(3) / 2,
    Gb = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Ub = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Lb = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Yb = 1e-6;

  function Sb(bb, ub, hb, Bb) {
    let {
      origin: Ob,
      across: Gb,
      down: Ub,
      texture: Lb,
      rect: [Sb, ab, Hb, wb],
      shade: Zb
    } = Bb;
    const Xb = Gb.x * Ub.y - Gb.y * Ub.x;
    if (Math.abs(Xb) < 1e-9) return;
    const pb = [Ob.x, Ob.x + Gb.x, Ob.x + Ub.x, Ob.x + Gb.x + Ub.x],
      ob = [Ob.y, Ob.y + Gb.y, Ob.y + Ub.y, Ob.y + Gb.y + Ub.y],
      Ab = Math.max(0, Math.floor(Math.min(...pb))),
      lb = Math.min(hb - 1, Math.ceil(Math.max(...pb))),
      Kb = Math.max(0, Math.floor(Math.min(...ob))),
      Wb = Math.min(hb - 1, Math.ceil(Math.max(...ob)));
    for (let Cb = Kb; Cb <= Wb; Cb++)
      for (let Bb = Ab; Bb <= lb; Bb++) {
        const pb = Bb + .5 - Ob.x,
          ob = Cb + .5 - Ob.y,
          Ab = (pb * Ub.y - ob * Ub.x) / Xb,
          lb = (Gb.x * ob - Gb.y * pb) / Xb;
        if (Ab < -Yb || Ab > 1 + Yb || lb < -Yb || lb > 1 + Yb) continue;
        const Kb = Cb * hb + Bb;
        ub[Kb] = 1;
        const Wb = Sb + Math.min(Math.max(Ab, 0), 1) * (Hb - Sb),
          db = ab + Math.min(Math.max(lb, 0), 1) * (wb - ab),
          rb = Math.min(Lb.width - 1, Math.floor(Wb * Lb.width)),
          jb = 4 * (Math.min(Lb.height - 1, Math.floor(db * Lb.height)) * Lb.width + rb),
          nb = Lb.pixels[jb + 3] / 255;
        if (0 === nb) continue;
        const Db = 4 * Kb,
          xb = bb[Db + 3] / 255 * (1 - nb),
          zb = nb + xb;
        for (let ub = 0; ub < 3; ub++) bb[Db + ub] = (Lb.pixels[jb + ub] * Zb * nb + bb[Db + ub] * xb) / zb;
        bb[Db + 3] = 255 * zb
      }
  }

  function ab(bb, ub, hb) {
    const Bb = bb.get(ub);
    if (void 0 === Bb) throw new Error(`no ${hb} was sent for ${ub.slice(0,100)}`);
    return Bb
  }
  const Hb = {
      pixelsOf(bb) {
        const ub = new OffscreenCanvas(bb.width, bb.height),
          hb = ub.getContext("2d");
        if (!hb) throw new Error("no 2D context");
        return hb.drawImage(bb, 0, 0), bb.close(), {
          width: ub.width,
          height: ub.height,
          pixels: hb.getImageData(0, 0, ub.width, ub.height).data
        }
      },
      async encode(bb, ub) {
        const hb = new OffscreenCanvas(ub, ub),
          Bb = hb.getContext("2d");
        if (!Bb) throw new Error("no 2D context");
        Bb.putImageData(new ImageData(bb, ub, ub), 0, 0);
        const Ob = await hb.convertToBlob();
        return new Promise(((bb, ub) => {
          const hb = new FileReader;
          hb.onload = () => {
            bb(hb.result)
          }, hb.onerror = () => {
            var bb;
            ub(null !== (bb = hb.error) && void 0 !== bb ? bb : new Error("the icon did not encode"))
          }, hb.readAsDataURL(Ob)
        }))
      }
    },
    wb = globalThis.WorkerGlobalScope;
  void 0 !== wb && globalThis instanceof wb && function(bb, Yb) {
    const Hb = new Map,
      wb = new Map,
      Zb = (ub, hb, Bb) => {
        (async () => {
          try {
            bb.postMessage({
              type: "drawn",
              id: ub,
              url: await Yb.encode(Bb(), hb)
            })
          } catch (Ob) {
            bb.postMessage({
              type: "failed",
              message: String(Ob)
            })
          }
        })()
      };
    bb.onmessage = bb => {
      let {
        data: Xb
      } = bb;
      if ("texture" === Xb.type) Hb.set(Xb.url, Yb.pixelsOf(Xb.bitmap));
      else if ("model" === Xb.type) wb.set(Xb.name, {
        geometry: Xb.geometry,
        texture: Yb.pixelsOf(Xb.bitmap)
      });
      else if ("draw" === Xb.type) {
        const {
          id: bb,
          top: Yb,
          left: wb,
          right: pb,
          itemType: ob,
          size: Ab,
          outlineWidth: lb
        } = Xb;
        Zb(bb, Ab, (() => function(bb, Gb, Ub, Lb) {
          const Yb = .6 * Ub,
            ab = Yb * Bb,
            Hb = Yb * Bb * .5,
            wb = Yb * Ob,
            Zb = Math.max(...Gb.boxes.map((bb => bb[4]))),
            Xb = ab / 2 + (Ub - ab) / 2,
            pb = Hb + (Ub - Hb - Hb - Zb * wb) / 2,
            ob = (bb, ub, hb) => ({
              x: Xb + (bb - hb) * ab,
              y: pb - Hb + (bb + hb) * Hb + (Zb - ub) * wb
            }),
            Ab = (bb, ub, hb, Bb, Ob, Ub) => ({
              origin: bb,
              across: {
                x: ub.x - bb.x,
                y: ub.y - bb.y
              },
              down: {
                x: hb.x - bb.x,
                y: hb.y - bb.y
              },
              texture: Bb,
              rect: Gb.cropFaces ? Ob : [0, 0, 1, 1],
              shade: Ub
            }),
            lb = new Uint8ClampedArray(Ub * Ub * 4),
            Kb = new Uint8Array(Ub * Ub),
            Wb = ub;
          for (const [ub, hb, Bb, Ob, Cb, db] of Gb.boxes) {
            const Gb = Ab(ob(Ob, Cb, db), ob(Ob, Cb, Bb), ob(Ob, hb, db), bb.right, [1 - db, 1 - Cb, 1 - Bb, 1 - hb], Wb.right),
              Lb = Ab(ob(ub, Cb, db), ob(Ob, Cb, db), ob(ub, hb, db), bb.left, [ub, 1 - Cb, Ob, 1 - hb], Wb.left),
              Yb = Ab(ob(ub, Cb, Bb), ob(Ob, Cb, Bb), ob(ub, Cb, db), bb.top, [ub, Bb, Ob, db], Wb.top);
            for (const bb of [Gb, Lb, Yb]) Sb(lb, Kb, Ub, bb)
          }
          return hb(lb, Ub, Lb, (bb => 1 === Kb[bb])), lb
        }({
          top: ab(Hb, Yb, "texture"),
          left: ab(Hb, wb, "texture"),
          right: ab(Hb, pb, "texture")
        }, function(bb) {
          return "SlabBlock" === bb ? Ub : "StairsBlock" === bb ? Lb : Gb
        }(ob), Ab, lb)))
      } else {
        const {
          id: bb,
          name: ub,
          size: Bb,
          outlineWidth: Ob
        } = Xb;
        Zb(bb, Bb, (() => {
          const {
            geometry: bb,
            texture: Gb
          } = ab(wb, ub, "model");
          return function(bb, ub, Bb, Ob) {
            const {
              vertices: Gb,
              uvs: Ub,
              indices: Lb,
              shades: Yb
            } = bb, Sb = .03125 * Bb, ab = Bb - 2 * Sb, Hb = new Float32Array(Gb.length);
            for (let hb = 0; hb < Gb.length; hb += 3) Hb[hb] = Sb + Gb[hb] * ab, Hb[hb + 1] = Sb + Gb[hb + 1] * ab, Hb[hb + 2] = Gb[hb + 2];
            const wb = new Float32Array(Bb * Bb).fill(-1 / 0),
              Zb = new Uint8ClampedArray(Bb * Bb * 4),
              Xb = 255 * bb.alphaCutoff;
            for (let hb = 0; hb < Lb.length; hb += 3) {
              const [bb, Ob, Gb] = [Lb[hb], Lb[hb + 1], Lb[hb + 2]], [Sb, ab, pb] = [3 * bb, 3 * Ob, 3 * Gb], [ob, Ab, lb, Kb, Wb, Cb] = [Hb[Sb], Hb[Sb + 1], Hb[ab], Hb[ab + 1], Hb[pb], Hb[pb + 1]], db = (lb - ob) * (Cb - Ab) - (Wb - ob) * (Kb - Ab);
              if (Math.abs(db) < 1e-9) continue;
              const rb = Yb[hb / 3],
                [jb, nb, Db, xb, zb, gb] = [Ub[2 * bb], Ub[2 * bb + 1], Ub[2 * Ob], Ub[2 * Ob + 1], Ub[2 * Gb], Ub[2 * Gb + 1]],
                ib = Math.max(0, Math.floor(Math.min(ob, lb, Wb))),
                vb = Math.min(Bb - 1, Math.ceil(Math.max(ob, lb, Wb))),
                tb = Math.max(0, Math.floor(Math.min(Ab, Kb, Cb))),
                Jb = Math.min(Bb - 1, Math.ceil(Math.max(Ab, Kb, Cb)));
              for (let hb = tb; hb <= Jb; hb++)
                for (let bb = ib; bb <= vb; bb++) {
                  const [Ob, Gb] = [bb + .5, hb + .5], Ub = ((Ob - ob) * (Cb - Ab) - (Wb - ob) * (Gb - Ab)) / db, Lb = ((lb - ob) * (Gb - Ab) - (Ob - ob) * (Kb - Ab)) / db, Yb = 1 - Ub - Lb;
                  if (Yb < 0 || Ub < 0 || Lb < 0) continue;
                  const ib = Yb * Hb[Sb + 2] + Ub * Hb[ab + 2] + Lb * Hb[pb + 2],
                    vb = hb * Bb + bb;
                  if (ib <= wb[vb]) continue;
                  const tb = Math.max(0, Math.min(ub.width - 1, Math.floor((Yb * jb + Ub * Db + Lb * zb) * ub.width))),
                    Jb = 4 * (Math.max(0, Math.min(ub.height - 1, Math.floor((Yb * nb + Ub * xb + Lb * gb) * ub.height))) * ub.width + tb);
                  ub.pixels[Jb + 3] < Xb || (wb[vb] = ib, Zb[4 * vb] = ub.pixels[Jb] * rb, Zb[4 * vb + 1] = ub.pixels[Jb + 1] * rb, Zb[4 * vb + 2] = ub.pixels[Jb + 2] * rb, Zb[4 * vb + 3] = 255)
                }
            }
            return hb(Zb, Bb, Ob), Zb
          }(bb, Gb, Bb, Ob)
        }))
      }
    }, bb.postMessage({
      type: "started"
    })
  }(globalThis, Hb)
})();