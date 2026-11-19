export const id = 2;
export const ids = [2];
export const modules = {
  35392: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      drawBlockIcon: () => hT,
      drawBlockIconUrl: () => wT,
      getDrawnBlockIcon: () => gT
    });
    var iT = IT(35400);
    const zT = Math.SQRT1_2,
      kT = Math.sqrt(3) / 2,
      WT = .5,
      XT = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      BT = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      FT = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const ST = 1e-6;

    function DT(TT, oT, IT, iT) {
      let {
        origin: zT,
        across: kT,
        down: WT,
        texture: XT,
        rect: [BT, FT, DT, LT],
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
          if (rT < -ST || rT > 1 + ST || AT < -ST || AT > 1 + ST) continue;
          const gT = wT * IT + iT;
          oT[gT] = 1;
          const hT = BT + Math.min(Math.max(rT, 0), 1) * (DT - BT),
            mT = FT + Math.min(Math.max(AT, 0), 1) * (LT - FT),
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
    var LT = IT(35405);
    const xT = new Map,
      cT = new Map,
      KT = new Map,
      MT = new Map;

    function rT(TT, oT, IT) {
      return `${oT}|${IT}|${TT}`
    }

    function AT(TT, oT, IT) {
      let iT = TT.get(oT);
      return void 0 === iT && (iT = IT().catch((IT => {
        throw TT.delete(oT), IT
      })), TT.set(oT, iT)), iT
    }

    function gT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return cT.get(rT(TT, oT, IT))
    }

    function hT(TT, oT, IT, iT) {
      const zT = rT(TT, oT, IT);
      return AT(xT, zT, (async () => {
        const kT = await eT(iT(TT), oT, mT(IT));
        return cT.set(zT, kT), kT
      }))
    }

    function wT(TT, oT, IT, iT) {
      return AT(KT, rT(TT, oT, IT), (async () => {
        var zT;
        const kT = iT(TT),
          WT = mT(IT);
        return null !== (zT = await (0, LT.b)(kT, oT, WT)) && void 0 !== zT ? zT : (await eT(kT, oT, WT)).toDataURL()
      }))
    }

    function mT(TT) {
      return Math.max(1, Math.round(TT))
    }
    async function eT(TT, oT, IT) {
      let {
        top: ST,
        left: LT,
        right: xT,
        itemType: cT
      } = TT;
      const [KT, MT, rT] = await Promise.all([RT(ST), RT(LT), RT(xT)]), AT = function(TT, oT, IT, XT) {
        const BT = .6 * IT,
          FT = BT * zT,
          ST = BT * zT * WT,
          LT = BT * kT,
          xT = Math.max(...oT.boxes.map((TT => TT[4]))),
          cT = FT / 2 + (IT - FT) / 2,
          KT = ST + (IT - ST - ST - xT * LT) / 2,
          MT = (TT, oT, IT) => ({
            x: cT + (TT - IT) * FT,
            y: KT - ST + (TT + IT) * ST + (xT - oT) * LT
          }),
          rT = (TT, IT, iT, zT, kT, WT) => ({
            origin: TT,
            across: {
              x: IT.x - TT.x,
              y: IT.y - TT.y
            },
            down: {
              x: iT.x - TT.x,
              y: iT.y - TT.y
            },
            texture: zT,
            rect: oT.cropFaces ? kT : [0, 0, 1, 1],
            shade: WT
          }),
          AT = new Uint8ClampedArray(IT * IT * 4),
          gT = new Uint8Array(IT * IT),
          hT = iT.e;
        for (const [iT, zT, kT, WT, wT, mT] of oT.boxes) {
          const oT = rT(MT(WT, wT, mT), MT(WT, wT, kT), MT(WT, zT, mT), TT.right, [1 - mT, 1 - wT, 1 - kT, 1 - zT], hT.right),
            XT = rT(MT(iT, wT, mT), MT(WT, wT, mT), MT(iT, zT, mT), TT.left, [iT, 1 - wT, WT, 1 - zT], hT.left),
            BT = rT(MT(iT, wT, kT), MT(WT, wT, kT), MT(iT, wT, mT), TT.top, [iT, kT, WT, mT], hT.top);
          for (const TT of [oT, XT, BT]) DT(AT, gT, IT, TT)
        }
        return (0, iT.i)(AT, IT, XT, (TT => 1 === gT[TT])), AT
      }({
        top: KT,
        left: MT,
        right: rT
      }, function(TT) {
        return "SlabBlock" === TT ? BT : "StairsBlock" === TT ? FT : XT
      }(cT), oT, IT), gT = document.createElement("canvas");
      gT.width = oT, gT.height = oT;
      const hT = gT.getContext("2d");
      if (!hT) throw new Error("Failed to get 2D context");
      return hT.putImageData(new ImageData(AT, oT, oT), 0, 0), gT
    }

    function RT(TT) {
      return AT(MT, TT, (async () => {
        const oT = await (0, LT.g)(TT),
          IT = document.createElement("canvas");
        IT.width = oT.width, IT.height = oT.height;
        const iT = IT.getContext("2d");
        if (!iT) throw new Error("Failed to get 2D context");
        return iT.drawImage(oT, 0, 0), {
          width: oT.width,
          height: oT.height,
          pixels: iT.getImageData(0, 0, oT.width, oT.height).data
        }
      }))
    }
  },
  35405: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => vT,
      e: () => ET,
      g: () => gT
    });
    var iT = IT(289),
      zT = IT(90);
    const kT = new(IT(35408).e)(new URL(IT.p + IT.u(3), IT.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var WT = IT(1693),
      XT = IT(2752);
    const BT = 1e4,
      FT = 3e4;
    let ST = null,
      DT = null,
      LT = null,
      xT = !1,
      cT = 0;
    const KT = new Map;
    let MT = null;
    const rT = new Map,
      AT = new Map;

    function gT(TT) {
      const oT = new Promise(((oT, IT) => {
        const iT = new Image;
        iT.crossOrigin = "anonymous", iT.fetchPriority = "high", iT.onload = () => {
          oT(iT)
        }, iT.onerror = () => {
          IT(new Error(`A block icon's texture did not load: ${TT.slice(0,100)}`))
        }, iT.src = TT
      }));
      return (0, XT.e)(oT)
    }

    function hT(TT) {
      var oT, IT;
      xT || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${TT}`), xT = !0, null === (oT = ST) || void 0 === oT || oT.terminate(), ST = null, DT = null, rT.clear(), AT.clear();
      for (const iT of KT.values()) iT(null);
      KT.clear(), null === (IT = MT) || void 0 === IT || IT()
    }

    function wT() {
      return LT ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === iT.c.ios_icon_worker_v1 && (0, zT.isWebKit)()) return;
        try {
          ST = await async function() {
            return await kT.ready(), kT.start()
          }()
        } catch (XT) {
          return void hT(`did not start (${String(XT)})`)
        }
        let TT = () => {};
        const oT = new Promise((oT => {
          TT = oT
        }));
        ST.onmessage = oT => {
          let {
            data: IT
          } = oT;
          if ("started" === IT.type) DT = ST, TT();
          else if ("failed" === IT.type) hT(`failed a draw (${IT.message})`);
          else {
            var iT, zT;
            null === (iT = KT.get(IT.id)) || void 0 === iT || iT(IT.url), KT.delete(IT.id), null === (zT = MT) || void 0 === zT || zT()
          }
        }, ST.onerror = oT => {
          oT.preventDefault(), hT(`stopped (${oT.message||"its script did not load or run"})`), TT()
        };
        const IT = `did not start in ${FT/1e3} s`;
        await (0, WT.k)(oT, FT, IT).catch((() => {
          hT(IT)
        }))
      }(), LT
    }

    function mT() {
      if (null !== MT || 0 === KT.size) return;
      const TT = new Promise((TT => {
          MT = TT
        })),
        oT = `did not answer in ${BT/1e3} s`;
      (0, WT.k)(TT, BT, oT).then((() => {
        MT = null, mT()
      }), (() => {
        MT = null, hT(oT)
      }))
    }

    function eT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      TT.postMessage(oT, IT)
    }

    function RT(TT, oT, IT, iT) {
      let zT = oT.get(IT);
      return void 0 === zT && (zT = iT().then((async oT => {
        let {
          image: IT,
          request: iT
        } = oT;
        try {
          const oT = await createImageBitmap(IT);
          eT(TT, iT(oT), [oT])
        } catch (zT) {
          hT(`could not take an image (${String(zT)})`)
        }
      })), zT.catch((() => {
        oT.get(IT) === zT && oT.delete(IT)
      })), oT.set(IT, zT)), zT
    }
    async function uT(TT, oT) {
      wT();
      const IT = DT;
      if (null === IT) return null;
      if (await TT(IT), DT !== IT) return null;
      const iT = ++cT;
      return new Promise((TT => {
        KT.set(iT, TT), eT(IT, oT(iT)), mT()
      }))
    }

    function vT(TT, oT, IT) {
      return uT((oT => Promise.all([TT.top, TT.left, TT.right].map((TT => function(TT, oT) {
        return RT(TT, rT, oT, (async () => ({
          image: await gT(oT),
          request: TT => ({
            type: "texture",
            url: oT,
            bitmap: TT
          })
        })))
      }(oT, TT))))), (iT => ({
        type: "draw",
        id: iT,
        ...TT,
        size: oT,
        outlineWidth: IT
      })))
    }

    function ET(TT, oT, IT, iT) {
      return uT((IT => function(TT, oT, IT) {
        return RT(TT, AT, oT, (async () => {
          const {
            texture: TT,
            ...iT
          } = await IT();
          return {
            image: await gT(TT),
            request: TT => ({
              type: "model",
              name: oT,
              bitmap: TT,
              geometry: iT
            })
          }
        }))
      }(IT, TT, oT)), (oT => ({
        type: "drawModel",
        id: oT,
        name: TT,
        size: IT,
        outlineWidth: iT
      })))
    }
  },
  35400: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      i: () => XT,
      k: () => WT
    });
    const iT = 1 / 32,
      zT = [15, 15, 15],
      kT = {
        top: 1,
        left: .85,
        right: .7
      };

    function WT(TT, oT, IT, zT) {
      const {
        vertices: kT,
        uvs: WT,
        indices: BT,
        shades: FT
      } = TT, ST = IT * iT, DT = IT - 2 * ST, LT = new Float32Array(kT.length);
      for (let iT = 0; iT < kT.length; iT += 3) LT[iT] = ST + kT[iT] * DT, LT[iT + 1] = ST + kT[iT + 1] * DT, LT[iT + 2] = kT[iT + 2];
      const xT = new Float32Array(IT * IT).fill(-1 / 0),
        cT = new Uint8ClampedArray(IT * IT * 4),
        KT = 255 * TT.alphaCutoff;
      for (let iT = 0; iT < BT.length; iT += 3) {
        const [TT, zT, kT] = [BT[iT], BT[iT + 1], BT[iT + 2]], [XT, ST, DT] = [3 * TT, 3 * zT, 3 * kT], [MT, rT, AT, gT, hT, wT] = [LT[XT], LT[XT + 1], LT[ST], LT[ST + 1], LT[DT], LT[DT + 1]], mT = (AT - MT) * (wT - rT) - (hT - MT) * (gT - rT);
        if (Math.abs(mT) < 1e-9) continue;
        const eT = FT[iT / 3],
          [RT, uT, vT, ET, fT, CT] = [WT[2 * TT], WT[2 * TT + 1], WT[2 * zT], WT[2 * zT + 1], WT[2 * kT], WT[2 * kT + 1]],
          jT = Math.max(0, Math.floor(Math.min(MT, AT, hT))),
          JT = Math.min(IT - 1, Math.ceil(Math.max(MT, AT, hT))),
          UT = Math.max(0, Math.floor(Math.min(rT, gT, wT))),
          aT = Math.min(IT - 1, Math.ceil(Math.max(rT, gT, wT)));
        for (let iT = UT; iT <= aT; iT++)
          for (let TT = jT; TT <= JT; TT++) {
            const [zT, kT] = [TT + .5, iT + .5], WT = ((zT - MT) * (wT - rT) - (hT - MT) * (kT - rT)) / mT, BT = ((AT - MT) * (kT - rT) - (zT - MT) * (gT - rT)) / mT, FT = 1 - WT - BT;
            if (FT < 0 || WT < 0 || BT < 0) continue;
            const jT = FT * LT[XT + 2] + WT * LT[ST + 2] + BT * LT[DT + 2],
              JT = iT * IT + TT;
            if (jT <= xT[JT]) continue;
            const UT = Math.max(0, Math.min(oT.width - 1, Math.floor((FT * RT + WT * vT + BT * fT) * oT.width))),
              aT = 4 * (Math.max(0, Math.min(oT.height - 1, Math.floor((FT * uT + WT * ET + BT * CT) * oT.height))) * oT.width + UT);
            oT.pixels[aT + 3] < KT || (xT[JT] = jT, cT[4 * JT] = oT.pixels[aT] * eT, cT[4 * JT + 1] = oT.pixels[aT + 1] * eT, cT[4 * JT + 2] = oT.pixels[aT + 2] * eT, cT[4 * JT + 3] = 255)
          }
      }
      return XT(cT, IT, zT), cT
    }

    function XT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oT => 0 !== TT[4 * oT + 3];
      const kT = (TT, IT) => TT < 0 || IT < 0 || TT >= oT || IT >= oT || !iT(IT * oT + TT),
        WT = [];
      for (let zT = 0; zT < oT; zT++)
        for (let TT = 0; TT < oT; TT++)
          if (!kT(TT, zT)) TT: for (let iT = -IT; iT <= IT; iT++) {
            const XT = IT - Math.abs(iT);
            for (let IT = -XT; IT <= XT; IT++)
              if (kT(TT + IT, zT + iT)) {
                WT.push(zT * oT + TT);
                break TT
              }
          }
      for (const XT of WT) TT.set(zT, 4 * XT), TT[4 * XT + 3] = 255
    }
  },
  35408: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    const iT = {
      wait: function(TT) {
        return new Promise((oT => {
          setTimeout(oT, TT)
        }))
      },
      stallMs: 2e4
    };
    class zT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iT;
        this.url = TT, this.options = oT, this.timing = IT, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = TT
      }
      ready() {
        if (null === this.fetched) {
          const TT = new AbortController;
          this.fetchAbort = TT, this.fetched = this.fetchWithRetries(TT.signal).finally((() => {
            this.fetchAbort === TT && (this.fetchAbort = null)
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
      async fetchWithRetries(TT) {
        for (let oT = 0;; oT++) {
          const IT = new URL(this.url);
          if (oT > 0 && IT.searchParams.set("cache-bust", `${Date.now()}-${oT}`), await this.fetchWhole(IT, TT)) return void(this.scriptUrl = IT);
          if (oT >= 3 || TT.aborted) return;
          if (await this.timing.wait(500 * 2 ** oT), TT.aborted) return
        }
      }
      async fetchWhole(TT, oT) {
        const IT = new AbortController;
        let iT;
        const zT = () => {
            clearTimeout(iT), iT = setTimeout((() => {
              IT.abort()
            }), this.timing.stallMs)
          },
          kT = () => {
            IT.abort()
          };
        oT.addEventListener("abort", kT, {
          once: !0
        }), zT();
        try {
          var WT;
          const oT = await fetch(TT, {
            signal: IT.signal
          });
          if (!oT.ok) return !1;
          const iT = null === (WT = oT.body) || void 0 === WT ? void 0 : WT.getReader();
          if (!iT) return !1;
          for (;;) {
            const {
              done: TT
            } = await iT.read();
            if (TT) return !0;
            zT()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(iT), oT.removeEventListener("abort", kT)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);