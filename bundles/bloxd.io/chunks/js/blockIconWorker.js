(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        OB = __webpack_require__.e,
        GB = {},
        YB = {};
      __webpack_require__.u = function(OB) {
        return BB(OB) + (GB.hasOwnProperty(OB) ? "?" + GB[OB] : "")
      }, __webpack_require__.e = function(DB) {
        return OB(DB).catch((function(OB) {
          var QB = YB.hasOwnProperty(DB) ? YB[DB] : 4;
          if (QB < 1) {
            var oB = BB(DB);
            if (OB.message = "Loading chunk " + DB + " failed after 4 retries.\n(" + oB + ")", OB.request = oB, GB[DB] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete YB[DB]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === OB.code) {
              var jB = __webpack_require__.miniCssF(DB);
              OB.message = OB.message.replace("Loading chunk", "Loading CSS chunk").replace(oB, jB), OB.request = jB
            }
            throw OB
          }
          return new Promise((function(BB) {
            var OB = 4 - QB + 1;
            setTimeout((function() {
              var OB = "cache-bust=" + Date.now();
              GB[DB] = OB, YB[DB] = QB - 1, BB(__webpack_require__.e(DB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(OB))
          }))
        }))
      }
    }
  })();
  const BB = Math.SQRT1_2,
    OB = Math.SQRT1_2 / 2,
    GB = Math.sqrt(3) / 2,
    YB = 2 * BB,
    DB = 2 * OB + GB;

  function QB(OB, GB) {
    const YB = GB > 0 ? GB + 1 : 0,
      QB = .6 * OB - GB / BB;
    return Math.max(0, Math.min(QB, (OB - 2 * YB) / DB))
  }
  const oB = [15, 15, 15],
    jB = {
      top: 1,
      left: .85,
      right: .7
    };

  function yB(BB, OB, GB, oB) {
    const {
      vertices: jB,
      uvs: yB,
      indices: JB,
      shades: MB
    } = BB, zB = function(BB, OB) {
      const GB = QB(BB, OB),
        oB = YB * GB,
        jB = DB * GB;
      return {
        left: (BB - oB) / 2,
        top: (BB - jB) / 2,
        width: oB,
        height: jB
      }
    }(GB, oB), lB = new Float32Array(jB.length);
    for (let YB = 0; YB < jB.length; YB += 3) lB[YB] = zB.left + jB[YB] * zB.width, lB[YB + 1] = zB.top + jB[YB + 1] * zB.height, lB[YB + 2] = jB[YB + 2];
    const pB = new Float32Array(GB * GB).fill(-1 / 0),
      qB = new Uint8ClampedArray(GB * GB * 4),
      ZB = 255 * BB.alphaCutoff;
    for (let YB = 0; YB < JB.length; YB += 3) {
      const [BB, DB, QB] = [JB[YB], JB[YB + 1], JB[YB + 2]], [oB, jB, PB] = [3 * BB, 3 * DB, 3 * QB], [zB, NB, RB, WB, AB, VB] = [lB[oB], lB[oB + 1], lB[jB], lB[jB + 1], lB[PB], lB[PB + 1]], SB = (RB - zB) * (VB - NB) - (AB - zB) * (WB - NB);
      if (Math.abs(SB) < 1e-9) continue;
      const nB = MB[YB / 3],
        [UB, fB, kB, dB, KB, uB] = [yB[2 * BB], yB[2 * BB + 1], yB[2 * DB], yB[2 * DB + 1], yB[2 * QB], yB[2 * QB + 1]],
        mB = Math.max(0, Math.floor(Math.min(zB, RB, AB))),
        IB = Math.min(GB - 1, Math.ceil(Math.max(zB, RB, AB))),
        FB = Math.max(0, Math.floor(Math.min(NB, WB, VB))),
        iB = Math.min(GB - 1, Math.ceil(Math.max(NB, WB, VB)));
      for (let YB = FB; YB <= iB; YB++)
        for (let BB = mB; BB <= IB; BB++) {
          const [DB, QB] = [BB + .5, YB + .5], yB = ((DB - zB) * (VB - NB) - (AB - zB) * (QB - NB)) / SB, JB = ((RB - zB) * (QB - NB) - (DB - zB) * (WB - NB)) / SB, MB = 1 - yB - JB;
          if (MB < 0 || yB < 0 || JB < 0) continue;
          const mB = MB * lB[oB + 2] + yB * lB[jB + 2] + JB * lB[PB + 2],
            IB = YB * GB + BB;
          if (mB <= pB[IB]) continue;
          const FB = Math.max(0, Math.min(OB.width - 1, Math.floor((MB * UB + yB * kB + JB * KB) * OB.width))),
            iB = 4 * (Math.max(0, Math.min(OB.height - 1, Math.floor((MB * fB + yB * dB + JB * uB) * OB.height))) * OB.width + FB);
          OB.pixels[iB + 3] < ZB || (pB[IB] = mB, qB[4 * IB] = OB.pixels[iB] * nB, qB[4 * IB + 1] = OB.pixels[iB + 1] * nB, qB[4 * IB + 2] = OB.pixels[iB + 2] * nB, qB[4 * IB + 3] = 255)
        }
    }
    return PB(qB, GB, oB), qB
  }
  let JB = NaN,
    MB = new Int32Array(0);

  function PB(BB, OB, GB) {
    let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OB => 0 !== BB[4 * OB + 3];
    const DB = new Uint8Array(OB * OB);
    for (let oB = 0; oB < OB * OB; oB++) DB[oB] = YB(oB) ? 1 : 0;
    const QB = (BB, GB) => BB >= 0 && GB >= 0 && BB < OB && GB < OB && 0 === DB[GB * OB + BB],
      jB = new Float32Array(OB * OB).fill(1 / 0),
      yB = function(BB) {
        if (BB !== JB) {
          const OB = Math.ceil(BB + 1),
            GB = [];
          for (let YB = -OB; YB <= OB; YB++)
            for (let DB = -OB; DB <= OB; DB++) {
              const OB = DB * DB + YB * YB;
              OB > 0 && OB < (BB + 1) ** 2 && GB.push(DB, YB, OB)
            }
          JB = BB, MB = Int32Array.from(GB)
        }
        return MB
      }(GB);
    for (let oB = 0; oB < OB; oB++)
      for (let BB = 0; BB < OB; BB++) {
        if (1 === DB[oB * OB + BB] && (QB(BB - 1, oB) || QB(BB + 1, oB) || QB(BB, oB - 1) || QB(BB, oB + 1)))
          for (let GB = 0; GB < yB.length; GB += 3) {
            const YB = BB + yB[GB],
              DB = oB + yB[GB + 1];
            if (YB >= 0 && DB >= 0 && YB < OB && DB < OB) {
              const BB = DB * OB + YB;
              jB[BB] = Math.min(jB[BB], yB[GB + 2])
            }
          }
      }
    for (let JB = 0; JB < OB * OB; JB++) 1 !== DB[JB] && jB[JB] !== 1 / 0 && (BB.set(oB, 4 * JB), BB[4 * JB + 3] = Math.round(255 * Math.min(1, GB + 1 - Math.sqrt(jB[JB]))))
  }
  const zB = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    lB = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    pB = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const qB = 1e-6;

  function ZB(BB, OB, GB, YB) {
    let {
      origin: DB,
      across: QB,
      down: oB,
      texture: jB,
      rect: [yB, JB, MB, PB],
      shade: zB
    } = YB;
    const lB = QB.x * oB.y - QB.y * oB.x;
    if (Math.abs(lB) < 1e-9) return;
    const pB = [DB.x, DB.x + QB.x, DB.x + oB.x, DB.x + QB.x + oB.x],
      ZB = [DB.y, DB.y + QB.y, DB.y + oB.y, DB.y + QB.y + oB.y],
      NB = Math.max(0, Math.floor(Math.min(...pB))),
      RB = Math.min(GB - 1, Math.ceil(Math.max(...pB))),
      WB = Math.max(0, Math.floor(Math.min(...ZB))),
      AB = Math.min(GB - 1, Math.ceil(Math.max(...ZB)));
    for (let VB = WB; VB <= AB; VB++)
      for (let YB = NB; YB <= RB; YB++) {
        const pB = YB + .5 - DB.x,
          ZB = VB + .5 - DB.y,
          NB = (pB * oB.y - ZB * oB.x) / lB,
          RB = (QB.x * ZB - QB.y * pB) / lB;
        if (NB < -qB || NB > 1 + qB || RB < -qB || RB > 1 + qB) continue;
        const WB = VB * GB + YB;
        OB[WB] = 1;
        const AB = yB + Math.min(Math.max(NB, 0), 1) * (MB - yB),
          SB = JB + Math.min(Math.max(RB, 0), 1) * (PB - JB),
          nB = Math.min(jB.width - 1, Math.floor(AB * jB.width)),
          UB = 4 * (Math.min(jB.height - 1, Math.floor(SB * jB.height)) * jB.width + nB),
          fB = jB.pixels[UB + 3] / 255;
        if (0 === fB) continue;
        const kB = 4 * WB,
          dB = BB[kB + 3] / 255 * (1 - fB),
          KB = fB + dB;
        for (let OB = 0; OB < 3; OB++) BB[kB + OB] = (jB.pixels[UB + OB] * zB * fB + BB[kB + OB] * dB) / KB;
        BB[kB + 3] = 255 * KB
      }
  }

  function NB(BB, OB, GB) {
    const YB = BB.get(OB);
    if (void 0 === YB) throw new Error(`no ${GB} was sent for ${OB.slice(0,100)}`);
    return YB
  }
  const RB = {
      pixelsOf(BB) {
        const OB = new OffscreenCanvas(BB.width, BB.height),
          GB = OB.getContext("2d");
        if (!GB) throw new Error("no 2D context");
        return GB.drawImage(BB, 0, 0), BB.close(), {
          width: OB.width,
          height: OB.height,
          pixels: GB.getImageData(0, 0, OB.width, OB.height).data
        }
      },
      async encode(BB, OB) {
        const GB = new OffscreenCanvas(OB, OB),
          YB = GB.getContext("2d");
        if (!YB) throw new Error("no 2D context");
        YB.putImageData(new ImageData(BB, OB, OB), 0, 0);
        const DB = await GB.convertToBlob();
        return new Promise(((BB, OB) => {
          const GB = new FileReader;
          GB.onload = () => {
            BB(GB.result)
          }, GB.onerror = () => {
            var BB;
            OB(null !== (BB = GB.error) && void 0 !== BB ? BB : new Error("the icon did not encode"))
          }, GB.readAsDataURL(DB)
        }))
      }
    },
    WB = globalThis.WorkerGlobalScope;
  void 0 !== WB && globalThis instanceof WB && function(YB, DB) {
    const oB = new Map,
      JB = new Map,
      MB = (BB, OB, GB) => {
        (async () => {
          try {
            YB.postMessage({
              type: "drawn",
              id: BB,
              url: await DB.encode(GB(), OB)
            })
          } catch (QB) {
            YB.postMessage({
              type: "failed",
              message: String(QB)
            })
          }
        })()
      };
    YB.onmessage = YB => {
      let {
        data: qB
      } = YB;
      if ("texture" === qB.type) oB.set(qB.url, DB.pixelsOf(qB.bitmap));
      else if ("model" === qB.type) JB.set(qB.name, {
        geometry: qB.geometry,
        texture: DB.pixelsOf(qB.bitmap)
      });
      else if ("draw" === qB.type) {
        const {
          id: YB,
          top: DB,
          left: yB,
          right: JB,
          itemType: RB,
          size: WB,
          outlineWidth: AB
        } = qB;
        MB(YB, WB, (() => function(YB, DB, oB, yB) {
          const JB = QB(oB, yB),
            MB = JB * BB,
            zB = JB * OB,
            lB = JB * GB,
            pB = Math.max(...DB.boxes.map((BB => BB[4]))),
            qB = oB / 2,
            NB = zB + (oB - zB - zB - pB * lB) / 2,
            RB = (BB, OB, GB) => ({
              x: qB + (BB - GB) * MB,
              y: NB - zB + (BB + GB) * zB + (pB - OB) * lB
            }),
            WB = (BB, OB, GB, YB, QB, oB) => ({
              origin: BB,
              across: {
                x: OB.x - BB.x,
                y: OB.y - BB.y
              },
              down: {
                x: GB.x - BB.x,
                y: GB.y - BB.y
              },
              texture: YB,
              rect: DB.cropFaces ? QB : [0, 0, 1, 1],
              shade: oB
            }),
            AB = new Uint8ClampedArray(oB * oB * 4),
            VB = new Uint8Array(oB * oB),
            SB = jB;
          for (const [BB, OB, GB, QB, jB, PB] of DB.boxes) {
            const DB = WB(RB(QB, jB, PB), RB(QB, jB, GB), RB(QB, OB, PB), YB.right, [1 - PB, 1 - jB, 1 - GB, 1 - OB], SB.right),
              yB = WB(RB(BB, jB, PB), RB(QB, jB, PB), RB(BB, OB, PB), YB.left, [BB, 1 - jB, QB, 1 - OB], SB.left),
              JB = WB(RB(BB, jB, GB), RB(QB, jB, GB), RB(BB, jB, PB), YB.top, [BB, GB, QB, PB], SB.top);
            for (const BB of [DB, yB, JB]) ZB(AB, VB, oB, BB)
          }
          return PB(AB, oB, yB, (BB => 1 === VB[BB])), AB
        }({
          top: NB(oB, DB, "texture"),
          left: NB(oB, yB, "texture"),
          right: NB(oB, JB, "texture")
        }, function(BB) {
          return "SlabBlock" === BB ? lB : "StairsBlock" === BB ? pB : zB
        }(RB), WB, AB)))
      } else {
        const {
          id: BB,
          name: OB,
          size: GB,
          outlineWidth: YB
        } = qB;
        MB(BB, GB, (() => {
          const {
            geometry: BB,
            texture: DB
          } = NB(JB, OB, "model");
          return yB(BB, DB, GB, YB)
        }))
      }
    }, YB.postMessage({
      type: "started"
    })
  }(globalThis, RB)
})();