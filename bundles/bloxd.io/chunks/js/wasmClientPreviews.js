export const id = 59;
export const ids = [59];
export const modules = {
  38644: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => XS
    });
    const tS = new WeakMap;

    function bS(SS, HS) {
      return tS.set(SS, HS), SS
    }

    function XS(SS) {
      var HS;
      return null !== (HS = tS.get(SS)) && void 0 !== HS ? HS : null
    }
  },
  38672: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS
    });
    var tS = gS(1309);

    function bS(SS) {
      const HS = /(\d*\.?\d+)px/.exec(SS);
      return HS ? Number(HS[1]) : null
    }

    function XS(SS) {
      return SS.split(/[\s,]+/).pop()
    }
    let xS = !1;
    const NS = {
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
      drawText: function(SS, HS, tS, NS, qS, uS) {
        if (qS <= 0 || uS <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: IS,
          fontVariant: fS,
          fontWeight: kS,
          fontSize: aS,
          font: KS
        } = this, jS = [IS, fS, kS, `${aS}px`, KS].filter(Boolean).join(" "), GS = [
          [kS, `${aS}px`, XS(KS)].filter(Boolean).join(" "), `${aS}px sans-serif`
        ], CS = SS.font, nS = function(SS, HS, gS) {
          for (const tS of HS) {
            SS.font = tS;
            const HS = bS(SS.font),
              xS = XS(tS);
            if (null !== HS && Math.abs(HS - gS) <= .5 && SS.font.toLowerCase().includes(xS.toLowerCase())) return tS
          }
          return null
        }(SS, [jS, ...GS], aS);
        nS !== jS && function(SS, HS, tS) {
          xS || (xS = !0, Promise.resolve().then((() => gS(1149))).then((gS => {
            let {
              Zj: bS
            } = gS;
            bS(new Error("A canvas didn't take canvasTxt's font"), {
              font: SS,
              ia: HS,
              drawnWith: null !== tS && void 0 !== tS ? tS : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(jS, CS, nS);
        const PS = bS(SS.font);
        if (null === nS && null !== PS && PS > 0) {
          const gS = aS / PS;
          SS.save();
          try {
            return SS.scale(gS, gS), {
              height: this.drawLines(SS, HS, tS / gS, NS / gS, qS / gS, uS / gS, PS).height * gS
            }
          } finally {
            SS.restore()
          }
        }
        return this.drawLines(SS, HS, tS, NS, qS, uS, aS)
      },
      drawLines: function(SS, HS, gS, bS, XS, xS, NS) {
        const qS = gS + XS,
          uS = bS + xS;
        let IS, fS = bS + xS / 2 + NS / 2;
        "right" === this.align ? (IS = qS, SS.textAlign = "right") : "left" === this.align ? (IS = gS, SS.textAlign = "left") : (IS = gS + XS / 2, SS.textAlign = "center");
        for (const tS of HS) {
          SS.measureText(tS).width >= XS && (HS = HS.replace(tS, ""))
        }
        HS = (0, tS.U)(HS);
        const kS = [],
          aS = HS.split("\n"),
          KS = this.justify ? SS.measureText("\u200a").width : 0;
        aS.forEach((HS => {
          let gS = SS.measureText(HS).width;
          if (gS <= XS) kS.push(HS);
          else {
            let tS = HS;
            const bS = XS;
            let xS, NS, qS;
            for (gS = SS.measureText(tS).width; gS > bS;) {
              for (xS = 0, NS = 0, qS = ""; NS < bS;) xS++, qS = tS.substr(0, xS), NS = SS.measureText(qS).width;
              xS--, qS = qS.substr(0, xS);
              const HS = xS;
              if (" " !== tS.substr(xS, 1)) {
                for (;
                  " " !== tS.substr(xS, 1) && 0 !== xS;) xS--;
                0 === xS && (xS = HS), qS = tS.substr(0, xS)
              }
              qS = this.justify ? this.justifyLine(SS, qS, KS, "\u200a", XS) : qS, tS = tS.substr(xS), gS = SS.measureText(tS).width, kS.push(qS)
            }
            gS > 0 && kS.push(tS)
          }
        }));
        const jS = this.lineHeight ? this.lineHeight : this.getTextHeight(SS, HS),
          GS = jS * (kS.length - 1),
          CS = GS / 2;
        let nS = bS;
        "top" === this.vAlign ? fS = bS + NS : "bottom" === this.vAlign ? (fS = uS - GS, nS = uS) : (nS = bS + xS / 2, fS -= CS), kS.forEach((HS => {
          HS = HS.trim(), SS.fillText(HS, IS, fS), fS += jS
        })), this.debug && (SS.lineWidth = 3, SS.strokeStyle = "#00909e", SS.strokeRect(gS, bS, XS, xS), SS.lineWidth = 2, SS.strokeStyle = "#f6d743", SS.beginPath(), SS.moveTo(IS, bS), SS.lineTo(IS, uS), SS.stroke(), SS.strokeStyle = "#ff6363", SS.beginPath(), SS.moveTo(gS, nS), SS.lineTo(qS, nS), SS.stroke());
        return {
          height: GS + jS
        }
      },
      getTextHeight: function(SS, HS) {
        const gS = SS.textBaseline;
        SS.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: tS
        } = SS.measureText(HS);
        return SS.textBaseline = gS, tS
      },
      justifyLine: function(SS, HS, gS, tS, bS) {
        const XS = HS.trim(),
          xS = SS.measureText(XS).width,
          NS = XS.split(/\s+/).length - 1,
          qS = Math.floor((bS - xS) / gS);
        if (NS <= 0 || qS <= 0) return XS;
        const uS = Math.floor(qS / NS);
        let IS = qS - NS * uS,
          fS = [];
        for (let kS = 0; kS < uS; kS++) fS.push(tS);
        fS = fS.join("");
        return XS.replace(/\s+/g, (SS => {
          const HS = IS > 0 ? fS + tS : fS;
          return IS--, SS + HS
        }))
      }
    }
  },
  38676: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jS,
      f: () => KS,
      i: () => kS,
      m: () => IS,
      o: () => fS
    });
    var tS = gS(4356),
      bS = gS(387);
    const XS = 1024,
      xS = 1536,
      NS = 2 * tS.l + 1,
      qS = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      uS = 1.5;

    function IS(SS, HS, gS) {
      if ("string" !== typeof SS) return HS;
      try {
        const gS = JSON.parse(SS);
        return gS && "object" === typeof gS ? gS : HS
      } catch (tS) {
        return void 0 !== gS && console.error(`Couldn't parse ${gS}`, tS), HS
      }
    }

    function fS(SS) {
      return IS(SS, null, "a leaderboard's rows")
    }

    function kS(SS, HS) {
      var gS, tS;
      return null !== HS && void 0 !== HS ? HS : {
        status: null !== (gS = SS.status) && void 0 !== gS ? gS : "loading",
        entries: null !== (tS = SS.entries) && void 0 !== tS ? tS : []
      }
    }

    function aS(SS, HS) {
      return "number" === typeof SS && Number.isFinite(SS) && SS > 0 ? SS : HS
    }

    function KS(SS, HS) {
      const gS = aS(SS.size, 1);
      let tS = aS(SS.width, aS(2.5 * gS, 2.5)),
        bS = aS(SS.height, aS(3.75 * gS, 3.75));
      Number.isFinite(XS * bS / tS) && Number.isFinite(xS * tS / bS) || (tS = 2.5, bS = 3.75);
      const NS = bS / tS,
        qS = Math.max(1, Math.min(XS, HS / NS));
      return {
        width: tS,
        height: bS,
        layoutWidth: Math.max(XS, xS / NS),
        layoutHeight: Math.max(xS, XS * NS),
        pixelWidth: Math.round(qS),
        pixelHeight: Math.round(Math.max(1, Math.min(HS, qS * NS)))
      }
    }

    function jS(SS, HS, gS, xS, IS, fS) {
      SS.setTransform(1, 0, 0, 1, 0, 0), SS.fillStyle = bS.B.defaultNameTagBackground, SS.fillRect(0, 0, HS, gS), SS.scale(HS / xS.layoutWidth, gS / xS.layoutHeight), SS.translate((xS.layoutWidth - XS) / 2, 0),
        function(SS, HS, gS, XS) {
          var xS, IS, fS, kS;
          const {
            top: aS,
            around: KS,
            showPlayerText: jS,
            localPlayerDbId: nS
          } = gS, {
            whiteUiText: PS,
            grayUiText: QS,
            yellowUiText: DS
          } = bS.B;
          SS.textBaseline = "middle";
          const wS = function(HS, gS, tS, bS, XS, xS) {
              let NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              SS.font = `bold ${bS}px 'Jetbrains Mono', monospace`, SS.fillStyle = XS, SS.textAlign = NS;
              let qS = HS.replace(/[\r\n\t]/g, " ");
              if (SS.measureText(qS).width > xS) {
                for (; qS.length > 0 && SS.measureText(`${qS}\u2026`).width > xS;) qS = qS.slice(0, -1);
                qS += "\u2026"
              }
              SS.fillText(qS, gS, tS)
            },
            hS = HS => {
              SS.fillStyle = PS, SS.globalAlpha = .15, SS.fillRect(24, HS, 976, 2), SS.globalAlpha = 1
            },
            ZS = null === nS ? null : (0, bS.ic)(nS),
            JS = SS => null !== ZS && SS.playerHash === ZS,
            OS = GS(aS.entries, tS.p),
            dS = "ready" === aS.status && OS.length > 0,
            cS = null === KS ? [] : GS(KS.entries, NS),
            vS = OS.some(JS),
            ES = null === KS ? null : function(SS) {
              const HS = SS;
              if (!HS || !Number.isFinite(HS.rank) || !Number.isFinite(HS.tied) || !Number.isFinite(HS.total)) return null;
              return HS
            }(KS.standing),
            LS = cS.find(JS),
            YS = OS.find(JS),
            AS = null === ES || void 0 === LS ? null : {
              value: LS.value,
              rank: ES.rank
            },
            yS = CS(OS, void 0 === YS || YS.value === (null === AS || void 0 === AS ? void 0 : AS.value) ? AS : null),
            VS = CS(cS, AS),
            iS = (SS, HS) => {
              const gS = SS.findIndex(JS);
              return gS >= 0 ? HS[gS] : null
            },
            WS = null !== (xS = null !== (IS = null === ES || void 0 === ES ? void 0 : ES.rank) && void 0 !== IS ? IS : iS(cS, VS)) && void 0 !== xS ? xS : iS(OS, yS);
          SS.font = "bold 34px 'Jetbrains Mono', monospace";
          const zS = [...dS ? yS : [], ...vS ? [] : VS],
            US = Math.min(280, Math.max(0, ...zS.map((HS => SS.measureText(qS.format(HS)).width)))),
            pS = US <= 80,
            sS = pS ? 80 : 32 + US,
            BS = pS ? 148 : sS + 28,
            MS = 660 - BS;
          wS(`TOP ${tS.p}  /  ALL TIME`, 24, 52, 28, QS, 976), wS(jS ? String(null !== (fS = HS.title) && void 0 !== fS ? fS : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, PS, 976), wS("RANK", 32, 174, 28, QS, BS - 40), wS("PLAYER", BS, 174, 28, QS, MS), wS(jS ? String(null !== (kS = HS.scoreLabel) && void 0 !== kS ? kS : "Score").slice(0, 24) : "Score", 992, 174, 28, QS, 304, "right"), hS(202);
          const FS = (XS - 232) / (tS.p + uS + NS),
            RS = 208 + tS.p * FS,
            TS = RS + uS * FS,
            oS = (HS, gS, tS, bS) => {
              const XS = JS(HS);
              SS.fillStyle = XS ? DS : PS, SS.globalAlpha = XS ? .15 : bS ? .035 : 0, SS.fillRect(24, tS - FS / 2 + 1, 976, FS - 2), SS.globalAlpha = 1;
              const xS = XS ? DS : PS;
              wS(qS.format(gS), sS, tS, 34, xS, pS ? 80 : US, pS ? "center" : "right"), wS(jS ? String(HS.name).slice(0, 64) : "Player", BS, tS, 34, xS, MS);
              const NS = qS.format(HS.value);
              wS(SS.measureText(NS).width > 304 ? HS.value.toExponential(6) : NS, 992, tS, 34, xS, 304, "right")
            };
          if (dS)
            for (const [tS, bS] of OS.entries()) oS(bS, yS[tS], 208 + (tS + .5) * FS, tS % 2 === 0);
          else {
            const SS = "error" === aS.status,
              HS = SS ? "Couldn't load leaderboard" : "ready" === aS.status ? "No scores yet" : "Loading leaderboard\u2026",
              gS = SS ? "Trying again shortly" : "ready" === aS.status ? "Be the first on the board!" : "Fetching the top players",
              tS = (208 + RS) / 2;
            wS(HS, 512, tS - 28, 40, SS ? bS.B.redUiText : PS, 960, "center"), wS(gS, 512, tS + 27, 30, QS, 960, "center")
          }
          const lS = RS + uS * FS / 2;
          if (null === WS) hS(lS);
          else {
            const HS = null === ES ? 0 : ES.tied - 1,
              gS = `YOUR RANK #${qS.format(WS)}${null===ES?"":` of ${qS.format(ES.total)}`}`;
            SS.font = "bold 36px 'Jetbrains Mono', monospace";
            const tS = Math.max(20, Math.min(36, Math.floor(34560 / SS.measureText(gS).width)));
            wS(gS, 512, lS - (HS > 0 ? 15 : 0), tS, DS, 960, "center"), HS > 0 && wS(`Tied with ${qS.format(HS)} other${1===HS?"":"s"}`, 512, lS + 24, 24, QS, 960, "center")
          }
          if (null === KS) return;
          const mS = TS + NS * FS / 2;
          if (vS) wS(`You're in the top ${tS.p}!`, 512, mS, 40, DS, 960, "center");
          else if (0 === cS.length) wS("You're not on this board yet", 512, mS, 34, QS, 960, "center");
          else
            for (const [tS, bS] of cS.entries()) oS(bS, VS[tS], TS + (tS + .5) * FS, tS % 2 === 0)
        }(SS, IS, fS, xS.layoutHeight)
    }

    function GS(SS, HS) {
      return Array.isArray(SS) ? SS.slice(0, HS).filter((SS => SS && Number.isFinite(SS.rank) && Number.isFinite(SS.value))) : []
    }

    function CS(SS, HS) {
      const gS = [];
      let tS = !1;
      return SS.forEach(((bS, XS) => {
        if (null !== HS && bS.value === HS.value) return void gS.push(HS.rank);
        const xS = XS > 0 && bS.value === SS[XS - 1].value;
        xS || (tS = 0 === XS && 1 !== bS.rank), gS.push(xS && !tS ? gS[XS - 1] : bS.rank)
      })), gS
    }
  },
  38885: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      i: () => XS
    });
    const tS = 32;

    function bS(SS) {
      return Array.from(SS).length
    }

    function XS(SS) {
      const HS = [""];
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bS = "";
      const XS = () => {
        HS.push(""), gS = 0, bS = ""
      };
      for (const xS of SS.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(xS)) XS();
        else if (/^\s+$/.test(xS)) bS += xS;
      else if (xS.length > 0) {
        const SS = Array.from(xS);
        gS > 0 && gS + bS.length + SS.length > tS && XS(), HS[HS.length - 1] += bS, gS += bS.length, bS = "";
        for (const bS of SS) gS >= tS && XS(), HS[HS.length - 1] += bS, gS++
      }
      return HS[HS.length - 1] += bS, HS
    }
  },
  50984: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      WasmPreviewHost: () => OH,
      pageBuiltInAnimationPack: () => kS,
      pagePreviews: () => XH,
      previewModule: () => lS
    });
    var tS = gS(3030),
      bS = gS(687);
    const XS = "[bloxd-wasm-client]";

    function xS(SS) {
      const HS = {
        wasm: "unknown",
        client: String(bS.b)
      };
      try {
        var gS;
        HS.wasm = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.Qf()) && void 0 !== gS ? gS : HS.wasm
      } catch {}
      return HS
    }
    async function NS(SS) {
      if (SS.length < 2 || 31 !== SS[0] || 139 !== SS[1]) return SS;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: HS
        } = await Promise.resolve().then((() => gS(2967)));
        return HS(SS)
      }
      const HS = new Blob([SS]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(HS).arrayBuffer())
    }

    function qS(SS, HS, tS, bS) {
      Promise.resolve().then((() => gS(40782))).then((gS => {
        let {
          reportDataLoadFailure: XS
        } = gS;
        XS(SS, HS, tS, bS)
      }), (HS => {
        console.warn(`${XS} ${SS} didn't load, and the report couldn't be sent`, tS.error, HS)
      }))
    }
    const uS = [3e4, 12e4, 3e5];
    class IS {
      constructor(SS) {
        this.deps = SS, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((SS => {
          this.resolveSet = SS
        }))
      }
      provide(SS) {
        return this.loading ??= this.load(SS), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(SS) {
        const HS = xS(SS),
          gS = await async function(SS, HS) {
            let gS;
            try {
              gS = await SS()
            } catch (tS) {
              return {
                stage: "fetch",
                error: tS
              }
            }
            try {
              return HS(gS) ? null : {
                stage: "decode",
                error: null
              }
            } catch (tS) {
              return {
                stage: "decode",
                error: tS
              }
            }
          }((() => this.deps.fetch()), (HS => {
            const gS = SS.XXS(HS);
            return gS && this.resolveSet(HS), gS
          }));
        if (null !== gS) {
          if ("fetch" === gS.stage) {
            this.loading = null;
            const HS = uS[this.retries++];
            void 0 !== HS && this.deps.later((() => {
              this.provide(SS)
            }), HS)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(gS, HS))
        }
      }
    }
    let fS = null;

    function kS() {
      return fS ??= new IS({
        fetch: async () => NS(await (0, tS.J)(aS(), {
          priority: "low"
        })),
        onFailed: (SS, HS) => {
          qS("builtInAnimations", aS(), SS, HS)
        },
        later: (SS, HS) => {
          setTimeout(SS, HS)
        }
      }), fS
    }

    function aS() {
      return gS(50991)
    }
    var KS = gS(3021),
      jS = gS(1286),
      GS = gS(364),
      CS = gS(362),
      nS = gS(699),
      PS = gS(4926),
      QS = gS(40755),
      DS = gS(40954),
      wS = (gS(40805), gS(40818)),
      hS = gS(40824),
      ZS = gS(40832),
      JS = gS(40767),
      OS = gS(40979),
      dS = gS(40986),
      cS = gS(40748),
      vS = gS(41005),
      ES = gS(40871),
      LS = gS(40860),
      YS = gS(40914),
      AS = gS(40972),
      yS = gS(42600),
      VS = gS(36287),
      iS = gS(3829);
    const WS = "[bloxd-previews]",
      zS = 4e5,
      US = 0,
      pS = 1,
      sS = 2,
      BS = 1,
      MS = 2,
      FS = 3,
      RS = 0,
      TS = 1,
      oS = 2;

    function lS(SS) {
      const HS = SS,
        gS = (0, QS.M)(SS),
        tS = (0, QS.l)(SS);
      return null !== gS && null !== tS && "function" === typeof HS.HXS && "function" === typeof HS.gXS && "function" === typeof HS.bXS ? HS : null
    }

    function mS(SS, HS, gS) {
      let [tS, bS] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [SS, HS], XS = Math.min(Number.isFinite(gS) && gS > 0 ? gS : 1, 2);
      const xS = Math.max(0, tS, SS) * Math.max(0, bS, HS) * XS * XS;
      return xS > zS && (XS *= Math.sqrt(zS / xS)), [Math.max(1, Math.floor(Math.max(0, SS) * XS)), Math.max(1, Math.floor(Math.max(0, HS) * XS))]
    }

    function eS() {
      return gS(50994)
    }
    async function rS(SS, HS, tS) {
      let bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === SS && (0, cS.y)();
      const XS = await (0, cS.P)();
      if (null === XS || (0, QS.m)(XS) || (0, cS.c)()) return;
      const NS = "webgpu" === XS.backend;
      if (!NS && "lost" !== SS) return;
      const qS = NS && (0, CS.t)(XS.adapter, null !== tS && void 0 !== tS ? tS : null, "lost" === SS, bS),
        uS = NS ? (0, QS.S)(SS) : null;
      if (null === uS) {
        NS || (0, nS.s)(), (0, cS.t)();
        try {
          await async function(SS, HS, tS, bS, XS) {
            let {
              restoreLost: NS,
              adapterRemembered: qS
            } = XS;
            const uS = (0, KS.U)(),
              {
                flushCrashReports: IS,
                reportRenderReload: fS
              } = await Promise.resolve().then((() => gS(40782)));
            fS(SS.backend, bS, xS(uS ? (0, KS.G)() : null), {
              cause: HS,
              restoreLost: NS,
              adapterRemembered: qS,
              ...SH(SS, HS, tS)
            }), await IS(ES.d)
          }(XS, SS, HS, null !== tS && void 0 !== tS ? tS : "start_failed" === SS ? 0 : 1, {
            restoreLost: bS,
            adapterRemembered: qS
          })
        } catch (fS) {
          console.warn(`${WS} ${XS.backend} failed at home (${SS}), and its report couldn't be sent`, fS)
        }(0, ES.k)()
      } else {
        var IS;
        const tS = SH(XS, SS, HS),
          bS = `WebGPU failed at home (${SS}${void 0===tS.error?"":`: ${tS.error instanceof Error?tS.error.message:(0,VS.g)(tS.error)}`}) and ${uS}`;
        console.warn(`${WS} ${bS}: the previews stop`, null !== (IS = tS.error) && void 0 !== IS ? IS : ""), (0, cS.v)(bS);
        try {
          const {
            countRenderLost: HS
          } = await Promise.resolve().then((() => gS(40782)));
          HS(SS, tS.error, tS.context)
        } catch (kS) {
          console.warn(`${WS} WebGPU failed at home (${SS}), and its count couldn't be sent`, kS)
        }
      }
    }

    function SH(SS, HS, gS) {
      var tS;
      let {
        adapter: bS
      } = SS;
      const XS = (0, KS.U)();
      return {
        error: "lost" === HS && null !== (tS = (0, QS.W)(XS ? (0, QS.M)((0, KS.G)()) : null)) && void 0 !== tS ? tS : gS,
        context: {
          adapter: bS,
          boundAtMs: "start_failed" === HS ? null : (0, cS.M)(),
          indirectHangs: (0, cS.A)(),
          restoresSkipped: (0, cS.N)()
        }
      }
    }
    async function HH() {
      if (!(0, KS.U)()) {
        const SS = await (0, cS.P)();
        if (null === SS || (0, QS.m)(SS)) return null;
        if (await (0, vS.e)(await SS.load()), !(0, KS.U)()) return null
      }
      return lS((0, KS.G)())
    }
    class gH {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.page = SS, this.host = HS, this.id = gS, this.canvas = tS, this.size = bS, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const xS = {
            ...XS.images,
            glbUrl: SS => {
              var HS;
              return null !== (HS = this.models.drawnUrl(SS)) && void 0 !== HS ? HS : XS.images.glbUrl(SS)
            }
          },
          NS = HS => SS.modelFile(HS);
        this.images = new DS.g(xS, (SS => {
          console.warn(`${WS} image ${SS.key.kind}:${SS.key.index}:${SS.key.word} failed`, SS.error)
        }), {
          fetchFile: NS,
          fetchImage: HS => SS.imageFile(HS)
        }), SS.startModels(), this.models = new wS.k(XS.files, ((HS, gS) => SS.buildModel(HS, gS)), (SS => {
          console.warn(`${WS} model file ${SS.file} (${SS.url}) failed`, SS.error)
        }), {
          fetchFile: NS,
          onWritten: (SS, HS) => {
            this.images.glbWritten(SS, HS)
          },
          onTaken: (SS, HS) => {
            this.images.glbTaken(SS, HS)
          }
        }), this.write = (SS, HS, gS) => {
          if (this.closed) return !0;
          if (SS === wS.d) {
            const SS = new DataView(gS.buffer, gS.byteOffset, ZS.c),
              tS = SS.getUint32(0, !0),
              bS = SS.getUint32(ZS.d, !0),
              XS = this.page.hostCall(oS, (() => this.host.qxS(this.id, tS, HS, gS.subarray(ZS.c))));
            return this.outcomes.push([bS, XS]), !0
          }
          return SS === DS.c && (this.page.hostCall(void 0, (() => {
            this.host.IxS(this.id, gS)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(SS, HS, gS) {
        if (this.closed) return;
        const [tS, bS] = mS(SS, HS, this.page.dpr(), gS);
        tS === this.size[0] && bS === this.size[1] || (this.size = [tS, bS], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, tS, bS)
        })))
      }
      setMob(SS, HS, gS, tS) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.jxS(this.id, SS, HS, gS, tS))))
      }
      setPet(SS, HS, gS, tS) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.CxS(this.id, SS, HS, gS, tS))))
      }
      setPlayer(SS, HS, gS) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.kxS(this.id, SS, HS, gS))))
      }
      setFigure(SS, HS, gS, tS) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.axS(this.id, SS, HS, gS, tS))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const SS = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === SS || SS.length < 3 ? null : {
          alpha: SS[0],
          beta: SS[1],
          radius: SS[2]
        }
      }
      setOrbit(SS) {
        let {
          alpha: HS,
          beta: gS,
          radius: tS
        } = SS;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.GxS(this.id, HS, gS, tS)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((SS => {
          this.settled.push(SS)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, OS.f)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [SS, HS] of this.outcomes) {
          const gS = HS === RS ? [] : [HS === TS ? SS : (SS | wS.h) >>> 0];
          this.models.taken(SS, gS)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(SS) {
        let HS = !1;
        if (SS) {
          const SS = this.host.QxS(this.id);
          for (const HS of SS) this.models.request(HS);
          const gS = this.host.PxS(this.id);
          gS.length > 0 && this.images.onEvent(gS), HS = SS.length > 0 || gS.length > 0
        }
        const gS = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          tS = HS || gS > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = tS ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(SS) {
        this.page.hostCall(void 0, (() => {
          const HS = this.host.close(this.id);
          HS.length > 0 && this.images.onEvent(HS), this.page.isTrapped || SS.bXS(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const SS = this.settled;
        this.settled = [];
        for (const HS of SS) HS()
      }
    }
    class tH {
      constructor(SS) {
        this.deps = SS, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: SS => {
            this.modelsFailed(SS)
          },
          onDecoderFailed: SS => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${WS} the Draco decoder didn't load: models waiting on it won't draw`, SS))
          },
          onWorkerLost: SS => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${WS} a model worker was lost: ${SS}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.bK = {
          setShaderPack: (SS, HS, gS, tS, bS) => (this.shaderPackArgs = [SS, HS, gS, tS, bS], this.handOverShaderPack(), !0)
        }, this.frame = SS => {
          this.frameId = null;
          const HS = this.host;
          if (null !== HS && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(HS, SS)
          } catch (gS) {
            if (!this.stopIfTrapped(gS) && (this.stop(), (0, QS.p)(gS))) return void this.deps.onRenderFailed("frames_refused", gS);
            console.warn(`${WS} the previews stopped: their frame threw`, gS)
          }
        }, SS.pack.onChange((() => {
          this.packChanged()
        })), SS.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const SS of this.previews.values()) SS.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var SS, HS;
        return null !== (SS = null === (HS = this.host) || void 0 === HS ? void 0 : HS.attached()) && void 0 !== SS && SS
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((SS, HS) => SS + HS), 0) / this.costs.length
      }
      async bindSession(SS, HS, gS) {
        const tS = this.binding,
          bS = this.sessionEnds;
        try {
          const XS = this.hostOf(SS);
          if (!XS.uxS()) {
            const HS = (0, YS.e)().sampleCount,
              xS = await gS(HS);
            if (this.sessionEnds !== bS) return this.keepRendererOfEndedSession(SS, XS, xS, HS, tS), HS;
            if (!XS.RXS(xS)) throw new Error("the page has a renderer already");
            (0, cS.x)(performance.now()), this.samples = HS, (0, AS.h)((0, QS.l)(SS))
          }
          if (!XS.attach(HS)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === tS && this.endBinding()
        }
      }
      keepRendererOfEndedSession(SS, HS, gS, tS, bS) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== bS) try {
          gS.free()
        } catch (XS) {
          console.warn(`${WS} an ended session's renderer didn't free`, XS)
        } else HS.RXS(gS) && ((0, cS.x)(performance.now()), this.samples = tS, (0, AS.h)(this.registryOf(SS)))
      }
      async beginSession() {
        var SS;
        let HS = () => {};
        const gS = new Promise((SS => {
          HS = SS
        }));
        this.binding = {
          done: gS,
          release: HS
        }, await (null === (SS = this.opening) || void 0 === SS ? void 0 : SS.catch((() => null)));
        const tS = this.pageCanvas;
        return this.pageCanvas = null, tS
      }
      endSession(SS) {
        var HS, gS;
        if (this.sessionEnds++, this.lastEndReturned = SS, this.endBinding(), SS) {
          try {
            var tS;
            null === (tS = this.host) || void 0 === tS || tS.detach()
          } catch (bS) {
            return void console.warn(`${WS} the session's core kept the page's renderer`, bS)
          }!0 === (null === (HS = this.host) || void 0 === HS ? void 0 : HS.attached()) && console.warn(`${WS} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (gS = this.host) || void 0 === gS ? void 0 : gS.uxS()) && (0, AS.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var SS;
        null === (SS = this.binding) || void 0 === SS || SS.release(), this.binding = null
      }
      async openPreview(SS, HS, gS, tS) {
        const bS = await this.renderingHost(),
          XS = this.module;
        if (null === bS || null === XS) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(bS), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(XS)
        }));
        const xS = this.nextId++,
          NS = this.deps.createCanvas(),
          [qS, uS] = mS(HS, gS, this.deps.dpr(), tS);
        NS.width = qS, NS.height = uS;
        if (!this.guarded((() => (XS.gXS(xS, NS), bS.open(xS, qS, uS, SS))))) throw this.hostCall(void 0, (() => {
          XS.bXS(xS)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const IS = new gH(this, bS, xS, NS, [qS, uS], this.deps);
        return this.previews.set(xS, IS), this.startFrames(), IS
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, cS.c)() || null !== (0, cS.J)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((SS => {
          null === SS || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(SS) {
        return this.prefetchedOr(SS, this.deps.fetchModel)
      }
      imageFile(SS) {
        return this.prefetchedOr(SS, tS.J)
      }
      prefetchedOr(SS, HS) {
        const gS = this.prefetchedFiles.get(SS);
        return void 0 === gS ? HS(SS) : gS.catch((() => HS(SS)))
      }
      async prefetchPlayerFiles() {
        const SS = this.deps.playerFile().then((SS => this.deps.files.url(SS))),
          HS = await Promise.all([SS, this.deps.images.lifeformAtlasUrl(OS.c)]).catch((() => null));
        if (null === HS) return;
        const [gS, tS] = HS, bS = (SS, HS) => {
          if (null === SS) return;
          const gS = HS(SS);
          this.prefetchedFiles.set(SS, gS), gS.catch((() => {
            this.prefetchedFiles.delete(SS)
          }))
        };
        bS(gS, (SS => this.modelFile(SS))), bS(tS, (SS => this.imageFile(SS)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((SS => (null === SS && (this.moduleLoad = null), SS)), (SS => {
          throw this.moduleLoad = null, SS
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((SS => {
          throw this.animationTable = null, SS
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((SS => (this.modelsFailed(SS), () => new Promise((() => {})))))
      }
      buildModel(SS, HS) {
        return this.startModels(), this.models.then((gS => gS(SS, HS))).then((SS => this.unavailable ? new Promise((() => {})) : SS))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(SS) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${WS} the model workers didn't start: models won't draw in the previews`, SS))
      }
      called(SS) {
        return 0 !== SS && this.logError(SS, 0), SS
      }
      closePreview(SS) {
        this.previews.delete(SS.id), null !== this.module && SS.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(SS) {
        if (null !== this.module && this.module !== SS) throw new Error("a second renderer module on one page");
        return this.module = SS, null === this.host && (this.host = this.guarded((() => new SS.HXS)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: SS
        } = this;
        null !== SS && this.outsideCall("the game's start or end", (() => {
          SS.KxS(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: SS,
          shaderPackArgs: HS
        } = this;
        null !== SS && null !== HS && this.outsideCall("the shader pack's hand-over", (() => {
          SS.rgS(...HS) || console.warn(`${WS} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(SS, HS) {
        try {
          this.hostCall(void 0, HS)
        } catch (gS) {
          this.stop(), console.warn(`${WS} the previews stopped: ${SS} threw`, gS)
        }
      }
      async loadAnimations(SS) {
        const HS = xS(null),
          gS = this.module;
        try {
          HS.wasm = null === gS ? HS.wasm : this.hostCall(HS.wasm, (() => gS.Qf()))
        } catch {}
        let tS, bS;
        try {
          tS = await this.fetchAnimationTable()
        } catch (XS) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: XS
          }, HS)
        }
        if (!this.settleIfTrapped()) {
          try {
            bS = SS.fxS(tS)
          } catch (XS) {
            if (this.stopIfTrapped(XS)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: XS
            }, HS)
          }
          bS || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, HS)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const SS = this.host;
        return null !== SS && this.guarded((() => SS.uxS())) ? SS : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var SS;
        const HS = null !== (SS = this.module) && void 0 !== SS ? SS : await this.loadModule();
        if (null === HS) return null;
        const gS = this.hostOf(HS),
          tS = () => this.guarded((() => gS.uxS()));
        if (tS()) return gS;
        if (null !== (0, cS.J)() || (0, cS.c)()) return null;
        const bS = this.deps.createCanvas();
        bS.width = 1, bS.height = 1;
        const XS = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const xS = (0, YS.e)().sampleCount;
        let NS;
        try {
          NS = await (0, QS.w)(HS, "previewRenderer", bS, xS, yS.c, XS)
        } catch (qS) {
          throw qS instanceof JS.c ? this.stopForTrap(qS) : (0, QS.t)(qS) && await this.deps.onRenderFailed("start_failed", qS), qS
        }
        return this.guarded((() => gS.RXS(NS))) ? ((0, cS.x)(performance.now()), this.samples = xS, this.pageCanvas = bS, (0, AS.h)(this.registryOf(HS)), gS) : tS() ? gS : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(SS, HS) {
        for (const xS of this.previews.values()) xS.feed();
        if (this.stopped) return;
        const gS = this.deps.now(),
          tS = SS.frame(HS);
        this.costs.push(this.deps.now() - gS), this.costs.length > 120 && this.costs.shift();
        const bS = 0 !== (256 & tS),
          XS = 255 & tS;
        for (const xS of this.previews.values()) {
          if (this.stopped) return;
          xS.collect(bS)
        }
        if (!this.stopped) {
          if (0 !== (512 & tS) && this.deps.onDrew(), bS) {
            const HS = SS.nxS();
            for (let SS = 0; SS + 1 < HS.length; SS += 2) HS[SS] === PS.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(HS[SS], HS[SS + 1])
          }
          if (XS !== BS) {
            if (XS === MS) return this.stop(), void this.deps.onFatal(SS.XxS(), SS.xxS());
            if (XS === FS) return this.stop(), void console.warn(`${WS} the previews stopped: the page's renderer went with its session`);
            (0, GS.b)(HS), this.startFrames()
          } else {
            const HS = SS.NxS();
            this.stop();
            const gS = HS[2] === PS.id.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(gS, void 0, HS[1], HS[2] === PS.id.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, JS.i)(this.module) || "failed" === (0, KS.F)())
      }
      hostCall(SS, HS) {
        if (this.settleIfTrapped()) return SS;
        try {
          return HS()
        } catch (gS) {
          if (this.stopIfTrapped(gS)) return SS;
          throw gS
        }
      }
      guarded(SS) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return SS()
        } catch (HS) {
          throw this.stopIfTrapped(HS), HS
        }
      }
      registryOf(SS) {
        return {
          WgS: (HS, gS) => {
            this.hostCall(void 0, (() => {
              SS.WgS(HS, gS)
            }))
          },
          zgS: HS => {
            this.hostCall(void 0, (() => {
              SS.zgS(HS)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, AS.h)(null)), !0)
      }
      stopIfTrapped(SS) {
        return !(null === this.module || !(0, JS.k)(this.module, SS)) && (this.stopForTrap(SS), !0)
      }
      stopForTrap(SS) {
        this.stop(), (0, AS.h)(null), (0, iS.g)("previews", SS)
      }
      stop() {
        this.stopped = !0;
        for (const SS of this.previews.values()) SS.abandon()
      }
      logError(SS, HS) {
        const gS = `${SS}:${HS}`;
        this.loggedErrors.has(gS) || (this.loggedErrors.add(gS), console.warn(`${WS} error ${SS} (detail ${HS})`))
      }
    }
    let bH = null;

    function XH() {
      return bH ??= new tH(function() {
        const SS = (0, hS.m)(jS.clientSideServerUrls.staticUrl, {
          packUrl: SS => {
            var HS, gS;
            return null !== (HS = null === (gS = OS.d.current) || void 0 === gS ? void 0 : gS.modelUrl(SS)) && void 0 !== HS ? HS : null
          }
        });
        return {
          loadModule: HH,
          startModels: async SS => {
            const {
              pageModelPool: HS
            } = await gS.e(42).then((() => gS(51070))), {
              pool: tS
            } = HS(SS);
            return (SS, HS) => tS.build(SS, HS)
          },
          fetchAnimations: async () => NS(await (0, tS.J)(eS())),
          playerFile: async () => (await (0, hS.l)()).PLAYER_FILE,
          onAnimationsFailed: (SS, HS) => {
            qS("previewAnimations", eS(), SS, HS)
          },
          provideBuiltInAnimationPack: SS => {
            kS().provide(SS)
          },
          openExtras: cS.B,
          files: SS,
          images: (0, OS.h)((0, DS.m)(SS.url), (() => OS.d.current)),
          pack: OS.d,
          game: dS.b,
          fetchModel: SS => (0, hS.g)(SS),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: SS => requestAnimationFrame(SS),
          cancelFrame: SS => {
            cancelAnimationFrame(SS)
          },
          onRenderFailed: rS,
          onFatal: (SS, HS) => {
            console.error(`${WS} the previews stopped: renderer error ${SS} (detail ${HS})`)
          },
          onDeviceLost: () => {
            (0, cS.F)() === LS.b.webgpu && CS.F.lost()
          },
          onDrew: () => {
            CS.F.drew()
          }
        }
      }()), bH
    }
    var xH = gS(665),
      NH = gS(38644),
      qH = gS(3437);
    const uH = {
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
    const IH = "[bloxd-previews]",
      fH = new Uint32Array(5);

    function kH(SS) {
      return xH.j.indexOf(SS)
    }
    const aH = new WeakSet;

    function KH(SS) {
      const HS = (0, NH.f)(SS),
        gS = null === HS ? -1 : jH(HS);
      return -1 !== gS ? gS : (aH.has(SS) || (aH.add(SS), console.warn(`${IH} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function jH(SS) {
      var HS;
      return null !== (HS = uH[SS]) && void 0 !== HS ? HS : -1
    }

    function GH(SS, HS) {
      const {
        canvas: gS
      } = HS;
      gS.style.width = "100%", gS.style.height = "100%", gS.style.display = "block", SS.appendChild(gS)
    }

    function CH(SS) {
      const HS = SS.getBoundingClientRect();
      return [HS.width, HS.height]
    }
    class nH {
      constructor(SS, HS) {
        this.preview = SS, this.showView = HS
      }
      show(SS) {
        this.showView(this.preview, SS)
      }
      resize(SS, HS) {
        this.preview.resize(SS, HS)
      }
      close() {
        this.preview.close()
      }
    }
    class PH {
      constructor(SS) {
        this.preview = SS, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(SS) {
          const {
            canvas: HS
          } = SS;
          let gS = null;
          const tS = SS => {
              var tS;
              gS = {
                pointer: SS.pointerId,
                x: SS.clientX,
                y: SS.clientY
              }, null === (tS = HS.setPointerCapture) || void 0 === tS || tS.call(HS, SS.pointerId)
            },
            bS = HS => {
              var tS;
              const bS = SS.orbit;
              if ((null === (tS = gS) || void 0 === tS ? void 0 : tS.pointer) !== HS.pointerId || null === bS) return;
              const XS = HS.clientX - gS.x,
                xS = HS.clientY - gS.y;
              gS = {
                ...gS,
                x: HS.clientX,
                y: HS.clientY
              }, SS.setOrbit({
                alpha: bS.alpha - .01 * XS,
                beta: Math.min(Math.PI - .01, Math.max(.01, bS.beta - .01 * xS)),
                radius: bS.radius
              })
            },
            XS = SS => {
              var HS;
              (null === (HS = gS) || void 0 === HS ? void 0 : HS.pointer) === SS.pointerId && (gS = null)
            },
            xS = HS => {
              const gS = SS.orbit;
              if (null === gS) return;
              HS.preventDefault();
              const tS = HS.deltaY * (HS.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : HS.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                bS = Math.min(100, Math.max(5, gS.radius + .08 * tS));
              SS.setOrbit({
                ...gS,
                radius: bS
              })
            };
          return HS.style.touchAction = "none", HS.addEventListener("pointerdown", tS), HS.addEventListener("pointermove", bS), HS.addEventListener("pointerup", XS), HS.addEventListener("pointercancel", XS), HS.addEventListener("wheel", xS, {
            passive: !1
          }), () => {
            HS.removeEventListener("pointerdown", tS), HS.removeEventListener("pointermove", bS), HS.removeEventListener("pointerup", XS), HS.removeEventListener("pointercancel", XS), HS.removeEventListener("wheel", xS)
          }
        }(SS), this.dev = {
          canvas: () => SS.canvas,
          isolateHead: () => {
            console.warn(`${IH} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = SS.untilSettled().then((() => {
          if (SS.isStopped) throw new Error(`${IH} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(SS, HS) {
        this.cosmetics[SS] = HS, this.apply()
      }
      playEmote(SS) {
        null === SS || SS !== this.emote ? (this.emote = SS, this.apply()) : this.preview.replay()
      }
      untilDrawn(SS) {
        return this.preview.untilSettled()
      }
      setOrbit(SS) {
        let {
          yaw: HS,
          pitch: gS,
          radius: tS
        } = SS;
        const bS = this.preview.orbit;
        null !== bS && this.preview.setOrbit({
          alpha: HS,
          beta: gS,
          radius: null !== tS && void 0 !== tS ? tS : bS.radius
        })
      }
      resetCamera() {}
      resize(SS, HS) {
        this.preview.resize(SS, HS)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var SS;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), fH, null === (SS = this.emote) ? -1 : jH(SS))
      }
    }

    function QH(SS, HS) {
      let {
        mobType: gS,
        variation: tS,
        animation: bS
      } = HS;
      SS.setMob(kH(gS), null !== tS && void 0 !== tS ? tS : "", 1, KH(bS))
    }

    function DH(SS, HS) {
      let {
        mobType: gS,
        variation: tS,
        metaInfo: bS,
        tamed: XS
      } = HS;
      SS.setPet(kH(gS), tS, bS, XS)
    }
    const wH = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class hH {
      constructor(SS, HS, gS, tS) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, SS(gS.width, tS[1], tS).then((SS => {
          if (this.closed) return void SS.close();
          const {
            style: gS
          } = SS.canvas;
          gS.position = "absolute", gS.top = "0", gS.visibility = "hidden", GH(HS, SS), this.preview = SS, this.apply()
        })).catch((SS => {
          console.error(`${IH} couldn't open a lineup figure`, SS)
        }))
      }
      update(SS, HS, gS, tS, bS) {
        this.figure = SS, this.shown = HS, this.order = gS, this.span = tS, this.lineup = bS, this.apply()
      }
      close() {
        var SS;
        this.closed = !0, null === (SS = this.preview) || void 0 === SS || SS.close(), this.preview = null
      }
      apply() {
        const {
          preview: SS,
          figure: HS,
          lineup: gS
        } = this;
        if (null === SS || null === HS) return;
        if (this.given !== HS) {
          var tS;
          this.given = HS, this.loaded = !1;
          const gS = null === HS.RD ? 0 : null !== (tS = (0, qH.d)(HS.RD)) && void 0 !== tS ? tS : 0;
          SS.setFigure(function(SS) {
            return JSON.stringify(Object.fromEntries(SS.cosmetics))
          }(HS), gS, KH(HS.animation), HS.size), SS.untilSettled().then((() => {
            this.given === HS && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: bS,
          width: XS
        } = this.span;
        SS.resize(XS, gS[1], gS);
        const {
          style: xS
        } = SS.canvas;
        xS.left = `${bS}px`, xS.width = `${XS}px`, xS.zIndex = this.order, xS.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class ZH {
      constructor(SS, HS) {
        this.open = HS, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = CH(SS), this.layer = document.createElement("div");
        const {
          style: gS
        } = this.layer;
        gS.position = "relative", gS.isolation = "isolate", gS.overflow = "hidden", gS.width = "100%", gS.height = "100%", gS.pointerEvents = "none", SS.appendChild(this.layer)
      }
      show(SS) {
        this.view = SS, this.place()
      }
      resize(SS, HS) {
        this.size = [SS, HS], this.place()
      }
      close() {
        for (const SS of this.figures) SS.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: SS,
          shown: HS
        } = this.view;
        for (const tS of this.figures.splice(SS.length)) tS.close();
        const {
          size: gS
        } = this;
        SS.forEach(((tS, bS) => {
          var XS;
          const xS = function(SS, HS, gS, tS) {
            let [bS, XS] = tS;
            const xS = (SS + .5) * bS / HS,
              NS = Math.min(Math.max(bS / HS, 2 * gS * XS), 2 * Math.max(xS, bS - xS));
            return {
              left: xS - NS / 2,
              width: NS
            }
          }(bS, SS.length, function(SS) {
            let {
              animation: HS,
              size: gS
            } = SS;
            const {
              aimed: tS,
              ready: bS
            } = wH;
            return (KH(HS) === uH.gunAimed ? tS : bS) * gS
          }(tS), gS);
          this.figures[bS] ??= new hH(this.open, this.layer, xS, gS), this.figures[bS].update(tS, null !== (XS = HS[bS]) && void 0 !== XS && XS, function(SS, HS) {
            return String(Math.round(1e3 * SS) + HS)
          }(tS.size, bS), xS, gS)
        }))
      }
    }
    const JH = {
      player: pS,
      store: sS
    };
    class OH {
      constructor(SS) {
        this.page = SS
      }
      async openMob(SS) {
        return new nH(await this.open(SS, US), QH)
      }
      async openPet(SS) {
        return new nH(await this.open(SS, US), DH)
      }
      openMobLineup(SS) {
        return new ZH(SS, ((SS, HS, gS) => this.page.openPreview(US, SS, HS, gS)))
      }
      async openCharacter(SS, HS) {
        return new PH(await this.open(SS, JH[HS]))
      }
      async open(SS, HS) {
        const [gS, tS] = CH(SS), bS = await this.page.openPreview(HS, gS, tS);
        return GH(SS, bS), bS
      }
    }
  },
  36764: (SS, HS, gS) => {
    gS.d(HS, {
      C: () => aS,
      E: () => KS,
      H: () => jS,
      K: () => CS,
      e: () => tS,
      h: () => bS,
      k: () => kS,
      n: () => GS,
      p: () => IS,
      t: () => nS,
      x: () => qS,
      y: () => uS
    });
    const tS = [{
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

    function bS(SS, HS) {
      const {
        numLines: gS,
        charsPerLine: bS
      } = tS[HS];
      return PS(SS, gS, bS, !1)
    }
    const XS = 7 / 8,
      xS = .25,
      NS = 8;

    function qS(SS, HS) {
      return {
        width: Math.min(SS, NS) - 2 * xS,
        height: Math.min(HS, NS) - 2 * xS
      }
    }

    function uS(SS, HS, gS) {
      const bS = qS(SS, HS),
        {
          numLines: xS,
          charsPerLine: NS
        } = tS[gS];
      return {
        numLines: Math.max(1, Math.floor(xS / XS * bS.height)),
        charsPerLine: Math.max(1, Math.floor(NS * bS.width))
      }
    }

    function IS(SS, HS, gS, tS) {
      const {
        numLines: bS,
        charsPerLine: XS
      } = uS(gS, tS, HS);
      return PS(SS, bS, XS, !1)
    }
    const fS = 32e3;

    function kS(SS) {
      return SS.slice(0, fS)
    }
    const aS = 512e3,
      KS = 64,
      jS = aS;

    function GS(SS, HS) {
      const gS = Math.max(0, jS - HS),
        tS = Math.min(aS, gS);
      return SS.slice(0, tS)
    }
    const CS = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Gu: {
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

    function nS(SS, HS) {
      const {
        numLines: gS,
        charsPerLine: tS
      } = CS[HS];
      return PS(SS, gS, tS, !1)
    }

    function PS(SS, HS, gS, tS, bS) {
      (bS || tS) && (SS = SS.slice(0, null !== bS && void 0 !== bS ? bS : HS * gS));
      const XS = SS.split("\n");
      if (XS.length > HS && XS.splice(HS, XS.length - HS), !tS)
        for (let xS = 0; xS < XS.length; xS++) {
          const SS = XS[xS];
          SS.length > gS && (XS[xS] = SS.substring(0, gS), XS.length < HS && XS.splice(xS + 1, 0, SS.substring(gS)))
        }
      return XS.join("\n")
    }
  },
  50991: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  50994: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);