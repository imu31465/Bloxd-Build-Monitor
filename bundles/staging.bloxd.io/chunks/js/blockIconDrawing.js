export const id = 2;
export const ids = [2];
export const modules = {
  37071: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      drawBlockIcon: () => RB,
      drawBlockIconUrl: () => WB,
      getDrawnBlockIcon: () => NB,
      resetBlockIconDrawingForTests: () => pB
    });
    var YB = GB(37078);
    const DB = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      QB = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      oB = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const jB = 1e-6;

    function yB(BB, OB, GB, YB) {
      let {
        origin: DB,
        across: QB,
        down: oB,
        texture: yB,
        rect: [JB, MB, PB, zB],
        shade: lB
      } = YB;
      const pB = QB.x * oB.y - QB.y * oB.x;
      if (Math.abs(pB) < 1e-9) return;
      const qB = [DB.x, DB.x + QB.x, DB.x + oB.x, DB.x + QB.x + oB.x],
        ZB = [DB.y, DB.y + QB.y, DB.y + oB.y, DB.y + QB.y + oB.y],
        NB = Math.max(0, Math.floor(Math.min(...qB))),
        RB = Math.min(GB - 1, Math.ceil(Math.max(...qB))),
        WB = Math.max(0, Math.floor(Math.min(...ZB))),
        AB = Math.min(GB - 1, Math.ceil(Math.max(...ZB)));
      for (let VB = WB; VB <= AB; VB++)
        for (let YB = NB; YB <= RB; YB++) {
          const qB = YB + .5 - DB.x,
            ZB = VB + .5 - DB.y,
            NB = (qB * oB.y - ZB * oB.x) / pB,
            RB = (QB.x * ZB - QB.y * qB) / pB;
          if (NB < -jB || NB > 1 + jB || RB < -jB || RB > 1 + jB) continue;
          const WB = VB * GB + YB;
          OB[WB] = 1;
          const AB = JB + Math.min(Math.max(NB, 0), 1) * (PB - JB),
            SB = MB + Math.min(Math.max(RB, 0), 1) * (zB - MB),
            nB = Math.min(yB.width - 1, Math.floor(AB * yB.width)),
            UB = 4 * (Math.min(yB.height - 1, Math.floor(SB * yB.height)) * yB.width + nB),
            fB = yB.pixels[UB + 3] / 255;
          if (0 === fB) continue;
          const kB = 4 * WB,
            dB = BB[kB + 3] / 255 * (1 - fB),
            KB = fB + dB;
          for (let OB = 0; OB < 3; OB++) BB[kB + OB] = (yB.pixels[UB + OB] * lB * fB + BB[kB + OB] * dB) / KB;
          BB[kB + 3] = 255 * KB
        }
    }
    var JB = GB(37083);
    const MB = new Map,
      PB = new Map,
      zB = new Map,
      lB = new Map;

    function pB() {
      MB.clear(), PB.clear(), zB.clear(), lB.clear()
    }

    function qB(BB, OB, GB) {
      return `${OB}|${GB}|${BB}`
    }

    function ZB(BB, OB, GB) {
      let YB = BB.get(OB);
      return void 0 === YB && (YB = GB().catch((GB => {
        throw BB.delete(OB), GB
      })), BB.set(OB, YB)), YB
    }

    function NB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return PB.get(qB(BB, OB, GB))
    }

    function RB(BB, OB, GB, YB) {
      const DB = qB(BB, OB, GB);
      return ZB(MB, DB, (async () => {
        const QB = await AB(YB(BB), OB, GB);
        return PB.set(DB, QB), QB
      }))
    }

    function WB(BB, OB, GB, YB) {
      return ZB(zB, qB(BB, OB, GB), (async () => {
        var DB;
        const QB = YB(BB);
        return null !== (DB = await (0, JB.e)(QB, OB, GB)) && void 0 !== DB ? DB : (await AB(QB, OB, GB)).toDataURL()
      }))
    }
    async function AB(BB, OB, GB) {
      let {
        top: jB,
        left: JB,
        right: MB,
        itemType: PB
      } = BB;
      const [zB, lB, pB] = await Promise.all([VB(jB), VB(JB), VB(MB)]), qB = function(BB, OB, GB, DB) {
        const QB = (0, YB.k)(GB, DB),
          oB = QB * YB.d.across,
          jB = QB * YB.d.down,
          JB = QB * YB.d.up,
          MB = Math.max(...OB.boxes.map((BB => BB[4]))),
          PB = GB / 2,
          zB = jB + (GB - jB - jB - MB * JB) / 2,
          lB = (BB, OB, GB) => ({
            x: PB + (BB - GB) * oB,
            y: zB - jB + (BB + GB) * jB + (MB - OB) * JB
          }),
          pB = (BB, GB, YB, DB, QB, oB) => ({
            origin: BB,
            across: {
              x: GB.x - BB.x,
              y: GB.y - BB.y
            },
            down: {
              x: YB.x - BB.x,
              y: YB.y - BB.y
            },
            texture: DB,
            rect: OB.cropFaces ? QB : [0, 0, 1, 1],
            shade: oB
          }),
          qB = new Uint8ClampedArray(GB * GB * 4),
          ZB = new Uint8Array(GB * GB),
          NB = YB.g;
        for (const [YB, RB, WB, AB, VB, SB] of OB.boxes) {
          const OB = pB(lB(AB, VB, SB), lB(AB, VB, WB), lB(AB, RB, SB), BB.right, [1 - SB, 1 - VB, 1 - WB, 1 - RB], NB.right),
            DB = pB(lB(YB, VB, SB), lB(AB, VB, SB), lB(YB, RB, SB), BB.left, [YB, 1 - VB, AB, 1 - RB], NB.left),
            QB = pB(lB(YB, VB, WB), lB(AB, VB, WB), lB(YB, VB, SB), BB.top, [YB, WB, AB, SB], NB.top);
          for (const BB of [OB, DB, QB]) yB(qB, ZB, GB, BB)
        }
        return (0, YB.n)(qB, GB, DB, (BB => 1 === ZB[BB])), qB
      }({
        top: zB,
        left: lB,
        right: pB
      }, function(BB) {
        return "SlabBlock" === BB ? QB : "StairsBlock" === BB ? oB : DB
      }(PB), OB, GB), ZB = document.createElement("canvas");
      ZB.width = OB, ZB.height = OB;
      const NB = ZB.getContext("2d");
      if (!NB) throw new Error("Failed to get 2D context");
      return NB.putImageData(new ImageData(qB, OB, OB), 0, 0), ZB
    }

    function VB(BB) {
      return ZB(lB, BB, (async () => {
        const OB = await (0, JB.n)(BB),
          GB = document.createElement("canvas");
        GB.width = OB.width, GB.height = OB.height;
        const YB = GB.getContext("2d");
        if (!YB) throw new Error("Failed to get 2D context");
        return YB.drawImage(OB, 0, 0), {
          width: OB.width,
          height: OB.height,
          pixels: YB.getImageData(0, 0, OB.width, OB.height).data
        }
      }))
    }
  },
  37083: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => dB,
      i: () => KB,
      k: () => VB,
      n: () => WB,
      q: () => SB
    });
    var YB = GB(271),
      DB = GB(92);
    const QB = new(GB(37085).d)(new URL(GB.p + GB.u(3), GB.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var oB = GB(1896),
      jB = GB(2259);
    const yB = 1e4,
      JB = 3e4;
    let MB = null,
      PB = null,
      zB = null,
      lB = !1,
      pB = 0;
    const qB = new Map;
    let ZB = null;
    const NB = new Map,
      RB = new Map;

    function WB(BB) {
      const OB = new Promise(((OB, GB) => {
        const YB = new Image;
        YB.crossOrigin = "anonymous", YB.fetchPriority = "high", YB.onload = () => {
          OB(YB)
        }, YB.onerror = () => {
          GB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
        }, YB.src = BB
      }));
      return (0, jB.e)(OB)
    }

    function AB(BB) {
      var OB, GB;
      lB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), lB = !0, null === (OB = MB) || void 0 === OB || OB.terminate(), MB = null, PB = null, NB.clear(), RB.clear();
      for (const YB of qB.values()) YB(null);
      qB.clear(), null === (GB = ZB) || void 0 === GB || GB()
    }

    function VB() {
      return null !== PB
    }

    function SB() {
      return zB ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === YB.b.ios_icon_worker_v1 && (0, DB.isWebKit)()) return;
        try {
          MB = await async function() {
            return await QB.ready(), QB.start()
          }()
        } catch (jB) {
          return void AB(`did not start (${String(jB)})`)
        }
        let BB = () => {};
        const OB = new Promise((OB => {
          BB = OB
        }));
        MB.onmessage = OB => {
          let {
            data: GB
          } = OB;
          if ("started" === GB.type) PB = MB, BB();
          else if ("failed" === GB.type) AB(`failed a draw (${GB.message})`);
          else {
            var YB, DB;
            null === (YB = qB.get(GB.id)) || void 0 === YB || YB(GB.url), qB.delete(GB.id), null === (DB = ZB) || void 0 === DB || DB()
          }
        }, MB.onerror = OB => {
          OB.preventDefault(), AB(`stopped (${OB.message||"its script did not load or run"})`), BB()
        };
        const GB = `did not start in ${JB/1e3} s`;
        await (0, oB.h)(OB, JB, GB).catch((() => {
          AB(GB)
        }))
      }(), zB
    }

    function nB() {
      if (null !== ZB || 0 === qB.size) return;
      const BB = new Promise((BB => {
          ZB = BB
        })),
        OB = `did not answer in ${yB/1e3} s`;
      (0, oB.h)(BB, yB, OB).then((() => {
        ZB = null, nB()
      }), (() => {
        ZB = null, AB(OB)
      }))
    }

    function UB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      BB.postMessage(OB, GB)
    }

    function fB(BB, OB, GB, YB) {
      let DB = OB.get(GB);
      return void 0 === DB && (DB = YB().then((async OB => {
        let {
          image: GB,
          request: YB
        } = OB;
        try {
          const OB = await createImageBitmap(GB);
          UB(BB, YB(OB), [OB])
        } catch (DB) {
          AB(`could not take an image (${String(DB)})`)
        }
      })), DB.catch((() => {
        OB.get(GB) === DB && OB.delete(GB)
      })), OB.set(GB, DB)), DB
    }
    async function kB(BB, OB) {
      SB();
      const GB = PB;
      if (null === GB) return null;
      if (await BB(GB), PB !== GB) return null;
      const YB = ++pB;
      return new Promise((BB => {
        qB.set(YB, BB), UB(GB, OB(YB)), nB()
      }))
    }

    function dB(BB, OB, GB) {
      return kB((OB => Promise.all([BB.top, BB.left, BB.right].map((BB => function(BB, OB) {
        return fB(BB, NB, OB, (async () => ({
          image: await WB(OB),
          request: BB => ({
            type: "texture",
            url: OB,
            bitmap: BB
          })
        })))
      }(OB, BB))))), (YB => ({
        type: "draw",
        id: YB,
        ...BB,
        size: OB,
        outlineWidth: GB
      })))
    }

    function KB(BB, OB, GB, YB) {
      return kB((GB => function(BB, OB, GB) {
        return fB(BB, RB, OB, (async () => {
          const {
            texture: BB,
            ...YB
          } = await GB();
          return {
            image: await WB(BB),
            request: BB => ({
              type: "model",
              name: OB,
              bitmap: BB,
              geometry: YB
            })
          }
        }))
      }(GB, BB, OB)), (OB => ({
        type: "drawModel",
        id: OB,
        name: BB,
        size: GB,
        outlineWidth: YB
      })))
    }
  },
  37078: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      g: () => yB,
      k: () => oB,
      n: () => zB,
      q: () => JB
    });
    const YB = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      DB = .6,
      QB = {
        width: 2 * YB.across,
        height: 2 * YB.down + YB.up
      };

    function oB(BB, OB) {
      const GB = OB > 0 ? OB + 1 : 0,
        oB = BB * DB - OB / YB.across;
      return Math.max(0, Math.min(oB, (BB - 2 * GB) / QB.height))
    }
    const jB = [15, 15, 15],
      yB = {
        top: 1,
        left: .85,
        right: .7
      };

    function JB(BB, OB, GB, YB) {
      const {
        vertices: DB,
        uvs: jB,
        indices: yB,
        shades: JB
      } = BB, MB = function(BB, OB) {
        const GB = oB(BB, OB),
          YB = QB.width * GB,
          DB = QB.height * GB;
        return {
          left: (BB - YB) / 2,
          top: (BB - DB) / 2,
          width: YB,
          height: DB
        }
      }(GB, YB), PB = new Float32Array(DB.length);
      for (let QB = 0; QB < DB.length; QB += 3) PB[QB] = MB.left + DB[QB] * MB.width, PB[QB + 1] = MB.top + DB[QB + 1] * MB.height, PB[QB + 2] = DB[QB + 2];
      const lB = new Float32Array(GB * GB).fill(-1 / 0),
        pB = new Uint8ClampedArray(GB * GB * 4),
        qB = 255 * BB.alphaCutoff;
      for (let QB = 0; QB < yB.length; QB += 3) {
        const [BB, YB, DB] = [yB[QB], yB[QB + 1], yB[QB + 2]], [oB, MB, zB] = [3 * BB, 3 * YB, 3 * DB], [ZB, NB, RB, WB, AB, VB] = [PB[oB], PB[oB + 1], PB[MB], PB[MB + 1], PB[zB], PB[zB + 1]], SB = (RB - ZB) * (VB - NB) - (AB - ZB) * (WB - NB);
        if (Math.abs(SB) < 1e-9) continue;
        const nB = JB[QB / 3],
          [UB, fB, kB, dB, KB, uB] = [jB[2 * BB], jB[2 * BB + 1], jB[2 * YB], jB[2 * YB + 1], jB[2 * DB], jB[2 * DB + 1]],
          mB = Math.max(0, Math.floor(Math.min(ZB, RB, AB))),
          IB = Math.min(GB - 1, Math.ceil(Math.max(ZB, RB, AB))),
          FB = Math.max(0, Math.floor(Math.min(NB, WB, VB))),
          iB = Math.min(GB - 1, Math.ceil(Math.max(NB, WB, VB)));
        for (let QB = FB; QB <= iB; QB++)
          for (let BB = mB; BB <= IB; BB++) {
            const [YB, DB] = [BB + .5, QB + .5], jB = ((YB - ZB) * (VB - NB) - (AB - ZB) * (DB - NB)) / SB, yB = ((RB - ZB) * (DB - NB) - (YB - ZB) * (WB - NB)) / SB, JB = 1 - jB - yB;
            if (JB < 0 || jB < 0 || yB < 0) continue;
            const mB = JB * PB[oB + 2] + jB * PB[MB + 2] + yB * PB[zB + 2],
              IB = QB * GB + BB;
            if (mB <= lB[IB]) continue;
            const FB = Math.max(0, Math.min(OB.width - 1, Math.floor((JB * UB + jB * kB + yB * KB) * OB.width))),
              iB = 4 * (Math.max(0, Math.min(OB.height - 1, Math.floor((JB * fB + jB * dB + yB * uB) * OB.height))) * OB.width + FB);
            OB.pixels[iB + 3] < qB || (lB[IB] = mB, pB[4 * IB] = OB.pixels[iB] * nB, pB[4 * IB + 1] = OB.pixels[iB + 1] * nB, pB[4 * IB + 2] = OB.pixels[iB + 2] * nB, pB[4 * IB + 3] = 255)
          }
      }
      return zB(pB, GB, YB), pB
    }
    let MB = NaN,
      PB = new Int32Array(0);

    function zB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OB => 0 !== BB[4 * OB + 3];
      const DB = new Uint8Array(OB * OB);
      for (let jB = 0; jB < OB * OB; jB++) DB[jB] = YB(jB) ? 1 : 0;
      const QB = (BB, GB) => BB >= 0 && GB >= 0 && BB < OB && GB < OB && 0 === DB[GB * OB + BB],
        oB = new Float32Array(OB * OB).fill(1 / 0),
        yB = function(BB) {
          if (BB !== MB) {
            const OB = Math.ceil(BB + 1),
              GB = [];
            for (let YB = -OB; YB <= OB; YB++)
              for (let DB = -OB; DB <= OB; DB++) {
                const OB = DB * DB + YB * YB;
                OB > 0 && OB < (BB + 1) ** 2 && GB.push(DB, YB, OB)
              }
            MB = BB, PB = Int32Array.from(GB)
          }
          return PB
        }(GB);
      for (let jB = 0; jB < OB; jB++)
        for (let BB = 0; BB < OB; BB++) {
          if (1 === DB[jB * OB + BB] && (QB(BB - 1, jB) || QB(BB + 1, jB) || QB(BB, jB - 1) || QB(BB, jB + 1)))
            for (let GB = 0; GB < yB.length; GB += 3) {
              const YB = BB + yB[GB],
                DB = jB + yB[GB + 1];
              if (YB >= 0 && DB >= 0 && YB < OB && DB < OB) {
                const BB = DB * OB + YB;
                oB[BB] = Math.min(oB[BB], yB[GB + 2])
              }
            }
        }
      for (let JB = 0; JB < OB * OB; JB++) 1 !== DB[JB] && oB[JB] !== 1 / 0 && (BB.set(jB, 4 * JB), BB[4 * JB + 3] = Math.round(255 * Math.min(1, GB + 1 - Math.sqrt(oB[JB]))))
    }
  },
  37085: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    const YB = {
      wait: function(BB) {
        return new Promise((OB => {
          setTimeout(OB, BB)
        }))
      },
      stallMs: 2e4
    };
    class DB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YB;
        this.url = BB, this.options = OB, this.timing = GB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((OB => (this.fetchAbort === BB && (this.fetchAbort = null), OB)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(BB) {
        for (let OB = 0;; OB++) {
          const GB = new URL(this.url);
          if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
          if (OB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** OB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, OB) {
        const GB = new AbortController;
        let YB;
        const DB = () => {
            clearTimeout(YB), YB = setTimeout((() => {
              GB.abort()
            }), this.timing.stallMs)
          },
          QB = () => {
            GB.abort()
          };
        OB.addEventListener("abort", QB, {
          once: !0
        }), DB();
        try {
          var oB;
          const OB = await fetch(BB, {
            signal: GB.signal
          });
          if (!OB.ok) return !1;
          const YB = null === (oB = OB.body) || void 0 === oB ? void 0 : oB.getReader();
          if (!YB) return !1;
          for (;;) {
            const {
              done: BB
            } = await YB.read();
            if (BB) return !0;
            DB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(YB), OB.removeEventListener("abort", QB)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);