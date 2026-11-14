export const id = 73;
export const ids = [73];
export const modules = {
  39335: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      WorldCodeAiPanel: () => Ai,
      default: () => ui
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(971);

    function bW(FF) {
      let {
        title: WF,
        children: SF,
        isCalm: AF = !1,
        isElsewhere: bW = !1,
        defaultOpen: dF = !1,
        isOpen: PF,
        onToggle: RF,
        className: iW
      } = FF;
      const [eF, EF] = (0, CF.useState)(dF), QF = null !== PF && void 0 !== PF ? PF : eF;
      return (0, hF.jsxs)("div", {
        className: uF()("WorldCodeAiLog", AF && "WorldCodeAiLog-calm", bW && "WorldCodeAiLog-elsewhere", QF && "WorldCodeAiLog-open", iW),
        children: [(0, hF.jsxs)("button", {
          className: "WorldCodeAiLogToggle",
          "aria-expanded": QF,
          onClick: () => {
            void 0 === PF && EF(!QF), null === RF || void 0 === RF || RF(!QF)
          },
          children: [(0, hF.jsx)("span", {
            className: "WorldCodeAiLogChevron",
            "aria-hidden": "true",
            children: QF ? "\u25be" : "\u25b8"
          }), WF]
        }), QF && (0, hF.jsx)("div", {
          className: "WorldCodeAiLogBody",
          children: SF
        })]
      })
    }
    var dF = SF(1576),
      PF = SF(5470),
      RF = SF(1266),
      iW = SF(929),
      eF = SF(3733),
      EF = SF(35371),
      QF = SF(1421),
      rW = SF(3820),
      gW = SF(5462);
    const tW = new URL(QF.d).host;

    function TF(FF) {
      const WF = FF.trim();
      let SF;
      try {
        const FF = /^docs\//i.test(WF) ? `${QF.d}/` : `${QF.d}/docs/`,
          CF = WF.toLowerCase().replace(/^www\./, "").startsWith(`${tW}/`);
        SF = new URL(CF ? `https://${WF}` : WF, FF)
      } catch {
        return null
      }
      if ("https:" !== SF.protocol && "http:" !== SF.protocol || SF.host !== tW && SF.host !== `www.${tW}`) return null;
      const CF = SF.pathname.toLowerCase();
      return aW(CF) || null !== (0, rW.x)(CF) ? CF : (0, rW.w)(CF)
    }

    function aW(FF) {
      return FF === rW.j || FF === rW.l
    }

    function kW(FF) {
      const WF = TF(FF);
      return null === WF ? FF : `${QF.d}${WF}`
    }
    var qW = SF(617),
      VF = SF(39263),
      NF = SF.n(VF);

    function DF(FF) {
      const WF = [];
      let SF = 0;
      return FF.split("\n").forEach(((FF, CF) => {
        WF.push({
          text: FF,
          from: SF,
          index: CF
        }), SF += FF.length + 1
      })), WF
    }

    function LF(FF) {
      return FF.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
    }

    function mW(FF, WF, SF) {
      if (0 === WF.length) return null;
      let CF = null;
      for (let AF = 0; AF + WF.length <= FF.length; AF++) {
        if (WF.every(((WF, CF) => SF(FF[AF + CF].text) === WF))) {
          if (CF) return {
            ...CF,
            isOnly: !1
          };
          const SF = FF[AF + WF.length - 1];
          CF = {
            from: FF[AF].from,
            to: SF.from + SF.text.length
          }
        }
      }
      return CF ? {
        ...CF,
        isOnly: !0
      } : null
    }

    function OF(FF, WF) {
      if ("" === WF.trim()) return null;
      const SF = DF(FF),
        CF = function(FF) {
          return FF.split("\n").map((FF => FF.trim())).filter(((FF, WF, SF) => "" !== FF || WF > 0 && WF < SF.length - 1))
        }(WF),
        AF = mW(SF, CF, (FF => FF.trim()));
      if (null !== AF) return {
        from: AF.from,
        to: AF.to,
        isLoose: !AF.isOnly
      };
      const uF = FF => FF.trim().replace(/;+$/, ""),
        hF = mW(SF, CF.map(uF), uF);
      if (null !== hF) {
        const SF = FF.indexOf(WF),
          CF = -1 !== SF && (SF < hF.from || SF >= hF.to);
        return {
          from: hF.from,
          to: hF.to,
          isLoose: !hF.isOnly || CF
        }
      }
      const bW = FF.indexOf(WF);
      if (-1 !== bW) {
        var dF, PF, RF;
        const SF = /\w/.test(WF[0]) && /\w/.test(null !== (dF = FF[bW - 1]) && void 0 !== dF ? dF : "") || /\w/.test(null !== (PF = WF.at(-1)) && void 0 !== PF ? PF : "") && /\w/.test(null !== (RF = FF[bW + WF.length]) && void 0 !== RF ? RF : "");
        return {
          from: bW,
          to: bW + WF.length,
          isLoose: SF || -1 !== FF.indexOf(WF, bW + 1)
        }
      }
      const iW = WF.split("\n").map(LF).filter(Boolean),
        eF = mW(SF.filter((FF => "" !== LF(FF.text))), iW, LF);
      return null === eF ? null : {
        from: eF.from,
        to: eF.to,
        isLoose: !0
      }
    }

    function xW(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = /^[ \t]*/.exec(FF)) || void 0 === SF ? void 0 : SF[0]) && void 0 !== WF ? WF : ""
    }

    function ZF(FF, WF, SF, CF) {
      if (WF.from > 0 && "\n" !== FF[WF.from - 1]) return CF;
      const AF = FF.slice(WF.from, WF.to).split("\n").filter((FF => "" !== FF.trim())),
        uF = SF.split("\n").filter((FF => "" !== FF.trim()));
      if (0 === AF.length || 0 === uF.length) return CF;
      const hF = xW(AF[0]),
        bW = xW(uF[0]);
      if (hF === bW) return CF;
      const dF = uF.length > 1 && uF.length === AF.length && uF.slice(1).every(((FF, WF) => xW(FF) === xW(AF[WF + 1]))),
        PF = CF.split("\n"),
        RF = PF.findIndex((FF => "" !== FF.trim()));
      if (-1 === RF || xW(PF[RF]) === hF) return CF;
      let iW = !1;
      return PF.map(((FF, WF) => {
        var SF, CF;
        const AF = iW;
        return (null !== (SF = null === (CF = FF.replace(/\\`/g, "").match(/`/g)) || void 0 === CF ? void 0 : CF.length) && void 0 !== SF ? SF : 0) % 2 === 1 && (iW = !iW), AF || dF && WF !== RF ? FF : function(FF, WF, SF) {
          if ("" === FF.trim()) return FF;
          const CF = xW(FF);
          return CF.startsWith(WF) ? SF + FF.slice(WF.length) : WF.startsWith(CF) ? SF.slice(0, Math.max(0, SF.length - (WF.length - CF.length))) + FF.trimStart() : FF
        }(FF, bW, hF)
      })).join("\n")
    }

    function oF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const CF = new Map;
      for (const bW of FF.split("\n")) {
        const FF = bW.trim(),
          WF = FF.replace(/;$/, "");
        "" === WF || FF.endsWith(";") || CF.has(WF) || CF.set(WF, FF)
      }
      const AF = WF.split("\n");
      let uF = !1;
      const hF = AF.map(((FF, WF) => {
        var hF, bW, dF;
        const PF = uF;
        (null !== (hF = null === (bW = FF.replace(/\\`/g, "").match(/`/g)) || void 0 === bW ? void 0 : bW.length) && void 0 !== hF ? hF : 0) % 2 === 1 && (uF = !uF);
        const RF = FF.trim(),
          iW = CF.get(RF.replace(/;$/, ""));
        if (void 0 === iW || iW === RF || PF || uF) return FF;
        const eF = null !== (dF = AF.slice(WF + 1).find((FF => "" !== FF.trim()))) && void 0 !== dF ? dF : SF;
        return /^(?:[([`+-]|\/(?![/*]))/.test(eF.trim()) ? FF : FF.slice(0, FF.length - FF.trimStart().length) + iW
      })).join("\n");
      return hF.trim() === FF.trim() && WF.trim() !== FF.trim() ? WF : hF
    }

    function YF(FF) {
      var WF;
      return null !== (WF = FF.split("\n").find((FF => "" !== FF.trim()))) && void 0 !== WF ? WF : ""
    }

    function MF(FF, WF) {
      if (FF === WF) return 1;
      if (FF.length < 2 || WF.length < 2) return 0;
      const SF = new Map;
      for (let hF = 0; hF < FF.length - 1; hF++) {
        var CF;
        const WF = FF.slice(hF, hF + 2);
        SF.set(WF, (null !== (CF = SF.get(WF)) && void 0 !== CF ? CF : 0) + 1)
      }
      let AF = 0;
      for (let hF = 0; hF < WF.length - 1; hF++) {
        var uF;
        const FF = WF.slice(hF, hF + 2),
          CF = null !== (uF = SF.get(FF)) && void 0 !== uF ? uF : 0;
        CF > 0 && (SF.set(FF, CF - 1), AF++)
      }
      return 2 * AF / (FF.length + WF.length - 2)
    }

    function cW(FF, WF) {
      const SF = WF.split("\n").map(LF).filter(Boolean),
        CF = DF(FF).filter((FF => "" !== LF(FF.text)));
      if (0 === SF.length || 0 === CF.length) return null;
      const AF = Math.min(SF.length, CF.length);
      let uF = null;
      for (let bW = 0; bW + AF <= CF.length; bW++) {
        let FF = 0;
        for (let WF = 0; WF < AF; WF++) FF += MF(LF(CF[bW + WF].text), SF[WF]);
        FF /= SF.length, (null === uF || FF > uF.score) && (uF = {
          start: bW,
          score: FF
        })
      }
      if (null === uF || uF.score < .5) return null;
      const hF = CF.slice(uF.start, uF.start + AF);
      return {
        line: hF[0].index + 1,
        lastLine: hF[hF.length - 1].index + 1,
        text: hF.map((FF => FF.text.trim())).join("\n")
      }
    }

    function GF(FF) {
      return NF().isFunctionExpression(FF) || NF().isArrowFunction(FF)
    }

    function zW(FF) {
      return NF().isExpressionStatement(FF) && NF().isBinaryExpression(FF.expression) && NF().isPropertyAccessExpression(FF.expression.left) && ! function(FF) {
        return NF().isIdentifier(FF) && ("globalThis" === FF.text || "window" === FF.text || "self" === FF.text)
      }(FF.expression.left.expression)
    }

    function IF(FF, WF, SF) {
      let CF = SF;
      for (const uF of (null !== (AF = NF().getLeadingCommentRanges(FF, WF.getFullStart())) && void 0 !== AF ? AF : []).reverse()) {
        var AF;
        if (/\n[^\S\n]*\n/.test(FF.slice(uF.end, CF))) break;
        CF = uF.pos
      }
      return CF
    }

    function fF(FF) {
      var WF;
      const {
        parseDiagnostics: SF
      } = FF;
      return (null !== (WF = null === SF || void 0 === SF ? void 0 : SF.length) && void 0 !== WF ? WF : 0) > 0
    }

    function yW(FF) {
      const WF = NF().createSourceFile("worldCode.js", FF, NF().ScriptTarget.Latest, !1, NF().ScriptKind.JS),
        SF = [],
        CF = (AF, uF) => {
          const hF = function(FF) {
            var WF, SF;
            if (NF().isFunctionDeclaration(FF)) return null !== (WF = null === (SF = FF.name) || void 0 === SF ? void 0 : SF.text) && void 0 !== WF ? WF : null;
            if (NF().isVariableStatement(FF) && 1 === FF.declarationList.declarations.length) {
              const WF = FF.declarationList.declarations[0];
              return NF().isIdentifier(WF.name) && WF.initializer && GF(WF.initializer) ? WF.name.text : null
            }
            if (NF().isExpressionStatement(FF) && NF().isBinaryExpression(FF.expression) && FF.expression.operatorToken.kind === NF().SyntaxKind.EqualsToken && GF(FF.expression.right)) {
              const WF = FF.expression.left;
              return NF().isIdentifier(WF) ? WF.text : NF().isPropertyAccessExpression(WF) ? WF.name.text : null
            }
            return null
          }(AF);
          if (null !== hF) {
            const CF = AF.getStart(WF);
            SF.push({
              name: hF,
              from: CF,
              to: AF.getEnd(),
              commentFrom: IF(FF, AF, CF),
              topLevel: uF,
              isProperty: zW(AF)
            })
          }
          NF().forEachChild(AF, (FF => {
            CF(FF, !1)
          }))
        };
      for (const AF of WF.statements) CF(AF, !0);
      return {
        functions: SF,
        hasErrors: fF(WF)
      }
    }

    function sF(FF) {
      return yW(FF).functions
    }

    function nF(FF) {
      return FF.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
    }

    function HF(FF, WF) {
      var SF;
      const CF = FF.filter((FF => FF.name === WF)),
        AF = CF.filter((FF => !FF.isProperty)),
        uF = AF.length > 0 ? AF : CF;
      return null !== (SF = uF.find((FF => FF.topLevel))) && void 0 !== SF ? SF : uF[0]
    }

    function KF(FF, WF) {
      return "" === FF.trim() ? `${WF.trim()}\n` : `${FF.replace(/\s*$/,"")}\n\n${WF.trim()}\n`
    }

    function wF(FF, WF, SF) {
      var CF, AF;
      const uF = yW(FF),
        {
          functions: hF
        } = uF,
        bW = sF(SF),
        dF = null !== (CF = bW.find((FF => FF.topLevel && !FF.isProperty))) && void 0 !== CF ? CF : bW.find((FF => FF.topLevel)),
        PF = nF(WF),
        RF = dF ? HF(hF, dF.name) : void 0,
        iW = null !== (AF = void 0 !== RF && !bW.some((FF => FF.topLevel && FF.name === PF)) ? RF : HF(hF, PF)) && void 0 !== AF ? AF : RF;
      return iW ? XF(FF, uF, iW, bW, SF) : KF(FF, SF)
    }

    function XF(FF, WF, SF, CF, AF) {
      let {
        functions: uF,
        hasErrors: hF
      } = WF;
      const bW = uF.some((FF => FF.from > SF.from && FF.to <= SF.to && !CF.some((WF => WF.name === FF.name))));
      if (hF && bW) return null;
      const dF = /^\s*(?:\/\/|\/\*)/.test(AF) ? SF.commentFrom : SF.from;
      return FF.slice(0, dF) + oF(FF.slice(dF, SF.to), AF.trim(), YF(FF.slice(SF.to))) + FF.slice(SF.to)
    }

    function UF(FF, WF, SF, CF, AF) {
      const uF = CF.trim();
      if (uF.includes("\n") || !uF.endsWith("{")) return null;
      const hF = yW(FF),
        bW = hF.functions.find((CF => CF.topLevel && BF(FF, CF.from) <= WF && SF < CF.to && !FF.slice(CF.from, SF).includes("\n"))),
        dF = yW(AF),
        PF = dF.functions.filter((FF => FF.topLevel)),
        RF = !dF.hasErrors && (1 === PF.length || PF.some((FF => FF.name === (null === bW || void 0 === bW ? void 0 : bW.name)))),
        iW = 1 === PF.length && PF[0].name !== (null === bW || void 0 === bW ? void 0 : bW.name) ? PF[0].name : void 0,
        eF = void 0 === iW ? void 0 : hF.functions.find((FF => FF.topLevel && FF.name === iW));
      return bW && RF ? XF(FF, hF, null !== eF && void 0 !== eF ? eF : bW, dF.functions, AF) : function(FF, WF, SF, CF, AF) {
        const uF = NF().createSourceFile("worldCode.js", FF, NF().ScriptTarget.Latest, !0, NF().ScriptKind.JS),
          hF = uF.statements.find((CF => {
            const AF = CF.getStart(uF);
            return BF(FF, AF) <= WF && SF < CF.getEnd() && !FF.slice(AF, SF).includes("\n")
          })),
          bW = NF().createSourceFile("replace.js", AF.trim(), NF().ScriptTarget.Latest, !0, NF().ScriptKind.JS),
          dF = 1 === bW.statements.length ? bW.statements[0] : void 0;
        if (!hF || !dF || fF(bW) || dF.kind !== hF.kind || !dF.getText(bW).startsWith(CF)) return null;
        const PF = hF.getStart(uF);
        return FF.slice(0, PF) + AF.trim() + FF.slice(hF.getEnd())
      }(FF, WF, SF, uF, AF)
    }

    function BF(FF, WF) {
      let SF = WF;
      for (; SF > 0 && (" " === FF[SF - 1] || "\t" === FF[SF - 1]);) SF--;
      return 0 === SF || "\n" === FF[SF - 1] ? SF : WF
    }

    function jW(FF, WF, SF) {
      const CF = WF.trim().toLowerCase();
      if ("" !== FF.trim() && ("top" === CF || "start" === CF)) return `${SF.trim()}\n\n${FF.replace(/^\s+/,"")}`;
      const AF = "end" === CF ? void 0 : HF(sF(FF), nF(WF));
      return AF ? `${FF.slice(0,AF.to)}\n\n${SF.trim()}${FF.slice(AF.to)}` : KF(FF, SF)
    }

    function vW(FF) {
      return [...new Set(sF(FF).filter((FF => FF.topLevel)).map((FF => FF.name)))]
    }
    const JF = 120,
      pF = /\b(?:my|his|her|their)\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\b(?:i am|i'm)\s+\d+\b|\b\d+\s+years?\s+old\b|\be-?mail\b|\bphone number\b|\bpassword\b|\bwhere (?:i|we) live\b/i;

    function lF(FF) {
      let WF = FF.replace(/\s+/g, " ").trim();
      if ("" === WF || pF.test(WF)) return null;
      if (WF.length > JF) {
        const FF = WF.slice(0, JF);
        WF = `${FF.slice(0,Math.max(FF.lastIndexOf(" "),60)).trimEnd()}\u2026`
      }
      return WF.charAt(0).toUpperCase() + WF.slice(1)
    }
    const FW = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;

    function WW(FF) {
      var WF, SF;
      const CF = null === (WF = /\(([^)]*)\)/.exec(FF)) || void 0 === WF || null === (SF = WF[1].split(",")[1]) || void 0 === SF ? void 0 : SF.trim();
      return CF && /^[A-Za-z_$][\w$]*$/.test(CF) ? [...FF.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((FF => FF[2].split(",").some((FF => FF.trim() === CF)) ? [FF[1]] : [])) : []
    }

    function SW(FF, WF) {
      const SF = new Set,
        CF = new Set,
        AF = new Set,
        uF = Object.values(FF).map((FF => {
          const WF = sF(FF),
            SF = WF.filter((FF => "playerCommand" === FF.name)).map((WF => FF.slice(WF.from, WF.to)));
          return {
            text: FF,
            found: WF,
            own: SF
          }
        })),
        hF = new Set(uF.flatMap((FF => {
          let {
            own: WF
          } = FF;
          return WF.flatMap(WW)
        })));
      for (const {
          text: dF,
          found: PF,
          own: RF
        }
        of uF) {
        for (const AF of vW(dF)) WF.has(AF) ? SF.add(AF) : CF.add(AF);
        const FF = [...RF, ...PF.filter((FF => "playerCommand" !== FF.name && hF.has(FF.name))).map((FF => dF.slice(FF.from, FF.to)))],
          uF = FF.length > 0 || !/\bplayerCommand\b/.test(dF) ? FF : [dF];
        for (const WF of uF)
          for (const FF of WF.matchAll(FW)) AF.add(`/${FF[1].split(/\s/)[0]}`)
      }
      const bW = FF => [...FF].slice(0, 12);
      return {
        callbacks: bW(SF),
        commands: bW(AF),
        functions: bW(CF)
      }
    }
    const CW = {
      onPlayerJoin: "When a player joins",
      onPlayerLeave: "When a player leaves",
      onPlayerChat: "When a player chats",
      playerCommand: "When a player types a /command",
      lF: "Runs all the time",
      onPlayerJump: "When a player jumps",
      onPlayerClick: "When a player clicks",
      onPlayerAttack: "When a player attacks",
      onPlayerChangeBlock: "When a player changes a block",
      onPlayerAttemptChangeBlock: "Before a player changes a block",
      onPlayerDamagingOtherPlayer: "When a player hits another player",
      onPlayerKilledOtherPlayer: "When a player defeats another player",
      onPlayerDamagingMob: "When a player hits a mob",
      onPlayerKilledMob: "When a player defeats a mob",
      onMobDamagingPlayer: "When a mob hits a player",
      onMobKilledPlayer: "When a mob defeats a player",
      onRespawnRequest: "When a player respawns",
      onPlayerPickedUpItem: "When a player picks something up",
      onPlayerDropItem: "When a player drops something",
      onPlayerBoughtShopItem: "When a player buys from the shop",
      onPlayerCraft: "When a player crafts",
      onPlayerOpenedChest: "When a player opens a chest",
      onPlayerSelectInventorySlot: "When a player picks a hotbar slot",
      onBlockStand: "While a player stands on a block",
      onPlayerPressedButton: "When a player presses a button",
      onWorldChangeBlock: "When a block changes",
      onClose: "When the game closes",
      doPeriodicSave: "When the game saves"
    };

    function AW(FF) {
      const WF = CW[FF];
      if (WF) return WF;
      return `When: ${FF.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
    }

    function uW(FF) {
      return Array.isArray(FF) && FF.every((FF => "string" === typeof FF))
    }
    const hW = /\b(?:game|minigame|tycoon|rpg|simulator|obby|shop|store|upgrades?|levels?|rounds?|teams?|quests?|leaderboards?|lobby|economy|inventory|bosse?s?|waves?|missions?)\b/gi,
      bS = /,|\band\b|\bthen\b|\bplus\b|\bwith\b|\balso\b/gi;

    function dW(FF) {
      var WF, SF;
      const CF = FF.trim().split(/\s+/).length,
        AF = new Set((null !== (WF = FF.match(hW)) && void 0 !== WF ? WF : []).map((FF => FF.toLowerCase().replace(/s$/, "")))).size,
        uF = (null !== (SF = FF.match(bS)) && void 0 !== SF ? SF : []).length;
      return AF >= 2 && uF >= 2 || CF >= 30 && uF >= 3
    }

    function PW(FF) {
      const WF = FF.split(/\n|\|/).map((FF => FF.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((FF => "" !== FF)).slice(0, 5).map((FF => FF.length > 90 ? `${FF.slice(0,89).trimEnd()}\u2026` : FF));
      return WF.length >= 2 ? WF : []
    }
    var RW = SF(3869);

    function iS(FF) {
      return FF.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
    }

    function eW(FF) {
      const WF = new Set;
      for (const SF of FF.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) WF.add(SF[1]);
      for (const SF of FF.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) WF.add(SF[1]);
      return [...WF]
    }

    function EW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const CF = new Set(WF),
        AF = new Map;
      for (const iW of WF) {
        var uF;
        const FF = iS(iW);
        AF.set(FF, [...null !== (uF = AF.get(FF)) && void 0 !== uF ? uF : [], iW])
      }
      const hF = eW(FF),
        bW = new Set(eW(SF)),
        dF = [];
      let PF = FF;
      for (const iW of hF) {
        var RF;
        if (CF.has(iW) || bW.has(iW) || !/^(on|player)[A-Z]/.test(iW)) continue;
        const FF = null !== (RF = AF.get(iS(iW))) && void 0 !== RF ? RF : [];
        1 !== FF.length || hF.includes(FF[0]) || (PF = (0, RW.w)(PF, new RegExp(`${iW}(?![\\w$])`, "g"), RW.o, (() => FF[0])), dF.push({
          from: iW,
          to: FF[0]
        }))
      }
      return {
        code: PF,
        renames: dF
      }
    }
    const QW = {
        functions: "api",
        callbacks: "callback",
        "client options": "clientOption"
      },
      rS = Object.keys(QW).map((FF => `"${FF}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
      gS = {
        type: "string",
        description: "A few plain words for the creator on what this change does, under 80 characters"
      },
      tS = {
        readOnlyHint: !0,
        destructiveHint: !1,
        idempotentHint: !0,
        openWorldHint: !1
      },
      TW = [{
        name: "write_file",
        title: "Write a file",
        description: "Replaces a file with new code, or makes a new file",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            why: gS,
            content: {
              type: "string",
              description: "The whole new file"
            }
          },
          required: ["path", "content"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "edit_file",
        title: "Change part of a file",
        description: "Changes one part of a file: the lines in search become the lines in replace",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            why: gS,
            search: {
              type: "string",
              description: "Lines to find, copied exactly from the current file"
            },
            replace: {
              type: "string",
              description: "Lines to put instead"
            }
          },
          required: ["path", "search", "replace"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !1,
          openWorldHint: !1
        }
      }, {
        name: "replace_function",
        title: "Replace a function",
        description: "Replaces one whole function or callback, found by its name, with new code; adds it at the end when the file has none by that name",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            name: {
              type: "string",
              description: "The function's or callback's name, e.g. onPlayerJoin"
            },
            why: gS,
            code: {
              type: "string",
              description: "The whole new function"
            }
          },
          required: ["path", "name", "code"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "insert_code",
        title: "Add new code",
        description: "Adds new code to a file without changing any code already there",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            after: {
              type: "string",
              description: 'Where it goes: "top", "end", or the name of the function to put it after'
            },
            why: gS,
            code: {
              type: "string",
              description: "Only the new code"
            }
          },
          required: ["path", "after", "code"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !1,
          openWorldHint: !1
        }
      }, {
        name: "use_prefab",
        title: "Use a ready-made game",
        description: "Puts a prefab (ready-made, tested code for a game or a feature) into a file, with its settings filled in. The code goes in by itself and fits around the code already there",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The prefab's name, e.g. parkour"
            },
            settings: {
              type: "string",
              description: 'The settings to change, one per line as key: value, e.g. finishBlock: "Block of Gold"'
            },
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            why: gS
          },
          required: ["name"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "add_world_code",
        title: "Add to World Code",
        description: "For a code block: the part of the request that needs World Code, which the creator adds there",
        inputSchema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "Only the World Code to add"
            }
          },
          required: ["code"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "edit_code_in_place",
        title: "Change my code now",
        description: "Changes one part of the code open in the editor straight away, as the Apply button does: the lines in search become the lines in replace",
        inputSchema: {
          type: "object",
          properties: {
            why: gS,
            search: {
              type: "string",
              description: "Lines to find, copied exactly from the open code"
            },
            replace: {
              type: "string",
              description: "Lines to put instead"
            }
          },
          required: ["search", "replace"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !1,
          openWorldHint: !1
        },
        _meta: {
          appliesAtOnce: !0
        }
      }, {
        name: "export_game",
        title: "Save my game",
        description: "Saves the world and its code as the creator's custom game, by sending //export in chat. Only this call saves: an answer that says it saved without it saves nothing",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "switch_to_world_code",
        title: "Go to World Code",
        description: "For a code block: closes it and opens World Code, with a request waiting in World Code's AI Helper",
        inputSchema: {
          type: "object",
          properties: {
            request: {
              type: "string",
              description: "What to ask there; left out, it asks to add the answer's World Code part"
            }
          },
          required: []
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "ask_creator",
        title: "Ask you a question",
        description: "Asks the creator one multiple-choice question instead of changing code, only when the request is too unclear to build anything sensible. Never asks for personal details",
        inputSchema: {
          type: "object",
          properties: {
            question: {
              type: "string",
              description: "One short question"
            },
            choices: {
              type: "string",
              description: "2 to 4 short answers, one per line"
            },
            allow_other: {
              type: "string",
              description: '"true" to let them type their own answer too, "false" if the choices are all there is'
            }
          },
          required: ["question", "choices"]
        },
        annotations: {
          readOnlyHint: !0,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "plan",
        title: "Plan a big request in steps",
        description: "Splits a big request into 2 to 5 small steps instead of building it all at once. The creator builds and tries them one at a time. Writes no code: never in the same answer as a change",
        inputSchema: {
          type: "object",
          properties: {
            steps: {
              type: "string",
              description: "2 to 5 short steps, one per line, each small enough to build and try on its own"
            }
          },
          required: ["steps"]
        },
        annotations: {
          readOnlyHint: !0,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "remember",
        title: "Remember something about your game",
        description: "Suggests one short note about the creator's game (its idea, rules, or names in it) to keep in AI notes, which goes with every later request. The creator says yes or no before it is kept. Never personal details",
        inputSchema: {
          type: "object",
          properties: {
            note: {
              type: "string",
              description: "One short sentence about the game, under 120 characters"
            }
          },
          required: ["note"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "view_file",
        title: "Look at a file",
        description: "Shows the whole code of one of the creator's files, from the list of their files. Look at a file before changing it",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. shop.js"
            }
          },
          required: ["path"]
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_world_code",
        title: "Look at World Code",
        description: "For a code block: shows every World Code file, so the answer can change World Code itself",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_chunk",
        title: "Look at blocks in the world",
        description: "Shows the blocks in one 32 by 32 by 32 chunk of the world, layer by layer, and where the player is. Only chunks near the player can be seen",
        inputSchema: {
          type: "object",
          properties: {
            position: {
              type: "string",
              description: 'Any "x y z" in the chunk; left out, the chunk the player is in'
            }
          },
          required: []
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_game_state",
        title: "Look at the game",
        description: "Shows what the creator sees in their world now: where they stand, their health, creative mode, what they hold and their inventory, and the players and mobs near them",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "fetch_url",
        title: "Read a docs page",
        description: `Reads a page of Bloxd's docs as Markdown. ${rW.k} lists every page with its link; then read the page, or the part of a long page, you need`,
        inputSchema: {
          type: "object",
          properties: {
            url: {
              type: "string",
              description: `${rW.k}, or a page it links to`
            }
          },
          required: ["url"]
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "get_docs",
        title: "Read the docs",
        description: "Lists every api method, callback or client option, a line each, or shows the full docs of one of them: its arguments, what it returns and an example",
        inputSchema: {
          type: "object",
          properties: {
            list: {
              type: "string",
              description: `${rS}, to list every one of them`
            },
            name: {
              type: "string",
              description: "One exact name to show in full, e.g. setClientOption, onPlayerJoin or RightInfoText"
            }
          },
          required: []
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "find_names",
        title: "Look up block and item names",
        description: "Finds the exact block, item and mob names that match some words",
        inputSchema: {
          type: "object",
          properties: {
            words: {
              type: "string",
              description: "A few words, e.g. gold sword"
            }
          },
          required: ["words"]
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "list_prefabs",
        title: "Look at ready-made games",
        description: "Lists the prefabs (ready-made games and features) of one kind of game, with their settings, and the ready-made functions for it",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "The kind of game, e.g. pvp; left out, every prefab"
            }
          },
          required: []
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_prefab",
        title: "Look at a ready-made game",
        description: "Shows one prefab in full: how it plays, every setting with its default, and the functions to replace by name to change it",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The prefab's name, e.g. parkour"
            }
          },
          required: ["name"]
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_errors",
        title: "Look at errors",
        description: "Shows every error their world showed recently, not only the newest few",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: tS,
        _meta: {
          isLookup: !0
        }
      }];

    function aS(FF) {
      var WF;
      return !0 === (null === (WF = kS(FF)._meta) || void 0 === WF ? void 0 : WF.isLookup)
    }

    function kS(FF) {
      const WF = TW.find((WF => WF.name === FF));
      if (!WF) throw new Error(`No AI Helper tool ${FF}`);
      return WF
    }
    const qS = /^(?=[\s\S]{200})[^\n]*(?:\\n[^\n]*){3}$/,
      VW = new Set(["content", "code"]);

    function NW(FF) {
      const WF = "string" === typeof FF ? FF.split(/[./:]/).pop() : void 0;
      return function(FF) {
        return TW.some((WF => WF.name === FF))
      }(WF) ? WF : null
    }

    function DW(FF, WF) {
      return SF => {
        const CF = [];
        for (const uF of SF.matchAll(FF)) {
          const FF = NW(uF[1]);
          if (null === FF) continue;
          const SF = {};
          for (const CF of uF[2].matchAll(WF)) {
            var AF;
            SF[null !== (AF = CF[1]) && void 0 !== AF ? AF : CF[2]] = CF[3]
          }
          CF.push({
            call: {
              name: FF,
              args: SF,
              source: uF[0]
            },
            index: uF.index
          })
        }
        return CF
      }
    }

    function LW(FF) {
      return FF.replace(/\\(["\\nt])/g, ((FF, WF) => "n" === WF ? "\n" : "t" === WF ? "\t" : WF))
    }

    function mS(FF) {
      let WF = null !== FF && void 0 !== FF ? FF : {};
      if ("string" === typeof WF) try {
        WF = JSON.parse("" === WF ? "{}" : WF)
      } catch {
        return null
      }
      if ("object" !== typeof WF || null === WF) return null;
      const SF = {};
      for (const [CF, AF] of Object.entries(WF)) "string" === typeof AF ? SF[CF] = VW.has(CF) && qS.test(AF) && !AF.includes("\n") ? LW(AF) : AF : "boolean" === typeof AF || "number" === typeof AF ? SF[CF] = String(AF) : "object" !== typeof AF || null === AF || Array.isArray(AF) ? Array.isArray(AF) && AF.every((FF => "string" === typeof FF)) && (SF[CF] = AF.join("\n")) : SF[CF] = JSON.stringify(AF);
      return SF
    }

    function OW(FF, WF) {
      let SF = 0,
        CF = !1;
      for (let AF = WF; AF < FF.length; AF++) {
        const WF = FF[AF];
        if (CF) "\\" === WF ? AF++ : '"' === WF && (CF = !1);
        else if ('"' === WF) CF = !0;
        else if ("{" === WF) SF++;
        else if ("}" === WF && (SF--, 0 === SF)) return AF + 1
      }
      return null
    }

    function xS(FF, WF) {
      let SF = FF;
      for (const {
          call: CF,
          index: AF
        }
        of WF) SF = SF.slice(0, AF) + " ".repeat(CF.source.length) + SF.slice(AF + CF.source.length);
      return SF
    }
    const ZW = new RegExp(`\\b(${TW.map((FF=>FF.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
    const oW = {
        formatCall: (FF, WF) => {
          const SF = Object.fromEntries(Object.entries(WF).filter((FF => {
            let [, WF] = FF;
            return void 0 !== WF
          })));
          return `${FF}(${JSON.stringify(SF)})`
        },
        declareTools: FF => FF,
        callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
        fileResult: (FF, WF, SF) => `<file path="${FF}"${SF?' open_in_editor="true"':""}>\n${WF}\n</file>`,
        editFailure: (FF, WF) => `${FF} failed: ${WF}`,
        lookupResult: (FF, WF, SF) => `${FF} ${WF}:\n${SF}`
      },
      YW = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;

    function MW(FF) {
      const WF = [];
      for (const AF of FF.matchAll(YW)) {
        const uF = NW(AF[1]),
          hF = AF.index + AF[0].length,
          bW = OW(FF, hF),
          dF = null === bW ? null : mS(FF.slice(hF, bW));
        if (null !== uF && null !== bW && null !== dF) {
          var SF, CF;
          const hF = null !== (SF = null === (CF = FF.slice(bW).match(/^\s*<\|call\|>/)) || void 0 === CF ? void 0 : CF[0]) && void 0 !== SF ? SF : "";
          WF.push({
            call: {
              name: uF,
              args: dF,
              source: FF.slice(AF.index, bW + hF.length)
            },
            index: AF.index
          })
        }
      }
      return WF
    }

    function cS(FF) {
      var WF, SF, CF, AF;
      let uF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if ("object" !== typeof FF || null === FF) return [];
      const hF = FF;
      if (Array.isArray(hF.tool_calls)) return hF.tool_calls.flatMap((FF => cS(FF, !0)));
      if (void 0 !== hF.tool_call) return cS(hF.tool_call, !0);
      if (void 0 !== hF.function) return cS(hF.function, !0);
      const bW = NW(hF.tool);
      if (null !== bW && void 0 === hF.arguments && void 0 === hF.args) {
        const {
          tool: FF,
          ...WF
        } = hF, SF = mS(WF);
        return null === SF ? [] : [{
          name: bW,
          args: SF
        }]
      }
      const dF = null !== (WF = null !== (SF = null !== (CF = null !== (AF = hF.arguments) && void 0 !== AF ? AF : hF.params) && void 0 !== CF ? CF : hF.param) && void 0 !== SF ? SF : hF.args) && void 0 !== WF ? WF : hF.input;
      if (!uF && void 0 === dF) return [];
      const PF = NW(hF.name),
        RF = mS(dF);
      return null === PF || null === RF ? [] : [{
        name: PF,
        args: RF
      }]
    }

    function GW(FF) {
      const WF = [];
      let SF = FF.indexOf("{");
      for (; - 1 !== SF;) {
        const CF = OW(FF, SF);
        let AF = [];
        if (null !== CF) try {
          AF = cS(JSON.parse(FF.slice(SF, CF)))
        } catch {}
        if (null !== CF && AF.length > 0) {
          const uF = FF.slice(SF, CF);
          WF.push(...AF.map((FF => ({
            call: {
              ...FF,
              source: uF
            },
            index: SF
          })))), SF = FF.indexOf("{", CF)
        } else SF = FF.indexOf("{", SF + 1)
      }
      return WF
    }

    function zS(FF) {
      if (Array.isArray(FF)) return `[${FF.map(zS).join(", ")}]`;
      if ("object" === typeof FF && null !== FF) {
        return `{${Object.entries(FF).map((FF=>{let[WF,SF]=FF;return`${JSON.stringify(WF)}: ${zS(SF)}`})).join(", ")}}`
      }
      return JSON.stringify(FF)
    }
    const IW = {
        formatCall: (FF, WF) => `<tool_call>\n<function=${FF}>\n${Object.entries(WF).flatMap((FF=>{let[WF,SF]=FF;return void 0===SF?[]:[`<parameter=${WF}>\n${SF}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
        declareTools: (FF, WF, SF) => SF || 0 === WF.length ? FF : `${function(FF){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${FF.map((FF=>`\n${zS({type:"function",function:{name:FF.name,description:FF.description,parameters:FF.inputSchema}})}`)).join("")}\n</tools>\n\nIf you choose to call a function ONLY reply in the following format with NO suffix:\n\n<tool_call>\n<function=example_function_name>\n<parameter=example_parameter_1>\nvalue_1\n</parameter>\n<parameter=example_parameter_2>\nThis is the value for the second parameter\nthat can span\nmultiple lines\n</parameter>\n</function>\n</tool_call>\n\n<IMPORTANT>\nReminder:\n- Function calls MUST follow the specified format: an inner <function=...></function> block must be nested within <tool_call></tool_call> XML tags\n- Required parameters MUST be specified\n- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after\n- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls\n</IMPORTANT>`}(WF)}\n\n${FF}`,
        callStyle: "Write each call in your answer as a <tool_call> holding a <function=name> block with a <parameter=name> for each argument, the code inside as it is, not escaped and in full: never as JSON or inside a code fence.",
        fileResult: (FF, WF, SF) => `<tool_response>\nview_file ${FF}${SF?" (open in the editor)":""}:\n${WF}\n</tool_response>`,
        editFailure: (FF, WF) => `<tool_response>\nError: ${WF}\n</tool_response>`,
        lookupResult: (FF, WF, SF) => `<tool_response>\n${FF} ${WF}:\n${SF}\n</tool_response>`
      },
      fW = DW(/(?:<tool_call>\s*)?<function=([\w.:/-]+)>((?:(?!<tool_call\b|<function=)[\s\S])*?(?:<\/parameter>(?=\s*(?:<tool_call\b|<function=|$))|(?=<\/function>|<\/tool_call>)))(?:<\/function>(?:\s*<\/tool_call>)?|<\/tool_call>|\s*(?=<tool_call\b|<function=|$))/g, /<parameter(?:=([\w-]+)|\s+name\s*=\s*"([^"]+)")\s*>\n?([\s\S]*?)(?:\n?<\/parameter>|(?=<parameter[=\s])|\n?$)/g),
      yS = new Set(["path", "why", "name", "after", "question", "allow_other", "note"]),
      sW = {
        formatCall: (FF, WF) => `<tool_call name="${FF}">\n${Object.entries(WF).flatMap((FF=>{let[WF,SF]=FF;return void 0===SF?[]:[`<param name="${WF}">${yS.has(WF)?SF:`\n${SF}\n`}</param>\n`]})).join("")}</tool_call>`,
        declareTools: FF => FF,
        callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
        fileResult: (FF, WF, SF) => `<tool_result name="view_file" path="${FF}"${SF?' open_in_editor="true"':""}>\n${WF}\n</tool_result>`,
        editFailure: (FF, WF) => `<tool_result name="${FF}" is_error="true">\n${WF}\n</tool_result>`,
        lookupResult: (FF, WF, SF) => `<tool_result name="${FF}" about="${WF.replace(/"/g,"'")}">\n${SF}\n</tool_result>`
      },
      nW = DW(/<tool_call\s+name\s*=\s*"([^"]+)"\s*>((?:(?!<tool_call\b)[\s\S])*?(?:<\/param(?:eter)?>(?=\s*(?:<tool_call\b|$))|(?=<\/(?:tool_call|invoke|function)>)))(?:<\/(?:tool_call|invoke|function)>|\s*(?=<tool_call\b|$))/g, /<param(?:eter)?(?:\s+name\s*=\s*"([^"]+)"|=([\w-]+))\s*>\n?([\s\S]*?)\n?<\/param(?:eter)?>/g),
      HW = {
        simple: sW,
        qwenXml: IW,
        deepseek: oW
      },
      KW = {
        simple: nW,
        qwenXml: fW,
        deepseek: function(FF) {
          const WF = [];
          for (const bW of FF.matchAll(ZW)) {
            var SF, CF, AF, uF, hF;
            const dF = NW(bW[1]),
              PF = bW.index + bW[0].length,
              RF = OW(FF, PF);
            if (null === dF || null === RF || (null !== (SF = null === (CF = WF.at(-1)) || void 0 === CF ? void 0 : CF.index) && void 0 !== SF ? SF : -1) + (null !== (AF = null === (uF = WF.at(-1)) || void 0 === uF ? void 0 : uF.call.source.length) && void 0 !== AF ? AF : 0) > bW.index) continue;
            const iW = mS(FF.slice(PF, RF));
            if (null === iW) continue;
            const eF = /^\s*\)/.exec(FF.slice(RF)),
              EF = FF.slice(bW.index, RF + (null !== (hF = null === eF || void 0 === eF ? void 0 : eF[0].length) && void 0 !== hF ? hF : 0));
            WF.push({
              call: {
                name: dF,
                args: iW,
                source: EF
              },
              index: bW.index
            })
          }
          return WF
        }
      },
      wW = ["simple", "qwenXml"];

    function XW(FF) {
      return "deepseek" === FF ? "simple" : FF
    }
    const UW = /<\|[a-z_]+\|>/g,
      BW = /^[ \t]*`{1,2}[ \t]*$/gm,
      jS = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
      vS = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
      JW = /```[\w-]*/g,
      pW = /^[\s[\],]*$/,
      lW = {
        use_prefab: 0,
        add_world_code: 1,
        write_file: 2,
        edit_file: 3,
        replace_function: 4,
        insert_code: 5,
        edit_code_in_place: 6,
        export_game: 7,
        switch_to_world_code: 8,
        ask_creator: 9,
        plan: 10,
        remember: 11,
        view_file: 12,
        view_world_code: 13,
        view_chunk: 14,
        view_game_state: 15,
        fetch_url: 16,
        get_docs: 17,
        find_names: 18,
        view_errors: 19,
        list_prefabs: 20,
        view_prefab: 21
      };

    function FS(FF) {
      return kS(FF.name).inputSchema.required.every((WF => void 0 !== FF.args[WF]))
    }

    function WS(FF, WF) {
      const SF = NW(FF),
        CF = mS(WF);
      return null === SF || null === CF ? null : {
        name: SF,
        args: CF
      }
    }

    function SS(FF, WF) {
      const SF = [];
      for (const CF of function(FF) {
          const WF = XW(FF),
            SF = wW.filter((FF => FF !== WF));
          return [KW[WF], ...FF === WF ? [] : [KW[FF]], ...SF.map((FF => KW[FF])), MW, GW]
        }(WF)) SF.push(...CF(xS(FF, SF)));
      return SF.map((FF => {
        let {
          call: WF
        } = FF;
        return WF
      }))
    }

    function CS(FF, WF) {
      return SS(FF, WF).sort(((FF, WF) => lW[FF.name] - lW[WF.name]))
    }

    function AS(FF) {
      return function(FF) {
        const WF = [...FF.matchAll(JW)],
          SF = [];
        let CF = 0;
        for (; CF < WF.length;) {
          const AF = WF[CF],
            uF = WF.at(CF + 1);
          void 0 !== uF && "```" === uF[0] ? (pW.test(FF.slice(AF.index + AF[0].length, uF.index)) && SF.push({
            from: AF.index,
            to: uF.index + uF[0].length
          }), CF += 2) : (SF.push({
            from: AF.index,
            to: AF.index + AF[0].length
          }), CF++)
        }
        let AF = FF;
        for (const {
            from: uF,
            to: hF
          }
          of SF.reverse()) AF = AF.slice(0, uF) + AF.slice(hF);
        return AF
      }(FF.replace(UW, "").replace(BW, "").replace(jS, "").replace(vS, ""))
    }

    function uS(FF) {
      return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(FF)
    }
    const hS = new Set(["lF", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
      bC = {
        playerCommand: {
          stopsWhen: FF => `${FF} !== undefined && ${FF} !== false`,
          passedOn: !1
        },
        onPlayerChat: {
          stopsWhen: FF => `${FF} === false || ${FF} === null`,
          passedOn: !0
        },
        onPlayerDamagingOtherPlayer: {
          stopsWhen: FF => `${FF} === "preventDamage"`,
          passedOn: !0
        }
      };

    function dS(FF) {
      var WF;
      const SF = NF().createSourceFile("worldCode.js", FF, NF().ScriptTarget.Latest, !0, NF().ScriptKind.JS),
        {
          parseDiagnostics: CF
        } = SF;
      return {
        file: SF,
        hasErrors: (null !== (WF = null === CF || void 0 === CF ? void 0 : CF.length) && void 0 !== WF ? WF : 0) > 0
      }
    }

    function PS(FF) {
      return void 0 !== FF && (NF().isFunctionExpression(FF) || NF().isArrowFunction(FF))
    }

    function RS(FF) {
      if (NF().isFunctionDeclaration(FF) && FF.name) return {
        bA: FF,
        nameNode: FF.name
      };
      if (NF().isVariableStatement(FF) && 1 === FF.declarationList.declarations.length) {
        const WF = FF.declarationList.declarations[0],
          SF = WF.initializer && iC(WF.initializer);
        if (NF().isIdentifier(WF.name) && PS(SF)) return {
          bA: SF,
          nameNode: WF.name
        }
      }
      const WF = eS(FF),
        SF = WF && iC(WF.value);
      return WF && PS(SF) ? {
        bA: SF,
        nameNode: WF.name
      } : null
    }

    function iC(FF) {
      return NF().isParenthesizedExpression(FF) ? iC(FF.expression) : FF
    }

    function eS(FF) {
      return NF().isExpressionStatement(FF) && NF().isBinaryExpression(FF.expression) && FF.expression.operatorToken.kind === NF().SyntaxKind.EqualsToken && NF().isIdentifier(FF.expression.left) ? {
        name: FF.expression.left,
        value: FF.expression.right
      } : null
    }

    function ES(FF) {
      return NF().isIdentifier(FF) ? [FF.text] : FF.elements.flatMap((FF => NF().isOmittedExpression(FF) ? [] : ES(FF.name)))
    }

    function QS(FF) {
      if (!NF().isVariableStatement(FF)) return null;
      const WF = FF.declarationList.declarations.find((FF => NF().isIdentifier(FF.name) && "CONFIG" === FF.name.text));
      return null !== WF && void 0 !== WF && WF.initializer && NF().isObjectLiteralExpression(WF.initializer) ? WF.initializer : null
    }

    function rC(FF, WF) {
      return WF.statements.map((SF => {
        var CF;
        const AF = function(FF, WF, SF) {
            let CF = SF.getStart(WF);
            for (const uF of (null !== (AF = NF().getLeadingCommentRanges(FF, SF.getFullStart())) && void 0 !== AF ? AF : []).reverse()) {
              var AF;
              if (/\n[^\S\n]*\n/.test(FF.slice(uF.end, CF))) break;
              CF = uF.pos
            }
            return CF
          }(FF, WF, SF),
          uF = RS(SF);
        if (null !== uF && void 0 !== uF && uF.nameNode) {
          const FF = uF.nameNode.text;
          return {
            kind: uS(FF) ? "callback" : "function",
            names: [FF],
            from: AF,
            to: SF.getEnd(),
            node: SF
          }
        }
        const hF = NF().isVariableStatement(SF) ? SF.declarationList.declarations.flatMap((FF => ES(FF.name))) : [];
        if (QS(SF)) {
          return {
            kind: "config",
            names: ["CONFIG", ...hF.filter((FF => "CONFIG" !== FF))],
            from: AF,
            to: SF.getEnd(),
            node: SF
          }
        }
        if (NF().isVariableStatement(SF)) return {
          kind: "variable",
          names: hF,
          from: AF,
          to: SF.getEnd(),
          node: SF
        };
        if (NF().isClassDeclaration(SF) && SF.name) return {
          kind: "function",
          names: [SF.name.text],
          from: AF,
          to: SF.getEnd(),
          node: SF
        };
        const bW = null === (CF = eS(SF)) || void 0 === CF ? void 0 : CF.name.text;
        return {
          kind: "other",
          names: void 0 !== bW && uS(bW) ? [bW] : [],
          from: AF,
          to: SF.getEnd(),
          node: SF
        }
      }))
    }

    function gC(FF) {
      if (!NF().isPropertyAssignment(FF) && !NF().isShorthandPropertyAssignment(FF)) return null;
      const WF = FF.name;
      return NF().isIdentifier(WF) || NF().isStringLiteral(WF) ? WF.text : null
    }

    function tC(FF, WF) {
      return FF.lastIndexOf("\n", WF - 1) + 1
    }

    function TS(FF, WF) {
      var SF, CF;
      const AF = FF.slice(tC(FF, WF), WF);
      return /^\s*$/.test(AF) ? AF : `${null!==(SF=null===(CF=/^\s*/.exec(AF))||void 0===CF?void 0:CF[0])&&void 0!==SF?SF:""}\t`
    }

    function aC(FF, WF, SF) {
      const CF = FF.slice(tC(FF, WF.getStart(SF)), function(FF, WF) {
          const SF = FF.indexOf("\n", WF);
          return -1 === SF ? FF.length : SF
        }(FF, WF.getEnd())),
        AF = CF.trim(),
        uF = /^[\w$"']+\s*:/.test(AF) && "" === FF.slice(tC(FF, WF.getStart(SF)), WF.getStart(SF)).trim() ? CF.replace(/^\s*/, "\t") : `\t${WF.getText(SF)},`;
      return /,\s*(?:\/\/.*)?$/.test(uF) ? uF : uF.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
    }

    function kC(FF, WF) {
      let SF = FF;
      for (const CF of [...WF].sort(((FF, WF) => WF.from - FF.from))) SF = SF.slice(0, CF.from) + CF.text + SF.slice(CF.to);
      return SF
    }

    function qC(FF) {
      return FF.charAt(0).toUpperCase() + FF.slice(1)
    }

    function VS(FF) {
      return FF.replace(/[^A-Za-z0-9]+(.)?/g, ((FF, WF) => WF ? WF.toUpperCase() : ""))
    }

    function NS(FF, WF) {
      var SF, CF;
      const AF = FF.filter((FF => FF.names.includes(WF))),
        uF = AF.filter((FF => !NF().isFunctionDeclaration(FF.node) && function(FF, WF) {
          return !NF().isVariableStatement(FF) || FF.declarationList.declarations.some((FF => void 0 !== FF.initializer && ES(FF.name).includes(WF)))
        }(FF.node, WF))),
        hF = null !== (SF = uF[uF.length - 1]) && void 0 !== SF ? SF : AF[AF.length - 1];
      if ("callback" === (null === hF || void 0 === hF ? void 0 : hF.kind)) return RS(hF.node);
      const bW = "other" === (null === hF || void 0 === hF ? void 0 : hF.kind) ? null === (CF = eS(hF.node)) || void 0 === CF ? void 0 : CF.value : void 0;
      if (!bW || !NF().isIdentifier(bW)) return null;
      const dF = FF.filter((FF => {
          var WF;
          const SF = null === (WF = eS(FF.node)) || void 0 === WF ? void 0 : WF.value;
          return void 0 !== SF && NF().isIdentifier(SF) && SF.text === bW.text
        })),
        PF = FF.filter((FF => FF.names.includes(bW.text))),
        RF = 1 === PF.length && "function" === PF[0].kind ? RS(PF[0].node) : null;
      return 1 === dF.length ? RF : null
    }

    function DS(FF) {
      return FF.parameters.map((FF => NF().isIdentifier(FF.name) ? FF.name.text : null))
    }

    function LS(FF, WF, SF, CF, AF, uF, hF) {
      var bW;
      let dF = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const {
        bA: PF
      } = SF, RF = PF.body;
      if (!RF) return [];
      const iW = [],
        eF = DS(PF),
        EF = [],
        QF = new Set([...eF.filter((FF => null !== FF)), ...xC(RF)]),
        rW = (FF, WF) => {
          let SF = FF;
          for (let CF = WF; QF.has(SF); CF++) SF = `${FF}${CF}`;
          return QF.add(SF), SF
        },
        gW = [];
      for (const [NF, OF] of uF.entries()) {
        var tW;
        const FF = eF[NF];
        if (void 0 !== FF && null !== (tW = PF.parameters[NF]) && void 0 !== tW && tW.dotDotDotToken) {
          EF.push(null === FF ? "undefined" : `...${FF}`);
          break
        }
        if (void 0 !== FF) {
          EF.push(null !== FF && void 0 !== FF ? FF : "undefined");
          continue
        }
        const WF = rW(OF, NF);
        gW.push(WF), EF.push(WF)
      }
      if (gW.length > 0) {
        const FF = PF.getChildren(WF).find((FF => FF.kind === NF().SyntaxKind.CloseParenToken)),
          SF = FF ? FF.getStart(WF) : -1;
        if (-1 === SF) {
          const FF = PF.parameters[0];
          if (!FF) return [];
          iW.push({
            from: FF.getStart(WF),
            to: FF.getEnd(),
            text: `(${[FF.getText(WF),...gW].join(", ")})`
          })
        } else {
          const FF = PF.parameters.hasTrailingComma ? " " : PF.parameters.length > 0 ? ", " : "";
          iW.push({
            from: SF,
            to: SF,
            text: `${FF}${gW.join(", ")}`
          })
        }
      }
      const TF = `${AF}(${EF.join(", ")})`,
        aW = rW(`${VS(hF)}Result`, 2),
        kW = bC[CF],
        qW = hS.has(CF) ? [TF] : kW ? [`const ${aW} = ${TF}`, `if (${kW.stopsWhen(aW)}) return ${aW}`] : [`const ${aW} = ${TF}`],
        VF = !hS.has(CF) && (null === (bW = null === kW || void 0 === kW ? void 0 : kW.passedOn) || void 0 === bW || bW);
      if (VF && NF().isBlock(RF)) {
        const SF = function(FF, WF) {
            const SF = new Set;
            for (const CF of FF.statements) {
              const FF = NF().isVariableStatement(CF) ? CF.declarationList.declarations[0] : void 0;
              FF && NF().isIdentifier(FF.name) && FF.initializer && mC(FF.initializer, WF) && SF.add(FF.name.text)
            }
            return SF
          }(RF, CF),
          AF = FF => {
            if (!NF().isFunctionLike(FF) && ! function(FF, WF, SF) {
                if (!NF().isIfStatement(FF) || !NF().isReturnStatement(FF.thenStatement) || !FF.thenStatement.expression) return !1;
                const CF = FF.thenStatement.expression;
                return NF().isIdentifier(CF) && WF.has(CF.text) && FF.expression.getText(SF).startsWith(`${CF.text} `)
              }(FF, SF, WF)) {
              if (NF().isReturnStatement(FF) && !FF.expression) iW.push({
                from: FF.getStart(WF),
                to: FF.getEnd(),
                text: `return ${aW}`
              });
              else if (NF().isReturnStatement(FF) && FF.expression) {
                const CF = OS(FF.expression, SF);
                CF && iW.push({
                  from: CF.getStart(WF),
                  to: CF.getEnd(),
                  text: `${CF.text} !== undefined ? ${CF.text} : ${aW}`
                })
              }
              NF().forEachChild(FF, AF)
            }
          };
        RF.statements.forEach(AF);
        const uF = RF.statements[RF.statements.length - 1];
        if (!uF || !NF().isReturnStatement(uF) && !NF().isThrowStatement(uF)) {
          const SF = RF.getEnd() - 1,
            CF = uF ? TS(FF, uF.getStart(WF)) : `${FF.slice(tC(FF,PF.getStart(WF)),PF.getStart(WF)).replace(/\S.*$/,"")}\t`,
            AF = FF.slice(tC(FF, SF), SF),
            hF = /^\s*$/.test(AF) ? `${CF}return ${aW}\n${AF}` : `\n${CF}return ${aW}\n`;
          iW.push({
            from: /^\s*$/.test(AF) ? tC(FF, SF) : SF,
            to: SF,
            text: hF
          })
        }
      }
      const DF = NF().isBlock(RF) ? [...RF.statements] : [],
        LF = DF.findIndex((FF => ! function(FF, WF) {
          return NF().isExpressionStatement(FF) && mC(FF.expression, WF)
        }(FF, CF))),
        mW = DF[(-1 === LF ? DF.length : LF) - 1];
      if (dF && hS.has(CF) && mW) iW.push({
        from: mW.getEnd(),
        to: mW.getEnd(),
        text: `\n${TS(FF,mW.getStart(WF))}${TF}`
      });
      else if (NF().isBlock(RF)) {
        const SF = RF.statements[0],
          CF = SF ? TS(FF, SF.getStart(WF)) : `${FF.slice(tC(FF,PF.getStart(WF)),PF.getStart(WF)).replace(/\S.*$/,"")}\t`,
          AF = RF.getStart(WF) + 1,
          uF = void 0 !== SF && !FF.slice(AF, SF.getStart(WF)).includes("\n");
        iW.push({
          from: AF,
          to: uF ? SF.getStart(WF) : AF,
          text: `\n${qW.map((FF=>`${CF}${FF}`)).join("\n")}${SF?uF?`\n${CF}`:"":"\n"}`
        })
      } else {
        const SF = FF.slice(tC(FF, PF.getStart(WF)), PF.getStart(WF)).replace(/\S.*$/, ""),
          CF = rW("ownResult", 2),
          AF = VF ? [`const ${CF} = ${RF.getText(WF)}`, `return ${CF} !== undefined ? ${CF} : ${aW}`] : [`return ${RF.getText(WF)}`];
        iW.push({
          from: RF.getStart(WF),
          to: RF.getEnd(),
          text: `{\n${[...qW,...AF].map((FF=>`${SF}\t${FF}`)).join("\n")}\n${SF}}`
        })
      }
      return iW
    }

    function mC(FF, WF) {
      return NF().isCallExpression(FF) && NF().isIdentifier(FF.expression) && FF.expression.text.endsWith(qC(WF)) && FF.expression.text !== qC(WF)
    }

    function OS(FF, WF) {
      return NF().isIdentifier(FF) ? WF.has(FF.text) ? FF : null : NF().isConditionalExpression(FF) ? OS(FF.whenFalse, WF) : null
    }

    function xC(FF) {
      const WF = [],
        SF = FF => {
          NF().isIdentifier(FF) && WF.push(FF.text), NF().forEachChild(FF, SF)
        };
      return SF(FF), WF
    }

    function ZS(FF, WF, SF) {
      var CF, AF;
      return (0, RW.f)(null !== (CF = null === (AF = FF.body) || void 0 === AF ? void 0 : AF.getText(WF)) && void 0 !== CF ? CF : "", new RegExp(`${SF}\\s*\\(`), RW.o).length > 0
    }

    function oS(FF, WF, SF) {
      var CF;
      const {
        owner: AF,
        heading: uF
      } = SF, hF = null !== (CF = SF.overrides) && void 0 !== CF ? CF : new Set;
      if ("" === FF.trim() && !0 !== SF.chainCallbacks) {
        const FF = `${uF?`${uF}\n`:""}${WF.trim()}\n`,
          {
            file: SF,
            hasErrors: CF
          } = dS(FF);
        if (CF) return null;
        const AF = rC(FF, SF);
        return {
          text: FF,
          added: AF.flatMap((FF => "config" === FF.kind ? [] : FF.names)),
          chained: [],
          settings: AF.flatMap((FF => {
            var WF;
            const SF = "config" === FF.kind ? QS(FF.node) : null;
            return (null !== (WF = null === SF || void 0 === SF ? void 0 : SF.properties) && void 0 !== WF ? WF : []).flatMap((FF => {
              const WF = gC(FF);
              return null === WF ? [] : [WF]
            }))
          }))
        }
      }
      const bW = dS(FF),
        dF = dS(WF);
      if (bW.hasErrors || dF.hasErrors) return null;
      const PF = rC(FF, bW.file),
        RF = rC(WF, dF.file),
        iW = new Set(PF.flatMap((FF => FF.names))),
        eF = new Set(iW),
        EF = [],
        QF = [],
        rW = [],
        gW = [];
      let tW = [];
      const TF = RF.find((FF => "config" === FF.kind)),
        aW = PF.find((FF => "config" === FF.kind));
      if (TF) {
        const SF = QS(TF.node),
          CF = aW ? QS(aW.node) : null;
        if (SF && CF) {
          const AF = function(FF, WF, SF, CF, AF, uF, hF) {
            const bW = new Map;
            for (const aW of SF.properties) {
              const FF = gC(aW);
              null !== FF && bW.set(FF, aW)
            }
            const dF = [],
              PF = [],
              RF = [],
              iW = new Map;
            for (const aW of uF.properties) {
              const FF = gC(aW);
              if (null === FF) continue;
              const SF = bW.get(FF);
              if (SF) {
                if (hF.has(FF) && NF().isPropertyAssignment(SF) && NF().isPropertyAssignment(aW)) {
                  const CF = aW.initializer.getText(AF);
                  SF.initializer.getText(WF) !== CF && (dF.push({
                    from: SF.initializer.getStart(WF),
                    to: SF.initializer.getEnd(),
                    text: CF
                  }), iW.set(SF, CF), PF.push(FF))
                }
              } else RF.push(aC(CF, aW, AF)), PF.push(FF)
            }
            if (0 === RF.length) return {
              edits: dF,
              settings: PF
            };
            const eF = SF.getEnd() - 1,
              EF = SF.properties[SF.properties.length - 1];
            if (!FF.slice(SF.getStart(WF), eF).includes("\n")) {
              const FF = SF.properties.map((FF => {
                const SF = iW.get(FF);
                return NF().isPropertyAssignment(FF) && void 0 !== SF ? `\t${FF.name.getText(WF)}: ${SF},` : `\t${FF.getText(WF)},`
              }));
              return {
                edits: [{
                  from: SF.getStart(WF),
                  to: SF.getEnd(),
                  text: `{\n${[...FF,...RF].join("\n")}\n}`
                }],
                settings: PF
              }
            }
            const QF = void 0 !== EF && !SF.properties.hasTrailingComma,
              rW = tC(FF, eF),
              gW = FF.slice(rW, eF);
            if ("" === gW.trim()) return QF && dF.push({
              from: EF.getEnd(),
              to: EF.getEnd(),
              text: ","
            }), dF.push({
              from: rW,
              to: rW,
              text: `${RF.join("\n")}\n`
            }), {
              edits: dF,
              settings: PF
            };
            const tW = rW + gW.trimEnd().length,
              TF = QF && EF.getEnd() === tW;
            return QF && !TF && dF.push({
              from: EF.getEnd(),
              to: EF.getEnd(),
              text: ","
            }), dF.push({
              from: tW,
              to: eF,
              text: `${TF?",":""}\n${RF.join("\n")}\n`
            }), {
              edits: dF,
              settings: PF
            }
          }(FF, bW.file, CF, WF, dF.file, SF, hF);
          EF.push(...AF.edits), tW = AF.settings
        } else if (SF) {
          if (eF.has("CONFIG")) return null;
          const CF = function(FF, WF) {
              const SF = WF.statements[0];
              return SF ? tC(FF, SF.getStart(WF)) : FF.length
            }(FF, bW.file),
            AF = CF > 0 && "\n" !== FF[CF - 1] ? "\n" : "";
          EF.push({
            from: CF,
            to: CF,
            text: `${AF}${WF.slice(TF.from,TF.to)}\n\n`
          }), tW = SF.properties.flatMap((FF => {
            const WF = gC(FF);
            return null === WF ? [] : [WF]
          }))
        }
      }
      const kW = [],
        qW = (FF, SF) => {
          const CF = kW[kW.length - 1],
            AF = void 0 !== CF && CF >= 0 && CF === SF - 1 && !/\n[^\S\n]*\n/.test(WF.slice(RF[CF].to, RF[SF].from)) ? "\n" : "\n\n";
          QF.push(0 === QF.length ? FF : `${AF}${FF}`), kW.push(SF)
        };
      for (const [NF, DF] of RF.entries()) {
        if ("config" === DF.kind) continue;
        const CF = WF.slice(DF.from, DF.to);
        if ("callback" === DF.kind) {
          const WF = DF.names[0],
            uF = NS(PF, WF);
          if (!uF && iW.has(WF)) {
            if (!0 === SF.chainCallbacks) continue;
            return null
          }
          if (!uF && !0 !== SF.chainCallbacks) {
            eF.has(WF) || (qW(CF, NF), rW.push(WF), eF.add(WF));
            continue
          }
          const hF = `${VS(AF)}${qC(WF)}`,
            RF = RS(DF.node);
          if (null === RF || void 0 === RF || !RF.nameNode) continue;
          if (!eF.has(hF)) {
            const FF = RF.nameNode.getStart(dF.file) - DF.from,
              WF = RF.nameNode.getEnd() - DF.from;
            qW(CF.slice(0, FF) + hF + CF.slice(WF), NF), rW.push(hF), eF.add(hF)
          }
          const QF = DS(RF.bA).map(((FF, WF) => null !== FF && void 0 !== FF ? FF : `arg${WF}`));
          if (!uF) {
            const FF = `${hF}(${QF.join(", ")})`,
              SF = `${VS(AF)}Result`;
            qW(`function ${WF}(${QF.join(", ")}) {\n\t${hS.has(WF)?FF:`const ${SF} = ${FF}\n\treturn ${SF}`}\n}`, -1), rW.push(WF), eF.add(WF);
            continue
          }
          ZS(uF.bA, bW.file, hF) || (EF.push(...LS(FF, bW.file, uF, WF, hF, QF, AF, !0 === SF.runsLast)), gW.push(WF));
          continue
        }
        const uF = DF.names.filter((FF => !eF.has(FF)));
        if ("other" === DF.kind || DF.names.length > 0 && uF.length === DF.names.length) {
          qW(CF, NF), rW.push(...uF);
          for (const FF of uF) eF.add(FF)
        }
      }
      let VF = kC(FF, EF);
      if (QF.length > 0) {
        const FF = VF.replace(/\s*$/, "");
        VF = `${""===FF?"":`${FF}\n\n`}${uF?`${uF}\n`:""}${QF.join("")}\n`
      }
      return dS(VF).hasErrors ? null : {
        text: VF,
        added: rW,
        chained: gW,
        settings: tW
      }
    }

    function YS(FF) {
      const {
        file: WF
      } = dS(FF);
      return new Set(rC(FF, WF).flatMap((FF => FF.names)))
    }

    function MS(FF) {
      const {
        file: WF
      } = dS(FF), SF = new Set, CF = FF => {
        NF().isCallExpression(FF) && NF().isIdentifier(FF.expression) && SF.add(FF.expression.text), NF().forEachChild(FF, CF)
      };
      return CF(WF), SF
    }

    function cC(FF) {
      return !dS(FF).hasErrors
    }

    function GS(FF) {
      return dS(FF).file
    }

    function zC(FF) {
      return {
        from: FF.getFullStart(),
        to: FF.getEnd()
      }
    }

    function IS(FF) {
      if (!/\buse_?prefab\s*\(/i.test(FF)) return {
        code: FF,
        calls: []
      };
      const WF = GS(FF),
        SF = function(FF) {
          const WF = new Map;
          for (const SF of FF.statements)
            if (NF().isVariableStatement(SF))
              for (const FF of SF.declarationList.declarations)
                if (NF().isIdentifier(FF.name) && "CONFIG" === FF.name.text && FF.initializer && NF().isObjectLiteralExpression(FF.initializer))
                  for (const SF of FF.initializer.properties) NF().isPropertyAssignment(SF) && (NF().isIdentifier(SF.name) || NF().isStringLiteral(SF.name)) && WF.set(SF.name.text, SF.initializer.getText());
          return WF
        }(WF),
        CF = [],
        AF = [],
        uF = FF => {
          var WF;
          return NF().isPropertyAccessExpression(FF) && NF().isIdentifier(FF.expression) && "CONFIG" === FF.expression.text && null !== (WF = SF.get(FF.name.text)) && void 0 !== WF ? WF : FF.getText()
        },
        hF = FF => FF && (NF().isStringLiteral(FF) || NF().isNoSubstitutionTemplateLiteral(FF)) ? FF.text : FF && NF().isObjectLiteralExpression(FF) ? FF.properties.flatMap((FF => NF().isPropertyAssignment(FF) && (NF().isIdentifier(FF.name) || NF().isStringLiteral(FF.name)) ? [`${FF.name.text}: ${uF(FF.initializer)}`] : NF().isShorthandPropertyAssignment(FF) && SF.has(FF.name.text) ? [`${FF.name.text}: ${SF.get(FF.name.text)}`] : [])).join("\n") : "";
      for (const bW of WF.statements) {
        const FF = NF().isExpressionStatement(bW) ? bW.expression : null;
        if (!FF || !NF().isCallExpression(FF) || !NF().isIdentifier(FF.expression) || !/^use_?prefab$/i.test(FF.expression.text)) continue;
        const [WF, SF] = FF.arguments;
        if (WF && (NF().isStringLiteral(WF) || NF().isNoSubstitutionTemplateLiteral(WF))) CF.push({
          name: WF.text,
          settings: hF(SF)
        });
        else {
          if (!WF || !NF().isObjectLiteralExpression(WF)) continue;
          {
            const FF = FF => {
                var SF;
                return null === (SF = WF.properties.find((WF => NF().isPropertyAssignment(WF) && NF().isIdentifier(WF.name) && WF.name.text === FF))) || void 0 === SF ? void 0 : SF.initializer
              },
              SF = FF("name");
            SF && NF().isStringLiteral(SF) && CF.push({
              name: SF.text,
              settings: hF(FF("settings"))
            })
          }
        }
        AF.push({
          ...zC(bW),
          text: ""
        })
      }
      return {
        code: kC(FF, AF),
        calls: CF
      }
    }

    function fS(FF) {
      if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(FF)) return FF;
      const WF = GS(FF),
        SF = new Set(WF.statements.flatMap((FF => NF().isFunctionDeclaration(FF) && FF.name ? [FF.name.text] : []))),
        CF = [];
      for (const AF of WF.statements)
        if (NF().isExpressionStatement(AF) && NF().isBinaryExpression(AF.expression) && AF.expression.operatorToken.kind === NF().SyntaxKind.EqualsToken && NF().isIdentifier(AF.expression.left) && SF.add(AF.expression.left.text), NF().isVariableStatement(AF))
          for (const FF of AF.declarationList.declarations) {
            const WF = FF.initializer;
            WF && NF().isIdentifier(WF) && uS(WF.text) && !SF.has(WF.text) && CF.push({
              from: WF.getStart(),
              to: WF.getEnd(),
              text: "function () {}"
            }), WF && NF().isIdentifier(FF.name) && SF.add(FF.name.text)
          }
      return kC(FF, CF)
    }

    function yC(FF, WF) {
      if (!FF.includes("api.setBlockRect(")) return FF;
      const SF = GS(FF);
      if (SF.statements.some((FF => {
          var WF;
          return NF().isFunctionDeclaration(FF) && "fillBox" === (null === (WF = FF.name) || void 0 === WF ? void 0 : WF.text) && 3 !== FF.parameters.length
        }))) return FF;
      const CF = [],
        AF = FF => {
          var SF;
          NF().isFunctionDeclaration(FF) && "fillBox" === (null === (SF = FF.name) || void 0 === SF ? void 0 : SF.text) || (NF().isCallExpression(FF) && NF().isPropertyAccessExpression(FF.expression) && NF().isIdentifier(FF.expression.expression) && "api" === FF.expression.expression.text && "setBlockRect" === FF.expression.name.text && 3 === FF.arguments.length && !WF.includes(FF.getText()) && CF.push({
            from: FF.expression.getStart(),
            to: FF.expression.getEnd(),
            text: "fillBox"
          }), NF().forEachChild(FF, AF))
        };
      return AF(SF), kC(FF, CF)
    }
    const sS = [{
        name: "parkour",
        kind: "game",
        title: "Parkour / obby",
        category: "parkour",
        summary: "A course to the finish, built for you in stages that get harder (or your own course): checkpoint blocks save progress, falling or kill blocks send you back, your time is shown and the best one saved",
        keywords: ["parkour", "parkor", "obby", "obbie", "obby that gets harder", "checkpoint", "checkpoints", "course", "jumps", "finish", "speedrun", "kill brick", "killbrick", "tower", "tower of hell", "climb", "stage", "stages", "gets harder", "difficulty"],
        howItPlays: 'With buildCourse (the default) the game builds its own course on the first join: a line of platforms going east from startPosition (or, with courseShape "tower", a climb spiralling up around startPosition, a block higher every jump) in `stages` stages of `jumpsPerStage` jumps, a checkpointBlock pad at the start of each stage and the finishBlock at the end. Stage 1 is easy (1-block gaps, flat, wide platforms); every stage after has bigger gaps, small rises and drops and narrower platforms, never a jump a player can\'t make. With buildCourse false it uses a course the creator built. Players start at startPosition and race to a finishBlock. Standing on a checkpointBlock saves their spot (the sidebar shows Stage n/N); falling below fallY or standing on one of killBlocks sends them back to it (or to the start, with killSendsToStart), as does dying. Reaching the finish shows their time to everyone, gives rewardCoins and saves their best time. /restart starts them again.',
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start, and go back to with /restart; a built course starts here"
        }, {
          key: "buildCourse",
          kind: "boolean",
          value: "true",
          about: "true: the game builds its own course from startPosition; false: you build the course yourself"
        }, {
          key: "courseShape",
          kind: "string",
          value: '"line"',
          about: '"line": the built course goes east from the start; "tower": it climbs, spiralling up around the start (tower obby, rising lava)'
        }, {
          key: "stages",
          kind: "number",
          value: "10",
          about: "how many stages the built course has, each harder than the one before (1 to 50)"
        }, {
          key: "jumpsPerStage",
          kind: "number",
          value: "5",
          about: "how many jumps in each stage of the built course (1 to 20)"
        }, {
          key: "courseBlock",
          kind: "block",
          value: '"Stone"',
          about: "the block the built course's platforms are made of"
        }, {
          key: "checkpointBlock",
          kind: "block",
          value: '"Block of Gold"',
          about: "standing on this block saves a player's progress; the built course has one at each stage's start"
        }, {
          key: "finishBlock",
          kind: "block",
          value: '"Block of Diamond"',
          about: "standing on this block finishes the course; the built course ends with it"
        }, {
          key: "killBlocks",
          kind: "list",
          names: "block",
          value: '["Lava", "Red Concrete"]',
          about: "standing on any of these sends a player back to their checkpoint"
        }, {
          key: "killSendsToStart",
          kind: "boolean",
          value: "false",
          about: "true: a kill block sends a player back to the start (starting their time again), not their checkpoint"
        }, {
          key: "fallY",
          kind: "number",
          value: "-10",
          about: "falling below this height sends a player back to their checkpoint"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "10",
          about: "coins for finishing (0 for none)"
        }],
        code: '// Parkour: race from the start to the finish block. A checkpoint block saves your progress; falling, a kill block or\n// dying sends you back to it. /restart starts again. With CONFIG.buildCourse the game builds the course itself, in\n// stages that get harder.\nconst checkpoints = {}\nconst checkpointCounts = {}\nlet courseStarted = false\nlet coursePlan = []\n\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.buildCourse && !courseStarted) {\n\t\tcourseStarted = true\n\t\tcoursePlan = planCourse()\n\t\tconst start = CONFIG.startPosition\n\t\twhenWorldLoaded([start[0], start[1] - 1, start[2]], () => placeCourse(coursePlan))\n\t}\n\tsendToStart(playerId)\n\tapi.sendMessage(playerId, "Reach the " + CONFIG.finishBlock + "! Stand on " + CONFIG.checkpointBlock + " to save your progress. Type /restart to start again.", { color: "aqua" })\n}\n\nfunction stageCount() {\n\treturn Math.max(1, Math.min(50, Math.floor(CONFIG.stages)))\n}\n\n// The course as a list of parts { from, to, block, stage, pad }, going east from startPosition. A jump is never\n// longer than players can make: a gap of 3 blocks on the flat or down, 2 going up. Stages get harder: bigger gaps,\n// small rises and drops, narrower and shorter platforms. Change this to change the course\'s shape.\nfunction planCourse() {\n\tconst start = CONFIG.startPosition.map(Math.floor)\n\tif (CONFIG.courseShape === "tower") {\n\t\treturn planTower(start)\n\t}\n\tconst rises = [1, 0, 1, -1, 0, -1, 1, 1, -1, -1]\n\tconst stages = stageCount()\n\tconst jumps = Math.max(1, Math.min(20, Math.floor(CONFIG.jumpsPerStage)))\n\tconst parts = []\n\tlet y = start[1] - 1\n\tlet end = 0 // the east end of the last part, counted from the start\n\tfunction add(first, length, wide, block, stage, pad) {\n\t\tend = first + length - 1\n\t\tparts.push({ from: [start[0] + first, y, start[2] - wide], to: [start[0] + end, y, start[2] + wide], block: block, stage: stage, pad: pad })\n\t}\n\tlet count = 0\n\tfor (let stage = 1; stage <= stages; stage++) {\n\t\tconst hard = stages > 1 ? (stage - 1) / (stages - 1) : 0\n\t\tfor (let jump = 0; jump <= jumps; jump++) {\n\t\t\tconst pad = jump === 0\n\t\t\tif (stage === 1 && pad) {\n\t\t\t\tadd(-1, 3, 1, CONFIG.checkpointBlock, 1, true)\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tconst wanted = hard < 0.2 ? 0 : rises[count % rises.length]\n\t\t\tconst rise = y + wanted < start[1] - 3 ? 0 : wanted\n\t\t\tlet gap = count % 2 === 0 ? 1 + Math.round(hard * 2) : Math.max(1, Math.round(hard * 2))\n\t\t\tgap = Math.min(gap, rise > 0 ? 2 : 3)\n\t\t\tcount++\n\t\t\ty += rise\n\t\t\tif (pad) {\n\t\t\t\tadd(end + gap + 1, 3, 1, CONFIG.checkpointBlock, stage, true)\n\t\t\t} else {\n\t\t\t\tadd(end + gap + 1, hard < 0.7 ? 2 : 1, hard < 0.5 ? 1 : 0, CONFIG.courseBlock, stage, false)\n\t\t\t}\n\t\t}\n\t}\n\tadd(end + 3, 3, 1, CONFIG.finishBlock, stages, false)\n\treturn parts\n}\n\n// The tower: platforms on a 9 by 9 square ring with the start at a corner, each one a block higher than the last, with\n// gaps of 1 to 2 blocks (the most a jump up can clear), smaller platforms as the stages go up\nfunction planTower(start) {\n\tconst side = 8\n\tconst stages = stageCount()\n\tconst jumps = Math.max(1, Math.min(20, Math.floor(CONFIG.jumpsPerStage)))\n\tconst parts = []\n\tlet along = 0 // how far round the ring\n\tlet y = start[1] - 1\n\tlet wide = 1\n\tlet last = [0, 0]\n\tfunction ringSpot(at) {\n\t\tconst offset = at % side\n\t\tconst edge = Math.floor(at / side) % 4\n\t\treturn edge === 0 ? [offset, 0] : edge === 1 ? [side, offset] : edge === 2 ? [side - offset, side] : [0, side - offset]\n\t}\n\tfunction add(width, block, stage, pad) {\n\t\tconst spot = ringSpot(along)\n\t\tparts.push({ from: [start[0] + spot[0] - width, y, start[2] + spot[1] - width], to: [start[0] + spot[0] + width, y, start[2] + spot[1] + width], block: block, stage: stage, pad: pad })\n\t\twide = width\n\t\tlast = spot\n\t}\n\t// Goes round the ring until the next platform is gap blocks from the last one, edge to edge (less far round at corners)\n\tfunction moveOn(gap, width) {\n\t\tlet spot\n\t\tdo {\n\t\t\talong++\n\t\t\tspot = ringSpot(along)\n\t\t} while (Math.max(Math.abs(spot[0] - last[0]), Math.abs(spot[1] - last[1])) - wide - width - 1 < gap)\n\t}\n\tadd(1, CONFIG.checkpointBlock, 1, true)\n\tfor (let stage = 1; stage <= stages; stage++) {\n\t\tconst hard = stages > 1 ? (stage - 1) / (stages - 1) : 0\n\t\tfor (let jump = stage === 1 ? 1 : 0; jump <= jumps; jump++) {\n\t\t\tconst pad = jump === 0\n\t\t\tconst width = pad || hard < 0.5 ? 1 : 0\n\t\t\tconst gap = hard < 0.3 ? 1 : 2\n\t\t\tmoveOn(gap, width)\n\t\t\ty += 1\n\t\t\tadd(width, pad ? CONFIG.checkpointBlock : CONFIG.courseBlock, stage, pad)\n\t\t}\n\t}\n\tmoveOn(2, 1)\n\ty += 1\n\tadd(1, CONFIG.finishBlock, stages, false)\n\treturn parts\n}\n\nfunction placeCourse(parts) {\n\tif (!courseHasRoom(parts)) {\n\t\tapi.broadcastMessage("The parkour course wasn\'t built: there are blocks where it goes, " + (CONFIG.courseShape === "tower" ? "around and above" : "east of") + " the start. Move startPosition to open sky, or set buildCourse to false to use your own course.", { color: "orange" })\n\t\treturn\n\t}\n\tfor (const part of parts) {\n\t\tfillBox(part.from, part.to, part.block)\n\t}\n}\n\n// Whether only air (or the course, built before) is where the course goes, so it never builds over the creator\'s blocks\nfunction courseHasRoom(parts) {\n\tconst open = ["Air", "Unloaded", CONFIG.courseBlock, CONFIG.checkpointBlock, CONFIG.finishBlock]\n\tfor (const part of parts) {\n\t\tfor (let x = part.from[0]; x <= part.to[0]; x++) {\n\t\t\tfor (let y = part.from[1]; y <= part.to[1]; y++) {\n\t\t\t\tfor (let z = part.from[2]; z <= part.to[2]; z++) {\n\t\t\t\t\tif (!open.includes(api.getBlock(x, y, z))) {\n\t\t\t\t\t\treturn false\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}\n\nfunction padAt(x, y, z) {\n\treturn coursePlan.find((part) => part.pad && y === part.from[1] && x >= part.from[0] && x <= part.to[0] && z >= part.from[2] && z <= part.to[2])\n}\n\nfunction sendToStart(playerId) {\n\tdelete checkpoints[playerId]\n\tcheckpointCounts[playerId] = 0\n\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n\tstartStopwatch(playerId)\n\tif (CONFIG.buildCourse) {\n\t\tsetSidebar(playerId, "Stage", "1/" + stageCount())\n\t} else {\n\t\tsetSidebar(playerId, "Checkpoint", "Start")\n\t}\n}\n\nfunction sendToCheckpoint(playerId) {\n\tconst spot = checkpoints[playerId] || CONFIG.startPosition\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction reachCheckpoint(playerId, x, y, z) {\n\tconst pad = padAt(x, y, z)\n\tconst spot = pad ? [(pad.from[0] + pad.to[0]) / 2 + 0.5, y + 1, (pad.from[2] + pad.to[2]) / 2 + 0.5] : [x + 0.5, y + 1, z + 0.5]\n\tconst old = checkpoints[playerId]\n\tif (old && old[0] === spot[0] && old[1] === spot[1] && old[2] === spot[2]) {\n\t\treturn\n\t}\n\tcheckpoints[playerId] = spot\n\tif (pad) {\n\t\tsetSidebar(playerId, "Stage", pad.stage + "/" + stageCount())\n\t\tif (pad.stage > 1) {\n\t\t\tapi.sendMessage(playerId, "Stage " + pad.stage + " - checkpoint saved!", { color: "lime" })\n\t\t}\n\t\treturn\n\t}\n\tcheckpointCounts[playerId] = (checkpointCounts[playerId] || 0) + 1\n\tsetSidebar(playerId, "Checkpoint", checkpointCounts[playerId])\n\tapi.sendMessage(playerId, "Checkpoint saved!", { color: "lime" })\n}\n\nfunction finishCourse(playerId) {\n\tconst seconds = stopStopwatch(playerId)\n\tif (seconds === null) {\n\t\treturn\n\t}\n\tannounce(api.getEntityName(playerId) + " finished in " + formatTime(seconds) + "!", "lime")\n\tif (CONFIG.rewardCoins > 0) {\n\t\taddCoins(playerId, CONFIG.rewardCoins)\n\t}\n\tconst best = getSaved(playerId, "parkourBest", null)\n\tif (best === null || seconds < best) {\n\t\tsetSaved(playerId, "parkourBest", seconds)\n\t\tapi.sendMessage(playerId, "New best time!", { color: "gold" })\n\t}\n\tsetSidebar(playerId, "Best", formatTime(getSaved(playerId, "parkourBest", seconds)))\n}\n\nfunction onBlockStandStart(playerId, x, y, z, blockName) {\n\tif (blockName === CONFIG.checkpointBlock) {\n\t\treachCheckpoint(playerId, x, y, z)\n\t} else if (blockName === CONFIG.finishBlock) {\n\t\tfinishCourse(playerId)\n\t} else if (CONFIG.killBlocks.includes(blockName) && CONFIG.killSendsToStart) {\n\t\tapi.sendMessage(playerId, "Ouch! Back to the start.", { color: "red" })\n\t\tsendToStart(playerId)\n\t} else if (CONFIG.killBlocks.includes(blockName)) {\n\t\tapi.sendMessage(playerId, "Ouch! Back to your checkpoint.", { color: "red" })\n\t\tsendToCheckpoint(playerId)\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.getPosition(playerId)[1] < CONFIG.fallY) {\n\t\t\tsendToCheckpoint(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn checkpoints[playerId] || CONFIG.startPosition\n}\n\nfunction playerCommand(playerId, command) {\n\tif (command.trim().toLowerCase() === "restart") {\n\t\tsendToStart(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete checkpoints[playerId]\n\tdelete checkpointCounts[playerId]\n}',
        changeable: [{
          name: "finishCourse",
          about: "what happens when a player reaches the finish: the message, the reward, the best time"
        }, {
          name: "reachCheckpoint",
          about: "what happens when a player stands on a checkpoint"
        }, {
          name: "planCourse",
          about: "the shape of the built course: a list of parts { from, to, block, stage, pad } - gaps, heights, widths, what each stage is like"
        }, {
          name: "placeCourse",
          about: "how the built course's parts are put into the world (default: fillBox of each part)"
        }],
        setup: 'Nothing, with buildCourse: the game builds the course east from startPosition, or up around it with courseShape "tower" (put startPosition in open sky: it won\'t build over blocks). If you build your own course, set buildCourse false and put the start at startPosition, checkpoint blocks along the way and the finish block at the end.'
      }, {
        name: "pvpArena",
        kind: "game",
        title: "Kit PvP arena",
        category: "pvp",
        summary: "Free-for-all fighting: everyone gets a kit, kills give score and coins, kill streaks are announced and the first to enough kills wins the round",
        keywords: ["pvp", "kitpvp", "kit pvp", "kit", "arena", "pvp arena", "ffa", "free for all", "duels", "duel", "fight", "fighting", "combat", "kill", "kills", "killstreak", "battle", "sword fight", "pvp game", "pvparena", "pvb"],
        howItPlays: "Every player gets kitItems when they join and each time they respawn, and appears at a random spot up to arenaRadius blocks from arenaCenter. Each kill gives a point of score (shown on the leaderboard) and killCoins, and heals the killer if healOnKill is on. Kill streaks of 3, 5, 10... are announced to everyone. The first player to killsToWin kills wins the round: it is announced, scores reset, and everyone starts again with a fresh kit.",
        settings: [{
          key: "arenaCenter",
          kind: "position",
          value: "[0, 10, 0]",
          about: "the middle of the arena, where players appear around"
        }, {
          key: "arenaRadius",
          kind: "number",
          value: "10",
          about: "how far from arenaCenter players can appear, in blocks"
        }, {
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Iron Sword", 1], ["Wood Bow", 1], ["Arrow", 16], ["Bread", 5]]',
          about: "the items each player gets on joining and respawning, as [item, amount]"
        }, {
          key: "killsToWin",
          kind: "number",
          value: "10",
          about: "kills a player needs to win the round"
        }, {
          key: "killCoins",
          kind: "number",
          value: "5",
          about: "coins for each kill (0 for none)"
        }, {
          key: "healOnKill",
          kind: "boolean",
          value: "true",
          about: "true: a player gets full health after a kill"
        }, {
          key: "scoreName",
          kind: "string",
          value: '"Kills"',
          about: "what the score is called on the leaderboard"
        }],
        code: '// Kit PvP arena: everyone fights everyone. You get a kit when you join and when you respawn, each kill gives you a\n// point and coins, and the first to CONFIG.killsToWin kills wins the round.\nconst streaks = {}\n\nfunction onPlayerJoin(playerId) {\n\tstreaks[playerId] = 0\n\tsendIntoArena(playerId)\n\tapi.sendMessage(playerId, "Fight! First to " + CONFIG.killsToWin + " kills wins the round.", { color: "aqua" })\n}\n\nfunction sendIntoArena(playerId) {\n\tconst spot = randomSpot(CONFIG.arenaCenter, CONFIG.arenaRadius)\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\tgiveKit(playerId, CONFIG.kitItems)\n\thealFully(playerId)\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== killedPlayer) {\n\t\trewardKill(attackingPlayer, killedPlayer)\n\t}\n\t// The kit comes back on respawn, so it isn\'t dropped\n\treturn "keepInventory"\n}\n\nfunction rewardKill(attackingPlayer, killedPlayer) {\n\tconst kills = addScore(attackingPlayer, 1)\n\tstreaks[attackingPlayer] = (streaks[attackingPlayer] || 0) + 1\n\tif (CONFIG.killCoins > 0) {\n\t\taddCoins(attackingPlayer, CONFIG.killCoins)\n\t}\n\tif (CONFIG.healOnKill) {\n\t\thealFully(attackingPlayer)\n\t}\n\tapi.sendMessage(attackingPlayer, "You beat " + api.getEntityName(killedPlayer) + "! Kills: " + kills, { color: "lime" })\n\tannounceStreak(attackingPlayer, streaks[attackingPlayer])\n\tif (kills >= CONFIG.killsToWin) {\n\t\twinRound(attackingPlayer)\n\t}\n}\n\nfunction announceStreak(playerId, streak) {\n\tif (streak === 3 || (streak >= 5 && streak % 5 === 0)) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " is on a " + streak + " kill streak!", { color: "orange" })\n\t}\n}\n\nfunction winRound(winner) {\n\tannounce(api.getEntityName(winner) + " wins the round with " + getScore(winner) + " kills!", "gold")\n\tresetScores()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tstreaks[playerId] = 0\n\t\tif (api.isAlive(playerId)) {\n\t\t\tsendIntoArena(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// A death ends the streak\n\tstreaks[playerId] = 0\n\t// Called before the player is back: the new kit is ready when they are\n\tgiveKit(playerId, CONFIG.kitItems)\n\treturn randomSpot(CONFIG.arenaCenter, CONFIG.arenaRadius)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete streaks[playerId]\n}',
        changeable: [{
          name: "rewardKill",
          about: "what a kill gives: the score, coins, healing and message"
        }, {
          name: "announceStreak",
          about: "which kill streaks are announced and how"
        }, {
          name: "winRound",
          about: "what happens when a player reaches killsToWin: the message and the reset"
        }],
        setup: "Build an arena around arenaCenter with a floor at its height, and turn PvP on in your world settings."
      }, {
        name: "zombieWaves",
        kind: "game",
        title: "Zombie waves",
        category: "survival",
        summary: "Survive waves of mobs that get bigger every wave, with a short break between them and coins for every mob killed",
        keywords: ["dungeon", "zombie", "zombies", "zombi", "zombies waves", "waves", "wave", "horde", "hordes", "survive", "survival", "mob arena", "mob waves", "cod zombies", "undead", "defend"],
        howItPlays: "Players fight waves of mobType around spawnCenter. Wave 1 has firstWaveSize mobs and every wave after has extraPerWave more. When a wave is cleared there is a break of waveBreakSeconds with a countdown before the next. Every mob killed gives coinsPerKill coins. The wave and mobs left show on the sidebar. If every player is dead at the same time it is game over; clearing maxWaves wins. Then a new game starts.",
        settings: [{
          key: "spawnCenter",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start and mobs spawn around"
        }, {
          key: "mobType",
          kind: "mob",
          value: '"Draugr Zombie"',
          about: "the mob every wave is made of"
        }, {
          key: "firstWaveSize",
          kind: "number",
          value: "3",
          about: "how many mobs come in wave 1"
        }, {
          key: "extraPerWave",
          kind: "number",
          value: "2",
          about: "how many more mobs each wave has than the one before"
        }, {
          key: "spawnSpread",
          kind: "number",
          value: "10",
          about: "how far from spawnCenter mobs can spawn, in blocks"
        }, {
          key: "waveBreakSeconds",
          kind: "number",
          value: "10",
          about: "the break before each wave, in seconds"
        }, {
          key: "coinsPerKill",
          kind: "number",
          value: "5",
          about: "coins for each mob a player kills (0 for none)"
        }, {
          key: "maxWaves",
          kind: "number",
          value: "10",
          about: "clearing this many waves wins the game (0: waves never end)"
        }],
        code: '// Zombie waves: mobs come in waves around spawnCenter, each wave bigger than the last. Kill them for coins and get\n// ready in the break between waves. If every player is dead at once it\'s game over; clear maxWaves to win.\nlet wave = 0\nlet wavePhase = "waiting" // waiting, break, fighting, over\nconst waveMobIds = {}\nlet lastShown = ""\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPosition(playerId, CONFIG.spawnCenter[0], CONFIG.spawnCenter[1], CONFIG.spawnCenter[2])\n\tapi.sendMessage(playerId, "Survive the waves of " + CONFIG.mobType + "s! Every kill gives you coins.", { color: "aqua" })\n\tshowWave(playerId)\n\tif (wavePhase === "waiting") {\n\t\tstartBreak()\n\t}\n}\n\nfunction showWave(playerId) {\n\tsetSidebar(playerId, "Wave", wave)\n\tsetSidebar(playerId, "Mobs left", wavePhase === "fighting" ? mobsAlive() : 0)\n}\n\nfunction waveSize(number) {\n\treturn CONFIG.firstWaveSize + (number - 1) * CONFIG.extraPerWave\n}\n\nfunction startBreak() {\n\twavePhase = "break"\n\tannounce("Wave " + (wave + 1) + " is coming! Get ready!", "yellow")\n\tstartCountdown(CONFIG.waveBreakSeconds, startNextWave)\n}\n\nfunction startNextWave() {\n\tconst ids = spawnMobs(CONFIG.mobType, waveSize(wave + 1), CONFIG.spawnCenter, CONFIG.spawnSpread)\n\tif (ids.length === 0) {\n\t\t// The wave isn\'t used up: it is tried again when a player next joins\n\t\twavePhase = "waiting"\n\t\tannounce("No mobs could spawn! Turn on mob spawning in your world settings.", "red")\n\t\treturn\n\t}\n\twave++\n\tfor (const mobId of ids) {\n\t\twaveMobIds[mobId] = true\n\t}\n\twavePhase = "fighting"\n\tannounce("Wave " + wave + ": " + ids.length + " " + CONFIG.mobType + "s!", "orange")\n}\n\nfunction rewardKill(playerId) {\n\tif (CONFIG.coinsPerKill > 0) {\n\t\taddCoins(playerId, CONFIG.coinsPerKill)\n\t}\n}\n\nfunction onPlayerKilledMob(playerId, mobId) {\n\tif (waveMobIds[mobId]) {\n\t\tdelete waveMobIds[mobId]\n\t\trewardKill(playerId)\n\t}\n}\n\nfunction endGame(won) {\n\twavePhase = "over"\n\tcancelCountdown()\n\tremoveAllMobs()\n\tif (won) {\n\t\tannounce("You survived all " + CONFIG.maxWaves + " waves! You win!", "lime")\n\t} else {\n\t\tannounce("Game over! You made it to wave " + wave + ".", "red")\n\t}\n\trunLater(8, newGame)\n}\n\nfunction newGame() {\n\tif (wavePhase !== "over") {\n\t\treturn\n\t}\n\twave = 0\n\tfor (const mobId in waveMobIds) {\n\t\tdelete waveMobIds[mobId]\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tapi.setPosition(playerId, CONFIG.spawnCenter[0], CONFIG.spawnCenter[1], CONFIG.spawnCenter[2])\n\t\t} else {\n\t\t\tapi.forceRespawn(playerId, CONFIG.spawnCenter)\n\t\t}\n\t\thealFully(playerId)\n\t\tshowWave(playerId)\n\t}\n\twavePhase = "waiting"\n\tif (api.getPlayerIds().length > 0) {\n\t\tstartBreak()\n\t}\n}\n\nfunction tick(ms) {\n\tconst players = api.getPlayerIds()\n\tif (wavePhase !== "break" && wavePhase !== "fighting") {\n\t\treturn\n\t}\n\tif (players.length > 0 && players.every((playerId) => !api.isAlive(playerId))) {\n\t\tendGame(false)\n\t\treturn\n\t}\n\tif (wavePhase === "fighting" && mobsAlive() === 0) {\n\t\tif (CONFIG.maxWaves > 0 && wave >= CONFIG.maxWaves) {\n\t\t\tendGame(true)\n\t\t} else {\n\t\t\tstartBreak()\n\t\t}\n\t}\n\tconst shown = wave + " " + wavePhase + " " + mobsAlive()\n\tif (shown !== lastShown) {\n\t\tlastShown = shown\n\t\tfor (const playerId of players) {\n\t\t\tshowWave(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn CONFIG.spawnCenter\n}\n\nfunction onPlayerLeave(playerId) {\n\t// The last player left: everything stops until someone joins\n\tif (api.getPlayerIds().filter((id) => id !== playerId).length === 0) {\n\t\tcancelCountdown()\n\t\tremoveAllMobs()\n\t\twave = 0\n\t\twavePhase = "waiting"\n\t}\n}',
        changeable: [{
          name: "rewardKill",
          about: "what a player gets for killing a wave mob: coins, an item, a score"
        }, {
          name: "waveSize",
          about: "how many mobs a wave has, from its number"
        }, {
          name: "endGame",
          about: "what happens when everyone is dead (won is false) or every wave is cleared (won is true)"
        }],
        setup: "Turn on mob spawning in your world settings and build an arena around spawnCenter for the mobs to come at you in."
      }, {
        name: "bedwars",
        kind: "game",
        title: "Bed Wars",
        category: "teams",
        summary: "Teams each guard a bed: while it stands they come back after dying; break the other beds, knock everyone out, and the last team left wins",
        keywords: ["eggwars", "egg wars", "bedwars", "bed wars", "bedwar", "bed war", "bedwards", "beds", "bed", "break the bed", "protect the bed", "team", "teams", "generator", "islands"],
        howItPlays: "Rounds: once enough players are in, a countdown runs, the players are split into teams (teamNames), each team's bed (bedBlocks) is placed at its bedPositions and everyone goes to their team's spawn (teamSpawns) with startItems. While a team's bed stands, its players come back at their spawn after dying. Breaking another team's bed tells everyone; a team can't break its own. A player whose bed is gone is out when they die and watches as a spectator. Every generatorSeconds, each player still in gets resourceAmount of resourceItem straight into their inventory. The last team with players left wins; teammates can't hurt each other.",
        settings: [{
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the teams, 2 to 4 of them"
        }, {
          key: "teamSpawns",
          kind: "list",
          value: "[[-20, 10, 0], [20, 10, 0]]",
          about: "where each team starts and comes back, one [x, y, z] per team in the same order as teamNames"
        }, {
          key: "bedPositions",
          kind: "list",
          value: "[[-25, 10, 0], [25, 10, 0]]",
          about: "where each team's bed is placed, one [x, y, z] per team in the same order as teamNames"
        }, {
          key: "bedBlocks",
          kind: "list",
          names: "block",
          value: '["Red Bed", "Blue Bed"]',
          about: "the bed block of each team, in the same order as teamNames"
        }, {
          key: "startItems",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1], ["White Wool", 16]]',
          about: "what each player gets at the start, and again after coming back: [item, amount] pairs"
        }, {
          key: "resourceItem",
          kind: "item",
          value: '"White Wool"',
          about: "what the generator gives each player still in"
        }, {
          key: "resourceAmount",
          kind: "number",
          value: "4",
          about: "how many of resourceItem the generator gives each time"
        }, {
          key: "generatorSeconds",
          kind: "number",
          value: "10",
          about: "how often the generator gives resourceItem, in seconds"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "600",
          about: "longest a round lasts, in seconds (0: no limit)"
        }],
        code: '// Bed Wars: every team has a bed. While your bed stands, you come back at your team\'s spawn after dying. Break the\n// other teams\' beds (not your own!) so they can\'t come back, then knock them out. The last team left wins.\nconst bedsStanding = {}\nlet generatorTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tjoinSmallestTeam(playerId)\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A round is on: watch this one, you\'ll play in the next!", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tsendToSpawn(playerId)\n\tapi.sendMessage(playerId, "Welcome to Bed Wars! Protect your bed and break the others.", { color: "aqua" })\n}\n\nfunction teamSpawn(team) {\n\treturn CONFIG.teamSpawns[CONFIG.teamNames.indexOf(team)] || CONFIG.teamSpawns[0]\n}\n\nfunction teamBed(team) {\n\tconst bed = CONFIG.bedPositions[CONFIG.teamNames.indexOf(team)] || CONFIG.bedPositions[0]\n\treturn [Math.floor(bed[0]), Math.floor(bed[1]), Math.floor(bed[2])]\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = teamSpawn(getTeam(playerId))\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction beginRound() {\n\tbringEveryoneBack()\n\tevenTeams()\n\tCONFIG.teamNames.forEach((team, index) => {\n\t\tconst bed = teamBed(team)\n\t\tbedsStanding[team] = teamMembers(team).length > 0\n\t\tif (bedsStanding[team]) {\n\t\t\tapi.setBlock(bed[0], bed[1], bed[2], CONFIG.bedBlocks[index] || CONFIG.bedBlocks[0])\n\t\t}\n\t})\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, teamSpawn(getTeam(playerId)))\n\t\t}\n\t\tsendToSpawn(playerId)\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, CONFIG.startItems)\n\t}\n\tgeneratorTimer = repeatEvery(CONFIG.generatorSeconds, runGenerators)\n\tannounce("Protect your bed and break the others!", "aqua")\n}\n\n// After players leave, one team can be much bigger: move players from the biggest team until the teams are even\nfunction evenTeams() {\n\tfor (let i = 0; i < api.getPlayerIds().length; i++) {\n\t\tconst sizes = CONFIG.teamNames.map((team) => teamMembers(team).length)\n\t\tif (Math.max(...sizes) - Math.min(...sizes) <= 1) {\n\t\t\treturn\n\t\t}\n\t\tconst biggest = CONFIG.teamNames[sizes.indexOf(Math.max(...sizes))]\n\t\tjoinSmallestTeam(teamMembers(biggest)[0])\n\t}\n}\n\nfunction finishRound() {\n\tcancelTimer(generatorTimer)\n\t// Those knocked out play again, waiting at their spawn for the next round\n\tconst left = playersLeft()\n\tconst out = api.getPlayerIds().filter((playerId) => !left.includes(playerId))\n\tbringEveryoneBack()\n\tfor (const playerId of out) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tsendToSpawn(playerId)\n\t\t}\n\t}\n}\n\n// Gives every player still in the round their team generator\'s items\nfunction runGenerators() {\n\tfor (const playerId of playersLeft()) {\n\t\tif (getTeam(playerId) !== null && api.isAlive(playerId)) {\n\t\t\tapi.giveItem(playerId, CONFIG.resourceItem, CONFIG.resourceAmount)\n\t\t}\n\t}\n}\n\n// The team whose bed is at (or right next to) x, y, z, or null\nfunction bedOwnerAt(x, y, z) {\n\tfor (const team of CONFIG.teamNames) {\n\t\tconst bed = teamBed(team)\n\t\tif (Math.abs(x - bed[0]) <= 1 && y === bed[1] && Math.abs(z - bed[2]) <= 1) {\n\t\t\treturn team\n\t\t}\n\t}\n\treturn null\n}\n\n// A bed\'s foot ("Red Bed") or head ("_Red Bed Head"), not Bedrock\nfunction isBedBlock(block) {\n\treturn / Bed( Head)?$/.test(block)\n}\n\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst team = isBedBlock(fromBlock) ? bedOwnerAt(x, y, z) : null\n\tif (team === null) {\n\t\treturn\n\t}\n\tif (!isRoundRunning()) {\n\t\treturn "preventChange"\n\t}\n\tif (team === getTeam(playerId)) {\n\t\tapi.sendMessage(playerId, "That\'s your own bed! Protect it.", { color: "red" })\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst team = isBedBlock(fromBlock) ? bedOwnerAt(x, y, z) : null\n\tif (team !== null && bedsStanding[team] && isRoundRunning()) {\n\t\tbedsStanding[team] = false\n\t\tannounce(api.getEntityName(playerId) + " broke team " + team + "\'s bed!", "red")\n\t\tfor (const member of teamMembers(team)) {\n\t\t\tapi.sendMessage(member, "Your bed is gone! If you die now, you\'re out.", { color: "red" })\n\t\t}\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (!isRoundRunning() || sameTeam(attackingPlayer, damagedPlayer)) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\trunLater(0.5, () => {\n\t\t\tgiveKit(playerId, CONFIG.startItems)\n\t\t})\n\t}\n\treturn teamSpawn(getTeam(playerId))\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\t// A player who died with their bed gone is out\n\tfor (const playerId of playersLeft()) {\n\t\tif (!api.isAlive(playerId) && !bedsStanding[getTeam(playerId)]) {\n\t\t\teliminate(playerId)\n\t\t\tannounce(api.getEntityName(playerId) + " is out!", "red")\n\t\t}\n\t}\n\t// Players leaving or being knocked out can leave one team\n\tconst teamsLeft = []\n\tfor (const playerId of playersLeft()) {\n\t\tconst team = getTeam(playerId)\n\t\tif (team !== null && !teamsLeft.includes(team)) {\n\t\t\tteamsLeft.push(team)\n\t\t}\n\t}\n\tif (teamsLeft.length === 1) {\n\t\tteamWins(teamsLeft[0])\n\t} else if (teamsLeft.length === 0) {\n\t\tendRound("Nobody is left! Nobody wins.")\n\t}\n}\n\nfunction teamWins(team) {\n\tendRound("Team " + team + " wins!")\n}',
        changeable: [{
          name: "teamWins",
          about: "what happens when a team wins: the message, rewards for its players"
        }, {
          name: "runGenerators",
          about: "what the generator gives each player still in, every generatorSeconds"
        }],
        setup: "Build an island for each team around its spawn and bed position, with gaps between them, and turn PvP on in the world settings."
      }, {
        name: "miningSimulator",
        kind: "game",
        title: "Mining simulator",
        category: "economy",
        summary: "Break blocks for coins (each block has its value), the blocks grow back, /upgrade buys a bigger coin multiplier, /pickaxe buys the next better pickaxe when the pickaxes setting lists some, a backpack (backpackSize) can hold the ores until /sell, coins and levels are saved and the richest top the leaderboard",
        keywords: ["simulator", "simulater", "sim", "mining", "mine", "miner", "ore", "bu", "clicker", "grind", "grinding", "upgrade", "upgrades", "pickaxe", "pickaxes", "buy pickaxes", "better pickaxe", "rich", "backpack", "sell", "auto sell", "autosell", "brain rot"],
        howItPlays: "Breaking a block listed in blockValues gives its coins, times the player's level, and it grows back after regrowSeconds. /upgrade spends coins to go up a level (each level costs upgradePriceGrowth times the last). When pickaxes lists some, players start with the first one and /pickaxe spends coins to swap it for the next better one, until the last. With backpackSize above 0, mined ores go into the player's inventory instead, until it holds backpackSize of them (shown on the sidebar): then they can't mine until /sell sells them all for their coins times their level, or, with autoSell on, the full backpack sells itself. Coins, levels and the pickaxe are saved, the leaderboard shows everyone's coins and level, and other blocks can't be broken when protectOtherBlocks is on.",
        settings: [{
          key: "blockValues",
          kind: "list",
          names: "block",
          value: '[["Coal Ore", 1], ["Iron Ore", 3], ["Gold Ore", 8], ["Diamond Ore", 20]]',
          about: "the blocks players mine, each [block, coins it gives]"
        }, {
          key: "regrowSeconds",
          kind: "number",
          value: "5",
          about: "seconds before a mined block grows back (0: never)"
        }, {
          key: "upgradeCost",
          kind: "number",
          value: "25",
          about: "coins the first /upgrade costs"
        }, {
          key: "upgradePriceGrowth",
          kind: "number",
          value: "2",
          about: "each upgrade costs this many times the one before"
        }, {
          key: "starterPickaxe",
          kind: "item",
          value: '"Iron Pickaxe"',
          about: "the pickaxe every player gets when they join (not used when pickaxes lists some)"
        }, {
          key: "pickaxes",
          kind: "list",
          names: "item",
          value: "[]",
          about: 'better pickaxes players buy one by one with /pickaxe, each [pickaxe, coins it costs], weakest first; the first is given on joining (so its price is not used). [] means no /pickaxe. Example: [["Wood Pickaxe", 0], ["Stone Pickaxe", 50], ["Iron Pickaxe", 200], ["Gold Pickaxe", 500], ["Diamond Pickaxe", 1500]]'
        }, {
          key: "backpackSize",
          kind: "number",
          value: "0",
          about: "ores a player can carry before they must /sell them; mined ores go into their inventory (0: no backpack, each ore gives its coins as it's mined)"
        }, {
          key: "autoSell",
          kind: "boolean",
          value: "false",
          about: "true: a full backpack sells itself, so players never need /sell (only with backpackSize above 0)"
        }, {
          key: "protectOtherBlocks",
          kind: "boolean",
          value: "true",
          about: "true: blocks not in blockValues can't be broken, so the mine stays in one piece"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Mining simulator: break blocks to earn coins (blockValues says what each is worth) and they grow back. /upgrade\n// raises your level, and every block gives coins times your level. If pickaxes lists some, /pickaxe buys the next one.\n// Coins, levels and the pickaxe you own are saved. With backpackSize above 0, ores fill your backpack (your inventory)\n// instead, and /sell (or autoSell, when it\'s full) turns them into coins.\nconst mineLevels = {}\nconst pickaxeTiers = {}\n\nfunction onPlayerJoin(playerId) {\n\tmineLevels[playerId] = Number(getSaved(playerId, "mineLevel", 1))\n\tif (CONFIG.pickaxes.length > 0) {\n\t\tpickaxeTiers[playerId] = Math.min(Number(getSaved(playerId, "pickaxeTier", 0)), CONFIG.pickaxes.length - 1)\n\t\tif (!api.hasItem(playerId, CONFIG.pickaxes[pickaxeTiers[playerId]][0])) {\n\t\t\tapi.giveItem(playerId, CONFIG.pickaxes[pickaxeTiers[playerId]][0], 1)\n\t\t}\n\t} else if (!api.hasItem(playerId, CONFIG.starterPickaxe)) {\n\t\tapi.giveItem(playerId, CONFIG.starterPickaxe, 1)\n\t}\n\tapi.setClientOption(playerId, "lobbyLeaderboardInfo", {\n\t\tname: { displayName: "Name", sortPriority: 0 },\n\t\tcoins: { displayName: "Coins", sortPriority: 1 },\n\t\tlevel: { displayName: "Level", sortPriority: 2 },\n\t})\n\tshowProgress(playerId)\n\tapi.sendMessage(playerId, "Mine blocks to earn coins! Type /upgrade to earn more from every block.", { color: "aqua" })\n\tif (CONFIG.pickaxes.length > 0) {\n\t\tapi.sendMessage(playerId, "Type /pickaxe to buy a better pickaxe.", { color: "aqua" })\n\t}\n\tif (CONFIG.backpackSize > 0) {\n\t\tapi.sendMessage(playerId, "Your backpack holds " + CONFIG.backpackSize + " ores. " + (CONFIG.autoSell ? "It sells itself when it\'s full." : "Type /sell to sell them."), { color: "aqua" })\n\t}\n}\n\nfunction blockValue(blockName) {\n\tfor (const entry of CONFIG.blockValues) {\n\t\tif (entry[0] === blockName) {\n\t\t\treturn entry[1]\n\t\t}\n\t}\n\treturn null\n}\n\n// How many ores a player carries: the blockValues blocks in their inventory\nfunction backpackCount(playerId) {\n\tlet count = 0\n\tfor (const entry of CONFIG.blockValues) {\n\t\ttry {\n\t\t\tcount += Math.max(0, api.getInventoryItemAmount(playerId, entry[0]))\n\t\t} catch (error) {\n\t\t\t// A block that isn\'t an item can\'t be carried\n\t\t}\n\t}\n\treturn count\n}\n\n// Sells every ore a player carries for its coins times their level\nfunction sellOres(playerId) {\n\tconst level = mineLevels[playerId] || 1\n\tconst earned = sellItems(playerId, CONFIG.blockValues.map((entry) => [entry[0], entry[1] * level]))\n\tif (earned === 0) {\n\t\tapi.sendMessage(playerId, "Your backpack is empty. Mine some ores first!", { color: "orange" })\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, "Sold your ores for " + earned + " coins!", { color: "lime" })\n\tshowProgress(playerId)\n}\n\nfunction upgradePrice(level) {\n\treturn Math.round(CONFIG.upgradeCost * Math.pow(CONFIG.upgradePriceGrowth, level - 1))\n}\n\nfunction showProgress(playerId) {\n\tconst level = mineLevels[playerId] || 1\n\tsetSidebar(playerId, "Level", level + " (x" + level + " coins)")\n\tsetSidebar(playerId, "Next upgrade", upgradePrice(level) + " coins")\n\tif (CONFIG.backpackSize > 0) {\n\t\tsetSidebar(playerId, "Backpack", backpackCount(playerId) + "/" + CONFIG.backpackSize)\n\t}\n\tif (CONFIG.pickaxes.length > 0) {\n\t\tconst tier = pickaxeTiers[playerId] || 0\n\t\tsetSidebar(playerId, "Pickaxe", CONFIG.pickaxes[tier][0])\n\t\tconst next = CONFIG.pickaxes[tier + 1]\n\t\tsetSidebar(playerId, "Next pickaxe", next ? next[0] + " (" + next[1] + " coins)" : "You have the best!")\n\t}\n\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: getCoins(playerId), level: level }, true)\n}\n\nfunction mineBlock(playerId, x, y, z, blockName) {\n\tif (CONFIG.backpackSize > 0) {\n\t\tapi.giveItem(playerId, blockName, 1)\n\t\tconst count = backpackCount(playerId)\n\t\tapi.sendFlyingMiddleMessage(playerId, "+1 " + blockName + " (" + count + "/" + CONFIG.backpackSize + ")", 1)\n\t\tif (count >= CONFIG.backpackSize && CONFIG.autoSell) {\n\t\t\tsellOres(playerId)\n\t\t} else if (count >= CONFIG.backpackSize) {\n\t\t\tapi.sendMessage(playerId, "Backpack full! Type /sell to sell your ores.", { color: "orange" })\n\t\t}\n\t} else {\n\t\tconst coins = blockValue(blockName) * (mineLevels[playerId] || 1)\n\t\taddCoins(playerId, coins)\n\t\tapi.sendFlyingMiddleMessage(playerId, "+" + coins + " coins", 1)\n\t}\n\tshowProgress(playerId)\n\tif (CONFIG.regrowSeconds > 0) {\n\t\trunLater(CONFIG.regrowSeconds, () => {\n\t\t\tif (api.getBlock(x, y, z) === "Air") {\n\t\t\t\tapi.setBlock(x, y, z, blockName)\n\t\t\t}\n\t\t})\n\t}\n}\n\nfunction buyUpgrade(playerId) {\n\tconst level = mineLevels[playerId] || 1\n\tconst price = upgradePrice(level)\n\tif (!spendCoins(playerId, price)) {\n\t\tapi.sendMessage(playerId, "You need " + price + " coins to upgrade. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tmineLevels[playerId] = level + 1\n\tsetSaved(playerId, "mineLevel", level + 1)\n\tapi.sendMessage(playerId, "Level " + (level + 1) + "! Every block now gives x" + (level + 1) + " coins.", { color: "lime" })\n\tshowProgress(playerId)\n}\n\nfunction buyNextPickaxe(playerId) {\n\tconst tier = pickaxeTiers[playerId] || 0\n\tconst next = CONFIG.pickaxes[tier + 1]\n\tif (!next) {\n\t\tapi.sendMessage(playerId, "You already have the best pickaxe!", { color: "gold" })\n\t\treturn\n\t}\n\tif (!spendCoins(playerId, next[1])) {\n\t\tapi.sendMessage(playerId, "You need " + next[1] + " coins for the " + next[0] + ". You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (CONFIG.pickaxes[tier][0] !== next[0]) {\n\t\tapi.removeItemName(playerId, CONFIG.pickaxes[tier][0], 1)\n\t}\n\tapi.giveItem(playerId, next[0], 1)\n\tpickaxeTiers[playerId] = tier + 1\n\tsetSaved(playerId, "pickaxeTier", tier + 1)\n\tconst after = CONFIG.pickaxes[tier + 2]\n\tapi.sendMessage(playerId, "You bought the " + next[0] + "! " + (after ? "Next: " + after[0] + " for " + after[1] + " coins." : "It\'s the best one!"), { color: "lime" })\n\tshowProgress(playerId)\n}\n\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (CONFIG.backpackSize > 0 && toBlock === "Air" && blockValue(fromBlock) !== null && backpackCount(playerId) >= CONFIG.backpackSize) {\n\t\tapi.sendFlyingMiddleMessage(playerId, "Backpack full! /sell", 1)\n\t\treturn "preventChange"\n\t}\n\t// Ores from a backpack can\'t be placed, so nobody mines the same ore twice\n\tif (CONFIG.backpackSize > 0 && fromBlock === "Air" && blockValue(toBlock) !== null) {\n\t\treturn "preventChange"\n\t}\n\tif (CONFIG.protectOtherBlocks && toBlock === "Air" && fromBlock !== "Air" && blockValue(fromBlock) === null) {\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (toBlock === "Air" && blockValue(fromBlock) !== null) {\n\t\tmineBlock(playerId, x, y, z, fromBlock)\n\t\treturn "preventDrop"\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tif (command.trim().toLowerCase() === "upgrade") {\n\t\tbuyUpgrade(playerId)\n\t\treturn true\n\t}\n\tif (CONFIG.backpackSize > 0 && command.trim().toLowerCase() === "sell") {\n\t\tsellOres(playerId)\n\t\treturn true\n\t}\n\tif (CONFIG.pickaxes.length > 0 && command.trim().toLowerCase() === "pickaxe") {\n\t\tbuyNextPickaxe(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete mineLevels[playerId]\n\tdelete pickaxeTiers[playerId]\n}',
        changeable: [{
          name: "mineBlock",
          about: "what mining a block gives: the coins, the message, the block growing back"
        }, {
          name: "buyUpgrade",
          about: "what /upgrade costs and gives"
        }, {
          name: "sellOres",
          about: "what /sell gives for the ores in a backpack: the coins and the message"
        }, {
          name: "buyNextPickaxe",
          about: "what /pickaxe costs and gives: taking the coins, swapping the pickaxe"
        }],
        setup: "Build a mine from the blocks in blockValues where players can reach it; players must be allowed to break blocks there."
      }, {
        name: "tycoon",
        kind: "game",
        title: "Tycoon",
        category: "economy",
        summary: "Coins come in every second; upgrades (droppers, factories...) bought with /upgrade or in the shop screen raise the income, /rebirth starts again for a multiplier, and progress is saved",
        keywords: ["afk money", "tycoon", "brainrot", "brainrots", "steal a brainrot", "tycon", "tycoone", "tyccon", "idle", "idle game", "money over time", "income", "cash", "money", "rich", "millionaire", "business", "factory", "dropper", "droppers", "upgrade", "upgrades", "rebirth", "rebirths", "rebirthing", "multiplier", "simulator", "simulater", "sim"],
        howItPlays: "Every player earns incomePerSecond coins each second. /upgrades lists the upgrades and opens the shop screen; /upgrade 2 (or its name) buys one, once, and adds its income. /rebirth (when rebirthCost is more than 0) costs coins, takes every upgrade and coin away, and multiplies all income after it by rebirthMultiplier; each rebirth costs more than the last. Coins, upgrades and rebirths are saved when saveCoins is on, and the sidebar and leaderboard show income and rebirths.",
        settings: [{
          key: "incomePerSecond",
          kind: "number",
          value: "1",
          about: "coins every player earns each second before any upgrades"
        }, {
          key: "upgrades",
          kind: "list",
          value: '[["Dropper", 25, 1], ["Conveyor", 100, 5], ["Factory", 500, 20], ["Mega Factory", 2500, 100]]',
          about: "what players can buy, each [name, price in coins, extra coins per second it gives]; each is bought once"
        }, {
          key: "rebirthCost",
          kind: "number",
          value: "10000",
          about: "coins the first /rebirth costs; each one after costs that much more (0: no rebirths)"
        }, {
          key: "rebirthMultiplier",
          kind: "number",
          value: "2",
          about: "each rebirth multiplies income by this (2: x2, then x4, x8...)"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins, upgrades and rebirths are kept after a player leaves"
        }],
        code: '// Tycoon: coins come in by themselves every second. /upgrades shows what you can buy and /upgrade <number> buys it,\n// so you earn more each second. /rebirth starts you again from nothing, but everything after earns more.\nconst ownedUpgrades = {}\nconst rebirthCounts = {}\nlet tycoonStarted = false\n\nfunction onPlayerJoin(playerId) {\n\tstartTycoon()\n\tconst saved = CONFIG.saveCoins ? String(getSaved(playerId, "tycoonUpgrades", "")) : ""\n\townedUpgrades[playerId] = saved.split("|").filter((name) => findUpgrade(name) !== null)\n\trebirthCounts[playerId] = CONFIG.saveCoins ? Number(getSaved(playerId, "tycoonRebirths", 0)) : 0\n\tapi.setClientOption(playerId, "lobbyLeaderboardInfo", {\n\t\tname: { displayName: "Name", sortPriority: 0 },\n\t\tincome: { displayName: "Coins/s", sortPriority: 1 },\n\t\trebirths: { displayName: "Rebirths", sortPriority: 2 },\n\t})\n\trefreshTycoon(playerId)\n\tapi.sendMessage(playerId, "You earn coins every second! Type /upgrades to see how to earn more.", { color: "aqua" })\n}\n\nfunction startTycoon() {\n\tif (tycoonStarted) {\n\t\treturn\n\t}\n\ttycoonStarted = true\n\tapi.configureShopCategory("Upgrades", { customTitle: "Upgrades", autoSelectCategory: true })\n\tCONFIG.upgrades.forEach((upgrade, index) => {\n\t\tapi.createShopItem("Upgrades", "upgrade" + (index + 1), {\n\t\t\timage: "Gold Bar",\n\t\t\tcost: upgrade[1],\n\t\t\tcurrency: "coins",\n\t\t\tcustomTitle: upgrade[0],\n\t\t\tdescription: "+" + upgrade[2] + " coins every second",\n\t\t\tsortPriority: CONFIG.upgrades.length - index,\n\t\t})\n\t})\n\trepeatEvery(1, payEveryone)\n}\n\nfunction payEveryone() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (ownedUpgrades[playerId]) {\n\t\t\taddCoins(playerId, tycoonIncome(playerId))\n\t\t\tsetSidebar(playerId, "Coins", getCoins(playerId))\n\t\t}\n\t}\n}\n\nfunction rebirthBonus(playerId) {\n\treturn Math.pow(CONFIG.rebirthMultiplier, rebirthCounts[playerId] || 0)\n}\n\nfunction tycoonIncome(playerId) {\n\tlet income = CONFIG.incomePerSecond\n\tfor (const name of ownedUpgrades[playerId] || []) {\n\t\tincome += findUpgrade(name)[2]\n\t}\n\treturn Math.round(income * rebirthBonus(playerId))\n}\n\nfunction rebirthPrice(playerId) {\n\treturn CONFIG.rebirthCost * ((rebirthCounts[playerId] || 0) + 1)\n}\n\n// Saves a player\'s progress and shows it: sidebar, leaderboard and which upgrades the shop screen still sells\nfunction refreshTycoon(playerId) {\n\tif (CONFIG.saveCoins) {\n\t\tsetSaved(playerId, "tycoonUpgrades", ownedUpgrades[playerId].join("|"))\n\t\tsetSaved(playerId, "tycoonRebirths", rebirthCounts[playerId])\n\t}\n\tCONFIG.upgrades.forEach((upgrade, index) => {\n\t\tif (ownedUpgrades[playerId].includes(upgrade[0])) {\n\t\t\tapi.updateShopItemForPlayer(playerId, "Upgrades", "upgrade" + (index + 1), { canBuy: false, buyButtonText: "Owned" })\n\t\t} else {\n\t\t\tapi.resetShopItemForPlayer(playerId, "Upgrades", "upgrade" + (index + 1))\n\t\t}\n\t})\n\tsetSidebar(playerId, "Coins", getCoins(playerId))\n\tsetSidebar(playerId, "Income", tycoonIncome(playerId) + " coins/s")\n\tif (CONFIG.rebirthCost > 0) {\n\t\tsetSidebar(playerId, "Rebirths", rebirthCounts[playerId] + " (x" + Math.round(rebirthBonus(playerId) * 100) / 100 + ")")\n\t}\n\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { income: tycoonIncome(playerId), rebirths: rebirthCounts[playerId] }, true)\n}\n\nfunction findUpgrade(wanted) {\n\tconst number = Number(wanted)\n\tif (wanted !== "" && Number.isInteger(number) && number >= 1 && number <= CONFIG.upgrades.length) {\n\t\treturn CONFIG.upgrades[number - 1]\n\t}\n\tconst name = String(wanted).toLowerCase()\n\treturn CONFIG.upgrades.find((upgrade) => upgrade[0].toLowerCase() === name) || null\n}\n\nfunction listUpgrades(playerId) {\n\tconst lines = CONFIG.upgrades.map((upgrade, index) => {\n\t\tconst owned = ownedUpgrades[playerId].includes(upgrade[0])\n\t\treturn (index + 1) + ". " + upgrade[0] + " - " + (owned ? "owned" : upgrade[1] + " coins") + ", +" + upgrade[2] + " coins/s"\n\t})\n\tlet text = "Upgrades (you have " + getCoins(playerId) + " coins):\\n" + lines.join("\\n") + "\\nType /upgrade and a number, like /upgrade 1"\n\tif (CONFIG.rebirthCost > 0) {\n\t\ttext += "\\nType /rebirth to start again with x" + CONFIG.rebirthMultiplier + " income (" + rebirthPrice(playerId) + " coins)"\n\t}\n\tapi.sendMessage(playerId, text, { color: "yellow" })\n\tapi.openShop(playerId, false, "Upgrades", false)\n}\n\nfunction buyTycoonUpgrade(playerId, wanted) {\n\tconst upgrade = findUpgrade(wanted)\n\tif (upgrade === null) {\n\t\tapi.sendMessage(playerId, "That isn\'t an upgrade. Type /upgrades to see them.", { color: "orange" })\n\t} else if (ownedUpgrades[playerId].includes(upgrade[0])) {\n\t\tapi.sendMessage(playerId, "You already have " + upgrade[0] + ".", { color: "orange" })\n\t} else if (!spendCoins(playerId, upgrade[1])) {\n\t\tapi.sendMessage(playerId, upgrade[0] + " costs " + upgrade[1] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t} else {\n\t\tgainUpgrade(playerId, upgrade)\n\t}\n}\n\nfunction gainUpgrade(playerId, upgrade) {\n\townedUpgrades[playerId].push(upgrade[0])\n\trefreshTycoon(playerId)\n\tupgradeBought(playerId, upgrade)\n}\n\nfunction upgradeBought(playerId, upgrade) {\n\tapi.sendMessage(playerId, "You bought " + upgrade[0] + "! You now earn " + tycoonIncome(playerId) + " coins every second.", { color: "lime" })\n}\n\nfunction rebirthPlayer(playerId) {\n\tconst price = rebirthPrice(playerId)\n\tif (!spendCoins(playerId, price)) {\n\t\tapi.sendMessage(playerId, "Rebirth costs " + price + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tapi.setCurrencyAmount(playerId, "coins", CONFIG.startCoins)\n\townedUpgrades[playerId] = []\n\trebirthCounts[playerId] = (rebirthCounts[playerId] || 0) + 1\n\trefreshTycoon(playerId)\n\tannounce(api.getEntityName(playerId) + " rebirthed! They now earn x" + Math.round(rebirthBonus(playerId) * 100) / 100 + " coins.", "gold")\n}\n\nfunction onPlayerBoughtShopItem(playerId, categoryKey, itemKey) {\n\tconst upgrade = categoryKey === "Upgrades" ? CONFIG.upgrades[Number(itemKey.slice(7)) - 1] : null\n\t// The shop screen took the coins, and sells an upgrade only to players without it\n\tif (upgrade && ownedUpgrades[playerId] && !ownedUpgrades[playerId].includes(upgrade[0])) {\n\t\tgainUpgrade(playerId, upgrade)\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tconst rest = words.slice(1).join(" ").trim()\n\tif (name === "upgrades" || (name === "upgrade" && rest === "")) {\n\t\tlistUpgrades(playerId)\n\t\treturn true\n\t}\n\tif (name === "upgrade") {\n\t\tbuyTycoonUpgrade(playerId, rest)\n\t\treturn true\n\t}\n\tif (name === "rebirth" && CONFIG.rebirthCost > 0) {\n\t\trebirthPlayer(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete ownedUpgrades[playerId]\n\tdelete rebirthCounts[playerId]\n}',
        changeable: [{
          name: "tycoonIncome",
          about: "how many coins a player earns each second: the start income, plus each upgrade's, times their rebirths"
        }, {
          name: "upgradeBought",
          about: "what else happens when a player buys an upgrade: the message, or an extra like an item or speed"
        }, {
          name: "rebirthPlayer",
          about: "what /rebirth costs, takes away and gives"
        }],
        setup: "Nothing to build: coins come in by themselves. Players buy upgrades with /upgrade or in the shop screen."
      }, {
        name: "garden",
        kind: "game",
        title: "Grow a garden",
        category: "economy",
        summary: "Buy seeds with coins, plant them on soil, wait while they grow, break the ripe plants for fruit and sell it; some harvests are golden and worth much more",
        keywords: ["grow a garden", "grow a gardin", "garden", "gardens", "gardening", "gardan", "farm", "farms", "farming", "farmin", "farm sim", "farming simulator", "plant", "plants", "planting", "seed", "seeds", "crop", "crops", "harvest", "harvesting", "hravest", "fruit", "vegetables", "veggies", "mutation", "mutations", "golden fruit", "stardew"],
        howItPlays: "Each crop in crops is [seed block, plant name, fruit item, seed price, sell price, grow seconds]. /seeds lists them and /buyseed carrot 3 buys seeds with coins. A player places a seed on the soilBlock (anywhere else is refused) and the plant grows: the seed, then a sprout halfway, then ripe after its grow seconds, while everyone is away or not. Breaking a plant that isn't ripe is refused; breaking a ripe one gives its fruit, with a rareChance percent of being a golden harvest of rareMultiplier fruit, announced to everyone. Fruit are real items in the inventory: /sell or standing on the sellPad sells all of them for coins, and the sidebar shows what they are worth. With regrow on a harvested plant starts again as a seed, else it is gone and needs new seed. Coins are kept when saveCoins is on.",
        settings: [{
          key: "crops",
          kind: "list",
          names: "item",
          value: '[["Wheat Seeds", "Wheat", "Wheat", 5, 8, 10], ["Carrot Seeds", "Carrot Plant", "Carrot", 15, 30, 20], ["Potato Seeds", "Potato Plant", "Raw Potato", 40, 90, 40], ["Beetroot Seeds", "Beetroot Plant", "Beetroot", 100, 260, 70]]',
          about: "the crops, each [seed block players place, the plant's name (its stages and ripe block are made from it), fruit item harvested, seed price, price one fruit sells for, seconds to grow]"
        }, {
          key: "soilBlock",
          kind: "block",
          value: '"Tilled Soil"',
          about: "the block seeds must be placed on; build the garden out of it"
        }, {
          key: "sellPad",
          kind: "position",
          value: "[0, 10, 5]",
          about: "the block players stand on to sell all their fruit"
        }, {
          key: "startCoins",
          kind: "number",
          value: "20",
          about: "coins a new player starts with, for their first seeds"
        }, {
          key: "rareChance",
          kind: "number",
          value: "8",
          about: "percent of harvests that are golden (0 for none)"
        }, {
          key: "rareMultiplier",
          kind: "number",
          value: "5",
          about: "a golden harvest gives this many times the fruit, so is worth this many times as much"
        }, {
          key: "regrow",
          kind: "boolean",
          value: "false",
          about: "true: a harvested plant starts growing again by itself; false: it is gone and needs a new seed"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Grow a garden: buy seeds with coins (/seeds, /buyseed), place them on the soil and wait. A ripe plant gives fruit when\n// broken, which /sell or the sell pad turns into coins. Some harvests are golden. Plants keep growing while players are away.\nconst plants = {}\nconst lastNotice = {}\nlet gardenStarted = false\n\nfunction onPlayerJoin(playerId) {\n\tstartGarden()\n\tapi.sendMessage(playerId, "Welcome to the garden! Type /seeds to see seeds. Place them on " + CONFIG.soilBlock + ", break them when ripe, then /sell.", { color: "aqua" })\n\tshowGarden(playerId)\n}\n\nfunction startGarden() {\n\tif (gardenStarted) {\n\t\treturn\n\t}\n\tgardenStarted = true\n\taddCommand("seeds", (playerId) => listSeeds(playerId))\n\taddCommand("buyseed", (playerId, args) => buySeeds(playerId, args))\n\taddCommand("sell", (playerId) => sellCommand(playerId))\n\taddCommand("sellcrops", (playerId) => sellCommand(playerId))\n\trepeatEvery(1, growPlants)\n}\n\nfunction plantKey(x, y, z) {\n\treturn x + "," + y + "," + z\n}\n\nfunction cropNumber(seedBlock) {\n\treturn CONFIG.crops.findIndex((crop) => crop[0] === seedBlock)\n}\n\n// 0 seed, 1 sprout, 2 ripe\nfunction stageOf(plant) {\n\tconst age = (Date.now() - plant.start) / 1000\n\tconst grow = CONFIG.crops[plant.crop][5]\n\treturn age >= grow ? 2 : age >= grow / 2 ? 1 : 0\n}\n\nfunction blockForStage(crop, stage) {\n\treturn [crop[0], crop[1] + "_stage1", crop[1] + "|FreshlyGrown"][stage]\n}\n\n// The same message at most every 1.5 seconds, as a player holding the break button would see it over and over\nfunction notice(playerId, text) {\n\tconst last = lastNotice[playerId]\n\tif (!last || last.text !== text || Date.now() - last.at > 1500) {\n\t\tlastNotice[playerId] = { text: text, at: Date.now() }\n\t\tapi.sendMessage(playerId, text, { color: "orange" })\n\t}\n}\n\n// Every second: shows each plant at its stage, forgets lost ones, sells for players on the pad and updates the sidebar\nfunction growPlants() {\n\tlet ripe = 0\n\tlet total = 0\n\tfor (const key of Object.keys(plants)) {\n\t\tconst plant = plants[key]\n\t\tconst there = api.getBlock(plant.x, plant.y, plant.z)\n\t\tif (there === "Unloaded") {\n\t\t\tcontinue\n\t\t}\n\t\tif (there === "Air") {\n\t\t\tdelete plants[key]\n\t\t\tcontinue\n\t\t}\n\t\tconst stage = stageOf(plant)\n\t\tconst wanted = blockForStage(CONFIG.crops[plant.crop], stage)\n\t\tif (there !== wanted) {\n\t\t\tapi.setBlock(plant.x, plant.y, plant.z, wanted)\n\t\t}\n\t\tif (there !== wanted || !plant.frozen) {\n\t\t\t// The game\'s own farming would grow it on its own clock: this puts that off for good\n\t\t\tapi.setBlockData(plant.x, plant.y, plant.z, { growTime: Date.now() + 1e13 })\n\t\t\tplant.frozen = true\n\t\t}\n\t\ttotal++\n\t\tripe += stage === 2 ? 1 : 0\n\t}\n\tconst pad = CONFIG.sellPad\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (isInBox(playerId, [pad[0] - 1, pad[1], pad[2] - 1], [pad[0] + 1, pad[1] + 3, pad[2] + 1])) {\n\t\t\tsellFruit(playerId)\n\t\t}\n\t\tsetSidebar(playerId, "Ripe plants", ripe + " of " + total)\n\t\tsetSidebar(playerId, "Fruit worth", fruitWorth(playerId) + " coins")\n\t}\n}\n\nfunction fruitWorth(playerId) {\n\treturn CONFIG.crops.reduce((sum, crop) => sum + Math.max(0, api.getInventoryItemAmount(playerId, crop[2])) * crop[4], 0)\n}\n\nfunction showGarden(playerId) {\n\tsetSidebar(playerId, "Fruit worth", fruitWorth(playerId) + " coins")\n}\n\nfunction listSeeds(playerId) {\n\tconst lines = CONFIG.crops.map((crop, index) => (index + 1) + ". " + crop[0] + ": " + crop[3] + " coins, fruit sells for " + crop[4] + ", ready in " + crop[5] + "s")\n\tapi.sendMessage(playerId, "Seeds:\\n" + lines.join("\\n") + "\\nBuy with /buyseed and a name or number, like /buyseed carrot 3", { color: "yellow" })\n}\n\nfunction buySeeds(playerId, args) {\n\tconst words = args.slice()\n\tlet amount = 1\n\tif (words.length > 1 && Number.isInteger(Number(words[words.length - 1]))) {\n\t\tamount = Math.min(64, Math.max(1, Number(words.pop())))\n\t}\n\tconst wanted = words.join(" ").toLowerCase()\n\tconst index = wanted !== "" && Number.isInteger(Number(wanted)) ? Number(wanted) - 1 : CONFIG.crops.findIndex((crop) => wanted !== "" && (crop[0] + " " + crop[2]).toLowerCase().includes(wanted))\n\tif (index < 0 || index >= CONFIG.crops.length) {\n\t\tlistSeeds(playerId)\n\t\treturn\n\t}\n\tconst crop = CONFIG.crops[index]\n\tif (!spendCoins(playerId, crop[3] * amount)) {\n\t\tapi.sendMessage(playerId, amount + " " + crop[0] + " cost " + crop[3] * amount + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tconst given = api.giveItem(playerId, crop[0], amount)\n\tif (given < amount) {\n\t\t// The price of what didn\'t fit back, as it is: addCoins would count it double during double coins\n\t\tapi.giveCurrencyAmount(playerId, "coins", (amount - given) * crop[3])\n\t\tapi.sendMessage(playerId, "Your inventory is full!", { color: "orange" })\n\t}\n\tif (given > 0) {\n\t\tapi.sendMessage(playerId, "Bought " + given + " " + crop[0] + "! Place them on " + CONFIG.soilBlock + ". They are ready in " + crop[5] + " seconds.", { color: "lime" })\n\t}\n}\n\nfunction sellCommand(playerId) {\n\tif (!sellFruit(playerId)) {\n\t\tapi.sendMessage(playerId, "You have no fruit to sell. Plant some seeds first!")\n\t}\n}\n\nfunction sellFruit(playerId) {\n\tlet count = 0\n\tlet coins = 0\n\tfor (const crop of CONFIG.crops) {\n\t\tconst have = api.getInventoryItemAmount(playerId, crop[2])\n\t\tif (have > 0) {\n\t\t\tapi.removeItemName(playerId, crop[2], have)\n\t\t\tcount += have\n\t\t\tcoins += have * crop[4]\n\t\t}\n\t}\n\tif (count === 0) {\n\t\treturn false\n\t}\n\taddCoins(playerId, coins)\n\tshowGarden(playerId)\n\tapi.sendMessage(playerId, "Sold " + count + " fruit for " + coins + " coins!", { color: "gold" })\n\treturn true\n}\n\n// What a harvest gives: the fruit, or a golden harvest of lots\nfunction harvestPlant(playerId, plant) {\n\tconst crop = CONFIG.crops[plant.crop]\n\tconst golden = Math.random() * 100 < CONFIG.rareChance\n\tconst amount = golden ? CONFIG.rareMultiplier : 1\n\tconst given = api.giveItem(playerId, crop[2], amount)\n\tif (given < amount) {\n\t\tdropItem(playerId, crop[2], amount - given)\n\t}\n\tif (golden) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " harvested a GOLDEN " + crop[2] + "! x" + amount, { color: "gold" })\n\t} else {\n\t\tapi.sendFlyingMiddleMessage(playerId, "+1 " + crop[2], 1)\n\t}\n\tshowGarden(playerId)\n}\n\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst plant = plants[plantKey(x, y, z)]\n\tif (toBlock === "Air" && plant && stageOf(plant) < 2) {\n\t\tnotice(playerId, "Not ripe yet! Give it a bit longer.")\n\t\treturn "preventChange"\n\t}\n\tif (fromBlock === "Air" && cropNumber(toBlock) >= 0 && api.getBlock(x, y - 1, z) !== CONFIG.soilBlock) {\n\t\tnotice(playerId, "Seeds only grow on " + CONFIG.soilBlock + "!")\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst key = plantKey(x, y, z)\n\tconst plant = plants[key]\n\tif (toBlock === "Air" && plant) {\n\t\tharvestPlant(playerId, plant)\n\t\tif (CONFIG.regrow) {\n\t\t\tplant.start = Date.now()\n\t\t\tplant.frozen = false\n\t\t\tapi.setBlock(x, y, z, CONFIG.crops[plant.crop][0])\n\t\t} else {\n\t\t\tdelete plants[key]\n\t\t}\n\t\treturn "preventDrop"\n\t}\n\tif (fromBlock === "Air" && cropNumber(toBlock) >= 0) {\n\t\tplants[key] = { x: x, y: y, z: z, crop: cropNumber(toBlock), start: Date.now(), frozen: false }\n\t\tapi.sendMessage(playerId, "Planted! Ready in " + CONFIG.crops[cropNumber(toBlock)][5] + " seconds.", { color: "lime" })\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete lastNotice[playerId]\n}',
        changeable: [{
          name: "harvestPlant",
          about: "what breaking a ripe plant gives: the fruit, the golden harvest and its message"
        }, {
          name: "sellFruit",
          about: "how fruit is turned into coins, e.g. a bonus for selling a lot"
        }],
        setup: "Build a garden of the soilBlock (Tilled Soil: use a hoe on dirt) where players can place blocks, and put a block at sellPad for them to sell their fruit on."
      }, {
        name: "roleplayJobs",
        kind: "game",
        title: "City roleplay with jobs",
        category: "economy",
        summary: "City roleplay: pick a job with /job (police, doctor, miner...) to get its kit and earn coins on a timer, then /buy a house that only you can build in; coins, jobs and houses are saved",
        keywords: ["roleplay", "role play", "roleplaying", "rolplay", "rp", "city", "city rp", "town", "brookhaven", "bloxburg", "jobs", "job", "pick a job", "choose a job", "police", "cop", "cops", "doctor", "salary", "paycheck", "payday", "buy a house", "buy house", "houses", "real estate"],
        howItPlays: "Players start at spawnPosition with startCoins. /jobs lists the jobs; /job police (or its number) makes them a police officer and gives that job's kit (each job in jobs is [name, [[item, amount]...], pay per minute]); they get the kit again after dying. Every payEverySeconds each player is paid for their job. Each house in houses is [corner1, corner2, price]: standing inside one and typing /buy buys it, and then only its owner can place or break blocks in it; /home goes to your house. The sidebar shows job, coins and houses. Coins, jobs and houses are saved, so they're still there next time.",
        settings: [{
          key: "jobs",
          kind: "list",
          names: "item",
          value: '[["Police", [["Iron Sword", 1], ["Iron Chestplate", 1], ["Bread", 3]], 20], ["Doctor", [["Instant Healing Potion", 3], ["Apple", 5]], 25], ["Miner", [["Iron Pickaxe", 1], ["Bread", 3]], 15], ["Chef", [["Steak", 5], ["Pumpkin Pie", 3]], 15], ["Farmer", [["Iron Hoe", 1], ["Carrot", 8]], 10]]',
          about: "each job: [name, [[item, amount], ...] its kit, coins it pays per minute]"
        }, {
          key: "startCoins",
          kind: "number",
          value: "50",
          about: "coins a new player starts with"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }, {
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start and come back after dying"
        }, {
          key: "houses",
          kind: "list",
          value: "[[[20, 10, 20], [28, 16, 28], 100], [[32, 10, 20], [40, 16, 28], 200]]",
          about: "each house for sale: [one corner [x, y, z], the opposite corner [x, y, z], price in coins]; the box between the corners is the house"
        }, {
          key: "payEverySeconds",
          kind: "number",
          value: "60",
          about: "how often everyone is paid for their job, in seconds"
        }],
        code: '// City roleplay: /jobs lists the jobs and /job <name> picks one, giving its kit. Everyone is paid for their job every\n// payEverySeconds. Stand in a house and type /buy to buy it: then only you can build in it, and /home takes you there.\n// Coins, jobs and houses are saved.\nconst jobOf = {}\nconst kitDue = {}\nlet payTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\tjobOf[playerId] = findJob(String(getSaved(playerId, "job", "")))\n\tif (jobOf[playerId]) {\n\t\tgiveKit(playerId, jobOf[playerId][1])\n\t}\n\tlockHouses(playerId)\n\tupdateSidebar(playerId)\n\tif (payTimer === null) {\n\t\tpayTimer = repeatEvery(Math.max(1, CONFIG.payEverySeconds), payEveryone)\n\t}\n\tconst welcome = jobOf[playerId] ? "Welcome back! You work as " + jobOf[playerId][0] + "." : "Welcome to the city! Type /jobs to pick a job and start earning."\n\tapi.sendMessage(playerId, welcome, { color: "aqua" })\n}\n\n// A job by its name, the start of its name or its number in the list; null if there\'s none\nfunction findJob(wanted) {\n\tconst name = wanted.trim().toLowerCase()\n\tconst number = Number(name)\n\tif (name !== "" && Number.isInteger(number) && number >= 1 && number <= CONFIG.jobs.length) {\n\t\treturn CONFIG.jobs[number - 1]\n\t}\n\treturn name === "" ? null : CONFIG.jobs.find((job) => job[0].toLowerCase() === name) || CONFIG.jobs.find((job) => job[0].toLowerCase().startsWith(name)) || null\n}\n\nfunction payFor(job) {\n\treturn Math.round((job[2] * CONFIG.payEverySeconds) / 60)\n}\n\nfunction listJobs(playerId) {\n\tconst lines = CONFIG.jobs.map((job, index) => index + 1 + ". " + job[0] + ": " + payFor(job) + " coins every " + CONFIG.payEverySeconds + " seconds")\n\tapi.sendMessage(playerId, "Jobs:\\n" + lines.join("\\n") + "\\nType /job and a name, like /job " + CONFIG.jobs[0][0], { color: "yellow" })\n}\n\nfunction pickJob(playerId, wanted) {\n\tconst job = findJob(wanted)\n\tif (job === null) {\n\t\tlistJobs(playerId)\n\t\treturn\n\t}\n\tjobOf[playerId] = job\n\tsetSaved(playerId, "job", job[0])\n\tgiveKit(playerId, job[1])\n\tupdateSidebar(playerId)\n\tapi.sendMessage(playerId, "You are now a " + job[0] + "! You earn " + payFor(job) + " coins every " + CONFIG.payEverySeconds + " seconds.", { color: "lime" })\n}\n\nfunction payEveryone() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (jobOf[playerId]) {\n\t\t\tpaySalary(playerId, jobOf[playerId])\n\t\t}\n\t}\n}\n\nfunction paySalary(playerId, job) {\n\taddCoins(playerId, payFor(job))\n\tupdateSidebar(playerId)\n\tapi.sendMessage(playerId, "Payday! +" + payFor(job) + " coins for your work as " + job[0] + ".", { color: "lime" })\n}\n\n// A house\'s owner is kept for the lobby, so it stays theirs after they leave\nfunction ownsHouse(playerId, index) {\n\treturn api.getLobbyDbValue("house" + index) === String(api.getPlayerDbId(playerId))\n}\n\n// Nobody can change blocks in a house but its owner\nfunction lockHouses(playerId) {\n\tCONFIG.houses.forEach((house, index) => {\n\t\tif (ownsHouse(playerId, index)) {\n\t\t\tapi.resetCanChangeBlockRect(playerId, house[0].slice(), house[1].slice())\n\t\t} else {\n\t\t\tapi.setCantChangeBlockRect(playerId, house[0].slice(), house[1].slice())\n\t\t}\n\t})\n}\n\nfunction buyHouse(playerId) {\n\tconst index = CONFIG.houses.findIndex((house) => isInBox(playerId, house[0], house[1]))\n\tconst house = CONFIG.houses[index]\n\tif (index === -1) {\n\t\tapi.sendMessage(playerId, "Stand inside a house for sale, then type /buy.", { color: "yellow" })\n\t} else if (ownsHouse(playerId, index)) {\n\t\tapi.sendMessage(playerId, "This is already your house!", { color: "yellow" })\n\t} else if (api.getLobbyDbValue("house" + index) !== null) {\n\t\tapi.sendMessage(playerId, "Sorry, this house belongs to " + api.getLobbyDbValue("houseName" + index) + ".", { color: "red" })\n\t} else if (!spendCoins(playerId, house[2])) {\n\t\tapi.sendMessage(playerId, "This house costs " + house[2] + " coins. You have " + getCoins(playerId) + ".", { color: "red" })\n\t} else {\n\t\tapi.setLobbyDbValue("house" + index, String(api.getPlayerDbId(playerId)))\n\t\tapi.setLobbyDbValue("houseName" + index, api.getEntityName(playerId))\n\t\tlockHouses(playerId)\n\t\tupdateSidebar(playerId)\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " bought a house!", { color: "lime" })\n\t}\n}\n\nfunction goHome(playerId) {\n\tconst house = CONFIG.houses.find((house, index) => ownsHouse(playerId, index))\n\tif (!house) {\n\t\tapi.sendMessage(playerId, "You don\'t have a house yet. Stand in one and type /buy.", { color: "yellow" })\n\t\treturn\n\t}\n\t// The middle of the house, standing on its lowest layer\n\tapi.setPosition(playerId, (house[0][0] + house[1][0] + 1) / 2, Math.min(house[0][1], house[1][1]) + 1, (house[0][2] + house[1][2] + 1) / 2)\n}\n\nfunction updateSidebar(playerId) {\n\tsetSidebar(playerId, "Job", jobOf[playerId] ? jobOf[playerId][0] : "none (type /jobs)")\n\tsetSidebar(playerId, "Coins", getCoins(playerId))\n\tsetSidebar(playerId, "Houses", CONFIG.houses.filter((house, index) => ownsHouse(playerId, index)).length)\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tif (name === "jobs" || (name === "job" && words.length === 1)) {\n\t\tlistJobs(playerId)\n\t} else if (name === "job") {\n\t\tpickJob(playerId, words.slice(1).join(" "))\n\t} else if ((name === "buy" && words.length === 1) || name === "buyhouse") {\n\t\tbuyHouse(playerId)\n\t} else if (name === "home") {\n\t\tgoHome(playerId)\n\t} else {\n\t\t// /buy with a name is left to a shop\n\t\treturn false\n\t}\n\treturn true\n}\n\n// The job\'s kit comes back after dying, once the player is alive again\nfunction onRespawnRequest(playerId) {\n\tkitDue[playerId] = true\n\treturn CONFIG.spawnPosition\n}\n\nfunction tick(ms) {\n\tfor (const playerId of Object.keys(kitDue)) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tdelete kitDue[playerId]\n\t\t\tif (jobOf[playerId]) {\n\t\t\t\tgiveKit(playerId, jobOf[playerId][1])\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete jobOf[playerId]\n\tdelete kitDue[playerId]\n}',
        changeable: [{
          name: "paySalary",
          about: "what a player gets every payday for their job: the coins and the message"
        }, {
          name: "pickJob",
          about: "what happens when a player picks a job with /job: the kit, the message, extras like speed for some jobs"
        }, {
          name: "buyHouse",
          about: "how a house is bought with /buy: the checks, the price and the message"
        }],
        setup: "Build a house inside each box in houses (the corners are opposite corners of the house) and a spawn at spawnPosition; players can't change blocks in a house until they buy it."
      }, {
        name: "plots",
        kind: "game",
        title: "Plots / build battle",
        category: "building",
        summary: 'Every player gets their own square plot that only they can build on (/plot goes back to it); "free" mode keeps it for good, "battle" mode is a build battle: build the theme in time, then everyone rates each build 1 to 5',
        keywords: ["claim", "claims", "land claim", "plot", "plots", "my plot", "own plot", "plot world", "build battle", "buildbattle", "build battles", "build off", "build contest", "building contest", "build competition", "speed build", "speedbuild", "skyblock", "sky block", "own island", "my island", "creative plots", "rate builds", "vote on builds", "builds", "best build", "with a theme"],
        howItPlays: 'Plots are squares of plotSize blocks in rows of plotsPerRow, starting at plotOrigin (the floor of the first plot), with plotSpacing blocks of path between them. A player can only place or break blocks inside their own plot; /plot (or /home) takes them back to it. Builders are put in creative mode. mode "free": every new player gets the next empty plot, laid with a fresh floor, and keeps it for good, even after leaving. mode "battle": once minPlayers are in, a countdown runs, a random theme from themes is announced and everyone gets a cleared plot for buildSeconds. Then everyone visits each build in turn and rates it by typing 1 to 5 in chat (or /vote 4) for voteSeconds; nobody rates their own. The best average wins, then the next battle starts.',
        settings: [{
          key: "plotOrigin",
          kind: "position",
          value: "[100, 10, 100]",
          about: "the corner of the first plot, at its floor; plots go along x in rows, and rows along z"
        }, {
          key: "plotSize",
          kind: "number",
          value: "16",
          about: "how wide each square plot is, in blocks"
        }, {
          key: "plotSpacing",
          kind: "number",
          value: "4",
          about: "blocks of path between plots (nobody can build on paths)"
        }, {
          key: "plotsPerRow",
          kind: "number",
          value: "5",
          about: "how many plots in each row"
        }, {
          key: "mode",
          kind: "string",
          value: '"free"',
          about: '"free": every player keeps their own plot for good; "battle": build battle rounds with a theme and voting'
        }, {
          key: "themes",
          kind: "list",
          value: '["House", "Castle", "Rocket", "Treehouse", "Monster", "Car", "Pirate Ship", "Robot"]',
          about: "battle mode: one is picked at random each round for everyone to build"
        }, {
          key: "buildSeconds",
          kind: "number",
          value: "300",
          about: "battle mode: how long players have to build, in seconds"
        }, {
          key: "voteSeconds",
          kind: "number",
          value: "15",
          about: "battle mode: how long everyone gets to rate each build, in seconds"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "battle mode: players needed before a build battle starts"
        }],
        code: '// Plots: every player gets their own square plot; only they can build on it, and /plot takes them back to it.\n// "free" mode: a player keeps their plot for good. "battle" mode: a theme is announced, everyone builds it on a fresh\n// plot, then everyone visits each build and rates it 1 to 5. The best rated build wins.\nconst maxPlots = 40 // free mode: plots are kept for good, so after this many players newcomers get none\nconst plotHeight = 40 // how high players can build above the floor\nconst floorBlock = "Grass Block"\nconst buildGamemode = "creative" // "survival": players build with the blocks they have\nconst battleCountdown = 10\nconst plotOf = {} // a player: their plot\'s number\nconst buildRects = {} // a player: the boxes they can\'t build in\nconst clearQueue = [] // plots waiting to be cleared: { plot, layer }\nlet phase = "waiting" // battle mode: waiting, countdown, building, voting or break\nlet builders = []\nlet ratings = {} // a builder: { a voter: 1 to 5 }\nlet tour = []\nlet showing = null // the builder whose plot everyone is rating\nlet phaseTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPlayerGamemode(playerId, buildGamemode)\n\tconst plot = CONFIG.mode === "battle" ? null : findPlot(playerId)\n\tsetBuildArea(playerId, plot)\n\tif (CONFIG.mode === "battle") {\n\t\tapi.sendMessage(playerId, "Welcome to Build Battle! Build the theme in time, then rate everyone\'s builds.", { color: "aqua" })\n\t} else if (plot === null) {\n\t\tapi.sendMessage(playerId, "Sorry, every plot is taken!", { color: "red" })\n\t} else {\n\t\tplotOf[playerId] = plot\n\t\tgoToPlot(playerId, plot)\n\t\tapi.sendMessage(playerId, "This is your plot! Only you can build here. Type /plot to come back.", { color: "aqua" })\n\t}\n}\n\n// Free mode: the plot this player had before, else the next one nobody has had (kept for the lobby)\nfunction findPlot(playerId) {\n\tconst me = String(api.getPlayerDbId(playerId))\n\tlet free = null\n\tfor (let plot = 0; plot < maxPlots; plot++) {\n\t\tconst owner = api.getLobbyDbValue("plot" + plot)\n\t\tif (owner === me) {\n\t\t\treturn plot\n\t\t}\n\t\tif (owner === null && free === null) {\n\t\t\tfree = plot\n\t\t}\n\t}\n\tif (free !== null) {\n\t\tapi.setLobbyDbValue("plot" + free, me)\n\t\tclearPlot(free)\n\t}\n\treturn free\n}\n\n// The lowest corner of a plot, at its floor\nfunction plotCorner(plot) {\n\tconst step = CONFIG.plotSize + CONFIG.plotSpacing\n\tconst origin = CONFIG.plotOrigin.map(Math.floor)\n\treturn [origin[0] + (plot % CONFIG.plotsPerRow) * step, origin[1], origin[2] + Math.floor(plot / CONFIG.plotsPerRow) * step]\n}\n\nfunction goToPlot(playerId, plot) {\n\tconst corner = plotCorner(plot)\n\tapi.setPosition(playerId, corner[0] + CONFIG.plotSize / 2, corner[1] + 1, corner[2] + 0.5)\n}\n\n// Lets a player build only inside their plot (none: nowhere): every other part of the plots, paths too, is boxed off\nfunction setBuildArea(playerId, plot) {\n\tfor (const rect of buildRects[playerId] || []) {\n\t\tapi.resetCanChangeBlockRect(playerId, rect[0], rect[1])\n\t}\n\tconst step = CONFIG.plotSize + CONFIG.plotSpacing\n\tconst low = plotCorner(0)\n\tconst high = [low[0] + CONFIG.plotsPerRow * step - 1, low[1] + plotHeight, low[2] + Math.ceil(maxPlots / CONFIG.plotsPerRow) * step - 1]\n\tlet rects = [[low, high]]\n\tif (plot !== null) {\n\t\tconst a = plotCorner(plot)\n\t\tconst b = [a[0] + CONFIG.plotSize - 1, high[1], a[2] + CONFIG.plotSize - 1]\n\t\trects = [\n\t\t\t[low, [a[0] - 1, high[1], high[2]]],\n\t\t\t[[b[0] + 1, low[1], low[2]], high],\n\t\t\t[[a[0], low[1], low[2]], [b[0], high[1], a[2] - 1]],\n\t\t\t[[a[0], low[1], b[2] + 1], [b[0], high[1], high[2]]],\n\t\t].filter((rect) => rect[0][0] <= rect[1][0] && rect[0][2] <= rect[1][2])\n\t}\n\tbuildRects[playerId] = rects\n\tfor (const rect of rects) {\n\t\tapi.setCantChangeBlockRect(playerId, rect[0].slice(), rect[1].slice())\n\t}\n}\n\n// Empties a plot and lays its floor, a few layers a tick, once its part of the world has loaded\nfunction clearPlot(plot) {\n\tclearQueue.push({ plot: plot, layer: 0 })\n}\n\nfunction clearSomeLayers() {\n\tconst job = clearQueue[0]\n\tconst a = plotCorner(job.plot)\n\tconst b = [a[0] + CONFIG.plotSize - 1, a[1], a[2] + CONFIG.plotSize - 1]\n\tfor (let i = 0; i < 8 && job.layer <= plotHeight; i++) {\n\t\tconst y = a[1] + job.layer\n\t\tif ([api.getBlock(a[0], y, a[2]), api.getBlock(b[0], y, b[2]), api.getBlock(a[0], y, b[2]), api.getBlock(b[0], y, a[2])].includes("Unloaded")) {\n\t\t\treturn\n\t\t}\n\t\tfor (let z = a[2]; z <= b[2]; z++) {\n\t\t\tapi.setBlockRect([a[0], y, z], [b[0], y, z], job.layer === 0 ? floorBlock : "Air")\n\t\t}\n\t\tjob.layer++\n\t}\n\tif (job.layer > plotHeight) {\n\t\tclearQueue.shift()\n\t}\n}\n\nfunction tick(ms) {\n\tif (clearQueue.length > 0) {\n\t\tclearSomeLayers()\n\t}\n\tconst count = api.getPlayerIds().length\n\tif (CONFIG.mode === "battle" && phase === "waiting" && count >= CONFIG.minPlayers) {\n\t\tphase = "countdown"\n\t\tstartCountdown(battleCountdown, startBuilding)\n\t} else if (phase === "countdown" && count < CONFIG.minPlayers) {\n\t\tcancelCountdown()\n\t\tphase = "waiting"\n\t}\n}\n\nfunction startBuilding() {\n\tphase = "building"\n\tconst theme = pickRandom(CONFIG.themes) || "anything you like"\n\tbuilders = shuffleList(api.getPlayerIds())\n\tratings = {}\n\tbuilders.forEach((playerId, plot) => {\n\t\tplotOf[playerId] = plot\n\t\tratings[playerId] = {}\n\t\tclearPlot(plot)\n\t\tsetBuildArea(playerId, plot)\n\t\tgoToPlot(playerId, plot)\n\t\tsetSidebar(playerId, "Theme", theme)\n\t})\n\tannounce("Build a " + theme + "! You have " + CONFIG.buildSeconds + " seconds.", "aqua")\n\tphaseTimer = runLater(CONFIG.buildSeconds, startVoting)\n}\n\nfunction startVoting() {\n\tphase = "voting"\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetBuildArea(playerId, null)\n\t}\n\ttour = builders.slice()\n\tshowNextBuild()\n}\n\n// Takes everyone to the next builder\'s plot to rate it; after the last one, the best rated build wins\nfunction showNextBuild() {\n\tcancelTimer(phaseTimer)\n\ttour = tour.filter((playerId) => plotOf[playerId] !== undefined)\n\tshowing = tour.shift() || null\n\tif (showing === null) {\n\t\tfinishBattle()\n\t\treturn\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tgoToPlot(playerId, plotOf[showing])\n\t}\n\tannounce("Rate " + api.getEntityName(showing) + "\'s build! Type 1 to 5 in chat.", "yellow")\n\tphaseTimer = runLater(CONFIG.voteSeconds, showNextBuild)\n}\n\nfunction averageRating(playerId) {\n\tconst stars = Object.values(ratings[playerId] || {})\n\treturn stars.length === 0 ? 0 : stars.reduce((sum, n) => sum + n, 0) / stars.length\n}\n\nfunction finishBattle() {\n\tconst left = builders.filter((playerId) => plotOf[playerId] !== undefined)\n\tconst best = left.reduce((top, playerId) => (top === null || averageRating(playerId) > averageRating(top) ? playerId : top), null)\n\tif (best !== null && averageRating(best) > 0) {\n\t\twinBattle(best, averageRating(best))\n\t} else {\n\t\tannounce("Nobody got any votes this time!", "gold")\n\t}\n\tphase = "break"\n\tshowing = null\n\tphaseTimer = runLater(battleCountdown, () => {\n\t\tphase = "waiting"\n\t})\n}\n\nfunction winBattle(playerId, stars) {\n\tconst wins = addSaved(playerId, "buildBattleWins", 1)\n\tannounce(api.getEntityName(playerId) + " wins with " + stars.toFixed(1) + " stars! (" + wins + " wins)", "gold")\n}\n\n// A rating of 1 to 5 for the build on show; false when it isn\'t one\nfunction rate(playerId, text) {\n\tconst stars = Number(text)\n\tif (phase !== "voting" || showing === null || !Number.isInteger(stars) || stars < 1 || stars > 5) {\n\t\treturn false\n\t}\n\tif (playerId === showing) {\n\t\tapi.sendMessage(playerId, "You can\'t rate your own build!", { color: "red" })\n\t} else {\n\t\tratings[showing][playerId] = stars\n\t\tapi.sendMessage(playerId, "You gave it " + stars + " stars!", { color: "lime" })\n\t}\n\treturn true\n}\n\nfunction onPlayerChat(playerId, chatMessage) {\n\tif (rate(playerId, chatMessage.trim())) {\n\t\treturn false\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().toLowerCase().split(" ")\n\tif (words[0] === "plot" || words[0] === "home") {\n\t\tif (plotOf[playerId] === undefined || (CONFIG.mode === "battle" && phase !== "building")) {\n\t\t\tapi.sendMessage(playerId, "You don\'t have a plot right now.", { color: "red" })\n\t\t} else {\n\t\t\tgoToPlot(playerId, plotOf[playerId])\n\t\t}\n\t\treturn true\n\t}\n\tif ((words[0] === "vote" || words[0] === "rate") && phase === "voting") {\n\t\tif (!rate(playerId, words[1] || "")) {\n\t\t\tapi.sendMessage(playerId, "Type a number from 1 to 5, like /vote 4", { color: "red" })\n\t\t}\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete plotOf[playerId]\n\tdelete buildRects[playerId]\n\tif (showing === playerId) {\n\t\tshowNextBuild()\n\t}\n\trunLater(0, () => {\n\t\tconst left = builders.filter((id) => plotOf[id] !== undefined)\n\t\tif (phase === "building" && left.length < 2) {\n\t\t\tcancelTimer(phaseTimer)\n\t\t\tannounce("Not enough builders left, so the battle is over.", "yellow")\n\t\t\tfinishBattle()\n\t\t}\n\t})\n}',
        changeable: [{
          name: "winBattle",
          about: "what the best rated builder gets in battle mode: the message and the reward (it saves their wins)"
        }, {
          name: "clearPlot",
          about: "what an empty plot looks like: by default it is cleared and gets a fresh Grass Block floor"
        }],
        setup: "Pick a flat open spot away from spawn for plotOrigin: the plots and their floors are made for you there, and anything already in that area is cleared."
      }, {
        name: "murderMystery",
        kind: "game",
        title: "Murder Mystery",
        category: "tag",
        summary: "Each round one secret murderer with a one-hit sword and one sheriff with a bow: innocents survive the clock or the sheriff stops the murderer",
        keywords: ["murder mystery", "murdermystery", "murder", "murderer", "murder mistery", "mm2", "mm", "sheriff", "detective", "innocent", "innocents", "among us", "amongus", "impostor", "imposter", "traitor", "killer", "who is the killer"],
        howItPlays: "Rounds: once minPlayers are in, a countdown runs and everyone is spread around spawnPosition. One random player is secretly the murderer (gets murdererWeapon, which kills in one hit), one the sheriff (gets sheriffWeapon and sheriffArrows arrows, and kills in one hit), the rest innocent; each is told their role privately, and it shows on their sidebar. Nobody else can hurt anyone. A player who dies watches as a spectator. The innocents win when the murderer dies or roundSeconds run out; the murderer wins when everyone else is dead. If sheriffDiesForInnocent is on, a sheriff who kills an innocent dies too.",
        settings: [{
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "the middle of the map, where players are spread around at the start"
        }, {
          key: "spreadRadius",
          kind: "number",
          value: "10",
          about: "how far from spawnPosition players are spread at the start, in blocks"
        }, {
          key: "murdererWeapon",
          kind: "item",
          value: '"Diamond Sword"',
          about: "the murderer's weapon, which kills in one hit"
        }, {
          key: "sheriffWeapon",
          kind: "item",
          value: '"Iron Bow"',
          about: "the sheriff's weapon"
        }, {
          key: "sheriffArrows",
          kind: "number",
          value: "16",
          about: "how many arrows the sheriff gets"
        }, {
          key: "sheriffDiesForInnocent",
          kind: "boolean",
          value: "true",
          about: "true: a sheriff who kills an innocent dies too"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "3",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "how long the innocents must survive, in seconds"
        }],
        code: '// Murder Mystery: each round one player is secretly the murderer, with a sword that kills in one hit, and one is the\n// sheriff, with a bow. Everyone else is innocent. The innocents win if the murderer dies or time runs out; the murderer\n// wins when everyone else is dead. A sheriff who kills an innocent dies too.\nconst roles = {}\nlet murdererId = null\nlet murdererName = ""\nlet sheriffId = null\nlet winner = null\n\nfunction onPlayerJoin(playerId) {\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A round is on: watch this one, you\'ll play in the next!", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\tapi.sendMessage(playerId, "Welcome to Murder Mystery! Find the murderer before they find you.", { color: "aqua" })\n}\n\nfunction beginRound() {\n\tbringEveryoneBack()\n\tconst players = shuffleList(api.getPlayerIds())\n\tmurdererId = players[0]\n\tmurdererName = api.getEntityName(murdererId)\n\tsheriffId = players.length > 1 ? players[1] : null\n\twinner = null\n\tfor (const playerId of players) {\n\t\troles[playerId] = playerId === murdererId ? "Murderer" : playerId === sheriffId ? "Sheriff" : "Innocent"\n\t\tconst spot = randomSpot(CONFIG.spawnPosition, CONFIG.spreadRadius)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spot)\n\t\t}\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\thealFully(playerId)\n\t\tgiveRoleItems(playerId)\n\t\tsetSidebar(playerId, "Role", roles[playerId])\n\t}\n}\n\n// Gives each role its items and tells the player their role, only them\nfunction giveRoleItems(playerId) {\n\tif (roles[playerId] === "Murderer") {\n\t\tgiveKit(playerId, [[CONFIG.murdererWeapon, 1]])\n\t\tapi.sendMessage(playerId, "You are the MURDERER! Get everyone without being caught.", { color: "red" })\n\t} else if (roles[playerId] === "Sheriff") {\n\t\tgiveKit(playerId, [[CONFIG.sheriffWeapon, 1], ["Arrow", CONFIG.sheriffArrows]])\n\t\tapi.sendMessage(playerId, "You are the SHERIFF! Find the murderer and stop them.", { color: "aqua" })\n\t} else {\n\t\tgiveKit(playerId, [])\n\t\tapi.sendMessage(playerId, "You are INNOCENT! Stay alive and watch out.", { color: "lime" })\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer, damageDealt, withItem) {\n\tif (!isRoundRunning() || !roles[damagedPlayer]) {\n\t\treturn "preventDamage"\n\t}\n\tif (attackingPlayer === murdererId && withItem === CONFIG.murdererWeapon) {\n\t\treturn 1000\n\t}\n\tif (attackingPlayer === sheriffId) {\n\t\treturn 1000\n\t}\n\treturn "preventDamage"\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer) {\n\tif (isRoundRunning() && CONFIG.sheriffDiesForInnocent && attackingPlayer === sheriffId && roles[killedPlayer] === "Innocent") {\n\t\tapi.sendMessage(attackingPlayer, "You got an innocent player, so you\'re out too!", { color: "red" })\n\t\tapi.killLifeform(attackingPlayer)\n\t}\n\treturn "keepInventory"\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn CONFIG.spawnPosition\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\tif (roles[playerId] && !api.isAlive(playerId)) {\n\t\t\teliminate(playerId)\n\t\t\tapi.sendMessage(playerId, "You died! Watch until the next round.", { color: "red" })\n\t\t}\n\t}\n\t// Leaving counts too: the murderer gone, or nobody else left\n\tconst alive = playersLeft().filter((playerId) => roles[playerId])\n\tif (!alive.includes(murdererId)) {\n\t\twinner = "innocents"\n\t\tendRound()\n\t} else if (alive.length === 1) {\n\t\twinner = "murderer"\n\t\tendRound()\n\t}\n}\n\n// Runs when the round ends, whoever won; time running out means the innocents win\nfunction finishRound() {\n\tif (winner === "murderer") {\n\t\tmurdererWins()\n\t} else {\n\t\tinnocentsWin()\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tgiveKit(playerId, [])\n\t\tsetSidebar(playerId, "Role", "-")\n\t\tdelete roles[playerId]\n\t}\n\tmurdererId = null\n\tsheriffId = null\n}\n\nfunction innocentsWin() {\n\tannounce("The innocents win! The murderer was " + murdererName + ".", "lime")\n}\n\nfunction murdererWins() {\n\tannounce("The murderer " + murdererName + " wins!", "red")\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete roles[playerId]\n}',
        changeable: [{
          name: "giveRoleItems",
          about: "what each role gets and is told at the start of a round"
        }, {
          name: "innocentsWin",
          about: "what happens when the innocents win: the message, rewards"
        }, {
          name: "murdererWins",
          about: "what happens when the murderer wins: the message, rewards"
        }],
        setup: "Build a map around spawnPosition with places to hide, and turn PvP on in the world settings."
      }, {
        name: "infection",
        kind: "game",
        title: "Infection / zombie tag",
        category: "tag",
        summary: 'Rounds of zombie tag: a random player starts infected, every human they hit is infected too, and humans win by surviving the time; or plain tag, where a hit passes "it" on (tagMode); or a chase where caught players are out (caughtAreOut)',
        keywords: ["infection", "infected", "infect", "infecton", "tag", "zombie tag", "zombie", "zombies", "freeze tag", "you're it", "tagger", "chase", "chaser", "catch", "virus", "outbreak"],
        howItPlays: "Once minPlayers are in, a countdown starts a round at spawnPosition. startInfected random players start infected, with a zombie head. An infected player hitting a human infects them; nobody takes damage. Humans win if any survive roundSeconds and each survivor gets winCoins; the infected win when everyone is infected. Who is what and the humans left show on the sidebar. Players who join mid-round are infected (in tagMode they run); if every infected player leaves, a random human becomes infected. With caughtAreOut the infected are chasers and a caught runner is out instead (they watch); the chasers win when every runner is caught.",
        settings: [{
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where everyone starts each round"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "120",
          about: "how long humans must survive to win, in seconds"
        }, {
          key: "countdownSeconds",
          kind: "number",
          value: "10",
          about: "the countdown before each round"
        }, {
          key: "startInfected",
          kind: "number",
          value: "1",
          about: "how many random players start infected"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins each surviving human gets when time runs out (0 for none)"
        }, {
          key: "tagMode",
          kind: "boolean",
          value: "false",
          about: "true: plain tag, one player is it and a hit passes it on; whoever is it when time runs out loses"
        }, {
          key: "caughtAreOut",
          kind: "boolean",
          value: "false",
          about: "true: the infected are chasers and a runner they hit is out (watches) instead of infected; runners still in when time runs out win"
        }],
        code: '// Infection: one random player starts infected. Infected players hit humans to infect them. Humans win if any are\n// left when the time runs out; the infected win when everyone is infected. Rounds start by themselves.\nconst infected = {}\nlet infectedWon = false\n// Tag mode: when "it" last changed, so the new "it" can\'t tag straight back\nlet lastTagAt = 0\nlet lastSecondsShown = -1\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\tapi.sendMessage(playerId, "Infection! Stay away from the zombies, or catch the humans if you\'re one.", { color: "aqua" })\n\t// In tag mode there is only ever one "it"\n\tif (isRoundRunning() && !CONFIG.tagMode) {\n\t\tinfect(playerId)\n\t}\n}\n\nfunction isInfected(playerId) {\n\treturn infected[playerId] === true\n}\n\nfunction humansLeft() {\n\treturn (CONFIG.caughtAreOut ? playersLeft() : api.getPlayerIds()).filter((playerId) => !isInfected(playerId))\n}\n\nfunction beginRound() {\n\tinfectedWon = false\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\t\thealFully(playerId)\n\t}\n\tconst players = shuffleList(api.getPlayerIds())\n\tconst count = CONFIG.tagMode ? 1 : Math.max(1, Math.min(CONFIG.startInfected, players.length - 1))\n\tconst first = players.slice(0, count)\n\tfor (const playerId of first) {\n\t\tinfect(playerId)\n\t}\n\tconst names = first.map((playerId) => api.getEntityName(playerId)).join(" and ")\n\tannounce(names + (first.length === 1 ? " is" : " are") + (CONFIG.tagMode ? " it! Run!" : CONFIG.caughtAreOut ? " the chaser! Run!" : " infected! Run!"), "red")\n}\n\nfunction infect(playerId) {\n\tinfected[playerId] = true\n\tapi.changePlayerIntoSkin(playerId, "head", "zombie")\n\tapi.sendMessage(playerId, CONFIG.tagMode ? "You\'re it! Hit someone to pass it on." : CONFIG.caughtAreOut ? "You\'re a chaser! Hit runners to catch them." : "You are infected! Hit humans to infect them.", { color: "red" })\n\tupdateSidebars()\n\tcheckWin()\n}\n\nfunction checkWin() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst players = api.getPlayerIds()\n\tif (players.length < 2) {\n\t\tendRound("Not enough players left.")\n\t} else if (humansLeft().length === 0) {\n\t\tinfectedWon = true\n\t\tendRound(CONFIG.caughtAreOut ? "Everyone was caught! The chasers win!" : "Everyone is infected! The infected win!")\n\t} else if (humansLeft().length === (CONFIG.caughtAreOut ? playersLeft() : players).length) {\n\t\t// Nobody is chasing (the infected left): one of those still in becomes it\n\t\tconst next = pickRandom(humansLeft())\n\t\tinfect(next)\n\t\tannounce(api.getEntityName(next) + " is now infected!", "red")\n\t}\n}\n\nfunction cure(playerId) {\n\tdelete infected[playerId]\n\tapi.removeAppliedSkin(playerId)\n}\n\nfunction rewardSurvivors(humans) {\n\tif (CONFIG.tagMode) {\n\t\tconst losers = Object.keys(infected).map((id) => api.getEntityName(id))\n\t\tannounce(losers.join(" and ") + " is it and loses! Everyone else wins.", "lime")\n\t} else {\n\t\tannounce((CONFIG.caughtAreOut ? "The runners win! Still in: " : "The humans win! Survivors: ") + humans.map((id) => api.getEntityName(id)).join(", "), "lime")\n\t}\n\tfor (const playerId of humans) {\n\t\tif (CONFIG.winCoins > 0) {\n\t\t\taddCoins(playerId, CONFIG.winCoins)\n\t\t}\n\t}\n}\n\nfunction finishRound() {\n\tconst humans = humansLeft()\n\tif (!infectedWon && humans.length > 0 && api.getPlayerIds().length >= 2) {\n\t\trewardSurvivors(humans)\n\t}\n\tfor (const playerId of Object.keys(infected)) {\n\t\tcure(playerId)\n\t}\n\tif (CONFIG.caughtAreOut) {\n\t\tbringEveryoneBack()\n\t}\n\tupdateSidebars()\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (CONFIG.tagMode) {\n\t\tif (isRoundRunning() && isInfected(attackingPlayer) && !isInfected(damagedPlayer) && Date.now() - lastTagAt > 2000) {\n\t\t\tlastTagAt = Date.now()\n\t\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " tagged " + api.getEntityName(damagedPlayer) + "!", { color: "orange" })\n\t\t\tcure(attackingPlayer)\n\t\t\tinfect(damagedPlayer)\n\t\t}\n\t\treturn "preventDamage"\n\t}\n\tif (CONFIG.caughtAreOut) {\n\t\tif (isRoundRunning() && isInfected(attackingPlayer) && humansLeft().includes(damagedPlayer)) {\n\t\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " caught " + api.getEntityName(damagedPlayer) + "!", { color: "orange" })\n\t\t\teliminate(damagedPlayer)\n\t\t\tupdateSidebars()\n\t\t\tcheckWin()\n\t\t}\n\t\treturn "preventDamage"\n\t}\n\tif (isRoundRunning() && isInfected(attackingPlayer) && !isInfected(damagedPlayer)) {\n\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " infected " + api.getEntityName(damagedPlayer) + "!", { color: "orange" })\n\t\tinfect(damagedPlayer)\n\t}\n\treturn "preventDamage"\n}\n\nfunction updateSidebars() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst out = CONFIG.caughtAreOut && !isInfected(playerId) && !humansLeft().includes(playerId)\n\t\tconst side = isInfected(playerId) ? (CONFIG.tagMode ? "It" : CONFIG.caughtAreOut ? "Chaser" : "Infected") : CONFIG.tagMode ? "Running" : CONFIG.caughtAreOut ? (out ? "Out" : "Runner") : "Human"\n\t\tsetSidebar(playerId, "You are", !isRoundRunning() ? "Waiting" : side)\n\t\tif (!CONFIG.tagMode) {\n\t\t\tsetSidebar(playerId, CONFIG.caughtAreOut ? "Runners left" : "Humans left", isRoundRunning() ? humansLeft().length : "-")\n\t\t}\n\t\tsetSidebar(playerId, "Time left", isRoundRunning() ? roundSecondsLeft() : "-")\n\t}\n}\n\nfunction tick(ms) {\n\tconst seconds = isRoundRunning() ? roundSecondsLeft() : -1\n\tif (seconds !== lastSecondsShown) {\n\t\tlastSecondsShown = seconds\n\t\tupdateSidebars()\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn CONFIG.spawnPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete infected[playerId]\n\trunLater(0, () => {\n\t\tcheckWin()\n\t\tupdateSidebars()\n\t})\n}',
        changeable: [{
          name: "infect",
          about: "what happens when a player becomes infected: their look, a message, an effect"
        }, {
          name: "rewardSurvivors",
          about: "what the humans still alive get when time runs out"
        }],
        setup: "Turn on PvP in your world settings so players can hit each other, and build an arena around spawnPosition to run and hide in."
      }, {
        name: "hideAndSeek",
        kind: "game",
        title: "Hide and seek",
        category: "tag",
        summary: "Rounds of hide and seek: seekers wait in a box while the hiders hide, then hit hiders to find them before time runs out",
        keywords: ["hide and seek", "hide n seek", "hide & seek", "hide an seek", "hide and seak", "hide", "hiding", "seek", "seeker", "seekers", "hider", "hiders", "prop hunt", "sardines"],
        howItPlays: "Once minPlayers are in, a countdown starts a round. seekerCount random players are seekers and wait at seekerWaitPosition while everyone else hides from startPosition for hideSeconds; then the seekers are let out at startPosition. A seeker hitting a hider finds them: they become a seeker too if foundBecomeSeekers is true, or else watch as a spectator. Nobody takes damage. Hiders still hidden when roundSeconds (hiding time included) run out win and get winCoins; the seekers win when everyone is found. Players who join mid-round are seekers.",
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where hiders start each round and seekers are let out"
        }, {
          key: "seekerWaitPosition",
          kind: "position",
          value: "[0, 10, 20]",
          about: "where seekers wait while the hiders hide (build a closed box around it)"
        }, {
          key: "seekerCount",
          kind: "number",
          value: "1",
          about: "how many random players start as seekers"
        }, {
          key: "hideSeconds",
          kind: "number",
          value: "30",
          about: "how long hiders have to hide, in seconds"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "how long a round lasts in seconds, hiding time included"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "foundBecomeSeekers",
          kind: "boolean",
          value: "true",
          about: "true: a found hider joins the seekers; false: they watch as a spectator"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins each hider still hidden gets when time runs out (0 for none)"
        }],
        code: '// Hide and seek: seekers wait in their box while hiders hide for hideSeconds, then go looking. A seeker hitting a\n// hider finds them. Hiders win if any are still hidden when time runs out; seekers win when everyone is found.\nconst seekers = {}\nconst found = {}\nlet seeking = false\nlet seekersWon = false\nlet lastShown = ""\n\nfunction onPlayerJoin(playerId) {\n\tapi.sendMessage(playerId, "Hide and seek! Hide from the seekers, or find everyone when you seek.", { color: "aqua" })\n\tgoTo(playerId, CONFIG.startPosition)\n\tif (isRoundRunning()) {\n\t\tmakeSeeker(playerId)\n\t}\n}\n\nfunction goTo(playerId, spot) {\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction hidersLeft() {\n\treturn api.getPlayerIds().filter((playerId) => !seekers[playerId] && !found[playerId])\n}\n\nfunction makeSeeker(playerId) {\n\tseekers[playerId] = true\n\tif (!seeking) {\n\t\tgoTo(playerId, CONFIG.seekerWaitPosition)\n\t}\n\tapi.sendMessage(playerId, "You are a seeker! Hit hiders to find them.", { color: "orange" })\n}\n\nfunction beginRound() {\n\tseeking = false\n\tseekersWon = false\n\tconst players = shuffleList(api.getPlayerIds())\n\tconst count = Math.max(1, Math.min(CONFIG.seekerCount, players.length - 1))\n\tfor (const playerId of players.slice(count)) {\n\t\tgoTo(playerId, CONFIG.startPosition)\n\t}\n\tfor (const playerId of players.slice(0, count)) {\n\t\tmakeSeeker(playerId)\n\t}\n\tconst names = players.slice(0, count).map((playerId) => api.getEntityName(playerId)).join(" and ")\n\tannounce(names + (count === 1 ? " is" : " are") + " seeking! Everyone else, hide!", "yellow")\n\tstartCountdown(CONFIG.hideSeconds, releaseSeekers)\n}\n\nfunction releaseSeekers() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tseeking = true\n\tfor (const playerId of Object.keys(seekers)) {\n\t\tgoTo(playerId, CONFIG.startPosition)\n\t}\n\tannounce("Ready or not, here the seekers come!", "orange")\n}\n\nfunction findHider(hiderId, seekerId) {\n\tapi.broadcastMessage(api.getEntityName(seekerId) + " found " + api.getEntityName(hiderId) + "!", { color: "orange" })\n\tif (CONFIG.foundBecomeSeekers) {\n\t\tmakeSeeker(hiderId)\n\t} else {\n\t\tfound[hiderId] = true\n\t\teliminate(hiderId)\n\t\tapi.sendMessage(hiderId, "You were found! Watch the rest of the round.", { color: "yellow" })\n\t}\n\tcheckWin()\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (seeking && isRoundRunning() && seekers[attackingPlayer] && !seekers[damagedPlayer] && !found[damagedPlayer]) {\n\t\tfindHider(damagedPlayer, attackingPlayer)\n\t}\n\treturn "preventDamage"\n}\n\nfunction checkWin() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst players = api.getPlayerIds()\n\tif (players.length < 2) {\n\t\tendRound("Not enough players left.")\n\t} else if (!players.some((playerId) => seekers[playerId])) {\n\t\tendRound("All the seekers left!")\n\t} else if (hidersLeft().length === 0) {\n\t\tseekersWon = true\n\t\tendRound("Everyone was found! The seekers win!")\n\t}\n}\n\nfunction rewardHiders(hiders) {\n\tannounce("The hiders win! Still hidden: " + hiders.map((playerId) => api.getEntityName(playerId)).join(", "), "lime")\n\tfor (const playerId of hiders) {\n\t\tif (CONFIG.winCoins > 0) {\n\t\t\taddCoins(playerId, CONFIG.winCoins)\n\t\t}\n\t}\n}\n\nfunction finishRound() {\n\tcancelCountdown()\n\tconst hiders = hidersLeft()\n\tif (!seekersWon && hiders.length > 0 && api.getPlayerIds().length >= 2) {\n\t\trewardHiders(hiders)\n\t}\n\tfor (const playerId of Object.keys(seekers)) {\n\t\tif (!seeking) {\n\t\t\t// The round ended in hiding time: out of the box\n\t\t\tgoTo(playerId, CONFIG.startPosition)\n\t\t}\n\t\tdelete seekers[playerId]\n\t}\n\tif (Object.keys(found).length > 0) {\n\t\tbringEveryoneBack()\n\t}\n\tfor (const playerId of Object.keys(found)) {\n\t\tdelete found[playerId]\n\t}\n\tseeking = false\n}\n\nfunction tick(ms) {\n\tconst players = api.getPlayerIds()\n\tif (isRoundRunning() && !seeking) {\n\t\t// Hiding time: seekers who wander from their box are put back\n\t\tfor (const playerId of players) {\n\t\t\tconst spot = CONFIG.seekerWaitPosition\n\t\t\tconst position = api.getPosition(playerId)\n\t\t\tif (seekers[playerId] && Math.abs(position[0] - spot[0]) + Math.abs(position[2] - spot[2]) > 3) {\n\t\t\t\tgoTo(playerId, spot)\n\t\t\t}\n\t\t}\n\t}\n\tconst shown = players.length + " " + isRoundRunning() + " " + seeking + " " + roundSecondsLeft() + " " + hidersLeft().length + " " + Object.keys(seekers).length\n\tif (shown === lastShown) {\n\t\treturn\n\t}\n\tlastShown = shown\n\tfor (const playerId of players) {\n\t\tconst role = !isRoundRunning() ? "Waiting" : seekers[playerId] ? "Seeker" : found[playerId] ? "Found" : "Hider"\n\t\tsetSidebar(playerId, "You are", role)\n\t\tsetSidebar(playerId, "Hiders left", isRoundRunning() ? hidersLeft().length : "-")\n\t\tsetSidebar(playerId, "Time left", isRoundRunning() ? roundSecondsLeft() : "-")\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn seekers[playerId] && !seeking ? CONFIG.seekerWaitPosition : CONFIG.startPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete seekers[playerId]\n\tdelete found[playerId]\n\trunLater(0, checkWin)\n}',
        changeable: [{
          name: "findHider",
          about: "what happens when a seeker finds a hider: the message, and whether they seek or watch"
        }, {
          name: "rewardHiders",
          about: "what the hiders still hidden get when time runs out"
        }],
        setup: "Turn on PvP in your world settings so seekers can hit hiders, build a closed box around seekerWaitPosition, and build places to hide around startPosition."
      }, {
        name: "monsterChase",
        kind: "game",
        title: "Escape the monster",
        category: "rounds",
        summary: "Horror rounds: monsters chase the nearest player while the team finds the keys; with enough keys the exit opens and reaching it escapes; a monster's touch catches you and you watch",
        keywords: ["monster", "monsters", "monster chase", "escape the monster", "run from the monster", "nextbot", "nextbots", "next bot", "evade", "doors", "doors game", "roblox doors", "backrooms", "back rooms", "backroom", "horror", "horror game", "horor", "scary", "scary game", "creepy", "haunted", "jumpscare", "piggy", "slender", "chased", "find the keys", "find keys", "collect keys", "escape", "escape room"],
        howItPlays: "Players start at startPosition. Once minPlayers are in, a countdown runs and everyone is sent there; after 5 seconds monsterCount monsters (monsterType, at monsterSpeed) appear there and each one keeps chasing the nearest player. Keys (gold blocks) sit at keyPositions: walking into one picks it up for the whole team. When the team has keysNeeded keys, the black glass closing the exit at exitPosition vanishes, and a player who reaches it escapes and wins winCoins. A monster's touch catches a player (any death does): they watch the rest of the round. The round ends when everyone has escaped or been caught, or when the time (roundSeconds) runs out. darkness makes the world dark and foggy.",
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start each round, and where the monsters come in after them"
        }, {
          key: "monsterType",
          kind: "mob",
          value: '"Stalker"',
          about: "the mob that chases players"
        }, {
          key: "monsterCount",
          kind: "number",
          value: "1",
          about: "how many monsters chase the players"
        }, {
          key: "monsterSpeed",
          kind: "number",
          value: "1",
          about: "how fast the monsters move (1 normal, 1.5 faster, 0.7 slower)"
        }, {
          key: "keyPositions",
          kind: "list",
          value: "[[10, 10, 10], [-10, 10, 10], [0, 10, -12]]",
          about: "where the keys are, each [x, y, z]; a gold block is put there each round ([]: no keys, the exit is open)"
        }, {
          key: "keysNeeded",
          kind: "number",
          value: "3",
          about: "how many keys the team must find to open the exit (0: all of them)"
        }, {
          key: "exitPosition",
          kind: "position",
          value: "[0, 10, 20]",
          about: "the exit: a doorway 1 block wide, 2 high; black glass closes it until the keys are found"
        }, {
          key: "darkness",
          kind: "boolean",
          value: "true",
          about: "true: the world is dark and foggy, for a scary game"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "1",
          about: "players needed before a round starts"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each player who escapes"
        }],
        code: '// Escape the monster: everyone starts at startPosition and runs, and a few seconds later the monsters come in after\n// them, each chasing the nearest player. Walk into the gold keys to pick them up for the team. With enough keys the\n// exit opens: reach it to escape. A monster\'s touch catches you, and you watch the rest of the round.\nconst keyBlock = "Block of Gold" // what a key looks like\nconst gateBlock = "Black Glass" // closes the exit until the keys are found\nconst headStartSeconds = 5 // seconds players get to run before the monsters come in\nconst monsters = {} // the monsters chasing this round, by mob id\nconst escaped = {} // the players who escaped this round\nlet keysTaken = []\nlet keysFound = 0\nlet exitOpen = false\nlet roundNumber = 0\nlet chaseTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.darkness) {\n\t\tmakeDark(playerId)\n\t}\n\tshowKeys(playerId)\n\tsendToStart(playerId)\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A chase is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, "Find the keys, open the exit and escape the monster!", { color: "aqua" })\n}\n\nfunction makeDark(playerId) {\n\tapi.setClientOptions(playerId, {\n\t\tlightingOverride: true,\n\t\tskyLightColourOverride: "#1c1a26",\n\t\tambientLightColourOverride: "#0c0b12",\n\t\tfogColourOverride: "#060609",\n\t})\n}\n\nfunction sendToStart(playerId) {\n\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n}\n\nfunction keysToOpen() {\n\tconst all = CONFIG.keyPositions.length\n\treturn CONFIG.keysNeeded > 0 ? Math.min(CONFIG.keysNeeded, all) : all\n}\n\nfunction showKeys(playerId) {\n\tsetSidebar(playerId, "Keys", keysFound + "/" + keysToOpen())\n\tsetSidebar(playerId, "Exit", exitOpen ? "open!" : "locked")\n}\n\n// Whether a player is at a block\'s spot [x, y, z]: in it, beside it or on it\nfunction isAt(playerId, spot) {\n\tconst position = api.getPosition(playerId)\n\tconst x = Math.floor(spot[0]) + 0.5\n\tconst z = Math.floor(spot[2]) + 0.5\n\treturn Math.abs(position[0] - x) < 1.6 && Math.abs(position[2] - z) < 1.6 && position[1] > spot[1] - 1.5 && position[1] < spot[1] + 2\n}\n\n// Puts a block at a spot once that part of the world has loaded, unless a new round has started since\nfunction placeBlock(spot, blockName) {\n\tconst round = roundNumber\n\twhenWorldLoaded(spot, () => {\n\t\tif (round === roundNumber) {\n\t\t\tapi.setBlock(Math.floor(spot[0]), Math.floor(spot[1]), Math.floor(spot[2]), blockName)\n\t\t}\n\t})\n}\n\nfunction setExit(blockName) {\n\tplaceBlock(CONFIG.exitPosition, blockName)\n\tplaceBlock([CONFIG.exitPosition[0], CONFIG.exitPosition[1] + 1, CONFIG.exitPosition[2]], blockName)\n}\n\nfunction beginRound() {\n\troundNumber++\n\tkeysTaken = CONFIG.keyPositions.map(() => false)\n\tkeysFound = 0\n\texitOpen = false\n\tfor (const playerId in escaped) {\n\t\tdelete escaped[playerId]\n\t}\n\tCONFIG.keyPositions.forEach((spot) => placeBlock(spot, keyBlock))\n\tsetExit(gateBlock)\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.startPosition)\n\t\t}\n\t\tsendToStart(playerId)\n\t\thealFully(playerId)\n\t\tshowKeys(playerId)\n\t}\n\tif (keysToOpen() === 0) {\n\t\topenExit()\n\t}\n\tannounce("Run! The monster comes in " + headStartSeconds + " seconds!", "red")\n\tconst round = roundNumber\n\trunLater(headStartSeconds, () => {\n\t\tif (round === roundNumber && isRoundRunning()) {\n\t\t\treleaseMonsters()\n\t\t}\n\t})\n}\n\nfunction releaseMonsters() {\n\tconst ids = spawnMobs(CONFIG.monsterType, CONFIG.monsterCount, CONFIG.startPosition, 1)\n\tif (ids.length === 0) {\n\t\tannounce("No monster could come in! Turn on mobs in your world settings.", "red")\n\t\treturn\n\t}\n\tfor (const mobId of ids) {\n\t\tmonsters[mobId] = true\n\t\tapi.setMobSetting(mobId, "walkingSpeedMultiplier", CONFIG.monsterSpeed)\n\t\tapi.setMobSetting(mobId, "runningSpeedMultiplier", CONFIG.monsterSpeed)\n\t}\n\tannounce("The monster is coming!", "red")\n\tchaseNearest()\n\tchaseTimer = repeatEvery(1, chaseNearest)\n}\n\n// Every second each monster goes after the player nearest to it who is still in\nfunction chaseNearest() {\n\tconst targets = playersLeft().filter((playerId) => api.isAlive(playerId))\n\tfor (const mobId of Object.keys(monsters)) {\n\t\tconst at = api.getPosition(mobId)\n\t\tlet nearest = null\n\t\tlet nearestDistance = Infinity\n\t\tfor (const playerId of targets) {\n\t\t\tconst position = api.getPosition(playerId)\n\t\t\tconst distance = Math.hypot(position[0] - at[0], position[1] - at[1], position[2] - at[2])\n\t\t\tif (distance < nearestDistance) {\n\t\t\t\tnearest = playerId\n\t\t\t\tnearestDistance = distance\n\t\t\t}\n\t\t}\n\t\tconst now = api.getMobAiState(mobId)\n\t\tif (nearest !== null && !(now.state === "chasing" && now.params && now.params.targetId === nearest)) {\n\t\t\tapi.setMobAiState(mobId, "chasing", { targetId: nearest }, { hold: true })\n\t\t}\n\t}\n}\n\nfunction openExit() {\n\texitOpen = true\n\tsetExit("Air")\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tshowKeys(playerId)\n\t}\n\tannounce("The exit is open! Run to it!", "lime")\n}\n\nfunction takeKey(playerId, index) {\n\tkeysTaken[index] = true\n\tkeysFound++\n\tconst spot = CONFIG.keyPositions[index]\n\tapi.setBlock(Math.floor(spot[0]), Math.floor(spot[1]), Math.floor(spot[2]), "Air")\n\tapi.broadcastMessage(api.getEntityName(playerId) + " found a key! " + keysFound + "/" + keysToOpen(), { color: "yellow" })\n\tfor (const id of api.getPlayerIds()) {\n\t\tshowKeys(id)\n\t}\n\tif (!exitOpen && keysFound >= keysToOpen()) {\n\t\topenExit()\n\t}\n}\n\nfunction escapePlayer(playerId) {\n\tescaped[playerId] = true\n\teliminate(playerId)\n\trewardEscape(playerId)\n\tcheckForEnd()\n}\n\nfunction rewardEscape(playerId) {\n\taddCoins(playerId, CONFIG.winCoins)\n\tannounce(api.getEntityName(playerId) + " escaped! +" + CONFIG.winCoins + " coins", "lime")\n}\n\nfunction catchPlayer(playerId) {\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " was caught by the monster!", { color: "red" })\n\tcheckForEnd()\n}\n\nfunction checkForEnd() {\n\tif (!isRoundRunning() || playersLeft().length > 0) {\n\t\treturn\n\t}\n\tconst names = Object.keys(escaped).filter((playerId) => api.getPlayerIds().includes(playerId)).map((playerId) => api.getEntityName(playerId))\n\tendRound(names.length > 0 ? names.join(", ") + " escaped the monster!" : "The monster caught everyone!")\n}\n\nfunction finishRound() {\n\tcancelTimer(chaseTimer)\n\tchaseTimer = null\n\tremoveAllMobs()\n\tfor (const mobId in monsters) {\n\t\tdelete monsters[mobId]\n\t}\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.startPosition)\n\t\t}\n\t\tsendToStart(playerId)\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of playersLeft()) {\n\t\t// A catch or an escape can end the round: stop then\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tcatchPlayer(playerId)\n\t\t\tcontinue\n\t\t}\n\t\tCONFIG.keyPositions.forEach((spot, index) => {\n\t\t\tif (!keysTaken[index] && isAt(playerId, spot)) {\n\t\t\t\ttakeKey(playerId, index)\n\t\t\t}\n\t\t})\n\t\tif (exitOpen && isAt(playerId, CONFIG.exitPosition)) {\n\t\t\tescapePlayer(playerId)\n\t\t}\n\t}\n}\n\n// A monster\'s touch catches a player at once\nfunction onMobDamagingPlayer(attackingMob, damagedPlayer) {\n\tif (monsters[attackingMob]) {\n\t\treturn 1000\n\t}\n}\n\n// Monsters can\'t be hurt, and the world doesn\'t take them away\nfunction onPlayerDamagingMob(playerId, mobId) {\n\tif (monsters[mobId]) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onWorldAttemptDespawnMob(mobId) {\n\tif (monsters[mobId]) {\n\t\treturn "preventDespawn"\n\t}\n}\n\nfunction onMobDespawned(mobId) {\n\tdelete monsters[mobId]\n}\n\nfunction onRespawnRequest(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\tcatchPlayer(playerId)\n\t}\n\treturn CONFIG.startPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete escaped[playerId]\n\trunLater(0, checkForEnd)\n}',
        changeable: [{
          name: "rewardEscape",
          about: "what a player gets for escaping, and the message (it gives winCoins)"
        }, {
          name: "releaseMonsters",
          about: "how the monsters come in: how many, where, how fast"
        }, {
          name: "takeKey",
          about: "what happens when a player finds a key, e.g. a speed boost or a scare"
        }],
        setup: "Turn on mobs, build the map (rooms, corridors, a maze) around startPosition with a 1-wide doorway at exitPosition, and turn off block breaking so players can't dig past the walls."
      }, {
        name: "lastStanding",
        kind: "game",
        title: "Last one standing",
        category: "rounds",
        summary: "Rounds in an arena: falling off or dying knocks you out and the last player left wins; the floor can vanish under your feet (TNT run, spleef)",
        keywords: ["last one standing", "last man standing", "last player standing", "spleef", "tnt run", "tntrun", "sumo", "battle royale", "battle royal", "knockout", "knock off", "arena", "elimination", "disappearing floor", "falling floor"],
        howItPlays: "Players wait at lobbyPosition. Once minPlayers are in, a countdown runs and everyone goes to arenaPosition with the kit. Falling below fallY or dying knocks a player out (they watch as a spectator); the last player left wins and the next round starts. With disappearingFloor on, a floor of floorBlock is built around arenaPosition each round and each block vanishes a moment after someone steps on it (TNT run). With spleef on, the floor is built but stays put, and clicking a floor block with the spleefTool (given at the start of each round) breaks it at once, to drop the others.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between rounds"
        }, {
          key: "arenaPosition",
          kind: "position",
          value: "[0, 40, 40]",
          about: "the middle of the arena, where players go when a round starts"
        }, {
          key: "kit",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1], ["Bread", 3]]',
          about: "the [item, amount] each player gets when a round starts"
        }, {
          key: "fallY",
          kind: "number",
          value: "30",
          about: "falling below this height knocks a player out (keep it below the arena)"
        }, {
          key: "disappearingFloor",
          kind: "boolean",
          value: "true",
          about: "true: a floor is built each round and its blocks vanish after players step on them"
        }, {
          key: "spleef",
          kind: "boolean",
          value: "false",
          about: "true: spleef: the floor stays put and players break its blocks with the spleefTool to drop the others"
        }, {
          key: "spleefTool",
          kind: "item",
          value: '"Diamond Spade"',
          about: "with spleef, the item that breaks a floor block with one click"
        }, {
          key: "floorBlock",
          kind: "block",
          value: '"Snow"',
          about: "the block the arena's floor is made of (disappearing floor or spleef)"
        }, {
          key: "arenaFloorSize",
          kind: "number",
          value: "10",
          about: "how many blocks the floor reaches out from arenaPosition each way"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "longest a round lasts, in seconds"
        }],
        code: '// Last one standing: players wait in the lobby, then a round sends everyone to the arena with a kit. Falling below\n// fallY or dying knocks you out and you watch the rest. The last player left wins. With disappearingFloor, the floor\n// vanishes a moment after you step on it, so keep moving!\nconst vanishingBlocks = {}\nlet roundPlayerCount = 0\nlet floorReady = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!floorReady) {\n\t\tfloorReady = true\n\t\tbuildFloor()\n\t\twhenFallBelow(Math.min(CONFIG.fallY, CONFIG.arenaPosition[1] - 3), fellOut)\n\t\tif (CONFIG.spleef) {\n\t\t\twhenItemUsed(CONFIG.spleefTool, breakFloorBlock, 0.15)\n\t\t}\n\t}\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Be the last one standing! Don\'t fall and don\'t die.", { color: "aqua" })\n}\n\nfunction floorY() {\n\treturn Math.floor(CONFIG.arenaPosition[1]) - 1\n}\n\nfunction buildFloor() {\n\tif (!CONFIG.disappearingFloor && !CONFIG.spleef) {\n\t\treturn\n\t}\n\tconst size = CONFIG.arenaFloorSize\n\tconst x = Math.floor(CONFIG.arenaPosition[0])\n\tconst z = Math.floor(CONFIG.arenaPosition[2])\n\twhenWorldLoaded([x, floorY(), z], () => {\n\t\tfillBox([x - size, floorY(), z - size], [x + size, floorY(), z + size], CONFIG.floorBlock)\n\t})\n}\n\nfunction sendToWatch(playerId) {\n\tapi.setPosition(playerId, CONFIG.arenaPosition[0], CONFIG.arenaPosition[1] + 8, CONFIG.arenaPosition[2])\n}\n\nfunction beginRound() {\n\tbuildFloor()\n\tconst players = api.getPlayerIds()\n\troundPlayerCount = players.length\n\tfor (const playerId of players) {\n\t\tconst spot = randomSpot(CONFIG.arenaPosition, Math.max(0, CONFIG.arenaFloorSize - 1))\n\t\t// One still on the respawn screen comes back now: respawning later would count as a knock-out\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spot)\n\t\t}\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, CONFIG.kit)\n\t\tif (CONFIG.spleef) {\n\t\t\tapi.giveItem(playerId, CONFIG.spleefTool, 1)\n\t\t}\n\t}\n\tannounce("Go! Be the last one standing!", "lime")\n}\n\nfunction finishRound() {\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t}\n}\n\nfunction knockOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 1 && roundPlayerCount > 1) {\n\t\twinRound(left[0])\n\t} else if (left.length === 0) {\n\t\tendRound("Nobody is left standing! It\'s a draw.")\n\t}\n}\n\nfunction winRound(playerId) {\n\tconst wins = addSaved(playerId, "lastStandingWins", 1)\n\tendRound(api.getEntityName(playerId) + " is the last one standing! (" + wins + " wins)")\n}\n\n// The floor blocks under a player\'s feet vanish a moment later\nfunction crumbleUnder(position) {\n\tfor (const dx of [-0.3, 0.3]) {\n\t\tfor (const dz of [-0.3, 0.3]) {\n\t\t\tconst x = Math.floor(position[0] + dx)\n\t\t\tconst z = Math.floor(position[2] + dz)\n\t\t\tconst y = Math.floor(position[1] - 0.5)\n\t\t\tconst key = x + "," + z\n\t\t\tif (y !== floorY() || vanishingBlocks[key] || api.getBlock(x, y, z) !== CONFIG.floorBlock) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tvanishingBlocks[key] = true\n\t\t\trunLater(0.5, () => {\n\t\t\t\tdelete vanishingBlocks[key]\n\t\t\t\tif (isRoundRunning()) {\n\t\t\t\t\tapi.setBlock(x, y, z, "Air")\n\t\t\t\t}\n\t\t\t})\n\t\t}\n\t}\n}\n\n// Spleef: a floor block clicked with the spleefTool, from close by, breaks at once\nfunction breakFloorBlock(playerId, x, y, z) {\n\tif (x === undefined || !isRoundRunning() || !playersLeft().includes(playerId) || y !== floorY() || api.getBlock(x, y, z) !== CONFIG.floorBlock) {\n\t\treturn\n\t}\n\tconst position = api.getPosition(playerId)\n\tif (Math.abs(position[0] - x) <= 6 && Math.abs(position[2] - z) <= 6) {\n\t\tapi.setBlock(x, y, z, "Air")\n\t}\n}\n\nfunction fellOut(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\t// Watch from above, unless the round ends now and sends everyone to the lobby\n\t\tsendToWatch(playerId)\n\t\tknockOut(playerId, "fell out!")\n\t}\n}\n\nfunction tick(ms) {\n\tif (!CONFIG.disappearingFloor || CONFIG.spleef) {\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tcrumbleUnder(api.getPosition(playerId))\n\t}\n}\n\nfunction onAttemptKillPlayer(killedPlayer) {\n\tknockOut(killedPlayer, "was knocked out!")\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "was knocked out!")\n\treturn isRoundRunning() ? [CONFIG.arenaPosition[0], CONFIG.arenaPosition[1] + 8, CONFIG.arenaPosition[2]] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "winRound",
          about: "what happens when a player is the last one left: the message and the reward (it saves their wins)"
        }, {
          name: "beginRound",
          about: "what happens when a round starts: where players go and what they get"
        }],
        setup: "Build a lobby at lobbyPosition; with disappearingFloor and spleef off, also build your own arena around arenaPosition and turn PvP on if players should fight."
      }, {
        name: "hazardRounds",
        kind: "game",
        title: "Survive the disasters",
        category: "rounds",
        summary: "Rounds in an arena where disasters hit: rising lava, TNT rain, meteors, falling blocks or a breaking floor; the last player alive, or everyone alive when time runs out, wins coins",
        keywords: ["floor is lava", "the floor is lava", "lava rising", "rising lava", "lava flood", "natural disaster", "natural disasters", "natural disaster survival", "disaster", "disasters", "disaster survival", "survive the disaster", "survive the disasters", "disater", "disasster", "tsunami", "meteor", "meteors", "meteor shower", "tnt rain", "raining tnt", "falling blocks", "falling sand"],
        howItPlays: 'Players wait at lobbyPosition. Once minPlayers are in, a countdown runs and everyone goes to a random spot on the floor of the arena box (between arenaCorner1 and arenaCorner2; its lowest y is the floor, built of floorBlock wherever it is empty) with 16 blocks of floorBlock to build up with. Then the disasters in hazards hit: risingLava fills the box with lava one layer every riseSeconds, tntRain drops TNT that blows up 2 seconds after it lands, meteor drops fireballs (often at players) that blow up when they land, fallingBlocks drops sand and gravel that hurt whoever they fall on, and shrinkingFloor turns floor blocks red, then takes them away. hazardMode "random" picks one disaster each round, "all" uses them all at once. Dying or falling out of the arena knocks a player out to watch from above. The last player left wins winCoins; if the time (roundSeconds) runs out, everyone still in wins it. After each round the arena is put back as it was.',
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between rounds"
        }, {
          key: "arenaCorner1",
          kind: "position",
          value: "[-10, 40, 30]",
          about: "one corner of the arena box; the lower corner's y is the floor"
        }, {
          key: "arenaCorner2",
          kind: "position",
          value: "[10, 50, 50]",
          about: "the opposite corner; the higher corner's y is where blocks fall from"
        }, {
          key: "floorBlock",
          kind: "block",
          value: '"Smooth Stone"',
          about: "the block that fills any empty spot of the arena floor, and that players get to build up with"
        }, {
          key: "hazards",
          kind: "list",
          value: '["risingLava", "tntRain", "meteor", "fallingBlocks", "shrinkingFloor"]',
          about: "the disasters, any of: risingLava, tntRain, meteor, fallingBlocks, shrinkingFloor"
        }, {
          key: "hazardMode",
          kind: "string",
          value: '"random"',
          about: '"random": one disaster from hazards each round; "all": every disaster at once'
        }, {
          key: "riseSeconds",
          kind: "number",
          value: "8",
          about: "the rising lava goes up one block this often, in seconds"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "90",
          about: "how long a round lasts, in seconds; everyone still alive then wins"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each player who survives the round"
        }],
        code: '// Survive the disasters: each round sends everyone into the arena, then disasters hit: rising lava, TNT rain,\n// meteors, falling blocks or a floor that breaks away. Dying or falling out puts you out to watch. The last player\n// left wins, or everyone still alive when the time runs out. The arena is put back as it was after every round.\nconst hazardTitles = { risingLava: "rising lava", tntRain: "TNT rain", meteor: "meteors", fallingBlocks: "falling blocks", shrinkingFloor: "breaking floor" }\n// What the falling disasters drop every 2 seconds: count blocks, each above a player (aim: how often) or anywhere.\n// One with a radius blows up fuse seconds after it lands; one without hurts the player it falls on\nconst drops = {\n\ttntRain: { blocks: ["Block Destroyer TNT"], count: 1, aim: 0, fuse: 2, radius: 2, damage: 50 },\n\tmeteor: { blocks: ["Fireball Block"], count: 1, aim: 0.5, fuse: 0, radius: 2, damage: 60 },\n\tfallingBlocks: { blocks: ["Sand", "Gravel"], count: 3, aim: 0.3, fuse: 0, radius: 0, damage: 35 },\n}\nconst climbBlocks = 16 // blocks of floorBlock each player gets to build up with\nconst changedBlocks = {} // "x,y,z": the block that was there before the round changed it\nlet falling = []\nlet activeHazards = []\nlet hazardTimers = []\nlet lavaY = 0\nlet roundNumber = 0\nlet roundPlayerCount = 0\nlet roundDecided = false\nlet floorReady = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!floorReady) {\n\t\tfloorReady = true\n\t\tfillLayer(arena().y1, CONFIG.floorBlock, true)\n\t\twhenFallBelow(arena().y1 - 3, fellOut)\n\t}\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Get ready to survive the disasters! The last one alive wins.", { color: "aqua" })\n}\n\n// The arena box: its floor is y1 and blocks fall from y2\nfunction arena() {\n\tconst a = CONFIG.arenaCorner1.map(Math.floor)\n\tconst b = CONFIG.arenaCorner2.map(Math.floor)\n\treturn { x1: Math.min(a[0], b[0]), x2: Math.max(a[0], b[0]), y1: Math.min(a[1], b[1]), y2: Math.max(a[1], b[1]), z1: Math.min(a[2], b[2]), z2: Math.max(a[2], b[2]) }\n}\n\nfunction watchSpot() {\n\tconst box = arena()\n\treturn [(box.x1 + box.x2) / 2, box.y2 + 3, (box.z1 + box.z2) / 2]\n}\n\nfunction sendToWatch(playerId) {\n\tconst spot = watchSpot()\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\n// A random [x, z] in the arena, or the one above a random player still in when aimed\nfunction pickCell(aimed) {\n\tconst box = arena()\n\tconst left = playersLeft()\n\tif (!aimed || left.length === 0) {\n\t\treturn [randomInt(box.x1, box.x2), randomInt(box.z1, box.z2)]\n\t}\n\tconst position = api.getPosition(pickRandom(left))\n\treturn [Math.min(Math.max(Math.floor(position[0]), box.x1), box.x2), Math.min(Math.max(Math.floor(position[2]), box.z1), box.z2)]\n}\n\n// Puts blockName in every empty spot of one layer of the arena: kept for good, or put back after the round\nfunction fillLayer(y, blockName, keep) {\n\tconst box = arena()\n\twhenWorldLoaded([box.x1, y, box.z1], () => {\n\t\tfor (let x = box.x1; x <= box.x2; x++) {\n\t\t\tfor (let z = box.z1; z <= box.z2; z++) {\n\t\t\t\tif (api.getBlock(x, y, z) === "Air") {\n\t\t\t\t\tkeep ? api.setBlock(x, y, z, blockName) : changeBlock(x, y, z, blockName)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t})\n}\n\n// Every block a disaster or a player changes in a round is remembered, to be put back after it\nfunction changeBlock(x, y, z, blockName) {\n\tconst key = x + "," + y + "," + z\n\tif (!(key in changedBlocks)) {\n\t\tchangedBlocks[key] = api.getBlock(x, y, z)\n\t}\n\tapi.setBlock(x, y, z, blockName)\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst box = arena()\n\tconst key = x + "," + y + "," + z\n\tconst inArena = x >= box.x1 && x <= box.x2 && y >= box.y1 && y <= box.y2 && z >= box.z1 && z <= box.z2\n\tif (isRoundRunning() && inArena && !(key in changedBlocks)) {\n\t\tchangedBlocks[key] = fromBlock\n\t}\n}\n\nfunction restoreArena() {\n\tfor (const key of Object.keys(changedBlocks)) {\n\t\tconst at = key.split(",").map(Number)\n\t\tapi.setBlock(at[0], at[1], at[2], changedBlocks[key])\n\t\tdelete changedBlocks[key]\n\t}\n}\n\n// Runs fn after some seconds, unless the round is over by then\nfunction laterThisRound(seconds, fn) {\n\tconst round = roundNumber\n\trunLater(seconds, () => {\n\t\tif (round === roundNumber && isRoundRunning()) {\n\t\t\tfn()\n\t\t}\n\t})\n}\n\n// "TNT rain", "breaking floor" (its title) or "lava" works as well as tntRain, shrinkingFloor or risingLava\nfunction hazardOf(name) {\n\tconst squash = (text) => String(text).toLowerCase().replace(/[^a-z]/g, "")\n\tconst word = squash(name)\n\treturn Object.keys(hazardTitles).find((hazard) => [hazard, hazardTitles[hazard]].some((title) => word.includes(squash(title)) || (word.length > 2 && squash(title).includes(word))))\n}\n\nfunction beginRound() {\n\troundNumber++\n\troundDecided = false\n\trestoreArena()\n\tconst box = arena()\n\tfillLayer(box.y1, CONFIG.floorBlock, true)\n\tconst chosen = CONFIG.hazards.map(hazardOf).filter((hazard, i, all) => hazard && all.indexOf(hazard) === i)\n\tactiveHazards = chosen.length === 0 ? ["risingLava"] : CONFIG.hazardMode === "all" ? chosen : [pickRandom(chosen)]\n\troundPlayerCount = api.getPlayerIds().length\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst spot = [randomInt(box.x1 + 1, box.x2 - 1) + 0.5, box.y1 + 1, randomInt(box.z1 + 1, box.z2 - 1) + 0.5]\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spot)\n\t\t}\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, [[CONFIG.floorBlock, climbBlocks]])\n\t}\n\tlavaY = box.y1\n\tfalling = []\n\tif (activeHazards.includes("risingLava")) {\n\t\thazardTimers.push(repeatEvery(CONFIG.riseSeconds, raiseLava))\n\t}\n\thazardTimers.push(repeatEvery(2, hazardStep), repeatEvery(0.1, moveFalling))\n\tannounce("Survive the " + activeHazards.map((hazard) => hazardTitles[hazard]).join(", ") + "!", "orange")\n}\n\nfunction finishRound() {\n\thazardTimers.forEach(cancelTimer)\n\thazardTimers = []\n\tfalling = []\n\tif (!roundDecided && playersLeft().length > 0) {\n\t\tannounce(rewardSurvivors(playersLeft()), "gold")\n\t}\n\trestoreArena()\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t}\n}\n\nfunction rewardSurvivors(playerIds) {\n\tfor (const playerId of playerIds) {\n\t\taddCoins(playerId, CONFIG.winCoins)\n\t\taddSaved(playerId, "disasterWins", 1)\n\t}\n\treturn playerIds.map((playerId) => api.getEntityName(playerId)).join(", ") + " survived the disasters! +" + CONFIG.winCoins + " coins"\n}\n\n// Lava fills the next layer up, until it reaches the top of the arena\nfunction raiseLava() {\n\tlavaY++\n\tif (lavaY < arena().y2) {\n\t\tfillLayer(lavaY, "Lava", false)\n\t}\n}\n\n// Every 2 seconds the falling disasters drop their blocks from the top, and the breaking floor turns floor blocks\n// red, then takes them away\nfunction hazardStep() {\n\tconst box = arena()\n\tfor (const hazard of activeHazards) {\n\t\tfor (let i = 0; drops[hazard] && i < drops[hazard].count; i++) {\n\t\t\tconst cell = pickCell(Math.random() < drops[hazard].aim)\n\t\t\tif (api.getBlock(cell[0], box.y2, cell[1]) === "Air") {\n\t\t\t\tconst block = { x: cell[0], y: box.y2, z: cell[1], name: pickRandom(drops[hazard].blocks), drop: drops[hazard] }\n\t\t\t\tchangeBlock(block.x, block.y, block.z, block.name)\n\t\t\t\tfalling.push(block)\n\t\t\t}\n\t\t}\n\t}\n\tif (activeHazards.includes("shrinkingFloor")) {\n\t\tfor (let i = 0; i < Math.max(2, Math.ceil(((box.x2 - box.x1 + 1) * (box.z2 - box.z1 + 1)) / 40)); i++) {\n\t\t\tconst cell = pickCell(false)\n\t\t\tif (api.getBlock(cell[0], box.y1, cell[1]) !== "Air") {\n\t\t\t\tchangeBlock(cell[0], box.y1, cell[1], "Red Wool")\n\t\t\t\tlaterThisRound(1, () => changeBlock(cell[0], box.y1, cell[1], "Air"))\n\t\t\t}\n\t\t}\n\t}\n}\n\n// Falling blocks move down a block every 0.1 seconds, until they land or hit a player\nfunction moveFalling() {\n\tfor (const block of falling.slice()) {\n\t\tconst hitPlayer = playersLeft().find((playerId) => {\n\t\t\tconst position = api.getPosition(playerId)\n\t\t\treturn api.isAlive(playerId) && Math.abs(position[0] - block.x - 0.5) < 0.9 && Math.abs(position[2] - block.z - 0.5) < 0.9 && block.y >= position[1] - 0.5 && block.y < position[1] + 2\n\t\t})\n\t\tif (hitPlayer || api.getBlock(block.x, block.y - 1, block.z) !== "Air" || block.y < arena().y1 - 3) {\n\t\t\tfalling.splice(falling.indexOf(block), 1)\n\t\t\tif (block.drop.radius > 0) {\n\t\t\t\tlaterThisRound(hitPlayer ? 0 : block.drop.fuse, () => blast(block.x, block.y, block.z, block.drop.radius, block.drop.damage))\n\t\t\t} else if (hitPlayer) {\n\t\t\t\tapi.applyHealthChange(hitPlayer, -block.drop.damage)\n\t\t\t\tchangeBlock(block.x, block.y, block.z, "Air")\n\t\t\t}\n\t\t\tcontinue\n\t\t}\n\t\tchangeBlock(block.x, block.y, block.z, "Air")\n\t\tblock.y--\n\t\tchangeBlock(block.x, block.y, block.z, block.name)\n\t}\n}\n\n// Blows a hole in the arena (lava stays) and hurts players nearby, the closest the most\nfunction blast(x, y, z, radius, damage) {\n\tconst box = arena()\n\tfor (let bx = Math.max(x - radius, box.x1); bx <= Math.min(x + radius, box.x2); bx++) {\n\t\tfor (let by = Math.max(y - radius, box.y1); by <= Math.min(y + radius, box.y2); by++) {\n\t\t\tfor (let bz = Math.max(z - radius, box.z1); bz <= Math.min(z + radius, box.z2); bz++) {\n\t\t\t\tconst name = api.getBlock(bx, by, bz)\n\t\t\t\tconst inside = (bx - x) * (bx - x) + (by - y) * (by - y) + (bz - z) * (bz - z) <= radius * radius\n\t\t\t\tif (inside && !["Air", "Lava", "Unloaded"].includes(name)) {\n\t\t\t\t\tchangeBlock(bx, by, bz, "Air")\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tapi.playParticleEffect({ presetId: "orangeFirecrackerLarge", pos1: [x - 1, y, z - 1], pos2: [x + 2, y + 2, z + 2] })\n\tfor (const playerId of playersLeft()) {\n\t\tconst position = api.getPosition(playerId)\n\t\tconst distance = Math.hypot(position[0] - x - 0.5, position[1] - y, position[2] - z - 0.5)\n\t\tif (api.isAlive(playerId) && distance < radius + 2) {\n\t\t\tapi.applyHealthChange(playerId, -Math.round(damage * (1 - distance / (radius + 2))))\n\t\t}\n\t}\n}\n\nfunction knockOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 0) {\n\t\troundDecided = true\n\t\tendRound("Nobody survived! Try again.")\n\t} else if (left.length === 1 && roundPlayerCount > 1) {\n\t\troundDecided = true\n\t\tendRound(rewardSurvivors(left))\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of playersLeft()) {\n\t\t// A knock-out can end the round and send everyone to the lobby: stop then\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "didn\'t survive!")\n\t\t}\n\t}\n}\n\nfunction fellOut(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\tsendToWatch(playerId)\n\t\tknockOut(playerId, "fell out!")\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "didn\'t survive!")\n\treturn isRoundRunning() ? watchSpot() : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "rewardSurvivors",
          about: "what the players who survive a round get, and the message about them (it gives winCoins and saves their wins)"
        }, {
          name: "hazardStep",
          about: "what the disasters do every 2 seconds: which blocks fall where, and how fast the floor breaks"
        }],
        setup: "Build a lobby at lobbyPosition, walls around the arena box (the floor is filled in for you) and things inside it to climb; the arena is put back as it was after each round."
      }, {
        name: "skywars",
        kind: "game",
        title: "Skywars",
        category: "pvp",
        summary: "Rounds on sky islands: everyone starts on their own island with chests of random loot, falling or dying knocks you out and the last player left wins; chests can refill and a border can close in",
        keywords: ["skywars", "sky wars", "skywar", "sky war", "skywares", "skiwars", "sky islands", "refill", "border", "shrinking border", "pillars", "pillars of fortune"],
        howItPlays: "Players wait at lobbyPosition. Once enough are in, a countdown runs and each player goes to their own island (islandSpawns) with an empty inventory. A chest is put at each of chestPositions and filled with loot: every [item, min, max] of lootTable puts min to max of that item in a random slot. Falling below fallY or dying knocks a player out to watch from above the middle; the last player left wins. Every refillSeconds the chests are filled again (0: never). With borderShrinkSeconds above 0, a border around the middle of the islands starts borderStartRadius blocks out and closes in over that many seconds; players outside it lose health every second.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between rounds"
        }, {
          key: "islandSpawns",
          kind: "list",
          value: "[[30, 40, 0], [-30, 40, 0], [0, 40, 30], [0, 40, -30]]",
          about: "where each player starts, one [x, y, z] per island; with more players than islands, some share"
        }, {
          key: "chestPositions",
          kind: "list",
          value: "[[32, 40, 2], [-32, 40, -2], [2, 40, 32], [-2, 40, -32], [0, 40, 0]]",
          about: "the [x, y, z] of every chest; a chest is put there if there isn't one"
        }, {
          key: "lootTable",
          kind: "list",
          names: "item",
          value: '[["Stone Sword", 0, 1], ["Iron Sword", 0, 1], ["Wood Bow", 0, 1], ["Arrow", 0, 8], ["Maple Wood Planks", 8, 24], ["Bread", 1, 3], ["Iron Chestplate", 0, 1], ["Snowball", 0, 8]]',
          about: "what chests hold: each [item, min, max] puts min to max of the item in every chest (min 0: sometimes none)"
        }, {
          key: "refillSeconds",
          kind: "number",
          value: "180",
          about: "the chests fill up again this often, in seconds (0: never)"
        }, {
          key: "borderStartRadius",
          kind: "number",
          value: "60",
          about: "how far the border starts from the middle of the islands, in blocks"
        }, {
          key: "borderShrinkSeconds",
          kind: "number",
          value: "300",
          about: "how many seconds the border takes to close in on the middle (0: no border)"
        }, {
          key: "fallY",
          kind: "number",
          value: "20",
          about: "falling below this height knocks a player out (keep it below the islands)"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "600",
          about: "longest a round lasts, in seconds (0: no limit)"
        }],
        code: '// Skywars: each round sends every player to their own island. Loot the chests, bridge across and knock the others\n// off: falling below fallY or dying puts you out to watch. The last player left wins. Chests can refill, and a\n// border can close in on the middle, hurting anyone outside it.\nconst chestSlots = 36\nconst borderDamage = 10 // health lost each second outside the border\nconst smallestBorder = 3 // the border stops closing in this many blocks from the middle\nlet roundPlayerCount = 0\nlet refillTimer = null\nlet borderTimer = null\nlet borderRadius = 0\n\nfunction onPlayerJoin(playerId) {\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Welcome to Skywars! Loot your chests and be the last one left.", { color: "aqua" })\n}\n\n// The middle of the islands: the border closes in on it, and players who are out watch from above it\nfunction middle() {\n\treturn [0, 1, 2].map((i) => CONFIG.islandSpawns.reduce((sum, spawn) => sum + spawn[i], 0) / CONFIG.islandSpawns.length)\n}\n\nfunction sendToWatch(playerId) {\n\tconst spot = middle()\n\tapi.setPosition(playerId, spot[0], spot[1] + 10, spot[2])\n}\n\nfunction beginRound() {\n\tconst players = shuffleList(api.getPlayerIds())\n\troundPlayerCount = players.length\n\tplayers.forEach((playerId, index) => {\n\t\tconst spawn = CONFIG.islandSpawns[index % CONFIG.islandSpawns.length]\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spawn)\n\t\t}\n\t\tapi.setPosition(playerId, spawn[0], spawn[1], spawn[2])\n\t\thealFully(playerId)\n\t\tapi.clearInventory(playerId)\n\t})\n\tfillChests()\n\tif (CONFIG.refillSeconds > 0) {\n\t\trefillTimer = repeatEvery(CONFIG.refillSeconds, () => {\n\t\t\tfillChests()\n\t\t\tannounce("The chests have been refilled!", "aqua")\n\t\t})\n\t}\n\tborderRadius = CONFIG.borderStartRadius\n\tif (CONFIG.borderShrinkSeconds > 0) {\n\t\tborderTimer = repeatEvery(1, moveBorder)\n\t}\n\tannounce("Go! Loot your chests and be the last one left!", "lime")\n}\n\nfunction finishRound() {\n\tcancelTimer(refillTimer)\n\tcancelTimer(borderTimer)\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t\tremoveSidebar(playerId, "Border")\n\t}\n}\n\nfunction fillChests() {\n\tfor (const spot of CONFIG.chestPositions) {\n\t\twhenWorldLoaded(spot, () => fillSkywarsChest(spot))\n\t}\n}\n\n// Empties the chest at spot (putting one there if it\'s gone), then puts each loot item in a random slot\nfunction fillSkywarsChest(spot) {\n\tif (!api.getBlock(spot[0], spot[1], spot[2]).includes("Chest")) {\n\t\tapi.setBlock(spot[0], spot[1], spot[2], "Chest")\n\t}\n\tconst slots = []\n\tfor (let i = 0; i < chestSlots; i++) {\n\t\tapi.setStandardChestItemSlot(spot, i, "Air")\n\t\tslots.push(i)\n\t}\n\tconst randomSlots = shuffleList(slots)\n\tCONFIG.lootTable.forEach((loot, index) => {\n\t\t// [item, amount] without a max works too\n\t\tconst amount = loot[2] === undefined ? loot[1] || 1 : randomInt(loot[1], loot[2])\n\t\tif (amount > 0 && index < chestSlots) {\n\t\t\tapi.setStandardChestItemSlot(spot, randomSlots[index], loot[0], amount)\n\t\t}\n\t})\n}\n\n// Every second the border closes in a little; players outside it get hurt\nfunction moveBorder() {\n\tconst step = (CONFIG.borderStartRadius - smallestBorder) / CONFIG.borderShrinkSeconds\n\tborderRadius = Math.max(smallestBorder, borderRadius - step)\n\tconst center = middle()\n\tfor (const playerId of playersLeft()) {\n\t\tconst position = api.getPosition(playerId)\n\t\tsetSidebar(playerId, "Border", Math.round(borderRadius) + " blocks")\n\t\tif (api.isAlive(playerId) && Math.hypot(position[0] - center[0], position[2] - center[2]) > borderRadius) {\n\t\t\tapi.applyHealthChange(playerId, -borderDamage)\n\t\t\tapi.sendMessage(playerId, "You\'re outside the border! Go to the middle!", { color: "red" })\n\t\t}\n\t}\n}\n\nfunction knockOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 1 && roundPlayerCount > 1) {\n\t\twinRound(left[0])\n\t} else if (left.length === 0) {\n\t\tendRound("Nobody is left! It\'s a draw.")\n\t}\n}\n\nfunction winRound(playerId) {\n\tconst wins = addSaved(playerId, "skywarsWins", 1)\n\tendRound(api.getEntityName(playerId) + " wins Skywars! (" + wins + " wins)")\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\t// A knock-out can end the round, sending everyone to the lobby: the rest aren\'t knocked out by being there\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "was knocked out!")\n\t\t} else if (api.getPosition(playerId)[1] < CONFIG.fallY) {\n\t\t\tsendToWatch(playerId)\n\t\t\tknockOut(playerId, "fell into the void!")\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "was knocked out!")\n\tconst spot = middle()\n\treturn isRoundRunning() ? [spot[0], spot[1] + 10, spot[2]] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "winRound",
          about: "what happens when a player is the last one left: the message and the reward (it saves their wins)"
        }, {
          name: "fillSkywarsChest",
          about: "what goes in a chest when it is filled or refilled"
        }],
        setup: "Build a lobby at lobbyPosition and an island at each spot in islandSpawns with gaps of air between them (the chests are put in for you), and turn PvP on in your world settings."
      }, {
        name: "teamBattle",
        kind: "game",
        title: "Team battle",
        category: "teams",
        summary: "Two teams fight: each has its own spawn and armour colour, teammates can't hurt each other, and the first team to enough kills wins",
        keywords: ["team", "teams", "team battle", "teambattle", "team fight", "red vs blue", "red v blue", "red blue", "tdm", "team deathmatch", "team death match", "deathmatch", "team pvp", "teams pvp", "2 teams", "two teams", "war", "teem", "teems"],
        howItPlays: "Each player joins the team with fewest players (teamNames) and starts at that team's spot in teamSpawns, with kitItems and, if teamArmour is on, armour in the team's colour. Teammates can't hurt each other. Every kill gives the killer killCoins and a point to their team; team kills show on everyone's sidebar. The first team to teamKillsToWin kills wins: it is announced, the kills reset and everyone goes back to their spawn with a fresh kit.",
        settings: [{
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the teams' names; colour names (Red, Blue, Green, Yellow...) also colour their armour"
        }, {
          key: "teamSpawns",
          kind: "list",
          value: "[[-20, 10, 0], [20, 10, 0]]",
          about: "where each team starts and respawns, [x, y, z] in the same order as teamNames"
        }, {
          key: "teamKillsToWin",
          kind: "number",
          value: "20",
          about: "kills a team needs to win"
        }, {
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Iron Sword", 1], ["Wood Bow", 1], ["Arrow", 16], ["Bread", 5]]',
          about: "the items each player gets on joining and respawning, as [item, amount]"
        }, {
          key: "teamArmour",
          kind: "boolean",
          value: "true",
          about: "true: players wear armour in their team's colour"
        }, {
          key: "killCoins",
          kind: "number",
          value: "5",
          about: "coins for each kill (0 for none)"
        }],
        code: '// Team battle: players are split into teams, each with its own spawn. Teammates can\'t hurt each other. Every kill\n// scores a point for your team, and the first team to CONFIG.teamKillsToWin kills wins.\nconst teamKills = {}\nconst armourColours = ["White", "Orange", "Magenta", "Light Blue", "Yellow", "Lime", "Pink", "Gray", "Light Gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"]\n\nfunction onPlayerJoin(playerId) {\n\tjoinSmallestTeam(playerId)\n\tsendToSpawn(playerId)\n\tshowTeamKills()\n\tapi.sendMessage(playerId, "First team to " + CONFIG.teamKillsToWin + " kills wins!", { color: "aqua" })\n}\n\nfunction teamSpawn(playerId) {\n\tconst index = CONFIG.teamNames.indexOf(getTeam(playerId))\n\treturn CONFIG.teamSpawns[index] || CONFIG.teamSpawns[0]\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spawn = teamSpawn(playerId)\n\tapi.setPosition(playerId, spawn[0], spawn[1], spawn[2])\n\tgiveTeamKit(playerId)\n\thealFully(playerId)\n}\n\nfunction giveTeamKit(playerId) {\n\tgiveKit(playerId, CONFIG.kitItems)\n\t// The team\'s colour whatever its capitals: a team "red" wears Red\n\tconst team = String(getTeam(playerId)).toLowerCase()\n\tconst colour = armourColours.find((name) => name.toLowerCase() === team)\n\tif (CONFIG.teamArmour && colour) {\n\t\tapi.setItemSlot(playerId, 46, colour + " Wood Helmet")\n\t\tapi.setItemSlot(playerId, 47, colour + " Wood Chestplate")\n\t\tapi.setItemSlot(playerId, 48, colour + " Wood Gauntlets")\n\t\tapi.setItemSlot(playerId, 49, colour + " Wood Leggings")\n\t\tapi.setItemSlot(playerId, 50, colour + " Wood Boots")\n\t}\n}\n\nfunction showTeamKills() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tfor (const team of CONFIG.teamNames) {\n\t\t\tsetSidebar(playerId, team + " kills", teamKills[team] || 0)\n\t\t}\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== damagedPlayer && sameTeam(attackingPlayer, damagedPlayer)) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tconst team = getTeam(attackingPlayer)\n\tif (team !== null && !sameTeam(attackingPlayer, killedPlayer)) {\n\t\tscoreKill(attackingPlayer, team)\n\t}\n\t// The kit comes back on respawn, so it isn\'t dropped\n\treturn "keepInventory"\n}\n\nfunction scoreKill(attackingPlayer, team) {\n\tteamKills[team] = (teamKills[team] || 0) + 1\n\tif (CONFIG.killCoins > 0) {\n\t\taddCoins(attackingPlayer, CONFIG.killCoins)\n\t}\n\tshowTeamKills()\n\tif (teamKills[team] >= CONFIG.teamKillsToWin) {\n\t\twinBattle(team)\n\t}\n}\n\nfunction winBattle(team) {\n\tannounce("Team " + team + " wins!", "gold")\n\tfor (const name of CONFIG.teamNames) {\n\t\tteamKills[name] = 0\n\t}\n\tshowTeamKills()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tsendToSpawn(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// Called before the player is back: the new kit is ready when they are\n\tgiveTeamKit(playerId)\n\treturn teamSpawn(playerId)\n}',
        changeable: [{
          name: "scoreKill",
          about: "what a kill gives: the team point, coins, the sidebar"
        }, {
          name: "winBattle",
          about: "what happens when a team reaches teamKillsToWin: the message and the reset"
        }, {
          name: "giveTeamKit",
          about: "the items and armour each player gets"
        }],
        setup: "Build an arena with a base at each spot in teamSpawns, and turn PvP on in your world settings."
      }, {
        name: "captureTheFlag",
        kind: "game",
        title: "Capture the flag",
        category: "teams",
        summary: "Two teams each guard a flag: grab the other team's flag and bring it to yours to score; the carrier who dies drops it back home, and the first team to enough captures wins",
        keywords: ["capture the flag", "capture flag", "ctf", "flag", "flags", "steal the flag", "steal flag", "capture", "captue the flag", "capture the flage"],
        howItPlays: "Rounds: once enough players are in, a countdown runs, the players are split into teams (teamNames), each team's flag block (flagBlocks) is put at its flagPositions and everyone goes to their team's spawn (teamSpawns) with kitItems. Walking into (or hitting) the other team's flag picks it up: it leaves its base and everyone's sidebar says who has it. Bringing it next to your own flag scores a capture and puts it back. A carrier who dies or leaves drops it back home. Dead players come back at their spawn with the kit; teammates can't hurt each other. The first team to capturesToWin captures wins; when roundSeconds run out, the team with most captures wins.",
        settings: [{
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the two teams' names"
        }, {
          key: "teamSpawns",
          kind: "list",
          value: "[[-30, 10, 0], [30, 10, 0]]",
          about: "where each team starts and comes back after dying, one [x, y, z] per team in the same order as teamNames"
        }, {
          key: "flagPositions",
          kind: "list",
          value: "[[-40, 10, 0], [40, 10, 0]]",
          about: "where each team's flag stands, one [x, y, z] per team in the same order as teamNames (bring the enemy flag here to score)"
        }, {
          key: "flagBlocks",
          kind: "list",
          names: "block",
          value: '["Red Wool", "Blue Wool"]',
          about: "the block each team's flag is, in the same order as teamNames"
        }, {
          key: "capturesToWin",
          kind: "number",
          value: "3",
          about: "captures a team needs to win the round"
        }, {
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Stone Sword", 1], ["Wood Bow", 1], ["Arrow", 16], ["Bread", 5]]',
          about: "the [item, amount] each player gets at the start and after dying"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "600",
          about: "longest a round lasts, in seconds (0: no limit); then most captures wins"
        }],
        code: '// Capture the flag: walk into the other team\'s flag to take it, then bring it to your own flag to score. A carrier who\n// dies or leaves drops it back home. The first team to CONFIG.capturesToWin captures wins the round.\nconst captures = {}\nconst flagCarriers = {} // a team\'s name: the player carrying that team\'s flag\nlet roundWinner = null\n\nfunction onPlayerJoin(playerId) {\n\tjoinSmallestTeam(playerId)\n\tsendToSpawn(playerId)\n\tupdateFlags()\n\tapi.sendMessage(playerId, "Grab the other team\'s flag and bring it to yours! First to " + CONFIG.capturesToWin + " captures wins.", { color: "aqua" })\n}\n\nfunction teamSpawn(team) {\n\treturn CONFIG.teamSpawns[CONFIG.teamNames.indexOf(team)] || CONFIG.teamSpawns[0]\n}\n\nfunction flagSpot(team) {\n\tconst spot = CONFIG.flagPositions[CONFIG.teamNames.indexOf(team)] || CONFIG.flagPositions[0]\n\treturn [Math.floor(spot[0]), Math.floor(spot[1]), Math.floor(spot[2])]\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = teamSpawn(getTeam(playerId))\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\thealFully(playerId)\n\tgiveKit(playerId, CONFIG.kitItems)\n}\n\n// Puts each flag at its base (or takes it away while carried) and shows everyone where the flags are\nfunction updateFlags() {\n\tCONFIG.teamNames.forEach((team, index) => {\n\t\tconst spot = flagSpot(team)\n\t\tconst block = flagCarriers[team] ? "Air" : CONFIG.flagBlocks[index] || CONFIG.flagBlocks[0]\n\t\twhenWorldLoaded(spot, () => {\n\t\t\tapi.setBlock(spot[0], spot[1], spot[2], block)\n\t\t})\n\t})\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tfor (const team of CONFIG.teamNames) {\n\t\t\tconst carrier = flagCarriers[team]\n\t\t\tsetSidebar(playerId, team, "captures " + (captures[team] || 0) + ", flag " + (carrier ? "taken by " + api.getEntityName(carrier) : "home"))\n\t\t}\n\t}\n}\n\nfunction beginRound() {\n\troundWinner = null\n\tfor (const team of CONFIG.teamNames) {\n\t\tcaptures[team] = 0\n\t\tdelete flagCarriers[team]\n\t}\n\t// Dealing the teams again evens them out after players left\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tjoinSmallestTeam(playerId)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, teamSpawn(getTeam(playerId)))\n\t\t}\n\t\tsendToSpawn(playerId)\n\t}\n\tupdateFlags()\n\tannounce("Capture the flag! Bring the other team\'s flag to yours.", "aqua")\n}\n\nfunction finishRound() {\n\tif (roundWinner === null) {\n\t\tconst most = Math.max(...CONFIG.teamNames.map((team) => captures[team] || 0))\n\t\tconst leaders = CONFIG.teamNames.filter((team) => (captures[team] || 0) === most)\n\t\tannounce(leaders.length === 1 ? "Team " + leaders[0] + " wins with the most captures!" : "It\'s a draw!", "gold")\n\t}\n\tfor (const team of CONFIG.teamNames) {\n\t\tdelete flagCarriers[team]\n\t}\n\tupdateFlags()\n}\n\nfunction isNearFlag(playerId, team) {\n\tconst position = api.getPosition(playerId)\n\tconst spot = flagSpot(team)\n\treturn Math.abs(position[0] - spot[0] - 0.5) <= 1.5 && Math.abs(position[2] - spot[2] - 0.5) <= 1.5 && Math.abs(position[1] - spot[1]) <= 2\n}\n\n// A carried flag goes back to its base, when its carrier dies or leaves\nfunction dropFlags(playerId) {\n\tfor (const team of CONFIG.teamNames) {\n\t\tif (flagCarriers[team] === playerId) {\n\t\t\tdelete flagCarriers[team]\n\t\t\tapi.broadcastMessage("Team " + team + "\'s flag went back home!", { color: "yellow" })\n\t\t\tupdateFlags()\n\t\t}\n\t}\n}\n\nfunction scoreCapture(playerId, team, flagTeam) {\n\tdelete flagCarriers[flagTeam]\n\tcaptures[team] = (captures[team] || 0) + 1\n\tupdateFlags()\n\tif (captures[team] >= CONFIG.capturesToWin) {\n\t\tteamWins(team)\n\t} else {\n\t\tannounce(api.getEntityName(playerId) + " captured team " + flagTeam + "\'s flag!", "lime")\n\t}\n}\n\nfunction teamWins(team) {\n\troundWinner = team\n\tendRound("Team " + team + " wins!")\n}\n\nfunction tick(ms) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst team = getTeam(playerId)\n\t\tif (!isRoundRunning() || team === null) {\n\t\t\tcontinue\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tdropFlags(playerId)\n\t\t\tcontinue\n\t\t}\n\t\tfor (const other of CONFIG.teamNames) {\n\t\t\tif (other !== team && !flagCarriers[other] && isNearFlag(playerId, other)) {\n\t\t\t\tflagCarriers[other] = playerId\n\t\t\t\tannounce(api.getEntityName(playerId) + " took team " + other + "\'s flag!", "yellow")\n\t\t\t\tupdateFlags()\n\t\t\t} else if (other !== team && flagCarriers[other] === playerId && isNearFlag(playerId, team)) {\n\t\t\t\tscoreCapture(playerId, team, other)\n\t\t\t}\n\t\t}\n\t}\n}\n\n// Flag blocks can\'t be broken or built over\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z) {\n\tif (CONFIG.teamNames.some((team) => flagSpot(team).join() === [x, y, z].join())) {\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (!isRoundRunning() || sameTeam(attackingPlayer, damagedPlayer)) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tdropFlags(playerId)\n\tgiveKit(playerId, CONFIG.kitItems)\n\treturn teamSpawn(getTeam(playerId))\n}\n\nfunction onPlayerLeave(playerId) {\n\tdropFlags(playerId)\n\trunLater(0, () => {\n\t\t// A team left with no players loses the round\n\t\tconst teamsLeft = CONFIG.teamNames.filter((team) => teamMembers(team).length > 0)\n\t\tif (isRoundRunning() && teamsLeft.length === 1) {\n\t\t\tteamWins(teamsLeft[0])\n\t\t}\n\t})\n}',
        changeable: [{
          name: "teamWins",
          about: "what happens when a team wins the round: the message, rewards for its players"
        }, {
          name: "scoreCapture",
          about: "what a capture gives: the team's point, the message, rewards for the carrier"
        }],
        setup: "Build a base for each team around its spawn with its flag position in it (the flag blocks are put in for you), and turn PvP on in your world settings."
      }, {
        name: "football",
        kind: "game",
        title: "Football (soccer)",
        category: "teams",
        summary: "Two teams and a real ball: hit it to kick it where you look, run into it to dribble, and put it in the other team's goal; the first team to enough goals (or the most when time runs out) wins",
        keywords: ["football", "footbal", "fotball", "futbol", "soccer", "soccor", "socer", "footy", "football game", "soccer game", "kick the ball", "kick a ball", "ball game", "score goals", "penalty", "penalties", "goalkeeper", "goalie", "striker", "world cup"],
        howItPlays: "Rounds: once enough players are in, a countdown runs, the players are split into the two teamNames (team-coloured armour), the pitch is built at pitchCentre (if buildPitch is on; pitchLength long, pitchWidth wide, a goal at each end) and a ball appears in the middle. Hitting the ball kicks it the way the player looks (kickPower is how hard); running into it dribbles it. The first team defends the goal at the low-x end of the pitch, the second team the other. The ball in the other team's goal scores a goal: the scorer is announced (the last player to touch the ball), everyone goes back to their half and the ball to the middle for a kickoff. The ball is put back on the pitch if it leaves it. The first team to goalsToWin goals wins, or the team with most goals when roundSeconds run out (a draw if level); every winner gets winCoins. Goals and time show on the sidebar.",
        settings: [{
          key: "pitchCentre",
          kind: "position",
          value: "[0, 10, 0]",
          about: "the middle of the pitch, [x, y, z]: y is the height players stand at (the grass is the block below)"
        }, {
          key: "pitchLength",
          kind: "number",
          value: "40",
          about: "how long the pitch is, in blocks, from goal to goal (at least 12)"
        }, {
          key: "pitchWidth",
          kind: "number",
          value: "24",
          about: "how wide the pitch is, in blocks (at least 8)"
        }, {
          key: "buildPitch",
          kind: "boolean",
          value: "true",
          about: "true: the pitch and goals are built for you (grass, walls and goal frames); false: you build the pitch yourself to fit pitchCentre, pitchLength and pitchWidth"
        }, {
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the two teams' names, the first defends the low-x goal; colour names (Red, Blue, Green, Yellow...) also colour their armour"
        }, {
          key: "goalsToWin",
          kind: "number",
          value: "5",
          about: "goals a team needs to win the match"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "how long a match lasts, in seconds (0: no limit); then the team with most goals wins"
        }, {
          key: "kickPower",
          kind: "number",
          value: "8",
          about: "how hard a hit kicks the ball (4 gentle, 8 normal, 12 very hard)"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each player of the winning team (0 for none)"
        }],
        code: '// Football: two teams, one ball. Hit the ball to kick it where you look, run into it to dribble. Put it in the other\n// team\'s goal to score. First team to CONFIG.goalsToWin goals wins, or the most goals when time runs out.\nconst goals = {}\nconst armourColours = ["White", "Orange", "Magenta", "Light Blue", "Yellow", "Lime", "Pink", "Gray", "Light Gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"]\nlet ball = null\nlet lastToucher = null\nlet kickoffMs = 0 // the ball waits in the middle until this runs out\nlet roundWinner = null\nlet pitchBuilt = false\nlet shownSeconds = -1\n\n// The pitch in blocks: its edges, the height players stand at, and the goal mouth (z from goalMinZ to goalMaxZ)\nfunction pitch() {\n\tconst length = Math.max(12, CONFIG.pitchLength)\n\tconst width = Math.max(8, CONFIG.pitchWidth)\n\tconst midX = Math.floor(CONFIG.pitchCentre[0])\n\tconst midZ = Math.floor(CONFIG.pitchCentre[2])\n\tconst half = Math.min(4, Math.max(1, Math.floor(width / 6)))\n\tconst minX = midX - Math.floor(length / 2)\n\tconst minZ = midZ - Math.floor(width / 2)\n\treturn { minX: minX, maxX: minX + length - 1, minZ: minZ, maxZ: minZ + width - 1, y: Math.floor(CONFIG.pitchCentre[1]), midX: midX, midZ: midZ, goalMinZ: midZ - half, goalMaxZ: midZ + half }\n}\n\nfunction onPlayerJoin(playerId) {\n\tbuildPitch()\n\tjoinSmallestTeam(playerId)\n\tsendToSpawn(playerId)\n\tshowScore()\n\tapi.sendMessage(playerId, "Kick the ball into the other goal! First to " + CONFIG.goalsToWin + " goals wins.", { color: "aqua" })\n}\n\nfunction teamSpawn(playerId) {\n\tconst p = pitch()\n\tconst side = CONFIG.teamNames.indexOf(getTeam(playerId)) === 0 ? -1 : 1\n\treturn randomSpot([p.midX + side * Math.floor((p.maxX - p.minX) / 4), p.y, p.midZ], 3)\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = teamSpawn(playerId)\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\thealFully(playerId)\n\tconst team = getTeam(playerId)\n\tif (armourColours.includes(team)) {\n\t\tapi.setItemSlot(playerId, 46, team + " Wood Helmet")\n\t\tapi.setItemSlot(playerId, 47, team + " Wood Chestplate")\n\t}\n}\n\n// Grass, a glass wall round the pitch, and a goal behind each end line (glass net, white crossbar)\nfunction buildPitch() {\n\tif (pitchBuilt || !CONFIG.buildPitch) {\n\t\treturn\n\t}\n\tpitchBuilt = true\n\tconst p = pitch()\n\tconst top = p.y + 3\n\tfillBox([p.minX - 4, p.y - 1, p.minZ - 1], [p.maxX + 4, p.y - 1, p.maxZ + 1], "Grass Block")\n\tfillBox([p.minX, p.y, p.minZ], [p.maxX, top, p.maxZ], "Air")\n\tfillBox([p.minX - 4, p.y, p.minZ - 1], [p.maxX + 4, top, p.minZ - 1], "Glass")\n\tfillBox([p.minX - 4, p.y, p.maxZ + 1], [p.maxX + 4, top, p.maxZ + 1], "Glass")\n\tfor (const end of [-1, 1]) {\n\t\tconst near = end < 0 ? p.minX - 1 : p.maxX + 1\n\t\tfillBox([near + 3 * end, p.y, p.minZ], [near + 3 * end, top, p.maxZ], "Glass")\n\t\tfillBox([near, p.y, p.minZ], [near + 2 * end, top, p.goalMinZ - 1], "Glass")\n\t\tfillBox([near, p.y, p.goalMaxZ + 1], [near + 2 * end, top, p.maxZ], "Glass")\n\t\tfillBox([near, p.y, p.goalMinZ], [near + 2 * end, p.y + 2, p.goalMaxZ], "Air")\n\t\tfillBox([near, top, p.goalMinZ], [near + 2 * end, top, p.goalMaxZ], "White Concrete")\n\t}\n}\n\nfunction createBall() {\n\tball = api.attemptCreateMeshEntity("BloxdBlock", { blockName: "Football", size: 1 }, "", { doPhysics: true })\n\tif (ball !== null) {\n\t\t// For players who join later too\n\t\tapi.setTargetedPlayerSettingForEveryone(ball, "canAttack", true, true)\n\t\tresetBall()\n\t}\n}\n\nfunction resetBall() {\n\tconst p = pitch()\n\tapi.setPosition(ball, p.midX + 0.5, p.y + 1, p.midZ + 0.5)\n\tapi.setVelocity(ball, 0, 0, 0)\n}\n\nfunction showScore() {\n\tconst seconds = roundSecondsLeft()\n\tshownSeconds = seconds\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tfor (const team of CONFIG.teamNames) {\n\t\t\tsetSidebar(playerId, team, goals[team] || 0)\n\t\t}\n\t\tif (CONFIG.roundSeconds > 0 && isRoundRunning()) {\n\t\t\tsetSidebar(playerId, "Time", Math.floor(seconds / 60) + ":" + String(100 + (seconds % 60)).slice(1))\n\t\t}\n\t}\n}\n\nfunction beginRound() {\n\troundWinner = null\n\tlastToucher = null\n\tresetScores()\n\tfor (const team of CONFIG.teamNames) {\n\t\tgoals[team] = 0\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tjoinSmallestTeam(playerId)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, teamSpawn(playerId))\n\t\t}\n\t\tsendToSpawn(playerId)\n\t}\n\tshowScore()\n\tif (ball === null) {\n\t\tcreateBall()\n\t} else {\n\t\tresetBall()\n\t}\n\tkickoffMs = 1500\n\tannounce("Kick off! First to " + CONFIG.goalsToWin + " goals wins.", "aqua")\n}\n\nfunction finishRound() {\n\tif (ball !== null) {\n\t\tresetBall()\n\t}\n\tconst first = goals[CONFIG.teamNames[0]] || 0\n\tconst second = goals[CONFIG.teamNames[1]] || 0\n\tif (roundWinner === null) {\n\t\troundWinner = first === second ? null : CONFIG.teamNames[first > second ? 0 : 1]\n\t\tannounce(roundWinner === null ? "Full time: it\'s a draw!" : "Full time: team " + roundWinner + " wins!", "gold")\n\t}\n\tfor (const playerId of roundWinner === null ? [] : teamMembers(roundWinner)) {\n\t\taddCoins(playerId, CONFIG.winCoins)\n\t}\n}\n\n// A goal for a team: tells everyone who scored, then kickoff again (or the team wins)\nfunction goalScored(team) {\n\tgoals[team] = (goals[team] || 0) + 1\n\tconst scorer = lastToucher !== null && getTeam(lastToucher) === team ? lastToucher : null\n\tif (scorer !== null) {\n\t\taddScore(scorer, 1)\n\t}\n\tannounce(scorer !== null ? "GOAL! " + api.getEntityName(scorer) + " scores for team " + team + "!" : "GOAL for team " + team + "!", "lime")\n\tlastToucher = null\n\tshowScore()\n\tif (goals[team] >= CONFIG.goalsToWin) {\n\t\troundWinner = team\n\t\tendRound("Team " + team + " wins " + goals[CONFIG.teamNames[0]] + "-" + goals[CONFIG.teamNames[1]] + "!")\n\t\treturn\n\t}\n\tresetBall()\n\tkickoffMs = 2500\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.isAlive(playerId) && getTeam(playerId) !== null) {\n\t\t\tsendToSpawn(playerId)\n\t\t}\n\t}\n}\n\n// A goal if the ball is through a goal mouth, put back on the pitch if it left some other way\nfunction checkBall() {\n\tconst p = pitch()\n\tconst at = api.getPosition(ball)\n\tconst inMouth = at[2] >= p.goalMinZ && at[2] < p.goalMaxZ + 1 && at[1] < p.y + 3\n\tif (at[0] < p.minX && inMouth) {\n\t\tgoalScored(CONFIG.teamNames[1])\n\t} else if (at[0] >= p.maxX + 1 && inMouth) {\n\t\tgoalScored(CONFIG.teamNames[0])\n\t} else if (at[0] < p.minX || at[0] >= p.maxX + 1 || at[2] < p.minZ || at[2] >= p.maxZ + 1 || at[1] < p.y - 4) {\n\t\tapi.setPosition(ball, Math.min(Math.max(at[0], p.minX + 1.5), p.maxX - 0.5), p.y + 1, Math.min(Math.max(at[2], p.minZ + 1.5), p.maxZ - 0.5))\n\t\tapi.setVelocity(ball, 0, 0, 0)\n\t}\n}\n\n// Walking into the ball may not move it, so a player running next to a slow ball pushes it the way they look\nfunction dribble() {\n\tconst at = api.getPosition(ball)\n\tconst speed = api.getVelocity(ball)\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst spot = api.getPosition(playerId)\n\t\tconst run = api.getVelocity(playerId)\n\t\tif (getTeam(playerId) === null || Math.abs(speed[0]) + Math.abs(speed[2]) > 3 || Math.abs(spot[0] - at[0]) > 1.5 || Math.abs(spot[2] - at[2]) > 1.5 || Math.abs(spot[1] - at[1]) > 2 || Math.abs(run[0]) + Math.abs(run[2]) < 1.5) {\n\t\t\tcontinue\n\t\t}\n\t\tconst dir = api.getPlayerFacingInfo(playerId).dir\n\t\tconst length = Math.sqrt(dir[0] * dir[0] + dir[2] * dir[2]) || 1\n\t\tapi.setVelocity(ball, (dir[0] / length) * CONFIG.kickPower * 0.5, speed[1], (dir[2] / length) * CONFIG.kickPower * 0.5)\n\t\tlastToucher = playerId\n\t}\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tif (ball === null) {\n\t\tcreateBall() // null while the world has too many entities: tried again next tick\n\t\treturn\n\t}\n\tif (roundSecondsLeft() !== shownSeconds) {\n\t\tshowScore()\n\t}\n\tkickoffMs -= ms\n\tif (kickoffMs <= 0) {\n\t\tdribble()\n\t\tcheckBall()\n\t}\n}\n\n// Hitting the ball kicks it the way the player looks\nfunction onPlayerDamagingMeshEntity(playerId, damagedId, damageDealt, withItem) {\n\tif (damagedId !== ball || !isRoundRunning() || kickoffMs > 0 || getTeam(playerId) === null) {\n\t\treturn\n\t}\n\tconst dir = api.getPlayerFacingInfo(playerId).dir\n\tapi.setVelocity(ball, dir[0] * CONFIG.kickPower, dir[1] * CONFIG.kickPower + 2, dir[2] * CONFIG.kickPower)\n\tlastToucher = playerId\n}\n\n// Football isn\'t a fight\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\treturn "preventDamage"\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn teamSpawn(playerId)\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, () => {\n\t\t// A team left with nobody loses the match\n\t\tconst teamsLeft = CONFIG.teamNames.filter((team) => teamMembers(team).length > 0)\n\t\tif (isRoundRunning() && teamsLeft.length === 1) {\n\t\t\troundWinner = teamsLeft[0]\n\t\t\tendRound("Team " + roundWinner + " wins!")\n\t\t}\n\t})\n}',
        changeable: [{
          name: "goalScored",
          about: "what a goal gives: the message, the point, the scorer's reward, what happens after"
        }, {
          name: "finishRound",
          about: "what happens when the match is over: the result message and the winners' reward"
        }, {
          name: "sendToSpawn",
          about: "where players stand and what they wear at kickoff"
        }],
        setup: "Nothing: the pitch and goals are built for you at pitchCentre (they replace what is there); set buildPitch to false to build your own pitch, with a goal at each end, instead."
      }, {
        name: "copsAndRobbers",
        kind: "game",
        title: "Cops and robbers",
        category: "teams",
        summary: "Rounds of cops against robbers: robbers grab loot at the vault and bank it at their hideout, a cop's hit sends a robber to jail, and a robber on the jail button frees everyone in it",
        keywords: ["cops and robbers", "cops n robbers", "cop and robber", "cops vs robbers", "cop vs robber", "police and robbers", "police vs robbers", "police and thieves", "cops and robers", "robber", "robbers", "rober", "robbery", "bank robbery", "rob the bank", "rob a bank", "heist", "bank heist", "vault", "thief", "thieves", "jail", "jailbreak", "jail break", "jail button", "prison", "prison escape", "escape prison", "escape the prison", "prision"],
        howItPlays: "Rounds: once enough players are in (minPlayers), a countdown runs and copCount random players become cops (they start at vaultPosition with copKit) and the rest robbers (they start at hideoutPosition with robberKit). A robber who stays next to the vault for lootSeconds grabs lootCoins of loot (again and again while they stay); the loot they carry shows on their sidebar. Bringing it back to the hideout banks it for the team and gives them that many coins. A cop's hit sends a robber to jail (the box between jailCorner1 and jailCorner2) and the loot they carried is lost; players can't hurt each other otherwise. A free robber standing on jailButton breaks everyone out of jail. The robbers win when the team has banked lootToWin; the cops win when every robber is in jail at once, or when the time (roundSeconds) runs out. Players who join mid-round are robbers.",
        settings: [{
          key: "copCount",
          kind: "number",
          value: "1",
          about: "how many random players are cops each round (the rest are robbers)"
        }, {
          key: "vaultPosition",
          kind: "position",
          value: "[20, 10, 0]",
          about: "the vault robbers steal from, where the cops start"
        }, {
          key: "hideoutPosition",
          kind: "position",
          value: "[-20, 10, 0]",
          about: "the robbers' hideout: where they start and bring the loot to bank it"
        }, {
          key: "lootSeconds",
          kind: "number",
          value: "3",
          about: "seconds a robber must stay next to the vault to grab loot"
        }, {
          key: "lootCoins",
          kind: "number",
          value: "10",
          about: "how much loot (in coins) each grab is worth"
        }, {
          key: "lootToWin",
          kind: "number",
          value: "50",
          about: "loot the robbers must bank together to win the round"
        }, {
          key: "jailCorner1",
          kind: "position",
          value: "[14, 10, 14]",
          about: "one corner of the inside of the jail (the air jailed robbers stand in; the lower corner's y is where their feet are)"
        }, {
          key: "jailCorner2",
          kind: "position",
          value: "[18, 12, 18]",
          about: "the opposite corner of the inside of the jail"
        }, {
          key: "jailButton",
          kind: "position",
          value: "[12, 10, 16]",
          about: "the spot outside the jail a free robber stands on to break everyone out"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "240",
          about: "how long a round lasts, in seconds; when it runs out the cops win"
        }, {
          key: "copKit",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1]]',
          about: "the [item, amount] each cop gets"
        }, {
          key: "robberKit",
          kind: "list",
          names: "item",
          value: '[["Speed Potion", 1], ["Bread", 3]]',
          about: "the [item, amount] each robber gets"
        }],
        code: '// Cops and robbers: robbers sneak to the vault, stay next to it to grab loot, and bring the loot back to their hideout\n// to bank it. A cop\'s hit sends a robber to jail and their loot is lost; a free robber standing on the jail button\n// breaks everyone out. The robbers win by banking CONFIG.lootToWin; the cops win by jailing every robber at once, or\n// when the time runs out.\nconst roles = {} // each player\'s role this round: "Cop" or "Robber"\nconst carried = {} // the loot each robber carries\nconst grabbing = {} // how long each robber has stood at the vault, in ms\nconst jailed = {} // the robbers in jail\nlet banked = 0\nlet roundWinner = null\nlet jailProtected = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!jailProtected) {\n\t\tjailProtected = true\n\t\t// Nobody can break into or out of the jail: its walls, floor and roof are one block around its inside\n\t\tconst box = jailBox()\n\t\tprotectArea([box.x1 - 1, box.y1 - 1, box.z1 - 1], [box.x2 + 1, box.y2 + 1, box.z2 + 1])\n\t}\n\tif (isRoundRunning()) {\n\t\tsetRole(playerId, "Robber")\n\t\tsendToStart(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! You\'re a robber: grab loot at the vault and bring it to the hideout.", { color: "aqua" })\n\t} else {\n\t\tgoTo(playerId, CONFIG.hideoutPosition)\n\t\tapi.sendMessage(playerId, "Cops and robbers starts soon! Robbers steal loot, cops send them to jail.", { color: "aqua" })\n\t}\n\tupdateSidebars()\n}\n\nfunction goTo(playerId, spot) {\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\n// The inside of the jail: x1..x2, y1..y2, z1..z2\nfunction jailBox() {\n\tconst a = CONFIG.jailCorner1.map(Math.floor)\n\tconst b = CONFIG.jailCorner2.map(Math.floor)\n\treturn { x1: Math.min(a[0], b[0]), x2: Math.max(a[0], b[0]), y1: Math.min(a[1], b[1]), y2: Math.max(a[1], b[1]), z1: Math.min(a[2], b[2]), z2: Math.max(a[2], b[2]) }\n}\n\nfunction jailSpot() {\n\tconst box = jailBox()\n\treturn [(box.x1 + box.x2 + 1) / 2, box.y1, (box.z1 + box.z2 + 1) / 2]\n}\n\n// Whether a player stands within reach blocks of a spot [x, y, z]\nfunction isNear(playerId, spot, reach) {\n\tconst position = api.getPosition(playerId)\n\treturn Math.hypot(position[0] - spot[0] - 0.5, position[2] - spot[2] - 0.5) <= reach && Math.abs(position[1] - spot[1]) <= 2.5\n}\n\nfunction withRole(role) {\n\treturn api.getPlayerIds().filter((playerId) => roles[playerId] === role)\n}\n\nfunction setRole(playerId, role) {\n\troles[playerId] = role\n\tcarried[playerId] = 0\n\tdelete grabbing[playerId]\n\tdelete jailed[playerId]\n\tgiveKit(playerId, role === "Cop" ? CONFIG.copKit : CONFIG.robberKit)\n\thealFully(playerId)\n}\n\nfunction sendToStart(playerId) {\n\tgoTo(playerId, roles[playerId] === "Cop" ? CONFIG.vaultPosition : CONFIG.hideoutPosition)\n}\n\nfunction updateSidebars() {\n\tconst inJail = Object.keys(jailed).length\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Team", roles[playerId] ? roles[playerId] + "s" : "waiting")\n\t\tsetSidebar(playerId, "Loot banked", banked + "/" + CONFIG.lootToWin)\n\t\tsetSidebar(playerId, "In jail", inJail)\n\t\tsetSidebar(playerId, "Your loot", roles[playerId] === "Robber" ? carried[playerId] || 0 : "-")\n\t}\n}\n\nfunction beginRound() {\n\tbanked = 0\n\troundWinner = null\n\tconst players = shuffleList(api.getPlayerIds())\n\tconst cops = Math.max(1, Math.min(CONFIG.copCount, players.length - 1))\n\tplayers.forEach((playerId, index) => {\n\t\tconst role = index < cops ? "Cop" : "Robber"\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, role === "Cop" ? CONFIG.vaultPosition : CONFIG.hideoutPosition)\n\t\t}\n\t\tsetRole(playerId, role)\n\t\tsendToStart(playerId)\n\t\tapi.sendMessage(playerId, role === "Cop" ? "You\'re a cop! Hit robbers to send them to jail." : "You\'re a robber! Grab loot at the vault and bring it to the hideout.", { color: role === "Cop" ? "blue" : "orange" })\n\t})\n\tupdateSidebars()\n\tannounce("Cops and robbers! Robbers, grab the loot. Cops, catch them!", "aqua")\n}\n\nfunction finishRound() {\n\tif (roundWinner === null) {\n\t\tannounce("The robbers ran out of time! " + rewardWinners("Cop"), "gold")\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tdelete roles[playerId]\n\t\tdelete jailed[playerId]\n\t\tcarried[playerId] = 0\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.hideoutPosition)\n\t\t}\n\t\tgoTo(playerId, CONFIG.hideoutPosition)\n\t}\n\tupdateSidebars()\n}\n\n// What the winning team gets: lootCoins coins each. Returns the message\nfunction rewardWinners(role) {\n\tfor (const playerId of withRole(role)) {\n\t\taddCoins(playerId, CONFIG.lootCoins)\n\t}\n\treturn (role === "Cop" ? "The cops win!" : "The robbers win!") + " +" + CONFIG.lootCoins + " coins each"\n}\n\nfunction teamWins(role, why) {\n\troundWinner = role\n\tendRound(why + " " + rewardWinners(role))\n}\n\nfunction sendToJail(robberId, copId) {\n\tjailed[robberId] = true\n\tcarried[robberId] = 0\n\tdelete grabbing[robberId]\n\tconst spot = jailSpot()\n\tgoTo(robberId, spot)\n\tapi.broadcastMessage(api.getEntityName(copId) + " sent " + api.getEntityName(robberId) + " to jail!", { color: "red" })\n\tupdateSidebars()\n\tcheckForEnd()\n}\n\nfunction breakOut(rescuerId) {\n\t// Freed robbers go to the hideout, not onto the button, which would free the next robber jailed straight away\n\tfor (const playerId of Object.keys(jailed)) {\n\t\tdelete jailed[playerId]\n\t\tgoTo(playerId, CONFIG.hideoutPosition)\n\t}\n\tannounce(api.getEntityName(rescuerId) + " broke everyone out of jail!", "lime")\n\tupdateSidebars()\n}\n\nfunction bankLoot(playerId) {\n\tconst loot = carried[playerId]\n\tcarried[playerId] = 0\n\tbanked += loot\n\taddCoins(playerId, loot)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " banked " + loot + " loot! " + banked + "/" + CONFIG.lootToWin, { color: "yellow" })\n\tupdateSidebars()\n\tif (banked >= CONFIG.lootToWin) {\n\t\tteamWins("Robber", "The robbers got away with the loot!")\n\t}\n}\n\nfunction checkForEnd() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst robbers = withRole("Robber")\n\tif (robbers.length === 0) {\n\t\tteamWins("Cop", "There are no robbers left!")\n\t} else if (robbers.every((playerId) => jailed[playerId])) {\n\t\tteamWins("Cop", "Every robber is in jail!")\n\t} else if (withRole("Cop").length === 0) {\n\t\tteamWins("Robber", "There are no cops left!")\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of withRole("Robber")) {\n\t\t// A bank or a jailing can end the round: stop then\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (jailed[playerId] || !api.isAlive(playerId)) {\n\t\t\tcontinue\n\t\t}\n\t\tif (isNear(playerId, CONFIG.vaultPosition, 3)) {\n\t\t\tif (!grabbing[playerId]) {\n\t\t\t\tapi.sendMessage(playerId, "Grabbing the loot... stay here for " + CONFIG.lootSeconds + " seconds!", { color: "yellow" })\n\t\t\t}\n\t\t\tgrabbing[playerId] = (grabbing[playerId] || 0) + ms\n\t\t\tif (grabbing[playerId] >= CONFIG.lootSeconds * 1000) {\n\t\t\t\t// Staying grabs again; 1, not 0, so "Grabbing the loot" isn\'t said again\n\t\t\t\tgrabbing[playerId] = 1\n\t\t\t\tcarried[playerId] += CONFIG.lootCoins\n\t\t\t\tapi.sendMessage(playerId, "You grabbed " + CONFIG.lootCoins + " loot! Bring it to the hideout.", { color: "lime" })\n\t\t\t\tupdateSidebars()\n\t\t\t}\n\t\t} else {\n\t\t\tdelete grabbing[playerId]\n\t\t}\n\t\tif (carried[playerId] > 0 && isNear(playerId, CONFIG.hideoutPosition, 3)) {\n\t\t\tbankLoot(playerId)\n\t\t}\n\t\tif (Object.keys(jailed).length > 0 && isNear(playerId, CONFIG.jailButton, 1.5)) {\n\t\t\tbreakOut(playerId)\n\t\t}\n\t}\n}\n\n// Nobody gets hurt by other players: a cop\'s hit on a free robber sends them to jail instead\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (isRoundRunning() && roles[attackingPlayer] === "Cop" && roles[damagedPlayer] === "Robber" && !jailed[damagedPlayer]) {\n\t\tsendToJail(damagedPlayer, attackingPlayer)\n\t}\n\treturn "preventDamage"\n}\n\n// A robber who dies loses the loot they carried\nfunction onRespawnRequest(playerId) {\n\tif (roles[playerId] === "Robber" && carried[playerId] > 0) {\n\t\tcarried[playerId] = 0\n\t\tupdateSidebars()\n\t}\n\tif (jailed[playerId]) {\n\t\treturn jailSpot()\n\t}\n\treturn roles[playerId] === "Cop" ? CONFIG.vaultPosition : CONFIG.hideoutPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete roles[playerId]\n\tdelete carried[playerId]\n\tdelete grabbing[playerId]\n\tdelete jailed[playerId]\n\trunLater(0, () => {\n\t\tupdateSidebars()\n\t\tcheckForEnd()\n\t})\n}',
        changeable: [{
          name: "rewardWinners",
          about: "what the winning team gets, and the message (it gives each winner lootCoins coins)"
        }, {
          name: "bankLoot",
          about: "what banking loot does: the team's total, coins for the robber, the message"
        }, {
          name: "sendToJail",
          about: "what a cop's catch does: where the robber goes, the message, rewards for the cop"
        }],
        setup: "Turn PvP on, then build a vault at vaultPosition, a hideout at hideoutPosition and a jail with walls and a roof around the jail box with a button or pad at jailButton just outside it."
      }, {
        name: "partyGames",
        kind: "game",
        title: "Party games (random minigames, points add up)",
        category: "rounds",
        summary: "A party of short minigames one after another in an arena it builds itself (block party, glass bridge, spleef, musical chairs): winners of each get party points, and after a few minigames the player with the most points wins the party",
        keywords: ["party games", "party game", "partygames", "minigames party", "random minigames", "random mini games", "minigames", "mini games", "minigame", "mini game", "minigams", "mario party", "points add up", "lots of minigames", "different minigames", "game rotation", "block party", "blockparty", "colour floor", "color floor", "floor colours", "floor colors", "glass bridge", "glass bridges", "glass panels", "squid games", "squid game minigames", "squid game games", "musical chairs", "music chairs"],
        howItPlays: "Players wait at lobbyPosition. Once minPlayers are in, a countdown runs, then the arena (built by the game around arenaPosition, arenaRadius * 2 blocks wide) is set up for the next minigame from games, picked at random without repeats until all have been played: blockParty (a floor of coloured wool squares: a colour is called, then every other colour vanishes, faster each time; falling out of the arena is out), glassBridge (a bridge of glass panels in pairs, one of each pair breaks when stepped on; players who cross win, falling is out), spleef (a snow floor and a spade: break the floor under the others, last one standing wins; extra floor vanishes after a while) and musicalChairs (walk around, when the music stops there is one chair (a green block) fewer than players: stand on one, one chair per player). Winners of a minigame get pointsForWin points; falling out or dying puts a player out to watch above the arena until the next minigame. When roundSeconds run out the players still in win it. The sidebar shows the minigame, time left and the top 3. After gamesPerParty minigames the player with the most points wins the party (+1 saved partyWins), points start from 0 again and a new party starts.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between minigames"
        }, {
          key: "games",
          kind: "list",
          value: '["blockParty", "glassBridge", "spleef", "musicalChairs"]',
          about: "the minigames, any of: blockParty, glassBridge, spleef, musicalChairs (picked at random, each once before any repeats)"
        }, {
          key: "gamesPerParty",
          kind: "number",
          value: "5",
          about: "how many minigames make one party; then the points winner is announced and points reset"
        }, {
          key: "pointsForWin",
          kind: "number",
          value: "3",
          about: "party points for each player who wins a minigame"
        }, {
          key: "arenaPosition",
          kind: "position",
          value: "[0, 60, 40]",
          about: "the middle of the arena floor, where players stand; the game builds the arena here (build it high up, nothing else near it)"
        }, {
          key: "arenaRadius",
          kind: "number",
          value: "8",
          about: "half the width of the arena in blocks, from 6 to 14 (bigger for more players)"
        }, {
          key: "spleefBlock",
          kind: "block",
          value: '"Snow"',
          about: "the floor of the spleef minigame, that players break"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a minigame starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "90",
          about: "the longest a minigame lasts, in seconds; players still in then win it"
        }],
        code: '// Party games: minigames one after another in an arena the game builds. Winners of each get points, and after\n// gamesPerParty minigames the player with the most points wins the party. Players who fall out or die watch from above.\nconst miniGames = {\n\tblockParty: { title: "Block party", how: "Stand on the colour that is called!", build: buildBlockParty, start: startBlockParty },\n\tglassBridge: { title: "Glass bridge", how: "Cross the bridge! One glass of each pair breaks.", build: buildBridge, start: startBridge },\n\tspleef: { title: "Spleef", how: "Break the floor under the others! Last one standing wins.", build: buildSpleef, start: startSpleef },\n\tmusicalChairs: { title: "Musical chairs", how: "Walk around. When the music stops, stand on a green block!", build: buildChairs, start: startChairs },\n}\nconst partyColours = ["Red Wool", "Blue Wool", "Yellow Wool", "Lime Wool", "Orange Wool", "Purple Wool"]\nlet gameBag = []\nlet gameName = null\nlet gameStarted = false\nlet roundNumber = 0\nlet roundPlayerCount = 0\nlet partyGames = 0\nlet timers = []\nlet finishers = []\n// block party\nlet squares = []\nlet calledColour = null\nlet colourRound = 0\n// glass bridge\nlet badLane = []\nlet brokenPanels = {}\n// musical chairs\nlet chairs = []\nlet claims = {}\nlet chairsOpen = false\n\nfunction onPlayerJoin(playerId) {\n\tsetSidebar(playerId, "Party game", partyGames + 1 + "/" + CONFIG.gamesPerParty)\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A minigame is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Party games! Win minigames to get points. Most points wins the party.", { color: "aqua" })\n}\n\n// The arena: x1..x2 by z1..z2 wide, its floor at y fy, players stand on it at fy + 1\nfunction arena() {\n\tconst r = Math.min(14, Math.max(6, Math.floor(CONFIG.arenaRadius)))\n\tconst cx = Math.floor(CONFIG.arenaPosition[0])\n\tconst cz = Math.floor(CONFIG.arenaPosition[2])\n\treturn { cx: cx, cz: cz, fy: Math.floor(CONFIG.arenaPosition[1]) - 1, r: r, x1: cx - r, x2: cx + r - 1, z1: cz - r, z2: cz + r - 1 }\n}\n\nfunction sendToWatch(playerId) {\n\tconst a = arena()\n\tapi.setPosition(playerId, a.cx, a.fy + 8, a.cz)\n}\n\n// Runs fn once the whole arena has loaded (blocks can\'t be built before)\nfunction whenArenaReady(fn) {\n\tconst a = arena()\n\tconst loaded = [a.x1, a.x2].every((x) => [a.z1, a.z2].every((z) => [a.fy, a.fy + 6].every((y) => api.getBlock(x, y, z) !== "Unloaded")))\n\tloaded ? fn() : runLater(0.5, () => whenArenaReady(fn))\n}\n\n// Runs fn after some seconds, unless this minigame is over by then\nfunction laterThisRound(seconds, fn) {\n\tconst round = roundNumber\n\trunLater(seconds, () => {\n\t\tif (round === roundNumber && isRoundRunning()) {\n\t\t\tfn()\n\t\t}\n\t})\n}\n\nfunction pickGame() {\n\tif (gameBag.length === 0) {\n\t\tconst names = Object.keys(miniGames)\n\t\tconst wanted = CONFIG.games.map((name) => names.find((key) => key.toLowerCase() === String(name).toLowerCase().replace(/[^a-z]/g, "")))\n\t\tgameBag = shuffleList(wanted.filter((key, i) => key && wanted.indexOf(key) === i))\n\t\tif (gameBag.length === 0) {\n\t\t\tgameBag = ["blockParty"]\n\t\t}\n\t}\n\treturn gameBag.pop()\n}\n\nfunction beginRound() {\n\troundNumber++\n\tconst round = roundNumber\n\tgameStarted = false\n\tfinishers = []\n\troundPlayerCount = api.getPlayerIds().length\n\tgameName = pickGame()\n\tconst game = miniGames[gameName]\n\tannounce("Minigame " + (partyGames + 1) + " of " + CONFIG.gamesPerParty + ": " + game.title + "! " + game.how, "aqua")\n\twhenArenaReady(() => {\n\t\tif (round !== roundNumber || !isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tconst a = arena()\n\t\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy + 6, a.z2], "Air")\n\t\tgame.build()\n\t\tfor (const playerId of playersLeft()) {\n\t\t\tconst spot = gameName === "glassBridge" ? [a.cx - 3 + Math.random() * 4.8, a.fy + 1, a.z1 + 0.5 + Math.random()] : randomSpot([a.cx, a.fy + 1, a.cz], a.r - 3)\n\t\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\t\thealFully(playerId)\n\t\t\tapi.clearInventory(playerId)\n\t\t}\n\t\tgameStarted = true\n\t\tgame.start()\n\t})\n\ttimers.push(repeatEvery(1, showSidebars))\n\tshowSidebars()\n}\n\nfunction finishRound() {\n\ttimers.forEach(cancelTimer)\n\ttimers = []\n\tconst winners = gameStarted ? (gameName === "glassBridge" ? finishers.filter((playerId) => api.getPlayerIds().includes(playerId)) : playersLeft()) : []\n\tgameStarted = false\n\tif (winners.length > 0) {\n\t\tfor (const playerId of winners) {\n\t\t\taddScore(playerId, CONFIG.pointsForWin)\n\t\t}\n\t\tannounce(winners.map((playerId) => api.getEntityName(playerId)).join(", ") + " won " + miniGames[gameName].title + "! +" + CONFIG.pointsForWin + " points", "gold")\n\t} else {\n\t\tannounce("Nobody won " + miniGames[gameName].title + "!", "gold")\n\t}\n\tpartyGames++\n\tconst partyOver = partyGames >= CONFIG.gamesPerParty\n\tconst best = Math.max(0, ...api.getPlayerIds().map(getScore))\n\tconst partyWinners = api.getPlayerIds().filter((playerId) => best > 0 && getScore(playerId) === best)\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t}\n\tif (partyOver) {\n\t\tpartyGames = 0\n\t\tresetScores()\n\t\tpartyWinners.forEach((playerId) => addSaved(playerId, "partyWins", 1))\n\t\trunLater(2, () => announce(partyWinners.length > 0 ? partyWinners.map((playerId) => api.getEntityName(playerId)).join(", ") + " won the party with " + best + " points!" : "The party is over, nobody scored!", "gold"))\n\t}\n\tgameName = null\n\tshowSidebars()\n}\n\n// Every second: the minigame, time left and the top 3\nfunction showSidebars() {\n\tconst top = api.getPlayerIds().slice().sort((a, b) => getScore(b) - getScore(a))\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Minigame", gameName ? miniGames[gameName].title + (gameName === "blockParty" && calledColour ? ": " + calledColour.replace(" Wool", "") : "") : "-")\n\t\tsetSidebar(playerId, "Time left", isRoundRunning() ? roundSecondsLeft() : "-")\n\t\tsetSidebar(playerId, "Party game", partyGames + 1 + "/" + CONFIG.gamesPerParty)\n\t\tfor (let i = 0; i < 3; i++) {\n\t\t\tsetSidebar(playerId, "#" + (i + 1), top[i] ? api.getEntityName(top[i]) + " " + getScore(top[i]) : "-")\n\t\t}\n\t}\n}\n\nfunction dropOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tsendToWatch(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n}\n\nfunction knockOut(playerId, why) {\n\tdropOut(playerId, why)\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning() || !gameStarted) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tconst racing = left.filter((playerId) => !finishers.includes(playerId))\n\tif (gameName === "glassBridge" ? racing.length === 0 : left.length === 0 || (left.length === 1 && roundPlayerCount > 1)) {\n\t\tendRound()\n\t}\n}\n\n// Block party: coloured squares; a colour is called and the rest vanish, a bit faster every time\nfunction buildBlockParty() {\n\tcolourRound = 0\n\tcalledColour = null\n\tpaintSquares()\n}\n\nfunction paintSquares() {\n\tconst a = arena()\n\tsquares = []\n\tfor (let x = a.x1; x < a.x1 + a.r * 2; x += 2) {\n\t\tfor (let z = a.z1; z < a.z1 + a.r * 2; z += 2) {\n\t\t\tsquares.push({ x: x, z: z, block: pickRandom(partyColours) })\n\t\t\tfillBox([x, a.fy, z], [x + 1, a.fy, z + 1], squares[squares.length - 1].block)\n\t\t}\n\t}\n}\n\nfunction startBlockParty() {\n\tlaterThisRound(2, nextColour)\n}\n\nfunction nextColour() {\n\tif (colourRound >= 10) {\n\t\tendRound()\n\t\treturn\n\t}\n\tpaintSquares()\n\tcolourRound++\n\tcalledColour = pickRandom(squares).block\n\tconst name = calledColour.replace(" Wool", "")\n\tannounce("Stand on " + name + "!", name.toLowerCase())\n\tlaterThisRound(Math.max(1.5, 5 - colourRound * 0.4), () => {\n\t\tfor (const square of squares) {\n\t\t\tif (square.block !== calledColour) {\n\t\t\t\tfillBox([square.x, arena().fy, square.z], [square.x + 1, arena().fy, square.z + 1], "Air")\n\t\t\t}\n\t\t}\n\t\tlaterThisRound(2.5, nextColour)\n\t})\n}\n\n// Glass bridge: pairs of glass panels, one of each pair breaks when someone steps on it. Cross to the gold to win\nfunction buildBridge() {\n\tconst a = arena()\n\tbadLane = []\n\tbrokenPanels = {}\n\tfillBox([a.cx - 3, a.fy, a.z1], [a.cx + 1, a.fy, a.z1 + 1], "Smooth Stone")\n\tfillBox([a.cx - 3, a.fy, a.z2 - 1], [a.cx + 1, a.fy, a.z2], "Block of Gold")\n\tfor (let pair = 0; pair < a.r - 2; pair++) {\n\t\tconst z = a.z1 + 2 + pair * 2\n\t\tbadLane.push(randomInt(0, 1))\n\t\tfillBox([a.cx - 3, a.fy, z], [a.cx - 2, a.fy, z + 1], "Glass")\n\t\tfillBox([a.cx, a.fy, z], [a.cx + 1, a.fy, z + 1], "Glass")\n\t}\n}\n\nfunction startBridge() {}\n\nfunction stepBridge(playerId, position) {\n\tconst a = arena()\n\tif (Math.abs(position[1] - (a.fy + 1)) > 0.6 || finishers.includes(playerId)) {\n\t\treturn\n\t}\n\tconst x = Math.floor(position[0])\n\tconst z = Math.floor(position[2])\n\tconst lane = x === a.cx - 3 || x === a.cx - 2 ? 0 : x === a.cx || x === a.cx + 1 ? 1 : -1\n\tconst pair = Math.floor((z - a.z1 - 2) / 2)\n\tif (z >= a.z2 - 1 && x >= a.cx - 3 && x <= a.cx + 1) {\n\t\tfinishers.push(playerId)\n\t\tannounce(api.getEntityName(playerId) + " crossed the bridge!", "lime")\n\t\tcheckForWinner()\n\t} else if (lane >= 0 && pair >= 0 && pair < badLane.length && badLane[pair] === lane && !brokenPanels[lane + "," + pair]) {\n\t\tbrokenPanels[lane + "," + pair] = true\n\t\tconst x1 = lane === 0 ? a.cx - 3 : a.cx\n\t\tconst z1 = a.z1 + 2 + pair * 2\n\t\trunLater(0.2, () => fillBox([x1, a.fy, z1], [x1 + 1, a.fy, z1 + 1], "Air"))\n\t}\n}\n\n// Spleef: break the floor under the others. Later, bits of floor vanish by themselves\nfunction buildSpleef() {\n\tconst a = arena()\n\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy, a.z2], CONFIG.spleefBlock)\n}\n\nfunction startSpleef() {\n\tfor (const playerId of playersLeft()) {\n\t\tgiveKit(playerId, [["Diamond Spade", 1]])\n\t}\n\tlaterThisRound(25, () => {\n\t\tconst loop = repeatEvery(1.5, () => {\n\t\t\tconst a = arena()\n\t\t\tfor (let i = 0; i < 3; i++) {\n\t\t\t\tapi.setBlock(randomInt(a.x1, a.x2), a.fy, randomInt(a.z1, a.z2), "Air")\n\t\t\t}\n\t\t})\n\t\ttimers.push(loop)\n\t})\n}\n\n// Musical chairs: when the music stops, one green block (chair) fewer than players appears; one player per chair\nfunction buildChairs() {\n\tconst a = arena()\n\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy, a.z2], "Gray Wool")\n}\n\nfunction startChairs() {\n\tchairs = []\n\tclaims = {}\n\tchairsOpen = false\n\tconst a = arena()\n\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy, a.z2], "Gray Wool")\n\tannounce("Music! Walk around...", "aqua")\n\tlaterThisRound(2 + Math.random() * 3, () => {\n\t\tconst count = Math.max(1, playersLeft().length - 1)\n\t\tfor (let i = 0; i < count; i++) {\n\t\t\tconst angle = (i / count) * Math.PI * 2\n\t\t\tchairs.push([Math.floor(a.cx + Math.cos(angle) * (a.r - 3)), Math.floor(a.cz + Math.sin(angle) * (a.r - 3))])\n\t\t\tfillBox([chairs[i][0], a.fy, chairs[i][1]], [chairs[i][0], a.fy, chairs[i][1]], "Lime Wool")\n\t\t}\n\t\tchairsOpen = true\n\t\tannounce("The music stopped! Stand on a green block!", "lime")\n\t\tlaterThisRound(4, endChairRound)\n\t})\n}\n\n// Which chair a player stands on (-1 for none)\nfunction chairUnder(playerId) {\n\tconst position = api.getPosition(playerId)\n\tconst x = Math.floor(position[0])\n\tconst z = Math.floor(position[2])\n\treturn Math.abs(position[1] - (arena().fy + 1)) > 0.6 ? -1 : chairs.findIndex((chair) => chair[0] === x && chair[1] === z)\n}\n\nfunction endChairRound() {\n\tchairsOpen = false\n\tfor (const playerId of playersLeft()) {\n\t\tif (claims[chairUnder(playerId)] !== playerId) {\n\t\t\tdropOut(playerId, "didn\'t get a chair!")\n\t\t}\n\t}\n\tcheckForWinner()\n\tlaterThisRound(2, startChairs)\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning() || !gameStarted) {\n\t\treturn\n\t}\n\tconst a = arena()\n\tfor (const playerId of playersLeft()) {\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tconst position = api.getPosition(playerId)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "didn\'t make it!")\n\t\t} else if (position[1] < a.fy - 2) {\n\t\t\tknockOut(playerId, "fell out!")\n\t\t} else if (gameName === "glassBridge") {\n\t\t\tstepBridge(playerId, position)\n\t\t} else if (gameName === "musicalChairs" && chairsOpen) {\n\t\t\tconst chair = chairUnder(playerId)\n\t\t\tif (chair >= 0 && claims[chair] === undefined && !Object.values(claims).includes(playerId)) {\n\t\t\t\tclaims[chair] = playerId\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "didn\'t make it!")\n\tconst a = arena()\n\treturn isRoundRunning() ? [a.cx, a.fy + 8, a.cz] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tfinishers = finishers.filter((id) => id !== playerId)\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "finishRound",
          about: "what happens when a minigame ends: who gets points (it gives pointsForWin to each winner), the messages, and the party winner"
        }, {
          name: "nextColour",
          about: "how the block party goes: which colour is called, and how long players have"
        }],
        setup: "Build a lobby at lobbyPosition. The game builds the arena itself at arenaPosition (put it high in the sky with space around it and under it, and turn block breaking on for spleef)."
      }, {
        name: "lobbyVote",
        kind: "game",
        title: "Minigame lobby with votes",
        category: "rounds",
        summary: "A lobby that runs your minigames by vote: players wait in the lobby, vote with /vote for the next game, play it in its area until one is left or time runs out, then come back to vote again",
        keywords: ["lobby", "lobby vote", "lobby voting", "waiting lobby", "waiting room", "minigame hub", "minigames hub", "mini game hub", "minigame lobby", "minigme", "hub", "game hub", "vote", "voting", "vote for the next game", "vote the next game", "vote next game", "vote what to play", "vote for a game", "game vote", "map vote", "map voting", "vote for map", "vote map"],
        howItPlays: "Players wait at lobbyPosition. Once minPlayers are in, a vote starts: everyone gets voteSeconds to type /vote and a number or name from games (with only one game there's no vote). Everyone is then sent to the winning game's spawn. Each game in games is [name, spawnPosition, gameSeconds], an area the creator built: falling more than fallDepth blocks below its spawn, or dying, knocks a player out to watch. The last player in wins winCoins; when gameSeconds run out, everyone still in wins it (playing alone, you win by lasting). Then everyone goes back to the lobby, and after a short break the next vote starts. Players who join during a game watch it.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait and vote between games"
        }, {
          key: "games",
          kind: "list",
          value: '[["Spleef", [50, 10, 0], 90], ["Parkour", [0, 10, 50], 120], ["Sumo", [-50, 10, 0], 60]]',
          about: "the games to vote for, each [name, spawnPosition [x, y, z], gameSeconds]: an area you built, where players start"
        }, {
          key: "voteSeconds",
          kind: "number",
          value: "15",
          about: "how long the vote lasts, in seconds"
        }, {
          key: "fallDepth",
          kind: "number",
          value: "10",
          about: "falling this many blocks below a game's spawn knocks a player out"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a vote starts"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each winner of a game"
        }],
        code: '// Minigame lobby: players wait in the lobby, then vote with /vote for the next game, and everyone is sent to its area.\n// Falling CONFIG.fallDepth blocks below the game\'s spawn, or dying, knocks you out to watch. The last player in wins,\n// or everyone still in when the time runs out. Then everyone comes back to the lobby for the next vote.\nconst restSeconds = 5 // seconds in the lobby after a game, before the next vote\nlet phase = "waiting" // "waiting", "voting", "playing" or "resting"\nlet currentGame = null // the game being played: [name, spawnPosition, gameSeconds]\nlet gameNumber = 0\nlet startedWith = 0 // players in the game when it started\n\nfunction onPlayerJoin(playerId) {\n\tif (phase === "playing") {\n\t\teliminate(playerId)\n\t\tgoTo(playerId, currentGame[1])\n\t\tapi.sendMessage(playerId, currentGame[0] + " is on! Watch this one, then vote for the next game.", { color: "yellow" })\n\t\treturn\n\t}\n\tgoTo(playerId, CONFIG.lobbyPosition)\n\tapi.sendMessage(playerId, "Welcome to the lobby! We vote for a game once " + CONFIG.minPlayers + " players are here.", { color: "aqua" })\n}\n\nfunction goTo(playerId, spot) {\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction startGameVote() {\n\tif (CONFIG.games.length === 1) {\n\t\tstartGame(CONFIG.games[0])\n\t\treturn\n\t}\n\tphase = "voting"\n\tstartVote(CONFIG.games.map((game) => game[0]), CONFIG.voteSeconds, (winner) => {\n\t\tif (api.getPlayerIds().length < CONFIG.minPlayers) {\n\t\t\tphase = "waiting"\n\t\t\tannounce("Waiting for more players...", "yellow")\n\t\t\treturn\n\t\t}\n\t\tstartGame(CONFIG.games.find((game) => game[0] === winner))\n\t})\n}\n\nfunction startGame(game) {\n\tphase = "playing"\n\tcurrentGame = game\n\tgameNumber++\n\tstartedWith = api.getPlayerIds().length\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, game[1])\n\t\t}\n\t\tgoTo(playerId, game[1])\n\t\thealFully(playerId)\n\t}\n\tannounce(game[0] + "! Don\'t fall: the last one in wins!", "aqua")\n\tconst number = gameNumber\n\trunLater(game[2] || 60, () => {\n\t\tif (number === gameNumber && phase === "playing") {\n\t\t\tendGame(playersLeft(), "Time\'s up! ")\n\t\t}\n\t})\n}\n\nfunction knockOut(playerId, why) {\n\tif (phase !== "playing" || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (phase !== "playing") {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 0) {\n\t\tendGame([], "")\n\t} else if (left.length === 1 && startedWith > 1) {\n\t\tendGame(left, "")\n\t}\n}\n\nfunction endGame(winners, start) {\n\tphase = "resting"\n\tgameNumber++\n\tannounce(start + (winners.length > 0 ? rewardWinners(winners) : "Nobody won " + currentGame[0] + " this time!"), "gold")\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.lobbyPosition)\n\t\t}\n\t\tgoTo(playerId, CONFIG.lobbyPosition)\n\t\thealFully(playerId)\n\t}\n\trunLater(restSeconds, () => {\n\t\tphase = "waiting"\n\t})\n}\n\n// What the winners of a game get: winCoins each. Returns the message\nfunction rewardWinners(playerIds) {\n\tfor (const playerId of playerIds) {\n\t\taddCoins(playerId, CONFIG.winCoins)\n\t}\n\treturn playerIds.map((playerId) => api.getEntityName(playerId)).join(", ") + " won " + currentGame[0] + "! +" + CONFIG.winCoins + " coins"\n}\n\nfunction tick(ms) {\n\tif (phase === "waiting" && CONFIG.games.length > 0 && api.getPlayerIds().length >= CONFIG.minPlayers) {\n\t\tstartGameVote()\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\t// A knock-out can end the game: stop then\n\t\tif (phase !== "playing") {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "is out!")\n\t\t} else if (api.getPosition(playerId)[1] < currentGame[1][1] - CONFIG.fallDepth) {\n\t\t\tgoTo(playerId, currentGame[1])\n\t\t\tknockOut(playerId, "fell out!")\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "is out!")\n\treturn phase === "playing" ? currentGame[1] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "rewardWinners",
          about: "what the winners of a game get, and the message (it gives winCoins)"
        }, {
          name: "startGame",
          about: "how a game starts: where players go, what they get (e.g. a kit for each game)"
        }],
        setup: "Build a lobby at lobbyPosition and an area for each game in games yourself (an arena, a spleef floor, a parkour), each with its spawn at the spawnPosition you give it, high enough that falling off it drops more than fallDepth blocks."
      }, {
        name: "kingOfTheHill",
        kind: "game",
        title: "King of the hill",
        category: "pvp",
        summary: "Rounds of fighting over a hill: a player alone on it scores a point every second, and the first to pointsToWin wins",
        keywords: ["king of the hill", "koth", "hill", "capture point", "capture the point", "capture zone", "control point", "point control", "hold the hill", "king", "domination"],
        howItPlays: "Once minPlayers are in, a countdown runs and everyone goes to spawnPosition with the kit. Every second, a player who is alone on the hill (the box between hillCorner1 and hillCorner2) scores a point; with two or more on it, nobody does. The first to pointsToWin wins the round and gets rewardCoins; if the time runs out, whoever has the most points wins. Points, who holds the hill and the leader show on the right of the screen.",
        settings: [{
          key: "hillCorner1",
          kind: "position",
          value: "[-3, 10, -3]",
          about: "one corner of the hill's box [x, y, z]: players inside the box are on the hill"
        }, {
          key: "hillCorner2",
          kind: "position",
          value: "[3, 13, 3]",
          about: "the opposite corner of the hill's box; make the box a few blocks tall so players standing on the hill are in it"
        }, {
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 20]",
          about: "where players start each round and respawn"
        }, {
          key: "pointsToWin",
          kind: "number",
          value: "30",
          about: "points needed to win a round (one point a second alone on the hill)"
        }, {
          key: "kit",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1], ["Bread", 3]]',
          about: "the [item, amount] each player gets when a round starts"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "10",
          about: "coins for winning a round (0 for none)"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "300",
          about: "longest a round lasts, in seconds; then the player with the most points wins"
        }],
        code: '// King of the hill: stand on the hill alone to score a point every second. If two or more players are on it, nobody\n// scores, so knock them off! The first to pointsToWin wins the round. Points show on the right of the screen.\nconst points = {}\nlet hillTimer = null\nlet roundWinner = null\n\nfunction onPlayerJoin(playerId) {\n\tpoints[playerId] = 0\n\tsendToSpawn(playerId)\n\t// The others got theirs as the round began\n\tif (isRoundRunning()) {\n\t\tgiveKit(playerId, CONFIG.kit)\n\t}\n\tapi.sendMessage(playerId, "Stand on the hill alone to score points! First to " + CONFIG.pointsToWin + " wins.", { color: "aqua" })\n\tupdateSidebars("Nobody")\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = randomSpot(CONFIG.spawnPosition, 3)\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction beginRound() {\n\troundWinner = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tpoints[playerId] = 0\n\t\tsendToSpawn(playerId)\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, CONFIG.kit)\n\t}\n\tannounce("Get to the hill and hold it alone!", "lime")\n\tupdateSidebars("Nobody")\n\thillTimer = repeatEvery(1, scoreHill)\n}\n\nfunction scoreHill() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst onHill = playersInBox(CONFIG.hillCorner1, CONFIG.hillCorner2).filter((playerId) => api.isAlive(playerId))\n\tif (onHill.length === 1) {\n\t\tconst king = onHill[0]\n\t\tpoints[king] = (points[king] || 0) + 1\n\t\tupdateSidebars(api.getEntityName(king))\n\t\tif (points[king] >= CONFIG.pointsToWin) {\n\t\t\troundWinner = king\n\t\t\trewardWinner(king)\n\t\t\tendRound(api.getEntityName(king) + " is the king of the hill!")\n\t\t}\n\t} else {\n\t\tupdateSidebars(onHill.length > 1 ? "Contested!" : "Nobody")\n\t}\n}\n\nfunction leader() {\n\tlet best = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (best === null || (points[playerId] || 0) > (points[best] || 0)) {\n\t\t\tbest = playerId\n\t\t}\n\t}\n\treturn best\n}\n\nfunction updateSidebars(holder) {\n\tconst top = leader()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Your points", (points[playerId] || 0) + " / " + CONFIG.pointsToWin)\n\t\tsetSidebar(playerId, "On the hill", holder)\n\t\tsetSidebar(playerId, "Leader", top === null ? "-" : api.getEntityName(top) + " (" + (points[top] || 0) + ")")\n\t}\n}\n\nfunction rewardWinner(playerId) {\n\tif (CONFIG.rewardCoins > 0) {\n\t\taddCoins(playerId, CONFIG.rewardCoins)\n\t}\n\taddSaved(playerId, "kingOfTheHillWins", 1)\n}\n\nfunction finishRound() {\n\tcancelTimer(hillTimer)\n\tconst top = leader()\n\tif (roundWinner === null && top !== null && (points[top] || 0) > 0) {\n\t\trewardWinner(top)\n\t\tannounce(api.getEntityName(top) + " had the most points and wins!", "gold")\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsendToSpawn(playerId)\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// Dying drops the kit: a player coming back mid-round gets it again\n\tif (isRoundRunning()) {\n\t\tgiveKit(playerId, CONFIG.kit)\n\t}\n\treturn randomSpot(CONFIG.spawnPosition, 3)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete points[playerId]\n\trunLater(0, () => {\n\t\tif (isRoundRunning() && api.getPlayerIds().length < CONFIG.minPlayers) {\n\t\t\tendRound("Not enough players left. Waiting for more...")\n\t\t}\n\t})\n}',
        changeable: [{
          name: "rewardWinner",
          about: "what the round's winner gets: coins, and their wins are saved"
        }, {
          name: "scoreHill",
          about: "who scores each second: by default only a player alone on the hill, one point"
        }],
        setup: "Build a hill (a raised platform) inside the box between hillCorner1 and hillCorner2, put the spawn at spawnPosition, and turn PvP on in your world settings."
      }, {
        name: "redLightGreenLight",
        kind: "game",
        title: "Red light, green light",
        category: "rounds",
        summary: "Rounds of running to the finish line on green light and freezing on red: anyone who moves on red is out, everyone who crosses the line wins",
        keywords: ["red light green light", "red light", "green light", "redlight greenlight", "rlgl", "squid game", "squidgame", "squid", "freeze", "statues", "stop and go", "finish line"],
        howItPlays: "Each round, players line up at startPosition and run towards the line at finishZ. The light turns green (run!) and red (freeze!) at random, every minLightSeconds to maxLightSeconds. Moving more than moveLimit blocks during red light knocks a player out to spectate. Everyone who crosses the finish line wins and gets rewardCoins; the round ends when nobody is still running or the time runs out.",
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players line up at the start of each round"
        }, {
          key: "finishZ",
          kind: "number",
          value: "60",
          about: "the finish line: reaching this z wins (it can be bigger or smaller than the start's z)"
        }, {
          key: "minLightSeconds",
          kind: "number",
          value: "2",
          about: "the shortest a green or red light lasts, in seconds"
        }, {
          key: "maxLightSeconds",
          kind: "number",
          value: "5",
          about: "the longest a green or red light lasts, in seconds"
        }, {
          key: "moveLimit",
          kind: "number",
          value: "0.5",
          about: "how many blocks a player may move during red light before they're out"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "10",
          about: "coins for crossing the finish line (0 for none)"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "1",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "90",
          about: "longest a round lasts, in seconds"
        }],
        code: '// Red light, green light: run to the finish line while the light is green. When it turns red, freeze! Anyone who\n// moves during red light is out. Everyone who crosses the finish line wins.\nconst finished = {}\nlet finishCount = 0\nlet light = "green"\nlet lightTimer = null\nlet freezeTimer = null\nlet frozenSpots = {}\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, "Run on green light, freeze on red light! Reach the finish line to win.", { color: "aqua" })\n}\n\nfunction beginRound() {\n\tfinishCount = 0\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tdelete finished[playerId]\n\t\tconst spot = randomSpot(CONFIG.startPosition, 2)\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t}\n\tsetLight("green")\n}\n\nfunction setLight(color) {\n\tlight = color\n\tfrozenSpots = {}\n\tcancelTimer(freezeTimer)\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Light", color === "green" ? "GREEN - run!" : "RED - freeze!")\n\t}\n\tif (color === "green") {\n\t\tannounce("Green light! Run!", "lime")\n\t} else {\n\t\tannounce("Red light! Freeze!", "red")\n\t\t// Half a second to stop, then anyone who moves is out\n\t\tfreezeTimer = runLater(0.5, () => {\n\t\t\tfor (const playerId of runners()) {\n\t\t\t\tfrozenSpots[playerId] = api.getPosition(playerId)\n\t\t\t}\n\t\t})\n\t}\n\tconst seconds = CONFIG.minLightSeconds + Math.random() * Math.max(0, CONFIG.maxLightSeconds - CONFIG.minLightSeconds)\n\tlightTimer = runLater(seconds, () => {\n\t\tsetLight(color === "green" ? "red" : "green")\n\t})\n}\n\nfunction runners() {\n\treturn playersLeft().filter((playerId) => !finished[playerId])\n}\n\nfunction crossedFinish(position) {\n\tif (CONFIG.startPosition[2] <= CONFIG.finishZ) {\n\t\treturn position[2] >= CONFIG.finishZ\n\t}\n\treturn position[2] <= CONFIG.finishZ\n}\n\nfunction reachFinish(playerId) {\n\tfinished[playerId] = true\n\tfinishCount++\n\tannounce(api.getEntityName(playerId) + " made it! (#" + finishCount + ")", "gold")\n\tif (CONFIG.rewardCoins > 0) {\n\t\taddCoins(playerId, CONFIG.rewardCoins)\n\t}\n}\n\nfunction checkRoundOver() {\n\tif (isRoundRunning() && runners().length === 0) {\n\t\tendRound(finishCount > 0 ? "Round over! " + finishCount + " made it to the finish." : "Round over! Nobody made it this time.")\n\t}\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tfor (const playerId of runners()) {\n\t\tconst position = api.getPosition(playerId)\n\t\tconst spot = frozenSpots[playerId]\n\t\t// Only moving sideways counts: landing from a jump doesn\'t\n\t\tif (light === "red" && spot && Math.hypot(position[0] - spot[0], position[2] - spot[2]) > CONFIG.moveLimit) {\n\t\t\teliminate(playerId)\n\t\t\tapi.broadcastMessage(api.getEntityName(playerId) + " moved on red light! Out!", { color: "red" })\n\t\t} else if (crossedFinish(position)) {\n\t\t\treachFinish(playerId)\n\t\t}\n\t}\n\tcheckRoundOver()\n}\n\nfunction finishRound() {\n\tcancelTimer(lightTimer)\n\tcancelTimer(freezeTimer)\n\tfrozenSpots = {}\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tdelete finished[playerId]\n\t\tsetSidebar(playerId, "Light", "-")\n\t\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// Coming back at the start on red isn\'t moving: that is their spot now\n\tif (frozenSpots[playerId]) {\n\t\tfrozenSpots[playerId] = CONFIG.startPosition.slice()\n\t}\n\treturn CONFIG.startPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete finished[playerId]\n\tdelete frozenSpots[playerId]\n\trunLater(0, checkRoundOver)\n}',
        changeable: [{
          name: "reachFinish",
          about: "what happens when a player crosses the finish line: the message and the reward"
        }, {
          name: "setLight",
          about: "how the light changes: the messages, and how long each light lasts"
        }],
        setup: "Build a long, flat track from startPosition to the finish line at finishZ (players run along z)."
      }, {
        name: "shop",
        kind: "feature",
        title: "Shop",
        category: "economy",
        summary: "A shop of items for coins: /shop lists them and opens the shop screen, /buy <number or name> buys one; with sellPrices set, /sell (or a sell pad) turns items into coins",
        keywords: ["shop", "shops", "shopping", "store", "buy", "buying", "sell", "market", "merchant", "trader", "price", "prices", "spend", "selling", "sellall", "sell all", "sell pad", "sell station", "sell items", "sell stuff", "sell ores", "sell resources"],
        howItPlays: "Every item in shopItems is for sale for coins, in the shop screen and by command. /shop lists them with their numbers and prices and opens the shop screen; /buy 2 or /buy diamond sword buys one if the player has the coins. Coins come from the coins helper: give them with addCoins elsewhere in the game. It can also buy items back: every [item, coins each] in sellPrices is sold by typing /sell (the name is sellCommand) and, if sellPad is a position, by standing on that block (checked a few times a second, once each time a player steps on). It takes every one of those items from the player's inventory, gives the coins and tells them what they sold, or that they have nothing to sell. With sellPrices left empty nothing can be sold.",
        settings: [{
          key: "shopItems",
          kind: "list",
          names: "item",
          value: '[["Bread", 5, 10], ["Iron Sword", 1, 50], ["Diamond Pickaxe", 1, 150]]',
          about: "what the shop sells, each [item, how many, price in coins]"
        }, {
          key: "shopTitle",
          kind: "string",
          value: '"Shop"',
          about: "the shop's name, shown at the top of the shop screen"
        }, {
          key: "sellPrices",
          kind: "list",
          names: "item",
          value: "[]",
          about: 'what players can sell for coins, each [item, coins for each one], like [["Wheat", 5], ["Coal", 3]] ([] for no selling)'
        }, {
          key: "sellCommand",
          kind: "string",
          value: '"sell"',
          about: "the command that sells everything in sellPrices, without the slash"
        }, {
          key: "sellPad",
          kind: "position",
          value: "null",
          about: "the block players stand on to sell everything in sellPrices (null for no sell pad)"
        }, {
          key: "startCoins",
          kind: "number",
          value: "0",
          about: "coins a new player starts with"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "false",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Shop: /shop lists what is for sale and opens the shop screen, /buy <number or name> buys it with coins.\n// With sellPrices set, /sell (and standing on sellPad) sells those items for coins.\nlet shopMade = false\nlet sellPadMs = 0\nconst onSellPad = {}\n\nfunction onPlayerJoin(playerId) {\n\tmakeShop()\n\tconst selling = sellList().length > 0 ? ", /" + CONFIG.sellCommand.toLowerCase().replace("/", "") + " to sell" : ""\n\tapi.sendMessage(playerId, "Type /shop to see what you can buy with coins" + selling + ".", { color: "aqua" })\n}\n\nfunction makeShop() {\n\tif (shopMade) {\n\t\treturn\n\t}\n\tshopMade = true\n\tapi.configureShopCategory("Shop", { customTitle: CONFIG.shopTitle, autoSelectCategory: true })\n\tCONFIG.shopItems.forEach((entry, index) => {\n\t\tapi.createShopItem("Shop", "item" + (index + 1), {\n\t\t\timage: entry[0],\n\t\t\tamount: entry[1] || 1,\n\t\t\tcost: entry[2],\n\t\t\tcurrency: "coins",\n\t\t\tcustomTitle: (entry[1] || 1) + " " + entry[0],\n\t\t\tonBoughtMessage: "You bought " + (entry[1] || 1) + " " + entry[0] + "!",\n\t\t\tsortPriority: CONFIG.shopItems.length - index,\n\t\t})\n\t})\n}\n\nfunction showShop(playerId) {\n\tconst lines = CONFIG.shopItems.map((entry, index) => (index + 1) + ". " + (entry[1] || 1) + " " + entry[0] + " - " + entry[2] + " coins")\n\tapi.sendMessage(playerId, CONFIG.shopTitle + " (you have " + getCoins(playerId) + " coins):\\n" + lines.join("\\n") + "\\nType /buy and a number, like /buy 1", { color: "yellow" })\n\tapi.openShop(playerId, false, "Shop", false)\n}\n\nfunction findShopItem(wanted) {\n\tconst number = Number(wanted)\n\tif (Number.isInteger(number) && number >= 1 && number <= CONFIG.shopItems.length) {\n\t\treturn CONFIG.shopItems[number - 1]\n\t}\n\tconst name = wanted.toLowerCase()\n\treturn CONFIG.shopItems.find((entry) => entry[0].toLowerCase() === name) || CONFIG.shopItems.find((entry) => entry[0].toLowerCase().includes(name)) || null\n}\n\nfunction sellList() {\n\treturn CONFIG.sellPrices.filter((entry) => Number(entry[1]) > 0)\n}\n\n// Sells every item in sellPrices the player has, and tells them what it came to\nfunction sellAll(playerId) {\n\tconst prices = sellList()\n\tconst sold = []\n\tfor (const entry of prices) {\n\t\tlet amount = 0\n\t\ttry {\n\t\t\tamount = api.getInventoryItemAmount(playerId, entry[0])\n\t\t} catch (e) {\n\t\t\tcontinue\n\t\t}\n\t\tif (amount > 0) {\n\t\t\tsold.push(amount + " " + entry[0])\n\t\t}\n\t}\n\tconst earned = sold.length > 0 ? sellItems(playerId, prices) : 0\n\tif (earned > 0) {\n\t\tapi.sendMessage(playerId, "You sold " + sold.join(", ") + " for " + earned + " coins!", { color: "gold" })\n\t} else {\n\t\tapi.sendMessage(playerId, "You have nothing to sell. Sell prices: " + prices.map((entry) => entry[0] + " " + entry[1]).join(", ") + ".", { color: "orange" })\n\t}\n}\n\nfunction giveShopItem(playerId, entry) {\n\tconst amount = entry[1] || 1\n\tconst given = api.giveItem(playerId, entry[0], amount)\n\tif (given < amount) {\n\t\t// The price of what didn\'t fit back, as it is: addCoins would count it double during double coins\n\t\tconst back = given === 0 ? entry[2] : Math.floor((entry[2] * (amount - given)) / amount)\n\t\tapi.setCurrencyAmount(playerId, "coins", getCoins(playerId) + back)\n\t\tapi.sendMessage(playerId, given === 0 ? "Your inventory is full, so you got your coins back." : "Your inventory only had room for " + given + " " + entry[0] + ", so you got " + back + " coins back.", { color: "orange" })\n\t\treturn false\n\t}\n\treturn true\n}\n\nfunction buyFromShop(playerId, wanted) {\n\tconst entry = wanted === "" ? null : findShopItem(wanted)\n\tif (entry === null) {\n\t\tapi.sendMessage(playerId, "That isn\'t in the shop. Type /shop to see what is.", { color: "orange" })\n\t\treturn\n\t}\n\tif (!spendCoins(playerId, entry[2])) {\n\t\tapi.sendMessage(playerId, entry[0] + " costs " + entry[2] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (giveShopItem(playerId, entry)) {\n\t\tapi.sendMessage(playerId, "You bought " + (entry[1] || 1) + " " + entry[0] + "!", { color: "lime" })\n\t}\n}\n\nfunction onPlayerBoughtShopItem(playerId, categoryKey, itemKey) {\n\tconst entry = categoryKey === "Shop" ? CONFIG.shopItems[Number(itemKey.slice(4)) - 1] : null\n\tif (entry) {\n\t\tgiveShopItem(playerId, entry)\n\t}\n}\n\n// A few times a second: a player who steps onto the sell pad sells once, and again on their next visit\nfunction tick(ms) {\n\tsellPadMs += ms\n\tif (sellPadMs < 250) {\n\t\treturn\n\t}\n\tsellPadMs = 0\n\tconst pad = CONFIG.sellPad\n\tif (!pad || sellList().length === 0) {\n\t\treturn\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst there = isInBox(playerId, [pad[0] - 1, pad[1], pad[2] - 1], [pad[0] + 1, pad[1] + 3, pad[2] + 1])\n\t\tif (there && !onSellPad[playerId]) {\n\t\t\tonSellPad[playerId] = true\n\t\t\tsellAll(playerId)\n\t\t} else if (!there) {\n\t\t\tdelete onSellPad[playerId]\n\t\t}\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete onSellPad[playerId]\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\t// The whole command too, so a sellCommand of two words ("sell all") works\n\tconst typed = words.filter((word) => word !== "").join(" ").toLowerCase().replace("/", "")\n\tif (name === "shop") {\n\t\tshowShop(playerId)\n\t\treturn true\n\t}\n\tif (sellList().length > 0 && typed === CONFIG.sellCommand.trim().toLowerCase().replace("/", "")) {\n\t\tsellAll(playerId)\n\t\treturn true\n\t}\n\tif (name === "buy") {\n\t\tbuyFromShop(playerId, words.slice(1).join(" ").trim())\n\t\treturn true\n\t}\n\treturn false\n}',
        changeable: [{
          name: "giveShopItem",
          about: "what a player gets for something they bought (the item, or something else like a speed boost)"
        }, {
          name: "sellAll",
          about: "what selling does: which items are taken, the coins given and what the player is told"
        }],
        setup: "Players need coins to buy anything: give them with addCoins somewhere in your game, or set startCoins. To sell, fill sellPrices, and put a block at sellPad for the sell pad."
      }, {
        name: "killRewards",
        kind: "feature",
        title: "Kill rewards",
        category: "pvp",
        summary: "Coins, score and items for every kill, items and messages for kill streaks, and each player's kills on their sidebar",
        keywords: ["kill reward", "kill rewards", "kill coins", "coins for kills", "money for kills", "reward", "rewards", "kills", "kill", "killstreak", "kill streak", "streak", "streaks", "kill counter", "kill count", "bounty", "pvp"],
        howItPlays: "When a player kills another player they get killCoins and killScore points of score (shown on the leaderboard), and their kills go up on their sidebar. Kills in a row without dying make a streak; a streak in streakAnnounceAt is announced to everyone. Dying ends the streak.",
        settings: [{
          key: "killCoins",
          kind: "number",
          value: "5",
          about: "coins for each kill (0 for none)"
        }, {
          key: "killScore",
          kind: "number",
          value: "1",
          about: "score for each kill, shown on the leaderboard (0 for none)"
        }, {
          key: "streakAnnounceAt",
          kind: "list",
          value: "[3, 5, 10, 15, 20]",
          about: "kill streaks that are told to everyone"
        }, {
          key: "scoreName",
          kind: "string",
          value: '"Kills"',
          about: "what the score is called on the leaderboard"
        }, {
          key: "killItems",
          kind: "list",
          names: "item",
          value: "[]",
          about: 'items every kill gives, as [item, amount], e.g. [["Apple", 1]]'
        }, {
          key: "streakItems",
          kind: "list",
          names: "item",
          value: '[[3, "Apple", 2], [5, "Diamond Sword", 1]]',
          about: "items for reaching a kill streak, as [streak, item, amount]"
        }],
        code: '// Kill rewards: every kill gives coins and score and counts on the killer\'s sidebar. Kills in a row without dying are\n// a streak, and big streaks are told to everyone.\nconst killCounts = {}\nconst killStreaks = {}\n\nfunction onPlayerJoin(playerId) {\n\tkillCounts[playerId] = 0\n\tkillStreaks[playerId] = 0\n\tsetSidebar(playerId, "Kills", 0)\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== killedPlayer) {\n\t\trewardKiller(attackingPlayer, killedPlayer)\n\t}\n}\n\nfunction rewardKiller(attackingPlayer, killedPlayer) {\n\tkillCounts[attackingPlayer] = (killCounts[attackingPlayer] || 0) + 1\n\tkillStreaks[attackingPlayer] = (killStreaks[attackingPlayer] || 0) + 1\n\tsetSidebar(attackingPlayer, "Kills", killCounts[attackingPlayer])\n\tif (CONFIG.killScore > 0) {\n\t\taddScore(attackingPlayer, CONFIG.killScore)\n\t}\n\tif (CONFIG.killCoins > 0) {\n\t\taddCoins(attackingPlayer, CONFIG.killCoins)\n\t\tapi.sendMessage(attackingPlayer, "You beat " + api.getEntityName(killedPlayer) + "! +" + CONFIG.killCoins + " coins", { color: "lime" })\n\t}\n\tif (CONFIG.streakAnnounceAt.includes(killStreaks[attackingPlayer])) {\n\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " is on a " + killStreaks[attackingPlayer] + " kill streak!", { color: "orange" })\n\t}\n\tfor (const [item, amount] of CONFIG.killItems) {\n\t\tapi.giveItem(attackingPlayer, item, amount)\n\t}\n\tfor (const [streak, item, amount] of CONFIG.streakItems) {\n\t\tif (killStreaks[attackingPlayer] === streak) {\n\t\t\tapi.giveItem(attackingPlayer, item, amount)\n\t\t\tapi.sendMessage(attackingPlayer, streak + " kills in a row: you get " + amount + " " + item + "!", { color: "gold" })\n\t\t}\n\t}\n}\n\n// Every death, by a player or not, ends with a respawn request, which ends the streak\nfunction onRespawnRequest(playerId) {\n\tkillStreaks[playerId] = 0\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete killCounts[playerId]\n\tdelete killStreaks[playerId]\n}',
        setup: "Turn PvP on in your world settings so players can fight.",
        changeable: [{
          name: "rewardKiller",
          about: "what a kill gives: coins, score, the message and which streaks are announced"
        }]
      }, {
        name: "progression",
        kind: "feature",
        title: "XP and levels",
        category: "players",
        summary: "Players earn XP (and coins for mobs) for kills, mobs, mining and time played, level up (each level needs more XP) and get a rank like [Pro] before their name in chat; /stats shows level, XP, kills and deaths",
        keywords: ["xp", "exp", "experience", "level up", "levelup", "leveling", "levelling", "lvl", "progression", "rank", "ranks", "ranked", "rank up", "rankup", "chat tag", "chat tags", "tag in chat", "rank tag", "prefix", "bronze silver gold", "stats", "statistics", "kills and deaths", "deaths", "kd", "playtime", "play time", "mob kills", "mob coins", "mob kill coins", "coins for mobs", "coins for killing mobs", "mob rewards"],
        howItPlays: "Players get XP: xpPerKill for beating a player, xpPerMobKill for a mob (and coinsPerMobKill coins on top), xpPerBlockBroken for each block they break and xpPerMinutePlayed each minute. Level 1 needs levelXpBase XP to level up, and each level after needs levelXpGrowth more. A level-up shows big on the player's screen, is told to everyone and gives levelUpCoins coins. Each player's rank is the last of ranks their level has reached: it shows before their name in chat ([Pro] Alice), under their name tag and on their sidebar with their level and XP. /stats shows level, XP to the next level, kills and deaths. Other code can call addXp(playerId, amount) to give XP (for a win, a quest) and getLevel(playerId) to read a level (e.g. to lock a door until level 5).",
        settings: [{
          key: "xpPerKill",
          kind: "number",
          value: "20",
          about: "XP for beating another player (0: none)"
        }, {
          key: "xpPerMobKill",
          kind: "number",
          value: "10",
          about: "XP for killing a mob (0: none)"
        }, {
          key: "coinsPerMobKill",
          kind: "number",
          value: "0",
          about: "coins for killing a mob, on top of its XP (0: none)"
        }, {
          key: "xpPerBlockBroken",
          kind: "number",
          value: "1",
          about: "XP for each block a player breaks (0: none)"
        }, {
          key: "xpPerMinutePlayed",
          kind: "number",
          value: "5",
          about: "XP for every minute a player is in the world (0: none)"
        }, {
          key: "levelXpBase",
          kind: "number",
          value: "100",
          about: "XP needed to go from level 1 to level 2"
        }, {
          key: "levelXpGrowth",
          kind: "number",
          value: "50",
          about: "how much more XP each level after that needs (0: every level needs the same)"
        }, {
          key: "levelUpCoins",
          kind: "number",
          value: "25",
          about: "coins for each level up (0: none)"
        }, {
          key: "ranks",
          kind: "list",
          value: '[["Newbie", 1, "white"], ["Pro", 5, "lime"], ["Expert", 10, "aqua"], ["Legend", 20, "gold"]]',
          about: "ranks as [name, level it starts at, colour], lowest first; the rank shows before the player's name in chat"
        }, {
          key: "saveProgress",
          kind: "boolean",
          value: "true",
          about: "true: level, XP, kills and deaths are kept after a player leaves"
        }],
        code: '// XP and levels: players earn XP for kills, mobs, mining and playing. Enough XP levels them up (each level needs more),\n// and their level gives them a rank, shown before their name in chat and on their sidebar. /stats shows their stats.\n// Other code can give XP with addXp(playerId, amount) and read a level with getLevel(playerId).\nconst progress = {}\n\nfunction onPlayerJoin(playerId) {\n\tconst load = (key, fallback) => (CONFIG.saveProgress ? Number(getSaved(playerId, key, fallback)) : fallback)\n\tprogress[playerId] = {\n\t\tlevel: Math.max(1, load("progressLevel", 1)),\n\t\txp: load("progressXp", 0),\n\t\tkills: load("progressKills", 0),\n\t\tdeaths: load("progressDeaths", 0),\n\t\tplayMs: 0,\n\t\tshownLevel: 0,\n\t}\n\tshowLevelProgress(playerId)\n}\n\nfunction xpNeeded(level) {\n\treturn Math.max(1, CONFIG.levelXpBase + CONFIG.levelXpGrowth * (level - 1))\n}\n\n// The highest rank the level has reached, as [name, level, colour], or null\nfunction rankFor(level) {\n\tlet best = null\n\tfor (const rank of CONFIG.ranks) {\n\t\tif (level >= rank[1] && (best === null || rank[1] >= best[1])) {\n\t\t\tbest = rank\n\t\t}\n\t}\n\treturn best\n}\n\nfunction getLevel(playerId) {\n\treturn progress[playerId] ? progress[playerId].level : 0\n}\n\n// note is optional text shown after the XP, like "+3 coins"\nfunction addXp(playerId, amount, note) {\n\tconst stats = progress[playerId]\n\tif (!stats || !(amount > 0)) {\n\t\treturn\n\t}\n\tstats.xp += amount\n\tapi.sendFlyingMiddleMessage(playerId, "+" + amount + " XP" + (note ? ", " + note : ""), 1)\n\twhile (stats.xp >= xpNeeded(stats.level)) {\n\t\tstats.xp -= xpNeeded(stats.level)\n\t\tstats.level++\n\t\tlevelUp(playerId, stats.level)\n\t}\n\tstoreProgress(playerId)\n\tshowLevelProgress(playerId)\n}\n\nfunction levelUp(playerId, level) {\n\tconst name = api.getEntityName(playerId)\n\tapi.queueMiddleTextUpper(playerId, "Level " + level + "!", 3000)\n\tapi.broadcastMessage(name + " reached level " + level + "!", { color: "gold" })\n\tif (CONFIG.levelUpCoins > 0) {\n\t\taddCoins(playerId, CONFIG.levelUpCoins)\n\t\tapi.sendMessage(playerId, "Level up reward: +" + CONFIG.levelUpCoins + " coins!", { color: "lime" })\n\t}\n\tconst rank = rankFor(level)\n\tif (rank && rank[1] === level) {\n\t\tapi.broadcastMessage(name + " is now a " + rank[0] + "!", { color: rank[2] })\n\t}\n}\n\nfunction storeProgress(playerId) {\n\tconst stats = progress[playerId]\n\tif (CONFIG.saveProgress && stats) {\n\t\tsetSaved(playerId, "progressLevel", stats.level)\n\t\tsetSaved(playerId, "progressXp", stats.xp)\n\t\tsetSaved(playerId, "progressKills", stats.kills)\n\t\tsetSaved(playerId, "progressDeaths", stats.deaths)\n\t}\n}\n\nfunction showLevelProgress(playerId) {\n\tconst stats = progress[playerId]\n\tconst rank = rankFor(stats.level)\n\tsetSidebar(playerId, "Level", stats.level)\n\tsetSidebar(playerId, "XP", stats.xp + "/" + xpNeeded(stats.level))\n\tsetSidebar(playerId, "Rank", rank ? rank[0] : "-")\n\t// The tag under their name changes only with their level\n\tif (stats.shownLevel !== stats.level) {\n\t\tstats.shownLevel = stats.level\n\t\tconst tag = (rank ? "[" + rank[0] + "] " : "") + "Level " + stats.level\n\t\tapi.setTargetedPlayerSettingForEveryone(playerId, "nameTagInfo", { subtitle: [{ str: tag, style: { color: rank ? rank[2] : "white" } }] }, true)\n\t}\n}\n\n// The rank goes before the player\'s name in chat: [Pro] Alice: hi\nfunction onPlayerChat(playerId, chatMessage) {\n\tconst rank = progress[playerId] ? rankFor(progress[playerId].level) : null\n\tif (rank) {\n\t\treturn [[{ str: "[" + rank[0] + "]", style: { color: rank[2] } }]]\n\t}\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer) {\n\tif (attackingPlayer !== killedPlayer && progress[attackingPlayer]) {\n\t\tprogress[attackingPlayer].kills++\n\t\tstoreProgress(attackingPlayer)\n\t\taddXp(attackingPlayer, CONFIG.xpPerKill)\n\t}\n}\n\nfunction onPlayerKilledMob(playerId, mobId, damageDealt, withItem) {\n\tconst coins = progress[playerId] && CONFIG.coinsPerMobKill > 0 ? CONFIG.coinsPerMobKill : 0\n\tif (coins > 0) {\n\t\taddCoins(playerId, coins)\n\t\tif (!(CONFIG.xpPerMobKill > 0)) {\n\t\t\tapi.sendFlyingMiddleMessage(playerId, "+" + coins + " coins", 1)\n\t\t}\n\t}\n\taddXp(playerId, CONFIG.xpPerMobKill, coins > 0 ? "+" + coins + " coins" : "")\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (toBlock === "Air" && fromBlock !== "Air") {\n\t\taddXp(playerId, CONFIG.xpPerBlockBroken)\n\t}\n}\n\n// Every death ends with a respawn request\nfunction onRespawnRequest(playerId) {\n\tif (progress[playerId]) {\n\t\tprogress[playerId].deaths++\n\t\tstoreProgress(playerId)\n\t}\n}\n\nfunction tick(ms) {\n\tif (CONFIG.xpPerMinutePlayed <= 0) {\n\t\treturn\n\t}\n\tfor (const playerId of Object.keys(progress)) {\n\t\tprogress[playerId].playMs += ms\n\t\tif (progress[playerId].playMs >= 60000) {\n\t\t\tprogress[playerId].playMs -= 60000\n\t\t\taddXp(playerId, CONFIG.xpPerMinutePlayed)\n\t\t}\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst word = command.trim().toLowerCase()\n\tconst stats = progress[playerId]\n\tif ((word !== "stats" && word !== "level" && word !== "xp") || !stats) {\n\t\treturn false\n\t}\n\tconst rank = rankFor(stats.level)\n\tconst needed = xpNeeded(stats.level)\n\tapi.sendMessage(\n\t\tplayerId,\n\t\t"Level " + stats.level + (rank ? " (" + rank[0] + ")" : "") + "\\nXP: " + stats.xp + "/" + needed + ", " + (needed - stats.xp) + " to the next level\\nKills: " + stats.kills + "  Deaths: " + stats.deaths,\n\t\t{ color: "aqua" },\n\t)\n\treturn true\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete progress[playerId]\n}',
        changeable: [{
          name: "levelUp",
          about: "what a level-up gives and says: coins, items, a message, a rank announcement"
        }, {
          name: "xpNeeded",
          about: "how much XP a level needs, e.g. doubling every level"
        }],
        setup: "Nothing to build. Turn PvP on for XP from kills, and allow mobs for XP and coins from mobs."
      }, {
        name: "quests",
        kind: "feature",
        title: "Quests",
        category: "players",
        summary: "Quests like kill 5 mobs, mine 10 logs, place 25 blocks or walk 100 blocks, each giving coins and items when done, one at a time or all at once, on the sidebar, listed with /quests and saved; can reset every day",
        keywords: ["quest", "quests", "questing", "questline", "quest line", "quest system", "qwest", "qwests", "quets", "mission", "missions", "mision", "misions", "missons", "daily quest", "daily quests", "daily task", "daily tasks", "daily mission", "daily missions", "daily challenge", "daily challenges", "achievement", "achievements", "achievment", "achievments", "acheivement", "acheivements", "objective", "objectives"],
        howItPlays: 'Every quest in quests has a goal and a count: kill mobs, kill players, mine blocks, place blocks, collect coins (coins earned any way but from quests) or walk (count is blocks walked). A mob or block named in the goal ("kill zombies", "mine coal") or given as mob or block (block: "Log") counts only mobs or blocks with that in their name. With questsInOrder one quest is on at a time and the next starts when it is done; otherwise every quest is on at once. The quests on show on the player\'s sidebar with their progress (Lumberjack: Mine Log 3/10). Finishing one shows Quest complete!, gives its coins and items once and tells the next quest. /quests lists every quest with its progress and reward. Progress is saved (saveQuests), and with resetDaily every quest starts again each day. Other code adds to a goal of its own with addQuestProgress(playerId, goal, amount): a quest { goal: "win rounds", count: 3 } goes up with addQuestProgress(playerId, "win rounds", 1). isQuestDone(playerId, name) says whether a player has finished a quest (e.g. to open a door).',
        settings: [{
          key: "quests",
          kind: "list",
          names: "item",
          value: '[{ name: "First Steps", goal: "walk", count: 100, coins: 10 }, { name: "Lumberjack", goal: "mine blocks", block: "Log", count: 10, coins: 20 }, { name: "Builder", goal: "place blocks", count: 25, coins: 25 }, { name: "Miner", goal: "mine blocks", block: "Ore", count: 10, coins: 40, items: [["Iron Pickaxe", 1]] }, { name: "Monster Hunter", goal: "kill mobs", count: 5, coins: 50, items: [["Iron Sword", 1]] }]',
          about: 'each quest as { name, goal, count, coins, items }, every name different. goal: "kill mobs", "kill players", "mine blocks", "place blocks", "collect coins", "walk" (count in blocks), or words of your own counted with addQuestProgress. A mob or block in the goal ("kill zombies", "mine coal") or as mob: "Cow" / block: "Log" counts only those with it in their name. coins and items ([["Iron Sword", 1]]) are the reward; text: "Win 3 rounds" changes what it says'
        }, {
          key: "questsInOrder",
          kind: "boolean",
          value: "true",
          about: "true: one quest at a time, the next starting when it is done; false: every quest at once"
        }, {
          key: "resetDaily",
          kind: "boolean",
          value: "false",
          about: "true: every quest starts again each day (daily quests)"
        }, {
          key: "saveQuests",
          kind: "boolean",
          value: "true",
          about: "true: quest progress is kept after a player leaves"
        }, {
          key: "announceQuests",
          kind: "boolean",
          value: "true",
          about: "true: everyone is told when a player finishes a quest"
        }],
        code: '// Quests: players finish quests (kill mobs, mine or place blocks, earn coins, walk) for coins and items. With\n// questsInOrder one quest is on at a time; otherwise all are. The quests on show on the sidebar, /quests lists them all,\n// and progress is saved. Other code counts a goal of its own with addQuestProgress(playerId, "win rounds", 1).\nconst questPlayers = {}\nlet questMs = 0\n\nfunction onPlayerJoin(playerId) {\n\tconst state = { progress: {}, day: questDay(), lines: {}, walkFrom: null, walked: 0, coinsSeen: null }\n\tif (CONFIG.saveQuests) {\n\t\ttry {\n\t\t\tconst saved = JSON.parse(String(getSaved(playerId, "questProgress", "{}")))\n\t\t\tstate.progress = saved.progress || {}\n\t\t\tstate.day = saved.day || state.day\n\t\t} catch (e) {\n\t\t\tstate.progress = {}\n\t\t}\n\t}\n\tquestPlayers[playerId] = state\n\tcheckQuestDay(playerId)\n\tshowQuests(playerId)\n\tconst next = activeQuests(playerId)[0]\n\tif (next) {\n\t\tapi.sendMessage(playerId, "Quest: " + questName(next) + ", " + questText(next) + " " + questProgress(playerId, next) + ". Type /quests to see them all.", { color: "aqua" })\n\t}\n}\n\n// A goal as [what it counts, the mob or block it names]: "Kill Mobs" is ["kill mob", ""], "break blocks" is\n// ["mine block", ""], "kill 10 cows" is ["kill mob", "cow"], "mine some coal" is ["mine block", "coal"] and "mine stone\n// blocks" is ["mine block", "stone"]\nfunction questGoal(goal) {\n\tconst words = String(goal || "")\n\t\t.toLowerCase()\n\t\t.split(" ")\n\t\t.filter((word) => word !== "" && isNaN(Number(word)) && !["a", "an", "the", "some", "any", "other", "enemy", "enemies", "hostile"].includes(word))\n\t\t.map(questWord)\n\t// "stone blocks" names stone: what is counted is said by the verb\n\tif (words.length > 2 && ["block", "mob", "monster"].includes(words[words.length - 1])) {\n\t\twords.pop()\n\t}\n\tconst text = words.join(" ")\n\tconst same = { kill: "kill mob", "kill mob": "kill mob", "kill monster": "kill mob", "kill player": "kill player", "mine block": "mine block", mine: "mine block", "place block": "place block", place: "place block", "collect coin": "collect coin", walk: "walk", "walk block": "walk", walking: "walk" }\n\tif (same[text]) {\n\t\treturn [same[text], ""]\n\t}\n\tconst verbs = { kill: "kill mob", mine: "mine block", place: "place block" }\n\treturn words.length > 1 && verbs[words[0]] ? [verbs[words[0]], words.slice(1).join(" ")] : [text, ""]\n}\n\n// A goal\'s word, one of many as one (names are found by what they contain) and other verbs as the counted ones:\n// "wolves" and "mummies" keep only "wol" and "mumm" (Wolf, Mummy), "torches" is "torch", "leaves" is "leave" (Oak\n// Leaves), "slay" is "kill" and "chop" is "mine"\nfunction questWord(word) {\n\tconst verbs = { beat: "kill", defeat: "kill", slay: "kill", break: "mine", chop: "mine", dig: "mine", build: "place", earn: "collect", get: "collect", money: "coin", travel: "walk" }\n\tif (verbs[word]) {\n\t\treturn verbs[word]\n\t}\n\tif (word === "leaves") {\n\t\treturn "leave"\n\t}\n\tif (word.length > 4 && /(?:ves|ies)$/.test(word)) {\n\t\treturn word.slice(0, -3)\n\t}\n\tif (word.length > 4 && /(?:ches|shes|xes|sses)$/.test(word)) {\n\t\treturn word.slice(0, -2)\n\t}\n\treturn word.length > 3 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word\n}\n\n// A quest\'s name, which its progress is kept under: what it asks if it has none\nfunction questName(quest) {\n\treturn String(quest.name || questText(quest))\n}\n\nfunction questCount(quest) {\n\treturn Math.max(1, Math.floor(Number(quest.count) || 1))\n}\n\nfunction questProgress(playerId, quest) {\n\treturn (questPlayers[playerId].progress[questName(quest)] || 0) + "/" + questCount(quest)\n}\n\n// What the quest asks, for the sidebar and /quests: "Mine Log", "Kill mobs"\nfunction questText(quest) {\n\tif (quest.text) {\n\t\treturn quest.text\n\t}\n\tconst [kind, named] = questGoal(quest.goal)\n\tconst what = quest.mob || quest.block\n\tconst texts = { "kill mob": "Kill " + (what || "mobs"), "kill player": "Beat players", "mine block": "Mine " + (what || "blocks"), "place block": "Place " + (what || "blocks"), "collect coin": "Earn coins", walk: "Walk" }\n\tconst text = !what && named ? String(quest.goal) : texts[kind] || String(quest.goal)\n\treturn text.charAt(0).toUpperCase() + text.slice(1)\n}\n\n// The reward as [item, amount] pairs; one pair on its own works too\nfunction questItems(quest) {\n\tconst items = quest.items || []\n\treturn typeof items[0] === "string" ? [items] : items\n}\n\nfunction questRewardText(quest) {\n\tconst parts = quest.coins > 0 ? [quest.coins + " coins"] : []\n\tfor (const [item, amount] of questItems(quest)) {\n\t\tparts.push(amount + " " + item)\n\t}\n\treturn parts.join(", ")\n}\n\nfunction isQuestDone(playerId, name) {\n\tconst quest = CONFIG.quests.find((other) => questName(other) === name)\n\tconst state = questPlayers[playerId]\n\treturn Boolean(quest && state && (state.progress[name] || 0) >= questCount(quest))\n}\n\n// The quests a player is doing now: the first one not done in order, or every one not done\nfunction activeQuests(playerId) {\n\tconst open = CONFIG.quests.filter((quest) => !isQuestDone(playerId, questName(quest)))\n\treturn CONFIG.questsInOrder ? open.slice(0, 1) : open\n}\n\n// Adds to every quest on with this goal. what is the mob or block, which has to have the quest\'s mob or block (or the\n// one its goal names) in its name\nfunction addQuestProgress(playerId, goal, amount, what) {\n\tconst state = questPlayers[playerId]\n\tconst add = amount === undefined ? 1 : Number(amount)\n\tif (!state || !(add > 0)) {\n\t\treturn\n\t}\n\tcheckQuestDay(playerId)\n\tconst [kind, named] = questGoal(goal)\n\tconst thing = String(what || named).toLowerCase()\n\tlet changed = false\n\tfor (const quest of activeQuests(playerId)) {\n\t\tconst [questKind, questNamed] = questGoal(quest.goal)\n\t\tif (questKind !== kind || !thing.includes(String(quest.mob || quest.block || questNamed).toLowerCase())) {\n\t\t\tcontinue\n\t\t}\n\t\tconst name = questName(quest)\n\t\tstate.progress[name] = Math.min(questCount(quest), (state.progress[name] || 0) + add)\n\t\tchanged = true\n\t\tif (state.progress[name] >= questCount(quest)) {\n\t\t\tfinishQuest(playerId, quest)\n\t\t}\n\t}\n\tif (changed) {\n\t\tstoreQuests(playerId)\n\t\tshowQuests(playerId)\n\t}\n}\n\nfunction finishQuest(playerId, quest) {\n\tconst state = questPlayers[playerId]\n\tapi.queueMiddleTextUpper(playerId, "Quest complete!", 3000)\n\t// Coins a quest gives don\'t count for an "earn coins" quest\n\tconst before = state.coinsSeen === null ? 0 : getCoins(playerId)\n\tgiveQuestReward(playerId, quest)\n\tif (state.coinsSeen !== null) {\n\t\tstate.coinsSeen += getCoins(playerId) - before\n\t}\n\tif (CONFIG.announceQuests) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " finished the quest " + questName(quest) + "!", { color: "gold" })\n\t}\n\tconst next = activeQuests(playerId)[0]\n\tif (!next) {\n\t\tapi.sendMessage(playerId, "You finished every quest!" + (CONFIG.resetDaily ? " New ones tomorrow." : ""), { color: "gold" })\n\t} else if (CONFIG.questsInOrder) {\n\t\tapi.sendMessage(playerId, "Next quest: " + questName(next) + ", " + questText(next) + " " + questProgress(playerId, next), { color: "aqua" })\n\t}\n}\n\nfunction giveQuestReward(playerId, quest) {\n\tif (quest.coins > 0) {\n\t\taddCoins(playerId, quest.coins)\n\t}\n\tfor (const [item, amount] of questItems(quest)) {\n\t\tapi.giveItem(playerId, item, amount)\n\t}\n\tconst reward = questRewardText(quest)\n\tapi.sendMessage(playerId, "Quest done: " + questName(quest) + "!" + (reward ? " You get " + reward + "." : ""), { color: "lime" })\n}\n\nfunction storeQuests(playerId) {\n\tconst state = questPlayers[playerId]\n\tif (CONFIG.saveQuests && state) {\n\t\tsetSaved(playerId, "questProgress", JSON.stringify({ day: state.day, progress: state.progress }))\n\t}\n}\n\n// One sidebar line per quest on (Lumberjack: Mine Log 3/10), and "Quests: all done!" at the end\nfunction showQuests(playerId) {\n\tconst state = questPlayers[playerId]\n\tconst on = activeQuests(playerId)\n\tconst lines = {}\n\tfor (const quest of on) {\n\t\tlines[questName(quest)] = questText(quest) + " " + questProgress(playerId, quest)\n\t}\n\tif (on.length === 0 && CONFIG.quests.length > 0) {\n\t\tlines.Quests = "all done!"\n\t}\n\tfor (const label of Object.keys(state.lines)) {\n\t\tif (!(label in lines)) {\n\t\t\tremoveSidebar(playerId, label)\n\t\t}\n\t}\n\tfor (const label of Object.keys(lines)) {\n\t\tif (state.lines[label] !== lines[label]) {\n\t\t\tsetSidebar(playerId, label, lines[label])\n\t\t}\n\t}\n\tstate.lines = lines\n}\n\nfunction questDay() {\n\treturn Math.floor(Date.now() / 86400000)\n}\n\n// With resetDaily, a new day starts every quest again. Returns true when it did\nfunction checkQuestDay(playerId) {\n\tconst state = questPlayers[playerId]\n\tif (!CONFIG.resetDaily || !state || state.day === questDay()) {\n\t\treturn false\n\t}\n\tconst hadProgress = Object.keys(state.progress).length > 0\n\tstate.day = questDay()\n\tstate.progress = {}\n\tstoreQuests(playerId)\n\tif (hadProgress) {\n\t\tapi.sendMessage(playerId, "A new day: your quests start again!", { color: "aqua" })\n\t}\n\treturn true\n}\n\nfunction onPlayerKilledMob(playerId, mobId, damageDealt, withItem) {\n\taddQuestProgress(playerId, "kill mobs", 1, api.getEntityType(mobId))\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== killedPlayer) {\n\t\taddQuestProgress(attackingPlayer, "kill players", 1)\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (toBlock === "Air" && fromBlock !== "Air") {\n\t\taddQuestProgress(playerId, "mine blocks", 1, fromBlock)\n\t} else if (toBlock !== "Air" && toBlock !== fromBlock) {\n\t\taddQuestProgress(playerId, "place blocks", 1, toBlock)\n\t}\n}\n\n// Once a second: a new day, blocks walked and coins earned\nfunction tick(ms) {\n\tquestMs += ms\n\tif (questMs < 1000) {\n\t\treturn\n\t}\n\tquestMs = 0\n\tconst walking = CONFIG.quests.some((quest) => questGoal(quest.goal)[0] === "walk")\n\tconst earning = CONFIG.quests.some((quest) => questGoal(quest.goal)[0] === "collect coin")\n\tfor (const playerId of Object.keys(questPlayers)) {\n\t\tconst state = questPlayers[playerId]\n\t\tif (checkQuestDay(playerId)) {\n\t\t\tshowQuests(playerId)\n\t\t}\n\t\tif (walking) {\n\t\t\tconst [x, y, z] = api.getPosition(playerId)\n\t\t\tconst moved = state.walkFrom ? Math.hypot(x - state.walkFrom[0], z - state.walkFrom[1]) : 0\n\t\t\tstate.walkFrom = [x, z]\n\t\t\t// More than 20 blocks in a second is a teleport, not a walk\n\t\t\tstate.walked += moved < 20 ? moved : 0\n\t\t\tif (state.walked >= 1) {\n\t\t\t\tconst blocks = Math.floor(state.walked)\n\t\t\t\tstate.walked -= blocks\n\t\t\t\taddQuestProgress(playerId, "walk", blocks)\n\t\t\t}\n\t\t}\n\t\tif (earning) {\n\t\t\tconst coins = getCoins(playerId)\n\t\t\tconst earned = state.coinsSeen === null ? 0 : coins - state.coinsSeen\n\t\t\tstate.coinsSeen = coins\n\t\t\tif (earned > 0) {\n\t\t\t\taddQuestProgress(playerId, "collect coins", earned)\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst word = command.trim().toLowerCase()\n\tconst state = questPlayers[playerId]\n\tif ((word !== "quests" && word !== "quest" && word !== "missions") || !state) {\n\t\treturn false\n\t}\n\tconst on = activeQuests(playerId)\n\tconst done = CONFIG.quests.filter((quest) => isQuestDone(playerId, questName(quest))).length\n\tconst lines = ["Quests (" + done + "/" + CONFIG.quests.length + " done):"]\n\tfor (const quest of CONFIG.quests) {\n\t\tconst status = isQuestDone(playerId, questName(quest)) ? "Done" : on.includes(quest) ? "Now" : "Later"\n\t\tconst reward = questRewardText(quest)\n\t\tlines.push(status + " - " + questName(quest) + ": " + questText(quest) + " " + questProgress(playerId, quest) + (reward ? " (" + reward + ")" : ""))\n\t}\n\tapi.sendMessage(playerId, lines.join("\\n"), { color: "aqua" })\n\treturn true\n}\n\nfunction onPlayerLeave(playerId) {\n\tstoreQuests(playerId)\n\tdelete questPlayers[playerId]\n}',
        changeable: [{
          name: "giveQuestReward",
          about: "what finishing a quest gives and says: its coins and items, or something else (XP, a kit, a rank)"
        }, {
          name: "activeQuests",
          about: "which quests a player is doing now, e.g. unlocking quests by level"
        }],
        setup: "Nothing to build. Allow mobs in your world settings for kill-mob quests and turn PvP on for kill-player quests."
      }, {
        name: "pets",
        kind: "feature",
        title: "Pets and eggs",
        category: "economy",
        summary: "Hatch eggs bought with coins for random pets, rare ones less often; equipped pets follow you and boost every coin you earn, and are saved",
        keywords: ["pet", "pets", "pet sim", "pet simulator", "pet simulater", "pet sim 99", "pet simulator 99", "egg", "eggs", "hatch", "hatching", "hatch eggs", "egg hatching", "open eggs", "rare pets", "legendary pet", "pet egg", "pet eggs", "equip pets", "pet follows", "pet that follows me", "companion", "companions", "adopt me", "coin boost", "coin multiplier"],
        howItPlays: "Each egg in eggs has a price in coins and pets, each with a chance in percent and a coin boost in percent. Standing by an egg's spot in eggPositions (in the same order as eggs) and typing /hatch buys it and hatches a random pet, the rarer the bigger its name on screen (\"You hatched a Rare Dragon!\"); /hatch and an egg's name or number works for an egg with no spot. /eggs lists the eggs and their pets. A player keeps up to maxPets pets: /pets lists them, /equip 2 and /unequip 2 (or /equip best) choose up to equipSlots to wear, /release 2 lets one go. Equipped pets add their boosts together, and every coin a player earns (through addCoins, from anything in the game) is boosted by them; petBoost(playerId) is that multiplier, for other rewards. With petsFollow on, each equipped pet follows its owner as a petMob with its name above it. With starterPet, every player starts with that pet, equipped. Pets are saved when savePets is on.",
        settings: [{
          key: "eggs",
          kind: "list",
          value: '[["Basic Egg", 50, [["Dog", 60, 10], ["Cat", 30, 20], ["Dragon", 10, 50]]], ["Golden Egg", 500, [["Unicorn", 60, 50], ["Phoenix", 35, 100], ["Galaxy Dragon", 5, 300]]]]',
          about: "the eggs, each [name, price in coins, its pets]; each pet is [name, chance in percent, extra coins it gives in percent]"
        }, {
          key: "eggPositions",
          kind: "list",
          value: "[[5, 10, 0], [-5, 10, 0]]",
          about: "where each egg stands, in the same order as eggs, each [x, y, z]: stand by one and type /hatch ([]: /hatch and the egg's name works anywhere)"
        }, {
          key: "starterPet",
          kind: "list",
          value: "[]",
          about: 'a pet every player gets, equipped and following them, the first time they join, as [name, extra coins it gives in percent], e.g. ["Puppy", 0]; [] for none'
        }, {
          key: "maxPets",
          kind: "number",
          value: "20",
          about: "the most pets a player can keep"
        }, {
          key: "equipSlots",
          kind: "number",
          value: "3",
          about: "how many pets a player can equip at once; only equipped pets boost coins"
        }, {
          key: "petMob",
          kind: "mob",
          value: '"Wildcat"',
          about: "the mob that each equipped pet looks like when it follows its owner"
        }, {
          key: "petsFollow",
          kind: "boolean",
          value: "true",
          about: "true: equipped pets follow their owner around"
        }, {
          key: "savePets",
          kind: "boolean",
          value: "true",
          about: "true: pets are kept after a player leaves"
        }],
        code: '// Pets: buy an egg with coins and hatch a random pet from it; rare pets come out less often. Equipped pets follow you\n// and boost every coin you earn. /hatch by an egg, /eggs, /pets, /equip 1, /unequip 1, /equip best, /release 1.\nconst petLists = {} // each player\'s pets: { name, boost, equipped }\nconst petFollowers = {} // each player\'s following pet mobs\nconst petMobIds = {} // every following pet mob, by mob id\nconst coinsSeen = {} // each player\'s coins last tick, to boost what they earned since\nconst boostOwed = {} // part of a coin each player is owed from boosts\nlet followCheckMs = 0\n\nfunction onPlayerJoin(playerId) {\n\tpetLists[playerId] = loadPets(playerId)\n\tgiveStarterPet(playerId)\n\tcoinsSeen[playerId] = getCoins(playerId)\n\tboostOwed[playerId] = 0\n\trefreshPets(playerId)\n\tapi.sendMessage(playerId, "Hatch eggs for pets that boost your coins! Stand by an egg and type /hatch, or type /eggs.", { color: "aqua" })\n}\n\n// The starterPet, once (each join when pets aren\'t saved, as they\'re gone)\nfunction giveStarterPet(playerId) {\n\t// [name, boost], or a list holding one ([["Dog", 0]])\n\tconst starter = Array.isArray(CONFIG.starterPet[0]) ? CONFIG.starterPet[0] : CONFIG.starterPet\n\tif (starter.length === 0 || petLists[playerId].length > 0 || (CONFIG.savePets && getSaved(playerId, "starterPetGiven", 0) === 1)) {\n\t\treturn\n\t}\n\tpetLists[playerId].push({ name: String(starter[0]), boost: Number(starter[1]) || 0, equipped: true })\n\tif (CONFIG.savePets) {\n\t\tsetSaved(playerId, "starterPetGiven", 1)\n\t}\n\tapi.sendMessage(playerId, "Your " + starter[0] + " follows you! Hatch eggs for more pets.", { color: "lime" })\n}\n\nfunction loadPets(playerId) {\n\tif (!CONFIG.savePets) {\n\t\treturn []\n\t}\n\ttry {\n\t\tconst saved = JSON.parse(String(getSaved(playerId, "pets", "[]")))\n\t\treturn saved.map((pet) => ({ name: String(pet[0]), boost: Number(pet[1]) || 0, equipped: pet[2] === 1 }))\n\t} catch (e) {\n\t\treturn []\n\t}\n}\n\nfunction equippedPets(playerId) {\n\treturn (petLists[playerId] || []).filter((pet) => pet.equipped)\n}\n\n// What a player\'s coins are multiplied by: 1, plus each equipped pet\'s boost (50 is +50%, so 1.5)\nfunction petBoost(playerId) {\n\tlet percent = 0\n\tfor (const pet of equippedPets(playerId)) {\n\t\tpercent += pet.boost\n\t}\n\treturn 1 + percent / 100\n}\n\n// Saves a player\'s pets and shows them: sidebar and following pets\nfunction refreshPets(playerId) {\n\tif (CONFIG.savePets) {\n\t\tsetSaved(playerId, "pets", JSON.stringify(petLists[playerId].map((pet) => [pet.name, pet.boost, pet.equipped ? 1 : 0])))\n\t}\n\tsetSidebar(playerId, "Pets", petLists[playerId].length + "/" + CONFIG.maxPets)\n\tsetSidebar(playerId, "Pet boost", "+" + Math.round((petBoost(playerId) - 1) * 100) + "% coins")\n\tremoveFollowers(playerId)\n\taddFollowers(playerId)\n}\n\n// Each equipped pet follows its owner as a petMob with its name above it\nfunction addFollowers(playerId) {\n\tif (!CONFIG.petsFollow) {\n\t\treturn\n\t}\n\tconst at = api.getPosition(playerId)\n\tfor (const pet of equippedPets(playerId)) {\n\t\tconst mobId = api.attemptSpawnMob(CONFIG.petMob, at[0] + 1, at[1], at[2] + 1, { name: pet.name })\n\t\tif (mobId !== null && mobId !== undefined) {\n\t\t\tpetMobIds[mobId] = playerId\n\t\t\tpetFollowers[playerId].push(mobId)\n\t\t\tapi.setMobAiState(mobId, "following", { targetId: playerId }, { hold: true })\n\t\t}\n\t}\n}\n\nfunction removeFollowers(playerId) {\n\tfor (const mobId of petFollowers[playerId] || []) {\n\t\tdelete petMobIds[mobId]\n\t\ttry {\n\t\t\tapi.despawnMob(mobId)\n\t\t} catch (e) {\n\t\t\t// Already gone\n\t\t}\n\t}\n\tpetFollowers[playerId] = []\n}\n\n// The egg a player asked for by name or number, or the one they stand by\nfunction findEgg(playerId, wanted) {\n\tif (wanted !== "") {\n\t\tconst number = Number(wanted)\n\t\tif (Number.isInteger(number) && number >= 1 && number <= CONFIG.eggs.length) {\n\t\t\treturn CONFIG.eggs[number - 1]\n\t\t}\n\t\tconst name = wanted.toLowerCase()\n\t\treturn CONFIG.eggs.find((egg) => egg[0].toLowerCase() === name || egg[0].toLowerCase() === name + " egg") || null\n\t}\n\tconst index = CONFIG.eggPositions.findIndex((spot, i) => i < CONFIG.eggs.length && isByEgg(playerId, spot))\n\treturn index === -1 ? null : CONFIG.eggs[index]\n}\n\nfunction isByEgg(playerId, spot) {\n\tconst position = api.getPosition(playerId)\n\treturn Math.hypot(position[0] - spot[0] - 0.5, position[2] - spot[2] - 0.5) < 4 && Math.abs(position[1] - spot[1]) < 3\n}\n\nfunction listEggs(playerId) {\n\tconst lines = CONFIG.eggs.map((egg, index) => {\n\t\treturn index + 1 + ". " + egg[0] + " - " + egg[1] + " coins: " + egg[2].map((pet) => pet[0] + " " + pet[1] + "%").join(", ")\n\t})\n\tconst how = CONFIG.eggPositions.length > 0 ? "Stand by an egg and type /hatch." : "Type /hatch and a number, like /hatch 1."\n\tapi.sendMessage(playerId, "Eggs (you have " + getCoins(playerId) + " coins):\\n" + lines.join("\\n") + "\\n" + how, { color: "yellow" })\n}\n\nfunction hatchEgg(playerId, wanted) {\n\tconst egg = findEgg(playerId, wanted)\n\tif (egg === null) {\n\t\tlistEggs(playerId)\n\t\treturn\n\t}\n\tconst spot = CONFIG.eggPositions[CONFIG.eggs.indexOf(egg)]\n\tif (spot && !isByEgg(playerId, spot)) {\n\t\tapi.sendMessage(playerId, "Go to the " + egg[0] + " to hatch it!", { color: "orange" })\n\t} else if (petLists[playerId].length >= CONFIG.maxPets) {\n\t\tapi.sendMessage(playerId, "You have " + CONFIG.maxPets + " pets, the most you can keep. Type /release and a number to let one go.", { color: "orange" })\n\t} else if (!spendCoins(playerId, egg[1])) {\n\t\tapi.sendMessage(playerId, "The " + egg[0] + " costs " + egg[1] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t} else {\n\t\t// Spent, not lost: the tick boosts only coins earned\n\t\tcoinsSeen[playerId] -= egg[1]\n\t\tconst pet = rollPet(egg)\n\t\tconst hatched = { name: pet[0], boost: pet[2], equipped: equippedPets(playerId).length < CONFIG.equipSlots }\n\t\tpetLists[playerId].push(hatched)\n\t\trefreshPets(playerId)\n\t\tpetHatched(playerId, hatched, rarityOf(egg, pet))\n\t}\n}\n\n// A random pet of an egg: one with chance 10 comes out 10 times in 100\nfunction rollPet(egg) {\n\tlet total = 0\n\tfor (const pet of egg[2]) {\n\t\ttotal += pet[1]\n\t}\n\tlet roll = Math.random() * total\n\tfor (const pet of egg[2]) {\n\t\troll -= pet[1]\n\t\tif (roll < 0) {\n\t\t\treturn pet\n\t\t}\n\t}\n\treturn egg[2][egg[2].length - 1]\n}\n\nfunction rarityOf(egg, pet) {\n\tlet total = 0\n\tfor (const other of egg[2]) {\n\t\ttotal += other[1]\n\t}\n\tconst percent = (pet[1] / total) * 100\n\treturn percent >= 40 ? "Common" : percent >= 15 ? "Rare" : percent >= 5 ? "Epic" : "Legendary"\n}\n\nfunction petHatched(playerId, pet, rarity) {\n\tconst text = "You hatched " + (rarity === "Epic" ? "an " : "a ") + rarity + " " + pet.name + "!"\n\tapi.setClientOption(playerId, "middleTextUpper", text)\n\trunLater(3, () => {\n\t\tif (api.getPlayerIds().includes(playerId)) {\n\t\t\tapi.setClientOption(playerId, "middleTextUpper", "")\n\t\t}\n\t})\n\tapi.sendMessage(playerId, text + " It gives +" + pet.boost + "% coins." + (pet.equipped ? " It\'s equipped!" : " Type /pets to equip it."), { color: "lime" })\n\tif (rarity === "Legendary") {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " hatched a Legendary " + pet.name + "!", { color: "gold" })\n\t}\n}\n\nfunction listPets(playerId) {\n\tconst pets = petLists[playerId]\n\tif (pets.length === 0) {\n\t\tapi.sendMessage(playerId, "You have no pets yet. Stand by an egg and type /hatch, or type /eggs.", { color: "yellow" })\n\t\treturn\n\t}\n\tconst lines = pets.map((pet, index) => index + 1 + ". " + pet.name + " +" + pet.boost + "%" + (pet.equipped ? " (equipped)" : ""))\n\tapi.sendMessage(playerId, "Your pets (" + pets.length + "/" + CONFIG.maxPets + "), +" + Math.round((petBoost(playerId) - 1) * 100) + "% coins:\\n" + lines.join("\\n") + "\\nType /equip 1, /unequip 1, /equip best or /release 1", { color: "yellow" })\n}\n\nfunction choosePet(playerId, action, wanted) {\n\tconst pets = petLists[playerId]\n\tif (action === "equip" && wanted === "best") {\n\t\tconst best = pets.slice().sort((a, b) => b.boost - a.boost).slice(0, CONFIG.equipSlots)\n\t\tpets.forEach((pet) => (pet.equipped = best.includes(pet)))\n\t\trefreshPets(playerId)\n\t\tapi.sendMessage(playerId, "Your best pets are equipped: +" + Math.round((petBoost(playerId) - 1) * 100) + "% coins!", { color: "lime" })\n\t\treturn\n\t}\n\tconst pet = pets[Number(wanted) - 1]\n\tif (!pet) {\n\t\tapi.sendMessage(playerId, "Type /" + action + " and a pet\'s number from /pets, like /" + action + " 1", { color: "orange" })\n\t\treturn\n\t}\n\tif (action === "equip" && !pet.equipped && equippedPets(playerId).length >= CONFIG.equipSlots) {\n\t\tapi.sendMessage(playerId, "You can equip " + CONFIG.equipSlots + " pets at once. Type /unequip and a number first.", { color: "orange" })\n\t\treturn\n\t}\n\tif (action === "release") {\n\t\tpets.splice(pets.indexOf(pet), 1)\n\t} else {\n\t\tpet.equipped = action === "equip"\n\t}\n\trefreshPets(playerId)\n\tconst done = action === "release" ? "let go" : action === "equip" ? "equipped" : "unequipped"\n\tapi.sendMessage(playerId, pet.name + " " + done + "! Your pets give +" + Math.round((petBoost(playerId) - 1) * 100) + "% coins.", { color: "lime" })\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tconst rest = words.slice(1).join(" ").trim().toLowerCase()\n\tif (name === "hatch") {\n\t\thatchEgg(playerId, rest)\n\t} else if (name === "eggs") {\n\t\tlistEggs(playerId)\n\t} else if (name === "pets") {\n\t\tlistPets(playerId)\n\t} else if (name === "equip" || name === "unequip" || name === "release") {\n\t\tchoosePet(playerId, name, rest)\n\t} else {\n\t\treturn false\n\t}\n\treturn true\n}\n\n// Every coin a player earns is boosted by their equipped pets, whatever gave it; a part of a coin waits for the next\nfunction tick(ms) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!petLists[playerId]) {\n\t\t\tcontinue\n\t\t}\n\t\tconst coins = getCoins(playerId)\n\t\tif (coins > coinsSeen[playerId] && petBoost(playerId) > 1) {\n\t\t\tboostOwed[playerId] += (coins - coinsSeen[playerId]) * (petBoost(playerId) - 1)\n\t\t\t// A tiny bit more, as 1.2 - 1 is 0.19999 in JavaScript\n\t\t\tconst extra = Math.floor(boostOwed[playerId] + 0.000001)\n\t\t\tboostOwed[playerId] -= extra\n\t\t\tif (extra > 0) {\n\t\t\t\t// Given as it is: addCoins would count it again during double coins, which the coins seen already did\n\t\t\t\tapi.giveCurrencyAmount(playerId, "coins", extra)\n\t\t\t}\n\t\t}\n\t\t// The boost itself isn\'t boosted again: the coins as they are now, double coins and all\n\t\tcoinsSeen[playerId] = getCoins(playerId)\n\t}\n\t// Every 2 seconds missing pets are put back (one that couldn\'t spawn where its owner was) and told again to follow\n\tfollowCheckMs += ms\n\tif (followCheckMs >= 2000) {\n\t\tfollowCheckMs = 0\n\t\tfor (const playerId of Object.keys(petLists)) {\n\t\t\tif (CONFIG.petsFollow && petFollowers[playerId].length < equippedPets(playerId).length) {\n\t\t\t\tremoveFollowers(playerId)\n\t\t\t\taddFollowers(playerId)\n\t\t\t}\n\t\t}\n\t\tfor (const mobId of Object.keys(petMobIds)) {\n\t\t\tif (api.getMobAiState(mobId).state !== "following") {\n\t\t\t\tapi.setMobAiState(mobId, "following", { targetId: petMobIds[mobId] }, { hold: true })\n\t\t\t}\n\t\t}\n\t}\n}\n\n// Pets can\'t be hurt, and the world doesn\'t take them away\nfunction onPlayerDamagingMob(playerId, mobId) {\n\tif (petMobIds[mobId]) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onWorldAttemptDespawnMob(mobId) {\n\tif (petMobIds[mobId]) {\n\t\treturn "preventDespawn"\n\t}\n}\n\nfunction onMobDespawned(mobId) {\n\tconst owner = petMobIds[mobId]\n\tif (owner && petFollowers[owner]) {\n\t\tpetFollowers[owner] = petFollowers[owner].filter((id) => id !== mobId)\n\t}\n\tdelete petMobIds[mobId]\n}\n\nfunction onPlayerLeave(playerId) {\n\tremoveFollowers(playerId)\n\tdelete petLists[playerId]\n\tdelete petFollowers[playerId]\n\tdelete coinsSeen[playerId]\n\tdelete boostOwed[playerId]\n}',
        changeable: [{
          name: "petHatched",
          about: "what happens when a player hatches a pet: the big text, the message, telling everyone about a Legendary one"
        }, {
          name: "petBoost",
          about: "what a player's coins are multiplied by, from their equipped pets (1 is no boost)"
        }, {
          name: "rarityOf",
          about: "which rarity a pet is called (Common, Rare, Epic, Legendary) from its chance in its egg"
        }],
        setup: "Give players a way to earn coins (or set startCoins), and build an egg display at each spot in eggPositions; turn on mobs for pets to follow."
      }, {
        name: "fishing",
        kind: "feature",
        title: "Fishing",
        category: "economy",
        summary: "Players catch random fish by water, with /fish or by casting a fishing rod in, buy faster rods with /buyrod, and sell their fish for coins with /sell or on a sell pad",
        keywords: ["fishing", "fish", "fishes", "fishing sim", "fishing simulator", "fishing game", "fisherman", "fishermen", "fisher", "catch fish", "catching fish", "go fishing", "fishing rod", "fishing rods", "rod", "rods", "better rods", "rare fish", "sell fish", "fish market", "fishin", "fising", "fishng", "fsh"],
        howItPlays: "Each fish in fishTable is [fish, chance, price]: the chances are weights, so bigger is more common. Standing within waterDistance blocks of water, /fish catches a random fish after catchSeconds; casting a fishing rod into water works too, with the game's own click-to-catch, its fish picked from fishTable and its bite after the same time. Each rod in rods is [rod item, time multiplier, price]: /rods lists them, /buyrod 2 buys one with coins and gives the rod, and the best rod a player has makes /fish faster (0.5: twice as fast). The first rod is given on joining when it is free. Fish are kept as counts, not items: /fishbag shows them, the sidebar shows how many, and /sell or standing on the block at fishSellPad sells them all for coins. A fish with a chance of 5 or less is rare: everyone is told who caught it. With saveCoins on, coins, fish and rods are kept for next time.",
        settings: [{
          key: "fishTable",
          kind: "list",
          names: "item",
          value: '[["Wheatfish", 45, 2], ["Moonfish", 30, 5], ["Needlefish", 15, 10], ["Oarfish", 8, 25], ["Pearlescent Moonfish", 2, 100]]',
          about: "the fish, each [fish item, chance (bigger is more common), coins it sells for]"
        }, {
          key: "catchSeconds",
          kind: "number",
          value: "5",
          about: "seconds to catch a fish with the first rod"
        }, {
          key: "rods",
          kind: "list",
          names: "item",
          value: '[["Rusty Rod", 1, 0], ["Sturdy Rod", 0.6, 50], ["Carbon Rod", 0.3, 200]]',
          about: "the rods, each [rod item, catch time multiplier (0.5: twice as fast), price in coins]; a free first rod is given on joining"
        }, {
          key: "fishSellPad",
          kind: "position",
          value: "[5, 10, 5]",
          about: "the block players stand on to sell all their fish"
        }, {
          key: "waterDistance",
          kind: "number",
          value: "3",
          about: "how many blocks from water a player can be to fish with /fish"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins, fish and rods are kept after a player leaves"
        }],
        code: '// Fishing: by some water, type /fish or cast a fishing rod into it to catch a random fish from the fish table. Better\n// rods (/rods, /buyrod) catch faster. /sell, or standing on the sell pad, sells every fish for coins.\nconst fishTimers = {}\nconst fishBags = {}\nlet fishSellPadMs = 0\n\nfunction onPlayerJoin(playerId) {\n\tconst number = rodNumber(playerId)\n\tif (number > 0 && !api.hasItem(playerId, CONFIG.rods[number - 1][0])) {\n\t\tapi.giveItem(playerId, CONFIG.rods[number - 1][0], 1)\n\t}\n\tshowFishCount(playerId)\n\tapi.sendMessage(playerId, "Go fishing! By some water, cast your rod in or type /fish. /sell sells your fish, /rods shows better rods.", { color: "aqua" })\n}\n\n// Fish and rods are counts, saved when CONFIG.saveCoins is on\nfunction fishValue(playerId, key) {\n\tif (CONFIG.saveCoins) {\n\t\treturn Number(getSaved(playerId, key, 0))\n\t}\n\treturn (fishBags[playerId] || {})[key] || 0\n}\n\nfunction setFishValue(playerId, key, value) {\n\tif (CONFIG.saveCoins) {\n\t\tsetSaved(playerId, key, value)\n\t\treturn\n\t}\n\tif (!fishBags[playerId]) {\n\t\tfishBags[playerId] = {}\n\t}\n\tfishBags[playerId][key] = value\n}\n\n// The number of the best rod a player has (1 is the first), 0 for none\nfunction rodNumber(playerId) {\n\tconst bought = fishValue(playerId, "fishingRod")\n\tif (bought > 0) {\n\t\treturn bought\n\t}\n\treturn CONFIG.rods.length > 0 && CONFIG.rods[0][2] === 0 ? 1 : 0\n}\n\nfunction catchSecondsFor(rod) {\n\treturn Math.round(CONFIG.catchSeconds * (rod ? rod[1] : 1) * 10) / 10\n}\n\nfunction pickFish() {\n\tconst total = CONFIG.fishTable.reduce((sum, fish) => sum + fish[1], 0)\n\tlet roll = Math.random() * total\n\tfor (const fish of CONFIG.fishTable) {\n\t\troll -= fish[1]\n\t\tif (roll < 0) {\n\t\t\treturn fish\n\t\t}\n\t}\n\treturn CONFIG.fishTable[0]\n}\n\nfunction nearWater(playerId) {\n\tconst [x, y, z] = api.getPosition(playerId).map(Math.floor)\n\tconst reach = CONFIG.waterDistance\n\tfor (let dx = -reach; dx <= reach; dx++) {\n\t\tfor (let dz = -reach; dz <= reach; dz++) {\n\t\t\tfor (let dy = -2; dy <= 0; dy++) {\n\t\t\t\tif (api.getBlock(x + dx, y + dy, z + dz) === "Water") {\n\t\t\t\t\treturn true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn false\n}\n\nfunction startFishing(playerId) {\n\tif (fishTimers[playerId] !== undefined) {\n\t\tapi.sendMessage(playerId, "You\'re already fishing...")\n\t\treturn\n\t}\n\tif (!nearWater(playerId)) {\n\t\tapi.sendMessage(playerId, "Stand next to water to fish!", { color: "orange" })\n\t\treturn\n\t}\n\tconst number = rodNumber(playerId)\n\tconst seconds = catchSecondsFor(number > 0 ? CONFIG.rods[number - 1] : null)\n\tapi.sendMessage(playerId, "Fishing... wait " + seconds + " seconds.", { color: "aqua" })\n\tfishTimers[playerId] = runLater(seconds, () => {\n\t\tdelete fishTimers[playerId]\n\t\tif (!nearWater(playerId)) {\n\t\t\tapi.sendMessage(playerId, "The fish got away! Stay by the water.", { color: "orange" })\n\t\t\treturn\n\t\t}\n\t\tcatchFish(playerId, pickFish())\n\t})\n}\n\nfunction catchFish(playerId, fish) {\n\tsetFishValue(playerId, "fish " + fish[0], fishValue(playerId, "fish " + fish[0]) + 1)\n\tshowFishCount(playerId)\n\tconst a = /^[aeiou]/i.test(fish[0]) ? "an " : "a "\n\tapi.sendMessage(playerId, "You caught " + a + fish[0] + "! It sells for " + fish[2] + " coins.", { color: "lime" })\n\tif (fish[1] <= 5) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " caught a rare " + fish[0] + "!", { color: "gold" })\n\t}\n}\n\nfunction showFishCount(playerId) {\n\tconst total = CONFIG.fishTable.reduce((sum, fish) => sum + fishValue(playerId, "fish " + fish[0]), 0)\n\tsetSidebar(playerId, "Fish", total)\n}\n\nfunction sellFish(playerId) {\n\tlet count = 0\n\tlet coins = 0\n\tfor (const fish of CONFIG.fishTable) {\n\t\tconst have = fishValue(playerId, "fish " + fish[0])\n\t\tif (have > 0) {\n\t\t\tcount += have\n\t\t\tcoins += have * fish[2]\n\t\t\tsetFishValue(playerId, "fish " + fish[0], 0)\n\t\t}\n\t}\n\tif (count === 0) {\n\t\treturn false\n\t}\n\taddCoins(playerId, coins)\n\tshowFishCount(playerId)\n\tapi.sendMessage(playerId, "Sold " + count + " fish for " + coins + " coins!", { color: "gold" })\n\treturn true\n}\n\nfunction listRods(playerId) {\n\tconst mine = rodNumber(playerId)\n\tconst lines = CONFIG.rods.map((rod, index) => (index + 1) + ". " + rod[0] + ": catches in " + catchSecondsFor(rod) + "s, " + (rod[2] > 0 ? rod[2] + " coins" : "free") + (index + 1 === mine ? " (yours)" : ""))\n\tapi.sendMessage(playerId, "Rods:\\n" + lines.join("\\n") + "\\nType /buyrod and a number, like /buyrod 2", { color: "yellow" })\n}\n\nfunction buyRod(playerId, wanted) {\n\tconst number = Number(wanted)\n\tconst index = Number.isInteger(number) && number >= 1 ? number - 1 : CONFIG.rods.findIndex((rod) => wanted !== "" && rod[0].toLowerCase().startsWith(wanted.toLowerCase()))\n\tif (index < 0 || index >= CONFIG.rods.length) {\n\t\tlistRods(playerId)\n\t\treturn\n\t}\n\tconst rod = CONFIG.rods[index]\n\tif (rodNumber(playerId) > index) {\n\t\t// One they lost is given back\n\t\tif (!api.hasItem(playerId, rod[0])) {\n\t\t\tapi.giveItem(playerId, rod[0], 1)\n\t\t}\n\t\tapi.sendMessage(playerId, "You already have the " + rod[0] + " or better!")\n\t\treturn\n\t}\n\tif (!spendCoins(playerId, rod[2])) {\n\t\tapi.sendMessage(playerId, "The " + rod[0] + " costs " + rod[2] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tsetFishValue(playerId, "fishingRod", index + 1)\n\tapi.giveItem(playerId, rod[0], 1)\n\tapi.sendMessage(playerId, "You bought the " + rod[0] + "! Fish now take " + catchSecondsFor(rod) + " seconds.", { color: "lime" })\n}\n\nfunction showFishBag(playerId) {\n\tconst lines = CONFIG.fishTable.filter((fish) => fishValue(playerId, "fish " + fish[0]) > 0).map((fish) => fishValue(playerId, "fish " + fish[0]) + " " + fish[0])\n\tapi.sendMessage(playerId, lines.length > 0 ? "Your fish: " + lines.join(", ") : "You have no fish yet.", { color: "yellow" })\n}\n\n// A rod cast into water: the fish comes from the fish table, after the rod\'s catch time\nfunction onPlayerAttemptFish(playerId, rodName, x, y, z) {\n\tconst rod = CONFIG.rods.find((one) => one[0].toLowerCase() === String(rodName).toLowerCase())\n\treturn { caughtItemName: pickFish()[0], biteDelayMs: catchSecondsFor(rod) * 1000 }\n}\n\n// The fish goes in the fish bag instead of the inventory\nfunction onPlayerSucceededFishCatch(playerId, rodName, x, y, z, caughtItemName) {\n\tconst fish = CONFIG.fishTable.find((one) => one[0] === caughtItemName)\n\tif (!fish) {\n\t\treturn\n\t}\n\tcatchFish(playerId, fish)\n\treturn "preventItemGrant"\n}\n\nfunction tick(ms) {\n\tfishSellPadMs += ms\n\tif (fishSellPadMs < 500) {\n\t\treturn\n\t}\n\tfishSellPadMs = 0\n\tconst pad = CONFIG.fishSellPad\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst [x, y, z] = api.getPosition(playerId)\n\t\tif (Math.abs(x - pad[0] - 0.5) <= 1.5 && Math.abs(z - pad[2] - 0.5) <= 1.5 && y >= pad[1] && y <= pad[1] + 3) {\n\t\t\tsellFish(playerId)\n\t\t}\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase().replace("/", "")\n\tif (name === "fish") {\n\t\tstartFishing(playerId)\n\t\treturn true\n\t}\n\tif (name === "sell") {\n\t\tif (!sellFish(playerId)) {\n\t\t\tapi.sendMessage(playerId, "You have no fish to sell. Go fishing first!")\n\t\t}\n\t\treturn true\n\t}\n\tif (name === "rods") {\n\t\tlistRods(playerId)\n\t\treturn true\n\t}\n\tif (name === "buyrod") {\n\t\tbuyRod(playerId, words.slice(1).join(" ").trim())\n\t\treturn true\n\t}\n\tif (name === "fishbag") {\n\t\tshowFishBag(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tif (fishTimers[playerId] !== undefined) {\n\t\tcancelTimer(fishTimers[playerId])\n\t}\n\tdelete fishTimers[playerId]\n\tdelete fishBags[playerId]\n}',
        changeable: [{
          name: "catchFish",
          about: "what a catch gives: the fish counted, the message, the rare-fish news, or extra coins or xp"
        }, {
          name: "sellFish",
          about: "what selling pays: the coins for each fish, or a bonus for selling many"
        }],
        setup: "Build water (a pond, a lake or the sea) for players to fish in, and put a block at fishSellPad for them to sell their fish on."
      }, {
        name: "starterKit",
        kind: "feature",
        title: "Starter kit",
        category: "players",
        summary: "Items every player gets when they join and again after respawning, with armour put on for them",
        keywords: ["kit", "starter kit", "starterkit", "starting items", "when they join", "when they respawn", "when you join", "when you respawn", "on join", "on respawn", "respawn", "start items", "give items", "items on join", "items on spawn", "respawn items", "inventory", "spawn with", "free items", "free sword", "armor", "armour"],
        howItPlays: "Every player gets kitItems when they join, and again each time they respawn after dying if giveOnRespawn is on. Each piece of armour in wornArmour is put on them. With emptyInventoryFirst on, their inventory is emptied first, so the kit never piles up.",
        settings: [{
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Stone Sword", 1], ["Wood Pickaxe", 1], ["Bread", 5]]',
          about: "the items each player gets, as [item, amount]"
        }, {
          key: "wornArmour",
          kind: "list",
          names: "item",
          value: '["Iron Helmet", "Iron Chestplate"]',
          about: "armour put on each player (helmets, chestplates, gauntlets, leggings, boots); [] for none"
        }, {
          key: "giveOnRespawn",
          kind: "boolean",
          value: "true",
          about: "true: players get the kit again each time they respawn"
        }, {
          key: "emptyInventoryFirst",
          kind: "boolean",
          value: "true",
          about: "true: a player's inventory is emptied before they get the kit"
        }],
        code: '// Starter kit: every player gets the kit items when they join, and again when they respawn after dying. Armour in\n// CONFIG.wornArmour is put on for them.\nconst armourSlots = { Helmet: 46, Chestplate: 47, Gauntlets: 48, Leggings: 49, Boots: 50 }\n\nfunction onPlayerJoin(playerId) {\n\tgiveStarterKit(playerId)\n}\n\nfunction giveStarterKit(playerId) {\n\tif (CONFIG.emptyInventoryFirst) {\n\t\tgiveKit(playerId, CONFIG.kitItems)\n\t} else {\n\t\tfor (const entry of CONFIG.kitItems) {\n\t\t\tapi.giveItem(playerId, entry[0], entry[1] || 1)\n\t\t}\n\t}\n\tfor (const armour of CONFIG.wornArmour) {\n\t\tconst piece = armour.split(" ").pop()\n\t\tif (armourSlots[piece] !== undefined) {\n\t\t\tapi.setItemSlot(playerId, armourSlots[piece], armour)\n\t\t} else {\n\t\t\tapi.giveItem(playerId, armour, 1)\n\t\t}\n\t}\n}\n\n// Dying drops a player\'s items. This runs just before they come back, so the kit is ready when they are\nfunction onRespawnRequest(playerId) {\n\tif (CONFIG.giveOnRespawn) {\n\t\tgiveStarterKit(playerId)\n\t}\n}',
        changeable: [{
          name: "giveStarterKit",
          about: "what a player is given: the items and the armour"
        }]
      }, {
        name: "kitSelector",
        kind: "feature",
        title: "Kit selector",
        category: "players",
        summary: "Players pick a kit (Archer, Tank, Mage...) with /kit <name>, /kits lists them, and they get it when they join and each time they respawn, armour put on. Kits can cost coins or need a level to unlock, and a wait between picks can be set",
        keywords: ["battlegrounds", "kit selector", "kitselector", "kit select", "select kit", "choose kit", "choose a kit", "pick kit", "pick a kit", "kits", "kit", "classes", "class", "clases", "roles", "loadout", "loadouts", "archer", "tank", "mage", "wizard", "warrior", "kit pvp", "kitpvp", "different kits", "unlock kits", "buy kits", "kit shop", "kit cooldown"],
        howItPlays: "Each kit in kits is a name and its items. /kits lists them; /kit Tank picks one (by name or number). Every player starts with defaultKit and gets their kit when they join and each time they respawn, armour in it put on them, replacing what they had. With changeAtRespawn on, a kit picked more than pickSeconds after spawning comes at the next respawn, so nobody swaps mid-fight. With saveKitChoice on, a player's pick is kept for next time. A kit can end with what unlocks it, { cost: 100 } and/or { level: 5 }: /kit on a locked kit says what it needs, and buys it when the player has the coins (and the level, read from getLevel when the XP and levels prefab is in); a bought kit stays theirs. With kitCooldownMinutes above 0, after a pick a player waits that long before they can pick again, told how long is left, even after rejoining. A game that gives its own kit at other times (a new round) should call giveChosenKit(playerId) there instead.",
        settings: [{
          key: "kits",
          kind: "list",
          names: "item",
          value: '[["Archer", [["Iron Bow", 1], ["Arrow", 32], ["Stone Sword", 1], ["Bread", 5]]], ["Tank", [["Iron Sword", 1], ["Diamond Chestplate", 1], ["Diamond Leggings", 1], ["Iron Helmet", 1], ["Bread", 5]]], ["Mage", [["Stone Sword", 1], ["Splash Instant Damage Potion", 4], ["Splash Slowness Potion", 3], ["Instant Healing Potion", 2], ["Bread", 5]]]]',
          about: 'the kits, each [kit name, [[item, amount], ...]]; armour in a kit is put on. A kit can end with what unlocks it: { cost: 100 } coins to buy it once, { level: 5 } a level to reach (from the XP and levels prefab), or both: ["Tank", [["Iron Sword", 1]], { cost: 100, level: 5 }]'
        }, {
          key: "defaultKit",
          kind: "string",
          value: '"Archer"',
          about: "the kit a player has before they pick one: one of the kit names"
        }, {
          key: "changeAtRespawn",
          kind: "boolean",
          value: "true",
          about: "true: a kit picked mid-fight comes at the next respawn; false: it is given straight away"
        }, {
          key: "pickSeconds",
          kind: "number",
          value: "15",
          about: "seconds after joining or respawning when a picked kit is still given straight away"
        }, {
          key: "saveKitChoice",
          kind: "boolean",
          value: "true",
          about: "true: a player's kit is remembered after they leave"
        }, {
          key: "kitCooldownMinutes",
          kind: "number",
          value: "0",
          about: "minutes a player waits after picking a kit before they can pick another (0: no wait)"
        }],
        code: '// Kit selector: /kits lists the kits and /kit <name> picks one. Players get their kit when they join and every time\n// they respawn, with its armour put on. A kit picked mid-fight comes at the next respawn. A kit with { cost } or\n// { level } after its items is locked until bought (kept) or the level is reached; kitCooldownMinutes spaces picks out.\nconst chosenKits = {}\nconst boughtKits = {}\nconst kitPickedAt = {}\nconst kitsDue = {}\nconst kitGivenAt = {}\nconst kitArmourSlots = { Helmet: 46, Chestplate: 47, Gauntlets: 48, Leggings: 49, Boots: 50 }\n\nfunction onPlayerJoin(playerId) {\n\tconst saved = CONFIG.saveKitChoice ? getSaved(playerId, "chosenKit", null) : null\n\tboughtKits[playerId] = String(getSaved(playerId, "kitsBought", "")).split("|").filter((name) => name !== "")\n\tkitPickedAt[playerId] = Number(getSaved(playerId, "kitPickedAt", 0))\n\tconst savedKit = findKit(String(saved || CONFIG.defaultKit))\n\t// A saved kit still owing its cost (the kits changed) falls back to the default; a level, once reached, stays reached\n\tconst owes = savedKit ? kitStillNeeds(playerId, savedKit) : null\n\tchosenKits[playerId] = savedKit && (owes === null || owes.cost === 0) ? savedKit : findKit(CONFIG.defaultKit)\n\tkitsDue[playerId] = true\n\tapi.sendMessage(playerId, "Your kit: " + kitFor(playerId)[0] + ". Type /kits to see the others.", { color: "aqua" })\n}\n\nfunction findKit(wanted) {\n\tconst number = Number(wanted)\n\tif (wanted !== "" && Number.isInteger(number) && number >= 1 && number <= CONFIG.kits.length) {\n\t\treturn CONFIG.kits[number - 1]\n\t}\n\tconst name = wanted.toLowerCase()\n\treturn CONFIG.kits.find((kit) => kit[0].toLowerCase() === name) || CONFIG.kits.find((kit) => kit[0].toLowerCase().startsWith(name)) || null\n}\n\nfunction kitFor(playerId) {\n\treturn chosenKits[playerId] || findKit(CONFIG.defaultKit) || CONFIG.kits[0]\n}\n\n// What a kit needs to unlock: { cost, level }, 0 for none. The default kit is free\nfunction kitNeeds(kit) {\n\tconst unlock = kit[2]\n\tif (kit[0] === CONFIG.defaultKit || !unlock) {\n\t\treturn { cost: 0, level: 0 }\n\t}\n\tif (typeof unlock === "number") {\n\t\treturn { cost: unlock, level: 0 }\n\t}\n\treturn { cost: Number(unlock.cost) || 0, level: Number(unlock.level) || 0 }\n}\n\n// A player\'s level from the XP and levels prefab (getLevel), or null when the game has none\nfunction kitPlayerLevel(playerId) {\n\treturn typeof getLevel === "function" ? getLevel(playerId) : null\n}\n\n// What a player still needs for a kit, { level, cost } (0: nothing), or null when it\'s theirs. A cost is paid once\nfunction kitStillNeeds(playerId, kit) {\n\tconst needs = kitNeeds(kit)\n\tconst level = kitPlayerLevel(playerId)\n\tconst missing = {\n\t\tlevel: needs.level > 0 && level !== null && level < needs.level ? needs.level : 0,\n\t\tcost: needs.cost > 0 && !(boughtKits[playerId] || []).includes(kit[0]) ? needs.cost : 0,\n\t}\n\treturn missing.level > 0 || missing.cost > 0 ? missing : null\n}\n\n// The time left before a player can pick a kit again, in ms (0: they can now)\nfunction kitWaitLeft(playerId) {\n\tif (CONFIG.kitCooldownMinutes <= 0 || !kitPickedAt[playerId]) {\n\t\treturn 0\n\t}\n\treturn Math.max(0, kitPickedAt[playerId] + CONFIG.kitCooldownMinutes * 60000 - api.now())\n}\n\nfunction kitWaitText(ms) {\n\tconst seconds = Math.ceil(ms / 1000)\n\tconst minutes = Math.floor(seconds / 60)\n\treturn minutes > 0 ? minutes + "m " + (seconds % 60) + "s" : seconds + "s"\n}\n\nfunction giveChosenKit(playerId) {\n\tapi.clearInventory(playerId)\n\tfor (const entry of kitFor(playerId)[1]) {\n\t\tconst slot = kitArmourSlots[entry[0].split(" ").pop()]\n\t\ttry {\n\t\t\tif (slot !== undefined) {\n\t\t\t\tapi.setItemSlot(playerId, slot, entry[0])\n\t\t\t} else {\n\t\t\t\tapi.giveItem(playerId, entry[0], entry[1] || 1)\n\t\t\t}\n\t\t} catch (error) {\n\t\t\t// A misspelt item is left out, so the rest of the kit (and the game) still works\n\t\t\tapi.sendMessage(playerId, entry[0] + " isn\'t an item, so it was left out of your kit.", { color: "orange" })\n\t\t}\n\t}\n\tkitGivenAt[playerId] = api.now()\n}\n\n// The kit is given a tick after joining or respawning, so it replaces any kit the game itself gives then\nfunction tick(ms) {\n\tfor (const playerId of Object.keys(kitsDue)) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tdelete kitsDue[playerId]\n\t\t\tgiveChosenKit(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tkitsDue[playerId] = true\n}\n\nfunction listKits(playerId) {\n\tconst lines = CONFIG.kits.map((kit, index) => {\n\t\tconst missing = kitStillNeeds(playerId, kit)\n\t\tconst lock = missing === null ? "" : " [locked: " + [missing.level > 0 ? "level " + missing.level : "", missing.cost > 0 ? missing.cost + " coins" : ""].filter((part) => part !== "").join(", ") + "]"\n\t\treturn (index + 1) + ". " + kit[0] + lock + ": " + kit[1].map((entry) => (entry[1] || 1) + " " + entry[0]).join(", ")\n\t})\n\tapi.sendMessage(playerId, "Kits (yours: " + kitFor(playerId)[0] + "):\\n" + lines.join("\\n") + "\\nType /kit and a name, like /kit " + CONFIG.kits[CONFIG.kits.length - 1][0], { color: "yellow" })\n}\n\nfunction pickKit(playerId, wanted) {\n\tconst kit = wanted === "" ? null : findKit(wanted)\n\tif (kit === null) {\n\t\tlistKits(playerId)\n\t\treturn\n\t}\n\tconst missing = kitStillNeeds(playerId, kit)\n\tif (missing !== null && missing.level > 0) {\n\t\tapi.sendMessage(playerId, "The " + kit[0] + " kit unlocks at level " + missing.level + ". You\'re level " + kitPlayerLevel(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (missing !== null && getCoins(playerId) < missing.cost) {\n\t\tapi.sendMessage(playerId, "The " + kit[0] + " kit costs " + missing.cost + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tconst waitLeft = kitWaitLeft(playerId)\n\tif (waitLeft > 0) {\n\t\tapi.sendMessage(playerId, "You can pick a new kit in " + kitWaitText(waitLeft) + ". Your kit: " + kitFor(playerId)[0] + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (missing !== null) {\n\t\tspendCoins(playerId, missing.cost)\n\t\tboughtKits[playerId] = (boughtKits[playerId] || []).concat([kit[0]])\n\t\tsetSaved(playerId, "kitsBought", boughtKits[playerId].join("|"))\n\t\tapi.sendMessage(playerId, "You bought the " + kit[0] + " kit for " + missing.cost + " coins! It\'s yours to keep.", { color: "gold" })\n\t}\n\tif (CONFIG.kitCooldownMinutes > 0) {\n\t\tkitPickedAt[playerId] = api.now()\n\t\tsetSaved(playerId, "kitPickedAt", kitPickedAt[playerId])\n\t}\n\tchosenKits[playerId] = kit\n\tif (CONFIG.saveKitChoice) {\n\t\tsetSaved(playerId, "chosenKit", kit[0])\n\t}\n\tconst justSpawned = api.now() - (kitGivenAt[playerId] || 0) <= CONFIG.pickSeconds * 1000\n\tconst giveNow = !kitsDue[playerId] && api.isAlive(playerId) && (!CONFIG.changeAtRespawn || justSpawned)\n\tif (giveNow) {\n\t\t// The window to swap stays the one from spawning: a swap opening a new one would refill the kit every few seconds\n\t\tconst spawnedAt = kitGivenAt[playerId]\n\t\tgiveChosenKit(playerId)\n\t\tkitGivenAt[playerId] = spawnedAt\n\t}\n\tif (giveNow || kitsDue[playerId]) {\n\t\tapi.sendMessage(playerId, "You got the " + kit[0] + " kit!", { color: "lime" })\n\t} else {\n\t\tapi.sendMessage(playerId, "You\'ll get the " + kit[0] + " kit when you respawn.", { color: "lime" })\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tif (name === "kits") {\n\t\tlistKits(playerId)\n\t\treturn true\n\t}\n\tif (name === "kit") {\n\t\tpickKit(playerId, words.slice(1).join(" ").trim())\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete chosenKits[playerId]\n\tdelete kitsDue[playerId]\n\tdelete kitGivenAt[playerId]\n\tdelete boughtKits[playerId]\n\tdelete kitPickedAt[playerId]\n}',
        changeable: [{
          name: "giveChosenKit",
          about: "what a player gets for their kit: the items, the armour, or extras like speed or more health"
        }, {
          name: "pickKit",
          about: "what happens when a player picks a kit with /kit: unlocking it, the wait, when they get it and the message"
        }, {
          name: "kitStillNeeds",
          about: "what a player still needs before they can have a kit: a level, coins, or something else like wins"
        }],
        setup: "Nothing to build. In a PvP game, turn PvP on in your world settings; any kit the game gives on join or respawn is replaced by the picked one."
      }, {
        name: "usableItems",
        kind: "feature",
        title: "Usable items",
        category: "players",
        summary: "Items that do something when a player clicks with them: a staff that shoots fireballs, a healing medkit, an ender pearl that teleports, a grappling hook, a speed charm, with cooldowns, uses and ammo",
        keywords: ["gun", "guns", "blaster", "laser gun", "ray gun", "raygun", "wand", "wands", "magic wand", "healing wand", "staff", "magic staff", "fire staff", "fireball", "fireballs", "shoot fireballs", "grappling hook", "grapple", "grappling", "grapple hook", "teleport stick", "teleport item", "ender pearl", "ender pearls", "enderpearl", "medkit", "med kit", "healing item", "knockback stick", "push stick", "ammo", "battlegrounds", "special item", "special items", "magic item", "magic items", "custom item", "custom items", "usable items", "click to use", "rocket launcher", "dash", "spell", "spells"],
        howItPlays: 'Each entry in items is an item and what it does when a player clicks while holding it: shoot a projectile, heal, launch them up and forward, teleport them to the block they look at, pull them to it like a grappling hook, give an effect like speed, or push away the players in front of them. After a use, the item waits cooldownSeconds before it works again for that player, and says how long is left if they try sooner. With uses, one of the item is used up after that many uses (uses 1: each Medkit or Ender Pearl goes when used). With ammo, each use takes one of that item, and the item won\'t work without it. With giveOnJoin on, every player gets the items (and ammoOnJoin of each ammo) when they join and again after each respawn. Action "custom" runs customItemUse(playerId, entry), which the game can replace with its own power.',
        settings: [{
          key: "items",
          kind: "list",
          names: "item",
          value: '[{ item: "Sanguine Staff", name: "Fire Staff", action: "shoot", projectile: "Fireball", damage: 20, cooldownSeconds: 1 }, { item: "Medkit", action: "heal", amount: 40, cooldownSeconds: 5, uses: 1, give: 3 }, { item: "Teleport Heart", name: "Ender Pearl", action: "teleport", range: 30, cooldownSeconds: 3, uses: 1, give: 5 }, { item: "Iron Whip", name: "Grappling Hook", action: "grapple", range: 40, strength: 30, cooldownSeconds: 2 }, { item: "Frost Shard", name: "Speed Charm", action: "boost", effect: "Speed", level: 2, seconds: 8, cooldownSeconds: 20 }]',
          about: 'each usable item as { item, action, cooldownSeconds, ... }. action: "shoot" (projectile: "Arrow", "Snowball", "Fireball", "Iceball" or "Bullet"; damage; speed, 1 normal), "heal" (amount, 0: full health), "launch" (power upwards, forward), "teleport" (range), "grapple" (range, strength), "boost" (effect: "Speed", "Jump Boost", "Damage", "Damage Reduction", "Health Regen", "Invisible"...; level; seconds), "push" (range, power, damage) or "custom" (runs customItemUse). Optional: name (what the item is called in the game: shown on it and in messages, so a real item can be a "Magic Wand" or "Healing Staff"), uses (uses before one of the item is used up; 0 or left out: never; only when the request asks for it), ammo (an item each use takes; none left, it won\'t work; only when the request asks for ammo), give (how many each player gets)'
        }, {
          key: "giveOnJoin",
          kind: "boolean",
          value: "true",
          about: "true: every player gets the items when they join and after each respawn; false: the game gives them (a shop, a kit, a chest)"
        }, {
          key: "ammoOnJoin",
          kind: "number",
          value: "16",
          about: "how much of each item's ammo a player gets with it"
        }, {
          key: "explainOnJoin",
          kind: "boolean",
          value: "true",
          about: "true: players are told what each item does when they join"
        }],
        code: '// Usable items: clicking while holding one of CONFIG.items does its action (shoot, heal, launch, teleport, grapple,\n// boost, push or custom). Each item then waits its cooldownSeconds for that player; uses and ammo are taken as it is used.\nconst usableReadyAt = {}\nconst usableUses = {}\nconst usableWarnedAt = {}\nconst usableGiveAt = {}\nlet usableItemsHooked = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!usableItemsHooked) {\n\t\tusableItemsHooked = true\n\t\tCONFIG.items.forEach((entry, index) => {\n\t\t\twhenItemUsed(entry.item, (id, x, y, z, targetId) => tryUseItem(id, index), 0.2)\n\t\t})\n\t}\n\tusableReadyAt[playerId] = {}\n\tusableUses[playerId] = {}\n\tusableWarnedAt[playerId] = 0\n\tif (CONFIG.explainOnJoin) {\n\t\tconst lines = CONFIG.items.map((entry) => usableName(entry) + ": " + entry.action)\n\t\tapi.sendMessage(playerId, "Click while holding an item to use it! " + lines.join(", "), { color: "aqua" })\n\t}\n\tif (CONFIG.giveOnJoin) {\n\t\tusableGiveAt[playerId] = Date.now() + 500\n\t}\n}\n\n// The items are given a moment after joining or respawning, so a kit the game gives then doesn\'t replace them\nfunction onRespawnRequest(playerId) {\n\tif (CONFIG.giveOnJoin) {\n\t\tusableGiveAt[playerId] = Date.now() + 500\n\t}\n}\n\nfunction tick(ms) {\n\tconst now = Date.now()\n\tfor (const playerId of Object.keys(usableGiveAt)) {\n\t\tif (now >= usableGiveAt[playerId] && api.isAlive(playerId)) {\n\t\t\tdelete usableGiveAt[playerId]\n\t\t\tgiveUsableItems(playerId)\n\t\t}\n\t}\n}\n\n// Tops each item (and its ammo) up to how many a player should have, so nobody gets doubles\nfunction giveUsableItems(playerId) {\n\tfor (const entry of CONFIG.items) {\n\t\t// The item shows as its name in the inventory, so a Medkit can be a "Magic Wand"\n\t\tconst wanted = [{ item: String(entry.item), amount: entry.give || 1, attributes: entry.name ? { customDisplayName: entry.name } : undefined }]\n\t\tif (entry.ammo) {\n\t\t\twanted.push({ item: String(entry.ammo), amount: CONFIG.ammoOnJoin, attributes: undefined })\n\t\t}\n\t\tfor (const want of wanted) {\n\t\t\ttry {\n\t\t\t\tconst missing = want.amount - api.getInventoryItemAmount(playerId, want.item)\n\t\t\t\tif (missing > 0) {\n\t\t\t\t\tapi.giveItem(playerId, want.item, missing, want.attributes)\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\t// A misspelt item is left out, so the rest (and the game) still works\n\t\t\t\tapi.sendMessage(playerId, want.item + " isn\'t an item, so it was left out.", { color: "orange" })\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction usableName(entry) {\n\treturn entry.name || entry.item\n}\n\n// A short note, at most once a second, so holding the button down doesn\'t flood the chat\nfunction usableNote(playerId, text) {\n\tconst now = Date.now()\n\tif (now - (usableWarnedAt[playerId] || 0) >= 1000) {\n\t\tusableWarnedAt[playerId] = now\n\t\tapi.sendMessage(playerId, text, { color: "orange" })\n\t}\n}\n\n// A misspelt ammo name is ammo nobody has\nfunction usableHasAmmo(playerId, ammo) {\n\ttry {\n\t\treturn api.hasItem(playerId, ammo)\n\t} catch (error) {\n\t\treturn false\n\t}\n}\n\nfunction tryUseItem(playerId, index) {\n\tconst entry = CONFIG.items[index]\n\tif (!usableReadyAt[playerId]) {\n\t\tusableReadyAt[playerId] = {}\n\t\tusableUses[playerId] = {}\n\t}\n\tconst left = (usableReadyAt[playerId][index] || 0) - Date.now()\n\tif (left > 0) {\n\t\tusableNote(playerId, usableName(entry) + " ready in " + Math.ceil(left / 1000) + "s")\n\t\treturn\n\t}\n\tif (entry.ammo && !usableHasAmmo(playerId, entry.ammo)) {\n\t\tusableNote(playerId, "You need " + entry.ammo + " to use the " + usableName(entry) + "!")\n\t\treturn\n\t}\n\t// An action that did nothing (no block in range, full health) costs no cooldown, ammo or use\n\tif (useItem(playerId, entry) === false) {\n\t\treturn\n\t}\n\tconst cooldown = (entry.cooldownSeconds || 0) * 1000\n\tusableReadyAt[playerId][index] = Date.now() + cooldown\n\tif (cooldown >= 1000) {\n\t\tapi.initiateMiddleScreenBar(playerId, cooldown)\n\t}\n\tif (entry.ammo) {\n\t\tapi.removeItemName(playerId, entry.ammo, 1)\n\t}\n\tif (entry.uses > 0) {\n\t\tusableUses[playerId][index] = (usableUses[playerId][index] || 0) + 1\n\t\tif (usableUses[playerId][index] >= entry.uses) {\n\t\t\tusableUses[playerId][index] = 0\n\t\t\tapi.removeItemName(playerId, entry.item, 1)\n\t\t}\n\t}\n}\n\n// What an item does; returns false when it did nothing, so it can be tried again straight away\nfunction useItem(playerId, entry) {\n\tif (entry.action === "shoot") {\n\t\treturn shootProjectile(playerId, { item: entry.projectile || "Arrow", speed: entry.speed || 1, damage: entry.damage }) !== null\n\t}\n\tif (entry.action === "heal") {\n\t\tconst max = api.getClientOption(playerId, "maxHealth")\n\t\tif (api.getHealth(playerId) >= max) {\n\t\t\tusableNote(playerId, "You\'re already at full health!")\n\t\t\treturn false\n\t\t}\n\t\tif (entry.amount > 0) {\n\t\t\tapi.setHealth(playerId, Math.min(max, api.getHealth(playerId) + entry.amount))\n\t\t} else {\n\t\t\thealFully(playerId)\n\t\t}\n\t\treturn true\n\t}\n\tif (entry.action === "launch") {\n\t\tconst dir = api.getPlayerFacingInfo(playerId).dir\n\t\tconst flat = Math.sqrt(dir[0] * dir[0] + dir[2] * dir[2]) || 1\n\t\tconst forward = entry.forward === undefined ? 10 : entry.forward\n\t\tapi.setVelocity(playerId, (dir[0] / flat) * forward, entry.power || 20, (dir[2] / flat) * forward)\n\t\tapi.preventFallDamageNextGrounding(playerId)\n\t\treturn true\n\t}\n\tif (entry.action === "teleport" || entry.action === "grapple") {\n\t\tconst block = aimedBlock(playerId, entry.range || 30)\n\t\tconst spot = block ? landingSpot(playerId, block) : null\n\t\tif (!spot) {\n\t\t\tusableNote(playerId, "Look at a block that\'s closer to use the " + usableName(entry) + ".")\n\t\t\treturn false\n\t\t}\n\t\tif (entry.action === "teleport") {\n\t\t\tapi.setPosition(playerId, spot[0] + 0.5, spot[1], spot[2] + 0.5)\n\t\t} else {\n\t\t\tpullTowards(playerId, [spot[0] + 0.5, spot[1], spot[2] + 0.5], entry.strength || 30)\n\t\t}\n\t\treturn true\n\t}\n\tif (entry.action === "boost") {\n\t\tapplyBoost(playerId, entry.effect || "Speed", entry.seconds || 5, entry.level || 1)\n\t\treturn true\n\t}\n\tif (entry.action === "push") {\n\t\treturn pushPlayersInFront(playerId, entry) > 0\n\t}\n\treturn customItemUse(playerId, entry)\n}\n\n// Where a player lands at the block they aimed at: on top of it if there is room, else the free spot beside it nearest them\nfunction landingSpot(playerId, block) {\n\tconst eye = api.getPlayerFacingInfo(playerId).camPos\n\tconst free = (x, y, z) => api.getBlock(x, y, z) === "Air" && api.getBlock(x, y + 1, z) === "Air"\n\tconst x = block[0]\n\tconst y = block[1]\n\tconst z = block[2]\n\tif (free(x, y + 1, z)) {\n\t\treturn [x, y + 1, z]\n\t}\n\tconst sides = [[x - 1, y, z], [x + 1, y, z], [x, y, z - 1], [x, y, z + 1], [x, y - 2, z]].filter((s) => free(s[0], s[1], s[2]))\n\tsides.sort((a, b) => Math.hypot(a[0] - eye[0], a[2] - eye[2]) - Math.hypot(b[0] - eye[0], b[2] - eye[2]))\n\treturn sides[0] || null\n}\n\n// Knocks back every other player within range in front of this one; returns how many were pushed\nfunction pushPlayersInFront(playerId, entry) {\n\tconst facing = api.getPlayerFacingInfo(playerId)\n\tconst from = api.getPosition(playerId)\n\tconst range = entry.range || 5\n\tconst power = entry.power || 15\n\tlet pushed = 0\n\tfor (const otherId of api.getPlayerIds()) {\n\t\tconst to = api.getPosition(otherId)\n\t\tconst dx = to[0] - from[0]\n\t\tconst dz = to[2] - from[2]\n\t\tconst distance = Math.sqrt(dx * dx + dz * dz)\n\t\tconst ahead = distance > 0 ? (dx * facing.dir[0] + dz * facing.dir[2]) / distance : 0\n\t\tif (otherId === playerId || !api.isAlive(otherId) || distance > range || ahead < 0.5) {\n\t\t\tcontinue\n\t\t}\n\t\tapi.setVelocity(otherId, (dx / distance) * power, power / 2, (dz / distance) * power)\n\t\tif (entry.damage > 0) {\n\t\t\tapi.applyHealthChange(otherId, -entry.damage, playerId)\n\t\t}\n\t\tpushed++\n\t}\n\tif (pushed === 0) {\n\t\tusableNote(playerId, "Nobody in front of you to push.")\n\t}\n\treturn pushed\n}\n\n// Action "custom": replace this with the item\'s own power. Return false if it did nothing (no cooldown is used)\nfunction customItemUse(playerId, entry) {\n\tapi.sendMessage(playerId, usableName(entry) + " has no power yet.", { color: "yellow" })\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete usableReadyAt[playerId]\n\tdelete usableUses[playerId]\n\tdelete usableWarnedAt[playerId]\n\tdelete usableGiveAt[playerId]\n}',
        changeable: [{
          name: "useItem",
          about: "what each action does when an item is used: the shoot, heal, launch, teleport, grapple, boost and push parts"
        }, {
          name: "customItemUse",
          about: 'the power of an item with action "custom": anything the game wants (return false if it did nothing)'
        }, {
          name: "giveUsableItems",
          about: "what a player gets on join and respawn: the items and their ammo, topped up"
        }],
        setup: 'Nothing to build. Turn PvP on in your world settings for shots and pushes to hurt players; a "Fireball" shot blows up blocks, so use "Arrow" or "Snowball" to keep the world in one piece.'
      }, {
        name: "dailyReward",
        kind: "feature",
        title: "Daily reward",
        category: "economy",
        summary: "Free coins once a day with /daily (or by itself on joining), more for coming back days in a row, saved after leaving",
        keywords: ["daily", "dailys", "daily reward", "daily rewards", "reward", "rewards", "login", "login reward", "streak", "free coins", "bonus", "every day", "gift"],
        howItPlays: "Once every hoursBetween hours a player can claim dailyCoins with /daily, or gets them by themselves on joining when giveOnJoin is on. Claiming again within twice that time builds a streak: each day in a row adds streakBonus coins. Asking too early says how long is left. The last claim and the streak are saved.",
        settings: [{
          key: "dailyCoins",
          kind: "number",
          value: "50",
          about: "coins the daily reward gives"
        }, {
          key: "streakBonus",
          kind: "number",
          value: "10",
          about: "extra coins for each day in a row a player comes back (0: none)"
        }, {
          key: "hoursBetween",
          kind: "number",
          value: "24",
          about: "hours a player waits between daily rewards"
        }, {
          key: "giveOnJoin",
          kind: "boolean",
          value: "true",
          about: "true: the reward is given by itself when a player joins, if it is ready"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Daily reward: /daily gives coins once a day, and joining gives them too when they are ready. Coming back day after\n// day builds a streak worth more coins. The time of the last reward is saved, so leaving doesn\'t reset it.\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.giveOnJoin) {\n\t\tclaimDailyReward(playerId)\n\t}\n}\n\nfunction waitText(ms) {\n\tconst minutes = Math.ceil(ms / 60000)\n\tconst hours = Math.floor(minutes / 60)\n\tif (hours === 0) {\n\t\treturn minutes + "m"\n\t}\n\treturn minutes % 60 === 0 ? hours + "h" : hours + "h " + (minutes % 60) + "m"\n}\n\nfunction claimDailyReward(playerId) {\n\tconst waitMs = CONFIG.hoursBetween * 60 * 60 * 1000\n\tconst last = Number(getSaved(playerId, "dailyLast", 0))\n\tconst now = Date.now()\n\tif (now - last < waitMs) {\n\t\tapi.sendMessage(playerId, "Your next daily reward is ready in " + waitText(last + waitMs - now) + ".", { color: "yellow" })\n\t\treturn\n\t}\n\tconst streak = now - last < waitMs * 2 ? Number(getSaved(playerId, "dailyStreak", 0)) + 1 : 1\n\tsetSaved(playerId, "dailyLast", now)\n\tsetSaved(playerId, "dailyStreak", streak)\n\tgiveDailyReward(playerId, streak)\n}\n\nfunction giveDailyReward(playerId, streak) {\n\tconst coins = CONFIG.dailyCoins + CONFIG.streakBonus * (streak - 1)\n\taddCoins(playerId, coins)\n\tconst streakText = streak > 1 ? " That\'s " + streak + " days in a row!" : ""\n\tapi.sendMessage(playerId, "Daily reward: +" + coins + " coins!" + streakText + " Come back in " + waitText(CONFIG.hoursBetween * 60 * 60 * 1000) + " for the next one.", { color: "lime" })\n}\n\nfunction playerCommand(playerId, command) {\n\tif (command.trim().toLowerCase() === "daily") {\n\t\tclaimDailyReward(playerId)\n\t\treturn true\n\t}\n\treturn false\n}',
        changeable: [{
          name: "giveDailyReward",
          about: "what the daily reward gives for a streak of days (coins, items, a kit...)"
        }]
      }, {
        name: "luckyBlocks",
        kind: "feature",
        title: "Lucky blocks",
        category: "world",
        summary: "Breaking a lucky block gives a random surprise: items, coins, a mob or a short effect, told to the player",
        keywords: ["mystery box", "lucky", "lucky block", "lucky blocks", "luckyblock", "luck", "luky", "surprise", "mystery block", "loot", "chance", "gamble", "prize"],
        howItPlays: "Breaking a luckyBlock gives one random reward, every one equally likely: one of rewardItems, rewardCoins coins, one of rewardMobs appearing on the spot, or one of rewardEffects for effectSeconds. The player is told what they got. The block drops nothing else.",
        settings: [{
          key: "luckyBlock",
          kind: "block",
          value: '"Lucky Block"',
          about: "breaking this block gives a random reward"
        }, {
          key: "rewardItems",
          kind: "list",
          names: "item",
          value: '[["Diamond", 3], ["Iron Sword", 1], ["Bread", 5], ["Gold Bar", 4]]',
          about: "items it may give, each [item, how many] ([] for none)"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "25",
          about: "coins it may give (0: never coins)"
        }, {
          key: "rewardMobs",
          kind: "list",
          names: "mob",
          value: '["Cow", "Draugr Zombie"]',
          about: "mobs that may jump out, one at a time ([] for none; mobs must be allowed)"
        }, {
          key: "rewardEffects",
          kind: "list",
          value: '["Speed", "Jump Boost", "Slowness"]',
          about: 'effects it may give, like "Speed", "Jump Boost", "Invisible", "Slowness" ([] for none)'
        }, {
          key: "effectSeconds",
          kind: "number",
          value: "15",
          about: "how long an effect lasts, in seconds"
        }],
        code: '// Lucky blocks: breaking a lucky block gives a random reward (items, coins, a mob or an effect) and says what it was.\nfunction luckyRewards() {\n\tconst rewards = []\n\tfor (const entry of CONFIG.rewardItems) {\n\t\trewards.push({ kind: "item", name: entry[0], amount: entry[1] || 1 })\n\t}\n\tif (CONFIG.rewardCoins > 0) {\n\t\trewards.push({ kind: "coins", amount: CONFIG.rewardCoins })\n\t}\n\tfor (const mob of CONFIG.rewardMobs) {\n\t\trewards.push({ kind: "mob", name: mob })\n\t}\n\tfor (const effect of CONFIG.rewardEffects) {\n\t\trewards.push({ kind: "effect", name: effect })\n\t}\n\treturn rewards\n}\n\nfunction giveLuckyReward(playerId, reward, x, y, z) {\n\tlet text = "nothing this time!"\n\tif (reward.kind === "item") {\n\t\tapi.giveItem(playerId, reward.name, reward.amount)\n\t\ttext = reward.amount + " " + reward.name + "!"\n\t} else if (reward.kind === "coins") {\n\t\taddCoins(playerId, reward.amount)\n\t\ttext = reward.amount + " coins!"\n\t} else if (reward.kind === "mob") {\n\t\tif (spawnMobs(reward.name, 1, [x + 0.5, y, z + 0.5], 0).length > 0) {\n\t\t\ttext = "a " + reward.name + " jumped out!"\n\t\t}\n\t} else if (reward.kind === "effect") {\n\t\tapi.applyEffect(playerId, reward.name, CONFIG.effectSeconds * 1000, { inbuiltLevel: 1 })\n\t\ttext = reward.name + " for " + CONFIG.effectSeconds + " seconds!"\n\t}\n\tapi.sendMessage(playerId, "Lucky block: " + text, { color: "gold" })\n\tapi.sendFlyingMiddleMessage(playerId, text, 1)\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (fromBlock === CONFIG.luckyBlock && toBlock === "Air") {\n\t\tconst reward = pickRandom(luckyRewards())\n\t\tif (reward) {\n\t\t\tgiveLuckyReward(playerId, reward, x, y, z)\n\t\t}\n\t\treturn "preventDrop"\n\t}\n}',
        changeable: [{
          name: "giveLuckyReward",
          about: "what each kind of reward does and what the player is told"
        }],
        setup: "Put lucky blocks in your world; for mob rewards, mobs must be allowed in the world settings."
      }, {
        name: "jumpPads",
        kind: "feature",
        title: "Jump pads and speed pads",
        category: "parkour",
        summary: "Standing on a pad block launches a player up and forward, and a speed block gives a short speed boost",
        keywords: ["jump pad", "jump pads", "jumppad", "jumppads", "launch pad", "launchpad", "bounce", "bouncy", "boost", "booster", "speed pad", "speed boost", "trampoline", "launch", "fling"],
        howItPlays: "Standing on a padBlock launches the player upwards with launchPower, and forwards the way they face with forwardPower (0 for straight up). Standing on a speedBlock makes them run faster for speedSeconds. After a pad or speed block works, it waits cooldownSeconds before it works again for that player.",
        settings: [{
          key: "padBlock",
          kind: "block",
          value: '"Block of Emerald"',
          about: "standing on this block launches a player"
        }, {
          key: "launchPower",
          kind: "number",
          value: "20",
          about: "how hard a pad launches a player upwards (a normal jump is about 9)"
        }, {
          key: "forwardPower",
          kind: "number",
          value: "10",
          about: "how hard a pad pushes a player forwards, the way they face (0: straight up)"
        }, {
          key: "speedBlock",
          kind: "block",
          value: '"Block of Lapis Lazuli"',
          about: "standing on this block gives a speed boost"
        }, {
          key: "speedSeconds",
          kind: "number",
          value: "5",
          about: "how long a speed boost lasts, in seconds"
        }, {
          key: "speedLevel",
          kind: "number",
          value: "2",
          about: "how strong a speed boost is (1 to 5)"
        }, {
          key: "cooldownSeconds",
          kind: "number",
          value: "1",
          about: "seconds before the same kind of pad works again for a player"
        }],
        code: '// Jump pads: standing on a pad block launches you up, and forwards the way you face. Standing on a speed block\n// makes you run faster for a few seconds. Each pad waits a moment before it works again for the same player.\nconst padLastUsed = {}\n\nfunction onBlockStand(playerId, x, y, z, blockName) {\n\tif (blockName === CONFIG.padBlock && padIsReady(playerId, "jump")) {\n\t\tlaunchPlayer(playerId)\n\t} else if (blockName === CONFIG.speedBlock && padIsReady(playerId, "speed")) {\n\t\tgiveSpeedBoost(playerId)\n\t}\n}\n\n// Whether this kind of pad can work for the player again yet, and if so, starts its wait\nfunction padIsReady(playerId, kind) {\n\tif (!padLastUsed[playerId]) {\n\t\tpadLastUsed[playerId] = {}\n\t}\n\tconst now = Date.now()\n\tconst last = padLastUsed[playerId][kind]\n\tif (last !== undefined && now - last < CONFIG.cooldownSeconds * 1000) {\n\t\treturn false\n\t}\n\tpadLastUsed[playerId][kind] = now\n\treturn true\n}\n\nfunction launchPlayer(playerId) {\n\tlet pushX = 0\n\tlet pushZ = 0\n\tif (CONFIG.forwardPower > 0) {\n\t\t// The way the player faces, flat along the ground\n\t\tconst facing = api.getPlayerFacingInfo(playerId).dir\n\t\tconst length = Math.sqrt(facing[0] * facing[0] + facing[2] * facing[2])\n\t\tif (length > 0) {\n\t\t\tpushX = (facing[0] / length) * CONFIG.forwardPower\n\t\t\tpushZ = (facing[2] / length) * CONFIG.forwardPower\n\t\t}\n\t}\n\tapi.setVelocity(playerId, pushX, CONFIG.launchPower, pushZ)\n\tapi.preventFallDamageNextGrounding(playerId)\n}\n\nfunction giveSpeedBoost(playerId) {\n\tapi.applyEffect(playerId, "Speed", CONFIG.speedSeconds * 1000, { inbuiltLevel: CONFIG.speedLevel })\n\tapi.sendMessage(playerId, "Speed boost!", { color: "aqua" })\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete padLastUsed[playerId]\n}',
        changeable: [{
          name: "launchPlayer",
          about: "what a jump pad does to a player: how high and which way they fly"
        }, {
          name: "giveSpeedBoost",
          about: "what a speed block gives a player: the effect, how long, the message"
        }],
        setup: "Put pad blocks and speed blocks where players should be launched or sped up."
      }, {
        name: "abilities",
        kind: "feature",
        title: "Player abilities",
        category: "players",
        summary: "Powers every player has from joining and after respawning: double jump, higher jumps, low gravity, speed, more health, no fall damage, always night and flying",
        keywords: ["abilities", "ability", "powers", "power", "perks", "perk", "super powers", "superpowers", "double jump", "doublejump", "double jumps", "triple jump", "air jump", "moon jump", "moon gravity", "low gravity", "lowgravity", "less gravity", "jump higher", "high jump", "super jump", "jump boots", "jump boost", "fly", "flying", "flight", "/fly", "speed perk", "speed power", "always fast", "run faster", "super speed", "faster", "more health", "extra health", "more hearts", "always night", "night mode", "dark mode", "no fall damage", "no fall", "fall damage"],
        howItPlays: "Every player gets the same abilities when they join, and again after each respawn. doubleJump is how many extra jumps they get in the air. jumpBoost makes jumps higher and speedBoost makes them run faster (1 is normal for both). lowGravity below 1 makes them fall slowly, like on the moon. maxHealth sets how much health they have. noFallDamage turns fall damage off. alwaysNight makes the world dark and blue like night. With canFly on, everyone can fly (tap jump twice, then jump to go up and crouch to go down), and with flyCommand on, a player can type /fly to switch flying on and off for themselves.",
        settings: [{
          key: "doubleJump",
          kind: "number",
          value: "1",
          about: "extra jumps in the air: 1 is a double jump, 2 a triple jump, 0 none"
        }, {
          key: "jumpBoost",
          kind: "number",
          value: "1.5",
          about: "how high players jump: 1 is normal, 1.5 higher, 2 super high"
        }, {
          key: "speedBoost",
          kind: "number",
          value: "1.3",
          about: "how fast players run: 1 is normal, 2 twice as fast"
        }, {
          key: "lowGravity",
          kind: "number",
          value: "1",
          about: "how hard gravity pulls: 1 is normal, 0.4 is like the moon (floaty jumps and slow falls)"
        }, {
          key: "maxHealth",
          kind: "number",
          value: "100",
          about: "how much health each player has (100 is normal, 200 is double)"
        }, {
          key: "noFallDamage",
          kind: "boolean",
          value: "false",
          about: "true: players never take damage from falling"
        }, {
          key: "alwaysNight",
          kind: "boolean",
          value: "false",
          about: "true: the world is dark and blue like night for every player"
        }, {
          key: "canFly",
          kind: "boolean",
          value: "false",
          about: "true: every player can fly from the moment they join"
        }, {
          key: "flyCommand",
          kind: "boolean",
          value: "false",
          about: "true: a player can type /fly to switch their own flying on or off (flying is creative mode, so they can build freely too)"
        }],
        code: '// Abilities: every player gets the powers in CONFIG when they join and again after they respawn. A setting left at\n// its normal value (jumpBoost 1, speedBoost 1, lowGravity 1, maxHealth 100) is not touched. /fly switches flying on or off.\nconst flying = {}\nlet flyCommandAdded = false\n\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.flyCommand && !flyCommandAdded) {\n\t\tflyCommandAdded = true\n\t\taddCommand("fly", (id) => toggleFlying(id))\n\t}\n\tflying[playerId] = CONFIG.canFly\n\tgiveAbilities(playerId)\n}\n\n// This runs just before a player comes back from dying, so the abilities are there when they are\nfunction onRespawnRequest(playerId) {\n\tgiveAbilities(playerId)\n}\n\nfunction giveAbilities(playerId) {\n\tif (CONFIG.doubleJump > 0) {\n\t\tsetAbility(playerId, "doubleJump", CONFIG.doubleJump)\n\t}\n\tif (CONFIG.jumpBoost !== 1) {\n\t\tsetAbility(playerId, "jump", CONFIG.jumpBoost)\n\t}\n\tif (CONFIG.speedBoost !== 1) {\n\t\tsetAbility(playerId, "speed", CONFIG.speedBoost)\n\t}\n\tif (CONFIG.lowGravity !== 1) {\n\t\tapi.setClientOption(playerId, "gravityMultiplier", CONFIG.lowGravity)\n\t}\n\tif (CONFIG.maxHealth !== 100) {\n\t\tsetAbility(playerId, "maxHealth", CONFIG.maxHealth)\n\t}\n\tif (CONFIG.noFallDamage) {\n\t\tsetAbility(playerId, "fallDamage", false)\n\t}\n\tif (CONFIG.alwaysNight) {\n\t\tapi.setClientOption(playerId, "skyLightColourOverride", "#1a2255")\n\t}\n\tif (flying[playerId]) {\n\t\tapi.setClientOption(playerId, "creative", true)\n\t}\n}\n\nfunction toggleFlying(playerId) {\n\tflying[playerId] = !flying[playerId]\n\tapi.setClientOption(playerId, "creative", flying[playerId])\n\tif (flying[playerId]) {\n\t\tapi.sendMessage(playerId, "Flying on! Tap jump twice to take off. Type /fly to stop.", { color: "aqua" })\n\t} else {\n\t\tapi.sendMessage(playerId, "Flying off.", { color: "aqua" })\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete flying[playerId]\n}',
        changeable: [{
          name: "giveAbilities",
          about: "which abilities a player gets and how strong: the setAbility and client option lines"
        }],
        setup: "Flying uses creative mode, so a player who is flying can also place blocks freely: turn off block changes in the world if they shouldn't build."
      }, {
        name: "serverBasics",
        kind: "feature",
        title: "Server basics",
        category: "players",
        summary: "What every server needs: a welcome message and rules, /spawn, /tpa to visit a friend, admin commands (/kick, /tp, /tphere, /announce), a friends-only list, blocks near spawn only admins can change, and small rules: a kill feed, PvP off, respawn protection, no hostile mobs and /pay",
        keywords: ["server", "my server", "server basics", "smp", "welcome", "welcome message", "rules", "server rules", "tp to spawn", "back to spawn", "tpa", "tpaccept", "teleport to friend", "teleport to a friend", "tp to friend", "admin", "admins", "admin commands", "admin only", "only for me", "kick", "kick players", "moderator", "mod commands", "announce", "announcement", "friends only", "only my friends", "whitelist", "white list", "private server", "spawn protection", "protect spawn", "kill feed", "a kill feed", "killfeed", "death messages", "kill messages", "respawn protection", "spawn invincibility", "no pvp", "pvp off", "turn pvp off", "turn off pvp", "disable pvp", "peaceful", "no hostile mobs", "no monsters", "pay", "pay command", "send coins", "give coins"],
        howItPlays: 'Joining shows welcomeMessage, the rules and the commands; /rules shows the rules again. /spawn sends a player to spawnPosition. With allowTpa, /tpa <name> asks that player, who types /tpaccept (or /tpdeny) within a minute. Players named in admins are admins: with adminCommands on they get /kick <name>, /tp <name> (go to them), /tphere <name> (bring them) and /announce <text>. When friendsOnly has names, anyone else who joins is kicked with a message (admins always get in). Nobody but admins can break or place blocks within spawnProtectRadius blocks of spawnPosition (side to side, any height). With killFeed, everyone is told "Alice killed Bob", "Bob was killed by a Draugr Zombie", or "Bob died" when they respawn after any other death (a fall, lava). With pvp "off" players can\'t hurt each other anywhere. With respawnProtectSeconds, a player who respawns can\'t be hurt by players for that long (hitting someone ends it early) and is told so; Bloxd itself already protects them for the first 5 seconds. With noHostileMobs, mobs that attack on sight (zombies, skeletons, golems, bears) that the world spawns by itself are taken away at once; mobs spawnMobs spawns stay, and so do api.attemptSpawnMob\'s unless put exactly in a block\'s middle (x and z ending in .5). With payCommand, /pay <name> <amount> gives that many of the player\'s coins to another player. Names can be typed in any case or just their start: /tp ali. Other code can call isAdmin(playerId).',
        settings: [{
          key: "admins",
          kind: "list",
          value: "[]",
          about: 'Bloxd names of the admins, e.g. ["YourName"]; they get the admin commands and can build at spawn'
        }, {
          key: "welcomeMessage",
          kind: "string",
          value: '"Welcome to the server! Have fun!"',
          about: "the message a player gets when they join"
        }, {
          key: "rules",
          kind: "list",
          value: '["Be kind to everyone", "No griefing other people\'s builds", "No spamming the chat"]',
          about: "the rules, one text each, shown when a player joins and with /rules ([] for none)"
        }, {
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where /spawn sends players, and the middle of spawn protection"
        }, {
          key: "allowTpa",
          kind: "boolean",
          value: "true",
          about: "true: /tpa <name> asks to teleport to a player, who says yes with /tpaccept"
        }, {
          key: "adminCommands",
          kind: "boolean",
          value: "true",
          about: "true: admins get /kick, /tp, /tphere and /announce"
        }, {
          key: "friendsOnly",
          kind: "list",
          value: "[]",
          about: "names allowed in; anyone else is kicked when they join ([]: everyone can join)"
        }, {
          key: "spawnProtectRadius",
          kind: "number",
          value: "10",
          about: "blocks around spawnPosition that only admins can break or place (0: none)"
        }, {
          key: "killFeed",
          kind: "boolean",
          value: "false",
          about: 'true: everyone is told who killed who, e.g. "Alice killed Bob", and when a player dies'
        }, {
          key: "pvp",
          kind: "string",
          value: '"on"',
          about: '"on": players can hurt each other; "off": they can\'t, anywhere'
        }, {
          key: "respawnProtectSeconds",
          kind: "number",
          value: "0",
          about: "seconds after respawning that other players can't hurt a player; Bloxd already gives 5, so use more (0: just those 5)"
        }, {
          key: "noHostileMobs",
          kind: "boolean",
          value: "false",
          about: "true: mobs that attack on sight don't spawn by themselves (mobs the code spawns still do)"
        }, {
          key: "payCommand",
          kind: "boolean",
          value: "false",
          about: "true: /pay <name> <amount> gives some of a player's coins to another player (coins another prefab or addCoins gives; a world without coins says so)"
        }],
        code: '// Server basics: a welcome message and the rules when a player joins, /rules, /spawn, /tpa to visit a friend, admin\n// commands (/kick, /tp, /tphere, /announce) for the names in admins, a friends-only list, and spawn protection.\nconst tpaRequests = {}\n// When each respawned player\'s protection from other players ends (an api.now() time)\nconst protectedUntil = {}\n// Players whose death the kill feed told already\nconst killTold = {}\nconst hostileMobsToRemove = []\n\nfunction sameName(a, b) {\n\treturn String(a).toLowerCase() === String(b).toLowerCase()\n}\n\nfunction isAdmin(playerId) {\n\treturn CONFIG.admins.some((name) => sameName(name, api.getEntityName(playerId)))\n}\n\n// A player in the world by name, in any case, or by the start of their name\nfunction findPlayer(name) {\n\tconst wanted = String(name || "").toLowerCase()\n\tconst ids = api.getPlayerIds()\n\tif (wanted === "") {\n\t\treturn null\n\t}\n\treturn ids.find((id) => sameName(api.getEntityName(id), wanted)) || ids.find((id) => api.getEntityName(id).toLowerCase().startsWith(wanted)) || null\n}\n\nfunction onPlayerJoin(playerId) {\n\tconst name = api.getEntityName(playerId)\n\tif (CONFIG.friendsOnly.length > 0 && !isAdmin(playerId) && !CONFIG.friendsOnly.some((friend) => sameName(friend, name))) {\n\t\tapi.kickPlayer(playerId, "Sorry, only the owner\'s friends can join this world.")\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, CONFIG.welcomeMessage, { color: "lime" })\n\tshowRules(playerId)\n\tconst commands = ["/rules", "/spawn"].concat(CONFIG.allowTpa ? ["/tpa <name>"] : [], CONFIG.payCommand ? ["/pay <name> <amount>"] : [], CONFIG.adminCommands && isAdmin(playerId) ? ["/kick", "/tp", "/tphere", "/announce"] : [])\n\tapi.sendMessage(playerId, "Commands: " + commands.join(", "), { color: "yellow" })\n}\n\nfunction showRules(playerId) {\n\tif (CONFIG.rules.length > 0) {\n\t\tapi.sendMessage(playerId, "Rules:\\n" + CONFIG.rules.map((rule, index) => index + 1 + ". " + rule).join("\\n"), { color: "aqua" })\n\t}\n}\n\nfunction askToTeleport(playerId, name) {\n\tconst target = findPlayer(name)\n\tif (target === null || target === playerId) {\n\t\tapi.sendMessage(playerId, "Type /tpa and the name of a player in the world, like /tpa Alex.", { color: "orange" })\n\t\treturn\n\t}\n\ttpaRequests[target] = { from: playerId, at: api.now() }\n\tapi.sendMessage(target, api.getEntityName(playerId) + " wants to teleport to you. Type /tpaccept to say yes or /tpdeny to say no.", { color: "yellow" })\n\tapi.sendMessage(playerId, "Asked " + api.getEntityName(target) + ". Wait for them to say yes.", { color: "lime" })\n}\n\nfunction answerTeleport(playerId, accepted) {\n\tconst request = tpaRequests[playerId]\n\tdelete tpaRequests[playerId]\n\tif (!request || api.now() - request.at > 60000 || !api.playerIsInGame(request.from)) {\n\t\tapi.sendMessage(playerId, "Nobody is asking to teleport to you.", { color: "orange" })\n\t\treturn\n\t}\n\tif (accepted) {\n\t\tapi.setPosition(request.from, api.getPosition(playerId))\n\t\tapi.sendMessage(request.from, api.getEntityName(playerId) + " said yes!", { color: "lime" })\n\t} else {\n\t\tapi.sendMessage(request.from, api.getEntityName(playerId) + " said no.", { color: "orange" })\n\t}\n\tapi.sendMessage(playerId, accepted ? "Teleported them to you." : "Said no.", { color: "lime" })\n}\n\n// The admin commands; true when the command was one of them\nfunction adminCommand(playerId, word, rest) {\n\tif (["kick", "tp", "tphere", "announce"].indexOf(word) === -1) {\n\t\treturn false\n\t}\n\tif (!isAdmin(playerId)) {\n\t\tapi.sendMessage(playerId, "Only admins can use /" + word + ".", { color: "orange" })\n\t\treturn true\n\t}\n\tif (word === "announce" && rest !== "") {\n\t\tannounce(rest, "gold")\n\t\treturn true\n\t}\n\tconst target = word === "announce" ? null : findPlayer(rest)\n\tif (target === null || target === playerId) {\n\t\tapi.sendMessage(playerId, "Type /" + word + (word === "announce" ? " and your message." : " and the name of a player in the world."), { color: "orange" })\n\t} else if (word === "kick") {\n\t\tapi.kickPlayer(target, "You were kicked by an admin.")\n\t\tapi.broadcastMessage(api.getEntityName(target) + " was kicked.", { color: "orange" })\n\t} else if (word === "tp") {\n\t\tapi.setPosition(playerId, api.getPosition(target))\n\t} else {\n\t\tapi.setPosition(target, api.getPosition(playerId))\n\t\tapi.sendMessage(target, "An admin brought you to them.", { color: "yellow" })\n\t}\n\treturn true\n}\n\n// /pay <name> <amount>: moves whole coins from the player to another player\nfunction pay(playerId, rest) {\n\tconst words = rest.split(" ").filter((w) => w !== "")\n\tconst amount = Number(words.pop())\n\tconst target = findPlayer(words.join(" "))\n\tif (target !== null && target === playerId) {\n\t\tapi.sendMessage(playerId, "You can\'t pay yourself.", { color: "orange" })\n\t\treturn\n\t}\n\tif (target === null || !Number.isInteger(amount) || amount <= 0) {\n\t\tapi.sendMessage(playerId, "Type /pay, a player\'s name and how many coins, like /pay Alex 10.", { color: "orange" })\n\t\treturn\n\t}\n\t// The coins another prefab or addCoins gives; read straight, so a world without coins doesn\'t get them from this\n\tconst have = api.getCurrencyAmount(playerId, "coins")\n\tconst theirs = api.getCurrencyAmount(target, "coins")\n\tif (have === null || theirs === null) {\n\t\tapi.sendMessage(playerId, "There are no coins in this world to pay with.", { color: "orange" })\n\t} else if (have < amount) {\n\t\tapi.sendMessage(playerId, "You only have " + have + " coins.", { color: "orange" })\n\t} else {\n\t\t// Not addCoins: a double-coins event doesn\'t double coins that are only moved\n\t\tapi.setCurrencyAmount(playerId, "coins", have - amount)\n\t\tapi.setCurrencyAmount(target, "coins", theirs + amount)\n\t\tapi.sendMessage(playerId, "You paid " + api.getEntityName(target) + " " + amount + " coins.", { color: "lime" })\n\t\tapi.sendMessage(target, api.getEntityName(playerId) + " paid you " + amount + " coins!", { color: "lime" })\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst word = words[0].toLowerCase()\n\tconst rest = words.slice(1).join(" ").trim()\n\tif (word === "rules") {\n\t\tshowRules(playerId)\n\t} else if (word === "spawn") {\n\t\tapi.setPosition(playerId, CONFIG.spawnPosition)\n\t\tapi.sendMessage(playerId, "Back to spawn!", { color: "lime" })\n\t} else if (CONFIG.allowTpa && word === "tpa") {\n\t\taskToTeleport(playerId, rest)\n\t} else if (CONFIG.allowTpa && (word === "tpaccept" || word === "tpdeny")) {\n\t\tanswerTeleport(playerId, word === "tpaccept")\n\t} else if (CONFIG.payCommand && word === "pay") {\n\t\tpay(playerId, rest)\n\t} else {\n\t\treturn CONFIG.adminCommands && adminCommand(playerId, word, rest)\n\t}\n\treturn true\n}\n\n// Blocks near spawn: only admins can change them\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z) {\n\tconst radius = CONFIG.spawnProtectRadius\n\tif (radius > 0 && Math.abs(x - CONFIG.spawnPosition[0]) <= radius && Math.abs(z - CONFIG.spawnPosition[2]) <= radius && !isAdmin(playerId)) {\n\t\tapi.sendMessage(playerId, "Blocks near spawn are protected.", { color: "orange" })\n\t\treturn "preventChange"\n\t}\n}\n\n// PvP off stops all damage between players; a player who just respawned can\'t be hurt by players until they hit someone\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (CONFIG.pvp === "off" || api.now() < (protectedUntil[damagedPlayer] || 0)) {\n\t\treturn "preventDamage"\n\t}\n\tdelete protectedUntil[attackingPlayer]\n}\n\n// Every death ends with a respawn request: one nobody was told about (a fall, lava, the void) is told now\nfunction onRespawnRequest(playerId) {\n\tif (CONFIG.killFeed && !killTold[playerId]) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " died", { color: "red" })\n\t}\n\tdelete killTold[playerId]\n\tif (CONFIG.respawnProtectSeconds > 0) {\n\t\tprotectedUntil[playerId] = api.now() + CONFIG.respawnProtectSeconds * 1000\n\t\tapi.sendMessage(playerId, "Other players can\'t hurt you for " + CONFIG.respawnProtectSeconds + " seconds.", { color: "aqua" })\n\t}\n}\n\n// Kill feed: who killed who, told to everyone\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer) {\n\tif (CONFIG.killFeed) {\n\t\tconst killed = api.getEntityName(killedPlayer)\n\t\tapi.broadcastMessage(attackingPlayer === killedPlayer ? killed + " died" : api.getEntityName(attackingPlayer) + " killed " + killed, { color: "red" })\n\t\tkillTold[killedPlayer] = true\n\t}\n}\n\nfunction onMobKilledPlayer(attackingMob, killedPlayer) {\n\tif (CONFIG.killFeed) {\n\t\tapi.broadcastMessage(api.getEntityName(killedPlayer) + " was killed by a " + api.getEntityType(attackingMob), { color: "red" })\n\t\tkillTold[killedPlayer] = true\n\t}\n}\n\n// Mobs that attack on sight and that the world spawned by itself are taken away on the next tick. The world puts its\n// own in the middle of a block, x and z ending in .5 and y whole; code\'s spawns go through this too, so a mob that\n// spawnMobs keeps stays wherever it is\nfunction onWorldSpawnMob(mobId, mobType, x, y, z) {\n\tconst blockMiddle = Math.abs(x % 1) === 0.5 && Math.abs(z % 1) === 0.5 && y % 1 === 0\n\tif (CONFIG.noHostileMobs && blockMiddle && api.getDefaultMobSetting(mobType, "hostilityRadius") > 0) {\n\t\thostileMobsToRemove.push(mobId)\n\t}\n}\n\nfunction tick() {\n\twhile (hostileMobsToRemove.length > 0) {\n\t\tconst mobId = hostileMobsToRemove.pop()\n\t\tif (typeof spawnedMobs === "undefined" || spawnedMobs.indexOf(mobId) === -1) {\n\t\t\tapi.despawnMob(mobId)\n\t\t}\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete tpaRequests[playerId]\n\tdelete protectedUntil[playerId]\n\tdelete killTold[playerId]\n}',
        changeable: [{
          name: "isAdmin",
          about: "who counts as an admin, e.g. also players with a saved VIP value"
        }, {
          name: "adminCommand",
          about: "the admin commands and what each does: add /heal, /give or /fly"
        }],
        setup: "Put your own Bloxd name in admins to get the admin commands, and set spawnPosition to where players should start."
      }],
      nS = [{
        group: "timers",
        code: "// Ready-made timers: runLater(seconds, fn) runs fn once after some seconds, repeatEvery(seconds, fn) runs it every\n// few seconds, and cancelTimer(id) stops either. Time is counted in tick. The list is a var made on first use, so\n// they can be called from the top of the file, above this code.\nvar timerList\nvar nextTimerId\n\nfunction runLater(seconds, fn) {\n\treturn addToTimerList(seconds, 0, fn)\n}\n\nfunction repeatEvery(seconds, fn) {\n\treturn addToTimerList(seconds, Math.max(50, seconds * 1000), fn)\n}\n\nfunction addToTimerList(seconds, everyMs, fn) {\n\tif (!timerList) {\n\t\ttimerList = []\n\t\tnextTimerId = 1\n\t}\n\tconst id = nextTimerId++\n\ttimerList.push({ id: id, msLeft: seconds * 1000, everyMs: everyMs, fn: fn })\n\treturn id\n}\n\nfunction cancelTimer(id) {\n\tconst index = timerList ? timerList.findIndex((timer) => timer.id === id) : -1\n\tif (index !== -1) {\n\t\ttimerList.splice(index, 1)\n\t}\n}\n\nfunction tick(ms) {\n\tif (!timerList) {\n\t\treturn\n\t}\n\tfor (const timer of timerList.slice()) {\n\t\tif (!timerList.includes(timer)) {\n\t\t\tcontinue\n\t\t}\n\t\ttimer.msLeft -= ms\n\t\tif (timer.msLeft > 0) {\n\t\t\tcontinue\n\t\t}\n\t\tif (timer.everyMs > 0) {\n\t\t\ttimer.msLeft += timer.everyMs\n\t\t} else {\n\t\t\tcancelTimer(timer.id)\n\t\t}\n\t\ttimer.fn()\n\t}\n}",
        helpers: [{
          name: "runLater",
          category: "rounds",
          signature: "runLater(seconds, fn)",
          about: "Runs fn once, after some seconds. Returns an id for cancelTimer.",
          example: 'runLater(5, () => api.broadcastMessage("5 seconds later!"))'
        }, {
          name: "repeatEvery",
          category: "rounds",
          signature: "repeatEvery(seconds, fn)",
          about: "Runs fn every few seconds, until cancelTimer(id). Returns the id.",
          example: 'repeatEvery(10, () => spawnMobs("Draugr Zombie", 3, [0, 10, 0], 5))'
        }, {
          name: "cancelTimer",
          category: "rounds",
          signature: "cancelTimer(id)",
          about: "Stops a runLater or repeatEvery before it runs again.",
          example: "cancelTimer(waveTimer)"
        }]
      }, {
        group: "countdown",
        code: '// Ready-made countdown: startCountdown(seconds, onDone) shows the seconds left big in the middle of everyone\'s screen,\n// then "Go!", then runs onDone. cancelCountdown() stops it.\nlet countdownTimer = null\nlet countdownClearTimer = null\n\nfunction startCountdown(seconds, onDone) {\n\tcancelCountdown()\n\tlet left = Math.max(1, Math.round(seconds))\n\tshowCountdownText(String(left))\n\tcountdownTimer = repeatEvery(1, () => {\n\t\tleft--\n\t\tif (left > 0) {\n\t\t\tshowCountdownText(String(left))\n\t\t\treturn\n\t\t}\n\t\tcancelCountdown()\n\t\tshowCountdownText("Go!")\n\t\tcountdownClearTimer = runLater(1, () => {\n\t\t\tcountdownClearTimer = null\n\t\t\tshowCountdownText("")\n\t\t})\n\t\tonDone()\n\t})\n}\n\n// A countdown stopped part way takes its number off the screen too\nfunction cancelCountdown() {\n\tif (countdownTimer === null && countdownClearTimer === null) {\n\t\treturn\n\t}\n\tcancelTimer(countdownTimer)\n\tcancelTimer(countdownClearTimer)\n\tcountdownTimer = null\n\tcountdownClearTimer = null\n\tshowCountdownText("")\n}\n\nfunction showCountdownText(text) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setClientOption(playerId, "middleTextUpper", text)\n\t}\n}',
        uses: ["runLater"],
        helpers: [{
          name: "startCountdown",
          category: "rounds",
          signature: "startCountdown(seconds, onDone)",
          about: 'Shows the seconds left big in the middle of everyone\'s screen (3, 2, 1, "Go!"), then runs onDone.',
          example: "startCountdown(10, () => startRound())"
        }, {
          name: "cancelCountdown",
          category: "rounds",
          signature: "cancelCountdown()",
          about: "Stops the countdown before it ends, e.g. when a player leaves and too few are left.",
          example: "cancelCountdown()"
        }]
      }, {
        group: "rounds",
        code: 'const CONFIG = {\n\tminPlayers: 2, // players needed before a round starts\n\tcountdownSeconds: 10, // countdown before each round\n\troundSeconds: 180, // longest a round lasts, in seconds (0: no limit)\n\tbreakSeconds: 5, // pause after a round before the next countdown\n}\n\n// Ready-made rounds: once CONFIG.minPlayers are in, a countdown runs and a round starts, calling your beginRound()\n// if you define one. endRound(message) ends it (so does the time running out), calling your finishRound(), and the\n// next countdown starts after a break. isRoundRunning() says whether a round is on.\nlet roundPhase = "waiting"\nlet roundMsLeft = 0\n\nfunction isRoundRunning() {\n\treturn roundPhase === "playing"\n}\n\nfunction roundSecondsLeft() {\n\treturn Math.max(0, Math.ceil(roundMsLeft / 1000))\n}\n\nfunction endRound(message) {\n\tif (roundPhase !== "playing") {\n\t\treturn\n\t}\n\troundPhase = "ended"\n\troundMsLeft = 0\n\t// Before finishRound, so an error in it doesn\'t stop the rounds for good\n\trunLater(CONFIG.breakSeconds, () => {\n\t\troundPhase = "waiting"\n\t})\n\tif (message) {\n\t\tannounce(message, "gold")\n\t}\n\tif (typeof finishRound === "function") {\n\t\tfinishRound()\n\t}\n}\n\nfunction tick(ms) {\n\tconst playerCount = api.getPlayerIds().length\n\tif (roundPhase === "waiting" && playerCount >= CONFIG.minPlayers) {\n\t\troundPhase = "countdown"\n\t\tstartCountdown(CONFIG.countdownSeconds, () => {\n\t\t\troundPhase = "playing"\n\t\t\troundMsLeft = CONFIG.roundSeconds * 1000\n\t\t\tif (typeof beginRound === "function") {\n\t\t\t\tbeginRound()\n\t\t\t}\n\t\t})\n\t} else if (roundPhase === "countdown" && playerCount < CONFIG.minPlayers) {\n\t\tcancelCountdown()\n\t\troundPhase = "waiting"\n\t\tannounce("Waiting for more players...", "yellow")\n\t} else if (roundPhase === "playing" && playerCount === 0) {\n\t\t// Everyone left: with no time limit it would never end, and no new round could start\n\t\tendRound()\n\t} else if (roundPhase === "playing" && CONFIG.roundSeconds > 0) {\n\t\troundMsLeft -= ms\n\t\tif (roundMsLeft <= 0) {\n\t\t\tendRound("Time\'s up!")\n\t\t}\n\t}\n}',
        uses: ["startCountdown", "announce", "runLater"],
        helpers: [{
          name: "endRound",
          category: "rounds",
          signature: "endRound(message)",
          about: "Ends the round now, announcing message to everyone. Rounds start by themselves: once CONFIG.minPlayers are in, a countdown runs, then your beginRound() is called; endRound (or CONFIG.roundSeconds running out) calls your finishRound(), and the next countdown follows. Define beginRound and finishRound yourself.",
          example: 'endRound(api.getEntityName(winner) + " wins!")'
        }, {
          name: "isRoundRunning",
          category: "rounds",
          signature: "isRoundRunning()",
          about: "Whether a round is being played (not waiting, counting down or between rounds).",
          example: "if (!isRoundRunning()) return"
        }, {
          name: "roundSecondsLeft",
          category: "rounds",
          signature: "roundSecondsLeft()",
          about: "Seconds left in the round.",
          example: 'setSidebar(playerId, "Time left", roundSecondsLeft())'
        }]
      }, {
        group: "announce",
        code: '// Ready-made announce: announce(text, color) tells everyone in chat and big on their screen for a few seconds.\nlet announceTimer = null\n\nfunction announce(text, color) {\n\tapi.broadcastMessage(text, { color: color || "yellow" })\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setClientOption(playerId, "middleTextLower", text)\n\t}\n\tif (announceTimer !== null) {\n\t\tcancelTimer(announceTimer)\n\t}\n\tannounceTimer = runLater(4, () => {\n\t\tannounceTimer = null\n\t\tfor (const playerId of api.getPlayerIds()) {\n\t\t\tapi.setClientOption(playerId, "middleTextLower", "")\n\t\t}\n\t})\n}',
        uses: ["runLater"],
        helpers: [{
          name: "announce",
          category: "screen",
          signature: "announce(text, color)",
          about: 'Tells everyone, in chat and as text in the middle of their screen for 4 seconds. color is optional, e.g. "lime".',
          example: 'announce("Round 2 starts now!", "orange")'
        }]
      }, {
        group: "sidebar",
        code: '// Ready-made sidebar: setSidebar(playerId, label, value) shows "label: value" on the right of a player\'s screen,\n// one line per label, so coins, kills and time can all show at once. removeSidebar(playerId, label) takes a line away.\nconst sidebarLines = {}\n\nfunction setSidebar(playerId, label, value) {\n\tif (!sidebarLines[playerId]) {\n\t\tsidebarLines[playerId] = {}\n\t}\n\tsidebarLines[playerId][label] = value\n\tshowSidebarLines(playerId)\n}\n\nfunction removeSidebar(playerId, label) {\n\tif (sidebarLines[playerId]) {\n\t\tdelete sidebarLines[playerId][label]\n\t\tshowSidebarLines(playerId)\n\t}\n}\n\nfunction showSidebarLines(playerId) {\n\tconst lines = Object.keys(sidebarLines[playerId]).map((key) => key + ": " + sidebarLines[playerId][key])\n\tapi.setClientOption(playerId, "RightInfoText", lines.join("\\n"))\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete sidebarLines[playerId]\n}',
        helpers: [{
          name: "setSidebar",
          category: "screen",
          signature: "setSidebar(playerId, label, value)",
          about: 'Shows "label: value" on the right of a player\'s screen, one line per label, so several values show at once.',
          example: 'setSidebar(playerId, "Kills", kills[playerId])'
        }, {
          name: "removeSidebar",
          category: "screen",
          signature: "removeSidebar(playerId, label)",
          about: "Takes a setSidebar line away from a player's screen.",
          example: 'removeSidebar(playerId, "Kills")'
        }]
      }, {
        group: "coins",
        code: 'const CONFIG = {\n\tstartCoins: 0, // coins a new player starts with\n\tsaveCoins: false, // true: coins are kept after a player leaves\n}\n\n// Ready-made coins: getCoins(playerId), addCoins(playerId, amount) and spendCoins(playerId, amount), which takes the\n// coins and returns true only when the player has enough. Coins show at the top of the screen.\nfunction setupCoins(playerId) {\n\tif (api.getCurrencyAmount(playerId, "coins") === null) {\n\t\tapi.setCurrency(playerId, "coins", { amount: CONFIG.startCoins, icon: "coins", persistent: CONFIG.saveCoins })\n\t}\n}\n\nfunction getCoins(playerId) {\n\tsetupCoins(playerId)\n\treturn api.getCurrencyAmount(playerId, "coins") || 0\n}\n\nfunction addCoins(playerId, amount) {\n\tsetupCoins(playerId)\n\t// Coins earned count setCoinMultiplier\'s times over (double coins); coins taken away don\'t\n\tconst times = typeof coinMultiplier === "number" && amount > 0 ? coinMultiplier : 1\n\tconst given = Math.round(amount * times)\n\tapi.giveCurrencyAmount(playerId, "coins", given)\n\treturn given\n}\n\n// Every coin addCoins gives counts this many times over (2: double coins), until it is set back to 1\nfunction setCoinMultiplier(times) {\n\tcoinMultiplier = times\n}\n\n// Unset until setCoinMultiplier: a value here would undo a setCoinMultiplier at the top of the file, above this code\nvar coinMultiplier\n\nfunction spendCoins(playerId, amount) {\n\tconst have = getCoins(playerId)\n\tif (have < amount) {\n\t\treturn false\n\t}\n\tapi.setCurrencyAmount(playerId, "coins", have - amount)\n\treturn true\n}\n\nfunction onPlayerJoin(playerId) {\n\tsetupCoins(playerId)\n}',
        helpers: [{
          name: "addCoins",
          category: "economy",
          signature: "addCoins(playerId, amount)",
          about: "Gives a player coins, shown at the top of their screen. CONFIG.startCoins and CONFIG.saveCoins set how many they start with and whether coins are kept after leaving. Returns the coins given, setCoinMultiplier's times over.",
          example: "addCoins(attackingPlayer, 5)"
        }, {
          name: "setCoinMultiplier",
          category: "economy",
          signature: "setCoinMultiplier(times)",
          about: "Every coin addCoins gives counts this many times over, for everyone, until it is set back to 1: 2 is double coins.",
          example: 'randomEvents(300, [["Double coins", () => setCoinMultiplier(2), () => setCoinMultiplier(1)]])'
        }, {
          name: "spendCoins",
          category: "economy",
          signature: "spendCoins(playerId, amount)",
          about: "Takes coins and returns true if the player has enough; returns false and takes nothing if not.",
          example: 'if (spendCoins(playerId, 10)) api.giveItem(playerId, "Diamond Sword", 1)'
        }, {
          name: "getCoins",
          category: "economy",
          signature: "getCoins(playerId)",
          about: "How many coins a player has.",
          example: 'api.sendMessage(playerId, "You have " + getCoins(playerId) + " coins")'
        }]
      }, {
        group: "scores",
        code: 'const CONFIG = {\n\tscoreName: "Score", // what the score is called on the leaderboard\n}\n\n// Ready-made scores: addScore(playerId, amount), getScore(playerId), and resetScores() for a new round. Scores show in\n// a leaderboard column, and bestPlayer() is who has the most.\nconst scores = {}\n\nfunction getScore(playerId) {\n\treturn scores[playerId] || 0\n}\n\nfunction addScore(playerId, amount) {\n\tscores[playerId] = getScore(playerId) + amount\n\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { score: scores[playerId] }, true)\n\treturn scores[playerId]\n}\n\nfunction resetScores() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tscores[playerId] = 0\n\t\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { score: 0 }, true)\n\t}\n}\n\nfunction bestPlayer() {\n\tlet best = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (best === null || getScore(playerId) > getScore(best)) {\n\t\t\tbest = playerId\n\t\t}\n\t}\n\treturn best\n}\n\nfunction onPlayerJoin(playerId) {\n\tapi.setClientOption(playerId, "lobbyLeaderboardInfo", {\n\t\tname: { displayName: "Name", sortPriority: 0 },\n\t\tscore: { displayName: CONFIG.scoreName, sortPriority: 1 },\n\t})\n\taddScore(playerId, 0)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete scores[playerId]\n}',
        helpers: [{
          name: "addScore",
          category: "players",
          signature: "addScore(playerId, amount)",
          about: "Adds to a player's score, shown in a leaderboard column (CONFIG.scoreName). Returns the new score.",
          example: "addScore(attackingPlayer, 1)"
        }, {
          name: "getScore",
          category: "players",
          signature: "getScore(playerId)",
          about: "A player's score.",
          example: 'if (getScore(playerId) >= 10) announce(api.getEntityName(playerId) + " wins!")'
        }, {
          name: "resetScores",
          category: "players",
          signature: "resetScores()",
          about: "Sets everyone's score back to 0, for a new round.",
          example: "resetScores()"
        }, {
          name: "bestPlayer",
          category: "players",
          signature: "bestPlayer()",
          about: "The player with the highest score (null with no players).",
          example: 'announce(api.getEntityName(bestPlayer()) + " wins!")'
        }]
      }, {
        group: "teams",
        code: 'const CONFIG = {\n\tteamNames: ["Red", "Blue"], // the teams, in order\n}\n\n// Ready-made teams: joinSmallestTeam(playerId) puts a player in the team with fewest players and returns its name;\n// getTeam(playerId), teamMembers(team) and sameTeam(playerA, playerB). setTeam(playerId, team) puts a player in a team\n// of your choice (null takes them out of theirs). A player who leaves is taken out of their team.\nconst playerTeams = {}\n\nfunction joinSmallestTeam(playerId) {\n\t// Their old team doesn\'t count them: dealing the teams again evens them out\n\tdelete playerTeams[playerId]\n\tlet smallest = CONFIG.teamNames[0]\n\tfor (const team of CONFIG.teamNames) {\n\t\tif (teamMembers(team).length < teamMembers(smallest).length) {\n\t\t\tsmallest = team\n\t\t}\n\t}\n\tplayerTeams[playerId] = smallest\n\tapi.sendMessage(playerId, "You are on team " + smallest + "!", { color: smallest.toLowerCase() })\n\treturn smallest\n}\n\nfunction setTeam(playerId, team) {\n\tif (team === null || team === undefined || team === "") {\n\t\tdelete playerTeams[playerId]\n\t\treturn null\n\t}\n\t// A team in CONFIG.teamNames is found whatever the capitals: "red" is Red\n\tconst wanted = String(team).trim()\n\tconst known = CONFIG.teamNames.find((name) => name.toLowerCase() === wanted.toLowerCase())\n\tplayerTeams[playerId] = known || wanted\n\treturn playerTeams[playerId]\n}\n\nfunction getTeam(playerId) {\n\treturn playerTeams[playerId] || null\n}\n\nfunction teamMembers(team) {\n\treturn Object.keys(playerTeams).filter((playerId) => playerTeams[playerId] === team)\n}\n\nfunction sameTeam(playerA, playerB) {\n\treturn getTeam(playerA) !== null && getTeam(playerA) === getTeam(playerB)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete playerTeams[playerId]\n}',
        helpers: [{
          name: "joinSmallestTeam",
          category: "teams",
          signature: "joinSmallestTeam(playerId)",
          about: "Puts a player in the team with the fewest players (CONFIG.teamNames) and returns the team's name.",
          example: "const team = joinSmallestTeam(playerId)"
        }, {
          name: "setTeam",
          category: "teams",
          signature: "setTeam(playerId, team)",
          about: "Puts a player in the team called team (any name; one in CONFIG.teamNames is matched whatever the capitals), without telling them. null takes them out of their team. Works with getTeam, teamMembers and sameTeam. Returns the team's name.",
          example: 'setTeam(playerId, "Red")'
        }, {
          name: "getTeam",
          category: "teams",
          signature: "getTeam(playerId)",
          about: "The player's team name, or null.",
          example: 'if (getTeam(playerId) === "Red") api.setPosition(playerId, 10, 5, 0)'
        }, {
          name: "teamMembers",
          category: "teams",
          signature: "teamMembers(team)",
          about: "The ids of the players in a team.",
          example: 'for (const id of teamMembers("Blue")) api.giveItem(id, "Blue Wool", 16)'
        }, {
          name: "sameTeam",
          category: "teams",
          signature: "sameTeam(playerA, playerB)",
          about: "Whether two players are on the same team, e.g. to stop teammates hurting each other.",
          example: 'if (sameTeam(attackingPlayer, damagedPlayer)) return "preventDamage"'
        }]
      }, {
        group: "kit",
        code: '// Ready-made kit: giveKit(playerId, items) empties the player\'s inventory and gives each [item, amount], e.g.\n// giveKit(playerId, [["Diamond Sword", 1], ["Bread", 5]]).\nfunction giveKit(playerId, items) {\n\tapi.clearInventory(playerId)\n\tfor (const entry of items) {\n\t\ttry {\n\t\t\tapi.giveItem(playerId, entry[0], entry[1] || 1)\n\t\t} catch (e) {\n\t\t\t// Not an item name: the rest of the kit is still given\n\t\t}\n\t}\n}',
        helpers: [{
          name: "giveKit",
          category: "players",
          signature: "giveKit(playerId, items)",
          about: "Empties a player's inventory, then gives each [item, amount] in items.",
          example: 'giveKit(playerId, [["Iron Sword", 1], ["Bread", 5]])'
        }]
      }, {
        group: "random",
        code: "// Ready-made random picks: randomInt(min, max) (both included), pickRandom(list) and shuffleList(list), which returns\n// a shuffled copy.\nfunction randomInt(min, max) {\n\treturn min + Math.floor(Math.random() * (max - min + 1))\n}\n\nfunction pickRandom(list) {\n\treturn list[Math.floor(Math.random() * list.length)]\n}\n\nfunction shuffleList(list) {\n\tconst copy = list.slice()\n\tfor (let i = copy.length - 1; i > 0; i--) {\n\t\tconst j = Math.floor(Math.random() * (i + 1))\n\t\tconst swap = copy[i]\n\t\tcopy[i] = copy[j]\n\t\tcopy[j] = swap\n\t}\n\treturn copy\n}",
        helpers: [{
          name: "randomInt",
          category: "world",
          signature: "randomInt(min, max)",
          about: "A random whole number from min to max, both included.",
          example: "const reward = randomInt(1, 10)"
        }, {
          name: "pickRandom",
          category: "world",
          signature: "pickRandom(list)",
          about: "One random entry of a list.",
          example: 'api.giveItem(playerId, pickRandom(["Apple", "Bread", "Diamond"]), 1)'
        }, {
          name: "shuffleList",
          category: "world",
          signature: "shuffleList(list)",
          about: "A shuffled copy of a list, e.g. to pick roles.",
          example: "const order = shuffleList(api.getPlayerIds())"
        }]
      }, {
        group: "teleport",
        code: "// Ready-made teleports: teleportEveryone(position) sends every player to [x, y, z], and randomSpot(center, radius)\n// gives a random [x, y, z] up to radius blocks from center, to spread players out.\nfunction teleportEveryone(position) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setPosition(playerId, position[0], position[1], position[2])\n\t}\n}\n\nfunction randomSpot(center, radius) {\n\tconst angle = Math.random() * Math.PI * 2\n\tconst distance = Math.random() * radius\n\treturn [center[0] + Math.cos(angle) * distance, center[1], center[2] + Math.sin(angle) * distance]\n}",
        helpers: [{
          name: "teleportEveryone",
          category: "players",
          signature: "teleportEveryone(position)",
          about: "Sends every player to [x, y, z].",
          example: "teleportEveryone([0, 20, 0])"
        }, {
          name: "randomSpot",
          category: "world",
          signature: "randomSpot(center, radius)",
          about: "A random [x, y, z] up to radius blocks from center (same y), to spread players or mobs out.",
          example: "const spot = randomSpot([0, 10, 0], 15); api.setPosition(playerId, spot[0], spot[1], spot[2])"
        }]
      }, {
        group: "eliminations",
        code: '// Ready-made eliminations: eliminate(playerId) makes a player a spectator who watches the rest, playersLeft() lists\n// those still in, and bringEveryoneBack() makes everyone a player again for a new round.\n// Each knocked-out player\'s game mode before, to give back\nconst eliminated = {}\n\nfunction eliminate(playerId) {\n\tif (!eliminated[playerId]) {\n\t\teliminated[playerId] = api.getPlayerGamemode(playerId) || "survival"\n\t}\n\tapi.setPlayerGamemode(playerId, "spectator")\n}\n\nfunction playersLeft() {\n\treturn api.getPlayerIds().filter((playerId) => !eliminated[playerId])\n}\n\nfunction bringEveryoneBack() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (eliminated[playerId]) {\n\t\t\tconst before = eliminated[playerId]\n\t\t\tdelete eliminated[playerId]\n\t\t\tapi.setPlayerGamemode(playerId, before === "spectator" ? "survival" : before)\n\t\t}\n\t}\n}\n\nfunction onPlayerJoin(playerId) {\n\t// A game mode stays with the player, so one who left knocked out comes back a player. Set here, not as they leave:\n\t// changing a leaving player\'s game mode stops the code\n\tif (!eliminated[playerId] && api.getPlayerGamemode(playerId) === "spectator") {\n\t\tapi.setPlayerGamemode(playerId, "survival")\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete eliminated[playerId]\n}',
        helpers: [{
          name: "eliminate",
          category: "rounds",
          signature: "eliminate(playerId)",
          about: "Takes a player out of the round: they become a spectator who watches the rest.",
          example: "eliminate(killedPlayer)"
        }, {
          name: "playersLeft",
          category: "rounds",
          signature: "playersLeft()",
          about: "The ids of the players not eliminated.",
          example: 'if (playersLeft().length === 1) announce(api.getEntityName(playersLeft()[0]) + " wins!")'
        }, {
          name: "bringEveryoneBack",
          category: "rounds",
          signature: "bringEveryoneBack()",
          about: "Makes every eliminated player a normal player again, for a new round.",
          example: "bringEveryoneBack()"
        }]
      }, {
        group: "stopwatch",
        code: '// Ready-made stopwatch: startStopwatch(playerId) starts timing a player, stopStopwatch(playerId) stops it and returns\n// the seconds it ran (null if it wasn\'t running), and formatTime(seconds) writes it like 1:05.3.\nconst stopwatchStarts = {}\n\nfunction startStopwatch(playerId) {\n\tstopwatchStarts[playerId] = Date.now()\n}\n\nfunction stopStopwatch(playerId) {\n\tconst started = stopwatchStarts[playerId]\n\tif (started === undefined) {\n\t\treturn null\n\t}\n\tdelete stopwatchStarts[playerId]\n\treturn (Date.now() - started) / 1000\n}\n\nfunction formatTime(seconds) {\n\t// Rounded to tenths first, so 59.96 is 1:00.0 and not 0:60.0\n\tconst tenths = Math.round(seconds * 10)\n\tconst minutes = Math.floor(tenths / 600)\n\tconst rest = ((tenths - minutes * 600) / 10).toFixed(1)\n\treturn minutes + ":" + (rest.length < 4 ? "0" + rest : rest)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete stopwatchStarts[playerId]\n}',
        helpers: [{
          name: "startStopwatch",
          category: "parkour",
          signature: "startStopwatch(playerId)",
          about: "Starts timing a player.",
          example: "startStopwatch(playerId)"
        }, {
          name: "stopStopwatch",
          category: "parkour",
          signature: "stopStopwatch(playerId)",
          about: "Stops timing a player and returns the seconds it ran, or null if it wasn't running.",
          example: "const seconds = stopStopwatch(playerId)"
        }, {
          name: "formatTime",
          category: "parkour",
          signature: "formatTime(seconds)",
          about: 'Seconds written as minutes and seconds, e.g. "1:05.3".',
          example: 'api.sendMessage(playerId, "Your time: " + formatTime(seconds))'
        }]
      }, {
        group: "mobs",
        code: "// Ready-made mobs: spawnMobs(mobType, count, position, spread) spawns mobs around [x, y, z] and returns their ids,\n// mobsAlive() counts those still alive, and removeAllMobs() takes them all away. Mobs must be allowed in the world.\nconst spawnedMobs = []\n\nfunction spawnMobs(mobType, count, position, spread) {\n\tconst ids = []\n\tfor (let i = 0; i < count; i++) {\n\t\tconst x = position[0] + (Math.random() - 0.5) * 2 * (spread || 0)\n\t\tconst z = position[2] + (Math.random() - 0.5) * 2 * (spread || 0)\n\t\tconst mobId = api.attemptSpawnMob(mobType, x, position[1], z)\n\t\tif (mobId !== null && mobId !== undefined) {\n\t\t\tids.push(mobId)\n\t\t\tspawnedMobs.push(mobId)\n\t\t}\n\t}\n\treturn ids\n}\n\nfunction mobsAlive() {\n\treturn spawnedMobs.length\n}\n\nfunction removeAllMobs() {\n\tfor (const mobId of spawnedMobs.slice()) {\n\t\ttry {\n\t\t\tapi.despawnMob(mobId)\n\t\t} catch (e) {\n\t\t\t// Already gone\n\t\t}\n\t}\n\tspawnedMobs.length = 0\n}\n\nfunction onMobDespawned(mobId) {\n\tforgetSpawnedMob(mobId)\n}\n\n// A killed mob despawns after onPlayerKilledMob: forgotten now, so mobsAlive() there counts it gone\nfunction onPlayerKilledMob(playerId, mobId) {\n\tforgetSpawnedMob(mobId)\n}\n\nfunction forgetSpawnedMob(mobId) {\n\tconst index = spawnedMobs.indexOf(mobId)\n\tif (index !== -1) {\n\t\tspawnedMobs.splice(index, 1)\n\t}\n}",
        helpers: [{
          name: "spawnMobs",
          category: "survival",
          signature: "spawnMobs(mobType, count, position, spread)",
          about: "Spawns count mobs around [x, y, z], up to spread blocks away, and returns their ids. Mobs must be allowed in the world.",
          example: 'spawnMobs("Draugr Zombie", 5, [0, 10, 0], 8)'
        }, {
          name: "mobsAlive",
          category: "survival",
          signature: "mobsAlive()",
          about: "How many mobs spawned with spawnMobs are still alive.",
          example: "if (mobsAlive() === 0) startNextWave()"
        }, {
          name: "removeAllMobs",
          category: "survival",
          signature: "removeAllMobs()",
          about: "Takes away every mob spawned with spawnMobs.",
          example: "removeAllMobs()"
        }]
      }, {
        group: "boxes",
        code: "// Ready-made boxes: isInBox(playerId, corner1, corner2) says whether a player is inside the box between two corners\n// [x, y, z], and playersInBox(corner1, corner2) lists who is.\nfunction isInBox(playerId, corner1, corner2) {\n\tconst position = api.getPosition(playerId)\n\tfor (let i = 0; i < 3; i++) {\n\t\tconst low = Math.min(corner1[i], corner2[i])\n\t\tconst high = Math.max(corner1[i], corner2[i]) + 1\n\t\tif (position[i] < low || position[i] >= high) {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}\n\nfunction playersInBox(corner1, corner2) {\n\treturn api.getPlayerIds().filter((playerId) => isInBox(playerId, corner1, corner2))\n}",
        helpers: [{
          name: "TPF",
          category: "world",
          signature: "isInBox(playerId, corner1, corner2)",
          about: "Whether a player is inside the box between two corners [x, y, z], e.g. a finish area or a safe zone.",
          example: 'if (isInBox(playerId, [10, 0, 10], [14, 5, 14])) announce("Someone reached the finish!")'
        }, {
          name: "playersInBox",
          category: "world",
          signature: "playersInBox(corner1, corner2)",
          about: "The ids of the players inside the box between two corners.",
          example: "const onHill = playersInBox([-3, 5, -3], [3, 9, 3])"
        }]
      }, {
        group: "building",
        code: '// Ready-made building: fillBox(corner1, corner2, blockName) fills the box between two corners [x, y, z] (use "Air" to\n// clear it), and buildPlatform(center, radius, blockName) lays a square floor around [x, y, z]. Big boxes are filled in\n// parts of 7 x 7 x 7, as one api.setBlockRect fills at most 360 blocks, and a part whose blocks haven\'t loaded yet is\n// filled once they have.\nfunction fillBox(corner1, corner2, blockName) {\n\tconst low = [0, 1, 2].map((i) => Math.floor(Math.min(corner1[i], corner2[i])))\n\tconst high = [0, 1, 2].map((i) => Math.floor(Math.max(corner1[i], corner2[i])))\n\tconst step = 7\n\tfor (let x = low[0]; x <= high[0]; x += step) {\n\t\tfor (let y = low[1]; y <= high[1]; y += step) {\n\t\t\tfor (let z = low[2]; z <= high[2]; z += step) {\n\t\t\t\tconst from = [x, y, z]\n\t\t\t\tconst to = [Math.min(x + step - 1, high[0]), Math.min(y + step - 1, high[1]), Math.min(z + step - 1, high[2])]\n\t\t\t\tif (api.getBlock(from[0], from[1], from[2]) === "Unloaded" || api.getBlock(to[0], to[1], to[2]) === "Unloaded") {\n\t\t\t\t\twhenWorldLoaded(from, () => whenWorldLoaded(to, () => api.setBlockRect(from, to, blockName)))\n\t\t\t\t} else {\n\t\t\t\t\tapi.setBlockRect(from, to, blockName)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction buildPlatform(center, radius, blockName) {\n\tconst x = Math.floor(center[0])\n\tconst y = Math.floor(center[1])\n\tconst z = Math.floor(center[2])\n\tfillBox([x - radius, y, z - radius], [x + radius, y, z + radius], blockName)\n}',
        uses: ["whenWorldLoaded"],
        helpers: [{
          name: "fillBox",
          category: "building",
          signature: "fillBox(corner1, corner2, blockName)",
          about: 'Fills the box between two corners [x, y, z] with a block ("Air" clears it), however big.',
          example: 'fillBox([0, 0, 0], [20, 0, 20], "Red Wool")'
        }, {
          name: "buildPlatform",
          category: "building",
          signature: "buildPlatform(center, radius, blockName)",
          about: "Lays a square floor of a block around [x, y, z], radius blocks out each way.",
          example: 'buildPlatform([0, 50, 0], 10, "Glass")'
        }]
      }, {
        group: "worldReady",
        code: '// Ready-made world loading: whenWorldLoaded(position, fn) runs fn once the blocks at [x, y, z] have loaded, the first\n// time it can: blocks can\'t be read or built until then (at the start the world may not be loaded yet). The list is\n// a var made on first use, so it can be called from the top of the file.\nvar worldLoadWaits\n\nfunction whenWorldLoaded(position, fn) {\n\tif (!worldLoadWaits) {\n\t\tworldLoadWaits = []\n\t}\n\tworldLoadWaits.push({ position: position, fn: fn })\n}\n\nfunction tick(ms) {\n\tif (!worldLoadWaits) {\n\t\treturn\n\t}\n\tfor (const wait of worldLoadWaits.slice()) {\n\t\tif (api.getBlock(wait.position[0], wait.position[1], wait.position[2]) !== "Unloaded") {\n\t\t\tworldLoadWaits.splice(worldLoadWaits.indexOf(wait), 1)\n\t\t\twait.fn()\n\t\t}\n\t}\n}',
        helpers: [{
          name: "whenWorldLoaded",
          category: "building",
          signature: "whenWorldLoaded(position, fn)",
          about: "Runs fn once the blocks at [x, y, z] have loaded. Build or read blocks at the start of a game inside it: before then nothing can be built.",
          example: 'whenWorldLoaded([0, 50, 0], () => buildPlatform([0, 50, 0], 10, "Glass"))'
        }]
      }, {
        group: "saved",
        code: "// Ready-made saved values: getSaved(playerId, key, fallback) reads a number or text kept after the player leaves\n// (fallback if never saved), setSaved(playerId, key, value) keeps one, and addSaved(playerId, key, amount) adds to a\n// saved number and returns the new total.\nfunction getSaved(playerId, key, fallback) {\n\tconst value = api.getPlayerDbValue(playerId, key)\n\treturn value === null || value === undefined ? fallback : value\n}\n\nfunction setSaved(playerId, key, value) {\n\tapi.setPlayerDbValue(playerId, key, value)\n}\n\nfunction addSaved(playerId, key, amount) {\n\tconst total = Number(getSaved(playerId, key, 0)) + amount\n\tsetSaved(playerId, key, total)\n\treturn total\n}",
        helpers: [{
          name: "getSaved",
          category: "economy",
          signature: "getSaved(playerId, key, fallback)",
          about: "A number or text saved for a player, kept after they leave; fallback if nothing was saved.",
          example: 'const wins = getSaved(playerId, "wins", 0)'
        }, {
          name: "setSaved",
          category: "economy",
          signature: "setSaved(playerId, key, value)",
          about: "Saves a number or text for a player, kept after they leave.",
          example: 'setSaved(playerId, "level", 3)'
        }, {
          name: "addSaved",
          category: "economy",
          signature: "addSaved(playerId, key, amount)",
          about: "Adds to a saved number and returns the new total.",
          example: 'const wins = addSaved(playerId, "wins", 1)'
        }]
      }, {
        group: "health",
        code: '// Ready-made health: healFully(playerId) gives a player full health.\nfunction healFully(playerId) {\n\tapi.setHealth(playerId, api.getClientOption(playerId, "maxHealth"))\n}',
        helpers: [{
          name: "healFully",
          category: "players",
          signature: "healFully(playerId)",
          about: "Gives a player full health.",
          example: "healFully(playerId)"
        }]
      }, {
        group: "commands",
        code: '// Ready-made commands: addCommand(name, fn) makes /name a chat command; fn(playerId, args) gets the words typed after\n// it as a list. Commands it doesn\'t know are left to your own playerCommand.\nvar commandList\n\nfunction addCommand(name, fn) {\n\tif (!commandList) {\n\t\tcommandList = {}\n\t}\n\tlet key = String(name).trim().toLowerCase()\n\tif (key.charAt(0) === "/") {\n\t\tkey = key.slice(1)\n\t}\n\tcommandList[key] = fn\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = String(command).trim().split(" ").filter((word) => word !== "")\n\tif (!commandList || words.length === 0) {\n\t\treturn false\n\t}\n\tlet key = words[0].toLowerCase()\n\tif (key.charAt(0) === "/") {\n\t\tkey = key.slice(1)\n\t}\n\t// Its own commands only: /constructor isn\'t one\n\tif (!Object.prototype.hasOwnProperty.call(commandList, key)) {\n\t\treturn false\n\t}\n\tcommandList[key](playerId, words.slice(1))\n\treturn true\n}',
        helpers: [{
          name: "addCommand",
          category: "players",
          signature: "addCommand(name, fn)",
          about: "Makes /name a chat command: when a player types it, fn(playerId, args) runs, args being the words typed after it as a list. Several commands can be added, from anywhere, even the top of the file; ones it doesn't know go to your own playerCommand. Returns nothing.",
          example: 'addCommand("spawn", (playerId, args) => api.setPosition(playerId, 0, 10, 0))'
        }]
      }, {
        group: "areas",
        code: '// Ready-made areas: protectArea(corner1, corner2) stops everyone breaking or placing blocks in the box between two\n// corners [x, y, z], and noPvpZone(corner1, corner2) stops players hurting each other in one.\nvar protectedAreas\nvar noPvpAreas\n\nfunction protectArea(corner1, corner2) {\n\tif (!protectedAreas) {\n\t\tprotectedAreas = []\n\t}\n\tprotectedAreas.push([corner1.slice(), corner2.slice()])\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setCantChangeBlockRect(playerId, corner1.slice(), corner2.slice())\n\t}\n}\n\nfunction noPvpZone(corner1, corner2) {\n\tif (!noPvpAreas) {\n\t\tnoPvpAreas = []\n\t}\n\tnoPvpAreas.push([corner1.slice(), corner2.slice()])\n}\n\nfunction onPlayerJoin(playerId) {\n\tfor (const area of protectedAreas || []) {\n\t\tapi.setCantChangeBlockRect(playerId, area[0].slice(), area[1].slice())\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tfor (const area of noPvpAreas || []) {\n\t\tif (isInBox(attackingPlayer, area[0], area[1]) || isInBox(damagedPlayer, area[0], area[1])) {\n\t\t\treturn "preventDamage"\n\t\t}\n\t}\n}',
        uses: ["TPF"],
        helpers: [{
          name: "protectArea",
          category: "building",
          signature: "protectArea(corner1, corner2)",
          about: "Stops every player, those who join later too, breaking or placing blocks in the box between two corners [x, y, z]. Can be called at the top of the file. Returns nothing.",
          example: "protectArea([-10, 0, -10], [10, 20, 10])"
        }, {
          name: "noPvpZone",
          category: "pvp",
          signature: "noPvpZone(corner1, corner2)",
          about: "Makes the box between two corners [x, y, z] a safe zone: a player inside it can't hurt or be hurt by other players. Can be called at the top of the file. Returns nothing.",
          example: "noPvpZone([-5, 0, -5], [5, 10, 5])"
        }]
      }, {
        group: "decay",
        code: '// Ready-made disappearing blocks: removeBlockLater(position, seconds, restoreAfterSeconds) turns the block at\n// [x, y, z] into air after some seconds, and puts it back restoreAfterSeconds later (0: never).\nvar blocksToRemove\n\nfunction removeBlockLater(position, seconds, restoreAfterSeconds) {\n\tif (!blocksToRemove) {\n\t\tblocksToRemove = {}\n\t}\n\tconst x = Math.floor(position[0])\n\tconst y = Math.floor(position[1])\n\tconst z = Math.floor(position[2])\n\tconst key = x + "," + y + "," + z\n\t// Standing on a block calls onBlockStand again and again: one removal at a time per block\n\tif (blocksToRemove[key]) {\n\t\treturn false\n\t}\n\tblocksToRemove[key] = true\n\trunLater(seconds, () => {\n\t\tconst block = api.getBlock(x, y, z)\n\t\tif (block === "Air" || block === "Unloaded") {\n\t\t\tdelete blocksToRemove[key]\n\t\t\treturn\n\t\t}\n\t\tapi.setBlock(x, y, z, "Air")\n\t\tif (!restoreAfterSeconds) {\n\t\t\tdelete blocksToRemove[key]\n\t\t\treturn\n\t\t}\n\t\trunLater(restoreAfterSeconds, () => {\n\t\t\tputRemovedBlockBack(x, y, z, block)\n\t\t})\n\t})\n\treturn true\n}\n\nfunction putRemovedBlockBack(x, y, z, block) {\n\tconst now = api.getBlock(x, y, z)\n\tif (now === "Unloaded") {\n\t\t// Nobody is near it: try again once its chunk has loaded\n\t\trunLater(1, () => {\n\t\t\tputRemovedBlockBack(x, y, z, block)\n\t\t})\n\t\treturn\n\t}\n\tdelete blocksToRemove[x + "," + y + "," + z]\n\t// A block someone placed there since stays\n\tif (now === "Air") {\n\t\tapi.setBlock(x, y, z, block)\n\t}\n}',
        uses: ["runLater"],
        helpers: [{
          name: "removeBlockLater",
          category: "building",
          signature: "removeBlockLater(position, seconds, restoreAfterSeconds)",
          about: "Turns the block at [x, y, z] into air after some seconds, and puts it back restoreAfterSeconds after that (0: never), e.g. floors that fall away under players. Returns false, doing nothing, if that block is already waiting to go, so calling it from onBlockStand every tick is fine.",
          example: "removeBlockLater([x, y, z], 0.5, 5)"
        }]
      }, {
        group: "abilities",
        code: '// Ready-made abilities: setAbility(playerId, ability, value) changes how a player moves or how much health they have\n// (doubleJump, maxHealth, speed, jump, fallDamage), and applyBoost(playerId, effect, seconds, level) gives an effect\n// like "Speed" or "Jump Boost" for some seconds.\nfunction setAbility(playerId, ability, value) {\n\tconst name = String(ability).toLowerCase().replace(/[^a-z]/g, "")\n\tif (name === "doublejump" || name === "airjump" || name === "airjumps") {\n\t\tapi.setClientOption(playerId, "airJumpCount", value === true ? 1 : Number(value) || 0)\n\t} else if (name === "maxhealth" || name === "health") {\n\t\tapi.setClientOptions(playerId, { maxHealth: value, initialHealth: value })\n\t\tapi.setHealth(playerId, value)\n\t} else if (name === "speed") {\n\t\tapi.setClientOption(playerId, "speedMultiplier", abilityTimes(value, 1.5))\n\t} else if (name === "jump" || name === "jumpheight") {\n\t\t// A whole number of jump power, 8 being normal\n\t\tapi.setClientOption(playerId, "jumpAmount", Math.round(8 * abilityTimes(value, 1.5)))\n\t} else if (name === "falldamage") {\n\t\tapi.setClientOption(playerId, "fallDamage", value === true)\n\t} else if (name === "gravity" || name === "lowgravity") {\n\t\tapi.setClientOption(playerId, "gravityMultiplier", abilityTimes(value, 0.4))\n\t} else if (name === "fly" || name === "flying") {\n\t\tapi.setClientOption(playerId, "creative", value === true)\n\t} else {\n\t\tthrow new Error("setAbility has no ability " + ability + ": use doubleJump, maxHealth, speed, jump, fallDamage, gravity or fly")\n\t}\n}\n\n// How many times normal an ability is: true turns it on (onTimes), false back to normal, else the number given\nfunction abilityTimes(value, onTimes) {\n\tif (value === true) {\n\t\treturn onTimes\n\t}\n\tif (value === false) {\n\t\treturn 1\n\t}\n\treturn Math.max(0, Number(value) || 0)\n}\n\nfunction applyBoost(playerId, effect, seconds, level) {\n\tconst names = ["Speed", "Jump Boost", "Damage", "Damage Reduction", "Haste", "Health Regen", "Invisible", "Slowness", "Weakness", "Poisoned", "Double Jump", "Bounciness", "Wall Climbing", "Air Walk", "Feather Falling", "Night Vision", "Glowing", "Heat Resistance", "Lifesteal", "Thorns", "Blindness", "Frozen"]\n\tconst other = { jump: "Jump Boost", strength: "Damage", resistance: "Damage Reduction", regen: "Health Regen", regeneration: "Health Regen", invisibility: "Invisible", poison: "Poisoned", slow: "Slowness" }\n\tconst wanted = String(effect).toLowerCase().replace(/[^a-z]/g, "")\n\tconst name = other[wanted] || names.find((known) => known.toLowerCase().replace(/[^a-z]/g, "") === wanted) || effect\n\tapi.applyEffect(playerId, name, seconds * 1000, { inbuiltLevel: level || 1 })\n}',
        helpers: [{
          name: "setAbility",
          category: "players",
          signature: "setAbility(playerId, ability, value)",
          about: 'Changes a player until they leave. ability is "doubleJump" (true, or how many jumps in the air), "maxHealth" (a number; their health is filled to it), "speed" (1 normal, 2 twice as fast), "jump" (1 normal, 1.5 higher), "fallDamage" (true or false), "gravity" (1 normal, 0.4 floaty like the moon) or "fly" (true or false). Returns nothing.',
          example: 'setAbility(playerId, "doubleJump", true)'
        }, {
          name: "applyBoost",
          category: "players",
          signature: "applyBoost(playerId, effect, seconds, level)",
          about: 'Gives a player an effect for some seconds, shown as an icon: "Speed", "Jump Boost", "Damage", "Damage Reduction", "Health Regen", "Invisible", "Slowness", "Double Jump" and more. level is optional (1 is normal, higher is stronger). Returns nothing.',
          example: 'applyBoost(playerId, "Speed", 10, 2)'
        }]
      }, {
        group: "loot",
        code: '// Ready-made loot chests: fillChest(position, lootTable) empties the chest at [x, y, z] and puts in each [item, min,\n// max] of the table, a random amount from min to max; refillChestsEvery(seconds, positions, lootTable) fills chests\n// now and again every few seconds. A chest whose part of the world isn\'t loaded yet is filled once it is.\nvar chestsToFill\nvar chestWaitMs\n\nfunction fillChest(position, lootTable) {\n\tconst x = Math.floor(position[0])\n\tconst y = Math.floor(position[1])\n\tconst z = Math.floor(position[2])\n\tconst key = x + "," + y + "," + z\n\tconst block = api.getBlock(x, y, z)\n\tif (block === "Unloaded") {\n\t\tif (!chestsToFill) {\n\t\t\tchestsToFill = {}\n\t\t}\n\t\tchestsToFill[key] = { position: [x, y, z], lootTable: lootTable }\n\t\treturn false\n\t}\n\tif (chestsToFill) {\n\t\tdelete chestsToFill[key]\n\t}\n\t// A spot with no chest gets one, so the loot is never hidden in another block\n\tif (block.indexOf("Chest") === -1) {\n\t\tapi.setBlock(x, y, z, "Chest")\n\t}\n\tconst items = api.getStandardChestItems([x, y, z])\n\tfor (let i = 0; i < items.length; i++) {\n\t\tif (items[i]) {\n\t\t\tapi.setStandardChestItemSlot([x, y, z], i, "Air")\n\t\t}\n\t}\n\tfor (const entry of lootTable) {\n\t\tconst low = entry[1] === undefined ? 1 : entry[1]\n\t\tconst high = entry[2] === undefined ? low : entry[2]\n\t\tconst amount = low + Math.floor(Math.random() * (high - low + 1))\n\t\tif (amount > 0) {\n\t\t\ttry {\n\t\t\t\tapi.giveStandardChestItem([x, y, z], entry[0], amount)\n\t\t\t} catch (e) {\n\t\t\t\t// Not an item name: the rest of the loot is still put in\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}\n\nfunction refillChestsEvery(seconds, positions, lootTable) {\n\t// One position [x, y, z] works as well as a list of them\n\tconst list = typeof positions[0] === "number" ? [positions] : positions\n\tconst fillAll = () => {\n\t\tfor (const position of list) {\n\t\t\tfillChest(position, lootTable)\n\t\t}\n\t}\n\tfillAll()\n\treturn repeatEvery(seconds, fillAll)\n}\n\nfunction tick(ms) {\n\tif (!chestsToFill) {\n\t\treturn\n\t}\n\t// Chests waiting for their part of the world are tried once a second\n\tchestWaitMs = (chestWaitMs || 0) + ms\n\tif (chestWaitMs < 1000) {\n\t\treturn\n\t}\n\tchestWaitMs = 0\n\tfor (const key of Object.keys(chestsToFill)) {\n\t\tfillChest(chestsToFill[key].position, chestsToFill[key].lootTable)\n\t}\n}',
        uses: ["repeatEvery"],
        helpers: [{
          name: "fillChest",
          category: "survival",
          signature: "fillChest(position, lootTable)",
          about: "Empties the chest at [x, y, z] (placing a Chest there if there is none), then puts in each [item, min, max] of lootTable, a random amount from min to max. Returns true, or false when that part of the world isn't loaded yet: it is then filled once it is.",
          example: 'fillChest([10, 5, 10], [["Bread", 2, 5], ["Iron Sword", 0, 1], ["Arrow", 5, 15]])'
        }, {
          name: "refillChestsEvery",
          category: "survival",
          signature: "refillChestsEvery(seconds, positions, lootTable)",
          about: "Fills every chest in positions (a list of [x, y, z]) with fillChest now, then again every few seconds. Can be called at the top of the file. Returns an id for cancelTimer.",
          example: 'refillChestsEvery(60, [[10, 5, 10], [-10, 5, -10]], [["Bread", 2, 5], ["Iron Sword", 0, 1]])'
        }]
      }, {
        group: "votes",
        code: '// Ready-made votes: startVote(options, seconds, onDone) asks everyone to vote with /vote and a number or name, then\n// tells everyone the winner and runs onDone(winner). A tie is picked at random from the tied options.\nvar currentVote\n\nfunction startVote(options, seconds, onDone) {\n\tif (currentVote) {\n\t\tcancelTimer(currentVote.timer)\n\t}\n\tcurrentVote = { options: options.slice(), choices: {}, onDone: onDone, timer: null }\n\tcurrentVote.timer = runLater(seconds, finishCurrentVote)\n\tapi.broadcastMessage("Vote now! Type /vote and a number: " + currentVoteOptionsText(), { color: "aqua" })\n}\n\nfunction currentVoteOptionsText() {\n\treturn currentVote.options.map((option, i) => (i + 1) + ". " + option).join(", ")\n}\n\nfunction finishCurrentVote() {\n\tconst vote = currentVote\n\tcurrentVote = null\n\tconst counts = vote.options.map(() => 0)\n\tfor (const playerId of Object.keys(vote.choices)) {\n\t\tcounts[vote.choices[playerId]]++\n\t}\n\tconst most = Math.max.apply(null, counts)\n\tconst tied = vote.options.filter((option, i) => counts[i] === most)\n\tconst winner = tied[Math.floor(Math.random() * tied.length)]\n\tif (most === 0) {\n\t\tapi.broadcastMessage("Nobody voted, so " + winner + " was picked!", { color: "aqua" })\n\t} else {\n\t\tapi.broadcastMessage(winner + " wins the vote with " + most + (most === 1 ? " vote!" : " votes!"), { color: "aqua" })\n\t}\n\tif (vote.onDone) {\n\t\tvote.onDone(winner)\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = String(command).trim().split(" ").filter((word) => word !== "")\n\tif (words.length === 0 || words[0].toLowerCase().split("/").join("") !== "vote") {\n\t\treturn false\n\t}\n\tif (!currentVote) {\n\t\tapi.sendMessage(playerId, "There\'s no vote right now.")\n\t\treturn true\n\t}\n\tconst wanted = words.slice(1).join(" ").toLowerCase()\n\tlet index = Number(wanted) - 1\n\tif (!(index >= 0 && index < currentVote.options.length && Math.floor(index) === index)) {\n\t\tindex = currentVote.options.findIndex((option) => String(option).toLowerCase() === wanted)\n\t}\n\tif (index === -1 && wanted !== "") {\n\t\tindex = currentVote.options.findIndex((option) => String(option).toLowerCase().startsWith(wanted))\n\t}\n\tif (index === -1) {\n\t\tapi.sendMessage(playerId, "Type /vote and a number: " + currentVoteOptionsText())\n\t\treturn true\n\t}\n\tcurrentVote.choices[playerId] = index\n\tapi.sendMessage(playerId, "You voted for " + currentVote.options[index] + "!", { color: "lime" })\n\treturn true\n}\n\nfunction onPlayerJoin(playerId) {\n\tif (currentVote) {\n\t\tapi.sendMessage(playerId, "There\'s a vote on! Type /vote and a number: " + currentVoteOptionsText(), { color: "aqua" })\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tif (currentVote) {\n\t\tdelete currentVote.choices[playerId]\n\t}\n}',
        uses: ["runLater"],
        helpers: [{
          name: "startVote",
          category: "rounds",
          signature: "startVote(options, seconds, onDone)",
          about: "Tells everyone the options and lets them vote for some seconds with /vote and a number or name (a new vote replaces one still running). Then it tells everyone the winner (a tie or no votes picks at random) and runs onDone(winner), winner being the option's text. Returns nothing.",
          example: 'startVote(["Desert", "Snow", "Jungle"], 20, (winner) => announce(winner + " map next!"))'
        }]
      }, {
        group: "items",
        code: '// Ready-made items: whenItemUsed(itemName, fn, cooldownSeconds) runs fn(playerId, x, y, z, targetId) when a player\n// clicks or taps holding that item; x, y, z is the block they aim at (undefined if none) and targetId the player or\n// mob they clicked (null if none). dropItem(position, itemName, amount) drops items at [x, y, z] for players to pick\n// up, and itemRain(itemNames, count, center, radius) drops random items from the sky around [x, y, z]. The list is a\n// var made on first use, so whenItemUsed can be called from the top of the file.\nvar itemUses\nvar itemUsedAt\n\nfunction whenItemUsed(itemName, fn, cooldownSeconds) {\n\tif (!itemUses) {\n\t\titemUses = []\n\t\titemUsedAt = {}\n\t}\n\tconst seconds = cooldownSeconds === undefined ? 0.25 : cooldownSeconds\n\tconst use = { item: String(itemName).toLowerCase(), fn: fn, cooldownMs: seconds * 1000 }\n\t// One use per item: called again (on each join or round) it replaces the last, rather than running fn twice a click\n\tconst index = itemUses.findIndex((other) => other.item === use.item)\n\tif (index === -1) {\n\t\titemUses.push(use)\n\t} else {\n\t\titemUses[index] = use\n\t}\n}\n\nfunction onPlayerClick(playerId, wasAltClick, x, y, z, block, targetEId) {\n\tconst held = api.getHeldItem(playerId)\n\tif (!itemUses || !held) {\n\t\treturn\n\t}\n\tif (!itemUsedAt[playerId]) {\n\t\titemUsedAt[playerId] = {}\n\t}\n\tconst now = Date.now()\n\titemUses.forEach((use, index) => {\n\t\t// A held button clicks again and again: one use per cooldown\n\t\tconst last = itemUsedAt[playerId][index]\n\t\tif (use.item !== held.name.toLowerCase() || (last !== undefined && now - last < use.cooldownMs)) {\n\t\t\treturn\n\t\t}\n\t\titemUsedAt[playerId][index] = now\n\t\tuse.fn(playerId, x, y, z, targetEId === undefined ? null : targetEId)\n\t})\n}\n\nfunction dropItem(position, itemName, amount) {\n\t// dropItem(x, y, z, itemName, amount) and a player\'s id for the position work too\n\tif (typeof position === "number") {\n\t\treturn dropItem([arguments[0], arguments[1], arguments[2]], arguments[3], arguments[4])\n\t}\n\tconst where = typeof position === "string" ? api.getPosition(position) : position\n\tlet left = Math.min(Math.max(1, Math.floor(amount || 1)), 999 * 10)\n\tlet dropId = null\n\t// One drop holds at most 999\n\twhile (left > 0) {\n\t\tdropId = api.createItemDrop(where[0], where[1], where[2], itemName, Math.min(left, 999))\n\t\tleft -= 999\n\t}\n\treturn dropId\n}\n\nfunction itemRain(itemNames, count, center, radius) {\n\tconst names = typeof itemNames === "string" ? [itemNames] : itemNames\n\tconst where = typeof center === "string" ? api.getPosition(center) : center\n\tlet dropped = 0\n\tfor (let i = 0; i < Math.min(count, 200); i++) {\n\t\tconst angle = Math.random() * Math.PI * 2\n\t\tconst distance = Math.sqrt(Math.random()) * (radius || 0)\n\t\tconst pick = names[Math.floor(Math.random() * names.length)]\n\t\t// An entry can be a name or [name, amount]\n\t\tconst name = Array.isArray(pick) ? pick[0] : pick\n\t\tconst amount = Array.isArray(pick) ? pick[1] || 1 : 1\n\t\tif (api.createItemDrop(where[0] + Math.cos(angle) * distance, where[1] + 15, where[2] + Math.sin(angle) * distance, name, amount) !== null) {\n\t\t\tdropped++\n\t\t}\n\t}\n\treturn dropped\n}\n\nfunction onPlayerLeave(playerId) {\n\tif (itemUsedAt) {\n\t\tdelete itemUsedAt[playerId]\n\t}\n}',
        helpers: [{
          name: "whenItemUsed",
          category: "players",
          signature: "whenItemUsed(itemName, fn, cooldownSeconds)",
          about: "Runs fn(playerId, x, y, z, targetId) each time a player clicks or taps while holding that item: x, y, z is the block they aim at (undefined if none), targetId the player or mob they clicked (null if none). cooldownSeconds is optional (0.25 if left out): how long before the same player can use it again. It is not a callback to define: call it, from anywhere, even the top of the file. Returns nothing.",
          example: 'whenItemUsed("Gold Bar", (playerId) => api.applyEffect(playerId, "Speed", 5000, { inbuiltLevel: 1 }))'
        }, {
          name: "dropItem",
          category: "world",
          signature: "dropItem(position, itemName, amount)",
          about: "Drops amount of an item at [x, y, z] (or at a player, given their id) for players to pick up. Returns the drop's id, or null when the world has too many drops.",
          example: 'dropItem(api.getPosition(playerId), "Diamond", 3)'
        }, {
          name: "itemRain",
          category: "world",
          signature: "itemRain(itemNames, count, center, radius)",
          about: "Drops count items from the sky (15 blocks up), each a random one of itemNames, spread up to radius blocks around center [x, y, z] (or a player's id). Returns how many were dropped.",
          example: 'itemRain(["Diamond", "Gold Bar", "Apple"], 20, [0, 10, 0], 8)'
        }]
      }, {
        group: "projectiles",
        code: '// Ready-made projectiles: shootProjectile(playerId, options) shoots a real projectile from a player\'s eyes the way they\n// look; options (each optional) are item (any throwable: "Arrow", "Snowball", "Fireball"...), speed and gravity (1 is\n// normal), damage (what a hit does) and onHit(targetId), run when it hits a player or mob. pullTowards(playerId,\n// position, strength) flings a player towards [x, y, z], and aimedBlock(playerId, range) is the [x, y, z] of the block\n// they look at, up to range blocks away (null if none). The list is a var made on first use.\nvar shotList\nvar blastList\n\nfunction shootProjectile(playerId, options) {\n\tconst o = options || {}\n\tconst item = o.item || "Arrow"\n\tconst facing = api.getPlayerFacingInfo(playerId)\n\tconst gravity = o.gravity === undefined ? 1 : Math.max(0, o.gravity)\n\tconst shotId = api.attemptCreateThrowable(playerId, item, facing.camPos, facing.dir, o.speed || 1, 1, gravity)\n\tif (shotId !== null && (o.damage !== undefined || o.onHit)) {\n\t\tif (!shotList) {\n\t\t\tshotList = []\n\t\t}\n\t\tshotList.push({ id: shotId, playerId: playerId, item: item, damage: o.damage, onHit: o.onHit, until: Date.now() + 10000 })\n\t}\n\treturn shotId\n}\n\n// What the engine calls the blast of a shot that explodes: "Fireball Block", but "Rocket" for an RPG\'s\nfunction shotBlastName(item) {\n\tconst named = { "RPG": "Rocket", "Obby RPG": "Obby Rocket", "Super RPG": "Super Rocket", "Grenade Launcher": "Grenade", "Capitano Grenade": "Capitano Grenade" }\n\treturn named[item] || item + " Block"\n}\n\n// The engine says who hit whom with which item: the shooter\'s oldest flying shot of that item is the one that hit. A\n// shot that explodes hurts again by its blast\'s name: for a second after it lands, its blast does the shot\'s damage\n// once to each player or mob the shot itself didn\'t hit, and nothing more. A shooter in their own blast takes the\n// engine\'s damage\nfunction shotHitTarget(attacker, target, withItem) {\n\tconst now = Date.now()\n\tif (blastList) {\n\t\tblastList = blastList.filter((blast) => blast.until > now)\n\t}\n\tconst blastNow = () => blastList && blastList.find((one) => one.playerId === attacker && shotBlastName(one.item) === withItem)\n\t// A shot exploding on the ground hurts before onPlayerThrowableHitTerrain says it landed: it lands now, unless this is\n\t// a blast that already landed reaching one more\n\tconst exploded = shotList && !blastNow() ? shotList.find((one) => one.playerId === attacker && shotBlastName(one.item) === withItem) : null\n\tif (exploded) {\n\t\tshotList.splice(shotList.indexOf(exploded), 1)\n\t\tshotLanded(exploded, null)\n\t}\n\tif (target === attacker) {\n\t\treturn undefined\n\t}\n\tconst blast = blastNow()\n\tif (blast) {\n\t\tif (blast.hurt.includes(target)) {\n\t\t\treturn blast.damage === undefined ? undefined : "preventDamage"\n\t\t}\n\t\tblast.hurt.push(target)\n\t\tif (blast.onHit) {\n\t\t\tblast.onHit(target)\n\t\t}\n\t\treturn blast.damage\n\t}\n\tif (!shotList) {\n\t\treturn undefined\n\t}\n\tshotList = shotList.filter((shot) => shot.until > now)\n\tconst shot = shotList.find((one) => one.playerId === attacker && one.item === withItem)\n\tif (!shot) {\n\t\treturn undefined\n\t}\n\tshotList.splice(shotList.indexOf(shot), 1)\n\tshotLanded(shot, target)\n\tif (shot.onHit) {\n\t\tshot.onHit(target)\n\t}\n\treturn shot.damage\n}\n\n// A shot that hit someone or the ground: kept a second for its blast, if it explodes\nfunction shotLanded(shot, target) {\n\tconst now = Date.now()\n\tblastList = (blastList || []).filter((blast) => blast.until > now)\n\tblastList.push({ playerId: shot.playerId, item: shot.item, damage: shot.damage, onHit: shot.onHit, hurt: target === null ? [] : [target], until: now + 1000 })\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer, damageDealt, withItem) {\n\treturn shotHitTarget(attackingPlayer, damagedPlayer, withItem)\n}\n\nfunction onPlayerDamagingMob(playerId, mobId, damageDealt, withItem) {\n\treturn shotHitTarget(playerId, mobId, withItem)\n}\n\nfunction onPlayerThrowableHitTerrain(playerId, throwableName, thrownEntityId) {\n\tif (shotList) {\n\t\tconst landed = shotList.find((shot) => shot.id === thrownEntityId)\n\t\tshotList = shotList.filter((shot) => shot.id !== thrownEntityId)\n\t\tif (landed) {\n\t\t\tshotLanded(landed, null)\n\t\t}\n\t}\n}\n\nfunction pullTowards(playerId, position, strength) {\n\tconst target = typeof position === "string" ? api.getPosition(position) : position\n\tconst from = api.getPosition(playerId)\n\tconst dx = target[0] - from[0]\n\tconst dy = target[1] - from[1]\n\tconst dz = target[2] - from[2]\n\tconst length = Math.sqrt(dx * dx + dy * dy + dz * dz)\n\tif (length < 0.5) {\n\t\treturn\n\t}\n\tconst speed = Math.min(Math.max(strength || 20, 1), 100)\n\t// Aimed a little high, as gravity pulls them down on the way (half of 20 blocks a second, for each second flying)\n\tconst lift = Math.min(10 * (length / speed), speed)\n\tapi.setVelocity(playerId, (dx / length) * speed, (dy / length) * speed + lift, (dz / length) * speed)\n\tapi.preventFallDamageNextGrounding(playerId)\n}\n\nfunction aimedBlock(playerId, range) {\n\tconst facing = api.getPlayerFacingInfo(playerId)\n\tconst far = range || 50\n\tfor (let step = 0.5; step <= far; step += 0.25) {\n\t\tconst x = Math.floor(facing.camPos[0] + facing.dir[0] * step)\n\t\tconst y = Math.floor(facing.camPos[1] + facing.dir[1] * step)\n\t\tconst z = Math.floor(facing.camPos[2] + facing.dir[2] * step)\n\t\tconst block = api.getBlock(x, y, z)\n\t\tif (block === "Unloaded") {\n\t\t\treturn null\n\t\t}\n\t\tif (block !== "Air") {\n\t\t\treturn [x, y, z]\n\t\t}\n\t}\n\treturn null\n}',
        helpers: [{
          name: "shootProjectile",
          category: "pvp",
          signature: "shootProjectile(playerId, options)",
          about: 'Shoots a real projectile from the player\'s eyes where they look. options (all optional): item (a throwable: "Arrow" (default), "Snowball", "Fireball", "Iceball"...), speed and gravity (1 normal, 2 twice as much, 0 gravity flies straight), damage (what a hit does to a player or mob; an exploding shot, a Fireball, does it once to each one its blast reaches) and onHit(targetId), run when it hits one. Returns the projectile\'s id, or null. Goes well with whenItemUsed for guns and wands.',
          example: 'shootProjectile(playerId, { item: "Fireball", speed: 2, damage: 20 })'
        }, {
          name: "pullTowards",
          category: "players",
          signature: "pullTowards(playerId, position, strength)",
          about: "Flings a player towards [x, y, z] (or towards another player or mob, given their id), strength being the speed (20 if left out), with no fall damage when they land, e.g. for a grappling hook or a launch pad. Returns nothing.",
          example: "pullTowards(playerId, [10, 20, 10], 25)"
        }, {
          name: "aimedBlock",
          category: "world",
          signature: "aimedBlock(playerId, range)",
          about: "The [x, y, z] of the block a player is looking at, up to range blocks away (50 if left out), or null if there is none in range.",
          example: "const spot = aimedBlock(playerId, 40)"
        }]
      }, {
        group: "fall",
        code: "// Ready-made falling: whenFallBelow(y, onFall) calls onFall(playerId) when a player's height drops below y, once: again\n// only after they have been back above y. One timer checks everyone a few times a second, however many whenFallBelow\n// there are. The list is a var made on first use, so it can be called from the top of the file.\nvar fallWatches\nvar fallTimer\n\nfunction whenFallBelow(y, onFall) {\n\tif (!fallWatches) {\n\t\tfallWatches = []\n\t}\n\tfallWatches.push({ y: Number(y), fn: onFall, fallen: {} })\n\tif (fallTimer === undefined) {\n\t\tfallTimer = repeatEvery(0.25, checkFallWatches)\n\t}\n}\n\nfunction checkFallWatches() {\n\tfor (const watch of fallWatches) {\n\t\tconst playerIds = api.getPlayerIds()\n\t\t// A player who left is forgotten, so someone with the same id coming back is checked afresh\n\t\tfor (const playerId of Object.keys(watch.fallen)) {\n\t\t\tif (!playerIds.includes(playerId)) {\n\t\t\t\tdelete watch.fallen[playerId]\n\t\t\t}\n\t\t}\n\t\tfor (const playerId of playerIds) {\n\t\t\t// A player can leave while onFall runs for another\n\t\t\tif (!api.getPlayerIds().includes(playerId)) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tif (api.getPosition(playerId)[1] >= watch.y) {\n\t\t\t\tdelete watch.fallen[playerId]\n\t\t\t} else if (!watch.fallen[playerId]) {\n\t\t\t\twatch.fallen[playerId] = true\n\t\t\t\twatch.fn(playerId)\n\t\t\t}\n\t\t}\n\t}\n}",
        uses: ["repeatEvery"],
        helpers: [{
          name: "whenFallBelow",
          category: "players",
          signature: "whenFallBelow(y, onFall)",
          about: "Runs onFall(playerId) when a player's height drops below y (they fell off the map or into the void): once, and again only after they were back above y, e.g. after you teleported them. Players who join below y count too. It checks a few times a second, so it is cheap to call several times with different y. It is not a callback to define: call it, from anywhere, even the top of the file (once, not again every round). Returns nothing.",
          example: "whenFallBelow(0, (playerId) => api.setPosition(playerId, 0, 10, 0))"
        }]
      }, {
        group: "enterBox",
        code: "// Ready-made zones: whenEnterBox(corner1, corner2, onEnter, onLeave) calls onEnter(playerId) when a player comes into\n// the box between two corners, and onLeave(playerId) (if given) when they go out of it. One timer checks everyone a few\n// times a second, however many boxes there are. The list is a var made on first use, so it can be called from the top\n// of the file.\nvar boxWatches\nvar boxTimer\n\nfunction whenEnterBox(corner1, corner2, onEnter, onLeave) {\n\tif (!boxWatches) {\n\t\tboxWatches = []\n\t}\n\tboxWatches.push({ corner1: corner1, corner2: corner2, onEnter: onEnter, onLeave: onLeave, inside: {} })\n\tif (boxTimer === undefined) {\n\t\tboxTimer = repeatEvery(0.25, checkBoxWatches)\n\t}\n}\n\nfunction checkBoxWatches() {\n\tfor (const watch of boxWatches) {\n\t\tconst playerIds = api.getPlayerIds()\n\t\t// A player who left is forgotten (onLeave isn't called for them), so coming back counts as coming in\n\t\tfor (const playerId of Object.keys(watch.inside)) {\n\t\t\tif (!playerIds.includes(playerId)) {\n\t\t\t\tdelete watch.inside[playerId]\n\t\t\t}\n\t\t}\n\t\tfor (const playerId of playerIds) {\n\t\t\t// A player can leave while onEnter runs for another\n\t\t\tif (!api.getPlayerIds().includes(playerId)) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tconst inside = isInBox(playerId, watch.corner1, watch.corner2)\n\t\t\tif (inside && !watch.inside[playerId]) {\n\t\t\t\twatch.inside[playerId] = true\n\t\t\t\twatch.onEnter(playerId)\n\t\t\t} else if (!inside && watch.inside[playerId]) {\n\t\t\t\tdelete watch.inside[playerId]\n\t\t\t\tif (watch.onLeave) {\n\t\t\t\t\twatch.onLeave(playerId)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",
        uses: ["repeatEvery", "TPF"],
        helpers: [{
          name: "whenEnterBox",
          category: "world",
          signature: "whenEnterBox(corner1, corner2, onEnter, onLeave)",
          about: "Runs onEnter(playerId) when a player comes into the box between two corners, and onLeave(playerId) (optional) when they go out of it: for zones, teleporter pads, AFK zones, shop or safe areas, a finish line. Not called for a player leaving the game. It checks a few times a second. It is not a callback to define: call it, from anywhere, even the top of the file (once per box). Returns nothing.",
          example: "whenEnterBox([10, 0, 10], [12, 3, 12], (playerId) => api.setPosition(playerId, 100, 20, 100))"
        }]
      }, {
        group: "findPlayer",
        code: '// Ready-made findPlayer(nameStart): the id of the player whose name is, or else starts with, the text (capitals don\'t\n// matter, a leading @ is ignored), or null if nobody\'s does. For commands like /tp name.\nfunction findPlayer(nameStart) {\n\tlet wanted = String(nameStart === undefined || nameStart === null ? "" : nameStart).trim().toLowerCase()\n\tif (wanted.charAt(0) === "@") {\n\t\twanted = wanted.slice(1)\n\t}\n\tif (wanted === "") {\n\t\treturn null\n\t}\n\tlet found = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst name = String(api.getEntityName(playerId)).toLowerCase()\n\t\tif (name === wanted) {\n\t\t\treturn playerId\n\t\t}\n\t\tif (found === null && name.startsWith(wanted)) {\n\t\t\tfound = playerId\n\t\t}\n\t}\n\treturn found\n}',
        helpers: [{
          name: "findPlayer",
          category: "players",
          signature: "findPlayer(nameStart)",
          about: "The id of the player whose name is, or else starts with, the text (capitals don't matter, a leading @ is ignored), or null if there is none, so always check for null. For commands like /tp name and /give name.",
          example: 'addCommand("tp", (playerId, args) => { const friend = findPlayer(args[0]); if (friend) api.setPosition(playerId, ...api.getPosition(friend)) })'
        }]
      }, {
        group: "randomEvents",
        code: '// Ready-made random events: randomEvents(everySeconds, events) picks one of the events every few seconds (never the one\n// just before) and announces it. An event is { name, start, end, seconds }: start() runs when it begins, end() (if any)\n// when it is over, seconds is how long it lasts (30 if it has an end, else it is over at once). isEventOn(name) says\n// whether that event is on now (isEventOn() with no name: whether any is). The list is a var made on first use.\nvar eventsRunning\n\nfunction randomEvents(everySeconds, events) {\n\tif (!eventsRunning) {\n\t\teventsRunning = {}\n\t}\n\t// [name, start] and [name, start, end] work too\n\tconst list = events.map((entry) => {\n\t\treturn Array.isArray(entry) ? { name: entry[0], start: entry[1], end: entry[2] } : entry\n\t})\n\tlet lastEvent = null\n\tlet busy = false\n\treturn repeatEvery(everySeconds, () => {\n\t\tif (busy || list.length === 0 || api.getPlayerIds().length === 0) {\n\t\t\treturn\n\t\t}\n\t\t// Never the event just before: the same one, not the same name, so events without names still take turns\n\t\tconst choices = list.length > 1 ? list.filter((event) => event !== lastEvent) : list\n\t\tconst event = choices[Math.floor(Math.random() * choices.length)]\n\t\tconst name = event.name || "Event"\n\t\tconst key = String(name).toLowerCase()\n\t\tconst seconds = event.seconds !== undefined ? event.seconds : event.end ? 30 : 0\n\t\tlastEvent = event\n\t\tannounce("Event: " + name + "!", "gold")\n\t\tif (seconds > 0) {\n\t\t\tbusy = true\n\t\t\teventsRunning[key] = (eventsRunning[key] || 0) + 1\n\t\t\trunLater(seconds, () => {\n\t\t\t\tbusy = false\n\t\t\t\teventsRunning[key] = Math.max(0, eventsRunning[key] - 1)\n\t\t\t\tif (event.end) {\n\t\t\t\t\tevent.end()\n\t\t\t\t}\n\t\t\t\tannounce(name + " is over!", "gray")\n\t\t\t})\n\t\t}\n\t\tif (event.start) {\n\t\t\tevent.start()\n\t\t}\n\t\t// Over at once (seconds: 0): its end runs straight after\n\t\tif (seconds <= 0 && event.end) {\n\t\t\tevent.end()\n\t\t}\n\t})\n}\n\nfunction isEventOn(name) {\n\tif (!eventsRunning) {\n\t\treturn false\n\t}\n\tif (name === undefined) {\n\t\treturn Object.keys(eventsRunning).some((key) => eventsRunning[key] > 0)\n\t}\n\treturn (eventsRunning[String(name).toLowerCase()] || 0) > 0\n}',
        uses: ["repeatEvery", "runLater", "announce"],
        helpers: [{
          name: "randomEvents",
          category: "world",
          signature: "randomEvents(everySeconds, events)",
          about: 'Every few seconds picks one of the events (not the one just before), announces "Event: name!" and runs it. events is a list of { name, start, end, seconds }: start() runs when it begins; end() (optional) when it is over; seconds (optional) is how long it lasts, 30 if there is an end and otherwise it is over at once. "name is over!" is announced when it ends. Players who join during it must be handled by your own code (use isEventOn in onPlayerJoin). Can be called at the top of the file. Returns an id for cancelTimer.',
          example: 'randomEvents(120, [{ name: "Double coins", seconds: 60, start: () => setCoinMultiplier(2), end: () => setCoinMultiplier(1) }, { name: "Meteor shower", start: () => itemRain(["Diamond"], 20, [0, 10, 0], 10) }, { name: "Low gravity", seconds: 30, start: () => { for (const id of api.getPlayerIds()) setAbility(id, "gravity", true) }, end: () => { for (const id of api.getPlayerIds()) setAbility(id, "gravity", 1) } }])'
        }, {
          name: "isEventOn",
          category: "world",
          signature: "isEventOn(name)",
          about: "Whether the random event with that name (capitals don't matter) is on now; isEventOn() with no name says whether any is. Use it in your own code, e.g. in onPlayerJoin to give a player who joins during \"Low gravity\" its low gravity. An event that calls setCoinMultiplier already doubles what addCoins gives, so don't double it again.",
          example: 'if (isEventOn("Low gravity")) setAbility(playerId, "gravity", true)'
        }]
      }, {
        group: "leaderboard",
        code: '// Ready-made leaderboard: showLeaderboard(title, getValue, count) shows the top players on everyone\'s sidebar, best\n// first, and a line for the player themselves if they are further down; getValue(playerId) gives a number. It updates\n// by itself every second, beside other sidebar lines (setSidebar). hideLeaderboard(title) takes it away. The list is a\n// var made on first use, so showLeaderboard can be called from the top of the file.\nvar leaderboards\n\nfunction showLeaderboard(title, getValue, count) {\n\tif (!leaderboards) {\n\t\tleaderboards = {}\n\t}\n\thideLeaderboard(title)\n\tconst board = { title: String(title), getValue: getValue, rows: Math.max(1, Math.min(Math.floor(count || 5), 10)), shown: {}, timer: null }\n\tleaderboards[board.title] = board\n\tboard.timer = repeatEvery(1, () => {\n\t\tupdateLeaderboardRows(board)\n\t})\n\t// The first time is soon, not a second away, and not now: at the top of the file the world isn\'t ready\n\trunLater(0.1, () => {\n\t\tif (leaderboards[board.title] === board) {\n\t\t\tupdateLeaderboardRows(board)\n\t\t}\n\t})\n\treturn board.timer\n}\n\nfunction hideLeaderboard(title) {\n\tconst board = leaderboards ? leaderboards[String(title)] : null\n\tif (!board) {\n\t\treturn\n\t}\n\tcancelTimer(board.timer)\n\tdelete leaderboards[board.title]\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tremoveSidebar(playerId, board.title)\n\t}\n}\n\nfunction updateLeaderboardRows(board) {\n\tconst playerIds = api.getPlayerIds()\n\tconst values = {}\n\tfor (const playerId of playerIds) {\n\t\tconst value = typeof board.getValue === "function" ? board.getValue(playerId) : board.getValue[playerId]\n\t\tvalues[playerId] = Math.round((Number(value) || 0) * 100) / 100\n\t}\n\tconst ranked = playerIds.slice().sort((a, b) => values[b] - values[a])\n\tconst lines = ranked.slice(0, board.rows).map((playerId, i) => (i + 1) + ". " + api.getEntityName(playerId) + " " + values[playerId])\n\tconst shown = {}\n\tfor (const playerId of playerIds) {\n\t\tlet text = "\\n" + lines.join("\\n")\n\t\tconst rank = ranked.indexOf(playerId)\n\t\tif (rank >= board.rows) {\n\t\t\ttext += "\\nYou: #" + (rank + 1) + " " + values[playerId]\n\t\t}\n\t\tshown[playerId] = text\n\t\t// Only a changed board is sent again\n\t\tif (board.shown[playerId] !== text) {\n\t\t\tsetSidebar(playerId, board.title, text)\n\t\t}\n\t}\n\tboard.shown = shown\n}\n\nfunction onPlayerJoin(playerId) {\n\t// A moment later, once the game\'s own onPlayerJoin has set the player up for the value to be read\n\trunLater(0.2, () => {\n\t\tfor (const title of Object.keys(leaderboards || {})) {\n\t\t\tupdateLeaderboardRows(leaderboards[title])\n\t\t}\n\t})\n}',
        uses: ["setSidebar", "repeatEvery", "runLater"],
        helpers: [{
          name: "showLeaderboard",
          category: "screen",
          signature: "showLeaderboard(title, getValue, count)",
          about: 'Shows the top count players (5 if left out, at most 10) for getValue(playerId), a number, best first, on everyone\'s sidebar under title, with a line "You: #7 ..." for a player further down. It keeps itself up to date every second and sits beside your other setSidebar lines. A second call with the same title replaces the first. Can be called at the top of the file. Returns an id.',
          example: 'showLeaderboard("Top coins", (playerId) => getCoins(playerId), 5)'
        }, {
          name: "hideLeaderboard",
          category: "screen",
          signature: "hideLeaderboard(title)",
          about: "Takes a leaderboard made with showLeaderboard off everyone's sidebar and stops updating it.",
          example: 'hideLeaderboard("Top coins")'
        }]
      }, {
        group: "selling",
        code: '// Ready-made selling: sellItems(playerId, prices) takes every one of each item in prices from the player\'s inventory and\n// gives coins for it, returning the coins earned (0 if they had none to sell). prices is { "Wheat": 5 } or [["Wheat", 5]],\n// coins for each item.\nfunction sellItems(playerId, prices) {\n\tconst entries = Array.isArray(prices) ? prices : Object.keys(prices).map((name) => [name, prices[name]])\n\tlet earned = 0\n\tfor (const entry of entries) {\n\t\tlet amount = 0\n\t\ttry {\n\t\t\tamount = api.getInventoryItemAmount(playerId, entry[0])\n\t\t} catch (e) {\n\t\t\t// Not an item name: the rest are still sold\n\t\t\tcontinue\n\t\t}\n\t\t// A negative amount is an infinite stack: never sold\n\t\tif (amount > 0) {\n\t\t\tapi.removeItemName(playerId, entry[0], amount)\n\t\t\tearned += amount * (Number(entry[1]) || 0)\n\t\t}\n\t}\n\t// The coins paid, double coins and all\n\treturn earned > 0 ? addCoins(playerId, earned) : 0\n}',
        uses: ["addCoins"],
        helpers: [{
          name: "sellItems",
          category: "economy",
          signature: "sellItems(playerId, prices)",
          about: 'Takes every one of each item in prices from the player\'s inventory and gives coins (addCoins) for them: prices is { "Wheat": 5, "Carrot": 3 } or [["Wheat", 5]], the coins for each item. Returns the coins earned, 0 if they had nothing to sell, so tell the player.',
          example: 'const earned = sellItems(playerId, { Wheat: 5, Carrot: 3 }); api.sendMessage(playerId, "Sold for " + earned + " coins")'
        }]
      }, {
        group: "lava",
        code: '// Ready-made rising lava: risingLava(corner1, corner2, everySeconds, block) fills the box between two corners [x, y, z]\n// one layer at a time from its lowest y, a new layer every few seconds (the first after the first few seconds), with\n// Lava unless another block is given. It only fills empty (air) spots, so what is built in the box stays. It returns a\n// handle for stopLava(handle, clear), which stops it and, with clear true, takes away the blocks it placed (only\n// those). A layer is filled with fillBox, so a big one is fine, and a part of the world that hasn\'t loaded yet is\n// filled once it has. It keeps nothing in a const or let, so it can be called from the top of the file.\nfunction risingLava(corner1, corner2, everySeconds, block) {\n\tconst low = [0, 1, 2].map((i) => Math.floor(Math.min(corner1[i], corner2[i])))\n\tconst high = [0, 1, 2].map((i) => Math.floor(Math.max(corner1[i], corner2[i])))\n\tconst lava = { low: low, high: high, block: block || "Lava", nextY: low[1], layers: [], timer: null, stopped: false }\n\tlava.timer = repeatEvery(Number(everySeconds) > 0 ? Number(everySeconds) : 5, () => {\n\t\tlavaRiseOneLayer(lava)\n\t})\n\treturn lava\n}\n\nfunction stopLava(lava, clear) {\n\tif (!lava) {\n\t\treturn\n\t}\n\tlava.stopped = true\n\tcancelTimer(lava.timer)\n\tif (clear) {\n\t\tconst name = String(lava.block).toLowerCase()\n\t\tfor (const layer of lava.layers) {\n\t\t\t// Only the spots it filled, and still its block: a block someone placed over it stays\n\t\t\tlavaFillLayer(lava, layer.y, (x, z) => {\n\t\t\t\tconst here = String(api.getBlock(x, layer.y, z)).toLowerCase()\n\t\t\t\treturn !layer.skipped[x + "," + z] && (here === name || here === "unloaded")\n\t\t\t}, "Air")\n\t\t}\n\t\tlava.layers = []\n\t}\n}\n\nfunction lavaRiseOneLayer(lava) {\n\tif (lava.stopped) {\n\t\treturn\n\t}\n\tconst y = lava.nextY\n\tlava.nextY++\n\tif (lava.nextY > lava.high[1]) {\n\t\tcancelTimer(lava.timer)\n\t}\n\tlavaPlaceLayer(lava, y)\n}\n\n// Notes the spots of the layer that aren\'t empty (they stay as they are), then fills the rest\nfunction lavaPlaceLayer(lava, y) {\n\tif (lava.stopped) {\n\t\treturn\n\t}\n\tconst skipped = {}\n\tfor (let x = lava.low[0]; x <= lava.high[0]; x++) {\n\t\tfor (let z = lava.low[2]; z <= lava.high[2]; z++) {\n\t\t\tconst here = api.getBlock(x, y, z)\n\t\t\tif (here === "Unloaded") {\n\t\t\t\twhenWorldLoaded([x, y, z], () => lavaPlaceLayer(lava, y))\n\t\t\t\treturn\n\t\t\t}\n\t\t\tif (here !== "Air") {\n\t\t\t\tskipped[x + "," + z] = true\n\t\t\t}\n\t\t}\n\t}\n\tlava.layers.push({ y: y, skipped: skipped })\n\tlavaFillLayer(lava, y, (x, z) => !skipped[x + "," + z], lava.block)\n}\n\n// Fills the spots of one layer that wanted(x, z) says yes to: the whole layer in one fillBox when every spot does,\n// else each row\'s runs of spots\nfunction lavaFillLayer(lava, y, wanted, blockName) {\n\tconst runs = []\n\tlet count = 0\n\tfor (let z = lava.low[2]; z <= lava.high[2]; z++) {\n\t\tlet start = null\n\t\tfor (let x = lava.low[0]; x <= lava.high[0] + 1; x++) {\n\t\t\tif (x <= lava.high[0] && wanted(x, z)) {\n\t\t\t\tcount++\n\t\t\t\tif (start === null) {\n\t\t\t\t\tstart = x\n\t\t\t\t}\n\t\t\t} else if (start !== null) {\n\t\t\t\truns.push([start, x - 1, z])\n\t\t\t\tstart = null\n\t\t\t}\n\t\t}\n\t}\n\tconst total = (lava.high[0] - lava.low[0] + 1) * (lava.high[2] - lava.low[2] + 1)\n\tif (count === total) {\n\t\tfillBox([lava.low[0], y, lava.low[2]], [lava.high[0], y, lava.high[2]], blockName)\n\t\treturn\n\t}\n\tfor (const run of runs) {\n\t\tfillBox([run[0], y, run[2]], [run[1], y, run[2]], blockName)\n\t}\n}',
        uses: ["repeatEvery", "cancelTimer", "fillBox", "whenWorldLoaded"],
        helpers: [{
          name: "risingLava",
          category: "world",
          signature: "risingLava(corner1, corner2, everySeconds, block)",
          about: 'Fills the box between two corners [x, y, z] one layer at a time from its lowest y, a new layer every everySeconds (the first one after the first everySeconds), with block ("Lava" if left out): rising lava, a flood. It only fills empty spots, so a parkour or buildings inside the box stay. Big boxes are fine. Returns a handle for stopLava. Can be called at the top of the file.',
          example: "const lava = risingLava([0, 10, 0], [30, 40, 30], 8)"
        }, {
          name: "stopLava",
          category: "world",
          signature: "stopLava(handle, clear)",
          about: "Stops a risingLava (the handle it returned). With clear true it also takes away the blocks it placed, and only those, e.g. for the next round. Returns nothing.",
          example: "stopLava(lava, true)"
        }]
      }].flatMap((FF => FF.helpers.map((WF => ({
        ...WF,
        group: FF.group,
        code: FF.code,
        ...FF.uses ? {
          uses: FF.uses
        } : {}
      })))));

    function HS(FF) {
      const {
        file: WF,
        hasErrors: SF
      } = dS(`(${FF})`), CF = WF.statements[0];
      if (SF || 1 !== WF.statements.length || !CF || !NF().isExpressionStatement(CF)) return null;
      const AF = CF.expression;
      return NF().isParenthesizedExpression(AF) ? AF.expression : AF
    }

    function KS(FF) {
      return !!(NF().isNumericLiteral(FF) || NF().isStringLiteral(FF) || NF().isNoSubstitutionTemplateLiteral(FF)) || (FF.kind === NF().SyntaxKind.TrueKeyword || FF.kind === NF().SyntaxKind.FalseKeyword || FF.kind === NF().SyntaxKind.NullKeyword || (!NF().isPrefixUnaryExpression(FF) || FF.operator !== NF().SyntaxKind.MinusToken && FF.operator !== NF().SyntaxKind.PlusToken ? NF().isArrayLiteralExpression(FF) ? FF.elements.every((FF => KS(FF))) : !!NF().isObjectLiteralExpression(FF) && FF.properties.every((FF => NF().isPropertyAssignment(FF) && (NF().isIdentifier(FF.name) || NF().isStringLiteral(FF.name)) && KS(FF.initializer))) : NF().isNumericLiteral(FF.operand)))
    }

    function wS(FF) {
      return NF().isNumericLiteral(FF) || NF().isPrefixUnaryExpression(FF) && NF().isNumericLiteral(FF.operand)
    }

    function XS(FF) {
      return NF().isStringLiteral(FF) || NF().isNoSubstitutionTemplateLiteral(FF) ? FF.text : null
    }
    const US = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;

    function BS(FF) {
      const WF = FF.trim();
      if ("" === WF) return [];
      if (WF.startsWith("{")) try {
        const FF = JSON.parse(WF);
        if (FF && "object" === typeof FF && !Array.isArray(FF)) return Object.entries(FF).map((FF => {
          let [WF, SF] = FF;
          return [WF, JSON.stringify(SF)]
        }))
      } catch {}
      const SF = function(FF) {
        const WF = HS(FF);
        if (!WF || !NF().isObjectLiteralExpression(WF)) return null;
        const SF = [];
        for (const CF of WF.properties) {
          if (!NF().isPropertyAssignment(CF) || !NF().isIdentifier(CF.name) && !NF().isStringLiteral(CF.name)) return null;
          SF.push([CF.name.text, CF.initializer.getText()])
        }
        return SF
      }(WF.startsWith("{") ? WF : `{${WF}}`);
      if (SF) return SF;
      const CF = [];
      let AF = null,
        uF = 0;
      const hF = WF.startsWith("{") ? WF.replace(/^\{/, "").replace(/\}\s*$/, "") : WF;
      for (const iW of hF.split("\n")) {
        var bW, dF, PF, RF;
        const FF = /\/\//.exec(iW.replace(US, (FF => " ".repeat(FF.length)))),
          WF = (FF ? iW.slice(0, FF.index) : iW).trim();
        if ("" === WF) continue;
        if (AF && uF > 0) AF[1] += `\n${WF}`;
        else {
          const FF = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(WF.replace(/^[-*\u2022]\s*/, ""));
          if (!FF) continue;
          AF = [FF[1], FF[2]], CF.push(AF)
        }
        const SF = WF.replace(US, "");
        uF = Math.max(0, uF + (null !== (bW = null === (dF = SF.match(/[[{(]/g)) || void 0 === dF ? void 0 : dF.length) && void 0 !== bW ? bW : 0) - (null !== (PF = null === (RF = SF.match(/[\]})]/g)) || void 0 === RF ? void 0 : RF.length) && void 0 !== PF ? PF : 0))
      }
      return CF.map((FF => {
        let [WF, SF] = FF;
        return [WF, SF.trim().replace(/[,;]\s*$/, "")]
      }))
    }

    function jC(FF, WF, SF) {
      const CF = "string" === FF.kind || "block" === FF.kind || "item" === FF.kind || "mob" === FF.kind;
      let AF = HS(WF),
        uF = WF;
      var hF;
      if (AF && KS(AF) || !CF || (hF = WF, uF = JSON.stringify(hF.replace(/^["'`]|["'`]$/g, "")), AF = HS(uF)), !AF || !KS(AF)) return {
        problem: `${FF.key} must be a plain value like ${FF.value}, not ${WF}`
      };
      if ("number" === FF.kind && !wS(AF)) return {
        problem: `${FF.key} must be a number, like ${FF.value}`
      };
      if ("boolean" === FF.kind && AF.kind !== NF().SyntaxKind.TrueKeyword && AF.kind !== NF().SyntaxKind.FalseKeyword) return {
        problem: `${FF.key} must be true or false`
      };
      if ("position" === FF.kind && ! function(FF) {
          return NF().isArrayLiteralExpression(FF) && 3 === FF.elements.length && FF.elements.every(wS)
        }(AF) && (AF.kind !== NF().SyntaxKind.NullKeyword || "null" !== FF.value)) return {
        problem: `${FF.key} must be a position [x, y, z], like ${"null"===FF.value?"[0, 10, 0]":FF.value}`
      };
      if ("list" === FF.kind && !NF().isArrayLiteralExpression(AF)) return {
        problem: `${FF.key} must be a list in [ ], like ${FF.value}`
      };
      if ("list" === FF.kind && FF.names && SF && NF().isArrayLiteralExpression(AF)) return function(FF, WF, SF, CF) {
        const AF = FF => FF.elements.flatMap(((WF, CF) => {
            if (NF().isArrayLiteralExpression(WF)) return AF(WF);
            if ("item" === SF && NF().isObjectLiteralExpression(WF)) return uF(WF);
            const hF = FF.elements[CF + 1],
              bW = void 0 !== hF && NF().isArrayLiteralExpression(hF);
            return null === XS(WF) || bW ? [] : [WF]
          })),
          uF = FF => FF.properties.flatMap((FF => {
            if (!NF().isPropertyAssignment(FF) || !["item", "ammo", "projectile", "items"].includes(FF.name.getText().replace(/["']/g, ""))) return [];
            const WF = FF.initializer;
            return NF().isArrayLiteralExpression(WF) ? AF(WF) : null !== XS(WF) ? [WF] : []
          })),
          hF = AF(WF),
          bW = WF.getStart();
        let dF = WF.getText();
        const PF = [],
          RF = [],
          iW = new Map([...FF.value.matchAll(/\{ item: "([^"]+)"[^}]*?action: "(\w+)"/g)].map((FF => [FF[2], FF[1]]))),
          eF = FF => {
            var WF;
            const SF = FF.parent,
              CF = null === SF || void 0 === SF ? void 0 : SF.parent;
            if (!NF().isPropertyAssignment(SF) || "item" !== SF.name.getText().replace(/["']/g, "") || !CF || !NF().isObjectLiteralExpression(CF)) return;
            const AF = FF => CF.properties.find((WF => NF().isPropertyAssignment(WF) && WF.name.getText().replace(/["']/g, "") === FF)),
              uF = AF("action"),
              hF = uF ? iW.get(null !== (WF = XS(uF.initializer)) && void 0 !== WF ? WF : "") : void 0;
            return hF ? {
              property: SF,
              item: hF,
              named: void 0 !== AF("name")
            } : void 0
          };
        for (const QF of [...hF].reverse()) {
          var EF;
          const FF = null !== (EF = XS(QF)) && void 0 !== EF ? EF : "",
            WF = CF(SF, FF),
            AF = null === WF ? eF(QF) : void 0;
          if (AF) {
            const WF = AF.named ? `item: ${JSON.stringify(AF.item)}` : `item: ${JSON.stringify(AF.item)}, name: ${JSON.stringify(FF)}`;
            PF.unshift(`"${FF}" isn't an item, so it is a ${AF.item}${AF.named?"":` named "${FF}"`}`), dF = `${dF.slice(0,AF.property.getStart()-bW)}${WF}${dF.slice(AF.property.getEnd()-bW)}`
          } else null === WF ? RF.unshift(`"${FF}"`) : WF !== FF && (PF.unshift(`"${FF}" is "${WF}"`), dF = `${dF.slice(0,QF.getStart()-bW)}${JSON.stringify(WF)}${dF.slice(QF.getEnd()-bW)}`)
        }
        if (RF.length > 0) return {
          problem: `${RF.join(", ")} ${1===RF.length?"item"===SF?"isn't an":"isn't a":"aren't"} ${SF} name${1===RF.length?"":"s"}, so ${FF.key} kept ${FF.value}`
        };
        return {
          value: dF,
          ...PF.length > 0 ? {
            fixed: PF.join(", ")
          } : {}
        }
      }(FF, AF, FF.names, SF);
      if (CF) {
        const WF = XS(AF);
        if (null === WF) return {
          problem: `${FF.key} must be text in quotes, like ${FF.value}`
        };
        if (("block" === FF.kind || "item" === FF.kind || "mob" === FF.kind) && SF) {
          const CF = SF(FF.kind, WF);
          if (null === CF) return {
            problem: `"${WF}" isn't ${"item"===FF.kind?"an":"a"} ${FF.kind} name, so ${FF.key} kept ${FF.value}`
          };
          if (CF !== WF) return {
            value: JSON.stringify(CF),
            fixed: `"${WF}" is "${CF}"`
          }
        }
      }
      return {
        value: AF.getText()
      }
    }
    const vC = sS,
      JS = {
        parkour: "parkour, obbies and races to a finish",
        pvp: "fighting other players: arenas, kills, last one standing",
        teams: "teams against each other",
        survival: "surviving mobs, zombies and waves",
        tag: "tag, infection, hide and seek: one side chases the other",
        economy: "coins, shops, upgrades and saved progress",
        rounds: "lobbies, countdowns and rounds that start and end",
        building: "building and changing blocks",
        uW: "places, areas and random picks in the world",
        players: "players' items, health, scores and teleports",
        screen: "text on players' screens and announcements"
      };

    function pS(FF) {
      return FF.toLowerCase().replace(/[^a-z0-9]/g, "")
    }

    function lS(FF) {
      var WF;
      const SF = pS(FF);
      return null !== (WF = vC.find((FF => pS(FF.name) === SF || pS(FF.title) === SF))) && void 0 !== WF ? WF : null
    }

    function FC(FF) {
      var WF;
      return null !== (WF = nS.find((WF => WF.name === FF))) && void 0 !== WF ? WF : null
    }

    function WC(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
      const SF = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return 0 === FF.length ? "" : `const CONFIG = {\n${FF.map((FF=>{var SF;return`\t${FF.key}: ${null!==(SF=WF.get(FF.key))&&void 0!==SF?SF:FF.value}, // ${FF.about}`})).join("\n")}\n}`
      }(FF.settings, WF);
      return `${""===SF?"":`${SF}\n\n`}${FF.code.trim()}\n`
    }

    function SC(FF) {
      const WF = [],
        SF = new Set,
        CF = FF => {
          const AF = FC(FF);
          if (AF && !SF.has(AF.group)) {
            SF.add(AF.group);
            for (const FF of null !== (uF = AF.uses) && void 0 !== uF ? uF : []) {
              var uF;
              CF(FF)
            }
            WF.push(AF)
          }
        };
      for (const AF of FF) CF(AF);
      return WF
    }

    function CC(FF, WF) {
      const SF = FF => FF.replace(/\s+/g, ""),
        CF = new RegExp(`function ${WF.name}\\s*\\([^)]*\\)\\s*\\{`).exec(FF);
      return !!CF && SF(WF.code).includes(SF(FF.slice(CF.index, CF.index + 200)).slice(0, 60))
    }

    function AC(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
      if (!cC(FF)) return {
        text: FF,
        added: []
      };
      let SF = FF;
      const CF = [];
      for (let AF = 0; AF < 4; AF++) {
        const FF = YS(SF),
          AF = [...MS(SF)].filter((CF => {
            const AF = FC(CF);
            return null !== AF && !WF.has(CF) && (!FF.has(CF) || CC(SF, AF))
          }));
        let uF = !1;
        for (const WF of SC(AF)) {
          const hF = oS(SF, WF.code, {
            owner: WF.group,
            chainCallbacks: !0
          });
          hF && hF.text !== SF && (SF = hF.text, uF = !0, FF.has(WF.name) || CF.push(...nS.filter((FF => FF.group === WF.group && AF.includes(FF.name))).map((FF => FF.name))))
        }
        if (!uF) break
      }
      return {
        text: SF,
        added: [...new Set(CF)]
      }
    }

    function uC(FF, WF) {
      const SF = [...YS(WF.code)].filter((FF => "CONFIG" !== FF && !uS(FF)));
      if (0 === SF.length) return FF.includes(WF.code.trim().slice(0, 80));
      const CF = cC(FF) ? YS(FF) : new Set;
      return 2 * SF.filter((FF => CF.has(FF))).length >= SF.length
    }

    function hC(FF) {
      const WF = /^const CONFIG = \{\n([\s\S]*?)\n\}/m.exec(FF.code);
      return WF ? WF[1].split("\n").flatMap((FF => {
        const WF = /^\t(\w+): (.+?), \/\/ (.*)$/.exec(FF);
        if (!WF) return [];
        const [, SF, CF, AF] = WF;
        return [{
          key: SF,
          kind: /^-?\d/.test(CF) ? "number" : "true" === CF || "false" === CF ? "boolean" : CF.startsWith("[") ? "list" : "string",
          value: CF,
          about: AF
        }]
      })) : []
    }

    function bA(FF) {
      const WF = new Set(FF.settings.map((FF => FF.key))),
        SF = new Map;
      for (const CF of SC(MS(FF.code)))
        for (const FF of hC(CF)) WF.has(FF.key) || SF.set(FF.key, FF);
      return [...SF.values()]
    }

    function dC(FF, WF, SF, CF) {
      const AF = bA(WF),
        uF = function(FF, WF, SF) {
          const CF = new Map,
            AF = [],
            uF = [],
            hF = new Map(FF.settings.map((FF => [FF.key.toLowerCase(), FF])));
          for (const [bW, dF] of BS(WF)) {
            const WF = hF.get(bW.toLowerCase());
            if (!WF) {
              AF.push(`${FF.name} has no setting ${bW}`);
              continue
            }
            if (/^CONFIG\.\w+$/.test(dF.trim())) continue;
            const PF = jC(WF, dF, SF);
            "problem" in PF ? AF.push(PF.problem) : (CF.set(WF.key, PF.value), PF.fixed && uF.push(PF.fixed))
          }
          return {
            values: CF,
            problems: AF,
            fixed: uF
          }
        }({
          ...WF,
          settings: [...WF.settings, ...AF]
        }, SF, CF),
        hF = AF.filter((FF => uF.values.has(FF.key))),
        bW = oS(FF, WC({
          ...WF,
          settings: [...WF.settings, ...hF]
        }, uF.values), {
          owner: WF.name,
          overrides: new Set(uF.values.keys()),
          heading: "" === FF.trim() ? void 0 : `// ---- ${WF.title} (ready-made) ----`
        });
      if (!bW) return {
        error: cC(FF) ? "The prefab couldn't be fitted into the code around it without breaking it. Put it into an empty file instead." : "The code around it doesn't parse (a bracket is likely missing), so the prefab couldn't be fitted in. Fix the code first."
      };
      const dF = AC(bW.text);
      return {
        prefab: WF,
        text: dF.text,
        problems: uF.problems,
        fixed: uF.fixed,
        chained: bW.chained,
        helpers: dF.added
      }
    }

    function PC(FF) {
      return `- ${FF.name}: ${FF.summary}. Settings: ${FF.settings.map((FF=>FF.key)).join(", ")}`
    }

    function RC(FF) {
      var WF;
      const SF = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.trim().toLowerCase()) && void 0 !== WF ? WF : "",
        CF = Object.keys(JS).includes(SF) ? SF : void 0,
        AF = CF ? vC.filter((FF => FF.category === CF)) : vC,
        uF = CF ? nS.filter((FF => FF.category === CF)) : [];
      return `${CF?`Prefabs for ${JS[CF]}:`:""===SF||"all"===SF?"Every prefab:":`There is no category ${FF}. Every prefab:`}\n${AF.length>0?AF.map(PC).join("\n"):"(none yet)"}${uF.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${uF.map((FF=>`- ${FF.signature}: ${FF.about}`)).join("\n")}`:""}${CF?"":`\nCategories: ${Object.keys(JS).join(", ")}`}`
    }

    function iA(FF, WF) {
      var SF;
      const CF = [...FF.settings, ...bA(FF)].map((FF => `- ${FF.key} (${FF.kind}, default ${FF.value}): ${FF.about}`)).join("\n"),
        AF = null !== (SF = FF.changeable) && void 0 !== SF && SF.length ? `\nFunctions to replace by name for a game of their own:\n${FF.changeable.map((FF=>`- ${FF.name}: ${FF.about}`)).join("\n")}` : "",
        uF = WF ? `\nIts code, as it goes in with the default settings:\n${WC(FF)}` : "";
      return `${FF.name} (${FF.title}): ${FF.summary}.\nHow it plays: ${FF.howItPlays}\nSettings:\n${CF}${AF}${FF.setup?`\nThe creator sets up: ${FF.setup}`:""}${uF}`
    }

    function eC(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
      const SF = function(FF) {
          return new Set(FF.toLowerCase().split(/[^a-z0-9]+/).filter((FF => FF.length > 1)))
        }(FF),
        CF = ` ${FF.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
      return vC.map((FF => {
        const WF = FF.keywords.map((FF => FF.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((FF => FF.includes(" ") ? CF.includes(` ${FF} `) : SF.has(FF))),
          AF = Math.min(...WF.map((FF => CF.indexOf(` ${FF} `))));
        return {
          prefab: FF,
          score: WF.length,
          first: AF
        }
      })).filter((FF => FF.score > 0)).sort(((FF, WF) => WF.score - FF.score || FF.first - WF.first)).slice(0, WF).map((FF => FF.prefab))
    }
    const EC = /\byour\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\bhow old\b|\bwhere (?:do )?you live\b|\be-?mail\b|\bphone number\b|\bpassword\b/i;

    function QC(FF) {
      var WF, SF, CF, AF, uF, hF;
      const bW = function(FF) {
          var WF, SF;
          const CF = null === (WF = FF.questions) || void 0 === WF ? void 0 : WF.trim();
          if (null !== (SF = FF.question) && void 0 !== SF && SF.trim() || !CF) return FF;
          const AF = {
            ...FF,
            question: CF
          };
          if (!/^[[{]/.test(CF)) return AF;
          try {
            const WF = JSON.parse(CF),
              SF = Array.isArray(WF) ? WF[0] : WF;
            if ("string" === typeof SF) {
              const CF = Array.isArray(WF) ? WF.slice(1).filter((FF => "string" === typeof FF)) : [];
              return {
                ...FF,
                question: SF,
                ...CF.length > 0 && void 0 === FF.choices ? {
                  choices: CF.join("\n")
                } : {}
              }
            }
            if ("object" !== typeof SF || null === SF) return AF;
            const uF = SF,
              hF = FF => "string" === typeof FF ? FF : "boolean" === typeof FF ? String(FF) : Array.isArray(FF) ? FF.filter((FF => "string" === typeof FF)).join("\n") : void 0,
              bW = {
                question: hF(uF.question),
                choices: hF(uF.choices),
                allow_other: hF(uF.allow_other)
              };
            return {
              ...FF,
              ...Object.fromEntries(Object.entries(bW).filter((FF => {
                let [, WF] = FF;
                return void 0 !== WF
              })))
            }
          } catch {
            return CF.startsWith("[") ? AF : FF
          }
        }(FF),
        dF = null !== (WF = null === (SF = bW.question) || void 0 === SF ? void 0 : SF.replace(/\s+/g, " ").trim()) && void 0 !== WF ? WF : "",
        PF = (null !== (CF = bW.choices) && void 0 !== CF ? CF : "").includes("\n") ? (null !== (AF = bW.choices) && void 0 !== AF ? AF : "").split("\n") : (null !== (uF = bW.choices) && void 0 !== uF ? uF : "").split("|"),
        RF = [...new Set(PF.map((FF => FF.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
        iW = "false" !== (null === (hF = bW.allow_other) || void 0 === hF ? void 0 : hF.trim().toLowerCase());
      return "" === dF || EC.test(dF) || RF.length < 2 && !iW ? null : {
        question: dF,
        choices: RF,
        allowOther: iW
      }
    }
    const rA = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc]all) (?:the |an? |one )?(?:${TW.map((FF=>FF.name)).filter((FF=>"plan"!==FF&&"remember"!==FF)).join("|")})\b[^\n.]*\.?[ \t]*\n*)+`),
      gA = /^\s*(?:\.\.\.|\u2026)\s*$/,
      tA = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;

    function TC(FF, WF) {
      if (gA.test(FF)) return !0;
      const SF = new Set(WF.split("\n").map((FF => FF.trim())));
      return FF.split("\n").some((FF => tA.test(FF) && !SF.has(FF.trim())))
    }
    const aA = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
      kA = String.raw`on[A-Z]\w*|tick|playerCommand`,
      qA = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${kA})\s*\(|(?:${kA})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
      VC = new RegExp(`^(?:${kA})$`),
      NC = new RegExp(String.raw`^(${kA})(\s*\([^()\n]*\)\s*\{)`, "gm"),
      DC = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${kA})\b|\buse_?prefab\s*\(`, "i");

    function LC(FF) {
      return FF.replace(/^\s*```[\w-]*[^\n]*\n/, "").replace(/\n?```\s*$/, "")
    }

    function mA(FF) {
      return LC(FF).replace(/\s*$/, "\n")
    }

    function OC(FF, WF) {
      switch (FF) {
        case "view_file":
          return void 0 === WF.path ? WF : {
            path: xA(WF.path)
          };
        case "fetch_url":
          return void 0 === WF.url ? WF : {
            url: kW(WF.url)
          };
        default:
          return WF
      }
    }

    function xA(FF) {
      return FF.trim().replace(/^\.?\//, "")
    }

    function ZC(FF) {
      return FF.replace(NC, "function $1$2")
    }

    function oC(FF) {
      return FF.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
    }

    function YC(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        uF = arguments.length > 5 ? arguments[5] : void 0,
        hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
        bW = arguments.length > 7 ? arguments[7] : void 0,
        dF = arguments.length > 8 ? arguments[8] : void 0;
      const PF = {
          ...SF
        },
        RF = new Set,
        iW = [];
      let eF;
      const QF = (FF, WF, SF, CF) => {
        iW.push({
          tool: FF,
          path: WF,
          reason: SF,
          closest: null,
          functions: [],
          ...CF,
          ...eF ? {
            call: eF
          } : {}
        })
      };
      let rW = FF;
      const gW = Object.keys(SF).some(EF.c),
        tW = FF => null !== FF && gW && (0, EF.c)(FF),
        TF = FF => tW(FF) ? `${EF.k}${(0,EF.g)(FF)}` : null !== uF && void 0 !== uF ? uF : xA(FF),
        aW = FF => void 0 === uF || tW(FF),
        kW = FF => void 0 !== bW && !bW.has(FF),
        qW = new Set,
        VF = FF => JSON.stringify({
          name: FF.name,
          args: FF.args
        }),
        NF = FF => {
          const WF = tW(FF) ? {
              name: "view_world_code",
              args: {}
            } : {
              name: "view_file",
              args: {
                path: FF
              }
            },
            SF = eF ? {
              ...WF,
              call: eF
            } : WF;
          qW.add(VF(SF)), LF(SF)
        },
        DF = [],
        LF = FF => {
          const WF = VF(FF);
          DF.length < 4 && !DF.some((FF => VF(FF) === WF)) && DF.push(FF)
        },
        mW = [],
        xW = [],
        MF = [],
        GF = new Map,
        zW = new Map,
        IF = (FF, WF, SF) => {
          var CF;
          const AF = function(FF) {
              const WF = FF.replace(/\s+/g, " ").trim();
              if (WF.length <= 80) return WF;
              const SF = WF.slice(0, 80);
              return `${SF.slice(0,Math.max(SF.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
            }(null !== WF && void 0 !== WF ? WF : ""),
            uF = null !== (CF = GF.get(FF)) && void 0 !== CF ? CF : [];
          var hF;
          ("" === AF || uF.includes(AF) || GF.set(FF, [...uF, AF]), "" !== AF) && zW.set(FF, [...null !== (hF = zW.get(FF)) && void 0 !== hF ? hF : [], {
            why: AF,
            code: SF
          }])
        },
        fF = new Set,
        yW = [],
        sF = new Map,
        HF = [];
      let KF = null;
      const XF = [];
      let BF = [];
      const JF = (FF, WF) => void 0 !== uF && !tW(FF) && (null === FF || xA(FF) !== uF) && qA.test(WF),
        pF = (FF, WF, SF, CF) => {
          var AF, uF;
          const hF = function(FF, WF, SF, CF) {
            const AF = lS(WF);
            return AF ? dC(FF, AF, SF, CF) : {
              error: `There is no prefab called ${WF}. The prefabs are: ${vC.map((FF=>FF.name)).join(", ")}.`
            }
          }(null !== (AF = PF[FF]) && void 0 !== AF ? AF : "", WF, SF, dF);
          return "error" in hF ? (QF("use_prefab", FF, "prefab", {
            detail: hF.error
          }), !1) : (PF[FF] = hF.text, RF.add(FF), sF.set(FF, {
            prefab: hF.prefab,
            settings: SF
          }), IF(FF, null !== CF && void 0 !== CF ? CF : hF.prefab.title, hF.text), yW.push({
            name: hF.prefab.name,
            title: hF.prefab.title,
            path: FF,
            problems: hF.problems,
            fixed: hF.fixed,
            setup: null !== (uF = hF.prefab.setup) && void 0 !== uF ? uF : null
          }), !0)
        },
        FW = (FF, WF, SF) => {
          const CF = IS(WF);
          if (0 === CF.calls.length) return !1;
          PF[FF] = CF.code, RF.add(FF);
          for (const AF of CF.calls) pF(FF, AF.name, AF.settings, SF);
          return IF(FF, SF, CF.code), !0
        },
        WW = FF => {
          const WF = EW(ZC(mA(FF)), AF);
          mW.push(WF.code), MF.push(...WF.renames)
        },
        SW = CS(FF, WF),
        CW = new Map;
      for (const EF of SW) {
        var AW, uW, hW, bS;
        const FF = null !== (AW = CW.get(EF.name)) && void 0 !== AW ? AW : 0;
        CW.set(EF.name, FF + 1), eF = {
          name: EF.name,
          nth: FF
        };
        const WF = ("replace_function" === EF.name || "insert_code" === EF.name) && void 0 === EF.args.code && void 0 !== EF.args.content ? {
            ...EF,
            args: {
              ...EF.args,
              code: EF.args.content,
              path: null !== (uW = null !== (hW = null !== (bS = EF.args.path) && void 0 !== bS ? bS : uF) && void 0 !== hW ? hW : CF) && void 0 !== uW ? uW : void 0
            }
          } : EF,
          {
            path: AF,
            content: hF,
            search: bW,
            replace: iW,
            code: gW
          } = WF.args,
          tW = kS(WF.name),
          qW = `${WF.name}\n${JSON.stringify({...WF.args,why:void 0})}`,
          VF = fF.has(qW);
        if (tW.annotations.idempotentHint && VF) rW = rW.replace(WF.source, "");
        else {
          if (fF.add(qW), aS(WF.name)) {
            const FF = Object.fromEntries(Object.entries(WF.args).flatMap((FF => {
              let [WF, SF] = FF;
              return void 0 === SF || "" === SF.trim() ? [] : [
                [WF, SF.trim()]
              ]
            })));
            LF({
              name: WF.name,
              args: OC(WF.name, FF),
              call: eF
            })
          } else if ("add_world_code" === WF.name) {
            if (void 0 === uF) continue;
            void 0 !== gW ? WW(gW) : QF(WF.name, null, "missingArgs")
          } else if ("use_prefab" === WF.name) {
            const FF = void 0 !== AF && "" !== AF.trim() ? TF(AF) : void 0 === uF ? null !== CF && void 0 !== CF ? CF : "index.js" : null;
            if (void 0 === WF.args.name || "" === WF.args.name.trim()) QF(WF.name, FF, "missingArgs");
            else if (null !== FF && aW(FF)) {
              var dW;
              pF(FF, WF.args.name, null !== (dW = WF.args.settings) && void 0 !== dW ? dW : "", WF.args.why)
            } else QF(WF.name, FF, "prefab", {
              detail: "A prefab goes in World Code, not in a code block."
            })
          } else if ("ask_creator" === WF.name) KF ??= QC(WF.args);
          else if ("plan" === WF.name) {
            var RW;
            if (0 === BF.length) BF = PW(null !== (RW = WF.args.steps) && void 0 !== RW ? RW : "")
          } else if ("remember" === WF.name) {
            var iS;
            const FF = lF(null !== (iS = WF.args.note) && void 0 !== iS ? iS : "");
            null !== FF && 0 === XF.length && XF.push(FF)
          } else if ("export_game" === WF.name || "switch_to_world_code" === WF.name) {
            if ("switch_to_world_code" === WF.name && void 0 === uF) continue;
            const FF = "export_game" === WF.name ? "exportGame" : "switchToWorldCode";
            var eW;
            if (!xW.some((WF => WF.kind === FF))) xW.push("export_game" === WF.name ? {
              kind: "exportGame"
            } : {
              kind: "switchToWorldCode",
              request: (null === (eW = WF.args.request) || void 0 === eW ? void 0 : eW.trim()) || null
            })
          } else if ("write_file" === WF.name) {
            var QW, rS;
            if (FS(WF))
              if (void 0 === hF || "" !== hF.trim() && !TC(LC(hF), void 0 === AF ? "" : null !== (QW = PF[TF(AF)]) && void 0 !== QW ? QW : "")) {
                if (void 0 !== AF && void 0 !== hF && JF(AF, hF)) WW(hF);
                else if (void 0 !== AF && kW(TF(AF)) && "" !== (null !== (rS = SF[TF(AF)]) && void 0 !== rS ? rS : "").trim()) QF(WF.name, TF(AF), "unread", void 0 === hF ? void 0 : {
                  code: mA(hF)
                }), NF(TF(AF));
                else if (void 0 !== AF && void 0 !== hF) {
                  const FF = TF(AF),
                    SF = fS(mA(hF));
                  if (!aW(FF) || !FW(FF, SF, WF.args.why)) {
                    const CF = sF.get(FF),
                      AF = CF && !uC(SF, CF.prefab) ? dC(SF, CF.prefab, CF.settings, dF) : null;
                    PF[FF] = AF && !("error" in AF) ? AF.text : SF, RF.add(FF), IF(FF, WF.args.why, hF)
                  }
                }
              } else QF(WF.name, void 0 === AF ? null : TF(AF), "placeholder");
            else QF(WF.name, void 0 === AF ? null : TF(AF), "missingArgs")
          } else if ("replace_function" === WF.name || "insert_code" === WF.name) {
            var gS, tS, TW;
            const FF = void 0 === AF ? null : TF(AF),
              SF = "replace_function" === WF.name ? WF.args.name : WF.args.after,
              CF = void 0 === SF ? void 0 : nF(SF),
              uF = null === FF ? "" : null !== (gS = PF[FF]) && void 0 !== gS ? gS : "",
              hF = void 0 === gW ? "" : LC(gW),
              bW = null === FF ? void 0 : sF.get(FF),
              dF = "replace_function" === WF.name && void 0 !== bW && void 0 !== CF && VC.test(CF) && YS(bW.prefab.code).has(CF),
              iW = null === FF || void 0 === gW || void 0 === SF ? null : dF ? null !== (tS = null === (TW = oS(uF, hF, {
                owner: "extra",
                runsLast: !0
              })) || void 0 === TW ? void 0 : TW.text) && void 0 !== tS ? tS : null : "replace_function" === WF.name ? wF(uF, SF, hF) : jW(uF, SF, hF);
            null === FF || null === iW ? QF(WF.name, FF, FS(WF) ? "brokenCode" : "missingArgs") : TC(hF, uF) ? QF(WF.name, FF, "placeholder") : "replace_function" === WF.name && kW(FF) && vW(uF).includes(null !== CF && void 0 !== CF ? CF : "") ? (QF(WF.name, FF, "unread", {
              code: mA(hF)
            }), NF(FF)) : (PF[FF] = iW, RF.add(FF), IF(FF, WF.args.why, hF))
          } else {
            var qS, VW;
            const FF = !0 === (null === (qS = tW._meta) || void 0 === qS ? void 0 : qS.appliesAtOnce) ? null !== uF && void 0 !== uF ? uF : CF : void 0 === AF ? null : TF(AF),
              SF = null === FF ? "" : null !== (VW = PF[FF]) && void 0 !== VW ? VW : "",
              hF = FS(WF) && void 0 !== bW,
              dF = hF ? OF(SF, bW) : null,
              eF = null === dF && void 0 !== bW && bW.includes("\\n") ? OF(SF, LW(bW)) : null,
              EF = null !== dF && void 0 !== dF ? dF : eF,
              rW = null !== eF ? LW(null !== iW && void 0 !== iW ? iW : "") : null !== iW && void 0 !== iW ? iW : "",
              gW = null === EF || void 0 === bW ? rW : oF(SF.slice(EF.from, EF.to), ZF(SF, EF, null !== eF ? LW(bW) : bW, rW), YF(SF.slice(EF.to)));
            if (null === FF || null === EF) QF(WF.name, FF, hF ? "noMatch" : "missingArgs", {
              closest: hF ? cW(SF, bW) : null,
              functions: aW(FF) ? vW(SF) : []
            });
            else if (TC(gW, SF.slice(EF.from, EF.to))) QF(WF.name, FF, "placeholder");
            else {
              const CF = aW(FF) ? UF(SF, EF.from, EF.to, null !== bW && void 0 !== bW ? bW : "", rW) : null;
              PF[FF] = null !== CF && void 0 !== CF ? CF : SF.slice(0, EF.from) + gW + SF.slice(EF.to), RF.add(FF), IF(FF, WF.args.why, gW)
            }
          }
          rW = rW.replace(WF.source, "")
        }
      }
      eF = void 0, rW = AS(rW);
      const NW = rW.replace(rA, "");
      if (rW = "" !== NW.trim() || SW.length > 0 ? NW : rW, 0 === SW.length) {
        var DW, mS;
        const WF = [...FF.matchAll(aA)],
          SF = 1 === WF.length ? WF[0][1] : null,
          AF = null !== (DW = null !== uF && void 0 !== uF ? uF : CF) && void 0 !== DW ? DW : "index.js";
        if (null !== SF && JF(null, SF)) WW(SF), rW = rW.replace(WF[0][0], "");
        else if (null !== SF && DC.test(SF) && !TC(SF, null !== (mS = PF[AF]) && void 0 !== mS ? mS : "")) {
          const FF = fS(mA(SF));
          aW(AF) && FW(AF, FF, void 0) || (PF[AF] = FF, RF.add(AF)), rW = rW.replace(WF[0][0], "")
        }
      }
      for (const EF of RF) {
        var OW;
        if (aW(EF)) {
          var xS;
          const FF = Object.values(PF).some((FF => /\brequire\s*\(/.test(FF)));
          PF[EF] = yC(fS(FF ? PF[EF] : PF[EF].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (xS = SF[EF]) && void 0 !== xS ? xS : "");
          const WF = new Set(Object.keys(PF).filter((FF => FF !== EF && aW(FF))).flatMap((FF => [...YS(PF[FF])]))),
            CF = AC(PF[EF], WF);
          PF[EF] = CF.text, HF.push(...CF.added)
        }
        const FF = EW(oC(ZC(PF[EF])), aW(EF) ? AF : [], null !== (OW = SF[EF]) && void 0 !== OW ? OW : "");
        PF[EF] = FF.code, MF.push(...FF.renames)
      }
      for (const EF of yW) {
        const FF = EF.problems.length > 0 ? ` Kept as it was: ${EF.problems.join("; ")}.` : "",
          WF = EF.fixed.length > 0 ? ` Names changed to real ones: ${EF.fixed.join(", ")}.` : "";
        rW += `\n\nThis uses the ready-made ${EF.title}.${WF}${FF}${EF.setup?` ${EF.setup}`:""}`
      }
      for (const {
          from: EF,
          to: OF
        }
        of MF) rW += `\n\nI renamed \`${EF}\` to \`${OF}\`, the name World Code calls.`;
      const ZW = [];
      for (const EF of RF) {
        var oW;
        const FF = null !== (oW = SF[EF]) && void 0 !== oW ? oW : "";
        if (PF[EF] !== FF) {
          const WF = GF.get(EF);
          ZW.push(WF ? {
            path: EF,
            before: FF,
            after: PF[EF],
            why: WF,
            parts: zW.get(EF)
          } : {
            path: EF,
            before: FF,
            after: PF[EF]
          })
        }
      }
      const YW = "direct" === hF && ZW.length > 0,
        MW = ZW.length > 0 || mW.length > 0;
      return {
        text: rW.replace(/\n{3,}/g, "\n\n").trim(),
        changes: ZW,
        failedEdits: iW,
        renamedCallbacks: MF,
        worldCode: mW,
        inPlace: YW,
        actions: xW,
        question: MW ? null : KF,
        notes: XF,
        plan: MW ? [] : BF,
        lookups: MW ? DF.filter((FF => qW.has(VF(FF)))) : null !== KF || BF.length > 0 ? [] : DF,
        prefabs: yW,
        helpersAdded: [...new Set(HF)]
      }
    }

    function MC(FF, WF) {
      const SF = "" === FF ? [] : FF.replace(/\n$/, "").split("\n"),
        CF = "" === WF ? [] : WF.replace(/\n$/, "").split("\n");
      let AF = 0;
      for (; AF < SF.length && AF < CF.length && SF[AF] === CF[AF];) AF++;
      let uF = SF.length,
        hF = CF.length;
      for (; uF > AF && hF > AF && SF[uF - 1] === CF[hF - 1];) uF--, hF--;
      const bW = SF.slice(AF, uF),
        dF = CF.slice(AF, hF),
        PF = Array.from({
          length: bW.length + 1
        }, (() => new Array(dF.length + 1).fill(0)));
      for (let EF = bW.length - 1; EF >= 0; EF--)
        for (let FF = dF.length - 1; FF >= 0; FF--) PF[EF][FF] = bW[EF] === dF[FF] ? PF[EF + 1][FF + 1] + 1 : Math.max(PF[EF + 1][FF], PF[EF][FF + 1]);
      const RF = SF.slice(0, AF).map((FF => ({
        kind: "same",
        text: FF
      })));
      let iW = 0,
        eF = 0;
      for (; iW < bW.length || eF < dF.length;) iW < bW.length && eF < dF.length && bW[iW] === dF[eF] ? (RF.push({
        kind: "same",
        text: bW[iW]
      }), iW++, eF++) : eF < dF.length && (iW === bW.length || PF[iW][eF + 1] > PF[iW + 1][eF]) ? (RF.push({
        kind: "added",
        text: dF[eF]
      }), eF++) : (RF.push({
        kind: "removed",
        text: bW[iW]
      }), iW++);
      for (const EF of SF.slice(uF)) RF.push({
        kind: "same",
        text: EF
      });
      return RF
    }
    const cA = /\b(?:publish|export)\b|\bsave\b.{0,20}\b(?:game|world|map|it|this|work)\b/i;

    function GC(FF) {
      return cA.test(FF)
    }
    const zA = {
      worldCode: new Set(["write_file", "edit_file", "replace_function", "use_prefab", "edit_code_in_place", "export_game", "ask_creator", "plan", "remember", "view_file", "view_chunk", "view_game_state", "get_docs", "find_names", "view_prefab", "view_errors"]),
      codeBlock: new Set(["write_file", "edit_file", "replace_function", "add_world_code", "edit_code_in_place", "switch_to_world_code", "ask_creator", "view_world_code", "view_chunk", "view_game_state", "get_docs", "find_names", "view_errors"])
    };

    function IC(FF, WF, SF) {
      return HW[FF].formatCall(WF, SF)
    }

    function fC(FF, WF, SF, CF) {
      return HW[SF].declareTools(FF, WF, CF)
    }

    function yA(FF) {
      const WF = null === FF.path ? FF.tool : `${FF.tool} ${FF.path}`;
      var SF;
      if ("prefab" === FF.reason) return `${WF}: ${null!==(SF=FF.detail)&&void 0!==SF?SF:"the prefab couldn't go in."} Nothing changed.`;
      if ("missingArgs" === FF.reason) return `${WF}: the call was missing an argument it needs, so nothing changed.`;
      if ("placeholder" === FF.reason) return "write_file" === FF.tool ? `${WF}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${WF}: the code had a line standing in for code left out ("// ... existing code ..."), so nothing changed. Write out every line it replaces.`;
      if ("unread" === FF.reason) return `${WF}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==FF.path&&(0,EF.c)(FF.path)?"view_world_code":"view_file"} shows.`;
      if ("brokenCode" === FF.reason) return `${WF}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
      return `${WF}: search matched nothing in the file, so nothing changed. ${FF.closest?`The closest lines (${FF.closest.line}-${FF.closest.lastLine}) are:\n${FF.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${FF.functions.length>0?`, or use replace_function with one of these names: ${FF.functions.join(", ")}`:""}.`
    }
    const sC = {
        offer: "matched",
        list: "matched",
        categories: !1,
        helperIndex: !0
      },
      nC = /\b(?:game|minigame|mini-game|gamemode|game mode|map|server)\b/i;

    function HC(FF) {
      return Object.values(FF).some((FF => "" !== FF.trim()))
    }
    const KC = {
        format: "simple",
        nativeTools: !1
      },
      wC = FF => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engine calls special top-level functions ("callbacks") when things happen: function onPlayerJoin(playerId) {...}, function tick(ms) {...}, function playerCommand(playerId, command) {...} and the others ${FF?"in the docs":"in the callback list"}. Define each callback once; never call callbacks yourself.\n- playerCommand gets the chat line without its "/" (e.g. "speed 2"); return true when you handled the command, so the player isn't told it is unknown.\n- tick(ms) runs 20 times a second, with the milliseconds since the last tick. Count time with it (add up ms) instead of setTimeout, and keep it light.\n- Talk to the game only through the api object: api.sendMessage(playerId, text), api.setClientOption(playerId, option, value) and the other methods ${FF?"in the docs":"in the API list"}. Use only methods, callbacks and client options that are ${FF?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables at the top level keep their values while the world runs. Players are identified by playerId (a string, not their name).\n- Values you keep per player (lists, timers, scores, teams) need a start in onPlayerJoin and removing in onPlayerLeave(playerId), so tick never uses a player who left.\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n- Settings: numbers and messages the creator may want to change (times, amounts, prices, speeds, messages shown to players, on/off switches) go in one const CONFIG = { ... } at the top of the file, each value a plain number, a quoted string or true/false with a short comment saying what it does, e.g. waveSeconds: 30, // seconds between zombie waves. The code uses CONFIG.waveSeconds, and a message that mentions a setting builds it from CONFIG ("You start with " + CONFIG.startCoins + " coins"), so changing the setting changes the message too. If the file has a CONFIG, add new settings to it and change a setting there; never make a second one. Don't move code they didn't ask about into CONFIG.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(playerId).\n- Flying: api.setClientOption(playerId, "creative", true) (false to stop).\n- Leaderboard: in onPlayerJoin, api.setClientOption(playerId, "lobbyLeaderboardInfo", { name: { displayName: "Name", sortPriority: 0 }, coins: { displayName: "Coins", sortPriority: 1 } }); then whenever a value changes, api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: 5 }, true).\n- Text on the right of the screen: api.setClientOption(playerId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(playerId, api.getClientOption(playerId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(playerId); api.setPosition(playerId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(playerId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- A player who can't play any more (e.g. out of lives): api.setPlayerGamemode(playerId, "spectator"); "survival" brings them back.\n- Mob waves: api.attemptSpawnMob(mobType, x, y, z) returns the mob's id. Keep the ids, and remove each in onMobDespawned(mobId) to know when they are all dead.\n- Removing or changing a block later: count ms in tick, then api.setBlock(x, y, z, "Air").\n- Coins as a currency: make it once in onPlayerJoin, only if they don't have it yet (a saved one comes back by itself, and setCurrency again would reset it): if (api.getCurrencyAmount(playerId, "coins") === null) api.setCurrency(playerId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(playerId, "coins", 5). When the request says anything is saved or kept after leaving (e.g. "it saves if you leave"), the coins are saved too: add persistent: true. Otherwise leave it out.\n- Values the request says must stay after leaving (e.g. when they last claimed a reward): api.setPlayerDbValue(playerId, "lastClaim", Date.now()) and api.getPlayerDbValue(playerId, "lastClaim") (null if never set); a saved value is a string or a number. Only those: lives, scores, checkpoints and timers for one game stay in top-level variables, which reset when they leave.\n- A player dying, from anything: onAttemptKillPlayer(killedPlayerId, attackingLifeformId). onPlayerKilledOtherPlayer only covers kills by players.\n- Stopping one player hurting another (e.g. teammates): onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) returns "preventDamage". onAttemptKillPlayer only stops the death, not the damage.\n- A counter of how long each player has been alive: in tick, count only while api.isAlive(playerId), and start again from 0 in onRespawnRequest (the death screen isn't time alive). Other timers don't need this.\n- A reward for reaching a count (5 kills, 10 coins): give it when the count first reaches it (=== 5, or keep a per-player flag such as rewarded[playerId] = true), never on every count after (>= 5 alone gives it again each time).\n- Telling whether a player moved: compare with where they were after any teleport of yours (update the saved position when you teleport them), or your own teleport counts as them moving.\n- A box around a player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position. A bottom corner at by would fill the block they stand in; replacing the ground under them is fine. If they should be trapped, also stop them breaking it: api.setCantChangeBlockRect(playerId, [bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2]).`,
      XC = FF => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to coding.\n\nHow code blocks work:\n- Each click runs the whole code once, from top to bottom. A code block has no callbacks: something that has to happen later or by itself (when players join, every tick, on a chat command, when a player breaks a block) needs World Code, the world's main code, where callbacks such as onPlayerJoin(playerId), tick() and playerCommand(playerId, command) are defined as functions. Write that part as World Code (see How to answer), and put what one click does in the code block.\n- myId is the id of the player who clicked the block (a string, not their name), and thisPos is the block's position as [x, y, z].\n- Talk to the game only through the api object: api.sendMessage(myId, text), api.setClientOption(myId, option, value) and the other methods ${FF?"in the docs":"in the API list"}. Use only methods and client options that are ${FF?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables made with const or let start again on every click. A value kept between clicks is assigned without const or let, after checking it is there, e.g. clicks = (typeof clicks === "number" ? clicks : 0) + 1. It lasts until World Code is next saved or the world restarts.\n- When the last line has a value, the player who clicked sees it in chat as "Result: ...".\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(myId).\n- Teleporting the player onto this block: api.setPosition(myId, thisPos[0] + 0.5, thisPos[1] + 1, thisPos[2] + 0.5).\n- A block next to this one: api.setBlock(thisPos[0], thisPos[1] + 1, thisPos[2], "Block of Gold").\n- Flying: api.setClientOption(myId, "creative", true) (false to stop).\n- Text on the right of the screen: api.setClientOption(myId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(myId, api.getClientOption(myId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(myId); api.setPosition(myId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(myId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- Coins as a currency: make it only if they don't have it yet (setCurrency again would reset it): if (api.getCurrencyAmount(myId, "coins") === null) api.setCurrency(myId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(myId, "coins", 5).\n- A box around the player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position.`,
      UC = {
        search: "lines to find",
        replace: "lines to put instead",
        codeBlock: "...all of the code block's code...",
        file: "...the whole new file...",
        worldCode: "...only the World Code to add...",
        function: "function onPlayerJoin(playerId) {\n\t...the whole new function...\n}"
      },
      BC = Object.values(UC);
    const jA = `You looked at World Code: its files are below, their paths starting ${EF.k}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${EF.k}index.js (in World Code the player is playerId; there is no myId or thisPos). A callback World Code already has is changed in place, with what it already does kept, never defined twice. Keep the code block's own change on the path ${EF.b}, and leave it out if the request is all World Code. They are taken to World Code to see the change.`;

    function vA(FF, WF, SF, CF) {
      var AF, uF, hF, bW;
      let {
        hasWorldCodeFiles: dF,
        hasLookedUp: PF,
        movesToWorldCode: RF,
        listedPrefabs: iW,
        guidesToPrefabs: eF
      } = CF;
      const QF = WF ? EF.b : "index.js",
        gW = WF ? `${EF.k}index.js` : QF,
        tW = (FF, WF) => IC(SF, FF, WF),
        TF = WF => FF.some((FF => FF.name === WF)),
        aW = FF.filter((FF => ["content", "replace", "code"].some((WF => WF in FF.inputSchema.properties)))),
        kW = TF("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${tW("edit_code_in_place",{why:"what this fix does",search:UC.search,replace:UC.replace})}` : "",
        qW = TF("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world as your custom game now!\n${tW("export_game",{})}` : "",
        VF = TF("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a name the file doesn't have yet, it adds your new callback or function at the end, changing nothing already there:\n${tW("replace_function",{path:gW,name:"onPlayerJoin",why:"what the new function does",code:UC.function})}` : "",
        NF = TF("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${tW("edit_file",{path:QF,why:"what this part's change does",search:UC.search,replace:UC.replace})}` : "",
        DF = WF ? `2. Then give the whole new code with a write_file call, exactly like this:\n${tW("write_file",{path:QF,why:"what the change does",content:UC.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${tW("write_file",{path:QF,why:"what the change does",content:UC.file})}`,
        LF = WF ? "" : ` If there is no code yet, write it in ${QF}.`,
        mW = tW("switch_to_world_code", {}),
        OF = WF ? dF ? `\n${jA}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is no myId or thisPos), exactly like this:\n${tW("add_world_code",{code:UC.worldCode})}\n${RF?"In your sentences, say which part goes in World Code: they are taken there, and it is put in for them.":"In your sentences, say which part goes in World Code and that they should press the World Code button to switch there and add it."} Leave out the code block's write_file call if the request is all World Code.${TF("view_world_code")?`\nTo see what World Code already has before you write that part (a callback it may already define), look at it first:\n${tW("view_world_code",{})}`:""}\nWhen the request is all World Code, also call switch_to_world_code after add_world_code: it takes them to World Code, where its AI Helper is asked to add your World Code part. Give a request instead when they asked to go to World Code for something else:\n${mW}` : "",
        xW = eF && TF("use_prefab") && iW.length >= 2,
        ZF = xW ? iW.slice(0, 3).map((FF => FF.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
        oF = xW ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
        YF = TF("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or asking to make their game better, more fun or cooler without saying how ("make it more fun"): then the choices are 2 to 4 different ideas built on what their code already has, each a short concrete thing to add, not a general word like "more fun" (e.g. for a snowball fight: "Power-ups that drop in", "A score at the top", "Last player standing wins"). Otherwise build it, choosing sensibly, and say in your sentences what you chose so they can ask for something different. Never ask for personal details (name, age, school, where they live).${oF}\n${tW("ask_creator",{question:"What kind of game should it be?",choices:ZF,allow_other:"true"})}` : "",
        MF = TF("plan") ? `\n${"deepseek"===SF?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, the first one playable. Then send no code: the creator builds the steps one at a time. Build it at once instead if it is really only a few lines:\n${tW("plan",{steps:"Give each player 0 coins when they join, shown on screen\nEarn a coin for each block broken\nA /shop command that sells a sword for 10 coins"})}` : "",
        cW = null !== (AF = iW[0]) && void 0 !== AF ? AF : lS("parkour"),
        GF = (null !== (uF = null === cW || void 0 === cW ? void 0 : cW.settings) && void 0 !== uF ? uF : []).slice(0, 2).map((FF => `${FF.key}: ${FF.value}`)).join("\n");
      return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from what they asked. Don't promise it works: they will press Submit and try it. No long lectures.\n${DF}${VF}${NF}${kW}${OF}${TF("use_prefab")?`\nFor a game, or a feature (a kit, a shop, rewards...), that a prefab listed below fits, put the prefab in with use_prefab instead of writing that code yourself: it is tested code that works, and it fits around the code they already have: their code stays as it is, and where both have the same callback (onPlayerJoin...) both run, so never rewrite their code to make room for a prefab. Give only the settings the request changes, one per line as key: value, each value written as in JavaScript (text in quotes, positions as [x, y, z]); the rest keep their defaults. For a game like the one asked for but not the same, still use the closest prefab, then in the same answer, after the use_prefab call, change what it doesn't do: replace one of its functions by name, or add a callback, with replace_function. If no prefab fits, write the code yourself:\n${tW("use_prefab",{name:null!==(hF=null===cW||void 0===cW?void 0:cW.name)&&void 0!==hF?hF:"parkour",settings:GF,why:null!==(bW=null===cW||void 0===cW?void 0:cW.summary)&&void 0!==bW?bW:"a parkour course"})}`:""}${qW}${YF}${MF}${TF("remember")?`\nIf the creator tells you something lasting about their game that later requests should know (its idea, its rules, names of teams, items or places in it), also call remember with one short sentence about the game. They are asked before it is kept. Only what they said, never personal details, and not what the code already shows:\n${tW("remember",{note:"A zombie survival game: a wave comes every 30 seconds and players start with a sword"})}`:""}${function(FF,WF,SF){const CF=FF.some((FF=>"fetch_url"===FF.name)),AF={view_file:`To see another of their files from the list, before you change it:\n${WF("view_file",{path:"shop.js"})}`,view_world_code:`To see World Code, so you can change it yourself:\n${WF("view_world_code",{})}`,view_chunk:`To see the blocks around the player (or give a position "x y z" for another chunk near them):\n${WF("view_chunk",{})}`,view_game_state:`To see where the player is, their health, what they hold and carry, and the players and mobs near them:\n${WF("view_game_state",{})}`,fetch_url:`To read the docs: ${rW.k} lists every docs page with its link. Read it, then the page you need (for a long page, the part that has it):\n${WF("fetch_url",{url:rW.k})}`,get_docs:CF?`Or, for a name you already know, read its docs in full, or list every api method, callback or client option by name (${rS}):\n${WF("get_docs",{name:"setClientOption"})}\n${WF("get_docs",{list:"callbacks"})}`:`To read the full docs of an api method, callback or client option the lists only name:\n${WF("get_docs",{name:"setClientOption"})}`,find_names:`To find the exact names of blocks, items or mobs:\n${WF("find_names",{words:"gold sword"})}`,view_errors:`To see all the errors their world showed, not only the newest:\n${WF("view_errors",{})}`,list_prefabs:`To see the prefabs for one kind of game, and the ready-made functions for it:\n${WF("list_prefabs",{category:"pvp"})}`,view_prefab:`To see one prefab in full, every setting and the functions to replace to change it, before you use it:\n${WF("view_prefab",{name:"parkour"})}`},uF=FF.flatMap((FF=>{const WF=AF[FF.name];return void 0===WF?[]:[WF]}));return 0===uF.length?SF?"\nYou have looked things up as many times as you can: answer now with what you found.":"":`\
      nIf you need to see something before you can answer well, look it up first: answer with only look - up calls, no other words and no code, and you are asked again with what they found.$ {
        CF ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when the answer depends on it."
      }\
      n$ {
        uF.join("\n")
      }
      `}(FF,tW,PF)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't ask for: suggest them in your answer instead.${LF}\n4. If the request is not about their ${WF?"code block":"World Code"}, or asks for something unsafe or unkind, say briefly that you can only help with their game's code.\nDo not put code anywhere except in ${aW.map((FF=>FF.name)).join(" or ")} calls. ${function(FF){return HW[FF].callStyle}(SF)}`
    }

    function JC(FF, WF, SF) {
      return Object.keys(FF).filter((FF => !SF || !(0, EF.c)(FF))).sort(((FF, SF) => (SF === WF ? 1 : 0) - (FF === WF ? 1 : 0) || FF.localeCompare(SF)))
    }

    function pC(FF, WF, SF) {
      var CF;
      const AF = JC(FF, WF, SF);
      return null !== WF && AF.includes(WF) ? WF : null !== (CF = AF[0]) && void 0 !== CF ? CF : null
    }

    function lC(FF) {
      const WF = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${FF.includes("index.ts")?"index.ts":"index.js"}`;
      return `Only ${WF} runs by itself: another file runs when ${WF} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${WF}.\n`
    }

    function FA(FF, WF) {
      var SF;
      const {
        files: CF,
        activePath: AF
      } = FF, uF = !0 === FF.codeBlock, hF = JC(CF, AF, uF);
      if (0 === hF.length || hF.every((FF => "" === CF[FF].trim()))) return uF ? "There is no code yet: the code block is empty." : hF.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
      const bW = null !== (SF = pC(CF, AF, uF)) && void 0 !== SF ? SF : hF[0];
      return `${hF.length>1?`Their files:\n${hF.map((FF=>{const WF=""===(SF=CF[FF])?0:SF.replace(/\n$/,"").split("\n").length;var SF;return`- ${FF}: ${1===WF?"1 line":`${WF} lines`}${FF===bW?" (open in the editor, its code below)":""}`})).join("\n")}\n${uF?"":lC(hF)}\n`:""}${function(FF,WF,SF,CF){return WF.map((WF=>HW[CF].fileResult(WF,FF[WF],WF===SF))).join("\n\n")}(CF,[bW],AF,WF)}`
    }

    function WA(FF) {
      var WF, SF, CF, AF, uF, hF;
      return {
        codeBlock: !0 === FF.codeBlock,
        hasCode: "" !== (null !== (WF = FF.files[null !== (SF = FF.activePath) && void 0 !== SF ? SF : ""]) && void 0 !== WF ? WF : "").trim(),
        hasBigFile: Object.values(FF.files).some((FF => FF.length > 6e3)),
        wantsExport: GC(FF.request),
        canAsk: !0 === FF.canAsk,
        canRemember: !0 === (null === (CF = FF.about) || void 0 === CF ? void 0 : CF.canRemember),
        isBigRequest: dW(FF.request),
        canLookUp: !0 === FF.canLookUp,
        hasOtherFiles: Object.keys(FF.files).length > 1,
        hasErrors: FF.errors.length > 0,
        canChangeWorldCode: !0 === FF.canChangeWorldCode,
        hasWorldCodeFiles: Object.keys(FF.files).some(EF.c),
        offersPrefabs: (AF = FF.request, uF = FF.files, hF = SA(FF), "never" !== hF.offer && ("always" === hF.offer || eC(AF, 1).length > 0 || dW(AF) || !HC(uF) && nC.test(AF))),
        listsPrefabs: SA(FF).categories,
        looksUpDocs: !0 === FF.looksUpDocs
      }
    }

    function SA(FF) {
      var WF;
      return null !== (WF = FF.prefabs) && void 0 !== WF ? WF : sC
    }

    function CA(FF, WF) {
      return "deepseek" === WF ? function(FF) {
        const WF = zA[FF ? "codeBlock" : "worldCode"];
        return TW.filter((FF => WF.has(FF.name)))
      }(!0 === FF.codeBlock) : function(FF) {
        const WF = (FF.hasCode || FF.hasBigFile) && !FF.codeBlock || !0 === FF.hasWorldCodeFiles,
          SF = !0 === FF.canLookUp,
          CF = FF.codeBlock && !0 === FF.canChangeWorldCode && !0 !== FF.hasWorldCodeFiles && SF,
          AF = {
            write_file: !0,
            edit_file: FF.hasBigFile,
            replace_function: WF,
            insert_code: !1,
            add_world_code: FF.codeBlock && !0 !== FF.hasWorldCodeFiles,
            edit_code_in_place: FF.hasCode,
            export_game: FF.wantsExport,
            switch_to_world_code: FF.codeBlock,
            ask_creator: FF.canAsk,
            remember: !0 === FF.canRemember && !FF.codeBlock,
            plan: !0 === FF.isBigRequest && FF.canAsk && !FF.codeBlock,
            view_file: SF && !0 === FF.hasOtherFiles && !FF.codeBlock,
            view_world_code: CF,
            view_chunk: SF,
            view_game_state: SF,
            get_docs: SF,
            fetch_url: SF && !0 === FF.looksUpDocs,
            find_names: SF,
            view_errors: SF && !0 === FF.hasErrors,
            use_prefab: !0 === FF.offersPrefabs && !FF.codeBlock,
            list_prefabs: SF && !0 === FF.listsPrefabs && !FF.codeBlock,
            view_prefab: SF && !0 === FF.offersPrefabs && !FF.codeBlock
          };
        let uF = TW.filter((FF => AF[FF.name]));
        for (const hF of ["remember", "plan"]) uF.filter((FF => !aS(FF.name))).length > 7 && (uF = uF.filter((FF => FF.name !== hF)));
        return uF
      }(WA(FF))
    }

    function AA(FF, WF) {
      var SF, CF;
      const AF = WA(FF),
        uF = !0 === AF.canLookUp,
        hF = (null !== (SF = null === (CF = FF.lookups) || void 0 === CF ? void 0 : CF.length) && void 0 !== SF ? SF : 0) > 0,
        bW = !0 === AF.hasWorldCodeFiles,
        dF = [AF.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", AF.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", uF ? "" : hF ? "You have looked things up as many times as you can: answer now with what you found, calling no view_ tool, get_docs or find_names." : "Answer with what you have: call no view_ tool, get_docs or find_names.", uF && !0 !== AF.hasErrors ? "Their world showed no errors, so don't call view_errors." : "", ...AF.codeBlock ? [AF.canAsk ? "" : "Build what they asked: don't call ask_creator.", bW ? `${jA} So don't call add_world_code or view_world_code.` : "", bW || !0 !== AF.canChangeWorldCode ? "" : "When part of it needs World Code, say which part goes there: they are taken to World Code, and it is put in for them.", bW || !0 === AF.canChangeWorldCode && uF ? "" : "Don't call view_world_code.", bW ? "" : "The code block has no functions, so don't call replace_function."] : [AF.canAsk ? "" : "Build what they asked: don't call ask_creator or plan.", AF.canAsk && !0 !== AF.isBigRequest ? "This request isn't big, so build it rather than calling plan." : "", AF.wantsExport ? "" : "They haven't asked to save, so don't call export_game.", !0 === AF.canRemember ? "" : "Their AI notes are full, so don't call remember.", uF && !0 !== AF.hasOtherFiles ? "They have only the one file, so don't call view_file." : "", !0 === AF.offersPrefabs ? "" : "No prefab fits this request, so don't call use_prefab or view_prefab.", AF.canAsk && !0 === SA(FF).guide && WF.length >= 2 ? `When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles (${WF.slice(0,3).map((FF=>FF.title)).join(", ")}...): the one they pick is put in with use_prefab next.` : ""]].filter((FF => "" !== FF));
      return dF.length > 0 ? `\n\nFor this request: ${dF.join(" ")}` : ""
    }

    function uA(FF, WF) {
      var SF, CF, AF, uF, hF, bW;
      let dF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KC,
        {
          docsInTurn: PF = !1,
          carried: RF = !1
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const iW = "deepseek" === dF.format,
        eF = Object.values(WF.files).join("\n"),
        EF = WF.history.slice(-2).map((FF => FF.text)).join("\n"),
        QF = `${WF.request}\n${EF}\n${WF.errors.join("\n")}`,
        rW = !0 === WF.looksUpDocs,
        gW = rW && !0 === WF.canLookUp ? [] : FF.find(QF, eF, 12),
        tW = FF.matchItemAndBlockNames(QF, 12),
        TF = !0 === WF.codeBlock,
        aW = TF ? "myId" : "playerId",
        kW = CA(WF, dF.format),
        qW = kW.some((FF => "use_prefab" === FF.name)),
        VF = !qW || iW && !0 !== WA(WF).offersPrefabs ? [] : function(FF, WF, SF) {
          if ("never" === SF.offer || "none" === SF.list) return [];
          if ("all" === SF.list) return [...vC];
          const CF = eC(FF, 4);
          if (HC(WF) || !nC.test(FF) && !dW(FF)) return CF;
          const AF = vC.filter((FF => "game" === FF.kind && !CF.includes(FF)));
          return [...CF, ...AF]
        }(WF.request, WF.files, SA(WF)),
        NF = qW ? function(FF, WF, SF) {
          const CF = WF ? `\nOther kinds of game have prefabs too: look them up with list_prefabs (${Object.keys(JS).join(", ")}).` : "";
          if (0 === FF.length) return WF ? `## Prefabs (ready-made games)${CF}` : "";
          const AF = SF && FF.includes(SF) ? `\nThis request fits ${SF.name}: put it in with use_prefab, then change only what the request wants differently: what it already does needs no code of yours (its sidebar is the text on the right of the screen).\n${iA(SF,!1)}` : "";
          return `## Prefabs: ready-made games and features to start from (use_prefab)\n${FF.map(PC).join("\n")}${AF}${CF}`
        }(VF, SA(WF).categories, eC(WF.request, 1)[0]) : "",
        DF = TF || !0 !== SA(WF).inlineCode ? "" : function(FF) {
          const WF = eC(FF, 1)[0];
          if (!WF) return "";
          const SF = AC(WC(WF)).text;
          return `## Tested code for this kind of game (${WF.title})\nThis code works. Start from it: put it in the file, keeping what the file already has, and change what the request needs. Change settings in its CONFIG.\n\`\`\`js\n${SF}\`\`\``
        }(WF.request),
        LF = [gW.length > 0 ? `## Docs for this request\n${gW.map((FF=>FF.text)).join("\n\n")}` : "", tW.length > 0 ? `## Exact item and block names that match the request\n${tW.join(", ")}` : ""].filter((FF => "" !== FF)),
        mW = [{
          role: "system",
          content: fC([TF ? XC(rW) : wC(rW), ...rW ? [] : [TF ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${FF.index("callback")}` : `## Callbacks (all of them)\n${FF.index("callback")}`, `## API methods (all of them, call as api.name(...))\n${FF.index("api")}`, `## Client options (all of them, set with api.setClientOption(${aW}, name, value))\n${FF.index("clientOption")}`], ...PF ? [] : LF, FF.mobTypes.length > 0 ? `## Mob types (for api.attemptSpawnMob)\n${FF.mobTypes.join(", ")}` : "", iW ? "" : NF, !TF && SA(WF).helperIndex ? `## Ready-made functions (call them by name, without api. and without writing them: their code is added to the file by itself; get_docs shows one)\n${nS.map((FF=>FF.signature)).join(", ")}` : "", iW ? "" : DF, vA(kW, TF, dF.format, iW ? {
            hasWorldCodeFiles: !1,
            hasLookedUp: !1,
            movesToWorldCode: !1,
            listedPrefabs: [],
            guidesToPrefabs: !1
          } : {
            hasWorldCodeFiles: !0 === WA(WF).hasWorldCodeFiles,
            hasLookedUp: (null !== (SF = null === (CF = WF.lookups) || void 0 === CF ? void 0 : CF.length) && void 0 !== SF ? SF : 0) > 0,
            movesToWorldCode: !0 === WF.canChangeWorldCode,
            listedPrefabs: VF,
            guidesToPrefabs: !0 === SA(WF).guide
          })].filter((FF => "" !== FF)).join("\n\n"), kW, dF.format, dF.nativeTools)
        }];
      if (!iW)
        for (const IF of WF.history) mW.push({
          role: IF.role,
          content: IF.text
        });
      const OF = iW && !RF && WF.history.length > 0 ? `Earlier in this chat:\n${WF.history.map((FF=>`${"user"===FF.role?"They asked":"You answered"}: ${FF.text}`)).join("\n")}\n\n` : "",
        xW = null !== (AF = WF.about) && void 0 !== AF && AF.notes.length ? `AI notes (notes they kept):\n${WF.about.notes.map((FF=>`- ${FF}`)).join("\n")}\n\n` : "",
        ZF = null !== (uF = WF.about) && void 0 !== uF && uF.outline ? `Outline of their code:\n${WF.about.outline}\n\n` : "",
        oF = WF.errors.length > 0 ? `\n\nErrors their world showed recently:\n${WF.errors.slice(-5).join("\n")}` : "",
        YF = null === (hF = WF.failedEdits) || void 0 === hF || !hF.length || iW && RF ? "" : `\n\nWhat happened to your last answer's changes:\n${function(FF,WF){return FF.map((FF=>HW[WF].editFailure(FF.tool,yA(FF)))).join("\n\n")}(WF.failedEdits,dF.format)}`,
        MF = [...PF ? LF : [], ...iW ? [NF, DF] : []].filter((FF => "" !== FF)).map((FF => `${FF}\n\n`)).join(""),
        cW = null === (bW = WF.lookups) || void 0 === bW || !bW.length || iW && RF ? "" : `\n\nWhat you looked up for this request:\n${GF=WF.lookups,zW=dF.format,GF.map((FF=>HW[zW].lookupResult(FF.tool,FF.about,FF.text))).join("\n\n")}`;
      var GF, zW;
      return mW.push({
        role: "user",
        content: `${MF}${xW}${ZF}${OF}Their code now:\n${FA(WF,dF.format)}${oF}${YF}${cW}${iW?AA(WF,VF):""}\n\nTheir request: ${WF.request}`
      }), mW
    }
    var hA = SF(37752);

    function bu(FF) {
      var WF, SF, CF, AF, uF, hF;
      const {
        args: bW
      } = FF;
      switch (FF.name) {
        case "view_file":
          return null !== (WF = bW.path) && void 0 !== WF ? WF : "a file";
        case "view_world_code":
          return "your World Code";
        case "view_chunk":
          return bW.position ? `the blocks near ${null!==(SF=null===(CF=(0,hA.d)(bW.position))||void 0===CF?void 0:CF.map(Math.floor).join(", "))&&void 0!==SF?SF:bW.position}` : "the blocks around you";
        case "view_game_state":
          return "what you see in your world";
        case "get_docs":
          return bW.name ? `the docs for ${bW.name}` : `the list of ${PA(null!==(AF=bW.list)&&void 0!==AF?AF:dA)}`;
        case "fetch_url":
          return function(FF) {
            const WF = void 0 === FF ? null : TF(FF);
            if (null === WF) return null !== FF && void 0 !== FF ? FF : "a docs page";
            return aW(WF) ? "the list of docs pages" : `the docs page ${function(FF){const WF=(0,rW.x)(FF);return null===WF?FF:`${WF.name}${null===WF.part?"":`/${WF.part}`}`}(WF)}`
          }(bW.url);
        case "find_names":
          return `names for "${null!==(uF=bW.words)&&void 0!==uF?uF:""}"`;
        case "view_errors":
          return "your world's errors";
        case "list_prefabs":
          return bW.category ? `the ready-made ${bW.category} games` : "the ready-made games";
        case "view_prefab":
          return `the ready-made ${null!==(hF=bW.name)&&void 0!==hF?hF:"game"}`
      }
    }
    const dA = "functions";

    function PA(FF) {
      return FF.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
    }

    function RA(FF) {
      return "get_docs" === FF.name || "fetch_url" === FF.name
    }
    async function iu(FF, WF) {
      var SF;
      const CF = bu(FF),
        AF = WF => ({
          result: {
            tool: FF.name,
            about: CF,
            text: WF
          }
        });
      switch (FF.name) {
        case "view_file":
          return AF((bW = FF.args.path, dF = WF.files, void 0 === bW ? "No path was given: give the path of a file from the list." : Object.hasOwn(dF, bW) ? "" === dF[bW] ? `${bW} is empty.` : dF[bW] : `There is no file called ${bW}. Their files are: ${Object.keys(dF).join(", ")}.`));
        case "view_world_code": {
          const FF = WF.readWorldCode ? await WF.readWorldCode() : null;
          if (null === FF) return AF("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
          const SF = Object.keys(FF).sort(),
            CF = Object.fromEntries(SF.map((WF => [`${EF.k}${WF}`, FF[WF]]))),
            uF = SF.map((WF => `${EF.k}${WF}:\n${""===FF[WF]?"(empty)":FF[WF]}`)).join("\n\n"),
            hF = SF.length > 1 ? `\n\n${lC(SF,EF.k)}` : "";
          return {
            ...AF("" === uF ? `World Code has no code yet: ${EF.k}index.js is empty.` : `${uF}${hF}`),
            worldCodeFiles: CF
          }
        }
        case "view_chunk":
          return AF(await WF.viewChunk((0, hA.d)(FF.args.position)));
        case "view_game_state":
          return AF(await WF.viewGameState());
        case "get_docs":
          return AF(function(FF, WF, SF) {
            if (void 0 === FF) {
              const FF = (0, qW.d)(QW, PA(null !== WF && void 0 !== WF ? WF : dA));
              return void 0 === FF ? `There is no list called ${WF}: ask for ${rS}.` : SF.index(FF)
            }
            const CF = SF.section(FF);
            if (CF) return CF.text;
            const AF = SF.find(FF, "", 3).map((FF => FF.name)).join(", ");
            return `Nothing is called ${FF}.${""===AF?"":` The closest names are: ${AF}.`}`
          }(FF.args.name, FF.args.list, WF.docs));
        case "fetch_url":
          return AF(await WF.fetchDocsPage(null !== (SF = FF.args.url) && void 0 !== SF ? SF : ""));
        case "find_names": {
          var uF, hF;
          const SF = WF.docs.searchNames(null !== (uF = FF.args.words) && void 0 !== uF ? uF : "", 20);
          return AF(SF.length > 0 ? SF.join(", ") : `No block, item or mob name has any of the words "${null!==(hF=FF.args.words)&&void 0!==hF?hF:""}".`)
        }
        case "view_errors":
          return AF(WF.errors.length > 0 ? WF.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
        case "list_prefabs":
          return AF(RC(FF.args.category));
        case "view_prefab":
          return AF(function(FF, WF) {
            const SF = void 0 === FF ? null : lS(FF);
            return SF ? iA(SF, WF) : `There is no prefab called ${null!==FF&&void 0!==FF?FF:"that"}.\n${RC()}`
          }(FF.args.name, !0 === WF.showPrefabCode))
      }
      var bW, dF
    }
    const eA = [
      [/\bme\b/gi, "the player"],
      [/\bmyself\b/gi, "the player"],
      [/\bmy\b/gi, "the player's"],
      [/\byou\b/gi, "the player"],
      [/\byour\b/gi, "the player's"],
      [/\b(people|persons|humans)\b/gi, "players"],
      [/\b(person|human)\b/gi, "player"],
      [/\b(kids|children)\b/gi, "NPCs"],
      [/\b(kid|child)\b/gi, "NPC"],
      [/\bkill\b/gi, "eliminate"],
      [/\bkills\b/gi, "eliminates"],
      [/\bkilled\b/gi, "eliminated"],
      [/\bkilling\b/gi, "eliminating"],
      [/\bshoot players\b/gi, "shoot the players"],
      [/\bshoots players\b/gi, "shoots the players"],
      [/\bshooting players\b/gi, "shooting the players"],
      [/\bbomb\b/gi, "explosion"],
      [/\bbombs\b/gi, "explosions"],
      [/\bsteal\b/gi, "take"],
      [/\bsteals\b/gi, "takes"],
      [/\bstealing\b/gi, "taking"],
      [/\bstole\b/gi, "took"],
      [/\bstolen\b/gi, "taken"]
    ];

    function EA(FF) {
      let WF = FF;
      for (const [SF, CF] of eA) WF = WF.replace(SF, (FF => FF.length > 1 && FF[0] !== FF[0].toLowerCase() && FF.slice(1) === FF.slice(1).toLowerCase() ? CF[0].toUpperCase() + CF.slice(1) : CF));
      return WF
    }
    const QA = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      ru = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
      gu = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
      tu = 12e3,
      TA = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);

    function au(FF) {
      var WF, SF, CF;
      const AF = null === (WF = /Safety:\s*(\w+)/.exec(FF)) || void 0 === WF ? void 0 : WF[1],
        uF = null !== (SF = null === (CF = /Categories:\s*(.+)/.exec(FF)) || void 0 === CF ? void 0 : CF[1]) && void 0 !== SF ? SF : "";
      return /PII/.test(uF) ? "personalInfo" : "Unsafe" === AF || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(uF) ? "unsafe" : "ok"
    }

    function ku(FF) {
      var WF, SF, CF;
      const AF = null === (WF = /Safety:\s*(\w+)/.exec(FF)) || void 0 === WF ? void 0 : WF[1];
      if (!AF) return null;
      const uF = (null !== (SF = null === (CF = /Categories:\s*(.+)/.exec(FF)) || void 0 === CF ? void 0 : CF[1]) && void 0 !== SF ? SF : "").split(",").map((FF => FF.trim())).filter((FF => "" !== FF && "None" !== FF));
      return "Safe" !== AF && uF.some((FF => /Sexual/.test(FF))) ? "unsafe" : "Unsafe" !== AF ? "ok" : uF.length > 0 && uF.every((FF => TA.has(FF))) ? "maybeGame" : "unsafe"
    }
    async function qu(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const CF = await WF(FF),
        AF = null === CF ? null : ku(CF);
      if (null === AF) return "unchecked";
      if ("ok" === AF || "unsafe" === AF && (!SF || null === CF || /Sexual/.test(CF))) return AF;
      const uF = EA(FF);
      if (uF === FF) return "unsafe";
      const hF = await WF(uF),
        bW = null === hF ? null : ku(hF);
      return null === bW ? "unchecked" : "ok" === bW ? "ok" : "unsafe"
    }

    function VA(FF) {
      const WF = [];
      return mu(FF, 0, !1, WF), WF.map((FF => FF.trim())).filter((FF => "" !== FF))
    }
    const NA = new Set(["return", "typeof", "case", "do", "else", "in", "of", "new", "delete", "void", "throw", "instanceof", "yield", "await"]);

    function DA(FF, WF) {
      let SF = WF - 1;
      for (; SF >= 0 && /\s/.test(FF[SF]);) SF--;
      if (SF < 0 || /[(,=:[!&|?{};+\-*%<>~^]/.test(FF[SF])) return !0;
      let CF = SF;
      for (; CF > 0 && /[\w$]/.test(FF[CF - 1]);) CF--;
      return NA.has(FF.slice(CF, SF + 1))
    }

    function LA(FF, WF) {
      let SF = !1;
      for (let CF = WF + 1; CF < FF.length; CF++) {
        const WF = FF[CF];
        if ("\\" === WF) CF++;
        else {
          if ("\n" === WF) break;
          if (SF) SF = "]" !== WF;
          else if ("[" === WF) SF = !0;
          else if ("/" === WF) return CF + 1
        }
      }
      return WF + 1
    }

    function mu(FF, WF, SF, CF) {
      let AF = WF,
        uF = 0;
      for (; AF < FF.length;) {
        const WF = FF[AF],
          hF = FF[AF + 1];
        if ("/" === WF && "/" === hF) {
          const WF = FF.indexOf("\n", AF);
          CF.push(FF.slice(AF + 2, -1 === WF ? FF.length : WF)), AF = -1 === WF ? FF.length : WF
        } else if ("/" === WF && "*" === hF) {
          const WF = FF.indexOf("*/", AF + 2);
          CF.push(FF.slice(AF + 2, -1 === WF ? FF.length : WF)), AF = -1 === WF ? FF.length : WF + 2
        } else if ("/" === WF && DA(FF, AF)) AF = LA(FF, AF);
        else if ('"' === WF || "'" === WF || "`" === WF) {
          const SF = CF.length;
          CF.push("");
          let uF = "";
          for (AF++; AF < FF.length && FF[AF] !== WF;) "\\" === FF[AF] ? (uF += FF.slice(AF, AF + 2), AF += 2) : "`" === WF && "$" === FF[AF] && "{" === FF[AF + 1] ? (uF += " ", AF = mu(FF, AF + 2, !0, CF)) : (uF += FF[AF], AF++);
          CF[SF] = uF, AF++
        } else {
          if (SF && "{" === WF) uF++;
          else if (SF && "}" === WF) {
            if (0 === uF) return AF + 1;
            uF--
          }
          AF++
        }
      }
      return AF
    }
    const OA = 4e5;
    async function xu(FF, WF) {
      const [{
        clientSideServerUrls: CF
      }, {
        postJsonWithMetricsCookiesAndJsonResponse: AF
      }, {
        gameBridge: uF
      }] = await Promise.all([Promise.resolve().then((() => SF(1056))), Promise.resolve().then((() => SF(1001))), Promise.resolve().then((() => SF(1576)))]), hF = uF.latest("connectedGame").websocketUrl;
      if (!hF) throw new Error("AI Helper: not connected to a game server");
      const bW = `${CF.getHttpUrlFromWebSocketUrl(hF)}${FF}`;
      return await AF(bW, WF, {
        retries: 0
      })
    }
    const ZA = 15e3;
    let oA = [],
      YA = null;

    function MA(FF) {
      return Math.ceil(FF.length / 4)
    }

    function cu(FF) {
      return "number" === typeof FF && Number.isInteger(FF) && FF >= 0
    }

    function GA(FF, WF, SF) {
      var CF;
      let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ! function(FF) {
        if ("undefined" === typeof window) return;
        if (oA.push(FF), oA.length >= 40) return void zu();
        YA ??= setTimeout((() => {
          zu()
        }), ZA)
      }(null !== (CF = function(FF) {
        if (null === FF || "object" !== typeof FF) return null;
        const {
          prompt_tokens: WF,
          completion_tokens: SF,
          prompt_tokens_details: CF
        } = FF;
        if (!cu(WF) || !cu(SF)) return null;
        const AF = null !== CF && "object" === typeof CF ? CF.cached_tokens : void 0;
        return {
          sent: WF,
          cached: cu(AF) ? AF : 0,
          received: SF
        }
      }(FF)) && void 0 !== CF ? CF : {
        sent: MA(JSON.stringify(WF)),
        cached: 0,
        received: MA(SF) + AF
      })
    }
    async function zu() {
      null !== YA && (clearTimeout(YA), YA = null);
      const FF = oA.slice(0, 40);
      if (oA = oA.slice(40), oA.length > 0 && (YA = setTimeout((() => {
          zu()
        }), ZA)), 0 !== FF.length) try {
        await xu("/ai-helper/usage", {
          calls: FF
        })
      } catch {}
    }
    const IA = 6e4;
    const fA = new class {
        constructor() {
          this.calls = new Map, this.fullUntil = new Map
        }
        record(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          this.calls.set(FF, [...this.recent(FF, WF), WF])
        }
        markFull(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          this.fullUntil.set(FF, WF + IA)
        }
        callsInLastMinute(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          return this.recent(FF, WF).length
        }
        freeAt(FF) {
          var WF;
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          const CF = this.recent(FF, SF),
            AF = CF.length < 2 ? SF : CF[CF.length - 2] + IA;
          return Math.max(AF, null !== (WF = this.fullUntil.get(FF)) && void 0 !== WF ? WF : 0, SF)
        }
        firstFreeAt(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          return Math.min(...FF.map((FF => this.freeAt(FF, WF))))
        }
        clear() {
          this.calls.clear(), this.fullUntil.clear()
        }
        recent(FF, WF) {
          var SF;
          return (null !== (SF = this.calls.get(FF)) && void 0 !== SF ? SF : []).filter((FF => WF - FF < IA))
        }
      },
      yu = /\n{3,}/,
      sA = /<tool_call\b|<function=/;

    function nA(FF) {
      const WF = FF.trimStart(),
        SF = yu.exec(WF),
        CF = sA.exec(WF);
      if (null === SF || null !== CF && CF.index < SF.index) return null;
      const AF = WF.slice(SF.index + SF[0].length);
      return "" === AF.trim() ? null : AF
    }
    const HA = [{
      name: "Qwen3.8-27B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    }, {
      name: "gpt-oss-120b",
      temperature: 1,
      reasoningEffort: "medium"
    }, {
      name: "Qwen3.5-397B-A17B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    }, {
      name: "gpt-oss-20b",
      temperature: 1,
      reasoningEffort: "high"
    }];
    const KA = {
      name: "Qwen3.6-27B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    };

    function wA(FF) {
      var WF;
      const SF = [...HA, KA].find((WF => WF.name === FF));
      return null !== (WF = null === SF || void 0 === SF ? void 0 : SF.callFormat) && void 0 !== WF ? WF : "simple"
    }

    function XA(FF) {
      var WF;
      return {
        format: null !== (WF = FF.callFormat) && void 0 !== WF ? WF : "simple",
        nativeTools: !0 === FF.nativeTools
      }
    }

    function UA(FF, WF) {
      return "function" === typeof FF ? FF(WF) : FF
    }
    const BA = "TOO_COMPLEX",
      ju = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${BA} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an item, sending a message, teleporting, setting a block or a client option, or one callback that does one of those.\nReply ${BA} for anything more: a game or minigame, anything where players make choices, take turns or type commands with options, scores, timers, rounds or values that must be kept, more than about 10 new lines, a fix for an error, a question about what the code does, or exporting, saving or publishing the game. Reply ${BA} too if you aren't sure of an exact api method, option or item name.\nCode runs fresh each time: nothing you write remembers anything from one click or event to the next. So reply ${BA} to any request that says once, again, already, count, how many, total, times, score, every few seconds, until, wait, after or each player, whatever else it asks. "Everyone" alone is fine.\nThese are too complex: reply ${BA} to each of them, and to anything like them:\n- "Count how many times each player clicked this block", "Show how many times this block has been clicked in total": a count kept between clicks\n- "Give me a sword but only once", "Give me a sword, but only once" or "only every 10 seconds": remembering who already got it, or when\n- "Make a rock paper scissors game", "Make a parkour course", "Make a quiz": any game, round or win and lose\n- "Make a /give command" or "a /tp command that takes a player's name": commands with options to read\n- "Make a shop where I buy a sword for 10 coins": currencies, prices and checking what a player has\n- "Start a 60 second countdown", "Spawn a zombie every 5 seconds": timers and things that repeat\n- "Put players into two teams", "Show a leaderboard of the top players": sorting or grouping players\n- "Build me a house" or "a tower": many blocks placed in loops\n- "Teleport me somewhere random but safe": finding the ground or a free space\n- "Why doesn't my code work?", "Fix this error", "What does this line do?"\n- "Export the world", "Save my game", "Publish this": exporting the game is for the bigger model\nThese are small enough to answer yourself:\n- "Give me a diamond sword", "Teleport me onto this block", "Put a gold block on top of this one", "Let me fly", "Heal me", "Say hello to everyone"\n- "Welcome players when they join" (one callback with one message)`,
      vu = 24e4,
      JA = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
    class pA extends Error {
      constructor(FF) {
        super(`World Code AI ${FF}`), this.reason = FF
      }
    }

    function lA(FF) {
      switch (FF) {
        case "busy":
          return "Bot.xd is busy right now.";
        case "tooLarge":
        case "failed":
          return "The AI couldn't answer this time. Try again, or ask in fewer words.";
        case "timeout":
          return "Bot.xd was thinking for too long and timed out.";
        case "turnedAway":
          return "Bot.xd was unable to answer."
      }
    }

    function Fu(FF, WF) {
      var SF, CF, AF, uF, hF;
      const bW = FF[null !== (SF = WF.index) && void 0 !== SF ? SF : 0] ??= {
        name: "",
        args: ""
      };
      bW.name += null !== (CF = null === (AF = WF.function) || void 0 === AF ? void 0 : AF.name) && void 0 !== CF ? CF : "", bW.args += null !== (uF = null === (hF = WF.function) || void 0 === hF ? void 0 : hF.arguments) && void 0 !== uF ? uF : ""
    }

    function Wu(FF) {
      return "mcp" === FF ? "simple" : FF
    }

    function Su(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return Cu(FF, WF, SF, Wu(CF), AF).answer
    }

    function Cu(FF, WF, SF, CF, AF) {
      const uF = SF.flatMap((FF => {
        const WF = WS(FF.name, FF.args);
        return null === WF ? [] : [IC(XW(CF), WF.name, WF.args)]
      }));
      let hF = !1;
      return 0 !== uF.length || 0 !== CS(FF, CF).length || FF.includes("```") || (uF.push(...AF ? [] : function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        const CF = new Map;
        for (const bW of SS(FF, WF)) {
          const FF = Object.values(bW.args).some((FF => void 0 !== FF && SF.includes(FF.trim())));
          var AF, uF, hF;
          "export_game" === bW.name || "switch_to_world_code" === bW.name || aS(bW.name) || FF || CF.set(`${bW.name} ${null!==(AF=bW.args.path)&&void 0!==AF?AF:""} ${null!==(uF=bW.args.search)&&void 0!==uF?uF:""} ${null!==(hF=bW.args.name)&&void 0!==hF?hF:""}`, bW.source)
        }
        return [...new Set(CF.values())]
      }(WF, CF, BC)), hF = uF.length > 0), {
        answer: [FF, ...uF].join("\n\n").trim(),
        hasCallsFromReasoning: hF
      }
    }
    async function Au(FF, WF) {
      const SF = FF.getReader(),
        CF = new TextDecoder;
      let AF = "";
      for (;;) {
        const {
          done: FF,
          value: uF
        } = await SF.read();
        if (FF) break;
        AF += CF.decode(uF, {
          stream: !0
        });
        let hF = AF.indexOf("\n");
        for (; - 1 !== hF;) {
          const FF = AF.slice(0, hF).trim();
          if (AF = AF.slice(hF + 1), hF = AF.indexOf("\n"), !FF.startsWith("data:")) continue;
          const SF = FF.slice(5).trim();
          if ("[DONE]" === SF) return;
          let CF;
          try {
            CF = JSON.parse(SF)
          } catch {
            continue
          }
          WF(CF)
        }
      }
    }

    function uu(FF) {
      return FF.map((FF => ({
        type: "function",
        function: {
          name: FF.name,
          description: FF.description,
          parameters: FF.inputSchema
        }
      })))
    }

    function hu(FF) {
      return "object" === typeof FF
    }
    async function bh(FF, WF, SF, CF) {
      var AF;
      let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
      if (fA.freeAt(FF.name) > Date.now()) return "busy";
      fA.record(FF.name);
      const hF = await fetch(QA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: FF.name,
          messages: WF,
          max_tokens: 16e3,
          temperature: FF.temperature,
          reasoning_effort: FF.reasoningEffort,
          stream: !0,
          stream_options: {
            include_usage: !0
          },
          ...FF.nativeTools && uF.length > 0 ? {
            tools: uu(uF)
          } : {}
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: SF
      });
      if (429 === hF.status) return fA.markFull(FF.name), "busy";
      if (!hF.ok || !hF.body) return console.warn(`World Code AI: ${FF.name} answered ${hF.status}`), hF.ok ? "failed" : 429 === (bW = hF.status) ? "busy" : 400 === bW || 413 === bW ? "tooLarge" : 401 === bW || 403 === bW ? "turnedAway" : "failed";
      var bW;
      let dF = "",
        PF = "";
      const RF = [];
      let iW = !1,
        eF = !1,
        EF = null;
      try {
        await async function(FF, WF, SF) {
          await Au(FF, (FF => {
            var CF;
            const AF = FF,
              uF = null === (CF = AF.choices) || void 0 === CF ? void 0 : CF[0];
            var hF, bW;
            uF && WF(null !== (hF = uF.delta) && void 0 !== hF ? hF : {}, null !== (bW = uF.finish_reason) && void 0 !== bW ? bW : null), AF.usage && (null === SF || void 0 === SF || SF(AF.usage))
          }))
        }(hF.body, ((WF, SF) => {
          var AF, uF, hF, bW;
          iW ||= "length" === SF, PF += null !== (AF = null !== (uF = WF.reasoning) && void 0 !== uF ? uF : WF.reasoning_content) && void 0 !== AF ? AF : "", dF += null !== (hF = WF.content) && void 0 !== hF ? hF : "";
          for (const FF of null !== (EF = WF.tool_calls) && void 0 !== EF ? EF : []) {
            var EF;
            eF ||= "" !== PF && "" === dF.trim(), Fu(RF, FF)
          }
          const QF = FF.nativeTools && eF ? null !== (bW = nA(dF)) && void 0 !== bW ? bW : "" : dF;
          null === CF || void 0 === CF || CF({
            model: FF.name,
            reasoningChars: PF.length,
            answer: QF,
            isCalling: RF.length > 0
          })
        }), (FF => {
          EF = FF
        }))
      } finally {
        GA(EF, WF, dF + PF, 20 * RF.length)
      }
      return null !== (AF = du(FF, dF, PF, RF, iW, eF)) && void 0 !== AF ? AF : "failed"
    }

    function du(FF, WF, SF, CF, AF) {
      var uF;
      let hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bW = WF;
      var dF;
      FF.nativeTools && hF && (bW = null !== (dF = nA(bW)) && void 0 !== dF ? dF : bW);
      bW = bW.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
      const PF = Cu(bW, SF, CF, null !== (uF = FF.callFormat) && void 0 !== uF ? uF : "simple", AF);
      return "" === PF.answer ? null : {
        model: FF.name,
        answer: PF.answer,
        reasoning: SF,
        isCutShort: AF,
        hasCallsFromReasoning: PF.hasCallsFromReasoning
      }
    }

    function Pu(FF) {
      return FF.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
    }

    function Ru(FF) {
      return hu(FF) && !FF.isCutShort
    }
    async function ih(FF, WF, SF, CF, AF) {
      const uF = FF.map((() => new AbortController)),
        hF = () => {
          for (const FF of uF) FF.abort()
        };
      null !== SF && void 0 !== SF && SF.aborted && hF(), null === SF || void 0 === SF || SF.addEventListener("abort", hF, {
        once: !0
      });
      const bW = FF.map((() => {})),
        dF = FF.map((() => {}));
      let PF = null;
      const RF = FF => void 0 !== FF && ("" !== Pu(FF.answer).trim() || !0 === FF.isCalling);
      let iW = () => {};
      FF.forEach(((FF, SF) => {
        const hF = (0, gW.e)(vu, uF[SF].signal);
        bh(FF, UA(WF, FF), hF.signal, (FF => {
          dF[SF] = FF, null === PF && RF(FF) && (PF = SF), PF === SF && (null === CF || void 0 === CF || CF(FF))
        }), AF).catch((WF => {
          if (uF[SF].signal.aborted) return "failed";
          const CF = hF.signal.aborted;
          return console.warn(`World Code AI: ${FF.name} ${CF?"took longer than 240 s":"couldn't be reached"}`, WF), CF ? "timeout" : "failed"
        })).then((FF => {
          hF.clear(), bW[SF] = FF, PF !== SF || Ru(FF) || (PF = null), iW()
        }))
      }));
      const eF = () => {
        var FF;
        if (null !== PF) {
          const FF = bW[PF];
          return Ru(FF) ? {
            reply: FF
          } : void 0
        }
        const WF = bW.find(Ru);
        if (WF) return {
          reply: WF
        };
        if (!bW.includes(void 0)) return {
          reply: null !== (FF = bW.find(hu)) && void 0 !== FF ? FF : null
        };
        {
          const FF = bW.findIndex(((FF, WF) => void 0 === FF && RF(dF[WF])));
          if (-1 !== FF) {
            PF = FF;
            const WF = dF[FF];
            WF && (null === CF || void 0 === CF || CF(WF))
          }
        }
      };
      try {
        for (;;) {
          if (null !== SF && void 0 !== SF && SF.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
          const FF = eF();
          if (FF) {
            const WF = bW.filter((FF => "string" === typeof FF));
            return {
              reply: FF.reply,
              failures: WF
            }
          }
          await new Promise((FF => {
            iW = FF
          }))
        }
      } finally {
        null === SF || void 0 === SF || SF.removeEventListener("abort", hF), hF()
      }
    }

    function eu() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
      return fA.firstFreeAt(HA.map((FF => FF.name)), FF)
    }
    async function Eu(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const CF = Date.now(),
        AF = null !== (WF = SF.models) && void 0 !== WF ? WF : HA,
        uF = void 0 === SF.models ? function(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
          const CF = FF.map((FF => ({
              model: FF,
              key: SF()
            }))).sort(((FF, WF) => FF.key - WF.key)).map((FF => {
              let {
                model: WF
              } = FF;
              return WF
            })),
            AF = [...CF.filter((FF => WF(FF))), ...CF.filter((FF => !WF(FF)))],
            uF = [];
          for (let hF = 0; hF < AF.length; hF += 2) uF.push(AF.slice(hF, hF + 2));
          return uF
        }(AF, (FF => fA.freeAt(FF.name) <= CF)) : AF.map((FF => [FF])),
        hF = [];
      for (const dF of uF) {
        const WF = await ih(dF, FF, SF.signal, SF.onProgress, SF.tools);
        if (null !== WF.reply) {
          const AF = dF.find((FF => {
            var SF;
            return FF.name === (null === (SF = WF.reply) || void 0 === SF ? void 0 : SF.model)
          }));
          return {
            ...AF && !1 !== SF.canNudge ? await gh(AF, UA(FF, AF), WF.reply, SF.signal, SF.onProgress, SF.tools) : WF.reply,
            ms: Date.now() - CF
          }
        }
        hF.push(...WF.failures)
      }
      const bW = JA.find((FF => hF.includes(FF)));
      throw new pA(null !== bW && void 0 !== bW ? bW : "failed")
    }
    const Qu = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";

    function rh(FF) {
      const WF = FF.trim();
      return WF.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(WF) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(WF) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b(?:add|change|replace|update|fix|rewrite|write|create|make|edit|remove|put)\b/i.test(WF)
    }
    async function gh(FF, WF, SF, CF, AF, uF) {
      var hF;
      let bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : vu;
      if (! function(FF, WF) {
          return !FF.isCutShort && rh(FF.answer) && !FF.answer.includes("?") && 0 === CS(FF.answer, WF).length
        }(SF, null !== (hF = FF.callFormat) && void 0 !== hF ? hF : "simple")) return SF;
      const dF = [...WF, {
          role: "assistant",
          content: SF.answer
        }, {
          role: "user",
          content: Qu
        }],
        PF = (0, gW.e)(bW, CF);
      try {
        const WF = await bh(FF, dF, PF.signal, AF, uF);
        return hu(WF) && "" !== WF.answer.trim() ? WF : SF
      } catch (RF) {
        if (null !== CF && void 0 !== CF && CF.aborted) throw RF;
        return SF
      } finally {
        PF.clear()
      }
    }

    function th(FF) {
      const WF = Pu(FF);
      return /too_complex/i.test(WF) || /^\W*too[\s_-]*complex\W*$/i.test(WF.trim())
    }

    function Tu(FF) {
      const WF = Pu(FF).trim();
      return WF.length > 19 && !/^\W*too[\s_-]*complex/i.test(WF)
    }

    function ah(FF) {
      return FF.map(((FF, WF) => 0 === WF && "system" === FF.role ? {
        ...FF,
        content: FF.content + ju
      } : FF))
    }
    async function kh(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      for (const CF of ru) {
        const SF = await qh(CF, [{
          role: "user",
          content: FF
        }], WF);
        if (null !== SF && "busy" !== SF) return au(SF)
      }
      return SF ? "unchecked" : "ok"
    }
    async function qh(FF, WF, SF) {
      const CF = (0, gW.e)(2e4, SF);
      fA.record(FF);
      try {
        var AF, uF, hF, bW;
        const SF = await fetch(QA, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: FF,
            messages: WF,
            max_tokens: 40
          }),
          credentials: "omit",
          referrerPolicy: "no-referrer",
          signal: CF.signal
        });
        if (429 === SF.status) return fA.markFull(FF), "busy";
        if (!SF.ok) return null;
        const dF = await SF.json(),
          PF = String(null !== (AF = null === (uF = dF.choices) || void 0 === uF || null === (hF = uF[0]) || void 0 === hF || null === (bW = hF.message) || void 0 === bW ? void 0 : bW.content) && void 0 !== AF ? AF : "");
        return GA(dF.usage, WF, PF),
          function(FF) {
            return /Safety:/.test(FF)
          }(PF) ? PF : null
      } catch (dF) {
        if (null !== SF && void 0 !== SF && SF.aborted) throw dF;
        return null
      } finally {
        CF.clear()
      }
    }
    var Vu = SF(271),
      Nu = SF(138);
    const Du = {
        openrouter: {
          id: "openrouter",
          name: "OpenRouter",
          shortName: "OpenRouter",
          baseUrl: "https://openrouter.ai/api/v1",
          keyPage: "https://openrouter.ai/settings/keys"
        },
        anthropic: {
          id: "anthropic",
          name: "Claude (Anthropic)",
          shortName: "Claude",
          baseUrl: "https://api.anthropic.com/v1",
          keyPage: "https://console.anthropic.com/settings/keys"
        },
        openai: {
          id: "openai",
          name: "OpenAI (ChatGPT)",
          shortName: "OpenAI",
          baseUrl: "https://api.openai.com/v1",
          keyPage: "https://platform.openai.com/api-keys"
        },
        gemini: {
          id: "gemini",
          name: "Google Gemini",
          shortName: "Gemini",
          baseUrl: "https://generativelanguage.googleapis.com/v1beta",
          keyPage: "https://aistudio.google.com/apikey"
        },
        custom: {
          id: "custom",
          name: "Other AI server",
          shortName: "your AI",
          baseUrl: "",
          keyPage: ""
        }
      },
      Lu = ["openrouter", "anthropic", "openai", "gemini", "custom"],
      mh = new Set(Object.values(Du).flatMap((FF => "" === FF.baseUrl ? [] : [new URL(FF.baseUrl).host])));

    function Ou(FF) {
      return FF.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
    }

    function xh(FF) {
      return FF.startsWith("sk-or-") ? "openrouter" : FF.startsWith("sk-ant-") ? "anthropic" : FF.startsWith("AIza") ? "gemini" : FF.startsWith("sk-") ? "openai" : null
    }

    function Zu(FF) {
      let WF;
      try {
        WF = new URL(FF.trim())
      } catch {
        return null
      }
      const SF = "localhost" === WF.hostname || "127.0.0.1" === WF.hostname;
      return "https:" !== WF.protocol && ("http:" !== WF.protocol || !SF) || WF.username || WF.password || WF.search ? null : `${WF.origin}${WF.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
    }

    function ou(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return "custom" === FF && WF ? new URL(WF).host : SF ? Du[FF].shortName : Du[FF].name
    }
    class Yu extends Error {
      constructor(FF, WF, SF, CF) {
        super(`AI key request: ${FF}`), this.problem = FF, this.retryAfterMs = WF, this.status = SF, this.detail = CF
      }
    }

    function Mu(FF, WF) {
      return ("" === WF ? FF : FF.split(WF).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
    }

    function ch(FF, WF) {
      const SF = "custom" === WF ? "That server" : Du[WF].shortName;
      switch (FF) {
        case "badKey":
          return `${SF} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
        case "busy":
          return "Too many requests right now. Wait a minute and try again.";
        case "noModel":
          return `${SF} can't find that model. Check its name.`;
        case "unreachable":
          return "anthropic" === WF ? "Claude didn't accept your key: check it, or make a new one." : "custom" === WF ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help." : `Couldn't reach ${SF}. Check your internet and try again.`;
        case "noCredit":
          return "custom" === WF ? "That server stopped your key for now: it has used all it can." : `${SF} stopped your key for now: it has used all it can. Check it on ${SF}'s website.`;
        case "blocked":
          return `${SF} doesn't work from where you are.`;
        case "timeout":
          return "That took too long. Try again.";
        default:
          return `${SF} had a problem with that. Try again in a minute.`
      }
    }

    function Gu(FF) {
      var WF;
      const SF = FF.at(-1);
      if (!SF || null !== WS(SF.name, SF.args) || function(FF) {
          try {
            return JSON.parse(FF), !0
          } catch {
            return !1
          }
        }(SF.args)) return;
      const CF = null === (WF = /"path"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(SF.args)) || void 0 === WF ? void 0 : WF[1];
      return {
        name: SF.name || "write_file",
        path: CF
      }
    }
    const zh = 1e4,
      Iu = 3e5,
      fu = 16e3;
    async function yh(FF, WF, SF, CF) {
      if ("custom" !== FF && ! function(FF) {
          return mh.has(new URL(FF).host)
        }(WF)) throw new Error(`AI key request to an unknown host for ${FF}`);
      const AF = await fetch(WF, {
        ...SF,
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: CF
      });
      if (!AF.ok) {
        const WF = await AF.text().catch((() => ""));
        throw console.warn(`AI key request: ${FF} answered ${AF.status}`), new Yu(function(FF, WF, SF) {
          const CF = !("gemini" === FF && 429 === WF) && /credit|quota|billing|balance|payment|spend|budget|limit[ _]exceeded|key limit/i.test(SF);
          return 401 === WF ? "badKey" : 404 !== WF && 400 !== WF || !/model_not_found|not_found_error[^\n]{0,80}model:|models?\b[^\n]{0,80}?(does not exist|not found)|no such model|unknown model|(invalid|not a valid) model/i.test(SF) ? 402 === WF || (400 === WF || 403 === WF || 429 === WF) && CF && !/rate[ _-]?limit/i.test(SF) ? "noCredit" : 400 === WF && /(location|region|country|territory)[^\n]{0,40}not supported|unsupported_country/i.test(SF) ? "blocked" : 400 === WF && /api[ _-]?key/i.test(SF) ? "badKey" : 403 === WF ? /moderat|flagged/i.test(SF) ? "refused" : /region|country|territor|location/i.test(SF) ? "blocked" : "badKey" : 429 === WF ? "busy" : "failed" : "noModel"
        }(FF, AF.status, WF), function(FF) {
          const WF = FF.headers.get("retry-after");
          if (!WF) return;
          const SF = Number(WF);
          return Number.isFinite(SF) ? 1e3 * SF : Math.max(0, Date.parse(WF) - Date.now()) || void 0
        }(AF), AF.status, function(FF, WF) {
          let SF = FF;
          try {
            const WF = JSON.parse(FF),
              CF = WF.error && "object" === typeof WF.error ? WF.error.message : void 0,
              AF = [WF.error, CF, WF.message].find((FF => "string" === typeof FF));
            SF = "string" === typeof AF ? AF : FF
          } catch {}
          const CF = WF.reduce(((FF, WF) => Mu(FF, WF)), SF.replace(/\s+/g, " ").trim()).slice(0, 200);
          return "" === CF ? void 0 : CF
        }(WF, function(FF) {
          const WF = [];
          return new Headers(FF.headers).forEach(((FF, SF) => {
            /authorization|key/i.test(SF) && WF.push(FF, FF.replace(/^Bearer\s+/i, ""))
          })), WF.filter((FF => FF.length >= 6))
        }(SF)))
      }
      return AF
    }
    async function su(FF, WF, SF) {
      const CF = (0, gW.e)(FF, WF);
      try {
        return await SF(CF.signal)
      } catch (AF) {
        if (AF instanceof Yu || null !== WF && void 0 !== WF && WF.aborted) throw AF;
        throw CF.signal.aborted || console.warn("AI key request couldn't be read", AF), new Yu(CF.signal.aborted ? "timeout" : "unreachable")
      } finally {
        CF.clear()
      }
    }

    function nu(FF) {
      let WF = FF.length;
      const SF = FF.lastIndexOf("<tool_call"); - 1 === SF || FF.includes("</tool_call>", SF) || (WF = SF);
      const CF = [...FF.matchAll(/\{\s*"(?:jsonrpc|name|tool|method|function)"/g)].find((WF => null === function(FF, WF) {
        let SF = 0,
          CF = !1;
        for (let AF = WF; AF < FF.length; AF++) {
          const WF = FF[AF];
          if (CF) "\\" === WF ? AF++ : '"' === WF && (CF = !1);
          else if ('"' === WF) CF = !0;
          else if ("{" === WF) SF++;
          else if ("}" === WF && (SF--, 0 === SF)) return AF + 1
        }
        return null
      }(FF, WF.index)));
      return CF && CF.index < WF && (WF = CF.index), FF.slice(0, WF).replace(/```[\w-]*\s*$/, "").trim()
    }

    function Hu(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "simple",
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      const {
        answer: AF,
        reasoning: uF,
        aRF: hF,
        isCutShort: bW,
        nativeCalls: dF = []
      } = WF, PF = AF.replace(/<think>[\s\S]*?<\/think>/g, ""), RF = "" === CF ? PF.trim() : function(FF, WF) {
        var SF, CF;
        const AF = WF.trimStart(),
          uF = FF.trimStart();
        if (uF.length >= 16 && AF.startsWith(uF.slice(0, 240))) return AF;
        const hF = null !== (SF = null === (CF = FF.match(/```/g)) || void 0 === CF ? void 0 : CF.length) && void 0 !== SF ? SF : 0,
          bW = nu(FF) !== FF.trim() || hF % 2 === 1 ? 48 : 16;
        for (let dF = Math.min(FF.length, AF.length, 4e3); dF >= bW; dF--)
          if (FF.endsWith(AF.slice(0, dF))) return FF + AF.slice(dF);
        return FF + WF
      }(CF, PF).trim(), iW = Su(RF, "", dF, SF), eF = Su(bW ? nu(RF) : RF, uF, dF, SF, bW), EF = bW ? Gu(dF) : void 0;
      if (hF && "" === eF) throw new Yu("refused");
      if ("" === eF && (!bW || "" === iW && !EF)) throw new Yu("failed");
      return {
        model: FF,
        answer: eF,
        reasoning: uF,
        isCutShort: bW,
        written: bW ? iW : void 0,
        cutCall: EF
      }
    }

    function Ku(FF) {
      const WF = FF.findIndex((FF => "user" === FF.role));
      return -1 === WF ? [] : FF.slice(WF)
    }

    function wu(FF, WF) {
      var SF;
      const CF = null !== (SF = WF.tools) && void 0 !== SF ? SF : [];
      if (0 === CF.length) return {};
      switch (FF) {
        case "openai":
          return {
            tools: uu(CF)
          };
        case "anthropic":
          return {
            tools: CF.map((FF => ({
              name: FF.name,
              description: FF.description,
              input_schema: FF.inputSchema
            })))
          };
        case "gemini":
          return {
            tools: [{
              functionDeclarations: CF.map((FF => {
                return {
                  name: FF.name,
                  description: FF.description,
                  parameters: (WF = FF.inputSchema, {
                    type: "OBJECT",
                    properties: Object.fromEntries(Object.entries(WF.properties).map((FF => {
                      let [WF, SF] = FF;
                      return [WF, {
                        type: "STRING",
                        description: SF.description
                      }]
                    }))),
                    required: WF.required
                  })
                };
                var WF
              }))
            }]
          }
      }
    }
    class Xu {
      constructor(FF, WF, SF) {
        this.provider = FF, this.baseUrl = WF, this.key = SF
      }
      async check(FF) {
        return su(zh, FF, (async FF => {
          var WF;
          const SF = await yh(this.provider, `${this.baseUrl}/models`, {
            headers: this.headers()
          }, FF);
          return {
            models: (null !== (WF = (await SF.json()).data) && void 0 !== WF ? WF : []).map((FF => ({
              id: FF.id,
              name: FF.name
            })))
          }
        }))
      }
      async ask(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return su(Iu, SF.signal, (async CF => {
          var AF;
          const uF = await yh(this.provider, `${this.baseUrl}/chat/completions`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              model: FF,
              messages: WF,
              ["openai" === this.provider ? "max_completion_tokens" : "max_tokens"]: fu,
              stream: !0,
              ...wu("openai", SF)
            })
          }, CF);
          let hF = "",
            bW = "",
            dF = !1,
            PF = !1;
          const RF = [];
          return await Au(null !== (AF = uF.body) && void 0 !== AF ? AF : new ReadableStream, (WF => {
            var CF, AF, uF, iW, eF, EF, QF, rW;
            const gW = WF;
            if (gW.error) throw new Yu(402 === Number(gW.error.code) ? "noCredit" : "failed");
            const tW = null === (CF = gW.choices) || void 0 === CF ? void 0 : CF[0];
            bW += null !== (AF = null !== (uF = null === tW || void 0 === tW || null === (iW = tW.delta) || void 0 === iW ? void 0 : iW.reasoning) && void 0 !== uF ? uF : null === tW || void 0 === tW || null === (eF = tW.delta) || void 0 === eF ? void 0 : eF.reasoning_content) && void 0 !== AF ? AF : "", hF += null !== (EF = null === tW || void 0 === tW || null === (QF = tW.delta) || void 0 === QF ? void 0 : QF.content) && void 0 !== EF ? EF : "";
            for (const FF of null !== (TF = null === tW || void 0 === tW || null === (aW = tW.delta) || void 0 === aW ? void 0 : aW.tool_calls) && void 0 !== TF ? TF : []) {
              var TF, aW;
              Fu(RF, FF)
            }
            dF ||= "content_filter" === (null === tW || void 0 === tW ? void 0 : tW.finish_reason), PF ||= "length" === (null === tW || void 0 === tW ? void 0 : tW.finish_reason), null === (rW = SF.onProgress) || void 0 === rW || rW.call(SF, {
              model: FF,
              reasoningChars: bW.length,
              answer: hF,
              isCalling: RF.length > 0
            })
          })), Hu(FF, {
            answer: hF,
            reasoning: bW,
            aRF: dF,
            isCutShort: PF,
            nativeCalls: RF
          }, SF.callFormat, SF.continueFrom)
        }))
      }
      headers() {
        return "" === this.key ? {
          "Content-Type": "application/json"
        } : {
          Authorization: `Bearer ${this.key}`,
          "Content-Type": "application/json"
        }
      }
    }
    class Uu {
      constructor(FF) {
        this.key = FF, this.chat = void 0, this.chat = new Xu("openrouter", Du.openrouter.baseUrl, FF)
      }
      async check(FF) {
        return await su(zh, FF, (async FF => yh("openrouter", `${Du.openrouter.baseUrl}/key`, {
          headers: {
            Authorization: `Bearer ${this.key}`
          }
        }, FF))), this.chat.check(FF)
      }
      ask(FF, WF, SF) {
        return this.chat.ask(FF, WF, SF)
      }
    }
    class Bu {
      constructor(FF) {
        this.key = FF, this.baseUrl = Du.anthropic.baseUrl
      }
      async check(FF) {
        return su(zh, FF, (async FF => {
          var WF;
          const SF = await yh("anthropic", `${this.baseUrl}/models?limit=1000`, {
            headers: this.headers()
          }, FF);
          return {
            models: (null !== (WF = (await SF.json()).data) && void 0 !== WF ? WF : []).map((FF => ({
              id: FF.id,
              name: FF.display_name
            })))
          }
        }))
      }
      async ask(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const CF = WF.filter((FF => "system" === FF.role)).map((FF => FF.content)).join("\n\n"),
          AF = Ku(WF).map((FF => ({
            role: FF.role,
            content: FF.content
          })));
        return su(Iu, SF.signal, (async WF => {
          var uF;
          const hF = await yh("anthropic", `${this.baseUrl}/messages`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              model: FF,
              max_tokens: fu,
              system: CF,
              messages: AF,
              stream: !0,
              ...wu("anthropic", SF)
            })
          }, WF);
          let bW = "",
            dF = "",
            PF = !1,
            RF = !1;
          const iW = new Map;
          await Au(null !== (uF = hF.body) && void 0 !== uF ? uF : new ReadableStream, (WF => {
            var CF, AF;
            const uF = WF;
            var hF, eF, EF, QF;
            if ("error" === uF.type) throw new Yu("overloaded_error" === (null === (hF = uF.error) || void 0 === hF ? void 0 : hF.type) || "rate_limit_error" === (null === (eF = uF.error) || void 0 === eF ? void 0 : eF.type) ? "busy" : "failed");
            if ("content_block_start" === uF.type && "tool_use" === (null === (CF = uF.content_block) || void 0 === CF ? void 0 : CF.type)) iW.set(null !== (EF = uF.index) && void 0 !== EF ? EF : iW.size, {
              name: null !== (QF = uF.content_block.name) && void 0 !== QF ? QF : "",
              args: ""
            });
            else if ("content_block_delta" === uF.type) {
              var rW, gW, tW, TF, aW, kW;
              bW += null !== (rW = null === (gW = uF.delta) || void 0 === gW ? void 0 : gW.text) && void 0 !== rW ? rW : "", dF += null !== (tW = null === (TF = uF.delta) || void 0 === TF ? void 0 : TF.thinking) && void 0 !== tW ? tW : "";
              const FF = iW.get(null !== (aW = uF.index) && void 0 !== aW ? aW : -1);
              var qW;
              if (FF && "input_json_delta" === (null === (kW = uF.delta) || void 0 === kW ? void 0 : kW.type)) FF.args += null !== (qW = uF.delta.partial_json) && void 0 !== qW ? qW : ""
            } else if ("message_delta" === uF.type) {
              var VF, NF;
              PF ||= "refusal" === (null === (VF = uF.delta) || void 0 === VF ? void 0 : VF.stop_reason), RF ||= "max_tokens" === (null === (NF = uF.delta) || void 0 === NF ? void 0 : NF.stop_reason)
            }
            null === (AF = SF.onProgress) || void 0 === AF || AF.call(SF, {
              model: FF,
              reasoningChars: dF.length,
              answer: bW,
              isCalling: iW.size > 0
            })
          }));
          const eF = [...iW.values()];
          return Hu(FF, {
            answer: bW,
            reasoning: dF,
            aRF: PF,
            isCutShort: RF,
            nativeCalls: eF
          }, SF.callFormat, SF.continueFrom)
        }))
      }
      headers() {
        return {
          "x-api-key": this.key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
          "Content-Type": "application/json"
        }
      }
    }
    class jh {
      constructor(FF) {
        this.key = FF, this.baseUrl = Du.gemini.baseUrl
      }
      async check(FF) {
        return su(zh, FF, (async FF => {
          var WF;
          const SF = await yh("gemini", `${this.baseUrl}/models?pageSize=1000`, {
            headers: this.headers()
          }, FF);
          return {
            models: (null !== (WF = (await SF.json()).models) && void 0 !== WF ? WF : []).filter((FF => {
              var WF, SF;
              return null === (WF = null === (SF = FF.supportedGenerationMethods) || void 0 === SF ? void 0 : SF.includes("generateContent")) || void 0 === WF || WF
            })).map((FF => ({
              id: FF.name.replace(/^models\//, ""),
              name: FF.displayName
            })))
          }
        }))
      }
      async ask(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const CF = WF.filter((FF => "system" === FF.role)).map((FF => ({
            text: FF.content
          }))),
          AF = Ku(WF).map((FF => ({
            role: "assistant" === FF.role ? "model" : "user",
            parts: [{
              text: FF.content
            }]
          })));
        return su(Iu, SF.signal, (async WF => {
          var uF;
          const hF = await yh("gemini", `${this.baseUrl}/models/${encodeURIComponent(FF)}:streamGenerateContent?alt=sse`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              systemInstruction: {
                parts: CF
              },
              contents: AF,
              generationConfig: {
                maxOutputTokens: fu
              },
              ...wu("gemini", SF)
            })
          }, WF);
          let bW = "",
            dF = "",
            PF = !1,
            RF = !1;
          const iW = [];
          return await Au(null !== (uF = hF.body) && void 0 !== uF ? uF : new ReadableStream, (WF => {
            var CF, AF, uF;
            const hF = WF,
              eF = null === (CF = hF.candidates) || void 0 === CF ? void 0 : CF[0];
            for (const FF of null !== (EF = null === eF || void 0 === eF || null === (QF = eF.content) || void 0 === QF ? void 0 : QF.parts) && void 0 !== EF ? EF : []) {
              var EF, QF, rW, gW;
              if (FF.functionCall) iW.push({
                name: null !== (rW = FF.functionCall.name) && void 0 !== rW ? rW : "",
                args: JSON.stringify(null !== (gW = FF.functionCall.args) && void 0 !== gW ? gW : {})
              });
              else if (FF.thought) {
                var tW;
                dF += null !== (tW = FF.text) && void 0 !== tW ? tW : ""
              } else {
                var TF;
                bW += null !== (TF = FF.text) && void 0 !== TF ? TF : ""
              }
            }
            PF ||= void 0 !== (null === (AF = hF.promptFeedback) || void 0 === AF ? void 0 : AF.blockReason) || "SAFETY" === (null === eF || void 0 === eF ? void 0 : eF.finishReason) || "PROHIBITED_CONTENT" === (null === eF || void 0 === eF ? void 0 : eF.finishReason), RF ||= "MAX_TOKENS" === (null === eF || void 0 === eF ? void 0 : eF.finishReason), null === (uF = SF.onProgress) || void 0 === uF || uF.call(SF, {
              model: FF,
              reasoningChars: dF.length,
              answer: bW,
              isCalling: iW.length > 0
            })
          })), Hu(FF, {
            answer: bW,
            reasoning: dF,
            aRF: PF,
            isCutShort: RF,
            nativeCalls: iW
          }, SF.callFormat, SF.continueFrom)
        }))
      }
      headers() {
        return {
          "x-goog-api-key": this.key,
          "Content-Type": "application/json"
        }
      }
    }

    function vh(FF, WF, SF) {
      switch (FF) {
        case "openrouter":
          return new Uu(WF);
        case "anthropic":
          return new Bu(WF);
        case "gemini":
          return new jh(WF);
        case "openai":
          return new Xu("openai", Du.openai.baseUrl, WF);
        case "custom":
          return new Xu("custom", null !== SF && void 0 !== SF ? SF : "", WF)
      }
    }
    const Ju = {
        fast: "Fast",
        smart: "Smart",
        smartest: "Smartest"
      },
      pu = {
        anthropic: {
          fast: [{
            id: "claude-haiku-5-5",
            name: "Claude Haiku 5.5"
          }, {
            id: "claude-haiku-4-5",
            name: "Claude Haiku 4.5"
          }],
          smart: [{
            id: "claude-sonnet-5-5",
            name: "Claude Sonnet 5.5"
          }, {
            id: "claude-sonnet-5",
            name: "Claude Sonnet 5"
          }, {
            id: "claude-sonnet-4-6",
            name: "Claude Sonnet 4.6"
          }],
          smartest: [{
            id: "claude-opus-5-5",
            name: "Claude Opus 5.5"
          }, {
            id: "claude-opus-5",
            name: "Claude Opus 5"
          }, {
            id: "claude-opus-4-8",
            name: "Claude Opus 4.8"
          }]
        },
        openai: {
          fast: [{
            id: "gpt-6-luna",
            name: "GPT-6 Luna"
          }, {
            id: "gpt-5-mini",
            name: "GPT-5 mini"
          }],
          smart: [{
            id: "gpt-6.1-sol",
            name: "GPT-6.1 Sol"
          }, {
            id: "gpt-6-sol",
            name: "GPT-6 Sol"
          }, {
            id: "gpt-5.2",
            name: "GPT-5.2"
          }],
          smartest: [{
            id: "gpt-6-astra",
            name: "GPT-6 Astra"
          }, {
            id: "gpt-5.6-sol",
            name: "GPT-5.6 Sol"
          }]
        },
        gemini: {
          fast: [{
            id: "gemini-3.5-flash-lite",
            name: "Gemini 3.5 Flash-Lite"
          }, {
            id: "gemini-3.1-flash-lite",
            name: "Gemini 3.1 Flash-Lite"
          }],
          smart: [{
            id: "gemini-3.8-flash",
            name: "Gemini 3.8 Flash"
          }, {
            id: "gemini-3.6-flash",
            name: "Gemini 3.6 Flash"
          }],
          smartest: [{
            id: "gemini-4-argon",
            name: "Gemini 4 Argon"
          }, {
            id: "gemini-3.1-pro-preview",
            name: "Gemini 3.1 Pro"
          }]
        },
        openrouter: {
          fast: [{
            id: "anthropic/claude-haiku-5.5",
            name: "Claude Haiku 5.5"
          }, {
            id: "anthropic/claude-haiku-4.5",
            name: "Claude Haiku 4.5"
          }],
          smart: [{
            id: "anthropic/claude-sonnet-5.5",
            name: "Claude Sonnet 5.5"
          }, {
            id: "anthropic/claude-sonnet-5",
            name: "Claude Sonnet 5"
          }, {
            id: "anthropic/claude-sonnet-4.6",
            name: "Claude Sonnet 4.6"
          }],
          smartest: [{
            id: "anthropic/claude-opus-5.5",
            name: "Claude Opus 5.5"
          }, {
            id: "anthropic/claude-opus-5",
            name: "Claude Opus 5"
          }]
        }
      };

    function lu(FF) {
      return /claude-(sonnet|opus|fable)|gpt-5(\.\d+)?($|-codex|-pro|-sol)|gpt-6(\.\d+)?-(sol|astra)|gemini-[\d.]+-pro|gemini-4/.test(FF) ? "mcp" : "simple"
    }

    function Fh(FF, WF) {
      return "custom" !== FF && /claude-|gpt-|gemini-/.test(WF)
    }

    function Wh(FF, WF, SF) {
      var CF;
      const AF = SF.find((FF => FF.id === WF));
      return {
        id: WF,
        name: null !== (CF = null === AF || void 0 === AF ? void 0 : AF.name) && void 0 !== CF ? CF : WF,
        callFormat: lu(WF),
        nativeTools: Fh(FF, WF)
      }
    }

    function Sh(FF, WF) {
      return "custom" !== FF ? function(FF, WF) {
        if ("custom" === FF) return [];
        const SF = new Set(WF.map((FF => FF.id))),
          CF = pu[FF];
        return Object.keys(CF).flatMap((AF => {
          const uF = CF[AF].find((FF => SF.has(FF.id)));
          return uF ? [{
            ...Wh(FF, uF.id, WF),
            name: uF.name,
            tier: AF
          }] : []
        }))
      }(FF, WF) : WF.slice(0, 20).map((SF => Wh(FF, SF.id, WF)))
    }

    function Ch(FF) {
      var WF;
      return null !== (WF = FF.find((FF => "smart" === FF.tier))) && void 0 !== WF ? WF : FF[0]
    }

    function Ah(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null !== (WF = FF.name) && void 0 !== WF ? WF : ou(FF.provider, FF.baseUrl, SF)
    }
    const uh = "bloxdAiHelperKeys",
      hh = {
        keys: [],
        selected: null,
        remember: !1
      };

    function bb(FF, WF) {
      return FF.id === WF.id || "custom" === FF.provider && "custom" === WF.provider && FF.baseUrl === WF.baseUrl
    }

    function dh(FF) {
      if ("custom" !== FF.provider) return !0;
      try {
        var WF;
        return new URL(null !== (WF = FF.baseUrl) && void 0 !== WF ? WF : "").protocol.startsWith("http")
      } catch {
        return !1
      }
    }

    function Ph(FF) {
      try {
        return "undefined" === typeof window ? null : window[FF]
      } catch (WF) {
        return console.warn(`AI Helper: no ${FF}`, WF), null
      }
    }
    const Rh = new class {
      constructor(FF, WF) {
        var SF;
        this.session = FF, this.local = WF, this.state = void 0, this.listeners = new Set, this.ownsRemembered = !1, this.lastUsedAt = 0, this.getState = () => this.state, this.subscribe = FF => (this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        });
        for (const uF of [FF, WF]) null !== uF && void 0 !== uF && uF.getItem(uh) && !this.read(uF) && uF.removeItem(uh);
        const CF = this.read(FF),
          AF = this.read(WF);
        this.state = null !== CF && void 0 !== CF && CF.remember ? null !== AF && void 0 !== AF && AF.remember ? AF : {
          ...CF,
          remember: !1
        } : null !== (SF = null !== CF && void 0 !== CF ? CF : AF) && void 0 !== SF ? SF : hh, this.ownsRemembered = this.state.remember && null !== AF
      }
      nextUsedAt() {
        return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
      }
      activeKey() {
        const FF = this.state.selected,
          WF = FF ? this.state.keys.find((WF => WF.id === FF.keyId)) : void 0,
          SF = null === WF || void 0 === WF ? void 0 : WF.models.find((WF => WF.id === (null === FF || void 0 === FF ? void 0 : FF.modelId)));
        return WF && SF ? {
          ...WF,
          model: SF
        } : null
      }
      addKey(FF, WF, SF) {
        var CF, AF, uF;
        const hF = this.state.keys.find((WF => "custom" === WF.provider && WF.baseUrl === FF.baseUrl)),
          bW = "custom" !== FF.provider ? FF.provider : null !== (CF = null === hF || void 0 === hF ? void 0 : hF.id) && void 0 !== CF ? CF : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
          dF = void 0 === WF ? Ch(FF.models) : null !== (AF = FF.models.find((FF => FF.id === WF))) && void 0 !== AF ? AF : FF.models[0],
          PF = this.state.keys.find((FF => FF.id === bW)),
          RF = {
            ...FF,
            id: bW,
            usedAt: this.nextUsedAt(),
            ...dF ? {
              usedModelId: dF.id
            } : {},
            ...null !== PF && void 0 !== PF && PF.name && !FF.name ? {
              name: PF.name
            } : {}
          },
          iW = this.state.keys.every((FF => FF.id !== bW)),
          eF = void 0 !== SF && SF !== bW && this.state.keys.some((FF => FF.id === SF)),
          EF = eF ? this.state.keys.filter((FF => FF.id !== bW)).map((FF => FF.id === SF ? RF : FF)) : iW ? [...this.state.keys, RF] : this.state.keys.map((FF => FF.id === bW ? RF : FF)),
          QF = dF ? {
            keyId: bW,
            modelId: dF.id
          } : (null === (uF = this.state.selected) || void 0 === uF ? void 0 : uF.keyId) === SF && eF ? null : this.state.selected;
        return this.update({
          keys: EF,
          selected: QF
        }), bW
      }
      renameKey(FF, WF) {
        const SF = WF.replace(/\s+/g, " ").trim().slice(0, 30);
        this.update({
          keys: this.state.keys.map((WF => {
            if (WF.id !== FF) return WF;
            const {
              name: CF,
              ...AF
            } = WF;
            return "" === SF ? AF : {
              ...AF,
              name: SF
            }
          }))
        })
      }
      select(FF) {
        const WF = this.nextUsedAt(),
          SF = null === FF ? this.state.keys : this.state.keys.map((SF => SF.id === FF.keyId ? {
            ...SF,
            usedAt: WF,
            usedModelId: FF.modelId
          } : SF));
        this.update({
          keys: SF,
          selected: FF
        })
      }
      refreshModels(FF, WF, SF) {
        const CF = this.state.keys.find((WF => WF.id === FF));
        if (!CF || SF && (CF.key !== SF.key || CF.baseUrl !== SF.baseUrl)) return !1;
        const AF = [...WF.map((FF => {
            const WF = CF.models.find((WF => WF.id === FF.id));
            return {
              ...FF,
              ...!1 === (null === WF || void 0 === WF ? void 0 : WF.nativeTools) ? {
                nativeTools: !1
              } : {},
              ...null !== WF && void 0 !== WF && WF.typed ? {
                typed: !0
              } : {}
            }
          })), ...CF.models.filter((FF => FF.typed && !WF.some((WF => WF.id === FF.id))))],
          uF = this.state.selected,
          hF = (null === uF || void 0 === uF ? void 0 : uF.keyId) === FF && !AF.some((FF => FF.id === uF.modelId)),
          bW = Ch(AF);
        return this.update({
          keys: this.state.keys.map((WF => WF.id === FF ? {
            ...WF,
            models: AF
          } : WF)),
          selected: hF ? bW ? {
            keyId: FF,
            modelId: bW.id
          } : null : uF
        }), !0
      }
      stopNativeTools(FF, WF) {
        this.update({
          keys: this.state.keys.map((SF => {
            if (SF.id !== FF) return SF;
            const CF = SF.models.map((FF => FF.id === WF ? {
              ...FF,
              nativeTools: !1
            } : FF));
            return {
              ...SF,
              models: CF
            }
          }))
        })
      }
      removeKey(FF) {
        var WF;
        const SF = this.state,
          CF = SF.keys.findIndex((WF => WF.id === FF)),
          AF = SF.keys[CF];
        if (!AF) return () => {};
        const uF = SF.keys.filter((WF => WF.id !== FF)),
          hF = (null === (WF = SF.selected) || void 0 === WF ? void 0 : WF.keyId) === FF ? null : SF.selected;
        return this.update({
          keys: uF,
          selected: hF,
          remember: uF.length > 0 && SF.remember
        }), () => {
          var WF;
          const uF = this.state.keys.some((FF => bb(FF, AF)));
          if (uF) return;
          const hF = [...this.state.keys];
          hF.splice(Math.min(CF, hF.length), 0, AF);
          const bW = (null === (WF = SF.selected) || void 0 === WF ? void 0 : WF.keyId) === FF && null === this.state.selected;
          this.update({
            keys: hF,
            selected: bW ? SF.selected : this.state.selected,
            remember: this.state.remember || SF.remember
          })
        }
      }
      removeAll() {
        this.update(hh), this.local && null !== this.local.getItem(uh) && (this.local.setItem(uh, JSON.stringify(hh)), this.local.removeItem(uh))
      }
      setRemember(FF) {
        var WF;
        const SF = FF && !this.ownsRemembered ? this.read(this.local) : null,
          CF = (null !== (WF = null === SF || void 0 === SF ? void 0 : SF.keys) && void 0 !== WF ? WF : []).filter((FF => this.state.keys.every((WF => !bb(WF, FF)))));
        this.update({
          remember: FF,
          keys: [...CF, ...this.state.keys]
        })
      }
      otherTabChanged(FF) {
        var WF;
        if (!this.state.remember) return;
        const SF = FF ? this.parse(FF) : null;
        SF ? (this.state = SF, this.ownsRemembered = SF.remember) : (this.ownsRemembered = !1, this.state = {
          ...this.state,
          remember: !1
        }), null === (WF = this.session) || void 0 === WF || WF.setItem(uh, JSON.stringify(this.state)), this.notify()
      }
      notify() {
        for (const FF of this.listeners) FF()
      }
      update(FF) {
        var WF;
        this.state = {
          ...this.state,
          ...FF
        };
        const SF = JSON.stringify(this.state);
        var CF;
        if (null === (WF = this.session) || void 0 === WF || WF.setItem(uh, SF), this.state.remember && this.state.keys.length > 0) null === (CF = this.local) || void 0 === CF || CF.setItem(uh, SF), this.ownsRemembered = !0;
        else if (this.ownsRemembered) {
          var AF, uF;
          if (0 === this.state.keys.length) null === (uF = this.local) || void 0 === uF || uF.setItem(uh, JSON.stringify(hh));
          null === (AF = this.local) || void 0 === AF || AF.removeItem(uh), this.ownsRemembered = !1
        }
        this.notify()
      }
      read(FF) {
        const WF = null === FF || void 0 === FF ? void 0 : FF.getItem(uh);
        return WF ? this.parse(WF) : null
      }
      parse(FF) {
        try {
          const WF = {
            ...hh,
            ...JSON.parse(FF)
          };
          return Array.isArray(WF.keys) && WF.keys.every(dh) ? WF : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
        } catch (WF) {
          return console.warn("AI Helper: saved keys couldn't be read", WF instanceof Error ? WF.name : "error"), null
        }
      }
    }(Ph("sessionStorage"), Ph("localStorage"));

    function ib() {
      const FF = function() {
          const [FF, WF] = (0, CF.useState)(Rh.getState);
          return (0, CF.useEffect)((() => (WF(Rh.getState()), Rh.subscribe((() => {
            WF(Rh.getState())
          })))), []), FF
        }(),
        WF = Rh.activeKey();
      return {
        ...FF,
        active: WF,
        isSelected: SF => {
          return (CF = WF ? FF.selected : null) === (AF = SF) || null !== CF && null !== AF && CF.keyId === AF.keyId && CF.modelId === AF.modelId;
          var CF, AF
        },
        select: FF => {
          Rh.select(FF)
        },
        removeKey: FF => Rh.removeKey(FF),
        renameKey: (FF, WF) => {
          Rh.renameKey(FF, WF)
        },
        setRemember: FF => {
          Rh.setRemember(FF)
        }
      }
    }
    async function eh(FF, WF) {
      var SF;
      let {
        provider: CF,
        key: AF,
        baseUrl: uF,
        modelName: hF
      } = FF;
      const bW = null !== (SF = null === hF || void 0 === hF ? void 0 : hF.trim()) && void 0 !== SF ? SF : "";
      let dF = [];
      try {
        dF = (await vh(CF, AF, uF).check(WF)).models
      } catch (PF) {
        if (!("custom" === CF && PF instanceof Yu && ("failed" === PF.problem || "noModel" === PF.problem))) throw PF
      }
      if (null !== WF && void 0 !== WF && WF.aborted) throw new DOMException("The AI key test was stopped", "AbortError");
      return "" !== bW ? [{
        ...Wh(CF, bW, dF),
        typed: !0
      }] : Sh(CF, dF)
    }
    "undefined" !== typeof window && window.addEventListener("storage", (FF => {
      FF.storageArea === Ph("localStorage") && FF.key === uh && Rh.otherTabChanged(FF.newValue)
    }));
    async function Eh(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const CF = vh(FF.provider, FF.key, FF.baseUrl);
      let AF = {
        ...SF,
        callFormat: FF.model.callFormat,
        tools: FF.model.nativeTools ? SF.tools : void 0
      };
      const uF = async () => {
        try {
          return await CF.ask(FF.model.id, WF, AF)
        } catch (SF) {
          if (! function(FF, WF) {
              var SF, CF, AF;
              return 0 !== (null !== (SF = null === (CF = WF.tools) || void 0 === CF ? void 0 : CF.length) && void 0 !== SF ? SF : 0) && FF instanceof Yu && "failed" === FF.problem && (400 === FF.status || 404 === FF.status && /\btool/i.test(null !== (AF = FF.detail) && void 0 !== AF ? AF : ""))
            }(SF, AF)) throw SF;
          const uF = {
              ...AF,
              tools: void 0
            },
            hF = await CF.ask(FF.model.id, WF, uF);
          return Rh.stopNativeTools(FF.id, FF.model.id), AF = uF, hF
        }
      };
      try {
        return await uF()
      } catch (iW) {
        var hF, bW;
        if (!((RF = iW) instanceof Yu && void 0 !== RF.status && "noCredit" !== RF.problem && (429 === RF.status || 408 === RF.status || RF.status >= 500))) throw iW;
        return await (dF = Math.min(null !== (hF = null !== (bW = iW.retryAfterMs) && void 0 !== bW ? bW : SF.retryWaitMs) && void 0 !== hF ? hF : 3e3, 2e4), PF = SF.signal, new Promise(((FF, WF) => {
          if (null !== PF && void 0 !== PF && PF.aborted) return void WF(new DOMException("The AI key request was stopped", "AbortError"));
          const SF = setTimeout(FF, dF);
          null === PF || void 0 === PF || PF.addEventListener("abort", (() => {
            clearTimeout(SF), WF(new DOMException("The AI key request was stopped", "AbortError"))
          }), {
            once: !0
          })
        }))), uF()
      }
      var dF, PF, RF
    }
    var Qh = SF(2831);
    const rb = "Super Bot.xd",
      gb = {
        ovh: {
          name: rb,
          temperature: .6,
          nativeTools: !0,
          callFormat: "qwenXml"
        },
        deepseek: {
          name: rb,
          temperature: 1,
          nativeTools: !0,
          callFormat: "deepseek"
        }
      };
    const tb = "bloxdAiHelperSuperBot",
      Th = "bloxdAiHelperDeepSeekNotice";

    function ab(FF) {
      if ("deepseek" !== FF) return !0;
      try {
        return "undefined" !== typeof window && "1" === window.localStorage.getItem(Th)
      } catch {
        return !1
      }
    }

    function kb() {
      try {
        return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(tb)
      } catch {
        return !1
      }
    }
    const qb = new class {
      constructor() {
        this.state = void 0, this.listeners = new Set, this.refreshing = null, this.getState = () => this.state, this.subscribe = FF => (this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }), this.state = {
          picked: kb(),
          status: null,
          canBuySuperRank: null
        }, Rh.subscribe((() => {
          null !== Rh.getState().selected && this.state.picked && this.update({
            picked: !1
          })
        }))
      }
      isAnswering() {
        var FF;
        return this.state.picked && "ok" === (null === (FF = this.state.status) || void 0 === FF ? void 0 : FF.availability)
      }
      lW() {
        Rh.select(null), this.update({
          picked: !0
        })
      }
      unpick() {
        this.update({
          picked: !1
        })
      }
      setStatus(FF) {
        const WF = this.state.picked && Lh(FF, this.state.canBuySuperRank) && ab(FF.provider);
        this.update({
          status: FF,
          picked: WF
        })
      }
      setCanBuySuperRank(FF) {
        const {
          status: WF
        } = this.state;
        this.update({
          canBuySuperRank: FF,
          picked: this.state.picked && (null === WF || Lh(WF, FF))
        })
      }
      async refresh() {
        return this.refreshing ??= xu("/ai-helper/super-bot-xd/status", {}).then((FF => {
          this.setStatus(FF)
        })).catch((FF => {
          console.warn("AI Helper: Super Bot.xd's usage couldn't be checked", FF)
        })).finally((() => {
          this.refreshing = null
        })), this.refreshing
      }
      update(FF) {
        this.state = {
          ...this.state,
          ...FF
        };
        try {
          window.sessionStorage.setItem(tb, this.state.picked ? "1" : "0")
        } catch {}
        for (const WF of this.listeners) WF()
      }
    };

    function Vh() {
      const [FF, WF] = (0, CF.useState)(qb.getState);
      return (0, CF.useEffect)((() => (WF(qb.getState()), qb.subscribe((() => {
        WF(qb.getState())
      })))), []), FF
    }

    function Nh(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
      if (null === FF) return "Checking whether Super Bot.xd can answer for you\u2026";
      switch (FF.availability) {
        case "ok":
          return null;
        case "guest":
          return "Log in to use Super Bot.xd.";
        case "tooNew":
          return `Super Bot.xd opens once your account is a week old: ${Yh((null!==(WF=FF.availableFrom)&&void 0!==WF?WF:SF)-SF)} to go.`;
        case "noUsageLeft":
          return FF.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(FF,WF){const SF=Math.ceil((FF-WF)/36e5);if(SF<=24)return SF<=1?"within the hour":`in ${SF} hours`;return`in ${Yh(FF-WF)}`}(FF.resetsAt,SF)}.` : "0 usage remaining - upgrade to Super for a more powerful AI.";
        case "unavailable":
          return "Super Bot.xd can't answer right now. Try again later."
      }
    }

    function Dh(FF) {
      return null !== FF && !FF.isSuper && "noUsageLeft" === FF.availability
    }

    function Lh(FF, WF) {
      return "ok" === FF.availability || !1 !== WF && Dh(FF)
    }

    function mb(FF) {
      return !0 === FF.canBuySuperRank && Dh(FF.status)
    }

    function Oh(FF) {
      return mb(FF) ? null : Nh(FF.status)
    }

    function xb(FF) {
      return FF.picked && null === Oh(FF)
    }

    function Zh(FF) {
      return FF.picked && mb(FF)
    }

    function oh(FF) {
      return `Usage left: ${FF.left}`
    }

    function Yh(FF) {
      const WF = Math.max(1, Math.ceil(FF / Vu.i));
      return 1 === WF ? "1 day" : `${WF} days`
    }

    function Mh(FF, WF) {
      const SF = "unavailable" === FF ? Nh(WF) : null;
      if (SF) return `${SF} Bot.xd is answering instead.`;
      switch (FF) {
        case "busy":
          return "Super Bot.xd is busy, so Bot.xd is answering this one.";
        case "tooLong":
          return "That message is too big for your Super Bot.xd usage, so Bot.xd is answering this one.";
        case "tooLarge":
          return "That request is too large for Super Bot.xd, so Bot.xd is answering this one.";
        case "unchecked":
          return "Super Bot.xd's safety check is busy, so Bot.xd is answering this one.";
        case "contextRefused":
          return "Something in your code didn't pass Super Bot.xd's safety check, so Bot.xd is answering this one.";
        default:
          return "Super Bot.xd couldn't answer, so Bot.xd is answering this one."
      }
    }
    async function cb(FF) {
      if (function(FF) {
          var WF, SF, CF, AF, uF, hF, bW;
          return FF.messages.length > 12 || FF.messages.some((FF => FF.content.length > OA)) || (null !== (WF = null === (SF = FF.toolsJson) || void 0 === SF ? void 0 : SF.length) && void 0 !== WF ? WF : 0) > 1e5 || (null !== (CF = null === (AF = FF.request) || void 0 === AF ? void 0 : AF.length) && void 0 !== CF ? CF : 0) > OA || (null !== (uF = null === (hF = FF.code) || void 0 === hF ? void 0 : hF.length) && void 0 !== uF ? uF : 0) > OA || (null !== (bW = FF.toolResults) && void 0 !== bW ? bW : []).some((FF => FF.text.length > 1e5))
        }(FF)) return {
        outcome: "tooLarge"
      };
      try {
        return await xu("/ai-helper/super-bot-xd/ask", FF)
      } catch (WF) {
        if (WF instanceof Nu.c && 413 === WF.httpCode) return {
          outcome: "tooLarge"
        };
        throw WF
      }
    }
    async function Gh(FF, WF) {
      return WF ? await new Promise(((SF, CF) => {
        const AF = () => {
          CF(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
        };
        WF.aborted ? AF() : (WF.addEventListener("abort", AF, {
          once: !0
        }), FF.then(SF, CF).finally((() => {
          WF.removeEventListener("abort", AF)
        })))
      })) : await FF
    }
    var zb = SF(20),
      Ih = SF(11),
      fh = SF(1875);
    let yb = null;

    function sh() {
      yb ??= Promise.resolve().then((() => SF(1510))), yb.then((FF => {
        let {
          siteSupportsPurchases: WF
        } = FF;
        qb.setCanBuySuperRank(WF())
      }), (FF => {
        yb = null, console.warn("AI Helper: couldn't find out whether Super rank is sold here", FF)
      }))
    }
    let nh = !1,
      Hh = null;
    async function Kh() {
      if (nh) return !0;
      nh = !0;
      try {
        var FF;
        if (await qb.refresh(), !Zh(qb.getState())) return !1;
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
        const [{
          NotificationProvider: WF
        }, {
          WorldCodeAiOutOfUsage: CF
        }] = await Promise.all([Promise.resolve().then((() => SF(1189))), SF.e(326).then((() => SF(58921)))]);
        null === (FF = Hh) || void 0 === FF || FF.tearDownNotification();
        const AF = WF.showCustomPopup({
          body: FF => (0, hF.jsx)(CF, {
            onGetSuperRank: () => {
              FF(),
                function() {
                  zb.j.Uu("OpenStoreFromCodeEditor"), (0, fh.i)({
                    mode: "self",
                    source: "codeEditorAi",
                    openItem: "superRank"
                  });
                  const FF = zb.j.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
                    null === Ih.b.get("openEverythingMenuName") && (zb.j.unsubscribe(FF), qb.refresh())
                  }))
                }()
            }
          })
        });
        return Hh = AF, AF.getResult().finally((() => {
          Hh === AF && (Hh = null)
        })), !0
      } catch (WF) {
        return console.warn("AI Helper: the out of usage popup couldn't be opened", WF), !0
      } finally {
        nh = !1
      }
    }
    const wh = {
        wood: ["Maple Log"],
        log: ["Maple Log"],
        logs: ["Maple Log"],
        "wood log": ["Maple Log"],
        "wood block": ["Maple Log"],
        "wooden block": ["Maple Log"],
        "tree log": ["Maple Log"],
        "oak wood": ["Maple Log"],
        planks: ["Maple Wood Planks"],
        plank: ["Maple Wood Planks"],
        "wood planks": ["Maple Wood Planks"],
        "wood plank": ["Maple Wood Planks"],
        "wooden planks": ["Maple Wood Planks"],
        "oak planks": ["Maple Wood Planks"],
        leaves: ["Maple Leaves"],
        door: ["Maple Door"],
        fence: ["Maple Fence"],
        ladder: ["Maple Ladder"],
        cobblestone: ["Messy Stone"],
        cobble: ["Messy Stone"],
        tnt: ["Block Destroyer TNT"],
        wool: ["White Wool"],
        lamp: ["Lantern"],
        "crafting table": ["Workbench"],
        "cooked beef": ["Steak"],
        potato: ["Baked Potato"],
        "health potion": ["Instant Healing Potion"],
        "healing potion": ["Instant Healing Potion"],
        "slime block": [],
        slime: [],
        rose: ["Poppy", "Red Tulip"],
        flower: ["Daisy", "Dandelion", "Poppy", "Red Tulip"],
        iron: ["Iron Bar"],
        gold: ["Gold Bar"],
        copper: ["Copper Bar"],
        lapis: ["Lapis Lazuli Ore", "Block of Lapis Lazuli"],
        "lapis lazuli": ["Lapis Lazuli Ore", "Block of Lapis Lazuli"],
        "iron armor": ["Iron Helmet", "Iron Chestplate"],
        "iron armour": ["Iron Helmet", "Iron Chestplate"],
        "gold armor": ["Gold Helmet", "Gold Chestplate"],
        "gold armour": ["Gold Helmet", "Gold Chestplate"],
        "diamond armor": ["Diamond Helmet", "Diamond Chestplate"],
        "diamond armour": ["Diamond Helmet", "Diamond Chestplate"],
        bed: ["White Bed"],
        sword: ["Wood Sword"],
        bow: ["Wood Bow"],
        shovel: ["Wood Spade"],
        spade: ["Wood Spade"],
        key: ["Wooden Key"],
        trophy: ["Gold Trophy"],
        "fishing rod": ["Rusty Rod"],
        rod: ["Rusty Rod"],
        beef: ["Raw Beef"],
        pork: ["Raw Porkchop"],
        porkchop: ["Raw Porkchop"],
        "pork chop": ["Raw Porkchop"],
        "cooked chicken": ["Chicken"],
        potion: ["Instant Healing Potion"],
        seeds: ["Wheat Seeds"],
        seed: ["Wheat Seeds"],
        mushroom: ["Red Mushroom", "Brown Mushroom"],
        "bounce pad": ["Jump Pad"],
        "zombie spawn egg": ["Draugr Zombie Spawn Orb"],
        "zombie spawn orb": ["Draugr Zombie Spawn Orb"],
        spawner: ["Empty Spawner Block"],
        "mob spawner": ["Empty Spawner Block"],
        "glass pane": ["Glass"],
        gun: ["One Shot Pistol"],
        pistol: ["One Shot Pistol"],
        rifle: ["One Shot Pistol"],
        glider: ["Wood Hang Glider"],
        "hang glider": ["Wood Hang Glider"],
        bandage: ["Medkit"],
        terracotta: ["Baked Clay"]
      },
      Xh = {
        wooden: "wood",
        golden: "gold",
        oak: "maple",
        shovel: "spade",
        ingot: "bar",
        ingots: "bar",
        nugget: "bar",
        leather: "wood",
        egg: "orb"
      },
      Uh = {
        teleport: ["setPosition"],
        tp: ["setPosition"],
        heal: ["setHealth", "getHealth"],
        health: ["setHealth", "getHealth", "applyHealthChange"],
        die: ["killLifeform", "onPlayerKilledOtherPlayer", "onRespawnRequest"],
        dies: ["killLifeform", "onPlayerKilledOtherPlayer", "onRespawnRequest"],
        died: ["onRespawnRequest", "onPlayerKilledOtherPlayer"],
        kill: ["killLifeform", "onPlayerKilledOtherPlayer"],
        kills: ["onPlayerKilledOtherPlayer"],
        respawn: ["onRespawnRequest", "setPosition"],
        give: ["giveItem"],
        name: ["getEntityName", "getPlayerId"],
        names: ["getEntityName"],
        username: ["getEntityName"],
        join: ["onPlayerJoin"],
        joins: ["onPlayerJoin"],
        AC: ["onPlayerLeave"],
        command: ["playerCommand"],
        chat: ["onPlayerChat", "sendMessage", "broadcastMessage"],
        says: ["onPlayerChat"],
        say: ["sendMessage", "broadcastMessage"],
        tell: ["sendMessage", "broadcastMessage"],
        everyone: ["broadcastMessage", "getPlayerIds"],
        screen: ["RightInfoText", "sendFlyingMiddleMessage", "middleTextUpper"],
        side: ["RightInfoText"],
        right: ["RightInfoText"],
        middle: ["sendFlyingMiddleMessage", "middleTextUpper"],
        countdown: ["sendFlyingMiddleMessage", "lF"],
        timer: ["lF", "RightInfoText"],
        seconds: ["lF"],
        speed: ["speedMultiplier", "runningSpeed", "walkingSpeed"],
        fast: ["speedMultiplier", "runningSpeed"],
        run: ["speedMultiplier", "runningSpeed"],
        jump: ["jumpAmount", "airJumpCount", "onPlayerJump"],
        fly: ["creative", "flySpeedMultiplier"],
        flying: ["creative", "flySpeedMultiplier"],
        stand: ["onBlockStand", "getBlockTypesPlayerStandingOn"],
        stands: ["onBlockStand", "getBlockTypesPlayerStandingOn"],
        touches: ["onBlockStand", "onEntityCollision"],
        break: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock"],
        breaks: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock"],
        breaking: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock", "canChange"],
        place: ["onPlayerAttemptChangeBlock", "rSF"],
        build: ["onPlayerAttemptChangeBlock", "rSF"],
        block: ["rSF", "dD"],
        leaderboard: ["lobbyLeaderboardInfo", "setTargetedPlayerSettingForEveryone"],
        score: ["lobbyLeaderboardInfo", "RightInfoText"],
        coins: ["RightInfoText", "getMoonstoneChestItemSlot"],
        save: ["setPlayerDbValue", "getPlayerDbValue", "doPeriodicSave"],
        saved: ["setPlayerDbValue", "getPlayerDbValue"],
        zombie: ["attemptSpawnMob"],
        mob: ["attemptSpawnMob"],
        spawn: ["attemptSpawnMob", "setPosition", "onRespawnRequest"],
        team: ["setTargetedPlayerSettingForEveryone", "getPlayerIds"],
        teams: ["setTargetedPlayerSettingForEveryone"],
        random: ["setPosition"],
        sound: ["broadcastSound", "playSound"],
        colour: ["sendMessage"],
        color: ["sendMessage"],
        green: ["sendMessage"],
        red: ["sendMessage"]
      },
      Bh = new Set("a an and are as at be but by can do does for from get got give go has have he her his how i if in into is it its make me my no not of on or our please so that the their them then there they this to u up us was we what when where which who will with you your want wanna like just also add let lets makes".split(" "));

    function jb(FF) {
      return FF.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((FF => FF.length > 1))
    }

    function vb(FF) {
      return FF.length > 4 && FF.endsWith("ies") ? `${FF.slice(0,-3)}y` : FF.length > 3 && FF.endsWith("s") && !FF.endsWith("ss") ? FF.slice(0, -1) : FF
    }

    function Jh(FF) {
      return new Set(jb(FF).map((FF => vb(FF))))
    }
    const ph = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;

    function lh(FF) {
      return FF.split("\n").map((FF => FF.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (FF => FF.replace(/[^\n]/g, ""))).split("\n")
    }

    function Fb(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const SF = [],
        CF = new Set,
        AF = lh(WF ? FF : (0, RW.w)(FF, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, RW.o, (() => "projectRequire"))),
        uF = new Set([...AF.join("\n").matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)/g)].map((FF => FF[1])));
      return AF.forEach(((FF, WF) => {
        for (const AF of (0, RW.f)(FF, /(global|window|document|process|require)\b\s*[.([]/g, RW.o)) CF.has(AF[1]) || uF.has(AF[1]) || (CF.add(AF[1]), SF.push(`Line ${WF+1} uses "${AF[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPlayerJoin(playerId) {} is enough.`))
      })), SF
    }

    function Wb(FF) {
      const WF = FF.split("\n"),
        SF = [];
      return WF.forEach(((FF, CF) => {
        var AF, uF, hF, bW, dF;
        const PF = FF.indexOf("api.setCurrency(");
        if (-1 === PF) return;
        const RF = WF.slice(CF, CF + 3).join(" ").slice(PF),
          iW = RF.slice(0, RF.indexOf("}") + 1 || void 0),
          eF = null === (AF = /amount\s*:\s*(\d+)/.exec(iW)) || void 0 === AF ? void 0 : AF[1];
        if (!/persistent\s*:\s*true/.test(iW) || void 0 === eF) return;
        const EF = [null !== (uF = WF[CF - 2]) && void 0 !== uF ? uF : "", null !== (hF = WF[CF - 1]) && void 0 !== hF ? hF : "", FF.slice(0, PF)].join(" ");
        if (/\bif\s*\(|\belse\b|\?\s*$|&&\s*$/.test(EF)) return;
        const QF = null !== (bW = null === (dF = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(iW)) || void 0 === dF ? void 0 : dF[1]) && void 0 !== bW ? bW : "coins";
        SF.push(`Line ${CF+1} sets the saved "${QF}" back to ${eF} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${QF}") is null.`)
      })), SF
    }

    function Sb(FF) {
      var WF, SF;
      const CF = null !== (WF = null === (SF = FF.split("### Parameters:")[1]) || void 0 === SF ? void 0 : SF.split("###")[0]) && void 0 !== WF ? WF : "",
        AF = [];
      for (const uF of CF.split("\n")) {
        const FF = /^\|\s*([A-Za-z_$][\w$]*)\s*\|(?:\s*`([^`]*)`)?/.exec(uF);
        FF && "Parameter" !== FF[1] && AF.push({
          name: FF[1],
          type: FF[2]
        })
      }
      return AF
    }

    function Cb(FF) {
      return Sb(FF).map((FF => FF.name))
    }

    function Ab(FF) {
      const WF = [];
      let SF = 0,
        CF = "",
        AF = 0;
      for (let hF = 0; hF < FF.length; hF++) {
        const uF = FF[hF];
        CF ? "\\" === uF ? hF++ : uF === CF && (CF = "") : '"' === uF || "'" === uF || "`" === uF ? CF = uF : "[" === uF || "{" === uF ? SF++ : "]" === uF || "}" === uF ? SF-- : "," === uF && 0 === SF && (WF.push(FF.slice(AF, hF).trim()), AF = hF + 1)
      }
      const uF = FF.slice(AF).trim();
      return ("" !== uF || WF.length > 0) && WF.push(uF), WF
    }

    function ub(FF, WF, SF) {
      let CF;
      const AF = function(FF) {
        const WF = FF.split("\n").slice(1).map((FF => FF.trim())).find((FF => "" !== FF && !FF.startsWith("#") && !FF.startsWith("|") && !FF.startsWith("**") && !FF.startsWith("```")));
        if (!WF) return "";
        const SF = WF.search(/\.\s/),
          CF = -1 === SF ? WF : WF.slice(0, SF + 1);
        return CF.length > 110 ? `${CF.slice(0,107)}...` : CF
      }(SF);
      return CF = "api" === FF ? `api.${WF}(${Cb(SF).join(", ")})${AF?` \u2014 ${AF}`:""}` : "callback" === FF ? `${WF}(${Cb(SF).join(", ")})${AF?` \u2014 ${AF}`:""}` : "clientOption" === FF ? `${WF}: ${function(FF){var WF,SF;return null!==(WF=null===(SF=/\*\*Type:\*\*\s*`([^`]+)`/.exec(FF))||void 0===SF?void 0:SF[1])&&void 0!==WF?WF:""}(SF)}${AF?` \u2014 ${AF}`:""}`:WF,{kind:FF,name:WF,text:SF,line:CF,nameWords:Jh(WF),textWords:Jh(SF)}}function hb(FF){return FF.toLowerCase().split(/[^a-z0-9]+/).filter((FF=>""!==FF&&"of"!==FF&&"the"!==FF)).sort().join(" ")}const bd=new Set(["block","item"]);function db(FF){let{names:WF,isSure:SF}=FF;return 0===WF.length?"":1!==WF.length||SF?`
      Did you mean $ {
        WF.map((FF => `"${FF}"`)).join(" or ")
      } ? `:`
      The closest name is "${WF[0]}", which may be something
      else.
      `}function Pb(FF){return FF.split("\n").slice(1).map((FF=>FF.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((FF=>""!==FF&&!FF.startsWith("#")))}class Rb{constructor(FF){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0,this.blockNames=void 0,this.namesByLowerCase=void 0,this.wordCounts=new Map,this.realName=(FF,WF)=>{if("mob"===FF){var SF;const FF=WF.trim().toLowerCase();return null!==(SF=this.mobTypes.find((WF=>WF.toLowerCase()===FF)))&&void 0!==SF?SF:null}const CF=this.suggestNames(WF),AF=CF.isSure?CF.names[0]:void 0;return void 0===AF||"item"!==FF&&!this.blockNames.has(AF)?null:AF};const WF=[],SF=(FF,SF)=>{for(const{name:CF,text:AF}of function(FF){const WF=[],SF=FF.split(/^## /m).slice(1);for(const CF of SF){const FF=CF.indexOf("\n"),SF=(-1===FF?CF:CF.slice(0,FF)).trim(),AF=`
      # # $ {
        CF
      }
      `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();WF.push({name:SF,text:AF})}return WF}(SF))WF.push(ub(FF,CF,AF))};SF("api",FF.apiReference),SF("callback",FF.callbacks),SF("clientOption",FF.clientOptions),SF("snippet",FF.snippets),SF("howTo",FF.howTo);const CF=function(){const FF=nS.map((FF=>`
      # # $ {
        FF.name
      }\
      nReady - made
      function($ {
        FF.category
      }) : call it as it is, without api.and without writing it;
      its code is added to the file by itself.\n$ {
        FF.about
      }\
      n\ nUsage: \`${FF.signature}\`\n\n\`\`\`js\n${FF.example}\n\`\`\``)),
  WF = vC.map((FF => `## ${FF.name}\nPrefab (${FF.kind}, ${FF.category}): put in with use_prefab. ${iA(FF,!1)}`));
  return {
    helpers: `# Ready-made functions\n\n${FF.join("\n\n")}\n`,
    prefabs: `# Prefabs\n\n${WF.join("\n\n")}\n`
  }
}();
SF("helper", CF.helpers), SF("prefab", CF.prefabs), this.sections = WF;
for (const uF of WF) {
  this.byName.has(uF.name) || this.byName.set(uF.name, uF);
  for (const FF of uF.textWords) {
    var AF;
    this.wordCounts.set(FF, (null !== (AF = this.wordCounts.get(FF)) && void 0 !== AF ? AF : 0) + 1)
  }
}
this.itemAndBlockNames = [...new Set([...Pb(FF.itemNames), ...Pb(FF.blockNames)])], this.blockNames = new Set(Pb(FF.blockNames)), this.namesByLowerCase = new Map(this.itemAndBlockNames.map((FF => [FF.toLowerCase(), FF]))), this.mobTypes = function(FF) {
  var WF, SF;
  const CF = null !== (WF = null === (SF = FF.split("## Mob Variations")[1]) || void 0 === SF ? void 0 : SF.split("```")[1]) && void 0 !== WF ? WF : "",
    AF = [];
  for (const uF of CF.split("\n")) {
    const FF = /^([A-Z][\w ]*?):\s*"/.exec(uF.trim());
    FF && AF.push(FF[1])
  }
  return AF
}(FF.mobSettings)
}
index(FF) {
  return this.sections.filter((WF => WF.kind === FF)).map((FF => FF.line)).join("\n")
}
callbackNames() {
  return this.sections.filter((FF => "callback" === FF.kind)).map((FF => FF.name))
}
get(FF) {
  return this.byName.get(FF)
}
unprefixedApiCalls(FF) {
  const WF = lh(FF),
    SF = WF.join("\n"),
    CF = new Set([...SF.matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)|^([\w$]+)\s*=/gm)].map((FF => {
      var WF;
      return null !== (WF = FF[1]) && void 0 !== WF ? WF : FF[2]
    }))),
    AF = [...SF.matchAll(/\b(?:const|let|var)\s*([{[][^=]*?[}\]])\s*=/g), ...SF.matchAll(/\bimport\s+([\w$\s{},*]+?)\s+from\b/g)];
  for (const hF of AF)
    for (const FF of hF[1].matchAll(/([\w$]+)\s*(?=[,}\]=]|$)/g)) CF.add(FF[1]);
  const uF = new Map;
  return WF.forEach(((FF, WF) => {
    for (const AF of (0, RW.f)(FF, /([\w$]+)\s*\(/g, RW.o)) {
      var SF;
      const hF = AF[1],
        bW = /^\s*(?:async\s+)?$/.test(FF.slice(0, AF.index)) && /^[\w$]+\s*\([^()]*\)\s*\{/.test(FF.slice(AF.index));
      uF.has(hF) || CF.has(hF) || bW || "api" !== (null === (SF = this.byName.get(hF)) || void 0 === SF ? void 0 : SF.kind) || uF.set(hF, `Line ${WF+1} calls ${hF} without "api.", so it throws there. Did you mean api.${hF}?`)
    }
  })), [...uF.values()]
}
unknownApiMethods(FF) {
  return [...new Set([...FF.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)].map((FF => FF[1])))].filter((FF => {
    var WF;
    return "api" !== (null === (WF = this.byName.get(FF)) || void 0 === WF ? void 0 : WF.kind)
  })).map((FF => {
    const WF = this.find(FF.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((FF => "api" === FF.kind)).slice(0, 2).map((FF => `api.${FF.name}`));
    return `api.${FF} doesn't exist.${WF.length?` Did you mean ${WF.join(" or ")}?`:""}`
  }))
}
unknownItemNames(FF) {
  const WF = new Set([...this.itemAndBlockNames, "Air"]),
    SF = new Set;
  for (const CF of FF.matchAll(/\bapi\.([A-Za-z_$][\w$]*)\(([^()]*)\)/g)) {
    const AF = this.byName.get(CF[1]);
    if ("api" !== (null === AF || void 0 === AF ? void 0 : AF.kind)) continue;
    const uF = Sb(AF.text).map((FF => {
        let {
          type: WF
        } = FF;
        return void 0 !== WF && /^(ItemName|BlockName)\b/.test(WF)
      })),
      hF = Ab(CF[2]);
    hF.forEach(((CF, AF) => {
      var bW, dF;
      const PF = uF[AF] || AF === hF.length - 1 && uF[uF.length - 1],
        RF = null === (bW = /^CONFIG\.([\w$]+)$/.exec(CF)) || void 0 === bW ? void 0 : bW[1],
        iW = RF ? null === (dF = new RegExp(`(?:^|[{,])\\s*${RF.replaceAll("$","\\$")}\\s*:\\s*("[^"\\n]*"|'[^'\\n]*')`, "m").exec(FF)) || void 0 === dF ? void 0 : dF[1] : void 0,
        eF = /^(["'`])([^"'`]+)\1$/.exec(null !== iW && void 0 !== iW ? iW : CF),
        EF = "`" === (null === eF || void 0 === eF ? void 0 : eF[1]) && eF[2].includes("${");
      PF && eF && !EF && !WF.has(eF[2]) && SF.add(eF[2])
    }))
  }
  return [...SF].map((FF => `"${FF}" isn't an item or block name.${db(this.suggestNames(FF))}`))
}
reorderedComparedNames(FF) {
  const WF = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
    SF = new Map(this.itemAndBlockNames.map((FF => [hb(FF), FF]))),
    CF = new Map,
    AF = [/[!=]==?\s*(["'])([^"'\n]{3,40})\1/g, /(["'])([^"'\n]{3,40})\1\s*[!=]==?/g, /\bcase\s+(["'])([^"'\n]{3,40})\1\s*:/g, /\.includes\(\s*(["'])([^"'\n]{3,40})\1\s*\)/g];
  for (const bW of AF)
    for (const AF of FF.matchAll(bW)) {
      const FF = AF[2],
        uF = WF.has(FF) || !/\s/.test(FF.trim()) ? void 0 : SF.get(hb(FF));
      uF && CF.set(FF, uF)
    }
  const uF = [...CF].map((FF => {
      let [WF, SF] = FF;
      return `"${WF}" isn't a block or item name, so comparing with it is never true. Did you mean "${SF}"?`
    })),
    hF = new Map;
  for (const bW of FF.matchAll(/\b\w*block\w*\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) {
    const WF = bW[2],
      SF = this.blockNames.has(WF) || !this.itemAndBlockNames.includes(WF) ? void 0 : [`Block of ${WF}`, `${WF} Block`].find((FF => this.blockNames.has(FF)));
    !SF || FF.includes(`"${SF}"`) || FF.includes(`'${SF}'`) || hF.set(WF, SF)
  }
  return [...uF, ...[...hF].map((FF => {
    let [WF, SF] = FF;
    return `"${WF}" is an item, not a block, so no block is ever called that. Did you mean "${SF}"?`
  }))]
}
unknownComparedBlockNames(FF) {
  const WF = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
    SF = new Set(this.itemAndBlockNames.map((FF => hb(FF)))),
    CF = new Set;
  for (const AF of FF.matchAll(/\b\w*block(?:name|type)?\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) CF.add(AF[2]);
  for (const AF of FF.matchAll(/(["'])([^"'\n]+)\1\s*[!=]==?\s*\w*block(?:name|type)?\b/gi)) CF.add(AF[2]);
  return [...CF].filter((FF => !WF.has(FF) && !(/\s/.test(FF.trim()) && SF.has(hb(FF))))).map((FF => {
    const WF = this.itemAndBlockNames.filter((WF => hb(WF) === hb(FF))),
      SF = this.itemAndBlockNames.filter((WF => jb(WF).includes(FF.toLowerCase()))),
      CF = this.suggestNames(FF),
      AF = WF.length > 0 ? {
        names: WF,
        isSure: 1 === WF.length,
        isDecided: !0
      } : CF.names.length > 0 || CF.isDecided ? CF : {
        names: SF.length <= 2 ? SF : [],
        isSure: 1 === SF.length,
        isDecided: !1
      };
    return `"${FF}" isn't a block or item name, so comparing a block with it is never true.${db(AF)}`
  }))
}
madeUpStopValues(FF) {
  const WF = new Set;
  for (const {
      name: SF,
      body: CF
    }
    of
    function(FF) {
      const WF = [...FF.matchAll(ph)];
      return WF.map(((SF, CF) => {
        var AF, uF, hF;
        return {
          name: null !== (AF = SF[1]) && void 0 !== AF ? AF : SF[2],
          body: FF.slice(SF.index, null !== (uF = null === (hF = WF[CF + 1]) || void 0 === hF ? void 0 : hF.index) && void 0 !== uF ? uF : FF.length)
        }
      }))
    }(FF)) {
    const FF = this.byName.get(SF);
    if ("callback" === (null === FF || void 0 === FF ? void 0 : FF.kind))
      for (const AF of CF.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
        const CF = AF[1];
        if (FF.text.includes(`"${CF}"`)) continue;
        const uF = [...new Set([...FF.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((FF => FF[1])))],
          hF = uF.length > 0 ? `Did you mean ${uF.map((FF=>`"${FF}"`)).join(" or ")}?` : /Return false/i.test(FF.text) ? `To stop it, return false instead of "${CF}".` : "Check Show Docs for what it can return.";
        WF.add(`${SF} can't use "${CF}" to stop anything. ${hF}`)
      }
  }
  return [...WF]
}
codeWarnings(FF) {
  let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [...this.unknownApiMethods(FF), ...this.unprefixedApiCalls(FF), ...this.unknownItemNames(FF), ...this.reorderedComparedNames(FF), ...this.unknownComparedBlockNames(FF), ...this.madeUpStopValues(FF), ...Wb(FF), ...Fb(FF, WF)]
}
suggestNames(FF) {
  var WF;
  const SF = FF.trim().toLowerCase().replace(/\s+/g, " "),
    CF = Object.hasOwn(wh, SF) ? wh[SF] : void 0;
  if (CF) {
    const FF = CF.filter((FF => this.namesByLowerCase.has(FF.toLowerCase())));
    return {
      names: FF,
      isSure: 1 === FF.length,
      isDecided: !0
    }
  }
  const AF = SF.split(" ").map((FF => Object.hasOwn(Xh, FF) ? Xh[FF] : FF)).join(" "),
    uF = null !== (WF = this.namesByLowerCase.get(SF)) && void 0 !== WF ? WF : this.namesByLowerCase.get(AF);
  if (uF) return {
    names: [uF],
    isSure: !0,
    isDecided: !0
  };
  const hF = this.closestItemAndBlockNames(AF),
    bW = FF => jb(FF).filter((FF => !Bh.has(FF) && !bd.has(FF))).map(vb),
    dF = 1 === hF.length ? bW(hF[0]) : [];
  return {
    names: hF,
    isSure: 1 === hF.length && bW(AF).every((FF => dF.includes(FF))),
    isDecided: !1
  }
}
closestItemAndBlockNames(FF) {
  const WF = new Set(jb(FF).filter((FF => !Bh.has(FF))).map(vb)),
    SF = this.itemAndBlockNames.map((FF => {
      const SF = jb(FF).filter((FF => !Bh.has(FF))).map(vb),
        CF = SF.filter((FF => WF.has(FF))).length;
      return {
        candidate: FF,
        score: 2 * CF - (SF.length - CF)
      }
    })).filter((FF => FF.score > 0)),
    CF = Math.max(...SF.map((FF => FF.score)));
  return SF.filter((FF => FF.score === CF)).slice(0, 2).map((FF => FF.candidate))
}
find(FF, WF, SF) {
  const CF = new Map,
    AF = (FF, WF) => {
      var SF;
      FF && CF.set(FF, (null !== (SF = CF.get(FF)) && void 0 !== SF ? SF : 0) + WF)
    },
    uF = jb(FF),
    hF = uF.filter((FF => !Bh.has(FF)));
  for (const iW of uF)
    for (const FF of Object.hasOwn(Uh, iW) ? Uh[iW] : []) AF(this.byName.get(FF), 6);
  for (const iW of `${FF}\n${WF}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
    var bW, dF;
    AF(this.byName.get(null !== (bW = null !== (dF = iW[1]) && void 0 !== dF ? dF : iW[2]) && void 0 !== bW ? bW : iW[3]), iW[1] || iW[2] ? 4 : 2)
  }
  for (const iW of (0, RW.f)(WF, /([A-Za-z_$][\w$]*)\s*\(/g, RW.o)) {
    const FF = this.byName.get(iW[1]);
    "helper" === (null === FF || void 0 === FF ? void 0 : FF.kind) && AF(FF, 3)
  }
  const PF = new Set(hF.map(vb));
  for (const iW of this.sections) {
    let FF = 0;
    for (const WF of PF) {
      var RF;
      const SF = 1 / Math.log2(2 + (null !== (RF = this.wordCounts.get(WF)) && void 0 !== RF ? RF : 0));
      iW.nameWords.has(WF) ? FF += 3 * SF : iW.textWords.has(WF) && (FF += SF)
    }
    AF(iW, FF)
  }
  return [...CF.entries()].filter((FF => {
    let [WF, SF] = FF;
    return SF > .5 && "prefab" !== WF.kind
  })).sort(((FF, WF) => WF[1] - FF[1])).slice(0, SF).map((FF => {
    let [WF] = FF;
    return WF
  }))
}
section(FF) {
  var WF, SF;
  const CF = FF.trim().replace(/^api\./, "").replace(/\(.*$/, ""),
    AF = CF.toLowerCase();
  return null !== (WF = null !== (SF = this.byName.get(CF)) && void 0 !== SF ? SF : this.sections.find((FF => FF.name.toLowerCase() === AF))) && void 0 !== WF ? WF : null
}
searchNames(FF, WF) {
  const SF = jb(FF).filter((FF => !Bh.has(FF))).map(vb);
  if (0 === SF.length) return [];
  const CF = [...this.itemAndBlockNames, ...this.mobTypes].flatMap((FF => {
      const WF = new Set(jb(FF).map(vb)),
        CF = SF.filter((FF => WF.has(FF))).length;
      return 0 === CF ? [] : [{
        name: FF,
        found: CF,
        length: WF.size
      }]
    })),
    AF = Math.max(0, ...CF.map((FF => FF.found)));
  return [...new Set(CF.filter((FF => FF.found === AF)).sort(((FF, WF) => FF.length - WF.length || FF.name.localeCompare(WF.name))).map((FF => FF.name)))].slice(0, WF)
}
matchItemAndBlockNames(FF, WF) {
  const SF = new Set(jb(FF).map(vb)),
    CF = [];
  for (const AF of this.itemAndBlockNames) {
    const FF = jb(AF).filter((FF => !Bh.has(FF))).map(vb);
    FF.length > 0 && FF.every((FF => SF.has(FF))) && CF.push({
      name: AF,
      length: FF.length
    })
  }
  return CF.sort(((FF, WF) => WF.length - FF.length)).slice(0, WF).map((FF => FF.name))
}
}

function eb(FF, WF) {
  var SF;
  const CF = Eb(FF, !0),
    AF = null === (SF = /^([\w$.]+) (?:needs|couldn't|didn't|isn't a function)/.exec(CF)) || void 0 === SF ? void 0 : SF[1],
    uF = AF && void 0 !== WF ? function(FF, WF) {
      const SF = WF.replace(/[$.]/g, "\\$&"),
        CF = new RegExp(`(^|[^\\w$.])${SF}\\s*\\(`),
        AF = FF.split("\n").flatMap(((FF, WF) => CF.test(FF) ? [WF + 1] : []));
      return 1 === AF.length ? AF[0] : void 0
    }(WF, AF) : void 0;
  return uF ? {
    text: Eb(FF, !1),
    line: uF
  } : {
    text: CF
  }
}

function Eb(FF, WF) {
  const SF = FF.replace(/^Logging too many errors\n/, "").replace(/^(First|Last) error of \d+ errors:\n/, ""),
    [CF, ...AF] = SF.split("\n"),
    {
      when: uF,
      rest: hF
    } = function(FF) {
      const WF = /^Error in world code init:\s*/.exec(FF);
      if (WF) return {
        when: "when your world started",
        rest: FF.slice(WF[0].length)
      };
      const SF = /^Error in (?:callback )?(\w+):\s*/.exec(FF);
      return SF ? {
        when: `in ${SF[1]}`,
        rest: FF.slice(SF[0].length)
      } : {
        when: "",
        rest: FF
      }
    }(CF.trim()),
    bW = uF && WF ? ` ${uF}` : "",
    dF = /(?:ApiError:\s*)?(\w+) didn't work/.exec(hF);
  if (dF) {
    var PF, RF, iW, eF, EF;
    const FF = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (PF = null === (RF = AF[0]) || void 0 === RF ? void 0 : RF.trim()) && void 0 !== PF ? PF : ""),
      WF = null === (iW = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (eF = null === (EF = AF[1]) || void 0 === EF ? void 0 : EF.trim()) && void 0 !== eF ? eF : "")) || void 0 === iW ? void 0 : iW[1],
      SF = WF ? function(FF) {
        const WF = FF.split(/\s+or\s+/)[0].trim();
        return /^(a|an|the)\s/i.test(WF) || !/^[a-z]/i.test(WF) ? WF : `${/^[aeiou]/i.test(WF)?"an":"a"} ${WF}`
      }(WF) : void 0;
    return SF && null !== FF && void 0 !== FF && FF[3] ? `api.${dF[1]} needs ${SF}, but it got ${FF[3]}${bW}.` : FF ? `api.${dF[1]} couldn't use its ${QF=Number(FF[1]),1===QF?"first":2===QF?"second":3===QF?"third":4===QF?"fourth":`#${QF}`} argument${bW}.${SF?` It needs ${SF}.`:""}` : `api.${dF[1]} didn't work${bW}.`
  }
  var QF;
  const rW = /TypeError:\s*(?:(.+?) is )?not a function/.exec(hF);
  if (rW) return rW[1] ? `${rW[1]} isn't a function${bW}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${bW}. Check each name it calls is spelt exactly right.`;
  const gW = /ReferenceError:\s*'?([^'\s]+)'? is not defined/.exec(hF);
  if (gW) return `${gW[1]} isn't defined${bW}. Check the spelling, or create it before using it.`;
  const tW = /TypeError:\s*[Cc]annot read propert(?:y|ies) (?:'([^']+)' )?of (undefined|null)(?: \(reading '([^']+)'\))?/.exec(hF);
  if (tW) {
    var TF;
    const FF = null !== (TF = tW[1]) && void 0 !== TF ? TF : tW[3];
    return `Your code tried to read${FF?` .${FF}`:" something"} from ${tW[2]}${bW}: a value it expected wasn't there.`
  }
  return `Your code hit an error${bW}: ${hF.replace(/^\w*Error:\s*/,"")}`
}
const Qb = /^"([^"]+)" isn't an item or block name\..*Did you mean "([^"]+)"\?$/,
  rd = /^"([^"]+)" isn't a block or item name, so comparing with it\b.*Did you mean "([^"]+)"\?$/,
  gd = /^"([^"]+)" (?:is an item, not a block|isn't a block or item name, so comparing a block with it)\b.*Did you mean "([^"]+)"\?$/,
  td = /^([\w$]+) can't use "([^"]+)" to stop anything\. Did you mean "([^"]+)"\?$/,
  Tb = /^Line \d+ calls ([\w$]+) without "api\.", so it throws there\. Did you mean (api\.[\w$]+)\?$/,
  ad = /^Line \d+ uses "([\w$]+)", which is never set, so it throws there\. Did you mean "([\w$]+)"\?$/,
  kd = /^Line \d+ uses "global", which World Code doesn't have\b/,
  qd = /^[ \t]*global\.([\w$]+)[ \t]*=[ \t]*\1[ \t]*;?[ \t]*(?:\/\/.*)?(?:\r?\n|$)/gm,
  Vb = /^([ \t]*)global\.([\w$]+)([ \t]*=(?!=))/gm;

function Nb(FF) {
  const WF = Tb.exec(FF);
  if (WF) return {
    from: WF[1],
    to: WF[2],
    kind: "call"
  };
  const SF = ad.exec(FF);
  if (SF) return {
    from: SF[1],
    to: SF[2],
    kind: "variable"
  };
  if (kd.test(FF)) return {
    from: "global",
    to: "",
    kind: "export"
  };
  const CF = td.exec(FF);
  if (CF) return {
    from: CF[2],
    to: CF[3],
    callback: CF[1]
  };
  const AF = rd.exec(FF);
  if (AF) return {
    from: AF[1],
    to: AF[2],
    kind: "compared"
  };
  const uF = gd.exec(FF);
  if (uF) return {
    from: uF[1],
    to: uF[2],
    kind: "comparedBlock"
  };
  const hF = Qb.exec(FF);
  return hF ? {
    from: hF[1],
    to: hF[2]
  } : void 0
}

function Db(FF) {
  const WF = FF.map(Nb);
  return WF.length > 0 && !WF.includes(void 0) ? WF : void 0
}

function Lb(FF, WF, SF) {
  return FF.replaceAll(`"${WF}"`, `"${SF}"`).replaceAll(`'${WF}'`, `'${SF}'`)
}

function md(FF, WF) {
  const SF = FF => NF().isIdentifier(FF) ? FF.text === WF : FF.elements.some((FF => !NF().isOmittedExpression(FF) && SF(FF.name))),
    CF = FF => void 0 !== FF && NF().isVariableDeclarationList(FF) && FF.declarations.some((FF => SF(FF.name))),
    AF = FF => {
      const WF = FF => !NF().isFunctionLike(FF) && !NF().isClassStaticBlockDeclaration(FF) && (!(!NF().isVariableDeclarationList(FF) || 0 !== (FF.flags & NF().NodeFlags.BlockScoped) || !CF(FF)) || !0 === NF().forEachChild(FF, WF));
      return void 0 !== FF && !0 === NF().forEachChild(FF, WF)
    };
  var uF;
  if (NF().isFunctionLike(FF)) return FF.parameters.some((FF => SF(FF.name))) || NF().isFunctionExpression(FF) && (null === (uF = FF.name) || void 0 === uF ? void 0 : uF.text) === WF || "body" in FF && AF(FF.body);
  return !(!NF().isSourceFile(FF) || !AF(FF)) || (NF().isSourceFile(FF) || NF().isBlock(FF) || NF().isCaseClause(FF) || NF().isDefaultClause(FF) ? FF.statements.some((FF => {
    var SF;
    return NF().isVariableStatement(FF) && CF(FF.declarationList) || (NF().isFunctionDeclaration(FF) || NF().isClassDeclaration(FF)) && (null === (SF = FF.name) || void 0 === SF ? void 0 : SF.text) === WF || NF().isImportDeclaration(FF) && (FF => {
      var SF;
      const CF = null === FF || void 0 === FF ? void 0 : FF.namedBindings;
      return (null === FF || void 0 === FF || null === (SF = FF.name) || void 0 === SF ? void 0 : SF.text) === WF || void 0 !== CF && (NF().isNamespaceImport(CF) ? CF.name.text === WF : CF.elements.some((FF => FF.name.text === WF)))
    })(FF.importClause)
  })) : NF().isForStatement(FF) || NF().isForInStatement(FF) || NF().isForOfStatement(FF) ? CF(FF.initializer) : NF().isCatchClause(FF) && void 0 !== FF.variableDeclaration && SF(FF.variableDeclaration.name))
}

function Ob(FF, WF) {
  return WF.reduce(((FF, WF) => {
    let {
      from: SF,
      to: CF,
      kind: AF,
      callback: uF
    } = WF;
    if ("export" === AF) return FF.replace(qd, "").replace(Vb, "$1$2$3");
    if ("call" === AF || "variable" === AF) return function(FF, WF, SF, CF) {
      const AF = NF().createSourceFile("worldCode.js", FF, NF().ScriptTarget.Latest, !0, NF().ScriptKind.JS),
        uF = [],
        hF = (FF, bW) => {
          const dF = bW || md(FF, WF),
            PF = FF.parent;
          if (NF().isIdentifier(FF) && FF.text === WF && !dF && PF) {
            const hF = NF().isBindingElement(PF) && PF.propertyName === FF || (NF().isPropertyAccessExpression(PF) || NF().isPropertyAssignment(PF) || NF().isMethodDeclaration(PF) || NF().isPropertyDeclaration(PF) || NF().isGetAccessorDeclaration(PF) || NF().isSetAccessorDeclaration(PF)) && PF.name === FF,
              bW = NF().isCallExpression(PF) && PF.expression === FF;
            hF || CF && !bW || uF.push({
              at: FF.getStart(AF),
              text: NF().isShorthandPropertyAssignment(PF) ? `${WF}: ${SF}` : SF
            })
          }
          NF().forEachChild(FF, (FF => {
            hF(FF, dF)
          }))
        };
      return hF(AF, !1), uF.reduceRight(((FF, SF) => FF.slice(0, SF.at) + SF.text + FF.slice(SF.at + WF.length)), FF)
    }(FF, SF, CF, "call" === AF);
    if ("compared" === AF || "comparedBlock" === AF) {
      const WF = `(["'])${function(FF){return FF.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(SF)}\\1`;
      return ("comparedBlock" === AF ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${WF}`, `${WF}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${WF}`, `${WF}\\s*[!=]==?`, `\\bcase\\s+${WF}\\s*:`, `\\.includes\\(\\s*${WF}\\s*\\)`]).reduce(((FF, WF) => FF.replace(new RegExp(WF, "g"), (FF => Lb(FF, SF, CF)))), FF)
    }
    if (void 0 !== uF) {
      return sF(FF).filter((FF => FF.name === uF && FF.topLevel)).reduceRight(((FF, WF) => FF.slice(0, WF.from) + Lb(FF.slice(WF.from, WF.to), SF, CF) + FF.slice(WF.to)), FF)
    }
    return Lb(FF, SF, CF)
  }), FF)
}

function xd(FF) {
  let {
    from: WF,
    to: SF,
    kind: CF
  } = FF;
  return "export" === CF ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : `"${WF}" is now "${SF}".`
}
var Zb = SF(39321);

function ob() {
  return (0, hF.jsxs)("svg", {
    className: "WorldCodeAiKeyIcon",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    children: [(0, hF.jsx)("circle", {
      cx: "4.5",
      cy: "8",
      r: "3"
    }), (0, hF.jsx)("path", {
      d: "M7.5 8h7.5M12.5 8v3M15 8v2.5"
    })]
  })
}

function Yb(FF) {
  let {
    detail: WF,
    onOpen: SF
  } = FF;
  return (0, hF.jsxs)("details", {
    className: "WorldCodeAiKeyDetails",
    onToggle: FF => {
      FF.currentTarget.open && (null === SF || void 0 === SF || SF())
    },
    children: [(0, hF.jsx)("summary", {
      children: "Details"
    }), (0, hF.jsx)("p", {
      children: WF
    })]
  })
}

function Mb(FF) {
  let {
    answeredBy: WF
  } = FF;
  return "free" === WF ? (0, hF.jsx)("div", {
    className: "WorldCodeAiAnsweredBy",
    children: "Bot.xd (free)"
  }) : (0, hF.jsxs)("div", {
    className: WF.isSuperBot ? "WorldCodeAiAnsweredBy" : "WorldCodeAiAnsweredBy WorldCodeAiAnsweredBy-key",
    children: [!WF.isSuperBot && (0, hF.jsx)(ob, {}), WF.model]
  })
}

function cd(FF) {
  let {
    notice: WF,
    model: SF,
    company: CF,
    isServer: AF
  } = FF;
  switch (WF) {
    case "badKey":
      return AF ? `${CF} didn't accept your key: it may be wrong or deleted.` : `${CF} didn't accept your key: it may be wrong or deleted. Check it on ${CF}'s website.`;
    case "noCredit":
      return AF ? `${CF} stopped your key for now: it has used all it can.` : `${CF} stopped your key for now: it has used all it can. Check it on ${CF}'s website.`;
    case "busy":
      return `Too many requests to ${SF} right now. Wait a minute and try again.`;
    case "noModel":
      return `${CF} can't find ${SF}. Pick another model, or press Check for new models in AI settings.`;
    case "timeout":
      return `${SF} took too long to answer.`;
    case "unreachable":
      return AF ? `Couldn't reach ${CF}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${CF}. Check your internet and your key.`;
    case "blocked":
      return `${CF} doesn't work from where you are.`;
    case "unchecked":
      return "Bloxd's safety check didn't answer, so your key wasn't used.";
    default:
      return `${SF} can't be used right now. Try again in a minute.`
  }
}

function Gb(FF) {
  let {
    notice: WF,
    model: SF,
    company: CF
  } = FF;
  switch (WF) {
    case "badKey":
      return `Not answered: ${CF} didn't accept your key.`;
    case "noModel":
      return `Not answered: ${CF} couldn't find ${SF}.`;
    case "noCredit":
      return `Not answered: ${CF} stopped your key for now.`;
    case "busy":
      return `Not answered: too many requests to ${SF}.`;
    case "timeout":
      return `Not answered: ${SF} took too long.`;
    case "unreachable":
      return `Not answered: couldn't reach ${CF}.`;
    case "blocked":
      return `Not answered: ${CF} doesn't work from where you are.`;
    case "unchecked":
      return "Not answered: the safety check didn't answer.";
    default:
      return `Not answered: ${SF} couldn't be used.`
  }
}

function zd(FF) {
  return "busy" === FF || "timeout" === FF || "failed" === FF || "unchecked" === FF
}

function Ib(FF) {
  let {
    notice: WF,
    onRetry: SF,
    onUseFree: CF,
    onCheckKey: AF
  } = FF;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiKeyNoticeActions",
    children: [(0, hF.jsx)("button", {
      ...Zb.f,
      className: "WorldCodeAiPrimaryButton",
      onClick: CF,
      children: "Use Bot.xd for this one"
    }), zd(WF) && (0, hF.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: SF,
      children: "Try again"
    }), "unchecked" !== WF && (0, hF.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: AF,
      children: "Open AI settings"
    })]
  })
}

function fb(FF) {
  let {
    hasCode: WF,
    canFinish: SF,
    onFinish: CF
  } = FF;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiCutShort",
    children: [(0, hF.jsx)("p", {
      children: WF ? "The answer was cut short because it was too long." : "The answer was cut short before its code because it was too long."
    }), SF && (0, hF.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: CF,
      children: "Finish the answer"
    })]
  })
}
const yd = "worldCodeAiAllowEdits";

function sb() {
  try {
    return "false" !== localStorage.getItem(yd)
  } catch {
    return !0
  }
}

function nb(FF) {
  let {
    allow: WF,
    onChange: SF
  } = FF;
  return (0, hF.jsxs)("label", {
    className: "WorldCodeAiAllowEdits",
    children: [(0, hF.jsx)("input", {
      type: "checkbox",
      role: "switch",
      checked: WF,
      onChange: FF => {
        SF(FF.target.checked)
      }
    }), (0, hF.jsx)("span", {
      children: "Allow AI to make edits to my code"
    })]
  })
}
const Hb = {
  keyId: "bloxd",
  modelId: "superbotxd"
};

function Kb(FF, WF) {
  const SF = Array.from(FF.querySelectorAll(".WorldCodeAiModelGroup")),
    CF = SF.findIndex((FF => FF.contains(WF)));
  if (CF < 0) return !1;
  const AF = FF.getBoundingClientRect(),
    uF = WF => FF.scrollTop + WF.top - AF.top,
    hF = uF(WF.getBoundingClientRect()) + WF.getBoundingClientRect().height,
    bW = FF.scrollHeight - FF.clientHeight,
    dF = SF.slice(0, CF + 1).map((FF => uF(FF.getBoundingClientRect()))).filter((FF => hF - FF <= AF.height + 1));
  if (0 === dF.length) return !1;
  const PF = dF.filter((FF => FF <= bW + 1)),
    RF = PF.length > 0 ? Math.max(...PF) : Math.min(...dF);
  return RF > bW && (FF.style.paddingBottom = (parseFloat(getComputedStyle(FF).paddingBottom) || 0) + RF - bW + "px"), FF.scrollTop = RF, !0
}

function wb(FF) {
  let {
    keyName: WF,
    placeholder: SF,
    onDone: AF
  } = FF;
  const [uF, bW] = (0, CF.useState)(WF);
  return (0, hF.jsxs)("form", {
    className: "WorldCodeAiKeyRename",
    onSubmit: FF => {
      FF.preventDefault(), AF(uF)
    },
    children: [(0, hF.jsx)("input", {
      className: "WorldCodeAiAddKeyInput",
      "aria-label": "Name for this key",
      value: uF,
      maxLength: 30,
      placeholder: SF,
      autoFocus: !0,
      onChange: FF => {
        bW(FF.target.value)
      },
      onKeyDown: FF => {
        FF.stopPropagation(), "Escape" === FF.key && (FF.preventDefault(), AF(null))
      }
    }), (0, hF.jsx)("button", {
      type: "submit",
      className: "WorldCodeAiLinkButton",
      children: "Save"
    }), (0, hF.jsx)("button", {
      type: "button",
      className: "WorldCodeAiKeyLearnMore",
      onClick: () => {
        AF(null)
      },
      children: "Cancel"
    })]
  })
}

function Xb(FF) {
  let {
    savedKey: WF,
    isInUse: SF,
    onRename: CF,
    onEdit: AF
  } = FF;
  const uF = Ah(WF),
    bW = ou(WF.provider, WF.baseUrl, !0),
    dF = function(FF, WF) {
      var SF, CF;
      return "" === FF ? "no key needed" : FF.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === WF ? `key \u2026${FF.slice(-4)}` : `${(null!==(SF=null===(CF=/^[a-zA-Z]+-/.exec(FF))||void 0===CF?void 0:CF[0])&&void 0!==SF?SF:FF.slice(0,4)).slice(0,6)}\u2026${FF.slice(-4)}`
    }(WF.key, WF.provider);
  return (0, hF.jsxs)("span", {
    className: "WorldCodeAiModelGroupName",
    title: WF.baseUrl,
    children: [uF, " ", WF.name && (0, hF.jsxs)("span", {
      className: "WorldCodeAiModelHint",
      children: ["\xb7 ", bW, " "]
    }), "" === WF.key ? (0, hF.jsx)("span", {
      className: "WorldCodeAiModelHint",
      children: dF
    }) : (0, hF.jsx)("code", {
      children: dF
    }), SF && (0, hF.jsxs)(hF.Fragment, {
      children: [" ", (0, hF.jsx)("span", {
        className: "WorldCodeAiInUseTag",
        children: "In use"
      })]
    }), (AF || CF) && (0, hF.jsxs)("span", {
      className: "WorldCodeAiKeyLinks",
      children: [AF && (0, hF.jsx)("button", {
        className: "WorldCodeAiKeyLearnMore",
        "aria-label": `Edit ${uF} key`,
        onClick: AF,
        children: "Edit"
      }), CF && (0, hF.jsx)("button", {
        className: "WorldCodeAiKeyLearnMore",
        "aria-label": `Rename ${uF} key`,
        onClick: CF,
        children: "Rename"
      })]
    })]
  })
}

function Ub(FF) {
  var WF, SF, AF, bW;
  let {
    name: dF,
    hint: PF,
    choice: RF,
    selected: iW,
    radioName: eF,
    onSelect: EF,
    onChosen: QF,
    disabledWhy: rW
  } = FF;
  const gW = (0, CF.useRef)(!1),
    tW = `${eF}-${null!==(WF=null===RF||void 0===RF?void 0:RF.keyId)&&void 0!==WF?WF:"botxd"}-${null!==(SF=null===RF||void 0===RF?void 0:RF.modelId)&&void 0!==SF?SF:"botxd"}`.replace(/[^\w-]/g, "_"),
    TF = !!rW;
  return (0, hF.jsxs)("label", {
    className: uF()("WorldCodeAiModelRow", iW && "Selected", TF && "Disabled"),
    "data-key-id": null !== (AF = null === RF || void 0 === RF ? void 0 : RF.keyId) && void 0 !== AF ? AF : "botxd",
    "data-model-id": null !== (bW = null === RF || void 0 === RF ? void 0 : RF.modelId) && void 0 !== bW ? bW : "botxd",
    title: null !== rW && void 0 !== rW ? rW : void 0,
    onPointerDown: () => {
      gW.current = !TF
    },
    children: [(0, hF.jsx)("input", {
      type: "radio",
      name: eF,
      "aria-label": dF,
      "aria-describedby": PF ? tW : void 0,
      checked: iW,
      disabled: TF,
      onChange: EF,
      onClick: () => {
        gW.current && (null === QF || void 0 === QF || QF()), gW.current = !1
      },
      onKeyDown: FF => {
        "Enter" === FF.key && (null === QF || void 0 === QF || QF())
      }
    }), (0, hF.jsx)("span", {
      className: "WorldCodeAiModelName",
      children: dF
    }), PF && (0, hF.jsx)("span", {
      id: tW,
      className: "WorldCodeAiModelHint",
      children: PF
    })]
  })
}

function Bb(FF) {
  let {
    labelledBy: WF,
    onPicked: AF,
    canRename: uF = !1,
    onEdit: bW,
    eWF: dF,
    onRefresh: PF,
    refreshingIds: RF,
    keyNote: iW
  } = FF;
  const {
    keys: eF,
    isSelected: EF,
    select: QF,
    renameKey: rW
  } = ib(), gW = Vh();
  (0, CF.useEffect)((() => {
    qb.refresh(), sh()
  }), []);
  const tW = Oh(gW),
    [TF, aW] = (0, CF.useState)(null),
    [kW, qW] = (0, CF.useState)(null),
    [VF, NF] = (0, CF.useState)({}),
    [DF] = (0, CF.useState)((() => function(FF) {
      const WF = FF.map(((FF, WF) => {
        var SF;
        return {
          id: FF.id,
          at: null !== (SF = FF.usedAt) && void 0 !== SF ? SF : 0,
          i: WF
        }
      })).sort(((FF, WF) => WF.at - FF.at || WF.i - FF.i));
      return new Set(WF.slice(0, 2).map((FF => {
        let {
          id: WF
        } = FF;
        return WF
      })))
    }(eF))),
    [LF, mW] = (0, CF.useState)(new Set),
    OF = FF => FF.models.some((WF => EF({
      keyId: FF.id,
      modelId: WF.id
    }))),
    xW = FF => {
      const WF = FF.closest(".WorldCodeAiModelGroupHeader");
      qW(null), setTimeout((() => {
        var FF;
        null === WF || void 0 === WF || null === (FF = WF.querySelector(".WorldCodeAiModelRemove")) || void 0 === FF || FF.focus()
      }))
    },
    ZF = `${WF}-model`,
    oF = (FF, WF, SF) => {
      var CF;
      return (0, hF.jsx)(Ub, {
        name: FF,
        hint: WF,
        choice: SF,
        selected: EF(SF) && !(null === SF && gW.picked && null === tW),
        radioName: ZF,
        onSelect: () => {
          QF(SF), qb.unpick()
        },
        onChosen: AF
      }, null !== (CF = null === SF || void 0 === SF ? void 0 : SF.modelId) && void 0 !== CF ? CF : "botxd")
    };
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiModelList",
    role: "radiogroup",
    "aria-labelledby": WF,
    children: [oF("Bot.xd (free)", "Bloxd's own AI.", null), (0, hF.jsx)(Ub, {
      name: rb,
      hint: null !== tW && void 0 !== tW ? tW : `Bloxd's better AI. ${gW.status?oh(gW.status):""}`.trim(),
      choice: Hb,
      selected: gW.picked && null === tW,
      radioName: ZF,
      onSelect: () => {
        var FF, WF;
        ab(null !== (FF = null === (WF = gW.status) || void 0 === WF ? void 0 : WF.provider) && void 0 !== FF ? FF : "ovh") && qb.lW()
      },
      onChosen: () => {
        (async function(FF) {
          var WF;
          if (ab(null !== (WF = null === FF || void 0 === FF ? void 0 : FF.provider) && void 0 !== WF ? WF : "ovh")) return qb.lW(), !0;
          if (jd) return !1;
          jd = !0;
          try {
            const [{
              NotificationProvider: FF
            }, {
              WorldCodeAiDeepSeekNotice: WF
            }] = await Promise.all([Promise.resolve().then((() => SF(1189))), SF.e(327).then((() => SF(58923)))]), CF = FF.showPromptPopup({
              title: "superBotXd:deepSeekTitle",
              subtitle: (0, hF.jsx)(WF, {}),
              confirmText: "superBotXd:use",
              cancelText: "general:cancel"
            });
            vd = CF.tearDownNotification;
            return !0 === await CF.getResult() && (function() {
              try {
                window.localStorage.setItem(Th, "1")
              } catch {}
            }(), qb.lW(), !0)
          } finally {
            jd = !1, vd = null
          }
        })(gW.status).then((FF => {
          FF && (null === AF || void 0 === AF || AF())
        }))
      },
      disabledWhy: tW
    }), eF.map((FF => {
      var WF, SF, CF, AF, QF;
      const gW = Ah(FF),
        tW = eF.length >= 4 && !OF(FF) && !DF.has(FF.id) && !LF.has(FF.id),
        ZF = tW ? null !== (WF = FF.models.find((WF => WF.id === FF.usedModelId))) && void 0 !== WF ? WF : Ch(FF.models) : void 0,
        YF = null !== (SF = null === (CF = VF[FF.id]) || void 0 === CF ? void 0 : CF.trim().toLowerCase()) && void 0 !== SF ? SF : "",
        MF = ZF ? [ZF] : "" === YF ? FF.models : FF.models.filter((WF => WF.name.toLowerCase().includes(YF) || EF({
          keyId: FF.id,
          modelId: WF.id
        })));
      return (0, hF.jsxs)("div", {
        className: "WorldCodeAiModelGroup",
        role: "group",
        "aria-label": gW,
        "data-key-id": FF.id,
        children: [(0, hF.jsxs)("div", {
          className: "WorldCodeAiModelGroupHeader",
          children: [TF === FF.id ? (0, hF.jsx)(wb, {
            keyName: null !== (AF = FF.name) && void 0 !== AF ? AF : "",
            placeholder: ou(FF.provider, FF.baseUrl),
            onDone: WF => {
              null !== WF && rW(FF.id, WF), aW(null)
            }
          }) : (0, hF.jsx)(Xb, {
            savedKey: FF,
            isInUse: OF(FF),
            onEdit: bW ? () => {
              bW(FF)
            } : void 0,
            onRename: uF ? () => {
              aW(FF.id)
            } : void 0
          }), PF && kW !== FF.id && (0, hF.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRefresh",
            "aria-label": `Check ${gW} for new models`,
            disabled: null === RF || void 0 === RF ? void 0 : RF.has(FF.id),
            onClick: () => {
              PF(FF)
            },
            children: null !== RF && void 0 !== RF && RF.has(FF.id) ? "Checking\u2026" : "Check for new models"
          }), dF && kW !== FF.id && (0, hF.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
            "aria-label": `Remove ${gW} key`,
            onClick: () => {
              qW(FF.id)
            },
            children: "Remove"
          }), dF && kW === FF.id && (0, hF.jsxs)("span", {
            className: "WorldCodeAiKeyConfirm",
            role: "group",
            "aria-label": `Remove ${gW} key?`,
            onKeyDown: FF => {
              "Escape" === FF.key && (FF.stopPropagation(), FF.preventDefault(), xW(FF.currentTarget))
            },
            children: ["Remove key?", (0, hF.jsx)("button", {
              className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
              "aria-label": `Yes, remove ${gW} key`,
              onClick: () => {
                qW(null), dF(FF)
              },
              children: "Yes"
            }), (0, hF.jsx)("button", {
              className: "WorldCodeAiLinkButton",
              "aria-label": `No, keep ${gW} key`,
              autoFocus: !0,
              onClick: FF => {
                xW(FF.currentTarget)
              },
              children: "No"
            })]
          })]
        }), (null === iW || void 0 === iW ? void 0 : iW.keyId) === FF.id && (0, hF.jsx)("p", {
          className: "WorldCodeAiAiSettingsNote",
          role: "status",
          children: iW.text
        }), !tW && FF.models.length > 12 && (0, hF.jsx)("input", {
          className: "WorldCodeAiAddKeyInput WorldCodeAiModelFilter",
          "aria-label": `Find a model from ${gW}`,
          placeholder: `Find a model (${FF.models.length})`,
          value: null !== (QF = VF[FF.id]) && void 0 !== QF ? QF : "",
          onKeyDown: FF => {
            FF.stopPropagation()
          },
          onChange: WF => {
            const SF = WF.target.value;
            NF((WF => ({
              ...WF,
              [FF.id]: SF
            })))
          }
        }), MF.map((WF => oF(WF.name, WF.tier ? Ju[WF.tier] : "", {
          keyId: FF.id,
          modelId: WF.id
        }))), tW && FF.models.length > 1 && (0, hF.jsxs)("button", {
          className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
          "aria-label": `Show all ${gW} models`,
          onClick: WF => {
            const SF = WF.currentTarget.closest(".WorldCodeAiModelGroup");
            mW((WF => new Set(WF).add(FF.id))), setTimeout((() => {
              var FF;
              null === SF || void 0 === SF || null === (FF = SF.querySelector("input")) || void 0 === FF || FF.focus()
            }))
          },
          children: ["Show all ", FF.models.length, " models"]
        })]
      }, FF.id)
    }))]
  })
}
let jd = !1,
  vd = null;

function Jb() {
  const {
    remember: FF,
    setRemember: WF
  } = ib();
  return (0, hF.jsxs)("label", {
    className: "WorldCodeAiRememberKeys",
    children: [(0, hF.jsx)("input", {
      type: "checkbox",
      checked: FF,
      onChange: FF => {
        WF(FF.target.checked)
      }
    }), (0, hF.jsxs)("span", {
      children: ["Remember my keys in this browser", (0, hF.jsx)("span", {
        className: "WorldCodeAiAiSettingsNote",
        children: FF ? "On: saved only in this browser, not synced, for all your keys. Not for shared computers." : "Off: you'll paste your keys again next time. Best on shared computers."
      })]
    })]
  })
}

function pb(FF) {
  let {
    allowEdits: WF,
    onAllowEditsChange: SF,
    onAddKey: AF,
    onEditKey: uF
  } = FF;
  const {
    keys: bW,
    removeKey: dF
  } = ib(), [PF, RF] = (0, CF.useState)(null), [iW, eF] = (0, CF.useState)(!1), [EF, QF] = (0, CF.useState)(!1), rW = (0, CF.useRef)(null);
  (0, CF.useEffect)((() => {
    var FF, WF;
    (PF || EF) && (null === (FF = rW.current) || void 0 === FF || FF.scrollIntoView({
      block: "nearest"
    }), null === (WF = rW.current) || void 0 === WF || WF.focus({
      preventScroll: !0
    }))
  }), [PF, EF]);
  const gW = (0, CF.useRef)(null),
    tW = () => {
      eF(!1), setTimeout((() => {
        var FF;
        null === (FF = gW.current) || void 0 === FF || FF.focus()
      }))
    },
    [TF, aW] = (0, CF.useState)(new Set),
    [kW, qW] = (0, CF.useState)(null);
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiAiSettings",
    children: [SF && (0, hF.jsxs)("div", {
      className: "WorldCodeAiAiSettingsSection",
      children: [(0, hF.jsx)(nb, {
        allow: WF,
        onChange: FF => {
          RF(null), SF(FF)
        }
      }), (0, hF.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote",
        children: WF ? "On: the AI changes this game's code right away, without asking; Undo is under each change. It can't touch other games or your account." : "Off: the AI shows each change to this game's code first, and you press Apply."
      })]
    }), (0, hF.jsxs)("div", {
      className: "WorldCodeAiAiSettingsSection",
      children: [(0, hF.jsxs)("div", {
        className: "WorldCodeAiAiSettingsHeading",
        children: [(0, hF.jsx)("h3", {
          id: "WorldCodeAiModelTitle",
          className: "WorldCodeAiAiSettingsTitle",
          children: "AI model"
        }), (0, hF.jsxs)("button", {
          className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
          onClick: AF,
          children: [(0, hF.jsx)("span", {
            "aria-hidden": "true",
            children: "+ "
          }), "Add API key"]
        })]
      }), 0 === bW.length && (0, hF.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote",
        children: "Use a stronger AI with your own key."
      }), (0, hF.jsx)(Jb, {}), bW.length > 0 && (0, hF.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote WorldCodeAiForgetAll",
        children: iW ? (0, hF.jsxs)("span", {
          className: "WorldCodeAiKeyConfirm",
          role: "group",
          "aria-label": "Forget all keys?",
          onKeyDown: FF => {
            "Escape" === FF.key && (FF.stopPropagation(), FF.preventDefault(), tW())
          },
          children: [1 === bW.length ? "Forget your key" : `Forget all ${bW.length} keys`, " in this browser?", (0, hF.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
            onClick: () => {
              Rh.removeAll(), eF(!1), RF(null), QF(!0)
            },
            children: "Yes"
          }), (0, hF.jsx)("button", {
            className: "WorldCodeAiLinkButton",
            autoFocus: !0,
            onClick: tW,
            children: "No"
          })]
        }) : (0, hF.jsx)("button", {
          ref: gW,
          className: "WorldCodeAiKeyLearnMore",
          onClick: () => {
            eF(!0)
          },
          children: "Forget all keys"
        })
      }), 0 === bW.length && EF && (0, hF.jsx)("p", {
        ref: rW,
        className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
        tabIndex: -1,
        children: "All keys forgotten in this browser. Bot.xd answers now. To stop a key working everywhere, delete it on its company's website."
      }), PF && (0, hF.jsxs)("p", {
        ref: rW,
        className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
        tabIndex: -1,
        children: [PF.name, " removed.", PF.wasInUse && " Bot.xd answers now.", PF.keyPage && (0, hF.jsxs)(hF.Fragment, {
          children: [" ", "To stop it working everywhere, delete it on", " ", (0, hF.jsxs)("a", {
            href: PF.keyPage,
            target: "_blank",
            rel: "noreferrer noopener",
            children: [PF.label, "'s website"]
          }), "."]
        }), " ", (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiModelUndo",
          onClick: () => {
            PF.undo(), RF(null)
          },
          children: "Undo"
        })]
      }), (0, hF.jsx)(Bb, {
        labelledBy: "WorldCodeAiModelTitle",
        onPicked: () => {
          RF(null), qW(null)
        },
        canRename: !0,
        onEdit: uF,
        refreshingIds: TF,
        keyNote: kW,
        onRefresh: FF => {
          (async FF => {
            const WF = ou(FF.provider, FF.baseUrl, !0);
            aW((WF => new Set(WF).add(FF.id))), qW(null);
            try {
              const SF = await eh({
                provider: FF.provider,
                key: FF.key,
                baseUrl: FF.baseUrl
              });
              0 === SF.length ? qW({
                keyId: FF.id,
                text: `${WF} listed no models, so your models stay as they were.`
              }) : Rh.refreshModels(FF.id, SF, {
                key: FF.key,
                baseUrl: FF.baseUrl
              }) && qW({
                keyId: FF.id,
                text: `${WF}'s models are up to date.`
              })
            } catch (SF) {
              qW({
                keyId: FF.id,
                text: ch(SF instanceof Yu ? SF.problem : "failed", FF.provider)
              })
            }
            aW((WF => {
              const SF = new Set(WF);
              return SF.delete(FF.id), SF
            }))
          })(FF)
        },
        eWF: FF => {
          var WF;
          const SF = (null === (WF = Rh.activeKey()) || void 0 === WF ? void 0 : WF.id) === FF.id,
            CF = dF(FF.id);
          RF({
            name: Ah(FF, !0),
            label: ou(FF.provider, FF.baseUrl, !0),
            keyPage: Du[FF.provider].keyPage,
            wasInUse: SF,
            undo: CF
          })
        }
      })]
    })]
  })
}
const lb = ["anthropic", "openai", "gemini", "openrouter"];

function Fd(FF) {
  let {
    provider: WF,
    children: SF
  } = FF;
  return (0, hF.jsx)("a", {
    href: Du[WF].keyPage,
    target: "_blank",
    rel: "noreferrer noopener",
    children: SF
  })
}

function Wd() {
  return (0, hF.jsxs)(hF.Fragment, {
    children: [lb.map(((FF, WF) => {
      const SF = 0 === WF ? "" : WF === lb.length - 1 ? " or " : ", ";
      return (0, hF.jsxs)("span", {
        children: [SF, (0, hF.jsx)(Fd, {
          provider: FF,
          children: Du[FF].shortName
        })]
      }, FF)
    })), "'s website"]
  })
}

function Sd(FF) {
  var WF;
  let {
    provider: SF
  } = FF;
  const [AF, uF] = (0, CF.useState)(!1), bW = (0, CF.useRef)(null);
  if ((0, CF.useEffect)((() => {
      if (AF) {
        var FF, WF, SF;
        const CF = null === (FF = bW.current) || void 0 === FF || null === (WF = FF.closest("form")) || void 0 === WF ? void 0 : WF.querySelector(".WorldCodeAiAddKeyActions");
        null === (SF = null !== CF && void 0 !== CF ? CF : bW.current) || void 0 === SF || SF.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        })
      }
    }), [AF]), "custom" === SF) return (0, hF.jsx)("div", {
    className: "WorldCodeAiKeyExplainer",
    children: (0, hF.jsx)("p", {
      className: "WorldCodeAiAiSettingsNote",
      children: "Paste the key for that server, or leave it empty if it doesn't need one. It goes only to that server, never to Bloxd."
    })
  });
  const dF = SF ? Du[SF] : null;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiKeyExplainer",
    children: [(0, hF.jsxs)("ul", {
      ref: bW,
      id: "WorldCodeAiKeyExplainerLines",
      className: "WorldCodeAiKeyExplainerLines",
      children: [(0, hF.jsx)("li", {
        children: dF ? `An API key works like a password for ${dF.shortName}'s AI (it isn't your ${dF.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
      }), (0, hF.jsxs)("li", {
        children: ["You make it on ", dF ? `${dF.shortName}'s website` : (0, hF.jsx)(Wd, {}), ", and see how much you've used or delete it there."]
      }), AF && (0, hF.jsxs)("li", {
        children: ["Your key stays in this browser and only goes to ", null !== (WF = null === dF || void 0 === dF ? void 0 : dF.shortName) && void 0 !== WF ? WF : "that company", ", never to Bloxd."]
      }), (0, hF.jsx)("li", {
        className: "WorldCodeAiKeyExplainerMore",
        children: (0, hF.jsx)("button", {
          type: "button",
          className: "WorldCodeAiKeyLearnMore",
          "aria-expanded": AF,
          "aria-controls": "WorldCodeAiKeyExplainerLines",
          onClick: () => {
            uF(!AF)
          },
          children: AF ? "Less about keys" : "More about keys"
        })
      })]
    }), dF && (0, hF.jsxs)("a", {
      className: "WorldCodeAiKeyPageLink",
      href: dF.keyPage,
      target: "_blank",
      rel: "noreferrer noopener",
      children: ["Get a key on ", dF.shortName, "'s website ", (0, hF.jsx)("span", {
        "aria-hidden": "true",
        children: "\u2197"
      })]
    })]
  })
}

function Cd() {
  const [FF, WF] = (0, CF.useState)(!1);
  return (0, hF.jsxs)("span", {
    className: "WorldCodeAiAiSettingsNote",
    children: ["Any server that works like OpenAI's, such as LM Studio or Ollama.", " ", (0, hF.jsx)("button", {
      type: "button",
      className: "WorldCodeAiKeyLearnMore",
      "aria-expanded": FF,
      onClick: () => {
        WF(!FF)
      },
      children: FF ? "Hide tips" : "Server tips"
    }), FF && (0, hF.jsx)("span", {
      className: "WorldCodeAiServerTips",
      children: "Use https://, or http:// for one on this computer, like http://localhost:1234/v1. It must allow web pages to use it: in LM Studio turn on CORS; for Ollama see its help."
    })]
  })
}

function Ad(FF) {
  FF.stopPropagation()
}

function ud(FF) {
  var WF, SF, AF, uF, bW;
  let {
    editing: dF,
    onAdded: PF,
    onOpenSettings: RF
  } = FF;
  const {
    remember: iW
  } = ib(), [eF, EF] = (0, CF.useState)(null !== (WF = null === dF || void 0 === dF ? void 0 : dF.provider) && void 0 !== WF ? WF : null), [QF, rW] = (0, CF.useState)(!!dF), [gW, tW] = (0, CF.useState)(""), TF = null !== (SF = null === dF || void 0 === dF ? void 0 : dF.key) && void 0 !== SF ? SF : "", [aW, kW] = (0, CF.useState)(!1), [qW, VF] = (0, CF.useState)(null !== (AF = null === dF || void 0 === dF ? void 0 : dF.baseUrl) && void 0 !== AF ? AF : ""), NF = FF => {
    var WF, SF;
    return FF === (null === dF || void 0 === dF ? void 0 : dF.provider) && ("custom" !== FF || (null !== (WF = Zu(qW)) && void 0 !== WF ? WF : "") === (null !== (SF = dF.baseUrl) && void 0 !== SF ? SF : ""))
  }, DF = "" !== TF && NF(eF), LF = function(FF) {
    let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ou(gW);
    return "" === WF && "" !== TF && NF(FF) ? TF : WF
  }, [mW, OF] = (0, CF.useState)(""), [xW, ZF] = (0, CF.useState)(null !== (uF = null === dF || void 0 === dF ? void 0 : dF.name) && void 0 !== uF ? uF : ""), [oF, YF] = (0, CF.useState)(!1), [MF, cW] = (0, CF.useState)(null), [GF, zW] = (0, CF.useState)(""), [IF, fF] = (0, CF.useState)(!1), [yW, sF] = (0, CF.useState)(null), [nF, HF] = (0, CF.useState)(null), KF = "custom" === eF && "" === LF(eF), wF = (0, CF.useRef)(null), XF = (0, CF.useRef)(null), UF = (0, CF.useRef)(null);
  (0, CF.useEffect)((() => {
    var FF, WF;
    MF && (null === (FF = XF.current) || void 0 === FF || FF.scrollIntoView({
      block: "start"
    }), null === (WF = UF.current) || void 0 === WF || WF.scrollIntoView({
      block: "nearest"
    }))
  }), [MF]), (0, CF.useEffect)((() => () => {
    var FF;
    null === (FF = wF.current) || void 0 === FF || FF.abort()
  }), []), (0, CF.useEffect)((() => {
    var FF;
    yW && (null === (FF = UF.current) || void 0 === FF || FF.scrollIntoView({
      block: "nearest"
    }))
  }), [yW]);
  const BF = () => {
      var FF;
      null === (FF = wF.current) || void 0 === FF || FF.abort(), fF(!1), cW(null), sF(null), HF(null)
    },
    jW = null === MF || void 0 === MF ? void 0 : MF.find((FF => FF.id === GF));
  return (0, hF.jsxs)("form", {
    className: "WorldCodeAiAddKey",
    onSubmit: FF => {
      FF.preventDefault(), MF ? (() => {
        var FF;
        if (!eF || !MF) return;
        const WF = Rh.addKey({
          provider: eF,
          key: LF(eF),
          baseUrl: "custom" === eF && null !== (FF = Zu(qW)) && void 0 !== FF ? FF : void 0,
          models: MF
        }, GF, null === dF || void 0 === dF ? void 0 : dF.id);
        ("" !== xW.trim() || dF) && Rh.renameKey(WF, xW), PF()
      })() : (async () => {
        const WF = Ou(gW);
        tW(WF), HF(null);
        const SF = null !== eF && void 0 !== eF ? eF : xh(WF),
          CF = LF(SF, WF);
        if ("" === CF && "custom" !== SF) return void sF("Paste your key first.");
        if (!SF) return void sF("Pick the company your key is from.");
        const AF = "custom" === SF ? Zu(qW) : null;
        if ("custom" === SF && null === AF) return void sF("That address doesn't look right. It should start with https://");
        if (oF && "" === mW.trim()) return void sF("Type the name of the model to use.");
        EF(SF), fF(!0), sF(null);
        const uF = new AbortController;
        wF.current = uF;
        try {
          var hF, bW;
          const FF = await eh({
            provider: SF,
            key: CF,
            baseUrl: null !== AF && void 0 !== AF ? AF : void 0,
            modelName: oF ? mW : void 0
          }, uF.signal);
          if (fF(!1), 0 === FF.length) return YF(!0), void sF("custom" === SF ? "This address doesn't list its models. Type the name of the model to use." : "Type the name of the model to use.");
          cW(FF);
          const WF = Rh.getState().selected,
            PF = dF && (null === WF || void 0 === WF ? void 0 : WF.keyId) === dF.id ? FF.find((FF => FF.id === WF.modelId)) : void 0;
          zW(null !== (hF = null === (bW = null !== PF && void 0 !== PF ? PF : Ch(FF)) || void 0 === bW ? void 0 : bW.id) && void 0 !== hF ? hF : "")
        } catch (FF) {
          if (uF.signal.aborted) return;
          fF(!1);
          const AF = FF instanceof Yu ? FF.problem : "failed";
          if (HF(FF instanceof Yu && FF.detail ? Mu(FF.detail, CF) : null), "badKey" === AF && "" === CF) return void sF("This address needs a key.");
          const hF = "badKey" !== AF || QF ? "" : ` If it isn't from ${Du[SF].shortName}, pick the company it's from.`;
          sF(`${ch(AF,SF)}${hF}`)
        }
      })()
    },
    children: [(0, hF.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, hF.jsx)("span", {
        children: "Company"
      }), (0, hF.jsxs)("select", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyCompany",
        value: null !== eF && void 0 !== eF ? eF : "",
        onChange: FF => {
          EF(FF.target.value), rW(!0), YF(!1), BF()
        },
        onKeyDown: Ad,
        children: [null === eF && (0, hF.jsx)("option", {
          value: "",
          disabled: !0,
          children: "Pick one, or paste your key below"
        }), Lu.map((FF => (0, hF.jsx)("option", {
          value: FF,
          children: Du[FF].name
        }, FF)))]
      })]
    }), "custom" === eF && (0, hF.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, hF.jsx)("span", {
        children: "Server address"
      }), (0, hF.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyEndpoint",
        value: qW,
        placeholder: "https://ai.example.com/v1",
        autoComplete: "off",
        spellCheck: !1,
        onChange: FF => {
          VF(FF.target.value), YF(!1), BF()
        },
        onKeyDown: Ad
      }), (!dF || qW !== (null !== (bW = dF.baseUrl) && void 0 !== bW ? bW : "")) && (0, hF.jsx)(Cd, {})]
    }), (0, hF.jsxs)("div", {
      className: "WorldCodeAiAddKeyField",
      children: [DF && (0, hF.jsxs)("span", {
        className: "WorldCodeAiAddKeySavedKey",
        children: ["Key ends ", (0, hF.jsxs)("code", {
          children: ["\u2026", TF.slice(-4)]
        })]
      }), (0, hF.jsx)("label", {
        htmlFor: "WorldCodeAiAddKeyKey",
        children: DF ? "Paste a new key to replace it (optional)" : "Your key"
      }), (0, hF.jsxs)("span", {
        className: "WorldCodeAiAddKeyPaste",
        children: [(0, hF.jsx)("input", {
          id: "WorldCodeAiAddKeyKey",
          className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyKey",
          type: aW ? "text" : "password",
          value: gW,
          placeholder: DF ? "Leave empty to keep it" : "custom" === eF ? "Paste the key, or leave empty" : "Paste the key here",
          autoComplete: "off",
          spellCheck: !1,
          onChange: FF => {
            tW(FF.target.value), QF || EF(xh(Ou(FF.target.value))), BF()
          },
          onKeyDown: Ad
        }), (0, hF.jsx)("button", {
          type: "button",
          className: "WorldCodeAiSecondaryButton",
          onClick: () => {
            kW(!aW)
          },
          children: aW ? "Hide" : "Show"
        })]
      }), (0, hF.jsx)(Sd, {
        provider: eF
      })]
    }), !dF && (0, hF.jsxs)("p", {
      className: "WorldCodeAiAiSettingsNote WorldCodeAiAddKeyRemember",
      children: [iW ? "Your keys are remembered in this browser. Change it in " : "Your keys are kept until you close this tab. To remember them, see ", (0, hF.jsx)("button", {
        type: "button",
        className: "WorldCodeAiKeyLearnMore",
        onClick: RF,
        children: "AI settings"
      }), "."]
    }), oF && (0, hF.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, hF.jsx)("span", {
        children: "Model name"
      }), (0, hF.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyModel",
        value: mW,
        placeholder: "llama-3.3-70b-versatile",
        autoComplete: "off",
        spellCheck: !1,
        onChange: FF => {
          OF(FF.target.value), BF()
        },
        onKeyDown: Ad
      })]
    }), MF && (0, hF.jsxs)("div", {
      ref: XF,
      className: "WorldCodeAiModelList WorldCodeAiAddKeyModels",
      role: "radiogroup",
      "aria-labelledby": "WorldCodeAiAddKeyModelsTitle",
      children: [(0, hF.jsxs)("p", {
        id: "WorldCodeAiAddKeyModelsTitle",
        className: "WorldCodeAiAddKeyWorks",
        children: ["" === LF(eF) ? "It works." : "Your key works.", " Pick a model:"]
      }), MF.map((FF => (0, hF.jsx)(Ub, {
        name: FF.name,
        hint: FF.tier ? Ju[FF.tier] : "",
        choice: {
          keyId: null !== eF && void 0 !== eF ? eF : "",
          modelId: FF.id
        },
        selected: FF.id === GF,
        radioName: "WorldCodeAiAddKeyModelPick",
        onSelect: () => {
          zW(FF.id)
        }
      }, FF.id))), (0, hF.jsx)("button", {
        type: "button",
        className: "WorldCodeAiKeyLearnMore",
        onClick: () => {
          YF(!0), BF()
        },
        children: "Type a model name yourself"
      })]
    }), MF && (0, hF.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, hF.jsx)("span", {
        children: "Name it (optional)"
      }), (0, hF.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyName",
        value: xW,
        maxLength: 30,
        placeholder: eF && "custom" !== eF ? `Like My ${Du[eF].shortName}` : "Like Home server",
        autoComplete: "off",
        onChange: FF => {
          ZF(FF.target.value)
        },
        onKeyDown: Ad
      })]
    }), (0, hF.jsxs)("div", {
      ref: UF,
      className: "WorldCodeAiAddKeyActions",
      children: [yW && (0, hF.jsx)("p", {
        className: "WorldCodeAiAddKeyError",
        role: "alert",
        children: yW
      }), yW && nF && (0, hF.jsx)(Yb, {
        detail: nF,
        onOpen: () => {
          var FF, WF;
          null === (FF = UF.current) || void 0 === FF || null === (WF = FF.querySelector(".WorldCodeAiAddKeySave")) || void 0 === WF || WF.scrollIntoView({
            block: "nearest"
          })
        }
      }), (0, hF.jsx)("button", {
        type: "submit",
        className: "WorldCodeAiPrimaryButton WorldCodeAiAddKeySave",
        disabled: IF,
        children: IF ? KF ? "Testing the connection\u2026" : "Testing your key\u2026" : jW ? `Save and use ${jW.name}` : KF ? "Test connection" : "Test key"
      })]
    })]
  })
}
var hd = SF(1046),
  bP = SF(35361),
  dd = SF(35358);

function Pd(FF) {
  let {
    step: WF,
    placement: SF = "left",
    onPrevious: CF,
    children: AF
  } = FF;
  const {
    t: uF
  } = (0, hd.B)();
  return (0, hF.jsx)(dd.e, {
    tutorial: "aiHelperOverview",
    step: WF,
    text: uF(`codeEditorAiTutorial:${WF}`),
    placement: SF,
    onPrevious: CF,
    children: AF
  })
}

function Rd(FF, WF) {
  if (FF.scrollHeight <= FF.clientHeight + 1) iP(FF);
  else {
    if (!Kb(FF, WF)) {
      const SF = WF.getBoundingClientRect().bottom - FF.getBoundingClientRect().bottom;
      SF > 0 && (FF.scrollTop += SF),
        function(FF, WF) {
          const SF = FF.getBoundingClientRect(),
            CF = Math.max(SF.top, ...Array.from(FF.querySelectorAll(".WorldCodeAiModelGroupHeader"), (FF => {
              const WF = FF.getBoundingClientRect();
              return WF.top <= SF.top + 1 ? WF.bottom : SF.top
            })));
          if (CF <= SF.top) return;
          const AF = WF.closest(".WorldCodeAiModelGroup"),
            uF = AF && parseFloat(getComputedStyle(AF).rowGap) || 6,
            hF = Array.from(FF.querySelectorAll(".WorldCodeAiModelRow, .WorldCodeAiModelUnfold")).find((FF => {
              const WF = FF.getBoundingClientRect();
              return WF.top < CF + uF - 1 && WF.bottom > CF - uF
            }));
          if (!hF || hF === WF) return;
          const bW = FF.scrollTop;
          FF.scrollTop -= CF + uF - hF.getBoundingClientRect().top, WF.getBoundingClientRect().bottom > SF.bottom && (FF.scrollTop = bW, FF.scrollTop += Math.max(0, hF.getBoundingClientRect().bottom - CF))
        }(FF, WF)
    }
    iP(FF)
  }
}

function iP(FF) {
  const WF = FF.getBoundingClientRect().top;
  for (const SF of Array.from(FF.querySelectorAll(".WorldCodeAiModelGroup"))) {
    const FF = SF.querySelector(".WorldCodeAiModelGroupHeader");
    if (!FF) continue;
    const CF = WF + FF.offsetHeight,
      AF = Array.from(SF.querySelectorAll(".WorldCodeAiModelRow")).some((FF => FF.getBoundingClientRect().bottom > CF + 2));
    FF.classList.toggle("Unpinned", !AF)
  }
}

function ed(FF) {
  const WF = Ah(FF, !0);
  return FF.model.name.toLowerCase().startsWith(WF.toLowerCase()) ? FF.model.name : `${WF} \xb7 ${FF.model.name}`
}

function Ed(FF) {
  let {
    onAddKey: WF,
    editsOn: SF,
    freeOnce: AF = !1,
    onFreeOnce: bW,
    children: dF
  } = FF;
  const {
    active: PF,
    select: RF
  } = ib(), iW = xb(Vh());
  (0, CF.useEffect)((() => {
    qb.refresh(), sh()
  }), []);
  const [eF, EF] = (0, CF.useState)(!1), QF = (0, CF.useRef)(null), rW = (0, CF.useRef)(null), gW = (0, CF.useRef)(null), tW = () => {
    var FF;
    EF(!1), null === (FF = rW.current) || void 0 === FF || FF.focus()
  };
  (0, CF.useEffect)((() => {
    var FF, WF;
    if (!eF) return;
    const SF = null === (FF = gW.current) || void 0 === FF ? void 0 : FF.querySelector("input:checked");
    null === SF || void 0 === SF || SF.focus({
      preventScroll: !0
    });
    const CF = null === (WF = gW.current) || void 0 === WF ? void 0 : WF.querySelector(".WorldCodeAiModelMenuList"),
      AF = null === SF || void 0 === SF ? void 0 : SF.closest(".WorldCodeAiModelRow");
    CF && AF && Rd(CF, AF);
    const uF = () => {
      CF && iP(CF)
    };
    null === CF || void 0 === CF || CF.addEventListener("scroll", uF, {
      passive: !0
    });
    const hF = FF => {
        var WF;
        null !== (WF = QF.current) && void 0 !== WF && WF.contains(FF.target) || EF(!1)
      },
      bW = FF => {
        "Escape" === FF.key && (FF.stopPropagation(), FF.preventDefault(), vd && (vd(), 1) || tW())
      };
    return document.addEventListener("pointerdown", hF), document.addEventListener("keydown", bW, !0), () => {
      null === CF || void 0 === CF || CF.removeEventListener("scroll", uF), document.removeEventListener("pointerdown", hF), document.removeEventListener("keydown", bW, !0)
    }
  }), [eF]);
  const TF = AF && null !== PF,
    aW = TF ? "Bot.xd (free) \xb7 once" : PF ? ed(PF) : iW ? rb : "Bot.xd (free)";
  return (0, hF.jsxs)("div", {
    ref: QF,
    className: "WorldCodeAiModelChipRow",
    onBlur: FF => {
      var WF;
      !eF || !FF.relatedTarget || null !== (WF = QF.current) && void 0 !== WF && WF.contains(FF.relatedTarget) || EF(!1)
    },
    children: [(0, hF.jsxs)("button", {
      ref: rW,
      className: uF()("WorldCodeAiModelChip", eF && "Open"),
      "aria-expanded": eF,
      "aria-label": `AI model: ${aW}`,
      title: "Change AI model",
      onClick: () => {
        EF(!eF)
      },
      children: [PF && !TF && "" !== PF.key && (0, hF.jsx)(ob, {}), (0, hF.jsx)("span", {
        className: "WorldCodeAiModelChipName",
        children: aW
      }), (0, hF.jsx)("span", {
        className: "WorldCodeAiModelChipCaret",
        "aria-hidden": "true",
        children: "\u25be"
      })]
    }), null !== SF && (0, hF.jsx)(Pd, {
      step: "aiEdits",
      placement: "top",
      children: (0, hF.jsx)("span", {
        className: uF()("WorldCodeAiEditsTag", !SF && "WorldCodeAiEditsTag-off"),
        title: `Allow AI to make edits to my code is ${SF?"on":"off"}, in AI settings`,
        children: SF ? "Edits on" : "Edits off"
      })
    }), (0, hF.jsx)("span", {
      className: "WorldCodeAiModelChipStatus",
      children: dF
    }), eF && (0, hF.jsxs)("div", {
      ref: gW,
      className: "WorldCodeAiModelMenu",
      role: "dialog",
      "aria-labelledby": "WorldCodeAiModelMenuTitle",
      children: [(0, hF.jsx)("h3", {
        id: "WorldCodeAiModelMenuTitle",
        className: "WorldCodeAiAiSettingsTitle",
        children: "AI model"
      }), (0, hF.jsx)("div", {
        className: "WorldCodeAiModelMenuList",
        children: (0, hF.jsx)(Bb, {
          labelledBy: "WorldCodeAiModelMenuTitle",
          onPicked: () => {
            null === bW || void 0 === bW || bW(!1), tW()
          }
        })
      }), (0, hF.jsxs)("div", {
        className: "WorldCodeAiModelMenuActions",
        children: [(0, hF.jsxs)("button", {
          className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
          onClick: () => {
            EF(!1), WF()
          },
          children: [(0, hF.jsx)("span", {
            "aria-hidden": "true",
            children: "+ "
          }), "Add API key"]
        }), PF && (0, hF.jsxs)("span", {
          className: "WorldCodeAiModelMenuBotxd",
          children: [bW && (TF ? (0, hF.jsxs)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              bW(!1), tW()
            },
            children: ["Back to ", PF.model.name]
          }) : (0, hF.jsx)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              bW(!0), tW()
            },
            children: "Ask Bot.xd once"
          })), (0, hF.jsx)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              RF(null), tW()
            },
            children: "Use Bot.xd from now on"
          })]
        })]
      })]
    })]
  })
}
var Qd = SF(33);
const rP = "kv";

function gP(FF) {
  return new Promise(((WF, SF) => {
    FF.oncomplete = () => {
      WF()
    }, FF.onerror = () => {
      var WF;
      SF(null !== (WF = FF.error) && void 0 !== WF ? WF : new Error("IndexedDB transaction failed"))
    }, FF.onabort = () => {
      var WF;
      SF(null !== (WF = FF.error) && void 0 !== WF ? WF : new Error("IndexedDB transaction aborted"))
    }
  }))
}
var tP = SF(35380);
const Td = (0, CF.memo)((function(FF) {
  let {
    change: WF,
    marked: SF
  } = FF;
  const AF = (0, CF.useMemo)((() => MC(WF.before, WF.after)), [WF]),
    bW = [];
  for (let CF = 0; CF < AF.length; CF++) {
    if ("same" !== AF[CF].kind) {
      bW.push(AF[CF]);
      continue
    }
    let FF = CF;
    for (; FF + 1 < AF.length && "same" === AF[FF + 1].kind;) FF++;
    const WF = AF.slice(CF, FF + 1),
      SF = 0 === CF ? 0 : 2,
      uF = FF === AF.length - 1 ? 0 : 2;
    WF.length > SF + uF + 1 ? bW.push(...WF.slice(0, SF), {
      kind: "fold",
      count: WF.length - SF - uF
    }, ...WF.slice(WF.length - uF)) : bW.push(...WF), CF = FF
  }
  return (0, hF.jsx)("pre", {
    className: "WorldCodeAiDiff",
    children: bW.map(((FF, WF) => {
      if ("fold" === FF.kind) return (0, hF.jsxs)("div", {
        className: "WorldCodeAiDiffFold",
        children: ["\u22ef ", FF.count, " unchanged lines"]
      }, WF);
      const CF = "added" === FF.kind ? function(FF, WF) {
          if (WF) return FF.includes(`"${WF}"`) ? `"${WF}"` : FF.includes(WF) ? WF : void 0
        }(FF.text, SF) : void 0,
        AF = CF ? FF.text.indexOf(CF) : -1;
      return (0, hF.jsxs)("div", {
        className: uF()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${FF.kind}`, CF && "WorldCodeAiDiff-marked"),
        children: [(0, hF.jsx)("span", {
          className: "WorldCodeAiDiffMark",
          children: "added" === FF.kind ? "+" : "removed" === FF.kind ? "\u2212" : " "
        }), (0, hF.jsx)("span", {
          className: "WorldCodeAiDiffText",
          children: CF ? (0, hF.jsxs)(hF.Fragment, {
            children: [FF.text.slice(0, AF), (0, hF.jsx)("mark", {
              children: CF
            }), FF.text.slice(AF + CF.length)]
          }) : FF.text || " "
        })]
      }, WF)
    }))
  })
}));

function aP(FF) {
  var WF, SF;
  if ("undefined" === typeof BroadcastChannel) return;
  const CF = new BroadcastChannel(FF);
  return null === (WF = (SF = CF).unref) || void 0 === WF || WF.call(SF), {
    post: FF => {
      CF.postMessage(FF)
    },
    listen: FF => {
      const WF = WF => {
        "string" === typeof WF.data && FF(WF.data)
      };
      return CF.addEventListener("message", WF), () => {
        CF.removeEventListener("message", WF)
      }
    }
  }
}

function kP(FF) {
  return Array.isArray(FF) && FF.every((FF => {
    if ("object" !== typeof FF || null === FF || !("id" in FF) || !("at" in FF) || !("label" in FF) || !("files" in FF)) return !1;
    const WF = FF.files;
    return "object" === typeof WF && null !== WF && Object.values(WF).every((FF => "string" === typeof FF))
  }))
}

function qP(FF, WF) {
  return WF ? function(FF, WF) {
    if (!WF) return [...FF];
    const SF = new Map;
    for (const CF of [...WF, ...FF]) SF.set(CF.id, CF);
    return [...SF.values()].sort(((FF, WF) => FF.at - WF.at || FF.id - WF.id)).slice(-30)
  }(WF, FF) : [...FF]
}

function Vd(FF, WF) {
  let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const CF = new Date(FF).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      ...SF ? {
        second: "2-digit"
      } : {}
    }).toLowerCase(),
    AF = FF => new Date(FF).toDateString();
  return AF(FF) === AF(WF) ? CF : AF(FF) === AF(WF - 864e5) ? `yesterday ${CF}` : function(FF, WF) {
    const SF = Math.floor((WF - FF) / 6e4);
    if (SF < 1) return "just now";
    if (SF < 60) return `${SF} min ago`;
    const CF = Math.floor(SF / 60);
    if (CF < 24) return `${CF} h ago`;
    const AF = Math.floor(CF / 24);
    return 1 === AF ? "1 day ago" : `${AF} days ago`
  }(FF, WF)
}

function Nd(FF, WF) {
  return [...new Set([...Object.keys(WF), ...Object.keys(FF.files)])].flatMap((SF => {
    var CF, AF;
    const uF = null !== (CF = FF.files[SF]) && void 0 !== CF ? CF : "";
    return (null !== (AF = WF[SF]) && void 0 !== AF ? AF : "") === uF ? [] : [{
      path: SF,
      text: uF
    }]
  }))
}

function Dd(FF) {
  let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120;
  if (FF.length <= WF) return null;
  const SF = FF.slice(0, WF),
    CF = SF.lastIndexOf(" ");
  return `${(CF>WF/2?SF.slice(0,CF):SF).replace(/[\s,;:.]+$/,"")}\u2026`
}

function Ld(FF) {
  let {
    snapshot: WF,
    files: SF,
    now: AF,
    withSeconds: bW,
    onRestore: dF
  } = FF;
  const [PF, RF] = (0, CF.useState)(!1), [iW, eF] = (0, CF.useState)(!1), EF = WF.did ? `Before: ${WF.did}` : WF.label, QF = Dd(EF), rW = WF.did && WF.label.startsWith('Before "') ? WF.label.slice(7) : null, gW = null === rW ? null : Dd(rW, 50), tW = null !== gW && null !== rW && void 0 !== rW && rW.startsWith('"') ? `${gW}"` : gW, TF = (0, CF.useRef)(null);
  (0, CF.useEffect)((() => {
    const FF = TF.current,
      WF = null === FF || void 0 === FF ? void 0 : FF.closest(".WorldCodeAiMessages");
    if (!PF || !FF || !WF) return;
    const SF = WF.getBoundingClientRect(),
      CF = FF.getBoundingClientRect(),
      AF = CF.bottom - (SF.bottom - 28),
      uF = CF.top - (SF.top + 16);
    AF > 0 && WF.scrollBy({
      top: Math.min(AF, uF),
      behavior: "smooth"
    })
  }), [PF]);
  const aW = (0, CF.useRef)(null),
    [kW, qW] = (0, CF.useState)(!1),
    VF = (0, CF.useCallback)((() => {
      const FF = aW.current;
      qW(null !== FF && FF.scrollTop + FF.clientHeight >= FF.scrollHeight - 24)
    }), []);
  (0, CF.useEffect)((() => {
    PF && VF()
  }), [PF, VF]);
  const NF = (0, CF.useMemo)((() => [...new Set([...Object.keys(WF.files), ...Object.keys(SF)])].flatMap((FF => {
    var CF, AF;
    const uF = null !== (CF = WF.files[FF]) && void 0 !== CF ? CF : "",
      hF = null !== (AF = SF[FF]) && void 0 !== AF ? AF : "";
    return uF === hF ? [] : [{
      path: FF,
      before: uF,
      after: hF
    }]
  }))), [WF, SF]);
  return (0, hF.jsxs)("li", {
    ref: TF,
    className: "WorldCodeAiSnapshot",
    children: [(0, hF.jsxs)("div", {
      className: "WorldCodeAiSnapshotRow",
      children: [(0, hF.jsxs)("span", {
        className: "WorldCodeAiSnapshotLabel",
        children: [iW || !QF ? EF : QF, (QF || tW) && (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiSnapshotMore",
          "aria-expanded": iW,
          onClick: () => {
            eF(!iW)
          },
          children: iW ? "less" : "more"
        }), (0, hF.jsxs)("span", {
          className: "WorldCodeAiSnapshotAge",
          children: [" \xb7 ", Vd(WF.at, AF, bW)]
        }), null !== rW && (0, hF.jsxs)("span", {
          className: "WorldCodeAiSnapshotAsked",
          children: ["You asked: ", iW || !tW ? rW : tW]
        })]
      }), NF.length > 0 && (0, hF.jsx)("button", {
        className: "WorldCodeAiLinkButton",
        onClick: () => {
          RF(!PF)
        },
        children: PF ? "Hide" : "Compare"
      }), NF.length > 0 && dF && (0, hF.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        onClick: dF,
        children: "Go back to this code"
      }), 0 === NF.length && (0, hF.jsx)("span", {
        className: "WorldCodeAiSnapshotNow",
        children: "Same as your code now"
      })]
    }), PF && (0, hF.jsxs)("div", {
      className: "WorldCodeAiChanges",
      children: [(0, hF.jsx)("p", {
        className: "WorldCodeAiSnapshotCompareNote",
        children: "What changed since then:"
      }), (0, hF.jsx)("div", {
        ref: aW,
        className: uF()("WorldCodeAiSnapshotCompare", kW && "WorldCodeAiSnapshotCompare-end"),
        onScroll: VF,
        children: NF.map((FF => (0, hF.jsxs)("div", {
          className: "WorldCodeAiChange",
          children: [(0, hF.jsx)("div", {
            className: "WorldCodeAiChangeHeader",
            children: (0, hF.jsx)("span", {
              className: "WorldCodeAiChangePath",
              children: FF.path
            })
          }), (0, hF.jsx)(Td, {
            change: FF
          })]
        }, FF.path)))
      })]
    })]
  })
}

function mP(FF) {
  let {
    snapshots: WF,
    files: SF,
    now: CF,
    onRestore: AF
  } = FF;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiHistory",
    children: [(0, hF.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, hF.jsx)("span", {
        children: "Your code before each change"
      })
    }), 0 === WF.length ? (0, hF.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Nothing here yet. Each time a change goes into your code, your code from before it is kept here."
    }) : (0, hF.jsx)("ul", {
      className: "WorldCodeAiSnapshots",
      children: [...WF].reverse().map((FF => {
        const uF = WF.some((WF => WF.id !== FF.id && Vd(WF.at, CF) === Vd(FF.at, CF)));
        return (0, hF.jsx)(Ld, {
          snapshot: FF,
          files: SF,
          now: CF,
          withSeconds: uF,
          onRestore: AF && (() => {
            AF(FF)
          })
        }, FF.id)
      }))
    })]
  })
}

function Od(FF) {
  let {
    notes: WF,
    outline: SF,
    EL: AF,
    onDelete: uF
  } = FF;
  const [bW, dF] = (0, CF.useState)(""), [PF, RF] = (0, CF.useState)(null), [iW, eF] = (0, CF.useState)(!1), EF = WF.length >= 8, QF = SF.callbacks.length + SF.commands.length + SF.functions.length > 0;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiHistory WorldCodeAiAbout",
    children: [(0, hF.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, hF.jsx)("span", {
        children: "AI notes"
      })
    }), (0, hF.jsx)("p", {
      className: "WorldCodeAiAboutNote",
      children: "The AI reads these notes with every request, so it remembers what your game is."
    }), 0 === WF.length && (0, hF.jsx)("p", {
      className: "WorldCodeAiHint",
      children: 'No notes yet. Add one, like "Two teams, red and blue, race to the flag".'
    }), (0, hF.jsx)("ul", {
      className: "WorldCodeAiAboutList",
      children: WF.map((FF => (0, hF.jsxs)("li", {
        children: [(0, hF.jsx)("span", {
          children: FF
        }), (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          "aria-label": `Delete note: ${FF}`,
          onClick: () => {
            uF(FF)
          },
          children: "Delete"
        })]
      }, FF)))
    }), AF && !EF && (0, hF.jsxs)("form", {
      className: "WorldCodeAiQuestionOther",
      onSubmit: FF => {
        FF.preventDefault(), "" === bW.trim() || iW || (eF(!0), RF(null), AF(bW).then((FF => {
          RF(FF), null === FF && dF("")
        })).catch((() => {
          RF("That note couldn't be kept. Try again.")
        })).finally((() => {
          eF(!1)
        })))
      },
      children: [(0, hF.jsx)("input", {
        className: "WorldCodeAiInput WorldCodeAiQuestionInput",
        value: bW,
        maxLength: JF,
        placeholder: "Add a note about your game",
        "aria-label": "Add a note about your game",
        onChange: FF => {
          dF(FF.target.value)
        },
        onKeyDown: FF => {
          FF.stopPropagation()
        }
      }), (0, hF.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        type: "submit",
        disabled: "" === bW.trim() || iW,
        children: iW ? "Adding\u2026" : "Add"
      })]
    }), EF && (0, hF.jsxs)("p", {
      className: "WorldCodeAiHint",
      children: ["That's ", 8, " notes, the most it keeps: delete one to add another."]
    }), PF && (0, hF.jsx)("p", {
      className: "WorldCodeAiAboutError",
      children: PF
    }), (0, hF.jsx)("p", {
      className: "WorldCodeAiAboutHeading",
      children: "In your code now"
    }), QF ? (0, hF.jsxs)("ul", {
      className: "WorldCodeAiOutline",
      children: [SF.callbacks.map((FF => (0, hF.jsxs)("li", {
        children: [AW(FF), " ", (0, hF.jsx)("code", {
          children: FF
        })]
      }, FF))), SF.commands.length > 0 && (0, hF.jsxs)("li", {
        children: ["Chat commands: ", SF.commands.join(", ")]
      }), SF.functions.length > 0 && (0, hF.jsxs)("li", {
        children: ["Your own functions: ", (0, hF.jsx)("code", {
          children: SF.functions.join(", ")
        })]
      })]
    }) : (0, hF.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Nothing yet. Ask the AI to make something."
    })]
  })
}
const xP = {
  asked: "Remember this about your game?",
  pending: "A note to remember, once the change is in",
  checking: "Saving a note\u2026",
  saved: "Saved a note in AI notes",
  declined: "Note not saved",
  refused: "Note not saved"
};

function Zd(FF) {
  let {
    note: WF,
    status: SF,
    onAnswer: CF,
    isPartLeftOut: AF = !1,
    defaultOpen: uF
  } = FF;
  const dF = AF && ("asked" === SF || "pending" === SF);
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiToolCard",
    children: [(0, hF.jsxs)(bW, {
      title: xP[SF],
      isCalm: "refused" !== SF,
      defaultOpen: uF,
      children: [dF && (0, hF.jsx)("p", {
        children: "The note to remember is hidden while a part is unticked. Tick every part to see it."
      }), !dF && (0, hF.jsxs)("p", {
        children: ['"', WF, '"']
      }), !dF && "pending" === SF && (0, hF.jsx)("p", {
        children: "It goes into AI notes once the change is in."
      }), "refused" === SF && (0, hF.jsx)("p", {
        children: "This note can't be saved. Notes are only about your game."
      })]
    }), !dF && "asked" === SF && CF && (0, hF.jsxs)("div", {
      className: "WorldCodeAiChangeActions",
      children: [(0, hF.jsx)("button", {
        className: "WorldCodeAiPrimaryButton",
        onClick: () => {
          CF(!0)
        },
        children: "Yes, remember it"
      }), (0, hF.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        onClick: () => {
          CF(!1)
        },
        children: "No"
      })]
    })]
  })
}

function od(FF) {
  let {
    steps: WF,
    built: SF,
    done: CF,
    onBuild: AF
  } = FF;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiQuestion WorldCodeAiPlan",
    children: [(0, hF.jsx)("p", {
      className: "WorldCodeAiQuestionText",
      children: "The plan: one step at a time"
    }), (0, hF.jsx)("ol", {
      className: "WorldCodeAiPlanSteps",
      children: WF.map(((FF, WF) => (0, hF.jsxs)("li", {
        className: WF < CF ? "WorldCodeAiPlanStep-built" : void 0,
        children: [WF < CF && (0, hF.jsx)("span", {
          className: "WorldCodeAiPlanTick",
          children: "\u2713 "
        }), FF, WF < SF && WF >= CF && (0, hF.jsx)("span", {
          className: "WorldCodeAiPlanAsked",
          children: " (apply it to tick it off)"
        })]
      }, `${WF}:${FF}`)))
    }), SF < WF.length && CF < SF && (0, hF.jsxs)("span", {
      className: "WorldCodeAiHint",
      children: ["Apply ", SF - CF > 1 ? `steps ${CF+1} to ${SF}` : `step ${SF}`, " to your code and try it, then build step ", SF + 1, "."]
    }), SF < WF.length && AF && (0, hF.jsx)("button", {
      ...Zb.f,
      className: CF < SF ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
      onClick: () => {
        AF(SF)
      },
      children: CF < SF ? `Build step ${SF+1} anyway` : `Build step ${SF+1}`
    }), SF < WF.length && SF > 0 && CF >= SF && (0, hF.jsx)("span", {
      className: "WorldCodeAiHint",
      children: "Try each step in your world before the next."
    }), SF === WF.length && (0, hF.jsx)("span", {
      className: "WorldCodeAiHint",
      children: "Every step is asked for."
    })]
  })
}

function Yd(FF, WF, SF) {
  return `${FF}\n\nYou asked me: "${WF}" ${null===SF?"I don't mind: choose what works best.":`My answer: ${SF.replace(/\.$/,"")}.`} Build it now, without asking again.`
}

function Md(FF) {
  let {
    question: WF,
    onAnswer: SF,
    ownAnswerBelow: AF = !1
  } = FF;
  const [uF, bW] = (0, CF.useState)("");
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiQuestion",
    children: [(0, hF.jsx)("p", {
      className: "WorldCodeAiQuestionText",
      children: WF.question
    }), SF && (0, hF.jsxs)(hF.Fragment, {
      children: [(0, hF.jsx)("div", {
        className: "WorldCodeAiQuestionChoices",
        children: WF.choices.map(((FF, WF) => (0, CF.createElement)("button", {
          ...Zb.f,
          key: `${WF}:${FF}`,
          className: "WorldCodeAiQuestionChoice",
          onClick: () => {
            SF(FF, !1)
          }
        }, FF)))
      }), WF.allowOther && AF && (0, hF.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "Or type your own answer in the box below."
      }), WF.allowOther && !AF && (0, hF.jsxs)("form", {
        className: "WorldCodeAiQuestionOther",
        onSubmit: FF => {
          FF.preventDefault(), "" !== uF.trim() && SF(uF.trim(), !0)
        },
        children: [(0, hF.jsx)("input", {
          className: "WorldCodeAiInput",
          value: uF,
          maxLength: 200,
          placeholder: "Or type your own answer",
          "aria-label": "Your own answer",
          onChange: FF => {
            bW(FF.target.value)
          },
          onKeyDown: FF => {
            FF.stopPropagation()
          }
        }), (0, hF.jsx)("button", {
          className: "WorldCodeAiSecondaryButton",
          type: "submit",
          disabled: "" === uF.trim(),
          children: "Send"
        })]
      }), (0, hF.jsx)("button", {
        ...Zb.f,
        className: "WorldCodeAiSecondaryButton WorldCodeAiQuestionAiPicks",
        onClick: () => {
          SF(null, !1)
        },
        children: "Let the AI pick"
      })]
    })]
  })
}
const cP = /^(?:const|let|var)\s+CONFIG\s*=\s*\{/gm;

function Gd(FF, WF) {
  let SF = 0;
  for (; SF < WF;) {
    const CF = FF[SF],
      AF = FF[SF + 1];
    let uF = SF + 1;
    if ("/" === CF && "/" === AF) {
      const WF = FF.indexOf("\n", SF);
      uF = -1 === WF ? FF.length : WF
    } else if ("/" === CF && "*" === AF) {
      const WF = FF.indexOf("*/", SF + 2);
      uF = -1 === WF ? FF.length : WF + 2
    } else if ('"' === CF || "'" === CF || "`" === CF) {
      for (uF = SF + 1; uF < FF.length && FF[uF] !== CF && ("`" === CF || "\n" !== FF[uF]);) uF += "\\" === FF[uF] ? 2 : 1;
      uF++
    }
    if (uF > WF) return !0;
    SF = uF
  }
  return !1
}

function zP(FF) {
  const WF = FF.slice(1, -1);
  let SF = "";
  for (let CF = 0; CF < WF.length; CF++) {
    if ("\\" !== WF[CF]) {
      SF += WF[CF];
      continue
    }
    const FF = WF[++CF],
      AF = {
        n: "\n",
        t: "\t",
        r: "\r",
        "\\": "\\",
        '"': '"',
        "'": "'"
      },
      uF = "u" === FF ? WF.slice(CF + 1, CF + 5) : "x" === FF ? WF.slice(CF + 1, CF + 3) : "";
    if (FF in AF) SF += AF[FF];
    else {
      if ("" === uF || !/^[\da-f]+$/i.test(uF) || uF.length !== ("u" === FF ? 4 : 2)) return null;
      SF += String.fromCharCode(parseInt(uF, 16)), CF += uF.length
    }
  }
  return SF
}

function Id(FF) {
  const WF = function(FF) {
    cP.lastIndex = 0;
    for (let WF = cP.exec(FF); WF; WF = cP.exec(FF))
      if (!Gd(FF, WF.index)) return WF;
    return null
  }(FF);
  if (!WF) return [];
  const SF = function(FF, WF) {
    const SF = [];
    let CF = 0,
      AF = WF;
    for (; AF < FF.length;) {
      var uF;
      const WF = FF[AF];
      if (/\s/.test(WF)) {
        AF++;
        continue
      }
      const hF = AF;
      if ("/" === WF && "/" === FF[AF + 1]) {
        const WF = FF.indexOf("\n", AF);
        AF = -1 === WF ? FF.length : WF, SF.push({
          type: "comment",
          text: FF.slice(hF + 2, AF).trim(),
          start: hF,
          end: AF
        });
        continue
      }
      if ("/" === WF && "*" === FF[AF + 1]) {
        const WF = FF.indexOf("*/", AF + 2);
        if (-1 === WF) return null;
        AF = WF + 2, SF.push({
          type: "comment",
          text: FF.slice(hF + 2, WF).trim(),
          start: hF,
          end: AF
        });
        continue
      }
      if ('"' === WF || "'" === WF || "`" === WF) {
        for (AF++; AF < FF.length && FF[AF] !== WF;) {
          if ("\\" === FF[AF]) AF++;
          else if ("\n" === FF[AF] && "`" !== WF) return null;
          AF++
        }
        if (AF >= FF.length) return null;
        AF++, SF.push({
          type: "`" === WF ? "template" : "string",
          text: FF.slice(hF, AF),
          start: hF,
          end: AF
        });
        continue
      }
      const bW = /^-?(?:\d[\d_]*(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?\b/i.exec(FF.slice(AF, AF + 40));
      if (bW && ("-" !== WF || ":" === (null === (uF = SF[SF.length - 1]) || void 0 === uF ? void 0 : uF.text))) {
        AF += bW[0].length, SF.push({
          type: "number",
          text: bW[0],
          start: hF,
          end: AF
        });
        continue
      }
      const dF = /^[A-Za-z_$][\w$]*/.exec(FF.slice(AF, AF + 80));
      if (dF) AF += dF[0].length, SF.push({
        type: "word",
        text: dF[0],
        start: hF,
        end: AF
      });
      else if (AF++, SF.push({
          type: "punct",
          text: WF,
          start: hF,
          end: AF
        }), "{[(".includes(WF)) CF++;
      else if ("}])".includes(WF) && (CF--, 0 === CF)) return SF
    }
    return null
  }(FF, WF.index + WF[0].length - 1);
  if (!SF) return [];
  const CF = [];
  let AF, uF = 1;
  for (; uF < SF.length - 1;) {
    var hF, bW, dF, PF, RF, iW;
    const WF = SF[uF];
    if ("comment" === WF.type) {
      AF = WF.text, uF++;
      continue
    }
    if ("," === WF.text) {
      uF++;
      continue
    }
    const eF = WF,
      EF = "word" === eF.type ? eF.text : "string" === eF.type ? zP(eF.text) : null;
    if (null === EF || ":" !== (null === (hF = SF[uF + 1]) || void 0 === hF ? void 0 : hF.text)) return [];
    let QF = uF + 2,
      rW = 0;
    const gW = [];
    for (; QF < SF.length - 1;) {
      const FF = SF[QF];
      if (0 === rW && "," === FF.text) break;
      "punct" === FF.type && "{[(".includes(FF.text) ? rW++ : "punct" === FF.type && "}])".includes(FF.text) && rW--, "comment" !== FF.type && gW.push(FF), QF++
    }
    const tW = gW.at(-1),
      TF = "," === (null === (bW = SF[QF]) || void 0 === bW ? void 0 : bW.text) ? SF[QF + 1] : SF.slice(uF + 2, QF).find((FF => "comment" === FF.type && void 0 !== tW && FF.start >= tW.end)),
      aW = "comment" !== (null === TF || void 0 === TF ? void 0 : TF.type) || void 0 === tW || FF.slice(tW.end, TF.start).includes("\n") ? void 0 : TF.text,
      kW = 1 === gW.length ? gW[0] : void 0,
      qW = null !== aW && void 0 !== aW ? aW : AF;
    AF = void 0;
    const VF = {
      key: EF,
      raw: null !== (dF = null === kW || void 0 === kW ? void 0 : kW.text) && void 0 !== dF ? dF : "",
      start: null !== (PF = null === kW || void 0 === kW ? void 0 : kW.start) && void 0 !== PF ? PF : 0,
      end: null !== (RF = null === kW || void 0 === kW ? void 0 : kW.end) && void 0 !== RF ? RF : 0,
      ...qW ? {
        comment: qW
      } : {}
    };
    if ("number" === (null === kW || void 0 === kW ? void 0 : kW.type)) {
      const FF = Number(kW.text.replace(/_/g, ""));
      Number.isFinite(FF) && CF.push({
        ...VF,
        kind: "number",
        value: FF
      })
    } else if ("string" === (null === kW || void 0 === kW ? void 0 : kW.type)) {
      const FF = zP(kW.text);
      null !== FF && CF.push({
        ...VF,
        kind: "string",
        value: FF
      })
    } else "word" !== (null === kW || void 0 === kW ? void 0 : kW.type) || "true" !== kW.text && "false" !== kW.text || CF.push({
      ...VF,
      kind: "boolean",
      value: "true" === kW.text
    });
    uF = QF, aW && "," === (null === (iW = SF[uF]) || void 0 === iW ? void 0 : iW.text) && (uF += 2)
  }
  return CF.slice(0, 30)
}

function fd(FF, WF, SF) {
  const CF = Id(FF).find((FF => FF.key === WF.key));
  if (!CF || CF.kind !== WF.kind || CF.raw !== WF.raw) return null;
  let AF;
  if ("number" === WF.kind) {
    if ("number" !== typeof SF || !Number.isFinite(SF)) return null;
    AF = String(Number(SF.toPrecision(12)))
  } else if ("boolean" === WF.kind) {
    if ("boolean" !== typeof SF) return null;
    AF = SF ? "true" : "false"
  } else {
    if ("string" !== typeof SF) return null;
    const FF = WF.raw.startsWith("'") ? "'" : '"',
      CF = "'" === FF ? '"' : "'";
    uF = SF, AF = `${hF=SF.includes(FF)&&!SF.includes(CF)?CF:FF}${uF.slice(0,200).replace(/\\/g,"\\\\").replace('"'===hF?/"/g:/'/g,`\\${hF}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000-\u001f\u007f]/g,(FF=>`\\u${FF.charCodeAt(0).toString(16).padStart(4,"0")}`))}${hF}`
  }
  var uF, hF;
  return FF.slice(0, CF.start) + AF + FF.slice(CF.end)
}

function yP(FF) {
  if (!Number.isInteger(FF)) {
    var WF;
    const SF = Math.min(3, (null !== (WF = String(FF).split(".")[1]) && void 0 !== WF ? WF : "").length);
    return 10 ** -Math.max(1, SF)
  }
  const SF = Math.abs(FF);
  return SF >= 100 ? 10 ** (Math.floor(Math.log10(SF)) - 1) : 1
}

function sd(FF) {
  return FF.comment ? FF.comment.charAt(0).toUpperCase() + FF.comment.slice(1) : function(FF) {
    const WF = FF.replace(/_/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2").trim().toLowerCase();
    return WF.charAt(0).toUpperCase() + WF.slice(1)
  }(FF.key)
}

function nd(FF) {
  return "boolean" === typeof FF ? FF ? "on" : "off" : "number" === typeof FF ? String(FF) : FF.length > 20 ? `\u201c${FF.slice(0,19)}\u2026\u201d` : `\u201c${FF}\u201d`
}

function Hd(FF) {
  let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "changing";
  if (0 === FF.length) return `Before ${WF} settings`;
  const SF = 3 === FF.length ? 3 : 2,
    CF = FF.slice(0, SF).map((FF => `${FF.name} ${FF.from} \u2192 ${FF.to}`)),
    AF = FF.length > SF ? ` and ${FF.length-SF} more` : "";
  return `Before ${WF} settings: ${CF.join(", ")}${AF}`
}
const Kd = /^(?:(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)|(?:const|let|var)\s+([A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)\s*=(?!=))/gm;

function wd(FF) {
  const WF = new Set;
  for (const AF of FF.matchAll(Kd)) {
    var SF, CF;
    WF.add(null !== (SF = null !== (CF = AF[1]) && void 0 !== CF ? CF : AF[2]) && void 0 !== SF ? SF : AF[3])
  }
  return WF
}
const Xd = {
    lF: ["second", "minute", "timer", "time", "every", "countdown", "wave", "always", "clock"],
    playerCommand: ["command", "/"],
    onPlayerJoin: ["join", "start", "welcome", "spawn", "enter", "arrive"],
    onPlayerLeave: ["AC", "left", "goodbye", "bye", "quit"],
    onPlayerChat: ["chat", "message", "say", "type"],
    onPlayerJump: ["jump"],
    onPlayerClick: ["click", "tap"],
    onPlayerAttack: ["attack", "hit", "swing"],
    onPlayerKilledOtherPlayer: ["kill", "elimination"],
    onPlayerDamagingOtherPlayer: ["hit", "damage", "pvp", "attack", "fight", "hurt"],
    onPlayerKilledMob: ["kill", "mob", "zombie"],
    onPlayerDamagingMob: ["hit", "damage", "mob", "zombie"],
    onMobKilledPlayer: ["die", "death", "mob", "zombie"],
    onMobDamagingPlayer: ["hurt", "damage", "mob", "zombie"],
    onRespawnRequest: ["respawn", "die", "death"],
    onPlayerChangeBlock: ["block", "build", "break", "place", "mine"],
    onPlayerAttemptChangeBlock: ["block", "build", "break", "place", "mine", "protect"],
    onPlayerCraft: ["craft"],
    onPlayerPickedUpItem: ["lW", "collect"],
    onPlayerDropItem: ["drop"],
    CONFIG: ["setting", "config", "number", "value"]
  },
  Ud = new Set("a an and the to of in on at for with from by as is are be it its it's this that these those my your their our me you they them we i so if then than when while each all any some more most less make makes made let lets get gets add adds added put puts change changes changed use uses using new now also just only can could should would will want like say says said tell tells told show shows game player players someone everyone people thing things code function part bit way one two three".split(" "));

function Bd(FF) {
  return FF.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9/]+/).filter((FF => FF.length >= 3 && !Ud.has(FF)))
}

function jP(FF, WF) {
  return FF.some((FF => WF.some((WF => function(FF, WF) {
    return FF.startsWith(WF) || WF.startsWith(FF)
  }(FF, WF)))))
}

function vP(FF, WF, SF) {
  const CF = WF.toLowerCase();
  return FF.names.some((WF => {
    const AF = Object.hasOwn(Xd, WF) ? Xd[WF] : [];
    return !!(CF.includes(WF.toLowerCase()) || AF.includes("/") && CF.includes("/")) || jP(SF, [...AF.flatMap(Bd), ...Bd(FF.plainWords.join(" ")), ...FF.configKeys.flatMap(Bd)])
  }))
}
const Jd = {
    lF: "Runs all the time",
    playerCommand: "Chat commands like /help",
    onPlayerJoin: "When a player joins",
    onPlayerLeave: "When a player leaves",
    onPlayerChat: "Chat messages",
    onPlayerJump: "When a player jumps",
    onPlayerClick: "When a player clicks",
    onPlayerAttack: "When a player attacks",
    onPlayerKilledOtherPlayer: "When someone gets a kill",
    onPlayerDamagingOtherPlayer: "When players hit each other",
    onPlayerKilledMob: "When a player kills a mob",
    onPlayerDamagingMob: "When a player hits a mob",
    onMobKilledPlayer: "When a mob kills a player",
    onMobDamagingPlayer: "When a mob hits a player",
    onRespawnRequest: "When a player respawns",
    onAttemptKillPlayer: "When a player is about to die",
    onPlayerChangeBlock: "When a player changes a block",
    onPlayerAttemptChangeBlock: "Before a player changes a block",
    onWorldChangeBlock: "When a block changes",
    onPlayerCraft: "When a player crafts",
    onPlayerAttemptCraft: "Before a player crafts",
    onPlayerPickedUpItem: "When a player picks up an item",
    onPlayerDropItem: "When a player drops an item",
    onPlayerOpenedChest: "When a player opens a chest",
    onPlayerAttemptOpenChest: "Before a player opens a chest",
    onPlayerBoughtShopItem: "When a player buys from the shop",
    onPlayerPressedButton: "When a player presses a button",
    onPlayerSelectInventorySlot: "When a player picks a hotbar slot",
    onPlayerEnteredVehicle: "When a player gets in a vehicle",
    onPlayerExitedVehicle: "When a player gets out of a vehicle",
    onPlayerSpawnMob: "When a player spawns a mob",
    onWorldSpawnMob: "When a mob spawns",
    onMobKilledOtherMob: "When a mob kills a mob",
    onPlayerUsedThrowable: "When a player throws something",
    onPlayerPlayedEmote: "When a player emotes",
    onBlockStand: "While a player stands on a block",
    onBlockStandStart: "When a player steps on a block",
    onBlockStandStop: "When a player steps off a block",
    onChestUpdated: "When a chest changes",
    onInventoryUpdated: "When an inventory changes",
    onTaskClaimed: "When a player claims a task",
    onPlayerFinishQTE: "When a player finishes a quick-time event",
    onClose: "When the game closes"
  },
  pd = {
    CONFIG: "Settings"
  };

function ld(FF) {
  return Object.hasOwn(Jd, FF) ? Jd[FF] : Object.hasOwn(pd, FF) ? pd[FF] : void 0
}
Object.keys(Jd);
const FP = /^(?:export\s+)?(?:async\s+)?function\b|^(?:(?:const|let|var)\s+)?\w+\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/;

function WP(FF) {
  const WF = FF.trim();
  return "" === WF || /^(?:\/\/|\/\*|\*)/.test(WF)
}

function SP(FF) {
  const WF = FF.map((FF => FF.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "").replace(/\/\/.*$/, ""))).join("\n");
  return ["{}", "()", "[]"].every((FF => {
    let [SF, CF] = FF;
    return WF.split(SF).length === WF.split(CF).length
  }))
}

function CP(FF) {
  const WF = [];
  let SF = 0;
  const CF = CF => {
    if (CF > SF) {
      var AF;
      const uF = FF.slice(SF, CF).find((FF => FP.test(FF)));
      WF.push({
        name: void 0 === uF ? null : null !== (AF = hP(uF)) && void 0 !== AF ? AF : null,
        lines: FF.slice(SF, CF)
      }), SF = CF
    }
  };
  for (let AF = 1; AF < FF.length; AF++)
    if (FP.test(FF[AF])) {
      let WF = AF;
      for (; WF > SF && WP(FF[WF - 1]);) WF--;
      CF(WF)
    } return CF(FF.length), WF
}

function AP(FF) {
  const WF = CP(FF.removed),
    SF = CP(FF.added);
  if (WF.length + SF.length <= 1) return [FF];
  const CF = [];
  let AF = 0,
    uF = 0;
  const hF = (FF, WF, SF) => WF.slice(SF).some((WF => WF.name === FF));
  for (; AF < WF.length || uF < SF.length;)
    if (AF < WF.length && uF < SF.length && WF[AF].name === SF[uF].name) CF.push({
      removed: WF[AF++].lines,
      added: SF[uF++].lines
    });
    else if (AF < WF.length && !hF(WF[AF].name, SF, uF)) CF.push({
    removed: WF[AF++].lines,
    added: []
  });
  else {
    if (!(uF < SF.length) || hF(SF[uF].name, WF, AF)) {
      CF.push({
        removed: WF.slice(AF).flatMap((FF => FF.lines)),
        added: SF.slice(uF).flatMap((FF => FF.lines))
      });
      break
    }
    CF.push({
      removed: [],
      added: SF[uF++].lines
    })
  }
  const bW = [];
  for (const dF of CF) {
    const FF = bW[bW.length - 1],
      WF = [...dF.removed, ...dF.added].every(WP);
    FF && (WF || [...FF.removed, ...FF.added].every(WP)) ? bW[bW.length - 1] = {
      removed: [...FF.removed, ...dF.removed],
      added: [...FF.added, ...dF.added]
    } : bW.push(dF)
  }
  return bW.every((FF => SP(FF.removed) && SP(FF.added))) ? bW : [FF]
}

function uP(FF, WF) {
  const SF = [];
  for (const uF of MC(FF, WF)) {
    const FF = SF[SF.length - 1];
    "same" === uF.kind ? SF.push({
      kind: "same",
      text: uF.text
    }) : "hunk" === (null === FF || void 0 === FF ? void 0 : FF.kind) ? FF[uF.kind].push(uF.text) : SF.push({
      kind: "hunk",
      removed: "removed" === uF.kind ? [uF.text] : [],
      added: "added" === uF.kind ? [uF.text] : []
    })
  }
  const CF = [];
  let AF = 0;
  for (let uF = 0; uF < SF.length; uF++) {
    const FF = SF[uF];
    if ("same" === FF.kind) {
      CF.push(FF);
      continue
    }
    let WF = AP(FF);
    if (1 === WF.length) {
      let CF = uF + 1;
      const AF = [];
      for (; CF < SF.length; CF++) {
        const FF = SF[CF];
        if ("same" !== FF.kind || !/^[\s})\];,]+$/.test(FF.text)) break;
        AF.push(FF.text)
      }
      const hF = AF.length > 0 ? AP({
        removed: [...FF.removed, ...AF],
        added: [...FF.added, ...AF]
      }) : WF;
      hF.length > 1 && (WF = hF, uF = CF - 1)
    }
    for (const SF of WF) CF.push({
      kind: "hunk",
      index: AF++,
      removed: SF.removed,
      added: SF.added
    })
  }
  return CF
}

function hP(FF) {
  var WF, SF;
  const CF = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^\s*(?:export\s+)?(?:const|let|var|class)\s+(\w+)|^(\w+)\s*=(?!=)/.exec(FF);
  return CF ? null !== (WF = null !== (SF = CF[1]) && void 0 !== SF ? SF : CF[2]) && void 0 !== WF ? WF : CF[3] : void 0
}

function bR(FF) {
  const WF = hP(FF);
  if (!WF || /^\s/.test(FF)) return;
  return /^(?:export\s+)?(?:async\s+)?function\b/.test(FF) || /=\s*(?:async\s+)?(?:function\b|\(|\w+\s*=>)/.test(FF) || "CONFIG" === WF ? ld(WF) : void 0
}

function dP(FF) {
  const WF = new Map;
  for (const SF of FF) {
    const FF = bR(SF),
      CF = hP(SF);
    FF && CF && WF.set(CF, FF)
  }
  return WF
}

function PP(FF) {
  return [...new Set(FF.flatMap((FF => {
    const WF = /^\s/.test(FF) ? void 0 : hP(FF);
    return WF ? [WF] : []
  })))]
}

function RP(FF) {
  var WF;
  return FF.length <= 1 ? null !== (WF = FF[0]) && void 0 !== WF ? WF : "" : `${FF.slice(0,-1).join(", ")} and ${FF[FF.length-1]}`
}

function iR(FF) {
  return FF.replace(/_/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2").trim().toLowerCase()
}

function eP(FF) {
  return FF.charAt(0).toUpperCase() + FF.slice(1)
}
const EP = new Set("api const let var function return if else for of in new true false null undefined this typeof while break continue playerId attacker killed damaged command ms Math Date JSON String Number Object Array console length push".split(" "));

function QP(FF) {
  return [...new Set(FF.flatMap((FF => {
    const WF = FF.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "");
    return (0, RW.f)(WF, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, RW.o).map((FF => FF[0])).filter((FF => !EP.has(FF)))
  })))]
}

function rR(FF, WF) {
  var SF;
  const CF = (null !== (SF = FF.parts) && void 0 !== SF ? SF : []).map((FF => {
      return {
        why: FF.why,
        lines: (WF = FF.code, new Set(WF.split("\n").map((FF => FF.trim())).filter((FF => FF.length > 1))))
      };
      var WF
    })),
    AF = uP(FF.before, FF.after);
  let uF = 1;
  const hF = AF.flatMap(((FF, WF) => {
      if ("hunk" !== FF.kind) return uF++, [];
      let SF;
      for (const AF of CF) {
        const WF = FF.added.filter((FF => AF.lines.has(FF.trim()))).length;
        WF > 0 && (!SF || WF > SF.score) && (SF = {
          why: AF.why,
          score: WF
        })
      }
      const hF = function(FF, WF, SF) {
          const CF = PP(FF.added),
            AF = PP(FF.removed),
            uF = CF.filter((FF => AF.includes(FF))),
            hF = CF.filter((FF => !uF.includes(FF))),
            bW = AF.filter((FF => !uF.includes(FF))),
            dF = new Map([...dP(FF.removed), ...dP(FF.added)]),
            PF = [...uF, ...hF].filter((FF => dF.has(FF))),
            RF = (WF, SF) => {
              return {
                names: WF,
                configKeys: WF.includes("CONFIG") ? (CF = FF.added, CF.flatMap((FF => {
                  const WF = /^\s+(\w+)\s*:/.exec(FF);
                  return WF ? [WF[1]] : []
                }))) : [],
                plainWords: WF.flatMap((FF => {
                  const WF = dF.get(FF);
                  return WF ? [WF] : []
                })),
                onlyAdds: SF,
                uses: QP(FF.added),
                takesOut: bW,
                removedUses: QP(FF.removed)
              };
              var CF
            },
            iW = new Set([...FF.added, ...FF.removed].flatMap((FF => {
              var WF;
              const SF = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^(\w+)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/.exec(FF);
              return SF ? [null !== (WF = SF[1]) && void 0 !== WF ? WF : SF[2]] : []
            }))),
            eF = FF => {
              const WF = iR(FF);
              return iW.has(FF) ? `"${WF}"` : WF
            },
            EF = [...uF, ...hF, ...bW];
          if (EF.some((FF => dF.has(FF)))) {
            const FF = FF => {
                const WF = FF.filter((FF => dF.has(FF)));
                return RP(WF.length > 0 ? WF.map((FF => {
                  var WF;
                  return null !== (WF = dF.get(FF)) && void 0 !== WF ? WF : FF
                })) : FF.map(eF))
              },
              WF = [uF.length > 0 ? `${FF(uF)} \u2014 changed` : "", hF.length > 0 ? `${FF(hF)} \u2014 added` : "", bW.length > 0 ? `${FF(bW)} \u2014 taken out` : ""].filter(Boolean),
              SF = [...EF.filter((FF => dF.has(FF))), ...EF.filter((FF => !dF.has(FF)))],
              CF = PF.every((FF => hF.includes(FF)));
            return {
              named: eP(WF.join("; ")),
              codeNames: SF,
              takesOut: bW,
              isPlain: !0,
              about: RF(PF, CF)
            }
          }
          const QF = [uF.length > 0 ? `changes ${RP(uF.map(eF))}` : "", hF.length > 0 ? `adds ${RP(hF.map(eF))}` : "", bW.length > 0 ? `takes out ${RP(bW.map(eF))}` : ""].filter(Boolean);
          if (QF.length > 0) return {
            named: eP(QF.join(", ")),
            codeNames: EF,
            takesOut: bW,
            isPlain: !1,
            about: RF([], !1)
          };
          const rW = WF.flatMap((FF => "same" === FF.kind ? [FF.text] : FF.added));
          for (let gW = rW.length - 1; gW >= 0; gW--) {
            const FF = rW[gW],
              WF = /^\s/.test(FF) ? void 0 : hP(FF);
            if (!WF && "" !== FF.trim() && !/^\s/.test(FF) && !/^(?:\/\/|\/\*|\*)/.test(FF.trim())) break;
            if (WF) {
              const SF = bR(FF);
              return SF ? (dF.set(WF, SF), {
                named: `${SF} \u2014 changed`,
                codeNames: [WF],
                takesOut: [],
                isPlain: !0,
                about: RF([WF], !1)
              }) : {
                named: `Changes ${/\bfunction\b|=>/.test(FF)?`"${iR(WF)}"`:iR(WF)}`,
                codeNames: [WF],
                takesOut: [],
                isPlain: !1,
                about: RF([], !1)
              }
            }
          }
          return {
            named: 0 === FF.added.length ? `Takes out lines from line ${SF}` : `Changes line ${SF}`,
            codeNames: [],
            takesOut: [],
            isPlain: !1,
            about: RF([], !1)
          }
        }(FF, AF.slice(0, WF), uF),
        bW = uF;
      return uF += FF.added.length, [{
        index: FF.index,
        removed: FF.removed,
        added: FF.added,
        line: bW,
        ...hF,
        ...SF ? {
          why: SF.why
        } : {}
      }]
    })),
    bW = function(FF, WF) {
      const SF = WF ? Bd(WF) : [];
      if (!WF || 0 === SF.length) return FF.map((() => {}));
      const CF = FF.map((FF => vP(FF, WF, SF) || void 0 !== FF.why && jP(SF, Bd(FF.why)))),
        AF = new Set(FF.flatMap(((FF, WF) => {
          var SF;
          return CF[WF] && null !== (SF = FF.uses) && void 0 !== SF ? SF : []
        }))),
        uF = FF.map(((FF, WF) => {
          var SF;
          return CF[WF] || (null !== (SF = FF.uses) && void 0 !== SF ? SF : []).some((FF => AF.has(FF)))
        }));
      if (!CF.includes(!0)) return FF.map((() => {}));
      const hF = new Set(FF.flatMap((FF => FF.names)));
      return FF.map(((FF, CF) => {
        if (0 === FF.names.length) {
          var bW, dF;
          const CF = (null !== (bW = FF.takesOut) && void 0 !== bW ? bW : []).filter((FF => ("CONFIG" === FF || Object.hasOwn(Xd, FF)) && !hF.has(FF)));
          return 0 === CF.length || vP({
            ...FF,
            names: CF
          }, WF, SF) || void 0 !== FF.why && jP(SF, Bd(FF.why)) || (null !== (dF = FF.removedUses) && void 0 !== dF ? dF : []).some((FF => AF.has(FF))) ? void 0 : "takesOut"
        }
        if (!uF[CF]) return FF.onlyAdds ? "adds" : "changes"
      }))
    }(hF.map((FF => ({
      ...FF.about,
      ...FF.why ? {
        why: FF.why
      } : {}
    }))), WF),
    dF = hF.map(((FF, WF) => {
      let {
        named: SF,
        codeNames: CF,
        isPlain: AF,
        about: uF,
        ...dF
      } = FF;
      const PF = void 0 !== dF.why && 1 === hF.filter((FF => FF.why === dF.why)).length && dF.why ? dF.why.charAt(0).toUpperCase() + dF.why.slice(1) : void 0,
        RF = !AF && PF ? PF : SF,
        iW = bW[WF],
        eF = iW ? RF.replace(/ \u2014 (added|changed|taken out)$/, "") : RF;
      return {
        ...dF,
        label: eF,
        codeNames: CF,
        ...AF && PF ? {
          detail: PF
        } : {},
        ...iW ? {
          also: iW
        } : {}
      }
    })),
    PF = FF => {
      var WF, SF;
      return `${null!==(WF=FF.also)&&void 0!==WF?WF:""}|${FF.label}|${null!==(SF=FF.detail)&&void 0!==SF?SF:""}`
    };
  return dF.map((FF => {
    let {
      line: WF,
      ...SF
    } = FF;
    return dF.filter((FF => PF(FF) === PF(SF))).length > 1 ? {
      ...SF,
      label: `${SF.label} (line ${WF})`
    } : SF
  }))
}
const gR = {
    added: "adds",
    changed: "changes",
    updated: "updates",
    removed: "takes out",
    made: "makes",
    put: "puts",
    set: "sets",
    fixed: "fixes",
    gave: "gives",
    moved: "moves"
  },
  tR = Object.keys(gR).join("|"),
  TP = new Set(["is", "its", "this", "was", "as", "us", "always", "less", "plus", "across", "yours", "theirs"]),
  aR = /(?:^|[,;:(]|\b(?:and|so|but|or|then|right|because|until|since|just|even))\s*$/i;
const kR = /```[\s\S]*?(?:```|$)|`[^`\n]*`|"[^"\n]*"|\u201c[^\u201d\n]*\u201d|['\u2018][^'\u2019\n]*['\u2019](?![\w])/g;

function qR(FF) {
  return !/^['\u2018]/.test(FF[0]) || !(0, RW.d)(FF, "\\w\u2019'")
}
const VP = /\b(?:last time|before|earlier|previous(?:ly)?|already|in my last|a mistake|an error|wrong)\b/i;

function NP(FF) {
  const WF = function(FF) {
      return (0, RW.f)(FF, kR, qR).map((FF => [FF.index, FF.index + FF[0].length]))
    }(FF),
    SF = FF => WF.some((WF => {
      let [SF, CF] = WF;
      return FF >= SF && FF < CF
    })),
    CF = [];
  for (const uF of FF.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${tR})\\b`, "g"))) {
    const WF = uF.index + uF[1].length,
      AF = uF.index + uF[0].length,
      hF = FF.slice(AF),
      bW = /[.!?](?=\s|$)|\n/.exec(hF),
      dF = bW ? hF.slice(0, bW.index) : hF;
    if (!SF(WF) && !VP.test(dF)) {
      CF.push({
        at: WF,
        length: AF - WF,
        words: `${uF[2]?"It also":"This"} ${gR[uF[3]]}`
      });
      for (const FF of dF.matchAll(new RegExp(`\\b(and|then|also) (${tR})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) SF(AF + FF.index) || CF.push({
        at: AF + FF.index,
        length: FF[0].length,
        words: `${FF[1]} ${gR[FF[2]]}`
      })
    }
  }
  for (const uF of FF.matchAll(/\bnow ([a-z]{2,}s)\b/g)) {
    const WF = Math.max(FF.lastIndexOf(".", uF.index), FF.lastIndexOf("\n", uF.index)) + 1,
      hF = /[.!?](?=\s|$)|\n/.exec(FF.slice(uF.index)),
      bW = FF.slice(WF, hF ? uF.index + hF.index : FF.length),
      dF = CF.some((FF => uF.index < FF.at + FF.length && FF.at < uF.index + uF[0].length)),
      PF = aR.test(FF.slice(WF, uF.index));
    TP.has(uF[1]) || PF || SF(uF.index) || VP.test(bW) || dF || CF.push({
      at: uF.index,
      length: uF[0].length,
      words: `will ${AF=uF[1],"has"===AF?"have":AF.endsWith("ies")?`${AF.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(AF)?AF.slice(0,-2):AF.slice(0,-1)}`
    })
  }
  var AF;
  return CF.sort(((FF, WF) => WF.at - FF.at)).reduce(((FF, WF) => FF.slice(0, WF.at) + WF.words + FF.slice(WF.at + WF.length)), FF)
}

function DP(FF) {
  let {
    path: WF,
    field: SF,
    onWrite: AF,
    isChanged: uF
  } = FF;
  const [bW, dF] = (0, CF.useState)(null), [PF, RF] = (0, CF.useState)(null), iW = sd(SF), [eF, EF] = (0, CF.useState)(!1), QF = (0, CF.useRef)(null), rW = async FF => {
    if (AF && !eF) {
      dF(null), EF(!0);
      try {
        const hF = await AF(WF, SF, FF);
        var CF, uF;
        if (RF(hF ? null : "Your code changed here. Look at it again."), hF) null === (CF = QF.current) || void 0 === CF || null === (uF = CF.scrollIntoView) || void 0 === uF || uF.call(CF, {
          block: "nearest"
        })
      } finally {
        EF(!1)
      }
    }
  }, gW = () => {
    if (null !== bW)
      if ("number" === SF.kind) {
        const FF = Number(bW.trim());
        if ("" === bW.trim() || !Number.isFinite(FF)) return RF("That needs to be a number."), void dF(null);
        rW(FF)
      } else rW(bW)
  }, tW = `WorldCodeAiSetting-${WF}-${SF.key}`;
  return (0, hF.jsxs)("li", {
    ref: QF,
    className: "WorldCodeAiSetting",
    children: [(0, hF.jsxs)("label", {
      className: "WorldCodeAiSettingLabel",
      htmlFor: tW,
      children: [iW, SF.comment && (0, hF.jsx)("code", {
        children: SF.key
      })]
    }), "boolean" === SF.kind ? (0, hF.jsxs)("label", {
      className: "WorldCodeAiSwitch",
      children: [(0, hF.jsx)("input", {
        id: tW,
        type: "checkbox",
        role: "switch",
        checked: !0 === SF.value,
        disabled: !AF,
        onChange: FF => {
          rW(FF.target.checked)
        }
      }), (0, hF.jsx)("span", {
        children: SF.value ? "On" : "Off"
      })]
    }) : (0, hF.jsxs)("div", {
      className: "WorldCodeAiSettingControl",
      children: ["number" === SF.kind && (0, hF.jsx)("button", {
        className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
        "aria-label": `Less ${iW}`,
        disabled: !AF,
        onClick: () => {
          rW(SF.value - yP(SF.value))
        },
        children: "\u2212"
      }), (0, hF.jsx)("input", {
        id: tW,
        className: "WorldCodeAiInput WorldCodeAiSettingInput",
        type: "number" === SF.kind ? "number" : "text",
        inputMode: "number" === SF.kind ? "decimal" : void 0,
        maxLength: "string" === SF.kind ? 200 : void 0,
        value: null !== bW && void 0 !== bW ? bW : String(SF.value),
        disabled: !AF,
        onChange: FF => {
          dF(FF.target.value)
        },
        onBlur: gW,
        onKeyDown: FF => {
          FF.stopPropagation(), "Enter" === FF.key ? gW() : "Escape" === FF.key && dF(null)
        }
      }), "number" === SF.kind && (0, hF.jsx)("button", {
        className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
        "aria-label": `More ${iW}`,
        disabled: !AF,
        onClick: () => {
          rW(SF.value + yP(SF.value))
        },
        children: "+"
      })]
    }), PF && (0, hF.jsx)("span", {
      className: "WorldCodeAiAboutError",
      children: PF
    }), uF && !PF && (0, hF.jsx)("span", {
      className: "WorldCodeAiSettingDone",
      children: "\u2713 Changed in your code"
    })]
  })
}

function LP(FF) {
  let {
    files: WF,
    onWrite: SF,
    onTryIt: CF,
    onUndo: AF,
    before: uF
  } = FF;
  const bW = Object.entries(WF).flatMap((FF => {
    let [WF, SF] = FF;
    const CF = Id(SF);
    return CF.length > 0 ? [{
      path: WF,
      fields: CF
    }] : []
  }));
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiHistory WorldCodeAiSettings",
    children: [(0, hF.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, hF.jsx)("span", {
        children: "Settings of my game"
      })
    }), 0 === bW.length ? (0, hF.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Your code has no settings yet. Settings are the numbers and messages at the top of your code, in CONFIG."
    }) : (0, hF.jsxs)(hF.Fragment, {
      children: [(0, hF.jsx)("p", {
        className: "WorldCodeAiAboutNote",
        children: "Changes go into your code straight away. Try them in your world."
      }), (CF || AF) && (0, hF.jsxs)("div", {
        className: "WorldCodeAiSettingActions",
        children: [CF && (0, hF.jsx)("button", {
          className: "WorldCodeAiPrimaryButton",
          onClick: CF,
          children: "Try it in my world"
        }), AF && (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: AF,
          children: "Undo these changes"
        })]
      }), bW.map((FF => {
        let {
          path: WF,
          fields: CF
        } = FF;
        return (0, hF.jsxs)("div", {
          children: [bW.length > 1 && (0, hF.jsx)("p", {
            className: "WorldCodeAiAboutHeading",
            children: WF
          }), (0, hF.jsx)("ul", {
            className: "WorldCodeAiSettingList",
            children: CF.map((FF => {
              const CF = void 0 === (null === uF || void 0 === uF ? void 0 : uF[WF]) ? void 0 : Id(uF[WF]).find((WF => WF.key === FF.key));
              return (0, hF.jsx)(DP, {
                isChanged: !!uF && (null === CF || void 0 === CF ? void 0 : CF.value) !== FF.value,
                path: WF,
                field: FF,
                onWrite: SF
              }, FF.key)
            }))
          })]
        }, WF)
      }))]
    })]
  })
}
const mR = /<tool_call\b|<function=|```|^\s*\{|<\|/m;
const OP = ["Reading your code", "Planning", "Writing", "Safety check"];

function xR(FF) {
  if (FF <= 1e4) return "It starts in a few seconds.";
  const WF = 10 * Math.ceil(FF / 1e4);
  return WF >= 60 ? "It starts in about a minute." : `It starts in about ${WF} seconds.`
}
var ZP = SF(5458);

function oP(FF, WF) {
  const SF = new Map;
  for (const AF of VA(FF)) {
    var CF;
    SF.set(AF, (null !== (CF = SF.get(AF)) && void 0 !== CF ? CF : 0) + 1)
  }
  return VA(WF).filter((FF => {
    var WF;
    const CF = null !== (WF = SF.get(FF)) && void 0 !== WF ? WF : 0;
    return SF.set(FF, CF - 1), CF <= 0
  }))
}

function YP(FF, WF) {
  return new Promise(((SF, CF) => {
    if (null !== WF && void 0 !== WF && WF.aborted) return void CF((0, ZP.b)(WF));
    const AF = setTimeout(SF, FF);
    null === WF || void 0 === WF || WF.addEventListener("abort", (() => {
      clearTimeout(AF), CF((0, ZP.b)(WF))
    }), {
      once: !0
    })
  }))
}
async function MP(FF, WF, SF, CF, AF) {
  const uF = new Set;
  for (; Date.now() < SF;) {
    var hF;
    const bW = gu.filter((FF => !uF.has(FF)));
    if (0 === bW.length) return null;
    const dF = fA.firstFreeAt(bW);
    if (dF > Date.now()) {
      if (dF > SF) return null;
      null === AF || void 0 === AF || AF(dF), await YP(dF - Date.now(), CF)
    }
    const PF = null !== (hF = bW.find((FF => fA.freeAt(FF) <= Date.now()))) && void 0 !== hF ? hF : bW[0],
      RF = await qh(PF, [{
        role: "user",
        content: FF
      }, {
        role: "assistant",
        content: WF
      }], CF);
    if (null === RF) uF.add(PF);
    else if ("busy" !== RF) return RF
  }
  return null
}
async function cR(FF, WF, SF, CF) {
  const AF = function(FF) {
    const WF = [FF.text, ...FF.question ? [FF.question.question, ...FF.question.choices] : [], ...FF.plan, ...FF.notes, ...FF.actions.flatMap((FF => "switchToWorldCode" === FF.kind && FF.request ? [FF.request] : [])), ...FF.lookups.flatMap((FF => Object.values(FF.args).filter((FF => void 0 !== FF)))), ...FF.changes.flatMap((FF => {
      var WF, SF;
      return [...null !== (WF = FF.why) && void 0 !== WF ? WF : [], ...(null !== (SF = FF.parts) && void 0 !== SF ? SF : []).map((FF => FF.why)), ...oP(FF.before, FF.after)]
    })), ...FF.worldCode.flatMap((FF => VA(FF)))];
    return WF.map((FF => FF.trim())).filter((FF => "" !== FF)).join("\n")
  }(WF);
  if ("" === AF) return "ok";
  const uF = Date.now() + 75e3;
  for (const hF of function(FF) {
      const WF = [];
      let SF = FF;
      for (; SF.length > tu;) {
        const FF = SF.lastIndexOf("\n", tu),
          CF = FF > 6e3 ? FF : tu;
        WF.push(SF.slice(0, CF)), SF = SF.slice(CF)
      }
      return [...WF, SF]
    }(AF)) {
    const WF = await qu(hF, (WF => MP(FF, WF, uF, SF, CF)));
    if ("ok" !== WF) return WF
  }
  return "ok"
}
const GP = "worldCodeAiAnswerTimes";

function zR(FF, WF) {
  var SF;
  const CF = WF && null !== (SF = FF[WF]) && void 0 !== SF ? SF : [],
    AF = CF.length >= 2 ? CF : Object.values(FF).flat();
  return AF.length < 2 ? "Usually under a minute." : `Usually ${function(FF){const WF=Math.max(5,5*Math.round(FF/5e3));if(WF<60)return`about ${WF} seconds`;const SF=10*Math.round(FF/1e4),CF=Math.floor(SF/60),AF=SF%60,uF=`${CF} ${1===CF?"minute":"minutes"}`;return 0===AF?`about ${uF}`:`about ${uF} ${AF} seconds`}(function(FF){const WF=[...FF].sort(((FF,WF)=>FF-WF)),SF=Math.floor(WF.length/2);return WF.length%2===1?WF[SF]:(WF[SF-1]+WF[SF])/2}(AF))}.`
}
var IP = SF(35384);

function fP(FF, WF) {
  const SF = FF.split("\n"),
    CF = WF.split("\n"),
    AF = CF.findIndex(((FF, WF) => FF !== SF[WF]));
  return (-1 === AF ? Math.min(SF.length, CF.length) - 1 : AF) + 1
}

function yR(FF, WF) {
  return FF.filter((FF => FF.path !== WF)).map((FF => ({
    path: FF.path,
    line: fP(FF.before, FF.after)
  })))
}

function sP(FF) {
  return `Moving to ${FF} code\u2026`
}

function nP(FF) {
  return FF.fromLine === FF.toLine ? `line ${FF.fromLine}` : `lines ${FF.fromLine}-${FF.toLine}`
}

function HP(FF) {
  const WF = FF.text.length > 4e3 ? `${FF.text.slice(0,4e3)}\n...` : FF.text;
  return `The part I picked (${FF.path}, ${nP(FF)}):\n\`\`\`\n${WF}\n\`\`\``
}

function KP(FF) {
  let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  switch (FF.action) {
    case "explain":
      return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${HP(FF)}`;
    case "fix":
      return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${HP(FF)}`;
    case "change":
      return `${WF.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${HP(FF)}`
  }
}

function wP(FF) {
  let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  const SF = nP(FF);
  switch (FF.action) {
    case "explain":
      return `Explain ${SF}`;
    case "fix":
      return `Fix ${SF}`;
    case "change":
      return `${WF.trim()} (${SF})`
  }
}
var XP = SF(39242),
  UP = SF(3750),
  BP = SF(39223),
  jR = SF(39234),
  vR = SF(39226);

function JP(FF) {
  return FF ? "/worldCodeAiCheck.ts" : "/worldCodeAiCheck.js"
}
const pP = new Set([2345, 2559, 2353, 2554]),
  lP = new Set([2304, 2552]),
  FR = new Set(["Date", "isNaN", "isFinite", "parseInt", "parseFloat"]),
  WR = {};

function SR() {
  let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  const WF = FF ? "codeBlock" : arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "worldCodeTs" : "worldCode";
  let SF = WR[WF];
  if (!SF) {
    const CF = JP("worldCodeTs" === WF),
      AF = new Map(FF ? [
        [CF, "\n"],
        ["/globals.d.ts", BP.c],
        ["/lib.d.ts", jR.c]
      ] : [
        [CF, "\n"],
        ["/node_modules/@bloxd/index.d.ts", UP.default],
        ["/globals.d.ts", vR.c],
        ["/lib.d.ts", jR.c]
      ]);
    SF = XP.c(XP.b(AF), [...AF.keys()], NF(), {
      allowJs: !0,
      checkJs: !0,
      noLib: !0,
      strict: !1,
      module: NF().ModuleKind.ESNext,
      moduleResolution: NF().ModuleResolutionKind.Bundler,
      target: NF().ScriptTarget.ES2015,
      allowUnreachableCode: !1,
      paths: {
        "@bloxd": ["/node_modules/@bloxd/index.d.ts"]
      }
    }), WR[WF] = SF
  }
  return SF
}

function CR(FF, WF, SF) {
  let CF;
  const AF = uF => {
    WF < uF.getStart(FF) || WF >= uF.getEnd() || (NF().isCallExpression(uF) && (WF >= uF.expression.getEnd() || SF <= uF.expression.getEnd()) && (CF = uF), NF().forEachChild(uF, AF))
  };
  return AF(FF), CF && NF().isPropertyAccessExpression(CF.expression) && "api" === CF.expression.expression.getText(FF) ? CF : void 0
}

function AR(FF, WF, SF) {
  let CF;
  const AF = uF => {
    WF < uF.getStart(FF) || SF > uF.getEnd() || (CF = uF, NF().forEachChild(uF, AF))
  };
  return AF(FF), CF
}

function uR(FF) {
  return FF.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function hR(FF, WF) {
  const SF = uR(FF);
  if (!SF) return;
  const CF = WF.find((FF => uR(FF) === SF));
  if (CF) return `"${CF}"`;
  const AF = WF.filter((FF => {
    const WF = uR(FF);
    return WF.includes(SF) || SF.includes(WF)
  })).sort(((FF, WF) => FF.length - WF.length));
  if (AF.length > 0) return AF.slice(0, 2).map((FF => `"${FF}"`)).join(" or ");
  const uF = new Set(FF.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  let hF;
  for (const bW of WF) {
    const FF = bW.toLowerCase().split(/[^a-z0-9]+/).filter((FF => uF.has(FF))).length;
    FF > 0 && (!hF || FF > hF.shared) && (hF = {
      option: bW,
      shared: FF
    })
  }
  return hF ? `"${hF.option}"` : void 0
}

function bi(FF, WF) {
  var SF;
  const CF = FF.getPropertiesOfType(FF.getNonNullableType(WF)),
    AF = null !== (SF = CF.find((FF => "color" === FF.name))) && void 0 !== SF ? SF : CF[0];
  if (!AF) return;
  const uF = FF.typeToString(FF.getNonNullableType(FF.getTypeOfSymbol(AF))),
    hF = "color" === AF.name ? '"red"' : uF.includes("number") ? "1" : "boolean" === uF ? "true" : '"..."';
  return `{ ${AF.name}: ${hF} }`
}

function dR(FF) {
  return FF.isUnion() ? FF.types.every((FF => 0 !== (FF.flags & NF().TypeFlags.Object))) : 0 !== (FF.flags & NF().TypeFlags.Object)
}

function PR(FF) {
  for (let WF = FF; WF && !NF().isSourceFile(WF); WF = WF.parent)
    if (NF().isExpressionWithTypeArguments(WF)) {
      if (NF().isHeritageClause(WF.parent) && WF.parent.token === NF().SyntaxKind.ImplementsKeyword) return !0
    } else if (NF().isTypeNode(WF)) return !0;
  return !1
}

function RR(FF) {
  var WF;
  let SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const AF = JP(CF && !SF),
    uF = SR(SF, CF);
  uF.updateFile(AF, FF || "\n");
  const hF = uF.getSourceFile(AF),
    bW = null === (WF = uF.languageService.getProgram()) || void 0 === WF ? void 0 : WF.getTypeChecker();
  if (!hF || !bW) return [];
  const dF = new Set,
    PF = uF.languageService.getSyntacticDiagnostics(AF)[0];
  if (void 0 !== (null === PF || void 0 === PF ? void 0 : PF.start)) {
    var RF, iW;
    const WF = hF.getLineAndCharacterOfPosition(PF.start).line,
      SF = null !== (RF = null === (iW = FF.split("\n")[WF]) || void 0 === iW ? void 0 : iW.trim()) && void 0 !== RF ? RF : "",
      CF = SF.length > 40 ? `${SF.slice(0,37)}...` : SF,
      AF = NF().flattenDiagnosticMessageText(PF.messageText, " ").replace(/\.$/, "");
    dF.add(`Line ${WF+1} stops all of this code from running: "${CF}" (${AF}).`)
  }
  const eF = new Set;
  for (const MF of uF.languageService.getSemanticDiagnostics(AF)) {
    var EF, QF, rW, gW, tW;
    if (7027 === MF.code && void 0 !== MF.start) {
      var TF, aW;
      const WF = hF.getLineAndCharacterOfPosition(MF.start).line,
        SF = null !== (TF = null === (aW = FF.split("\n")[WF]) || void 0 === aW ? void 0 : aW.trim()) && void 0 !== TF ? TF : "",
        CF = SF.length > 40 ? `${SF.slice(0,37)}...` : SF;
      dF.add(`Line ${WF+1} never runs: "${CF}" comes after a return, which ends the function first.`);
      continue
    }
    if (lP.has(MF.code) && void 0 !== MF.start) {
      var kW, qW;
      const WF = MF.start + (null !== (kW = MF.length) && void 0 !== kW ? kW : 0),
        SF = FF.slice(MF.start, WF),
        CF = /^\s*\(/.test(FF.slice(WF)),
        AF = new RegExp(`^${SF.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(FF),
        uF = FF.slice(0, MF.start),
        bW = uF.lastIndexOf("/*") > uF.lastIndexOf("*/") || uF.slice(uF.lastIndexOf("\n")).includes("//"),
        RF = new RegExp(`//\\s*(?:const|let|var)\\s+${SF.replaceAll("$","\\$")}\\b`).test(FF),
        iW = new RegExp(`typeof\\s+${SF.replaceAll("$","\\$")}\\b`).test(FF);
      if (FR.has(SF) || eF.has(SF) || CF || AF || bW || RF || iW || PF || PR(AR(hF, MF.start, WF))) continue;
      eF.add(SF);
      const EF = hF.getLineAndCharacterOfPosition(MF.start).line,
        QF = null === (qW = /Did you mean '([\w$]+)'\?/.exec(NF().flattenDiagnosticMessageText(MF.messageText, " "))) || void 0 === qW ? void 0 : qW[1];
      dF.add(QF ? `Line ${EF+1} uses "${SF}", which is never set, so it throws there. Did you mean "${QF}"?` : `Line ${EF+1} uses "${SF}", which isn't set there, so it throws when that line runs.`);
      continue
    }
    if (!pP.has(MF.code) || void 0 === MF.start) continue;
    const WF = NF().flattenDiagnosticMessageText(MF.messageText, " ");
    if (WF.includes("'string | number'")) continue;
    const SF = MF.start + (null !== (EF = MF.length) && void 0 !== EF ? EF : 0),
      CF = CR(hF, MF.start, SF);
    if (!CF) continue;
    const AF = CF.expression.getText(hF),
      uF = FF.slice(MF.start, SF).replace(/\s+/g, " "),
      RF = uF.length > 40 ? `${uF.slice(0,37)}...` : uF,
      iW = AR(hF, MF.start, SF);
    if (2554 === MF.code) {
      var VF, DF, LF;
      const FF = WF.match(/Expected (\S+) arguments?, but got (\d+)/),
        SF = null !== (VF = null === FF || void 0 === FF || null === (DF = FF[1]) || void 0 === DF ? void 0 : DF.replace("-", " to ")) && void 0 !== VF ? VF : "a different number of",
        uF = Number(null !== (LF = null === FF || void 0 === FF ? void 0 : FF[2]) && void 0 !== LF ? LF : CF.arguments.length);
      dF.add(`${AF} needs ${SF} ${"1"===SF?"value":"values"}, but this line gives it ${uF}.`);
      continue
    }
    if (2353 === MF.code) {
      var mW, OF;
      const FF = null !== (mW = null === (OF = WF.match(/'([^']*)' does not exist/)) || void 0 === OF ? void 0 : OF[1]) && void 0 !== mW ? mW : RF,
        SF = null !== iW && void 0 !== iW && iW.parent && NF().isPropertyAssignment(iW.parent) ? iW.parent.parent : null === iW || void 0 === iW ? void 0 : iW.parent,
        CF = SF && NF().isObjectLiteralExpression(SF) ? bW.getContextualType(SF) : void 0,
        uF = hR(FF, CF ? bW.getPropertiesOfType(bW.getNonNullableType(CF)).map((FF => FF.name)) : []);
      dF.add(`${AF} has no setting called "${FF}".${uF?` Did you mean ${uF}?`:" Check Show Docs for its settings."}`);
      continue
    }
    const cW = iW && NF().isExpression(iW) ? bW.getContextualType(iW) : void 0,
      GF = (null !== (YF = cW) && void 0 !== YF && YF.isUnion() ? YF.types : YF ? [YF] : []).filter((FF => FF.isStringLiteral())).map((FF => FF.value));
    if (GF.length > 0) {
      var xW;
      const SF = null === (xW = /^CONFIG\.([\w$]+)$/.exec(uF)) || void 0 === xW ? void 0 : xW[1];
      if (void 0 !== SF) {
        var ZF;
        const CF = null === (ZF = new RegExp(`(?:^|[{,])\\s*${SF.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(FF)) || void 0 === ZF ? void 0 : ZF[2];
        if (void 0 !== CF && !GF.includes(CF)) {
          const FF = hR(CF, GF);
          dF.add(`${AF} has no ${WF.includes("keyof ")?"setting":"name"} called "${CF}" (${uF}).${FF?` Did you mean ${FF}?`:""}`)
        }
        continue
      }
      const CF = iW && NF().isStringLiteral(iW) ? hR(iW.text, GF) : void 0,
        hF = WF.includes("keyof ") ? "setting" : "name",
        bW = void 0 !== iW && NF().isStringLiteral(iW) ? `${AF} has no ${hF} called ${oF=RF,oF.startsWith('"')?oF:`"${oF}"`}.` : `${AF} can't take ${RF} there.`;
      dF.add(`${bW}${CF?` Did you mean ${CF}?`:" Check Show Docs for what it takes."}`);
      continue
    }
    if (cW && dR(bW.getNonNullableType(cW))) {
      const FF = bi(bW, cW);
      dF.add(`${AF} needs settings in { } there${FF?`, like ${FF}`:""}, not ${RF}.`);
      continue
    }
    const zW = null === (QF = WF.match(/parameter of type '([^']*)'/)) || void 0 === QF ? void 0 : QF[1],
      IF = CF.arguments.findIndex((FF => FF.getStart(hF) <= MF.start && MF.start < FF.getEnd())),
      fF = null !== (rW = null === (gW = bW.getResolvedSignature(CF)) || void 0 === gW || null === (tW = gW.parameters[IF]) || void 0 === tW ? void 0 : tW.name) && void 0 !== rW ? rW : "that part",
      yW = iW ? bW.typeToString(bW.getTypeAtLocation(iW)) : "",
      sF = "number" === yW ? "a number" : "string" === yW ? "text" : "something else";
    "string" === zW ? dF.add(`${AF} needs ${fF} as text, but ${RF} is ${sF} here.`) : "number" === zW ? dF.add(`${AF} needs ${fF} as a number, but ${RF} is ${sF} here.`) : dF.add(`${AF} can't take ${RF} there. Check Show Docs for what it takes.`)
  }
  var oF, YF;
  return [...dF]
}

function ii(FF) {
  return FF.replace(/^Line \d+ /, "")
}

function eR(FF) {
  const WF = new Map;
  for (const AF of FF.split("\n")) {
    var SF;
    const FF = /^(?:async\s+)?function\s*\*?\s*(\w+)\s*\(|^(\w+)\s*=\s*(?:async\s*)?(?:\([^()]*\)\s*=>|function\b|\w+\s*=>)/.exec(AF),
      uF = null !== (SF = null === FF || void 0 === FF ? void 0 : FF[1]) && void 0 !== SF ? SF : null === FF || void 0 === FF ? void 0 : FF[2];
    var CF;
    if (uF) WF.set(uF, (null !== (CF = WF.get(uF)) && void 0 !== CF ? CF : 0) + 1)
  }
  return [...WF].flatMap((FF => {
    let [WF, SF] = FF;
    return SF > 1 ? [`${WF} is in the code ${SF} times, so only the last one runs. Put them together in one ${WF}.`] : []
  }))
}

function ER(FF, WF) {
  var SF, CF, AF, uF;
  const hF = WF.after.split("\n"),
    bW = FF => {
      var WF, SF;
      const CF = null !== (WF = null === (SF = hF[FF]) || void 0 === SF ? void 0 : SF.trim()) && void 0 !== WF ? WF : "";
      return "" === CF ? void 0 : {
        line: FF + 1,
        text: CF.length > 50 ? `${CF.slice(0,47)}...` : CF
      }
    },
    dF = /^Line (\d+) /.exec(FF);
  if (dF) return bW(Number(dF[1]) - 1);
  const PF = /^([\w$]+) is in the code \d+ times\b/.exec(FF);
  if (PF) {
    const FF = PF[1].replaceAll("$", "\\$"),
      WF = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${FF}\\s*\\(|^${FF}\\s*=`),
      SF = hF.findIndex((FF => WF.test(FF)));
    return SF >= 0 ? bW(SF) : void 0
  }
  const RF = null !== (SF = null === (CF = /"([^"]+)"/.exec(FF)) || void 0 === CF ? void 0 : CF[1]) && void 0 !== SF ? SF : null === (AF = /^api\.[\w$]+/.exec(FF)) || void 0 === AF ? void 0 : AF[0];
  if (!RF) return;
  const iW = new Set(WF.before.split("\n")),
    eF = hF.flatMap(((FF, WF) => FF.includes(RF) ? [WF] : [])),
    EF = null !== (uF = eF.find((FF => !iW.has(hF[FF])))) && void 0 !== uF ? uF : eF[0];
  return void 0 === EF ? void 0 : bW(EF)
}

function QR(FF) {
  return /^Line \d+ stops all of this code from running: "/.test(FF)
}

function ri(FF) {
  return /^Line \d+ (?:stops all of this code from running|never runs): "/.test(FF)
}

function gi(FF) {
  return FF.replace(/^Line \d+ (\w)/, ((FF, WF) => WF.toUpperCase()))
}
const ti = new Set([NF().SyntaxKind.EqualsToken, NF().SyntaxKind.QuestionQuestionEqualsToken, NF().SyntaxKind.BarBarEqualsToken]);

function TR(FF) {
  const WF = NF().createSourceFile("worldCode.js", FF, NF().ScriptTarget.Latest, !0, NF().ScriptKind.JS),
    SF = WF.statements.flatMap((FF => NF().isVariableStatement(FF) ? FF.declarationList.declarations.filter((FF => NF().isIdentifier(FF.name) && "CONFIG" === FF.name.text)) : [])),
    CF = 1 === SF.length ? SF[0].initializer : void 0;
  if (!CF || !NF().isObjectLiteralExpression(CF)) return [];
  const AF = new Set;
  for (const dF of CF.properties) {
    if (!NF().isPropertyAssignment(dF) && !NF().isShorthandPropertyAssignment(dF) && !NF().isMethodDeclaration(dF)) return [];
    if (NF().isComputedPropertyName(dF.name)) return [];
    AF.add(dF.name.text)
  }
  const uF = [],
    hF = FF => {
      if (NF().isPropertyAccessExpression(FF) && NF().isIdentifier(FF.expression) && "CONFIG" === FF.expression.text) {
        const SF = FF.name.text,
          CF = FF.parent;
        NF().isBinaryExpression(CF) && CF.left === FF && ti.has(CF.operatorToken.kind) ? AF.add(SF) : uF.push({
          name: SF,
          at: FF.getStart(WF)
        })
      }
      NF().forEachChild(FF, hF)
    };
  hF(WF);
  const bW = new Set;
  return uF.flatMap((FF => {
    if (AF.has(FF.name) || bW.has(FF.name)) return [];
    bW.add(FF.name);
    return [`Line ${WF.getLineAndCharacterOfPosition(FF.at).line+1} uses "CONFIG.${FF.name}", but CONFIG has no ${FF.name}, so it is undefined there. Add ${FF.name} to CONFIG.`]
  }))
}

function ai(FF, WF) {
  var SF;
  const CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== WF.path && (0, EF.c)(WF.path)),
    AF = !0 === (null === (SF = WF.path) || void 0 === SF ? void 0 : SF.endsWith(".ts")),
    uF = WF => [...FF.codeWarnings(WF, CF), ...RR(WF, CF, AF), ...eR(WF), ...TR(WF)],
    hF = new Set(uF(WF.before).map(ii));
  return uF(WF.after).filter((FF => !hF.has(ii(FF))))
}
const ki = "Looking up";

function qi(FF) {
  return {
    ...FF,
    call: void 0
  }
}
const VR = 15e3,
  NR = new Map;
const DR = function(FF) {
    let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bloxd_worldCodeAi";
    if ("undefined" === typeof indexedDB) return FF;
    let SF = "unknown",
      CF = null;
    const AF = () => (CF ??= new Promise(((FF, SF) => {
        const AF = indexedDB.open(WF, 1);
        AF.onupgradeneeded = () => {
          AF.result.createObjectStore(rP)
        }, AF.onsuccess = () => {
          const WF = AF.result;
          WF.onversionchange = () => {
            WF.close(), CF = null
          }, WF.onclose = () => {
            CF = null
          }, FF(WF)
        }, AF.onerror = () => {
          var FF;
          SF(null !== (FF = AF.error) && void 0 !== FF ? FF : new Error("IndexedDB didn't open"))
        }, AF.onblocked = () => {
          SF(new Error("IndexedDB is blocked"))
        }
      })).catch((FF => {
        throw CF = null, FF
      })), CF),
      uF = async FF => {
        try {
          return (await AF()).transaction(rP, FF)
        } catch (WF) {
          if ("indexedDB" !== SF) throw WF;
          return CF = null, (await AF()).transaction(rP, FF)
        }
      }, hF = async () => {
        if ("unknown" === SF) try {
          await AF(), SF = "indexedDB"
        } catch {
          SF = "fallback"
        }
        return "indexedDB" === SF
      };
    return {
      getItem: async WF => {
        if (!await hF()) return FF.getItem(WF);
        const SF = await (async FF => {
          const WF = await uF("readonly"),
            SF = WF.objectStore(rP).get(FF);
          return await gP(WF), SF.result
        })(WF);
        return void 0 === SF ? FF.getItem(WF) : SF
      },
      setItem: async (WF, SF) => {
        if (!await hF()) return FF.setItem(WF, SF);
        try {
          const FF = await uF("readwrite");
          return FF.objectStore(rP).put(SF, WF), await gP(FF), !0
        } catch {
          return !1
        }
      },
      update: async (WF, SF) => {
        if (!await hF()) throw new Error("No IndexedDB: read and write localforage instead");
        const CF = await FF.getItem(WF).catch((() => null)),
          AF = await uF("readwrite"),
          bW = AF.objectStore(rP);
        let dF;
        const PF = bW.get(WF);
        return PF.onsuccess = () => {
          dF = SF(void 0 === PF.result ? CF : PF.result), bW.put(dF, WF)
        }, await gP(AF), dF
      }
    }
  }(Qd.f),
  LR = new class {
    constructor(FF, WF) {
      this.store = FF, this.signal = WF, this.kept = new Map
    }
    watch(FF, WF) {
      var SF, CF;
      return null !== (SF = null === (CF = this.signal) || void 0 === CF ? void 0 : CF.listen((SF => {
        if (SF !== FF) return;
        const CF = this.load(FF).then((async WF => qP(WF, await this.read(FF))));
        this.kept.set(FF, CF), CF.then(WF)
      }))) && void 0 !== SF ? SF : () => {}
    }
    list(FF) {
      return this.load(FF)
    }
    async add(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now(),
        AF = arguments.length > 4 ? arguments[4] : void 0;
      const uF = (FF, uF) => {
          const hF = qP(FF, uF),
            bW = hF[hF.length - 1];
          if (bW && function(FF, WF) {
              const SF = Object.keys(FF);
              return SF.length === Object.keys(WF).length && SF.every((SF => FF[SF] === WF[SF]))
            }(bW.files, SF)) return hF;
          const dF = Math.max(CF, ...hF.map((FF => FF.id + 1)));
          return [...hF, {
            id: dF,
            at: CF,
            label: WF,
            ...AF ? {
              did: AF
            } : {},
            files: {
              ...SF
            }
          }].slice(-30)
        },
        hF = this.load(FF).then((async WF => this.save(FF, (FF => uF(WF, FF)))));
      this.kept.set(FF, hF.then((FF => {
        let {
          snapshots: WF
        } = FF;
        return WF
      })));
      const {
        snapshots: bW,
        isSaved: dF
      } = await hF;
      var PF;
      dF && (null === (PF = this.signal) || void 0 === PF || PF.post(FF));
      return bW
    }
    async relabel(FF, WF, SF) {
      const CF = this.load(FF).then((async CF => this.save(FF, (FF => qP(CF, FF).map((FF => FF.id === WF ? {
        ...FF,
        label: SF
      } : FF))))));
      this.kept.set(FF, CF.then((FF => {
        let {
          snapshots: WF
        } = FF;
        return WF
      })));
      const {
        snapshots: AF,
        isSaved: uF
      } = await CF;
      var hF;
      uF && (null === (hF = this.signal) || void 0 === hF || hF.post(FF));
      return AF
    }
    async save(FF, WF) {
      if (this.store.update) try {
        return {
          snapshots: await this.store.update(this.storeKey(FF), (FF => WF(kP(FF) ? FF : null))),
          isSaved: !0
        }
      } catch {}
      const SF = WF(await this.read(FF));
      return {
        snapshots: SF,
        isSaved: await this.store.setItem(this.storeKey(FF), SF).catch((() => !1))
      }
    }
    read(FF) {
      return this.store.getItem(this.storeKey(FF)).then((FF => kP(FF) ? FF : null)).catch((() => null))
    }
    load(FF) {
      let WF = this.kept.get(FF);
      return WF || (WF = this.store.getItem(this.storeKey(FF)).then((FF => kP(FF) ? FF : [])).catch((() => [])), this.kept.set(FF, WF)), WF
    }
    storeKey(FF) {
      return `worldCodeAiHistory:${FF}`
    }
  }(DR, aP("bloxd-worldCodeAiHistory")),
  mi = new class {
    constructor(FF, WF) {
      this.store = FF, this.signal = WF, this.kept = new Map
    }
    watch(FF, WF) {
      var SF, CF;
      return null !== (SF = null === (CF = this.signal) || void 0 === CF ? void 0 : CF.listen((SF => {
        if (SF !== FF) return;
        const CF = this.load(FF).then((async WF => {
          var SF;
          return null !== (SF = await this.read(FF)) && void 0 !== SF ? SF : WF
        }));
        this.kept.set(FF, CF), CF.then(WF)
      }))) && void 0 !== SF ? SF : () => {}
    }
    list(FF) {
      return this.load(FF)
    }
    add(FF, WF) {
      return this.update(FF, (FF => FF.includes(WF) || FF.length >= 8 ? FF : [...FF, WF]))
    }
    remove(FF, WF) {
      return this.update(FF, (FF => FF.filter((FF => FF !== WF))))
    }
    async update(FF, WF) {
      var SF;
      const CF = this.load(FF).then((async SF => {
        var CF;
        if (this.store.update) try {
          return await this.store.update(this.storeKey(FF), (FF => WF(uW(FF) ? FF.slice(0, 8) : SF)))
        } catch {}
        const AF = WF(null !== (CF = await this.read(FF)) && void 0 !== CF ? CF : SF);
        return await this.store.setItem(this.storeKey(FF), AF).catch((() => !1)), AF
      }));
      this.kept.set(FF, CF);
      const AF = await CF;
      return null === (SF = this.signal) || void 0 === SF || SF.post(FF), AF
    }
    read(FF) {
      return this.store.getItem(this.storeKey(FF)).then((FF => uW(FF) ? FF.slice(0, 8) : null)).catch((() => null))
    }
    load(FF) {
      let WF = this.kept.get(FF);
      return WF || (WF = this.read(FF).then((FF => null !== FF && void 0 !== FF ? FF : [])), this.kept.set(FF, WF)), WF
    }
    storeKey(FF) {
      return `worldCodeAiNotes:${FF}`
    }
  }(DR, aP("bloxd-worldCodeAiNotes"));
const OR = ["Next in line", "2nd in line", "3rd in line"];
let xi = null;

function ZR() {
  if (!xi) {
    var FF, WF, SF, CF;
    const AF = FF => eF.b.find((WF => WF.id === FF)),
      uF = FF => {
        var WF, SF;
        return null !== (WF = null === (SF = AF(FF)) || void 0 === SF ? void 0 : SF.content) && void 0 !== WF ? WF : ""
      };
    xi = new Rb({
      apiReference: uF("apiReference"),
      callbacks: uF("callbacks"),
      clientOptions: uF("clientOptions"),
      snippets: uF("snippets"),
      howTo: uF("howTo"),
      itemNames: null !== (FF = null === (WF = AF("itemNames")) || void 0 === WF ? void 0 : WF.raw) && void 0 !== FF ? FF : "",
      blockNames: null !== (SF = null === (CF = AF("blockNames")) || void 0 === CF ? void 0 : CF.raw) && void 0 !== SF ? SF : "",
      mobSettings: uF("mobSettings")
    })
  }
  return xi
}
const oR = ["Welcome players when they join", "Give everyone a sword when they join", "Make a /spawn command", "Show a timer on the screen"],
  YR = ["Give me a diamond sword", "Teleport me onto this block", "Make me jump really high", "Tell everyone I clicked it"],
  MR = ["Explain these changes", "Make it simpler"],
  ci = ["Make the change"],
  GR = ["Explain how it works", "Add a sound or effect", "Make it harder to play"],
  zi = ["It didn't work: nothing happened in my world.", "It didn't work: an error showed up.", "It didn't work: it did something different from what I asked."];

function IR(FF) {
  let {
    requests: WF,
    onPick: SF
  } = FF;
  const AF = (0, CF.useRef)(null);
  var uF;
  return uF = AF, (0, CF.useLayoutEffect)((() => {
    const FF = uF.current,
      WF = null === FF || void 0 === FF ? void 0 : FF.closest(".WorldCodeAiMessages");
    if (!FF || !WF) return;
    const SF = () => {
      const SF = WF.getBoundingClientRect().bottom;
      for (const WF of Array.from(FF.children)) {
        const FF = WF.getBoundingClientRect();
        WF.style.visibility = FF.top < SF && FF.bottom > SF + 1 ? "hidden" : ""
      }
    };
    SF(), WF.addEventListener("scroll", SF, {
      passive: !0
    });
    const CF = "function" === typeof ResizeObserver ? new ResizeObserver(SF) : null;
    return null === CF || void 0 === CF || CF.observe(WF), null === CF || void 0 === CF || CF.observe(FF), () => {
      WF.removeEventListener("scroll", SF), null === CF || void 0 === CF || CF.disconnect()
    }
  }), [uF]), (0, hF.jsx)("div", {
    ref: AF,
    className: "WorldCodeAiChips WorldCodeAiFollowUps",
    children: WF.map((FF => (0, CF.createElement)("button", {
      ...Zb.f,
      key: FF,
      className: "WorldCodeAiChip",
      onClick: () => {
        SF(FF)
      }
    }, function(FF) {
      const WF = FF.replace(/^It didn't work: /, "").replace(/\.$/, "");
      return WF.charAt(0).toUpperCase() + WF.slice(1)
    }(FF))))
  })
}

function fR(FF) {
  let {
    useFree: WF,
    retryOf: SF,
    isAutoFix: CF,
    lookupOf: AF
  } = FF;
  return !0 !== WF && (void 0 !== SF || !0 !== CF && void 0 === AF)
}

function yi(FF, WF, SF) {
  return `They asked: "${FF}"\nYour last answer wrote this for ${WF}, but you hadn't seen that file, so it didn't go in. ${WF} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${SF.replace(/\s*$/,"")}\n\`\`\``
}

function sR() {
  return "The world's blocks can't be seen from here."
}

function nR() {
  return "The world can't be seen from here."
}
const HR = 1e4,
  KR = "I can only help with your game's code. Try asking about something in your world.";

function wR(FF) {
  return FF ? "Apply this change first, then press Switch to World Code." : "Apply this change first, then ask me again to go to World Code."
}
const XR = 1500;

function UR(FF, WF) {
  var SF;
  return Object.entries(null !== (SF = FF.leftFiles) && void 0 !== SF ? SF : {}).every((FF => {
    var SF;
    let [CF, AF] = FF;
    return (null !== (SF = WF[CF]) && void 0 !== SF ? SF : "") === AF
  }))
}
const BR = "Check your code: go through my request part by part and play it in your head as each player, from the start: what do they see and when, and what happens the first time, the last time, and with things that shouldn't count? Only something that stops my request working is wrong: keep everything else as it is (numbers, starting values, how it works) and add no new rules or limits. If anything is wrong, send the fixed file, after playing the normal case through once more with your change. If it's all right, say in one sentence that you played it through and found no mistakes, that they should still try it in their world because you can miss things, and send no file.";

function ji(FF) {
  var WF, SF, AF, dF, PF, RF, iW, eF;
  let {
    entry: EF,
    isOutOfDate: QF = !1,
    canEdit: rW,
    onApply: gW,
    onUndo: tW,
    onTryIt: TF,
    isLatest: aW,
    canUndo: kW,
    onFixWarnings: qW,
    onCheck: VF,
    busy: NF,
    checkPicked: DF,
    onPickedChange: LF,
    request: mW,
    elsewhere: OF,
    defaultOpen: xW
  } = FF;
  const ZF = "offered" === EF.status && QF ? "stale" : EF.status,
    [oF, YF] = (0, CF.useState)(xW),
    [MF, cW] = (0, CF.useState)(!1),
    GF = null !== (WF = EF.warnings) && void 0 !== WF ? WF : [],
    zW = aW && ("offered" === ZF || "applied" === ZF) && rW && GF.length > 0 && !EF.warningsSentBack,
    IF = "applied" === ZF,
    fF = null !== (SF = null === (AF = EF.swappedTo) || void 0 === AF ? void 0 : AF[0]) && void 0 !== SF ? SF : zW ? null !== (dF = null === (PF = /"([^"]+)"/.exec(GF[0])) || void 0 === PF ? void 0 : PF[1]) && void 0 !== dF ? dF : null === (RF = /^api\.[\w$]+/.exec(GF[0])) || void 0 === RF ? void 0 : RF[0] : void 0,
    yW = GF.every((FF => /never true|no block is ever called that/.test(FF))),
    sF = (0, CF.useMemo)((() => {
      var FF;
      const [WF] = EF.changes;
      return new Map((null !== (FF = EF.warnings) && void 0 !== FF ? FF : []).map((FF => [FF, 1 === EF.changes.length && WF ? ER(FF, WF) : void 0])))
    }), [EF.warnings, EF.changes]),
    nF = 1 === GF.length ? sF.get(GF[0]) : void 0,
    [HF, KF] = (0, CF.useState)(new Set),
    wF = HF.size > 0;
  (0, CF.useEffect)((() => {
    null === LF || void 0 === LF || LF(wF)
  }), [wF, LF]), (0, CF.useEffect)((() => {
    KF((FF => 0 === FF.size ? FF : new Set))
  }), [EF.changes]);
  const XF = "offered" === ZF && rW && EF.id >= 0,
    UF = (0, CF.useMemo)((() => new Map(EF.changes.map((FF => [FF.path, rR(FF, mW)])))), [EF.changes, mW]),
    BF = [...UF.values()].reduce(((FF, WF) => FF + WF.length), 0),
    jW = XF && BF >= 2,
    [vW, JF] = (0, CF.useState)(!1),
    pF = "applied" === ZF && BF >= 2,
    lF = BF - HF.size,
    FW = (0, CF.useMemo)((() => {
      if (0 !== HF.size) return EF.changes.flatMap((FF => {
        var WF;
        const SF = new Set((null !== (WF = UF.get(FF.path)) && void 0 !== WF ? WF : []).filter((WF => !HF.has(`${FF.path}:${WF.index}`))).map((FF => FF.index))),
          CF = function(FF, WF) {
            const SF = uP(FF.before, FF.after),
              CF = SF.flatMap((FF => "same" === FF.kind ? [FF.text] : WF.has(FF.index) ? FF.added : FF.removed));
            if (0 === CF.length) return "";
            const AF = (SF.every((FF => "same" === FF.kind || WF.has(FF.index))) ? FF.after : FF.before).endsWith("\n") ? "\n" : "";
            return `${CF.join("\n")}${AF}`
          }(FF, SF);
        return CF === FF.before ? [] : [{
          ...FF,
          after: CF
        }]
      }))
    }), [EF.changes, UF, HF]),
    WW = (0, CF.useMemo)((() => FW && DF ? DF(FW) : []), [FW, DF]);
  (0, CF.useEffect)((() => {
    "applied" === ZF && YF(!1)
  }), [ZF]);
  const SW = !!EF.editedInPlace;
  (0, CF.useEffect)((() => {
    SW || "offered" !== EF.status || YF(!0)
  }), [SW, EF.status]);
  const CW = EF.changes.map((FF => FF.path)).join(", "),
    AW = !SW || zW || WW.length > 0 || "undone" === ZF || "stale" === ZF;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiToolCard",
    children: [(0, hF.jsx)(bW, {
      className: "WorldCodeAiChangeLog",
      title: SW ? `Editing code: ${CW}` : `Code change: ${CW}`,
      isCalm: !0,
      isElsewhere: !!OF,
      isOpen: oF,
      onToggle: YF,
      children: (0, hF.jsx)("div", {
        className: "WorldCodeAiChanges",
        children: EF.changes.map((FF => {
          var WF, SF;
          const {
            added: CF,
            removed: AF
          } = function(FF) {
            let WF = 0,
              SF = 0;
            for (const CF of MC(FF.before, FF.after)) "added" === CF.kind ? WF++ : "removed" === CF.kind && SF++;
            return {
              added: WF,
              removed: SF
            }
          }(FW ? null !== (WF = FW.find((WF => WF.path === FF.path))) && void 0 !== WF ? WF : {
            ...FF,
            after: FF.before
          } : FF), uF = null !== (SF = UF.get(FF.path)) && void 0 !== SF ? SF : [], bW = "offered" !== ZF && "applied" !== ZF || "" === FF.before ? [] : function(FF, WF) {
            const SF = wd(WF);
            return [...wd(FF)].filter((FF => !SF.has(FF)))
          }(FF.before, FF.after);
          return (0, hF.jsxs)("div", {
            className: "WorldCodeAiChange",
            children: [(0, hF.jsxs)("div", {
              className: "WorldCodeAiChangeHeader",
              children: [(0, hF.jsx)("span", {
                className: "WorldCodeAiChangePath",
                children: FF.path
              }), CF > 0 && (0, hF.jsx)("span", {
                className: "WorldCodeAiAdded",
                children: 1 === CF ? "1 line added" : `${CF} lines added`
              }), AF > 0 && (0, hF.jsxs)("span", {
                className: "WorldCodeAiRemoved",
                children: [AF, " removed"]
              })]
            }), jW && (0, hF.jsx)("ul", {
              className: "WorldCodeAiHunks",
              children: uF.map((WF => {
                const SF = `${FF.path}:${WF.index}`,
                  CF = [WF.added.length > 0 ? `+${WF.added.length}` : "", WF.removed.length > 0 ? `\u2212${WF.removed.length}` : ""].filter(Boolean).join(" "),
                  AF = [WF.added.length > 0 ? `${WF.added.length} ${1===WF.added.length?"line":"lines"} added` : "", WF.removed.length > 0 ? `${WF.removed.length} taken out` : ""].filter(Boolean).join(", ");
                return (0, hF.jsx)("li", {
                  children: (0, hF.jsxs)("label", {
                    children: [(0, hF.jsx)("input", {
                      type: "checkbox",
                      checked: !HF.has(SF),
                      onChange: FF => {
                        const WF = new Set(HF);
                        FF.target.checked ? WF.delete(SF) : WF.add(SF), KF(WF)
                      }
                    }), (0, hF.jsxs)("span", {
                      children: [WF.also && (0, hF.jsx)("span", {
                        className: "WorldCodeAiHunkAlso",
                        title: "You didn't ask for this. Untick it to leave it out.",
                        children: "adds" === WF.also ? "Also adds" : "changes" === WF.also ? "Also changes" : "Also takes out"
                      }), WF.label, WF.codeNames.length > 0 && (0, hF.jsx)("code", {
                        className: "WorldCodeAiHunkCode",
                        children: WF.codeNames.join(", ")
                      }), WF.detail && (0, hF.jsx)("span", {
                        className: "WorldCodeAiHunkDetail",
                        children: WF.detail
                      })]
                    }), (0, hF.jsx)("span", {
                      className: "WorldCodeAiHunkCount",
                      title: AF,
                      "aria-label": AF,
                      children: `${CF} ${WF.added.length+WF.removed.length===1?"line":"lines"}`
                    })]
                  })
                }, SF)
              }))
            }), jW && (uF.some((FF => void 0 !== FF.also)) ? (0, hF.jsx)("p", {
              className: "WorldCodeAiHint WorldCodeAiHunksHint",
              children: 'You didn\'t ask for the parts marked "Also". Untick one to leave it out.'
            }) : uF.some((FF => FF.takesOut.length > 0 || 0 === FF.added.length)) && (0, hF.jsx)("p", {
              className: "WorldCodeAiHint WorldCodeAiHunksHint",
              children: "Untick a part to keep that bit of your code as it is."
            })), pF && uF.length >= 2 && (0, hF.jsx)("button", {
              className: "WorldCodeAiLinkButton WorldCodeAiPartsToggle",
              onClick: () => {
                JF(!vW)
              },
              children: vW ? `Hide the ${uF.length} parts` : `Show the ${uF.length} parts that went in`
            }), pF && vW && (0, hF.jsx)("ul", {
              className: "WorldCodeAiHunks WorldCodeAiHunks-done",
              children: uF.map((WF => (0, hF.jsx)("li", {
                children: (0, hF.jsxs)("span", {
                  children: [WF.label, WF.codeNames.length > 0 && (0, hF.jsx)("code", {
                    className: "WorldCodeAiHunkCode",
                    children: WF.codeNames.join(", ")
                  }), WF.detail && (0, hF.jsx)("span", {
                    className: "WorldCodeAiHunkDetail",
                    children: WF.detail
                  })]
                })
              }, `${FF.path}:${WF.index}`)))
            }), FF.why && !jW && !(pF && vW) && (0, hF.jsx)("ul", {
              className: "WorldCodeAiChangeWhy",
              children: FF.why.map((FF => (0, hF.jsx)("li", {
                children: FF.charAt(0).toUpperCase() + FF.slice(1)
              }, FF)))
            }), bW.length > 0 && !(jW && bW.every((FF => uF.some((WF => WF.takesOut.includes(FF)))))) && (0, hF.jsxs)("p", {
              className: "WorldCodeAiChangeTakenOut",
              children: ["applied" === ZF ? "It took out " : "It also takes out ", bW.slice(0, 6).map((FF => {
                var WF;
                const SF = null !== (WF = ld(FF)) && void 0 !== WF ? WF : iR(FF);
                return SF.charAt(0).toLowerCase() + SF.slice(1)
              })).join(", "), bW.length > 6 ? ` and ${bW.length-6} more` : "", ".", " ", (0, hF.jsx)("code", {
                className: "WorldCodeAiHunkCode",
                children: bW.slice(0, 6).join(", ")
              })]
            }), (0, hF.jsx)(Td, {
              change: FF,
              marked: fF
            })]
          }, FF.path)
        }))
      })
    }), AW && (0, hF.jsxs)("div", {
      className: uF()("WorldCodeAiChangeActions", aW && "WorldCodeAiChangeActions-sticky"),
      children: [WW.length > 0 && (0, hF.jsxs)("div", {
        className: "WorldCodeAiWarning",
        children: [(0, hF.jsx)("p", {
          className: "WorldCodeAiWarningTitle",
          children: "Leaving that part out breaks this:"
        }), (0, hF.jsx)("p", {
          children: WW[0]
        })]
      }), zW && (0, hF.jsxs)("div", {
        className: "WorldCodeAiWarning",
        children: [(0, hF.jsx)("p", {
          className: "WorldCodeAiWarningTitle",
          children: yW ? 1 === GF.length ? `${nF?`Line ${nF.line}`:"This line"} ${IF?"will":"would"} never work:` : `${GF.length} lines ${IF?"will":"would"} never work:` : 1 === GF.length ? `${nF?`Line ${nF.line}`:"This line"} ${IF?"will":"would"} break:` : `${GF.length} lines ${IF?"will":"would"} break:`
        }), (MF ? GF : GF.slice(0, 1)).map((FF => {
          const WF = sF.get(FF);
          return (0, hF.jsxs)(CF.Fragment, {
            children: [WF && !ri(FF) && (0, hF.jsxs)("p", {
              className: "WorldCodeAiWarningWhere",
              children: [GF.length > 1 && `Line ${WF.line}: `, (0, hF.jsx)("code", {
                children: WF.text
              })]
            }), (0, hF.jsx)("p", {
              children: !WF || 1 !== GF.length && ri(FF) ? FF : gi(FF)
            })]
          }, FF)
        })), !MF && GF.length > 1 && (0, hF.jsxs)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: () => {
            cW(!0)
          },
          children: ["Show ", GF.length - 1, " more"]
        })]
      }), zW && (0, hF.jsx)("button", {
        ...Db(null !== (iW = EF.warnings) && void 0 !== iW ? iW : []) ? {} : Zb.f,
        className: "WorldCodeAiPrimaryButton",
        disabled: NF,
        onClick: qW,
        children: 1 === (null === (eF = EF.warnings) || void 0 === eF ? void 0 : eF.length) ? "Fix this line" : "Fix these lines"
      }), "offered" === ZF && rW && !SW && (0, hF.jsx)("button", {
        className: zW ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
        disabled: jW && 0 === lF || !!OF && NF,
        title: OF && NF ? "You can apply it once the AI is done." : void 0,
        onClick: () => {
          gW(FW)
        },
        children: OF ? OF.codeBlock ? "Apply in that code block" : "Apply in World Code" : jW && lF < BF ? `Apply ${lF} of ${BF} changes` : zW ? "Apply anyway" : "Apply to my code"
      }), "offered" === ZF && !rW && (0, hF.jsx)("span", {
        className: "WorldCodeAiHint",
        children: null !== OF && void 0 !== OF && OF.codeBlock ? "You can't edit that code block." : "You can't edit this world's code."
      }), "applied" === ZF && !SW && (0, hF.jsxs)("div", {
        className: "WorldCodeAiAppliedRow",
        children: [(0, hF.jsx)("span", {
          className: "WorldCodeAiAppliedNote",
          children: "Applied."
        }), aW && (0, hF.jsx)("button", {
          className: "WorldCodeAiPrimaryButton",
          onClick: TF,
          children: "Try it in my world"
        }), aW && (0, hF.jsx)("button", {
          ...Zb.f,
          className: "WorldCodeAiSecondaryButton",
          disabled: NF,
          onClick: VF,
          children: "Check for mistakes"
        }), kW && (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiUndoButton",
          onClick: tW,
          children: "Undo"
        })]
      }), "applied" === ZF && !SW && !kW && !OF && (0, hF.jsx)("span", {
        className: "WorldCodeAiHint WorldCodeAiUndoOff",
        children: "You've changed this code since, so Undo is off. History can still go back."
      }), "undone" === ZF && (0, hF.jsx)("span", {
        className: "WorldCodeAiHint",
        children: EF.wentBack ? "You went back, so this change is gone." : "Undone."
      }), "stale" === ZF && (0, hF.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "Your code changed since this answer, so ask again to get an up-to-date change."
      })]
    })]
  })
}

function vi(FF) {
  let {
    target: WF,
    isOpen: SF
  } = FF;
  return (0, hF.jsxs)("div", {
    className: uF()("WorldCodeAiTargetLabel", SF && "WorldCodeAiTargetLabel-open"),
    children: [(0, hF.jsx)("span", {
      children: WF.label
    }), SF && (0, hF.jsx)("span", {
      className: "WorldCodeAiTargetLabelNote",
      children: "Open now"
    })]
  })
}

function JR(FF) {
  let {
    code: WF,
    onSwitch: SF,
    defaultOpen: AF,
    isElsewhere: uF
  } = FF;
  const [dF, PF] = (0, CF.useState)(!1), RF = (0, CF.useMemo)((() => ({
    path: "World Code",
    before: "",
    after: WF
  })), [WF]);
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiToolCard WorldCodeAiWorldCodePart",
    children: [(0, hF.jsx)(bW, {
      className: "WorldCodeAiChangeLog",
      title: "Code for World Code",
      isCalm: !0,
      isElsewhere: uF,
      defaultOpen: AF,
      children: (0, hF.jsx)("div", {
        className: "WorldCodeAiChanges",
        children: (0, hF.jsx)(Td, {
          change: RF
        })
      })
    }), (0, hF.jsxs)("div", {
      className: "WorldCodeAiChangeActions",
      children: [(0, hF.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "A code block only runs when clicked, so this part goes in World Code."
      }), SF && (0, hF.jsx)("button", {
        className: "WorldCodeAiPrimaryButton",
        onClick: SF,
        children: "Switch to World Code"
      }), (0, hF.jsx)("button", {
        className: "WorldCodeAiLinkButton",
        onClick: () => {
          navigator.clipboard.writeText(WF).then((() => {
            PF(!0)
          })).catch((() => {}))
        },
        children: dF ? "Copied" : "Copy"
      })]
    })]
  })
}

function pR(FF) {
  var WF;
  let {
    failed: SF,
    nothingChanged: CF,
    onRetry: AF,
    defaultOpen: uF,
    isElsewhere: dF
  } = FF;
  const PF = null === (WF = SF.find((FF => null !== FF.closest))) || void 0 === WF ? void 0 : WF.closest;
  return (0, hF.jsxs)("div", {
    className: "WorldCodeAiFailedEdits",
    children: [(0, hF.jsxs)(bW, {
      title: CF ? "That change didn't work, so your code is the same." : 1 === SF.length ? "One part didn't work, so it's left out." : `${SF.length} parts didn't work, so they're left out.`,
      defaultOpen: uF,
      isElsewhere: dF,
      children: [PF && (0, hF.jsxs)(hF.Fragment, {
        children: [(0, hF.jsx)("p", {
          children: "The closest bit in your code:"
        }), (0, hF.jsx)("pre", {
          className: "WorldCodeAiFailedLines",
          children: PF.text.split("\n").length > 4 ? `${PF.text.split("\n").slice(0,4).join("\n")}\n\u2026` : PF.text
        })]
      }), !PF && (0, hF.jsx)("p", {
        children: "Try asking for it again, maybe in a different way."
      })]
    }), AF && (0, hF.jsxs)("div", {
      className: "WorldCodeAiFailedRetry",
      children: [(0, hF.jsx)("button", {
        ...Zb.f,
        className: "WorldCodeAiSecondaryButton",
        onClick: AF,
        children: "Ask the AI to try again"
      }), (0, hF.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "It asks the AI once more."
      })]
    })]
  })
}

function lR(FF) {
  let {
    lookups: WF,
    words: SF,
    defaultOpen: CF,
    isElsewhere: AF
  } = FF;
  return (0, hF.jsxs)(bW, {
    title: ki,
    isCalm: !0,
    isElsewhere: AF,
    defaultOpen: CF,
    children: [SF && (0, hF.jsx)("p", {
      children: SF
    }), (0, hF.jsx)("p", {
      children: "It looks at:"
    }), (0, hF.jsx)("ul", {
      className: "WorldCodeAiLookupList",
      children: WF.map(((FF, WF) => (0, hF.jsx)("li", {
        children: bu(FF)
      }, WF)))
    })]
  })
}

function Fi(FF) {
  return `Add this to my World Code:\n\`\`\`js\n${FF.join("\n").replace(/\s*$/,"\n")}\`\`\``
}

function Wi(FF) {
  const WF = Math.ceil(FF / 1e3);
  return `${Math.floor(WF/60)}:${String(WF%60).padStart(2,"0")}`
}

function Si(FF) {
  return "waiting" === FF.phase ? "You're next" : FF.playingThrough && "writing" !== FF.phase && "screening" !== FF.phase ? "Playing your code through as each player\u2026" : null
}

function Ci(FF) {
  var WF;
  let {
    busy: SF
  } = FF;
  const CF = (AF = SF.phase, bW = null !== (WF = SF.reasoningChars) && void 0 !== WF ? WF : 0, "screening" === AF ? 3 : "writing" === AF ? 2 : "thinking" === AF && bW >= 400 ? 1 : 0);
  var AF, bW;
  return (0, hF.jsx)("ol", {
    className: "WorldCodeAiSteps",
    children: OP.map(((FF, WF) => (0, hF.jsx)("li", {
      className: uF()(WF < CF && "WorldCodeAiStep-done", WF === CF && "WorldCodeAiStep-current"),
      children: WF < CF ? `\u2713 ${FF}` : FF
    }, FF)))
  })
}
const Ai = (0, CF.memo)((function(FF) {
    var WF, SF, AF, eF, tW, aW, kW, qW, VF, NF, DF, LF, mW;
    let {
      files: OF,
      activePath: xW,
      canEdit: ZF,
      errors: oF,
      errorCount: YF,
      applyFiles: MF,
      submit: cW,
      testRun: GF,
      close: zW,
      goToLine: IF,
      target: fF,
      chatKey: yW,
      historyKey: sF,
      openWorldCode: nF,
      readWorldCode: HF,
      viewChunk: KF,
      viewGameState: wF,
      openTarget: XF,
      isLoaded: UF = !0,
      draft: BF,
      onDraftUsed: jW,
      selection: vW,
      onSelectionUsed: JF
    } = FF;
    const pF = fF.codeBlock,
      FW = fF.key,
      WW = function(FF) {
        let WF = NR.get(FF);
        return WF || (WF = {
          entries: [],
          nextId: 1,
          dismissedErrorCounts: new Map
        }, NR.set(FF, WF)), WF
      }(yW),
      [CW, AW] = (0, CF.useState)((() => WW.entries)),
      uW = (0, CF.useRef)(!0),
      hW = (0, CF.useCallback)((FF => {
        const WF = "function" === typeof FF ? FF : () => FF;
        uW.current ? AW(WF) : WW.setEntries ? WW.setEntries(WF) : WW.entries = WF(WW.entries)
      }), [WW]);
    (0, CF.useEffect)((() => (uW.current = !0, WW.setEntries = AW, () => {
      uW.current = !1, WW.setEntries === AW && (WW.setEntries = void 0)
    })), [WW]);
    const [bS, dW] = (0, CF.useState)(null), [PW, RW] = (0, CF.useState)([]), [iS, eW] = (0, CF.useState)(!1), [EW, QW] = (0, CF.useState)([]), [rS, gS] = (0, CF.useState)(!1), [tS, TW] = (0, CF.useState)(!1), [aS, kS] = (0, CF.useState)(null), [qS, VW] = (0, CF.useState)(!1), NW = (0, CF.useRef)("settings"), [DW, LW] = (0, CF.useState)(null), mS = (0, CF.useRef)(function() {
      try {
        var FF;
        const WF = JSON.parse(null !== (FF = localStorage.getItem(GP)) && void 0 !== FF ? FF : "{}");
        return "object" !== typeof WF || null === WF ? {} : Object.fromEntries(Object.entries(WF).filter((FF => {
          let [, WF] = FF;
          return Array.isArray(WF) && WF.every((FF => "number" === typeof FF))
        })))
      } catch {
        return {}
      }
    }()), [OW, xS] = (0, CF.useState)(sb), ZW = (0, CF.useRef)(OW);
    ZW.current = OW;
    const oW = OW && ZF,
      YW = (0, CF.useRef)(!1),
      [MW, cS] = (0, CF.useState)(null),
      [GW, zS] = (0, CF.useState)(""),
      [IW, fW] = (0, CF.useState)([]),
      [yS, sW] = (0, CF.useState)(null),
      [nW, HW] = (0, CF.useState)(new Set),
      [KW, wW] = (0, CF.useState)(null !== (WF = WW.dismissedErrorCounts.get(fF.key)) && void 0 !== WF ? WF : 0),
      [XW, UW] = (0, CF.useState)(!1),
      [BW, jS] = (0, CF.useState)(Date.now),
      vS = (0, CF.useRef)(null),
      JW = (0, CF.useRef)(null),
      pW = (0, CF.useRef)([]),
      [lW, FS] = (0, CF.useState)(0),
      [WS, SS] = (0, CF.useState)(null),
      AS = (0, tP.p)(yW),
      uS = null !== WS && void 0 !== WS ? WS : null === AS || void 0 === AS ? void 0 : AS.entryId,
      hS = CW.find((FF => FF.id === uS)),
      bC = (null === hS || void 0 === hS ? void 0 : hS.target.key) === fF.key && (null !== WS || void 0 === (null === AS || void 0 === AS ? void 0 : AS.endedAt)),
      dS = (FF, WF) => {
        const SF = setTimeout((() => {
          pW.current = pW.current.filter((FF => FF !== SF)), FS(pW.current.length), FF()
        }), WF);
        pW.current.push(SF), FS(pW.current.length)
      },
      PS = () => {
        for (const FF of pW.current) clearTimeout(FF);
        pW.current = [], FS(0), SS(null)
      },
      RS = (0, CF.useRef)(null),
      iC = (0, CF.useRef)(null),
      eS = () => WW.nextId++,
      ES = (0, CF.useRef)(0),
      QS = (0, CF.useRef)(OF);
    QS.current = OF;
    const rC = (0, CF.useCallback)((FF => {
        null === FF || void 0 === FF || FF.focus()
      }), []),
      gC = (0, CF.useRef)(YF);
    gC.current = YF;
    const tC = (0, CF.useRef)(IW);
    tC.current = IW;
    const TS = (0, CF.useRef)(CW.length);
    (0, CF.useEffect)((() => {
      const FF = RS.current;
      if (!FF) return;
      if (iS) return void FF.scrollTo({
        top: 0
      });
      if (aS) return;
      const WF = CW[CW.length - 1],
        SF = (null === WF || void 0 === WF ? void 0 : WF.target.key) === FW;
      CW.length > TS.current && "assistant" === (null === WF || void 0 === WF ? void 0 : WF.role) && !WF.isNotice && SF && (WW.heldAnswerId = WF.id), TS.current = CW.length;
      const CF = void 0 !== WF && SF && WF.id === WW.heldAnswerId && "offered" === WF.status && void 0 === WF.trial,
        AF = FF.querySelectorAll(".WorldCodeAiEntry"),
        uF = AF[AF.length - 1];
      if (CF && uF) {
        var hF;
        const SF = FF.getBoundingClientRect().top,
          CF = WF => FF.scrollTop + WF.getBoundingClientRect().top - SF;
        let AF = CF(uF);
        const bW = uF.querySelector(".WorldCodeAiDiff-added, .WorldCodeAiDiff-removed"),
          dF = uF.querySelector(".WorldCodeAiChangeHeader"),
          PF = uF.querySelector(".WorldCodeAiChangeActions-sticky");
        if (null !== (hF = WF.warnings) && void 0 !== hF && hF.length && bW && dF && PF) {
          const WF = uF.querySelector(".WorldCodeAiDiff-marked"),
            SF = bW.getBoundingClientRect().height,
            hF = WF ? CF(WF) + 2 * SF + PF.offsetHeight - FF.clientHeight : CF(bW) + 3 * SF + PF.offsetHeight - FF.clientHeight;
          AF = Math.max(AF, Math.min(hF, WF ? CF(WF) - SF : CF(dF)))
        } else if (dF && PF) {
          const WF = uF.querySelectorAll(".WorldCodeAiChangeWhy li"),
            SF = WF[WF.length - 1];
          if (SF) {
            const WF = CF(SF) + SF.getBoundingClientRect().height + PF.offsetHeight - FF.clientHeight;
            AF = Math.max(AF, Math.min(WF, CF(dF)))
          }
        }
        FF.scrollTo({
          top: AF
        })
      } else FF.scrollTo({
        top: FF.scrollHeight
      })
    }), [WW, CW, bS, iS, FW, aS]), (0, CF.useEffect)((() => {
      WW.entries = CW, WW.dismissedErrorCounts.set(fF.key, KW)
    }), [WW, CW, KW, fF.key]), (0, CF.useEffect)((() => () => {
      var FF;
      null === (FF = vS.current) || void 0 === FF || FF.abort(), PS()
    }), []), (0, CF.useEffect)((() => {
      var FF;
      BF && (BF.send ? UF && (null === jW || void 0 === jW || jW(), KS.current(BF.text, BF.text, {
        check: !1,
        useFree: !1
      })) : (zS(BF.text), null === (FF = iC.current) || void 0 === FF || FF.focus(), null === jW || void 0 === jW || jW()))
    }), [BF, jW, UF]), (0, CF.useEffect)((() => function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      const WF = setTimeout((() => {
        SR(FF)
      }), 1e3);
      return () => {
        clearTimeout(WF)
      }
    }(pF)), [pF]), (0, CF.useEffect)((() => {
      let FF = !0;
      LR.list(sF).then((WF => {
        FF && RW(WF)
      })).catch((FF => {
        console.error("World Code AI: couldn't read the version history", FF)
      }));
      const WF = LR.watch(sF, RW);
      return () => {
        FF = !1, WF()
      }
    }), [sF]), (0, CF.useEffect)((() => {
      let FF = !0;
      mi.list(sF).then((WF => {
        FF && QW(WF)
      })).catch((FF => {
        console.error("World Code AI: couldn't read the notes about the game", FF)
      }));
      const WF = mi.watch(sF, QW);
      return () => {
        FF = !1, WF()
      }
    }), [sF]);
    const aC = null !== (SF = null === (AF = CW.findLast((FF => FF.target.key === fF.key))) || void 0 === AF ? void 0 : AF.retryAt) && void 0 !== SF ? SF : 0,
      kC = eu(BW),
      qC = null !== bS || aC > BW || kC > BW;
    (0, CF.useEffect)((() => {
      if (!qC) return;
      const FF = setInterval((() => {
        jS(Date.now())
      }), 1e3);
      return () => {
        clearInterval(FF)
      }
    }), [qC]);
    const VS = YF > KW && oF.length > 0 ? oF[oF.length - 1] : null,
      NS = (0, CF.useMemo)((() => VS ? function(FF, WF) {
        var SF;
        let CF;
        for (const [AF, uF] of Object.entries(WF)) {
          const {
            text: WF,
            line: SF
          } = eb(FF, uF);
          if (void 0 !== SF) {
            if (CF) return eb(FF);
            CF = {
              text: WF,
              path: AF,
              line: SF
            }
          }
        }
        return null !== (SF = CF) && void 0 !== SF ? SF : eb(FF)
      }(VS, OF) : {
        text: ""
      }), [VS, OF]),
      DS = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fF;
        const SF = eS();
        return eW(!1), gS(!1), hW((CF => [...CF, {
          ...FF,
          id: SF,
          target: WF
        }])), SF
      },
      LS = FF => FF.target.key === fF.key,
      mC = (FF, WF) => {
        hW((SF => SF.map((SF => SF.id === FF ? {
          ...SF,
          ...WF
        } : SF))))
      },
      OS = (FF, WF) => {
        mC(FF, {
          status: WF
        })
      },
      xC = Vh();

    function ZS(FF) {
      return !!Zh(qb.getState()) && (Kh().then((WF => {
        WF || FF()
      })), !0)
    }
    const oS = FF => {
        !qS && ZS(FF) || FF()
      },
      YS = async function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const {
          check: CF = void 0 === WF,
          about: AF = (null !== WF && void 0 !== WF ? WF : FF.trim()),
          planStep: uF,
          wordsOnly: hF = !1,
          asked: bW,
          failedEdits: dF,
          isAutoFix: PF = !1,
          autoFixRound: RF = 0,
          useFree: iW,
          retryOf: eF,
          continueFrom: QF,
          lookups: rW = [],
          lookupRound: tW = 0,
          worldCodeFiles: TF,
          viewedPaths: aW = [],
          lookupOf: kW,
          insertsInto: qW
        } = SF, VF = FF.trim();
        if ("" === VF || bS) return;
        const NF = null !== iW && void 0 !== iW ? iW : qS && !PF && void 0 === eF && void 0 === QF;
        if (!NF && fR(SF) && ZS((() => {
            zC.current(FF, WF, SF)
          }))) return;
        const DF = null !== qW && void 0 !== qW ? qW : xW;
        void 0 === iW && NF && VW(!1), PS();
        const LF = Rh.activeKey(),
          mW = NF ? null : LF,
          OF = null !== mW,
          YF = null !== LF && NF,
          MF = !mW && !NF && qb.isAnswering(),
          cW = void 0 === eF ? -1 : ((FF, WF) => {
            for (let SF = FF.findIndex((FF => FF.id === WF)) - 1; SF >= 0; SF--)
              if ("user" === FF[SF].role) return SF;
            return -1
          })(CW, eF),
          GF = (cW < 0 ? CW : CW.slice(0, cW)).filter((FF => !FF.isNotice && !FF.leftOut && LS(FF))).slice(-4).map((FF => ({
            role: FF.role,
            text: FF.question ? `${FF.text}\n${FF.question.question}` : FF.text
          }))),
          zW = void 0 === WF,
          fF = void 0 === bW ? void 0 === WF ? VF : void 0 : null !== bW && void 0 !== bW ? bW : void 0,
          yW = void 0 !== eF && void 0 !== QF,
          sF = yW ? CW.find((FF => FF.id === eF)) : void 0;
        let HF;
        if (yW) HF = cW >= 0 ? CW[cW].id : -1;
        else if (void 0 !== kW && cW < 0) HF = kW;
        else if (cW >= 0) HF = CW[cW].id, hW((FF => FF.filter((FF => FF.id !== eF)).map((FF => FF.id === HF ? {
          ...FF,
          isNotice: void 0
        } : FF))));
        else {
          const FF = PF && RF > 0;
          HF = DS({
            role: "user",
            text: FF ? VF : null !== WF && void 0 !== WF ? WF : VF,
            changes: [],
            status: "offered",
            about: AF,
            planStep: uF,
            ...fF ? {
              asked: fF
            } : {},
            ...FF ? {
              logTitle: "The AI's code had an error, so it was sent back to the AI to fix"
            } : {}
          })
        }
        const KF = {
            lookups: rW,
            lookupRound: tW,
            worldCodeFiles: TF,
            viewedPaths: aW
          },
          wF = {
            retry: VF,
            retryShown: WF,
            retryOptions: {
              check: CF,
              about: AF,
              planStep: uF,
              wordsOnly: hF,
              useFree: NF,
              asked: bW,
              failedEdits: dF,
              isAutoFix: PF,
              autoFixRound: RF,
              insertsInto: qW,
              ...KF
            }
          },
          UF = new AbortController;
        vS.current = UF;
        const BF = ZW.current ? "direct" : "offer";
        var jW, vW, JF, lF, FW;
        try {
          var WW;
          const FF = Date.now(),
            SF = VF.startsWith(BR),
            bW = null === mW || void 0 === mW ? void 0 : mW.model.name;
          jS(FF), dW(MF ? {
            phase: "thinking",
            startedAt: FF,
            playingThrough: SF,
            isSuperBot: !0
          } : {
            phase: "checking",
            startedAt: FF,
            playingThrough: SF,
            keyModel: bW
          });
          const iW = FF => {
              mC(HF, {
                isNotice: !0
              }), DS({
                role: "assistant",
                text: "personalInfo" === FF ? "Please don't share personal details like names, addresses or schools. Ask again without them." : KR,
                changes: [],
                status: "offered",
                isNotice: !0
              })
            },
            LF = async () => {
              if (!CF && !mW) return VF;
              const FF = Date.now();
              jS(FF), dW({
                phase: "checking",
                startedAt: FF,
                playingThrough: SF,
                keyModel: bW
              });
              const {
                safety: WF,
                request: AF
              } = await async function(FF, WF) {
                let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const CF = await kh(FF, WF, SF),
                  AF = EA(FF);
                if ("unsafe" !== CF || AF === FF) return {
                  safety: CF,
                  request: FF
                };
                const uF = await kh(AF, WF, !0);
                return "unchecked" === uF ? {
                  safety: CF,
                  request: FF
                } : {
                  safety: uF,
                  request: AF
                }
              }(VF, UF.signal, OF);
              return "unchecked" === WF && mW ? (DS({
                role: "assistant",
                text: "",
                changes: [],
                status: "offered",
                isNotice: !0,
                ...wF,
                keyNotice: {
                  notice: "unchecked",
                  model: mW.model.name,
                  company: ou(mW.provider, mW.baseUrl, !0)
                }
              }), null) : "personalInfo" === WF || "unsafe" === WF ? (iW(WF), null) : AF
            };
          let xW = MF ? VF : await LF();
          if (null === xW) return;
          const fF = TF ? {
            ...QS.current,
            ...TF
          } : QS.current;
          let bS = {
            request: xW,
            files: fF,
            activePath: DF,
            errors: oF.slice(-5),
            history: GF,
            codeBlock: pF,
            failedEdits: dF,
            canAsk: zW,
            lookups: rW,
            canLookUp: tW < 3 && !hF,
            canChangeWorldCode: FC(BF),
            looksUpDocs: OF,
            about: pF ? void 0 : {
              notes: EW,
              outline: (FW = SW(fF, new Set(ZR().callbackNames())), [FW.callbacks.length > 0 ? `Callbacks: ${FW.callbacks.join(", ")}` : "", FW.commands.length > 0 ? `Commands: ${FW.commands.join(", ")}` : "", FW.functions.length > 0 ? `Functions: ${FW.functions.join(", ")}` : ""].filter((FF => "" !== FF)).join("\n")),
              canRemember: EW.length < 8
            }
          };
          const RW = new Map,
            iS = FF => {
              var WF;
              const SF = `${FF.format} ${FF.nativeTools}`,
                CF = null !== (WF = RW.get(SF)) && void 0 !== WF ? WF : uA(ZR(), bS, FF);
              return RW.set(SF, CF), CF
            },
            eW = FF => iS(XA(FF));
          let QW = CA(bS),
            rS = 0,
            gS = null;
          const tS = async () => {
            const WF = eu();
            var CF, AF;
            WF > Date.now() && (jS(Date.now()), dW({
              phase: "waiting",
              startedAt: FF,
              until: WF,
              playingThrough: SF
            }), await (CF = WF - Date.now(), AF = UF.signal, new Promise(((FF, WF) => {
              const SF = setTimeout(FF, CF);
              AF.addEventListener("abort", (() => {
                clearTimeout(SF), WF(new DOMException("The World Code AI request was stopped", "AbortError"))
              }), {
                once: !0
              })
            }))));
            const uF = Date.now();
            return jS(uF), dW({
              phase: "thinking",
              startedAt: uF,
              playingThrough: SF
            }), async function(FF) {
              var WF, SF;
              let CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const AF = Date.now(),
                uF = new AbortController,
                hF = () => {
                  uF.abort()
                };
              null !== (WF = CF.signal) && void 0 !== WF && WF.aborted && hF(), null === (SF = CF.signal) || void 0 === SF || SF.addEventListener("abort", hF, {
                once: !0
              });
              const bW = (0, gW.e)(3e4, uF.signal);
              let dF = !1;
              try {
                const WF = await bh(KA, ah(UA(FF, KA)), bW.signal, (FF => {
                  if (!dF) {
                    if (th(FF.answer)) return dF = !0, void hF();
                    var WF;
                    (!0 === FF.isCalling || Tu(FF.answer)) && (null === (WF = CF.onProgress) || void 0 === WF || WF.call(CF, FF))
                  }
                }), CF.tools);
                if (hu(WF) && !th(WF.answer)) {
                  const SF = !1 !== CF.canNudge ? await gh(KA, ah(UA(FF, KA)), WF, uF.signal, (FF => {
                    if (!dF) {
                      if (th(FF.answer)) return dF = !0, void hF();
                      var WF;
                      (!0 === FF.isCalling || Tu(FF.answer)) && (null === (WF = CF.onProgress) || void 0 === WF || WF.call(CF, FF))
                    }
                  }), CF.tools, 3e4) : WF;
                  if (!th(SF.answer)) return {
                    ...SF,
                    ms: Date.now() - AF
                  }
                }
              } catch (iW) {
                var PF;
                if (null !== (PF = CF.signal) && void 0 !== PF && PF.aborted) throw iW;
                dF || console.warn(`World Code AI: ${KA.name} couldn't be reached`, iW)
              } finally {
                var RF;
                bW.clear(), null === (RF = CF.signal) || void 0 === RF || RF.removeEventListener("abort", hF)
              }
              return {
                ...await Eu(FF, CF),
                ms: Date.now() - AF
              }
            }(eW, {
              signal: UF.signal,
              tools: QW,
              canNudge: !hF,
              onProgress: FF => {
                const WF = Date.now(),
                  CF = FF.model !== gS;
                if (gS = FF.model, !CF && WF - rS < 150) return;
                rS = WF;
                const AF = function(FF, WF) {
                  const SF = function(FF) {
                      return FF.replace(/<think>[\s\S]*?(?:<\/think>|$)/g, "")
                    }(FF),
                    CF = mR.exec(SF);
                  let AF = CF ? SF.slice(0, CF.index) : SF;
                  AF = AF.replace(/<[\w_]*$/, "").trim();
                  const uF = SF.trimEnd(),
                    hF = CS(SF, WF).filter((FF => !/^<(?:tool_call|function=)/.test(FF.source) || /<\/(?:tool_call|invoke|function)>\s*$/.test(FF.source) || !uF.endsWith(FF.source.trimEnd()))),
                    bW = hF.flatMap((FF => {
                      var WF;
                      const SF = null === (WF = FF.args.why) || void 0 === WF ? void 0 : WF.trim();
                      return SF ? [SF.charAt(0).toUpperCase() + SF.slice(1)] : []
                    }));
                  return {
                    text: AF,
                    whys: [...new Set(bW)],
                    isWritingCode: null !== CF,
                    calls: hF.length
                  }
                }(FF.answer, wA(FF.model));
                dW({
                  phase: "" !== AF.text || AF.isWritingCode ? "writing" : "thinking",
                  startedAt: uF,
                  playingThrough: SF,
                  reasoningChars: FF.reasoningChars,
                  model: FF.model
                })
              }
            })
          }, TW = (lF = null === (WW = qb.getState().status) || void 0 === WW ? void 0 : WW.provider, gb[null !== lF && void 0 !== lF ? lF : "ovh"]), aS = FF => {
            JW.current = null, mC(HF, {
              isNotice: !0
            }), DS({
              role: "assistant",
              text: "unsafe" === FF ? "That answer didn't pass Bloxd's safety check, so it isn't shown. Try again, or ask in a different way." : "Bloxd's safety check couldn't look at that answer, so it isn't shown. Try again in a minute.",
              changes: [],
              status: "offered",
              isNotice: !0,
              ...wF
            })
          }, kS = async () => {
            var FF;
            const WF = Date.now();
            jS(WF), dW({
              phase: "thinking",
              startedAt: WF,
              playingThrough: SF,
              isSuperBot: !0
            });
            const AF = cW < 0 ? CW : CW.slice(0, cW),
              uF = AF.findLastIndex((FF => "assistant" === FF.role && !FF.isNotice && !FF.leftOut && LS(FF))),
              hF = AF[uF],
              bW = AF.findIndex((FF => FF.id === kW)),
              PF = AF.slice(0, Math.max(0, uF)).findLastIndex((FF => "user" === FF.role)),
              RF = void 0 === eF && (void 0 === kW || bW >= 0 && bW < uF && bW >= PF) && "object" === typeof(null === hF || void 0 === hF ? void 0 : hF.answeredBy) && !0 === hF.answeredBy.isSuperBot,
              EF = XA(TW),
              QF = uA(ZR(), bS, EF, {
                docsInTurn: !0
              }),
              rW = CA(bS, EF.format),
              gW = "deepseek" === EF.format ? {
                carried: uA(ZR(), bS, EF, {
                  docsInTurn: !0,
                  carried: !0
                }).at(-1),
                toolResults: [...(null !== dF && void 0 !== dF ? dF : []).flatMap((FF => FF.call ? [{
                  ...FF.call,
                  text: yA(FF)
                }] : [])), ...(null !== (FF = bS.lookups) && void 0 !== FF ? FF : []).flatMap((FF => FF.call ? [{
                  ...FF.call,
                  text: `${FF.about}:\n${FF.text}`
                }] : []))].slice(-20)
              } : {};
            let tW;
            try {
              tW = await async function(FF, WF, SF, CF, AF) {
                var uF;
                let {
                  carried: hF,
                  toolResults: bW,
                  request: dF,
                  code: PF
                } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                const RF = Date.now(),
                  iW = "system" === (null === (uF = WF[0]) || void 0 === uF ? void 0 : uF.role) ? WF[0].content : "",
                  eF = JSON.stringify(uu(SF)),
                  EF = null !== CF && CF.system === iW && CF.toolsJson === eF,
                  QF = null !== hF && void 0 !== hF ? hF : WF[WF.length - 1],
                  rW = bW && bW.length > 0 ? {
                    toolResults: bW
                  } : {},
                  gW = {
                    ...dF ? {
                      request: dF
                    } : {},
                    ...PF ? {
                      code: PF
                    } : {}
                  };
                let tW = await Gh(cb(EF ? {
                  chatId: CF.chatId,
                  messages: [QF],
                  ...rW,
                  ...gW
                } : {
                  messages: WF,
                  toolsJson: eF,
                  ...gW
                }), AF);
                if ("newChat" === tW.outcome && EF && (tW = await Gh(cb({
                    messages: WF,
                    toolsJson: eF,
                    ...gW
                  }), AF)), "status" in tW && qb.setStatus(tW.status), "refused" === tW.outcome) return {
                  kind: "refused",
                  safety: tW.safety
                };
                if ("blocked" === tW.outcome) return {
                  kind: "blocked",
                  safety: tW.safety
                };
                if ("answered" !== tW.outcome) return {
                  kind: "newChat" === tW.outcome ? "failed" : tW.outcome
                };
                const TF = du(FF, tW.answer, tW.reasoning, tW.toolCalls, tW.isCutShort);
                return null === TF ? {
                  kind: "failed"
                } : {
                  kind: "answered",
                  reply: {
                    ...TF,
                    ms: Date.now() - RF
                  },
                  chat: {
                    chatId: tW.chatId,
                    system: iW,
                    toolsJson: eF
                  }
                }
              }(TW, QF, rW, RF ? JW.current : null, UF.signal, {
                ...gW,
                ...CF ? {
                  request: VF
                } : {},
                code: FA(bS, EF.format)
              })
            } catch (qW) {
              if (UF.signal.aborted) throw qW;
              console.warn("AI Helper: Super Bot.xd couldn't be reached", qW), tW = {
                kind: "failed"
              }
            }
            if ("answered" === tW.kind) return JW.current = tW.chat, tW.reply;
            if ("refused" === tW.kind) return iW(tW.safety), "stopped";
            if ("blocked" === tW.kind) return aS(tW.safety), "stopped";
            JW.current = null, DW = "free";
            const TF = qb.getState(),
              aW = "unavailable" === tW.kind && Zh(TF);
            return aW && Kh(), {
              fallbackNotice: aW ? "You don't have any Super Bot.xd usage left, so Bot.xd is answering this one." : Mh(tW.kind, TF.status)
            }
          };
          let qS, VW, NW, DW = NF || Rh.getState().keys.length > 0 ? "free" : void 0,
            LW = !1;
          if (mW) {
            const WF = {
              format: Wu(mW.model.callFormat),
              nativeTools: !0 === mW.model.nativeTools
            };
            VW = WF.format;
            const CF = [...iS(WF)];
            var AW;
            if (void 0 !== QF) "" !== QF && CF.push({
              role: "assistant",
              content: QF
            }), CF.push({
              role: "user",
              content: (JF = null === sF || void 0 === sF || null === (AW = sF.cutShort) || void 0 === AW ? void 0 : AW.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before it." + (JF ? ` Your ${JF.name} call${JF.path?` for ${JF.path}`:""} was cut off part way and didn't come through: make that call again in full.` : ""))
            });
            dW({
              phase: "thinking",
              startedAt: FF,
              playingThrough: SF,
              keyModel: bW
            });
            const AF = WF => {
              dW({
                phase: "" === WF.answer ? "thinking" : "writing",
                startedAt: FF,
                playingThrough: SF,
                keyModel: bW
              })
            };
            try {
              const FF = await Eh(mW, CF, {
                signal: UF.signal,
                onProgress: AF,
                tools: QW,
                continueFrom: QF
              });
              qS = FF, DW = {
                model: mW.name ? `${mW.name} \xb7 ${mW.model.name}` : mW.model.name
              }, FF.isCutShort && (NW = function(FF, WF, SF) {
                return {
                  request: SF,
                  written: WF.written,
                  cutCall: WF.cutCall,
                  keyId: FF.id,
                  modelId: FF.model.id
                }
              }(mW, FF, VF))
            } catch (PW) {
              if (!(PW instanceof Yu) || UF.signal.aborted) throw PW;
              return void MS(PW, mW, HF, wF)
            }
          } else {
            const FF = MF ? await kS() : null;
            if ("stopped" === FF) return;
            if (FF && !("fallbackNotice" in FF)) {
              var uW;
              qS = FF, VW = null !== (uW = TW.callFormat) && void 0 !== uW ? uW : "simple", DW = {
                model: rb,
                isSuperBot: !0
              }, LW = !0
            } else {
              if (MF) {
                const FF = await LF();
                if (null === FF) return;
                FF !== xW && (xW = FF, bS = {
                  ...bS,
                  request: FF
                }, QW = CA(bS))
              }
              let WF;
              FF && "fallbackNotice" in FF && DS({
                role: "assistant",
                text: FF.fallbackNotice,
                changes: [],
                status: "offered",
                isNotice: !0
              });
              try {
                WF = await tS()
              } catch (PW) {
                if (!(PW instanceof pA && "busy" === PW.reason)) throw PW;
                WF = await tS()
              }
              mS.current = function(FF, WF, SF) {
                  var CF;
                  return !Number.isFinite(SF) || SF <= 0 ? FF : {
                    ...FF,
                    [WF]: [...null !== (CF = FF[WF]) && void 0 !== CF ? CF : [], SF].slice(-10)
                  }
                }(mS.current, WF.model, WF.ms),
                function(FF) {
                  try {
                    localStorage.setItem(GP, JSON.stringify(FF))
                  } catch {}
                }(mS.current), qS = WF, VW = wA(WF.model)
            }
          }
          const OW = ZR(),
            xS = YC(qS.answer, VW, fF, DF, OW.callbackNames(), pF ? EF.b : void 0, BF, new Set([pC(fF, DF, pF), DF, ...aW, ...Object.keys(null !== TF && void 0 !== TF ? TF : {})].filter((FF => null !== FF))), OW.realName),
            ZW = hF ? {
              ...xS,
              changes: [],
              failedEdits: [],
              inPlace: !1,
              worldCode: [],
              plan: [],
              actions: []
            } : xS;
          if (!LW) {
            const FF = Date.now();
            jS(FF), dW({
              phase: "screening",
              startedAt: FF,
              playingThrough: SF,
              keyModel: bW
            });
            const WF = await cR(xW, ZW, UF.signal, (WF => {
              jS(Date.now()), dW({
                phase: "screening",
                startedAt: FF,
                playingThrough: SF,
                keyModel: bW,
                until: WF
              })
            }));
            if ("ok" !== WF) return void aS(WF)
          }
          const oW = function(FF) {
              let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pF;
              return FF.flatMap((FF => ai(OW, FF, WF && !(0, EF.c)(FF.path))))
            },
            YW = oW(ZW.changes),
            MW = "direct" === BF ? function(FF) {
              return FF.flatMap((FF => {
                var WF;
                return null !== (WF = Nb(FF)) && void 0 !== WF ? WF : []
              }))
            }(YW) : [],
            cS = MW.length > 0 ? {
              ...ZW,
              changes: ZW.changes.map((FF => ({
                ...FF,
                after: Ob(FF.after, MW)
              })))
            } : ZW,
            GW = cS.changes.filter((FF => pF && (0, EF.c)(FF.path))).map((FF => ({
              ...FF,
              path: (0, EF.g)(FF.path)
            }))),
            zS = cS.changes.filter((FF => !pF || !(0, EF.c)(FF.path))),
            IW = GW.length > 0 ? {
              ...cS,
              changes: zS,
              inPlace: cS.inPlace && zS.length > 0
            } : cS,
            yS = GW.length > 0 || MW.length > 0 ? oW(IW.changes) : YW,
            sW = yS.filter(QR),
            nW = IW.inPlace && ZF && sW.length > 0 && RF < 3 && !qS.isCutShort && !qS.hasCallsFromReasoning,
            HW = "direct" === BF && ZF,
            KW = IW.failedEdits.filter((FF => "unread" === FF.reason)),
            wW = !HW || hF || void 0 !== qW || pF ? [] : KW.flatMap((FF => null !== FF.path && void 0 !== FF.code ? [{
              path: FF.path,
              code: FF.code
            }] : [])),
            XW = FF => "unread" === FF.reason && wW.some((WF => WF.path === FF.path)),
            UW = IW.failedEdits.filter((FF => !XW(FF))),
            BW = KW.filter((FF => !XW(FF))),
            vS = FC(BF) && IW.worldCode.length > 0 && !hF && 0 === GW.length,
            pW = tW < 3 && !hF && !qS.isCutShort,
            lW = new Set([...QW.map((FF => FF.name)), ...BW.length > 0 ? ["view_file", "view_world_code"] : []]),
            FS = !pW || wW.length > 0 || GW.length > 0 || nW ? [] : IW.lookups.filter((FF => lW.has(FF.name))),
            WS = {
              request: xW,
              shown: WF,
              userEntryId: HF,
              options: {
                check: !1,
                about: AF,
                planStep: uF,
                wordsOnly: hF,
                useFree: NF,
                isAutoFix: PF,
                autoFixRound: RF,
                failedEdits: [...(null !== dF && void 0 !== dF ? dF : []).map(qi), ...BW],
                ...KF,
                lookupRound: tW + 1,
                lookupOf: HF,
                insertsInto: qW
              }
            },
            SS = 0 === IW.changes.length && 0 === IW.worldCode.length,
            AS = FS.length > 0 && ("direct" === BF || OF && SS && FS.every(RA)),
            uS = AS && SS && 0 === IW.notes.length,
            hS = zW ? IW.question : null,
            bC = qS.isCutShort ? IW.text.replace(/(<tool_call|<function=|<\|channel\||\{\s*"jsonrpc")[\s\S]*$/, "").trim() : IW.text,
            PS = qS.isCutShort && !NW ? "\n\nThe answer got too long and was cut off, so part of it is missing. Try asking for one thing at a time." : "",
            RS = UW.length > 0 && IW.changes.length > 0 && !qS.isCutShort ? "\n\nPart of this answer couldn't go in, so it isn't in the change. Ask again if something is missing." : "",
            iC = () => IW.changes.length > 0 ? "Here's a change for your code." : GW.length > 0 ? "This changes your World Code." : IW.worldCode.length > 0 ? "This needs World Code." : wW.length > 0 ? `I'll put it into ${wW.map((FF=>FF.path)).join(" and ")}.` : hS ? "Quick question before I build it:" : IW.plan.length > 0 ? "That's a big one, so here's a plan to build it a step at a time." : FS.length > 0 ? `I'll look at ${function(FF){var WF;const SF=FF.map(bu);return SF.length<=1?null!==(WF=SF[0])&&void 0!==WF?WF:"":`${SF.slice(0,-1).join(", ")} and ${SF[SF.length-1]}`}(FS)} first.` : IW.notes.length > 0 ? "Here's something to remember about your game." : IW.actions.length > 0 ? "Sure!" : qS.isCutShort ? "Sorry, that was too much for one answer." : "Sorry, I couldn't work that out. Try asking in a different way.",
            ES = {
              role: "assistant",
              text: (bC || iC()) + PS + RS,
              changes: IW.changes,
              status: "offered",
              warnings: yS,
              worldCode: IW.worldCode.length > 0 && !vS ? IW.worldCode : void 0,
              editedInPlace: IW.inPlace && !nW || void 0,
              failedEdits: UW.length > 0 ? UW : void 0,
              question: null !== hS && void 0 !== hS ? hS : void 0,
              askedFor: hS ? xW : void 0,
              note: IW.notes[0],
              plan: IW.plan.length > 0 ? IW.plan : void 0,
              noteStatus: IW.notes.length > 0 ? HW ? "pending" : "asked" : void 0,
              answeredBy: DW,
              oneOff: YF || void 0,
              cutShort: NW,
              byItself: HW || void 0,
              ...NW ? {
                retryShown: wF.retryShown,
                retryOptions: wF.retryOptions
              } : {},
              ...uS ? {
                logTitle: ki,
                isCalm: !0
              } : {},
              ...FS.length > 0 ? {
                lookups: {
                  lookups: FS,
                  followUp: WS
                },
                lookedAt: AS || void 0
              } : {}
            },
            rC = yW && void 0 !== eF ? (jW = eF, vW = ES, hW((FF => FF.map((FF => FF.id === jW ? {
              ...vW,
              id: jW,
              target: FF.target
            } : FF)))), jW) : DS(ES),
            gC = IW.inPlace && ZF && !nW && !qS.isCutShort && !qS.hasCallsFromReasoning,
            tC = gC && await US({
              id: rC,
              changes: IW.changes
            }, AF);
          !IW.inPlace || nW || tC || mC(rC, {
            editedInPlace: void 0
          });
          const TS = 0 === IW.changes.length && 0 === UW.length && 0 === wW.length && 0 === GW.length && 0 === IW.worldCode.length;
          if (HW && void 0 !== ES.note && ((tC || nW || TS) && !UF.signal.aborted ? qA({
              id: rC,
              note: ES.note,
              changes: [],
              status: "applied"
            }, !0) : gC && !UF.signal.aborted ? kA(rC, "declined") : kA(rC, "asked")), UF.signal.aborted) return void DS({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          nW && (mC(rC, {
            warningsSentBack: !0
          }), fW((FF => [{
            id: eS(),
            text: `Your change didn't go in, because the code wouldn't run at all: ${sW.join(" ")} Send the whole change again with that fixed.`,
            shown: "Fix this line",
            check: !1,
            isAutoFix: !0,
            autoFixRound: RF + 1
          }, ...FF]))), tC && yR(IW.changes, DF).forEach(((FF, WF) => {
            const SF = () => {
              DS({
                role: "assistant",
                text: sP(FF.path),
                changes: [],
                status: "offered",
                isNotice: !0,
                isCalm: !0
              }), IF(FF.path, FF.line)
            };
            0 === WF ? SF() : dS(SF, 1200 * WF)
          }));
          const aC = 0 === FS.length && IW.actions.some((FF => "exportGame" === FF.kind));
          ZF && aC && "direct" === BF ? JS(IW.changes.length > 0 && !tC) : ZF && (aC || GC(xW) && !pF) && mC(rC, {
            offerExport: !0
          });
          const kC = 0 === FS.length ? IW.actions.find((FF => "switchToWorldCode" === FF.kind)) : void 0,
            qC = IW.changes.length > 0 && !tC && ZF,
            VS = tC ? IW.changes.map((FF => ({
              path: FF.path,
              text: FF.before
            }))) : void 0,
            NS = GW.length > 0 && HW && !!XF,
            OS = NS && !qC;
          if (GW.length > 0) {
            const FF = DS({
              role: "assistant",
              text: "This is the part of the change that goes in World Code.",
              changes: GW,
              status: "offered",
              warnings: oW(GW, !1),
              answeredBy: DW,
              byItself: OS || void 0
            }, IP.g);
            NS && lS(FF, qC)
          }
          if ("stopped" === (AS ? await SC(FS, WS, {
              replaced: VS,
              signal: UF.signal
            }) : "none")) return void DS({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          wW.length > 0 && fW((FF => [...wW.map((FF => ({
            id: eS(),
            text: yi(xW, FF.path, FF.code),
            shown: "Put the code in",
            followUp: {
              check: !1,
              about: AF,
              planStep: uF,
              useFree: NF,
              lookupRound: tW,
              lookupOf: HF,
              insertsInto: FF.path
            },
            opensPath: FF.path,
            ...VS ? {
              replaced: VS,
              until: Date.now() + HR
            } : {}
          }))), ...FF]));
          const xC = HW && !!XF && pF && 0 === GW.length && (vS || "switchToWorldCode" === (null === kC || void 0 === kC ? void 0 : kC.kind) && !hF);
          if (xC && qC) hW((FF => FF.map((FF => FF.id === rC && IW.worldCode.length > 0 ? {
            ...FF,
            worldCode: IW.worldCode
          } : FF)))), DS({
            role: "assistant",
            text: wR(IW.worldCode.length > 0),
            changes: [],
            status: "offered",
            isNotice: !0
          });
          else if (xC) {
            const FF = IW.worldCode.join("\n\n"),
              WF = "switchToWorldCode" === (null === kC || void 0 === kC ? void 0 : kC.kind) ? kC.request : null;
            WC(vS ? function(FF, WF) {
              return `In a code block, they asked: "${FF}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never defined twice:\n\`\`\`js\n${WF.replace(/\s*$/,"")}\n\`\`\``
            }(xW, FF) : WF ? function(FF) {
              return `In a code block, they asked for this in World Code, which is open now: ${FF}`
            }(WF) : null, {
              check: !1,
              about: AF,
              useFree: NF,
              lookupOf: HF
            }, vS ? FF : void 0)
          }
          const ZS = !!nF && 0 === GW.length && !xC && ("switchToWorldCode" === (null === kC || void 0 === kC ? void 0 : kC.kind) || HW && IW.worldCode.length > 0);
          if (ZS) {
            const FF = "switchToWorldCode" === (null === kC || void 0 === kC ? void 0 : kC.kind) ? kC.request : null;
            pS(null !== FF && void 0 !== FF ? FF : IW.worldCode.length > 0 ? Fi(IW.worldCode) : "", {
              leavesChangeBehind: qC,
              hasWorldCodePart: IW.worldCode.length > 0
            })
          }
          if (tC && yS.length > 0 && RF < 3 && (!(ZS || NS || xC) || qC) && (mC(rC, {
              warningsSentBack: !0
            }), fW((FF => [{
              id: eS(),
              text: `Fix this in your change: ${yS.join(" ")}`,
              shown: 1 === yS.length ? "Fix this line" : "Fix these lines",
              check: !1,
              isAutoFix: !0,
              autoFixRound: RF + 1,
              replaced: VS,
              until: Date.now() + HR
            }, ...FF]))), tC && "direct" === BF && 0 === yS.length && 0 === UW.length && 0 === FS.length && 0 === wW.length && 0 === GW.length && !xC && !ZS) {
            const FF = yR(IW.changes, DF).length;
            AC(rC, RF, FF > 1 ? 1200 * (FF - 1) + 1500 : 0)
          }
        } catch (PW) {
          if (UF.signal.aborted) JW.current = null, DS({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          else {
            const FF = PW instanceof pA ? PW.reason : "failed";
            DS({
              role: "assistant",
              text: lA(FF),
              changes: [],
              status: "offered",
              isNotice: !0,
              ...wF,
              retryAt: "busy" === FF ? Date.now() + 6e4 : void 0
            }), jS(Date.now())
          }
        } finally {
          vS.current = null, dW(null)
        }
      }, MS = (FF, WF, SF, CF) => {
        const AF = function(FF, WF) {
          return "refused" === FF.problem ? null : {
            notice: FF.problem,
            model: WF.model.name,
            company: ou(WF.provider, WF.baseUrl, !0),
            isServer: "custom" === WF.provider,
            detail: FF.detail && Mu(FF.detail, WF.key)
          }
        }(FF, WF);
        if (!AF) return (FF => {
          mC(FF, {
            leftOut: !0
          })
        })(SF), void DS({
          role: "assistant",
          text: KR,
          changes: [],
          status: "offered",
          isNotice: !0
        });
        DS({
          role: "assistant",
          text: "",
          changes: [],
          status: "offered",
          isNotice: !0,
          ...CF,
          keyNotice: AF
        })
      }, cC = () => {
        const FF = GW.trim();
        if ("" === FF || bS && IW.length >= 3) return;
        const WF = qS && null !== IC;
        if (WF || !ZS((() => {
            GS.current()
          }))) {
          if (VW(!1), yS) return HS(KP(yS, FF), wP(yS, FF), {
            check: !0,
            useFree: WF
          }), sW(null), void zS("");
          if (bS || null === oC || void 0 === oC || !oC.question) {
            if (!bS) return zS(""), void YS(FF, void 0, {
              useFree: WF
            });
            IW.length < 3 && (fW([...IW, {
              id: eS(),
              text: FF,
              useFree: WF
            }]), zS(""))
          } else {
            var SF, CF;
            zS("");
            const AF = Yd(null !== (SF = oC.askedFor) && void 0 !== SF ? SF : "", oC.question.question, FF);
            YS(AF, FF, {
              check: !0,
              about: oC.askedFor,
              asked: `${null!==(CF=oC.askedFor)&&void 0!==CF?CF:""} ${FF}`,
              useFree: WF
            })
          }
        }
      }, GS = (0, CF.useRef)(cC);
    GS.current = cC;
    const zC = (0, CF.useRef)(YS);
    zC.current = YS;
    const IS = (0, CF.useRef)(DS);
    IS.current = DS;
    const fS = (0, CF.useRef)(null),
      [yC, sS] = (0, CF.useState)(null),
      nS = IW.filter((FF => void 0 === FF.followUp));

    function HS(FF, WF, SF) {
      if (bS) {
        if (IW.length < 3) {
          var CF;
          const AF = null !== (CF = SF.useFree) && void 0 !== CF ? CF : qS && null !== IC;
          AF && VW(!1), fW([...IW, {
            id: eS(),
            text: FF,
            shown: WF,
            ...SF,
            useFree: AF
          }])
        }
      } else YS(FF, WF, SF)
    }(0, CF.useEffect)((() => {
      var FF, WF, SF;
      const [CF, ...AF] = IW;
      if (bS || !CF || lW > 0) return;
      const uF = null === (FF = CF.followUp) || void 0 === FF ? void 0 : FF.lookupOf;
      if (void 0 !== uF && !CW.some((FF => FF.id === uF))) return void fW(AF);
      if (null === (WF = CF.replaced) || void 0 === WF ? void 0 : WF.some((FF => {
          var WF;
          let {
            path: SF,
            text: CF
          } = FF;
          return (null !== (WF = OF[SF]) && void 0 !== WF ? WF : "") === CF
        }))) {
        var hF;
        const FF = (null !== (hF = CF.until) && void 0 !== hF ? hF : 0) - Date.now();
        if (FF <= 0) return void fW(AF);
        const WF = setTimeout((() => {
          fW((FF => [...FF]))
        }), FF);
        return () => {
          clearTimeout(WF)
        }
      }
      if (void 0 !== CF.opensPath && CF.opensPath !== xW) {
        var bW;
        (null === (bW = fS.current) || void 0 === bW ? void 0 : bW.id) !== CF.id && (fS.current = {
          id: CF.id,
          until: Date.now() + 3e3
        }, IS.current({
          role: "assistant",
          text: sP(CF.opensPath),
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), IF(CF.opensPath, 1));
        const FF = fS.current.until - Date.now();
        if (FF > 0) {
          const WF = setTimeout((() => {
            fW((FF => [...FF]))
          }), FF);
          return () => {
            clearTimeout(WF)
          }
        }
      }
      const dF = null !== (SF = CF.followUp) && void 0 !== SF ? SF : {
        ...void 0 === CF.shown ? {} : {
          check: CF.check,
          wordsOnly: CF.wordsOnly,
          isAutoFix: CF.isAutoFix,
          autoFixRound: CF.autoFixRound
        },
        useFree: CF.useFree
      };
      fR(dF) && Zh(qb.getState()) ? yC !== CF.id && (sS(CF.id), Kh()) : (fW(AF), zC.current(CF.text, CF.shown, dF))
    }), [bS, IW, lW, OF, CW, xW, IF, xC, yC]);
    const KS = (0, CF.useRef)(HS);
    KS.current = HS, (0, CF.useEffect)((() => {
      if (vW) {
        var FF;
        if (null === JF || void 0 === JF || JF(), "change" === vW.action) return sW(vW), void(null === (FF = iC.current) || void 0 === FF || FF.focus());
        sW(null), KS.current(KP(vW), wP(vW), {
          check: !1,
          wordsOnly: "explain" === vW.action
        })
      }
    }), [vW, JF]);
    const wS = (FF, WF, SF) => {
        LR.add(sF, FF, WF, Date.now(), SF).then(RW).catch((FF => {
          console.error("World Code AI: couldn't keep a version of the code", FF)
        }))
      },
      XS = (0, CF.useRef)(new Set),
      US = async function(FF, WF) {
        let {
          tryAgainLater: SF = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const CF = QS.current;
        if (FF.changes.some((FF => {
            var WF;
            return (null !== (WF = CF[FF.path]) && void 0 !== WF ? WF : "") !== FF.before
          }))) return OS(FF.id, "stale"), !1;
        XS.current.add(FF.id);
        if (!await MF(FF.changes.map((FF => ({
            path: FF.path,
            text: FF.after
          })))).finally((() => {
            XS.current.delete(FF.id)
          }))) return SF || OS(FF.id, "stale"), !1;
        wS(function(FF) {
          const WF = FF.replace(/\s+/g, " ").trim();
          return `Before "${WF.length>200?`${WF.slice(0,200).trimEnd()}\u2026`:WF}"`
        }(WF), CF, function(FF) {
          const WF = [...new Set(FF.flatMap((FF => {
            var WF;
            return null !== (WF = FF.why) && void 0 !== WF ? WF : []
          })))];
          if (0 === WF.length) return;
          const SF = WF.map(((FF, WF) => 0 === WF ? FF.charAt(0).toUpperCase() + FF.slice(1) : FF.charAt(0).toLowerCase() + FF.slice(1))).join(", ");
          return SF.length > 400 ? `${SF.slice(0,400).trimEnd()}\u2026` : SF
        }(FF.changes)), OS(FF.id, "applied"), FF.isPartial && mC(FF.id, {
          changes: FF.changes
        });
        const AF = CW.find((WF => WF.id === FF.id && "pending" === WF.noteStatus));
        return AF && FF.isPartial ? kA(FF.id, "asked") : AF && qA({
          ...AF,
          status: "applied"
        }, !0), hW((WF => {
          var SF;
          const CF = null === (SF = WF.findLast((WF => "user" === WF.role && WF.id < FF.id))) || void 0 === SF ? void 0 : SF.planStep;
          return CF ? WF.map((FF => {
            var WF;
            return FF.id === CF.planId ? {
              ...FF,
              planDone: Math.max(null !== (WF = FF.planDone) && void 0 !== WF ? WF : 0, CF.index + 1)
            } : FF
          })) : WF
        })), ES.current = Date.now(), !0
      }, BS = !bS && 0 === lW && (0 === IW.length || IW[0].id === yC), jC = (0, CF.useRef)((() => Promise.resolve(!0)));
    jC.current = async () => {
      var FF;
      const WF = WW.pendingApply;
      if (!WF || WF.targetKey !== fF.key) return !0;
      const SF = CW.find((FF => FF.id === WF.entryId));
      if (!SF || "offered" !== SF.status) return WW.pendingApply = void 0, !0;
      const CF = null !== (FF = WF.picked) && void 0 !== FF ? FF : SF.changes,
        AF = UF && ZF && CF.every((FF => {
          var WF;
          return (null !== (WF = QS.current[FF.path]) && void 0 !== WF ? WF : "") === FF.before
        }));
      if (Date.now() > WF.until) return WW.pendingApply = void 0, AF && DS({
        role: "assistant",
        text: "That change couldn't go in. Press Apply to try again.",
        changes: [],
        status: "offered",
        isNotice: !0
      }), !0;
      if (!AF || XS.current.has(SF.id)) return !1;
      const uF = await US({
        id: SF.id,
        changes: CF,
        isPartial: void 0 !== WF.picked
      }, DC(SF.id), {
        tryAgainLater: !0
      });
      uF && WW.pendingApply === WF && (WW.pendingApply = void 0), uF && WF.byItself && mC(SF.id, {
        editedInPlace: !0
      });
      const hF = CF[0];
      return uF && hF && IF(hF.path, fP(hF.before, hF.after)), uF
    }, (0, CF.useEffect)((() => {
      var FF;
      if ((null === (FF = WW.pendingApply) || void 0 === FF ? void 0 : FF.targetKey) !== fF.key) return;
      const WF = setInterval((() => {
        jC.current().then((FF => {
          FF && clearInterval(WF)
        }))
      }), 250);
      return () => {
        clearInterval(WF)
      }
    }), [WW, fF.key, UF, OF]);
    const vC = (0, CF.useRef)((() => !0));
    vC.current = () => {
      const FF = WW.pendingInsert;
      if (!FF || FF.targetKey !== fF.key) return !0;
      if (Date.now() > FF.until) return WW.pendingInsert = void 0, DS({
        role: "assistant",
        text: void 0 === FF.code ? "World Code didn't open in time, so that wasn't asked here. Ask again." : "World Code didn't open in time, so the code block's World Code part isn't in. Here it is to add.",
        changes: [],
        status: "offered",
        worldCode: void 0 === FF.code ? void 0 : [FF.code],
        isNotice: void 0 === FF.code
      }), !0;
      const WF = Object.values(QS.current).some((FF => "" !== FF.trim()));
      return !(!UF || !ZF || !WF && Date.now() < FF.readyBy) && (WW.pendingInsert = void 0, fW((WF => [{
        id: eS(),
        text: FF.request,
        shown: "Put the code in",
        followUp: {
          ...FF.options,
          insertsInto: xW
        }
      }, ...WF])), !0)
    }, (0, CF.useEffect)((() => {
      var FF;
      if ((null === (FF = WW.pendingInsert) || void 0 === FF ? void 0 : FF.targetKey) !== fF.key) return;
      const WF = setInterval((() => {
        vC.current() && clearInterval(WF)
      }), 250);
      return () => {
        clearInterval(WF)
      }
    }), [WW, fF.key, UF, OF]);
    const JS = FF => {
        dS((() => {
          dF.gameBridge.send("sendChatMessage", {
            rb: "//export",
            channelName: null
          })
        }), Math.max(0, ES.current + 600 - Date.now())), DS({
          role: "assistant",
          text: FF ? "Saving your game with //export, without this change. Apply it and ask me to save again to keep it too." : "Saving your game with //export. The chat says when it's saved.",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !FF || void 0
        })
      },
      pS = (FF, WF) => {
        let {
          leavesChangeBehind: SF,
          hasWorldCodePart: CF
        } = WF;
        SF ? DS({
          role: "assistant",
          text: wR(CF),
          changes: [],
          status: "offered",
          isNotice: !0
        }) : (DS({
          role: "assistant",
          text: "Taking you to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), dS((() => {
          null === nF || void 0 === nF || nF(FF, !1)
        }), XR))
      },
      lS = (FF, WF) => {
        !WF && XF ? (DS({
          role: "assistant",
          text: "Moving to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), dS((() => {
          WW.pendingApply = {
            entryId: FF,
            targetKey: IP.g.key,
            until: Date.now() + VR,
            byItself: !0
          }, XF(IP.g)
        }), XR)) : DS({
          role: "assistant",
          text: "Apply this change first, then apply the World Code part.",
          changes: [],
          status: "offered",
          isNotice: !0
        })
      },
      FC = FF => pF && "direct" === FF && ZF && !!XF,
      WC = (FF, WF, SF) => {
        XF && (DS({
          role: "assistant",
          text: "Moving to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), dS((() => {
          null !== FF && (WW.pendingInsert = {
            targetKey: IP.g.key,
            request: FF,
            options: WF,
            code: SF,
            readyBy: Date.now() + 4e3,
            until: Date.now() + VR
          }), XF(IP.g)
        }), XR))
      },
      SC = async function(FF, WF) {
        var SF, CF, AF;
        let {
          replaced: uF,
          signal: hF
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const bW = await async function(FF, WF) {
          const SF = [];
          let CF = null;
          for (const uF of FF) {
            var AF;
            const FF = await iu(uF, WF);
            SF.push(uF.call ? {
              ...FF.result,
              call: uF.call
            } : FF.result), CF = null !== (AF = FF.worldCodeFiles) && void 0 !== AF ? AF : CF
          }
          return {
            results: SF,
            worldCodeFiles: CF
          }
        }(FF, {
          files: QS.current,
          docs: ZR(),
          errors: oF,
          viewChunk: null !== KF && void 0 !== KF ? KF : sR,
          viewGameState: null !== wF && void 0 !== wF ? wF : nR,
          readWorldCode: HF,
          fetchDocsPage: FF => async function(FF, WF, SF) {
            if ("" === FF.trim()) return `No url was given: give ${rW.k}, or a page it links to.`;
            const CF = TF(FF);
            if (null === CF) return FF.includes(rW.h) ? `${FF} is every page at once, too long to read: read ${rW.k}, then the page you need.` : `Only Bloxd's docs can be read: ${rW.k} and the pages it links to.`;
            const AF = `There is no docs page at ${FF}. ${rW.k} lists every page with its link.`,
              uF = `${FF} couldn't be read just now. Use get_docs instead.`,
              hF = (0, gW.e)(2e4, SF);
            let bW;
            try {
              var dF;
              const FF = await fetch(`${WF}${CF}`, {
                signal: hF.signal
              });
              if (404 === FF.status) return AF;
              if (!FF.ok) return console.warn("AI Helper: a docs page couldn't be read", CF, FF.status), uF;
              if (null !== (dF = FF.headers.get("content-type")) && void 0 !== dF && dF.startsWith("text/html")) return AF;
              bW = await FF.text()
            } catch (RF) {
              return !0 !== (null === SF || void 0 === SF ? void 0 : SF.aborted) && console.warn("AI Helper: a docs page couldn't be read", CF, RF), uF
            } finally {
              hF.clear()
            }
            const PF = (0, rW.x)(CF);
            return null !== PF && null === PF.part && bW.length > rW.e ? `${FF} is too long to read whole: read the part you need. Its parts start at ${QF.d}${(0,rW.v)(PF.name,0)}, and ${rW.k} says what each part has.` : bW.length <= 4e4 ? bW : (console.warn("AI Helper: a docs file is longer than any should be", CF, bW.length), `${bW.slice(0,4e4)}\n\n(The rest of this page is cut off.)`)
          }(FF, window.location.origin, hF)
        });
        if (null !== hF && void 0 !== hF && hF.aborted) return "stopped";
        const dF = bW.results,
          PF = FF.flatMap((FF => "view_file" === FF.name && void 0 !== FF.args.path && FF.args.path in QS.current ? [FF.args.path] : [])),
          RF = {
            ...WF.options,
            lookups: [...(null !== (SF = WF.options.lookups) && void 0 !== SF ? SF : []).map(qi), ...dF],
            worldCodeFiles: null !== (CF = bW.worldCodeFiles) && void 0 !== CF ? CF : WF.options.worldCodeFiles,
            viewedPaths: [...null !== (AF = WF.options.viewedPaths) && void 0 !== AF ? AF : [], ...PF]
          };
        return fW((FF => [{
          id: eS(),
          text: WF.request,
          shown: WF.shown,
          followUp: RF,
          ...uF ? {
            replaced: uF,
            until: Date.now() + HR
          } : {}
        }, ...FF])), "asked"
      }, CC = (FF, WF, SF) => {
        hW((CF => CF.map((CF => CF.id === FF ? {
          ...CF,
          trial: WF,
          trialErrors: null !== SF && void 0 !== SF ? SF : CF.trialErrors
        } : CF))))
      }, AC = function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        GF && (SS(FF), dS((() => {
          var SF;
          SS(null), vS.current || tC.current.length > 0 || null !== (SF = iC.current) && void 0 !== SF && SF.value.trim() || (wW(gC.current), GF({
            chatKey: yW,
            entryId: FF,
            autoFixRound: WF
          }))
        }), Math.max(SF, ES.current + 1500 - Date.now())))
      }, uC = () => {
        PS(), (0, tP.e)(yW)
      };
    (0, CF.useEffect)((() => {
      if (!UF || void 0 === (null === AS || void 0 === AS ? void 0 : AS.endedAt) || (null === hS || void 0 === hS ? void 0 : hS.target.key) !== fF.key) return void(void 0 === (null === AS || void 0 === AS ? void 0 : AS.endedAt) || hS || (0, tP.n)(yW));
      const FF = (0, tP.n)(yW);
      if (!FF) return;
      const WF = (0, tP.v)(FF);
      IS.current({
        role: "assistant",
        text: WF.text,
        changes: [],
        status: "offered",
        isNotice: !0,
        isCalm: 0 === FF.errors.length && void 0 !== FF.ranAt,
        logTitle: WF.title
      }), void 0 !== FF.ranAt && (0 !== FF.errors.length ? FF.autoFixRound >= 3 || (wW(gC.current), fW((WF => [{
        id: eS(),
        text: (0, tP.s)(FF.errors),
        shown: 1 === FF.errors.length ? "Fix the error" : "Fix these errors",
        check: !1,
        isAutoFix: !0,
        autoFixRound: FF.autoFixRound + 1
      }, ...WF]))) : CC(FF.entryId, "ask", gC.current))
    }), [AS, UF, hS, fF.key, yW]);
    const hC = async (FF, WF) => {
      if (mC(FF.id, {
          forgetStatus: WF ? "forgotten" : "kept"
        }), WF) try {
        for (const WF of null !== (SF = FF.forgetNotes) && void 0 !== SF ? SF : []) {
          var SF;
          QW(await mi.remove(sF, WF))
        }
      } catch (CF) {
        console.error("World Code AI: couldn't forget a note", CF), mC(FF.id, {
          forgetStatus: void 0
        })
      }
    }, bA = (0, CF.useCallback)((FF => FF.flatMap((FF => ai(ZR(), FF, pF)))), [pF]), dC = (0, CF.useRef)({}), PC = (0, CF.useRef)({}), RC = (0, CF.useRef)(Promise.resolve()), iA = (0, CF.useRef)([]), eC = (0, CF.useRef)(new Map), EC = (0, CF.useRef)(new Map), QC = (0, CF.useRef)(null), rA = () => {
      YW.current = !1, iA.current = [], eC.current = new Map, EC.current = new Map, QC.current = null, dC.current = {}, PC.current = {}, cS(null)
    }, gA = async () => {
      if (!MW) return;
      const FF = QS.current,
        WF = function(FF, WF, SF) {
          return Object.entries(WF).flatMap((WF => {
            var CF;
            let [AF, uF] = WF;
            const hF = SF[AF];
            if (void 0 === hF) return [];
            const bW = new Map(Id(null !== (CF = FF[AF]) && void 0 !== CF ? CF : "").map((FF => [FF.key, FF.value]))),
              dF = new Map(Id(uF).map((FF => [FF.key, FF.value])));
            let PF = hF;
            for (const [FF, SF] of bW) {
              var RF;
              const WF = Id(PF).find((WF => WF.key === FF));
              WF && WF.value !== SF && dF.get(FF) === WF.value && (PF = null !== (RF = fd(PF, WF, SF)) && void 0 !== RF ? RF : PF)
            }
            return PF === hF ? [] : [{
              path: AF,
              text: PF
            }]
          }))
        }(MW, dC.current, FF);
      if (WF.length > 0) {
        if (!await MF(WF)) return;
        wS(function(FF) {
          const WF = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).filter((WF => FF.includes(WF.name))).map((FF => ({
            name: FF.name,
            from: FF.to,
            to: FF.from
          })));
          return WF.length > 0 ? Hd(WF, "undoing") : 0 === FF.length ? "Before undoing settings" : `Before undoing settings: ${(FF.length>3?[...FF.slice(0,3),FF.length-3+" more"]:FF).join(", ")}`
        }(iA.current, [...eC.current.values()]), FF), ES.current = Date.now()
      }
      rA()
    }, tA = !pF && Object.values(OF).some((FF => Id(FF).length > 0)), TC = function(FF) {
      let {
        codeBlock: WF,
        hasSettings: SF,
        canEdit: AF
      } = FF;
      return (0, CF.useEffect)((() => {
        (0, bP.I)("aiNotes", !WF)
      }), [WF]), (0, CF.useEffect)((() => {
        (0, bP.I)("aiGameSettings", SF)
      }), [SF]), (0, CF.useEffect)((() => {
        (0, bP.I)("aiEdits", AF)
      }), [AF]), (0, dd.i)("aiHelperOverview")
    }({
      codeBlock: pF,
      hasSettings: tA,
      canEdit: ZF
    });
    (0, CF.useEffect)((() => {
      TC && (eW(!1), gS(!1), TW(!1), kS(null))
    }), [TC]);
    const aA = async FF => {
      const WF = lF(FF);
      return null === WF ? "Notes are only about your game, never personal details." : "ok" !== await kh(WF) ? "This note can't be saved. Notes are only about your game." : (QW(await mi.add(sF, WF)), null)
    }, kA = (FF, WF) => {
      mC(FF, {
        noteStatus: WF
      })
    }, qA = async (FF, WF) => {
      if (WF && void 0 !== FF.note)
        if (FF.changes.length > 0 && "offered" === FF.status) kA(FF.id, "pending");
        else {
          kA(FF.id, "checking");
          try {
            kA(FF.id, null === await aA(FF.note) ? "saved" : "refused")
          } catch (SF) {
            console.error("World Code AI: couldn't keep a note", SF), kA(FF.id, "asked")
          }
        }
      else kA(FF.id, "declined")
    }, VC = FF => {
      var WF;
      const SF = null === (WF = CW.find((WF => WF.id === FF))) || void 0 === WF ? void 0 : WF.target.key;
      return CW.findLast((WF => "user" === WF.role && WF.id < FF && WF.target.key === SF))
    }, NC = FF => {
      var WF;
      return null === (WF = VC(FF)) || void 0 === WF ? void 0 : WF.asked
    }, DC = FF => {
      var WF, SF;
      const CF = VC(FF);
      return null !== (WF = null !== (SF = null === CF || void 0 === CF ? void 0 : CF.about) && void 0 !== SF ? SF : null === CF || void 0 === CF ? void 0 : CF.text) && void 0 !== WF ? WF : "a change"
    }, LC = CW.filter(LS), mA = null === (eF = LC[LC.length - 1]) || void 0 === eF ? void 0 : eF.id, OC = null !== (tW = null === (aW = LC.findLast((FF => "user" === FF.role))) || void 0 === aW ? void 0 : aW.id) && void 0 !== tW ? tW : 0, xA = LC.length < CW.length, ZC = LC[LC.length - 1], oC = null !== ZC && void 0 !== ZC && null !== (kW = ZC.question) && void 0 !== kW && kW.allowOther && !bS ? ZC : void 0, MC = (0, CF.useRef)(!1), cA = () => {
      MC.current = !0, kS("settings")
    }, zA = () => {
      eW(!1), gS(!1), TW(!1), NW.current = null, LW(null), kS("addKey")
    }, {
      activeKey: IC,
      cutShortActions: fC,
      noticeActions: sC
    } = function(FF) {
      var WF;
      let {
        entries: SF,
        busy: CF,
        send: AF,
        onCheckKey: uF
      } = FF;
      const {
        active: hF
      } = ib(), bW = null === (WF = SF.findLast((FF => "assistant" === FF.role && !FF.isNotice))) || void 0 === WF ? void 0 : WF.id;
      return {
        activeKey: hF,
        cutShortActions: (FF, WF) => ({
          canFinish: !CF && FF === bW && (null === hF || void 0 === hF ? void 0 : hF.id) === WF.keyId && hF.model.id === WF.modelId,
          onFinish: () => {
            AF(WF.request, {
              retryOf: FF,
              continueFrom: WF.written
            })
          }
        }),
        noticeActions: (FF, WF, SF) => ({
          notice: SF.notice,
          onRetry: () => {
            AF(WF, {
              retryOf: FF
            })
          },
          onUseFree: () => {
            AF(WF, {
              useFree: !0,
              retryOf: FF
            })
          },
          onCheckKey: uF
        })
      }
    }({
      entries: LC,
      busy: !!bS,
      send: (FF, WF) => {
        let {
          useFree: SF,
          retryOf: CF,
          continueFrom: AF
        } = WF;
        const uF = CW.find((FF => FF.id === CF));
        return YS(FF, null === uF || void 0 === uF ? void 0 : uF.retryShown, {
          ...null === uF || void 0 === uF ? void 0 : uF.retryOptions,
          useFree: SF,
          retryOf: CF,
          continueFrom: AF
        })
      },
      onCheckKey: cA
    }), nC = xb(xC) ? xC.status : null, HC = null !== nC && void 0 !== nC && nC.isSuper ? nC.resetsAt : null, KC = (0, CF.useRef)({
      resetsAt: 0,
      count: 0,
      nextAt: 0
    });
    (0, CF.useEffect)((() => {
      if (null === HC) return;
      if (HC <= BW) {
        KC.current.resetsAt !== HC && (KC.current = {
          resetsAt: HC,
          count: 0,
          nextAt: 0
        });
        const FF = KC.current,
          WF = [15e3, 6e4, 24e4];
        if (FF.count > WF.length) return;
        let SF = !1;
        const CF = setTimeout((() => {
          var CF;
          FF.nextAt = Date.now() + (null !== (CF = WF[FF.count]) && void 0 !== CF ? CF : 0), FF.count++, qb.refresh().then((() => {
            SF || jS(Date.now())
          }))
        }), Math.max(0, FF.nextAt - Date.now()));
        return () => {
          SF = !0, clearTimeout(CF)
        }
      }
      const FF = setTimeout((() => {
        jS(Date.now())
      }), Math.max(0, (HC - BW - 1) % 6e4 + 1 - (Date.now() - BW)));
      return () => {
        clearTimeout(FF)
      }
    }), [HC, BW]);
    const wC = IC ? `${IC.id}/${IC.model.id}` : null;
    (0, CF.useEffect)((() => {
      VW(!1)
    }), [wC]);
    const XC = Object.values(OF).some((FF => "" !== FF.trim())),
      UC = iS || rS || tS || null !== aS,
      BC = "aiAnswer" === TC || ("aiNotes" === TC || "aiGameSettings" === TC || "aiGear" === TC) && UC ? TC : "aiPanel",
      jA = (0, CF.useRef)(null),
      vA = (0, CF.useRef)(null),
      JC = (0, CF.useRef)(aS);
    (0, CF.useEffect)((() => {
      if (JC.current === aS) return;
      JC.current = aS;
      if (!document.activeElement || document.activeElement === document.body) {
        var FF;
        null === (FF = (aS ? jA : vA).current) || void 0 === FF || FF.focus()
      }
    }), [aS]), (0, CF.useEffect)((() => {
      const FF = RS.current;
      if (!aS || !FF) return;
      FF.scrollTo({
        top: 0
      });
      const WF = "settings" === aS && MC.current ? FF.querySelector(".WorldCodeAiModelRow.Selected") : null;
      if (WF && WF.getBoundingClientRect().bottom > FF.getBoundingClientRect().bottom && !Kb(FF, WF)) {
        const SF = FF.getBoundingClientRect(),
          CF = WF.getBoundingClientRect();
        FF.scrollTop += CF.top - SF.top - (SF.height - CF.height) / 2
      }
      return () => {
        FF.style.paddingBottom = ""
      }
    }), [aS]);
    const {
      disclosureRef: lC,
      gearLabelRef: WA,
      hasGearLabel: SA
    } = function(FF, WF) {
      const SF = (0, CF.useRef)(null),
        AF = (0, CF.useRef)(null),
        uF = (0, CF.useRef)(0),
        [hF, bW] = (0, CF.useState)(!0);
      return (0, CF.useLayoutEffect)((() => {
        const WF = SF.current;
        if (!WF || "undefined" === typeof ResizeObserver) return;
        const CF = () => {
          const SF = document.createRange();
          if (SF.selectNodeContents(WF), "function" !== typeof SF.getBoundingClientRect) return;
          const CF = SF.getBoundingClientRect().width,
            hF = AF.current;
          if (hF) {
            const SF = FF.current,
              AF = SF && parseFloat(getComputedStyle(SF).columnGap) || 0;
            uF.current = hF.getBoundingClientRect().width + AF, CF > WF.clientWidth + 1 && bW(!1)
          } else WF.clientWidth - CF >= uF.current && bW(!0)
        };
        CF();
        const hF = new ResizeObserver(CF);
        return hF.observe(WF), () => {
          hF.disconnect()
        }
      }), [FF, WF]), {
        disclosureRef: SF,
        gearLabelRef: AF,
        hasGearLabel: hF
      }
    }(vA, UC), AA = () => {
      var FF;
      fW([]), null === (FF = vS.current) || void 0 === FF || FF.abort(), PS()
    }, hA = (0, hF.jsxs)("div", {
      className: uF()("WorldCodeAiPanel", aS && "WorldCodeAiPanel-aiView"),
      children: [(0, hF.jsxs)("div", {
        className: "WorldCodeAiHeader",
        children: [(0, hF.jsx)("span", {
          className: "WorldCodeAiTitle",
          children: "AI Helper"
        }), (0, hF.jsx)("span", {
          ref: lC,
          className: "WorldCodeAiDisclosure",
          title: "AI can be wrong. Check its changes.",
          children: "AI can be wrong."
        }), UC && (0, hF.jsx)("button", {
          ref: jA,
          className: "WorldCodeAiLinkButton WorldCodeAiBackButton",
          onClick: () => {
            eW(!1), gS(!1), TW(!1), kS("addKey" === aS ? NW.current : null)
          },
          children: "addKey" === aS && NW.current ? "Back" : "Back to chat"
        }), aS && (0, hF.jsx)("h3", {
          className: "WorldCodeAiViewTitle",
          children: "settings" === aS ? "AI settings" : DW ? `Edit ${Ah(DW)} key` : "Add an API key"
        }), "settings" === aS && (0, hF.jsxs)("span", {
          className: "WorldCodeAiViewUsing",
          children: [(0, hF.jsxs)("span", {
            className: "WorldCodeAiViewUsingModel",
            children: ["Using:", " ", IC ? qS ? "Bot.xd (free) for the next question" : ed(IC) : nC ? rb : "Bot.xd (free)"]
          }), (0, hF.jsxs)("span", {
            className: "WorldCodeAiViewUsingEdits",
            children: ["Edits: ", oW ? "On" : "Off"]
          })]
        }), UC && bS && (0, hF.jsx)("button", {
          className: "WorldCodeAiStop WorldCodeAiHeaderStop",
          onClick: AA,
          children: "Stop answer"
        }), !UC && !pF && (0, hF.jsx)(Pd, {
          step: "aiNotes",
          placement: "bottom",
          children: (0, hF.jsx)("button", {
            className: uF()("WorldCodeAiLinkButton", rS && "WorldCodeAiLinkButton-active"),
            "aria-pressed": rS,
            onClick: () => {
              eW(!1), TW(!1), gS(!rS)
            },
            children: "AI notes"
          })
        }), !UC && tA && (0, hF.jsx)(Pd, {
          step: "aiGameSettings",
          placement: "bottom",
          children: (0, hF.jsx)("button", {
            className: uF()("WorldCodeAiLinkButton", tS && "WorldCodeAiLinkButton-active"),
            "aria-pressed": tS,
            onClick: () => {
              rA(), eW(!1), gS(!1), TW(!tS)
            },
            children: "Game settings"
          })
        }), !UC && PW.length > 0 && (0, hF.jsx)("button", {
          className: uF()("WorldCodeAiLinkButton", iS && "WorldCodeAiLinkButton-active"),
          "aria-pressed": iS,
          onClick: () => {
            jS(Date.now()), gS(!1), TW(!1), eW(!iS)
          },
          children: "History"
        }), !UC && CW.length > 0 && (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          disabled: !!bS,
          onClick: () => {
            uC(), fW([]), hW([])
          },
          children: "New chat"
        }), !UC && (0, hF.jsxs)("div", {
          className: "WorldCodeAiViewSwitch",
          role: "tablist",
          children: [(0, hF.jsx)("button", {
            role: "tab",
            "aria-selected": !0,
            className: "Selected",
            children: "Chat"
          }), (0, hF.jsx)("button", {
            role: "tab",
            "aria-selected": !1,
            onClick: zW,
            children: "Code"
          })]
        }), !UC && (0, hF.jsx)(Pd, {
          step: "aiGear",
          placement: "bottom",
          children: (0, hF.jsxs)("button", {
            ref: vA,
            className: "WorldCodeAiLinkButton WorldCodeAiGear",
            "aria-label": "AI Helper settings",
            title: "AI Helper settings",
            onClick: () => {
              MC.current = !1, kS("settings")
            },
            children: [(0, hF.jsx)(iW.e, {
              name: "gear"
            }), SA && (0, hF.jsx)("span", {
              ref: WA,
              className: "WorldCodeAiGearLabel",
              children: "Settings"
            })]
          })
        })]
      }), (0, hF.jsxs)("div", {
        className: "WorldCodeAiMessages",
        ref: RS,
        role: UC ? void 0 : "log",
        "aria-live": UC ? void 0 : "polite",
        children: [iS && (0, hF.jsx)(mP, {
          snapshots: PW,
          files: OF,
          now: BW,
          onRestore: ZF && !bS ? FF => {
            (async FF => {
              const WF = QS.current,
                SF = Nd(FF, WF);
              if (0 === SF.length) return;
              if (!await MF(SF)) return;
              wS("Before going back", WF), eW(!1), null !== WS && uC();
              const CF = {};
              for (const hF of SF) CF[hF.path] = hF.text;
              const AF = FF => LS(FF) && "applied" === FF.status && FF.changes.some((FF => FF.path in CF && CF[FF.path] !== FF.after)),
                uF = CW.filter((FF => AF(FF) && "saved" === FF.noteStatus && void 0 !== FF.note && EW.includes(FF.note))).map((FF => {
                  var WF;
                  return null !== (WF = FF.note) && void 0 !== WF ? WF : ""
                }));
              hW((FF => FF.map((FF => AF(FF) ? {
                ...FF,
                status: "undone",
                wentBack: !0,
                noteStatus: "asked" === FF.noteStatus ? void 0 : FF.noteStatus
              } : FF)))), DS({
                role: "assistant",
                text: "Your code is back to how it was.",
                changes: [],
                status: "offered",
                isNotice: !0,
                isCalm: !0,
                undoFiles: WF,
                leftFiles: Object.fromEntries(SF.map((FF => [FF.path, FF.text]))),
                forgetNotes: uF.length > 0 ? uF : void 0
              })
            })(FF)
          } : void 0
        }), tS && (0, hF.jsx)(LP, {
          files: OF,
          before: MW,
          onWrite: ZF ? (FF, WF, SF) => {
            const CF = RC.current.then((async () => {
              var CF, AF, uF, hF;
              const bW = QS.current,
                dF = dC.current[FF],
                PF = void 0 !== dF && (null !== (CF = bW[FF]) && void 0 !== CF ? CF : "") === PC.current[FF] ? {
                  ...bW,
                  [FF]: dF
                } : bW,
                RF = fd(null !== (AF = PF[FF]) && void 0 !== AF ? AF : "", WF, SF);
              if (null === RF) return !1;
              if (RF === PF[FF]) return !0;
              if (!await MF([{
                  path: FF,
                  text: RF
                }])) return !1;
              const iW = sd(WF),
                eF = `${FF}:${WF.key}`,
                EF = null !== (uF = EC.current.get(eF)) && void 0 !== uF ? uF : WF.value;
              EC.current.set(eF, EF), EF === SF ? eC.current.delete(eF) : eC.current.set(eF, {
                name: iW,
                from: nd(EF),
                to: nd(SF)
              });
              const QF = Hd([...eC.current.values()]);
              if (YW.current) {
                var rW;
                null === (rW = QC.current) || void 0 === rW || rW.then((async FF => {
                  void 0 !== FF && RW(await LR.relabel(sF, FF, QF))
                })).catch((FF => {
                  console.error("World Code AI: couldn't rename a version of the code", FF)
                }))
              } else {
                YW.current = !0;
                const FF = Date.now();
                QC.current = LR.add(sF, QF, PF, FF).then((WF => {
                  var SF;
                  return RW(WF), null === (SF = WF.find((WF => WF.at === FF && WF.label === QF))) || void 0 === SF ? void 0 : SF.id
                })).catch((FF => {
                  console.error("World Code AI: couldn't keep a version of the code", FF)
                })), cS(PF)
              }
              return iA.current.includes(iW) || iA.current.push(iW), PC.current[FF] = null !== (hF = PF[FF]) && void 0 !== hF ? hF : "", dC.current[FF] = RF, ES.current = Date.now(), !0
            }));
            return RC.current = CF.catch((() => !1)), CF
          } : void 0,
          onTryIt: MW ? () => {
            dS(cW, Math.max(0, ES.current + 600 - Date.now()))
          } : void 0,
          onUndo: MW && ZF ? () => {
            gA()
          } : void 0
        }), "settings" === aS && (0, hF.jsx)(pb, {
          allowEdits: OW,
          onAllowEditsChange: ZF ? FF => {
            xS(FF),
              function(FF) {
                try {
                  localStorage.setItem(yd, String(FF))
                } catch {}
              }(FF)
          } : void 0,
          onAddKey: () => {
            NW.current = "settings", LW(null), kS("addKey")
          },
          onEditKey: FF => {
            NW.current = "settings", LW(FF), kS("addKey")
          }
        }), "addKey" === aS && (0, hF.jsx)(ud, {
          editing: null !== DW && void 0 !== DW ? DW : void 0,
          onAdded: () => {
            MC.current = !0, kS(NW.current)
          },
          onOpenSettings: () => {
            MC.current = !1, kS("settings")
          }
        }, null !== (qW = null === DW || void 0 === DW ? void 0 : DW.id) && void 0 !== qW ? qW : "new"), rS && (0, hF.jsx)(Od, {
          notes: EW,
          outline: SW(OF, new Set(ZR().callbackNames())),
          EL: aA,
          onDelete: FF => {
            mi.remove(sF, FF).then(QW).catch((FF => {
              console.error("World Code AI: couldn't delete a note", FF)
            }))
          }
        }), !UC && CW.map(((FF, WF) => {
          var SF, AF, dF, RF, iW, eF, EF, QF;
          const rW = LS(FF),
            gW = xA && (null === (SF = CW[WF - 1]) || void 0 === SF ? void 0 : SF.target.key) !== FF.target.key,
            tW = 0 === FF.changes.length,
            TF = tW && !!FF.failedEdits && !FF.question && !FF.worldCode,
            aW = FF.failedEdits && (0, hF.jsx)(pR, {
              failed: FF.failedEdits,
              nothingChanged: tW,
              defaultOpen: !FF.byItself,
              isElsewhere: !rW,
              onRetry: FF.id !== mA || bS ? void 0 : () => {
                YS("These changes from your last answer didn't go in. Make them again.", "Try the missing change again", {
                  about: DC(FF.id),
                  failedEdits: FF.failedEdits
                })
              }
            });
          var kW;
          return void 0 === FF.logTitle && (!FF.isNotice || "assistant" !== FF.role || "" === FF.text || void 0 !== FF.retry || FF.keyNotice || FF.undoFiles || FF.failedEdits || FF.cutShort || FF.question || FF.worldCode || 0 !== FF.changes.length) ? (0, hF.jsxs)(CF.Fragment, {
            children: [gW && (0, hF.jsx)(vi, {
              target: FF.target,
              isOpen: rW
            }), (0, hF.jsxs)("div", {
              className: uF()("WorldCodeAiEntry", `WorldCodeAiEntry-${FF.role}`, {
                "WorldCodeAiEntry-elsewhere": !rW,
                WorldCodeAiNotice: FF.isNotice,
                "WorldCodeAiNotice-calm": FF.isNotice && FF.isCalm,
                "WorldCodeAiNotice-past": FF.isNotice && void 0 !== FF.retry && (FF.id !== mA || !!VS)
              }),
              children: [tW && aW, TF ? null : FF.isNotice && void 0 !== FF.retry && (FF.id !== mA || VS) ? (0, hF.jsx)("p", {
                children: FF.keyNotice ? Gb(FF.keyNotice) : void 0 !== FF.retryAt ? "Not answered: Bot.xd was busy." : "Not answered: the AI had a problem."
              }) : FF.keyNotice ? (0, hF.jsxs)(hF.Fragment, {
                children: [(0, hF.jsx)("p", {
                  children: cd(FF.keyNotice)
                }), FF.keyNotice.detail && (0, hF.jsx)(Yb, {
                  detail: FF.keyNotice.detail
                })]
              }) : FF.undoFiles ? (0, hF.jsxs)("div", {
                className: "WorldCodeAiWentBack",
                children: [(0, hF.jsx)("span", {
                  children: "undone" === FF.status ? "Undone: your code is as it was before going back." : FF.text
                }), rW && "undone" !== FF.status && UR(FF, OF) && ZF && (0, hF.jsx)("button", {
                  className: "WorldCodeAiLinkButton WorldCodeAiNoticeUndo",
                  disabled: !!bS,
                  title: bS ? "You can undo once the answer is in." : void 0,
                  onClick: () => {
                    (async FF => {
                      var WF;
                      const SF = QS.current;
                      if (!UR(FF, SF)) return;
                      const CF = Nd({
                        id: 0,
                        at: 0,
                        label: "",
                        files: null !== (WF = FF.undoFiles) && void 0 !== WF ? WF : {}
                      }, SF).filter((WF => void 0 !== FF.leftFiles && WF.path in FF.leftFiles));
                      if (CF.length > 0) {
                        if (!await MF(CF)) return;
                        wS("Before undoing going back", SF)
                      }
                      const AF = {
                        ...SF
                      };
                      for (const uF of CF) AF[uF.path] = uF.text;
                      hW((WF => WF.map((WF => WF.id === FF.id ? {
                        ...WF,
                        status: "undone"
                      } : LS(WF) && WF.wentBack && WF.changes.every((FF => {
                        var WF;
                        return (null !== (WF = AF[FF.path]) && void 0 !== WF ? WF : "") === FF.after
                      })) ? {
                        ...WF,
                        status: "applied",
                        wentBack: void 0
                      } : WF))))
                    })(FF)
                  },
                  children: bS ? "Undo going back after this answer" : "Undo going back"
                })]
              }) : "assistant" === FF.role ? (0, hF.jsx)(PF.c, {
                markdown: "applied" !== FF.status && !FF.editedInPlace && (FF.changes.length > 0 || null !== (AF = FF.failedEdits) && void 0 !== AF && AF.length) ? NP(FF.text) : FF.text
              }) : (0, hF.jsx)("p", {
                children: FF.text
              }), FF.answeredBy && (0, hF.jsx)(Mb, {
                answeredBy: FF.answeredBy
              }), FF.oneOff && IC && FF.id === mA && !bS && (0, hF.jsxs)("p", {
                className: "WorldCodeAiBackTo",
                children: ["Your next question goes back to ", IC.model.name, "."]
              }), FF.cutShort && (0, hF.jsx)(fb, {
                hasCode: FF.changes.length > 0 || !!FF.worldCode,
                ...fC(FF.id, FF.cutShort)
              }), FF.forgetNotes && (0, hF.jsx)("div", {
                className: "WorldCodeAiForget",
                children: rW && void 0 === FF.forgetStatus && FF.id > OC ? (0, hF.jsxs)(hF.Fragment, {
                  children: [(0, hF.jsxs)("span", {
                    className: "WorldCodeAiForgetAsk",
                    children: [1 === FF.forgetNotes.length ? "Forget this note in AI notes too? " : "Forget these notes in AI notes too? ", (0, hF.jsx)("span", {
                      className: "WorldCodeAiForgetNote",
                      children: FF.forgetNotes.map((FF => `"${FF}"`)).join(", ")
                    })]
                  }), (0, hF.jsxs)("div", {
                    className: "WorldCodeAiNoteButtons",
                    children: [(0, hF.jsx)("button", {
                      className: "WorldCodeAiSecondaryButton",
                      onClick: () => {
                        hC(FF, !0)
                      },
                      children: "Forget it"
                    }), (0, hF.jsx)("button", {
                      className: "WorldCodeAiLinkButton",
                      onClick: () => {
                        hC(FF, !1)
                      },
                      children: "Keep it"
                    })]
                  })]
                }) : (0, hF.jsx)("span", {
                  className: "WorldCodeAiHint",
                  children: "forgotten" === FF.forgetStatus ? "Taken out of AI notes." : "Kept in AI notes."
                })
              }), FF.changes.length > 0 && (0, hF.jsx)(ji, {
                entry: FF,
                defaultOpen: !FF.byItself,
                elsewhere: rW ? void 0 : FF.target,
                isOutOfDate: rW && !XS.current.has(FF.id) && FF.changes.some((FF => {
                  var WF;
                  return (null !== (WF = OF[FF.path]) && void 0 !== WF ? WF : "") !== FF.before
                })),
                canEdit: rW ? ZF : !!XF && (!FF.target.codeBlock || FF.target.canChangePos),
                request: NC(FF.id),
                onApply: WF => {
                  rW ? US(WF ? {
                    id: FF.id,
                    changes: WF,
                    isPartial: !0
                  } : FF, DC(FF.id)) : ((FF, WF) => {
                    XF && BS && (WW.pendingApply = {
                      entryId: FF.id,
                      targetKey: FF.target.key,
                      picked: WF,
                      until: Date.now() + VR
                    }, XF(FF.target))
                  })(FF, WF)
                },
                checkPicked: rW ? bA : void 0,
                onPickedChange: WF => {
                  HW((SF => {
                    if (SF.has(FF.id) === WF) return SF;
                    const CF = new Set(SF);
                    return WF ? CF.add(FF.id) : CF.delete(FF.id), CF
                  }))
                },
                onUndo: () => {
                  (async FF => {
                    const WF = QS.current;
                    if (FF.changes.some((FF => {
                        var SF;
                        return (null !== (SF = WF[FF.path]) && void 0 !== SF ? SF : "") !== FF.after
                      }))) return;
                    await MF(FF.changes.map((FF => ({
                      path: FF.path,
                      text: FF.before
                    })))) && (OS(FF.id, "undone"), null !== WS && uC())
                  })(FF)
                },
                onTryIt: () => {
                  (FF => {
                    const WF = gC.current;
                    wW(WF), CC(FF.id, "ask", WF), dS(cW, Math.max(0, ES.current + 600 - Date.now()))
                  })(FF)
                },
                isLatest: rW && FF.id > OC,
                canUndo: rW && FF.changes.every((FF => {
                  var WF;
                  return (null !== (WF = OF[FF.path]) && void 0 !== WF ? WF : "") === FF.after
                })),
                onFixWarnings: () => {
                  (FF => {
                    var WF;
                    const SF = Db(null !== (WF = FF.warnings) && void 0 !== WF ? WF : []);
                    var CF;
                    if (!SF) return void YS(`Fix this in your change: ${null===(CF=FF.warnings)||void 0===CF?void 0:CF.join(" ")}`);
                    const AF = ZR(),
                      uF = FF.changes.map((WF => ({
                        ...WF,
                        before: "applied" === FF.status ? WF.after : WF.before,
                        after: Ob(WF.after, SF)
                      })));
                    DS({
                      role: "user",
                      text: 1 === SF.length ? "Fix this line" : "Fix these lines",
                      changes: [],
                      status: "offered"
                    }), DS({
                      role: "assistant",
                      text: `Fixed without asking the AI: ${SF.map(xd).join(" ")}`,
                      changes: uF,
                      status: "offered",
                      swappedTo: SF.flatMap((FF => {
                        let {
                          to: WF
                        } = FF;
                        return WF ? [WF] : []
                      })),
                      warnings: uF.flatMap((FF => ai(AF, FF, pF)))
                    })
                  })(FF)
                },
                onCheck: () => {
                  YS(function(FF) {
                    const WF = [...new Set(FF)];
                    return WF.length > 0 ? `${BR} These names were checked against the game and are right, so keep them: ${WF.map((FF=>`"${FF}"`)).join(", ")}.` : BR
                  }(LC.flatMap((FF => {
                    var WF;
                    return null !== (WF = FF.swappedTo) && void 0 !== WF ? WF : []
                  }))), "Check it for mistakes")
                },
                busy: rW ? !!bS : !BS
              }), FF.question && (0, hF.jsx)(Md, {
                ownAnswerBelow: !0,
                question: FF.question,
                onAnswer: FF.id !== mA || bS ? void 0 : (WF, SF) => {
                  var CF, AF, uF, hF;
                  const bW = Yd(null !== (CF = FF.askedFor) && void 0 !== CF ? CF : "", null !== (AF = null === (uF = FF.question) || void 0 === uF ? void 0 : uF.question) && void 0 !== AF ? AF : "", WF);
                  YS(bW, null !== WF && void 0 !== WF ? WF : "Let the AI pick", {
                    check: SF,
                    about: FF.askedFor,
                    asked: SF && WF ? `${null!==(hF=FF.askedFor)&&void 0!==hF?hF:""} ${WF}` : null
                  })
                }
              }), rW && FF.offerExport && (0, hF.jsx)("button", {
                className: "WorldCodeAiSecondaryButton WorldCodeAiSaveGame",
                onClick: () => {
                  mC(FF.id, {
                    offerExport: !1
                  }), JS("offered" === FF.status && FF.changes.length > 0)
                },
                children: "Save my game"
              }), FF.plan && (0, hF.jsx)(od, {
                steps: FF.plan,
                built: null !== (dF = FF.planBuilt) && void 0 !== dF ? dF : 0,
                done: null !== (RF = FF.planDone) && void 0 !== RF ? RF : 0,
                onBuild: rW && !bS && ZF ? WF => {
                  var SF;
                  const CF = null !== (SF = FF.plan) && void 0 !== SF ? SF : [];
                  oS((() => {
                    mC(FF.id, {
                      planBuilt: WF + 1
                    }), zC.current(function(FF, WF) {
                      const SF = FF.map(((FF, SF) => `${SF+1}. ${FF}${SF<WF?" (built)":""}`)).join("\n");
                      return `Build step ${WF+1} of our plan now: ${FF[WF]}\nThe whole plan:\n${SF}\nBuild only step ${WF+1}, keeping what earlier steps built, so I can try it before the next.`
                    }(CF, WF), `Build step ${WF+1}: ${CF[WF]}`, {
                      about: CF[WF],
                      asked: CF[WF],
                      planStep: {
                        planId: FF.id,
                        index: WF
                      }
                    })
                  }))
                } : void 0
              }), rW && FF.note && FF.noteStatus && !(FF.wentBack && "saved" === FF.noteStatus) && (0, hF.jsx)(Zd, {
                note: FF.note,
                status: FF.noteStatus,
                isPartLeftOut: "offered" === FF.status && nW.has(FF.id),
                defaultOpen: !FF.byItself || "asked" === FF.noteStatus,
                onAnswer: WF => {
                  qA(FF, WF)
                }
              }, "asked" === FF.noteStatus ? "asked" : "kept"), !tW && aW, FF.lookups && (0, hF.jsx)(lR, {
                lookups: FF.lookups.lookups,
                defaultOpen: !FF.lookedAt,
                isElsewhere: !rW
              }), rW && FF.lookups && !FF.lookedAt && (0, hF.jsx)("div", {
                className: "WorldCodeAiLookups",
                children: (0, hF.jsx)("button", {
                  className: "WorldCodeAiSecondaryButton",
                  disabled: !!bS,
                  onClick: () => {
                    (async FF => {
                      if (!FF.lookups || FF.lookedAt || bS) return;
                      mC(FF.id, {
                        lookedAt: !0
                      });
                      const WF = new AbortController;
                      vS.current = WF;
                      const SF = Date.now();
                      jS(SF), dW({
                        phase: "thinking",
                        startedAt: SF
                      });
                      try {
                        "stopped" === await SC(FF.lookups.lookups, FF.lookups.followUp, {
                          signal: WF.signal
                        }) && mC(FF.id, {
                          lookedAt: !1
                        })
                      } finally {
                        vS.current = null, dW(null)
                      }
                    })(FF)
                  },
                  children: "Let the AI look"
                })
              }), FF.worldCode && (0, hF.jsx)(JR, {
                code: FF.worldCode.join("\n"),
                defaultOpen: !FF.byItself,
                isElsewhere: !rW,
                onSwitch: rW && nF ? () => {
                  var WF;
                  nF(Fi(null !== (WF = FF.worldCode) && void 0 !== WF ? WF : []))
                } : void 0
              }), rW && "ask" === FF.trial && FF.id > OC && YF <= (null !== (iW = FF.trialErrors) && void 0 !== iW ? iW : 0) && (0, hF.jsxs)("div", {
                className: "WorldCodeAiTrial",
                children: [(0, hF.jsx)("span", {
                  children: "Did your world do what you wanted?"
                }), (0, hF.jsxs)("div", {
                  className: "WorldCodeAiTrialButtons",
                  children: [(0, hF.jsx)("button", {
                    ref: rC,
                    className: "WorldCodeAiSecondaryButton",
                    onClick: () => {
                      CC(FF.id, "worked")
                    },
                    children: "Yes"
                  }), (0, hF.jsx)("button", {
                    className: "WorldCodeAiSecondaryButton",
                    onClick: () => {
                      var WF;
                      CC(FF.id, "notQuite"), zS("It didn't work because "), null === (WF = iC.current) || void 0 === WF || WF.focus()
                    },
                    children: "Not quite"
                  })]
                })]
              }), rW && "worked" === FF.trial && FF.id > OC && (0, hF.jsxs)("div", {
                className: "WorldCodeAiTrial",
                children: [(0, hF.jsx)("span", {
                  children: "Nice! What next?"
                }), (0, hF.jsx)(IR, {
                  requests: GR,
                  onPick: FF => {
                    YS(FF, void 0, {
                      asked: null
                    })
                  }
                })]
              }), rW && "notQuite" === FF.trial && FF.id > OC && (0, hF.jsxs)("div", {
                className: "WorldCodeAiTrial WorldCodeAiTrial-wrong",
                children: [(0, hF.jsx)("span", {
                  children: "What went wrong? Pick one, or say it in your own words below."
                }), (0, hF.jsx)(IR, {
                  requests: zi,
                  onPick: FF => {
                    YS(FF, void 0, {
                      asked: null
                    })
                  }
                })]
              }), "assistant" === FF.role && FF.changes.length > 0 && "offered" === FF.status && FF.id === mA && !bS && (0, hF.jsx)(IR, {
                requests: MR,
                onPick: FF => {
                  YS(FF, void 0, {
                    asked: null
                  })
                }
              }), "assistant" === FF.role && void 0 !== FF.answeredBy && "free" !== FF.answeredBy && 0 === FF.changes.length && !FF.worldCode && !FF.cutShort && FF.id === mA && !bS && rh(FF.text) && (0, hF.jsx)(IR, {
                requests: ci,
                onPick: () => {
                  YS("You said what you'd change but made no change. Make it now, with the code in full.", "Make the change", {
                    asked: null
                  })
                }
              }), FF.keyNotice && void 0 !== FF.retry && FF.id === mA && !bS && (0, hF.jsx)(Ib, {
                ...sC(FF.id, FF.retry, FF.keyNotice)
              }), void 0 !== FF.retry && !FF.keyNotice && FF.id === mA && !bS && (0, hF.jsxs)("div", {
                className: "WorldCodeAiRetry",
                children: [(0, hF.jsx)("button", {
                  ...Zb.f,
                  className: "WorldCodeAiSecondaryButton",
                  disabled: (null !== (eF = FF.retryAt) && void 0 !== eF ? eF : 0) > BW,
                  onClick: () => {
                    var WF;
                    YS(null !== (WF = FF.retry) && void 0 !== WF ? WF : "", FF.retryShown, {
                      ...FF.retryOptions,
                      retryOf: FF.id
                    })
                  },
                  children: (null !== (EF = FF.retryAt) && void 0 !== EF ? EF : 0) > BW ? `Try again in ${Wi((null!==(QF=FF.retryAt)&&void 0!==QF?QF:0)-BW)}` : "Try again"
                }), IC && (0, hF.jsxs)("button", {
                  className: "WorldCodeAiPrimaryButton",
                  onClick: () => {
                    var WF;
                    YS(null !== (WF = FF.retry) && void 0 !== WF ? WF : "", FF.retryShown, {
                      ...FF.retryOptions,
                      retryOf: FF.id,
                      useFree: !1
                    })
                  },
                  children: ["Ask ", IC.model.name, " instead"]
                }), !IC && (0, hF.jsx)("button", {
                  className: "WorldCodeAiLinkButton",
                  onClick: cA,
                  children: "Choose another AI"
                })]
              })]
            })]
          }, FF.id) : (0, hF.jsxs)(CF.Fragment, {
            children: [gW && (0, hF.jsx)(vi, {
              target: FF.target,
              isOpen: rW
            }), FF.lookups && (0, hF.jsx)(lR, {
              lookups: FF.lookups.lookups,
              words: FF.text,
              defaultOpen: !FF.lookedAt,
              isElsewhere: !rW
            }), !FF.lookups && (0, hF.jsx)(bW, {
              title: null !== (kW = FF.logTitle) && void 0 !== kW ? kW : FF.isCalm ? "Update" : "Problem",
              isCalm: FF.isCalm || "user" === FF.role,
              isElsewhere: !rW,
              children: (0, hF.jsx)("p", {
                children: FF.text
              })
            })]
          }, FF.id)
        })), !UC && xA && (null === (VF = CW[CW.length - 1]) || void 0 === VF ? void 0 : VF.target.key) !== fF.key && (0, hF.jsx)(vi, {
          target: fF,
          isOpen: !0
        }), !UC && 0 === LC.length && (0, hF.jsxs)("div", {
          className: "WorldCodeAiEmpty",
          children: [(0, hF.jsx)("p", {
            children: pF ? "What should happen when someone clicks this block? Ask in your own words." : "What do you want your world to do? Ask in your own words."
          }), (0, hF.jsxs)("div", {
            className: "WorldCodeAiChips",
            children: [XC && (0, hF.jsx)("button", {
              ...Zb.f,
              className: "WorldCodeAiChip",
              onClick: () => {
                YS("Explain what my code does")
              },
              children: "Explain my code"
            }), XC && !pF && !tA && ZF && (0, hF.jsx)("button", {
              ...Zb.f,
              className: "WorldCodeAiChip",
              onClick: () => {
                YS("Put the numbers and messages in my code that I might want to change (times, amounts, messages) in CONFIG settings at the top, and use them from there. Change nothing else.", "Make settings I can change")
              },
              children: "Make settings I can change"
            }), (ZF ? pF ? YR : oR : []).map((FF => (0, CF.createElement)("button", {
              ...Zb.f,
              key: FF,
              className: "WorldCodeAiChip",
              onClick: () => {
                YS(FF)
              }
            }, FF)))]
          }), (0, hF.jsxs)("p", {
            className: "WorldCodeAiPrivacy",
            children: [IC ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${IC.model.name} with your key.` : nC ? "deepseek" === nC.provider ? "Your request and code go through Bloxd to Super Bot.xd, run by DeepSeek, which stores them on its servers in China." : "Your request and code go through Bloxd to Super Bot.xd." : "Your request and code go to Bot.xd, which doesn't keep them.", " ", "Never type personal details, like your name, address or school."]
          }), !IC && (0, hF.jsxs)("p", {
            className: "WorldCodeAiPrivacy",
            children: ["Want a stronger AI?", " ", (0, hF.jsx)("button", {
              className: "WorldCodeAiKeyLearnMore",
              onClick: zA,
              children: "Add your own API key"
            })]
          })]
        }), !UC && bS && (0, hF.jsx)("div", {
          className: "WorldCodeAiEntry WorldCodeAiEntry-assistant WorldCodeAiBusyEntry",
          children: (0, hF.jsxs)("div", {
            className: "WorldCodeAiBusy",
            role: "status",
            children: [(0, hF.jsx)("span", {
              className: "WorldCodeAiSpinner"
            }), (0, hF.jsx)("span", {
              className: "WorldCodeAiBusyText",
              children: (0, hF.jsx)(bW, {
                title: null !== (NF = Si(bS)) && void 0 !== NF ? NF : "Thinking\u2026",
                isCalm: !0,
                children: "waiting" === bS.phase ? (0, hF.jsxs)("span", {
                  className: "WorldCodeAiBusyHint",
                  children: [xR((null !== (DF = bS.until) && void 0 !== DF ? DF : BW) - BW), " Lots of people share Bot.xd."]
                }) : (0, hF.jsxs)(hF.Fragment, {
                  children: [(0, hF.jsx)(Ci, {
                    busy: bS
                  }), "screening" === bS.phase && (null !== (LF = bS.until) && void 0 !== LF ? LF : 0) > BW && (0, hF.jsxs)("span", {
                    className: "WorldCodeAiBusyHint",
                    children: [xR((null !== (mW = bS.until) && void 0 !== mW ? mW : BW) - BW), " Lots of people share the safety check."]
                  }), "checking" !== bS.phase && "screening" !== bS.phase && (0, hF.jsx)("span", {
                    className: "WorldCodeAiBusyHint",
                    children: bS.keyModel ? `${bS.keyModel} is answering with your key.` : bS.isSuperBot ? `${rb} is answering from your usage.` : zR(mS.current, bS.model)
                  })]
                })
              })
            }), (0, hF.jsx)("button", {
              className: "WorldCodeAiSecondaryButton WorldCodeAiStop",
              onClick: AA,
              children: "Stop"
            })]
          })
        }), !UC && !bS && bC && (0, hF.jsx)("div", {
          className: "WorldCodeAiEntry WorldCodeAiEntry-assistant WorldCodeAiBusyEntry",
          children: (0, hF.jsxs)("div", {
            className: "WorldCodeAiBusy",
            role: "status",
            children: [(0, hF.jsx)("span", {
              className: "WorldCodeAiSpinner"
            }), (0, hF.jsx)("span", {
              className: "WorldCodeAiBusyText",
              children: (0, hF.jsx)(bW, {
                title: "Testing\u2026",
                isCalm: !0,
                children: (0, hF.jsx)("span", {
                  className: "WorldCodeAiBusyHint",
                  children: pF ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${tP.z/1e3} seconds. If it shows an error, the AI fixes it.`
                })
              })
            }), (0, hF.jsx)("button", {
              className: "WorldCodeAiSecondaryButton WorldCodeAiStop",
              onClick: uC,
              children: "Stop"
            })]
          })
        }), !UC && nS.map(((FF, WF) => {
          var SF, CF;
          return (0, hF.jsxs)("div", {
            className: "WorldCodeAiEntry WorldCodeAiEntry-user WorldCodeAiQueued",
            children: [(0, hF.jsx)("p", {
              children: null !== (SF = FF.shown) && void 0 !== SF ? SF : FF.text
            }), (0, hF.jsxs)("span", {
              className: "WorldCodeAiQueuedNote",
              children: [FF.id === yC ? "Pick Bot.xd to send it" : null !== (CF = OR[WF]) && void 0 !== CF ? CF : "In line", (0, hF.jsx)("button", {
                className: "WorldCodeAiLinkButton",
                onClick: () => {
                  fW((WF => WF.filter((WF => WF.id !== FF.id))))
                },
                children: "Delete"
              })]
            })]
          }, FF.id)
        }))]
      }), VS && !bS && (0, hF.jsxs)("div", {
        className: "WorldCodeAiErrorBanner",
        children: [(0, hF.jsxs)("div", {
          className: "WorldCodeAiErrorPlain",
          children: [void 0 !== NS.line && (0, hF.jsxs)(hF.Fragment, {
            children: [(0, hF.jsxs)("button", {
              className: "WorldCodeAiLinkButton",
              title: "Show this line in your code",
              onClick: () => {
                var FF, WF;
                IF(null !== (FF = NS.path) && void 0 !== FF ? FF : xW, null !== (WF = NS.line) && void 0 !== WF ? WF : 1), window.matchMedia("(max-width: 900px)").matches && zW()
              },
              children: [NS.path && NS.path !== xW ? `${NS.path} line` : "Line", " ", NS.line]
            }), ":", " "]
          }), NS.text]
        }), XW && (0, hF.jsx)("div", {
          className: "WorldCodeAiErrorText",
          children: VS
        }), (0, hF.jsxs)("div", {
          className: "WorldCodeAiErrorActions",
          children: [(0, hF.jsx)("button", {
            ...Zb.f,
            className: "WorldCodeAiPrimaryButton",
            onClick: () => {
              oS((() => {
                wW(YF), zC.current(`Fix this error: ${VS}`)
              }))
            },
            children: "Fix the error"
          }), (0, hF.jsx)("button", {
            ...Zb.f,
            className: "WorldCodeAiSecondaryButton",
            onClick: () => {
              oS((() => {
                wW(YF), zC.current(`Explain this error in simple words, and where it is in my code: ${VS}`)
              }))
            },
            children: "Explain it"
          }), (0, hF.jsx)("button", {
            className: "WorldCodeAiLinkButton",
            onClick: () => {
              wW(YF)
            },
            children: "Dismiss"
          }), (0, hF.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiErrorDetailsToggle",
            onClick: () => {
              UW(!XW)
            },
            children: XW ? "Hide details" : "Show details"
          })]
        }), (0, hF.jsx)("div", {
          className: "WorldCodeAiErrorNote",
          children: "Fix the error and Explain it send this error and your code to the AI."
        })]
      }), yS && (0, hF.jsxs)("div", {
        className: "WorldCodeAiPicked",
        children: [(0, hF.jsxs)("span", {
          children: ["Changing ", nP(yS), " of ", yS.path]
        }), (0, hF.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: () => {
            sW(null)
          },
          children: "Cancel"
        })]
      }), (0, hF.jsx)(Pd, {
        step: "aiAskBox",
        children: (0, hF.jsx)("form", {
          className: "WorldCodeAiInputRow",
          onSubmit: FF => {
            FF.preventDefault(), cC()
          },
          children: (0, hF.jsxs)("div", {
            className: "WorldCodeAiAsk",
            children: [(0, hF.jsx)("textarea", {
              ref: iC,
              className: "WorldCodeAiAskInput",
              value: GW,
              maxLength: 1e3,
              rows: 2,
              placeholder: yS ? `How should ${nP(yS)} change?` : oC ? "Or type your own answer here" : "Ask AI",
              onChange: FF => {
                zS(FF.target.value)
              },
              onKeyDown: FF => {
                FF.stopPropagation(), "Enter" !== FF.key || FF.shiftKey || FF.nativeEvent.isComposing || 229 === FF.nativeEvent.keyCode || (FF.preventDefault(), cC())
              }
            }), (0, hF.jsx)(RF.k, {
              className: "WorldCodeAiSend",
              ariaLabel: "Send",
              disabled: "" === GW.trim() || !!bS && IW.length >= 3,
              onClick: cC,
              children: (0, hF.jsx)(iW.e, {
                name: "arrow-up"
              })
            })]
          })
        })
      }), (0, hF.jsx)(Pd, {
        step: "aiModelChip",
        children: (0, hF.jsx)("div", {
          className: uF()("WorldCodeAiLimit", bS && "WorldCodeAiLimit-busy"),
          children: (0, hF.jsx)(Ed, {
            editsOn: ZF ? OW : null,
            freeOnce: qS,
            onFreeOnce: VW,
            onAddKey: zA,
            children: (() => {
              if (bS) return 0 === nS.length ? "You can type your next request: it sends when this answer is done." : 1 === nS.length ? "1 request waiting: it sends when this answer is done." : `${nS.length} requests waiting: they send one at a time.`;
              if (IC && qS) return `Your next question goes to Bot.xd, then back to ${IC.model.name}.`;
              if (IC) return `Your question and code go to ${ou(IC.provider,IC.baseUrl,!0)}.`;
              if (nC) {
                const FF = null === HC ? null : function(FF, WF) {
                  return FF <= WF ? null : `Limit resets in ${(0,Qh.b)(Math.ceil((FF-WF)/6e4))}`
                }(HC, BW);
                return null === FF ? oh(nC) : (0, hF.jsxs)(hF.Fragment, {
                  children: [(0, hF.jsx)("span", {
                    className: "WorldCodeAiModelChipStatusLine",
                    children: oh(nC)
                  }), (0, hF.jsx)("span", {
                    className: "WorldCodeAiModelChipStatusLine",
                    children: FF
                  })]
                })
              }
              return kC > BW ? `Send now and it starts by itself. ${xR(kC-BW)}` : null
            })()
          })
        })
      })]
    });
    return (0, hF.jsx)(Pd, {
      step: BC,
      onPrevious: "aiPanel" === BC ? zW : void 0,
      children: hA
    })
  })),
  ui = Ai
}, 37752: (FF, WF, SF) => {
  SF.d(WF, {
    b: () => dF,
    d: () => uF,
    f: () => AF
  });
  const CF = 6e3;

  function AF(FF, WF) {
    return [Math.floor(FF[0] / WF) * WF, Math.floor(FF[1] / WF) * WF, Math.floor(FF[2] / WF) * WF]
  }

  function uF(FF) {
    const WF = (null !== FF && void 0 !== FF ? FF : "").match(/-?\d+(?:\.\d+)?/g);
    return WF && WF.length >= 3 ? [Number(WF[0]), Number(WF[1]), Number(WF[2])] : null
  }

  function hF(FF, WF) {
    return FF === WF ? String(FF) : `${FF}-${WF}`
  }

  function bW(FF, WF, SF, CF) {
    const AF = [];
    let uF = new Map;
    for (let hF = FF[2]; hF < FF[2] + WF; hF++) {
      const bW = new Map;
      let dF = FF[0];
      for (; dF < FF[0] + WF;) {
        const AF = CF(dF, SF, hF);
        let PF = dF;
        for (; PF + 1 < FF[0] + WF && CF(PF + 1, SF, hF) === AF;) PF++;
        if (null !== AF) {
          const FF = `${dF} ${PF} ${AF}`,
            WF = uF.get(FF);
          WF ? (WF.z1 = hF, uF.delete(FF), bW.set(FF, WF)) : bW.set(FF, {
            x0: dF,
            x1: PF,
            z0: hF,
            z1: hF,
            name: AF
          })
        }
        dF = PF + 1
      }
      AF.push(...uF.values()), uF = bW
    }
    return AF.push(...uF.values()), AF.sort(((FF, WF) => FF.z0 - WF.z0 || FF.x0 - WF.x0)).map((FF => `x${hF(FF.x0,FF.x1)} z${hF(FF.z0,FF.z1)} ${FF.name}`))
  }

  function dF(FF, WF, SF, AF) {
    let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CF;
    const dF = [FF[0] + WF - 1, FF[1] + WF - 1, FF[2] + WF - 1],
      PF = null !== AF && AF.every(((WF, SF) => Math.floor(WF) >= FF[SF] && Math.floor(WF) <= dF[SF])),
      RF = [`The chunk from ${FF.join(" ")} to ${dF.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
    null !== AF && RF.push(`The player's feet are at ${AF.map(Math.floor).join(" ")}, ${PF?"in this chunk":"outside this chunk"}.`);
    const iW = [];
    for (let CF = FF[1]; CF <= dF[1]; CF++) {
      const AF = bW(FF, WF, CF, SF).join("; "),
        uF = iW[iW.length - 1];
      (null === uF || void 0 === uF ? void 0 : uF.boxes) === AF ? uF.to = CF : iW.push({
        from: CF,
        to: CF,
        boxes: AF
      })
    }
    const eF = iW.filter((FF => "" !== FF.boxes));
    0 === eF.length && RF.push("It is all air.");
    let EF = RF.join("\n").length;
    for (const CF of eF) {
      const FF = `y${hF(CF.from,CF.to)}: ${CF.boxes}`;
      if (EF += FF.length + 1, EF > uF) {
        RF.push(`Cut short: the layers from y${CF.from} up aren't shown, as there are too many blocks.`);
        break
      }
      RF.push(FF)
    }
    return RF.join("\n")
  }
}, 3820: (FF, WF, SF) => {
  SF.d(WF, {
    e: () => AF,
    h: () => dF,
    j: () => uF,
    k: () => hF,
    l: () => bW,
    n: () => gW,
    r: () => RF,
    v: () => iW,
    w: () => rW,
    x: () => EF
  });
  var CF = SF(1421);
  const AF = 24e3,
    uF = "/docs/llms.txt",
    hF = `${CF.d}${uF}`,
    bW = "/llms.txt",
    dF = "/docs/llms-full.txt";

  function PF(FF) {
    return FF || "index"
  }

  function RF(FF) {
    return `/docs/${PF(FF)}.md`
  }

  function iW(FF, WF) {
    return `/docs/${PF(FF)}/${WF+1}.md`
  }
  const eF = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

  function EF(FF) {
    const WF = eF.exec(FF);
    return null === WF ? null : {
      name: WF[1],
      part: void 0 === WF[2] ? null : Number(WF[2])
    }
  }
  const QF = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

  function rW(FF) {
    const WF = QF.exec(FF);
    if (null === WF) return null;
    const [, SF = "", CF] = WF;
    return void 0 === CF ? RF(SF) : iW(SF, Number(CF) - 1)
  }

  function gW(FF) {
    return `/docsHtml/${PF(FF)}.html`
  }
}
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);