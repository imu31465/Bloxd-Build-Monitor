(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var CC = __webpack_require__.u,
        zC = __webpack_require__.e,
        ZC = {},
        QC = {};
      __webpack_require__.u = function(zC) {
        return CC(zC) + (ZC.hasOwnProperty(zC) ? "?" + ZC[zC] : "")
      }, __webpack_require__.e = function(wC) {
        return zC(wC).catch((function(zC) {
          var bC = QC.hasOwnProperty(wC) ? QC[wC] : 4;
          if (bC < 1) {
            var nC = CC(wC);
            throw zC.message = "Loading chunk " + wC + " failed after 4 retries.\n(" + nC + ")", zC.request = nC, ZC[wC] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete QC[wC]
            }), 0), zC
          }
          return new Promise((function(CC) {
            var zC = 4 - bC + 1;
            setTimeout((function() {
              var zC = "cache-bust=" + Date.now();
              ZC[wC] = zC, QC[wC] = bC - 1, CC(__webpack_require__.e(wC))
            }), function(CC) {
              return 500 * Math.pow(2, CC)
            }(zC))
          }))
        }))
      }
    }
  })();
  const CC = Math.SQRT1_2,
    zC = Math.SQRT1_2 / 2,
    ZC = Math.sqrt(3) / 2,
    QC = 2 * CC,
    wC = 2 * zC + ZC;

  function bC(zC, ZC) {
    const QC = ZC > 0 ? ZC + 1 : 0,
      bC = .6 * zC - ZC / CC;
    return Math.max(0, Math.min(bC, (zC - 2 * QC) / wC))
  }
  const nC = [15, 15, 15],
    fC = {
      top: 1,
      left: .85,
      right: .7
    };

  function oC(CC, zC, ZC, nC) {
    const {
      vertices: fC,
      uvs: oC,
      indices: qC,
      shades: FC
    } = CC, NC = function(CC, zC) {
      const ZC = bC(CC, zC),
        nC = QC * ZC,
        fC = wC * ZC;
      return {
        left: (CC - nC) / 2,
        top: (CC - fC) / 2,
        width: nC,
        height: fC
      }
    }(ZC, nC), MC = new Float32Array(fC.length);
    for (let QC = 0; QC < fC.length; QC += 3) MC[QC] = NC.left + fC[QC] * NC.width, MC[QC + 1] = NC.top + fC[QC + 1] * NC.height, MC[QC + 2] = fC[QC + 2];
    const gC = new Float32Array(ZC * ZC).fill(-1 / 0),
      SC = new Uint8ClampedArray(ZC * ZC * 4),
      pC = 255 * CC.alphaCutoff;
    for (let QC = 0; QC < qC.length; QC += 3) {
      const [CC, wC, bC] = [qC[QC], qC[QC + 1], qC[QC + 2]], [nC, fC, WC] = [3 * CC, 3 * wC, 3 * bC], [NC, PC, GC, RC, AC, xC] = [MC[nC], MC[nC + 1], MC[fC], MC[fC + 1], MC[WC], MC[WC + 1]], JC = (GC - NC) * (xC - PC) - (AC - NC) * (RC - PC);
      if (Math.abs(JC) < 1e-9) continue;
      const IC = FC[QC / 3],
        [iC, vC, eC, hC, KC, YC] = [oC[2 * CC], oC[2 * CC + 1], oC[2 * wC], oC[2 * wC + 1], oC[2 * bC], oC[2 * bC + 1]],
        dC = Math.max(0, Math.floor(Math.min(NC, GC, AC))),
        mC = Math.min(ZC - 1, Math.ceil(Math.max(NC, GC, AC))),
        HC = Math.max(0, Math.floor(Math.min(PC, RC, xC))),
        EC = Math.min(ZC - 1, Math.ceil(Math.max(PC, RC, xC)));
      for (let QC = HC; QC <= EC; QC++)
        for (let CC = dC; CC <= mC; CC++) {
          const [wC, bC] = [CC + .5, QC + .5], oC = ((wC - NC) * (xC - PC) - (AC - NC) * (bC - PC)) / JC, qC = ((GC - NC) * (bC - PC) - (wC - NC) * (RC - PC)) / JC, FC = 1 - oC - qC;
          if (FC < 0 || oC < 0 || qC < 0) continue;
          const dC = FC * MC[nC + 2] + oC * MC[fC + 2] + qC * MC[WC + 2],
            mC = QC * ZC + CC;
          if (dC <= gC[mC]) continue;
          const HC = Math.max(0, Math.min(zC.width - 1, Math.floor((FC * iC + oC * eC + qC * KC) * zC.width))),
            EC = 4 * (Math.max(0, Math.min(zC.height - 1, Math.floor((FC * vC + oC * hC + qC * YC) * zC.height))) * zC.width + HC);
          zC.pixels[EC + 3] < pC || (gC[mC] = dC, SC[4 * mC] = zC.pixels[EC] * IC, SC[4 * mC + 1] = zC.pixels[EC + 1] * IC, SC[4 * mC + 2] = zC.pixels[EC + 2] * IC, SC[4 * mC + 3] = 255)
        }
    }
    return WC(SC, ZC, nC), SC
  }
  let qC = NaN,
    FC = new Int32Array(0);

  function WC(CC, zC, ZC) {
    let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zC => 0 !== CC[4 * zC + 3];
    const wC = new Uint8Array(zC * zC);
    for (let nC = 0; nC < zC * zC; nC++) wC[nC] = QC(nC) ? 1 : 0;
    const bC = (CC, ZC) => CC >= 0 && ZC >= 0 && CC < zC && ZC < zC && 0 === wC[ZC * zC + CC],
      fC = new Float32Array(zC * zC).fill(1 / 0),
      oC = function(CC) {
        if (CC !== qC) {
          const zC = Math.ceil(CC + 1),
            ZC = [];
          for (let QC = -zC; QC <= zC; QC++)
            for (let wC = -zC; wC <= zC; wC++) {
              const zC = wC * wC + QC * QC;
              zC > 0 && zC < (CC + 1) ** 2 && ZC.push(wC, QC, zC)
            }
          qC = CC, FC = Int32Array.from(ZC)
        }
        return FC
      }(ZC);
    for (let nC = 0; nC < zC; nC++)
      for (let CC = 0; CC < zC; CC++) {
        if (1 === wC[nC * zC + CC] && (bC(CC - 1, nC) || bC(CC + 1, nC) || bC(CC, nC - 1) || bC(CC, nC + 1)))
          for (let ZC = 0; ZC < oC.length; ZC += 3) {
            const QC = CC + oC[ZC],
              wC = nC + oC[ZC + 1];
            if (QC >= 0 && wC >= 0 && QC < zC && wC < zC) {
              const CC = wC * zC + QC;
              fC[CC] = Math.min(fC[CC], oC[ZC + 2])
            }
          }
      }
    for (let qC = 0; qC < zC * zC; qC++) 1 !== wC[qC] && fC[qC] !== 1 / 0 && (CC.set(nC, 4 * qC), CC[4 * qC + 3] = Math.round(255 * Math.min(1, ZC + 1 - Math.sqrt(fC[qC]))))
  }
  const NC = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    MC = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    gC = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const SC = 1e-6;

  function pC(CC, zC, ZC, QC) {
    let {
      origin: wC,
      across: bC,
      down: nC,
      texture: fC,
      rect: [oC, qC, FC, WC],
      shade: NC
    } = QC;
    const MC = bC.x * nC.y - bC.y * nC.x;
    if (Math.abs(MC) < 1e-9) return;
    const gC = [wC.x, wC.x + bC.x, wC.x + nC.x, wC.x + bC.x + nC.x],
      pC = [wC.y, wC.y + bC.y, wC.y + nC.y, wC.y + bC.y + nC.y],
      PC = Math.max(0, Math.floor(Math.min(...gC))),
      GC = Math.min(ZC - 1, Math.ceil(Math.max(...gC))),
      RC = Math.max(0, Math.floor(Math.min(...pC))),
      AC = Math.min(ZC - 1, Math.ceil(Math.max(...pC)));
    for (let xC = RC; xC <= AC; xC++)
      for (let QC = PC; QC <= GC; QC++) {
        const gC = QC + .5 - wC.x,
          pC = xC + .5 - wC.y,
          PC = (gC * nC.y - pC * nC.x) / MC,
          GC = (bC.x * pC - bC.y * gC) / MC;
        if (PC < -SC || PC > 1 + SC || GC < -SC || GC > 1 + SC) continue;
        const RC = xC * ZC + QC;
        zC[RC] = 1;
        const AC = oC + Math.min(Math.max(PC, 0), 1) * (FC - oC),
          JC = qC + Math.min(Math.max(GC, 0), 1) * (WC - qC),
          IC = Math.min(fC.width - 1, Math.floor(AC * fC.width)),
          iC = 4 * (Math.min(fC.height - 1, Math.floor(JC * fC.height)) * fC.width + IC),
          vC = fC.pixels[iC + 3] / 255;
        if (0 === vC) continue;
        const eC = 4 * RC,
          hC = CC[eC + 3] / 255 * (1 - vC),
          KC = vC + hC;
        for (let zC = 0; zC < 3; zC++) CC[eC + zC] = (fC.pixels[iC + zC] * NC * vC + CC[eC + zC] * hC) / KC;
        CC[eC + 3] = 255 * KC
      }
  }

  function PC(CC, zC, ZC) {
    const QC = CC.get(zC);
    if (void 0 === QC) throw new Error(`no ${ZC} was sent for ${zC.slice(0,100)}`);
    return QC
  }
  const GC = {
      pixelsOf(CC) {
        const zC = new OffscreenCanvas(CC.width, CC.height),
          ZC = zC.getContext("2d");
        if (!ZC) throw new Error("no 2D context");
        return ZC.drawImage(CC, 0, 0), CC.close(), {
          width: zC.width,
          height: zC.height,
          pixels: ZC.getImageData(0, 0, zC.width, zC.height).data
        }
      },
      async encode(CC, zC) {
        const ZC = new OffscreenCanvas(zC, zC),
          QC = ZC.getContext("2d");
        if (!QC) throw new Error("no 2D context");
        QC.putImageData(new ImageData(CC, zC, zC), 0, 0);
        const wC = await ZC.convertToBlob();
        return new Promise(((CC, zC) => {
          const ZC = new FileReader;
          ZC.onload = () => {
            CC(ZC.result)
          }, ZC.onerror = () => {
            var CC;
            zC(null !== (CC = ZC.error) && void 0 !== CC ? CC : new Error("the icon did not encode"))
          }, ZC.readAsDataURL(wC)
        }))
      }
    },
    RC = globalThis.WorkerGlobalScope;
  void 0 !== RC && globalThis instanceof RC && function(QC, wC) {
    const nC = new Map,
      qC = new Map,
      FC = (CC, zC, ZC) => {
        (async () => {
          try {
            QC.postMessage({
              type: "drawn",
              id: CC,
              url: await wC.encode(ZC(), zC)
            })
          } catch (bC) {
            QC.postMessage({
              type: "failed",
              message: String(bC)
            })
          }
        })()
      };
    QC.onmessage = QC => {
      let {
        data: SC
      } = QC;
      if ("texture" === SC.type) nC.set(SC.url, wC.pixelsOf(SC.bitmap));
      else if ("model" === SC.type) qC.set(SC.name, {
        geometry: SC.geometry,
        texture: wC.pixelsOf(SC.bitmap)
      });
      else if ("draw" === SC.type) {
        const {
          id: QC,
          top: wC,
          left: oC,
          right: qC,
          itemType: GC,
          size: RC,
          outlineWidth: AC
        } = SC;
        FC(QC, RC, (() => function(QC, wC, nC, oC) {
          const qC = bC(nC, oC),
            FC = qC * CC,
            NC = qC * zC,
            MC = qC * ZC,
            gC = Math.max(...wC.boxes.map((CC => CC[4]))),
            SC = nC / 2,
            PC = NC + (nC - NC - NC - gC * MC) / 2,
            GC = (CC, zC, ZC) => ({
              x: SC + (CC - ZC) * FC,
              y: PC - NC + (CC + ZC) * NC + (gC - zC) * MC
            }),
            RC = (CC, zC, ZC, QC, bC, nC) => ({
              origin: CC,
              across: {
                x: zC.x - CC.x,
                y: zC.y - CC.y
              },
              down: {
                x: ZC.x - CC.x,
                y: ZC.y - CC.y
              },
              texture: QC,
              rect: wC.cropFaces ? bC : [0, 0, 1, 1],
              shade: nC
            }),
            AC = new Uint8ClampedArray(nC * nC * 4),
            xC = new Uint8Array(nC * nC),
            JC = fC;
          for (const [CC, zC, ZC, bC, fC, WC] of wC.boxes) {
            const wC = RC(GC(bC, fC, WC), GC(bC, fC, ZC), GC(bC, zC, WC), QC.right, [1 - WC, 1 - fC, 1 - ZC, 1 - zC], JC.right),
              oC = RC(GC(CC, fC, WC), GC(bC, fC, WC), GC(CC, zC, WC), QC.left, [CC, 1 - fC, bC, 1 - zC], JC.left),
              qC = RC(GC(CC, fC, ZC), GC(bC, fC, ZC), GC(CC, fC, WC), QC.top, [CC, ZC, bC, WC], JC.top);
            for (const CC of [wC, oC, qC]) pC(AC, xC, nC, CC)
          }
          return WC(AC, nC, oC, (CC => 1 === xC[CC])), AC
        }({
          top: PC(nC, wC, "texture"),
          left: PC(nC, oC, "texture"),
          right: PC(nC, qC, "texture")
        }, function(CC) {
          return "SlabBlock" === CC ? MC : "StairsBlock" === CC ? gC : NC
        }(GC), RC, AC)))
      } else {
        const {
          id: CC,
          name: zC,
          size: ZC,
          outlineWidth: QC
        } = SC;
        FC(CC, ZC, (() => {
          const {
            geometry: CC,
            texture: wC
          } = PC(qC, zC, "model");
          return oC(CC, wC, ZC, QC)
        }))
      }
    }, QC.postMessage({
      type: "started"
    })
  }(globalThis, GC)
})();