export const id = 217;
export const ids = [217];
export const modules = {
  36395: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => PD,
      h: () => CD,
      i: () => MD
    });
    var pD = wD(287),
      sD = wD(103);
    const KD = new(wD(36404).e)(new URL(wD.p + wD.u(3), wD.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var rD = wD(1797),
      LD = wD(2122);
    const cD = 1e4,
      gD = 3e4;
    let RD = null,
      AD = null,
      UD = null,
      fD = !1,
      ID = 0;
    const BD = new Map;
    let GD = null;
    const hD = new Map,
      nD = new Map;

    function MD(DD) {
      const zD = new Promise(((zD, wD) => {
        const pD = new Image;
        pD.crossOrigin = "anonymous", pD.fetchPriority = "high", pD.onload = () => {
          zD(pD)
        }, pD.onerror = () => {
          wD(new Error(`A block icon's texture did not load: ${DD.slice(0,100)}`))
        }, pD.src = DD
      }));
      return (0, LD.e)(zD)
    }

    function OD(DD) {
      var zD, wD;
      fD || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${DD}`), fD = !0, null === (zD = RD) || void 0 === zD || zD.terminate(), RD = null, AD = null, hD.clear(), nD.clear();
      for (const pD of BD.values()) pD(null);
      BD.clear(), null === (wD = GD) || void 0 === wD || wD()
    }

    function JD() {
      return UD ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === pD.b.ios_icon_worker_v1 && (0, sD.isWebKit)()) return;
        try {
          RD = await async function() {
            return await KD.ready(), KD.start()
          }()
        } catch (LD) {
          return void OD(`did not start (${String(LD)})`)
        }
        let DD = () => {};
        const zD = new Promise((zD => {
          DD = zD
        }));
        RD.onmessage = zD => {
          let {
            data: wD
          } = zD;
          if ("started" === wD.type) AD = RD, DD();
          else if ("failed" === wD.type) OD(`failed a draw (${wD.message})`);
          else {
            var pD, sD;
            null === (pD = BD.get(wD.id)) || void 0 === pD || pD(wD.url), BD.delete(wD.id), null === (sD = GD) || void 0 === sD || sD()
          }
        }, RD.onerror = zD => {
          zD.preventDefault(), OD(`stopped (${zD.message||"its script did not load or run"})`), DD()
        };
        const wD = `did not start in ${gD/1e3} s`;
        await (0, rD.m)(zD, gD, wD).catch((() => {
          OD(wD)
        }))
      }(), UD
    }

    function ED() {
      if (null !== GD || 0 === BD.size) return;
      const DD = new Promise((DD => {
          GD = DD
        })),
        zD = `did not answer in ${cD/1e3} s`;
      (0, rD.m)(DD, cD, zD).then((() => {
        GD = null, ED()
      }), (() => {
        GD = null, OD(zD)
      }))
    }

    function QD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      DD.postMessage(zD, wD)
    }

    function XD(DD, zD, wD, pD) {
      let sD = zD.get(wD);
      return void 0 === sD && (sD = pD().then((async zD => {
        let {
          image: wD,
          request: pD
        } = zD;
        try {
          const zD = await createImageBitmap(wD);
          QD(DD, pD(zD), [zD])
        } catch (sD) {
          OD(`could not take an image (${String(sD)})`)
        }
      })), sD.catch((() => {
        zD.get(wD) === sD && zD.delete(wD)
      })), zD.set(wD, sD)), sD
    }
    async function VD(DD, zD) {
      JD();
      const wD = AD;
      if (null === wD) return null;
      if (await DD(wD), AD !== wD) return null;
      const pD = ++ID;
      return new Promise((DD => {
        BD.set(pD, DD), QD(wD, zD(pD)), ED()
      }))
    }

    function PD(DD, zD, wD) {
      return VD((zD => Promise.all([DD.top, DD.left, DD.right].map((DD => function(DD, zD) {
        return XD(DD, hD, zD, (async () => ({
          image: await MD(zD),
          request: DD => ({
            type: "texture",
            url: zD,
            bitmap: DD
          })
        })))
      }(zD, DD))))), (pD => ({
        type: "draw",
        id: pD,
        ...DD,
        size: zD,
        outlineWidth: wD
      })))
    }

    function CD(DD, zD, wD, pD) {
      return VD((wD => function(DD, zD, wD) {
        return XD(DD, nD, zD, (async () => {
          const {
            texture: DD,
            ...pD
          } = await wD();
          return {
            image: await MD(DD),
            request: DD => ({
              type: "model",
              name: zD,
              bitmap: DD,
              geometry: pD
            })
          }
        }))
      }(wD, DD, zD)), (zD => ({
        type: "drawModel",
        id: zD,
        name: DD,
        size: wD,
        outlineWidth: pD
      })))
    }
  },
  36386: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      g: () => cD,
      i: () => rD,
      j: () => UD,
      m: () => gD
    });
    const pD = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      sD = .6,
      KD = {
        width: 2 * pD.across,
        height: 2 * pD.down + pD.up
      };

    function rD(DD, zD) {
      const wD = zD > 0 ? zD + 1 : 0,
        rD = DD * sD - zD / pD.across;
      return Math.max(0, Math.min(rD, (DD - 2 * wD) / KD.height))
    }
    const LD = [15, 15, 15],
      cD = {
        top: 1,
        left: .85,
        right: .7
      };

    function gD(DD, zD, wD, pD) {
      const {
        vertices: sD,
        uvs: LD,
        indices: cD,
        shades: gD
      } = DD, RD = function(DD, zD) {
        const wD = rD(DD, zD),
          pD = KD.width * wD,
          sD = KD.height * wD;
        return {
          left: (DD - pD) / 2,
          top: (DD - sD) / 2,
          width: pD,
          height: sD
        }
      }(wD, pD), AD = new Float32Array(sD.length);
      for (let KD = 0; KD < sD.length; KD += 3) AD[KD] = RD.left + sD[KD] * RD.width, AD[KD + 1] = RD.top + sD[KD + 1] * RD.height, AD[KD + 2] = sD[KD + 2];
      const fD = new Float32Array(wD * wD).fill(-1 / 0),
        ID = new Uint8ClampedArray(wD * wD * 4),
        BD = 255 * DD.alphaCutoff;
      for (let KD = 0; KD < cD.length; KD += 3) {
        const [DD, pD, sD] = [cD[KD], cD[KD + 1], cD[KD + 2]], [rD, RD, UD] = [3 * DD, 3 * pD, 3 * sD], [GD, hD, nD, MD, OD, JD] = [AD[rD], AD[rD + 1], AD[RD], AD[RD + 1], AD[UD], AD[UD + 1]], ED = (nD - GD) * (JD - hD) - (OD - GD) * (MD - hD);
        if (Math.abs(ED) < 1e-9) continue;
        const QD = gD[KD / 3],
          [XD, VD, PD, CD, xD, TD] = [LD[2 * DD], LD[2 * DD + 1], LD[2 * pD], LD[2 * pD + 1], LD[2 * sD], LD[2 * sD + 1]],
          bD = Math.max(0, Math.floor(Math.min(GD, nD, OD))),
          jD = Math.min(wD - 1, Math.ceil(Math.max(GD, nD, OD))),
          dD = Math.max(0, Math.floor(Math.min(hD, MD, JD))),
          SD = Math.min(wD - 1, Math.ceil(Math.max(hD, MD, JD)));
        for (let KD = dD; KD <= SD; KD++)
          for (let DD = bD; DD <= jD; DD++) {
            const [pD, sD] = [DD + .5, KD + .5], LD = ((pD - GD) * (JD - hD) - (OD - GD) * (sD - hD)) / ED, cD = ((nD - GD) * (sD - hD) - (pD - GD) * (MD - hD)) / ED, gD = 1 - LD - cD;
            if (gD < 0 || LD < 0 || cD < 0) continue;
            const bD = gD * AD[rD + 2] + LD * AD[RD + 2] + cD * AD[UD + 2],
              jD = KD * wD + DD;
            if (bD <= fD[jD]) continue;
            const dD = Math.max(0, Math.min(zD.width - 1, Math.floor((gD * XD + LD * PD + cD * xD) * zD.width))),
              SD = 4 * (Math.max(0, Math.min(zD.height - 1, Math.floor((gD * VD + LD * CD + cD * TD) * zD.height))) * zD.width + dD);
            zD.pixels[SD + 3] < BD || (fD[jD] = bD, ID[4 * jD] = zD.pixels[SD] * QD, ID[4 * jD + 1] = zD.pixels[SD + 1] * QD, ID[4 * jD + 2] = zD.pixels[SD + 2] * QD, ID[4 * jD + 3] = 255)
          }
      }
      return UD(ID, wD, pD), ID
    }
    let RD = NaN,
      AD = new Int32Array(0);

    function UD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zD => 0 !== DD[4 * zD + 3];
      const sD = new Uint8Array(zD * zD);
      for (let LD = 0; LD < zD * zD; LD++) sD[LD] = pD(LD) ? 1 : 0;
      const KD = (DD, wD) => DD >= 0 && wD >= 0 && DD < zD && wD < zD && 0 === sD[wD * zD + DD],
        rD = new Float32Array(zD * zD).fill(1 / 0),
        cD = function(DD) {
          if (DD !== RD) {
            const zD = Math.ceil(DD + 1),
              wD = [];
            for (let pD = -zD; pD <= zD; pD++)
              for (let sD = -zD; sD <= zD; sD++) {
                const zD = sD * sD + pD * pD;
                zD > 0 && zD < (DD + 1) ** 2 && wD.push(sD, pD, zD)
              }
            RD = DD, AD = Int32Array.from(wD)
          }
          return AD
        }(wD);
      for (let LD = 0; LD < zD; LD++)
        for (let DD = 0; DD < zD; DD++) {
          if (1 === sD[LD * zD + DD] && (KD(DD - 1, LD) || KD(DD + 1, LD) || KD(DD, LD - 1) || KD(DD, LD + 1)))
            for (let wD = 0; wD < cD.length; wD += 3) {
              const pD = DD + cD[wD],
                sD = LD + cD[wD + 1];
              if (pD >= 0 && sD >= 0 && pD < zD && sD < zD) {
                const DD = sD * zD + pD;
                rD[DD] = Math.min(rD[DD], cD[wD + 2])
              }
            }
        }
      for (let gD = 0; gD < zD * zD; gD++) 1 !== sD[gD] && rD[gD] !== 1 / 0 && (DD.set(LD, 4 * gD), DD[4 * gD + 3] = Math.round(255 * Math.min(1, wD + 1 - Math.sqrt(rD[gD]))))
    }
  },
  36404: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    const pD = {
      wait: function(DD) {
        return new Promise((zD => {
          setTimeout(zD, DD)
        }))
      },
      stallMs: 2e4
    };
    class sD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD;
        this.url = DD, this.options = zD, this.timing = wD, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = DD
      }
      ready() {
        if (null === this.fetched) {
          const DD = new AbortController;
          this.fetchAbort = DD, this.fetched = this.fetchWithRetries(DD.signal).then((zD => (this.fetchAbort === DD && (this.fetchAbort = null), zD)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(DD) {
        for (let zD = 0;; zD++) {
          const wD = new URL(this.url);
          if (zD > 0 && wD.searchParams.set("cache-bust", `${Date.now()}-${zD}`), await this.fetchWhole(wD, DD)) return this.scriptUrl = wD, !0;
          if (zD >= 3 || DD.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** zD), DD.aborted) return !1
        }
      }
      async fetchWhole(DD, zD) {
        const wD = new AbortController;
        let pD;
        const sD = () => {
            clearTimeout(pD), pD = setTimeout((() => {
              wD.abort()
            }), this.timing.stallMs)
          },
          KD = () => {
            wD.abort()
          };
        zD.addEventListener("abort", KD, {
          once: !0
        }), sD();
        try {
          var rD;
          const zD = await fetch(DD, {
            signal: wD.signal
          });
          if (!zD.ok) return !1;
          const pD = null === (rD = zD.body) || void 0 === rD ? void 0 : rD.getReader();
          if (!pD) return !1;
          for (;;) {
            const {
              done: DD
            } = await pD.read();
            if (DD) return !0;
            sD()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(pD), zD.removeEventListener("abort", KD)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);