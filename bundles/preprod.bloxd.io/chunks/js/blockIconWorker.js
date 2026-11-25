(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var QQ = __webpack_require__.u,
        WQ = __webpack_require__.e,
        XQ = {},
        wQ = {};
      __webpack_require__.u = function(WQ) {
        return QQ(WQ) + (XQ.hasOwnProperty(WQ) ? "?" + XQ[WQ] : "")
      }, __webpack_require__.e = function(qQ) {
        return WQ(qQ).catch((function(WQ) {
          var TQ = wQ.hasOwnProperty(qQ) ? wQ[qQ] : 4;
          if (TQ < 1) {
            var zQ = QQ(qQ);
            if (WQ.message = "Loading chunk " + qQ + " failed after 4 retries.\n(" + zQ + ")", WQ.request = zQ, XQ[qQ] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete wQ[qQ]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === WQ.code) {
              var sQ = __webpack_require__.miniCssF(qQ);
              WQ.message = WQ.message.replace("Loading chunk", "Loading CSS chunk").replace(zQ, sQ), WQ.request = sQ
            }
            throw WQ
          }
          return new Promise((function(QQ) {
            var WQ = 4 - TQ + 1;
            setTimeout((function() {
              var WQ = "cache-bust=" + Date.now();
              XQ[qQ] = WQ, wQ[qQ] = TQ - 1, QQ(__webpack_require__.e(qQ))
            }), function(QQ) {
              return 500 * Math.pow(2, QQ)
            }(WQ))
          }))
        }))
      }
    }
  })();
  const QQ = Math.SQRT1_2,
    WQ = Math.SQRT1_2 / 2,
    XQ = Math.sqrt(3) / 2,
    wQ = 2 * QQ,
    qQ = 2 * WQ + XQ;

  function TQ(WQ, XQ) {
    const wQ = XQ > 0 ? XQ + 1 : 0,
      TQ = .6 * WQ - XQ / QQ;
    return Math.max(0, Math.min(TQ, (WQ - 2 * wQ) / qQ))
  }
  const zQ = [15, 15, 15],
    sQ = {
      top: 1,
      left: .85,
      right: .7
    };

  function FQ(QQ, WQ, XQ, zQ) {
    const {
      vertices: sQ,
      uvs: FQ,
      indices: PQ,
      shades: gQ
    } = QQ, rQ = function(QQ, WQ) {
      const XQ = TQ(QQ, WQ),
        zQ = wQ * XQ,
        sQ = qQ * XQ;
      return {
        left: (QQ - zQ) / 2,
        top: (QQ - sQ) / 2,
        width: zQ,
        height: sQ
      }
    }(XQ, zQ), IQ = new Float32Array(sQ.length);
    for (let wQ = 0; wQ < sQ.length; wQ += 3) IQ[wQ] = rQ.left + sQ[wQ] * rQ.width, IQ[wQ + 1] = rQ.top + sQ[wQ + 1] * rQ.height, IQ[wQ + 2] = sQ[wQ + 2];
    const jQ = new Float32Array(XQ * XQ).fill(-1 / 0),
      BQ = new Uint8ClampedArray(XQ * XQ * 4),
      yQ = 255 * QQ.alphaCutoff;
    for (let wQ = 0; wQ < PQ.length; wQ += 3) {
      const [QQ, qQ, TQ] = [PQ[wQ], PQ[wQ + 1], PQ[wQ + 2]], [zQ, sQ, JQ] = [3 * QQ, 3 * qQ, 3 * TQ], [rQ, VQ, DQ, pQ, GQ, UQ] = [IQ[zQ], IQ[zQ + 1], IQ[sQ], IQ[sQ + 1], IQ[JQ], IQ[JQ + 1]], bQ = (DQ - rQ) * (UQ - VQ) - (GQ - rQ) * (pQ - VQ);
      if (Math.abs(bQ) < 1e-9) continue;
      const vQ = gQ[wQ / 3],
        [dQ, HQ, aQ, lQ, hQ, iQ] = [FQ[2 * QQ], FQ[2 * QQ + 1], FQ[2 * qQ], FQ[2 * qQ + 1], FQ[2 * TQ], FQ[2 * TQ + 1]],
        cQ = Math.max(0, Math.floor(Math.min(rQ, DQ, GQ))),
        AQ = Math.min(XQ - 1, Math.ceil(Math.max(rQ, DQ, GQ))),
        RQ = Math.max(0, Math.floor(Math.min(VQ, pQ, UQ))),
        EQ = Math.min(XQ - 1, Math.ceil(Math.max(VQ, pQ, UQ)));
      for (let wQ = RQ; wQ <= EQ; wQ++)
        for (let QQ = cQ; QQ <= AQ; QQ++) {
          const [qQ, TQ] = [QQ + .5, wQ + .5], FQ = ((qQ - rQ) * (UQ - VQ) - (GQ - rQ) * (TQ - VQ)) / bQ, PQ = ((DQ - rQ) * (TQ - VQ) - (qQ - rQ) * (pQ - VQ)) / bQ, gQ = 1 - FQ - PQ;
          if (gQ < 0 || FQ < 0 || PQ < 0) continue;
          const cQ = gQ * IQ[zQ + 2] + FQ * IQ[sQ + 2] + PQ * IQ[JQ + 2],
            AQ = wQ * XQ + QQ;
          if (cQ <= jQ[AQ]) continue;
          const RQ = Math.max(0, Math.min(WQ.width - 1, Math.floor((gQ * dQ + FQ * aQ + PQ * hQ) * WQ.width))),
            EQ = 4 * (Math.max(0, Math.min(WQ.height - 1, Math.floor((gQ * HQ + FQ * lQ + PQ * iQ) * WQ.height))) * WQ.width + RQ);
          WQ.pixels[EQ + 3] < yQ || (jQ[AQ] = cQ, BQ[4 * AQ] = WQ.pixels[EQ] * vQ, BQ[4 * AQ + 1] = WQ.pixels[EQ + 1] * vQ, BQ[4 * AQ + 2] = WQ.pixels[EQ + 2] * vQ, BQ[4 * AQ + 3] = 255)
        }
    }
    return JQ(BQ, XQ, zQ), BQ
  }
  let PQ = NaN,
    gQ = new Int32Array(0);

  function JQ(QQ, WQ, XQ) {
    let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WQ => 0 !== QQ[4 * WQ + 3];
    const qQ = new Uint8Array(WQ * WQ);
    for (let zQ = 0; zQ < WQ * WQ; zQ++) qQ[zQ] = wQ(zQ) ? 1 : 0;
    const TQ = (QQ, XQ) => QQ >= 0 && XQ >= 0 && QQ < WQ && XQ < WQ && 0 === qQ[XQ * WQ + QQ],
      sQ = new Float32Array(WQ * WQ).fill(1 / 0),
      FQ = function(QQ) {
        if (QQ !== PQ) {
          const WQ = Math.ceil(QQ + 1),
            XQ = [];
          for (let wQ = -WQ; wQ <= WQ; wQ++)
            for (let qQ = -WQ; qQ <= WQ; qQ++) {
              const WQ = qQ * qQ + wQ * wQ;
              WQ > 0 && WQ < (QQ + 1) ** 2 && XQ.push(qQ, wQ, WQ)
            }
          PQ = QQ, gQ = Int32Array.from(XQ)
        }
        return gQ
      }(XQ);
    for (let zQ = 0; zQ < WQ; zQ++)
      for (let QQ = 0; QQ < WQ; QQ++) {
        if (1 === qQ[zQ * WQ + QQ] && (TQ(QQ - 1, zQ) || TQ(QQ + 1, zQ) || TQ(QQ, zQ - 1) || TQ(QQ, zQ + 1)))
          for (let XQ = 0; XQ < FQ.length; XQ += 3) {
            const wQ = QQ + FQ[XQ],
              qQ = zQ + FQ[XQ + 1];
            if (wQ >= 0 && qQ >= 0 && wQ < WQ && qQ < WQ) {
              const QQ = qQ * WQ + wQ;
              sQ[QQ] = Math.min(sQ[QQ], FQ[XQ + 2])
            }
          }
      }
    for (let PQ = 0; PQ < WQ * WQ; PQ++) 1 !== qQ[PQ] && sQ[PQ] !== 1 / 0 && (QQ.set(zQ, 4 * PQ), QQ[4 * PQ + 3] = Math.round(255 * Math.min(1, XQ + 1 - Math.sqrt(sQ[PQ]))))
  }
  const rQ = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    IQ = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    jQ = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const BQ = 1e-6;

  function yQ(QQ, WQ, XQ, wQ) {
    let {
      origin: qQ,
      across: TQ,
      down: zQ,
      texture: sQ,
      rect: [FQ, PQ, gQ, JQ],
      shade: rQ
    } = wQ;
    const IQ = TQ.x * zQ.y - TQ.y * zQ.x;
    if (Math.abs(IQ) < 1e-9) return;
    const jQ = [qQ.x, qQ.x + TQ.x, qQ.x + zQ.x, qQ.x + TQ.x + zQ.x],
      yQ = [qQ.y, qQ.y + TQ.y, qQ.y + zQ.y, qQ.y + TQ.y + zQ.y],
      VQ = Math.max(0, Math.floor(Math.min(...jQ))),
      DQ = Math.min(XQ - 1, Math.ceil(Math.max(...jQ))),
      pQ = Math.max(0, Math.floor(Math.min(...yQ))),
      GQ = Math.min(XQ - 1, Math.ceil(Math.max(...yQ)));
    for (let UQ = pQ; UQ <= GQ; UQ++)
      for (let wQ = VQ; wQ <= DQ; wQ++) {
        const jQ = wQ + .5 - qQ.x,
          yQ = UQ + .5 - qQ.y,
          VQ = (jQ * zQ.y - yQ * zQ.x) / IQ,
          DQ = (TQ.x * yQ - TQ.y * jQ) / IQ;
        if (VQ < -BQ || VQ > 1 + BQ || DQ < -BQ || DQ > 1 + BQ) continue;
        const pQ = UQ * XQ + wQ;
        WQ[pQ] = 1;
        const GQ = FQ + Math.min(Math.max(VQ, 0), 1) * (gQ - FQ),
          bQ = PQ + Math.min(Math.max(DQ, 0), 1) * (JQ - PQ),
          vQ = Math.min(sQ.width - 1, Math.floor(GQ * sQ.width)),
          dQ = 4 * (Math.min(sQ.height - 1, Math.floor(bQ * sQ.height)) * sQ.width + vQ),
          HQ = sQ.pixels[dQ + 3] / 255;
        if (0 === HQ) continue;
        const aQ = 4 * pQ,
          lQ = QQ[aQ + 3] / 255 * (1 - HQ),
          hQ = HQ + lQ;
        for (let WQ = 0; WQ < 3; WQ++) QQ[aQ + WQ] = (sQ.pixels[dQ + WQ] * rQ * HQ + QQ[aQ + WQ] * lQ) / hQ;
        QQ[aQ + 3] = 255 * hQ
      }
  }

  function VQ(QQ, WQ, XQ) {
    const wQ = QQ.get(WQ);
    if (void 0 === wQ) throw new Error(`no ${XQ} was sent for ${WQ.slice(0,100)}`);
    return wQ
  }
  const DQ = {
      pixelsOf(QQ) {
        const WQ = new OffscreenCanvas(QQ.width, QQ.height),
          XQ = WQ.getContext("2d");
        if (!XQ) throw new Error("no 2D context");
        return XQ.drawImage(QQ, 0, 0), QQ.close(), {
          width: WQ.width,
          height: WQ.height,
          pixels: XQ.getImageData(0, 0, WQ.width, WQ.height).data
        }
      },
      async encode(QQ, WQ) {
        const XQ = new OffscreenCanvas(WQ, WQ),
          wQ = XQ.getContext("2d");
        if (!wQ) throw new Error("no 2D context");
        wQ.putImageData(new ImageData(QQ, WQ, WQ), 0, 0);
        const qQ = await XQ.convertToBlob();
        return new Promise(((QQ, WQ) => {
          const XQ = new FileReader;
          XQ.onload = () => {
            QQ(XQ.result)
          }, XQ.onerror = () => {
            var QQ;
            WQ(null !== (QQ = XQ.error) && void 0 !== QQ ? QQ : new Error("the icon did not encode"))
          }, XQ.readAsDataURL(qQ)
        }))
      }
    },
    pQ = globalThis.WorkerGlobalScope;
  void 0 !== pQ && globalThis instanceof pQ && function(wQ, qQ) {
    const zQ = new Map,
      PQ = new Map,
      gQ = (QQ, WQ, XQ) => {
        (async () => {
          try {
            wQ.postMessage({
              type: "drawn",
              id: QQ,
              url: await qQ.encode(XQ(), WQ)
            })
          } catch (TQ) {
            wQ.postMessage({
              type: "failed",
              message: String(TQ)
            })
          }
        })()
      };
    wQ.onmessage = wQ => {
      let {
        data: BQ
      } = wQ;
      if ("texture" === BQ.type) zQ.set(BQ.url, qQ.pixelsOf(BQ.bitmap));
      else if ("model" === BQ.type) PQ.set(BQ.name, {
        geometry: BQ.geometry,
        texture: qQ.pixelsOf(BQ.bitmap)
      });
      else if ("draw" === BQ.type) {
        const {
          id: wQ,
          top: qQ,
          left: FQ,
          right: PQ,
          itemType: DQ,
          size: pQ,
          outlineWidth: GQ
        } = BQ;
        gQ(wQ, pQ, (() => function(wQ, qQ, zQ, FQ) {
          const PQ = TQ(zQ, FQ),
            gQ = PQ * QQ,
            rQ = PQ * WQ,
            IQ = PQ * XQ,
            jQ = Math.max(...qQ.boxes.map((QQ => QQ[4]))),
            BQ = zQ / 2,
            VQ = rQ + (zQ - rQ - rQ - jQ * IQ) / 2,
            DQ = (QQ, WQ, XQ) => ({
              x: BQ + (QQ - XQ) * gQ,
              y: VQ - rQ + (QQ + XQ) * rQ + (jQ - WQ) * IQ
            }),
            pQ = (QQ, WQ, XQ, wQ, TQ, zQ) => ({
              origin: QQ,
              across: {
                x: WQ.x - QQ.x,
                y: WQ.y - QQ.y
              },
              down: {
                x: XQ.x - QQ.x,
                y: XQ.y - QQ.y
              },
              texture: wQ,
              rect: qQ.cropFaces ? TQ : [0, 0, 1, 1],
              shade: zQ
            }),
            GQ = new Uint8ClampedArray(zQ * zQ * 4),
            UQ = new Uint8Array(zQ * zQ),
            bQ = sQ;
          for (const [QQ, WQ, XQ, TQ, sQ, JQ] of qQ.boxes) {
            const qQ = pQ(DQ(TQ, sQ, JQ), DQ(TQ, sQ, XQ), DQ(TQ, WQ, JQ), wQ.right, [1 - JQ, 1 - sQ, 1 - XQ, 1 - WQ], bQ.right),
              FQ = pQ(DQ(QQ, sQ, JQ), DQ(TQ, sQ, JQ), DQ(QQ, WQ, JQ), wQ.left, [QQ, 1 - sQ, TQ, 1 - WQ], bQ.left),
              PQ = pQ(DQ(QQ, sQ, XQ), DQ(TQ, sQ, XQ), DQ(QQ, sQ, JQ), wQ.top, [QQ, XQ, TQ, JQ], bQ.top);
            for (const QQ of [qQ, FQ, PQ]) yQ(GQ, UQ, zQ, QQ)
          }
          return JQ(GQ, zQ, FQ, (QQ => 1 === UQ[QQ])), GQ
        }({
          top: VQ(zQ, qQ, "texture"),
          left: VQ(zQ, FQ, "texture"),
          right: VQ(zQ, PQ, "texture")
        }, function(QQ) {
          return "SlabBlock" === QQ ? IQ : "StairsBlock" === QQ ? jQ : rQ
        }(DQ), pQ, GQ)))
      } else {
        const {
          id: QQ,
          name: WQ,
          size: XQ,
          outlineWidth: wQ
        } = BQ;
        gQ(QQ, XQ, (() => {
          const {
            geometry: QQ,
            texture: qQ
          } = VQ(PQ, WQ, "model");
          return FQ(QQ, qQ, XQ, wQ)
        }))
      }
    }, wQ.postMessage({
      type: "started"
    })
  }(globalThis, DQ)
})();