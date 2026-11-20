(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var bb = __webpack_require__.u,
        ab = __webpack_require__.e,
        Ub = {},
        Ab = {};
      __webpack_require__.u = function(ab) {
        return bb(ab) + (Ub.hasOwnProperty(ab) ? "?" + Ub[ab] : "")
      }, __webpack_require__.e = function(Mb) {
        return ab(Mb).catch((function(ab) {
          var Tb = Ab.hasOwnProperty(Mb) ? Ab[Mb] : 4;
          if (Tb < 1) {
            var Eb = bb(Mb);
            throw ab.message = "Loading chunk " + Mb + " failed after 4 retries.\n(" + Eb + ")", ab.request = Eb, Ub[Mb] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Ab[Mb]
            }), 0), ab
          }
          return new Promise((function(bb) {
            var ab = 4 - Tb + 1;
            setTimeout((function() {
              var ab = "cache-bust=" + Date.now();
              Ub[Mb] = ab, Ab[Mb] = Tb - 1, bb(__webpack_require__.e(Mb))
            }), function(bb) {
              return 500 * Math.pow(2, bb)
            }(ab))
          }))
        }))
      }
    }
  })();
  const bb = [15, 15, 15],
    ab = {
      top: 1,
      left: .85,
      right: .7
    };

  function Ub(ab, Ub, Ab) {
    let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => 0 !== ab[4 * bb + 3];
    const Tb = (bb, ab) => bb < 0 || ab < 0 || bb >= Ub || ab >= Ub || !Mb(ab * Ub + bb),
      Eb = [];
    for (let bb = 0; bb < Ub; bb++)
      for (let ab = 0; ab < Ub; ab++)
        if (!Tb(ab, bb)) bb: for (let Mb = -Ab; Mb <= Ab; Mb++) {
          const Yb = Ab - Math.abs(Mb);
          for (let Ab = -Yb; Ab <= Yb; Ab++)
            if (Tb(ab + Ab, bb + Mb)) {
              Eb.push(bb * Ub + ab);
              break bb
            }
        }
    for (const Yb of Eb) ab.set(bb, 4 * Yb), ab[4 * Yb + 3] = 255
  }
  const Ab = Math.SQRT1_2,
    Mb = Math.sqrt(3) / 2,
    Tb = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Eb = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Yb = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Bb = 1e-6;

  function eb(bb, ab, Ub, Ab) {
    let {
      origin: Mb,
      across: Tb,
      down: Eb,
      texture: Yb,
      rect: [eb, vb, Lb, Pb],
      shade: Xb
    } = Ab;
    const jb = Tb.x * Eb.y - Tb.y * Eb.x;
    if (Math.abs(jb) < 1e-9) return;
    const Rb = [Mb.x, Mb.x + Tb.x, Mb.x + Eb.x, Mb.x + Tb.x + Eb.x],
      kb = [Mb.y, Mb.y + Tb.y, Mb.y + Eb.y, Mb.y + Tb.y + Eb.y],
      yb = Math.max(0, Math.floor(Math.min(...Rb))),
      Zb = Math.min(Ub - 1, Math.ceil(Math.max(...Rb))),
      Db = Math.max(0, Math.floor(Math.min(...kb))),
      zb = Math.min(Ub - 1, Math.ceil(Math.max(...kb)));
    for (let xb = Db; xb <= zb; xb++)
      for (let Ab = yb; Ab <= Zb; Ab++) {
        const Rb = Ab + .5 - Mb.x,
          kb = xb + .5 - Mb.y,
          yb = (Rb * Eb.y - kb * Eb.x) / jb,
          Zb = (Tb.x * kb - Tb.y * Rb) / jb;
        if (yb < -Bb || yb > 1 + Bb || Zb < -Bb || Zb > 1 + Bb) continue;
        const Db = xb * Ub + Ab;
        ab[Db] = 1;
        const zb = eb + Math.min(Math.max(yb, 0), 1) * (Lb - eb),
          ib = vb + Math.min(Math.max(Zb, 0), 1) * (Pb - vb),
          fb = Math.min(Yb.width - 1, Math.floor(zb * Yb.width)),
          mb = 4 * (Math.min(Yb.height - 1, Math.floor(ib * Yb.height)) * Yb.width + fb),
          pb = Yb.pixels[mb + 3] / 255;
        if (0 === pb) continue;
        const Nb = 4 * Db,
          Wb = bb[Nb + 3] / 255 * (1 - pb),
          Hb = pb + Wb;
        for (let ab = 0; ab < 3; ab++) bb[Nb + ab] = (Yb.pixels[mb + ab] * Xb * pb + bb[Nb + ab] * Wb) / Hb;
        bb[Nb + 3] = 255 * Hb
      }
  }

  function vb(bb, ab, Ub) {
    const Ab = bb.get(ab);
    if (void 0 === Ab) throw new Error(`no ${Ub} was sent for ${ab.slice(0,100)}`);
    return Ab
  }
  const Lb = {
      pixelsOf(bb) {
        const ab = new OffscreenCanvas(bb.width, bb.height),
          Ub = ab.getContext("2d");
        if (!Ub) throw new Error("no 2D context");
        return Ub.drawImage(bb, 0, 0), bb.close(), {
          width: ab.width,
          height: ab.height,
          pixels: Ub.getImageData(0, 0, ab.width, ab.height).data
        }
      },
      async encode(bb, ab) {
        const Ub = new OffscreenCanvas(ab, ab),
          Ab = Ub.getContext("2d");
        if (!Ab) throw new Error("no 2D context");
        Ab.putImageData(new ImageData(bb, ab, ab), 0, 0);
        const Mb = await Ub.convertToBlob();
        return new Promise(((bb, ab) => {
          const Ub = new FileReader;
          Ub.onload = () => {
            bb(Ub.result)
          }, Ub.onerror = () => {
            var bb;
            ab(null !== (bb = Ub.error) && void 0 !== bb ? bb : new Error("the icon did not encode"))
          }, Ub.readAsDataURL(Mb)
        }))
      }
    },
    Pb = globalThis.WorkerGlobalScope;
  void 0 !== Pb && globalThis instanceof Pb && function(bb, Bb) {
    const Lb = new Map,
      Pb = new Map,
      Xb = (ab, Ub, Ab) => {
        (async () => {
          try {
            bb.postMessage({
              type: "drawn",
              id: ab,
              url: await Bb.encode(Ab(), Ub)
            })
          } catch (Mb) {
            bb.postMessage({
              type: "failed",
              message: String(Mb)
            })
          }
        })()
      };
    bb.onmessage = bb => {
      let {
        data: jb
      } = bb;
      if ("texture" === jb.type) Lb.set(jb.url, Bb.pixelsOf(jb.bitmap));
      else if ("model" === jb.type) Pb.set(jb.name, {
        geometry: jb.geometry,
        texture: Bb.pixelsOf(jb.bitmap)
      });
      else if ("draw" === jb.type) {
        const {
          id: bb,
          top: Bb,
          left: Pb,
          right: Rb,
          itemType: kb,
          size: yb,
          outlineWidth: Zb
        } = jb;
        Xb(bb, yb, (() => function(bb, Tb, Eb, Yb) {
          const Bb = .6 * Eb,
            vb = Bb * Ab,
            Lb = Bb * Ab * .5,
            Pb = Bb * Mb,
            Xb = Math.max(...Tb.boxes.map((bb => bb[4]))),
            jb = vb / 2 + (Eb - vb) / 2,
            Rb = Lb + (Eb - Lb - Lb - Xb * Pb) / 2,
            kb = (bb, ab, Ub) => ({
              x: jb + (bb - Ub) * vb,
              y: Rb - Lb + (bb + Ub) * Lb + (Xb - ab) * Pb
            }),
            yb = (bb, ab, Ub, Ab, Mb, Eb) => ({
              origin: bb,
              across: {
                x: ab.x - bb.x,
                y: ab.y - bb.y
              },
              down: {
                x: Ub.x - bb.x,
                y: Ub.y - bb.y
              },
              texture: Ab,
              rect: Tb.cropFaces ? Mb : [0, 0, 1, 1],
              shade: Eb
            }),
            Zb = new Uint8ClampedArray(Eb * Eb * 4),
            Db = new Uint8Array(Eb * Eb),
            zb = ab;
          for (const [ab, Ub, Ab, Mb, xb, ib] of Tb.boxes) {
            const Tb = yb(kb(Mb, xb, ib), kb(Mb, xb, Ab), kb(Mb, Ub, ib), bb.right, [1 - ib, 1 - xb, 1 - Ab, 1 - Ub], zb.right),
              Yb = yb(kb(ab, xb, ib), kb(Mb, xb, ib), kb(ab, Ub, ib), bb.left, [ab, 1 - xb, Mb, 1 - Ub], zb.left),
              Bb = yb(kb(ab, xb, Ab), kb(Mb, xb, Ab), kb(ab, xb, ib), bb.top, [ab, Ab, Mb, ib], zb.top);
            for (const bb of [Tb, Yb, Bb]) eb(Zb, Db, Eb, bb)
          }
          return Ub(Zb, Eb, Yb, (bb => 1 === Db[bb])), Zb
        }({
          top: vb(Lb, Bb, "texture"),
          left: vb(Lb, Pb, "texture"),
          right: vb(Lb, Rb, "texture")
        }, function(bb) {
          return "SlabBlock" === bb ? Eb : "StairsBlock" === bb ? Yb : Tb
        }(kb), yb, Zb)))
      } else {
        const {
          id: bb,
          name: ab,
          size: Ab,
          outlineWidth: Mb
        } = jb;
        Xb(bb, Ab, (() => {
          const {
            geometry: bb,
            texture: Tb
          } = vb(Pb, ab, "model");
          return function(bb, ab, Ab, Mb) {
            const {
              vertices: Tb,
              uvs: Eb,
              indices: Yb,
              shades: Bb
            } = bb, eb = .03125 * Ab, vb = Ab - 2 * eb, Lb = new Float32Array(Tb.length);
            for (let Ub = 0; Ub < Tb.length; Ub += 3) Lb[Ub] = eb + Tb[Ub] * vb, Lb[Ub + 1] = eb + Tb[Ub + 1] * vb, Lb[Ub + 2] = Tb[Ub + 2];
            const Pb = new Float32Array(Ab * Ab).fill(-1 / 0),
              Xb = new Uint8ClampedArray(Ab * Ab * 4),
              jb = 255 * bb.alphaCutoff;
            for (let Ub = 0; Ub < Yb.length; Ub += 3) {
              const [bb, Mb, Tb] = [Yb[Ub], Yb[Ub + 1], Yb[Ub + 2]], [eb, vb, Rb] = [3 * bb, 3 * Mb, 3 * Tb], [kb, yb, Zb, Db, zb, xb] = [Lb[eb], Lb[eb + 1], Lb[vb], Lb[vb + 1], Lb[Rb], Lb[Rb + 1]], ib = (Zb - kb) * (xb - yb) - (zb - kb) * (Db - yb);
              if (Math.abs(ib) < 1e-9) continue;
              const fb = Bb[Ub / 3],
                [mb, pb, Nb, Wb, Hb, Ib] = [Eb[2 * bb], Eb[2 * bb + 1], Eb[2 * Mb], Eb[2 * Mb + 1], Eb[2 * Tb], Eb[2 * Tb + 1]],
                db = Math.max(0, Math.floor(Math.min(kb, Zb, zb))),
                Fb = Math.min(Ab - 1, Math.ceil(Math.max(kb, Zb, zb))),
                hb = Math.max(0, Math.floor(Math.min(yb, Db, xb))),
                Gb = Math.min(Ab - 1, Math.ceil(Math.max(yb, Db, xb)));
              for (let Ub = hb; Ub <= Gb; Ub++)
                for (let bb = db; bb <= Fb; bb++) {
                  const [Mb, Tb] = [bb + .5, Ub + .5], Eb = ((Mb - kb) * (xb - yb) - (zb - kb) * (Tb - yb)) / ib, Yb = ((Zb - kb) * (Tb - yb) - (Mb - kb) * (Db - yb)) / ib, Bb = 1 - Eb - Yb;
                  if (Bb < 0 || Eb < 0 || Yb < 0) continue;
                  const db = Bb * Lb[eb + 2] + Eb * Lb[vb + 2] + Yb * Lb[Rb + 2],
                    Fb = Ub * Ab + bb;
                  if (db <= Pb[Fb]) continue;
                  const hb = Math.max(0, Math.min(ab.width - 1, Math.floor((Bb * mb + Eb * Nb + Yb * Hb) * ab.width))),
                    Gb = 4 * (Math.max(0, Math.min(ab.height - 1, Math.floor((Bb * pb + Eb * Wb + Yb * Ib) * ab.height))) * ab.width + hb);
                  ab.pixels[Gb + 3] < jb || (Pb[Fb] = db, Xb[4 * Fb] = ab.pixels[Gb] * fb, Xb[4 * Fb + 1] = ab.pixels[Gb + 1] * fb, Xb[4 * Fb + 2] = ab.pixels[Gb + 2] * fb, Xb[4 * Fb + 3] = 255)
                }
            }
            return Ub(Xb, Ab, Mb), Xb
          }(bb, Tb, Ab, Mb)
        }))
      }
    }, bb.postMessage({
      type: "started"
    })
  }(globalThis, Lb)
})();