export const id = 71;
export const ids = [71];
export const modules = {
  39994: (UU, XU, zU) => {
    function cU(UU) {
      return void 0 === UU ? void 0 : [UU[0], UU[1], UU[2]]
    }

    function yU(UU) {
      const XU = UU.particles;
      return {
        opts: {
          texture: XU.texture,
          xY: XU.xY,
          minLifeTime: XU.minLifeTime,
          maxLifeTime: XU.maxLifeTime,
          minSize: XU.minSize,
          maxSize: XU.maxSize,
          minEmitPower: XU.minEmitPower,
          maxEmitPower: XU.maxEmitPower,
          emitRate: XU.emitRate,
          gravity: cU(XU.gravity),
          dir1: cU(XU.dir1),
          dir2: cU(XU.dir2),
          colorGradients: XU.colorGradients,
          blendMode: XU.blendMode
        },
        half: [XU.width / 2, XU.height / 2, XU.depth / 2]
      }
    }
    zU.d(XU, {
      c: () => yU
    })
  },
  39954: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      g: () => DU,
      k: () => oU,
      m: () => AU
    });
    var cU = zU(220);
    const yU = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      QU = "PetRoot";
    let AU = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      FU = yU;
    new Map, new Map;

    function oU(UU) {
      var XU;
      return null !== (XU = (0, cU.b)(AU, UU)) && void 0 !== XU ? XU : null
    }

    function DU(UU) {
      var XU;
      return null !== (XU = (0, cU.b)(FU, UU)) && void 0 !== XU ? XU : null
    }
  },
  39453: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU, XU) {
      return cU.set(UU, XU), UU
    }

    function QU(UU) {
      var XU;
      return null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
    }
  },
  39472: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(1236);

    function yU(UU) {
      const XU = /(\d*\.?\d+)px/.exec(UU);
      return XU ? Number(XU[1]) : null
    }

    function QU(UU) {
      return UU.split(/[\s,]+/).pop()
    }
    let AU = !1;
    const FU = {
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
      drawText: function(UU, XU, cU, FU, oU, DU) {
        if (oU <= 0 || DU <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: EU,
          fontVariant: YU,
          fontWeight: NU,
          fontSize: IU,
          font: pU
        } = this, aU = [EU, YU, NU, `${IU}px`, pU].filter(Boolean).join(" "), tU = [
          [NU, `${IU}px`, QU(pU)].filter(Boolean).join(" "), `${IU}px sans-serif`
        ], gU = UU.font, kU = function(UU, XU, zU) {
          for (const cU of XU) {
            UU.font = cU;
            const XU = yU(UU.font),
              AU = QU(cU);
            if (null !== XU && Math.abs(XU - zU) <= .5 && UU.font.toLowerCase().includes(AU.toLowerCase())) return cU
          }
          return null
        }(UU, [aU, ...tU], IU);
        kU !== aU && function(UU, XU, cU) {
          AU || (AU = !0, Promise.resolve().then((() => zU(1325))).then((zU => {
            let {
              Wa: yU
            } = zU;
            yU(new Error("A canvas didn't take canvasTxt's font"), {
              font: UU,
              cY: XU,
              drawnWith: null !== cU && void 0 !== cU ? cU : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(aU, gU, kU);
        const GU = yU(UU.font);
        if (null === kU && null !== GU && GU > 0) {
          const zU = IU / GU;
          UU.save();
          try {
            return UU.scale(zU, zU), {
              height: this.drawLines(UU, XU, cU / zU, FU / zU, oU / zU, DU / zU, GU).height * zU
            }
          } finally {
            UU.restore()
          }
        }
        return this.drawLines(UU, XU, cU, FU, oU, DU, IU)
      },
      drawLines: function(UU, XU, zU, yU, QU, AU, FU) {
        const oU = zU + QU,
          DU = yU + AU;
        let EU, YU = yU + AU / 2 + FU / 2;
        "right" === this.align ? (EU = oU, UU.textAlign = "right") : "left" === this.align ? (EU = zU, UU.textAlign = "left") : (EU = zU + QU / 2, UU.textAlign = "center");
        for (const cU of XU) {
          UU.measureText(cU).width >= QU && (XU = XU.replace(cU, ""))
        }
        XU = (0, cU.L)(XU);
        const NU = [],
          IU = XU.split("\n"),
          pU = this.justify ? UU.measureText("\u200a").width : 0;
        IU.forEach((XU => {
          let zU = UU.measureText(XU).width;
          if (zU <= QU) NU.push(XU);
          else {
            let cU = XU;
            const yU = QU;
            let AU, FU, oU;
            for (zU = UU.measureText(cU).width; zU > yU;) {
              for (AU = 0, FU = 0, oU = ""; FU < yU;) AU++, oU = cU.substr(0, AU), FU = UU.measureText(oU).width;
              AU--, oU = oU.substr(0, AU);
              const XU = AU;
              if (" " !== cU.substr(AU, 1)) {
                for (;
                  " " !== cU.substr(AU, 1) && 0 !== AU;) AU--;
                0 === AU && (AU = XU), oU = cU.substr(0, AU)
              }
              oU = this.justify ? this.justifyLine(UU, oU, pU, "\u200a", QU) : oU, cU = cU.substr(AU), zU = UU.measureText(cU).width, NU.push(oU)
            }
            zU > 0 && NU.push(cU)
          }
        }));
        const aU = this.lineHeight ? this.lineHeight : this.getTextHeight(UU, XU),
          tU = aU * (NU.length - 1),
          gU = tU / 2;
        let kU = yU;
        "top" === this.vAlign ? YU = yU + FU : "bottom" === this.vAlign ? (YU = DU - tU, kU = DU) : (kU = yU + AU / 2, YU -= gU), NU.forEach((XU => {
          XU = XU.trim(), UU.fillText(XU, EU, YU), YU += aU
        })), this.debug && (UU.lineWidth = 3, UU.strokeStyle = "#00909e", UU.strokeRect(zU, yU, QU, AU), UU.lineWidth = 2, UU.strokeStyle = "#f6d743", UU.beginPath(), UU.moveTo(EU, yU), UU.lineTo(EU, DU), UU.stroke(), UU.strokeStyle = "#ff6363", UU.beginPath(), UU.moveTo(zU, kU), UU.lineTo(oU, kU), UU.stroke());
        return {
          height: tU + aU
        }
      },
      getTextHeight: function(UU, XU) {
        const zU = UU.textBaseline;
        UU.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: cU
        } = UU.measureText(XU);
        return UU.textBaseline = zU, cU
      },
      justifyLine: function(UU, XU, zU, cU, yU) {
        const QU = XU.trim(),
          AU = UU.measureText(QU).width,
          FU = QU.split(/\s+/).length - 1,
          oU = Math.floor((yU - AU) / zU);
        if (FU <= 0 || oU <= 0) return QU;
        const DU = Math.floor(oU / FU);
        let EU = oU - FU * DU,
          YU = [];
        for (let NU = 0; NU < DU; NU++) YU.push(cU);
        YU = YU.join("");
        return QU.replace(/\s+/g, (UU => {
          const XU = EU > 0 ? YU + cU : YU;
          return EU--, UU + XU
        }))
      }
    }
  },
  39481: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => aU,
      g: () => pU,
      j: () => NU,
      k: () => EU,
      l: () => YU
    });
    var cU = zU(4608),
      yU = zU(344);
    const QU = 1024,
      AU = 1536,
      FU = 2 * cU.j + 1,
      oU = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      DU = 1.5;

    function EU(UU, XU, zU) {
      if ("string" !== typeof UU) return XU;
      try {
        const zU = JSON.parse(UU);
        return zU && "object" === typeof zU ? zU : XU
      } catch (cU) {
        return void 0 !== zU && console.error(`Couldn't parse ${zU}`, cU), XU
      }
    }

    function YU(UU) {
      return EU(UU, null, "a leaderboard's rows")
    }

    function NU(UU, XU) {
      var zU, cU;
      return null !== XU && void 0 !== XU ? XU : {
        status: null !== (zU = UU.status) && void 0 !== zU ? zU : "loading",
        entries: null !== (cU = UU.entries) && void 0 !== cU ? cU : []
      }
    }

    function IU(UU, XU) {
      return "number" === typeof UU && Number.isFinite(UU) && UU > 0 ? UU : XU
    }

    function pU(UU, XU) {
      const zU = IU(UU.size, 1);
      let cU = IU(UU.width, IU(2.5 * zU, 2.5)),
        yU = IU(UU.height, IU(3.75 * zU, 3.75));
      Number.isFinite(QU * yU / cU) && Number.isFinite(AU * cU / yU) || (cU = 2.5, yU = 3.75);
      const FU = yU / cU,
        oU = Math.max(1, Math.min(QU, XU / FU));
      return {
        width: cU,
        height: yU,
        layoutWidth: Math.max(QU, AU / FU),
        layoutHeight: Math.max(AU, QU * FU),
        pixelWidth: Math.round(oU),
        pixelHeight: Math.round(Math.max(1, Math.min(XU, oU * FU)))
      }
    }

    function aU(UU, XU, zU, AU, EU, YU) {
      UU.setTransform(1, 0, 0, 1, 0, 0), UU.fillStyle = yU.H.defaultNameTagBackground, UU.fillRect(0, 0, XU, zU), UU.scale(XU / AU.layoutWidth, zU / AU.layoutHeight), UU.translate((AU.layoutWidth - QU) / 2, 0),
        function(UU, XU, zU, QU) {
          var AU, EU, YU, NU;
          const {
            top: IU,
            around: pU,
            showPlayerText: aU,
            localPlayerDbId: kU
          } = zU, {
            whiteUiText: GU,
            grayUiText: BU,
            yellowUiText: ZU
          } = yU.H;
          UU.textBaseline = "middle";
          const RU = function(XU, zU, cU, yU, QU, AU) {
              let FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              UU.font = `bold ${yU}px 'Jetbrains Mono', monospace`, UU.fillStyle = QU, UU.textAlign = FU;
              let oU = XU.replace(/[\r\n\t]/g, " ");
              if (UU.measureText(oU).width > AU) {
                for (; oU.length > 0 && UU.measureText(`${oU}\u2026`).width > AU;) oU = oU.slice(0, -1);
                oU += "\u2026"
              }
              UU.fillText(oU, zU, cU)
            },
            PU = XU => {
              UU.fillStyle = GU, UU.globalAlpha = .15, UU.fillRect(24, XU, 976, 2), UU.globalAlpha = 1
            },
            WU = null === kU ? null : (0, yU.qc)(kU),
            dU = UU => null !== WU && UU.playerHash === WU,
            LU = tU(IU.entries, cU.l),
            eU = "ready" === IU.status && LU.length > 0,
            CU = null === pU ? [] : tU(pU.entries, FU),
            wU = LU.some(dU),
            qU = null === pU ? null : function(UU) {
              const XU = UU;
              if (!XU || !Number.isFinite(XU.rank) || !Number.isFinite(XU.tied) || !Number.isFinite(XU.total)) return null;
              return XU
            }(pU.standing),
            OU = CU.find(dU),
            SU = LU.find(dU),
            rU = null === qU || void 0 === OU ? null : {
              value: OU.value,
              rank: qU.rank
            },
            uU = gU(LU, void 0 === SU || SU.value === (null === rU || void 0 === rU ? void 0 : rU.value) ? rU : null),
            fU = gU(CU, rU),
            iU = (UU, XU) => {
              const zU = UU.findIndex(dU);
              return zU >= 0 ? XU[zU] : null
            },
            HU = null !== (AU = null !== (EU = null === qU || void 0 === qU ? void 0 : qU.rank) && void 0 !== EU ? EU : iU(CU, fU)) && void 0 !== AU ? AU : iU(LU, uU);
          UU.font = "bold 34px 'Jetbrains Mono', monospace";
          const MU = [...eU ? uU : [], ...wU ? [] : fU],
            vU = Math.min(280, Math.max(0, ...MU.map((XU => UU.measureText(oU.format(XU)).width)))),
            VU = vU <= 80,
            sU = VU ? 80 : 32 + vU,
            nU = VU ? 148 : sU + 28,
            mU = 660 - nU;
          RU(`TOP ${cU.l}  /  ALL TIME`, 24, 52, 28, BU, 976), RU(aU ? String(null !== (YU = XU.title) && void 0 !== YU ? YU : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, GU, 976), RU("RANK", 32, 174, 28, BU, nU - 40), RU("PLAYER", nU, 174, 28, BU, mU), RU(aU ? String(null !== (NU = XU.scoreLabel) && void 0 !== NU ? NU : "Score").slice(0, 24) : "Score", 992, 174, 28, BU, 304, "right"), PU(202);
          const lU = (QU - 232) / (cU.l + DU + FU),
            xU = 208 + cU.l * lU,
            JU = xU + DU * lU,
            jU = (XU, zU, cU, yU) => {
              const QU = dU(XU);
              UU.fillStyle = QU ? ZU : GU, UU.globalAlpha = QU ? .15 : yU ? .035 : 0, UU.fillRect(24, cU - lU / 2 + 1, 976, lU - 2), UU.globalAlpha = 1;
              const AU = QU ? ZU : GU;
              RU(oU.format(zU), sU, cU, 34, AU, VU ? 80 : vU, VU ? "center" : "right"), RU(aU ? String(XU.name).slice(0, 64) : "Player", nU, cU, 34, AU, mU);
              const FU = oU.format(XU.value);
              RU(UU.measureText(FU).width > 304 ? XU.value.toExponential(6) : FU, 992, cU, 34, AU, 304, "right")
            };
          if (eU)
            for (const [cU, yU] of LU.entries()) jU(yU, uU[cU], 208 + (cU + .5) * lU, cU % 2 === 0);
          else {
            const UU = "error" === IU.status,
              XU = UU ? "Couldn't load leaderboard" : "ready" === IU.status ? "No scores yet" : "Loading leaderboard\u2026",
              zU = UU ? "Trying again shortly" : "ready" === IU.status ? "Be the first on the board!" : "Fetching the top players",
              cU = (208 + xU) / 2;
            RU(XU, 512, cU - 28, 40, UU ? yU.H.redUiText : GU, 960, "center"), RU(zU, 512, cU + 27, 30, BU, 960, "center")
          }
          const KU = xU + DU * lU / 2;
          if (null === HU) PU(KU);
          else {
            const XU = null === qU ? 0 : qU.tied - 1,
              zU = `YOUR RANK #${oU.format(HU)}${null===qU?"":` of ${oU.format(qU.total)}`}`;
            UU.font = "bold 36px 'Jetbrains Mono', monospace";
            const cU = Math.max(20, Math.min(36, Math.floor(34560 / UU.measureText(zU).width)));
            RU(zU, 512, KU - (XU > 0 ? 15 : 0), cU, ZU, 960, "center"), XU > 0 && RU(`Tied with ${oU.format(XU)} other${1===XU?"":"s"}`, 512, KU + 24, 24, BU, 960, "center")
          }
          if (null === pU) return;
          const bU = JU + FU * lU / 2;
          if (wU) RU(`You're in the top ${cU.l}!`, 512, bU, 40, ZU, 960, "center");
          else if (0 === CU.length) RU("You're not on this board yet", 512, bU, 34, BU, 960, "center");
          else
            for (const [cU, yU] of CU.entries()) jU(yU, fU[cU], JU + (cU + .5) * lU, cU % 2 === 0)
        }(UU, EU, YU, AU.layoutHeight)
    }

    function tU(UU, XU) {
      return Array.isArray(UU) ? UU.slice(0, XU).filter((UU => UU && Number.isFinite(UU.rank) && Number.isFinite(UU.value))) : []
    }

    function gU(UU, XU) {
      const zU = [];
      let cU = !1;
      return UU.forEach(((yU, QU) => {
        if (null !== XU && yU.value === XU.value) return void zU.push(XU.rank);
        const AU = QU > 0 && yU.value === UU[QU - 1].value;
        AU || (cU = 0 === QU && 1 !== yU.rank), zU.push(AU && !cU ? zU[QU - 1] : yU.rank)
      })), zU
    }
  },
  39697: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => QU
    });
    const cU = 32;

    function yU(UU) {
      return Array.from(UU).length
    }

    function QU(UU) {
      const XU = [""];
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yU = "";
      const QU = () => {
        XU.push(""), zU = 0, yU = ""
      };
      for (const AU of UU.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(AU)) QU();
        else if (/^\s+$/.test(AU)) yU += AU;
      else if (AU.length > 0) {
        const UU = Array.from(AU);
        zU > 0 && zU + yU.length + UU.length > cU && QU(), XU[XU.length - 1] += yU, zU += yU.length, yU = "";
        for (const yU of UU) zU >= cU && QU(), XU[XU.length - 1] += yU, zU++
      }
      return XU[XU.length - 1] += yU, XU
    }
  },
  42292: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    const cU = 4e5,
      yU = 2;

    function QU(UU, XU, zU) {
      let [QU, AU] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [UU, XU], FU = Math.min(Number.isFinite(zU) && zU > 0 ? zU : 1, yU);
      const oU = Math.max(0, QU, UU) * Math.max(0, AU, XU) * FU * FU;
      return oU > cU && (FU *= Math.sqrt(cU / oU)), [Math.max(1, Math.floor(Math.max(0, UU) * FU)), Math.max(1, Math.floor(Math.max(0, XU) * FU))]
    }
  },
  53727: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      WasmPreviewHost: () => SX,
      pageBuiltInAnimationPack: () => NU,
      pagePreviews: () => QX,
      previewModule: () => bU
    });
    var cU = zU(3176),
      yU = zU(654);
    const QU = "[bloxd-wasm-client]";

    function AU(UU) {
      const XU = {
        wasm: "unknown",
        client: String(yU.d)
      };
      try {
        var zU;
        XU.wasm = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.sY()) && void 0 !== zU ? zU : XU.wasm
      } catch {}
      return XU
    }
    async function FU(UU) {
      if (UU.length < 2 || 31 !== UU[0] || 139 !== UU[1]) return UU;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: XU
        } = await Promise.resolve().then((() => zU(3116)));
        return XU(UU)
      }
      const XU = new Blob([UU]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(XU).arrayBuffer())
    }

    function oU(UU, XU, cU, yU) {
      Promise.resolve().then((() => zU(41840))).then((zU => {
        let {
          reportDataLoadFailure: QU
        } = zU;
        QU(UU, XU, cU, yU)
      }), (XU => {
        console.warn(`${QU} ${UU} didn't load, and the report couldn't be sent`, cU.error, XU)
      }))
    }
    const DU = [3e4, 12e4, 3e5];
    class EU {
      constructor(UU) {
        this.deps = UU, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((UU => {
          this.resolveSet = UU
        }))
      }
      provide(UU) {
        return this.loading ??= this.load(UU), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(UU) {
        const XU = AU(UU),
          zU = await async function(UU, XU) {
            let zU;
            try {
              zU = await UU()
            } catch (cU) {
              return {
                stage: "fetch",
                error: cU
              }
            }
            try {
              return XU(zU) ? null : {
                stage: "decode",
                error: null
              }
            } catch (cU) {
              return {
                stage: "decode",
                error: cU
              }
            }
          }((() => this.deps.fetch()), (XU => {
            const zU = UU.EAU(XU);
            return zU && this.resolveSet(XU), zU
          }));
        if (null !== zU) {
          if ("fetch" === zU.stage) {
            this.loading = null;
            const XU = DU[this.retries++];
            void 0 !== XU && this.deps.later((() => {
              this.provide(UU)
            }), XU)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(zU, XU))
        }
      }
    }
    let YU = null;

    function NU() {
      return YU ??= new EU({
        fetch: async () => FU(await (0, cU.Q)(IU(), {
          priority: "low"
        })),
        onFailed: (UU, XU) => {
          oU("builtInAnimations", IU(), UU, XU)
        },
        later: (UU, XU) => {
          setTimeout(UU, XU)
        }
      }), YU
    }

    function IU() {
      return zU(53736)
    }
    var pU = zU(3169),
      aU = zU(1203),
      tU = zU(318),
      gU = zU(316),
      kU = zU(687),
      GU = zU(5318),
      BU = zU(41795),
      ZU = zU(41823),
      RU = zU(42038),
      PU = (zU(41865), zU(41877)),
      WU = zU(41886),
      dU = zU(41889),
      LU = zU(41808),
      eU = zU(42068),
      CU = zU(42070),
      wU = zU(41786),
      qU = zU(42084),
      OU = zU(41938),
      SU = zU(41927),
      rU = zU(41979),
      uU = zU(42053),
      fU = zU(53654),
      iU = zU(36981),
      HU = zU(4091),
      MU = zU(42292);
    const vU = "[bloxd-previews]",
      VU = 0,
      sU = 1,
      nU = 2,
      mU = 1,
      lU = 2,
      xU = 3,
      JU = 0,
      jU = 1,
      KU = 2;

    function bU(UU) {
      const XU = UU,
        zU = (0, BU.Y)(UU),
        cU = (0, BU.p)(UU);
      return null !== zU && null !== cU && "function" === typeof XU.FAU && "function" === typeof XU.oAU && "function" === typeof XU.DAU ? XU : null
    }

    function TU() {
      return zU(53738)
    }
    async function hU(UU, XU, cU) {
      var yU;
      let QU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === UU && (0, wU.u)();
      const FU = await (0, wU.N)();
      if (null === FU || (0, BU.r)(FU) || (0, wU.c)()) return;
      const oU = "webgpu" === FU.backend;
      if (!oU && "lost" !== UU) return;
      const DU = oU && (0, gU.o)(FU.adapter, null !== cU && void 0 !== cU ? cU : null, "lost" === UU, QU),
        EU = null !== (yU = "lost" === UU ? (0, ZU.j)((0, pU.T)() ? (0, BU.Y)((0, pU.E)()) : null) : void 0) && void 0 !== yU ? yU : XU,
        YU = oU ? (0, BU.lb)(UU, void 0, (0, ZU.c)(EU)) : null;
      if (null === YU) {
        oU || (0, kU.y)(), (0, wU.n)();
        try {
          await async function(UU, XU, cU, yU, QU) {
            let {
              restoreLost: FU,
              adapterRemembered: oU
            } = QU;
            const DU = (0, pU.T)(),
              {
                flushCrashReports: EU,
                reportRenderReload: YU
              } = await Promise.resolve().then((() => zU(41840)));
            YU(UU.backend, yU, AU(DU ? (0, pU.E)() : null), {
              from: "home",
              cause: XU,
              restoreLost: FU,
              adapterRemembered: oU,
              ...UX(UU, XU, cU)
            }), await EU(OU.b)
          }(FU, UU, EU, null !== cU && void 0 !== cU ? cU : "start_failed" === UU ? 0 : 1, {
            restoreLost: QU,
            adapterRemembered: DU
          })
        } catch (IU) {
          console.warn(`${vU} ${FU.backend} failed at home (${UU}), and its report couldn't be sent`, IU)
        }(0, OU.l)()
      } else {
        var NU;
        const XU = UX(FU, UU, EU),
          cU = `WebGPU failed at home (${UU}${void 0===XU.error?"":`: ${XU.error instanceof Error?XU.error.message:(0,iU.l)(XU.error)}`}) and ${YU}`;
        console.warn(`${vU} ${cU}: the previews stop`, null !== (NU = XU.error) && void 0 !== NU ? NU : ""), (0, wU.p)(cU);
        try {
          const {
            countRenderLost: cU
          } = await Promise.resolve().then((() => zU(41840)));
          cU(UU, XU.error, XU.context)
        } catch (aU) {
          console.warn(`${vU} WebGPU failed at home (${UU}), and its count couldn't be sent`, aU)
        }
      }
    }

    function UX(UU, XU, zU) {
      let {
        adapter: cU
      } = UU;
      return {
        error: zU,
        context: {
          adapter: cU,
          boundAtMs: "start_failed" === XU ? null : (0, wU.I)(),
          indirectHangs: (0, wU.v)(),
          restoresSkipped: (0, wU.M)()
        }
      }
    }
    async function XX() {
      if (!(0, pU.T)()) {
        const UU = await (0, wU.N)();
        if (null === UU || (0, BU.r)(UU)) return null;
        if (await (0, qU.e)(await UU.load()), !(0, pU.T)()) return null
      }
      return bU((0, pU.E)())
    }
    class zX {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.page = UU, this.host = XU, this.id = zU, this.canvas = cU, this.size = yU, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const AU = {
            ...QU.images,
            glbUrl: UU => {
              var XU;
              return null !== (XU = this.models.drawnUrl(UU)) && void 0 !== XU ? XU : QU.images.glbUrl(UU)
            }
          },
          FU = XU => UU.modelFile(XU);
        this.images = new RU.g(AU, (UU => {
          console.warn(`${vU} image ${UU.key.kind}:${UU.key.index}:${UU.key.word} failed`, UU.error)
        }), {
          fetchFile: FU,
          fetchImage: XU => UU.imageFile(XU)
        }), UU.startModels(), this.models = new PU.i(QU.files, ((XU, zU) => UU.buildModel(XU, zU)), (UU => {
          console.warn(`${vU} model file ${UU.file} (${UU.url}) failed`, UU.error)
        }), {
          fetchFile: FU,
          onWritten: (UU, XU) => {
            this.images.glbWritten(UU, XU)
          },
          onTaken: (UU, XU) => {
            this.images.glbTaken(UU, XU)
          }
        }), this.write = (UU, XU, zU) => {
          if (this.closed) return !0;
          if (UU === PU.e) {
            const UU = new DataView(zU.buffer, zU.byteOffset, dU.c),
              cU = UU.getUint32(0, !0),
              yU = UU.getUint32(dU.f, !0),
              QU = this.page.hostCall(KU, (() => this.host.aFU(this.id, cU, XU, zU.subarray(dU.c))));
            return this.outcomes.push([yU, QU]), !0
          }
          return UU === RU.d && (this.page.hostCall(void 0, (() => {
            this.host.gFU(this.id, zU)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(UU, XU, zU) {
        if (this.closed) return;
        const [cU, yU] = (0, MU.e)(UU, XU, this.page.dpr(), zU);
        cU === this.size[0] && yU === this.size[1] || (this.size = [cU, yU], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, cU, yU)
        })))
      }
      setMob(UU, XU, zU, cU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.PFU(this.id, UU, XU, zU, cU))))
      }
      setPet(UU, XU, zU, cU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.dFU(this.id, UU, XU, zU, cU))))
      }
      setPlayer(UU, XU, zU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.BFU(this.id, UU, XU, zU))))
      }
      setCompanions(UU) {
        var XU;
        let {
          pet: zU,
          aura: cU
        } = UU;
        if (this.closed) return;
        const yU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.model) && void 0 !== XU ? XU : -1,
          QU = new Float64Array(zU ? [zU.scale, ...zU.offset, zU.yawOffset, zU.bobAmplitude, zU.bobHz] : []),
          AU = new Float64Array(cU ? [...cU.offset, ...cU.half] : []);
        this.page.hostCall(void 0, (() => {
          var UU, XU;
          this.host.GFU(this.id, yU, QU, null !== (UU = null === zU || void 0 === zU ? void 0 : zU.flyClip) && void 0 !== UU ? UU : "", null !== (XU = null === cU || void 0 === cU ? void 0 : cU.opts) && void 0 !== XU ? XU : "", AU)
        }))
      }
      setFigure(UU, XU, zU, cU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZFU(this.id, UU, XU, zU, cU))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const UU = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === UU || UU.length < 3 ? null : {
          alpha: UU[0],
          beta: UU[1],
          radius: UU[2]
        }
      }
      setOrbit(UU) {
        let {
          alpha: XU,
          beta: zU,
          radius: cU
        } = UU;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.WFU(this.id, XU, zU, cU)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((UU => {
          this.settled.push(UU)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, eU.e)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [UU, XU] of this.outcomes) {
          const zU = XU === JU ? [] : [XU === jU ? UU : (UU | PU.h) >>> 0];
          this.models.taken(UU, zU)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(UU) {
        let XU = !1;
        if (UU) {
          const UU = this.host.CFU(this.id);
          for (const XU of UU) this.models.request(XU);
          const zU = this.host.eFU(this.id);
          zU.length > 0 && this.images.onEvent(zU), XU = UU.length > 0 || zU.length > 0
        }
        const zU = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          cU = XU || zU > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = cU ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(UU) {
        this.page.hostCall(void 0, (() => {
          const XU = this.host.close(this.id);
          XU.length > 0 && this.images.onEvent(XU), this.page.isTrapped || UU.DAU(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const UU = this.settled;
        this.settled = [];
        for (const XU of UU) XU()
      }
    }
    class cX {
      constructor(UU) {
        this.deps = UU, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: UU => {
            this.modelsFailed(UU)
          },
          onWorkerLost: UU => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${vU} a model worker was lost: ${UU}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Fp = {
          setShaderPack: (UU, XU, zU, cU, yU) => (this.shaderPackArgs = [UU, XU, zU, cU, yU], this.handOverShaderPack(), !0)
        }, this.frame = UU => {
          this.frameId = null;
          const XU = this.host;
          if (null !== XU && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(XU, UU)
          } catch (zU) {
            if (!this.stopIfTrapped(zU) && (this.stop(), (0, BU.t)(zU))) return void this.deps.onRenderFailed("frames_refused", zU);
            console.warn(`${vU} the previews stopped: their frame threw`, zU)
          }
        }, UU.pack.onChange((() => {
          this.packChanged()
        })), UU.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const UU of this.previews.values()) UU.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var UU, XU;
        return null !== (UU = null === (XU = this.host) || void 0 === XU ? void 0 : XU.attached()) && void 0 !== UU && UU
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((UU, XU) => UU + XU), 0) / this.costs.length
      }
      async bindSession(UU, XU, zU) {
        const cU = this.binding,
          yU = this.sessionEnds;
        try {
          const QU = this.hostOf(UU);
          if (!QU.tFU()) {
            const XU = (0, rU.d)().sampleCount,
              AU = await zU(XU);
            if (this.sessionEnds !== yU) return this.keepRendererOfEndedSession(UU, QU, AU, XU, cU), XU;
            if (!QU.hAU(AU)) throw new Error("the page has a renderer already");
            (0, wU.t)(performance.now()), this.samples = XU, (0, uU.i)((0, BU.p)(UU))
          }
          if (!QU.attach(XU)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === cU && this.endBinding()
        }
      }
      keepRendererOfEndedSession(UU, XU, zU, cU, yU) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== yU) try {
          zU.free()
        } catch (QU) {
          console.warn(`${vU} an ended session's renderer didn't free`, QU)
        } else XU.hAU(zU) && ((0, wU.t)(performance.now()), this.samples = cU, (0, uU.i)(this.registryOf(UU)))
      }
      async beginSession() {
        var UU;
        let XU = () => {};
        const zU = new Promise((UU => {
          XU = UU
        }));
        this.binding = {
          done: zU,
          release: XU
        }, await (null === (UU = this.opening) || void 0 === UU ? void 0 : UU.catch((() => null)));
        const cU = this.pageCanvas;
        return this.pageCanvas = null, cU
      }
      endSession(UU) {
        var XU, zU;
        if (this.sessionEnds++, this.lastEndReturned = UU, this.endBinding(), UU) {
          try {
            var cU;
            null === (cU = this.host) || void 0 === cU || cU.detach()
          } catch (yU) {
            return void console.warn(`${vU} the session's core kept the page's renderer`, yU)
          }!0 === (null === (XU = this.host) || void 0 === XU ? void 0 : XU.attached()) && console.warn(`${vU} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (zU = this.host) || void 0 === zU ? void 0 : zU.tFU()) && (0, uU.i)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var UU;
        null === (UU = this.binding) || void 0 === UU || UU.release(), this.binding = null
      }
      async openPreview(UU, XU, zU, cU) {
        const yU = await this.renderingHost(),
          QU = this.module;
        if (null === yU || null === QU) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(yU), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(QU)
        }));
        const AU = this.nextId++,
          FU = this.deps.createCanvas(),
          [oU, DU] = (0, MU.e)(XU, zU, this.deps.dpr(), cU);
        FU.width = oU, FU.height = DU;
        if (!this.guarded((() => (QU.oAU(AU, FU), yU.open(AU, oU, DU, UU))))) throw this.hostCall(void 0, (() => {
          QU.DAU(AU)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const EU = new zX(this, yU, AU, FU, [oU, DU], this.deps);
        return this.previews.set(AU, EU), this.startFrames(), EU
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, wU.c)() || null !== (0, wU.F)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((UU => {
          null === UU || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(UU) {
        return this.prefetchedOr(UU, this.deps.fetchModel)
      }
      imageFile(UU) {
        return this.prefetchedOr(UU, cU.Q)
      }
      prefetchedOr(UU, XU) {
        const zU = this.prefetchedFiles.get(UU);
        return void 0 === zU ? XU(UU) : zU.catch((() => XU(UU)))
      }
      async prefetchPlayerFiles() {
        const UU = this.deps.playerFile().then((UU => this.deps.files.url(UU))),
          XU = await Promise.all([UU, this.deps.images.lifeformAtlasUrl(eU.b)]).catch((() => null));
        if (null === XU) return;
        const [zU, cU] = XU, yU = (UU, XU) => {
          if (null === UU) return;
          const zU = XU(UU);
          this.prefetchedFiles.set(UU, zU), zU.catch((() => {
            this.prefetchedFiles.delete(UU)
          }))
        };
        yU(zU, (UU => this.modelFile(UU))), yU(cU, (UU => this.imageFile(UU)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((UU => (null === UU && (this.moduleLoad = null), UU)), (UU => {
          throw this.moduleLoad = null, UU
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((UU => {
          throw this.animationTable = null, UU
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((UU => (this.modelsFailed(UU), () => new Promise((() => {})))))
      }
      buildModel(UU, XU) {
        return this.startModels(), this.models.then((zU => zU(UU, XU))).then((UU => this.unavailable ? new Promise((() => {})) : UU))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(UU) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${vU} the model workers didn't start: models won't draw in the previews`, UU))
      }
      called(UU) {
        return 0 !== UU && this.logError(UU, 0), UU
      }
      closePreview(UU) {
        this.previews.delete(UU.id), null !== this.module && UU.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(UU) {
        if (null !== this.module && this.module !== UU) throw new Error("a second renderer module on one page");
        return this.module = UU, null === this.host && (this.host = this.guarded((() => new UU.FAU)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: UU
        } = this;
        null !== UU && this.outsideCall("the game's start or end", (() => {
          UU.RFU(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: UU,
          shaderPackArgs: XU
        } = this;
        null !== UU && null !== XU && this.outsideCall("the shader pack's hand-over", (() => {
          UU.QyU(...XU) || console.warn(`${vU} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(UU, XU) {
        try {
          this.hostCall(void 0, XU)
        } catch (zU) {
          this.stop(), console.warn(`${vU} the previews stopped: ${UU} threw`, zU)
        }
      }
      async loadAnimations(UU) {
        const XU = AU(null),
          zU = this.module;
        try {
          XU.wasm = null === zU ? XU.wasm : this.hostCall(XU.wasm, (() => zU.sY()))
        } catch {}
        let cU, yU;
        try {
          cU = await this.fetchAnimationTable()
        } catch (QU) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: QU
          }, XU)
        }
        if (!this.settleIfTrapped()) {
          try {
            yU = UU.kFU(cU)
          } catch (QU) {
            if (this.stopIfTrapped(QU)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: QU
            }, XU)
          }
          yU || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, XU)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const UU = this.host;
        return null !== UU && this.guarded((() => UU.tFU())) ? UU : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var UU;
        const XU = null !== (UU = this.module) && void 0 !== UU ? UU : await this.loadModule();
        if (null === XU) return null;
        const zU = this.hostOf(XU),
          cU = () => this.guarded((() => zU.tFU()));
        if (cU()) return zU;
        if (null !== (0, wU.F)() || (0, wU.c)()) return null;
        const yU = this.deps.createCanvas();
        yU.width = 1, yU.height = 1;
        const QU = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const AU = (0, rU.d)().sampleCount;
        let FU;
        try {
          FU = await (0, BU.B)(XU, "previewRenderer", yU, AU, fU.e, QU)
        } catch (oU) {
          throw oU instanceof LU.c ? this.stopForTrap(oU) : (0, BU.x)(oU) && await this.deps.onRenderFailed("start_failed", oU), oU
        }
        return this.guarded((() => zU.hAU(FU))) ? ((0, wU.t)(performance.now()), this.samples = AU, this.pageCanvas = yU, (0, uU.i)(this.registryOf(XU)), zU) : cU() ? zU : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(UU, XU) {
        for (const AU of this.previews.values()) AU.feed();
        if (this.stopped) return;
        const zU = this.deps.now(),
          cU = UU.frame(XU);
        this.costs.push(this.deps.now() - zU), this.costs.length > 120 && this.costs.shift();
        const yU = 0 !== (256 & cU),
          QU = 255 & cU;
        for (const AU of this.previews.values()) {
          if (this.stopped) return;
          AU.collect(yU)
        }
        if (!this.stopped) {
          if (0 !== (512 & cU) && this.deps.onDrew(), yU) {
            const XU = UU.LFU();
            for (let UU = 0; UU + 1 < XU.length; UU += 2) XU[UU] === GU.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(XU[UU], XU[UU + 1])
          }
          if (QU !== mU) {
            if (QU === lU) return this.stop(), void this.deps.onFatal(UU.NFU(), UU.IFU());
            if (QU === xU) return this.stop(), void console.warn(`${vU} the previews stopped: the page's renderer went with its session`);
            (0, tU.b)(XU), this.startFrames()
          } else {
            const XU = UU.pFU();
            this.stop();
            const zU = XU[2] === GU.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(zU, void 0, XU[1], XU[2] === GU.Yc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, LU.i)(this.module) || "failed" === (0, pU.A)())
      }
      hostCall(UU, XU) {
        if (this.settleIfTrapped()) return UU;
        try {
          return XU()
        } catch (zU) {
          if (this.stopIfTrapped(zU)) return UU;
          throw zU
        }
      }
      guarded(UU) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return UU()
        } catch (XU) {
          throw this.stopIfTrapped(XU), XU
        }
      }
      registryOf(UU) {
        return {
          lcU: (XU, zU) => {
            this.hostCall(void 0, (() => {
              UU.lcU(XU, zU)
            }))
          },
          xcU: XU => {
            this.hostCall(void 0, (() => {
              UU.xcU(XU)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, uU.i)(null)), !0)
      }
      stopIfTrapped(UU) {
        return !(null === this.module || !(0, LU.k)(this.module, UU)) && (this.stopForTrap(UU), !0)
      }
      stopForTrap(UU) {
        this.stop(), (0, uU.i)(null), (0, HU.e)("previews", UU)
      }
      stop() {
        this.stopped = !0;
        for (const UU of this.previews.values()) UU.abandon()
      }
      logError(UU, XU) {
        const zU = `${UU}:${XU}`;
        this.loggedErrors.has(zU) || (this.loggedErrors.add(zU), console.warn(`${vU} error ${UU} (detail ${XU})`))
      }
    }
    let yX = null;

    function QX() {
      return yX ??= new cX(function() {
        const UU = (0, WU.p)(aU.clientSideServerUrls.staticUrl, {
          packUrl: UU => {
            var XU, zU;
            return null !== (XU = null === (zU = eU.d.current) || void 0 === zU ? void 0 : zU.modelUrl(UU)) && void 0 !== XU ? XU : null
          }
        });
        return {
          loadModule: XX,
          startModels: async UU => {
            const {
              pageModelPool: XU
            } = await zU.e(50).then((() => zU(53818))), {
              pool: cU
            } = XU(UU);
            return (UU, XU) => cU.build(UU, XU)
          },
          fetchAnimations: async () => FU(await (0, cU.Q)(TU())),
          playerFile: async () => (await (0, WU.n)()).PLAYER_FILE,
          onAnimationsFailed: (UU, XU) => {
            oU("previewAnimations", TU(), UU, XU)
          },
          provideBuiltInAnimationPack: UU => {
            NU().provide(UU)
          },
          openExtras: wU.x,
          files: UU,
          images: (0, eU.f)((0, RU.p)(UU.url), (() => eU.d.current)),
          pack: eU.d,
          game: CU.b,
          fetchModel: UU => (0, WU.f)(UU),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: UU => requestAnimationFrame(UU),
          cancelFrame: UU => {
            cancelAnimationFrame(UU)
          },
          onRenderFailed: hU,
          onFatal: (UU, XU) => {
            console.error(`${vU} the previews stopped: renderer error ${UU} (detail ${XU})`)
          },
          onDeviceLost: () => {
            (0, wU.B)() === SU.e.webgpu && ((0, ZU.f)((0, pU.T)() ? (0, BU.Y)((0, pU.E)()) : null), gU.J.lost())
          },
          onDrew: () => {
            gU.J.drew()
          }
        }
      }()), yX
    }
    var AX = zU(633),
      FX = zU(39453),
      oX = zU(3660);
    const DX = {
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
    var EX = zU(39994),
      YX = zU(39954),
      NX = zU(45253);
    class IX {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(UU, XU) {
        const zU = void 0 === UU ? null : (0, YX.k)(UU),
          cU = void 0 === XU ? null : (0, YX.g)(XU);
        return zU === this.pet && cU === this.aura || (this.pet = zU, this.aura = cU, this.companions = {
          pet: zU && pX(zU),
          aura: cU && aX(cU)
        }), this.companions
      }
    }

    function pX(UU) {
      var XU;
      const zU = NX.COSMETIC_MODEL_KEYS.get(UU.model);
      if (void 0 === zU) return console.warn(`[bloxd-previews] pet model ${UU.model} isn't a Player attachment model`), null;
      const {
        scale: cU,
        followOffset: yU,
        yawOffset: QU,
        bobAmplitude: AU,
        bobHz: FU,
        clips: oU
      } = UU;
      return {
        model: zU,
        scale: cU,
        offset: yU,
        yawOffset: QU,
        bobAmplitude: AU,
        bobHz: FU,
        flyClip: null !== (XU = null === oU || void 0 === oU ? void 0 : oU.fly) && void 0 !== XU ? XU : null
      }
    }

    function aX(UU) {
      const {
        opts: XU,
        half: zU
      } = (0, EX.c)(UU);
      return {
        opts: JSON.stringify(XU),
        offset: UU.offset,
        half: zU
      }
    }
    const tX = "[bloxd-previews]",
      gX = new Uint32Array(5);

    function kX(UU) {
      return AX.h.indexOf(UU)
    }
    const GX = new WeakSet;

    function BX(UU) {
      const XU = (0, FX.g)(UU),
        zU = null === XU ? -1 : ZX(XU);
      return -1 !== zU ? zU : (GX.has(UU) || (GX.add(UU), console.warn(`${tX} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function ZX(UU) {
      var XU;
      return null !== (XU = DX[UU]) && void 0 !== XU ? XU : -1
    }

    function RX(UU, XU) {
      const {
        canvas: zU
      } = XU;
      zU.style.width = "100%", zU.style.height = "100%", zU.style.display = "block", UU.appendChild(zU)
    }

    function PX(UU) {
      const XU = UU.getBoundingClientRect();
      return [XU.width, XU.height]
    }
    class WX {
      constructor(UU, XU) {
        this.preview = UU, this.showView = XU
      }
      show(UU) {
        this.showView(this.preview, UU)
      }
      resize(UU, XU) {
        this.preview.resize(UU, XU)
      }
      close() {
        this.preview.close()
      }
    }
    class dX {
      constructor(UU) {
        this.preview = UU, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new IX, this.companions = null, this.detachControls = void 0, this.detachControls = function(UU) {
          const {
            canvas: XU
          } = UU;
          let zU = null;
          const cU = UU => {
              var cU;
              zU = {
                pointer: UU.pointerId,
                x: UU.clientX,
                y: UU.clientY
              }, null === (cU = XU.setPointerCapture) || void 0 === cU || cU.call(XU, UU.pointerId)
            },
            yU = XU => {
              var cU;
              const yU = UU.orbit;
              if ((null === (cU = zU) || void 0 === cU ? void 0 : cU.pointer) !== XU.pointerId || null === yU) return;
              const QU = XU.clientX - zU.x,
                AU = XU.clientY - zU.y;
              zU = {
                ...zU,
                x: XU.clientX,
                y: XU.clientY
              }, UU.setOrbit({
                alpha: yU.alpha - .01 * QU,
                beta: Math.min(Math.PI - .01, Math.max(.01, yU.beta - .01 * AU)),
                radius: yU.radius
              })
            },
            QU = UU => {
              var XU;
              (null === (XU = zU) || void 0 === XU ? void 0 : XU.pointer) === UU.pointerId && (zU = null)
            },
            AU = XU => {
              const zU = UU.orbit;
              if (null === zU) return;
              XU.preventDefault();
              const cU = XU.deltaY * (XU.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : XU.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                yU = Math.min(100, Math.max(5, zU.radius + .08 * cU));
              UU.setOrbit({
                ...zU,
                radius: yU
              })
            };
          return XU.style.touchAction = "none", XU.addEventListener("pointerdown", cU), XU.addEventListener("pointermove", yU), XU.addEventListener("pointerup", QU), XU.addEventListener("pointercancel", QU), XU.addEventListener("wheel", AU, {
            passive: !1
          }), () => {
            XU.removeEventListener("pointerdown", cU), XU.removeEventListener("pointermove", yU), XU.removeEventListener("pointerup", QU), XU.removeEventListener("pointercancel", QU), XU.removeEventListener("wheel", AU)
          }
        }(UU), this.dev = {
          canvas: () => UU.canvas,
          isolateHead: () => {
            console.warn(`${tX} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${tX} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = UU.untilSettled().then((() => {
          if (UU.isStopped) throw new Error(`${tX} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(UU, XU) {
        this.cosmetics[UU] = XU, this.apply()
      }
      playEmote(UU) {
        null === UU || UU !== this.emote ? (this.emote = UU, this.apply()) : this.preview.replay()
      }
      untilDrawn(UU) {
        return this.preview.untilSettled()
      }
      setOrbit(UU) {
        let {
          yaw: XU,
          pitch: zU,
          radius: cU
        } = UU;
        const yU = this.preview.orbit;
        null !== yU && this.preview.setOrbit({
          alpha: XU,
          beta: zU,
          radius: null !== cU && void 0 !== cU ? cU : yU.radius
        })
      }
      resetCamera() {}
      resize(UU, XU) {
        this.preview.resize(UU, XU)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var UU;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), gX, null === (UU = this.emote) ? -1 : ZX(UU));
        const XU = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        XU !== this.companions && (this.companions = XU, this.preview.setCompanions(XU))
      }
    }

    function LX(UU, XU) {
      let {
        mobType: zU,
        variation: cU,
        animation: yU
      } = XU;
      UU.setMob(kX(zU), null !== cU && void 0 !== cU ? cU : "", 1, BX(yU))
    }

    function eX(UU, XU) {
      let {
        mobType: zU,
        variation: cU,
        metaInfo: yU,
        tamed: QU
      } = XU;
      UU.setPet(kX(zU), cU, yU, QU)
    }
    const CX = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class wX {
      constructor(UU, XU, zU, cU) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, UU(zU.width, cU[1], cU).then((UU => {
          if (this.closed) return void UU.close();
          const {
            style: zU
          } = UU.canvas;
          zU.position = "absolute", zU.top = "0", zU.visibility = "hidden", RX(XU, UU), this.preview = UU, this.apply()
        })).catch((UU => {
          console.error(`${tX} couldn't open a lineup figure`, UU)
        }))
      }
      update(UU, XU, zU, cU, yU) {
        this.figure = UU, this.shown = XU, this.order = zU, this.span = cU, this.lineup = yU, this.apply()
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.preview) || void 0 === UU || UU.close(), this.preview = null
      }
      apply() {
        const {
          preview: UU,
          figure: XU,
          lineup: zU
        } = this;
        if (null === UU || null === XU) return;
        if (this.given !== XU) {
          var cU;
          this.given = XU, this.loaded = !1;
          const zU = null === XU.jB ? 0 : null !== (cU = (0, oX.c)(XU.jB)) && void 0 !== cU ? cU : 0;
          UU.setFigure(function(UU) {
            return JSON.stringify(Object.fromEntries(UU.cosmetics))
          }(XU), zU, BX(XU.animation), XU.size), UU.untilSettled().then((() => {
            this.given === XU && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: yU,
          width: QU
        } = this.span;
        UU.resize(QU, zU[1], zU);
        const {
          style: AU
        } = UU.canvas;
        AU.left = `${yU}px`, AU.width = `${QU}px`, AU.zIndex = this.order, AU.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class qX {
      constructor(UU, XU) {
        this.open = XU, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = PX(UU), this.layer = document.createElement("div");
        const {
          style: zU
        } = this.layer;
        zU.position = "relative", zU.isolation = "isolate", zU.overflow = "hidden", zU.width = "100%", zU.height = "100%", zU.pointerEvents = "none", UU.appendChild(this.layer)
      }
      show(UU) {
        this.view = UU, this.place()
      }
      resize(UU, XU) {
        this.size = [UU, XU], this.place()
      }
      close() {
        for (const UU of this.figures) UU.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: UU,
          shown: XU
        } = this.view;
        for (const cU of this.figures.splice(UU.length)) cU.close();
        const {
          size: zU
        } = this;
        UU.forEach(((cU, yU) => {
          var QU;
          const AU = function(UU, XU, zU, cU) {
            let [yU, QU] = cU;
            const AU = (UU + .5) * yU / XU,
              FU = Math.min(Math.max(yU / XU, 2 * zU * QU), 2 * Math.max(AU, yU - AU));
            return {
              left: AU - FU / 2,
              width: FU
            }
          }(yU, UU.length, function(UU) {
            let {
              animation: XU,
              size: zU
            } = UU;
            const {
              aimed: cU,
              ready: yU
            } = CX;
            return (BX(XU) === DX.gunAimed ? cU : yU) * zU
          }(cU), zU);
          this.figures[yU] ??= new wX(this.open, this.layer, AU, zU), this.figures[yU].update(cU, null !== (QU = XU[yU]) && void 0 !== QU && QU, function(UU, XU) {
            return String(Math.round(1e3 * UU) + XU)
          }(cU.size, yU), AU, zU)
        }))
      }
    }
    const OX = {
      player: sU,
      store: nU
    };
    class SX {
      constructor(UU) {
        this.page = UU
      }
      async openMob(UU) {
        return new WX(await this.open(UU, VU), LX)
      }
      async openPet(UU) {
        return new WX(await this.open(UU, VU), eX)
      }
      openMobLineup(UU) {
        return new qX(UU, ((UU, XU, zU) => this.page.openPreview(VU, UU, XU, zU)))
      }
      async openCharacter(UU, XU) {
        return new dX(await this.open(UU, OX[XU]))
      }
      async open(UU, XU) {
        const [zU, cU] = PX(UU), yU = await this.page.openPreview(XU, zU, cU);
        return RX(UU, yU), yU
      }
    }
  },
  37471: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => pU,
      D: () => aU,
      F: () => gU,
      c: () => cU,
      e: () => YU,
      f: () => yU,
      h: () => NU,
      j: () => tU,
      n: () => EU,
      p: () => kU,
      s: () => oU,
      v: () => DU,
      z: () => IU
    });
    const cU = [{
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

    function yU(UU, XU) {
      const {
        numLines: zU,
        charsPerLine: yU
      } = cU[XU];
      return GU(UU, zU, yU, !1)
    }
    const QU = 7 / 8,
      AU = .25,
      FU = 8;

    function oU(UU, XU) {
      return {
        width: Math.min(UU, FU) - 2 * AU,
        height: Math.min(XU, FU) - 2 * AU
      }
    }

    function DU(UU, XU, zU) {
      const yU = oU(UU, XU),
        {
          numLines: AU,
          charsPerLine: FU
        } = cU[zU];
      return {
        numLines: Math.max(1, Math.floor(AU / QU * yU.height)),
        charsPerLine: Math.max(1, Math.floor(FU * yU.width))
      }
    }

    function EU(UU, XU, zU, cU) {
      const {
        numLines: yU,
        charsPerLine: QU
      } = DU(zU, cU, XU);
      return GU(UU, yU, QU, !1)
    }
    const YU = 32e3;

    function NU(UU) {
      return UU.slice(0, YU)
    }
    const IU = 512e3,
      pU = 64,
      aU = IU;

    function tU(UU, XU) {
      const zU = Math.max(0, aU - XU),
        cU = Math.min(IU, zU);
      return UU.slice(0, cU)
    }
    const gU = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      YD: {
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

    function kU(UU, XU) {
      const {
        numLines: zU,
        charsPerLine: cU
      } = gU[XU];
      return GU(UU, zU, cU, !1)
    }

    function GU(UU, XU, zU, cU, yU) {
      (yU || cU) && (UU = UU.slice(0, null !== yU && void 0 !== yU ? yU : XU * zU));
      const QU = UU.split("\n");
      if (QU.length > XU && QU.splice(XU, QU.length - XU), !cU)
        for (let AU = 0; AU < QU.length; AU++) {
          const UU = QU[AU];
          UU.length > zU && (QU[AU] = UU.substring(0, zU), QU.length < XU && QU.splice(AU + 1, 0, UU.substring(zU)))
        }
      return QU.join("\n")
    }
  },
  53736: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  53738: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);