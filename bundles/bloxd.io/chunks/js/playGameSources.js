export const id = 46;
export const ids = [46];
export const modules = {
  38928: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      e: () => iD,
      i: () => pD
    });
    const ID = 6e3;

    function pD(DD, CD) {
      return [Math.floor(DD[0] / CD) * CD, Math.floor(DD[1] / CD) * CD, Math.floor(DD[2] / CD) * CD]
    }

    function iD(DD) {
      const CD = (null !== DD && void 0 !== DD ? DD : "").match(/-?\d+(?:\.\d+)?/g);
      return CD && CD.length >= 3 ? [Number(CD[0]), Number(CD[1]), Number(CD[2])] : null
    }

    function fD(DD, CD) {
      return DD === CD ? String(DD) : `${DD}-${CD}`
    }

    function bD(DD, CD, cD, ID) {
      const pD = [];
      let iD = new Map;
      for (let fD = DD[2]; fD < DD[2] + CD; fD++) {
        const bD = new Map;
        let QD = DD[0];
        for (; QD < DD[0] + CD;) {
          const pD = ID(QD, cD, fD);
          let wD = QD;
          for (; wD + 1 < DD[0] + CD && ID(wD + 1, cD, fD) === pD;) wD++;
          if (null !== pD) {
            const DD = `${QD} ${wD} ${pD}`,
              CD = iD.get(DD);
            CD ? (CD.z1 = fD, iD.delete(DD), bD.set(DD, CD)) : bD.set(DD, {
              x0: QD,
              x1: wD,
              z0: fD,
              z1: fD,
              name: pD
            })
          }
          QD = wD + 1
        }
        pD.push(...iD.values()), iD = bD
      }
      return pD.push(...iD.values()), pD.sort(((DD, CD) => DD.z0 - CD.z0 || DD.x0 - CD.x0)).map((DD => `x${fD(DD.x0,DD.x1)} z${fD(DD.z0,DD.z1)} ${DD.name}`))
    }

    function QD(DD, CD, cD, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ID;
      const QD = [DD[0] + CD - 1, DD[1] + CD - 1, DD[2] + CD - 1],
        wD = null !== pD && pD.every(((CD, cD) => Math.floor(CD) >= DD[cD] && Math.floor(CD) <= QD[cD])),
        SD = [`The chunk from ${DD.join(" ")} to ${QD.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== pD && SD.push(`The player's feet are at ${pD.map(Math.floor).join(" ")}, ${wD?"in this chunk":"outside this chunk"}.`);
      const BD = [];
      for (let ID = DD[1]; ID <= QD[1]; ID++) {
        const pD = bD(DD, CD, ID, cD).join("; "),
          iD = BD[BD.length - 1];
        (null === iD || void 0 === iD ? void 0 : iD.boxes) === pD ? iD.to = ID : BD.push({
          from: ID,
          to: ID,
          boxes: pD
        })
      }
      const yD = BD.filter((DD => "" !== DD.boxes));
      0 === yD.length && SD.push("It is all air.");
      let MD = SD.join("\n").length;
      for (const ID of yD) {
        const DD = `y${fD(ID.from,ID.to)}: ${ID.boxes}`;
        if (MD += DD.length + 1, MD > iD) {
          SD.push(`Cut short: the layers from y${ID.from} up aren't shown, as there are too many blocks.`);
          break
        }
        SD.push(DD)
      }
      return SD.join("\n")
    }
  },
  8487: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    var ID = cD(16);

    function pD() {
      return !ID.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36315: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      f: () => iD,
      i: () => pD
    });
    const ID = [.25, .5, 1, 2, 4, 8, 16];

    function pD(DD, CD) {
      const cD = ID;
      let pD = cD.indexOf(DD);
      return -1 === pD && (pD = cD.findIndex((CD => CD >= DD)), -1 === pD && (pD = cD.length - 1)), "up" === CD ? cD[Math.min(pD + 1, cD.length - 1)] : cD[Math.max(pD - 1, 0)]
    }

    function iD(DD) {
      return DD <= ID[0]
    }

    function fD(DD) {
      return DD >= ID[ID.length - 1]
    }
  },
  35908: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      f: () => iD
    });
    let ID = !1;

    function pD() {
      return ID
    }

    function iD(DD) {
      return ID !== DD && (ID = DD, !0)
    }
  },
  38323: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(20),
      pD = cD(1928);

    function iD(DD) {
      let {
        taskId: CD,
        progress: cD
      } = DD;
      const ID = pD.d.get("_tasks");
      null !== ID && void 0 !== ID && ID[CD] && pD.d.apply({
        _tasks: {
          ...ID,
          [CD]: {
            ...ID[CD],
            progress: cD
          }
        }
      })
    }
    ID.i.subscribe("clientTaskProgress", (DD => {
      iD(DD)
    }))
  },
  38895: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      e: () => tD,
      h: () => wD,
      i: () => BD,
      k: () => QD,
      m: () => fD,
      p: () => SD,
      t: () => ZD
    });
    var ID = cD(1928),
      pD = cD(20),
      iD = cD(1945);
    const fD = (0, iD.o)((function() {
        var DD, CD, cD, pD;
        return {
          health: null !== (DD = ID.d.get("_health")) && void 0 !== DD ? DD : null,
          maxHealth: null !== (CD = ID.d.get("_totalMaxHealth")) && void 0 !== CD ? CD : null,
          shield: null !== (cD = ID.d.get("_shield")) && void 0 !== cD ? cD : null,
          maxShield: null !== (pD = ID.d.get("maxShield")) && void 0 !== pD ? pD : null
        }
      }), [], (0, iD.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      bD = [{
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

    function QD(DD, CD) {
      return bD[(DD ? 2 : 0) + (CD ? 1 : 0)]
    }
    const wD = (0, iD.o)((function() {
      var DD;
      return null !== (DD = ID.d.get("_aura")) && void 0 !== DD ? DD : null
    }), [], (0, iD.l)("_aura"));

    function SD(DD) {
      return {
        watch: CD => (0, pD.k)("shotPlayer", (cD => {
          let {
            playerId: ID,
            damage: pD,
            wasCrit: iD,
            distance: fD
          } = cD;
          DD(ID) && CD({
            damage: pD,
            wasCrit: iD,
            distance: fD
          })
        }))
      }
    }

    function BD(DD) {
      return (0, iD.d)("chat", (CD => {
        let {
          serverChatMsgId: cD,
          content: ID,
          chatterEId: pD
        } = CD;
        return {
          serverChatMsgId: null !== cD && void 0 !== cD ? cD : null,
          content: ID,
          author: pD ? DD(pD) : null
        }
      }))
    }
    class yD {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const cD = this.shown;
        return DD !== this.needed && (this.needed = DD, this.neededSince = CD, null === DD && (this.shown = null)), this.shown !== this.needed && CD - this.neededSince > 200 && (this.shown = this.needed), this.shown !== cD
      }
    }

    function MD(DD) {
      return [{
        translationKey: `touchKeys:${DD}`
      }]
    }
    const tD = {
      open: MD("open"),
      close: MD("close"),
      milk: MD("milk"),
      shear: MD("shear"),
      tame: MD("tame"),
      feed: MD("feed"),
      ride: MD("ride")
    };

    function ZD(DD) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: DD
      }]
    }
  },
  39822: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      h: () => fD
    });
    var ID = cD(3090);
    let pD = null,
      iD = null;

    function fD() {
      return iD ??= cD.e(208).then((() => cD(35741))).then((DD => {
        let {
          ITEM_SPRITES: CD,
          ITEM_SPRITES_WITHOUT_FILE: cD,
          ITEM_FILES_WITHOUT_SPRITE: iD
        } = DD;
        pD = function(DD, CD, cD) {
          const pD = new Set,
            iD = (0, ID.z)(CD);
          let fD = 0;
          for (const [ID, bD] of DD.entries()) ID === iD[fD] ? fD++ : pD.add(bD);
          if ("" !== cD)
            for (const bD of cD.split(ID.v)) pD.add(bD);
          return pD
        }(CD.split(ID.v), cD, iD)
      }), (DD => {
        throw iD = null, DD
      })), iD
    }

    function bD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = pD) || void 0 === cD ? void 0 : cD.has(DD)) && void 0 !== CD && CD
    }
  },
  38913: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      d: () => iD,
      e: () => pD
    });
    const ID = 128;

    function pD(DD, CD, cD, ID) {
      const pD = 2 * CD - 1,
        iD = 1 - 2 * cD,
        fD = DD(0) - pD * DD(3),
        bD = DD(4) - pD * DD(7),
        QD = DD(8) - pD * DD(11),
        wD = DD(1) - iD * DD(3),
        SD = DD(5) - iD * DD(7),
        BD = DD(9) - iD * DD(11);
      ID[0] = bD * BD - QD * SD, ID[1] = QD * wD - fD * BD, ID[2] = fD * SD - bD * wD;
      const yD = ID[0] * DD(3) + ID[1] * DD(7) + ID[2] * DD(11) < 0 ? -1 : 1,
        MD = Math.hypot(ID[0], ID[1], ID[2]) * yD;
      return ID[0] /= MD, ID[1] /= MD, ID[2] /= MD, ID
    }

    function iD(DD, CD, cD, ID, pD, iD) {
      const fD = [Math.floor(CD[0]), Math.floor(CD[1]), Math.floor(CD[2])],
        bD = [0, 0, 0],
        QD = [1 / 0, 1 / 0, 1 / 0],
        wD = [1 / 0, 1 / 0, 1 / 0];
      for (let yD = 0; yD < 3; yD++) bD[yD] = Math.sign(cD[yD]), 0 !== bD[yD] && (wD[yD] = Math.abs(1 / cD[yD]), QD[yD] = (fD[yD] + (bD[yD] > 0 ? 1 : 0) - CD[yD]) / cD[yD]);
      let SD = 0,
        BD = Math.abs(cD[0]) > Math.abs(cD[1]) ? 0 : 1;
      for (Math.abs(cD[2]) > Math.abs(cD[BD]) && (BD = 2); SD <= ID;) {
        if (DD(fD[0], fD[1], fD[2])) return pD[0] = fD[0], pD[1] = fD[1], pD[2] = fD[2], iD[0] = 0, iD[1] = 0, iD[2] = 0, iD[BD] = -bD[BD], !0;
        BD = QD[0] < QD[1] ? 0 : 1, QD[2] < QD[BD] && (BD = 2), SD = QD[BD], fD[BD] += bD[BD], QD[BD] += wD[BD]
      }
      return !1
    }
  },
  38890: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      return Math.hypot(DD[0] - CD[0], DD[1] - CD[1], DD[2] - CD[2]) < cD + .5
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  38339: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD
    });
    var ID = cD(1221),
      pD = cD(1319),
      iD = cD(16),
      fD = cD(1305),
      bD = cD(1317),
      QD = cD(1508),
      wD = cD(35883);

    function SD(DD) {
      let {
        DD: CD,
        CD: cD
      } = DD;
      const SD = null !== CD && void 0 !== CD ? CD : (0, bD.b)().gameNameWithVariation;
      (0, ID.J)(SD) && ((0, wD.i)(), (0, fD.ab)((() => {
        console.log("Received matchmaking order from game server to game", CD), (0, iD.k)("inGameReplay"), (0, QD.navigatePreserveSearch)((0, pD.b)(SD, null !== cD && void 0 !== cD ? cD : void 0))
      }), "video_start"))
    }
  },
  38498: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(20),
      pD = cD(1961);

    function iD(DD) {
      var CD, cD;
      const iD = (0, pD.m)(null !== (CD = null === (cD = pD.q.toggleFreeCam) || void 0 === cD ? void 0 : cD[0]) && void 0 !== CD ? CD : null);
      ID.i.Uo("showBottomMessage", {
        message: `Free Camera ${DD?"Enabled":"Disabled"}${iD?` - Press ${iD} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38331: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => QD,
      g: () => fD,
      i: () => bD,
      m: () => wD
    });
    var ID = cD(20),
      pD = cD(1340);
    const iD = new Map;

    function fD(DD, CD) {
      ID.i.Uo("newUiRequest", {
        id: DD,
        clientParameters: CD
      }, !0)
    }

    function bD(DD) {
      ID.i.Uo("removeUiRequest", DD, !0);
      const CD = iD.get(DD);
      CD && (CD.tearDownNotification(), iD.delete(DD))
    }

    function QD() {
      ID.i.Uo("clearUiRequests");
      for (const DD of iD.values()) DD.tearDownNotification();
      iD.clear()
    }

    function wD(DD, CD, cD) {
      const ID = pD.NotificationProvider.showPromptPopup({
        title: CD,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      iD.set(DD, ID), ID.getResult().then((CD => {
        iD.delete(DD), "notificationTornDown" !== CD && cD(CD)
      }))
    }
  },
  38921: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD,
      e: () => yD
    });
    var ID = cD(194),
      pD = cD(38928);
    const iD = 20;

    function fD(DD) {
      return DD.map(Math.floor).join(" ")
    }

    function bD(DD) {
      return null === DD.amount || 1 === DD.amount ? DD.name : `${DD.amount} ${DD.name}`
    }
    var QD = cD(38931),
      wD = cD(1928),
      SD = cD(1317);

    function BD(DD, CD) {
      if (!DD) return QD.e;
      const cD = DD.playerFeet();
      if (!cD) return "The player isn't in the world yet, so no blocks can be seen.";
      const iD = ID.h.Wt,
        fD = (0, pD.i)(null !== CD && void 0 !== CD ? CD : cD, iD),
        bD = DD.chunkBlocks(fD);
      return bD ? (0, pD.b)(fD, iD, ((CD, cD, ID) => {
        const pD = bD(CD, cD, ID);
        return 0 === pD ? null : DD.blockName(pD).split("|")[0]
      }), cD) : `The chunk from ${fD.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${cD.map(Math.floor).join(" ")}.`
    }

    function yD(DD) {
      var CD, cD, ID;
      if (!DD) return QD.i;
      const pD = DD.playerFeet();
      if (!pD) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: BD,
        heldSlot: yD
      } = DD.inventory();
      return function(DD) {
        const CD = [];
        null !== DD.game && CD.push(`Game: ${DD.game}.`);
        const cD = null === DD.health ? "" : `, health ${Math.round(DD.health)}${null===DD.maxHealth?"":` of ${Math.round(DD.maxHealth)}`}`;
        CD.push(`The player (the creator) stands at ${fD(DD.position)}${cD}, ${DD.creative?"in":"not in"} creative mode.`);
        const ID = DD.slots[DD.heldSlot];
        CD.push(ID ? `Holding (slot ${DD.heldSlot}): ${bD(ID)}.` : `Holding nothing (slot ${DD.heldSlot} is empty).`);
        const pD = DD.slots.flatMap(((DD, CD) => DD ? [`slot ${CD}: ${bD(DD)}`] : []));
        CD.push(pD.length > 0 ? `Inventory: ${pD.join(", ")}.` : "Inventory: empty.");
        const QD = CD => Math.hypot(CD.position[0] - DD.position[0], CD.position[1] - DD.position[1], CD.position[2] - DD.position[2]),
          wD = [...DD.nearby].sort(((DD, CD) => QD(DD) - QD(CD)));
        if (0 === wD.length) CD.push("No other players or mobs are near enough to see.");
        else {
          CD.push("Near them, nearest first:");
          for (const DD of wD.slice(0, iD)) {
            const cD = "player" === DD.kind ? `player "${DD.name||"?"}"` : DD.name && DD.name !== DD.kind ? `${DD.kind} "${DD.name}"` : DD.kind,
              ID = Math.round(QD(DD));
            CD.push(`- ${cD} at ${fD(DD.position)}, ${ID} block${1===ID?"":"s"} away`)
          }
          wD.length > iD && CD.push(`- and ${wD.length-iD} more further away`)
        }
        return DD.droppedItems > 0 && CD.push(`${DD.droppedItems} dropped item${1===DD.droppedItems?" is":"s are"} on the ground nearby.`), CD.join("\n")
      }({
        game: null !== (CD = (0, SD.b)().gameNameWithVariation) && void 0 !== CD ? CD : null,
        position: pD,
        health: null !== (cD = wD.d.get("_health")) && void 0 !== cD ? cD : null,
        maxHealth: null !== (ID = wD.d.get("_totalMaxHealth")) && void 0 !== ID ? ID : null,
        creative: !0 === wD.d.get("creative"),
        heldSlot: yD,
        slots: BD,
        nearby: DD.nearby(),
        droppedItems: DD.droppedItems()
      })
    }
  },
  38356: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      c: () => QD,
      e: () => wD
    });
    var ID = cD(1221),
      pD = cD(1011),
      iD = cD(36216),
      fD = cD(20);

    function bD(DD) {
      let {
        lobbyName: CD,
        gameNameWithVariation: cD
      } = DD;
      return !(0, ID.N)(CD) || null !== cD && (cD.startsWith("testGym") || (0, pD.m)(cD))
    }

    function QD(DD) {
      return DD.tC === iD.e.Leave || DD.tC === iD.e.Cursor
    }

    function wD(DD) {
      fD.i.Uo("codeCollab", {
        type: DD.tC,
        docKey: DD.ZC,
        version: DD.oC,
        editorCount: DD.vC,
        peers: DD.NC,
        updates: DD.gC,
        playerId: DD.XC,
        playerName: DD.mC,
        colour: DD.nC,
        anchor: DD.OC,
        head: DD.PC,
        existingCursors: DD.HC,
        files: DD.UC,
        engineSettings: DD.xC
      })
    }
  },
  39789: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => VD,
      B: () => hD,
      C: () => lD,
      G: () => JD,
      K: () => jD,
      L: () => qD,
      O: () => WD,
      Q: () => YD,
      S: () => aD,
      c: () => sD,
      d: () => TD,
      g: () => UD,
      j: () => ED,
      l: () => xD,
      p: () => HD,
      s: () => LD,
      u: () => KD,
      x: () => zD
    });
    var ID = cD(1388),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(2338),
      bD = cD(4592),
      QD = cD(4571);
    let wD, SD = !1,
      BD = !1,
      yD = !1,
      MD = !1;
    const tD = 1300,
      ZD = 3e3;
    let oD = 0,
      vD = !1,
      ND = !1,
      gD = 0;
    const XD = 2;
    let mD = !1,
      nD = !1;
    const OD = new Set,
      PD = new Set;

    function HD() {
      return SD
    }

    function UD() {
      return ND
    }

    function xD() {
      return nD
    }

    function qD() {
      return (0, iD.r)() && !nD
    }

    function JD(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DD !== nD) {
        nD = DD;
        for (const DD of [...PD]) DD(nD);
        CD && YD()
      }
    }

    function KD(DD) {
      return PD.add(DD), () => {
        PD.delete(DD)
      }
    }

    function aD() {
      (0, bD.k)(fD.C.Menu, (0, iD.r)() ? 0 : fD.C.Menu)
    }

    function VD() {
      ND = !1, gD = 0, aD(), YD()
    }

    function zD(DD) {
      return OD.add(DD), () => {
        OD.delete(DD)
      }
    }

    function jD(DD) {
      BD = !1, DD !== SD && (SD = DD, MD = !1, clearTimeout(wD), yD = !SD && mD, SD ? (vD = !1, ND = !1, gD = 0) : qD() && !mD && (ND = !0), mD = !1, SD && !qD() && uD(), rD(), yD && YD())
    }

    function lD(DD) {
      DD !== vD && (vD = DD, DD || YD())
    }

    function LD() {
      BD = !1, MD || !0 !== kD() || (MD = !0, clearTimeout(wD), wD = setTimeout(GD, tD))
    }

    function TD() {
      return (!BD || performance.now() - oD > ZD) && (BD = (0, QD.K)().lockPointer(), oD = performance.now()), BD
    }

    function GD() {
      RD() && dD() && TD()
    }

    function RD() {
      return qD() && !SD && !vD && !(0, ID.e)()
    }

    function kD() {
      var DD;
      return "undefined" === typeof navigator || null === (DD = navigator.userActivation) || void 0 === DD ? void 0 : DD.isActive
    }

    function dD() {
      return yD && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== kD()
    }

    function YD() {
      qD() ? RD() && !ND && dD() && TD() : SD && !mD && uD()
    }

    function WD() {
      ND ? navigator.vendor.startsWith("Apple") ? eD() : gD = XD : YD()
    }

    function sD() {
      gD > 0 && 0 === --gD && eD()
    }

    function ED() {
      gD = 0
    }

    function eD() {
      RD() && !0 === kD() && TD()
    }

    function uD() {
      mD = !0, (0, QD.K)().unlockPointer()
    }

    function hD() {
      BD = !1, yD = !1, MD = !1, clearTimeout(wD), vD = !1, ND = !1, gD = 0, mD = !1;
      const DD = SD;
      SD = !1, DD && rD()
    }

    function rD() {
      for (const DD of [...OD]) DD(SD);
      pD.i.Uo("pointerLockUpdate", SD)
    }
  },
  39768: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD,
      f: () => bD,
      j: () => BD,
      n: () => wD,
      q: () => fD,
      r: () => SD,
      u: () => QD
    });
    let ID = null,
      pD = null,
      iD = null;

    function fD(DD) {
      ID = DD
    }

    function bD() {
      return ID
    }

    function QD(DD) {
      pD = DD
    }

    function wD() {
      return pD
    }

    function SD(DD) {
      iD = DD
    }

    function BD() {
      return iD
    }

    function yD() {
      var DD, CD;
      return !0 === (null === (DD = pD) || void 0 === DD || null === (CD = DD.currentViewer) || void 0 === CD ? void 0 : CD.inPlayback)
    }
  },
  39804: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD,
      g: () => iD,
      i: () => bD
    });
    var ID = cD(39680),
      pD = cD(39692);

    function iD(DD) {
      if (DD.queries.drawCensus() < ID.Jb.BYTES) return null;
      const CD = DD.memoryData(DD.scratch(), ID.Jb.BYTES, 4, "the draw census");
      return null === CD ? null : {
        terrainOpaque: ID.Jb.terrainOpaque(CD, 0),
        terrainTransparent: ID.Jb.terrainTransparent(CD, 0),
        terrainPack: ID.Jb.terrainPack(CD, 0),
        earthSky: ID.Jb.earthSky(CD, 0),
        skyMeshes: ID.Jb.skyMeshes(CD, 0),
        regular: ID.Jb.regular(CD, 0),
        thin: ID.Jb.thin(CD, 0),
        line: ID.Jb.line(CD, 0),
        text: ID.Jb.text(CD, 0),
        particles: ID.Jb.particles(CD, 0)
      }
    }

    function fD(DD) {
      const {
        terrainOpaque: CD,
        terrainTransparent: cD,
        earthSky: ID,
        skyMeshes: pD,
        regular: iD,
        thin: fD,
        line: bD,
        text: QD,
        particles: wD
      } = DD;
      return CD + cD + ID + pD + iD + fD + bD + QD + wD
    }

    function bD() {
      const DD = (0, pD.g)();
      return !0 === (null === DD || void 0 === DD ? void 0 : DD.isCoreRunning) ? function(DD) {
        const CD = iD(DD);
        if (null === CD) return [];
        const {
          terrainOpaque: cD,
          terrainTransparent: ID,
          terrainPack: pD,
          earthSky: bD,
          skyMeshes: QD,
          regular: wD,
          thin: SD,
          line: BD,
          text: yD,
          particles: MD
        } = CD;
        return [{
          label: "Drawn",
          value: `${fD(CD)}`
        }, {
          label: "Terrain",
          value: `${cD} opaque / ${ID} transparent (${pD} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${wD} / ${SD}`
        }, {
          label: "Text / Lines",
          value: `${yD} / ${BD}`
        }, {
          label: "Sky / Particles",
          value: `${bD+QD} / ${MD}`
        }]
      }(DD.api) : []
    }
  },
  39808: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadIcons: () => xD,
      setIconFileOverrides: () => qD,
      wasmIconLookups: () => TD,
      wasmIconQueries: () => LD
    });
    var ID = cD(4288),
      pD = cD(4272),
      iD = cD(39815),
      fD = cD(1922),
      bD = cD(1905),
      QD = cD(3083),
      wD = cD(3090);
    let SD = null,
      BD = null;

    function yD(DD) {
      const CD = DD.startsWith(wD.m),
        [cD, ID = cD, pD = cD] = (CD ? DD.slice(wD.m.length) : DD).split(wD.k);
      return {
        top: cD,
        left: ID,
        right: pD,
        half: CD
      }
    }

    function MD(DD) {
      const CD = null === SD ? void 0 : (0, QD.e)(DD),
        cD = void 0 === CD ? 0 : SD.codes[CD];
      return 0 === cD ? void 0 : SD.pool[cD - 1]
    }
    var tD = cD(3076),
      ZD = cD(4259),
      oD = cD(4284),
      vD = cD(39817);
    const ND = "item:";
    let gD = null,
      XD = null,
      mD = null,
      nD = null,
      OD = !1,
      PD = !1,
      HD = null,
      UD = 0;

    function xD() {
      return PD || (PD = !0, (0, oD.i)().then((DD => {
        DD && (0, fD.b)()
      }))), mD ??= Promise.all([(0, tD.e)(), (BD ??= cD.e(1).then((() => cD(41770))).then((DD => {
        let {
          BLOCK_FACE_RUNS: CD,
          BLOCK_FACES: cD,
          MAX_FACE_ITEM_ID: ID
        } = DD;
        SD = {
          codes: (0, wD.A)(CD, ID + 1),
          pool: cD.split(wD.v).map(yD)
        }
      }), (DD => {
        throw BD = null, DD
      })), BD), (0, vD.d)(), cD.e(189).then((() => cD(9062)))]).then((DD => {
        let [, , CD, cD] = DD;
        CD.followBundledTextures(), gD = CD, XD = cD, (0, fD.b)()
      }), (DD => {
        mD = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", DD)
      })), mD
    }

    function qD(DD) {
      HD = DD, UD++, (0, fD.b)()
    }

    function JD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = HD) || void 0 === cD ? void 0 : cD.itemSprite(DD)) && void 0 !== CD ? CD : gD.itemSpriteUrl(DD)
    }

    function KD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = HD) || void 0 === cD ? void 0 : cD.blockTexture(DD)) && void 0 !== CD ? CD : gD.blockTextureUrl(DD)
    }

    function aD(DD) {
      var CD;
      return null !== (CD = (0, tD.d)(DD)) && void 0 !== CD ? CD : DD
    }

    function VD(DD, CD) {
      var cD, ID, pD;
      return null !== (cD = null !== (ID = null !== (pD = KD(DD)) && void 0 !== pD ? pD : null === CD || void 0 === CD ? void 0 : CD.rotated[DD]) && void 0 !== ID ? ID : null === CD || void 0 === CD ? void 0 : CD.animated[DD]) && void 0 !== cD ? cD : gD.notFoundUrl()
    }

    function zD(DD) {
      return void 0 !== (0, QD.e)(DD) ? DD : /^[1-9][0-9]*$/.test(DD) ? (0, QD.h)(Number(DD)) : void 0
    }

    function jD(DD) {
      var CD;
      if (DD.startsWith(ND)) {
        var cD;
        const CD = (0, tD.d)(DD.slice(5));
        return null !== (cD = void 0 === CD ? null : JD(CD)) && void 0 !== cD ? cD : gD.notFoundUrl()
      }
      return null !== (CD = gD.particleUrl(DD)) && void 0 !== CD ? CD : gD.notFoundUrl()
    }

    function lD(DD, CD) {
      return "StairsBlock" === DD ? DD : CD ? "SlabBlock" : "CubeBlock"
    }
    const LD = {
        async blockIcon(DD) {
          var CD;
          let {
            name: ID,
            size: pD,
            lineWidth: iD
          } = DD;
          await xD();
          const bD = null !== (CD = zD(ID)) && void 0 !== CD ? CD : ID,
            wD = (0, oD.c)(bD, pD, iD);
          if (null !== wD) return wD;
          const SD = MD(bD),
            BD = (0, QD.e)(bD),
            yD = void 0 === BD || null === XD ? void 0 : XD.itemTypeNameOf(BD);
          if (null === gD || void 0 === SD) return "";
          const tD = [SD.top, SD.left, SD.right].some((DD => null === KD(DD))),
            vD = tD ? await (nD ??= cD.e(201).then((() => cD(33733))).then((DD => (OD && (OD = !1, (0, fD.b)()), {
              rotated: DD.rotatedBlockTextures,
              animated: DD.animatedBlockTextures
            })), (DD => (nD = null, OD = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", DD), null))), nD) : null;
          if (tD && null === vD) return "";
          const ND = {
              top: VD(SD.top, vD),
              left: VD(SD.left, vD),
              right: VD(SD.right, vD),
              itemType: lD(yD, SD.half)
            },
            mD = 0 === UD ? bD : `${bD}#${UD}`;
          return (await (0, ZD.d)()).drawBlockIconUrl(mD, pD, iD, (() => ND))
        }
      },
      TD = {
        itemIcon: function(DD) {
          var CD, cD;
          if (null === gD) return xD(), bD.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(DD);
          if ((0, pD.h)(DD)) return {
            kind: "icon",
            url: null !== (cD = gD.ingameIconUrl(DD)) && void 0 !== cD ? cD : gD.notFoundUrl()
          };
          if (DD.startsWith(pD.c)) return {
            kind: "icon",
            url: jD(DD.slice(pD.c.length))
          };
          if (0 === (0, QD.l)()) return (0, iD.c)(), bD.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(DD);
          const fD = null !== (CD = zD(DD)) && void 0 !== CD ? CD : DD,
            wD = (0, QD.e)(fD),
            SD = void 0 === wD ? void 0 : XD.itemTypeNameOf(wD);
          if (void 0 !== MD(fD)) return {
            kind: "drawnBlock"
          };
          const BD = function(DD) {
            var CD;
            return null !== (CD = JD(aD(DD))) && void 0 !== CD ? CD : gD.notFoundUrl()
          }(fD);
          if ((0, oD.f)(fD) && ! function(DD) {
              return null !== HD && (null !== HD.itemSprite(aD(DD)) || null !== HD.model(DD))
            }(fD)) return {
            kind: "model",
            url: BD
          };
          if ("Gun" === SD) return {
            kind: "gun",
            url: BD
          };
          if (void 0 !== wD && "GrayscaleArmour" === XD.itemTypeOf(wD) || Object.hasOwn(ID.b, fD)) {
            var yD;
            const CD = null !== (yD = (0, ID.d)(DD)) && void 0 !== yD ? yD : (0, ID.d)(fD);
            if (CD) return {
              kind: "item",
              url: BD,
              tint: CD
            }
          }
          return {
            kind: "item",
            url: BD
          }
        },
        hasIcon: function(DD) {
          return void 0 !== zD(DD) || (0, pD.h)(DD) || DD.startsWith(pD.c)
        },
        isItemName: function(DD) {
          return void 0 !== zD(DD)
        }
      }
  },
  39760: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      attachPlayGameSources: () => Yc,
      playGameSources: () => dc
    });
    var ID = cD(1905),
      pD = cD(39768),
      iD = cD(4571),
      fD = cD(39692),
      bD = cD(39771),
      QD = cD(38895),
      wD = cD(20),
      SD = cD(4585),
      BD = cD(4581),
      yD = cD(39718),
      MD = cD(39741),
      tD = cD(39773),
      ZD = cD(39727);
    (0, ZD.l)(SD.dc.Chat, (DD => {
      if (DD.payloadKind !== BD.ic.Msgpack) return;
      const CD = function(DD) {
        if (null === DD || "object" !== typeof DD || !("content" in DD)) return null;
        const {
          chatMsgId: CD,
          content: cD,
          chatterEId: ID
        } = DD;
        return {
          serverChatMsgId: null !== CD && void 0 !== CD ? CD : void 0,
          content: cD,
          chatterEId: void 0 === ID || null === ID ? void 0 : String(ID)
        }
      }((0, yD.c)(DD.payload));
      null !== CD && wD.i.Uo("chat", CD, !0)
    }));
    const oD = {
        chatReceived: (0, QD.i)((function(DD) {
          var CD, cD, ID;
          return {
            id: DD,
            name: null !== (CD = tD.f.getName(DD)) && void 0 !== CD ? CD : null,
            local: (0, MD.h)() === DD,
            profileEffect: null !== (cD = null === (ID = (0, tD.g)(DD)) || void 0 === ID ? void 0 : ID.profileEffect) && void 0 !== cD ? cD : null
          }
        }))
      },
      vD = {
        sendChatMessage(DD) {
          var CD;
          let {
            Rf: cD,
            channelName: ID
          } = DD;
          null === (CD = (0, fD.g)()) || void 0 === CD || CD.clientApi.sendChat(cD, ID)
        }
      };
    var ND = cD(194),
      gD = cD(1928),
      XD = cD(39680),
      mD = cD(38890);
    const nD = [0, 0, 0],
      OD = {
        codeBlockClickable(DD) {
          var CD;
          const cD = (0, fD.g)();
          if (null === cD || void 0 === cD || !cD.isSessionLive) return !1;
          const ID = cD.api;
          if (0 !== (XD.s.playerFlags(ID.apiView, 0) & XD.Zd.Crouching)) return !1;
          const pD = ID.queries.directorEntity(ID.localId) >= XD.Bb.BYTES ? ID.memoryData(ID.scratch(), XD.Bb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === pD) return !1;
          for (let iD = 0; iD < 3; iD++) nD[iD] = XD.Bb.feet(pD, 0, iD);
          return nD[1] += XD.Bb.eyeHeight(pD, 0), (0, mD.e)(nD, DD, null !== (CD = gD.d.get("blockReach")) && void 0 !== CD ? CD : ND.h.qN)
        }
      },
      PD = {
        clickCodeBlock(DD) {
          var CD;
          null === (CD = (0, fD.g)()) || void 0 === CD || CD.clickCodeBlock(DD)
        }
      };
    var HD = cD(39703),
      UD = cD(39781),
      xD = cD(1011),
      qD = cD(38388),
      JD = cD(4562),
      KD = cD(39711),
      aD = cD(39701),
      VD = cD(39715);

    function zD(DD) {
      if (null === DD) return null;
      const CD = [];
      for (const cD of DD) {
        const DD = Object.keys(cD)[0];
        if ("jD" === DD) {
          const {
            str: DD,
            style: ID,
            clickableUrl: pD
          } = cD.jD, iD = Object.keys(DD)[0], fD = DD[iD];
          "string" !== iD && "styledEntityName" !== iD && "styledTranslatedText" !== iD || CD.push({
            str: fD,
            style: ID,
            clickableUrl: pD
          })
        } else CD.push(cD[DD])
      }
      return CD
    }
    const jD = {
      screenPos(DD) {
        var CD, cD;
        return null !== (CD = null === (cD = (0, fD.g)()) || void 0 === cD ? void 0 : cD.renderFrame.projectWorldPosToScreenPos(DD)) && void 0 !== CD ? CD : {
          x: 0,
          y: 0
        }
      }
    };
    let lD = !1;

    function LD() {
      lD || (lD = !0, (0, ZD.l)(SD.dc.ProgressBarUpdate, (DD => {
        const CD = (0, VD.k)(DD);
        (0, VD.e)(CD) && wD.i.Uo("progressBarUpdate", CD, !0)
      })), (0, ZD.l)(KD.F, (DD => {
        const CD = (0, VD.g)(KD.F, DD);
        CD && wD.i.Uo("middleScreenBarInitiate", {
          duration: CD.pI,
          iI: CD.iI,
          horizBarRemOffset: CD.fI
        }, !0)
      })), (0, ZD.l)(SD.dc.RemoveMiddleScreenBar, (() => {
        wD.i.Uo("middleScreenBarRemove")
      })), (0, ZD.l)(KD.hb, (DD => {
        const CD = (0, VD.g)(KD.hb, DD);
        if (CD) {
          var cD;
          const DD = CD.AC ? null === (cD = (0, fD.g)()) || void 0 === cD ? void 0 : cD.renderFrame.projectDirectionToScreenPos(CD.AC) : void 0;
          wD.i.Uo("sendHitmarker", {
            rC: CD.rC,
            screenPos: DD
          }, !0)
        }
      })), (0, ZD.l)(KD.nb, (DD => {
        const CD = (0, VD.g)(KD.nb, DD);
        if (CD) {
          const {
            id: DD,
            position: cD,
            style: ID,
            rp: pD,
            Fp: iD
          } = CD;
          wD.i.Uo("setDirectionArrow", {
            id: DD,
            position: cD,
            style: ID,
            text: zD(pD),
            Fp: iD
          }, !0)
        }
      })), (0, ZD.l)(KD.h, (DD => {
        const CD = (0, VD.g)(KD.h, DD);
        CD && wD.i.Uo("clearDirectionArrow", {
          id: CD.id
        }, !0)
      })), (0, ZD.l)(KD.x, (DD => {
        const CD = (0, VD.g)(KD.x, DD);
        CD && wD.i.Uo("flyingMiddleMessage", {
          content: zD(CD.Vi),
          zi: CD.zi,
          ji: CD.ji
        }, !0)
      })), (0, ZD.l)(SD.dc.WorldVariation, (DD => {
        const CD = (0, VD.k)(DD);
        if ("string" === typeof CD) {
          const DD = CD === xD.g ? null : {
            message: `Currently loaded as variation: ${CD}`,
            type: "Warning"
          };
          wD.i.Uo("showPermanentBottomMessage", DD, !0)
        }
      })), (0, ZD.l)(KD.P, (DD => {
        const CD = (0, VD.g)(KD.P, DD);
        CD && function(DD, CD) {
          const {
            type: cD,
            params: ID
          } = (0, qD.h)(CD), pD = {
            ...ID
          };
          for (const iD of qD.d) pD[iD] && (pD[iD] = zD(pD[iD]));
          JD.e.queueQTE(DD, cD, pD).getResult().then((CD => {
            var cD;
            "boolean" === typeof CD && (null === (cD = (0, fD.g)()) || void 0 === cD || cD.send(aD.e.QteResponse, {
              qteId: DD,
              qteResponse: CD
            }))
          }))
        }(CD.id, CD.UD)
      })), (0, ZD.l)(KD.bb, (DD => {
        const CD = (0, VD.g)(KD.bb, DD);
        "number" === typeof CD && JD.e.cancelQTE(CD)
      })), (0, ZD.i)((() => {
        JD.e.reset(), wD.i.Uo("showPermanentBottomMessage", null, !0)
      })), (0, ZD.j)((() => {
        JD.e.reset()
      })), (0, ZD.l)(SD.dc.EditItemCraftingRecipes, (DD => {
        const CD = (0, VD.k)(DD);
        (0, VD.e)(CD) && wD.i.Uo("craftingRecipesEdited", {
          itemName: CD.craftingRecipeItemName,
          recipesForItem: CD.recipesForItem
        })
      })), (0, ZD.l)(KD._, (DD => {
        const CD = (0, VD.g)(KD._, DD);
        CD && wD.i.Uo("craftingRecipesEdited", {
          itemName: CD.np,
          recipesForItem: []
        })
      })))
    }
    var TD = cD(16);
    const GD = [{
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

    function RD(DD) {
      return XD.s.playerFlags(DD.api.apiView, 0)
    }
    const kD = {
        freeCamera: (0, MD.e)((DD => () => {
          const CD = DD.isSessionLive && 0 !== (RD(DD) & XD.Zd.FreeCamMoves),
            cD = DD.freeCameraAllowed() && null === TD.d.get("scriptedCameraFacing");
          return GD[(cD ? 2 : 0) + (CD ? 1 : 0)]
        }), GD[0], (DD => (0, iD.t)(DD)))
      },
      dD = {
        setFreeCameraMovesFly: DD => {
          var CD;
          null === (CD = (0, fD.g)()) || void 0 === CD || CD.setFreeCameraMovesFly(DD)
        }
      },
      YD = {
        freeCameraPos: () => {
          const DD = (0, fD.g)();
          return null !== DD && void 0 !== DD && DD.isSessionLive && DD.renderFrame.hasView && 0 !== (RD(DD) & XD.Zd.FreeCam) ? DD.renderFrame.cameraPosition : null
        }
      };
    var WD = cD(38498);
    let sD = !1,
      ED = !1;

    function eD() {
      const DD = (0, fD.g)();
      if (null === DD || void 0 === DD || !DD.isSessionLive) return void(sD = !1);
      const CD = 0 !== (XD.s.playerFlags(DD.api.apiView, 0) & XD.Zd.FreeCam);
      CD !== sD && (sD = CD, (0, WD.c)(CD))
    }
    var uD = cD(326),
      hD = cD(36402),
      rD = cD(1945);
    var AD = cD(39785),
      FD = cD(39739);
    const DC = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let CC = "off";

    function cC(DD) {
      var CD;
      return null === DD ? null : {
        label: null !== (CD = (0, AD.b)(DD, "interactionPrompt")) && void 0 !== CD ? CD : null
      }
    }
    const IC = new Map([
      [XD.Ic.Open, {
        label: QD.e.open
      }],
      [XD.Ic.Close, {
        label: QD.e.close
      }],
      [XD.Ic.Milk, {
        label: QD.e.milk
      }],
      [XD.Ic.Shear, {
        label: QD.e.shear
      }],
      [XD.Ic.Tame, {
        label: QD.e.tame
      }],
      [XD.Ic.Feed, {
        label: QD.e.feed
      }],
      [XD.Ic.Ride, {
        label: QD.e.ride
      }]
    ]);
    class pC {
      constructor() {
        this.target = DC, this.HS = XD.qd, this.optionName = null, this.pickaxe = new QD.b
      }
      read(DD) {
        var CD;
        const cD = XD.s.targetBlockId(DD.api.apiView, 0);
        cD !== this.HS && (this.HS = cD, this.optionName = cD === XD.qd ? null : `${DD.tables.getMetaInfo(cD).rootName}CrosshairText`);
        const ID = null === this.optionName ? null : null !== (CD = DD.tables.getClientOption(this.optionName)) && void 0 !== CD ? CD : null;
        this.pickaxe.update(function(DD, CD) {
          var cD, ID, pD;
          if (0 === (XD.s.playerFlags(DD.api.apiView, 0) & XD.Zd.Breaking) || CD === XD.qd || 0 === CD) return null;
          const {
            tables: iD
          } = DD;
          if (!0 === iD.getClientOption("creative")) return null;
          const fD = iD.nameOfId(CD),
            bD = null === (cD = DD.items.Lb()) || void 0 === cD ? void 0 : cD.name,
            QD = null !== (ID = iD.getItemStat(fD, "harvestLevel")) && void 0 !== ID ? ID : 0;
          return (0, uD.Cc)({
            blockHarvestType: iD.getDefaultItemStat(fD, "harvestType"),
            blockHarvestLevel: iD.getDefaultItemStat(fD, "harvestLevel"),
            harvestLevel: QD,
            heldToolType: void 0 === bD ? void 0 : iD.getDefaultItemStat(bD, "harvests"),
            heldToolLevel: void 0 === bD ? void 0 : iD.getDefaultItemStat(bD, "level")
          }) && null !== (pD = hD.p[QD]) && void 0 !== pD ? pD : null
        }(DD, cD)), DD.watchPromptPick(CC);
        const pD = "touch" === CC ? function(DD) {
          var CD;
          const cD = DD.interactLabel;
          return cD === XD.Ic.Entity ? cC(DD.promptEntity) : cD === XD.Ic.TameWith ? {
            label: (0, QD.t)(DD.tables.nameOfId(DD.interactIcon))
          } : null !== (CD = IC.get(cD)) && void 0 !== CD ? CD : null
        }(DD) : cC(DD.promptEntity);
        return this.target = (0, rD.q)(this.target, {
          interactPrompt: pD,
          blockText: ID,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let iC = null;
    const fC = {
      current: () => {
        var DD, CD;
        return null !== (DD = null === (CD = iC) || void 0 === CD ? void 0 : CD.target) && void 0 !== DD ? DD : DC
      },
      watch: DD => {
        const CD = new pC;
        iC = CD;
        const cD = (0, MD.j)((cD => {
          let ID = CD.read(cD);
          DD(ID);
          const pD = (0, iD.w)((() => {
            const pD = CD.read(cD);
            pD !== ID && (ID = pD, DD(pD))
          }));
          return () => {
            pD(), cD.watchPromptPick("off")
          }
        }));
        return () => {
          cD(), iC === CD && (iC = null)
        }
      }
    };
    let bC = 0,
      QC = 0;
    const wC = {
        health: QD.m,
        aura: QD.h,
        hotbar: FD.e.states.hotbar,
        heldItemAim: FD.e.states.heldItemAim,
        crouching: (0, MD.e)((DD => function(DD) {
          const CD = () => 0 !== (XD.s.playerFlags(DD.apiView, 0) & XD.Zd.Crouching);
          return {
            current: CD,
            watch(DD) {
              let cD = CD();
              return (0, iD.t)((() => {
                const ID = CD();
                ID !== cD && (cD = ID, DD(ID))
              }))
            }
          }
        }(DD.api).current), !1, (DD => (0, iD.t)(DD))),
        flight: (0, MD.e)((DD => () => function(DD) {
          const CD = XD.s.playerFlags(DD.apiView, 0);
          return (0, QD.k)(0 !== (CD & XD.Zd.CanFly), 0 !== (CD & XD.Zd.Flying))
        }(DD.api)), (0, QD.k)(!1, !1), (DD => (0, iD.t)(DD))),
        gliderBoostFuel: (0, MD.e)((DD => () => XD.s.gliderBoostFuel(DD.api.apiView, 0)), 0, (DD => (0, iD.t)(DD))),
        crosshairTarget: fC
      },
      SC = {
        hotbarSlotRequested: FD.e.events.hotbarSlotRequested,
        hotbarScrolled: FD.e.events.hotbarScrolled,
        numberKeyPressed: FD.e.events.numberKeyPressed,
        shotDamageToShow: (0, QD.p)((DD => !0 === (0, AD.b)(DD, "showDamageAmounts")))
      },
      BC = {
        selectHotbarSlot: FD.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: DD => {
          CC = DD
        }
      },
      yC = {
        momentumFrac: function() {
          var DD, CD, cD;
          const ID = (0, fD.g)(),
            pD = performance.now(),
            iD = null === ID || void 0 === ID || null === (DD = ID.items.Lb()) || void 0 === DD || null === (CD = DD.attributes) || void 0 === CD || null === (cD = CD.customAttributes) || void 0 === cD ? void 0 : cD.enchantments;
          return bC = null !== ID && null !== iD && void 0 !== iD && iD.Momentum ? 0 !== (XD.s.playerFlags(ID.api.apiView, 0) & XD.Zd.Breaking) ? Math.max(0, XD.s.momentumFrac(ID.api.apiView, 0)) : Math.max(0, bC - (pD - QC) / 1500) : 0, QC = pD, bC
        }
      };
    var MC = cD(39688),
      tC = cD(1240),
      ZC = cD(35908),
      oC = cD(8487),
      vC = cD(1627),
      NC = cD(2338),
      gC = cD(4588);
    let XC = !1;

    function mC(DD) {
      XC = DD
    }

    function nC() {
      "inGame" !== TD.d.get("gameState") || (0, vC.v)() || wD.i.Uo("ctrlCrouchWithoutFullscreen")
    }
    let OC = !1;
    const PC = {
        OpenEmoteWheel: () => {
          mC(!0), OC = !0, queueMicrotask((() => {
            OC && (OC = !1, wD.i.Uo("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          wD.i.Uo("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, ZC.d)() || wD.i.Uo("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, ZC.d)() || wD.i.Uo("XKeyPressed")
        },
        CtrlCrouch: nC,
        "primary-fire": () => {
          wD.i.Uo("mouseState", {
            jS: tC.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          wD.i.Uo("mouseState", {
            jS: tC.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          wD.i.Uo("mouseState", {
            jS: tC.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      HC = {
        OpenEmoteWheel: () => {
          mC(!1), OC ? (OC = !1, (0, oC.d)() || wD.i.Uo("requestEmoteWheelHoldOpen")) : wD.i.Uo("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: nC,
        "primary-fire": () => {
          wD.i.Uo("mouseState", {
            jS: tC.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          wD.i.Uo("mouseState", {
            jS: tC.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          wD.i.Uo("mouseState", {
            jS: tC.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let UC = !1;

    function xC() {
      UC || (UC = !0, (0, gC.k)((DD => {
        if ((0, pD.e)()) return;
        const CD = (0, gC.g)(DD) ? "primary-fire" : DD.action;
        var cD;
        if (DD.down) {
          if (0 === (DD.flags & NC.d.Synthetic)) {
            var ID;
            null === (ID = PC[CD]) || void 0 === ID || ID.call(PC)
          }
        } else null === (cD = HC[CD]) || void 0 === cD || cD.call(HC)
      })))
    }
    var qC = cD(312),
      JC = cD(90),
      KC = cD(36),
      aC = cD(39789),
      VC = cD(1317),
      zC = cD(38356);
    let jC = !1;
    const lC = {
      sendCodeCollab(DD) {
        var CD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.CodeCollab, (0, aD.q)(DD), (0, zC.c)(DD))
      }
    };
    let LC = null,
      TC = !1,
      GC = null;

    function RC() {
      return "inGame" === TD.d.get("gameState") && !(0, ZC.d)()
    }
    const kC = {
        OpenInventory: DD => {
          (0, vC.z)(DD, "inventory", (0, MC.m)())
        },
        OpenShop: DD => {
          LC && RC() && (0, vC.y)(DD, qC.q.SHOP, !LC.shopIsEmpty(gD.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: DD => {
          RC() && (0, vC.y)(DD, qC.q.LOBBY_LEADERBOARD, !!gD.d.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: DD => {
          var CD;
          const cD = null === (CD = LC) || void 0 === CD ? void 0 : CD.getClientGameMapKey();
          cD ? (0, vC.B)(DD, !0, cD) : (0, vC.z)(DD, "retentionFeatures", !(!gD.d.get("_tasks") && !gD.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: DD => {
          (0, vC.z)(DD, "inviteLink", JC.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: DD => {
          RC() && function(DD) {
            var CD;
            const cD = (0, fD.g)(),
              ID = null !== cD && void 0 !== cD && cD.isSessionLive ? cD.api : null,
              pD = ID ? ID.FX(ID.localId) : null,
              iD = null !== (CD = null === pD || void 0 === pD ? void 0 : pD.map((DD => Math.floor(DD)))) && void 0 !== CD ? CD : null;
            (0, vC.B)(DD, null !== iD && (0, zC.b)((0, VC.b)()), (() => {
              wD.i.Uo("EditLobbyCode", iD)
            }))
          }(DD)
        },
        HideUi: () => {
          wD.i.Uo("showUi", !1)
        }
      },
      dC = {
        HideUi: () => {
          wD.i.Uo("showUi", !0)
        }
      };

    function YC() {
      TC || (TC = !0, cD.e(151).then((() => cD(41749))).then((DD => {
        LC = DD
      }), (DD => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", DD)
      })), (0, aC.x)((DD => {
        DD || !(0, aC.g)() || (0, JC.isMobile)() || !KC.h.getItem("disableFullscreen") || (0, vC.s)() || TD.d.set({
          openEverythingMenuName: qC.q.SETTINGS
        })
      })), (0, gC.k)((DD => {
        let {
          action: CD,
          down: cD,
          press: ID
        } = DD;
        var iD, fD;
        (0, pD.e)() || (cD ? null === (iD = kC[CD]) || void 0 === iD || iD.call(kC, function(DD) {
          var CD;
          if (0 === DD || (null === (CD = GC) || void 0 === CD ? void 0 : CD.press) !== DD) {
            const CD = {
              press: DD,
              event: new Event("inputAction")
            };
            GC = CD, queueMicrotask((() => {
              GC === CD && (GC = null)
            }))
          }
          return GC.event
        }(ID)) : null === (fD = dC[CD]) || void 0 === fD || fD.call(dC))
      })))
    }
    var WC = cD(38323),
      sC = cD(38339),
      EC = cD(38331);
    const eC = {
      completeTask(DD) {
        var CD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.CompleteTask, (0, aD.u)(DD))
      },
      setServerCookie(DD) {
        var CD;
        let {
          key: cD,
          value: ID
        } = DD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.GeneralCookieSet, (0, aD.z)({
          Mf: cD,
          tf: ID
        }))
      },
      answerUiRequest(DD) {
        var CD;
        let {
          id: cD,
          gf: ID
        } = DD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.UiRequestResp, (0, aD.eb)({
          Gb: cD,
          Rb: ID,
          kb: 5
        }))
      },
      chooseRewardedAd(DD) {
        var CD;
        let {
          id: cD,
          gf: ID
        } = DD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.UiRequestResponded, (0, aD.ab)({
          id: cD,
          gf: ID
        }))
      },
      requestLeaderboard(DD) {
        var CD;
        let {
          category: cD,
          timeframe: ID,
          seeTop: pD
        } = DD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.LeaderboardRequest, {
          category: cD,
          timeframe: ID,
          seeTop: pD
        })
      }
    };
    let uC = !1;
    const hC = ND.h.vN / 2,
      rC = [hC, -hC, -hC, -hC, hC, hC, -hC, hC],
      AC = [0, 0, 0];

    function FC(DD, CD, cD) {
      for (let ID = 0; ID < DD.length; ID += 2)
        if (DD[ID] === CD && DD[ID + 1] === cD) return !0;
      return !1
    }
    const Dc = {
      blocksStandingOn: function() {
        const DD = (0, fD.g)();
        if (null === DD) return [];
        const {
          api: CD,
          chunks: cD,
          tables: ID
        } = DD;
        if (!CD.readPosition(CD.localId, AC)) return [];
        const [pD, iD, bD] = AC, QD = Math.ceil(iD) - 1, wD = [], SD = [];
        for (let fD = 0; fD < rC.length; fD += 2) {
          const DD = pD + rC[fD],
            CD = bD + rC[fD + 1];
          if (Number.isInteger(DD) || Number.isInteger(CD)) continue;
          const iD = Math.floor(DD),
            BD = Math.floor(CD);
          if (FC(SD, iD, BD)) continue;
          const yD = cD.HS(iD, QD, BD);
          ID.isSolidBlockId(yD) && (SD.push(iD, BD), wD.push(ID.nameOfId(yD)))
        }
        return wD
      },
      dropAhead: function() {
        const DD = (0, fD.g)();
        return null !== DD && 0 !== (XD.s.playerFlags(DD.api.apiView, 0) & XD.Zd.DropAhead)
      }
    };
    var Cc = cD(36315),
      cc = cD(38431),
      Ic = cD(1340),
      pc = cD(39743);
    const ic = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      fc = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function bc() {
      const DD = new Set;
      return {
        add: CD => (DD.add(CD), () => {
          DD.delete(CD)
        }),
        fire() {
          for (const CD of DD) CD()
        }
      }
    }
    const Qc = Object.freeze([]);

    function wc(DD, CD) {
      let cD, {
        rereads: ID,
        followLocalId: pD
      } = CD;
      const fD = () => (cD = (0, rD.q)(cD, DD()), cD);
      return {
        current: fD,
        watch(DD) {
          const CD = (0, tD.b)((CD => {
            ID(CD) && DD(fD())
          }));
          if (!pD) return CD;
          let cD = (0, MD.h)();
          const bD = (0, iD.w)((() => {
            const CD = (0, MD.h)();
            CD !== cD && (cD = CD, DD(fD()))
          }));
          return () => {
            CD(), bD()
          }
        }
      }
    }
    const Sc = {
        players: wc((function() {
          const DD = tD.f.ids(),
            CD = {};
          for (const iD of DD) {
            var cD, ID, pD;
            CD[iD] = {
              name: null !== (cD = tD.f.getName(iD)) && void 0 !== cD ? cD : null,
              ranks: null !== (ID = tD.f.getSetting(iD, "ranks")) && void 0 !== ID ? ID : Qc,
              cosmetics: null !== (pD = (0, tD.g)(iD)) && void 0 !== pD ? pD : null
            }
          }
          return {
            ids: DD,
            byId: CD,
            localId: (0, MD.h)()
          }
        }), {
          rereads: DD => "roster" !== DD.kind || DD.members || DD.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: wc((function() {
          const DD = {};
          for (const pD of tD.f.ids()) {
            var CD, cD, ID;
            DD[pD] = {
              colour: null !== (CD = tD.f.getSetting(pD, "colorInLobbyLeaderboard")) && void 0 !== CD ? CD : null,
              values: null !== (cD = tD.f.getSetting(pD, "lobbyLeaderboardValues")) && void 0 !== cD ? cD : null,
              tags: null !== (ID = tD.f.getSetting(pD, "lobbyLeaderboardTags")) && void 0 !== ID ? ID : null
            }
          }
          return DD
        }), {
          rereads: function(DD) {
            if ("roster" !== DD.kind) return "reset" === DD.kind;
            const {
              members: CD,
              settings: cD
            } = DD;
            return CD || cD.has("colorInLobbyLeaderboard") || cD.has("lobbyLeaderboardValues") || cD.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Bc = {
        cosmeticsUpdated: {
          watch: DD => (0, tD.b)((CD => {
            if ("cosmetics" !== CD.kind) return;
            const cD = (0, MD.h)();
            DD(CD.updates.map((DD => {
              let {
                Tc: CD,
                Gc: ID,
                Rc: pD
              } = DD;
              return {
                local: CD === cD,
                Gc: ID,
                Rc: pD
              }
            })))
          }))
        }
      };
    var yc = cD(2737),
      Mc = cD(1701),
      tc = cD(659),
      Zc = cD(39791);
    let oc = !1,
      vc = null;
    const Nc = {
      setShopOpen(DD) {
        var CD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.ShopMenuChanged, (0, aD.U)(DD))
      },
      buyShopItem(DD) {
        var CD;
        let {
          categoryKey: cD,
          itemKey: ID,
          userInput: pD
        } = DD;
        null === (CD = (0, fD.g)()) || void 0 === CD || CD.send(aD.e.ItemBought, {
          categoryKey: cD,
          itemKey: ID,
          shopVersion: gD.d.get("_shopVersion"),
          userInput: pD
        })
      }
    };
    let gc = !1;
    var Xc = cD(4592);
    const mc = NC.C.LookFrozen | NC.C.ClicksSuppressed;

    function nc(DD, CD) {
      var cD;
      null !== (cD = (0, fD.g)()) && void 0 !== cD && cD.send(DD, CD) || console.warn(`[bloxd-wasm-client] message ${DD} not sent: no live game or the core's command ring is full`)
    }(0, ZD.l)(KD.ob, (DD => {
      const CD = (0, VD.g)(KD.ob, DD);
      void 0 !== CD && wD.i.Uo("setDiscordReportKey", CD)
    }));
    const Oc = {
      ignorePlayer(DD) {
        nc(aD.e.IgnoreUser, (0, aD.D)({
          Yf: DD
        }))
      },
      reportPlayer(DD) {
        let {
          playerId: CD,
          chatMsgId: cD,
          wf: ID,
          details: pD
        } = DD;
        nc(aD.e.UserReport, (0, aD.rb)({
          cB: CD,
          IB: cD,
          wf: ID,
          Sf: pD
        }))
      },
      reportWorldCodeChat(DD) {
        let {
          chatMsgId: CD,
          wf: cD,
          details: ID
        } = DD;
        nc(aD.e.UserReport, (0, aD.rb)({
          cB: "",
          IB: CD,
          wf: cD,
          Sf: ID
        }))
      },
      requestDiscordReportKey(DD) {
        nc(aD.e.ReqDiscordReportKey, (0, aD.P)(DD))
      },
      reportLobbyOrGame(DD) {
        let {
          target: CD,
          wf: cD,
          details: ID
        } = DD;
        "customGame" === CD ? nc(aD.e.CustomGameReport, (0, aD.y)({
          wf: cD,
          Sf: ID
        })) : nc(aD.e.LobbyReport, (0, aD.G)({
          wf: cD,
          Sf: ID
        }))
      },
      updateMyCosmetic(DD) {
        nc(aD.e.UpdateMyCosmetic, (0, aD.ob)(DD))
      },
      holdEmoteWheel(DD) {
        !DD || XC ? (0, Xc.k)(mc, DD ? mc : 0) : wD.i.Uo("requestEmoteWheelHoldRelease")
      }
    };
    var Pc = cD(39793),
      Hc = cD(9141),
      Uc = cD(38913);
    const xc = [0, 0, 0],
      qc = [0, 0, 0],
      Jc = [0, 0, 0],
      Kc = {
        blockAtViewPoint(DD) {
          let {
            x: CD,
            y: cD
          } = DD;
          const ID = (0, fD.g)();
          if (null === ID || void 0 === ID || !ID.renderFrame.hasView) return null;
          const {
            renderFrame: pD,
            clientApi: iD,
            api: bD
          } = ID;
          let QD = 0;
          return (0, Uc.d)(((DD, CD, cD) => (QD = iD.getBlockId(DD, CD, cD), 0 !== QD)), pD.cameraPosition, (0, Uc.e)((DD => XD.s.viewProj(bD.apiView, 0, DD)), CD, cD, xc), Uc.c, qc, Jc) ? {
            pos: [qc[0], qc[1], qc[2]],
            normal: [Jc[0], Jc[1], Jc[2]],
            name: (0, Hc.f)(QD)
          } : null
        }
      },
      ac = {
        setBlockHighlight(DD) {
          var CD;
          null === (CD = (0, fD.g)()) || void 0 === CD || CD.setBlockHighlight(DD)
        }
      };
    var Vc = cD(1922),
      zc = cD(39800),
      jc = cD(39804),
      lc = cD(39808);
    var Lc = cD(613),
      Tc = cD(38921);

    function Gc(DD) {
      if (null === DD || void 0 === DD || !DD.isCoreRunning) return null;
      const {
        api: CD,
        chunks: cD,
        items: ID,
        tables: pD
      } = DD;
      return {
        playerFeet() {
          const DD = CD.FX(CD.localId);
          return null !== DD && void 0 !== DD && DD.every(Number.isFinite) ? DD : null
        },
        chunkBlocks: DD => cD.isLoaded(DD[0], DD[1], DD[2]) ? (DD, CD, ID) => cD.HS(DD, CD, ID) : null,
        blockName: DD => pD.nameOfId(DD),
        inventory: () => ({
          slots: ID.playerItems().map((DD => DD ? {
            name: DD.name,
            amount: DD.amount
          } : null)),
          heldSlot: ID.selectedSlot
        }),
        nearby() {
          const cD = [];
          for (let pD = 0; pD < CD.idStr.length; pD++) {
            var ID;
            const iD = CD.idStr[pD],
              fD = CD.serverIds[pD],
              bD = CD.kinds[pD];
            if (null === iD || CD.isLocal(fD) || bD >>> XD.d !== XD.o.Lifeform) continue;
            const QD = CD.FX(fD),
              wD = Lc.j[bD & XD.g];
            QD && void 0 !== wD && cD.push({
              kind: "Player" === wD ? "player" : wD,
              name: null !== (ID = DD.clientApi.getEntityName(iD)) && void 0 !== ID ? ID : null,
              position: QD
            })
          }
          return cD
        },
        droppedItems() {
          let DD = 0;
          for (let cD = 0; cD < CD.idStr.length; cD++) null !== CD.idStr[cD] && CD.kinds[cD] >>> XD.d === XD.o.Item && DD++;
          return DD
        }
      }
    }
    const Rc = {
        worldCodeAiChunk: DD => Promise.resolve((0, Tc.b)(Gc((0, fD.g)()), DD)),
        worldCodeAiGameState: () => Promise.resolve((0, Tc.e)(Gc((0, fD.g)())))
      },
      kc = function(DD) {
        const CD = bc(),
          ID = bc(),
          pD = new Set,
          iD = new Set,
          fD = () => {
            var CD, cD;
            return null !== (CD = null === (cD = DD.runtime()) || void 0 === cD ? void 0 : cD.currentViewer) && void 0 !== CD ? CD : null
          };
        let bD = null,
          QD = null;
        const SD = (DD, CD) => ({
            current: DD,
            watch(cD) {
              let ID = DD();
              return CD.add((() => {
                const CD = DD();
                CD !== ID && (ID = CD, cD(CD))
              }))
            }
          }),
          yD = DD => ({
            watch: CD => (DD.add(CD), () => {
              DD.delete(CD)
            })
          }),
          MD = DD => {
            const CD = fD(),
              cD = null === CD || void 0 === CD ? void 0 : CD.view;
            CD && cD && CD.seek(Math.max(0, Math.min(cD.totalTicks - 1, cD.wy + DD * BD.nd)))
          },
          tD = {
            replay: SD((() => {
              var DD;
              const CD = fD(),
                cD = null !== (DD = null === CD || void 0 === CD ? void 0 : CD.view) && void 0 !== DD ? DD : null;
              return null === CD || null === cD || cD.state === BD.ad.None ? (bD = null, null) : (bD = (0, rD.q)(bD, {
                id: CD.id,
                wy: cD.wy,
                totalTicks: cD.totalTicks,
                Yq: BD.nd,
                playing: cD.state === BD.ad.Playing,
                speed: cD.speed,
                cameraMode: cD.cameraMode,
                freecam: "freecam" === cD.cameraMode
              }), bD)
            }), CD),
            replayEdits: SD((() => {
              var DD;
              const CD = fD(),
                cD = null !== (DD = null === CD || void 0 === CD ? void 0 : CD.view) && void 0 !== DD ? DD : null;
              return null === CD || null === cD || cD.state === BD.ad.None ? (QD = null, null) : (QD = (0, rD.q)(QD, {
                cameraKeyframes: [...CD.keyframes],
                playbackMark: cD.mark,
                fileName: CD.fileName,
                unsavedChanges: CD.unsavedChanges,
                suggestSaveAs: CD.suggestSaveAs
              }), QD)
            }), CD),
            replayRecorder: SD((() => {
              var CD, cD;
              return null !== (CD = null === (cD = DD.runtime()) || void 0 === cD ? void 0 : cD.recorder.current) && void 0 !== CD ? CD : pc.e.states.replayRecorder.current()
            }), ID),
            replayVideoExporting: {
              current: cc.d,
              watch: DD => (0, wD.k)("replayViewer|videoExportChanged", (() => {
                DD((0, cc.d)())
              }))
            }
          },
          ZD = {
            replayUiActionRequested: yD(iD),
            replayViewerRequested: yD(pD)
          },
          oD = DD => {
            for (const CD of pD) CD(DD)
          },
          vD = () => {
            var ID;
            !0 === (null === (ID = fD()) || void 0 === ID ? void 0 : ID.isOpen) && Promise.all([cD.e(94), cD.e(63)]).then((() => cD(41755))).then((cD => {
              let {
                startWasmReplayVideoExport: ID
              } = cD;
              return ID({
                viewer: fD,
                canvas: () => {
                  var CD, cD;
                  return null !== (CD = null === (cD = DD.canvas) || void 0 === cD ? void 0 : cD.call(DD)) && void 0 !== CD ? CD : null
                },
                watchViewer: CD.add,
                requestViewer: oD
              })
            }), (DD => {
              console.error("Couldn't load the video export", DD), Ic.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((DD => {
              console.error("The video export failed", DD)
            }))
          },
          ND = {
            replayAction(DD) {
              if ((0, cc.d)()) return;
              const CD = fD();
              switch (DD) {
                case "replaySkipBack":
                  MD(-1);
                  break;
                case "replaySkipForward":
                  MD(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== CD && void 0 !== CD && CD.view && CD.setSpeed((0, Cc.i)(CD.view.speed, "replaySpeedUp" === DD ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === CD || void 0 === CD || CD.addKeyframe()
              }
            },
            setReplayPlaying(DD) {
              var CD, cD;
              (0, cc.d)() || (DD ? null === (CD = fD()) || void 0 === CD || CD.play() : null === (cD = fD()) || void 0 === cD || cD.pause())
            },
            seekReplay(DD) {
              var CD;
              let {
                wy: cD,
                ignorePlaybackMark: ID
              } = DD;
              null === (CD = fD()) || void 0 === CD || CD.seek(cD, null !== ID && void 0 !== ID && ID)
            },
            setReplayCameraMode(DD) {
              var CD;
              null === (CD = fD()) || void 0 === CD || CD.setCameraMode(DD)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(DD) {
              var CD;
              null === (CD = fD()) || void 0 === CD || CD.setKeyframe(DD)
            },
            moveReplayCameraKeyframe(DD) {
              var CD;
              let {
                from: cD,
                to: ID
              } = DD;
              null === (CD = fD()) || void 0 === CD || CD.moveKeyframe(cD, ID)
            },
            deleteReplayCameraKeyframes(DD) {
              var CD;
              let {
                start: cD,
                end: ID
              } = DD;
              null === (CD = fD()) || void 0 === CD || CD.deleteKeyframes(cD, ID)
            },
            setReplayPlaybackMark(DD) {
              var CD;
              null === (CD = fD()) || void 0 === CD || CD.setMark(DD)
            },
            cropReplay(DD) {
              var CD, cD;
              let {
                start: ID,
                end: pD
              } = DD;
              return !(0, cc.d)() && (null !== (CD = null === (cD = fD()) || void 0 === cD ? void 0 : cD.crop(ID, pD)) && void 0 !== CD && CD)
            },
            holdReplayForShaderPackFailure(DD) {
              const CD = fD();
              CD && (CD.holdForShaderPackFailure(), function(DD) {
                cD.e(129).then((() => cD(38527))).then((CD => {
                  let {
                    shaderPackPage: cD
                  } = CD;
                  cD.block(DD)
                })).catch((DD => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", DD)
                }))
              }(DD))
            },
            exportReplayVideo() {
              vD()
            },
            toggleRecording() {
              var CD;
              null === (CD = DD.runtime()) || void 0 === CD || CD.recorder.toggleRecording()
            },
            saveClip() {
              var CD;
              null === (CD = DD.runtime()) || void 0 === CD || CD.recorder.saveClip()
            },
            setRecorderPrefs(CD) {
              var cD;
              let {
                clipping: ID,
                clipSeconds: pD
              } = CD;
              null === (cD = DD.runtime()) || void 0 === cD || cD.recorder.setPrefs(ID, pD)
            },
            setReplayViewerOpen(CD) {
              var cD;
              (0, ZC.f)(CD) && (null === (cD = DD.runtime()) || void 0 === cD || cD.recorder.viewerShown(CD))
            },
            recordFlyingMiddleText(CD) {
              var cD;
              let {
                content: ID,
                zi: pD,
                angle: iD,
                ji: fD
              } = CD;
              null === (cD = DD.runtime()) || void 0 === cD || cD.recorder.recordFlyingText(JSON.stringify(ID), pD, iD, fD)
            },
            dragReplayCamera(CD) {
              var cD;
              let {
                dx: ID,
                dy: pD
              } = CD;
              null === (cD = DD.freecam()) || void 0 === cD || cD.drag(ID, pD)
            },
            moveReplayFreecam(CD) {
              var cD;
              null === (cD = DD.freecam()) || void 0 === cD || cD.move(CD)
            },
            holdReplayFreecamVertical(CD) {
              var cD;
              let {
                action: ID,
                Lb: pD
              } = CD;
              null === (cD = DD.freecam()) || void 0 === cD || cD.holdVertical(ID, pD)
            }
          },
          gD = DD => {
            var CD;
            const cD = fD(),
              ID = null !== (CD = null === cD || void 0 === cD ? void 0 : cD.view) && void 0 !== CD ? CD : null;
            ic.has(DD) ? (DD => {
              for (const CD of iD) CD(DD)
            })(DD) : fc.has(DD) ? ND.replayAction(DD) : "replayPlayPause" === DD ? cD && ID && ID.state !== BD.ad.None && ND.setReplayPlaying(ID.state !== BD.ad.Playing) : "replayChangeCameraMode" === DD ? null === cD || void 0 === cD || cD.cycleCameraMode() : "replayExit" === DD ? !0 === (null === cD || void 0 === cD ? void 0 : cD.inPlayback) && (0, VC.i)("/") : "replayExportVideo" === DD && vD()
          };
        let XD = !1;
        return {
          states: tD,
          events: ZD,
          commands: ND,
          lookups: {
            replayCamera() {
              var CD, cD, ID;
              return !0 !== (null === (CD = fD()) || void 0 === CD ? void 0 : CD.isOpen) ? null : null !== (cD = null === (ID = DD.cameraView) || void 0 === ID ? void 0 : ID.call(DD)) && void 0 !== cD ? cD : null
            },
            leaveGameReloadsPage() {
              var DD;
              return !0 === (null === (DD = fD()) || void 0 === DD ? void 0 : DD.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var DD;
              const cD = !0 === (null === (DD = fD()) || void 0 === DD ? void 0 : DD.inPlayback);
              cD !== XD && (XD = cD, wD.i.Uo("connectedGameChanged")), CD.fire()
            },
            recorderChanged: ID.fire,
            keyDown: DD => {
              var CD;
              switch (DD) {
                case "recordGame":
                  return void ND.toggleRecording();
                case "recordClip":
                  return void((0, ZC.d)() || ND.saveClip())
              }(0, cc.d)() || ("replayViewerOpen" !== DD ? DD.startsWith("replay") && ((0, ZC.d)() || !0 === (null === (CD = fD()) || void 0 === CD ? void 0 : CD.inPlayback)) && gD(DD) : oD("toggle"))
            }
          }
        }
      }({
        runtime: pD.n,
        cameraView: () => {
          var DD;
          const CD = null === (DD = (0, fD.g)()) || void 0 === DD ? void 0 : DD.renderFrame;
          if (!CD) return null;
          const [cD, ID, pD] = CD.cameraPosition, [iD, bD, QD] = CD.cameraDirection;
          return {
            position: [cD, ID, pD],
            direction: [iD, bD, QD]
          }
        },
        canvas: () => {
          var DD, CD, cD;
          return null !== (DD = null === (CD = (cD = (0, iD.K)()).canvas) || void 0 === CD ? void 0 : CD.call(cD)) && void 0 !== DD ? DD : null
        },
        freecam: pD.j
      }),
      dc = {
        states: {
          ...wC,
          ...MC.j,
          ...kc.states,
          ...Sc,
          ...kD
        },
        events: {
          ...SC,
          ...oD,
          ...MC.f,
          ...UD.e,
          ...Pc.f,
          ...kc.events,
          ...Bc,
          ...HD.g
        },
        commands: {
          ...PD,
          ...BC,
          ...vD,
          ...MC.c,
          ...eC,
          ...Oc,
          ...HD.f,
          ...lC,
          ...kc.commands,
          ...Nc,
          ...dD,
          ...ac
        },
        queries: {
          ...MC.i,
          ...Rc
        },
        lookups: {
          ...yC,
          ...jD,
          ...Pc.g,
          ...kc.lookups,
          ...OD,
          ...Dc,
          ...Kc,
          ...YD
        }
      };

    function Yc() {
      (0, bD.h)(ZD.o), (0, pD.q)(kc.feed), (0, UD.g)(), uC || (uC = !0, (0, ZD.l)(KD.p, (DD => {
        const CD = (0, VD.g)(KD.p, DD);
        "string" === typeof CD && Promise.resolve().then((() => cD(3460))).then((DD => {
          let {
            onCosmeticPackGranted: cD
          } = DD;
          cD(CD)
        }))
      })), (0, ZD.l)(KD.lb, (DD => {
        const CD = (0, VD.g)(KD.lb, DD);
        "number" === typeof CD && wD.i.Uo("serverUpdating", Date.now() + CD, !0)
      })), (0, ZD.l)(KD.M, (DD => {
        const CD = (0, VD.g)(KD.M, DD);
        if ((0, VD.e)(CD)) {
          const {
            DD: DD,
            CD: cD
          } = CD;
          (0, sC.d)({
            DD: "string" === typeof DD ? DD : null,
            CD: "string" === typeof cD ? cD : null
          })
        }
      })), (0, ZD.l)(SD.dc.NewUiRequest, (DD => {
        const CD = (0, VD.k)(DD);
        (0, VD.e)(CD) && "number" === typeof CD.id && (0, VD.e)(CD.clientParameters) && (0, EC.g)(CD.id, CD.clientParameters)
      })), (0, ZD.l)(KD.cb, (DD => {
        const CD = (0, VD.g)(KD.cb, DD);
        "number" === typeof CD && (0, EC.i)(CD)
      })), (0, ZD.j)(EC.c), (0, ZD.l)(SD.dc.UiRequestPopup, (DD => {
        const CD = (0, VD.k)(DD);
        if ((0, VD.e)(CD) && "number" === typeof CD.id && "string" === typeof CD.text) {
          const DD = CD.id;
          (0, EC.m)(DD, CD.text, (CD => {
            eC.answerUiRequest({
              id: DD,
              gf: CD
            })
          }))
        }
      })), (0, ZD.l)(SD.dc.TopRightHelper, (DD => {
        const CD = (0, VD.k)(DD);
        void 0 !== CD && wD.i.Uo("TopRightHelper", CD, !0)
      })), (0, ZD.l)(SD.dc.TaskProgress, (DD => {
        const CD = (0, VD.k)(DD);
        (0, VD.e)(CD) && "string" === typeof CD.taskId && "number" === typeof CD.progress && (0, WC.d)({
          taskId: CD.taskId,
          progress: CD.progress
        })
      }))), gc || (gc = !0, (0, ZD.l)(KD.y, (DD => {
        const CD = (0, VD.g)(KD.y, DD);
        (0, VD.e)(CD) && wD.i.Uo("showShopFromServer", {
          toggle: CD.wC,
          SC: CD.SC
        }, !0)
      })), (0, ZD.l)(SD.dc.OverShopInfo, (DD => {
        const CD = (0, VD.k)(DD);
        (0, VD.e)(CD) && wD.i.Uo("overShopInfo", CD.info, !0)
      })), (0, ZD.l)(SD.dc.ShowShopTutorial, (() => {
        wD.i.Uo("showShopTutorial", null, !0)
      }))), oc || (oc = !0, (0, ZD.i)((() => {
        var DD;
        (0, yc.D)(), null === (DD = vc) || void 0 === DD || DD(), vc = (0, ZD.e)() ? (0, tc.e)(ZD.e) : null
      })), (0, ZD.l)(SD.dc.SetCookie, (DD => {
        const CD = (0, VD.k)(DD),
          cD = (0, VC.b)().gameNameWithVariation;
        (0, VD.e)(CD) && "string" === typeof CD.key && null !== cD && (0, Mc.setCookie)(cD, CD.key, CD.value)
      })), (0, ZD.l)(SD.dc.LeaveValues, (DD => {
        const CD = (0, VD.k)(DD);
        if ((0, VD.e)(CD) && "string" === typeof CD.leaveEventType) {
          const {
            leaveEventType: DD,
            category: cD,
            subCategory: ID,
            value: pD
          } = CD;
          (0, yc.G)({
            leaveEventType: DD,
            category: cD,
            subCategory: ID,
            value: pD
          })
        }
      })), (0, ZD.l)(SD.dc.CustomAnalyticsEvent, (DD => {
        const CD = (0, VD.k)(DD);
        if ((0, VD.e)(CD) && "string" === typeof CD.cat1) {
          const {
            cat1: DD,
            cat2: cD,
            cat3: ID,
            value: pD
          } = CD;
          (0, yc.q)({
            cat1: DD,
            cat2: cD,
            cat3: ID,
            value: pD
          })
        }
      })), (0, ZD.l)(SD.dc.ProgressionEvent, (DD => {
        const CD = (0, VD.k)(DD);
        if ((0, VD.e)(CD)) {
          const {
            type: DD,
            location1: cD,
            location2: ID,
            location3: pD,
            score: iD
          } = CD;
          (0, yc.x)({
            type: DD,
            location1: cD,
            location2: ID,
            location3: pD,
            score: iD
          })
        }
      })), (0, ZD.l)(SD.dc.ResourceEvent, (DD => {
        const CD = (0, VD.k)(DD);
        if ((0, VD.e)(CD)) {
          const {
            type: DD,
            resourceType: cD,
            amount: ID,
            category: pD,
            itemName: iD
          } = CD;
          (0, yc.A)({
            type: DD,
            resourceType: cD,
            amount: ID,
            category: pD,
            itemName: iD
          })
        }
      })), (0, ZD.l)(SD.dc.LeaderboardResponse, (DD => {
        const CD = (0, VD.k)(DD);
        if ((0, VD.e)(CD)) {
          const {
            category: DD,
            timeframe: cD,
            data: ID
          } = CD;
          wD.i.Uo("leaderboardResponse", {
            category: DD,
            timeframe: cD,
            data: ID
          })
        }
      })), (0, ZD.l)(KD.J, (DD => {
        const CD = (0, VD.g)(KD.J, DD);
        "string" === typeof CD && (0, Zc.e)(DD.conn, CD)
      })), (0, ZD.l)(KD.K, (DD => {
        const CD = (0, VD.g)(KD.K, DD);
        "string" === typeof CD && console.error(`[logErrorToConsole]: ${CD}`)
      }))), LD(), (0, Pc.b)(), jC || (jC = !0, (0, ZD.l)(KD.l, (DD => {
        const CD = (0, VD.g)(KD.l, DD);
        void 0 !== CD && (0, zC.e)(CD)
      }))), YC(), xC(), ED || (ED = !0, (0, iD.t)(eD)), ID.gameBridge.attach(dc), (0, ID.installPageSources)({
        commands: {
          ...ID.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: zc.h
        },
        queries: lc.wasmIconQueries,
        lookups: {
          ...ID.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...lc.wasmIconLookups,
          Om: zc.d,
          drawCallStats: jc.i
        }
      }), (0, Vc.b)(), (0, lc.loadIcons)()
    }
  },
  39817: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      d: () => bD
    });
    var ID = cD(39822);
    let pD = null,
      iD = null;

    function fD() {
      return pD ??= cD.e(58).then((() => cD(41772))).catch((DD => {
        throw pD = null, DD
      })), pD
    }

    function bD() {
      return iD ??= Promise.all([fD(), (0, ID.h)()]).then((DD => {
        let [CD] = DD;
        return CD
      }), (DD => {
        throw iD = null, DD
      })), iD
    }
  },
  36420: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = {
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
  36216: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD,
      g: () => yD,
      i: () => bD,
      k: () => QD,
      n: () => wD,
      q: () => BD,
      r: () => SD,
      u: () => fD
    });
    var ID = cD(1240);
    let pD = function(DD) {
        return DD[DD.Join = 0] = "Join", DD[DD.Leave = 1] = "Leave", DD[DD.Push = 2] = "Push", DD[DD.Cursor = 3] = "Cursor", DD[DD.Submit = 4] = "Submit", DD[DD.ReloadAsVariation = 5] = "ReloadAsVariation", DD[DD.CreateFile = 6] = "CreateFile", DD[DD.RenameFile = 7] = "RenameFile", DD[DD.DeleteFile = 8] = "DeleteFile", DD[DD.SetEngine = 9] = "SetEngine", DD[DD.RenameFolder = 10] = "RenameFolder", DD
      }({}),
      iD = function(DD) {
        return DD[DD.Joined = 0] = "Joined", DD[DD.Updates = 1] = "Updates", DD[DD.Presence = 2] = "Presence", DD[DD.RemoteCursor = 3] = "RemoteCursor", DD[DD.ForceClose = 4] = "ForceClose", DD[DD.LobbyFilesChanged = 5] = "LobbyFilesChanged", DD[DD.EngineSettings = 6] = "EngineSettings", DD
      }({});

    function fD(DD) {
      return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
    }

    function bD(DD) {
      if ("lobby" === DD) return {
        kind: "lobby",
        path: ID.g
      };
      if (DD.startsWith("lobby:")) {
        const CD = DD.slice(6);
        return BD(CD) ? {
          kind: "lobby",
          path: CD
        } : null
      }
      const CD = DD.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return CD ? {
        kind: "codeBlock",
        pos: [parseInt(CD[1]), parseInt(CD[2]), parseInt(CD[3])]
      } : null
    }

    function QD(DD) {
      return DD.endsWith(".d.ts")
    }

    function wD(DD) {
      return DD.endsWith(".ts") && !QD(DD)
    }
    const SD = 64;

    function BD(DD) {
      if (!DD || DD !== DD.trim()) return !1;
      if (DD.length > SD) return !1;
      if (DD.startsWith("/") || DD.includes("\\") || DD.includes("\0")) return !1;
      if (!QD(DD) && !wD(DD) && ! function(DD) {
          return DD.endsWith(".js") && !DD.endsWith(".min.js") && !DD.endsWith(".bundle.js")
        }(DD)) return !1;
      const CD = DD.split("/");
      for (const cD of CD)
        if ("" === cD || "." === cD || ".." === cD) return !1;
      return !0
    }
    const yD = 14e3
  },
  38388: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      h: () => pD
    });
    const ID = ["description", "label"];

    function pD(DD) {
      const CD = DD.type;
      return {
        type: CD,
        params: DD[CD]
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);