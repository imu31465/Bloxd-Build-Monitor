export const id = 217;
export const ids = [217];
export const modules = {
  36412: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => OS,
      e: () => dS,
      i: () => PS
    });
    var tS = gS(307),
      bS = gS(104);
    const XS = new(gS(36415).d)(new URL(gS.p + gS.u(3), gS.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var xS = gS(1920),
      NS = gS(2251);
    const qS = 1e4,
      uS = 3e4;
    let IS = null,
      fS = null,
      kS = null,
      aS = !1,
      KS = 0;
    const jS = new Map;
    let GS = null;
    const CS = new Map,
      nS = new Map;

    function PS(SS) {
      const HS = new Promise(((HS, gS) => {
        const tS = new Image;
        tS.crossOrigin = "anonymous", tS.fetchPriority = "high", tS.onload = () => {
          HS(tS)
        }, tS.onerror = () => {
          gS(new Error(`A block icon's texture did not load: ${SS.slice(0,100)}`))
        }, tS.src = SS
      }));
      return (0, NS.f)(HS)
    }

    function QS(SS) {
      var HS, gS;
      aS || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${SS}`), aS = !0, null === (HS = IS) || void 0 === HS || HS.terminate(), IS = null, fS = null, CS.clear(), nS.clear();
      for (const tS of jS.values()) tS(null);
      jS.clear(), null === (gS = GS) || void 0 === gS || gS()
    }

    function DS() {
      return kS ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === tS.c.ios_icon_worker_v1 && (0, bS.isWebKit)()) return;
        try {
          IS = await async function() {
            return await XS.ready(), XS.start()
          }()
        } catch (NS) {
          return void QS(`did not start (${String(NS)})`)
        }
        let SS = () => {};
        const HS = new Promise((HS => {
          SS = HS
        }));
        IS.onmessage = HS => {
          let {
            data: gS
          } = HS;
          if ("started" === gS.type) fS = IS, SS();
          else if ("failed" === gS.type) QS(`failed a draw (${gS.message})`);
          else {
            var tS, bS;
            null === (tS = jS.get(gS.id)) || void 0 === tS || tS(gS.url), jS.delete(gS.id), null === (bS = GS) || void 0 === bS || bS()
          }
        }, IS.onerror = HS => {
          HS.preventDefault(), QS(`stopped (${HS.message||"its script did not load or run"})`), SS()
        };
        const gS = `did not start in ${uS/1e3} s`;
        await (0, xS.m)(HS, uS, gS).catch((() => {
          QS(gS)
        }))
      }(), kS
    }

    function wS() {
      if (null !== GS || 0 === jS.size) return;
      const SS = new Promise((SS => {
          GS = SS
        })),
        HS = `did not answer in ${qS/1e3} s`;
      (0, xS.m)(SS, qS, HS).then((() => {
        GS = null, wS()
      }), (() => {
        GS = null, QS(HS)
      }))
    }

    function hS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      SS.postMessage(HS, gS)
    }

    function ZS(SS, HS, gS, tS) {
      let bS = HS.get(gS);
      return void 0 === bS && (bS = tS().then((async HS => {
        let {
          image: gS,
          request: tS
        } = HS;
        try {
          const HS = await createImageBitmap(gS);
          hS(SS, tS(HS), [HS])
        } catch (bS) {
          QS(`could not take an image (${String(bS)})`)
        }
      })), bS.catch((() => {
        HS.get(gS) === bS && HS.delete(gS)
      })), HS.set(gS, bS)), bS
    }
    async function JS(SS, HS) {
      DS();
      const gS = fS;
      if (null === gS) return null;
      if (await SS(gS), fS !== gS) return null;
      const tS = ++KS;
      return new Promise((SS => {
        jS.set(tS, SS), hS(gS, HS(tS)), wS()
      }))
    }

    function OS(SS, HS, gS) {
      return JS((HS => Promise.all([SS.top, SS.left, SS.right].map((SS => function(SS, HS) {
        return ZS(SS, CS, HS, (async () => ({
          image: await PS(HS),
          request: SS => ({
            type: "texture",
            url: HS,
            bitmap: SS
          })
        })))
      }(HS, SS))))), (tS => ({
        type: "draw",
        id: tS,
        ...SS,
        size: HS,
        outlineWidth: gS
      })))
    }

    function dS(SS, HS, gS, tS) {
      return JS((gS => function(SS, HS, gS) {
        return ZS(SS, nS, HS, (async () => {
          const {
            texture: SS,
            ...tS
          } = await gS();
          return {
            image: await PS(SS),
            request: SS => ({
              type: "model",
              name: HS,
              bitmap: SS,
              geometry: tS
            })
          }
        }))
      }(gS, SS, HS)), (HS => ({
        type: "drawModel",
        id: HS,
        name: SS,
        size: gS,
        outlineWidth: tS
      })))
    }
  },
  36403: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      f: () => qS,
      j: () => xS,
      m: () => kS,
      n: () => uS
    });
    const tS = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      bS = .6,
      XS = {
        width: 2 * tS.across,
        height: 2 * tS.down + tS.up
      };

    function xS(SS, HS) {
      const gS = HS > 0 ? HS + 1 : 0,
        xS = SS * bS - HS / tS.across;
      return Math.max(0, Math.min(xS, (SS - 2 * gS) / XS.height))
    }
    const NS = [15, 15, 15],
      qS = {
        top: 1,
        left: .85,
        right: .7
      };

    function uS(SS, HS, gS, tS) {
      const {
        vertices: bS,
        uvs: NS,
        indices: qS,
        shades: uS
      } = SS, IS = function(SS, HS) {
        const gS = xS(SS, HS),
          tS = XS.width * gS,
          bS = XS.height * gS;
        return {
          left: (SS - tS) / 2,
          top: (SS - bS) / 2,
          width: tS,
          height: bS
        }
      }(gS, tS), fS = new Float32Array(bS.length);
      for (let XS = 0; XS < bS.length; XS += 3) fS[XS] = IS.left + bS[XS] * IS.width, fS[XS + 1] = IS.top + bS[XS + 1] * IS.height, fS[XS + 2] = bS[XS + 2];
      const aS = new Float32Array(gS * gS).fill(-1 / 0),
        KS = new Uint8ClampedArray(gS * gS * 4),
        jS = 255 * SS.alphaCutoff;
      for (let XS = 0; XS < qS.length; XS += 3) {
        const [SS, tS, bS] = [qS[XS], qS[XS + 1], qS[XS + 2]], [xS, IS, kS] = [3 * SS, 3 * tS, 3 * bS], [GS, CS, nS, PS, QS, DS] = [fS[xS], fS[xS + 1], fS[IS], fS[IS + 1], fS[kS], fS[kS + 1]], wS = (nS - GS) * (DS - CS) - (QS - GS) * (PS - CS);
        if (Math.abs(wS) < 1e-9) continue;
        const hS = uS[XS / 3],
          [ZS, JS, OS, dS, cS, vS] = [NS[2 * SS], NS[2 * SS + 1], NS[2 * tS], NS[2 * tS + 1], NS[2 * bS], NS[2 * bS + 1]],
          ES = Math.max(0, Math.floor(Math.min(GS, nS, QS))),
          LS = Math.min(gS - 1, Math.ceil(Math.max(GS, nS, QS))),
          YS = Math.max(0, Math.floor(Math.min(CS, PS, DS))),
          AS = Math.min(gS - 1, Math.ceil(Math.max(CS, PS, DS)));
        for (let XS = YS; XS <= AS; XS++)
          for (let SS = ES; SS <= LS; SS++) {
            const [tS, bS] = [SS + .5, XS + .5], NS = ((tS - GS) * (DS - CS) - (QS - GS) * (bS - CS)) / wS, qS = ((nS - GS) * (bS - CS) - (tS - GS) * (PS - CS)) / wS, uS = 1 - NS - qS;
            if (uS < 0 || NS < 0 || qS < 0) continue;
            const ES = uS * fS[xS + 2] + NS * fS[IS + 2] + qS * fS[kS + 2],
              LS = XS * gS + SS;
            if (ES <= aS[LS]) continue;
            const YS = Math.max(0, Math.min(HS.width - 1, Math.floor((uS * ZS + NS * OS + qS * cS) * HS.width))),
              AS = 4 * (Math.max(0, Math.min(HS.height - 1, Math.floor((uS * JS + NS * dS + qS * vS) * HS.height))) * HS.width + YS);
            HS.pixels[AS + 3] < jS || (aS[LS] = ES, KS[4 * LS] = HS.pixels[AS] * hS, KS[4 * LS + 1] = HS.pixels[AS + 1] * hS, KS[4 * LS + 2] = HS.pixels[AS + 2] * hS, KS[4 * LS + 3] = 255)
          }
      }
      return kS(KS, gS, tS), KS
    }
    let IS = NaN,
      fS = new Int32Array(0);

    function kS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HS => 0 !== SS[4 * HS + 3];
      const bS = new Uint8Array(HS * HS);
      for (let NS = 0; NS < HS * HS; NS++) bS[NS] = tS(NS) ? 1 : 0;
      const XS = (SS, gS) => SS >= 0 && gS >= 0 && SS < HS && gS < HS && 0 === bS[gS * HS + SS],
        xS = new Float32Array(HS * HS).fill(1 / 0),
        qS = function(SS) {
          if (SS !== IS) {
            const HS = Math.ceil(SS + 1),
              gS = [];
            for (let tS = -HS; tS <= HS; tS++)
              for (let bS = -HS; bS <= HS; bS++) {
                const HS = bS * bS + tS * tS;
                HS > 0 && HS < (SS + 1) ** 2 && gS.push(bS, tS, HS)
              }
            IS = SS, fS = Int32Array.from(gS)
          }
          return fS
        }(gS);
      for (let NS = 0; NS < HS; NS++)
        for (let SS = 0; SS < HS; SS++) {
          if (1 === bS[NS * HS + SS] && (XS(SS - 1, NS) || XS(SS + 1, NS) || XS(SS, NS - 1) || XS(SS, NS + 1)))
            for (let gS = 0; gS < qS.length; gS += 3) {
              const tS = SS + qS[gS],
                bS = NS + qS[gS + 1];
              if (tS >= 0 && bS >= 0 && tS < HS && bS < HS) {
                const SS = bS * HS + tS;
                xS[SS] = Math.min(xS[SS], qS[gS + 2])
              }
            }
        }
      for (let uS = 0; uS < HS * HS; uS++) 1 !== bS[uS] && xS[uS] !== 1 / 0 && (SS.set(NS, 4 * uS), SS[4 * uS + 3] = Math.round(255 * Math.min(1, gS + 1 - Math.sqrt(xS[uS]))))
    }
  },
  36415: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    const tS = {
      wait: function(SS) {
        return new Promise((HS => {
          setTimeout(HS, SS)
        }))
      },
      stallMs: 2e4
    };
    class bS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tS;
        this.url = SS, this.options = HS, this.timing = gS, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = SS
      }
      ready() {
        if (null === this.fetched) {
          const SS = new AbortController;
          this.fetchAbort = SS, this.fetched = this.fetchWithRetries(SS.signal).then((HS => (this.fetchAbort === SS && (this.fetchAbort = null), HS)))
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
      async fetchWithRetries(SS) {
        for (let HS = 0;; HS++) {
          const gS = new URL(this.url);
          if (HS > 0 && gS.searchParams.set("cache-bust", `${Date.now()}-${HS}`), await this.fetchWhole(gS, SS)) return this.scriptUrl = gS, !0;
          if (HS >= 3 || SS.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** HS), SS.aborted) return !1
        }
      }
      async fetchWhole(SS, HS) {
        const gS = new AbortController;
        let tS;
        const bS = () => {
            clearTimeout(tS), tS = setTimeout((() => {
              gS.abort()
            }), this.timing.stallMs)
          },
          XS = () => {
            gS.abort()
          };
        HS.addEventListener("abort", XS, {
          once: !0
        }), bS();
        try {
          var xS;
          const HS = await fetch(SS, {
            signal: gS.signal
          });
          if (!HS.ok) return !1;
          const tS = null === (xS = HS.body) || void 0 === xS ? void 0 : xS.getReader();
          if (!tS) return !1;
          for (;;) {
            const {
              done: SS
            } = await tS.read();
            if (SS) return !0;
            bS()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(tS), HS.removeEventListener("abort", XS)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);