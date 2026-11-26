export const id = 238;
export const ids = [238];
export const modules = {
  36972: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = GB(1217);

    function DB(BB) {
      const OB = /(\d*\.?\d+)px/.exec(BB);
      return OB ? Number(OB[1]) : null
    }

    function QB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let oB = !1;
    const jB = {
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
      drawText: function(BB, OB, YB, jB, yB, JB) {
        if (yB <= 0 || JB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: MB,
          fontVariant: PB,
          fontWeight: zB,
          fontSize: lB,
          font: pB
        } = this, qB = [MB, PB, zB, `${lB}px`, pB].filter(Boolean).join(" "), ZB = [
          [zB, `${lB}px`, QB(pB)].filter(Boolean).join(" "), `${lB}px sans-serif`
        ], NB = BB.font, RB = function(BB, OB, GB) {
          for (const YB of OB) {
            BB.font = YB;
            const OB = DB(BB.font),
              oB = QB(YB);
            if (null !== OB && Math.abs(OB - GB) <= .5 && BB.font.toLowerCase().includes(oB.toLowerCase())) return YB
          }
          return null
        }(BB, [qB, ...ZB], lB);
        RB !== qB && function(BB, OB, YB) {
          oB || (oB = !0, Promise.resolve().then((() => GB(1308))).then((GB => {
            let {
              kq: DB
            } = GB;
            DB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              GP: OB,
              drawnWith: null !== YB && void 0 !== YB ? YB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(qB, NB, RB);
        const WB = DB(BB.font);
        if (null === RB && null !== WB && WB > 0) {
          const GB = lB / WB;
          BB.save();
          try {
            return BB.scale(GB, GB), {
              height: this.drawLines(BB, OB, YB / GB, jB / GB, yB / GB, JB / GB, WB).height * GB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, OB, YB, jB, yB, JB, lB)
      },
      drawLines: function(BB, OB, GB, DB, QB, oB, jB) {
        const yB = GB + QB,
          JB = DB + oB;
        let MB, PB = DB + oB / 2 + jB / 2;
        "right" === this.align ? (MB = yB, BB.textAlign = "right") : "left" === this.align ? (MB = GB, BB.textAlign = "left") : (MB = GB + QB / 2, BB.textAlign = "center");
        for (const YB of OB) {
          BB.measureText(YB).width >= QB && (OB = OB.replace(YB, ""))
        }
        OB = (0, YB.Y)(OB);
        const zB = [],
          lB = OB.split("\n"),
          pB = this.justify ? BB.measureText("\u200a").width : 0;
        lB.forEach((OB => {
          let GB = BB.measureText(OB).width;
          if (GB <= QB) zB.push(OB);
          else {
            let YB = OB;
            const DB = QB;
            let oB, jB, yB;
            for (GB = BB.measureText(YB).width; GB > DB;) {
              for (oB = 0, jB = 0, yB = ""; jB < DB;) oB++, yB = YB.substr(0, oB), jB = BB.measureText(yB).width;
              oB--, yB = yB.substr(0, oB);
              const OB = oB;
              if (" " !== YB.substr(oB, 1)) {
                for (;
                  " " !== YB.substr(oB, 1) && 0 !== oB;) oB--;
                0 === oB && (oB = OB), yB = YB.substr(0, oB)
              }
              yB = this.justify ? this.justifyLine(BB, yB, pB, "\u200a", QB) : yB, YB = YB.substr(oB), GB = BB.measureText(YB).width, zB.push(yB)
            }
            GB > 0 && zB.push(YB)
          }
        }));
        const qB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, OB),
          ZB = qB * (zB.length - 1),
          NB = ZB / 2;
        let RB = DB;
        "top" === this.vAlign ? PB = DB + jB : "bottom" === this.vAlign ? (PB = JB - ZB, RB = JB) : (RB = DB + oB / 2, PB -= NB), zB.forEach((OB => {
          OB = OB.trim(), BB.fillText(OB, MB, PB), PB += qB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(GB, DB, QB, oB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(MB, DB), BB.lineTo(MB, JB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(GB, RB), BB.lineTo(yB, RB), BB.stroke());
        return {
          height: ZB + qB
        }
      },
      getTextHeight: function(BB, OB) {
        const GB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: YB
        } = BB.measureText(OB);
        return BB.textBaseline = GB, YB
      },
      justifyLine: function(BB, OB, GB, YB, DB) {
        const QB = OB.trim(),
          oB = BB.measureText(QB).width,
          jB = QB.split(/\s+/).length - 1,
          yB = Math.floor((DB - oB) / GB);
        if (jB <= 0 || yB <= 0) return QB;
        const JB = Math.floor(yB / jB);
        let MB = yB - jB * JB,
          PB = [];
        for (let zB = 0; zB < JB; zB++) PB.push(YB);
        PB = PB.join("");
        return QB.replace(/\s+/g, (BB => {
          const OB = MB > 0 ? PB + YB : PB;
          return MB--, BB + OB
        }))
      }
    }
  },
  36985: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => qB,
      f: () => pB,
      h: () => zB,
      i: () => MB,
      l: () => PB
    });
    var YB = GB(4642),
      DB = GB(353);
    const QB = 1024,
      oB = 1536,
      jB = 2 * YB.k + 1,
      yB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      JB = 1.5;

    function MB(BB, OB, GB) {
      if ("string" !== typeof BB) return OB;
      try {
        const GB = JSON.parse(BB);
        return GB && "object" === typeof GB ? GB : OB
      } catch (YB) {
        return void 0 !== GB && console.error(`Couldn't parse ${GB}`, YB), OB
      }
    }

    function PB(BB) {
      return MB(BB, null, "a leaderboard's rows")
    }

    function zB(BB, OB) {
      var GB, YB;
      return null !== OB && void 0 !== OB ? OB : {
        status: null !== (GB = BB.status) && void 0 !== GB ? GB : "loading",
        entries: null !== (YB = BB.entries) && void 0 !== YB ? YB : []
      }
    }

    function lB(BB, OB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : OB
    }

    function pB(BB, OB) {
      const GB = lB(BB.size, 1);
      let YB = lB(BB.width, lB(2.5 * GB, 2.5)),
        DB = lB(BB.height, lB(3.75 * GB, 3.75));
      Number.isFinite(QB * DB / YB) && Number.isFinite(oB * YB / DB) || (YB = 2.5, DB = 3.75);
      const jB = DB / YB,
        yB = Math.max(1, Math.min(QB, OB / jB));
      return {
        width: YB,
        height: DB,
        layoutWidth: Math.max(QB, oB / jB),
        layoutHeight: Math.max(oB, QB * jB),
        pixelWidth: Math.round(yB),
        pixelHeight: Math.round(Math.max(1, Math.min(OB, yB * jB)))
      }
    }

    function qB(BB, OB, GB, oB, MB, PB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = DB.J.defaultNameTagBackground, BB.fillRect(0, 0, OB, GB), BB.scale(OB / oB.layoutWidth, GB / oB.layoutHeight), BB.translate((oB.layoutWidth - QB) / 2, 0),
        function(BB, OB, GB, QB) {
          var oB, MB, PB, zB;
          const {
            top: lB,
            around: pB,
            showPlayerText: qB,
            localPlayerDbId: RB
          } = GB, {
            whiteUiText: WB,
            grayUiText: AB,
            yellowUiText: VB
          } = DB.J;
          BB.textBaseline = "middle";
          const SB = function(OB, GB, YB, DB, QB, oB) {
              let jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${DB}px 'Jetbrains Mono', monospace`, BB.fillStyle = QB, BB.textAlign = jB;
              let yB = OB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(yB).width > oB) {
                for (; yB.length > 0 && BB.measureText(`${yB}\u2026`).width > oB;) yB = yB.slice(0, -1);
                yB += "\u2026"
              }
              BB.fillText(yB, GB, YB)
            },
            nB = OB => {
              BB.fillStyle = WB, BB.globalAlpha = .15, BB.fillRect(24, OB, 976, 2), BB.globalAlpha = 1
            },
            UB = null === RB ? null : (0, DB.Ac)(RB),
            fB = BB => null !== UB && BB.playerHash === UB,
            kB = ZB(lB.entries, YB.n),
            dB = "ready" === lB.status && kB.length > 0,
            KB = null === pB ? [] : ZB(pB.entries, jB),
            uB = kB.some(fB),
            mB = null === pB ? null : function(BB) {
              const OB = BB;
              if (!OB || !Number.isFinite(OB.rank) || !Number.isFinite(OB.tied) || !Number.isFinite(OB.total)) return null;
              return OB
            }(pB.standing),
            IB = KB.find(fB),
            FB = kB.find(fB),
            iB = null === mB || void 0 === IB ? null : {
              value: IB.value,
              rank: mB.rank
            },
            LB = NB(kB, void 0 === FB || FB.value === (null === iB || void 0 === iB ? void 0 : iB.value) ? iB : null),
            gB = NB(KB, iB),
            rB = (BB, OB) => {
              const GB = BB.findIndex(fB);
              return GB >= 0 ? OB[GB] : null
            },
            XB = null !== (oB = null !== (MB = null === mB || void 0 === mB ? void 0 : mB.rank) && void 0 !== MB ? MB : rB(KB, gB)) && void 0 !== oB ? oB : rB(kB, LB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const wB = [...dB ? LB : [], ...uB ? [] : gB],
            EB = Math.min(280, Math.max(0, ...wB.map((OB => BB.measureText(yB.format(OB)).width)))),
            cB = EB <= 80,
            hB = cB ? 80 : 32 + EB,
            aB = cB ? 148 : hB + 28,
            eB = 660 - aB;
          SB(`TOP ${YB.n}  /  ALL TIME`, 24, 52, 28, AB, 976), SB(qB ? String(null !== (PB = OB.title) && void 0 !== PB ? PB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, WB, 976), SB("RANK", 32, 174, 28, AB, aB - 40), SB("PLAYER", aB, 174, 28, AB, eB), SB(qB ? String(null !== (zB = OB.scoreLabel) && void 0 !== zB ? zB : "Score").slice(0, 24) : "Score", 992, 174, 28, AB, 304, "right"), nB(202);
          const TB = (QB - 232) / (YB.n + JB + jB),
            bB = 208 + YB.n * TB,
            CB = bB + JB * TB,
            HB = (OB, GB, YB, DB) => {
              const QB = fB(OB);
              BB.fillStyle = QB ? VB : WB, BB.globalAlpha = QB ? .15 : DB ? .035 : 0, BB.fillRect(24, YB - TB / 2 + 1, 976, TB - 2), BB.globalAlpha = 1;
              const oB = QB ? VB : WB;
              SB(yB.format(GB), hB, YB, 34, oB, cB ? 80 : EB, cB ? "center" : "right"), SB(qB ? String(OB.name).slice(0, 64) : "Player", aB, YB, 34, oB, eB);
              const jB = yB.format(OB.value);
              SB(BB.measureText(jB).width > 304 ? OB.value.toExponential(6) : jB, 992, YB, 34, oB, 304, "right")
            };
          if (dB)
            for (const [YB, DB] of kB.entries()) HB(DB, LB[YB], 208 + (YB + .5) * TB, YB % 2 === 0);
          else {
            const BB = "error" === lB.status,
              OB = BB ? "Couldn't load leaderboard" : "ready" === lB.status ? "No scores yet" : "Loading leaderboard\u2026",
              GB = BB ? "Trying again shortly" : "ready" === lB.status ? "Be the first on the board!" : "Fetching the top players",
              YB = (208 + bB) / 2;
            SB(OB, 512, YB - 28, 40, BB ? DB.J.redUiText : WB, 960, "center"), SB(GB, 512, YB + 27, 30, AB, 960, "center")
          }
          const vB = bB + JB * TB / 2;
          if (null === XB) nB(vB);
          else {
            const OB = null === mB ? 0 : mB.tied - 1,
              GB = `YOUR RANK #${yB.format(XB)}${null===mB?"":` of ${yB.format(mB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const YB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(GB).width)));
            SB(GB, 512, vB - (OB > 0 ? 15 : 0), YB, VB, 960, "center"), OB > 0 && SB(`Tied with ${yB.format(OB)} other${1===OB?"":"s"}`, 512, vB + 24, 24, AB, 960, "center")
          }
          if (null === pB) return;
          const sB = CB + jB * TB / 2;
          if (uB) SB(`You're in the top ${YB.n}!`, 512, sB, 40, VB, 960, "center");
          else if (0 === KB.length) SB("You're not on this board yet", 512, sB, 34, AB, 960, "center");
          else
            for (const [YB, DB] of KB.entries()) HB(DB, gB[YB], CB + (YB + .5) * TB, YB % 2 === 0)
        }(BB, MB, PB, oB.layoutHeight)
    }

    function ZB(BB, OB) {
      return Array.isArray(BB) ? BB.slice(0, OB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function NB(BB, OB) {
      const GB = [];
      let YB = !1;
      return BB.forEach(((DB, QB) => {
        if (null !== OB && DB.value === OB.value) return void GB.push(OB.rank);
        const oB = QB > 0 && DB.value === BB[QB - 1].value;
        oB || (YB = 0 === QB && 1 !== DB.rank), GB.push(oB && !YB ? GB[QB - 1] : DB.rank)
      })), GB
    }
  },
  36954: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => QB
    });
    const YB = 32;

    function DB(BB) {
      return Array.from(BB).length
    }

    function QB(BB) {
      const OB = [""];
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DB = "";
      const QB = () => {
        OB.push(""), GB = 0, DB = ""
      };
      for (const oB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(oB)) QB();
        else if (/^\s+$/.test(oB)) DB += oB;
      else if (oB.length > 0) {
        const BB = Array.from(oB);
        GB > 0 && GB + DB.length + BB.length > YB && QB(), OB[OB.length - 1] += DB, GB += DB.length, DB = "";
        for (const DB of BB) GB >= YB && QB(), OB[OB.length - 1] += DB, GB++
      }
      return OB[OB.length - 1] += DB, OB
    }
  },
  36977: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => lB,
      C: () => pB,
      F: () => qB,
      G: () => NB,
      b: () => YB,
      e: () => PB,
      f: () => DB,
      h: () => zB,
      i: () => ZB,
      m: () => MB,
      q: () => RB,
      t: () => yB,
      x: () => JB
    });
    const YB = [{
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

    function DB(BB, OB) {
      const {
        numLines: GB,
        charsPerLine: DB
      } = YB[OB];
      return WB(BB, GB, DB, !1)
    }
    const QB = 7 / 8,
      oB = .25,
      jB = 8;

    function yB(BB, OB) {
      return {
        width: Math.min(BB, jB) - 2 * oB,
        height: Math.min(OB, jB) - 2 * oB
      }
    }

    function JB(BB, OB, GB) {
      const DB = yB(BB, OB),
        {
          numLines: oB,
          charsPerLine: jB
        } = YB[GB];
      return {
        numLines: Math.max(1, Math.floor(oB / QB * DB.height)),
        charsPerLine: Math.max(1, Math.floor(jB * DB.width))
      }
    }

    function MB(BB, OB, GB, YB) {
      const {
        numLines: DB,
        charsPerLine: QB
      } = JB(GB, YB, OB);
      return WB(BB, DB, QB, !1)
    }
    const PB = 32e3;

    function zB(BB) {
      return BB.slice(0, PB)
    }
    const lB = 512e3,
      pB = 64,
      qB = lB;

    function ZB(BB, OB) {
      const GB = Math.max(0, qB - OB),
        YB = Math.min(lB, GB);
      return BB.slice(0, YB)
    }
    const NB = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      KJ: {
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

    function RB(BB, OB) {
      const {
        numLines: GB,
        charsPerLine: YB
      } = NB[OB];
      return WB(BB, GB, YB, !1)
    }

    function WB(BB, OB, GB, YB, DB) {
      (DB || YB) && (BB = BB.slice(0, null !== DB && void 0 !== DB ? DB : OB * GB));
      const QB = BB.split("\n");
      if (QB.length > OB && QB.splice(OB, QB.length - OB), !YB)
        for (let oB = 0; oB < QB.length; oB++) {
          const BB = QB[oB];
          BB.length > GB && (QB[oB] = BB.substring(0, GB), QB.length < OB && QB.splice(oB + 1, 0, BB.substring(GB)))
        }
      return QB.join("\n")
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);