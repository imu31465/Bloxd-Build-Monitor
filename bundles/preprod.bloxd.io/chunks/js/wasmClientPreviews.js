export const id = 71;
export const ids = [71];
export const modules = {
  40219: (MM, rM, iM) => {
    function OM(MM) {
      return void 0 === MM ? void 0 : [MM[0], MM[1], MM[2]]
    }

    function SM(MM) {
      const rM = MM.particles;
      return {
        opts: {
          texture: rM.texture,
          vL: rM.vL,
          minLifeTime: rM.minLifeTime,
          maxLifeTime: rM.maxLifeTime,
          minSize: rM.minSize,
          maxSize: rM.maxSize,
          minEmitPower: rM.minEmitPower,
          maxEmitPower: rM.maxEmitPower,
          emitRate: rM.emitRate,
          gravity: OM(rM.gravity),
          dir1: OM(rM.dir1),
          dir2: OM(rM.dir2),
          colorGradients: rM.colorGradients,
          blendMode: rM.blendMode
        },
        half: [rM.width / 2, rM.height / 2, rM.depth / 2]
      }
    }
    iM.d(rM, {
      b: () => SM
    })
  },
  40186: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      h: () => QM,
      k: () => nM,
      m: () => aM
    });
    var OM = iM(187);
    const SM = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      jM = "PetRoot";
    let aM = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      PM = SM;
    new Map, new Map;

    function nM(MM) {
      var rM;
      return null !== (rM = (0, OM.d)(aM, MM)) && void 0 !== rM ? rM : null
    }

    function QM(MM) {
      var rM;
      return null !== (rM = (0, OM.d)(PM, MM)) && void 0 !== rM ? rM : null
    }
  },
  39673: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM
    });
    const OM = new WeakMap;

    function SM(MM, rM) {
      return OM.set(MM, rM), MM
    }

    function jM(MM) {
      var rM;
      return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
    }
  },
  39689: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM
    });
    var OM = iM(1229);

    function SM(MM) {
      const rM = /(\d*\.?\d+)px/.exec(MM);
      return rM ? Number(rM[1]) : null
    }

    function jM(MM) {
      return MM.split(/[\s,]+/).pop()
    }
    let aM = !1;
    const PM = {
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
      drawText: function(MM, rM, OM, PM, nM, QM) {
        if (nM <= 0 || QM <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: zM,
          fontVariant: LM,
          fontWeight: mM,
          fontSize: HM,
          font: hM
        } = this, JM = [zM, LM, mM, `${HM}px`, hM].filter(Boolean).join(" "), dM = [
          [mM, `${HM}px`, jM(hM)].filter(Boolean).join(" "), `${HM}px sans-serif`
        ], yM = MM.font, lM = function(MM, rM, iM) {
          for (const OM of rM) {
            MM.font = OM;
            const rM = SM(MM.font),
              aM = jM(OM);
            if (null !== rM && Math.abs(rM - iM) <= .5 && MM.font.toLowerCase().includes(aM.toLowerCase())) return OM
          }
          return null
        }(MM, [JM, ...dM], HM);
        lM !== JM && function(MM, rM, OM) {
          aM || (aM = !0, Promise.resolve().then((() => iM(1329))).then((iM => {
            let {
              CJ: SM
            } = iM;
            SM(new Error("A canvas didn't take canvasTxt's font"), {
              font: MM,
              ML: rM,
              drawnWith: null !== OM && void 0 !== OM ? OM : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(JM, yM, lM);
        const EM = SM(MM.font);
        if (null === lM && null !== EM && EM > 0) {
          const iM = HM / EM;
          MM.save();
          try {
            return MM.scale(iM, iM), {
              height: this.drawLines(MM, rM, OM / iM, PM / iM, nM / iM, QM / iM, EM).height * iM
            }
          } finally {
            MM.restore()
          }
        }
        return this.drawLines(MM, rM, OM, PM, nM, QM, HM)
      },
      drawLines: function(MM, rM, iM, SM, jM, aM, PM) {
        const nM = iM + jM,
          QM = SM + aM;
        let zM, LM = SM + aM / 2 + PM / 2;
        "right" === this.align ? (zM = nM, MM.textAlign = "right") : "left" === this.align ? (zM = iM, MM.textAlign = "left") : (zM = iM + jM / 2, MM.textAlign = "center");
        for (const OM of rM) {
          MM.measureText(OM).width >= jM && (rM = rM.replace(OM, ""))
        }
        rM = (0, OM.U)(rM);
        const mM = [],
          HM = rM.split("\n"),
          hM = this.justify ? MM.measureText("\u200a").width : 0;
        HM.forEach((rM => {
          let iM = MM.measureText(rM).width;
          if (iM <= jM) mM.push(rM);
          else {
            let OM = rM;
            const SM = jM;
            let aM, PM, nM;
            for (iM = MM.measureText(OM).width; iM > SM;) {
              for (aM = 0, PM = 0, nM = ""; PM < SM;) aM++, nM = OM.substr(0, aM), PM = MM.measureText(nM).width;
              aM--, nM = nM.substr(0, aM);
              const rM = aM;
              if (" " !== OM.substr(aM, 1)) {
                for (;
                  " " !== OM.substr(aM, 1) && 0 !== aM;) aM--;
                0 === aM && (aM = rM), nM = OM.substr(0, aM)
              }
              nM = this.justify ? this.justifyLine(MM, nM, hM, "\u200a", jM) : nM, OM = OM.substr(aM), iM = MM.measureText(OM).width, mM.push(nM)
            }
            iM > 0 && mM.push(OM)
          }
        }));
        const JM = this.lineHeight ? this.lineHeight : this.getTextHeight(MM, rM),
          dM = JM * (mM.length - 1),
          yM = dM / 2;
        let lM = SM;
        "top" === this.vAlign ? LM = SM + PM : "bottom" === this.vAlign ? (LM = QM - dM, lM = QM) : (lM = SM + aM / 2, LM -= yM), mM.forEach((rM => {
          rM = rM.trim(), MM.fillText(rM, zM, LM), LM += JM
        })), this.debug && (MM.lineWidth = 3, MM.strokeStyle = "#00909e", MM.strokeRect(iM, SM, jM, aM), MM.lineWidth = 2, MM.strokeStyle = "#f6d743", MM.beginPath(), MM.moveTo(zM, SM), MM.lineTo(zM, QM), MM.stroke(), MM.strokeStyle = "#ff6363", MM.beginPath(), MM.moveTo(iM, lM), MM.lineTo(nM, lM), MM.stroke());
        return {
          height: dM + JM
        }
      },
      getTextHeight: function(MM, rM) {
        const iM = MM.textBaseline;
        MM.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: OM
        } = MM.measureText(rM);
        return MM.textBaseline = iM, OM
      },
      justifyLine: function(MM, rM, iM, OM, SM) {
        const jM = rM.trim(),
          aM = MM.measureText(jM).width,
          PM = jM.split(/\s+/).length - 1,
          nM = Math.floor((SM - aM) / iM);
        if (PM <= 0 || nM <= 0) return jM;
        const QM = Math.floor(nM / PM);
        let zM = nM - PM * QM,
          LM = [];
        for (let mM = 0; mM < QM; mM++) LM.push(OM);
        LM = LM.join("");
        return jM.replace(/\s+/g, (MM => {
          const rM = zM > 0 ? LM + OM : LM;
          return zM--, MM + rM
        }))
      }
    }
  },
  39691: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => JM,
      d: () => hM,
      f: () => mM,
      j: () => zM,
      k: () => LM
    });
    var OM = iM(4577),
      SM = iM(332);
    const jM = 1024,
      aM = 1536,
      PM = 2 * OM.j + 1,
      nM = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      QM = 1.5;

    function zM(MM, rM, iM) {
      if ("string" !== typeof MM) return rM;
      try {
        const iM = JSON.parse(MM);
        return iM && "object" === typeof iM ? iM : rM
      } catch (OM) {
        return void 0 !== iM && console.error(`Couldn't parse ${iM}`, OM), rM
      }
    }

    function LM(MM) {
      return zM(MM, null, "a leaderboard's rows")
    }

    function mM(MM, rM) {
      var iM, OM;
      return null !== rM && void 0 !== rM ? rM : {
        status: null !== (iM = MM.status) && void 0 !== iM ? iM : "loading",
        entries: null !== (OM = MM.entries) && void 0 !== OM ? OM : []
      }
    }

    function HM(MM, rM) {
      return "number" === typeof MM && Number.isFinite(MM) && MM > 0 ? MM : rM
    }

    function hM(MM, rM) {
      const iM = HM(MM.size, 1);
      let OM = HM(MM.width, HM(2.5 * iM, 2.5)),
        SM = HM(MM.height, HM(3.75 * iM, 3.75));
      Number.isFinite(jM * SM / OM) && Number.isFinite(aM * OM / SM) || (OM = 2.5, SM = 3.75);
      const PM = SM / OM,
        nM = Math.max(1, Math.min(jM, rM / PM));
      return {
        width: OM,
        height: SM,
        layoutWidth: Math.max(jM, aM / PM),
        layoutHeight: Math.max(aM, jM * PM),
        pixelWidth: Math.round(nM),
        pixelHeight: Math.round(Math.max(1, Math.min(rM, nM * PM)))
      }
    }

    function JM(MM, rM, iM, aM, zM, LM) {
      MM.setTransform(1, 0, 0, 1, 0, 0), MM.fillStyle = SM.L.defaultNameTagBackground, MM.fillRect(0, 0, rM, iM), MM.scale(rM / aM.layoutWidth, iM / aM.layoutHeight), MM.translate((aM.layoutWidth - jM) / 2, 0),
        function(MM, rM, iM, jM) {
          var aM, zM, LM, mM;
          const {
            top: HM,
            around: hM,
            showPlayerText: JM,
            localPlayerDbId: lM
          } = iM, {
            whiteUiText: EM,
            grayUiText: UM,
            yellowUiText: GM
          } = SM.L;
          MM.textBaseline = "middle";
          const CM = function(rM, iM, OM, SM, jM, aM) {
              let PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              MM.font = `bold ${SM}px 'Jetbrains Mono', monospace`, MM.fillStyle = jM, MM.textAlign = PM;
              let nM = rM.replace(/[\r\n\t]/g, " ");
              if (MM.measureText(nM).width > aM) {
                for (; nM.length > 0 && MM.measureText(`${nM}\u2026`).width > aM;) nM = nM.slice(0, -1);
                nM += "\u2026"
              }
              MM.fillText(nM, iM, OM)
            },
            eM = rM => {
              MM.fillStyle = EM, MM.globalAlpha = .15, MM.fillRect(24, rM, 976, 2), MM.globalAlpha = 1
            },
            bM = null === lM ? null : (0, SM.qc)(lM),
            wM = MM => null !== bM && MM.playerHash === bM,
            tM = dM(HM.entries, OM.l),
            gM = "ready" === HM.status && tM.length > 0,
            uM = null === hM ? [] : dM(hM.entries, PM),
            RM = tM.some(wM),
            pM = null === hM ? null : function(MM) {
              const rM = MM;
              if (!rM || !Number.isFinite(rM.rank) || !Number.isFinite(rM.tied) || !Number.isFinite(rM.total)) return null;
              return rM
            }(hM.standing),
            WM = uM.find(wM),
            sM = tM.find(wM),
            DM = null === pM || void 0 === WM ? null : {
              value: WM.value,
              rank: pM.rank
            },
            kM = yM(tM, void 0 === sM || sM.value === (null === DM || void 0 === DM ? void 0 : DM.value) ? DM : null),
            ZM = yM(uM, DM),
            oM = (MM, rM) => {
              const iM = MM.findIndex(wM);
              return iM >= 0 ? rM[iM] : null
            },
            fM = null !== (aM = null !== (zM = null === pM || void 0 === pM ? void 0 : pM.rank) && void 0 !== zM ? zM : oM(uM, ZM)) && void 0 !== aM ? aM : oM(tM, kM);
          MM.font = "bold 34px 'Jetbrains Mono', monospace";
          const YM = [...gM ? kM : [], ...RM ? [] : ZM],
            NM = Math.min(280, Math.max(0, ...YM.map((rM => MM.measureText(nM.format(rM)).width)))),
            AM = NM <= 80,
            xM = AM ? 80 : 32 + NM,
            vM = AM ? 148 : xM + 28,
            FM = 660 - vM;
          CM(`TOP ${OM.l}  /  ALL TIME`, 24, 52, 28, UM, 976), CM(JM ? String(null !== (LM = rM.title) && void 0 !== LM ? LM : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, EM, 976), CM("RANK", 32, 174, 28, UM, vM - 40), CM("PLAYER", vM, 174, 28, UM, FM), CM(JM ? String(null !== (mM = rM.scoreLabel) && void 0 !== mM ? mM : "Score").slice(0, 24) : "Score", 992, 174, 28, UM, 304, "right"), eM(202);
          const BM = (jM - 232) / (OM.l + QM + PM),
            XM = 208 + OM.l * BM,
            IM = XM + QM * BM,
            KM = (rM, iM, OM, SM) => {
              const jM = wM(rM);
              MM.fillStyle = jM ? GM : EM, MM.globalAlpha = jM ? .15 : SM ? .035 : 0, MM.fillRect(24, OM - BM / 2 + 1, 976, BM - 2), MM.globalAlpha = 1;
              const aM = jM ? GM : EM;
              CM(nM.format(iM), xM, OM, 34, aM, AM ? 80 : NM, AM ? "center" : "right"), CM(JM ? String(rM.name).slice(0, 64) : "Player", vM, OM, 34, aM, FM);
              const PM = nM.format(rM.value);
              CM(MM.measureText(PM).width > 304 ? rM.value.toExponential(6) : PM, 992, OM, 34, aM, 304, "right")
            };
          if (gM)
            for (const [OM, SM] of tM.entries()) KM(SM, kM[OM], 208 + (OM + .5) * BM, OM % 2 === 0);
          else {
            const MM = "error" === HM.status,
              rM = MM ? "Couldn't load leaderboard" : "ready" === HM.status ? "No scores yet" : "Loading leaderboard\u2026",
              iM = MM ? "Trying again shortly" : "ready" === HM.status ? "Be the first on the board!" : "Fetching the top players",
              OM = (208 + XM) / 2;
            CM(rM, 512, OM - 28, 40, MM ? SM.L.redUiText : EM, 960, "center"), CM(iM, 512, OM + 27, 30, UM, 960, "center")
          }
          const qM = XM + QM * BM / 2;
          if (null === fM) eM(qM);
          else {
            const rM = null === pM ? 0 : pM.tied - 1,
              iM = `YOUR RANK #${nM.format(fM)}${null===pM?"":` of ${nM.format(pM.total)}`}`;
            MM.font = "bold 36px 'Jetbrains Mono', monospace";
            const OM = Math.max(20, Math.min(36, Math.floor(34560 / MM.measureText(iM).width)));
            CM(iM, 512, qM - (rM > 0 ? 15 : 0), OM, GM, 960, "center"), rM > 0 && CM(`Tied with ${nM.format(rM)} other${1===rM?"":"s"}`, 512, qM + 24, 24, UM, 960, "center")
          }
          if (null === hM) return;
          const TM = IM + PM * BM / 2;
          if (RM) CM(`You're in the top ${OM.l}!`, 512, TM, 40, GM, 960, "center");
          else if (0 === uM.length) CM("You're not on this board yet", 512, TM, 34, UM, 960, "center");
          else
            for (const [OM, SM] of uM.entries()) KM(SM, ZM[OM], IM + (OM + .5) * BM, OM % 2 === 0)
        }(MM, zM, LM, aM.layoutHeight)
    }

    function dM(MM, rM) {
      return Array.isArray(MM) ? MM.slice(0, rM).filter((MM => MM && Number.isFinite(MM.rank) && Number.isFinite(MM.value))) : []
    }

    function yM(MM, rM) {
      const iM = [];
      let OM = !1;
      return MM.forEach(((SM, jM) => {
        if (null !== rM && SM.value === rM.value) return void iM.push(rM.rank);
        const aM = jM > 0 && SM.value === MM[jM - 1].value;
        aM || (OM = 0 === jM && 1 !== SM.rank), iM.push(aM && !OM ? iM[jM - 1] : SM.rank)
      })), iM
    }
  },
  39922: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM
    });
    const OM = 32;

    function SM(MM) {
      return Array.from(MM).length
    }

    function jM(MM) {
      const rM = [""];
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SM = "";
      const jM = () => {
        rM.push(""), iM = 0, SM = ""
      };
      for (const aM of MM.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(aM)) jM();
        else if (/^\s+$/.test(aM)) SM += aM;
      else if (aM.length > 0) {
        const MM = Array.from(aM);
        iM > 0 && iM + SM.length + MM.length > OM && jM(), rM[rM.length - 1] += SM, iM += SM.length, SM = "";
        for (const SM of MM) iM >= OM && jM(), rM[rM.length - 1] += SM, iM++
      }
      return rM[rM.length - 1] += SM, rM
    }
  },
  42291: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    const OM = 4e5,
      SM = 2;

    function jM(MM, rM, iM) {
      let [jM, aM] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [MM, rM], PM = Math.min(Number.isFinite(iM) && iM > 0 ? iM : 1, SM);
      const nM = Math.max(0, jM, MM) * Math.max(0, aM, rM) * PM * PM;
      return nM > OM && (PM *= Math.sqrt(OM / nM)), [Math.max(1, Math.floor(Math.max(0, MM) * PM)), Math.max(1, Math.floor(Math.max(0, rM) * PM))]
    }
  },
  53732: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      WasmPreviewHost: () => sr,
      pageBuiltInAnimationPack: () => mM,
      pagePreviews: () => jr,
      previewModule: () => TM
    });
    var OM = iM(3188),
      SM = iM(632);
    const jM = "[bloxd-wasm-client]";

    function aM(MM) {
      const rM = {
        wasm: "unknown",
        client: String(SM.c)
      };
      try {
        var iM;
        rM.wasm = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.NL()) && void 0 !== iM ? iM : rM.wasm
      } catch {}
      return rM
    }
    async function PM(MM) {
      if (MM.length < 2 || 31 !== MM[0] || 139 !== MM[1]) return MM;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: rM
        } = await Promise.resolve().then((() => iM(3139)));
        return rM(MM)
      }
      const rM = new Blob([MM]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(rM).arrayBuffer())
    }

    function nM(MM, rM, OM, SM) {
      Promise.resolve().then((() => iM(41833))).then((iM => {
        let {
          reportDataLoadFailure: jM
        } = iM;
        jM(MM, rM, OM, SM)
      }), (rM => {
        console.warn(`${jM} ${MM} didn't load, and the report couldn't be sent`, OM.error, rM)
      }))
    }
    const QM = [3e4, 12e4, 3e5];
    class zM {
      constructor(MM) {
        this.deps = MM, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((MM => {
          this.resolveSet = MM
        }))
      }
      provide(MM) {
        return this.loading ??= this.load(MM), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(MM) {
        const rM = aM(MM),
          iM = await async function(MM, rM) {
            let iM;
            try {
              iM = await MM()
            } catch (OM) {
              return {
                stage: "fetch",
                error: OM
              }
            }
            try {
              return rM(iM) ? null : {
                stage: "decode",
                error: null
              }
            } catch (OM) {
              return {
                stage: "decode",
                error: OM
              }
            }
          }((() => this.deps.fetch()), (rM => {
            const iM = MM.bjM(rM);
            return iM && this.resolveSet(rM), iM
          }));
        if (null !== iM) {
          if ("fetch" === iM.stage) {
            this.loading = null;
            const rM = QM[this.retries++];
            void 0 !== rM && this.deps.later((() => {
              this.provide(MM)
            }), rM)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(iM, rM))
        }
      }
    }
    let LM = null;

    function mM() {
      return LM ??= new zM({
        fetch: async () => PM(await (0, OM.F)(HM(), {
          priority: "low"
        })),
        onFailed: (MM, rM) => {
          nM("builtInAnimations", HM(), MM, rM)
        },
        later: (MM, rM) => {
          setTimeout(MM, rM)
        }
      }), LM
    }

    function HM() {
      return iM(53739)
    }
    var hM = iM(3185),
      JM = iM(1202),
      dM = iM(310),
      yM = iM(308),
      lM = iM(656),
      EM = iM(5198),
      UM = iM(41798),
      GM = iM(41819),
      CM = iM(42039),
      eM = (iM(41862), iM(41882)),
      bM = iM(41884),
      wM = iM(41888),
      tM = iM(41809),
      gM = iM(42055),
      uM = iM(42061),
      RM = iM(41793),
      pM = iM(42076),
      WM = iM(41932),
      sM = iM(41922),
      DM = iM(41984),
      kM = iM(42045),
      ZM = iM(53661),
      oM = iM(37229),
      fM = iM(4088),
      YM = iM(42291);
    const NM = "[bloxd-previews]",
      AM = 0,
      xM = 1,
      vM = 2,
      FM = 1,
      BM = 2,
      XM = 3,
      IM = 0,
      KM = 1,
      qM = 2;

    function TM(MM) {
      const rM = MM,
        iM = (0, UM.P)(MM),
        OM = (0, UM.k)(MM);
      return null !== iM && null !== OM && "function" === typeof rM.GjM && "function" === typeof rM.CjM && "function" === typeof rM.ejM ? rM : null
    }

    function VM() {
      return iM(53745)
    }
    async function cM(MM, rM, OM) {
      var SM;
      let jM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === MM && (0, RM.y)();
      const PM = await (0, RM.U)();
      if (null === PM || (0, UM.l)(PM) || (0, RM.e)()) return;
      const nM = "webgpu" === PM.backend;
      if (!nM && "lost" !== MM) return;
      const QM = nM && (0, yM.m)(PM.adapter, null !== OM && void 0 !== OM ? OM : null, "lost" === MM, jM),
        zM = null !== (SM = "lost" === MM ? (0, GM.o)((0, hM.R)() ? (0, UM.P)((0, hM.E)()) : null) : void 0) && void 0 !== SM ? SM : rM,
        LM = nM ? (0, UM.X)(MM, void 0, (0, GM.c)(zM)) : null;
      if (null === LM) {
        nM || (0, lM.C)(), (0, RM.s)();
        try {
          await async function(MM, rM, OM, SM, jM) {
            let {
              restoreLost: PM,
              adapterRemembered: nM
            } = jM;
            const QM = (0, hM.R)(),
              {
                flushCrashReports: zM,
                reportRenderReload: LM
              } = await Promise.resolve().then((() => iM(41833)));
            LM(MM.backend, SM, aM(QM ? (0, hM.E)() : null), {
              from: "home",
              cause: rM,
              restoreLost: PM,
              adapterRemembered: nM,
              ...Mr(MM, rM, OM)
            }), await zM(WM.c)
          }(PM, MM, zM, null !== OM && void 0 !== OM ? OM : "start_failed" === MM ? 0 : 1, {
            restoreLost: jM,
            adapterRemembered: QM
          })
        } catch (HM) {
          console.warn(`${NM} ${PM.backend} failed at home (${MM}), and its report couldn't be sent`, HM)
        }(0, WM.k)()
      } else {
        var mM;
        const rM = Mr(PM, MM, zM),
          OM = `WebGPU failed at home (${MM}${void 0===rM.error?"":`: ${rM.error instanceof Error?rM.error.message:(0,oM.k)(rM.error)}`}) and ${LM}`;
        console.warn(`${NM} ${OM}: the previews stop`, null !== (mM = rM.error) && void 0 !== mM ? mM : ""), (0, RM.u)(OM);
        try {
          const {
            countRenderLost: OM
          } = await Promise.resolve().then((() => iM(41833)));
          OM(MM, rM.error, rM.context)
        } catch (JM) {
          console.warn(`${NM} WebGPU failed at home (${MM}), and its count couldn't be sent`, JM)
        }
      }
    }

    function Mr(MM, rM, iM) {
      let {
        adapter: OM
      } = MM;
      return {
        error: iM,
        context: {
          adapter: OM,
          boundAtMs: "start_failed" === rM ? null : (0, RM.O)(),
          indirectHangs: (0, RM.C)(),
          restoresSkipped: (0, RM.R)()
        }
      }
    }
    async function rr() {
      if (!(0, hM.R)()) {
        const MM = await (0, RM.U)();
        if (null === MM || (0, UM.l)(MM)) return null;
        if (await (0, pM.b)(await MM.load()), !(0, hM.R)()) return null
      }
      return TM((0, hM.E)())
    }
    class ir {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.page = MM, this.host = rM, this.id = iM, this.canvas = OM, this.size = SM, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const aM = {
            ...jM.images,
            glbUrl: MM => {
              var rM;
              return null !== (rM = this.models.drawnUrl(MM)) && void 0 !== rM ? rM : jM.images.glbUrl(MM)
            }
          },
          PM = rM => MM.modelFile(rM);
        this.images = new CM.d(aM, (MM => {
          console.warn(`${NM} image ${MM.key.kind}:${MM.key.index}:${MM.key.word} failed`, MM.error)
        }), {
          fetchFile: PM,
          fetchImage: rM => MM.imageFile(rM)
        }), MM.startModels(), this.models = new eM.f(jM.files, ((rM, iM) => MM.buildModel(rM, iM)), (MM => {
          console.warn(`${NM} model file ${MM.file} (${MM.url}) failed`, MM.error)
        }), {
          fetchFile: PM,
          onWritten: (MM, rM) => {
            this.images.glbWritten(MM, rM)
          },
          onTaken: (MM, rM) => {
            this.images.glbTaken(MM, rM)
          }
        }), this.write = (MM, rM, iM) => {
          if (this.closed) return !0;
          if (MM === eM.d) {
            const MM = new DataView(iM.buffer, iM.byteOffset, wM.b),
              OM = MM.getUint32(0, !0),
              SM = MM.getUint32(wM.d, !0),
              jM = this.page.hostCall(qM, (() => this.host.uaM(this.id, OM, rM, iM.subarray(wM.b))));
            return this.outcomes.push([SM, jM]), !0
          }
          return MM === CM.b && (this.page.hostCall(void 0, (() => {
            this.host.paM(this.id, iM)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(MM, rM, iM) {
        if (this.closed) return;
        const [OM, SM] = (0, YM.d)(MM, rM, this.page.dpr(), iM);
        OM === this.size[0] && SM === this.size[1] || (this.size = [OM, SM], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, OM, SM)
        })))
      }
      setMob(MM, rM, iM, OM) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.oaM(this.id, MM, rM, iM, OM))))
      }
      setPet(MM, rM, iM, OM) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.NaM(this.id, MM, rM, iM, OM))))
      }
      setPlayer(MM, rM, iM) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.DaM(this.id, MM, rM, iM))))
      }
      setCompanions(MM) {
        var rM;
        let {
          pet: iM,
          aura: OM
        } = MM;
        if (this.closed) return;
        const SM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.model) && void 0 !== rM ? rM : -1,
          jM = new Float64Array(iM ? [iM.scale, ...iM.offset, iM.yawOffset, iM.bobAmplitude, iM.bobHz] : []),
          aM = new Float64Array(OM ? [...OM.offset, ...OM.half] : []);
        this.page.hostCall(void 0, (() => {
          var MM, rM;
          this.host.saM(this.id, SM, jM, null !== (MM = null === iM || void 0 === iM ? void 0 : iM.flyClip) && void 0 !== MM ? MM : "", null !== (rM = null === OM || void 0 === OM ? void 0 : OM.opts) && void 0 !== rM ? rM : "", aM)
        }))
      }
      setFigure(MM, rM, iM, OM) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.kaM(this.id, MM, rM, iM, OM))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const MM = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === MM || MM.length < 3 ? null : {
          alpha: MM[0],
          beta: MM[1],
          radius: MM[2]
        }
      }
      setOrbit(MM) {
        let {
          alpha: rM,
          beta: iM,
          radius: OM
        } = MM;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.YaM(this.id, rM, iM, OM)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((MM => {
          this.settled.push(MM)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, gM.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [MM, rM] of this.outcomes) {
          const iM = rM === IM ? [] : [rM === KM ? MM : (MM | eM.e) >>> 0];
          this.models.taken(MM, iM)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(MM) {
        let rM = !1;
        if (MM) {
          const MM = this.host.vaM(this.id);
          for (const rM of MM) this.models.request(rM);
          const iM = this.host.xaM(this.id);
          iM.length > 0 && this.images.onEvent(iM), rM = MM.length > 0 || iM.length > 0
        }
        const iM = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          OM = rM || iM > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = OM ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(MM) {
        this.page.hostCall(void 0, (() => {
          const rM = this.host.close(this.id);
          rM.length > 0 && this.images.onEvent(rM), this.page.isTrapped || MM.ejM(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const MM = this.settled;
        this.settled = [];
        for (const rM of MM) rM()
      }
    }
    class Or {
      constructor(MM) {
        this.deps = MM, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: MM => {
            this.modelsFailed(MM)
          },
          onDecoderFailed: MM => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${NM} the Draco decoder didn't load: models waiting on it won't draw`, MM))
          },
          onWorkerLost: MM => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${NM} a model worker was lost: ${MM}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.nh = {
          setShaderPack: (MM, rM, iM, OM, SM) => (this.shaderPackArgs = [MM, rM, iM, OM, SM], this.handOverShaderPack(), !0)
        }, this.frame = MM => {
          this.frameId = null;
          const rM = this.host;
          if (null !== rM && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(rM, MM)
          } catch (iM) {
            if (!this.stopIfTrapped(iM) && (this.stop(), (0, UM.p)(iM))) return void this.deps.onRenderFailed("frames_refused", iM);
            console.warn(`${NM} the previews stopped: their frame threw`, iM)
          }
        }, MM.pack.onChange((() => {
          this.packChanged()
        })), MM.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const MM of this.previews.values()) MM.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var MM, rM;
        return null !== (MM = null === (rM = this.host) || void 0 === rM ? void 0 : rM.attached()) && void 0 !== MM && MM
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((MM, rM) => MM + rM), 0) / this.costs.length
      }
      async bindSession(MM, rM, iM) {
        const OM = this.binding,
          SM = this.sessionEnds;
        try {
          const jM = this.hostOf(MM);
          if (!jM.RaM()) {
            const rM = (0, DM.g)().sampleCount,
              aM = await iM(rM);
            if (this.sessionEnds !== SM) return this.keepRendererOfEndedSession(MM, jM, aM, rM, OM), rM;
            if (!jM.HaM(aM)) throw new Error("the page has a renderer already");
            (0, RM.v)(performance.now()), this.samples = rM, (0, kM.f)((0, UM.k)(MM))
          }
          if (!jM.attach(rM)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === OM && this.endBinding()
        }
      }
      keepRendererOfEndedSession(MM, rM, iM, OM, SM) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== SM) try {
          iM.free()
        } catch (jM) {
          console.warn(`${NM} an ended session's renderer didn't free`, jM)
        } else rM.HaM(iM) && ((0, RM.v)(performance.now()), this.samples = OM, (0, kM.f)(this.registryOf(MM)))
      }
      async beginSession() {
        var MM;
        let rM = () => {};
        const iM = new Promise((MM => {
          rM = MM
        }));
        this.binding = {
          done: iM,
          release: rM
        }, await (null === (MM = this.opening) || void 0 === MM ? void 0 : MM.catch((() => null)));
        const OM = this.pageCanvas;
        return this.pageCanvas = null, OM
      }
      endSession(MM) {
        var rM, iM;
        if (this.sessionEnds++, this.lastEndReturned = MM, this.endBinding(), MM) {
          try {
            var OM;
            null === (OM = this.host) || void 0 === OM || OM.detach()
          } catch (SM) {
            return void console.warn(`${NM} the session's core kept the page's renderer`, SM)
          }!0 === (null === (rM = this.host) || void 0 === rM ? void 0 : rM.attached()) && console.warn(`${NM} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (iM = this.host) || void 0 === iM ? void 0 : iM.RaM()) && (0, kM.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var MM;
        null === (MM = this.binding) || void 0 === MM || MM.release(), this.binding = null
      }
      async openPreview(MM, rM, iM, OM) {
        const SM = await this.renderingHost(),
          jM = this.module;
        if (null === SM || null === jM) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(SM), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(jM)
        }));
        const aM = this.nextId++,
          PM = this.deps.createCanvas(),
          [nM, QM] = (0, YM.d)(rM, iM, this.deps.dpr(), OM);
        PM.width = nM, PM.height = QM;
        if (!this.guarded((() => (jM.CjM(aM, PM), SM.open(aM, nM, QM, MM))))) throw this.hostCall(void 0, (() => {
          jM.ejM(aM)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const zM = new ir(this, SM, aM, PM, [nM, QM], this.deps);
        return this.previews.set(aM, zM), this.startFrames(), zM
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, RM.e)() || null !== (0, RM.K)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((MM => {
          null === MM || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(MM) {
        return this.prefetchedOr(MM, this.deps.fetchModel)
      }
      imageFile(MM) {
        return this.prefetchedOr(MM, OM.F)
      }
      prefetchedOr(MM, rM) {
        const iM = this.prefetchedFiles.get(MM);
        return void 0 === iM ? rM(MM) : iM.catch((() => rM(MM)))
      }
      async prefetchPlayerFiles() {
        const MM = this.deps.playerFile().then((MM => this.deps.files.url(MM))),
          rM = await Promise.all([MM, this.deps.images.lifeformAtlasUrl(gM.c)]).catch((() => null));
        if (null === rM) return;
        const [iM, OM] = rM, SM = (MM, rM) => {
          if (null === MM) return;
          const iM = rM(MM);
          this.prefetchedFiles.set(MM, iM), iM.catch((() => {
            this.prefetchedFiles.delete(MM)
          }))
        };
        SM(iM, (MM => this.modelFile(MM))), SM(OM, (MM => this.imageFile(MM)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((MM => (null === MM && (this.moduleLoad = null), MM)), (MM => {
          throw this.moduleLoad = null, MM
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((MM => {
          throw this.animationTable = null, MM
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((MM => (this.modelsFailed(MM), () => new Promise((() => {})))))
      }
      buildModel(MM, rM) {
        return this.startModels(), this.models.then((iM => iM(MM, rM))).then((MM => this.unavailable ? new Promise((() => {})) : MM))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(MM) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${NM} the model workers didn't start: models won't draw in the previews`, MM))
      }
      called(MM) {
        return 0 !== MM && this.logError(MM, 0), MM
      }
      closePreview(MM) {
        this.previews.delete(MM.id), null !== this.module && MM.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(MM) {
        if (null !== this.module && this.module !== MM) throw new Error("a second renderer module on one page");
        return this.module = MM, null === this.host && (this.host = this.guarded((() => new MM.GjM)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: MM
        } = this;
        null !== MM && this.outsideCall("the game's start or end", (() => {
          MM.ZaM(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: MM,
          shaderPackArgs: rM
        } = this;
        null !== MM && null !== rM && this.outsideCall("the shader pack's hand-over", (() => {
          MM.dOM(...rM) || console.warn(`${NM} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(MM, rM) {
        try {
          this.hostCall(void 0, rM)
        } catch (iM) {
          this.stop(), console.warn(`${NM} the previews stopped: ${MM} threw`, iM)
        }
      }
      async loadAnimations(MM) {
        const rM = aM(null),
          iM = this.module;
        try {
          rM.wasm = null === iM ? rM.wasm : this.hostCall(rM.wasm, (() => iM.NL()))
        } catch {}
        let OM, SM;
        try {
          OM = await this.fetchAnimationTable()
        } catch (jM) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: jM
          }, rM)
        }
        if (!this.settleIfTrapped()) {
          try {
            SM = MM.WaM(OM)
          } catch (jM) {
            if (this.stopIfTrapped(jM)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: jM
            }, rM)
          }
          SM || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, rM)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const MM = this.host;
        return null !== MM && this.guarded((() => MM.RaM())) ? MM : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var MM;
        const rM = null !== (MM = this.module) && void 0 !== MM ? MM : await this.loadModule();
        if (null === rM) return null;
        const iM = this.hostOf(rM),
          OM = () => this.guarded((() => iM.RaM()));
        if (OM()) return iM;
        if (null !== (0, RM.K)() || (0, RM.e)()) return null;
        const SM = this.deps.createCanvas();
        SM.width = 1, SM.height = 1;
        const jM = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const aM = (0, DM.g)().sampleCount;
        let PM;
        try {
          PM = await (0, UM.w)(rM, "previewRenderer", SM, aM, ZM.e, jM)
        } catch (nM) {
          throw nM instanceof tM.e ? this.stopForTrap(nM) : (0, UM.t)(nM) && await this.deps.onRenderFailed("start_failed", nM), nM
        }
        return this.guarded((() => iM.HaM(PM))) ? ((0, RM.v)(performance.now()), this.samples = aM, this.pageCanvas = SM, (0, kM.f)(this.registryOf(rM)), iM) : OM() ? iM : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(MM, rM) {
        for (const aM of this.previews.values()) aM.feed();
        if (this.stopped) return;
        const iM = this.deps.now(),
          OM = MM.frame(rM);
        this.costs.push(this.deps.now() - iM), this.costs.length > 120 && this.costs.shift();
        const SM = 0 !== (256 & OM),
          jM = 255 & OM;
        for (const aM of this.previews.values()) {
          if (this.stopped) return;
          aM.collect(SM)
        }
        if (!this.stopped) {
          if (0 !== (512 & OM) && this.deps.onDrew(), SM) {
            const rM = MM.AaM();
            for (let MM = 0; MM + 1 < rM.length; MM += 2) rM[MM] === EM.H.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(rM[MM], rM[MM + 1])
          }
          if (jM !== FM) {
            if (jM === BM) return this.stop(), void this.deps.onFatal(MM.waM(), MM.taM());
            if (jM === XM) return this.stop(), void console.warn(`${NM} the previews stopped: the page's renderer went with its session`);
            (0, dM.d)(rM), this.startFrames()
          } else {
            const rM = MM.gaM();
            this.stop();
            const iM = rM[2] === EM.Tc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(iM, void 0, rM[1], rM[2] === EM.Tc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, tM.m)(this.module) || "failed" === (0, hM.B)())
      }
      hostCall(MM, rM) {
        if (this.settleIfTrapped()) return MM;
        try {
          return rM()
        } catch (iM) {
          if (this.stopIfTrapped(iM)) return MM;
          throw iM
        }
      }
      guarded(MM) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return MM()
        } catch (rM) {
          throw this.stopIfTrapped(rM), rM
        }
      }
      registryOf(MM) {
        return {
          iOM: (rM, iM) => {
            this.hostCall(void 0, (() => {
              MM.iOM(rM, iM)
            }))
          },
          SOM: rM => {
            this.hostCall(void 0, (() => {
              MM.SOM(rM)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, kM.f)(null)), !0)
      }
      stopIfTrapped(MM) {
        return !(null === this.module || !(0, tM.q)(this.module, MM)) && (this.stopForTrap(MM), !0)
      }
      stopForTrap(MM) {
        this.stop(), (0, kM.f)(null), (0, fM.g)("previews", MM)
      }
      stop() {
        this.stopped = !0;
        for (const MM of this.previews.values()) MM.abandon()
      }
      logError(MM, rM) {
        const iM = `${MM}:${rM}`;
        this.loggedErrors.has(iM) || (this.loggedErrors.add(iM), console.warn(`${NM} error ${MM} (detail ${rM})`))
      }
    }
    let Sr = null;

    function jr() {
      return Sr ??= new Or(function() {
        const MM = (0, bM.r)(JM.clientSideServerUrls.staticUrl, {
          packUrl: MM => {
            var rM, iM;
            return null !== (rM = null === (iM = gM.g.current) || void 0 === iM ? void 0 : iM.modelUrl(MM)) && void 0 !== rM ? rM : null
          }
        });
        return {
          loadModule: rr,
          startModels: async MM => {
            const {
              pageModelPool: rM
            } = await iM.e(49).then((() => iM(53807))), {
              pool: OM
            } = rM(MM);
            return (MM, rM) => OM.build(MM, rM)
          },
          fetchAnimations: async () => PM(await (0, OM.F)(VM())),
          playerFile: async () => (await (0, bM.o)()).PLAYER_FILE,
          onAnimationsFailed: (MM, rM) => {
            nM("previewAnimations", VM(), MM, rM)
          },
          provideBuiltInAnimationPack: MM => {
            mM().provide(MM)
          },
          openExtras: RM.F,
          files: MM,
          images: (0, gM.n)((0, CM.m)(MM.url), (() => gM.g.current)),
          pack: gM.g,
          game: uM.e,
          fetchModel: MM => (0, bM.j)(MM),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: MM => requestAnimationFrame(MM),
          cancelFrame: MM => {
            cancelAnimationFrame(MM)
          },
          onRenderFailed: cM,
          onFatal: (MM, rM) => {
            console.error(`${NM} the previews stopped: renderer error ${MM} (detail ${rM})`)
          },
          onDeviceLost: () => {
            (0, RM.G)() === sM.b.webgpu && ((0, GM.g)((0, hM.R)() ? (0, UM.P)((0, hM.E)()) : null), yM.B.lost())
          },
          onDrew: () => {
            yM.B.drew()
          }
        }
      }()), Sr
    }
    var ar = iM(613),
      Pr = iM(39673),
      nr = iM(3693);
    const Qr = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      shiver: 9,
      snowAngel: 10,
      mobIdle: 11,
      caveGolem: 12,
      magmaGolem: 13,
      frostWraith: 14,
      tikiTerror: 15,
      gunReady: 16,
      gunAimed: 17
    };
    var zr = iM(40219),
      Lr = iM(40186),
      mr = iM(45251);
    class Hr {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(MM, rM) {
        const iM = void 0 === MM ? null : (0, Lr.k)(MM),
          OM = void 0 === rM ? null : (0, Lr.h)(rM);
        return iM === this.pet && OM === this.aura || (this.pet = iM, this.aura = OM, this.companions = {
          pet: iM && hr(iM),
          aura: OM && Jr(OM)
        }), this.companions
      }
    }

    function hr(MM) {
      var rM;
      const iM = mr.COSMETIC_MODEL_KEYS.get(MM.model);
      if (void 0 === iM) return console.warn(`[bloxd-previews] pet model ${MM.model} isn't a Player attachment model`), null;
      const {
        scale: OM,
        followOffset: SM,
        yawOffset: jM,
        bobAmplitude: aM,
        bobHz: PM,
        clips: nM
      } = MM;
      return {
        model: iM,
        scale: OM,
        offset: SM,
        yawOffset: jM,
        bobAmplitude: aM,
        bobHz: PM,
        flyClip: null !== (rM = null === nM || void 0 === nM ? void 0 : nM.fly) && void 0 !== rM ? rM : null
      }
    }

    function Jr(MM) {
      const {
        opts: rM,
        half: iM
      } = (0, zr.b)(MM);
      return {
        opts: JSON.stringify(rM),
        offset: MM.offset,
        half: iM
      }
    }
    const dr = "[bloxd-previews]",
      yr = new Uint32Array(5);

    function lr(MM) {
      return ar.j.indexOf(MM)
    }
    const Er = new WeakSet;

    function Ur(MM) {
      const rM = (0, Pr.g)(MM),
        iM = null === rM ? -1 : Gr(rM);
      return -1 !== iM ? iM : (Er.has(MM) || (Er.add(MM), console.warn(`${dr} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Gr(MM) {
      var rM;
      return null !== (rM = Qr[MM]) && void 0 !== rM ? rM : -1
    }

    function Cr(MM, rM) {
      const {
        canvas: iM
      } = rM;
      iM.style.width = "100%", iM.style.height = "100%", iM.style.display = "block", MM.appendChild(iM)
    }

    function er(MM) {
      const rM = MM.getBoundingClientRect();
      return [rM.width, rM.height]
    }
    class br {
      constructor(MM, rM) {
        this.preview = MM, this.showView = rM
      }
      show(MM) {
        this.showView(this.preview, MM)
      }
      resize(MM, rM) {
        this.preview.resize(MM, rM)
      }
      close() {
        this.preview.close()
      }
    }
    class wr {
      constructor(MM) {
        this.preview = MM, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new Hr, this.companions = null, this.detachControls = void 0, this.detachControls = function(MM) {
          const {
            canvas: rM
          } = MM;
          let iM = null;
          const OM = MM => {
              var OM;
              iM = {
                pointer: MM.pointerId,
                x: MM.clientX,
                y: MM.clientY
              }, null === (OM = rM.setPointerCapture) || void 0 === OM || OM.call(rM, MM.pointerId)
            },
            SM = rM => {
              var OM;
              const SM = MM.orbit;
              if ((null === (OM = iM) || void 0 === OM ? void 0 : OM.pointer) !== rM.pointerId || null === SM) return;
              const jM = rM.clientX - iM.x,
                aM = rM.clientY - iM.y;
              iM = {
                ...iM,
                x: rM.clientX,
                y: rM.clientY
              }, MM.setOrbit({
                alpha: SM.alpha - .01 * jM,
                beta: Math.min(Math.PI - .01, Math.max(.01, SM.beta - .01 * aM)),
                radius: SM.radius
              })
            },
            jM = MM => {
              var rM;
              (null === (rM = iM) || void 0 === rM ? void 0 : rM.pointer) === MM.pointerId && (iM = null)
            },
            aM = rM => {
              const iM = MM.orbit;
              if (null === iM) return;
              rM.preventDefault();
              const OM = rM.deltaY * (rM.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : rM.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                SM = Math.min(100, Math.max(5, iM.radius + .08 * OM));
              MM.setOrbit({
                ...iM,
                radius: SM
              })
            };
          return rM.style.touchAction = "none", rM.addEventListener("pointerdown", OM), rM.addEventListener("pointermove", SM), rM.addEventListener("pointerup", jM), rM.addEventListener("pointercancel", jM), rM.addEventListener("wheel", aM, {
            passive: !1
          }), () => {
            rM.removeEventListener("pointerdown", OM), rM.removeEventListener("pointermove", SM), rM.removeEventListener("pointerup", jM), rM.removeEventListener("pointercancel", jM), rM.removeEventListener("wheel", aM)
          }
        }(MM), this.dev = {
          canvas: () => MM.canvas,
          isolateHead: () => {
            console.warn(`${dr} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${dr} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = MM.untilSettled().then((() => {
          if (MM.isStopped) throw new Error(`${dr} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(MM, rM) {
        this.cosmetics[MM] = rM, this.apply()
      }
      playEmote(MM) {
        null === MM || MM !== this.emote ? (this.emote = MM, this.apply()) : this.preview.replay()
      }
      untilDrawn(MM) {
        return this.preview.untilSettled()
      }
      setOrbit(MM) {
        let {
          yaw: rM,
          pitch: iM,
          radius: OM
        } = MM;
        const SM = this.preview.orbit;
        null !== SM && this.preview.setOrbit({
          alpha: rM,
          beta: iM,
          radius: null !== OM && void 0 !== OM ? OM : SM.radius
        })
      }
      resetCamera() {}
      resize(MM, rM) {
        this.preview.resize(MM, rM)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var MM;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), yr, null === (MM = this.emote) ? -1 : Gr(MM));
        const rM = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        rM !== this.companions && (this.companions = rM, this.preview.setCompanions(rM))
      }
    }

    function tr(MM, rM) {
      let {
        mobType: iM,
        variation: OM,
        animation: SM
      } = rM;
      MM.setMob(lr(iM), null !== OM && void 0 !== OM ? OM : "", 1, Ur(SM))
    }

    function gr(MM, rM) {
      let {
        mobType: iM,
        variation: OM,
        metaInfo: SM,
        tamed: jM
      } = rM;
      MM.setPet(lr(iM), OM, SM, jM)
    }
    const ur = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Rr {
      constructor(MM, rM, iM, OM) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, MM(iM.width, OM[1], OM).then((MM => {
          if (this.closed) return void MM.close();
          const {
            style: iM
          } = MM.canvas;
          iM.position = "absolute", iM.top = "0", iM.visibility = "hidden", Cr(rM, MM), this.preview = MM, this.apply()
        })).catch((MM => {
          console.error(`${dr} couldn't open a lineup figure`, MM)
        }))
      }
      update(MM, rM, iM, OM, SM) {
        this.figure = MM, this.shown = rM, this.order = iM, this.span = OM, this.lineup = SM, this.apply()
      }
      close() {
        var MM;
        this.closed = !0, null === (MM = this.preview) || void 0 === MM || MM.close(), this.preview = null
      }
      apply() {
        const {
          preview: MM,
          figure: rM,
          lineup: iM
        } = this;
        if (null === MM || null === rM) return;
        if (this.given !== rM) {
          var OM;
          this.given = rM, this.loaded = !1;
          const iM = null === rM.QG ? 0 : null !== (OM = (0, nr.d)(rM.QG)) && void 0 !== OM ? OM : 0;
          MM.setFigure(function(MM) {
            return JSON.stringify(Object.fromEntries(MM.cosmetics))
          }(rM), iM, Ur(rM.animation), rM.size), MM.untilSettled().then((() => {
            this.given === rM && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: SM,
          width: jM
        } = this.span;
        MM.resize(jM, iM[1], iM);
        const {
          style: aM
        } = MM.canvas;
        aM.left = `${SM}px`, aM.width = `${jM}px`, aM.zIndex = this.order, aM.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class pr {
      constructor(MM, rM) {
        this.open = rM, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = er(MM), this.layer = document.createElement("div");
        const {
          style: iM
        } = this.layer;
        iM.position = "relative", iM.isolation = "isolate", iM.overflow = "hidden", iM.width = "100%", iM.height = "100%", iM.pointerEvents = "none", MM.appendChild(this.layer)
      }
      show(MM) {
        this.view = MM, this.place()
      }
      resize(MM, rM) {
        this.size = [MM, rM], this.place()
      }
      close() {
        for (const MM of this.figures) MM.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: MM,
          shown: rM
        } = this.view;
        for (const OM of this.figures.splice(MM.length)) OM.close();
        const {
          size: iM
        } = this;
        MM.forEach(((OM, SM) => {
          var jM;
          const aM = function(MM, rM, iM, OM) {
            let [SM, jM] = OM;
            const aM = (MM + .5) * SM / rM,
              PM = Math.min(Math.max(SM / rM, 2 * iM * jM), 2 * Math.max(aM, SM - aM));
            return {
              left: aM - PM / 2,
              width: PM
            }
          }(SM, MM.length, function(MM) {
            let {
              animation: rM,
              size: iM
            } = MM;
            const {
              aimed: OM,
              ready: SM
            } = ur;
            return (Ur(rM) === Qr.gunAimed ? OM : SM) * iM
          }(OM), iM);
          this.figures[SM] ??= new Rr(this.open, this.layer, aM, iM), this.figures[SM].update(OM, null !== (jM = rM[SM]) && void 0 !== jM && jM, function(MM, rM) {
            return String(Math.round(1e3 * MM) + rM)
          }(OM.size, SM), aM, iM)
        }))
      }
    }
    const Wr = {
      player: xM,
      store: vM
    };
    class sr {
      constructor(MM) {
        this.page = MM
      }
      async openMob(MM) {
        return new br(await this.open(MM, AM), tr)
      }
      async openPet(MM) {
        return new br(await this.open(MM, AM), gr)
      }
      openMobLineup(MM) {
        return new pr(MM, ((MM, rM, iM) => this.page.openPreview(AM, MM, rM, iM)))
      }
      async openCharacter(MM, rM) {
        return new wr(await this.open(MM, Wr[rM]))
      }
      async open(MM, rM) {
        const [iM, OM] = er(MM), SM = await this.page.openPreview(rM, iM, OM);
        return Cr(MM, SM), SM
      }
    }
  },
  37696: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => yM,
      e: () => OM,
      g: () => SM,
      h: () => mM,
      j: () => dM,
      l: () => zM,
      o: () => lM,
      p: () => nM,
      r: () => QM,
      s: () => HM,
      u: () => hM,
      y: () => JM
    });
    const OM = [{
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

    function SM(MM, rM) {
      const {
        numLines: iM,
        charsPerLine: SM
      } = OM[rM];
      return EM(MM, iM, SM, !1)
    }
    const jM = 7 / 8,
      aM = .25,
      PM = 8;

    function nM(MM, rM) {
      return {
        width: Math.min(MM, PM) - 2 * aM,
        height: Math.min(rM, PM) - 2 * aM
      }
    }

    function QM(MM, rM, iM) {
      const SM = nM(MM, rM),
        {
          numLines: aM,
          charsPerLine: PM
        } = OM[iM];
      return {
        numLines: Math.max(1, Math.floor(aM / jM * SM.height)),
        charsPerLine: Math.max(1, Math.floor(PM * SM.width))
      }
    }

    function zM(MM, rM, iM, OM) {
      const {
        numLines: SM,
        charsPerLine: jM
      } = QM(iM, OM, rM);
      return EM(MM, SM, jM, !1)
    }
    const LM = 32e3;

    function mM(MM) {
      return MM.slice(0, LM)
    }
    const HM = 512e3,
      hM = 64,
      JM = HM;

    function dM(MM, rM) {
      const iM = Math.max(0, JM - rM),
        OM = Math.min(HM, iM);
      return MM.slice(0, OM)
    }
    const yM = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nQ: {
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

    function lM(MM, rM) {
      const {
        numLines: iM,
        charsPerLine: OM
      } = yM[rM];
      return EM(MM, iM, OM, !1)
    }

    function EM(MM, rM, iM, OM, SM) {
      (SM || OM) && (MM = MM.slice(0, null !== SM && void 0 !== SM ? SM : rM * iM));
      const jM = MM.split("\n");
      if (jM.length > rM && jM.splice(rM, jM.length - rM), !OM)
        for (let aM = 0; aM < jM.length; aM++) {
          const MM = jM[aM];
          MM.length > iM && (jM[aM] = MM.substring(0, iM), jM.length < rM && jM.splice(aM + 1, 0, MM.substring(iM)))
        }
      return jM.join("\n")
    }
  },
  53739: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  53745: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);