export const id = 2;
export const ids = [2];
export const modules = {
  35972: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      drawBlockIcon: () => xU,
      drawBlockIconUrl: () => mU,
      getDrawnBlockIcon: () => fU
    });
    var tU = gU(35974);
    const pU = Math.SQRT1_2,
      EU = Math.sqrt(3) / 2,
      PU = .5,
      TU = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      qU = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      KU = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const cU = 1e-6;

    function GU(UU, RU, gU, tU) {
      let {
        origin: pU,
        across: EU,
        down: PU,
        texture: TU,
        rect: [qU, KU, GU, jU],
        shade: uU
      } = tU;
      const CU = EU.x * PU.y - EU.y * PU.x;
      if (Math.abs(CU) < 1e-9) return;
      const hU = [pU.x, pU.x + EU.x, pU.x + PU.x, pU.x + EU.x + PU.x],
        QU = [pU.y, pU.y + EU.y, pU.y + PU.y, pU.y + EU.y + PU.y],
        eU = Math.max(0, Math.floor(Math.min(...hU))),
        WU = Math.min(gU - 1, Math.ceil(Math.max(...hU))),
        fU = Math.max(0, Math.floor(Math.min(...QU))),
        xU = Math.min(gU - 1, Math.ceil(Math.max(...QU)));
      for (let mU = fU; mU <= xU; mU++)
        for (let tU = eU; tU <= WU; tU++) {
          const hU = tU + .5 - pU.x,
            QU = mU + .5 - pU.y,
            eU = (hU * PU.y - QU * PU.x) / CU,
            WU = (EU.x * QU - EU.y * hU) / CU;
          if (eU < -cU || eU > 1 + cU || WU < -cU || WU > 1 + cU) continue;
          const fU = mU * gU + tU;
          RU[fU] = 1;
          const xU = qU + Math.min(Math.max(eU, 0), 1) * (GU - qU),
            IU = KU + Math.min(Math.max(WU, 0), 1) * (jU - KU),
            JU = Math.min(TU.width - 1, Math.floor(xU * TU.width)),
            wU = 4 * (Math.min(TU.height - 1, Math.floor(IU * TU.height)) * TU.width + JU),
            nU = TU.pixels[wU + 3] / 255;
          if (0 === nU) continue;
          const bU = 4 * fU,
            oU = UU[bU + 3] / 255 * (1 - nU),
            ZU = nU + oU;
          for (let RU = 0; RU < 3; RU++) UU[bU + RU] = (TU.pixels[wU + RU] * uU * nU + UU[bU + RU] * oU) / ZU;
          UU[bU + 3] = 255 * ZU
        }
    }
    var jU = gU(35980);
    const uU = new Map,
      CU = new Map,
      hU = new Map,
      QU = new Map;

    function eU(UU, RU, gU) {
      return `${RU}|${gU}|${UU}`
    }

    function WU(UU, RU, gU) {
      let tU = UU.get(RU);
      return void 0 === tU && (tU = gU().catch((gU => {
        throw UU.delete(RU), gU
      })), UU.set(RU, tU)), tU
    }

    function fU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return CU.get(eU(UU, RU, gU))
    }

    function xU(UU, RU, gU, tU) {
      const pU = eU(UU, RU, gU);
      return WU(uU, pU, (async () => {
        const EU = await JU(tU(UU), RU, IU(gU));
        return CU.set(pU, EU), EU
      }))
    }

    function mU(UU, RU, gU, tU) {
      return WU(hU, eU(UU, RU, gU), (async () => {
        var pU;
        const EU = tU(UU),
          PU = IU(gU);
        return null !== (pU = await (0, jU.d)(EU, RU, PU)) && void 0 !== pU ? pU : (await JU(EU, RU, PU)).toDataURL()
      }))
    }

    function IU(UU) {
      return Math.max(1, Math.round(UU))
    }
    async function JU(UU, RU, gU) {
      let {
        top: cU,
        left: jU,
        right: uU,
        itemType: CU
      } = UU;
      const [hU, QU, eU] = await Promise.all([wU(cU), wU(jU), wU(uU)]), WU = function(UU, RU, gU, TU) {
        const qU = .6 * gU,
          KU = qU * pU,
          cU = qU * pU * PU,
          jU = qU * EU,
          uU = Math.max(...RU.boxes.map((UU => UU[4]))),
          CU = KU / 2 + (gU - KU) / 2,
          hU = cU + (gU - cU - cU - uU * jU) / 2,
          QU = (UU, RU, gU) => ({
            x: CU + (UU - gU) * KU,
            y: hU - cU + (UU + gU) * cU + (uU - RU) * jU
          }),
          eU = (UU, gU, tU, pU, EU, PU) => ({
            origin: UU,
            across: {
              x: gU.x - UU.x,
              y: gU.y - UU.y
            },
            down: {
              x: tU.x - UU.x,
              y: tU.y - UU.y
            },
            texture: pU,
            rect: RU.cropFaces ? EU : [0, 0, 1, 1],
            shade: PU
          }),
          WU = new Uint8ClampedArray(gU * gU * 4),
          fU = new Uint8Array(gU * gU),
          xU = tU.b;
        for (const [tU, pU, EU, PU, mU, IU] of RU.boxes) {
          const RU = eU(QU(PU, mU, IU), QU(PU, mU, EU), QU(PU, pU, IU), UU.right, [1 - IU, 1 - mU, 1 - EU, 1 - pU], xU.right),
            TU = eU(QU(tU, mU, IU), QU(PU, mU, IU), QU(tU, pU, IU), UU.left, [tU, 1 - mU, PU, 1 - pU], xU.left),
            qU = eU(QU(tU, mU, EU), QU(PU, mU, EU), QU(tU, mU, IU), UU.top, [tU, EU, PU, IU], xU.top);
          for (const UU of [RU, TU, qU]) GU(WU, fU, gU, UU)
        }
        return (0, tU.d)(WU, gU, TU, (UU => 1 === fU[UU])), WU
      }({
        top: hU,
        left: QU,
        right: eU
      }, function(UU) {
        return "SlabBlock" === UU ? qU : "StairsBlock" === UU ? KU : TU
      }(CU), RU, gU), fU = document.createElement("canvas");
      fU.width = RU, fU.height = RU;
      const xU = fU.getContext("2d");
      if (!xU) throw new Error("Failed to get 2D context");
      return xU.putImageData(new ImageData(WU, RU, RU), 0, 0), fU
    }

    function wU(UU) {
      return WU(QU, UU, (async () => {
        const RU = await (0, jU.h)(UU),
          gU = document.createElement("canvas");
        gU.width = RU.width, gU.height = RU.height;
        const tU = gU.getContext("2d");
        if (!tU) throw new Error("Failed to get 2D context");
        return tU.drawImage(RU, 0, 0), {
          width: RU.width,
          height: RU.height,
          pixels: tU.getImageData(0, 0, RU.width, RU.height).data
        }
      }))
    }
  },
  35980: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => bU,
      g: () => oU,
      h: () => fU
    });
    var tU = gU(279),
      pU = gU(96);
    const EU = new(gU(35985).c)(new URL(gU.p + gU.u(3), gU.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var PU = gU(1675),
      TU = gU(2888);
    const qU = 1e4,
      KU = 3e4;
    let cU = null,
      GU = null,
      jU = null,
      uU = !1,
      CU = 0;
    const hU = new Map;
    let QU = null;
    const eU = new Map,
      WU = new Map;

    function fU(UU) {
      const RU = new Promise(((RU, gU) => {
        const tU = new Image;
        tU.crossOrigin = "anonymous", tU.fetchPriority = "high", tU.onload = () => {
          RU(tU)
        }, tU.onerror = () => {
          gU(new Error(`A block icon's texture did not load: ${UU.slice(0,100)}`))
        }, tU.src = UU
      }));
      return (0, TU.f)(RU)
    }

    function xU(UU) {
      var RU, gU;
      uU || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${UU}`), uU = !0, null === (RU = cU) || void 0 === RU || RU.terminate(), cU = null, GU = null, eU.clear(), WU.clear();
      for (const tU of hU.values()) tU(null);
      hU.clear(), null === (gU = QU) || void 0 === gU || gU()
    }

    function mU() {
      return jU ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === tU.c.ios_icon_worker_v1 && (0, pU.isWebKit)()) return;
        try {
          cU = await async function() {
            return await EU.ready(), EU.start()
          }()
        } catch (TU) {
          return void xU(`did not start (${String(TU)})`)
        }
        let UU = () => {};
        const RU = new Promise((RU => {
          UU = RU
        }));
        cU.onmessage = RU => {
          let {
            data: gU
          } = RU;
          if ("started" === gU.type) GU = cU, UU();
          else if ("failed" === gU.type) xU(`failed a draw (${gU.message})`);
          else {
            var tU, pU;
            null === (tU = hU.get(gU.id)) || void 0 === tU || tU(gU.url), hU.delete(gU.id), null === (pU = QU) || void 0 === pU || pU()
          }
        }, cU.onerror = RU => {
          RU.preventDefault(), xU(`stopped (${RU.message||"its script did not load or run"})`), UU()
        };
        const gU = `did not start in ${KU/1e3} s`;
        await (0, PU.i)(RU, KU, gU).catch((() => {
          xU(gU)
        }))
      }(), jU
    }

    function IU() {
      if (null !== QU || 0 === hU.size) return;
      const UU = new Promise((UU => {
          QU = UU
        })),
        RU = `did not answer in ${qU/1e3} s`;
      (0, PU.i)(UU, qU, RU).then((() => {
        QU = null, IU()
      }), (() => {
        QU = null, xU(RU)
      }))
    }

    function JU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      UU.postMessage(RU, gU)
    }

    function wU(UU, RU, gU, tU) {
      let pU = RU.get(gU);
      return void 0 === pU && (pU = tU().then((async RU => {
        let {
          image: gU,
          request: tU
        } = RU;
        try {
          const RU = await createImageBitmap(gU);
          JU(UU, tU(RU), [RU])
        } catch (pU) {
          xU(`could not take an image (${String(pU)})`)
        }
      })), pU.catch((() => {
        RU.get(gU) === pU && RU.delete(gU)
      })), RU.set(gU, pU)), pU
    }
    async function nU(UU, RU) {
      mU();
      const gU = GU;
      if (null === gU) return null;
      if (await UU(gU), GU !== gU) return null;
      const tU = ++CU;
      return new Promise((UU => {
        hU.set(tU, UU), JU(gU, RU(tU)), IU()
      }))
    }

    function bU(UU, RU, gU) {
      return nU((RU => Promise.all([UU.top, UU.left, UU.right].map((UU => function(UU, RU) {
        return wU(UU, eU, RU, (async () => ({
          image: await fU(RU),
          request: UU => ({
            type: "texture",
            url: RU,
            bitmap: UU
          })
        })))
      }(RU, UU))))), (tU => ({
        type: "draw",
        id: tU,
        ...UU,
        size: RU,
        outlineWidth: gU
      })))
    }

    function oU(UU, RU, gU, tU) {
      return nU((gU => function(UU, RU, gU) {
        return wU(UU, WU, RU, (async () => {
          const {
            texture: UU,
            ...tU
          } = await gU();
          return {
            image: await fU(UU),
            request: UU => ({
              type: "model",
              name: RU,
              bitmap: UU,
              geometry: tU
            })
          }
        }))
      }(gU, UU, RU)), (RU => ({
        type: "drawModel",
        id: RU,
        name: UU,
        size: gU,
        outlineWidth: tU
      })))
    }
  },
  35974: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => TU,
      f: () => PU
    });
    const tU = 1 / 32,
      pU = [15, 15, 15],
      EU = {
        top: 1,
        left: .85,
        right: .7
      };

    function PU(UU, RU, gU, pU) {
      const {
        vertices: EU,
        uvs: PU,
        indices: qU,
        shades: KU
      } = UU, cU = gU * tU, GU = gU - 2 * cU, jU = new Float32Array(EU.length);
      for (let tU = 0; tU < EU.length; tU += 3) jU[tU] = cU + EU[tU] * GU, jU[tU + 1] = cU + EU[tU + 1] * GU, jU[tU + 2] = EU[tU + 2];
      const uU = new Float32Array(gU * gU).fill(-1 / 0),
        CU = new Uint8ClampedArray(gU * gU * 4),
        hU = 255 * UU.alphaCutoff;
      for (let tU = 0; tU < qU.length; tU += 3) {
        const [UU, pU, EU] = [qU[tU], qU[tU + 1], qU[tU + 2]], [TU, cU, GU] = [3 * UU, 3 * pU, 3 * EU], [QU, eU, WU, fU, xU, mU] = [jU[TU], jU[TU + 1], jU[cU], jU[cU + 1], jU[GU], jU[GU + 1]], IU = (WU - QU) * (mU - eU) - (xU - QU) * (fU - eU);
        if (Math.abs(IU) < 1e-9) continue;
        const JU = KU[tU / 3],
          [wU, nU, bU, oU, ZU, aU] = [PU[2 * UU], PU[2 * UU + 1], PU[2 * pU], PU[2 * pU + 1], PU[2 * EU], PU[2 * EU + 1]],
          YU = Math.max(0, Math.floor(Math.min(QU, WU, xU))),
          BU = Math.min(gU - 1, Math.ceil(Math.max(QU, WU, xU))),
          VU = Math.max(0, Math.floor(Math.min(eU, fU, mU))),
          rU = Math.min(gU - 1, Math.ceil(Math.max(eU, fU, mU)));
        for (let tU = VU; tU <= rU; tU++)
          for (let UU = YU; UU <= BU; UU++) {
            const [pU, EU] = [UU + .5, tU + .5], PU = ((pU - QU) * (mU - eU) - (xU - QU) * (EU - eU)) / IU, qU = ((WU - QU) * (EU - eU) - (pU - QU) * (fU - eU)) / IU, KU = 1 - PU - qU;
            if (KU < 0 || PU < 0 || qU < 0) continue;
            const YU = KU * jU[TU + 2] + PU * jU[cU + 2] + qU * jU[GU + 2],
              BU = tU * gU + UU;
            if (YU <= uU[BU]) continue;
            const VU = Math.max(0, Math.min(RU.width - 1, Math.floor((KU * wU + PU * bU + qU * ZU) * RU.width))),
              rU = 4 * (Math.max(0, Math.min(RU.height - 1, Math.floor((KU * nU + PU * oU + qU * aU) * RU.height))) * RU.width + VU);
            RU.pixels[rU + 3] < hU || (uU[BU] = YU, CU[4 * BU] = RU.pixels[rU] * JU, CU[4 * BU + 1] = RU.pixels[rU + 1] * JU, CU[4 * BU + 2] = RU.pixels[rU + 2] * JU, CU[4 * BU + 3] = 255)
          }
      }
      return TU(CU, gU, pU), CU
    }

    function TU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RU => 0 !== UU[4 * RU + 3];
      const EU = (UU, gU) => UU < 0 || gU < 0 || UU >= RU || gU >= RU || !tU(gU * RU + UU),
        PU = [];
      for (let pU = 0; pU < RU; pU++)
        for (let UU = 0; UU < RU; UU++)
          if (!EU(UU, pU)) UU: for (let tU = -gU; tU <= gU; tU++) {
            const TU = gU - Math.abs(tU);
            for (let gU = -TU; gU <= TU; gU++)
              if (EU(UU + gU, pU + tU)) {
                PU.push(pU * RU + UU);
                break UU
              }
          }
      for (const TU of PU) UU.set(pU, 4 * TU), UU[4 * TU + 3] = 255
    }
  },
  35985: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    const tU = {
      wait: function(UU) {
        return new Promise((RU => {
          setTimeout(RU, UU)
        }))
      },
      stallMs: 2e4
    };
    class pU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tU;
        this.url = UU, this.options = RU, this.timing = gU, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = UU
      }
      ready() {
        if (null === this.fetched) {
          const UU = new AbortController;
          this.fetchAbort = UU, this.fetched = this.fetchWithRetries(UU.signal).finally((() => {
            this.fetchAbort === UU && (this.fetchAbort = null)
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
      async fetchWithRetries(UU) {
        for (let RU = 0;; RU++) {
          const gU = new URL(this.url);
          if (RU > 0 && gU.searchParams.set("cache-bust", `${Date.now()}-${RU}`), await this.fetchWhole(gU, UU)) return void(this.scriptUrl = gU);
          if (RU >= 3 || UU.aborted) return;
          if (await this.timing.wait(500 * 2 ** RU), UU.aborted) return
        }
      }
      async fetchWhole(UU, RU) {
        const gU = new AbortController;
        let tU;
        const pU = () => {
            clearTimeout(tU), tU = setTimeout((() => {
              gU.abort()
            }), this.timing.stallMs)
          },
          EU = () => {
            gU.abort()
          };
        RU.addEventListener("abort", EU, {
          once: !0
        }), pU();
        try {
          var PU;
          const RU = await fetch(UU, {
            signal: gU.signal
          });
          if (!RU.ok) return !1;
          const tU = null === (PU = RU.body) || void 0 === PU ? void 0 : PU.getReader();
          if (!tU) return !1;
          for (;;) {
            const {
              done: UU
            } = await tU.read();
            if (UU) return !0;
            pU()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(tU), RU.removeEventListener("abort", EU)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);