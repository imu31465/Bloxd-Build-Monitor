export const id = 221;
export const ids = [221];
export const modules = {
  36478: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => xT,
      e: () => dT,
      i: () => qT
    });
    var WT = mT(291),
      zT = mT(102);
    const MT = new(mT(36480).b)(new URL(mT.p + mT.u(3), mT.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var gT = mT(1926),
      nT = mT(2265);
    const HT = 1e4,
      kT = 3e4;
    let jT = null,
      lT = null,
      LT = null,
      pT = !1,
      BT = 0;
    const ZT = new Map;
    let cT = null;
    const vT = new Map,
      fT = new Map;

    function qT(TT) {
      const UT = new Promise(((UT, mT) => {
        const WT = new Image;
        WT.crossOrigin = "anonymous", WT.fetchPriority = "high", WT.onload = () => {
          UT(WT)
        }, WT.onerror = () => {
          mT(new Error(`A block icon's texture did not load: ${TT.slice(0,100)}`))
        }, WT.src = TT
      }));
      return (0, nT.f)(UT)
    }

    function iT(TT) {
      var UT, mT;
      pT || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${TT}`), pT = !0, null === (UT = jT) || void 0 === UT || UT.terminate(), jT = null, lT = null, vT.clear(), fT.clear();
      for (const WT of ZT.values()) WT(null);
      ZT.clear(), null === (mT = cT) || void 0 === mT || mT()
    }

    function bT() {
      return LT ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === WT.b.ios_icon_worker_v1 && (0, zT.isWebKit)()) return;
        try {
          jT = await async function() {
            return await MT.ready(), MT.start()
          }()
        } catch (nT) {
          return void iT(`did not start (${String(nT)})`)
        }
        let TT = () => {};
        const UT = new Promise((UT => {
          TT = UT
        }));
        jT.onmessage = UT => {
          let {
            data: mT
          } = UT;
          if ("started" === mT.type) lT = jT, TT();
          else if ("failed" === mT.type) iT(`failed a draw (${mT.message})`);
          else {
            var WT, zT;
            null === (WT = ZT.get(mT.id)) || void 0 === WT || WT(mT.url), ZT.delete(mT.id), null === (zT = cT) || void 0 === zT || zT()
          }
        }, jT.onerror = UT => {
          UT.preventDefault(), iT(`stopped (${UT.message||"its script did not load or run"})`), TT()
        };
        const mT = `did not start in ${kT/1e3} s`;
        await (0, gT.l)(UT, kT, mT).catch((() => {
          iT(mT)
        }))
      }(), LT
    }

    function OT() {
      if (null !== cT || 0 === ZT.size) return;
      const TT = new Promise((TT => {
          cT = TT
        })),
        UT = `did not answer in ${HT/1e3} s`;
      (0, gT.l)(TT, HT, UT).then((() => {
        cT = null, OT()
      }), (() => {
        cT = null, iT(UT)
      }))
    }

    function eT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      TT.postMessage(UT, mT)
    }

    function YT(TT, UT, mT, WT) {
      let zT = UT.get(mT);
      return void 0 === zT && (zT = WT().then((async UT => {
        let {
          image: mT,
          request: WT
        } = UT;
        try {
          const UT = await createImageBitmap(mT);
          eT(TT, WT(UT), [UT])
        } catch (zT) {
          iT(`could not take an image (${String(zT)})`)
        }
      })), zT.catch((() => {
        UT.get(mT) === zT && UT.delete(mT)
      })), UT.set(mT, zT)), zT
    }
    async function JT(TT, UT) {
      bT();
      const mT = lT;
      if (null === mT) return null;
      if (await TT(mT), lT !== mT) return null;
      const WT = ++BT;
      return new Promise((TT => {
        ZT.set(WT, TT), eT(mT, UT(WT)), OT()
      }))
    }

    function xT(TT, UT, mT) {
      return JT((UT => Promise.all([TT.top, TT.left, TT.right].map((TT => function(TT, UT) {
        return YT(TT, vT, UT, (async () => ({
          image: await qT(UT),
          request: TT => ({
            type: "texture",
            url: UT,
            bitmap: TT
          })
        })))
      }(UT, TT))))), (WT => ({
        type: "draw",
        id: WT,
        ...TT,
        size: UT,
        outlineWidth: mT
      })))
    }

    function dT(TT, UT, mT, WT) {
      return JT((mT => function(TT, UT, mT) {
        return YT(TT, fT, UT, (async () => {
          const {
            texture: TT,
            ...WT
          } = await mT();
          return {
            image: await qT(TT),
            request: TT => ({
              type: "model",
              name: UT,
              bitmap: TT,
              geometry: WT
            })
          }
        }))
      }(mT, TT, UT)), (UT => ({
        type: "drawModel",
        id: UT,
        name: TT,
        size: mT,
        outlineWidth: WT
      })))
    }
  },
  36476: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => HT,
      f: () => gT,
      h: () => LT,
      l: () => kT
    });
    const WT = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      zT = .6,
      MT = {
        width: 2 * WT.across,
        height: 2 * WT.down + WT.up
      };

    function gT(TT, UT) {
      const mT = UT > 0 ? UT + 1 : 0,
        gT = TT * zT - UT / WT.across;
      return Math.max(0, Math.min(gT, (TT - 2 * mT) / MT.height))
    }
    const nT = [15, 15, 15],
      HT = {
        top: 1,
        left: .85,
        right: .7
      };

    function kT(TT, UT, mT, WT) {
      const {
        vertices: zT,
        uvs: nT,
        indices: HT,
        shades: kT
      } = TT, jT = function(TT, UT) {
        const mT = gT(TT, UT),
          WT = MT.width * mT,
          zT = MT.height * mT;
        return {
          left: (TT - WT) / 2,
          top: (TT - zT) / 2,
          width: WT,
          height: zT
        }
      }(mT, WT), lT = new Float32Array(zT.length);
      for (let MT = 0; MT < zT.length; MT += 3) lT[MT] = jT.left + zT[MT] * jT.width, lT[MT + 1] = jT.top + zT[MT + 1] * jT.height, lT[MT + 2] = zT[MT + 2];
      const pT = new Float32Array(mT * mT).fill(-1 / 0),
        BT = new Uint8ClampedArray(mT * mT * 4),
        ZT = 255 * TT.alphaCutoff;
      for (let MT = 0; MT < HT.length; MT += 3) {
        const [TT, WT, zT] = [HT[MT], HT[MT + 1], HT[MT + 2]], [gT, jT, LT] = [3 * TT, 3 * WT, 3 * zT], [cT, vT, fT, qT, iT, bT] = [lT[gT], lT[gT + 1], lT[jT], lT[jT + 1], lT[LT], lT[LT + 1]], OT = (fT - cT) * (bT - vT) - (iT - cT) * (qT - vT);
        if (Math.abs(OT) < 1e-9) continue;
        const eT = kT[MT / 3],
          [YT, JT, xT, dT, wT, tT] = [nT[2 * TT], nT[2 * TT + 1], nT[2 * WT], nT[2 * WT + 1], nT[2 * zT], nT[2 * zT + 1]],
          aT = Math.max(0, Math.floor(Math.min(cT, fT, iT))),
          yT = Math.min(mT - 1, Math.ceil(Math.max(cT, fT, iT))),
          XT = Math.max(0, Math.floor(Math.min(vT, qT, bT))),
          IT = Math.min(mT - 1, Math.ceil(Math.max(vT, qT, bT)));
        for (let MT = XT; MT <= IT; MT++)
          for (let TT = aT; TT <= yT; TT++) {
            const [WT, zT] = [TT + .5, MT + .5], nT = ((WT - cT) * (bT - vT) - (iT - cT) * (zT - vT)) / OT, HT = ((fT - cT) * (zT - vT) - (WT - cT) * (qT - vT)) / OT, kT = 1 - nT - HT;
            if (kT < 0 || nT < 0 || HT < 0) continue;
            const aT = kT * lT[gT + 2] + nT * lT[jT + 2] + HT * lT[LT + 2],
              yT = MT * mT + TT;
            if (aT <= pT[yT]) continue;
            const XT = Math.max(0, Math.min(UT.width - 1, Math.floor((kT * YT + nT * xT + HT * wT) * UT.width))),
              IT = 4 * (Math.max(0, Math.min(UT.height - 1, Math.floor((kT * JT + nT * dT + HT * tT) * UT.height))) * UT.width + XT);
            UT.pixels[IT + 3] < ZT || (pT[yT] = aT, BT[4 * yT] = UT.pixels[IT] * eT, BT[4 * yT + 1] = UT.pixels[IT + 1] * eT, BT[4 * yT + 2] = UT.pixels[IT + 2] * eT, BT[4 * yT + 3] = 255)
          }
      }
      return LT(BT, mT, WT), BT
    }
    let jT = NaN,
      lT = new Int32Array(0);

    function LT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UT => 0 !== TT[4 * UT + 3];
      const zT = new Uint8Array(UT * UT);
      for (let nT = 0; nT < UT * UT; nT++) zT[nT] = WT(nT) ? 1 : 0;
      const MT = (TT, mT) => TT >= 0 && mT >= 0 && TT < UT && mT < UT && 0 === zT[mT * UT + TT],
        gT = new Float32Array(UT * UT).fill(1 / 0),
        HT = function(TT) {
          if (TT !== jT) {
            const UT = Math.ceil(TT + 1),
              mT = [];
            for (let WT = -UT; WT <= UT; WT++)
              for (let zT = -UT; zT <= UT; zT++) {
                const UT = zT * zT + WT * WT;
                UT > 0 && UT < (TT + 1) ** 2 && mT.push(zT, WT, UT)
              }
            jT = TT, lT = Int32Array.from(mT)
          }
          return lT
        }(mT);
      for (let nT = 0; nT < UT; nT++)
        for (let TT = 0; TT < UT; TT++) {
          if (1 === zT[nT * UT + TT] && (MT(TT - 1, nT) || MT(TT + 1, nT) || MT(TT, nT - 1) || MT(TT, nT + 1)))
            for (let mT = 0; mT < HT.length; mT += 3) {
              const WT = TT + HT[mT],
                zT = nT + HT[mT + 1];
              if (WT >= 0 && zT >= 0 && WT < UT && zT < UT) {
                const TT = zT * UT + WT;
                gT[TT] = Math.min(gT[TT], HT[mT + 2])
              }
            }
        }
      for (let kT = 0; kT < UT * UT; kT++) 1 !== zT[kT] && gT[kT] !== 1 / 0 && (TT.set(nT, 4 * kT), TT[4 * kT + 3] = Math.round(255 * Math.min(1, mT + 1 - Math.sqrt(gT[kT]))))
    }
  },
  36480: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    const WT = {
      wait: function(TT) {
        return new Promise((UT => {
          setTimeout(UT, TT)
        }))
      },
      stallMs: 2e4
    };
    class zT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WT;
        this.url = TT, this.options = UT, this.timing = mT, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = TT
      }
      ready() {
        if (null === this.fetched) {
          const TT = new AbortController;
          this.fetchAbort = TT, this.fetched = this.fetchWithRetries(TT.signal).then((UT => (this.fetchAbort === TT && (this.fetchAbort = null), UT)))
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
      async fetchWithRetries(TT) {
        for (let UT = 0;; UT++) {
          const mT = new URL(this.url);
          if (UT > 0 && mT.searchParams.set("cache-bust", `${Date.now()}-${UT}`), await this.fetchWhole(mT, TT)) return this.scriptUrl = mT, !0;
          if (UT >= 3 || TT.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** UT), TT.aborted) return !1
        }
      }
      async fetchWhole(TT, UT) {
        const mT = new AbortController;
        let WT;
        const zT = () => {
            clearTimeout(WT), WT = setTimeout((() => {
              mT.abort()
            }), this.timing.stallMs)
          },
          MT = () => {
            mT.abort()
          };
        UT.addEventListener("abort", MT, {
          once: !0
        }), zT();
        try {
          var gT;
          const UT = await fetch(TT, {
            signal: mT.signal
          });
          if (!UT.ok) return !1;
          const WT = null === (gT = UT.body) || void 0 === gT ? void 0 : gT.getReader();
          if (!WT) return !1;
          for (;;) {
            const {
              done: TT
            } = await WT.read();
            if (TT) return !0;
            zT()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(WT), UT.removeEventListener("abort", MT)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);