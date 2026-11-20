(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var TT = __webpack_require__.u,
        kT = __webpack_require__.e,
        cT = {},
        lT = {};
      __webpack_require__.u = function(kT) {
        return TT(kT) + (cT.hasOwnProperty(kT) ? "?" + cT[kT] : "")
      }, __webpack_require__.e = function(MT) {
        return kT(MT).catch((function(kT) {
          var KT = lT.hasOwnProperty(MT) ? lT[MT] : 4;
          if (KT < 1) {
            var OT = TT(MT);
            throw kT.message = "Loading chunk " + MT + " failed after 4 retries.\n(" + OT + ")", kT.request = OT, cT[MT] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete lT[MT]
            }), 0), kT
          }
          return new Promise((function(TT) {
            var kT = 4 - KT + 1;
            setTimeout((function() {
              var kT = "cache-bust=" + Date.now();
              cT[MT] = kT, lT[MT] = KT - 1, TT(__webpack_require__.e(MT))
            }), function(TT) {
              return 500 * Math.pow(2, TT)
            }(kT))
          }))
        }))
      }
    }
  })();
  const TT = [15, 15, 15],
    kT = {
      top: 1,
      left: .85,
      right: .7
    };

  function cT(kT, cT, lT) {
    let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT => 0 !== kT[4 * TT + 3];
    const KT = (TT, kT) => TT < 0 || kT < 0 || TT >= cT || kT >= cT || !MT(kT * cT + TT),
      OT = [];
    for (let TT = 0; TT < cT; TT++)
      for (let kT = 0; kT < cT; kT++)
        if (!KT(kT, TT)) TT: for (let MT = -lT; MT <= lT; MT++) {
          const yT = lT - Math.abs(MT);
          for (let lT = -yT; lT <= yT; lT++)
            if (KT(kT + lT, TT + MT)) {
              OT.push(TT * cT + kT);
              break TT
            }
        }
    for (const yT of OT) kT.set(TT, 4 * yT), kT[4 * yT + 3] = 255
  }
  const lT = Math.SQRT1_2,
    MT = Math.sqrt(3) / 2,
    KT = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    OT = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    yT = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const fT = 1e-6;

  function xT(TT, kT, cT, lT) {
    let {
      origin: MT,
      across: KT,
      down: OT,
      texture: yT,
      rect: [xT, IT, AT, CT],
      shade: jT
    } = lT;
    const vT = KT.x * OT.y - KT.y * OT.x;
    if (Math.abs(vT) < 1e-9) return;
    const tT = [MT.x, MT.x + KT.x, MT.x + OT.x, MT.x + KT.x + OT.x],
      hT = [MT.y, MT.y + KT.y, MT.y + OT.y, MT.y + KT.y + OT.y],
      NT = Math.max(0, Math.floor(Math.min(...tT))),
      QT = Math.min(cT - 1, Math.ceil(Math.max(...tT))),
      ST = Math.max(0, Math.floor(Math.min(...hT))),
      DT = Math.min(cT - 1, Math.ceil(Math.max(...hT)));
    for (let aT = ST; aT <= DT; aT++)
      for (let lT = NT; lT <= QT; lT++) {
        const tT = lT + .5 - MT.x,
          hT = aT + .5 - MT.y,
          NT = (tT * OT.y - hT * OT.x) / vT,
          QT = (KT.x * hT - KT.y * tT) / vT;
        if (NT < -fT || NT > 1 + fT || QT < -fT || QT > 1 + fT) continue;
        const ST = aT * cT + lT;
        kT[ST] = 1;
        const DT = xT + Math.min(Math.max(NT, 0), 1) * (AT - xT),
          FT = IT + Math.min(Math.max(QT, 0), 1) * (CT - IT),
          rT = Math.min(yT.width - 1, Math.floor(DT * yT.width)),
          PT = 4 * (Math.min(yT.height - 1, Math.floor(FT * yT.height)) * yT.width + rT),
          wT = yT.pixels[PT + 3] / 255;
        if (0 === wT) continue;
        const mT = 4 * ST,
          bT = TT[mT + 3] / 255 * (1 - wT),
          zT = wT + bT;
        for (let kT = 0; kT < 3; kT++) TT[mT + kT] = (yT.pixels[PT + kT] * jT * wT + TT[mT + kT] * bT) / zT;
        TT[mT + 3] = 255 * zT
      }
  }

  function IT(TT, kT, cT) {
    const lT = TT.get(kT);
    if (void 0 === lT) throw new Error(`no ${cT} was sent for ${kT.slice(0,100)}`);
    return lT
  }
  const AT = {
      pixelsOf(TT) {
        const kT = new OffscreenCanvas(TT.width, TT.height),
          cT = kT.getContext("2d");
        if (!cT) throw new Error("no 2D context");
        return cT.drawImage(TT, 0, 0), TT.close(), {
          width: kT.width,
          height: kT.height,
          pixels: cT.getImageData(0, 0, kT.width, kT.height).data
        }
      },
      async encode(TT, kT) {
        const cT = new OffscreenCanvas(kT, kT),
          lT = cT.getContext("2d");
        if (!lT) throw new Error("no 2D context");
        lT.putImageData(new ImageData(TT, kT, kT), 0, 0);
        const MT = await cT.convertToBlob();
        return new Promise(((TT, kT) => {
          const cT = new FileReader;
          cT.onload = () => {
            TT(cT.result)
          }, cT.onerror = () => {
            var TT;
            kT(null !== (TT = cT.error) && void 0 !== TT ? TT : new Error("the icon did not encode"))
          }, cT.readAsDataURL(MT)
        }))
      }
    },
    CT = globalThis.WorkerGlobalScope;
  void 0 !== CT && globalThis instanceof CT && function(TT, fT) {
    const AT = new Map,
      CT = new Map,
      jT = (kT, cT, lT) => {
        (async () => {
          try {
            TT.postMessage({
              type: "drawn",
              id: kT,
              url: await fT.encode(lT(), cT)
            })
          } catch (MT) {
            TT.postMessage({
              type: "failed",
              message: String(MT)
            })
          }
        })()
      };
    TT.onmessage = TT => {
      let {
        data: vT
      } = TT;
      if ("texture" === vT.type) AT.set(vT.url, fT.pixelsOf(vT.bitmap));
      else if ("model" === vT.type) CT.set(vT.name, {
        geometry: vT.geometry,
        texture: fT.pixelsOf(vT.bitmap)
      });
      else if ("draw" === vT.type) {
        const {
          id: TT,
          top: fT,
          left: CT,
          right: tT,
          itemType: hT,
          size: NT,
          outlineWidth: QT
        } = vT;
        jT(TT, NT, (() => function(TT, KT, OT, yT) {
          const fT = .6 * OT,
            IT = fT * lT,
            AT = fT * lT * .5,
            CT = fT * MT,
            jT = Math.max(...KT.boxes.map((TT => TT[4]))),
            vT = IT / 2 + (OT - IT) / 2,
            tT = AT + (OT - AT - AT - jT * CT) / 2,
            hT = (TT, kT, cT) => ({
              x: vT + (TT - cT) * IT,
              y: tT - AT + (TT + cT) * AT + (jT - kT) * CT
            }),
            NT = (TT, kT, cT, lT, MT, OT) => ({
              origin: TT,
              across: {
                x: kT.x - TT.x,
                y: kT.y - TT.y
              },
              down: {
                x: cT.x - TT.x,
                y: cT.y - TT.y
              },
              texture: lT,
              rect: KT.cropFaces ? MT : [0, 0, 1, 1],
              shade: OT
            }),
            QT = new Uint8ClampedArray(OT * OT * 4),
            ST = new Uint8Array(OT * OT),
            DT = kT;
          for (const [kT, cT, lT, MT, aT, FT] of KT.boxes) {
            const KT = NT(hT(MT, aT, FT), hT(MT, aT, lT), hT(MT, cT, FT), TT.right, [1 - FT, 1 - aT, 1 - lT, 1 - cT], DT.right),
              yT = NT(hT(kT, aT, FT), hT(MT, aT, FT), hT(kT, cT, FT), TT.left, [kT, 1 - aT, MT, 1 - cT], DT.left),
              fT = NT(hT(kT, aT, lT), hT(MT, aT, lT), hT(kT, aT, FT), TT.top, [kT, lT, MT, FT], DT.top);
            for (const TT of [KT, yT, fT]) xT(QT, ST, OT, TT)
          }
          return cT(QT, OT, yT, (TT => 1 === ST[TT])), QT
        }({
          top: IT(AT, fT, "texture"),
          left: IT(AT, CT, "texture"),
          right: IT(AT, tT, "texture")
        }, function(TT) {
          return "SlabBlock" === TT ? OT : "StairsBlock" === TT ? yT : KT
        }(hT), NT, QT)))
      } else {
        const {
          id: TT,
          name: kT,
          size: lT,
          outlineWidth: MT
        } = vT;
        jT(TT, lT, (() => {
          const {
            geometry: TT,
            texture: KT
          } = IT(CT, kT, "model");
          return function(TT, kT, lT, MT) {
            const {
              vertices: KT,
              uvs: OT,
              indices: yT,
              shades: fT
            } = TT, xT = .03125 * lT, IT = lT - 2 * xT, AT = new Float32Array(KT.length);
            for (let cT = 0; cT < KT.length; cT += 3) AT[cT] = xT + KT[cT] * IT, AT[cT + 1] = xT + KT[cT + 1] * IT, AT[cT + 2] = KT[cT + 2];
            const CT = new Float32Array(lT * lT).fill(-1 / 0),
              jT = new Uint8ClampedArray(lT * lT * 4),
              vT = 255 * TT.alphaCutoff;
            for (let cT = 0; cT < yT.length; cT += 3) {
              const [TT, MT, KT] = [yT[cT], yT[cT + 1], yT[cT + 2]], [xT, IT, tT] = [3 * TT, 3 * MT, 3 * KT], [hT, NT, QT, ST, DT, aT] = [AT[xT], AT[xT + 1], AT[IT], AT[IT + 1], AT[tT], AT[tT + 1]], FT = (QT - hT) * (aT - NT) - (DT - hT) * (ST - NT);
              if (Math.abs(FT) < 1e-9) continue;
              const rT = fT[cT / 3],
                [PT, wT, mT, bT, zT, JT] = [OT[2 * TT], OT[2 * TT + 1], OT[2 * MT], OT[2 * MT + 1], OT[2 * KT], OT[2 * KT + 1]],
                oT = Math.max(0, Math.floor(Math.min(hT, QT, DT))),
                HT = Math.min(lT - 1, Math.ceil(Math.max(hT, QT, DT))),
                eT = Math.max(0, Math.floor(Math.min(NT, ST, aT))),
                GT = Math.min(lT - 1, Math.ceil(Math.max(NT, ST, aT)));
              for (let cT = eT; cT <= GT; cT++)
                for (let TT = oT; TT <= HT; TT++) {
                  const [MT, KT] = [TT + .5, cT + .5], OT = ((MT - hT) * (aT - NT) - (DT - hT) * (KT - NT)) / FT, yT = ((QT - hT) * (KT - NT) - (MT - hT) * (ST - NT)) / FT, fT = 1 - OT - yT;
                  if (fT < 0 || OT < 0 || yT < 0) continue;
                  const oT = fT * AT[xT + 2] + OT * AT[IT + 2] + yT * AT[tT + 2],
                    HT = cT * lT + TT;
                  if (oT <= CT[HT]) continue;
                  const eT = Math.max(0, Math.min(kT.width - 1, Math.floor((fT * PT + OT * mT + yT * zT) * kT.width))),
                    GT = 4 * (Math.max(0, Math.min(kT.height - 1, Math.floor((fT * wT + OT * bT + yT * JT) * kT.height))) * kT.width + eT);
                  kT.pixels[GT + 3] < vT || (CT[HT] = oT, jT[4 * HT] = kT.pixels[GT] * rT, jT[4 * HT + 1] = kT.pixels[GT + 1] * rT, jT[4 * HT + 2] = kT.pixels[GT + 2] * rT, jT[4 * HT + 3] = 255)
                }
            }
            return cT(jT, lT, MT), jT
          }(TT, KT, lT, MT)
        }))
      }
    }, TT.postMessage({
      type: "started"
    })
  }(globalThis, AT)
})();