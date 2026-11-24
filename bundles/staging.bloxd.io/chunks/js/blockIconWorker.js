(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var DD = __webpack_require__.u,
        zD = __webpack_require__.e,
        wD = {},
        pD = {};
      __webpack_require__.u = function(zD) {
        return DD(zD) + (wD.hasOwnProperty(zD) ? "?" + wD[zD] : "")
      }, __webpack_require__.e = function(sD) {
        return zD(sD).catch((function(zD) {
          var KD = pD.hasOwnProperty(sD) ? pD[sD] : 4;
          if (KD < 1) {
            var rD = DD(sD);
            if (zD.message = "Loading chunk " + sD + " failed after 4 retries.\n(" + rD + ")", zD.request = rD, wD[sD] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete pD[sD]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === zD.code) {
              var LD = __webpack_require__.miniCssF(sD);
              zD.message = zD.message.replace("Loading chunk", "Loading CSS chunk").replace(rD, LD), zD.request = LD
            }
            throw zD
          }
          return new Promise((function(DD) {
            var zD = 4 - KD + 1;
            setTimeout((function() {
              var zD = "cache-bust=" + Date.now();
              wD[sD] = zD, pD[sD] = KD - 1, DD(__webpack_require__.e(sD))
            }), function(DD) {
              return 500 * Math.pow(2, DD)
            }(zD))
          }))
        }))
      }
    }
  })();
  const DD = Math.SQRT1_2,
    zD = Math.SQRT1_2 / 2,
    wD = Math.sqrt(3) / 2,
    pD = 2 * DD,
    sD = 2 * zD + wD;

  function KD(zD, wD) {
    const pD = wD > 0 ? wD + 1 : 0,
      KD = .6 * zD - wD / DD;
    return Math.max(0, Math.min(KD, (zD - 2 * pD) / sD))
  }
  const rD = [15, 15, 15],
    LD = {
      top: 1,
      left: .85,
      right: .7
    };

  function cD(DD, zD, wD, rD) {
    const {
      vertices: LD,
      uvs: cD,
      indices: gD,
      shades: RD
    } = DD, UD = function(DD, zD) {
      const wD = KD(DD, zD),
        rD = pD * wD,
        LD = sD * wD;
      return {
        left: (DD - rD) / 2,
        top: (DD - LD) / 2,
        width: rD,
        height: LD
      }
    }(wD, rD), fD = new Float32Array(LD.length);
    for (let pD = 0; pD < LD.length; pD += 3) fD[pD] = UD.left + LD[pD] * UD.width, fD[pD + 1] = UD.top + LD[pD + 1] * UD.height, fD[pD + 2] = LD[pD + 2];
    const ID = new Float32Array(wD * wD).fill(-1 / 0),
      BD = new Uint8ClampedArray(wD * wD * 4),
      GD = 255 * DD.alphaCutoff;
    for (let pD = 0; pD < gD.length; pD += 3) {
      const [DD, sD, KD] = [gD[pD], gD[pD + 1], gD[pD + 2]], [rD, LD, AD] = [3 * DD, 3 * sD, 3 * KD], [UD, hD, nD, MD, OD, JD] = [fD[rD], fD[rD + 1], fD[LD], fD[LD + 1], fD[AD], fD[AD + 1]], ED = (nD - UD) * (JD - hD) - (OD - UD) * (MD - hD);
      if (Math.abs(ED) < 1e-9) continue;
      const QD = RD[pD / 3],
        [XD, VD, PD, CD, xD, TD] = [cD[2 * DD], cD[2 * DD + 1], cD[2 * sD], cD[2 * sD + 1], cD[2 * KD], cD[2 * KD + 1]],
        bD = Math.max(0, Math.floor(Math.min(UD, nD, OD))),
        jD = Math.min(wD - 1, Math.ceil(Math.max(UD, nD, OD))),
        dD = Math.max(0, Math.floor(Math.min(hD, MD, JD))),
        SD = Math.min(wD - 1, Math.ceil(Math.max(hD, MD, JD)));
      for (let pD = dD; pD <= SD; pD++)
        for (let DD = bD; DD <= jD; DD++) {
          const [sD, KD] = [DD + .5, pD + .5], cD = ((sD - UD) * (JD - hD) - (OD - UD) * (KD - hD)) / ED, gD = ((nD - UD) * (KD - hD) - (sD - UD) * (MD - hD)) / ED, RD = 1 - cD - gD;
          if (RD < 0 || cD < 0 || gD < 0) continue;
          const bD = RD * fD[rD + 2] + cD * fD[LD + 2] + gD * fD[AD + 2],
            jD = pD * wD + DD;
          if (bD <= ID[jD]) continue;
          const dD = Math.max(0, Math.min(zD.width - 1, Math.floor((RD * XD + cD * PD + gD * xD) * zD.width))),
            SD = 4 * (Math.max(0, Math.min(zD.height - 1, Math.floor((RD * VD + cD * CD + gD * TD) * zD.height))) * zD.width + dD);
          zD.pixels[SD + 3] < GD || (ID[jD] = bD, BD[4 * jD] = zD.pixels[SD] * QD, BD[4 * jD + 1] = zD.pixels[SD + 1] * QD, BD[4 * jD + 2] = zD.pixels[SD + 2] * QD, BD[4 * jD + 3] = 255)
        }
    }
    return AD(BD, wD, rD), BD
  }
  let gD = NaN,
    RD = new Int32Array(0);

  function AD(DD, zD, wD) {
    let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zD => 0 !== DD[4 * zD + 3];
    const sD = new Uint8Array(zD * zD);
    for (let rD = 0; rD < zD * zD; rD++) sD[rD] = pD(rD) ? 1 : 0;
    const KD = (DD, wD) => DD >= 0 && wD >= 0 && DD < zD && wD < zD && 0 === sD[wD * zD + DD],
      LD = new Float32Array(zD * zD).fill(1 / 0),
      cD = function(DD) {
        if (DD !== gD) {
          const zD = Math.ceil(DD + 1),
            wD = [];
          for (let pD = -zD; pD <= zD; pD++)
            for (let sD = -zD; sD <= zD; sD++) {
              const zD = sD * sD + pD * pD;
              zD > 0 && zD < (DD + 1) ** 2 && wD.push(sD, pD, zD)
            }
          gD = DD, RD = Int32Array.from(wD)
        }
        return RD
      }(wD);
    for (let rD = 0; rD < zD; rD++)
      for (let DD = 0; DD < zD; DD++) {
        if (1 === sD[rD * zD + DD] && (KD(DD - 1, rD) || KD(DD + 1, rD) || KD(DD, rD - 1) || KD(DD, rD + 1)))
          for (let wD = 0; wD < cD.length; wD += 3) {
            const pD = DD + cD[wD],
              sD = rD + cD[wD + 1];
            if (pD >= 0 && sD >= 0 && pD < zD && sD < zD) {
              const DD = sD * zD + pD;
              LD[DD] = Math.min(LD[DD], cD[wD + 2])
            }
          }
      }
    for (let gD = 0; gD < zD * zD; gD++) 1 !== sD[gD] && LD[gD] !== 1 / 0 && (DD.set(rD, 4 * gD), DD[4 * gD + 3] = Math.round(255 * Math.min(1, wD + 1 - Math.sqrt(LD[gD]))))
  }
  const UD = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    fD = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    ID = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const BD = 1e-6;

  function GD(DD, zD, wD, pD) {
    let {
      origin: sD,
      across: KD,
      down: rD,
      texture: LD,
      rect: [cD, gD, RD, AD],
      shade: UD
    } = pD;
    const fD = KD.x * rD.y - KD.y * rD.x;
    if (Math.abs(fD) < 1e-9) return;
    const ID = [sD.x, sD.x + KD.x, sD.x + rD.x, sD.x + KD.x + rD.x],
      GD = [sD.y, sD.y + KD.y, sD.y + rD.y, sD.y + KD.y + rD.y],
      hD = Math.max(0, Math.floor(Math.min(...ID))),
      nD = Math.min(wD - 1, Math.ceil(Math.max(...ID))),
      MD = Math.max(0, Math.floor(Math.min(...GD))),
      OD = Math.min(wD - 1, Math.ceil(Math.max(...GD)));
    for (let JD = MD; JD <= OD; JD++)
      for (let pD = hD; pD <= nD; pD++) {
        const ID = pD + .5 - sD.x,
          GD = JD + .5 - sD.y,
          hD = (ID * rD.y - GD * rD.x) / fD,
          nD = (KD.x * GD - KD.y * ID) / fD;
        if (hD < -BD || hD > 1 + BD || nD < -BD || nD > 1 + BD) continue;
        const MD = JD * wD + pD;
        zD[MD] = 1;
        const OD = cD + Math.min(Math.max(hD, 0), 1) * (RD - cD),
          ED = gD + Math.min(Math.max(nD, 0), 1) * (AD - gD),
          QD = Math.min(LD.width - 1, Math.floor(OD * LD.width)),
          XD = 4 * (Math.min(LD.height - 1, Math.floor(ED * LD.height)) * LD.width + QD),
          VD = LD.pixels[XD + 3] / 255;
        if (0 === VD) continue;
        const PD = 4 * MD,
          CD = DD[PD + 3] / 255 * (1 - VD),
          xD = VD + CD;
        for (let zD = 0; zD < 3; zD++) DD[PD + zD] = (LD.pixels[XD + zD] * UD * VD + DD[PD + zD] * CD) / xD;
        DD[PD + 3] = 255 * xD
      }
  }

  function hD(DD, zD, wD) {
    const pD = DD.get(zD);
    if (void 0 === pD) throw new Error(`no ${wD} was sent for ${zD.slice(0,100)}`);
    return pD
  }
  const nD = {
      pixelsOf(DD) {
        const zD = new OffscreenCanvas(DD.width, DD.height),
          wD = zD.getContext("2d");
        if (!wD) throw new Error("no 2D context");
        return wD.drawImage(DD, 0, 0), DD.close(), {
          width: zD.width,
          height: zD.height,
          pixels: wD.getImageData(0, 0, zD.width, zD.height).data
        }
      },
      async encode(DD, zD) {
        const wD = new OffscreenCanvas(zD, zD),
          pD = wD.getContext("2d");
        if (!pD) throw new Error("no 2D context");
        pD.putImageData(new ImageData(DD, zD, zD), 0, 0);
        const sD = await wD.convertToBlob();
        return new Promise(((DD, zD) => {
          const wD = new FileReader;
          wD.onload = () => {
            DD(wD.result)
          }, wD.onerror = () => {
            var DD;
            zD(null !== (DD = wD.error) && void 0 !== DD ? DD : new Error("the icon did not encode"))
          }, wD.readAsDataURL(sD)
        }))
      }
    },
    MD = globalThis.WorkerGlobalScope;
  void 0 !== MD && globalThis instanceof MD && function(pD, sD) {
    const rD = new Map,
      gD = new Map,
      RD = (DD, zD, wD) => {
        (async () => {
          try {
            pD.postMessage({
              type: "drawn",
              id: DD,
              url: await sD.encode(wD(), zD)
            })
          } catch (KD) {
            pD.postMessage({
              type: "failed",
              message: String(KD)
            })
          }
        })()
      };
    pD.onmessage = pD => {
      let {
        data: BD
      } = pD;
      if ("texture" === BD.type) rD.set(BD.url, sD.pixelsOf(BD.bitmap));
      else if ("model" === BD.type) gD.set(BD.name, {
        geometry: BD.geometry,
        texture: sD.pixelsOf(BD.bitmap)
      });
      else if ("draw" === BD.type) {
        const {
          id: pD,
          top: sD,
          left: cD,
          right: gD,
          itemType: nD,
          size: MD,
          outlineWidth: OD
        } = BD;
        RD(pD, MD, (() => function(pD, sD, rD, cD) {
          const gD = KD(rD, cD),
            RD = gD * DD,
            UD = gD * zD,
            fD = gD * wD,
            ID = Math.max(...sD.boxes.map((DD => DD[4]))),
            BD = rD / 2,
            hD = UD + (rD - UD - UD - ID * fD) / 2,
            nD = (DD, zD, wD) => ({
              x: BD + (DD - wD) * RD,
              y: hD - UD + (DD + wD) * UD + (ID - zD) * fD
            }),
            MD = (DD, zD, wD, pD, KD, rD) => ({
              origin: DD,
              across: {
                x: zD.x - DD.x,
                y: zD.y - DD.y
              },
              down: {
                x: wD.x - DD.x,
                y: wD.y - DD.y
              },
              texture: pD,
              rect: sD.cropFaces ? KD : [0, 0, 1, 1],
              shade: rD
            }),
            OD = new Uint8ClampedArray(rD * rD * 4),
            JD = new Uint8Array(rD * rD),
            ED = LD;
          for (const [DD, zD, wD, KD, LD, AD] of sD.boxes) {
            const sD = MD(nD(KD, LD, AD), nD(KD, LD, wD), nD(KD, zD, AD), pD.right, [1 - AD, 1 - LD, 1 - wD, 1 - zD], ED.right),
              cD = MD(nD(DD, LD, AD), nD(KD, LD, AD), nD(DD, zD, AD), pD.left, [DD, 1 - LD, KD, 1 - zD], ED.left),
              gD = MD(nD(DD, LD, wD), nD(KD, LD, wD), nD(DD, LD, AD), pD.top, [DD, wD, KD, AD], ED.top);
            for (const DD of [sD, cD, gD]) GD(OD, JD, rD, DD)
          }
          return AD(OD, rD, cD, (DD => 1 === JD[DD])), OD
        }({
          top: hD(rD, sD, "texture"),
          left: hD(rD, cD, "texture"),
          right: hD(rD, gD, "texture")
        }, function(DD) {
          return "SlabBlock" === DD ? fD : "StairsBlock" === DD ? ID : UD
        }(nD), MD, OD)))
      } else {
        const {
          id: DD,
          name: zD,
          size: wD,
          outlineWidth: pD
        } = BD;
        RD(DD, wD, (() => {
          const {
            geometry: DD,
            texture: sD
          } = hD(gD, zD, "model");
          return cD(DD, sD, wD, pD)
        }))
      }
    }, pD.postMessage({
      type: "started"
    })
  }(globalThis, nD)
})();