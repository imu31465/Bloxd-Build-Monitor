export const id = 49;
export const ids = [49];
export const modules = {
  39907: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      f: () => TQ,
      i: () => qQ
    });
    const wQ = 6e3;

    function qQ(QQ, WQ) {
      return [Math.floor(QQ[0] / WQ) * WQ, Math.floor(QQ[1] / WQ) * WQ, Math.floor(QQ[2] / WQ) * WQ]
    }

    function TQ(QQ) {
      const WQ = (null !== QQ && void 0 !== QQ ? QQ : "").match(/-?\d+(?:\.\d+)?/g);
      return WQ && WQ.length >= 3 ? [Number(WQ[0]), Number(WQ[1]), Number(WQ[2])] : null
    }

    function zQ(QQ, WQ) {
      return QQ === WQ ? String(QQ) : `${QQ}-${WQ}`
    }

    function sQ(QQ, WQ, XQ, wQ) {
      const qQ = [];
      let TQ = new Map;
      for (let zQ = QQ[2]; zQ < QQ[2] + WQ; zQ++) {
        const sQ = new Map;
        let FQ = QQ[0];
        for (; FQ < QQ[0] + WQ;) {
          const qQ = wQ(FQ, XQ, zQ);
          let PQ = FQ;
          for (; PQ + 1 < QQ[0] + WQ && wQ(PQ + 1, XQ, zQ) === qQ;) PQ++;
          if (null !== qQ) {
            const QQ = `${FQ} ${PQ} ${qQ}`,
              WQ = TQ.get(QQ);
            WQ ? (WQ.z1 = zQ, TQ.delete(QQ), sQ.set(QQ, WQ)) : sQ.set(QQ, {
              x0: FQ,
              x1: PQ,
              z0: zQ,
              z1: zQ,
              name: qQ
            })
          }
          FQ = PQ + 1
        }
        qQ.push(...TQ.values()), TQ = sQ
      }
      return qQ.push(...TQ.values()), qQ.sort(((QQ, WQ) => QQ.z0 - WQ.z0 || QQ.x0 - WQ.x0)).map((QQ => `x${zQ(QQ.x0,QQ.x1)} z${zQ(QQ.z0,QQ.z1)} ${QQ.name}`))
    }

    function FQ(QQ, WQ, XQ, qQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wQ;
      const FQ = [QQ[0] + WQ - 1, QQ[1] + WQ - 1, QQ[2] + WQ - 1],
        PQ = null !== qQ && qQ.every(((WQ, XQ) => Math.floor(WQ) >= QQ[XQ] && Math.floor(WQ) <= FQ[XQ])),
        gQ = [`The chunk from ${QQ.join(" ")} to ${FQ.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== qQ && gQ.push(`The player's feet are at ${qQ.map(Math.floor).join(" ")}, ${PQ?"in this chunk":"outside this chunk"}.`);
      const JQ = [];
      for (let wQ = QQ[1]; wQ <= FQ[1]; wQ++) {
        const qQ = sQ(QQ, WQ, wQ, XQ).join("; "),
          TQ = JQ[JQ.length - 1];
        (null === TQ || void 0 === TQ ? void 0 : TQ.boxes) === qQ ? TQ.to = wQ : JQ.push({
          from: wQ,
          to: wQ,
          boxes: qQ
        })
      }
      const rQ = JQ.filter((QQ => "" !== QQ.boxes));
      0 === rQ.length && gQ.push("It is all air.");
      let IQ = gQ.join("\n").length;
      for (const wQ of rQ) {
        const QQ = `y${zQ(wQ.from,wQ.to)}: ${wQ.boxes}`;
        if (IQ += QQ.length + 1, IQ > TQ) {
          gQ.push(`Cut short: the layers from y${wQ.from} up aren't shown, as there are too many blocks.`);
          break
        }
        gQ.push(QQ)
      }
      return gQ.join("\n")
    }
  },
  9168: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(26);

    function qQ() {
      return !wQ.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37224: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      e: () => TQ,
      h: () => qQ
    });
    const wQ = [.25, .5, 1, 2, 4, 8, 16];

    function qQ(QQ, WQ) {
      const XQ = wQ;
      let qQ = XQ.indexOf(QQ);
      return -1 === qQ && (qQ = XQ.findIndex((WQ => WQ >= QQ)), -1 === qQ && (qQ = XQ.length - 1)), "up" === WQ ? XQ[Math.min(qQ + 1, XQ.length - 1)] : XQ[Math.max(qQ - 1, 0)]
    }

    function TQ(QQ) {
      return QQ <= wQ[0]
    }

    function zQ(QQ) {
      return QQ >= wQ[wQ.length - 1]
    }
  },
  39354: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      g: () => zQ
    });
    var wQ = XQ(31);
    let qQ = !1;

    function TQ() {
      return qQ
    }

    function zQ(QQ) {
      qQ !== QQ && (qQ = QQ, wQ.k.mB("replayViewer|videoExportChanged"))
    }
  },
  36809: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      f: () => TQ
    });
    let wQ = !1;

    function qQ() {
      return wQ
    }

    function TQ(QQ) {
      return wQ !== QQ && (wQ = QQ, !0)
    }
  },
  39301: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(31),
      qQ = XQ(2036);

    function TQ(QQ) {
      let {
        taskId: WQ,
        progress: XQ
      } = QQ;
      const wQ = qQ.e.get("_tasks");
      null !== wQ && void 0 !== wQ && wQ[WQ] && qQ.e.apply({
        _tasks: {
          ...wQ,
          [WQ]: {
            ...wQ[WQ],
            progress: XQ
          }
        }
      })
    }
    wQ.k.subscribe("clientTaskProgress", (QQ => {
      TQ(QQ)
    }))
  },
  39883: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ,
      f: () => jQ,
      h: () => PQ,
      i: () => JQ,
      l: () => FQ,
      o: () => zQ,
      s: () => gQ,
      v: () => BQ
    });
    var wQ = XQ(2036),
      qQ = XQ(31),
      TQ = XQ(2048);
    const zQ = (0, TQ.h)((function() {
        var QQ, WQ, XQ, qQ;
        return {
          health: null !== (QQ = wQ.e.get("_health")) && void 0 !== QQ ? QQ : null,
          maxHealth: null !== (WQ = wQ.e.get("_totalMaxHealth")) && void 0 !== WQ ? WQ : null,
          shield: null !== (XQ = wQ.e.get("_shield")) && void 0 !== XQ ? XQ : null,
          maxShield: null !== (qQ = wQ.e.get("maxShield")) && void 0 !== qQ ? qQ : null
        }
      }), [], (0, TQ.g)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      sQ = [{
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

    function FQ(QQ, WQ) {
      return sQ[(QQ ? 2 : 0) + (WQ ? 1 : 0)]
    }
    const PQ = (0, TQ.h)((function() {
      var QQ;
      return null !== (QQ = wQ.e.get("_aura")) && void 0 !== QQ ? QQ : null
    }), [], (0, TQ.g)("_aura"));

    function gQ(QQ) {
      return {
        watch: WQ => (0, qQ.o)("shotPlayer", (XQ => {
          let {
            playerId: wQ,
            damage: qQ,
            wasCrit: TQ,
            distance: zQ
          } = XQ;
          QQ(wQ) && WQ({
            damage: qQ,
            wasCrit: TQ,
            distance: zQ
          })
        }))
      }
    }

    function JQ(QQ) {
      return (0, TQ.c)("chat", (WQ => {
        let {
          serverChatMsgId: XQ,
          worldCodeLineId: wQ,
          content: qQ,
          chatterEId: TQ
        } = WQ;
        return {
          serverChatMsgId: null !== XQ && void 0 !== XQ ? XQ : null,
          worldCodeLineId: null !== wQ && void 0 !== wQ ? wQ : null,
          content: qQ,
          author: TQ ? QQ(TQ) : null
        }
      }))
    }
    class rQ {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const XQ = this.shown;
        return QQ !== this.needed && (this.needed = QQ, this.neededSince = WQ, null === QQ && (this.shown = null)), this.shown !== this.needed && WQ - this.neededSince > 200 && (this.shown = this.needed), this.shown !== XQ
      }
    }

    function IQ(QQ) {
      return [{
        translationKey: `touchKeys:${QQ}`
      }]
    }
    const jQ = {
      open: IQ("open"),
      close: IQ("close"),
      milk: IQ("milk"),
      shear: IQ("shear"),
      tame: IQ("tame"),
      feed: IQ("feed"),
      ride: IQ("ride")
    };

    function BQ(QQ) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: QQ
      }]
    }
  },
  41255: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      g: () => zQ
    });
    var wQ = XQ(3559);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= XQ.e(220).then((() => XQ(36619))).then((QQ => {
        let {
          ITEM_SPRITES: WQ,
          ITEM_SPRITES_WITHOUT_FILE: XQ,
          ITEM_FILES_WITHOUT_SPRITE: TQ
        } = QQ;
        qQ = function(QQ, WQ, XQ) {
          const qQ = new Set,
            TQ = (0, wQ.D)(WQ);
          let zQ = 0;
          for (const [wQ, sQ] of QQ.entries()) wQ === TQ[zQ] ? zQ++ : qQ.add(sQ);
          if ("" !== XQ)
            for (const sQ of XQ.split(wQ.v)) qQ.add(sQ);
          return qQ
        }(WQ.split(wQ.v), XQ, TQ)
      }), (QQ => {
        throw TQ = null, QQ
      })), TQ
    }

    function sQ(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = qQ) || void 0 === XQ ? void 0 : XQ.has(QQ)) && void 0 !== WQ && WQ
    }
  },
  39895: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      g: () => TQ,
      j: () => qQ
    });
    const wQ = 128;

    function qQ(QQ, WQ, XQ, wQ) {
      const qQ = 2 * WQ - 1,
        TQ = 1 - 2 * XQ,
        zQ = QQ(0) - qQ * QQ(3),
        sQ = QQ(4) - qQ * QQ(7),
        FQ = QQ(8) - qQ * QQ(11),
        PQ = QQ(1) - TQ * QQ(3),
        gQ = QQ(5) - TQ * QQ(7),
        JQ = QQ(9) - TQ * QQ(11);
      wQ[0] = sQ * JQ - FQ * gQ, wQ[1] = FQ * PQ - zQ * JQ, wQ[2] = zQ * gQ - sQ * PQ;
      const rQ = wQ[0] * QQ(3) + wQ[1] * QQ(7) + wQ[2] * QQ(11) < 0 ? -1 : 1,
        IQ = Math.hypot(wQ[0], wQ[1], wQ[2]) * rQ;
      return wQ[0] /= IQ, wQ[1] /= IQ, wQ[2] /= IQ, wQ
    }

    function TQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = [Math.floor(WQ[0]), Math.floor(WQ[1]), Math.floor(WQ[2])],
        sQ = [0, 0, 0],
        FQ = [1 / 0, 1 / 0, 1 / 0],
        PQ = [1 / 0, 1 / 0, 1 / 0];
      for (let rQ = 0; rQ < 3; rQ++) sQ[rQ] = Math.sign(XQ[rQ]), 0 !== sQ[rQ] && (PQ[rQ] = Math.abs(1 / XQ[rQ]), FQ[rQ] = (zQ[rQ] + (sQ[rQ] > 0 ? 1 : 0) - WQ[rQ]) / XQ[rQ]);
      let gQ = 0,
        JQ = Math.abs(XQ[0]) > Math.abs(XQ[1]) ? 0 : 1;
      for (Math.abs(XQ[2]) > Math.abs(XQ[JQ]) && (JQ = 2); gQ <= wQ;) {
        if (QQ(zQ[0], zQ[1], zQ[2])) return qQ[0] = zQ[0], qQ[1] = zQ[1], qQ[2] = zQ[2], TQ[0] = 0, TQ[1] = 0, TQ[2] = 0, TQ[JQ] = -sQ[JQ], !0;
        JQ = FQ[0] < FQ[1] ? 0 : 1, FQ[2] < FQ[JQ] && (JQ = 2), gQ = FQ[JQ], zQ[JQ] += sQ[JQ], FQ[JQ] += PQ[JQ]
      }
      return !1
    }
  },
  39877: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(1972);

    function qQ(QQ, WQ, XQ) {
      return (0, wQ.k)(QQ, WQ) < XQ
    }
  },
  9101: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(1290);

    function qQ(QQ, WQ) {
      var XQ, qQ;
      try {
        const XQ = (0, wQ.c)();
        if ("function" === typeof XQ) {
          const wQ = new XQ(QQ, WQ);
          if (wQ.type === QQ) return wQ
        }
      } catch {}
      const TQ = document.createEvent("Event");
      return TQ.initEvent(QQ, null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.bubbles) && void 0 !== XQ && XQ, null !== (qQ = null === WQ || void 0 === WQ ? void 0 : WQ.cancelable) && void 0 !== qQ && qQ), TQ
    }
  },
  36775: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      h: () => gQ,
      k: () => IQ,
      n: () => JQ
    });
    var wQ = XQ(402),
      qQ = XQ(695),
      TQ = XQ(702),
      zQ = XQ(43);
    const sQ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      FQ = "playSessionGameNameWithVariation",
      PQ = "wasMatchmakePlayer";

    function gQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m;
      (0, TQ.j)(QQ, sQ)
    }

    function JQ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).setItem(PQ, !0)
    }

    function rQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m;
      return (0, TQ.e)(QQ, sQ)
    }

    function IQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.m;
      const XQ = (0, TQ.e)(WQ, sQ),
        gQ = function(QQ) {
          const WQ = QQ.getItem(FQ);
          return "string" !== typeof WQ ? null : WQ
        }(WQ),
        JQ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).getItem(PQ)
        }(WQ);
      let rQ;
      return rQ = null !== XQ && null !== gQ && (0, TQ.f)(WQ, sQ) && function(QQ, WQ, XQ) {
          const qQ = (0, wQ.Mb)(QQ),
            TQ = (0, wQ.Mb)(WQ),
            zQ = (0, wQ.Fb)(QQ),
            sQ = (0, wQ.Fb)(WQ);
          return !(qQ !== TQ || !XQ) || qQ === TQ && zQ === sQ
        }(gQ, QQ, JQ) ? XQ : (0, qQ.e)(), (0, TQ.n)(WQ, sQ, rQ), WQ.setItem(FQ, QQ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).removeItem(PQ)
        }(WQ), rQ
    }
  },
  39289: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ = XQ(1257),
      qQ = XQ(1384),
      TQ = XQ(26),
      zQ = XQ(1360),
      sQ = XQ(1376),
      FQ = XQ(1567),
      PQ = XQ(36775);

    function gQ(QQ) {
      let {
        Cq: WQ,
        uq: XQ
      } = QQ;
      const gQ = null !== WQ && void 0 !== WQ ? WQ : (0, sQ.e)().gameNameWithVariation;
      (0, wQ.F)(gQ) && ((0, PQ.n)(), (0, zQ.Z)((() => {
        console.log("Received matchmaking order from game server to game", WQ), (0, TQ.m)("inGameReplay"), (0, FQ.navigatePreserveSearch)((0, qQ.c)(gQ, null !== XQ && void 0 !== XQ ? XQ : void 0))
      }), "video_start"))
    }
  },
  39456: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(31),
      qQ = XQ(2061);

    function TQ(QQ) {
      var WQ, XQ;
      const TQ = (0, qQ.n)(null !== (WQ = null === (XQ = qQ.s.toggleFreeCam) || void 0 === XQ ? void 0 : XQ[0]) && void 0 !== WQ ? WQ : null);
      wQ.k.mB("showBottomMessage", {
        message: `Free Camera ${QQ?"Enabled":"Disabled"}${TQ?` - Press ${TQ} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39287: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      i: () => zQ,
      l: () => sQ,
      o: () => PQ
    });
    var wQ = XQ(31),
      qQ = XQ(1404);
    const TQ = new Map;

    function zQ(QQ, WQ) {
      wQ.k.mB("newUiRequest", {
        id: QQ,
        clientParameters: WQ
      }, !0)
    }

    function sQ(QQ) {
      wQ.k.mB("removeUiRequest", QQ, !0);
      const WQ = TQ.get(QQ);
      WQ && (WQ.tearDownNotification(), TQ.delete(QQ))
    }

    function FQ() {
      wQ.k.mB("clearUiRequests");
      for (const QQ of TQ.values()) QQ.tearDownNotification();
      TQ.clear()
    }

    function PQ(QQ, WQ, XQ, wQ) {
      const zQ = qQ.NotificationProvider.showPromptPopup({
        title: WQ,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: XQ,
        unlockPointerKey: "uiRequestPopup"
      });
      TQ.set(QQ, zQ), zQ.getResult().then((WQ => {
        TQ.delete(QQ), "notificationTornDown" !== WQ && wQ(WQ)
      }))
    }
  },
  39898: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ,
      c: () => rQ
    });
    var wQ = XQ(231),
      qQ = XQ(39907);
    const TQ = 20;

    function zQ(QQ) {
      return QQ.map(Math.floor).join(" ")
    }

    function sQ(QQ) {
      return null === QQ.amount || 1 === QQ.amount ? QQ.name : `${QQ.amount} ${QQ.name}`
    }
    var FQ = XQ(39911),
      PQ = XQ(2036),
      gQ = XQ(1376);

    function JQ(QQ, WQ) {
      if (!QQ) return FQ.d;
      const XQ = QQ.playerFeet();
      if (!XQ) return "The player isn't in the world yet, so no blocks can be seen.";
      const TQ = wQ.h.Ij,
        zQ = (0, qQ.i)(null !== WQ && void 0 !== WQ ? WQ : XQ, TQ),
        sQ = QQ.chunkBlocks(zQ);
      return sQ ? (0, qQ.d)(zQ, TQ, ((WQ, XQ, wQ) => {
        const qQ = sQ(WQ, XQ, wQ);
        return 0 === qQ ? null : QQ.blockName(qQ).split("|")[0]
      }), XQ) : `The chunk from ${zQ.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${XQ.map(Math.floor).join(" ")}.`
    }

    function rQ(QQ) {
      var WQ, XQ, wQ;
      if (!QQ) return FQ.h;
      const qQ = QQ.playerFeet();
      if (!qQ) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: JQ,
        heldSlot: rQ
      } = QQ.inventory();
      return function(QQ) {
        const WQ = [];
        null !== QQ.game && WQ.push(`Game: ${QQ.game}.`);
        const XQ = null === QQ.health ? "" : `, health ${Math.round(QQ.health)}${null===QQ.maxHealth?"":` of ${Math.round(QQ.maxHealth)}`}`;
        WQ.push(`The player (the creator) stands at ${zQ(QQ.position)}${XQ}, ${QQ.creative?"in":"not in"} creative mode.`);
        const wQ = QQ.slots[QQ.heldSlot];
        WQ.push(wQ ? `Holding (slot ${QQ.heldSlot}): ${sQ(wQ)}.` : `Holding nothing (slot ${QQ.heldSlot} is empty).`);
        const qQ = QQ.slots.flatMap(((QQ, WQ) => QQ ? [`slot ${WQ}: ${sQ(QQ)}`] : []));
        WQ.push(qQ.length > 0 ? `Inventory: ${qQ.join(", ")}.` : "Inventory: empty.");
        const FQ = WQ => Math.hypot(WQ.position[0] - QQ.position[0], WQ.position[1] - QQ.position[1], WQ.position[2] - QQ.position[2]),
          PQ = [...QQ.nearby].sort(((QQ, WQ) => FQ(QQ) - FQ(WQ)));
        if (0 === PQ.length) WQ.push("No other players or mobs are near enough to see.");
        else {
          WQ.push("Near them, nearest first:");
          for (const QQ of PQ.slice(0, TQ)) {
            const XQ = "player" === QQ.kind ? `player "${QQ.name||"?"}"` : QQ.name && QQ.name !== QQ.kind ? `${QQ.kind} "${QQ.name}"` : QQ.kind,
              wQ = Math.round(FQ(QQ));
            WQ.push(`- ${XQ} at ${zQ(QQ.position)}, ${wQ} block${1===wQ?"":"s"} away`)
          }
          PQ.length > TQ && WQ.push(`- and ${PQ.length-TQ} more further away`)
        }
        return QQ.droppedItems > 0 && WQ.push(`${QQ.droppedItems} dropped item${1===QQ.droppedItems?" is":"s are"} on the ground nearby.`), WQ.join("\n")
      }({
        game: null !== (WQ = (0, gQ.e)().gameNameWithVariation) && void 0 !== WQ ? WQ : null,
        position: qQ,
        health: null !== (XQ = PQ.e.get("_health")) && void 0 !== XQ ? XQ : null,
        maxHealth: null !== (wQ = PQ.e.get("_totalMaxHealth")) && void 0 !== wQ ? wQ : null,
        creative: !0 === PQ.e.get("creative"),
        heldSlot: rQ,
        slots: JQ,
        nearby: QQ.nearby(),
        droppedItems: QQ.droppedItems()
      })
    }
  },
  41094: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => OQ,
      E: () => uQ,
      H: () => iQ,
      L: () => CQ,
      O: () => hQ,
      R: () => nQ,
      U: () => eQ,
      Y: () => AQ,
      b: () => xQ,
      e: () => kQ,
      h: () => aQ,
      j: () => YQ,
      l: () => lQ,
      p: () => HQ,
      r: () => LQ,
      v: () => cQ,
      x: () => EQ,
      y: () => RQ
    });
    var wQ = XQ(1454),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(2506),
      sQ = XQ(5153),
      FQ = XQ(5118);
    let PQ, gQ = !1,
      JQ = !1,
      rQ = !1,
      IQ = !1;
    const jQ = 1300,
      BQ = 3e3;
    let yQ = 0,
      VQ = !1,
      DQ = !1,
      pQ = 0;
    const GQ = 2;
    let UQ = !1,
      bQ = !1;
    const vQ = new Set,
      dQ = new Set;

    function HQ() {
      return gQ
    }

    function aQ() {
      return DQ
    }

    function lQ() {
      return bQ
    }

    function hQ() {
      return (0, TQ.A)() && !bQ
    }

    function iQ(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (QQ !== bQ) {
        bQ = QQ;
        for (const QQ of [...dQ]) QQ(bQ);
        WQ && eQ()
      }
    }

    function cQ(QQ) {
      return dQ.add(QQ), () => {
        dQ.delete(QQ)
      }
    }

    function AQ() {
      (0, sQ.i)(zQ.x.Menu, (0, TQ.A)() ? 0 : zQ.x.Menu)
    }

    function RQ() {
      DQ = !1, pQ = 0, AQ(), eQ()
    }

    function EQ(QQ) {
      return vQ.add(QQ), () => {
        vQ.delete(QQ)
      }
    }

    function CQ(QQ) {
      JQ = !1, QQ !== gQ && (gQ = QQ, IQ = !1, clearTimeout(PQ), rQ = !gQ && UQ, gQ ? (VQ = !1, DQ = !1, pQ = 0) : hQ() && !UQ && (DQ = !0), UQ = !1, gQ && !hQ() && ZQ(), KQ(), rQ && eQ())
    }

    function uQ(QQ) {
      QQ !== VQ && (VQ = QQ, QQ || eQ())
    }

    function LQ() {
      JQ = !1, IQ || !0 !== tQ() || (IQ = !0, clearTimeout(PQ), PQ = setTimeout(fQ, jQ))
    }

    function kQ() {
      return (!JQ || performance.now() - yQ > BQ) && (JQ = (0, FQ.H)().lockPointer(), yQ = performance.now()), JQ
    }

    function fQ() {
      SQ() && oQ() && kQ()
    }

    function SQ() {
      return hQ() && !gQ && !VQ && !(0, wQ.l)()
    }

    function tQ() {
      var QQ;
      return "undefined" === typeof navigator || null === (QQ = navigator.userActivation) || void 0 === QQ ? void 0 : QQ.isActive
    }

    function oQ() {
      return rQ && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== tQ()
    }

    function eQ() {
      hQ() ? SQ() && !DQ && oQ() && kQ() : gQ && !UQ && ZQ()
    }

    function nQ() {
      DQ ? navigator.vendor.startsWith("Apple") ? NQ() : pQ = GQ : eQ()
    }

    function xQ() {
      pQ > 0 && 0 === --pQ && NQ()
    }

    function YQ() {
      pQ = 0
    }

    function NQ() {
      SQ() && !0 === tQ() && kQ()
    }

    function ZQ() {
      UQ = !0, (0, FQ.H)().unlockPointer()
    }

    function OQ() {
      JQ = !1, rQ = !1, IQ = !1, clearTimeout(PQ), VQ = !1, DQ = !1, pQ = 0, UQ = !1;
      const QQ = gQ;
      gQ = !1, QQ && KQ()
    }

    function KQ() {
      for (const QQ of [...vQ]) QQ(gQ);
      qQ.k.mB("pointerLockUpdate", gQ)
    }
  },
  40902: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ,
      d: () => sQ,
      e: () => JQ,
      f: () => PQ,
      j: () => zQ,
      n: () => gQ,
      o: () => FQ
    });
    let wQ = null,
      qQ = null,
      TQ = null;

    function zQ(QQ) {
      wQ = QQ
    }

    function sQ() {
      return wQ
    }

    function FQ(QQ) {
      qQ = QQ
    }

    function PQ() {
      return qQ
    }

    function gQ(QQ) {
      TQ = QQ
    }

    function JQ() {
      return TQ
    }

    function rQ() {
      var QQ, WQ;
      return !0 === (null === (QQ = qQ) || void 0 === QQ || null === (WQ = QQ.currentViewer) || void 0 === WQ ? void 0 : WQ.inPlayback)
    }
  },
  41206: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      attachPlayGameSources: () => vw,
      playGameSources: () => bw
    });
    var wQ = XQ(2003),
      qQ = XQ(40902),
      TQ = XQ(5118),
      zQ = XQ(40829),
      sQ = XQ(41195),
      FQ = XQ(39883),
      PQ = XQ(31),
      gQ = XQ(5140),
      JQ = XQ(5134),
      rQ = XQ(40850),
      IQ = XQ(40876),
      jQ = XQ(41215),
      BQ = XQ(40857);
    (0, BQ.j)(gQ.gc.Chat, (QQ => {
      if (QQ.payloadKind !== JQ.rc.Msgpack) return;
      const WQ = function(QQ) {
        if (null === QQ || "object" !== typeof QQ || !("content" in QQ)) return null;
        const {
          chatMsgId: WQ,
          worldCodeLineId: XQ,
          content: wQ,
          chatterEId: qQ
        } = QQ;
        return {
          serverChatMsgId: null !== WQ && void 0 !== WQ ? WQ : void 0,
          worldCodeLineId: null !== XQ && void 0 !== XQ ? XQ : void 0,
          content: wQ,
          chatterEId: void 0 === qQ || null === qQ ? void 0 : String(qQ)
        }
      }((0, rQ.d)(QQ.payload));
      null !== WQ && PQ.k.mB("chat", WQ, !0)
    }));
    const yQ = {
        chatReceived: (0, FQ.i)((function(QQ) {
          var WQ, XQ, wQ;
          return {
            id: QQ,
            name: null !== (WQ = jQ.f.getName(QQ)) && void 0 !== WQ ? WQ : null,
            local: (0, IQ.d)() === QQ,
            profileEffect: null !== (XQ = null === (wQ = (0, jQ.g)(QQ)) || void 0 === wQ ? void 0 : wQ.profileEffect) && void 0 !== XQ ? XQ : null
          }
        }))
      },
      VQ = {
        sendChatMessage(QQ) {
          var WQ;
          let {
            cg: XQ,
            channelName: wQ
          } = QQ;
          null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.clientApi.sendChat(XQ, wQ)
        }
      };
    var DQ = XQ(231),
      pQ = XQ(2036),
      GQ = XQ(40813),
      UQ = XQ(39877);
    const bQ = [0, 0, 0],
      vQ = {
        codeBlockClickable(QQ) {
          var WQ;
          const XQ = (0, zQ.j)();
          if (null === XQ || void 0 === XQ || !XQ.isSessionLive) return !1;
          const wQ = XQ.api;
          if (0 !== (GQ.x.playerFlags(wQ.apiView, 0) & GQ.ae.Crouching)) return !1;
          const qQ = wQ.queries.directorEntity(wQ.localId) >= GQ.Db.BYTES ? wQ.memoryData(wQ.scratch(), GQ.Db.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === qQ) return !1;
          for (let TQ = 0; TQ < 3; TQ++) bQ[TQ] = GQ.Db.feet(qQ, 0, TQ);
          return bQ[1] += GQ.Db.eyeHeight(qQ, 0), (0, UQ.d)(bQ, QQ, null !== (WQ = pQ.e.get("blockReach")) && void 0 !== WQ ? WQ : DQ.h.Ny)
        }
      },
      dQ = {
        clickCodeBlock(QQ) {
          var WQ;
          null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.clickCodeBlock(QQ)
        }
      };
    var HQ = XQ(40837),
      aQ = XQ(41221),
      lQ = XQ(1049),
      hQ = XQ(39311),
      iQ = XQ(5111),
      cQ = XQ(40845),
      AQ = XQ(40835),
      RQ = XQ(40847);

    function EQ(QQ) {
      if (null === QQ) return null;
      const WQ = [];
      for (const XQ of QQ) {
        const QQ = Object.keys(XQ)[0];
        if ("MQ" === QQ) {
          const {
            str: QQ,
            style: wQ,
            clickableUrl: qQ
          } = XQ.MQ, TQ = Object.keys(QQ)[0], zQ = QQ[TQ];
          "string" !== TQ && "styledEntityName" !== TQ && "styledTranslatedText" !== TQ || WQ.push({
            str: zQ,
            style: wQ,
            clickableUrl: qQ
          })
        } else WQ.push(XQ[QQ])
      }
      return WQ
    }
    const CQ = {
      screenPos(QQ) {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = (0, zQ.j)()) || void 0 === XQ ? void 0 : XQ.renderFrame.projectWorldPosToScreenPos(QQ)) && void 0 !== WQ ? WQ : {
          x: 0,
          y: 0
        }
      }
    };
    let uQ = !1;

    function LQ() {
      uQ || (uQ = !0, (0, BQ.j)(gQ.gc.ProgressBarUpdate, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        (0, RQ.c)(WQ) && PQ.k.mB("progressBarUpdate", WQ, !0)
      })), (0, BQ.j)(cQ.u, (QQ => {
        const WQ = (0, RQ.d)(cQ.u, QQ);
        WQ && PQ.k.mB("middleScreenBarInitiate", {
          duration: WQ.iq,
          cq: WQ.cq,
          horizBarRemOffset: WQ.Aq
        }, !0)
      })), (0, BQ.j)(gQ.gc.RemoveMiddleScreenBar, (() => {
        PQ.k.mB("middleScreenBarRemove")
      })), (0, BQ.j)(cQ.X, (QQ => {
        const WQ = (0, RQ.d)(cQ.X, QQ);
        if (WQ) {
          var XQ;
          const QQ = WQ.aQ ? null === (XQ = (0, zQ.j)()) || void 0 === XQ ? void 0 : XQ.renderFrame.projectDirectionToScreenPos(WQ.aQ) : void 0;
          PQ.k.mB("sendHitmarker", {
            fW: WQ.fW,
            screenPos: QQ
          }, !0)
        }
      })), (0, BQ.j)(cQ.$, (QQ => {
        const WQ = (0, RQ.d)(cQ.$, QQ);
        if (WQ) {
          const {
            id: QQ,
            position: XQ,
            style: wQ,
            iW: qQ,
            AW: TQ
          } = WQ;
          PQ.k.mB("setDirectionArrow", {
            id: QQ,
            position: XQ,
            style: wQ,
            text: EQ(qQ),
            AW: TQ
          }, !0)
        }
      })), (0, BQ.j)(cQ.f, (QQ => {
        const WQ = (0, RQ.d)(cQ.f, QQ);
        WQ && PQ.k.mB("clearDirectionArrow", {
          id: WQ.id
        }, !0)
      })), (0, BQ.j)(cQ.n, (QQ => {
        const WQ = (0, RQ.d)(cQ.n, QQ);
        WQ && PQ.k.mB("flyingMiddleMessage", {
          content: EQ(WQ.aT),
          lT: WQ.lT,
          hT: WQ.hT
        }, !0)
      })), (0, BQ.j)(gQ.gc.WorldVariation, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ("string" === typeof WQ) {
          const QQ = WQ === lQ.e ? null : {
            message: `Currently loaded as variation: ${WQ}`,
            type: "Warning"
          };
          PQ.k.mB("showPermanentBottomMessage", QQ, !0)
        }
      })), (0, BQ.j)(cQ.E, (QQ => {
        const WQ = (0, RQ.d)(cQ.E, QQ);
        WQ && function(QQ, WQ) {
          const {
            type: XQ,
            params: wQ
          } = (0, hQ.f)(WQ), qQ = {
            ...wQ
          };
          for (const TQ of hQ.b) qQ[TQ] && (qQ[TQ] = EQ(qQ[TQ]));
          iQ.c.queueQTE(QQ, XQ, qQ).getResult().then((WQ => {
            var XQ;
            "boolean" === typeof WQ && (null === (XQ = (0, zQ.j)()) || void 0 === XQ || XQ.send(AQ.d.QteResponse, {
              qteId: QQ,
              qteResponse: WQ
            }))
          }))
        }(WQ.id, WQ.nQ)
      })), (0, BQ.j)(cQ.Q, (QQ => {
        const WQ = (0, RQ.d)(cQ.Q, QQ);
        "number" === typeof WQ && iQ.c.cancelQTE(WQ)
      })), (0, BQ.g)((() => {
        iQ.c.reset()
      })), (0, BQ.h)((() => {
        iQ.c.reset()
      })), (0, BQ.j)(gQ.gc.EditItemCraftingRecipes, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        (0, RQ.c)(WQ) && PQ.k.mB("craftingRecipesEdited", {
          itemName: WQ.craftingRecipeItemName,
          recipesForItem: WQ.recipesForItem
        })
      })), (0, BQ.j)(cQ.P, (QQ => {
        const WQ = (0, RQ.d)(cQ.P, QQ);
        WQ && PQ.k.mB("craftingRecipesEdited", {
          itemName: WQ.hq,
          recipesForItem: []
        })
      })))
    }
    var kQ = XQ(26);
    const fQ = [{
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

    function SQ(QQ) {
      return GQ.x.playerFlags(QQ.api.apiView, 0)
    }
    const tQ = {
        freeCamera: (0, IQ.c)((QQ => () => {
          const WQ = QQ.isSessionLive && 0 !== (SQ(QQ) & GQ.ae.FreeCamMoves),
            XQ = QQ.freeCameraAllowed() && null === kQ.b.get("scriptedCameraFacing");
          return fQ[(XQ ? 2 : 0) + (WQ ? 1 : 0)]
        }), fQ[0], (QQ => (0, TQ.t)(QQ)))
      },
      oQ = {
        setFreeCameraMovesFly: QQ => {
          var WQ;
          null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.setFreeCameraMovesFly(QQ)
        }
      },
      eQ = {
        freeCameraPos: () => {
          const QQ = (0, zQ.j)();
          return null !== QQ && void 0 !== QQ && QQ.isSessionLive && QQ.renderFrame.hasView && 0 !== (SQ(QQ) & GQ.ae.FreeCam) ? QQ.renderFrame.cameraPosition : null
        }
      };
    var nQ = XQ(39456);
    let xQ = !1,
      YQ = !1;

    function NQ() {
      const QQ = (0, zQ.j)();
      if (null === QQ || void 0 === QQ || !QQ.isSessionLive) return void(xQ = !1);
      const WQ = 0 !== (GQ.x.playerFlags(QQ.api.apiView, 0) & GQ.ae.FreeCam);
      WQ !== xQ && (xQ = WQ, (0, nQ.c)(WQ))
    }
    var ZQ = XQ(402),
      OQ = XQ(37311),
      KQ = XQ(2048);
    var mQ = XQ(41224),
      MQ = XQ(40871);
    const QW = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let WW = "off";

    function XW(QQ) {
      var WQ;
      return null === QQ ? null : {
        label: null !== (WQ = (0, mQ.b)(QQ, "interactionPrompt")) && void 0 !== WQ ? WQ : null
      }
    }
    const wW = new Map([
      [GQ.Sc.Open, {
        label: FQ.f.open
      }],
      [GQ.Sc.Close, {
        label: FQ.f.close
      }],
      [GQ.Sc.Milk, {
        label: FQ.f.milk
      }],
      [GQ.Sc.Shear, {
        label: FQ.f.shear
      }],
      [GQ.Sc.Tame, {
        label: FQ.f.tame
      }],
      [GQ.Sc.Feed, {
        label: FQ.f.feed
      }],
      [GQ.Sc.Ride, {
        label: FQ.f.ride
      }]
    ]);
    class qW {
      constructor() {
        this.target = QW, this.ez = GQ.Ad, this.optionName = null, this.pickaxe = new FQ.c
      }
      read(QQ) {
        var WQ;
        const XQ = GQ.x.targetBlockId(QQ.api.apiView, 0);
        XQ !== this.ez && (this.ez = XQ, this.optionName = XQ === GQ.Ad ? null : `${QQ.tables.getMetaInfo(XQ).rootName}CrosshairText`);
        const wQ = null === this.optionName ? null : null !== (WQ = QQ.tables.getClientOption(this.optionName)) && void 0 !== WQ ? WQ : null;
        this.pickaxe.update(function(QQ, WQ) {
          var XQ, wQ, qQ;
          if (0 === (GQ.x.playerFlags(QQ.api.apiView, 0) & GQ.ae.Breaking) || WQ === GQ.Ad || 0 === WQ) return null;
          const {
            tables: TQ
          } = QQ;
          if (!0 === TQ.getClientOption("creative")) return null;
          const zQ = TQ.nameOfId(WQ),
            sQ = null === (XQ = QQ.items.Ds()) || void 0 === XQ ? void 0 : XQ.name,
            FQ = null !== (wQ = TQ.getItemStat(zQ, "harvestLevel")) && void 0 !== wQ ? wQ : 0;
          return (0, ZQ.xc)({
            blockHarvestType: TQ.getDefaultItemStat(zQ, "harvestType"),
            blockHarvestLevel: TQ.getDefaultItemStat(zQ, "harvestLevel"),
            harvestLevel: FQ,
            heldToolType: void 0 === sQ ? void 0 : TQ.getDefaultItemStat(sQ, "harvests"),
            heldToolLevel: void 0 === sQ ? void 0 : TQ.getDefaultItemStat(sQ, "level")
          }) && null !== (qQ = OQ.m[FQ]) && void 0 !== qQ ? qQ : null
        }(QQ, XQ)), QQ.watchPromptPick(WW);
        const qQ = "touch" === WW ? function(QQ) {
          var WQ;
          const XQ = QQ.interactLabel;
          return XQ === GQ.Sc.Entity ? XW(QQ.promptEntity) : XQ === GQ.Sc.TameWith ? {
            label: (0, FQ.v)(QQ.tables.nameOfId(QQ.interactIcon))
          } : null !== (WQ = wW.get(XQ)) && void 0 !== WQ ? WQ : null
        }(QQ) : XW(QQ.promptEntity);
        return this.target = (0, KQ.j)(this.target, {
          interactPrompt: qQ,
          blockText: wQ,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let TW = null;
    const zW = {
      current: () => {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = TW) || void 0 === WQ ? void 0 : WQ.target) && void 0 !== QQ ? QQ : QW
      },
      watch: QQ => {
        const WQ = new qW;
        TW = WQ;
        const XQ = (0, IQ.e)((XQ => {
          let wQ = WQ.read(XQ);
          QQ(wQ);
          const qQ = (0, TQ.w)((() => {
            const qQ = WQ.read(XQ);
            qQ !== wQ && (wQ = qQ, QQ(qQ))
          }));
          return () => {
            qQ(), XQ.watchPromptPick("off")
          }
        }));
        return () => {
          XQ(), TW === WQ && (TW = null)
        }
      }
    };
    let sW = 0,
      FW = 0;
    const PW = {
        health: FQ.o,
        aura: FQ.h,
        hotbar: MQ.d.states.hotbar,
        heldItemAim: MQ.d.states.heldItemAim,
        crouching: (0, IQ.c)((QQ => function(QQ) {
          const WQ = () => 0 !== (GQ.x.playerFlags(QQ.apiView, 0) & GQ.ae.Crouching);
          return {
            current: WQ,
            watch(QQ) {
              let XQ = WQ();
              return (0, TQ.t)((() => {
                const wQ = WQ();
                wQ !== XQ && (XQ = wQ, QQ(wQ))
              }))
            }
          }
        }(QQ.api).current), !1, (QQ => (0, TQ.t)(QQ))),
        flight: (0, IQ.c)((QQ => () => function(QQ) {
          const WQ = GQ.x.playerFlags(QQ.apiView, 0);
          return (0, FQ.l)(0 !== (WQ & GQ.ae.CanFly), 0 !== (WQ & GQ.ae.Flying))
        }(QQ.api)), (0, FQ.l)(!1, !1), (QQ => (0, TQ.t)(QQ))),
        gliderBoostFuel: (0, IQ.c)((QQ => () => GQ.x.gliderBoostFuel(QQ.api.apiView, 0)), 0, (QQ => (0, TQ.t)(QQ))),
        crosshairTarget: zW
      },
      gW = {
        hotbarSlotRequested: MQ.d.events.hotbarSlotRequested,
        hotbarScrolled: MQ.d.events.hotbarScrolled,
        numberKeyPressed: MQ.d.events.numberKeyPressed,
        shotDamageToShow: (0, FQ.s)((QQ => !0 === (0, mQ.b)(QQ, "showDamageAmounts")))
      },
      JW = {
        selectHotbarSlot: MQ.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: QQ => {
          WW = QQ
        }
      },
      rW = {
        momentumFrac: function() {
          var QQ, WQ, XQ;
          const wQ = (0, zQ.j)(),
            qQ = performance.now(),
            TQ = null === wQ || void 0 === wQ || null === (QQ = wQ.items.Ds()) || void 0 === QQ || null === (WQ = QQ.attributes) || void 0 === WQ || null === (XQ = WQ.customAttributes) || void 0 === XQ ? void 0 : XQ.enchantments;
          return sW = null !== wQ && null !== TQ && void 0 !== TQ && TQ.Momentum ? 0 !== (GQ.x.playerFlags(wQ.api.apiView, 0) & GQ.ae.Breaking) ? Math.max(0, GQ.x.momentumFrac(wQ.api.apiView, 0)) : Math.max(0, sW - (qQ - FW) / 1500) : 0, FW = qQ, sW
        }
      };
    var IW = XQ(40822);
    const jW = {
      lobbyManage(QQ) {
        var WQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.LobbyManage, QQ)
      }
    };
    var BW = XQ(1273),
      yW = XQ(36809),
      VW = XQ(9168),
      DW = XQ(1698),
      pW = XQ(2506),
      GW = XQ(5146);
    let UW = !1;

    function bW(QQ) {
      UW = QQ
    }

    function vW() {
      "inGame" !== kQ.b.get("gameState") || (0, DW.t)() || PQ.k.mB("ctrlCrouchWithoutFullscreen")
    }
    let dW = !1;
    const HW = {
        OpenEmoteWheel: () => {
          bW(!0), dW = !0, queueMicrotask((() => {
            dW && (dW = !1, PQ.k.mB("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          PQ.k.mB("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, yW.e)() || PQ.k.mB("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, yW.e)() || PQ.k.mB("XKeyPressed")
        },
        CtrlCrouch: vW,
        "primary-fire": () => {
          PQ.k.mB("mouseState", {
            kg: BW.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          PQ.k.mB("mouseState", {
            kg: BW.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          PQ.k.mB("mouseState", {
            kg: BW.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      aW = {
        OpenEmoteWheel: () => {
          bW(!1), dW ? (dW = !1, (0, VW.b)() || PQ.k.mB("requestEmoteWheelHoldOpen")) : PQ.k.mB("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: vW,
        "primary-fire": () => {
          PQ.k.mB("mouseState", {
            kg: BW.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          PQ.k.mB("mouseState", {
            kg: BW.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          PQ.k.mB("mouseState", {
            kg: BW.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let lW = !1;

    function hW() {
      lW || (lW = !0, (0, GW.j)((QQ => {
        if ((0, qQ.c)()) return;
        const WQ = (0, GW.h)(QQ) ? "primary-fire" : QQ.action;
        var XQ;
        if (QQ.down) {
          if (0 === (QQ.flags & pW.e.Synthetic)) {
            var wQ;
            null === (wQ = HW[WQ]) || void 0 === wQ || wQ.call(HW)
          }
        } else null === (XQ = aW[WQ]) || void 0 === XQ || XQ.call(aW)
      })))
    }
    var iW = XQ(382),
      cW = XQ(105),
      AW = XQ(43),
      RW = XQ(41094),
      EW = XQ(1376),
      CW = XQ(2526);
    let uW = !1;
    const LW = {
      sendCodeCollab(QQ) {
        var WQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.CodeCollab, (0, AQ.m)(QQ), (0, CW.d)(QQ))
      }
    };
    var kW = XQ(39373),
      fW = XQ(9101);
    let SW = null,
      tW = !1,
      oW = null;

    function eW() {
      return "inGame" === kQ.b.get("gameState") && !(0, yW.e)()
    }
    const nW = {
        OpenInventory: QQ => {
          (0, DW.A)(QQ, "inventory", (0, IW.k)())
        },
        OpenShop: QQ => {
          SW && eW() && (0, DW.w)(QQ, iW.r.SHOP, !SW.shopIsEmpty(pQ.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: QQ => {
          eW() && (0, DW.w)(QQ, iW.r.LOBBY_LEADERBOARD, (0, kW.b)({
            lobbyLeaderboardInfo: pQ.e.get("lobbyLeaderboardInfo"),
            lobbyManage: pQ.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: QQ => {
          var WQ;
          const XQ = null === (WQ = SW) || void 0 === WQ ? void 0 : WQ.getClientGameMapKey();
          XQ ? (0, DW.C)(QQ, !0, XQ) : (0, DW.A)(QQ, "retentionFeatures", !(!pQ.e.get("_tasks") && !pQ.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: QQ => {
          (0, DW.A)(QQ, "inviteLink", cW.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: QQ => {
          eW() && function(QQ) {
            const WQ = (0, zQ.j)(),
              XQ = null !== WQ && void 0 !== WQ && WQ.isSessionLive ? WQ.api : null,
              wQ = XQ ? XQ.xV(XQ.localId) : null;
            (0, DW.C)(QQ, null !== wQ && (0, CW.c)((0, EW.e)()), (() => {
              (0, CW.h)(wQ)
            }))
          }(QQ)
        },
        HideUi: () => {
          PQ.k.mB("showUi", !1)
        }
      },
      xW = {
        HideUi: () => {
          PQ.k.mB("showUi", !0)
        }
      };

    function YW() {
      tW || (tW = !0, XQ.e(161).then((() => XQ(60851))).then((QQ => {
        SW = QQ
      }), (QQ => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", QQ)
      })), (0, RW.x)((QQ => {
        QQ || !(0, RW.h)() || (0, cW.isMobile)() || !AW.i.getItem("disableFullscreen") || (0, DW.r)() || kQ.b.set({
          openEverythingMenuName: iW.r.SETTINGS
        })
      })), (0, GW.j)((QQ => {
        let {
          action: WQ,
          down: XQ,
          press: wQ
        } = QQ;
        var TQ, zQ;
        (0, qQ.c)() || (XQ ? null === (TQ = nW[WQ]) || void 0 === TQ || TQ.call(nW, function(QQ) {
          var WQ;
          if (0 === QQ || (null === (WQ = oW) || void 0 === WQ ? void 0 : WQ.press) !== QQ) {
            const WQ = {
              press: QQ,
              event: (0, fW.d)("inputAction")
            };
            oW = WQ, queueMicrotask((() => {
              oW === WQ && (oW = null)
            }))
          }
          return oW.event
        }(wQ)) : null === (zQ = xW[WQ]) || void 0 === zQ || zQ.call(xW))
      })))
    }
    var NW = XQ(39301),
      ZW = XQ(39289),
      OW = XQ(39287);
    const KW = {
      completeTask(QQ) {
        var WQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.CompleteTask, (0, AQ.p)(QQ))
      },
      setServerCookie(QQ) {
        var WQ;
        let {
          key: XQ,
          value: wQ
        } = QQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.GeneralCookieSet, (0, AQ.s)({
          Oz: XQ,
          Kz: wQ
        }))
      },
      answerUiRequest(QQ) {
        var WQ;
        let {
          id: XQ,
          yg: wQ
        } = QQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.UiRequestResp, (0, AQ.S)({
          gF: XQ,
          JF: wQ,
          rF: 5
        }))
      },
      chooseRewardedAd(QQ) {
        var WQ;
        let {
          id: XQ,
          yg: wQ
        } = QQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.UiRequestResponded, (0, AQ.Q)({
          id: XQ,
          yg: wQ
        }))
      },
      requestLeaderboard(QQ) {
        var WQ;
        let {
          category: XQ,
          timeframe: wQ,
          seeTop: qQ
        } = QQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.LeaderboardRequest, {
          category: XQ,
          timeframe: wQ,
          seeTop: qQ
        })
      }
    };
    let mW = !1;
    const MW = DQ.h.ny / 2,
      QX = [MW, -MW, -MW, -MW, MW, MW, -MW, MW],
      WX = [0, 0, 0];

    function XX(QQ, WQ, XQ) {
      for (let wQ = 0; wQ < QQ.length; wQ += 2)
        if (QQ[wQ] === WQ && QQ[wQ + 1] === XQ) return !0;
      return !1
    }
    const wX = {
      blocksStandingOn: function() {
        const QQ = (0, zQ.j)();
        if (null === QQ) return [];
        const {
          api: WQ,
          chunks: XQ,
          tables: wQ
        } = QQ;
        if (!WQ.readPosition(WQ.localId, WX)) return [];
        const [qQ, TQ, sQ] = WX, FQ = Math.ceil(TQ) - 1, PQ = [], gQ = [];
        for (let zQ = 0; zQ < QX.length; zQ += 2) {
          const QQ = qQ + QX[zQ],
            WQ = sQ + QX[zQ + 1];
          if (Number.isInteger(QQ) || Number.isInteger(WQ)) continue;
          const TQ = Math.floor(QQ),
            JQ = Math.floor(WQ);
          if (XX(gQ, TQ, JQ)) continue;
          const rQ = XQ.ez(TQ, FQ, JQ);
          wQ.isSolidBlockId(rQ) && (gQ.push(TQ, JQ), PQ.push(wQ.nameOfId(rQ)))
        }
        return PQ
      },
      dropAhead: function() {
        const QQ = (0, zQ.j)();
        return null !== QQ && 0 !== (GQ.x.playerFlags(QQ.api.apiView, 0) & GQ.ae.DropAhead)
      }
    };
    var qX = XQ(37224),
      TX = XQ(39354),
      zX = XQ(1404),
      sX = XQ(40883);
    const FX = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      PX = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function gX() {
      const QQ = new Set;
      return {
        add: WQ => (QQ.add(WQ), () => {
          QQ.delete(WQ)
        }),
        fire() {
          for (const WQ of QQ) WQ()
        }
      }
    }
    const JX = Object.freeze([]);

    function rX(QQ, WQ) {
      let XQ, {
        rereads: wQ,
        followLocalId: qQ
      } = WQ;
      const zQ = () => (XQ = (0, KQ.j)(XQ, QQ()), XQ);
      return {
        current: zQ,
        watch(QQ) {
          const WQ = (0, jQ.d)((WQ => {
            wQ(WQ) && QQ(zQ())
          }));
          if (!qQ) return WQ;
          let XQ = (0, IQ.d)();
          const sQ = (0, TQ.w)((() => {
            const WQ = (0, IQ.d)();
            WQ !== XQ && (XQ = WQ, QQ(zQ()))
          }));
          return () => {
            WQ(), sQ()
          }
        }
      }
    }
    const IX = {
        players: rX((function() {
          const QQ = jQ.f.ids(),
            WQ = {};
          for (const TQ of QQ) {
            var XQ, wQ, qQ;
            WQ[TQ] = {
              name: null !== (XQ = jQ.f.getName(TQ)) && void 0 !== XQ ? XQ : null,
              ranks: null !== (wQ = jQ.f.getSetting(TQ, "ranks")) && void 0 !== wQ ? wQ : JX,
              cosmetics: null !== (qQ = (0, jQ.g)(TQ)) && void 0 !== qQ ? qQ : null
            }
          }
          return {
            ids: QQ,
            byId: WQ,
            localId: (0, IQ.d)()
          }
        }), {
          rereads: QQ => "roster" !== QQ.kind || QQ.members || QQ.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: rX((function() {
          const QQ = {};
          for (const qQ of jQ.f.ids()) {
            var WQ, XQ, wQ;
            QQ[qQ] = {
              colour: null !== (WQ = jQ.f.getSetting(qQ, "colorInLobbyLeaderboard")) && void 0 !== WQ ? WQ : null,
              values: null !== (XQ = jQ.f.getSetting(qQ, "lobbyLeaderboardValues")) && void 0 !== XQ ? XQ : null,
              tags: null !== (wQ = jQ.f.getSetting(qQ, "lobbyLeaderboardTags")) && void 0 !== wQ ? wQ : null
            }
          }
          return QQ
        }), {
          rereads: function(QQ) {
            if ("roster" !== QQ.kind) return "reset" === QQ.kind;
            const {
              members: WQ,
              settings: XQ
            } = QQ;
            return WQ || XQ.has("colorInLobbyLeaderboard") || XQ.has("lobbyLeaderboardValues") || XQ.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      jX = {
        cosmeticsUpdated: {
          watch: QQ => (0, jQ.d)((WQ => {
            if ("cosmetics" !== WQ.kind) return;
            const XQ = (0, IQ.d)();
            QQ(WQ.updates.map((QQ => {
              let {
                vT: WQ,
                dT: wQ,
                HT: qQ
              } = QQ;
              return {
                local: WQ === XQ,
                dT: wQ,
                HT: qQ
              }
            })))
          }))
        }
      };
    var BX = XQ(3158),
      yX = XQ(1802),
      VX = XQ(698),
      DX = XQ(41139);
    let pX = !1,
      GX = null;
    const UX = {
      setShopOpen(QQ) {
        var WQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.ShopMenuChanged, (0, AQ.I)(QQ))
      },
      buyShopItem(QQ) {
        var WQ;
        let {
          categoryKey: XQ,
          itemKey: wQ,
          userInput: qQ
        } = QQ;
        null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.send(AQ.d.ItemBought, {
          categoryKey: XQ,
          itemKey: wQ,
          shopVersion: pQ.e.get("_shopVersion"),
          userInput: qQ
        })
      }
    };
    let bX = !1;
    var vX = XQ(5153);
    const dX = pW.x.LookFrozen | pW.x.ClicksSuppressed;

    function HX(QQ, WQ) {
      var XQ;
      null !== (XQ = (0, zQ.j)()) && void 0 !== XQ && XQ.send(QQ, WQ) || console.warn(`[bloxd-wasm-client] message ${QQ} not sent: no live game or the core's command ring is full`)
    }(0, BQ.j)(cQ.ab, (QQ => {
      const WQ = (0, RQ.d)(cQ.ab, QQ);
      void 0 !== WQ && PQ.k.mB("setDiscordReportKey", WQ)
    }));
    const aX = {
      ignorePlayer(QQ) {
        HX(AQ.d.IgnoreUser, (0, AQ.t)({
          IF: QQ
        }))
      },
      reportPlayer(QQ) {
        let {
          playerId: WQ,
          chatMsgId: XQ,
          mz: wQ,
          details: qQ
        } = QQ;
        HX(AQ.d.UserReport, (0, AQ.bb)({
          Ig: WQ,
          jg: XQ,
          mz: wQ,
          Mz: qQ
        }))
      },
      reportWorldCodeChat(QQ) {
        let {
          chatMsgId: WQ,
          mz: XQ,
          details: wQ
        } = QQ;
        HX(AQ.d.UserReport, (0, AQ.bb)({
          Ig: "",
          jg: WQ,
          mz: XQ,
          Mz: wQ
        }))
      },
      requestDiscordReportKey(QQ) {
        HX(AQ.d.ReqDiscordReportKey, (0, AQ.F)(QQ))
      },
      reportLobbyOrGame(QQ) {
        let {
          target: WQ,
          mz: XQ,
          details: wQ
        } = QQ;
        "customGame" === WQ ? HX(AQ.d.CustomGameReport, (0, AQ.r)({
          mz: XQ,
          Mz: wQ
        })) : HX(AQ.d.LobbyReport, (0, AQ.x)({
          mz: XQ,
          Mz: wQ
        }))
      },
      updateMyCosmetic(QQ) {
        HX(AQ.d.UpdateMyCosmetic, (0, AQ.$)(QQ))
      },
      holdEmoteWheel(QQ) {
        !QQ || UW ? (0, vX.i)(dX, QQ ? dX : 0) : PQ.k.mB("requestEmoteWheelHoldRelease")
      }
    };
    var lX = XQ(41229),
      hX = XQ(9580),
      iX = XQ(39895);
    const cX = [0, 0, 0],
      AX = [0, 0, 0],
      RX = [0, 0, 0],
      EX = {
        blockAtViewPoint(QQ) {
          let {
            x: WQ,
            y: XQ
          } = QQ;
          const wQ = (0, zQ.j)();
          if (null === wQ || void 0 === wQ || !wQ.renderFrame.hasView) return null;
          const {
            renderFrame: qQ,
            clientApi: TQ,
            api: sQ
          } = wQ;
          let FQ = 0;
          return (0, iX.g)(((QQ, WQ, XQ) => (FQ = TQ.getBlockId(QQ, WQ, XQ), 0 !== FQ)), qQ.cameraPosition, (0, iX.j)((QQ => GQ.x.viewProj(sQ.apiView, 0, QQ)), WQ, XQ, cX), iX.e, AX, RX) ? {
            pos: [AX[0], AX[1], AX[2]],
            normal: [RX[0], RX[1], RX[2]],
            name: (0, hX.f)(FQ)
          } : null
        }
      },
      CX = {
        setBlockHighlight(QQ) {
          var WQ;
          null === (WQ = (0, zQ.j)()) || void 0 === WQ || WQ.setBlockHighlight(QQ)
        }
      };
    var uX = XQ(2015),
      LX = XQ(41128),
      kX = XQ(41238),
      fX = XQ(4806),
      SX = XQ(4778),
      tX = XQ(41245),
      oX = XQ(3555),
      eX = XQ(3559);
    let nX = null,
      xX = null;

    function YX(QQ) {
      const WQ = QQ.startsWith(eX.n),
        [XQ, wQ = XQ, qQ = XQ] = (WQ ? QQ.slice(eX.n.length) : QQ).split(eX.k);
      return {
        top: XQ,
        left: wQ,
        right: qQ,
        half: WQ
      }
    }

    function NX(QQ) {
      const WQ = null === nX ? void 0 : (0, oX.c)(QQ),
        XQ = void 0 === WQ ? 0 : nX.codes[WQ];
      return 0 === XQ ? void 0 : nX.pool[XQ - 1]
    }
    var ZX = XQ(3547),
      OX = XQ(4770),
      KX = XQ(4803),
      mX = XQ(41170),
      MX = XQ(41248);
    const Qw = "item:";
    let Ww = null,
      Xw = null,
      ww = null,
      qw = null,
      Tw = !1,
      zw = !1;

    function sw() {
      return zw || (zw = !0, (0, KX.f)().then((QQ => {
        QQ && (0, uX.c)()
      }))), ww ??= Promise.all([(0, ZX.e)(), (xX ??= XQ.e(1).then((() => XQ(60865))).then((QQ => {
        let {
          BLOCK_FACE_RUNS: WQ,
          BLOCK_FACES: XQ,
          MAX_FACE_ITEM_ID: wQ
        } = QQ;
        nX = {
          codes: (0, eX.E)(WQ, wQ + 1),
          pool: XQ.split(eX.v).map(YX)
        }
      }), (QQ => {
        throw xX = null, QQ
      })), xX), (0, MX.f)(), XQ.e(206).then((() => XQ(34529)))]).then((QQ => {
        let [, , WQ, XQ] = QQ;
        WQ.followBundledTextures(), Ww = WQ, Xw = XQ, (0, uX.c)()
      }), (QQ => {
        ww = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", QQ)
      })), ww
    }

    function Fw(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = (0, mX.j)()) || void 0 === XQ ? void 0 : XQ.textureUrl(QQ)) && void 0 !== WQ ? WQ : Ww.itemSpriteUrl(QQ)
    }

    function Pw(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = (0, mX.j)()) || void 0 === XQ ? void 0 : XQ.textureUrl(QQ)) && void 0 !== WQ ? WQ : Ww.blockTextureUrl(QQ)
    }

    function gw(QQ) {
      var WQ;
      return null !== (WQ = (0, ZX.d)(QQ)) && void 0 !== WQ ? WQ : QQ
    }

    function Jw(QQ, WQ) {
      var XQ, wQ, qQ;
      return null !== (XQ = null !== (wQ = null !== (qQ = Pw(QQ)) && void 0 !== qQ ? qQ : null === WQ || void 0 === WQ ? void 0 : WQ.rotated[QQ]) && void 0 !== wQ ? wQ : null === WQ || void 0 === WQ ? void 0 : WQ.animated[QQ]) && void 0 !== XQ ? XQ : Ww.notFoundUrl()
    }

    function rw(QQ) {
      return void 0 !== (0, oX.c)(QQ) ? QQ : /^[1-9][0-9]*$/.test(QQ) ? (0, oX.e)(Number(QQ)) : void 0
    }

    function Iw(QQ) {
      var WQ;
      if (QQ.startsWith(Qw)) {
        var XQ;
        const WQ = (0, ZX.d)(QQ.slice(5));
        return null !== (XQ = void 0 === WQ ? null : Fw(WQ)) && void 0 !== XQ ? XQ : Ww.notFoundUrl()
      }
      return null !== (WQ = Ww.particleUrl(QQ)) && void 0 !== WQ ? WQ : Ww.notFoundUrl()
    }

    function jw(QQ, WQ) {
      return "StairsBlock" === QQ ? QQ : WQ ? "SlabBlock" : "CubeBlock"
    }
    const Bw = {
        async blockIcon(QQ) {
          var WQ;
          let {
            name: wQ,
            size: qQ,
            lineWidth: TQ
          } = QQ;
          await sw();
          const zQ = null !== (WQ = rw(wQ)) && void 0 !== WQ ? WQ : wQ,
            sQ = (0, KX.b)(zQ, qQ, TQ);
          if (null !== sQ) return sQ;
          const FQ = NX(zQ),
            PQ = (0, oX.c)(zQ),
            gQ = void 0 === PQ || null === Xw ? void 0 : Xw.itemTypeNameOf(PQ);
          if (null === Ww || void 0 === FQ) return "";
          const JQ = [FQ.top, FQ.left, FQ.right].some((QQ => null === Pw(QQ))),
            rQ = JQ ? await (qw ??= XQ.e(213).then((() => XQ(34609))).then((QQ => (Tw && (Tw = !1, (0, uX.c)()), {
              rotated: QQ.rotatedBlockTextures,
              animated: QQ.animatedBlockTextures
            })), (QQ => (qw = null, Tw = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", QQ), null))), qw) : null;
          if (JQ && null === rQ) return "";
          const IQ = {
              top: Jw(FQ.top, rQ),
              left: Jw(FQ.left, rQ),
              right: Jw(FQ.right, rQ),
              itemType: jw(gQ, FQ.half)
            },
            jQ = (0, mX.g)(),
            BQ = 0 === jQ ? zQ : `${zQ}#${jQ}`;
          return (await (0, OX.e)()).drawBlockIconUrl(BQ, qQ, TQ, (() => IQ))
        }
      },
      yw = {
        itemIcon: function(QQ) {
          var WQ, XQ, qQ, TQ;
          if (null === Ww) return sw(), wQ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(QQ);
          if ((0, SX.h)(QQ)) return {
            kind: "icon",
            url: null !== (XQ = null !== (qQ = null === (TQ = (0, mX.j)()) || void 0 === TQ ? void 0 : TQ.textureUrl(QQ)) && void 0 !== qQ ? qQ : Ww.ingameIconUrl(QQ)) && void 0 !== XQ ? XQ : Ww.notFoundUrl()
          };
          if (QQ.startsWith(SX.d)) return {
            kind: "icon",
            url: Iw(QQ.slice(SX.d.length))
          };
          if (0 === (0, oX.f)()) return (0, tX.c)(), wQ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(QQ);
          const zQ = null !== (WQ = rw(QQ)) && void 0 !== WQ ? WQ : QQ,
            sQ = (0, oX.c)(zQ),
            FQ = void 0 === sQ ? void 0 : Xw.itemTypeNameOf(sQ);
          if (void 0 !== NX(zQ)) return {
            kind: "drawnBlock"
          };
          const PQ = function(QQ) {
            var WQ;
            return null !== (WQ = Fw(gw(QQ))) && void 0 !== WQ ? WQ : Ww.notFoundUrl()
          }(zQ);
          if ((0, KX.e)(zQ) && ! function(QQ) {
              const WQ = (0, mX.j)();
              return null !== WQ && (null !== WQ.textureUrl(gw(QQ)) || null !== WQ.modelUrl(QQ))
            }(zQ)) return {
            kind: "model",
            url: PQ
          };
          if ("Gun" === FQ) return {
            kind: "gun",
            url: PQ
          };
          if (void 0 !== sQ && "GrayscaleArmour" === Xw.itemTypeOf(sQ) || Object.hasOwn(fX.c, zQ)) {
            var gQ;
            const WQ = null !== (gQ = (0, fX.d)(QQ)) && void 0 !== gQ ? gQ : (0, fX.d)(zQ);
            if (WQ) return {
              kind: "item",
              url: PQ,
              tint: WQ
            }
          }
          return {
            kind: "item",
            url: PQ
          }
        },
        hasIcon: function(QQ) {
          return void 0 !== rw(QQ) || (0, SX.h)(QQ) || QQ.startsWith(SX.d)
        },
        isItemName: function(QQ) {
          return void 0 !== rw(QQ)
        }
      };
    var Vw = XQ(651),
      Dw = XQ(39898);

    function pw(QQ) {
      if (null === QQ || void 0 === QQ || !QQ.isCoreRunning) return null;
      const {
        api: WQ,
        chunks: XQ,
        items: wQ,
        tables: qQ
      } = QQ;
      return {
        playerFeet() {
          const QQ = WQ.xV(WQ.localId);
          return null !== QQ && void 0 !== QQ && QQ.every(Number.isFinite) ? QQ : null
        },
        chunkBlocks: QQ => XQ.isLoaded(QQ[0], QQ[1], QQ[2]) ? (QQ, WQ, wQ) => XQ.ez(QQ, WQ, wQ) : null,
        blockName: QQ => qQ.nameOfId(QQ),
        inventory: () => ({
          slots: wQ.playerItems().map((QQ => QQ ? {
            name: QQ.name,
            amount: QQ.amount
          } : null)),
          heldSlot: wQ.selectedSlot
        }),
        nearby() {
          const XQ = [];
          for (let qQ = 0; qQ < WQ.idStr.length; qQ++) {
            var wQ;
            const TQ = WQ.idStr[qQ],
              zQ = WQ.serverIds[qQ],
              sQ = WQ.kinds[qQ];
            if (null === TQ || WQ.isLocal(zQ) || sQ >>> GQ.e !== GQ.w.Lifeform) continue;
            const FQ = WQ.xV(zQ),
              PQ = Vw.i[sQ & GQ.i];
            FQ && void 0 !== PQ && XQ.push({
              kind: "Player" === PQ ? "player" : PQ,
              name: null !== (wQ = QQ.clientApi.getEntityName(TQ)) && void 0 !== wQ ? wQ : null,
              position: FQ
            })
          }
          return XQ
        },
        droppedItems() {
          let QQ = 0;
          for (let XQ = 0; XQ < WQ.idStr.length; XQ++) null !== WQ.idStr[XQ] && WQ.kinds[XQ] >>> GQ.e === GQ.w.Item && QQ++;
          return QQ
        }
      }
    }
    const Gw = {
        worldCodeAiChunk: QQ => Promise.resolve((0, Dw.b)(pw((0, zQ.j)()), QQ)),
        worldCodeAiGameState: () => Promise.resolve((0, Dw.c)(pw((0, zQ.j)())))
      },
      Uw = function(QQ) {
        const WQ = gX(),
          wQ = gX(),
          qQ = new Set,
          TQ = new Set,
          zQ = () => {
            var WQ, XQ;
            return null !== (WQ = null === (XQ = QQ.runtime()) || void 0 === XQ ? void 0 : XQ.currentViewer) && void 0 !== WQ ? WQ : null
          };
        let sQ = null,
          FQ = null;
        const gQ = (QQ, WQ) => ({
            current: QQ,
            watch(XQ) {
              let wQ = QQ();
              return WQ.add((() => {
                const WQ = QQ();
                WQ !== wQ && (wQ = WQ, XQ(WQ))
              }))
            }
          }),
          rQ = QQ => ({
            watch: WQ => (QQ.add(WQ), () => {
              QQ.delete(WQ)
            })
          }),
          IQ = QQ => {
            const WQ = zQ(),
              XQ = null === WQ || void 0 === WQ ? void 0 : WQ.view;
            WQ && XQ && WQ.seek(Math.max(0, Math.min(XQ.totalTicks - 1, XQ.fJ + QQ * JQ.Kd)))
          },
          jQ = {
            replay: gQ((() => {
              var QQ;
              const WQ = zQ(),
                XQ = null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.view) && void 0 !== QQ ? QQ : null;
              return null === WQ || null === XQ || XQ.state === JQ.td.None ? (sQ = null, null) : (sQ = (0, KQ.j)(sQ, {
                id: WQ.id,
                fJ: XQ.fJ,
                totalTicks: XQ.totalTicks,
                qE: JQ.Kd,
                playing: XQ.state === JQ.td.Playing,
                speed: XQ.speed,
                cameraMode: XQ.cameraMode,
                freecam: "freecam" === XQ.cameraMode
              }), sQ)
            }), WQ),
            replayEdits: gQ((() => {
              var QQ;
              const WQ = zQ(),
                XQ = null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.view) && void 0 !== QQ ? QQ : null;
              return null === WQ || null === XQ || XQ.state === JQ.td.None ? (FQ = null, null) : (FQ = (0, KQ.j)(FQ, {
                cameraKeyframes: [...WQ.keyframes],
                playbackMark: XQ.mark,
                fileName: WQ.fileName,
                unsavedChanges: WQ.unsavedChanges,
                suggestSaveAs: WQ.suggestSaveAs
              }), FQ)
            }), WQ),
            replayRecorder: gQ((() => {
              var WQ, XQ;
              return null !== (WQ = null === (XQ = QQ.runtime()) || void 0 === XQ ? void 0 : XQ.recorder.current) && void 0 !== WQ ? WQ : sX.b.states.replayRecorder.current()
            }), wQ),
            replayVideoExporting: {
              current: TX.d,
              watch: QQ => (0, PQ.o)("replayViewer|videoExportChanged", (() => {
                QQ((0, TX.d)())
              }))
            }
          },
          BQ = {
            replayUiActionRequested: rQ(TQ),
            replayViewerRequested: rQ(qQ)
          },
          yQ = QQ => {
            for (const WQ of qQ) WQ(QQ)
          },
          VQ = () => {
            var wQ;
            !0 === (null === (wQ = zQ()) || void 0 === wQ ? void 0 : wQ.isOpen) && Promise.all([XQ.e(101), XQ.e(69)]).then((() => XQ(60859))).then((XQ => {
              let {
                startWasmReplayVideoExport: wQ
              } = XQ;
              return wQ({
                viewer: zQ,
                canvas: () => {
                  var WQ, XQ;
                  return null !== (WQ = null === (XQ = QQ.canvas) || void 0 === XQ ? void 0 : XQ.call(QQ)) && void 0 !== WQ ? WQ : null
                },
                watchViewer: WQ.add,
                requestViewer: yQ
              })
            }), (QQ => {
              console.error("Couldn't load the video export", QQ), zX.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((QQ => {
              console.error("The video export failed", QQ)
            }))
          },
          DQ = {
            replayAction(QQ) {
              if ((0, TX.d)()) return;
              const WQ = zQ();
              switch (QQ) {
                case "replaySkipBack":
                  IQ(-1);
                  break;
                case "replaySkipForward":
                  IQ(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== WQ && void 0 !== WQ && WQ.view && WQ.setSpeed((0, qX.h)(WQ.view.speed, "replaySpeedUp" === QQ ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === WQ || void 0 === WQ || WQ.addKeyframe()
              }
            },
            setReplayPlaying(QQ) {
              var WQ, XQ;
              (0, TX.d)() || (QQ ? null === (WQ = zQ()) || void 0 === WQ || WQ.play() : null === (XQ = zQ()) || void 0 === XQ || XQ.pause())
            },
            seekReplay(QQ) {
              var WQ;
              let {
                fJ: XQ,
                ignorePlaybackMark: wQ
              } = QQ;
              null === (WQ = zQ()) || void 0 === WQ || WQ.seek(XQ, null !== wQ && void 0 !== wQ && wQ)
            },
            setReplayCameraMode(QQ) {
              var WQ;
              null === (WQ = zQ()) || void 0 === WQ || WQ.setCameraMode(QQ)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(QQ) {
              var WQ;
              null === (WQ = zQ()) || void 0 === WQ || WQ.setKeyframe(QQ)
            },
            moveReplayCameraKeyframe(QQ) {
              var WQ;
              let {
                from: XQ,
                to: wQ
              } = QQ;
              null === (WQ = zQ()) || void 0 === WQ || WQ.moveKeyframe(XQ, wQ)
            },
            deleteReplayCameraKeyframes(QQ) {
              var WQ;
              let {
                start: XQ,
                end: wQ
              } = QQ;
              null === (WQ = zQ()) || void 0 === WQ || WQ.deleteKeyframes(XQ, wQ)
            },
            setReplayPlaybackMark(QQ) {
              var WQ;
              null === (WQ = zQ()) || void 0 === WQ || WQ.setMark(QQ)
            },
            cropReplay(QQ) {
              var WQ, XQ;
              let {
                start: wQ,
                end: qQ
              } = QQ;
              return !(0, TX.d)() && (null !== (WQ = null === (XQ = zQ()) || void 0 === XQ ? void 0 : XQ.crop(wQ, qQ)) && void 0 !== WQ && WQ)
            },
            holdReplayForShaderPackFailure(QQ) {
              const WQ = zQ();
              WQ && (WQ.holdForShaderPackFailure(), function(QQ) {
                XQ.e(119).then((() => XQ(39494))).then((WQ => {
                  let {
                    shaderPackPage: XQ
                  } = WQ;
                  XQ.block(QQ)
                })).catch((QQ => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", QQ)
                }))
              }(QQ))
            },
            exportReplayVideo() {
              VQ()
            },
            toggleRecording() {
              var WQ;
              null === (WQ = QQ.runtime()) || void 0 === WQ || WQ.recorder.toggleRecording()
            },
            saveClip() {
              var WQ;
              null === (WQ = QQ.runtime()) || void 0 === WQ || WQ.recorder.saveClip()
            },
            setRecorderPrefs(WQ) {
              var XQ;
              let {
                clipping: wQ,
                clipSeconds: qQ
              } = WQ;
              null === (XQ = QQ.runtime()) || void 0 === XQ || XQ.recorder.setPrefs(wQ, qQ)
            },
            setReplayViewerOpen(WQ) {
              var XQ;
              (0, yW.f)(WQ) && (null === (XQ = QQ.runtime()) || void 0 === XQ || XQ.recorder.viewerShown(WQ))
            },
            recordFlyingMiddleText(WQ) {
              var XQ;
              let {
                content: wQ,
                lT: qQ,
                angle: TQ,
                hT: zQ
              } = WQ;
              null === (XQ = QQ.runtime()) || void 0 === XQ || XQ.recorder.recordFlyingText(JSON.stringify(wQ), qQ, TQ, zQ)
            },
            dragReplayCamera(WQ) {
              var XQ;
              let {
                dx: wQ,
                dy: qQ
              } = WQ;
              null === (XQ = QQ.freecam()) || void 0 === XQ || XQ.drag(wQ, qQ)
            },
            moveReplayFreecam(WQ) {
              var XQ;
              null === (XQ = QQ.freecam()) || void 0 === XQ || XQ.move(WQ)
            },
            holdReplayFreecamVertical(WQ) {
              var XQ;
              let {
                action: wQ,
                Ds: qQ
              } = WQ;
              null === (XQ = QQ.freecam()) || void 0 === XQ || XQ.holdVertical(wQ, qQ)
            }
          },
          pQ = QQ => {
            var WQ;
            const XQ = zQ(),
              wQ = null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.view) && void 0 !== WQ ? WQ : null;
            FX.has(QQ) ? (QQ => {
              for (const WQ of TQ) WQ(QQ)
            })(QQ) : PX.has(QQ) ? DQ.replayAction(QQ) : "replayPlayPause" === QQ ? XQ && wQ && wQ.state !== JQ.td.None && DQ.setReplayPlaying(wQ.state !== JQ.td.Playing) : "replayChangeCameraMode" === QQ ? null === XQ || void 0 === XQ || XQ.cycleCameraMode() : "replayExit" === QQ ? !0 === (null === XQ || void 0 === XQ ? void 0 : XQ.inPlayback) && (0, EW.n)("/") : "replayExportVideo" === QQ && VQ()
          };
        let GQ = !1;
        return {
          states: jQ,
          events: BQ,
          commands: DQ,
          lookups: {
            replayCamera() {
              var WQ, XQ, wQ;
              return !0 !== (null === (WQ = zQ()) || void 0 === WQ ? void 0 : WQ.isOpen) ? null : null !== (XQ = null === (wQ = QQ.cameraView) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== XQ ? XQ : null
            },
            leaveGameReloadsPage() {
              var QQ;
              return !0 === (null === (QQ = zQ()) || void 0 === QQ ? void 0 : QQ.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var QQ;
              const XQ = !0 === (null === (QQ = zQ()) || void 0 === QQ ? void 0 : QQ.inPlayback);
              XQ !== GQ && (GQ = XQ, PQ.k.mB("connectedGameChanged")), WQ.fire()
            },
            recorderChanged: wQ.fire,
            keyDown: QQ => {
              var WQ;
              switch (QQ) {
                case "recordGame":
                  return void DQ.toggleRecording();
                case "recordClip":
                  return void((0, yW.e)() || DQ.saveClip())
              }(0, TX.d)() || ("replayViewerOpen" !== QQ ? QQ.startsWith("replay") && ((0, yW.e)() || !0 === (null === (WQ = zQ()) || void 0 === WQ ? void 0 : WQ.inPlayback)) && pQ(QQ) : yQ("toggle"))
            }
          }
        }
      }({
        runtime: qQ.f,
        cameraView: () => {
          var QQ;
          const WQ = null === (QQ = (0, zQ.j)()) || void 0 === QQ ? void 0 : QQ.renderFrame;
          if (!WQ) return null;
          const [XQ, wQ, qQ] = WQ.cameraPosition, [TQ, sQ, FQ] = WQ.cameraDirection;
          return {
            position: [XQ, wQ, qQ],
            direction: [TQ, sQ, FQ]
          }
        },
        canvas: () => {
          var QQ, WQ, XQ;
          return null !== (QQ = null === (WQ = (XQ = (0, TQ.H)()).canvas) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : null
        },
        freecam: qQ.e
      }),
      bw = {
        states: {
          ...PW,
          ...IW.j,
          ...Uw.states,
          ...IX,
          ...tQ
        },
        events: {
          ...gW,
          ...yQ,
          ...IW.g,
          ...aQ.b,
          ...lX.i,
          ...Uw.events,
          ...jX,
          ...HQ.f
        },
        commands: {
          ...dQ,
          ...JW,
          ...VQ,
          ...IW.d,
          ...KW,
          ...aX,
          ...HQ.d,
          ...LW,
          ...Uw.commands,
          ...UX,
          ...oQ,
          ...CX,
          ...jW
        },
        queries: {
          ...IW.i,
          ...Gw
        },
        lookups: {
          ...rW,
          ...CQ,
          ...lX.j,
          ...Uw.lookups,
          ...vQ,
          ...wX,
          ...EX,
          ...eQ
        }
      };

    function vw() {
      (0, sQ.d)(BQ.n), (0, qQ.j)(Uw.feed), (0, aQ.f)(), mW || (mW = !0, (0, BQ.j)(cQ.j, (QQ => {
        const WQ = (0, RQ.d)(cQ.j, QQ);
        "string" === typeof WQ && Promise.resolve().then((() => XQ(3881))).then((QQ => {
          let {
            onCosmeticPackGranted: XQ
          } = QQ;
          XQ(WQ)
        }))
      })), (0, BQ.j)(cQ.Y, (QQ => {
        const WQ = (0, RQ.d)(cQ.Y, QQ);
        "number" === typeof WQ && PQ.k.mB("serverUpdating", Date.now() + WQ, !0)
      })), (0, BQ.j)(cQ.C, (QQ => {
        const WQ = (0, RQ.d)(cQ.C, QQ);
        if ((0, RQ.c)(WQ)) {
          const {
            Cq: QQ,
            uq: XQ
          } = WQ;
          (0, ZW.b)({
            Cq: "string" === typeof QQ ? QQ : null,
            uq: "string" === typeof XQ ? XQ : null
          })
        }
      })), (0, BQ.j)(gQ.gc.NewUiRequest, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        (0, RQ.c)(WQ) && "number" === typeof WQ.id && (0, RQ.c)(WQ.clientParameters) && (0, OW.i)(WQ.id, WQ.clientParameters)
      })), (0, BQ.j)(cQ.U, (QQ => {
        const WQ = (0, RQ.d)(cQ.U, QQ);
        "number" === typeof WQ && (0, OW.l)(WQ)
      })), (0, BQ.h)(OW.e), (0, BQ.j)(gQ.gc.UiRequestPopup, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ((0, RQ.c)(WQ) && "number" === typeof WQ.id && "string" === typeof WQ.text) {
          const QQ = WQ.id;
          (0, OW.o)(QQ, WQ.text, !0 === WQ.destructive, (WQ => {
            KW.answerUiRequest({
              id: QQ,
              yg: WQ
            })
          }))
        }
      })), (0, BQ.j)(gQ.gc.TopRightHelper, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        void 0 !== WQ && PQ.k.mB("TopRightHelper", WQ, !0)
      })), (0, BQ.j)(gQ.gc.TaskProgress, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        (0, RQ.c)(WQ) && "string" === typeof WQ.taskId && "number" === typeof WQ.progress && (0, NW.d)({
          taskId: WQ.taskId,
          progress: WQ.progress
        })
      }))), bX || (bX = !0, (0, BQ.j)(cQ.p, (QQ => {
        const WQ = (0, RQ.d)(cQ.p, QQ);
        (0, RQ.c)(WQ) && PQ.k.mB("showShopFromServer", {
          toggle: WQ.sQ,
          FQ: WQ.FQ
        }, !0)
      })), (0, BQ.j)(gQ.gc.OverShopInfo, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        (0, RQ.c)(WQ) && PQ.k.mB("overShopInfo", WQ.info, !0)
      })), (0, BQ.j)(gQ.gc.ShowShopTutorial, (() => {
        PQ.k.mB("showShopTutorial", null, !0)
      }))), pX || (pX = !0, (0, BQ.g)((() => {
        var QQ;
        (0, BX.resetLeaveEvents)(), null === (QQ = GX) || void 0 === QQ || QQ(), GX = (0, BQ.c)() ? (0, VX.f)(BQ.c) : null, (0, BQ.c)() || PQ.k.rV()
      })), (0, BQ.j)(gQ.gc.SetCookie, (QQ => {
        const WQ = (0, RQ.h)(QQ),
          XQ = (0, EW.e)().gameNameWithVariation;
        (0, RQ.c)(WQ) && "string" === typeof WQ.key && null !== XQ && (0, yX.setCookie)(XQ, WQ.key, WQ.value)
      })), (0, BQ.j)(gQ.gc.LeaveValues, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ((0, RQ.c)(WQ) && "string" === typeof WQ.leaveEventType) {
          const {
            leaveEventType: QQ,
            category: XQ,
            subCategory: wQ,
            value: qQ
          } = WQ;
          (0, BX.updateLeaveValue)({
            leaveEventType: QQ,
            category: XQ,
            subCategory: wQ,
            value: qQ
          })
        }
      })), (0, BQ.j)(gQ.gc.CustomAnalyticsEvent, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ((0, RQ.c)(WQ) && "string" === typeof WQ.cat1) {
          const {
            cat1: QQ,
            cat2: XQ,
            cat3: wQ,
            value: qQ
          } = WQ;
          (0, BX.logCustomAnalyticsEvent)({
            cat1: QQ,
            cat2: XQ,
            cat3: wQ,
            value: qQ
          })
        }
      })), (0, BQ.j)(gQ.gc.ProgressionEvent, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ((0, RQ.c)(WQ)) {
          const {
            type: QQ,
            location1: XQ,
            location2: wQ,
            location3: qQ,
            score: TQ
          } = WQ;
          (0, BX.logProgressionEvent)({
            type: QQ,
            location1: XQ,
            location2: wQ,
            location3: qQ,
            score: TQ
          })
        }
      })), (0, BQ.j)(gQ.gc.ResourceEvent, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ((0, RQ.c)(WQ)) {
          const {
            type: QQ,
            resourceType: XQ,
            amount: wQ,
            category: qQ,
            itemName: TQ
          } = WQ;
          (0, BX.logResourceEvent)({
            type: QQ,
            resourceType: XQ,
            amount: wQ,
            category: qQ,
            itemName: TQ
          })
        }
      })), (0, BQ.j)(gQ.gc.LeaderboardResponse, (QQ => {
        const WQ = (0, RQ.h)(QQ);
        if ((0, RQ.c)(WQ)) {
          const {
            category: QQ,
            timeframe: XQ,
            data: wQ
          } = WQ;
          PQ.k.mB("leaderboardResponse", {
            category: QQ,
            timeframe: XQ,
            data: wQ
          })
        }
      })), (0, BQ.j)(cQ.x, (QQ => {
        const WQ = (0, RQ.d)(cQ.x, QQ);
        "string" === typeof WQ && (0, DX.e)(QQ.conn, WQ)
      })), (0, BQ.j)(cQ.A, (QQ => {
        const WQ = (0, RQ.d)(cQ.A, QQ);
        "string" === typeof WQ && console.error(`[logErrorToConsole]: ${WQ}`)
      }))), LQ(), (0, lX.e)(), uW || (uW = !0, (0, BQ.j)(cQ.h, (QQ => {
        const WQ = (0, RQ.d)(cQ.h, QQ);
        void 0 !== WQ && (0, CW.k)(WQ)
      }))), YW(), hW(), YQ || (YQ = !0, (0, TQ.t)(NQ)), wQ.gameBridge.attach(bw), (0, wQ.installPageSources)({
        commands: {
          ...wQ.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: LX.j
        },
        queries: Bw,
        lookups: {
          ...wQ.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...yw,
          qD: LX.e,
          drawCallStats: kX.g
        }
      }), (0, uX.c)(), sw()
    }
  },
  41170: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      g: () => FQ,
      j: () => sQ,
      m: () => PQ
    });
    var wQ = XQ(2015);
    let qQ = null,
      TQ = 0;
    const zQ = new Set;

    function sQ() {
      return qQ
    }

    function FQ() {
      return TQ
    }

    function PQ(QQ) {
      qQ = QQ, TQ++, (0, wQ.c)();
      for (const WQ of zQ) WQ()
    }

    function gQ(QQ) {
      zQ.add(QQ)
    }
  },
  41248: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      f: () => sQ
    });
    var wQ = XQ(41255);
    let qQ = null,
      TQ = null;

    function zQ() {
      return qQ ??= XQ.e(64).then((() => XQ(60868))).catch((QQ => {
        throw qQ = null, QQ
      })), qQ
    }

    function sQ() {
      return TQ ??= Promise.all([zQ(), (0, wQ.g)()]).then((QQ => {
        let [WQ] = QQ;
        return WQ
      }), (QQ => {
        throw TQ = null, QQ
      })), TQ
    }
  },
  37343: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = {
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
  39311: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      f: () => qQ
    });
    const wQ = ["description", "label"];

    function qQ(QQ) {
      const WQ = QQ.type;
      return {
        type: WQ,
        params: QQ[WQ]
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);