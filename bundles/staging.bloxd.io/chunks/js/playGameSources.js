export const id = 46;
export const ids = [46];
export const modules = {
  39682: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      e: () => XS,
      g: () => bS
    });
    const tS = 6e3;

    function bS(SS, HS) {
      return [Math.floor(SS[0] / HS) * HS, Math.floor(SS[1] / HS) * HS, Math.floor(SS[2] / HS) * HS]
    }

    function XS(SS) {
      const HS = (null !== SS && void 0 !== SS ? SS : "").match(/-?\d+(?:\.\d+)?/g);
      return HS && HS.length >= 3 ? [Number(HS[0]), Number(HS[1]), Number(HS[2])] : null
    }

    function xS(SS, HS) {
      return SS === HS ? String(SS) : `${SS}-${HS}`
    }

    function NS(SS, HS, gS, tS) {
      const bS = [];
      let XS = new Map;
      for (let xS = SS[2]; xS < SS[2] + HS; xS++) {
        const NS = new Map;
        let qS = SS[0];
        for (; qS < SS[0] + HS;) {
          const bS = tS(qS, gS, xS);
          let uS = qS;
          for (; uS + 1 < SS[0] + HS && tS(uS + 1, gS, xS) === bS;) uS++;
          if (null !== bS) {
            const SS = `${qS} ${uS} ${bS}`,
              HS = XS.get(SS);
            HS ? (HS.z1 = xS, XS.delete(SS), NS.set(SS, HS)) : NS.set(SS, {
              x0: qS,
              x1: uS,
              z0: xS,
              z1: xS,
              name: bS
            })
          }
          qS = uS + 1
        }
        bS.push(...XS.values()), XS = NS
      }
      return bS.push(...XS.values()), bS.sort(((SS, HS) => SS.z0 - HS.z0 || SS.x0 - HS.x0)).map((SS => `x${xS(SS.x0,SS.x1)} z${xS(SS.z0,SS.z1)} ${SS.name}`))
    }

    function qS(SS, HS, gS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tS;
      const qS = [SS[0] + HS - 1, SS[1] + HS - 1, SS[2] + HS - 1],
        uS = null !== bS && bS.every(((HS, gS) => Math.floor(HS) >= SS[gS] && Math.floor(HS) <= qS[gS])),
        IS = [`The chunk from ${SS.join(" ")} to ${qS.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== bS && IS.push(`The player's feet are at ${bS.map(Math.floor).join(" ")}, ${uS?"in this chunk":"outside this chunk"}.`);
      const fS = [];
      for (let tS = SS[1]; tS <= qS[1]; tS++) {
        const bS = NS(SS, HS, tS, gS).join("; "),
          XS = fS[fS.length - 1];
        (null === XS || void 0 === XS ? void 0 : XS.boxes) === bS ? XS.to = tS : fS.push({
          from: tS,
          to: tS,
          boxes: bS
        })
      }
      const kS = fS.filter((SS => "" !== SS.boxes));
      0 === kS.length && IS.push("It is all air.");
      let aS = IS.join("\n").length;
      for (const tS of kS) {
        const SS = `y${xS(tS.from,tS.to)}: ${tS.boxes}`;
        if (aS += SS.length + 1, aS > XS) {
          IS.push(`Cut short: the layers from y${tS.from} up aren't shown, as there are too many blocks.`);
          break
        }
        IS.push(SS)
      }
      return IS.join("\n")
    }
  },
  8990: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(24);

    function bS() {
      return !tS.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36979: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      c: () => XS,
      d: () => bS
    });
    const tS = [.25, .5, 1, 2, 4, 8, 16];

    function bS(SS, HS) {
      const gS = tS;
      let bS = gS.indexOf(SS);
      return -1 === bS && (bS = gS.findIndex((HS => HS >= SS)), -1 === bS && (bS = gS.length - 1)), "up" === HS ? gS[Math.min(bS + 1, gS.length - 1)] : gS[Math.max(bS - 1, 0)]
    }

    function XS(SS) {
      return SS <= tS[0]
    }

    function xS(SS) {
      return SS >= tS[tS.length - 1]
    }
  },
  36508: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      f: () => XS
    });
    let tS = !1;

    function bS() {
      return tS
    }

    function XS(SS) {
      return tS !== SS && (tS = SS, !0)
    }
  },
  39043: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(31),
      bS = gS(2083);

    function XS(SS) {
      let {
        taskId: HS,
        progress: gS
      } = SS;
      const tS = bS.d.get("_tasks");
      null !== tS && void 0 !== tS && tS[HS] && bS.d.apply({
        _tasks: {
          ...tS,
          [HS]: {
            ...tS[HS],
            progress: gS
          }
        }
      })
    }
    tS.k.subscribe("clientTaskProgress", (SS => {
      XS(SS)
    }))
  },
  39647: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS,
      f: () => KS,
      j: () => uS,
      m: () => fS,
      o: () => qS,
      s: () => xS,
      u: () => IS,
      v: () => jS
    });
    var tS = gS(2083),
      bS = gS(31),
      XS = gS(2097);
    const xS = (0, XS.r)((function() {
        var SS, HS, gS, bS;
        return {
          health: null !== (SS = tS.d.get("_health")) && void 0 !== SS ? SS : null,
          maxHealth: null !== (HS = tS.d.get("_totalMaxHealth")) && void 0 !== HS ? HS : null,
          shield: null !== (gS = tS.d.get("_shield")) && void 0 !== gS ? gS : null,
          maxShield: null !== (bS = tS.d.get("maxShield")) && void 0 !== bS ? bS : null
        }
      }), [], (0, XS.n)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      NS = [{
        canFly: !1,
        flying: !1
      }, {
        canFly: !1,
        flying: !0
      }, {
        canFly: !0,
        flying: !1
      }, {
        canFly: !0,
        flying: !0
      }];

    function qS(SS, HS) {
      return NS[(SS ? 2 : 0) + (HS ? 1 : 0)]
    }
    const uS = (0, XS.r)((function() {
      var SS;
      return null !== (SS = tS.d.get("_aura")) && void 0 !== SS ? SS : null
    }), [], (0, XS.n)("_aura"));

    function IS(SS) {
      return {
        watch: HS => (0, bS.m)("shotPlayer", (gS => {
          let {
            playerId: tS,
            damage: bS,
            wasCrit: XS,
            distance: xS
          } = gS;
          SS(tS) && HS({
            damage: bS,
            wasCrit: XS,
            distance: xS
          })
        }))
      }
    }

    function fS(SS) {
      return (0, XS.c)("chat", (HS => {
        let {
          serverChatMsgId: gS,
          content: tS,
          chatterEId: bS
        } = HS;
        return {
          serverChatMsgId: null !== gS && void 0 !== gS ? gS : null,
          content: tS,
          author: bS ? SS(bS) : null
        }
      }))
    }
    class kS {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const gS = this.shown;
        return SS !== this.needed && (this.needed = SS, this.neededSince = HS, null === SS && (this.shown = null)), this.shown !== this.needed && HS - this.neededSince > 200 && (this.shown = this.needed), this.shown !== gS
      }
    }

    function aS(SS) {
      return [{
        translationKey: `touchKeys:${SS}`
      }]
    }
    const KS = {
      open: aS("open"),
      close: aS("close"),
      milk: aS("milk"),
      shear: aS("shear"),
      tame: aS("tame"),
      feed: aS("feed"),
      ride: aS("ride")
    };

    function jS(SS) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: SS
      }]
    }
  },
  41064: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      g: () => xS
    });
    var tS = gS(3440);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= gS.e(212).then((() => gS(36337))).then((SS => {
        let {
          ITEM_SPRITES: HS,
          ITEM_SPRITES_WITHOUT_FILE: gS,
          ITEM_FILES_WITHOUT_SPRITE: XS
        } = SS;
        bS = function(SS, HS, gS) {
          const bS = new Set,
            XS = (0, tS.v)(HS);
          let xS = 0;
          for (const [tS, NS] of SS.entries()) tS === XS[xS] ? xS++ : bS.add(NS);
          if ("" !== gS)
            for (const NS of gS.split(tS.q)) bS.add(NS);
          return bS
        }(HS.split(tS.q), gS, XS)
      }), (SS => {
        throw XS = null, SS
      })), XS
    }

    function NS(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = bS) || void 0 === gS ? void 0 : gS.has(SS)) && void 0 !== HS && HS
    }
  },
  39670: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      g: () => XS,
      h: () => bS
    });
    const tS = 128;

    function bS(SS, HS, gS, tS) {
      const bS = 2 * HS - 1,
        XS = 1 - 2 * gS,
        xS = SS(0) - bS * SS(3),
        NS = SS(4) - bS * SS(7),
        qS = SS(8) - bS * SS(11),
        uS = SS(1) - XS * SS(3),
        IS = SS(5) - XS * SS(7),
        fS = SS(9) - XS * SS(11);
      tS[0] = NS * fS - qS * IS, tS[1] = qS * uS - xS * fS, tS[2] = xS * IS - NS * uS;
      const kS = tS[0] * SS(3) + tS[1] * SS(7) + tS[2] * SS(11) < 0 ? -1 : 1,
        aS = Math.hypot(tS[0], tS[1], tS[2]) * kS;
      return tS[0] /= aS, tS[1] /= aS, tS[2] /= aS, tS
    }

    function XS(SS, HS, gS, tS, bS, XS) {
      const xS = [Math.floor(HS[0]), Math.floor(HS[1]), Math.floor(HS[2])],
        NS = [0, 0, 0],
        qS = [1 / 0, 1 / 0, 1 / 0],
        uS = [1 / 0, 1 / 0, 1 / 0];
      for (let kS = 0; kS < 3; kS++) NS[kS] = Math.sign(gS[kS]), 0 !== NS[kS] && (uS[kS] = Math.abs(1 / gS[kS]), qS[kS] = (xS[kS] + (NS[kS] > 0 ? 1 : 0) - HS[kS]) / gS[kS]);
      let IS = 0,
        fS = Math.abs(gS[0]) > Math.abs(gS[1]) ? 0 : 1;
      for (Math.abs(gS[2]) > Math.abs(gS[fS]) && (fS = 2); IS <= tS;) {
        if (SS(xS[0], xS[1], xS[2])) return bS[0] = xS[0], bS[1] = xS[1], bS[2] = xS[2], XS[0] = 0, XS[1] = 0, XS[2] = 0, XS[fS] = -NS[fS], !0;
        fS = qS[0] < qS[1] ? 0 : 1, qS[2] < qS[fS] && (fS = 2), IS = qS[fS], xS[fS] += NS[fS], qS[fS] += uS[fS]
      }
      return !1
    }
  },
  39641: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(2022);

    function bS(SS, HS, gS) {
      return (0, tS.n)(SS, HS) < gS
    }
  },
  39031: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS
    });
    var tS = gS(1309),
      bS = gS(1406),
      XS = gS(24),
      xS = gS(1390),
      NS = gS(1400),
      qS = gS(1608),
      uS = gS(36479);

    function IS(SS) {
      let {
        Vb: HS,
        ib: gS
      } = SS;
      const IS = null !== HS && void 0 !== HS ? HS : (0, NS.e)().gameNameWithVariation;
      (0, tS.M)(IS) && ((0, uS.i)(), (0, xS.gb)((() => {
        console.log("Received matchmaking order from game server to game", HS), (0, XS.k)("inGameReplay"), (0, qS.navigatePreserveSearch)((0, bS.d)(IS, null !== gS && void 0 !== gS ? gS : void 0))
      }), "video_start"))
    }
  },
  39189: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(31),
      bS = gS(2111);

    function XS(SS) {
      var HS, gS;
      const XS = (0, bS.o)(null !== (HS = null === (gS = bS.u.toggleFreeCam) || void 0 === gS ? void 0 : gS[0]) && void 0 !== HS ? HS : null);
      tS.k.cj("showBottomMessage", {
        message: `Free Camera ${SS?"Enabled":"Disabled"}${XS?` - Press ${XS} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39029: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => qS,
      i: () => xS,
      j: () => NS,
      m: () => uS
    });
    var tS = gS(31),
      bS = gS(1435);
    const XS = new Map;

    function xS(SS, HS) {
      tS.k.cj("newUiRequest", {
        id: SS,
        clientParameters: HS
      }, !0)
    }

    function NS(SS) {
      tS.k.cj("removeUiRequest", SS, !0);
      const HS = XS.get(SS);
      HS && (HS.tearDownNotification(), XS.delete(SS))
    }

    function qS() {
      tS.k.cj("clearUiRequests");
      for (const SS of XS.values()) SS.tearDownNotification();
      XS.clear()
    }

    function uS(SS, HS, gS, tS) {
      const xS = bS.NotificationProvider.showPromptPopup({
        title: HS,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: gS,
        unlockPointerKey: "uiRequestPopup"
      });
      XS.set(SS, xS), xS.getResult().then((HS => {
        XS.delete(SS), "notificationTornDown" !== HS && tS(HS)
      }))
    }
  },
  39678: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS,
      c: () => kS
    });
    var tS = gS(198),
      bS = gS(39682);
    const XS = 20;

    function xS(SS) {
      return SS.map(Math.floor).join(" ")
    }

    function NS(SS) {
      return null === SS.amount || 1 === SS.amount ? SS.name : `${SS.amount} ${SS.name}`
    }
    var qS = gS(39690),
      uS = gS(2083),
      IS = gS(1400);

    function fS(SS, HS) {
      if (!SS) return qS.d;
      const gS = SS.playerFeet();
      if (!gS) return "The player isn't in the world yet, so no blocks can be seen.";
      const XS = tS.e.JK,
        xS = (0, bS.g)(null !== HS && void 0 !== HS ? HS : gS, XS),
        NS = SS.chunkBlocks(xS);
      return NS ? (0, bS.d)(xS, XS, ((HS, gS, tS) => {
        const bS = NS(HS, gS, tS);
        return 0 === bS ? null : SS.blockName(bS).split("|")[0]
      }), gS) : `The chunk from ${xS.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${gS.map(Math.floor).join(" ")}.`
    }

    function kS(SS) {
      var HS, gS, tS;
      if (!SS) return qS.h;
      const bS = SS.playerFeet();
      if (!bS) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: fS,
        heldSlot: kS
      } = SS.inventory();
      return function(SS) {
        const HS = [];
        null !== SS.game && HS.push(`Game: ${SS.game}.`);
        const gS = null === SS.health ? "" : `, health ${Math.round(SS.health)}${null===SS.maxHealth?"":` of ${Math.round(SS.maxHealth)}`}`;
        HS.push(`The player (the creator) stands at ${xS(SS.position)}${gS}, ${SS.creative?"in":"not in"} creative mode.`);
        const tS = SS.slots[SS.heldSlot];
        HS.push(tS ? `Holding (slot ${SS.heldSlot}): ${NS(tS)}.` : `Holding nothing (slot ${SS.heldSlot} is empty).`);
        const bS = SS.slots.flatMap(((SS, HS) => SS ? [`slot ${HS}: ${NS(SS)}`] : []));
        HS.push(bS.length > 0 ? `Inventory: ${bS.join(", ")}.` : "Inventory: empty.");
        const qS = HS => Math.hypot(HS.position[0] - SS.position[0], HS.position[1] - SS.position[1], HS.position[2] - SS.position[2]),
          uS = [...SS.nearby].sort(((SS, HS) => qS(SS) - qS(HS)));
        if (0 === uS.length) HS.push("No other players or mobs are near enough to see.");
        else {
          HS.push("Near them, nearest first:");
          for (const SS of uS.slice(0, XS)) {
            const gS = "player" === SS.kind ? `player "${SS.name||"?"}"` : SS.name && SS.name !== SS.kind ? `${SS.kind} "${SS.name}"` : SS.kind,
              tS = Math.round(qS(SS));
            HS.push(`- ${gS} at ${xS(SS.position)}, ${tS} block${1===tS?"":"s"} away`)
          }
          uS.length > XS && HS.push(`- and ${uS.length-XS} more further away`)
        }
        return SS.droppedItems > 0 && HS.push(`${SS.droppedItems} dropped item${1===SS.droppedItems?" is":"s are"} on the ground nearby.`), HS.join("\n")
      }({
        game: null !== (HS = (0, IS.e)().gameNameWithVariation) && void 0 !== HS ? HS : null,
        position: bS,
        health: null !== (gS = uS.d.get("_health")) && void 0 !== gS ? gS : null,
        maxHealth: null !== (tS = uS.d.get("_totalMaxHealth")) && void 0 !== tS ? tS : null,
        creative: !0 === uS.d.get("creative"),
        heldSlot: kS,
        slots: fS,
        nearby: SS.nearby(),
        droppedItems: SS.droppedItems()
      })
    }
  },
  39054: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      d: () => qS,
      g: () => uS
    });
    var tS = gS(1309),
      bS = gS(1087),
      XS = gS(36887),
      xS = gS(31);

    function NS(SS) {
      let {
        lobbyName: HS,
        gameNameWithVariation: gS
      } = SS;
      return !(0, tS.P)(HS) || null !== gS && (gS.startsWith("testGym") || (0, bS.m)(gS))
    }

    function qS(SS) {
      return SS.BX === XS.b.Leave || SS.BX === XS.b.Cursor
    }

    function uS(SS) {
      xS.k.cj("codeCollab", {
        type: SS.BX,
        docKey: SS.MX,
        version: SS.FX,
        editorCount: SS.RX,
        peers: SS.TX,
        updates: SS.oX,
        playerId: SS.lX,
        playerName: SS.mX,
        colour: SS.eX,
        anchor: SS.rX,
        head: SS.Sx,
        existingCursors: SS.Hx,
        files: SS.gx,
        engineSettings: SS.tx
      })
    }
  },
  40911: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => lS,
      D: () => VS,
      F: () => vS,
      G: () => yS,
      K: () => cS,
      M: () => MS,
      N: () => BS,
      O: () => LS,
      c: () => FS,
      g: () => WS,
      h: () => OS,
      j: () => RS,
      m: () => dS,
      n: () => JS,
      q: () => iS,
      s: () => ES,
      w: () => AS,
      x: () => YS
    });
    var tS = gS(1471),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(2510),
      NS = gS(4954),
      qS = gS(4911);
    let uS, IS = !1,
      fS = !1,
      kS = !1,
      aS = !1;
    const KS = 1300,
      jS = 3e3;
    let GS = 0,
      CS = !1,
      nS = !1,
      PS = 0;
    const QS = 2;
    let DS = !1,
      wS = !1;
    const hS = new Set,
      ZS = new Set;

    function JS() {
      return IS
    }

    function OS() {
      return nS
    }

    function dS() {
      return wS
    }

    function cS() {
      return (0, XS.v)() && !wS
    }

    function vS(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (SS !== wS) {
        wS = SS;
        for (const SS of [...ZS]) SS(wS);
        HS && BS()
      }
    }

    function ES(SS) {
      return ZS.add(SS), () => {
        ZS.delete(SS)
      }
    }

    function LS() {
      (0, NS.i)(xS.A.Menu, (0, XS.v)() ? 0 : xS.A.Menu)
    }

    function YS() {
      nS = !1, PS = 0, LS(), BS()
    }

    function AS(SS) {
      return hS.add(SS), () => {
        hS.delete(SS)
      }
    }

    function yS(SS) {
      fS = !1, SS !== IS && (IS = SS, aS = !1, clearTimeout(uS), kS = !IS && DS, IS ? (CS = !1, nS = !1, PS = 0) : cS() && !DS && (nS = !0), DS = !1, IS && !cS() && oS(), mS(), kS && BS())
    }

    function VS(SS) {
      SS !== CS && (CS = SS, SS || BS())
    }

    function iS() {
      fS = !1, aS || !0 !== pS() || (aS = !0, clearTimeout(uS), uS = setTimeout(zS, KS))
    }

    function WS() {
      return (!fS || performance.now() - GS > jS) && (fS = (0, qS.J)().lockPointer(), GS = performance.now()), fS
    }

    function zS() {
      US() && sS() && WS()
    }

    function US() {
      return cS() && !IS && !CS && !(0, tS.h)()
    }

    function pS() {
      var SS;
      return "undefined" === typeof navigator || null === (SS = navigator.userActivation) || void 0 === SS ? void 0 : SS.isActive
    }

    function sS() {
      return kS && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== pS()
    }

    function BS() {
      cS() ? US() && !nS && sS() && WS() : IS && !DS && oS()
    }

    function MS() {
      nS ? navigator.vendor.startsWith("Apple") ? TS() : PS = QS : BS()
    }

    function FS() {
      PS > 0 && 0 === --PS && TS()
    }

    function RS() {
      PS = 0
    }

    function TS() {
      US() && !0 === pS() && WS()
    }

    function oS() {
      DS = !0, (0, qS.J)().unlockPointer()
    }

    function lS() {
      fS = !1, kS = !1, aS = !1, clearTimeout(uS), CS = !1, nS = !1, PS = 0, DS = !1;
      const SS = IS;
      IS = !1, SS && mS()
    }

    function mS() {
      for (const SS of [...hS]) SS(IS);
      bS.k.cj("pointerLockUpdate", IS)
    }
  },
  40707: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS,
      g: () => NS,
      i: () => fS,
      l: () => uS,
      p: () => xS,
      r: () => IS,
      v: () => qS
    });
    let tS = null,
      bS = null,
      XS = null;

    function xS(SS) {
      tS = SS
    }

    function NS() {
      return tS
    }

    function qS(SS) {
      bS = SS
    }

    function uS() {
      return bS
    }

    function IS(SS) {
      XS = SS
    }

    function fS() {
      return XS
    }

    function kS() {
      var SS, HS;
      return !0 === (null === (SS = bS) || void 0 === SS || null === (HS = SS.currentViewer) || void 0 === HS ? void 0 : HS.inPlayback)
    }
  },
  41033: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      attachPlayGameSources: () => ht,
      playGameSources: () => wt
    });
    var tS = gS(2060),
      bS = gS(40707),
      XS = gS(4911),
      xS = gS(40625),
      NS = gS(41010),
      qS = gS(39647),
      uS = gS(31),
      IS = gS(4935),
      fS = gS(4926),
      kS = gS(40658),
      aS = gS(40681),
      KS = gS(41035),
      jS = gS(40666);
    (0, jS.l)(IS.kc.Chat, (SS => {
      if (SS.payloadKind !== fS.xc.Msgpack) return;
      const HS = function(SS) {
        if (null === SS || "object" !== typeof SS || !("content" in SS)) return null;
        const {
          chatMsgId: HS,
          content: gS,
          chatterEId: tS
        } = SS;
        return {
          serverChatMsgId: null !== HS && void 0 !== HS ? HS : void 0,
          content: gS,
          chatterEId: void 0 === tS || null === tS ? void 0 : String(tS)
        }
      }((0, kS.c)(SS.payload));
      null !== HS && uS.k.cj("chat", HS, !0)
    }));
    const GS = {
        chatReceived: (0, qS.m)((function(SS) {
          var HS, gS, tS;
          return {
            id: SS,
            name: null !== (HS = KS.g.getName(SS)) && void 0 !== HS ? HS : null,
            local: (0, aS.d)() === SS,
            profileEffect: null !== (gS = null === (tS = (0, KS.j)(SS)) || void 0 === tS ? void 0 : tS.profileEffect) && void 0 !== gS ? gS : null
          }
        }))
      },
      CS = {
        sendChatMessage(SS) {
          var HS;
          let {
            Ju: gS,
            channelName: tS
          } = SS;
          null === (HS = (0, xS.h)()) || void 0 === HS || HS.clientApi.sendChat(gS, tS)
        }
      };
    var nS = gS(198),
      PS = gS(2083),
      QS = gS(40612),
      DS = gS(39641);
    const wS = [0, 0, 0],
      hS = {
        codeBlockClickable(SS) {
          var HS;
          const gS = (0, xS.h)();
          if (null === gS || void 0 === gS || !gS.isSessionLive) return !1;
          const tS = gS.api;
          if (0 !== (QS.t.playerFlags(tS.apiView, 0) & QS.zd.Crouching)) return !1;
          const bS = tS.queries.directorEntity(tS.localId) >= QS.db.BYTES ? tS.memoryData(tS.scratch(), QS.db.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === bS) return !1;
          for (let XS = 0; XS < 3; XS++) wS[XS] = QS.db.feet(bS, 0, XS);
          return wS[1] += QS.db.eyeHeight(bS, 0), (0, DS.b)(wS, SS, null !== (HS = PS.d.get("blockReach")) && void 0 !== HS ? HS : nS.e.BG)
        }
      },
      ZS = {
        clickCodeBlock(SS) {
          var HS;
          null === (HS = (0, xS.h)()) || void 0 === HS || HS.clickCodeBlock(SS)
        }
      };
    var JS = gS(40637),
      OS = gS(41042),
      dS = gS(1087),
      cS = gS(39058),
      vS = gS(4904),
      ES = gS(40649),
      LS = gS(40632),
      YS = gS(40655);

    function AS(SS) {
      if (null === SS) return null;
      const HS = [];
      for (const gS of SS) {
        const SS = Object.keys(gS)[0];
        if ("Zg" === SS) {
          const {
            str: SS,
            style: tS,
            clickableUrl: bS
          } = gS.Zg, XS = Object.keys(SS)[0], xS = SS[XS];
          "string" !== XS && "styledEntityName" !== XS && "styledTranslatedText" !== XS || HS.push({
            str: xS,
            style: tS,
            clickableUrl: bS
          })
        } else HS.push(gS[SS])
      }
      return HS
    }
    const yS = {
      screenPos(SS) {
        var HS, gS;
        return null !== (HS = null === (gS = (0, xS.h)()) || void 0 === gS ? void 0 : gS.renderFrame.projectWorldPosToScreenPos(SS)) && void 0 !== HS ? HS : {
          x: 0,
          y: 0
        }
      }
    };
    let VS = !1;

    function iS() {
      VS || (VS = !0, (0, jS.l)(IS.kc.ProgressBarUpdate, (SS => {
        const HS = (0, YS.g)(SS);
        (0, YS.b)(HS) && uS.k.cj("progressBarUpdate", HS, !0)
      })), (0, jS.l)(ES.A, (SS => {
        const HS = (0, YS.e)(ES.A, SS);
        HS && uS.k.cj("middleScreenBarInitiate", {
          duration: HS.Bt,
          Mt: HS.Mt,
          horizBarRemOffset: HS.Ft
        }, !0)
      })), (0, jS.l)(IS.kc.RemoveMiddleScreenBar, (() => {
        uS.k.cj("middleScreenBarRemove")
      })), (0, jS.l)(ES.fb, (SS => {
        const HS = (0, YS.e)(ES.fb, SS);
        if (HS) {
          var gS;
          const SS = HS.Qt ? null === (gS = (0, xS.h)()) || void 0 === gS ? void 0 : gS.renderFrame.projectDirectionToScreenPos(HS.Qt) : void 0;
          uS.k.cj("sendHitmarker", {
            Pt: HS.Pt,
            screenPos: SS
          }, !0)
        }
      })), (0, jS.l)(ES.jb, (SS => {
        const HS = (0, YS.e)(ES.jb, SS);
        if (HS) {
          const {
            id: SS,
            position: gS,
            style: tS,
            ut: bS,
            kt: XS
          } = HS;
          uS.k.cj("setDirectionArrow", {
            id: SS,
            position: gS,
            style: tS,
            text: AS(bS),
            kt: XS
          }, !0)
        }
      })), (0, jS.l)(ES.g, (SS => {
        const HS = (0, YS.e)(ES.g, SS);
        HS && uS.k.cj("clearDirectionArrow", {
          id: HS.id
        }, !0)
      })), (0, jS.l)(ES.v, (SS => {
        const HS = (0, YS.e)(ES.v, SS);
        HS && uS.k.cj("flyingMiddleMessage", {
          content: AS(HS.cX),
          vX: HS.vX,
          EX: HS.EX
        }, !0)
      })), (0, jS.l)(IS.kc.WorldVariation, (SS => {
        const HS = (0, YS.g)(SS);
        if ("string" === typeof HS) {
          const SS = HS === dS.g ? null : {
            message: `Currently loaded as variation: ${HS}`,
            type: "Warning"
          };
          uS.k.cj("showPermanentBottomMessage", SS, !0)
        }
      })), (0, jS.l)(ES.O, (SS => {
        const HS = (0, YS.e)(ES.O, SS);
        HS && function(SS, HS) {
          const {
            type: gS,
            params: tS
          } = (0, cS.g)(HS), bS = {
            ...tS
          };
          for (const XS of cS.e) bS[XS] && (bS[XS] = AS(bS[XS]));
          vS.c.queueQTE(SS, gS, bS).getResult().then((HS => {
            var gS;
            "boolean" === typeof HS && (null === (gS = (0, xS.h)()) || void 0 === gS || gS.send(LS.b.QteResponse, {
              qteId: SS,
              qteResponse: HS
            }))
          }))
        }(HS.id, HS.Gg)
      })), (0, jS.l)(ES._, (SS => {
        const HS = (0, YS.e)(ES._, SS);
        "number" === typeof HS && vS.c.cancelQTE(HS)
      })), (0, jS.f)((() => {
        vS.c.reset()
      })), (0, jS.h)((() => {
        vS.c.reset()
      })), (0, jS.l)(IS.kc.EditItemCraftingRecipes, (SS => {
        const HS = (0, YS.g)(SS);
        (0, YS.b)(HS) && uS.k.cj("craftingRecipesEdited", {
          itemName: HS.craftingRecipeItemName,
          recipesForItem: HS.recipesForItem
        })
      })), (0, jS.l)(ES.Z, (SS => {
        const HS = (0, YS.e)(ES.Z, SS);
        HS && uS.k.cj("craftingRecipesEdited", {
          itemName: HS.JX,
          recipesForItem: []
        })
      })))
    }
    var WS = gS(24);
    const zS = [{
      allowed: !1,
      movesFly: !1
    }, {
      allowed: !1,
      movesFly: !0
    }, {
      allowed: !0,
      movesFly: !1
    }, {
      allowed: !0,
      movesFly: !0
    }];

    function US(SS) {
      return QS.t.playerFlags(SS.api.apiView, 0)
    }
    const pS = {
        freeCamera: (0, aS.b)((SS => () => {
          const HS = SS.isSessionLive && 0 !== (US(SS) & QS.zd.FreeCamMoves),
            gS = SS.freeCameraAllowed() && null === WS.b.get("scriptedCameraFacing");
          return zS[(gS ? 2 : 0) + (HS ? 1 : 0)]
        }), zS[0], (SS => (0, XS.t)(SS)))
      },
      sS = {
        setFreeCameraMovesFly: SS => {
          var HS;
          null === (HS = (0, xS.h)()) || void 0 === HS || HS.setFreeCameraMovesFly(SS)
        }
      },
      BS = {
        freeCameraPos: () => {
          const SS = (0, xS.h)();
          return null !== SS && void 0 !== SS && SS.isSessionLive && SS.renderFrame.hasView && 0 !== (US(SS) & QS.zd.FreeCam) ? SS.renderFrame.cameraPosition : null
        }
      };
    var MS = gS(39189);
    let FS = !1,
      RS = !1;

    function TS() {
      const SS = (0, xS.h)();
      if (null === SS || void 0 === SS || !SS.isSessionLive) return void(FS = !1);
      const HS = 0 !== (QS.t.playerFlags(SS.api.apiView, 0) & QS.zd.FreeCam);
      HS !== FS && (FS = HS, (0, MS.b)(HS))
    }
    var oS = gS(387),
      lS = gS(37063),
      mS = gS(2097);
    var eS = gS(41046),
      rS = gS(40678);
    const SH = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let HH = "off";

    function gH(SS) {
      var HS;
      return null === SS ? null : {
        label: null !== (HS = (0, eS.b)(SS, "interactionPrompt")) && void 0 !== HS ? HS : null
      }
    }
    const tH = new Map([
      [QS.mc.Open, {
        label: qS.f.open
      }],
      [QS.mc.Close, {
        label: qS.f.close
      }],
      [QS.mc.Milk, {
        label: qS.f.milk
      }],
      [QS.mc.Shear, {
        label: qS.f.shear
      }],
      [QS.mc.Tame, {
        label: qS.f.tame
      }],
      [QS.mc.Feed, {
        label: qS.f.feed
      }],
      [QS.mc.Ride, {
        label: qS.f.ride
      }]
    ]);
    class bH {
      constructor() {
        this.target = SH, this.XI = QS.Tc, this.optionName = null, this.pickaxe = new qS.d
      }
      read(SS) {
        var HS;
        const gS = QS.t.targetBlockId(SS.api.apiView, 0);
        gS !== this.XI && (this.XI = gS, this.optionName = gS === QS.Tc ? null : `${SS.tables.getMetaInfo(gS).rootName}CrosshairText`);
        const tS = null === this.optionName ? null : null !== (HS = SS.tables.getClientOption(this.optionName)) && void 0 !== HS ? HS : null;
        this.pickaxe.update(function(SS, HS) {
          var gS, tS, bS;
          if (0 === (QS.t.playerFlags(SS.api.apiView, 0) & QS.zd.Breaking) || HS === QS.Tc || 0 === HS) return null;
          const {
            tables: XS
          } = SS;
          if (!0 === XS.getClientOption("creative")) return null;
          const xS = XS.nameOfId(HS),
            NS = null === (gS = SS.items.Ku()) || void 0 === gS ? void 0 : gS.name,
            qS = null !== (tS = XS.getItemStat(xS, "harvestLevel")) && void 0 !== tS ? tS : 0;
          return (0, oS.xc)({
            blockHarvestType: XS.getDefaultItemStat(xS, "harvestType"),
            blockHarvestLevel: XS.getDefaultItemStat(xS, "harvestLevel"),
            harvestLevel: qS,
            heldToolType: void 0 === NS ? void 0 : XS.getDefaultItemStat(NS, "harvests"),
            heldToolLevel: void 0 === NS ? void 0 : XS.getDefaultItemStat(NS, "level")
          }) && null !== (bS = lS.p[qS]) && void 0 !== bS ? bS : null
        }(SS, gS)), SS.watchPromptPick(HH);
        const bS = "touch" === HH ? function(SS) {
          var HS;
          const gS = SS.interactLabel;
          return gS === QS.mc.Entity ? gH(SS.promptEntity) : gS === QS.mc.TameWith ? {
            label: (0, qS.v)(SS.tables.nameOfId(SS.interactIcon))
          } : null !== (HS = tH.get(gS)) && void 0 !== HS ? HS : null
        }(SS) : gH(SS.promptEntity);
        return this.target = (0, mS.s)(this.target, {
          interactPrompt: bS,
          blockText: tS,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let XH = null;
    const xH = {
      current: () => {
        var SS, HS;
        return null !== (SS = null === (HS = XH) || void 0 === HS ? void 0 : HS.target) && void 0 !== SS ? SS : SH
      },
      watch: SS => {
        const HS = new bH;
        XH = HS;
        const gS = (0, aS.h)((gS => {
          let tS = HS.read(gS);
          SS(tS);
          const bS = (0, XS.w)((() => {
            const bS = HS.read(gS);
            bS !== tS && (tS = bS, SS(bS))
          }));
          return () => {
            bS(), gS.watchPromptPick("off")
          }
        }));
        return () => {
          gS(), XH === HS && (XH = null)
        }
      }
    };
    let NH = 0,
      qH = 0;
    const uH = {
        health: qS.s,
        aura: qS.j,
        hotbar: rS.e.states.hotbar,
        heldItemAim: rS.e.states.heldItemAim,
        crouching: (0, aS.b)((SS => function(SS) {
          const HS = () => 0 !== (QS.t.playerFlags(SS.apiView, 0) & QS.zd.Crouching);
          return {
            current: HS,
            watch(SS) {
              let gS = HS();
              return (0, XS.t)((() => {
                const tS = HS();
                tS !== gS && (gS = tS, SS(tS))
              }))
            }
          }
        }(SS.api).current), !1, (SS => (0, XS.t)(SS))),
        flight: (0, aS.b)((SS => () => function(SS) {
          const HS = QS.t.playerFlags(SS.apiView, 0);
          return (0, qS.o)(0 !== (HS & QS.zd.CanFly), 0 !== (HS & QS.zd.Flying))
        }(SS.api)), (0, qS.o)(!1, !1), (SS => (0, XS.t)(SS))),
        gliderBoostFuel: (0, aS.b)((SS => () => QS.t.gliderBoostFuel(SS.api.apiView, 0)), 0, (SS => (0, XS.t)(SS))),
        crosshairTarget: xH
      },
      IH = {
        hotbarSlotRequested: rS.e.events.hotbarSlotRequested,
        hotbarScrolled: rS.e.events.hotbarScrolled,
        numberKeyPressed: rS.e.events.numberKeyPressed,
        shotDamageToShow: (0, qS.u)((SS => !0 === (0, eS.b)(SS, "showDamageAmounts")))
      },
      fH = {
        selectHotbarSlot: rS.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: SS => {
          HH = SS
        }
      },
      kH = {
        momentumFrac: function() {
          var SS, HS, gS;
          const tS = (0, xS.h)(),
            bS = performance.now(),
            XS = null === tS || void 0 === tS || null === (SS = tS.items.Ku()) || void 0 === SS || null === (HS = SS.attributes) || void 0 === HS || null === (gS = HS.customAttributes) || void 0 === gS ? void 0 : gS.enchantments;
          return NH = null !== tS && null !== XS && void 0 !== XS && XS.Momentum ? 0 !== (QS.t.playerFlags(tS.api.apiView, 0) & QS.zd.Breaking) ? Math.max(0, QS.t.momentumFrac(tS.api.apiView, 0)) : Math.max(0, NH - (bS - qH) / 1500) : 0, qH = bS, NH
        }
      };
    var aH = gS(40616);
    const KH = {
      lobbyManage(SS) {
        var HS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.LobbyManage, SS)
      }
    };
    var jH = gS(1327),
      GH = gS(36508),
      CH = gS(8990),
      nH = gS(1733),
      PH = gS(2510),
      QH = gS(4938);
    let DH = !1;

    function wH(SS) {
      DH = SS
    }

    function hH() {
      "inGame" !== WS.b.get("gameState") || (0, nH.m)() || uS.k.cj("ctrlCrouchWithoutFullscreen")
    }
    let ZH = !1;
    const JH = {
        OpenEmoteWheel: () => {
          wH(!0), ZH = !0, queueMicrotask((() => {
            ZH && (ZH = !1, uS.k.cj("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          uS.k.cj("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, GH.c)() || uS.k.cj("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, GH.c)() || uS.k.cj("XKeyPressed")
        },
        CtrlCrouch: hH,
        "primary-fire": () => {
          uS.k.cj("mouseState", {
            xI: jH.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          uS.k.cj("mouseState", {
            xI: jH.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          uS.k.cj("mouseState", {
            xI: jH.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      OH = {
        OpenEmoteWheel: () => {
          wH(!1), ZH ? (ZH = !1, (0, CH.b)() || uS.k.cj("requestEmoteWheelHoldOpen")) : uS.k.cj("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: hH,
        "primary-fire": () => {
          uS.k.cj("mouseState", {
            xI: jH.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          uS.k.cj("mouseState", {
            xI: jH.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          uS.k.cj("mouseState", {
            xI: jH.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let dH = !1;

    function cH() {
      dH || (dH = !0, (0, QH.h)((SS => {
        if ((0, bS.e)()) return;
        const HS = (0, QH.e)(SS) ? "primary-fire" : SS.action;
        var gS;
        if (SS.down) {
          if (0 === (SS.flags & PH.b.Synthetic)) {
            var tS;
            null === (tS = JH[HS]) || void 0 === tS || tS.call(JH)
          }
        } else null === (gS = OH[HS]) || void 0 === gS || gS.call(OH)
      })))
    }
    var vH = gS(369),
      EH = gS(104),
      LH = gS(45),
      YH = gS(40911),
      AH = gS(1400),
      yH = gS(39054);
    let VH = !1;
    const iH = {
      sendCodeCollab(SS) {
        var HS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.CodeCollab, (0, LS.m)(SS), (0, yH.d)(SS))
      }
    };
    var WH = gS(39127);
    let zH = null,
      UH = !1,
      pH = null;

    function sH() {
      return "inGame" === WS.b.get("gameState") && !(0, GH.c)()
    }
    const BH = {
        OpenInventory: SS => {
          (0, nH.s)(SS, "inventory", (0, aH.o)())
        },
        OpenShop: SS => {
          zH && sH() && (0, nH.r)(SS, vH.q.SHOP, !zH.shopIsEmpty(PS.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: SS => {
          sH() && (0, nH.r)(SS, vH.q.LOBBY_LEADERBOARD, (0, WH.e)({
            lobbyLeaderboardInfo: PS.d.get("lobbyLeaderboardInfo"),
            lobbyManage: PS.d.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: SS => {
          var HS;
          const gS = null === (HS = zH) || void 0 === HS ? void 0 : HS.getClientGameMapKey();
          gS ? (0, nH.w)(SS, !0, gS) : (0, nH.s)(SS, "retentionFeatures", !(!PS.d.get("_tasks") && !PS.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: SS => {
          (0, nH.s)(SS, "inviteLink", EH.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: SS => {
          sH() && function(SS) {
            var HS;
            const gS = (0, xS.h)(),
              tS = null !== gS && void 0 !== gS && gS.isSessionLive ? gS.api : null,
              bS = tS ? tS.lC(tS.localId) : null,
              XS = null !== (HS = null === bS || void 0 === bS ? void 0 : bS.map((SS => Math.floor(SS)))) && void 0 !== HS ? HS : null;
            (0, nH.w)(SS, null !== XS && (0, yH.c)((0, AH.e)()), (() => {
              uS.k.cj("EditLobbyCode", XS)
            }))
          }(SS)
        },
        HideUi: () => {
          uS.k.cj("showUi", !1)
        }
      },
      MH = {
        HideUi: () => {
          uS.k.cj("showUi", !0)
        }
      };

    function FH() {
      UH || (UH = !0, gS.e(157).then((() => gS(60664))).then((SS => {
        zH = SS
      }), (SS => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", SS)
      })), (0, YH.w)((SS => {
        SS || !(0, YH.h)() || (0, EH.isMobile)() || !LH.g.getItem("disableFullscreen") || (0, nH.l)() || WS.b.set({
          openEverythingMenuName: vH.q.SETTINGS
        })
      })), (0, QH.h)((SS => {
        let {
          action: HS,
          down: gS,
          press: tS
        } = SS;
        var XS, xS;
        (0, bS.e)() || (gS ? null === (XS = BH[HS]) || void 0 === XS || XS.call(BH, function(SS) {
          var HS;
          if (0 === SS || (null === (HS = pH) || void 0 === HS ? void 0 : HS.press) !== SS) {
            const HS = {
              press: SS,
              event: new Event("inputAction")
            };
            pH = HS, queueMicrotask((() => {
              pH === HS && (pH = null)
            }))
          }
          return pH.event
        }(tS)) : null === (xS = MH[HS]) || void 0 === xS || xS.call(MH))
      })))
    }
    var RH = gS(39043),
      TH = gS(39031),
      oH = gS(39029);
    const lH = {
      completeTask(SS) {
        var HS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.CompleteTask, (0, LS.o)(SS))
      },
      setServerCookie(SS) {
        var HS;
        let {
          key: gS,
          value: tS
        } = SS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.GeneralCookieSet, (0, LS.t)({
          Ex: gS,
          Lx: tS
        }))
      },
      answerUiRequest(SS) {
        var HS;
        let {
          id: gS,
          GI: tS
        } = SS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.UiRequestResp, (0, LS.U)({
          Vu: gS,
          iu: tS,
          Wu: 5
        }))
      },
      chooseRewardedAd(SS) {
        var HS;
        let {
          id: gS,
          GI: tS
        } = SS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.UiRequestResponded, (0, LS.Q)({
          id: gS,
          GI: tS
        }))
      },
      requestLeaderboard(SS) {
        var HS;
        let {
          category: gS,
          timeframe: tS,
          seeTop: bS
        } = SS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.LeaderboardRequest, {
          category: gS,
          timeframe: tS,
          seeTop: bS
        })
      }
    };
    let mH = !1;
    const eH = nS.e.UG / 2,
      rH = [eH, -eH, -eH, -eH, eH, eH, -eH, eH],
      Sg = [0, 0, 0];

    function Hg(SS, HS, gS) {
      for (let tS = 0; tS < SS.length; tS += 2)
        if (SS[tS] === HS && SS[tS + 1] === gS) return !0;
      return !1
    }
    const gg = {
      blocksStandingOn: function() {
        const SS = (0, xS.h)();
        if (null === SS) return [];
        const {
          api: HS,
          chunks: gS,
          tables: tS
        } = SS;
        if (!HS.readPosition(HS.localId, Sg)) return [];
        const [bS, XS, NS] = Sg, qS = Math.ceil(XS) - 1, uS = [], IS = [];
        for (let xS = 0; xS < rH.length; xS += 2) {
          const SS = bS + rH[xS],
            HS = NS + rH[xS + 1];
          if (Number.isInteger(SS) || Number.isInteger(HS)) continue;
          const XS = Math.floor(SS),
            fS = Math.floor(HS);
          if (Hg(IS, XS, fS)) continue;
          const kS = gS.XI(XS, qS, fS);
          tS.isSolidBlockId(kS) && (IS.push(XS, fS), uS.push(tS.nameOfId(kS)))
        }
        return uS
      },
      dropAhead: function() {
        const SS = (0, xS.h)();
        return null !== SS && 0 !== (QS.t.playerFlags(SS.api.apiView, 0) & QS.zd.DropAhead)
      }
    };
    var tg = gS(36979),
      bg = gS(39106),
      Xg = gS(1435),
      xg = gS(40689);
    const Ng = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      qg = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function ug() {
      const SS = new Set;
      return {
        add: HS => (SS.add(HS), () => {
          SS.delete(HS)
        }),
        fire() {
          for (const HS of SS) HS()
        }
      }
    }
    const Ig = Object.freeze([]);

    function fg(SS, HS) {
      let gS, {
        rereads: tS,
        followLocalId: bS
      } = HS;
      const xS = () => (gS = (0, mS.s)(gS, SS()), gS);
      return {
        current: xS,
        watch(SS) {
          const HS = (0, KS.c)((HS => {
            tS(HS) && SS(xS())
          }));
          if (!bS) return HS;
          let gS = (0, aS.d)();
          const NS = (0, XS.w)((() => {
            const HS = (0, aS.d)();
            HS !== gS && (gS = HS, SS(xS()))
          }));
          return () => {
            HS(), NS()
          }
        }
      }
    }
    const kg = {
        players: fg((function() {
          const SS = KS.g.ids(),
            HS = {};
          for (const XS of SS) {
            var gS, tS, bS;
            HS[XS] = {
              name: null !== (gS = KS.g.getName(XS)) && void 0 !== gS ? gS : null,
              ranks: null !== (tS = KS.g.getSetting(XS, "ranks")) && void 0 !== tS ? tS : Ig,
              cosmetics: null !== (bS = (0, KS.j)(XS)) && void 0 !== bS ? bS : null
            }
          }
          return {
            ids: SS,
            byId: HS,
            localId: (0, aS.d)()
          }
        }), {
          rereads: SS => "roster" !== SS.kind || SS.members || SS.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: fg((function() {
          const SS = {};
          for (const bS of KS.g.ids()) {
            var HS, gS, tS;
            SS[bS] = {
              colour: null !== (HS = KS.g.getSetting(bS, "colorInLobbyLeaderboard")) && void 0 !== HS ? HS : null,
              values: null !== (gS = KS.g.getSetting(bS, "lobbyLeaderboardValues")) && void 0 !== gS ? gS : null,
              tags: null !== (tS = KS.g.getSetting(bS, "lobbyLeaderboardTags")) && void 0 !== tS ? tS : null
            }
          }
          return SS
        }), {
          rereads: function(SS) {
            if ("roster" !== SS.kind) return "reset" === SS.kind;
            const {
              members: HS,
              settings: gS
            } = SS;
            return HS || gS.has("colorInLobbyLeaderboard") || gS.has("lobbyLeaderboardValues") || gS.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      ag = {
        cosmeticsUpdated: {
          watch: SS => (0, KS.c)((HS => {
            if ("cosmetics" !== HS.kind) return;
            const gS = (0, aS.d)();
            SS(HS.updates.map((SS => {
              let {
                Dt: HS,
                wt: tS,
                ht: bS
              } = SS;
              return {
                local: HS === gS,
                wt: tS,
                ht: bS
              }
            })))
          }))
        }
      };
    var Kg = gS(3067),
      jg = gS(1844),
      Gg = gS(713),
      Cg = gS(40945);
    let ng = !1,
      Pg = null;
    const Qg = {
      setShopOpen(SS) {
        var HS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.ShopMenuChanged, (0, LS.M)(SS))
      },
      buyShopItem(SS) {
        var HS;
        let {
          categoryKey: gS,
          itemKey: tS,
          userInput: bS
        } = SS;
        null === (HS = (0, xS.h)()) || void 0 === HS || HS.send(LS.b.ItemBought, {
          categoryKey: gS,
          itemKey: tS,
          shopVersion: PS.d.get("_shopVersion"),
          userInput: bS
        })
      }
    };
    let Dg = !1;
    var wg = gS(4954);
    const hg = PH.A.LookFrozen | PH.A.ClicksSuppressed;

    function Zg(SS, HS) {
      var gS;
      null !== (gS = (0, xS.h)()) && void 0 !== gS && gS.send(SS, HS) || console.warn(`[bloxd-wasm-client] message ${SS} not sent: no live game or the core's command ring is full`)
    }(0, jS.l)(ES.nb, (SS => {
      const HS = (0, YS.e)(ES.nb, SS);
      void 0 !== HS && uS.k.cj("setDiscordReportKey", HS)
    }));
    const Jg = {
      ignorePlayer(SS) {
        Zg(LS.b.IgnoreUser, (0, LS.x)({
          bx: SS
        }))
      },
      reportPlayer(SS) {
        let {
          playerId: HS,
          chatMsgId: gS,
          Mq: tS,
          details: bS
        } = SS;
        Zg(LS.b.UserReport, (0, LS.db)({
          Fu: HS,
          Ru: gS,
          Mq: tS,
          Fq: bS
        }))
      },
      reportWorldCodeChat(SS) {
        let {
          chatMsgId: HS,
          Mq: gS,
          details: tS
        } = SS;
        Zg(LS.b.UserReport, (0, LS.db)({
          Fu: "",
          Ru: HS,
          Mq: gS,
          Fq: tS
        }))
      },
      requestDiscordReportKey(SS) {
        Zg(LS.b.ReqDiscordReportKey, (0, LS.G)(SS))
      },
      reportLobbyOrGame(SS) {
        let {
          target: HS,
          Mq: gS,
          details: tS
        } = SS;
        "customGame" === HS ? Zg(LS.b.CustomGameReport, (0, LS.r)({
          Mq: gS,
          Fq: tS
        })) : Zg(LS.b.LobbyReport, (0, LS.A)({
          Mq: gS,
          Fq: tS
        }))
      },
      updateMyCosmetic(SS) {
        Zg(LS.b.UpdateMyCosmetic, (0, LS.$)(SS))
      },
      holdEmoteWheel(SS) {
        !SS || DH ? (0, wg.i)(hg, SS ? hg : 0) : uS.k.cj("requestEmoteWheelHoldRelease")
      }
    };
    var Og = gS(41049),
      dg = gS(9361),
      cg = gS(39670);
    const vg = [0, 0, 0],
      Eg = [0, 0, 0],
      Lg = [0, 0, 0],
      Yg = {
        blockAtViewPoint(SS) {
          let {
            x: HS,
            y: gS
          } = SS;
          const tS = (0, xS.h)();
          if (null === tS || void 0 === tS || !tS.renderFrame.hasView) return null;
          const {
            renderFrame: bS,
            clientApi: XS,
            api: NS
          } = tS;
          let qS = 0;
          return (0, cg.g)(((SS, HS, gS) => (qS = XS.getBlockId(SS, HS, gS), 0 !== qS)), bS.cameraPosition, (0, cg.h)((SS => QS.t.viewProj(NS.apiView, 0, SS)), HS, gS, vg), cg.c, Eg, Lg) ? {
            pos: [Eg[0], Eg[1], Eg[2]],
            normal: [Lg[0], Lg[1], Lg[2]],
            name: (0, dg.h)(qS)
          } : null
        }
      },
      Ag = {
        setBlockHighlight(SS) {
          var HS;
          null === (HS = (0, xS.h)()) || void 0 === HS || HS.setBlockHighlight(SS)
        }
      };
    var yg = gS(2073),
      Vg = gS(40934),
      ig = gS(41053),
      Wg = gS(4627),
      zg = gS(4590),
      Ug = gS(41055),
      pg = gS(3437),
      sg = gS(3440);
    let Bg = null,
      Mg = null;

    function Fg(SS) {
      const HS = SS.startsWith(sg.l),
        [gS, tS = gS, bS = gS] = (HS ? SS.slice(sg.l.length) : SS).split(sg.i);
      return {
        top: gS,
        left: tS,
        right: bS,
        half: HS
      }
    }

    function Rg(SS) {
      const HS = null === Bg ? void 0 : (0, pg.d)(SS),
        gS = void 0 === HS ? 0 : Bg.codes[HS];
      return 0 === gS ? void 0 : Bg.pool[gS - 1]
    }
    var Tg = gS(3435),
      og = gS(4579),
      lg = gS(4619),
      mg = gS(40977),
      eg = gS(41062);
    const rg = "item:";
    let St = null,
      Ht = null,
      gt = null,
      tt = null,
      bt = !1,
      Xt = !1;

    function xt() {
      return Xt || (Xt = !0, (0, lg.h)().then((SS => {
        SS && (0, yg.c)()
      }))), gt ??= Promise.all([(0, Tg.c)(), (Mg ??= gS.e(1).then((() => gS(60684))).then((SS => {
        let {
          BLOCK_FACE_RUNS: HS,
          BLOCK_FACES: gS,
          MAX_FACE_ITEM_ID: tS
        } = SS;
        Bg = {
          codes: (0, sg.w)(HS, tS + 1),
          pool: gS.split(sg.q).map(Fg)
        }
      }), (SS => {
        throw Mg = null, SS
      })), Mg), (0, eg.g)(), gS.e(198).then((() => gS(34248)))]).then((SS => {
        let [, , HS, gS] = SS;
        HS.followBundledTextures(), St = HS, Ht = gS, (0, yg.c)()
      }), (SS => {
        gt = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", SS)
      })), gt
    }

    function Nt(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = (0, mg.d)()) || void 0 === gS ? void 0 : gS.textureUrl(SS)) && void 0 !== HS ? HS : St.itemSpriteUrl(SS)
    }

    function qt(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = (0, mg.d)()) || void 0 === gS ? void 0 : gS.textureUrl(SS)) && void 0 !== HS ? HS : St.blockTextureUrl(SS)
    }

    function ut(SS) {
      var HS;
      return null !== (HS = (0, Tg.b)(SS)) && void 0 !== HS ? HS : SS
    }

    function It(SS, HS) {
      var gS, tS, bS;
      return null !== (gS = null !== (tS = null !== (bS = qt(SS)) && void 0 !== bS ? bS : null === HS || void 0 === HS ? void 0 : HS.rotated[SS]) && void 0 !== tS ? tS : null === HS || void 0 === HS ? void 0 : HS.animated[SS]) && void 0 !== gS ? gS : St.notFoundUrl()
    }

    function ft(SS) {
      return void 0 !== (0, pg.d)(SS) ? SS : /^[1-9][0-9]*$/.test(SS) ? (0, pg.e)(Number(SS)) : void 0
    }

    function kt(SS) {
      var HS;
      if (SS.startsWith(rg)) {
        var gS;
        const HS = (0, Tg.b)(SS.slice(5));
        return null !== (gS = void 0 === HS ? null : Nt(HS)) && void 0 !== gS ? gS : St.notFoundUrl()
      }
      return null !== (HS = St.particleUrl(SS)) && void 0 !== HS ? HS : St.notFoundUrl()
    }

    function Kt(SS, HS) {
      return "StairsBlock" === SS ? SS : HS ? "SlabBlock" : "CubeBlock"
    }
    const jt = {
        async blockIcon(SS) {
          var HS;
          let {
            name: tS,
            size: bS,
            lineWidth: XS
          } = SS;
          await xt();
          const xS = null !== (HS = ft(tS)) && void 0 !== HS ? HS : tS,
            NS = (0, lg.c)(xS, bS, XS);
          if (null !== NS) return NS;
          const qS = Rg(xS),
            uS = (0, pg.d)(xS),
            IS = void 0 === uS || null === Ht ? void 0 : Ht.itemTypeNameOf(uS);
          if (null === St || void 0 === qS) return "";
          const fS = [qS.top, qS.left, qS.right].some((SS => null === qt(SS))),
            kS = fS ? await (tt ??= gS.e(204).then((() => gS(34324))).then((SS => (bt && (bt = !1, (0, yg.c)()), {
              rotated: SS.rotatedBlockTextures,
              animated: SS.animatedBlockTextures
            })), (SS => (tt = null, bt = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", SS), null))), tt) : null;
          if (fS && null === kS) return "";
          const aS = {
              top: It(qS.top, kS),
              left: It(qS.left, kS),
              right: It(qS.right, kS),
              itemType: Kt(IS, qS.half)
            },
            KS = (0, mg.c)(),
            jS = 0 === KS ? xS : `${xS}#${KS}`;
          return (await (0, og.e)()).drawBlockIconUrl(jS, bS, XS, (() => aS))
        }
      },
      Gt = {
        itemIcon: function(SS) {
          var HS, gS, bS, XS;
          if (null === St) return xt(), tS.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(SS);
          if ((0, zg.j)(SS)) return {
            kind: "icon",
            url: null !== (gS = null !== (bS = null === (XS = (0, mg.d)()) || void 0 === XS ? void 0 : XS.textureUrl(SS)) && void 0 !== bS ? bS : St.ingameIconUrl(SS)) && void 0 !== gS ? gS : St.notFoundUrl()
          };
          if (SS.startsWith(zg.c)) return {
            kind: "icon",
            url: kt(SS.slice(zg.c.length))
          };
          if (0 === (0, pg.g)()) return (0, Ug.b)(), tS.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(SS);
          const xS = null !== (HS = ft(SS)) && void 0 !== HS ? HS : SS,
            NS = (0, pg.d)(xS),
            qS = void 0 === NS ? void 0 : Ht.itemTypeNameOf(NS);
          if (void 0 !== Rg(xS)) return {
            kind: "drawnBlock"
          };
          const uS = function(SS) {
            var HS;
            return null !== (HS = Nt(ut(SS))) && void 0 !== HS ? HS : St.notFoundUrl()
          }(xS);
          if ((0, lg.f)(xS) && ! function(SS) {
              const HS = (0, mg.d)();
              return null !== HS && (null !== HS.textureUrl(ut(SS)) || null !== HS.modelUrl(SS))
            }(xS)) return {
            kind: "model",
            url: uS
          };
          if ("Gun" === qS) return {
            kind: "gun",
            url: uS
          };
          if (void 0 !== NS && "GrayscaleArmour" === Ht.itemTypeOf(NS) || Object.hasOwn(Wg.c, xS)) {
            var IS;
            const HS = null !== (IS = (0, Wg.f)(SS)) && void 0 !== IS ? IS : (0, Wg.f)(xS);
            if (HS) return {
              kind: "item",
              url: uS,
              tint: HS
            }
          }
          return {
            kind: "item",
            url: uS
          }
        },
        hasIcon: function(SS) {
          return void 0 !== ft(SS) || (0, zg.j)(SS) || SS.startsWith(zg.c)
        },
        isItemName: function(SS) {
          return void 0 !== ft(SS)
        }
      };
    var Ct = gS(665),
      nt = gS(39678);

    function Pt(SS) {
      if (null === SS || void 0 === SS || !SS.isCoreRunning) return null;
      const {
        api: HS,
        chunks: gS,
        items: tS,
        tables: bS
      } = SS;
      return {
        playerFeet() {
          const SS = HS.lC(HS.localId);
          return null !== SS && void 0 !== SS && SS.every(Number.isFinite) ? SS : null
        },
        chunkBlocks: SS => gS.isLoaded(SS[0], SS[1], SS[2]) ? (SS, HS, tS) => gS.XI(SS, HS, tS) : null,
        blockName: SS => bS.nameOfId(SS),
        inventory: () => ({
          slots: tS.playerItems().map((SS => SS ? {
            name: SS.name,
            amount: SS.amount
          } : null)),
          heldSlot: tS.selectedSlot
        }),
        nearby() {
          const gS = [];
          for (let bS = 0; bS < HS.idStr.length; bS++) {
            var tS;
            const XS = HS.idStr[bS],
              xS = HS.serverIds[bS],
              NS = HS.kinds[bS];
            if (null === XS || HS.isLocal(xS) || NS >>> QS.e !== QS.r.Lifeform) continue;
            const qS = HS.lC(xS),
              uS = Ct.j[NS & QS.g];
            qS && void 0 !== uS && gS.push({
              kind: "Player" === uS ? "player" : uS,
              name: null !== (tS = SS.clientApi.getEntityName(XS)) && void 0 !== tS ? tS : null,
              position: qS
            })
          }
          return gS
        },
        droppedItems() {
          let SS = 0;
          for (let gS = 0; gS < HS.idStr.length; gS++) null !== HS.idStr[gS] && HS.kinds[gS] >>> QS.e === QS.r.Item && SS++;
          return SS
        }
      }
    }
    const Qt = {
        worldCodeAiChunk: SS => Promise.resolve((0, nt.b)(Pt((0, xS.h)()), SS)),
        worldCodeAiGameState: () => Promise.resolve((0, nt.c)(Pt((0, xS.h)())))
      },
      Dt = function(SS) {
        const HS = ug(),
          tS = ug(),
          bS = new Set,
          XS = new Set,
          xS = () => {
            var HS, gS;
            return null !== (HS = null === (gS = SS.runtime()) || void 0 === gS ? void 0 : gS.currentViewer) && void 0 !== HS ? HS : null
          };
        let NS = null,
          qS = null;
        const IS = (SS, HS) => ({
            current: SS,
            watch(gS) {
              let tS = SS();
              return HS.add((() => {
                const HS = SS();
                HS !== tS && (tS = HS, gS(HS))
              }))
            }
          }),
          kS = SS => ({
            watch: HS => (SS.add(HS), () => {
              SS.delete(HS)
            })
          }),
          aS = SS => {
            const HS = xS(),
              gS = null === HS || void 0 === HS ? void 0 : HS.view;
            HS && gS && HS.seek(Math.max(0, Math.min(gS.totalTicks - 1, gS.mf + SS * fS.Bd)))
          },
          KS = {
            replay: IS((() => {
              var SS;
              const HS = xS(),
                gS = null !== (SS = null === HS || void 0 === HS ? void 0 : HS.view) && void 0 !== SS ? SS : null;
              return null === HS || null === gS || gS.state === fS.qd.None ? (NS = null, null) : (NS = (0, mS.s)(NS, {
                id: HS.id,
                mf: gS.mf,
                totalTicks: gS.totalTicks,
                YL: fS.Bd,
                playing: gS.state === fS.qd.Playing,
                speed: gS.speed,
                cameraMode: gS.cameraMode,
                freecam: "freecam" === gS.cameraMode
              }), NS)
            }), HS),
            replayEdits: IS((() => {
              var SS;
              const HS = xS(),
                gS = null !== (SS = null === HS || void 0 === HS ? void 0 : HS.view) && void 0 !== SS ? SS : null;
              return null === HS || null === gS || gS.state === fS.qd.None ? (qS = null, null) : (qS = (0, mS.s)(qS, {
                cameraKeyframes: [...HS.keyframes],
                playbackMark: gS.mark,
                fileName: HS.fileName,
                unsavedChanges: HS.unsavedChanges,
                suggestSaveAs: HS.suggestSaveAs
              }), qS)
            }), HS),
            replayRecorder: IS((() => {
              var HS, gS;
              return null !== (HS = null === (gS = SS.runtime()) || void 0 === gS ? void 0 : gS.recorder.current) && void 0 !== HS ? HS : xg.e.states.replayRecorder.current()
            }), tS),
            replayVideoExporting: {
              current: bg.e,
              watch: SS => (0, uS.m)("replayViewer|videoExportChanged", (() => {
                SS((0, bg.e)())
              }))
            }
          },
          jS = {
            replayUiActionRequested: kS(XS),
            replayViewerRequested: kS(bS)
          },
          GS = SS => {
            for (const HS of bS) HS(SS)
          },
          CS = () => {
            var tS;
            !0 === (null === (tS = xS()) || void 0 === tS ? void 0 : tS.isOpen) && Promise.all([gS.e(96), gS.e(66)]).then((() => gS(60670))).then((gS => {
              let {
                startWasmReplayVideoExport: tS
              } = gS;
              return tS({
                viewer: xS,
                canvas: () => {
                  var HS, gS;
                  return null !== (HS = null === (gS = SS.canvas) || void 0 === gS ? void 0 : gS.call(SS)) && void 0 !== HS ? HS : null
                },
                watchViewer: HS.add,
                requestViewer: GS
              })
            }), (SS => {
              console.error("Couldn't load the video export", SS), Xg.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((SS => {
              console.error("The video export failed", SS)
            }))
          },
          nS = {
            replayAction(SS) {
              if ((0, bg.e)()) return;
              const HS = xS();
              switch (SS) {
                case "replaySkipBack":
                  aS(-1);
                  break;
                case "replaySkipForward":
                  aS(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== HS && void 0 !== HS && HS.view && HS.setSpeed((0, tg.d)(HS.view.speed, "replaySpeedUp" === SS ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === HS || void 0 === HS || HS.addKeyframe()
              }
            },
            setReplayPlaying(SS) {
              var HS, gS;
              (0, bg.e)() || (SS ? null === (HS = xS()) || void 0 === HS || HS.play() : null === (gS = xS()) || void 0 === gS || gS.pause())
            },
            seekReplay(SS) {
              var HS;
              let {
                mf: gS,
                ignorePlaybackMark: tS
              } = SS;
              null === (HS = xS()) || void 0 === HS || HS.seek(gS, null !== tS && void 0 !== tS && tS)
            },
            setReplayCameraMode(SS) {
              var HS;
              null === (HS = xS()) || void 0 === HS || HS.setCameraMode(SS)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(SS) {
              var HS;
              null === (HS = xS()) || void 0 === HS || HS.setKeyframe(SS)
            },
            moveReplayCameraKeyframe(SS) {
              var HS;
              let {
                from: gS,
                to: tS
              } = SS;
              null === (HS = xS()) || void 0 === HS || HS.moveKeyframe(gS, tS)
            },
            deleteReplayCameraKeyframes(SS) {
              var HS;
              let {
                start: gS,
                end: tS
              } = SS;
              null === (HS = xS()) || void 0 === HS || HS.deleteKeyframes(gS, tS)
            },
            setReplayPlaybackMark(SS) {
              var HS;
              null === (HS = xS()) || void 0 === HS || HS.setMark(SS)
            },
            cropReplay(SS) {
              var HS, gS;
              let {
                start: tS,
                end: bS
              } = SS;
              return !(0, bg.e)() && (null !== (HS = null === (gS = xS()) || void 0 === gS ? void 0 : gS.crop(tS, bS)) && void 0 !== HS && HS)
            },
            holdReplayForShaderPackFailure(SS) {
              const HS = xS();
              HS && (HS.holdForShaderPackFailure(), function(SS) {
                gS.e(115).then((() => gS(39226))).then((HS => {
                  let {
                    shaderPackPage: gS
                  } = HS;
                  gS.block(SS)
                })).catch((SS => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", SS)
                }))
              }(SS))
            },
            exportReplayVideo() {
              CS()
            },
            toggleRecording() {
              var HS;
              null === (HS = SS.runtime()) || void 0 === HS || HS.recorder.toggleRecording()
            },
            saveClip() {
              var HS;
              null === (HS = SS.runtime()) || void 0 === HS || HS.recorder.saveClip()
            },
            setRecorderPrefs(HS) {
              var gS;
              let {
                clipping: tS,
                clipSeconds: bS
              } = HS;
              null === (gS = SS.runtime()) || void 0 === gS || gS.recorder.setPrefs(tS, bS)
            },
            setReplayViewerOpen(HS) {
              var gS;
              (0, GH.f)(HS) && (null === (gS = SS.runtime()) || void 0 === gS || gS.recorder.viewerShown(HS))
            },
            recordFlyingMiddleText(HS) {
              var gS;
              let {
                content: tS,
                vX: bS,
                angle: XS,
                EX: xS
              } = HS;
              null === (gS = SS.runtime()) || void 0 === gS || gS.recorder.recordFlyingText(JSON.stringify(tS), bS, XS, xS)
            },
            dragReplayCamera(HS) {
              var gS;
              let {
                dx: tS,
                dy: bS
              } = HS;
              null === (gS = SS.freecam()) || void 0 === gS || gS.drag(tS, bS)
            },
            moveReplayFreecam(HS) {
              var gS;
              null === (gS = SS.freecam()) || void 0 === gS || gS.move(HS)
            },
            holdReplayFreecamVertical(HS) {
              var gS;
              let {
                action: tS,
                Ku: bS
              } = HS;
              null === (gS = SS.freecam()) || void 0 === gS || gS.holdVertical(tS, bS)
            }
          },
          PS = SS => {
            var HS;
            const gS = xS(),
              tS = null !== (HS = null === gS || void 0 === gS ? void 0 : gS.view) && void 0 !== HS ? HS : null;
            Ng.has(SS) ? (SS => {
              for (const HS of XS) HS(SS)
            })(SS) : qg.has(SS) ? nS.replayAction(SS) : "replayPlayPause" === SS ? gS && tS && tS.state !== fS.qd.None && nS.setReplayPlaying(tS.state !== fS.qd.Playing) : "replayChangeCameraMode" === SS ? null === gS || void 0 === gS || gS.cycleCameraMode() : "replayExit" === SS ? !0 === (null === gS || void 0 === gS ? void 0 : gS.inPlayback) && (0, AH.j)("/") : "replayExportVideo" === SS && CS()
          };
        let QS = !1;
        return {
          states: KS,
          events: jS,
          commands: nS,
          lookups: {
            replayCamera() {
              var HS, gS, tS;
              return !0 !== (null === (HS = xS()) || void 0 === HS ? void 0 : HS.isOpen) ? null : null !== (gS = null === (tS = SS.cameraView) || void 0 === tS ? void 0 : tS.call(SS)) && void 0 !== gS ? gS : null
            },
            leaveGameReloadsPage() {
              var SS;
              return !0 === (null === (SS = xS()) || void 0 === SS ? void 0 : SS.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var SS;
              const gS = !0 === (null === (SS = xS()) || void 0 === SS ? void 0 : SS.inPlayback);
              gS !== QS && (QS = gS, uS.k.cj("connectedGameChanged")), HS.fire()
            },
            recorderChanged: tS.fire,
            keyDown: SS => {
              var HS;
              switch (SS) {
                case "recordGame":
                  return void nS.toggleRecording();
                case "recordClip":
                  return void((0, GH.c)() || nS.saveClip())
              }(0, bg.e)() || ("replayViewerOpen" !== SS ? SS.startsWith("replay") && ((0, GH.c)() || !0 === (null === (HS = xS()) || void 0 === HS ? void 0 : HS.inPlayback)) && PS(SS) : GS("toggle"))
            }
          }
        }
      }({
        runtime: bS.l,
        cameraView: () => {
          var SS;
          const HS = null === (SS = (0, xS.h)()) || void 0 === SS ? void 0 : SS.renderFrame;
          if (!HS) return null;
          const [gS, tS, bS] = HS.cameraPosition, [XS, NS, qS] = HS.cameraDirection;
          return {
            position: [gS, tS, bS],
            direction: [XS, NS, qS]
          }
        },
        canvas: () => {
          var SS, HS, gS;
          return null !== (SS = null === (HS = (gS = (0, XS.J)()).canvas) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : null
        },
        freecam: bS.i
      }),
      wt = {
        states: {
          ...uH,
          ...aH.m,
          ...Dt.states,
          ...kg,
          ...pS
        },
        events: {
          ...IH,
          ...GS,
          ...aH.i,
          ...OS.b,
          ...Og.i,
          ...Dt.events,
          ...ag,
          ...JS.i
        },
        commands: {
          ...ZS,
          ...fH,
          ...CS,
          ...aH.e,
          ...lH,
          ...Jg,
          ...JS.f,
          ...iH,
          ...Dt.commands,
          ...Qg,
          ...sS,
          ...Ag,
          ...KH
        },
        queries: {
          ...aH.j,
          ...Qt
        },
        lookups: {
          ...kH,
          ...yS,
          ...Og.j,
          ...Dt.lookups,
          ...hS,
          ...gg,
          ...Yg,
          ...BS
        }
      };

    function ht() {
      (0, NS.i)(jS.m), (0, bS.p)(Dt.feed), (0, OS.c)(), mH || (mH = !0, (0, jS.l)(ES.o, (SS => {
        const HS = (0, YS.e)(ES.o, SS);
        "string" === typeof HS && Promise.resolve().then((() => gS(3779))).then((SS => {
          let {
            onCosmeticPackGranted: gS
          } = SS;
          gS(HS)
        }))
      })), (0, jS.l)(ES.gb, (SS => {
        const HS = (0, YS.e)(ES.gb, SS);
        "number" === typeof HS && uS.k.cj("serverUpdating", Date.now() + HS, !0)
      })), (0, jS.l)(ES.K, (SS => {
        const HS = (0, YS.e)(ES.K, SS);
        if ((0, YS.b)(HS)) {
          const {
            Vb: SS,
            ib: gS
          } = HS;
          (0, TH.d)({
            Vb: "string" === typeof SS ? SS : null,
            ib: "string" === typeof gS ? gS : null
          })
        }
      })), (0, jS.l)(IS.kc.NewUiRequest, (SS => {
        const HS = (0, YS.g)(SS);
        (0, YS.b)(HS) && "number" === typeof HS.id && (0, YS.b)(HS.clientParameters) && (0, oH.i)(HS.id, HS.clientParameters)
      })), (0, jS.l)(ES.bb, (SS => {
        const HS = (0, YS.e)(ES.bb, SS);
        "number" === typeof HS && (0, oH.j)(HS)
      })), (0, jS.h)(oH.e), (0, jS.l)(IS.kc.UiRequestPopup, (SS => {
        const HS = (0, YS.g)(SS);
        if ((0, YS.b)(HS) && "number" === typeof HS.id && "string" === typeof HS.text) {
          const SS = HS.id;
          (0, oH.m)(SS, HS.text, !0 === HS.destructive, (HS => {
            lH.answerUiRequest({
              id: SS,
              GI: HS
            })
          }))
        }
      })), (0, jS.l)(IS.kc.TopRightHelper, (SS => {
        const HS = (0, YS.g)(SS);
        void 0 !== HS && uS.k.cj("TopRightHelper", HS, !0)
      })), (0, jS.l)(IS.kc.TaskProgress, (SS => {
        const HS = (0, YS.g)(SS);
        (0, YS.b)(HS) && "string" === typeof HS.taskId && "number" === typeof HS.progress && (0, RH.c)({
          taskId: HS.taskId,
          progress: HS.progress
        })
      }))), Dg || (Dg = !0, (0, jS.l)(ES.w, (SS => {
        const HS = (0, YS.e)(ES.w, SS);
        (0, YS.b)(HS) && uS.k.cj("showShopFromServer", {
          toggle: HS.Ab,
          yb: HS.yb
        }, !0)
      })), (0, jS.l)(IS.kc.OverShopInfo, (SS => {
        const HS = (0, YS.g)(SS);
        (0, YS.b)(HS) && uS.k.cj("overShopInfo", HS.info, !0)
      })), (0, jS.l)(IS.kc.ShowShopTutorial, (() => {
        uS.k.cj("showShopTutorial", null, !0)
      }))), ng || (ng = !0, (0, jS.f)((() => {
        var SS;
        (0, Kg.u)(), null === (SS = Pg) || void 0 === SS || SS(), Pg = (0, jS.b)() ? (0, Gg.k)(jS.b) : null, (0, jS.b)() || uS.k.uC()
      })), (0, jS.l)(IS.kc.SetCookie, (SS => {
        const HS = (0, YS.g)(SS),
          gS = (0, AH.e)().gameNameWithVariation;
        (0, YS.b)(HS) && "string" === typeof HS.key && null !== gS && (0, jg.setCookie)(gS, HS.key, HS.value)
      })), (0, jS.l)(IS.kc.LeaveValues, (SS => {
        const HS = (0, YS.g)(SS);
        if ((0, YS.b)(HS) && "string" === typeof HS.leaveEventType) {
          const {
            leaveEventType: SS,
            category: gS,
            subCategory: tS,
            value: bS
          } = HS;
          (0, Kg.A)({
            leaveEventType: SS,
            category: gS,
            subCategory: tS,
            value: bS
          })
        }
      })), (0, jS.l)(IS.kc.CustomAnalyticsEvent, (SS => {
        const HS = (0, YS.g)(SS);
        if ((0, YS.b)(HS) && "string" === typeof HS.cat1) {
          const {
            cat1: SS,
            cat2: gS,
            cat3: tS,
            value: bS
          } = HS;
          (0, Kg.m)({
            cat1: SS,
            cat2: gS,
            cat3: tS,
            value: bS
          })
        }
      })), (0, jS.l)(IS.kc.ProgressionEvent, (SS => {
        const HS = (0, YS.g)(SS);
        if ((0, YS.b)(HS)) {
          const {
            type: SS,
            location1: gS,
            location2: tS,
            location3: bS,
            score: XS
          } = HS;
          (0, Kg.r)({
            type: SS,
            location1: gS,
            location2: tS,
            location3: bS,
            score: XS
          })
        }
      })), (0, jS.l)(IS.kc.ResourceEvent, (SS => {
        const HS = (0, YS.g)(SS);
        if ((0, YS.b)(HS)) {
          const {
            type: SS,
            resourceType: gS,
            amount: tS,
            category: bS,
            itemName: XS
          } = HS;
          (0, Kg.s)({
            type: SS,
            resourceType: gS,
            amount: tS,
            category: bS,
            itemName: XS
          })
        }
      })), (0, jS.l)(IS.kc.LeaderboardResponse, (SS => {
        const HS = (0, YS.g)(SS);
        if ((0, YS.b)(HS)) {
          const {
            category: SS,
            timeframe: gS,
            data: tS
          } = HS;
          uS.k.cj("leaderboardResponse", {
            category: SS,
            timeframe: gS,
            data: tS
          })
        }
      })), (0, jS.l)(ES.D, (SS => {
        const HS = (0, YS.e)(ES.D, SS);
        "string" === typeof HS && (0, Cg.d)(SS.conn, HS)
      })), (0, jS.l)(ES.G, (SS => {
        const HS = (0, YS.e)(ES.G, SS);
        "string" === typeof HS && console.error(`[logErrorToConsole]: ${HS}`)
      }))), iS(), (0, Og.b)(), VH || (VH = !0, (0, jS.l)(ES.k, (SS => {
        const HS = (0, YS.e)(ES.k, SS);
        void 0 !== HS && (0, yH.g)(HS)
      }))), FH(), cH(), RS || (RS = !0, (0, XS.t)(TS)), tS.gameBridge.attach(wt), (0, tS.installPageSources)({
        commands: {
          ...tS.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Vg.h
        },
        queries: jt,
        lookups: {
          ...tS.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Gt,
          fn: Vg.b,
          drawCallStats: ig.i
        }
      }), (0, yg.c)(), xt()
    }
  },
  40977: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => IS,
      c: () => qS,
      d: () => NS,
      h: () => uS
    });
    var tS = gS(2073);
    let bS = null,
      XS = 0;
    const xS = new Set;

    function NS() {
      return bS
    }

    function qS() {
      return XS
    }

    function uS(SS) {
      bS = SS, XS++, (0, tS.c)();
      for (const HS of xS) HS()
    }

    function IS(SS) {
      xS.add(SS)
    }
  },
  41062: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      g: () => NS
    });
    var tS = gS(41064);
    let bS = null,
      XS = null;

    function xS() {
      return bS ??= gS.e(61).then((() => gS(60692))).catch((SS => {
        throw bS = null, SS
      })), bS
    }

    function NS() {
      return XS ??= Promise.all([xS(), (0, tS.g)()]).then((SS => {
        let [HS] = SS;
        return HS
      }), (SS => {
        throw XS = null, SS
      })), XS
    }
  },
  37093: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  36887: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      d: () => XS,
      h: () => kS,
      j: () => NS,
      n: () => qS,
      q: () => uS,
      r: () => fS,
      v: () => IS,
      z: () => xS
    });
    var tS = gS(1327);
    let bS = function(SS) {
        return SS[SS.Join = 0] = "Join", SS[SS.Leave = 1] = "Leave", SS[SS.Push = 2] = "Push", SS[SS.Cursor = 3] = "Cursor", SS[SS.Submit = 4] = "Submit", SS[SS.ReloadAsVariation = 5] = "ReloadAsVariation", SS[SS.CreateFile = 6] = "CreateFile", SS[SS.RenameFile = 7] = "RenameFile", SS[SS.DeleteFile = 8] = "DeleteFile", SS[SS.SetEngine = 9] = "SetEngine", SS[SS.RenameFolder = 10] = "RenameFolder", SS
      }({}),
      XS = function(SS) {
        return SS[SS.Joined = 0] = "Joined", SS[SS.Updates = 1] = "Updates", SS[SS.Presence = 2] = "Presence", SS[SS.RemoteCursor = 3] = "RemoteCursor", SS[SS.ForceClose = 4] = "ForceClose", SS[SS.LobbyFilesChanged = 5] = "LobbyFilesChanged", SS[SS.EngineSettings = 6] = "EngineSettings", SS
      }({});

    function xS(SS) {
      return "lobby" === SS.kind ? `lobby:${SS.path}` : `codeBlock:${SS.pos[0]},${SS.pos[1]},${SS.pos[2]}`
    }

    function NS(SS) {
      if ("lobby" === SS) return {
        kind: "lobby",
        path: tS.i
      };
      if (SS.startsWith("lobby:")) {
        const HS = SS.slice(6);
        return fS(HS) ? {
          kind: "lobby",
          path: HS
        } : null
      }
      const HS = SS.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return HS ? {
        kind: "codeBlock",
        pos: [parseInt(HS[1]), parseInt(HS[2]), parseInt(HS[3])]
      } : null
    }

    function qS(SS) {
      return SS.endsWith(".d.ts")
    }

    function uS(SS) {
      return SS.endsWith(".ts") && !qS(SS)
    }
    const IS = 64;

    function fS(SS) {
      if (!SS || SS !== SS.trim()) return !1;
      if (SS.length > IS) return !1;
      if (SS.startsWith("/") || SS.includes("\\") || SS.includes("\0")) return !1;
      if (!qS(SS) && !uS(SS) && ! function(SS) {
          return SS.endsWith(".js") && !SS.endsWith(".min.js") && !SS.endsWith(".bundle.js")
        }(SS)) return !1;
      const HS = SS.split("/");
      for (const gS of HS)
        if ("" === gS || "." === gS || ".." === gS) return !1;
      return !0
    }
    const kS = 14e3
  },
  39058: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS,
      g: () => bS
    });
    const tS = ["description", "label"];

    function bS(SS) {
      const HS = SS.type;
      return {
        type: HS,
        params: SS[HS]
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);