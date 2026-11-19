export const id = 2;
export const ids = [2];
export const modules = {
  35801: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      drawBlockIcon: () => XD,
      drawBlockIconUrl: () => mD,
      getDrawnBlockIcon: () => gD
    });
    var ID = cD(35809);
    const pD = Math.SQRT1_2,
      iD = Math.sqrt(3) / 2,
      fD = .5,
      bD = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      QD = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      wD = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const SD = 1e-6;

    function BD(DD, CD, cD, ID) {
      let {
        origin: pD,
        across: iD,
        down: fD,
        texture: bD,
        rect: [QD, wD, BD, yD],
        shade: MD
      } = ID;
      const tD = iD.x * fD.y - iD.y * fD.x;
      if (Math.abs(tD) < 1e-9) return;
      const ZD = [pD.x, pD.x + iD.x, pD.x + fD.x, pD.x + iD.x + fD.x],
        oD = [pD.y, pD.y + iD.y, pD.y + fD.y, pD.y + iD.y + fD.y],
        vD = Math.max(0, Math.floor(Math.min(...ZD))),
        ND = Math.min(cD - 1, Math.ceil(Math.max(...ZD))),
        gD = Math.max(0, Math.floor(Math.min(...oD))),
        XD = Math.min(cD - 1, Math.ceil(Math.max(...oD)));
      for (let mD = gD; mD <= XD; mD++)
        for (let ID = vD; ID <= ND; ID++) {
          const ZD = ID + .5 - pD.x,
            oD = mD + .5 - pD.y,
            vD = (ZD * fD.y - oD * fD.x) / tD,
            ND = (iD.x * oD - iD.y * ZD) / tD;
          if (vD < -SD || vD > 1 + SD || ND < -SD || ND > 1 + SD) continue;
          const gD = mD * cD + ID;
          CD[gD] = 1;
          const XD = QD + Math.min(Math.max(vD, 0), 1) * (BD - QD),
            nD = wD + Math.min(Math.max(ND, 0), 1) * (yD - wD),
            OD = Math.min(bD.width - 1, Math.floor(XD * bD.width)),
            PD = 4 * (Math.min(bD.height - 1, Math.floor(nD * bD.height)) * bD.width + OD),
            HD = bD.pixels[PD + 3] / 255;
          if (0 === HD) continue;
          const UD = 4 * gD,
            xD = DD[UD + 3] / 255 * (1 - HD),
            qD = HD + xD;
          for (let CD = 0; CD < 3; CD++) DD[UD + CD] = (bD.pixels[PD + CD] * MD * HD + DD[UD + CD] * xD) / qD;
          DD[UD + 3] = 255 * qD
        }
    }
    var yD = cD(35817);
    const MD = new Map,
      tD = new Map,
      ZD = new Map,
      oD = new Map;

    function vD(DD, CD, cD) {
      return `${CD}|${cD}|${DD}`
    }

    function ND(DD, CD, cD) {
      let ID = DD.get(CD);
      return void 0 === ID && (ID = cD().catch((cD => {
        throw DD.delete(CD), cD
      })), DD.set(CD, ID)), ID
    }

    function gD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return tD.get(vD(DD, CD, cD))
    }

    function XD(DD, CD, cD, ID) {
      const pD = vD(DD, CD, cD);
      return ND(MD, pD, (async () => {
        const iD = await OD(ID(DD), CD, nD(cD));
        return tD.set(pD, iD), iD
      }))
    }

    function mD(DD, CD, cD, ID) {
      return ND(ZD, vD(DD, CD, cD), (async () => {
        var pD;
        const iD = ID(DD),
          fD = nD(cD);
        return null !== (pD = await (0, yD.c)(iD, CD, fD)) && void 0 !== pD ? pD : (await OD(iD, CD, fD)).toDataURL()
      }))
    }

    function nD(DD) {
      return Math.max(1, Math.round(DD))
    }
    async function OD(DD, CD, cD) {
      let {
        top: SD,
        left: yD,
        right: MD,
        itemType: tD
      } = DD;
      const [ZD, oD, vD] = await Promise.all([PD(SD), PD(yD), PD(MD)]), ND = function(DD, CD, cD, bD) {
        const QD = .6 * cD,
          wD = QD * pD,
          SD = QD * pD * fD,
          yD = QD * iD,
          MD = Math.max(...CD.boxes.map((DD => DD[4]))),
          tD = wD / 2 + (cD - wD) / 2,
          ZD = SD + (cD - SD - SD - MD * yD) / 2,
          oD = (DD, CD, cD) => ({
            x: tD + (DD - cD) * wD,
            y: ZD - SD + (DD + cD) * SD + (MD - CD) * yD
          }),
          vD = (DD, cD, ID, pD, iD, fD) => ({
            origin: DD,
            across: {
              x: cD.x - DD.x,
              y: cD.y - DD.y
            },
            down: {
              x: ID.x - DD.x,
              y: ID.y - DD.y
            },
            texture: pD,
            rect: CD.cropFaces ? iD : [0, 0, 1, 1],
            shade: fD
          }),
          ND = new Uint8ClampedArray(cD * cD * 4),
          gD = new Uint8Array(cD * cD),
          XD = ID.e;
        for (const [ID, pD, iD, fD, mD, nD] of CD.boxes) {
          const CD = vD(oD(fD, mD, nD), oD(fD, mD, iD), oD(fD, pD, nD), DD.right, [1 - nD, 1 - mD, 1 - iD, 1 - pD], XD.right),
            bD = vD(oD(ID, mD, nD), oD(fD, mD, nD), oD(ID, pD, nD), DD.left, [ID, 1 - mD, fD, 1 - pD], XD.left),
            QD = vD(oD(ID, mD, iD), oD(fD, mD, iD), oD(ID, mD, nD), DD.top, [ID, iD, fD, nD], XD.top);
          for (const DD of [CD, bD, QD]) BD(ND, gD, cD, DD)
        }
        return (0, ID.h)(ND, cD, bD, (DD => 1 === gD[DD])), ND
      }({
        top: ZD,
        left: oD,
        right: vD
      }, function(DD) {
        return "SlabBlock" === DD ? QD : "StairsBlock" === DD ? wD : bD
      }(tD), CD, cD), gD = document.createElement("canvas");
      gD.width = CD, gD.height = CD;
      const XD = gD.getContext("2d");
      if (!XD) throw new Error("Failed to get 2D context");
      return XD.putImageData(new ImageData(ND, CD, CD), 0, 0), gD
    }

    function PD(DD) {
      return ND(oD, DD, (async () => {
        const CD = await (0, yD.j)(DD),
          cD = document.createElement("canvas");
        cD.width = CD.width, cD.height = CD.height;
        const ID = cD.getContext("2d");
        if (!ID) throw new Error("Failed to get 2D context");
        return ID.drawImage(CD, 0, 0), {
          width: CD.width,
          height: CD.height,
          pixels: ID.getImageData(0, 0, CD.width, CD.height).data
        }
      }))
    }
  },
  35817: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => UD,
      f: () => xD,
      j: () => gD
    });
    var ID = cD(300),
      pD = cD(90);
    const iD = new(cD(35822).c)(new URL(cD.p + cD.u(3), cD.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var fD = cD(1763),
      bD = cD(2990);
    const QD = 1e4,
      wD = 3e4;
    let SD = null,
      BD = null,
      yD = null,
      MD = !1,
      tD = 0;
    const ZD = new Map;
    let oD = null;
    const vD = new Map,
      ND = new Map;

    function gD(DD) {
      const CD = new Promise(((CD, cD) => {
        const ID = new Image;
        ID.crossOrigin = "anonymous", ID.fetchPriority = "high", ID.onload = () => {
          CD(ID)
        }, ID.onerror = () => {
          cD(new Error(`A block icon's texture did not load: ${DD.slice(0,100)}`))
        }, ID.src = DD
      }));
      return (0, bD.f)(CD)
    }

    function XD(DD) {
      var CD, cD;
      MD || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${DD}`), MD = !0, null === (CD = SD) || void 0 === CD || CD.terminate(), SD = null, BD = null, vD.clear(), ND.clear();
      for (const ID of ZD.values()) ID(null);
      ZD.clear(), null === (cD = oD) || void 0 === cD || cD()
    }

    function mD() {
      return yD ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === ID.b.ios_icon_worker_v1 && (0, pD.isWebKit)()) return;
        try {
          SD = await async function() {
            return await iD.ready(), iD.start()
          }()
        } catch (bD) {
          return void XD(`did not start (${String(bD)})`)
        }
        let DD = () => {};
        const CD = new Promise((CD => {
          DD = CD
        }));
        SD.onmessage = CD => {
          let {
            data: cD
          } = CD;
          if ("started" === cD.type) BD = SD, DD();
          else if ("failed" === cD.type) XD(`failed a draw (${cD.message})`);
          else {
            var ID, pD;
            null === (ID = ZD.get(cD.id)) || void 0 === ID || ID(cD.url), ZD.delete(cD.id), null === (pD = oD) || void 0 === pD || pD()
          }
        }, SD.onerror = CD => {
          CD.preventDefault(), XD(`stopped (${CD.message||"its script did not load or run"})`), DD()
        };
        const cD = `did not start in ${wD/1e3} s`;
        await (0, fD.k)(CD, wD, cD).catch((() => {
          XD(cD)
        }))
      }(), yD
    }

    function nD() {
      if (null !== oD || 0 === ZD.size) return;
      const DD = new Promise((DD => {
          oD = DD
        })),
        CD = `did not answer in ${QD/1e3} s`;
      (0, fD.k)(DD, QD, CD).then((() => {
        oD = null, nD()
      }), (() => {
        oD = null, XD(CD)
      }))
    }

    function OD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      DD.postMessage(CD, cD)
    }

    function PD(DD, CD, cD, ID) {
      let pD = CD.get(cD);
      return void 0 === pD && (pD = ID().then((async CD => {
        let {
          image: cD,
          request: ID
        } = CD;
        try {
          const CD = await createImageBitmap(cD);
          OD(DD, ID(CD), [CD])
        } catch (pD) {
          XD(`could not take an image (${String(pD)})`)
        }
      })), pD.catch((() => {
        CD.get(cD) === pD && CD.delete(cD)
      })), CD.set(cD, pD)), pD
    }
    async function HD(DD, CD) {
      mD();
      const cD = BD;
      if (null === cD) return null;
      if (await DD(cD), BD !== cD) return null;
      const ID = ++tD;
      return new Promise((DD => {
        ZD.set(ID, DD), OD(cD, CD(ID)), nD()
      }))
    }

    function UD(DD, CD, cD) {
      return HD((CD => Promise.all([DD.top, DD.left, DD.right].map((DD => function(DD, CD) {
        return PD(DD, vD, CD, (async () => ({
          image: await gD(CD),
          request: DD => ({
            type: "texture",
            url: CD,
            bitmap: DD
          })
        })))
      }(CD, DD))))), (ID => ({
        type: "draw",
        id: ID,
        ...DD,
        size: CD,
        outlineWidth: cD
      })))
    }

    function xD(DD, CD, cD, ID) {
      return HD((cD => function(DD, CD, cD) {
        return PD(DD, ND, CD, (async () => {
          const {
            texture: DD,
            ...ID
          } = await cD();
          return {
            image: await gD(DD),
            request: DD => ({
              type: "model",
              name: CD,
              bitmap: DD,
              geometry: ID
            })
          }
        }))
      }(cD, DD, CD)), (CD => ({
        type: "drawModel",
        id: CD,
        name: DD,
        size: cD,
        outlineWidth: ID
      })))
    }
  },
  35809: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      h: () => bD,
      j: () => fD
    });
    const ID = 1 / 32,
      pD = [15, 15, 15],
      iD = {
        top: 1,
        left: .85,
        right: .7
      };

    function fD(DD, CD, cD, pD) {
      const {
        vertices: iD,
        uvs: fD,
        indices: QD,
        shades: wD
      } = DD, SD = cD * ID, BD = cD - 2 * SD, yD = new Float32Array(iD.length);
      for (let ID = 0; ID < iD.length; ID += 3) yD[ID] = SD + iD[ID] * BD, yD[ID + 1] = SD + iD[ID + 1] * BD, yD[ID + 2] = iD[ID + 2];
      const MD = new Float32Array(cD * cD).fill(-1 / 0),
        tD = new Uint8ClampedArray(cD * cD * 4),
        ZD = 255 * DD.alphaCutoff;
      for (let ID = 0; ID < QD.length; ID += 3) {
        const [DD, pD, iD] = [QD[ID], QD[ID + 1], QD[ID + 2]], [bD, SD, BD] = [3 * DD, 3 * pD, 3 * iD], [oD, vD, ND, gD, XD, mD] = [yD[bD], yD[bD + 1], yD[SD], yD[SD + 1], yD[BD], yD[BD + 1]], nD = (ND - oD) * (mD - vD) - (XD - oD) * (gD - vD);
        if (Math.abs(nD) < 1e-9) continue;
        const OD = wD[ID / 3],
          [PD, HD, UD, xD, qD, JD] = [fD[2 * DD], fD[2 * DD + 1], fD[2 * pD], fD[2 * pD + 1], fD[2 * iD], fD[2 * iD + 1]],
          KD = Math.max(0, Math.floor(Math.min(oD, ND, XD))),
          aD = Math.min(cD - 1, Math.ceil(Math.max(oD, ND, XD))),
          VD = Math.max(0, Math.floor(Math.min(vD, gD, mD))),
          zD = Math.min(cD - 1, Math.ceil(Math.max(vD, gD, mD)));
        for (let ID = VD; ID <= zD; ID++)
          for (let DD = KD; DD <= aD; DD++) {
            const [pD, iD] = [DD + .5, ID + .5], fD = ((pD - oD) * (mD - vD) - (XD - oD) * (iD - vD)) / nD, QD = ((ND - oD) * (iD - vD) - (pD - oD) * (gD - vD)) / nD, wD = 1 - fD - QD;
            if (wD < 0 || fD < 0 || QD < 0) continue;
            const KD = wD * yD[bD + 2] + fD * yD[SD + 2] + QD * yD[BD + 2],
              aD = ID * cD + DD;
            if (KD <= MD[aD]) continue;
            const VD = Math.max(0, Math.min(CD.width - 1, Math.floor((wD * PD + fD * UD + QD * qD) * CD.width))),
              zD = 4 * (Math.max(0, Math.min(CD.height - 1, Math.floor((wD * HD + fD * xD + QD * JD) * CD.height))) * CD.width + VD);
            CD.pixels[zD + 3] < ZD || (MD[aD] = KD, tD[4 * aD] = CD.pixels[zD] * OD, tD[4 * aD + 1] = CD.pixels[zD + 1] * OD, tD[4 * aD + 2] = CD.pixels[zD + 2] * OD, tD[4 * aD + 3] = 255)
          }
      }
      return bD(tD, cD, pD), tD
    }

    function bD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CD => 0 !== DD[4 * CD + 3];
      const iD = (DD, cD) => DD < 0 || cD < 0 || DD >= CD || cD >= CD || !ID(cD * CD + DD),
        fD = [];
      for (let pD = 0; pD < CD; pD++)
        for (let DD = 0; DD < CD; DD++)
          if (!iD(DD, pD)) DD: for (let ID = -cD; ID <= cD; ID++) {
            const bD = cD - Math.abs(ID);
            for (let cD = -bD; cD <= bD; cD++)
              if (iD(DD + cD, pD + ID)) {
                fD.push(pD * CD + DD);
                break DD
              }
          }
      for (const bD of fD) DD.set(pD, 4 * bD), DD[4 * bD + 3] = 255
    }
  },
  35822: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    const ID = {
      wait: function(DD) {
        return new Promise((CD => {
          setTimeout(CD, DD)
        }))
      },
      stallMs: 2e4
    };
    class pD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ID;
        this.url = DD, this.options = CD, this.timing = cD, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = DD
      }
      ready() {
        if (null === this.fetched) {
          const DD = new AbortController;
          this.fetchAbort = DD, this.fetched = this.fetchWithRetries(DD.signal).finally((() => {
            this.fetchAbort === DD && (this.fetchAbort = null)
          }))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(DD) {
        for (let CD = 0;; CD++) {
          const cD = new URL(this.url);
          if (CD > 0 && cD.searchParams.set("cache-bust", `${Date.now()}-${CD}`), await this.fetchWhole(cD, DD)) return void(this.scriptUrl = cD);
          if (CD >= 3 || DD.aborted) return;
          if (await this.timing.wait(500 * 2 ** CD), DD.aborted) return
        }
      }
      async fetchWhole(DD, CD) {
        const cD = new AbortController;
        let ID;
        const pD = () => {
            clearTimeout(ID), ID = setTimeout((() => {
              cD.abort()
            }), this.timing.stallMs)
          },
          iD = () => {
            cD.abort()
          };
        CD.addEventListener("abort", iD, {
          once: !0
        }), pD();
        try {
          var fD;
          const CD = await fetch(DD, {
            signal: cD.signal
          });
          if (!CD.ok) return !1;
          const ID = null === (fD = CD.body) || void 0 === fD ? void 0 : fD.getReader();
          if (!ID) return !1;
          for (;;) {
            const {
              done: DD
            } = await ID.read();
            if (DD) return !0;
            pD()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(ID), CD.removeEventListener("abort", iD)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);