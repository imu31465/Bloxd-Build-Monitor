(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        TB = __webpack_require__.e,
        dB = {},
        VB = {};
      __webpack_require__.u = function(TB) {
        return BB(TB) + (dB.hasOwnProperty(TB) ? "?" + dB[TB] : "")
      }, __webpack_require__.e = function(yB) {
        return TB(yB).catch((function(TB) {
          var pB = VB.hasOwnProperty(yB) ? VB[yB] : 4;
          if (pB < 1) {
            var lB = BB(yB);
            throw TB.message = "Loading chunk " + yB + " failed after 4 retries.\n(" + lB + ")", TB.request = lB, dB[yB] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete VB[yB]
            }), 0), TB
          }
          return new Promise((function(BB) {
            var TB = 4 - pB + 1;
            setTimeout((function() {
              var TB = "cache-bust=" + Date.now();
              dB[yB] = TB, VB[yB] = pB - 1, BB(__webpack_require__.e(yB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(TB))
          }))
        }))
      }
    }
  })();
  const BB = [15, 15, 15],
    TB = {
      top: 1,
      left: .85,
      right: .7
    };

  function dB(TB, dB, VB) {
    let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => 0 !== TB[4 * BB + 3];
    const pB = (BB, TB) => BB < 0 || TB < 0 || BB >= dB || TB >= dB || !yB(TB * dB + BB),
      lB = [];
    for (let BB = 0; BB < dB; BB++)
      for (let TB = 0; TB < dB; TB++)
        if (!pB(TB, BB)) BB: for (let yB = -VB; yB <= VB; yB++) {
          const JB = VB - Math.abs(yB);
          for (let VB = -JB; VB <= JB; VB++)
            if (pB(TB + VB, BB + yB)) {
              lB.push(BB * dB + TB);
              break BB
            }
        }
    for (const JB of lB) TB.set(BB, 4 * JB), TB[4 * JB + 3] = 255
  }
  const VB = Math.SQRT1_2,
    yB = Math.sqrt(3) / 2,
    pB = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    lB = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    JB = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const YB = 1e-6;

  function gB(BB, TB, dB, VB) {
    let {
      origin: yB,
      across: pB,
      down: lB,
      texture: JB,
      rect: [gB, oB, kB, LB],
      shade: OB
    } = VB;
    const DB = pB.x * lB.y - pB.y * lB.x;
    if (Math.abs(DB) < 1e-9) return;
    const uB = [yB.x, yB.x + pB.x, yB.x + lB.x, yB.x + pB.x + lB.x],
      HB = [yB.y, yB.y + pB.y, yB.y + lB.y, yB.y + pB.y + lB.y],
      EB = Math.max(0, Math.floor(Math.min(...uB))),
      vB = Math.min(dB - 1, Math.ceil(Math.max(...uB))),
      mB = Math.max(0, Math.floor(Math.min(...HB))),
      iB = Math.min(dB - 1, Math.ceil(Math.max(...HB)));
    for (let NB = mB; NB <= iB; NB++)
      for (let VB = EB; VB <= vB; VB++) {
        const uB = VB + .5 - yB.x,
          HB = NB + .5 - yB.y,
          EB = (uB * lB.y - HB * lB.x) / DB,
          vB = (pB.x * HB - pB.y * uB) / DB;
        if (EB < -YB || EB > 1 + YB || vB < -YB || vB > 1 + YB) continue;
        const mB = NB * dB + VB;
        TB[mB] = 1;
        const iB = gB + Math.min(Math.max(EB, 0), 1) * (kB - gB),
          tB = oB + Math.min(Math.max(vB, 0), 1) * (LB - oB),
          fB = Math.min(JB.width - 1, Math.floor(iB * JB.width)),
          sB = 4 * (Math.min(JB.height - 1, Math.floor(tB * JB.height)) * JB.width + fB),
          MB = JB.pixels[sB + 3] / 255;
        if (0 === MB) continue;
        const zB = 4 * mB,
          wB = BB[zB + 3] / 255 * (1 - MB),
          UB = MB + wB;
        for (let TB = 0; TB < 3; TB++) BB[zB + TB] = (JB.pixels[sB + TB] * OB * MB + BB[zB + TB] * wB) / UB;
        BB[zB + 3] = 255 * UB
      }
  }

  function oB(BB, TB, dB) {
    const VB = BB.get(TB);
    if (void 0 === VB) throw new Error(`no ${dB} was sent for ${TB.slice(0,100)}`);
    return VB
  }
  const kB = {
      pixelsOf(BB) {
        const TB = new OffscreenCanvas(BB.width, BB.height),
          dB = TB.getContext("2d");
        if (!dB) throw new Error("no 2D context");
        return dB.drawImage(BB, 0, 0), BB.close(), {
          width: TB.width,
          height: TB.height,
          pixels: dB.getImageData(0, 0, TB.width, TB.height).data
        }
      },
      async encode(BB, TB) {
        const dB = new OffscreenCanvas(TB, TB),
          VB = dB.getContext("2d");
        if (!VB) throw new Error("no 2D context");
        VB.putImageData(new ImageData(BB, TB, TB), 0, 0);
        const yB = await dB.convertToBlob();
        return new Promise(((BB, TB) => {
          const dB = new FileReader;
          dB.onload = () => {
            BB(dB.result)
          }, dB.onerror = () => {
            var BB;
            TB(null !== (BB = dB.error) && void 0 !== BB ? BB : new Error("the icon did not encode"))
          }, dB.readAsDataURL(yB)
        }))
      }
    },
    LB = globalThis.WorkerGlobalScope;
  void 0 !== LB && globalThis instanceof LB && function(BB, YB) {
    const kB = new Map,
      LB = new Map,
      OB = (TB, dB, VB) => {
        (async () => {
          try {
            BB.postMessage({
              type: "drawn",
              id: TB,
              url: await YB.encode(VB(), dB)
            })
          } catch (yB) {
            BB.postMessage({
              type: "failed",
              message: String(yB)
            })
          }
        })()
      };
    BB.onmessage = BB => {
      let {
        data: DB
      } = BB;
      if ("texture" === DB.type) kB.set(DB.url, YB.pixelsOf(DB.bitmap));
      else if ("model" === DB.type) LB.set(DB.name, {
        geometry: DB.geometry,
        texture: YB.pixelsOf(DB.bitmap)
      });
      else if ("draw" === DB.type) {
        const {
          id: BB,
          top: YB,
          left: LB,
          right: uB,
          itemType: HB,
          size: EB,
          outlineWidth: vB
        } = DB;
        OB(BB, EB, (() => function(BB, pB, lB, JB) {
          const YB = .6 * lB,
            oB = YB * VB,
            kB = YB * VB * .5,
            LB = YB * yB,
            OB = Math.max(...pB.boxes.map((BB => BB[4]))),
            DB = oB / 2 + (lB - oB) / 2,
            uB = kB + (lB - kB - kB - OB * LB) / 2,
            HB = (BB, TB, dB) => ({
              x: DB + (BB - dB) * oB,
              y: uB - kB + (BB + dB) * kB + (OB - TB) * LB
            }),
            EB = (BB, TB, dB, VB, yB, lB) => ({
              origin: BB,
              across: {
                x: TB.x - BB.x,
                y: TB.y - BB.y
              },
              down: {
                x: dB.x - BB.x,
                y: dB.y - BB.y
              },
              texture: VB,
              rect: pB.cropFaces ? yB : [0, 0, 1, 1],
              shade: lB
            }),
            vB = new Uint8ClampedArray(lB * lB * 4),
            mB = new Uint8Array(lB * lB),
            iB = TB;
          for (const [TB, dB, VB, yB, NB, tB] of pB.boxes) {
            const pB = EB(HB(yB, NB, tB), HB(yB, NB, VB), HB(yB, dB, tB), BB.right, [1 - tB, 1 - NB, 1 - VB, 1 - dB], iB.right),
              JB = EB(HB(TB, NB, tB), HB(yB, NB, tB), HB(TB, dB, tB), BB.left, [TB, 1 - NB, yB, 1 - dB], iB.left),
              YB = EB(HB(TB, NB, VB), HB(yB, NB, VB), HB(TB, NB, tB), BB.top, [TB, VB, yB, tB], iB.top);
            for (const BB of [pB, JB, YB]) gB(vB, mB, lB, BB)
          }
          return dB(vB, lB, JB, (BB => 1 === mB[BB])), vB
        }({
          top: oB(kB, YB, "texture"),
          left: oB(kB, LB, "texture"),
          right: oB(kB, uB, "texture")
        }, function(BB) {
          return "SlabBlock" === BB ? lB : "StairsBlock" === BB ? JB : pB
        }(HB), EB, vB)))
      } else {
        const {
          id: BB,
          name: TB,
          size: VB,
          outlineWidth: yB
        } = DB;
        OB(BB, VB, (() => {
          const {
            geometry: BB,
            texture: pB
          } = oB(LB, TB, "model");
          return function(BB, TB, VB, yB) {
            const {
              vertices: pB,
              uvs: lB,
              indices: JB,
              shades: YB
            } = BB, gB = .03125 * VB, oB = VB - 2 * gB, kB = new Float32Array(pB.length);
            for (let dB = 0; dB < pB.length; dB += 3) kB[dB] = gB + pB[dB] * oB, kB[dB + 1] = gB + pB[dB + 1] * oB, kB[dB + 2] = pB[dB + 2];
            const LB = new Float32Array(VB * VB).fill(-1 / 0),
              OB = new Uint8ClampedArray(VB * VB * 4),
              DB = 255 * BB.alphaCutoff;
            for (let dB = 0; dB < JB.length; dB += 3) {
              const [BB, yB, pB] = [JB[dB], JB[dB + 1], JB[dB + 2]], [gB, oB, uB] = [3 * BB, 3 * yB, 3 * pB], [HB, EB, vB, mB, iB, NB] = [kB[gB], kB[gB + 1], kB[oB], kB[oB + 1], kB[uB], kB[uB + 1]], tB = (vB - HB) * (NB - EB) - (iB - HB) * (mB - EB);
              if (Math.abs(tB) < 1e-9) continue;
              const fB = YB[dB / 3],
                [sB, MB, zB, wB, UB, FB] = [lB[2 * BB], lB[2 * BB + 1], lB[2 * yB], lB[2 * yB + 1], lB[2 * pB], lB[2 * pB + 1]],
                KB = Math.max(0, Math.floor(Math.min(HB, vB, iB))),
                rB = Math.min(VB - 1, Math.ceil(Math.max(HB, vB, iB))),
                IB = Math.max(0, Math.floor(Math.min(EB, mB, NB))),
                cB = Math.min(VB - 1, Math.ceil(Math.max(EB, mB, NB)));
              for (let dB = IB; dB <= cB; dB++)
                for (let BB = KB; BB <= rB; BB++) {
                  const [yB, pB] = [BB + .5, dB + .5], lB = ((yB - HB) * (NB - EB) - (iB - HB) * (pB - EB)) / tB, JB = ((vB - HB) * (pB - EB) - (yB - HB) * (mB - EB)) / tB, YB = 1 - lB - JB;
                  if (YB < 0 || lB < 0 || JB < 0) continue;
                  const KB = YB * kB[gB + 2] + lB * kB[oB + 2] + JB * kB[uB + 2],
                    rB = dB * VB + BB;
                  if (KB <= LB[rB]) continue;
                  const IB = Math.max(0, Math.min(TB.width - 1, Math.floor((YB * sB + lB * zB + JB * UB) * TB.width))),
                    cB = 4 * (Math.max(0, Math.min(TB.height - 1, Math.floor((YB * MB + lB * wB + JB * FB) * TB.height))) * TB.width + IB);
                  TB.pixels[cB + 3] < DB || (LB[rB] = KB, OB[4 * rB] = TB.pixels[cB] * fB, OB[4 * rB + 1] = TB.pixels[cB + 1] * fB, OB[4 * rB + 2] = TB.pixels[cB + 2] * fB, OB[4 * rB + 3] = 255)
                }
            }
            return dB(OB, VB, yB), OB
          }(BB, pB, VB, yB)
        }))
      }
    }, BB.postMessage({
      type: "started"
    })
  }(globalThis, kB)
})();