export const id = 71;
export const ids = [71];
export const modules = {
  40373: (VV, eV, xV) => {
    function JV(VV) {
      return void 0 === VV ? void 0 : [VV[0], VV[1], VV[2]]
    }

    function YV(VV) {
      const eV = VV.particles;
      return {
        opts: {
          texture: eV.texture,
          Jv: eV.Jv,
          minLifeTime: eV.minLifeTime,
          maxLifeTime: eV.maxLifeTime,
          minSize: eV.minSize,
          maxSize: eV.maxSize,
          minEmitPower: eV.minEmitPower,
          maxEmitPower: eV.maxEmitPower,
          emitRate: eV.emitRate,
          gravity: JV(eV.gravity),
          dir1: JV(eV.dir1),
          dir2: JV(eV.dir2),
          colorGradients: eV.colorGradients,
          blendMode: eV.blendMode
        },
        half: [eV.width / 2, eV.height / 2, eV.depth / 2]
      }
    }
    xV.d(eV, {
      d: () => YV
    })
  },
  40342: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      f: () => nV,
      h: () => QV,
      k: () => yV
    });
    var JV = xV(220);
    const YV = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      UV = "PetRoot";
    let yV = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      pV = YV;
    new Map, new Map;

    function QV(VV) {
      var eV;
      return null !== (eV = (0, JV.b)(yV, VV)) && void 0 !== eV ? eV : null
    }

    function nV(VV) {
      var eV;
      return null !== (eV = (0, JV.b)(pV, VV)) && void 0 !== eV ? eV : null
    }
  },
  39828: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      c: () => UV
    });
    const JV = new WeakMap;

    function YV(VV, eV) {
      return JV.set(VV, eV), VV
    }

    function UV(VV) {
      var eV;
      return null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : null
    }
  },
  39849: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV
    });
    var JV = xV(1252);

    function YV(VV) {
      const eV = /(\d*\.?\d+)px/.exec(VV);
      return eV ? Number(eV[1]) : null
    }

    function UV(VV) {
      return VV.split(/[\s,]+/).pop()
    }
    let yV = !1;
    const pV = {
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
      drawText: function(VV, eV, JV, pV, QV, nV) {
        if (QV <= 0 || nV <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: wV,
          fontVariant: ZV,
          fontWeight: vV,
          fontSize: rV,
          font: kV
        } = this, bV = [wV, ZV, vV, `${rV}px`, kV].filter(Boolean).join(" "), EV = [
          [vV, `${rV}px`, UV(kV)].filter(Boolean).join(" "), `${rV}px sans-serif`
        ], BV = VV.font, jV = function(VV, eV, xV) {
          for (const JV of eV) {
            VV.font = JV;
            const eV = YV(VV.font),
              yV = UV(JV);
            if (null !== eV && Math.abs(eV - xV) <= .5 && VV.font.toLowerCase().includes(yV.toLowerCase())) return JV
          }
          return null
        }(VV, [bV, ...EV], rV);
        jV !== bV && function(VV, eV, JV) {
          yV || (yV = !0, Promise.resolve().then((() => xV(1353))).then((xV => {
            let {
              lb: YV
            } = xV;
            YV(new Error("A canvas didn't take canvasTxt's font"), {
              font: VV,
              ZZ: eV,
              drawnWith: null !== JV && void 0 !== JV ? JV : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(bV, BV, jV);
        const qV = YV(VV.font);
        if (null === jV && null !== qV && qV > 0) {
          const xV = rV / qV;
          VV.save();
          try {
            return VV.scale(xV, xV), {
              height: this.drawLines(VV, eV, JV / xV, pV / xV, QV / xV, nV / xV, qV).height * xV
            }
          } finally {
            VV.restore()
          }
        }
        return this.drawLines(VV, eV, JV, pV, QV, nV, rV)
      },
      drawLines: function(VV, eV, xV, YV, UV, yV, pV) {
        const QV = xV + UV,
          nV = YV + yV;
        let wV, ZV = YV + yV / 2 + pV / 2;
        "right" === this.align ? (wV = QV, VV.textAlign = "right") : "left" === this.align ? (wV = xV, VV.textAlign = "left") : (wV = xV + UV / 2, VV.textAlign = "center");
        for (const JV of eV) {
          VV.measureText(JV).width >= UV && (eV = eV.replace(JV, ""))
        }
        eV = (0, JV.O)(eV);
        const vV = [],
          rV = eV.split("\n"),
          kV = this.justify ? VV.measureText("\u200a").width : 0;
        rV.forEach((eV => {
          let xV = VV.measureText(eV).width;
          if (xV <= UV) vV.push(eV);
          else {
            let JV = eV;
            const YV = UV;
            let yV, pV, QV;
            for (xV = VV.measureText(JV).width; xV > YV;) {
              for (yV = 0, pV = 0, QV = ""; pV < YV;) yV++, QV = JV.substr(0, yV), pV = VV.measureText(QV).width;
              yV--, QV = QV.substr(0, yV);
              const eV = yV;
              if (" " !== JV.substr(yV, 1)) {
                for (;
                  " " !== JV.substr(yV, 1) && 0 !== yV;) yV--;
                0 === yV && (yV = eV), QV = JV.substr(0, yV)
              }
              QV = this.justify ? this.justifyLine(VV, QV, kV, "\u200a", UV) : QV, JV = JV.substr(yV), xV = VV.measureText(JV).width, vV.push(QV)
            }
            xV > 0 && vV.push(JV)
          }
        }));
        const bV = this.lineHeight ? this.lineHeight : this.getTextHeight(VV, eV),
          EV = bV * (vV.length - 1),
          BV = EV / 2;
        let jV = YV;
        "top" === this.vAlign ? ZV = YV + pV : "bottom" === this.vAlign ? (ZV = nV - EV, jV = nV) : (jV = YV + yV / 2, ZV -= BV), vV.forEach((eV => {
          eV = eV.trim(), VV.fillText(eV, wV, ZV), ZV += bV
        })), this.debug && (VV.lineWidth = 3, VV.strokeStyle = "#00909e", VV.strokeRect(xV, YV, UV, yV), VV.lineWidth = 2, VV.strokeStyle = "#f6d743", VV.beginPath(), VV.moveTo(wV, YV), VV.lineTo(wV, nV), VV.stroke(), VV.strokeStyle = "#ff6363", VV.beginPath(), VV.moveTo(xV, jV), VV.lineTo(QV, jV), VV.stroke());
        return {
          height: EV + bV
        }
      },
      getTextHeight: function(VV, eV) {
        const xV = VV.textBaseline;
        VV.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: JV
        } = VV.measureText(eV);
        return VV.textBaseline = xV, JV
      },
      justifyLine: function(VV, eV, xV, JV, YV) {
        const UV = eV.trim(),
          yV = VV.measureText(UV).width,
          pV = UV.split(/\s+/).length - 1,
          QV = Math.floor((YV - yV) / xV);
        if (pV <= 0 || QV <= 0) return UV;
        const nV = Math.floor(QV / pV);
        let wV = QV - pV * nV,
          ZV = [];
        for (let vV = 0; vV < nV; vV++) ZV.push(JV);
        ZV = ZV.join("");
        return UV.replace(/\s+/g, (VV => {
          const eV = wV > 0 ? ZV + JV : ZV;
          return wV--, VV + eV
        }))
      }
    }
  },
  39857: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => bV,
      f: () => kV,
      i: () => vV,
      m: () => wV,
      n: () => ZV
    });
    var JV = xV(4642),
      YV = xV(375);
    const UV = 1024,
      yV = 1536,
      pV = 2 * JV.j + 1,
      QV = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      nV = 1.5;

    function wV(VV, eV, xV) {
      if ("string" !== typeof VV) return eV;
      try {
        const xV = JSON.parse(VV);
        return xV && "object" === typeof xV ? xV : eV
      } catch (JV) {
        return void 0 !== xV && console.error(`Couldn't parse ${xV}`, JV), eV
      }
    }

    function ZV(VV) {
      return wV(VV, null, "a leaderboard's rows")
    }

    function vV(VV, eV) {
      var xV, JV;
      return null !== eV && void 0 !== eV ? eV : {
        status: null !== (xV = VV.status) && void 0 !== xV ? xV : "loading",
        entries: null !== (JV = VV.entries) && void 0 !== JV ? JV : []
      }
    }

    function rV(VV, eV) {
      return "number" === typeof VV && Number.isFinite(VV) && VV > 0 ? VV : eV
    }

    function kV(VV, eV) {
      const xV = rV(VV.size, 1);
      let JV = rV(VV.width, rV(2.5 * xV, 2.5)),
        YV = rV(VV.height, rV(3.75 * xV, 3.75));
      Number.isFinite(UV * YV / JV) && Number.isFinite(yV * JV / YV) || (JV = 2.5, YV = 3.75);
      const pV = YV / JV,
        QV = Math.max(1, Math.min(UV, eV / pV));
      return {
        width: JV,
        height: YV,
        layoutWidth: Math.max(UV, yV / pV),
        layoutHeight: Math.max(yV, UV * pV),
        pixelWidth: Math.round(QV),
        pixelHeight: Math.round(Math.max(1, Math.min(eV, QV * pV)))
      }
    }

    function bV(VV, eV, xV, yV, wV, ZV) {
      VV.setTransform(1, 0, 0, 1, 0, 0), VV.fillStyle = YV.E.defaultNameTagBackground, VV.fillRect(0, 0, eV, xV), VV.scale(eV / yV.layoutWidth, xV / yV.layoutHeight), VV.translate((yV.layoutWidth - UV) / 2, 0),
        function(VV, eV, xV, UV) {
          var yV, wV, ZV, vV;
          const {
            top: rV,
            around: kV,
            showPlayerText: bV,
            localPlayerDbId: jV
          } = xV, {
            whiteUiText: qV,
            grayUiText: tV,
            yellowUiText: FV
          } = YV.E;
          VV.textBaseline = "middle";
          const TV = function(eV, xV, JV, YV, UV, yV) {
              let pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              VV.font = `bold ${YV}px 'Jetbrains Mono', monospace`, VV.fillStyle = UV, VV.textAlign = pV;
              let QV = eV.replace(/[\r\n\t]/g, " ");
              if (VV.measureText(QV).width > yV) {
                for (; QV.length > 0 && VV.measureText(`${QV}\u2026`).width > yV;) QV = QV.slice(0, -1);
                QV += "\u2026"
              }
              VV.fillText(QV, xV, JV)
            },
            PV = eV => {
              VV.fillStyle = qV, VV.globalAlpha = .15, VV.fillRect(24, eV, 976, 2), VV.globalAlpha = 1
            },
            AV = null === jV ? null : (0, YV.nc)(jV),
            NV = VV => null !== AV && VV.playerHash === AV,
            XV = EV(rV.entries, JV.k),
            MV = "ready" === rV.status && XV.length > 0,
            zV = null === kV ? [] : EV(kV.entries, pV),
            GV = XV.some(NV),
            WV = null === kV ? null : function(VV) {
              const eV = VV;
              if (!eV || !Number.isFinite(eV.rank) || !Number.isFinite(eV.tied) || !Number.isFinite(eV.total)) return null;
              return eV
            }(kV.standing),
            RV = zV.find(NV),
            gV = XV.find(NV),
            DV = null === WV || void 0 === RV ? null : {
              value: RV.value,
              rank: WV.rank
            },
            iV = BV(XV, void 0 === gV || gV.value === (null === DV || void 0 === DV ? void 0 : DV.value) ? DV : null),
            CV = BV(zV, DV),
            aV = (VV, eV) => {
              const xV = VV.findIndex(NV);
              return xV >= 0 ? eV[xV] : null
            },
            oV = null !== (yV = null !== (wV = null === WV || void 0 === WV ? void 0 : WV.rank) && void 0 !== wV ? wV : aV(zV, CV)) && void 0 !== yV ? yV : aV(XV, iV);
          VV.font = "bold 34px 'Jetbrains Mono', monospace";
          const cV = [...MV ? iV : [], ...GV ? [] : CV],
            hV = Math.min(280, Math.max(0, ...cV.map((eV => VV.measureText(QV.format(eV)).width)))),
            lV = hV <= 80,
            LV = lV ? 80 : 32 + hV,
            fV = lV ? 148 : LV + 28,
            mV = 660 - fV;
          TV(`TOP ${JV.k}  /  ALL TIME`, 24, 52, 28, tV, 976), TV(bV ? String(null !== (ZV = eV.title) && void 0 !== ZV ? ZV : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, qV, 976), TV("RANK", 32, 174, 28, tV, fV - 40), TV("PLAYER", fV, 174, 28, tV, mV), TV(bV ? String(null !== (vV = eV.scoreLabel) && void 0 !== vV ? vV : "Score").slice(0, 24) : "Score", 992, 174, 28, tV, 304, "right"), PV(202);
          const KV = (UV - 232) / (JV.k + nV + pV),
            HV = 208 + JV.k * KV,
            uV = HV + nV * KV,
            sV = (eV, xV, JV, YV) => {
              const UV = NV(eV);
              VV.fillStyle = UV ? FV : qV, VV.globalAlpha = UV ? .15 : YV ? .035 : 0, VV.fillRect(24, JV - KV / 2 + 1, 976, KV - 2), VV.globalAlpha = 1;
              const yV = UV ? FV : qV;
              TV(QV.format(xV), LV, JV, 34, yV, lV ? 80 : hV, lV ? "center" : "right"), TV(bV ? String(eV.name).slice(0, 64) : "Player", fV, JV, 34, yV, mV);
              const pV = QV.format(eV.value);
              TV(VV.measureText(pV).width > 304 ? eV.value.toExponential(6) : pV, 992, JV, 34, yV, 304, "right")
            };
          if (MV)
            for (const [JV, YV] of XV.entries()) sV(YV, iV[JV], 208 + (JV + .5) * KV, JV % 2 === 0);
          else {
            const VV = "error" === rV.status,
              eV = VV ? "Couldn't load leaderboard" : "ready" === rV.status ? "No scores yet" : "Loading leaderboard\u2026",
              xV = VV ? "Trying again shortly" : "ready" === rV.status ? "Be the first on the board!" : "Fetching the top players",
              JV = (208 + HV) / 2;
            TV(eV, 512, JV - 28, 40, VV ? YV.E.redUiText : qV, 960, "center"), TV(xV, 512, JV + 27, 30, tV, 960, "center")
          }
          const SV = HV + nV * KV / 2;
          if (null === oV) PV(SV);
          else {
            const eV = null === WV ? 0 : WV.tied - 1,
              xV = `YOUR RANK #${QV.format(oV)}${null===WV?"":` of ${QV.format(WV.total)}`}`;
            VV.font = "bold 36px 'Jetbrains Mono', monospace";
            const JV = Math.max(20, Math.min(36, Math.floor(34560 / VV.measureText(xV).width)));
            TV(xV, 512, SV - (eV > 0 ? 15 : 0), JV, FV, 960, "center"), eV > 0 && TV(`Tied with ${QV.format(eV)} other${1===eV?"":"s"}`, 512, SV + 24, 24, tV, 960, "center")
          }
          if (null === kV) return;
          const IV = uV + pV * KV / 2;
          if (GV) TV(`You're in the top ${JV.k}!`, 512, IV, 40, FV, 960, "center");
          else if (0 === zV.length) TV("You're not on this board yet", 512, IV, 34, tV, 960, "center");
          else
            for (const [JV, YV] of zV.entries()) sV(YV, CV[JV], uV + (JV + .5) * KV, JV % 2 === 0)
        }(VV, wV, ZV, yV.layoutHeight)
    }

    function EV(VV, eV) {
      return Array.isArray(VV) ? VV.slice(0, eV).filter((VV => VV && Number.isFinite(VV.rank) && Number.isFinite(VV.value))) : []
    }

    function BV(VV, eV) {
      const xV = [];
      let JV = !1;
      return VV.forEach(((YV, UV) => {
        if (null !== eV && YV.value === eV.value) return void xV.push(eV.rank);
        const yV = UV > 0 && YV.value === VV[UV - 1].value;
        yV || (JV = 0 === UV && 1 !== YV.rank), xV.push(yV && !JV ? xV[UV - 1] : YV.rank)
      })), xV
    }
  },
  40053: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      f: () => UV
    });
    const JV = 32;

    function YV(VV) {
      return Array.from(VV).length
    }

    function UV(VV) {
      const eV = [""];
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        YV = "";
      const UV = () => {
        eV.push(""), xV = 0, YV = ""
      };
      for (const yV of VV.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(yV)) UV();
        else if (/^\s+$/.test(yV)) YV += yV;
      else if (yV.length > 0) {
        const VV = Array.from(yV);
        xV > 0 && xV + YV.length + VV.length > JV && UV(), eV[eV.length - 1] += YV, xV += YV.length, YV = "";
        for (const YV of VV) xV >= JV && UV(), eV[eV.length - 1] += YV, xV++
      }
      return eV[eV.length - 1] += YV, eV
    }
  },
  42527: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    const JV = 4e5,
      YV = 2;

    function UV(VV, eV, xV) {
      let [UV, yV] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [VV, eV], pV = Math.min(Number.isFinite(xV) && xV > 0 ? xV : 1, YV);
      const QV = Math.max(0, UV, VV) * Math.max(0, yV, eV) * pV * pV;
      return QV > JV && (pV *= Math.sqrt(JV / QV)), [Math.max(1, Math.floor(Math.max(0, VV) * pV)), Math.max(1, Math.floor(Math.max(0, eV) * pV))]
    }
  },
  53932: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      WasmPreviewHost: () => ge,
      pageBuiltInAnimationPack: () => vV,
      pagePreviews: () => Ue,
      previewModule: () => IV
    });
    var JV = xV(3196),
      YV = xV(660);
    const UV = "[bloxd-wasm-client]";

    function yV(VV) {
      const eV = {
        wasm: "unknown",
        client: String(YV.e)
      };
      try {
        var xV;
        eV.wasm = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.Vv()) && void 0 !== xV ? xV : eV.wasm
      } catch {}
      return eV
    }
    async function pV(VV) {
      if (VV.length < 2 || 31 !== VV[0] || 139 !== VV[1]) return VV;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: eV
        } = await Promise.resolve().then((() => xV(3151)));
        return eV(VV)
      }
      const eV = new Blob([VV]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(eV).arrayBuffer())
    }

    function QV(VV, eV, JV, YV) {
      Promise.resolve().then((() => xV(42034))).then((xV => {
        let {
          reportDataLoadFailure: UV
        } = xV;
        UV(VV, eV, JV, YV)
      }), (eV => {
        console.warn(`${UV} ${VV} didn't load, and the report couldn't be sent`, JV.error, eV)
      }))
    }
    const nV = [3e4, 12e4, 3e5];
    class wV {
      constructor(VV) {
        this.deps = VV, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((VV => {
          this.resolveSet = VV
        }))
      }
      provide(VV) {
        return this.loading ??= this.load(VV), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(VV) {
        const eV = yV(VV),
          xV = await async function(VV, eV) {
            let xV;
            try {
              xV = await VV()
            } catch (JV) {
              return {
                stage: "fetch",
                error: JV
              }
            }
            try {
              return eV(xV) ? null : {
                stage: "decode",
                error: null
              }
            } catch (JV) {
              return {
                stage: "decode",
                error: JV
              }
            }
          }((() => this.deps.fetch()), (eV => {
            const xV = VV.fyV(eV);
            return xV && this.resolveSet(eV), xV
          }));
        if (null !== xV) {
          if ("fetch" === xV.stage) {
            this.loading = null;
            const eV = nV[this.retries++];
            void 0 !== eV && this.deps.later((() => {
              this.provide(VV)
            }), eV)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(xV, eV))
        }
      }
    }
    let ZV = null;

    function vV() {
      return ZV ??= new wV({
        fetch: async () => pV(await (0, JV.H)(rV(), {
          priority: "low"
        })),
        onFailed: (VV, eV) => {
          QV("builtInAnimations", rV(), VV, eV)
        },
        later: (VV, eV) => {
          setTimeout(VV, eV)
        }
      }), ZV
    }

    function rV() {
      return xV(53937)
    }
    var kV = xV(3194),
      bV = xV(1230),
      EV = xV(355),
      BV = xV(348),
      jV = xV(686),
      qV = xV(5297),
      tV = xV(42001),
      FV = xV(42024),
      TV = xV(42234),
      PV = (xV(42066), xV(42085)),
      AV = xV(42091),
      NV = xV(42096),
      XV = xV(42011),
      MV = xV(42266),
      zV = xV(42275),
      GV = xV(41994),
      WV = xV(42295),
      RV = xV(42132),
      gV = xV(42125),
      DV = xV(42177),
      iV = xV(42252),
      CV = xV(53872),
      aV = xV(37437),
      oV = xV(4122),
      cV = xV(42527);
    const hV = "[bloxd-previews]",
      lV = 0,
      LV = 1,
      fV = 2,
      mV = 1,
      KV = 2,
      HV = 3,
      uV = 0,
      sV = 1,
      SV = 2;

    function IV(VV) {
      const eV = VV,
        xV = (0, tV.P)(VV),
        JV = (0, tV.n)(VV);
      return null !== xV && null !== JV && "function" === typeof eV.hyV && "function" === typeof eV.lyV && "function" === typeof eV.LyV ? eV : null
    }

    function dV() {
      return xV(53941)
    }
    async function OV(VV, eV, JV) {
      var YV;
      let UV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === VV && (0, GV.z)();
      const pV = await (0, GV.R)();
      if (null === pV || (0, tV.q)(pV) || (0, GV.e)()) return;
      const QV = "webgpu" === pV.backend;
      if (!QV && "lost" !== VV) return;
      const nV = QV && (0, BV.q)(pV.adapter, null !== JV && void 0 !== JV ? JV : null, "lost" === VV, UV),
        wV = null !== (YV = "lost" === VV ? (0, FV.o)((0, kV.R)() ? (0, tV.P)((0, kV.D)()) : null) : void 0) && void 0 !== YV ? YV : eV,
        ZV = QV ? (0, tV.Y)(VV, void 0, (0, FV.d)(wV)) : null;
      if (null === ZV) {
        QV || (0, jV.z)(), (0, GV.r)();
        try {
          await async function(VV, eV, JV, YV, UV) {
            let {
              restoreLost: pV,
              adapterRemembered: QV
            } = UV;
            const nV = (0, kV.R)(),
              {
                flushCrashReports: wV,
                reportRenderReload: ZV
              } = await Promise.resolve().then((() => xV(42034)));
            ZV(VV.backend, YV, yV(nV ? (0, kV.D)() : null), {
              from: "home",
              cause: eV,
              restoreLost: pV,
              adapterRemembered: QV,
              ...Ve(VV, eV, JV)
            }), await wV(RV.e)
          }(pV, VV, wV, null !== JV && void 0 !== JV ? JV : "start_failed" === VV ? 0 : 1, {
            restoreLost: UV,
            adapterRemembered: nV
          })
        } catch (rV) {
          console.warn(`${hV} ${pV.backend} failed at home (${VV}), and its report couldn't be sent`, rV)
        }(0, RV.l)()
      } else {
        var vV;
        const eV = Ve(pV, VV, wV),
          JV = `WebGPU failed at home (${VV}${void 0===eV.error?"":`: ${eV.error instanceof Error?eV.error.message:(0,aV.m)(eV.error)}`}) and ${ZV}`;
        console.warn(`${hV} ${JV}: the previews stop`, null !== (vV = eV.error) && void 0 !== vV ? vV : ""), (0, GV.v)(JV);
        try {
          const {
            countRenderLost: JV
          } = await Promise.resolve().then((() => xV(42034)));
          JV(VV, eV.error, eV.context)
        } catch (bV) {
          console.warn(`${hV} WebGPU failed at home (${VV}), and its count couldn't be sent`, bV)
        }
      }
    }

    function Ve(VV, eV, xV) {
      let {
        adapter: JV
      } = VV;
      return {
        error: xV,
        context: {
          adapter: JV,
          boundAtMs: "start_failed" === eV ? null : (0, GV.N)(),
          indirectHangs: (0, GV.C)(),
          restoresSkipped: (0, GV.O)()
        }
      }
    }
    async function ee() {
      if (!(0, kV.R)()) {
        const VV = await (0, GV.R)();
        if (null === VV || (0, tV.q)(VV)) return null;
        if (await (0, WV.d)(await VV.load()), !(0, kV.R)()) return null
      }
      return IV((0, kV.D)())
    }
    class xe {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.page = VV, this.host = eV, this.id = xV, this.canvas = JV, this.size = YV, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const yV = {
            ...UV.images,
            glbUrl: VV => {
              var eV;
              return null !== (eV = this.models.drawnUrl(VV)) && void 0 !== eV ? eV : UV.images.glbUrl(VV)
            }
          },
          pV = eV => VV.modelFile(eV);
        this.images = new TV.f(yV, (VV => {
          console.warn(`${hV} image ${VV.key.kind}:${VV.key.index}:${VV.key.word} failed`, VV.error)
        }), {
          fetchFile: pV,
          fetchImage: eV => VV.imageFile(eV)
        }), VV.startModels(), this.models = new PV.h(UV.files, ((eV, xV) => VV.buildModel(eV, xV)), (VV => {
          console.warn(`${hV} model file ${VV.file} (${VV.url}) failed`, VV.error)
        }), {
          fetchFile: pV,
          onWritten: (VV, eV) => {
            this.images.glbWritten(VV, eV)
          },
          onTaken: (VV, eV) => {
            this.images.glbTaken(VV, eV)
          }
        }), this.write = (VV, eV, xV) => {
          if (this.closed) return !0;
          if (VV === PV.d) {
            const VV = new DataView(xV.buffer, xV.byteOffset, NV.c),
              JV = VV.getUint32(0, !0),
              YV = VV.getUint32(NV.e, !0),
              UV = this.page.hostCall(SV, (() => this.host.SpV(this.id, JV, eV, xV.subarray(NV.c))));
            return this.outcomes.push([YV, UV]), !0
          }
          return VV === TV.b && (this.page.hostCall(void 0, (() => {
            this.host.dpV(this.id, xV)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(VV, eV, xV) {
        if (this.closed) return;
        const [JV, YV] = (0, cV.d)(VV, eV, this.page.dpr(), xV);
        JV === this.size[0] && YV === this.size[1] || (this.size = [JV, YV], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, JV, YV)
        })))
      }
      setMob(VV, eV, xV, JV) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.YQV(this.id, VV, eV, xV, JV))))
      }
      setPet(VV, eV, xV, JV) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.yQV(this.id, VV, eV, xV, JV))))
      }
      setPlayer(VV, eV, xV) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.eQV(this.id, VV, eV, xV))))
      }
      setCompanions(VV) {
        var eV;
        let {
          pet: xV,
          aura: JV
        } = VV;
        if (this.closed) return;
        const YV = null !== (eV = null === xV || void 0 === xV ? void 0 : xV.model) && void 0 !== eV ? eV : -1,
          UV = new Float64Array(xV ? [xV.scale, ...xV.offset, xV.yawOffset, xV.bobAmplitude, xV.bobHz] : []),
          yV = new Float64Array(JV ? [...JV.offset, ...JV.half] : []);
        this.page.hostCall(void 0, (() => {
          var VV, eV;
          this.host.VQV(this.id, YV, UV, null !== (VV = null === xV || void 0 === xV ? void 0 : xV.flyClip) && void 0 !== VV ? VV : "", null !== (eV = null === JV || void 0 === JV ? void 0 : JV.opts) && void 0 !== eV ? eV : "", yV)
        }))
      }
      setFigure(VV, eV, xV, JV) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xQV(this.id, VV, eV, xV, JV))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const VV = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === VV || VV.length < 3 ? null : {
          alpha: VV[0],
          beta: VV[1],
          radius: VV[2]
        }
      }
      setOrbit(VV) {
        let {
          alpha: eV,
          beta: xV,
          radius: JV
        } = VV;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.UQV(this.id, eV, xV, JV)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((VV => {
          this.settled.push(VV)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, MV.k)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [VV, eV] of this.outcomes) {
          const xV = eV === uV ? [] : [eV === sV ? VV : (VV | PV.f) >>> 0];
          this.models.taken(VV, xV)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(VV) {
        let eV = !1;
        if (VV) {
          const VV = this.host.nQV(this.id);
          for (const eV of VV) this.models.request(eV);
          const xV = this.host.QQV(this.id);
          xV.length > 0 && this.images.onEvent(xV), eV = VV.length > 0 || xV.length > 0
        }
        const xV = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          JV = eV || xV > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = JV ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(VV) {
        this.page.hostCall(void 0, (() => {
          const eV = this.host.close(this.id);
          eV.length > 0 && this.images.onEvent(eV), this.page.isTrapped || VV.LyV(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const VV = this.settled;
        this.settled = [];
        for (const eV of VV) eV()
      }
    }
    class Je {
      constructor(VV) {
        this.deps = VV, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: VV => {
            this.modelsFailed(VV)
          },
          onDecoderFailed: VV => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${hV} the Draco decoder didn't load: models waiting on it won't draw`, VV))
          },
          onWorkerLost: VV => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${hV} a model worker was lost: ${VV}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Xk = {
          setShaderPack: (VV, eV, xV, JV, YV) => (this.shaderPackArgs = [VV, eV, xV, JV, YV], this.handOverShaderPack(), !0)
        }, this.frame = VV => {
          this.frameId = null;
          const eV = this.host;
          if (null !== eV && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(eV, VV)
          } catch (xV) {
            if (!this.stopIfTrapped(xV) && (this.stop(), (0, tV.s)(xV))) return void this.deps.onRenderFailed("frames_refused", xV);
            console.warn(`${hV} the previews stopped: their frame threw`, xV)
          }
        }, VV.pack.onChange((() => {
          this.packChanged()
        })), VV.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const VV of this.previews.values()) VV.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var VV, eV;
        return null !== (VV = null === (eV = this.host) || void 0 === eV ? void 0 : eV.attached()) && void 0 !== VV && VV
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((VV, eV) => VV + eV), 0) / this.costs.length
      }
      async bindSession(VV, eV, xV) {
        const JV = this.binding,
          YV = this.sessionEnds;
        try {
          const UV = this.hostOf(VV);
          if (!UV.IpV()) {
            const eV = (0, DV.d)().sampleCount,
              yV = await xV(eV);
            if (this.sessionEnds !== YV) return this.keepRendererOfEndedSession(VV, UV, yV, eV, JV), eV;
            if (!UV.DpV(yV)) throw new Error("the page has a renderer already");
            (0, GV.w)(performance.now()), this.samples = eV, (0, iV.h)((0, tV.n)(VV))
          }
          if (!UV.attach(eV)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === JV && this.endBinding()
        }
      }
      keepRendererOfEndedSession(VV, eV, xV, JV, YV) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== YV) try {
          xV.free()
        } catch (UV) {
          console.warn(`${hV} an ended session's renderer didn't free`, UV)
        } else eV.DpV(xV) && ((0, GV.w)(performance.now()), this.samples = JV, (0, iV.h)(this.registryOf(VV)))
      }
      async beginSession() {
        var VV;
        let eV = () => {};
        const xV = new Promise((VV => {
          eV = VV
        }));
        this.binding = {
          done: xV,
          release: eV
        }, await (null === (VV = this.opening) || void 0 === VV ? void 0 : VV.catch((() => null)));
        const JV = this.pageCanvas;
        return this.pageCanvas = null, JV
      }
      endSession(VV) {
        var eV, xV;
        if (this.sessionEnds++, this.lastEndReturned = VV, this.endBinding(), VV) {
          try {
            var JV;
            null === (JV = this.host) || void 0 === JV || JV.detach()
          } catch (YV) {
            return void console.warn(`${hV} the session's core kept the page's renderer`, YV)
          }!0 === (null === (eV = this.host) || void 0 === eV ? void 0 : eV.attached()) && console.warn(`${hV} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (xV = this.host) || void 0 === xV ? void 0 : xV.IpV()) && (0, iV.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var VV;
        null === (VV = this.binding) || void 0 === VV || VV.release(), this.binding = null
      }
      async openPreview(VV, eV, xV, JV) {
        const YV = await this.renderingHost(),
          UV = this.module;
        if (null === YV || null === UV) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(YV), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(UV)
        }));
        const yV = this.nextId++,
          pV = this.deps.createCanvas(),
          [QV, nV] = (0, cV.d)(eV, xV, this.deps.dpr(), JV);
        pV.width = QV, pV.height = nV;
        if (!this.guarded((() => (UV.lyV(yV, pV), YV.open(yV, QV, nV, VV))))) throw this.hostCall(void 0, (() => {
          UV.LyV(yV)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const wV = new xe(this, YV, yV, pV, [QV, nV], this.deps);
        return this.previews.set(yV, wV), this.startFrames(), wV
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, GV.e)() || null !== (0, GV.J)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((VV => {
          null === VV || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(VV) {
        return this.prefetchedOr(VV, this.deps.fetchModel)
      }
      imageFile(VV) {
        return this.prefetchedOr(VV, JV.H)
      }
      prefetchedOr(VV, eV) {
        const xV = this.prefetchedFiles.get(VV);
        return void 0 === xV ? eV(VV) : xV.catch((() => eV(VV)))
      }
      async prefetchPlayerFiles() {
        const VV = this.deps.playerFile().then((VV => this.deps.files.url(VV))),
          eV = await Promise.all([VV, this.deps.images.lifeformAtlasUrl(MV.d)]).catch((() => null));
        if (null === eV) return;
        const [xV, JV] = eV, YV = (VV, eV) => {
          if (null === VV) return;
          const xV = eV(VV);
          this.prefetchedFiles.set(VV, xV), xV.catch((() => {
            this.prefetchedFiles.delete(VV)
          }))
        };
        YV(xV, (VV => this.modelFile(VV))), YV(JV, (VV => this.imageFile(VV)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((VV => (null === VV && (this.moduleLoad = null), VV)), (VV => {
          throw this.moduleLoad = null, VV
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((VV => {
          throw this.animationTable = null, VV
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((VV => (this.modelsFailed(VV), () => new Promise((() => {})))))
      }
      buildModel(VV, eV) {
        return this.startModels(), this.models.then((xV => xV(VV, eV))).then((VV => this.unavailable ? new Promise((() => {})) : VV))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(VV) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${hV} the model workers didn't start: models won't draw in the previews`, VV))
      }
      called(VV) {
        return 0 !== VV && this.logError(VV, 0), VV
      }
      closePreview(VV) {
        this.previews.delete(VV.id), null !== this.module && VV.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(VV) {
        if (null !== this.module && this.module !== VV) throw new Error("a second renderer module on one page");
        return this.module = VV, null === this.host && (this.host = this.guarded((() => new VV.hyV)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: VV
        } = this;
        null !== VV && this.outsideCall("the game's start or end", (() => {
          VV.JQV(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: VV,
          shaderPackArgs: eV
        } = this;
        null !== VV && null !== eV && this.outsideCall("the shader pack's hand-over", (() => {
          VV.DYV(...eV) || console.warn(`${hV} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(VV, eV) {
        try {
          this.hostCall(void 0, eV)
        } catch (xV) {
          this.stop(), console.warn(`${hV} the previews stopped: ${VV} threw`, xV)
        }
      }
      async loadAnimations(VV) {
        const eV = yV(null),
          xV = this.module;
        try {
          eV.wasm = null === xV ? eV.wasm : this.hostCall(eV.wasm, (() => xV.Vv()))
        } catch {}
        let JV, YV;
        try {
          JV = await this.fetchAnimationTable()
        } catch (UV) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: UV
          }, eV)
        }
        if (!this.settleIfTrapped()) {
          try {
            YV = VV.OpV(JV)
          } catch (UV) {
            if (this.stopIfTrapped(UV)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: UV
            }, eV)
          }
          YV || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, eV)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const VV = this.host;
        return null !== VV && this.guarded((() => VV.IpV())) ? VV : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var VV;
        const eV = null !== (VV = this.module) && void 0 !== VV ? VV : await this.loadModule();
        if (null === eV) return null;
        const xV = this.hostOf(eV),
          JV = () => this.guarded((() => xV.IpV()));
        if (JV()) return xV;
        if (null !== (0, GV.J)() || (0, GV.e)()) return null;
        const YV = this.deps.createCanvas();
        YV.width = 1, YV.height = 1;
        const UV = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const yV = (0, DV.d)().sampleCount;
        let pV;
        try {
          pV = await (0, tV.x)(eV, "previewRenderer", YV, yV, CV.b, UV)
        } catch (QV) {
          throw QV instanceof XV.e ? this.stopForTrap(QV) : (0, tV.w)(QV) && await this.deps.onRenderFailed("start_failed", QV), QV
        }
        return this.guarded((() => xV.DpV(pV))) ? ((0, GV.w)(performance.now()), this.samples = yV, this.pageCanvas = YV, (0, iV.h)(this.registryOf(eV)), xV) : JV() ? xV : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(VV, eV) {
        for (const yV of this.previews.values()) yV.feed();
        if (this.stopped) return;
        const xV = this.deps.now(),
          JV = VV.frame(eV);
        this.costs.push(this.deps.now() - xV), this.costs.length > 120 && this.costs.shift();
        const YV = 0 !== (256 & JV),
          UV = 255 & JV;
        for (const yV of this.previews.values()) {
          if (this.stopped) return;
          yV.collect(YV)
        }
        if (!this.stopped) {
          if (0 !== (512 & JV) && this.deps.onDrew(), YV) {
            const eV = VV.pQV();
            for (let VV = 0; VV + 1 < eV.length; VV += 2) eV[VV] === qV.M.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(eV[VV], eV[VV + 1])
          }
          if (UV !== mV) {
            if (UV === KV) return this.stop(), void this.deps.onFatal(VV.HpV(), VV.upV());
            if (UV === HV) return this.stop(), void console.warn(`${hV} the previews stopped: the page's renderer went with its session`);
            (0, EV.d)(eV), this.startFrames()
          } else {
            const eV = VV.spV();
            this.stop();
            const xV = eV[2] === qV.bd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(xV, void 0, eV[1], eV[2] === qV.bd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, XV.j)(this.module) || "failed" === (0, kV.C)())
      }
      hostCall(VV, eV) {
        if (this.settleIfTrapped()) return VV;
        try {
          return eV()
        } catch (xV) {
          if (this.stopIfTrapped(xV)) return VV;
          throw xV
        }
      }
      guarded(VV) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return VV()
        } catch (eV) {
          throw this.stopIfTrapped(eV), eV
        }
      }
      registryOf(VV) {
        return {
          tYV: (eV, xV) => {
            this.hostCall(void 0, (() => {
              VV.tYV(eV, xV)
            }))
          },
          FYV: eV => {
            this.hostCall(void 0, (() => {
              VV.FYV(eV)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, iV.h)(null)), !0)
      }
      stopIfTrapped(VV) {
        return !(null === this.module || !(0, XV.n)(this.module, VV)) && (this.stopForTrap(VV), !0)
      }
      stopForTrap(VV) {
        this.stop(), (0, iV.h)(null), (0, oV.f)("previews", VV)
      }
      stop() {
        this.stopped = !0;
        for (const VV of this.previews.values()) VV.abandon()
      }
      logError(VV, eV) {
        const xV = `${VV}:${eV}`;
        this.loggedErrors.has(xV) || (this.loggedErrors.add(xV), console.warn(`${hV} error ${VV} (detail ${eV})`))
      }
    }
    let Ye = null;

    function Ue() {
      return Ye ??= new Je(function() {
        const VV = (0, AV.r)(bV.clientSideServerUrls.staticUrl, {
          packUrl: VV => {
            var eV, xV;
            return null !== (eV = null === (xV = MV.g.current) || void 0 === xV ? void 0 : xV.modelUrl(VV)) && void 0 !== eV ? eV : null
          }
        });
        return {
          loadModule: ee,
          startModels: async VV => {
            const {
              pageModelPool: eV
            } = await xV.e(49).then((() => xV(54011))), {
              pool: JV
            } = eV(VV);
            return (VV, eV) => JV.build(VV, eV)
          },
          fetchAnimations: async () => pV(await (0, JV.H)(dV())),
          playerFile: async () => (await (0, AV.n)()).PLAYER_FILE,
          onAnimationsFailed: (VV, eV) => {
            QV("previewAnimations", dV(), VV, eV)
          },
          provideBuiltInAnimationPack: VV => {
            vV().provide(VV)
          },
          openExtras: GV.F,
          files: VV,
          images: (0, MV.n)((0, TV.l)(VV.url), (() => MV.g.current)),
          pack: MV.g,
          game: zV.e,
          fetchModel: VV => (0, AV.i)(VV),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: VV => requestAnimationFrame(VV),
          cancelFrame: VV => {
            cancelAnimationFrame(VV)
          },
          onRenderFailed: OV,
          onFatal: (VV, eV) => {
            console.error(`${hV} the previews stopped: renderer error ${VV} (detail ${eV})`)
          },
          onDeviceLost: () => {
            (0, GV.G)() === gV.b.webgpu && ((0, FV.h)((0, kV.R)() ? (0, tV.P)((0, kV.D)()) : null), BV.E.lost())
          },
          onDrew: () => {
            BV.E.drew()
          }
        }
      }()), Ye
    }
    var ye = xV(648),
      pe = xV(39828),
      Qe = xV(3719);
    const ne = {
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
    var we = xV(40373),
      Ze = xV(40342),
      ve = xV(45462);
    class re {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(VV, eV) {
        const xV = void 0 === VV ? null : (0, Ze.h)(VV),
          JV = void 0 === eV ? null : (0, Ze.f)(eV);
        return xV === this.pet && JV === this.aura || (this.pet = xV, this.aura = JV, this.companions = {
          pet: xV && ke(xV),
          aura: JV && be(JV)
        }), this.companions
      }
    }

    function ke(VV) {
      var eV;
      const xV = ve.COSMETIC_MODEL_KEYS.get(VV.model);
      if (void 0 === xV) return console.warn(`[bloxd-previews] pet model ${VV.model} isn't a Player attachment model`), null;
      const {
        scale: JV,
        followOffset: YV,
        yawOffset: UV,
        bobAmplitude: yV,
        bobHz: pV,
        clips: QV
      } = VV;
      return {
        model: xV,
        scale: JV,
        offset: YV,
        yawOffset: UV,
        bobAmplitude: yV,
        bobHz: pV,
        flyClip: null !== (eV = null === QV || void 0 === QV ? void 0 : QV.fly) && void 0 !== eV ? eV : null
      }
    }

    function be(VV) {
      const {
        opts: eV,
        half: xV
      } = (0, we.d)(VV);
      return {
        opts: JSON.stringify(eV),
        offset: VV.offset,
        half: xV
      }
    }
    const Ee = "[bloxd-previews]",
      Be = new Uint32Array(5);

    function je(VV) {
      return ye.m.indexOf(VV)
    }
    const qe = new WeakSet;

    function te(VV) {
      const eV = (0, pe.c)(VV),
        xV = null === eV ? -1 : Fe(eV);
      return -1 !== xV ? xV : (qe.has(VV) || (qe.add(VV), console.warn(`${Ee} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Fe(VV) {
      var eV;
      return null !== (eV = ne[VV]) && void 0 !== eV ? eV : -1
    }

    function Te(VV, eV) {
      const {
        canvas: xV
      } = eV;
      xV.style.width = "100%", xV.style.height = "100%", xV.style.display = "block", VV.appendChild(xV)
    }

    function Pe(VV) {
      const eV = VV.getBoundingClientRect();
      return [eV.width, eV.height]
    }
    class Ae {
      constructor(VV, eV) {
        this.preview = VV, this.showView = eV
      }
      show(VV) {
        this.showView(this.preview, VV)
      }
      resize(VV, eV) {
        this.preview.resize(VV, eV)
      }
      close() {
        this.preview.close()
      }
    }
    class Ne {
      constructor(VV) {
        this.preview = VV, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new re, this.companions = null, this.detachControls = void 0, this.detachControls = function(VV) {
          const {
            canvas: eV
          } = VV;
          let xV = null;
          const JV = VV => {
              var JV;
              xV = {
                pointer: VV.pointerId,
                x: VV.clientX,
                y: VV.clientY
              }, null === (JV = eV.setPointerCapture) || void 0 === JV || JV.call(eV, VV.pointerId)
            },
            YV = eV => {
              var JV;
              const YV = VV.orbit;
              if ((null === (JV = xV) || void 0 === JV ? void 0 : JV.pointer) !== eV.pointerId || null === YV) return;
              const UV = eV.clientX - xV.x,
                yV = eV.clientY - xV.y;
              xV = {
                ...xV,
                x: eV.clientX,
                y: eV.clientY
              }, VV.setOrbit({
                alpha: YV.alpha - .01 * UV,
                beta: Math.min(Math.PI - .01, Math.max(.01, YV.beta - .01 * yV)),
                radius: YV.radius
              })
            },
            UV = VV => {
              var eV;
              (null === (eV = xV) || void 0 === eV ? void 0 : eV.pointer) === VV.pointerId && (xV = null)
            },
            yV = eV => {
              const xV = VV.orbit;
              if (null === xV) return;
              eV.preventDefault();
              const JV = eV.deltaY * (eV.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : eV.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                YV = Math.min(100, Math.max(5, xV.radius + .08 * JV));
              VV.setOrbit({
                ...xV,
                radius: YV
              })
            };
          return eV.style.touchAction = "none", eV.addEventListener("pointerdown", JV), eV.addEventListener("pointermove", YV), eV.addEventListener("pointerup", UV), eV.addEventListener("pointercancel", UV), eV.addEventListener("wheel", yV, {
            passive: !1
          }), () => {
            eV.removeEventListener("pointerdown", JV), eV.removeEventListener("pointermove", YV), eV.removeEventListener("pointerup", UV), eV.removeEventListener("pointercancel", UV), eV.removeEventListener("wheel", yV)
          }
        }(VV), this.dev = {
          canvas: () => VV.canvas,
          isolateHead: () => {
            console.warn(`${Ee} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${Ee} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = VV.untilSettled().then((() => {
          if (VV.isStopped) throw new Error(`${Ee} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(VV, eV) {
        this.cosmetics[VV] = eV, this.apply()
      }
      playEmote(VV) {
        null === VV || VV !== this.emote ? (this.emote = VV, this.apply()) : this.preview.replay()
      }
      untilDrawn(VV) {
        return this.preview.untilSettled()
      }
      setOrbit(VV) {
        let {
          yaw: eV,
          pitch: xV,
          radius: JV
        } = VV;
        const YV = this.preview.orbit;
        null !== YV && this.preview.setOrbit({
          alpha: eV,
          beta: xV,
          radius: null !== JV && void 0 !== JV ? JV : YV.radius
        })
      }
      resetCamera() {}
      resize(VV, eV) {
        this.preview.resize(VV, eV)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var VV;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Be, null === (VV = this.emote) ? -1 : Fe(VV));
        const eV = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        eV !== this.companions && (this.companions = eV, this.preview.setCompanions(eV))
      }
    }

    function Xe(VV, eV) {
      let {
        mobType: xV,
        variation: JV,
        animation: YV
      } = eV;
      VV.setMob(je(xV), null !== JV && void 0 !== JV ? JV : "", 1, te(YV))
    }

    function Me(VV, eV) {
      let {
        mobType: xV,
        variation: JV,
        metaInfo: YV,
        tamed: UV
      } = eV;
      VV.setPet(je(xV), JV, YV, UV)
    }
    const ze = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Ge {
      constructor(VV, eV, xV, JV) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, VV(xV.width, JV[1], JV).then((VV => {
          if (this.closed) return void VV.close();
          const {
            style: xV
          } = VV.canvas;
          xV.position = "absolute", xV.top = "0", xV.visibility = "hidden", Te(eV, VV), this.preview = VV, this.apply()
        })).catch((VV => {
          console.error(`${Ee} couldn't open a lineup figure`, VV)
        }))
      }
      update(VV, eV, xV, JV, YV) {
        this.figure = VV, this.shown = eV, this.order = xV, this.span = JV, this.lineup = YV, this.apply()
      }
      close() {
        var VV;
        this.closed = !0, null === (VV = this.preview) || void 0 === VV || VV.close(), this.preview = null
      }
      apply() {
        const {
          preview: VV,
          figure: eV,
          lineup: xV
        } = this;
        if (null === VV || null === eV) return;
        if (this.given !== eV) {
          var JV;
          this.given = eV, this.loaded = !1;
          const xV = null === eV.JA ? 0 : null !== (JV = (0, Qe.d)(eV.JA)) && void 0 !== JV ? JV : 0;
          VV.setFigure(function(VV) {
            return JSON.stringify(Object.fromEntries(VV.cosmetics))
          }(eV), xV, te(eV.animation), eV.size), VV.untilSettled().then((() => {
            this.given === eV && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: YV,
          width: UV
        } = this.span;
        VV.resize(UV, xV[1], xV);
        const {
          style: yV
        } = VV.canvas;
        yV.left = `${YV}px`, yV.width = `${UV}px`, yV.zIndex = this.order, yV.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class We {
      constructor(VV, eV) {
        this.open = eV, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Pe(VV), this.layer = document.createElement("div");
        const {
          style: xV
        } = this.layer;
        xV.position = "relative", xV.isolation = "isolate", xV.overflow = "hidden", xV.width = "100%", xV.height = "100%", xV.pointerEvents = "none", VV.appendChild(this.layer)
      }
      show(VV) {
        this.view = VV, this.place()
      }
      resize(VV, eV) {
        this.size = [VV, eV], this.place()
      }
      close() {
        for (const VV of this.figures) VV.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: VV,
          shown: eV
        } = this.view;
        for (const JV of this.figures.splice(VV.length)) JV.close();
        const {
          size: xV
        } = this;
        VV.forEach(((JV, YV) => {
          var UV;
          const yV = function(VV, eV, xV, JV) {
            let [YV, UV] = JV;
            const yV = (VV + .5) * YV / eV,
              pV = Math.min(Math.max(YV / eV, 2 * xV * UV), 2 * Math.max(yV, YV - yV));
            return {
              left: yV - pV / 2,
              width: pV
            }
          }(YV, VV.length, function(VV) {
            let {
              animation: eV,
              size: xV
            } = VV;
            const {
              aimed: JV,
              ready: YV
            } = ze;
            return (te(eV) === ne.gunAimed ? JV : YV) * xV
          }(JV), xV);
          this.figures[YV] ??= new Ge(this.open, this.layer, yV, xV), this.figures[YV].update(JV, null !== (UV = eV[YV]) && void 0 !== UV && UV, function(VV, eV) {
            return String(Math.round(1e3 * VV) + eV)
          }(JV.size, YV), yV, xV)
        }))
      }
    }
    const Re = {
      player: LV,
      store: fV
    };
    class ge {
      constructor(VV) {
        this.page = VV
      }
      async openMob(VV) {
        return new Ae(await this.open(VV, lV), Xe)
      }
      async openPet(VV) {
        return new Ae(await this.open(VV, lV), Me)
      }
      openMobLineup(VV) {
        return new We(VV, ((VV, eV, xV) => this.page.openPreview(lV, VV, eV, xV)))
      }
      async openCharacter(VV, eV) {
        return new Ne(await this.open(VV, Re[eV]))
      }
      async open(VV, eV) {
        const [xV, JV] = Pe(VV), YV = await this.page.openPreview(eV, xV, JV);
        return Te(VV, YV), YV
      }
    }
  },
  37916: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => bV,
      C: () => BV,
      d: () => JV,
      e: () => YV,
      h: () => vV,
      i: () => EV,
      k: () => wV,
      m: () => jV,
      p: () => QV,
      t: () => nV,
      v: () => rV,
      z: () => kV
    });
    const JV = [{
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

    function YV(VV, eV) {
      const {
        numLines: xV,
        charsPerLine: YV
      } = JV[eV];
      return qV(VV, xV, YV, !1)
    }
    const UV = 7 / 8,
      yV = .25,
      pV = 8;

    function QV(VV, eV) {
      return {
        width: Math.min(VV, pV) - 2 * yV,
        height: Math.min(eV, pV) - 2 * yV
      }
    }

    function nV(VV, eV, xV) {
      const YV = QV(VV, eV),
        {
          numLines: yV,
          charsPerLine: pV
        } = JV[xV];
      return {
        numLines: Math.max(1, Math.floor(yV / UV * YV.height)),
        charsPerLine: Math.max(1, Math.floor(pV * YV.width))
      }
    }

    function wV(VV, eV, xV, JV) {
      const {
        numLines: YV,
        charsPerLine: UV
      } = nV(xV, JV, eV);
      return qV(VV, YV, UV, !1)
    }
    const ZV = 32e3;

    function vV(VV) {
      return VV.slice(0, ZV)
    }
    const rV = 512e3,
      kV = 64,
      bV = rV;

    function EV(VV, eV) {
      const xV = Math.max(0, bV - eV),
        JV = Math.min(rV, xV);
      return VV.slice(0, JV)
    }
    const BV = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      vn: {
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

    function jV(VV, eV) {
      const {
        numLines: xV,
        charsPerLine: JV
      } = BV[eV];
      return qV(VV, xV, JV, !1)
    }

    function qV(VV, eV, xV, JV, YV) {
      (YV || JV) && (VV = VV.slice(0, null !== YV && void 0 !== YV ? YV : eV * xV));
      const UV = VV.split("\n");
      if (UV.length > eV && UV.splice(eV, UV.length - eV), !JV)
        for (let yV = 0; yV < UV.length; yV++) {
          const VV = UV[yV];
          VV.length > xV && (UV[yV] = VV.substring(0, xV), UV.length < eV && UV.splice(yV + 1, 0, VV.substring(xV)))
        }
      return UV.join("\n")
    }
  },
  53937: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  53941: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);