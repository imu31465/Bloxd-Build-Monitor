export const id = 60;
export const ids = [60];
export const modules = {
  38738: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    const QB = new WeakMap;

    function nB(BB, jB) {
      return QB.set(BB, jB), BB
    }

    function dB(BB) {
      var jB;
      return null !== (jB = QB.get(BB)) && void 0 !== jB ? jB : null
    }
  },
  38756: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB
    });
    var QB = zB(1263);

    function nB(BB) {
      const jB = /(\d*\.?\d+)px/.exec(BB);
      return jB ? Number(jB[1]) : null
    }

    function dB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let IB = !1;
    const NB = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(BB, jB, QB, NB, uB, UB) {
        if (uB <= 0 || UB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: aB,
          fontVariant: pB,
          fontWeight: rB,
          fontSize: sB,
          font: JB
        } = this, mB = [aB, pB, rB, `${sB}px`, JB].filter(Boolean).join(" "), yB = [
          [rB, `${sB}px`, dB(JB)].filter(Boolean).join(" "), `${sB}px sans-serif`
        ], kB = BB.font, GB = function(BB, jB, zB) {
          for (const QB of jB) {
            BB.font = QB;
            const jB = nB(BB.font),
              IB = dB(QB);
            if (null !== jB && Math.abs(jB - zB) <= .5 && BB.font.toLowerCase().includes(IB.toLowerCase())) return QB
          }
          return null
        }(BB, [mB, ...yB], sB);
        GB !== mB && function(BB, jB, QB) {
          IB || (IB = !0, Promise.resolve().then((() => zB(1121))).then((zB => {
            let {
              Zm: nB
            } = zB;
            nB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              Cs: jB,
              drawnWith: null !== QB && void 0 !== QB ? QB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(mB, kB, GB);
        const LB = nB(BB.font);
        if (null === GB && null !== LB && LB > 0) {
          const zB = sB / LB;
          BB.save();
          try {
            return BB.scale(zB, zB), {
              height: this.drawLines(BB, jB, QB / zB, NB / zB, uB / zB, UB / zB, LB).height * zB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, jB, QB, NB, uB, UB, sB)
      },
      drawLines: function(BB, jB, zB, nB, dB, IB, NB) {
        const uB = zB + dB,
          UB = nB + IB;
        let aB, pB = nB + IB / 2 + NB / 2;
        "right" === this.align ? (aB = uB, BB.textAlign = "right") : "left" === this.align ? (aB = zB, BB.textAlign = "left") : (aB = zB + dB / 2, BB.textAlign = "center");
        for (const QB of jB) {
          BB.measureText(QB).width >= dB && (jB = jB.replace(QB, ""))
        }
        jB = (0, QB.K)(jB);
        const rB = [],
          sB = jB.split("\n"),
          JB = this.justify ? BB.measureText("\u200a").width : 0;
        sB.forEach((jB => {
          let zB = BB.measureText(jB).width;
          if (zB <= dB) rB.push(jB);
          else {
            let QB = jB;
            const nB = dB;
            let IB, NB, uB;
            for (zB = BB.measureText(QB).width; zB > nB;) {
              for (IB = 0, NB = 0, uB = ""; NB < nB;) IB++, uB = QB.substr(0, IB), NB = BB.measureText(uB).width;
              IB--, uB = uB.substr(0, IB);
              const jB = IB;
              if (" " !== QB.substr(IB, 1)) {
                for (;
                  " " !== QB.substr(IB, 1) && 0 !== IB;) IB--;
                0 === IB && (IB = jB), uB = QB.substr(0, IB)
              }
              uB = this.justify ? this.justifyLine(BB, uB, JB, "\u200a", dB) : uB, QB = QB.substr(IB), zB = BB.measureText(QB).width, rB.push(uB)
            }
            zB > 0 && rB.push(QB)
          }
        }));
        const mB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, jB),
          yB = mB * (rB.length - 1),
          kB = yB / 2;
        let GB = nB;
        "top" === this.vAlign ? pB = nB + NB : "bottom" === this.vAlign ? (pB = UB - yB, GB = UB) : (GB = nB + IB / 2, pB -= kB), rB.forEach((jB => {
          jB = jB.trim(), BB.fillText(jB, aB, pB), pB += mB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(zB, nB, dB, IB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(aB, nB), BB.lineTo(aB, UB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(zB, GB), BB.lineTo(uB, GB), BB.stroke());
        return {
          height: yB + mB
        }
      },
      getTextHeight: function(BB, jB) {
        const zB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: QB
        } = BB.measureText(jB);
        return BB.textBaseline = zB, QB
      },
      justifyLine: function(BB, jB, zB, QB, nB) {
        const dB = jB.trim(),
          IB = BB.measureText(dB).width,
          NB = dB.split(/\s+/).length - 1,
          uB = Math.floor((nB - IB) / zB);
        if (NB <= 0 || uB <= 0) return dB;
        const UB = Math.floor(uB / NB);
        let aB = uB - NB * UB,
          pB = [];
        for (let rB = 0; rB < UB; rB++) pB.push(QB);
        pB = pB.join("");
        return dB.replace(/\s+/g, (BB => {
          const jB = aB > 0 ? pB + QB : pB;
          return aB--, BB + jB
        }))
      }
    }
  },
  38764: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => mB,
      c: () => JB,
      f: () => rB,
      j: () => aB,
      l: () => pB
    });
    var QB = zB(4334),
      nB = zB(376);
    const dB = 1024,
      IB = 1536,
      NB = 2 * QB.k + 1,
      uB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      UB = 1.5;

    function aB(BB, jB, zB) {
      if ("string" !== typeof BB) return jB;
      try {
        const zB = JSON.parse(BB);
        return zB && "object" === typeof zB ? zB : jB
      } catch (QB) {
        return void 0 !== zB && console.error(`Couldn't parse ${zB}`, QB), jB
      }
    }

    function pB(BB) {
      return aB(BB, null, "a leaderboard's rows")
    }

    function rB(BB, jB) {
      var zB, QB;
      return null !== jB && void 0 !== jB ? jB : {
        status: null !== (zB = BB.status) && void 0 !== zB ? zB : "loading",
        entries: null !== (QB = BB.entries) && void 0 !== QB ? QB : []
      }
    }

    function sB(BB, jB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : jB
    }

    function JB(BB, jB) {
      const zB = sB(BB.size, 1);
      let QB = sB(BB.width, sB(2.5 * zB, 2.5)),
        nB = sB(BB.height, sB(3.75 * zB, 3.75));
      Number.isFinite(dB * nB / QB) && Number.isFinite(IB * QB / nB) || (QB = 2.5, nB = 3.75);
      const NB = nB / QB,
        uB = Math.max(1, Math.min(dB, jB / NB));
      return {
        width: QB,
        height: nB,
        layoutWidth: Math.max(dB, IB / NB),
        layoutHeight: Math.max(IB, dB * NB),
        pixelWidth: Math.round(uB),
        pixelHeight: Math.round(Math.max(1, Math.min(jB, uB * NB)))
      }
    }

    function mB(BB, jB, zB, IB, aB, pB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = nB.E.defaultNameTagBackground, BB.fillRect(0, 0, jB, zB), BB.scale(jB / IB.layoutWidth, zB / IB.layoutHeight), BB.translate((IB.layoutWidth - dB) / 2, 0),
        function(BB, jB, zB, dB) {
          var IB, aB, pB, rB;
          const {
            top: sB,
            around: JB,
            showPlayerText: mB,
            localPlayerDbId: GB
          } = zB, {
            whiteUiText: LB,
            grayUiText: gB,
            yellowUiText: tB
          } = nB.E;
          BB.textBaseline = "middle";
          const SB = function(jB, zB, QB, nB, dB, IB) {
              let NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${nB}px 'Jetbrains Mono', monospace`, BB.fillStyle = dB, BB.textAlign = NB;
              let uB = jB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(uB).width > IB) {
                for (; uB.length > 0 && BB.measureText(`${uB}\u2026`).width > IB;) uB = uB.slice(0, -1);
                uB += "\u2026"
              }
              BB.fillText(uB, zB, QB)
            },
            MB = jB => {
              BB.fillStyle = LB, BB.globalAlpha = .15, BB.fillRect(24, jB, 976, 2), BB.globalAlpha = 1
            },
            EB = null === GB ? null : (0, nB.oc)(GB),
            iB = BB => null !== EB && BB.playerHash === EB,
            qB = yB(sB.entries, QB.n),
            fB = "ready" === sB.status && qB.length > 0,
            oB = null === JB ? [] : yB(JB.entries, NB),
            HB = qB.some(iB),
            DB = null === JB ? null : function(BB) {
              const jB = BB;
              if (!jB || !Number.isFinite(jB.rank) || !Number.isFinite(jB.tied) || !Number.isFinite(jB.total)) return null;
              return jB
            }(JB.standing),
            FB = oB.find(iB),
            YB = qB.find(iB),
            VB = null === DB || void 0 === FB ? null : {
              value: FB.value,
              rank: DB.rank
            },
            hB = kB(qB, void 0 === YB || YB.value === (null === VB || void 0 === VB ? void 0 : VB.value) ? VB : null),
            XB = kB(oB, VB),
            ZB = (BB, jB) => {
              const zB = BB.findIndex(iB);
              return zB >= 0 ? jB[zB] : null
            },
            AB = null !== (IB = null !== (aB = null === DB || void 0 === DB ? void 0 : DB.rank) && void 0 !== aB ? aB : ZB(oB, XB)) && void 0 !== IB ? IB : ZB(qB, hB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const TB = [...fB ? hB : [], ...HB ? [] : XB],
            PB = Math.min(280, Math.max(0, ...TB.map((jB => BB.measureText(uB.format(jB)).width)))),
            WB = PB <= 80,
            eB = WB ? 80 : 32 + PB,
            lB = WB ? 148 : eB + 28,
            wB = 660 - lB;
          SB(`TOP ${QB.n}  /  ALL TIME`, 24, 52, 28, gB, 976), SB(mB ? String(null !== (pB = jB.title) && void 0 !== pB ? pB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, LB, 976), SB("RANK", 32, 174, 28, gB, lB - 40), SB("PLAYER", lB, 174, 28, gB, wB), SB(mB ? String(null !== (rB = jB.scoreLabel) && void 0 !== rB ? rB : "Score").slice(0, 24) : "Score", 992, 174, 28, gB, 304, "right"), MB(202);
          const xB = (dB - 232) / (QB.n + UB + NB),
            KB = 208 + QB.n * xB,
            CB = KB + UB * xB,
            cB = (jB, zB, QB, nB) => {
              const dB = iB(jB);
              BB.fillStyle = dB ? tB : LB, BB.globalAlpha = dB ? .15 : nB ? .035 : 0, BB.fillRect(24, QB - xB / 2 + 1, 976, xB - 2), BB.globalAlpha = 1;
              const IB = dB ? tB : LB;
              SB(uB.format(zB), eB, QB, 34, IB, WB ? 80 : PB, WB ? "center" : "right"), SB(mB ? String(jB.name).slice(0, 64) : "Player", lB, QB, 34, IB, wB);
              const NB = uB.format(jB.value);
              SB(BB.measureText(NB).width > 304 ? jB.value.toExponential(6) : NB, 992, QB, 34, IB, 304, "right")
            };
          if (fB)
            for (const [QB, nB] of qB.entries()) cB(nB, hB[QB], 208 + (QB + .5) * xB, QB % 2 === 0);
          else {
            const BB = "error" === sB.status,
              jB = BB ? "Couldn't load leaderboard" : "ready" === sB.status ? "No scores yet" : "Loading leaderboard\u2026",
              zB = BB ? "Trying again shortly" : "ready" === sB.status ? "Be the first on the board!" : "Fetching the top players",
              QB = (208 + KB) / 2;
            SB(jB, 512, QB - 28, 40, BB ? nB.E.redUiText : LB, 960, "center"), SB(zB, 512, QB + 27, 30, gB, 960, "center")
          }
          const bB = KB + UB * xB / 2;
          if (null === AB) MB(bB);
          else {
            const jB = null === DB ? 0 : DB.tied - 1,
              zB = `YOUR RANK #${uB.format(AB)}${null===DB?"":` of ${uB.format(DB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const QB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(zB).width)));
            SB(zB, 512, bB - (jB > 0 ? 15 : 0), QB, tB, 960, "center"), jB > 0 && SB(`Tied with ${uB.format(jB)} other${1===jB?"":"s"}`, 512, bB + 24, 24, gB, 960, "center")
          }
          if (null === JB) return;
          const vB = CB + NB * xB / 2;
          if (HB) SB(`You're in the top ${QB.n}!`, 512, vB, 40, tB, 960, "center");
          else if (0 === oB.length) SB("You're not on this board yet", 512, vB, 34, gB, 960, "center");
          else
            for (const [QB, nB] of oB.entries()) cB(nB, XB[QB], CB + (QB + .5) * xB, QB % 2 === 0)
        }(BB, aB, pB, IB.layoutHeight)
    }

    function yB(BB, jB) {
      return Array.isArray(BB) ? BB.slice(0, jB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function kB(BB, jB) {
      const zB = [];
      let QB = !1;
      return BB.forEach(((nB, dB) => {
        if (null !== jB && nB.value === jB.value) return void zB.push(jB.rank);
        const IB = dB > 0 && nB.value === BB[dB - 1].value;
        IB || (QB = 0 === dB && 1 !== nB.rank), zB.push(IB && !QB ? zB[dB - 1] : nB.rank)
      })), zB
    }
  },
  38984: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      g: () => dB
    });
    const QB = 32;

    function nB(BB) {
      return Array.from(BB).length
    }

    function dB(BB) {
      const jB = [""];
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nB = "";
      const dB = () => {
        jB.push(""), zB = 0, nB = ""
      };
      for (const IB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(IB)) dB();
        else if (/^\s+$/.test(IB)) nB += IB;
      else if (IB.length > 0) {
        const BB = Array.from(IB);
        zB > 0 && zB + nB.length + BB.length > QB && dB(), jB[jB.length - 1] += nB, zB += nB.length, nB = "";
        for (const nB of BB) zB >= QB && dB(), jB[jB.length - 1] += nB, zB++
      }
      return jB[jB.length - 1] += nB, jB
    }
  },
  51135: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      WasmPreviewHost: () => fj,
      pageBuiltInAnimationPack: () => rB,
      pagePreviews: () => Ij,
      previewModule: () => vB
    });
    var QB = zB(2974),
      nB = zB(667);
    const dB = "[bloxd-wasm-client]";

    function IB(BB) {
      const jB = {
        wasm: "unknown",
        client: String(nB.b)
      };
      try {
        var zB;
        jB.wasm = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.tp()) && void 0 !== zB ? zB : jB.wasm
      } catch {}
      return jB
    }
    async function NB(BB) {
      if (BB.length < 2 || 31 !== BB[0] || 139 !== BB[1]) return BB;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: jB
        } = await Promise.resolve().then((() => zB(2929)));
        return jB(BB)
      }
      const jB = new Blob([BB]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(jB).arrayBuffer())
    }

    function uB(BB, jB, QB, nB) {
      Promise.resolve().then((() => zB(40830))).then((zB => {
        let {
          reportDataLoadFailure: dB
        } = zB;
        dB(BB, jB, QB, nB)
      }), (jB => {
        console.warn(`${dB} ${BB} didn't load, and the report couldn't be sent`, QB.error, jB)
      }))
    }
    const UB = [3e4, 12e4, 3e5];
    class aB {
      constructor(BB) {
        this.deps = BB, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((BB => {
          this.resolveSet = BB
        }))
      }
      provide(BB) {
        return this.loading ??= this.load(BB), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(BB) {
        const jB = IB(BB),
          zB = await async function(BB, jB) {
            let zB;
            try {
              zB = await BB()
            } catch (QB) {
              return {
                stage: "fetch",
                error: QB
              }
            }
            try {
              return jB(zB) ? null : {
                stage: "decode",
                error: null
              }
            } catch (QB) {
              return {
                stage: "decode",
                error: QB
              }
            }
          }((() => this.deps.fetch()), (jB => {
            const zB = BB.UdB(jB);
            return zB && this.resolveSet(jB), zB
          }));
        if (null !== zB) {
          if ("fetch" === zB.stage) {
            this.loading = null;
            const jB = UB[this.retries++];
            void 0 !== jB && this.deps.later((() => {
              this.provide(BB)
            }), jB)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(zB, jB))
        }
      }
    }
    let pB = null;

    function rB() {
      return pB ??= new aB({
        fetch: async () => NB(await (0, QB.L)(sB(), {
          priority: "low"
        })),
        onFailed: (BB, jB) => {
          uB("builtInAnimations", sB(), BB, jB)
        },
        later: (BB, jB) => {
          setTimeout(BB, jB)
        }
      }), pB
    }

    function sB() {
      return zB(51139)
    }
    var JB = zB(2967),
      mB = zB(1244),
      yB = zB(355),
      kB = zB(348),
      GB = zB(690),
      LB = zB(4887),
      gB = zB(40805),
      tB = zB(40824),
      SB = zB(41019),
      MB = (zB(40856), zB(40872)),
      EB = zB(40881),
      iB = zB(40883),
      qB = zB(40822),
      fB = zB(41038),
      oB = zB(41044),
      HB = zB(40796),
      DB = zB(41054),
      FB = zB(40925),
      YB = zB(40909),
      VB = zB(40963),
      hB = zB(41028),
      XB = zB(42725),
      ZB = zB(36347),
      AB = zB(3814);
    const TB = "[bloxd-previews]",
      PB = 4e5,
      WB = 0,
      eB = 1,
      lB = 2,
      wB = 1,
      xB = 2,
      KB = 3,
      CB = 0,
      cB = 1,
      bB = 2;

    function vB(BB) {
      const jB = BB,
        zB = (0, gB.S)(BB),
        QB = (0, gB.q)(BB);
      return null !== zB && null !== QB && "function" === typeof jB.IdB && "function" === typeof jB.NdB && "function" === typeof jB.udB ? jB : null
    }

    function RB(BB, jB, zB) {
      let [QB, nB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, jB], dB = Math.min(Number.isFinite(zB) && zB > 0 ? zB : 1, 2);
      const IB = Math.max(0, QB, BB) * Math.max(0, nB, jB) * dB * dB;
      return IB > PB && (dB *= Math.sqrt(PB / IB)), [Math.max(1, Math.floor(Math.max(0, BB) * dB)), Math.max(1, Math.floor(Math.max(0, jB) * dB))]
    }

    function OB() {
      return zB(51143)
    }
    async function Bj(BB, jB, QB) {
      var nB;
      let dB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === BB && (0, HB.y)();
      const NB = await (0, HB.M)();
      if (null === NB || (0, gB.r)(NB) || (0, HB.d)()) return;
      const uB = "webgpu" === NB.backend;
      if (!uB && "lost" !== BB) return;
      const UB = uB && (0, kB.r)(NB.adapter, null !== QB && void 0 !== QB ? QB : null, "lost" === BB, dB),
        aB = null !== (nB = "lost" === BB ? (0, tB.m)((0, JB.K)() ? (0, gB.S)((0, JB.C)()) : null) : void 0) && void 0 !== nB ? nB : jB,
        pB = uB ? (0, gB.db)(BB, void 0, (0, tB.d)(aB)) : null;
      if (null === pB) {
        uB || (0, GB.r)(), (0, HB.s)();
        try {
          await async function(BB, jB, QB, nB, dB) {
            let {
              restoreLost: NB,
              adapterRemembered: uB
            } = dB;
            const UB = (0, JB.K)(),
              {
                flushCrashReports: aB,
                reportRenderReload: pB
              } = await Promise.resolve().then((() => zB(40830)));
            pB(BB.backend, nB, IB(UB ? (0, JB.C)() : null), {
              from: "home",
              cause: jB,
              restoreLost: NB,
              adapterRemembered: uB,
              ...jj(BB, jB, QB)
            }), await aB(FB.d)
          }(NB, BB, aB, null !== QB && void 0 !== QB ? QB : "start_failed" === BB ? 0 : 1, {
            restoreLost: dB,
            adapterRemembered: UB
          })
        } catch (sB) {
          console.warn(`${TB} ${NB.backend} failed at home (${BB}), and its report couldn't be sent`, sB)
        }(0, FB.k)()
      } else {
        var rB;
        const jB = jj(NB, BB, aB),
          QB = `WebGPU failed at home (${BB}${void 0===jB.error?"":`: ${jB.error instanceof Error?jB.error.message:(0,ZB.m)(jB.error)}`}) and ${pB}`;
        console.warn(`${TB} ${QB}: the previews stop`, null !== (rB = jB.error) && void 0 !== rB ? rB : ""), (0, HB.t)(QB);
        try {
          const {
            countRenderLost: QB
          } = await Promise.resolve().then((() => zB(40830)));
          QB(BB, jB.error, jB.context)
        } catch (mB) {
          console.warn(`${TB} WebGPU failed at home (${BB}), and its count couldn't be sent`, mB)
        }
      }
    }

    function jj(BB, jB, zB) {
      let {
        adapter: QB
      } = BB;
      return {
        error: zB,
        context: {
          adapter: QB,
          boundAtMs: "start_failed" === jB ? null : (0, HB.H)(),
          indirectHangs: (0, HB.B)(),
          restoresSkipped: (0, HB.I)()
        }
      }
    }
    async function zj() {
      if (!(0, JB.K)()) {
        const BB = await (0, HB.M)();
        if (null === BB || (0, gB.r)(BB)) return null;
        if (await (0, DB.b)(await BB.load()), !(0, JB.K)()) return null
      }
      return vB((0, JB.C)())
    }
    class Qj {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.page = BB, this.host = jB, this.id = zB, this.canvas = QB, this.size = nB, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const IB = {
            ...dB.images,
            glbUrl: BB => {
              var jB;
              return null !== (jB = this.models.drawnUrl(BB)) && void 0 !== jB ? jB : dB.images.glbUrl(BB)
            }
          },
          NB = jB => BB.modelFile(jB);
        this.images = new SB.d(IB, (BB => {
          console.warn(`${TB} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
        }), {
          fetchFile: NB,
          fetchImage: jB => BB.imageFile(jB)
        }), BB.startModels(), this.models = new MB.i(dB.files, ((jB, zB) => BB.buildModel(jB, zB)), (BB => {
          console.warn(`${TB} model file ${BB.file} (${BB.url}) failed`, BB.error)
        }), {
          fetchFile: NB,
          onWritten: (BB, jB) => {
            this.images.glbWritten(BB, jB)
          },
          onTaken: (BB, jB) => {
            this.images.glbTaken(BB, jB)
          }
        }), this.write = (BB, jB, zB) => {
          if (this.closed) return !0;
          if (BB === MB.e) {
            const BB = new DataView(zB.buffer, zB.byteOffset, iB.c),
              QB = BB.getUint32(0, !0),
              nB = BB.getUint32(iB.g, !0),
              dB = this.page.hostCall(bB, (() => this.host.JIB(this.id, QB, jB, zB.subarray(iB.c))));
            return this.outcomes.push([nB, dB]), !0
          }
          return BB === SB.c && (this.page.hostCall(void 0, (() => {
            this.host.yIB(this.id, zB)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(BB, jB, zB) {
        if (this.closed) return;
        const [QB, nB] = RB(BB, jB, this.page.dpr(), zB);
        QB === this.size[0] && nB === this.size[1] || (this.size = [QB, nB], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, QB, nB)
        })))
      }
      setMob(BB, jB, zB, QB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.SIB(this.id, BB, jB, zB, QB))))
      }
      setPet(BB, jB, zB, QB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.iIB(this.id, BB, jB, zB, QB))))
      }
      setPlayer(BB, jB, zB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.LIB(this.id, BB, jB, zB))))
      }
      setFigure(BB, jB, zB, QB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.gIB(this.id, BB, jB, zB, QB))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const BB = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === BB || BB.length < 3 ? null : {
          alpha: BB[0],
          beta: BB[1],
          radius: BB[2]
        }
      }
      setOrbit(BB) {
        let {
          alpha: jB,
          beta: zB,
          radius: QB
        } = BB;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.EIB(this.id, jB, zB, QB)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((BB => {
          this.settled.push(BB)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, fB.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [BB, jB] of this.outcomes) {
          const zB = jB === CB ? [] : [jB === cB ? BB : (BB | MB.h) >>> 0];
          this.models.taken(BB, zB)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(BB) {
        let jB = !1;
        if (BB) {
          const BB = this.host.oIB(this.id);
          for (const jB of BB) this.models.request(jB);
          const zB = this.host.fIB(this.id);
          zB.length > 0 && this.images.onEvent(zB), jB = BB.length > 0 || zB.length > 0
        }
        const zB = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          QB = jB || zB > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = QB ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(BB) {
        this.page.hostCall(void 0, (() => {
          const jB = this.host.close(this.id);
          jB.length > 0 && this.images.onEvent(jB), this.page.isTrapped || BB.udB(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const BB = this.settled;
        this.settled = [];
        for (const jB of BB) jB()
      }
    }
    class nj {
      constructor(BB) {
        this.deps = BB, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: BB => {
            this.modelsFailed(BB)
          },
          onDecoderFailed: BB => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${TB} the Draco decoder didn't load: models waiting on it won't draw`, BB))
          },
          onWorkerLost: BB => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${TB} a model worker was lost: ${BB}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.mJ = {
          setShaderPack: (BB, jB, zB, QB, nB) => (this.shaderPackArgs = [BB, jB, zB, QB, nB], this.handOverShaderPack(), !0)
        }, this.frame = BB => {
          this.frameId = null;
          const jB = this.host;
          if (null !== jB && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(jB, BB)
          } catch (zB) {
            if (!this.stopIfTrapped(zB) && (this.stop(), (0, gB.u)(zB))) return void this.deps.onRenderFailed("frames_refused", zB);
            console.warn(`${TB} the previews stopped: their frame threw`, zB)
          }
        }, BB.pack.onChange((() => {
          this.packChanged()
        })), BB.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const BB of this.previews.values()) BB.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var BB, jB;
        return null !== (BB = null === (jB = this.host) || void 0 === jB ? void 0 : jB.attached()) && void 0 !== BB && BB
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((BB, jB) => BB + jB), 0) / this.costs.length
      }
      async bindSession(BB, jB, zB) {
        const QB = this.binding,
          nB = this.sessionEnds;
        try {
          const dB = this.hostOf(BB);
          if (!dB.mIB()) {
            const jB = (0, VB.g)().sampleCount,
              IB = await zB(jB);
            if (this.sessionEnds !== nB) return this.keepRendererOfEndedSession(BB, dB, IB, jB, QB), jB;
            if (!dB.OdB(IB)) throw new Error("the page has a renderer already");
            (0, HB.x)(performance.now()), this.samples = jB, (0, hB.f)((0, gB.q)(BB))
          }
          if (!dB.attach(jB)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === QB && this.endBinding()
        }
      }
      keepRendererOfEndedSession(BB, jB, zB, QB, nB) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== nB) try {
          zB.free()
        } catch (dB) {
          console.warn(`${TB} an ended session's renderer didn't free`, dB)
        } else jB.OdB(zB) && ((0, HB.x)(performance.now()), this.samples = QB, (0, hB.f)(this.registryOf(BB)))
      }
      async beginSession() {
        var BB;
        let jB = () => {};
        const zB = new Promise((BB => {
          jB = BB
        }));
        this.binding = {
          done: zB,
          release: jB
        }, await (null === (BB = this.opening) || void 0 === BB ? void 0 : BB.catch((() => null)));
        const QB = this.pageCanvas;
        return this.pageCanvas = null, QB
      }
      endSession(BB) {
        var jB, zB;
        if (this.sessionEnds++, this.lastEndReturned = BB, this.endBinding(), BB) {
          try {
            var QB;
            null === (QB = this.host) || void 0 === QB || QB.detach()
          } catch (nB) {
            return void console.warn(`${TB} the session's core kept the page's renderer`, nB)
          }!0 === (null === (jB = this.host) || void 0 === jB ? void 0 : jB.attached()) && console.warn(`${TB} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (zB = this.host) || void 0 === zB ? void 0 : zB.mIB()) && (0, hB.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var BB;
        null === (BB = this.binding) || void 0 === BB || BB.release(), this.binding = null
      }
      async openPreview(BB, jB, zB, QB) {
        const nB = await this.renderingHost(),
          dB = this.module;
        if (null === nB || null === dB) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(nB), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(dB)
        }));
        const IB = this.nextId++,
          NB = this.deps.createCanvas(),
          [uB, UB] = RB(jB, zB, this.deps.dpr(), QB);
        NB.width = uB, NB.height = UB;
        if (!this.guarded((() => (dB.NdB(IB, NB), nB.open(IB, uB, UB, BB))))) throw this.hostCall(void 0, (() => {
          dB.udB(IB)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const aB = new Qj(this, nB, IB, NB, [uB, UB], this.deps);
        return this.previews.set(IB, aB), this.startFrames(), aB
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, HB.d)() || null !== (0, HB.G)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((BB => {
          null === BB || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(BB) {
        return this.prefetchedOr(BB, this.deps.fetchModel)
      }
      imageFile(BB) {
        return this.prefetchedOr(BB, QB.L)
      }
      prefetchedOr(BB, jB) {
        const zB = this.prefetchedFiles.get(BB);
        return void 0 === zB ? jB(BB) : zB.catch((() => jB(BB)))
      }
      async prefetchPlayerFiles() {
        const BB = this.deps.playerFile().then((BB => this.deps.files.url(BB))),
          jB = await Promise.all([BB, this.deps.images.lifeformAtlasUrl(fB.e)]).catch((() => null));
        if (null === jB) return;
        const [zB, QB] = jB, nB = (BB, jB) => {
          if (null === BB) return;
          const zB = jB(BB);
          this.prefetchedFiles.set(BB, zB), zB.catch((() => {
            this.prefetchedFiles.delete(BB)
          }))
        };
        nB(zB, (BB => this.modelFile(BB))), nB(QB, (BB => this.imageFile(BB)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((BB => (null === BB && (this.moduleLoad = null), BB)), (BB => {
          throw this.moduleLoad = null, BB
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((BB => {
          throw this.animationTable = null, BB
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((BB => (this.modelsFailed(BB), () => new Promise((() => {})))))
      }
      buildModel(BB, jB) {
        return this.startModels(), this.models.then((zB => zB(BB, jB))).then((BB => this.unavailable ? new Promise((() => {})) : BB))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(BB) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${TB} the model workers didn't start: models won't draw in the previews`, BB))
      }
      called(BB) {
        return 0 !== BB && this.logError(BB, 0), BB
      }
      closePreview(BB) {
        this.previews.delete(BB.id), null !== this.module && BB.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(BB) {
        if (null !== this.module && this.module !== BB) throw new Error("a second renderer module on one page");
        return this.module = BB, null === this.host && (this.host = this.guarded((() => new BB.IdB)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: BB
        } = this;
        null !== BB && this.outsideCall("the game's start or end", (() => {
          BB.tIB(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: BB,
          shaderPackArgs: jB
        } = this;
        null !== BB && null !== jB && this.outsideCall("the shader pack's hand-over", (() => {
          BB.NQB(...jB) || console.warn(`${TB} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(BB, jB) {
        try {
          this.hostCall(void 0, jB)
        } catch (zB) {
          this.stop(), console.warn(`${TB} the previews stopped: ${BB} threw`, zB)
        }
      }
      async loadAnimations(BB) {
        const jB = IB(null),
          zB = this.module;
        try {
          jB.wasm = null === zB ? jB.wasm : this.hostCall(jB.wasm, (() => zB.tp()))
        } catch {}
        let QB, nB;
        try {
          QB = await this.fetchAnimationTable()
        } catch (dB) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: dB
          }, jB)
        }
        if (!this.settleIfTrapped()) {
          try {
            nB = BB.kIB(QB)
          } catch (dB) {
            if (this.stopIfTrapped(dB)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: dB
            }, jB)
          }
          nB || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, jB)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const BB = this.host;
        return null !== BB && this.guarded((() => BB.mIB())) ? BB : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var BB;
        const jB = null !== (BB = this.module) && void 0 !== BB ? BB : await this.loadModule();
        if (null === jB) return null;
        const zB = this.hostOf(jB),
          QB = () => this.guarded((() => zB.mIB()));
        if (QB()) return zB;
        if (null !== (0, HB.G)() || (0, HB.d)()) return null;
        const nB = this.deps.createCanvas();
        nB.width = 1, nB.height = 1;
        const dB = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const IB = (0, VB.g)().sampleCount;
        let NB;
        try {
          NB = await (0, gB.A)(jB, "previewRenderer", nB, IB, XB.d, dB)
        } catch (uB) {
          throw uB instanceof qB.c ? this.stopForTrap(uB) : (0, gB.y)(uB) && await this.deps.onRenderFailed("start_failed", uB), uB
        }
        return this.guarded((() => zB.OdB(NB))) ? ((0, HB.x)(performance.now()), this.samples = IB, this.pageCanvas = nB, (0, hB.f)(this.registryOf(jB)), zB) : QB() ? zB : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(BB, jB) {
        for (const IB of this.previews.values()) IB.feed();
        if (this.stopped) return;
        const zB = this.deps.now(),
          QB = BB.frame(jB);
        this.costs.push(this.deps.now() - zB), this.costs.length > 120 && this.costs.shift();
        const nB = 0 !== (256 & QB),
          dB = 255 & QB;
        for (const IB of this.previews.values()) {
          if (this.stopped) return;
          IB.collect(nB)
        }
        if (!this.stopped) {
          if (0 !== (512 & QB) && this.deps.onDrew(), nB) {
            const jB = BB.qIB();
            for (let BB = 0; BB + 1 < jB.length; BB += 2) jB[BB] === LB.J.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(jB[BB], jB[BB + 1])
          }
          if (dB !== wB) {
            if (dB === xB) return this.stop(), void this.deps.onFatal(BB.pIB(), BB.rIB());
            if (dB === KB) return this.stop(), void console.warn(`${TB} the previews stopped: the page's renderer went with its session`);
            (0, yB.e)(jB), this.startFrames()
          } else {
            const jB = BB.sIB();
            this.stop();
            const zB = jB[2] === LB.Tc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(zB, void 0, jB[1], jB[2] === LB.Tc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, qB.h)(this.module) || "failed" === (0, JB.z)())
      }
      hostCall(BB, jB) {
        if (this.settleIfTrapped()) return BB;
        try {
          return jB()
        } catch (zB) {
          if (this.stopIfTrapped(zB)) return BB;
          throw zB
        }
      }
      guarded(BB) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return BB()
        } catch (jB) {
          throw this.stopIfTrapped(jB), jB
        }
      }
      registryOf(BB) {
        return {
          KzB: (jB, zB) => {
            this.hostCall(void 0, (() => {
              BB.KzB(jB, zB)
            }))
          },
          CzB: jB => {
            this.hostCall(void 0, (() => {
              BB.CzB(jB)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, hB.f)(null)), !0)
      }
      stopIfTrapped(BB) {
        return !(null === this.module || !(0, qB.j)(this.module, BB)) && (this.stopForTrap(BB), !0)
      }
      stopForTrap(BB) {
        this.stop(), (0, hB.f)(null), (0, AB.f)("previews", BB)
      }
      stop() {
        this.stopped = !0;
        for (const BB of this.previews.values()) BB.abandon()
      }
      logError(BB, jB) {
        const zB = `${BB}:${jB}`;
        this.loggedErrors.has(zB) || (this.loggedErrors.add(zB), console.warn(`${TB} error ${BB} (detail ${jB})`))
      }
    }
    let dj = null;

    function Ij() {
      return dj ??= new nj(function() {
        const BB = (0, EB.q)(mB.clientSideServerUrls.staticUrl, {
          packUrl: BB => {
            var jB, zB;
            return null !== (jB = null === (zB = fB.h.current) || void 0 === zB ? void 0 : zB.modelUrl(BB)) && void 0 !== jB ? jB : null
          }
        });
        return {
          loadModule: zj,
          startModels: async BB => {
            const {
              pageModelPool: jB
            } = await zB.e(43).then((() => zB(51202))), {
              pool: QB
            } = jB(BB);
            return (BB, jB) => QB.build(BB, jB)
          },
          fetchAnimations: async () => NB(await (0, QB.L)(OB())),
          playerFile: async () => (await (0, EB.p)()).PLAYER_FILE,
          onAnimationsFailed: (BB, jB) => {
            uB("previewAnimations", OB(), BB, jB)
          },
          provideBuiltInAnimationPack: BB => {
            rB().provide(BB)
          },
          openExtras: HB.C,
          files: BB,
          images: (0, fB.m)((0, SB.k)(BB.url), (() => fB.h.current)),
          pack: fB.h,
          game: oB.c,
          fetchModel: BB => (0, EB.j)(BB),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: BB => requestAnimationFrame(BB),
          cancelFrame: BB => {
            cancelAnimationFrame(BB)
          },
          onRenderFailed: Bj,
          onFatal: (BB, jB) => {
            console.error(`${TB} the previews stopped: renderer error ${BB} (detail ${jB})`)
          },
          onDeviceLost: () => {
            (0, HB.D)() === YB.c.webgpu && ((0, tB.h)((0, JB.K)() ? (0, gB.S)((0, JB.C)()) : null), kB.G.lost())
          },
          onDrew: () => {
            kB.G.drew()
          }
        }
      }()), dj
    }
    var Nj = zB(644),
      uj = zB(38738),
      Uj = zB(3402);
    const aj = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      mobIdle: 9,
      caveGolem: 10,
      magmaGolem: 11,
      frostWraith: 12,
      tikiTerror: 13,
      gunReady: 14,
      gunAimed: 15
    };
    const pj = "[bloxd-previews]",
      rj = new Uint32Array(5);

    function sj(BB) {
      return Nj.i.indexOf(BB)
    }
    const Jj = new WeakSet;

    function mj(BB) {
      const jB = (0, uj.e)(BB),
        zB = null === jB ? -1 : yj(jB);
      return -1 !== zB ? zB : (Jj.has(BB) || (Jj.add(BB), console.warn(`${pj} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function yj(BB) {
      var jB;
      return null !== (jB = aj[BB]) && void 0 !== jB ? jB : -1
    }

    function kj(BB, jB) {
      const {
        canvas: zB
      } = jB;
      zB.style.width = "100%", zB.style.height = "100%", zB.style.display = "block", BB.appendChild(zB)
    }

    function Gj(BB) {
      const jB = BB.getBoundingClientRect();
      return [jB.width, jB.height]
    }
    class Lj {
      constructor(BB, jB) {
        this.preview = BB, this.showView = jB
      }
      show(BB) {
        this.showView(this.preview, BB)
      }
      resize(BB, jB) {
        this.preview.resize(BB, jB)
      }
      close() {
        this.preview.close()
      }
    }
    class gj {
      constructor(BB) {
        this.preview = BB, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(BB) {
          const {
            canvas: jB
          } = BB;
          let zB = null;
          const QB = BB => {
              var QB;
              zB = {
                pointer: BB.pointerId,
                x: BB.clientX,
                y: BB.clientY
              }, null === (QB = jB.setPointerCapture) || void 0 === QB || QB.call(jB, BB.pointerId)
            },
            nB = jB => {
              var QB;
              const nB = BB.orbit;
              if ((null === (QB = zB) || void 0 === QB ? void 0 : QB.pointer) !== jB.pointerId || null === nB) return;
              const dB = jB.clientX - zB.x,
                IB = jB.clientY - zB.y;
              zB = {
                ...zB,
                x: jB.clientX,
                y: jB.clientY
              }, BB.setOrbit({
                alpha: nB.alpha - .01 * dB,
                beta: Math.min(Math.PI - .01, Math.max(.01, nB.beta - .01 * IB)),
                radius: nB.radius
              })
            },
            dB = BB => {
              var jB;
              (null === (jB = zB) || void 0 === jB ? void 0 : jB.pointer) === BB.pointerId && (zB = null)
            },
            IB = jB => {
              const zB = BB.orbit;
              if (null === zB) return;
              jB.preventDefault();
              const QB = jB.deltaY * (jB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : jB.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                nB = Math.min(100, Math.max(5, zB.radius + .08 * QB));
              BB.setOrbit({
                ...zB,
                radius: nB
              })
            };
          return jB.style.touchAction = "none", jB.addEventListener("pointerdown", QB), jB.addEventListener("pointermove", nB), jB.addEventListener("pointerup", dB), jB.addEventListener("pointercancel", dB), jB.addEventListener("wheel", IB, {
            passive: !1
          }), () => {
            jB.removeEventListener("pointerdown", QB), jB.removeEventListener("pointermove", nB), jB.removeEventListener("pointerup", dB), jB.removeEventListener("pointercancel", dB), jB.removeEventListener("wheel", IB)
          }
        }(BB), this.dev = {
          canvas: () => BB.canvas,
          isolateHead: () => {
            console.warn(`${pj} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = BB.untilSettled().then((() => {
          if (BB.isStopped) throw new Error(`${pj} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(BB, jB) {
        this.cosmetics[BB] = jB, this.apply()
      }
      playEmote(BB) {
        null === BB || BB !== this.emote ? (this.emote = BB, this.apply()) : this.preview.replay()
      }
      untilDrawn(BB) {
        return this.preview.untilSettled()
      }
      setOrbit(BB) {
        let {
          yaw: jB,
          pitch: zB,
          radius: QB
        } = BB;
        const nB = this.preview.orbit;
        null !== nB && this.preview.setOrbit({
          alpha: jB,
          beta: zB,
          radius: null !== QB && void 0 !== QB ? QB : nB.radius
        })
      }
      resetCamera() {}
      resize(BB, jB) {
        this.preview.resize(BB, jB)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var BB;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), rj, null === (BB = this.emote) ? -1 : yj(BB))
      }
    }

    function tj(BB, jB) {
      let {
        mobType: zB,
        variation: QB,
        animation: nB
      } = jB;
      BB.setMob(sj(zB), null !== QB && void 0 !== QB ? QB : "", 1, mj(nB))
    }

    function Sj(BB, jB) {
      let {
        mobType: zB,
        variation: QB,
        metaInfo: nB,
        tamed: dB
      } = jB;
      BB.setPet(sj(zB), QB, nB, dB)
    }
    const Mj = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Ej {
      constructor(BB, jB, zB, QB) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, BB(zB.width, QB[1], QB).then((BB => {
          if (this.closed) return void BB.close();
          const {
            style: zB
          } = BB.canvas;
          zB.position = "absolute", zB.top = "0", zB.visibility = "hidden", kj(jB, BB), this.preview = BB, this.apply()
        })).catch((BB => {
          console.error(`${pj} couldn't open a lineup figure`, BB)
        }))
      }
      update(BB, jB, zB, QB, nB) {
        this.figure = BB, this.shown = jB, this.order = zB, this.span = QB, this.lineup = nB, this.apply()
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.preview) || void 0 === BB || BB.close(), this.preview = null
      }
      apply() {
        const {
          preview: BB,
          figure: jB,
          lineup: zB
        } = this;
        if (null === BB || null === jB) return;
        if (this.given !== jB) {
          var QB;
          this.given = jB, this.loaded = !1;
          const zB = null === jB.kS ? 0 : null !== (QB = (0, Uj.c)(jB.kS)) && void 0 !== QB ? QB : 0;
          BB.setFigure(function(BB) {
            return JSON.stringify(Object.fromEntries(BB.cosmetics))
          }(jB), zB, mj(jB.animation), jB.size), BB.untilSettled().then((() => {
            this.given === jB && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: nB,
          width: dB
        } = this.span;
        BB.resize(dB, zB[1], zB);
        const {
          style: IB
        } = BB.canvas;
        IB.left = `${nB}px`, IB.width = `${dB}px`, IB.zIndex = this.order, IB.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class ij {
      constructor(BB, jB) {
        this.open = jB, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Gj(BB), this.layer = document.createElement("div");
        const {
          style: zB
        } = this.layer;
        zB.position = "relative", zB.isolation = "isolate", zB.overflow = "hidden", zB.width = "100%", zB.height = "100%", zB.pointerEvents = "none", BB.appendChild(this.layer)
      }
      show(BB) {
        this.view = BB, this.place()
      }
      resize(BB, jB) {
        this.size = [BB, jB], this.place()
      }
      close() {
        for (const BB of this.figures) BB.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: BB,
          shown: jB
        } = this.view;
        for (const QB of this.figures.splice(BB.length)) QB.close();
        const {
          size: zB
        } = this;
        BB.forEach(((QB, nB) => {
          var dB;
          const IB = function(BB, jB, zB, QB) {
            let [nB, dB] = QB;
            const IB = (BB + .5) * nB / jB,
              NB = Math.min(Math.max(nB / jB, 2 * zB * dB), 2 * Math.max(IB, nB - IB));
            return {
              left: IB - NB / 2,
              width: NB
            }
          }(nB, BB.length, function(BB) {
            let {
              animation: jB,
              size: zB
            } = BB;
            const {
              aimed: QB,
              ready: nB
            } = Mj;
            return (mj(jB) === aj.gunAimed ? QB : nB) * zB
          }(QB), zB);
          this.figures[nB] ??= new Ej(this.open, this.layer, IB, zB), this.figures[nB].update(QB, null !== (dB = jB[nB]) && void 0 !== dB && dB, function(BB, jB) {
            return String(Math.round(1e3 * BB) + jB)
          }(QB.size, nB), IB, zB)
        }))
      }
    }
    const qj = {
      player: eB,
      store: lB
    };
    class fj {
      constructor(BB) {
        this.page = BB
      }
      async openMob(BB) {
        return new Lj(await this.open(BB, WB), tj)
      }
      async openPet(BB) {
        return new Lj(await this.open(BB, WB), Sj)
      }
      openMobLineup(BB) {
        return new ij(BB, ((BB, jB, zB) => this.page.openPreview(WB, BB, jB, zB)))
      }
      async openCharacter(BB, jB) {
        return new gj(await this.open(BB, qj[jB]))
      }
      async open(BB, jB) {
        const [zB, QB] = Gj(BB), nB = await this.page.openPreview(jB, zB, QB);
        return kj(BB, nB), nB
      }
    }
  },
  36823: (BB, jB, zB) => {
    zB.d(jB, {
      D: () => mB,
      F: () => kB,
      e: () => QB,
      h: () => nB,
      i: () => rB,
      m: () => yB,
      n: () => aB,
      r: () => GB,
      t: () => uB,
      x: () => UB,
      y: () => sB,
      z: () => JB
    });
    const QB = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function nB(BB, jB) {
      const {
        numLines: zB,
        charsPerLine: nB
      } = QB[jB];
      return LB(BB, zB, nB, !1)
    }
    const dB = 7 / 8,
      IB = .25,
      NB = 8;

    function uB(BB, jB) {
      return {
        width: Math.min(BB, NB) - 2 * IB,
        height: Math.min(jB, NB) - 2 * IB
      }
    }

    function UB(BB, jB, zB) {
      const nB = uB(BB, jB),
        {
          numLines: IB,
          charsPerLine: NB
        } = QB[zB];
      return {
        numLines: Math.max(1, Math.floor(IB / dB * nB.height)),
        charsPerLine: Math.max(1, Math.floor(NB * nB.width))
      }
    }

    function aB(BB, jB, zB, QB) {
      const {
        numLines: nB,
        charsPerLine: dB
      } = UB(zB, QB, jB);
      return LB(BB, nB, dB, !1)
    }
    const pB = 32e3;

    function rB(BB) {
      return BB.slice(0, pB)
    }
    const sB = 512e3,
      JB = 64,
      mB = sB;

    function yB(BB, jB) {
      const zB = Math.max(0, mB - jB),
        QB = Math.min(sB, zB);
      return BB.slice(0, QB)
    }
    const kB = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      zN: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function GB(BB, jB) {
      const {
        numLines: zB,
        charsPerLine: QB
      } = kB[jB];
      return LB(BB, zB, QB, !1)
    }

    function LB(BB, jB, zB, QB, nB) {
      (nB || QB) && (BB = BB.slice(0, null !== nB && void 0 !== nB ? nB : jB * zB));
      const dB = BB.split("\n");
      if (dB.length > jB && dB.splice(jB, dB.length - jB), !QB)
        for (let IB = 0; IB < dB.length; IB++) {
          const BB = dB[IB];
          BB.length > zB && (dB[IB] = BB.substring(0, zB), dB.length < jB && dB.splice(IB + 1, 0, BB.substring(zB)))
        }
      return dB.join("\n")
    }
  },
  51139: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51143: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);