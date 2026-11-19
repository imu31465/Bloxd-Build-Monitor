export const id = 46;
export const ids = [46];
export const modules = {
  38924: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY,
      i: () => IY,
      m: () => AY
    });
    const FY = 6e3;

    function AY(YY, rY) {
      return [Math.floor(YY[0] / rY) * rY, Math.floor(YY[1] / rY) * rY, Math.floor(YY[2] / rY) * rY]
    }

    function IY(YY) {
      const rY = (null !== YY && void 0 !== YY ? YY : "").match(/-?\d+(?:\.\d+)?/g);
      return rY && rY.length >= 3 ? [Number(rY[0]), Number(rY[1]), Number(rY[2])] : null
    }

    function RY(YY, rY) {
      return YY === rY ? String(YY) : `${YY}-${rY}`
    }

    function OY(YY, rY, DY, FY) {
      const AY = [];
      let IY = new Map;
      for (let RY = YY[2]; RY < YY[2] + rY; RY++) {
        const OY = new Map;
        let gY = YY[0];
        for (; gY < YY[0] + rY;) {
          const AY = FY(gY, DY, RY);
          let aY = gY;
          for (; aY + 1 < YY[0] + rY && FY(aY + 1, DY, RY) === AY;) aY++;
          if (null !== AY) {
            const YY = `${gY} ${aY} ${AY}`,
              rY = IY.get(YY);
            rY ? (rY.z1 = RY, IY.delete(YY), OY.set(YY, rY)) : OY.set(YY, {
              x0: gY,
              x1: aY,
              z0: RY,
              z1: RY,
              name: AY
            })
          }
          gY = aY + 1
        }
        AY.push(...IY.values()), IY = OY
      }
      return AY.push(...IY.values()), AY.sort(((YY, rY) => YY.z0 - rY.z0 || YY.x0 - rY.x0)).map((YY => `x${RY(YY.x0,YY.x1)} z${RY(YY.z0,YY.z1)} ${YY.name}`))
    }

    function gY(YY, rY, DY, AY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FY;
      const gY = [YY[0] + rY - 1, YY[1] + rY - 1, YY[2] + rY - 1],
        aY = null !== AY && AY.every(((rY, DY) => Math.floor(rY) >= YY[DY] && Math.floor(rY) <= gY[DY])),
        vY = [`The chunk from ${YY.join(" ")} to ${gY.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== AY && vY.push(`The player's feet are at ${AY.map(Math.floor).join(" ")}, ${aY?"in this chunk":"outside this chunk"}.`);
      const uY = [];
      for (let FY = YY[1]; FY <= gY[1]; FY++) {
        const AY = OY(YY, rY, FY, DY).join("; "),
          IY = uY[uY.length - 1];
        (null === IY || void 0 === IY ? void 0 : IY.boxes) === AY ? IY.to = FY : uY.push({
          from: FY,
          to: FY,
          boxes: AY
        })
      }
      const sY = uY.filter((YY => "" !== YY.boxes));
      0 === sY.length && vY.push("It is all air.");
      let iY = vY.join("\n").length;
      for (const FY of sY) {
        const YY = `y${RY(FY.from,FY.to)}: ${FY.boxes}`;
        if (iY += YY.length + 1, iY > IY) {
          vY.push(`Cut short: the layers from y${FY.from} up aren't shown, as there are too many blocks.`);
          break
        }
        vY.push(YY)
      }
      return vY.join("\n")
    }
  },
  8208: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(19);

    function AY() {
      return !FY.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36324: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => IY,
      h: () => AY
    });
    const FY = [.25, .5, 1, 2, 4, 8, 16];

    function AY(YY, rY) {
      const DY = FY;
      let AY = DY.indexOf(YY);
      return -1 === AY && (AY = DY.findIndex((rY => rY >= YY)), -1 === AY && (AY = DY.length - 1)), "up" === rY ? DY[Math.min(AY + 1, DY.length - 1)] : DY[Math.max(AY - 1, 0)]
    }

    function IY(YY) {
      return YY <= FY[0]
    }

    function RY(YY) {
      return YY >= FY[FY.length - 1]
    }
  },
  35928: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      i: () => IY
    });
    let FY = !1;

    function AY() {
      return FY
    }

    function IY(YY) {
      return FY !== YY && (FY = YY, !0)
    }
  },
  38331: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(25),
      AY = DY(1823);

    function IY(YY) {
      let {
        taskId: rY,
        progress: DY
      } = YY;
      const FY = AY.b.get("_tasks");
      null !== FY && void 0 !== FY && FY[rY] && AY.b.apply({
        _tasks: {
          ...FY,
          [rY]: {
            ...FY[rY],
            progress: DY
          }
        }
      })
    }
    FY.g.subscribe("clientTaskProgress", (YY => {
      IY(YY)
    }))
  },
  38895: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      e: () => yY,
      h: () => aY,
      j: () => uY,
      l: () => gY,
      p: () => RY,
      q: () => vY,
      r: () => QY
    });
    var FY = DY(1823),
      AY = DY(25),
      IY = DY(1830);
    const RY = (0, IY.k)((function() {
        var YY, rY, DY, AY;
        return {
          health: null !== (YY = FY.b.get("_health")) && void 0 !== YY ? YY : null,
          maxHealth: null !== (rY = FY.b.get("_totalMaxHealth")) && void 0 !== rY ? rY : null,
          shield: null !== (DY = FY.b.get("_shield")) && void 0 !== DY ? DY : null,
          maxShield: null !== (AY = FY.b.get("maxShield")) && void 0 !== AY ? AY : null
        }
      }), [], (0, IY.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      OY = [{
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

    function gY(YY, rY) {
      return OY[(YY ? 2 : 0) + (rY ? 1 : 0)]
    }
    const aY = (0, IY.k)((function() {
      var YY;
      return null !== (YY = FY.b.get("_aura")) && void 0 !== YY ? YY : null
    }), [], (0, IY.i)("_aura"));

    function vY(YY) {
      return {
        watch: rY => (0, AY.j)("shotPlayer", (DY => {
          let {
            playerId: FY,
            damage: AY,
            wasCrit: IY,
            distance: RY
          } = DY;
          YY(FY) && rY({
            damage: AY,
            wasCrit: IY,
            distance: RY
          })
        }))
      }
    }

    function uY(YY) {
      return (0, IY.c)("chat", (rY => {
        let {
          serverChatMsgId: DY,
          content: FY,
          chatterEId: AY
        } = rY;
        return {
          serverChatMsgId: null !== DY && void 0 !== DY ? DY : null,
          content: FY,
          author: AY ? YY(AY) : null
        }
      }))
    }
    class sY {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const DY = this.shown;
        return YY !== this.needed && (this.needed = YY, this.neededSince = rY, null === YY && (this.shown = null)), this.shown !== this.needed && rY - this.neededSince > 200 && (this.shown = this.needed), this.shown !== DY
      }
    }

    function iY(YY) {
      return [{
        translationKey: `touchKeys:${YY}`
      }]
    }
    const yY = {
      open: iY("open"),
      close: iY("close"),
      milk: iY("milk"),
      shear: iY("shear"),
      tame: iY("tame"),
      feed: iY("feed"),
      ride: iY("ride")
    };

    function QY(YY) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: YY
      }]
    }
  },
  39862: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      h: () => RY
    });
    var FY = DY(2866);
    let AY = null,
      IY = null;

    function RY() {
      return IY ??= DY.e(203).then((() => DY(35761))).then((YY => {
        let {
          ITEM_SPRITES: rY,
          ITEM_SPRITES_WITHOUT_FILE: DY,
          ITEM_FILES_WITHOUT_SPRITE: IY
        } = YY;
        AY = function(YY, rY, DY) {
          const AY = new Set,
            IY = (0, FY.w)(rY);
          let RY = 0;
          for (const [FY, OY] of YY.entries()) FY === IY[RY] ? RY++ : AY.add(OY);
          if ("" !== DY)
            for (const OY of DY.split(FY.s)) AY.add(OY);
          return AY
        }(rY.split(FY.s), DY, IY)
      }), (YY => {
        throw IY = null, YY
      })), IY
    }

    function OY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = AY) || void 0 === DY ? void 0 : DY.has(YY)) && void 0 !== rY && rY
    }
  },
  38910: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      d: () => IY,
      e: () => AY
    });
    const FY = 128;

    function AY(YY, rY, DY, FY) {
      const AY = 2 * rY - 1,
        IY = 1 - 2 * DY,
        RY = YY(0) - AY * YY(3),
        OY = YY(4) - AY * YY(7),
        gY = YY(8) - AY * YY(11),
        aY = YY(1) - IY * YY(3),
        vY = YY(5) - IY * YY(7),
        uY = YY(9) - IY * YY(11);
      FY[0] = OY * uY - gY * vY, FY[1] = gY * aY - RY * uY, FY[2] = RY * vY - OY * aY;
      const sY = FY[0] * YY(3) + FY[1] * YY(7) + FY[2] * YY(11) < 0 ? -1 : 1,
        iY = Math.hypot(FY[0], FY[1], FY[2]) * sY;
      return FY[0] /= iY, FY[1] /= iY, FY[2] /= iY, FY
    }

    function IY(YY, rY, DY, FY, AY, IY) {
      const RY = [Math.floor(rY[0]), Math.floor(rY[1]), Math.floor(rY[2])],
        OY = [0, 0, 0],
        gY = [1 / 0, 1 / 0, 1 / 0],
        aY = [1 / 0, 1 / 0, 1 / 0];
      for (let sY = 0; sY < 3; sY++) OY[sY] = Math.sign(DY[sY]), 0 !== OY[sY] && (aY[sY] = Math.abs(1 / DY[sY]), gY[sY] = (RY[sY] + (OY[sY] > 0 ? 1 : 0) - rY[sY]) / DY[sY]);
      let vY = 0,
        uY = Math.abs(DY[0]) > Math.abs(DY[1]) ? 0 : 1;
      for (Math.abs(DY[2]) > Math.abs(DY[uY]) && (uY = 2); vY <= FY;) {
        if (YY(RY[0], RY[1], RY[2])) return AY[0] = RY[0], AY[1] = RY[1], AY[2] = RY[2], IY[0] = 0, IY[1] = 0, IY[2] = 0, IY[uY] = -OY[uY], !0;
        uY = gY[0] < gY[1] ? 0 : 1, gY[2] < gY[uY] && (uY = 2), vY = gY[uY], RY[uY] += OY[uY], gY[uY] += aY[uY]
      }
      return !1
    }
  },
  38891: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      return Math.hypot(YY[0] - rY[0], YY[1] - rY[1], YY[2] - rY[2]) < DY + .5
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  38344: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY
    });
    var FY = DY(1231),
      AY = DY(1330),
      IY = DY(19),
      RY = DY(1314),
      OY = DY(1322),
      gY = DY(1488),
      aY = DY(35903);

    function vY(YY) {
      let {
        AD: rY,
        RD: DY
      } = YY;
      const vY = null !== rY && void 0 !== rY ? rY : (0, OY.b)().gameNameWithVariation;
      (0, FY.O)(vY) && ((0, aY.f)(), (0, RY.W)((() => {
        console.log("Received matchmaking order from game server to game", rY), (0, IY.g)("inGameReplay"), (0, gY.navigatePreserveSearch)((0, AY.d)(vY, null !== DY && void 0 !== DY ? DY : void 0))
      }), "video_start"))
    }
  },
  38517: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(25),
      AY = DY(1851);

    function IY(YY) {
      var rY, DY;
      const IY = (0, AY.n)(null !== (rY = null === (DY = AY.u.toggleFreeCam) || void 0 === DY ? void 0 : DY[0]) && void 0 !== rY ? rY : null);
      FY.g.vo("showBottomMessage", {
        message: `Free Camera ${YY?"Enabled":"Disabled"}${IY?` - Press ${IY} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38336: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY,
      g: () => RY,
      i: () => OY,
      j: () => aY
    });
    var FY = DY(25),
      AY = DY(1346);
    const IY = new Map;

    function RY(YY, rY) {
      FY.g.vo("newUiRequest", {
        id: YY,
        clientParameters: rY
      }, !0)
    }

    function OY(YY) {
      FY.g.vo("removeUiRequest", YY, !0);
      const rY = IY.get(YY);
      rY && (rY.tearDownNotification(), IY.delete(YY))
    }

    function gY() {
      FY.g.vo("clearUiRequests");
      for (const YY of IY.values()) YY.tearDownNotification();
      IY.clear()
    }

    function aY(YY, rY, DY) {
      const FY = AY.NotificationProvider.showPromptPopup({
        title: rY,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      IY.set(YY, FY), FY.getResult().then((rY => {
        IY.delete(YY), "notificationTornDown" !== rY && DY(rY)
      }))
    }
  },
  38917: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => uY,
      g: () => sY
    });
    var FY = DY(213),
      AY = DY(38924);
    const IY = 20;

    function RY(YY) {
      return YY.map(Math.floor).join(" ")
    }

    function OY(YY) {
      return null === YY.amount || 1 === YY.amount ? YY.name : `${YY.amount} ${YY.name}`
    }
    var gY = DY(38927),
      aY = DY(1823),
      vY = DY(1322);

    function uY(YY, rY) {
      if (!YY) return gY.b;
      const DY = YY.playerFeet();
      if (!DY) return "The player isn't in the world yet, so no blocks can be seen.";
      const IY = FY.d.Jy,
        RY = (0, AY.m)(null !== rY && void 0 !== rY ? rY : DY, IY),
        OY = YY.chunkBlocks(RY);
      return OY ? (0, AY.e)(RY, IY, ((rY, DY, FY) => {
        const AY = OY(rY, DY, FY);
        return 0 === AY ? null : YY.blockName(AY).split("|")[0]
      }), DY) : `The chunk from ${RY.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${DY.map(Math.floor).join(" ")}.`
    }

    function sY(YY) {
      var rY, DY, FY;
      if (!YY) return gY.e;
      const AY = YY.playerFeet();
      if (!AY) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: uY,
        heldSlot: sY
      } = YY.inventory();
      return function(YY) {
        const rY = [];
        null !== YY.game && rY.push(`Game: ${YY.game}.`);
        const DY = null === YY.health ? "" : `, health ${Math.round(YY.health)}${null===YY.maxHealth?"":` of ${Math.round(YY.maxHealth)}`}`;
        rY.push(`The player (the creator) stands at ${RY(YY.position)}${DY}, ${YY.creative?"in":"not in"} creative mode.`);
        const FY = YY.slots[YY.heldSlot];
        rY.push(FY ? `Holding (slot ${YY.heldSlot}): ${OY(FY)}.` : `Holding nothing (slot ${YY.heldSlot} is empty).`);
        const AY = YY.slots.flatMap(((YY, rY) => YY ? [`slot ${rY}: ${OY(YY)}`] : []));
        rY.push(AY.length > 0 ? `Inventory: ${AY.join(", ")}.` : "Inventory: empty.");
        const gY = rY => Math.hypot(rY.position[0] - YY.position[0], rY.position[1] - YY.position[1], rY.position[2] - YY.position[2]),
          aY = [...YY.nearby].sort(((YY, rY) => gY(YY) - gY(rY)));
        if (0 === aY.length) rY.push("No other players or mobs are near enough to see.");
        else {
          rY.push("Near them, nearest first:");
          for (const YY of aY.slice(0, IY)) {
            const DY = "player" === YY.kind ? `player "${YY.name||"?"}"` : YY.name && YY.name !== YY.kind ? `${YY.kind} "${YY.name}"` : YY.kind,
              FY = Math.round(gY(YY));
            rY.push(`- ${DY} at ${RY(YY.position)}, ${FY} block${1===FY?"":"s"} away`)
          }
          aY.length > IY && rY.push(`- and ${aY.length-IY} more further away`)
        }
        return YY.droppedItems > 0 && rY.push(`${YY.droppedItems} dropped item${1===YY.droppedItems?" is":"s are"} on the ground nearby.`), rY.join("\n")
      }({
        game: null !== (rY = (0, vY.b)().gameNameWithVariation) && void 0 !== rY ? rY : null,
        position: AY,
        health: null !== (DY = aY.b.get("_health")) && void 0 !== DY ? DY : null,
        maxHealth: null !== (FY = aY.b.get("_totalMaxHealth")) && void 0 !== FY ? FY : null,
        creative: !0 === aY.b.get("creative"),
        heldSlot: sY,
        slots: uY,
        nearby: YY.nearby(),
        droppedItems: YY.droppedItems()
      })
    }
  },
  38356: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      i: () => gY,
      m: () => aY
    });
    var FY = DY(1231),
      AY = DY(1057),
      IY = DY(36244),
      RY = DY(25);

    function OY(YY) {
      let {
        lobbyName: rY,
        gameNameWithVariation: DY
      } = YY;
      return !(0, FY.P)(rY) || null !== DY && (DY.startsWith("testGym") || (0, AY.l)(DY))
    }

    function gY(YY) {
      return YY.br === IY.c.Leave || YY.br === IY.c.Cursor
    }

    function aY(YY) {
      RY.g.vo("codeCollab", {
        type: YY.br,
        docKey: YY.Xr,
        version: YY.qr,
        editorCount: YY.kr,
        peers: YY.Gr,
        updates: YY.nr,
        playerId: YY.Pr,
        playerName: YY.Ur,
        colour: YY.Lr,
        anchor: YY.tr,
        head: YY.YD,
        existingCursors: YY.rD,
        files: YY.DD,
        engineSettings: YY.FD
      })
    }
  },
  39815: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => fY,
      F: () => CY,
      H: () => PY,
      I: () => hY,
      J: () => HY,
      M: () => jY,
      O: () => KY,
      Q: () => pY,
      U: () => qY,
      X: () => ZY,
      e: () => kY,
      i: () => JY,
      j: () => BY,
      l: () => GY,
      n: () => cY,
      r: () => NY,
      u: () => dY,
      y: () => zY
    });
    var FY = DY(1384),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(2251),
      OY = DY(4396),
      gY = DY(4365);
    let aY, vY = !1,
      uY = !1,
      sY = !1,
      iY = !1;
    const yY = 1300,
      QY = 3e3;
    let oY = 0,
      WY = !1,
      EY = !1,
      mY = 0;
    const VY = 2;
    let SY = !1,
      lY = !1;
    const TY = new Set,
      eY = new Set;

    function NY() {
      return vY
    }

    function BY() {
      return EY
    }

    function cY() {
      return lY
    }

    function KY() {
      return (0, IY.l)() && !lY
    }

    function HY(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (YY !== lY) {
        lY = YY;
        for (const YY of [...eY]) YY(lY);
        rY && qY()
      }
    }

    function zY(YY) {
      return eY.add(YY), () => {
        eY.delete(YY)
      }
    }

    function ZY() {
      (0, OY.k)(RY.w.Menu, (0, IY.l)() ? 0 : RY.w.Menu)
    }

    function CY() {
      EY = !1, mY = 0, ZY(), qY()
    }

    function fY(YY) {
      return TY.add(YY), () => {
        TY.delete(YY)
      }
    }

    function jY(YY) {
      uY = !1, YY !== vY && (vY = YY, iY = !1, clearTimeout(aY), sY = !vY && SY, vY ? (WY = !1, EY = !1, mY = 0) : KY() && !SY && (EY = !0), SY = !1, vY && !KY() && nY(), UY(), sY && qY())
    }

    function hY(YY) {
      YY !== WY && (WY = YY, YY || qY())
    }

    function dY() {
      uY = !1, iY || !0 !== bY() || (iY = !0, clearTimeout(aY), aY = setTimeout(MY, yY))
    }

    function JY() {
      return (!uY || performance.now() - oY > QY) && (uY = (0, gY.D)().lockPointer(), oY = performance.now()), uY
    }

    function MY() {
      wY() && XY() && JY()
    }

    function wY() {
      return KY() && !vY && !WY && !(0, FY.f)()
    }

    function bY() {
      var YY;
      return "undefined" === typeof navigator || null === (YY = navigator.userActivation) || void 0 === YY ? void 0 : YY.isActive
    }

    function XY() {
      return sY && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== bY()
    }

    function qY() {
      KY() ? wY() && !EY && XY() && JY() : vY && !SY && nY()
    }

    function pY() {
      EY ? navigator.vendor.startsWith("Apple") ? xY() : mY = VY : qY()
    }

    function kY() {
      mY > 0 && 0 === --mY && xY()
    }

    function GY() {
      mY = 0
    }

    function xY() {
      wY() && !0 === bY() && JY()
    }

    function nY() {
      SY = !0, (0, gY.D)().unlockPointer()
    }

    function PY() {
      uY = !1, sY = !1, iY = !1, clearTimeout(aY), WY = !1, EY = !1, mY = 0, SY = !1;
      const YY = vY;
      vY = !1, YY && UY()
    }

    function UY() {
      for (const YY of [...TY]) YY(vY);
      AY.g.vo("pointerLockUpdate", vY)
    }
  },
  39785: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sY,
      e: () => OY,
      i: () => uY,
      m: () => aY,
      o: () => RY,
      s: () => vY,
      u: () => gY
    });
    let FY = null,
      AY = null,
      IY = null;

    function RY(YY) {
      FY = YY
    }

    function OY() {
      return FY
    }

    function gY(YY) {
      AY = YY
    }

    function aY() {
      return AY
    }

    function vY(YY) {
      IY = YY
    }

    function uY() {
      return IY
    }

    function sY() {
      var YY, rY;
      return !0 === (null === (YY = AY) || void 0 === YY || null === (rY = YY.currentViewer) || void 0 === rY ? void 0 : rY.inPlayback)
    }
  },
  39835: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => IY,
      j: () => OY
    });
    var FY = DY(39683),
      AY = DY(39693);

    function IY(YY) {
      if (YY.queries.drawCensus() < FY.ub.BYTES) return null;
      const rY = YY.memoryData(YY.scratch(), FY.ub.BYTES, 4, "the draw census");
      return null === rY ? null : {
        terrainOpaque: FY.ub.terrainOpaque(rY, 0),
        terrainTransparent: FY.ub.terrainTransparent(rY, 0),
        terrainPack: FY.ub.terrainPack(rY, 0),
        earthSky: FY.ub.earthSky(rY, 0),
        skyMeshes: FY.ub.skyMeshes(rY, 0),
        regular: FY.ub.regular(rY, 0),
        thin: FY.ub.thin(rY, 0),
        line: FY.ub.line(rY, 0),
        text: FY.ub.text(rY, 0),
        particles: FY.ub.particles(rY, 0)
      }
    }

    function RY(YY) {
      const {
        terrainOpaque: rY,
        terrainTransparent: DY,
        earthSky: FY,
        skyMeshes: AY,
        regular: IY,
        thin: RY,
        line: OY,
        text: gY,
        particles: aY
      } = YY;
      return rY + DY + FY + AY + IY + RY + OY + gY + aY
    }

    function OY() {
      const YY = (0, AY.g)();
      return !0 === (null === YY || void 0 === YY ? void 0 : YY.isCoreRunning) ? function(YY) {
        const rY = IY(YY);
        if (null === rY) return [];
        const {
          terrainOpaque: DY,
          terrainTransparent: FY,
          terrainPack: AY,
          earthSky: OY,
          skyMeshes: gY,
          regular: aY,
          thin: vY,
          line: uY,
          text: sY,
          particles: iY
        } = rY;
        return [{
          label: "Drawn",
          value: `${RY(rY)}`
        }, {
          label: "Terrain",
          value: `${DY} opaque / ${FY} transparent (${AY} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${aY} / ${vY}`
        }, {
          label: "Text / Lines",
          value: `${sY} / ${uY}`
        }, {
          label: "Sky / Particles",
          value: `${OY+gY} / ${iY}`
        }]
      }(YY.api) : []
    }
  },
  39842: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadIcons: () => cY,
      setIconFileOverrides: () => KY,
      wasmIconLookups: () => JY,
      wasmIconQueries: () => dY
    });
    var FY = DY(4038),
      AY = DY(4010),
      IY = DY(39849),
      RY = DY(1818),
      OY = DY(1808),
      gY = DY(2864),
      aY = DY(2866);
    let vY = null,
      uY = null;

    function sY(YY) {
      const rY = YY.startsWith(aY.j),
        [DY, FY = DY, AY = DY] = (rY ? YY.slice(aY.j.length) : YY).split(aY.f);
      return {
        top: DY,
        left: FY,
        right: AY,
        half: rY
      }
    }

    function iY(YY) {
      const rY = null === vY ? void 0 : (0, gY.b)(YY),
        DY = void 0 === rY ? 0 : vY.codes[rY];
      return 0 === DY ? void 0 : vY.pool[DY - 1]
    }
    var yY = DY(2862),
      QY = DY(3992),
      oY = DY(4035),
      WY = DY(39858);
    const EY = "item:";
    let mY = null,
      VY = null,
      SY = null,
      lY = null,
      TY = !1,
      eY = !1,
      NY = null,
      BY = 0;

    function cY() {
      return eY || (eY = !0, (0, oY.i)().then((YY => {
        YY && (0, RY.e)()
      }))), SY ??= Promise.all([(0, yY.e)(), (uY ??= DY.e(1).then((() => DY(41667))).then((YY => {
        let {
          BLOCK_FACE_RUNS: rY,
          BLOCK_FACES: DY,
          MAX_FACE_ITEM_ID: FY
        } = YY;
        vY = {
          codes: (0, aY.y)(rY, FY + 1),
          pool: DY.split(aY.s).map(sY)
        }
      }), (YY => {
        throw uY = null, YY
      })), uY), (0, WY.i)(), DY.e(186).then((() => DY(8770)))]).then((YY => {
        let [, , rY, DY] = YY;
        rY.followBundledTextures(), mY = rY, VY = DY, (0, RY.e)()
      }), (YY => {
        SY = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", YY)
      })), SY
    }

    function KY(YY) {
      NY = YY, BY++, (0, RY.e)()
    }

    function HY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = NY) || void 0 === DY ? void 0 : DY.itemSprite(YY)) && void 0 !== rY ? rY : mY.itemSpriteUrl(YY)
    }

    function zY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = NY) || void 0 === DY ? void 0 : DY.blockTexture(YY)) && void 0 !== rY ? rY : mY.blockTextureUrl(YY)
    }

    function ZY(YY) {
      var rY;
      return null !== (rY = (0, yY.b)(YY)) && void 0 !== rY ? rY : YY
    }

    function CY(YY, rY) {
      var DY, FY, AY;
      return null !== (DY = null !== (FY = null !== (AY = zY(YY)) && void 0 !== AY ? AY : null === rY || void 0 === rY ? void 0 : rY.rotated[YY]) && void 0 !== FY ? FY : null === rY || void 0 === rY ? void 0 : rY.animated[YY]) && void 0 !== DY ? DY : mY.notFoundUrl()
    }

    function fY(YY) {
      return void 0 !== (0, gY.b)(YY) ? YY : /^[1-9][0-9]*$/.test(YY) ? (0, gY.e)(Number(YY)) : void 0
    }

    function jY(YY) {
      var rY;
      if (YY.startsWith(EY)) {
        var DY;
        const rY = (0, yY.b)(YY.slice(5));
        return null !== (DY = void 0 === rY ? null : HY(rY)) && void 0 !== DY ? DY : mY.notFoundUrl()
      }
      return null !== (rY = mY.particleUrl(YY)) && void 0 !== rY ? rY : mY.notFoundUrl()
    }

    function hY(YY, rY) {
      return "StairsBlock" === YY ? YY : rY ? "SlabBlock" : "CubeBlock"
    }
    const dY = {
        async blockIcon(YY) {
          var rY;
          let {
            name: FY,
            size: AY,
            lineWidth: IY
          } = YY;
          await cY();
          const OY = null !== (rY = fY(FY)) && void 0 !== rY ? rY : FY,
            aY = (0, oY.b)(OY, AY, IY);
          if (null !== aY) return aY;
          const vY = iY(OY),
            uY = (0, gY.b)(OY),
            sY = void 0 === uY || null === VY ? void 0 : VY.itemTypeNameOf(uY);
          if (null === mY || void 0 === vY) return "";
          const yY = [vY.top, vY.left, vY.right].some((YY => null === zY(YY))),
            WY = yY ? await (lY ??= DY.e(196).then((() => DY(33702))).then((YY => (TY && (TY = !1, (0, RY.e)()), {
              rotated: YY.rotatedBlockTextures,
              animated: YY.animatedBlockTextures
            })), (YY => (lY = null, TY = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", YY), null))), lY) : null;
          if (yY && null === WY) return "";
          const EY = {
              top: CY(vY.top, WY),
              left: CY(vY.left, WY),
              right: CY(vY.right, WY),
              itemType: hY(sY, vY.half)
            },
            SY = 0 === BY ? OY : `${OY}#${BY}`;
          return (await (0, QY.b)()).drawBlockIconUrl(SY, AY, IY, (() => EY))
        }
      },
      JY = {
        itemIcon: function(YY) {
          var rY, DY;
          if (null === mY) return cY(), OY.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(YY);
          if ((0, AY.i)(YY)) return {
            kind: "icon",
            url: null !== (DY = mY.ingameIconUrl(YY)) && void 0 !== DY ? DY : mY.notFoundUrl()
          };
          if (YY.startsWith(AY.c)) return {
            kind: "icon",
            url: jY(YY.slice(AY.c.length))
          };
          if (0 === (0, gY.i)()) return (0, IY.b)(), OY.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(YY);
          const RY = null !== (rY = fY(YY)) && void 0 !== rY ? rY : YY,
            aY = (0, gY.b)(RY),
            vY = void 0 === aY ? void 0 : VY.itemTypeNameOf(aY);
          if (void 0 !== iY(RY)) return {
            kind: "drawnBlock"
          };
          const uY = function(YY) {
            var rY;
            return null !== (rY = HY(ZY(YY))) && void 0 !== rY ? rY : mY.notFoundUrl()
          }(RY);
          if ((0, oY.e)(RY) && ! function(YY) {
              return null !== NY && (null !== NY.itemSprite(ZY(YY)) || null !== NY.model(YY))
            }(RY)) return {
            kind: "model",
            url: uY
          };
          if ("Gun" === vY) return {
            kind: "gun",
            url: uY
          };
          if (void 0 !== aY && "GrayscaleArmour" === VY.itemTypeOf(aY) || Object.hasOwn(FY.b, RY)) {
            var sY;
            const rY = null !== (sY = (0, FY.e)(YY)) && void 0 !== sY ? sY : (0, FY.e)(RY);
            if (rY) return {
              kind: "item",
              url: uY,
              tint: rY
            }
          }
          return {
            kind: "item",
            url: uY
          }
        },
        hasIcon: function(YY) {
          return void 0 !== fY(YY) || (0, AY.i)(YY) || YY.startsWith(AY.c)
        },
        isItemName: function(YY) {
          return void 0 !== fY(YY)
        }
      }
  },
  39778: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      attachPlayGameSources: () => qD,
      playGameSources: () => XD
    });
    var FY = DY(1808),
      AY = DY(39785),
      IY = DY(4365),
      RY = DY(39693),
      OY = DY(39790),
      gY = DY(38895),
      aY = DY(25),
      vY = DY(4382),
      uY = DY(4376),
      sY = DY(39731),
      iY = DY(39752),
      yY = DY(39798),
      QY = DY(39739);
    (0, QY.l)(vY._b.Chat, (YY => {
      if (YY.payloadKind !== uY.dc.Msgpack) return;
      const rY = function(YY) {
        if (null === YY || "object" !== typeof YY || !("content" in YY)) return null;
        const {
          chatMsgId: rY,
          content: DY,
          chatterEId: FY
        } = YY;
        return {
          serverChatMsgId: null !== rY && void 0 !== rY ? rY : void 0,
          content: DY,
          chatterEId: void 0 === FY || null === FY ? void 0 : String(FY)
        }
      }((0, sY.e)(YY.payload));
      null !== rY && aY.g.vo("chat", rY, !0)
    }));
    const oY = {
        chatReceived: (0, gY.j)((function(YY) {
          var rY, DY, FY;
          return {
            id: YY,
            name: null !== (rY = yY.c.getName(YY)) && void 0 !== rY ? rY : null,
            local: (0, iY.e)() === YY,
            profileEffect: null !== (DY = null === (FY = (0, yY.g)(YY)) || void 0 === FY ? void 0 : FY.profileEffect) && void 0 !== DY ? DY : null
          }
        }))
      },
      WY = {
        sendChatMessage(YY) {
          var rY;
          let {
            vv: DY,
            channelName: FY
          } = YY;
          null === (rY = (0, RY.g)()) || void 0 === rY || rY.clientApi.sendChat(DY, FY)
        }
      };
    var EY = DY(213),
      mY = DY(1823),
      VY = DY(39683),
      SY = DY(38891);
    const lY = [0, 0, 0],
      TY = {
        codeBlockClickable(YY) {
          var rY;
          const DY = (0, RY.g)();
          if (null === DY || void 0 === DY || !DY.isSessionLive) return !1;
          const FY = DY.api;
          if (0 !== (VY.s.playerFlags(FY.apiView, 0) & VY.Cd.Crouching)) return !1;
          const AY = FY.queries.directorEntity(FY.localId) >= VY.lb.BYTES ? FY.memoryData(FY.scratch(), VY.lb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === AY) return !1;
          for (let IY = 0; IY < 3; IY++) lY[IY] = VY.lb.feet(AY, 0, IY);
          return lY[1] += VY.lb.eyeHeight(AY, 0), (0, SY.c)(lY, YY, null !== (rY = mY.b.get("blockReach")) && void 0 !== rY ? rY : EY.d.UW)
        }
      },
      eY = {
        clickCodeBlock(YY) {
          var rY;
          null === (rY = (0, RY.g)()) || void 0 === rY || rY.clickCodeBlock(YY)
        }
      };
    var NY = DY(39708),
      BY = DY(39806),
      cY = DY(1057),
      KY = DY(38400),
      HY = DY(4361),
      zY = DY(39725),
      ZY = DY(39699),
      CY = DY(39728);

    function fY(YY) {
      if (null === YY) return null;
      const rY = [];
      for (const DY of YY) {
        const YY = Object.keys(DY)[0];
        if ("RY" === YY) {
          const {
            str: YY,
            style: FY,
            clickableUrl: AY
          } = DY.RY, IY = Object.keys(YY)[0], RY = YY[IY];
          "string" !== IY && "styledEntityName" !== IY && "styledTranslatedText" !== IY || rY.push({
            str: RY,
            style: FY,
            clickableUrl: AY
          })
        } else rY.push(DY[YY])
      }
      return rY
    }
    const jY = {
      screenPos(YY) {
        var rY, DY;
        return null !== (rY = null === (DY = (0, RY.g)()) || void 0 === DY ? void 0 : DY.renderFrame.projectWorldPosToScreenPos(YY)) && void 0 !== rY ? rY : {
          x: 0,
          y: 0
        }
      }
    };
    let hY = !1;

    function dY() {
      hY || (hY = !0, (0, QY.l)(vY._b.ProgressBarUpdate, (YY => {
        const rY = (0, CY.g)(YY);
        (0, CY.c)(rY) && aY.g.vo("progressBarUpdate", rY, !0)
      })), (0, QY.l)(zY.A, (YY => {
        const rY = (0, CY.f)(zY.A, YY);
        rY && aY.g.vo("middleScreenBarInitiate", {
          duration: rY.er,
          Nr: rY.Nr,
          horizBarRemOffset: rY.Br
        }, !0)
      })), (0, QY.l)(vY._b.RemoveMiddleScreenBar, (() => {
        aY.g.vo("middleScreenBarRemove")
      })), (0, QY.l)(zY.hb, (YY => {
        const rY = (0, CY.f)(zY.hb, YY);
        if (rY) {
          var DY;
          const YY = rY.iY ? null === (DY = (0, RY.g)()) || void 0 === DY ? void 0 : DY.renderFrame.projectDirectionToScreenPos(rY.iY) : void 0;
          aY.g.vo("sendHitmarker", {
            iD: rY.iD,
            screenPos: YY
          }, !0)
        }
      })), (0, QY.l)(zY.lb, (YY => {
        const rY = (0, CY.f)(zY.lb, YY);
        if (rY) {
          const {
            id: YY,
            position: DY,
            style: FY,
            IY: AY,
            aY: IY
          } = rY;
          aY.g.vo("setDirectionArrow", {
            id: YY,
            position: DY,
            style: FY,
            text: fY(AY),
            aY: IY
          }, !0)
        }
      })), (0, QY.l)(zY.g, (YY => {
        const rY = (0, CY.f)(zY.g, YY);
        rY && aY.g.vo("clearDirectionArrow", {
          id: rY.id
        }, !0)
      })), (0, QY.l)(zY.s, (YY => {
        const rY = (0, CY.f)(zY.s, YY);
        rY && aY.g.vo("flyingMiddleMessage", {
          content: fY(rY.jY),
          hY: rY.hY,
          dY: rY.dY
        }, !0)
      })), (0, QY.l)(vY._b.WorldVariation, (YY => {
        const rY = (0, CY.g)(YY);
        if ("string" === typeof rY) {
          const YY = rY === cY.g ? null : {
            message: `Currently loaded as variation: ${rY}`,
            type: "Warning"
          };
          aY.g.vo("showPermanentBottomMessage", YY, !0)
        }
      })), (0, QY.l)(zY.N, (YY => {
        const rY = (0, CY.f)(zY.N, YY);
        rY && function(YY, rY) {
          const {
            type: DY,
            params: FY
          } = (0, KY.d)(rY), AY = {
            ...FY
          };
          for (const IY of KY.c) AY[IY] && (AY[IY] = fY(AY[IY]));
          HY.b.queueQTE(YY, DY, AY).getResult().then((rY => {
            var DY;
            "boolean" === typeof rY && (null === (DY = (0, RY.g)()) || void 0 === DY || DY.send(ZY.d.QteResponse, {
              qteId: YY,
              qteResponse: rY
            }))
          }))
        }(rY.id, rY.hD)
      })), (0, QY.l)(zY.ab, (YY => {
        const rY = (0, CY.f)(zY.ab, YY);
        "number" === typeof rY && HY.b.cancelQTE(rY)
      })), (0, QY.g)((() => {
        HY.b.reset(), aY.g.vo("showPermanentBottomMessage", null, !0)
      })), (0, QY.h)((() => {
        HY.b.reset()
      })), (0, QY.l)(vY._b.EditItemCraftingRecipes, (YY => {
        const rY = (0, CY.g)(YY);
        (0, CY.c)(rY) && aY.g.vo("craftingRecipesEdited", {
          itemName: rY.craftingRecipeItemName,
          recipesForItem: rY.recipesForItem
        })
      })), (0, QY.l)(zY.Y, (YY => {
        const rY = (0, CY.f)(zY.Y, YY);
        rY && aY.g.vo("craftingRecipesEdited", {
          itemName: rY.mY,
          recipesForItem: []
        })
      })))
    }
    var JY = DY(19);
    const MY = [{
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

    function wY(YY) {
      return VY.s.playerFlags(YY.api.apiView, 0)
    }
    const bY = {
        freeCamera: (0, iY.b)((YY => () => {
          const rY = YY.isSessionLive && 0 !== (wY(YY) & VY.Cd.FreeCamMoves),
            DY = YY.freeCameraAllowed() && null === JY.b.get("scriptedCameraFacing");
          return MY[(DY ? 2 : 0) + (rY ? 1 : 0)]
        }), MY[0], (YY => (0, IY.s)(YY)))
      },
      XY = {
        setFreeCameraMovesFly: YY => {
          var rY;
          null === (rY = (0, RY.g)()) || void 0 === rY || rY.setFreeCameraMovesFly(YY)
        }
      },
      qY = {
        freeCameraPos: () => {
          const YY = (0, RY.g)();
          return null !== YY && void 0 !== YY && YY.isSessionLive && YY.renderFrame.hasView && 0 !== (wY(YY) & VY.Cd.FreeCam) ? YY.renderFrame.cameraPosition : null
        }
      };
    var pY = DY(38517);
    let kY = !1,
      GY = !1;

    function xY() {
      const YY = (0, RY.g)();
      if (null === YY || void 0 === YY || !YY.isSessionLive) return void(kY = !1);
      const rY = 0 !== (VY.s.playerFlags(YY.api.apiView, 0) & VY.Cd.FreeCam);
      rY !== kY && (kY = rY, (0, pY.e)(rY))
    }
    var nY = DY(341),
      PY = DY(36400),
      UY = DY(1830);
    var LY = DY(39812),
      tY = DY(39747);
    const Yr = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let rr = "off";

    function Dr(YY) {
      var rY;
      return null === YY ? null : {
        label: null !== (rY = (0, LY.b)(YY, "interactionPrompt")) && void 0 !== rY ? rY : null
      }
    }
    const Fr = new Map([
      [VY.oc.Open, {
        label: gY.e.open
      }],
      [VY.oc.Close, {
        label: gY.e.close
      }],
      [VY.oc.Milk, {
        label: gY.e.milk
      }],
      [VY.oc.Shear, {
        label: gY.e.shear
      }],
      [VY.oc.Tame, {
        label: gY.e.tame
      }],
      [VY.oc.Feed, {
        label: gY.e.feed
      }],
      [VY.oc.Ride, {
        label: gY.e.ride
      }]
    ]);
    class Ar {
      constructor() {
        this.target = Yr, this.rv = VY.$c, this.optionName = null, this.pickaxe = new gY.d
      }
      read(YY) {
        var rY;
        const DY = VY.s.targetBlockId(YY.api.apiView, 0);
        DY !== this.rv && (this.rv = DY, this.optionName = DY === VY.$c ? null : `${YY.tables.getMetaInfo(DY).rootName}CrosshairText`);
        const FY = null === this.optionName ? null : null !== (rY = YY.tables.getClientOption(this.optionName)) && void 0 !== rY ? rY : null;
        this.pickaxe.update(function(YY, rY) {
          var DY, FY, AY;
          if (0 === (VY.s.playerFlags(YY.api.apiView, 0) & VY.Cd.Breaking) || rY === VY.$c || 0 === rY) return null;
          const {
            tables: IY
          } = YY;
          if (!0 === IY.getClientOption("creative")) return null;
          const RY = IY.nameOfId(rY),
            OY = null === (DY = YY.items.ja()) || void 0 === DY ? void 0 : DY.name,
            gY = null !== (FY = IY.getItemStat(RY, "harvestLevel")) && void 0 !== FY ? FY : 0;
          return (0, nY.yc)({
            blockHarvestType: IY.getDefaultItemStat(RY, "harvestType"),
            blockHarvestLevel: IY.getDefaultItemStat(RY, "harvestLevel"),
            harvestLevel: gY,
            heldToolType: void 0 === OY ? void 0 : IY.getDefaultItemStat(OY, "harvests"),
            heldToolLevel: void 0 === OY ? void 0 : IY.getDefaultItemStat(OY, "level")
          }) && null !== (AY = PY.r[gY]) && void 0 !== AY ? AY : null
        }(YY, DY)), YY.watchPromptPick(rr);
        const AY = "touch" === rr ? function(YY) {
          var rY;
          const DY = YY.interactLabel;
          return DY === VY.oc.Entity ? Dr(YY.promptEntity) : DY === VY.oc.TameWith ? {
            label: (0, gY.r)(YY.tables.nameOfId(YY.interactIcon))
          } : null !== (rY = Fr.get(DY)) && void 0 !== rY ? rY : null
        }(YY) : Dr(YY.promptEntity);
        return this.target = (0, UY.l)(this.target, {
          interactPrompt: AY,
          blockText: FY,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Ir = null;
    const Rr = {
      current: () => {
        var YY, rY;
        return null !== (YY = null === (rY = Ir) || void 0 === rY ? void 0 : rY.target) && void 0 !== YY ? YY : Yr
      },
      watch: YY => {
        const rY = new Ar;
        Ir = rY;
        const DY = (0, iY.g)((DY => {
          let FY = rY.read(DY);
          YY(FY);
          const AY = (0, IY.w)((() => {
            const AY = rY.read(DY);
            AY !== FY && (FY = AY, YY(AY))
          }));
          return () => {
            AY(), DY.watchPromptPick("off")
          }
        }));
        return () => {
          DY(), Ir === rY && (Ir = null)
        }
      }
    };
    let Or = 0,
      gr = 0;
    const ar = {
        health: gY.p,
        aura: gY.h,
        hotbar: tY.d.states.hotbar,
        heldItemAim: tY.d.states.heldItemAim,
        crouching: (0, iY.b)((YY => function(YY) {
          const rY = () => 0 !== (VY.s.playerFlags(YY.apiView, 0) & VY.Cd.Crouching);
          return {
            current: rY,
            watch(YY) {
              let DY = rY();
              return (0, IY.s)((() => {
                const FY = rY();
                FY !== DY && (DY = FY, YY(FY))
              }))
            }
          }
        }(YY.api).current), !1, (YY => (0, IY.s)(YY))),
        flight: (0, iY.b)((YY => () => function(YY) {
          const rY = VY.s.playerFlags(YY.apiView, 0);
          return (0, gY.l)(0 !== (rY & VY.Cd.CanFly), 0 !== (rY & VY.Cd.Flying))
        }(YY.api)), (0, gY.l)(!1, !1), (YY => (0, IY.s)(YY))),
        gliderBoostFuel: (0, iY.b)((YY => () => VY.s.gliderBoostFuel(YY.api.apiView, 0)), 0, (YY => (0, IY.s)(YY))),
        crosshairTarget: Rr
      },
      vr = {
        hotbarSlotRequested: tY.d.events.hotbarSlotRequested,
        hotbarScrolled: tY.d.events.hotbarScrolled,
        numberKeyPressed: tY.d.events.numberKeyPressed,
        shotDamageToShow: (0, gY.q)((YY => !0 === (0, LY.b)(YY, "showDamageAmounts")))
      },
      ur = {
        selectHotbarSlot: tY.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: YY => {
          rr = YY
        }
      },
      sr = {
        momentumFrac: function() {
          var YY, rY, DY;
          const FY = (0, RY.g)(),
            AY = performance.now(),
            IY = null === FY || void 0 === FY || null === (YY = FY.items.ja()) || void 0 === YY || null === (rY = YY.attributes) || void 0 === rY || null === (DY = rY.customAttributes) || void 0 === DY ? void 0 : DY.enchantments;
          return Or = null !== FY && null !== IY && void 0 !== IY && IY.Momentum ? 0 !== (VY.s.playerFlags(FY.api.apiView, 0) & VY.Cd.Breaking) ? Math.max(0, VY.s.momentumFrac(FY.api.apiView, 0)) : Math.max(0, Or - (AY - gr) / 1500) : 0, gr = AY, Or
        }
      };
    var ir = DY(39686),
      yr = DY(1244),
      Qr = DY(35928),
      or = DY(8208),
      Wr = DY(1619),
      Er = DY(2251),
      mr = DY(4386);
    let Vr = !1;

    function Sr(YY) {
      Vr = YY
    }

    function lr() {
      "inGame" !== JY.b.get("gameState") || (0, Wr.t)() || aY.g.vo("ctrlCrouchWithoutFullscreen")
    }
    let Tr = !1;
    const er = {
        OpenEmoteWheel: () => {
          Sr(!0), Tr = !0, queueMicrotask((() => {
            Tr && (Tr = !1, aY.g.vo("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          aY.g.vo("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Qr.e)() || aY.g.vo("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Qr.e)() || aY.g.vo("XKeyPressed")
        },
        CtrlCrouch: lr,
        "primary-fire": () => {
          aY.g.vo("mouseState", {
            sR: yr.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          aY.g.vo("mouseState", {
            sR: yr.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          aY.g.vo("mouseState", {
            sR: yr.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      Nr = {
        OpenEmoteWheel: () => {
          Sr(!1), Tr ? (Tr = !1, (0, or.b)() || aY.g.vo("requestEmoteWheelHoldOpen")) : aY.g.vo("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: lr,
        "primary-fire": () => {
          aY.g.vo("mouseState", {
            sR: yr.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          aY.g.vo("mouseState", {
            sR: yr.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          aY.g.vo("mouseState", {
            sR: yr.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Br = !1;

    function cr() {
      Br || (Br = !0, (0, mr.h)((YY => {
        if ((0, AY.b)()) return;
        const rY = (0, mr.e)(YY) ? "primary-fire" : YY.action;
        var DY;
        if (YY.down) {
          if (0 === (YY.flags & Er.c.Synthetic)) {
            var FY;
            null === (FY = er[rY]) || void 0 === FY || FY.call(er)
          }
        } else null === (DY = Nr[rY]) || void 0 === DY || DY.call(Nr)
      })))
    }
    var Kr = DY(332),
      Hr = DY(99),
      zr = DY(40),
      Zr = DY(39815),
      Cr = DY(1322),
      fr = DY(38356);
    let jr = !1;
    const hr = {
      sendCodeCollab(YY) {
        var rY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.CodeCollab, (0, ZY.n)(YY), (0, fr.i)(YY))
      }
    };
    let dr = null,
      Jr = !1,
      Mr = null;

    function wr() {
      return "inGame" === JY.b.get("gameState") && !(0, Qr.e)()
    }
    const br = {
        OpenInventory: YY => {
          (0, Wr.x)(YY, "inventory", (0, ir.j)())
        },
        OpenShop: YY => {
          dr && wr() && (0, Wr.v)(YY, Kr.t.SHOP, !dr.shopIsEmpty(mY.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: YY => {
          wr() && (0, Wr.v)(YY, Kr.t.LOBBY_LEADERBOARD, !!mY.b.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: YY => {
          var rY;
          const DY = null === (rY = dr) || void 0 === rY ? void 0 : rY.getClientGameMapKey();
          DY ? (0, Wr.z)(YY, !0, DY) : (0, Wr.x)(YY, "retentionFeatures", !(!mY.b.get("_tasks") && !mY.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: YY => {
          (0, Wr.x)(YY, "inviteLink", Hr.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: YY => {
          wr() && function(YY) {
            var rY;
            const DY = (0, RY.g)(),
              FY = null !== DY && void 0 !== DY && DY.isSessionLive ? DY.api : null,
              AY = FY ? FY.lE(FY.localId) : null,
              IY = null !== (rY = null === AY || void 0 === AY ? void 0 : AY.map((YY => Math.floor(YY)))) && void 0 !== rY ? rY : null;
            (0, Wr.z)(YY, null !== IY && (0, fr.e)((0, Cr.b)()), (() => {
              aY.g.vo("EditLobbyCode", IY)
            }))
          }(YY)
        },
        HideUi: () => {
          aY.g.vo("showUi", !1)
        }
      },
      Xr = {
        HideUi: () => {
          aY.g.vo("showUi", !0)
        }
      };

    function qr() {
      Jr || (Jr = !0, DY.e(151).then((() => DY(41656))).then((YY => {
        dr = YY
      }), (YY => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", YY)
      })), (0, Zr.B)((YY => {
        YY || !(0, Zr.j)() || (0, Hr.isMobile)() || !zr.m.getItem("disableFullscreen") || (0, Wr.p)() || JY.b.set({
          openEverythingMenuName: Kr.t.SETTINGS
        })
      })), (0, mr.h)((YY => {
        let {
          action: rY,
          down: DY,
          press: FY
        } = YY;
        var IY, RY;
        (0, AY.b)() || (DY ? null === (IY = br[rY]) || void 0 === IY || IY.call(br, function(YY) {
          var rY;
          if (0 === YY || (null === (rY = Mr) || void 0 === rY ? void 0 : rY.press) !== YY) {
            const rY = {
              press: YY,
              event: new Event("inputAction")
            };
            Mr = rY, queueMicrotask((() => {
              Mr === rY && (Mr = null)
            }))
          }
          return Mr.event
        }(FY)) : null === (RY = Xr[rY]) || void 0 === RY || RY.call(Xr))
      })))
    }
    var pr = DY(38331),
      kr = DY(38344),
      Gr = DY(38336);
    const xr = {
      completeTask(YY) {
        var rY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.CompleteTask, (0, ZY.r)(YY))
      },
      setServerCookie(YY) {
        var rY;
        let {
          key: DY,
          value: FY
        } = YY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.GeneralCookieSet, (0, ZY.w)({
          ng: DY,
          Pg: FY
        }))
      },
      answerUiRequest(YY) {
        var rY;
        let {
          id: DY,
          ga: FY
        } = YY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.UiRequestResp, (0, ZY.V)({
          za: DY,
          Za: FY,
          Ca: 5
        }))
      },
      chooseRewardedAd(YY) {
        var rY;
        let {
          id: DY,
          ga: FY
        } = YY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.UiRequestResponded, (0, ZY.T)({
          id: DY,
          ga: FY
        }))
      },
      requestLeaderboard(YY) {
        var rY;
        let {
          category: DY,
          timeframe: FY,
          seeTop: AY
        } = YY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.LeaderboardRequest, {
          category: DY,
          timeframe: FY,
          seeTop: AY
        })
      }
    };
    let nr = !1;
    const Pr = EY.d.fW / 2,
      Ur = [Pr, -Pr, -Pr, -Pr, Pr, Pr, -Pr, Pr],
      Lr = [0, 0, 0];

    function tr(YY, rY, DY) {
      for (let FY = 0; FY < YY.length; FY += 2)
        if (YY[FY] === rY && YY[FY + 1] === DY) return !0;
      return !1
    }
    const YD = {
      blocksStandingOn: function() {
        const YY = (0, RY.g)();
        if (null === YY) return [];
        const {
          api: rY,
          chunks: DY,
          tables: FY
        } = YY;
        if (!rY.readPosition(rY.localId, Lr)) return [];
        const [AY, IY, OY] = Lr, gY = Math.ceil(IY) - 1, aY = [], vY = [];
        for (let RY = 0; RY < Ur.length; RY += 2) {
          const YY = AY + Ur[RY],
            rY = OY + Ur[RY + 1];
          if (Number.isInteger(YY) || Number.isInteger(rY)) continue;
          const IY = Math.floor(YY),
            uY = Math.floor(rY);
          if (tr(vY, IY, uY)) continue;
          const sY = DY.rv(IY, gY, uY);
          FY.isSolidBlockId(sY) && (vY.push(IY, uY), aY.push(FY.nameOfId(sY)))
        }
        return aY
      },
      dropAhead: function() {
        const YY = (0, RY.g)();
        return null !== YY && 0 !== (VY.s.playerFlags(YY.api.apiView, 0) & VY.Cd.DropAhead)
      }
    };
    var rD = DY(36324),
      DD = DY(38437),
      FD = DY(1346),
      AD = DY(39759);
    const ID = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      RD = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function OD() {
      const YY = new Set;
      return {
        add: rY => (YY.add(rY), () => {
          YY.delete(rY)
        }),
        fire() {
          for (const rY of YY) rY()
        }
      }
    }
    const gD = Object.freeze([]);

    function aD(YY, rY) {
      let DY, {
        rereads: FY,
        followLocalId: AY
      } = rY;
      const RY = () => (DY = (0, UY.l)(DY, YY()), DY);
      return {
        current: RY,
        watch(YY) {
          const rY = (0, yY.b)((rY => {
            FY(rY) && YY(RY())
          }));
          if (!AY) return rY;
          let DY = (0, iY.e)();
          const OY = (0, IY.w)((() => {
            const rY = (0, iY.e)();
            rY !== DY && (DY = rY, YY(RY()))
          }));
          return () => {
            rY(), OY()
          }
        }
      }
    }
    const vD = {
        players: aD((function() {
          const YY = yY.c.ids(),
            rY = {};
          for (const IY of YY) {
            var DY, FY, AY;
            rY[IY] = {
              name: null !== (DY = yY.c.getName(IY)) && void 0 !== DY ? DY : null,
              ranks: null !== (FY = yY.c.getSetting(IY, "ranks")) && void 0 !== FY ? FY : gD,
              cosmetics: null !== (AY = (0, yY.g)(IY)) && void 0 !== AY ? AY : null
            }
          }
          return {
            ids: YY,
            byId: rY,
            localId: (0, iY.e)()
          }
        }), {
          rereads: YY => "roster" !== YY.kind || YY.members || YY.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: aD((function() {
          const YY = {};
          for (const AY of yY.c.ids()) {
            var rY, DY, FY;
            YY[AY] = {
              colour: null !== (rY = yY.c.getSetting(AY, "colorInLobbyLeaderboard")) && void 0 !== rY ? rY : null,
              values: null !== (DY = yY.c.getSetting(AY, "lobbyLeaderboardValues")) && void 0 !== DY ? DY : null,
              tags: null !== (FY = yY.c.getSetting(AY, "lobbyLeaderboardTags")) && void 0 !== FY ? FY : null
            }
          }
          return YY
        }), {
          rereads: function(YY) {
            if ("roster" !== YY.kind) return "reset" === YY.kind;
            const {
              members: rY,
              settings: DY
            } = YY;
            return rY || DY.has("colorInLobbyLeaderboard") || DY.has("lobbyLeaderboardValues") || DY.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      uD = {
        cosmeticsUpdated: {
          watch: YY => (0, yY.b)((rY => {
            if ("cosmetics" !== rY.kind) return;
            const DY = (0, iY.e)();
            YY(rY.updates.map((YY => {
              let {
                YY: rY,
                rY: FY,
                DY: AY
              } = YY;
              return {
                local: rY === DY,
                rY: FY,
                DY: AY
              }
            })))
          }))
        }
      };
    var sD = DY(2579),
      iD = DY(1699),
      yD = DY(668),
      QD = DY(39821);
    let oD = !1,
      WD = null;
    const ED = {
      setShopOpen(YY) {
        var rY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.ShopMenuChanged, (0, ZY.O)(YY))
      },
      buyShopItem(YY) {
        var rY;
        let {
          categoryKey: DY,
          itemKey: FY,
          userInput: AY
        } = YY;
        null === (rY = (0, RY.g)()) || void 0 === rY || rY.send(ZY.d.ItemBought, {
          categoryKey: DY,
          itemKey: FY,
          shopVersion: mY.b.get("_shopVersion"),
          userInput: AY
        })
      }
    };
    let mD = !1;
    var VD = DY(4396);
    const SD = Er.w.LookFrozen | Er.w.ClicksSuppressed;

    function lD(YY, rY) {
      var DY;
      null !== (DY = (0, RY.g)()) && void 0 !== DY && DY.send(YY, rY) || console.warn(`[bloxd-wasm-client] message ${YY} not sent: no live game or the core's command ring is full`)
    }(0, QY.l)(zY.pb, (YY => {
      const rY = (0, CY.f)(zY.pb, YY);
      void 0 !== rY && aY.g.vo("setDiscordReportKey", rY)
    }));
    const TD = {
      ignorePlayer(YY) {
        lD(ZY.d.IgnoreUser, (0, ZY.z)({
          ua: YY
        }))
      },
      reportPlayer(YY) {
        let {
          playerId: rY,
          chatMsgId: DY,
          Qa: FY,
          details: AY
        } = YY;
        lD(ZY.d.UserReport, (0, ZY.ab)({
          ia: rY,
          ya: DY,
          Qa: FY,
          oa: AY
        }))
      },
      reportWorldCodeChat(YY) {
        let {
          chatMsgId: rY,
          Qa: DY,
          details: FY
        } = YY;
        lD(ZY.d.UserReport, (0, ZY.ab)({
          ia: "",
          ya: rY,
          Qa: DY,
          oa: FY
        }))
      },
      requestDiscordReportKey(YY) {
        lD(ZY.d.ReqDiscordReportKey, (0, ZY.H)(YY))
      },
      reportLobbyOrGame(YY) {
        let {
          target: rY,
          Qa: DY,
          details: FY
        } = YY;
        "customGame" === rY ? lD(ZY.d.CustomGameReport, (0, ZY.u)({
          Qa: DY,
          oa: FY
        })) : lD(ZY.d.LobbyReport, (0, ZY.B)({
          Qa: DY,
          oa: FY
        }))
      },
      updateMyCosmetic(YY) {
        lD(ZY.d.UpdateMyCosmetic, (0, ZY.$)(YY))
      },
      holdEmoteWheel(YY) {
        !YY || Vr ? (0, VD.k)(SD, YY ? SD : 0) : aY.g.vo("requestEmoteWheelHoldRelease")
      }
    };
    var eD = DY(39823),
      ND = DY(8830),
      BD = DY(38910);
    const cD = [0, 0, 0],
      KD = [0, 0, 0],
      HD = [0, 0, 0],
      zD = {
        blockAtViewPoint(YY) {
          let {
            x: rY,
            y: DY
          } = YY;
          const FY = (0, RY.g)();
          if (null === FY || void 0 === FY || !FY.renderFrame.hasView) return null;
          const {
            renderFrame: AY,
            clientApi: IY,
            api: OY
          } = FY;
          let gY = 0;
          return (0, BD.d)(((YY, rY, DY) => (gY = IY.getBlockId(YY, rY, DY), 0 !== gY)), AY.cameraPosition, (0, BD.e)((YY => VY.s.viewProj(OY.apiView, 0, YY)), rY, DY, cD), BD.c, KD, HD) ? {
            pos: [KD[0], KD[1], KD[2]],
            normal: [HD[0], HD[1], HD[2]],
            name: (0, ND.f)(gY)
          } : null
        }
      },
      ZD = {
        setBlockHighlight(YY) {
          var rY;
          null === (rY = (0, RY.g)()) || void 0 === rY || rY.setBlockHighlight(YY)
        }
      };
    var CD = DY(1818),
      fD = DY(39828),
      jD = DY(39835),
      hD = DY(39842);
    var dD = DY(614),
      JD = DY(38917);

    function MD(YY) {
      if (null === YY || void 0 === YY || !YY.isCoreRunning) return null;
      const {
        api: rY,
        chunks: DY,
        items: FY,
        tables: AY
      } = YY;
      return {
        playerFeet() {
          const YY = rY.lE(rY.localId);
          return null !== YY && void 0 !== YY && YY.every(Number.isFinite) ? YY : null
        },
        chunkBlocks: YY => DY.isLoaded(YY[0], YY[1], YY[2]) ? (YY, rY, FY) => DY.rv(YY, rY, FY) : null,
        blockName: YY => AY.nameOfId(YY),
        inventory: () => ({
          slots: FY.playerItems().map((YY => YY ? {
            name: YY.name,
            amount: YY.amount
          } : null)),
          heldSlot: FY.selectedSlot
        }),
        nearby() {
          const DY = [];
          for (let AY = 0; AY < rY.idStr.length; AY++) {
            var FY;
            const IY = rY.idStr[AY],
              RY = rY.serverIds[AY],
              OY = rY.kinds[AY];
            if (null === IY || rY.isLocal(RY) || OY >>> VY.b !== VY.o.Lifeform) continue;
            const gY = rY.lE(RY),
              aY = dD.j[OY & VY.d];
            gY && void 0 !== aY && DY.push({
              kind: "Player" === aY ? "player" : aY,
              name: null !== (FY = YY.clientApi.getEntityName(IY)) && void 0 !== FY ? FY : null,
              position: gY
            })
          }
          return DY
        },
        droppedItems() {
          let YY = 0;
          for (let DY = 0; DY < rY.idStr.length; DY++) null !== rY.idStr[DY] && rY.kinds[DY] >>> VY.b === VY.o.Item && YY++;
          return YY
        }
      }
    }
    const wD = {
        worldCodeAiChunk: YY => Promise.resolve((0, JD.e)(MD((0, RY.g)()), YY)),
        worldCodeAiGameState: () => Promise.resolve((0, JD.g)(MD((0, RY.g)())))
      },
      bD = function(YY) {
        const rY = OD(),
          FY = OD(),
          AY = new Set,
          IY = new Set,
          RY = () => {
            var rY, DY;
            return null !== (rY = null === (DY = YY.runtime()) || void 0 === DY ? void 0 : DY.currentViewer) && void 0 !== rY ? rY : null
          };
        let OY = null,
          gY = null;
        const vY = (YY, rY) => ({
            current: YY,
            watch(DY) {
              let FY = YY();
              return rY.add((() => {
                const rY = YY();
                rY !== FY && (FY = rY, DY(rY))
              }))
            }
          }),
          sY = YY => ({
            watch: rY => (YY.add(rY), () => {
              YY.delete(rY)
            })
          }),
          iY = YY => {
            const rY = RY(),
              DY = null === rY || void 0 === rY ? void 0 : rY.view;
            rY && DY && rY.seek(Math.max(0, Math.min(DY.totalTicks - 1, DY.Zu + YY * uY.rd)))
          },
          yY = {
            replay: vY((() => {
              var YY;
              const rY = RY(),
                DY = null !== (YY = null === rY || void 0 === rY ? void 0 : rY.view) && void 0 !== YY ? YY : null;
              return null === rY || null === DY || DY.state === uY.ed.None ? (OY = null, null) : (OY = (0, UY.l)(OY, {
                id: rY.id,
                Zu: DY.Zu,
                totalTicks: DY.totalTicks,
                eT: uY.rd,
                playing: DY.state === uY.ed.Playing,
                speed: DY.speed,
                cameraMode: DY.cameraMode,
                freecam: "freecam" === DY.cameraMode
              }), OY)
            }), rY),
            replayEdits: vY((() => {
              var YY;
              const rY = RY(),
                DY = null !== (YY = null === rY || void 0 === rY ? void 0 : rY.view) && void 0 !== YY ? YY : null;
              return null === rY || null === DY || DY.state === uY.ed.None ? (gY = null, null) : (gY = (0, UY.l)(gY, {
                cameraKeyframes: [...rY.keyframes],
                playbackMark: DY.mark,
                fileName: rY.fileName,
                unsavedChanges: rY.unsavedChanges,
                suggestSaveAs: rY.suggestSaveAs
              }), gY)
            }), rY),
            replayRecorder: vY((() => {
              var rY, DY;
              return null !== (rY = null === (DY = YY.runtime()) || void 0 === DY ? void 0 : DY.recorder.current) && void 0 !== rY ? rY : AD.e.states.replayRecorder.current()
            }), FY),
            replayVideoExporting: {
              current: DD.d,
              watch: YY => (0, aY.j)("replayViewer|videoExportChanged", (() => {
                YY((0, DD.d)())
              }))
            }
          },
          QY = {
            replayUiActionRequested: sY(IY),
            replayViewerRequested: sY(AY)
          },
          oY = YY => {
            for (const rY of AY) rY(YY)
          },
          WY = () => {
            var FY;
            !0 === (null === (FY = RY()) || void 0 === FY ? void 0 : FY.isOpen) && Promise.all([DY.e(95), DY.e(63)]).then((() => DY(41661))).then((DY => {
              let {
                startWasmReplayVideoExport: FY
              } = DY;
              return FY({
                viewer: RY,
                canvas: () => {
                  var rY, DY;
                  return null !== (rY = null === (DY = YY.canvas) || void 0 === DY ? void 0 : DY.call(YY)) && void 0 !== rY ? rY : null
                },
                watchViewer: rY.add,
                requestViewer: oY
              })
            }), (YY => {
              console.error("Couldn't load the video export", YY), FD.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((YY => {
              console.error("The video export failed", YY)
            }))
          },
          EY = {
            replayAction(YY) {
              if ((0, DD.d)()) return;
              const rY = RY();
              switch (YY) {
                case "replaySkipBack":
                  iY(-1);
                  break;
                case "replaySkipForward":
                  iY(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== rY && void 0 !== rY && rY.view && rY.setSpeed((0, rD.h)(rY.view.speed, "replaySpeedUp" === YY ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === rY || void 0 === rY || rY.addKeyframe()
              }
            },
            setReplayPlaying(YY) {
              var rY, DY;
              (0, DD.d)() || (YY ? null === (rY = RY()) || void 0 === rY || rY.play() : null === (DY = RY()) || void 0 === DY || DY.pause())
            },
            seekReplay(YY) {
              var rY;
              let {
                Zu: DY,
                ignorePlaybackMark: FY
              } = YY;
              null === (rY = RY()) || void 0 === rY || rY.seek(DY, null !== FY && void 0 !== FY && FY)
            },
            setReplayCameraMode(YY) {
              var rY;
              null === (rY = RY()) || void 0 === rY || rY.setCameraMode(YY)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(YY) {
              var rY;
              null === (rY = RY()) || void 0 === rY || rY.setKeyframe(YY)
            },
            moveReplayCameraKeyframe(YY) {
              var rY;
              let {
                from: DY,
                to: FY
              } = YY;
              null === (rY = RY()) || void 0 === rY || rY.moveKeyframe(DY, FY)
            },
            deleteReplayCameraKeyframes(YY) {
              var rY;
              let {
                start: DY,
                end: FY
              } = YY;
              null === (rY = RY()) || void 0 === rY || rY.deleteKeyframes(DY, FY)
            },
            setReplayPlaybackMark(YY) {
              var rY;
              null === (rY = RY()) || void 0 === rY || rY.setMark(YY)
            },
            cropReplay(YY) {
              var rY, DY;
              let {
                start: FY,
                end: AY
              } = YY;
              return !(0, DD.d)() && (null !== (rY = null === (DY = RY()) || void 0 === DY ? void 0 : DY.crop(FY, AY)) && void 0 !== rY && rY)
            },
            holdReplayForShaderPackFailure(YY) {
              const rY = RY();
              rY && (rY.holdForShaderPackFailure(), function(YY) {
                DY.e(130).then((() => DY(38553))).then((rY => {
                  let {
                    shaderPackPage: DY
                  } = rY;
                  DY.block(YY)
                })).catch((YY => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", YY)
                }))
              }(YY))
            },
            exportReplayVideo() {
              WY()
            },
            toggleRecording() {
              var rY;
              null === (rY = YY.runtime()) || void 0 === rY || rY.recorder.toggleRecording()
            },
            saveClip() {
              var rY;
              null === (rY = YY.runtime()) || void 0 === rY || rY.recorder.saveClip()
            },
            setRecorderPrefs(rY) {
              var DY;
              let {
                clipping: FY,
                clipSeconds: AY
              } = rY;
              null === (DY = YY.runtime()) || void 0 === DY || DY.recorder.setPrefs(FY, AY)
            },
            setReplayViewerOpen(rY) {
              var DY;
              (0, Qr.i)(rY) && (null === (DY = YY.runtime()) || void 0 === DY || DY.recorder.viewerShown(rY))
            },
            recordFlyingMiddleText(rY) {
              var DY;
              let {
                content: FY,
                hY: AY,
                angle: IY,
                dY: RY
              } = rY;
              null === (DY = YY.runtime()) || void 0 === DY || DY.recorder.recordFlyingText(JSON.stringify(FY), AY, IY, RY)
            },
            dragReplayCamera(rY) {
              var DY;
              let {
                dx: FY,
                dy: AY
              } = rY;
              null === (DY = YY.freecam()) || void 0 === DY || DY.drag(FY, AY)
            },
            moveReplayFreecam(rY) {
              var DY;
              null === (DY = YY.freecam()) || void 0 === DY || DY.move(rY)
            },
            holdReplayFreecamVertical(rY) {
              var DY;
              let {
                action: FY,
                ja: AY
              } = rY;
              null === (DY = YY.freecam()) || void 0 === DY || DY.holdVertical(FY, AY)
            }
          },
          mY = YY => {
            var rY;
            const DY = RY(),
              FY = null !== (rY = null === DY || void 0 === DY ? void 0 : DY.view) && void 0 !== rY ? rY : null;
            ID.has(YY) ? (YY => {
              for (const rY of IY) rY(YY)
            })(YY) : RD.has(YY) ? EY.replayAction(YY) : "replayPlayPause" === YY ? DY && FY && FY.state !== uY.ed.None && EY.setReplayPlaying(FY.state !== uY.ed.Playing) : "replayChangeCameraMode" === YY ? null === DY || void 0 === DY || DY.cycleCameraMode() : "replayExit" === YY ? !0 === (null === DY || void 0 === DY ? void 0 : DY.inPlayback) && (0, Cr.j)("/") : "replayExportVideo" === YY && WY()
          };
        let VY = !1;
        return {
          states: yY,
          events: QY,
          commands: EY,
          lookups: {
            replayCamera() {
              var rY, DY, FY;
              return !0 !== (null === (rY = RY()) || void 0 === rY ? void 0 : rY.isOpen) ? null : null !== (DY = null === (FY = YY.cameraView) || void 0 === FY ? void 0 : FY.call(YY)) && void 0 !== DY ? DY : null
            },
            leaveGameReloadsPage() {
              var YY;
              return !0 === (null === (YY = RY()) || void 0 === YY ? void 0 : YY.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var YY;
              const DY = !0 === (null === (YY = RY()) || void 0 === YY ? void 0 : YY.inPlayback);
              DY !== VY && (VY = DY, aY.g.vo("connectedGameChanged")), rY.fire()
            },
            recorderChanged: FY.fire,
            keyDown: YY => {
              var rY;
              switch (YY) {
                case "recordGame":
                  return void EY.toggleRecording();
                case "recordClip":
                  return void((0, Qr.e)() || EY.saveClip())
              }(0, DD.d)() || ("replayViewerOpen" !== YY ? YY.startsWith("replay") && ((0, Qr.e)() || !0 === (null === (rY = RY()) || void 0 === rY ? void 0 : rY.inPlayback)) && mY(YY) : oY("toggle"))
            }
          }
        }
      }({
        runtime: AY.m,
        cameraView: () => {
          var YY;
          const rY = null === (YY = (0, RY.g)()) || void 0 === YY ? void 0 : YY.renderFrame;
          if (!rY) return null;
          const [DY, FY, AY] = rY.cameraPosition, [IY, OY, gY] = rY.cameraDirection;
          return {
            position: [DY, FY, AY],
            direction: [IY, OY, gY]
          }
        },
        canvas: () => {
          var YY, rY, DY;
          return null !== (YY = null === (rY = (DY = (0, IY.D)()).canvas) || void 0 === rY ? void 0 : rY.call(DY)) && void 0 !== YY ? YY : null
        },
        freecam: AY.i
      }),
      XD = {
        states: {
          ...ar,
          ...ir.i,
          ...bD.states,
          ...vD,
          ...bY
        },
        events: {
          ...vr,
          ...oY,
          ...ir.e,
          ...BY.b,
          ...eD.g,
          ...bD.events,
          ...uD,
          ...NY.i
        },
        commands: {
          ...eY,
          ...ur,
          ...WY,
          ...ir.b,
          ...xr,
          ...TD,
          ...NY.f,
          ...hr,
          ...bD.commands,
          ...ED,
          ...XY,
          ...ZD
        },
        queries: {
          ...ir.h,
          ...wD
        },
        lookups: {
          ...sr,
          ...jY,
          ...eD.i,
          ...bD.lookups,
          ...TY,
          ...YD,
          ...zD,
          ...qY
        }
      };

    function qD() {
      (0, OY.h)(QY.n), (0, AY.o)(bD.feed), (0, BY.f)(), nr || (nr = !0, (0, QY.l)(zY.m, (YY => {
        const rY = (0, CY.f)(zY.m, YY);
        "string" === typeof rY && Promise.resolve().then((() => DY(3260))).then((YY => {
          let {
            onCosmeticPackGranted: DY
          } = YY;
          DY(rY)
        }))
      })), (0, QY.l)(zY.jb, (YY => {
        const rY = (0, CY.f)(zY.jb, YY);
        "number" === typeof rY && aY.g.vo("serverUpdating", Date.now() + rY, !0)
      })), (0, QY.l)(zY.J, (YY => {
        const rY = (0, CY.f)(zY.J, YY);
        if ((0, CY.c)(rY)) {
          const {
            AD: YY,
            RD: DY
          } = rY;
          (0, kr.e)({
            AD: "string" === typeof YY ? YY : null,
            RD: "string" === typeof DY ? DY : null
          })
        }
      })), (0, QY.l)(vY._b.NewUiRequest, (YY => {
        const rY = (0, CY.g)(YY);
        (0, CY.c)(rY) && "number" === typeof rY.id && (0, CY.c)(rY.clientParameters) && (0, Gr.g)(rY.id, rY.clientParameters)
      })), (0, QY.l)(zY.cb, (YY => {
        const rY = (0, CY.f)(zY.cb, YY);
        "number" === typeof rY && (0, Gr.i)(rY)
      })), (0, QY.h)(Gr.e), (0, QY.l)(vY._b.UiRequestPopup, (YY => {
        const rY = (0, CY.g)(YY);
        if ((0, CY.c)(rY) && "number" === typeof rY.id && "string" === typeof rY.text) {
          const YY = rY.id;
          (0, Gr.j)(YY, rY.text, (rY => {
            xr.answerUiRequest({
              id: YY,
              ga: rY
            })
          }))
        }
      })), (0, QY.l)(vY._b.TopRightHelper, (YY => {
        const rY = (0, CY.g)(YY);
        void 0 !== rY && aY.g.vo("TopRightHelper", rY, !0)
      })), (0, QY.l)(vY._b.TaskProgress, (YY => {
        const rY = (0, CY.g)(YY);
        (0, CY.c)(rY) && "string" === typeof rY.taskId && "number" === typeof rY.progress && (0, pr.c)({
          taskId: rY.taskId,
          progress: rY.progress
        })
      }))), mD || (mD = !0, (0, QY.l)(zY.v, (YY => {
        const rY = (0, CY.f)(zY.v, YY);
        (0, CY.c)(rY) && aY.g.vo("showShopFromServer", {
          toggle: rY.yD,
          QD: rY.QD
        }, !0)
      })), (0, QY.l)(vY._b.OverShopInfo, (YY => {
        const rY = (0, CY.g)(YY);
        (0, CY.c)(rY) && aY.g.vo("overShopInfo", rY.info, !0)
      })), (0, QY.l)(vY._b.ShowShopTutorial, (() => {
        aY.g.vo("showShopTutorial", null, !0)
      }))), oD || (oD = !0, (0, QY.g)((() => {
        var YY;
        (0, sD.x)(), null === (YY = WD) || void 0 === YY || YY(), WD = (0, QY.c)() ? (0, yD.f)(QY.c) : null
      })), (0, QY.l)(vY._b.SetCookie, (YY => {
        const rY = (0, CY.g)(YY),
          DY = (0, Cr.b)().gameNameWithVariation;
        (0, CY.c)(rY) && "string" === typeof rY.key && null !== DY && (0, iD.setCookie)(DY, rY.key, rY.value)
      })), (0, QY.l)(vY._b.LeaveValues, (YY => {
        const rY = (0, CY.g)(YY);
        if ((0, CY.c)(rY) && "string" === typeof rY.leaveEventType) {
          const {
            leaveEventType: YY,
            category: DY,
            subCategory: FY,
            value: AY
          } = rY;
          (0, sD.D)({
            leaveEventType: YY,
            category: DY,
            subCategory: FY,
            value: AY
          })
        }
      })), (0, QY.l)(vY._b.CustomAnalyticsEvent, (YY => {
        const rY = (0, CY.g)(YY);
        if ((0, CY.c)(rY) && "string" === typeof rY.cat1) {
          const {
            cat1: YY,
            cat2: DY,
            cat3: FY,
            value: AY
          } = rY;
          (0, sD.l)({
            cat1: YY,
            cat2: DY,
            cat3: FY,
            value: AY
          })
        }
      })), (0, QY.l)(vY._b.ProgressionEvent, (YY => {
        const rY = (0, CY.g)(YY);
        if ((0, CY.c)(rY)) {
          const {
            type: YY,
            location1: DY,
            location2: FY,
            location3: AY,
            score: IY
          } = rY;
          (0, sD.r)({
            type: YY,
            location1: DY,
            location2: FY,
            location3: AY,
            score: IY
          })
        }
      })), (0, QY.l)(vY._b.ResourceEvent, (YY => {
        const rY = (0, CY.g)(YY);
        if ((0, CY.c)(rY)) {
          const {
            type: YY,
            resourceType: DY,
            amount: FY,
            category: AY,
            itemName: IY
          } = rY;
          (0, sD.u)({
            type: YY,
            resourceType: DY,
            amount: FY,
            category: AY,
            itemName: IY
          })
        }
      })), (0, QY.l)(vY._b.LeaderboardResponse, (YY => {
        const rY = (0, CY.g)(YY);
        if ((0, CY.c)(rY)) {
          const {
            category: YY,
            timeframe: DY,
            data: FY
          } = rY;
          aY.g.vo("leaderboardResponse", {
            category: YY,
            timeframe: DY,
            data: FY
          })
        }
      })), (0, QY.l)(zY.B, (YY => {
        const rY = (0, CY.f)(zY.B, YY);
        "string" === typeof rY && (0, QD.b)(YY.conn, rY)
      })), (0, QY.l)(zY.C, (YY => {
        const rY = (0, CY.f)(zY.C, YY);
        "string" === typeof rY && console.error(`[logErrorToConsole]: ${rY}`)
      }))), dY(), (0, eD.c)(), jr || (jr = !0, (0, QY.l)(zY.k, (YY => {
        const rY = (0, CY.f)(zY.k, YY);
        void 0 !== rY && (0, fr.m)(rY)
      }))), qr(), cr(), GY || (GY = !0, (0, IY.s)(xY)), FY.gameBridge.attach(XD), (0, FY.installPageSources)({
        commands: {
          ...FY.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: fD.i
        },
        queries: hD.wasmIconQueries,
        lookups: {
          ...FY.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...hD.wasmIconLookups,
          qE: fD.d,
          drawCallStats: jD.j
        }
      }), (0, CD.e)(), (0, hD.loadIcons)()
    }
  },
  39858: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      i: () => OY
    });
    var FY = DY(39862);
    let AY = null,
      IY = null;

    function RY() {
      return AY ??= DY.e(58).then((() => DY(41672))).catch((YY => {
        throw AY = null, YY
      })), AY
    }

    function OY() {
      return IY ??= Promise.all([RY(), (0, FY.h)()]).then((YY => {
        let [rY] = YY;
        return rY
      }), (YY => {
        throw IY = null, YY
      })), IY
    }
  },
  36427: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = {
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
  8908: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY
    });
    var FY = DY(8870);
    const AY = "Air",
      IY = Object.freeze(new FY.h(AY, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36244: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => IY,
      f: () => sY,
      j: () => OY,
      k: () => gY,
      o: () => aY,
      p: () => uY,
      t: () => vY,
      u: () => RY
    });
    var FY = DY(1244);
    let AY = function(YY) {
        return YY[YY.Join = 0] = "Join", YY[YY.Leave = 1] = "Leave", YY[YY.Push = 2] = "Push", YY[YY.Cursor = 3] = "Cursor", YY[YY.Submit = 4] = "Submit", YY[YY.ReloadAsVariation = 5] = "ReloadAsVariation", YY[YY.CreateFile = 6] = "CreateFile", YY[YY.RenameFile = 7] = "RenameFile", YY[YY.DeleteFile = 8] = "DeleteFile", YY[YY.SetEngine = 9] = "SetEngine", YY[YY.RenameFolder = 10] = "RenameFolder", YY
      }({}),
      IY = function(YY) {
        return YY[YY.Joined = 0] = "Joined", YY[YY.Updates = 1] = "Updates", YY[YY.Presence = 2] = "Presence", YY[YY.RemoteCursor = 3] = "RemoteCursor", YY[YY.ForceClose = 4] = "ForceClose", YY[YY.LobbyFilesChanged = 5] = "LobbyFilesChanged", YY[YY.EngineSettings = 6] = "EngineSettings", YY
      }({});

    function RY(YY) {
      return "lobby" === YY.kind ? `lobby:${YY.path}` : `codeBlock:${YY.pos[0]},${YY.pos[1]},${YY.pos[2]}`
    }

    function OY(YY) {
      if ("lobby" === YY) return {
        kind: "lobby",
        path: FY.e
      };
      if (YY.startsWith("lobby:")) {
        const rY = YY.slice(6);
        return uY(rY) ? {
          kind: "lobby",
          path: rY
        } : null
      }
      const rY = YY.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return rY ? {
        kind: "codeBlock",
        pos: [parseInt(rY[1]), parseInt(rY[2]), parseInt(rY[3])]
      } : null
    }

    function gY(YY) {
      return YY.endsWith(".d.ts")
    }

    function aY(YY) {
      return YY.endsWith(".ts") && !gY(YY)
    }
    const vY = 64;

    function uY(YY) {
      if (!YY || YY !== YY.trim()) return !1;
      if (YY.length > vY) return !1;
      if (YY.startsWith("/") || YY.includes("\\") || YY.includes("\0")) return !1;
      if (!gY(YY) && !aY(YY) && ! function(YY) {
          return YY.endsWith(".js") && !YY.endsWith(".min.js") && !YY.endsWith(".bundle.js")
        }(YY)) return !1;
      const rY = YY.split("/");
      for (const DY of rY)
        if ("" === DY || "." === DY || ".." === DY) return !1;
      return !0
    }
    const sY = 14e3
  },
  38400: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      d: () => AY
    });
    const FY = ["description", "label"];

    function AY(YY) {
      const rY = YY.type;
      return {
        type: rY,
        params: YY[rY]
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);