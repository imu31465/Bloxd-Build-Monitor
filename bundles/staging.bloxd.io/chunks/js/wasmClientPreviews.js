export const id = 59;
export const ids = [59];
export const modules = {
  38621: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      g: () => KD
    });
    const pD = new WeakMap;

    function sD(DD, zD) {
      return pD.set(DD, zD), DD
    }

    function KD(DD) {
      var zD;
      return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : null
    }
  },
  38645: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD
    });
    var pD = wD(1232);

    function sD(DD) {
      const zD = /(\d*\.?\d+)px/.exec(DD);
      return zD ? Number(zD[1]) : null
    }

    function KD(DD) {
      return DD.split(/[\s,]+/).pop()
    }
    let rD = !1;
    const LD = {
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
      drawText: function(DD, zD, pD, LD, cD, gD) {
        if (cD <= 0 || gD <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: RD,
          fontVariant: AD,
          fontWeight: UD,
          fontSize: fD,
          font: ID
        } = this, BD = [RD, AD, UD, `${fD}px`, ID].filter(Boolean).join(" "), GD = [
          [UD, `${fD}px`, KD(ID)].filter(Boolean).join(" "), `${fD}px sans-serif`
        ], hD = DD.font, nD = function(DD, zD, wD) {
          for (const pD of zD) {
            DD.font = pD;
            const zD = sD(DD.font),
              rD = KD(pD);
            if (null !== zD && Math.abs(zD - wD) <= .5 && DD.font.toLowerCase().includes(rD.toLowerCase())) return pD
          }
          return null
        }(DD, [BD, ...GD], fD);
        nD !== BD && function(DD, zD, pD) {
          rD || (rD = !0, Promise.resolve().then((() => wD(1075))).then((wD => {
            let {
              CB: sD
            } = wD;
            sD(new Error("A canvas didn't take canvasTxt's font"), {
              font: DD,
              Nf: zD,
              drawnWith: null !== pD && void 0 !== pD ? pD : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(BD, hD, nD);
        const MD = sD(DD.font);
        if (null === nD && null !== MD && MD > 0) {
          const wD = fD / MD;
          DD.save();
          try {
            return DD.scale(wD, wD), {
              height: this.drawLines(DD, zD, pD / wD, LD / wD, cD / wD, gD / wD, MD).height * wD
            }
          } finally {
            DD.restore()
          }
        }
        return this.drawLines(DD, zD, pD, LD, cD, gD, fD)
      },
      drawLines: function(DD, zD, wD, sD, KD, rD, LD) {
        const cD = wD + KD,
          gD = sD + rD;
        let RD, AD = sD + rD / 2 + LD / 2;
        "right" === this.align ? (RD = cD, DD.textAlign = "right") : "left" === this.align ? (RD = wD, DD.textAlign = "left") : (RD = wD + KD / 2, DD.textAlign = "center");
        for (const pD of zD) {
          DD.measureText(pD).width >= KD && (zD = zD.replace(pD, ""))
        }
        zD = (0, pD.P)(zD);
        const UD = [],
          fD = zD.split("\n"),
          ID = this.justify ? DD.measureText("\u200a").width : 0;
        fD.forEach((zD => {
          let wD = DD.measureText(zD).width;
          if (wD <= KD) UD.push(zD);
          else {
            let pD = zD;
            const sD = KD;
            let rD, LD, cD;
            for (wD = DD.measureText(pD).width; wD > sD;) {
              for (rD = 0, LD = 0, cD = ""; LD < sD;) rD++, cD = pD.substr(0, rD), LD = DD.measureText(cD).width;
              rD--, cD = cD.substr(0, rD);
              const zD = rD;
              if (" " !== pD.substr(rD, 1)) {
                for (;
                  " " !== pD.substr(rD, 1) && 0 !== rD;) rD--;
                0 === rD && (rD = zD), cD = pD.substr(0, rD)
              }
              cD = this.justify ? this.justifyLine(DD, cD, ID, "\u200a", KD) : cD, pD = pD.substr(rD), wD = DD.measureText(pD).width, UD.push(cD)
            }
            wD > 0 && UD.push(pD)
          }
        }));
        const BD = this.lineHeight ? this.lineHeight : this.getTextHeight(DD, zD),
          GD = BD * (UD.length - 1),
          hD = GD / 2;
        let nD = sD;
        "top" === this.vAlign ? AD = sD + LD : "bottom" === this.vAlign ? (AD = gD - GD, nD = gD) : (nD = sD + rD / 2, AD -= hD), UD.forEach((zD => {
          zD = zD.trim(), DD.fillText(zD, RD, AD), AD += BD
        })), this.debug && (DD.lineWidth = 3, DD.strokeStyle = "#00909e", DD.strokeRect(wD, sD, KD, rD), DD.lineWidth = 2, DD.strokeStyle = "#f6d743", DD.beginPath(), DD.moveTo(RD, sD), DD.lineTo(RD, gD), DD.stroke(), DD.strokeStyle = "#ff6363", DD.beginPath(), DD.moveTo(wD, nD), DD.lineTo(cD, nD), DD.stroke());
        return {
          height: GD + BD
        }
      },
      getTextHeight: function(DD, zD) {
        const wD = DD.textBaseline;
        DD.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: pD
        } = DD.measureText(zD);
        return DD.textBaseline = wD, pD
      },
      justifyLine: function(DD, zD, wD, pD, sD) {
        const KD = zD.trim(),
          rD = DD.measureText(KD).width,
          LD = KD.split(/\s+/).length - 1,
          cD = Math.floor((sD - rD) / wD);
        if (LD <= 0 || cD <= 0) return KD;
        const gD = Math.floor(cD / LD);
        let RD = cD - LD * gD,
          AD = [];
        for (let UD = 0; UD < gD; UD++) AD.push(pD);
        AD = AD.join("");
        return KD.replace(/\s+/g, (DD => {
          const zD = RD > 0 ? AD + pD : AD;
          return RD--, DD + zD
        }))
      }
    }
  },
  38648: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD,
      e: () => ID,
      f: () => UD,
      g: () => RD,
      k: () => AD
    });
    var pD = wD(4257),
      sD = wD(351);
    const KD = 1024,
      rD = 1536,
      LD = 2 * pD.j + 1,
      cD = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      gD = 1.5;

    function RD(DD, zD, wD) {
      if ("string" !== typeof DD) return zD;
      try {
        const wD = JSON.parse(DD);
        return wD && "object" === typeof wD ? wD : zD
      } catch (pD) {
        return void 0 !== wD && console.error(`Couldn't parse ${wD}`, pD), zD
      }
    }

    function AD(DD) {
      return RD(DD, null, "a leaderboard's rows")
    }

    function UD(DD, zD) {
      var wD, pD;
      return null !== zD && void 0 !== zD ? zD : {
        status: null !== (wD = DD.status) && void 0 !== wD ? wD : "loading",
        entries: null !== (pD = DD.entries) && void 0 !== pD ? pD : []
      }
    }

    function fD(DD, zD) {
      return "number" === typeof DD && Number.isFinite(DD) && DD > 0 ? DD : zD
    }

    function ID(DD, zD) {
      const wD = fD(DD.size, 1);
      let pD = fD(DD.width, fD(2.5 * wD, 2.5)),
        sD = fD(DD.height, fD(3.75 * wD, 3.75));
      Number.isFinite(KD * sD / pD) && Number.isFinite(rD * pD / sD) || (pD = 2.5, sD = 3.75);
      const LD = sD / pD,
        cD = Math.max(1, Math.min(KD, zD / LD));
      return {
        width: pD,
        height: sD,
        layoutWidth: Math.max(KD, rD / LD),
        layoutHeight: Math.max(rD, KD * LD),
        pixelWidth: Math.round(cD),
        pixelHeight: Math.round(Math.max(1, Math.min(zD, cD * LD)))
      }
    }

    function BD(DD, zD, wD, rD, RD, AD) {
      DD.setTransform(1, 0, 0, 1, 0, 0), DD.fillStyle = sD.I.defaultNameTagBackground, DD.fillRect(0, 0, zD, wD), DD.scale(zD / rD.layoutWidth, wD / rD.layoutHeight), DD.translate((rD.layoutWidth - KD) / 2, 0),
        function(DD, zD, wD, KD) {
          var rD, RD, AD, UD;
          const {
            top: fD,
            around: ID,
            showPlayerText: BD,
            localPlayerDbId: nD
          } = wD, {
            whiteUiText: MD,
            grayUiText: OD,
            yellowUiText: JD
          } = sD.I;
          DD.textBaseline = "middle";
          const ED = function(zD, wD, pD, sD, KD, rD) {
              let LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              DD.font = `bold ${sD}px 'Jetbrains Mono', monospace`, DD.fillStyle = KD, DD.textAlign = LD;
              let cD = zD.replace(/[\r\n\t]/g, " ");
              if (DD.measureText(cD).width > rD) {
                for (; cD.length > 0 && DD.measureText(`${cD}\u2026`).width > rD;) cD = cD.slice(0, -1);
                cD += "\u2026"
              }
              DD.fillText(cD, wD, pD)
            },
            QD = zD => {
              DD.fillStyle = MD, DD.globalAlpha = .15, DD.fillRect(24, zD, 976, 2), DD.globalAlpha = 1
            },
            XD = null === nD ? null : (0, sD.oc)(nD),
            VD = DD => null !== XD && DD.playerHash === XD,
            PD = GD(fD.entries, pD.m),
            CD = "ready" === fD.status && PD.length > 0,
            xD = null === ID ? [] : GD(ID.entries, LD),
            TD = PD.some(VD),
            bD = null === ID ? null : function(DD) {
              const zD = DD;
              if (!zD || !Number.isFinite(zD.rank) || !Number.isFinite(zD.tied) || !Number.isFinite(zD.total)) return null;
              return zD
            }(ID.standing),
            jD = xD.find(VD),
            dD = PD.find(VD),
            SD = null === bD || void 0 === jD ? null : {
              value: jD.value,
              rank: bD.rank
            },
            iD = hD(PD, void 0 === dD || dD.value === (null === SD || void 0 === SD ? void 0 : SD.value) ? SD : null),
            lD = hD(xD, SD),
            WD = (DD, zD) => {
              const wD = DD.findIndex(VD);
              return wD >= 0 ? zD[wD] : null
            },
            ND = null !== (rD = null !== (RD = null === bD || void 0 === bD ? void 0 : bD.rank) && void 0 !== RD ? RD : WD(xD, lD)) && void 0 !== rD ? rD : WD(PD, iD);
          DD.font = "bold 34px 'Jetbrains Mono', monospace";
          const ZD = [...CD ? iD : [], ...TD ? [] : lD],
            yD = Math.min(280, Math.max(0, ...ZD.map((zD => DD.measureText(cD.format(zD)).width)))),
            kD = yD <= 80,
            mD = kD ? 80 : 32 + yD,
            eD = kD ? 148 : mD + 28,
            oD = 660 - eD;
          ED(`TOP ${pD.m}  /  ALL TIME`, 24, 52, 28, OD, 976), ED(BD ? String(null !== (AD = zD.title) && void 0 !== AD ? AD : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, MD, 976), ED("RANK", 32, 174, 28, OD, eD - 40), ED("PLAYER", eD, 174, 28, OD, oD), ED(BD ? String(null !== (UD = zD.scoreLabel) && void 0 !== UD ? UD : "Score").slice(0, 24) : "Score", 992, 174, 28, OD, 304, "right"), QD(202);
          const aD = (KD - 232) / (pD.m + gD + LD),
            uD = 208 + pD.m * aD,
            vD = uD + gD * aD,
            tD = (zD, wD, pD, sD) => {
              const KD = VD(zD);
              DD.fillStyle = KD ? JD : MD, DD.globalAlpha = KD ? .15 : sD ? .035 : 0, DD.fillRect(24, pD - aD / 2 + 1, 976, aD - 2), DD.globalAlpha = 1;
              const rD = KD ? JD : MD;
              ED(cD.format(wD), mD, pD, 34, rD, kD ? 80 : yD, kD ? "center" : "right"), ED(BD ? String(zD.name).slice(0, 64) : "Player", eD, pD, 34, rD, oD);
              const LD = cD.format(zD.value);
              ED(DD.measureText(LD).width > 304 ? zD.value.toExponential(6) : LD, 992, pD, 34, rD, 304, "right")
            };
          if (CD)
            for (const [pD, sD] of PD.entries()) tD(sD, iD[pD], 208 + (pD + .5) * aD, pD % 2 === 0);
          else {
            const DD = "error" === fD.status,
              zD = DD ? "Couldn't load leaderboard" : "ready" === fD.status ? "No scores yet" : "Loading leaderboard\u2026",
              wD = DD ? "Trying again shortly" : "ready" === fD.status ? "Be the first on the board!" : "Fetching the top players",
              pD = (208 + uD) / 2;
            ED(zD, 512, pD - 28, 40, DD ? sD.I.redUiText : MD, 960, "center"), ED(wD, 512, pD + 27, 30, OD, 960, "center")
          }
          const FD = uD + gD * aD / 2;
          if (null === ND) QD(FD);
          else {
            const zD = null === bD ? 0 : bD.tied - 1,
              wD = `YOUR RANK #${cD.format(ND)}${null===bD?"":` of ${cD.format(bD.total)}`}`;
            DD.font = "bold 36px 'Jetbrains Mono', monospace";
            const pD = Math.max(20, Math.min(36, Math.floor(34560 / DD.measureText(wD).width)));
            ED(wD, 512, FD - (zD > 0 ? 15 : 0), pD, JD, 960, "center"), zD > 0 && ED(`Tied with ${cD.format(zD)} other${1===zD?"":"s"}`, 512, FD + 24, 24, OD, 960, "center")
          }
          if (null === ID) return;
          const YD = vD + LD * aD / 2;
          if (TD) ED(`You're in the top ${pD.m}!`, 512, YD, 40, JD, 960, "center");
          else if (0 === xD.length) ED("You're not on this board yet", 512, YD, 34, OD, 960, "center");
          else
            for (const [pD, sD] of xD.entries()) tD(sD, lD[pD], vD + (pD + .5) * aD, pD % 2 === 0)
        }(DD, RD, AD, rD.layoutHeight)
    }

    function GD(DD, zD) {
      return Array.isArray(DD) ? DD.slice(0, zD).filter((DD => DD && Number.isFinite(DD.rank) && Number.isFinite(DD.value))) : []
    }

    function hD(DD, zD) {
      const wD = [];
      let pD = !1;
      return DD.forEach(((sD, KD) => {
        if (null !== zD && sD.value === zD.value) return void wD.push(zD.rank);
        const rD = KD > 0 && sD.value === DD[KD - 1].value;
        rD || (pD = 0 === KD && 1 !== sD.rank), wD.push(rD && !pD ? wD[KD - 1] : sD.rank)
      })), wD
    }
  },
  38828: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      g: () => KD
    });
    const pD = 32;

    function sD(DD) {
      return Array.from(DD).length
    }

    function KD(DD) {
      const zD = [""];
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sD = "";
      const KD = () => {
        zD.push(""), wD = 0, sD = ""
      };
      for (const rD of DD.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(rD)) KD();
        else if (/^\s+$/.test(rD)) sD += rD;
      else if (rD.length > 0) {
        const DD = Array.from(rD);
        wD > 0 && wD + sD.length + DD.length > pD && KD(), zD[zD.length - 1] += sD, wD += sD.length, sD = "";
        for (const sD of DD) wD >= pD && KD(), zD[zD.length - 1] += sD, wD++
      }
      return zD[zD.length - 1] += sD, zD
    }
  },
  50757: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      WasmPreviewHost: () => Pz,
      pageBuiltInAnimationPack: () => UD,
      pagePreviews: () => Kz,
      previewModule: () => FD
    });
    var pD = wD(2868),
      sD = wD(625);
    const KD = "[bloxd-wasm-client]";

    function rD(DD) {
      const zD = {
        wasm: "unknown",
        client: String(sD.e)
      };
      try {
        var wD;
        zD.wasm = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.CA()) && void 0 !== wD ? wD : zD.wasm
      } catch {}
      return zD
    }
    async function LD(DD) {
      if (DD.length < 2 || 31 !== DD[0] || 139 !== DD[1]) return DD;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: zD
        } = await Promise.resolve().then((() => wD(2822)));
        return zD(DD)
      }
      const zD = new Blob([DD]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(zD).arrayBuffer())
    }

    function cD(DD, zD, pD, sD) {
      Promise.resolve().then((() => wD(40666))).then((wD => {
        let {
          reportDataLoadFailure: KD
        } = wD;
        KD(DD, zD, pD, sD)
      }), (zD => {
        console.warn(`${KD} ${DD} didn't load, and the report couldn't be sent`, pD.error, zD)
      }))
    }
    const gD = [3e4, 12e4, 3e5];
    class RD {
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
        const zD = rD(DD),
          wD = await async function(DD, zD) {
            let wD;
            try {
              wD = await DD()
            } catch (pD) {
              return {
                stage: "fetch",
                error: pD
              }
            }
            try {
              return zD(wD) ? null : {
                stage: "decode",
                error: null
              }
            } catch (pD) {
              return {
                stage: "decode",
                error: pD
              }
            }
          }((() => this.deps.fetch()), (zD => {
            const wD = DD.iKD(zD);
            return wD && this.resolveSet(zD), wD
          }));
        if (null !== wD) {
          if ("fetch" === wD.stage) {
            this.loading = null;
            const zD = gD[this.retries++];
            void 0 !== zD && this.deps.later((() => {
              this.provide(DD)
            }), zD)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(wD, zD))
        }
      }
    }
    let AD = null;

    function UD() {
      return AD ??= new RD({
        fetch: async () => LD(await (0, pD.C)(fD(), {
          priority: "low"
        })),
        onFailed: (DD, zD) => {
          cD("builtInAnimations", fD(), DD, zD)
        },
        later: (DD, zD) => {
          setTimeout(DD, zD)
        }
      }), AD
    }

    function fD() {
      return wD(50761)
    }
    var ID = wD(2861),
      BD = wD(1211),
      GD = wD(330),
      hD = wD(323),
      nD = wD(638),
      MD = wD(4817),
      OD = wD(40634),
      JD = wD(40852),
      ED = (wD(40689), wD(40707)),
      QD = wD(40710),
      XD = wD(40719),
      VD = wD(40645),
      PD = wD(40874),
      CD = wD(40878),
      xD = wD(40630),
      TD = wD(40895),
      bD = wD(40760),
      jD = wD(40748),
      dD = wD(40799),
      SD = wD(40863),
      iD = wD(42457),
      lD = wD(36254),
      WD = wD(3716);
    const ND = "[bloxd-previews]",
      ZD = 4e5,
      yD = 0,
      kD = 1,
      mD = 2,
      eD = 1,
      oD = 2,
      aD = 3,
      uD = 0,
      vD = 1,
      tD = 2;

    function FD(DD) {
      const zD = DD,
        wD = (0, OD.N)(DD),
        pD = (0, OD.m)(DD);
      return null !== wD && null !== pD && "function" === typeof zD.jKD && "function" === typeof zD.dKD && "function" === typeof zD.SKD ? zD : null
    }

    function YD(DD, zD, wD) {
      let [pD, sD] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [DD, zD], KD = Math.min(Number.isFinite(wD) && wD > 0 ? wD : 1, 2);
      const rD = Math.max(0, pD, DD) * Math.max(0, sD, zD) * KD * KD;
      return rD > ZD && (KD *= Math.sqrt(ZD / rD)), [Math.max(1, Math.floor(Math.max(0, DD) * KD)), Math.max(1, Math.floor(Math.max(0, zD) * KD))]
    }

    function HD() {
      return wD(50766)
    }
    async function qD(DD, zD, pD) {
      let sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === DD && (0, xD.w)();
      const KD = await (0, xD.N)();
      if (null === KD || (0, OD.n)(KD) || (0, xD.b)()) return;
      const LD = "webgpu" === KD.backend;
      if (!LD && "lost" !== DD) return;
      const cD = LD && (0, hD.m)(KD.adapter, null !== pD && void 0 !== pD ? pD : null, "lost" === DD, sD),
        gD = LD ? (0, OD.$)(DD) : null;
      if (null === gD) {
        LD || (0, nD.p)(), (0, xD.n)();
        try {
          await async function(DD, zD, pD, sD, KD) {
            let {
              restoreLost: LD,
              adapterRemembered: cD
            } = KD;
            const gD = (0, ID.P)(),
              {
                flushCrashReports: RD,
                reportRenderReload: AD
              } = await Promise.resolve().then((() => wD(40666)));
            AD(DD.backend, sD, rD(gD ? (0, ID.z)() : null), {
              from: "home",
              cause: zD,
              restoreLost: LD,
              adapterRemembered: cD,
              ...Dz(DD, zD, pD)
            }), await RD(bD.d)
          }(KD, DD, zD, null !== pD && void 0 !== pD ? pD : "start_failed" === DD ? 0 : 1, {
            restoreLost: sD,
            adapterRemembered: cD
          })
        } catch (AD) {
          console.warn(`${ND} ${KD.backend} failed at home (${DD}), and its report couldn't be sent`, AD)
        }(0, bD.j)()
      } else {
        var RD;
        const pD = Dz(KD, DD, zD),
          sD = `WebGPU failed at home (${DD}${void 0===pD.error?"":`: ${pD.error instanceof Error?pD.error.message:(0,lD.m)(pD.error)}`}) and ${gD}`;
        console.warn(`${ND} ${sD}: the previews stop`, null !== (RD = pD.error) && void 0 !== RD ? RD : ""), (0, xD.p)(sD);
        try {
          const {
            countRenderLost: zD
          } = await Promise.resolve().then((() => wD(40666)));
          zD(DD, pD.error, pD.context)
        } catch (UD) {
          console.warn(`${ND} WebGPU failed at home (${DD}), and its count couldn't be sent`, UD)
        }
      }
    }

    function Dz(DD, zD, wD) {
      var pD;
      let {
        adapter: sD
      } = DD;
      const KD = (0, ID.P)();
      return {
        error: "lost" === zD && null !== (pD = (0, OD.ab)(KD ? (0, OD.N)((0, ID.z)()) : null)) && void 0 !== pD ? pD : wD,
        context: {
          adapter: sD,
          boundAtMs: "start_failed" === zD ? null : (0, xD.H)(),
          indirectHangs: (0, xD.x)(),
          restoresSkipped: (0, xD.L)()
        }
      }
    }
    async function zz() {
      if (!(0, ID.P)()) {
        const DD = await (0, xD.N)();
        if (null === DD || (0, OD.n)(DD)) return null;
        if (await (0, TD.d)(await DD.load()), !(0, ID.P)()) return null
      }
      return FD((0, ID.z)())
    }
    class wz {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.page = DD, this.host = zD, this.id = wD, this.canvas = pD, this.size = sD, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const rD = {
            ...KD.images,
            glbUrl: DD => {
              var zD;
              return null !== (zD = this.models.drawnUrl(DD)) && void 0 !== zD ? zD : KD.images.glbUrl(DD)
            }
          },
          LD = zD => DD.modelFile(zD);
        this.images = new JD.d(rD, (DD => {
          console.warn(`${ND} image ${DD.key.kind}:${DD.key.index}:${DD.key.word} failed`, DD.error)
        }), {
          fetchFile: LD,
          fetchImage: zD => DD.imageFile(zD)
        }), DD.startModels(), this.models = new ED.g(KD.files, ((zD, wD) => DD.buildModel(zD, wD)), (DD => {
          console.warn(`${ND} model file ${DD.file} (${DD.url}) failed`, DD.error)
        }), {
          fetchFile: LD,
          onWritten: (DD, zD) => {
            this.images.glbWritten(DD, zD)
          },
          onTaken: (DD, zD) => {
            this.images.glbTaken(DD, zD)
          }
        }), this.write = (DD, zD, wD) => {
          if (this.closed) return !0;
          if (DD === ED.b) {
            const DD = new DataView(wD.buffer, wD.byteOffset, XD.e),
              pD = DD.getUint32(0, !0),
              sD = DD.getUint32(XD.h, !0),
              KD = this.page.hostCall(tD, (() => this.host.krD(this.id, pD, zD, wD.subarray(XD.e))));
            return this.outcomes.push([sD, KD]), !0
          }
          return DD === JD.b && (this.page.hostCall(void 0, (() => {
            this.host.erD(this.id, wD)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(DD, zD, wD) {
        if (this.closed) return;
        const [pD, sD] = YD(DD, zD, this.page.dpr(), wD);
        pD === this.size[0] && sD === this.size[1] || (this.size = [pD, sD], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, pD, sD)
        })))
      }
      setMob(DD, zD, wD, pD) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.trD(this.id, DD, zD, wD, pD))))
      }
      setPet(DD, zD, wD, pD) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.YrD(this.id, DD, zD, wD, pD))))
      }
      setPlayer(DD, zD, wD) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.arD(this.id, DD, zD, wD))))
      }
      setFigure(DD, zD, wD, pD) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.urD(this.id, DD, zD, wD, pD))))
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
          alpha: zD,
          beta: wD,
          radius: pD
        } = DD;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.FrD(this.id, zD, wD, pD)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((DD => {
          this.settled.push(DD)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, PD.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [DD, zD] of this.outcomes) {
          const wD = zD === uD ? [] : [zD === vD ? DD : (DD | ED.c) >>> 0];
          this.models.taken(DD, wD)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(DD) {
        let zD = !1;
        if (DD) {
          const DD = this.host.DLD(this.id);
          for (const zD of DD) this.models.request(zD);
          const wD = this.host.qrD(this.id);
          wD.length > 0 && this.images.onEvent(wD), zD = DD.length > 0 || wD.length > 0
        }
        const wD = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          pD = zD || wD > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = pD ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(DD) {
        this.page.hostCall(void 0, (() => {
          const zD = this.host.close(this.id);
          zD.length > 0 && this.images.onEvent(zD), this.page.isTrapped || DD.SKD(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const DD = this.settled;
        this.settled = [];
        for (const zD of DD) zD()
      }
    }
    class pz {
      constructor(DD) {
        this.deps = DD, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: DD => {
            this.modelsFailed(DD)
          },
          onDecoderFailed: DD => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${ND} the Draco decoder didn't load: models waiting on it won't draw`, DD))
          },
          onWorkerLost: DD => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${ND} a model worker was lost: ${DD}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.KI = {
          setShaderPack: (DD, zD, wD, pD, sD) => (this.shaderPackArgs = [DD, zD, wD, pD, sD], this.handOverShaderPack(), !0)
        }, this.frame = DD => {
          this.frameId = null;
          const zD = this.host;
          if (null !== zD && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(zD, DD)
          } catch (wD) {
            if (!this.stopIfTrapped(wD) && (this.stop(), (0, OD.o)(wD))) return void this.deps.onRenderFailed("frames_refused", wD);
            console.warn(`${ND} the previews stopped: their frame threw`, wD)
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
        var DD, zD;
        return null !== (DD = null === (zD = this.host) || void 0 === zD ? void 0 : zD.attached()) && void 0 !== DD && DD
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((DD, zD) => DD + zD), 0) / this.costs.length
      }
      async bindSession(DD, zD, wD) {
        const pD = this.binding,
          sD = this.sessionEnds;
        try {
          const KD = this.hostOf(DD);
          if (!KD.mrD()) {
            const zD = (0, dD.e)().sampleCount,
              rD = await wD(zD);
            if (this.sessionEnds !== sD) return this.keepRendererOfEndedSession(DD, KD, rD, zD, pD), zD;
            if (!KD.VrD(rD)) throw new Error("the page has a renderer already");
            (0, xD.t)(performance.now()), this.samples = zD, (0, SD.f)((0, OD.m)(DD))
          }
          if (!KD.attach(zD)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === pD && this.endBinding()
        }
      }
      keepRendererOfEndedSession(DD, zD, wD, pD, sD) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== sD) try {
          wD.free()
        } catch (KD) {
          console.warn(`${ND} an ended session's renderer didn't free`, KD)
        } else zD.VrD(wD) && ((0, xD.t)(performance.now()), this.samples = pD, (0, SD.f)(this.registryOf(DD)))
      }
      async beginSession() {
        var DD;
        let zD = () => {};
        const wD = new Promise((DD => {
          zD = DD
        }));
        this.binding = {
          done: wD,
          release: zD
        }, await (null === (DD = this.opening) || void 0 === DD ? void 0 : DD.catch((() => null)));
        const pD = this.pageCanvas;
        return this.pageCanvas = null, pD
      }
      endSession(DD) {
        var zD, wD;
        if (this.sessionEnds++, this.lastEndReturned = DD, this.endBinding(), DD) {
          try {
            var pD;
            null === (pD = this.host) || void 0 === pD || pD.detach()
          } catch (sD) {
            return void console.warn(`${ND} the session's core kept the page's renderer`, sD)
          }!0 === (null === (zD = this.host) || void 0 === zD ? void 0 : zD.attached()) && console.warn(`${ND} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (wD = this.host) || void 0 === wD ? void 0 : wD.mrD()) && (0, SD.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var DD;
        null === (DD = this.binding) || void 0 === DD || DD.release(), this.binding = null
      }
      async openPreview(DD, zD, wD, pD) {
        const sD = await this.renderingHost(),
          KD = this.module;
        if (null === sD || null === KD) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(sD), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(KD)
        }));
        const rD = this.nextId++,
          LD = this.deps.createCanvas(),
          [cD, gD] = YD(zD, wD, this.deps.dpr(), pD);
        LD.width = cD, LD.height = gD;
        if (!this.guarded((() => (KD.dKD(rD, LD), sD.open(rD, cD, gD, DD))))) throw this.hostCall(void 0, (() => {
          KD.SKD(rD)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const RD = new wz(this, sD, rD, LD, [cD, gD], this.deps);
        return this.previews.set(rD, RD), this.startFrames(), RD
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, xD.b)() || null !== (0, xD.D)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((DD => {
          null === DD || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(DD) {
        return this.prefetchedOr(DD, this.deps.fetchModel)
      }
      imageFile(DD) {
        return this.prefetchedOr(DD, pD.C)
      }
      prefetchedOr(DD, zD) {
        const wD = this.prefetchedFiles.get(DD);
        return void 0 === wD ? zD(DD) : wD.catch((() => zD(DD)))
      }
      async prefetchPlayerFiles() {
        const DD = this.deps.playerFile().then((DD => this.deps.files.url(DD))),
          zD = await Promise.all([DD, this.deps.images.lifeformAtlasUrl(PD.c)]).catch((() => null));
        if (null === zD) return;
        const [wD, pD] = zD, sD = (DD, zD) => {
          if (null === DD) return;
          const wD = zD(DD);
          this.prefetchedFiles.set(DD, wD), wD.catch((() => {
            this.prefetchedFiles.delete(DD)
          }))
        };
        sD(wD, (DD => this.modelFile(DD))), sD(pD, (DD => this.imageFile(DD)))
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
      buildModel(DD, zD) {
        return this.startModels(), this.models.then((wD => wD(DD, zD))).then((DD => this.unavailable ? new Promise((() => {})) : DD))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(DD) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${ND} the model workers didn't start: models won't draw in the previews`, DD))
      }
      called(DD) {
        return 0 !== DD && this.logError(DD, 0), DD
      }
      closePreview(DD) {
        this.previews.delete(DD.id), null !== this.module && DD.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(DD) {
        if (null !== this.module && this.module !== DD) throw new Error("a second renderer module on one page");
        return this.module = DD, null === this.host && (this.host = this.guarded((() => new DD.jKD)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: DD
        } = this;
        null !== DD && this.outsideCall("the game's start or end", (() => {
          DD.vrD(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: DD,
          shaderPackArgs: zD
        } = this;
        null !== DD && null !== zD && this.outsideCall("the shader pack's hand-over", (() => {
          DD.CpD(...zD) || console.warn(`${ND} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(DD, zD) {
        try {
          this.hostCall(void 0, zD)
        } catch (wD) {
          this.stop(), console.warn(`${ND} the previews stopped: ${DD} threw`, wD)
        }
      }
      async loadAnimations(DD) {
        const zD = rD(null),
          wD = this.module;
        try {
          zD.wasm = null === wD ? zD.wasm : this.hostCall(zD.wasm, (() => wD.CA()))
        } catch {}
        let pD, sD;
        try {
          pD = await this.fetchAnimationTable()
        } catch (KD) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: KD
          }, zD)
        }
        if (!this.settleIfTrapped()) {
          try {
            sD = DD.orD(pD)
          } catch (KD) {
            if (this.stopIfTrapped(KD)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: KD
            }, zD)
          }
          sD || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, zD)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const DD = this.host;
        return null !== DD && this.guarded((() => DD.mrD())) ? DD : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var DD;
        const zD = null !== (DD = this.module) && void 0 !== DD ? DD : await this.loadModule();
        if (null === zD) return null;
        const wD = this.hostOf(zD),
          pD = () => this.guarded((() => wD.mrD()));
        if (pD()) return wD;
        if (null !== (0, xD.D)() || (0, xD.b)()) return null;
        const sD = this.deps.createCanvas();
        sD.width = 1, sD.height = 1;
        const KD = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const rD = (0, dD.e)().sampleCount;
        let LD;
        try {
          LD = await (0, OD.v)(zD, "previewRenderer", sD, rD, iD.d, KD)
        } catch (cD) {
          throw cD instanceof VD.d ? this.stopForTrap(cD) : (0, OD.s)(cD) && await this.deps.onRenderFailed("start_failed", cD), cD
        }
        return this.guarded((() => wD.VrD(LD))) ? ((0, xD.t)(performance.now()), this.samples = rD, this.pageCanvas = sD, (0, SD.f)(this.registryOf(zD)), wD) : pD() ? wD : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(DD, zD) {
        for (const rD of this.previews.values()) rD.feed();
        if (this.stopped) return;
        const wD = this.deps.now(),
          pD = DD.frame(zD);
        this.costs.push(this.deps.now() - wD), this.costs.length > 120 && this.costs.shift();
        const sD = 0 !== (256 & pD),
          KD = 255 & pD;
        for (const rD of this.previews.values()) {
          if (this.stopped) return;
          rD.collect(sD)
        }
        if (!this.stopped) {
          if (0 !== (512 & pD) && this.deps.onDrew(), sD) {
            const zD = DD.HrD();
            for (let DD = 0; DD + 1 < zD.length; DD += 2) zD[DD] === MD.F.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(zD[DD], zD[DD + 1])
          }
          if (KD !== eD) {
            if (KD === oD) return this.stop(), void this.deps.onFatal(DD.NrD(), DD.ZrD());
            if (KD === aD) return this.stop(), void console.warn(`${ND} the previews stopped: the page's renderer went with its session`);
            (0, GD.d)(zD), this.startFrames()
          } else {
            const zD = DD.yrD();
            this.stop();
            const wD = zD[2] === MD.Zc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(wD, void 0, zD[1], zD[2] === MD.Zc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, VD.i)(this.module) || "failed" === (0, ID.y)())
      }
      hostCall(DD, zD) {
        if (this.settleIfTrapped()) return DD;
        try {
          return zD()
        } catch (wD) {
          if (this.stopIfTrapped(wD)) return DD;
          throw wD
        }
      }
      guarded(DD) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return DD()
        } catch (zD) {
          throw this.stopIfTrapped(zD), zD
        }
      }
      registryOf(DD) {
        return {
          UpD: (zD, wD) => {
            this.hostCall(void 0, (() => {
              DD.UpD(zD, wD)
            }))
          },
          fpD: zD => {
            this.hostCall(void 0, (() => {
              DD.fpD(zD)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, SD.f)(null)), !0)
      }
      stopIfTrapped(DD) {
        return !(null === this.module || !(0, VD.k)(this.module, DD)) && (this.stopForTrap(DD), !0)
      }
      stopForTrap(DD) {
        this.stop(), (0, SD.f)(null), (0, WD.d)("previews", DD)
      }
      stop() {
        this.stopped = !0;
        for (const DD of this.previews.values()) DD.abandon()
      }
      logError(DD, zD) {
        const wD = `${DD}:${zD}`;
        this.loggedErrors.has(wD) || (this.loggedErrors.add(wD), console.warn(`${ND} error ${DD} (detail ${zD})`))
      }
    }
    let sz = null;

    function Kz() {
      return sz ??= new pz(function() {
        const DD = (0, QD.q)(BD.clientSideServerUrls.staticUrl, {
          packUrl: DD => {
            var zD, wD;
            return null !== (zD = null === (wD = PD.g.current) || void 0 === wD ? void 0 : wD.modelUrl(DD)) && void 0 !== zD ? zD : null
          }
        });
        return {
          loadModule: zz,
          startModels: async DD => {
            const {
              pageModelPool: zD
            } = await wD.e(42).then((() => wD(50834))), {
              pool: pD
            } = zD(DD);
            return (DD, zD) => pD.build(DD, zD)
          },
          fetchAnimations: async () => LD(await (0, pD.C)(HD())),
          playerFile: async () => (await (0, QD.n)()).PLAYER_FILE,
          onAnimationsFailed: (DD, zD) => {
            cD("previewAnimations", HD(), DD, zD)
          },
          provideBuiltInAnimationPack: DD => {
            UD().provide(DD)
          },
          openExtras: xD.y,
          files: DD,
          images: (0, PD.i)((0, JD.l)(DD.url), (() => PD.g.current)),
          pack: PD.g,
          game: CD.c,
          fetchModel: DD => (0, QD.g)(DD),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: DD => requestAnimationFrame(DD),
          cancelFrame: DD => {
            cancelAnimationFrame(DD)
          },
          onRenderFailed: qD,
          onFatal: (DD, zD) => {
            console.error(`${ND} the previews stopped: renderer error ${DD} (detail ${zD})`)
          },
          onDeviceLost: () => {
            (0, xD.A)() === jD.e.webgpu && hD.F.lost()
          },
          onDrew: () => {
            hD.F.drew()
          }
        }
      }()), sz
    }
    var rz = wD(608),
      Lz = wD(38621),
      cz = wD(3288);
    const gz = {
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
    const Rz = "[bloxd-previews]",
      Az = new Uint32Array(5);

    function Uz(DD) {
      return rz.k.indexOf(DD)
    }
    const fz = new WeakSet;

    function Iz(DD) {
      const zD = (0, Lz.g)(DD),
        wD = null === zD ? -1 : Bz(zD);
      return -1 !== wD ? wD : (fz.has(DD) || (fz.add(DD), console.warn(`${Rz} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Bz(DD) {
      var zD;
      return null !== (zD = gz[DD]) && void 0 !== zD ? zD : -1
    }

    function Gz(DD, zD) {
      const {
        canvas: wD
      } = zD;
      wD.style.width = "100%", wD.style.height = "100%", wD.style.display = "block", DD.appendChild(wD)
    }

    function hz(DD) {
      const zD = DD.getBoundingClientRect();
      return [zD.width, zD.height]
    }
    class nz {
      constructor(DD, zD) {
        this.preview = DD, this.showView = zD
      }
      show(DD) {
        this.showView(this.preview, DD)
      }
      resize(DD, zD) {
        this.preview.resize(DD, zD)
      }
      close() {
        this.preview.close()
      }
    }
    class Mz {
      constructor(DD) {
        this.preview = DD, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(DD) {
          const {
            canvas: zD
          } = DD;
          let wD = null;
          const pD = DD => {
              var pD;
              wD = {
                pointer: DD.pointerId,
                x: DD.clientX,
                y: DD.clientY
              }, null === (pD = zD.setPointerCapture) || void 0 === pD || pD.call(zD, DD.pointerId)
            },
            sD = zD => {
              var pD;
              const sD = DD.orbit;
              if ((null === (pD = wD) || void 0 === pD ? void 0 : pD.pointer) !== zD.pointerId || null === sD) return;
              const KD = zD.clientX - wD.x,
                rD = zD.clientY - wD.y;
              wD = {
                ...wD,
                x: zD.clientX,
                y: zD.clientY
              }, DD.setOrbit({
                alpha: sD.alpha - .01 * KD,
                beta: Math.min(Math.PI - .01, Math.max(.01, sD.beta - .01 * rD)),
                radius: sD.radius
              })
            },
            KD = DD => {
              var zD;
              (null === (zD = wD) || void 0 === zD ? void 0 : zD.pointer) === DD.pointerId && (wD = null)
            },
            rD = zD => {
              const wD = DD.orbit;
              if (null === wD) return;
              zD.preventDefault();
              const pD = zD.deltaY * (zD.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : zD.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                sD = Math.min(100, Math.max(5, wD.radius + .08 * pD));
              DD.setOrbit({
                ...wD,
                radius: sD
              })
            };
          return zD.style.touchAction = "none", zD.addEventListener("pointerdown", pD), zD.addEventListener("pointermove", sD), zD.addEventListener("pointerup", KD), zD.addEventListener("pointercancel", KD), zD.addEventListener("wheel", rD, {
            passive: !1
          }), () => {
            zD.removeEventListener("pointerdown", pD), zD.removeEventListener("pointermove", sD), zD.removeEventListener("pointerup", KD), zD.removeEventListener("pointercancel", KD), zD.removeEventListener("wheel", rD)
          }
        }(DD), this.dev = {
          canvas: () => DD.canvas,
          isolateHead: () => {
            console.warn(`${Rz} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = DD.untilSettled().then((() => {
          if (DD.isStopped) throw new Error(`${Rz} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(DD, zD) {
        this.cosmetics[DD] = zD, this.apply()
      }
      playEmote(DD) {
        null === DD || DD !== this.emote ? (this.emote = DD, this.apply()) : this.preview.replay()
      }
      untilDrawn(DD) {
        return this.preview.untilSettled()
      }
      setOrbit(DD) {
        let {
          yaw: zD,
          pitch: wD,
          radius: pD
        } = DD;
        const sD = this.preview.orbit;
        null !== sD && this.preview.setOrbit({
          alpha: zD,
          beta: wD,
          radius: null !== pD && void 0 !== pD ? pD : sD.radius
        })
      }
      resetCamera() {}
      resize(DD, zD) {
        this.preview.resize(DD, zD)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var DD;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Az, null === (DD = this.emote) ? -1 : Bz(DD))
      }
    }

    function Oz(DD, zD) {
      let {
        mobType: wD,
        variation: pD,
        animation: sD
      } = zD;
      DD.setMob(Uz(wD), null !== pD && void 0 !== pD ? pD : "", 1, Iz(sD))
    }

    function Jz(DD, zD) {
      let {
        mobType: wD,
        variation: pD,
        metaInfo: sD,
        tamed: KD
      } = zD;
      DD.setPet(Uz(wD), pD, sD, KD)
    }
    const Ez = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Qz {
      constructor(DD, zD, wD, pD) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, DD(wD.width, pD[1], pD).then((DD => {
          if (this.closed) return void DD.close();
          const {
            style: wD
          } = DD.canvas;
          wD.position = "absolute", wD.top = "0", wD.visibility = "hidden", Gz(zD, DD), this.preview = DD, this.apply()
        })).catch((DD => {
          console.error(`${Rz} couldn't open a lineup figure`, DD)
        }))
      }
      update(DD, zD, wD, pD, sD) {
        this.figure = DD, this.shown = zD, this.order = wD, this.span = pD, this.lineup = sD, this.apply()
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.preview) || void 0 === DD || DD.close(), this.preview = null
      }
      apply() {
        const {
          preview: DD,
          figure: zD,
          lineup: wD
        } = this;
        if (null === DD || null === zD) return;
        if (this.given !== zD) {
          var pD;
          this.given = zD, this.loaded = !1;
          const wD = null === zD.lE ? 0 : null !== (pD = (0, cz.e)(zD.lE)) && void 0 !== pD ? pD : 0;
          DD.setFigure(function(DD) {
            return JSON.stringify(Object.fromEntries(DD.cosmetics))
          }(zD), wD, Iz(zD.animation), zD.size), DD.untilSettled().then((() => {
            this.given === zD && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: sD,
          width: KD
        } = this.span;
        DD.resize(KD, wD[1], wD);
        const {
          style: rD
        } = DD.canvas;
        rD.left = `${sD}px`, rD.width = `${KD}px`, rD.zIndex = this.order, rD.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Xz {
      constructor(DD, zD) {
        this.open = zD, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = hz(DD), this.layer = document.createElement("div");
        const {
          style: wD
        } = this.layer;
        wD.position = "relative", wD.isolation = "isolate", wD.overflow = "hidden", wD.width = "100%", wD.height = "100%", wD.pointerEvents = "none", DD.appendChild(this.layer)
      }
      show(DD) {
        this.view = DD, this.place()
      }
      resize(DD, zD) {
        this.size = [DD, zD], this.place()
      }
      close() {
        for (const DD of this.figures) DD.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: DD,
          shown: zD
        } = this.view;
        for (const pD of this.figures.splice(DD.length)) pD.close();
        const {
          size: wD
        } = this;
        DD.forEach(((pD, sD) => {
          var KD;
          const rD = function(DD, zD, wD, pD) {
            let [sD, KD] = pD;
            const rD = (DD + .5) * sD / zD,
              LD = Math.min(Math.max(sD / zD, 2 * wD * KD), 2 * Math.max(rD, sD - rD));
            return {
              left: rD - LD / 2,
              width: LD
            }
          }(sD, DD.length, function(DD) {
            let {
              animation: zD,
              size: wD
            } = DD;
            const {
              aimed: pD,
              ready: sD
            } = Ez;
            return (Iz(zD) === gz.gunAimed ? pD : sD) * wD
          }(pD), wD);
          this.figures[sD] ??= new Qz(this.open, this.layer, rD, wD), this.figures[sD].update(pD, null !== (KD = zD[sD]) && void 0 !== KD && KD, function(DD, zD) {
            return String(Math.round(1e3 * DD) + zD)
          }(pD.size, sD), rD, wD)
        }))
      }
    }
    const Vz = {
      player: kD,
      store: mD
    };
    class Pz {
      constructor(DD) {
        this.page = DD
      }
      async openMob(DD) {
        return new nz(await this.open(DD, yD), Oz)
      }
      async openPet(DD) {
        return new nz(await this.open(DD, yD), Jz)
      }
      openMobLineup(DD) {
        return new Xz(DD, ((DD, zD, wD) => this.page.openPreview(yD, DD, zD, wD)))
      }
      async openCharacter(DD, zD) {
        return new Mz(await this.open(DD, Vz[zD]))
      }
      async open(DD, zD) {
        const [wD, pD] = hz(DD), sD = await this.page.openPreview(zD, wD, pD);
        return Gz(DD, sD), sD
      }
    }
  },
  36709: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => ID,
      E: () => BD,
      F: () => hD,
      d: () => pD,
      h: () => sD,
      i: () => UD,
      k: () => GD,
      o: () => RD,
      p: () => nD,
      s: () => cD,
      t: () => gD,
      x: () => fD
    });
    const pD = [{
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

    function sD(DD, zD) {
      const {
        numLines: wD,
        charsPerLine: sD
      } = pD[zD];
      return MD(DD, wD, sD, !1)
    }
    const KD = 7 / 8,
      rD = .25,
      LD = 8;

    function cD(DD, zD) {
      return {
        width: Math.min(DD, LD) - 2 * rD,
        height: Math.min(zD, LD) - 2 * rD
      }
    }

    function gD(DD, zD, wD) {
      const sD = cD(DD, zD),
        {
          numLines: rD,
          charsPerLine: LD
        } = pD[wD];
      return {
        numLines: Math.max(1, Math.floor(rD / KD * sD.height)),
        charsPerLine: Math.max(1, Math.floor(LD * sD.width))
      }
    }

    function RD(DD, zD, wD, pD) {
      const {
        numLines: sD,
        charsPerLine: KD
      } = gD(wD, pD, zD);
      return MD(DD, sD, KD, !1)
    }
    const AD = 32e3;

    function UD(DD) {
      return DD.slice(0, AD)
    }
    const fD = 512e3,
      ID = 64,
      BD = fD;

    function GD(DD, zD) {
      const wD = Math.max(0, BD - zD),
        pD = Math.min(fD, wD);
      return DD.slice(0, pD)
    }
    const hD = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Vg: {
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

    function nD(DD, zD) {
      const {
        numLines: wD,
        charsPerLine: pD
      } = hD[zD];
      return MD(DD, wD, pD, !1)
    }

    function MD(DD, zD, wD, pD, sD) {
      (sD || pD) && (DD = DD.slice(0, null !== sD && void 0 !== sD ? sD : zD * wD));
      const KD = DD.split("\n");
      if (KD.length > zD && KD.splice(zD, KD.length - zD), !pD)
        for (let rD = 0; rD < KD.length; rD++) {
          const DD = KD[rD];
          DD.length > wD && (KD[rD] = DD.substring(0, wD), KD.length < zD && KD.splice(rD + 1, 0, DD.substring(wD)))
        }
      return KD.join("\n")
    }
  },
  50761: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  50766: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);