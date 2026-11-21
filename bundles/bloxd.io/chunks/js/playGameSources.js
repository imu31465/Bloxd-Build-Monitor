export const id = 46;
export const ids = [46];
export const modules = {
  39162: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      h: () => oQ,
      l: () => qQ
    });
    const LQ = 6e3;

    function qQ(QQ, FQ) {
      return [Math.floor(QQ[0] / FQ) * FQ, Math.floor(QQ[1] / FQ) * FQ, Math.floor(QQ[2] / FQ) * FQ]
    }

    function oQ(QQ) {
      const FQ = (null !== QQ && void 0 !== QQ ? QQ : "").match(/-?\d+(?:\.\d+)?/g);
      return FQ && FQ.length >= 3 ? [Number(FQ[0]), Number(FQ[1]), Number(FQ[2])] : null
    }

    function DQ(QQ, FQ) {
      return QQ === FQ ? String(QQ) : `${QQ}-${FQ}`
    }

    function kQ(QQ, FQ, wQ, LQ) {
      const qQ = [];
      let oQ = new Map;
      for (let DQ = QQ[2]; DQ < QQ[2] + FQ; DQ++) {
        const kQ = new Map;
        let vQ = QQ[0];
        for (; vQ < QQ[0] + FQ;) {
          const qQ = LQ(vQ, wQ, DQ);
          let mQ = vQ;
          for (; mQ + 1 < QQ[0] + FQ && LQ(mQ + 1, wQ, DQ) === qQ;) mQ++;
          if (null !== qQ) {
            const QQ = `${vQ} ${mQ} ${qQ}`,
              FQ = oQ.get(QQ);
            FQ ? (FQ.z1 = DQ, oQ.delete(QQ), kQ.set(QQ, FQ)) : kQ.set(QQ, {
              x0: vQ,
              x1: mQ,
              z0: DQ,
              z1: DQ,
              name: qQ
            })
          }
          vQ = mQ + 1
        }
        qQ.push(...oQ.values()), oQ = kQ
      }
      return qQ.push(...oQ.values()), qQ.sort(((QQ, FQ) => QQ.z0 - FQ.z0 || QQ.x0 - FQ.x0)).map((QQ => `x${DQ(QQ.x0,QQ.x1)} z${DQ(QQ.z0,QQ.z1)} ${QQ.name}`))
    }

    function vQ(QQ, FQ, wQ, qQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : LQ;
      const vQ = [QQ[0] + FQ - 1, QQ[1] + FQ - 1, QQ[2] + FQ - 1],
        mQ = null !== qQ && qQ.every(((FQ, wQ) => Math.floor(FQ) >= QQ[wQ] && Math.floor(FQ) <= vQ[wQ])),
        uQ = [`The chunk from ${QQ.join(" ")} to ${vQ.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== qQ && uQ.push(`The player's feet are at ${qQ.map(Math.floor).join(" ")}, ${mQ?"in this chunk":"outside this chunk"}.`);
      const HQ = [];
      for (let LQ = QQ[1]; LQ <= vQ[1]; LQ++) {
        const qQ = kQ(QQ, FQ, LQ, wQ).join("; "),
          oQ = HQ[HQ.length - 1];
        (null === oQ || void 0 === oQ ? void 0 : oQ.boxes) === qQ ? oQ.to = LQ : HQ.push({
          from: LQ,
          to: LQ,
          boxes: qQ
        })
      }
      const bQ = HQ.filter((QQ => "" !== QQ.boxes));
      0 === bQ.length && uQ.push("It is all air.");
      let YQ = uQ.join("\n").length;
      for (const LQ of bQ) {
        const QQ = `y${DQ(LQ.from,LQ.to)}: ${LQ.boxes}`;
        if (YQ += QQ.length + 1, YQ > oQ) {
          uQ.push(`Cut short: the layers from y${LQ.from} up aren't shown, as there are too many blocks.`);
          break
        }
        uQ.push(QQ)
      }
      return uQ.join("\n")
    }
  },
  8541: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ
    });
    var LQ = wQ(17);

    function qQ() {
      return !LQ.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36573: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      h: () => oQ,
      l: () => qQ
    });
    const LQ = [.25, .5, 1, 2, 4, 8, 16];

    function qQ(QQ, FQ) {
      const wQ = LQ;
      let qQ = wQ.indexOf(QQ);
      return -1 === qQ && (qQ = wQ.findIndex((FQ => FQ >= QQ)), -1 === qQ && (qQ = wQ.length - 1)), "up" === FQ ? wQ[Math.min(qQ + 1, wQ.length - 1)] : wQ[Math.max(qQ - 1, 0)]
    }

    function oQ(QQ) {
      return QQ <= LQ[0]
    }

    function DQ(QQ) {
      return QQ >= LQ[LQ.length - 1]
    }
  },
  36128: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      e: () => oQ
    });
    let LQ = !1;

    function qQ() {
      return LQ
    }

    function oQ(QQ) {
      return LQ !== QQ && (LQ = QQ, !0)
    }
  },
  38508: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(22),
      qQ = wQ(1911);

    function oQ(QQ) {
      let {
        taskId: FQ,
        progress: wQ
      } = QQ;
      const LQ = qQ.b.get("_tasks");
      null !== LQ && void 0 !== LQ && LQ[FQ] && qQ.b.apply({
        _tasks: {
          ...LQ,
          [FQ]: {
            ...LQ[FQ],
            progress: wQ
          }
        }
      })
    }
    LQ.l.subscribe("clientTaskProgress", (QQ => {
      oQ(QQ)
    }))
  },
  39126: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      d: () => xQ,
      h: () => mQ,
      j: () => HQ,
      m: () => vQ,
      q: () => DQ,
      u: () => uQ,
      x: () => AQ
    });
    var LQ = wQ(1911),
      qQ = wQ(22),
      oQ = wQ(1919);
    const DQ = (0, oQ.n)((function() {
        var QQ, FQ, wQ, qQ;
        return {
          health: null !== (QQ = LQ.b.get("_health")) && void 0 !== QQ ? QQ : null,
          maxHealth: null !== (FQ = LQ.b.get("_totalMaxHealth")) && void 0 !== FQ ? FQ : null,
          shield: null !== (wQ = LQ.b.get("_shield")) && void 0 !== wQ ? wQ : null,
          maxShield: null !== (qQ = LQ.b.get("maxShield")) && void 0 !== qQ ? qQ : null
        }
      }), [], (0, oQ.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      kQ = [{
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

    function vQ(QQ, FQ) {
      return kQ[(QQ ? 2 : 0) + (FQ ? 1 : 0)]
    }
    const mQ = (0, oQ.n)((function() {
      var QQ;
      return null !== (QQ = LQ.b.get("_aura")) && void 0 !== QQ ? QQ : null
    }), [], (0, oQ.k)("_aura"));

    function uQ(QQ) {
      return {
        watch: FQ => (0, qQ.o)("shotPlayer", (wQ => {
          let {
            playerId: LQ,
            damage: qQ,
            wasCrit: oQ,
            distance: DQ
          } = wQ;
          QQ(LQ) && FQ({
            damage: qQ,
            wasCrit: oQ,
            distance: DQ
          })
        }))
      }
    }

    function HQ(QQ) {
      return (0, oQ.b)("chat", (FQ => {
        let {
          serverChatMsgId: wQ,
          content: LQ,
          chatterEId: qQ
        } = FQ;
        return {
          serverChatMsgId: null !== wQ && void 0 !== wQ ? wQ : null,
          content: LQ,
          author: qQ ? QQ(qQ) : null
        }
      }))
    }
    class bQ {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const wQ = this.shown;
        return QQ !== this.needed && (this.needed = QQ, this.neededSince = FQ, null === QQ && (this.shown = null)), this.shown !== this.needed && FQ - this.neededSince > 200 && (this.shown = this.needed), this.shown !== wQ
      }
    }

    function YQ(QQ) {
      return [{
        translationKey: `touchKeys:${QQ}`
      }]
    }
    const xQ = {
      open: YQ("open"),
      close: YQ("close"),
      milk: YQ("milk"),
      shear: YQ("shear"),
      tame: YQ("tame"),
      feed: YQ("feed"),
      ride: YQ("ride")
    };

    function AQ(QQ) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: QQ
      }]
    }
  },
  40188: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      g: () => DQ
    });
    var LQ = wQ(3158);
    let qQ = null,
      oQ = null;

    function DQ() {
      return oQ ??= wQ.e(209).then((() => wQ(35973))).then((QQ => {
        let {
          ITEM_SPRITES: FQ,
          ITEM_SPRITES_WITHOUT_FILE: wQ,
          ITEM_FILES_WITHOUT_SPRITE: oQ
        } = QQ;
        qQ = function(QQ, FQ, wQ) {
          const qQ = new Set,
            oQ = (0, LQ.x)(FQ);
          let DQ = 0;
          for (const [LQ, kQ] of QQ.entries()) LQ === oQ[DQ] ? DQ++ : qQ.add(kQ);
          if ("" !== wQ)
            for (const kQ of wQ.split(LQ.s)) qQ.add(kQ);
          return qQ
        }(FQ.split(LQ.s), wQ, oQ)
      }), (QQ => {
        throw oQ = null, QQ
      })), oQ
    }

    function kQ(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = qQ) || void 0 === wQ ? void 0 : wQ.has(QQ)) && void 0 !== FQ && FQ
    }
  },
  39146: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => oQ,
      g: () => qQ
    });
    const LQ = 128;

    function qQ(QQ, FQ, wQ, LQ) {
      const qQ = 2 * FQ - 1,
        oQ = 1 - 2 * wQ,
        DQ = QQ(0) - qQ * QQ(3),
        kQ = QQ(4) - qQ * QQ(7),
        vQ = QQ(8) - qQ * QQ(11),
        mQ = QQ(1) - oQ * QQ(3),
        uQ = QQ(5) - oQ * QQ(7),
        HQ = QQ(9) - oQ * QQ(11);
      LQ[0] = kQ * HQ - vQ * uQ, LQ[1] = vQ * mQ - DQ * HQ, LQ[2] = DQ * uQ - kQ * mQ;
      const bQ = LQ[0] * QQ(3) + LQ[1] * QQ(7) + LQ[2] * QQ(11) < 0 ? -1 : 1,
        YQ = Math.hypot(LQ[0], LQ[1], LQ[2]) * bQ;
      return LQ[0] /= YQ, LQ[1] /= YQ, LQ[2] /= YQ, LQ
    }

    function oQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = [Math.floor(FQ[0]), Math.floor(FQ[1]), Math.floor(FQ[2])],
        kQ = [0, 0, 0],
        vQ = [1 / 0, 1 / 0, 1 / 0],
        mQ = [1 / 0, 1 / 0, 1 / 0];
      for (let bQ = 0; bQ < 3; bQ++) kQ[bQ] = Math.sign(wQ[bQ]), 0 !== kQ[bQ] && (mQ[bQ] = Math.abs(1 / wQ[bQ]), vQ[bQ] = (DQ[bQ] + (kQ[bQ] > 0 ? 1 : 0) - FQ[bQ]) / wQ[bQ]);
      let uQ = 0,
        HQ = Math.abs(wQ[0]) > Math.abs(wQ[1]) ? 0 : 1;
      for (Math.abs(wQ[2]) > Math.abs(wQ[HQ]) && (HQ = 2); uQ <= LQ;) {
        if (QQ(DQ[0], DQ[1], DQ[2])) return qQ[0] = DQ[0], qQ[1] = DQ[1], qQ[2] = DQ[2], oQ[0] = 0, oQ[1] = 0, oQ[2] = 0, oQ[HQ] = -kQ[HQ], !0;
        HQ = vQ[0] < vQ[1] ? 0 : 1, vQ[2] < vQ[HQ] && (HQ = 2), uQ = vQ[HQ], DQ[HQ] += kQ[HQ], vQ[HQ] += mQ[HQ]
      }
      return !1
    }
  },
  39119: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      return Math.hypot(QQ[0] - FQ[0], QQ[1] - FQ[1], QQ[2] - FQ[2]) < wQ + .5
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  38520: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ
    });
    var LQ = wQ(1237),
      qQ = wQ(1342),
      oQ = wQ(17),
      DQ = wQ(1326),
      kQ = wQ(1339),
      vQ = wQ(1503),
      mQ = wQ(36110);

    function uQ(QQ) {
      let {
        qQ: FQ,
        oQ: wQ
      } = QQ;
      const uQ = null !== FQ && void 0 !== FQ ? FQ : (0, kQ.c)().gameNameWithVariation;
      (0, LQ.O)(uQ) && ((0, mQ.j)(), (0, DQ.fb)((() => {
        console.log("Received matchmaking order from game server to game", FQ), (0, oQ.k)("inGameReplay"), (0, vQ.navigatePreserveSearch)((0, qQ.e)(uQ, null !== wQ && void 0 !== wQ ? wQ : void 0))
      }), "video_start"))
    }
  },
  38705: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(22),
      qQ = wQ(1940);

    function oQ(QQ) {
      var FQ, wQ;
      const oQ = (0, qQ.l)(null !== (FQ = null === (wQ = qQ.u.toggleFreeCam) || void 0 === wQ ? void 0 : wQ[0]) && void 0 !== FQ ? FQ : null);
      LQ.l.GA("showBottomMessage", {
        message: `Free Camera ${QQ?"Enabled":"Disabled"}${oQ?` - Press ${oQ} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38510: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ,
      f: () => DQ,
      h: () => kQ,
      i: () => mQ
    });
    var LQ = wQ(22),
      qQ = wQ(1362);
    const oQ = new Map;

    function DQ(QQ, FQ) {
      LQ.l.GA("newUiRequest", {
        id: QQ,
        clientParameters: FQ
      }, !0)
    }

    function kQ(QQ) {
      LQ.l.GA("removeUiRequest", QQ, !0);
      const FQ = oQ.get(QQ);
      FQ && (FQ.tearDownNotification(), oQ.delete(QQ))
    }

    function vQ() {
      LQ.l.GA("clearUiRequests");
      for (const QQ of oQ.values()) QQ.tearDownNotification();
      oQ.clear()
    }

    function mQ(QQ, FQ, wQ) {
      const LQ = qQ.NotificationProvider.showPromptPopup({
        title: FQ,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      oQ.set(QQ, LQ), LQ.getResult().then((FQ => {
        oQ.delete(QQ), "notificationTornDown" !== FQ && wQ(FQ)
      }))
    }
  },
  39153: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => HQ,
      h: () => bQ
    });
    var LQ = wQ(201),
      qQ = wQ(39162);
    const oQ = 20;

    function DQ(QQ) {
      return QQ.map(Math.floor).join(" ")
    }

    function kQ(QQ) {
      return null === QQ.amount || 1 === QQ.amount ? QQ.name : `${QQ.amount} ${QQ.name}`
    }
    var vQ = wQ(39168),
      mQ = wQ(1911),
      uQ = wQ(1339);

    function HQ(QQ, FQ) {
      if (!QQ) return vQ.d;
      const wQ = QQ.playerFeet();
      if (!wQ) return "The player isn't in the world yet, so no blocks can be seen.";
      const oQ = LQ.e.tx,
        DQ = (0, qQ.l)(null !== FQ && void 0 !== FQ ? FQ : wQ, oQ),
        kQ = QQ.chunkBlocks(DQ);
      return kQ ? (0, qQ.e)(DQ, oQ, ((FQ, wQ, LQ) => {
        const qQ = kQ(FQ, wQ, LQ);
        return 0 === qQ ? null : QQ.blockName(qQ).split("|")[0]
      }), wQ) : `The chunk from ${DQ.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${wQ.map(Math.floor).join(" ")}.`
    }

    function bQ(QQ) {
      var FQ, wQ, LQ;
      if (!QQ) return vQ.h;
      const qQ = QQ.playerFeet();
      if (!qQ) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: HQ,
        heldSlot: bQ
      } = QQ.inventory();
      return function(QQ) {
        const FQ = [];
        null !== QQ.game && FQ.push(`Game: ${QQ.game}.`);
        const wQ = null === QQ.health ? "" : `, health ${Math.round(QQ.health)}${null===QQ.maxHealth?"":` of ${Math.round(QQ.maxHealth)}`}`;
        FQ.push(`The player (the creator) stands at ${DQ(QQ.position)}${wQ}, ${QQ.creative?"in":"not in"} creative mode.`);
        const LQ = QQ.slots[QQ.heldSlot];
        FQ.push(LQ ? `Holding (slot ${QQ.heldSlot}): ${kQ(LQ)}.` : `Holding nothing (slot ${QQ.heldSlot} is empty).`);
        const qQ = QQ.slots.flatMap(((QQ, FQ) => QQ ? [`slot ${FQ}: ${kQ(QQ)}`] : []));
        FQ.push(qQ.length > 0 ? `Inventory: ${qQ.join(", ")}.` : "Inventory: empty.");
        const vQ = FQ => Math.hypot(FQ.position[0] - QQ.position[0], FQ.position[1] - QQ.position[1], FQ.position[2] - QQ.position[2]),
          mQ = [...QQ.nearby].sort(((QQ, FQ) => vQ(QQ) - vQ(FQ)));
        if (0 === mQ.length) FQ.push("No other players or mobs are near enough to see.");
        else {
          FQ.push("Near them, nearest first:");
          for (const QQ of mQ.slice(0, oQ)) {
            const wQ = "player" === QQ.kind ? `player "${QQ.name||"?"}"` : QQ.name && QQ.name !== QQ.kind ? `${QQ.kind} "${QQ.name}"` : QQ.kind,
              LQ = Math.round(vQ(QQ));
            FQ.push(`- ${wQ} at ${DQ(QQ.position)}, ${LQ} block${1===LQ?"":"s"} away`)
          }
          mQ.length > oQ && FQ.push(`- and ${mQ.length-oQ} more further away`)
        }
        return QQ.droppedItems > 0 && FQ.push(`${QQ.droppedItems} dropped item${1===QQ.droppedItems?" is":"s are"} on the ground nearby.`), FQ.join("\n")
      }({
        game: null !== (FQ = (0, uQ.c)().gameNameWithVariation) && void 0 !== FQ ? FQ : null,
        position: qQ,
        health: null !== (wQ = mQ.b.get("_health")) && void 0 !== wQ ? wQ : null,
        maxHealth: null !== (LQ = mQ.b.get("_totalMaxHealth")) && void 0 !== LQ ? LQ : null,
        creative: !0 === mQ.b.get("creative"),
        heldSlot: bQ,
        slots: HQ,
        nearby: QQ.nearby(),
        droppedItems: QQ.droppedItems()
      })
    }
  },
  38542: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      e: () => vQ,
      h: () => mQ
    });
    var LQ = wQ(1237),
      qQ = wQ(1038),
      oQ = wQ(36483),
      DQ = wQ(22);

    function kQ(QQ) {
      let {
        lobbyName: FQ,
        gameNameWithVariation: wQ
      } = QQ;
      return !(0, LQ.S)(FQ) || null !== wQ && (wQ.startsWith("testGym") || (0, qQ.f)(wQ))
    }

    function vQ(QQ) {
      return QQ.RF === oQ.d.Leave || QQ.RF === oQ.d.Cursor
    }

    function mQ(QQ) {
      DQ.l.GA("codeCollab", {
        type: QQ.RF,
        docKey: QQ.OF,
        version: QQ.sF,
        editorCount: QQ.rF,
        peers: QQ.IF,
        updates: QQ.UF,
        playerId: QQ.NF,
        playerName: QQ.TF,
        colour: QQ.KF,
        anchor: QQ.zF,
        head: QQ.lF,
        existingCursors: QQ.jF,
        files: QQ.aF,
        engineSettings: QQ.XF
      })
    }
  },
  40145: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => zQ,
      E: () => rQ,
      F: () => KQ,
      J: () => sQ,
      K: () => JQ,
      N: () => hQ,
      Q: () => UQ,
      d: () => EQ,
      e: () => jQ,
      f: () => RQ,
      i: () => nQ,
      k: () => OQ,
      o: () => WQ,
      r: () => lQ,
      v: () => IQ,
      x: () => TQ,
      y: () => NQ,
      z: () => ZQ
    });
    var LQ = wQ(1395),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(2313),
      kQ = wQ(4657),
      vQ = wQ(4621);
    let mQ, uQ = !1,
      HQ = !1,
      bQ = !1,
      YQ = !1;
    const xQ = 1300,
      AQ = 3e3;
    let tQ = 0,
      eQ = !1,
      MQ = !1,
      GQ = 0;
    const pQ = 2;
    let cQ = !1,
      CQ = !1;
    const SQ = new Set,
      iQ = new Set;

    function WQ() {
      return uQ
    }

    function RQ() {
      return MQ
    }

    function OQ() {
      return CQ
    }

    function sQ() {
      return (0, oQ.p)() && !CQ
    }

    function rQ(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (QQ !== CQ) {
        CQ = QQ;
        for (const QQ of [...iQ]) QQ(CQ);
        FQ && hQ()
      }
    }

    function IQ(QQ) {
      return iQ.add(QQ), () => {
        iQ.delete(QQ)
      }
    }

    function UQ() {
      (0, kQ.i)(DQ.w.Menu, (0, oQ.p)() ? 0 : DQ.w.Menu)
    }

    function NQ() {
      MQ = !1, GQ = 0, UQ(), hQ()
    }

    function TQ(QQ) {
      return SQ.add(QQ), () => {
        SQ.delete(QQ)
      }
    }

    function KQ(QQ) {
      HQ = !1, QQ !== uQ && (uQ = QQ, YQ = !1, clearTimeout(mQ), bQ = !uQ && cQ, uQ ? (eQ = !1, MQ = !1, GQ = 0) : sQ() && !cQ && (MQ = !0), cQ = !1, uQ && !sQ() && PQ(), yQ(), bQ && hQ())
    }

    function zQ(QQ) {
      QQ !== eQ && (eQ = QQ, QQ || hQ())
    }

    function lQ() {
      HQ = !1, YQ || !0 !== fQ() || (YQ = !0, clearTimeout(mQ), mQ = setTimeout(aQ, xQ))
    }

    function jQ() {
      return (!HQ || performance.now() - tQ > AQ) && (HQ = (0, vQ.H)().lockPointer(), tQ = performance.now()), HQ
    }

    function aQ() {
      XQ() && VQ() && jQ()
    }

    function XQ() {
      return sQ() && !uQ && !eQ && !(0, LQ.d)()
    }

    function fQ() {
      var QQ;
      return "undefined" === typeof navigator || null === (QQ = navigator.userActivation) || void 0 === QQ ? void 0 : QQ.isActive
    }

    function VQ() {
      return bQ && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== fQ()
    }

    function hQ() {
      sQ() ? XQ() && !MQ && VQ() && jQ() : uQ && !cQ && PQ()
    }

    function JQ() {
      MQ ? navigator.vendor.startsWith("Apple") ? gQ() : GQ = pQ : hQ()
    }

    function EQ() {
      GQ > 0 && 0 === --GQ && gQ()
    }

    function nQ() {
      GQ = 0
    }

    function gQ() {
      XQ() && !0 === fQ() && jQ()
    }

    function PQ() {
      cQ = !0, (0, vQ.H)().unlockPointer()
    }

    function ZQ() {
      HQ = !1, bQ = !1, YQ = !1, clearTimeout(mQ), eQ = !1, MQ = !1, GQ = 0, cQ = !1;
      const QQ = uQ;
      uQ = !1, QQ && yQ()
    }

    function yQ() {
      for (const QQ of [...SQ]) QQ(uQ);
      qQ.l.GA("pointerLockUpdate", uQ)
    }
  },
  40108: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      f: () => kQ,
      h: () => HQ,
      k: () => mQ,
      l: () => DQ,
      m: () => uQ,
      q: () => vQ
    });
    let LQ = null,
      qQ = null,
      oQ = null;

    function DQ(QQ) {
      LQ = QQ
    }

    function kQ() {
      return LQ
    }

    function vQ(QQ) {
      qQ = QQ
    }

    function mQ() {
      return qQ
    }

    function uQ(QQ) {
      oQ = QQ
    }

    function HQ() {
      return oQ
    }

    function bQ() {
      var QQ, FQ;
      return !0 === (null === (QQ = qQ) || void 0 === QQ || null === (FQ = QQ.currentViewer) || void 0 === FQ ? void 0 : FQ.inPlayback)
    }
  },
  40103: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      attachPlayGameSources: () => SL,
      playGameSources: () => CL
    });
    var LQ = wQ(1897),
      qQ = wQ(40108),
      oQ = wQ(4621),
      DQ = wQ(40009),
      kQ = wQ(40117),
      vQ = wQ(39126),
      mQ = wQ(22),
      uQ = wQ(4638),
      HQ = wQ(4632),
      bQ = wQ(40047),
      YQ = wQ(40074),
      xQ = wQ(40123),
      AQ = wQ(40056);
    (0, AQ.h)(uQ.rc.Chat, (QQ => {
      if (QQ.payloadKind !== HQ.Zb.Msgpack) return;
      const FQ = function(QQ) {
        if (null === QQ || "object" !== typeof QQ || !("content" in QQ)) return null;
        const {
          chatMsgId: FQ,
          content: wQ,
          chatterEId: LQ
        } = QQ;
        return {
          serverChatMsgId: null !== FQ && void 0 !== FQ ? FQ : void 0,
          content: wQ,
          chatterEId: void 0 === LQ || null === LQ ? void 0 : String(LQ)
        }
      }((0, bQ.d)(QQ.payload));
      null !== FQ && mQ.l.GA("chat", FQ, !0)
    }));
    const tQ = {
        chatReceived: (0, vQ.j)((function(QQ) {
          var FQ, wQ, LQ;
          return {
            id: QQ,
            name: null !== (FQ = xQ.h.getName(QQ)) && void 0 !== FQ ? FQ : null,
            local: (0, YQ.f)() === QQ,
            profileEffect: null !== (wQ = null === (LQ = (0, xQ.k)(QQ)) || void 0 === LQ ? void 0 : LQ.profileEffect) && void 0 !== wQ ? wQ : null
          }
        }))
      },
      eQ = {
        sendChatMessage(QQ) {
          var FQ;
          let {
            Om: wQ,
            channelName: LQ
          } = QQ;
          null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.clientApi.sendChat(wQ, LQ)
        }
      };
    var MQ = wQ(201),
      GQ = wQ(1911),
      pQ = wQ(40003),
      cQ = wQ(39119);
    const CQ = [0, 0, 0],
      SQ = {
        codeBlockClickable(QQ) {
          var FQ;
          const wQ = (0, DQ.k)();
          if (null === wQ || void 0 === wQ || !wQ.isSessionLive) return !1;
          const LQ = wQ.api;
          if (0 !== (pQ.v.playerFlags(LQ.apiView, 0) & pQ.Gd.Crouching)) return !1;
          const qQ = LQ.queries.directorEntity(LQ.localId) >= pQ.Bb.BYTES ? LQ.memoryData(LQ.scratch(), pQ.Bb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === qQ) return !1;
          for (let oQ = 0; oQ < 3; oQ++) CQ[oQ] = pQ.Bb.feet(qQ, 0, oQ);
          return CQ[1] += pQ.Bb.eyeHeight(qQ, 0), (0, cQ.c)(CQ, QQ, null !== (FQ = GQ.b.get("blockReach")) && void 0 !== FQ ? FQ : MQ.e.sG)
        }
      },
      iQ = {
        clickCodeBlock(QQ) {
          var FQ;
          null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.clickCodeBlock(QQ)
        }
      };
    var WQ = wQ(40023),
      RQ = wQ(40127),
      OQ = wQ(1038),
      sQ = wQ(38585),
      rQ = wQ(4619),
      IQ = wQ(40031),
      UQ = wQ(40018),
      NQ = wQ(40040);

    function TQ(QQ) {
      if (null === QQ) return null;
      const FQ = [];
      for (const wQ of QQ) {
        const QQ = Object.keys(wQ)[0];
        if ("iw" === QQ) {
          const {
            str: QQ,
            style: LQ,
            clickableUrl: qQ
          } = wQ.iw, oQ = Object.keys(QQ)[0], DQ = QQ[oQ];
          "string" !== oQ && "styledEntityName" !== oQ && "styledTranslatedText" !== oQ || FQ.push({
            str: DQ,
            style: LQ,
            clickableUrl: qQ
          })
        } else FQ.push(wQ[QQ])
      }
      return FQ
    }
    const KQ = {
      screenPos(QQ) {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = (0, DQ.k)()) || void 0 === wQ ? void 0 : wQ.renderFrame.projectWorldPosToScreenPos(QQ)) && void 0 !== FQ ? FQ : {
          x: 0,
          y: 0
        }
      }
    };
    let zQ = !1;

    function lQ() {
      zQ || (zQ = !0, (0, AQ.h)(uQ.rc.ProgressBarUpdate, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        (0, NQ.e)(FQ) && mQ.l.GA("progressBarUpdate", FQ, !0)
      })), (0, AQ.h)(IQ.v, (QQ => {
        const FQ = (0, NQ.h)(IQ.v, QQ);
        FQ && mQ.l.GA("middleScreenBarInitiate", {
          duration: FQ.kF,
          vF: FQ.vF,
          horizBarRemOffset: FQ.mF
        }, !0)
      })), (0, AQ.h)(uQ.rc.RemoveMiddleScreenBar, (() => {
        mQ.l.GA("middleScreenBarRemove")
      })), (0, AQ.h)(IQ.ab, (QQ => {
        const FQ = (0, NQ.h)(IQ.ab, QQ);
        if (FQ) {
          var wQ;
          const QQ = FQ.WQ ? null === (wQ = (0, DQ.k)()) || void 0 === wQ ? void 0 : wQ.renderFrame.projectDirectionToScreenPos(FQ.WQ) : void 0;
          mQ.l.GA("sendHitmarker", {
            iQ: FQ.iQ,
            screenPos: QQ
          }, !0)
        }
      })), (0, AQ.h)(IQ.eb, (QQ => {
        const FQ = (0, NQ.h)(IQ.eb, QQ);
        if (FQ) {
          const {
            id: QQ,
            position: wQ,
            style: LQ,
            oL: qQ,
            kL: oQ
          } = FQ;
          mQ.l.GA("setDirectionArrow", {
            id: QQ,
            position: wQ,
            style: LQ,
            text: TQ(qQ),
            kL: oQ
          }, !0)
        }
      })), (0, AQ.h)(IQ.e, (QQ => {
        const FQ = (0, NQ.h)(IQ.e, QQ);
        FQ && mQ.l.GA("clearDirectionArrow", {
          id: FQ.id
        }, !0)
      })), (0, AQ.h)(IQ.m, (QQ => {
        const FQ = (0, NQ.h)(IQ.m, QQ);
        FQ && mQ.l.GA("flyingMiddleMessage", {
          content: TQ(FQ.Sw),
          Rw: FQ.Rw,
          Ow: FQ.Ow
        }, !0)
      })), (0, AQ.h)(uQ.rc.WorldVariation, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ("string" === typeof FQ) {
          const QQ = FQ === OQ.c ? null : {
            message: `Currently loaded as variation: ${FQ}`,
            type: "Warning"
          };
          mQ.l.GA("showPermanentBottomMessage", QQ, !0)
        }
      })), (0, AQ.h)(IQ.K, (QQ => {
        const FQ = (0, NQ.h)(IQ.K, QQ);
        FQ && function(QQ, FQ) {
          const {
            type: wQ,
            params: LQ
          } = (0, sQ.f)(FQ), qQ = {
            ...LQ
          };
          for (const oQ of sQ.c) qQ[oQ] && (qQ[oQ] = TQ(qQ[oQ]));
          rQ.c.queueQTE(QQ, wQ, qQ).getResult().then((FQ => {
            var wQ;
            "boolean" === typeof FQ && (null === (wQ = (0, DQ.k)()) || void 0 === wQ || wQ.send(UQ.b.QteResponse, {
              qteId: QQ,
              qteResponse: FQ
            }))
          }))
        }(FQ.id, FQ.WL)
      })), (0, AQ.h)(IQ.Y, (QQ => {
        const FQ = (0, NQ.h)(IQ.Y, QQ);
        "number" === typeof FQ && rQ.c.cancelQTE(FQ)
      })), (0, AQ.f)((() => {
        rQ.c.reset(), mQ.l.GA("showPermanentBottomMessage", null, !0)
      })), (0, AQ.g)((() => {
        rQ.c.reset()
      })), (0, AQ.h)(uQ.rc.EditItemCraftingRecipes, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        (0, NQ.e)(FQ) && mQ.l.GA("craftingRecipesEdited", {
          itemName: FQ.craftingRecipeItemName,
          recipesForItem: FQ.recipesForItem
        })
      })), (0, AQ.h)(IQ.V, (QQ => {
        const FQ = (0, NQ.h)(IQ.V, QQ);
        FQ && mQ.l.GA("craftingRecipesEdited", {
          itemName: FQ.sw,
          recipesForItem: []
        })
      })))
    }
    var jQ = wQ(17);
    const aQ = [{
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

    function XQ(QQ) {
      return pQ.v.playerFlags(QQ.api.apiView, 0)
    }
    const fQ = {
        freeCamera: (0, YQ.d)((QQ => () => {
          const FQ = QQ.isSessionLive && 0 !== (XQ(QQ) & pQ.Gd.FreeCamMoves),
            wQ = QQ.freeCameraAllowed() && null === jQ.c.get("scriptedCameraFacing");
          return aQ[(wQ ? 2 : 0) + (FQ ? 1 : 0)]
        }), aQ[0], (QQ => (0, oQ.v)(QQ)))
      },
      VQ = {
        setFreeCameraMovesFly: QQ => {
          var FQ;
          null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.setFreeCameraMovesFly(QQ)
        }
      },
      hQ = {
        freeCameraPos: () => {
          const QQ = (0, DQ.k)();
          return null !== QQ && void 0 !== QQ && QQ.isSessionLive && QQ.renderFrame.hasView && 0 !== (XQ(QQ) & pQ.Gd.FreeCam) ? QQ.renderFrame.cameraPosition : null
        }
      };
    var JQ = wQ(38705);
    let EQ = !1,
      nQ = !1;

    function gQ() {
      const QQ = (0, DQ.k)();
      if (null === QQ || void 0 === QQ || !QQ.isSessionLive) return void(EQ = !1);
      const FQ = 0 !== (pQ.v.playerFlags(QQ.api.apiView, 0) & pQ.Gd.FreeCam);
      FQ !== EQ && (EQ = FQ, (0, JQ.e)(FQ))
    }
    var PQ = wQ(317),
      ZQ = wQ(36646),
      yQ = wQ(1919);
    var BQ = wQ(40136),
      dQ = wQ(40072);
    const QF = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let FF = "off";

    function wF(QQ) {
      var FQ;
      return null === QQ ? null : {
        label: null !== (FQ = (0, BQ.d)(QQ, "interactionPrompt")) && void 0 !== FQ ? FQ : null
      }
    }
    const LF = new Map([
      [pQ.Dc.Open, {
        label: vQ.d.open
      }],
      [pQ.Dc.Close, {
        label: vQ.d.close
      }],
      [pQ.Dc.Milk, {
        label: vQ.d.milk
      }],
      [pQ.Dc.Shear, {
        label: vQ.d.shear
      }],
      [pQ.Dc.Tame, {
        label: vQ.d.tame
      }],
      [pQ.Dc.Feed, {
        label: vQ.d.feed
      }],
      [pQ.Dc.Ride, {
        label: vQ.d.ride
      }]
    ]);
    class qF {
      constructor() {
        this.target = QF, this.um = pQ.ed, this.optionName = null, this.pickaxe = new vQ.c
      }
      read(QQ) {
        var FQ;
        const wQ = pQ.v.targetBlockId(QQ.api.apiView, 0);
        wQ !== this.um && (this.um = wQ, this.optionName = wQ === pQ.ed ? null : `${QQ.tables.getMetaInfo(wQ).rootName}CrosshairText`);
        const LQ = null === this.optionName ? null : null !== (FQ = QQ.tables.getClientOption(this.optionName)) && void 0 !== FQ ? FQ : null;
        this.pickaxe.update(function(QQ, FQ) {
          var wQ, LQ, qQ;
          if (0 === (pQ.v.playerFlags(QQ.api.apiView, 0) & pQ.Gd.Breaking) || FQ === pQ.ed || 0 === FQ) return null;
          const {
            tables: oQ
          } = QQ;
          if (!0 === oQ.getClientOption("creative")) return null;
          const DQ = oQ.nameOfId(FQ),
            kQ = null === (wQ = QQ.items.ym()) || void 0 === wQ ? void 0 : wQ.name,
            vQ = null !== (LQ = oQ.getItemStat(DQ, "harvestLevel")) && void 0 !== LQ ? LQ : 0;
          return (0, PQ.Fc)({
            blockHarvestType: oQ.getDefaultItemStat(DQ, "harvestType"),
            blockHarvestLevel: oQ.getDefaultItemStat(DQ, "harvestLevel"),
            harvestLevel: vQ,
            heldToolType: void 0 === kQ ? void 0 : oQ.getDefaultItemStat(kQ, "harvests"),
            heldToolLevel: void 0 === kQ ? void 0 : oQ.getDefaultItemStat(kQ, "level")
          }) && null !== (qQ = ZQ.t[vQ]) && void 0 !== qQ ? qQ : null
        }(QQ, wQ)), QQ.watchPromptPick(FF);
        const qQ = "touch" === FF ? function(QQ) {
          var FQ;
          const wQ = QQ.interactLabel;
          return wQ === pQ.Dc.Entity ? wF(QQ.promptEntity) : wQ === pQ.Dc.TameWith ? {
            label: (0, vQ.x)(QQ.tables.nameOfId(QQ.interactIcon))
          } : null !== (FQ = LF.get(wQ)) && void 0 !== FQ ? FQ : null
        }(QQ) : wF(QQ.promptEntity);
        return this.target = (0, yQ.q)(this.target, {
          interactPrompt: qQ,
          blockText: LQ,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let oF = null;
    const DF = {
      current: () => {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = oF) || void 0 === FQ ? void 0 : FQ.target) && void 0 !== QQ ? QQ : QF
      },
      watch: QQ => {
        const FQ = new qF;
        oF = FQ;
        const wQ = (0, YQ.g)((wQ => {
          let LQ = FQ.read(wQ);
          QQ(LQ);
          const qQ = (0, oQ.x)((() => {
            const qQ = FQ.read(wQ);
            qQ !== LQ && (LQ = qQ, QQ(qQ))
          }));
          return () => {
            qQ(), wQ.watchPromptPick("off")
          }
        }));
        return () => {
          wQ(), oF === FQ && (oF = null)
        }
      }
    };
    let kF = 0,
      vF = 0;
    const mF = {
        health: vQ.q,
        aura: vQ.h,
        hotbar: dQ.d.states.hotbar,
        heldItemAim: dQ.d.states.heldItemAim,
        crouching: (0, YQ.d)((QQ => function(QQ) {
          const FQ = () => 0 !== (pQ.v.playerFlags(QQ.apiView, 0) & pQ.Gd.Crouching);
          return {
            current: FQ,
            watch(QQ) {
              let wQ = FQ();
              return (0, oQ.v)((() => {
                const LQ = FQ();
                LQ !== wQ && (wQ = LQ, QQ(LQ))
              }))
            }
          }
        }(QQ.api).current), !1, (QQ => (0, oQ.v)(QQ))),
        flight: (0, YQ.d)((QQ => () => function(QQ) {
          const FQ = pQ.v.playerFlags(QQ.apiView, 0);
          return (0, vQ.m)(0 !== (FQ & pQ.Gd.CanFly), 0 !== (FQ & pQ.Gd.Flying))
        }(QQ.api)), (0, vQ.m)(!1, !1), (QQ => (0, oQ.v)(QQ))),
        gliderBoostFuel: (0, YQ.d)((QQ => () => pQ.v.gliderBoostFuel(QQ.api.apiView, 0)), 0, (QQ => (0, oQ.v)(QQ))),
        crosshairTarget: DF
      },
      uF = {
        hotbarSlotRequested: dQ.d.events.hotbarSlotRequested,
        hotbarScrolled: dQ.d.events.hotbarScrolled,
        numberKeyPressed: dQ.d.events.numberKeyPressed,
        shotDamageToShow: (0, vQ.u)((QQ => !0 === (0, BQ.d)(QQ, "showDamageAmounts")))
      },
      HF = {
        selectHotbarSlot: dQ.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: QQ => {
          FF = QQ
        }
      },
      bF = {
        momentumFrac: function() {
          var QQ, FQ, wQ;
          const LQ = (0, DQ.k)(),
            qQ = performance.now(),
            oQ = null === LQ || void 0 === LQ || null === (QQ = LQ.items.ym()) || void 0 === QQ || null === (FQ = QQ.attributes) || void 0 === FQ || null === (wQ = FQ.customAttributes) || void 0 === wQ ? void 0 : wQ.enchantments;
          return kF = null !== LQ && null !== oQ && void 0 !== oQ && oQ.Momentum ? 0 !== (pQ.v.playerFlags(LQ.api.apiView, 0) & pQ.Gd.Breaking) ? Math.max(0, pQ.v.momentumFrac(LQ.api.apiView, 0)) : Math.max(0, kF - (qQ - vF) / 1500) : 0, vF = qQ, kF
        }
      };
    var YF = wQ(40005);
    const xF = {
      lobbyManage(QQ) {
        var FQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.LobbyManage, QQ)
      }
    };
    var AF = wQ(1254),
      tF = wQ(36128),
      eF = wQ(8541),
      MF = wQ(1641),
      GF = wQ(2313),
      pF = wQ(4642);
    let cF = !1;

    function CF(QQ) {
      cF = QQ
    }

    function SF() {
      "inGame" !== jQ.c.get("gameState") || (0, MF.n)() || mQ.l.GA("ctrlCrouchWithoutFullscreen")
    }
    let iF = !1;
    const WF = {
        OpenEmoteWheel: () => {
          CF(!0), iF = !0, queueMicrotask((() => {
            iF && (iF = !1, mQ.l.GA("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          mQ.l.GA("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, tF.b)() || mQ.l.GA("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, tF.b)() || mQ.l.GA("XKeyPressed")
        },
        CtrlCrouch: SF,
        "primary-fire": () => {
          mQ.l.GA("mouseState", {
            Ku: AF.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          mQ.l.GA("mouseState", {
            Ku: AF.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          mQ.l.GA("mouseState", {
            Ku: AF.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      RF = {
        OpenEmoteWheel: () => {
          CF(!1), iF ? (iF = !1, (0, eF.b)() || mQ.l.GA("requestEmoteWheelHoldOpen")) : mQ.l.GA("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: SF,
        "primary-fire": () => {
          mQ.l.GA("mouseState", {
            Ku: AF.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          mQ.l.GA("mouseState", {
            Ku: AF.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          mQ.l.GA("mouseState", {
            Ku: AF.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let OF = !1;

    function sF() {
      OF || (OF = !0, (0, pF.j)((QQ => {
        if ((0, qQ.c)()) return;
        const FQ = (0, pF.g)(QQ) ? "primary-fire" : QQ.action;
        var wQ;
        if (QQ.down) {
          if (0 === (QQ.flags & GF.c.Synthetic)) {
            var LQ;
            null === (LQ = WF[FQ]) || void 0 === LQ || LQ.call(WF)
          }
        } else null === (wQ = RF[FQ]) || void 0 === wQ || wQ.call(RF)
      })))
    }
    var rF = wQ(307),
      IF = wQ(96),
      UF = wQ(27),
      NF = wQ(40145),
      TF = wQ(1339),
      KF = wQ(38542);
    let zF = !1;
    const lF = {
      sendCodeCollab(QQ) {
        var FQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.CodeCollab, (0, UQ.n)(QQ), (0, KF.e)(QQ))
      }
    };
    var jF = wQ(38642);
    let aF = null,
      XF = !1,
      fF = null;

    function VF() {
      return "inGame" === jQ.c.get("gameState") && !(0, tF.b)()
    }
    const hF = {
        OpenInventory: QQ => {
          (0, MF.w)(QQ, "inventory", (0, YF.l)())
        },
        OpenShop: QQ => {
          aF && VF() && (0, MF.s)(QQ, rF.n.SHOP, !aF.shopIsEmpty(GQ.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: QQ => {
          VF() && (0, MF.s)(QQ, rF.n.LOBBY_LEADERBOARD, (0, jF.b)({
            lobbyLeaderboardInfo: GQ.b.get("lobbyLeaderboardInfo"),
            lobbyManage: GQ.b.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: QQ => {
          var FQ;
          const wQ = null === (FQ = aF) || void 0 === FQ ? void 0 : FQ.getClientGameMapKey();
          wQ ? (0, MF.y)(QQ, !0, wQ) : (0, MF.w)(QQ, "retentionFeatures", !(!GQ.b.get("_tasks") && !GQ.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: QQ => {
          (0, MF.w)(QQ, "inviteLink", IF.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: QQ => {
          VF() && function(QQ) {
            var FQ;
            const wQ = (0, DQ.k)(),
              LQ = null !== wQ && void 0 !== wQ && wQ.isSessionLive ? wQ.api : null,
              qQ = LQ ? LQ.Qp(LQ.localId) : null,
              oQ = null !== (FQ = null === qQ || void 0 === qQ ? void 0 : qQ.map((QQ => Math.floor(QQ)))) && void 0 !== FQ ? FQ : null;
            (0, MF.y)(QQ, null !== oQ && (0, KF.b)((0, TF.c)()), (() => {
              mQ.l.GA("EditLobbyCode", oQ)
            }))
          }(QQ)
        },
        HideUi: () => {
          mQ.l.GA("showUi", !1)
        }
      },
      JF = {
        HideUi: () => {
          mQ.l.GA("showUi", !0)
        }
      };

    function EF() {
      XF || (XF = !0, wQ.e(153).then((() => wQ(41984))).then((QQ => {
        aF = QQ
      }), (QQ => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", QQ)
      })), (0, NF.x)((QQ => {
        QQ || !(0, NF.f)() || (0, IF.isMobile)() || !UF.i.getItem("disableFullscreen") || (0, MF.m)() || jQ.c.set({
          openEverythingMenuName: rF.n.SETTINGS
        })
      })), (0, pF.j)((QQ => {
        let {
          action: FQ,
          down: wQ,
          press: LQ
        } = QQ;
        var oQ, DQ;
        (0, qQ.c)() || (wQ ? null === (oQ = hF[FQ]) || void 0 === oQ || oQ.call(hF, function(QQ) {
          var FQ;
          if (0 === QQ || (null === (FQ = fF) || void 0 === FQ ? void 0 : FQ.press) !== QQ) {
            const FQ = {
              press: QQ,
              event: new Event("inputAction")
            };
            fF = FQ, queueMicrotask((() => {
              fF === FQ && (fF = null)
            }))
          }
          return fF.event
        }(LQ)) : null === (DQ = JF[FQ]) || void 0 === DQ || DQ.call(JF))
      })))
    }
    var nF = wQ(38508),
      gF = wQ(38520),
      PF = wQ(38510);
    const ZF = {
      completeTask(QQ) {
        var FQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.CompleteTask, (0, UQ.q)(QQ))
      },
      setServerCookie(QQ) {
        var FQ;
        let {
          key: wQ,
          value: LQ
        } = QQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.GeneralCookieSet, (0, UQ.w)({
          Bv: wQ,
          Qm: LQ
        }))
      },
      answerUiRequest(QQ) {
        var FQ;
        let {
          id: wQ,
          xu: LQ
        } = QQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.UiRequestResp, (0, UQ.T)({
          Wu: wQ,
          Ru: LQ,
          Ou: 5
        }))
      },
      chooseRewardedAd(QQ) {
        var FQ;
        let {
          id: wQ,
          xu: LQ
        } = QQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.UiRequestResponded, (0, UQ.S)({
          id: wQ,
          xu: LQ
        }))
      },
      requestLeaderboard(QQ) {
        var FQ;
        let {
          category: wQ,
          timeframe: LQ,
          seeTop: qQ
        } = QQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.LeaderboardRequest, {
          category: wQ,
          timeframe: LQ,
          seeTop: qQ
        })
      }
    };
    let yF = !1;
    const BF = MQ.e.pG / 2,
      dF = [BF, -BF, -BF, -BF, BF, BF, -BF, BF],
      Qw = [0, 0, 0];

    function Fw(QQ, FQ, wQ) {
      for (let LQ = 0; LQ < QQ.length; LQ += 2)
        if (QQ[LQ] === FQ && QQ[LQ + 1] === wQ) return !0;
      return !1
    }
    const ww = {
      blocksStandingOn: function() {
        const QQ = (0, DQ.k)();
        if (null === QQ) return [];
        const {
          api: FQ,
          chunks: wQ,
          tables: LQ
        } = QQ;
        if (!FQ.readPosition(FQ.localId, Qw)) return [];
        const [qQ, oQ, kQ] = Qw, vQ = Math.ceil(oQ) - 1, mQ = [], uQ = [];
        for (let DQ = 0; DQ < dF.length; DQ += 2) {
          const QQ = qQ + dF[DQ],
            FQ = kQ + dF[DQ + 1];
          if (Number.isInteger(QQ) || Number.isInteger(FQ)) continue;
          const oQ = Math.floor(QQ),
            HQ = Math.floor(FQ);
          if (Fw(uQ, oQ, HQ)) continue;
          const bQ = wQ.um(oQ, vQ, HQ);
          LQ.isSolidBlockId(bQ) && (uQ.push(oQ, HQ), mQ.push(LQ.nameOfId(bQ)))
        }
        return mQ
      },
      dropAhead: function() {
        const QQ = (0, DQ.k)();
        return null !== QQ && 0 !== (pQ.v.playerFlags(QQ.api.apiView, 0) & pQ.Gd.DropAhead)
      }
    };
    var Lw = wQ(36573),
      qw = wQ(38620),
      ow = wQ(1362),
      Dw = wQ(40082);
    const kw = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      vw = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function mw() {
      const QQ = new Set;
      return {
        add: FQ => (QQ.add(FQ), () => {
          QQ.delete(FQ)
        }),
        fire() {
          for (const FQ of QQ) FQ()
        }
      }
    }
    const uw = Object.freeze([]);

    function Hw(QQ, FQ) {
      let wQ, {
        rereads: LQ,
        followLocalId: qQ
      } = FQ;
      const DQ = () => (wQ = (0, yQ.q)(wQ, QQ()), wQ);
      return {
        current: DQ,
        watch(QQ) {
          const FQ = (0, xQ.e)((FQ => {
            LQ(FQ) && QQ(DQ())
          }));
          if (!qQ) return FQ;
          let wQ = (0, YQ.f)();
          const kQ = (0, oQ.x)((() => {
            const FQ = (0, YQ.f)();
            FQ !== wQ && (wQ = FQ, QQ(DQ()))
          }));
          return () => {
            FQ(), kQ()
          }
        }
      }
    }
    const bw = {
        players: Hw((function() {
          const QQ = xQ.h.ids(),
            FQ = {};
          for (const oQ of QQ) {
            var wQ, LQ, qQ;
            FQ[oQ] = {
              name: null !== (wQ = xQ.h.getName(oQ)) && void 0 !== wQ ? wQ : null,
              ranks: null !== (LQ = xQ.h.getSetting(oQ, "ranks")) && void 0 !== LQ ? LQ : uw,
              cosmetics: null !== (qQ = (0, xQ.k)(oQ)) && void 0 !== qQ ? qQ : null
            }
          }
          return {
            ids: QQ,
            byId: FQ,
            localId: (0, YQ.f)()
          }
        }), {
          rereads: QQ => "roster" !== QQ.kind || QQ.members || QQ.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Hw((function() {
          const QQ = {};
          for (const qQ of xQ.h.ids()) {
            var FQ, wQ, LQ;
            QQ[qQ] = {
              colour: null !== (FQ = xQ.h.getSetting(qQ, "colorInLobbyLeaderboard")) && void 0 !== FQ ? FQ : null,
              values: null !== (wQ = xQ.h.getSetting(qQ, "lobbyLeaderboardValues")) && void 0 !== wQ ? wQ : null,
              tags: null !== (LQ = xQ.h.getSetting(qQ, "lobbyLeaderboardTags")) && void 0 !== LQ ? LQ : null
            }
          }
          return QQ
        }), {
          rereads: function(QQ) {
            if ("roster" !== QQ.kind) return "reset" === QQ.kind;
            const {
              members: FQ,
              settings: wQ
            } = QQ;
            return FQ || wQ.has("colorInLobbyLeaderboard") || wQ.has("lobbyLeaderboardValues") || wQ.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Yw = {
        cosmeticsUpdated: {
          watch: QQ => (0, xQ.e)((FQ => {
            if ("cosmetics" !== FQ.kind) return;
            const wQ = (0, YQ.f)();
            QQ(FQ.updates.map((QQ => {
              let {
                CL: FQ,
                SL: LQ,
                iL: qQ
              } = QQ;
              return {
                local: FQ === wQ,
                SL: LQ,
                iL: qQ
              }
            })))
          }))
        }
      };
    var xw = wQ(2845),
      Aw = wQ(1725),
      tw = wQ(649),
      ew = wQ(40147);
    let Mw = !1,
      Gw = null;
    const pw = {
      setShopOpen(QQ) {
        var FQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.ShopMenuChanged, (0, UQ.N)(QQ))
      },
      buyShopItem(QQ) {
        var FQ;
        let {
          categoryKey: wQ,
          itemKey: LQ,
          userInput: qQ
        } = QQ;
        null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.send(UQ.b.ItemBought, {
          categoryKey: wQ,
          itemKey: LQ,
          shopVersion: GQ.b.get("_shopVersion"),
          userInput: qQ
        })
      }
    };
    let Cw = !1;
    var Sw = wQ(4657);
    const iw = GF.w.LookFrozen | GF.w.ClicksSuppressed;

    function Ww(QQ, FQ) {
      var wQ;
      null !== (wQ = (0, DQ.k)()) && void 0 !== wQ && wQ.send(QQ, FQ) || console.warn(`[bloxd-wasm-client] message ${QQ} not sent: no live game or the core's command ring is full`)
    }(0, AQ.h)(IQ.ib, (QQ => {
      const FQ = (0, NQ.h)(IQ.ib, QQ);
      void 0 !== FQ && mQ.l.GA("setDiscordReportKey", FQ)
    }));
    const Rw = {
      ignorePlayer(QQ) {
        Ww(UQ.b.IgnoreUser, (0, UQ.z)({
          pD: QQ
        }))
      },
      reportPlayer(QQ) {
        let {
          playerId: FQ,
          chatMsgId: wQ,
          Hm: LQ,
          details: qQ
        } = QQ;
        Ww(UQ.b.UserReport, (0, UQ.db)({
          hm: FQ,
          Jm: wQ,
          Hm: LQ,
          bm: qQ
        }))
      },
      reportWorldCodeChat(QQ) {
        let {
          chatMsgId: FQ,
          Hm: wQ,
          details: LQ
        } = QQ;
        Ww(UQ.b.UserReport, (0, UQ.db)({
          hm: "",
          Jm: FQ,
          Hm: wQ,
          bm: LQ
        }))
      },
      requestDiscordReportKey(QQ) {
        Ww(UQ.b.ReqDiscordReportKey, (0, UQ.I)(QQ))
      },
      reportLobbyOrGame(QQ) {
        let {
          target: FQ,
          Hm: wQ,
          details: LQ
        } = QQ;
        "customGame" === FQ ? Ww(UQ.b.CustomGameReport, (0, UQ.t)({
          Hm: wQ,
          bm: LQ
        })) : Ww(UQ.b.LobbyReport, (0, UQ.A)({
          Hm: wQ,
          bm: LQ
        }))
      },
      updateMyCosmetic(QQ) {
        Ww(UQ.b.UpdateMyCosmetic, (0, UQ.ab)(QQ))
      },
      holdEmoteWheel(QQ) {
        !QQ || cF ? (0, Sw.i)(iw, QQ ? iw : 0) : mQ.l.GA("requestEmoteWheelHoldRelease")
      }
    };
    var Ow = wQ(40154),
      sw = wQ(9195),
      rw = wQ(39146);
    const Iw = [0, 0, 0],
      Uw = [0, 0, 0],
      Nw = [0, 0, 0],
      Tw = {
        blockAtViewPoint(QQ) {
          let {
            x: FQ,
            y: wQ
          } = QQ;
          const LQ = (0, DQ.k)();
          if (null === LQ || void 0 === LQ || !LQ.renderFrame.hasView) return null;
          const {
            renderFrame: qQ,
            clientApi: oQ,
            api: kQ
          } = LQ;
          let vQ = 0;
          return (0, rw.f)(((QQ, FQ, wQ) => (vQ = oQ.getBlockId(QQ, FQ, wQ), 0 !== vQ)), qQ.cameraPosition, (0, rw.g)((QQ => pQ.v.viewProj(kQ.apiView, 0, QQ)), FQ, wQ, Iw), rw.c, Uw, Nw) ? {
            pos: [Uw[0], Uw[1], Uw[2]],
            normal: [Nw[0], Nw[1], Nw[2]],
            name: (0, sw.g)(vQ)
          } : null
        }
      },
      Kw = {
        setBlockHighlight(QQ) {
          var FQ;
          null === (FQ = (0, DQ.k)()) || void 0 === FQ || FQ.setBlockHighlight(QQ)
        }
      };
    var zw = wQ(1904),
      lw = wQ(40160),
      jw = wQ(40169),
      aw = wQ(4342),
      Xw = wQ(4313),
      fw = wQ(40172),
      Vw = wQ(3149),
      hw = wQ(3158);
    let Jw = null,
      Ew = null;

    function nw(QQ) {
      const FQ = QQ.startsWith(hw.k),
        [wQ, LQ = wQ, qQ = wQ] = (FQ ? QQ.slice(hw.k.length) : QQ).split(hw.j);
      return {
        top: wQ,
        left: LQ,
        right: qQ,
        half: FQ
      }
    }

    function gw(QQ) {
      const FQ = null === Jw ? void 0 : (0, Vw.c)(QQ),
        wQ = void 0 === FQ ? 0 : Jw.codes[FQ];
      return 0 === wQ ? void 0 : Jw.pool[wQ - 1]
    }
    var Pw = wQ(3145),
      Zw = wQ(4304),
      yw = wQ(4335),
      Bw = wQ(40175),
      dw = wQ(40182);
    const QL = "item:";
    let FL = null,
      wL = null,
      LL = null,
      qL = null,
      oL = !1,
      DL = !1;

    function kL() {
      return DL || (DL = !0, (0, yw.j)().then((QQ => {
        QQ && (0, zw.b)()
      }))), LL ??= Promise.all([(0, Pw.h)(), (Ew ??= wQ.e(1).then((() => wQ(42007))).then((QQ => {
        let {
          BLOCK_FACE_RUNS: FQ,
          BLOCK_FACES: wQ,
          MAX_FACE_ITEM_ID: LQ
        } = QQ;
        Jw = {
          codes: (0, hw.B)(FQ, LQ + 1),
          pool: wQ.split(hw.s).map(nw)
        }
      }), (QQ => {
        throw Ew = null, QQ
      })), Ew), (0, dw.e)(), wQ.e(190).then((() => wQ(9125)))]).then((QQ => {
        let [, , FQ, wQ] = QQ;
        FQ.followBundledTextures(), FL = FQ, wL = wQ, (0, zw.b)()
      }), (QQ => {
        LL = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", QQ)
      })), LL
    }

    function vL(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = (0, Bw.f)()) || void 0 === wQ ? void 0 : wQ.textureUrl(QQ)) && void 0 !== FQ ? FQ : FL.itemSpriteUrl(QQ)
    }

    function mL(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = (0, Bw.f)()) || void 0 === wQ ? void 0 : wQ.textureUrl(QQ)) && void 0 !== FQ ? FQ : FL.blockTextureUrl(QQ)
    }

    function uL(QQ) {
      var FQ;
      return null !== (FQ = (0, Pw.d)(QQ)) && void 0 !== FQ ? FQ : QQ
    }

    function HL(QQ, FQ) {
      var wQ, LQ, qQ;
      return null !== (wQ = null !== (LQ = null !== (qQ = mL(QQ)) && void 0 !== qQ ? qQ : null === FQ || void 0 === FQ ? void 0 : FQ.rotated[QQ]) && void 0 !== LQ ? LQ : null === FQ || void 0 === FQ ? void 0 : FQ.animated[QQ]) && void 0 !== wQ ? wQ : FL.notFoundUrl()
    }

    function bL(QQ) {
      return void 0 !== (0, Vw.c)(QQ) ? QQ : /^[1-9][0-9]*$/.test(QQ) ? (0, Vw.e)(Number(QQ)) : void 0
    }

    function YL(QQ) {
      var FQ;
      if (QQ.startsWith(QL)) {
        var wQ;
        const FQ = (0, Pw.d)(QQ.slice(5));
        return null !== (wQ = void 0 === FQ ? null : vL(FQ)) && void 0 !== wQ ? wQ : FL.notFoundUrl()
      }
      return null !== (FQ = FL.particleUrl(QQ)) && void 0 !== FQ ? FQ : FL.notFoundUrl()
    }

    function xL(QQ, FQ) {
      return "StairsBlock" === QQ ? QQ : FQ ? "SlabBlock" : "CubeBlock"
    }
    const AL = {
        async blockIcon(QQ) {
          var FQ;
          let {
            name: LQ,
            size: qQ,
            lineWidth: oQ
          } = QQ;
          await kL();
          const DQ = null !== (FQ = bL(LQ)) && void 0 !== FQ ? FQ : LQ,
            kQ = (0, yw.e)(DQ, qQ, oQ);
          if (null !== kQ) return kQ;
          const vQ = gw(DQ),
            mQ = (0, Vw.c)(DQ),
            uQ = void 0 === mQ || null === wL ? void 0 : wL.itemTypeNameOf(mQ);
          if (null === FL || void 0 === vQ) return "";
          const HQ = [vQ.top, vQ.left, vQ.right].some((QQ => null === mL(QQ))),
            bQ = HQ ? await (qL ??= wQ.e(202).then((() => wQ(33928))).then((QQ => (oL && (oL = !1, (0, zw.b)()), {
              rotated: QQ.rotatedBlockTextures,
              animated: QQ.animatedBlockTextures
            })), (QQ => (qL = null, oL = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", QQ), null))), qL) : null;
          if (HQ && null === bQ) return "";
          const YQ = {
              top: HL(vQ.top, bQ),
              left: HL(vQ.left, bQ),
              right: HL(vQ.right, bQ),
              itemType: xL(uQ, vQ.half)
            },
            xQ = (0, Bw.c)(),
            AQ = 0 === xQ ? DQ : `${DQ}#${xQ}`;
          return (await (0, Zw.d)()).drawBlockIconUrl(AQ, qQ, oQ, (() => YQ))
        }
      },
      tL = {
        itemIcon: function(QQ) {
          var FQ, wQ, qQ, oQ;
          if (null === FL) return kL(), LQ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(QQ);
          if ((0, Xw.j)(QQ)) return {
            kind: "icon",
            url: null !== (wQ = null !== (qQ = null === (oQ = (0, Bw.f)()) || void 0 === oQ ? void 0 : oQ.textureUrl(QQ)) && void 0 !== qQ ? qQ : FL.ingameIconUrl(QQ)) && void 0 !== wQ ? wQ : FL.notFoundUrl()
          };
          if (QQ.startsWith(Xw.e)) return {
            kind: "icon",
            url: YL(QQ.slice(Xw.e.length))
          };
          if (0 === (0, Vw.f)()) return (0, fw.c)(), LQ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(QQ);
          const DQ = null !== (FQ = bL(QQ)) && void 0 !== FQ ? FQ : QQ,
            kQ = (0, Vw.c)(DQ),
            vQ = void 0 === kQ ? void 0 : wL.itemTypeNameOf(kQ);
          if (void 0 !== gw(DQ)) return {
            kind: "drawnBlock"
          };
          const mQ = function(QQ) {
            var FQ;
            return null !== (FQ = vL(uL(QQ))) && void 0 !== FQ ? FQ : FL.notFoundUrl()
          }(DQ);
          if ((0, yw.h)(DQ) && ! function(QQ) {
              const FQ = (0, Bw.f)();
              return null !== FQ && (null !== FQ.textureUrl(uL(QQ)) || null !== FQ.modelUrl(QQ))
            }(DQ)) return {
            kind: "model",
            url: mQ
          };
          if ("Gun" === vQ) return {
            kind: "gun",
            url: mQ
          };
          if (void 0 !== kQ && "GrayscaleArmour" === wL.itemTypeOf(kQ) || Object.hasOwn(aw.d, DQ)) {
            var uQ;
            const FQ = null !== (uQ = (0, aw.f)(QQ)) && void 0 !== uQ ? uQ : (0, aw.f)(DQ);
            if (FQ) return {
              kind: "item",
              url: mQ,
              tint: FQ
            }
          }
          return {
            kind: "item",
            url: mQ
          }
        },
        hasIcon: function(QQ) {
          return void 0 !== bL(QQ) || (0, Xw.j)(QQ) || QQ.startsWith(Xw.e)
        },
        isItemName: function(QQ) {
          return void 0 !== bL(QQ)
        }
      };
    var eL = wQ(609),
      ML = wQ(39153);

    function GL(QQ) {
      if (null === QQ || void 0 === QQ || !QQ.isCoreRunning) return null;
      const {
        api: FQ,
        chunks: wQ,
        items: LQ,
        tables: qQ
      } = QQ;
      return {
        playerFeet() {
          const QQ = FQ.Qp(FQ.localId);
          return null !== QQ && void 0 !== QQ && QQ.every(Number.isFinite) ? QQ : null
        },
        chunkBlocks: QQ => wQ.isLoaded(QQ[0], QQ[1], QQ[2]) ? (QQ, FQ, LQ) => wQ.um(QQ, FQ, LQ) : null,
        blockName: QQ => qQ.nameOfId(QQ),
        inventory: () => ({
          slots: LQ.playerItems().map((QQ => QQ ? {
            name: QQ.name,
            amount: QQ.amount
          } : null)),
          heldSlot: LQ.selectedSlot
        }),
        nearby() {
          const wQ = [];
          for (let qQ = 0; qQ < FQ.idStr.length; qQ++) {
            var LQ;
            const oQ = FQ.idStr[qQ],
              DQ = FQ.serverIds[qQ],
              kQ = FQ.kinds[qQ];
            if (null === oQ || FQ.isLocal(DQ) || kQ >>> pQ.c !== pQ.u.Lifeform) continue;
            const vQ = FQ.Qp(DQ),
              mQ = eL.l[kQ & pQ.g];
            vQ && void 0 !== mQ && wQ.push({
              kind: "Player" === mQ ? "player" : mQ,
              name: null !== (LQ = QQ.clientApi.getEntityName(oQ)) && void 0 !== LQ ? LQ : null,
              position: vQ
            })
          }
          return wQ
        },
        droppedItems() {
          let QQ = 0;
          for (let wQ = 0; wQ < FQ.idStr.length; wQ++) null !== FQ.idStr[wQ] && FQ.kinds[wQ] >>> pQ.c === pQ.u.Item && QQ++;
          return QQ
        }
      }
    }
    const pL = {
        worldCodeAiChunk: QQ => Promise.resolve((0, ML.d)(GL((0, DQ.k)()), QQ)),
        worldCodeAiGameState: () => Promise.resolve((0, ML.h)(GL((0, DQ.k)())))
      },
      cL = function(QQ) {
        const FQ = mw(),
          LQ = mw(),
          qQ = new Set,
          oQ = new Set,
          DQ = () => {
            var FQ, wQ;
            return null !== (FQ = null === (wQ = QQ.runtime()) || void 0 === wQ ? void 0 : wQ.currentViewer) && void 0 !== FQ ? FQ : null
          };
        let kQ = null,
          vQ = null;
        const uQ = (QQ, FQ) => ({
            current: QQ,
            watch(wQ) {
              let LQ = QQ();
              return FQ.add((() => {
                const FQ = QQ();
                FQ !== LQ && (LQ = FQ, wQ(FQ))
              }))
            }
          }),
          bQ = QQ => ({
            watch: FQ => (QQ.add(FQ), () => {
              QQ.delete(FQ)
            })
          }),
          YQ = QQ => {
            const FQ = DQ(),
              wQ = null === FQ || void 0 === FQ ? void 0 : FQ.view;
            FQ && wQ && FQ.seek(Math.max(0, Math.min(wQ.totalTicks - 1, wQ.fH + QQ * HQ.cd)))
          },
          xQ = {
            replay: uQ((() => {
              var QQ;
              const FQ = DQ(),
                wQ = null !== (QQ = null === FQ || void 0 === FQ ? void 0 : FQ.view) && void 0 !== QQ ? QQ : null;
              return null === FQ || null === wQ || wQ.state === HQ.Uc.None ? (kQ = null, null) : (kQ = (0, yQ.q)(kQ, {
                id: FQ.id,
                fH: wQ.fH,
                totalTicks: wQ.totalTicks,
                mN: HQ.cd,
                playing: wQ.state === HQ.Uc.Playing,
                speed: wQ.speed,
                cameraMode: wQ.cameraMode,
                freecam: "freecam" === wQ.cameraMode
              }), kQ)
            }), FQ),
            replayEdits: uQ((() => {
              var QQ;
              const FQ = DQ(),
                wQ = null !== (QQ = null === FQ || void 0 === FQ ? void 0 : FQ.view) && void 0 !== QQ ? QQ : null;
              return null === FQ || null === wQ || wQ.state === HQ.Uc.None ? (vQ = null, null) : (vQ = (0, yQ.q)(vQ, {
                cameraKeyframes: [...FQ.keyframes],
                playbackMark: wQ.mark,
                fileName: FQ.fileName,
                unsavedChanges: FQ.unsavedChanges,
                suggestSaveAs: FQ.suggestSaveAs
              }), vQ)
            }), FQ),
            replayRecorder: uQ((() => {
              var FQ, wQ;
              return null !== (FQ = null === (wQ = QQ.runtime()) || void 0 === wQ ? void 0 : wQ.recorder.current) && void 0 !== FQ ? FQ : Dw.d.states.replayRecorder.current()
            }), LQ),
            replayVideoExporting: {
              current: qw.d,
              watch: QQ => (0, mQ.o)("replayViewer|videoExportChanged", (() => {
                QQ((0, qw.d)())
              }))
            }
          },
          AQ = {
            replayUiActionRequested: bQ(oQ),
            replayViewerRequested: bQ(qQ)
          },
          tQ = QQ => {
            for (const FQ of qQ) FQ(QQ)
          },
          eQ = () => {
            var LQ;
            !0 === (null === (LQ = DQ()) || void 0 === LQ ? void 0 : LQ.isOpen) && Promise.all([wQ.e(95), wQ.e(64)]).then((() => wQ(41990))).then((wQ => {
              let {
                startWasmReplayVideoExport: LQ
              } = wQ;
              return LQ({
                viewer: DQ,
                canvas: () => {
                  var FQ, wQ;
                  return null !== (FQ = null === (wQ = QQ.canvas) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : null
                },
                watchViewer: FQ.add,
                requestViewer: tQ
              })
            }), (QQ => {
              console.error("Couldn't load the video export", QQ), ow.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((QQ => {
              console.error("The video export failed", QQ)
            }))
          },
          MQ = {
            replayAction(QQ) {
              if ((0, qw.d)()) return;
              const FQ = DQ();
              switch (QQ) {
                case "replaySkipBack":
                  YQ(-1);
                  break;
                case "replaySkipForward":
                  YQ(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== FQ && void 0 !== FQ && FQ.view && FQ.setSpeed((0, Lw.l)(FQ.view.speed, "replaySpeedUp" === QQ ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === FQ || void 0 === FQ || FQ.addKeyframe()
              }
            },
            setReplayPlaying(QQ) {
              var FQ, wQ;
              (0, qw.d)() || (QQ ? null === (FQ = DQ()) || void 0 === FQ || FQ.play() : null === (wQ = DQ()) || void 0 === wQ || wQ.pause())
            },
            seekReplay(QQ) {
              var FQ;
              let {
                fH: wQ,
                ignorePlaybackMark: LQ
              } = QQ;
              null === (FQ = DQ()) || void 0 === FQ || FQ.seek(wQ, null !== LQ && void 0 !== LQ && LQ)
            },
            setReplayCameraMode(QQ) {
              var FQ;
              null === (FQ = DQ()) || void 0 === FQ || FQ.setCameraMode(QQ)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(QQ) {
              var FQ;
              null === (FQ = DQ()) || void 0 === FQ || FQ.setKeyframe(QQ)
            },
            moveReplayCameraKeyframe(QQ) {
              var FQ;
              let {
                from: wQ,
                to: LQ
              } = QQ;
              null === (FQ = DQ()) || void 0 === FQ || FQ.moveKeyframe(wQ, LQ)
            },
            deleteReplayCameraKeyframes(QQ) {
              var FQ;
              let {
                start: wQ,
                end: LQ
              } = QQ;
              null === (FQ = DQ()) || void 0 === FQ || FQ.deleteKeyframes(wQ, LQ)
            },
            setReplayPlaybackMark(QQ) {
              var FQ;
              null === (FQ = DQ()) || void 0 === FQ || FQ.setMark(QQ)
            },
            cropReplay(QQ) {
              var FQ, wQ;
              let {
                start: LQ,
                end: qQ
              } = QQ;
              return !(0, qw.d)() && (null !== (FQ = null === (wQ = DQ()) || void 0 === wQ ? void 0 : wQ.crop(LQ, qQ)) && void 0 !== FQ && FQ)
            },
            holdReplayForShaderPackFailure(QQ) {
              const FQ = DQ();
              FQ && (FQ.holdForShaderPackFailure(), function(QQ) {
                wQ.e(130).then((() => wQ(38741))).then((FQ => {
                  let {
                    shaderPackPage: wQ
                  } = FQ;
                  wQ.block(QQ)
                })).catch((QQ => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", QQ)
                }))
              }(QQ))
            },
            exportReplayVideo() {
              eQ()
            },
            toggleRecording() {
              var FQ;
              null === (FQ = QQ.runtime()) || void 0 === FQ || FQ.recorder.toggleRecording()
            },
            saveClip() {
              var FQ;
              null === (FQ = QQ.runtime()) || void 0 === FQ || FQ.recorder.saveClip()
            },
            setRecorderPrefs(FQ) {
              var wQ;
              let {
                clipping: LQ,
                clipSeconds: qQ
              } = FQ;
              null === (wQ = QQ.runtime()) || void 0 === wQ || wQ.recorder.setPrefs(LQ, qQ)
            },
            setReplayViewerOpen(FQ) {
              var wQ;
              (0, tF.e)(FQ) && (null === (wQ = QQ.runtime()) || void 0 === wQ || wQ.recorder.viewerShown(FQ))
            },
            recordFlyingMiddleText(FQ) {
              var wQ;
              let {
                content: LQ,
                Rw: qQ,
                angle: oQ,
                Ow: DQ
              } = FQ;
              null === (wQ = QQ.runtime()) || void 0 === wQ || wQ.recorder.recordFlyingText(JSON.stringify(LQ), qQ, oQ, DQ)
            },
            dragReplayCamera(FQ) {
              var wQ;
              let {
                dx: LQ,
                dy: qQ
              } = FQ;
              null === (wQ = QQ.freecam()) || void 0 === wQ || wQ.drag(LQ, qQ)
            },
            moveReplayFreecam(FQ) {
              var wQ;
              null === (wQ = QQ.freecam()) || void 0 === wQ || wQ.move(FQ)
            },
            holdReplayFreecamVertical(FQ) {
              var wQ;
              let {
                action: LQ,
                ym: qQ
              } = FQ;
              null === (wQ = QQ.freecam()) || void 0 === wQ || wQ.holdVertical(LQ, qQ)
            }
          },
          GQ = QQ => {
            var FQ;
            const wQ = DQ(),
              LQ = null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.view) && void 0 !== FQ ? FQ : null;
            kw.has(QQ) ? (QQ => {
              for (const FQ of oQ) FQ(QQ)
            })(QQ) : vw.has(QQ) ? MQ.replayAction(QQ) : "replayPlayPause" === QQ ? wQ && LQ && LQ.state !== HQ.Uc.None && MQ.setReplayPlaying(LQ.state !== HQ.Uc.Playing) : "replayChangeCameraMode" === QQ ? null === wQ || void 0 === wQ || wQ.cycleCameraMode() : "replayExit" === QQ ? !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.inPlayback) && (0, TF.l)("/") : "replayExportVideo" === QQ && eQ()
          };
        let pQ = !1;
        return {
          states: xQ,
          events: AQ,
          commands: MQ,
          lookups: {
            replayCamera() {
              var FQ, wQ, LQ;
              return !0 !== (null === (FQ = DQ()) || void 0 === FQ ? void 0 : FQ.isOpen) ? null : null !== (wQ = null === (LQ = QQ.cameraView) || void 0 === LQ ? void 0 : LQ.call(QQ)) && void 0 !== wQ ? wQ : null
            },
            leaveGameReloadsPage() {
              var QQ;
              return !0 === (null === (QQ = DQ()) || void 0 === QQ ? void 0 : QQ.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var QQ;
              const wQ = !0 === (null === (QQ = DQ()) || void 0 === QQ ? void 0 : QQ.inPlayback);
              wQ !== pQ && (pQ = wQ, mQ.l.GA("connectedGameChanged")), FQ.fire()
            },
            recorderChanged: LQ.fire,
            keyDown: QQ => {
              var FQ;
              switch (QQ) {
                case "recordGame":
                  return void MQ.toggleRecording();
                case "recordClip":
                  return void((0, tF.b)() || MQ.saveClip())
              }(0, qw.d)() || ("replayViewerOpen" !== QQ ? QQ.startsWith("replay") && ((0, tF.b)() || !0 === (null === (FQ = DQ()) || void 0 === FQ ? void 0 : FQ.inPlayback)) && GQ(QQ) : tQ("toggle"))
            }
          }
        }
      }({
        runtime: qQ.k,
        cameraView: () => {
          var QQ;
          const FQ = null === (QQ = (0, DQ.k)()) || void 0 === QQ ? void 0 : QQ.renderFrame;
          if (!FQ) return null;
          const [wQ, LQ, qQ] = FQ.cameraPosition, [oQ, kQ, vQ] = FQ.cameraDirection;
          return {
            position: [wQ, LQ, qQ],
            direction: [oQ, kQ, vQ]
          }
        },
        canvas: () => {
          var QQ, FQ, wQ;
          return null !== (QQ = null === (FQ = (wQ = (0, oQ.H)()).canvas) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : null
        },
        freecam: qQ.h
      }),
      CL = {
        states: {
          ...mF,
          ...YF.j,
          ...cL.states,
          ...bw,
          ...fQ
        },
        events: {
          ...uF,
          ...tQ,
          ...YF.g,
          ...RQ.d,
          ...Ow.h,
          ...cL.events,
          ...Yw,
          ...WQ.h
        },
        commands: {
          ...iQ,
          ...HF,
          ...eQ,
          ...YF.d,
          ...ZF,
          ...Rw,
          ...WQ.g,
          ...lF,
          ...cL.commands,
          ...pw,
          ...VQ,
          ...Kw,
          ...xF
        },
        queries: {
          ...YF.h,
          ...pL
        },
        lookups: {
          ...bF,
          ...KQ,
          ...Ow.i,
          ...cL.lookups,
          ...SQ,
          ...ww,
          ...Tw,
          ...hQ
        }
      };

    function SL() {
      (0, kQ.f)(AQ.i), (0, qQ.l)(cL.feed), (0, RQ.h)(), yF || (yF = !0, (0, AQ.h)(IQ.i, (QQ => {
        const FQ = (0, NQ.h)(IQ.i, QQ);
        "string" === typeof FQ && Promise.resolve().then((() => wQ(3527))).then((QQ => {
          let {
            onCosmeticPackGranted: wQ
          } = QQ;
          wQ(FQ)
        }))
      })), (0, AQ.h)(IQ.bb, (QQ => {
        const FQ = (0, NQ.h)(IQ.bb, QQ);
        "number" === typeof FQ && mQ.l.GA("serverUpdating", Date.now() + FQ, !0)
      })), (0, AQ.h)(IQ.G, (QQ => {
        const FQ = (0, NQ.h)(IQ.G, QQ);
        if ((0, NQ.e)(FQ)) {
          const {
            qQ: QQ,
            oQ: wQ
          } = FQ;
          (0, gF.d)({
            qQ: "string" === typeof QQ ? QQ : null,
            oQ: "string" === typeof wQ ? wQ : null
          })
        }
      })), (0, AQ.h)(uQ.rc.NewUiRequest, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        (0, NQ.e)(FQ) && "number" === typeof FQ.id && (0, NQ.e)(FQ.clientParameters) && (0, PF.f)(FQ.id, FQ.clientParameters)
      })), (0, AQ.h)(IQ.Z, (QQ => {
        const FQ = (0, NQ.h)(IQ.Z, QQ);
        "number" === typeof FQ && (0, PF.h)(FQ)
      })), (0, AQ.g)(PF.c), (0, AQ.h)(uQ.rc.UiRequestPopup, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ((0, NQ.e)(FQ) && "number" === typeof FQ.id && "string" === typeof FQ.text) {
          const QQ = FQ.id;
          (0, PF.i)(QQ, FQ.text, (FQ => {
            ZF.answerUiRequest({
              id: QQ,
              xu: FQ
            })
          }))
        }
      })), (0, AQ.h)(uQ.rc.TopRightHelper, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        void 0 !== FQ && mQ.l.GA("TopRightHelper", FQ, !0)
      })), (0, AQ.h)(uQ.rc.TaskProgress, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        (0, NQ.e)(FQ) && "string" === typeof FQ.taskId && "number" === typeof FQ.progress && (0, nF.e)({
          taskId: FQ.taskId,
          progress: FQ.progress
        })
      }))), Cw || (Cw = !0, (0, AQ.h)(IQ.o, (QQ => {
        const FQ = (0, NQ.h)(IQ.o, QQ);
        (0, NQ.e)(FQ) && mQ.l.GA("showShopFromServer", {
          toggle: FQ.aw,
          Xw: FQ.Xw
        }, !0)
      })), (0, AQ.h)(uQ.rc.OverShopInfo, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        (0, NQ.e)(FQ) && mQ.l.GA("overShopInfo", FQ.info, !0)
      })), (0, AQ.h)(uQ.rc.ShowShopTutorial, (() => {
        mQ.l.GA("showShopTutorial", null, !0)
      }))), Mw || (Mw = !0, (0, AQ.f)((() => {
        var QQ;
        (0, xw.D)(), null === (QQ = Gw) || void 0 === QQ || QQ(), Gw = (0, AQ.c)() ? (0, tw.g)(AQ.c) : null
      })), (0, AQ.h)(uQ.rc.SetCookie, (QQ => {
        const FQ = (0, NQ.j)(QQ),
          wQ = (0, TF.c)().gameNameWithVariation;
        (0, NQ.e)(FQ) && "string" === typeof FQ.key && null !== wQ && (0, Aw.setCookie)(wQ, FQ.key, FQ.value)
      })), (0, AQ.h)(uQ.rc.LeaveValues, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ((0, NQ.e)(FQ) && "string" === typeof FQ.leaveEventType) {
          const {
            leaveEventType: QQ,
            category: wQ,
            subCategory: LQ,
            value: qQ
          } = FQ;
          (0, xw.J)({
            leaveEventType: QQ,
            category: wQ,
            subCategory: LQ,
            value: qQ
          })
        }
      })), (0, AQ.h)(uQ.rc.CustomAnalyticsEvent, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ((0, NQ.e)(FQ) && "string" === typeof FQ.cat1) {
          const {
            cat1: QQ,
            cat2: wQ,
            cat3: LQ,
            value: qQ
          } = FQ;
          (0, xw.q)({
            cat1: QQ,
            cat2: wQ,
            cat3: LQ,
            value: qQ
          })
        }
      })), (0, AQ.h)(uQ.rc.ProgressionEvent, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ((0, NQ.e)(FQ)) {
          const {
            type: QQ,
            location1: wQ,
            location2: LQ,
            location3: qQ,
            score: oQ
          } = FQ;
          (0, xw.t)({
            type: QQ,
            location1: wQ,
            location2: LQ,
            location3: qQ,
            score: oQ
          })
        }
      })), (0, AQ.h)(uQ.rc.ResourceEvent, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ((0, NQ.e)(FQ)) {
          const {
            type: QQ,
            resourceType: wQ,
            amount: LQ,
            category: qQ,
            itemName: oQ
          } = FQ;
          (0, xw.x)({
            type: QQ,
            resourceType: wQ,
            amount: LQ,
            category: qQ,
            itemName: oQ
          })
        }
      })), (0, AQ.h)(uQ.rc.LeaderboardResponse, (QQ => {
        const FQ = (0, NQ.j)(QQ);
        if ((0, NQ.e)(FQ)) {
          const {
            category: QQ,
            timeframe: wQ,
            data: LQ
          } = FQ;
          mQ.l.GA("leaderboardResponse", {
            category: QQ,
            timeframe: wQ,
            data: LQ
          })
        }
      })), (0, AQ.h)(IQ.y, (QQ => {
        const FQ = (0, NQ.h)(IQ.y, QQ);
        "string" === typeof FQ && (0, ew.b)(QQ.conn, FQ)
      })), (0, AQ.h)(IQ.z, (QQ => {
        const FQ = (0, NQ.h)(IQ.z, QQ);
        "string" === typeof FQ && console.error(`[logErrorToConsole]: ${FQ}`)
      }))), lQ(), (0, Ow.c)(), zF || (zF = !0, (0, AQ.h)(IQ.h, (QQ => {
        const FQ = (0, NQ.h)(IQ.h, QQ);
        void 0 !== FQ && (0, KF.h)(FQ)
      }))), EF(), sF(), nQ || (nQ = !0, (0, oQ.v)(gQ)), LQ.gameBridge.attach(CL), (0, LQ.installPageSources)({
        commands: {
          ...LQ.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: lw.f
        },
        queries: AL,
        lookups: {
          ...LQ.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...tL,
          Xp: lw.b,
          drawCallStats: jw.j
        }
      }), (0, zw.b)(), kL()
    }
  },
  40175: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      c: () => vQ,
      f: () => kQ,
      j: () => mQ
    });
    var LQ = wQ(1904);
    let qQ = null,
      oQ = 0;
    const DQ = new Set;

    function kQ() {
      return qQ
    }

    function vQ() {
      return oQ
    }

    function mQ(QQ) {
      qQ = QQ, oQ++, (0, LQ.b)();
      for (const FQ of DQ) FQ()
    }

    function uQ(QQ) {
      DQ.add(QQ)
    }
  },
  40182: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      e: () => kQ
    });
    var LQ = wQ(40188);
    let qQ = null,
      oQ = null;

    function DQ() {
      return qQ ??= wQ.e(59).then((() => wQ(42016))).catch((QQ => {
        throw qQ = null, QQ
      })), qQ
    }

    function kQ() {
      return oQ ??= Promise.all([DQ(), (0, LQ.g)()]).then((QQ => {
        let [FQ] = QQ;
        return FQ
      }), (QQ => {
        throw oQ = null, QQ
      })), oQ
    }
  },
  36672: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    const LQ = {
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
  36483: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      h: () => oQ,
      k: () => bQ,
      l: () => kQ,
      n: () => vQ,
      o: () => mQ,
      p: () => HQ,
      t: () => uQ,
      w: () => DQ
    });
    var LQ = wQ(1254);
    let qQ = function(QQ) {
        return QQ[QQ.Join = 0] = "Join", QQ[QQ.Leave = 1] = "Leave", QQ[QQ.Push = 2] = "Push", QQ[QQ.Cursor = 3] = "Cursor", QQ[QQ.Submit = 4] = "Submit", QQ[QQ.ReloadAsVariation = 5] = "ReloadAsVariation", QQ[QQ.CreateFile = 6] = "CreateFile", QQ[QQ.RenameFile = 7] = "RenameFile", QQ[QQ.DeleteFile = 8] = "DeleteFile", QQ[QQ.SetEngine = 9] = "SetEngine", QQ[QQ.RenameFolder = 10] = "RenameFolder", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.Joined = 0] = "Joined", QQ[QQ.Updates = 1] = "Updates", QQ[QQ.Presence = 2] = "Presence", QQ[QQ.RemoteCursor = 3] = "RemoteCursor", QQ[QQ.ForceClose = 4] = "ForceClose", QQ[QQ.LobbyFilesChanged = 5] = "LobbyFilesChanged", QQ[QQ.EngineSettings = 6] = "EngineSettings", QQ
      }({});

    function DQ(QQ) {
      return "lobby" === QQ.kind ? `lobby:${QQ.path}` : `codeBlock:${QQ.pos[0]},${QQ.pos[1]},${QQ.pos[2]}`
    }

    function kQ(QQ) {
      if ("lobby" === QQ) return {
        kind: "lobby",
        path: LQ.i
      };
      if (QQ.startsWith("lobby:")) {
        const FQ = QQ.slice(6);
        return HQ(FQ) ? {
          kind: "lobby",
          path: FQ
        } : null
      }
      const FQ = QQ.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return FQ ? {
        kind: "codeBlock",
        pos: [parseInt(FQ[1]), parseInt(FQ[2]), parseInt(FQ[3])]
      } : null
    }

    function vQ(QQ) {
      return QQ.endsWith(".d.ts")
    }

    function mQ(QQ) {
      return QQ.endsWith(".ts") && !vQ(QQ)
    }
    const uQ = 64;

    function HQ(QQ) {
      if (!QQ || QQ !== QQ.trim()) return !1;
      if (QQ.length > uQ) return !1;
      if (QQ.startsWith("/") || QQ.includes("\\") || QQ.includes("\0")) return !1;
      if (!vQ(QQ) && !mQ(QQ) && ! function(QQ) {
          return QQ.endsWith(".js") && !QQ.endsWith(".min.js") && !QQ.endsWith(".bundle.js")
        }(QQ)) return !1;
      const FQ = QQ.split("/");
      for (const wQ of FQ)
        if ("" === wQ || "." === wQ || ".." === wQ) return !1;
      return !0
    }
    const bQ = 14e3
  },
  38585: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => qQ
    });
    const LQ = ["description", "label"];

    function qQ(QQ) {
      const FQ = QQ.type;
      return {
        type: FQ,
        params: QQ[FQ]
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);