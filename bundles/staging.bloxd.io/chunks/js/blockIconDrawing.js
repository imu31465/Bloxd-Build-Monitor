export const id = 2;
export const ids = [2];
export const modules = {
  36188: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      drawBlockIcon: () => DT,
      drawBlockIconUrl: () => aT,
      getDrawnBlockIcon: () => ST
    });
    var lT = cT(36193);
    const MT = Math.SQRT1_2,
      KT = Math.sqrt(3) / 2,
      OT = .5,
      yT = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      fT = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      xT = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const IT = 1e-6;

    function AT(TT, kT, cT, lT) {
      let {
        origin: MT,
        across: KT,
        down: OT,
        texture: yT,
        rect: [fT, xT, AT, CT],
        shade: jT
      } = lT;
      const vT = KT.x * OT.y - KT.y * OT.x;
      if (Math.abs(vT) < 1e-9) return;
      const tT = [MT.x, MT.x + KT.x, MT.x + OT.x, MT.x + KT.x + OT.x],
        hT = [MT.y, MT.y + KT.y, MT.y + OT.y, MT.y + KT.y + OT.y],
        NT = Math.max(0, Math.floor(Math.min(...tT))),
        QT = Math.min(cT - 1, Math.ceil(Math.max(...tT))),
        ST = Math.max(0, Math.floor(Math.min(...hT))),
        DT = Math.min(cT - 1, Math.ceil(Math.max(...hT)));
      for (let aT = ST; aT <= DT; aT++)
        for (let lT = NT; lT <= QT; lT++) {
          const tT = lT + .5 - MT.x,
            hT = aT + .5 - MT.y,
            NT = (tT * OT.y - hT * OT.x) / vT,
            QT = (KT.x * hT - KT.y * tT) / vT;
          if (NT < -IT || NT > 1 + IT || QT < -IT || QT > 1 + IT) continue;
          const ST = aT * cT + lT;
          kT[ST] = 1;
          const DT = fT + Math.min(Math.max(NT, 0), 1) * (AT - fT),
            FT = xT + Math.min(Math.max(QT, 0), 1) * (CT - xT),
            rT = Math.min(yT.width - 1, Math.floor(DT * yT.width)),
            PT = 4 * (Math.min(yT.height - 1, Math.floor(FT * yT.height)) * yT.width + rT),
            wT = yT.pixels[PT + 3] / 255;
          if (0 === wT) continue;
          const mT = 4 * ST,
            bT = TT[mT + 3] / 255 * (1 - wT),
            zT = wT + bT;
          for (let kT = 0; kT < 3; kT++) TT[mT + kT] = (yT.pixels[PT + kT] * jT * wT + TT[mT + kT] * bT) / zT;
          TT[mT + 3] = 255 * zT
        }
    }
    var CT = cT(36200);
    const jT = new Map,
      vT = new Map,
      tT = new Map,
      hT = new Map;

    function NT(TT, kT, cT) {
      return `${kT}|${cT}|${TT}`
    }

    function QT(TT, kT, cT) {
      let lT = TT.get(kT);
      return void 0 === lT && (lT = cT().catch((cT => {
        throw TT.delete(kT), cT
      })), TT.set(kT, lT)), lT
    }

    function ST(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return vT.get(NT(TT, kT, cT))
    }

    function DT(TT, kT, cT, lT) {
      const MT = NT(TT, kT, cT);
      return QT(jT, MT, (async () => {
        const KT = await rT(lT(TT), kT, FT(cT));
        return vT.set(MT, KT), KT
      }))
    }

    function aT(TT, kT, cT, lT) {
      return QT(tT, NT(TT, kT, cT), (async () => {
        var MT;
        const KT = lT(TT),
          OT = FT(cT);
        return null !== (MT = await (0, CT.e)(KT, kT, OT)) && void 0 !== MT ? MT : (await rT(KT, kT, OT)).toDataURL()
      }))
    }

    function FT(TT) {
      return Math.max(1, Math.round(TT))
    }
    async function rT(TT, kT, cT) {
      let {
        top: IT,
        left: CT,
        right: jT,
        itemType: vT
      } = TT;
      const [tT, hT, NT] = await Promise.all([PT(IT), PT(CT), PT(jT)]), QT = function(TT, kT, cT, yT) {
        const fT = .6 * cT,
          xT = fT * MT,
          IT = fT * MT * OT,
          CT = fT * KT,
          jT = Math.max(...kT.boxes.map((TT => TT[4]))),
          vT = xT / 2 + (cT - xT) / 2,
          tT = IT + (cT - IT - IT - jT * CT) / 2,
          hT = (TT, kT, cT) => ({
            x: vT + (TT - cT) * xT,
            y: tT - IT + (TT + cT) * IT + (jT - kT) * CT
          }),
          NT = (TT, cT, lT, MT, KT, OT) => ({
            origin: TT,
            across: {
              x: cT.x - TT.x,
              y: cT.y - TT.y
            },
            down: {
              x: lT.x - TT.x,
              y: lT.y - TT.y
            },
            texture: MT,
            rect: kT.cropFaces ? KT : [0, 0, 1, 1],
            shade: OT
          }),
          QT = new Uint8ClampedArray(cT * cT * 4),
          ST = new Uint8Array(cT * cT),
          DT = lT.e;
        for (const [lT, MT, KT, OT, aT, FT] of kT.boxes) {
          const kT = NT(hT(OT, aT, FT), hT(OT, aT, KT), hT(OT, MT, FT), TT.right, [1 - FT, 1 - aT, 1 - KT, 1 - MT], DT.right),
            yT = NT(hT(lT, aT, FT), hT(OT, aT, FT), hT(lT, MT, FT), TT.left, [lT, 1 - aT, OT, 1 - MT], DT.left),
            fT = NT(hT(lT, aT, KT), hT(OT, aT, KT), hT(lT, aT, FT), TT.top, [lT, KT, OT, FT], DT.top);
          for (const TT of [kT, yT, fT]) AT(QT, ST, cT, TT)
        }
        return (0, lT.f)(QT, cT, yT, (TT => 1 === ST[TT])), QT
      }({
        top: tT,
        left: hT,
        right: NT
      }, function(TT) {
        return "SlabBlock" === TT ? fT : "StairsBlock" === TT ? xT : yT
      }(vT), kT, cT), ST = document.createElement("canvas");
      ST.width = kT, ST.height = kT;
      const DT = ST.getContext("2d");
      if (!DT) throw new Error("Failed to get 2D context");
      return DT.putImageData(new ImageData(QT, kT, kT), 0, 0), ST
    }

    function PT(TT) {
      return QT(hT, TT, (async () => {
        const kT = await (0, CT.i)(TT),
          cT = document.createElement("canvas");
        cT.width = kT.width, cT.height = kT.height;
        const lT = cT.getContext("2d");
        if (!lT) throw new Error("Failed to get 2D context");
        return lT.drawImage(kT, 0, 0), {
          width: kT.width,
          height: kT.height,
          pixels: lT.getImageData(0, 0, kT.width, kT.height).data
        }
      }))
    }
  },
  36200: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => mT,
      f: () => bT,
      i: () => ST
    });
    var lT = cT(314),
      MT = cT(118);
    const KT = new(cT(36209).c)(new URL(cT.p + cT.u(3), cT.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var OT = cT(1792),
      yT = cT(3133);
    const fT = 1e4,
      xT = 3e4;
    let IT = null,
      AT = null,
      CT = null,
      jT = !1,
      vT = 0;
    const tT = new Map;
    let hT = null;
    const NT = new Map,
      QT = new Map;

    function ST(TT) {
      const kT = new Promise(((kT, cT) => {
        const lT = new Image;
        lT.crossOrigin = "anonymous", lT.fetchPriority = "high", lT.onload = () => {
          kT(lT)
        }, lT.onerror = () => {
          cT(new Error(`A block icon's texture did not load: ${TT.slice(0,100)}`))
        }, lT.src = TT
      }));
      return (0, yT.f)(kT)
    }

    function DT(TT) {
      var kT, cT;
      jT || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${TT}`), jT = !0, null === (kT = IT) || void 0 === kT || kT.terminate(), IT = null, AT = null, NT.clear(), QT.clear();
      for (const lT of tT.values()) lT(null);
      tT.clear(), null === (cT = hT) || void 0 === cT || cT()
    }

    function aT() {
      return CT ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === lT.d.ios_icon_worker_v1 && (0, MT.isWebKit)()) return;
        try {
          IT = await async function() {
            return await KT.ready(), KT.start()
          }()
        } catch (yT) {
          return void DT(`did not start (${String(yT)})`)
        }
        let TT = () => {};
        const kT = new Promise((kT => {
          TT = kT
        }));
        IT.onmessage = kT => {
          let {
            data: cT
          } = kT;
          if ("started" === cT.type) AT = IT, TT();
          else if ("failed" === cT.type) DT(`failed a draw (${cT.message})`);
          else {
            var lT, MT;
            null === (lT = tT.get(cT.id)) || void 0 === lT || lT(cT.url), tT.delete(cT.id), null === (MT = hT) || void 0 === MT || MT()
          }
        }, IT.onerror = kT => {
          kT.preventDefault(), DT(`stopped (${kT.message||"its script did not load or run"})`), TT()
        };
        const cT = `did not start in ${xT/1e3} s`;
        await (0, OT.m)(kT, xT, cT).catch((() => {
          DT(cT)
        }))
      }(), CT
    }

    function FT() {
      if (null !== hT || 0 === tT.size) return;
      const TT = new Promise((TT => {
          hT = TT
        })),
        kT = `did not answer in ${fT/1e3} s`;
      (0, OT.m)(TT, fT, kT).then((() => {
        hT = null, FT()
      }), (() => {
        hT = null, DT(kT)
      }))
    }

    function rT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      TT.postMessage(kT, cT)
    }

    function PT(TT, kT, cT, lT) {
      let MT = kT.get(cT);
      return void 0 === MT && (MT = lT().then((async kT => {
        let {
          image: cT,
          request: lT
        } = kT;
        try {
          const kT = await createImageBitmap(cT);
          rT(TT, lT(kT), [kT])
        } catch (MT) {
          DT(`could not take an image (${String(MT)})`)
        }
      })), MT.catch((() => {
        kT.get(cT) === MT && kT.delete(cT)
      })), kT.set(cT, MT)), MT
    }
    async function wT(TT, kT) {
      aT();
      const cT = AT;
      if (null === cT) return null;
      if (await TT(cT), AT !== cT) return null;
      const lT = ++vT;
      return new Promise((TT => {
        tT.set(lT, TT), rT(cT, kT(lT)), FT()
      }))
    }

    function mT(TT, kT, cT) {
      return wT((kT => Promise.all([TT.top, TT.left, TT.right].map((TT => function(TT, kT) {
        return PT(TT, NT, kT, (async () => ({
          image: await ST(kT),
          request: TT => ({
            type: "texture",
            url: kT,
            bitmap: TT
          })
        })))
      }(kT, TT))))), (lT => ({
        type: "draw",
        id: lT,
        ...TT,
        size: kT,
        outlineWidth: cT
      })))
    }

    function bT(TT, kT, cT, lT) {
      return wT((cT => function(TT, kT, cT) {
        return PT(TT, QT, kT, (async () => {
          const {
            texture: TT,
            ...lT
          } = await cT();
          return {
            image: await ST(TT),
            request: TT => ({
              type: "model",
              name: kT,
              bitmap: TT,
              geometry: lT
            })
          }
        }))
      }(cT, TT, kT)), (kT => ({
        type: "drawModel",
        id: kT,
        name: TT,
        size: cT,
        outlineWidth: lT
      })))
    }
  },
  36193: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => yT,
      g: () => OT
    });
    const lT = 1 / 32,
      MT = [15, 15, 15],
      KT = {
        top: 1,
        left: .85,
        right: .7
      };

    function OT(TT, kT, cT, MT) {
      const {
        vertices: KT,
        uvs: OT,
        indices: fT,
        shades: xT
      } = TT, IT = cT * lT, AT = cT - 2 * IT, CT = new Float32Array(KT.length);
      for (let lT = 0; lT < KT.length; lT += 3) CT[lT] = IT + KT[lT] * AT, CT[lT + 1] = IT + KT[lT + 1] * AT, CT[lT + 2] = KT[lT + 2];
      const jT = new Float32Array(cT * cT).fill(-1 / 0),
        vT = new Uint8ClampedArray(cT * cT * 4),
        tT = 255 * TT.alphaCutoff;
      for (let lT = 0; lT < fT.length; lT += 3) {
        const [TT, MT, KT] = [fT[lT], fT[lT + 1], fT[lT + 2]], [yT, IT, AT] = [3 * TT, 3 * MT, 3 * KT], [hT, NT, QT, ST, DT, aT] = [CT[yT], CT[yT + 1], CT[IT], CT[IT + 1], CT[AT], CT[AT + 1]], FT = (QT - hT) * (aT - NT) - (DT - hT) * (ST - NT);
        if (Math.abs(FT) < 1e-9) continue;
        const rT = xT[lT / 3],
          [PT, wT, mT, bT, zT, JT] = [OT[2 * TT], OT[2 * TT + 1], OT[2 * MT], OT[2 * MT + 1], OT[2 * KT], OT[2 * KT + 1]],
          oT = Math.max(0, Math.floor(Math.min(hT, QT, DT))),
          HT = Math.min(cT - 1, Math.ceil(Math.max(hT, QT, DT))),
          eT = Math.max(0, Math.floor(Math.min(NT, ST, aT))),
          GT = Math.min(cT - 1, Math.ceil(Math.max(NT, ST, aT)));
        for (let lT = eT; lT <= GT; lT++)
          for (let TT = oT; TT <= HT; TT++) {
            const [MT, KT] = [TT + .5, lT + .5], OT = ((MT - hT) * (aT - NT) - (DT - hT) * (KT - NT)) / FT, fT = ((QT - hT) * (KT - NT) - (MT - hT) * (ST - NT)) / FT, xT = 1 - OT - fT;
            if (xT < 0 || OT < 0 || fT < 0) continue;
            const oT = xT * CT[yT + 2] + OT * CT[IT + 2] + fT * CT[AT + 2],
              HT = lT * cT + TT;
            if (oT <= jT[HT]) continue;
            const eT = Math.max(0, Math.min(kT.width - 1, Math.floor((xT * PT + OT * mT + fT * zT) * kT.width))),
              GT = 4 * (Math.max(0, Math.min(kT.height - 1, Math.floor((xT * wT + OT * bT + fT * JT) * kT.height))) * kT.width + eT);
            kT.pixels[GT + 3] < tT || (jT[HT] = oT, vT[4 * HT] = kT.pixels[GT] * rT, vT[4 * HT + 1] = kT.pixels[GT + 1] * rT, vT[4 * HT + 2] = kT.pixels[GT + 2] * rT, vT[4 * HT + 3] = 255)
          }
      }
      return yT(vT, cT, MT), vT
    }

    function yT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kT => 0 !== TT[4 * kT + 3];
      const KT = (TT, cT) => TT < 0 || cT < 0 || TT >= kT || cT >= kT || !lT(cT * kT + TT),
        OT = [];
      for (let MT = 0; MT < kT; MT++)
        for (let TT = 0; TT < kT; TT++)
          if (!KT(TT, MT)) TT: for (let lT = -cT; lT <= cT; lT++) {
            const yT = cT - Math.abs(lT);
            for (let cT = -yT; cT <= yT; cT++)
              if (KT(TT + cT, MT + lT)) {
                OT.push(MT * kT + TT);
                break TT
              }
          }
      for (const yT of OT) TT.set(MT, 4 * yT), TT[4 * yT + 3] = 255
    }
  },
  36209: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    const lT = {
      wait: function(TT) {
        return new Promise((kT => {
          setTimeout(kT, TT)
        }))
      },
      stallMs: 2e4
    };
    class MT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lT;
        this.url = TT, this.options = kT, this.timing = cT, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = TT
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
        for (let kT = 0;; kT++) {
          const cT = new URL(this.url);
          if (kT > 0 && cT.searchParams.set("cache-bust", `${Date.now()}-${kT}`), await this.fetchWhole(cT, TT)) return void(this.scriptUrl = cT);
          if (kT >= 3 || TT.aborted) return;
          if (await this.timing.wait(500 * 2 ** kT), TT.aborted) return
        }
      }
      async fetchWhole(TT, kT) {
        const cT = new AbortController;
        let lT;
        const MT = () => {
            clearTimeout(lT), lT = setTimeout((() => {
              cT.abort()
            }), this.timing.stallMs)
          },
          KT = () => {
            cT.abort()
          };
        kT.addEventListener("abort", KT, {
          once: !0
        }), MT();
        try {
          var OT;
          const kT = await fetch(TT, {
            signal: cT.signal
          });
          if (!kT.ok) return !1;
          const lT = null === (OT = kT.body) || void 0 === OT ? void 0 : OT.getReader();
          if (!lT) return !1;
          for (;;) {
            const {
              done: TT
            } = await lT.read();
            if (TT) return !0;
            MT()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(lT), kT.removeEventListener("abort", KT)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);