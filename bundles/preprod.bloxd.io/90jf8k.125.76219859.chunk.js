export const id = 125;
export const ids = [125];
export const modules = {
  38653: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      c: () => hF
    });
    var CF = SF(2485);
    let AF = null,
      uF = null;

    function hF() {
      return uF ??= SF.e(188).then((() => SF(34926))).then((FF => {
        let {
          ITEM_SPRITES: WF,
          ITEM_SPRITES_WITHOUT_FILE: SF,
          ITEM_FILES_WITHOUT_SPRITE: uF
        } = FF;
        AF = function(FF, WF, SF) {
          const AF = new Set,
            uF = (0, CF.E)(WF);
          let hF = 0;
          for (const [CF, bW] of FF.entries()) CF === uF[hF] ? hF++ : AF.add(bW);
          if ("" !== SF)
            for (const bW of SF.split(CF.w)) AF.add(bW);
          return AF
        }(WF.split(CF.w), SF, uF)
      }), (FF => {
        throw uF = null, FF
      })), uF
    }

    function bW(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = AF) || void 0 === SF ? void 0 : SF.has(FF)) && void 0 !== WF && WF
    }
  },
  37053: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW
    });
    var CF = SF(1085);

    function AF(FF) {
      const WF = /(\d*\.?\d+)px/.exec(FF);
      return WF ? Number(WF[1]) : null
    }

    function uF(FF) {
      return FF.split(/[\s,]+/).pop()
    }
    let hF = !1;
    const bW = {
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
      drawText: function(FF, WF, CF, bW, dF, PF) {
        if (dF <= 0 || PF <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: RF,
          fontVariant: iW,
          fontWeight: eF,
          fontSize: EF,
          font: QF
        } = this, rW = [RF, iW, eF, `${EF}px`, QF].filter(Boolean).join(" "), gW = [
          [eF, `${EF}px`, uF(QF)].filter(Boolean).join(" "), `${EF}px sans-serif`
        ], tW = FF.font, TF = function(FF, WF, SF) {
          for (const CF of WF) {
            FF.font = CF;
            const WF = AF(FF.font),
              hF = uF(CF);
            if (null !== WF && Math.abs(WF - SF) <= .5 && FF.font.toLowerCase().includes(hF.toLowerCase())) return CF
          }
          return null
        }(FF, [rW, ...gW], EF);
        TF !== rW && function(FF, WF, CF) {
          hF || (hF = !0, Promise.resolve().then((() => SF(948))).then((SF => {
            let {
              ZA: AF
            } = SF;
            AF(new Error("A canvas didn't take canvasTxt's font"), {
              font: FF,
              kept: WF,
              drawnWith: null !== CF && void 0 !== CF ? CF : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(rW, tW, TF);
        const aW = AF(FF.font);
        if (null === TF && null !== aW && aW > 0) {
          const SF = EF / aW;
          FF.save();
          try {
            return FF.scale(SF, SF), {
              height: this.drawLines(FF, WF, CF / SF, bW / SF, dF / SF, PF / SF, aW).height * SF
            }
          } finally {
            FF.restore()
          }
        }
        return this.drawLines(FF, WF, CF, bW, dF, PF, EF)
      },
      drawLines: function(FF, WF, SF, AF, uF, hF, bW) {
        const dF = SF + uF,
          PF = AF + hF;
        let RF, iW = AF + hF / 2 + bW / 2;
        "right" === this.align ? (RF = dF, FF.textAlign = "right") : "left" === this.align ? (RF = SF, FF.textAlign = "left") : (RF = SF + uF / 2, FF.textAlign = "center");
        for (const CF of WF) {
          FF.measureText(CF).width >= uF && (WF = WF.replace(CF, ""))
        }
        WF = (0, CF.U)(WF);
        const eF = [],
          EF = WF.split("\n"),
          QF = this.justify ? FF.measureText("\u200a").width : 0;
        EF.forEach((WF => {
          let SF = FF.measureText(WF).width;
          if (SF <= uF) eF.push(WF);
          else {
            let CF = WF;
            const AF = uF;
            let hF, bW, dF;
            for (SF = FF.measureText(CF).width; SF > AF;) {
              for (hF = 0, bW = 0, dF = ""; bW < AF;) hF++, dF = CF.substr(0, hF), bW = FF.measureText(dF).width;
              hF--, dF = dF.substr(0, hF);
              const WF = hF;
              if (" " !== CF.substr(hF, 1)) {
                for (;
                  " " !== CF.substr(hF, 1) && 0 !== hF;) hF--;
                0 === hF && (hF = WF), dF = CF.substr(0, hF)
              }
              dF = this.justify ? this.justifyLine(FF, dF, QF, "\u200a", uF) : dF, CF = CF.substr(hF), SF = FF.measureText(CF).width, eF.push(dF)
            }
            SF > 0 && eF.push(CF)
          }
        }));
        const rW = this.lineHeight ? this.lineHeight : this.getTextHeight(FF, WF),
          gW = rW * (eF.length - 1),
          tW = gW / 2;
        let TF = AF;
        "top" === this.vAlign ? iW = AF + bW : "bottom" === this.vAlign ? (iW = PF - gW, TF = PF) : (TF = AF + hF / 2, iW -= tW), eF.forEach((WF => {
          WF = WF.trim(), FF.fillText(WF, RF, iW), iW += rW
        })), this.debug && (FF.lineWidth = 3, FF.strokeStyle = "#00909e", FF.strokeRect(SF, AF, uF, hF), FF.lineWidth = 2, FF.strokeStyle = "#f6d743", FF.beginPath(), FF.moveTo(RF, AF), FF.lineTo(RF, PF), FF.stroke(), FF.strokeStyle = "#ff6363", FF.beginPath(), FF.moveTo(SF, TF), FF.lineTo(dF, TF), FF.stroke());
        return {
          height: gW + rW
        }
      },
      getTextHeight: function(FF, WF) {
        const SF = FF.textBaseline;
        FF.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: CF
        } = FF.measureText(WF);
        return FF.textBaseline = SF, CF
      },
      justifyLine: function(FF, WF, SF, CF, AF) {
        const uF = WF.trim(),
          hF = FF.measureText(uF).width,
          bW = uF.split(/\s+/).length - 1,
          dF = Math.floor((AF - hF) / SF);
        if (bW <= 0 || dF <= 0) return uF;
        const PF = Math.floor(dF / bW);
        let RF = dF - bW * PF,
          iW = [];
        for (let eF = 0; eF < PF; eF++) iW.push(CF);
        iW = iW.join("");
        return uF.replace(/\s+/g, (FF => {
          const WF = RF > 0 ? iW + CF : iW;
          return RF--, FF + WF
        }))
      }
    }
  },
  37062: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => rW,
      d: () => QF,
      h: () => eF,
      j: () => RF,
      l: () => iW
    });
    var CF = SF(3434),
      AF = SF(271);
    const uF = 1024,
      hF = 1536,
      bW = 2 * CF.m + 1,
      dF = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      PF = 1.5;

    function RF(FF, WF, SF) {
      if ("string" !== typeof FF) return WF;
      try {
        const SF = JSON.parse(FF);
        return SF && "object" === typeof SF ? SF : WF
      } catch (CF) {
        return void 0 !== SF && console.error(`Couldn't parse ${SF}`, CF), WF
      }
    }

    function iW(FF) {
      return RF(FF, null, "a leaderboard's rows")
    }

    function eF(FF, WF) {
      var SF, CF;
      return null !== WF && void 0 !== WF ? WF : {
        status: null !== (SF = FF.status) && void 0 !== SF ? SF : "loading",
        entries: null !== (CF = FF.entries) && void 0 !== CF ? CF : []
      }
    }

    function EF(FF, WF) {
      return "number" === typeof FF && Number.isFinite(FF) && FF > 0 ? FF : WF
    }

    function QF(FF, WF) {
      const SF = EF(FF.size, 1);
      let CF = EF(FF.width, EF(2.5 * SF, 2.5)),
        AF = EF(FF.height, EF(3.75 * SF, 3.75));
      Number.isFinite(uF * AF / CF) && Number.isFinite(hF * CF / AF) || (CF = 2.5, AF = 3.75);
      const bW = AF / CF,
        dF = Math.max(1, Math.min(uF, WF / bW));
      return {
        width: CF,
        height: AF,
        layoutWidth: Math.max(uF, hF / bW),
        layoutHeight: Math.max(hF, uF * bW),
        pixelWidth: Math.round(dF),
        pixelHeight: Math.round(Math.max(1, Math.min(WF, dF * bW)))
      }
    }

    function rW(FF, WF, SF, hF, RF, iW) {
      FF.setTransform(1, 0, 0, 1, 0, 0), FF.fillStyle = AF.D.defaultNameTagBackground, FF.fillRect(0, 0, WF, SF), FF.scale(WF / hF.layoutWidth, SF / hF.layoutHeight), FF.translate((hF.layoutWidth - uF) / 2, 0),
        function(FF, WF, SF, uF) {
          var hF, RF, iW, eF;
          const {
            top: EF,
            around: QF,
            showPlayerText: rW,
            localPlayerDbId: TF
          } = SF, {
            whiteUiText: aW,
            grayUiText: kW,
            yellowUiText: qW
          } = AF.D;
          FF.textBaseline = "middle";
          const VF = function(WF, SF, CF, AF, uF, hF) {
              let bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              FF.font = `bold ${AF}px 'Jetbrains Mono', monospace`, FF.fillStyle = uF, FF.textAlign = bW;
              let dF = WF.replace(/[\r\n\t]/g, " ");
              if (FF.measureText(dF).width > hF) {
                for (; dF.length > 0 && FF.measureText(`${dF}\u2026`).width > hF;) dF = dF.slice(0, -1);
                dF += "\u2026"
              }
              FF.fillText(dF, SF, CF)
            },
            NF = WF => {
              FF.fillStyle = aW, FF.globalAlpha = .15, FF.fillRect(24, WF, 976, 2), FF.globalAlpha = 1
            },
            DF = null === TF ? null : (0, AF.pc)(TF),
            LF = FF => null !== DF && FF.playerHash === DF,
            mW = gW(EF.entries, CF.n),
            OF = "ready" === EF.status && mW.length > 0,
            xW = null === QF ? [] : gW(QF.entries, bW),
            ZF = mW.some(LF),
            oF = null === QF ? null : function(FF) {
              const WF = FF;
              if (!WF || !Number.isFinite(WF.rank) || !Number.isFinite(WF.tied) || !Number.isFinite(WF.total)) return null;
              return WF
            }(QF.standing),
            YF = xW.find(LF),
            MF = mW.find(LF),
            cW = null === oF || void 0 === YF ? null : {
              value: YF.value,
              rank: oF.rank
            },
            GF = tW(mW, void 0 === MF || MF.value === (null === cW || void 0 === cW ? void 0 : cW.value) ? cW : null),
            zW = tW(xW, cW),
            IF = (FF, WF) => {
              const SF = FF.findIndex(LF);
              return SF >= 0 ? WF[SF] : null
            },
            fF = null !== (hF = null !== (RF = null === oF || void 0 === oF ? void 0 : oF.rank) && void 0 !== RF ? RF : IF(xW, zW)) && void 0 !== hF ? hF : IF(mW, GF);
          FF.font = "bold 34px 'Jetbrains Mono', monospace";
          const yW = [...OF ? GF : [], ...ZF ? [] : zW],
            sF = Math.min(280, Math.max(0, ...yW.map((WF => FF.measureText(dF.format(WF)).width)))),
            nF = sF <= 80,
            HF = nF ? 80 : 32 + sF,
            KF = nF ? 148 : HF + 28,
            wF = 660 - KF;
          VF(`TOP ${CF.n}  /  ALL TIME`, 24, 52, 28, kW, 976), VF(rW ? String(null !== (iW = WF.title) && void 0 !== iW ? iW : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, aW, 976), VF("RANK", 32, 174, 28, kW, KF - 40), VF("PLAYER", KF, 174, 28, kW, wF), VF(rW ? String(null !== (eF = WF.scoreLabel) && void 0 !== eF ? eF : "Score").slice(0, 24) : "Score", 992, 174, 28, kW, 304, "right"), NF(202);
          const XF = (uF - 232) / (CF.n + PF + bW),
            UF = 208 + CF.n * XF,
            BF = UF + PF * XF,
            jW = (WF, SF, CF, AF) => {
              const uF = LF(WF);
              FF.fillStyle = uF ? qW : aW, FF.globalAlpha = uF ? .15 : AF ? .035 : 0, FF.fillRect(24, CF - XF / 2 + 1, 976, XF - 2), FF.globalAlpha = 1;
              const hF = uF ? qW : aW;
              VF(dF.format(SF), HF, CF, 34, hF, nF ? 80 : sF, nF ? "center" : "right"), VF(rW ? String(WF.name).slice(0, 64) : "Player", KF, CF, 34, hF, wF);
              const bW = dF.format(WF.value);
              VF(FF.measureText(bW).width > 304 ? WF.value.toExponential(6) : bW, 992, CF, 34, hF, 304, "right")
            };
          if (OF)
            for (const [CF, AF] of mW.entries()) jW(AF, GF[CF], 208 + (CF + .5) * XF, CF % 2 === 0);
          else {
            const FF = "error" === EF.status,
              WF = FF ? "Couldn't load leaderboard" : "ready" === EF.status ? "No scores yet" : "Loading leaderboard\u2026",
              SF = FF ? "Trying again shortly" : "ready" === EF.status ? "Be the first on the board!" : "Fetching the top players",
              CF = (208 + UF) / 2;
            VF(WF, 512, CF - 28, 40, FF ? AF.D.redUiText : aW, 960, "center"), VF(SF, 512, CF + 27, 30, kW, 960, "center")
          }
          const vW = UF + PF * XF / 2;
          if (null === fF) NF(vW);
          else {
            const WF = null === oF ? 0 : oF.tied - 1,
              SF = `YOUR RANK #${dF.format(fF)}${null===oF?"":` of ${dF.format(oF.total)}`}`;
            FF.font = "bold 36px 'Jetbrains Mono', monospace";
            const CF = Math.max(20, Math.min(36, Math.floor(34560 / FF.measureText(SF).width)));
            VF(SF, 512, vW - (WF > 0 ? 15 : 0), CF, qW, 960, "center"), WF > 0 && VF(`Tied with ${dF.format(WF)} other${1===WF?"":"s"}`, 512, vW + 24, 24, kW, 960, "center")
          }
          if (null === QF) return;
          const JF = BF + bW * XF / 2;
          if (ZF) VF(`You're in the top ${CF.n}!`, 512, JF, 40, qW, 960, "center");
          else if (0 === xW.length) VF("You're not on this board yet", 512, JF, 34, kW, 960, "center");
          else
            for (const [CF, AF] of xW.entries()) jW(AF, zW[CF], BF + (CF + .5) * XF, CF % 2 === 0)
        }(FF, RF, iW, hF.layoutHeight)
    }

    function gW(FF, WF) {
      return Array.isArray(FF) ? FF.slice(0, WF).filter((FF => FF && Number.isFinite(FF.rank) && Number.isFinite(FF.value))) : []
    }

    function tW(FF, WF) {
      const SF = [];
      let CF = !1;
      return FF.forEach(((AF, uF) => {
        if (null !== WF && AF.value === WF.value) return void SF.push(WF.rank);
        const hF = uF > 0 && AF.value === FF[uF - 1].value;
        hF || (CF = 0 === uF && 1 !== AF.rank), SF.push(hF && !CF ? SF[uF - 1] : AF.rank)
      })), SF
    }
  },
  37260: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      g: () => uF
    });
    const CF = 32;

    function AF(FF) {
      return Array.from(FF).length
    }

    function uF(FF) {
      const WF = [""];
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        AF = "";
      const uF = () => {
        WF.push(""), SF = 0, AF = ""
      };
      for (const hF of FF.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(hF)) uF();
        else if (/^\s+$/.test(hF)) AF += hF;
      else if (hF.length > 0) {
        const FF = Array.from(hF);
        SF > 0 && SF + AF.length + FF.length > CF && uF(), WF[WF.length - 1] += AF, SF += AF.length, AF = "";
        for (const AF of FF) SF >= CF && uF(), WF[WF.length - 1] += AF, SF++
      }
      return WF[WF.length - 1] += AF, WF
    }
  },
  38649: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      g: () => bW
    });
    var CF = SF(38653);
    let AF = null,
      uF = null;

    function hF() {
      return AF ??= SF.e(50).then((() => SF(40485))).catch((FF => {
        throw AF = null, FF
      })), AF
    }

    function bW() {
      return uF ??= Promise.all([hF(), (0, CF.c)()]).then((FF => {
        let [WF] = FF;
        return WF
      }), (FF => {
        throw uF = null, FF
      })), uF
    }
  },
  40445: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => YF,
      e: () => HF,
      f: () => IF,
      i: () => ZF,
      m: () => oF,
      n: () => sF,
      q: () => xW,
      s: () => OF
    });
    var CF = SF(3561),
      AF = SF(3584),
      uF = SF(35203),
      hF = SF(2477),
      bW = SF(2474),
      dF = SF(38838),
      PF = SF(89),
      RF = SF(1124),
      iW = SF(38649),
      eF = SF(7e3),
      EF = SF(6482),
      QF = SF(6611),
      rW = SF(6714),
      gW = SF(6848),
      tW = SF(6862);
    const TF = {
        youtube: eF.c,
        "person-military-pointing": EF.h,
        sparkle: QF.g,
        user: rW.g,
        wrench: gW.h,
        zap: tW.h
      },
      aW = new Map(Object.entries(TF).map((FF => {
        let [WF, SF] = FF;
        const [CF, AF, , , uF] = SF.icon;
        return [WF, {
          width: CF,
          height: AF,
          path: "string" === typeof uF ? uF : uF.join(" ")
        }]
      })));
    var kW = SF(38716);
    const qW = 397,
      VF = 1,
      NF = {
        translate: FF => [FF],
        keyBindingText: FF => FF,
        isFriend: () => !1,
        hiddenNames: {}
      };
    let DF = null,
      LF = 0,
      mW = "none";

    function OF() {
      return LF
    }

    function xW() {
      LF++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? mW = "all" : "none" === mW && (mW = "notBoards")
    }

    function ZF(FF) {
      Object.assign(NF, FF), xW(!1)
    }

    function oF(FF) {
      FF !== DF && (DF = FF, xW())
    }

    function YF(FF) {
      if ("none" === mW || null === FF) return;
      FF(qW, "all" === mW ? 0 : VF, new Uint8Array(0)) && (mW = "none")
    }
    const MF = new Map;

    function cW(FF, WF, SF) {
      const CF = SF ? `${FF}#${SF.join(",")}` : FF,
        AF = MF.get(CF);
      if (AF) return AF.image;
      const uF = {
        image: null
      };
      return MF.set(CF, uF), WF().then((async FF => {
        if (null === FF) return null;
        const WF = new Image;
        WF.crossOrigin = "anonymous", WF.src = FF, await WF.decode();
        const CF = await createImageBitmap(WF);
        if (!SF) return CF;
        try {
          return function(FF, WF) {
            let [SF, CF, AF] = WF;
            const uF = (0, dF.h)(FF.width, FF.height),
              {
                canvas: hF
              } = uF;
            return uF.drawImage(FF, 0, 0), uF.globalCompositeOperation = "multiply", uF.fillStyle = `rgb(${SF}, ${CF}, ${AF})`, uF.fillRect(0, 0, hF.width, hF.height), uF.globalCompositeOperation = "destination-in", uF.drawImage(FF, 0, 0), hF
          }(CF, SF)
        } finally {
          CF.close()
        }
      })).then((FF => {
        null !== FF && (uF.image = FF, xW(!1))
      }), (WF => {
        console.warn(`[bloxd-wasm-client] text icon ${FF} did not load`, WF), MF.get(CF) === uF && MF.delete(CF)
      })), null
    }
    const GF = new Set(CF.d),
      zW = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function IF() {
      (0, iW.g)().catch((() => {}))
    }

    function fF(FF) {
      return GF.has(FF) ? cW(`icon:${FF}`, (async () => (await (0, iW.e)()).ingameIconUrl(FF))) : null
    }
    let yW = "unasked";
    const sF = {
      get canSeeRealPlayerNames() {
        return PF.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return PF.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return DF
      },
      shownPlayerName: FF => (0, RF.g)(FF, NF.hiddenNames),
      translate: (FF, WF) => {
        const SF = "object" === typeof WF && null !== WF ? WF : void 0;
        return NF.translate(FF, (0, RF.i)(SF, NF.hiddenNames))
      },
      keyBindingText: FF => NF.keyBindingText(FF),
      isFriend: FF => NF.isFriend(FF, NF.hiddenNames),
      iconImage: function(FF) {
        if (GF.has(FF)) return fF(FF);
        if ("unasked" === yW && (yW = "loading", (0, bW.d)().then((() => {
            yW = "in", xW(!1)
          }), (FF => {
            yW = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", FF)
          }))), "in" !== yW) return null;
        const WF = (0, hF.b)(FF),
          SF = void 0 === WF ? void 0 : (0, uF.itemTypeNameOf)(WF);
        if ("Gun" === SF) return null;
        const CF = (0, bW.c)(FF),
          dF = void 0 !== SF && zW.has(SF);
        if (dF && void 0 === CF) return null;
        const PF = void 0 !== WF && "GrayscaleArmour" === (0, uF.itemTypeOf)(WF) || Object.hasOwn(AF.c, FF),
          RF = null !== CF && void 0 !== CF ? CF : FF;
        return cW(dF ? `block:${RF}` : `item:${RF}`, (async () => {
          var FF;
          const WF = await (0, iW.g)();
          return null !== (FF = WF.itemSpriteUrl(RF)) && void 0 !== FF ? FF : dF ? null : WF.notFoundUrl()
        }), PF ? (0, AF.f)(FF) : void 0)
      },
      effectImage: fF,
      rankIcon: function(FF) {
        var WF;
        return null !== (WF = aW.get(FF)) && void 0 !== WF ? WF : null
      }
    };
    let nF = null;

    function HF() {
      return nF ??= new FontFace("Jetbrains Mono", `url(${(0,kW.c)()}) format("woff2")`).load().then((FF => {
        document.fonts.add(FF), xW()
      }), (FF => {
        console.warn("[bloxd-wasm-client] the text font did not load", FF)
      })), nF
    }
  },
  38716: (FF, WF, SF) => {
    function CF() {
      return SF(38720)
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  40440: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => VW,
      f: () => rS
    });
    var CF = SF(35236),
      AF = SF(38838),
      uF = SF(37260),
      hF = SF(553),
      bW = SF(220);
    const dF = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      PF = 41;

    function RF(FF) {
      return `bolder ${FF}px 'Jetbrains Mono'`
    }

    function iW(FF) {
      return "object" === typeof FF && null !== FF
    }

    function eF(FF, WF) {
      const SF = "number" === typeof FF ? FF : "string" === typeof FF ? Number(FF.replace("px", "")) : NaN;
      return Number.isFinite(SF) && SF > 0 ? SF : WF
    }

    function EF(FF) {
      return iW(FF) ? FF : void 0
    }

    function QF(FF) {
      const WF = "number" === typeof FF ? hF.x[FF] : FF;
      return "string" === typeof WF && Object.hasOwn(hF.n, WF) ? hF.n[WF] : void 0
    }

    function rW(FF, WF) {
      return "string" === typeof FF ? FF : iW(FF) ? "string" === typeof FF.translationKey ? WF.translate(FF.translationKey, FF.params).map((FF => "string" === typeof FF ? FF : FF.icon)).join("") : "string" === typeof FF.entityName ? WF.shownPlayerName(FF.entityName) : "" : void 0 === FF || null === FF ? "" : String(FF)
    }

    function gW(FF, WF, SF, CF) {
      if (!Array.isArray(FF)) return [];
      const AF = [];
      for (const RF of FF) {
        var uF, hF;
        if (iW(RF) && "chatTag" in RF) {
          AF.push({
            kind: "rank",
            rank: RF
          });
          continue
        }
        if (iW(RF) && "icon" in RF && !("mainRGB" in RF)) {
          var PF;
          AF.push({
            kind: "icon",
            icon: String(RF.icon),
            size: eF(null === (PF = EF(RF.style)) || void 0 === PF ? void 0 : PF.fontSize, dF.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (iW(RF) && (0, bW.yb)(RF)) {
          AF.push({
            kind: "text",
            text: "",
            size: WF,
            colour: CF
          });
          continue
        }
        let FF, QF;
        iW(RF) && (0, bW.xb)(RF) ? (FF = SF.keyBindingText(String(RF.action)), QF = EF(RF.style)) : iW(RF) && "str" in RF ? (FF = RF.str, QF = EF(RF.style)) : FF = RF;
        const gW = eF(null === (uF = QF) || void 0 === uF ? void 0 : uF.fontSize, WF),
          tW = null !== (hF = (0, bW.Yb)(QF)) && void 0 !== hF ? hF : CF;
        if (iW(FF) && "string" === typeof FF.translationKey) {
          const WF = SF.translate(FF.translationKey, FF.params);
          if (WF.some((FF => "string" !== typeof FF))) {
            for (const FF of WF) AF.push("string" === typeof FF ? {
              kind: "text",
              text: FF,
              size: gW,
              colour: tW
            } : {
              kind: "icon",
              icon: FF.icon,
              size: gW
            });
            continue
          }
        }
        AF.push({
          kind: "text",
          text: rW(FF, SF),
          size: gW,
          colour: tW
        })
      }
      return AF
    }

    function tW(FF) {
      return void 0 !== FF && "rank" !== FF.kind
    }

    function TF(FF, WF) {
      const SF = tW(FF),
        CF = tW(WF);
      return void 0 === FF && !CF || !SF && void 0 === WF ? 0 : SF !== CF ? .5 * dF.HORIZONTAL_PADDING : 0
    }

    function aW(FF) {
      return "rank" === FF.kind ? dF.DEFAULT_FONT_SIZE : FF.size
    }

    function kW(FF, WF, SF) {
      return "icon" === FF.kind ? FF.size : "rank" === FF.kind ? function(FF, WF) {
        const SF = WF.rankIcon(FF.rank.icon);
        return SF ? PF * (SF.width / SF.height) : PF
      }(FF, SF) + dF.HORIZONTAL_PADDING : (WF.font = RF(FF.size), WF.measureText(FF.text).width)
    }

    function qW(FF, WF, SF) {
      if (0 === FF.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let CF = 0;
      for (const hF of FF) CF = Math.max(CF, aW(hF));
      const AF = [];
      let uF = TF(void 0, FF[0]);
      for (let hF = 0; hF < FF.length; hF++) {
        const CF = uF;
        uF += kW(FF[hF], WF, SF), uF += TF(FF[hF], FF[hF + 1]), AF.push({
          x: CF,
          width: uF - CF
        })
      }
      return {
        width: uF,
        height: CF + dF.VERTICAL_PADDING,
        sizes: AF
      }
    }

    function VF(FF, WF, SF, CF, AF, uF, hF) {
      WF += TF(void 0, FF[0]);
      for (let bW = 0; bW < FF.length; bW++) {
        const dF = NF(FF[bW], WF, SF, CF, AF, uF, hF);
        WF += 0 === dF ? 0 : dF + TF(FF[bW], FF[bW + 1])
      }
    }

    function NF(FF, WF, SF, CF, AF, uF, hF, bW) {
      var iW;
      if ("icon" === FF.kind) {
        const CF = uF.iconImage(FF.icon);
        return CF && hF.push({
          image: CF,
          x: WF,
          y: SF + dF.VERTICAL_PADDING / 2,
          size: FF.size
        }), FF.size
      }
      if ("rank" === FF.kind) {
        const hF = null !== bW && void 0 !== bW ? bW : kW(FF, AF, uF);
        return function(FF, WF, SF, CF, AF, uF, hF) {
          var bW, RF;
          const {
            rank: iW
          } = FF;
          uF.fillStyle = iW.mainRGB, uF.fillRect(WF, SF, CF, AF);
          const eF = hF.rankIcon(iW.icon);
          if (!eF) return;
          const EF = PF / eF.height,
            QF = WF + (CF - eF.width * EF) / 2,
            rW = SF + (AF - PF) / 2,
            gW = new Path2D(eF.path),
            tW = dF.TEXT_SHADOW_WIDTH,
            TF = (null === (bW = iW.nameTag) || void 0 === bW ? void 0 : bW.iconShadowRGB) || "black";
          for (const dF of [-1, 1])
            for (const FF of [-1, 1]) LF(uF, gW, QF + tW * dF, rW + tW * FF, EF, TF);
          LF(uF, gW, QF, rW, EF, (null === (RF = iW.nameTag) || void 0 === RF ? void 0 : RF.iconRGB) || "white")
        }(FF, WF, SF, hF, CF, AF, uF), hF
      }
      if (0 === FF.text.length) return 0;
      const eF = RF(FF.size);
      AF.font = eF;
      const EF = null !== bW && void 0 !== bW ? bW : AF.measureText(FF.text).width;
      return function(FF, WF, SF, CF, AF, uF) {
        const hF = dF.TEXT_SHADOW_WIDTH;
        uF.font = CF, uF.fillStyle = "black";
        for (const bW of [-1, 1])
          for (const CF of [-1, 1]) uF.fillText(FF, WF + hF * bW, SF + hF * CF);
        uF.fillStyle = AF, uF.fillText(FF, WF, SF)
      }(FF.text, WF, SF + CF - dF.VERTICAL_PADDING + 5, eF, null !== (iW = FF.colour) && void 0 !== iW ? iW : "white", AF), EF
    }

    function DF(FF, WF) {
      for (const {
          image: SF,
          x: CF,
          y: AF,
          size: uF
        }
        of FF) WF.imageSmoothingEnabled = !1, WF.drawImage(SF, CF, AF, uF, uF)
    }

    function LF(FF, WF, SF, CF, AF, uF) {
      FF.save(), FF.translate(SF, CF), FF.scale(AF, AF), FF.fillStyle = uF, FF.fill(WF), FF.restore()
    }

    function mW(FF, WF, SF) {
      const CF = "object" === typeof FF && null !== FF ? FF : {},
        AF = function(FF, WF, SF) {
          if (!Array.isArray(FF) || 0 === FF.length) return [];
          const CF = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const hF of gW(FF, dF.DEFAULT_FONT_SIZE, SF)) {
            if ("text" !== hF.kind) {
              CF[CF.length - 1].items.push({
                content: hF,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === hF.text.length) continue;
            const FF = CF[CF.length - 1].items.reduce(((FF, WF) => FF + ("text" === WF.content.kind ? (0, uF.e)(WF.content.text) : WF.chars)), 0);
            (0, uF.g)(hF.text, FF).forEach(((FF, WF) => {
              WF > 0 && CF.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), FF.length > 0 && CF[CF.length - 1].items.push({
                content: {
                  ...hF,
                  text: FF
                },
                chars: FF.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let AF = dF.VERTICAL_PADDING / 2;
          for (const uF of CF) {
            if (0 === uF.items.length) continue;
            const {
              width: FF,
              height: CF,
              sizes: hF
            } = qW(uF.items.map((FF => FF.content)), WF, SF);
            uF.items.forEach(((FF, WF) => {
              FF.size = hF[WF]
            })), uF.width = FF, uF.height = CF, uF.y = AF, AF += CF + dF.LINE_SPACING
          }
          return CF
        }(CF.content, WF, SF);
      let hF = 0,
        bW = dF.VERTICAL_PADDING,
        PF = 0;
      for (const uF of AF) {
        hF = Math.max(hF, uF.width + 2 * dF.HORIZONTAL_PADDING), bW += uF.height + dF.LINE_SPACING;
        for (const FF of uF.items) PF += FF.chars
      }
      const RF = "string" === typeof CF.backgroundColor ? CF.backgroundColor : "#22283b";
      return {
        width: hF,
        height: bW,
        chars: PF,
        draw: (FF, WF) => {
          const CF = [];
          if (FF.fillStyle = RF, FF.fillRect(0, 0, hF, bW), null === WF)
            for (const uF of AF) uF.items.length > 0 && VF(uF.items.map((FF => FF.content)), 0, uF.y, uF.height, FF, SF, CF);
          else {
            let uF = 0;
            for (const hF of AF)
              for (const AF of hF.items) {
                if (uF >= WF) break;
                NF("text" === AF.content.kind ? {
                  ...AF.content,
                  text: AF.content.text.substring(0, WF - uF)
                } : AF.content, AF.size.x, hF.y, hF.height, FF, SF, CF, AF.size.width), uF += AF.chars
              }
          }
          DF(CF, FF)
        }
      }
    }
    var OF = SF(3561),
      xW = SF(1126),
      ZF = SF(1660);
    const oF = 10,
      YF = 3,
      MF = 3,
      cW = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      GF = 64,
      zW = 69,
      IF = {
        icon: ZF.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function fF(FF) {
      return "object" !== typeof FF || null === FF || Array.isArray(FF) ? void 0 : FF
    }
    const yW = new Set(OF.d);

    function sF(FF, WF) {
      return "string" === typeof FF ? eF(FF, WF) : WF
    }

    function nF(FF) {
      return sF(FF.width, YF)
    }

    function HF(FF, WF) {
      var SF;
      const CF = null !== (SF = FF.applyTo) && void 0 !== SF ? SF : "both";
      return "both" === CF || CF === WF
    }

    function KF(FF) {
      const WF = nF(FF);
      return "glow" === FF.style ? WF * MF : Math.ceil(WF / 2) + 1
    }

    function wF(FF, WF, SF) {
      var CF, AF;
      const uF = null !== (CF = fF(FF.info)) && void 0 !== CF ? CF : {},
        bW = "string" === typeof FF.name ? FF.name : "",
        PF = uF.subtitle;
      if (Array.isArray(uF.content) && 0 === uF.content.length && !(Array.isArray(PF) && PF.length > 0)) return null;
      const RF = "number" === typeof FF.hideNameSeed ? FF.hideNameSeed : null,
        iW = "" === bW || !0 === FF.mesh ? bW : (0, xW.c)(bW, !SF.canSeeRealPlayerNames, RF);
      if (!iW && !uF.content) return null;
      const eF = "string" === typeof FF.colour ? FF.colour : "default",
        EF = Object.hasOwn(hF.u, eF) ? hF.u[eF] : void 0,
        rW = uF.content ? gW(uF.content, dF.DEFAULT_FONT_SIZE, SF, EF) : [{
          kind: "text",
          text: iW,
          size: dF.DEFAULT_FONT_SIZE,
          colour: EF
        }],
        tW = [];
      for (const hF of Array.isArray(FF.ranks) ? FF.ranks : []) {
        const FF = QF(hF);
        null !== FF && void 0 !== FF && FF.nameTag && FF.visible && tW.push({
          kind: "rank",
          rank: FF
        })
      }
      tW.push(...rW);
      ("boolean" === typeof FF.player ? FF.player : Array.isArray(FF.ranks)) && "" !== bW && SF.isFriend(bW) && tW.push({
        kind: "rank",
        rank: IF
      }), "number" === typeof FF.FF && tW.push({
        kind: "text",
        text: ` ${FF.FF}m`,
        size: dF.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const TF = PF ? gW(PF, dF.DEFAULT_SUBTITLE_FONT_SIZE, SF) : null,
        aW = "string" === typeof uF.backgroundColor ? uF.backgroundColor : "#22283b",
        kW = "string" === typeof uF.subtitleBackgroundColor ? uF.subtitleBackgroundColor : "#1a1e2d",
        NF = fF(uF.healthbar),
        LF = fF(uF.border),
        mW = Array.isArray(FF.effects) ? FF.effects.filter((FF => "string" === typeof FF && yW.has(FF))) : [],
        OF = "number" === typeof FF.health ? Math.max(0, Math.min(1, FF.health)) : null,
        ZF = qW(tW, WF, SF),
        YF = qW(null !== TF && void 0 !== TF ? TF : [], WF, SF),
        wF = {
          width: dF.EFFECT_ICON_SIZE * mW.length,
          height: mW.length > 0 ? dF.EFFECT_ICON_SIZE : 0
        },
        XF = LF && HF(LF, "nametag") ? KF(LF) : 0,
        UF = sF(null === NF || void 0 === NF ? void 0 : NF.height, oF),
        BF = LF && HF(LF, "healthbar") ? KF(LF) : 0,
        jW = "never" === (null !== (AF = null === NF || void 0 === NF ? void 0 : NF.display) && void 0 !== AF ? AF : "onDamage") ? 0 : UF + BF,
        vW = Math.max(wF.height, XF),
        JF = Math.max(dF.VERTICAL_PADDING, jW, XF);
      let pF = Math.max(ZF.width, YF.width, wF.width);
      if (LF) {
        const FF = KF(LF) + dF.HORIZONTAL_PADDING / 2;
        pF = Math.max(pF, Math.max(ZF.width, YF.width) + dF.HORIZONTAL_PADDING + 2 * FF)
      }
      const lF = ZF.height + YF.height + vW + JF,
        FW = ZF.width + dF.HORIZONTAL_PADDING,
        WW = YF.width + dF.HORIZONTAL_PADDING,
        SW = Math.max(FW, WW),
        CW = (pF - SW) / 2,
        AW = Math.max(wF.height, XF);
      return {
        width: pF,
        height: lF,
        draw: FF => {
          const WF = [];
          if (FF.fillStyle = aW, FF.fillRect(CW, AW, SW, ZF.height), VF(tW, (pF - FW) / 2 + dF.HORIZONTAL_PADDING / 2, AW, ZF.height, FF, SF, WF), TF) {
            const CF = AW + ZF.height;
            FF.fillStyle = kW, FF.fillRect(CW, CF, SW, YF.height), VF(TF, (pF - WW) / 2 + dF.HORIZONTAL_PADDING / 2, CF, YF.height, FF, SF, WF)
          }
          let CF = null;
          if (null !== OF) {
            const WF = lF - UF - BF;
            null !== NF && void 0 !== NF && NF.backgroundColour && (FF.fillStyle = NF.backgroundColour, FF.fillRect(CW, WF, SW, UF)), FF.fillStyle = function(FF, WF) {
              const SF = null === FF || void 0 === FF ? void 0 : FF.foregroundColour;
              if ("string" === typeof SF) return SF;
              const CF = [...Array.isArray(SF) && SF.length > 0 ? SF : cW].sort(((FF, WF) => FF.healthFraction - WF.healthFraction)),
                AF = CF.find((FF => WF <= FF.healthFraction));
              return (null !== AF && void 0 !== AF ? AF : CF[CF.length - 1]).colour
            }(NF, OF), FF.fillRect(CW, WF, Math.round(SW * OF), UF), CF = {
              x: CW,
              y: WF,
              width: SW,
              height: UF
            }
          }
          if (LF) {
            const WF = [];
            HF(LF, "nametag") && WF.push({
              x: CW,
              y: AW,
              width: SW,
              height: ZF.height + (TF ? YF.height : 0)
            }), CF && HF(LF, "healthbar") && WF.push(CF), WF.length > 0 && function(FF, WF, SF) {
              const CF = nF(WF),
                AF = CF / 2,
                uF = FF => FF.width > 0 && FF.height > 0,
                hF = SF.map((FF => ({
                  x: FF.x + AF,
                  y: FF.y + AF,
                  width: FF.width - CF,
                  height: FF.height - CF
                }))).filter(uF);
              if (0 === hF.length) return;
              const bW = WF => {
                const SF = WF.filter(uF);
                if (0 !== SF.length) {
                  FF.beginPath();
                  for (const WF of SF) FF.rect(WF.x, WF.y, WF.width, WF.height);
                  FF.stroke()
                }
              };
              if (FF.save(), FF.strokeStyle = WF.colour, FF.lineWidth = CF, FF.lineJoin = "round", "glow" === WF.style) FF.shadowColor = WF.colour, FF.shadowBlur = CF * MF, bW(hF), bW(hF);
              else if ("double" === WF.style) {
                bW(hF);
                const FF = CF + 2;
                bW(hF.map((WF => ({
                  x: WF.x + FF,
                  y: WF.y + FF,
                  width: WF.width - 2 * FF,
                  height: WF.height - 2 * FF
                }))))
              } else bW(hF);
              FF.restore()
            }(FF, LF, WF)
          }
          DF(WF, FF);
          for (let AF = 0; AF < mW.length; AF++) {
            const WF = SF.effectImage(mW[AF]);
            WF && (FF.imageSmoothingEnabled = !1, FF.drawImage(WF, 5 + zW * AF, 5, GF, GF))
          }
        }
      }
    }
    var XF = SF(37053);
    const UF = 256,
      BF = 1024,
      jW = {
        width: 1,
        height: 7 / 8
      };
    var vW = SF(37062);
    const JF = {
      leaderboard: ""
    };
    var pF = SF(40445);
    const lF = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      FW = 2048,
      WW = 256,
      SW = 10,
      CW = 4,
      AW = 65536,
      uW = new TextDecoder;
    let hW = pF.n,
      bS = -1;
    const dW = new Map,
      PW = new Map;
    let RW = 0;
    const iS = new TextEncoder;

    function eW(FF, WF) {
      const SF = iS.encode(JSON.stringify(WF)),
        CF = new Uint8Array(SF.length + 1);
      return CF[0] = FF, CF.set(SF, 1), CF
    }
    const EW = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        FF: null,
        hideNameSeed: null
      },
      QW = [eW(lF.Nametag, EW), eW(lF.Nametag, {
        ...EW,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), eW(lF.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...CF.d.map(((FF, WF) => eW(lF.Board, {
        shared: {
          text: "Ag",
          textSize: WF
        },
        w: 0,
        h: 0
      })))];

    function rS(FF) {
      (0, pF.e)().then((() => {
        if (FF()) return;
        const WF = (0, AF.h)(1, 1, {
          willReadFrequently: !0
        });
        var SF;
        WF && (SF = WF.canvas, QW.map((FF => VW(FF, SF))))
      }))
    }
    let gS = pF.s;

    function tS() {
      dW.clear(), PW.clear()
    }

    function TW(FF, WF) {
      const SF = FF.get(WF);
      return void 0 !== SF && (FF.delete(WF), FF.set(WF, SF)), SF
    }

    function aS(FF, WF, SF) {
      FF.set(WF, SF), FF.size > WW && FF.delete(FF.keys().next().value)
    }

    function kS(FF, WF, SF) {
      if (FF === lF.Nametag) {
        let FF = TW(dW, WF);
        return void 0 === FF && (FF = wF(JSON.parse(WF), SF, hW), aS(dW, WF, FF)), FF
      }
      if (FF === lF.MultilineText) {
        var AF;
        const FF = JSON.parse(WF),
          CF = JSON.stringify(null !== (AF = FF.box) && void 0 !== AF ? AF : null),
          uF = "number" === typeof FF.shown ? FF.shown : null;
        let hF = TW(PW, CF);
        void 0 === hF && (hF = mW(FF.box, SF, hW), aS(PW, CF, hF));
        const bW = null === uF ? null : Math.min(Math.max(0, Math.floor(uF)), hF.chars),
          dF = hF;
        return {
          width: dF.width,
          height: dF.height,
          draw: FF => {
            dF.draw(FF, bW)
          }
        }
      }
      if (FF === lF.Board) return function(FF, WF) {
        var SF;
        if (!WF.canSeePlayerWrittenText) return null;
        const {
          shared: AF,
          w: uF = 0,
          h: hF = 0
        } = FF, bW = !uF;
        let dF;
        if (bW) {
          var PF, RF;
          dF = null !== (PF = null === AF || void 0 === AF || null === (RF = AF.text) || void 0 === RF ? void 0 : RF.toString()) && void 0 !== PF ? PF : ""
        } else {
          if ("string" !== typeof(null === AF || void 0 === AF ? void 0 : AF.text)) return null;
          dF = AF.text
        }
        if ("" === dF.trim()) return null;
        const iW = null !== (SF = null === AF || void 0 === AF ? void 0 : AF.textSize) && void 0 !== SF ? SF : 0,
          eF = CF.d[iW].ingameFontSize;
        let EF = jW,
          QF = UF;
        bW || (dF = (0, CF.m)(dF, iW, uF, hF), EF = (0, CF.s)(uF, hF), QF = Math.min(UF, BF / Math.max(EF.width, EF.height)));
        const rW = Math.round(QF * EF.width),
          gW = Math.round(QF * EF.height),
          tW = QF / UF;
        return {
          width: rW,
          height: gW,
          draw: FF => {
            XF.e.fontSize = eF * tW, XF.e.fontWeight = "bold", XF.e.font = "'Jetbrains Mono', monospace", XF.e.drawText(FF, dF, 0, (-10 - 7 * iW) * tW, rW, gW)
          }
        }
      }(JSON.parse(WF), hW);
      if (FF === lF.Leaderboard) return function(FF, WF, SF) {
        var CF;
        const AF = (0, vW.j)(FF.opts, JF),
          uF = (0, vW.d)(AF, SF),
          hF = {
            top: (0, vW.h)(AF, (0, vW.l)(FF.top)),
            around: null !== (CF = FF.around) && void 0 !== CF ? CF : null,
            showPlayerText: WF.canSeePlayerWrittenText,
            localPlayerDbId: WF.localPlayerDbId
          };
        return {
          width: uF.pixelWidth,
          height: uF.pixelHeight,
          draw: FF => {
            const {
              a: WF,
              d: SF
            } = FF.getTransform();
            (0, vW.c)(FF, Math.round(uF.pixelWidth * WF), Math.round(uF.pixelHeight * SF), uF, AF, hF)
          }
        }
      }(JSON.parse(WF), hW, FW);
      throw new Error(`unknown text plane kind ${FF}`)
    }
    const qS = 2 ** Math.floor(Math.log2(FW));

    function VW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (FF.length < 2) return [0, 0];
        const uF = (0, AF.d)(WF);
        if (!uF) return [0, 0];
        const hF = gS();
        let bW;
        hF !== bS && (bS = hF, tS()), uF.save();
        try {
          bW = kS(FF[0], uW.decode(FF.subarray(1)), uF)
        } finally {
          uF.restore()
        }
        if (null === bW || !(bW.width > 0 && bW.height > 0)) return [0, 0];
        const dF = Math.min(1, FW / bW.width, FW / bW.height),
          PF = FF => CF ? function(FF) {
            const WF = 2 ** Math.ceil(Math.log2(FF));
            return Math.min(qS, WF - FF > FF - WF / 2 ? WF / 2 : WF)
          }(FF) : Math.min(FW, Math.ceil(FF * dF)),
          [RF, iW] = [PF(bW.width), PF(bW.height)];
        ! function(FF, WF, SF, CF, AF) {
          const uF = Math.max(FF.width, SF),
            hF = Math.max(FF.height, CF),
            bW = AF || uF * hF > Math.max(CW * SF * CF, AW),
            [dF, PF] = bW ? [SF, CF] : [uF, hF];
          dF === FF.width && PF === FF.height ? WF.clearRect(0, 0, dF, PF) : (FF.width = dF, FF.height = PF)
        }(WF, uF, RF, iW, SF), uF.save();
        try {
          const [FF, WF] = CF ? [RF / bW.width, iW / bW.height] : [dF, dF];
          1 === FF && 1 === WF || uF.scale(FF, WF), bW.draw(uF)
        } finally {
          uF.restore()
        }
        return [RF, iW]
      } catch (uF) {
        ! function(FF, WF) {
          RW < SW && (RW++, console.warn(`[bloxd-wasm-client] ${FF}`, WF))
        }("could not raster a text plane", uF);
        try {
          WF.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  7e3: (FF, WF) => {
    var SF = "youtube",
      CF = [61802],
      AF = "f167",
      uF = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z";
    WF.b = {
      prefix: "fab",
      iconName: SF,
      icon: [576, 512, CF, AF, uF]
    }, WF.c = WF.b
  },
  5809: (FF, WF) => {
    Object.defineProperty(WF, "__esModule", {
      value: !0
    });
    var SF = "bolt",
      CF = [9889, "zap"],
      AF = "f0e7",
      uF = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
    WF.definition = {
      prefix: "fas",
      iconName: SF,
      icon: [448, 512, CF, AF, uF]
    }, WF.faBolt = WF.definition, WF.prefix = "fas", WF.iconName = SF, WF.width = 448, WF.height = 512, WF.ligatures = CF, WF.unicode = AF, WF.svgPathData = uF, WF.aliases = CF
  },
  6482: (FF, WF) => {
    var SF = "person-military-pointing",
      CF = [],
      AF = "e54a",
      uF = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l152 0 0 89.4 162.8-162.8c-13.3-4.3-27.3-6.5-41.6-6.5L40 224zm345.7 20.9l-171.1 171.1 169.4 0 0-46.3 53.6 90.6c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8L430.3 290.8c-11.2-19-26.6-34.5-44.6-45.9zM192 448l0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32-192 0z";
    WF.e = {
      prefix: "fas",
      iconName: SF,
      icon: [512, 512, CF, AF, uF]
    }, WF.h = WF.e
  },
  6611: (FF, WF) => {
    var SF = "sparkle",
      CF = [],
      AF = "e5d6",
      uF = "M278.5 15.6C275 6.2 266 0 256 0s-19 6.2-22.5 15.6L174.2 174.2 15.6 233.5C6.2 237 0 246 0 256s6.2 19 15.6 22.5l158.6 59.4 59.4 158.6C237 505.8 246 512 256 512s19-6.2 22.5-15.6l59.4-158.6 158.6-59.4C505.8 275 512 266 512 256s-6.2-19-15.6-22.5L337.8 174.2 278.5 15.6z";
    WF.d = {
      prefix: "fas",
      iconName: SF,
      icon: [512, 512, CF, AF, uF]
    }, WF.g = WF.d
  },
  6714: (FF, WF) => {
    var SF = "user",
      CF = [128100, 62144, 62470, "user-alt", "user-large"],
      AF = "f007",
      uF = "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z";
    WF.c = {
      prefix: "fas",
      iconName: SF,
      icon: [448, 512, CF, AF, uF]
    }, WF.g = WF.c
  },
  6848: (FF, WF) => {
    var SF = "wrench",
      CF = [128295],
      AF = "f0ad",
      uF = "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z";
    WF.d = {
      prefix: "fas",
      iconName: SF,
      icon: [576, 512, CF, AF, uF]
    }, WF.h = WF.d
  },
  6862: (FF, WF, SF) => {
    var CF = SF(5809);
    WF.d = {
      prefix: CF.prefix,
      iconName: CF.iconName,
      icon: [CF.width, CF.height, CF.aliases, CF.unicode, CF.svgPathData]
    }, WF.h = WF.d, CF.prefix, CF.iconName, CF.width, CF.height, CF.aliases, CF.unicode, CF.svgPathData, CF.aliases
  },
  38720: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/JetBrainsMonoNL-ExtraBold.e920f8e3b489009b4837.woff2"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);