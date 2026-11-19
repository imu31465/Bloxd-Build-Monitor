export const id = 46;
export const ids = [46];
export const modules = {
  38553: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      f: () => kT,
      i: () => zT
    });
    const iT = 6e3;

    function zT(TT, oT) {
      return [Math.floor(TT[0] / oT) * oT, Math.floor(TT[1] / oT) * oT, Math.floor(TT[2] / oT) * oT]
    }

    function kT(TT) {
      const oT = (null !== TT && void 0 !== TT ? TT : "").match(/-?\d+(?:\.\d+)?/g);
      return oT && oT.length >= 3 ? [Number(oT[0]), Number(oT[1]), Number(oT[2])] : null
    }

    function WT(TT, oT) {
      return TT === oT ? String(TT) : `${TT}-${oT}`
    }

    function XT(TT, oT, IT, iT) {
      const zT = [];
      let kT = new Map;
      for (let WT = TT[2]; WT < TT[2] + oT; WT++) {
        const XT = new Map;
        let BT = TT[0];
        for (; BT < TT[0] + oT;) {
          const zT = iT(BT, IT, WT);
          let FT = BT;
          for (; FT + 1 < TT[0] + oT && iT(FT + 1, IT, WT) === zT;) FT++;
          if (null !== zT) {
            const TT = `${BT} ${FT} ${zT}`,
              oT = kT.get(TT);
            oT ? (oT.z1 = WT, kT.delete(TT), XT.set(TT, oT)) : XT.set(TT, {
              x0: BT,
              x1: FT,
              z0: WT,
              z1: WT,
              name: zT
            })
          }
          BT = FT + 1
        }
        zT.push(...kT.values()), kT = XT
      }
      return zT.push(...kT.values()), zT.sort(((TT, oT) => TT.z0 - oT.z0 || TT.x0 - oT.x0)).map((TT => `x${WT(TT.x0,TT.x1)} z${WT(TT.z0,TT.z1)} ${TT.name}`))
    }

    function BT(TT, oT, IT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : iT;
      const BT = [TT[0] + oT - 1, TT[1] + oT - 1, TT[2] + oT - 1],
        FT = null !== zT && zT.every(((oT, IT) => Math.floor(oT) >= TT[IT] && Math.floor(oT) <= BT[IT])),
        ST = [`The chunk from ${TT.join(" ")} to ${BT.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== zT && ST.push(`The player's feet are at ${zT.map(Math.floor).join(" ")}, ${FT?"in this chunk":"outside this chunk"}.`);
      const DT = [];
      for (let iT = TT[1]; iT <= BT[1]; iT++) {
        const zT = XT(TT, oT, iT, IT).join("; "),
          kT = DT[DT.length - 1];
        (null === kT || void 0 === kT ? void 0 : kT.boxes) === zT ? kT.to = iT : DT.push({
          from: iT,
          to: iT,
          boxes: zT
        })
      }
      const LT = DT.filter((TT => "" !== TT.boxes));
      0 === LT.length && ST.push("It is all air.");
      let xT = ST.join("\n").length;
      for (const iT of LT) {
        const TT = `y${WT(iT.from,iT.to)}: ${iT.boxes}`;
        if (xT += TT.length + 1, xT > kT) {
          ST.push(`Cut short: the layers from y${iT.from} up aren't shown, as there are too many blocks.`);
          break
        }
        ST.push(TT)
      }
      return ST.join("\n")
    }
  },
  8226: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(12);

    function zT() {
      return !iT.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35898: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      e: () => kT,
      h: () => zT
    });
    const iT = [.25, .5, 1, 2, 4, 8, 16];

    function zT(TT, oT) {
      const IT = iT;
      let zT = IT.indexOf(TT);
      return -1 === zT && (zT = IT.findIndex((oT => oT >= TT)), -1 === zT && (zT = IT.length - 1)), "up" === oT ? IT[Math.min(zT + 1, IT.length - 1)] : IT[Math.max(zT - 1, 0)]
    }

    function kT(TT) {
      return TT <= iT[0]
    }

    function WT(TT) {
      return TT >= iT[iT.length - 1]
    }
  },
  35498: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      i: () => kT
    });
    let iT = !1;

    function zT() {
      return iT
    }

    function kT(TT) {
      return iT !== TT && (iT = TT, !0)
    }
  },
  37935: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(16),
      zT = IT(1770);

    function kT(TT) {
      let {
        taskId: oT,
        progress: IT
      } = TT;
      const iT = zT.e.get("_tasks");
      null !== iT && void 0 !== iT && iT[oT] && zT.e.apply({
        _tasks: {
          ...iT,
          [oT]: {
            ...iT[oT],
            progress: IT
          }
        }
      })
    }
    iT.h.subscribe("clientTaskProgress", (TT => {
      kT(TT)
    }))
  },
  38526: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => KT,
      d: () => LT,
      g: () => cT,
      k: () => FT,
      o: () => DT,
      s: () => BT,
      w: () => WT,
      z: () => ST
    });
    var iT = IT(1770),
      zT = IT(16),
      kT = IT(1780);
    const WT = (0, kT.l)((function() {
        var TT, oT, IT, zT;
        return {
          health: null !== (TT = iT.e.get("_health")) && void 0 !== TT ? TT : null,
          maxHealth: null !== (oT = iT.e.get("_totalMaxHealth")) && void 0 !== oT ? oT : null,
          shield: null !== (IT = iT.e.get("_shield")) && void 0 !== IT ? IT : null,
          maxShield: null !== (zT = iT.e.get("maxShield")) && void 0 !== zT ? zT : null
        }
      }), [], (0, kT.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      XT = [{
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

    function BT(TT, oT) {
      return XT[(TT ? 2 : 0) + (oT ? 1 : 0)]
    }
    const FT = (0, kT.l)((function() {
      var TT;
      return null !== (TT = iT.e.get("_aura")) && void 0 !== TT ? TT : null
    }), [], (0, kT.i)("_aura"));

    function ST(TT) {
      return {
        watch: oT => (0, zT.k)("shotPlayer", (IT => {
          let {
            playerId: iT,
            damage: zT,
            wasCrit: kT,
            distance: WT
          } = IT;
          TT(iT) && oT({
            damage: zT,
            wasCrit: kT,
            distance: WT
          })
        }))
      }
    }

    function DT(TT) {
      return (0, kT.e)("chat", (oT => {
        let {
          serverChatMsgId: IT,
          content: iT,
          chatterEId: zT
        } = oT;
        return {
          serverChatMsgId: null !== IT && void 0 !== IT ? IT : null,
          content: iT,
          author: zT ? TT(zT) : null
        }
      }))
    }
    class LT {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const IT = this.shown;
        return TT !== this.needed && (this.needed = TT, this.neededSince = oT, null === TT && (this.shown = null)), this.shown !== this.needed && oT - this.neededSince > 200 && (this.shown = this.needed), this.shown !== IT
      }
    }

    function xT(TT) {
      return [{
        translationKey: `touchKeys:${TT}`
      }]
    }
    const cT = {
      open: xT("open"),
      close: xT("close"),
      milk: xT("milk"),
      shear: xT("shear"),
      tame: xT("tame"),
      feed: xT("feed"),
      ride: xT("ride")
    };

    function KT(TT) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: TT
      }]
    }
  },
  39541: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      f: () => WT
    });
    var iT = IT(2848);
    let zT = null,
      kT = null;

    function WT() {
      return kT ??= IT.e(203).then((() => IT(35350))).then((TT => {
        let {
          ITEM_SPRITES: oT,
          ITEM_SPRITES_WITHOUT_FILE: IT,
          ITEM_FILES_WITHOUT_SPRITE: kT
        } = TT;
        zT = function(TT, oT, IT) {
          const zT = new Set,
            kT = (0, iT.u)(oT);
          let WT = 0;
          for (const [iT, XT] of TT.entries()) iT === kT[WT] ? WT++ : zT.add(XT);
          if ("" !== IT)
            for (const XT of IT.split(iT.s)) zT.add(XT);
          return zT
        }(oT.split(iT.s), IT, kT)
      }), (TT => {
        throw kT = null, TT
      })), kT
    }

    function XT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = zT) || void 0 === IT ? void 0 : IT.has(TT)) && void 0 !== oT && oT
    }
  },
  38546: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      f: () => kT,
      j: () => zT
    });
    const iT = 128;

    function zT(TT, oT, IT, iT) {
      const zT = 2 * oT - 1,
        kT = 1 - 2 * IT,
        WT = TT(0) - zT * TT(3),
        XT = TT(4) - zT * TT(7),
        BT = TT(8) - zT * TT(11),
        FT = TT(1) - kT * TT(3),
        ST = TT(5) - kT * TT(7),
        DT = TT(9) - kT * TT(11);
      iT[0] = XT * DT - BT * ST, iT[1] = BT * FT - WT * DT, iT[2] = WT * ST - XT * FT;
      const LT = iT[0] * TT(3) + iT[1] * TT(7) + iT[2] * TT(11) < 0 ? -1 : 1,
        xT = Math.hypot(iT[0], iT[1], iT[2]) * LT;
      return iT[0] /= xT, iT[1] /= xT, iT[2] /= xT, iT
    }

    function kT(TT, oT, IT, iT, zT, kT) {
      const WT = [Math.floor(oT[0]), Math.floor(oT[1]), Math.floor(oT[2])],
        XT = [0, 0, 0],
        BT = [1 / 0, 1 / 0, 1 / 0],
        FT = [1 / 0, 1 / 0, 1 / 0];
      for (let LT = 0; LT < 3; LT++) XT[LT] = Math.sign(IT[LT]), 0 !== XT[LT] && (FT[LT] = Math.abs(1 / IT[LT]), BT[LT] = (WT[LT] + (XT[LT] > 0 ? 1 : 0) - oT[LT]) / IT[LT]);
      let ST = 0,
        DT = Math.abs(IT[0]) > Math.abs(IT[1]) ? 0 : 1;
      for (Math.abs(IT[2]) > Math.abs(IT[DT]) && (DT = 2); ST <= iT;) {
        if (TT(WT[0], WT[1], WT[2])) return zT[0] = WT[0], zT[1] = WT[1], zT[2] = WT[2], kT[0] = 0, kT[1] = 0, kT[2] = 0, kT[DT] = -XT[DT], !0;
        DT = BT[0] < BT[1] ? 0 : 1, BT[2] < BT[DT] && (DT = 2), ST = BT[DT], WT[DT] += XT[DT], BT[DT] += FT[DT]
      }
      return !1
    }
  },
  38520: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      return Math.hypot(TT[0] - oT[0], TT[1] - oT[1], TT[2] - oT[2]) < IT + .5
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37951: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST
    });
    var iT = IT(1193),
      zT = IT(1296),
      kT = IT(12),
      WT = IT(1280),
      XT = IT(1293),
      BT = IT(1468),
      FT = IT(35468);

    function ST(TT) {
      let {
        FI: oT,
        SI: IT
      } = TT;
      const ST = null !== oT && void 0 !== oT ? oT : (0, XT.e)().gameNameWithVariation;
      (0, iT.J)(ST) && ((0, FT.l)(), (0, WT.db)((() => {
        console.log("Received matchmaking order from game server to game", oT), (0, kT.h)("inGameReplay"), (0, BT.navigatePreserveSearch)((0, zT.c)(ST, null !== IT && void 0 !== IT ? IT : void 0))
      }), "video_start"))
    }
  },
  38128: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(16),
      zT = IT(1794);

    function kT(TT) {
      var oT, IT;
      const kT = (0, zT.s)(null !== (oT = null === (IT = zT.z.toggleFreeCam) || void 0 === IT ? void 0 : IT[0]) && void 0 !== oT ? oT : null);
      iT.h.XM("showBottomMessage", {
        message: `Free Camera ${TT?"Enabled":"Disabled"}${kT?` - Press ${kT} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37938: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT,
      g: () => WT,
      i: () => XT,
      l: () => FT
    });
    var iT = IT(16),
      zT = IT(1325);
    const kT = new Map;

    function WT(TT, oT) {
      iT.h.XM("newUiRequest", {
        id: TT,
        clientParameters: oT
      }, !0)
    }

    function XT(TT) {
      iT.h.XM("removeUiRequest", TT, !0);
      const oT = kT.get(TT);
      oT && (oT.tearDownNotification(), kT.delete(TT))
    }

    function BT() {
      iT.h.XM("clearUiRequests");
      for (const TT of kT.values()) TT.tearDownNotification();
      kT.clear()
    }

    function FT(TT, oT, IT) {
      const iT = zT.NotificationProvider.showPromptPopup({
        title: oT,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      kT.set(TT, iT), iT.getResult().then((oT => {
        kT.delete(TT), "notificationTornDown" !== oT && IT(oT)
      }))
    }
  },
  38551: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => DT,
      d: () => LT
    });
    var iT = IT(193),
      zT = IT(38553);
    const kT = 20;

    function WT(TT) {
      return TT.map(Math.floor).join(" ")
    }

    function XT(TT) {
      return null === TT.amount || 1 === TT.amount ? TT.name : `${TT.amount} ${TT.name}`
    }
    var BT = IT(38557),
      FT = IT(1770),
      ST = IT(1293);

    function DT(TT, oT) {
      if (!TT) return BT.e;
      const IT = TT.playerFeet();
      if (!IT) return "The player isn't in the world yet, so no blocks can be seen.";
      const kT = iT.c.Yc,
        WT = (0, zT.i)(null !== oT && void 0 !== oT ? oT : IT, kT),
        XT = TT.chunkBlocks(WT);
      return XT ? (0, zT.c)(WT, kT, ((oT, IT, iT) => {
        const zT = XT(oT, IT, iT);
        return 0 === zT ? null : TT.blockName(zT).split("|")[0]
      }), IT) : `The chunk from ${WT.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${IT.map(Math.floor).join(" ")}.`
    }

    function LT(TT) {
      var oT, IT, iT;
      if (!TT) return BT.f;
      const zT = TT.playerFeet();
      if (!zT) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: DT,
        heldSlot: LT
      } = TT.inventory();
      return function(TT) {
        const oT = [];
        null !== TT.game && oT.push(`Game: ${TT.game}.`);
        const IT = null === TT.health ? "" : `, health ${Math.round(TT.health)}${null===TT.maxHealth?"":` of ${Math.round(TT.maxHealth)}`}`;
        oT.push(`The player (the creator) stands at ${WT(TT.position)}${IT}, ${TT.creative?"in":"not in"} creative mode.`);
        const iT = TT.slots[TT.heldSlot];
        oT.push(iT ? `Holding (slot ${TT.heldSlot}): ${XT(iT)}.` : `Holding nothing (slot ${TT.heldSlot} is empty).`);
        const zT = TT.slots.flatMap(((TT, oT) => TT ? [`slot ${oT}: ${XT(TT)}`] : []));
        oT.push(zT.length > 0 ? `Inventory: ${zT.join(", ")}.` : "Inventory: empty.");
        const BT = oT => Math.hypot(oT.position[0] - TT.position[0], oT.position[1] - TT.position[1], oT.position[2] - TT.position[2]),
          FT = [...TT.nearby].sort(((TT, oT) => BT(TT) - BT(oT)));
        if (0 === FT.length) oT.push("No other players or mobs are near enough to see.");
        else {
          oT.push("Near them, nearest first:");
          for (const TT of FT.slice(0, kT)) {
            const IT = "player" === TT.kind ? `player "${TT.name||"?"}"` : TT.name && TT.name !== TT.kind ? `${TT.kind} "${TT.name}"` : TT.kind,
              iT = Math.round(BT(TT));
            oT.push(`- ${IT} at ${WT(TT.position)}, ${iT} block${1===iT?"":"s"} away`)
          }
          FT.length > kT && oT.push(`- and ${FT.length-kT} more further away`)
        }
        return TT.droppedItems > 0 && oT.push(`${TT.droppedItems} dropped item${1===TT.droppedItems?" is":"s are"} on the ground nearby.`), oT.join("\n")
      }({
        game: null !== (oT = (0, ST.e)().gameNameWithVariation) && void 0 !== oT ? oT : null,
        position: zT,
        health: null !== (IT = FT.e.get("_health")) && void 0 !== IT ? IT : null,
        maxHealth: null !== (iT = FT.e.get("_totalMaxHealth")) && void 0 !== iT ? iT : null,
        creative: !0 === FT.e.get("creative"),
        heldSlot: LT,
        slots: DT,
        nearby: TT.nearby(),
        droppedItems: TT.droppedItems()
      })
    }
  },
  37962: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      d: () => BT,
      g: () => FT
    });
    var iT = IT(1193),
      zT = IT(1007),
      kT = IT(35823),
      WT = IT(16);

    function XT(TT) {
      let {
        lobbyName: oT,
        gameNameWithVariation: IT
      } = TT;
      return !(0, iT.L)(oT) || null !== IT && (IT.startsWith("testGym") || (0, zT.m)(IT))
    }

    function BT(TT) {
      return TT.po === kT.e.Leave || TT.po === kT.e.Cursor
    }

    function FT(TT) {
      WT.h.XM("codeCollab", {
        type: TT.po,
        docKey: TT.bo,
        version: TT.yo,
        editorCount: TT.Po,
        peers: TT.Vo,
        updates: TT.TI,
        playerId: TT.oI,
        playerName: TT.II,
        colour: TT.iI,
        anchor: TT.zI,
        head: TT.kI,
        existingCursors: TT.WI,
        files: TT.XI,
        engineSettings: TT.BI
      })
    }
  },
  39487: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => NT,
      E: () => QT,
      H: () => CT,
      J: () => YT,
      M: () => fT,
      N: () => tT,
      P: () => sT,
      Q: () => JT,
      e: () => GT,
      f: () => HT,
      i: () => vT,
      k: () => pT,
      m: () => ET,
      q: () => uT,
      s: () => OT,
      u: () => jT,
      x: () => aT,
      z: () => UT
    });
    var iT = IT(1357),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(2201),
      XT = IT(4299),
      BT = IT(4269);
    let FT, ST = !1,
      DT = !1,
      LT = !1,
      xT = !1;
    const cT = 1300,
      KT = 3e3;
    let MT = 0,
      rT = !1,
      AT = !1,
      gT = 0;
    const hT = 2;
    let wT = !1,
      mT = !1;
    const eT = new Set,
      RT = new Set;

    function uT() {
      return ST
    }

    function vT() {
      return AT
    }

    function ET() {
      return mT
    }

    function fT() {
      return (0, kT.q)() && !mT
    }

    function CT(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT !== mT) {
        mT = TT;
        for (const TT of [...RT]) TT(mT);
        oT && sT()
      }
    }

    function jT(TT) {
      return RT.add(TT), () => {
        RT.delete(TT)
      }
    }

    function JT() {
      (0, XT.g)(WT.A.Menu, (0, kT.q)() ? 0 : WT.A.Menu)
    }

    function UT() {
      AT = !1, gT = 0, JT(), sT()
    }

    function aT(TT) {
      return eT.add(TT), () => {
        eT.delete(TT)
      }
    }

    function YT(TT) {
      DT = !1, TT !== ST && (ST = TT, xT = !1, clearTimeout(FT), LT = !ST && wT, ST ? (rT = !1, AT = !1, gT = 0) : fT() && !wT && (AT = !0), wT = !1, ST && !fT() && yT(), PT(), LT && sT())
    }

    function QT(TT) {
      TT !== rT && (rT = TT, TT || sT())
    }

    function OT() {
      DT = !1, xT || !0 !== ZT() || (xT = !0, clearTimeout(FT), FT = setTimeout(nT, cT))
    }

    function HT() {
      return (!DT || performance.now() - MT > KT) && (DT = (0, BT.O)().lockPointer(), MT = performance.now()), DT
    }

    function nT() {
      qT() && lT() && HT()
    }

    function qT() {
      return fT() && !ST && !rT && !(0, iT.f)()
    }

    function ZT() {
      var TT;
      return "undefined" === typeof navigator || null === (TT = navigator.userActivation) || void 0 === TT ? void 0 : TT.isActive
    }

    function lT() {
      return LT && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== ZT()
    }

    function sT() {
      fT() ? qT() && !AT && lT() && HT() : ST && !wT && yT()
    }

    function tT() {
      AT ? navigator.vendor.startsWith("Apple") ? bT() : gT = hT : sT()
    }

    function GT() {
      gT > 0 && 0 === --gT && bT()
    }

    function pT() {
      gT = 0
    }

    function bT() {
      qT() && !0 === ZT() && HT()
    }

    function yT() {
      wT = !0, (0, BT.O)().unlockPointer()
    }

    function NT() {
      DT = !1, LT = !1, xT = !1, clearTimeout(FT), rT = !1, AT = !1, gT = 0, wT = !1;
      const TT = ST;
      ST = !1, TT && PT()
    }

    function PT() {
      for (const TT of [...eT]) TT(ST);
      zT.h.XM("pointerLockUpdate", ST)
    }
  },
  39465: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT,
      f: () => XT,
      i: () => DT,
      j: () => FT,
      k: () => WT,
      o: () => ST,
      p: () => BT
    });
    let iT = null,
      zT = null,
      kT = null;

    function WT(TT) {
      iT = TT
    }

    function XT() {
      return iT
    }

    function BT(TT) {
      zT = TT
    }

    function FT() {
      return zT
    }

    function ST(TT) {
      kT = TT
    }

    function DT() {
      return kT
    }

    function LT() {
      var TT, oT;
      return !0 === (null === (TT = zT) || void 0 === TT || null === (oT = TT.currentViewer) || void 0 === oT ? void 0 : oT.inPlayback)
    }
  },
  39513: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      g: () => kT,
      h: () => XT
    });
    var iT = IT(39354),
      zT = IT(39371);

    function kT(TT) {
      if (TT.queries.drawCensus() < iT.zb.BYTES) return null;
      const oT = TT.memoryData(TT.scratch(), iT.zb.BYTES, 4, "the draw census");
      return null === oT ? null : {
        terrainOpaque: iT.zb.terrainOpaque(oT, 0),
        terrainTransparent: iT.zb.terrainTransparent(oT, 0),
        terrainPack: iT.zb.terrainPack(oT, 0),
        earthSky: iT.zb.earthSky(oT, 0),
        skyMeshes: iT.zb.skyMeshes(oT, 0),
        regular: iT.zb.regular(oT, 0),
        thin: iT.zb.thin(oT, 0),
        line: iT.zb.line(oT, 0),
        text: iT.zb.text(oT, 0),
        particles: iT.zb.particles(oT, 0)
      }
    }

    function WT(TT) {
      const {
        terrainOpaque: oT,
        terrainTransparent: IT,
        earthSky: iT,
        skyMeshes: zT,
        regular: kT,
        thin: WT,
        line: XT,
        text: BT,
        particles: FT
      } = TT;
      return oT + IT + iT + zT + kT + WT + XT + BT + FT
    }

    function XT() {
      const TT = (0, zT.i)();
      return !0 === (null === TT || void 0 === TT ? void 0 : TT.isCoreRunning) ? function(TT) {
        const oT = kT(TT);
        if (null === oT) return [];
        const {
          terrainOpaque: IT,
          terrainTransparent: iT,
          terrainPack: zT,
          earthSky: XT,
          skyMeshes: BT,
          regular: FT,
          thin: ST,
          line: DT,
          text: LT,
          particles: xT
        } = oT;
        return [{
          label: "Drawn",
          value: `${WT(oT)}`
        }, {
          label: "Terrain",
          value: `${IT} opaque / ${iT} transparent (${zT} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${FT} / ${ST}`
        }, {
          label: "Text / Lines",
          value: `${LT} / ${DT}`
        }, {
          label: "Sky / Particles",
          value: `${XT+BT} / ${xT}`
        }]
      }(TT.api) : []
    }
  },
  39520: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      loadIcons: () => ET,
      setIconFileOverrides: () => fT,
      wasmIconLookups: () => HT,
      wasmIconQueries: () => OT
    });
    var iT = IT(4014),
      zT = IT(3989),
      kT = IT(39524),
      WT = IT(1762),
      XT = IT(1751),
      BT = IT(2844),
      FT = IT(2848);
    let ST = null,
      DT = null;

    function LT(TT) {
      const oT = TT.startsWith(FT.i),
        [IT, iT = IT, zT = IT] = (oT ? TT.slice(FT.i.length) : TT).split(FT.g);
      return {
        top: IT,
        left: iT,
        right: zT,
        half: oT
      }
    }

    function xT(TT) {
      const oT = null === ST ? void 0 : (0, BT.d)(TT),
        IT = void 0 === oT ? 0 : ST.codes[oT];
      return 0 === IT ? void 0 : ST.pool[IT - 1]
    }
    var cT = IT(2837),
      KT = IT(3983),
      MT = IT(4011),
      rT = IT(39533);
    const AT = "item:";
    let gT = null,
      hT = null,
      wT = null,
      mT = null,
      eT = !1,
      RT = !1,
      uT = null,
      vT = 0;

    function ET() {
      return RT || (RT = !0, (0, MT.h)().then((TT => {
        TT && (0, WT.d)()
      }))), wT ??= Promise.all([(0, cT.h)(), (DT ??= IT.e(1).then((() => IT(41422))).then((TT => {
        let {
          BLOCK_FACE_RUNS: oT,
          BLOCK_FACES: IT,
          MAX_FACE_ITEM_ID: iT
        } = TT;
        ST = {
          codes: (0, FT.w)(oT, iT + 1),
          pool: IT.split(FT.s).map(LT)
        }
      }), (TT => {
        throw DT = null, TT
      })), DT), (0, rT.g)(), IT.e(186).then((() => IT(8763)))]).then((TT => {
        let [, , oT, IT] = TT;
        oT.followBundledTextures(), gT = oT, hT = IT, (0, WT.d)()
      }), (TT => {
        wT = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", TT)
      })), wT
    }

    function fT(TT) {
      uT = TT, vT++, (0, WT.d)()
    }

    function CT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = uT) || void 0 === IT ? void 0 : IT.itemSprite(TT)) && void 0 !== oT ? oT : gT.itemSpriteUrl(TT)
    }

    function jT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = uT) || void 0 === IT ? void 0 : IT.blockTexture(TT)) && void 0 !== oT ? oT : gT.blockTextureUrl(TT)
    }

    function JT(TT) {
      var oT;
      return null !== (oT = (0, cT.e)(TT)) && void 0 !== oT ? oT : TT
    }

    function UT(TT, oT) {
      var IT, iT, zT;
      return null !== (IT = null !== (iT = null !== (zT = jT(TT)) && void 0 !== zT ? zT : null === oT || void 0 === oT ? void 0 : oT.rotated[TT]) && void 0 !== iT ? iT : null === oT || void 0 === oT ? void 0 : oT.animated[TT]) && void 0 !== IT ? IT : gT.notFoundUrl()
    }

    function aT(TT) {
      return void 0 !== (0, BT.d)(TT) ? TT : /^[1-9][0-9]*$/.test(TT) ? (0, BT.g)(Number(TT)) : void 0
    }

    function YT(TT) {
      var oT;
      if (TT.startsWith(AT)) {
        var IT;
        const oT = (0, cT.e)(TT.slice(5));
        return null !== (IT = void 0 === oT ? null : CT(oT)) && void 0 !== IT ? IT : gT.notFoundUrl()
      }
      return null !== (oT = gT.particleUrl(TT)) && void 0 !== oT ? oT : gT.notFoundUrl()
    }

    function QT(TT, oT) {
      return "StairsBlock" === TT ? TT : oT ? "SlabBlock" : "CubeBlock"
    }
    const OT = {
        async blockIcon(TT) {
          var oT;
          let {
            name: iT,
            size: zT,
            lineWidth: kT
          } = TT;
          await ET();
          const XT = null !== (oT = aT(iT)) && void 0 !== oT ? oT : iT,
            FT = (0, MT.d)(XT, zT, kT);
          if (null !== FT) return FT;
          const ST = xT(XT),
            DT = (0, BT.d)(XT),
            LT = void 0 === DT || null === hT ? void 0 : hT.itemTypeNameOf(DT);
          if (null === gT || void 0 === ST) return "";
          const cT = [ST.top, ST.left, ST.right].some((TT => null === jT(TT))),
            rT = cT ? await (mT ??= IT.e(196).then((() => IT(33287))).then((TT => (eT && (eT = !1, (0, WT.d)()), {
              rotated: TT.rotatedBlockTextures,
              animated: TT.animatedBlockTextures
            })), (TT => (mT = null, eT = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", TT), null))), mT) : null;
          if (cT && null === rT) return "";
          const AT = {
              top: UT(ST.top, rT),
              left: UT(ST.left, rT),
              right: UT(ST.right, rT),
              itemType: QT(LT, ST.half)
            },
            wT = 0 === vT ? XT : `${XT}#${vT}`;
          return (await (0, KT.d)()).drawBlockIconUrl(wT, zT, kT, (() => AT))
        }
      },
      HT = {
        itemIcon: function(TT) {
          var oT, IT;
          if (null === gT) return ET(), XT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          if ((0, zT.m)(TT)) return {
            kind: "icon",
            url: null !== (IT = gT.ingameIconUrl(TT)) && void 0 !== IT ? IT : gT.notFoundUrl()
          };
          if (TT.startsWith(zT.e)) return {
            kind: "icon",
            url: YT(TT.slice(zT.e.length))
          };
          if (0 === (0, BT.h)()) return (0, kT.c)(), XT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          const WT = null !== (oT = aT(TT)) && void 0 !== oT ? oT : TT,
            FT = (0, BT.d)(WT),
            ST = void 0 === FT ? void 0 : hT.itemTypeNameOf(FT);
          if (void 0 !== xT(WT)) return {
            kind: "drawnBlock"
          };
          const DT = function(TT) {
            var oT;
            return null !== (oT = CT(JT(TT))) && void 0 !== oT ? oT : gT.notFoundUrl()
          }(WT);
          if ((0, MT.e)(WT) && ! function(TT) {
              return null !== uT && (null !== uT.itemSprite(JT(TT)) || null !== uT.model(TT))
            }(WT)) return {
            kind: "model",
            url: DT
          };
          if ("Gun" === ST) return {
            kind: "gun",
            url: DT
          };
          if (void 0 !== FT && "GrayscaleArmour" === hT.itemTypeOf(FT) || Object.hasOwn(iT.e, WT)) {
            var LT;
            const oT = null !== (LT = (0, iT.f)(TT)) && void 0 !== LT ? LT : (0, iT.f)(WT);
            if (oT) return {
              kind: "item",
              url: DT,
              tint: oT
            }
          }
          return {
            kind: "item",
            url: DT
          }
        },
        hasIcon: function(TT) {
          return void 0 !== aT(TT) || (0, zT.m)(TT) || TT.startsWith(zT.e)
        },
        isItemName: function(TT) {
          return void 0 !== aT(TT)
        }
      }
  },
  39457: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      attachPlayGameSources: () => GI,
      playGameSources: () => tI
    });
    var iT = IT(1751),
      zT = IT(39465),
      kT = IT(4269),
      WT = IT(39371),
      XT = IT(39471),
      BT = IT(38526),
      FT = IT(16),
      ST = IT(4285),
      DT = IT(4276),
      LT = IT(39403),
      xT = IT(39429),
      cT = IT(39476),
      KT = IT(39415);
    (0, KT.i)(ST.$b.Chat, (TT => {
      if (TT.payloadKind !== DT.fc.Msgpack) return;
      const oT = function(TT) {
        if (null === TT || "object" !== typeof TT || !("content" in TT)) return null;
        const {
          chatMsgId: oT,
          content: IT,
          chatterEId: iT
        } = TT;
        return {
          serverChatMsgId: null !== oT && void 0 !== oT ? oT : void 0,
          content: IT,
          chatterEId: void 0 === iT || null === iT ? void 0 : String(iT)
        }
      }((0, LT.e)(TT.payload));
      null !== oT && FT.h.XM("chat", oT, !0)
    }));
    const MT = {
        chatReceived: (0, BT.o)((function(TT) {
          var oT, IT, iT;
          return {
            id: TT,
            name: null !== (oT = cT.g.getName(TT)) && void 0 !== oT ? oT : null,
            local: (0, xT.h)() === TT,
            profileEffect: null !== (IT = null === (iT = (0, cT.k)(TT)) || void 0 === iT ? void 0 : iT.profileEffect) && void 0 !== IT ? IT : null
          }
        }))
      },
      rT = {
        sendChatMessage(TT) {
          var oT;
          let {
            US: IT,
            channelName: iT
          } = TT;
          null === (oT = (0, WT.i)()) || void 0 === oT || oT.clientApi.sendChat(IT, iT)
        }
      };
    var AT = IT(193),
      gT = IT(1770),
      hT = IT(39354),
      wT = IT(38520);
    const mT = [0, 0, 0],
      eT = {
        codeBlockClickable(TT) {
          var oT;
          const IT = (0, WT.i)();
          if (null === IT || void 0 === IT || !IT.isSessionLive) return !1;
          const iT = IT.api;
          if (0 !== (hT.s.playerFlags(iT.apiView, 0) & hT.Cd.Crouching)) return !1;
          const zT = iT.queries.directorEntity(iT.localId) >= hT.qb.BYTES ? iT.memoryData(iT.scratch(), hT.qb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === zT) return !1;
          for (let kT = 0; kT < 3; kT++) mT[kT] = hT.qb.feet(zT, 0, kT);
          return mT[1] += hT.qb.eyeHeight(zT, 0), (0, wT.e)(mT, TT, null !== (oT = gT.e.get("blockReach")) && void 0 !== oT ? oT : AT.c.mw)
        }
      },
      RT = {
        clickCodeBlock(TT) {
          var oT;
          null === (oT = (0, WT.i)()) || void 0 === oT || oT.clickCodeBlock(TT)
        }
      };
    var uT = IT(39383),
      vT = IT(39478),
      ET = IT(1007),
      fT = IT(38004),
      CT = IT(4266),
      jT = IT(39392),
      JT = IT(39379),
      UT = IT(39400);

    function aT(TT) {
      if (null === TT) return null;
      const oT = [];
      for (const IT of TT) {
        const TT = Object.keys(IT)[0];
        if ("WT" === TT) {
          const {
            str: TT,
            style: iT,
            clickableUrl: zT
          } = IT.WT, kT = Object.keys(TT)[0], WT = TT[kT];
          "string" !== kT && "styledEntityName" !== kT && "styledTranslatedText" !== kT || oT.push({
            str: WT,
            style: iT,
            clickableUrl: zT
          })
        } else oT.push(IT[TT])
      }
      return oT
    }
    const YT = {
      screenPos(TT) {
        var oT, IT;
        return null !== (oT = null === (IT = (0, WT.i)()) || void 0 === IT ? void 0 : IT.renderFrame.projectWorldPosToScreenPos(TT)) && void 0 !== oT ? oT : {
          x: 0,
          y: 0
        }
      }
    };
    let QT = !1;

    function OT() {
      QT || (QT = !0, (0, KT.i)(ST.$b.ProgressBarUpdate, (TT => {
        const oT = (0, UT.l)(TT);
        (0, UT.d)(oT) && FT.h.XM("progressBarUpdate", oT, !0)
      })), (0, KT.i)(jT.D, (TT => {
        const oT = (0, UT.h)(jT.D, TT);
        oT && FT.h.XM("middleScreenBarInitiate", {
          duration: oT.Eo,
          fo: oT.fo,
          horizBarRemOffset: oT.Co
        }, !0)
      })), (0, KT.i)(ST.$b.RemoveMiddleScreenBar, (() => {
        FT.h.XM("middleScreenBarRemove")
      })), (0, KT.i)(jT.pb, (TT => {
        const oT = (0, UT.h)(jT.pb, TT);
        if (oT) {
          var IT;
          const TT = oT.xT ? null === (IT = (0, WT.i)()) || void 0 === IT ? void 0 : IT.renderFrame.projectDirectionToScreenPos(oT.xT) : void 0;
          FT.h.XM("sendHitmarker", {
            rI: oT.rI,
            screenPos: TT
          }, !0)
        }
      })), (0, KT.i)(jT.wb, (TT => {
        const oT = (0, UT.h)(jT.wb, TT);
        if (oT) {
          const {
            id: TT,
            position: IT,
            style: iT,
            kT: zT,
            FT: kT
          } = oT;
          FT.h.XM("setDirectionArrow", {
            id: TT,
            position: IT,
            style: iT,
            text: aT(zT),
            FT: kT
          }, !0)
        }
      })), (0, KT.i)(jT.h, (TT => {
        const oT = (0, UT.h)(jT.h, TT);
        oT && FT.h.XM("clearDirectionArrow", {
          id: oT.id
        }, !0)
      })), (0, KT.i)(jT.w, (TT => {
        const oT = (0, UT.h)(jT.w, TT);
        oT && FT.h.XM("flyingMiddleMessage", {
          content: aT(oT.YT),
          QT: oT.QT,
          OT: oT.OT
        }, !0)
      })), (0, KT.i)(ST.$b.WorldVariation, (TT => {
        const oT = (0, UT.l)(TT);
        if ("string" === typeof oT) {
          const TT = oT === ET.f ? null : {
            message: `Currently loaded as variation: ${oT}`,
            type: "Warning"
          };
          FT.h.XM("showPermanentBottomMessage", TT, !0)
        }
      })), (0, KT.i)(jT.T, (TT => {
        const oT = (0, UT.h)(jT.T, TT);
        oT && function(TT, oT) {
          const {
            type: IT,
            params: iT
          } = (0, fT.g)(oT), zT = {
            ...iT
          };
          for (const kT of fT.e) zT[kT] && (zT[kT] = aT(zT[kT]));
          CT.e.queueQTE(TT, IT, zT).getResult().then((oT => {
            var IT;
            "boolean" === typeof oT && (null === (IT = (0, WT.i)()) || void 0 === IT || IT.send(JT.b.QteResponse, {
              qteId: TT,
              qteResponse: oT
            }))
          }))
        }(oT.id, oT.qI)
      })), (0, KT.i)(jT.gb, (TT => {
        const oT = (0, UT.h)(jT.gb, TT);
        "number" === typeof oT && CT.e.cancelQTE(oT)
      })), (0, KT.e)((() => {
        CT.e.reset(), FT.h.XM("showPermanentBottomMessage", null, !0)
      })), (0, KT.h)((() => {
        CT.e.reset()
      })), (0, KT.i)(ST.$b.EditItemCraftingRecipes, (TT => {
        const oT = (0, UT.l)(TT);
        (0, UT.d)(oT) && FT.h.XM("craftingRecipesEdited", {
          itemName: oT.craftingRecipeItemName,
          recipesForItem: oT.recipesForItem
        })
      })), (0, KT.i)(jT.db, (TT => {
        const oT = (0, UT.h)(jT.db, TT);
        oT && FT.h.XM("craftingRecipesEdited", {
          itemName: oT.gT,
          recipesForItem: []
        })
      })))
    }
    var HT = IT(12);
    const nT = [{
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

    function qT(TT) {
      return hT.s.playerFlags(TT.api.apiView, 0)
    }
    const ZT = {
        freeCamera: (0, xT.d)((TT => () => {
          const oT = TT.isSessionLive && 0 !== (qT(TT) & hT.Cd.FreeCamMoves),
            IT = TT.freeCameraAllowed() && null === HT.c.get("scriptedCameraFacing");
          return nT[(IT ? 2 : 0) + (oT ? 1 : 0)]
        }), nT[0], (TT => (0, kT.u)(TT)))
      },
      lT = {
        setFreeCameraMovesFly: TT => {
          var oT;
          null === (oT = (0, WT.i)()) || void 0 === oT || oT.setFreeCameraMovesFly(TT)
        }
      },
      sT = {
        freeCameraPos: () => {
          const TT = (0, WT.i)();
          return null !== TT && void 0 !== TT && TT.isSessionLive && TT.renderFrame.hasView && 0 !== (qT(TT) & hT.Cd.FreeCam) ? TT.renderFrame.cameraPosition : null
        }
      };
    var tT = IT(38128);
    let GT = !1,
      pT = !1;

    function bT() {
      const TT = (0, WT.i)();
      if (null === TT || void 0 === TT || !TT.isSessionLive) return void(GT = !1);
      const oT = 0 !== (hT.s.playerFlags(TT.api.apiView, 0) & hT.Cd.FreeCam);
      oT !== GT && (GT = oT, (0, tT.e)(oT))
    }
    var yT = IT(314),
      NT = IT(35995),
      PT = IT(1780);
    var dT = IT(39483),
      VT = IT(39426);
    const To = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let oo = "off";

    function Io(TT) {
      var oT;
      return null === TT ? null : {
        label: null !== (oT = (0, dT.b)(TT, "interactionPrompt")) && void 0 !== oT ? oT : null
      }
    }
    const io = new Map([
      [hT.qc.Open, {
        label: BT.g.open
      }],
      [hT.qc.Close, {
        label: BT.g.close
      }],
      [hT.qc.Milk, {
        label: BT.g.milk
      }],
      [hT.qc.Shear, {
        label: BT.g.shear
      }],
      [hT.qc.Tame, {
        label: BT.g.tame
      }],
      [hT.qc.Feed, {
        label: BT.g.feed
      }],
      [hT.qc.Ride, {
        label: BT.g.ride
      }]
    ]);
    class zo {
      constructor() {
        this.target = To, this.mS = hT.Zc, this.optionName = null, this.pickaxe = new BT.d
      }
      read(TT) {
        var oT;
        const IT = hT.s.targetBlockId(TT.api.apiView, 0);
        IT !== this.mS && (this.mS = IT, this.optionName = IT === hT.Zc ? null : `${TT.tables.getMetaInfo(IT).rootName}CrosshairText`);
        const iT = null === this.optionName ? null : null !== (oT = TT.tables.getClientOption(this.optionName)) && void 0 !== oT ? oT : null;
        this.pickaxe.update(function(TT, oT) {
          var IT, iT, zT;
          if (0 === (hT.s.playerFlags(TT.api.apiView, 0) & hT.Cd.Breaking) || oT === hT.Zc || 0 === oT) return null;
          const {
            tables: kT
          } = TT;
          if (!0 === kT.getClientOption("creative")) return null;
          const WT = kT.nameOfId(oT),
            XT = null === (IT = TT.items.kS()) || void 0 === IT ? void 0 : IT.name,
            BT = null !== (iT = kT.getItemStat(WT, "harvestLevel")) && void 0 !== iT ? iT : 0;
          return (0, yT.qc)({
            blockHarvestType: kT.getDefaultItemStat(WT, "harvestType"),
            blockHarvestLevel: kT.getDefaultItemStat(WT, "harvestLevel"),
            harvestLevel: BT,
            heldToolType: void 0 === XT ? void 0 : kT.getDefaultItemStat(XT, "harvests"),
            heldToolLevel: void 0 === XT ? void 0 : kT.getDefaultItemStat(XT, "level")
          }) && null !== (zT = NT.s[BT]) && void 0 !== zT ? zT : null
        }(TT, IT)), TT.watchPromptPick(oo);
        const zT = "touch" === oo ? function(TT) {
          var oT;
          const IT = TT.interactLabel;
          return IT === hT.qc.Entity ? Io(TT.promptEntity) : IT === hT.qc.TameWith ? {
            label: (0, BT.D)(TT.tables.nameOfId(TT.interactIcon))
          } : null !== (oT = io.get(IT)) && void 0 !== oT ? oT : null
        }(TT) : Io(TT.promptEntity);
        return this.target = (0, PT.m)(this.target, {
          interactPrompt: zT,
          blockText: iT,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let ko = null;
    const Wo = {
      current: () => {
        var TT, oT;
        return null !== (TT = null === (oT = ko) || void 0 === oT ? void 0 : oT.target) && void 0 !== TT ? TT : To
      },
      watch: TT => {
        const oT = new zo;
        ko = oT;
        const IT = (0, xT.k)((IT => {
          let iT = oT.read(IT);
          TT(iT);
          const zT = (0, kT.y)((() => {
            const zT = oT.read(IT);
            zT !== iT && (iT = zT, TT(zT))
          }));
          return () => {
            zT(), IT.watchPromptPick("off")
          }
        }));
        return () => {
          IT(), ko === oT && (ko = null)
        }
      }
    };
    let Xo = 0,
      Bo = 0;
    const Fo = {
        health: BT.w,
        aura: BT.k,
        hotbar: VT.e.states.hotbar,
        heldItemAim: VT.e.states.heldItemAim,
        crouching: (0, xT.d)((TT => function(TT) {
          const oT = () => 0 !== (hT.s.playerFlags(TT.apiView, 0) & hT.Cd.Crouching);
          return {
            current: oT,
            watch(TT) {
              let IT = oT();
              return (0, kT.u)((() => {
                const iT = oT();
                iT !== IT && (IT = iT, TT(iT))
              }))
            }
          }
        }(TT.api).current), !1, (TT => (0, kT.u)(TT))),
        flight: (0, xT.d)((TT => () => function(TT) {
          const oT = hT.s.playerFlags(TT.apiView, 0);
          return (0, BT.s)(0 !== (oT & hT.Cd.CanFly), 0 !== (oT & hT.Cd.Flying))
        }(TT.api)), (0, BT.s)(!1, !1), (TT => (0, kT.u)(TT))),
        gliderBoostFuel: (0, xT.d)((TT => () => hT.s.gliderBoostFuel(TT.api.apiView, 0)), 0, (TT => (0, kT.u)(TT))),
        crosshairTarget: Wo
      },
      So = {
        hotbarSlotRequested: VT.e.events.hotbarSlotRequested,
        hotbarScrolled: VT.e.events.hotbarScrolled,
        numberKeyPressed: VT.e.events.numberKeyPressed,
        shotDamageToShow: (0, BT.z)((TT => !0 === (0, dT.b)(TT, "showDamageAmounts")))
      },
      Do = {
        selectHotbarSlot: VT.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: TT => {
          oo = TT
        }
      },
      Lo = {
        momentumFrac: function() {
          var TT, oT, IT;
          const iT = (0, WT.i)(),
            zT = performance.now(),
            kT = null === iT || void 0 === iT || null === (TT = iT.items.kS()) || void 0 === TT || null === (oT = TT.attributes) || void 0 === oT || null === (IT = oT.customAttributes) || void 0 === IT ? void 0 : IT.enchantments;
          return Xo = null !== iT && null !== kT && void 0 !== kT && kT.Momentum ? 0 !== (hT.s.playerFlags(iT.api.apiView, 0) & hT.Cd.Breaking) ? Math.max(0, hT.s.momentumFrac(iT.api.apiView, 0)) : Math.max(0, Xo - (zT - Bo) / 1500) : 0, Bo = zT, Xo
        }
      };
    var xo = IT(39362),
      co = IT(1214),
      Ko = IT(35498),
      Mo = IT(8226),
      ro = IT(1585),
      Ao = IT(2201),
      go = IT(4292);
    let ho = !1;

    function wo(TT) {
      ho = TT
    }

    function mo() {
      "inGame" !== HT.c.get("gameState") || (0, ro.u)() || FT.h.XM("ctrlCrouchWithoutFullscreen")
    }
    let eo = !1;
    const Ro = {
        OpenEmoteWheel: () => {
          wo(!0), eo = !0, queueMicrotask((() => {
            eo && (eo = !1, FT.h.XM("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          FT.h.XM("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Ko.e)() || FT.h.XM("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Ko.e)() || FT.h.XM("XKeyPressed")
        },
        CtrlCrouch: mo,
        "primary-fire": () => {
          FT.h.XM("mouseState", {
            aW: co.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          FT.h.XM("mouseState", {
            aW: co.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          FT.h.XM("mouseState", {
            aW: co.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      uo = {
        OpenEmoteWheel: () => {
          wo(!1), eo ? (eo = !1, (0, Mo.b)() || FT.h.XM("requestEmoteWheelHoldOpen")) : FT.h.XM("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: mo,
        "primary-fire": () => {
          FT.h.XM("mouseState", {
            aW: co.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          FT.h.XM("mouseState", {
            aW: co.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          FT.h.XM("mouseState", {
            aW: co.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let vo = !1;

    function Eo() {
      vo || (vo = !0, (0, go.f)((TT => {
        if ((0, zT.b)()) return;
        const oT = (0, go.e)(TT) ? "primary-fire" : TT.action;
        var IT;
        if (TT.down) {
          if (0 === (TT.flags & Ao.d.Synthetic)) {
            var iT;
            null === (iT = Ro[oT]) || void 0 === iT || iT.call(Ro)
          }
        } else null === (IT = uo[oT]) || void 0 === IT || IT.call(uo)
      })))
    }
    var fo = IT(306),
      Co = IT(90),
      jo = IT(26),
      Jo = IT(39487),
      Uo = IT(1293),
      ao = IT(37962);
    let Yo = !1;
    const Qo = {
      sendCodeCollab(TT) {
        var oT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.CodeCollab, (0, JT.k)(TT), (0, ao.d)(TT))
      }
    };
    let Oo = null,
      Ho = !1,
      no = null;

    function qo() {
      return "inGame" === HT.c.get("gameState") && !(0, Ko.e)()
    }
    const Zo = {
        OpenInventory: TT => {
          (0, ro.B)(TT, "inventory", (0, xo.q)())
        },
        OpenShop: TT => {
          Oo && qo() && (0, ro.y)(TT, fo.q.SHOP, !Oo.shopIsEmpty(gT.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: TT => {
          qo() && (0, ro.y)(TT, fo.q.LOBBY_LEADERBOARD, !!gT.e.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: TT => {
          var oT;
          const IT = null === (oT = Oo) || void 0 === oT ? void 0 : oT.getClientGameMapKey();
          IT ? (0, ro.E)(TT, !0, IT) : (0, ro.B)(TT, "retentionFeatures", !(!gT.e.get("_tasks") && !gT.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: TT => {
          (0, ro.B)(TT, "inviteLink", Co.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: TT => {
          qo() && function(TT) {
            var oT;
            const IT = (0, WT.i)(),
              iT = null !== IT && void 0 !== IT && IT.isSessionLive ? IT.api : null,
              zT = iT ? iT.Wm(iT.localId) : null,
              kT = null !== (oT = null === zT || void 0 === zT ? void 0 : zT.map((TT => Math.floor(TT)))) && void 0 !== oT ? oT : null;
            (0, ro.E)(TT, null !== kT && (0, ao.c)((0, Uo.e)()), (() => {
              FT.h.XM("EditLobbyCode", kT)
            }))
          }(TT)
        },
        HideUi: () => {
          FT.h.XM("showUi", !1)
        }
      },
      so = {
        HideUi: () => {
          FT.h.XM("showUi", !0)
        }
      };

    function to() {
      Ho || (Ho = !0, IT.e(151).then((() => IT(41402))).then((TT => {
        Oo = TT
      }), (TT => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", TT)
      })), (0, Jo.x)((TT => {
        TT || !(0, Jo.i)() || (0, Co.isMobile)() || !jo.e.getItem("disableFullscreen") || (0, ro.t)() || HT.c.set({
          openEverythingMenuName: fo.q.SETTINGS
        })
      })), (0, go.f)((TT => {
        let {
          action: oT,
          down: IT,
          press: iT
        } = TT;
        var kT, WT;
        (0, zT.b)() || (IT ? null === (kT = Zo[oT]) || void 0 === kT || kT.call(Zo, function(TT) {
          var oT;
          if (0 === TT || (null === (oT = no) || void 0 === oT ? void 0 : oT.press) !== TT) {
            const oT = {
              press: TT,
              event: new Event("inputAction")
            };
            no = oT, queueMicrotask((() => {
              no === oT && (no = null)
            }))
          }
          return no.event
        }(iT)) : null === (WT = so[oT]) || void 0 === WT || WT.call(so))
      })))
    }
    var Go = IT(37935),
      po = IT(37951),
      bo = IT(37938);
    const yo = {
      completeTask(TT) {
        var oT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.CompleteTask, (0, JT.n)(TT))
      },
      setServerCookie(TT) {
        var oT;
        let {
          key: IT,
          value: iT
        } = TT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.GeneralCookieSet, (0, JT.q)({
          KF: IT,
          MF: iT
        }))
      },
      answerUiRequest(TT) {
        var oT;
        let {
          id: IT,
          fF: iT
        } = TT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.UiRequestResp, (0, JT.V)({
          VF: IT,
          oS: iT,
          iS: 5
        }))
      },
      chooseRewardedAd(TT) {
        var oT;
        let {
          id: IT,
          fF: iT
        } = TT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.UiRequestResponded, (0, JT.T)({
          id: IT,
          fF: iT
        }))
      },
      requestLeaderboard(TT) {
        var oT;
        let {
          category: IT,
          timeframe: iT,
          seeTop: zT
        } = TT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.LeaderboardRequest, {
          category: IT,
          timeframe: iT,
          seeTop: zT
        })
      }
    };
    let No = !1;
    const Po = AT.c.Iw / 2,
      Vo = [Po, -Po, -Po, -Po, Po, Po, -Po, Po],
      TI = [0, 0, 0];

    function oI(TT, oT, IT) {
      for (let iT = 0; iT < TT.length; iT += 2)
        if (TT[iT] === oT && TT[iT + 1] === IT) return !0;
      return !1
    }
    const II = {
      blocksStandingOn: function() {
        const TT = (0, WT.i)();
        if (null === TT) return [];
        const {
          api: oT,
          chunks: IT,
          tables: iT
        } = TT;
        if (!oT.readPosition(oT.localId, TI)) return [];
        const [zT, kT, XT] = TI, BT = Math.ceil(kT) - 1, FT = [], ST = [];
        for (let WT = 0; WT < Vo.length; WT += 2) {
          const TT = zT + Vo[WT],
            oT = XT + Vo[WT + 1];
          if (Number.isInteger(TT) || Number.isInteger(oT)) continue;
          const kT = Math.floor(TT),
            DT = Math.floor(oT);
          if (oI(ST, kT, DT)) continue;
          const LT = IT.mS(kT, BT, DT);
          iT.isSolidBlockId(LT) && (ST.push(kT, DT), FT.push(iT.nameOfId(LT)))
        }
        return FT
      },
      dropAhead: function() {
        const TT = (0, WT.i)();
        return null !== TT && 0 !== (hT.s.playerFlags(TT.api.apiView, 0) & hT.Cd.DropAhead)
      }
    };
    var iI = IT(35898),
      zI = IT(38044),
      kI = IT(1325),
      WI = IT(39436);
    const XI = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      BI = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function FI() {
      const TT = new Set;
      return {
        add: oT => (TT.add(oT), () => {
          TT.delete(oT)
        }),
        fire() {
          for (const oT of TT) oT()
        }
      }
    }
    const SI = Object.freeze([]);

    function DI(TT, oT) {
      let IT, {
        rereads: iT,
        followLocalId: zT
      } = oT;
      const WT = () => (IT = (0, PT.m)(IT, TT()), IT);
      return {
        current: WT,
        watch(TT) {
          const oT = (0, cT.d)((oT => {
            iT(oT) && TT(WT())
          }));
          if (!zT) return oT;
          let IT = (0, xT.h)();
          const XT = (0, kT.y)((() => {
            const oT = (0, xT.h)();
            oT !== IT && (IT = oT, TT(WT()))
          }));
          return () => {
            oT(), XT()
          }
        }
      }
    }
    const LI = {
        players: DI((function() {
          const TT = cT.g.ids(),
            oT = {};
          for (const kT of TT) {
            var IT, iT, zT;
            oT[kT] = {
              name: null !== (IT = cT.g.getName(kT)) && void 0 !== IT ? IT : null,
              ranks: null !== (iT = cT.g.getSetting(kT, "ranks")) && void 0 !== iT ? iT : SI,
              cosmetics: null !== (zT = (0, cT.k)(kT)) && void 0 !== zT ? zT : null
            }
          }
          return {
            ids: TT,
            byId: oT,
            localId: (0, xT.h)()
          }
        }), {
          rereads: TT => "roster" !== TT.kind || TT.members || TT.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: DI((function() {
          const TT = {};
          for (const zT of cT.g.ids()) {
            var oT, IT, iT;
            TT[zT] = {
              colour: null !== (oT = cT.g.getSetting(zT, "colorInLobbyLeaderboard")) && void 0 !== oT ? oT : null,
              values: null !== (IT = cT.g.getSetting(zT, "lobbyLeaderboardValues")) && void 0 !== IT ? IT : null,
              tags: null !== (iT = cT.g.getSetting(zT, "lobbyLeaderboardTags")) && void 0 !== iT ? iT : null
            }
          }
          return TT
        }), {
          rereads: function(TT) {
            if ("roster" !== TT.kind) return "reset" === TT.kind;
            const {
              members: oT,
              settings: IT
            } = TT;
            return oT || IT.has("colorInLobbyLeaderboard") || IT.has("lobbyLeaderboardValues") || IT.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      xI = {
        cosmeticsUpdated: {
          watch: TT => (0, cT.d)((oT => {
            if ("cosmetics" !== oT.kind) return;
            const IT = (0, xT.h)();
            TT(oT.updates.map((TT => {
              let {
                TT: oT,
                oT: iT,
                IT: zT
              } = TT;
              return {
                local: oT === IT,
                oT: iT,
                IT: zT
              }
            })))
          }))
        }
      };
    var cI = IT(2556),
      KI = IT(1665),
      MI = IT(648),
      rI = IT(39496);
    let AI = !1,
      gI = null;
    const hI = {
      setShopOpen(TT) {
        var oT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.ShopMenuChanged, (0, JT.N)(TT))
      },
      buyShopItem(TT) {
        var oT;
        let {
          categoryKey: IT,
          itemKey: iT,
          userInput: zT
        } = TT;
        null === (oT = (0, WT.i)()) || void 0 === oT || oT.send(JT.b.ItemBought, {
          categoryKey: IT,
          itemKey: iT,
          shopVersion: gT.e.get("_shopVersion"),
          userInput: zT
        })
      }
    };
    let wI = !1;
    var mI = IT(4299);
    const eI = Ao.A.LookFrozen | Ao.A.ClicksSuppressed;

    function RI(TT, oT) {
      var IT;
      null !== (IT = (0, WT.i)()) && void 0 !== IT && IT.send(TT, oT) || console.warn(`[bloxd-wasm-client] message ${TT} not sent: no live game or the core's command ring is full`)
    }(0, KT.i)(jT.yb, (TT => {
      const oT = (0, UT.h)(jT.yb, TT);
      void 0 !== oT && FT.h.XM("setDiscordReportKey", oT)
    }));
    const uI = {
      ignorePlayer(TT) {
        RI(JT.b.IgnoreUser, (0, JT.u)({
          JF: TT
        }))
      },
      reportPlayer(TT) {
        let {
          playerId: oT,
          chatMsgId: IT,
          QF: iT,
          details: zT
        } = TT;
        RI(JT.b.UserReport, (0, JT.cb)({
          aF: oT,
          YF: IT,
          QF: iT,
          HF: zT
        }))
      },
      reportWorldCodeChat(TT) {
        let {
          chatMsgId: oT,
          QF: IT,
          details: iT
        } = TT;
        RI(JT.b.UserReport, (0, JT.cb)({
          aF: "",
          YF: oT,
          QF: IT,
          HF: iT
        }))
      },
      requestDiscordReportKey(TT) {
        RI(JT.b.ReqDiscordReportKey, (0, JT.H)(TT))
      },
      reportLobbyOrGame(TT) {
        let {
          target: oT,
          QF: IT,
          details: iT
        } = TT;
        "customGame" === oT ? RI(JT.b.CustomGameReport, (0, JT.o)({
          QF: IT,
          HF: iT
        })) : RI(JT.b.LobbyReport, (0, JT.w)({
          QF: IT,
          HF: iT
        }))
      },
      updateMyCosmetic(TT) {
        RI(JT.b.UpdateMyCosmetic, (0, JT.ab)(TT))
      },
      holdEmoteWheel(TT) {
        !TT || ho ? (0, mI.g)(eI, TT ? eI : 0) : FT.h.XM("requestEmoteWheelHoldRelease")
      }
    };
    var vI = IT(39498),
      EI = IT(8829),
      fI = IT(38546);
    const CI = [0, 0, 0],
      jI = [0, 0, 0],
      JI = [0, 0, 0],
      UI = {
        blockAtViewPoint(TT) {
          let {
            x: oT,
            y: IT
          } = TT;
          const iT = (0, WT.i)();
          if (null === iT || void 0 === iT || !iT.renderFrame.hasView) return null;
          const {
            renderFrame: zT,
            clientApi: kT,
            api: XT
          } = iT;
          let BT = 0;
          return (0, fI.f)(((TT, oT, IT) => (BT = kT.getBlockId(TT, oT, IT), 0 !== BT)), zT.cameraPosition, (0, fI.j)((TT => hT.s.viewProj(XT.apiView, 0, TT)), oT, IT, CI), fI.c, jI, JI) ? {
            pos: [jI[0], jI[1], jI[2]],
            normal: [JI[0], JI[1], JI[2]],
            name: (0, EI.f)(BT)
          } : null
        }
      },
      aI = {
        setBlockHighlight(TT) {
          var oT;
          null === (oT = (0, WT.i)()) || void 0 === oT || oT.setBlockHighlight(TT)
        }
      };
    var YI = IT(1762),
      QI = IT(39504),
      OI = IT(39513),
      HI = IT(39520);
    var nI = IT(601),
      qI = IT(38551);

    function ZI(TT) {
      if (null === TT || void 0 === TT || !TT.isCoreRunning) return null;
      const {
        api: oT,
        chunks: IT,
        items: iT,
        tables: zT
      } = TT;
      return {
        playerFeet() {
          const TT = oT.Wm(oT.localId);
          return null !== TT && void 0 !== TT && TT.every(Number.isFinite) ? TT : null
        },
        chunkBlocks: TT => IT.isLoaded(TT[0], TT[1], TT[2]) ? (TT, oT, iT) => IT.mS(TT, oT, iT) : null,
        blockName: TT => zT.nameOfId(TT),
        inventory: () => ({
          slots: iT.playerItems().map((TT => TT ? {
            name: TT.name,
            amount: TT.amount
          } : null)),
          heldSlot: iT.selectedSlot
        }),
        nearby() {
          const IT = [];
          for (let zT = 0; zT < oT.idStr.length; zT++) {
            var iT;
            const kT = oT.idStr[zT],
              WT = oT.serverIds[zT],
              XT = oT.kinds[zT];
            if (null === kT || oT.isLocal(WT) || XT >>> hT.c !== hT.r.Lifeform) continue;
            const BT = oT.Wm(WT),
              FT = nI.h[XT & hT.f];
            BT && void 0 !== FT && IT.push({
              kind: "Player" === FT ? "player" : FT,
              name: null !== (iT = TT.clientApi.getEntityName(kT)) && void 0 !== iT ? iT : null,
              position: BT
            })
          }
          return IT
        },
        droppedItems() {
          let TT = 0;
          for (let IT = 0; IT < oT.idStr.length; IT++) null !== oT.idStr[IT] && oT.kinds[IT] >>> hT.c === hT.r.Item && TT++;
          return TT
        }
      }
    }
    const lI = {
        worldCodeAiChunk: TT => Promise.resolve((0, qI.c)(ZI((0, WT.i)()), TT)),
        worldCodeAiGameState: () => Promise.resolve((0, qI.d)(ZI((0, WT.i)())))
      },
      sI = function(TT) {
        const oT = FI(),
          iT = FI(),
          zT = new Set,
          kT = new Set,
          WT = () => {
            var oT, IT;
            return null !== (oT = null === (IT = TT.runtime()) || void 0 === IT ? void 0 : IT.currentViewer) && void 0 !== oT ? oT : null
          };
        let XT = null,
          BT = null;
        const ST = (TT, oT) => ({
            current: TT,
            watch(IT) {
              let iT = TT();
              return oT.add((() => {
                const oT = TT();
                oT !== iT && (iT = oT, IT(oT))
              }))
            }
          }),
          LT = TT => ({
            watch: oT => (TT.add(oT), () => {
              TT.delete(oT)
            })
          }),
          xT = TT => {
            const oT = WT(),
              IT = null === oT || void 0 === oT ? void 0 : oT.view;
            oT && IT && oT.seek(Math.max(0, Math.min(IT.totalTicks - 1, IT.dD + TT * DT.Dd)))
          },
          cT = {
            replay: ST((() => {
              var TT;
              const oT = WT(),
                IT = null !== (TT = null === oT || void 0 === oT ? void 0 : oT.view) && void 0 !== TT ? TT : null;
              return null === oT || null === IT || IT.state === DT.pd.None ? (XT = null, null) : (XT = (0, PT.m)(XT, {
                id: oT.id,
                dD: IT.dD,
                totalTicks: IT.totalTicks,
                sC: DT.Dd,
                playing: IT.state === DT.pd.Playing,
                speed: IT.speed,
                cameraMode: IT.cameraMode,
                freecam: "freecam" === IT.cameraMode
              }), XT)
            }), oT),
            replayEdits: ST((() => {
              var TT;
              const oT = WT(),
                IT = null !== (TT = null === oT || void 0 === oT ? void 0 : oT.view) && void 0 !== TT ? TT : null;
              return null === oT || null === IT || IT.state === DT.pd.None ? (BT = null, null) : (BT = (0, PT.m)(BT, {
                cameraKeyframes: [...oT.keyframes],
                playbackMark: IT.mark,
                fileName: oT.fileName,
                unsavedChanges: oT.unsavedChanges,
                suggestSaveAs: oT.suggestSaveAs
              }), BT)
            }), oT),
            replayRecorder: ST((() => {
              var oT, IT;
              return null !== (oT = null === (IT = TT.runtime()) || void 0 === IT ? void 0 : IT.recorder.current) && void 0 !== oT ? oT : WI.c.states.replayRecorder.current()
            }), iT),
            replayVideoExporting: {
              current: zI.e,
              watch: TT => (0, FT.k)("replayViewer|videoExportChanged", (() => {
                TT((0, zI.e)())
              }))
            }
          },
          KT = {
            replayUiActionRequested: LT(kT),
            replayViewerRequested: LT(zT)
          },
          MT = TT => {
            for (const oT of zT) oT(TT)
          },
          rT = () => {
            var iT;
            !0 === (null === (iT = WT()) || void 0 === iT ? void 0 : iT.isOpen) && Promise.all([IT.e(95), IT.e(63)]).then((() => IT(41410))).then((IT => {
              let {
                startWasmReplayVideoExport: iT
              } = IT;
              return iT({
                viewer: WT,
                canvas: () => {
                  var oT, IT;
                  return null !== (oT = null === (IT = TT.canvas) || void 0 === IT ? void 0 : IT.call(TT)) && void 0 !== oT ? oT : null
                },
                watchViewer: oT.add,
                requestViewer: MT
              })
            }), (TT => {
              console.error("Couldn't load the video export", TT), kI.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((TT => {
              console.error("The video export failed", TT)
            }))
          },
          AT = {
            replayAction(TT) {
              if ((0, zI.e)()) return;
              const oT = WT();
              switch (TT) {
                case "replaySkipBack":
                  xT(-1);
                  break;
                case "replaySkipForward":
                  xT(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== oT && void 0 !== oT && oT.view && oT.setSpeed((0, iI.h)(oT.view.speed, "replaySpeedUp" === TT ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === oT || void 0 === oT || oT.addKeyframe()
              }
            },
            setReplayPlaying(TT) {
              var oT, IT;
              (0, zI.e)() || (TT ? null === (oT = WT()) || void 0 === oT || oT.play() : null === (IT = WT()) || void 0 === IT || IT.pause())
            },
            seekReplay(TT) {
              var oT;
              let {
                dD: IT,
                ignorePlaybackMark: iT
              } = TT;
              null === (oT = WT()) || void 0 === oT || oT.seek(IT, null !== iT && void 0 !== iT && iT)
            },
            setReplayCameraMode(TT) {
              var oT;
              null === (oT = WT()) || void 0 === oT || oT.setCameraMode(TT)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(TT) {
              var oT;
              null === (oT = WT()) || void 0 === oT || oT.setKeyframe(TT)
            },
            moveReplayCameraKeyframe(TT) {
              var oT;
              let {
                from: IT,
                to: iT
              } = TT;
              null === (oT = WT()) || void 0 === oT || oT.moveKeyframe(IT, iT)
            },
            deleteReplayCameraKeyframes(TT) {
              var oT;
              let {
                start: IT,
                end: iT
              } = TT;
              null === (oT = WT()) || void 0 === oT || oT.deleteKeyframes(IT, iT)
            },
            setReplayPlaybackMark(TT) {
              var oT;
              null === (oT = WT()) || void 0 === oT || oT.setMark(TT)
            },
            cropReplay(TT) {
              var oT, IT;
              let {
                start: iT,
                end: zT
              } = TT;
              return !(0, zI.e)() && (null !== (oT = null === (IT = WT()) || void 0 === IT ? void 0 : IT.crop(iT, zT)) && void 0 !== oT && oT)
            },
            holdReplayForShaderPackFailure(TT) {
              const oT = WT();
              oT && (oT.holdForShaderPackFailure(), function(TT) {
                IT.e(130).then((() => IT(38159))).then((oT => {
                  let {
                    shaderPackPage: IT
                  } = oT;
                  IT.block(TT)
                })).catch((TT => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", TT)
                }))
              }(TT))
            },
            exportReplayVideo() {
              rT()
            },
            toggleRecording() {
              var oT;
              null === (oT = TT.runtime()) || void 0 === oT || oT.recorder.toggleRecording()
            },
            saveClip() {
              var oT;
              null === (oT = TT.runtime()) || void 0 === oT || oT.recorder.saveClip()
            },
            setRecorderPrefs(oT) {
              var IT;
              let {
                clipping: iT,
                clipSeconds: zT
              } = oT;
              null === (IT = TT.runtime()) || void 0 === IT || IT.recorder.setPrefs(iT, zT)
            },
            setReplayViewerOpen(oT) {
              var IT;
              (0, Ko.i)(oT) && (null === (IT = TT.runtime()) || void 0 === IT || IT.recorder.viewerShown(oT))
            },
            recordFlyingMiddleText(oT) {
              var IT;
              let {
                content: iT,
                QT: zT,
                angle: kT,
                OT: WT
              } = oT;
              null === (IT = TT.runtime()) || void 0 === IT || IT.recorder.recordFlyingText(JSON.stringify(iT), zT, kT, WT)
            },
            dragReplayCamera(oT) {
              var IT;
              let {
                dx: iT,
                dy: zT
              } = oT;
              null === (IT = TT.freecam()) || void 0 === IT || IT.drag(iT, zT)
            },
            moveReplayFreecam(oT) {
              var IT;
              null === (IT = TT.freecam()) || void 0 === IT || IT.move(oT)
            },
            holdReplayFreecamVertical(oT) {
              var IT;
              let {
                action: iT,
                kS: zT
              } = oT;
              null === (IT = TT.freecam()) || void 0 === IT || IT.holdVertical(iT, zT)
            }
          },
          gT = TT => {
            var oT;
            const IT = WT(),
              iT = null !== (oT = null === IT || void 0 === IT ? void 0 : IT.view) && void 0 !== oT ? oT : null;
            XI.has(TT) ? (TT => {
              for (const oT of kT) oT(TT)
            })(TT) : BI.has(TT) ? AT.replayAction(TT) : "replayPlayPause" === TT ? IT && iT && iT.state !== DT.pd.None && AT.setReplayPlaying(iT.state !== DT.pd.Playing) : "replayChangeCameraMode" === TT ? null === IT || void 0 === IT || IT.cycleCameraMode() : "replayExit" === TT ? !0 === (null === IT || void 0 === IT ? void 0 : IT.inPlayback) && (0, Uo.k)("/") : "replayExportVideo" === TT && rT()
          };
        let hT = !1;
        return {
          states: cT,
          events: KT,
          commands: AT,
          lookups: {
            replayCamera() {
              var oT, IT, iT;
              return !0 !== (null === (oT = WT()) || void 0 === oT ? void 0 : oT.isOpen) ? null : null !== (IT = null === (iT = TT.cameraView) || void 0 === iT ? void 0 : iT.call(TT)) && void 0 !== IT ? IT : null
            },
            leaveGameReloadsPage() {
              var TT;
              return !0 === (null === (TT = WT()) || void 0 === TT ? void 0 : TT.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var TT;
              const IT = !0 === (null === (TT = WT()) || void 0 === TT ? void 0 : TT.inPlayback);
              IT !== hT && (hT = IT, FT.h.XM("connectedGameChanged")), oT.fire()
            },
            recorderChanged: iT.fire,
            keyDown: TT => {
              var oT;
              switch (TT) {
                case "recordGame":
                  return void AT.toggleRecording();
                case "recordClip":
                  return void((0, Ko.e)() || AT.saveClip())
              }(0, zI.e)() || ("replayViewerOpen" !== TT ? TT.startsWith("replay") && ((0, Ko.e)() || !0 === (null === (oT = WT()) || void 0 === oT ? void 0 : oT.inPlayback)) && gT(TT) : MT("toggle"))
            }
          }
        }
      }({
        runtime: zT.j,
        cameraView: () => {
          var TT;
          const oT = null === (TT = (0, WT.i)()) || void 0 === TT ? void 0 : TT.renderFrame;
          if (!oT) return null;
          const [IT, iT, zT] = oT.cameraPosition, [kT, XT, BT] = oT.cameraDirection;
          return {
            position: [IT, iT, zT],
            direction: [kT, XT, BT]
          }
        },
        canvas: () => {
          var TT, oT, IT;
          return null !== (TT = null === (oT = (IT = (0, kT.O)()).canvas) || void 0 === oT ? void 0 : oT.call(IT)) && void 0 !== TT ? TT : null
        },
        freecam: zT.i
      }),
      tI = {
        states: {
          ...Fo,
          ...xo.o,
          ...sI.states,
          ...LI,
          ...ZT
        },
        events: {
          ...So,
          ...MT,
          ...xo.h,
          ...vT.d,
          ...vI.h,
          ...sI.events,
          ...xI,
          ...uT.i
        },
        commands: {
          ...RT,
          ...Do,
          ...rT,
          ...xo.d,
          ...yo,
          ...uI,
          ...uT.f,
          ...Qo,
          ...sI.commands,
          ...hI,
          ...lT,
          ...aI
        },
        queries: {
          ...xo.l,
          ...lI
        },
        lookups: {
          ...Lo,
          ...YT,
          ...vI.j,
          ...sI.lookups,
          ...eT,
          ...II,
          ...UI,
          ...sT
        }
      };

    function GI() {
      (0, XT.h)(KT.j), (0, zT.k)(sI.feed), (0, vT.e)(), No || (No = !0, (0, KT.i)(jT.p, (TT => {
        const oT = (0, UT.h)(jT.p, TT);
        "string" === typeof oT && Promise.resolve().then((() => IT(3219))).then((TT => {
          let {
            onCosmeticPackGranted: IT
          } = TT;
          IT(oT)
        }))
      })), (0, KT.i)(jT.tb, (TT => {
        const oT = (0, UT.h)(jT.tb, TT);
        "number" === typeof oT && FT.h.XM("serverUpdating", Date.now() + oT, !0)
      })), (0, KT.i)(jT.P, (TT => {
        const oT = (0, UT.h)(jT.P, TT);
        if ((0, UT.d)(oT)) {
          const {
            FI: TT,
            SI: IT
          } = oT;
          (0, po.c)({
            FI: "string" === typeof TT ? TT : null,
            SI: "string" === typeof IT ? IT : null
          })
        }
      })), (0, KT.i)(ST.$b.NewUiRequest, (TT => {
        const oT = (0, UT.l)(TT);
        (0, UT.d)(oT) && "number" === typeof oT.id && (0, UT.d)(oT.clientParameters) && (0, bo.g)(oT.id, oT.clientParameters)
      })), (0, KT.i)(jT.jb, (TT => {
        const oT = (0, UT.h)(jT.jb, TT);
        "number" === typeof oT && (0, bo.i)(oT)
      })), (0, KT.h)(bo.d), (0, KT.i)(ST.$b.UiRequestPopup, (TT => {
        const oT = (0, UT.l)(TT);
        if ((0, UT.d)(oT) && "number" === typeof oT.id && "string" === typeof oT.text) {
          const TT = oT.id;
          (0, bo.l)(TT, oT.text, (oT => {
            yo.answerUiRequest({
              id: TT,
              fF: oT
            })
          }))
        }
      })), (0, KT.i)(ST.$b.TopRightHelper, (TT => {
        const oT = (0, UT.l)(TT);
        void 0 !== oT && FT.h.XM("TopRightHelper", oT, !0)
      })), (0, KT.i)(ST.$b.TaskProgress, (TT => {
        const oT = (0, UT.l)(TT);
        (0, UT.d)(oT) && "string" === typeof oT.taskId && "number" === typeof oT.progress && (0, Go.b)({
          taskId: oT.taskId,
          progress: oT.progress
        })
      }))), wI || (wI = !0, (0, KT.i)(jT.y, (TT => {
        const oT = (0, UT.h)(jT.y, TT);
        (0, UT.d)(oT) && FT.h.XM("showShopFromServer", {
          toggle: oT.AI,
          gI: oT.gI
        }, !0)
      })), (0, KT.i)(ST.$b.OverShopInfo, (TT => {
        const oT = (0, UT.l)(TT);
        (0, UT.d)(oT) && FT.h.XM("overShopInfo", oT.info, !0)
      })), (0, KT.i)(ST.$b.ShowShopTutorial, (() => {
        FT.h.XM("showShopTutorial", null, !0)
      }))), AI || (AI = !0, (0, KT.e)((() => {
        var TT;
        (0, cI.C)(), null === (TT = gI) || void 0 === TT || TT(), gI = (0, KT.c)() ? (0, MI.i)(KT.c) : null
      })), (0, KT.i)(ST.$b.SetCookie, (TT => {
        const oT = (0, UT.l)(TT),
          IT = (0, Uo.e)().gameNameWithVariation;
        (0, UT.d)(oT) && "string" === typeof oT.key && null !== IT && (0, KI.setCookie)(IT, oT.key, oT.value)
      })), (0, KT.i)(ST.$b.LeaveValues, (TT => {
        const oT = (0, UT.l)(TT);
        if ((0, UT.d)(oT) && "string" === typeof oT.leaveEventType) {
          const {
            leaveEventType: TT,
            category: IT,
            subCategory: iT,
            value: zT
          } = oT;
          (0, cI.I)({
            leaveEventType: TT,
            category: IT,
            subCategory: iT,
            value: zT
          })
        }
      })), (0, KT.i)(ST.$b.CustomAnalyticsEvent, (TT => {
        const oT = (0, UT.l)(TT);
        if ((0, UT.d)(oT) && "string" === typeof oT.cat1) {
          const {
            cat1: TT,
            cat2: IT,
            cat3: iT,
            value: zT
          } = oT;
          (0, cI.s)({
            cat1: TT,
            cat2: IT,
            cat3: iT,
            value: zT
          })
        }
      })), (0, KT.i)(ST.$b.ProgressionEvent, (TT => {
        const oT = (0, UT.l)(TT);
        if ((0, UT.d)(oT)) {
          const {
            type: TT,
            location1: IT,
            location2: iT,
            location3: zT,
            score: kT
          } = oT;
          (0, cI.y)({
            type: TT,
            location1: IT,
            location2: iT,
            location3: zT,
            score: kT
          })
        }
      })), (0, KT.i)(ST.$b.ResourceEvent, (TT => {
        const oT = (0, UT.l)(TT);
        if ((0, UT.d)(oT)) {
          const {
            type: TT,
            resourceType: IT,
            amount: iT,
            category: zT,
            itemName: kT
          } = oT;
          (0, cI.A)({
            type: TT,
            resourceType: IT,
            amount: iT,
            category: zT,
            itemName: kT
          })
        }
      })), (0, KT.i)(ST.$b.LeaderboardResponse, (TT => {
        const oT = (0, UT.l)(TT);
        if ((0, UT.d)(oT)) {
          const {
            category: TT,
            timeframe: IT,
            data: iT
          } = oT;
          FT.h.XM("leaderboardResponse", {
            category: TT,
            timeframe: IT,
            data: iT
          })
        }
      })), (0, KT.i)(jT.G, (TT => {
        const oT = (0, UT.h)(jT.G, TT);
        "string" === typeof oT && (0, rI.e)(TT.conn, oT)
      })), (0, KT.i)(jT.I, (TT => {
        const oT = (0, UT.h)(jT.I, TT);
        "string" === typeof oT && console.error(`[logErrorToConsole]: ${oT}`)
      }))), OT(), (0, vI.c)(), Yo || (Yo = !0, (0, KT.i)(jT.l, (TT => {
        const oT = (0, UT.h)(jT.l, TT);
        void 0 !== oT && (0, ao.g)(oT)
      }))), to(), Eo(), pT || (pT = !0, (0, kT.u)(bT)), iT.gameBridge.attach(tI), (0, iT.installPageSources)({
        commands: {
          ...iT.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: QI.f
        },
        queries: HI.wasmIconQueries,
        lookups: {
          ...iT.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...HI.wasmIconLookups,
          Jm: QI.c,
          drawCallStats: OI.h
        }
      }), (0, YI.d)(), (0, HI.loadIcons)()
    }
  },
  39533: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      g: () => XT
    });
    var iT = IT(39541);
    let zT = null,
      kT = null;

    function WT() {
      return zT ??= IT.e(58).then((() => IT(41429))).catch((TT => {
        throw zT = null, TT
      })), zT
    }

    function XT() {
      return kT ??= Promise.all([WT(), (0, iT.f)()]).then((TT => {
        let [oT] = TT;
        return oT
      }), (TT => {
        throw kT = null, TT
      })), kT
    }
  },
  36017: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    const iT = {
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
  8914: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => kT
    });
    var iT = IT(8869);
    const zT = "Air",
      kT = Object.freeze(new iT.f(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35823: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      h: () => kT,
      j: () => LT,
      m: () => XT,
      o: () => BT,
      p: () => FT,
      q: () => DT,
      r: () => ST,
      v: () => WT
    });
    var iT = IT(1214);
    let zT = function(TT) {
        return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile", TT[TT.DeleteFile = 8] = "DeleteFile", TT[TT.SetEngine = 9] = "SetEngine", TT[TT.RenameFolder = 10] = "RenameFolder", TT
      }({}),
      kT = function(TT) {
        return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSettings", TT
      }({});

    function WT(TT) {
      return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
    }

    function XT(TT) {
      if ("lobby" === TT) return {
        kind: "lobby",
        path: iT.h
      };
      if (TT.startsWith("lobby:")) {
        const oT = TT.slice(6);
        return DT(oT) ? {
          kind: "lobby",
          path: oT
        } : null
      }
      const oT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return oT ? {
        kind: "codeBlock",
        pos: [parseInt(oT[1]), parseInt(oT[2]), parseInt(oT[3])]
      } : null
    }

    function BT(TT) {
      return TT.endsWith(".d.ts")
    }

    function FT(TT) {
      return TT.endsWith(".ts") && !BT(TT)
    }
    const ST = 64;

    function DT(TT) {
      if (!TT || TT !== TT.trim()) return !1;
      if (TT.length > ST) return !1;
      if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
      if (!BT(TT) && !FT(TT) && ! function(TT) {
          return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
        }(TT)) return !1;
      const oT = TT.split("/");
      for (const IT of oT)
        if ("" === IT || "." === IT || ".." === IT) return !1;
      return !0
    }
    const LT = 14e3
  },
  38004: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      g: () => zT
    });
    const iT = ["description", "label"];

    function zT(TT) {
      const oT = TT.type;
      return {
        type: oT,
        params: TT[oT]
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);