export const id = 53;
export const ids = [53];
export const modules = {
  40757: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM,
      f: () => jM,
      g: () => SM
    });
    const OM = 6e3;

    function SM(MM, rM) {
      return [Math.floor(MM[0] / rM) * rM, Math.floor(MM[1] / rM) * rM, Math.floor(MM[2] / rM) * rM]
    }

    function jM(MM) {
      const rM = (null !== MM && void 0 !== MM ? MM : "").match(/-?\d+(?:\.\d+)?/g);
      return rM && rM.length >= 3 ? [Number(rM[0]), Number(rM[1]), Number(rM[2])] : null
    }

    function aM(MM, rM) {
      return MM === rM ? String(MM) : `${MM}-${rM}`
    }

    function PM(MM, rM, iM, OM) {
      const SM = [];
      let jM = new Map;
      for (let aM = MM[2]; aM < MM[2] + rM; aM++) {
        const PM = new Map;
        let nM = MM[0];
        for (; nM < MM[0] + rM;) {
          const SM = OM(nM, iM, aM);
          let QM = nM;
          for (; QM + 1 < MM[0] + rM && OM(QM + 1, iM, aM) === SM;) QM++;
          if (null !== SM) {
            const MM = `${nM} ${QM} ${SM}`,
              rM = jM.get(MM);
            rM ? (rM.z1 = aM, jM.delete(MM), PM.set(MM, rM)) : PM.set(MM, {
              x0: nM,
              x1: QM,
              z0: aM,
              z1: aM,
              name: SM
            })
          }
          nM = QM + 1
        }
        SM.push(...jM.values()), jM = PM
      }
      return SM.push(...jM.values()), SM.sort(((MM, rM) => MM.z0 - rM.z0 || MM.x0 - rM.x0)).map((MM => `x${aM(MM.x0,MM.x1)} z${aM(MM.z0,MM.z1)} ${MM.name}`))
    }

    function nM(MM, rM, iM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : OM;
      const nM = [MM[0] + rM - 1, MM[1] + rM - 1, MM[2] + rM - 1],
        QM = null !== SM && SM.every(((rM, iM) => Math.floor(rM) >= MM[iM] && Math.floor(rM) <= nM[iM])),
        zM = [`The chunk from ${MM.join(" ")} to ${nM.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== SM && zM.push(`The player's feet are at ${SM.map(Math.floor).join(" ")}, ${QM?"in this chunk":"outside this chunk"}.`);
      const LM = [];
      for (let OM = MM[1]; OM <= nM[1]; OM++) {
        const SM = PM(MM, rM, OM, iM).join("; "),
          jM = LM[LM.length - 1];
        (null === jM || void 0 === jM ? void 0 : jM.boxes) === SM ? jM.to = OM : LM.push({
          from: OM,
          to: OM,
          boxes: SM
        })
      }
      const mM = LM.filter((MM => "" !== MM.boxes));
      0 === mM.length && zM.push("It is all air.");
      let HM = zM.join("\n").length;
      for (const OM of mM) {
        const MM = `y${aM(OM.from,OM.to)}: ${OM.boxes}`;
        if (HM += MM.length + 1, HM > jM) {
          zM.push(`Cut short: the layers from y${OM.from} up aren't shown, as there are too many blocks.`);
          break
        }
        zM.push(MM)
      }
      return zM.join("\n")
    }
  },
  9392: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(19);

    function SM() {
      return !OM.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37876: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      f: () => jM,
      h: () => SM
    });
    const OM = [.25, .5, 1, 2, 4, 8, 16];

    function SM(MM, rM) {
      const iM = OM;
      let SM = iM.indexOf(MM);
      return -1 === SM && (SM = iM.findIndex((rM => rM >= MM)), -1 === SM && (SM = iM.length - 1)), "up" === rM ? iM[Math.min(SM + 1, iM.length - 1)] : iM[Math.max(SM - 1, 0)]
    }

    function jM(MM) {
      return MM <= OM[0]
    }

    function aM(MM) {
      return MM >= OM[OM.length - 1]
    }
  },
  40118: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      h: () => aM
    });
    var OM = iM(22);
    let SM = !1;

    function jM() {
      return SM
    }

    function aM(MM) {
      SM !== MM && (SM = MM, OM.i.Tz("replayViewer|videoExportChanged"))
    }
  },
  34822: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    let OM = !1;

    function SM() {
      return OM
    }

    function jM(MM) {
      return OM !== MM && (OM = MM, !0)
    }
  },
  40059: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(22),
      SM = iM(2067);

    function jM(MM) {
      let {
        taskId: rM,
        progress: iM
      } = MM;
      const OM = SM.d.get("_tasks");
      null !== OM && void 0 !== OM && OM[rM] && SM.d.apply({
        _tasks: {
          ...OM,
          [rM]: {
            ...OM[rM],
            progress: iM
          }
        }
      })
    }
    OM.i.subscribe("clientTaskProgress", (MM => {
      jM(MM)
    }))
  },
  40725: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      f: () => hM,
      h: () => QM,
      k: () => LM,
      n: () => nM,
      q: () => aM,
      u: () => zM,
      v: () => JM
    });
    var OM = iM(2067),
      SM = iM(22),
      jM = iM(2078);
    const aM = (0, jM.q)((function() {
        var MM, rM, iM, SM;
        return {
          health: null !== (MM = OM.d.get("_health")) && void 0 !== MM ? MM : null,
          maxHealth: null !== (rM = OM.d.get("_totalMaxHealth")) && void 0 !== rM ? rM : null,
          shield: null !== (iM = OM.d.get("_shield")) && void 0 !== iM ? iM : null,
          maxShield: null !== (SM = OM.d.get("maxShield")) && void 0 !== SM ? SM : null
        }
      }), [], (0, jM.p)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      PM = [{
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

    function nM(MM, rM) {
      return PM[(MM ? 2 : 0) + (rM ? 1 : 0)]
    }
    const QM = (0, jM.q)((function() {
      var MM;
      return null !== (MM = OM.d.get("_aura")) && void 0 !== MM ? MM : null
    }), [], (0, jM.p)("_aura"));

    function zM(MM) {
      return {
        watch: rM => (0, SM.j)("shotPlayer", (iM => {
          let {
            playerId: OM,
            damage: SM,
            wasCrit: jM,
            distance: aM
          } = iM;
          MM(OM) && rM({
            damage: SM,
            wasCrit: jM,
            distance: aM
          })
        }))
      }
    }

    function LM(MM) {
      return (0, jM.d)("chat", (rM => {
        let {
          serverChatMsgId: iM,
          worldCodeLineId: OM,
          content: SM,
          chatterEId: jM,
          chatterObjectsToReplay: aM
        } = rM;
        const PM = jM ? MM(jM) : null;
        return {
          serverChatMsgId: null !== iM && void 0 !== iM ? iM : null,
          worldCodeLineId: null !== OM && void 0 !== OM ? OM : null,
          content: SM,
          author: PM,
          hiddenFromReplay: !0 === aM && !1 === (null === PM || void 0 === PM ? void 0 : PM.local)
        }
      }))
    }
    class mM {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const iM = this.shown;
        return MM !== this.needed && (this.needed = MM, this.neededSince = rM, null === MM && (this.shown = null)), this.shown !== this.needed && rM - this.neededSince > 200 && (this.shown = this.needed), this.shown !== iM
      }
    }

    function HM(MM) {
      return [{
        translationKey: `touchKeys:${MM}`
      }]
    }
    const hM = {
      open: HM("open"),
      close: HM("close"),
      milk: HM("milk"),
      shear: HM("shear"),
      tame: HM("tame"),
      feed: HM("feed"),
      ride: HM("ride")
    };

    function JM(MM) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: MM
      }]
    }
  },
  42157: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      g: () => aM
    });
    var OM = iM(3698);
    let SM = null,
      jM = null;

    function aM() {
      return jM ??= iM.e(234).then((() => iM(37271))).then((MM => {
        let {
          ITEM_SPRITES: rM,
          ITEM_SPRITES_WITHOUT_FILE: iM,
          ITEM_FILES_WITHOUT_SPRITE: jM
        } = MM;
        SM = function(MM, rM, iM) {
          const SM = new Set,
            jM = (0, OM.u)(rM);
          let aM = 0;
          for (const [OM, PM] of MM.entries()) OM === jM[aM] ? aM++ : SM.add(PM);
          if ("" !== iM)
            for (const PM of iM.split(OM.s)) SM.add(PM);
          return SM
        }(rM.split(OM.s), iM, jM)
      }), (MM => {
        throw jM = null, MM
      })), jM
    }

    function PM(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = SM) || void 0 === iM ? void 0 : iM.has(MM)) && void 0 !== rM && rM
    }
  },
  40745: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      f: () => jM,
      g: () => SM
    });
    const OM = 128;

    function SM(MM, rM, iM, OM) {
      const SM = 2 * rM - 1,
        jM = 1 - 2 * iM,
        aM = MM(0) - SM * MM(3),
        PM = MM(4) - SM * MM(7),
        nM = MM(8) - SM * MM(11),
        QM = MM(1) - jM * MM(3),
        zM = MM(5) - jM * MM(7),
        LM = MM(9) - jM * MM(11);
      OM[0] = PM * LM - nM * zM, OM[1] = nM * QM - aM * LM, OM[2] = aM * zM - PM * QM;
      const mM = OM[0] * MM(3) + OM[1] * MM(7) + OM[2] * MM(11) < 0 ? -1 : 1,
        HM = Math.hypot(OM[0], OM[1], OM[2]) * mM;
      return OM[0] /= HM, OM[1] /= HM, OM[2] /= HM, OM
    }

    function jM(MM, rM, iM, OM, SM, jM) {
      const aM = [Math.floor(rM[0]), Math.floor(rM[1]), Math.floor(rM[2])],
        PM = [0, 0, 0],
        nM = [1 / 0, 1 / 0, 1 / 0],
        QM = [1 / 0, 1 / 0, 1 / 0];
      for (let mM = 0; mM < 3; mM++) PM[mM] = Math.sign(iM[mM]), 0 !== PM[mM] && (QM[mM] = Math.abs(1 / iM[mM]), nM[mM] = (aM[mM] + (PM[mM] > 0 ? 1 : 0) - rM[mM]) / iM[mM]);
      let zM = 0,
        LM = Math.abs(iM[0]) > Math.abs(iM[1]) ? 0 : 1;
      for (Math.abs(iM[2]) > Math.abs(iM[LM]) && (LM = 2); zM <= OM;) {
        if (MM(aM[0], aM[1], aM[2])) return SM[0] = aM[0], SM[1] = aM[1], SM[2] = aM[2], jM[0] = 0, jM[1] = 0, jM[2] = 0, jM[LM] = -PM[LM], !0;
        LM = nM[0] < nM[1] ? 0 : 1, nM[2] < nM[LM] && (LM = 2), zM = nM[LM], aM[LM] += PM[LM], nM[LM] += QM[LM]
      }
      return !1
    }
  },
  40723: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    var OM = iM(2e3);

    function SM(MM, rM, iM) {
      return (0, OM.p)(MM, rM) < iM
    }
  },
  9331: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(1265);

    function SM(MM, rM) {
      var iM, SM;
      try {
        const iM = (0, OM.b)();
        if ("function" === typeof iM) {
          const OM = new iM(MM, rM);
          if (OM.type === MM) return OM
        }
      } catch {}
      const jM = document.createEvent("Event");
      return jM.initEvent(MM, null !== (iM = null === rM || void 0 === rM ? void 0 : rM.bubbles) && void 0 !== iM && iM, null !== (SM = null === rM || void 0 === rM ? void 0 : rM.cancelable) && void 0 !== SM && SM), jM
    }
  },
  37416: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      e: () => zM,
      g: () => HM,
      k: () => LM
    });
    var OM = iM(332),
      SM = iM(670),
      jM = iM(680),
      aM = iM(30);
    const PM = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      nM = "playSessionGameNameWithVariation",
      QM = "wasMatchmakePlayer";

    function zM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
      (0, jM.k)(MM, PM)
    }

    function LM() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).setItem(QM, !0)
    }

    function mM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
      return (0, jM.e)(MM, PM)
    }

    function HM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.k;
      const iM = (0, jM.e)(rM, PM),
        zM = function(MM) {
          const rM = MM.getItem(nM);
          return "string" !== typeof rM ? null : rM
        }(rM),
        LM = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).getItem(QM)
        }(rM);
      let mM;
      return mM = null !== iM && null !== zM && (0, jM.g)(rM, PM) && function(MM, rM, iM) {
          const SM = (0, OM.Mb)(MM),
            jM = (0, OM.Mb)(rM),
            aM = (0, OM.Jb)(MM),
            PM = (0, OM.Jb)(rM);
          return !(SM !== jM || !iM) || SM === jM && aM === PM
        }(zM, MM, LM) ? iM : (0, SM.e)(), (0, jM.o)(rM, PM, mM), rM.setItem(nM, MM),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).removeItem(QM)
        }(rM), mM
    }
  },
  40048: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM
    });
    var OM = iM(1229),
      SM = iM(1382),
      jM = iM(19),
      aM = iM(1360),
      PM = iM(1373),
      nM = iM(1591),
      QM = iM(37416);

    function zM(MM) {
      let {
        Wr: rM,
        sr: iM
      } = MM;
      const zM = null !== rM && void 0 !== rM ? rM : (0, PM.e)().gameNameWithVariation;
      (0, OM.L)(zM) && ((0, QM.k)(), (0, aM.bb)((() => {
        console.log("Received matchmaking order from game server to game", rM), (0, jM.j)("inGameReplay"), (0, nM.navigatePreserveSearch)((0, SM.b)(zM, null !== iM && void 0 !== iM ? iM : void 0))
      }), "video_start"))
    }
  },
  40270: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(22),
      SM = iM(2093);

    function jM(MM) {
      var rM, iM;
      const jM = (0, SM.m)(null !== (rM = null === (iM = SM.v.toggleFreeCam) || void 0 === iM ? void 0 : iM[0]) && void 0 !== rM ? rM : null);
      OM.i.Tz("showBottomMessage", {
        message: `Free Camera ${MM?"Enabled":"Disabled"}${jM?` - Press ${jM} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40043: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      e: () => nM,
      g: () => QM,
      h: () => LM
    });
    var OM = iM(2039),
      SM = iM(22),
      jM = iM(1429),
      aM = iM(1270);
    const PM = new Map;

    function nM(MM, rM) {
      SM.i.Tz("newUiRequest", {
        id: MM,
        clientParameters: rM
      }, !0)
    }

    function QM(MM) {
      SM.i.Tz("removeUiRequest", MM, !0);
      const rM = PM.get(MM);
      rM && (rM.tearDownNotification(), PM.delete(MM))
    }

    function zM() {
      SM.i.Tz("clearUiRequests");
      for (const MM of PM.values()) MM.tearDownNotification();
      PM.clear()
    }

    function LM(MM, rM, iM, SM) {
      const nM = "string" === typeof rM ? {
          translationKey: rM
        } : rM,
        QM = jM.NotificationProvider.showPromptPopup({
          title: nM.translationKey,
          textOpts: {
            title: (0, aM.g)(nM.params, OM.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: iM,
          unlockPointerKey: "uiRequestPopup"
        });
      PM.set(MM, QM), QM.getResult().then((rM => {
        PM.delete(MM), "notificationTornDown" !== rM && SM(rM)
      }))
    }
  },
  40753: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      h: () => mM
    });
    var OM = iM(181),
      SM = iM(40757);
    const jM = 20;

    function aM(MM) {
      return MM.map(Math.floor).join(" ")
    }

    function PM(MM) {
      return null === MM.amount || 1 === MM.amount ? MM.name : `${MM.amount} ${MM.name}`
    }
    var nM = iM(40765),
      QM = iM(2067),
      zM = iM(1373);

    function LM(MM, rM) {
      if (!MM) return nM.c;
      const iM = MM.playerFeet();
      if (!iM) return "The player isn't in the world yet, so no blocks can be seen.";
      const jM = OM.f.HL,
        aM = (0, SM.g)(null !== rM && void 0 !== rM ? rM : iM, jM),
        PM = MM.chunkBlocks(aM);
      return PM ? (0, SM.d)(aM, jM, ((rM, iM, OM) => {
        const SM = PM(rM, iM, OM);
        return 0 === SM ? null : MM.blockName(SM).split("|")[0]
      }), iM) : `The chunk from ${aM.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${iM.map(Math.floor).join(" ")}.`
    }

    function mM(MM) {
      var rM, iM, OM;
      if (!MM) return nM.f;
      const SM = MM.playerFeet();
      if (!SM) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: LM,
        heldSlot: mM
      } = MM.inventory();
      return function(MM) {
        const rM = [];
        null !== MM.game && rM.push(`Game: ${MM.game}.`);
        const iM = null === MM.health ? "" : `, health ${Math.round(MM.health)}${null===MM.maxHealth?"":` of ${Math.round(MM.maxHealth)}`}`;
        rM.push(`The player (the creator) stands at ${aM(MM.position)}${iM}, ${MM.creative?"in":"not in"} creative mode.`);
        const OM = MM.slots[MM.heldSlot];
        rM.push(OM ? `Holding (slot ${MM.heldSlot}): ${PM(OM)}.` : `Holding nothing (slot ${MM.heldSlot} is empty).`);
        const SM = MM.slots.flatMap(((MM, rM) => MM ? [`slot ${rM}: ${PM(MM)}`] : []));
        rM.push(SM.length > 0 ? `Inventory: ${SM.join(", ")}.` : "Inventory: empty.");
        const nM = rM => Math.hypot(rM.position[0] - MM.position[0], rM.position[1] - MM.position[1], rM.position[2] - MM.position[2]),
          QM = [...MM.nearby].sort(((MM, rM) => nM(MM) - nM(rM)));
        if (0 === QM.length) rM.push("No other players or mobs are near enough to see.");
        else {
          rM.push("Near them, nearest first:");
          for (const MM of QM.slice(0, jM)) {
            const iM = "player" === MM.kind ? `player "${MM.name||"?"}"` : MM.name && MM.name !== MM.kind ? `${MM.kind} "${MM.name}"` : MM.kind,
              OM = Math.round(nM(MM));
            rM.push(`- ${iM} at ${aM(MM.position)}, ${OM} block${1===OM?"":"s"} away`)
          }
          QM.length > jM && rM.push(`- and ${QM.length-jM} more further away`)
        }
        return MM.droppedItems > 0 && rM.push(`${MM.droppedItems} dropped item${1===MM.droppedItems?" is":"s are"} on the ground nearby.`), rM.join("\n")
      }({
        game: null !== (rM = (0, zM.e)().gameNameWithVariation) && void 0 !== rM ? rM : null,
        position: SM,
        health: null !== (iM = QM.d.get("_health")) && void 0 !== iM ? iM : null,
        maxHealth: null !== (OM = QM.d.get("_totalMaxHealth")) && void 0 !== OM ? OM : null,
        creative: !0 === QM.d.get("creative"),
        heldSlot: mM,
        slots: LM,
        nearby: MM.nearby(),
        droppedItems: MM.droppedItems()
      })
    }
  },
  41975: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => sM,
      B: () => qM,
      E: () => ZM,
      F: () => RM,
      H: () => kM,
      J: () => uM,
      M: () => FM,
      N: () => vM,
      R: () => WM,
      c: () => BM,
      f: () => fM,
      h: () => tM,
      j: () => XM,
      n: () => gM,
      q: () => wM,
      s: () => oM,
      v: () => pM,
      z: () => DM
    });
    var OM = iM(1464),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(2619),
      PM = iM(5214),
      nM = iM(5188);
    let QM, zM = !1,
      LM = !1,
      mM = !1,
      HM = !1;
    const hM = 1300,
      JM = 3e3;
    let dM = 0,
      yM = !1,
      lM = !1,
      EM = 0;
    const UM = 2;
    let GM = !1,
      CM = !1;
    const eM = new Set,
      bM = new Set;

    function wM() {
      return zM
    }

    function tM() {
      return lM
    }

    function gM() {
      return CM
    }

    function uM() {
      return (0, jM.B)() && !CM
    }

    function RM(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (MM !== CM) {
        CM = MM;
        for (const MM of [...bM]) MM(CM);
        rM && vM()
      }
    }

    function pM(MM) {
      return bM.add(MM), () => {
        bM.delete(MM)
      }
    }

    function WM() {
      (0, PM.k)(aM.C.Menu, (0, jM.B)() ? 0 : aM.C.Menu)
    }

    function sM() {
      lM = !1, EM = 0, WM(), vM()
    }

    function DM(MM) {
      return eM.add(MM), () => {
        eM.delete(MM)
      }
    }

    function kM(MM) {
      LM = !1, MM !== zM && (zM = MM, HM = !1, clearTimeout(QM), mM = !zM && GM, zM ? (yM = !1, lM = !1, EM = 0) : uM() && !GM && (lM = !0), GM = !1, zM && !uM() && KM(), TM(), mM && vM())
    }

    function ZM(MM) {
      MM !== yM && (yM = MM, MM || vM())
    }

    function oM() {
      LM = !1, HM || !0 !== AM() || (HM = !0, clearTimeout(QM), QM = setTimeout(YM, hM))
    }

    function fM() {
      return (!LM || performance.now() - dM > JM) && (LM = (0, nM.I)().lockPointer(), dM = performance.now()), LM
    }

    function YM() {
      NM() && xM() && fM()
    }

    function NM() {
      return uM() && !zM && !yM && !(0, OM.l)()
    }

    function AM() {
      var MM;
      return "undefined" === typeof navigator || null === (MM = navigator.userActivation) || void 0 === MM ? void 0 : MM.isActive
    }

    function xM() {
      return mM && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== AM()
    }

    function vM() {
      uM() ? NM() && !lM && xM() && fM() : zM && !GM && KM()
    }

    function FM() {
      lM ? navigator.vendor.startsWith("Apple") ? IM() : EM = UM : vM()
    }

    function BM() {
      EM > 0 && 0 === --EM && IM()
    }

    function XM() {
      EM = 0
    }

    function IM() {
      NM() && !0 === AM() && fM()
    }

    function KM() {
      GM = !0, (0, nM.I)().unlockPointer()
    }

    function qM() {
      LM = !1, mM = !1, HM = !1, clearTimeout(QM), yM = !1, lM = !1, EM = 0, GM = !1;
      const MM = zM;
      zM = !1, MM && TM()
    }

    function TM() {
      for (const MM of [...eM]) MM(zM);
      SM.i.Tz("pointerLockUpdate", zM)
    }
  },
  41761: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      f: () => PM,
      j: () => LM,
      n: () => QM,
      r: () => aM,
      s: () => zM,
      v: () => nM
    });
    let OM = null,
      SM = null,
      jM = null;

    function aM(MM) {
      OM = MM
    }

    function PM() {
      return OM
    }

    function nM(MM) {
      SM = MM
    }

    function QM() {
      return SM
    }

    function zM(MM) {
      jM = MM
    }

    function LM() {
      return jM
    }

    function mM() {
      var MM, rM;
      return !0 === (null === (MM = SM) || void 0 === MM || null === (rM = MM.currentViewer) || void 0 === rM ? void 0 : rM.inPlayback)
    }
  },
  42102: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      attachPlayGameSources: () => wO,
      playGameSources: () => bO
    });
    var OM = iM(2039),
      SM = iM(41761),
      jM = iM(5188),
      aM = iM(41677),
      PM = iM(42081),
      nM = iM(40725),
      QM = iM(22),
      zM = iM(5200),
      LM = iM(5198),
      mM = iM(41706),
      HM = iM(41728),
      hM = iM(42106),
      JM = iM(41712);
    (0, JM.h)(zM.hc.Chat, (MM => {
      if (MM.payloadKind !== LM.hc.Msgpack) return;
      const rM = function(MM) {
        if (null === MM || "object" !== typeof MM || !("content" in MM)) return null;
        const {
          chatMsgId: rM,
          worldCodeLineId: iM,
          content: OM,
          chatterEId: SM,
          chatterObjectsToReplay: jM
        } = MM;
        return {
          serverChatMsgId: null !== rM && void 0 !== rM ? rM : void 0,
          worldCodeLineId: null !== iM && void 0 !== iM ? iM : void 0,
          content: OM,
          chatterEId: void 0 === SM || null === SM ? void 0 : String(SM),
          chatterObjectsToReplay: jM
        }
      }((0, mM.c)(MM.payload));
      null !== rM && QM.i.Tz("chat", rM, !0)
    }));
    const dM = {
        chatReceived: (0, nM.k)((function(MM) {
          var rM, iM, OM;
          return {
            id: MM,
            name: null !== (rM = hM.e.getName(MM)) && void 0 !== rM ? rM : null,
            local: (0, HM.f)() === MM,
            profileEffect: null !== (iM = null === (OM = (0, hM.g)(MM)) || void 0 === OM ? void 0 : OM.profileEffect) && void 0 !== iM ? iM : null
          }
        }))
      },
      yM = {
        sendChatMessage(MM) {
          var rM;
          let {
            Kz: iM,
            channelName: OM
          } = MM;
          null === (rM = (0, aM.e)()) || void 0 === rM || rM.clientApi.sendChat(iM, OM)
        }
      };
    var lM = iM(181),
      EM = iM(2067),
      UM = iM(41669),
      GM = iM(40723);
    const CM = [0, 0, 0],
      eM = {
        codeBlockClickable(MM) {
          var rM;
          const iM = (0, aM.e)();
          if (null === iM || void 0 === iM || !iM.isSessionLive) return !1;
          const OM = iM.api;
          if (0 !== (UM.v.playerFlags(OM.apiView, 0) & UM.yd.Crouching)) return !1;
          const SM = OM.queries.directorEntity(OM.localId) >= UM.nb.BYTES ? OM.memoryData(OM.scratch(), UM.nb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === SM) return !1;
          for (let jM = 0; jM < 3; jM++) CM[jM] = UM.nb.feet(SM, 0, jM);
          return CM[1] += UM.nb.eyeHeight(SM, 0), (0, GM.c)(CM, MM, null !== (rM = EM.d.get("blockReach")) && void 0 !== rM ? rM : lM.f.ny)
        }
      },
      bM = {
        clickCodeBlock(MM) {
          var rM;
          null === (rM = (0, aM.e)()) || void 0 === rM || rM.clickCodeBlock(MM)
        }
      };
    var wM = iM(41691),
      tM = iM(42111),
      gM = iM(1073),
      uM = iM(40073),
      RM = iM(5184),
      pM = iM(41697),
      WM = iM(41682),
      sM = iM(41704);

    function DM(MM) {
      if (null === MM) return null;
      const rM = [];
      for (const iM of MM) {
        const MM = Object.keys(iM)[0];
        if ("ki" === MM) {
          const {
            str: MM,
            style: OM,
            clickableUrl: SM
          } = iM.ki, jM = Object.keys(MM)[0], aM = MM[jM];
          "string" !== jM && "styledEntityName" !== jM && "styledTranslatedText" !== jM || rM.push({
            str: aM,
            style: OM,
            clickableUrl: SM
          })
        } else rM.push(iM[MM])
      }
      return rM
    }
    const kM = {
      screenPos(MM) {
        var rM, iM;
        return null !== (rM = null === (iM = (0, aM.e)()) || void 0 === iM ? void 0 : iM.renderFrame.projectWorldPosToScreenPos(MM)) && void 0 !== rM ? rM : {
          x: 0,
          y: 0
        }
      }
    };
    let ZM = !1;

    function oM() {
      ZM || (ZM = !0, (0, JM.h)(zM.hc.ProgressBarUpdate, (MM => {
        const rM = (0, sM.f)(MM);
        (0, sM.c)(rM) && QM.i.Tz("progressBarUpdate", rM, !0)
      })), (0, JM.h)(pM.w, (MM => {
        const rM = (0, sM.d)(pM.w, MM);
        rM && QM.i.Tz("middleScreenBarInitiate", {
          duration: rM.QO,
          zO: rM.zO,
          horizBarRemOffset: rM.LO
        }, !0)
      })), (0, JM.h)(zM.hc.RemoveMiddleScreenBar, (() => {
        QM.i.Tz("middleScreenBarRemove")
      })), (0, JM.h)(pM._, (MM => {
        const rM = (0, sM.d)(pM._, MM);
        if (rM) {
          var iM;
          const MM = rM.HO ? null === (iM = (0, aM.e)()) || void 0 === iM ? void 0 : iM.renderFrame.projectDirectionToScreenPos(rM.HO) : void 0;
          QM.i.Tz("sendHitmarker", {
            mO: rM.mO,
            screenPos: MM
          }, !0)
        }
      })), (0, JM.h)(pM.fb, (MM => {
        const rM = (0, sM.d)(pM.fb, MM);
        if (rM) {
          const {
            id: MM,
            position: iM,
            style: OM,
            hO: SM,
            dO: jM
          } = rM;
          QM.i.Tz("setDirectionArrow", {
            id: MM,
            position: iM,
            style: OM,
            text: DM(SM),
            dO: jM
          }, !0)
        }
      })), (0, JM.h)(pM.f, (MM => {
        const rM = (0, sM.d)(pM.f, MM);
        rM && QM.i.Tz("clearDirectionArrow", {
          id: rM.id
        }, !0)
      })), (0, JM.h)(pM.n, (MM => {
        const rM = (0, sM.d)(pM.n, MM);
        rM && QM.i.Tz("flyingMiddleMessage", {
          content: DM(rM.Di),
          oi: rM.oi,
          Yi: rM.Yi
        }, !0)
      })), (0, JM.h)(zM.hc.WorldVariation, (MM => {
        const rM = (0, sM.f)(MM);
        if ("string" === typeof rM) {
          const MM = rM === gM.g ? null : {
            message: `Currently loaded as variation: ${rM}`,
            type: "Warning"
          };
          QM.i.Tz("showPermanentBottomMessage", MM, !0)
        }
      })), (0, JM.h)(pM.J, (MM => {
        const rM = (0, sM.d)(pM.J, MM);
        rM && function(MM, rM) {
          const {
            type: iM,
            params: OM
          } = (0, uM.e)(rM), SM = {
            ...OM
          };
          for (const jM of uM.b) SM[jM] && (SM[jM] = DM(SM[jM]));
          RM.d.queueQTE(MM, iM, SM).getResult().then((rM => {
            var iM;
            "boolean" === typeof rM && (null === (iM = (0, aM.e)()) || void 0 === iM || iM.send(WM.d.QteResponse, {
              qteId: MM,
              qteResponse: rM
            }))
          }))
        }(rM.id, rM.bO)
      })), (0, JM.h)(pM.U, (MM => {
        const rM = (0, sM.d)(pM.U, MM);
        "number" === typeof rM && RM.d.cancelQTE(rM)
      })), (0, JM.c)((() => {
        RM.d.reset()
      })), (0, JM.e)((() => {
        RM.d.reset()
      })), (0, JM.h)(zM.hc.EditItemCraftingRecipes, (MM => {
        const rM = (0, sM.f)(MM);
        (0, sM.c)(rM) && QM.i.Tz("craftingRecipesEdited", {
          itemName: rM.craftingRecipeItemName,
          recipesForItem: rM.recipesForItem
        })
      })), (0, JM.h)(pM.R, (MM => {
        const rM = (0, sM.d)(pM.R, MM);
        rM && QM.i.Tz("craftingRecipesEdited", {
          itemName: rM.nS,
          recipesForItem: []
        })
      })))
    }
    var fM = iM(19);
    const YM = [{
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

    function NM(MM) {
      return UM.v.playerFlags(MM.api.apiView, 0)
    }
    const AM = {
        freeCamera: (0, HM.b)((MM => () => {
          const rM = MM.isSessionLive && 0 !== (NM(MM) & UM.yd.FreeCamMoves),
            iM = MM.freeCameraAllowed() && null === fM.d.get("scriptedCameraFacing");
          return YM[(iM ? 2 : 0) + (rM ? 1 : 0)]
        }), YM[0], (MM => (0, jM.x)(MM)))
      },
      xM = {
        setFreeCameraMovesFly: MM => {
          var rM;
          null === (rM = (0, aM.e)()) || void 0 === rM || rM.setFreeCameraMovesFly(MM)
        }
      },
      vM = {
        freeCameraPos: () => {
          const MM = (0, aM.e)();
          return null !== MM && void 0 !== MM && MM.isSessionLive && MM.renderFrame.hasView && 0 !== (NM(MM) & UM.yd.FreeCam) ? MM.renderFrame.cameraPosition : null
        }
      };
    var FM = iM(40270);
    let BM = !1,
      XM = !1;

    function IM() {
      const MM = (0, aM.e)();
      if (null === MM || void 0 === MM || !MM.isSessionLive) return void(BM = !1);
      const rM = 0 !== (UM.v.playerFlags(MM.api.apiView, 0) & UM.yd.FreeCam);
      rM !== BM && (BM = rM, (0, FM.e)(rM))
    }
    var KM = iM(332),
      qM = iM(37975),
      TM = iM(2078);
    var VM = iM(42119),
      cM = iM(41723);
    const Mr = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let rr = "off";

    function ir(MM) {
      var rM;
      return null === MM ? null : {
        label: null !== (rM = (0, VM.d)(MM, "interactionPrompt")) && void 0 !== rM ? rM : null
      }
    }
    const Or = new Map([
      [UM.ic.Open, {
        label: nM.f.open
      }],
      [UM.ic.Close, {
        label: nM.f.close
      }],
      [UM.ic.Milk, {
        label: nM.f.milk
      }],
      [UM.ic.Shear, {
        label: nM.f.shear
      }],
      [UM.ic.Tame, {
        label: nM.f.tame
      }],
      [UM.ic.Feed, {
        label: nM.f.feed
      }],
      [UM.ic.Ride, {
        label: nM.f.ride
      }]
    ]);
    class Sr {
      constructor() {
        this.target = Mr, this.jP = UM.Pc, this.optionName = null, this.pickaxe = new nM.d
      }
      read(MM) {
        var rM;
        const iM = UM.v.targetBlockId(MM.api.apiView, 0);
        iM !== this.jP && (this.jP = iM, this.optionName = iM === UM.Pc ? null : `${MM.tables.getMetaInfo(iM).rootName}CrosshairText`);
        const OM = null === this.optionName ? null : null !== (rM = MM.tables.getClientOption(this.optionName)) && void 0 !== rM ? rM : null;
        this.pickaxe.update(function(MM, rM) {
          var iM, OM, SM;
          if (0 === (UM.v.playerFlags(MM.api.apiView, 0) & UM.yd.Breaking) || rM === UM.Pc || 0 === rM) return null;
          const {
            tables: jM
          } = MM;
          if (!0 === jM.getClientOption("creative")) return null;
          const aM = jM.nameOfId(rM),
            PM = null === (iM = MM.items.sQ()) || void 0 === iM ? void 0 : iM.name,
            nM = null !== (OM = jM.getItemStat(aM, "harvestLevel")) && void 0 !== OM ? OM : 0;
          return (0, KM.Bc)({
            blockHarvestType: jM.getDefaultItemStat(aM, "harvestType"),
            blockHarvestLevel: jM.getDefaultItemStat(aM, "harvestLevel"),
            harvestLevel: nM,
            heldToolType: void 0 === PM ? void 0 : jM.getDefaultItemStat(PM, "harvests"),
            heldToolLevel: void 0 === PM ? void 0 : jM.getDefaultItemStat(PM, "level")
          }) && null !== (SM = qM.m[nM]) && void 0 !== SM ? SM : null
        }(MM, iM)), MM.watchPromptPick(rr);
        const SM = "touch" === rr ? function(MM) {
          var rM;
          const iM = MM.interactLabel;
          return iM === UM.ic.Entity ? ir(MM.promptEntity) : iM === UM.ic.TameWith ? {
            label: (0, nM.v)(MM.tables.nameOfId(MM.interactIcon))
          } : null !== (rM = Or.get(iM)) && void 0 !== rM ? rM : null
        }(MM) : ir(MM.promptEntity);
        return this.target = (0, TM.r)(this.target, {
          interactPrompt: SM,
          blockText: OM,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let jr = null;
    const ar = {
      current: () => {
        var MM, rM;
        return null !== (MM = null === (rM = jr) || void 0 === rM ? void 0 : rM.target) && void 0 !== MM ? MM : Mr
      },
      watch: MM => {
        const rM = new Sr;
        jr = rM;
        const iM = (0, HM.h)((iM => {
          let OM = rM.read(iM);
          MM(OM);
          const SM = (0, jM.y)((() => {
            const SM = rM.read(iM);
            SM !== OM && (OM = SM, MM(SM))
          }));
          return () => {
            SM(), iM.watchPromptPick("off")
          }
        }));
        return () => {
          iM(), jr === rM && (jr = null)
        }
      }
    };
    let Pr = 0,
      nr = 0;
    const Qr = {
        health: nM.q,
        aura: nM.h,
        hotbar: cM.d.states.hotbar,
        heldItemAim: cM.d.states.heldItemAim,
        crouching: (0, HM.b)((MM => function(MM) {
          const rM = () => 0 !== (UM.v.playerFlags(MM.apiView, 0) & UM.yd.Crouching);
          return {
            current: rM,
            watch(MM) {
              let iM = rM();
              return (0, jM.x)((() => {
                const OM = rM();
                OM !== iM && (iM = OM, MM(OM))
              }))
            }
          }
        }(MM.api).current), !1, (MM => (0, jM.x)(MM))),
        flight: (0, HM.b)((MM => () => function(MM) {
          const rM = UM.v.playerFlags(MM.apiView, 0);
          return (0, nM.n)(0 !== (rM & UM.yd.CanFly), 0 !== (rM & UM.yd.Flying))
        }(MM.api)), (0, nM.n)(!1, !1), (MM => (0, jM.x)(MM))),
        gliderBoostFuel: (0, HM.b)((MM => () => UM.v.gliderBoostFuel(MM.api.apiView, 0)), 0, (MM => (0, jM.x)(MM))),
        crosshairTarget: ar
      },
      zr = {
        hotbarSlotRequested: cM.d.events.hotbarSlotRequested,
        hotbarScrolled: cM.d.events.hotbarScrolled,
        numberKeyPressed: cM.d.events.numberKeyPressed,
        shotDamageToShow: (0, nM.u)((MM => !0 === (0, VM.d)(MM, "showDamageAmounts")))
      },
      Lr = {
        selectHotbarSlot: cM.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: MM => {
          rr = MM
        }
      },
      mr = {
        momentumFrac: function() {
          var MM, rM, iM;
          const OM = (0, aM.e)(),
            SM = performance.now(),
            jM = null === OM || void 0 === OM || null === (MM = OM.items.sQ()) || void 0 === MM || null === (rM = MM.attributes) || void 0 === rM || null === (iM = rM.customAttributes) || void 0 === iM ? void 0 : iM.enchantments;
          return Pr = null !== OM && null !== jM && void 0 !== jM && jM.Momentum ? 0 !== (UM.v.playerFlags(OM.api.apiView, 0) & UM.yd.Breaking) ? Math.max(0, UM.v.momentumFrac(OM.api.apiView, 0)) : Math.max(0, Pr - (SM - nr) / 1500) : 0, nr = SM, Pr
        }
      };
    var Hr = iM(41674);
    const hr = {
      lobbyManage(MM) {
        var rM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.LobbyManage, MM)
      }
    };
    var Jr = iM(1242),
      dr = iM(34822),
      yr = iM(9392),
      lr = iM(1717),
      Er = iM(2619),
      Ur = iM(5204);
    let Gr = !1;

    function Cr(MM) {
      Gr = MM
    }

    function er() {
      "inGame" !== fM.d.get("gameState") || (0, lr.v)() || QM.i.Tz("ctrlCrouchWithoutFullscreen")
    }
    let br = !1;
    const wr = {
        OpenEmoteWheel: () => {
          Cr(!0), br = !0, queueMicrotask((() => {
            br && (br = !1, QM.i.Tz("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          QM.i.Tz("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, dr.b)() || QM.i.Tz("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, dr.b)() || QM.i.Tz("XKeyPressed")
        },
        CtrlCrouch: er,
        "primary-fire": () => {
          QM.i.Tz("mouseState", {
            ba: Jr.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          QM.i.Tz("mouseState", {
            ba: Jr.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          QM.i.Tz("mouseState", {
            ba: Jr.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      tr = {
        OpenEmoteWheel: () => {
          Cr(!1), br ? (br = !1, (0, yr.e)() || QM.i.Tz("requestEmoteWheelHoldOpen")) : QM.i.Tz("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: er,
        "primary-fire": () => {
          QM.i.Tz("mouseState", {
            ba: Jr.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          QM.i.Tz("mouseState", {
            ba: Jr.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          QM.i.Tz("mouseState", {
            ba: Jr.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let gr = !1;

    function ur() {
      gr || (gr = !0, (0, Ur.f)((MM => {
        if ((0, SM.d)()) return;
        const rM = (0, Ur.e)(MM) ? "primary-fire" : MM.action;
        var iM;
        if (MM.down) {
          if (0 === (MM.flags & Er.d.Synthetic)) {
            var OM;
            null === (OM = wr[rM]) || void 0 === OM || OM.call(wr)
          }
        } else null === (iM = tr[rM]) || void 0 === iM || iM.call(tr)
      })))
    }
    var Rr = iM(313),
      pr = iM(83),
      Wr = iM(30),
      sr = iM(41975),
      Dr = iM(1373),
      kr = iM(2633);
    let Zr = !1;
    const or = {
      sendCodeCollab(MM) {
        var rM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.CodeCollab, (0, WM.l)(MM), (0, kr.d)(MM))
      }
    };
    var fr = iM(40140),
      Yr = iM(9331);
    let Nr = null,
      Ar = !1,
      xr = null;

    function vr() {
      return "inGame" === fM.d.get("gameState") && !(0, dr.b)()
    }
    const Fr = {
        OpenInventory: MM => {
          (0, lr.C)(MM, "inventory", (0, Hr.m)())
        },
        OpenShop: MM => {
          Nr && vr() && (0, lr.B)(MM, Rr.m.SHOP, !Nr.shopIsEmpty(EM.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: MM => {
          vr() && (0, lr.B)(MM, Rr.m.LOBBY_LEADERBOARD, (0, fr.d)({
            lobbyLeaderboardInfo: EM.d.get("lobbyLeaderboardInfo"),
            lobbyManage: EM.d.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: MM => {
          var rM;
          const iM = null === (rM = Nr) || void 0 === rM ? void 0 : rM.getClientGameMapKey();
          iM ? (0, lr.E)(MM, !0, iM) : (0, lr.C)(MM, "retentionFeatures", !(!EM.d.get("_tasks") && !EM.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: MM => {
          (0, lr.C)(MM, "inviteLink", pr.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: MM => {
          vr() && function(MM) {
            const rM = (0, aM.e)(),
              iM = null !== rM && void 0 !== rM && rM.isSessionLive ? rM.api : null,
              OM = iM ? iM.XE(iM.localId) : null;
            (0, lr.E)(MM, null !== OM && (0, kr.b)((0, Dr.e)()), (() => {
              (0, kr.e)(OM)
            }))
          }(MM)
        },
        HideUi: () => {
          QM.i.Tz("showUi", !1)
        }
      },
      Br = {
        HideUi: () => {
          QM.i.Tz("showUi", !0)
        }
      };

    function Xr() {
      Ar || (Ar = !0, iM.e(173).then((() => iM(63222))).then((MM => {
        Nr = MM
      }), (MM => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", MM)
      })), (0, sr.z)((MM => {
        MM || !(0, sr.h)() || (0, pr.isMobile)() || !Wr.g.getItem("disableFullscreen") || (0, lr.r)() || fM.d.set({
          openEverythingMenuName: Rr.m.SETTINGS
        })
      })), (0, Ur.f)((MM => {
        let {
          action: rM,
          down: iM,
          press: OM
        } = MM;
        var jM, aM;
        (0, SM.d)() || (iM ? null === (jM = Fr[rM]) || void 0 === jM || jM.call(Fr, function(MM) {
          var rM;
          if (0 === MM || (null === (rM = xr) || void 0 === rM ? void 0 : rM.press) !== MM) {
            const rM = {
              press: MM,
              event: (0, Yr.d)("inputAction")
            };
            xr = rM, queueMicrotask((() => {
              xr === rM && (xr = null)
            }))
          }
          return xr.event
        }(OM)) : null === (aM = Br[rM]) || void 0 === aM || aM.call(Br))
      })))
    }
    var Ir = iM(40059),
      Kr = iM(40048),
      qr = iM(40043);
    const Tr = {
      completeTask(MM) {
        var rM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.CompleteTask, (0, WM.n)(MM))
      },
      setServerCookie(MM) {
        var rM;
        let {
          key: iM,
          value: OM
        } = MM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.GeneralCookieSet, (0, WM.s)({
          Ja: iM,
          da: OM
        }))
      },
      answerUiRequest(MM) {
        var rM;
        let {
          id: iM,
          IQ: OM
        } = MM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.UiRequestResp, (0, WM.S)({
          fa: iM,
          Ya: OM,
          Na: 5
        }))
      },
      chooseRewardedAd(MM) {
        var rM;
        let {
          id: iM,
          IQ: OM
        } = MM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.UiRequestResponded, (0, WM.P)({
          id: iM,
          IQ: OM
        }))
      },
      requestLeaderboard(MM) {
        var rM;
        let {
          category: iM,
          timeframe: OM,
          seeTop: SM
        } = MM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.LeaderboardRequest, {
          category: iM,
          timeframe: OM,
          seeTop: SM
        })
      }
    };
    let Vr = !1;
    const cr = lM.f.Sy / 2,
      Mi = [cr, -cr, -cr, -cr, cr, cr, -cr, cr],
      ri = [0, 0, 0];

    function ii(MM, rM, iM) {
      for (let OM = 0; OM < MM.length; OM += 2)
        if (MM[OM] === rM && MM[OM + 1] === iM) return !0;
      return !1
    }
    const Oi = {
      blocksStandingOn: function() {
        const MM = (0, aM.e)();
        if (null === MM) return [];
        const {
          api: rM,
          chunks: iM,
          tables: OM
        } = MM;
        if (!rM.readPosition(rM.localId, ri)) return [];
        const [SM, jM, PM] = ri, nM = Math.ceil(jM) - 1, QM = [], zM = [];
        for (let aM = 0; aM < Mi.length; aM += 2) {
          const MM = SM + Mi[aM],
            rM = PM + Mi[aM + 1];
          if (Number.isInteger(MM) || Number.isInteger(rM)) continue;
          const jM = Math.floor(MM),
            LM = Math.floor(rM);
          if (ii(zM, jM, LM)) continue;
          const mM = iM.jP(jM, nM, LM);
          OM.isSolidBlockId(mM) && (zM.push(jM, LM), QM.push(OM.nameOfId(mM)))
        }
        return QM
      },
      dropAhead: function() {
        const MM = (0, aM.e)();
        return null !== MM && 0 !== (UM.v.playerFlags(MM.api.apiView, 0) & UM.yd.DropAhead)
      }
    };
    var Si = iM(37876),
      ji = iM(40118),
      ai = iM(1429),
      Pi = iM(41734);
    const ni = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Qi = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function zi() {
      const MM = new Set;
      return {
        add: rM => (MM.add(rM), () => {
          MM.delete(rM)
        }),
        fire() {
          for (const rM of MM) rM()
        }
      }
    }
    const Li = Object.freeze([]);

    function mi(MM, rM) {
      let iM, {
        rereads: OM,
        followLocalId: SM
      } = rM;
      const aM = () => (iM = (0, TM.r)(iM, MM()), iM);
      return {
        current: aM,
        watch(MM) {
          const rM = (0, hM.c)((rM => {
            OM(rM) && MM(aM())
          }));
          if (!SM) return rM;
          let iM = (0, HM.f)();
          const PM = (0, jM.y)((() => {
            const rM = (0, HM.f)();
            rM !== iM && (iM = rM, MM(aM()))
          }));
          return () => {
            rM(), PM()
          }
        }
      }
    }
    const Hi = {
        players: mi((function() {
          const MM = hM.e.ids(),
            rM = {};
          for (const jM of MM) {
            var iM, OM, SM;
            rM[jM] = {
              name: null !== (iM = hM.e.getName(jM)) && void 0 !== iM ? iM : null,
              ranks: null !== (OM = hM.e.getSetting(jM, "ranks")) && void 0 !== OM ? OM : Li,
              cosmetics: null !== (SM = (0, hM.g)(jM)) && void 0 !== SM ? SM : null
            }
          }
          return {
            ids: MM,
            byId: rM,
            localId: (0, HM.f)()
          }
        }), {
          rereads: MM => "roster" !== MM.kind || MM.members || MM.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: mi((function() {
          const MM = {};
          for (const SM of hM.e.ids()) {
            var rM, iM, OM;
            MM[SM] = {
              colour: null !== (rM = hM.e.getSetting(SM, "colorInLobbyLeaderboard")) && void 0 !== rM ? rM : null,
              values: null !== (iM = hM.e.getSetting(SM, "lobbyLeaderboardValues")) && void 0 !== iM ? iM : null,
              tags: null !== (OM = hM.e.getSetting(SM, "lobbyLeaderboardTags")) && void 0 !== OM ? OM : null
            }
          }
          return MM
        }), {
          rereads: function(MM) {
            if ("roster" !== MM.kind) return "reset" === MM.kind;
            const {
              members: rM,
              settings: iM
            } = MM;
            return rM || iM.has("colorInLobbyLeaderboard") || iM.has("lobbyLeaderboardValues") || iM.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Ji = {
        cosmeticsUpdated: {
          watch: MM => (0, hM.c)((rM => {
            if ("cosmetics" !== rM.kind) return;
            const iM = (0, HM.f)();
            MM(rM.updates.map((MM => {
              let {
                Xi: rM,
                Ii: OM,
                Ki: SM
              } = MM;
              return {
                local: rM === iM,
                Ii: OM,
                Ki: SM
              }
            })))
          }))
        }
      };
    var di = iM(3241),
      yi = iM(1830),
      li = iM(673),
      Ei = iM(42031);
    let Ui = !1,
      Gi = null;
    const Ci = {
      setShopOpen(MM) {
        var rM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.ShopMenuChanged, (0, WM.N)(MM))
      },
      buyShopItem(MM) {
        var rM;
        let {
          categoryKey: iM,
          itemKey: OM,
          userInput: SM
        } = MM;
        null === (rM = (0, aM.e)()) || void 0 === rM || rM.send(WM.d.ItemBought, {
          categoryKey: iM,
          itemKey: OM,
          shopVersion: EM.d.get("_shopVersion"),
          userInput: SM
        })
      }
    };
    let ei = !1;
    var bi = iM(5214);
    const wi = Er.C.LookFrozen | Er.C.ClicksSuppressed;

    function ti(MM, rM) {
      var iM;
      null !== (iM = (0, aM.e)()) && void 0 !== iM && iM.send(MM, rM) || console.warn(`[bloxd-wasm-client] message ${MM} not sent: no live game or the core's command ring is full`)
    }(0, JM.h)(pM.gb, (MM => {
      const rM = (0, sM.d)(pM.gb, MM);
      void 0 !== rM && QM.i.Tz("setDiscordReportKey", rM)
    }));
    const gi = {
      ignorePlayer(MM) {
        ti(WM.d.IgnoreUser, (0, WM.w)({
          KQ: MM
        }))
      },
      reportPlayer(MM) {
        let {
          playerId: rM,
          chatMsgId: iM,
          lQ: OM,
          details: SM
        } = MM;
        ti(WM.d.UserReport, (0, WM.ab)({
          dQ: rM,
          yQ: iM,
          lQ: OM,
          EQ: SM
        }))
      },
      reportWorldCodeChat(MM) {
        let {
          chatMsgId: rM,
          lQ: iM,
          details: OM
        } = MM;
        ti(WM.d.UserReport, (0, WM.ab)({
          dQ: "",
          yQ: rM,
          lQ: iM,
          EQ: OM
        }))
      },
      requestDiscordReportKey(MM) {
        ti(WM.d.ReqDiscordReportKey, (0, WM.H)(MM))
      },
      reportLobbyOrGame(MM) {
        let {
          target: rM,
          lQ: iM,
          details: OM
        } = MM;
        "customGame" === rM ? ti(WM.d.CustomGameReport, (0, WM.p)({
          lQ: iM,
          EQ: OM
        })) : ti(WM.d.LobbyReport, (0, WM.A)({
          lQ: iM,
          EQ: OM
        }))
      },
      updateMyCosmetic(MM) {
        ti(WM.d.UpdateMyCosmetic, (0, WM._)(MM))
      },
      holdEmoteWheel(MM) {
        !MM || Gr ? (0, bi.k)(wi, MM ? wi : 0) : QM.i.Tz("requestEmoteWheelHoldRelease")
      }
    };
    var ui = iM(42126),
      Ri = iM(9816),
      Wi = iM(40745);
    const si = [0, 0, 0],
      Di = [0, 0, 0],
      ki = [0, 0, 0],
      Zi = {
        blockAtViewPoint(MM) {
          let {
            x: rM,
            y: iM
          } = MM;
          const OM = (0, aM.e)();
          if (null === OM || void 0 === OM || !OM.renderFrame.hasView) return null;
          const {
            renderFrame: SM,
            clientApi: jM,
            api: PM
          } = OM;
          let nM = 0;
          return (0, Wi.f)(((MM, rM, iM) => (nM = jM.getBlockId(MM, rM, iM), 0 !== nM)), SM.cameraPosition, (0, Wi.g)((MM => UM.v.viewProj(PM.apiView, 0, MM)), rM, iM, si), Wi.b, Di, ki) ? {
            pos: [Di[0], Di[1], Di[2]],
            normal: [ki[0], ki[1], ki[2]],
            name: (0, Ri.g)(nM)
          } : null
        }
      },
      oi = {
        setBlockHighlight(MM) {
          var rM;
          null === (rM = (0, aM.e)()) || void 0 === rM || rM.setBlockHighlight(MM)
        }
      };
    var fi = iM(2050),
      Yi = iM(42017),
      Ni = iM(42135),
      Ai = iM(4874),
      xi = iM(4845),
      vi = iM(42144),
      Fi = iM(3693),
      Bi = iM(3698);
    let Xi = null,
      Ii = null;

    function Ki(MM) {
      const rM = MM.startsWith(Bi.j),
        [iM, OM = iM, SM = iM] = (rM ? MM.slice(Bi.j.length) : MM).split(Bi.h);
      return {
        top: iM,
        left: OM,
        right: SM,
        half: rM
      }
    }

    function qi(MM) {
      const rM = null === Xi ? void 0 : (0, Fi.d)(MM),
        iM = void 0 === rM ? 0 : Xi.codes[rM];
      return 0 === iM ? void 0 : Xi.pool[iM - 1]
    }
    var Ti = iM(3690),
      Vi = iM(4835),
      ci = iM(4868),
      MO = iM(42053),
      rO = iM(42151);
    const iO = "item:";
    let OO = null,
      SO = null,
      jO = null,
      aO = null,
      PO = !1,
      nO = !1;

    function QO() {
      return nO || (nO = !0, (0, ci.j)().then((MM => {
        MM && (0, fi.c)()
      }))), jO ??= Promise.all([(0, Ti.h)(), (Ii ??= iM.e(1).then((() => iM(63248))).then((MM => {
        let {
          BLOCK_FACE_RUNS: rM,
          BLOCK_FACES: iM,
          MAX_FACE_ITEM_ID: OM
        } = MM;
        Xi = {
          codes: (0, Bi.y)(rM, OM + 1),
          pool: iM.split(Bi.s).map(Ki)
        }
      }), (MM => {
        throw Ii = null, MM
      })), Ii), (0, rO.d)(), iM.e(224).then((() => iM(35037)))]).then((MM => {
        let [, , rM, iM] = MM;
        rM.followBundledTextures(), OO = rM, SO = iM, (0, fi.c)()
      }), (MM => {
        jO = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", MM)
      })), jO
    }

    function zO(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = (0, MO.f)()) || void 0 === iM ? void 0 : iM.textureUrl(MM)) && void 0 !== rM ? rM : OO.itemSpriteUrl(MM)
    }

    function LO(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = (0, MO.f)()) || void 0 === iM ? void 0 : iM.textureUrl(MM)) && void 0 !== rM ? rM : OO.blockTextureUrl(MM)
    }

    function mO(MM) {
      var rM;
      return null !== (rM = (0, Ti.e)(MM)) && void 0 !== rM ? rM : MM
    }

    function HO(MM, rM) {
      var iM, OM, SM;
      return null !== (iM = null !== (OM = null !== (SM = LO(MM)) && void 0 !== SM ? SM : null === rM || void 0 === rM ? void 0 : rM.rotated[MM]) && void 0 !== OM ? OM : null === rM || void 0 === rM ? void 0 : rM.animated[MM]) && void 0 !== iM ? iM : OO.notFoundUrl()
    }

    function hO(MM) {
      return void 0 !== (0, Fi.d)(MM) ? MM : /^[1-9][0-9]*$/.test(MM) ? (0, Fi.g)(Number(MM)) : void 0
    }

    function JO(MM) {
      var rM;
      if (MM.startsWith(iO)) {
        var iM;
        const rM = (0, Ti.e)(MM.slice(5));
        return null !== (iM = void 0 === rM ? null : zO(rM)) && void 0 !== iM ? iM : OO.notFoundUrl()
      }
      return null !== (rM = OO.particleUrl(MM)) && void 0 !== rM ? rM : OO.notFoundUrl()
    }

    function dO(MM, rM) {
      return "StairsBlock" === MM ? MM : rM ? "SlabBlock" : "CubeBlock"
    }
    const yO = {
        async blockIcon(MM) {
          var rM;
          let {
            name: OM,
            size: SM,
            lineWidth: jM
          } = MM;
          await QO();
          const aM = null !== (rM = hO(OM)) && void 0 !== rM ? rM : OM,
            PM = (0, ci.h)(aM, SM, jM);
          if (null !== PM) return PM;
          const nM = qi(aM),
            QM = (0, Fi.d)(aM),
            zM = void 0 === QM || null === SO ? void 0 : SO.itemTypeNameOf(QM);
          if (null === OO || void 0 === nM) return "";
          const LM = [nM.top, nM.left, nM.right].some((MM => null === LO(MM))),
            mM = LM ? await (aO ??= iM.e(231).then((() => iM(35131))).then((MM => (PO && (PO = !1, (0, fi.c)()), {
              rotated: MM.rotatedBlockTextures,
              animated: MM.animatedBlockTextures
            })), (MM => (aO = null, PO = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", MM), null))), aO) : null;
          if (LM && null === mM) return "";
          const HM = {
              top: HO(nM.top, mM),
              left: HO(nM.left, mM),
              right: HO(nM.right, mM),
              itemType: dO(zM, nM.half)
            },
            hM = (0, MO.e)(),
            JM = 0 === hM ? aM : `${aM}#${hM}`;
          return (await (0, Vi.b)()).drawBlockIconUrl(JM, SM, jM, (() => HM))
        }
      },
      lO = {
        itemIcon: function(MM) {
          var rM, iM, SM, jM;
          if (null === OO) return QO(), OM.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(MM);
          if ((0, xi.h)(MM)) return {
            kind: "icon",
            url: null !== (iM = null !== (SM = null === (jM = (0, MO.f)()) || void 0 === jM ? void 0 : jM.textureUrl(MM)) && void 0 !== SM ? SM : OO.ingameIconUrl(MM)) && void 0 !== iM ? iM : OO.notFoundUrl()
          };
          if (MM.startsWith(xi.b)) return {
            kind: "icon",
            url: JO(MM.slice(xi.b.length))
          };
          if (0 === (0, Fi.h)()) return (0, vi.e)(), OM.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(MM);
          const aM = null !== (rM = hO(MM)) && void 0 !== rM ? rM : MM,
            PM = (0, Fi.d)(aM),
            nM = void 0 === PM ? void 0 : SO.itemTypeNameOf(PM);
          if (void 0 !== qi(aM)) return {
            kind: "drawnBlock"
          };
          const QM = function(MM) {
            var rM;
            return null !== (rM = zO(mO(MM))) && void 0 !== rM ? rM : OO.notFoundUrl()
          }(aM);
          if ((0, ci.i)(aM) && ! function(MM) {
              const rM = (0, MO.f)();
              return null !== rM && (null !== rM.textureUrl(mO(MM)) || (0, ci.e)(MM).some((MM => null !== rM.modelUrl(MM))))
            }(aM)) return {
            kind: "model",
            url: QM
          };
          if ("Gun" === nM) return {
            kind: "gun",
            url: QM
          };
          if (void 0 !== PM && "GrayscaleArmour" === SO.itemTypeOf(PM) || Object.hasOwn(Ai.d, aM)) {
            var zM;
            const rM = null !== (zM = (0, Ai.f)(MM)) && void 0 !== zM ? zM : (0, Ai.f)(aM);
            if (rM) return {
              kind: "item",
              url: QM,
              tint: rM
            }
          }
          return {
            kind: "item",
            url: QM
          }
        },
        hasIcon: function(MM) {
          return void 0 !== hO(MM) || (0, xi.h)(MM) || MM.startsWith(xi.b)
        },
        isItemName: function(MM) {
          return void 0 !== hO(MM)
        }
      };
    var EO = iM(613),
      UO = iM(40753);

    function GO(MM) {
      if (null === MM || void 0 === MM || !MM.isCoreRunning) return null;
      const {
        api: rM,
        chunks: iM,
        items: OM,
        tables: SM
      } = MM;
      return {
        playerFeet() {
          const MM = rM.XE(rM.localId);
          return null !== MM && void 0 !== MM && MM.every(Number.isFinite) ? MM : null
        },
        chunkBlocks: MM => iM.isLoaded(MM[0], MM[1], MM[2]) ? (MM, rM, OM) => iM.jP(MM, rM, OM) : null,
        blockName: MM => SM.nameOfId(MM),
        inventory: () => ({
          slots: OM.playerItems().map((MM => MM ? {
            name: MM.name,
            amount: MM.amount
          } : null)),
          heldSlot: OM.selectedSlot
        }),
        nearby() {
          const iM = [];
          for (let SM = 0; SM < rM.idStr.length; SM++) {
            var OM;
            const jM = rM.idStr[SM],
              aM = rM.serverIds[SM],
              PM = rM.kinds[SM];
            if (null === jM || rM.isLocal(aM) || PM >>> UM.e !== UM.s.Lifeform) continue;
            const nM = rM.XE(aM),
              QM = EO.j[PM & UM.f];
            nM && void 0 !== QM && iM.push({
              kind: "Player" === QM ? "player" : QM,
              name: null !== (OM = MM.clientApi.getEntityName(jM)) && void 0 !== OM ? OM : null,
              position: nM
            })
          }
          return iM
        },
        droppedItems() {
          let MM = 0;
          for (let iM = 0; iM < rM.idStr.length; iM++) null !== rM.idStr[iM] && rM.kinds[iM] >>> UM.e === UM.s.Item && MM++;
          return MM
        }
      }
    }
    const CO = {
        worldCodeAiChunk: MM => Promise.resolve((0, UO.d)(GO((0, aM.e)()), MM)),
        worldCodeAiGameState: () => Promise.resolve((0, UO.h)(GO((0, aM.e)())))
      },
      eO = function(MM) {
        const rM = zi(),
          OM = zi(),
          SM = new Set,
          jM = new Set,
          aM = () => {
            var rM, iM;
            return null !== (rM = null === (iM = MM.runtime()) || void 0 === iM ? void 0 : iM.currentViewer) && void 0 !== rM ? rM : null
          };
        let PM = null,
          nM = null;
        const zM = (MM, rM) => ({
            current: MM,
            watch(iM) {
              let OM = MM();
              return rM.add((() => {
                const rM = MM();
                rM !== OM && (OM = rM, iM(rM))
              }))
            }
          }),
          mM = MM => ({
            watch: rM => (MM.add(rM), () => {
              MM.delete(rM)
            })
          }),
          HM = MM => {
            const rM = aM(),
              iM = null === rM || void 0 === rM ? void 0 : rM.view;
            rM && iM && rM.seek(Math.max(0, Math.min(iM.totalTicks - 1, iM.bL + MM * LM.ud)))
          },
          hM = {
            replay: zM((() => {
              var MM;
              const rM = aM(),
                iM = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null;
              return null === rM || null === iM || iM.state === LM.hd.None ? (PM = null, null) : (PM = (0, TM.r)(PM, {
                id: rM.id,
                bL: iM.bL,
                totalTicks: iM.totalTicks,
                zk: LM.ud,
                playing: iM.state === LM.hd.Playing,
                speed: iM.speed,
                cameraMode: iM.cameraMode,
                freecam: "freecam" === iM.cameraMode
              }), PM)
            }), rM),
            replayEdits: zM((() => {
              var MM;
              const rM = aM(),
                iM = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.view) && void 0 !== MM ? MM : null;
              return null === rM || null === iM || iM.state === LM.hd.None ? (nM = null, null) : (nM = (0, TM.r)(nM, {
                cameraKeyframes: [...rM.keyframes],
                playbackMark: iM.mark,
                fileName: rM.fileName,
                unsavedChanges: rM.unsavedChanges,
                suggestSaveAs: rM.suggestSaveAs
              }), nM)
            }), rM),
            replayRecorder: zM((() => {
              var rM, iM;
              return null !== (rM = null === (iM = MM.runtime()) || void 0 === iM ? void 0 : iM.recorder.current) && void 0 !== rM ? rM : Pi.c.states.replayRecorder.current()
            }), OM),
            replayVideoExporting: {
              current: ji.d,
              watch: MM => (0, QM.j)("replayViewer|videoExportChanged", (() => {
                MM((0, ji.d)())
              }))
            }
          },
          JM = {
            replayUiActionRequested: mM(jM),
            replayViewerRequested: mM(SM)
          },
          dM = MM => {
            for (const rM of SM) rM(MM)
          },
          yM = () => {
            var OM;
            !0 === (null === (OM = aM()) || void 0 === OM ? void 0 : OM.isOpen) && Promise.all([iM.e(111), iM.e(78)]).then((() => iM(63231))).then((iM => {
              let {
                startWasmReplayVideoExport: OM
              } = iM;
              return OM({
                viewer: aM,
                canvas: () => {
                  var rM, iM;
                  return null !== (rM = null === (iM = MM.canvas) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : null
                },
                watchViewer: rM.add,
                requestViewer: dM
              })
            }), (MM => {
              console.error("Couldn't load the video export", MM), ai.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((MM => {
              console.error("The video export failed", MM)
            }))
          },
          lM = {
            replayAction(MM) {
              if ((0, ji.d)()) return;
              const rM = aM();
              switch (MM) {
                case "replaySkipBack":
                  HM(-1);
                  break;
                case "replaySkipForward":
                  HM(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== rM && void 0 !== rM && rM.view && rM.setSpeed((0, Si.h)(rM.view.speed, "replaySpeedUp" === MM ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === rM || void 0 === rM || rM.addKeyframe()
              }
            },
            setReplayPlaying(MM) {
              var rM, iM;
              (0, ji.d)() || (MM ? null === (rM = aM()) || void 0 === rM || rM.play() : null === (iM = aM()) || void 0 === iM || iM.pause())
            },
            seekReplay(MM) {
              var rM;
              let {
                bL: iM,
                ignorePlaybackMark: OM
              } = MM;
              null === (rM = aM()) || void 0 === rM || rM.seek(iM, null !== OM && void 0 !== OM && OM)
            },
            setReplayCameraMode(MM) {
              var rM;
              null === (rM = aM()) || void 0 === rM || rM.setCameraMode(MM)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(MM) {
              var rM;
              null === (rM = aM()) || void 0 === rM || rM.setKeyframe(MM)
            },
            moveReplayCameraKeyframe(MM) {
              var rM;
              let {
                from: iM,
                to: OM
              } = MM;
              null === (rM = aM()) || void 0 === rM || rM.moveKeyframe(iM, OM)
            },
            deleteReplayCameraKeyframes(MM) {
              var rM;
              let {
                start: iM,
                end: OM
              } = MM;
              null === (rM = aM()) || void 0 === rM || rM.deleteKeyframes(iM, OM)
            },
            setReplayPlaybackMark(MM) {
              var rM;
              null === (rM = aM()) || void 0 === rM || rM.setMark(MM)
            },
            cropReplay(MM) {
              var rM, iM;
              let {
                start: OM,
                end: SM
              } = MM;
              return !(0, ji.d)() && (null !== (rM = null === (iM = aM()) || void 0 === iM ? void 0 : iM.crop(OM, SM)) && void 0 !== rM && rM)
            },
            holdReplayForShaderPackFailure(MM) {
              const rM = aM();
              rM && (rM.holdForShaderPackFailure(), function(MM) {
                iM.e(129).then((() => iM(40300))).then((rM => {
                  let {
                    shaderPackPage: iM
                  } = rM;
                  iM.block(MM)
                })).catch((MM => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", MM)
                }))
              }(MM))
            },
            exportReplayVideo() {
              yM()
            },
            toggleRecording() {
              var rM;
              null === (rM = MM.runtime()) || void 0 === rM || rM.recorder.toggleRecording()
            },
            saveClip() {
              var rM;
              null === (rM = MM.runtime()) || void 0 === rM || rM.recorder.saveClip()
            },
            setRecorderPrefs(rM) {
              var iM;
              let {
                clipping: OM,
                clipSeconds: SM
              } = rM;
              null === (iM = MM.runtime()) || void 0 === iM || iM.recorder.setPrefs(OM, SM)
            },
            setReplayViewerOpen(rM) {
              var iM;
              (0, dr.d)(rM) && (null === (iM = MM.runtime()) || void 0 === iM || iM.recorder.viewerShown(rM))
            },
            recordFlyingMiddleText(rM) {
              var iM;
              let {
                content: OM,
                oi: SM,
                angle: jM,
                Yi: aM
              } = rM;
              null === (iM = MM.runtime()) || void 0 === iM || iM.recorder.recordFlyingText(JSON.stringify(OM), SM, jM, aM)
            },
            dragReplayCamera(rM) {
              var iM;
              let {
                dx: OM,
                dy: SM
              } = rM;
              null === (iM = MM.freecam()) || void 0 === iM || iM.drag(OM, SM)
            },
            moveReplayFreecam(rM) {
              var iM;
              null === (iM = MM.freecam()) || void 0 === iM || iM.move(rM)
            },
            holdReplayFreecamVertical(rM) {
              var iM;
              let {
                action: OM,
                sQ: SM
              } = rM;
              null === (iM = MM.freecam()) || void 0 === iM || iM.holdVertical(OM, SM)
            }
          },
          EM = MM => {
            var rM;
            const iM = aM(),
              OM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.view) && void 0 !== rM ? rM : null;
            ni.has(MM) ? (MM => {
              for (const rM of jM) rM(MM)
            })(MM) : Qi.has(MM) ? lM.replayAction(MM) : "replayPlayPause" === MM ? iM && OM && OM.state !== LM.hd.None && lM.setReplayPlaying(OM.state !== LM.hd.Playing) : "replayChangeCameraMode" === MM ? null === iM || void 0 === iM || iM.cycleCameraMode() : "replayExit" === MM ? !0 === (null === iM || void 0 === iM ? void 0 : iM.inPlayback) && (0, Dr.n)("/") : "replayExportVideo" === MM && yM()
          };
        let UM = !1;
        return {
          states: hM,
          events: JM,
          commands: lM,
          lookups: {
            replayCamera() {
              var rM, iM, OM;
              return !0 !== (null === (rM = aM()) || void 0 === rM ? void 0 : rM.isOpen) ? null : null !== (iM = null === (OM = MM.cameraView) || void 0 === OM ? void 0 : OM.call(MM)) && void 0 !== iM ? iM : null
            },
            leaveGameReloadsPage() {
              var MM;
              return !0 === (null === (MM = aM()) || void 0 === MM ? void 0 : MM.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var MM;
              const iM = !0 === (null === (MM = aM()) || void 0 === MM ? void 0 : MM.inPlayback);
              iM !== UM && (UM = iM, QM.i.Tz("connectedGameChanged")), rM.fire()
            },
            recorderChanged: OM.fire,
            keyDown: MM => {
              var rM;
              switch (MM) {
                case "recordGame":
                  return void lM.toggleRecording();
                case "recordClip":
                  return void((0, dr.b)() || lM.saveClip())
              }(0, ji.d)() || ("replayViewerOpen" !== MM ? MM.startsWith("replay") && ((0, dr.b)() || !0 === (null === (rM = aM()) || void 0 === rM ? void 0 : rM.inPlayback)) && EM(MM) : dM("toggle"))
            }
          }
        }
      }({
        runtime: SM.n,
        cameraView: () => {
          var MM;
          const rM = null === (MM = (0, aM.e)()) || void 0 === MM ? void 0 : MM.renderFrame;
          if (!rM) return null;
          const [iM, OM, SM] = rM.cameraPosition, [jM, PM, nM] = rM.cameraDirection;
          return {
            position: [iM, OM, SM],
            direction: [jM, PM, nM]
          }
        },
        canvas: () => {
          var MM, rM, iM;
          return null !== (MM = null === (rM = (iM = (0, jM.I)()).canvas) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : null
        },
        freecam: SM.j
      }),
      bO = {
        states: {
          ...Qr,
          ...Hr.k,
          ...eO.states,
          ...Hi,
          ...AM
        },
        events: {
          ...zr,
          ...dM,
          ...Hr.f,
          ...tM.d,
          ...ui.e,
          ...eO.events,
          ...Ji,
          ...wM.e
        },
        commands: {
          ...bM,
          ...Lr,
          ...yM,
          ...Hr.c,
          ...Tr,
          ...gi,
          ...wM.d,
          ...or,
          ...eO.commands,
          ...Ci,
          ...xM,
          ...oi,
          ...hr
        },
        queries: {
          ...Hr.g,
          ...CO
        },
        lookups: {
          ...mr,
          ...kM,
          ...ui.i,
          ...eO.lookups,
          ...eM,
          ...Oi,
          ...Zi,
          ...vM
        }
      };

    function wO() {
      (0, PM.c)(JM.i), (0, SM.r)(eO.feed), (0, tM.e)(), Vr || (Vr = !0, (0, JM.h)(pM.i, (MM => {
        const rM = (0, sM.d)(pM.i, MM);
        "string" === typeof rM && Promise.resolve().then((() => iM(4019))).then((MM => {
          let {
            onCosmeticPackGranted: iM
          } = MM;
          iM(rM)
        }))
      })), (0, JM.h)(pM.bb, (MM => {
        const rM = (0, sM.d)(pM.bb, MM);
        "number" === typeof rM && QM.i.Tz("serverUpdating", Date.now() + rM, !0)
      })), (0, JM.h)(pM.F, (MM => {
        const rM = (0, sM.d)(pM.F, MM);
        if ((0, sM.c)(rM)) {
          const {
            Wr: MM,
            sr: iM
          } = rM;
          (0, Kr.c)({
            Wr: "string" === typeof MM ? MM : null,
            sr: "string" === typeof iM ? iM : null
          })
        }
      })), (0, JM.h)(zM.hc.NewUiRequest, (MM => {
        const rM = (0, sM.f)(MM);
        (0, sM.c)(rM) && "number" === typeof rM.id && (0, sM.c)(rM.clientParameters) && (0, qr.e)(rM.id, rM.clientParameters)
      })), (0, JM.h)(pM.V, (MM => {
        const rM = (0, sM.d)(pM.V, MM);
        "number" === typeof rM && (0, qr.g)(rM)
      })), (0, JM.e)(qr.b), (0, JM.h)(zM.hc.UiRequestPopup, (MM => {
        const rM = (0, sM.f)(MM);
        if ((0, sM.c)(rM) && "number" === typeof rM.id && ("string" === typeof rM.text || (0, sM.c)(rM.text) && "string" === typeof rM.text.translationKey)) {
          const MM = rM.id;
          (0, qr.h)(MM, rM.text, !0 === rM.destructive, (rM => {
            Tr.answerUiRequest({
              id: MM,
              IQ: rM
            })
          }))
        }
      })), (0, JM.h)(zM.hc.TopRightHelper, (MM => {
        const rM = (0, sM.f)(MM);
        void 0 !== rM && QM.i.Tz("TopRightHelper", rM, !0)
      })), (0, JM.h)(zM.hc.TaskProgress, (MM => {
        const rM = (0, sM.f)(MM);
        (0, sM.c)(rM) && "string" === typeof rM.taskId && "number" === typeof rM.progress && (0, Ir.c)({
          taskId: rM.taskId,
          progress: rM.progress
        })
      }))), ei || (ei = !0, (0, JM.h)(pM.q, (MM => {
        const rM = (0, sM.d)(pM.q, MM);
        (0, sM.c)(rM) && QM.i.Tz("showShopFromServer", {
          toggle: rM.OS,
          SS: rM.SS
        }, !0)
      })), (0, JM.h)(zM.hc.OverShopInfo, (MM => {
        const rM = (0, sM.f)(MM);
        (0, sM.c)(rM) && QM.i.Tz("overShopInfo", rM.info, !0)
      })), (0, JM.h)(zM.hc.ShowShopTutorial, (() => {
        QM.i.Tz("showShopTutorial", null, !0)
      }))), Ui || (Ui = !0, (0, JM.c)((() => {
        var MM;
        (0, di.resetLeaveEvents)(), null === (MM = Gi) || void 0 === MM || MM(), Gi = (0, JM.b)() ? (0, li.h)(JM.b) : null, (0, JM.b)() || QM.i.OE()
      })), (0, JM.h)(zM.hc.SetCookie, (MM => {
        const rM = (0, sM.f)(MM),
          iM = (0, Dr.e)().gameNameWithVariation;
        (0, sM.c)(rM) && "string" === typeof rM.key && null !== iM && (0, yi.setCookie)(iM, rM.key, rM.value)
      })), (0, JM.h)(zM.hc.LeaveValues, (MM => {
        const rM = (0, sM.f)(MM);
        if ((0, sM.c)(rM) && "string" === typeof rM.leaveEventType) {
          const {
            leaveEventType: MM,
            category: iM,
            subCategory: OM,
            value: SM
          } = rM;
          (0, di.updateLeaveValue)({
            leaveEventType: MM,
            category: iM,
            subCategory: OM,
            value: SM
          })
        }
      })), (0, JM.h)(zM.hc.CustomAnalyticsEvent, (MM => {
        const rM = (0, sM.f)(MM);
        if ((0, sM.c)(rM) && "string" === typeof rM.cat1) {
          const {
            cat1: MM,
            cat2: iM,
            cat3: OM,
            value: SM
          } = rM;
          (0, di.logCustomAnalyticsEvent)({
            cat1: MM,
            cat2: iM,
            cat3: OM,
            value: SM
          })
        }
      })), (0, JM.h)(zM.hc.ProgressionEvent, (MM => {
        const rM = (0, sM.f)(MM);
        if ((0, sM.c)(rM)) {
          const {
            type: MM,
            location1: iM,
            location2: OM,
            location3: SM,
            score: jM
          } = rM;
          (0, di.logProgressionEvent)({
            type: MM,
            location1: iM,
            location2: OM,
            location3: SM,
            score: jM
          })
        }
      })), (0, JM.h)(zM.hc.ResourceEvent, (MM => {
        const rM = (0, sM.f)(MM);
        if ((0, sM.c)(rM)) {
          const {
            type: MM,
            resourceType: iM,
            amount: OM,
            category: SM,
            itemName: jM
          } = rM;
          (0, di.logResourceEvent)({
            type: MM,
            resourceType: iM,
            amount: OM,
            category: SM,
            itemName: jM
          })
        }
      })), (0, JM.h)(zM.hc.LeaderboardResponse, (MM => {
        const rM = (0, sM.f)(MM);
        if ((0, sM.c)(rM)) {
          const {
            category: MM,
            timeframe: iM,
            data: OM
          } = rM;
          QM.i.Tz("leaderboardResponse", {
            category: MM,
            timeframe: iM,
            data: OM
          })
        }
      })), (0, JM.h)(pM.z, (MM => {
        const rM = (0, sM.d)(pM.z, MM);
        "string" === typeof rM && (0, Ei.c)(MM.conn, rM)
      })), (0, JM.h)(pM.C, (MM => {
        const rM = (0, sM.d)(pM.C, MM);
        "string" === typeof rM && console.error(`[logErrorToConsole]: ${rM}`)
      }))), oM(), (0, ui.b)(), Zr || (Zr = !0, (0, JM.h)(pM.h, (MM => {
        const rM = (0, sM.d)(pM.h, MM);
        void 0 !== rM && (0, kr.h)(rM)
      }))), Xr(), ur(), XM || (XM = !0, (0, jM.x)(IM)), OM.gameBridge.attach(bO), (0, OM.installPageSources)({
        commands: {
          ...OM.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Yi.g
        },
        queries: yO,
        lookups: {
          ...OM.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...lO,
          jU: Yi.b,
          drawCallStats: Ni.j
        }
      }), (0, fi.c)(), QO()
    }
  },
  42053: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      e: () => nM,
      f: () => PM,
      j: () => QM
    });
    var OM = iM(2050);
    let SM = null,
      jM = 0;
    const aM = new Set;

    function PM() {
      return SM
    }

    function nM() {
      return jM
    }

    function QM(MM) {
      SM = MM, jM++, (0, OM.c)();
      for (const rM of aM) rM()
    }

    function zM(MM) {
      aM.add(MM)
    }
  },
  42151: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => PM
    });
    var OM = iM(42157);
    let SM = null,
      jM = null;

    function aM() {
      return SM ??= iM.e(73).then((() => iM(63252))).catch((MM => {
        throw SM = null, MM
      })), SM
    }

    function PM() {
      return jM ??= Promise.all([aM(), (0, OM.g)()]).then((MM => {
        let [rM] = MM;
        return rM
      }), (MM => {
        throw jM = null, MM
      })), jM
    }
  },
  38005: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = {
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
  40073: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      e: () => SM
    });
    const OM = ["description", "label"];

    function SM(MM) {
      const rM = MM.type;
      return {
        type: rM,
        params: MM[rM]
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);