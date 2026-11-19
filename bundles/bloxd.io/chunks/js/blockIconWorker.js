(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var TT = __webpack_require__.u,
        oT = __webpack_require__.e,
        IT = {},
        iT = {};
      __webpack_require__.u = function(oT) {
        return TT(oT) + (IT.hasOwnProperty(oT) ? "?" + IT[oT] : "")
      }, __webpack_require__.e = function(zT) {
        return oT(zT).catch((function(oT) {
          var kT = iT.hasOwnProperty(zT) ? iT[zT] : 4;
          if (kT < 1) {
            var WT = TT(zT);
            throw oT.message = "Loading chunk " + zT + " failed after 4 retries.\n(" + WT + ")", oT.request = WT, IT[zT] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete iT[zT]
            }), 0), oT
          }
          return new Promise((function(TT) {
            var oT = 4 - kT + 1;
            setTimeout((function() {
              var oT = "cache-bust=" + Date.now();
              IT[zT] = oT, iT[zT] = kT - 1, TT(__webpack_require__.e(zT))
            }), function(TT) {
              return 500 * Math.pow(2, TT)
            }(oT))
          }))
        }))
      }
    }
  })();
  const TT = [15, 15, 15],
    oT = {
      top: 1,
      left: .85,
      right: .7
    };

  function IT(oT, IT, iT) {
    let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT => 0 !== oT[4 * TT + 3];
    const kT = (TT, oT) => TT < 0 || oT < 0 || TT >= IT || oT >= IT || !zT(oT * IT + TT),
      WT = [];
    for (let TT = 0; TT < IT; TT++)
      for (let oT = 0; oT < IT; oT++)
        if (!kT(oT, TT)) TT: for (let zT = -iT; zT <= iT; zT++) {
          const XT = iT - Math.abs(zT);
          for (let iT = -XT; iT <= XT; iT++)
            if (kT(oT + iT, TT + zT)) {
              WT.push(TT * IT + oT);
              break TT
            }
        }
    for (const XT of WT) oT.set(TT, 4 * XT), oT[4 * XT + 3] = 255
  }
  const iT = Math.SQRT1_2,
    zT = Math.sqrt(3) / 2,
    kT = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    WT = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    XT = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const BT = 1e-6;

  function FT(TT, oT, IT, iT) {
    let {
      origin: zT,
      across: kT,
      down: WT,
      texture: XT,
      rect: [FT, ST, DT, LT],
      shade: xT
    } = iT;
    const cT = kT.x * WT.y - kT.y * WT.x;
    if (Math.abs(cT) < 1e-9) return;
    const KT = [zT.x, zT.x + kT.x, zT.x + WT.x, zT.x + kT.x + WT.x],
      MT = [zT.y, zT.y + kT.y, zT.y + WT.y, zT.y + kT.y + WT.y],
      rT = Math.max(0, Math.floor(Math.min(...KT))),
      AT = Math.min(IT - 1, Math.ceil(Math.max(...KT))),
      gT = Math.max(0, Math.floor(Math.min(...MT))),
      hT = Math.min(IT - 1, Math.ceil(Math.max(...MT)));
    for (let wT = gT; wT <= hT; wT++)
      for (let iT = rT; iT <= AT; iT++) {
        const KT = iT + .5 - zT.x,
          MT = wT + .5 - zT.y,
          rT = (KT * WT.y - MT * WT.x) / cT,
          AT = (kT.x * MT - kT.y * KT) / cT;
        if (rT < -BT || rT > 1 + BT || AT < -BT || AT > 1 + BT) continue;
        const gT = wT * IT + iT;
        oT[gT] = 1;
        const hT = FT + Math.min(Math.max(rT, 0), 1) * (DT - FT),
          mT = ST + Math.min(Math.max(AT, 0), 1) * (LT - ST),
          eT = Math.min(XT.width - 1, Math.floor(hT * XT.width)),
          RT = 4 * (Math.min(XT.height - 1, Math.floor(mT * XT.height)) * XT.width + eT),
          uT = XT.pixels[RT + 3] / 255;
        if (0 === uT) continue;
        const vT = 4 * gT,
          ET = TT[vT + 3] / 255 * (1 - uT),
          fT = uT + ET;
        for (let oT = 0; oT < 3; oT++) TT[vT + oT] = (XT.pixels[RT + oT] * xT * uT + TT[vT + oT] * ET) / fT;
        TT[vT + 3] = 255 * fT
      }
  }

  function ST(TT, oT, IT) {
    const iT = TT.get(oT);
    if (void 0 === iT) throw new Error(`no ${IT} was sent for ${oT.slice(0,100)}`);
    return iT
  }
  const DT = {
      pixelsOf(TT) {
        const oT = new OffscreenCanvas(TT.width, TT.height),
          IT = oT.getContext("2d");
        if (!IT) throw new Error("no 2D context");
        return IT.drawImage(TT, 0, 0), TT.close(), {
          width: oT.width,
          height: oT.height,
          pixels: IT.getImageData(0, 0, oT.width, oT.height).data
        }
      },
      async encode(TT, oT) {
        const IT = new OffscreenCanvas(oT, oT),
          iT = IT.getContext("2d");
        if (!iT) throw new Error("no 2D context");
        iT.putImageData(new ImageData(TT, oT, oT), 0, 0);
        const zT = await IT.convertToBlob();
        return new Promise(((TT, oT) => {
          const IT = new FileReader;
          IT.onload = () => {
            TT(IT.result)
          }, IT.onerror = () => {
            var TT;
            oT(null !== (TT = IT.error) && void 0 !== TT ? TT : new Error("the icon did not encode"))
          }, IT.readAsDataURL(zT)
        }))
      }
    },
    LT = globalThis.WorkerGlobalScope;
  void 0 !== LT && globalThis instanceof LT && function(TT, BT) {
    const DT = new Map,
      LT = new Map,
      xT = (oT, IT, iT) => {
        (async () => {
          try {
            TT.postMessage({
              type: "drawn",
              id: oT,
              url: await BT.encode(iT(), IT)
            })
          } catch (zT) {
            TT.postMessage({
              type: "failed",
              message: String(zT)
            })
          }
        })()
      };
    TT.onmessage = TT => {
      let {
        data: cT
      } = TT;
      if ("texture" === cT.type) DT.set(cT.url, BT.pixelsOf(cT.bitmap));
      else if ("model" === cT.type) LT.set(cT.name, {
        geometry: cT.geometry,
        texture: BT.pixelsOf(cT.bitmap)
      });
      else if ("draw" === cT.type) {
        const {
          id: TT,
          top: BT,
          left: LT,
          right: KT,
          itemType: MT,
          size: rT,
          outlineWidth: AT
        } = cT;
        xT(TT, rT, (() => function(TT, kT, WT, XT) {
          const BT = .6 * WT,
            ST = BT * iT,
            DT = BT * iT * .5,
            LT = BT * zT,
            xT = Math.max(...kT.boxes.map((TT => TT[4]))),
            cT = ST / 2 + (WT - ST) / 2,
            KT = DT + (WT - DT - DT - xT * LT) / 2,
            MT = (TT, oT, IT) => ({
              x: cT + (TT - IT) * ST,
              y: KT - DT + (TT + IT) * DT + (xT - oT) * LT
            }),
            rT = (TT, oT, IT, iT, zT, WT) => ({
              origin: TT,
              across: {
                x: oT.x - TT.x,
                y: oT.y - TT.y
              },
              down: {
                x: IT.x - TT.x,
                y: IT.y - TT.y
              },
              texture: iT,
              rect: kT.cropFaces ? zT : [0, 0, 1, 1],
              shade: WT
            }),
            AT = new Uint8ClampedArray(WT * WT * 4),
            gT = new Uint8Array(WT * WT),
            hT = oT;
          for (const [oT, IT, iT, zT, wT, mT] of kT.boxes) {
            const kT = rT(MT(zT, wT, mT), MT(zT, wT, iT), MT(zT, IT, mT), TT.right, [1 - mT, 1 - wT, 1 - iT, 1 - IT], hT.right),
              XT = rT(MT(oT, wT, mT), MT(zT, wT, mT), MT(oT, IT, mT), TT.left, [oT, 1 - wT, zT, 1 - IT], hT.left),
              BT = rT(MT(oT, wT, iT), MT(zT, wT, iT), MT(oT, wT, mT), TT.top, [oT, iT, zT, mT], hT.top);
            for (const TT of [kT, XT, BT]) FT(AT, gT, WT, TT)
          }
          return IT(AT, WT, XT, (TT => 1 === gT[TT])), AT
        }({
          top: ST(DT, BT, "texture"),
          left: ST(DT, LT, "texture"),
          right: ST(DT, KT, "texture")
        }, function(TT) {
          return "SlabBlock" === TT ? WT : "StairsBlock" === TT ? XT : kT
        }(MT), rT, AT)))
      } else {
        const {
          id: TT,
          name: oT,
          size: iT,
          outlineWidth: zT
        } = cT;
        xT(TT, iT, (() => {
          const {
            geometry: TT,
            texture: kT
          } = ST(LT, oT, "model");
          return function(TT, oT, iT, zT) {
            const {
              vertices: kT,
              uvs: WT,
              indices: XT,
              shades: BT
            } = TT, FT = .03125 * iT, ST = iT - 2 * FT, DT = new Float32Array(kT.length);
            for (let IT = 0; IT < kT.length; IT += 3) DT[IT] = FT + kT[IT] * ST, DT[IT + 1] = FT + kT[IT + 1] * ST, DT[IT + 2] = kT[IT + 2];
            const LT = new Float32Array(iT * iT).fill(-1 / 0),
              xT = new Uint8ClampedArray(iT * iT * 4),
              cT = 255 * TT.alphaCutoff;
            for (let IT = 0; IT < XT.length; IT += 3) {
              const [TT, zT, kT] = [XT[IT], XT[IT + 1], XT[IT + 2]], [FT, ST, KT] = [3 * TT, 3 * zT, 3 * kT], [MT, rT, AT, gT, hT, wT] = [DT[FT], DT[FT + 1], DT[ST], DT[ST + 1], DT[KT], DT[KT + 1]], mT = (AT - MT) * (wT - rT) - (hT - MT) * (gT - rT);
              if (Math.abs(mT) < 1e-9) continue;
              const eT = BT[IT / 3],
                [RT, uT, vT, ET, fT, CT] = [WT[2 * TT], WT[2 * TT + 1], WT[2 * zT], WT[2 * zT + 1], WT[2 * kT], WT[2 * kT + 1]],
                jT = Math.max(0, Math.floor(Math.min(MT, AT, hT))),
                JT = Math.min(iT - 1, Math.ceil(Math.max(MT, AT, hT))),
                UT = Math.max(0, Math.floor(Math.min(rT, gT, wT))),
                aT = Math.min(iT - 1, Math.ceil(Math.max(rT, gT, wT)));
              for (let IT = UT; IT <= aT; IT++)
                for (let TT = jT; TT <= JT; TT++) {
                  const [zT, kT] = [TT + .5, IT + .5], WT = ((zT - MT) * (wT - rT) - (hT - MT) * (kT - rT)) / mT, XT = ((AT - MT) * (kT - rT) - (zT - MT) * (gT - rT)) / mT, BT = 1 - WT - XT;
                  if (BT < 0 || WT < 0 || XT < 0) continue;
                  const jT = BT * DT[FT + 2] + WT * DT[ST + 2] + XT * DT[KT + 2],
                    JT = IT * iT + TT;
                  if (jT <= LT[JT]) continue;
                  const UT = Math.max(0, Math.min(oT.width - 1, Math.floor((BT * RT + WT * vT + XT * fT) * oT.width))),
                    aT = 4 * (Math.max(0, Math.min(oT.height - 1, Math.floor((BT * uT + WT * ET + XT * CT) * oT.height))) * oT.width + UT);
                  oT.pixels[aT + 3] < cT || (LT[JT] = jT, xT[4 * JT] = oT.pixels[aT] * eT, xT[4 * JT + 1] = oT.pixels[aT + 1] * eT, xT[4 * JT + 2] = oT.pixels[aT + 2] * eT, xT[4 * JT + 3] = 255)
                }
            }
            return IT(xT, iT, zT), xT
          }(TT, kT, iT, zT)
        }))
      }
    }, TT.postMessage({
      type: "started"
    })
  }(globalThis, DT)
})();