export const id = 56;
export const ids = [56];
export const modules = {
  38003: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    const FY = new WeakMap;

    function AY(YY, rY) {
      return FY.set(YY, rY), YY
    }

    function IY(YY) {
      var rY;
      return null !== (rY = FY.get(YY)) && void 0 !== rY ? rY : null
    }
  },
  38025: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(1231);

    function AY(YY) {
      const rY = /(\d*\.?\d+)px/.exec(YY);
      return rY ? Number(rY[1]) : null
    }

    function IY(YY) {
      return YY.split(/[\s,]+/).pop()
    }
    let RY = !1;
    const OY = {
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
      drawText: function(YY, rY, FY, OY, gY, aY) {
        if (gY <= 0 || aY <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: vY,
          fontVariant: uY,
          fontWeight: sY,
          fontSize: iY,
          font: yY
        } = this, QY = [vY, uY, sY, `${iY}px`, yY].filter(Boolean).join(" "), oY = [
          [sY, `${iY}px`, IY(yY)].filter(Boolean).join(" "), `${iY}px sans-serif`
        ], WY = YY.font, EY = function(YY, rY, DY) {
          for (const FY of rY) {
            YY.font = FY;
            const rY = AY(YY.font),
              RY = IY(FY);
            if (null !== rY && Math.abs(rY - DY) <= .5 && YY.font.toLowerCase().includes(RY.toLowerCase())) return FY
          }
          return null
        }(YY, [QY, ...oY], iY);
        EY !== QY && function(YY, rY, FY) {
          RY || (RY = !0, Promise.resolve().then((() => DY(1113))).then((DY => {
            let {
              jQ: AY
            } = DY;
            AY(new Error("A canvas didn't take canvasTxt's font"), {
              font: YY,
              Mi: rY,
              drawnWith: null !== FY && void 0 !== FY ? FY : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(QY, WY, EY);
        const mY = AY(YY.font);
        if (null === EY && null !== mY && mY > 0) {
          const DY = iY / mY;
          YY.save();
          try {
            return YY.scale(DY, DY), {
              height: this.drawLines(YY, rY, FY / DY, OY / DY, gY / DY, aY / DY, mY).height * DY
            }
          } finally {
            YY.restore()
          }
        }
        return this.drawLines(YY, rY, FY, OY, gY, aY, iY)
      },
      drawLines: function(YY, rY, DY, AY, IY, RY, OY) {
        const gY = DY + IY,
          aY = AY + RY;
        let vY, uY = AY + RY / 2 + OY / 2;
        "right" === this.align ? (vY = gY, YY.textAlign = "right") : "left" === this.align ? (vY = DY, YY.textAlign = "left") : (vY = DY + IY / 2, YY.textAlign = "center");
        for (const FY of rY) {
          YY.measureText(FY).width >= IY && (rY = rY.replace(FY, ""))
        }
        rY = (0, FY.U)(rY);
        const sY = [],
          iY = rY.split("\n"),
          yY = this.justify ? YY.measureText("\u200a").width : 0;
        iY.forEach((rY => {
          let DY = YY.measureText(rY).width;
          if (DY <= IY) sY.push(rY);
          else {
            let FY = rY;
            const AY = IY;
            let RY, OY, gY;
            for (DY = YY.measureText(FY).width; DY > AY;) {
              for (RY = 0, OY = 0, gY = ""; OY < AY;) RY++, gY = FY.substr(0, RY), OY = YY.measureText(gY).width;
              RY--, gY = gY.substr(0, RY);
              const rY = RY;
              if (" " !== FY.substr(RY, 1)) {
                for (;
                  " " !== FY.substr(RY, 1) && 0 !== RY;) RY--;
                0 === RY && (RY = rY), gY = FY.substr(0, RY)
              }
              gY = this.justify ? this.justifyLine(YY, gY, yY, "\u200a", IY) : gY, FY = FY.substr(RY), DY = YY.measureText(FY).width, sY.push(gY)
            }
            DY > 0 && sY.push(FY)
          }
        }));
        const QY = this.lineHeight ? this.lineHeight : this.getTextHeight(YY, rY),
          oY = QY * (sY.length - 1),
          WY = oY / 2;
        let EY = AY;
        "top" === this.vAlign ? uY = AY + OY : "bottom" === this.vAlign ? (uY = aY - oY, EY = aY) : (EY = AY + RY / 2, uY -= WY), sY.forEach((rY => {
          rY = rY.trim(), YY.fillText(rY, vY, uY), uY += QY
        })), this.debug && (YY.lineWidth = 3, YY.strokeStyle = "#00909e", YY.strokeRect(DY, AY, IY, RY), YY.lineWidth = 2, YY.strokeStyle = "#f6d743", YY.beginPath(), YY.moveTo(vY, AY), YY.lineTo(vY, aY), YY.stroke(), YY.strokeStyle = "#ff6363", YY.beginPath(), YY.moveTo(DY, EY), YY.lineTo(gY, EY), YY.stroke());
        return {
          height: oY + QY
        }
      },
      getTextHeight: function(YY, rY) {
        const DY = YY.textBaseline;
        YY.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: FY
        } = YY.measureText(rY);
        return YY.textBaseline = DY, FY
      },
      justifyLine: function(YY, rY, DY, FY, AY) {
        const IY = rY.trim(),
          RY = YY.measureText(IY).width,
          OY = IY.split(/\s+/).length - 1,
          gY = Math.floor((AY - RY) / DY);
        if (OY <= 0 || gY <= 0) return IY;
        const aY = Math.floor(gY / OY);
        let vY = gY - OY * aY,
          uY = [];
        for (let sY = 0; sY < aY; sY++) uY.push(FY);
        uY = uY.join("");
        return IY.replace(/\s+/g, (YY => {
          const rY = vY > 0 ? uY + FY : uY;
          return vY--, YY + rY
        }))
      }
    }
  },
  38029: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => QY,
      e: () => yY,
      h: () => sY,
      j: () => vY,
      k: () => uY
    });
    var FY = DY(3815),
      AY = DY(341);
    const IY = 1024,
      RY = 1536,
      OY = 2 * FY.l + 1,
      gY = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      aY = 1.5;

    function vY(YY, rY, DY) {
      if ("string" !== typeof YY) return rY;
      try {
        const DY = JSON.parse(YY);
        return DY && "object" === typeof DY ? DY : rY
      } catch (FY) {
        return void 0 !== DY && console.error(`Couldn't parse ${DY}`, FY), rY
      }
    }

    function uY(YY) {
      return vY(YY, null, "a leaderboard's rows")
    }

    function sY(YY, rY) {
      var DY, FY;
      return null !== rY && void 0 !== rY ? rY : {
        status: null !== (DY = YY.status) && void 0 !== DY ? DY : "loading",
        entries: null !== (FY = YY.entries) && void 0 !== FY ? FY : []
      }
    }

    function iY(YY, rY) {
      return "number" === typeof YY && Number.isFinite(YY) && YY > 0 ? YY : rY
    }

    function yY(YY, rY) {
      const DY = iY(YY.size, 1);
      let FY = iY(YY.width, iY(2.5 * DY, 2.5)),
        AY = iY(YY.height, iY(3.75 * DY, 3.75));
      Number.isFinite(IY * AY / FY) && Number.isFinite(RY * FY / AY) || (FY = 2.5, AY = 3.75);
      const OY = AY / FY,
        gY = Math.max(1, Math.min(IY, rY / OY));
      return {
        width: FY,
        height: AY,
        layoutWidth: Math.max(IY, RY / OY),
        layoutHeight: Math.max(RY, IY * OY),
        pixelWidth: Math.round(gY),
        pixelHeight: Math.round(Math.max(1, Math.min(rY, gY * OY)))
      }
    }

    function QY(YY, rY, DY, RY, vY, uY) {
      YY.setTransform(1, 0, 0, 1, 0, 0), YY.fillStyle = AY.K.defaultNameTagBackground, YY.fillRect(0, 0, rY, DY), YY.scale(rY / RY.layoutWidth, DY / RY.layoutHeight), YY.translate((RY.layoutWidth - IY) / 2, 0),
        function(YY, rY, DY, IY) {
          var RY, vY, uY, sY;
          const {
            top: iY,
            around: yY,
            showPlayerText: QY,
            localPlayerDbId: EY
          } = DY, {
            whiteUiText: mY,
            grayUiText: VY,
            yellowUiText: SY
          } = AY.K;
          YY.textBaseline = "middle";
          const lY = function(rY, DY, FY, AY, IY, RY) {
              let OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              YY.font = `bold ${AY}px 'Jetbrains Mono', monospace`, YY.fillStyle = IY, YY.textAlign = OY;
              let gY = rY.replace(/[\r\n\t]/g, " ");
              if (YY.measureText(gY).width > RY) {
                for (; gY.length > 0 && YY.measureText(`${gY}\u2026`).width > RY;) gY = gY.slice(0, -1);
                gY += "\u2026"
              }
              YY.fillText(gY, DY, FY)
            },
            TY = rY => {
              YY.fillStyle = mY, YY.globalAlpha = .15, YY.fillRect(24, rY, 976, 2), YY.globalAlpha = 1
            },
            eY = null === EY ? null : (0, AY.nc)(EY),
            NY = YY => null !== eY && YY.playerHash === eY,
            BY = oY(iY.entries, FY.o),
            cY = "ready" === iY.status && BY.length > 0,
            KY = null === yY ? [] : oY(yY.entries, OY),
            HY = BY.some(NY),
            zY = null === yY ? null : function(YY) {
              const rY = YY;
              if (!rY || !Number.isFinite(rY.rank) || !Number.isFinite(rY.tied) || !Number.isFinite(rY.total)) return null;
              return rY
            }(yY.standing),
            ZY = KY.find(NY),
            CY = BY.find(NY),
            fY = null === zY || void 0 === ZY ? null : {
              value: ZY.value,
              rank: zY.rank
            },
            jY = WY(BY, void 0 === CY || CY.value === (null === fY || void 0 === fY ? void 0 : fY.value) ? fY : null),
            hY = WY(KY, fY),
            dY = (YY, rY) => {
              const DY = YY.findIndex(NY);
              return DY >= 0 ? rY[DY] : null
            },
            JY = null !== (RY = null !== (vY = null === zY || void 0 === zY ? void 0 : zY.rank) && void 0 !== vY ? vY : dY(KY, hY)) && void 0 !== RY ? RY : dY(BY, jY);
          YY.font = "bold 34px 'Jetbrains Mono', monospace";
          const MY = [...cY ? jY : [], ...HY ? [] : hY],
            wY = Math.min(280, Math.max(0, ...MY.map((rY => YY.measureText(gY.format(rY)).width)))),
            bY = wY <= 80,
            XY = bY ? 80 : 32 + wY,
            qY = bY ? 148 : XY + 28,
            pY = 660 - qY;
          lY(`TOP ${FY.o}  /  ALL TIME`, 24, 52, 28, VY, 976), lY(QY ? String(null !== (uY = rY.title) && void 0 !== uY ? uY : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, mY, 976), lY("RANK", 32, 174, 28, VY, qY - 40), lY("PLAYER", qY, 174, 28, VY, pY), lY(QY ? String(null !== (sY = rY.scoreLabel) && void 0 !== sY ? sY : "Score").slice(0, 24) : "Score", 992, 174, 28, VY, 304, "right"), TY(202);
          const kY = (IY - 232) / (FY.o + aY + OY),
            GY = 208 + FY.o * kY,
            xY = GY + aY * kY,
            nY = (rY, DY, FY, AY) => {
              const IY = NY(rY);
              YY.fillStyle = IY ? SY : mY, YY.globalAlpha = IY ? .15 : AY ? .035 : 0, YY.fillRect(24, FY - kY / 2 + 1, 976, kY - 2), YY.globalAlpha = 1;
              const RY = IY ? SY : mY;
              lY(gY.format(DY), XY, FY, 34, RY, bY ? 80 : wY, bY ? "center" : "right"), lY(QY ? String(rY.name).slice(0, 64) : "Player", qY, FY, 34, RY, pY);
              const OY = gY.format(rY.value);
              lY(YY.measureText(OY).width > 304 ? rY.value.toExponential(6) : OY, 992, FY, 34, RY, 304, "right")
            };
          if (cY)
            for (const [FY, AY] of BY.entries()) nY(AY, jY[FY], 208 + (FY + .5) * kY, FY % 2 === 0);
          else {
            const YY = "error" === iY.status,
              rY = YY ? "Couldn't load leaderboard" : "ready" === iY.status ? "No scores yet" : "Loading leaderboard\u2026",
              DY = YY ? "Trying again shortly" : "ready" === iY.status ? "Be the first on the board!" : "Fetching the top players",
              FY = (208 + GY) / 2;
            lY(rY, 512, FY - 28, 40, YY ? AY.K.redUiText : mY, 960, "center"), lY(DY, 512, FY + 27, 30, VY, 960, "center")
          }
          const PY = GY + aY * kY / 2;
          if (null === JY) TY(PY);
          else {
            const rY = null === zY ? 0 : zY.tied - 1,
              DY = `YOUR RANK #${gY.format(JY)}${null===zY?"":` of ${gY.format(zY.total)}`}`;
            YY.font = "bold 36px 'Jetbrains Mono', monospace";
            const FY = Math.max(20, Math.min(36, Math.floor(34560 / YY.measureText(DY).width)));
            lY(DY, 512, PY - (rY > 0 ? 15 : 0), FY, SY, 960, "center"), rY > 0 && lY(`Tied with ${gY.format(rY)} other${1===rY?"":"s"}`, 512, PY + 24, 24, VY, 960, "center")
          }
          if (null === yY) return;
          const UY = xY + OY * kY / 2;
          if (HY) lY(`You're in the top ${FY.o}!`, 512, UY, 40, SY, 960, "center");
          else if (0 === KY.length) lY("You're not on this board yet", 512, UY, 34, VY, 960, "center");
          else
            for (const [FY, AY] of KY.entries()) nY(AY, hY[FY], xY + (FY + .5) * kY, FY % 2 === 0)
        }(YY, vY, uY, RY.layoutHeight)
    }

    function oY(YY, rY) {
      return Array.isArray(YY) ? YY.slice(0, rY).filter((YY => YY && Number.isFinite(YY.rank) && Number.isFinite(YY.value))) : []
    }

    function WY(YY, rY) {
      const DY = [];
      let FY = !1;
      return YY.forEach(((AY, IY) => {
        if (null !== rY && AY.value === rY.value) return void DY.push(rY.rank);
        const RY = IY > 0 && AY.value === YY[IY - 1].value;
        RY || (FY = 0 === IY && 1 !== AY.rank), DY.push(RY && !FY ? DY[IY - 1] : AY.rank)
      })), DY
    }
  },
  38229: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      g: () => IY
    });
    const FY = 32;

    function AY(YY) {
      return Array.from(YY).length
    }

    function IY(YY) {
      const rY = [""];
      let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        AY = "";
      const IY = () => {
        rY.push(""), DY = 0, AY = ""
      };
      for (const RY of YY.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(RY)) IY();
        else if (/^\s+$/.test(RY)) AY += RY;
      else if (RY.length > 0) {
        const YY = Array.from(RY);
        DY > 0 && DY + AY.length + YY.length > FY && IY(), rY[rY.length - 1] += AY, DY += AY.length, AY = "";
        for (const AY of YY) DY >= FY && IY(), rY[rY.length - 1] += AY, DY++
      }
      return rY[rY.length - 1] += AY, rY
    }
  },
  42332: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      WasmPreviewHost: () => Sr,
      pageBuiltInAnimationPack: () => sY,
      pagePreviews: () => Yr,
      previewModule: () => kY
    });
    var FY = DY(3316),
      AY = DY(631);
    const IY = "[bloxd-wasm-client]";

    function RY(YY) {
      const rY = {
        wasm: "unknown",
        client: String(AY.d)
      };
      try {
        var DY;
        rY.wasm = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.Iu()) && void 0 !== DY ? DY : rY.wasm
      } catch {}
      return rY
    }
    async function OY(YY) {
      if (YY.length < 2 || 31 !== YY[0] || 139 !== YY[1]) return YY;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: rY
        } = await DY.e(214).then((() => DY(36338)));
        return rY(YY)
      }
      const rY = new Blob([YY]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(rY).arrayBuffer())
    }

    function gY(YY, rY, FY, AY) {
      Promise.resolve().then((() => DY(40046))).then((DY => {
        let {
          reportDataLoadFailure: IY
        } = DY;
        IY(YY, rY, FY, AY)
      }), (rY => {
        console.warn(`${IY} ${YY} didn't load, and the report couldn't be sent`, FY.error, rY)
      }))
    }
    const aY = [3e4, 12e4, 3e5];
    class vY {
      constructor(YY) {
        this.deps = YY, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((YY => {
          this.resolveSet = YY
        }))
      }
      provide(YY) {
        return this.loading ??= this.load(YY), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(YY) {
        const rY = RY(YY),
          DY = await async function(YY, rY) {
            let DY;
            try {
              DY = await YY()
            } catch (FY) {
              return {
                stage: "fetch",
                error: FY
              }
            }
            try {
              return rY(DY) ? null : {
                stage: "decode",
                error: null
              }
            } catch (FY) {
              return {
                stage: "decode",
                error: FY
              }
            }
          }((() => this.deps.fetch()), (rY => {
            const DY = YY.eAY(rY);
            return DY && this.resolveSet(rY), DY
          }));
        if (null !== DY) {
          if ("fetch" === DY.stage) {
            this.loading = null;
            const rY = aY[this.retries++];
            void 0 !== rY && this.deps.later((() => {
              this.provide(YY)
            }), rY)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(DY, rY))
        }
      }
    }
    let uY = null;

    function sY() {
      return uY ??= new vY({
        fetch: async () => OY(await (0, FY.D)(iY(), {
          priority: "low"
        })),
        onFailed: (YY, rY) => {
          gY("builtInAnimations", iY(), YY, rY)
        },
        later: (YY, rY) => {
          setTimeout(YY, rY)
        }
      }), uY
    }

    function iY() {
      return DY(42341)
    }
    var yY = DY(3312),
      QY = DY(35750),
      oY = DY(39871),
      WY = DY(1222),
      EY = DY(323),
      mY = DY(39890),
      VY = DY(40129),
      SY = (DY(39906), DY(40074)),
      lY = DY(40082),
      TY = DY(40090),
      eY = DY(39900),
      NY = DY(40139),
      BY = DY(40142),
      cY = DY(39924),
      KY = DY(40004),
      HY = DY(40006),
      zY = DY(40132),
      ZY = DY(41635),
      CY = DY(39904);
    const fY = "[bloxd-previews]",
      jY = 4e5,
      hY = 0,
      dY = 1,
      JY = 2,
      MY = 1,
      wY = 2,
      bY = 3,
      XY = 0,
      qY = 1,
      pY = 2;

    function kY(YY) {
      const rY = YY,
        DY = (0, mY.D)(YY),
        FY = (0, mY.i)(YY);
      return null !== DY && null !== FY && "function" === typeof rY.SAY && "function" === typeof rY.lAY && "function" === typeof rY.TAY ? rY : null
    }

    function GY(YY, rY, DY) {
      let [FY, AY] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [YY, rY], IY = Math.min(Number.isFinite(DY) && DY > 0 ? DY : 1, 2);
      const RY = Math.max(0, FY, YY) * Math.max(0, AY, rY) * IY * IY;
      return RY > jY && (IY *= Math.sqrt(jY / RY)), [Math.max(1, Math.floor(Math.max(0, YY) * IY)), Math.max(1, Math.floor(Math.max(0, rY) * IY))]
    }

    function xY() {
      return DY(42344)
    }
    async function nY(YY, rY) {
      "lost" === YY && (0, cY.x)();
      const FY = await (0, cY.L)();
      if (null === FY || (0, mY.l)(FY) || (0, cY.d)()) return;
      const AY = "webgpu" === FY.backend;
      if (!AY && "lost" !== YY) return;
      const IY = AY ? (0, mY.O)(YY) : null;
      if (null !== IY) {
        const DY = `WebGPU failed at home (${YY}${void 0===rY?"":`: ${rY instanceof Error?rY.message:(0,CY.f)(rY)}`}) and ${IY}`;
        return console.warn(`${fY} ${DY}: the previews stop`, null !== rY && void 0 !== rY ? rY : ""), void(0, cY.p)(DY)
      }(0, cY.m)();
      try {
        await async function(YY, rY, FY) {
          var AY;
          let {
            backend: IY,
            adapter: OY
          } = YY;
          const gY = (0, yY.Q)(),
            {
              flushCrashReports: aY,
              reportRenderReload: vY
            } = await Promise.resolve().then((() => DY(40046)));
          vY(IY, "start_failed" === rY ? 0 : 1, RY(gY ? (0, yY.D)() : null), {
            cause: rY,
            error: "lost" === rY && null !== (AY = (0, mY.R)(gY ? (0, mY.D)((0, yY.D)()) : null)) && void 0 !== AY ? AY : FY,
            context: {
              adapter: OY,
              boundAtMs: "start_failed" === rY ? null : (0, cY.K)(),
              indirectHangs: (0, cY.B)()
            }
          }), await aY(KY.b)
        }(FY, YY, rY)
      } catch (OY) {
        console.warn(`${fY} ${FY.backend} failed at home (${YY}), and its report couldn't be sent`, OY)
      }(0, KY.j)()
    }
    async function PY() {
      if (!(0, yY.Q)()) {
        const YY = await (0, cY.L)();
        if (null === YY || (0, mY.l)(YY)) return null;
        if (await (0, QY.h)(await YY.load(), oY.f), !(0, yY.Q)()) return null
      }
      return kY((0, yY.D)())
    }
    class UY {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.page = YY, this.host = rY, this.id = DY, this.canvas = FY, this.size = AY, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const RY = {
            ...IY.images,
            glbUrl: YY => {
              var rY;
              return null !== (rY = this.models.drawnUrl(YY)) && void 0 !== rY ? rY : IY.images.glbUrl(YY)
            }
          },
          OY = rY => YY.modelFile(rY);
        this.images = new VY.d(RY, (YY => {
          console.warn(`${fY} image ${YY.key.kind}:${YY.key.index}:${YY.key.word} failed`, YY.error)
        }), {
          fetchFile: OY,
          fetchImage: rY => YY.imageFile(rY)
        }), YY.startModels(), this.models = new SY.h(IY.files, ((rY, DY) => YY.buildModel(rY, DY)), (YY => {
          console.warn(`${fY} model file ${YY.file} (${YY.url}) failed`, YY.error)
        }), {
          fetchFile: OY,
          onWritten: (YY, rY) => {
            this.images.glbWritten(YY, rY)
          },
          onTaken: (YY, rY) => {
            this.images.glbTaken(YY, rY)
          }
        }), this.write = (YY, rY, DY) => {
          if (this.closed) return !0;
          if (YY === SY.e) {
            const YY = new DataView(DY.buffer, DY.byteOffset, TY.e),
              FY = YY.getUint32(0, !0),
              AY = YY.getUint32(TY.h, !0),
              IY = this.page.hostCall(pY, (() => this.host.cIY(this.id, FY, rY, DY.subarray(TY.e))));
            return this.outcomes.push([AY, IY]), !0
          }
          return YY === VY.b && (this.page.hostCall(void 0, (() => {
            this.host.HIY(this.id, DY)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(YY, rY, DY) {
        if (this.closed) return;
        const [FY, AY] = GY(YY, rY, this.page.dpr(), DY);
        FY === this.size[0] && AY === this.size[1] || (this.size = [FY, AY], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, FY, AY)
        })))
      }
      setMob(YY, rY, DY, FY) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.jIY(this.id, YY, rY, DY, FY))))
      }
      setPet(YY, rY, DY, FY) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.dIY(this.id, YY, rY, DY, FY))))
      }
      setPlayer(YY, rY, DY) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZIY(this.id, YY, rY, DY))))
      }
      setFigure(YY, rY, DY, FY) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.CIY(this.id, YY, rY, DY, FY))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const YY = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === YY || YY.length < 3 ? null : {
          alpha: YY[0],
          beta: YY[1],
          radius: YY[2]
        }
      }
      setOrbit(YY) {
        let {
          alpha: rY,
          beta: DY,
          radius: FY
        } = YY;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.hIY(this.id, rY, DY, FY)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((YY => {
          this.settled.push(YY)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, NY.k)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [YY, rY] of this.outcomes) {
          const DY = rY === XY ? [] : [rY === qY ? YY : (YY | SY.f) >>> 0];
          this.models.taken(YY, DY)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(YY) {
        let rY = !1;
        if (YY) {
          const YY = this.host.wIY(this.id);
          for (const rY of YY) this.models.request(rY);
          const DY = this.host.MIY(this.id);
          DY.length > 0 && this.images.onEvent(DY), rY = YY.length > 0 || DY.length > 0
        }
        const DY = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          FY = rY || DY > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = FY ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(YY) {
        this.page.hostCall(void 0, (() => {
          const rY = this.host.close(this.id);
          rY.length > 0 && this.images.onEvent(rY), this.page.isTrapped || YY.TAY(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const YY = this.settled;
        this.settled = [];
        for (const rY of YY) rY()
      }
    }
    class LY {
      constructor(YY) {
        this.deps = YY, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: YY => {
            this.modelsFailed(YY)
          },
          onDecoderFailed: YY => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${fY} the Draco decoder didn't load: models waiting on it won't draw`, YY))
          },
          onWorkerLost: YY => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${fY} a model worker was lost: ${YY}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.vy = {
          setShaderPack: (YY, rY, DY, FY, AY) => (this.shaderPackArgs = [YY, rY, DY, FY, AY], this.handOverShaderPack(), !0)
        }, this.frame = YY => {
          this.frameId = null;
          const rY = this.host;
          if (null !== rY && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(rY, YY)
          } catch (DY) {
            if (!this.stopIfTrapped(DY) && (this.stop(), (0, mY.n)(DY))) return void this.deps.onRenderFailed("frames_refused", DY);
            console.warn(`${fY} the previews stopped: their frame threw`, DY)
          }
        }, YY.pack.onChange((() => {
          this.packChanged()
        })), YY.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const YY of this.previews.values()) YY.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var YY, rY;
        return null !== (YY = null === (rY = this.host) || void 0 === rY ? void 0 : rY.attached()) && void 0 !== YY && YY
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((YY, rY) => YY + rY), 0) / this.costs.length
      }
      async bindSession(YY, rY, DY) {
        const FY = this.binding,
          AY = this.sessionEnds;
        try {
          const IY = this.hostOf(YY);
          if (!IY.KIY()) {
            const rY = (0, HY.e)().sampleCount,
              RY = await DY(rY);
            if (this.sessionEnds !== AY) return this.keepRendererOfEndedSession(YY, IY, RY, rY, FY), rY;
            if (!IY.iIY(RY)) throw new Error("the page has a renderer already");
            (0, cY.t)(performance.now()), this.samples = rY, (0, zY.d)((0, mY.i)(YY))
          }
          if (!IY.attach(rY)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === FY && this.endBinding()
        }
      }
      keepRendererOfEndedSession(YY, rY, DY, FY, AY) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== AY) try {
          DY.free()
        } catch (IY) {
          console.warn(`${fY} an ended session's renderer didn't free`, IY)
        } else rY.iIY(DY) && ((0, cY.t)(performance.now()), this.samples = FY, (0, zY.d)(this.registryOf(YY)))
      }
      async beginSession() {
        var YY;
        let rY = () => {};
        const DY = new Promise((YY => {
          rY = YY
        }));
        this.binding = {
          done: DY,
          release: rY
        }, await (null === (YY = this.opening) || void 0 === YY ? void 0 : YY.catch((() => null)));
        const FY = this.pageCanvas;
        return this.pageCanvas = null, FY
      }
      endSession(YY) {
        var rY, DY;
        if (this.sessionEnds++, this.lastEndReturned = YY, this.endBinding(), YY) {
          try {
            var FY;
            null === (FY = this.host) || void 0 === FY || FY.detach()
          } catch (AY) {
            return void console.warn(`${fY} the session's core kept the page's renderer`, AY)
          }!0 === (null === (rY = this.host) || void 0 === rY ? void 0 : rY.attached()) && console.warn(`${fY} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (DY = this.host) || void 0 === DY ? void 0 : DY.KIY()) && (0, zY.d)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var YY;
        null === (YY = this.binding) || void 0 === YY || YY.release(), this.binding = null
      }
      async openPreview(YY, rY, DY, FY) {
        const AY = await this.renderingHost(),
          IY = this.module;
        if (null === AY || null === IY) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(AY), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(IY)
        }));
        const RY = this.nextId++,
          OY = this.deps.createCanvas(),
          [gY, aY] = GY(rY, DY, this.deps.dpr(), FY);
        OY.width = gY, OY.height = aY;
        if (!this.guarded((() => (IY.lAY(RY, OY), AY.open(RY, gY, aY, YY))))) throw this.hostCall(void 0, (() => {
          IY.TAY(RY)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const vY = new UY(this, AY, RY, OY, [gY, aY], this.deps);
        return this.previews.set(RY, vY), this.startFrames(), vY
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, cY.d)() || null !== (0, cY.H)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((YY => {
          null === YY || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(YY) {
        return this.prefetchedOr(YY, this.deps.fetchModel)
      }
      imageFile(YY) {
        return this.prefetchedOr(YY, FY.D)
      }
      prefetchedOr(YY, rY) {
        const DY = this.prefetchedFiles.get(YY);
        return void 0 === DY ? rY(YY) : DY.catch((() => rY(YY)))
      }
      async prefetchPlayerFiles() {
        const YY = this.deps.playerFile().then((YY => this.deps.files.url(YY))),
          rY = await Promise.all([YY, this.deps.images.lifeformAtlasUrl(NY.e)]).catch((() => null));
        if (null === rY) return;
        const [DY, FY] = rY, AY = (YY, rY) => {
          if (null === YY) return;
          const DY = rY(YY);
          this.prefetchedFiles.set(YY, DY), DY.catch((() => {
            this.prefetchedFiles.delete(YY)
          }))
        };
        AY(DY, (YY => this.modelFile(YY))), AY(FY, (YY => this.imageFile(YY)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((YY => (null === YY && (this.moduleLoad = null), YY)), (YY => {
          throw this.moduleLoad = null, YY
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((YY => {
          throw this.animationTable = null, YY
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((YY => (this.modelsFailed(YY), () => new Promise((() => {})))))
      }
      buildModel(YY, rY) {
        return this.startModels(), this.models.then((DY => DY(YY, rY))).then((YY => this.unavailable ? new Promise((() => {})) : YY))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(YY) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${fY} the model workers didn't start: models won't draw in the previews`, YY))
      }
      called(YY) {
        return 0 !== YY && this.logError(YY, 0), YY
      }
      closePreview(YY) {
        this.previews.delete(YY.id), null !== this.module && YY.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(YY) {
        if (null !== this.module && this.module !== YY) throw new Error("a second renderer module on one page");
        return this.module = YY, null === this.host && (this.host = this.guarded((() => new YY.SAY)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: YY
        } = this;
        null !== YY && this.outsideCall("the game's start or end", (() => {
          YY.fIY(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: YY,
          shaderPackArgs: rY
        } = this;
        null !== YY && null !== rY && this.outsideCall("the shader pack's hand-over", (() => {
          YY.yDY(...rY) || console.warn(`${fY} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(YY, rY) {
        try {
          this.hostCall(void 0, rY)
        } catch (DY) {
          this.stop(), console.warn(`${fY} the previews stopped: ${YY} threw`, DY)
        }
      }
      async loadAnimations(YY) {
        const rY = RY(null),
          DY = this.module;
        try {
          rY.wasm = null === DY ? rY.wasm : this.hostCall(rY.wasm, (() => DY.Iu()))
        } catch {}
        let FY, AY;
        try {
          FY = await this.fetchAnimationTable()
        } catch (IY) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: IY
          }, rY)
        }
        if (!this.settleIfTrapped()) {
          try {
            AY = YY.zIY(FY)
          } catch (IY) {
            if (this.stopIfTrapped(IY)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: IY
            }, rY)
          }
          AY || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, rY)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const YY = this.host;
        return null !== YY && this.guarded((() => YY.KIY())) ? YY : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var YY;
        const rY = null !== (YY = this.module) && void 0 !== YY ? YY : await this.loadModule();
        if (null === rY) return null;
        const DY = this.hostOf(rY),
          FY = () => this.guarded((() => DY.KIY()));
        if (FY()) return DY;
        if (null !== (0, cY.H)() || (0, cY.d)()) return null;
        const AY = this.deps.createCanvas();
        AY.width = 1, AY.height = 1;
        const IY = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const RY = (0, HY.e)().sampleCount;
        let OY;
        try {
          OY = await (0, mY.s)(rY, "previewRenderer", AY, RY, ZY.d, IY)
        } catch (gY) {
          throw gY instanceof eY.e ? this.stopForTrap(gY) : (0, mY.o)(gY) && await this.deps.onRenderFailed("start_failed", gY), gY
        }
        return this.guarded((() => DY.iIY(OY))) ? ((0, cY.t)(performance.now()), this.samples = RY, this.pageCanvas = AY, (0, zY.d)(this.registryOf(rY)), DY) : FY() ? DY : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(YY, rY) {
        for (const RY of this.previews.values()) RY.feed();
        if (this.stopped) return;
        const DY = this.deps.now(),
          FY = YY.frame(rY);
        this.costs.push(this.deps.now() - DY), this.costs.length > 120 && this.costs.shift();
        const AY = 0 !== (256 & FY),
          IY = 255 & FY;
        for (const RY of this.previews.values()) {
          if (this.stopped) return;
          RY.collect(AY)
        }
        if (!this.stopped) {
          if (AY) {
            const rY = YY.JIY();
            for (let YY = 0; YY + 1 < rY.length; YY += 2) this.logError(rY[YY], rY[YY + 1])
          }
          if (IY === MY) return this.stop(), void this.deps.onRenderFailed("lost");
          if (IY === wY) return this.stop(), void this.deps.onFatal(YY.NIY(), YY.BIY());
          if (IY === bY) return this.stop(), void console.warn(`${fY} the previews stopped: the page's renderer went with its session`);
          (0, EY.d)(rY), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, eY.k)(this.module) || "failed" === (0, yY.B)())
      }
      hostCall(YY, rY) {
        if (this.settleIfTrapped()) return YY;
        try {
          return rY()
        } catch (DY) {
          if (this.stopIfTrapped(DY)) return YY;
          throw DY
        }
      }
      guarded(YY) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return YY()
        } catch (rY) {
          throw this.stopIfTrapped(rY), rY
        }
      }
      registryOf(YY) {
        return {
          IDY: (rY, DY) => {
            this.hostCall(void 0, (() => {
              YY.IDY(rY, DY)
            }))
          },
          RDY: rY => {
            this.hostCall(void 0, (() => {
              YY.RDY(rY)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, zY.d)(null)), !0)
      }
      stopIfTrapped(YY) {
        return !(null === this.module || !(0, eY.m)(this.module, YY)) && (this.stopForTrap(YY), !0)
      }
      stopForTrap(YY) {
        this.stop(), (0, zY.d)(null), (0, yY.R)(YY)
      }
      stop() {
        this.stopped = !0;
        for (const YY of this.previews.values()) YY.abandon()
      }
      logError(YY, rY) {
        const DY = `${YY}:${rY}`;
        this.loggedErrors.has(DY) || (this.loggedErrors.add(DY), console.warn(`${fY} error ${YY} (detail ${rY})`))
      }
    }
    let tY = null;

    function Yr() {
      return tY ??= new LY(function() {
        const YY = (0, lY.r)(WY.clientSideServerUrls.staticUrl, {
          packUrl: YY => {
            var rY, DY;
            return null !== (rY = null === (DY = NY.i.current) || void 0 === DY ? void 0 : DY.modelUrl(YY)) && void 0 !== rY ? rY : null
          }
        });
        return {
          loadModule: PY,
          startModels: async YY => {
            const {
              pageModelPool: rY
            } = await DY.e(42).then((() => DY(42414))), {
              pool: FY
            } = rY(YY);
            return (YY, rY) => FY.build(YY, rY)
          },
          fetchAnimations: async () => OY(await (0, FY.D)(xY())),
          playerFile: async () => (await (0, lY.n)()).PLAYER_FILE,
          onAnimationsFailed: (YY, rY) => {
            gY("previewAnimations", xY(), YY, rY)
          },
          provideBuiltInAnimationPack: YY => {
            sY().provide(YY)
          },
          openExtras: cY.C,
          files: YY,
          images: (0, NY.o)((0, VY.j)(YY.url), (() => NY.i.current)),
          pack: NY.i,
          game: BY.d,
          fetchModel: YY => (0, lY.j)(YY),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: YY => requestAnimationFrame(YY),
          cancelFrame: YY => {
            cancelAnimationFrame(YY)
          },
          onRenderFailed: nY,
          onFatal: (YY, rY) => {
            console.error(`${fY} the previews stopped: renderer error ${YY} (detail ${rY})`)
          }
        }
      }()), tY
    }
    var rr = DY(614),
      Dr = DY(38003),
      Fr = DY(2864);
    const Ar = {
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
    const Ir = "[bloxd-previews]",
      Rr = new Uint32Array(5);

    function Or(YY) {
      return rr.j.indexOf(YY)
    }
    const gr = new WeakSet;

    function ar(YY) {
      const rY = (0, Dr.e)(YY),
        DY = null === rY ? -1 : vr(rY);
      return -1 !== DY ? DY : (gr.has(YY) || (gr.add(YY), console.warn(`${Ir} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function vr(YY) {
      var rY;
      return null !== (rY = Ar[YY]) && void 0 !== rY ? rY : -1
    }

    function ur(YY, rY) {
      const {
        canvas: DY
      } = rY;
      DY.style.width = "100%", DY.style.height = "100%", DY.style.display = "block", YY.appendChild(DY)
    }

    function sr(YY) {
      const rY = YY.getBoundingClientRect();
      return [rY.width, rY.height]
    }
    class ir {
      constructor(YY, rY) {
        this.preview = YY, this.showView = rY
      }
      show(YY) {
        this.showView(this.preview, YY)
      }
      resize(YY, rY) {
        this.preview.resize(YY, rY)
      }
      close() {
        this.preview.close()
      }
    }
    class yr {
      constructor(YY) {
        this.preview = YY, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(YY) {
          const {
            canvas: rY
          } = YY;
          let DY = null;
          const FY = YY => {
              var FY;
              DY = {
                pointer: YY.pointerId,
                x: YY.clientX,
                y: YY.clientY
              }, null === (FY = rY.setPointerCapture) || void 0 === FY || FY.call(rY, YY.pointerId)
            },
            AY = rY => {
              var FY;
              const AY = YY.orbit;
              if ((null === (FY = DY) || void 0 === FY ? void 0 : FY.pointer) !== rY.pointerId || null === AY) return;
              const IY = rY.clientX - DY.x,
                RY = rY.clientY - DY.y;
              DY = {
                ...DY,
                x: rY.clientX,
                y: rY.clientY
              }, YY.setOrbit({
                alpha: AY.alpha - .01 * IY,
                beta: Math.min(Math.PI - .01, Math.max(.01, AY.beta - .01 * RY)),
                radius: AY.radius
              })
            },
            IY = YY => {
              var rY;
              (null === (rY = DY) || void 0 === rY ? void 0 : rY.pointer) === YY.pointerId && (DY = null)
            },
            RY = rY => {
              const DY = YY.orbit;
              if (null === DY) return;
              rY.preventDefault();
              const FY = rY.deltaY * (rY.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : rY.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                AY = Math.min(100, Math.max(5, DY.radius + .08 * FY));
              YY.setOrbit({
                ...DY,
                radius: AY
              })
            };
          return rY.style.touchAction = "none", rY.addEventListener("pointerdown", FY), rY.addEventListener("pointermove", AY), rY.addEventListener("pointerup", IY), rY.addEventListener("pointercancel", IY), rY.addEventListener("wheel", RY, {
            passive: !1
          }), () => {
            rY.removeEventListener("pointerdown", FY), rY.removeEventListener("pointermove", AY), rY.removeEventListener("pointerup", IY), rY.removeEventListener("pointercancel", IY), rY.removeEventListener("wheel", RY)
          }
        }(YY), this.dev = {
          setCamera: rY => {
            let {
              yaw: DY,
              pitch: FY,
              radius: AY,
              target: IY
            } = rY;
            IY && console.warn(`${Ir} setCamera: target is noa's character preview only`);
            const RY = YY.orbit;
            null !== RY && YY.setOrbit({
              alpha: DY,
              beta: FY,
              radius: null !== AY && void 0 !== AY ? AY : RY.radius
            })
          },
          canvas: () => YY.canvas,
          isolateHead: () => {
            console.warn(`${Ir} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = YY.untilSettled().then((() => {
          if (YY.isStopped) throw new Error(`${Ir} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(YY, rY) {
        this.cosmetics[YY] = rY, this.apply()
      }
      playEmote(YY) {
        null === YY || YY !== this.emote ? (this.emote = YY, this.apply()) : this.preview.replay()
      }
      untilDrawn(YY) {
        return this.preview.untilSettled()
      }
      resetCamera() {}
      resize(YY, rY) {
        this.preview.resize(YY, rY)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var YY;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Rr, null === (YY = this.emote) ? -1 : vr(YY))
      }
    }

    function Qr(YY, rY) {
      let {
        mobType: DY,
        variation: FY,
        animation: AY
      } = rY;
      YY.setMob(Or(DY), null !== FY && void 0 !== FY ? FY : "", 1, ar(AY))
    }

    function or(YY, rY) {
      let {
        mobType: DY,
        variation: FY,
        metaInfo: AY,
        tamed: IY
      } = rY;
      YY.setPet(Or(DY), FY, AY, IY)
    }
    const Wr = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Er {
      constructor(YY, rY, DY, FY) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, YY(DY.width, FY[1], FY).then((YY => {
          if (this.closed) return void YY.close();
          const {
            style: DY
          } = YY.canvas;
          DY.position = "absolute", DY.top = "0", DY.visibility = "hidden", ur(rY, YY), this.preview = YY, this.apply()
        })).catch((YY => {
          console.error(`${Ir} couldn't open a lineup figure`, YY)
        }))
      }
      update(YY, rY, DY, FY, AY) {
        this.figure = YY, this.shown = rY, this.order = DY, this.span = FY, this.lineup = AY, this.apply()
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.preview) || void 0 === YY || YY.close(), this.preview = null
      }
      apply() {
        const {
          preview: YY,
          figure: rY,
          lineup: DY
        } = this;
        if (null === YY || null === rY) return;
        if (this.given !== rY) {
          var FY;
          this.given = rY, this.loaded = !1;
          const DY = null === rY.RV ? 0 : null !== (FY = (0, Fr.b)(rY.RV)) && void 0 !== FY ? FY : 0;
          YY.setFigure(function(YY) {
            return JSON.stringify(Object.fromEntries(YY.cosmetics))
          }(rY), DY, ar(rY.animation), rY.size), YY.untilSettled().then((() => {
            this.given === rY && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: AY,
          width: IY
        } = this.span;
        YY.resize(IY, DY[1], DY);
        const {
          style: RY
        } = YY.canvas;
        RY.left = `${AY}px`, RY.width = `${IY}px`, RY.zIndex = this.order, RY.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class mr {
      constructor(YY, rY) {
        this.open = rY, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = sr(YY), this.layer = document.createElement("div");
        const {
          style: DY
        } = this.layer;
        DY.position = "relative", DY.isolation = "isolate", DY.overflow = "hidden", DY.width = "100%", DY.height = "100%", DY.pointerEvents = "none", YY.appendChild(this.layer)
      }
      show(YY) {
        this.view = YY, this.place()
      }
      resize(YY, rY) {
        this.size = [YY, rY], this.place()
      }
      close() {
        for (const YY of this.figures) YY.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: YY,
          shown: rY
        } = this.view;
        for (const FY of this.figures.splice(YY.length)) FY.close();
        const {
          size: DY
        } = this;
        YY.forEach(((FY, AY) => {
          var IY;
          const RY = function(YY, rY, DY, FY) {
            let [AY, IY] = FY;
            const RY = (YY + .5) * AY / rY,
              OY = Math.min(Math.max(AY / rY, 2 * DY * IY), 2 * Math.max(RY, AY - RY));
            return {
              left: RY - OY / 2,
              width: OY
            }
          }(AY, YY.length, function(YY) {
            let {
              animation: rY,
              size: DY
            } = YY;
            const {
              aimed: FY,
              ready: AY
            } = Wr;
            return (ar(rY) === Ar.gunAimed ? FY : AY) * DY
          }(FY), DY);
          this.figures[AY] ??= new Er(this.open, this.layer, RY, DY), this.figures[AY].update(FY, null !== (IY = rY[AY]) && void 0 !== IY && IY, function(YY, rY) {
            return String(Math.round(1e3 * YY) + rY)
          }(FY.size, AY), RY, DY)
        }))
      }
    }
    const Vr = {
      player: dY,
      store: JY
    };
    class Sr {
      constructor(YY) {
        this.page = YY
      }
      async openMob(YY) {
        return new ir(await this.open(YY, hY), Qr)
      }
      async openPet(YY) {
        return new ir(await this.open(YY, hY), or)
      }
      openMobLineup(YY) {
        return new mr(YY, ((YY, rY, DY) => this.page.openPreview(hY, YY, rY, DY)))
      }
      async openCharacter(YY, rY) {
        return new yr(await this.open(YY, Vr[rY]))
      }
      async open(YY, rY) {
        const [DY, FY] = sr(YY), AY = await this.page.openPreview(rY, DY, FY);
        return ur(YY, AY), AY
      }
    }
  },
  36140: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => QY,
      D: () => WY,
      d: () => FY,
      f: () => AY,
      g: () => sY,
      h: () => oY,
      l: () => vY,
      o: () => EY,
      r: () => gY,
      u: () => aY,
      v: () => iY,
      y: () => yY
    });
    const FY = [{
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

    function AY(YY, rY) {
      const {
        numLines: DY,
        charsPerLine: AY
      } = FY[rY];
      return mY(YY, DY, AY, !1)
    }
    const IY = 7 / 8,
      RY = .25,
      OY = 8;

    function gY(YY, rY) {
      return {
        width: Math.min(YY, OY) - 2 * RY,
        height: Math.min(rY, OY) - 2 * RY
      }
    }

    function aY(YY, rY, DY) {
      const AY = gY(YY, rY),
        {
          numLines: RY,
          charsPerLine: OY
        } = FY[DY];
      return {
        numLines: Math.max(1, Math.floor(RY / IY * AY.height)),
        charsPerLine: Math.max(1, Math.floor(OY * AY.width))
      }
    }

    function vY(YY, rY, DY, FY) {
      const {
        numLines: AY,
        charsPerLine: IY
      } = aY(DY, FY, rY);
      return mY(YY, AY, IY, !1)
    }
    const uY = 32e3;

    function sY(YY) {
      return YY.slice(0, uY)
    }
    const iY = 512e3,
      yY = 64,
      QY = iY;

    function oY(YY, rY) {
      const DY = Math.max(0, QY - rY),
        FY = Math.min(iY, DY);
      return YY.slice(0, FY)
    }
    const WY = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      LR: {
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

    function EY(YY, rY) {
      const {
        numLines: DY,
        charsPerLine: FY
      } = WY[rY];
      return mY(YY, DY, FY, !1)
    }

    function mY(YY, rY, DY, FY, AY) {
      (AY || FY) && (YY = YY.slice(0, null !== AY && void 0 !== AY ? AY : rY * DY));
      const IY = YY.split("\n");
      if (IY.length > rY && IY.splice(rY, IY.length - rY), !FY)
        for (let RY = 0; RY < IY.length; RY++) {
          const YY = IY[RY];
          YY.length > DY && (IY[RY] = YY.substring(0, DY), IY.length < rY && IY.splice(RY + 1, 0, YY.substring(DY)))
        }
      return IY.join("\n")
    }
  },
  42341: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/builtInAnimations.anim.36d8b13aae7e273ec8e8.gz"
  },
  42344: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);