(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        IB = __webpack_require__.e,
        ZB = {},
        TB = {};
      __webpack_require__.u = function(IB) {
        return BB(IB) + (ZB.hasOwnProperty(IB) ? "?" + ZB[IB] : "")
      }, __webpack_require__.e = function(JB) {
        return IB(JB).catch((function(IB) {
          var oB = TB.hasOwnProperty(JB) ? TB[JB] : 4;
          if (oB < 1) {
            var GB = BB(JB);
            if (IB.message = "Loading chunk " + JB + " failed after 4 retries.\n(" + GB + ")", IB.request = GB, ZB[JB] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete TB[JB]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === IB.code) {
              var vB = __webpack_require__.miniCssF(JB);
              IB.message = IB.message.replace("Loading chunk", "Loading CSS chunk").replace(GB, vB), IB.request = vB
            }
            throw IB
          }
          return new Promise((function(BB) {
            var IB = 4 - oB + 1;
            setTimeout((function() {
              var IB = "cache-bust=" + Date.now();
              ZB[JB] = IB, TB[JB] = oB - 1, BB(__webpack_require__.e(JB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(IB))
          }))
        }))
      }
    }
  })();
  const BB = Math.SQRT1_2,
    IB = Math.SQRT1_2 / 2,
    ZB = Math.sqrt(3) / 2,
    TB = 2 * BB,
    JB = 2 * IB + ZB;

  function oB(IB, ZB) {
    const TB = ZB > 0 ? ZB + 1 : 0,
      oB = .6 * IB - ZB / BB;
    return Math.max(0, Math.min(oB, (IB - 2 * TB) / JB))
  }
  const GB = [15, 15, 15],
    vB = {
      top: 1,
      left: .85,
      right: .7
    };

  function kB(BB, IB, ZB, GB) {
    const {
      vertices: vB,
      uvs: kB,
      indices: cB,
      shades: nB
    } = BB, zB = function(BB, IB) {
      const ZB = oB(BB, IB),
        GB = TB * ZB,
        vB = JB * ZB;
      return {
        left: (BB - GB) / 2,
        top: (BB - vB) / 2,
        width: GB,
        height: vB
      }
    }(ZB, GB), FB = new Float32Array(vB.length);
    for (let TB = 0; TB < vB.length; TB += 3) FB[TB] = zB.left + vB[TB] * zB.width, FB[TB + 1] = zB.top + vB[TB + 1] * zB.height, FB[TB + 2] = vB[TB + 2];
    const NB = new Float32Array(ZB * ZB).fill(-1 / 0),
      gB = new Uint8ClampedArray(ZB * ZB * 4),
      qB = 255 * BB.alphaCutoff;
    for (let TB = 0; TB < cB.length; TB += 3) {
      const [BB, JB, oB] = [cB[TB], cB[TB + 1], cB[TB + 2]], [GB, vB, hB] = [3 * BB, 3 * JB, 3 * oB], [zB, yB, UB, WB, dB, CB] = [FB[GB], FB[GB + 1], FB[vB], FB[vB + 1], FB[hB], FB[hB + 1]], QB = (UB - zB) * (CB - yB) - (dB - zB) * (WB - yB);
      if (Math.abs(QB) < 1e-9) continue;
      const sB = nB[TB / 3],
        [wB, OB, YB, iB, pB, aB] = [kB[2 * BB], kB[2 * BB + 1], kB[2 * JB], kB[2 * JB + 1], kB[2 * oB], kB[2 * oB + 1]],
        HB = Math.max(0, Math.floor(Math.min(zB, UB, dB))),
        MB = Math.min(ZB - 1, Math.ceil(Math.max(zB, UB, dB))),
        jB = Math.max(0, Math.floor(Math.min(yB, WB, CB))),
        PB = Math.min(ZB - 1, Math.ceil(Math.max(yB, WB, CB)));
      for (let TB = jB; TB <= PB; TB++)
        for (let BB = HB; BB <= MB; BB++) {
          const [JB, oB] = [BB + .5, TB + .5], kB = ((JB - zB) * (CB - yB) - (dB - zB) * (oB - yB)) / QB, cB = ((UB - zB) * (oB - yB) - (JB - zB) * (WB - yB)) / QB, nB = 1 - kB - cB;
          if (nB < 0 || kB < 0 || cB < 0) continue;
          const HB = nB * FB[GB + 2] + kB * FB[vB + 2] + cB * FB[hB + 2],
            MB = TB * ZB + BB;
          if (HB <= NB[MB]) continue;
          const jB = Math.max(0, Math.min(IB.width - 1, Math.floor((nB * wB + kB * YB + cB * pB) * IB.width))),
            PB = 4 * (Math.max(0, Math.min(IB.height - 1, Math.floor((nB * OB + kB * iB + cB * aB) * IB.height))) * IB.width + jB);
          IB.pixels[PB + 3] < qB || (NB[MB] = HB, gB[4 * MB] = IB.pixels[PB] * sB, gB[4 * MB + 1] = IB.pixels[PB + 1] * sB, gB[4 * MB + 2] = IB.pixels[PB + 2] * sB, gB[4 * MB + 3] = 255)
        }
    }
    return hB(gB, ZB, GB), gB
  }
  let cB = NaN,
    nB = new Int32Array(0);

  function hB(BB, IB, ZB) {
    let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IB => 0 !== BB[4 * IB + 3];
    const JB = new Uint8Array(IB * IB);
    for (let GB = 0; GB < IB * IB; GB++) JB[GB] = TB(GB) ? 1 : 0;
    const oB = (BB, ZB) => BB >= 0 && ZB >= 0 && BB < IB && ZB < IB && 0 === JB[ZB * IB + BB],
      vB = new Float32Array(IB * IB).fill(1 / 0),
      kB = function(BB) {
        if (BB !== cB) {
          const IB = Math.ceil(BB + 1),
            ZB = [];
          for (let TB = -IB; TB <= IB; TB++)
            for (let JB = -IB; JB <= IB; JB++) {
              const IB = JB * JB + TB * TB;
              IB > 0 && IB < (BB + 1) ** 2 && ZB.push(JB, TB, IB)
            }
          cB = BB, nB = Int32Array.from(ZB)
        }
        return nB
      }(ZB);
    for (let GB = 0; GB < IB; GB++)
      for (let BB = 0; BB < IB; BB++) {
        if (1 === JB[GB * IB + BB] && (oB(BB - 1, GB) || oB(BB + 1, GB) || oB(BB, GB - 1) || oB(BB, GB + 1)))
          for (let ZB = 0; ZB < kB.length; ZB += 3) {
            const TB = BB + kB[ZB],
              JB = GB + kB[ZB + 1];
            if (TB >= 0 && JB >= 0 && TB < IB && JB < IB) {
              const BB = JB * IB + TB;
              vB[BB] = Math.min(vB[BB], kB[ZB + 2])
            }
          }
      }
    for (let cB = 0; cB < IB * IB; cB++) 1 !== JB[cB] && vB[cB] !== 1 / 0 && (BB.set(GB, 4 * cB), BB[4 * cB + 3] = Math.round(255 * Math.min(1, ZB + 1 - Math.sqrt(vB[cB]))))
  }
  const zB = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    FB = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    NB = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const gB = 1e-6;

  function qB(BB, IB, ZB, TB) {
    let {
      origin: JB,
      across: oB,
      down: GB,
      texture: vB,
      rect: [kB, cB, nB, hB],
      shade: zB
    } = TB;
    const FB = oB.x * GB.y - oB.y * GB.x;
    if (Math.abs(FB) < 1e-9) return;
    const NB = [JB.x, JB.x + oB.x, JB.x + GB.x, JB.x + oB.x + GB.x],
      qB = [JB.y, JB.y + oB.y, JB.y + GB.y, JB.y + oB.y + GB.y],
      yB = Math.max(0, Math.floor(Math.min(...NB))),
      UB = Math.min(ZB - 1, Math.ceil(Math.max(...NB))),
      WB = Math.max(0, Math.floor(Math.min(...qB))),
      dB = Math.min(ZB - 1, Math.ceil(Math.max(...qB)));
    for (let CB = WB; CB <= dB; CB++)
      for (let TB = yB; TB <= UB; TB++) {
        const NB = TB + .5 - JB.x,
          qB = CB + .5 - JB.y,
          yB = (NB * GB.y - qB * GB.x) / FB,
          UB = (oB.x * qB - oB.y * NB) / FB;
        if (yB < -gB || yB > 1 + gB || UB < -gB || UB > 1 + gB) continue;
        const WB = CB * ZB + TB;
        IB[WB] = 1;
        const dB = kB + Math.min(Math.max(yB, 0), 1) * (nB - kB),
          QB = cB + Math.min(Math.max(UB, 0), 1) * (hB - cB),
          sB = Math.min(vB.width - 1, Math.floor(dB * vB.width)),
          wB = 4 * (Math.min(vB.height - 1, Math.floor(QB * vB.height)) * vB.width + sB),
          OB = vB.pixels[wB + 3] / 255;
        if (0 === OB) continue;
        const YB = 4 * WB,
          iB = BB[YB + 3] / 255 * (1 - OB),
          pB = OB + iB;
        for (let IB = 0; IB < 3; IB++) BB[YB + IB] = (vB.pixels[wB + IB] * zB * OB + BB[YB + IB] * iB) / pB;
        BB[YB + 3] = 255 * pB
      }
  }

  function yB(BB, IB, ZB) {
    const TB = BB.get(IB);
    if (void 0 === TB) throw new Error(`no ${ZB} was sent for ${IB.slice(0,100)}`);
    return TB
  }
  const UB = {
      pixelsOf(BB) {
        const IB = new OffscreenCanvas(BB.width, BB.height),
          ZB = IB.getContext("2d");
        if (!ZB) throw new Error("no 2D context");
        return ZB.drawImage(BB, 0, 0), BB.close(), {
          width: IB.width,
          height: IB.height,
          pixels: ZB.getImageData(0, 0, IB.width, IB.height).data
        }
      },
      async encode(BB, IB) {
        const ZB = new OffscreenCanvas(IB, IB),
          TB = ZB.getContext("2d");
        if (!TB) throw new Error("no 2D context");
        TB.putImageData(new ImageData(BB, IB, IB), 0, 0);
        const JB = await ZB.convertToBlob();
        return new Promise(((BB, IB) => {
          const ZB = new FileReader;
          ZB.onload = () => {
            BB(ZB.result)
          }, ZB.onerror = () => {
            var BB;
            IB(null !== (BB = ZB.error) && void 0 !== BB ? BB : new Error("the icon did not encode"))
          }, ZB.readAsDataURL(JB)
        }))
      }
    },
    WB = globalThis.WorkerGlobalScope;
  void 0 !== WB && globalThis instanceof WB && function(TB, JB) {
    const GB = new Map,
      cB = new Map,
      nB = (BB, IB, ZB) => {
        (async () => {
          try {
            TB.postMessage({
              type: "drawn",
              id: BB,
              url: await JB.encode(ZB(), IB)
            })
          } catch (oB) {
            TB.postMessage({
              type: "failed",
              message: String(oB)
            })
          }
        })()
      };
    TB.onmessage = TB => {
      let {
        data: gB
      } = TB;
      if ("texture" === gB.type) GB.set(gB.url, JB.pixelsOf(gB.bitmap));
      else if ("model" === gB.type) cB.set(gB.name, {
        geometry: gB.geometry,
        texture: JB.pixelsOf(gB.bitmap)
      });
      else if ("draw" === gB.type) {
        const {
          id: TB,
          top: JB,
          left: kB,
          right: cB,
          itemType: UB,
          size: WB,
          outlineWidth: dB
        } = gB;
        nB(TB, WB, (() => function(TB, JB, GB, kB) {
          const cB = oB(GB, kB),
            nB = cB * BB,
            zB = cB * IB,
            FB = cB * ZB,
            NB = Math.max(...JB.boxes.map((BB => BB[4]))),
            gB = GB / 2,
            yB = zB + (GB - zB - zB - NB * FB) / 2,
            UB = (BB, IB, ZB) => ({
              x: gB + (BB - ZB) * nB,
              y: yB - zB + (BB + ZB) * zB + (NB - IB) * FB
            }),
            WB = (BB, IB, ZB, TB, oB, GB) => ({
              origin: BB,
              across: {
                x: IB.x - BB.x,
                y: IB.y - BB.y
              },
              down: {
                x: ZB.x - BB.x,
                y: ZB.y - BB.y
              },
              texture: TB,
              rect: JB.cropFaces ? oB : [0, 0, 1, 1],
              shade: GB
            }),
            dB = new Uint8ClampedArray(GB * GB * 4),
            CB = new Uint8Array(GB * GB),
            QB = vB;
          for (const [BB, IB, ZB, oB, vB, hB] of JB.boxes) {
            const JB = WB(UB(oB, vB, hB), UB(oB, vB, ZB), UB(oB, IB, hB), TB.right, [1 - hB, 1 - vB, 1 - ZB, 1 - IB], QB.right),
              kB = WB(UB(BB, vB, hB), UB(oB, vB, hB), UB(BB, IB, hB), TB.left, [BB, 1 - vB, oB, 1 - IB], QB.left),
              cB = WB(UB(BB, vB, ZB), UB(oB, vB, ZB), UB(BB, vB, hB), TB.top, [BB, ZB, oB, hB], QB.top);
            for (const BB of [JB, kB, cB]) qB(dB, CB, GB, BB)
          }
          return hB(dB, GB, kB, (BB => 1 === CB[BB])), dB
        }({
          top: yB(GB, JB, "texture"),
          left: yB(GB, kB, "texture"),
          right: yB(GB, cB, "texture")
        }, function(BB) {
          return "SlabBlock" === BB ? FB : "StairsBlock" === BB ? NB : zB
        }(UB), WB, dB)))
      } else {
        const {
          id: BB,
          name: IB,
          size: ZB,
          outlineWidth: TB
        } = gB;
        nB(BB, ZB, (() => {
          const {
            geometry: BB,
            texture: JB
          } = yB(cB, IB, "model");
          return kB(BB, JB, ZB, TB)
        }))
      }
    }, TB.postMessage({
      type: "started"
    })
  }(globalThis, UB)
})();