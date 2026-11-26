(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var VV = __webpack_require__.u,
        eV = __webpack_require__.e,
        xV = {},
        JV = {};
      __webpack_require__.u = function(eV) {
        return VV(eV) + (xV.hasOwnProperty(eV) ? "?" + xV[eV] : "")
      }, __webpack_require__.e = function(YV) {
        return eV(YV).catch((function(eV) {
          var UV = JV.hasOwnProperty(YV) ? JV[YV] : 4;
          if (UV < 1) {
            var yV = VV(YV);
            if (eV.message = "Loading chunk " + YV + " failed after 4 retries.\n(" + yV + ")", eV.request = yV, xV[YV] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete JV[YV]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === eV.code) {
              var pV = __webpack_require__.miniCssF(YV);
              eV.message = eV.message.replace("Loading chunk", "Loading CSS chunk").replace(yV, pV), eV.request = pV
            }
            throw eV
          }
          return new Promise((function(VV) {
            var eV = 4 - UV + 1;
            setTimeout((function() {
              var eV = "cache-bust=" + Date.now();
              xV[YV] = eV, JV[YV] = UV - 1, VV(__webpack_require__.e(YV))
            }), function(VV) {
              return 500 * Math.pow(2, VV)
            }(eV))
          }))
        }))
      }
    }
  })();
  const VV = Math.SQRT1_2,
    eV = Math.SQRT1_2 / 2,
    xV = Math.sqrt(3) / 2,
    JV = 2 * VV,
    YV = 2 * eV + xV;

  function UV(eV, xV) {
    const JV = xV > 0 ? xV + 1 : 0,
      UV = .6 * eV - xV / VV;
    return Math.max(0, Math.min(UV, (eV - 2 * JV) / YV))
  }
  const yV = [15, 15, 15],
    pV = {
      top: 1,
      left: .85,
      right: .7
    };

  function QV(VV, eV, xV, yV) {
    const {
      vertices: pV,
      uvs: QV,
      indices: nV,
      shades: wV
    } = VV, vV = function(VV, eV) {
      const xV = UV(VV, eV),
        yV = JV * xV,
        pV = YV * xV;
      return {
        left: (VV - yV) / 2,
        top: (VV - pV) / 2,
        width: yV,
        height: pV
      }
    }(xV, yV), rV = new Float32Array(pV.length);
    for (let JV = 0; JV < pV.length; JV += 3) rV[JV] = vV.left + pV[JV] * vV.width, rV[JV + 1] = vV.top + pV[JV + 1] * vV.height, rV[JV + 2] = pV[JV + 2];
    const kV = new Float32Array(xV * xV).fill(-1 / 0),
      bV = new Uint8ClampedArray(xV * xV * 4),
      EV = 255 * VV.alphaCutoff;
    for (let JV = 0; JV < nV.length; JV += 3) {
      const [VV, YV, UV] = [nV[JV], nV[JV + 1], nV[JV + 2]], [yV, pV, ZV] = [3 * VV, 3 * YV, 3 * UV], [vV, BV, jV, qV, tV, FV] = [rV[yV], rV[yV + 1], rV[pV], rV[pV + 1], rV[ZV], rV[ZV + 1]], TV = (jV - vV) * (FV - BV) - (tV - vV) * (qV - BV);
      if (Math.abs(TV) < 1e-9) continue;
      const PV = wV[JV / 3],
        [AV, NV, XV, MV, zV, GV] = [QV[2 * VV], QV[2 * VV + 1], QV[2 * YV], QV[2 * YV + 1], QV[2 * UV], QV[2 * UV + 1]],
        WV = Math.max(0, Math.floor(Math.min(vV, jV, tV))),
        RV = Math.min(xV - 1, Math.ceil(Math.max(vV, jV, tV))),
        gV = Math.max(0, Math.floor(Math.min(BV, qV, FV))),
        DV = Math.min(xV - 1, Math.ceil(Math.max(BV, qV, FV)));
      for (let JV = gV; JV <= DV; JV++)
        for (let VV = WV; VV <= RV; VV++) {
          const [YV, UV] = [VV + .5, JV + .5], QV = ((YV - vV) * (FV - BV) - (tV - vV) * (UV - BV)) / TV, nV = ((jV - vV) * (UV - BV) - (YV - vV) * (qV - BV)) / TV, wV = 1 - QV - nV;
          if (wV < 0 || QV < 0 || nV < 0) continue;
          const WV = wV * rV[yV + 2] + QV * rV[pV + 2] + nV * rV[ZV + 2],
            RV = JV * xV + VV;
          if (WV <= kV[RV]) continue;
          const gV = Math.max(0, Math.min(eV.width - 1, Math.floor((wV * AV + QV * XV + nV * zV) * eV.width))),
            DV = 4 * (Math.max(0, Math.min(eV.height - 1, Math.floor((wV * NV + QV * MV + nV * GV) * eV.height))) * eV.width + gV);
          eV.pixels[DV + 3] < EV || (kV[RV] = WV, bV[4 * RV] = eV.pixels[DV] * PV, bV[4 * RV + 1] = eV.pixels[DV + 1] * PV, bV[4 * RV + 2] = eV.pixels[DV + 2] * PV, bV[4 * RV + 3] = 255)
        }
    }
    return ZV(bV, xV, yV), bV
  }
  let nV = NaN,
    wV = new Int32Array(0);

  function ZV(VV, eV, xV) {
    let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eV => 0 !== VV[4 * eV + 3];
    const YV = new Uint8Array(eV * eV);
    for (let yV = 0; yV < eV * eV; yV++) YV[yV] = JV(yV) ? 1 : 0;
    const UV = (VV, xV) => VV >= 0 && xV >= 0 && VV < eV && xV < eV && 0 === YV[xV * eV + VV],
      pV = new Float32Array(eV * eV).fill(1 / 0),
      QV = function(VV) {
        if (VV !== nV) {
          const eV = Math.ceil(VV + 1),
            xV = [];
          for (let JV = -eV; JV <= eV; JV++)
            for (let YV = -eV; YV <= eV; YV++) {
              const eV = YV * YV + JV * JV;
              eV > 0 && eV < (VV + 1) ** 2 && xV.push(YV, JV, eV)
            }
          nV = VV, wV = Int32Array.from(xV)
        }
        return wV
      }(xV);
    for (let yV = 0; yV < eV; yV++)
      for (let VV = 0; VV < eV; VV++) {
        if (1 === YV[yV * eV + VV] && (UV(VV - 1, yV) || UV(VV + 1, yV) || UV(VV, yV - 1) || UV(VV, yV + 1)))
          for (let xV = 0; xV < QV.length; xV += 3) {
            const JV = VV + QV[xV],
              YV = yV + QV[xV + 1];
            if (JV >= 0 && YV >= 0 && JV < eV && YV < eV) {
              const VV = YV * eV + JV;
              pV[VV] = Math.min(pV[VV], QV[xV + 2])
            }
          }
      }
    for (let nV = 0; nV < eV * eV; nV++) 1 !== YV[nV] && pV[nV] !== 1 / 0 && (VV.set(yV, 4 * nV), VV[4 * nV + 3] = Math.round(255 * Math.min(1, xV + 1 - Math.sqrt(pV[nV]))))
  }
  const vV = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    rV = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    kV = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const bV = 1e-6;

  function EV(VV, eV, xV, JV) {
    let {
      origin: YV,
      across: UV,
      down: yV,
      texture: pV,
      rect: [QV, nV, wV, ZV],
      shade: vV
    } = JV;
    const rV = UV.x * yV.y - UV.y * yV.x;
    if (Math.abs(rV) < 1e-9) return;
    const kV = [YV.x, YV.x + UV.x, YV.x + yV.x, YV.x + UV.x + yV.x],
      EV = [YV.y, YV.y + UV.y, YV.y + yV.y, YV.y + UV.y + yV.y],
      BV = Math.max(0, Math.floor(Math.min(...kV))),
      jV = Math.min(xV - 1, Math.ceil(Math.max(...kV))),
      qV = Math.max(0, Math.floor(Math.min(...EV))),
      tV = Math.min(xV - 1, Math.ceil(Math.max(...EV)));
    for (let FV = qV; FV <= tV; FV++)
      for (let JV = BV; JV <= jV; JV++) {
        const kV = JV + .5 - YV.x,
          EV = FV + .5 - YV.y,
          BV = (kV * yV.y - EV * yV.x) / rV,
          jV = (UV.x * EV - UV.y * kV) / rV;
        if (BV < -bV || BV > 1 + bV || jV < -bV || jV > 1 + bV) continue;
        const qV = FV * xV + JV;
        eV[qV] = 1;
        const tV = QV + Math.min(Math.max(BV, 0), 1) * (wV - QV),
          TV = nV + Math.min(Math.max(jV, 0), 1) * (ZV - nV),
          PV = Math.min(pV.width - 1, Math.floor(tV * pV.width)),
          AV = 4 * (Math.min(pV.height - 1, Math.floor(TV * pV.height)) * pV.width + PV),
          NV = pV.pixels[AV + 3] / 255;
        if (0 === NV) continue;
        const XV = 4 * qV,
          MV = VV[XV + 3] / 255 * (1 - NV),
          zV = NV + MV;
        for (let eV = 0; eV < 3; eV++) VV[XV + eV] = (pV.pixels[AV + eV] * vV * NV + VV[XV + eV] * MV) / zV;
        VV[XV + 3] = 255 * zV
      }
  }

  function BV(VV, eV, xV) {
    const JV = VV.get(eV);
    if (void 0 === JV) throw new Error(`no ${xV} was sent for ${eV.slice(0,100)}`);
    return JV
  }
  const jV = {
      pixelsOf(VV) {
        const eV = new OffscreenCanvas(VV.width, VV.height),
          xV = eV.getContext("2d");
        if (!xV) throw new Error("no 2D context");
        return xV.drawImage(VV, 0, 0), VV.close(), {
          width: eV.width,
          height: eV.height,
          pixels: xV.getImageData(0, 0, eV.width, eV.height).data
        }
      },
      async encode(VV, eV) {
        const xV = new OffscreenCanvas(eV, eV),
          JV = xV.getContext("2d");
        if (!JV) throw new Error("no 2D context");
        JV.putImageData(new ImageData(VV, eV, eV), 0, 0);
        const YV = await xV.convertToBlob();
        return new Promise(((VV, eV) => {
          const xV = new FileReader;
          xV.onload = () => {
            VV(xV.result)
          }, xV.onerror = () => {
            var VV;
            eV(null !== (VV = xV.error) && void 0 !== VV ? VV : new Error("the icon did not encode"))
          }, xV.readAsDataURL(YV)
        }))
      }
    },
    qV = globalThis.WorkerGlobalScope;
  void 0 !== qV && globalThis instanceof qV && function(JV, YV) {
    const yV = new Map,
      nV = new Map,
      wV = (VV, eV, xV) => {
        (async () => {
          try {
            JV.postMessage({
              type: "drawn",
              id: VV,
              url: await YV.encode(xV(), eV)
            })
          } catch (UV) {
            JV.postMessage({
              type: "failed",
              message: String(UV)
            })
          }
        })()
      };
    JV.onmessage = JV => {
      let {
        data: bV
      } = JV;
      if ("texture" === bV.type) yV.set(bV.url, YV.pixelsOf(bV.bitmap));
      else if ("model" === bV.type) nV.set(bV.name, {
        geometry: bV.geometry,
        texture: YV.pixelsOf(bV.bitmap)
      });
      else if ("draw" === bV.type) {
        const {
          id: JV,
          top: YV,
          left: QV,
          right: nV,
          itemType: jV,
          size: qV,
          outlineWidth: tV
        } = bV;
        wV(JV, qV, (() => function(JV, YV, yV, QV) {
          const nV = UV(yV, QV),
            wV = nV * VV,
            vV = nV * eV,
            rV = nV * xV,
            kV = Math.max(...YV.boxes.map((VV => VV[4]))),
            bV = yV / 2,
            BV = vV + (yV - vV - vV - kV * rV) / 2,
            jV = (VV, eV, xV) => ({
              x: bV + (VV - xV) * wV,
              y: BV - vV + (VV + xV) * vV + (kV - eV) * rV
            }),
            qV = (VV, eV, xV, JV, UV, yV) => ({
              origin: VV,
              across: {
                x: eV.x - VV.x,
                y: eV.y - VV.y
              },
              down: {
                x: xV.x - VV.x,
                y: xV.y - VV.y
              },
              texture: JV,
              rect: YV.cropFaces ? UV : [0, 0, 1, 1],
              shade: yV
            }),
            tV = new Uint8ClampedArray(yV * yV * 4),
            FV = new Uint8Array(yV * yV),
            TV = pV;
          for (const [VV, eV, xV, UV, pV, ZV] of YV.boxes) {
            const YV = qV(jV(UV, pV, ZV), jV(UV, pV, xV), jV(UV, eV, ZV), JV.right, [1 - ZV, 1 - pV, 1 - xV, 1 - eV], TV.right),
              QV = qV(jV(VV, pV, ZV), jV(UV, pV, ZV), jV(VV, eV, ZV), JV.left, [VV, 1 - pV, UV, 1 - eV], TV.left),
              nV = qV(jV(VV, pV, xV), jV(UV, pV, xV), jV(VV, pV, ZV), JV.top, [VV, xV, UV, ZV], TV.top);
            for (const VV of [YV, QV, nV]) EV(tV, FV, yV, VV)
          }
          return ZV(tV, yV, QV, (VV => 1 === FV[VV])), tV
        }({
          top: BV(yV, YV, "texture"),
          left: BV(yV, QV, "texture"),
          right: BV(yV, nV, "texture")
        }, function(VV) {
          return "SlabBlock" === VV ? rV : "StairsBlock" === VV ? kV : vV
        }(jV), qV, tV)))
      } else {
        const {
          id: VV,
          name: eV,
          size: xV,
          outlineWidth: JV
        } = bV;
        wV(VV, xV, (() => {
          const {
            geometry: VV,
            texture: YV
          } = BV(nV, eV, "model");
          return QV(VV, YV, xV, JV)
        }))
      }
    }, JV.postMessage({
      type: "started"
    })
  }(globalThis, jV)
})();