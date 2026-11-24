(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        jB = __webpack_require__.e,
        zB = {},
        QB = {};
      __webpack_require__.u = function(jB) {
        return BB(jB) + (zB.hasOwnProperty(jB) ? "?" + zB[jB] : "")
      }, __webpack_require__.e = function(nB) {
        return jB(nB).catch((function(jB) {
          var dB = QB.hasOwnProperty(nB) ? QB[nB] : 4;
          if (dB < 1) {
            var IB = BB(nB);
            if (jB.message = "Loading chunk " + nB + " failed after 4 retries.\n(" + IB + ")", jB.request = IB, zB[nB] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete QB[nB]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === jB.code) {
              var NB = __webpack_require__.miniCssF(nB);
              jB.message = jB.message.replace("Loading chunk", "Loading CSS chunk").replace(IB, NB), jB.request = NB
            }
            throw jB
          }
          return new Promise((function(BB) {
            var jB = 4 - dB + 1;
            setTimeout((function() {
              var jB = "cache-bust=" + Date.now();
              zB[nB] = jB, QB[nB] = dB - 1, BB(__webpack_require__.e(nB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(jB))
          }))
        }))
      }
    }
  })();
  const BB = Math.SQRT1_2,
    jB = Math.SQRT1_2 / 2,
    zB = Math.sqrt(3) / 2,
    QB = 2 * BB,
    nB = 2 * jB + zB;

  function dB(jB, zB) {
    const QB = zB > 0 ? zB + 1 : 0,
      dB = .6 * jB - zB / BB;
    return Math.max(0, Math.min(dB, (jB - 2 * QB) / nB))
  }
  const IB = [15, 15, 15],
    NB = {
      top: 1,
      left: .85,
      right: .7
    };

  function uB(BB, jB, zB, IB) {
    const {
      vertices: NB,
      uvs: uB,
      indices: UB,
      shades: aB
    } = BB, rB = function(BB, jB) {
      const zB = dB(BB, jB),
        IB = QB * zB,
        NB = nB * zB;
      return {
        left: (BB - IB) / 2,
        top: (BB - NB) / 2,
        width: IB,
        height: NB
      }
    }(zB, IB), sB = new Float32Array(NB.length);
    for (let QB = 0; QB < NB.length; QB += 3) sB[QB] = rB.left + NB[QB] * rB.width, sB[QB + 1] = rB.top + NB[QB + 1] * rB.height, sB[QB + 2] = NB[QB + 2];
    const JB = new Float32Array(zB * zB).fill(-1 / 0),
      mB = new Uint8ClampedArray(zB * zB * 4),
      yB = 255 * BB.alphaCutoff;
    for (let QB = 0; QB < UB.length; QB += 3) {
      const [BB, nB, dB] = [UB[QB], UB[QB + 1], UB[QB + 2]], [IB, NB, pB] = [3 * BB, 3 * nB, 3 * dB], [rB, kB, GB, LB, gB, tB] = [sB[IB], sB[IB + 1], sB[NB], sB[NB + 1], sB[pB], sB[pB + 1]], SB = (GB - rB) * (tB - kB) - (gB - rB) * (LB - kB);
      if (Math.abs(SB) < 1e-9) continue;
      const MB = aB[QB / 3],
        [EB, iB, qB, fB, oB, HB] = [uB[2 * BB], uB[2 * BB + 1], uB[2 * nB], uB[2 * nB + 1], uB[2 * dB], uB[2 * dB + 1]],
        DB = Math.max(0, Math.floor(Math.min(rB, GB, gB))),
        FB = Math.min(zB - 1, Math.ceil(Math.max(rB, GB, gB))),
        YB = Math.max(0, Math.floor(Math.min(kB, LB, tB))),
        VB = Math.min(zB - 1, Math.ceil(Math.max(kB, LB, tB)));
      for (let QB = YB; QB <= VB; QB++)
        for (let BB = DB; BB <= FB; BB++) {
          const [nB, dB] = [BB + .5, QB + .5], uB = ((nB - rB) * (tB - kB) - (gB - rB) * (dB - kB)) / SB, UB = ((GB - rB) * (dB - kB) - (nB - rB) * (LB - kB)) / SB, aB = 1 - uB - UB;
          if (aB < 0 || uB < 0 || UB < 0) continue;
          const DB = aB * sB[IB + 2] + uB * sB[NB + 2] + UB * sB[pB + 2],
            FB = QB * zB + BB;
          if (DB <= JB[FB]) continue;
          const YB = Math.max(0, Math.min(jB.width - 1, Math.floor((aB * EB + uB * qB + UB * oB) * jB.width))),
            VB = 4 * (Math.max(0, Math.min(jB.height - 1, Math.floor((aB * iB + uB * fB + UB * HB) * jB.height))) * jB.width + YB);
          jB.pixels[VB + 3] < yB || (JB[FB] = DB, mB[4 * FB] = jB.pixels[VB] * MB, mB[4 * FB + 1] = jB.pixels[VB + 1] * MB, mB[4 * FB + 2] = jB.pixels[VB + 2] * MB, mB[4 * FB + 3] = 255)
        }
    }
    return pB(mB, zB, IB), mB
  }
  let UB = NaN,
    aB = new Int32Array(0);

  function pB(BB, jB, zB) {
    let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jB => 0 !== BB[4 * jB + 3];
    const nB = new Uint8Array(jB * jB);
    for (let IB = 0; IB < jB * jB; IB++) nB[IB] = QB(IB) ? 1 : 0;
    const dB = (BB, zB) => BB >= 0 && zB >= 0 && BB < jB && zB < jB && 0 === nB[zB * jB + BB],
      NB = new Float32Array(jB * jB).fill(1 / 0),
      uB = function(BB) {
        if (BB !== UB) {
          const jB = Math.ceil(BB + 1),
            zB = [];
          for (let QB = -jB; QB <= jB; QB++)
            for (let nB = -jB; nB <= jB; nB++) {
              const jB = nB * nB + QB * QB;
              jB > 0 && jB < (BB + 1) ** 2 && zB.push(nB, QB, jB)
            }
          UB = BB, aB = Int32Array.from(zB)
        }
        return aB
      }(zB);
    for (let IB = 0; IB < jB; IB++)
      for (let BB = 0; BB < jB; BB++) {
        if (1 === nB[IB * jB + BB] && (dB(BB - 1, IB) || dB(BB + 1, IB) || dB(BB, IB - 1) || dB(BB, IB + 1)))
          for (let zB = 0; zB < uB.length; zB += 3) {
            const QB = BB + uB[zB],
              nB = IB + uB[zB + 1];
            if (QB >= 0 && nB >= 0 && QB < jB && nB < jB) {
              const BB = nB * jB + QB;
              NB[BB] = Math.min(NB[BB], uB[zB + 2])
            }
          }
      }
    for (let UB = 0; UB < jB * jB; UB++) 1 !== nB[UB] && NB[UB] !== 1 / 0 && (BB.set(IB, 4 * UB), BB[4 * UB + 3] = Math.round(255 * Math.min(1, zB + 1 - Math.sqrt(NB[UB]))))
  }
  const rB = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    sB = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    JB = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const mB = 1e-6;

  function yB(BB, jB, zB, QB) {
    let {
      origin: nB,
      across: dB,
      down: IB,
      texture: NB,
      rect: [uB, UB, aB, pB],
      shade: rB
    } = QB;
    const sB = dB.x * IB.y - dB.y * IB.x;
    if (Math.abs(sB) < 1e-9) return;
    const JB = [nB.x, nB.x + dB.x, nB.x + IB.x, nB.x + dB.x + IB.x],
      yB = [nB.y, nB.y + dB.y, nB.y + IB.y, nB.y + dB.y + IB.y],
      kB = Math.max(0, Math.floor(Math.min(...JB))),
      GB = Math.min(zB - 1, Math.ceil(Math.max(...JB))),
      LB = Math.max(0, Math.floor(Math.min(...yB))),
      gB = Math.min(zB - 1, Math.ceil(Math.max(...yB)));
    for (let tB = LB; tB <= gB; tB++)
      for (let QB = kB; QB <= GB; QB++) {
        const JB = QB + .5 - nB.x,
          yB = tB + .5 - nB.y,
          kB = (JB * IB.y - yB * IB.x) / sB,
          GB = (dB.x * yB - dB.y * JB) / sB;
        if (kB < -mB || kB > 1 + mB || GB < -mB || GB > 1 + mB) continue;
        const LB = tB * zB + QB;
        jB[LB] = 1;
        const gB = uB + Math.min(Math.max(kB, 0), 1) * (aB - uB),
          SB = UB + Math.min(Math.max(GB, 0), 1) * (pB - UB),
          MB = Math.min(NB.width - 1, Math.floor(gB * NB.width)),
          EB = 4 * (Math.min(NB.height - 1, Math.floor(SB * NB.height)) * NB.width + MB),
          iB = NB.pixels[EB + 3] / 255;
        if (0 === iB) continue;
        const qB = 4 * LB,
          fB = BB[qB + 3] / 255 * (1 - iB),
          oB = iB + fB;
        for (let jB = 0; jB < 3; jB++) BB[qB + jB] = (NB.pixels[EB + jB] * rB * iB + BB[qB + jB] * fB) / oB;
        BB[qB + 3] = 255 * oB
      }
  }

  function kB(BB, jB, zB) {
    const QB = BB.get(jB);
    if (void 0 === QB) throw new Error(`no ${zB} was sent for ${jB.slice(0,100)}`);
    return QB
  }
  const GB = {
      pixelsOf(BB) {
        const jB = new OffscreenCanvas(BB.width, BB.height),
          zB = jB.getContext("2d");
        if (!zB) throw new Error("no 2D context");
        return zB.drawImage(BB, 0, 0), BB.close(), {
          width: jB.width,
          height: jB.height,
          pixels: zB.getImageData(0, 0, jB.width, jB.height).data
        }
      },
      async encode(BB, jB) {
        const zB = new OffscreenCanvas(jB, jB),
          QB = zB.getContext("2d");
        if (!QB) throw new Error("no 2D context");
        QB.putImageData(new ImageData(BB, jB, jB), 0, 0);
        const nB = await zB.convertToBlob();
        return new Promise(((BB, jB) => {
          const zB = new FileReader;
          zB.onload = () => {
            BB(zB.result)
          }, zB.onerror = () => {
            var BB;
            jB(null !== (BB = zB.error) && void 0 !== BB ? BB : new Error("the icon did not encode"))
          }, zB.readAsDataURL(nB)
        }))
      }
    },
    LB = globalThis.WorkerGlobalScope;
  void 0 !== LB && globalThis instanceof LB && function(QB, nB) {
    const IB = new Map,
      UB = new Map,
      aB = (BB, jB, zB) => {
        (async () => {
          try {
            QB.postMessage({
              type: "drawn",
              id: BB,
              url: await nB.encode(zB(), jB)
            })
          } catch (dB) {
            QB.postMessage({
              type: "failed",
              message: String(dB)
            })
          }
        })()
      };
    QB.onmessage = QB => {
      let {
        data: mB
      } = QB;
      if ("texture" === mB.type) IB.set(mB.url, nB.pixelsOf(mB.bitmap));
      else if ("model" === mB.type) UB.set(mB.name, {
        geometry: mB.geometry,
        texture: nB.pixelsOf(mB.bitmap)
      });
      else if ("draw" === mB.type) {
        const {
          id: QB,
          top: nB,
          left: uB,
          right: UB,
          itemType: GB,
          size: LB,
          outlineWidth: gB
        } = mB;
        aB(QB, LB, (() => function(QB, nB, IB, uB) {
          const UB = dB(IB, uB),
            aB = UB * BB,
            rB = UB * jB,
            sB = UB * zB,
            JB = Math.max(...nB.boxes.map((BB => BB[4]))),
            mB = IB / 2,
            kB = rB + (IB - rB - rB - JB * sB) / 2,
            GB = (BB, jB, zB) => ({
              x: mB + (BB - zB) * aB,
              y: kB - rB + (BB + zB) * rB + (JB - jB) * sB
            }),
            LB = (BB, jB, zB, QB, dB, IB) => ({
              origin: BB,
              across: {
                x: jB.x - BB.x,
                y: jB.y - BB.y
              },
              down: {
                x: zB.x - BB.x,
                y: zB.y - BB.y
              },
              texture: QB,
              rect: nB.cropFaces ? dB : [0, 0, 1, 1],
              shade: IB
            }),
            gB = new Uint8ClampedArray(IB * IB * 4),
            tB = new Uint8Array(IB * IB),
            SB = NB;
          for (const [BB, jB, zB, dB, NB, pB] of nB.boxes) {
            const nB = LB(GB(dB, NB, pB), GB(dB, NB, zB), GB(dB, jB, pB), QB.right, [1 - pB, 1 - NB, 1 - zB, 1 - jB], SB.right),
              uB = LB(GB(BB, NB, pB), GB(dB, NB, pB), GB(BB, jB, pB), QB.left, [BB, 1 - NB, dB, 1 - jB], SB.left),
              UB = LB(GB(BB, NB, zB), GB(dB, NB, zB), GB(BB, NB, pB), QB.top, [BB, zB, dB, pB], SB.top);
            for (const BB of [nB, uB, UB]) yB(gB, tB, IB, BB)
          }
          return pB(gB, IB, uB, (BB => 1 === tB[BB])), gB
        }({
          top: kB(IB, nB, "texture"),
          left: kB(IB, uB, "texture"),
          right: kB(IB, UB, "texture")
        }, function(BB) {
          return "SlabBlock" === BB ? sB : "StairsBlock" === BB ? JB : rB
        }(GB), LB, gB)))
      } else {
        const {
          id: BB,
          name: jB,
          size: zB,
          outlineWidth: QB
        } = mB;
        aB(BB, zB, (() => {
          const {
            geometry: BB,
            texture: nB
          } = kB(UB, jB, "model");
          return uB(BB, nB, zB, QB)
        }))
      }
    }, QB.postMessage({
      type: "started"
    })
  }(globalThis, GB)
})();