(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var MM = __webpack_require__.u,
        rM = __webpack_require__.e,
        iM = {},
        OM = {};
      __webpack_require__.u = function(rM) {
        return MM(rM) + (iM.hasOwnProperty(rM) ? "?" + iM[rM] : "")
      }, __webpack_require__.e = function(SM) {
        return rM(SM).catch((function(rM) {
          var jM = OM.hasOwnProperty(SM) ? OM[SM] : 4;
          if (jM < 1) {
            var aM = MM(SM);
            if (rM.message = "Loading chunk " + SM + " failed after 4 retries.\n(" + aM + ")", rM.request = aM, iM[SM] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete OM[SM]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === rM.code) {
              var PM = __webpack_require__.miniCssF(SM);
              rM.message = rM.message.replace("Loading chunk", "Loading CSS chunk").replace(aM, PM), rM.request = PM
            }
            throw rM
          }
          return new Promise((function(MM) {
            var rM = 4 - jM + 1;
            setTimeout((function() {
              var rM = "cache-bust=" + Date.now();
              iM[SM] = rM, OM[SM] = jM - 1, MM(__webpack_require__.e(SM))
            }), function(MM) {
              return 500 * Math.pow(2, MM)
            }(rM))
          }))
        }))
      }
    }
  })();
  const MM = Math.SQRT1_2,
    rM = Math.SQRT1_2 / 2,
    iM = Math.sqrt(3) / 2,
    OM = 2 * MM,
    SM = 2 * rM + iM;

  function jM(rM, iM) {
    const OM = iM > 0 ? iM + 1 : 0,
      jM = .6 * rM - iM / MM;
    return Math.max(0, Math.min(jM, (rM - 2 * OM) / SM))
  }
  const aM = [15, 15, 15],
    PM = {
      top: 1,
      left: .85,
      right: .7
    };

  function nM(MM, rM, iM, aM) {
    const {
      vertices: PM,
      uvs: nM,
      indices: QM,
      shades: zM
    } = MM, mM = function(MM, rM) {
      const iM = jM(MM, rM),
        aM = OM * iM,
        PM = SM * iM;
      return {
        left: (MM - aM) / 2,
        top: (MM - PM) / 2,
        width: aM,
        height: PM
      }
    }(iM, aM), HM = new Float32Array(PM.length);
    for (let OM = 0; OM < PM.length; OM += 3) HM[OM] = mM.left + PM[OM] * mM.width, HM[OM + 1] = mM.top + PM[OM + 1] * mM.height, HM[OM + 2] = PM[OM + 2];
    const hM = new Float32Array(iM * iM).fill(-1 / 0),
      JM = new Uint8ClampedArray(iM * iM * 4),
      dM = 255 * MM.alphaCutoff;
    for (let OM = 0; OM < QM.length; OM += 3) {
      const [MM, SM, jM] = [QM[OM], QM[OM + 1], QM[OM + 2]], [aM, PM, LM] = [3 * MM, 3 * SM, 3 * jM], [mM, yM, lM, EM, UM, GM] = [HM[aM], HM[aM + 1], HM[PM], HM[PM + 1], HM[LM], HM[LM + 1]], CM = (lM - mM) * (GM - yM) - (UM - mM) * (EM - yM);
      if (Math.abs(CM) < 1e-9) continue;
      const eM = zM[OM / 3],
        [bM, wM, tM, gM, uM, RM] = [nM[2 * MM], nM[2 * MM + 1], nM[2 * SM], nM[2 * SM + 1], nM[2 * jM], nM[2 * jM + 1]],
        pM = Math.max(0, Math.floor(Math.min(mM, lM, UM))),
        WM = Math.min(iM - 1, Math.ceil(Math.max(mM, lM, UM))),
        sM = Math.max(0, Math.floor(Math.min(yM, EM, GM))),
        DM = Math.min(iM - 1, Math.ceil(Math.max(yM, EM, GM)));
      for (let OM = sM; OM <= DM; OM++)
        for (let MM = pM; MM <= WM; MM++) {
          const [SM, jM] = [MM + .5, OM + .5], nM = ((SM - mM) * (GM - yM) - (UM - mM) * (jM - yM)) / CM, QM = ((lM - mM) * (jM - yM) - (SM - mM) * (EM - yM)) / CM, zM = 1 - nM - QM;
          if (zM < 0 || nM < 0 || QM < 0) continue;
          const pM = zM * HM[aM + 2] + nM * HM[PM + 2] + QM * HM[LM + 2],
            WM = OM * iM + MM;
          if (pM <= hM[WM]) continue;
          const sM = Math.max(0, Math.min(rM.width - 1, Math.floor((zM * bM + nM * tM + QM * uM) * rM.width))),
            DM = 4 * (Math.max(0, Math.min(rM.height - 1, Math.floor((zM * wM + nM * gM + QM * RM) * rM.height))) * rM.width + sM);
          rM.pixels[DM + 3] < dM || (hM[WM] = pM, JM[4 * WM] = rM.pixels[DM] * eM, JM[4 * WM + 1] = rM.pixels[DM + 1] * eM, JM[4 * WM + 2] = rM.pixels[DM + 2] * eM, JM[4 * WM + 3] = 255)
        }
    }
    return LM(JM, iM, aM), JM
  }
  let QM = NaN,
    zM = new Int32Array(0);

  function LM(MM, rM, iM) {
    let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rM => 0 !== MM[4 * rM + 3];
    const SM = new Uint8Array(rM * rM);
    for (let aM = 0; aM < rM * rM; aM++) SM[aM] = OM(aM) ? 1 : 0;
    const jM = (MM, iM) => MM >= 0 && iM >= 0 && MM < rM && iM < rM && 0 === SM[iM * rM + MM],
      PM = new Float32Array(rM * rM).fill(1 / 0),
      nM = function(MM) {
        if (MM !== QM) {
          const rM = Math.ceil(MM + 1),
            iM = [];
          for (let OM = -rM; OM <= rM; OM++)
            for (let SM = -rM; SM <= rM; SM++) {
              const rM = SM * SM + OM * OM;
              rM > 0 && rM < (MM + 1) ** 2 && iM.push(SM, OM, rM)
            }
          QM = MM, zM = Int32Array.from(iM)
        }
        return zM
      }(iM);
    for (let aM = 0; aM < rM; aM++)
      for (let MM = 0; MM < rM; MM++) {
        if (1 === SM[aM * rM + MM] && (jM(MM - 1, aM) || jM(MM + 1, aM) || jM(MM, aM - 1) || jM(MM, aM + 1)))
          for (let iM = 0; iM < nM.length; iM += 3) {
            const OM = MM + nM[iM],
              SM = aM + nM[iM + 1];
            if (OM >= 0 && SM >= 0 && OM < rM && SM < rM) {
              const MM = SM * rM + OM;
              PM[MM] = Math.min(PM[MM], nM[iM + 2])
            }
          }
      }
    for (let QM = 0; QM < rM * rM; QM++) 1 !== SM[QM] && PM[QM] !== 1 / 0 && (MM.set(aM, 4 * QM), MM[4 * QM + 3] = Math.round(255 * Math.min(1, iM + 1 - Math.sqrt(PM[QM]))))
  }
  const mM = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    HM = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    hM = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const JM = 1e-6;

  function dM(MM, rM, iM, OM) {
    let {
      origin: SM,
      across: jM,
      down: aM,
      texture: PM,
      rect: [nM, QM, zM, LM],
      shade: mM
    } = OM;
    const HM = jM.x * aM.y - jM.y * aM.x;
    if (Math.abs(HM) < 1e-9) return;
    const hM = [SM.x, SM.x + jM.x, SM.x + aM.x, SM.x + jM.x + aM.x],
      dM = [SM.y, SM.y + jM.y, SM.y + aM.y, SM.y + jM.y + aM.y],
      yM = Math.max(0, Math.floor(Math.min(...hM))),
      lM = Math.min(iM - 1, Math.ceil(Math.max(...hM))),
      EM = Math.max(0, Math.floor(Math.min(...dM))),
      UM = Math.min(iM - 1, Math.ceil(Math.max(...dM)));
    for (let GM = EM; GM <= UM; GM++)
      for (let OM = yM; OM <= lM; OM++) {
        const hM = OM + .5 - SM.x,
          dM = GM + .5 - SM.y,
          yM = (hM * aM.y - dM * aM.x) / HM,
          lM = (jM.x * dM - jM.y * hM) / HM;
        if (yM < -JM || yM > 1 + JM || lM < -JM || lM > 1 + JM) continue;
        const EM = GM * iM + OM;
        rM[EM] = 1;
        const UM = nM + Math.min(Math.max(yM, 0), 1) * (zM - nM),
          CM = QM + Math.min(Math.max(lM, 0), 1) * (LM - QM),
          eM = Math.min(PM.width - 1, Math.floor(UM * PM.width)),
          bM = 4 * (Math.min(PM.height - 1, Math.floor(CM * PM.height)) * PM.width + eM),
          wM = PM.pixels[bM + 3] / 255;
        if (0 === wM) continue;
        const tM = 4 * EM,
          gM = MM[tM + 3] / 255 * (1 - wM),
          uM = wM + gM;
        for (let rM = 0; rM < 3; rM++) MM[tM + rM] = (PM.pixels[bM + rM] * mM * wM + MM[tM + rM] * gM) / uM;
        MM[tM + 3] = 255 * uM
      }
  }

  function yM(MM, rM, iM) {
    const OM = MM.get(rM);
    if (void 0 === OM) throw new Error(`no ${iM} was sent for ${rM.slice(0,100)}`);
    return OM
  }
  const lM = {
      pixelsOf(MM) {
        const rM = new OffscreenCanvas(MM.width, MM.height),
          iM = rM.getContext("2d");
        if (!iM) throw new Error("no 2D context");
        return iM.drawImage(MM, 0, 0), MM.close(), {
          width: rM.width,
          height: rM.height,
          pixels: iM.getImageData(0, 0, rM.width, rM.height).data
        }
      },
      async encode(MM, rM) {
        const iM = new OffscreenCanvas(rM, rM),
          OM = iM.getContext("2d");
        if (!OM) throw new Error("no 2D context");
        OM.putImageData(new ImageData(MM, rM, rM), 0, 0);
        const SM = await iM.convertToBlob();
        return new Promise(((MM, rM) => {
          const iM = new FileReader;
          iM.onload = () => {
            MM(iM.result)
          }, iM.onerror = () => {
            var MM;
            rM(null !== (MM = iM.error) && void 0 !== MM ? MM : new Error("the icon did not encode"))
          }, iM.readAsDataURL(SM)
        }))
      }
    },
    EM = globalThis.WorkerGlobalScope;
  void 0 !== EM && globalThis instanceof EM && function(OM, SM) {
    const aM = new Map,
      QM = new Map,
      zM = (MM, rM, iM) => {
        (async () => {
          try {
            OM.postMessage({
              type: "drawn",
              id: MM,
              url: await SM.encode(iM(), rM)
            })
          } catch (jM) {
            OM.postMessage({
              type: "failed",
              message: String(jM)
            })
          }
        })()
      };
    OM.onmessage = OM => {
      let {
        data: JM
      } = OM;
      if ("texture" === JM.type) aM.set(JM.url, SM.pixelsOf(JM.bitmap));
      else if ("model" === JM.type) QM.set(JM.name, {
        geometry: JM.geometry,
        texture: SM.pixelsOf(JM.bitmap)
      });
      else if ("draw" === JM.type) {
        const {
          id: OM,
          top: SM,
          left: nM,
          right: QM,
          itemType: lM,
          size: EM,
          outlineWidth: UM
        } = JM;
        zM(OM, EM, (() => function(OM, SM, aM, nM) {
          const QM = jM(aM, nM),
            zM = QM * MM,
            mM = QM * rM,
            HM = QM * iM,
            hM = Math.max(...SM.boxes.map((MM => MM[4]))),
            JM = aM / 2,
            yM = mM + (aM - mM - mM - hM * HM) / 2,
            lM = (MM, rM, iM) => ({
              x: JM + (MM - iM) * zM,
              y: yM - mM + (MM + iM) * mM + (hM - rM) * HM
            }),
            EM = (MM, rM, iM, OM, jM, aM) => ({
              origin: MM,
              across: {
                x: rM.x - MM.x,
                y: rM.y - MM.y
              },
              down: {
                x: iM.x - MM.x,
                y: iM.y - MM.y
              },
              texture: OM,
              rect: SM.cropFaces ? jM : [0, 0, 1, 1],
              shade: aM
            }),
            UM = new Uint8ClampedArray(aM * aM * 4),
            GM = new Uint8Array(aM * aM),
            CM = PM;
          for (const [MM, rM, iM, jM, PM, LM] of SM.boxes) {
            const SM = EM(lM(jM, PM, LM), lM(jM, PM, iM), lM(jM, rM, LM), OM.right, [1 - LM, 1 - PM, 1 - iM, 1 - rM], CM.right),
              nM = EM(lM(MM, PM, LM), lM(jM, PM, LM), lM(MM, rM, LM), OM.left, [MM, 1 - PM, jM, 1 - rM], CM.left),
              QM = EM(lM(MM, PM, iM), lM(jM, PM, iM), lM(MM, PM, LM), OM.top, [MM, iM, jM, LM], CM.top);
            for (const MM of [SM, nM, QM]) dM(UM, GM, aM, MM)
          }
          return LM(UM, aM, nM, (MM => 1 === GM[MM])), UM
        }({
          top: yM(aM, SM, "texture"),
          left: yM(aM, nM, "texture"),
          right: yM(aM, QM, "texture")
        }, function(MM) {
          return "SlabBlock" === MM ? HM : "StairsBlock" === MM ? hM : mM
        }(lM), EM, UM)))
      } else {
        const {
          id: MM,
          name: rM,
          size: iM,
          outlineWidth: OM
        } = JM;
        zM(MM, iM, (() => {
          const {
            geometry: MM,
            texture: SM
          } = yM(QM, rM, "model");
          return nM(MM, SM, iM, OM)
        }))
      }
    }, OM.postMessage({
      type: "started"
    })
  }(globalThis, lM)
})();