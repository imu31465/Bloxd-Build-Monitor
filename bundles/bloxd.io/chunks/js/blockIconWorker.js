(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var QQ = __webpack_require__.u,
        FQ = __webpack_require__.e,
        wQ = {},
        LQ = {};
      __webpack_require__.u = function(FQ) {
        return QQ(FQ) + (wQ.hasOwnProperty(FQ) ? "?" + wQ[FQ] : "")
      }, __webpack_require__.e = function(qQ) {
        return FQ(qQ).catch((function(FQ) {
          var oQ = LQ.hasOwnProperty(qQ) ? LQ[qQ] : 4;
          if (oQ < 1) {
            var DQ = QQ(qQ);
            throw FQ.message = "Loading chunk " + qQ + " failed after 4 retries.\n(" + DQ + ")", FQ.request = DQ, wQ[qQ] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete LQ[qQ]
            }), 0), FQ
          }
          return new Promise((function(QQ) {
            var FQ = 4 - oQ + 1;
            setTimeout((function() {
              var FQ = "cache-bust=" + Date.now();
              wQ[qQ] = FQ, LQ[qQ] = oQ - 1, QQ(__webpack_require__.e(qQ))
            }), function(QQ) {
              return 500 * Math.pow(2, QQ)
            }(FQ))
          }))
        }))
      }
    }
  })();
  const QQ = [15, 15, 15],
    FQ = {
      top: 1,
      left: .85,
      right: .7
    };

  function wQ(FQ, wQ, LQ) {
    let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ => 0 !== FQ[4 * QQ + 3];
    const oQ = (QQ, FQ) => QQ < 0 || FQ < 0 || QQ >= wQ || FQ >= wQ || !qQ(FQ * wQ + QQ),
      DQ = [];
    for (let QQ = 0; QQ < wQ; QQ++)
      for (let FQ = 0; FQ < wQ; FQ++)
        if (!oQ(FQ, QQ)) QQ: for (let qQ = -LQ; qQ <= LQ; qQ++) {
          const kQ = LQ - Math.abs(qQ);
          for (let LQ = -kQ; LQ <= kQ; LQ++)
            if (oQ(FQ + LQ, QQ + qQ)) {
              DQ.push(QQ * wQ + FQ);
              break QQ
            }
        }
    for (const kQ of DQ) FQ.set(QQ, 4 * kQ), FQ[4 * kQ + 3] = 255
  }
  const LQ = Math.SQRT1_2,
    qQ = Math.sqrt(3) / 2,
    oQ = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    DQ = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    kQ = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const vQ = 1e-6;

  function mQ(QQ, FQ, wQ, LQ) {
    let {
      origin: qQ,
      across: oQ,
      down: DQ,
      texture: kQ,
      rect: [mQ, uQ, HQ, bQ],
      shade: YQ
    } = LQ;
    const xQ = oQ.x * DQ.y - oQ.y * DQ.x;
    if (Math.abs(xQ) < 1e-9) return;
    const AQ = [qQ.x, qQ.x + oQ.x, qQ.x + DQ.x, qQ.x + oQ.x + DQ.x],
      tQ = [qQ.y, qQ.y + oQ.y, qQ.y + DQ.y, qQ.y + oQ.y + DQ.y],
      eQ = Math.max(0, Math.floor(Math.min(...AQ))),
      MQ = Math.min(wQ - 1, Math.ceil(Math.max(...AQ))),
      GQ = Math.max(0, Math.floor(Math.min(...tQ))),
      pQ = Math.min(wQ - 1, Math.ceil(Math.max(...tQ)));
    for (let cQ = GQ; cQ <= pQ; cQ++)
      for (let LQ = eQ; LQ <= MQ; LQ++) {
        const AQ = LQ + .5 - qQ.x,
          tQ = cQ + .5 - qQ.y,
          eQ = (AQ * DQ.y - tQ * DQ.x) / xQ,
          MQ = (oQ.x * tQ - oQ.y * AQ) / xQ;
        if (eQ < -vQ || eQ > 1 + vQ || MQ < -vQ || MQ > 1 + vQ) continue;
        const GQ = cQ * wQ + LQ;
        FQ[GQ] = 1;
        const pQ = mQ + Math.min(Math.max(eQ, 0), 1) * (HQ - mQ),
          CQ = uQ + Math.min(Math.max(MQ, 0), 1) * (bQ - uQ),
          SQ = Math.min(kQ.width - 1, Math.floor(pQ * kQ.width)),
          iQ = 4 * (Math.min(kQ.height - 1, Math.floor(CQ * kQ.height)) * kQ.width + SQ),
          WQ = kQ.pixels[iQ + 3] / 255;
        if (0 === WQ) continue;
        const RQ = 4 * GQ,
          OQ = QQ[RQ + 3] / 255 * (1 - WQ),
          sQ = WQ + OQ;
        for (let FQ = 0; FQ < 3; FQ++) QQ[RQ + FQ] = (kQ.pixels[iQ + FQ] * YQ * WQ + QQ[RQ + FQ] * OQ) / sQ;
        QQ[RQ + 3] = 255 * sQ
      }
  }

  function uQ(QQ, FQ, wQ) {
    const LQ = QQ.get(FQ);
    if (void 0 === LQ) throw new Error(`no ${wQ} was sent for ${FQ.slice(0,100)}`);
    return LQ
  }
  const HQ = {
      pixelsOf(QQ) {
        const FQ = new OffscreenCanvas(QQ.width, QQ.height),
          wQ = FQ.getContext("2d");
        if (!wQ) throw new Error("no 2D context");
        return wQ.drawImage(QQ, 0, 0), QQ.close(), {
          width: FQ.width,
          height: FQ.height,
          pixels: wQ.getImageData(0, 0, FQ.width, FQ.height).data
        }
      },
      async encode(QQ, FQ) {
        const wQ = new OffscreenCanvas(FQ, FQ),
          LQ = wQ.getContext("2d");
        if (!LQ) throw new Error("no 2D context");
        LQ.putImageData(new ImageData(QQ, FQ, FQ), 0, 0);
        const qQ = await wQ.convertToBlob();
        return new Promise(((QQ, FQ) => {
          const wQ = new FileReader;
          wQ.onload = () => {
            QQ(wQ.result)
          }, wQ.onerror = () => {
            var QQ;
            FQ(null !== (QQ = wQ.error) && void 0 !== QQ ? QQ : new Error("the icon did not encode"))
          }, wQ.readAsDataURL(qQ)
        }))
      }
    },
    bQ = globalThis.WorkerGlobalScope;
  void 0 !== bQ && globalThis instanceof bQ && function(QQ, vQ) {
    const HQ = new Map,
      bQ = new Map,
      YQ = (FQ, wQ, LQ) => {
        (async () => {
          try {
            QQ.postMessage({
              type: "drawn",
              id: FQ,
              url: await vQ.encode(LQ(), wQ)
            })
          } catch (qQ) {
            QQ.postMessage({
              type: "failed",
              message: String(qQ)
            })
          }
        })()
      };
    QQ.onmessage = QQ => {
      let {
        data: xQ
      } = QQ;
      if ("texture" === xQ.type) HQ.set(xQ.url, vQ.pixelsOf(xQ.bitmap));
      else if ("model" === xQ.type) bQ.set(xQ.name, {
        geometry: xQ.geometry,
        texture: vQ.pixelsOf(xQ.bitmap)
      });
      else if ("draw" === xQ.type) {
        const {
          id: QQ,
          top: vQ,
          left: bQ,
          right: AQ,
          itemType: tQ,
          size: eQ,
          outlineWidth: MQ
        } = xQ;
        YQ(QQ, eQ, (() => function(QQ, oQ, DQ, kQ) {
          const vQ = .6 * DQ,
            uQ = vQ * LQ,
            HQ = vQ * LQ * .5,
            bQ = vQ * qQ,
            YQ = Math.max(...oQ.boxes.map((QQ => QQ[4]))),
            xQ = uQ / 2 + (DQ - uQ) / 2,
            AQ = HQ + (DQ - HQ - HQ - YQ * bQ) / 2,
            tQ = (QQ, FQ, wQ) => ({
              x: xQ + (QQ - wQ) * uQ,
              y: AQ - HQ + (QQ + wQ) * HQ + (YQ - FQ) * bQ
            }),
            eQ = (QQ, FQ, wQ, LQ, qQ, DQ) => ({
              origin: QQ,
              across: {
                x: FQ.x - QQ.x,
                y: FQ.y - QQ.y
              },
              down: {
                x: wQ.x - QQ.x,
                y: wQ.y - QQ.y
              },
              texture: LQ,
              rect: oQ.cropFaces ? qQ : [0, 0, 1, 1],
              shade: DQ
            }),
            MQ = new Uint8ClampedArray(DQ * DQ * 4),
            GQ = new Uint8Array(DQ * DQ),
            pQ = FQ;
          for (const [FQ, wQ, LQ, qQ, cQ, CQ] of oQ.boxes) {
            const oQ = eQ(tQ(qQ, cQ, CQ), tQ(qQ, cQ, LQ), tQ(qQ, wQ, CQ), QQ.right, [1 - CQ, 1 - cQ, 1 - LQ, 1 - wQ], pQ.right),
              kQ = eQ(tQ(FQ, cQ, CQ), tQ(qQ, cQ, CQ), tQ(FQ, wQ, CQ), QQ.left, [FQ, 1 - cQ, qQ, 1 - wQ], pQ.left),
              vQ = eQ(tQ(FQ, cQ, LQ), tQ(qQ, cQ, LQ), tQ(FQ, cQ, CQ), QQ.top, [FQ, LQ, qQ, CQ], pQ.top);
            for (const QQ of [oQ, kQ, vQ]) mQ(MQ, GQ, DQ, QQ)
          }
          return wQ(MQ, DQ, kQ, (QQ => 1 === GQ[QQ])), MQ
        }({
          top: uQ(HQ, vQ, "texture"),
          left: uQ(HQ, bQ, "texture"),
          right: uQ(HQ, AQ, "texture")
        }, function(QQ) {
          return "SlabBlock" === QQ ? DQ : "StairsBlock" === QQ ? kQ : oQ
        }(tQ), eQ, MQ)))
      } else {
        const {
          id: QQ,
          name: FQ,
          size: LQ,
          outlineWidth: qQ
        } = xQ;
        YQ(QQ, LQ, (() => {
          const {
            geometry: QQ,
            texture: oQ
          } = uQ(bQ, FQ, "model");
          return function(QQ, FQ, LQ, qQ) {
            const {
              vertices: oQ,
              uvs: DQ,
              indices: kQ,
              shades: vQ
            } = QQ, mQ = .03125 * LQ, uQ = LQ - 2 * mQ, HQ = new Float32Array(oQ.length);
            for (let wQ = 0; wQ < oQ.length; wQ += 3) HQ[wQ] = mQ + oQ[wQ] * uQ, HQ[wQ + 1] = mQ + oQ[wQ + 1] * uQ, HQ[wQ + 2] = oQ[wQ + 2];
            const bQ = new Float32Array(LQ * LQ).fill(-1 / 0),
              YQ = new Uint8ClampedArray(LQ * LQ * 4),
              xQ = 255 * QQ.alphaCutoff;
            for (let wQ = 0; wQ < kQ.length; wQ += 3) {
              const [QQ, qQ, oQ] = [kQ[wQ], kQ[wQ + 1], kQ[wQ + 2]], [mQ, uQ, AQ] = [3 * QQ, 3 * qQ, 3 * oQ], [tQ, eQ, MQ, GQ, pQ, cQ] = [HQ[mQ], HQ[mQ + 1], HQ[uQ], HQ[uQ + 1], HQ[AQ], HQ[AQ + 1]], CQ = (MQ - tQ) * (cQ - eQ) - (pQ - tQ) * (GQ - eQ);
              if (Math.abs(CQ) < 1e-9) continue;
              const SQ = vQ[wQ / 3],
                [iQ, WQ, RQ, OQ, sQ, rQ] = [DQ[2 * QQ], DQ[2 * QQ + 1], DQ[2 * qQ], DQ[2 * qQ + 1], DQ[2 * oQ], DQ[2 * oQ + 1]],
                IQ = Math.max(0, Math.floor(Math.min(tQ, MQ, pQ))),
                UQ = Math.min(LQ - 1, Math.ceil(Math.max(tQ, MQ, pQ))),
                NQ = Math.max(0, Math.floor(Math.min(eQ, GQ, cQ))),
                TQ = Math.min(LQ - 1, Math.ceil(Math.max(eQ, GQ, cQ)));
              for (let wQ = NQ; wQ <= TQ; wQ++)
                for (let QQ = IQ; QQ <= UQ; QQ++) {
                  const [qQ, oQ] = [QQ + .5, wQ + .5], DQ = ((qQ - tQ) * (cQ - eQ) - (pQ - tQ) * (oQ - eQ)) / CQ, kQ = ((MQ - tQ) * (oQ - eQ) - (qQ - tQ) * (GQ - eQ)) / CQ, vQ = 1 - DQ - kQ;
                  if (vQ < 0 || DQ < 0 || kQ < 0) continue;
                  const IQ = vQ * HQ[mQ + 2] + DQ * HQ[uQ + 2] + kQ * HQ[AQ + 2],
                    UQ = wQ * LQ + QQ;
                  if (IQ <= bQ[UQ]) continue;
                  const NQ = Math.max(0, Math.min(FQ.width - 1, Math.floor((vQ * iQ + DQ * RQ + kQ * sQ) * FQ.width))),
                    TQ = 4 * (Math.max(0, Math.min(FQ.height - 1, Math.floor((vQ * WQ + DQ * OQ + kQ * rQ) * FQ.height))) * FQ.width + NQ);
                  FQ.pixels[TQ + 3] < xQ || (bQ[UQ] = IQ, YQ[4 * UQ] = FQ.pixels[TQ] * SQ, YQ[4 * UQ + 1] = FQ.pixels[TQ + 1] * SQ, YQ[4 * UQ + 2] = FQ.pixels[TQ + 2] * SQ, YQ[4 * UQ + 3] = 255)
                }
            }
            return wQ(YQ, LQ, qQ), YQ
          }(QQ, oQ, LQ, qQ)
        }))
      }
    }, QQ.postMessage({
      type: "started"
    })
  }(globalThis, HQ)
})();