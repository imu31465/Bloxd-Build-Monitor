export const id = 4;
export const ids = [4];
export const modules = {
  35415: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      getBlockModelIconUrl: () => LT,
      hasBlockModelIcon: () => FT
    });
    var iT = IT(35405),
      zT = IT(35400);
    const kT = IT(35422),
      WT = new Map(kT.keys().filter((TT => TT.startsWith("./"))).map((TT => [TT.slice(2, -5), TT]))),
      XT = new Map,
      BT = new Map;

    function FT(TT) {
      return WT.has(TT)
    }

    function ST(TT) {
      return kT(WT.get(TT))
    }
    async function DT(TT, oT, IT) {
      const {
        data: iT,
        texture: kT
      } = await
      function(TT) {
        let oT = XT.get(TT);
        return oT || (oT = ST(TT).then((async TT => {
          const oT = new Image;
          oT.src = TT.texture, await oT.decode();
          const IT = document.createElement("canvas");
          IT.width = oT.width, IT.height = oT.height;
          const iT = IT.getContext("2d");
          return iT.drawImage(oT, 0, 0), {
            data: TT,
            texture: {
              width: oT.width,
              height: oT.height,
              pixels: iT.getImageData(0, 0, oT.width, oT.height).data
            }
          }
        })), oT.catch((() => {
          XT.delete(TT)
        })), XT.set(TT, oT)), oT
      }(TT), WT = document.createElement("canvas");
      return WT.width = oT, WT.height = oT, WT.getContext("2d").putImageData(new ImageData((0, zT.k)(iT, kT, oT, IT), oT, oT), 0, 0), WT.toDataURL()
    }

    function LT(TT, oT, IT) {
      const zT = `${oT}|${IT}|${TT}`;
      let kT = BT.get(zT);
      return kT || (kT = (0, iT.e)(TT, (() => ST(TT)), oT, IT).then((iT => null !== iT && void 0 !== iT ? iT : DT(TT, oT, IT))), kT.catch((() => {
        BT.delete(zT)
      })), BT.set(zT, kT)), kT
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
  },
  35422: (TT, oT, IT) => {
    var iT = {
      "./Artisan Bench.json": [39874, 263],
      "./Aspen Item Pedestal.json": [39876, 264],
      "./Cedar Item Pedestal.json": [39882, 265],
      "./Cherry Item Pedestal.json": [39888, 266],
      "./Furnace.json": [39891, 267],
      "./Jungle Item Pedestal.json": [39900, 268],
      "./Mango Item Pedestal.json": [39907, 269],
      "./Palm Item Pedestal.json": [39909, 270],
      "./Pear Item Pedestal.json": [39912, 271],
      "./Pine Item Pedestal.json": [39918, 272],
      "./Plum Item Pedestal.json": [39922, 273],
      "./Potion Table.json": [39927, 274],
      "./Salvaging Table.json": [39933, 275],
      "./Showcase.json": [39937, 276],
      "./Spectral Item Pedestal.json": [39945, 277],
      "./Workbench.json": [39948, 278]
    };

    function zT(TT) {
      if (!IT.o(iT, TT)) return Promise.resolve().then((() => {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }));
      var oT = iT[TT],
        zT = oT[0];
      return IT.e(oT[1]).then((() => IT(zT)))
    }
    zT.keys = () => Object.keys(iT), zT.id = 35422, TT.exports = zT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);