(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var TT = __webpack_require__.u,
        UT = __webpack_require__.e,
        mT = {},
        WT = {};
      __webpack_require__.u = function(UT) {
        return TT(UT) + (mT.hasOwnProperty(UT) ? "?" + mT[UT] : "")
      }, __webpack_require__.e = function(zT) {
        return UT(zT).catch((function(UT) {
          var MT = WT.hasOwnProperty(zT) ? WT[zT] : 4;
          if (MT < 1) {
            var gT = TT(zT);
            if (UT.message = "Loading chunk " + zT + " failed after 4 retries.\n(" + gT + ")", UT.request = gT, mT[zT] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete WT[zT]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === UT.code) {
              var nT = __webpack_require__.miniCssF(zT);
              UT.message = UT.message.replace("Loading chunk", "Loading CSS chunk").replace(gT, nT), UT.request = nT
            }
            throw UT
          }
          return new Promise((function(TT) {
            var UT = 4 - MT + 1;
            setTimeout((function() {
              var UT = "cache-bust=" + Date.now();
              mT[zT] = UT, WT[zT] = MT - 1, TT(__webpack_require__.e(zT))
            }), function(TT) {
              return 500 * Math.pow(2, TT)
            }(UT))
          }))
        }))
      }
    }
  })();
  const TT = Math.SQRT1_2,
    UT = Math.SQRT1_2 / 2,
    mT = Math.sqrt(3) / 2,
    WT = 2 * TT,
    zT = 2 * UT + mT;

  function MT(UT, mT) {
    const WT = mT > 0 ? mT + 1 : 0,
      MT = .6 * UT - mT / TT;
    return Math.max(0, Math.min(MT, (UT - 2 * WT) / zT))
  }
  const gT = [15, 15, 15],
    nT = {
      top: 1,
      left: .85,
      right: .7
    };

  function HT(TT, UT, mT, gT) {
    const {
      vertices: nT,
      uvs: HT,
      indices: kT,
      shades: jT
    } = TT, LT = function(TT, UT) {
      const mT = MT(TT, UT),
        gT = WT * mT,
        nT = zT * mT;
      return {
        left: (TT - gT) / 2,
        top: (TT - nT) / 2,
        width: gT,
        height: nT
      }
    }(mT, gT), pT = new Float32Array(nT.length);
    for (let WT = 0; WT < nT.length; WT += 3) pT[WT] = LT.left + nT[WT] * LT.width, pT[WT + 1] = LT.top + nT[WT + 1] * LT.height, pT[WT + 2] = nT[WT + 2];
    const BT = new Float32Array(mT * mT).fill(-1 / 0),
      ZT = new Uint8ClampedArray(mT * mT * 4),
      cT = 255 * TT.alphaCutoff;
    for (let WT = 0; WT < kT.length; WT += 3) {
      const [TT, zT, MT] = [kT[WT], kT[WT + 1], kT[WT + 2]], [gT, nT, lT] = [3 * TT, 3 * zT, 3 * MT], [LT, vT, fT, qT, iT, bT] = [pT[gT], pT[gT + 1], pT[nT], pT[nT + 1], pT[lT], pT[lT + 1]], OT = (fT - LT) * (bT - vT) - (iT - LT) * (qT - vT);
      if (Math.abs(OT) < 1e-9) continue;
      const eT = jT[WT / 3],
        [YT, JT, xT, dT, wT, tT] = [HT[2 * TT], HT[2 * TT + 1], HT[2 * zT], HT[2 * zT + 1], HT[2 * MT], HT[2 * MT + 1]],
        aT = Math.max(0, Math.floor(Math.min(LT, fT, iT))),
        yT = Math.min(mT - 1, Math.ceil(Math.max(LT, fT, iT))),
        XT = Math.max(0, Math.floor(Math.min(vT, qT, bT))),
        IT = Math.min(mT - 1, Math.ceil(Math.max(vT, qT, bT)));
      for (let WT = XT; WT <= IT; WT++)
        for (let TT = aT; TT <= yT; TT++) {
          const [zT, MT] = [TT + .5, WT + .5], HT = ((zT - LT) * (bT - vT) - (iT - LT) * (MT - vT)) / OT, kT = ((fT - LT) * (MT - vT) - (zT - LT) * (qT - vT)) / OT, jT = 1 - HT - kT;
          if (jT < 0 || HT < 0 || kT < 0) continue;
          const aT = jT * pT[gT + 2] + HT * pT[nT + 2] + kT * pT[lT + 2],
            yT = WT * mT + TT;
          if (aT <= BT[yT]) continue;
          const XT = Math.max(0, Math.min(UT.width - 1, Math.floor((jT * YT + HT * xT + kT * wT) * UT.width))),
            IT = 4 * (Math.max(0, Math.min(UT.height - 1, Math.floor((jT * JT + HT * dT + kT * tT) * UT.height))) * UT.width + XT);
          UT.pixels[IT + 3] < cT || (BT[yT] = aT, ZT[4 * yT] = UT.pixels[IT] * eT, ZT[4 * yT + 1] = UT.pixels[IT + 1] * eT, ZT[4 * yT + 2] = UT.pixels[IT + 2] * eT, ZT[4 * yT + 3] = 255)
        }
    }
    return lT(ZT, mT, gT), ZT
  }
  let kT = NaN,
    jT = new Int32Array(0);

  function lT(TT, UT, mT) {
    let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UT => 0 !== TT[4 * UT + 3];
    const zT = new Uint8Array(UT * UT);
    for (let gT = 0; gT < UT * UT; gT++) zT[gT] = WT(gT) ? 1 : 0;
    const MT = (TT, mT) => TT >= 0 && mT >= 0 && TT < UT && mT < UT && 0 === zT[mT * UT + TT],
      nT = new Float32Array(UT * UT).fill(1 / 0),
      HT = function(TT) {
        if (TT !== kT) {
          const UT = Math.ceil(TT + 1),
            mT = [];
          for (let WT = -UT; WT <= UT; WT++)
            for (let zT = -UT; zT <= UT; zT++) {
              const UT = zT * zT + WT * WT;
              UT > 0 && UT < (TT + 1) ** 2 && mT.push(zT, WT, UT)
            }
          kT = TT, jT = Int32Array.from(mT)
        }
        return jT
      }(mT);
    for (let gT = 0; gT < UT; gT++)
      for (let TT = 0; TT < UT; TT++) {
        if (1 === zT[gT * UT + TT] && (MT(TT - 1, gT) || MT(TT + 1, gT) || MT(TT, gT - 1) || MT(TT, gT + 1)))
          for (let mT = 0; mT < HT.length; mT += 3) {
            const WT = TT + HT[mT],
              zT = gT + HT[mT + 1];
            if (WT >= 0 && zT >= 0 && WT < UT && zT < UT) {
              const TT = zT * UT + WT;
              nT[TT] = Math.min(nT[TT], HT[mT + 2])
            }
          }
      }
    for (let kT = 0; kT < UT * UT; kT++) 1 !== zT[kT] && nT[kT] !== 1 / 0 && (TT.set(gT, 4 * kT), TT[4 * kT + 3] = Math.round(255 * Math.min(1, mT + 1 - Math.sqrt(nT[kT]))))
  }
  const LT = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    pT = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    BT = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const ZT = 1e-6;

  function cT(TT, UT, mT, WT) {
    let {
      origin: zT,
      across: MT,
      down: gT,
      texture: nT,
      rect: [HT, kT, jT, lT],
      shade: LT
    } = WT;
    const pT = MT.x * gT.y - MT.y * gT.x;
    if (Math.abs(pT) < 1e-9) return;
    const BT = [zT.x, zT.x + MT.x, zT.x + gT.x, zT.x + MT.x + gT.x],
      cT = [zT.y, zT.y + MT.y, zT.y + gT.y, zT.y + MT.y + gT.y],
      vT = Math.max(0, Math.floor(Math.min(...BT))),
      fT = Math.min(mT - 1, Math.ceil(Math.max(...BT))),
      qT = Math.max(0, Math.floor(Math.min(...cT))),
      iT = Math.min(mT - 1, Math.ceil(Math.max(...cT)));
    for (let bT = qT; bT <= iT; bT++)
      for (let WT = vT; WT <= fT; WT++) {
        const BT = WT + .5 - zT.x,
          cT = bT + .5 - zT.y,
          vT = (BT * gT.y - cT * gT.x) / pT,
          fT = (MT.x * cT - MT.y * BT) / pT;
        if (vT < -ZT || vT > 1 + ZT || fT < -ZT || fT > 1 + ZT) continue;
        const qT = bT * mT + WT;
        UT[qT] = 1;
        const iT = HT + Math.min(Math.max(vT, 0), 1) * (jT - HT),
          OT = kT + Math.min(Math.max(fT, 0), 1) * (lT - kT),
          eT = Math.min(nT.width - 1, Math.floor(iT * nT.width)),
          YT = 4 * (Math.min(nT.height - 1, Math.floor(OT * nT.height)) * nT.width + eT),
          JT = nT.pixels[YT + 3] / 255;
        if (0 === JT) continue;
        const xT = 4 * qT,
          dT = TT[xT + 3] / 255 * (1 - JT),
          wT = JT + dT;
        for (let UT = 0; UT < 3; UT++) TT[xT + UT] = (nT.pixels[YT + UT] * LT * JT + TT[xT + UT] * dT) / wT;
        TT[xT + 3] = 255 * wT
      }
  }

  function vT(TT, UT, mT) {
    const WT = TT.get(UT);
    if (void 0 === WT) throw new Error(`no ${mT} was sent for ${UT.slice(0,100)}`);
    return WT
  }
  const fT = {
      pixelsOf(TT) {
        const UT = new OffscreenCanvas(TT.width, TT.height),
          mT = UT.getContext("2d");
        if (!mT) throw new Error("no 2D context");
        return mT.drawImage(TT, 0, 0), TT.close(), {
          width: UT.width,
          height: UT.height,
          pixels: mT.getImageData(0, 0, UT.width, UT.height).data
        }
      },
      async encode(TT, UT) {
        const mT = new OffscreenCanvas(UT, UT),
          WT = mT.getContext("2d");
        if (!WT) throw new Error("no 2D context");
        WT.putImageData(new ImageData(TT, UT, UT), 0, 0);
        const zT = await mT.convertToBlob();
        return new Promise(((TT, UT) => {
          const mT = new FileReader;
          mT.onload = () => {
            TT(mT.result)
          }, mT.onerror = () => {
            var TT;
            UT(null !== (TT = mT.error) && void 0 !== TT ? TT : new Error("the icon did not encode"))
          }, mT.readAsDataURL(zT)
        }))
      }
    },
    qT = globalThis.WorkerGlobalScope;
  void 0 !== qT && globalThis instanceof qT && function(WT, zT) {
    const gT = new Map,
      kT = new Map,
      jT = (TT, UT, mT) => {
        (async () => {
          try {
            WT.postMessage({
              type: "drawn",
              id: TT,
              url: await zT.encode(mT(), UT)
            })
          } catch (MT) {
            WT.postMessage({
              type: "failed",
              message: String(MT)
            })
          }
        })()
      };
    WT.onmessage = WT => {
      let {
        data: ZT
      } = WT;
      if ("texture" === ZT.type) gT.set(ZT.url, zT.pixelsOf(ZT.bitmap));
      else if ("model" === ZT.type) kT.set(ZT.name, {
        geometry: ZT.geometry,
        texture: zT.pixelsOf(ZT.bitmap)
      });
      else if ("draw" === ZT.type) {
        const {
          id: WT,
          top: zT,
          left: HT,
          right: kT,
          itemType: fT,
          size: qT,
          outlineWidth: iT
        } = ZT;
        jT(WT, qT, (() => function(WT, zT, gT, HT) {
          const kT = MT(gT, HT),
            jT = kT * TT,
            LT = kT * UT,
            pT = kT * mT,
            BT = Math.max(...zT.boxes.map((TT => TT[4]))),
            ZT = gT / 2,
            vT = LT + (gT - LT - LT - BT * pT) / 2,
            fT = (TT, UT, mT) => ({
              x: ZT + (TT - mT) * jT,
              y: vT - LT + (TT + mT) * LT + (BT - UT) * pT
            }),
            qT = (TT, UT, mT, WT, MT, gT) => ({
              origin: TT,
              across: {
                x: UT.x - TT.x,
                y: UT.y - TT.y
              },
              down: {
                x: mT.x - TT.x,
                y: mT.y - TT.y
              },
              texture: WT,
              rect: zT.cropFaces ? MT : [0, 0, 1, 1],
              shade: gT
            }),
            iT = new Uint8ClampedArray(gT * gT * 4),
            bT = new Uint8Array(gT * gT),
            OT = nT;
          for (const [TT, UT, mT, MT, nT, lT] of zT.boxes) {
            const zT = qT(fT(MT, nT, lT), fT(MT, nT, mT), fT(MT, UT, lT), WT.right, [1 - lT, 1 - nT, 1 - mT, 1 - UT], OT.right),
              HT = qT(fT(TT, nT, lT), fT(MT, nT, lT), fT(TT, UT, lT), WT.left, [TT, 1 - nT, MT, 1 - UT], OT.left),
              kT = qT(fT(TT, nT, mT), fT(MT, nT, mT), fT(TT, nT, lT), WT.top, [TT, mT, MT, lT], OT.top);
            for (const TT of [zT, HT, kT]) cT(iT, bT, gT, TT)
          }
          return lT(iT, gT, HT, (TT => 1 === bT[TT])), iT
        }({
          top: vT(gT, zT, "texture"),
          left: vT(gT, HT, "texture"),
          right: vT(gT, kT, "texture")
        }, function(TT) {
          return "SlabBlock" === TT ? pT : "StairsBlock" === TT ? BT : LT
        }(fT), qT, iT)))
      } else {
        const {
          id: TT,
          name: UT,
          size: mT,
          outlineWidth: WT
        } = ZT;
        jT(TT, mT, (() => {
          const {
            geometry: TT,
            texture: zT
          } = vT(kT, UT, "model");
          return HT(TT, zT, mT, WT)
        }))
      }
    }, WT.postMessage({
      type: "started"
    })
  }(globalThis, fT)
})();