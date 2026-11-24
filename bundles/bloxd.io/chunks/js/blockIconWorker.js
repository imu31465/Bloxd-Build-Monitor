(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var SS = __webpack_require__.u,
        HS = __webpack_require__.e,
        gS = {},
        tS = {};
      __webpack_require__.u = function(HS) {
        return SS(HS) + (gS.hasOwnProperty(HS) ? "?" + gS[HS] : "")
      }, __webpack_require__.e = function(bS) {
        return HS(bS).catch((function(HS) {
          var XS = tS.hasOwnProperty(bS) ? tS[bS] : 4;
          if (XS < 1) {
            var xS = SS(bS);
            throw HS.message = "Loading chunk " + bS + " failed after 4 retries.\n(" + xS + ")", HS.request = xS, gS[bS] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete tS[bS]
            }), 0), HS
          }
          return new Promise((function(SS) {
            var HS = 4 - XS + 1;
            setTimeout((function() {
              var HS = "cache-bust=" + Date.now();
              gS[bS] = HS, tS[bS] = XS - 1, SS(__webpack_require__.e(bS))
            }), function(SS) {
              return 500 * Math.pow(2, SS)
            }(HS))
          }))
        }))
      }
    }
  })();
  const SS = Math.SQRT1_2,
    HS = Math.SQRT1_2 / 2,
    gS = Math.sqrt(3) / 2,
    tS = 2 * SS,
    bS = 2 * HS + gS;

  function XS(HS, gS) {
    const tS = gS > 0 ? gS + 1 : 0,
      XS = .6 * HS - gS / SS;
    return Math.max(0, Math.min(XS, (HS - 2 * tS) / bS))
  }
  const xS = [15, 15, 15],
    NS = {
      top: 1,
      left: .85,
      right: .7
    };

  function qS(SS, HS, gS, xS) {
    const {
      vertices: NS,
      uvs: qS,
      indices: uS,
      shades: IS
    } = SS, kS = function(SS, HS) {
      const gS = XS(SS, HS),
        xS = tS * gS,
        NS = bS * gS;
      return {
        left: (SS - xS) / 2,
        top: (SS - NS) / 2,
        width: xS,
        height: NS
      }
    }(gS, xS), aS = new Float32Array(NS.length);
    for (let tS = 0; tS < NS.length; tS += 3) aS[tS] = kS.left + NS[tS] * kS.width, aS[tS + 1] = kS.top + NS[tS + 1] * kS.height, aS[tS + 2] = NS[tS + 2];
    const KS = new Float32Array(gS * gS).fill(-1 / 0),
      jS = new Uint8ClampedArray(gS * gS * 4),
      GS = 255 * SS.alphaCutoff;
    for (let tS = 0; tS < uS.length; tS += 3) {
      const [SS, bS, XS] = [uS[tS], uS[tS + 1], uS[tS + 2]], [xS, NS, fS] = [3 * SS, 3 * bS, 3 * XS], [kS, CS, nS, PS, QS, DS] = [aS[xS], aS[xS + 1], aS[NS], aS[NS + 1], aS[fS], aS[fS + 1]], wS = (nS - kS) * (DS - CS) - (QS - kS) * (PS - CS);
      if (Math.abs(wS) < 1e-9) continue;
      const hS = IS[tS / 3],
        [ZS, JS, OS, dS, cS, vS] = [qS[2 * SS], qS[2 * SS + 1], qS[2 * bS], qS[2 * bS + 1], qS[2 * XS], qS[2 * XS + 1]],
        ES = Math.max(0, Math.floor(Math.min(kS, nS, QS))),
        LS = Math.min(gS - 1, Math.ceil(Math.max(kS, nS, QS))),
        YS = Math.max(0, Math.floor(Math.min(CS, PS, DS))),
        AS = Math.min(gS - 1, Math.ceil(Math.max(CS, PS, DS)));
      for (let tS = YS; tS <= AS; tS++)
        for (let SS = ES; SS <= LS; SS++) {
          const [bS, XS] = [SS + .5, tS + .5], qS = ((bS - kS) * (DS - CS) - (QS - kS) * (XS - CS)) / wS, uS = ((nS - kS) * (XS - CS) - (bS - kS) * (PS - CS)) / wS, IS = 1 - qS - uS;
          if (IS < 0 || qS < 0 || uS < 0) continue;
          const ES = IS * aS[xS + 2] + qS * aS[NS + 2] + uS * aS[fS + 2],
            LS = tS * gS + SS;
          if (ES <= KS[LS]) continue;
          const YS = Math.max(0, Math.min(HS.width - 1, Math.floor((IS * ZS + qS * OS + uS * cS) * HS.width))),
            AS = 4 * (Math.max(0, Math.min(HS.height - 1, Math.floor((IS * JS + qS * dS + uS * vS) * HS.height))) * HS.width + YS);
          HS.pixels[AS + 3] < GS || (KS[LS] = ES, jS[4 * LS] = HS.pixels[AS] * hS, jS[4 * LS + 1] = HS.pixels[AS + 1] * hS, jS[4 * LS + 2] = HS.pixels[AS + 2] * hS, jS[4 * LS + 3] = 255)
        }
    }
    return fS(jS, gS, xS), jS
  }
  let uS = NaN,
    IS = new Int32Array(0);

  function fS(SS, HS, gS) {
    let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HS => 0 !== SS[4 * HS + 3];
    const bS = new Uint8Array(HS * HS);
    for (let xS = 0; xS < HS * HS; xS++) bS[xS] = tS(xS) ? 1 : 0;
    const XS = (SS, gS) => SS >= 0 && gS >= 0 && SS < HS && gS < HS && 0 === bS[gS * HS + SS],
      NS = new Float32Array(HS * HS).fill(1 / 0),
      qS = function(SS) {
        if (SS !== uS) {
          const HS = Math.ceil(SS + 1),
            gS = [];
          for (let tS = -HS; tS <= HS; tS++)
            for (let bS = -HS; bS <= HS; bS++) {
              const HS = bS * bS + tS * tS;
              HS > 0 && HS < (SS + 1) ** 2 && gS.push(bS, tS, HS)
            }
          uS = SS, IS = Int32Array.from(gS)
        }
        return IS
      }(gS);
    for (let xS = 0; xS < HS; xS++)
      for (let SS = 0; SS < HS; SS++) {
        if (1 === bS[xS * HS + SS] && (XS(SS - 1, xS) || XS(SS + 1, xS) || XS(SS, xS - 1) || XS(SS, xS + 1)))
          for (let gS = 0; gS < qS.length; gS += 3) {
            const tS = SS + qS[gS],
              bS = xS + qS[gS + 1];
            if (tS >= 0 && bS >= 0 && tS < HS && bS < HS) {
              const SS = bS * HS + tS;
              NS[SS] = Math.min(NS[SS], qS[gS + 2])
            }
          }
      }
    for (let uS = 0; uS < HS * HS; uS++) 1 !== bS[uS] && NS[uS] !== 1 / 0 && (SS.set(xS, 4 * uS), SS[4 * uS + 3] = Math.round(255 * Math.min(1, gS + 1 - Math.sqrt(NS[uS]))))
  }
  const kS = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    aS = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    KS = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const jS = 1e-6;

  function GS(SS, HS, gS, tS) {
    let {
      origin: bS,
      across: XS,
      down: xS,
      texture: NS,
      rect: [qS, uS, IS, fS],
      shade: kS
    } = tS;
    const aS = XS.x * xS.y - XS.y * xS.x;
    if (Math.abs(aS) < 1e-9) return;
    const KS = [bS.x, bS.x + XS.x, bS.x + xS.x, bS.x + XS.x + xS.x],
      GS = [bS.y, bS.y + XS.y, bS.y + xS.y, bS.y + XS.y + xS.y],
      CS = Math.max(0, Math.floor(Math.min(...KS))),
      nS = Math.min(gS - 1, Math.ceil(Math.max(...KS))),
      PS = Math.max(0, Math.floor(Math.min(...GS))),
      QS = Math.min(gS - 1, Math.ceil(Math.max(...GS)));
    for (let DS = PS; DS <= QS; DS++)
      for (let tS = CS; tS <= nS; tS++) {
        const KS = tS + .5 - bS.x,
          GS = DS + .5 - bS.y,
          CS = (KS * xS.y - GS * xS.x) / aS,
          nS = (XS.x * GS - XS.y * KS) / aS;
        if (CS < -jS || CS > 1 + jS || nS < -jS || nS > 1 + jS) continue;
        const PS = DS * gS + tS;
        HS[PS] = 1;
        const QS = qS + Math.min(Math.max(CS, 0), 1) * (IS - qS),
          wS = uS + Math.min(Math.max(nS, 0), 1) * (fS - uS),
          hS = Math.min(NS.width - 1, Math.floor(QS * NS.width)),
          ZS = 4 * (Math.min(NS.height - 1, Math.floor(wS * NS.height)) * NS.width + hS),
          JS = NS.pixels[ZS + 3] / 255;
        if (0 === JS) continue;
        const OS = 4 * PS,
          dS = SS[OS + 3] / 255 * (1 - JS),
          cS = JS + dS;
        for (let HS = 0; HS < 3; HS++) SS[OS + HS] = (NS.pixels[ZS + HS] * kS * JS + SS[OS + HS] * dS) / cS;
        SS[OS + 3] = 255 * cS
      }
  }

  function CS(SS, HS, gS) {
    const tS = SS.get(HS);
    if (void 0 === tS) throw new Error(`no ${gS} was sent for ${HS.slice(0,100)}`);
    return tS
  }
  const nS = {
      pixelsOf(SS) {
        const HS = new OffscreenCanvas(SS.width, SS.height),
          gS = HS.getContext("2d");
        if (!gS) throw new Error("no 2D context");
        return gS.drawImage(SS, 0, 0), SS.close(), {
          width: HS.width,
          height: HS.height,
          pixels: gS.getImageData(0, 0, HS.width, HS.height).data
        }
      },
      async encode(SS, HS) {
        const gS = new OffscreenCanvas(HS, HS),
          tS = gS.getContext("2d");
        if (!tS) throw new Error("no 2D context");
        tS.putImageData(new ImageData(SS, HS, HS), 0, 0);
        const bS = await gS.convertToBlob();
        return new Promise(((SS, HS) => {
          const gS = new FileReader;
          gS.onload = () => {
            SS(gS.result)
          }, gS.onerror = () => {
            var SS;
            HS(null !== (SS = gS.error) && void 0 !== SS ? SS : new Error("the icon did not encode"))
          }, gS.readAsDataURL(bS)
        }))
      }
    },
    PS = globalThis.WorkerGlobalScope;
  void 0 !== PS && globalThis instanceof PS && function(tS, bS) {
    const xS = new Map,
      uS = new Map,
      IS = (SS, HS, gS) => {
        (async () => {
          try {
            tS.postMessage({
              type: "drawn",
              id: SS,
              url: await bS.encode(gS(), HS)
            })
          } catch (XS) {
            tS.postMessage({
              type: "failed",
              message: String(XS)
            })
          }
        })()
      };
    tS.onmessage = tS => {
      let {
        data: jS
      } = tS;
      if ("texture" === jS.type) xS.set(jS.url, bS.pixelsOf(jS.bitmap));
      else if ("model" === jS.type) uS.set(jS.name, {
        geometry: jS.geometry,
        texture: bS.pixelsOf(jS.bitmap)
      });
      else if ("draw" === jS.type) {
        const {
          id: tS,
          top: bS,
          left: qS,
          right: uS,
          itemType: nS,
          size: PS,
          outlineWidth: QS
        } = jS;
        IS(tS, PS, (() => function(tS, bS, xS, qS) {
          const uS = XS(xS, qS),
            IS = uS * SS,
            kS = uS * HS,
            aS = uS * gS,
            KS = Math.max(...bS.boxes.map((SS => SS[4]))),
            jS = xS / 2,
            CS = kS + (xS - kS - kS - KS * aS) / 2,
            nS = (SS, HS, gS) => ({
              x: jS + (SS - gS) * IS,
              y: CS - kS + (SS + gS) * kS + (KS - HS) * aS
            }),
            PS = (SS, HS, gS, tS, XS, xS) => ({
              origin: SS,
              across: {
                x: HS.x - SS.x,
                y: HS.y - SS.y
              },
              down: {
                x: gS.x - SS.x,
                y: gS.y - SS.y
              },
              texture: tS,
              rect: bS.cropFaces ? XS : [0, 0, 1, 1],
              shade: xS
            }),
            QS = new Uint8ClampedArray(xS * xS * 4),
            DS = new Uint8Array(xS * xS),
            wS = NS;
          for (const [SS, HS, gS, XS, NS, fS] of bS.boxes) {
            const bS = PS(nS(XS, NS, fS), nS(XS, NS, gS), nS(XS, HS, fS), tS.right, [1 - fS, 1 - NS, 1 - gS, 1 - HS], wS.right),
              qS = PS(nS(SS, NS, fS), nS(XS, NS, fS), nS(SS, HS, fS), tS.left, [SS, 1 - NS, XS, 1 - HS], wS.left),
              uS = PS(nS(SS, NS, gS), nS(XS, NS, gS), nS(SS, NS, fS), tS.top, [SS, gS, XS, fS], wS.top);
            for (const SS of [bS, qS, uS]) GS(QS, DS, xS, SS)
          }
          return fS(QS, xS, qS, (SS => 1 === DS[SS])), QS
        }({
          top: CS(xS, bS, "texture"),
          left: CS(xS, qS, "texture"),
          right: CS(xS, uS, "texture")
        }, function(SS) {
          return "SlabBlock" === SS ? aS : "StairsBlock" === SS ? KS : kS
        }(nS), PS, QS)))
      } else {
        const {
          id: SS,
          name: HS,
          size: gS,
          outlineWidth: tS
        } = jS;
        IS(SS, gS, (() => {
          const {
            geometry: SS,
            texture: bS
          } = CS(uS, HS, "model");
          return qS(SS, bS, gS, tS)
        }))
      }
    }, tS.postMessage({
      type: "started"
    })
  }(globalThis, nS)
})();