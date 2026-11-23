export const id = 59;
export const ids = [59];
export const modules = {
  38454: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      c: () => bC
    });
    const QC = new WeakMap;

    function wC(CC, zC) {
      return QC.set(CC, zC), CC
    }

    function bC(CC) {
      var zC;
      return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
    }
  },
  38487: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC
    });
    var QC = ZC(1169);

    function wC(CC) {
      const zC = /(\d*\.?\d+)px/.exec(CC);
      return zC ? Number(zC[1]) : null
    }

    function bC(CC) {
      return CC.split(/[\s,]+/).pop()
    }
    let nC = !1;
    const fC = {
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
      drawText: function(CC, zC, QC, fC, oC, qC) {
        if (oC <= 0 || qC <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: FC,
          fontVariant: WC,
          fontWeight: NC,
          fontSize: MC,
          font: gC
        } = this, SC = [FC, WC, NC, `${MC}px`, gC].filter(Boolean).join(" "), pC = [
          [NC, `${MC}px`, bC(gC)].filter(Boolean).join(" "), `${MC}px sans-serif`
        ], PC = CC.font, GC = function(CC, zC, ZC) {
          for (const QC of zC) {
            CC.font = QC;
            const zC = wC(CC.font),
              nC = bC(QC);
            if (null !== zC && Math.abs(zC - ZC) <= .5 && CC.font.toLowerCase().includes(nC.toLowerCase())) return QC
          }
          return null
        }(CC, [SC, ...pC], MC);
        GC !== SC && function(CC, zC, QC) {
          nC || (nC = !0, Promise.resolve().then((() => ZC(1029))).then((ZC => {
            let {
              IS: wC
            } = ZC;
            wC(new Error("A canvas didn't take canvasTxt's font"), {
              font: CC,
              lM: zC,
              drawnWith: null !== QC && void 0 !== QC ? QC : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(SC, PC, GC);
        const RC = wC(CC.font);
        if (null === GC && null !== RC && RC > 0) {
          const ZC = MC / RC;
          CC.save();
          try {
            return CC.scale(ZC, ZC), {
              height: this.drawLines(CC, zC, QC / ZC, fC / ZC, oC / ZC, qC / ZC, RC).height * ZC
            }
          } finally {
            CC.restore()
          }
        }
        return this.drawLines(CC, zC, QC, fC, oC, qC, MC)
      },
      drawLines: function(CC, zC, ZC, wC, bC, nC, fC) {
        const oC = ZC + bC,
          qC = wC + nC;
        let FC, WC = wC + nC / 2 + fC / 2;
        "right" === this.align ? (FC = oC, CC.textAlign = "right") : "left" === this.align ? (FC = ZC, CC.textAlign = "left") : (FC = ZC + bC / 2, CC.textAlign = "center");
        for (const QC of zC) {
          CC.measureText(QC).width >= bC && (zC = zC.replace(QC, ""))
        }
        zC = (0, QC.bb)(zC);
        const NC = [],
          MC = zC.split("\n"),
          gC = this.justify ? CC.measureText("\u200a").width : 0;
        MC.forEach((zC => {
          let ZC = CC.measureText(zC).width;
          if (ZC <= bC) NC.push(zC);
          else {
            let QC = zC;
            const wC = bC;
            let nC, fC, oC;
            for (ZC = CC.measureText(QC).width; ZC > wC;) {
              for (nC = 0, fC = 0, oC = ""; fC < wC;) nC++, oC = QC.substr(0, nC), fC = CC.measureText(oC).width;
              nC--, oC = oC.substr(0, nC);
              const zC = nC;
              if (" " !== QC.substr(nC, 1)) {
                for (;
                  " " !== QC.substr(nC, 1) && 0 !== nC;) nC--;
                0 === nC && (nC = zC), oC = QC.substr(0, nC)
              }
              oC = this.justify ? this.justifyLine(CC, oC, gC, "\u200a", bC) : oC, QC = QC.substr(nC), ZC = CC.measureText(QC).width, NC.push(oC)
            }
            ZC > 0 && NC.push(QC)
          }
        }));
        const SC = this.lineHeight ? this.lineHeight : this.getTextHeight(CC, zC),
          pC = SC * (NC.length - 1),
          PC = pC / 2;
        let GC = wC;
        "top" === this.vAlign ? WC = wC + fC : "bottom" === this.vAlign ? (WC = qC - pC, GC = qC) : (GC = wC + nC / 2, WC -= PC), NC.forEach((zC => {
          zC = zC.trim(), CC.fillText(zC, FC, WC), WC += SC
        })), this.debug && (CC.lineWidth = 3, CC.strokeStyle = "#00909e", CC.strokeRect(ZC, wC, bC, nC), CC.lineWidth = 2, CC.strokeStyle = "#f6d743", CC.beginPath(), CC.moveTo(FC, wC), CC.lineTo(FC, qC), CC.stroke(), CC.strokeStyle = "#ff6363", CC.beginPath(), CC.moveTo(ZC, GC), CC.lineTo(oC, GC), CC.stroke());
        return {
          height: pC + SC
        }
      },
      getTextHeight: function(CC, zC) {
        const ZC = CC.textBaseline;
        CC.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: QC
        } = CC.measureText(zC);
        return CC.textBaseline = ZC, QC
      },
      justifyLine: function(CC, zC, ZC, QC, wC) {
        const bC = zC.trim(),
          nC = CC.measureText(bC).width,
          fC = bC.split(/\s+/).length - 1,
          oC = Math.floor((wC - nC) / ZC);
        if (fC <= 0 || oC <= 0) return bC;
        const qC = Math.floor(oC / fC);
        let FC = oC - fC * qC,
          WC = [];
        for (let NC = 0; NC < qC; NC++) WC.push(QC);
        WC = WC.join("");
        return bC.replace(/\s+/g, (CC => {
          const zC = FC > 0 ? WC + QC : WC;
          return FC--, CC + zC
        }))
      }
    }
  },
  38493: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => SC,
      f: () => gC,
      j: () => NC,
      n: () => FC,
      q: () => WC
    });
    var QC = ZC(4179),
      wC = ZC(326);
    const bC = 1024,
      nC = 1536,
      fC = 2 * QC.j + 1,
      oC = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      qC = 1.5;

    function FC(CC, zC, ZC) {
      if ("string" !== typeof CC) return zC;
      try {
        const ZC = JSON.parse(CC);
        return ZC && "object" === typeof ZC ? ZC : zC
      } catch (QC) {
        return void 0 !== ZC && console.error(`Couldn't parse ${ZC}`, QC), zC
      }
    }

    function WC(CC) {
      return FC(CC, null, "a leaderboard's rows")
    }

    function NC(CC, zC) {
      var ZC, QC;
      return null !== zC && void 0 !== zC ? zC : {
        status: null !== (ZC = CC.status) && void 0 !== ZC ? ZC : "loading",
        entries: null !== (QC = CC.entries) && void 0 !== QC ? QC : []
      }
    }

    function MC(CC, zC) {
      return "number" === typeof CC && Number.isFinite(CC) && CC > 0 ? CC : zC
    }

    function gC(CC, zC) {
      const ZC = MC(CC.size, 1);
      let QC = MC(CC.width, MC(2.5 * ZC, 2.5)),
        wC = MC(CC.height, MC(3.75 * ZC, 3.75));
      Number.isFinite(bC * wC / QC) && Number.isFinite(nC * QC / wC) || (QC = 2.5, wC = 3.75);
      const fC = wC / QC,
        oC = Math.max(1, Math.min(bC, zC / fC));
      return {
        width: QC,
        height: wC,
        layoutWidth: Math.max(bC, nC / fC),
        layoutHeight: Math.max(nC, bC * fC),
        pixelWidth: Math.round(oC),
        pixelHeight: Math.round(Math.max(1, Math.min(zC, oC * fC)))
      }
    }

    function SC(CC, zC, ZC, nC, FC, WC) {
      CC.setTransform(1, 0, 0, 1, 0, 0), CC.fillStyle = wC.H.defaultNameTagBackground, CC.fillRect(0, 0, zC, ZC), CC.scale(zC / nC.layoutWidth, ZC / nC.layoutHeight), CC.translate((nC.layoutWidth - bC) / 2, 0),
        function(CC, zC, ZC, bC) {
          var nC, FC, WC, NC;
          const {
            top: MC,
            around: gC,
            showPlayerText: SC,
            localPlayerDbId: GC
          } = ZC, {
            whiteUiText: RC,
            grayUiText: AC,
            yellowUiText: xC
          } = wC.H;
          CC.textBaseline = "middle";
          const JC = function(zC, ZC, QC, wC, bC, nC) {
              let fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              CC.font = `bold ${wC}px 'Jetbrains Mono', monospace`, CC.fillStyle = bC, CC.textAlign = fC;
              let oC = zC.replace(/[\r\n\t]/g, " ");
              if (CC.measureText(oC).width > nC) {
                for (; oC.length > 0 && CC.measureText(`${oC}\u2026`).width > nC;) oC = oC.slice(0, -1);
                oC += "\u2026"
              }
              CC.fillText(oC, ZC, QC)
            },
            IC = zC => {
              CC.fillStyle = RC, CC.globalAlpha = .15, CC.fillRect(24, zC, 976, 2), CC.globalAlpha = 1
            },
            iC = null === GC ? null : (0, wC.ac)(GC),
            vC = CC => null !== iC && CC.playerHash === iC,
            eC = pC(MC.entries, QC.l),
            hC = "ready" === MC.status && eC.length > 0,
            KC = null === gC ? [] : pC(gC.entries, fC),
            YC = eC.some(vC),
            dC = null === gC ? null : function(CC) {
              const zC = CC;
              if (!zC || !Number.isFinite(zC.rank) || !Number.isFinite(zC.tied) || !Number.isFinite(zC.total)) return null;
              return zC
            }(gC.standing),
            mC = KC.find(vC),
            HC = eC.find(vC),
            EC = null === dC || void 0 === mC ? null : {
              value: mC.value,
              rank: dC.rank
            },
            lC = PC(eC, void 0 === HC || HC.value === (null === EC || void 0 === EC ? void 0 : EC.value) ? EC : null),
            XC = PC(KC, EC),
            cC = (CC, zC) => {
              const ZC = CC.findIndex(vC);
              return ZC >= 0 ? zC[ZC] : null
            },
            uC = null !== (nC = null !== (FC = null === dC || void 0 === dC ? void 0 : dC.rank) && void 0 !== FC ? FC : cC(KC, XC)) && void 0 !== nC ? nC : cC(eC, lC);
          CC.font = "bold 34px 'Jetbrains Mono', monospace";
          const rC = [...hC ? lC : [], ...YC ? [] : XC],
            sC = Math.min(280, Math.max(0, ...rC.map((zC => CC.measureText(oC.format(zC)).width)))),
            TC = sC <= 80,
            aC = TC ? 80 : 32 + sC,
            tC = TC ? 148 : aC + 28,
            DC = 660 - tC;
          JC(`TOP ${QC.l}  /  ALL TIME`, 24, 52, 28, AC, 976), JC(SC ? String(null !== (WC = zC.title) && void 0 !== WC ? WC : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, RC, 976), JC("RANK", 32, 174, 28, AC, tC - 40), JC("PLAYER", tC, 174, 28, AC, DC), JC(SC ? String(null !== (NC = zC.scoreLabel) && void 0 !== NC ? NC : "Score").slice(0, 24) : "Score", 992, 174, 28, AC, 304, "right"), IC(202);
          const jC = (bC - 232) / (QC.l + qC + fC),
            yC = 208 + QC.l * jC,
            LC = yC + qC * jC,
            UC = (zC, ZC, QC, wC) => {
              const bC = vC(zC);
              CC.fillStyle = bC ? xC : RC, CC.globalAlpha = bC ? .15 : wC ? .035 : 0, CC.fillRect(24, QC - jC / 2 + 1, 976, jC - 2), CC.globalAlpha = 1;
              const nC = bC ? xC : RC;
              JC(oC.format(ZC), aC, QC, 34, nC, TC ? 80 : sC, TC ? "center" : "right"), JC(SC ? String(zC.name).slice(0, 64) : "Player", tC, QC, 34, nC, DC);
              const fC = oC.format(zC.value);
              JC(CC.measureText(fC).width > 304 ? zC.value.toExponential(6) : fC, 992, QC, 34, nC, 304, "right")
            };
          if (hC)
            for (const [QC, wC] of eC.entries()) UC(wC, lC[QC], 208 + (QC + .5) * jC, QC % 2 === 0);
          else {
            const CC = "error" === MC.status,
              zC = CC ? "Couldn't load leaderboard" : "ready" === MC.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZC = CC ? "Trying again shortly" : "ready" === MC.status ? "Be the first on the board!" : "Fetching the top players",
              QC = (208 + yC) / 2;
            JC(zC, 512, QC - 28, 40, CC ? wC.H.redUiText : RC, 960, "center"), JC(ZC, 512, QC + 27, 30, AC, 960, "center")
          }
          const BC = yC + qC * jC / 2;
          if (null === uC) IC(BC);
          else {
            const zC = null === dC ? 0 : dC.tied - 1,
              ZC = `YOUR RANK #${oC.format(uC)}${null===dC?"":` of ${oC.format(dC.total)}`}`;
            CC.font = "bold 36px 'Jetbrains Mono', monospace";
            const QC = Math.max(20, Math.min(36, Math.floor(34560 / CC.measureText(ZC).width)));
            JC(ZC, 512, BC - (zC > 0 ? 15 : 0), QC, xC, 960, "center"), zC > 0 && JC(`Tied with ${oC.format(zC)} other${1===zC?"":"s"}`, 512, BC + 24, 24, AC, 960, "center")
          }
          if (null === gC) return;
          const OC = LC + fC * jC / 2;
          if (YC) JC(`You're in the top ${QC.l}!`, 512, OC, 40, xC, 960, "center");
          else if (0 === KC.length) JC("You're not on this board yet", 512, OC, 34, AC, 960, "center");
          else
            for (const [QC, wC] of KC.entries()) UC(wC, XC[QC], LC + (QC + .5) * jC, QC % 2 === 0)
        }(CC, FC, WC, nC.layoutHeight)
    }

    function pC(CC, zC) {
      return Array.isArray(CC) ? CC.slice(0, zC).filter((CC => CC && Number.isFinite(CC.rank) && Number.isFinite(CC.value))) : []
    }

    function PC(CC, zC) {
      const ZC = [];
      let QC = !1;
      return CC.forEach(((wC, bC) => {
        if (null !== zC && wC.value === zC.value) return void ZC.push(zC.rank);
        const nC = bC > 0 && wC.value === CC[bC - 1].value;
        nC || (QC = 0 === bC && 1 !== wC.rank), ZC.push(nC && !QC ? ZC[bC - 1] : wC.rank)
      })), ZC
    }
  },
  38692: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      h: () => bC
    });
    const QC = 32;

    function wC(CC) {
      return Array.from(CC).length
    }

    function bC(CC) {
      const zC = [""];
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wC = "";
      const bC = () => {
        zC.push(""), ZC = 0, wC = ""
      };
      for (const nC of CC.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(nC)) bC();
        else if (/^\s+$/.test(nC)) wC += nC;
      else if (nC.length > 0) {
        const CC = Array.from(nC);
        ZC > 0 && ZC + wC.length + CC.length > QC && bC(), zC[zC.length - 1] += wC, ZC += wC.length, wC = "";
        for (const wC of CC) ZC >= QC && bC(), zC[zC.length - 1] += wC, ZC++
      }
      return zC[zC.length - 1] += wC, zC
    }
  },
  50695: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      WasmPreviewHost: () => ez,
      pageBuiltInAnimationPack: () => NC,
      pagePreviews: () => bz,
      previewModule: () => BC
    });
    var QC = ZC(2856),
      wC = ZC(603);
    const bC = "[bloxd-wasm-client]";

    function nC(CC) {
      const zC = {
        wasm: "unknown",
        client: String(wC.e)
      };
      try {
        var ZC;
        zC.wasm = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.YW()) && void 0 !== ZC ? ZC : zC.wasm
      } catch {}
      return zC
    }
    async function fC(CC) {
      if (CC.length < 2 || 31 !== CC[0] || 139 !== CC[1]) return CC;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: zC
        } = await Promise.resolve().then((() => ZC(2814)));
        return zC(CC)
      }
      const zC = new Blob([CC]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(zC).arrayBuffer())
    }

    function oC(CC, zC, QC, wC) {
      Promise.resolve().then((() => ZC(40574))).then((ZC => {
        let {
          reportDataLoadFailure: bC
        } = ZC;
        bC(CC, zC, QC, wC)
      }), (zC => {
        console.warn(`${bC} ${CC} didn't load, and the report couldn't be sent`, QC.error, zC)
      }))
    }
    const qC = [3e4, 12e4, 3e5];
    class FC {
      constructor(CC) {
        this.deps = CC, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((CC => {
          this.resolveSet = CC
        }))
      }
      provide(CC) {
        return this.loading ??= this.load(CC), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(CC) {
        const zC = nC(CC),
          ZC = await async function(CC, zC) {
            let ZC;
            try {
              ZC = await CC()
            } catch (QC) {
              return {
                stage: "fetch",
                error: QC
              }
            }
            try {
              return zC(ZC) ? null : {
                stage: "decode",
                error: null
              }
            } catch (QC) {
              return {
                stage: "decode",
                error: QC
              }
            }
          }((() => this.deps.fetch()), (zC => {
            const ZC = CC.WbC(zC);
            return ZC && this.resolveSet(zC), ZC
          }));
        if (null !== ZC) {
          if ("fetch" === ZC.stage) {
            this.loading = null;
            const zC = qC[this.retries++];
            void 0 !== zC && this.deps.later((() => {
              this.provide(CC)
            }), zC)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(ZC, zC))
        }
      }
    }
    let WC = null;

    function NC() {
      return WC ??= new FC({
        fetch: async () => fC(await (0, QC.M)(MC(), {
          priority: "low"
        })),
        onFailed: (CC, zC) => {
          oC("builtInAnimations", MC(), CC, zC)
        },
        later: (CC, zC) => {
          setTimeout(CC, zC)
        }
      }), WC
    }

    function MC() {
      return ZC(50703)
    }
    var gC = ZC(2848),
      SC = ZC(1149),
      pC = ZC(304),
      PC = ZC(296),
      GC = ZC(615),
      RC = ZC(4727),
      AC = ZC(40542),
      xC = ZC(40764),
      JC = (ZC(40598), ZC(40617)),
      IC = ZC(40624),
      iC = ZC(40633),
      vC = ZC(40552),
      eC = ZC(40787),
      hC = ZC(40795),
      KC = ZC(40540),
      YC = ZC(40810),
      dC = ZC(40675),
      mC = ZC(40662),
      HC = ZC(40723),
      EC = ZC(40772),
      lC = ZC(42390),
      XC = ZC(36180),
      cC = ZC(3633);
    const uC = "[bloxd-previews]",
      rC = 4e5,
      sC = 0,
      TC = 1,
      aC = 2,
      tC = 1,
      DC = 2,
      jC = 3,
      yC = 0,
      LC = 1,
      UC = 2;

    function BC(CC) {
      const zC = CC,
        ZC = (0, AC.O)(CC),
        QC = (0, AC.o)(CC);
      return null !== ZC && null !== QC && "function" === typeof zC.fbC && "function" === typeof zC.obC && "function" === typeof zC.FbC ? zC : null
    }

    function OC(CC, zC, ZC) {
      let [QC, wC] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [CC, zC], bC = Math.min(Number.isFinite(ZC) && ZC > 0 ? ZC : 1, 2);
      const nC = Math.max(0, QC, CC) * Math.max(0, wC, zC) * bC * bC;
      return nC > rC && (bC *= Math.sqrt(rC / nC)), [Math.max(1, Math.floor(Math.max(0, CC) * bC)), Math.max(1, Math.floor(Math.max(0, zC) * bC))]
    }

    function kC() {
      return ZC(50712)
    }
    async function VC(CC, zC, QC) {
      let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === CC && (0, KC.z)();
      const bC = await (0, KC.P)();
      if (null === bC || (0, AC.q)(bC) || (0, KC.b)()) return;
      const fC = "webgpu" === bC.backend;
      if (!fC && "lost" !== CC) return;
      const oC = fC && (0, PC.o)(bC.adapter, null !== QC && void 0 !== QC ? QC : null, "lost" === CC, wC),
        qC = fC ? (0, AC.W)(CC) : null;
      if (null === qC) {
        fC || (0, GC.v)(), (0, KC.o)();
        try {
          await async function(CC, zC, QC, wC, bC) {
            let {
              restoreLost: fC,
              adapterRemembered: oC
            } = bC;
            const qC = (0, gC.P)(),
              {
                flushCrashReports: FC,
                reportRenderReload: WC
              } = await Promise.resolve().then((() => ZC(40574)));
            WC(CC.backend, wC, nC(qC ? (0, gC.z)() : null), {
              cause: zC,
              restoreLost: fC,
              adapterRemembered: oC,
              ...Cz(CC, zC, QC)
            }), await FC(dC.b)
          }(bC, CC, zC, null !== QC && void 0 !== QC ? QC : "start_failed" === CC ? 0 : 1, {
            restoreLost: wC,
            adapterRemembered: oC
          })
        } catch (WC) {
          console.warn(`${uC} ${bC.backend} failed at home (${CC}), and its report couldn't be sent`, WC)
        }(0, dC.j)()
      } else {
        var FC;
        const QC = Cz(bC, CC, zC),
          wC = `WebGPU failed at home (${CC}${void 0===QC.error?"":`: ${QC.error instanceof Error?QC.error.message:(0,XC.m)(QC.error)}`}) and ${qC}`;
        console.warn(`${uC} ${wC}: the previews stop`, null !== (FC = QC.error) && void 0 !== FC ? FC : ""), (0, KC.r)(wC);
        try {
          const {
            countRenderLost: zC
          } = await Promise.resolve().then((() => ZC(40574)));
          zC(CC, QC.error, QC.context)
        } catch (NC) {
          console.warn(`${uC} WebGPU failed at home (${CC}), and its count couldn't be sent`, NC)
        }
      }
    }

    function Cz(CC, zC, ZC) {
      var QC;
      let {
        adapter: wC
      } = CC;
      const bC = (0, gC.P)();
      return {
        error: "lost" === zC && null !== (QC = (0, AC.Z)(bC ? (0, AC.O)((0, gC.z)()) : null)) && void 0 !== QC ? QC : ZC,
        context: {
          adapter: wC,
          boundAtMs: "start_failed" === zC ? null : (0, KC.L)(),
          indirectHangs: (0, KC.B)(),
          restoresSkipped: (0, KC.M)()
        }
      }
    }
    async function zz() {
      if (!(0, gC.P)()) {
        const CC = await (0, KC.P)();
        if (null === CC || (0, AC.q)(CC)) return null;
        if (await (0, YC.b)(await CC.load()), !(0, gC.P)()) return null
      }
      return BC((0, gC.z)())
    }
    class Zz {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.page = CC, this.host = zC, this.id = ZC, this.canvas = QC, this.size = wC, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const nC = {
            ...bC.images,
            glbUrl: CC => {
              var zC;
              return null !== (zC = this.models.drawnUrl(CC)) && void 0 !== zC ? zC : bC.images.glbUrl(CC)
            }
          },
          fC = zC => CC.modelFile(zC);
        this.images = new xC.e(nC, (CC => {
          console.warn(`${uC} image ${CC.key.kind}:${CC.key.index}:${CC.key.word} failed`, CC.error)
        }), {
          fetchFile: fC,
          fetchImage: zC => CC.imageFile(zC)
        }), CC.startModels(), this.models = new JC.h(bC.files, ((zC, ZC) => CC.buildModel(zC, ZC)), (CC => {
          console.warn(`${uC} model file ${CC.file} (${CC.url}) failed`, CC.error)
        }), {
          fetchFile: fC,
          onWritten: (CC, zC) => {
            this.images.glbWritten(CC, zC)
          },
          onTaken: (CC, zC) => {
            this.images.glbTaken(CC, zC)
          }
        }), this.write = (CC, zC, ZC) => {
          if (this.closed) return !0;
          if (CC === JC.c) {
            const CC = new DataView(ZC.buffer, ZC.byteOffset, iC.c),
              QC = CC.getUint32(0, !0),
              wC = CC.getUint32(iC.f, !0),
              bC = this.page.hostCall(UC, (() => this.host.gnC(this.id, QC, zC, ZC.subarray(iC.c))));
            return this.outcomes.push([wC, bC]), !0
          }
          return CC === xC.c && (this.page.hostCall(void 0, (() => {
            this.host.pnC(this.id, ZC)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(CC, zC, ZC) {
        if (this.closed) return;
        const [QC, wC] = OC(CC, zC, this.page.dpr(), ZC);
        QC === this.size[0] && wC === this.size[1] || (this.size = [QC, wC], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, QC, wC)
        })))
      }
      setMob(CC, zC, ZC, QC) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xnC(this.id, CC, zC, ZC, QC))))
      }
      setPet(CC, zC, ZC, QC) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.InC(this.id, CC, zC, ZC, QC))))
      }
      setPlayer(CC, zC, ZC) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.GnC(this.id, CC, zC, ZC))))
      }
      setFigure(CC, zC, ZC, QC) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.RnC(this.id, CC, zC, ZC, QC))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const CC = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === CC || CC.length < 3 ? null : {
          alpha: CC[0],
          beta: CC[1],
          radius: CC[2]
        }
      }
      setOrbit(CC) {
        let {
          alpha: zC,
          beta: ZC,
          radius: QC
        } = CC;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.JnC(this.id, zC, ZC, QC)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((CC => {
          this.settled.push(CC)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, eC.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [CC, zC] of this.outcomes) {
          const ZC = zC === yC ? [] : [zC === LC ? CC : (CC | JC.e) >>> 0];
          this.models.taken(CC, ZC)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(CC) {
        let zC = !1;
        if (CC) {
          const CC = this.host.enC(this.id);
          for (const zC of CC) this.models.request(zC);
          const ZC = this.host.vnC(this.id);
          ZC.length > 0 && this.images.onEvent(ZC), zC = CC.length > 0 || ZC.length > 0
        }
        const ZC = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          QC = zC || ZC > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = QC ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(CC) {
        this.page.hostCall(void 0, (() => {
          const zC = this.host.close(this.id);
          zC.length > 0 && this.images.onEvent(zC), this.page.isTrapped || CC.FbC(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const CC = this.settled;
        this.settled = [];
        for (const zC of CC) zC()
      }
    }
    class Qz {
      constructor(CC) {
        this.deps = CC, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: CC => {
            this.modelsFailed(CC)
          },
          onDecoderFailed: CC => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${uC} the Draco decoder didn't load: models waiting on it won't draw`, CC))
          },
          onWorkerLost: CC => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${uC} a model worker was lost: ${CC}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.zg = {
          setShaderPack: (CC, zC, ZC, QC, wC) => (this.shaderPackArgs = [CC, zC, ZC, QC, wC], this.handOverShaderPack(), !0)
        }, this.frame = CC => {
          this.frameId = null;
          const zC = this.host;
          if (null !== zC && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(zC, CC)
          } catch (ZC) {
            if (!this.stopIfTrapped(ZC) && (this.stop(), (0, AC.t)(ZC))) return void this.deps.onRenderFailed("frames_refused", ZC);
            console.warn(`${uC} the previews stopped: their frame threw`, ZC)
          }
        }, CC.pack.onChange((() => {
          this.packChanged()
        })), CC.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const CC of this.previews.values()) CC.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var CC, zC;
        return null !== (CC = null === (zC = this.host) || void 0 === zC ? void 0 : zC.attached()) && void 0 !== CC && CC
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((CC, zC) => CC + zC), 0) / this.costs.length
      }
      async bindSession(CC, zC, ZC) {
        const QC = this.binding,
          wC = this.sessionEnds;
        try {
          const bC = this.hostOf(CC);
          if (!bC.SnC()) {
            const zC = (0, HC.h)().sampleCount,
              nC = await ZC(zC);
            if (this.sessionEnds !== wC) return this.keepRendererOfEndedSession(CC, bC, nC, zC, QC), zC;
            if (!bC.VbC(nC)) throw new Error("the page has a renderer already");
            (0, KC.v)(performance.now()), this.samples = zC, (0, EC.i)((0, AC.o)(CC))
          }
          if (!bC.attach(zC)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === QC && this.endBinding()
        }
      }
      keepRendererOfEndedSession(CC, zC, ZC, QC, wC) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== wC) try {
          ZC.free()
        } catch (bC) {
          console.warn(`${uC} an ended session's renderer didn't free`, bC)
        } else zC.VbC(ZC) && ((0, KC.v)(performance.now()), this.samples = QC, (0, EC.i)(this.registryOf(CC)))
      }
      async beginSession() {
        var CC;
        let zC = () => {};
        const ZC = new Promise((CC => {
          zC = CC
        }));
        this.binding = {
          done: ZC,
          release: zC
        }, await (null === (CC = this.opening) || void 0 === CC ? void 0 : CC.catch((() => null)));
        const QC = this.pageCanvas;
        return this.pageCanvas = null, QC
      }
      endSession(CC) {
        var zC, ZC;
        if (this.sessionEnds++, this.lastEndReturned = CC, this.endBinding(), CC) {
          try {
            var QC;
            null === (QC = this.host) || void 0 === QC || QC.detach()
          } catch (wC) {
            return void console.warn(`${uC} the session's core kept the page's renderer`, wC)
          }!0 === (null === (zC = this.host) || void 0 === zC ? void 0 : zC.attached()) && console.warn(`${uC} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (ZC = this.host) || void 0 === ZC ? void 0 : ZC.SnC()) && (0, EC.i)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var CC;
        null === (CC = this.binding) || void 0 === CC || CC.release(), this.binding = null
      }
      async openPreview(CC, zC, ZC, QC) {
        const wC = await this.renderingHost(),
          bC = this.module;
        if (null === wC || null === bC) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(wC), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(bC)
        }));
        const nC = this.nextId++,
          fC = this.deps.createCanvas(),
          [oC, qC] = OC(zC, ZC, this.deps.dpr(), QC);
        fC.width = oC, fC.height = qC;
        if (!this.guarded((() => (bC.obC(nC, fC), wC.open(nC, oC, qC, CC))))) throw this.hostCall(void 0, (() => {
          bC.FbC(nC)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const FC = new Zz(this, wC, nC, fC, [oC, qC], this.deps);
        return this.previews.set(nC, FC), this.startFrames(), FC
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, KC.b)() || null !== (0, KC.K)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((CC => {
          null === CC || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(CC) {
        return this.prefetchedOr(CC, this.deps.fetchModel)
      }
      imageFile(CC) {
        return this.prefetchedOr(CC, QC.M)
      }
      prefetchedOr(CC, zC) {
        const ZC = this.prefetchedFiles.get(CC);
        return void 0 === ZC ? zC(CC) : ZC.catch((() => zC(CC)))
      }
      async prefetchPlayerFiles() {
        const CC = this.deps.playerFile().then((CC => this.deps.files.url(CC))),
          zC = await Promise.all([CC, this.deps.images.lifeformAtlasUrl(eC.d)]).catch((() => null));
        if (null === zC) return;
        const [ZC, QC] = zC, wC = (CC, zC) => {
          if (null === CC) return;
          const ZC = zC(CC);
          this.prefetchedFiles.set(CC, ZC), ZC.catch((() => {
            this.prefetchedFiles.delete(CC)
          }))
        };
        wC(ZC, (CC => this.modelFile(CC))), wC(QC, (CC => this.imageFile(CC)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((CC => (null === CC && (this.moduleLoad = null), CC)), (CC => {
          throw this.moduleLoad = null, CC
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((CC => {
          throw this.animationTable = null, CC
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((CC => (this.modelsFailed(CC), () => new Promise((() => {})))))
      }
      buildModel(CC, zC) {
        return this.startModels(), this.models.then((ZC => ZC(CC, zC))).then((CC => this.unavailable ? new Promise((() => {})) : CC))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(CC) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${uC} the model workers didn't start: models won't draw in the previews`, CC))
      }
      called(CC) {
        return 0 !== CC && this.logError(CC, 0), CC
      }
      closePreview(CC) {
        this.previews.delete(CC.id), null !== this.module && CC.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(CC) {
        if (null !== this.module && this.module !== CC) throw new Error("a second renderer module on one page");
        return this.module = CC, null === this.host && (this.host = this.guarded((() => new CC.fbC)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: CC
        } = this;
        null !== CC && this.outsideCall("the game's start or end", (() => {
          CC.AnC(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: CC,
          shaderPackArgs: zC
        } = this;
        null !== CC && null !== zC && this.outsideCall("the shader pack's hand-over", (() => {
          CC.ZQC(...zC) || console.warn(`${uC} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(CC, zC) {
        try {
          this.hostCall(void 0, zC)
        } catch (ZC) {
          this.stop(), console.warn(`${uC} the previews stopped: ${CC} threw`, ZC)
        }
      }
      async loadAnimations(CC) {
        const zC = nC(null),
          ZC = this.module;
        try {
          zC.wasm = null === ZC ? zC.wasm : this.hostCall(zC.wasm, (() => ZC.YW()))
        } catch {}
        let QC, wC;
        try {
          QC = await this.fetchAnimationTable()
        } catch (bC) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: bC
          }, zC)
        }
        if (!this.settleIfTrapped()) {
          try {
            wC = CC.PnC(QC)
          } catch (bC) {
            if (this.stopIfTrapped(bC)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: bC
            }, zC)
          }
          wC || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, zC)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const CC = this.host;
        return null !== CC && this.guarded((() => CC.SnC())) ? CC : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var CC;
        const zC = null !== (CC = this.module) && void 0 !== CC ? CC : await this.loadModule();
        if (null === zC) return null;
        const ZC = this.hostOf(zC),
          QC = () => this.guarded((() => ZC.SnC()));
        if (QC()) return ZC;
        if (null !== (0, KC.K)() || (0, KC.b)()) return null;
        const wC = this.deps.createCanvas();
        wC.width = 1, wC.height = 1;
        const bC = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const nC = (0, HC.h)().sampleCount;
        let fC;
        try {
          fC = await (0, AC.y)(zC, "previewRenderer", wC, nC, lC.c, bC)
        } catch (oC) {
          throw oC instanceof vC.e ? this.stopForTrap(oC) : (0, AC.w)(oC) && await this.deps.onRenderFailed("start_failed", oC), oC
        }
        return this.guarded((() => ZC.VbC(fC))) ? ((0, KC.v)(performance.now()), this.samples = nC, this.pageCanvas = wC, (0, EC.i)(this.registryOf(zC)), ZC) : QC() ? ZC : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(CC, zC) {
        for (const nC of this.previews.values()) nC.feed();
        if (this.stopped) return;
        const ZC = this.deps.now(),
          QC = CC.frame(zC);
        this.costs.push(this.deps.now() - ZC), this.costs.length > 120 && this.costs.shift();
        const wC = 0 !== (256 & QC),
          bC = 255 & QC;
        for (const nC of this.previews.values()) {
          if (this.stopped) return;
          nC.collect(wC)
        }
        if (!this.stopped) {
          if (0 !== (512 & QC) && this.deps.onDrew(), wC) {
            const zC = CC.inC();
            for (let CC = 0; CC + 1 < zC.length; CC += 2) zC[CC] === RC.N.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(zC[CC], zC[CC + 1])
          }
          if (bC !== tC) {
            if (bC === DC) return this.stop(), void this.deps.onFatal(CC.WnC(), CC.NnC());
            if (bC === jC) return this.stop(), void console.warn(`${uC} the previews stopped: the page's renderer went with its session`);
            (0, pC.b)(zC), this.startFrames()
          } else {
            const zC = CC.MnC();
            this.stop();
            const ZC = zC[2] === RC.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(ZC, void 0, zC[1], zC[2] === RC.Vc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, vC.j)(this.module) || "failed" === (0, gC.y)())
      }
      hostCall(CC, zC) {
        if (this.settleIfTrapped()) return CC;
        try {
          return zC()
        } catch (ZC) {
          if (this.stopIfTrapped(ZC)) return CC;
          throw ZC
        }
      }
      guarded(CC) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return CC()
        } catch (zC) {
          throw this.stopIfTrapped(zC), zC
        }
      }
      registryOf(CC) {
        return {
          TZC: (zC, ZC) => {
            this.hostCall(void 0, (() => {
              CC.TZC(zC, ZC)
            }))
          },
          aZC: zC => {
            this.hostCall(void 0, (() => {
              CC.aZC(zC)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, EC.i)(null)), !0)
      }
      stopIfTrapped(CC) {
        return !(null === this.module || !(0, vC.k)(this.module, CC)) && (this.stopForTrap(CC), !0)
      }
      stopForTrap(CC) {
        this.stop(), (0, EC.i)(null), (0, cC.g)("previews", CC)
      }
      stop() {
        this.stopped = !0;
        for (const CC of this.previews.values()) CC.abandon()
      }
      logError(CC, zC) {
        const ZC = `${CC}:${zC}`;
        this.loggedErrors.has(ZC) || (this.loggedErrors.add(ZC), console.warn(`${uC} error ${CC} (detail ${zC})`))
      }
    }
    let wz = null;

    function bz() {
      return wz ??= new Qz(function() {
        const CC = (0, IC.p)(SC.clientSideServerUrls.staticUrl, {
          packUrl: CC => {
            var zC, ZC;
            return null !== (zC = null === (ZC = eC.g.current) || void 0 === ZC ? void 0 : ZC.modelUrl(CC)) && void 0 !== zC ? zC : null
          }
        });
        return {
          loadModule: zz,
          startModels: async CC => {
            const {
              pageModelPool: zC
            } = await ZC.e(42).then((() => ZC(50772))), {
              pool: QC
            } = zC(CC);
            return (CC, zC) => QC.build(CC, zC)
          },
          fetchAnimations: async () => fC(await (0, QC.M)(kC())),
          playerFile: async () => (await (0, IC.m)()).PLAYER_FILE,
          onAnimationsFailed: (CC, zC) => {
            oC("previewAnimations", kC(), CC, zC)
          },
          provideBuiltInAnimationPack: CC => {
            NC().provide(CC)
          },
          openExtras: KC.E,
          files: CC,
          images: (0, eC.m)((0, xC.l)(CC.url), (() => eC.g.current)),
          pack: eC.g,
          game: hC.e,
          fetchModel: CC => (0, IC.j)(CC),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: CC => requestAnimationFrame(CC),
          cancelFrame: CC => {
            cancelAnimationFrame(CC)
          },
          onRenderFailed: VC,
          onFatal: (CC, zC) => {
            console.error(`${uC} the previews stopped: renderer error ${CC} (detail ${zC})`)
          },
          onDeviceLost: () => {
            (0, KC.G)() === mC.d.webgpu && PC.G.lost()
          },
          onDrew: () => {
            PC.G.drew()
          }
        }
      }()), wz
    }
    var nz = ZC(590),
      fz = ZC(38454),
      oz = ZC(3276);
    const qz = {
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
    const Fz = "[bloxd-previews]",
      Wz = new Uint32Array(5);

    function Nz(CC) {
      return nz.i.indexOf(CC)
    }
    const Mz = new WeakSet;

    function gz(CC) {
      const zC = (0, fz.c)(CC),
        ZC = null === zC ? -1 : Sz(zC);
      return -1 !== ZC ? ZC : (Mz.has(CC) || (Mz.add(CC), console.warn(`${Fz} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Sz(CC) {
      var zC;
      return null !== (zC = qz[CC]) && void 0 !== zC ? zC : -1
    }

    function pz(CC, zC) {
      const {
        canvas: ZC
      } = zC;
      ZC.style.width = "100%", ZC.style.height = "100%", ZC.style.display = "block", CC.appendChild(ZC)
    }

    function Pz(CC) {
      const zC = CC.getBoundingClientRect();
      return [zC.width, zC.height]
    }
    class Gz {
      constructor(CC, zC) {
        this.preview = CC, this.showView = zC
      }
      show(CC) {
        this.showView(this.preview, CC)
      }
      resize(CC, zC) {
        this.preview.resize(CC, zC)
      }
      close() {
        this.preview.close()
      }
    }
    class Rz {
      constructor(CC) {
        this.preview = CC, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(CC) {
          const {
            canvas: zC
          } = CC;
          let ZC = null;
          const QC = CC => {
              var QC;
              ZC = {
                pointer: CC.pointerId,
                x: CC.clientX,
                y: CC.clientY
              }, null === (QC = zC.setPointerCapture) || void 0 === QC || QC.call(zC, CC.pointerId)
            },
            wC = zC => {
              var QC;
              const wC = CC.orbit;
              if ((null === (QC = ZC) || void 0 === QC ? void 0 : QC.pointer) !== zC.pointerId || null === wC) return;
              const bC = zC.clientX - ZC.x,
                nC = zC.clientY - ZC.y;
              ZC = {
                ...ZC,
                x: zC.clientX,
                y: zC.clientY
              }, CC.setOrbit({
                alpha: wC.alpha - .01 * bC,
                beta: Math.min(Math.PI - .01, Math.max(.01, wC.beta - .01 * nC)),
                radius: wC.radius
              })
            },
            bC = CC => {
              var zC;
              (null === (zC = ZC) || void 0 === zC ? void 0 : zC.pointer) === CC.pointerId && (ZC = null)
            },
            nC = zC => {
              const ZC = CC.orbit;
              if (null === ZC) return;
              zC.preventDefault();
              const QC = zC.deltaY * (zC.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : zC.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                wC = Math.min(100, Math.max(5, ZC.radius + .08 * QC));
              CC.setOrbit({
                ...ZC,
                radius: wC
              })
            };
          return zC.style.touchAction = "none", zC.addEventListener("pointerdown", QC), zC.addEventListener("pointermove", wC), zC.addEventListener("pointerup", bC), zC.addEventListener("pointercancel", bC), zC.addEventListener("wheel", nC, {
            passive: !1
          }), () => {
            zC.removeEventListener("pointerdown", QC), zC.removeEventListener("pointermove", wC), zC.removeEventListener("pointerup", bC), zC.removeEventListener("pointercancel", bC), zC.removeEventListener("wheel", nC)
          }
        }(CC), this.dev = {
          canvas: () => CC.canvas,
          isolateHead: () => {
            console.warn(`${Fz} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = CC.untilSettled().then((() => {
          if (CC.isStopped) throw new Error(`${Fz} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(CC, zC) {
        this.cosmetics[CC] = zC, this.apply()
      }
      playEmote(CC) {
        null === CC || CC !== this.emote ? (this.emote = CC, this.apply()) : this.preview.replay()
      }
      untilDrawn(CC) {
        return this.preview.untilSettled()
      }
      setOrbit(CC) {
        let {
          yaw: zC,
          pitch: ZC,
          radius: QC
        } = CC;
        const wC = this.preview.orbit;
        null !== wC && this.preview.setOrbit({
          alpha: zC,
          beta: ZC,
          radius: null !== QC && void 0 !== QC ? QC : wC.radius
        })
      }
      resetCamera() {}
      resize(CC, zC) {
        this.preview.resize(CC, zC)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var CC;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Wz, null === (CC = this.emote) ? -1 : Sz(CC))
      }
    }

    function Az(CC, zC) {
      let {
        mobType: ZC,
        variation: QC,
        animation: wC
      } = zC;
      CC.setMob(Nz(ZC), null !== QC && void 0 !== QC ? QC : "", 1, gz(wC))
    }

    function xz(CC, zC) {
      let {
        mobType: ZC,
        variation: QC,
        metaInfo: wC,
        tamed: bC
      } = zC;
      CC.setPet(Nz(ZC), QC, wC, bC)
    }
    const Jz = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Iz {
      constructor(CC, zC, ZC, QC) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, CC(ZC.width, QC[1], QC).then((CC => {
          if (this.closed) return void CC.close();
          const {
            style: ZC
          } = CC.canvas;
          ZC.position = "absolute", ZC.top = "0", ZC.visibility = "hidden", pz(zC, CC), this.preview = CC, this.apply()
        })).catch((CC => {
          console.error(`${Fz} couldn't open a lineup figure`, CC)
        }))
      }
      update(CC, zC, ZC, QC, wC) {
        this.figure = CC, this.shown = zC, this.order = ZC, this.span = QC, this.lineup = wC, this.apply()
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.preview) || void 0 === CC || CC.close(), this.preview = null
      }
      apply() {
        const {
          preview: CC,
          figure: zC,
          lineup: ZC
        } = this;
        if (null === CC || null === zC) return;
        if (this.given !== zC) {
          var QC;
          this.given = zC, this.loaded = !1;
          const ZC = null === zC.Hx ? 0 : null !== (QC = (0, oz.b)(zC.Hx)) && void 0 !== QC ? QC : 0;
          CC.setFigure(function(CC) {
            return JSON.stringify(Object.fromEntries(CC.cosmetics))
          }(zC), ZC, gz(zC.animation), zC.size), CC.untilSettled().then((() => {
            this.given === zC && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: wC,
          width: bC
        } = this.span;
        CC.resize(bC, ZC[1], ZC);
        const {
          style: nC
        } = CC.canvas;
        nC.left = `${wC}px`, nC.width = `${bC}px`, nC.zIndex = this.order, nC.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class iz {
      constructor(CC, zC) {
        this.open = zC, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Pz(CC), this.layer = document.createElement("div");
        const {
          style: ZC
        } = this.layer;
        ZC.position = "relative", ZC.isolation = "isolate", ZC.overflow = "hidden", ZC.width = "100%", ZC.height = "100%", ZC.pointerEvents = "none", CC.appendChild(this.layer)
      }
      show(CC) {
        this.view = CC, this.place()
      }
      resize(CC, zC) {
        this.size = [CC, zC], this.place()
      }
      close() {
        for (const CC of this.figures) CC.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: CC,
          shown: zC
        } = this.view;
        for (const QC of this.figures.splice(CC.length)) QC.close();
        const {
          size: ZC
        } = this;
        CC.forEach(((QC, wC) => {
          var bC;
          const nC = function(CC, zC, ZC, QC) {
            let [wC, bC] = QC;
            const nC = (CC + .5) * wC / zC,
              fC = Math.min(Math.max(wC / zC, 2 * ZC * bC), 2 * Math.max(nC, wC - nC));
            return {
              left: nC - fC / 2,
              width: fC
            }
          }(wC, CC.length, function(CC) {
            let {
              animation: zC,
              size: ZC
            } = CC;
            const {
              aimed: QC,
              ready: wC
            } = Jz;
            return (gz(zC) === qz.gunAimed ? QC : wC) * ZC
          }(QC), ZC);
          this.figures[wC] ??= new Iz(this.open, this.layer, nC, ZC), this.figures[wC].update(QC, null !== (bC = zC[wC]) && void 0 !== bC && bC, function(CC, zC) {
            return String(Math.round(1e3 * CC) + zC)
          }(QC.size, wC), nC, ZC)
        }))
      }
    }
    const vz = {
      player: TC,
      store: aC
    };
    class ez {
      constructor(CC) {
        this.page = CC
      }
      async openMob(CC) {
        return new Gz(await this.open(CC, sC), Az)
      }
      async openPet(CC) {
        return new Gz(await this.open(CC, sC), xz)
      }
      openMobLineup(CC) {
        return new iz(CC, ((CC, zC, ZC) => this.page.openPreview(sC, CC, zC, ZC)))
      }
      async openCharacter(CC, zC) {
        return new Rz(await this.open(CC, vz[zC]))
      }
      async open(CC, zC) {
        const [ZC, QC] = Pz(CC), wC = await this.page.openPreview(zC, ZC, QC);
        return pz(CC, wC), wC
      }
    }
  },
  36630: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => MC,
      C: () => gC,
      D: () => SC,
      F: () => PC,
      e: () => QC,
      i: () => wC,
      j: () => NC,
      n: () => pC,
      o: () => FC,
      s: () => GC,
      w: () => oC,
      x: () => qC
    });
    const QC = [{
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

    function wC(CC, zC) {
      const {
        numLines: ZC,
        charsPerLine: wC
      } = QC[zC];
      return RC(CC, ZC, wC, !1)
    }
    const bC = 7 / 8,
      nC = .25,
      fC = 8;

    function oC(CC, zC) {
      return {
        width: Math.min(CC, fC) - 2 * nC,
        height: Math.min(zC, fC) - 2 * nC
      }
    }

    function qC(CC, zC, ZC) {
      const wC = oC(CC, zC),
        {
          numLines: nC,
          charsPerLine: fC
        } = QC[ZC];
      return {
        numLines: Math.max(1, Math.floor(nC / bC * wC.height)),
        charsPerLine: Math.max(1, Math.floor(fC * wC.width))
      }
    }

    function FC(CC, zC, ZC, QC) {
      const {
        numLines: wC,
        charsPerLine: bC
      } = qC(ZC, QC, zC);
      return RC(CC, wC, bC, !1)
    }
    const WC = 32e3;

    function NC(CC) {
      return CC.slice(0, WC)
    }
    const MC = 512e3,
      gC = 64,
      SC = MC;

    function pC(CC, zC) {
      const ZC = Math.max(0, SC - zC),
        QC = Math.min(MC, ZC);
      return CC.slice(0, QC)
    }
    const PC = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      hq: {
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

    function GC(CC, zC) {
      const {
        numLines: ZC,
        charsPerLine: QC
      } = PC[zC];
      return RC(CC, ZC, QC, !1)
    }

    function RC(CC, zC, ZC, QC, wC) {
      (wC || QC) && (CC = CC.slice(0, null !== wC && void 0 !== wC ? wC : zC * ZC));
      const bC = CC.split("\n");
      if (bC.length > zC && bC.splice(zC, bC.length - zC), !QC)
        for (let nC = 0; nC < bC.length; nC++) {
          const CC = bC[nC];
          CC.length > ZC && (bC[nC] = CC.substring(0, ZC), bC.length < zC && bC.splice(nC + 1, 0, CC.substring(ZC)))
        }
      return bC.join("\n")
    }
  },
  50703: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  50712: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);