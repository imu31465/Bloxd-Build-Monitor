(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var qq = __webpack_require__.u,
        Eq = __webpack_require__.e,
        gq = {},
        Yq = {};
      __webpack_require__.u = function(Eq) {
        return qq(Eq) + (gq.hasOwnProperty(Eq) ? "?" + gq[Eq] : "")
      }, __webpack_require__.e = function(lq) {
        return Eq(lq).catch((function(Eq) {
          var Oq = Yq.hasOwnProperty(lq) ? Yq[lq] : 4;
          if (Oq < 1) {
            var mq = qq(lq);
            throw Eq.message = "Loading chunk " + lq + " failed after 4 retries.\n(" + mq + ")", Eq.request = mq, gq[lq] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Yq[lq]
            }), 0), Eq
          }
          return new Promise((function(qq) {
            var Eq = 4 - Oq + 1;
            setTimeout((function() {
              var Eq = "cache-bust=" + Date.now();
              gq[lq] = Eq, Yq[lq] = Oq - 1, qq(__webpack_require__.e(lq))
            }), function(qq) {
              return 500 * Math.pow(2, qq)
            }(Eq))
          }))
        }))
      }
    }
  })();
  const qq = [15, 15, 15],
    Eq = {
      top: 1,
      left: .85,
      right: .7
    };

  function gq(Eq, gq, Yq) {
    let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq => 0 !== Eq[4 * qq + 3];
    const Oq = (qq, Eq) => qq < 0 || Eq < 0 || qq >= gq || Eq >= gq || !lq(Eq * gq + qq),
      mq = [];
    for (let qq = 0; qq < gq; qq++)
      for (let Eq = 0; Eq < gq; Eq++)
        if (!Oq(Eq, qq)) qq: for (let lq = -Yq; lq <= Yq; lq++) {
          const xq = Yq - Math.abs(lq);
          for (let Yq = -xq; Yq <= xq; Yq++)
            if (Oq(Eq + Yq, qq + lq)) {
              mq.push(qq * gq + Eq);
              break qq
            }
        }
    for (const xq of mq) Eq.set(qq, 4 * xq), Eq[4 * xq + 3] = 255
  }
  const Yq = Math.SQRT1_2,
    lq = Math.sqrt(3) / 2,
    Oq = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    mq = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    xq = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Aq = 1e-6;

  function cq(qq, Eq, gq, Yq) {
    let {
      origin: lq,
      across: Oq,
      down: mq,
      texture: xq,
      rect: [cq, uq, Bq, Wq],
      shade: Nq
    } = Yq;
    const aq = Oq.x * mq.y - Oq.y * mq.x;
    if (Math.abs(aq) < 1e-9) return;
    const Vq = [lq.x, lq.x + Oq.x, lq.x + mq.x, lq.x + Oq.x + mq.x],
      dq = [lq.y, lq.y + Oq.y, lq.y + mq.y, lq.y + Oq.y + mq.y],
      jq = Math.max(0, Math.floor(Math.min(...Vq))),
      Hq = Math.min(gq - 1, Math.ceil(Math.max(...Vq))),
      oq = Math.max(0, Math.floor(Math.min(...dq))),
      Pq = Math.min(gq - 1, Math.ceil(Math.max(...dq)));
    for (let Qq = oq; Qq <= Pq; Qq++)
      for (let Yq = jq; Yq <= Hq; Yq++) {
        const Vq = Yq + .5 - lq.x,
          dq = Qq + .5 - lq.y,
          jq = (Vq * mq.y - dq * mq.x) / aq,
          Hq = (Oq.x * dq - Oq.y * Vq) / aq;
        if (jq < -Aq || jq > 1 + Aq || Hq < -Aq || Hq > 1 + Aq) continue;
        const oq = Qq * gq + Yq;
        Eq[oq] = 1;
        const Pq = cq + Math.min(Math.max(jq, 0), 1) * (Bq - cq),
          yq = uq + Math.min(Math.max(Hq, 0), 1) * (Wq - uq),
          tq = Math.min(xq.width - 1, Math.floor(Pq * xq.width)),
          rq = 4 * (Math.min(xq.height - 1, Math.floor(yq * xq.height)) * xq.width + tq),
          vq = xq.pixels[rq + 3] / 255;
        if (0 === vq) continue;
        const hq = 4 * oq,
          nq = qq[hq + 3] / 255 * (1 - vq),
          bq = vq + nq;
        for (let Eq = 0; Eq < 3; Eq++) qq[hq + Eq] = (xq.pixels[rq + Eq] * Nq * vq + qq[hq + Eq] * nq) / bq;
        qq[hq + 3] = 255 * bq
      }
  }

  function uq(qq, Eq, gq) {
    const Yq = qq.get(Eq);
    if (void 0 === Yq) throw new Error(`no ${gq} was sent for ${Eq.slice(0,100)}`);
    return Yq
  }
  const Bq = {
      pixelsOf(qq) {
        const Eq = new OffscreenCanvas(qq.width, qq.height),
          gq = Eq.getContext("2d");
        if (!gq) throw new Error("no 2D context");
        return gq.drawImage(qq, 0, 0), qq.close(), {
          width: Eq.width,
          height: Eq.height,
          pixels: gq.getImageData(0, 0, Eq.width, Eq.height).data
        }
      },
      async encode(qq, Eq) {
        const gq = new OffscreenCanvas(Eq, Eq),
          Yq = gq.getContext("2d");
        if (!Yq) throw new Error("no 2D context");
        Yq.putImageData(new ImageData(qq, Eq, Eq), 0, 0);
        const lq = await gq.convertToBlob();
        return new Promise(((qq, Eq) => {
          const gq = new FileReader;
          gq.onload = () => {
            qq(gq.result)
          }, gq.onerror = () => {
            var qq;
            Eq(null !== (qq = gq.error) && void 0 !== qq ? qq : new Error("the icon did not encode"))
          }, gq.readAsDataURL(lq)
        }))
      }
    },
    Wq = globalThis.WorkerGlobalScope;
  void 0 !== Wq && globalThis instanceof Wq && function(qq, Aq) {
    const Bq = new Map,
      Wq = new Map,
      Nq = (Eq, gq, Yq) => {
        (async () => {
          try {
            qq.postMessage({
              type: "drawn",
              id: Eq,
              url: await Aq.encode(Yq(), gq)
            })
          } catch (lq) {
            qq.postMessage({
              type: "failed",
              message: String(lq)
            })
          }
        })()
      };
    qq.onmessage = qq => {
      let {
        data: aq
      } = qq;
      if ("texture" === aq.type) Bq.set(aq.url, Aq.pixelsOf(aq.bitmap));
      else if ("model" === aq.type) Wq.set(aq.name, {
        geometry: aq.geometry,
        texture: Aq.pixelsOf(aq.bitmap)
      });
      else if ("draw" === aq.type) {
        const {
          id: qq,
          top: Aq,
          left: Wq,
          right: Vq,
          itemType: dq,
          size: jq,
          outlineWidth: Hq
        } = aq;
        Nq(qq, jq, (() => function(qq, Oq, mq, xq) {
          const Aq = .6 * mq,
            uq = Aq * Yq,
            Bq = Aq * Yq * .5,
            Wq = Aq * lq,
            Nq = Math.max(...Oq.boxes.map((qq => qq[4]))),
            aq = uq / 2 + (mq - uq) / 2,
            Vq = Bq + (mq - Bq - Bq - Nq * Wq) / 2,
            dq = (qq, Eq, gq) => ({
              x: aq + (qq - gq) * uq,
              y: Vq - Bq + (qq + gq) * Bq + (Nq - Eq) * Wq
            }),
            jq = (qq, Eq, gq, Yq, lq, mq) => ({
              origin: qq,
              across: {
                x: Eq.x - qq.x,
                y: Eq.y - qq.y
              },
              down: {
                x: gq.x - qq.x,
                y: gq.y - qq.y
              },
              texture: Yq,
              rect: Oq.cropFaces ? lq : [0, 0, 1, 1],
              shade: mq
            }),
            Hq = new Uint8ClampedArray(mq * mq * 4),
            oq = new Uint8Array(mq * mq),
            Pq = Eq;
          for (const [Eq, gq, Yq, lq, Qq, yq] of Oq.boxes) {
            const Oq = jq(dq(lq, Qq, yq), dq(lq, Qq, Yq), dq(lq, gq, yq), qq.right, [1 - yq, 1 - Qq, 1 - Yq, 1 - gq], Pq.right),
              xq = jq(dq(Eq, Qq, yq), dq(lq, Qq, yq), dq(Eq, gq, yq), qq.left, [Eq, 1 - Qq, lq, 1 - gq], Pq.left),
              Aq = jq(dq(Eq, Qq, Yq), dq(lq, Qq, Yq), dq(Eq, Qq, yq), qq.top, [Eq, Yq, lq, yq], Pq.top);
            for (const qq of [Oq, xq, Aq]) cq(Hq, oq, mq, qq)
          }
          return gq(Hq, mq, xq, (qq => 1 === oq[qq])), Hq
        }({
          top: uq(Bq, Aq, "texture"),
          left: uq(Bq, Wq, "texture"),
          right: uq(Bq, Vq, "texture")
        }, function(qq) {
          return "SlabBlock" === qq ? mq : "StairsBlock" === qq ? xq : Oq
        }(dq), jq, Hq)))
      } else {
        const {
          id: qq,
          name: Eq,
          size: Yq,
          outlineWidth: lq
        } = aq;
        Nq(qq, Yq, (() => {
          const {
            geometry: qq,
            texture: Oq
          } = uq(Wq, Eq, "model");
          return function(qq, Eq, Yq, lq) {
            const {
              vertices: Oq,
              uvs: mq,
              indices: xq,
              shades: Aq
            } = qq, cq = .03125 * Yq, uq = Yq - 2 * cq, Bq = new Float32Array(Oq.length);
            for (let gq = 0; gq < Oq.length; gq += 3) Bq[gq] = cq + Oq[gq] * uq, Bq[gq + 1] = cq + Oq[gq + 1] * uq, Bq[gq + 2] = Oq[gq + 2];
            const Wq = new Float32Array(Yq * Yq).fill(-1 / 0),
              Nq = new Uint8ClampedArray(Yq * Yq * 4),
              aq = 255 * qq.alphaCutoff;
            for (let gq = 0; gq < xq.length; gq += 3) {
              const [qq, lq, Oq] = [xq[gq], xq[gq + 1], xq[gq + 2]], [cq, uq, Vq] = [3 * qq, 3 * lq, 3 * Oq], [dq, jq, Hq, oq, Pq, Qq] = [Bq[cq], Bq[cq + 1], Bq[uq], Bq[uq + 1], Bq[Vq], Bq[Vq + 1]], yq = (Hq - dq) * (Qq - jq) - (Pq - dq) * (oq - jq);
              if (Math.abs(yq) < 1e-9) continue;
              const tq = Aq[gq / 3],
                [rq, vq, hq, nq, bq, iq] = [mq[2 * qq], mq[2 * qq + 1], mq[2 * lq], mq[2 * lq + 1], mq[2 * Oq], mq[2 * Oq + 1]],
                Zq = Math.max(0, Math.floor(Math.min(dq, Hq, Pq))),
                fq = Math.min(Yq - 1, Math.ceil(Math.max(dq, Hq, Pq))),
                Mq = Math.max(0, Math.floor(Math.min(jq, oq, Qq))),
                Tq = Math.min(Yq - 1, Math.ceil(Math.max(jq, oq, Qq)));
              for (let gq = Mq; gq <= Tq; gq++)
                for (let qq = Zq; qq <= fq; qq++) {
                  const [lq, Oq] = [qq + .5, gq + .5], mq = ((lq - dq) * (Qq - jq) - (Pq - dq) * (Oq - jq)) / yq, xq = ((Hq - dq) * (Oq - jq) - (lq - dq) * (oq - jq)) / yq, Aq = 1 - mq - xq;
                  if (Aq < 0 || mq < 0 || xq < 0) continue;
                  const Zq = Aq * Bq[cq + 2] + mq * Bq[uq + 2] + xq * Bq[Vq + 2],
                    fq = gq * Yq + qq;
                  if (Zq <= Wq[fq]) continue;
                  const Mq = Math.max(0, Math.min(Eq.width - 1, Math.floor((Aq * rq + mq * hq + xq * bq) * Eq.width))),
                    Tq = 4 * (Math.max(0, Math.min(Eq.height - 1, Math.floor((Aq * vq + mq * nq + xq * iq) * Eq.height))) * Eq.width + Mq);
                  Eq.pixels[Tq + 3] < aq || (Wq[fq] = Zq, Nq[4 * fq] = Eq.pixels[Tq] * tq, Nq[4 * fq + 1] = Eq.pixels[Tq + 1] * tq, Nq[4 * fq + 2] = Eq.pixels[Tq + 2] * tq, Nq[4 * fq + 3] = 255)
                }
            }
            return gq(Nq, Yq, lq), Nq
          }(qq, Oq, Yq, lq)
        }))
      }
    }, qq.postMessage({
      type: "started"
    })
  }(globalThis, Bq)
})();