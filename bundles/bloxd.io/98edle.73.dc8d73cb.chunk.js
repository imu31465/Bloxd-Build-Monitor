export const id = 73;
export const ids = [73];
export const modules = {
  38951: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      WorldCodeAiPanel: () => wB,
      default: () => CB
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(940);

    function bR(WW) {
      let {
        title: RW,
        children: MW,
        isCalm: CW = !1,
        isElsewhere: bR = !1,
        defaultOpen: yR = !1,
        isOpen: NW,
        onToggle: eW,
        className: BW
      } = WW;
      const [tR, TW] = (0, wW.useState)(yR), gR = null !== NW && void 0 !== NW ? NW : tR;
      return (0, AW.jsxs)("div", {
        className: zR()("WorldCodeAiLog", CW && "WorldCodeAiLog-calm", bR && "WorldCodeAiLog-elsewhere", gR && "WorldCodeAiLog-open", BW),
        children: [(0, AW.jsxs)("button", {
          className: "WorldCodeAiLogToggle",
          "aria-expanded": gR,
          onClick: () => {
            void 0 === NW && TW(!gR), null === eW || void 0 === eW || eW(!gR)
          },
          children: [(0, AW.jsx)("span", {
            className: "WorldCodeAiLogChevron",
            "aria-hidden": "true",
            children: gR ? "\u25be" : "\u25b8"
          }), RW]
        }), gR && (0, AW.jsx)("div", {
          className: "WorldCodeAiLogBody",
          children: MW
        })]
      })
    }
    var yR = MW(1544),
      NW = MW(5499),
      eW = MW(1255),
      BW = MW(904),
      tR = MW(3713),
      TW = MW(35077),
      gR = MW(1413),
      iR = MW(3799),
      YW = MW(5490);
    const JW = new URL(gR.c).host;

    function PW(WW) {
      const RW = WW.trim();
      let MW;
      try {
        const WW = /^docs\//i.test(RW) ? `${gR.c}/` : `${gR.c}/docs/`,
          wW = RW.toLowerCase().replace(/^www\./, "").startsWith(`${JW}/`);
        MW = new URL(wW ? `https://${RW}` : RW, WW)
      } catch {
        return null
      }
      if ("https:" !== MW.protocol && "http:" !== MW.protocol || MW.host !== JW && MW.host !== `www.${JW}`) return null;
      const wW = MW.pathname.toLowerCase();
      return IW(wW) || null !== (0, iR.A)(wW) ? wW : (0, iR.x)(wW)
    }

    function IW(WW) {
      return WW === iR.h || WW === iR.m
    }

    function oW(WW) {
      const RW = PW(WW);
      return null === RW ? WW : `${gR.c}${RW}`
    }
    var lW = MW(613),
      FW = MW(38872),
      fW = MW.n(FW);

    function QW(WW) {
      const RW = [];
      let MW = 0;
      return WW.split("\n").forEach(((WW, wW) => {
        RW.push({
          text: WW,
          from: MW,
          index: wW
        }), MW += WW.length + 1
      })), RW
    }

    function rR(WW) {
      return WW.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
    }

    function cR(WW, RW, MW) {
      if (0 === RW.length) return null;
      let wW = null;
      for (let CW = 0; CW + RW.length <= WW.length; CW++) {
        if (RW.every(((RW, wW) => MW(WW[CW + wW].text) === RW))) {
          if (wW) return {
            ...wW,
            isOnly: !1
          };
          const MW = WW[CW + RW.length - 1];
          wW = {
            from: WW[CW].from,
            to: MW.from + MW.text.length
          }
        }
      }
      return wW ? {
        ...wW,
        isOnly: !0
      } : null
    }

    function XW(WW, RW) {
      if ("" === RW.trim()) return null;
      const MW = QW(WW),
        wW = function(WW) {
          return WW.split("\n").map((WW => WW.trim())).filter(((WW, RW, MW) => "" !== WW || RW > 0 && RW < MW.length - 1))
        }(RW),
        CW = cR(MW, wW, (WW => WW.trim()));
      if (null !== CW) return {
        from: CW.from,
        to: CW.to,
        isLoose: !CW.isOnly
      };
      const zR = WW => WW.trim().replace(/;+$/, ""),
        AW = cR(MW, wW.map(zR), zR);
      if (null !== AW) {
        const MW = WW.indexOf(RW),
          wW = -1 !== MW && (MW < AW.from || MW >= AW.to);
        return {
          from: AW.from,
          to: AW.to,
          isLoose: !AW.isOnly || wW
        }
      }
      const bR = WW.indexOf(RW);
      if (-1 !== bR) {
        var yR, NW, eW;
        const MW = /\w/.test(RW[0]) && /\w/.test(null !== (yR = WW[bR - 1]) && void 0 !== yR ? yR : "") || /\w/.test(null !== (NW = RW.at(-1)) && void 0 !== NW ? NW : "") && /\w/.test(null !== (eW = WW[bR + RW.length]) && void 0 !== eW ? eW : "");
        return {
          from: bR,
          to: bR + RW.length,
          isLoose: MW || -1 !== WW.indexOf(RW, bR + 1)
        }
      }
      const BW = RW.split("\n").map(rR).filter(Boolean),
        tR = cR(MW.filter((WW => "" !== rR(WW.text))), BW, rR);
      return null === tR ? null : {
        from: tR.from,
        to: tR.to,
        isLoose: !0
      }
    }

    function jR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = /^[ \t]*/.exec(WW)) || void 0 === MW ? void 0 : MW[0]) && void 0 !== RW ? RW : ""
    }

    function kR(WW, RW, MW, wW) {
      if (RW.from > 0 && "\n" !== WW[RW.from - 1]) return wW;
      const CW = WW.slice(RW.from, RW.to).split("\n").filter((WW => "" !== WW.trim())),
        zR = MW.split("\n").filter((WW => "" !== WW.trim()));
      if (0 === CW.length || 0 === zR.length) return wW;
      const AW = jR(CW[0]),
        bR = jR(zR[0]);
      if (AW === bR) return wW;
      const yR = zR.length > 1 && zR.length === CW.length && zR.slice(1).every(((WW, RW) => jR(WW) === jR(CW[RW + 1]))),
        NW = wW.split("\n"),
        eW = NW.findIndex((WW => "" !== WW.trim()));
      if (-1 === eW || jR(NW[eW]) === AW) return wW;
      let BW = !1;
      return NW.map(((WW, RW) => {
        var MW, wW;
        const CW = BW;
        return (null !== (MW = null === (wW = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === wW ? void 0 : wW.length) && void 0 !== MW ? MW : 0) % 2 === 1 && (BW = !BW), CW || yR && RW !== eW ? WW : function(WW, RW, MW) {
          if ("" === WW.trim()) return WW;
          const wW = jR(WW);
          return wW.startsWith(RW) ? MW + WW.slice(RW.length) : RW.startsWith(wW) ? MW.slice(0, Math.max(0, MW.length - (RW.length - wW.length))) + WW.trimStart() : WW
        }(WW, bR, AW)
      })).join("\n")
    }

    function aR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const wW = new Map;
      for (const bR of WW.split("\n")) {
        const WW = bR.trim(),
          RW = WW.replace(/;$/, "");
        "" === RW || WW.endsWith(";") || wW.has(RW) || wW.set(RW, WW)
      }
      const CW = RW.split("\n");
      let zR = !1;
      const AW = CW.map(((WW, RW) => {
        var AW, bR, yR;
        const NW = zR;
        (null !== (AW = null === (bR = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === bR ? void 0 : bR.length) && void 0 !== AW ? AW : 0) % 2 === 1 && (zR = !zR);
        const eW = WW.trim(),
          BW = wW.get(eW.replace(/;$/, ""));
        if (void 0 === BW || BW === eW || NW || zR) return WW;
        const tR = null !== (yR = CW.slice(RW + 1).find((WW => "" !== WW.trim()))) && void 0 !== yR ? yR : MW;
        return /^(?:[([`+-]|\/(?![/*]))/.test(tR.trim()) ? WW : WW.slice(0, WW.length - WW.trimStart().length) + BW
      })).join("\n");
      return AW.trim() === WW.trim() && RW.trim() !== WW.trim() ? RW : AW
    }

    function sW(WW) {
      var RW;
      return null !== (RW = WW.split("\n").find((WW => "" !== WW.trim()))) && void 0 !== RW ? RW : ""
    }

    function dW(WW, RW) {
      if (WW === RW) return 1;
      if (WW.length < 2 || RW.length < 2) return 0;
      const MW = new Map;
      for (let AW = 0; AW < WW.length - 1; AW++) {
        var wW;
        const RW = WW.slice(AW, AW + 2);
        MW.set(RW, (null !== (wW = MW.get(RW)) && void 0 !== wW ? wW : 0) + 1)
      }
      let CW = 0;
      for (let AW = 0; AW < RW.length - 1; AW++) {
        var zR;
        const WW = RW.slice(AW, AW + 2),
          wW = null !== (zR = MW.get(WW)) && void 0 !== zR ? zR : 0;
        wW > 0 && (MW.set(WW, wW - 1), CW++)
      }
      return 2 * CW / (WW.length + RW.length - 2)
    }

    function pW(WW, RW) {
      const MW = RW.split("\n").map(rR).filter(Boolean),
        wW = QW(WW).filter((WW => "" !== rR(WW.text)));
      if (0 === MW.length || 0 === wW.length) return null;
      const CW = Math.min(MW.length, wW.length);
      let zR = null;
      for (let bR = 0; bR + CW <= wW.length; bR++) {
        let WW = 0;
        for (let RW = 0; RW < CW; RW++) WW += dW(rR(wW[bR + RW].text), MW[RW]);
        WW /= MW.length, (null === zR || WW > zR.score) && (zR = {
          start: bR,
          score: WW
        })
      }
      if (null === zR || zR.score < .5) return null;
      const AW = wW.slice(zR.start, zR.start + CW);
      return {
        line: AW[0].index + 1,
        lastLine: AW[AW.length - 1].index + 1,
        text: AW.map((WW => WW.text.trim())).join("\n")
      }
    }

    function hW(WW) {
      return fW().isFunctionExpression(WW) || fW().isArrowFunction(WW)
    }

    function UW(WW) {
      return fW().isExpressionStatement(WW) && fW().isBinaryExpression(WW.expression) && fW().isPropertyAccessExpression(WW.expression.left) && ! function(WW) {
        return fW().isIdentifier(WW) && ("globalThis" === WW.text || "window" === WW.text || "self" === WW.text)
      }(WW.expression.left.expression)
    }

    function EW(WW, RW, MW) {
      let wW = MW;
      for (const zR of (null !== (CW = fW().getLeadingCommentRanges(WW, RW.getFullStart())) && void 0 !== CW ? CW : []).reverse()) {
        var CW;
        if (/\n[^\S\n]*\n/.test(WW.slice(zR.end, wW))) break;
        wW = zR.pos
      }
      return wW
    }

    function VW(WW) {
      var RW;
      const {
        parseDiagnostics: MW
      } = WW;
      return (null !== (RW = null === MW || void 0 === MW ? void 0 : MW.length) && void 0 !== RW ? RW : 0) > 0
    }

    function mR(WW) {
      const RW = fW().createSourceFile("worldCode.js", WW, fW().ScriptTarget.Latest, !1, fW().ScriptKind.JS),
        MW = [],
        wW = (CW, zR) => {
          const AW = function(WW) {
            var RW, MW;
            if (fW().isFunctionDeclaration(WW)) return null !== (RW = null === (MW = WW.name) || void 0 === MW ? void 0 : MW.text) && void 0 !== RW ? RW : null;
            if (fW().isVariableStatement(WW) && 1 === WW.declarationList.declarations.length) {
              const RW = WW.declarationList.declarations[0];
              return fW().isIdentifier(RW.name) && RW.initializer && hW(RW.initializer) ? RW.name.text : null
            }
            if (fW().isExpressionStatement(WW) && fW().isBinaryExpression(WW.expression) && WW.expression.operatorToken.kind === fW().SyntaxKind.EqualsToken && hW(WW.expression.right)) {
              const RW = WW.expression.left;
              return fW().isIdentifier(RW) ? RW.text : fW().isPropertyAccessExpression(RW) ? RW.name.text : null
            }
            return null
          }(CW);
          if (null !== AW) {
            const wW = CW.getStart(RW);
            MW.push({
              name: AW,
              from: wW,
              to: CW.getEnd(),
              commentFrom: EW(WW, CW, wW),
              topLevel: zR,
              isProperty: UW(CW)
            })
          }
          fW().forEachChild(CW, (WW => {
            wW(WW, !1)
          }))
        };
      for (const CW of RW.statements) wW(CW, !0);
      return {
        functions: MW,
        hasErrors: VW(RW)
      }
    }

    function xR(WW) {
      return mR(WW).functions
    }

    function vR(WW) {
      return WW.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
    }

    function KW(WW, RW) {
      var MW;
      const wW = WW.filter((WW => WW.name === RW)),
        CW = wW.filter((WW => !WW.isProperty)),
        zR = CW.length > 0 ? CW : wW;
      return null !== (MW = zR.find((WW => WW.topLevel))) && void 0 !== MW ? MW : zR[0]
    }

    function uW(WW, RW) {
      return "" === WW.trim() ? `${RW.trim()}\n` : `${WW.replace(/\s*$/,"")}\n\n${RW.trim()}\n`
    }

    function OW(WW, RW, MW) {
      var wW, CW;
      const zR = mR(WW),
        {
          functions: AW
        } = zR,
        bR = xR(MW),
        yR = null !== (wW = bR.find((WW => WW.topLevel && !WW.isProperty))) && void 0 !== wW ? wW : bR.find((WW => WW.topLevel)),
        NW = vR(RW),
        eW = yR ? KW(AW, yR.name) : void 0,
        BW = null !== (CW = void 0 !== eW && !bR.some((WW => WW.topLevel && WW.name === NW)) ? eW : KW(AW, NW)) && void 0 !== CW ? CW : eW;
      return BW ? nW(WW, zR, BW, bR, MW) : uW(WW, MW)
    }

    function nW(WW, RW, MW, wW, CW) {
      let {
        functions: zR,
        hasErrors: AW
      } = RW;
      const bR = zR.some((WW => WW.from > MW.from && WW.to <= MW.to && !wW.some((RW => RW.name === WW.name))));
      if (AW && bR) return null;
      const yR = /^\s*(?:\/\/|\/\*)/.test(CW) ? MW.commentFrom : MW.from;
      return WW.slice(0, yR) + aR(WW.slice(yR, MW.to), CW.trim(), sW(WW.slice(MW.to))) + WW.slice(MW.to)
    }

    function GW(WW, RW, MW, wW, CW) {
      const zR = wW.trim();
      if (zR.includes("\n") || !zR.endsWith("{")) return null;
      const AW = mR(WW),
        bR = AW.functions.find((wW => wW.topLevel && LW(WW, wW.from) <= RW && MW < wW.to && !WW.slice(wW.from, MW).includes("\n"))),
        yR = mR(CW),
        NW = yR.functions.filter((WW => WW.topLevel)),
        eW = !yR.hasErrors && (1 === NW.length || NW.some((WW => WW.name === (null === bR || void 0 === bR ? void 0 : bR.name)))),
        BW = 1 === NW.length && NW[0].name !== (null === bR || void 0 === bR ? void 0 : bR.name) ? NW[0].name : void 0,
        tR = void 0 === BW ? void 0 : AW.functions.find((WW => WW.topLevel && WW.name === BW));
      return bR && eW ? nW(WW, AW, null !== tR && void 0 !== tR ? tR : bR, yR.functions, CW) : function(WW, RW, MW, wW, CW) {
        const zR = fW().createSourceFile("worldCode.js", WW, fW().ScriptTarget.Latest, !0, fW().ScriptKind.JS),
          AW = zR.statements.find((wW => {
            const CW = wW.getStart(zR);
            return LW(WW, CW) <= RW && MW < wW.getEnd() && !WW.slice(CW, MW).includes("\n")
          })),
          bR = fW().createSourceFile("replace.js", CW.trim(), fW().ScriptTarget.Latest, !0, fW().ScriptKind.JS),
          yR = 1 === bR.statements.length ? bR.statements[0] : void 0;
        if (!AW || !yR || VW(bR) || yR.kind !== AW.kind || !yR.getText(bR).startsWith(wW)) return null;
        const NW = AW.getStart(zR);
        return WW.slice(0, NW) + CW.trim() + WW.slice(AW.getEnd())
      }(WW, RW, MW, zR, CW)
    }

    function LW(WW, RW) {
      let MW = RW;
      for (; MW > 0 && (" " === WW[MW - 1] || "\t" === WW[MW - 1]);) MW--;
      return 0 === MW || "\n" === WW[MW - 1] ? MW : RW
    }

    function HW(WW, RW, MW) {
      const wW = RW.trim().toLowerCase();
      if ("" !== WW.trim() && ("top" === wW || "start" === wW)) return `${MW.trim()}\n\n${WW.replace(/^\s+/,"")}`;
      const CW = "end" === wW ? void 0 : KW(xR(WW), vR(RW));
      return CW ? `${WW.slice(0,CW.to)}\n\n${MW.trim()}${WW.slice(CW.to)}` : uW(WW, MW)
    }

    function DW(WW) {
      return [...new Set(xR(WW).filter((WW => WW.topLevel)).map((WW => WW.name)))]
    }
    const qR = 120,
      ZW = /\b(?:my|his|her|their)\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\b(?:i am|i'm)\s+\d+\b|\b\d+\s+years?\s+old\b|\be-?mail\b|\bphone number\b|\bpassword\b|\bwhere (?:i|we) live\b/i;

    function SW(WW) {
      let RW = WW.replace(/\s+/g, " ").trim();
      if ("" === RW || ZW.test(RW)) return null;
      if (RW.length > qR) {
        const WW = RW.slice(0, qR);
        RW = `${WW.slice(0,Math.max(WW.lastIndexOf(" "),60)).trimEnd()}\u2026`
      }
      return RW.charAt(0).toUpperCase() + RW.slice(1)
    }
    const WR = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;

    function RR(WW) {
      var RW, MW;
      const wW = null === (RW = /\(([^)]*)\)/.exec(WW)) || void 0 === RW || null === (MW = RW[1].split(",")[1]) || void 0 === MW ? void 0 : MW.trim();
      return wW && /^[A-Za-z_$][\w$]*$/.test(wW) ? [...WW.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((WW => WW[2].split(",").some((WW => WW.trim() === wW)) ? [WW[1]] : [])) : []
    }

    function MR(WW, RW) {
      const MW = new Set,
        wW = new Set,
        CW = new Set,
        zR = Object.values(WW).map((WW => {
          const RW = xR(WW),
            MW = RW.filter((WW => "playerCommand" === WW.name)).map((RW => WW.slice(RW.from, RW.to)));
          return {
            text: WW,
            found: RW,
            own: MW
          }
        })),
        AW = new Set(zR.flatMap((WW => {
          let {
            own: RW
          } = WW;
          return RW.flatMap(RR)
        })));
      for (const {
          text: yR,
          found: NW,
          own: eW
        }
        of zR) {
        for (const CW of DW(yR)) RW.has(CW) ? MW.add(CW) : wW.add(CW);
        const WW = [...eW, ...NW.filter((WW => "playerCommand" !== WW.name && AW.has(WW.name))).map((WW => yR.slice(WW.from, WW.to)))],
          zR = WW.length > 0 || !/\bplayerCommand\b/.test(yR) ? WW : [yR];
        for (const RW of zR)
          for (const WW of RW.matchAll(WR)) CW.add(`/${WW[1].split(/\s/)[0]}`)
      }
      const bR = WW => [...WW].slice(0, 12);
      return {
        callbacks: bR(MW),
        commands: bR(CW),
        functions: bR(wW)
      }
    }
    const wR = {
      onPlayerJoin: "When a player joins",
      onPlayerLeave: "When a player leaves",
      onPlayerChat: "When a player chats",
      playerCommand: "When a player types a /command",
      WR: "Runs all the time",
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

    function CR(WW) {
      const RW = wR[WW];
      if (RW) return RW;
      return `When: ${WW.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
    }

    function zM(WW) {
      return Array.isArray(WW) && WW.every((WW => "string" === typeof WW))
    }
    const AR = /\b(?:game|minigame|tycoon|rpg|simulator|obby|shop|store|upgrades?|levels?|rounds?|teams?|quests?|leaderboards?|lobby|economy|inventory|bosse?s?|waves?|missions?)\b/gi,
      bM = /,|\band\b|\bthen\b|\bplus\b|\bwith\b|\balso\b/gi;

    function yM(WW) {
      var RW, MW;
      const wW = WW.trim().split(/\s+/).length,
        CW = new Set((null !== (RW = WW.match(AR)) && void 0 !== RW ? RW : []).map((WW => WW.toLowerCase().replace(/s$/, "")))).size,
        zR = (null !== (MW = WW.match(bM)) && void 0 !== MW ? MW : []).length;
      return CW >= 2 && zR >= 2 || wW >= 30 && zR >= 3
    }

    function NR(WW) {
      const RW = WW.split(/\n|\|/).map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((WW => "" !== WW)).slice(0, 5).map((WW => WW.length > 90 ? `${WW.slice(0,89).trimEnd()}\u2026` : WW));
      return RW.length >= 2 ? RW : []
    }
    var eR = MW(3849);

    function BR(WW) {
      return WW.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
    }

    function tM(WW) {
      const RW = new Set;
      for (const MW of WW.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) RW.add(MW[1]);
      for (const MW of WW.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) RW.add(MW[1]);
      return [...RW]
    }

    function TR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const wW = new Set(RW),
        CW = new Map;
      for (const BW of RW) {
        var zR;
        const WW = BR(BW);
        CW.set(WW, [...null !== (zR = CW.get(WW)) && void 0 !== zR ? zR : [], BW])
      }
      const AW = tM(WW),
        bR = new Set(tM(MW)),
        yR = [];
      let NW = WW;
      for (const BW of AW) {
        var eW;
        if (wW.has(BW) || bR.has(BW) || !/^(on|player)[A-Z]/.test(BW)) continue;
        const WW = null !== (eW = CW.get(BR(BW))) && void 0 !== eW ? eW : [];
        1 !== WW.length || AW.includes(WW[0]) || (NW = (0, eR.y)(NW, new RegExp(`${BW}(?![\\w$])`, "g"), eR.r, (() => WW[0])), yR.push({
          from: BW,
          to: WW[0]
        }))
      }
      return {
        code: NW,
        renames: yR
      }
    }
    const gM = {
        functions: "api",
        callbacks: "callback",
        "client options": "clientOption"
      },
      iM = Object.keys(gM).map((WW => `"${WW}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
      YR = {
        type: "string",
        description: "A few plain words for the creator on what this change does, under 80 characters"
      },
      JR = {
        readOnlyHint: !0,
        destructiveHint: !1,
        idempotentHint: !0,
        openWorldHint: !1
      },
      PR = [{
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
            why: YR,
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
            why: YR,
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
            why: YR,
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
            why: YR,
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
            why: YR
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
            why: YR,
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
        annotations: JR,
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
        annotations: JR,
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
        annotations: JR,
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
        annotations: JR,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "fetch_url",
        title: "Read a docs page",
        description: `Reads a page of Bloxd's docs as Markdown. ${iR.i} lists every page with its link; then read the page, or the part of a long page, you need`,
        inputSchema: {
          type: "object",
          properties: {
            url: {
              type: "string",
              description: `${iR.i}, or a page it links to`
            }
          },
          required: ["url"]
        },
        annotations: JR,
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
              description: `${iM}, to list every one of them`
            },
            name: {
              type: "string",
              description: "One exact name to show in full, e.g. setClientOption, onPlayerJoin or RightInfoText"
            }
          },
          required: []
        },
        annotations: JR,
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
        annotations: JR,
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
        annotations: JR,
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
        annotations: JR,
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
        annotations: JR,
        _meta: {
          isLookup: !0
        }
      }];

    function IR(WW) {
      var RW;
      return !0 === (null === (RW = oR(WW)._meta) || void 0 === RW ? void 0 : RW.isLookup)
    }

    function oR(WW) {
      const RW = PR.find((RW => RW.name === WW));
      if (!RW) throw new Error(`No AI Helper tool ${WW}`);
      return RW
    }
    const lR = /^(?=[\s\S]{200})[^\n]*(?:\\n[^\n]*){3}$/,
      FR = new Set(["content", "code"]);

    function fR(WW) {
      const RW = "string" === typeof WW ? WW.split(/[./:]/).pop() : void 0;
      return function(WW) {
        return PR.some((RW => RW.name === WW))
      }(RW) ? RW : null
    }

    function QR(WW, RW) {
      return MW => {
        const wW = [];
        for (const zR of MW.matchAll(WW)) {
          const WW = fR(zR[1]);
          if (null === WW) continue;
          const MW = {};
          for (const wW of zR[2].matchAll(RW)) {
            var CW;
            MW[null !== (CW = wW[1]) && void 0 !== CW ? CW : wW[2]] = wW[3]
          }
          wW.push({
            call: {
              name: WW,
              args: MW,
              source: zR[0]
            },
            index: zR.index
          })
        }
        return wW
      }
    }

    function rM(WW) {
      return WW.replace(/\\(["\\nt])/g, ((WW, RW) => "n" === RW ? "\n" : "t" === RW ? "\t" : RW))
    }

    function cM(WW) {
      let RW = null !== WW && void 0 !== WW ? WW : {};
      if ("string" === typeof RW) try {
        RW = JSON.parse("" === RW ? "{}" : RW)
      } catch {
        return null
      }
      if ("object" !== typeof RW || null === RW) return null;
      const MW = {};
      for (const [wW, CW] of Object.entries(RW)) "string" === typeof CW ? MW[wW] = FR.has(wW) && lR.test(CW) && !CW.includes("\n") ? rM(CW) : CW : "boolean" === typeof CW || "number" === typeof CW ? MW[wW] = String(CW) : "object" !== typeof CW || null === CW || Array.isArray(CW) ? Array.isArray(CW) && CW.every((WW => "string" === typeof WW)) && (MW[wW] = CW.join("\n")) : MW[wW] = JSON.stringify(CW);
      return MW
    }

    function XR(WW, RW) {
      let MW = 0,
        wW = !1;
      for (let CW = RW; CW < WW.length; CW++) {
        const RW = WW[CW];
        if (wW) "\\" === RW ? CW++ : '"' === RW && (wW = !1);
        else if ('"' === RW) wW = !0;
        else if ("{" === RW) MW++;
        else if ("}" === RW && (MW--, 0 === MW)) return CW + 1
      }
      return null
    }

    function jM(WW, RW) {
      let MW = WW;
      for (const {
          call: wW,
          index: CW
        }
        of RW) MW = MW.slice(0, CW) + " ".repeat(wW.source.length) + MW.slice(CW + wW.source.length);
      return MW
    }
    const kM = new RegExp(`\\b(${PR.map((WW=>WW.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
    const aM = {
        formatCall: (WW, RW) => {
          const MW = Object.fromEntries(Object.entries(RW).filter((WW => {
            let [, RW] = WW;
            return void 0 !== RW
          })));
          return `${WW}(${JSON.stringify(MW)})`
        },
        declareTools: WW => WW,
        callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
        fileResult: (WW, RW, MW) => `<file path="${WW}"${MW?' open_in_editor="true"':""}>\n${RW}\n</file>`,
        editFailure: (WW, RW) => `${WW} failed: ${RW}`,
        lookupResult: (WW, RW, MW) => `${WW} ${RW}:\n${MW}`
      },
      sR = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;

    function dR(WW) {
      const RW = [];
      for (const CW of WW.matchAll(sR)) {
        const zR = fR(CW[1]),
          AW = CW.index + CW[0].length,
          bR = XR(WW, AW),
          yR = null === bR ? null : cM(WW.slice(AW, bR));
        if (null !== zR && null !== bR && null !== yR) {
          var MW, wW;
          const AW = null !== (MW = null === (wW = WW.slice(bR).match(/^\s*<\|call\|>/)) || void 0 === wW ? void 0 : wW[0]) && void 0 !== MW ? MW : "";
          RW.push({
            call: {
              name: zR,
              args: yR,
              source: WW.slice(CW.index, bR + AW.length)
            },
            index: CW.index
          })
        }
      }
      return RW
    }

    function pR(WW) {
      var RW, MW, wW, CW;
      let zR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if ("object" !== typeof WW || null === WW) return [];
      const AW = WW;
      if (Array.isArray(AW.tool_calls)) return AW.tool_calls.flatMap((WW => pR(WW, !0)));
      if (void 0 !== AW.tool_call) return pR(AW.tool_call, !0);
      if (void 0 !== AW.function) return pR(AW.function, !0);
      const bR = fR(AW.tool);
      if (null !== bR && void 0 === AW.arguments && void 0 === AW.args) {
        const {
          tool: WW,
          ...RW
        } = AW, MW = cM(RW);
        return null === MW ? [] : [{
          name: bR,
          args: MW
        }]
      }
      const yR = null !== (RW = null !== (MW = null !== (wW = null !== (CW = AW.arguments) && void 0 !== CW ? CW : AW.params) && void 0 !== wW ? wW : AW.param) && void 0 !== MW ? MW : AW.args) && void 0 !== RW ? RW : AW.input;
      if (!zR && void 0 === yR) return [];
      const NW = fR(AW.name),
        eW = cM(yR);
      return null === NW || null === eW ? [] : [{
        name: NW,
        args: eW
      }]
    }

    function hR(WW) {
      const RW = [];
      let MW = WW.indexOf("{");
      for (; - 1 !== MW;) {
        const wW = XR(WW, MW);
        let CW = [];
        if (null !== wW) try {
          CW = pR(JSON.parse(WW.slice(MW, wW)))
        } catch {}
        if (null !== wW && CW.length > 0) {
          const zR = WW.slice(MW, wW);
          RW.push(...CW.map((WW => ({
            call: {
              ...WW,
              source: zR
            },
            index: MW
          })))), MW = WW.indexOf("{", wW)
        } else MW = WW.indexOf("{", MW + 1)
      }
      return RW
    }

    function UR(WW) {
      if (Array.isArray(WW)) return `[${WW.map(UR).join(", ")}]`;
      if ("object" === typeof WW && null !== WW) {
        return `{${Object.entries(WW).map((WW=>{let[RW,MW]=WW;return`${JSON.stringify(RW)}: ${UR(MW)}`})).join(", ")}}`
      }
      return JSON.stringify(WW)
    }
    const ER = {
        formatCall: (WW, RW) => `<tool_call>\n<function=${WW}>\n${Object.entries(RW).flatMap((WW=>{let[RW,MW]=WW;return void 0===MW?[]:[`<parameter=${RW}>\n${MW}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
        declareTools: (WW, RW, MW) => MW || 0 === RW.length ? WW : `${function(WW){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${WW.map((WW=>`\n${UR({type:"function",function:{name:WW.name,description:WW.description,parameters:WW.inputSchema}})}`)).join("")}\n</tools>\n\nIf you choose to call a function ONLY reply in the following format with NO suffix:\n\n<tool_call>\n<function=example_function_name>\n<parameter=example_parameter_1>\nvalue_1\n</parameter>\n<parameter=example_parameter_2>\nThis is the value for the second parameter\nthat can span\nmultiple lines\n</parameter>\n</function>\n</tool_call>\n\n<IMPORTANT>\nReminder:\n- Function calls MUST follow the specified format: an inner <function=...></function> block must be nested within <tool_call></tool_call> XML tags\n- Required parameters MUST be specified\n- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after\n- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls\n</IMPORTANT>`}(RW)}\n\n${WW}`,
        callStyle: "Write each call in your answer as a <tool_call> holding a <function=name> block with a <parameter=name> for each argument, the code inside as it is, not escaped and in full: never as JSON or inside a code fence.",
        fileResult: (WW, RW, MW) => `<tool_response>\nview_file ${WW}${MW?" (open in the editor)":""}:\n${RW}\n</tool_response>`,
        editFailure: (WW, RW) => `<tool_response>\nError: ${RW}\n</tool_response>`,
        lookupResult: (WW, RW, MW) => `<tool_response>\n${WW} ${RW}:\n${MW}\n</tool_response>`
      },
      VR = QR(/(?:<tool_call>\s*)?<function=([\w.:/-]+)>((?:(?!<tool_call\b|<function=)[\s\S])*?(?:<\/parameter>(?=\s*(?:<tool_call\b|<function=|$))|(?=<\/function>|<\/tool_call>)))(?:<\/function>(?:\s*<\/tool_call>)?|<\/tool_call>|\s*(?=<tool_call\b|<function=|$))/g, /<parameter(?:=([\w-]+)|\s+name\s*=\s*"([^"]+)")\s*>\n?([\s\S]*?)(?:\n?<\/parameter>|(?=<parameter[=\s])|\n?$)/g),
      mM = new Set(["path", "why", "name", "after", "question", "allow_other", "note"]),
      xM = {
        formatCall: (WW, RW) => `<tool_call name="${WW}">\n${Object.entries(RW).flatMap((WW=>{let[RW,MW]=WW;return void 0===MW?[]:[`<param name="${RW}">${mM.has(RW)?MW:`\n${MW}\n`}</param>\n`]})).join("")}</tool_call>`,
        declareTools: WW => WW,
        callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
        fileResult: (WW, RW, MW) => `<tool_result name="view_file" path="${WW}"${MW?' open_in_editor="true"':""}>\n${RW}\n</tool_result>`,
        editFailure: (WW, RW) => `<tool_result name="${WW}" is_error="true">\n${RW}\n</tool_result>`,
        lookupResult: (WW, RW, MW) => `<tool_result name="${WW}" about="${RW.replace(/"/g,"'")}">\n${MW}\n</tool_result>`
      },
      vM = QR(/<tool_call\s+name\s*=\s*"([^"]+)"\s*>((?:(?!<tool_call\b)[\s\S])*?(?:<\/param(?:eter)?>(?=\s*(?:<tool_call\b|$))|(?=<\/(?:tool_call|invoke|function)>)))(?:<\/(?:tool_call|invoke|function)>|\s*(?=<tool_call\b|$))/g, /<param(?:eter)?(?:\s+name\s*=\s*"([^"]+)"|=([\w-]+))\s*>\n?([\s\S]*?)\n?<\/param(?:eter)?>/g),
      KR = {
        simple: xM,
        qwenXml: ER,
        deepseek: aM
      },
      uR = {
        simple: vM,
        qwenXml: VR,
        deepseek: function(WW) {
          const RW = [];
          for (const bR of WW.matchAll(kM)) {
            var MW, wW, CW, zR, AW;
            const yR = fR(bR[1]),
              NW = bR.index + bR[0].length,
              eW = XR(WW, NW);
            if (null === yR || null === eW || (null !== (MW = null === (wW = RW.at(-1)) || void 0 === wW ? void 0 : wW.index) && void 0 !== MW ? MW : -1) + (null !== (CW = null === (zR = RW.at(-1)) || void 0 === zR ? void 0 : zR.call.source.length) && void 0 !== CW ? CW : 0) > bR.index) continue;
            const BW = cM(WW.slice(NW, eW));
            if (null === BW) continue;
            const tR = /^\s*\)/.exec(WW.slice(eW)),
              TW = WW.slice(bR.index, eW + (null !== (AW = null === tR || void 0 === tR ? void 0 : tR[0].length) && void 0 !== AW ? AW : 0));
            RW.push({
              call: {
                name: yR,
                args: BW,
                source: TW
              },
              index: bR.index
            })
          }
          return RW
        }
      },
      OR = ["simple", "qwenXml"];

    function nR(WW) {
      return "deepseek" === WW ? "simple" : WW
    }
    const GR = /<\|[a-z_]+\|>/g,
      LR = /^[ \t]*`{1,2}[ \t]*$/gm,
      HR = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
      DR = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
      qM = /```[\w-]*/g,
      ZR = /^[\s[\],]*$/,
      SR = {
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

    function WM(WW) {
      return oR(WW.name).inputSchema.required.every((RW => void 0 !== WW.args[RW]))
    }

    function RM(WW, RW) {
      const MW = fR(WW),
        wW = cM(RW);
      return null === MW || null === wW ? null : {
        name: MW,
        args: wW
      }
    }

    function MM(WW, RW) {
      const MW = [];
      for (const wW of function(WW) {
          const RW = nR(WW),
            MW = OR.filter((WW => WW !== RW));
          return [uR[RW], ...WW === RW ? [] : [uR[WW]], ...MW.map((WW => uR[WW])), dR, hR]
        }(RW)) MW.push(...wW(jM(WW, MW)));
      return MW.map((WW => {
        let {
          call: RW
        } = WW;
        return RW
      }))
    }

    function wM(WW, RW) {
      return MM(WW, RW).sort(((WW, RW) => SR[WW.name] - SR[RW.name]))
    }

    function CM(WW) {
      return function(WW) {
        const RW = [...WW.matchAll(qM)],
          MW = [];
        let wW = 0;
        for (; wW < RW.length;) {
          const CW = RW[wW],
            zR = RW.at(wW + 1);
          void 0 !== zR && "```" === zR[0] ? (ZR.test(WW.slice(CW.index + CW[0].length, zR.index)) && MW.push({
            from: CW.index,
            to: zR.index + zR[0].length
          }), wW += 2) : (MW.push({
            from: CW.index,
            to: CW.index + CW[0].length
          }), wW++)
        }
        let CW = WW;
        for (const {
            from: zR,
            to: AW
          }
          of MW.reverse()) CW = CW.slice(0, zR) + CW.slice(AW);
        return CW
      }(WW.replace(GR, "").replace(LR, "").replace(HR, "").replace(DR, ""))
    }

    function zw(WW) {
      return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(WW)
    }
    const AM = new Set(["WR", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
      bw = {
        playerCommand: {
          stopsWhen: WW => `${WW} !== undefined && ${WW} !== false`,
          passedOn: !1
        },
        onPlayerChat: {
          stopsWhen: WW => `${WW} === false || ${WW} === null`,
          passedOn: !0
        },
        onPlayerDamagingOtherPlayer: {
          stopsWhen: WW => `${WW} === "preventDamage"`,
          passedOn: !0
        }
      };

    function yw(WW) {
      var RW;
      const MW = fW().createSourceFile("worldCode.js", WW, fW().ScriptTarget.Latest, !0, fW().ScriptKind.JS),
        {
          parseDiagnostics: wW
        } = MW;
      return {
        file: MW,
        hasErrors: (null !== (RW = null === wW || void 0 === wW ? void 0 : wW.length) && void 0 !== RW ? RW : 0) > 0
      }
    }

    function NM(WW) {
      return void 0 !== WW && (fW().isFunctionExpression(WW) || fW().isArrowFunction(WW))
    }

    function eM(WW) {
      if (fW().isFunctionDeclaration(WW) && WW.name) return {
        bC: WW,
        nameNode: WW.name
      };
      if (fW().isVariableStatement(WW) && 1 === WW.declarationList.declarations.length) {
        const RW = WW.declarationList.declarations[0],
          MW = RW.initializer && BM(RW.initializer);
        if (fW().isIdentifier(RW.name) && NM(MW)) return {
          bC: MW,
          nameNode: RW.name
        }
      }
      const RW = tw(WW),
        MW = RW && BM(RW.value);
      return RW && NM(MW) ? {
        bC: MW,
        nameNode: RW.name
      } : null
    }

    function BM(WW) {
      return fW().isParenthesizedExpression(WW) ? BM(WW.expression) : WW
    }

    function tw(WW) {
      return fW().isExpressionStatement(WW) && fW().isBinaryExpression(WW.expression) && WW.expression.operatorToken.kind === fW().SyntaxKind.EqualsToken && fW().isIdentifier(WW.expression.left) ? {
        name: WW.expression.left,
        value: WW.expression.right
      } : null
    }

    function TM(WW) {
      return fW().isIdentifier(WW) ? [WW.text] : WW.elements.flatMap((WW => fW().isOmittedExpression(WW) ? [] : TM(WW.name)))
    }

    function gw(WW) {
      if (!fW().isVariableStatement(WW)) return null;
      const RW = WW.declarationList.declarations.find((WW => fW().isIdentifier(WW.name) && "CONFIG" === WW.name.text));
      return null !== RW && void 0 !== RW && RW.initializer && fW().isObjectLiteralExpression(RW.initializer) ? RW.initializer : null
    }

    function iw(WW, RW) {
      return RW.statements.map((MW => {
        var wW;
        const CW = function(WW, RW, MW) {
            let wW = MW.getStart(RW);
            for (const zR of (null !== (CW = fW().getLeadingCommentRanges(WW, MW.getFullStart())) && void 0 !== CW ? CW : []).reverse()) {
              var CW;
              if (/\n[^\S\n]*\n/.test(WW.slice(zR.end, wW))) break;
              wW = zR.pos
            }
            return wW
          }(WW, RW, MW),
          zR = eM(MW);
        if (null !== zR && void 0 !== zR && zR.nameNode) {
          const WW = zR.nameNode.text;
          return {
            kind: zw(WW) ? "callback" : "function",
            names: [WW],
            from: CW,
            to: MW.getEnd(),
            node: MW
          }
        }
        const AW = fW().isVariableStatement(MW) ? MW.declarationList.declarations.flatMap((WW => TM(WW.name))) : [];
        if (gw(MW)) {
          return {
            kind: "config",
            names: ["CONFIG", ...AW.filter((WW => "CONFIG" !== WW))],
            from: CW,
            to: MW.getEnd(),
            node: MW
          }
        }
        if (fW().isVariableStatement(MW)) return {
          kind: "variable",
          names: AW,
          from: CW,
          to: MW.getEnd(),
          node: MW
        };
        if (fW().isClassDeclaration(MW) && MW.name) return {
          kind: "function",
          names: [MW.name.text],
          from: CW,
          to: MW.getEnd(),
          node: MW
        };
        const bR = null === (wW = tw(MW)) || void 0 === wW ? void 0 : wW.name.text;
        return {
          kind: "other",
          names: void 0 !== bR && zw(bR) ? [bR] : [],
          from: CW,
          to: MW.getEnd(),
          node: MW
        }
      }))
    }

    function YM(WW) {
      if (!fW().isPropertyAssignment(WW) && !fW().isShorthandPropertyAssignment(WW)) return null;
      const RW = WW.name;
      return fW().isIdentifier(RW) || fW().isStringLiteral(RW) ? RW.text : null
    }

    function JM(WW, RW) {
      return WW.lastIndexOf("\n", RW - 1) + 1
    }

    function PM(WW, RW) {
      var MW, wW;
      const CW = WW.slice(JM(WW, RW), RW);
      return /^\s*$/.test(CW) ? CW : `${null!==(MW=null===(wW=/^\s*/.exec(CW))||void 0===wW?void 0:wW[0])&&void 0!==MW?MW:""}\t`
    }

    function IM(WW, RW, MW) {
      const wW = WW.slice(JM(WW, RW.getStart(MW)), function(WW, RW) {
          const MW = WW.indexOf("\n", RW);
          return -1 === MW ? WW.length : MW
        }(WW, RW.getEnd())),
        CW = wW.trim(),
        zR = /^[\w$"']+\s*:/.test(CW) && "" === WW.slice(JM(WW, RW.getStart(MW)), RW.getStart(MW)).trim() ? wW.replace(/^\s*/, "\t") : `\t${RW.getText(MW)},`;
      return /,\s*(?:\/\/.*)?$/.test(zR) ? zR : zR.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
    }

    function oM(WW, RW) {
      let MW = WW;
      for (const wW of [...RW].sort(((WW, RW) => RW.from - WW.from))) MW = MW.slice(0, wW.from) + wW.text + MW.slice(wW.to);
      return MW
    }

    function lM(WW) {
      return WW.charAt(0).toUpperCase() + WW.slice(1)
    }

    function FM(WW) {
      return WW.replace(/[^A-Za-z0-9]+(.)?/g, ((WW, RW) => RW ? RW.toUpperCase() : ""))
    }

    function fM(WW, RW) {
      var MW, wW;
      const CW = WW.filter((WW => WW.names.includes(RW))),
        zR = CW.filter((WW => !fW().isFunctionDeclaration(WW.node) && function(WW, RW) {
          return !fW().isVariableStatement(WW) || WW.declarationList.declarations.some((WW => void 0 !== WW.initializer && TM(WW.name).includes(RW)))
        }(WW.node, RW))),
        AW = null !== (MW = zR[zR.length - 1]) && void 0 !== MW ? MW : CW[CW.length - 1];
      if ("callback" === (null === AW || void 0 === AW ? void 0 : AW.kind)) return eM(AW.node);
      const bR = "other" === (null === AW || void 0 === AW ? void 0 : AW.kind) ? null === (wW = tw(AW.node)) || void 0 === wW ? void 0 : wW.value : void 0;
      if (!bR || !fW().isIdentifier(bR)) return null;
      const yR = WW.filter((WW => {
          var RW;
          const MW = null === (RW = tw(WW.node)) || void 0 === RW ? void 0 : RW.value;
          return void 0 !== MW && fW().isIdentifier(MW) && MW.text === bR.text
        })),
        NW = WW.filter((WW => WW.names.includes(bR.text))),
        eW = 1 === NW.length && "function" === NW[0].kind ? eM(NW[0].node) : null;
      return 1 === yR.length ? eW : null
    }

    function QM(WW) {
      return WW.parameters.map((WW => fW().isIdentifier(WW.name) ? WW.name.text : null))
    }

    function rw(WW, RW, MW, wW, CW, zR, AW) {
      var bR;
      let yR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const {
        bC: NW
      } = MW, eW = NW.body;
      if (!eW) return [];
      const BW = [],
        tR = QM(NW),
        TW = [],
        gR = new Set([...tR.filter((WW => null !== WW)), ...jw(eW)]),
        iR = (WW, RW) => {
          let MW = WW;
          for (let wW = RW; gR.has(MW); wW++) MW = `${WW}${wW}`;
          return gR.add(MW), MW
        },
        YW = [];
      for (const [fW, XW] of zR.entries()) {
        var JW;
        const WW = tR[fW];
        if (void 0 !== WW && null !== (JW = NW.parameters[fW]) && void 0 !== JW && JW.dotDotDotToken) {
          TW.push(null === WW ? "undefined" : `...${WW}`);
          break
        }
        if (void 0 !== WW) {
          TW.push(null !== WW && void 0 !== WW ? WW : "undefined");
          continue
        }
        const RW = iR(XW, fW);
        YW.push(RW), TW.push(RW)
      }
      if (YW.length > 0) {
        const WW = NW.getChildren(RW).find((WW => WW.kind === fW().SyntaxKind.CloseParenToken)),
          MW = WW ? WW.getStart(RW) : -1;
        if (-1 === MW) {
          const WW = NW.parameters[0];
          if (!WW) return [];
          BW.push({
            from: WW.getStart(RW),
            to: WW.getEnd(),
            text: `(${[WW.getText(RW),...YW].join(", ")})`
          })
        } else {
          const WW = NW.parameters.hasTrailingComma ? " " : NW.parameters.length > 0 ? ", " : "";
          BW.push({
            from: MW,
            to: MW,
            text: `${WW}${YW.join(", ")}`
          })
        }
      }
      const PW = `${CW}(${TW.join(", ")})`,
        IW = iR(`${FM(AW)}Result`, 2),
        oW = bw[wW],
        lW = AM.has(wW) ? [PW] : oW ? [`const ${IW} = ${PW}`, `if (${oW.stopsWhen(IW)}) return ${IW}`] : [`const ${IW} = ${PW}`],
        FW = !AM.has(wW) && (null === (bR = null === oW || void 0 === oW ? void 0 : oW.passedOn) || void 0 === bR || bR);
      if (FW && fW().isBlock(eW)) {
        const MW = function(WW, RW) {
            const MW = new Set;
            for (const wW of WW.statements) {
              const WW = fW().isVariableStatement(wW) ? wW.declarationList.declarations[0] : void 0;
              WW && fW().isIdentifier(WW.name) && WW.initializer && cwW(WW.initializer, RW) && MW.add(WW.name.text)
            }
            return MW
          }(eW, wW),
          CW = WW => {
            if (!fW().isFunctionLike(WW) && ! function(WW, RW, MW) {
                if (!fW().isIfStatement(WW) || !fW().isReturnStatement(WW.thenStatement) || !WW.thenStatement.expression) return !1;
                const wW = WW.thenStatement.expression;
                return fW().isIdentifier(wW) && RW.has(wW.text) && WW.expression.getText(MW).startsWith(`${wW.text} `)
              }(WW, MW, RW)) {
              if (fW().isReturnStatement(WW) && !WW.expression) BW.push({
                from: WW.getStart(RW),
                to: WW.getEnd(),
                text: `return ${IW}`
              });
              else if (fW().isReturnStatement(WW) && WW.expression) {
                const wW = XM(WW.expression, MW);
                wW && BW.push({
                  from: wW.getStart(RW),
                  to: wW.getEnd(),
                  text: `${wW.text} !== undefined ? ${wW.text} : ${IW}`
                })
              }
              fW().forEachChild(WW, CW)
            }
          };
        eW.statements.forEach(CW);
        const zR = eW.statements[eW.statements.length - 1];
        if (!zR || !fW().isReturnStatement(zR) && !fW().isThrowStatement(zR)) {
          const MW = eW.getEnd() - 1,
            wW = zR ? PM(WW, zR.getStart(RW)) : `${WW.slice(JM(WW,NW.getStart(RW)),NW.getStart(RW)).replace(/\S.*$/,"")}\t`,
            CW = WW.slice(JM(WW, MW), MW),
            AW = /^\s*$/.test(CW) ? `${wW}return ${IW}\n${CW}` : `\n${wW}return ${IW}\n`;
          BW.push({
            from: /^\s*$/.test(CW) ? JM(WW, MW) : MW,
            to: MW,
            text: AW
          })
        }
      }
      const QW = fW().isBlock(eW) ? [...eW.statements] : [],
        rR = QW.findIndex((WW => ! function(WW, RW) {
          return fW().isExpressionStatement(WW) && cwW(WW.expression, RW)
        }(WW, wW))),
        cR = QW[(-1 === rR ? QW.length : rR) - 1];
      if (yR && AM.has(wW) && cR) BW.push({
        from: cR.getEnd(),
        to: cR.getEnd(),
        text: `\n${PM(WW,cR.getStart(RW))}${PW}`
      });
      else if (fW().isBlock(eW)) {
        const MW = eW.statements[0],
          wW = MW ? PM(WW, MW.getStart(RW)) : `${WW.slice(JM(WW,NW.getStart(RW)),NW.getStart(RW)).replace(/\S.*$/,"")}\t`,
          CW = eW.getStart(RW) + 1,
          zR = void 0 !== MW && !WW.slice(CW, MW.getStart(RW)).includes("\n");
        BW.push({
          from: CW,
          to: zR ? MW.getStart(RW) : CW,
          text: `\n${lW.map((WW=>`${wW}${WW}`)).join("\n")}${MW?zR?`\n${wW}`:"":"\n"}`
        })
      } else {
        const MW = WW.slice(JM(WW, NW.getStart(RW)), NW.getStart(RW)).replace(/\S.*$/, ""),
          wW = iR("ownResult", 2),
          CW = FW ? [`const ${wW} = ${eW.getText(RW)}`, `return ${wW} !== undefined ? ${wW} : ${IW}`] : [`return ${eW.getText(RW)}`];
        BW.push({
          from: eW.getStart(RW),
          to: eW.getEnd(),
          text: `{\n${[...lW,...CW].map((WW=>`${MW}\t${WW}`)).join("\n")}\n${MW}}`
        })
      }
      return BW
    }

    function cwW(WW, RW) {
      return fW().isCallExpression(WW) && fW().isIdentifier(WW.expression) && WW.expression.text.endsWith(lM(RW)) && WW.expression.text !== lM(RW)
    }

    function XM(WW, RW) {
      return fW().isIdentifier(WW) ? RW.has(WW.text) ? WW : null : fW().isConditionalExpression(WW) ? XM(WW.whenFalse, RW) : null
    }

    function jw(WW) {
      const RW = [],
        MW = WW => {
          fW().isIdentifier(WW) && RW.push(WW.text), fW().forEachChild(WW, MW)
        };
      return MW(WW), RW
    }

    function kw(WW, RW, MW) {
      var wW, CW;
      return (0, eR.i)(null !== (wW = null === (CW = WW.body) || void 0 === CW ? void 0 : CW.getText(RW)) && void 0 !== wW ? wW : "", new RegExp(`${MW}\\s*\\(`), eR.r).length > 0
    }

    function aw(WW, RW, MW) {
      var wW;
      const {
        owner: CW,
        heading: zR
      } = MW, AW = null !== (wW = MW.overrides) && void 0 !== wW ? wW : new Set;
      if ("" === WW.trim() && !0 !== MW.chainCallbacks) {
        const WW = `${zR?`${zR}\n`:""}${RW.trim()}\n`,
          {
            file: MW,
            hasErrors: wW
          } = yw(WW);
        if (wW) return null;
        const CW = iw(WW, MW);
        return {
          text: WW,
          added: CW.flatMap((WW => "config" === WW.kind ? [] : WW.names)),
          chained: [],
          settings: CW.flatMap((WW => {
            var RW;
            const MW = "config" === WW.kind ? gw(WW.node) : null;
            return (null !== (RW = null === MW || void 0 === MW ? void 0 : MW.properties) && void 0 !== RW ? RW : []).flatMap((WW => {
              const RW = YM(WW);
              return null === RW ? [] : [RW]
            }))
          }))
        }
      }
      const bR = yw(WW),
        yR = yw(RW);
      if (bR.hasErrors || yR.hasErrors) return null;
      const NW = iw(WW, bR.file),
        eW = iw(RW, yR.file),
        BW = new Set(NW.flatMap((WW => WW.names))),
        tR = new Set(BW),
        TW = [],
        gR = [],
        iR = [],
        YW = [];
      let JW = [];
      const PW = eW.find((WW => "config" === WW.kind)),
        IW = NW.find((WW => "config" === WW.kind));
      if (PW) {
        const MW = gw(PW.node),
          wW = IW ? gw(IW.node) : null;
        if (MW && wW) {
          const CW = function(WW, RW, MW, wW, CW, zR, AW) {
            const bR = new Map;
            for (const IW of MW.properties) {
              const WW = YM(IW);
              null !== WW && bR.set(WW, IW)
            }
            const yR = [],
              NW = [],
              eW = [],
              BW = new Map;
            for (const IW of zR.properties) {
              const WW = YM(IW);
              if (null === WW) continue;
              const MW = bR.get(WW);
              if (MW) {
                if (AW.has(WW) && fW().isPropertyAssignment(MW) && fW().isPropertyAssignment(IW)) {
                  const wW = IW.initializer.getText(CW);
                  MW.initializer.getText(RW) !== wW && (yR.push({
                    from: MW.initializer.getStart(RW),
                    to: MW.initializer.getEnd(),
                    text: wW
                  }), BW.set(MW, wW), NW.push(WW))
                }
              } else eW.push(IM(wW, IW, CW)), NW.push(WW)
            }
            if (0 === eW.length) return {
              edits: yR,
              settings: NW
            };
            const tR = MW.getEnd() - 1,
              TW = MW.properties[MW.properties.length - 1];
            if (!WW.slice(MW.getStart(RW), tR).includes("\n")) {
              const WW = MW.properties.map((WW => {
                const MW = BW.get(WW);
                return fW().isPropertyAssignment(WW) && void 0 !== MW ? `\t${WW.name.getText(RW)}: ${MW},` : `\t${WW.getText(RW)},`
              }));
              return {
                edits: [{
                  from: MW.getStart(RW),
                  to: MW.getEnd(),
                  text: `{\n${[...WW,...eW].join("\n")}\n}`
                }],
                settings: NW
              }
            }
            const gR = void 0 !== TW && !MW.properties.hasTrailingComma,
              iR = JM(WW, tR),
              YW = WW.slice(iR, tR);
            if ("" === YW.trim()) return gR && yR.push({
              from: TW.getEnd(),
              to: TW.getEnd(),
              text: ","
            }), yR.push({
              from: iR,
              to: iR,
              text: `${eW.join("\n")}\n`
            }), {
              edits: yR,
              settings: NW
            };
            const JW = iR + YW.trimEnd().length,
              PW = gR && TW.getEnd() === JW;
            return gR && !PW && yR.push({
              from: TW.getEnd(),
              to: TW.getEnd(),
              text: ","
            }), yR.push({
              from: JW,
              to: tR,
              text: `${PW?",":""}\n${eW.join("\n")}\n`
            }), {
              edits: yR,
              settings: NW
            }
          }(WW, bR.file, wW, RW, yR.file, MW, AW);
          TW.push(...CW.edits), JW = CW.settings
        } else if (MW) {
          if (tR.has("CONFIG")) return null;
          const wW = function(WW, RW) {
              const MW = RW.statements[0];
              return MW ? JM(WW, MW.getStart(RW)) : WW.length
            }(WW, bR.file),
            CW = wW > 0 && "\n" !== WW[wW - 1] ? "\n" : "";
          TW.push({
            from: wW,
            to: wW,
            text: `${CW}${RW.slice(PW.from,PW.to)}\n\n`
          }), JW = MW.properties.flatMap((WW => {
            const RW = YM(WW);
            return null === RW ? [] : [RW]
          }))
        }
      }
      const oW = [],
        lW = (WW, MW) => {
          const wW = oW[oW.length - 1],
            CW = void 0 !== wW && wW >= 0 && wW === MW - 1 && !/\n[^\S\n]*\n/.test(RW.slice(eW[wW].to, eW[MW].from)) ? "\n" : "\n\n";
          gR.push(0 === gR.length ? WW : `${CW}${WW}`), oW.push(MW)
        };
      for (const [fW, QW] of eW.entries()) {
        if ("config" === QW.kind) continue;
        const wW = RW.slice(QW.from, QW.to);
        if ("callback" === QW.kind) {
          const RW = QW.names[0],
            zR = fM(NW, RW);
          if (!zR && BW.has(RW)) {
            if (!0 === MW.chainCallbacks) continue;
            return null
          }
          if (!zR && !0 !== MW.chainCallbacks) {
            tR.has(RW) || (lW(wW, fW), iR.push(RW), tR.add(RW));
            continue
          }
          const AW = `${FM(CW)}${lM(RW)}`,
            eW = eM(QW.node);
          if (null === eW || void 0 === eW || !eW.nameNode) continue;
          if (!tR.has(AW)) {
            const WW = eW.nameNode.getStart(yR.file) - QW.from,
              RW = eW.nameNode.getEnd() - QW.from;
            lW(wW.slice(0, WW) + AW + wW.slice(RW), fW), iR.push(AW), tR.add(AW)
          }
          const gR = QM(eW.bC).map(((WW, RW) => null !== WW && void 0 !== WW ? WW : `arg${RW}`));
          if (!zR) {
            const WW = `${AW}(${gR.join(", ")})`,
              MW = `${FM(CW)}Result`;
            lW(`function ${RW}(${gR.join(", ")}) {\n\t${AM.has(RW)?WW:`const ${MW} = ${WW}\n\treturn ${MW}`}\n}`, -1), iR.push(RW), tR.add(RW);
            continue
          }
          kw(zR.bC, bR.file, AW) || (TW.push(...rw(WW, bR.file, zR, RW, AW, gR, CW, !0 === MW.runsLast)), YW.push(RW));
          continue
        }
        const zR = QW.names.filter((WW => !tR.has(WW)));
        if ("other" === QW.kind || QW.names.length > 0 && zR.length === QW.names.length) {
          lW(wW, fW), iR.push(...zR);
          for (const WW of zR) tR.add(WW)
        }
      }
      let FW = oM(WW, TW);
      if (gR.length > 0) {
        const WW = FW.replace(/\s*$/, "");
        FW = `${""===WW?"":`${WW}\n\n`}${zR?`${zR}\n`:""}${gR.join("")}\n`
      }
      return yw(FW).hasErrors ? null : {
        text: FW,
        added: iR,
        chained: YW,
        settings: JW
      }
    }

    function sM(WW) {
      const {
        file: RW
      } = yw(WW);
      return new Set(iw(WW, RW).flatMap((WW => WW.names)))
    }

    function dM(WW) {
      const {
        file: RW
      } = yw(WW), MW = new Set, wW = WW => {
        fW().isCallExpression(WW) && fW().isIdentifier(WW.expression) && MW.add(WW.expression.text), fW().forEachChild(WW, wW)
      };
      return wW(RW), MW
    }

    function pM(WW) {
      return !yw(WW).hasErrors
    }

    function hM(WW) {
      return yw(WW).file
    }

    function UM(WW) {
      return {
        from: WW.getFullStart(),
        to: WW.getEnd()
      }
    }

    function EM(WW) {
      if (!/\buse_?prefab\s*\(/i.test(WW)) return {
        code: WW,
        calls: []
      };
      const RW = hM(WW),
        MW = function(WW) {
          const RW = new Map;
          for (const MW of WW.statements)
            if (fW().isVariableStatement(MW))
              for (const WW of MW.declarationList.declarations)
                if (fW().isIdentifier(WW.name) && "CONFIG" === WW.name.text && WW.initializer && fW().isObjectLiteralExpression(WW.initializer))
                  for (const MW of WW.initializer.properties) fW().isPropertyAssignment(MW) && (fW().isIdentifier(MW.name) || fW().isStringLiteral(MW.name)) && RW.set(MW.name.text, MW.initializer.getText());
          return RW
        }(RW),
        wW = [],
        CW = [],
        zR = WW => {
          var RW;
          return fW().isPropertyAccessExpression(WW) && fW().isIdentifier(WW.expression) && "CONFIG" === WW.expression.text && null !== (RW = MW.get(WW.name.text)) && void 0 !== RW ? RW : WW.getText()
        },
        AW = WW => WW && (fW().isStringLiteral(WW) || fW().isNoSubstitutionTemplateLiteral(WW)) ? WW.text : WW && fW().isObjectLiteralExpression(WW) ? WW.properties.flatMap((WW => fW().isPropertyAssignment(WW) && (fW().isIdentifier(WW.name) || fW().isStringLiteral(WW.name)) ? [`${WW.name.text}: ${zR(WW.initializer)}`] : fW().isShorthandPropertyAssignment(WW) && MW.has(WW.name.text) ? [`${WW.name.text}: ${MW.get(WW.name.text)}`] : [])).join("\n") : "";
      for (const bR of RW.statements) {
        const WW = fW().isExpressionStatement(bR) ? bR.expression : null;
        if (!WW || !fW().isCallExpression(WW) || !fW().isIdentifier(WW.expression) || !/^use_?prefab$/i.test(WW.expression.text)) continue;
        const [RW, MW] = WW.arguments;
        if (RW && (fW().isStringLiteral(RW) || fW().isNoSubstitutionTemplateLiteral(RW))) wW.push({
          name: RW.text,
          settings: AW(MW)
        });
        else {
          if (!RW || !fW().isObjectLiteralExpression(RW)) continue;
          {
            const WW = WW => {
                var MW;
                return null === (MW = RW.properties.find((RW => fW().isPropertyAssignment(RW) && fW().isIdentifier(RW.name) && RW.name.text === WW))) || void 0 === MW ? void 0 : MW.initializer
              },
              MW = WW("name");
            MW && fW().isStringLiteral(MW) && wW.push({
              name: MW.text,
              settings: AW(WW("settings"))
            })
          }
        }
        CW.push({
          ...UM(bR),
          text: ""
        })
      }
      return {
        code: oM(WW, CW),
        calls: wW
      }
    }

    function VM(WW) {
      if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(WW)) return WW;
      const RW = hM(WW),
        MW = new Set(RW.statements.flatMap((WW => fW().isFunctionDeclaration(WW) && WW.name ? [WW.name.text] : []))),
        wW = [];
      for (const CW of RW.statements)
        if (fW().isExpressionStatement(CW) && fW().isBinaryExpression(CW.expression) && CW.expression.operatorToken.kind === fW().SyntaxKind.EqualsToken && fW().isIdentifier(CW.expression.left) && MW.add(CW.expression.left.text), fW().isVariableStatement(CW))
          for (const WW of CW.declarationList.declarations) {
            const RW = WW.initializer;
            RW && fW().isIdentifier(RW) && zw(RW.text) && !MW.has(RW.text) && wW.push({
              from: RW.getStart(),
              to: RW.getEnd(),
              text: "function () {}"
            }), RW && fW().isIdentifier(WW.name) && MW.add(WW.name.text)
          }
      return oM(WW, wW)
    }

    function mw(WW, RW) {
      if (!WW.includes("api.setBlockRect(")) return WW;
      const MW = hM(WW);
      if (MW.statements.some((WW => {
          var RW;
          return fW().isFunctionDeclaration(WW) && "fillBox" === (null === (RW = WW.name) || void 0 === RW ? void 0 : RW.text) && 3 !== WW.parameters.length
        }))) return WW;
      const wW = [],
        CW = WW => {
          var MW;
          fW().isFunctionDeclaration(WW) && "fillBox" === (null === (MW = WW.name) || void 0 === MW ? void 0 : MW.text) || (fW().isCallExpression(WW) && fW().isPropertyAccessExpression(WW.expression) && fW().isIdentifier(WW.expression.expression) && "api" === WW.expression.expression.text && "setBlockRect" === WW.expression.name.text && 3 === WW.arguments.length && !RW.includes(WW.getText()) && wW.push({
            from: WW.expression.getStart(),
            to: WW.expression.getEnd(),
            text: "fillBox"
          }), fW().forEachChild(WW, CW))
        };
      return CW(MW), oM(WW, wW)
    }
    const xw = [{
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
        keywords: ["simulator", "simulater", "sim", "mining", "mine", "miner", "ore", "Az", "clicker", "grind", "grinding", "upgrade", "upgrades", "pickaxe", "pickaxes", "buy pickaxes", "better pickaxe", "rich", "backpack", "sell", "auto sell", "autosell", "brain rot"],
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
      vw = [{
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
          name: "ieW",
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
        uses: ["ieW"],
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
        uses: ["repeatEvery", "ieW"],
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
      }].flatMap((WW => WW.helpers.map((RW => ({
        ...RW,
        group: WW.group,
        code: WW.code,
        ...WW.uses ? {
          uses: WW.uses
        } : {}
      })))));

    function KM(WW) {
      const {
        file: RW,
        hasErrors: MW
      } = yw(`(${WW})`), wW = RW.statements[0];
      if (MW || 1 !== RW.statements.length || !wW || !fW().isExpressionStatement(wW)) return null;
      const CW = wW.expression;
      return fW().isParenthesizedExpression(CW) ? CW.expression : CW
    }

    function uM(WW) {
      return !!(fW().isNumericLiteral(WW) || fW().isStringLiteral(WW) || fW().isNoSubstitutionTemplateLiteral(WW)) || (WW.kind === fW().SyntaxKind.TrueKeyword || WW.kind === fW().SyntaxKind.FalseKeyword || WW.kind === fW().SyntaxKind.NullKeyword || (!fW().isPrefixUnaryExpression(WW) || WW.operator !== fW().SyntaxKind.MinusToken && WW.operator !== fW().SyntaxKind.PlusToken ? fW().isArrayLiteralExpression(WW) ? WW.elements.every((WW => uM(WW))) : !!fW().isObjectLiteralExpression(WW) && WW.properties.every((WW => fW().isPropertyAssignment(WW) && (fW().isIdentifier(WW.name) || fW().isStringLiteral(WW.name)) && uM(WW.initializer))) : fW().isNumericLiteral(WW.operand)))
    }

    function OM(WW) {
      return fW().isNumericLiteral(WW) || fW().isPrefixUnaryExpression(WW) && fW().isNumericLiteral(WW.operand)
    }

    function nM(WW) {
      return fW().isStringLiteral(WW) || fW().isNoSubstitutionTemplateLiteral(WW) ? WW.text : null
    }
    const GM = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;

    function LM(WW) {
      const RW = WW.trim();
      if ("" === RW) return [];
      if (RW.startsWith("{")) try {
        const WW = JSON.parse(RW);
        if (WW && "object" === typeof WW && !Array.isArray(WW)) return Object.entries(WW).map((WW => {
          let [RW, MW] = WW;
          return [RW, JSON.stringify(MW)]
        }))
      } catch {}
      const MW = function(WW) {
        const RW = KM(WW);
        if (!RW || !fW().isObjectLiteralExpression(RW)) return null;
        const MW = [];
        for (const wW of RW.properties) {
          if (!fW().isPropertyAssignment(wW) || !fW().isIdentifier(wW.name) && !fW().isStringLiteral(wW.name)) return null;
          MW.push([wW.name.text, wW.initializer.getText()])
        }
        return MW
      }(RW.startsWith("{") ? RW : `{${RW}}`);
      if (MW) return MW;
      const wW = [];
      let CW = null,
        zR = 0;
      const AW = RW.startsWith("{") ? RW.replace(/^\{/, "").replace(/\}\s*$/, "") : RW;
      for (const BW of AW.split("\n")) {
        var bR, yR, NW, eW;
        const WW = /\/\//.exec(BW.replace(GM, (WW => " ".repeat(WW.length)))),
          RW = (WW ? BW.slice(0, WW.index) : BW).trim();
        if ("" === RW) continue;
        if (CW && zR > 0) CW[1] += `\n${RW}`;
        else {
          const WW = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(RW.replace(/^[-*\u2022]\s*/, ""));
          if (!WW) continue;
          CW = [WW[1], WW[2]], wW.push(CW)
        }
        const MW = RW.replace(GM, "");
        zR = Math.max(0, zR + (null !== (bR = null === (yR = MW.match(/[[{(]/g)) || void 0 === yR ? void 0 : yR.length) && void 0 !== bR ? bR : 0) - (null !== (NW = null === (eW = MW.match(/[\]})]/g)) || void 0 === eW ? void 0 : eW.length) && void 0 !== NW ? NW : 0))
      }
      return wW.map((WW => {
        let [RW, MW] = WW;
        return [RW, MW.trim().replace(/[,;]\s*$/, "")]
      }))
    }

    function HM(WW, RW, MW) {
      const wW = "string" === WW.kind || "block" === WW.kind || "item" === WW.kind || "mob" === WW.kind;
      let CW = KM(RW),
        zR = RW;
      var AW;
      if (CW && uM(CW) || !wW || (AW = RW, zR = JSON.stringify(AW.replace(/^["'`]|["'`]$/g, "")), CW = KM(zR)), !CW || !uM(CW)) return {
        problem: `${WW.key} must be a plain value like ${WW.value}, not ${RW}`
      };
      if ("number" === WW.kind && !OM(CW)) return {
        problem: `${WW.key} must be a number, like ${WW.value}`
      };
      if ("boolean" === WW.kind && CW.kind !== fW().SyntaxKind.TrueKeyword && CW.kind !== fW().SyntaxKind.FalseKeyword) return {
        problem: `${WW.key} must be true or false`
      };
      if ("position" === WW.kind && ! function(WW) {
          return fW().isArrayLiteralExpression(WW) && 3 === WW.elements.length && WW.elements.every(OM)
        }(CW) && (CW.kind !== fW().SyntaxKind.NullKeyword || "null" !== WW.value)) return {
        problem: `${WW.key} must be a position [x, y, z], like ${"null"===WW.value?"[0, 10, 0]":WW.value}`
      };
      if ("list" === WW.kind && !fW().isArrayLiteralExpression(CW)) return {
        problem: `${WW.key} must be a list in [ ], like ${WW.value}`
      };
      if ("list" === WW.kind && WW.names && MW && fW().isArrayLiteralExpression(CW)) return function(WW, RW, MW, wW) {
        const CW = WW => WW.elements.flatMap(((RW, wW) => {
            if (fW().isArrayLiteralExpression(RW)) return CW(RW);
            if ("item" === MW && fW().isObjectLiteralExpression(RW)) return zR(RW);
            const AW = WW.elements[wW + 1],
              bR = void 0 !== AW && fW().isArrayLiteralExpression(AW);
            return null === nM(RW) || bR ? [] : [RW]
          })),
          zR = WW => WW.properties.flatMap((WW => {
            if (!fW().isPropertyAssignment(WW) || !["item", "ammo", "projectile", "items"].includes(WW.name.getText().replace(/["']/g, ""))) return [];
            const RW = WW.initializer;
            return fW().isArrayLiteralExpression(RW) ? CW(RW) : null !== nM(RW) ? [RW] : []
          })),
          AW = CW(RW),
          bR = RW.getStart();
        let yR = RW.getText();
        const NW = [],
          eW = [],
          BW = new Map([...WW.value.matchAll(/\{ item: "([^"]+)"[^}]*?action: "(\w+)"/g)].map((WW => [WW[2], WW[1]]))),
          tR = WW => {
            var RW;
            const MW = WW.parent,
              wW = null === MW || void 0 === MW ? void 0 : MW.parent;
            if (!fW().isPropertyAssignment(MW) || "item" !== MW.name.getText().replace(/["']/g, "") || !wW || !fW().isObjectLiteralExpression(wW)) return;
            const CW = WW => wW.properties.find((RW => fW().isPropertyAssignment(RW) && RW.name.getText().replace(/["']/g, "") === WW)),
              zR = CW("action"),
              AW = zR ? BW.get(null !== (RW = nM(zR.initializer)) && void 0 !== RW ? RW : "") : void 0;
            return AW ? {
              property: MW,
              item: AW,
              named: void 0 !== CW("name")
            } : void 0
          };
        for (const gR of [...AW].reverse()) {
          var TW;
          const WW = null !== (TW = nM(gR)) && void 0 !== TW ? TW : "",
            RW = wW(MW, WW),
            CW = null === RW ? tR(gR) : void 0;
          if (CW) {
            const RW = CW.named ? `item: ${JSON.stringify(CW.item)}` : `item: ${JSON.stringify(CW.item)}, name: ${JSON.stringify(WW)}`;
            NW.unshift(`"${WW}" isn't an item, so it is a ${CW.item}${CW.named?"":` named "${WW}"`}`), yR = `${yR.slice(0,CW.property.getStart()-bR)}${RW}${yR.slice(CW.property.getEnd()-bR)}`
          } else null === RW ? eW.unshift(`"${WW}"`) : RW !== WW && (NW.unshift(`"${WW}" is "${RW}"`), yR = `${yR.slice(0,gR.getStart()-bR)}${JSON.stringify(RW)}${yR.slice(gR.getEnd()-bR)}`)
        }
        if (eW.length > 0) return {
          problem: `${eW.join(", ")} ${1===eW.length?"item"===MW?"isn't an":"isn't a":"aren't"} ${MW} name${1===eW.length?"":"s"}, so ${WW.key} kept ${WW.value}`
        };
        return {
          value: yR,
          ...NW.length > 0 ? {
            fixed: NW.join(", ")
          } : {}
        }
      }(WW, CW, WW.names, MW);
      if (wW) {
        const RW = nM(CW);
        if (null === RW) return {
          problem: `${WW.key} must be text in quotes, like ${WW.value}`
        };
        if (("block" === WW.kind || "item" === WW.kind || "mob" === WW.kind) && MW) {
          const wW = MW(WW.kind, RW);
          if (null === wW) return {
            problem: `"${RW}" isn't ${"item"===WW.kind?"an":"a"} ${WW.kind} name, so ${WW.key} kept ${WW.value}`
          };
          if (wW !== RW) return {
            value: JSON.stringify(wW),
            fixed: `"${RW}" is "${wW}"`
          }
        }
      }
      return {
        value: CW.getText()
      }
    }
    const DM = xw,
      qw = {
        parkour: "parkour, obbies and races to a finish",
        pvp: "fighting other players: arenas, kills, last one standing",
        teams: "teams against each other",
        survival: "surviving mobs, zombies and waves",
        tag: "tag, infection, hide and seek: one side chases the other",
        economy: "coins, shops, upgrades and saved progress",
        rounds: "lobbies, countdowns and rounds that start and end",
        building: "building and changing blocks",
        zM: "places, areas and random picks in the world",
        players: "players' items, health, scores and teleports",
        screen: "text on players' screens and announcements"
      };

    function ZM(WW) {
      return WW.toLowerCase().replace(/[^a-z0-9]/g, "")
    }

    function SM(WW) {
      var RW;
      const MW = ZM(WW);
      return null !== (RW = DM.find((WW => ZM(WW.name) === MW || ZM(WW.title) === MW))) && void 0 !== RW ? RW : null
    }

    function Ww(WW) {
      var RW;
      return null !== (RW = vw.find((RW => RW.name === WW))) && void 0 !== RW ? RW : null
    }

    function Rw(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
      const MW = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return 0 === WW.length ? "" : `const CONFIG = {\n${WW.map((WW=>{var MW;return`\t${WW.key}: ${null!==(MW=RW.get(WW.key))&&void 0!==MW?MW:WW.value}, // ${WW.about}`})).join("\n")}\n}`
      }(WW.settings, RW);
      return `${""===MW?"":`${MW}\n\n`}${WW.code.trim()}\n`
    }

    function Mw(WW) {
      const RW = [],
        MW = new Set,
        wW = WW => {
          const CW = Ww(WW);
          if (CW && !MW.has(CW.group)) {
            MW.add(CW.group);
            for (const WW of null !== (zR = CW.uses) && void 0 !== zR ? zR : []) {
              var zR;
              wW(WW)
            }
            RW.push(CW)
          }
        };
      for (const CW of WW) wW(CW);
      return RW
    }

    function ww(WW, RW) {
      const MW = WW => WW.replace(/\s+/g, ""),
        wW = new RegExp(`function ${RW.name}\\s*\\([^)]*\\)\\s*\\{`).exec(WW);
      return !!wW && MW(RW.code).includes(MW(WW.slice(wW.index, wW.index + 200)).slice(0, 60))
    }

    function Cw(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
      if (!pM(WW)) return {
        text: WW,
        added: []
      };
      let MW = WW;
      const wW = [];
      for (let CW = 0; CW < 4; CW++) {
        const WW = sM(MW),
          CW = [...dM(MW)].filter((wW => {
            const CW = Ww(wW);
            return null !== CW && !RW.has(wW) && (!WW.has(wW) || ww(MW, CW))
          }));
        let zR = !1;
        for (const RW of Mw(CW)) {
          const AW = aw(MW, RW.code, {
            owner: RW.group,
            chainCallbacks: !0
          });
          AW && AW.text !== MW && (MW = AW.text, zR = !0, WW.has(RW.name) || wW.push(...vw.filter((WW => WW.group === RW.group && CW.includes(WW.name))).map((WW => WW.name))))
        }
        if (!zR) break
      }
      return {
        text: MW,
        added: [...new Set(wW)]
      }
    }

    function zC(WW, RW) {
      const MW = [...sM(RW.code)].filter((WW => "CONFIG" !== WW && !zw(WW)));
      if (0 === MW.length) return WW.includes(RW.code.trim().slice(0, 80));
      const wW = pM(WW) ? sM(WW) : new Set;
      return 2 * MW.filter((WW => wW.has(WW))).length >= MW.length
    }

    function Aw(WW) {
      const RW = /^const CONFIG = \{\n([\s\S]*?)\n\}/m.exec(WW.code);
      return RW ? RW[1].split("\n").flatMap((WW => {
        const RW = /^\t(\w+): (.+?), \/\/ (.*)$/.exec(WW);
        if (!RW) return [];
        const [, MW, wW, CW] = RW;
        return [{
          key: MW,
          kind: /^-?\d/.test(wW) ? "number" : "true" === wW || "false" === wW ? "boolean" : wW.startsWith("[") ? "list" : "string",
          value: wW,
          about: CW
        }]
      })) : []
    }

    function bC(WW) {
      const RW = new Set(WW.settings.map((WW => WW.key))),
        MW = new Map;
      for (const wW of Mw(dM(WW.code)))
        for (const WW of Aw(wW)) RW.has(WW.key) || MW.set(WW.key, WW);
      return [...MW.values()]
    }

    function yC(WW, RW, MW, wW) {
      const CW = bC(RW),
        zR = function(WW, RW, MW) {
          const wW = new Map,
            CW = [],
            zR = [],
            AW = new Map(WW.settings.map((WW => [WW.key.toLowerCase(), WW])));
          for (const [bR, yR] of LM(RW)) {
            const RW = AW.get(bR.toLowerCase());
            if (!RW) {
              CW.push(`${WW.name} has no setting ${bR}`);
              continue
            }
            if (/^CONFIG\.\w+$/.test(yR.trim())) continue;
            const NW = HM(RW, yR, MW);
            "problem" in NW ? CW.push(NW.problem) : (wW.set(RW.key, NW.value), NW.fixed && zR.push(NW.fixed))
          }
          return {
            values: wW,
            problems: CW,
            fixed: zR
          }
        }({
          ...RW,
          settings: [...RW.settings, ...CW]
        }, MW, wW),
        AW = CW.filter((WW => zR.values.has(WW.key))),
        bR = aw(WW, Rw({
          ...RW,
          settings: [...RW.settings, ...AW]
        }, zR.values), {
          owner: RW.name,
          overrides: new Set(zR.values.keys()),
          heading: "" === WW.trim() ? void 0 : `// ---- ${RW.title} (ready-made) ----`
        });
      if (!bR) return {
        error: pM(WW) ? "The prefab couldn't be fitted into the code around it without breaking it. Put it into an empty file instead." : "The code around it doesn't parse (a bracket is likely missing), so the prefab couldn't be fitted in. Fix the code first."
      };
      const yR = Cw(bR.text);
      return {
        prefab: RW,
        text: yR.text,
        problems: zR.problems,
        fixed: zR.fixed,
        chained: bR.chained,
        helpers: yR.added
      }
    }

    function Nw(WW) {
      return `- ${WW.name}: ${WW.summary}. Settings: ${WW.settings.map((WW=>WW.key)).join(", ")}`
    }

    function ew(WW) {
      var RW;
      const MW = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.trim().toLowerCase()) && void 0 !== RW ? RW : "",
        wW = Object.keys(qw).includes(MW) ? MW : void 0,
        CW = wW ? DM.filter((WW => WW.category === wW)) : DM,
        zR = wW ? vw.filter((WW => WW.category === wW)) : [];
      return `${wW?`Prefabs for ${qw[wW]}:`:""===MW||"all"===MW?"Every prefab:":`There is no category ${WW}. Every prefab:`}\n${CW.length>0?CW.map(Nw).join("\n"):"(none yet)"}${zR.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${zR.map((WW=>`- ${WW.signature}: ${WW.about}`)).join("\n")}`:""}${wW?"":`\nCategories: ${Object.keys(qw).join(", ")}`}`
    }

    function Bw(WW, RW) {
      var MW;
      const wW = [...WW.settings, ...bC(WW)].map((WW => `- ${WW.key} (${WW.kind}, default ${WW.value}): ${WW.about}`)).join("\n"),
        CW = null !== (MW = WW.changeable) && void 0 !== MW && MW.length ? `\nFunctions to replace by name for a game of their own:\n${WW.changeable.map((WW=>`- ${WW.name}: ${WW.about}`)).join("\n")}` : "",
        zR = RW ? `\nIts code, as it goes in with the default settings:\n${Rw(WW)}` : "";
      return `${WW.name} (${WW.title}): ${WW.summary}.\nHow it plays: ${WW.howItPlays}\nSettings:\n${wW}${CW}${WW.setup?`\nThe creator sets up: ${WW.setup}`:""}${zR}`
    }

    function tC(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
      const MW = function(WW) {
          return new Set(WW.toLowerCase().split(/[^a-z0-9]+/).filter((WW => WW.length > 1)))
        }(WW),
        wW = ` ${WW.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
      return DM.map((WW => {
        const RW = WW.keywords.map((WW => WW.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((WW => WW.includes(" ") ? wW.includes(` ${WW} `) : MW.has(WW))),
          CW = Math.min(...RW.map((WW => wW.indexOf(` ${WW} `))));
        return {
          prefab: WW,
          score: RW.length,
          first: CW
        }
      })).filter((WW => WW.score > 0)).sort(((WW, RW) => RW.score - WW.score || WW.first - RW.first)).slice(0, RW).map((WW => WW.prefab))
    }
    const Tw = /\byour\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\bhow old\b|\bwhere (?:do )?you live\b|\be-?mail\b|\bphone number\b|\bpassword\b/i;

    function gC(WW) {
      var RW, MW, wW, CW, zR, AW;
      const bR = function(WW) {
          var RW, MW;
          const wW = null === (RW = WW.questions) || void 0 === RW ? void 0 : RW.trim();
          if (null !== (MW = WW.question) && void 0 !== MW && MW.trim() || !wW) return WW;
          const CW = {
            ...WW,
            question: wW
          };
          if (!/^[[{]/.test(wW)) return CW;
          try {
            const RW = JSON.parse(wW),
              MW = Array.isArray(RW) ? RW[0] : RW;
            if ("string" === typeof MW) {
              const wW = Array.isArray(RW) ? RW.slice(1).filter((WW => "string" === typeof WW)) : [];
              return {
                ...WW,
                question: MW,
                ...wW.length > 0 && void 0 === WW.choices ? {
                  choices: wW.join("\n")
                } : {}
              }
            }
            if ("object" !== typeof MW || null === MW) return CW;
            const zR = MW,
              AW = WW => "string" === typeof WW ? WW : "boolean" === typeof WW ? String(WW) : Array.isArray(WW) ? WW.filter((WW => "string" === typeof WW)).join("\n") : void 0,
              bR = {
                question: AW(zR.question),
                choices: AW(zR.choices),
                allow_other: AW(zR.allow_other)
              };
            return {
              ...WW,
              ...Object.fromEntries(Object.entries(bR).filter((WW => {
                let [, RW] = WW;
                return void 0 !== RW
              })))
            }
          } catch {
            return wW.startsWith("[") ? CW : WW
          }
        }(WW),
        yR = null !== (RW = null === (MW = bR.question) || void 0 === MW ? void 0 : MW.replace(/\s+/g, " ").trim()) && void 0 !== RW ? RW : "",
        NW = (null !== (wW = bR.choices) && void 0 !== wW ? wW : "").includes("\n") ? (null !== (CW = bR.choices) && void 0 !== CW ? CW : "").split("\n") : (null !== (zR = bR.choices) && void 0 !== zR ? zR : "").split("|"),
        eW = [...new Set(NW.map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
        BW = "false" !== (null === (AW = bR.allow_other) || void 0 === AW ? void 0 : AW.trim().toLowerCase());
      return "" === yR || Tw.test(yR) || eW.length < 2 && !BW ? null : {
        question: yR,
        choices: eW,
        allowOther: BW
      }
    }
    const iC = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc]all) (?:the |an? |one )?(?:${PR.map((WW=>WW.name)).filter((WW=>"plan"!==WW&&"remember"!==WW)).join("|")})\b[^\n.]*\.?[ \t]*\n*)+`),
      Yw = /^\s*(?:\.\.\.|\u2026)\s*$/,
      Jw = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;

    function Pw(WW, RW) {
      if (Yw.test(WW)) return !0;
      const MW = new Set(RW.split("\n").map((WW => WW.trim())));
      return WW.split("\n").some((WW => Jw.test(WW) && !MW.has(WW.trim())))
    }
    const Iw = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
      ow = String.raw`on[A-Z]\w*|tick|playerCommand`,
      lw = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${ow})\s*\(|(?:${ow})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
      Fw = new RegExp(`^(?:${ow})$`),
      fw = new RegExp(String.raw`^(${ow})(\s*\([^()\n]*\)\s*\{)`, "gm"),
      Qw = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${ow})\b|\buse_?prefab\s*\(`, "i");

    function rC(WW) {
      return WW.replace(/^\s*```[\w-]*[^\n]*\n/, "").replace(/\n?```\s*$/, "")
    }

    function cC(WW) {
      return rC(WW).replace(/\s*$/, "\n")
    }

    function Xw(WW, RW) {
      switch (WW) {
        case "view_file":
          return void 0 === RW.path ? RW : {
            path: jC(RW.path)
          };
        case "fetch_url":
          return void 0 === RW.url ? RW : {
            url: oW(RW.url)
          };
        default:
          return RW
      }
    }

    function jC(WW) {
      return WW.trim().replace(/^\.?\//, "")
    }

    function kC(WW) {
      return WW.replace(fw, "function $1$2")
    }

    function aC(WW) {
      return WW.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
    }

    function sw(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        zR = arguments.length > 5 ? arguments[5] : void 0,
        AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
        bR = arguments.length > 7 ? arguments[7] : void 0,
        yR = arguments.length > 8 ? arguments[8] : void 0;
      const NW = {
          ...MW
        },
        eW = new Set,
        BW = [];
      let tR;
      const gR = (WW, RW, MW, wW) => {
        BW.push({
          tool: WW,
          path: RW,
          reason: MW,
          closest: null,
          functions: [],
          ...wW,
          ...tR ? {
            call: tR
          } : {}
        })
      };
      let iR = WW;
      const YW = Object.keys(MW).some(TW.i),
        JW = WW => null !== WW && YW && (0, TW.i)(WW),
        PW = WW => JW(WW) ? `${TW.n}${(0,TW.j)(WW)}` : null !== zR && void 0 !== zR ? zR : jC(WW),
        IW = WW => void 0 === zR || JW(WW),
        oW = WW => void 0 !== bR && !bR.has(WW),
        lW = new Set,
        FW = WW => JSON.stringify({
          name: WW.name,
          args: WW.args
        }),
        fW = WW => {
          const RW = JW(WW) ? {
              name: "view_world_code",
              args: {}
            } : {
              name: "view_file",
              args: {
                path: WW
              }
            },
            MW = tR ? {
              ...RW,
              call: tR
            } : RW;
          lW.add(FW(MW)), rR(MW)
        },
        QW = [],
        rR = WW => {
          const RW = FW(WW);
          QW.length < 4 && !QW.some((WW => FW(WW) === RW)) && QW.push(WW)
        },
        cR = [],
        jR = [],
        dW = [],
        hW = new Map,
        UW = new Map,
        EW = (WW, RW, MW) => {
          var wW;
          const CW = function(WW) {
              const RW = WW.replace(/\s+/g, " ").trim();
              if (RW.length <= 80) return RW;
              const MW = RW.slice(0, 80);
              return `${MW.slice(0,Math.max(MW.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
            }(null !== RW && void 0 !== RW ? RW : ""),
            zR = null !== (wW = hW.get(WW)) && void 0 !== wW ? wW : [];
          var AW;
          ("" === CW || zR.includes(CW) || hW.set(WW, [...zR, CW]), "" !== CW) && UW.set(WW, [...null !== (AW = UW.get(WW)) && void 0 !== AW ? AW : [], {
            why: CW,
            code: MW
          }])
        },
        VW = new Set,
        mR = [],
        xR = new Map,
        KW = [];
      let uW = null;
      const nW = [];
      let LW = [];
      const qR = (WW, RW) => void 0 !== zR && !JW(WW) && (null === WW || jC(WW) !== zR) && lw.test(RW),
        ZW = (WW, RW, MW, wW) => {
          var CW, zR;
          const AW = function(WW, RW, MW, wW) {
            const CW = SM(RW);
            return CW ? yC(WW, CW, MW, wW) : {
              error: `There is no prefab called ${RW}. The prefabs are: ${DM.map((WW=>WW.name)).join(", ")}.`
            }
          }(null !== (CW = NW[WW]) && void 0 !== CW ? CW : "", RW, MW, yR);
          return "error" in AW ? (gR("use_prefab", WW, "prefab", {
            detail: AW.error
          }), !1) : (NW[WW] = AW.text, eW.add(WW), xR.set(WW, {
            prefab: AW.prefab,
            settings: MW
          }), EW(WW, null !== wW && void 0 !== wW ? wW : AW.prefab.title, AW.text), mR.push({
            name: AW.prefab.name,
            title: AW.prefab.title,
            path: WW,
            problems: AW.problems,
            fixed: AW.fixed,
            setup: null !== (zR = AW.prefab.setup) && void 0 !== zR ? zR : null
          }), !0)
        },
        WR = (WW, RW, MW) => {
          const wW = EM(RW);
          if (0 === wW.calls.length) return !1;
          NW[WW] = wW.code, eW.add(WW);
          for (const CW of wW.calls) ZW(WW, CW.name, CW.settings, MW);
          return EW(WW, MW, wW.code), !0
        },
        RR = WW => {
          const RW = TR(kC(cC(WW)), CW);
          cR.push(RW.code), dW.push(...RW.renames)
        },
        MR = wM(WW, RW),
        wR = new Map;
      for (const TW of MR) {
        var CR, zM, AR, bM;
        const WW = null !== (CR = wR.get(TW.name)) && void 0 !== CR ? CR : 0;
        wR.set(TW.name, WW + 1), tR = {
          name: TW.name,
          nth: WW
        };
        const RW = ("replace_function" === TW.name || "insert_code" === TW.name) && void 0 === TW.args.code && void 0 !== TW.args.content ? {
            ...TW,
            args: {
              ...TW.args,
              code: TW.args.content,
              path: null !== (zM = null !== (AR = null !== (bM = TW.args.path) && void 0 !== bM ? bM : zR) && void 0 !== AR ? AR : wW) && void 0 !== zM ? zM : void 0
            }
          } : TW,
          {
            path: CW,
            content: AW,
            search: bR,
            replace: BW,
            code: YW
          } = RW.args,
          JW = oR(RW.name),
          lW = `${RW.name}\n${JSON.stringify({...RW.args,why:void 0})}`,
          FW = VW.has(lW);
        if (JW.annotations.idempotentHint && FW) iR = iR.replace(RW.source, "");
        else {
          if (VW.add(lW), IR(RW.name)) {
            const WW = Object.fromEntries(Object.entries(RW.args).flatMap((WW => {
              let [RW, MW] = WW;
              return void 0 === MW || "" === MW.trim() ? [] : [
                [RW, MW.trim()]
              ]
            })));
            rR({
              name: RW.name,
              args: Xw(RW.name, WW),
              call: tR
            })
          } else if ("add_world_code" === RW.name) {
            if (void 0 === zR) continue;
            void 0 !== YW ? RR(YW) : gR(RW.name, null, "missingArgs")
          } else if ("use_prefab" === RW.name) {
            const WW = void 0 !== CW && "" !== CW.trim() ? PW(CW) : void 0 === zR ? null !== wW && void 0 !== wW ? wW : "index.js" : null;
            if (void 0 === RW.args.name || "" === RW.args.name.trim()) gR(RW.name, WW, "missingArgs");
            else if (null !== WW && IW(WW)) {
              var yM;
              ZW(WW, RW.args.name, null !== (yM = RW.args.settings) && void 0 !== yM ? yM : "", RW.args.why)
            } else gR(RW.name, WW, "prefab", {
              detail: "A prefab goes in World Code, not in a code block."
            })
          } else if ("ask_creator" === RW.name) uW ??= gC(RW.args);
          else if ("plan" === RW.name) {
            var eR;
            if (0 === LW.length) LW = NR(null !== (eR = RW.args.steps) && void 0 !== eR ? eR : "")
          } else if ("remember" === RW.name) {
            var BR;
            const WW = SW(null !== (BR = RW.args.note) && void 0 !== BR ? BR : "");
            null !== WW && 0 === nW.length && nW.push(WW)
          } else if ("export_game" === RW.name || "switch_to_world_code" === RW.name) {
            if ("switch_to_world_code" === RW.name && void 0 === zR) continue;
            const WW = "export_game" === RW.name ? "exportGame" : "switchToWorldCode";
            var tM;
            if (!jR.some((RW => RW.kind === WW))) jR.push("export_game" === RW.name ? {
              kind: "exportGame"
            } : {
              kind: "switchToWorldCode",
              request: (null === (tM = RW.args.request) || void 0 === tM ? void 0 : tM.trim()) || null
            })
          } else if ("write_file" === RW.name) {
            var gM, iM;
            if (WM(RW))
              if (void 0 === AW || "" !== AW.trim() && !Pw(rC(AW), void 0 === CW ? "" : null !== (gM = NW[PW(CW)]) && void 0 !== gM ? gM : "")) {
                if (void 0 !== CW && void 0 !== AW && qR(CW, AW)) RR(AW);
                else if (void 0 !== CW && oW(PW(CW)) && "" !== (null !== (iM = MW[PW(CW)]) && void 0 !== iM ? iM : "").trim()) gR(RW.name, PW(CW), "unread", void 0 === AW ? void 0 : {
                  code: cC(AW)
                }), fW(PW(CW));
                else if (void 0 !== CW && void 0 !== AW) {
                  const WW = PW(CW),
                    MW = VM(cC(AW));
                  if (!IW(WW) || !WR(WW, MW, RW.args.why)) {
                    const wW = xR.get(WW),
                      CW = wW && !zC(MW, wW.prefab) ? yC(MW, wW.prefab, wW.settings, yR) : null;
                    NW[WW] = CW && !("error" in CW) ? CW.text : MW, eW.add(WW), EW(WW, RW.args.why, AW)
                  }
                }
              } else gR(RW.name, void 0 === CW ? null : PW(CW), "placeholder");
            else gR(RW.name, void 0 === CW ? null : PW(CW), "missingArgs")
          } else if ("replace_function" === RW.name || "insert_code" === RW.name) {
            var YR, JR, PR;
            const WW = void 0 === CW ? null : PW(CW),
              MW = "replace_function" === RW.name ? RW.args.name : RW.args.after,
              wW = void 0 === MW ? void 0 : vR(MW),
              zR = null === WW ? "" : null !== (YR = NW[WW]) && void 0 !== YR ? YR : "",
              AW = void 0 === YW ? "" : rC(YW),
              bR = null === WW ? void 0 : xR.get(WW),
              yR = "replace_function" === RW.name && void 0 !== bR && void 0 !== wW && Fw.test(wW) && sM(bR.prefab.code).has(wW),
              BW = null === WW || void 0 === YW || void 0 === MW ? null : yR ? null !== (JR = null === (PR = aw(zR, AW, {
                owner: "extra",
                runsLast: !0
              })) || void 0 === PR ? void 0 : PR.text) && void 0 !== JR ? JR : null : "replace_function" === RW.name ? OW(zR, MW, AW) : HW(zR, MW, AW);
            null === WW || null === BW ? gR(RW.name, WW, WM(RW) ? "brokenCode" : "missingArgs") : Pw(AW, zR) ? gR(RW.name, WW, "placeholder") : "replace_function" === RW.name && oW(WW) && DW(zR).includes(null !== wW && void 0 !== wW ? wW : "") ? (gR(RW.name, WW, "unread", {
              code: cC(AW)
            }), fW(WW)) : (NW[WW] = BW, eW.add(WW), EW(WW, RW.args.why, AW))
          } else {
            var lR, FR;
            const WW = !0 === (null === (lR = JW._meta) || void 0 === lR ? void 0 : lR.appliesAtOnce) ? null !== zR && void 0 !== zR ? zR : wW : void 0 === CW ? null : PW(CW),
              MW = null === WW ? "" : null !== (FR = NW[WW]) && void 0 !== FR ? FR : "",
              AW = WM(RW) && void 0 !== bR,
              yR = AW ? XW(MW, bR) : null,
              tR = null === yR && void 0 !== bR && bR.includes("\\n") ? XW(MW, rM(bR)) : null,
              TW = null !== yR && void 0 !== yR ? yR : tR,
              iR = null !== tR ? rM(null !== BW && void 0 !== BW ? BW : "") : null !== BW && void 0 !== BW ? BW : "",
              YW = null === TW || void 0 === bR ? iR : aR(MW.slice(TW.from, TW.to), kR(MW, TW, null !== tR ? rM(bR) : bR, iR), sW(MW.slice(TW.to)));
            if (null === WW || null === TW) gR(RW.name, WW, AW ? "noMatch" : "missingArgs", {
              closest: AW ? pW(MW, bR) : null,
              functions: IW(WW) ? DW(MW) : []
            });
            else if (Pw(YW, MW.slice(TW.from, TW.to))) gR(RW.name, WW, "placeholder");
            else {
              const wW = IW(WW) ? GW(MW, TW.from, TW.to, null !== bR && void 0 !== bR ? bR : "", iR) : null;
              NW[WW] = null !== wW && void 0 !== wW ? wW : MW.slice(0, TW.from) + YW + MW.slice(TW.to), eW.add(WW), EW(WW, RW.args.why, YW)
            }
          }
          iR = iR.replace(RW.source, "")
        }
      }
      tR = void 0, iR = CM(iR);
      const fR = iR.replace(iC, "");
      if (iR = "" !== fR.trim() || MR.length > 0 ? fR : iR, 0 === MR.length) {
        var QR, cM;
        const RW = [...WW.matchAll(Iw)],
          MW = 1 === RW.length ? RW[0][1] : null,
          CW = null !== (QR = null !== zR && void 0 !== zR ? zR : wW) && void 0 !== QR ? QR : "index.js";
        if (null !== MW && qR(null, MW)) RR(MW), iR = iR.replace(RW[0][0], "");
        else if (null !== MW && Qw.test(MW) && !Pw(MW, null !== (cM = NW[CW]) && void 0 !== cM ? cM : "")) {
          const WW = VM(cC(MW));
          IW(CW) && WR(CW, WW, void 0) || (NW[CW] = WW, eW.add(CW)), iR = iR.replace(RW[0][0], "")
        }
      }
      for (const TW of eW) {
        var XR;
        if (IW(TW)) {
          var jM;
          const WW = Object.values(NW).some((WW => /\brequire\s*\(/.test(WW)));
          NW[TW] = mw(VM(WW ? NW[TW] : NW[TW].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (jM = MW[TW]) && void 0 !== jM ? jM : "");
          const RW = new Set(Object.keys(NW).filter((WW => WW !== TW && IW(WW))).flatMap((WW => [...sM(NW[WW])]))),
            wW = Cw(NW[TW], RW);
          NW[TW] = wW.text, KW.push(...wW.added)
        }
        const WW = TR(aC(kC(NW[TW])), IW(TW) ? CW : [], null !== (XR = MW[TW]) && void 0 !== XR ? XR : "");
        NW[TW] = WW.code, dW.push(...WW.renames)
      }
      for (const TW of mR) {
        const WW = TW.problems.length > 0 ? ` Kept as it was: ${TW.problems.join("; ")}.` : "",
          RW = TW.fixed.length > 0 ? ` Names changed to real ones: ${TW.fixed.join(", ")}.` : "";
        iR += `\n\nThis uses the ready-made ${TW.title}.${RW}${WW}${TW.setup?` ${TW.setup}`:""}`
      }
      for (const {
          from: TW,
          to: XW
        }
        of dW) iR += `\n\nI renamed \`${TW}\` to \`${XW}\`, the name World Code calls.`;
      const kM = [];
      for (const TW of eW) {
        var aM;
        const WW = null !== (aM = MW[TW]) && void 0 !== aM ? aM : "";
        if (NW[TW] !== WW) {
          const RW = hW.get(TW);
          kM.push(RW ? {
            path: TW,
            before: WW,
            after: NW[TW],
            why: RW,
            parts: UW.get(TW)
          } : {
            path: TW,
            before: WW,
            after: NW[TW]
          })
        }
      }
      const sR = "direct" === AW && kM.length > 0,
        dR = kM.length > 0 || cR.length > 0;
      return {
        text: iR.replace(/\n{3,}/g, "\n\n").trim(),
        changes: kM,
        failedEdits: BW,
        renamedCallbacks: dW,
        worldCode: cR,
        inPlace: sR,
        actions: jR,
        question: dR ? null : uW,
        notes: nW,
        plan: dR ? [] : LW,
        lookups: dR ? QW.filter((WW => lW.has(FW(WW)))) : null !== uW || LW.length > 0 ? [] : QW,
        prefabs: mR,
        helpersAdded: [...new Set(KW)]
      }
    }

    function dw(WW, RW) {
      const MW = "" === WW ? [] : WW.replace(/\n$/, "").split("\n"),
        wW = "" === RW ? [] : RW.replace(/\n$/, "").split("\n");
      let CW = 0;
      for (; CW < MW.length && CW < wW.length && MW[CW] === wW[CW];) CW++;
      let zR = MW.length,
        AW = wW.length;
      for (; zR > CW && AW > CW && MW[zR - 1] === wW[AW - 1];) zR--, AW--;
      const bR = MW.slice(CW, zR),
        yR = wW.slice(CW, AW),
        NW = Array.from({
          length: bR.length + 1
        }, (() => new Array(yR.length + 1).fill(0)));
      for (let TW = bR.length - 1; TW >= 0; TW--)
        for (let WW = yR.length - 1; WW >= 0; WW--) NW[TW][WW] = bR[TW] === yR[WW] ? NW[TW + 1][WW + 1] + 1 : Math.max(NW[TW + 1][WW], NW[TW][WW + 1]);
      const eW = MW.slice(0, CW).map((WW => ({
        kind: "same",
        text: WW
      })));
      let BW = 0,
        tR = 0;
      for (; BW < bR.length || tR < yR.length;) BW < bR.length && tR < yR.length && bR[BW] === yR[tR] ? (eW.push({
        kind: "same",
        text: bR[BW]
      }), BW++, tR++) : tR < yR.length && (BW === bR.length || NW[BW][tR + 1] > NW[BW + 1][tR]) ? (eW.push({
        kind: "added",
        text: yR[tR]
      }), tR++) : (eW.push({
        kind: "removed",
        text: bR[BW]
      }), BW++);
      for (const TW of MW.slice(zR)) eW.push({
        kind: "same",
        text: TW
      });
      return eW
    }
    const pw = /\b(?:publish|export)\b|\bsave\b.{0,20}\b(?:game|world|map|it|this|work)\b/i;

    function hw(WW) {
      return pw.test(WW)
    }
    const Uw = {
      worldCode: new Set(["write_file", "edit_file", "replace_function", "use_prefab", "edit_code_in_place", "export_game", "ask_creator", "plan", "remember", "view_file", "view_chunk", "view_game_state", "get_docs", "find_names", "view_prefab", "view_errors"]),
      codeBlock: new Set(["write_file", "edit_file", "replace_function", "add_world_code", "edit_code_in_place", "switch_to_world_code", "ask_creator", "view_world_code", "view_chunk", "view_game_state", "get_docs", "find_names", "view_errors"])
    };

    function Ew(WW, RW, MW) {
      return KR[WW].formatCall(RW, MW)
    }

    function Vw(WW, RW, MW, wW) {
      return KR[MW].declareTools(WW, RW, wW)
    }

    function mC(WW) {
      const RW = null === WW.path ? WW.tool : `${WW.tool} ${WW.path}`;
      var MW;
      if ("prefab" === WW.reason) return `${RW}: ${null!==(MW=WW.detail)&&void 0!==MW?MW:"the prefab couldn't go in."} Nothing changed.`;
      if ("missingArgs" === WW.reason) return `${RW}: the call was missing an argument it needs, so nothing changed.`;
      if ("placeholder" === WW.reason) return "write_file" === WW.tool ? `${RW}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${RW}: the code had a line standing in for code left out ("// ... existing code ..."), so nothing changed. Write out every line it replaces.`;
      if ("unread" === WW.reason) return `${RW}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==WW.path&&(0,TW.i)(WW.path)?"view_world_code":"view_file"} shows.`;
      if ("brokenCode" === WW.reason) return `${RW}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
      return `${RW}: search matched nothing in the file, so nothing changed. ${WW.closest?`The closest lines (${WW.closest.line}-${WW.closest.lastLine}) are:\n${WW.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${WW.functions.length>0?`, or use replace_function with one of these names: ${WW.functions.join(", ")}`:""}.`
    }
    const xC = {
        offer: "matched",
        list: "matched",
        categories: !1,
        helperIndex: !0
      },
      vC = /\b(?:game|minigame|mini-game|gamemode|game mode|map|server)\b/i;

    function Kw(WW) {
      return Object.values(WW).some((WW => "" !== WW.trim()))
    }
    const uw = {
        format: "simple",
        nativeTools: !1
      },
      Ow = WW => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engine calls special top-level functions ("callbacks") when things happen: function onPlayerJoin(playerId) {...}, function tick(ms) {...}, function playerCommand(playerId, command) {...} and the others ${WW?"in the docs":"in the callback list"}. Define each callback once; never call callbacks yourself.\n- playerCommand gets the chat line without its "/" (e.g. "speed 2"); return true when you handled the command, so the player isn't told it is unknown.\n- tick(ms) runs 20 times a second, with the milliseconds since the last tick. Count time with it (add up ms) instead of setTimeout, and keep it light.\n- Talk to the game only through the api object: api.sendMessage(playerId, text), api.setClientOption(playerId, option, value) and the other methods ${WW?"in the docs":"in the API list"}. Use only methods, callbacks and client options that are ${WW?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables at the top level keep their values while the world runs. Players are identified by playerId (a string, not their name).\n- Values you keep per player (lists, timers, scores, teams) need a start in onPlayerJoin and removing in onPlayerLeave(playerId), so tick never uses a player who left.\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n- Settings: numbers and messages the creator may want to change (times, amounts, prices, speeds, messages shown to players, on/off switches) go in one const CONFIG = { ... } at the top of the file, each value a plain number, a quoted string or true/false with a short comment saying what it does, e.g. waveSeconds: 30, // seconds between zombie waves. The code uses CONFIG.waveSeconds, and a message that mentions a setting builds it from CONFIG ("You start with " + CONFIG.startCoins + " coins"), so changing the setting changes the message too. If the file has a CONFIG, add new settings to it and change a setting there; never make a second one. Don't move code they didn't ask about into CONFIG.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(playerId).\n- Flying: api.setClientOption(playerId, "creative", true) (false to stop).\n- Leaderboard: in onPlayerJoin, api.setClientOption(playerId, "lobbyLeaderboardInfo", { name: { displayName: "Name", sortPriority: 0 }, coins: { displayName: "Coins", sortPriority: 1 } }); then whenever a value changes, api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: 5 }, true).\n- Text on the right of the screen: api.setClientOption(playerId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(playerId, api.getClientOption(playerId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(playerId); api.setPosition(playerId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(playerId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- A player who can't play any more (e.g. out of lives): api.setPlayerGamemode(playerId, "spectator"); "survival" brings them back.\n- Mob waves: api.attemptSpawnMob(mobType, x, y, z) returns the mob's id. Keep the ids, and remove each in onMobDespawned(mobId) to know when they are all dead.\n- Removing or changing a block later: count ms in tick, then api.setBlock(x, y, z, "Air").\n- Coins as a currency: make it once in onPlayerJoin, only if they don't have it yet (a saved one comes back by itself, and setCurrency again would reset it): if (api.getCurrencyAmount(playerId, "coins") === null) api.setCurrency(playerId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(playerId, "coins", 5). When the request says anything is saved or kept after leaving (e.g. "it saves if you leave"), the coins are saved too: add persistent: true. Otherwise leave it out.\n- Values the request says must stay after leaving (e.g. when they last claimed a reward): api.setPlayerDbValue(playerId, "lastClaim", Date.now()) and api.getPlayerDbValue(playerId, "lastClaim") (null if never set); a saved value is a string or a number. Only those: lives, scores, checkpoints and timers for one game stay in top-level variables, which reset when they leave.\n- A player dying, from anything: onAttemptKillPlayer(killedPlayerId, attackingLifeformId). onPlayerKilledOtherPlayer only covers kills by players.\n- Stopping one player hurting another (e.g. teammates): onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) returns "preventDamage". onAttemptKillPlayer only stops the death, not the damage.\n- A counter of how long each player has been alive: in tick, count only while api.isAlive(playerId), and start again from 0 in onRespawnRequest (the death screen isn't time alive). Other timers don't need this.\n- A reward for reaching a count (5 kills, 10 coins): give it when the count first reaches it (=== 5, or keep a per-player flag such as rewarded[playerId] = true), never on every count after (>= 5 alone gives it again each time).\n- Telling whether a player moved: compare with where they were after any teleport of yours (update the saved position when you teleport them), or your own teleport counts as them moving.\n- A box around a player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position. A bottom corner at by would fill the block they stand in; replacing the ground under them is fine. If they should be trapped, also stop them breaking it: api.setCantChangeBlockRect(playerId, [bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2]).`,
      nw = WW => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to coding.\n\nHow code blocks work:\n- Each click runs the whole code once, from top to bottom. A code block has no callbacks: something that has to happen later or by itself (when players join, every tick, on a chat command, when a player breaks a block) needs World Code, the world's main code, where callbacks such as onPlayerJoin(playerId), tick() and playerCommand(playerId, command) are defined as functions. Write that part as World Code (see How to answer), and put what one click does in the code block.\n- myId is the id of the player who clicked the block (a string, not their name), and thisPos is the block's position as [x, y, z].\n- Talk to the game only through the api object: api.sendMessage(myId, text), api.setClientOption(myId, option, value) and the other methods ${WW?"in the docs":"in the API list"}. Use only methods and client options that are ${WW?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables made with const or let start again on every click. A value kept between clicks is assigned without const or let, after checking it is there, e.g. clicks = (typeof clicks === "number" ? clicks : 0) + 1. It lasts until World Code is next saved or the world restarts.\n- When the last line has a value, the player who clicked sees it in chat as "Result: ...".\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(myId).\n- Teleporting the player onto this block: api.setPosition(myId, thisPos[0] + 0.5, thisPos[1] + 1, thisPos[2] + 0.5).\n- A block next to this one: api.setBlock(thisPos[0], thisPos[1] + 1, thisPos[2], "Block of Gold").\n- Flying: api.setClientOption(myId, "creative", true) (false to stop).\n- Text on the right of the screen: api.setClientOption(myId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(myId, api.getClientOption(myId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(myId); api.setPosition(myId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(myId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- Coins as a currency: make it only if they don't have it yet (setCurrency again would reset it): if (api.getCurrencyAmount(myId, "coins") === null) api.setCurrency(myId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(myId, "coins", 5).\n- A box around the player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position.`,
      Gw = {
        search: "lines to find",
        replace: "lines to put instead",
        codeBlock: "...all of the code block's code...",
        file: "...the whole new file...",
        worldCode: "...only the World Code to add...",
        function: "function onPlayerJoin(playerId) {\n\t...the whole new function...\n}"
      },
      Lw = Object.values(Gw);
    const Hw = `You looked at World Code: its files are below, their paths starting ${TW.n}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${TW.n}index.js (in World Code the player is playerId; there is no myId or thisPos). A callback World Code already has is changed in place, with what it already does kept, never defined twice. Keep the code block's own change on the path ${TW.e}, and leave it out if the request is all World Code. They are taken to World Code to see the change.`;

    function Dw(WW, RW, MW, wW) {
      var CW, zR, AW, bR;
      let {
        hasWorldCodeFiles: yR,
        hasLookedUp: NW,
        movesToWorldCode: eW,
        listedPrefabs: BW,
        guidesToPrefabs: tR
      } = wW;
      const gR = RW ? TW.e : "index.js",
        YW = RW ? `${TW.n}index.js` : gR,
        JW = (WW, RW) => Ew(MW, WW, RW),
        PW = RW => WW.some((WW => WW.name === RW)),
        IW = WW.filter((WW => ["content", "replace", "code"].some((RW => RW in WW.inputSchema.properties)))),
        oW = PW("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${JW("edit_code_in_place",{why:"what this fix does",search:Gw.search,replace:Gw.replace})}` : "",
        lW = PW("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world as your custom game now!\n${JW("export_game",{})}` : "",
        FW = PW("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a name the file doesn't have yet, it adds your new callback or function at the end, changing nothing already there:\n${JW("replace_function",{path:YW,name:"onPlayerJoin",why:"what the new function does",code:Gw.function})}` : "",
        fW = PW("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${JW("edit_file",{path:gR,why:"what this part's change does",search:Gw.search,replace:Gw.replace})}` : "",
        QW = RW ? `2. Then give the whole new code with a write_file call, exactly like this:\n${JW("write_file",{path:gR,why:"what the change does",content:Gw.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${JW("write_file",{path:gR,why:"what the change does",content:Gw.file})}`,
        rR = RW ? "" : ` If there is no code yet, write it in ${gR}.`,
        cR = JW("switch_to_world_code", {}),
        XW = RW ? yR ? `\n${Hw}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is no myId or thisPos), exactly like this:\n${JW("add_world_code",{code:Gw.worldCode})}\n${eW?"In your sentences, say which part goes in World Code: they are taken there, and it is put in for them.":"In your sentences, say which part goes in World Code and that they should press the World Code button to switch there and add it."} Leave out the code block's write_file call if the request is all World Code.${PW("view_world_code")?`\nTo see what World Code already has before you write that part (a callback it may already define), look at it first:\n${JW("view_world_code",{})}`:""}\nWhen the request is all World Code, also call switch_to_world_code after add_world_code: it takes them to World Code, where its AI Helper is asked to add your World Code part. Give a request instead when they asked to go to World Code for something else:\n${cR}` : "",
        jR = tR && PW("use_prefab") && BW.length >= 2,
        kR = jR ? BW.slice(0, 3).map((WW => WW.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
        aR = jR ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
        sW = PW("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or asking to make their game better, more fun or cooler without saying how ("make it more fun"): then the choices are 2 to 4 different ideas built on what their code already has, each a short concrete thing to add, not a general word like "more fun" (e.g. for a snowball fight: "Power-ups that drop in", "A score at the top", "Last player standing wins"). Otherwise build it, choosing sensibly, and say in your sentences what you chose so they can ask for something different. Never ask for personal details (name, age, school, where they live).${aR}\n${JW("ask_creator",{question:"What kind of game should it be?",choices:kR,allow_other:"true"})}` : "",
        dW = PW("plan") ? `\n${"deepseek"===MW?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, the first one playable. Then send no code: the creator builds the steps one at a time. Build it at once instead if it is really only a few lines:\n${JW("plan",{steps:"Give each player 0 coins when they join, shown on screen\nEarn a coin for each block broken\nA /shop command that sells a sword for 10 coins"})}` : "",
        pW = null !== (CW = BW[0]) && void 0 !== CW ? CW : SM("parkour"),
        hW = (null !== (zR = null === pW || void 0 === pW ? void 0 : pW.settings) && void 0 !== zR ? zR : []).slice(0, 2).map((WW => `${WW.key}: ${WW.value}`)).join("\n");
      return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from what they asked. Don't promise it works: they will press Submit and try it. No long lectures.\n${QW}${FW}${fW}${oW}${XW}${PW("use_prefab")?`\nFor a game, or a feature (a kit, a shop, rewards...), that a prefab listed below fits, put the prefab in with use_prefab instead of writing that code yourself: it is tested code that works, and it fits around the code they already have: their code stays as it is, and where both have the same callback (onPlayerJoin...) both run, so never rewrite their code to make room for a prefab. Give only the settings the request changes, one per line as key: value, each value written as in JavaScript (text in quotes, positions as [x, y, z]); the rest keep their defaults. For a game like the one asked for but not the same, still use the closest prefab, then in the same answer, after the use_prefab call, change what it doesn't do: replace one of its functions by name, or add a callback, with replace_function. If no prefab fits, write the code yourself:\n${JW("use_prefab",{name:null!==(AW=null===pW||void 0===pW?void 0:pW.name)&&void 0!==AW?AW:"parkour",settings:hW,why:null!==(bR=null===pW||void 0===pW?void 0:pW.summary)&&void 0!==bR?bR:"a parkour course"})}`:""}${lW}${sW}${dW}${PW("remember")?`\nIf the creator tells you something lasting about their game that later requests should know (its idea, its rules, names of teams, items or places in it), also call remember with one short sentence about the game. They are asked before it is kept. Only what they said, never personal details, and not what the code already shows:\n${JW("remember",{note:"A zombie survival game: a wave comes every 30 seconds and players start with a sword"})}`:""}${function(WW,RW,MW){const wW=WW.some((WW=>"fetch_url"===WW.name)),CW={view_file:`To see another of their files from the list, before you change it:\n${RW("view_file",{path:"shop.js"})}`,view_world_code:`To see World Code, so you can change it yourself:\n${RW("view_world_code",{})}`,view_chunk:`To see the blocks around the player (or give a position "x y z" for another chunk near them):\n${RW("view_chunk",{})}`,view_game_state:`To see where the player is, their health, what they hold and carry, and the players and mobs near them:\n${RW("view_game_state",{})}`,fetch_url:`To read the docs: ${iR.i} lists every docs page with its link. Read it, then the page you need (for a long page, the part that has it):\n${RW("fetch_url",{url:iR.i})}`,get_docs:wW?`Or, for a name you already know, read its docs in full, or list every api method, callback or client option by name (${iM}):\n${RW("get_docs",{name:"setClientOption"})}\n${RW("get_docs",{list:"callbacks"})}`:`To read the full docs of an api method, callback or client option the lists only name:\n${RW("get_docs",{name:"setClientOption"})}`,find_names:`To find the exact names of blocks, items or mobs:\n${RW("find_names",{words:"gold sword"})}`,view_errors:`To see all the errors their world showed, not only the newest:\n${RW("view_errors",{})}`,list_prefabs:`To see the prefabs for one kind of game, and the ready-made functions for it:\n${RW("list_prefabs",{category:"pvp"})}`,view_prefab:`To see one prefab in full, every setting and the functions to replace to change it, before you use it:\n${RW("view_prefab",{name:"parkour"})}`},zR=WW.flatMap((WW=>{const RW=CW[WW.name];return void 0===RW?[]:[RW]}));return 0===zR.length?MW?"\nYou have looked things up as many times as you can: answer now with what you found.":"":`\
      nIf you need to see something before you can answer well, look it up first: answer with only look - up calls, no other words and no code, and you are asked again with what they found.$ {
        wW ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when the answer depends on it."
      }\
      n$ {
        zR.join("\n")
      }
      `}(WW,JW,NW)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't ask for: suggest them in your answer instead.${rR}\n4. If the request is not about their ${RW?"code block":"World Code"}, or asks for something unsafe or unkind, say briefly that you can only help with their game's code.\nDo not put code anywhere except in ${IW.map((WW=>WW.name)).join(" or ")} calls. ${function(WW){return KR[WW].callStyle}(MW)}`
    }

    function qC(WW, RW, MW) {
      return Object.keys(WW).filter((WW => !MW || !(0, TW.i)(WW))).sort(((WW, MW) => (MW === RW ? 1 : 0) - (WW === RW ? 1 : 0) || WW.localeCompare(MW)))
    }

    function Zw(WW, RW, MW) {
      var wW;
      const CW = qC(WW, RW, MW);
      return null !== RW && CW.includes(RW) ? RW : null !== (wW = CW[0]) && void 0 !== wW ? wW : null
    }

    function Sw(WW) {
      const RW = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${WW.includes("index.ts")?"index.ts":"index.js"}`;
      return `Only ${RW} runs by itself: another file runs when ${RW} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${RW}.\n`
    }

    function WC(WW, RW) {
      var MW;
      const {
        files: wW,
        activePath: CW
      } = WW, zR = !0 === WW.codeBlock, AW = qC(wW, CW, zR);
      if (0 === AW.length || AW.every((WW => "" === wW[WW].trim()))) return zR ? "There is no code yet: the code block is empty." : AW.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
      const bR = null !== (MW = Zw(wW, CW, zR)) && void 0 !== MW ? MW : AW[0];
      return `${AW.length>1?`Their files:\n${AW.map((WW=>{const RW=""===(MW=wW[WW])?0:MW.replace(/\n$/,"").split("\n").length;var MW;return`- ${WW}: ${1===RW?"1 line":`${RW} lines`}${WW===bR?" (open in the editor, its code below)":""}`})).join("\n")}\n${zR?"":Sw(AW)}\n`:""}${function(WW,RW,MW,wW){return RW.map((RW=>KR[wW].fileResult(RW,WW[RW],RW===MW))).join("\n\n")}(wW,[bR],CW,RW)}`
    }

    function RC(WW) {
      var RW, MW, wW, CW, zR, AW;
      return {
        codeBlock: !0 === WW.codeBlock,
        hasCode: "" !== (null !== (RW = WW.files[null !== (MW = WW.activePath) && void 0 !== MW ? MW : ""]) && void 0 !== RW ? RW : "").trim(),
        hasBigFile: Object.values(WW.files).some((WW => WW.length > 6e3)),
        wantsExport: hw(WW.request),
        canAsk: !0 === WW.canAsk,
        canRemember: !0 === (null === (wW = WW.about) || void 0 === wW ? void 0 : wW.canRemember),
        isBigRequest: yM(WW.request),
        canLookUp: !0 === WW.canLookUp,
        hasOtherFiles: Object.keys(WW.files).length > 1,
        hasErrors: WW.errors.length > 0,
        canChangeWorldCode: !0 === WW.canChangeWorldCode,
        hasWorldCodeFiles: Object.keys(WW.files).some(TW.i),
        offersPrefabs: (CW = WW.request, zR = WW.files, AW = MC(WW), "never" !== AW.offer && ("always" === AW.offer || tC(CW, 1).length > 0 || yM(CW) || !Kw(zR) && vC.test(CW))),
        listsPrefabs: MC(WW).categories,
        looksUpDocs: !0 === WW.looksUpDocs
      }
    }

    function MC(WW) {
      var RW;
      return null !== (RW = WW.prefabs) && void 0 !== RW ? RW : xC
    }

    function wC(WW, RW) {
      return "deepseek" === RW ? function(WW) {
        const RW = Uw[WW ? "codeBlock" : "worldCode"];
        return PR.filter((WW => RW.has(WW.name)))
      }(!0 === WW.codeBlock) : function(WW) {
        const RW = (WW.hasCode || WW.hasBigFile) && !WW.codeBlock || !0 === WW.hasWorldCodeFiles,
          MW = !0 === WW.canLookUp,
          wW = WW.codeBlock && !0 === WW.canChangeWorldCode && !0 !== WW.hasWorldCodeFiles && MW,
          CW = {
            write_file: !0,
            edit_file: WW.hasBigFile,
            replace_function: RW,
            insert_code: !1,
            add_world_code: WW.codeBlock && !0 !== WW.hasWorldCodeFiles,
            edit_code_in_place: WW.hasCode,
            export_game: WW.wantsExport,
            switch_to_world_code: WW.codeBlock,
            ask_creator: WW.canAsk,
            remember: !0 === WW.canRemember && !WW.codeBlock,
            plan: !0 === WW.isBigRequest && WW.canAsk && !WW.codeBlock,
            view_file: MW && !0 === WW.hasOtherFiles && !WW.codeBlock,
            view_world_code: wW,
            view_chunk: MW,
            view_game_state: MW,
            get_docs: MW,
            fetch_url: MW && !0 === WW.looksUpDocs,
            find_names: MW,
            view_errors: MW && !0 === WW.hasErrors,
            use_prefab: !0 === WW.offersPrefabs && !WW.codeBlock,
            list_prefabs: MW && !0 === WW.listsPrefabs && !WW.codeBlock,
            view_prefab: MW && !0 === WW.offersPrefabs && !WW.codeBlock
          };
        let zR = PR.filter((WW => CW[WW.name]));
        for (const AW of ["remember", "plan"]) zR.filter((WW => !IR(WW.name))).length > 7 && (zR = zR.filter((WW => WW.name !== AW)));
        return zR
      }(RC(WW))
    }

    function CC(WW, RW) {
      var MW, wW;
      const CW = RC(WW),
        zR = !0 === CW.canLookUp,
        AW = (null !== (MW = null === (wW = WW.lookups) || void 0 === wW ? void 0 : wW.length) && void 0 !== MW ? MW : 0) > 0,
        bR = !0 === CW.hasWorldCodeFiles,
        yR = [CW.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", CW.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", zR ? "" : AW ? "You have looked things up as many times as you can: answer now with what you found, calling no view_ tool, get_docs or find_names." : "Answer with what you have: call no view_ tool, get_docs or find_names.", zR && !0 !== CW.hasErrors ? "Their world showed no errors, so don't call view_errors." : "", ...CW.codeBlock ? [CW.canAsk ? "" : "Build what they asked: don't call ask_creator.", bR ? `${Hw} So don't call add_world_code or view_world_code.` : "", bR || !0 !== CW.canChangeWorldCode ? "" : "When part of it needs World Code, say which part goes there: they are taken to World Code, and it is put in for them.", bR || !0 === CW.canChangeWorldCode && zR ? "" : "Don't call view_world_code.", bR ? "" : "The code block has no functions, so don't call replace_function."] : [CW.canAsk ? "" : "Build what they asked: don't call ask_creator or plan.", CW.canAsk && !0 !== CW.isBigRequest ? "This request isn't big, so build it rather than calling plan." : "", CW.wantsExport ? "" : "They haven't asked to save, so don't call export_game.", !0 === CW.canRemember ? "" : "Their AI notes are full, so don't call remember.", zR && !0 !== CW.hasOtherFiles ? "They have only the one file, so don't call view_file." : "", !0 === CW.offersPrefabs ? "" : "No prefab fits this request, so don't call use_prefab or view_prefab.", CW.canAsk && !0 === MC(WW).guide && RW.length >= 2 ? `When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles (${RW.slice(0,3).map((WW=>WW.title)).join(", ")}...): the one they pick is put in with use_prefab next.` : ""]].filter((WW => "" !== WW));
      return yR.length > 0 ? `\n\nFor this request: ${yR.join(" ")}` : ""
    }

    function zz(WW, RW) {
      var MW, wW, CW, zR, AW, bR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uw,
        {
          docsInTurn: NW = !1,
          carried: eW = !1
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const BW = "deepseek" === yR.format,
        tR = Object.values(RW.files).join("\n"),
        TW = RW.history.slice(-2).map((WW => WW.text)).join("\n"),
        gR = `${RW.request}\n${TW}\n${RW.errors.join("\n")}`,
        iR = !0 === RW.looksUpDocs,
        YW = iR && !0 === RW.canLookUp ? [] : WW.find(gR, tR, 12),
        JW = WW.matchItemAndBlockNames(gR, 12),
        PW = !0 === RW.codeBlock,
        IW = PW ? "myId" : "playerId",
        oW = wC(RW, yR.format),
        lW = oW.some((WW => "use_prefab" === WW.name)),
        FW = !lW || BW && !0 !== RC(RW).offersPrefabs ? [] : function(WW, RW, MW) {
          if ("never" === MW.offer || "none" === MW.list) return [];
          if ("all" === MW.list) return [...DM];
          const wW = tC(WW, 4);
          if (Kw(RW) || !vC.test(WW) && !yM(WW)) return wW;
          const CW = DM.filter((WW => "game" === WW.kind && !wW.includes(WW)));
          return [...wW, ...CW]
        }(RW.request, RW.files, MC(RW)),
        fW = lW ? function(WW, RW, MW) {
          const wW = RW ? `\nOther kinds of game have prefabs too: look them up with list_prefabs (${Object.keys(qw).join(", ")}).` : "";
          if (0 === WW.length) return RW ? `## Prefabs (ready-made games)${wW}` : "";
          const CW = MW && WW.includes(MW) ? `\nThis request fits ${MW.name}: put it in with use_prefab, then change only what the request wants differently: what it already does needs no code of yours (its sidebar is the text on the right of the screen).\n${Bw(MW,!1)}` : "";
          return `## Prefabs: ready-made games and features to start from (use_prefab)\n${WW.map(Nw).join("\n")}${CW}${wW}`
        }(FW, MC(RW).categories, tC(RW.request, 1)[0]) : "",
        QW = PW || !0 !== MC(RW).inlineCode ? "" : function(WW) {
          const RW = tC(WW, 1)[0];
          if (!RW) return "";
          const MW = Cw(Rw(RW)).text;
          return `## Tested code for this kind of game (${RW.title})\nThis code works. Start from it: put it in the file, keeping what the file already has, and change what the request needs. Change settings in its CONFIG.\n\`\`\`js\n${MW}\`\`\``
        }(RW.request),
        rR = [YW.length > 0 ? `## Docs for this request\n${YW.map((WW=>WW.text)).join("\n\n")}` : "", JW.length > 0 ? `## Exact item and block names that match the request\n${JW.join(", ")}` : ""].filter((WW => "" !== WW)),
        cR = [{
          role: "system",
          content: Vw([PW ? nw(iR) : Ow(iR), ...iR ? [] : [PW ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${WW.index("callback")}` : `## Callbacks (all of them)\n${WW.index("callback")}`, `## API methods (all of them, call as api.name(...))\n${WW.index("api")}`, `## Client options (all of them, set with api.setClientOption(${IW}, name, value))\n${WW.index("clientOption")}`], ...NW ? [] : rR, WW.mobTypes.length > 0 ? `## Mob types (for api.attemptSpawnMob)\n${WW.mobTypes.join(", ")}` : "", BW ? "" : fW, !PW && MC(RW).helperIndex ? `## Ready-made functions (call them by name, without api. and without writing them: their code is added to the file by itself; get_docs shows one)\n${vw.map((WW=>WW.signature)).join(", ")}` : "", BW ? "" : QW, Dw(oW, PW, yR.format, BW ? {
            hasWorldCodeFiles: !1,
            hasLookedUp: !1,
            movesToWorldCode: !1,
            listedPrefabs: [],
            guidesToPrefabs: !1
          } : {
            hasWorldCodeFiles: !0 === RC(RW).hasWorldCodeFiles,
            hasLookedUp: (null !== (MW = null === (wW = RW.lookups) || void 0 === wW ? void 0 : wW.length) && void 0 !== MW ? MW : 0) > 0,
            movesToWorldCode: !0 === RW.canChangeWorldCode,
            listedPrefabs: FW,
            guidesToPrefabs: !0 === MC(RW).guide
          })].filter((WW => "" !== WW)).join("\n\n"), oW, yR.format, yR.nativeTools)
        }];
      if (!BW)
        for (const EW of RW.history) cR.push({
          role: EW.role,
          content: EW.text
        });
      const XW = BW && !eW && RW.history.length > 0 ? `Earlier in this chat:\n${RW.history.map((WW=>`${"user"===WW.role?"They asked":"You answered"}: ${WW.text}`)).join("\n")}\n\n` : "",
        jR = null !== (CW = RW.about) && void 0 !== CW && CW.notes.length ? `AI notes (notes they kept):\n${RW.about.notes.map((WW=>`- ${WW}`)).join("\n")}\n\n` : "",
        kR = null !== (zR = RW.about) && void 0 !== zR && zR.outline ? `Outline of their code:\n${RW.about.outline}\n\n` : "",
        aR = RW.errors.length > 0 ? `\n\nErrors their world showed recently:\n${RW.errors.slice(-5).join("\n")}` : "",
        sW = null === (AW = RW.failedEdits) || void 0 === AW || !AW.length || BW && eW ? "" : `\n\nWhat happened to your last answer's changes:\n${function(WW,RW){return WW.map((WW=>KR[RW].editFailure(WW.tool,mC(WW)))).join("\n\n")}(RW.failedEdits,yR.format)}`,
        dW = [...NW ? rR : [], ...BW ? [fW, QW] : []].filter((WW => "" !== WW)).map((WW => `${WW}\n\n`)).join(""),
        pW = null === (bR = RW.lookups) || void 0 === bR || !bR.length || BW && eW ? "" : `\n\nWhat you looked up for this request:\n${hW=RW.lookups,UW=yR.format,hW.map((WW=>KR[UW].lookupResult(WW.tool,WW.about,WW.text))).join("\n\n")}`;
      var hW, UW;
      return cR.push({
        role: "user",
        content: `${dW}${jR}${kR}${XW}Their code now:\n${WC(RW,yR.format)}${aR}${sW}${pW}${BW?CC(RW,FW):""}\n\nTheir request: ${RW.request}`
      }), cR
    }
    var AC = MW(37377);

    function bz(WW) {
      var RW, MW, wW, CW, zR, AW;
      const {
        args: bR
      } = WW;
      switch (WW.name) {
        case "view_file":
          return null !== (RW = bR.path) && void 0 !== RW ? RW : "a file";
        case "view_world_code":
          return "your World Code";
        case "view_chunk":
          return bR.position ? `the blocks near ${null!==(MW=null===(wW=(0,AC.f)(bR.position))||void 0===wW?void 0:wW.map(Math.floor).join(", "))&&void 0!==MW?MW:bR.position}` : "the blocks around you";
        case "view_game_state":
          return "what you see in your world";
        case "get_docs":
          return bR.name ? `the docs for ${bR.name}` : `the list of ${NC(null!==(CW=bR.list)&&void 0!==CW?CW:yz)}`;
        case "fetch_url":
          return function(WW) {
            const RW = void 0 === WW ? null : PW(WW);
            if (null === RW) return null !== WW && void 0 !== WW ? WW : "a docs page";
            return IW(RW) ? "the list of docs pages" : `the docs page ${function(WW){const RW=(0,iR.A)(WW);return null===RW?WW:`${RW.name}${null===RW.part?"":`/${RW.part}`}`}(RW)}`
          }(bR.url);
        case "find_names":
          return `names for "${null!==(zR=bR.words)&&void 0!==zR?zR:""}"`;
        case "view_errors":
          return "your world's errors";
        case "list_prefabs":
          return bR.category ? `the ready-made ${bR.category} games` : "the ready-made games";
        case "view_prefab":
          return `the ready-made ${null!==(AW=bR.name)&&void 0!==AW?AW:"game"}`
      }
    }
    const yz = "functions";

    function NC(WW) {
      return WW.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
    }

    function eC(WW) {
      return "get_docs" === WW.name || "fetch_url" === WW.name
    }
    async function BC(WW, RW) {
      var MW;
      const wW = bz(WW),
        CW = RW => ({
          result: {
            tool: WW.name,
            about: wW,
            text: RW
          }
        });
      switch (WW.name) {
        case "view_file":
          return CW((bR = WW.args.path, yR = RW.files, void 0 === bR ? "No path was given: give the path of a file from the list." : Object.hasOwn(yR, bR) ? "" === yR[bR] ? `${bR} is empty.` : yR[bR] : `There is no file called ${bR}. Their files are: ${Object.keys(yR).join(", ")}.`));
        case "view_world_code": {
          const WW = RW.readWorldCode ? await RW.readWorldCode() : null;
          if (null === WW) return CW("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
          const MW = Object.keys(WW).sort(),
            wW = Object.fromEntries(MW.map((RW => [`${TW.n}${RW}`, WW[RW]]))),
            zR = MW.map((RW => `${TW.n}${RW}:\n${""===WW[RW]?"(empty)":WW[RW]}`)).join("\n\n"),
            AW = MW.length > 1 ? `\n\n${Sw(MW,TW.n)}` : "";
          return {
            ...CW("" === zR ? `World Code has no code yet: ${TW.n}index.js is empty.` : `${zR}${AW}`),
            worldCodeFiles: wW
          }
        }
        case "view_chunk":
          return CW(await RW.viewChunk((0, AC.f)(WW.args.position)));
        case "view_game_state":
          return CW(await RW.viewGameState());
        case "get_docs":
          return CW(function(WW, RW, MW) {
            if (void 0 === WW) {
              const WW = (0, lW.d)(gM, NC(null !== RW && void 0 !== RW ? RW : yz));
              return void 0 === WW ? `There is no list called ${RW}: ask for ${iM}.` : MW.index(WW)
            }
            const wW = MW.section(WW);
            if (wW) return wW.text;
            const CW = MW.find(WW, "", 3).map((WW => WW.name)).join(", ");
            return `Nothing is called ${WW}.${""===CW?"":` The closest names are: ${CW}.`}`
          }(WW.args.name, WW.args.list, RW.docs));
        case "fetch_url":
          return CW(await RW.fetchDocsPage(null !== (MW = WW.args.url) && void 0 !== MW ? MW : ""));
        case "find_names": {
          var zR, AW;
          const MW = RW.docs.searchNames(null !== (zR = WW.args.words) && void 0 !== zR ? zR : "", 20);
          return CW(MW.length > 0 ? MW.join(", ") : `No block, item or mob name has any of the words "${null!==(AW=WW.args.words)&&void 0!==AW?AW:""}".`)
        }
        case "view_errors":
          return CW(RW.errors.length > 0 ? RW.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
        case "list_prefabs":
          return CW(ew(WW.args.category));
        case "view_prefab":
          return CW(function(WW, RW) {
            const MW = void 0 === WW ? null : SM(WW);
            return MW ? Bw(MW, RW) : `There is no prefab called ${null!==WW&&void 0!==WW?WW:"that"}.\n${ew()}`
          }(WW.args.name, !0 === RW.showPrefabCode))
      }
      var bR, yR
    }
    const tz = [
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

    function TC(WW) {
      let RW = WW;
      for (const [MW, wW] of tz) RW = RW.replace(MW, (WW => WW.length > 1 && WW[0] !== WW[0].toLowerCase() && WW.slice(1) === WW.slice(1).toLowerCase() ? wW[0].toUpperCase() + wW.slice(1) : wW));
      return RW
    }
    const gz = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      iz = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
      YC = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
      JC = 12e3,
      PC = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);

    function IC(WW) {
      var RW, MW, wW;
      const CW = null === (RW = /Safety:\s*(\w+)/.exec(WW)) || void 0 === RW ? void 0 : RW[1],
        zR = null !== (MW = null === (wW = /Categories:\s*(.+)/.exec(WW)) || void 0 === wW ? void 0 : wW[1]) && void 0 !== MW ? MW : "";
      return /PII/.test(zR) ? "personalInfo" : "Unsafe" === CW || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(zR) ? "unsafe" : "ok"
    }

    function oC(WW) {
      var RW, MW, wW;
      const CW = null === (RW = /Safety:\s*(\w+)/.exec(WW)) || void 0 === RW ? void 0 : RW[1];
      if (!CW) return null;
      const zR = (null !== (MW = null === (wW = /Categories:\s*(.+)/.exec(WW)) || void 0 === wW ? void 0 : wW[1]) && void 0 !== MW ? MW : "").split(",").map((WW => WW.trim())).filter((WW => "" !== WW && "None" !== WW));
      return "Safe" !== CW && zR.some((WW => /Sexual/.test(WW))) ? "unsafe" : "Unsafe" !== CW ? "ok" : zR.length > 0 && zR.every((WW => PC.has(WW))) ? "maybeGame" : "unsafe"
    }
    async function lC(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wW = await RW(WW),
        CW = null === wW ? null : oC(wW);
      if (null === CW) return "unchecked";
      if ("ok" === CW || "unsafe" === CW && (!MW || null === wW || /Sexual/.test(wW))) return CW;
      const zR = TC(WW);
      if (zR === WW) return "unsafe";
      const AW = await RW(zR),
        bR = null === AW ? null : oC(AW);
      return null === bR ? "unchecked" : "ok" === bR ? "ok" : "unsafe"
    }

    function FC(WW) {
      const RW = [];
      return cz(WW, 0, !1, RW), RW.map((WW => WW.trim())).filter((WW => "" !== WW))
    }
    const fC = new Set(["return", "typeof", "case", "do", "else", "in", "of", "new", "delete", "void", "throw", "instanceof", "yield", "await"]);

    function QC(WW, RW) {
      let MW = RW - 1;
      for (; MW >= 0 && /\s/.test(WW[MW]);) MW--;
      if (MW < 0 || /[(,=:[!&|?{};+\-*%<>~^]/.test(WW[MW])) return !0;
      let wW = MW;
      for (; wW > 0 && /[\w$]/.test(WW[wW - 1]);) wW--;
      return fC.has(WW.slice(wW, MW + 1))
    }

    function rz(WW, RW) {
      let MW = !1;
      for (let wW = RW + 1; wW < WW.length; wW++) {
        const RW = WW[wW];
        if ("\\" === RW) wW++;
        else {
          if ("\n" === RW) break;
          if (MW) MW = "]" !== RW;
          else if ("[" === RW) MW = !0;
          else if ("/" === RW) return wW + 1
        }
      }
      return RW + 1
    }

    function cz(WW, RW, MW, wW) {
      let CW = RW,
        zR = 0;
      for (; CW < WW.length;) {
        const RW = WW[CW],
          AW = WW[CW + 1];
        if ("/" === RW && "/" === AW) {
          const RW = WW.indexOf("\n", CW);
          wW.push(WW.slice(CW + 2, -1 === RW ? WW.length : RW)), CW = -1 === RW ? WW.length : RW
        } else if ("/" === RW && "*" === AW) {
          const RW = WW.indexOf("*/", CW + 2);
          wW.push(WW.slice(CW + 2, -1 === RW ? WW.length : RW)), CW = -1 === RW ? WW.length : RW + 2
        } else if ("/" === RW && QC(WW, CW)) CW = rz(WW, CW);
        else if ('"' === RW || "'" === RW || "`" === RW) {
          const MW = wW.length;
          wW.push("");
          let zR = "";
          for (CW++; CW < WW.length && WW[CW] !== RW;) "\\" === WW[CW] ? (zR += WW.slice(CW, CW + 2), CW += 2) : "`" === RW && "$" === WW[CW] && "{" === WW[CW + 1] ? (zR += " ", CW = cz(WW, CW + 2, !0, wW)) : (zR += WW[CW], CW++);
          wW[MW] = zR, CW++
        } else {
          if (MW && "{" === RW) zR++;
          else if (MW && "}" === RW) {
            if (0 === zR) return CW + 1;
            zR--
          }
          CW++
        }
      }
      return CW
    }
    const XC = 4e5;
    async function jz(WW, RW) {
      const [{
        clientSideServerUrls: wW
      }, {
        postJsonWithMetricsCookiesAndJsonResponse: CW
      }, {
        gameBridge: zR
      }] = await Promise.all([Promise.resolve().then((() => MW(1033))), Promise.resolve().then((() => MW(975))), Promise.resolve().then((() => MW(1544)))]), AW = zR.latest("connectedGame").websocketUrl;
      if (!AW) throw new Error("AI Helper: not connected to a game server");
      const bR = `${wW.getHttpUrlFromWebSocketUrl(AW)}${WW}`;
      return await CW(bR, RW, {
        retries: 0
      })
    }
    const kz = 15e3;
    let az = [],
      sC = null;

    function dC(WW) {
      return Math.ceil(WW.length / 4)
    }

    function pC(WW) {
      return "number" === typeof WW && Number.isInteger(WW) && WW >= 0
    }

    function hC(WW, RW, MW) {
      var wW;
      let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ! function(WW) {
        if ("undefined" === typeof window) return;
        if (az.push(WW), az.length >= 40) return void UC();
        sC ??= setTimeout((() => {
          UC()
        }), kz)
      }(null !== (wW = function(WW) {
        if (null === WW || "object" !== typeof WW) return null;
        const {
          prompt_tokens: RW,
          completion_tokens: MW,
          prompt_tokens_details: wW
        } = WW;
        if (!pC(RW) || !pC(MW)) return null;
        const CW = null !== wW && "object" === typeof wW ? wW.cached_tokens : void 0;
        return {
          sent: RW,
          cached: pC(CW) ? CW : 0,
          received: MW
        }
      }(WW)) && void 0 !== wW ? wW : {
        sent: dC(JSON.stringify(RW)),
        cached: 0,
        received: dC(MW) + CW
      })
    }
    async function UC() {
      null !== sC && (clearTimeout(sC), sC = null);
      const WW = az.slice(0, 40);
      if (az = az.slice(40), az.length > 0 && (sC = setTimeout((() => {
          UC()
        }), kz)), 0 !== WW.length) try {
        await jz("/ai-helper/usage", {
          calls: WW
        })
      } catch {}
    }
    const EC = 6e4;
    const VC = new class {
        constructor() {
          this.calls = new Map, this.fullUntil = new Map
        }
        record(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          this.calls.set(WW, [...this.recent(WW, RW), RW])
        }
        markFull(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          this.fullUntil.set(WW, RW + EC)
        }
        callsInLastMinute(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          return this.recent(WW, RW).length
        }
        freeAt(WW) {
          var RW;
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          const wW = this.recent(WW, MW),
            CW = wW.length < 2 ? MW : wW[wW.length - 2] + EC;
          return Math.max(CW, null !== (RW = this.fullUntil.get(WW)) && void 0 !== RW ? RW : 0, MW)
        }
        firstFreeAt(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          return Math.min(...WW.map((WW => this.freeAt(WW, RW))))
        }
        clear() {
          this.calls.clear(), this.fullUntil.clear()
        }
        recent(WW, RW) {
          var MW;
          return (null !== (MW = this.calls.get(WW)) && void 0 !== MW ? MW : []).filter((WW => RW - WW < EC))
        }
      },
      mz = /\n{3,}/,
      xz = /<tool_call\b|<function=/;

    function vz(WW) {
      const RW = WW.trimStart(),
        MW = mz.exec(RW),
        wW = xz.exec(RW);
      if (null === MW || null !== wW && wW.index < MW.index) return null;
      const CW = RW.slice(MW.index + MW[0].length);
      return "" === CW.trim() ? null : CW
    }
    const KC = [{
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
    const uC = {
      name: "Qwen3.6-27B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    };

    function OC(WW) {
      var RW;
      const MW = [...KC, uC].find((RW => RW.name === WW));
      return null !== (RW = null === MW || void 0 === MW ? void 0 : MW.callFormat) && void 0 !== RW ? RW : "simple"
    }

    function nC(WW) {
      var RW;
      return {
        format: null !== (RW = WW.callFormat) && void 0 !== RW ? RW : "simple",
        nativeTools: !0 === WW.nativeTools
      }
    }

    function GC(WW, RW) {
      return "function" === typeof WW ? WW(RW) : WW
    }
    const LC = "TOO_COMPLEX",
      HC = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${LC} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an item, sending a message, teleporting, setting a block or a client option, or one callback that does one of those.\nReply ${LC} for anything more: a game or minigame, anything where players make choices, take turns or type commands with options, scores, timers, rounds or values that must be kept, more than about 10 new lines, a fix for an error, a question about what the code does, or exporting, saving or publishing the game. Reply ${LC} too if you aren't sure of an exact api method, option or item name.\nCode runs fresh each time: nothing you write remembers anything from one click or event to the next. So reply ${LC} to any request that says once, again, already, count, how many, total, times, score, every few seconds, until, wait, after or each player, whatever else it asks. "Everyone" alone is fine.\nThese are too complex: reply ${LC} to each of them, and to anything like them:\n- "Count how many times each player clicked this block", "Show how many times this block has been clicked in total": a count kept between clicks\n- "Give me a sword but only once", "Give me a sword, but only once" or "only every 10 seconds": remembering who already got it, or when\n- "Make a rock paper scissors game", "Make a parkour course", "Make a quiz": any game, round or win and lose\n- "Make a /give command" or "a /tp command that takes a player's name": commands with options to read\n- "Make a shop where I buy a sword for 10 coins": currencies, prices and checking what a player has\n- "Start a 60 second countdown", "Spawn a zombie every 5 seconds": timers and things that repeat\n- "Put players into two teams", "Show a leaderboard of the top players": sorting or grouping players\n- "Build me a house" or "a tower": many blocks placed in loops\n- "Teleport me somewhere random but safe": finding the ground or a free space\n- "Why doesn't my code work?", "Fix this error", "What does this line do?"\n- "Export the world", "Save my game", "Publish this": exporting the game is for the bigger model\nThese are small enough to answer yourself:\n- "Give me a diamond sword", "Teleport me onto this block", "Put a gold block on top of this one", "Let me fly", "Heal me", "Say hello to everyone"\n- "Welcome players when they join" (one callback with one message)`,
      DC = 24e4,
      qz = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
    class ZC extends Error {
      constructor(WW) {
        super(`World Code AI ${WW}`), this.reason = WW
      }
    }

    function SC(WW) {
      switch (WW) {
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

    function Wz(WW, RW) {
      var MW, wW, CW, zR, AW;
      const bR = WW[null !== (MW = RW.index) && void 0 !== MW ? MW : 0] ??= {
        name: "",
        args: ""
      };
      bR.name += null !== (wW = null === (CW = RW.function) || void 0 === CW ? void 0 : CW.name) && void 0 !== wW ? wW : "", bR.args += null !== (zR = null === (AW = RW.function) || void 0 === AW ? void 0 : AW.arguments) && void 0 !== zR ? zR : ""
    }

    function Rz(WW) {
      return "mcp" === WW ? "simple" : WW
    }

    function Mz(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return wz(WW, RW, MW, Rz(wW), CW).answer
    }

    function wz(WW, RW, MW, wW, CW) {
      const zR = MW.flatMap((WW => {
        const RW = RM(WW.name, WW.args);
        return null === RW ? [] : [Ew(nR(wW), RW.name, RW.args)]
      }));
      let AW = !1;
      return 0 !== zR.length || 0 !== wM(WW, wW).length || WW.includes("```") || (zR.push(...CW ? [] : function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        const wW = new Map;
        for (const bR of MM(WW, RW)) {
          const WW = Object.values(bR.args).some((WW => void 0 !== WW && MW.includes(WW.trim())));
          var CW, zR, AW;
          "export_game" === bR.name || "switch_to_world_code" === bR.name || IR(bR.name) || WW || wW.set(`${bR.name} ${null!==(CW=bR.args.path)&&void 0!==CW?CW:""} ${null!==(zR=bR.args.search)&&void 0!==zR?zR:""} ${null!==(AW=bR.args.name)&&void 0!==AW?AW:""}`, bR.source)
        }
        return [...new Set(wW.values())]
      }(RW, wW, Lw)), AW = zR.length > 0), {
        answer: [WW, ...zR].join("\n\n").trim(),
        hasCallsFromReasoning: AW
      }
    }
    async function Cz(WW, RW) {
      const MW = WW.getReader(),
        wW = new TextDecoder;
      let CW = "";
      for (;;) {
        const {
          done: WW,
          value: zR
        } = await MW.read();
        if (WW) break;
        CW += wW.decode(zR, {
          stream: !0
        });
        let AW = CW.indexOf("\n");
        for (; - 1 !== AW;) {
          const WW = CW.slice(0, AW).trim();
          if (CW = CW.slice(AW + 1), AW = CW.indexOf("\n"), !WW.startsWith("data:")) continue;
          const MW = WW.slice(5).trim();
          if ("[DONE]" === MW) return;
          let wW;
          try {
            wW = JSON.parse(MW)
          } catch {
            continue
          }
          RW(wW)
        }
      }
    }

    function zA(WW) {
      return WW.map((WW => ({
        type: "function",
        function: {
          name: WW.name,
          description: WW.description,
          parameters: WW.inputSchema
        }
      })))
    }

    function Az(WW) {
      return "object" === typeof WW
    }
    async function bA(WW, RW, MW, wW) {
      var CW;
      let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
      if (VC.freeAt(WW.name) > Date.now()) return "busy";
      VC.record(WW.name);
      const AW = await fetch(gz, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: WW.name,
          messages: RW,
          max_tokens: 16e3,
          temperature: WW.temperature,
          reasoning_effort: WW.reasoningEffort,
          stream: !0,
          stream_options: {
            include_usage: !0
          },
          ...WW.nativeTools && zR.length > 0 ? {
            tools: zA(zR)
          } : {}
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: MW
      });
      if (429 === AW.status) return VC.markFull(WW.name), "busy";
      if (!AW.ok || !AW.body) return console.warn(`World Code AI: ${WW.name} answered ${AW.status}`), AW.ok ? "failed" : 429 === (bR = AW.status) ? "busy" : 400 === bR || 413 === bR ? "tooLarge" : 401 === bR || 403 === bR ? "turnedAway" : "failed";
      var bR;
      let yR = "",
        NW = "";
      const eW = [];
      let BW = !1,
        tR = !1,
        TW = null;
      try {
        await async function(WW, RW, MW) {
          await Cz(WW, (WW => {
            var wW;
            const CW = WW,
              zR = null === (wW = CW.choices) || void 0 === wW ? void 0 : wW[0];
            var AW, bR;
            zR && RW(null !== (AW = zR.delta) && void 0 !== AW ? AW : {}, null !== (bR = zR.finish_reason) && void 0 !== bR ? bR : null), CW.usage && (null === MW || void 0 === MW || MW(CW.usage))
          }))
        }(AW.body, ((RW, MW) => {
          var CW, zR, AW, bR;
          BW ||= "length" === MW, NW += null !== (CW = null !== (zR = RW.reasoning) && void 0 !== zR ? zR : RW.reasoning_content) && void 0 !== CW ? CW : "", yR += null !== (AW = RW.content) && void 0 !== AW ? AW : "";
          for (const WW of null !== (TW = RW.tool_calls) && void 0 !== TW ? TW : []) {
            var TW;
            tR ||= "" !== NW && "" === yR.trim(), Wz(eW, WW)
          }
          const gR = WW.nativeTools && tR ? null !== (bR = vz(yR)) && void 0 !== bR ? bR : "" : yR;
          null === wW || void 0 === wW || wW({
            model: WW.name,
            reasoningChars: NW.length,
            answer: gR,
            isCalling: eW.length > 0
          })
        }), (WW => {
          TW = WW
        }))
      } finally {
        hC(TW, RW, yR + NW, 20 * eW.length)
      }
      return null !== (CW = yA(WW, yR, NW, eW, BW, tR)) && void 0 !== CW ? CW : "failed"
    }

    function yA(WW, RW, MW, wW, CW) {
      var zR;
      let AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bR = RW;
      var yR;
      WW.nativeTools && AW && (bR = null !== (yR = vz(bR)) && void 0 !== yR ? yR : bR);
      bR = bR.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
      const NW = wz(bR, MW, wW, null !== (zR = WW.callFormat) && void 0 !== zR ? zR : "simple", CW);
      return "" === NW.answer ? null : {
        model: WW.name,
        answer: NW.answer,
        reasoning: MW,
        isCutShort: CW,
        hasCallsFromReasoning: NW.hasCallsFromReasoning
      }
    }

    function Nz(WW) {
      return WW.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
    }

    function ez(WW) {
      return Az(WW) && !WW.isCutShort
    }
    async function Bz(WW, RW, MW, wW, CW) {
      const zR = WW.map((() => new AbortController)),
        AW = () => {
          for (const WW of zR) WW.abort()
        };
      null !== MW && void 0 !== MW && MW.aborted && AW(), null === MW || void 0 === MW || MW.addEventListener("abort", AW, {
        once: !0
      });
      const bR = WW.map((() => {})),
        yR = WW.map((() => {}));
      let NW = null;
      const eW = WW => void 0 !== WW && ("" !== Nz(WW.answer).trim() || !0 === WW.isCalling);
      let BW = () => {};
      WW.forEach(((WW, MW) => {
        const AW = (0, YW.d)(DC, zR[MW].signal);
        bA(WW, GC(RW, WW), AW.signal, (WW => {
          yR[MW] = WW, null === NW && eW(WW) && (NW = MW), NW === MW && (null === wW || void 0 === wW || wW(WW))
        }), CW).catch((RW => {
          if (zR[MW].signal.aborted) return "failed";
          const wW = AW.signal.aborted;
          return console.warn(`World Code AI: ${WW.name} ${wW?"took longer than 240 s":"couldn't be reached"}`, RW), wW ? "timeout" : "failed"
        })).then((WW => {
          AW.clear(), bR[MW] = WW, NW !== MW || ez(WW) || (NW = null), BW()
        }))
      }));
      const tR = () => {
        var WW;
        if (null !== NW) {
          const WW = bR[NW];
          return ez(WW) ? {
            reply: WW
          } : void 0
        }
        const RW = bR.find(ez);
        if (RW) return {
          reply: RW
        };
        if (!bR.includes(void 0)) return {
          reply: null !== (WW = bR.find(Az)) && void 0 !== WW ? WW : null
        };
        {
          const WW = bR.findIndex(((WW, RW) => void 0 === WW && eW(yR[RW])));
          if (-1 !== WW) {
            NW = WW;
            const RW = yR[WW];
            RW && (null === wW || void 0 === wW || wW(RW))
          }
        }
      };
      try {
        for (;;) {
          if (null !== MW && void 0 !== MW && MW.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
          const WW = tR();
          if (WW) {
            const RW = bR.filter((WW => "string" === typeof WW));
            return {
              reply: WW.reply,
              failures: RW
            }
          }
          await new Promise((WW => {
            BW = WW
          }))
        }
      } finally {
        null === MW || void 0 === MW || MW.removeEventListener("abort", AW), AW()
      }
    }

    function tA() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
      return VC.firstFreeAt(KC.map((WW => WW.name)), WW)
    }
    async function Tz(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wW = Date.now(),
        CW = null !== (RW = MW.models) && void 0 !== RW ? RW : KC,
        zR = void 0 === MW.models ? function(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
          const wW = WW.map((WW => ({
              model: WW,
              key: MW()
            }))).sort(((WW, RW) => WW.key - RW.key)).map((WW => {
              let {
                model: RW
              } = WW;
              return RW
            })),
            CW = [...wW.filter((WW => RW(WW))), ...wW.filter((WW => !RW(WW)))],
            zR = [];
          for (let AW = 0; AW < CW.length; AW += 2) zR.push(CW.slice(AW, AW + 2));
          return zR
        }(CW, (WW => VC.freeAt(WW.name) <= wW)) : CW.map((WW => [WW])),
        AW = [];
      for (const yR of zR) {
        const RW = await Bz(yR, WW, MW.signal, MW.onProgress, MW.tools);
        if (null !== RW.reply) {
          const CW = yR.find((WW => {
            var MW;
            return WW.name === (null === (MW = RW.reply) || void 0 === MW ? void 0 : MW.model)
          }));
          return {
            ...CW && !1 !== MW.canNudge ? await Yz(CW, GC(WW, CW), RW.reply, MW.signal, MW.onProgress, MW.tools) : RW.reply,
            ms: Date.now() - wW
          }
        }
        AW.push(...RW.failures)
      }
      const bR = qz.find((WW => AW.includes(WW)));
      throw new ZC(null !== bR && void 0 !== bR ? bR : "failed")
    }
    const gA = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";

    function iA(WW) {
      const RW = WW.trim();
      return RW.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(RW) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(RW) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b(?:add|change|replace|update|fix|rewrite|write|create|make|edit|remove|put)\b/i.test(RW)
    }
    async function Yz(WW, RW, MW, wW, CW, zR) {
      var AW;
      let bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DC;
      if (! function(WW, RW) {
          return !WW.isCutShort && iA(WW.answer) && !WW.answer.includes("?") && 0 === wM(WW.answer, RW).length
        }(MW, null !== (AW = WW.callFormat) && void 0 !== AW ? AW : "simple")) return MW;
      const yR = [...RW, {
          role: "assistant",
          content: MW.answer
        }, {
          role: "user",
          content: gA
        }],
        NW = (0, YW.d)(bR, wW);
      try {
        const RW = await bA(WW, yR, NW.signal, CW, zR);
        return Az(RW) && "" !== RW.answer.trim() ? RW : MW
      } catch (eW) {
        if (null !== wW && void 0 !== wW && wW.aborted) throw eW;
        return MW
      } finally {
        NW.clear()
      }
    }

    function Jz(WW) {
      const RW = Nz(WW);
      return /too_complex/i.test(RW) || /^\W*too[\s_-]*complex\W*$/i.test(RW.trim())
    }

    function Pz(WW) {
      const RW = Nz(WW).trim();
      return RW.length > 19 && !/^\W*too[\s_-]*complex/i.test(RW)
    }

    function Iz(WW) {
      return WW.map(((WW, RW) => 0 === RW && "system" === WW.role ? {
        ...WW,
        content: WW.content + HC
      } : WW))
    }
    async function oz(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      for (const wW of iz) {
        const MW = await lz(wW, [{
          role: "user",
          content: WW
        }], RW);
        if (null !== MW && "busy" !== MW) return IC(MW)
      }
      return MW ? "unchecked" : "ok"
    }
    async function lz(WW, RW, MW) {
      const wW = (0, YW.d)(2e4, MW);
      VC.record(WW);
      try {
        var CW, zR, AW, bR;
        const MW = await fetch(gz, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: WW,
            messages: RW,
            max_tokens: 40
          }),
          credentials: "omit",
          referrerPolicy: "no-referrer",
          signal: wW.signal
        });
        if (429 === MW.status) return VC.markFull(WW), "busy";
        if (!MW.ok) return null;
        const yR = await MW.json(),
          NW = String(null !== (CW = null === (zR = yR.choices) || void 0 === zR || null === (AW = zR[0]) || void 0 === AW || null === (bR = AW.message) || void 0 === bR ? void 0 : bR.content) && void 0 !== CW ? CW : "");
        return hC(yR.usage, RW, NW),
          function(WW) {
            return /Safety:/.test(WW)
          }(NW) ? NW : null
      } catch (yR) {
        if (null !== MW && void 0 !== MW && MW.aborted) throw yR;
        return null
      } finally {
        wW.clear()
      }
    }
    var Fz = MW(284),
      fz = MW(156);
    const Qz = {
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
      rA = ["openrouter", "anthropic", "openai", "gemini", "custom"],
      cA = new Set(Object.values(Qz).flatMap((WW => "" === WW.baseUrl ? [] : [new URL(WW.baseUrl).host])));

    function Xz(WW) {
      return WW.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
    }

    function jA(WW) {
      return WW.startsWith("sk-or-") ? "openrouter" : WW.startsWith("sk-ant-") ? "anthropic" : WW.startsWith("AIza") ? "gemini" : WW.startsWith("sk-") ? "openai" : null
    }

    function kA(WW) {
      let RW;
      try {
        RW = new URL(WW.trim())
      } catch {
        return null
      }
      const MW = "localhost" === RW.hostname || "127.0.0.1" === RW.hostname;
      return "https:" !== RW.protocol && ("http:" !== RW.protocol || !MW) || RW.username || RW.password || RW.search ? null : `${RW.origin}${RW.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
    }

    function aA(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return "custom" === WW && RW ? new URL(RW).host : MW ? Qz[WW].shortName : Qz[WW].name
    }
    class sz extends Error {
      constructor(WW, RW, MW, wW) {
        super(`AI key request: ${WW}`), this.problem = WW, this.retryAfterMs = RW, this.status = MW, this.detail = wW
      }
    }

    function dz(WW, RW) {
      return ("" === RW ? WW : WW.split(RW).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
    }

    function pz(WW, RW) {
      const MW = "custom" === RW ? "That server" : Qz[RW].shortName;
      switch (WW) {
        case "badKey":
          return `${MW} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
        case "busy":
          return "Too many requests right now. Wait a minute and try again.";
        case "noModel":
          return `${MW} can't find that model. Check its name.`;
        case "unreachable":
          return "anthropic" === RW ? "Claude didn't accept your key: check it, or make a new one." : "custom" === RW ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help." : `Couldn't reach ${MW}. Check your internet and try again.`;
        case "noCredit":
          return "custom" === RW ? "That server stopped your key for now: it has used all it can." : `${MW} stopped your key for now: it has used all it can. Check it on ${MW}'s website.`;
        case "blocked":
          return `${MW} doesn't work from where you are.`;
        case "timeout":
          return "That took too long. Try again.";
        default:
          return `${MW} had a problem with that. Try again in a minute.`
      }
    }

    function hz(WW) {
      var RW;
      const MW = WW.at(-1);
      if (!MW || null !== RM(MW.name, MW.args) || function(WW) {
          try {
            return JSON.parse(WW), !0
          } catch {
            return !1
          }
        }(MW.args)) return;
      const wW = null === (RW = /"path"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(MW.args)) || void 0 === RW ? void 0 : RW[1];
      return {
        name: MW.name || "write_file",
        path: wW
      }
    }
    const Uz = 1e4,
      Ez = 3e5,
      Vz = 16e3;
    async function mA(WW, RW, MW, wW) {
      if ("custom" !== WW && ! function(WW) {
          return cA.has(new URL(WW).host)
        }(RW)) throw new Error(`AI key request to an unknown host for ${WW}`);
      const CW = await fetch(RW, {
        ...MW,
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: wW
      });
      if (!CW.ok) {
        const RW = await CW.text().catch((() => ""));
        throw console.warn(`AI key request: ${WW} answered ${CW.status}`), new sz(function(WW, RW, MW) {
          const wW = !("gemini" === WW && 429 === RW) && /credit|quota|billing|balance|payment|spend|budget|limit[ _]exceeded|key limit/i.test(MW);
          return 401 === RW ? "badKey" : 404 !== RW && 400 !== RW || !/model_not_found|not_found_error[^\n]{0,80}model:|models?\b[^\n]{0,80}?(does not exist|not found)|no such model|unknown model|(invalid|not a valid) model/i.test(MW) ? 402 === RW || (400 === RW || 403 === RW || 429 === RW) && wW && !/rate[ _-]?limit/i.test(MW) ? "noCredit" : 400 === RW && /(location|region|country|territory)[^\n]{0,40}not supported|unsupported_country/i.test(MW) ? "blocked" : 400 === RW && /api[ _-]?key/i.test(MW) ? "badKey" : 403 === RW ? /moderat|flagged/i.test(MW) ? "refused" : /region|country|territor|location/i.test(MW) ? "blocked" : "badKey" : 429 === RW ? "busy" : "failed" : "noModel"
        }(WW, CW.status, RW), function(WW) {
          const RW = WW.headers.get("retry-after");
          if (!RW) return;
          const MW = Number(RW);
          return Number.isFinite(MW) ? 1e3 * MW : Math.max(0, Date.parse(RW) - Date.now()) || void 0
        }(CW), CW.status, function(WW, RW) {
          let MW = WW;
          try {
            const RW = JSON.parse(WW),
              wW = RW.error && "object" === typeof RW.error ? RW.error.message : void 0,
              CW = [RW.error, wW, RW.message].find((WW => "string" === typeof WW));
            MW = "string" === typeof CW ? CW : WW
          } catch {}
          const wW = RW.reduce(((WW, RW) => dz(WW, RW)), MW.replace(/\s+/g, " ").trim()).slice(0, 200);
          return "" === wW ? void 0 : wW
        }(RW, function(WW) {
          const RW = [];
          return new Headers(WW.headers).forEach(((WW, MW) => {
            /authorization|key/i.test(MW) && RW.push(WW, WW.replace(/^Bearer\s+/i, ""))
          })), RW.filter((WW => WW.length >= 6))
        }(MW)))
      }
      return CW
    }
    async function xA(WW, RW, MW) {
      const wW = (0, YW.d)(WW, RW);
      try {
        return await MW(wW.signal)
      } catch (CW) {
        if (CW instanceof sz || null !== RW && void 0 !== RW && RW.aborted) throw CW;
        throw wW.signal.aborted || console.warn("AI key request couldn't be read", CW), new sz(wW.signal.aborted ? "timeout" : "unreachable")
      } finally {
        wW.clear()
      }
    }

    function vA(WW) {
      let RW = WW.length;
      const MW = WW.lastIndexOf("<tool_call"); - 1 === MW || WW.includes("</tool_call>", MW) || (RW = MW);
      const wW = [...WW.matchAll(/\{\s*"(?:jsonrpc|name|tool|method|function)"/g)].find((RW => null === function(WW, RW) {
        let MW = 0,
          wW = !1;
        for (let CW = RW; CW < WW.length; CW++) {
          const RW = WW[CW];
          if (wW) "\\" === RW ? CW++ : '"' === RW && (wW = !1);
          else if ('"' === RW) wW = !0;
          else if ("{" === RW) MW++;
          else if ("}" === RW && (MW--, 0 === MW)) return CW + 1
        }
        return null
      }(WW, RW.index)));
      return wW && wW.index < RW && (RW = wW.index), WW.slice(0, RW).replace(/```[\w-]*\s*$/, "").trim()
    }

    function Kz(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "simple",
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      const {
        answer: CW,
        reasoning: zR,
        YNW: AW,
        isCutShort: bR,
        nativeCalls: yR = []
      } = RW, NW = CW.replace(/<think>[\s\S]*?<\/think>/g, ""), eW = "" === wW ? NW.trim() : function(WW, RW) {
        var MW, wW;
        const CW = RW.trimStart(),
          zR = WW.trimStart();
        if (zR.length >= 16 && CW.startsWith(zR.slice(0, 240))) return CW;
        const AW = null !== (MW = null === (wW = WW.match(/```/g)) || void 0 === wW ? void 0 : wW.length) && void 0 !== MW ? MW : 0,
          bR = vA(WW) !== WW.trim() || AW % 2 === 1 ? 48 : 16;
        for (let yR = Math.min(WW.length, CW.length, 4e3); yR >= bR; yR--)
          if (WW.endsWith(CW.slice(0, yR))) return WW + CW.slice(yR);
        return WW + RW
      }(wW, NW).trim(), BW = Mz(eW, "", yR, MW), tR = Mz(bR ? vA(eW) : eW, zR, yR, MW, bR), TW = bR ? hz(yR) : void 0;
      if (AW && "" === tR) throw new sz("refused");
      if ("" === tR && (!bR || "" === BW && !TW)) throw new sz("failed");
      return {
        model: WW,
        answer: tR,
        reasoning: zR,
        isCutShort: bR,
        written: bR ? BW : void 0,
        cutCall: TW
      }
    }

    function uz(WW) {
      const RW = WW.findIndex((WW => "user" === WW.role));
      return -1 === RW ? [] : WW.slice(RW)
    }

    function Oz(WW, RW) {
      var MW;
      const wW = null !== (MW = RW.tools) && void 0 !== MW ? MW : [];
      if (0 === wW.length) return {};
      switch (WW) {
        case "openai":
          return {
            tools: zA(wW)
          };
        case "anthropic":
          return {
            tools: wW.map((WW => ({
              name: WW.name,
              description: WW.description,
              input_schema: WW.inputSchema
            })))
          };
        case "gemini":
          return {
            tools: [{
              functionDeclarations: wW.map((WW => {
                return {
                  name: WW.name,
                  description: WW.description,
                  parameters: (RW = WW.inputSchema, {
                    type: "OBJECT",
                    properties: Object.fromEntries(Object.entries(RW.properties).map((WW => {
                      let [RW, MW] = WW;
                      return [RW, {
                        type: "STRING",
                        description: MW.description
                      }]
                    }))),
                    required: RW.required
                  })
                };
                var RW
              }))
            }]
          }
      }
    }
    class nz {
      constructor(WW, RW, MW) {
        this.provider = WW, this.baseUrl = RW, this.key = MW
      }
      async check(WW) {
        return xA(Uz, WW, (async WW => {
          var RW;
          const MW = await mA(this.provider, `${this.baseUrl}/models`, {
            headers: this.headers()
          }, WW);
          return {
            models: (null !== (RW = (await MW.json()).data) && void 0 !== RW ? RW : []).map((WW => ({
              id: WW.id,
              name: WW.name
            })))
          }
        }))
      }
      async ask(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return xA(Ez, MW.signal, (async wW => {
          var CW;
          const zR = await mA(this.provider, `${this.baseUrl}/chat/completions`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              model: WW,
              messages: RW,
              ["openai" === this.provider ? "max_completion_tokens" : "max_tokens"]: Vz,
              stream: !0,
              ...Oz("openai", MW)
            })
          }, wW);
          let AW = "",
            bR = "",
            yR = !1,
            NW = !1;
          const eW = [];
          return await Cz(null !== (CW = zR.body) && void 0 !== CW ? CW : new ReadableStream, (RW => {
            var wW, CW, zR, BW, tR, TW, gR, iR;
            const YW = RW;
            if (YW.error) throw new sz(402 === Number(YW.error.code) ? "noCredit" : "failed");
            const JW = null === (wW = YW.choices) || void 0 === wW ? void 0 : wW[0];
            bR += null !== (CW = null !== (zR = null === JW || void 0 === JW || null === (BW = JW.delta) || void 0 === BW ? void 0 : BW.reasoning) && void 0 !== zR ? zR : null === JW || void 0 === JW || null === (tR = JW.delta) || void 0 === tR ? void 0 : tR.reasoning_content) && void 0 !== CW ? CW : "", AW += null !== (TW = null === JW || void 0 === JW || null === (gR = JW.delta) || void 0 === gR ? void 0 : gR.content) && void 0 !== TW ? TW : "";
            for (const WW of null !== (PW = null === JW || void 0 === JW || null === (IW = JW.delta) || void 0 === IW ? void 0 : IW.tool_calls) && void 0 !== PW ? PW : []) {
              var PW, IW;
              Wz(eW, WW)
            }
            yR ||= "content_filter" === (null === JW || void 0 === JW ? void 0 : JW.finish_reason), NW ||= "length" === (null === JW || void 0 === JW ? void 0 : JW.finish_reason), null === (iR = MW.onProgress) || void 0 === iR || iR.call(MW, {
              model: WW,
              reasoningChars: bR.length,
              answer: AW,
              isCalling: eW.length > 0
            })
          })), Kz(WW, {
            answer: AW,
            reasoning: bR,
            YNW: yR,
            isCutShort: NW,
            nativeCalls: eW
          }, MW.callFormat, MW.continueFrom)
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
    class Gz {
      constructor(WW) {
        this.key = WW, this.chat = void 0, this.chat = new nz("openrouter", Qz.openrouter.baseUrl, WW)
      }
      async check(WW) {
        return await xA(Uz, WW, (async WW => mA("openrouter", `${Qz.openrouter.baseUrl}/key`, {
          headers: {
            Authorization: `Bearer ${this.key}`
          }
        }, WW))), this.chat.check(WW)
      }
      ask(WW, RW, MW) {
        return this.chat.ask(WW, RW, MW)
      }
    }
    class Lz {
      constructor(WW) {
        this.key = WW, this.baseUrl = Qz.anthropic.baseUrl
      }
      async check(WW) {
        return xA(Uz, WW, (async WW => {
          var RW;
          const MW = await mA("anthropic", `${this.baseUrl}/models?limit=1000`, {
            headers: this.headers()
          }, WW);
          return {
            models: (null !== (RW = (await MW.json()).data) && void 0 !== RW ? RW : []).map((WW => ({
              id: WW.id,
              name: WW.display_name
            })))
          }
        }))
      }
      async ask(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wW = RW.filter((WW => "system" === WW.role)).map((WW => WW.content)).join("\n\n"),
          CW = uz(RW).map((WW => ({
            role: WW.role,
            content: WW.content
          })));
        return xA(Ez, MW.signal, (async RW => {
          var zR;
          const AW = await mA("anthropic", `${this.baseUrl}/messages`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              model: WW,
              max_tokens: Vz,
              system: wW,
              messages: CW,
              stream: !0,
              ...Oz("anthropic", MW)
            })
          }, RW);
          let bR = "",
            yR = "",
            NW = !1,
            eW = !1;
          const BW = new Map;
          await Cz(null !== (zR = AW.body) && void 0 !== zR ? zR : new ReadableStream, (RW => {
            var wW, CW;
            const zR = RW;
            var AW, tR, TW, gR;
            if ("error" === zR.type) throw new sz("overloaded_error" === (null === (AW = zR.error) || void 0 === AW ? void 0 : AW.type) || "rate_limit_error" === (null === (tR = zR.error) || void 0 === tR ? void 0 : tR.type) ? "busy" : "failed");
            if ("content_block_start" === zR.type && "tool_use" === (null === (wW = zR.content_block) || void 0 === wW ? void 0 : wW.type)) BW.set(null !== (TW = zR.index) && void 0 !== TW ? TW : BW.size, {
              name: null !== (gR = zR.content_block.name) && void 0 !== gR ? gR : "",
              args: ""
            });
            else if ("content_block_delta" === zR.type) {
              var iR, YW, JW, PW, IW, oW;
              bR += null !== (iR = null === (YW = zR.delta) || void 0 === YW ? void 0 : YW.text) && void 0 !== iR ? iR : "", yR += null !== (JW = null === (PW = zR.delta) || void 0 === PW ? void 0 : PW.thinking) && void 0 !== JW ? JW : "";
              const WW = BW.get(null !== (IW = zR.index) && void 0 !== IW ? IW : -1);
              var lW;
              if (WW && "input_json_delta" === (null === (oW = zR.delta) || void 0 === oW ? void 0 : oW.type)) WW.args += null !== (lW = zR.delta.partial_json) && void 0 !== lW ? lW : ""
            } else if ("message_delta" === zR.type) {
              var FW, fW;
              NW ||= "refusal" === (null === (FW = zR.delta) || void 0 === FW ? void 0 : FW.stop_reason), eW ||= "max_tokens" === (null === (fW = zR.delta) || void 0 === fW ? void 0 : fW.stop_reason)
            }
            null === (CW = MW.onProgress) || void 0 === CW || CW.call(MW, {
              model: WW,
              reasoningChars: yR.length,
              answer: bR,
              isCalling: BW.size > 0
            })
          }));
          const tR = [...BW.values()];
          return Kz(WW, {
            answer: bR,
            reasoning: yR,
            YNW: NW,
            isCutShort: eW,
            nativeCalls: tR
          }, MW.callFormat, MW.continueFrom)
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
    class Hz {
      constructor(WW) {
        this.key = WW, this.baseUrl = Qz.gemini.baseUrl
      }
      async check(WW) {
        return xA(Uz, WW, (async WW => {
          var RW;
          const MW = await mA("gemini", `${this.baseUrl}/models?pageSize=1000`, {
            headers: this.headers()
          }, WW);
          return {
            models: (null !== (RW = (await MW.json()).models) && void 0 !== RW ? RW : []).filter((WW => {
              var RW, MW;
              return null === (RW = null === (MW = WW.supportedGenerationMethods) || void 0 === MW ? void 0 : MW.includes("generateContent")) || void 0 === RW || RW
            })).map((WW => ({
              id: WW.name.replace(/^models\//, ""),
              name: WW.displayName
            })))
          }
        }))
      }
      async ask(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wW = RW.filter((WW => "system" === WW.role)).map((WW => ({
            text: WW.content
          }))),
          CW = uz(RW).map((WW => ({
            role: "assistant" === WW.role ? "model" : "user",
            parts: [{
              text: WW.content
            }]
          })));
        return xA(Ez, MW.signal, (async RW => {
          var zR;
          const AW = await mA("gemini", `${this.baseUrl}/models/${encodeURIComponent(WW)}:streamGenerateContent?alt=sse`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              systemInstruction: {
                parts: wW
              },
              contents: CW,
              generationConfig: {
                maxOutputTokens: Vz
              },
              ...Oz("gemini", MW)
            })
          }, RW);
          let bR = "",
            yR = "",
            NW = !1,
            eW = !1;
          const BW = [];
          return await Cz(null !== (zR = AW.body) && void 0 !== zR ? zR : new ReadableStream, (RW => {
            var wW, CW, zR;
            const AW = RW,
              tR = null === (wW = AW.candidates) || void 0 === wW ? void 0 : wW[0];
            for (const WW of null !== (TW = null === tR || void 0 === tR || null === (gR = tR.content) || void 0 === gR ? void 0 : gR.parts) && void 0 !== TW ? TW : []) {
              var TW, gR, iR, YW;
              if (WW.functionCall) BW.push({
                name: null !== (iR = WW.functionCall.name) && void 0 !== iR ? iR : "",
                args: JSON.stringify(null !== (YW = WW.functionCall.args) && void 0 !== YW ? YW : {})
              });
              else if (WW.thought) {
                var JW;
                yR += null !== (JW = WW.text) && void 0 !== JW ? JW : ""
              } else {
                var PW;
                bR += null !== (PW = WW.text) && void 0 !== PW ? PW : ""
              }
            }
            NW ||= void 0 !== (null === (CW = AW.promptFeedback) || void 0 === CW ? void 0 : CW.blockReason) || "SAFETY" === (null === tR || void 0 === tR ? void 0 : tR.finishReason) || "PROHIBITED_CONTENT" === (null === tR || void 0 === tR ? void 0 : tR.finishReason), eW ||= "MAX_TOKENS" === (null === tR || void 0 === tR ? void 0 : tR.finishReason), null === (zR = MW.onProgress) || void 0 === zR || zR.call(MW, {
              model: WW,
              reasoningChars: yR.length,
              answer: bR,
              isCalling: BW.length > 0
            })
          })), Kz(WW, {
            answer: bR,
            reasoning: yR,
            YNW: NW,
            isCutShort: eW,
            nativeCalls: BW
          }, MW.callFormat, MW.continueFrom)
        }))
      }
      headers() {
        return {
          "x-goog-api-key": this.key,
          "Content-Type": "application/json"
        }
      }
    }

    function Dz(WW, RW, MW) {
      switch (WW) {
        case "openrouter":
          return new Gz(RW);
        case "anthropic":
          return new Lz(RW);
        case "gemini":
          return new Hz(RW);
        case "openai":
          return new nz("openai", Qz.openai.baseUrl, RW);
        case "custom":
          return new nz("custom", null !== MW && void 0 !== MW ? MW : "", RW)
      }
    }
    const qA = {
        fast: "Fast",
        smart: "Smart",
        smartest: "Smartest"
      },
      Zz = {
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

    function Sz(WW) {
      return /claude-(sonnet|opus|fable)|gpt-5(\.\d+)?($|-codex|-pro|-sol)|gpt-6(\.\d+)?-(sol|astra)|gemini-[\d.]+-pro|gemini-4/.test(WW) ? "mcp" : "simple"
    }

    function WA(WW, RW) {
      return "custom" !== WW && /claude-|gpt-|gemini-/.test(RW)
    }

    function RA(WW, RW, MW) {
      var wW;
      const CW = MW.find((WW => WW.id === RW));
      return {
        id: RW,
        name: null !== (wW = null === CW || void 0 === CW ? void 0 : CW.name) && void 0 !== wW ? wW : RW,
        callFormat: Sz(RW),
        nativeTools: WA(WW, RW)
      }
    }

    function MA(WW, RW) {
      return "custom" !== WW ? function(WW, RW) {
        if ("custom" === WW) return [];
        const MW = new Set(RW.map((WW => WW.id))),
          wW = Zz[WW];
        return Object.keys(wW).flatMap((CW => {
          const zR = wW[CW].find((WW => MW.has(WW.id)));
          return zR ? [{
            ...RA(WW, zR.id, RW),
            name: zR.name,
            tier: CW
          }] : []
        }))
      }(WW, RW) : RW.slice(0, 20).map((MW => RA(WW, MW.id, RW)))
    }

    function wA(WW) {
      var RW;
      return null !== (RW = WW.find((WW => "smart" === WW.tier))) && void 0 !== RW ? RW : WW[0]
    }

    function CA(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null !== (RW = WW.name) && void 0 !== RW ? RW : aA(WW.provider, WW.baseUrl, MW)
    }
    const zb = "bloxdAiHelperKeys",
      AA = {
        keys: [],
        selected: null,
        remember: !1
      };

    function bb(WW, RW) {
      return WW.id === RW.id || "custom" === WW.provider && "custom" === RW.provider && WW.baseUrl === RW.baseUrl
    }

    function yb(WW) {
      if ("custom" !== WW.provider) return !0;
      try {
        var RW;
        return new URL(null !== (RW = WW.baseUrl) && void 0 !== RW ? RW : "").protocol.startsWith("http")
      } catch {
        return !1
      }
    }

    function NA(WW) {
      try {
        return "undefined" === typeof window ? null : window[WW]
      } catch (RW) {
        return console.warn(`AI Helper: no ${WW}`, RW), null
      }
    }
    const eA = new class {
      constructor(WW, RW) {
        var MW;
        this.session = WW, this.local = RW, this.state = void 0, this.listeners = new Set, this.ownsRemembered = !1, this.lastUsedAt = 0, this.getState = () => this.state, this.subscribe = WW => (this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        });
        for (const zR of [WW, RW]) null !== zR && void 0 !== zR && zR.getItem(zb) && !this.read(zR) && zR.removeItem(zb);
        const wW = this.read(WW),
          CW = this.read(RW);
        this.state = null !== wW && void 0 !== wW && wW.remember ? null !== CW && void 0 !== CW && CW.remember ? CW : {
          ...wW,
          remember: !1
        } : null !== (MW = null !== wW && void 0 !== wW ? wW : CW) && void 0 !== MW ? MW : AA, this.ownsRemembered = this.state.remember && null !== CW
      }
      nextUsedAt() {
        return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
      }
      activeKey() {
        const WW = this.state.selected,
          RW = WW ? this.state.keys.find((RW => RW.id === WW.keyId)) : void 0,
          MW = null === RW || void 0 === RW ? void 0 : RW.models.find((RW => RW.id === (null === WW || void 0 === WW ? void 0 : WW.modelId)));
        return RW && MW ? {
          ...RW,
          model: MW
        } : null
      }
      addKey(WW, RW, MW) {
        var wW, CW, zR;
        const AW = this.state.keys.find((RW => "custom" === RW.provider && RW.baseUrl === WW.baseUrl)),
          bR = "custom" !== WW.provider ? WW.provider : null !== (wW = null === AW || void 0 === AW ? void 0 : AW.id) && void 0 !== wW ? wW : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
          yR = void 0 === RW ? wA(WW.models) : null !== (CW = WW.models.find((WW => WW.id === RW))) && void 0 !== CW ? CW : WW.models[0],
          NW = this.state.keys.find((WW => WW.id === bR)),
          eW = {
            ...WW,
            id: bR,
            usedAt: this.nextUsedAt(),
            ...yR ? {
              usedModelId: yR.id
            } : {},
            ...null !== NW && void 0 !== NW && NW.name && !WW.name ? {
              name: NW.name
            } : {}
          },
          BW = this.state.keys.every((WW => WW.id !== bR)),
          tR = void 0 !== MW && MW !== bR && this.state.keys.some((WW => WW.id === MW)),
          TW = tR ? this.state.keys.filter((WW => WW.id !== bR)).map((WW => WW.id === MW ? eW : WW)) : BW ? [...this.state.keys, eW] : this.state.keys.map((WW => WW.id === bR ? eW : WW)),
          gR = yR ? {
            keyId: bR,
            modelId: yR.id
          } : (null === (zR = this.state.selected) || void 0 === zR ? void 0 : zR.keyId) === MW && tR ? null : this.state.selected;
        return this.update({
          keys: TW,
          selected: gR
        }), bR
      }
      renameKey(WW, RW) {
        const MW = RW.replace(/\s+/g, " ").trim().slice(0, 30);
        this.update({
          keys: this.state.keys.map((RW => {
            if (RW.id !== WW) return RW;
            const {
              name: wW,
              ...CW
            } = RW;
            return "" === MW ? CW : {
              ...CW,
              name: MW
            }
          }))
        })
      }
      select(WW) {
        const RW = this.nextUsedAt(),
          MW = null === WW ? this.state.keys : this.state.keys.map((MW => MW.id === WW.keyId ? {
            ...MW,
            usedAt: RW,
            usedModelId: WW.modelId
          } : MW));
        this.update({
          keys: MW,
          selected: WW
        })
      }
      refreshModels(WW, RW, MW) {
        const wW = this.state.keys.find((RW => RW.id === WW));
        if (!wW || MW && (wW.key !== MW.key || wW.baseUrl !== MW.baseUrl)) return !1;
        const CW = [...RW.map((WW => {
            const RW = wW.models.find((RW => RW.id === WW.id));
            return {
              ...WW,
              ...!1 === (null === RW || void 0 === RW ? void 0 : RW.nativeTools) ? {
                nativeTools: !1
              } : {},
              ...null !== RW && void 0 !== RW && RW.typed ? {
                typed: !0
              } : {}
            }
          })), ...wW.models.filter((WW => WW.typed && !RW.some((RW => RW.id === WW.id))))],
          zR = this.state.selected,
          AW = (null === zR || void 0 === zR ? void 0 : zR.keyId) === WW && !CW.some((WW => WW.id === zR.modelId)),
          bR = wA(CW);
        return this.update({
          keys: this.state.keys.map((RW => RW.id === WW ? {
            ...RW,
            models: CW
          } : RW)),
          selected: AW ? bR ? {
            keyId: WW,
            modelId: bR.id
          } : null : zR
        }), !0
      }
      stopNativeTools(WW, RW) {
        this.update({
          keys: this.state.keys.map((MW => {
            if (MW.id !== WW) return MW;
            const wW = MW.models.map((WW => WW.id === RW ? {
              ...WW,
              nativeTools: !1
            } : WW));
            return {
              ...MW,
              models: wW
            }
          }))
        })
      }
      removeKey(WW) {
        var RW;
        const MW = this.state,
          wW = MW.keys.findIndex((RW => RW.id === WW)),
          CW = MW.keys[wW];
        if (!CW) return () => {};
        const zR = MW.keys.filter((RW => RW.id !== WW)),
          AW = (null === (RW = MW.selected) || void 0 === RW ? void 0 : RW.keyId) === WW ? null : MW.selected;
        return this.update({
          keys: zR,
          selected: AW,
          remember: zR.length > 0 && MW.remember
        }), () => {
          var RW;
          const zR = this.state.keys.some((WW => bb(WW, CW)));
          if (zR) return;
          const AW = [...this.state.keys];
          AW.splice(Math.min(wW, AW.length), 0, CW);
          const bR = (null === (RW = MW.selected) || void 0 === RW ? void 0 : RW.keyId) === WW && null === this.state.selected;
          this.update({
            keys: AW,
            selected: bR ? MW.selected : this.state.selected,
            remember: this.state.remember || MW.remember
          })
        }
      }
      removeAll() {
        this.update(AA), this.local && null !== this.local.getItem(zb) && (this.local.setItem(zb, JSON.stringify(AA)), this.local.removeItem(zb))
      }
      setRemember(WW) {
        var RW;
        const MW = WW && !this.ownsRemembered ? this.read(this.local) : null,
          wW = (null !== (RW = null === MW || void 0 === MW ? void 0 : MW.keys) && void 0 !== RW ? RW : []).filter((WW => this.state.keys.every((RW => !bb(RW, WW)))));
        this.update({
          remember: WW,
          keys: [...wW, ...this.state.keys]
        })
      }
      otherTabChanged(WW) {
        var RW;
        if (!this.state.remember) return;
        const MW = WW ? this.parse(WW) : null;
        MW ? (this.state = MW, this.ownsRemembered = MW.remember) : (this.ownsRemembered = !1, this.state = {
          ...this.state,
          remember: !1
        }), null === (RW = this.session) || void 0 === RW || RW.setItem(zb, JSON.stringify(this.state)), this.notify()
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      update(WW) {
        var RW;
        this.state = {
          ...this.state,
          ...WW
        };
        const MW = JSON.stringify(this.state);
        var wW;
        if (null === (RW = this.session) || void 0 === RW || RW.setItem(zb, MW), this.state.remember && this.state.keys.length > 0) null === (wW = this.local) || void 0 === wW || wW.setItem(zb, MW), this.ownsRemembered = !0;
        else if (this.ownsRemembered) {
          var CW, zR;
          if (0 === this.state.keys.length) null === (zR = this.local) || void 0 === zR || zR.setItem(zb, JSON.stringify(AA));
          null === (CW = this.local) || void 0 === CW || CW.removeItem(zb), this.ownsRemembered = !1
        }
        this.notify()
      }
      read(WW) {
        const RW = null === WW || void 0 === WW ? void 0 : WW.getItem(zb);
        return RW ? this.parse(RW) : null
      }
      parse(WW) {
        try {
          const RW = {
            ...AA,
            ...JSON.parse(WW)
          };
          return Array.isArray(RW.keys) && RW.keys.every(yb) ? RW : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
        } catch (RW) {
          return console.warn("AI Helper: saved keys couldn't be read", RW instanceof Error ? RW.name : "error"), null
        }
      }
    }(NA("sessionStorage"), NA("localStorage"));

    function BA() {
      const WW = function() {
          const [WW, RW] = (0, wW.useState)(eA.getState);
          return (0, wW.useEffect)((() => (RW(eA.getState()), eA.subscribe((() => {
            RW(eA.getState())
          })))), []), WW
        }(),
        RW = eA.activeKey();
      return {
        ...WW,
        active: RW,
        isSelected: MW => {
          return (wW = RW ? WW.selected : null) === (CW = MW) || null !== wW && null !== CW && wW.keyId === CW.keyId && wW.modelId === CW.modelId;
          var wW, CW
        },
        select: WW => {
          eA.select(WW)
        },
        removeKey: WW => eA.removeKey(WW),
        renameKey: (WW, RW) => {
          eA.renameKey(WW, RW)
        },
        setRemember: WW => {
          eA.setRemember(WW)
        }
      }
    }
    async function tb(WW, RW) {
      var MW;
      let {
        provider: wW,
        key: CW,
        baseUrl: zR,
        modelName: AW
      } = WW;
      const bR = null !== (MW = null === AW || void 0 === AW ? void 0 : AW.trim()) && void 0 !== MW ? MW : "";
      let yR = [];
      try {
        yR = (await Dz(wW, CW, zR).check(RW)).models
      } catch (NW) {
        if (!("custom" === wW && NW instanceof sz && ("failed" === NW.problem || "noModel" === NW.problem))) throw NW
      }
      if (null !== RW && void 0 !== RW && RW.aborted) throw new DOMException("The AI key test was stopped", "AbortError");
      return "" !== bR ? [{
        ...RA(wW, bR, yR),
        typed: !0
      }] : MA(wW, yR)
    }
    "undefined" !== typeof window && window.addEventListener("storage", (WW => {
      WW.storageArea === NA("localStorage") && WW.key === zb && eA.otherTabChanged(WW.newValue)
    }));
    async function TA(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wW = Dz(WW.provider, WW.key, WW.baseUrl);
      let CW = {
        ...MW,
        callFormat: WW.model.callFormat,
        tools: WW.model.nativeTools ? MW.tools : void 0
      };
      const zR = async () => {
        try {
          return await wW.ask(WW.model.id, RW, CW)
        } catch (MW) {
          if (! function(WW, RW) {
              var MW, wW, CW;
              return 0 !== (null !== (MW = null === (wW = RW.tools) || void 0 === wW ? void 0 : wW.length) && void 0 !== MW ? MW : 0) && WW instanceof sz && "failed" === WW.problem && (400 === WW.status || 404 === WW.status && /\btool/i.test(null !== (CW = WW.detail) && void 0 !== CW ? CW : ""))
            }(MW, CW)) throw MW;
          const zR = {
              ...CW,
              tools: void 0
            },
            AW = await wW.ask(WW.model.id, RW, zR);
          return eA.stopNativeTools(WW.id, WW.model.id), CW = zR, AW
        }
      };
      try {
        return await zR()
      } catch (BW) {
        var AW, bR;
        if (!((eW = BW) instanceof sz && void 0 !== eW.status && "noCredit" !== eW.problem && (429 === eW.status || 408 === eW.status || eW.status >= 500))) throw BW;
        return await (yR = Math.min(null !== (AW = null !== (bR = BW.retryAfterMs) && void 0 !== bR ? bR : MW.retryWaitMs) && void 0 !== AW ? AW : 3e3, 2e4), NW = MW.signal, new Promise(((WW, RW) => {
          if (null !== NW && void 0 !== NW && NW.aborted) return void RW(new DOMException("The AI key request was stopped", "AbortError"));
          const MW = setTimeout(WW, yR);
          null === NW || void 0 === NW || NW.addEventListener("abort", (() => {
            clearTimeout(MW), RW(new DOMException("The AI key request was stopped", "AbortError"))
          }), {
            once: !0
          })
        }))), zR()
      }
      var yR, NW, eW
    }
    var gb = MW(2721);
    const ib = "Super Bot.xd",
      YA = {
        ovh: {
          name: ib,
          temperature: .6,
          nativeTools: !0,
          callFormat: "qwenXml"
        },
        deepseek: {
          name: ib,
          temperature: 1,
          nativeTools: !0,
          callFormat: "deepseek"
        }
      };
    const JA = "bloxdAiHelperSuperBot",
      PA = "bloxdAiHelperDeepSeekNotice";

    function IA(WW) {
      if ("deepseek" !== WW) return !0;
      try {
        return "undefined" !== typeof window && "1" === window.localStorage.getItem(PA)
      } catch {
        return !1
      }
    }

    function oA() {
      try {
        return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(JA)
      } catch {
        return !1
      }
    }
    const lA = new class {
      constructor() {
        this.state = void 0, this.listeners = new Set, this.refreshing = null, this.getState = () => this.state, this.subscribe = WW => (this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }), this.state = {
          picked: oA(),
          status: null,
          canBuySuperRank: null
        }, eA.subscribe((() => {
          null !== eA.getState().selected && this.state.picked && this.update({
            picked: !1
          })
        }))
      }
      isAnswering() {
        var WW;
        return this.state.picked && "ok" === (null === (WW = this.state.status) || void 0 === WW ? void 0 : WW.availability)
      }
      WM() {
        eA.select(null), this.update({
          picked: !0
        })
      }
      unpick() {
        this.update({
          picked: !1
        })
      }
      setStatus(WW) {
        const RW = this.state.picked && rb(WW, this.state.canBuySuperRank) && IA(WW.provider);
        this.update({
          status: WW,
          picked: RW
        })
      }
      setCanBuySuperRank(WW) {
        const {
          status: RW
        } = this.state;
        this.update({
          canBuySuperRank: WW,
          picked: this.state.picked && (null === RW || rb(RW, WW))
        })
      }
      async refresh() {
        return this.refreshing ??= jz("/ai-helper/super-bot-xd/status", {}).then((WW => {
          this.setStatus(WW)
        })).catch((WW => {
          console.warn("AI Helper: Super Bot.xd's usage couldn't be checked", WW)
        })).finally((() => {
          this.refreshing = null
        })), this.refreshing
      }
      update(WW) {
        this.state = {
          ...this.state,
          ...WW
        };
        try {
          window.sessionStorage.setItem(JA, this.state.picked ? "1" : "0")
        } catch {}
        for (const RW of this.listeners) RW()
      }
    };

    function FA() {
      const [WW, RW] = (0, wW.useState)(lA.getState);
      return (0, wW.useEffect)((() => (RW(lA.getState()), lA.subscribe((() => {
        RW(lA.getState())
      })))), []), WW
    }

    function fA(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
      if (null === WW) return "Checking whether Super Bot.xd can answer for you\u2026";
      switch (WW.availability) {
        case "ok":
          return null;
        case "guest":
          return "Log in to use Super Bot.xd.";
        case "tooNew":
          return `Super Bot.xd opens once your account is a week old: ${sA((null!==(RW=WW.availableFrom)&&void 0!==RW?RW:MW)-MW)} to go.`;
        case "noUsageLeft":
          return WW.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(WW,RW){const MW=Math.ceil((WW-RW)/36e5);if(MW<=24)return MW<=1?"within the hour":`in ${MW} hours`;return`in ${sA(WW-RW)}`}(WW.resetsAt,MW)}.` : "0 usage remaining - upgrade to Super for a more powerful AI.";
        case "unavailable":
          return "Super Bot.xd can't answer right now. Try again later."
      }
    }

    function QA(WW) {
      return null !== WW && !WW.isSuper && "noUsageLeft" === WW.availability
    }

    function rb(WW, RW) {
      return "ok" === WW.availability || !1 !== RW && QA(WW)
    }

    function cb(WW) {
      return !0 === WW.canBuySuperRank && QA(WW.status)
    }

    function XA(WW) {
      return cb(WW) ? null : fA(WW.status)
    }

    function jb(WW) {
      return WW.picked && null === XA(WW)
    }

    function kb(WW) {
      return WW.picked && cb(WW)
    }

    function ab(WW) {
      return `Usage left: ${WW.left}`
    }

    function sA(WW) {
      const RW = Math.max(1, Math.ceil(WW / Fz.f));
      return 1 === RW ? "1 day" : `${RW} days`
    }

    function dA(WW, RW) {
      const MW = "unavailable" === WW ? fA(RW) : null;
      if (MW) return `${MW} Bot.xd is answering instead.`;
      switch (WW) {
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
    async function pA(WW) {
      if (function(WW) {
          var RW, MW, wW, CW, zR, AW, bR;
          return WW.messages.length > 12 || WW.messages.some((WW => WW.content.length > XC)) || (null !== (RW = null === (MW = WW.toolsJson) || void 0 === MW ? void 0 : MW.length) && void 0 !== RW ? RW : 0) > 1e5 || (null !== (wW = null === (CW = WW.request) || void 0 === CW ? void 0 : CW.length) && void 0 !== wW ? wW : 0) > XC || (null !== (zR = null === (AW = WW.code) || void 0 === AW ? void 0 : AW.length) && void 0 !== zR ? zR : 0) > XC || (null !== (bR = WW.toolResults) && void 0 !== bR ? bR : []).some((WW => WW.text.length > 1e5))
        }(WW)) return {
        outcome: "tooLarge"
      };
      try {
        return await jz("/ai-helper/super-bot-xd/ask", WW)
      } catch (RW) {
        if (RW instanceof fz.d && 413 === RW.httpCode) return {
          outcome: "tooLarge"
        };
        throw RW
      }
    }
    async function hA(WW, RW) {
      return RW ? await new Promise(((MW, wW) => {
        const CW = () => {
          wW(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
        };
        RW.aborted ? CW() : (RW.addEventListener("abort", CW, {
          once: !0
        }), WW.then(MW, wW).finally((() => {
          RW.removeEventListener("abort", CW)
        })))
      })) : await WW
    }
    var UA = MW(33),
      EA = MW(27),
      VA = MW(1862);
    let mb = null;

    function xb() {
      mb ??= Promise.resolve().then((() => MW(1495))), mb.then((WW => {
        let {
          siteSupportsPurchases: RW
        } = WW;
        lA.setCanBuySuperRank(RW())
      }), (WW => {
        mb = null, console.warn("AI Helper: couldn't find out whether Super rank is sold here", WW)
      }))
    }
    let vb = !1,
      KA = null;
    async function uA() {
      if (vb) return !0;
      vb = !0;
      try {
        var WW;
        if (await lA.refresh(), !kb(lA.getState())) return !1;
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
        const [{
          NotificationProvider: RW
        }, {
          WorldCodeAiOutOfUsage: wW
        }] = await Promise.all([Promise.resolve().then((() => MW(1166))), MW.e(326).then((() => MW(58607)))]);
        null === (WW = KA) || void 0 === WW || WW.tearDownNotification();
        const CW = RW.showCustomPopup({
          body: WW => (0, AW.jsx)(wW, {
            onGetSuperRank: () => {
              WW(),
                function() {
                  UA.k.Sz("OpenStoreFromCodeEditor"), (0, VA.k)({
                    mode: "self",
                    source: "codeEditorAi",
                    openItem: "superRank"
                  });
                  const WW = UA.k.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
                    null === EA.b.get("openEverythingMenuName") && (UA.k.unsubscribe(WW), lA.refresh())
                  }))
                }()
            }
          })
        });
        return KA = CW, CW.getResult().finally((() => {
          KA === CW && (KA = null)
        })), !0
      } catch (RW) {
        return console.warn("AI Helper: the out of usage popup couldn't be opened", RW), !0
      } finally {
        vb = !1
      }
    }
    const OA = {
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
      nA = {
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
      GA = {
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
        Cw: ["onPlayerLeave"],
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
        countdown: ["sendFlyingMiddleMessage", "WR"],
        timer: ["WR", "RightInfoText"],
        seconds: ["WR"],
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
        place: ["onPlayerAttemptChangeBlock", "tMW"],
        build: ["onPlayerAttemptChangeBlock", "tMW"],
        block: ["tMW", "uF"],
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
      LA = new Set("a an and are as at be but by can do does for from get got give go has have he her his how i if in into is it its make me my no not of on or our please so that the their them then there they this to u up us was we what when where which who will with you your want wanna like just also add let lets makes".split(" "));

    function HA(WW) {
      return WW.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((WW => WW.length > 1))
    }

    function DA(WW) {
      return WW.length > 4 && WW.endsWith("ies") ? `${WW.slice(0,-3)}y` : WW.length > 3 && WW.endsWith("s") && !WW.endsWith("ss") ? WW.slice(0, -1) : WW
    }

    function qb(WW) {
      return new Set(HA(WW).map((WW => DA(WW))))
    }
    const ZA = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;

    function SA(WW) {
      return WW.split("\n").map((WW => WW.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (WW => WW.replace(/[^\n]/g, ""))).split("\n")
    }

    function Wb(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const MW = [],
        wW = new Set,
        CW = SA(RW ? WW : (0, eR.y)(WW, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, eR.r, (() => "projectRequire"))),
        zR = new Set([...CW.join("\n").matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)/g)].map((WW => WW[1])));
      return CW.forEach(((WW, RW) => {
        for (const CW of (0, eR.i)(WW, /(global|window|document|process|require)\b\s*[.([]/g, eR.r)) wW.has(CW[1]) || zR.has(CW[1]) || (wW.add(CW[1]), MW.push(`Line ${RW+1} uses "${CW[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPlayerJoin(playerId) {} is enough.`))
      })), MW
    }

    function Rb(WW) {
      const RW = WW.split("\n"),
        MW = [];
      return RW.forEach(((WW, wW) => {
        var CW, zR, AW, bR, yR;
        const NW = WW.indexOf("api.setCurrency(");
        if (-1 === NW) return;
        const eW = RW.slice(wW, wW + 3).join(" ").slice(NW),
          BW = eW.slice(0, eW.indexOf("}") + 1 || void 0),
          tR = null === (CW = /amount\s*:\s*(\d+)/.exec(BW)) || void 0 === CW ? void 0 : CW[1];
        if (!/persistent\s*:\s*true/.test(BW) || void 0 === tR) return;
        const TW = [null !== (zR = RW[wW - 2]) && void 0 !== zR ? zR : "", null !== (AW = RW[wW - 1]) && void 0 !== AW ? AW : "", WW.slice(0, NW)].join(" ");
        if (/\bif\s*\(|\belse\b|\?\s*$|&&\s*$/.test(TW)) return;
        const gR = null !== (bR = null === (yR = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(BW)) || void 0 === yR ? void 0 : yR[1]) && void 0 !== bR ? bR : "coins";
        MW.push(`Line ${wW+1} sets the saved "${gR}" back to ${tR} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${gR}") is null.`)
      })), MW
    }

    function Mb(WW) {
      var RW, MW;
      const wW = null !== (RW = null === (MW = WW.split("### Parameters:")[1]) || void 0 === MW ? void 0 : MW.split("###")[0]) && void 0 !== RW ? RW : "",
        CW = [];
      for (const zR of wW.split("\n")) {
        const WW = /^\|\s*([A-Za-z_$][\w$]*)\s*\|(?:\s*`([^`]*)`)?/.exec(zR);
        WW && "Parameter" !== WW[1] && CW.push({
          name: WW[1],
          type: WW[2]
        })
      }
      return CW
    }

    function wb(WW) {
      return Mb(WW).map((WW => WW.name))
    }

    function Cb(WW) {
      const RW = [];
      let MW = 0,
        wW = "",
        CW = 0;
      for (let AW = 0; AW < WW.length; AW++) {
        const zR = WW[AW];
        wW ? "\\" === zR ? AW++ : zR === wW && (wW = "") : '"' === zR || "'" === zR || "`" === zR ? wW = zR : "[" === zR || "{" === zR ? MW++ : "]" === zR || "}" === zR ? MW-- : "," === zR && 0 === MW && (RW.push(WW.slice(CW, AW).trim()), CW = AW + 1)
      }
      const zR = WW.slice(CW).trim();
      return ("" !== zR || RW.length > 0) && RW.push(zR), RW
    }

    function zy(WW, RW, MW) {
      let wW;
      const CW = function(WW) {
        const RW = WW.split("\n").slice(1).map((WW => WW.trim())).find((WW => "" !== WW && !WW.startsWith("#") && !WW.startsWith("|") && !WW.startsWith("**") && !WW.startsWith("```")));
        if (!RW) return "";
        const MW = RW.search(/\.\s/),
          wW = -1 === MW ? RW : RW.slice(0, MW + 1);
        return wW.length > 110 ? `${wW.slice(0,107)}...` : wW
      }(MW);
      return wW = "api" === WW ? `api.${RW}(${wb(MW).join(", ")})${CW?` \u2014 ${CW}`:""}` : "callback" === WW ? `${RW}(${wb(MW).join(", ")})${CW?` \u2014 ${CW}`:""}` : "clientOption" === WW ? `${RW}: ${function(WW){var RW,MW;return null!==(RW=null===(MW=/\*\*Type:\*\*\s*`([^`]+)`/.exec(WW))||void 0===MW?void 0:MW[1])&&void 0!==RW?RW:""}(MW)}${CW?` \u2014 ${CW}`:""}`:RW,{kind:WW,name:RW,text:MW,line:wW,nameWords:qb(RW),textWords:qb(MW)}}function Ab(WW){return WW.toLowerCase().split(/[^a-z0-9]+/).filter((WW=>""!==WW&&"of"!==WW&&"the"!==WW)).sort().join(" ")}const by=new Set(["block","item"]);function yy(WW){let{names:RW,isSure:MW}=WW;return 0===RW.length?"":1!==RW.length||MW?`
      Did you mean $ {
        RW.map((WW => `"${WW}"`)).join(" or ")
      } ? `:`
      The closest name is "${RW[0]}", which may be something
      else.
      `}function Nb(WW){return WW.split("\n").slice(1).map((WW=>WW.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((WW=>""!==WW&&!WW.startsWith("#")))}class eb{constructor(WW){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0,this.blockNames=void 0,this.namesByLowerCase=void 0,this.wordCounts=new Map,this.realName=(WW,RW)=>{if("mob"===WW){var MW;const WW=RW.trim().toLowerCase();return null!==(MW=this.mobTypes.find((RW=>RW.toLowerCase()===WW)))&&void 0!==MW?MW:null}const wW=this.suggestNames(RW),CW=wW.isSure?wW.names[0]:void 0;return void 0===CW||"item"!==WW&&!this.blockNames.has(CW)?null:CW};const RW=[],MW=(WW,MW)=>{for(const{name:wW,text:CW}of function(WW){const RW=[],MW=WW.split(/^## /m).slice(1);for(const wW of MW){const WW=wW.indexOf("\n"),MW=(-1===WW?wW:wW.slice(0,WW)).trim(),CW=`
      # # $ {
        wW
      }
      `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();RW.push({name:MW,text:CW})}return RW}(MW))RW.push(zy(WW,wW,CW))};MW("api",WW.apiReference),MW("callback",WW.callbacks),MW("clientOption",WW.clientOptions),MW("snippet",WW.snippets),MW("howTo",WW.howTo);const wW=function(){const WW=vw.map((WW=>`
      # # $ {
        WW.name
      }\
      nReady - made
      function($ {
        WW.category
      }) : call it as it is, without api.and without writing it;
      its code is added to the file by itself.\n$ {
        WW.about
      }\
      n\ nUsage: \`${WW.signature}\`\n\n\`\`\`js\n${WW.example}\n\`\`\``)),
  RW = DM.map((WW => `## ${WW.name}\nPrefab (${WW.kind}, ${WW.category}): put in with use_prefab. ${Bw(WW,!1)}`));
  return {
    helpers: `# Ready-made functions\n\n${WW.join("\n\n")}\n`,
    prefabs: `# Prefabs\n\n${RW.join("\n\n")}\n`
  }
}();
MW("helper", wW.helpers), MW("prefab", wW.prefabs), this.sections = RW;
for (const zR of RW) {
  this.byName.has(zR.name) || this.byName.set(zR.name, zR);
  for (const WW of zR.textWords) {
    var CW;
    this.wordCounts.set(WW, (null !== (CW = this.wordCounts.get(WW)) && void 0 !== CW ? CW : 0) + 1)
  }
}
this.itemAndBlockNames = [...new Set([...Nb(WW.itemNames), ...Nb(WW.blockNames)])], this.blockNames = new Set(Nb(WW.blockNames)), this.namesByLowerCase = new Map(this.itemAndBlockNames.map((WW => [WW.toLowerCase(), WW]))), this.mobTypes = function(WW) {
  var RW, MW;
  const wW = null !== (RW = null === (MW = WW.split("## Mob Variations")[1]) || void 0 === MW ? void 0 : MW.split("```")[1]) && void 0 !== RW ? RW : "",
    CW = [];
  for (const zR of wW.split("\n")) {
    const WW = /^([A-Z][\w ]*?):\s*"/.exec(zR.trim());
    WW && CW.push(WW[1])
  }
  return CW
}(WW.mobSettings)
}
index(WW) {
  return this.sections.filter((RW => RW.kind === WW)).map((WW => WW.line)).join("\n")
}
callbackNames() {
  return this.sections.filter((WW => "callback" === WW.kind)).map((WW => WW.name))
}
get(WW) {
  return this.byName.get(WW)
}
unprefixedApiCalls(WW) {
  const RW = SA(WW),
    MW = RW.join("\n"),
    wW = new Set([...MW.matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)|^([\w$]+)\s*=/gm)].map((WW => {
      var RW;
      return null !== (RW = WW[1]) && void 0 !== RW ? RW : WW[2]
    }))),
    CW = [...MW.matchAll(/\b(?:const|let|var)\s*([{[][^=]*?[}\]])\s*=/g), ...MW.matchAll(/\bimport\s+([\w$\s{},*]+?)\s+from\b/g)];
  for (const AW of CW)
    for (const WW of AW[1].matchAll(/([\w$]+)\s*(?=[,}\]=]|$)/g)) wW.add(WW[1]);
  const zR = new Map;
  return RW.forEach(((WW, RW) => {
    for (const CW of (0, eR.i)(WW, /([\w$]+)\s*\(/g, eR.r)) {
      var MW;
      const AW = CW[1],
        bR = /^\s*(?:async\s+)?$/.test(WW.slice(0, CW.index)) && /^[\w$]+\s*\([^()]*\)\s*\{/.test(WW.slice(CW.index));
      zR.has(AW) || wW.has(AW) || bR || "api" !== (null === (MW = this.byName.get(AW)) || void 0 === MW ? void 0 : MW.kind) || zR.set(AW, `Line ${RW+1} calls ${AW} without "api.", so it throws there. Did you mean api.${AW}?`)
    }
  })), [...zR.values()]
}
unknownApiMethods(WW) {
  return [...new Set([...WW.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)].map((WW => WW[1])))].filter((WW => {
    var RW;
    return "api" !== (null === (RW = this.byName.get(WW)) || void 0 === RW ? void 0 : RW.kind)
  })).map((WW => {
    const RW = this.find(WW.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((WW => "api" === WW.kind)).slice(0, 2).map((WW => `api.${WW.name}`));
    return `api.${WW} doesn't exist.${RW.length?` Did you mean ${RW.join(" or ")}?`:""}`
  }))
}
unknownItemNames(WW) {
  const RW = new Set([...this.itemAndBlockNames, "Air"]),
    MW = new Set;
  for (const wW of WW.matchAll(/\bapi\.([A-Za-z_$][\w$]*)\(([^()]*)\)/g)) {
    const CW = this.byName.get(wW[1]);
    if ("api" !== (null === CW || void 0 === CW ? void 0 : CW.kind)) continue;
    const zR = Mb(CW.text).map((WW => {
        let {
          type: RW
        } = WW;
        return void 0 !== RW && /^(ItemName|BlockName)\b/.test(RW)
      })),
      AW = Cb(wW[2]);
    AW.forEach(((wW, CW) => {
      var bR, yR;
      const NW = zR[CW] || CW === AW.length - 1 && zR[zR.length - 1],
        eW = null === (bR = /^CONFIG\.([\w$]+)$/.exec(wW)) || void 0 === bR ? void 0 : bR[1],
        BW = eW ? null === (yR = new RegExp(`(?:^|[{,])\\s*${eW.replaceAll("$","\\$")}\\s*:\\s*("[^"\\n]*"|'[^'\\n]*')`, "m").exec(WW)) || void 0 === yR ? void 0 : yR[1] : void 0,
        tR = /^(["'`])([^"'`]+)\1$/.exec(null !== BW && void 0 !== BW ? BW : wW),
        TW = "`" === (null === tR || void 0 === tR ? void 0 : tR[1]) && tR[2].includes("${");
      NW && tR && !TW && !RW.has(tR[2]) && MW.add(tR[2])
    }))
  }
  return [...MW].map((WW => `"${WW}" isn't an item or block name.${yy(this.suggestNames(WW))}`))
}
reorderedComparedNames(WW) {
  const RW = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
    MW = new Map(this.itemAndBlockNames.map((WW => [Ab(WW), WW]))),
    wW = new Map,
    CW = [/[!=]==?\s*(["'])([^"'\n]{3,40})\1/g, /(["'])([^"'\n]{3,40})\1\s*[!=]==?/g, /\bcase\s+(["'])([^"'\n]{3,40})\1\s*:/g, /\.includes\(\s*(["'])([^"'\n]{3,40})\1\s*\)/g];
  for (const bR of CW)
    for (const CW of WW.matchAll(bR)) {
      const WW = CW[2],
        zR = RW.has(WW) || !/\s/.test(WW.trim()) ? void 0 : MW.get(Ab(WW));
      zR && wW.set(WW, zR)
    }
  const zR = [...wW].map((WW => {
      let [RW, MW] = WW;
      return `"${RW}" isn't a block or item name, so comparing with it is never true. Did you mean "${MW}"?`
    })),
    AW = new Map;
  for (const bR of WW.matchAll(/\b\w*block\w*\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) {
    const RW = bR[2],
      MW = this.blockNames.has(RW) || !this.itemAndBlockNames.includes(RW) ? void 0 : [`Block of ${RW}`, `${RW} Block`].find((WW => this.blockNames.has(WW)));
    !MW || WW.includes(`"${MW}"`) || WW.includes(`'${MW}'`) || AW.set(RW, MW)
  }
  return [...zR, ...[...AW].map((WW => {
    let [RW, MW] = WW;
    return `"${RW}" is an item, not a block, so no block is ever called that. Did you mean "${MW}"?`
  }))]
}
unknownComparedBlockNames(WW) {
  const RW = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
    MW = new Set(this.itemAndBlockNames.map((WW => Ab(WW)))),
    wW = new Set;
  for (const CW of WW.matchAll(/\b\w*block(?:name|type)?\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) wW.add(CW[2]);
  for (const CW of WW.matchAll(/(["'])([^"'\n]+)\1\s*[!=]==?\s*\w*block(?:name|type)?\b/gi)) wW.add(CW[2]);
  return [...wW].filter((WW => !RW.has(WW) && !(/\s/.test(WW.trim()) && MW.has(Ab(WW))))).map((WW => {
    const RW = this.itemAndBlockNames.filter((RW => Ab(RW) === Ab(WW))),
      MW = this.itemAndBlockNames.filter((RW => HA(RW).includes(WW.toLowerCase()))),
      wW = this.suggestNames(WW),
      CW = RW.length > 0 ? {
        names: RW,
        isSure: 1 === RW.length,
        isDecided: !0
      } : wW.names.length > 0 || wW.isDecided ? wW : {
        names: MW.length <= 2 ? MW : [],
        isSure: 1 === MW.length,
        isDecided: !1
      };
    return `"${WW}" isn't a block or item name, so comparing a block with it is never true.${yy(CW)}`
  }))
}
madeUpStopValues(WW) {
  const RW = new Set;
  for (const {
      name: MW,
      body: wW
    }
    of
    function(WW) {
      const RW = [...WW.matchAll(ZA)];
      return RW.map(((MW, wW) => {
        var CW, zR, AW;
        return {
          name: null !== (CW = MW[1]) && void 0 !== CW ? CW : MW[2],
          body: WW.slice(MW.index, null !== (zR = null === (AW = RW[wW + 1]) || void 0 === AW ? void 0 : AW.index) && void 0 !== zR ? zR : WW.length)
        }
      }))
    }(WW)) {
    const WW = this.byName.get(MW);
    if ("callback" === (null === WW || void 0 === WW ? void 0 : WW.kind))
      for (const CW of wW.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
        const wW = CW[1];
        if (WW.text.includes(`"${wW}"`)) continue;
        const zR = [...new Set([...WW.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((WW => WW[1])))],
          AW = zR.length > 0 ? `Did you mean ${zR.map((WW=>`"${WW}"`)).join(" or ")}?` : /Return false/i.test(WW.text) ? `To stop it, return false instead of "${wW}".` : "Check Show Docs for what it can return.";
        RW.add(`${MW} can't use "${wW}" to stop anything. ${AW}`)
      }
  }
  return [...RW]
}
codeWarnings(WW) {
  let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [...this.unknownApiMethods(WW), ...this.unprefixedApiCalls(WW), ...this.unknownItemNames(WW), ...this.reorderedComparedNames(WW), ...this.unknownComparedBlockNames(WW), ...this.madeUpStopValues(WW), ...Rb(WW), ...Wb(WW, RW)]
}
suggestNames(WW) {
  var RW;
  const MW = WW.trim().toLowerCase().replace(/\s+/g, " "),
    wW = Object.hasOwn(OA, MW) ? OA[MW] : void 0;
  if (wW) {
    const WW = wW.filter((WW => this.namesByLowerCase.has(WW.toLowerCase())));
    return {
      names: WW,
      isSure: 1 === WW.length,
      isDecided: !0
    }
  }
  const CW = MW.split(" ").map((WW => Object.hasOwn(nA, WW) ? nA[WW] : WW)).join(" "),
    zR = null !== (RW = this.namesByLowerCase.get(MW)) && void 0 !== RW ? RW : this.namesByLowerCase.get(CW);
  if (zR) return {
    names: [zR],
    isSure: !0,
    isDecided: !0
  };
  const AW = this.closestItemAndBlockNames(CW),
    bR = WW => HA(WW).filter((WW => !LA.has(WW) && !by.has(WW))).map(DA),
    yR = 1 === AW.length ? bR(AW[0]) : [];
  return {
    names: AW,
    isSure: 1 === AW.length && bR(CW).every((WW => yR.includes(WW))),
    isDecided: !1
  }
}
closestItemAndBlockNames(WW) {
  const RW = new Set(HA(WW).filter((WW => !LA.has(WW))).map(DA)),
    MW = this.itemAndBlockNames.map((WW => {
      const MW = HA(WW).filter((WW => !LA.has(WW))).map(DA),
        wW = MW.filter((WW => RW.has(WW))).length;
      return {
        candidate: WW,
        score: 2 * wW - (MW.length - wW)
      }
    })).filter((WW => WW.score > 0)),
    wW = Math.max(...MW.map((WW => WW.score)));
  return MW.filter((WW => WW.score === wW)).slice(0, 2).map((WW => WW.candidate))
}
find(WW, RW, MW) {
  const wW = new Map,
    CW = (WW, RW) => {
      var MW;
      WW && wW.set(WW, (null !== (MW = wW.get(WW)) && void 0 !== MW ? MW : 0) + RW)
    },
    zR = HA(WW),
    AW = zR.filter((WW => !LA.has(WW)));
  for (const BW of zR)
    for (const WW of Object.hasOwn(GA, BW) ? GA[BW] : []) CW(this.byName.get(WW), 6);
  for (const BW of `${WW}\n${RW}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
    var bR, yR;
    CW(this.byName.get(null !== (bR = null !== (yR = BW[1]) && void 0 !== yR ? yR : BW[2]) && void 0 !== bR ? bR : BW[3]), BW[1] || BW[2] ? 4 : 2)
  }
  for (const BW of (0, eR.i)(RW, /([A-Za-z_$][\w$]*)\s*\(/g, eR.r)) {
    const WW = this.byName.get(BW[1]);
    "helper" === (null === WW || void 0 === WW ? void 0 : WW.kind) && CW(WW, 3)
  }
  const NW = new Set(AW.map(DA));
  for (const BW of this.sections) {
    let WW = 0;
    for (const RW of NW) {
      var eW;
      const MW = 1 / Math.log2(2 + (null !== (eW = this.wordCounts.get(RW)) && void 0 !== eW ? eW : 0));
      BW.nameWords.has(RW) ? WW += 3 * MW : BW.textWords.has(RW) && (WW += MW)
    }
    CW(BW, WW)
  }
  return [...wW.entries()].filter((WW => {
    let [RW, MW] = WW;
    return MW > .5 && "prefab" !== RW.kind
  })).sort(((WW, RW) => RW[1] - WW[1])).slice(0, MW).map((WW => {
    let [RW] = WW;
    return RW
  }))
}
section(WW) {
  var RW, MW;
  const wW = WW.trim().replace(/^api\./, "").replace(/\(.*$/, ""),
    CW = wW.toLowerCase();
  return null !== (RW = null !== (MW = this.byName.get(wW)) && void 0 !== MW ? MW : this.sections.find((WW => WW.name.toLowerCase() === CW))) && void 0 !== RW ? RW : null
}
searchNames(WW, RW) {
  const MW = HA(WW).filter((WW => !LA.has(WW))).map(DA);
  if (0 === MW.length) return [];
  const wW = [...this.itemAndBlockNames, ...this.mobTypes].flatMap((WW => {
      const RW = new Set(HA(WW).map(DA)),
        wW = MW.filter((WW => RW.has(WW))).length;
      return 0 === wW ? [] : [{
        name: WW,
        found: wW,
        length: RW.size
      }]
    })),
    CW = Math.max(0, ...wW.map((WW => WW.found)));
  return [...new Set(wW.filter((WW => WW.found === CW)).sort(((WW, RW) => WW.length - RW.length || WW.name.localeCompare(RW.name))).map((WW => WW.name)))].slice(0, RW)
}
matchItemAndBlockNames(WW, RW) {
  const MW = new Set(HA(WW).map(DA)),
    wW = [];
  for (const CW of this.itemAndBlockNames) {
    const WW = HA(CW).filter((WW => !LA.has(WW))).map(DA);
    WW.length > 0 && WW.every((WW => MW.has(WW))) && wW.push({
      name: CW,
      length: WW.length
    })
  }
  return wW.sort(((WW, RW) => RW.length - WW.length)).slice(0, RW).map((WW => WW.name))
}
}

function Bb(WW, RW) {
  var MW;
  const wW = ty(WW, !0),
    CW = null === (MW = /^([\w$.]+) (?:needs|couldn't|didn't|isn't a function)/.exec(wW)) || void 0 === MW ? void 0 : MW[1],
    zR = CW && void 0 !== RW ? function(WW, RW) {
      const MW = RW.replace(/[$.]/g, "\\$&"),
        wW = new RegExp(`(^|[^\\w$.])${MW}\\s*\\(`),
        CW = WW.split("\n").flatMap(((WW, RW) => wW.test(WW) ? [RW + 1] : []));
      return 1 === CW.length ? CW[0] : void 0
    }(RW, CW) : void 0;
  return zR ? {
    text: ty(WW, !1),
    line: zR
  } : {
    text: wW
  }
}

function ty(WW, RW) {
  const MW = WW.replace(/^Logging too many errors\n/, "").replace(/^(First|Last) error of \d+ errors:\n/, ""),
    [wW, ...CW] = MW.split("\n"),
    {
      when: zR,
      rest: AW
    } = function(WW) {
      const RW = /^Error in world code init:\s*/.exec(WW);
      if (RW) return {
        when: "when your world started",
        rest: WW.slice(RW[0].length)
      };
      const MW = /^Error in (?:callback )?(\w+):\s*/.exec(WW);
      return MW ? {
        when: `in ${MW[1]}`,
        rest: WW.slice(MW[0].length)
      } : {
        when: "",
        rest: WW
      }
    }(wW.trim()),
    bR = zR && RW ? ` ${zR}` : "",
    yR = /(?:ApiError:\s*)?(\w+) didn't work/.exec(AW);
  if (yR) {
    var NW, eW, BW, tR, TW;
    const WW = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (NW = null === (eW = CW[0]) || void 0 === eW ? void 0 : eW.trim()) && void 0 !== NW ? NW : ""),
      RW = null === (BW = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (tR = null === (TW = CW[1]) || void 0 === TW ? void 0 : TW.trim()) && void 0 !== tR ? tR : "")) || void 0 === BW ? void 0 : BW[1],
      MW = RW ? function(WW) {
        const RW = WW.split(/\s+or\s+/)[0].trim();
        return /^(a|an|the)\s/i.test(RW) || !/^[a-z]/i.test(RW) ? RW : `${/^[aeiou]/i.test(RW)?"an":"a"} ${RW}`
      }(RW) : void 0;
    return MW && null !== WW && void 0 !== WW && WW[3] ? `api.${yR[1]} needs ${MW}, but it got ${WW[3]}${bR}.` : WW ? `api.${yR[1]} couldn't use its ${gR=Number(WW[1]),1===gR?"first":2===gR?"second":3===gR?"third":4===gR?"fourth":`#${gR}`} argument${bR}.${MW?` It needs ${MW}.`:""}` : `api.${yR[1]} didn't work${bR}.`
  }
  var gR;
  const iR = /TypeError:\s*(?:(.+?) is )?not a function/.exec(AW);
  if (iR) return iR[1] ? `${iR[1]} isn't a function${bR}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${bR}. Check each name it calls is spelt exactly right.`;
  const YW = /ReferenceError:\s*'?([^'\s]+)'? is not defined/.exec(AW);
  if (YW) return `${YW[1]} isn't defined${bR}. Check the spelling, or create it before using it.`;
  const JW = /TypeError:\s*[Cc]annot read propert(?:y|ies) (?:'([^']+)' )?of (undefined|null)(?: \(reading '([^']+)'\))?/.exec(AW);
  if (JW) {
    var PW;
    const WW = null !== (PW = JW[1]) && void 0 !== PW ? PW : JW[3];
    return `Your code tried to read${WW?` .${WW}`:" something"} from ${JW[2]}${bR}: a value it expected wasn't there.`
  }
  return `Your code hit an error${bR}: ${AW.replace(/^\w*Error:\s*/,"")}`
}
const Tb = /^"([^"]+)" isn't an item or block name\..*Did you mean "([^"]+)"\?$/,
  gy = /^"([^"]+)" isn't a block or item name, so comparing with it\b.*Did you mean "([^"]+)"\?$/,
  iy = /^"([^"]+)" (?:is an item, not a block|isn't a block or item name, so comparing a block with it)\b.*Did you mean "([^"]+)"\?$/,
  Yb = /^([\w$]+) can't use "([^"]+)" to stop anything\. Did you mean "([^"]+)"\?$/,
  Jb = /^Line \d+ calls ([\w$]+) without "api\.", so it throws there\. Did you mean (api\.[\w$]+)\?$/,
  Pb = /^Line \d+ uses "([\w$]+)", which is never set, so it throws there\. Did you mean "([\w$]+)"\?$/,
  Ib = /^Line \d+ uses "global", which World Code doesn't have\b/,
  ob = /^[ \t]*global\.([\w$]+)[ \t]*=[ \t]*\1[ \t]*;?[ \t]*(?:\/\/.*)?(?:\r?\n|$)/gm,
  lb = /^([ \t]*)global\.([\w$]+)([ \t]*=(?!=))/gm;

function Fb(WW) {
  const RW = Jb.exec(WW);
  if (RW) return {
    from: RW[1],
    to: RW[2],
    kind: "call"
  };
  const MW = Pb.exec(WW);
  if (MW) return {
    from: MW[1],
    to: MW[2],
    kind: "variable"
  };
  if (Ib.test(WW)) return {
    from: "global",
    to: "",
    kind: "export"
  };
  const wW = Yb.exec(WW);
  if (wW) return {
    from: wW[2],
    to: wW[3],
    callback: wW[1]
  };
  const CW = gy.exec(WW);
  if (CW) return {
    from: CW[1],
    to: CW[2],
    kind: "compared"
  };
  const zR = iy.exec(WW);
  if (zR) return {
    from: zR[1],
    to: zR[2],
    kind: "comparedBlock"
  };
  const AW = Tb.exec(WW);
  return AW ? {
    from: AW[1],
    to: AW[2]
  } : void 0
}

function fb(WW) {
  const RW = WW.map(Fb);
  return RW.length > 0 && !RW.includes(void 0) ? RW : void 0
}

function Qb(WW, RW, MW) {
  return WW.replaceAll(`"${RW}"`, `"${MW}"`).replaceAll(`'${RW}'`, `'${MW}'`)
}

function ry(WW, RW) {
  const MW = WW => fW().isIdentifier(WW) ? WW.text === RW : WW.elements.some((WW => !fW().isOmittedExpression(WW) && MW(WW.name))),
    wW = WW => void 0 !== WW && fW().isVariableDeclarationList(WW) && WW.declarations.some((WW => MW(WW.name))),
    CW = WW => {
      const RW = WW => !fW().isFunctionLike(WW) && !fW().isClassStaticBlockDeclaration(WW) && (!(!fW().isVariableDeclarationList(WW) || 0 !== (WW.flags & fW().NodeFlags.BlockScoped) || !wW(WW)) || !0 === fW().forEachChild(WW, RW));
      return void 0 !== WW && !0 === fW().forEachChild(WW, RW)
    };
  var zR;
  if (fW().isFunctionLike(WW)) return WW.parameters.some((WW => MW(WW.name))) || fW().isFunctionExpression(WW) && (null === (zR = WW.name) || void 0 === zR ? void 0 : zR.text) === RW || "body" in WW && CW(WW.body);
  return !(!fW().isSourceFile(WW) || !CW(WW)) || (fW().isSourceFile(WW) || fW().isBlock(WW) || fW().isCaseClause(WW) || fW().isDefaultClause(WW) ? WW.statements.some((WW => {
    var MW;
    return fW().isVariableStatement(WW) && wW(WW.declarationList) || (fW().isFunctionDeclaration(WW) || fW().isClassDeclaration(WW)) && (null === (MW = WW.name) || void 0 === MW ? void 0 : MW.text) === RW || fW().isImportDeclaration(WW) && (WW => {
      var MW;
      const wW = null === WW || void 0 === WW ? void 0 : WW.namedBindings;
      return (null === WW || void 0 === WW || null === (MW = WW.name) || void 0 === MW ? void 0 : MW.text) === RW || void 0 !== wW && (fW().isNamespaceImport(wW) ? wW.name.text === RW : wW.elements.some((WW => WW.name.text === RW)))
    })(WW.importClause)
  })) : fW().isForStatement(WW) || fW().isForInStatement(WW) || fW().isForOfStatement(WW) ? wW(WW.initializer) : fW().isCatchClause(WW) && void 0 !== WW.variableDeclaration && MW(WW.variableDeclaration.name))
}

function cy(WW, RW) {
  return RW.reduce(((WW, RW) => {
    let {
      from: MW,
      to: wW,
      kind: CW,
      callback: zR
    } = RW;
    if ("export" === CW) return WW.replace(ob, "").replace(lb, "$1$2$3");
    if ("call" === CW || "variable" === CW) return function(WW, RW, MW, wW) {
      const CW = fW().createSourceFile("worldCode.js", WW, fW().ScriptTarget.Latest, !0, fW().ScriptKind.JS),
        zR = [],
        AW = (WW, bR) => {
          const yR = bR || ry(WW, RW),
            NW = WW.parent;
          if (fW().isIdentifier(WW) && WW.text === RW && !yR && NW) {
            const AW = fW().isBindingElement(NW) && NW.propertyName === WW || (fW().isPropertyAccessExpression(NW) || fW().isPropertyAssignment(NW) || fW().isMethodDeclaration(NW) || fW().isPropertyDeclaration(NW) || fW().isGetAccessorDeclaration(NW) || fW().isSetAccessorDeclaration(NW)) && NW.name === WW,
              bR = fW().isCallExpression(NW) && NW.expression === WW;
            AW || wW && !bR || zR.push({
              at: WW.getStart(CW),
              text: fW().isShorthandPropertyAssignment(NW) ? `${RW}: ${MW}` : MW
            })
          }
          fW().forEachChild(WW, (WW => {
            AW(WW, yR)
          }))
        };
      return AW(CW, !1), zR.reduceRight(((WW, MW) => WW.slice(0, MW.at) + MW.text + WW.slice(MW.at + RW.length)), WW)
    }(WW, MW, wW, "call" === CW);
    if ("compared" === CW || "comparedBlock" === CW) {
      const RW = `(["'])${function(WW){return WW.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(MW)}\\1`;
      return ("comparedBlock" === CW ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${RW}`, `${RW}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${RW}`, `${RW}\\s*[!=]==?`, `\\bcase\\s+${RW}\\s*:`, `\\.includes\\(\\s*${RW}\\s*\\)`]).reduce(((WW, RW) => WW.replace(new RegExp(RW, "g"), (WW => Qb(WW, MW, wW)))), WW)
    }
    if (void 0 !== zR) {
      return xR(WW).filter((WW => WW.name === zR && WW.topLevel)).reduceRight(((WW, RW) => WW.slice(0, RW.from) + Qb(WW.slice(RW.from, RW.to), MW, wW) + WW.slice(RW.to)), WW)
    }
    return Qb(WW, MW, wW)
  }), WW)
}

function Xb(WW) {
  let {
    from: RW,
    to: MW,
    kind: wW
  } = WW;
  return "export" === wW ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : `"${RW}" is now "${MW}".`
}
var jy = MW(38933);

function ky() {
  return (0, AW.jsxs)("svg", {
    className: "WorldCodeAiKeyIcon",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    children: [(0, AW.jsx)("circle", {
      cx: "4.5",
      cy: "8",
      r: "3"
    }), (0, AW.jsx)("path", {
      d: "M7.5 8h7.5M12.5 8v3M15 8v2.5"
    })]
  })
}

function ay(WW) {
  let {
    detail: RW,
    onOpen: MW
  } = WW;
  return (0, AW.jsxs)("details", {
    className: "WorldCodeAiKeyDetails",
    onToggle: WW => {
      WW.currentTarget.open && (null === MW || void 0 === MW || MW())
    },
    children: [(0, AW.jsx)("summary", {
      children: "Details"
    }), (0, AW.jsx)("p", {
      children: RW
    })]
  })
}

function sb(WW) {
  let {
    answeredBy: RW
  } = WW;
  return "free" === RW ? (0, AW.jsx)("div", {
    className: "WorldCodeAiAnsweredBy",
    children: "Bot.xd (free)"
  }) : (0, AW.jsxs)("div", {
    className: RW.isSuperBot ? "WorldCodeAiAnsweredBy" : "WorldCodeAiAnsweredBy WorldCodeAiAnsweredBy-key",
    children: [!RW.isSuperBot && (0, AW.jsx)(ky, {}), RW.model]
  })
}

function db(WW) {
  let {
    notice: RW,
    model: MW,
    company: wW,
    isServer: CW
  } = WW;
  switch (RW) {
    case "badKey":
      return CW ? `${wW} didn't accept your key: it may be wrong or deleted.` : `${wW} didn't accept your key: it may be wrong or deleted. Check it on ${wW}'s website.`;
    case "noCredit":
      return CW ? `${wW} stopped your key for now: it has used all it can.` : `${wW} stopped your key for now: it has used all it can. Check it on ${wW}'s website.`;
    case "busy":
      return `Too many requests to ${MW} right now. Wait a minute and try again.`;
    case "noModel":
      return `${wW} can't find ${MW}. Pick another model, or press Check for new models in AI settings.`;
    case "timeout":
      return `${MW} took too long to answer.`;
    case "unreachable":
      return CW ? `Couldn't reach ${wW}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${wW}. Check your internet and your key.`;
    case "blocked":
      return `${wW} doesn't work from where you are.`;
    case "unchecked":
      return "Bloxd's safety check didn't answer, so your key wasn't used.";
    default:
      return `${MW} can't be used right now. Try again in a minute.`
  }
}

function pb(WW) {
  let {
    notice: RW,
    model: MW,
    company: wW
  } = WW;
  switch (RW) {
    case "badKey":
      return `Not answered: ${wW} didn't accept your key.`;
    case "noModel":
      return `Not answered: ${wW} couldn't find ${MW}.`;
    case "noCredit":
      return `Not answered: ${wW} stopped your key for now.`;
    case "busy":
      return `Not answered: too many requests to ${MW}.`;
    case "timeout":
      return `Not answered: ${MW} took too long.`;
    case "unreachable":
      return `Not answered: couldn't reach ${wW}.`;
    case "blocked":
      return `Not answered: ${wW} doesn't work from where you are.`;
    case "unchecked":
      return "Not answered: the safety check didn't answer.";
    default:
      return `Not answered: ${MW} couldn't be used.`
  }
}

function hb(WW) {
  return "busy" === WW || "timeout" === WW || "failed" === WW || "unchecked" === WW
}

function Ub(WW) {
  let {
    notice: RW,
    onRetry: MW,
    onUseFree: wW,
    onCheckKey: CW
  } = WW;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiKeyNoticeActions",
    children: [(0, AW.jsx)("button", {
      ...jy.h,
      className: "WorldCodeAiPrimaryButton",
      onClick: wW,
      children: "Use Bot.xd for this one"
    }), hb(RW) && (0, AW.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: MW,
      children: "Try again"
    }), "unchecked" !== RW && (0, AW.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: CW,
      children: "Open AI settings"
    })]
  })
}

function Eb(WW) {
  let {
    hasCode: RW,
    canFinish: MW,
    onFinish: wW
  } = WW;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiCutShort",
    children: [(0, AW.jsx)("p", {
      children: RW ? "The answer was cut short because it was too long." : "The answer was cut short before its code because it was too long."
    }), MW && (0, AW.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: wW,
      children: "Finish the answer"
    })]
  })
}
const Vb = "worldCodeAiAllowEdits";

function my() {
  try {
    return "false" !== localStorage.getItem(Vb)
  } catch {
    return !0
  }
}

function xy(WW) {
  let {
    allow: RW,
    onChange: MW
  } = WW;
  return (0, AW.jsxs)("label", {
    className: "WorldCodeAiAllowEdits",
    children: [(0, AW.jsx)("input", {
      type: "checkbox",
      role: "switch",
      checked: RW,
      onChange: WW => {
        MW(WW.target.checked)
      }
    }), (0, AW.jsx)("span", {
      children: "Allow AI to make edits to my code"
    })]
  })
}
const vy = {
  keyId: "bloxd",
  modelId: "superbotxd"
};

function Kb(WW, RW) {
  const MW = Array.from(WW.querySelectorAll(".WorldCodeAiModelGroup")),
    wW = MW.findIndex((WW => WW.contains(RW)));
  if (wW < 0) return !1;
  const CW = WW.getBoundingClientRect(),
    zR = RW => WW.scrollTop + RW.top - CW.top,
    AW = zR(RW.getBoundingClientRect()) + RW.getBoundingClientRect().height,
    bR = WW.scrollHeight - WW.clientHeight,
    yR = MW.slice(0, wW + 1).map((WW => zR(WW.getBoundingClientRect()))).filter((WW => AW - WW <= CW.height + 1));
  if (0 === yR.length) return !1;
  const NW = yR.filter((WW => WW <= bR + 1)),
    eW = NW.length > 0 ? Math.max(...NW) : Math.min(...yR);
  return eW > bR && (WW.style.paddingBottom = (parseFloat(getComputedStyle(WW).paddingBottom) || 0) + eW - bR + "px"), WW.scrollTop = eW, !0
}

function ub(WW) {
  let {
    keyName: RW,
    placeholder: MW,
    onDone: CW
  } = WW;
  const [zR, bR] = (0, wW.useState)(RW);
  return (0, AW.jsxs)("form", {
    className: "WorldCodeAiKeyRename",
    onSubmit: WW => {
      WW.preventDefault(), CW(zR)
    },
    children: [(0, AW.jsx)("input", {
      className: "WorldCodeAiAddKeyInput",
      "aria-label": "Name for this key",
      value: zR,
      maxLength: 30,
      placeholder: MW,
      autoFocus: !0,
      onChange: WW => {
        bR(WW.target.value)
      },
      onKeyDown: WW => {
        WW.stopPropagation(), "Escape" === WW.key && (WW.preventDefault(), CW(null))
      }
    }), (0, AW.jsx)("button", {
      type: "submit",
      className: "WorldCodeAiLinkButton",
      children: "Save"
    }), (0, AW.jsx)("button", {
      type: "button",
      className: "WorldCodeAiKeyLearnMore",
      onClick: () => {
        CW(null)
      },
      children: "Cancel"
    })]
  })
}

function Ob(WW) {
  let {
    savedKey: RW,
    isInUse: MW,
    onRename: wW,
    onEdit: CW
  } = WW;
  const zR = CA(RW),
    bR = aA(RW.provider, RW.baseUrl, !0),
    yR = function(WW, RW) {
      var MW, wW;
      return "" === WW ? "no key needed" : WW.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === RW ? `key \u2026${WW.slice(-4)}` : `${(null!==(MW=null===(wW=/^[a-zA-Z]+-/.exec(WW))||void 0===wW?void 0:wW[0])&&void 0!==MW?MW:WW.slice(0,4)).slice(0,6)}\u2026${WW.slice(-4)}`
    }(RW.key, RW.provider);
  return (0, AW.jsxs)("span", {
    className: "WorldCodeAiModelGroupName",
    title: RW.baseUrl,
    children: [zR, " ", RW.name && (0, AW.jsxs)("span", {
      className: "WorldCodeAiModelHint",
      children: ["\xb7 ", bR, " "]
    }), "" === RW.key ? (0, AW.jsx)("span", {
      className: "WorldCodeAiModelHint",
      children: yR
    }) : (0, AW.jsx)("code", {
      children: yR
    }), MW && (0, AW.jsxs)(AW.Fragment, {
      children: [" ", (0, AW.jsx)("span", {
        className: "WorldCodeAiInUseTag",
        children: "In use"
      })]
    }), (CW || wW) && (0, AW.jsxs)("span", {
      className: "WorldCodeAiKeyLinks",
      children: [CW && (0, AW.jsx)("button", {
        className: "WorldCodeAiKeyLearnMore",
        "aria-label": `Edit ${zR} key`,
        onClick: CW,
        children: "Edit"
      }), wW && (0, AW.jsx)("button", {
        className: "WorldCodeAiKeyLearnMore",
        "aria-label": `Rename ${zR} key`,
        onClick: wW,
        children: "Rename"
      })]
    })]
  })
}

function nb(WW) {
  var RW, MW, CW, bR;
  let {
    name: yR,
    hint: NW,
    choice: eW,
    selected: BW,
    radioName: tR,
    onSelect: TW,
    onChosen: gR,
    disabledWhy: iR
  } = WW;
  const YW = (0, wW.useRef)(!1),
    JW = `${tR}-${null!==(RW=null===eW||void 0===eW?void 0:eW.keyId)&&void 0!==RW?RW:"botxd"}-${null!==(MW=null===eW||void 0===eW?void 0:eW.modelId)&&void 0!==MW?MW:"botxd"}`.replace(/[^\w-]/g, "_"),
    PW = !!iR;
  return (0, AW.jsxs)("label", {
    className: zR()("WorldCodeAiModelRow", BW && "Selected", PW && "Disabled"),
    "data-key-id": null !== (CW = null === eW || void 0 === eW ? void 0 : eW.keyId) && void 0 !== CW ? CW : "botxd",
    "data-model-id": null !== (bR = null === eW || void 0 === eW ? void 0 : eW.modelId) && void 0 !== bR ? bR : "botxd",
    title: null !== iR && void 0 !== iR ? iR : void 0,
    onPointerDown: () => {
      YW.current = !PW
    },
    children: [(0, AW.jsx)("input", {
      type: "radio",
      name: tR,
      "aria-label": yR,
      "aria-describedby": NW ? JW : void 0,
      checked: BW,
      disabled: PW,
      onChange: TW,
      onClick: () => {
        YW.current && (null === gR || void 0 === gR || gR()), YW.current = !1
      },
      onKeyDown: WW => {
        "Enter" === WW.key && (null === gR || void 0 === gR || gR())
      }
    }), (0, AW.jsx)("span", {
      className: "WorldCodeAiModelName",
      children: yR
    }), NW && (0, AW.jsx)("span", {
      id: JW,
      className: "WorldCodeAiModelHint",
      children: NW
    })]
  })
}

function Gb(WW) {
  let {
    labelledBy: RW,
    onPicked: CW,
    canRename: zR = !1,
    onEdit: bR,
    NRW: yR,
    onRefresh: NW,
    refreshingIds: eW,
    keyNote: BW
  } = WW;
  const {
    keys: tR,
    isSelected: TW,
    select: gR,
    renameKey: iR
  } = BA(), YW = FA();
  (0, wW.useEffect)((() => {
    lA.refresh(), xb()
  }), []);
  const JW = XA(YW),
    [PW, IW] = (0, wW.useState)(null),
    [oW, lW] = (0, wW.useState)(null),
    [FW, fW] = (0, wW.useState)({}),
    [QW] = (0, wW.useState)((() => function(WW) {
      const RW = WW.map(((WW, RW) => {
        var MW;
        return {
          id: WW.id,
          at: null !== (MW = WW.usedAt) && void 0 !== MW ? MW : 0,
          i: RW
        }
      })).sort(((WW, RW) => RW.at - WW.at || RW.i - WW.i));
      return new Set(RW.slice(0, 2).map((WW => {
        let {
          id: RW
        } = WW;
        return RW
      })))
    }(tR))),
    [rR, cR] = (0, wW.useState)(new Set),
    XW = WW => WW.models.some((RW => TW({
      keyId: WW.id,
      modelId: RW.id
    }))),
    jR = WW => {
      const RW = WW.closest(".WorldCodeAiModelGroupHeader");
      lW(null), setTimeout((() => {
        var WW;
        null === RW || void 0 === RW || null === (WW = RW.querySelector(".WorldCodeAiModelRemove")) || void 0 === WW || WW.focus()
      }))
    },
    kR = `${RW}-model`,
    aR = (WW, RW, MW) => {
      var wW;
      return (0, AW.jsx)(nb, {
        name: WW,
        hint: RW,
        choice: MW,
        selected: TW(MW) && !(null === MW && YW.picked && null === JW),
        radioName: kR,
        onSelect: () => {
          gR(MW), lA.unpick()
        },
        onChosen: CW
      }, null !== (wW = null === MW || void 0 === MW ? void 0 : MW.modelId) && void 0 !== wW ? wW : "botxd")
    };
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiModelList",
    role: "radiogroup",
    "aria-labelledby": RW,
    children: [aR("Bot.xd (free)", "Bloxd's own AI.", null), (0, AW.jsx)(nb, {
      name: ib,
      hint: null !== JW && void 0 !== JW ? JW : `Bloxd's better AI. ${YW.status?ab(YW.status):""}`.trim(),
      choice: vy,
      selected: YW.picked && null === JW,
      radioName: kR,
      onSelect: () => {
        var WW, RW;
        IA(null !== (WW = null === (RW = YW.status) || void 0 === RW ? void 0 : RW.provider) && void 0 !== WW ? WW : "ovh") && lA.WM()
      },
      onChosen: () => {
        (async function(WW) {
          var RW;
          if (IA(null !== (RW = null === WW || void 0 === WW ? void 0 : WW.provider) && void 0 !== RW ? RW : "ovh")) return lA.WM(), !0;
          if (Lb) return !1;
          Lb = !0;
          try {
            const [{
              NotificationProvider: WW
            }, {
              WorldCodeAiDeepSeekNotice: RW
            }] = await Promise.all([Promise.resolve().then((() => MW(1166))), MW.e(327).then((() => MW(58610)))]), wW = WW.showPromptPopup({
              title: "superBotXd:deepSeekTitle",
              subtitle: (0, AW.jsx)(RW, {}),
              confirmText: "superBotXd:use",
              cancelText: "general:cancel"
            });
            Hb = wW.tearDownNotification;
            return !0 === await wW.getResult() && (function() {
              try {
                window.localStorage.setItem(PA, "1")
              } catch {}
            }(), lA.WM(), !0)
          } finally {
            Lb = !1, Hb = null
          }
        })(YW.status).then((WW => {
          WW && (null === CW || void 0 === CW || CW())
        }))
      },
      disabledWhy: JW
    }), tR.map((WW => {
      var RW, MW, wW, CW, gR;
      const YW = CA(WW),
        JW = tR.length >= 4 && !XW(WW) && !QW.has(WW.id) && !rR.has(WW.id),
        kR = JW ? null !== (RW = WW.models.find((RW => RW.id === WW.usedModelId))) && void 0 !== RW ? RW : wA(WW.models) : void 0,
        sW = null !== (MW = null === (wW = FW[WW.id]) || void 0 === wW ? void 0 : wW.trim().toLowerCase()) && void 0 !== MW ? MW : "",
        dW = kR ? [kR] : "" === sW ? WW.models : WW.models.filter((RW => RW.name.toLowerCase().includes(sW) || TW({
          keyId: WW.id,
          modelId: RW.id
        })));
      return (0, AW.jsxs)("div", {
        className: "WorldCodeAiModelGroup",
        role: "group",
        "aria-label": YW,
        "data-key-id": WW.id,
        children: [(0, AW.jsxs)("div", {
          className: "WorldCodeAiModelGroupHeader",
          children: [PW === WW.id ? (0, AW.jsx)(ub, {
            keyName: null !== (CW = WW.name) && void 0 !== CW ? CW : "",
            placeholder: aA(WW.provider, WW.baseUrl),
            onDone: RW => {
              null !== RW && iR(WW.id, RW), IW(null)
            }
          }) : (0, AW.jsx)(Ob, {
            savedKey: WW,
            isInUse: XW(WW),
            onEdit: bR ? () => {
              bR(WW)
            } : void 0,
            onRename: zR ? () => {
              IW(WW.id)
            } : void 0
          }), NW && oW !== WW.id && (0, AW.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRefresh",
            "aria-label": `Check ${YW} for new models`,
            disabled: null === eW || void 0 === eW ? void 0 : eW.has(WW.id),
            onClick: () => {
              NW(WW)
            },
            children: null !== eW && void 0 !== eW && eW.has(WW.id) ? "Checking\u2026" : "Check for new models"
          }), yR && oW !== WW.id && (0, AW.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
            "aria-label": `Remove ${YW} key`,
            onClick: () => {
              lW(WW.id)
            },
            children: "Remove"
          }), yR && oW === WW.id && (0, AW.jsxs)("span", {
            className: "WorldCodeAiKeyConfirm",
            role: "group",
            "aria-label": `Remove ${YW} key?`,
            onKeyDown: WW => {
              "Escape" === WW.key && (WW.stopPropagation(), WW.preventDefault(), jR(WW.currentTarget))
            },
            children: ["Remove key?", (0, AW.jsx)("button", {
              className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
              "aria-label": `Yes, remove ${YW} key`,
              onClick: () => {
                lW(null), yR(WW)
              },
              children: "Yes"
            }), (0, AW.jsx)("button", {
              className: "WorldCodeAiLinkButton",
              "aria-label": `No, keep ${YW} key`,
              autoFocus: !0,
              onClick: WW => {
                jR(WW.currentTarget)
              },
              children: "No"
            })]
          })]
        }), (null === BW || void 0 === BW ? void 0 : BW.keyId) === WW.id && (0, AW.jsx)("p", {
          className: "WorldCodeAiAiSettingsNote",
          role: "status",
          children: BW.text
        }), !JW && WW.models.length > 12 && (0, AW.jsx)("input", {
          className: "WorldCodeAiAddKeyInput WorldCodeAiModelFilter",
          "aria-label": `Find a model from ${YW}`,
          placeholder: `Find a model (${WW.models.length})`,
          value: null !== (gR = FW[WW.id]) && void 0 !== gR ? gR : "",
          onKeyDown: WW => {
            WW.stopPropagation()
          },
          onChange: RW => {
            const MW = RW.target.value;
            fW((RW => ({
              ...RW,
              [WW.id]: MW
            })))
          }
        }), dW.map((RW => aR(RW.name, RW.tier ? qA[RW.tier] : "", {
          keyId: WW.id,
          modelId: RW.id
        }))), JW && WW.models.length > 1 && (0, AW.jsxs)("button", {
          className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
          "aria-label": `Show all ${YW} models`,
          onClick: RW => {
            const MW = RW.currentTarget.closest(".WorldCodeAiModelGroup");
            cR((RW => new Set(RW).add(WW.id))), setTimeout((() => {
              var WW;
              null === MW || void 0 === MW || null === (WW = MW.querySelector("input")) || void 0 === WW || WW.focus()
            }))
          },
          children: ["Show all ", WW.models.length, " models"]
        })]
      }, WW.id)
    }))]
  })
}
let Lb = !1,
  Hb = null;

function Db() {
  const {
    remember: WW,
    setRemember: RW
  } = BA();
  return (0, AW.jsxs)("label", {
    className: "WorldCodeAiRememberKeys",
    children: [(0, AW.jsx)("input", {
      type: "checkbox",
      checked: WW,
      onChange: WW => {
        RW(WW.target.checked)
      }
    }), (0, AW.jsxs)("span", {
      children: ["Remember my keys in this browser", (0, AW.jsx)("span", {
        className: "WorldCodeAiAiSettingsNote",
        children: WW ? "On: saved only in this browser, not synced, for all your keys. Not for shared computers." : "Off: you'll paste your keys again next time. Best on shared computers."
      })]
    })]
  })
}

function qy(WW) {
  let {
    allowEdits: RW,
    onAllowEditsChange: MW,
    onAddKey: CW,
    onEditKey: zR
  } = WW;
  const {
    keys: bR,
    removeKey: yR
  } = BA(), [NW, eW] = (0, wW.useState)(null), [BW, tR] = (0, wW.useState)(!1), [TW, gR] = (0, wW.useState)(!1), iR = (0, wW.useRef)(null);
  (0, wW.useEffect)((() => {
    var WW, RW;
    (NW || TW) && (null === (WW = iR.current) || void 0 === WW || WW.scrollIntoView({
      block: "nearest"
    }), null === (RW = iR.current) || void 0 === RW || RW.focus({
      preventScroll: !0
    }))
  }), [NW, TW]);
  const YW = (0, wW.useRef)(null),
    JW = () => {
      tR(!1), setTimeout((() => {
        var WW;
        null === (WW = YW.current) || void 0 === WW || WW.focus()
      }))
    },
    [PW, IW] = (0, wW.useState)(new Set),
    [oW, lW] = (0, wW.useState)(null);
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiAiSettings",
    children: [MW && (0, AW.jsxs)("div", {
      className: "WorldCodeAiAiSettingsSection",
      children: [(0, AW.jsx)(xy, {
        allow: RW,
        onChange: WW => {
          eW(null), MW(WW)
        }
      }), (0, AW.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote",
        children: RW ? "On: the AI changes this game's code right away, without asking; Undo is under each change. It can't touch other games or your account." : "Off: the AI shows each change to this game's code first, and you press Apply."
      })]
    }), (0, AW.jsxs)("div", {
      className: "WorldCodeAiAiSettingsSection",
      children: [(0, AW.jsxs)("div", {
        className: "WorldCodeAiAiSettingsHeading",
        children: [(0, AW.jsx)("h3", {
          id: "WorldCodeAiModelTitle",
          className: "WorldCodeAiAiSettingsTitle",
          children: "AI model"
        }), (0, AW.jsxs)("button", {
          className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
          onClick: CW,
          children: [(0, AW.jsx)("span", {
            "aria-hidden": "true",
            children: "+ "
          }), "Add API key"]
        })]
      }), 0 === bR.length && (0, AW.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote",
        children: "Use a stronger AI with your own key."
      }), (0, AW.jsx)(Db, {}), bR.length > 0 && (0, AW.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote WorldCodeAiForgetAll",
        children: BW ? (0, AW.jsxs)("span", {
          className: "WorldCodeAiKeyConfirm",
          role: "group",
          "aria-label": "Forget all keys?",
          onKeyDown: WW => {
            "Escape" === WW.key && (WW.stopPropagation(), WW.preventDefault(), JW())
          },
          children: [1 === bR.length ? "Forget your key" : `Forget all ${bR.length} keys`, " in this browser?", (0, AW.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
            onClick: () => {
              eA.removeAll(), tR(!1), eW(null), gR(!0)
            },
            children: "Yes"
          }), (0, AW.jsx)("button", {
            className: "WorldCodeAiLinkButton",
            autoFocus: !0,
            onClick: JW,
            children: "No"
          })]
        }) : (0, AW.jsx)("button", {
          ref: YW,
          className: "WorldCodeAiKeyLearnMore",
          onClick: () => {
            tR(!0)
          },
          children: "Forget all keys"
        })
      }), 0 === bR.length && TW && (0, AW.jsx)("p", {
        ref: iR,
        className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
        tabIndex: -1,
        children: "All keys forgotten in this browser. Bot.xd answers now. To stop a key working everywhere, delete it on its company's website."
      }), NW && (0, AW.jsxs)("p", {
        ref: iR,
        className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
        tabIndex: -1,
        children: [NW.name, " removed.", NW.wasInUse && " Bot.xd answers now.", NW.keyPage && (0, AW.jsxs)(AW.Fragment, {
          children: [" ", "To stop it working everywhere, delete it on", " ", (0, AW.jsxs)("a", {
            href: NW.keyPage,
            target: "_blank",
            rel: "noreferrer noopener",
            children: [NW.label, "'s website"]
          }), "."]
        }), " ", (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiModelUndo",
          onClick: () => {
            NW.undo(), eW(null)
          },
          children: "Undo"
        })]
      }), (0, AW.jsx)(Gb, {
        labelledBy: "WorldCodeAiModelTitle",
        onPicked: () => {
          eW(null), lW(null)
        },
        canRename: !0,
        onEdit: zR,
        refreshingIds: PW,
        keyNote: oW,
        onRefresh: WW => {
          (async WW => {
            const RW = aA(WW.provider, WW.baseUrl, !0);
            IW((RW => new Set(RW).add(WW.id))), lW(null);
            try {
              const MW = await tb({
                provider: WW.provider,
                key: WW.key,
                baseUrl: WW.baseUrl
              });
              0 === MW.length ? lW({
                keyId: WW.id,
                text: `${RW} listed no models, so your models stay as they were.`
              }) : eA.refreshModels(WW.id, MW, {
                key: WW.key,
                baseUrl: WW.baseUrl
              }) && lW({
                keyId: WW.id,
                text: `${RW}'s models are up to date.`
              })
            } catch (MW) {
              lW({
                keyId: WW.id,
                text: pz(MW instanceof sz ? MW.problem : "failed", WW.provider)
              })
            }
            IW((RW => {
              const MW = new Set(RW);
              return MW.delete(WW.id), MW
            }))
          })(WW)
        },
        NRW: WW => {
          var RW;
          const MW = (null === (RW = eA.activeKey()) || void 0 === RW ? void 0 : RW.id) === WW.id,
            wW = yR(WW.id);
          eW({
            name: CA(WW, !0),
            label: aA(WW.provider, WW.baseUrl, !0),
            keyPage: Qz[WW.provider].keyPage,
            wasInUse: MW,
            undo: wW
          })
        }
      })]
    })]
  })
}
const Zb = ["anthropic", "openai", "gemini", "openrouter"];

function Sb(WW) {
  let {
    provider: RW,
    children: MW
  } = WW;
  return (0, AW.jsx)("a", {
    href: Qz[RW].keyPage,
    target: "_blank",
    rel: "noreferrer noopener",
    children: MW
  })
}

function Wy() {
  return (0, AW.jsxs)(AW.Fragment, {
    children: [Zb.map(((WW, RW) => {
      const MW = 0 === RW ? "" : RW === Zb.length - 1 ? " or " : ", ";
      return (0, AW.jsxs)("span", {
        children: [MW, (0, AW.jsx)(Sb, {
          provider: WW,
          children: Qz[WW].shortName
        })]
      }, WW)
    })), "'s website"]
  })
}

function Ry(WW) {
  var RW;
  let {
    provider: MW
  } = WW;
  const [CW, zR] = (0, wW.useState)(!1), bR = (0, wW.useRef)(null);
  if ((0, wW.useEffect)((() => {
      if (CW) {
        var WW, RW, MW;
        const wW = null === (WW = bR.current) || void 0 === WW || null === (RW = WW.closest("form")) || void 0 === RW ? void 0 : RW.querySelector(".WorldCodeAiAddKeyActions");
        null === (MW = null !== wW && void 0 !== wW ? wW : bR.current) || void 0 === MW || MW.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        })
      }
    }), [CW]), "custom" === MW) return (0, AW.jsx)("div", {
    className: "WorldCodeAiKeyExplainer",
    children: (0, AW.jsx)("p", {
      className: "WorldCodeAiAiSettingsNote",
      children: "Paste the key for that server, or leave it empty if it doesn't need one. It goes only to that server, never to Bloxd."
    })
  });
  const yR = MW ? Qz[MW] : null;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiKeyExplainer",
    children: [(0, AW.jsxs)("ul", {
      ref: bR,
      id: "WorldCodeAiKeyExplainerLines",
      className: "WorldCodeAiKeyExplainerLines",
      children: [(0, AW.jsx)("li", {
        children: yR ? `An API key works like a password for ${yR.shortName}'s AI (it isn't your ${yR.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
      }), (0, AW.jsxs)("li", {
        children: ["You make it on ", yR ? `${yR.shortName}'s website` : (0, AW.jsx)(Wy, {}), ", and see how much you've used or delete it there."]
      }), CW && (0, AW.jsxs)("li", {
        children: ["Your key stays in this browser and only goes to ", null !== (RW = null === yR || void 0 === yR ? void 0 : yR.shortName) && void 0 !== RW ? RW : "that company", ", never to Bloxd."]
      }), (0, AW.jsx)("li", {
        className: "WorldCodeAiKeyExplainerMore",
        children: (0, AW.jsx)("button", {
          type: "button",
          className: "WorldCodeAiKeyLearnMore",
          "aria-expanded": CW,
          "aria-controls": "WorldCodeAiKeyExplainerLines",
          onClick: () => {
            zR(!CW)
          },
          children: CW ? "Less about keys" : "More about keys"
        })
      })]
    }), yR && (0, AW.jsxs)("a", {
      className: "WorldCodeAiKeyPageLink",
      href: yR.keyPage,
      target: "_blank",
      rel: "noreferrer noopener",
      children: ["Get a key on ", yR.shortName, "'s website ", (0, AW.jsx)("span", {
        "aria-hidden": "true",
        children: "\u2197"
      })]
    })]
  })
}

function My() {
  const [WW, RW] = (0, wW.useState)(!1);
  return (0, AW.jsxs)("span", {
    className: "WorldCodeAiAiSettingsNote",
    children: ["Any server that works like OpenAI's, such as LM Studio or Ollama.", " ", (0, AW.jsx)("button", {
      type: "button",
      className: "WorldCodeAiKeyLearnMore",
      "aria-expanded": WW,
      onClick: () => {
        RW(!WW)
      },
      children: WW ? "Hide tips" : "Server tips"
    }), WW && (0, AW.jsx)("span", {
      className: "WorldCodeAiServerTips",
      children: "Use https://, or http:// for one on this computer, like http://localhost:1234/v1. It must allow web pages to use it: in LM Studio turn on CORS; for Ollama see its help."
    })]
  })
}

function wy(WW) {
  WW.stopPropagation()
}

function Cy(WW) {
  var RW, MW, CW, zR, bR;
  let {
    editing: yR,
    onAdded: NW,
    onOpenSettings: eW
  } = WW;
  const {
    remember: BW
  } = BA(), [tR, TW] = (0, wW.useState)(null !== (RW = null === yR || void 0 === yR ? void 0 : yR.provider) && void 0 !== RW ? RW : null), [gR, iR] = (0, wW.useState)(!!yR), [YW, JW] = (0, wW.useState)(""), PW = null !== (MW = null === yR || void 0 === yR ? void 0 : yR.key) && void 0 !== MW ? MW : "", [IW, oW] = (0, wW.useState)(!1), [lW, FW] = (0, wW.useState)(null !== (CW = null === yR || void 0 === yR ? void 0 : yR.baseUrl) && void 0 !== CW ? CW : ""), fW = WW => {
    var RW, MW;
    return WW === (null === yR || void 0 === yR ? void 0 : yR.provider) && ("custom" !== WW || (null !== (RW = kA(lW)) && void 0 !== RW ? RW : "") === (null !== (MW = yR.baseUrl) && void 0 !== MW ? MW : ""))
  }, QW = "" !== PW && fW(tR), rR = function(WW) {
    let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xz(YW);
    return "" === RW && "" !== PW && fW(WW) ? PW : RW
  }, [cR, XW] = (0, wW.useState)(""), [jR, kR] = (0, wW.useState)(null !== (zR = null === yR || void 0 === yR ? void 0 : yR.name) && void 0 !== zR ? zR : ""), [aR, sW] = (0, wW.useState)(!1), [dW, pW] = (0, wW.useState)(null), [hW, UW] = (0, wW.useState)(""), [EW, VW] = (0, wW.useState)(!1), [mR, xR] = (0, wW.useState)(null), [vR, KW] = (0, wW.useState)(null), uW = "custom" === tR && "" === rR(tR), OW = (0, wW.useRef)(null), nW = (0, wW.useRef)(null), GW = (0, wW.useRef)(null);
  (0, wW.useEffect)((() => {
    var WW, RW;
    dW && (null === (WW = nW.current) || void 0 === WW || WW.scrollIntoView({
      block: "start"
    }), null === (RW = GW.current) || void 0 === RW || RW.scrollIntoView({
      block: "nearest"
    }))
  }), [dW]), (0, wW.useEffect)((() => () => {
    var WW;
    null === (WW = OW.current) || void 0 === WW || WW.abort()
  }), []), (0, wW.useEffect)((() => {
    var WW;
    mR && (null === (WW = GW.current) || void 0 === WW || WW.scrollIntoView({
      block: "nearest"
    }))
  }), [mR]);
  const LW = () => {
      var WW;
      null === (WW = OW.current) || void 0 === WW || WW.abort(), VW(!1), pW(null), xR(null), KW(null)
    },
    HW = null === dW || void 0 === dW ? void 0 : dW.find((WW => WW.id === hW));
  return (0, AW.jsxs)("form", {
    className: "WorldCodeAiAddKey",
    onSubmit: WW => {
      WW.preventDefault(), dW ? (() => {
        var WW;
        if (!tR || !dW) return;
        const RW = eA.addKey({
          provider: tR,
          key: rR(tR),
          baseUrl: "custom" === tR && null !== (WW = kA(lW)) && void 0 !== WW ? WW : void 0,
          models: dW
        }, hW, null === yR || void 0 === yR ? void 0 : yR.id);
        ("" !== jR.trim() || yR) && eA.renameKey(RW, jR), NW()
      })() : (async () => {
        const RW = Xz(YW);
        JW(RW), KW(null);
        const MW = null !== tR && void 0 !== tR ? tR : jA(RW),
          wW = rR(MW, RW);
        if ("" === wW && "custom" !== MW) return void xR("Paste your key first.");
        if (!MW) return void xR("Pick the company your key is from.");
        const CW = "custom" === MW ? kA(lW) : null;
        if ("custom" === MW && null === CW) return void xR("That address doesn't look right. It should start with https://");
        if (aR && "" === cR.trim()) return void xR("Type the name of the model to use.");
        TW(MW), VW(!0), xR(null);
        const zR = new AbortController;
        OW.current = zR;
        try {
          var AW, bR;
          const WW = await tb({
            provider: MW,
            key: wW,
            baseUrl: null !== CW && void 0 !== CW ? CW : void 0,
            modelName: aR ? cR : void 0
          }, zR.signal);
          if (VW(!1), 0 === WW.length) return sW(!0), void xR("custom" === MW ? "This address doesn't list its models. Type the name of the model to use." : "Type the name of the model to use.");
          pW(WW);
          const RW = eA.getState().selected,
            NW = yR && (null === RW || void 0 === RW ? void 0 : RW.keyId) === yR.id ? WW.find((WW => WW.id === RW.modelId)) : void 0;
          UW(null !== (AW = null === (bR = null !== NW && void 0 !== NW ? NW : wA(WW)) || void 0 === bR ? void 0 : bR.id) && void 0 !== AW ? AW : "")
        } catch (WW) {
          if (zR.signal.aborted) return;
          VW(!1);
          const CW = WW instanceof sz ? WW.problem : "failed";
          if (KW(WW instanceof sz && WW.detail ? dz(WW.detail, wW) : null), "badKey" === CW && "" === wW) return void xR("This address needs a key.");
          const AW = "badKey" !== CW || gR ? "" : ` If it isn't from ${Qz[MW].shortName}, pick the company it's from.`;
          xR(`${pz(CW,MW)}${AW}`)
        }
      })()
    },
    children: [(0, AW.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, AW.jsx)("span", {
        children: "Company"
      }), (0, AW.jsxs)("select", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyCompany",
        value: null !== tR && void 0 !== tR ? tR : "",
        onChange: WW => {
          TW(WW.target.value), iR(!0), sW(!1), LW()
        },
        onKeyDown: wy,
        children: [null === tR && (0, AW.jsx)("option", {
          value: "",
          disabled: !0,
          children: "Pick one, or paste your key below"
        }), rA.map((WW => (0, AW.jsx)("option", {
          value: WW,
          children: Qz[WW].name
        }, WW)))]
      })]
    }), "custom" === tR && (0, AW.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, AW.jsx)("span", {
        children: "Server address"
      }), (0, AW.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyEndpoint",
        value: lW,
        placeholder: "https://ai.example.com/v1",
        autoComplete: "off",
        spellCheck: !1,
        onChange: WW => {
          FW(WW.target.value), sW(!1), LW()
        },
        onKeyDown: wy
      }), (!yR || lW !== (null !== (bR = yR.baseUrl) && void 0 !== bR ? bR : "")) && (0, AW.jsx)(My, {})]
    }), (0, AW.jsxs)("div", {
      className: "WorldCodeAiAddKeyField",
      children: [QW && (0, AW.jsxs)("span", {
        className: "WorldCodeAiAddKeySavedKey",
        children: ["Key ends ", (0, AW.jsxs)("code", {
          children: ["\u2026", PW.slice(-4)]
        })]
      }), (0, AW.jsx)("label", {
        htmlFor: "WorldCodeAiAddKeyKey",
        children: QW ? "Paste a new key to replace it (optional)" : "Your key"
      }), (0, AW.jsxs)("span", {
        className: "WorldCodeAiAddKeyPaste",
        children: [(0, AW.jsx)("input", {
          id: "WorldCodeAiAddKeyKey",
          className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyKey",
          type: IW ? "text" : "password",
          value: YW,
          placeholder: QW ? "Leave empty to keep it" : "custom" === tR ? "Paste the key, or leave empty" : "Paste the key here",
          autoComplete: "off",
          spellCheck: !1,
          onChange: WW => {
            JW(WW.target.value), gR || TW(jA(Xz(WW.target.value))), LW()
          },
          onKeyDown: wy
        }), (0, AW.jsx)("button", {
          type: "button",
          className: "WorldCodeAiSecondaryButton",
          onClick: () => {
            oW(!IW)
          },
          children: IW ? "Hide" : "Show"
        })]
      }), (0, AW.jsx)(Ry, {
        provider: tR
      })]
    }), !yR && (0, AW.jsxs)("p", {
      className: "WorldCodeAiAiSettingsNote WorldCodeAiAddKeyRemember",
      children: [BW ? "Your keys are remembered in this browser. Change it in " : "Your keys are kept until you close this tab. To remember them, see ", (0, AW.jsx)("button", {
        type: "button",
        className: "WorldCodeAiKeyLearnMore",
        onClick: eW,
        children: "AI settings"
      }), "."]
    }), aR && (0, AW.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, AW.jsx)("span", {
        children: "Model name"
      }), (0, AW.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyModel",
        value: cR,
        placeholder: "llama-3.3-70b-versatile",
        autoComplete: "off",
        spellCheck: !1,
        onChange: WW => {
          XW(WW.target.value), LW()
        },
        onKeyDown: wy
      })]
    }), dW && (0, AW.jsxs)("div", {
      ref: nW,
      className: "WorldCodeAiModelList WorldCodeAiAddKeyModels",
      role: "radiogroup",
      "aria-labelledby": "WorldCodeAiAddKeyModelsTitle",
      children: [(0, AW.jsxs)("p", {
        id: "WorldCodeAiAddKeyModelsTitle",
        className: "WorldCodeAiAddKeyWorks",
        children: ["" === rR(tR) ? "It works." : "Your key works.", " Pick a model:"]
      }), dW.map((WW => (0, AW.jsx)(nb, {
        name: WW.name,
        hint: WW.tier ? qA[WW.tier] : "",
        choice: {
          keyId: null !== tR && void 0 !== tR ? tR : "",
          modelId: WW.id
        },
        selected: WW.id === hW,
        radioName: "WorldCodeAiAddKeyModelPick",
        onSelect: () => {
          UW(WW.id)
        }
      }, WW.id))), (0, AW.jsx)("button", {
        type: "button",
        className: "WorldCodeAiKeyLearnMore",
        onClick: () => {
          sW(!0), LW()
        },
        children: "Type a model name yourself"
      })]
    }), dW && (0, AW.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, AW.jsx)("span", {
        children: "Name it (optional)"
      }), (0, AW.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyName",
        value: jR,
        maxLength: 30,
        placeholder: tR && "custom" !== tR ? `Like My ${Qz[tR].shortName}` : "Like Home server",
        autoComplete: "off",
        onChange: WW => {
          kR(WW.target.value)
        },
        onKeyDown: wy
      })]
    }), (0, AW.jsxs)("div", {
      ref: GW,
      className: "WorldCodeAiAddKeyActions",
      children: [mR && (0, AW.jsx)("p", {
        className: "WorldCodeAiAddKeyError",
        role: "alert",
        children: mR
      }), mR && vR && (0, AW.jsx)(ay, {
        detail: vR,
        onOpen: () => {
          var WW, RW;
          null === (WW = GW.current) || void 0 === WW || null === (RW = WW.querySelector(".WorldCodeAiAddKeySave")) || void 0 === RW || RW.scrollIntoView({
            block: "nearest"
          })
        }
      }), (0, AW.jsx)("button", {
        type: "submit",
        className: "WorldCodeAiPrimaryButton WorldCodeAiAddKeySave",
        disabled: EW,
        children: EW ? uW ? "Testing the connection\u2026" : "Testing your key\u2026" : HW ? `Save and use ${HW.name}` : uW ? "Test connection" : "Test key"
      })]
    })]
  })
}
var zN = MW(1027),
  Ay = MW(35072),
  bN = MW(35067);

function yN(WW) {
  let {
    step: RW,
    placement: MW = "left",
    onPrevious: wW,
    children: CW
  } = WW;
  const {
    t: zR
  } = (0, zN.C)();
  return (0, AW.jsx)(bN.d, {
    tutorial: "aiHelperOverview",
    step: RW,
    text: zR(`codeEditorAiTutorial:${RW}`),
    placement: MW,
    onPrevious: wW,
    children: CW
  })
}

function Ny(WW, RW) {
  if (WW.scrollHeight <= WW.clientHeight + 1) ey(WW);
  else {
    if (!Kb(WW, RW)) {
      const MW = RW.getBoundingClientRect().bottom - WW.getBoundingClientRect().bottom;
      MW > 0 && (WW.scrollTop += MW),
        function(WW, RW) {
          const MW = WW.getBoundingClientRect(),
            wW = Math.max(MW.top, ...Array.from(WW.querySelectorAll(".WorldCodeAiModelGroupHeader"), (WW => {
              const RW = WW.getBoundingClientRect();
              return RW.top <= MW.top + 1 ? RW.bottom : MW.top
            })));
          if (wW <= MW.top) return;
          const CW = RW.closest(".WorldCodeAiModelGroup"),
            zR = CW && parseFloat(getComputedStyle(CW).rowGap) || 6,
            AW = Array.from(WW.querySelectorAll(".WorldCodeAiModelRow, .WorldCodeAiModelUnfold")).find((WW => {
              const RW = WW.getBoundingClientRect();
              return RW.top < wW + zR - 1 && RW.bottom > wW - zR
            }));
          if (!AW || AW === RW) return;
          const bR = WW.scrollTop;
          WW.scrollTop -= wW + zR - AW.getBoundingClientRect().top, RW.getBoundingClientRect().bottom > MW.bottom && (WW.scrollTop = bR, WW.scrollTop += Math.max(0, AW.getBoundingClientRect().bottom - wW))
        }(WW, RW)
    }
    ey(WW)
  }
}

function ey(WW) {
  const RW = WW.getBoundingClientRect().top;
  for (const MW of Array.from(WW.querySelectorAll(".WorldCodeAiModelGroup"))) {
    const WW = MW.querySelector(".WorldCodeAiModelGroupHeader");
    if (!WW) continue;
    const wW = RW + WW.offsetHeight,
      CW = Array.from(MW.querySelectorAll(".WorldCodeAiModelRow")).some((WW => WW.getBoundingClientRect().bottom > wW + 2));
    WW.classList.toggle("Unpinned", !CW)
  }
}

function By(WW) {
  const RW = CA(WW, !0);
  return WW.model.name.toLowerCase().startsWith(RW.toLowerCase()) ? WW.model.name : `${RW} \xb7 ${WW.model.name}`
}

function tN(WW) {
  let {
    onAddKey: RW,
    editsOn: MW,
    freeOnce: CW = !1,
    onFreeOnce: bR,
    children: yR
  } = WW;
  const {
    active: NW,
    select: eW
  } = BA(), BW = jb(FA());
  (0, wW.useEffect)((() => {
    lA.refresh(), xb()
  }), []);
  const [tR, TW] = (0, wW.useState)(!1), gR = (0, wW.useRef)(null), iR = (0, wW.useRef)(null), YW = (0, wW.useRef)(null), JW = () => {
    var WW;
    TW(!1), null === (WW = iR.current) || void 0 === WW || WW.focus()
  };
  (0, wW.useEffect)((() => {
    var WW, RW;
    if (!tR) return;
    const MW = null === (WW = YW.current) || void 0 === WW ? void 0 : WW.querySelector("input:checked");
    null === MW || void 0 === MW || MW.focus({
      preventScroll: !0
    });
    const wW = null === (RW = YW.current) || void 0 === RW ? void 0 : RW.querySelector(".WorldCodeAiModelMenuList"),
      CW = null === MW || void 0 === MW ? void 0 : MW.closest(".WorldCodeAiModelRow");
    wW && CW && Ny(wW, CW);
    const zR = () => {
      wW && ey(wW)
    };
    null === wW || void 0 === wW || wW.addEventListener("scroll", zR, {
      passive: !0
    });
    const AW = WW => {
        var RW;
        null !== (RW = gR.current) && void 0 !== RW && RW.contains(WW.target) || TW(!1)
      },
      bR = WW => {
        "Escape" === WW.key && (WW.stopPropagation(), WW.preventDefault(), Hb && (Hb(), 1) || JW())
      };
    return document.addEventListener("pointerdown", AW), document.addEventListener("keydown", bR, !0), () => {
      null === wW || void 0 === wW || wW.removeEventListener("scroll", zR), document.removeEventListener("pointerdown", AW), document.removeEventListener("keydown", bR, !0)
    }
  }), [tR]);
  const PW = CW && null !== NW,
    IW = PW ? "Bot.xd (free) \xb7 once" : NW ? By(NW) : BW ? ib : "Bot.xd (free)";
  return (0, AW.jsxs)("div", {
    ref: gR,
    className: "WorldCodeAiModelChipRow",
    onBlur: WW => {
      var RW;
      !tR || !WW.relatedTarget || null !== (RW = gR.current) && void 0 !== RW && RW.contains(WW.relatedTarget) || TW(!1)
    },
    children: [(0, AW.jsxs)("button", {
      ref: iR,
      className: zR()("WorldCodeAiModelChip", tR && "Open"),
      "aria-expanded": tR,
      "aria-label": `AI model: ${IW}`,
      title: "Change AI model",
      onClick: () => {
        TW(!tR)
      },
      children: [NW && !PW && "" !== NW.key && (0, AW.jsx)(ky, {}), (0, AW.jsx)("span", {
        className: "WorldCodeAiModelChipName",
        children: IW
      }), (0, AW.jsx)("span", {
        className: "WorldCodeAiModelChipCaret",
        "aria-hidden": "true",
        children: "\u25be"
      })]
    }), null !== MW && (0, AW.jsx)(yN, {
      step: "aiEdits",
      placement: "top",
      children: (0, AW.jsx)("span", {
        className: zR()("WorldCodeAiEditsTag", !MW && "WorldCodeAiEditsTag-off"),
        title: `Allow AI to make edits to my code is ${MW?"on":"off"}, in AI settings`,
        children: MW ? "Edits on" : "Edits off"
      })
    }), (0, AW.jsx)("span", {
      className: "WorldCodeAiModelChipStatus",
      children: yR
    }), tR && (0, AW.jsxs)("div", {
      ref: YW,
      className: "WorldCodeAiModelMenu",
      role: "dialog",
      "aria-labelledby": "WorldCodeAiModelMenuTitle",
      children: [(0, AW.jsx)("h3", {
        id: "WorldCodeAiModelMenuTitle",
        className: "WorldCodeAiAiSettingsTitle",
        children: "AI model"
      }), (0, AW.jsx)("div", {
        className: "WorldCodeAiModelMenuList",
        children: (0, AW.jsx)(Gb, {
          labelledBy: "WorldCodeAiModelMenuTitle",
          onPicked: () => {
            null === bR || void 0 === bR || bR(!1), JW()
          }
        })
      }), (0, AW.jsxs)("div", {
        className: "WorldCodeAiModelMenuActions",
        children: [(0, AW.jsxs)("button", {
          className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
          onClick: () => {
            TW(!1), RW()
          },
          children: [(0, AW.jsx)("span", {
            "aria-hidden": "true",
            children: "+ "
          }), "Add API key"]
        }), NW && (0, AW.jsxs)("span", {
          className: "WorldCodeAiModelMenuBotxd",
          children: [bR && (PW ? (0, AW.jsxs)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              bR(!1), JW()
            },
            children: ["Back to ", NW.model.name]
          }) : (0, AW.jsx)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              bR(!0), JW()
            },
            children: "Ask Bot.xd once"
          })), (0, AW.jsx)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              eW(null), JW()
            },
            children: "Use Bot.xd from now on"
          })]
        })]
      })]
    })]
  })
}
var Ty = MW(50);
const gN = "kv";

function iN(WW) {
  return new Promise(((RW, MW) => {
    WW.oncomplete = () => {
      RW()
    }, WW.onerror = () => {
      var RW;
      MW(null !== (RW = WW.error) && void 0 !== RW ? RW : new Error("IndexedDB transaction failed"))
    }, WW.onabort = () => {
      var RW;
      MW(null !== (RW = WW.error) && void 0 !== RW ? RW : new Error("IndexedDB transaction aborted"))
    }
  }))
}
var Yy = MW(35085);
const Jy = (0, wW.memo)((function(WW) {
  let {
    change: RW,
    marked: MW
  } = WW;
  const CW = (0, wW.useMemo)((() => dw(RW.before, RW.after)), [RW]),
    bR = [];
  for (let wW = 0; wW < CW.length; wW++) {
    if ("same" !== CW[wW].kind) {
      bR.push(CW[wW]);
      continue
    }
    let WW = wW;
    for (; WW + 1 < CW.length && "same" === CW[WW + 1].kind;) WW++;
    const RW = CW.slice(wW, WW + 1),
      MW = 0 === wW ? 0 : 2,
      zR = WW === CW.length - 1 ? 0 : 2;
    RW.length > MW + zR + 1 ? bR.push(...RW.slice(0, MW), {
      kind: "fold",
      count: RW.length - MW - zR
    }, ...RW.slice(RW.length - zR)) : bR.push(...RW), wW = WW
  }
  return (0, AW.jsx)("pre", {
    className: "WorldCodeAiDiff",
    children: bR.map(((WW, RW) => {
      if ("fold" === WW.kind) return (0, AW.jsxs)("div", {
        className: "WorldCodeAiDiffFold",
        children: ["\u22ef ", WW.count, " unchanged lines"]
      }, RW);
      const wW = "added" === WW.kind ? function(WW, RW) {
          if (RW) return WW.includes(`"${RW}"`) ? `"${RW}"` : WW.includes(RW) ? RW : void 0
        }(WW.text, MW) : void 0,
        CW = wW ? WW.text.indexOf(wW) : -1;
      return (0, AW.jsxs)("div", {
        className: zR()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${WW.kind}`, wW && "WorldCodeAiDiff-marked"),
        children: [(0, AW.jsx)("span", {
          className: "WorldCodeAiDiffMark",
          children: "added" === WW.kind ? "+" : "removed" === WW.kind ? "\u2212" : " "
        }), (0, AW.jsx)("span", {
          className: "WorldCodeAiDiffText",
          children: wW ? (0, AW.jsxs)(AW.Fragment, {
            children: [WW.text.slice(0, CW), (0, AW.jsx)("mark", {
              children: wW
            }), WW.text.slice(CW + wW.length)]
          }) : WW.text || " "
        })]
      }, RW)
    }))
  })
}));

function Py(WW) {
  var RW, MW;
  if ("undefined" === typeof BroadcastChannel) return;
  const wW = new BroadcastChannel(WW);
  return null === (RW = (MW = wW).unref) || void 0 === RW || RW.call(MW), {
    post: WW => {
      wW.postMessage(WW)
    },
    listen: WW => {
      const RW = RW => {
        "string" === typeof RW.data && WW(RW.data)
      };
      return wW.addEventListener("message", RW), () => {
        wW.removeEventListener("message", RW)
      }
    }
  }
}

function Iy(WW) {
  return Array.isArray(WW) && WW.every((WW => {
    if ("object" !== typeof WW || null === WW || !("id" in WW) || !("at" in WW) || !("label" in WW) || !("files" in WW)) return !1;
    const RW = WW.files;
    return "object" === typeof RW && null !== RW && Object.values(RW).every((WW => "string" === typeof WW))
  }))
}

function oy(WW, RW) {
  return RW ? function(WW, RW) {
    if (!RW) return [...WW];
    const MW = new Map;
    for (const wW of [...RW, ...WW]) MW.set(wW.id, wW);
    return [...MW.values()].sort(((WW, RW) => WW.at - RW.at || WW.id - RW.id)).slice(-30)
  }(RW, WW) : [...WW]
}

function ly(WW, RW) {
  let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const wW = new Date(WW).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      ...MW ? {
        second: "2-digit"
      } : {}
    }).toLowerCase(),
    CW = WW => new Date(WW).toDateString();
  return CW(WW) === CW(RW) ? wW : CW(WW) === CW(RW - 864e5) ? `yesterday ${wW}` : function(WW, RW) {
    const MW = Math.floor((RW - WW) / 6e4);
    if (MW < 1) return "just now";
    if (MW < 60) return `${MW} min ago`;
    const wW = Math.floor(MW / 60);
    if (wW < 24) return `${wW} h ago`;
    const CW = Math.floor(wW / 24);
    return 1 === CW ? "1 day ago" : `${CW} days ago`
  }(WW, RW)
}

function Fy(WW, RW) {
  return [...new Set([...Object.keys(RW), ...Object.keys(WW.files)])].flatMap((MW => {
    var wW, CW;
    const zR = null !== (wW = WW.files[MW]) && void 0 !== wW ? wW : "";
    return (null !== (CW = RW[MW]) && void 0 !== CW ? CW : "") === zR ? [] : [{
      path: MW,
      text: zR
    }]
  }))
}

function fy(WW) {
  let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120;
  if (WW.length <= RW) return null;
  const MW = WW.slice(0, RW),
    wW = MW.lastIndexOf(" ");
  return `${(wW>RW/2?MW.slice(0,wW):MW).replace(/[\s,;:.]+$/,"")}\u2026`
}

function Qy(WW) {
  let {
    snapshot: RW,
    files: MW,
    now: CW,
    withSeconds: bR,
    onRestore: yR
  } = WW;
  const [NW, eW] = (0, wW.useState)(!1), [BW, tR] = (0, wW.useState)(!1), TW = RW.did ? `Before: ${RW.did}` : RW.label, gR = fy(TW), iR = RW.did && RW.label.startsWith('Before "') ? RW.label.slice(7) : null, YW = null === iR ? null : fy(iR, 50), JW = null !== YW && null !== iR && void 0 !== iR && iR.startsWith('"') ? `${YW}"` : YW, PW = (0, wW.useRef)(null);
  (0, wW.useEffect)((() => {
    const WW = PW.current,
      RW = null === WW || void 0 === WW ? void 0 : WW.closest(".WorldCodeAiMessages");
    if (!NW || !WW || !RW) return;
    const MW = RW.getBoundingClientRect(),
      wW = WW.getBoundingClientRect(),
      CW = wW.bottom - (MW.bottom - 28),
      zR = wW.top - (MW.top + 16);
    CW > 0 && RW.scrollBy({
      top: Math.min(CW, zR),
      behavior: "smooth"
    })
  }), [NW]);
  const IW = (0, wW.useRef)(null),
    [oW, lW] = (0, wW.useState)(!1),
    FW = (0, wW.useCallback)((() => {
      const WW = IW.current;
      lW(null !== WW && WW.scrollTop + WW.clientHeight >= WW.scrollHeight - 24)
    }), []);
  (0, wW.useEffect)((() => {
    NW && FW()
  }), [NW, FW]);
  const fW = (0, wW.useMemo)((() => [...new Set([...Object.keys(RW.files), ...Object.keys(MW)])].flatMap((WW => {
    var wW, CW;
    const zR = null !== (wW = RW.files[WW]) && void 0 !== wW ? wW : "",
      AW = null !== (CW = MW[WW]) && void 0 !== CW ? CW : "";
    return zR === AW ? [] : [{
      path: WW,
      before: zR,
      after: AW
    }]
  }))), [RW, MW]);
  return (0, AW.jsxs)("li", {
    ref: PW,
    className: "WorldCodeAiSnapshot",
    children: [(0, AW.jsxs)("div", {
      className: "WorldCodeAiSnapshotRow",
      children: [(0, AW.jsxs)("span", {
        className: "WorldCodeAiSnapshotLabel",
        children: [BW || !gR ? TW : gR, (gR || JW) && (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiSnapshotMore",
          "aria-expanded": BW,
          onClick: () => {
            tR(!BW)
          },
          children: BW ? "less" : "more"
        }), (0, AW.jsxs)("span", {
          className: "WorldCodeAiSnapshotAge",
          children: [" \xb7 ", ly(RW.at, CW, bR)]
        }), null !== iR && (0, AW.jsxs)("span", {
          className: "WorldCodeAiSnapshotAsked",
          children: ["You asked: ", BW || !JW ? iR : JW]
        })]
      }), fW.length > 0 && (0, AW.jsx)("button", {
        className: "WorldCodeAiLinkButton",
        onClick: () => {
          eW(!NW)
        },
        children: NW ? "Hide" : "Compare"
      }), fW.length > 0 && yR && (0, AW.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        onClick: yR,
        children: "Go back to this code"
      }), 0 === fW.length && (0, AW.jsx)("span", {
        className: "WorldCodeAiSnapshotNow",
        children: "Same as your code now"
      })]
    }), NW && (0, AW.jsxs)("div", {
      className: "WorldCodeAiChanges",
      children: [(0, AW.jsx)("p", {
        className: "WorldCodeAiSnapshotCompareNote",
        children: "What changed since then:"
      }), (0, AW.jsx)("div", {
        ref: IW,
        className: zR()("WorldCodeAiSnapshotCompare", oW && "WorldCodeAiSnapshotCompare-end"),
        onScroll: FW,
        children: fW.map((WW => (0, AW.jsxs)("div", {
          className: "WorldCodeAiChange",
          children: [(0, AW.jsx)("div", {
            className: "WorldCodeAiChangeHeader",
            children: (0, AW.jsx)("span", {
              className: "WorldCodeAiChangePath",
              children: WW.path
            })
          }), (0, AW.jsx)(Jy, {
            change: WW
          })]
        }, WW.path)))
      })]
    })]
  })
}

function rN(WW) {
  let {
    snapshots: RW,
    files: MW,
    now: wW,
    onRestore: CW
  } = WW;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiHistory",
    children: [(0, AW.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, AW.jsx)("span", {
        children: "Your code before each change"
      })
    }), 0 === RW.length ? (0, AW.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Nothing here yet. Each time a change goes into your code, your code from before it is kept here."
    }) : (0, AW.jsx)("ul", {
      className: "WorldCodeAiSnapshots",
      children: [...RW].reverse().map((WW => {
        const zR = RW.some((RW => RW.id !== WW.id && ly(RW.at, wW) === ly(WW.at, wW)));
        return (0, AW.jsx)(Qy, {
          snapshot: WW,
          files: MW,
          now: wW,
          withSeconds: zR,
          onRestore: CW && (() => {
            CW(WW)
          })
        }, WW.id)
      }))
    })]
  })
}

function cN(WW) {
  let {
    notes: RW,
    outline: MW,
    Tk: CW,
    onDelete: zR
  } = WW;
  const [bR, yR] = (0, wW.useState)(""), [NW, eW] = (0, wW.useState)(null), [BW, tR] = (0, wW.useState)(!1), TW = RW.length >= 8, gR = MW.callbacks.length + MW.commands.length + MW.functions.length > 0;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiHistory WorldCodeAiAbout",
    children: [(0, AW.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, AW.jsx)("span", {
        children: "AI notes"
      })
    }), (0, AW.jsx)("p", {
      className: "WorldCodeAiAboutNote",
      children: "The AI reads these notes with every request, so it remembers what your game is."
    }), 0 === RW.length && (0, AW.jsx)("p", {
      className: "WorldCodeAiHint",
      children: 'No notes yet. Add one, like "Two teams, red and blue, race to the flag".'
    }), (0, AW.jsx)("ul", {
      className: "WorldCodeAiAboutList",
      children: RW.map((WW => (0, AW.jsxs)("li", {
        children: [(0, AW.jsx)("span", {
          children: WW
        }), (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          "aria-label": `Delete note: ${WW}`,
          onClick: () => {
            zR(WW)
          },
          children: "Delete"
        })]
      }, WW)))
    }), CW && !TW && (0, AW.jsxs)("form", {
      className: "WorldCodeAiQuestionOther",
      onSubmit: WW => {
        WW.preventDefault(), "" === bR.trim() || BW || (tR(!0), eW(null), CW(bR).then((WW => {
          eW(WW), null === WW && yR("")
        })).catch((() => {
          eW("That note couldn't be kept. Try again.")
        })).finally((() => {
          tR(!1)
        })))
      },
      children: [(0, AW.jsx)("input", {
        className: "WorldCodeAiInput WorldCodeAiQuestionInput",
        value: bR,
        maxLength: qR,
        placeholder: "Add a note about your game",
        "aria-label": "Add a note about your game",
        onChange: WW => {
          yR(WW.target.value)
        },
        onKeyDown: WW => {
          WW.stopPropagation()
        }
      }), (0, AW.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        type: "submit",
        disabled: "" === bR.trim() || BW,
        children: BW ? "Adding\u2026" : "Add"
      })]
    }), TW && (0, AW.jsxs)("p", {
      className: "WorldCodeAiHint",
      children: ["That's ", 8, " notes, the most it keeps: delete one to add another."]
    }), NW && (0, AW.jsx)("p", {
      className: "WorldCodeAiAboutError",
      children: NW
    }), (0, AW.jsx)("p", {
      className: "WorldCodeAiAboutHeading",
      children: "In your code now"
    }), gR ? (0, AW.jsxs)("ul", {
      className: "WorldCodeAiOutline",
      children: [MW.callbacks.map((WW => (0, AW.jsxs)("li", {
        children: [CR(WW), " ", (0, AW.jsx)("code", {
          children: WW
        })]
      }, WW))), MW.commands.length > 0 && (0, AW.jsxs)("li", {
        children: ["Chat commands: ", MW.commands.join(", ")]
      }), MW.functions.length > 0 && (0, AW.jsxs)("li", {
        children: ["Your own functions: ", (0, AW.jsx)("code", {
          children: MW.functions.join(", ")
        })]
      })]
    }) : (0, AW.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Nothing yet. Ask the AI to make something."
    })]
  })
}
const Xy = {
  asked: "Remember this about your game?",
  pending: "A note to remember, once the change is in",
  checking: "Saving a note\u2026",
  saved: "Saved a note in AI notes",
  declined: "Note not saved",
  refused: "Note not saved"
};

function jN(WW) {
  let {
    note: RW,
    status: MW,
    onAnswer: wW,
    isPartLeftOut: CW = !1,
    defaultOpen: zR
  } = WW;
  const yR = CW && ("asked" === MW || "pending" === MW);
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiToolCard",
    children: [(0, AW.jsxs)(bR, {
      title: Xy[MW],
      isCalm: "refused" !== MW,
      defaultOpen: zR,
      children: [yR && (0, AW.jsx)("p", {
        children: "The note to remember is hidden while a part is unticked. Tick every part to see it."
      }), !yR && (0, AW.jsxs)("p", {
        children: ['"', RW, '"']
      }), !yR && "pending" === MW && (0, AW.jsx)("p", {
        children: "It goes into AI notes once the change is in."
      }), "refused" === MW && (0, AW.jsx)("p", {
        children: "This note can't be saved. Notes are only about your game."
      })]
    }), !yR && "asked" === MW && wW && (0, AW.jsxs)("div", {
      className: "WorldCodeAiChangeActions",
      children: [(0, AW.jsx)("button", {
        className: "WorldCodeAiPrimaryButton",
        onClick: () => {
          wW(!0)
        },
        children: "Yes, remember it"
      }), (0, AW.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        onClick: () => {
          wW(!1)
        },
        children: "No"
      })]
    })]
  })
}

function kN(WW) {
  let {
    steps: RW,
    built: MW,
    done: wW,
    onBuild: CW
  } = WW;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiQuestion WorldCodeAiPlan",
    children: [(0, AW.jsx)("p", {
      className: "WorldCodeAiQuestionText",
      children: "The plan: one step at a time"
    }), (0, AW.jsx)("ol", {
      className: "WorldCodeAiPlanSteps",
      children: RW.map(((WW, RW) => (0, AW.jsxs)("li", {
        className: RW < wW ? "WorldCodeAiPlanStep-built" : void 0,
        children: [RW < wW && (0, AW.jsx)("span", {
          className: "WorldCodeAiPlanTick",
          children: "\u2713 "
        }), WW, RW < MW && RW >= wW && (0, AW.jsx)("span", {
          className: "WorldCodeAiPlanAsked",
          children: " (apply it to tick it off)"
        })]
      }, `${RW}:${WW}`)))
    }), MW < RW.length && wW < MW && (0, AW.jsxs)("span", {
      className: "WorldCodeAiHint",
      children: ["Apply ", MW - wW > 1 ? `steps ${wW+1} to ${MW}` : `step ${MW}`, " to your code and try it, then build step ", MW + 1, "."]
    }), MW < RW.length && CW && (0, AW.jsx)("button", {
      ...jy.h,
      className: wW < MW ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
      onClick: () => {
        CW(MW)
      },
      children: wW < MW ? `Build step ${MW+1} anyway` : `Build step ${MW+1}`
    }), MW < RW.length && MW > 0 && wW >= MW && (0, AW.jsx)("span", {
      className: "WorldCodeAiHint",
      children: "Try each step in your world before the next."
    }), MW === RW.length && (0, AW.jsx)("span", {
      className: "WorldCodeAiHint",
      children: "Every step is asked for."
    })]
  })
}

function aN(WW, RW, MW) {
  return `${WW}\n\nYou asked me: "${RW}" ${null===MW?"I don't mind: choose what works best.":`My answer: ${MW.replace(/\.$/,"")}.`} Build it now, without asking again.`
}

function sy(WW) {
  let {
    question: RW,
    onAnswer: MW,
    ownAnswerBelow: CW = !1
  } = WW;
  const [zR, bR] = (0, wW.useState)("");
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiQuestion",
    children: [(0, AW.jsx)("p", {
      className: "WorldCodeAiQuestionText",
      children: RW.question
    }), MW && (0, AW.jsxs)(AW.Fragment, {
      children: [(0, AW.jsx)("div", {
        className: "WorldCodeAiQuestionChoices",
        children: RW.choices.map(((WW, RW) => (0, wW.createElement)("button", {
          ...jy.h,
          key: `${RW}:${WW}`,
          className: "WorldCodeAiQuestionChoice",
          onClick: () => {
            MW(WW, !1)
          }
        }, WW)))
      }), RW.allowOther && CW && (0, AW.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "Or type your own answer in the box below."
      }), RW.allowOther && !CW && (0, AW.jsxs)("form", {
        className: "WorldCodeAiQuestionOther",
        onSubmit: WW => {
          WW.preventDefault(), "" !== zR.trim() && MW(zR.trim(), !0)
        },
        children: [(0, AW.jsx)("input", {
          className: "WorldCodeAiInput",
          value: zR,
          maxLength: 200,
          placeholder: "Or type your own answer",
          "aria-label": "Your own answer",
          onChange: WW => {
            bR(WW.target.value)
          },
          onKeyDown: WW => {
            WW.stopPropagation()
          }
        }), (0, AW.jsx)("button", {
          className: "WorldCodeAiSecondaryButton",
          type: "submit",
          disabled: "" === zR.trim(),
          children: "Send"
        })]
      }), (0, AW.jsx)("button", {
        ...jy.h,
        className: "WorldCodeAiSecondaryButton WorldCodeAiQuestionAiPicks",
        onClick: () => {
          MW(null, !1)
        },
        children: "Let the AI pick"
      })]
    })]
  })
}
const dy = /^(?:const|let|var)\s+CONFIG\s*=\s*\{/gm;

function py(WW, RW) {
  let MW = 0;
  for (; MW < RW;) {
    const wW = WW[MW],
      CW = WW[MW + 1];
    let zR = MW + 1;
    if ("/" === wW && "/" === CW) {
      const RW = WW.indexOf("\n", MW);
      zR = -1 === RW ? WW.length : RW
    } else if ("/" === wW && "*" === CW) {
      const RW = WW.indexOf("*/", MW + 2);
      zR = -1 === RW ? WW.length : RW + 2
    } else if ('"' === wW || "'" === wW || "`" === wW) {
      for (zR = MW + 1; zR < WW.length && WW[zR] !== wW && ("`" === wW || "\n" !== WW[zR]);) zR += "\\" === WW[zR] ? 2 : 1;
      zR++
    }
    if (zR > RW) return !0;
    MW = zR
  }
  return !1
}

function hy(WW) {
  const RW = WW.slice(1, -1);
  let MW = "";
  for (let wW = 0; wW < RW.length; wW++) {
    if ("\\" !== RW[wW]) {
      MW += RW[wW];
      continue
    }
    const WW = RW[++wW],
      CW = {
        n: "\n",
        t: "\t",
        r: "\r",
        "\\": "\\",
        '"': '"',
        "'": "'"
      },
      zR = "u" === WW ? RW.slice(wW + 1, wW + 5) : "x" === WW ? RW.slice(wW + 1, wW + 3) : "";
    if (WW in CW) MW += CW[WW];
    else {
      if ("" === zR || !/^[\da-f]+$/i.test(zR) || zR.length !== ("u" === WW ? 4 : 2)) return null;
      MW += String.fromCharCode(parseInt(zR, 16)), wW += zR.length
    }
  }
  return MW
}

function Uy(WW) {
  const RW = function(WW) {
    dy.lastIndex = 0;
    for (let RW = dy.exec(WW); RW; RW = dy.exec(WW))
      if (!py(WW, RW.index)) return RW;
    return null
  }(WW);
  if (!RW) return [];
  const MW = function(WW, RW) {
    const MW = [];
    let wW = 0,
      CW = RW;
    for (; CW < WW.length;) {
      var zR;
      const RW = WW[CW];
      if (/\s/.test(RW)) {
        CW++;
        continue
      }
      const AW = CW;
      if ("/" === RW && "/" === WW[CW + 1]) {
        const RW = WW.indexOf("\n", CW);
        CW = -1 === RW ? WW.length : RW, MW.push({
          type: "comment",
          text: WW.slice(AW + 2, CW).trim(),
          start: AW,
          end: CW
        });
        continue
      }
      if ("/" === RW && "*" === WW[CW + 1]) {
        const RW = WW.indexOf("*/", CW + 2);
        if (-1 === RW) return null;
        CW = RW + 2, MW.push({
          type: "comment",
          text: WW.slice(AW + 2, RW).trim(),
          start: AW,
          end: CW
        });
        continue
      }
      if ('"' === RW || "'" === RW || "`" === RW) {
        for (CW++; CW < WW.length && WW[CW] !== RW;) {
          if ("\\" === WW[CW]) CW++;
          else if ("\n" === WW[CW] && "`" !== RW) return null;
          CW++
        }
        if (CW >= WW.length) return null;
        CW++, MW.push({
          type: "`" === RW ? "template" : "string",
          text: WW.slice(AW, CW),
          start: AW,
          end: CW
        });
        continue
      }
      const bR = /^-?(?:\d[\d_]*(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?\b/i.exec(WW.slice(CW, CW + 40));
      if (bR && ("-" !== RW || ":" === (null === (zR = MW[MW.length - 1]) || void 0 === zR ? void 0 : zR.text))) {
        CW += bR[0].length, MW.push({
          type: "number",
          text: bR[0],
          start: AW,
          end: CW
        });
        continue
      }
      const yR = /^[A-Za-z_$][\w$]*/.exec(WW.slice(CW, CW + 80));
      if (yR) CW += yR[0].length, MW.push({
        type: "word",
        text: yR[0],
        start: AW,
        end: CW
      });
      else if (CW++, MW.push({
          type: "punct",
          text: RW,
          start: AW,
          end: CW
        }), "{[(".includes(RW)) wW++;
      else if ("}])".includes(RW) && (wW--, 0 === wW)) return MW
    }
    return null
  }(WW, RW.index + RW[0].length - 1);
  if (!MW) return [];
  const wW = [];
  let CW, zR = 1;
  for (; zR < MW.length - 1;) {
    var AW, bR, yR, NW, eW, BW;
    const RW = MW[zR];
    if ("comment" === RW.type) {
      CW = RW.text, zR++;
      continue
    }
    if ("," === RW.text) {
      zR++;
      continue
    }
    const tR = RW,
      TW = "word" === tR.type ? tR.text : "string" === tR.type ? hy(tR.text) : null;
    if (null === TW || ":" !== (null === (AW = MW[zR + 1]) || void 0 === AW ? void 0 : AW.text)) return [];
    let gR = zR + 2,
      iR = 0;
    const YW = [];
    for (; gR < MW.length - 1;) {
      const WW = MW[gR];
      if (0 === iR && "," === WW.text) break;
      "punct" === WW.type && "{[(".includes(WW.text) ? iR++ : "punct" === WW.type && "}])".includes(WW.text) && iR--, "comment" !== WW.type && YW.push(WW), gR++
    }
    const JW = YW.at(-1),
      PW = "," === (null === (bR = MW[gR]) || void 0 === bR ? void 0 : bR.text) ? MW[gR + 1] : MW.slice(zR + 2, gR).find((WW => "comment" === WW.type && void 0 !== JW && WW.start >= JW.end)),
      IW = "comment" !== (null === PW || void 0 === PW ? void 0 : PW.type) || void 0 === JW || WW.slice(JW.end, PW.start).includes("\n") ? void 0 : PW.text,
      oW = 1 === YW.length ? YW[0] : void 0,
      lW = null !== IW && void 0 !== IW ? IW : CW;
    CW = void 0;
    const FW = {
      key: TW,
      raw: null !== (yR = null === oW || void 0 === oW ? void 0 : oW.text) && void 0 !== yR ? yR : "",
      start: null !== (NW = null === oW || void 0 === oW ? void 0 : oW.start) && void 0 !== NW ? NW : 0,
      end: null !== (eW = null === oW || void 0 === oW ? void 0 : oW.end) && void 0 !== eW ? eW : 0,
      ...lW ? {
        comment: lW
      } : {}
    };
    if ("number" === (null === oW || void 0 === oW ? void 0 : oW.type)) {
      const WW = Number(oW.text.replace(/_/g, ""));
      Number.isFinite(WW) && wW.push({
        ...FW,
        kind: "number",
        value: WW
      })
    } else if ("string" === (null === oW || void 0 === oW ? void 0 : oW.type)) {
      const WW = hy(oW.text);
      null !== WW && wW.push({
        ...FW,
        kind: "string",
        value: WW
      })
    } else "word" !== (null === oW || void 0 === oW ? void 0 : oW.type) || "true" !== oW.text && "false" !== oW.text || wW.push({
      ...FW,
      kind: "boolean",
      value: "true" === oW.text
    });
    zR = gR, IW && "," === (null === (BW = MW[zR]) || void 0 === BW ? void 0 : BW.text) && (zR += 2)
  }
  return wW.slice(0, 30)
}

function Ey(WW, RW, MW) {
  const wW = Uy(WW).find((WW => WW.key === RW.key));
  if (!wW || wW.kind !== RW.kind || wW.raw !== RW.raw) return null;
  let CW;
  if ("number" === RW.kind) {
    if ("number" !== typeof MW || !Number.isFinite(MW)) return null;
    CW = String(Number(MW.toPrecision(12)))
  } else if ("boolean" === RW.kind) {
    if ("boolean" !== typeof MW) return null;
    CW = MW ? "true" : "false"
  } else {
    if ("string" !== typeof MW) return null;
    const WW = RW.raw.startsWith("'") ? "'" : '"',
      wW = "'" === WW ? '"' : "'";
    zR = MW, CW = `${AW=MW.includes(WW)&&!MW.includes(wW)?wW:WW}${zR.slice(0,200).replace(/\\/g,"\\\\").replace('"'===AW?/"/g:/'/g,`\\${AW}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000-\u001f\u007f]/g,(WW=>`\\u${WW.charCodeAt(0).toString(16).padStart(4,"0")}`))}${AW}`
  }
  var zR, AW;
  return WW.slice(0, wW.start) + CW + WW.slice(wW.end)
}

function Vy(WW) {
  if (!Number.isInteger(WW)) {
    var RW;
    const MW = Math.min(3, (null !== (RW = String(WW).split(".")[1]) && void 0 !== RW ? RW : "").length);
    return 10 ** -Math.max(1, MW)
  }
  const MW = Math.abs(WW);
  return MW >= 100 ? 10 ** (Math.floor(Math.log10(MW)) - 1) : 1
}

function mN(WW) {
  return WW.comment ? WW.comment.charAt(0).toUpperCase() + WW.comment.slice(1) : function(WW) {
    const RW = WW.replace(/_/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2").trim().toLowerCase();
    return RW.charAt(0).toUpperCase() + RW.slice(1)
  }(WW.key)
}

function xN(WW) {
  return "boolean" === typeof WW ? WW ? "on" : "off" : "number" === typeof WW ? String(WW) : WW.length > 20 ? `\u201c${WW.slice(0,19)}\u2026\u201d` : `\u201c${WW}\u201d`
}

function vN(WW) {
  let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "changing";
  if (0 === WW.length) return `Before ${RW} settings`;
  const MW = 3 === WW.length ? 3 : 2,
    wW = WW.slice(0, MW).map((WW => `${WW.name} ${WW.from} \u2192 ${WW.to}`)),
    CW = WW.length > MW ? ` and ${WW.length-MW} more` : "";
  return `Before ${RW} settings: ${wW.join(", ")}${CW}`
}
const Ky = /^(?:(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)|(?:const|let|var)\s+([A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)\s*=(?!=))/gm;

function uy(WW) {
  const RW = new Set;
  for (const CW of WW.matchAll(Ky)) {
    var MW, wW;
    RW.add(null !== (MW = null !== (wW = CW[1]) && void 0 !== wW ? wW : CW[2]) && void 0 !== MW ? MW : CW[3])
  }
  return RW
}
const Oy = {
    WR: ["second", "minute", "timer", "time", "every", "countdown", "wave", "always", "clock"],
    playerCommand: ["command", "/"],
    onPlayerJoin: ["join", "start", "welcome", "spawn", "enter", "arrive"],
    onPlayerLeave: ["Cw", "left", "goodbye", "bye", "quit"],
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
    onPlayerPickedUpItem: ["WM", "collect"],
    onPlayerDropItem: ["drop"],
    CONFIG: ["setting", "config", "number", "value"]
  },
  ny = new Set("a an and the to of in on at for with from by as is are be it its it's this that these those my your their our me you they them we i so if then than when while each all any some more most less make makes made let lets get gets add adds added put puts change changes changed use uses using new now also just only can could should would will want like say says said tell tells told show shows game player players someone everyone people thing things code function part bit way one two three".split(" "));

function Gy(WW) {
  return WW.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9/]+/).filter((WW => WW.length >= 3 && !ny.has(WW)))
}

function Ly(WW, RW) {
  return WW.some((WW => RW.some((RW => function(WW, RW) {
    return WW.startsWith(RW) || RW.startsWith(WW)
  }(WW, RW)))))
}

function Hy(WW, RW, MW) {
  const wW = RW.toLowerCase();
  return WW.names.some((RW => {
    const CW = Object.hasOwn(Oy, RW) ? Oy[RW] : [];
    return !!(wW.includes(RW.toLowerCase()) || CW.includes("/") && wW.includes("/")) || Ly(MW, [...CW.flatMap(Gy), ...Gy(WW.plainWords.join(" ")), ...WW.configKeys.flatMap(Gy)])
  }))
}
const Dy = {
    WR: "Runs all the time",
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
  qN = {
    CONFIG: "Settings"
  };

function Zy(WW) {
  return Object.hasOwn(Dy, WW) ? Dy[WW] : Object.hasOwn(qN, WW) ? qN[WW] : void 0
}
Object.keys(Dy);
const Sy = /^(?:export\s+)?(?:async\s+)?function\b|^(?:(?:const|let|var)\s+)?\w+\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/;

function WN(WW) {
  const RW = WW.trim();
  return "" === RW || /^(?:\/\/|\/\*|\*)/.test(RW)
}

function RN(WW) {
  const RW = WW.map((WW => WW.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "").replace(/\/\/.*$/, ""))).join("\n");
  return ["{}", "()", "[]"].every((WW => {
    let [MW, wW] = WW;
    return RW.split(MW).length === RW.split(wW).length
  }))
}

function MN(WW) {
  const RW = [];
  let MW = 0;
  const wW = wW => {
    if (wW > MW) {
      var CW;
      const zR = WW.slice(MW, wW).find((WW => Sy.test(WW)));
      RW.push({
        name: void 0 === zR ? null : null !== (CW = ze(zR)) && void 0 !== CW ? CW : null,
        lines: WW.slice(MW, wW)
      }), MW = wW
    }
  };
  for (let CW = 1; CW < WW.length; CW++)
    if (Sy.test(WW[CW])) {
      let RW = CW;
      for (; RW > MW && WN(WW[RW - 1]);) RW--;
      wW(RW)
    } return wW(WW.length), RW
}

function wN(WW) {
  const RW = MN(WW.removed),
    MW = MN(WW.added);
  if (RW.length + MW.length <= 1) return [WW];
  const wW = [];
  let CW = 0,
    zR = 0;
  const AW = (WW, RW, MW) => RW.slice(MW).some((RW => RW.name === WW));
  for (; CW < RW.length || zR < MW.length;)
    if (CW < RW.length && zR < MW.length && RW[CW].name === MW[zR].name) wW.push({
      removed: RW[CW++].lines,
      added: MW[zR++].lines
    });
    else if (CW < RW.length && !AW(RW[CW].name, MW, zR)) wW.push({
    removed: RW[CW++].lines,
    added: []
  });
  else {
    if (!(zR < MW.length) || AW(MW[zR].name, RW, CW)) {
      wW.push({
        removed: RW.slice(CW).flatMap((WW => WW.lines)),
        added: MW.slice(zR).flatMap((WW => WW.lines))
      });
      break
    }
    wW.push({
      removed: [],
      added: MW[zR++].lines
    })
  }
  const bR = [];
  for (const yR of wW) {
    const WW = bR[bR.length - 1],
      RW = [...yR.removed, ...yR.added].every(WN);
    WW && (RW || [...WW.removed, ...WW.added].every(WN)) ? bR[bR.length - 1] = {
      removed: [...WW.removed, ...yR.removed],
      added: [...WW.added, ...yR.added]
    } : bR.push(yR)
  }
  return bR.every((WW => RN(WW.removed) && RN(WW.added))) ? bR : [WW]
}

function CN(WW, RW) {
  const MW = [];
  for (const zR of dw(WW, RW)) {
    const WW = MW[MW.length - 1];
    "same" === zR.kind ? MW.push({
      kind: "same",
      text: zR.text
    }) : "hunk" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW[zR.kind].push(zR.text) : MW.push({
      kind: "hunk",
      removed: "removed" === zR.kind ? [zR.text] : [],
      added: "added" === zR.kind ? [zR.text] : []
    })
  }
  const wW = [];
  let CW = 0;
  for (let zR = 0; zR < MW.length; zR++) {
    const WW = MW[zR];
    if ("same" === WW.kind) {
      wW.push(WW);
      continue
    }
    let RW = wN(WW);
    if (1 === RW.length) {
      let wW = zR + 1;
      const CW = [];
      for (; wW < MW.length; wW++) {
        const WW = MW[wW];
        if ("same" !== WW.kind || !/^[\s})\];,]+$/.test(WW.text)) break;
        CW.push(WW.text)
      }
      const AW = CW.length > 0 ? wN({
        removed: [...WW.removed, ...CW],
        added: [...WW.added, ...CW]
      }) : RW;
      AW.length > 1 && (RW = AW, zR = wW - 1)
    }
    for (const MW of RW) wW.push({
      kind: "hunk",
      index: CW++,
      removed: MW.removed,
      added: MW.added
    })
  }
  return wW
}

function ze(WW) {
  var RW, MW;
  const wW = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^\s*(?:export\s+)?(?:const|let|var|class)\s+(\w+)|^(\w+)\s*=(?!=)/.exec(WW);
  return wW ? null !== (RW = null !== (MW = wW[1]) && void 0 !== MW ? MW : wW[2]) && void 0 !== RW ? RW : wW[3] : void 0
}

function AN(WW) {
  const RW = ze(WW);
  if (!RW || /^\s/.test(WW)) return;
  return /^(?:export\s+)?(?:async\s+)?function\b/.test(WW) || /=\s*(?:async\s+)?(?:function\b|\(|\w+\s*=>)/.test(WW) || "CONFIG" === RW ? Zy(RW) : void 0
}

function be(WW) {
  const RW = new Map;
  for (const MW of WW) {
    const WW = AN(MW),
      wW = ze(MW);
    WW && wW && RW.set(wW, WW)
  }
  return RW
}

function ye(WW) {
  return [...new Set(WW.flatMap((WW => {
    const RW = /^\s/.test(WW) ? void 0 : ze(WW);
    return RW ? [RW] : []
  })))]
}

function NN(WW) {
  var RW;
  return WW.length <= 1 ? null !== (RW = WW[0]) && void 0 !== RW ? RW : "" : `${WW.slice(0,-1).join(", ")} and ${WW[WW.length-1]}`
}

function eN(WW) {
  return WW.replace(/_/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2").trim().toLowerCase()
}

function BN(WW) {
  return WW.charAt(0).toUpperCase() + WW.slice(1)
}
const te = new Set("api const let var function return if else for of in new true false null undefined this typeof while break continue playerId attacker killed damaged command ms Math Date JSON String Number Object Array console length push".split(" "));

function TN(WW) {
  return [...new Set(WW.flatMap((WW => {
    const RW = WW.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "");
    return (0, eR.i)(RW, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, eR.r).map((WW => WW[0])).filter((WW => !te.has(WW)))
  })))]
}

function ge(WW, RW) {
  var MW;
  const wW = (null !== (MW = WW.parts) && void 0 !== MW ? MW : []).map((WW => {
      return {
        why: WW.why,
        lines: (RW = WW.code, new Set(RW.split("\n").map((WW => WW.trim())).filter((WW => WW.length > 1))))
      };
      var RW
    })),
    CW = CN(WW.before, WW.after);
  let zR = 1;
  const AW = CW.flatMap(((WW, RW) => {
      if ("hunk" !== WW.kind) return zR++, [];
      let MW;
      for (const CW of wW) {
        const RW = WW.added.filter((WW => CW.lines.has(WW.trim()))).length;
        RW > 0 && (!MW || RW > MW.score) && (MW = {
          why: CW.why,
          score: RW
        })
      }
      const AW = function(WW, RW, MW) {
          const wW = ye(WW.added),
            CW = ye(WW.removed),
            zR = wW.filter((WW => CW.includes(WW))),
            AW = wW.filter((WW => !zR.includes(WW))),
            bR = CW.filter((WW => !zR.includes(WW))),
            yR = new Map([...be(WW.removed), ...be(WW.added)]),
            NW = [...zR, ...AW].filter((WW => yR.has(WW))),
            eW = (RW, MW) => {
              return {
                names: RW,
                configKeys: RW.includes("CONFIG") ? (wW = WW.added, wW.flatMap((WW => {
                  const RW = /^\s+(\w+)\s*:/.exec(WW);
                  return RW ? [RW[1]] : []
                }))) : [],
                plainWords: RW.flatMap((WW => {
                  const RW = yR.get(WW);
                  return RW ? [RW] : []
                })),
                onlyAdds: MW,
                uses: TN(WW.added),
                takesOut: bR,
                removedUses: TN(WW.removed)
              };
              var wW
            },
            BW = new Set([...WW.added, ...WW.removed].flatMap((WW => {
              var RW;
              const MW = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^(\w+)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/.exec(WW);
              return MW ? [null !== (RW = MW[1]) && void 0 !== RW ? RW : MW[2]] : []
            }))),
            tR = WW => {
              const RW = eN(WW);
              return BW.has(WW) ? `"${RW}"` : RW
            },
            TW = [...zR, ...AW, ...bR];
          if (TW.some((WW => yR.has(WW)))) {
            const WW = WW => {
                const RW = WW.filter((WW => yR.has(WW)));
                return NN(RW.length > 0 ? RW.map((WW => {
                  var RW;
                  return null !== (RW = yR.get(WW)) && void 0 !== RW ? RW : WW
                })) : WW.map(tR))
              },
              RW = [zR.length > 0 ? `${WW(zR)} \u2014 changed` : "", AW.length > 0 ? `${WW(AW)} \u2014 added` : "", bR.length > 0 ? `${WW(bR)} \u2014 taken out` : ""].filter(Boolean),
              MW = [...TW.filter((WW => yR.has(WW))), ...TW.filter((WW => !yR.has(WW)))],
              wW = NW.every((WW => AW.includes(WW)));
            return {
              named: BN(RW.join("; ")),
              codeNames: MW,
              takesOut: bR,
              isPlain: !0,
              about: eW(NW, wW)
            }
          }
          const gR = [zR.length > 0 ? `changes ${NN(zR.map(tR))}` : "", AW.length > 0 ? `adds ${NN(AW.map(tR))}` : "", bR.length > 0 ? `takes out ${NN(bR.map(tR))}` : ""].filter(Boolean);
          if (gR.length > 0) return {
            named: BN(gR.join(", ")),
            codeNames: TW,
            takesOut: bR,
            isPlain: !1,
            about: eW([], !1)
          };
          const iR = RW.flatMap((WW => "same" === WW.kind ? [WW.text] : WW.added));
          for (let YW = iR.length - 1; YW >= 0; YW--) {
            const WW = iR[YW],
              RW = /^\s/.test(WW) ? void 0 : ze(WW);
            if (!RW && "" !== WW.trim() && !/^\s/.test(WW) && !/^(?:\/\/|\/\*|\*)/.test(WW.trim())) break;
            if (RW) {
              const MW = AN(WW);
              return MW ? (yR.set(RW, MW), {
                named: `${MW} \u2014 changed`,
                codeNames: [RW],
                takesOut: [],
                isPlain: !0,
                about: eW([RW], !1)
              }) : {
                named: `Changes ${/\bfunction\b|=>/.test(WW)?`"${eN(RW)}"`:eN(RW)}`,
                codeNames: [RW],
                takesOut: [],
                isPlain: !1,
                about: eW([], !1)
              }
            }
          }
          return {
            named: 0 === WW.added.length ? `Takes out lines from line ${MW}` : `Changes line ${MW}`,
            codeNames: [],
            takesOut: [],
            isPlain: !1,
            about: eW([], !1)
          }
        }(WW, CW.slice(0, RW), zR),
        bR = zR;
      return zR += WW.added.length, [{
        index: WW.index,
        removed: WW.removed,
        added: WW.added,
        line: bR,
        ...AW,
        ...MW ? {
          why: MW.why
        } : {}
      }]
    })),
    bR = function(WW, RW) {
      const MW = RW ? Gy(RW) : [];
      if (!RW || 0 === MW.length) return WW.map((() => {}));
      const wW = WW.map((WW => Hy(WW, RW, MW) || void 0 !== WW.why && Ly(MW, Gy(WW.why)))),
        CW = new Set(WW.flatMap(((WW, RW) => {
          var MW;
          return wW[RW] && null !== (MW = WW.uses) && void 0 !== MW ? MW : []
        }))),
        zR = WW.map(((WW, RW) => {
          var MW;
          return wW[RW] || (null !== (MW = WW.uses) && void 0 !== MW ? MW : []).some((WW => CW.has(WW)))
        }));
      if (!wW.includes(!0)) return WW.map((() => {}));
      const AW = new Set(WW.flatMap((WW => WW.names)));
      return WW.map(((WW, wW) => {
        if (0 === WW.names.length) {
          var bR, yR;
          const wW = (null !== (bR = WW.takesOut) && void 0 !== bR ? bR : []).filter((WW => ("CONFIG" === WW || Object.hasOwn(Oy, WW)) && !AW.has(WW)));
          return 0 === wW.length || Hy({
            ...WW,
            names: wW
          }, RW, MW) || void 0 !== WW.why && Ly(MW, Gy(WW.why)) || (null !== (yR = WW.removedUses) && void 0 !== yR ? yR : []).some((WW => CW.has(WW))) ? void 0 : "takesOut"
        }
        if (!zR[wW]) return WW.onlyAdds ? "adds" : "changes"
      }))
    }(AW.map((WW => ({
      ...WW.about,
      ...WW.why ? {
        why: WW.why
      } : {}
    }))), RW),
    yR = AW.map(((WW, RW) => {
      let {
        named: MW,
        codeNames: wW,
        isPlain: CW,
        about: zR,
        ...yR
      } = WW;
      const NW = void 0 !== yR.why && 1 === AW.filter((WW => WW.why === yR.why)).length && yR.why ? yR.why.charAt(0).toUpperCase() + yR.why.slice(1) : void 0,
        eW = !CW && NW ? NW : MW,
        BW = bR[RW],
        tR = BW ? eW.replace(/ \u2014 (added|changed|taken out)$/, "") : eW;
      return {
        ...yR,
        label: tR,
        codeNames: wW,
        ...CW && NW ? {
          detail: NW
        } : {},
        ...BW ? {
          also: BW
        } : {}
      }
    })),
    NW = WW => {
      var RW, MW;
      return `${null!==(RW=WW.also)&&void 0!==RW?RW:""}|${WW.label}|${null!==(MW=WW.detail)&&void 0!==MW?MW:""}`
    };
  return yR.map((WW => {
    let {
      line: RW,
      ...MW
    } = WW;
    return yR.filter((WW => NW(WW) === NW(MW))).length > 1 ? {
      ...MW,
      label: `${MW.label} (line ${RW})`
    } : MW
  }))
}
const ie = {
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
  YN = Object.keys(ie).join("|"),
  JN = new Set(["is", "its", "this", "was", "as", "us", "always", "less", "plus", "across", "yours", "theirs"]),
  PN = /(?:^|[,;:(]|\b(?:and|so|but|or|then|right|because|until|since|just|even))\s*$/i;
const IN = /```[\s\S]*?(?:```|$)|`[^`\n]*`|"[^"\n]*"|\u201c[^\u201d\n]*\u201d|['\u2018][^'\u2019\n]*['\u2019](?![\w])/g;

function oN(WW) {
  return !/^['\u2018]/.test(WW[0]) || !(0, eR.e)(WW, "\\w\u2019'")
}
const lN = /\b(?:last time|before|earlier|previous(?:ly)?|already|in my last|a mistake|an error|wrong)\b/i;

function FN(WW) {
  const RW = function(WW) {
      return (0, eR.i)(WW, IN, oN).map((WW => [WW.index, WW.index + WW[0].length]))
    }(WW),
    MW = WW => RW.some((RW => {
      let [MW, wW] = RW;
      return WW >= MW && WW < wW
    })),
    wW = [];
  for (const zR of WW.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${YN})\\b`, "g"))) {
    const RW = zR.index + zR[1].length,
      CW = zR.index + zR[0].length,
      AW = WW.slice(CW),
      bR = /[.!?](?=\s|$)|\n/.exec(AW),
      yR = bR ? AW.slice(0, bR.index) : AW;
    if (!MW(RW) && !lN.test(yR)) {
      wW.push({
        at: RW,
        length: CW - RW,
        words: `${zR[2]?"It also":"This"} ${ie[zR[3]]}`
      });
      for (const WW of yR.matchAll(new RegExp(`\\b(and|then|also) (${YN})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) MW(CW + WW.index) || wW.push({
        at: CW + WW.index,
        length: WW[0].length,
        words: `${WW[1]} ${ie[WW[2]]}`
      })
    }
  }
  for (const zR of WW.matchAll(/\bnow ([a-z]{2,}s)\b/g)) {
    const RW = Math.max(WW.lastIndexOf(".", zR.index), WW.lastIndexOf("\n", zR.index)) + 1,
      AW = /[.!?](?=\s|$)|\n/.exec(WW.slice(zR.index)),
      bR = WW.slice(RW, AW ? zR.index + AW.index : WW.length),
      yR = wW.some((WW => zR.index < WW.at + WW.length && WW.at < zR.index + zR[0].length)),
      NW = PN.test(WW.slice(RW, zR.index));
    JN.has(zR[1]) || NW || MW(zR.index) || lN.test(bR) || yR || wW.push({
      at: zR.index,
      length: zR[0].length,
      words: `will ${CW=zR[1],"has"===CW?"have":CW.endsWith("ies")?`${CW.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(CW)?CW.slice(0,-2):CW.slice(0,-1)}`
    })
  }
  var CW;
  return wW.sort(((WW, RW) => RW.at - WW.at)).reduce(((WW, RW) => WW.slice(0, RW.at) + RW.words + WW.slice(RW.at + RW.length)), WW)
}

function fN(WW) {
  let {
    path: RW,
    field: MW,
    onWrite: CW,
    isChanged: zR
  } = WW;
  const [bR, yR] = (0, wW.useState)(null), [NW, eW] = (0, wW.useState)(null), BW = mN(MW), [tR, TW] = (0, wW.useState)(!1), gR = (0, wW.useRef)(null), iR = async WW => {
    if (CW && !tR) {
      yR(null), TW(!0);
      try {
        const AW = await CW(RW, MW, WW);
        var wW, zR;
        if (eW(AW ? null : "Your code changed here. Look at it again."), AW) null === (wW = gR.current) || void 0 === wW || null === (zR = wW.scrollIntoView) || void 0 === zR || zR.call(wW, {
          block: "nearest"
        })
      } finally {
        TW(!1)
      }
    }
  }, YW = () => {
    if (null !== bR)
      if ("number" === MW.kind) {
        const WW = Number(bR.trim());
        if ("" === bR.trim() || !Number.isFinite(WW)) return eW("That needs to be a number."), void yR(null);
        iR(WW)
      } else iR(bR)
  }, JW = `WorldCodeAiSetting-${RW}-${MW.key}`;
  return (0, AW.jsxs)("li", {
    ref: gR,
    className: "WorldCodeAiSetting",
    children: [(0, AW.jsxs)("label", {
      className: "WorldCodeAiSettingLabel",
      htmlFor: JW,
      children: [BW, MW.comment && (0, AW.jsx)("code", {
        children: MW.key
      })]
    }), "boolean" === MW.kind ? (0, AW.jsxs)("label", {
      className: "WorldCodeAiSwitch",
      children: [(0, AW.jsx)("input", {
        id: JW,
        type: "checkbox",
        role: "switch",
        checked: !0 === MW.value,
        disabled: !CW,
        onChange: WW => {
          iR(WW.target.checked)
        }
      }), (0, AW.jsx)("span", {
        children: MW.value ? "On" : "Off"
      })]
    }) : (0, AW.jsxs)("div", {
      className: "WorldCodeAiSettingControl",
      children: ["number" === MW.kind && (0, AW.jsx)("button", {
        className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
        "aria-label": `Less ${BW}`,
        disabled: !CW,
        onClick: () => {
          iR(MW.value - Vy(MW.value))
        },
        children: "\u2212"
      }), (0, AW.jsx)("input", {
        id: JW,
        className: "WorldCodeAiInput WorldCodeAiSettingInput",
        type: "number" === MW.kind ? "number" : "text",
        inputMode: "number" === MW.kind ? "decimal" : void 0,
        maxLength: "string" === MW.kind ? 200 : void 0,
        value: null !== bR && void 0 !== bR ? bR : String(MW.value),
        disabled: !CW,
        onChange: WW => {
          yR(WW.target.value)
        },
        onBlur: YW,
        onKeyDown: WW => {
          WW.stopPropagation(), "Enter" === WW.key ? YW() : "Escape" === WW.key && yR(null)
        }
      }), "number" === MW.kind && (0, AW.jsx)("button", {
        className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
        "aria-label": `More ${BW}`,
        disabled: !CW,
        onClick: () => {
          iR(MW.value + Vy(MW.value))
        },
        children: "+"
      })]
    }), NW && (0, AW.jsx)("span", {
      className: "WorldCodeAiAboutError",
      children: NW
    }), zR && !NW && (0, AW.jsx)("span", {
      className: "WorldCodeAiSettingDone",
      children: "\u2713 Changed in your code"
    })]
  })
}

function QN(WW) {
  let {
    files: RW,
    onWrite: MW,
    onTryIt: wW,
    onUndo: CW,
    before: zR
  } = WW;
  const bR = Object.entries(RW).flatMap((WW => {
    let [RW, MW] = WW;
    const wW = Uy(MW);
    return wW.length > 0 ? [{
      path: RW,
      fields: wW
    }] : []
  }));
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiHistory WorldCodeAiSettings",
    children: [(0, AW.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, AW.jsx)("span", {
        children: "Settings of my game"
      })
    }), 0 === bR.length ? (0, AW.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Your code has no settings yet. Settings are the numbers and messages at the top of your code, in CONFIG."
    }) : (0, AW.jsxs)(AW.Fragment, {
      children: [(0, AW.jsx)("p", {
        className: "WorldCodeAiAboutNote",
        children: "Changes go into your code straight away. Try them in your world."
      }), (wW || CW) && (0, AW.jsxs)("div", {
        className: "WorldCodeAiSettingActions",
        children: [wW && (0, AW.jsx)("button", {
          className: "WorldCodeAiPrimaryButton",
          onClick: wW,
          children: "Try it in my world"
        }), CW && (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: CW,
          children: "Undo these changes"
        })]
      }), bR.map((WW => {
        let {
          path: RW,
          fields: wW
        } = WW;
        return (0, AW.jsxs)("div", {
          children: [bR.length > 1 && (0, AW.jsx)("p", {
            className: "WorldCodeAiAboutHeading",
            children: RW
          }), (0, AW.jsx)("ul", {
            className: "WorldCodeAiSettingList",
            children: wW.map((WW => {
              const wW = void 0 === (null === zR || void 0 === zR ? void 0 : zR[RW]) ? void 0 : Uy(zR[RW]).find((RW => RW.key === WW.key));
              return (0, AW.jsx)(fN, {
                isChanged: !!zR && (null === wW || void 0 === wW ? void 0 : wW.value) !== WW.value,
                path: RW,
                field: WW,
                onWrite: MW
              }, WW.key)
            }))
          })]
        }, RW)
      }))]
    })]
  })
}
const re = /<tool_call\b|<function=|```|^\s*\{|<\|/m;
const ce = ["Reading your code", "Planning", "Writing", "Safety check"];

function XN(WW) {
  if (WW <= 1e4) return "It starts in a few seconds.";
  const RW = 10 * Math.ceil(WW / 1e4);
  return RW >= 60 ? "It starts in about a minute." : `It starts in about ${RW} seconds.`
}
var je = MW(5487);

function ke(WW, RW) {
  const MW = new Map;
  for (const CW of FC(WW)) {
    var wW;
    MW.set(CW, (null !== (wW = MW.get(CW)) && void 0 !== wW ? wW : 0) + 1)
  }
  return FC(RW).filter((WW => {
    var RW;
    const wW = null !== (RW = MW.get(WW)) && void 0 !== RW ? RW : 0;
    return MW.set(WW, wW - 1), wW <= 0
  }))
}

function ae(WW, RW) {
  return new Promise(((MW, wW) => {
    if (null !== RW && void 0 !== RW && RW.aborted) return void wW((0, je.e)(RW));
    const CW = setTimeout(MW, WW);
    null === RW || void 0 === RW || RW.addEventListener("abort", (() => {
      clearTimeout(CW), wW((0, je.e)(RW))
    }), {
      once: !0
    })
  }))
}
async function sN(WW, RW, MW, wW, CW) {
  const zR = new Set;
  for (; Date.now() < MW;) {
    var AW;
    const bR = YC.filter((WW => !zR.has(WW)));
    if (0 === bR.length) return null;
    const yR = VC.firstFreeAt(bR);
    if (yR > Date.now()) {
      if (yR > MW) return null;
      null === CW || void 0 === CW || CW(yR), await ae(yR - Date.now(), wW)
    }
    const NW = null !== (AW = bR.find((WW => VC.freeAt(WW) <= Date.now()))) && void 0 !== AW ? AW : bR[0],
      eW = await lz(NW, [{
        role: "user",
        content: WW
      }, {
        role: "assistant",
        content: RW
      }], wW);
    if (null === eW) zR.add(NW);
    else if ("busy" !== eW) return eW
  }
  return null
}
async function dN(WW, RW, MW, wW) {
  const CW = function(WW) {
    const RW = [WW.text, ...WW.question ? [WW.question.question, ...WW.question.choices] : [], ...WW.plan, ...WW.notes, ...WW.actions.flatMap((WW => "switchToWorldCode" === WW.kind && WW.request ? [WW.request] : [])), ...WW.lookups.flatMap((WW => Object.values(WW.args).filter((WW => void 0 !== WW)))), ...WW.changes.flatMap((WW => {
      var RW, MW;
      return [...null !== (RW = WW.why) && void 0 !== RW ? RW : [], ...(null !== (MW = WW.parts) && void 0 !== MW ? MW : []).map((WW => WW.why)), ...ke(WW.before, WW.after)]
    })), ...WW.worldCode.flatMap((WW => FC(WW)))];
    return RW.map((WW => WW.trim())).filter((WW => "" !== WW)).join("\n")
  }(RW);
  if ("" === CW) return "ok";
  const zR = Date.now() + 75e3;
  for (const AW of function(WW) {
      const RW = [];
      let MW = WW;
      for (; MW.length > JC;) {
        const WW = MW.lastIndexOf("\n", JC),
          wW = WW > 6e3 ? WW : JC;
        RW.push(MW.slice(0, wW)), MW = MW.slice(wW)
      }
      return [...RW, MW]
    }(CW)) {
    const RW = await lC(AW, (RW => sN(WW, RW, zR, MW, wW)));
    if ("ok" !== RW) return RW
  }
  return "ok"
}
const pN = "worldCodeAiAnswerTimes";

function hN(WW, RW) {
  var MW;
  const wW = RW && null !== (MW = WW[RW]) && void 0 !== MW ? MW : [],
    CW = wW.length >= 2 ? wW : Object.values(WW).flat();
  return CW.length < 2 ? "Usually under a minute." : `Usually ${function(WW){const RW=Math.max(5,5*Math.round(WW/5e3));if(RW<60)return`about ${RW} seconds`;const MW=10*Math.round(WW/1e4),wW=Math.floor(MW/60),CW=MW%60,zR=`${wW} ${1===wW?"minute":"minutes"}`;return 0===CW?`about ${zR}`:`about ${zR} ${CW} seconds`}(function(WW){const RW=[...WW].sort(((WW,RW)=>WW-RW)),MW=Math.floor(RW.length/2);return RW.length%2===1?RW[MW]:(RW[MW-1]+RW[MW])/2}(CW))}.`
}
var UN = MW(35090);

function EN(WW, RW) {
  const MW = WW.split("\n"),
    wW = RW.split("\n"),
    CW = wW.findIndex(((WW, RW) => WW !== MW[RW]));
  return (-1 === CW ? Math.min(MW.length, wW.length) - 1 : CW) + 1
}

function VN(WW, RW) {
  return WW.filter((WW => WW.path !== RW)).map((WW => ({
    path: WW.path,
    line: EN(WW.before, WW.after)
  })))
}

function me(WW) {
  return `Moving to ${WW} code\u2026`
}

function xe(WW) {
  return WW.fromLine === WW.toLine ? `line ${WW.fromLine}` : `lines ${WW.fromLine}-${WW.toLine}`
}

function ve(WW) {
  const RW = WW.text.length > 4e3 ? `${WW.text.slice(0,4e3)}\n...` : WW.text;
  return `The part I picked (${WW.path}, ${xe(WW)}):\n\`\`\`\n${RW}\n\`\`\``
}

function KN(WW) {
  let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  switch (WW.action) {
    case "explain":
      return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${ve(WW)}`;
    case "fix":
      return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${ve(WW)}`;
    case "change":
      return `${RW.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${ve(WW)}`
  }
}

function uN(WW) {
  let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  const MW = xe(WW);
  switch (WW.action) {
    case "explain":
      return `Explain ${MW}`;
    case "fix":
      return `Fix ${MW}`;
    case "change":
      return `${RW.trim()} (${MW})`
  }
}
var ON = MW(38861),
  nN = MW(3729),
  GN = MW(38842),
  LN = MW(38853),
  HN = MW(38844);

function DN(WW) {
  return WW ? "/worldCodeAiCheck.ts" : "/worldCodeAiCheck.js"
}
const qe = new Set([2345, 2559, 2353, 2554]),
  ZN = new Set([2304, 2552]),
  SN = new Set(["Date", "isNaN", "isFinite", "parseInt", "parseFloat"]),
  We = {};

function Re() {
  let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  const RW = WW ? "codeBlock" : arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "worldCodeTs" : "worldCode";
  let MW = We[RW];
  if (!MW) {
    const wW = DN("worldCodeTs" === RW),
      CW = new Map(WW ? [
        [wW, "\n"],
        ["/globals.d.ts", GN.d],
        ["/lib.d.ts", LN.b]
      ] : [
        [wW, "\n"],
        ["/node_modules/@bloxd/index.d.ts", nN.default],
        ["/globals.d.ts", HN.e],
        ["/lib.d.ts", LN.b]
      ]);
    MW = ON.h(ON.e(CW), [...CW.keys()], fW(), {
      allowJs: !0,
      checkJs: !0,
      noLib: !0,
      strict: !1,
      module: fW().ModuleKind.ESNext,
      moduleResolution: fW().ModuleResolutionKind.Bundler,
      target: fW().ScriptTarget.ES2015,
      allowUnreachableCode: !1,
      paths: {
        "@bloxd": ["/node_modules/@bloxd/index.d.ts"]
      }
    }), We[RW] = MW
  }
  return MW
}

function Me(WW, RW, MW) {
  let wW;
  const CW = zR => {
    RW < zR.getStart(WW) || RW >= zR.getEnd() || (fW().isCallExpression(zR) && (RW >= zR.expression.getEnd() || MW <= zR.expression.getEnd()) && (wW = zR), fW().forEachChild(zR, CW))
  };
  return CW(WW), wW && fW().isPropertyAccessExpression(wW.expression) && "api" === wW.expression.expression.getText(WW) ? wW : void 0
}

function we(WW, RW, MW) {
  let wW;
  const CW = zR => {
    RW < zR.getStart(WW) || MW > zR.getEnd() || (wW = zR, fW().forEachChild(zR, CW))
  };
  return CW(WW), wW
}

function Ce(WW) {
  return WW.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function zB(WW, RW) {
  const MW = Ce(WW);
  if (!MW) return;
  const wW = RW.find((WW => Ce(WW) === MW));
  if (wW) return `"${wW}"`;
  const CW = RW.filter((WW => {
    const RW = Ce(WW);
    return RW.includes(MW) || MW.includes(RW)
  })).sort(((WW, RW) => WW.length - RW.length));
  if (CW.length > 0) return CW.slice(0, 2).map((WW => `"${WW}"`)).join(" or ");
  const zR = new Set(WW.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  let AW;
  for (const bR of RW) {
    const WW = bR.toLowerCase().split(/[^a-z0-9]+/).filter((WW => zR.has(WW))).length;
    WW > 0 && (!AW || WW > AW.shared) && (AW = {
      option: bR,
      shared: WW
    })
  }
  return AW ? `"${AW.option}"` : void 0
}

function Ae(WW, RW) {
  var MW;
  const wW = WW.getPropertiesOfType(WW.getNonNullableType(RW)),
    CW = null !== (MW = wW.find((WW => "color" === WW.name))) && void 0 !== MW ? MW : wW[0];
  if (!CW) return;
  const zR = WW.typeToString(WW.getNonNullableType(WW.getTypeOfSymbol(CW))),
    AW = "color" === CW.name ? '"red"' : zR.includes("number") ? "1" : "boolean" === zR ? "true" : '"..."';
  return `{ ${CW.name}: ${AW} }`
}

function bB(WW) {
  return WW.isUnion() ? WW.types.every((WW => 0 !== (WW.flags & fW().TypeFlags.Object))) : 0 !== (WW.flags & fW().TypeFlags.Object)
}

function yB(WW) {
  for (let RW = WW; RW && !fW().isSourceFile(RW); RW = RW.parent)
    if (fW().isExpressionWithTypeArguments(RW)) {
      if (fW().isHeritageClause(RW.parent) && RW.parent.token === fW().SyntaxKind.ImplementsKeyword) return !0
    } else if (fW().isTypeNode(RW)) return !0;
  return !1
}

function Ne(WW) {
  var RW;
  let MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const CW = DN(wW && !MW),
    zR = Re(MW, wW);
  zR.updateFile(CW, WW || "\n");
  const AW = zR.getSourceFile(CW),
    bR = null === (RW = zR.languageService.getProgram()) || void 0 === RW ? void 0 : RW.getTypeChecker();
  if (!AW || !bR) return [];
  const yR = new Set,
    NW = zR.languageService.getSyntacticDiagnostics(CW)[0];
  if (void 0 !== (null === NW || void 0 === NW ? void 0 : NW.start)) {
    var eW, BW;
    const RW = AW.getLineAndCharacterOfPosition(NW.start).line,
      MW = null !== (eW = null === (BW = WW.split("\n")[RW]) || void 0 === BW ? void 0 : BW.trim()) && void 0 !== eW ? eW : "",
      wW = MW.length > 40 ? `${MW.slice(0,37)}...` : MW,
      CW = fW().flattenDiagnosticMessageText(NW.messageText, " ").replace(/\.$/, "");
    yR.add(`Line ${RW+1} stops all of this code from running: "${wW}" (${CW}).`)
  }
  const tR = new Set;
  for (const dW of zR.languageService.getSemanticDiagnostics(CW)) {
    var TW, gR, iR, YW, JW;
    if (7027 === dW.code && void 0 !== dW.start) {
      var PW, IW;
      const RW = AW.getLineAndCharacterOfPosition(dW.start).line,
        MW = null !== (PW = null === (IW = WW.split("\n")[RW]) || void 0 === IW ? void 0 : IW.trim()) && void 0 !== PW ? PW : "",
        wW = MW.length > 40 ? `${MW.slice(0,37)}...` : MW;
      yR.add(`Line ${RW+1} never runs: "${wW}" comes after a return, which ends the function first.`);
      continue
    }
    if (ZN.has(dW.code) && void 0 !== dW.start) {
      var oW, lW;
      const RW = dW.start + (null !== (oW = dW.length) && void 0 !== oW ? oW : 0),
        MW = WW.slice(dW.start, RW),
        wW = /^\s*\(/.test(WW.slice(RW)),
        CW = new RegExp(`^${MW.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(WW),
        zR = WW.slice(0, dW.start),
        bR = zR.lastIndexOf("/*") > zR.lastIndexOf("*/") || zR.slice(zR.lastIndexOf("\n")).includes("//"),
        eW = new RegExp(`//\\s*(?:const|let|var)\\s+${MW.replaceAll("$","\\$")}\\b`).test(WW),
        BW = new RegExp(`typeof\\s+${MW.replaceAll("$","\\$")}\\b`).test(WW);
      if (SN.has(MW) || tR.has(MW) || wW || CW || bR || eW || BW || NW || yB(we(AW, dW.start, RW))) continue;
      tR.add(MW);
      const TW = AW.getLineAndCharacterOfPosition(dW.start).line,
        gR = null === (lW = /Did you mean '([\w$]+)'\?/.exec(fW().flattenDiagnosticMessageText(dW.messageText, " "))) || void 0 === lW ? void 0 : lW[1];
      yR.add(gR ? `Line ${TW+1} uses "${MW}", which is never set, so it throws there. Did you mean "${gR}"?` : `Line ${TW+1} uses "${MW}", which isn't set there, so it throws when that line runs.`);
      continue
    }
    if (!qe.has(dW.code) || void 0 === dW.start) continue;
    const RW = fW().flattenDiagnosticMessageText(dW.messageText, " ");
    if (RW.includes("'string | number'")) continue;
    const MW = dW.start + (null !== (TW = dW.length) && void 0 !== TW ? TW : 0),
      wW = Me(AW, dW.start, MW);
    if (!wW) continue;
    const CW = wW.expression.getText(AW),
      zR = WW.slice(dW.start, MW).replace(/\s+/g, " "),
      eW = zR.length > 40 ? `${zR.slice(0,37)}...` : zR,
      BW = we(AW, dW.start, MW);
    if (2554 === dW.code) {
      var FW, QW, rR;
      const WW = RW.match(/Expected (\S+) arguments?, but got (\d+)/),
        MW = null !== (FW = null === WW || void 0 === WW || null === (QW = WW[1]) || void 0 === QW ? void 0 : QW.replace("-", " to ")) && void 0 !== FW ? FW : "a different number of",
        zR = Number(null !== (rR = null === WW || void 0 === WW ? void 0 : WW[2]) && void 0 !== rR ? rR : wW.arguments.length);
      yR.add(`${CW} needs ${MW} ${"1"===MW?"value":"values"}, but this line gives it ${zR}.`);
      continue
    }
    if (2353 === dW.code) {
      var cR, XW;
      const WW = null !== (cR = null === (XW = RW.match(/'([^']*)' does not exist/)) || void 0 === XW ? void 0 : XW[1]) && void 0 !== cR ? cR : eW,
        MW = null !== BW && void 0 !== BW && BW.parent && fW().isPropertyAssignment(BW.parent) ? BW.parent.parent : null === BW || void 0 === BW ? void 0 : BW.parent,
        wW = MW && fW().isObjectLiteralExpression(MW) ? bR.getContextualType(MW) : void 0,
        zR = zB(WW, wW ? bR.getPropertiesOfType(bR.getNonNullableType(wW)).map((WW => WW.name)) : []);
      yR.add(`${CW} has no setting called "${WW}".${zR?` Did you mean ${zR}?`:" Check Show Docs for its settings."}`);
      continue
    }
    const pW = BW && fW().isExpression(BW) ? bR.getContextualType(BW) : void 0,
      hW = (null !== (sW = pW) && void 0 !== sW && sW.isUnion() ? sW.types : sW ? [sW] : []).filter((WW => WW.isStringLiteral())).map((WW => WW.value));
    if (hW.length > 0) {
      var jR;
      const MW = null === (jR = /^CONFIG\.([\w$]+)$/.exec(zR)) || void 0 === jR ? void 0 : jR[1];
      if (void 0 !== MW) {
        var kR;
        const wW = null === (kR = new RegExp(`(?:^|[{,])\\s*${MW.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(WW)) || void 0 === kR ? void 0 : kR[2];
        if (void 0 !== wW && !hW.includes(wW)) {
          const WW = zB(wW, hW);
          yR.add(`${CW} has no ${RW.includes("keyof ")?"setting":"name"} called "${wW}" (${zR}).${WW?` Did you mean ${WW}?`:""}`)
        }
        continue
      }
      const wW = BW && fW().isStringLiteral(BW) ? zB(BW.text, hW) : void 0,
        AW = RW.includes("keyof ") ? "setting" : "name",
        bR = void 0 !== BW && fW().isStringLiteral(BW) ? `${CW} has no ${AW} called ${aR=eW,aR.startsWith('"')?aR:`"${aR}"`}.` : `${CW} can't take ${eW} there.`;
      yR.add(`${bR}${wW?` Did you mean ${wW}?`:" Check Show Docs for what it takes."}`);
      continue
    }
    if (pW && bB(bR.getNonNullableType(pW))) {
      const WW = Ae(bR, pW);
      yR.add(`${CW} needs settings in { } there${WW?`, like ${WW}`:""}, not ${eW}.`);
      continue
    }
    const UW = null === (gR = RW.match(/parameter of type '([^']*)'/)) || void 0 === gR ? void 0 : gR[1],
      EW = wW.arguments.findIndex((WW => WW.getStart(AW) <= dW.start && dW.start < WW.getEnd())),
      VW = null !== (iR = null === (YW = bR.getResolvedSignature(wW)) || void 0 === YW || null === (JW = YW.parameters[EW]) || void 0 === JW ? void 0 : JW.name) && void 0 !== iR ? iR : "that part",
      mR = BW ? bR.typeToString(bR.getTypeAtLocation(BW)) : "",
      xR = "number" === mR ? "a number" : "string" === mR ? "text" : "something else";
    "string" === UW ? yR.add(`${CW} needs ${VW} as text, but ${eW} is ${xR} here.`) : "number" === UW ? yR.add(`${CW} needs ${VW} as a number, but ${eW} is ${xR} here.`) : yR.add(`${CW} can't take ${eW} there. Check Show Docs for what it takes.`)
  }
  var aR, sW;
  return [...yR]
}

function ee(WW) {
  return WW.replace(/^Line \d+ /, "")
}

function Be(WW) {
  const RW = new Map;
  for (const CW of WW.split("\n")) {
    var MW;
    const WW = /^(?:async\s+)?function\s*\*?\s*(\w+)\s*\(|^(\w+)\s*=\s*(?:async\s*)?(?:\([^()]*\)\s*=>|function\b|\w+\s*=>)/.exec(CW),
      zR = null !== (MW = null === WW || void 0 === WW ? void 0 : WW[1]) && void 0 !== MW ? MW : null === WW || void 0 === WW ? void 0 : WW[2];
    var wW;
    if (zR) RW.set(zR, (null !== (wW = RW.get(zR)) && void 0 !== wW ? wW : 0) + 1)
  }
  return [...RW].flatMap((WW => {
    let [RW, MW] = WW;
    return MW > 1 ? [`${RW} is in the code ${MW} times, so only the last one runs. Put them together in one ${RW}.`] : []
  }))
}

function tB(WW, RW) {
  var MW, wW, CW, zR;
  const AW = RW.after.split("\n"),
    bR = WW => {
      var RW, MW;
      const wW = null !== (RW = null === (MW = AW[WW]) || void 0 === MW ? void 0 : MW.trim()) && void 0 !== RW ? RW : "";
      return "" === wW ? void 0 : {
        line: WW + 1,
        text: wW.length > 50 ? `${wW.slice(0,47)}...` : wW
      }
    },
    yR = /^Line (\d+) /.exec(WW);
  if (yR) return bR(Number(yR[1]) - 1);
  const NW = /^([\w$]+) is in the code \d+ times\b/.exec(WW);
  if (NW) {
    const WW = NW[1].replaceAll("$", "\\$"),
      RW = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${WW}\\s*\\(|^${WW}\\s*=`),
      MW = AW.findIndex((WW => RW.test(WW)));
    return MW >= 0 ? bR(MW) : void 0
  }
  const eW = null !== (MW = null === (wW = /"([^"]+)"/.exec(WW)) || void 0 === wW ? void 0 : wW[1]) && void 0 !== MW ? MW : null === (CW = /^api\.[\w$]+/.exec(WW)) || void 0 === CW ? void 0 : CW[0];
  if (!eW) return;
  const BW = new Set(RW.before.split("\n")),
    tR = AW.flatMap(((WW, RW) => WW.includes(eW) ? [RW] : [])),
    TW = null !== (zR = tR.find((WW => !BW.has(AW[WW])))) && void 0 !== zR ? zR : tR[0];
  return void 0 === TW ? void 0 : bR(TW)
}

function Te(WW) {
  return /^Line \d+ stops all of this code from running: "/.test(WW)
}

function gB(WW) {
  return /^Line \d+ (?:stops all of this code from running|never runs): "/.test(WW)
}

function iB(WW) {
  return WW.replace(/^Line \d+ (\w)/, ((WW, RW) => RW.toUpperCase()))
}
const Ye = new Set([fW().SyntaxKind.EqualsToken, fW().SyntaxKind.QuestionQuestionEqualsToken, fW().SyntaxKind.BarBarEqualsToken]);

function Je(WW) {
  const RW = fW().createSourceFile("worldCode.js", WW, fW().ScriptTarget.Latest, !0, fW().ScriptKind.JS),
    MW = RW.statements.flatMap((WW => fW().isVariableStatement(WW) ? WW.declarationList.declarations.filter((WW => fW().isIdentifier(WW.name) && "CONFIG" === WW.name.text)) : [])),
    wW = 1 === MW.length ? MW[0].initializer : void 0;
  if (!wW || !fW().isObjectLiteralExpression(wW)) return [];
  const CW = new Set;
  for (const yR of wW.properties) {
    if (!fW().isPropertyAssignment(yR) && !fW().isShorthandPropertyAssignment(yR) && !fW().isMethodDeclaration(yR)) return [];
    if (fW().isComputedPropertyName(yR.name)) return [];
    CW.add(yR.name.text)
  }
  const zR = [],
    AW = WW => {
      if (fW().isPropertyAccessExpression(WW) && fW().isIdentifier(WW.expression) && "CONFIG" === WW.expression.text) {
        const MW = WW.name.text,
          wW = WW.parent;
        fW().isBinaryExpression(wW) && wW.left === WW && Ye.has(wW.operatorToken.kind) ? CW.add(MW) : zR.push({
          name: MW,
          at: WW.getStart(RW)
        })
      }
      fW().forEachChild(WW, AW)
    };
  AW(RW);
  const bR = new Set;
  return zR.flatMap((WW => {
    if (CW.has(WW.name) || bR.has(WW.name)) return [];
    bR.add(WW.name);
    return [`Line ${RW.getLineAndCharacterOfPosition(WW.at).line+1} uses "CONFIG.${WW.name}", but CONFIG has no ${WW.name}, so it is undefined there. Add ${WW.name} to CONFIG.`]
  }))
}

function Pe(WW, RW) {
  var MW;
  const wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== RW.path && (0, TW.i)(RW.path)),
    CW = !0 === (null === (MW = RW.path) || void 0 === MW ? void 0 : MW.endsWith(".ts")),
    zR = RW => [...WW.codeWarnings(RW, wW), ...Ne(RW, wW, CW), ...Be(RW), ...Je(RW)],
    AW = new Set(zR(RW.before).map(ee));
  return zR(RW.after).filter((WW => !AW.has(ee(WW))))
}
const Ie = "Looking up";

function oe(WW) {
  return {
    ...WW,
    call: void 0
  }
}
const le = 15e3,
  Fe = new Map;
const fe = function(WW) {
    let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bloxd_worldCodeAi";
    if ("undefined" === typeof indexedDB) return WW;
    let MW = "unknown",
      wW = null;
    const CW = () => (wW ??= new Promise(((WW, MW) => {
        const CW = indexedDB.open(RW, 1);
        CW.onupgradeneeded = () => {
          CW.result.createObjectStore(gN)
        }, CW.onsuccess = () => {
          const RW = CW.result;
          RW.onversionchange = () => {
            RW.close(), wW = null
          }, RW.onclose = () => {
            wW = null
          }, WW(RW)
        }, CW.onerror = () => {
          var WW;
          MW(null !== (WW = CW.error) && void 0 !== WW ? WW : new Error("IndexedDB didn't open"))
        }, CW.onblocked = () => {
          MW(new Error("IndexedDB is blocked"))
        }
      })).catch((WW => {
        throw wW = null, WW
      })), wW),
      zR = async WW => {
        try {
          return (await CW()).transaction(gN, WW)
        } catch (RW) {
          if ("indexedDB" !== MW) throw RW;
          return wW = null, (await CW()).transaction(gN, WW)
        }
      }, AW = async () => {
        if ("unknown" === MW) try {
          await CW(), MW = "indexedDB"
        } catch {
          MW = "fallback"
        }
        return "indexedDB" === MW
      };
    return {
      getItem: async RW => {
        if (!await AW()) return WW.getItem(RW);
        const MW = await (async WW => {
          const RW = await zR("readonly"),
            MW = RW.objectStore(gN).get(WW);
          return await iN(RW), MW.result
        })(RW);
        return void 0 === MW ? WW.getItem(RW) : MW
      },
      setItem: async (RW, MW) => {
        if (!await AW()) return WW.setItem(RW, MW);
        try {
          const WW = await zR("readwrite");
          return WW.objectStore(gN).put(MW, RW), await iN(WW), !0
        } catch {
          return !1
        }
      },
      update: async (RW, MW) => {
        if (!await AW()) throw new Error("No IndexedDB: read and write localforage instead");
        const wW = await WW.getItem(RW).catch((() => null)),
          CW = await zR("readwrite"),
          bR = CW.objectStore(gN);
        let yR;
        const NW = bR.get(RW);
        return NW.onsuccess = () => {
          yR = MW(void 0 === NW.result ? wW : NW.result), bR.put(yR, RW)
        }, await iN(CW), yR
      }
    }
  }(Ty.e),
  Qe = new class {
    constructor(WW, RW) {
      this.store = WW, this.signal = RW, this.kept = new Map
    }
    watch(WW, RW) {
      var MW, wW;
      return null !== (MW = null === (wW = this.signal) || void 0 === wW ? void 0 : wW.listen((MW => {
        if (MW !== WW) return;
        const wW = this.load(WW).then((async RW => oy(RW, await this.read(WW))));
        this.kept.set(WW, wW), wW.then(RW)
      }))) && void 0 !== MW ? MW : () => {}
    }
    list(WW) {
      return this.load(WW)
    }
    async add(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now(),
        CW = arguments.length > 4 ? arguments[4] : void 0;
      const zR = (WW, zR) => {
          const AW = oy(WW, zR),
            bR = AW[AW.length - 1];
          if (bR && function(WW, RW) {
              const MW = Object.keys(WW);
              return MW.length === Object.keys(RW).length && MW.every((MW => WW[MW] === RW[MW]))
            }(bR.files, MW)) return AW;
          const yR = Math.max(wW, ...AW.map((WW => WW.id + 1)));
          return [...AW, {
            id: yR,
            at: wW,
            label: RW,
            ...CW ? {
              did: CW
            } : {},
            files: {
              ...MW
            }
          }].slice(-30)
        },
        AW = this.load(WW).then((async RW => this.save(WW, (WW => zR(RW, WW)))));
      this.kept.set(WW, AW.then((WW => {
        let {
          snapshots: RW
        } = WW;
        return RW
      })));
      const {
        snapshots: bR,
        isSaved: yR
      } = await AW;
      var NW;
      yR && (null === (NW = this.signal) || void 0 === NW || NW.post(WW));
      return bR
    }
    async relabel(WW, RW, MW) {
      const wW = this.load(WW).then((async wW => this.save(WW, (WW => oy(wW, WW).map((WW => WW.id === RW ? {
        ...WW,
        label: MW
      } : WW))))));
      this.kept.set(WW, wW.then((WW => {
        let {
          snapshots: RW
        } = WW;
        return RW
      })));
      const {
        snapshots: CW,
        isSaved: zR
      } = await wW;
      var AW;
      zR && (null === (AW = this.signal) || void 0 === AW || AW.post(WW));
      return CW
    }
    async save(WW, RW) {
      if (this.store.update) try {
        return {
          snapshots: await this.store.update(this.storeKey(WW), (WW => RW(Iy(WW) ? WW : null))),
          isSaved: !0
        }
      } catch {}
      const MW = RW(await this.read(WW));
      return {
        snapshots: MW,
        isSaved: await this.store.setItem(this.storeKey(WW), MW).catch((() => !1))
      }
    }
    read(WW) {
      return this.store.getItem(this.storeKey(WW)).then((WW => Iy(WW) ? WW : null)).catch((() => null))
    }
    load(WW) {
      let RW = this.kept.get(WW);
      return RW || (RW = this.store.getItem(this.storeKey(WW)).then((WW => Iy(WW) ? WW : [])).catch((() => [])), this.kept.set(WW, RW)), RW
    }
    storeKey(WW) {
      return `worldCodeAiHistory:${WW}`
    }
  }(fe, Py("bloxd-worldCodeAiHistory")),
  rB = new class {
    constructor(WW, RW) {
      this.store = WW, this.signal = RW, this.kept = new Map
    }
    watch(WW, RW) {
      var MW, wW;
      return null !== (MW = null === (wW = this.signal) || void 0 === wW ? void 0 : wW.listen((MW => {
        if (MW !== WW) return;
        const wW = this.load(WW).then((async RW => {
          var MW;
          return null !== (MW = await this.read(WW)) && void 0 !== MW ? MW : RW
        }));
        this.kept.set(WW, wW), wW.then(RW)
      }))) && void 0 !== MW ? MW : () => {}
    }
    list(WW) {
      return this.load(WW)
    }
    add(WW, RW) {
      return this.update(WW, (WW => WW.includes(RW) || WW.length >= 8 ? WW : [...WW, RW]))
    }
    remove(WW, RW) {
      return this.update(WW, (WW => WW.filter((WW => WW !== RW))))
    }
    async update(WW, RW) {
      var MW;
      const wW = this.load(WW).then((async MW => {
        var wW;
        if (this.store.update) try {
          return await this.store.update(this.storeKey(WW), (WW => RW(zM(WW) ? WW.slice(0, 8) : MW)))
        } catch {}
        const CW = RW(null !== (wW = await this.read(WW)) && void 0 !== wW ? wW : MW);
        return await this.store.setItem(this.storeKey(WW), CW).catch((() => !1)), CW
      }));
      this.kept.set(WW, wW);
      const CW = await wW;
      return null === (MW = this.signal) || void 0 === MW || MW.post(WW), CW
    }
    read(WW) {
      return this.store.getItem(this.storeKey(WW)).then((WW => zM(WW) ? WW.slice(0, 8) : null)).catch((() => null))
    }
    load(WW) {
      let RW = this.kept.get(WW);
      return RW || (RW = this.read(WW).then((WW => null !== WW && void 0 !== WW ? WW : [])), this.kept.set(WW, RW)), RW
    }
    storeKey(WW) {
      return `worldCodeAiNotes:${WW}`
    }
  }(fe, Py("bloxd-worldCodeAiNotes"));
const cB = ["Next in line", "2nd in line", "3rd in line"];
let Xe = null;

function jB() {
  if (!Xe) {
    var WW, RW, MW, wW;
    const CW = WW => tR.b.find((RW => RW.id === WW)),
      zR = WW => {
        var RW, MW;
        return null !== (RW = null === (MW = CW(WW)) || void 0 === MW ? void 0 : MW.content) && void 0 !== RW ? RW : ""
      };
    Xe = new eb({
      apiReference: zR("apiReference"),
      callbacks: zR("callbacks"),
      clientOptions: zR("clientOptions"),
      snippets: zR("snippets"),
      howTo: zR("howTo"),
      itemNames: null !== (WW = null === (RW = CW("itemNames")) || void 0 === RW ? void 0 : RW.raw) && void 0 !== WW ? WW : "",
      blockNames: null !== (MW = null === (wW = CW("blockNames")) || void 0 === wW ? void 0 : wW.raw) && void 0 !== MW ? MW : "",
      mobSettings: zR("mobSettings")
    })
  }
  return Xe
}
const kB = ["Welcome players when they join", "Give everyone a sword when they join", "Make a /spawn command", "Show a timer on the screen"],
  aB = ["Give me a diamond sword", "Teleport me onto this block", "Make me jump really high", "Tell everyone I clicked it"],
  se = ["Explain these changes", "Make it simpler"],
  de = ["Make the change"],
  pe = ["Explain how it works", "Add a sound or effect", "Make it harder to play"],
  he = ["It didn't work: nothing happened in my world.", "It didn't work: an error showed up.", "It didn't work: it did something different from what I asked."];

function Ue(WW) {
  let {
    requests: RW,
    onPick: MW
  } = WW;
  const CW = (0, wW.useRef)(null);
  var zR;
  return zR = CW, (0, wW.useLayoutEffect)((() => {
    const WW = zR.current,
      RW = null === WW || void 0 === WW ? void 0 : WW.closest(".WorldCodeAiMessages");
    if (!WW || !RW) return;
    const MW = () => {
      const MW = RW.getBoundingClientRect().bottom;
      for (const RW of Array.from(WW.children)) {
        const WW = RW.getBoundingClientRect();
        RW.style.visibility = WW.top < MW && WW.bottom > MW + 1 ? "hidden" : ""
      }
    };
    MW(), RW.addEventListener("scroll", MW, {
      passive: !0
    });
    const wW = "function" === typeof ResizeObserver ? new ResizeObserver(MW) : null;
    return null === wW || void 0 === wW || wW.observe(RW), null === wW || void 0 === wW || wW.observe(WW), () => {
      RW.removeEventListener("scroll", MW), null === wW || void 0 === wW || wW.disconnect()
    }
  }), [zR]), (0, AW.jsx)("div", {
    ref: CW,
    className: "WorldCodeAiChips WorldCodeAiFollowUps",
    children: RW.map((WW => (0, wW.createElement)("button", {
      ...jy.h,
      key: WW,
      className: "WorldCodeAiChip",
      onClick: () => {
        MW(WW)
      }
    }, function(WW) {
      const RW = WW.replace(/^It didn't work: /, "").replace(/\.$/, "");
      return RW.charAt(0).toUpperCase() + RW.slice(1)
    }(WW))))
  })
}

function Ee(WW) {
  let {
    useFree: RW,
    retryOf: MW,
    isAutoFix: wW,
    lookupOf: CW
  } = WW;
  return !0 !== RW && (void 0 !== MW || !0 !== wW && void 0 === CW)
}

function Ve(WW, RW, MW) {
  return `They asked: "${WW}"\nYour last answer wrote this for ${RW}, but you hadn't seen that file, so it didn't go in. ${RW} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${MW.replace(/\s*$/,"")}\n\`\`\``
}

function mB() {
  return "The world's blocks can't be seen from here."
}

function xB() {
  return "The world can't be seen from here."
}
const vB = 1e4,
  Ke = "I can only help with your game's code. Try asking about something in your world.";

function ue(WW) {
  return WW ? "Apply this change first, then press Switch to World Code." : "Apply this change first, then ask me again to go to World Code."
}
const Oe = 1500;

function ne(WW, RW) {
  var MW;
  return Object.entries(null !== (MW = WW.leftFiles) && void 0 !== MW ? MW : {}).every((WW => {
    var MW;
    let [wW, CW] = WW;
    return (null !== (MW = RW[wW]) && void 0 !== MW ? MW : "") === CW
  }))
}
const Ge = "Check your code: go through my request part by part and play it in your head as each player, from the start: what do they see and when, and what happens the first time, the last time, and with things that shouldn't count? Only something that stops my request working is wrong: keep everything else as it is (numbers, starting values, how it works) and add no new rules or limits. If anything is wrong, send the fixed file, after playing the normal case through once more with your change. If it's all right, say in one sentence that you played it through and found no mistakes, that they should still try it in their world because you can miss things, and send no file.";

function Le(WW) {
  var RW, MW, CW, yR, NW, eW, BW, tR;
  let {
    entry: TW,
    isOutOfDate: gR = !1,
    canEdit: iR,
    onApply: YW,
    onUndo: JW,
    onTryIt: PW,
    isLatest: IW,
    canUndo: oW,
    onFixWarnings: lW,
    onCheck: FW,
    busy: fW,
    checkPicked: QW,
    onPickedChange: rR,
    request: cR,
    elsewhere: XW,
    defaultOpen: jR
  } = WW;
  const kR = "offered" === TW.status && gR ? "stale" : TW.status,
    [aR, sW] = (0, wW.useState)(jR),
    [dW, pW] = (0, wW.useState)(!1),
    hW = null !== (RW = TW.warnings) && void 0 !== RW ? RW : [],
    UW = IW && ("offered" === kR || "applied" === kR) && iR && hW.length > 0 && !TW.warningsSentBack,
    EW = "applied" === kR,
    VW = null !== (MW = null === (CW = TW.swappedTo) || void 0 === CW ? void 0 : CW[0]) && void 0 !== MW ? MW : UW ? null !== (yR = null === (NW = /"([^"]+)"/.exec(hW[0])) || void 0 === NW ? void 0 : NW[1]) && void 0 !== yR ? yR : null === (eW = /^api\.[\w$]+/.exec(hW[0])) || void 0 === eW ? void 0 : eW[0] : void 0,
    mR = hW.every((WW => /never true|no block is ever called that/.test(WW))),
    xR = (0, wW.useMemo)((() => {
      var WW;
      const [RW] = TW.changes;
      return new Map((null !== (WW = TW.warnings) && void 0 !== WW ? WW : []).map((WW => [WW, 1 === TW.changes.length && RW ? tB(WW, RW) : void 0])))
    }), [TW.warnings, TW.changes]),
    vR = 1 === hW.length ? xR.get(hW[0]) : void 0,
    [KW, uW] = (0, wW.useState)(new Set),
    OW = KW.size > 0;
  (0, wW.useEffect)((() => {
    null === rR || void 0 === rR || rR(OW)
  }), [OW, rR]), (0, wW.useEffect)((() => {
    uW((WW => 0 === WW.size ? WW : new Set))
  }), [TW.changes]);
  const nW = "offered" === kR && iR && TW.id >= 0,
    GW = (0, wW.useMemo)((() => new Map(TW.changes.map((WW => [WW.path, ge(WW, cR)])))), [TW.changes, cR]),
    LW = [...GW.values()].reduce(((WW, RW) => WW + RW.length), 0),
    HW = nW && LW >= 2,
    [DW, qR] = (0, wW.useState)(!1),
    ZW = "applied" === kR && LW >= 2,
    SW = LW - KW.size,
    WR = (0, wW.useMemo)((() => {
      if (0 !== KW.size) return TW.changes.flatMap((WW => {
        var RW;
        const MW = new Set((null !== (RW = GW.get(WW.path)) && void 0 !== RW ? RW : []).filter((RW => !KW.has(`${WW.path}:${RW.index}`))).map((WW => WW.index))),
          wW = function(WW, RW) {
            const MW = CN(WW.before, WW.after),
              wW = MW.flatMap((WW => "same" === WW.kind ? [WW.text] : RW.has(WW.index) ? WW.added : WW.removed));
            if (0 === wW.length) return "";
            const CW = (MW.every((WW => "same" === WW.kind || RW.has(WW.index))) ? WW.after : WW.before).endsWith("\n") ? "\n" : "";
            return `${wW.join("\n")}${CW}`
          }(WW, MW);
        return wW === WW.before ? [] : [{
          ...WW,
          after: wW
        }]
      }))
    }), [TW.changes, GW, KW]),
    RR = (0, wW.useMemo)((() => WR && QW ? QW(WR) : []), [WR, QW]);
  (0, wW.useEffect)((() => {
    "applied" === kR && sW(!1)
  }), [kR]);
  const MR = !!TW.editedInPlace;
  (0, wW.useEffect)((() => {
    MR || "offered" !== TW.status || sW(!0)
  }), [MR, TW.status]);
  const wR = TW.changes.map((WW => WW.path)).join(", "),
    CR = !MR || UW || RR.length > 0 || "undone" === kR || "stale" === kR;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiToolCard",
    children: [(0, AW.jsx)(bR, {
      className: "WorldCodeAiChangeLog",
      title: MR ? `Editing code: ${wR}` : `Code change: ${wR}`,
      isCalm: !0,
      isElsewhere: !!XW,
      isOpen: aR,
      onToggle: sW,
      children: (0, AW.jsx)("div", {
        className: "WorldCodeAiChanges",
        children: TW.changes.map((WW => {
          var RW, MW;
          const {
            added: wW,
            removed: CW
          } = function(WW) {
            let RW = 0,
              MW = 0;
            for (const wW of dw(WW.before, WW.after)) "added" === wW.kind ? RW++ : "removed" === wW.kind && MW++;
            return {
              added: RW,
              removed: MW
            }
          }(WR ? null !== (RW = WR.find((RW => RW.path === WW.path))) && void 0 !== RW ? RW : {
            ...WW,
            after: WW.before
          } : WW), zR = null !== (MW = GW.get(WW.path)) && void 0 !== MW ? MW : [], bR = "offered" !== kR && "applied" !== kR || "" === WW.before ? [] : function(WW, RW) {
            const MW = uy(RW);
            return [...uy(WW)].filter((WW => !MW.has(WW)))
          }(WW.before, WW.after);
          return (0, AW.jsxs)("div", {
            className: "WorldCodeAiChange",
            children: [(0, AW.jsxs)("div", {
              className: "WorldCodeAiChangeHeader",
              children: [(0, AW.jsx)("span", {
                className: "WorldCodeAiChangePath",
                children: WW.path
              }), wW > 0 && (0, AW.jsx)("span", {
                className: "WorldCodeAiAdded",
                children: 1 === wW ? "1 line added" : `${wW} lines added`
              }), CW > 0 && (0, AW.jsxs)("span", {
                className: "WorldCodeAiRemoved",
                children: [CW, " removed"]
              })]
            }), HW && (0, AW.jsx)("ul", {
              className: "WorldCodeAiHunks",
              children: zR.map((RW => {
                const MW = `${WW.path}:${RW.index}`,
                  wW = [RW.added.length > 0 ? `+${RW.added.length}` : "", RW.removed.length > 0 ? `\u2212${RW.removed.length}` : ""].filter(Boolean).join(" "),
                  CW = [RW.added.length > 0 ? `${RW.added.length} ${1===RW.added.length?"line":"lines"} added` : "", RW.removed.length > 0 ? `${RW.removed.length} taken out` : ""].filter(Boolean).join(", ");
                return (0, AW.jsx)("li", {
                  children: (0, AW.jsxs)("label", {
                    children: [(0, AW.jsx)("input", {
                      type: "checkbox",
                      checked: !KW.has(MW),
                      onChange: WW => {
                        const RW = new Set(KW);
                        WW.target.checked ? RW.delete(MW) : RW.add(MW), uW(RW)
                      }
                    }), (0, AW.jsxs)("span", {
                      children: [RW.also && (0, AW.jsx)("span", {
                        className: "WorldCodeAiHunkAlso",
                        title: "You didn't ask for this. Untick it to leave it out.",
                        children: "adds" === RW.also ? "Also adds" : "changes" === RW.also ? "Also changes" : "Also takes out"
                      }), RW.label, RW.codeNames.length > 0 && (0, AW.jsx)("code", {
                        className: "WorldCodeAiHunkCode",
                        children: RW.codeNames.join(", ")
                      }), RW.detail && (0, AW.jsx)("span", {
                        className: "WorldCodeAiHunkDetail",
                        children: RW.detail
                      })]
                    }), (0, AW.jsx)("span", {
                      className: "WorldCodeAiHunkCount",
                      title: CW,
                      "aria-label": CW,
                      children: `${wW} ${RW.added.length+RW.removed.length===1?"line":"lines"}`
                    })]
                  })
                }, MW)
              }))
            }), HW && (zR.some((WW => void 0 !== WW.also)) ? (0, AW.jsx)("p", {
              className: "WorldCodeAiHint WorldCodeAiHunksHint",
              children: 'You didn\'t ask for the parts marked "Also". Untick one to leave it out.'
            }) : zR.some((WW => WW.takesOut.length > 0 || 0 === WW.added.length)) && (0, AW.jsx)("p", {
              className: "WorldCodeAiHint WorldCodeAiHunksHint",
              children: "Untick a part to keep that bit of your code as it is."
            })), ZW && zR.length >= 2 && (0, AW.jsx)("button", {
              className: "WorldCodeAiLinkButton WorldCodeAiPartsToggle",
              onClick: () => {
                qR(!DW)
              },
              children: DW ? `Hide the ${zR.length} parts` : `Show the ${zR.length} parts that went in`
            }), ZW && DW && (0, AW.jsx)("ul", {
              className: "WorldCodeAiHunks WorldCodeAiHunks-done",
              children: zR.map((RW => (0, AW.jsx)("li", {
                children: (0, AW.jsxs)("span", {
                  children: [RW.label, RW.codeNames.length > 0 && (0, AW.jsx)("code", {
                    className: "WorldCodeAiHunkCode",
                    children: RW.codeNames.join(", ")
                  }), RW.detail && (0, AW.jsx)("span", {
                    className: "WorldCodeAiHunkDetail",
                    children: RW.detail
                  })]
                })
              }, `${WW.path}:${RW.index}`)))
            }), WW.why && !HW && !(ZW && DW) && (0, AW.jsx)("ul", {
              className: "WorldCodeAiChangeWhy",
              children: WW.why.map((WW => (0, AW.jsx)("li", {
                children: WW.charAt(0).toUpperCase() + WW.slice(1)
              }, WW)))
            }), bR.length > 0 && !(HW && bR.every((WW => zR.some((RW => RW.takesOut.includes(WW)))))) && (0, AW.jsxs)("p", {
              className: "WorldCodeAiChangeTakenOut",
              children: ["applied" === kR ? "It took out " : "It also takes out ", bR.slice(0, 6).map((WW => {
                var RW;
                const MW = null !== (RW = Zy(WW)) && void 0 !== RW ? RW : eN(WW);
                return MW.charAt(0).toLowerCase() + MW.slice(1)
              })).join(", "), bR.length > 6 ? ` and ${bR.length-6} more` : "", ".", " ", (0, AW.jsx)("code", {
                className: "WorldCodeAiHunkCode",
                children: bR.slice(0, 6).join(", ")
              })]
            }), (0, AW.jsx)(Jy, {
              change: WW,
              marked: VW
            })]
          }, WW.path)
        }))
      })
    }), CR && (0, AW.jsxs)("div", {
      className: zR()("WorldCodeAiChangeActions", IW && "WorldCodeAiChangeActions-sticky"),
      children: [RR.length > 0 && (0, AW.jsxs)("div", {
        className: "WorldCodeAiWarning",
        children: [(0, AW.jsx)("p", {
          className: "WorldCodeAiWarningTitle",
          children: "Leaving that part out breaks this:"
        }), (0, AW.jsx)("p", {
          children: RR[0]
        })]
      }), UW && (0, AW.jsxs)("div", {
        className: "WorldCodeAiWarning",
        children: [(0, AW.jsx)("p", {
          className: "WorldCodeAiWarningTitle",
          children: mR ? 1 === hW.length ? `${vR?`Line ${vR.line}`:"This line"} ${EW?"will":"would"} never work:` : `${hW.length} lines ${EW?"will":"would"} never work:` : 1 === hW.length ? `${vR?`Line ${vR.line}`:"This line"} ${EW?"will":"would"} break:` : `${hW.length} lines ${EW?"will":"would"} break:`
        }), (dW ? hW : hW.slice(0, 1)).map((WW => {
          const RW = xR.get(WW);
          return (0, AW.jsxs)(wW.Fragment, {
            children: [RW && !gB(WW) && (0, AW.jsxs)("p", {
              className: "WorldCodeAiWarningWhere",
              children: [hW.length > 1 && `Line ${RW.line}: `, (0, AW.jsx)("code", {
                children: RW.text
              })]
            }), (0, AW.jsx)("p", {
              children: !RW || 1 !== hW.length && gB(WW) ? WW : iB(WW)
            })]
          }, WW)
        })), !dW && hW.length > 1 && (0, AW.jsxs)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: () => {
            pW(!0)
          },
          children: ["Show ", hW.length - 1, " more"]
        })]
      }), UW && (0, AW.jsx)("button", {
        ...fb(null !== (BW = TW.warnings) && void 0 !== BW ? BW : []) ? {} : jy.h,
        className: "WorldCodeAiPrimaryButton",
        disabled: fW,
        onClick: lW,
        children: 1 === (null === (tR = TW.warnings) || void 0 === tR ? void 0 : tR.length) ? "Fix this line" : "Fix these lines"
      }), "offered" === kR && iR && !MR && (0, AW.jsx)("button", {
        className: UW ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
        disabled: HW && 0 === SW || !!XW && fW,
        title: XW && fW ? "You can apply it once the AI is done." : void 0,
        onClick: () => {
          YW(WR)
        },
        children: XW ? XW.codeBlock ? "Apply in that code block" : "Apply in World Code" : HW && SW < LW ? `Apply ${SW} of ${LW} changes` : UW ? "Apply anyway" : "Apply to my code"
      }), "offered" === kR && !iR && (0, AW.jsx)("span", {
        className: "WorldCodeAiHint",
        children: null !== XW && void 0 !== XW && XW.codeBlock ? "You can't edit that code block." : "You can't edit this world's code."
      }), "applied" === kR && !MR && (0, AW.jsxs)("div", {
        className: "WorldCodeAiAppliedRow",
        children: [(0, AW.jsx)("span", {
          className: "WorldCodeAiAppliedNote",
          children: "Applied."
        }), IW && (0, AW.jsx)("button", {
          className: "WorldCodeAiPrimaryButton",
          onClick: PW,
          children: "Try it in my world"
        }), IW && (0, AW.jsx)("button", {
          ...jy.h,
          className: "WorldCodeAiSecondaryButton",
          disabled: fW,
          onClick: FW,
          children: "Check for mistakes"
        }), oW && (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiUndoButton",
          onClick: JW,
          children: "Undo"
        })]
      }), "applied" === kR && !MR && !oW && !XW && (0, AW.jsx)("span", {
        className: "WorldCodeAiHint WorldCodeAiUndoOff",
        children: "You've changed this code since, so Undo is off. History can still go back."
      }), "undone" === kR && (0, AW.jsx)("span", {
        className: "WorldCodeAiHint",
        children: TW.wentBack ? "You went back, so this change is gone." : "Undone."
      }), "stale" === kR && (0, AW.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "Your code changed since this answer, so ask again to get an up-to-date change."
      })]
    })]
  })
}

function He(WW) {
  let {
    target: RW,
    isOpen: MW
  } = WW;
  return (0, AW.jsxs)("div", {
    className: zR()("WorldCodeAiTargetLabel", MW && "WorldCodeAiTargetLabel-open"),
    children: [(0, AW.jsx)("span", {
      children: RW.label
    }), MW && (0, AW.jsx)("span", {
      className: "WorldCodeAiTargetLabelNote",
      children: "Open now"
    })]
  })
}

function De(WW) {
  let {
    code: RW,
    onSwitch: MW,
    defaultOpen: CW,
    isElsewhere: zR
  } = WW;
  const [yR, NW] = (0, wW.useState)(!1), eW = (0, wW.useMemo)((() => ({
    path: "World Code",
    before: "",
    after: RW
  })), [RW]);
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiToolCard WorldCodeAiWorldCodePart",
    children: [(0, AW.jsx)(bR, {
      className: "WorldCodeAiChangeLog",
      title: "Code for World Code",
      isCalm: !0,
      isElsewhere: zR,
      defaultOpen: CW,
      children: (0, AW.jsx)("div", {
        className: "WorldCodeAiChanges",
        children: (0, AW.jsx)(Jy, {
          change: eW
        })
      })
    }), (0, AW.jsxs)("div", {
      className: "WorldCodeAiChangeActions",
      children: [(0, AW.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "A code block only runs when clicked, so this part goes in World Code."
      }), MW && (0, AW.jsx)("button", {
        className: "WorldCodeAiPrimaryButton",
        onClick: MW,
        children: "Switch to World Code"
      }), (0, AW.jsx)("button", {
        className: "WorldCodeAiLinkButton",
        onClick: () => {
          navigator.clipboard.writeText(RW).then((() => {
            NW(!0)
          })).catch((() => {}))
        },
        children: yR ? "Copied" : "Copy"
      })]
    })]
  })
}

function qB(WW) {
  var RW;
  let {
    failed: MW,
    nothingChanged: wW,
    onRetry: CW,
    defaultOpen: zR,
    isElsewhere: yR
  } = WW;
  const NW = null === (RW = MW.find((WW => null !== WW.closest))) || void 0 === RW ? void 0 : RW.closest;
  return (0, AW.jsxs)("div", {
    className: "WorldCodeAiFailedEdits",
    children: [(0, AW.jsxs)(bR, {
      title: wW ? "That change didn't work, so your code is the same." : 1 === MW.length ? "One part didn't work, so it's left out." : `${MW.length} parts didn't work, so they're left out.`,
      defaultOpen: zR,
      isElsewhere: yR,
      children: [NW && (0, AW.jsxs)(AW.Fragment, {
        children: [(0, AW.jsx)("p", {
          children: "The closest bit in your code:"
        }), (0, AW.jsx)("pre", {
          className: "WorldCodeAiFailedLines",
          children: NW.text.split("\n").length > 4 ? `${NW.text.split("\n").slice(0,4).join("\n")}\n\u2026` : NW.text
        })]
      }), !NW && (0, AW.jsx)("p", {
        children: "Try asking for it again, maybe in a different way."
      })]
    }), CW && (0, AW.jsxs)("div", {
      className: "WorldCodeAiFailedRetry",
      children: [(0, AW.jsx)("button", {
        ...jy.h,
        className: "WorldCodeAiSecondaryButton",
        onClick: CW,
        children: "Ask the AI to try again"
      }), (0, AW.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "It asks the AI once more."
      })]
    })]
  })
}

function Ze(WW) {
  let {
    lookups: RW,
    words: MW,
    defaultOpen: wW,
    isElsewhere: CW
  } = WW;
  return (0, AW.jsxs)(bR, {
    title: Ie,
    isCalm: !0,
    isElsewhere: CW,
    defaultOpen: wW,
    children: [MW && (0, AW.jsx)("p", {
      children: MW
    }), (0, AW.jsx)("p", {
      children: "It looks at:"
    }), (0, AW.jsx)("ul", {
      className: "WorldCodeAiLookupList",
      children: RW.map(((WW, RW) => (0, AW.jsx)("li", {
        children: bz(WW)
      }, RW)))
    })]
  })
}

function Se(WW) {
  return `Add this to my World Code:\n\`\`\`js\n${WW.join("\n").replace(/\s*$/,"\n")}\`\`\``
}

function WB(WW) {
  const RW = Math.ceil(WW / 1e3);
  return `${Math.floor(RW/60)}:${String(RW%60).padStart(2,"0")}`
}

function RB(WW) {
  return "waiting" === WW.phase ? "You're next" : WW.playingThrough && "writing" !== WW.phase && "screening" !== WW.phase ? "Playing your code through as each player\u2026" : null
}

function MB(WW) {
  var RW;
  let {
    busy: MW
  } = WW;
  const wW = (CW = MW.phase, bR = null !== (RW = MW.reasoningChars) && void 0 !== RW ? RW : 0, "screening" === CW ? 3 : "writing" === CW ? 2 : "thinking" === CW && bR >= 400 ? 1 : 0);
  var CW, bR;
  return (0, AW.jsx)("ol", {
    className: "WorldCodeAiSteps",
    children: ce.map(((WW, RW) => (0, AW.jsx)("li", {
      className: zR()(RW < wW && "WorldCodeAiStep-done", RW === wW && "WorldCodeAiStep-current"),
      children: RW < wW ? `\u2713 ${WW}` : WW
    }, WW)))
  })
}
const wB = (0, wW.memo)((function(WW) {
    var RW, MW, CW, tR, JW, IW, oW, lW, FW, fW, QW, rR, cR;
    let {
      files: XW,
      activePath: jR,
      canEdit: kR,
      errors: aR,
      errorCount: sW,
      applyFiles: dW,
      submit: pW,
      testRun: hW,
      close: UW,
      goToLine: EW,
      target: VW,
      chatKey: mR,
      historyKey: xR,
      openWorldCode: vR,
      readWorldCode: KW,
      viewChunk: uW,
      viewGameState: OW,
      openTarget: nW,
      isLoaded: GW = !0,
      draft: LW,
      onDraftUsed: HW,
      selection: DW,
      onSelectionUsed: qR
    } = WW;
    const ZW = VW.codeBlock,
      WR = VW.key,
      RR = function(WW) {
        let RW = Fe.get(WW);
        return RW || (RW = {
          entries: [],
          nextId: 1,
          dismissedErrorCounts: new Map
        }, Fe.set(WW, RW)), RW
      }(mR),
      [wR, CR] = (0, wW.useState)((() => RR.entries)),
      zM = (0, wW.useRef)(!0),
      AR = (0, wW.useCallback)((WW => {
        const RW = "function" === typeof WW ? WW : () => WW;
        zM.current ? CR(RW) : RR.setEntries ? RR.setEntries(RW) : RR.entries = RW(RR.entries)
      }), [RR]);
    (0, wW.useEffect)((() => (zM.current = !0, RR.setEntries = CR, () => {
      zM.current = !1, RR.setEntries === CR && (RR.setEntries = void 0)
    })), [RR]);
    const [bM, yM] = (0, wW.useState)(null), [NR, eR] = (0, wW.useState)([]), [BR, tM] = (0, wW.useState)(!1), [TR, gM] = (0, wW.useState)([]), [iM, YR] = (0, wW.useState)(!1), [JR, PR] = (0, wW.useState)(!1), [IR, oR] = (0, wW.useState)(null), [lR, FR] = (0, wW.useState)(!1), fR = (0, wW.useRef)("settings"), [QR, rM] = (0, wW.useState)(null), cM = (0, wW.useRef)(function() {
      try {
        var WW;
        const RW = JSON.parse(null !== (WW = localStorage.getItem(pN)) && void 0 !== WW ? WW : "{}");
        return "object" !== typeof RW || null === RW ? {} : Object.fromEntries(Object.entries(RW).filter((WW => {
          let [, RW] = WW;
          return Array.isArray(RW) && RW.every((WW => "number" === typeof WW))
        })))
      } catch {
        return {}
      }
    }()), [XR, jM] = (0, wW.useState)(my), kM = (0, wW.useRef)(XR);
    kM.current = XR;
    const aM = XR && kR,
      sR = (0, wW.useRef)(!1),
      [dR, pR] = (0, wW.useState)(null),
      [hR, UR] = (0, wW.useState)(""),
      [ER, VR] = (0, wW.useState)([]),
      [mM, xM] = (0, wW.useState)(null),
      [vM, KR] = (0, wW.useState)(new Set),
      [uR, OR] = (0, wW.useState)(null !== (RW = RR.dismissedErrorCounts.get(VW.key)) && void 0 !== RW ? RW : 0),
      [nR, GR] = (0, wW.useState)(!1),
      [LR, HR] = (0, wW.useState)(Date.now),
      DR = (0, wW.useRef)(null),
      qM = (0, wW.useRef)(null),
      ZR = (0, wW.useRef)([]),
      [SR, WM] = (0, wW.useState)(0),
      [RM, MM] = (0, wW.useState)(null),
      CM = (0, Yy.o)(mR),
      zw = null !== RM && void 0 !== RM ? RM : null === CM || void 0 === CM ? void 0 : CM.entryId,
      AM = wR.find((WW => WW.id === zw)),
      bw = (null === AM || void 0 === AM ? void 0 : AM.target.key) === VW.key && (null !== RM || void 0 === (null === CM || void 0 === CM ? void 0 : CM.endedAt)),
      yw = (WW, RW) => {
        const MW = setTimeout((() => {
          ZR.current = ZR.current.filter((WW => WW !== MW)), WM(ZR.current.length), WW()
        }), RW);
        ZR.current.push(MW), WM(ZR.current.length)
      },
      NM = () => {
        for (const WW of ZR.current) clearTimeout(WW);
        ZR.current = [], WM(0), MM(null)
      },
      eM = (0, wW.useRef)(null),
      BM = (0, wW.useRef)(null),
      tw = () => RR.nextId++,
      TM = (0, wW.useRef)(0),
      gw = (0, wW.useRef)(XW);
    gw.current = XW;
    const iw = (0, wW.useCallback)((WW => {
        null === WW || void 0 === WW || WW.focus()
      }), []),
      YM = (0, wW.useRef)(sW);
    YM.current = sW;
    const JM = (0, wW.useRef)(ER);
    JM.current = ER;
    const PM = (0, wW.useRef)(wR.length);
    (0, wW.useEffect)((() => {
      const WW = eM.current;
      if (!WW) return;
      if (BR) return void WW.scrollTo({
        top: 0
      });
      if (IR) return;
      const RW = wR[wR.length - 1],
        MW = (null === RW || void 0 === RW ? void 0 : RW.target.key) === WR;
      wR.length > PM.current && "assistant" === (null === RW || void 0 === RW ? void 0 : RW.role) && !RW.isNotice && MW && (RR.heldAnswerId = RW.id), PM.current = wR.length;
      const wW = void 0 !== RW && MW && RW.id === RR.heldAnswerId && "offered" === RW.status && void 0 === RW.trial,
        CW = WW.querySelectorAll(".WorldCodeAiEntry"),
        zR = CW[CW.length - 1];
      if (wW && zR) {
        var AW;
        const MW = WW.getBoundingClientRect().top,
          wW = RW => WW.scrollTop + RW.getBoundingClientRect().top - MW;
        let CW = wW(zR);
        const bR = zR.querySelector(".WorldCodeAiDiff-added, .WorldCodeAiDiff-removed"),
          yR = zR.querySelector(".WorldCodeAiChangeHeader"),
          NW = zR.querySelector(".WorldCodeAiChangeActions-sticky");
        if (null !== (AW = RW.warnings) && void 0 !== AW && AW.length && bR && yR && NW) {
          const RW = zR.querySelector(".WorldCodeAiDiff-marked"),
            MW = bR.getBoundingClientRect().height,
            AW = RW ? wW(RW) + 2 * MW + NW.offsetHeight - WW.clientHeight : wW(bR) + 3 * MW + NW.offsetHeight - WW.clientHeight;
          CW = Math.max(CW, Math.min(AW, RW ? wW(RW) - MW : wW(yR)))
        } else if (yR && NW) {
          const RW = zR.querySelectorAll(".WorldCodeAiChangeWhy li"),
            MW = RW[RW.length - 1];
          if (MW) {
            const RW = wW(MW) + MW.getBoundingClientRect().height + NW.offsetHeight - WW.clientHeight;
            CW = Math.max(CW, Math.min(RW, wW(yR)))
          }
        }
        WW.scrollTo({
          top: CW
        })
      } else WW.scrollTo({
        top: WW.scrollHeight
      })
    }), [RR, wR, bM, BR, WR, IR]), (0, wW.useEffect)((() => {
      RR.entries = wR, RR.dismissedErrorCounts.set(VW.key, uR)
    }), [RR, wR, uR, VW.key]), (0, wW.useEffect)((() => () => {
      var WW;
      null === (WW = DR.current) || void 0 === WW || WW.abort(), NM()
    }), []), (0, wW.useEffect)((() => {
      var WW;
      LW && (LW.send ? GW && (null === HW || void 0 === HW || HW(), uM.current(LW.text, LW.text, {
        check: !1,
        useFree: !1
      })) : (UR(LW.text), null === (WW = BM.current) || void 0 === WW || WW.focus(), null === HW || void 0 === HW || HW()))
    }), [LW, HW, GW]), (0, wW.useEffect)((() => function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      const RW = setTimeout((() => {
        Re(WW)
      }), 1e3);
      return () => {
        clearTimeout(RW)
      }
    }(ZW)), [ZW]), (0, wW.useEffect)((() => {
      let WW = !0;
      Qe.list(xR).then((RW => {
        WW && eR(RW)
      })).catch((WW => {
        console.error("World Code AI: couldn't read the version history", WW)
      }));
      const RW = Qe.watch(xR, eR);
      return () => {
        WW = !1, RW()
      }
    }), [xR]), (0, wW.useEffect)((() => {
      let WW = !0;
      rB.list(xR).then((RW => {
        WW && gM(RW)
      })).catch((WW => {
        console.error("World Code AI: couldn't read the notes about the game", WW)
      }));
      const RW = rB.watch(xR, gM);
      return () => {
        WW = !1, RW()
      }
    }), [xR]);
    const IM = null !== (MW = null === (CW = wR.findLast((WW => WW.target.key === VW.key))) || void 0 === CW ? void 0 : CW.retryAt) && void 0 !== MW ? MW : 0,
      oM = tA(LR),
      lM = null !== bM || IM > LR || oM > LR;
    (0, wW.useEffect)((() => {
      if (!lM) return;
      const WW = setInterval((() => {
        HR(Date.now())
      }), 1e3);
      return () => {
        clearInterval(WW)
      }
    }), [lM]);
    const FM = sW > uR && aR.length > 0 ? aR[aR.length - 1] : null,
      fM = (0, wW.useMemo)((() => FM ? function(WW, RW) {
        var MW;
        let wW;
        for (const [CW, zR] of Object.entries(RW)) {
          const {
            text: RW,
            line: MW
          } = Bb(WW, zR);
          if (void 0 !== MW) {
            if (wW) return Bb(WW);
            wW = {
              text: RW,
              path: CW,
              line: MW
            }
          }
        }
        return null !== (MW = wW) && void 0 !== MW ? MW : Bb(WW)
      }(FM, XW) : {
        text: ""
      }), [FM, XW]),
      QM = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VW;
        const MW = tw();
        return tM(!1), YR(!1), AR((wW => [...wW, {
          ...WW,
          id: MW,
          target: RW
        }])), MW
      },
      rw = WW => WW.target.key === VW.key,
      cwW = (WW, RW) => {
        AR((MW => MW.map((MW => MW.id === WW ? {
          ...MW,
          ...RW
        } : MW))))
      },
      XM = (WW, RW) => {
        cwW(WW, {
          status: RW
        })
      },
      jw = FA();

    function kw(WW) {
      return !!kb(lA.getState()) && (uA().then((RW => {
        RW || WW()
      })), !0)
    }
    const aw = WW => {
        !lR && kw(WW) || WW()
      },
      sM = async function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const {
          check: wW = void 0 === RW,
          about: CW = (null !== RW && void 0 !== RW ? RW : WW.trim()),
          planStep: zR,
          wordsOnly: AW = !1,
          asked: bR,
          failedEdits: yR,
          isAutoFix: NW = !1,
          autoFixRound: eW = 0,
          useFree: BW,
          retryOf: tR,
          continueFrom: gR,
          lookups: iR = [],
          lookupRound: JW = 0,
          worldCodeFiles: PW,
          viewedPaths: IW = [],
          lookupOf: oW,
          insertsInto: lW
        } = MW, FW = WW.trim();
        if ("" === FW || bM) return;
        const fW = null !== BW && void 0 !== BW ? BW : lR && !NW && void 0 === tR && void 0 === gR;
        if (!fW && Ee(MW) && kw((() => {
            UM.current(WW, RW, MW)
          }))) return;
        const QW = null !== lW && void 0 !== lW ? lW : jR;
        void 0 === BW && fW && FR(!1), NM();
        const rR = eA.activeKey(),
          cR = fW ? null : rR,
          XW = null !== cR,
          sW = null !== rR && fW,
          dW = !cR && !fW && lA.isAnswering(),
          pW = void 0 === tR ? -1 : ((WW, RW) => {
            for (let MW = WW.findIndex((WW => WW.id === RW)) - 1; MW >= 0; MW--)
              if ("user" === WW[MW].role) return MW;
            return -1
          })(wR, tR),
          hW = (pW < 0 ? wR : wR.slice(0, pW)).filter((WW => !WW.isNotice && !WW.leftOut && rw(WW))).slice(-4).map((WW => ({
            role: WW.role,
            text: WW.question ? `${WW.text}\n${WW.question.question}` : WW.text
          }))),
          UW = void 0 === RW,
          VW = void 0 === bR ? void 0 === RW ? FW : void 0 : null !== bR && void 0 !== bR ? bR : void 0,
          mR = void 0 !== tR && void 0 !== gR,
          xR = mR ? wR.find((WW => WW.id === tR)) : void 0;
        let KW;
        if (mR) KW = pW >= 0 ? wR[pW].id : -1;
        else if (void 0 !== oW && pW < 0) KW = oW;
        else if (pW >= 0) KW = wR[pW].id, AR((WW => WW.filter((WW => WW.id !== tR)).map((WW => WW.id === KW ? {
          ...WW,
          isNotice: void 0
        } : WW))));
        else {
          const WW = NW && eW > 0;
          KW = QM({
            role: "user",
            text: WW ? FW : null !== RW && void 0 !== RW ? RW : FW,
            changes: [],
            status: "offered",
            about: CW,
            planStep: zR,
            ...VW ? {
              asked: VW
            } : {},
            ...WW ? {
              logTitle: "The AI's code had an error, so it was sent back to the AI to fix"
            } : {}
          })
        }
        const uW = {
            lookups: iR,
            lookupRound: JW,
            worldCodeFiles: PW,
            viewedPaths: IW
          },
          OW = {
            retry: FW,
            retryShown: RW,
            retryOptions: {
              check: wW,
              about: CW,
              planStep: zR,
              wordsOnly: AW,
              useFree: fW,
              asked: bR,
              failedEdits: yR,
              isAutoFix: NW,
              autoFixRound: eW,
              insertsInto: lW,
              ...uW
            }
          },
          GW = new AbortController;
        DR.current = GW;
        const LW = kM.current ? "direct" : "offer";
        var HW, DW, qR, SW, WR;
        try {
          var RR;
          const WW = Date.now(),
            MW = FW.startsWith(Ge),
            bR = null === cR || void 0 === cR ? void 0 : cR.model.name;
          HR(WW), yM(dW ? {
            phase: "thinking",
            startedAt: WW,
            playingThrough: MW,
            isSuperBot: !0
          } : {
            phase: "checking",
            startedAt: WW,
            playingThrough: MW,
            keyModel: bR
          });
          const BW = WW => {
              cwW(KW, {
                isNotice: !0
              }), QM({
                role: "assistant",
                text: "personalInfo" === WW ? "Please don't share personal details like names, addresses or schools. Ask again without them." : Ke,
                changes: [],
                status: "offered",
                isNotice: !0
              })
            },
            rR = async () => {
              if (!wW && !cR) return FW;
              const WW = Date.now();
              HR(WW), yM({
                phase: "checking",
                startedAt: WW,
                playingThrough: MW,
                keyModel: bR
              });
              const {
                safety: RW,
                request: CW
              } = await async function(WW, RW) {
                let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const wW = await oz(WW, RW, MW),
                  CW = TC(WW);
                if ("unsafe" !== wW || CW === WW) return {
                  safety: wW,
                  request: WW
                };
                const zR = await oz(CW, RW, !0);
                return "unchecked" === zR ? {
                  safety: wW,
                  request: WW
                } : {
                  safety: zR,
                  request: CW
                }
              }(FW, GW.signal, XW);
              return "unchecked" === RW && cR ? (QM({
                role: "assistant",
                text: "",
                changes: [],
                status: "offered",
                isNotice: !0,
                ...OW,
                keyNotice: {
                  notice: "unchecked",
                  model: cR.model.name,
                  company: aA(cR.provider, cR.baseUrl, !0)
                }
              }), null) : "personalInfo" === RW || "unsafe" === RW ? (BW(RW), null) : CW
            };
          let jR = dW ? FW : await rR();
          if (null === jR) return;
          const VW = PW ? {
            ...gw.current,
            ...PW
          } : gw.current;
          let bM = {
            request: jR,
            files: VW,
            activePath: QW,
            errors: aR.slice(-5),
            history: hW,
            codeBlock: ZW,
            failedEdits: yR,
            canAsk: UW,
            lookups: iR,
            canLookUp: JW < 3 && !AW,
            canChangeWorldCode: Ww(LW),
            looksUpDocs: XW,
            about: ZW ? void 0 : {
              notes: TR,
              outline: (WR = MR(VW, new Set(jB().callbackNames())), [WR.callbacks.length > 0 ? `Callbacks: ${WR.callbacks.join(", ")}` : "", WR.commands.length > 0 ? `Commands: ${WR.commands.join(", ")}` : "", WR.functions.length > 0 ? `Functions: ${WR.functions.join(", ")}` : ""].filter((WW => "" !== WW)).join("\n")),
              canRemember: TR.length < 8
            }
          };
          const eR = new Map,
            BR = WW => {
              var RW;
              const MW = `${WW.format} ${WW.nativeTools}`,
                wW = null !== (RW = eR.get(MW)) && void 0 !== RW ? RW : zz(jB(), bM, WW);
              return eR.set(MW, wW), wW
            },
            tM = WW => BR(nC(WW));
          let gM = wC(bM),
            iM = 0,
            YR = null;
          const JR = async () => {
            const RW = tA();
            var wW, CW;
            RW > Date.now() && (HR(Date.now()), yM({
              phase: "waiting",
              startedAt: WW,
              until: RW,
              playingThrough: MW
            }), await (wW = RW - Date.now(), CW = GW.signal, new Promise(((WW, RW) => {
              const MW = setTimeout(WW, wW);
              CW.addEventListener("abort", (() => {
                clearTimeout(MW), RW(new DOMException("The World Code AI request was stopped", "AbortError"))
              }), {
                once: !0
              })
            }))));
            const zR = Date.now();
            return HR(zR), yM({
              phase: "thinking",
              startedAt: zR,
              playingThrough: MW
            }), async function(WW) {
              var RW, MW;
              let wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const CW = Date.now(),
                zR = new AbortController,
                AW = () => {
                  zR.abort()
                };
              null !== (RW = wW.signal) && void 0 !== RW && RW.aborted && AW(), null === (MW = wW.signal) || void 0 === MW || MW.addEventListener("abort", AW, {
                once: !0
              });
              const bR = (0, YW.d)(3e4, zR.signal);
              let yR = !1;
              try {
                const RW = await bA(uC, Iz(GC(WW, uC)), bR.signal, (WW => {
                  if (!yR) {
                    if (Jz(WW.answer)) return yR = !0, void AW();
                    var RW;
                    (!0 === WW.isCalling || Pz(WW.answer)) && (null === (RW = wW.onProgress) || void 0 === RW || RW.call(wW, WW))
                  }
                }), wW.tools);
                if (Az(RW) && !Jz(RW.answer)) {
                  const MW = !1 !== wW.canNudge ? await Yz(uC, Iz(GC(WW, uC)), RW, zR.signal, (WW => {
                    if (!yR) {
                      if (Jz(WW.answer)) return yR = !0, void AW();
                      var RW;
                      (!0 === WW.isCalling || Pz(WW.answer)) && (null === (RW = wW.onProgress) || void 0 === RW || RW.call(wW, WW))
                    }
                  }), wW.tools, 3e4) : RW;
                  if (!Jz(MW.answer)) return {
                    ...MW,
                    ms: Date.now() - CW
                  }
                }
              } catch (BW) {
                var NW;
                if (null !== (NW = wW.signal) && void 0 !== NW && NW.aborted) throw BW;
                yR || console.warn(`World Code AI: ${uC.name} couldn't be reached`, BW)
              } finally {
                var eW;
                bR.clear(), null === (eW = wW.signal) || void 0 === eW || eW.removeEventListener("abort", AW)
              }
              return {
                ...await Tz(WW, wW),
                ms: Date.now() - CW
              }
            }(tM, {
              signal: GW.signal,
              tools: gM,
              canNudge: !AW,
              onProgress: WW => {
                const RW = Date.now(),
                  wW = WW.model !== YR;
                if (YR = WW.model, !wW && RW - iM < 150) return;
                iM = RW;
                const CW = function(WW, RW) {
                  const MW = function(WW) {
                      return WW.replace(/<think>[\s\S]*?(?:<\/think>|$)/g, "")
                    }(WW),
                    wW = re.exec(MW);
                  let CW = wW ? MW.slice(0, wW.index) : MW;
                  CW = CW.replace(/<[\w_]*$/, "").trim();
                  const zR = MW.trimEnd(),
                    AW = wM(MW, RW).filter((WW => !/^<(?:tool_call|function=)/.test(WW.source) || /<\/(?:tool_call|invoke|function)>\s*$/.test(WW.source) || !zR.endsWith(WW.source.trimEnd()))),
                    bR = AW.flatMap((WW => {
                      var RW;
                      const MW = null === (RW = WW.args.why) || void 0 === RW ? void 0 : RW.trim();
                      return MW ? [MW.charAt(0).toUpperCase() + MW.slice(1)] : []
                    }));
                  return {
                    text: CW,
                    whys: [...new Set(bR)],
                    isWritingCode: null !== wW,
                    calls: AW.length
                  }
                }(WW.answer, OC(WW.model));
                yM({
                  phase: "" !== CW.text || CW.isWritingCode ? "writing" : "thinking",
                  startedAt: zR,
                  playingThrough: MW,
                  reasoningChars: WW.reasoningChars,
                  model: WW.model
                })
              }
            })
          }, PR = (SW = null === (RR = lA.getState().status) || void 0 === RR ? void 0 : RR.provider, YA[null !== SW && void 0 !== SW ? SW : "ovh"]), IR = WW => {
            qM.current = null, cwW(KW, {
              isNotice: !0
            }), QM({
              role: "assistant",
              text: "unsafe" === WW ? "That answer didn't pass Bloxd's safety check, so it isn't shown. Try again, or ask in a different way." : "Bloxd's safety check couldn't look at that answer, so it isn't shown. Try again in a minute.",
              changes: [],
              status: "offered",
              isNotice: !0,
              ...OW
            })
          }, oR = async () => {
            var WW;
            const RW = Date.now();
            HR(RW), yM({
              phase: "thinking",
              startedAt: RW,
              playingThrough: MW,
              isSuperBot: !0
            });
            const CW = pW < 0 ? wR : wR.slice(0, pW),
              zR = CW.findLastIndex((WW => "assistant" === WW.role && !WW.isNotice && !WW.leftOut && rw(WW))),
              AW = CW[zR],
              bR = CW.findIndex((WW => WW.id === oW)),
              NW = CW.slice(0, Math.max(0, zR)).findLastIndex((WW => "user" === WW.role)),
              eW = void 0 === tR && (void 0 === oW || bR >= 0 && bR < zR && bR >= NW) && "object" === typeof(null === AW || void 0 === AW ? void 0 : AW.answeredBy) && !0 === AW.answeredBy.isSuperBot,
              TW = nC(PR),
              gR = zz(jB(), bM, TW, {
                docsInTurn: !0
              }),
              iR = wC(bM, TW.format),
              YW = "deepseek" === TW.format ? {
                carried: zz(jB(), bM, TW, {
                  docsInTurn: !0,
                  carried: !0
                }).at(-1),
                toolResults: [...(null !== yR && void 0 !== yR ? yR : []).flatMap((WW => WW.call ? [{
                  ...WW.call,
                  text: mC(WW)
                }] : [])), ...(null !== (WW = bM.lookups) && void 0 !== WW ? WW : []).flatMap((WW => WW.call ? [{
                  ...WW.call,
                  text: `${WW.about}:\n${WW.text}`
                }] : []))].slice(-20)
              } : {};
            let JW;
            try {
              JW = await async function(WW, RW, MW, wW, CW) {
                var zR;
                let {
                  carried: AW,
                  toolResults: bR,
                  request: yR,
                  code: NW
                } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                const eW = Date.now(),
                  BW = "system" === (null === (zR = RW[0]) || void 0 === zR ? void 0 : zR.role) ? RW[0].content : "",
                  tR = JSON.stringify(zA(MW)),
                  TW = null !== wW && wW.system === BW && wW.toolsJson === tR,
                  gR = null !== AW && void 0 !== AW ? AW : RW[RW.length - 1],
                  iR = bR && bR.length > 0 ? {
                    toolResults: bR
                  } : {},
                  YW = {
                    ...yR ? {
                      request: yR
                    } : {},
                    ...NW ? {
                      code: NW
                    } : {}
                  };
                let JW = await hA(pA(TW ? {
                  chatId: wW.chatId,
                  messages: [gR],
                  ...iR,
                  ...YW
                } : {
                  messages: RW,
                  toolsJson: tR,
                  ...YW
                }), CW);
                if ("newChat" === JW.outcome && TW && (JW = await hA(pA({
                    messages: RW,
                    toolsJson: tR,
                    ...YW
                  }), CW)), "status" in JW && lA.setStatus(JW.status), "refused" === JW.outcome) return {
                  kind: "refused",
                  safety: JW.safety
                };
                if ("blocked" === JW.outcome) return {
                  kind: "blocked",
                  safety: JW.safety
                };
                if ("answered" !== JW.outcome) return {
                  kind: "newChat" === JW.outcome ? "failed" : JW.outcome
                };
                const PW = yA(WW, JW.answer, JW.reasoning, JW.toolCalls, JW.isCutShort);
                return null === PW ? {
                  kind: "failed"
                } : {
                  kind: "answered",
                  reply: {
                    ...PW,
                    ms: Date.now() - eW
                  },
                  chat: {
                    chatId: JW.chatId,
                    system: BW,
                    toolsJson: tR
                  }
                }
              }(PR, gR, iR, eW ? qM.current : null, GW.signal, {
                ...YW,
                ...wW ? {
                  request: FW
                } : {},
                code: WC(bM, TW.format)
              })
            } catch (lW) {
              if (GW.signal.aborted) throw lW;
              console.warn("AI Helper: Super Bot.xd couldn't be reached", lW), JW = {
                kind: "failed"
              }
            }
            if ("answered" === JW.kind) return qM.current = JW.chat, JW.reply;
            if ("refused" === JW.kind) return BW(JW.safety), "stopped";
            if ("blocked" === JW.kind) return IR(JW.safety), "stopped";
            qM.current = null, QR = "free";
            const PW = lA.getState(),
              IW = "unavailable" === JW.kind && kb(PW);
            return IW && uA(), {
              fallbackNotice: IW ? "You don't have any Super Bot.xd usage left, so Bot.xd is answering this one." : dA(JW.kind, PW.status)
            }
          };
          let lR, FR, fR, QR = fW || eA.getState().keys.length > 0 ? "free" : void 0,
            rM = !1;
          if (cR) {
            const RW = {
              format: Rz(cR.model.callFormat),
              nativeTools: !0 === cR.model.nativeTools
            };
            FR = RW.format;
            const wW = [...BR(RW)];
            var CR;
            if (void 0 !== gR) "" !== gR && wW.push({
              role: "assistant",
              content: gR
            }), wW.push({
              role: "user",
              content: (qR = null === xR || void 0 === xR || null === (CR = xR.cutShort) || void 0 === CR ? void 0 : CR.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before it." + (qR ? ` Your ${qR.name} call${qR.path?` for ${qR.path}`:""} was cut off part way and didn't come through: make that call again in full.` : ""))
            });
            yM({
              phase: "thinking",
              startedAt: WW,
              playingThrough: MW,
              keyModel: bR
            });
            const CW = RW => {
              yM({
                phase: "" === RW.answer ? "thinking" : "writing",
                startedAt: WW,
                playingThrough: MW,
                keyModel: bR
              })
            };
            try {
              const WW = await TA(cR, wW, {
                signal: GW.signal,
                onProgress: CW,
                tools: gM,
                continueFrom: gR
              });
              lR = WW, QR = {
                model: cR.name ? `${cR.name} \xb7 ${cR.model.name}` : cR.model.name
              }, WW.isCutShort && (fR = function(WW, RW, MW) {
                return {
                  request: MW,
                  written: RW.written,
                  cutCall: RW.cutCall,
                  keyId: WW.id,
                  modelId: WW.model.id
                }
              }(cR, WW, FW))
            } catch (NR) {
              if (!(NR instanceof sz) || GW.signal.aborted) throw NR;
              return void dM(NR, cR, KW, OW)
            }
          } else {
            const WW = dW ? await oR() : null;
            if ("stopped" === WW) return;
            if (WW && !("fallbackNotice" in WW)) {
              var zM;
              lR = WW, FR = null !== (zM = PR.callFormat) && void 0 !== zM ? zM : "simple", QR = {
                model: ib,
                isSuperBot: !0
              }, rM = !0
            } else {
              if (dW) {
                const WW = await rR();
                if (null === WW) return;
                WW !== jR && (jR = WW, bM = {
                  ...bM,
                  request: WW
                }, gM = wC(bM))
              }
              let RW;
              WW && "fallbackNotice" in WW && QM({
                role: "assistant",
                text: WW.fallbackNotice,
                changes: [],
                status: "offered",
                isNotice: !0
              });
              try {
                RW = await JR()
              } catch (NR) {
                if (!(NR instanceof ZC && "busy" === NR.reason)) throw NR;
                RW = await JR()
              }
              cM.current = function(WW, RW, MW) {
                  var wW;
                  return !Number.isFinite(MW) || MW <= 0 ? WW : {
                    ...WW,
                    [RW]: [...null !== (wW = WW[RW]) && void 0 !== wW ? wW : [], MW].slice(-10)
                  }
                }(cM.current, RW.model, RW.ms),
                function(WW) {
                  try {
                    localStorage.setItem(pN, JSON.stringify(WW))
                  } catch {}
                }(cM.current), lR = RW, FR = OC(RW.model)
            }
          }
          const XR = jB(),
            jM = sw(lR.answer, FR, VW, QW, XR.callbackNames(), ZW ? TW.e : void 0, LW, new Set([Zw(VW, QW, ZW), QW, ...IW, ...Object.keys(null !== PW && void 0 !== PW ? PW : {})].filter((WW => null !== WW))), XR.realName),
            kM = AW ? {
              ...jM,
              changes: [],
              failedEdits: [],
              inPlace: !1,
              worldCode: [],
              plan: [],
              actions: []
            } : jM;
          if (!rM) {
            const WW = Date.now();
            HR(WW), yM({
              phase: "screening",
              startedAt: WW,
              playingThrough: MW,
              keyModel: bR
            });
            const RW = await dN(jR, kM, GW.signal, (RW => {
              HR(Date.now()), yM({
                phase: "screening",
                startedAt: WW,
                playingThrough: MW,
                keyModel: bR,
                until: RW
              })
            }));
            if ("ok" !== RW) return void IR(RW)
          }
          const aM = function(WW) {
              let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZW;
              return WW.flatMap((WW => Pe(XR, WW, RW && !(0, TW.i)(WW.path))))
            },
            sR = aM(kM.changes),
            dR = "direct" === LW ? function(WW) {
              return WW.flatMap((WW => {
                var RW;
                return null !== (RW = Fb(WW)) && void 0 !== RW ? RW : []
              }))
            }(sR) : [],
            pR = dR.length > 0 ? {
              ...kM,
              changes: kM.changes.map((WW => ({
                ...WW,
                after: cy(WW.after, dR)
              })))
            } : kM,
            hR = pR.changes.filter((WW => ZW && (0, TW.i)(WW.path))).map((WW => ({
              ...WW,
              path: (0, TW.j)(WW.path)
            }))),
            UR = pR.changes.filter((WW => !ZW || !(0, TW.i)(WW.path))),
            ER = hR.length > 0 ? {
              ...pR,
              changes: UR,
              inPlace: pR.inPlace && UR.length > 0
            } : pR,
            mM = hR.length > 0 || dR.length > 0 ? aM(ER.changes) : sR,
            xM = mM.filter(Te),
            vM = ER.inPlace && kR && xM.length > 0 && eW < 3 && !lR.isCutShort && !lR.hasCallsFromReasoning,
            KR = "direct" === LW && kR,
            uR = ER.failedEdits.filter((WW => "unread" === WW.reason)),
            OR = !KR || AW || void 0 !== lW || ZW ? [] : uR.flatMap((WW => null !== WW.path && void 0 !== WW.code ? [{
              path: WW.path,
              code: WW.code
            }] : [])),
            nR = WW => "unread" === WW.reason && OR.some((RW => RW.path === WW.path)),
            GR = ER.failedEdits.filter((WW => !nR(WW))),
            LR = uR.filter((WW => !nR(WW))),
            DR = Ww(LW) && ER.worldCode.length > 0 && !AW && 0 === hR.length,
            ZR = JW < 3 && !AW && !lR.isCutShort,
            SR = new Set([...gM.map((WW => WW.name)), ...LR.length > 0 ? ["view_file", "view_world_code"] : []]),
            WM = !ZR || OR.length > 0 || hR.length > 0 || vM ? [] : ER.lookups.filter((WW => SR.has(WW.name))),
            RM = {
              request: jR,
              shown: RW,
              userEntryId: KW,
              options: {
                check: !1,
                about: CW,
                planStep: zR,
                wordsOnly: AW,
                useFree: fW,
                isAutoFix: NW,
                autoFixRound: eW,
                failedEdits: [...(null !== yR && void 0 !== yR ? yR : []).map(oe), ...LR],
                ...uW,
                lookupRound: JW + 1,
                lookupOf: KW,
                insertsInto: lW
              }
            },
            MM = 0 === ER.changes.length && 0 === ER.worldCode.length,
            CM = WM.length > 0 && ("direct" === LW || XW && MM && WM.every(eC)),
            zw = CM && MM && 0 === ER.notes.length,
            AM = UW ? ER.question : null,
            bw = lR.isCutShort ? ER.text.replace(/(<tool_call|<function=|<\|channel\||\{\s*"jsonrpc")[\s\S]*$/, "").trim() : ER.text,
            NM = lR.isCutShort && !fR ? "\n\nThe answer got too long and was cut off, so part of it is missing. Try asking for one thing at a time." : "",
            eM = GR.length > 0 && ER.changes.length > 0 && !lR.isCutShort ? "\n\nPart of this answer couldn't go in, so it isn't in the change. Ask again if something is missing." : "",
            BM = () => ER.changes.length > 0 ? "Here's a change for your code." : hR.length > 0 ? "This changes your World Code." : ER.worldCode.length > 0 ? "This needs World Code." : OR.length > 0 ? `I'll put it into ${OR.map((WW=>WW.path)).join(" and ")}.` : AM ? "Quick question before I build it:" : ER.plan.length > 0 ? "That's a big one, so here's a plan to build it a step at a time." : WM.length > 0 ? `I'll look at ${function(WW){var RW;const MW=WW.map(bz);return MW.length<=1?null!==(RW=MW[0])&&void 0!==RW?RW:"":`${MW.slice(0,-1).join(", ")} and ${MW[MW.length-1]}`}(WM)} first.` : ER.notes.length > 0 ? "Here's something to remember about your game." : ER.actions.length > 0 ? "Sure!" : lR.isCutShort ? "Sorry, that was too much for one answer." : "Sorry, I couldn't work that out. Try asking in a different way.",
            TM = {
              role: "assistant",
              text: (bw || BM()) + NM + eM,
              changes: ER.changes,
              status: "offered",
              warnings: mM,
              worldCode: ER.worldCode.length > 0 && !DR ? ER.worldCode : void 0,
              editedInPlace: ER.inPlace && !vM || void 0,
              failedEdits: GR.length > 0 ? GR : void 0,
              question: null !== AM && void 0 !== AM ? AM : void 0,
              askedFor: AM ? jR : void 0,
              note: ER.notes[0],
              plan: ER.plan.length > 0 ? ER.plan : void 0,
              noteStatus: ER.notes.length > 0 ? KR ? "pending" : "asked" : void 0,
              answeredBy: QR,
              oneOff: sW || void 0,
              cutShort: fR,
              byItself: KR || void 0,
              ...fR ? {
                retryShown: OW.retryShown,
                retryOptions: OW.retryOptions
              } : {},
              ...zw ? {
                logTitle: Ie,
                isCalm: !0
              } : {},
              ...WM.length > 0 ? {
                lookups: {
                  lookups: WM,
                  followUp: RM
                },
                lookedAt: CM || void 0
              } : {}
            },
            iw = mR && void 0 !== tR ? (HW = tR, DW = TM, AR((WW => WW.map((WW => WW.id === HW ? {
              ...DW,
              id: HW,
              target: WW.target
            } : WW)))), HW) : QM(TM),
            YM = ER.inPlace && kR && !vM && !lR.isCutShort && !lR.hasCallsFromReasoning,
            JM = YM && await GM({
              id: iw,
              changes: ER.changes
            }, CW);
          !ER.inPlace || vM || JM || cwW(iw, {
            editedInPlace: void 0
          });
          const PM = 0 === ER.changes.length && 0 === GR.length && 0 === OR.length && 0 === hR.length && 0 === ER.worldCode.length;
          if (KR && void 0 !== TM.note && ((JM || vM || PM) && !GW.signal.aborted ? lw({
              id: iw,
              note: TM.note,
              changes: [],
              status: "applied"
            }, !0) : YM && !GW.signal.aborted ? ow(iw, "declined") : ow(iw, "asked")), GW.signal.aborted) return void QM({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          vM && (cwW(iw, {
            warningsSentBack: !0
          }), VR((WW => [{
            id: tw(),
            text: `Your change didn't go in, because the code wouldn't run at all: ${xM.join(" ")} Send the whole change again with that fixed.`,
            shown: "Fix this line",
            check: !1,
            isAutoFix: !0,
            autoFixRound: eW + 1
          }, ...WW]))), JM && VN(ER.changes, QW).forEach(((WW, RW) => {
            const MW = () => {
              QM({
                role: "assistant",
                text: me(WW.path),
                changes: [],
                status: "offered",
                isNotice: !0,
                isCalm: !0
              }), EW(WW.path, WW.line)
            };
            0 === RW ? MW() : yw(MW, 1200 * RW)
          }));
          const IM = 0 === WM.length && ER.actions.some((WW => "exportGame" === WW.kind));
          kR && IM && "direct" === LW ? qw(ER.changes.length > 0 && !JM) : kR && (IM || hw(jR) && !ZW) && cwW(iw, {
            offerExport: !0
          });
          const oM = 0 === WM.length ? ER.actions.find((WW => "switchToWorldCode" === WW.kind)) : void 0,
            lM = ER.changes.length > 0 && !JM && kR,
            FM = JM ? ER.changes.map((WW => ({
              path: WW.path,
              text: WW.before
            }))) : void 0,
            fM = hR.length > 0 && KR && !!nW,
            XM = fM && !lM;
          if (hR.length > 0) {
            const WW = QM({
              role: "assistant",
              text: "This is the part of the change that goes in World Code.",
              changes: hR,
              status: "offered",
              warnings: aM(hR, !1),
              answeredBy: QR,
              byItself: XM || void 0
            }, UN.g);
            fM && SM(WW, lM)
          }
          if ("stopped" === (CM ? await Mw(WM, RM, {
              replaced: FM,
              signal: GW.signal
            }) : "none")) return void QM({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          OR.length > 0 && VR((WW => [...OR.map((WW => ({
            id: tw(),
            text: Ve(jR, WW.path, WW.code),
            shown: "Put the code in",
            followUp: {
              check: !1,
              about: CW,
              planStep: zR,
              useFree: fW,
              lookupRound: JW,
              lookupOf: KW,
              insertsInto: WW.path
            },
            opensPath: WW.path,
            ...FM ? {
              replaced: FM,
              until: Date.now() + vB
            } : {}
          }))), ...WW]));
          const jw = KR && !!nW && ZW && 0 === hR.length && (DR || "switchToWorldCode" === (null === oM || void 0 === oM ? void 0 : oM.kind) && !AW);
          if (jw && lM) AR((WW => WW.map((WW => WW.id === iw && ER.worldCode.length > 0 ? {
            ...WW,
            worldCode: ER.worldCode
          } : WW)))), QM({
            role: "assistant",
            text: ue(ER.worldCode.length > 0),
            changes: [],
            status: "offered",
            isNotice: !0
          });
          else if (jw) {
            const WW = ER.worldCode.join("\n\n"),
              RW = "switchToWorldCode" === (null === oM || void 0 === oM ? void 0 : oM.kind) ? oM.request : null;
            Rw(DR ? function(WW, RW) {
              return `In a code block, they asked: "${WW}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never defined twice:\n\`\`\`js\n${RW.replace(/\s*$/,"")}\n\`\`\``
            }(jR, WW) : RW ? function(WW) {
              return `In a code block, they asked for this in World Code, which is open now: ${WW}`
            }(RW) : null, {
              check: !1,
              about: CW,
              useFree: fW,
              lookupOf: KW
            }, DR ? WW : void 0)
          }
          const kw = !!vR && 0 === hR.length && !jw && ("switchToWorldCode" === (null === oM || void 0 === oM ? void 0 : oM.kind) || KR && ER.worldCode.length > 0);
          if (kw) {
            const WW = "switchToWorldCode" === (null === oM || void 0 === oM ? void 0 : oM.kind) ? oM.request : null;
            ZM(null !== WW && void 0 !== WW ? WW : ER.worldCode.length > 0 ? Se(ER.worldCode) : "", {
              leavesChangeBehind: lM,
              hasWorldCodePart: ER.worldCode.length > 0
            })
          }
          if (JM && mM.length > 0 && eW < 3 && (!(kw || fM || jw) || lM) && (cwW(iw, {
              warningsSentBack: !0
            }), VR((WW => [{
              id: tw(),
              text: `Fix this in your change: ${mM.join(" ")}`,
              shown: 1 === mM.length ? "Fix this line" : "Fix these lines",
              check: !1,
              isAutoFix: !0,
              autoFixRound: eW + 1,
              replaced: FM,
              until: Date.now() + vB
            }, ...WW]))), JM && "direct" === LW && 0 === mM.length && 0 === GR.length && 0 === WM.length && 0 === OR.length && 0 === hR.length && !jw && !kw) {
            const WW = VN(ER.changes, QW).length;
            Cw(iw, eW, WW > 1 ? 1200 * (WW - 1) + 1500 : 0)
          }
        } catch (NR) {
          if (GW.signal.aborted) qM.current = null, QM({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          else {
            const WW = NR instanceof ZC ? NR.reason : "failed";
            QM({
              role: "assistant",
              text: SC(WW),
              changes: [],
              status: "offered",
              isNotice: !0,
              ...OW,
              retryAt: "busy" === WW ? Date.now() + 6e4 : void 0
            }), HR(Date.now())
          }
        } finally {
          DR.current = null, yM(null)
        }
      }, dM = (WW, RW, MW, wW) => {
        const CW = function(WW, RW) {
          return "refused" === WW.problem ? null : {
            notice: WW.problem,
            model: RW.model.name,
            company: aA(RW.provider, RW.baseUrl, !0),
            isServer: "custom" === RW.provider,
            detail: WW.detail && dz(WW.detail, RW.key)
          }
        }(WW, RW);
        if (!CW) return (WW => {
          cwW(WW, {
            leftOut: !0
          })
        })(MW), void QM({
          role: "assistant",
          text: Ke,
          changes: [],
          status: "offered",
          isNotice: !0
        });
        QM({
          role: "assistant",
          text: "",
          changes: [],
          status: "offered",
          isNotice: !0,
          ...wW,
          keyNotice: CW
        })
      }, pM = () => {
        const WW = hR.trim();
        if ("" === WW || bM && ER.length >= 3) return;
        const RW = lR && null !== Ew;
        if (RW || !kw((() => {
            hM.current()
          }))) {
          if (FR(!1), mM) return KM(KN(mM, WW), uN(mM, WW), {
            check: !0,
            useFree: RW
          }), xM(null), void UR("");
          if (bM || null === aC || void 0 === aC || !aC.question) {
            if (!bM) return UR(""), void sM(WW, void 0, {
              useFree: RW
            });
            ER.length < 3 && (VR([...ER, {
              id: tw(),
              text: WW,
              useFree: RW
            }]), UR(""))
          } else {
            var MW, wW;
            UR("");
            const CW = aN(null !== (MW = aC.askedFor) && void 0 !== MW ? MW : "", aC.question.question, WW);
            sM(CW, WW, {
              check: !0,
              about: aC.askedFor,
              asked: `${null!==(wW=aC.askedFor)&&void 0!==wW?wW:""} ${WW}`,
              useFree: RW
            })
          }
        }
      }, hM = (0, wW.useRef)(pM);
    hM.current = pM;
    const UM = (0, wW.useRef)(sM);
    UM.current = sM;
    const EM = (0, wW.useRef)(QM);
    EM.current = QM;
    const VM = (0, wW.useRef)(null),
      [mw, xw] = (0, wW.useState)(null),
      vw = ER.filter((WW => void 0 === WW.followUp));

    function KM(WW, RW, MW) {
      if (bM) {
        if (ER.length < 3) {
          var wW;
          const CW = null !== (wW = MW.useFree) && void 0 !== wW ? wW : lR && null !== Ew;
          CW && FR(!1), VR([...ER, {
            id: tw(),
            text: WW,
            shown: RW,
            ...MW,
            useFree: CW
          }])
        }
      } else sM(WW, RW, MW)
    }(0, wW.useEffect)((() => {
      var WW, RW, MW;
      const [wW, ...CW] = ER;
      if (bM || !wW || SR > 0) return;
      const zR = null === (WW = wW.followUp) || void 0 === WW ? void 0 : WW.lookupOf;
      if (void 0 !== zR && !wR.some((WW => WW.id === zR))) return void VR(CW);
      if (null === (RW = wW.replaced) || void 0 === RW ? void 0 : RW.some((WW => {
          var RW;
          let {
            path: MW,
            text: wW
          } = WW;
          return (null !== (RW = XW[MW]) && void 0 !== RW ? RW : "") === wW
        }))) {
        var AW;
        const WW = (null !== (AW = wW.until) && void 0 !== AW ? AW : 0) - Date.now();
        if (WW <= 0) return void VR(CW);
        const RW = setTimeout((() => {
          VR((WW => [...WW]))
        }), WW);
        return () => {
          clearTimeout(RW)
        }
      }
      if (void 0 !== wW.opensPath && wW.opensPath !== jR) {
        var bR;
        (null === (bR = VM.current) || void 0 === bR ? void 0 : bR.id) !== wW.id && (VM.current = {
          id: wW.id,
          until: Date.now() + 3e3
        }, EM.current({
          role: "assistant",
          text: me(wW.opensPath),
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), EW(wW.opensPath, 1));
        const WW = VM.current.until - Date.now();
        if (WW > 0) {
          const RW = setTimeout((() => {
            VR((WW => [...WW]))
          }), WW);
          return () => {
            clearTimeout(RW)
          }
        }
      }
      const yR = null !== (MW = wW.followUp) && void 0 !== MW ? MW : {
        ...void 0 === wW.shown ? {} : {
          check: wW.check,
          wordsOnly: wW.wordsOnly,
          isAutoFix: wW.isAutoFix,
          autoFixRound: wW.autoFixRound
        },
        useFree: wW.useFree
      };
      Ee(yR) && kb(lA.getState()) ? mw !== wW.id && (xw(wW.id), uA()) : (VR(CW), UM.current(wW.text, wW.shown, yR))
    }), [bM, ER, SR, XW, wR, jR, EW, jw, mw]);
    const uM = (0, wW.useRef)(KM);
    uM.current = KM, (0, wW.useEffect)((() => {
      if (DW) {
        var WW;
        if (null === qR || void 0 === qR || qR(), "change" === DW.action) return xM(DW), void(null === (WW = BM.current) || void 0 === WW || WW.focus());
        xM(null), uM.current(KN(DW), uN(DW), {
          check: !1,
          wordsOnly: "explain" === DW.action
        })
      }
    }), [DW, qR]);
    const OM = (WW, RW, MW) => {
        Qe.add(xR, WW, RW, Date.now(), MW).then(eR).catch((WW => {
          console.error("World Code AI: couldn't keep a version of the code", WW)
        }))
      },
      nM = (0, wW.useRef)(new Set),
      GM = async function(WW, RW) {
        let {
          tryAgainLater: MW = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wW = gw.current;
        if (WW.changes.some((WW => {
            var RW;
            return (null !== (RW = wW[WW.path]) && void 0 !== RW ? RW : "") !== WW.before
          }))) return XM(WW.id, "stale"), !1;
        nM.current.add(WW.id);
        if (!await dW(WW.changes.map((WW => ({
            path: WW.path,
            text: WW.after
          })))).finally((() => {
            nM.current.delete(WW.id)
          }))) return MW || XM(WW.id, "stale"), !1;
        OM(function(WW) {
          const RW = WW.replace(/\s+/g, " ").trim();
          return `Before "${RW.length>200?`${RW.slice(0,200).trimEnd()}\u2026`:RW}"`
        }(RW), wW, function(WW) {
          const RW = [...new Set(WW.flatMap((WW => {
            var RW;
            return null !== (RW = WW.why) && void 0 !== RW ? RW : []
          })))];
          if (0 === RW.length) return;
          const MW = RW.map(((WW, RW) => 0 === RW ? WW.charAt(0).toUpperCase() + WW.slice(1) : WW.charAt(0).toLowerCase() + WW.slice(1))).join(", ");
          return MW.length > 400 ? `${MW.slice(0,400).trimEnd()}\u2026` : MW
        }(WW.changes)), XM(WW.id, "applied"), WW.isPartial && cwW(WW.id, {
          changes: WW.changes
        });
        const CW = wR.find((RW => RW.id === WW.id && "pending" === RW.noteStatus));
        return CW && WW.isPartial ? ow(WW.id, "asked") : CW && lw({
          ...CW,
          status: "applied"
        }, !0), AR((RW => {
          var MW;
          const wW = null === (MW = RW.findLast((RW => "user" === RW.role && RW.id < WW.id))) || void 0 === MW ? void 0 : MW.planStep;
          return wW ? RW.map((WW => {
            var RW;
            return WW.id === wW.planId ? {
              ...WW,
              planDone: Math.max(null !== (RW = WW.planDone) && void 0 !== RW ? RW : 0, wW.index + 1)
            } : WW
          })) : RW
        })), TM.current = Date.now(), !0
      }, LM = !bM && 0 === SR && (0 === ER.length || ER[0].id === mw), HM = (0, wW.useRef)((() => Promise.resolve(!0)));
    HM.current = async () => {
      var WW;
      const RW = RR.pendingApply;
      if (!RW || RW.targetKey !== VW.key) return !0;
      const MW = wR.find((WW => WW.id === RW.entryId));
      if (!MW || "offered" !== MW.status) return RR.pendingApply = void 0, !0;
      const wW = null !== (WW = RW.picked) && void 0 !== WW ? WW : MW.changes,
        CW = GW && kR && wW.every((WW => {
          var RW;
          return (null !== (RW = gw.current[WW.path]) && void 0 !== RW ? RW : "") === WW.before
        }));
      if (Date.now() > RW.until) return RR.pendingApply = void 0, CW && QM({
        role: "assistant",
        text: "That change couldn't go in. Press Apply to try again.",
        changes: [],
        status: "offered",
        isNotice: !0
      }), !0;
      if (!CW || nM.current.has(MW.id)) return !1;
      const zR = await GM({
        id: MW.id,
        changes: wW,
        isPartial: void 0 !== RW.picked
      }, Qw(MW.id), {
        tryAgainLater: !0
      });
      zR && RR.pendingApply === RW && (RR.pendingApply = void 0), zR && RW.byItself && cwW(MW.id, {
        editedInPlace: !0
      });
      const AW = wW[0];
      return zR && AW && EW(AW.path, EN(AW.before, AW.after)), zR
    }, (0, wW.useEffect)((() => {
      var WW;
      if ((null === (WW = RR.pendingApply) || void 0 === WW ? void 0 : WW.targetKey) !== VW.key) return;
      const RW = setInterval((() => {
        HM.current().then((WW => {
          WW && clearInterval(RW)
        }))
      }), 250);
      return () => {
        clearInterval(RW)
      }
    }), [RR, VW.key, GW, XW]);
    const DM = (0, wW.useRef)((() => !0));
    DM.current = () => {
      const WW = RR.pendingInsert;
      if (!WW || WW.targetKey !== VW.key) return !0;
      if (Date.now() > WW.until) return RR.pendingInsert = void 0, QM({
        role: "assistant",
        text: void 0 === WW.code ? "World Code didn't open in time, so that wasn't asked here. Ask again." : "World Code didn't open in time, so the code block's World Code part isn't in. Here it is to add.",
        changes: [],
        status: "offered",
        worldCode: void 0 === WW.code ? void 0 : [WW.code],
        isNotice: void 0 === WW.code
      }), !0;
      const RW = Object.values(gw.current).some((WW => "" !== WW.trim()));
      return !(!GW || !kR || !RW && Date.now() < WW.readyBy) && (RR.pendingInsert = void 0, VR((RW => [{
        id: tw(),
        text: WW.request,
        shown: "Put the code in",
        followUp: {
          ...WW.options,
          insertsInto: jR
        }
      }, ...RW])), !0)
    }, (0, wW.useEffect)((() => {
      var WW;
      if ((null === (WW = RR.pendingInsert) || void 0 === WW ? void 0 : WW.targetKey) !== VW.key) return;
      const RW = setInterval((() => {
        DM.current() && clearInterval(RW)
      }), 250);
      return () => {
        clearInterval(RW)
      }
    }), [RR, VW.key, GW, XW]);
    const qw = WW => {
        yw((() => {
          yR.gameBridge.send("sendChatMessage", {
            PA: "//export",
            channelName: null
          })
        }), Math.max(0, TM.current + 600 - Date.now())), QM({
          role: "assistant",
          text: WW ? "Saving your game with //export, without this change. Apply it and ask me to save again to keep it too." : "Saving your game with //export. The chat says when it's saved.",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !WW || void 0
        })
      },
      ZM = (WW, RW) => {
        let {
          leavesChangeBehind: MW,
          hasWorldCodePart: wW
        } = RW;
        MW ? QM({
          role: "assistant",
          text: ue(wW),
          changes: [],
          status: "offered",
          isNotice: !0
        }) : (QM({
          role: "assistant",
          text: "Taking you to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), yw((() => {
          null === vR || void 0 === vR || vR(WW, !1)
        }), Oe))
      },
      SM = (WW, RW) => {
        !RW && nW ? (QM({
          role: "assistant",
          text: "Moving to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), yw((() => {
          RR.pendingApply = {
            entryId: WW,
            targetKey: UN.g.key,
            until: Date.now() + le,
            byItself: !0
          }, nW(UN.g)
        }), Oe)) : QM({
          role: "assistant",
          text: "Apply this change first, then apply the World Code part.",
          changes: [],
          status: "offered",
          isNotice: !0
        })
      },
      Ww = WW => ZW && "direct" === WW && kR && !!nW,
      Rw = (WW, RW, MW) => {
        nW && (QM({
          role: "assistant",
          text: "Moving to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), yw((() => {
          null !== WW && (RR.pendingInsert = {
            targetKey: UN.g.key,
            request: WW,
            options: RW,
            code: MW,
            readyBy: Date.now() + 4e3,
            until: Date.now() + le
          }), nW(UN.g)
        }), Oe))
      },
      Mw = async function(WW, RW) {
        var MW, wW, CW;
        let {
          replaced: zR,
          signal: AW
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const bR = await async function(WW, RW) {
          const MW = [];
          let wW = null;
          for (const zR of WW) {
            var CW;
            const WW = await BC(zR, RW);
            MW.push(zR.call ? {
              ...WW.result,
              call: zR.call
            } : WW.result), wW = null !== (CW = WW.worldCodeFiles) && void 0 !== CW ? CW : wW
          }
          return {
            results: MW,
            worldCodeFiles: wW
          }
        }(WW, {
          files: gw.current,
          docs: jB(),
          errors: aR,
          viewChunk: null !== uW && void 0 !== uW ? uW : mB,
          viewGameState: null !== OW && void 0 !== OW ? OW : xB,
          readWorldCode: KW,
          fetchDocsPage: WW => async function(WW, RW, MW) {
            if ("" === WW.trim()) return `No url was given: give ${iR.i}, or a page it links to.`;
            const wW = PW(WW);
            if (null === wW) return WW.includes(iR.d) ? `${WW} is every page at once, too long to read: read ${iR.i}, then the page you need.` : `Only Bloxd's docs can be read: ${iR.i} and the pages it links to.`;
            const CW = `There is no docs page at ${WW}. ${iR.i} lists every page with its link.`,
              zR = `${WW} couldn't be read just now. Use get_docs instead.`,
              AW = (0, YW.d)(2e4, MW);
            let bR;
            try {
              var yR;
              const WW = await fetch(`${RW}${wW}`, {
                signal: AW.signal
              });
              if (404 === WW.status) return CW;
              if (!WW.ok) return console.warn("AI Helper: a docs page couldn't be read", wW, WW.status), zR;
              if (null !== (yR = WW.headers.get("content-type")) && void 0 !== yR && yR.startsWith("text/html")) return CW;
              bR = await WW.text()
            } catch (eW) {
              return !0 !== (null === MW || void 0 === MW ? void 0 : MW.aborted) && console.warn("AI Helper: a docs page couldn't be read", wW, eW), zR
            } finally {
              AW.clear()
            }
            const NW = (0, iR.A)(wW);
            return null !== NW && null === NW.part && bR.length > iR.c ? `${WW} is too long to read whole: read the part you need. Its parts start at ${gR.c}${(0,iR.u)(NW.name,0)}, and ${iR.i} says what each part has.` : bR.length <= 4e4 ? bR : (console.warn("AI Helper: a docs file is longer than any should be", wW, bR.length), `${bR.slice(0,4e4)}\n\n(The rest of this page is cut off.)`)
          }(WW, window.location.origin, AW)
        });
        if (null !== AW && void 0 !== AW && AW.aborted) return "stopped";
        const yR = bR.results,
          NW = WW.flatMap((WW => "view_file" === WW.name && void 0 !== WW.args.path && WW.args.path in gw.current ? [WW.args.path] : [])),
          eW = {
            ...RW.options,
            lookups: [...(null !== (MW = RW.options.lookups) && void 0 !== MW ? MW : []).map(oe), ...yR],
            worldCodeFiles: null !== (wW = bR.worldCodeFiles) && void 0 !== wW ? wW : RW.options.worldCodeFiles,
            viewedPaths: [...null !== (CW = RW.options.viewedPaths) && void 0 !== CW ? CW : [], ...NW]
          };
        return VR((WW => [{
          id: tw(),
          text: RW.request,
          shown: RW.shown,
          followUp: eW,
          ...zR ? {
            replaced: zR,
            until: Date.now() + vB
          } : {}
        }, ...WW])), "asked"
      }, ww = (WW, RW, MW) => {
        AR((wW => wW.map((wW => wW.id === WW ? {
          ...wW,
          trial: RW,
          trialErrors: null !== MW && void 0 !== MW ? MW : wW.trialErrors
        } : wW))))
      }, Cw = function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        hW && (MM(WW), yw((() => {
          var MW;
          MM(null), DR.current || JM.current.length > 0 || null !== (MW = BM.current) && void 0 !== MW && MW.value.trim() || (OR(YM.current), hW({
            chatKey: mR,
            entryId: WW,
            autoFixRound: RW
          }))
        }), Math.max(MW, TM.current + 1500 - Date.now())))
      }, zC = () => {
        NM(), (0, Yy.d)(mR)
      };
    (0, wW.useEffect)((() => {
      if (!GW || void 0 === (null === CM || void 0 === CM ? void 0 : CM.endedAt) || (null === AM || void 0 === AM ? void 0 : AM.target.key) !== VW.key) return void(void 0 === (null === CM || void 0 === CM ? void 0 : CM.endedAt) || AM || (0, Yy.l)(mR));
      const WW = (0, Yy.l)(mR);
      if (!WW) return;
      const RW = (0, Yy.s)(WW);
      EM.current({
        role: "assistant",
        text: RW.text,
        changes: [],
        status: "offered",
        isNotice: !0,
        isCalm: 0 === WW.errors.length && void 0 !== WW.ranAt,
        logTitle: RW.title
      }), void 0 !== WW.ranAt && (0 !== WW.errors.length ? WW.autoFixRound >= 3 || (OR(YM.current), VR((RW => [{
        id: tw(),
        text: (0, Yy.q)(WW.errors),
        shown: 1 === WW.errors.length ? "Fix the error" : "Fix these errors",
        check: !1,
        isAutoFix: !0,
        autoFixRound: WW.autoFixRound + 1
      }, ...RW]))) : ww(WW.entryId, "ask", YM.current))
    }), [CM, GW, AM, VW.key, mR]);
    const Aw = async (WW, RW) => {
      if (cwW(WW.id, {
          forgetStatus: RW ? "forgotten" : "kept"
        }), RW) try {
        for (const RW of null !== (MW = WW.forgetNotes) && void 0 !== MW ? MW : []) {
          var MW;
          gM(await rB.remove(xR, RW))
        }
      } catch (wW) {
        console.error("World Code AI: couldn't forget a note", wW), cwW(WW.id, {
          forgetStatus: void 0
        })
      }
    }, bC = (0, wW.useCallback)((WW => WW.flatMap((WW => Pe(jB(), WW, ZW)))), [ZW]), yC = (0, wW.useRef)({}), Nw = (0, wW.useRef)({}), ew = (0, wW.useRef)(Promise.resolve()), Bw = (0, wW.useRef)([]), tC = (0, wW.useRef)(new Map), Tw = (0, wW.useRef)(new Map), gC = (0, wW.useRef)(null), iC = () => {
      sR.current = !1, Bw.current = [], tC.current = new Map, Tw.current = new Map, gC.current = null, yC.current = {}, Nw.current = {}, pR(null)
    }, Yw = async () => {
      if (!dR) return;
      const WW = gw.current,
        RW = function(WW, RW, MW) {
          return Object.entries(RW).flatMap((RW => {
            var wW;
            let [CW, zR] = RW;
            const AW = MW[CW];
            if (void 0 === AW) return [];
            const bR = new Map(Uy(null !== (wW = WW[CW]) && void 0 !== wW ? wW : "").map((WW => [WW.key, WW.value]))),
              yR = new Map(Uy(zR).map((WW => [WW.key, WW.value])));
            let NW = AW;
            for (const [WW, MW] of bR) {
              var eW;
              const RW = Uy(NW).find((RW => RW.key === WW));
              RW && RW.value !== MW && yR.get(WW) === RW.value && (NW = null !== (eW = Ey(NW, RW, MW)) && void 0 !== eW ? eW : NW)
            }
            return NW === AW ? [] : [{
              path: CW,
              text: NW
            }]
          }))
        }(dR, yC.current, WW);
      if (RW.length > 0) {
        if (!await dW(RW)) return;
        OM(function(WW) {
          const RW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).filter((RW => WW.includes(RW.name))).map((WW => ({
            name: WW.name,
            from: WW.to,
            to: WW.from
          })));
          return RW.length > 0 ? vN(RW, "undoing") : 0 === WW.length ? "Before undoing settings" : `Before undoing settings: ${(WW.length>3?[...WW.slice(0,3),WW.length-3+" more"]:WW).join(", ")}`
        }(Bw.current, [...tC.current.values()]), WW), TM.current = Date.now()
      }
      iC()
    }, Jw = !ZW && Object.values(XW).some((WW => Uy(WW).length > 0)), Pw = function(WW) {
      let {
        codeBlock: RW,
        hasSettings: MW,
        canEdit: CW
      } = WW;
      return (0, wW.useEffect)((() => {
        (0, Ay.C)("aiNotes", !RW)
      }), [RW]), (0, wW.useEffect)((() => {
        (0, Ay.C)("aiGameSettings", MW)
      }), [MW]), (0, wW.useEffect)((() => {
        (0, Ay.C)("aiEdits", CW)
      }), [CW]), (0, bN.f)("aiHelperOverview")
    }({
      codeBlock: ZW,
      hasSettings: Jw,
      canEdit: kR
    });
    (0, wW.useEffect)((() => {
      Pw && (tM(!1), YR(!1), PR(!1), oR(null))
    }), [Pw]);
    const Iw = async WW => {
      const RW = SW(WW);
      return null === RW ? "Notes are only about your game, never personal details." : "ok" !== await oz(RW) ? "This note can't be saved. Notes are only about your game." : (gM(await rB.add(xR, RW)), null)
    }, ow = (WW, RW) => {
      cwW(WW, {
        noteStatus: RW
      })
    }, lw = async (WW, RW) => {
      if (RW && void 0 !== WW.note)
        if (WW.changes.length > 0 && "offered" === WW.status) ow(WW.id, "pending");
        else {
          ow(WW.id, "checking");
          try {
            ow(WW.id, null === await Iw(WW.note) ? "saved" : "refused")
          } catch (MW) {
            console.error("World Code AI: couldn't keep a note", MW), ow(WW.id, "asked")
          }
        }
      else ow(WW.id, "declined")
    }, Fw = WW => {
      var RW;
      const MW = null === (RW = wR.find((RW => RW.id === WW))) || void 0 === RW ? void 0 : RW.target.key;
      return wR.findLast((RW => "user" === RW.role && RW.id < WW && RW.target.key === MW))
    }, fw = WW => {
      var RW;
      return null === (RW = Fw(WW)) || void 0 === RW ? void 0 : RW.asked
    }, Qw = WW => {
      var RW, MW;
      const wW = Fw(WW);
      return null !== (RW = null !== (MW = null === wW || void 0 === wW ? void 0 : wW.about) && void 0 !== MW ? MW : null === wW || void 0 === wW ? void 0 : wW.text) && void 0 !== RW ? RW : "a change"
    }, rC = wR.filter(rw), cC = null === (tR = rC[rC.length - 1]) || void 0 === tR ? void 0 : tR.id, Xw = null !== (JW = null === (IW = rC.findLast((WW => "user" === WW.role))) || void 0 === IW ? void 0 : IW.id) && void 0 !== JW ? JW : 0, jC = rC.length < wR.length, kC = rC[rC.length - 1], aC = null !== kC && void 0 !== kC && null !== (oW = kC.question) && void 0 !== oW && oW.allowOther && !bM ? kC : void 0, dw = (0, wW.useRef)(!1), pw = () => {
      dw.current = !0, oR("settings")
    }, Uw = () => {
      tM(!1), YR(!1), PR(!1), fR.current = null, rM(null), oR("addKey")
    }, {
      activeKey: Ew,
      cutShortActions: Vw,
      noticeActions: xC
    } = function(WW) {
      var RW;
      let {
        entries: MW,
        busy: wW,
        send: CW,
        onCheckKey: zR
      } = WW;
      const {
        active: AW
      } = BA(), bR = null === (RW = MW.findLast((WW => "assistant" === WW.role && !WW.isNotice))) || void 0 === RW ? void 0 : RW.id;
      return {
        activeKey: AW,
        cutShortActions: (WW, RW) => ({
          canFinish: !wW && WW === bR && (null === AW || void 0 === AW ? void 0 : AW.id) === RW.keyId && AW.model.id === RW.modelId,
          onFinish: () => {
            CW(RW.request, {
              retryOf: WW,
              continueFrom: RW.written
            })
          }
        }),
        noticeActions: (WW, RW, MW) => ({
          notice: MW.notice,
          onRetry: () => {
            CW(RW, {
              retryOf: WW
            })
          },
          onUseFree: () => {
            CW(RW, {
              useFree: !0,
              retryOf: WW
            })
          },
          onCheckKey: zR
        })
      }
    }({
      entries: rC,
      busy: !!bM,
      send: (WW, RW) => {
        let {
          useFree: MW,
          retryOf: wW,
          continueFrom: CW
        } = RW;
        const zR = wR.find((WW => WW.id === wW));
        return sM(WW, null === zR || void 0 === zR ? void 0 : zR.retryShown, {
          ...null === zR || void 0 === zR ? void 0 : zR.retryOptions,
          useFree: MW,
          retryOf: wW,
          continueFrom: CW
        })
      },
      onCheckKey: pw
    }), vC = jb(jw) ? jw.status : null, Kw = null !== vC && void 0 !== vC && vC.isSuper ? vC.resetsAt : null, uw = (0, wW.useRef)({
      resetsAt: 0,
      count: 0,
      nextAt: 0
    });
    (0, wW.useEffect)((() => {
      if (null === Kw) return;
      if (Kw <= LR) {
        uw.current.resetsAt !== Kw && (uw.current = {
          resetsAt: Kw,
          count: 0,
          nextAt: 0
        });
        const WW = uw.current,
          RW = [15e3, 6e4, 24e4];
        if (WW.count > RW.length) return;
        let MW = !1;
        const wW = setTimeout((() => {
          var wW;
          WW.nextAt = Date.now() + (null !== (wW = RW[WW.count]) && void 0 !== wW ? wW : 0), WW.count++, lA.refresh().then((() => {
            MW || HR(Date.now())
          }))
        }), Math.max(0, WW.nextAt - Date.now()));
        return () => {
          MW = !0, clearTimeout(wW)
        }
      }
      const WW = setTimeout((() => {
        HR(Date.now())
      }), Math.max(0, (Kw - LR - 1) % 6e4 + 1 - (Date.now() - LR)));
      return () => {
        clearTimeout(WW)
      }
    }), [Kw, LR]);
    const Ow = Ew ? `${Ew.id}/${Ew.model.id}` : null;
    (0, wW.useEffect)((() => {
      FR(!1)
    }), [Ow]);
    const nw = Object.values(XW).some((WW => "" !== WW.trim())),
      Gw = BR || iM || JR || null !== IR,
      Lw = "aiAnswer" === Pw || ("aiNotes" === Pw || "aiGameSettings" === Pw || "aiGear" === Pw) && Gw ? Pw : "aiPanel",
      Hw = (0, wW.useRef)(null),
      Dw = (0, wW.useRef)(null),
      qC = (0, wW.useRef)(IR);
    (0, wW.useEffect)((() => {
      if (qC.current === IR) return;
      qC.current = IR;
      if (!document.activeElement || document.activeElement === document.body) {
        var WW;
        null === (WW = (IR ? Hw : Dw).current) || void 0 === WW || WW.focus()
      }
    }), [IR]), (0, wW.useEffect)((() => {
      const WW = eM.current;
      if (!IR || !WW) return;
      WW.scrollTo({
        top: 0
      });
      const RW = "settings" === IR && dw.current ? WW.querySelector(".WorldCodeAiModelRow.Selected") : null;
      if (RW && RW.getBoundingClientRect().bottom > WW.getBoundingClientRect().bottom && !Kb(WW, RW)) {
        const MW = WW.getBoundingClientRect(),
          wW = RW.getBoundingClientRect();
        WW.scrollTop += wW.top - MW.top - (MW.height - wW.height) / 2
      }
      return () => {
        WW.style.paddingBottom = ""
      }
    }), [IR]);
    const {
      disclosureRef: Sw,
      gearLabelRef: RC,
      hasGearLabel: MC
    } = function(WW, RW) {
      const MW = (0, wW.useRef)(null),
        CW = (0, wW.useRef)(null),
        zR = (0, wW.useRef)(0),
        [AW, bR] = (0, wW.useState)(!0);
      return (0, wW.useLayoutEffect)((() => {
        const RW = MW.current;
        if (!RW || "undefined" === typeof ResizeObserver) return;
        const wW = () => {
          const MW = document.createRange();
          if (MW.selectNodeContents(RW), "function" !== typeof MW.getBoundingClientRect) return;
          const wW = MW.getBoundingClientRect().width,
            AW = CW.current;
          if (AW) {
            const MW = WW.current,
              CW = MW && parseFloat(getComputedStyle(MW).columnGap) || 0;
            zR.current = AW.getBoundingClientRect().width + CW, wW > RW.clientWidth + 1 && bR(!1)
          } else RW.clientWidth - wW >= zR.current && bR(!0)
        };
        wW();
        const AW = new ResizeObserver(wW);
        return AW.observe(RW), () => {
          AW.disconnect()
        }
      }), [WW, RW]), {
        disclosureRef: MW,
        gearLabelRef: CW,
        hasGearLabel: AW
      }
    }(Dw, Gw), CC = () => {
      var WW;
      VR([]), null === (WW = DR.current) || void 0 === WW || WW.abort(), NM()
    }, AC = (0, AW.jsxs)("div", {
      className: zR()("WorldCodeAiPanel", IR && "WorldCodeAiPanel-aiView"),
      children: [(0, AW.jsxs)("div", {
        className: "WorldCodeAiHeader",
        children: [(0, AW.jsx)("span", {
          className: "WorldCodeAiTitle",
          children: "AI Helper"
        }), (0, AW.jsx)("span", {
          ref: Sw,
          className: "WorldCodeAiDisclosure",
          title: "AI can be wrong. Check its changes.",
          children: "AI can be wrong."
        }), Gw && (0, AW.jsx)("button", {
          ref: Hw,
          className: "WorldCodeAiLinkButton WorldCodeAiBackButton",
          onClick: () => {
            tM(!1), YR(!1), PR(!1), oR("addKey" === IR ? fR.current : null)
          },
          children: "addKey" === IR && fR.current ? "Back" : "Back to chat"
        }), IR && (0, AW.jsx)("h3", {
          className: "WorldCodeAiViewTitle",
          children: "settings" === IR ? "AI settings" : QR ? `Edit ${CA(QR)} key` : "Add an API key"
        }), "settings" === IR && (0, AW.jsxs)("span", {
          className: "WorldCodeAiViewUsing",
          children: [(0, AW.jsxs)("span", {
            className: "WorldCodeAiViewUsingModel",
            children: ["Using:", " ", Ew ? lR ? "Bot.xd (free) for the next question" : By(Ew) : vC ? ib : "Bot.xd (free)"]
          }), (0, AW.jsxs)("span", {
            className: "WorldCodeAiViewUsingEdits",
            children: ["Edits: ", aM ? "On" : "Off"]
          })]
        }), Gw && bM && (0, AW.jsx)("button", {
          className: "WorldCodeAiStop WorldCodeAiHeaderStop",
          onClick: CC,
          children: "Stop answer"
        }), !Gw && !ZW && (0, AW.jsx)(yN, {
          step: "aiNotes",
          placement: "bottom",
          children: (0, AW.jsx)("button", {
            className: zR()("WorldCodeAiLinkButton", iM && "WorldCodeAiLinkButton-active"),
            "aria-pressed": iM,
            onClick: () => {
              tM(!1), PR(!1), YR(!iM)
            },
            children: "AI notes"
          })
        }), !Gw && Jw && (0, AW.jsx)(yN, {
          step: "aiGameSettings",
          placement: "bottom",
          children: (0, AW.jsx)("button", {
            className: zR()("WorldCodeAiLinkButton", JR && "WorldCodeAiLinkButton-active"),
            "aria-pressed": JR,
            onClick: () => {
              iC(), tM(!1), YR(!1), PR(!JR)
            },
            children: "Game settings"
          })
        }), !Gw && NR.length > 0 && (0, AW.jsx)("button", {
          className: zR()("WorldCodeAiLinkButton", BR && "WorldCodeAiLinkButton-active"),
          "aria-pressed": BR,
          onClick: () => {
            HR(Date.now()), YR(!1), PR(!1), tM(!BR)
          },
          children: "History"
        }), !Gw && wR.length > 0 && (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          disabled: !!bM,
          onClick: () => {
            zC(), VR([]), AR([])
          },
          children: "New chat"
        }), !Gw && (0, AW.jsxs)("div", {
          className: "WorldCodeAiViewSwitch",
          role: "tablist",
          children: [(0, AW.jsx)("button", {
            role: "tab",
            "aria-selected": !0,
            className: "Selected",
            children: "Chat"
          }), (0, AW.jsx)("button", {
            role: "tab",
            "aria-selected": !1,
            onClick: UW,
            children: "Code"
          })]
        }), !Gw && (0, AW.jsx)(yN, {
          step: "aiGear",
          placement: "bottom",
          children: (0, AW.jsxs)("button", {
            ref: Dw,
            className: "WorldCodeAiLinkButton WorldCodeAiGear",
            "aria-label": "AI Helper settings",
            title: "AI Helper settings",
            onClick: () => {
              dw.current = !1, oR("settings")
            },
            children: [(0, AW.jsx)(BW.e, {
              name: "gear"
            }), MC && (0, AW.jsx)("span", {
              ref: RC,
              className: "WorldCodeAiGearLabel",
              children: "Settings"
            })]
          })
        })]
      }), (0, AW.jsxs)("div", {
        className: "WorldCodeAiMessages",
        ref: eM,
        role: Gw ? void 0 : "log",
        "aria-live": Gw ? void 0 : "polite",
        children: [BR && (0, AW.jsx)(rN, {
          snapshots: NR,
          files: XW,
          now: LR,
          onRestore: kR && !bM ? WW => {
            (async WW => {
              const RW = gw.current,
                MW = Fy(WW, RW);
              if (0 === MW.length) return;
              if (!await dW(MW)) return;
              OM("Before going back", RW), tM(!1), null !== RM && zC();
              const wW = {};
              for (const AW of MW) wW[AW.path] = AW.text;
              const CW = WW => rw(WW) && "applied" === WW.status && WW.changes.some((WW => WW.path in wW && wW[WW.path] !== WW.after)),
                zR = wR.filter((WW => CW(WW) && "saved" === WW.noteStatus && void 0 !== WW.note && TR.includes(WW.note))).map((WW => {
                  var RW;
                  return null !== (RW = WW.note) && void 0 !== RW ? RW : ""
                }));
              AR((WW => WW.map((WW => CW(WW) ? {
                ...WW,
                status: "undone",
                wentBack: !0,
                noteStatus: "asked" === WW.noteStatus ? void 0 : WW.noteStatus
              } : WW)))), QM({
                role: "assistant",
                text: "Your code is back to how it was.",
                changes: [],
                status: "offered",
                isNotice: !0,
                isCalm: !0,
                undoFiles: RW,
                leftFiles: Object.fromEntries(MW.map((WW => [WW.path, WW.text]))),
                forgetNotes: zR.length > 0 ? zR : void 0
              })
            })(WW)
          } : void 0
        }), JR && (0, AW.jsx)(QN, {
          files: XW,
          before: dR,
          onWrite: kR ? (WW, RW, MW) => {
            const wW = ew.current.then((async () => {
              var wW, CW, zR, AW;
              const bR = gw.current,
                yR = yC.current[WW],
                NW = void 0 !== yR && (null !== (wW = bR[WW]) && void 0 !== wW ? wW : "") === Nw.current[WW] ? {
                  ...bR,
                  [WW]: yR
                } : bR,
                eW = Ey(null !== (CW = NW[WW]) && void 0 !== CW ? CW : "", RW, MW);
              if (null === eW) return !1;
              if (eW === NW[WW]) return !0;
              if (!await dW([{
                  path: WW,
                  text: eW
                }])) return !1;
              const BW = mN(RW),
                tR = `${WW}:${RW.key}`,
                TW = null !== (zR = Tw.current.get(tR)) && void 0 !== zR ? zR : RW.value;
              Tw.current.set(tR, TW), TW === MW ? tC.current.delete(tR) : tC.current.set(tR, {
                name: BW,
                from: xN(TW),
                to: xN(MW)
              });
              const gR = vN([...tC.current.values()]);
              if (sR.current) {
                var iR;
                null === (iR = gC.current) || void 0 === iR || iR.then((async WW => {
                  void 0 !== WW && eR(await Qe.relabel(xR, WW, gR))
                })).catch((WW => {
                  console.error("World Code AI: couldn't rename a version of the code", WW)
                }))
              } else {
                sR.current = !0;
                const WW = Date.now();
                gC.current = Qe.add(xR, gR, NW, WW).then((RW => {
                  var MW;
                  return eR(RW), null === (MW = RW.find((RW => RW.at === WW && RW.label === gR))) || void 0 === MW ? void 0 : MW.id
                })).catch((WW => {
                  console.error("World Code AI: couldn't keep a version of the code", WW)
                })), pR(NW)
              }
              return Bw.current.includes(BW) || Bw.current.push(BW), Nw.current[WW] = null !== (AW = NW[WW]) && void 0 !== AW ? AW : "", yC.current[WW] = eW, TM.current = Date.now(), !0
            }));
            return ew.current = wW.catch((() => !1)), wW
          } : void 0,
          onTryIt: dR ? () => {
            yw(pW, Math.max(0, TM.current + 600 - Date.now()))
          } : void 0,
          onUndo: dR && kR ? () => {
            Yw()
          } : void 0
        }), "settings" === IR && (0, AW.jsx)(qy, {
          allowEdits: XR,
          onAllowEditsChange: kR ? WW => {
            jM(WW),
              function(WW) {
                try {
                  localStorage.setItem(Vb, String(WW))
                } catch {}
              }(WW)
          } : void 0,
          onAddKey: () => {
            fR.current = "settings", rM(null), oR("addKey")
          },
          onEditKey: WW => {
            fR.current = "settings", rM(WW), oR("addKey")
          }
        }), "addKey" === IR && (0, AW.jsx)(Cy, {
          editing: null !== QR && void 0 !== QR ? QR : void 0,
          onAdded: () => {
            dw.current = !0, oR(fR.current)
          },
          onOpenSettings: () => {
            dw.current = !1, oR("settings")
          }
        }, null !== (lW = null === QR || void 0 === QR ? void 0 : QR.id) && void 0 !== lW ? lW : "new"), iM && (0, AW.jsx)(cN, {
          notes: TR,
          outline: MR(XW, new Set(jB().callbackNames())),
          Tk: Iw,
          onDelete: WW => {
            rB.remove(xR, WW).then(gM).catch((WW => {
              console.error("World Code AI: couldn't delete a note", WW)
            }))
          }
        }), !Gw && wR.map(((WW, RW) => {
          var MW, CW, yR, eW, BW, tR, TW, gR;
          const iR = rw(WW),
            YW = jC && (null === (MW = wR[RW - 1]) || void 0 === MW ? void 0 : MW.target.key) !== WW.target.key,
            JW = 0 === WW.changes.length,
            PW = JW && !!WW.failedEdits && !WW.question && !WW.worldCode,
            IW = WW.failedEdits && (0, AW.jsx)(qB, {
              failed: WW.failedEdits,
              nothingChanged: JW,
              defaultOpen: !WW.byItself,
              isElsewhere: !iR,
              onRetry: WW.id !== cC || bM ? void 0 : () => {
                sM("These changes from your last answer didn't go in. Make them again.", "Try the missing change again", {
                  about: Qw(WW.id),
                  failedEdits: WW.failedEdits
                })
              }
            });
          var oW;
          return void 0 === WW.logTitle && (!WW.isNotice || "assistant" !== WW.role || "" === WW.text || void 0 !== WW.retry || WW.keyNotice || WW.undoFiles || WW.failedEdits || WW.cutShort || WW.question || WW.worldCode || 0 !== WW.changes.length) ? (0, AW.jsxs)(wW.Fragment, {
            children: [YW && (0, AW.jsx)(He, {
              target: WW.target,
              isOpen: iR
            }), (0, AW.jsxs)("div", {
              className: zR()("WorldCodeAiEntry", `WorldCodeAiEntry-${WW.role}`, {
                "WorldCodeAiEntry-elsewhere": !iR,
                WorldCodeAiNotice: WW.isNotice,
                "WorldCodeAiNotice-calm": WW.isNotice && WW.isCalm,
                "WorldCodeAiNotice-past": WW.isNotice && void 0 !== WW.retry && (WW.id !== cC || !!FM)
              }),
              children: [JW && IW, PW ? null : WW.isNotice && void 0 !== WW.retry && (WW.id !== cC || FM) ? (0, AW.jsx)("p", {
                children: WW.keyNotice ? pb(WW.keyNotice) : void 0 !== WW.retryAt ? "Not answered: Bot.xd was busy." : "Not answered: the AI had a problem."
              }) : WW.keyNotice ? (0, AW.jsxs)(AW.Fragment, {
                children: [(0, AW.jsx)("p", {
                  children: db(WW.keyNotice)
                }), WW.keyNotice.detail && (0, AW.jsx)(ay, {
                  detail: WW.keyNotice.detail
                })]
              }) : WW.undoFiles ? (0, AW.jsxs)("div", {
                className: "WorldCodeAiWentBack",
                children: [(0, AW.jsx)("span", {
                  children: "undone" === WW.status ? "Undone: your code is as it was before going back." : WW.text
                }), iR && "undone" !== WW.status && ne(WW, XW) && kR && (0, AW.jsx)("button", {
                  className: "WorldCodeAiLinkButton WorldCodeAiNoticeUndo",
                  disabled: !!bM,
                  title: bM ? "You can undo once the answer is in." : void 0,
                  onClick: () => {
                    (async WW => {
                      var RW;
                      const MW = gw.current;
                      if (!ne(WW, MW)) return;
                      const wW = Fy({
                        id: 0,
                        at: 0,
                        label: "",
                        files: null !== (RW = WW.undoFiles) && void 0 !== RW ? RW : {}
                      }, MW).filter((RW => void 0 !== WW.leftFiles && RW.path in WW.leftFiles));
                      if (wW.length > 0) {
                        if (!await dW(wW)) return;
                        OM("Before undoing going back", MW)
                      }
                      const CW = {
                        ...MW
                      };
                      for (const zR of wW) CW[zR.path] = zR.text;
                      AR((RW => RW.map((RW => RW.id === WW.id ? {
                        ...RW,
                        status: "undone"
                      } : rw(RW) && RW.wentBack && RW.changes.every((WW => {
                        var RW;
                        return (null !== (RW = CW[WW.path]) && void 0 !== RW ? RW : "") === WW.after
                      })) ? {
                        ...RW,
                        status: "applied",
                        wentBack: void 0
                      } : RW))))
                    })(WW)
                  },
                  children: bM ? "Undo going back after this answer" : "Undo going back"
                })]
              }) : "assistant" === WW.role ? (0, AW.jsx)(NW.d, {
                markdown: "applied" !== WW.status && !WW.editedInPlace && (WW.changes.length > 0 || null !== (CW = WW.failedEdits) && void 0 !== CW && CW.length) ? FN(WW.text) : WW.text
              }) : (0, AW.jsx)("p", {
                children: WW.text
              }), WW.answeredBy && (0, AW.jsx)(sb, {
                answeredBy: WW.answeredBy
              }), WW.oneOff && Ew && WW.id === cC && !bM && (0, AW.jsxs)("p", {
                className: "WorldCodeAiBackTo",
                children: ["Your next question goes back to ", Ew.model.name, "."]
              }), WW.cutShort && (0, AW.jsx)(Eb, {
                hasCode: WW.changes.length > 0 || !!WW.worldCode,
                ...Vw(WW.id, WW.cutShort)
              }), WW.forgetNotes && (0, AW.jsx)("div", {
                className: "WorldCodeAiForget",
                children: iR && void 0 === WW.forgetStatus && WW.id > Xw ? (0, AW.jsxs)(AW.Fragment, {
                  children: [(0, AW.jsxs)("span", {
                    className: "WorldCodeAiForgetAsk",
                    children: [1 === WW.forgetNotes.length ? "Forget this note in AI notes too? " : "Forget these notes in AI notes too? ", (0, AW.jsx)("span", {
                      className: "WorldCodeAiForgetNote",
                      children: WW.forgetNotes.map((WW => `"${WW}"`)).join(", ")
                    })]
                  }), (0, AW.jsxs)("div", {
                    className: "WorldCodeAiNoteButtons",
                    children: [(0, AW.jsx)("button", {
                      className: "WorldCodeAiSecondaryButton",
                      onClick: () => {
                        Aw(WW, !0)
                      },
                      children: "Forget it"
                    }), (0, AW.jsx)("button", {
                      className: "WorldCodeAiLinkButton",
                      onClick: () => {
                        Aw(WW, !1)
                      },
                      children: "Keep it"
                    })]
                  })]
                }) : (0, AW.jsx)("span", {
                  className: "WorldCodeAiHint",
                  children: "forgotten" === WW.forgetStatus ? "Taken out of AI notes." : "Kept in AI notes."
                })
              }), WW.changes.length > 0 && (0, AW.jsx)(Le, {
                entry: WW,
                defaultOpen: !WW.byItself,
                elsewhere: iR ? void 0 : WW.target,
                isOutOfDate: iR && !nM.current.has(WW.id) && WW.changes.some((WW => {
                  var RW;
                  return (null !== (RW = XW[WW.path]) && void 0 !== RW ? RW : "") !== WW.before
                })),
                canEdit: iR ? kR : !!nW && (!WW.target.codeBlock || WW.target.canChangePos),
                request: fw(WW.id),
                onApply: RW => {
                  iR ? GM(RW ? {
                    id: WW.id,
                    changes: RW,
                    isPartial: !0
                  } : WW, Qw(WW.id)) : ((WW, RW) => {
                    nW && LM && (RR.pendingApply = {
                      entryId: WW.id,
                      targetKey: WW.target.key,
                      picked: RW,
                      until: Date.now() + le
                    }, nW(WW.target))
                  })(WW, RW)
                },
                checkPicked: iR ? bC : void 0,
                onPickedChange: RW => {
                  KR((MW => {
                    if (MW.has(WW.id) === RW) return MW;
                    const wW = new Set(MW);
                    return RW ? wW.add(WW.id) : wW.delete(WW.id), wW
                  }))
                },
                onUndo: () => {
                  (async WW => {
                    const RW = gw.current;
                    if (WW.changes.some((WW => {
                        var MW;
                        return (null !== (MW = RW[WW.path]) && void 0 !== MW ? MW : "") !== WW.after
                      }))) return;
                    await dW(WW.changes.map((WW => ({
                      path: WW.path,
                      text: WW.before
                    })))) && (XM(WW.id, "undone"), null !== RM && zC())
                  })(WW)
                },
                onTryIt: () => {
                  (WW => {
                    const RW = YM.current;
                    OR(RW), ww(WW.id, "ask", RW), yw(pW, Math.max(0, TM.current + 600 - Date.now()))
                  })(WW)
                },
                isLatest: iR && WW.id > Xw,
                canUndo: iR && WW.changes.every((WW => {
                  var RW;
                  return (null !== (RW = XW[WW.path]) && void 0 !== RW ? RW : "") === WW.after
                })),
                onFixWarnings: () => {
                  (WW => {
                    var RW;
                    const MW = fb(null !== (RW = WW.warnings) && void 0 !== RW ? RW : []);
                    var wW;
                    if (!MW) return void sM(`Fix this in your change: ${null===(wW=WW.warnings)||void 0===wW?void 0:wW.join(" ")}`);
                    const CW = jB(),
                      zR = WW.changes.map((RW => ({
                        ...RW,
                        before: "applied" === WW.status ? RW.after : RW.before,
                        after: cy(RW.after, MW)
                      })));
                    QM({
                      role: "user",
                      text: 1 === MW.length ? "Fix this line" : "Fix these lines",
                      changes: [],
                      status: "offered"
                    }), QM({
                      role: "assistant",
                      text: `Fixed without asking the AI: ${MW.map(Xb).join(" ")}`,
                      changes: zR,
                      status: "offered",
                      swappedTo: MW.flatMap((WW => {
                        let {
                          to: RW
                        } = WW;
                        return RW ? [RW] : []
                      })),
                      warnings: zR.flatMap((WW => Pe(CW, WW, ZW)))
                    })
                  })(WW)
                },
                onCheck: () => {
                  sM(function(WW) {
                    const RW = [...new Set(WW)];
                    return RW.length > 0 ? `${Ge} These names were checked against the game and are right, so keep them: ${RW.map((WW=>`"${WW}"`)).join(", ")}.` : Ge
                  }(rC.flatMap((WW => {
                    var RW;
                    return null !== (RW = WW.swappedTo) && void 0 !== RW ? RW : []
                  }))), "Check it for mistakes")
                },
                busy: iR ? !!bM : !LM
              }), WW.question && (0, AW.jsx)(sy, {
                ownAnswerBelow: !0,
                question: WW.question,
                onAnswer: WW.id !== cC || bM ? void 0 : (RW, MW) => {
                  var wW, CW, zR, AW;
                  const bR = aN(null !== (wW = WW.askedFor) && void 0 !== wW ? wW : "", null !== (CW = null === (zR = WW.question) || void 0 === zR ? void 0 : zR.question) && void 0 !== CW ? CW : "", RW);
                  sM(bR, null !== RW && void 0 !== RW ? RW : "Let the AI pick", {
                    check: MW,
                    about: WW.askedFor,
                    asked: MW && RW ? `${null!==(AW=WW.askedFor)&&void 0!==AW?AW:""} ${RW}` : null
                  })
                }
              }), iR && WW.offerExport && (0, AW.jsx)("button", {
                className: "WorldCodeAiSecondaryButton WorldCodeAiSaveGame",
                onClick: () => {
                  cwW(WW.id, {
                    offerExport: !1
                  }), qw("offered" === WW.status && WW.changes.length > 0)
                },
                children: "Save my game"
              }), WW.plan && (0, AW.jsx)(kN, {
                steps: WW.plan,
                built: null !== (yR = WW.planBuilt) && void 0 !== yR ? yR : 0,
                done: null !== (eW = WW.planDone) && void 0 !== eW ? eW : 0,
                onBuild: iR && !bM && kR ? RW => {
                  var MW;
                  const wW = null !== (MW = WW.plan) && void 0 !== MW ? MW : [];
                  aw((() => {
                    cwW(WW.id, {
                      planBuilt: RW + 1
                    }), UM.current(function(WW, RW) {
                      const MW = WW.map(((WW, MW) => `${MW+1}. ${WW}${MW<RW?" (built)":""}`)).join("\n");
                      return `Build step ${RW+1} of our plan now: ${WW[RW]}\nThe whole plan:\n${MW}\nBuild only step ${RW+1}, keeping what earlier steps built, so I can try it before the next.`
                    }(wW, RW), `Build step ${RW+1}: ${wW[RW]}`, {
                      about: wW[RW],
                      asked: wW[RW],
                      planStep: {
                        planId: WW.id,
                        index: RW
                      }
                    })
                  }))
                } : void 0
              }), iR && WW.note && WW.noteStatus && !(WW.wentBack && "saved" === WW.noteStatus) && (0, AW.jsx)(jN, {
                note: WW.note,
                status: WW.noteStatus,
                isPartLeftOut: "offered" === WW.status && vM.has(WW.id),
                defaultOpen: !WW.byItself || "asked" === WW.noteStatus,
                onAnswer: RW => {
                  lw(WW, RW)
                }
              }, "asked" === WW.noteStatus ? "asked" : "kept"), !JW && IW, WW.lookups && (0, AW.jsx)(Ze, {
                lookups: WW.lookups.lookups,
                defaultOpen: !WW.lookedAt,
                isElsewhere: !iR
              }), iR && WW.lookups && !WW.lookedAt && (0, AW.jsx)("div", {
                className: "WorldCodeAiLookups",
                children: (0, AW.jsx)("button", {
                  className: "WorldCodeAiSecondaryButton",
                  disabled: !!bM,
                  onClick: () => {
                    (async WW => {
                      if (!WW.lookups || WW.lookedAt || bM) return;
                      cwW(WW.id, {
                        lookedAt: !0
                      });
                      const RW = new AbortController;
                      DR.current = RW;
                      const MW = Date.now();
                      HR(MW), yM({
                        phase: "thinking",
                        startedAt: MW
                      });
                      try {
                        "stopped" === await Mw(WW.lookups.lookups, WW.lookups.followUp, {
                          signal: RW.signal
                        }) && cwW(WW.id, {
                          lookedAt: !1
                        })
                      } finally {
                        DR.current = null, yM(null)
                      }
                    })(WW)
                  },
                  children: "Let the AI look"
                })
              }), WW.worldCode && (0, AW.jsx)(De, {
                code: WW.worldCode.join("\n"),
                defaultOpen: !WW.byItself,
                isElsewhere: !iR,
                onSwitch: iR && vR ? () => {
                  var RW;
                  vR(Se(null !== (RW = WW.worldCode) && void 0 !== RW ? RW : []))
                } : void 0
              }), iR && "ask" === WW.trial && WW.id > Xw && sW <= (null !== (BW = WW.trialErrors) && void 0 !== BW ? BW : 0) && (0, AW.jsxs)("div", {
                className: "WorldCodeAiTrial",
                children: [(0, AW.jsx)("span", {
                  children: "Did your world do what you wanted?"
                }), (0, AW.jsxs)("div", {
                  className: "WorldCodeAiTrialButtons",
                  children: [(0, AW.jsx)("button", {
                    ref: iw,
                    className: "WorldCodeAiSecondaryButton",
                    onClick: () => {
                      ww(WW.id, "worked")
                    },
                    children: "Yes"
                  }), (0, AW.jsx)("button", {
                    className: "WorldCodeAiSecondaryButton",
                    onClick: () => {
                      var RW;
                      ww(WW.id, "notQuite"), UR("It didn't work because "), null === (RW = BM.current) || void 0 === RW || RW.focus()
                    },
                    children: "Not quite"
                  })]
                })]
              }), iR && "worked" === WW.trial && WW.id > Xw && (0, AW.jsxs)("div", {
                className: "WorldCodeAiTrial",
                children: [(0, AW.jsx)("span", {
                  children: "Nice! What next?"
                }), (0, AW.jsx)(Ue, {
                  requests: pe,
                  onPick: WW => {
                    sM(WW, void 0, {
                      asked: null
                    })
                  }
                })]
              }), iR && "notQuite" === WW.trial && WW.id > Xw && (0, AW.jsxs)("div", {
                className: "WorldCodeAiTrial WorldCodeAiTrial-wrong",
                children: [(0, AW.jsx)("span", {
                  children: "What went wrong? Pick one, or say it in your own words below."
                }), (0, AW.jsx)(Ue, {
                  requests: he,
                  onPick: WW => {
                    sM(WW, void 0, {
                      asked: null
                    })
                  }
                })]
              }), "assistant" === WW.role && WW.changes.length > 0 && "offered" === WW.status && WW.id === cC && !bM && (0, AW.jsx)(Ue, {
                requests: se,
                onPick: WW => {
                  sM(WW, void 0, {
                    asked: null
                  })
                }
              }), "assistant" === WW.role && void 0 !== WW.answeredBy && "free" !== WW.answeredBy && 0 === WW.changes.length && !WW.worldCode && !WW.cutShort && WW.id === cC && !bM && iA(WW.text) && (0, AW.jsx)(Ue, {
                requests: de,
                onPick: () => {
                  sM("You said what you'd change but made no change. Make it now, with the code in full.", "Make the change", {
                    asked: null
                  })
                }
              }), WW.keyNotice && void 0 !== WW.retry && WW.id === cC && !bM && (0, AW.jsx)(Ub, {
                ...xC(WW.id, WW.retry, WW.keyNotice)
              }), void 0 !== WW.retry && !WW.keyNotice && WW.id === cC && !bM && (0, AW.jsxs)("div", {
                className: "WorldCodeAiRetry",
                children: [(0, AW.jsx)("button", {
                  ...jy.h,
                  className: "WorldCodeAiSecondaryButton",
                  disabled: (null !== (tR = WW.retryAt) && void 0 !== tR ? tR : 0) > LR,
                  onClick: () => {
                    var RW;
                    sM(null !== (RW = WW.retry) && void 0 !== RW ? RW : "", WW.retryShown, {
                      ...WW.retryOptions,
                      retryOf: WW.id
                    })
                  },
                  children: (null !== (TW = WW.retryAt) && void 0 !== TW ? TW : 0) > LR ? `Try again in ${WB((null!==(gR=WW.retryAt)&&void 0!==gR?gR:0)-LR)}` : "Try again"
                }), Ew && (0, AW.jsxs)("button", {
                  className: "WorldCodeAiPrimaryButton",
                  onClick: () => {
                    var RW;
                    sM(null !== (RW = WW.retry) && void 0 !== RW ? RW : "", WW.retryShown, {
                      ...WW.retryOptions,
                      retryOf: WW.id,
                      useFree: !1
                    })
                  },
                  children: ["Ask ", Ew.model.name, " instead"]
                }), !Ew && (0, AW.jsx)("button", {
                  className: "WorldCodeAiLinkButton",
                  onClick: pw,
                  children: "Choose another AI"
                })]
              })]
            })]
          }, WW.id) : (0, AW.jsxs)(wW.Fragment, {
            children: [YW && (0, AW.jsx)(He, {
              target: WW.target,
              isOpen: iR
            }), WW.lookups && (0, AW.jsx)(Ze, {
              lookups: WW.lookups.lookups,
              words: WW.text,
              defaultOpen: !WW.lookedAt,
              isElsewhere: !iR
            }), !WW.lookups && (0, AW.jsx)(bR, {
              title: null !== (oW = WW.logTitle) && void 0 !== oW ? oW : WW.isCalm ? "Update" : "Problem",
              isCalm: WW.isCalm || "user" === WW.role,
              isElsewhere: !iR,
              children: (0, AW.jsx)("p", {
                children: WW.text
              })
            })]
          }, WW.id)
        })), !Gw && jC && (null === (FW = wR[wR.length - 1]) || void 0 === FW ? void 0 : FW.target.key) !== VW.key && (0, AW.jsx)(He, {
          target: VW,
          isOpen: !0
        }), !Gw && 0 === rC.length && (0, AW.jsxs)("div", {
          className: "WorldCodeAiEmpty",
          children: [(0, AW.jsx)("p", {
            children: ZW ? "What should happen when someone clicks this block? Ask in your own words." : "What do you want your world to do? Ask in your own words."
          }), (0, AW.jsxs)("div", {
            className: "WorldCodeAiChips",
            children: [nw && (0, AW.jsx)("button", {
              ...jy.h,
              className: "WorldCodeAiChip",
              onClick: () => {
                sM("Explain what my code does")
              },
              children: "Explain my code"
            }), nw && !ZW && !Jw && kR && (0, AW.jsx)("button", {
              ...jy.h,
              className: "WorldCodeAiChip",
              onClick: () => {
                sM("Put the numbers and messages in my code that I might want to change (times, amounts, messages) in CONFIG settings at the top, and use them from there. Change nothing else.", "Make settings I can change")
              },
              children: "Make settings I can change"
            }), (kR ? ZW ? aB : kB : []).map((WW => (0, wW.createElement)("button", {
              ...jy.h,
              key: WW,
              className: "WorldCodeAiChip",
              onClick: () => {
                sM(WW)
              }
            }, WW)))]
          }), (0, AW.jsxs)("p", {
            className: "WorldCodeAiPrivacy",
            children: [Ew ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${Ew.model.name} with your key.` : vC ? "deepseek" === vC.provider ? "Your request and code go through Bloxd to Super Bot.xd, run by DeepSeek, which stores them on its servers in China." : "Your request and code go through Bloxd to Super Bot.xd." : "Your request and code go to Bot.xd, which doesn't keep them.", " ", "Never type personal details, like your name, address or school."]
          }), !Ew && (0, AW.jsxs)("p", {
            className: "WorldCodeAiPrivacy",
            children: ["Want a stronger AI?", " ", (0, AW.jsx)("button", {
              className: "WorldCodeAiKeyLearnMore",
              onClick: Uw,
              children: "Add your own API key"
            })]
          })]
        }), !Gw && bM && (0, AW.jsx)("div", {
          className: "WorldCodeAiEntry WorldCodeAiEntry-assistant WorldCodeAiBusyEntry",
          children: (0, AW.jsxs)("div", {
            className: "WorldCodeAiBusy",
            role: "status",
            children: [(0, AW.jsx)("span", {
              className: "WorldCodeAiSpinner"
            }), (0, AW.jsx)("span", {
              className: "WorldCodeAiBusyText",
              children: (0, AW.jsx)(bR, {
                title: null !== (fW = RB(bM)) && void 0 !== fW ? fW : "Thinking\u2026",
                isCalm: !0,
                children: "waiting" === bM.phase ? (0, AW.jsxs)("span", {
                  className: "WorldCodeAiBusyHint",
                  children: [XN((null !== (QW = bM.until) && void 0 !== QW ? QW : LR) - LR), " Lots of people share Bot.xd."]
                }) : (0, AW.jsxs)(AW.Fragment, {
                  children: [(0, AW.jsx)(MB, {
                    busy: bM
                  }), "screening" === bM.phase && (null !== (rR = bM.until) && void 0 !== rR ? rR : 0) > LR && (0, AW.jsxs)("span", {
                    className: "WorldCodeAiBusyHint",
                    children: [XN((null !== (cR = bM.until) && void 0 !== cR ? cR : LR) - LR), " Lots of people share the safety check."]
                  }), "checking" !== bM.phase && "screening" !== bM.phase && (0, AW.jsx)("span", {
                    className: "WorldCodeAiBusyHint",
                    children: bM.keyModel ? `${bM.keyModel} is answering with your key.` : bM.isSuperBot ? `${ib} is answering from your usage.` : hN(cM.current, bM.model)
                  })]
                })
              })
            }), (0, AW.jsx)("button", {
              className: "WorldCodeAiSecondaryButton WorldCodeAiStop",
              onClick: CC,
              children: "Stop"
            })]
          })
        }), !Gw && !bM && bw && (0, AW.jsx)("div", {
          className: "WorldCodeAiEntry WorldCodeAiEntry-assistant WorldCodeAiBusyEntry",
          children: (0, AW.jsxs)("div", {
            className: "WorldCodeAiBusy",
            role: "status",
            children: [(0, AW.jsx)("span", {
              className: "WorldCodeAiSpinner"
            }), (0, AW.jsx)("span", {
              className: "WorldCodeAiBusyText",
              children: (0, AW.jsx)(bR, {
                title: "Testing\u2026",
                isCalm: !0,
                children: (0, AW.jsx)("span", {
                  className: "WorldCodeAiBusyHint",
                  children: ZW ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${Yy.v/1e3} seconds. If it shows an error, the AI fixes it.`
                })
              })
            }), (0, AW.jsx)("button", {
              className: "WorldCodeAiSecondaryButton WorldCodeAiStop",
              onClick: zC,
              children: "Stop"
            })]
          })
        }), !Gw && vw.map(((WW, RW) => {
          var MW, wW;
          return (0, AW.jsxs)("div", {
            className: "WorldCodeAiEntry WorldCodeAiEntry-user WorldCodeAiQueued",
            children: [(0, AW.jsx)("p", {
              children: null !== (MW = WW.shown) && void 0 !== MW ? MW : WW.text
            }), (0, AW.jsxs)("span", {
              className: "WorldCodeAiQueuedNote",
              children: [WW.id === mw ? "Pick Bot.xd to send it" : null !== (wW = cB[RW]) && void 0 !== wW ? wW : "In line", (0, AW.jsx)("button", {
                className: "WorldCodeAiLinkButton",
                onClick: () => {
                  VR((RW => RW.filter((RW => RW.id !== WW.id))))
                },
                children: "Delete"
              })]
            })]
          }, WW.id)
        }))]
      }), FM && !bM && (0, AW.jsxs)("div", {
        className: "WorldCodeAiErrorBanner",
        children: [(0, AW.jsxs)("div", {
          className: "WorldCodeAiErrorPlain",
          children: [void 0 !== fM.line && (0, AW.jsxs)(AW.Fragment, {
            children: [(0, AW.jsxs)("button", {
              className: "WorldCodeAiLinkButton",
              title: "Show this line in your code",
              onClick: () => {
                var WW, RW;
                EW(null !== (WW = fM.path) && void 0 !== WW ? WW : jR, null !== (RW = fM.line) && void 0 !== RW ? RW : 1), window.matchMedia("(max-width: 900px)").matches && UW()
              },
              children: [fM.path && fM.path !== jR ? `${fM.path} line` : "Line", " ", fM.line]
            }), ":", " "]
          }), fM.text]
        }), nR && (0, AW.jsx)("div", {
          className: "WorldCodeAiErrorText",
          children: FM
        }), (0, AW.jsxs)("div", {
          className: "WorldCodeAiErrorActions",
          children: [(0, AW.jsx)("button", {
            ...jy.h,
            className: "WorldCodeAiPrimaryButton",
            onClick: () => {
              aw((() => {
                OR(sW), UM.current(`Fix this error: ${FM}`)
              }))
            },
            children: "Fix the error"
          }), (0, AW.jsx)("button", {
            ...jy.h,
            className: "WorldCodeAiSecondaryButton",
            onClick: () => {
              aw((() => {
                OR(sW), UM.current(`Explain this error in simple words, and where it is in my code: ${FM}`)
              }))
            },
            children: "Explain it"
          }), (0, AW.jsx)("button", {
            className: "WorldCodeAiLinkButton",
            onClick: () => {
              OR(sW)
            },
            children: "Dismiss"
          }), (0, AW.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiErrorDetailsToggle",
            onClick: () => {
              GR(!nR)
            },
            children: nR ? "Hide details" : "Show details"
          })]
        }), (0, AW.jsx)("div", {
          className: "WorldCodeAiErrorNote",
          children: "Fix the error and Explain it send this error and your code to the AI."
        })]
      }), mM && (0, AW.jsxs)("div", {
        className: "WorldCodeAiPicked",
        children: [(0, AW.jsxs)("span", {
          children: ["Changing ", xe(mM), " of ", mM.path]
        }), (0, AW.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: () => {
            xM(null)
          },
          children: "Cancel"
        })]
      }), (0, AW.jsx)(yN, {
        step: "aiAskBox",
        children: (0, AW.jsx)("form", {
          className: "WorldCodeAiInputRow",
          onSubmit: WW => {
            WW.preventDefault(), pM()
          },
          children: (0, AW.jsxs)("div", {
            className: "WorldCodeAiAsk",
            children: [(0, AW.jsx)("textarea", {
              ref: BM,
              className: "WorldCodeAiAskInput",
              value: hR,
              maxLength: 1e3,
              rows: 2,
              placeholder: mM ? `How should ${xe(mM)} change?` : aC ? "Or type your own answer here" : "Ask AI",
              onChange: WW => {
                UR(WW.target.value)
              },
              onKeyDown: WW => {
                WW.stopPropagation(), "Enter" !== WW.key || WW.shiftKey || WW.nativeEvent.isComposing || 229 === WW.nativeEvent.keyCode || (WW.preventDefault(), pM())
              }
            }), (0, AW.jsx)(eW.m, {
              className: "WorldCodeAiSend",
              ariaLabel: "Send",
              disabled: "" === hR.trim() || !!bM && ER.length >= 3,
              onClick: pM,
              children: (0, AW.jsx)(BW.e, {
                name: "arrow-up"
              })
            })]
          })
        })
      }), (0, AW.jsx)(yN, {
        step: "aiModelChip",
        children: (0, AW.jsx)("div", {
          className: zR()("WorldCodeAiLimit", bM && "WorldCodeAiLimit-busy"),
          children: (0, AW.jsx)(tN, {
            editsOn: kR ? XR : null,
            freeOnce: lR,
            onFreeOnce: FR,
            onAddKey: Uw,
            children: (() => {
              if (bM) return 0 === vw.length ? "You can type your next request: it sends when this answer is done." : 1 === vw.length ? "1 request waiting: it sends when this answer is done." : `${vw.length} requests waiting: they send one at a time.`;
              if (Ew && lR) return `Your next question goes to Bot.xd, then back to ${Ew.model.name}.`;
              if (Ew) return `Your question and code go to ${aA(Ew.provider,Ew.baseUrl,!0)}.`;
              if (vC) {
                const WW = null === Kw ? null : function(WW, RW) {
                  return WW <= RW ? null : `Limit resets in ${(0,gb.e)(Math.ceil((WW-RW)/6e4))}`
                }(Kw, LR);
                return null === WW ? ab(vC) : (0, AW.jsxs)(AW.Fragment, {
                  children: [(0, AW.jsx)("span", {
                    className: "WorldCodeAiModelChipStatusLine",
                    children: ab(vC)
                  }), (0, AW.jsx)("span", {
                    className: "WorldCodeAiModelChipStatusLine",
                    children: WW
                  })]
                })
              }
              return oM > LR ? `Send now and it starts by itself. ${XN(oM-LR)}` : null
            })()
          })
        })
      })]
    });
    return (0, AW.jsx)(yN, {
      step: Lw,
      onPrevious: "aiPanel" === Lw ? UW : void 0,
      children: AC
    })
  })),
  CB = wB
}, 37377: (WW, RW, MW) => {
  MW.d(RW, {
    c: () => yR,
    f: () => zR,
    j: () => CW
  });
  const wW = 6e3;

  function CW(WW, RW) {
    return [Math.floor(WW[0] / RW) * RW, Math.floor(WW[1] / RW) * RW, Math.floor(WW[2] / RW) * RW]
  }

  function zR(WW) {
    const RW = (null !== WW && void 0 !== WW ? WW : "").match(/-?\d+(?:\.\d+)?/g);
    return RW && RW.length >= 3 ? [Number(RW[0]), Number(RW[1]), Number(RW[2])] : null
  }

  function AW(WW, RW) {
    return WW === RW ? String(WW) : `${WW}-${RW}`
  }

  function bR(WW, RW, MW, wW) {
    const CW = [];
    let zR = new Map;
    for (let AW = WW[2]; AW < WW[2] + RW; AW++) {
      const bR = new Map;
      let yR = WW[0];
      for (; yR < WW[0] + RW;) {
        const CW = wW(yR, MW, AW);
        let NW = yR;
        for (; NW + 1 < WW[0] + RW && wW(NW + 1, MW, AW) === CW;) NW++;
        if (null !== CW) {
          const WW = `${yR} ${NW} ${CW}`,
            RW = zR.get(WW);
          RW ? (RW.z1 = AW, zR.delete(WW), bR.set(WW, RW)) : bR.set(WW, {
            x0: yR,
            x1: NW,
            z0: AW,
            z1: AW,
            name: CW
          })
        }
        yR = NW + 1
      }
      CW.push(...zR.values()), zR = bR
    }
    return CW.push(...zR.values()), CW.sort(((WW, RW) => WW.z0 - RW.z0 || WW.x0 - RW.x0)).map((WW => `x${AW(WW.x0,WW.x1)} z${AW(WW.z0,WW.z1)} ${WW.name}`))
  }

  function yR(WW, RW, MW, CW) {
    let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wW;
    const yR = [WW[0] + RW - 1, WW[1] + RW - 1, WW[2] + RW - 1],
      NW = null !== CW && CW.every(((RW, MW) => Math.floor(RW) >= WW[MW] && Math.floor(RW) <= yR[MW])),
      eW = [`The chunk from ${WW.join(" ")} to ${yR.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
    null !== CW && eW.push(`The player's feet are at ${CW.map(Math.floor).join(" ")}, ${NW?"in this chunk":"outside this chunk"}.`);
    const BW = [];
    for (let wW = WW[1]; wW <= yR[1]; wW++) {
      const CW = bR(WW, RW, wW, MW).join("; "),
        zR = BW[BW.length - 1];
      (null === zR || void 0 === zR ? void 0 : zR.boxes) === CW ? zR.to = wW : BW.push({
        from: wW,
        to: wW,
        boxes: CW
      })
    }
    const tR = BW.filter((WW => "" !== WW.boxes));
    0 === tR.length && eW.push("It is all air.");
    let TW = eW.join("\n").length;
    for (const wW of tR) {
      const WW = `y${AW(wW.from,wW.to)}: ${wW.boxes}`;
      if (TW += WW.length + 1, TW > zR) {
        eW.push(`Cut short: the layers from y${wW.from} up aren't shown, as there are too many blocks.`);
        break
      }
      eW.push(WW)
    }
    return eW.join("\n")
  }
}, 3799: (WW, RW, MW) => {
  MW.d(RW, {
    A: () => TW,
    c: () => CW,
    d: () => yR,
    h: () => zR,
    i: () => AW,
    m: () => bR,
    n: () => YW,
    r: () => eW,
    u: () => BW,
    x: () => iR
  });
  var wW = MW(1413);
  const CW = 24e3,
    zR = "/docs/llms.txt",
    AW = `${wW.c}${zR}`,
    bR = "/llms.txt",
    yR = "/docs/llms-full.txt";

  function NW(WW) {
    return WW || "index"
  }

  function eW(WW) {
    return `/docs/${NW(WW)}.md`
  }

  function BW(WW, RW) {
    return `/docs/${NW(WW)}/${RW+1}.md`
  }
  const tR = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

  function TW(WW) {
    const RW = tR.exec(WW);
    return null === RW ? null : {
      name: RW[1],
      part: void 0 === RW[2] ? null : Number(RW[2])
    }
  }
  const gR = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

  function iR(WW) {
    const RW = gR.exec(WW);
    if (null === RW) return null;
    const [, MW = "", wW] = RW;
    return void 0 === wW ? eW(MW) : BW(MW, Number(wW) - 1)
  }

  function YW(WW) {
    return `/docsHtml/${NW(WW)}.html`
  }
}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);