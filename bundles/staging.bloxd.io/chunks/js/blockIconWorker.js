(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var DD = __webpack_require__.u,
        CD = __webpack_require__.e,
        cD = {},
        ID = {};
      __webpack_require__.u = function(CD) {
        return DD(CD) + (cD.hasOwnProperty(CD) ? "?" + cD[CD] : "")
      }, __webpack_require__.e = function(pD) {
        return CD(pD).catch((function(CD) {
          var iD = ID.hasOwnProperty(pD) ? ID[pD] : 4;
          if (iD < 1) {
            var fD = DD(pD);
            throw CD.message = "Loading chunk " + pD + " failed after 4 retries.\n(" + fD + ")", CD.request = fD, cD[pD] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete ID[pD]
            }), 0), CD
          }
          return new Promise((function(DD) {
            var CD = 4 - iD + 1;
            setTimeout((function() {
              var CD = "cache-bust=" + Date.now();
              cD[pD] = CD, ID[pD] = iD - 1, DD(__webpack_require__.e(pD))
            }), function(DD) {
              return 500 * Math.pow(2, DD)
            }(CD))
          }))
        }))
      }
    }
  })();
  const DD = [15, 15, 15],
    CD = {
      top: 1,
      left: .85,
      right: .7
    };

  function cD(CD, cD, ID) {
    let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD => 0 !== CD[4 * DD + 3];
    const iD = (DD, CD) => DD < 0 || CD < 0 || DD >= cD || CD >= cD || !pD(CD * cD + DD),
      fD = [];
    for (let DD = 0; DD < cD; DD++)
      for (let CD = 0; CD < cD; CD++)
        if (!iD(CD, DD)) DD: for (let pD = -ID; pD <= ID; pD++) {
          const bD = ID - Math.abs(pD);
          for (let ID = -bD; ID <= bD; ID++)
            if (iD(CD + ID, DD + pD)) {
              fD.push(DD * cD + CD);
              break DD
            }
        }
    for (const bD of fD) CD.set(DD, 4 * bD), CD[4 * bD + 3] = 255
  }
  const ID = Math.SQRT1_2,
    pD = Math.sqrt(3) / 2,
    iD = {
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
    bD = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const QD = 1e-6;

  function wD(DD, CD, cD, ID) {
    let {
      origin: pD,
      across: iD,
      down: fD,
      texture: bD,
      rect: [wD, SD, BD, yD],
      shade: MD
    } = ID;
    const tD = iD.x * fD.y - iD.y * fD.x;
    if (Math.abs(tD) < 1e-9) return;
    const ZD = [pD.x, pD.x + iD.x, pD.x + fD.x, pD.x + iD.x + fD.x],
      oD = [pD.y, pD.y + iD.y, pD.y + fD.y, pD.y + iD.y + fD.y],
      vD = Math.max(0, Math.floor(Math.min(...ZD))),
      ND = Math.min(cD - 1, Math.ceil(Math.max(...ZD))),
      gD = Math.max(0, Math.floor(Math.min(...oD))),
      XD = Math.min(cD - 1, Math.ceil(Math.max(...oD)));
    for (let mD = gD; mD <= XD; mD++)
      for (let ID = vD; ID <= ND; ID++) {
        const ZD = ID + .5 - pD.x,
          oD = mD + .5 - pD.y,
          vD = (ZD * fD.y - oD * fD.x) / tD,
          ND = (iD.x * oD - iD.y * ZD) / tD;
        if (vD < -QD || vD > 1 + QD || ND < -QD || ND > 1 + QD) continue;
        const gD = mD * cD + ID;
        CD[gD] = 1;
        const XD = wD + Math.min(Math.max(vD, 0), 1) * (BD - wD),
          nD = SD + Math.min(Math.max(ND, 0), 1) * (yD - SD),
          OD = Math.min(bD.width - 1, Math.floor(XD * bD.width)),
          PD = 4 * (Math.min(bD.height - 1, Math.floor(nD * bD.height)) * bD.width + OD),
          HD = bD.pixels[PD + 3] / 255;
        if (0 === HD) continue;
        const UD = 4 * gD,
          xD = DD[UD + 3] / 255 * (1 - HD),
          qD = HD + xD;
        for (let CD = 0; CD < 3; CD++) DD[UD + CD] = (bD.pixels[PD + CD] * MD * HD + DD[UD + CD] * xD) / qD;
        DD[UD + 3] = 255 * qD
      }
  }

  function SD(DD, CD, cD) {
    const ID = DD.get(CD);
    if (void 0 === ID) throw new Error(`no ${cD} was sent for ${CD.slice(0,100)}`);
    return ID
  }
  const BD = {
      pixelsOf(DD) {
        const CD = new OffscreenCanvas(DD.width, DD.height),
          cD = CD.getContext("2d");
        if (!cD) throw new Error("no 2D context");
        return cD.drawImage(DD, 0, 0), DD.close(), {
          width: CD.width,
          height: CD.height,
          pixels: cD.getImageData(0, 0, CD.width, CD.height).data
        }
      },
      async encode(DD, CD) {
        const cD = new OffscreenCanvas(CD, CD),
          ID = cD.getContext("2d");
        if (!ID) throw new Error("no 2D context");
        ID.putImageData(new ImageData(DD, CD, CD), 0, 0);
        const pD = await cD.convertToBlob();
        return new Promise(((DD, CD) => {
          const cD = new FileReader;
          cD.onload = () => {
            DD(cD.result)
          }, cD.onerror = () => {
            var DD;
            CD(null !== (DD = cD.error) && void 0 !== DD ? DD : new Error("the icon did not encode"))
          }, cD.readAsDataURL(pD)
        }))
      }
    },
    yD = globalThis.WorkerGlobalScope;
  void 0 !== yD && globalThis instanceof yD && function(DD, QD) {
    const BD = new Map,
      yD = new Map,
      MD = (CD, cD, ID) => {
        (async () => {
          try {
            DD.postMessage({
              type: "drawn",
              id: CD,
              url: await QD.encode(ID(), cD)
            })
          } catch (pD) {
            DD.postMessage({
              type: "failed",
              message: String(pD)
            })
          }
        })()
      };
    DD.onmessage = DD => {
      let {
        data: tD
      } = DD;
      if ("texture" === tD.type) BD.set(tD.url, QD.pixelsOf(tD.bitmap));
      else if ("model" === tD.type) yD.set(tD.name, {
        geometry: tD.geometry,
        texture: QD.pixelsOf(tD.bitmap)
      });
      else if ("draw" === tD.type) {
        const {
          id: DD,
          top: QD,
          left: yD,
          right: ZD,
          itemType: oD,
          size: vD,
          outlineWidth: ND
        } = tD;
        MD(DD, vD, (() => function(DD, iD, fD, bD) {
          const QD = .6 * fD,
            SD = QD * ID,
            BD = QD * ID * .5,
            yD = QD * pD,
            MD = Math.max(...iD.boxes.map((DD => DD[4]))),
            tD = SD / 2 + (fD - SD) / 2,
            ZD = BD + (fD - BD - BD - MD * yD) / 2,
            oD = (DD, CD, cD) => ({
              x: tD + (DD - cD) * SD,
              y: ZD - BD + (DD + cD) * BD + (MD - CD) * yD
            }),
            vD = (DD, CD, cD, ID, pD, fD) => ({
              origin: DD,
              across: {
                x: CD.x - DD.x,
                y: CD.y - DD.y
              },
              down: {
                x: cD.x - DD.x,
                y: cD.y - DD.y
              },
              texture: ID,
              rect: iD.cropFaces ? pD : [0, 0, 1, 1],
              shade: fD
            }),
            ND = new Uint8ClampedArray(fD * fD * 4),
            gD = new Uint8Array(fD * fD),
            XD = CD;
          for (const [CD, cD, ID, pD, mD, nD] of iD.boxes) {
            const iD = vD(oD(pD, mD, nD), oD(pD, mD, ID), oD(pD, cD, nD), DD.right, [1 - nD, 1 - mD, 1 - ID, 1 - cD], XD.right),
              bD = vD(oD(CD, mD, nD), oD(pD, mD, nD), oD(CD, cD, nD), DD.left, [CD, 1 - mD, pD, 1 - cD], XD.left),
              QD = vD(oD(CD, mD, ID), oD(pD, mD, ID), oD(CD, mD, nD), DD.top, [CD, ID, pD, nD], XD.top);
            for (const DD of [iD, bD, QD]) wD(ND, gD, fD, DD)
          }
          return cD(ND, fD, bD, (DD => 1 === gD[DD])), ND
        }({
          top: SD(BD, QD, "texture"),
          left: SD(BD, yD, "texture"),
          right: SD(BD, ZD, "texture")
        }, function(DD) {
          return "SlabBlock" === DD ? fD : "StairsBlock" === DD ? bD : iD
        }(oD), vD, ND)))
      } else {
        const {
          id: DD,
          name: CD,
          size: ID,
          outlineWidth: pD
        } = tD;
        MD(DD, ID, (() => {
          const {
            geometry: DD,
            texture: iD
          } = SD(yD, CD, "model");
          return function(DD, CD, ID, pD) {
            const {
              vertices: iD,
              uvs: fD,
              indices: bD,
              shades: QD
            } = DD, wD = .03125 * ID, SD = ID - 2 * wD, BD = new Float32Array(iD.length);
            for (let cD = 0; cD < iD.length; cD += 3) BD[cD] = wD + iD[cD] * SD, BD[cD + 1] = wD + iD[cD + 1] * SD, BD[cD + 2] = iD[cD + 2];
            const yD = new Float32Array(ID * ID).fill(-1 / 0),
              MD = new Uint8ClampedArray(ID * ID * 4),
              tD = 255 * DD.alphaCutoff;
            for (let cD = 0; cD < bD.length; cD += 3) {
              const [DD, pD, iD] = [bD[cD], bD[cD + 1], bD[cD + 2]], [wD, SD, ZD] = [3 * DD, 3 * pD, 3 * iD], [oD, vD, ND, gD, XD, mD] = [BD[wD], BD[wD + 1], BD[SD], BD[SD + 1], BD[ZD], BD[ZD + 1]], nD = (ND - oD) * (mD - vD) - (XD - oD) * (gD - vD);
              if (Math.abs(nD) < 1e-9) continue;
              const OD = QD[cD / 3],
                [PD, HD, UD, xD, qD, JD] = [fD[2 * DD], fD[2 * DD + 1], fD[2 * pD], fD[2 * pD + 1], fD[2 * iD], fD[2 * iD + 1]],
                KD = Math.max(0, Math.floor(Math.min(oD, ND, XD))),
                aD = Math.min(ID - 1, Math.ceil(Math.max(oD, ND, XD))),
                VD = Math.max(0, Math.floor(Math.min(vD, gD, mD))),
                zD = Math.min(ID - 1, Math.ceil(Math.max(vD, gD, mD)));
              for (let cD = VD; cD <= zD; cD++)
                for (let DD = KD; DD <= aD; DD++) {
                  const [pD, iD] = [DD + .5, cD + .5], fD = ((pD - oD) * (mD - vD) - (XD - oD) * (iD - vD)) / nD, bD = ((ND - oD) * (iD - vD) - (pD - oD) * (gD - vD)) / nD, QD = 1 - fD - bD;
                  if (QD < 0 || fD < 0 || bD < 0) continue;
                  const KD = QD * BD[wD + 2] + fD * BD[SD + 2] + bD * BD[ZD + 2],
                    aD = cD * ID + DD;
                  if (KD <= yD[aD]) continue;
                  const VD = Math.max(0, Math.min(CD.width - 1, Math.floor((QD * PD + fD * UD + bD * qD) * CD.width))),
                    zD = 4 * (Math.max(0, Math.min(CD.height - 1, Math.floor((QD * HD + fD * xD + bD * JD) * CD.height))) * CD.width + VD);
                  CD.pixels[zD + 3] < tD || (yD[aD] = KD, MD[4 * aD] = CD.pixels[zD] * OD, MD[4 * aD + 1] = CD.pixels[zD + 1] * OD, MD[4 * aD + 2] = CD.pixels[zD + 2] * OD, MD[4 * aD + 3] = 255)
                }
            }
            return cD(MD, ID, pD), MD
          }(DD, iD, ID, pD)
        }))
      }
    }, DD.postMessage({
      type: "started"
    })
  }(globalThis, BD)
})();