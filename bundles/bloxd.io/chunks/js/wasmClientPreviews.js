export const id = 56;
export const ids = [56];
export const modules = {
  38009: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD
    });
    const ID = new WeakMap;

    function pD(DD, CD) {
      return ID.set(DD, CD), DD
    }

    function iD(DD) {
      var CD;
      return null !== (CD = ID.get(DD)) && void 0 !== CD ? CD : null
    }
  },
  38030: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD
    });
    var ID = cD(1221);

    function pD(DD) {
      const CD = /(\d*\.?\d+)px/.exec(DD);
      return CD ? Number(CD[1]) : null
    }

    function iD(DD) {
      return DD.split(/[\s,]+/).pop()
    }
    let fD = !1;
    const bD = {
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
      drawText: function(DD, CD, ID, bD, QD, wD) {
        if (QD <= 0 || wD <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: SD,
          fontVariant: BD,
          fontWeight: yD,
          fontSize: MD,
          font: tD
        } = this, ZD = [SD, BD, yD, `${MD}px`, tD].filter(Boolean).join(" "), oD = [
          [yD, `${MD}px`, iD(tD)].filter(Boolean).join(" "), `${MD}px sans-serif`
        ], vD = DD.font, ND = function(DD, CD, cD) {
          for (const ID of CD) {
            DD.font = ID;
            const CD = pD(DD.font),
              fD = iD(ID);
            if (null !== CD && Math.abs(CD - cD) <= .5 && DD.font.toLowerCase().includes(fD.toLowerCase())) return ID
          }
          return null
        }(DD, [ZD, ...oD], MD);
        ND !== ZD && function(DD, CD, ID) {
          fD || (fD = !0, Promise.resolve().then((() => cD(1077))).then((cD => {
            let {
              WZ: pD
            } = cD;
            pD(new Error("A canvas didn't take canvasTxt's font"), {
              font: DD,
              uM: CD,
              drawnWith: null !== ID && void 0 !== ID ? ID : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(ZD, vD, ND);
        const gD = pD(DD.font);
        if (null === ND && null !== gD && gD > 0) {
          const cD = MD / gD;
          DD.save();
          try {
            return DD.scale(cD, cD), {
              height: this.drawLines(DD, CD, ID / cD, bD / cD, QD / cD, wD / cD, gD).height * cD
            }
          } finally {
            DD.restore()
          }
        }
        return this.drawLines(DD, CD, ID, bD, QD, wD, MD)
      },
      drawLines: function(DD, CD, cD, pD, iD, fD, bD) {
        const QD = cD + iD,
          wD = pD + fD;
        let SD, BD = pD + fD / 2 + bD / 2;
        "right" === this.align ? (SD = QD, DD.textAlign = "right") : "left" === this.align ? (SD = cD, DD.textAlign = "left") : (SD = cD + iD / 2, DD.textAlign = "center");
        for (const ID of CD) {
          DD.measureText(ID).width >= iD && (CD = CD.replace(ID, ""))
        }
        CD = (0, ID.V)(CD);
        const yD = [],
          MD = CD.split("\n"),
          tD = this.justify ? DD.measureText("\u200a").width : 0;
        MD.forEach((CD => {
          let cD = DD.measureText(CD).width;
          if (cD <= iD) yD.push(CD);
          else {
            let ID = CD;
            const pD = iD;
            let fD, bD, QD;
            for (cD = DD.measureText(ID).width; cD > pD;) {
              for (fD = 0, bD = 0, QD = ""; bD < pD;) fD++, QD = ID.substr(0, fD), bD = DD.measureText(QD).width;
              fD--, QD = QD.substr(0, fD);
              const CD = fD;
              if (" " !== ID.substr(fD, 1)) {
                for (;
                  " " !== ID.substr(fD, 1) && 0 !== fD;) fD--;
                0 === fD && (fD = CD), QD = ID.substr(0, fD)
              }
              QD = this.justify ? this.justifyLine(DD, QD, tD, "\u200a", iD) : QD, ID = ID.substr(fD), cD = DD.measureText(ID).width, yD.push(QD)
            }
            cD > 0 && yD.push(ID)
          }
        }));
        const ZD = this.lineHeight ? this.lineHeight : this.getTextHeight(DD, CD),
          oD = ZD * (yD.length - 1),
          vD = oD / 2;
        let ND = pD;
        "top" === this.vAlign ? BD = pD + bD : "bottom" === this.vAlign ? (BD = wD - oD, ND = wD) : (ND = pD + fD / 2, BD -= vD), yD.forEach((CD => {
          CD = CD.trim(), DD.fillText(CD, SD, BD), BD += ZD
        })), this.debug && (DD.lineWidth = 3, DD.strokeStyle = "#00909e", DD.strokeRect(cD, pD, iD, fD), DD.lineWidth = 2, DD.strokeStyle = "#f6d743", DD.beginPath(), DD.moveTo(SD, pD), DD.lineTo(SD, wD), DD.stroke(), DD.strokeStyle = "#ff6363", DD.beginPath(), DD.moveTo(cD, ND), DD.lineTo(QD, ND), DD.stroke());
        return {
          height: oD + ZD
        }
      },
      getTextHeight: function(DD, CD) {
        const cD = DD.textBaseline;
        DD.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: ID
        } = DD.measureText(CD);
        return DD.textBaseline = cD, ID
      },
      justifyLine: function(DD, CD, cD, ID, pD) {
        const iD = CD.trim(),
          fD = DD.measureText(iD).width,
          bD = iD.split(/\s+/).length - 1,
          QD = Math.floor((pD - fD) / cD);
        if (bD <= 0 || QD <= 0) return iD;
        const wD = Math.floor(QD / bD);
        let SD = QD - bD * wD,
          BD = [];
        for (let yD = 0; yD < wD; yD++) BD.push(ID);
        BD = BD.join("");
        return iD.replace(/\s+/g, (DD => {
          const CD = SD > 0 ? BD + ID : BD;
          return SD--, DD + CD
        }))
      }
    }
  },
  38038: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ZD,
      e: () => tD,
      f: () => yD,
      i: () => SD,
      k: () => BD
    });
    var ID = cD(4081),
      pD = cD(326);
    const iD = 1024,
      fD = 1536,
      bD = 2 * ID.h + 1,
      QD = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      wD = 1.5;

    function SD(DD, CD, cD) {
      if ("string" !== typeof DD) return CD;
      try {
        const cD = JSON.parse(DD);
        return cD && "object" === typeof cD ? cD : CD
      } catch (ID) {
        return void 0 !== cD && console.error(`Couldn't parse ${cD}`, ID), CD
      }
    }

    function BD(DD) {
      return SD(DD, null, "a leaderboard's rows")
    }

    function yD(DD, CD) {
      var cD, ID;
      return null !== CD && void 0 !== CD ? CD : {
        status: null !== (cD = DD.status) && void 0 !== cD ? cD : "loading",
        entries: null !== (ID = DD.entries) && void 0 !== ID ? ID : []
      }
    }

    function MD(DD, CD) {
      return "number" === typeof DD && Number.isFinite(DD) && DD > 0 ? DD : CD
    }

    function tD(DD, CD) {
      const cD = MD(DD.size, 1);
      let ID = MD(DD.width, MD(2.5 * cD, 2.5)),
        pD = MD(DD.height, MD(3.75 * cD, 3.75));
      Number.isFinite(iD * pD / ID) && Number.isFinite(fD * ID / pD) || (ID = 2.5, pD = 3.75);
      const bD = pD / ID,
        QD = Math.max(1, Math.min(iD, CD / bD));
      return {
        width: ID,
        height: pD,
        layoutWidth: Math.max(iD, fD / bD),
        layoutHeight: Math.max(fD, iD * bD),
        pixelWidth: Math.round(QD),
        pixelHeight: Math.round(Math.max(1, Math.min(CD, QD * bD)))
      }
    }

    function ZD(DD, CD, cD, fD, SD, BD) {
      DD.setTransform(1, 0, 0, 1, 0, 0), DD.fillStyle = pD.J.defaultNameTagBackground, DD.fillRect(0, 0, CD, cD), DD.scale(CD / fD.layoutWidth, cD / fD.layoutHeight), DD.translate((fD.layoutWidth - iD) / 2, 0),
        function(DD, CD, cD, iD) {
          var fD, SD, BD, yD;
          const {
            top: MD,
            around: tD,
            showPlayerText: ZD,
            localPlayerDbId: ND
          } = cD, {
            whiteUiText: gD,
            grayUiText: XD,
            yellowUiText: mD
          } = pD.J;
          DD.textBaseline = "middle";
          const nD = function(CD, cD, ID, pD, iD, fD) {
              let bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              DD.font = `bold ${pD}px 'Jetbrains Mono', monospace`, DD.fillStyle = iD, DD.textAlign = bD;
              let QD = CD.replace(/[\r\n\t]/g, " ");
              if (DD.measureText(QD).width > fD) {
                for (; QD.length > 0 && DD.measureText(`${QD}\u2026`).width > fD;) QD = QD.slice(0, -1);
                QD += "\u2026"
              }
              DD.fillText(QD, cD, ID)
            },
            OD = CD => {
              DD.fillStyle = gD, DD.globalAlpha = .15, DD.fillRect(24, CD, 976, 2), DD.globalAlpha = 1
            },
            PD = null === ND ? null : (0, pD.rc)(ND),
            HD = DD => null !== PD && DD.playerHash === PD,
            UD = oD(MD.entries, ID.l),
            xD = "ready" === MD.status && UD.length > 0,
            qD = null === tD ? [] : oD(tD.entries, bD),
            JD = UD.some(HD),
            KD = null === tD ? null : function(DD) {
              const CD = DD;
              if (!CD || !Number.isFinite(CD.rank) || !Number.isFinite(CD.tied) || !Number.isFinite(CD.total)) return null;
              return CD
            }(tD.standing),
            aD = qD.find(HD),
            VD = UD.find(HD),
            zD = null === KD || void 0 === aD ? null : {
              value: aD.value,
              rank: KD.rank
            },
            jD = vD(UD, void 0 === VD || VD.value === (null === zD || void 0 === zD ? void 0 : zD.value) ? zD : null),
            lD = vD(qD, zD),
            LD = (DD, CD) => {
              const cD = DD.findIndex(HD);
              return cD >= 0 ? CD[cD] : null
            },
            TD = null !== (fD = null !== (SD = null === KD || void 0 === KD ? void 0 : KD.rank) && void 0 !== SD ? SD : LD(qD, lD)) && void 0 !== fD ? fD : LD(UD, jD);
          DD.font = "bold 34px 'Jetbrains Mono', monospace";
          const GD = [...xD ? jD : [], ...JD ? [] : lD],
            RD = Math.min(280, Math.max(0, ...GD.map((CD => DD.measureText(QD.format(CD)).width)))),
            kD = RD <= 80,
            dD = kD ? 80 : 32 + RD,
            YD = kD ? 148 : dD + 28,
            WD = 660 - YD;
          nD(`TOP ${ID.l}  /  ALL TIME`, 24, 52, 28, XD, 976), nD(ZD ? String(null !== (BD = CD.title) && void 0 !== BD ? BD : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, gD, 976), nD("RANK", 32, 174, 28, XD, YD - 40), nD("PLAYER", YD, 174, 28, XD, WD), nD(ZD ? String(null !== (yD = CD.scoreLabel) && void 0 !== yD ? yD : "Score").slice(0, 24) : "Score", 992, 174, 28, XD, 304, "right"), OD(202);
          const sD = (iD - 232) / (ID.l + wD + bD),
            ED = 208 + ID.l * sD,
            eD = ED + wD * sD,
            uD = (CD, cD, ID, pD) => {
              const iD = HD(CD);
              DD.fillStyle = iD ? mD : gD, DD.globalAlpha = iD ? .15 : pD ? .035 : 0, DD.fillRect(24, ID - sD / 2 + 1, 976, sD - 2), DD.globalAlpha = 1;
              const fD = iD ? mD : gD;
              nD(QD.format(cD), dD, ID, 34, fD, kD ? 80 : RD, kD ? "center" : "right"), nD(ZD ? String(CD.name).slice(0, 64) : "Player", YD, ID, 34, fD, WD);
              const bD = QD.format(CD.value);
              nD(DD.measureText(bD).width > 304 ? CD.value.toExponential(6) : bD, 992, ID, 34, fD, 304, "right")
            };
          if (xD)
            for (const [ID, pD] of UD.entries()) uD(pD, jD[ID], 208 + (ID + .5) * sD, ID % 2 === 0);
          else {
            const DD = "error" === MD.status,
              CD = DD ? "Couldn't load leaderboard" : "ready" === MD.status ? "No scores yet" : "Loading leaderboard\u2026",
              cD = DD ? "Trying again shortly" : "ready" === MD.status ? "Be the first on the board!" : "Fetching the top players",
              ID = (208 + ED) / 2;
            nD(CD, 512, ID - 28, 40, DD ? pD.J.redUiText : gD, 960, "center"), nD(cD, 512, ID + 27, 30, XD, 960, "center")
          }
          const hD = ED + wD * sD / 2;
          if (null === TD) OD(hD);
          else {
            const CD = null === KD ? 0 : KD.tied - 1,
              cD = `YOUR RANK #${QD.format(TD)}${null===KD?"":` of ${QD.format(KD.total)}`}`;
            DD.font = "bold 36px 'Jetbrains Mono', monospace";
            const ID = Math.max(20, Math.min(36, Math.floor(34560 / DD.measureText(cD).width)));
            nD(cD, 512, hD - (CD > 0 ? 15 : 0), ID, mD, 960, "center"), CD > 0 && nD(`Tied with ${QD.format(CD)} other${1===CD?"":"s"}`, 512, hD + 24, 24, XD, 960, "center")
          }
          if (null === tD) return;
          const rD = eD + bD * sD / 2;
          if (JD) nD(`You're in the top ${ID.l}!`, 512, rD, 40, mD, 960, "center");
          else if (0 === qD.length) nD("You're not on this board yet", 512, rD, 34, XD, 960, "center");
          else
            for (const [ID, pD] of qD.entries()) uD(pD, lD[ID], eD + (ID + .5) * sD, ID % 2 === 0)
        }(DD, SD, BD, fD.layoutHeight)
    }

    function oD(DD, CD) {
      return Array.isArray(DD) ? DD.slice(0, CD).filter((DD => DD && Number.isFinite(DD.rank) && Number.isFinite(DD.value))) : []
    }

    function vD(DD, CD) {
      const cD = [];
      let ID = !1;
      return DD.forEach(((pD, iD) => {
        if (null !== CD && pD.value === CD.value) return void cD.push(CD.rank);
        const fD = iD > 0 && pD.value === DD[iD - 1].value;
        fD || (ID = 0 === iD && 1 !== pD.rank), cD.push(fD && !ID ? cD[iD - 1] : pD.rank)
      })), cD
    }
  },
  38233: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => iD
    });
    const ID = 32;

    function pD(DD) {
      return Array.from(DD).length
    }

    function iD(DD) {
      const CD = [""];
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        pD = "";
      const iD = () => {
        CD.push(""), cD = 0, pD = ""
      };
      for (const fD of DD.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(fD)) iD();
        else if (/^\s+$/.test(fD)) pD += fD;
      else if (fD.length > 0) {
        const DD = Array.from(fD);
        cD > 0 && cD + pD.length + DD.length > ID && iD(), CD[CD.length - 1] += pD, cD += pD.length, pD = "";
        for (const pD of DD) cD >= ID && iD(), CD[CD.length - 1] += pD, cD++
      }
      return CD[CD.length - 1] += pD, CD
    }
  },
  42436: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      WasmPreviewHost: () => mC,
      pageBuiltInAnimationPack: () => yD,
      pagePreviews: () => DC,
      previewModule: () => sD
    });
    var ID = cD(3529),
      pD = cD(630);
    const iD = "[bloxd-wasm-client]";

    function fD(DD) {
      const CD = {
        wasm: "unknown",
        client: String(pD.c)
      };
      try {
        var cD;
        CD.wasm = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.zB()) && void 0 !== cD ? cD : CD.wasm
      } catch {}
      return CD
    }
    async function bD(DD) {
      if (DD.length < 2 || 31 !== DD[0] || 139 !== DD[1]) return DD;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: CD
        } = await cD.e(218).then((() => cD(36343)));
        return CD(DD)
      }
      const CD = new Blob([DD]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(CD).arrayBuffer())
    }

    function QD(DD, CD, ID, pD) {
      Promise.resolve().then((() => cD(40032))).then((cD => {
        let {
          reportDataLoadFailure: iD
        } = cD;
        iD(DD, CD, ID, pD)
      }), (CD => {
        console.warn(`${iD} ${DD} didn't load, and the report couldn't be sent`, ID.error, CD)
      }))
    }
    const wD = [3e4, 12e4, 3e5];
    class SD {
      constructor(DD) {
        this.deps = DD, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((DD => {
          this.resolveSet = DD
        }))
      }
      provide(DD) {
        return this.loading ??= this.load(DD), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(DD) {
        const CD = fD(DD),
          cD = await async function(DD, CD) {
            let cD;
            try {
              cD = await DD()
            } catch (ID) {
              return {
                stage: "fetch",
                error: ID
              }
            }
            try {
              return CD(cD) ? null : {
                stage: "decode",
                error: null
              }
            } catch (ID) {
              return {
                stage: "decode",
                error: ID
              }
            }
          }((() => this.deps.fetch()), (CD => {
            const cD = DD.kpD(CD);
            return cD && this.resolveSet(CD), cD
          }));
        if (null !== cD) {
          if ("fetch" === cD.stage) {
            this.loading = null;
            const CD = wD[this.retries++];
            void 0 !== CD && this.deps.later((() => {
              this.provide(DD)
            }), CD)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(cD, CD))
        }
      }
    }
    let BD = null;

    function yD() {
      return BD ??= new SD({
        fetch: async () => bD(await (0, ID.I)(MD(), {
          priority: "low"
        })),
        onFailed: (DD, CD) => {
          QD("builtInAnimations", MD(), DD, CD)
        },
        later: (DD, CD) => {
          setTimeout(DD, CD)
        }
      }), BD
    }

    function MD() {
      return cD(42443)
    }
    var tD = cD(3525),
      ZD = cD(35734),
      oD = cD(39834),
      vD = cD(1199),
      ND = cD(309),
      gD = cD(39852),
      XD = cD(40104),
      mD = (cD(39875), cD(40056)),
      nD = cD(40065),
      OD = cD(40071),
      PD = cD(39866),
      HD = cD(40114),
      UD = cD(40117),
      xD = cD(39890),
      qD = cD(39980),
      JD = cD(39987),
      KD = cD(40112),
      aD = cD(41737),
      VD = cD(39872);
    const zD = "[bloxd-previews]",
      jD = 4e5,
      lD = 0,
      LD = 1,
      TD = 2,
      GD = 1,
      RD = 2,
      kD = 3,
      dD = 0,
      YD = 1,
      WD = 2;

    function sD(DD) {
      const CD = DD,
        cD = (0, gD.H)(DD),
        ID = (0, gD.k)(DD);
      return null !== cD && null !== ID && "function" === typeof CD.TpD && "function" === typeof CD.GpD && "function" === typeof CD.RpD ? CD : null
    }

    function ED(DD, CD, cD) {
      let [ID, pD] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [DD, CD], iD = Math.min(Number.isFinite(cD) && cD > 0 ? cD : 1, 2);
      const fD = Math.max(0, ID, DD) * Math.max(0, pD, CD) * iD * iD;
      return fD > jD && (iD *= Math.sqrt(jD / fD)), [Math.max(1, Math.floor(Math.max(0, DD) * iD)), Math.max(1, Math.floor(Math.max(0, CD) * iD))]
    }

    function eD() {
      return cD(42452)
    }
    async function uD(DD, CD) {
      "lost" === DD && (0, xD.y)();
      const ID = await (0, xD.N)();
      if (null === ID || (0, gD.o)(ID) || (0, xD.e)()) return;
      const pD = "webgpu" === ID.backend;
      if (!pD && "lost" !== DD) return;
      const iD = pD ? (0, gD.T)(DD) : null;
      if (null !== iD) {
        const cD = `WebGPU failed at home (${DD}${void 0===CD?"":`: ${CD instanceof Error?CD.message:(0,VD.h)(CD)}`}) and ${iD}`;
        return console.warn(`${zD} ${cD}: the previews stop`, null !== CD && void 0 !== CD ? CD : ""), void(0, xD.s)(cD)
      }(0, xD.p)();
      try {
        await async function(DD, CD, ID) {
          var pD;
          let {
            backend: iD,
            adapter: bD
          } = DD;
          const QD = (0, tD.F)(),
            {
              flushCrashReports: wD,
              reportRenderReload: SD
            } = await Promise.resolve().then((() => cD(40032)));
          SD(iD, "start_failed" === CD ? 0 : 1, fD(QD ? (0, tD.x)() : null), {
            cause: CD,
            error: "lost" === CD && null !== (pD = (0, gD.Z)(QD ? (0, gD.H)((0, tD.x)()) : null)) && void 0 !== pD ? pD : ID,
            context: {
              adapter: bD,
              boundAtMs: "start_failed" === CD ? null : (0, xD.M)(),
              indirectHangs: (0, xD.B)()
            }
          }), await wD(qD.c)
        }(ID, DD, CD)
      } catch (bD) {
        console.warn(`${zD} ${ID.backend} failed at home (${DD}), and its report couldn't be sent`, bD)
      }(0, qD.j)()
    }
    async function hD() {
      if (!(0, tD.F)()) {
        const DD = await (0, xD.N)();
        if (null === DD || (0, gD.o)(DD)) return null;
        if (await (0, ZD.i)(await DD.load(), oD.e), !(0, tD.F)()) return null
      }
      return sD((0, tD.x)())
    }
    class rD {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.page = DD, this.host = CD, this.id = cD, this.canvas = ID, this.size = pD, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const fD = {
            ...iD.images,
            glbUrl: DD => {
              var CD;
              return null !== (CD = this.models.drawnUrl(DD)) && void 0 !== CD ? CD : iD.images.glbUrl(DD)
            }
          },
          bD = CD => DD.modelFile(CD);
        this.images = new XD.e(fD, (DD => {
          console.warn(`${zD} image ${DD.key.kind}:${DD.key.index}:${DD.key.word} failed`, DD.error)
        }), {
          fetchFile: bD,
          fetchImage: CD => DD.imageFile(CD)
        }), DD.startModels(), this.models = new mD.i(iD.files, ((CD, cD) => DD.buildModel(CD, cD)), (DD => {
          console.warn(`${zD} model file ${DD.file} (${DD.url}) failed`, DD.error)
        }), {
          fetchFile: bD,
          onWritten: (DD, CD) => {
            this.images.glbWritten(DD, CD)
          },
          onTaken: (DD, CD) => {
            this.images.glbTaken(DD, CD)
          }
        }), this.write = (DD, CD, cD) => {
          if (this.closed) return !0;
          if (DD === mD.d) {
            const DD = new DataView(cD.buffer, cD.byteOffset, OD.e),
              ID = DD.getUint32(0, !0),
              pD = DD.getUint32(OD.i, !0),
              iD = this.page.hostCall(WD, (() => this.host.EiD(this.id, ID, CD, cD.subarray(OD.e))));
            return this.outcomes.push([pD, iD]), !0
          }
          return DD === XD.c && (this.page.hostCall(void 0, (() => {
            this.host.uiD(this.id, cD)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(DD, CD, cD) {
        if (this.closed) return;
        const [ID, pD] = ED(DD, CD, this.page.dpr(), cD);
        ID === this.size[0] && pD === this.size[1] || (this.size = [ID, pD], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, ID, pD)
        })))
      }
      setMob(DD, CD, cD, ID) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.DfD(this.id, DD, CD, cD, ID))))
      }
      setPet(DD, CD, cD, ID) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.cfD(this.id, DD, CD, cD, ID))))
      }
      setPlayer(DD, CD, cD) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.riD(this.id, DD, CD, cD))))
      }
      setFigure(DD, CD, cD, ID) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.AiD(this.id, DD, CD, cD, ID))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const DD = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === DD || DD.length < 3 ? null : {
          alpha: DD[0],
          beta: DD[1],
          radius: DD[2]
        }
      }
      setOrbit(DD) {
        let {
          alpha: CD,
          beta: cD,
          radius: ID
        } = DD;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.CfD(this.id, CD, cD, ID)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((DD => {
          this.settled.push(DD)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, HD.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [DD, CD] of this.outcomes) {
          const cD = CD === dD ? [] : [CD === YD ? DD : (DD | mD.g) >>> 0];
          this.models.taken(DD, cD)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(DD) {
        let CD = !1;
        if (DD) {
          const DD = this.host.ifD(this.id);
          for (const CD of DD) this.models.request(CD);
          const cD = this.host.pfD(this.id);
          cD.length > 0 && this.images.onEvent(cD), CD = DD.length > 0 || cD.length > 0
        }
        const cD = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          ID = CD || cD > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = ID ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(DD) {
        this.page.hostCall(void 0, (() => {
          const CD = this.host.close(this.id);
          CD.length > 0 && this.images.onEvent(CD), this.page.isTrapped || DD.RpD(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const DD = this.settled;
        this.settled = [];
        for (const CD of DD) CD()
      }
    }
    class AD {
      constructor(DD) {
        this.deps = DD, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: DD => {
            this.modelsFailed(DD)
          },
          onDecoderFailed: DD => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${zD} the Draco decoder didn't load: models waiting on it won't draw`, DD))
          },
          onWorkerLost: DD => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${zD} a model worker was lost: ${DD}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.gt = {
          setShaderPack: (DD, CD, cD, ID, pD) => (this.shaderPackArgs = [DD, CD, cD, ID, pD], this.handOverShaderPack(), !0)
        }, this.frame = DD => {
          this.frameId = null;
          const CD = this.host;
          if (null !== CD && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(CD, DD)
          } catch (cD) {
            if (!this.stopIfTrapped(cD) && (this.stop(), (0, gD.p)(cD))) return void this.deps.onRenderFailed("frames_refused", cD);
            console.warn(`${zD} the previews stopped: their frame threw`, cD)
          }
        }, DD.pack.onChange((() => {
          this.packChanged()
        })), DD.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const DD of this.previews.values()) DD.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var DD, CD;
        return null !== (DD = null === (CD = this.host) || void 0 === CD ? void 0 : CD.attached()) && void 0 !== DD && DD
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((DD, CD) => DD + CD), 0) / this.costs.length
      }
      async bindSession(DD, CD, cD) {
        const ID = this.binding,
          pD = this.sessionEnds;
        try {
          const iD = this.hostOf(DD);
          if (!iD.eiD()) {
            const CD = (0, JD.d)().sampleCount,
              fD = await cD(CD);
            if (this.sessionEnds !== pD) return this.keepRendererOfEndedSession(DD, iD, fD, CD, ID), CD;
            if (!iD.aiD(fD)) throw new Error("the page has a renderer already");
            (0, xD.u)(performance.now()), this.samples = CD, (0, KD.d)((0, gD.k)(DD))
          }
          if (!iD.attach(CD)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === ID && this.endBinding()
        }
      }
      keepRendererOfEndedSession(DD, CD, cD, ID, pD) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== pD) try {
          cD.free()
        } catch (iD) {
          console.warn(`${zD} an ended session's renderer didn't free`, iD)
        } else CD.aiD(cD) && ((0, xD.u)(performance.now()), this.samples = ID, (0, KD.d)(this.registryOf(DD)))
      }
      async beginSession() {
        var DD;
        let CD = () => {};
        const cD = new Promise((DD => {
          CD = DD
        }));
        this.binding = {
          done: cD,
          release: CD
        }, await (null === (DD = this.opening) || void 0 === DD ? void 0 : DD.catch((() => null)));
        const ID = this.pageCanvas;
        return this.pageCanvas = null, ID
      }
      endSession(DD) {
        var CD, cD;
        if (this.sessionEnds++, this.lastEndReturned = DD, this.endBinding(), DD) {
          try {
            var ID;
            null === (ID = this.host) || void 0 === ID || ID.detach()
          } catch (pD) {
            return void console.warn(`${zD} the session's core kept the page's renderer`, pD)
          }!0 === (null === (CD = this.host) || void 0 === CD ? void 0 : CD.attached()) && console.warn(`${zD} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (cD = this.host) || void 0 === cD ? void 0 : cD.eiD()) && (0, KD.d)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var DD;
        null === (DD = this.binding) || void 0 === DD || DD.release(), this.binding = null
      }
      async openPreview(DD, CD, cD, ID) {
        const pD = await this.renderingHost(),
          iD = this.module;
        if (null === pD || null === iD) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(pD), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(iD)
        }));
        const fD = this.nextId++,
          bD = this.deps.createCanvas(),
          [QD, wD] = ED(CD, cD, this.deps.dpr(), ID);
        bD.width = QD, bD.height = wD;
        if (!this.guarded((() => (iD.GpD(fD, bD), pD.open(fD, QD, wD, DD))))) throw this.hostCall(void 0, (() => {
          iD.RpD(fD)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const SD = new rD(this, pD, fD, bD, [QD, wD], this.deps);
        return this.previews.set(fD, SD), this.startFrames(), SD
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, xD.e)() || null !== (0, xD.I)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((DD => {
          null === DD || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(DD) {
        return this.prefetchedOr(DD, this.deps.fetchModel)
      }
      imageFile(DD) {
        return this.prefetchedOr(DD, ID.I)
      }
      prefetchedOr(DD, CD) {
        const cD = this.prefetchedFiles.get(DD);
        return void 0 === cD ? CD(DD) : cD.catch((() => CD(DD)))
      }
      async prefetchPlayerFiles() {
        const DD = this.deps.playerFile().then((DD => this.deps.files.url(DD))),
          CD = await Promise.all([DD, this.deps.images.lifeformAtlasUrl(HD.b)]).catch((() => null));
        if (null === CD) return;
        const [cD, ID] = CD, pD = (DD, CD) => {
          if (null === DD) return;
          const cD = CD(DD);
          this.prefetchedFiles.set(DD, cD), cD.catch((() => {
            this.prefetchedFiles.delete(DD)
          }))
        };
        pD(cD, (DD => this.modelFile(DD))), pD(ID, (DD => this.imageFile(DD)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((DD => (null === DD && (this.moduleLoad = null), DD)), (DD => {
          throw this.moduleLoad = null, DD
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((DD => {
          throw this.animationTable = null, DD
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((DD => (this.modelsFailed(DD), () => new Promise((() => {})))))
      }
      buildModel(DD, CD) {
        return this.startModels(), this.models.then((cD => cD(DD, CD))).then((DD => this.unavailable ? new Promise((() => {})) : DD))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(DD) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${zD} the model workers didn't start: models won't draw in the previews`, DD))
      }
      called(DD) {
        return 0 !== DD && this.logError(DD, 0), DD
      }
      closePreview(DD) {
        this.previews.delete(DD.id), null !== this.module && DD.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(DD) {
        if (null !== this.module && this.module !== DD) throw new Error("a second renderer module on one page");
        return this.module = DD, null === this.host && (this.host = this.guarded((() => new DD.TpD)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: DD
        } = this;
        null !== DD && this.outsideCall("the game's start or end", (() => {
          DD.FiD(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: DD,
          shaderPackArgs: CD
        } = this;
        null !== DD && null !== CD && this.outsideCall("the shader pack's hand-over", (() => {
          DD.UcD(...CD) || console.warn(`${zD} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(DD, CD) {
        try {
          this.hostCall(void 0, CD)
        } catch (cD) {
          this.stop(), console.warn(`${zD} the previews stopped: ${DD} threw`, cD)
        }
      }
      async loadAnimations(DD) {
        const CD = fD(null),
          cD = this.module;
        try {
          CD.wasm = null === cD ? CD.wasm : this.hostCall(CD.wasm, (() => cD.zB()))
        } catch {}
        let ID, pD;
        try {
          ID = await this.fetchAnimationTable()
        } catch (iD) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: iD
          }, CD)
        }
        if (!this.settleIfTrapped()) {
          try {
            pD = DD.hiD(ID)
          } catch (iD) {
            if (this.stopIfTrapped(iD)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: iD
            }, CD)
          }
          pD || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, CD)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const DD = this.host;
        return null !== DD && this.guarded((() => DD.eiD())) ? DD : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var DD;
        const CD = null !== (DD = this.module) && void 0 !== DD ? DD : await this.loadModule();
        if (null === CD) return null;
        const cD = this.hostOf(CD),
          ID = () => this.guarded((() => cD.eiD()));
        if (ID()) return cD;
        if (null !== (0, xD.I)() || (0, xD.e)()) return null;
        const pD = this.deps.createCanvas();
        pD.width = 1, pD.height = 1;
        const iD = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const fD = (0, JD.d)().sampleCount;
        let bD;
        try {
          bD = await (0, gD.v)(CD, "previewRenderer", pD, fD, aD.c, iD)
        } catch (QD) {
          throw QD instanceof PD.d ? this.stopForTrap(QD) : (0, gD.s)(QD) && await this.deps.onRenderFailed("start_failed", QD), QD
        }
        return this.guarded((() => cD.aiD(bD))) ? ((0, xD.u)(performance.now()), this.samples = fD, this.pageCanvas = pD, (0, KD.d)(this.registryOf(CD)), cD) : ID() ? cD : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(DD, CD) {
        for (const fD of this.previews.values()) fD.feed();
        if (this.stopped) return;
        const cD = this.deps.now(),
          ID = DD.frame(CD);
        this.costs.push(this.deps.now() - cD), this.costs.length > 120 && this.costs.shift();
        const pD = 0 !== (256 & ID),
          iD = 255 & ID;
        for (const fD of this.previews.values()) {
          if (this.stopped) return;
          fD.collect(pD)
        }
        if (!this.stopped) {
          if (pD) {
            const CD = DD.IfD();
            for (let DD = 0; DD + 1 < CD.length; DD += 2) this.logError(CD[DD], CD[DD + 1])
          }
          if (iD === GD) return this.stop(), void this.deps.onRenderFailed("lost");
          if (iD === RD) return this.stop(), void this.deps.onFatal(DD.WiD(), DD.siD());
          if (iD === kD) return this.stop(), void console.warn(`${zD} the previews stopped: the page's renderer went with its session`);
          (0, ND.c)(CD), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, PD.g)(this.module) || "failed" === (0, tD.u)())
      }
      hostCall(DD, CD) {
        if (this.settleIfTrapped()) return DD;
        try {
          return CD()
        } catch (cD) {
          if (this.stopIfTrapped(cD)) return DD;
          throw cD
        }
      }
      guarded(DD) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return DD()
        } catch (CD) {
          throw this.stopIfTrapped(CD), CD
        }
      }
      registryOf(DD) {
        return {
          bcD: (CD, cD) => {
            this.hostCall(void 0, (() => {
              DD.bcD(CD, cD)
            }))
          },
          QcD: CD => {
            this.hostCall(void 0, (() => {
              DD.QcD(CD)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, KD.d)(null)), !0)
      }
      stopIfTrapped(DD) {
        return !(null === this.module || !(0, PD.j)(this.module, DD)) && (this.stopForTrap(DD), !0)
      }
      stopForTrap(DD) {
        this.stop(), (0, KD.d)(null), (0, tD.I)(DD)
      }
      stop() {
        this.stopped = !0;
        for (const DD of this.previews.values()) DD.abandon()
      }
      logError(DD, CD) {
        const cD = `${DD}:${CD}`;
        this.loggedErrors.has(cD) || (this.loggedErrors.add(cD), console.warn(`${zD} error ${DD} (detail ${CD})`))
      }
    }
    let FD = null;

    function DC() {
      return FD ??= new AD(function() {
        const DD = (0, nD.p)(vD.clientSideServerUrls.staticUrl, {
          packUrl: DD => {
            var CD, cD;
            return null !== (CD = null === (cD = HD.d.current) || void 0 === cD ? void 0 : cD.modelUrl(DD)) && void 0 !== CD ? CD : null
          }
        });
        return {
          loadModule: hD,
          startModels: async DD => {
            const {
              pageModelPool: CD
            } = await cD.e(42).then((() => cD(42518))), {
              pool: ID
            } = CD(DD);
            return (DD, CD) => ID.build(DD, CD)
          },
          fetchAnimations: async () => bD(await (0, ID.I)(eD())),
          playerFile: async () => (await (0, nD.o)()).PLAYER_FILE,
          onAnimationsFailed: (DD, CD) => {
            QD("previewAnimations", eD(), DD, CD)
          },
          provideBuiltInAnimationPack: DD => {
            yD().provide(DD)
          },
          openExtras: xD.F,
          files: DD,
          images: (0, HD.l)((0, XD.k)(DD.url), (() => HD.d.current)),
          pack: HD.d,
          game: UD.d,
          fetchModel: DD => (0, nD.i)(DD),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: DD => requestAnimationFrame(DD),
          cancelFrame: DD => {
            cancelAnimationFrame(DD)
          },
          onRenderFailed: uD,
          onFatal: (DD, CD) => {
            console.error(`${zD} the previews stopped: renderer error ${DD} (detail ${CD})`)
          }
        }
      }()), FD
    }
    var CC = cD(613),
      cC = cD(38009),
      IC = cD(3083);
    const pC = {
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
    const iC = "[bloxd-previews]",
      fC = new Uint32Array(5);

    function bC(DD) {
      return CC.j.indexOf(DD)
    }
    const QC = new WeakSet;

    function wC(DD) {
      const CD = (0, cC.f)(DD),
        cD = null === CD ? -1 : SC(CD);
      return -1 !== cD ? cD : (QC.has(DD) || (QC.add(DD), console.warn(`${iC} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function SC(DD) {
      var CD;
      return null !== (CD = pC[DD]) && void 0 !== CD ? CD : -1
    }

    function BC(DD, CD) {
      const {
        canvas: cD
      } = CD;
      cD.style.width = "100%", cD.style.height = "100%", cD.style.display = "block", DD.appendChild(cD)
    }

    function yC(DD) {
      const CD = DD.getBoundingClientRect();
      return [CD.width, CD.height]
    }
    class MC {
      constructor(DD, CD) {
        this.preview = DD, this.showView = CD
      }
      show(DD) {
        this.showView(this.preview, DD)
      }
      resize(DD, CD) {
        this.preview.resize(DD, CD)
      }
      close() {
        this.preview.close()
      }
    }
    class tC {
      constructor(DD) {
        this.preview = DD, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(DD) {
          const {
            canvas: CD
          } = DD;
          let cD = null;
          const ID = DD => {
              var ID;
              cD = {
                pointer: DD.pointerId,
                x: DD.clientX,
                y: DD.clientY
              }, null === (ID = CD.setPointerCapture) || void 0 === ID || ID.call(CD, DD.pointerId)
            },
            pD = CD => {
              var ID;
              const pD = DD.orbit;
              if ((null === (ID = cD) || void 0 === ID ? void 0 : ID.pointer) !== CD.pointerId || null === pD) return;
              const iD = CD.clientX - cD.x,
                fD = CD.clientY - cD.y;
              cD = {
                ...cD,
                x: CD.clientX,
                y: CD.clientY
              }, DD.setOrbit({
                alpha: pD.alpha - .01 * iD,
                beta: Math.min(Math.PI - .01, Math.max(.01, pD.beta - .01 * fD)),
                radius: pD.radius
              })
            },
            iD = DD => {
              var CD;
              (null === (CD = cD) || void 0 === CD ? void 0 : CD.pointer) === DD.pointerId && (cD = null)
            },
            fD = CD => {
              const cD = DD.orbit;
              if (null === cD) return;
              CD.preventDefault();
              const ID = CD.deltaY * (CD.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : CD.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                pD = Math.min(100, Math.max(5, cD.radius + .08 * ID));
              DD.setOrbit({
                ...cD,
                radius: pD
              })
            };
          return CD.style.touchAction = "none", CD.addEventListener("pointerdown", ID), CD.addEventListener("pointermove", pD), CD.addEventListener("pointerup", iD), CD.addEventListener("pointercancel", iD), CD.addEventListener("wheel", fD, {
            passive: !1
          }), () => {
            CD.removeEventListener("pointerdown", ID), CD.removeEventListener("pointermove", pD), CD.removeEventListener("pointerup", iD), CD.removeEventListener("pointercancel", iD), CD.removeEventListener("wheel", fD)
          }
        }(DD), this.dev = {
          canvas: () => DD.canvas,
          isolateHead: () => {
            console.warn(`${iC} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = DD.untilSettled().then((() => {
          if (DD.isStopped) throw new Error(`${iC} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(DD, CD) {
        this.cosmetics[DD] = CD, this.apply()
      }
      playEmote(DD) {
        null === DD || DD !== this.emote ? (this.emote = DD, this.apply()) : this.preview.replay()
      }
      untilDrawn(DD) {
        return this.preview.untilSettled()
      }
      setOrbit(DD) {
        let {
          yaw: CD,
          pitch: cD,
          radius: ID
        } = DD;
        const pD = this.preview.orbit;
        null !== pD && this.preview.setOrbit({
          alpha: CD,
          beta: cD,
          radius: null !== ID && void 0 !== ID ? ID : pD.radius
        })
      }
      resetCamera() {}
      resize(DD, CD) {
        this.preview.resize(DD, CD)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var DD;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), fC, null === (DD = this.emote) ? -1 : SC(DD))
      }
    }

    function ZC(DD, CD) {
      let {
        mobType: cD,
        variation: ID,
        animation: pD
      } = CD;
      DD.setMob(bC(cD), null !== ID && void 0 !== ID ? ID : "", 1, wC(pD))
    }

    function oC(DD, CD) {
      let {
        mobType: cD,
        variation: ID,
        metaInfo: pD,
        tamed: iD
      } = CD;
      DD.setPet(bC(cD), ID, pD, iD)
    }
    const vC = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class NC {
      constructor(DD, CD, cD, ID) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, DD(cD.width, ID[1], ID).then((DD => {
          if (this.closed) return void DD.close();
          const {
            style: cD
          } = DD.canvas;
          cD.position = "absolute", cD.top = "0", cD.visibility = "hidden", BC(CD, DD), this.preview = DD, this.apply()
        })).catch((DD => {
          console.error(`${iC} couldn't open a lineup figure`, DD)
        }))
      }
      update(DD, CD, cD, ID, pD) {
        this.figure = DD, this.shown = CD, this.order = cD, this.span = ID, this.lineup = pD, this.apply()
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.preview) || void 0 === DD || DD.close(), this.preview = null
      }
      apply() {
        const {
          preview: DD,
          figure: CD,
          lineup: cD
        } = this;
        if (null === DD || null === CD) return;
        if (this.given !== CD) {
          var ID;
          this.given = CD, this.loaded = !1;
          const cD = null === CD.gH ? 0 : null !== (ID = (0, IC.e)(CD.gH)) && void 0 !== ID ? ID : 0;
          DD.setFigure(function(DD) {
            return JSON.stringify(Object.fromEntries(DD.cosmetics))
          }(CD), cD, wC(CD.animation), CD.size), DD.untilSettled().then((() => {
            this.given === CD && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: pD,
          width: iD
        } = this.span;
        DD.resize(iD, cD[1], cD);
        const {
          style: fD
        } = DD.canvas;
        fD.left = `${pD}px`, fD.width = `${iD}px`, fD.zIndex = this.order, fD.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class gC {
      constructor(DD, CD) {
        this.open = CD, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = yC(DD), this.layer = document.createElement("div");
        const {
          style: cD
        } = this.layer;
        cD.position = "relative", cD.isolation = "isolate", cD.overflow = "hidden", cD.width = "100%", cD.height = "100%", cD.pointerEvents = "none", DD.appendChild(this.layer)
      }
      show(DD) {
        this.view = DD, this.place()
      }
      resize(DD, CD) {
        this.size = [DD, CD], this.place()
      }
      close() {
        for (const DD of this.figures) DD.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: DD,
          shown: CD
        } = this.view;
        for (const ID of this.figures.splice(DD.length)) ID.close();
        const {
          size: cD
        } = this;
        DD.forEach(((ID, pD) => {
          var iD;
          const fD = function(DD, CD, cD, ID) {
            let [pD, iD] = ID;
            const fD = (DD + .5) * pD / CD,
              bD = Math.min(Math.max(pD / CD, 2 * cD * iD), 2 * Math.max(fD, pD - fD));
            return {
              left: fD - bD / 2,
              width: bD
            }
          }(pD, DD.length, function(DD) {
            let {
              animation: CD,
              size: cD
            } = DD;
            const {
              aimed: ID,
              ready: pD
            } = vC;
            return (wC(CD) === pC.gunAimed ? ID : pD) * cD
          }(ID), cD);
          this.figures[pD] ??= new NC(this.open, this.layer, fD, cD), this.figures[pD].update(ID, null !== (iD = CD[pD]) && void 0 !== iD && iD, function(DD, CD) {
            return String(Math.round(1e3 * DD) + CD)
          }(ID.size, pD), fD, cD)
        }))
      }
    }
    const XC = {
      player: LD,
      store: TD
    };
    class mC {
      constructor(DD) {
        this.page = DD
      }
      async openMob(DD) {
        return new MC(await this.open(DD, lD), ZC)
      }
      async openPet(DD) {
        return new MC(await this.open(DD, lD), oC)
      }
      openMobLineup(DD) {
        return new gC(DD, ((DD, CD, cD) => this.page.openPreview(lD, DD, CD, cD)))
      }
      async openCharacter(DD, CD) {
        return new tC(await this.open(DD, XC[CD]))
      }
      async open(DD, CD) {
        const [cD, ID] = yC(DD), pD = await this.page.openPreview(CD, cD, ID);
        return BC(DD, pD), pD
      }
    }
  },
  36107: (DD, CD, cD) => {
    cD.d(CD, {
      D: () => vD,
      e: () => ID,
      g: () => pD,
      h: () => yD,
      j: () => oD,
      n: () => SD,
      o: () => ND,
      p: () => QD,
      t: () => wD,
      u: () => MD,
      y: () => tD,
      z: () => ZD
    });
    const ID = [{
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

    function pD(DD, CD) {
      const {
        numLines: cD,
        charsPerLine: pD
      } = ID[CD];
      return gD(DD, cD, pD, !1)
    }
    const iD = 7 / 8,
      fD = .25,
      bD = 8;

    function QD(DD, CD) {
      return {
        width: Math.min(DD, bD) - 2 * fD,
        height: Math.min(CD, bD) - 2 * fD
      }
    }

    function wD(DD, CD, cD) {
      const pD = QD(DD, CD),
        {
          numLines: fD,
          charsPerLine: bD
        } = ID[cD];
      return {
        numLines: Math.max(1, Math.floor(fD / iD * pD.height)),
        charsPerLine: Math.max(1, Math.floor(bD * pD.width))
      }
    }

    function SD(DD, CD, cD, ID) {
      const {
        numLines: pD,
        charsPerLine: iD
      } = wD(cD, ID, CD);
      return gD(DD, pD, iD, !1)
    }
    const BD = 32e3;

    function yD(DD) {
      return DD.slice(0, BD)
    }
    const MD = 512e3,
      tD = 64,
      ZD = MD;

    function oD(DD, CD) {
      const cD = Math.max(0, ZD - CD),
        ID = Math.min(MD, cD);
      return DD.slice(0, ID)
    }
    const vD = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Vb: {
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

    function ND(DD, CD) {
      const {
        numLines: cD,
        charsPerLine: ID
      } = vD[CD];
      return gD(DD, cD, ID, !1)
    }

    function gD(DD, CD, cD, ID, pD) {
      (pD || ID) && (DD = DD.slice(0, null !== pD && void 0 !== pD ? pD : CD * cD));
      const iD = DD.split("\n");
      if (iD.length > CD && iD.splice(CD, iD.length - CD), !ID)
        for (let fD = 0; fD < iD.length; fD++) {
          const DD = iD[fD];
          DD.length > cD && (iD[fD] = DD.substring(0, cD), iD.length < CD && iD.splice(fD + 1, 0, DD.substring(cD)))
        }
      return iD.join("\n")
    }
  },
  42443: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42452: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);