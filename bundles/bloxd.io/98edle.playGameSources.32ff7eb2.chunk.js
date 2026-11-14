export const id = 40;
export const ids = [40];
export const modules = {
  37377: (WW, RW, MW) => {
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
  },
  7691: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(27);

    function CW() {
      return !wW.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35126: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => zR,
      g: () => CW
    });
    const wW = [.25, .5, 1, 2, 4, 8, 16];

    function CW(WW, RW) {
      const MW = wW;
      let CW = MW.indexOf(WW);
      return -1 === CW && (CW = MW.findIndex((RW => RW >= WW)), -1 === CW && (CW = MW.length - 1)), "up" === RW ? MW[Math.min(CW + 1, MW.length - 1)] : MW[Math.max(CW - 1, 0)]
    }

    function zR(WW) {
      return WW <= wW[0]
    }

    function AW(WW) {
      return WW >= wW[wW.length - 1]
    }
  },
  37e3: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(33),
      CW = MW(1558);

    function zR(WW) {
      let {
        taskId: RW,
        progress: MW
      } = WW;
      const wW = CW.d.get("_tasks");
      null !== wW && void 0 !== wW && wW[RW] && CW.d.apply({
        _tasks: {
          ...wW,
          [RW]: {
            ...wW[RW],
            progress: MW
          }
        }
      })
    }
    wW.k.subscribe("clientTaskProgress", (WW => {
      zR(WW)
    }))
  },
  37359: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      f: () => NW,
      h: () => BW,
      j: () => yR,
      k: () => AW,
      n: () => eW
    });
    var wW = MW(1558),
      CW = MW(33),
      zR = MW(1568);
    const AW = (0, zR.n)((function() {
        var WW, RW, MW, CW;
        return {
          health: null !== (WW = wW.d.get("_health")) && void 0 !== WW ? WW : null,
          maxHealth: null !== (RW = wW.d.get("_totalMaxHealth")) && void 0 !== RW ? RW : null,
          shield: null !== (MW = wW.d.get("_shield")) && void 0 !== MW ? MW : null,
          maxShield: null !== (CW = wW.d.get("maxShield")) && void 0 !== CW ? CW : null
        }
      }), [], (0, zR.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      bR = [{
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

    function yR(WW, RW) {
      return bR[(WW ? 2 : 0) + (RW ? 1 : 0)]
    }
    const NW = (0, zR.n)((function() {
      var WW;
      return null !== (WW = wW.d.get("_aura")) && void 0 !== WW ? WW : null
    }), [], (0, zR.k)("_aura"));

    function eW(WW) {
      return {
        watch: RW => (0, CW.m)("shotPlayer", (MW => {
          let {
            playerId: wW,
            damage: CW,
            wasCrit: zR,
            distance: AW
          } = MW;
          WW(wW) && RW({
            damage: CW,
            wasCrit: zR,
            distance: AW
          })
        }))
      }
    }

    function BW(WW) {
      return (0, zR.b)("chat", (RW => {
        let {
          serverChatMsgId: MW,
          content: wW,
          chatterEId: CW
        } = RW;
        return {
          serverChatMsgId: null !== MW && void 0 !== MW ? MW : null,
          content: wW,
          author: CW ? WW(CW) : null
        }
      }))
    }
    class tR {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const MW = this.shown;
        return WW !== this.needed && (this.needed = WW, this.neededSince = RW, null === WW && (this.shown = null)), this.shown !== this.needed && RW - this.neededSince > 200 && (this.shown = this.needed), this.shown !== MW
      }
    }
  },
  38262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      g: () => AW
    });
    var wW = MW(2415);
    let CW = null,
      zR = null;

    function AW() {
      return zR ??= MW.e(188).then((() => MW(34645))).then((WW => {
        let {
          ITEM_SPRITES: RW,
          ITEM_SPRITES_WITHOUT_FILE: MW,
          ITEM_FILES_WITHOUT_SPRITE: zR
        } = WW;
        CW = function(WW, RW, MW) {
          const CW = new Set,
            zR = (0, wW.y)(RW);
          let AW = 0;
          for (const [wW, bR] of WW.entries()) wW === zR[AW] ? AW++ : CW.add(bR);
          if ("" !== MW)
            for (const bR of MW.split(wW.s)) CW.add(bR);
          return CW
        }(RW.split(wW.s), MW, zR)
      }), (WW => {
        throw zR = null, WW
      })), zR
    }

    function bR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = CW) || void 0 === MW ? void 0 : MW.has(WW)) && void 0 !== RW && RW
    }
  },
  34995: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      h: () => CW
    });
    let wW = () => null;

    function CW(WW) {
      wW = WW
    }

    function zR(WW, RW) {
      return wW(WW, RW)
    }
  },
  37351: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      return Math.hypot(WW[0] - RW[0], WW[1] - RW[1], WW[2] - RW[2]) < MW + .5
    }
    MW.d(RW, {
      b: () => wW
    })
  },
  37016: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW
    });
    var wW = MW(1053),
      CW = MW(1379),
      zR = MW(27),
      AW = MW(1135),
      bR = MW(1148),
      yR = MW(1330),
      NW = MW(34706);

    function eW(WW) {
      let {
        HWW: RW,
        DWW: MW
      } = WW;
      const eW = null !== RW && void 0 !== RW ? RW : (0, bR.b)().gameNameWithVariation;
      (0, wW.C)(eW) && ((0, NW.o)(), (0, AW.ab)((() => {
        console.log("Received matchmaking order from game server to game", RW), (0, zR.f)("inGameReplay"), (0, yR.navigatePreserveSearch)((0, CW.d)(eW, null !== MW && void 0 !== MW ? MW : void 0))
      }), "video_start"))
    }
  },
  37153: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(33),
      CW = MW(1578);

    function zR(WW) {
      var RW, MW;
      const zR = (0, CW.k)(null !== (RW = null === (MW = CW.q.toggleFreeCam) || void 0 === MW ? void 0 : MW[0]) && void 0 !== RW ? RW : null);
      wW.k.Sz("showBottomMessage", {
        message: `Free Camera ${WW?"Enabled":"Disabled"}${zR?` - Press ${zR} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37009: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      h: () => bR,
      j: () => yR
    });
    var wW = MW(33),
      CW = MW(1166);
    const zR = new Map;

    function AW(WW, RW) {
      wW.k.Sz("newUiRequest", {
        id: WW,
        clientParameters: RW
      }, !0)
    }

    function bR(WW) {
      wW.k.Sz("removeUiRequest", WW, !0);
      const RW = zR.get(WW);
      RW && (RW.tearDownNotification(), zR.delete(WW))
    }

    function yR(WW, RW, MW) {
      const wW = CW.NotificationProvider.showPromptPopup({
        title: RW,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      zR.set(WW, wW), wW.getResult().then((RW => {
        zR.delete(WW), "notificationTornDown" !== RW && MW(RW)
      }))
    }
  },
  37369: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => BW,
      f: () => tR
    });
    var wW = MW(173),
      CW = MW(37377);
    const zR = 20;

    function AW(WW) {
      return WW.map(Math.floor).join(" ")
    }

    function bR(WW) {
      return null === WW.amount || 1 === WW.amount ? WW.name : `${WW.amount} ${WW.name}`
    }
    var yR = MW(37385),
      NW = MW(1558),
      eW = MW(1148);

    function BW(WW, RW) {
      if (!WW) return yR.d;
      const MW = WW.playerFeet();
      if (!MW) return "The player isn't in the world yet, so no blocks can be seen.";
      const zR = wW.c.dw,
        AW = (0, CW.j)(null !== RW && void 0 !== RW ? RW : MW, zR),
        bR = WW.chunkBlocks(AW);
      return bR ? (0, CW.c)(AW, zR, ((RW, MW, wW) => {
        const CW = bR(RW, MW, wW);
        return 0 === CW ? null : WW.blockName(CW).split("|")[0]
      }), MW) : `The chunk from ${AW.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${MW.map(Math.floor).join(" ")}.`
    }

    function tR(WW) {
      var RW, MW, wW;
      if (!WW) return yR.f;
      const CW = WW.playerFeet();
      if (!CW) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: BW,
        heldSlot: tR
      } = WW.inventory();
      return function(WW) {
        const RW = [];
        null !== WW.game && RW.push(`Game: ${WW.game}.`);
        const MW = null === WW.health ? "" : `, health ${Math.round(WW.health)}${null===WW.maxHealth?"":` of ${Math.round(WW.maxHealth)}`}`;
        RW.push(`The player (the creator) stands at ${AW(WW.position)}${MW}, ${WW.creative?"in":"not in"} creative mode.`);
        const wW = WW.slots[WW.heldSlot];
        RW.push(wW ? `Holding (slot ${WW.heldSlot}): ${bR(wW)}.` : `Holding nothing (slot ${WW.heldSlot} is empty).`);
        const CW = WW.slots.flatMap(((WW, RW) => WW ? [`slot ${RW}: ${bR(WW)}`] : []));
        RW.push(CW.length > 0 ? `Inventory: ${CW.join(", ")}.` : "Inventory: empty.");
        const yR = RW => Math.hypot(RW.position[0] - WW.position[0], RW.position[1] - WW.position[1], RW.position[2] - WW.position[2]),
          NW = [...WW.nearby].sort(((WW, RW) => yR(WW) - yR(RW)));
        if (0 === NW.length) RW.push("No other players or mobs are near enough to see.");
        else {
          RW.push("Near them, nearest first:");
          for (const WW of NW.slice(0, zR)) {
            const MW = "player" === WW.kind ? `player "${WW.name||"?"}"` : WW.name && WW.name !== WW.kind ? `${WW.kind} "${WW.name}"` : WW.kind,
              wW = Math.round(yR(WW));
            RW.push(`- ${MW} at ${AW(WW.position)}, ${wW} block${1===wW?"":"s"} away`)
          }
          NW.length > zR && RW.push(`- and ${NW.length-zR} more further away`)
        }
        return WW.droppedItems > 0 && RW.push(`${WW.droppedItems} dropped item${1===WW.droppedItems?" is":"s are"} on the ground nearby.`), RW.join("\n")
      }({
        game: null !== (RW = (0, eW.b)().gameNameWithVariation) && void 0 !== RW ? RW : null,
        position: CW,
        health: null !== (MW = NW.d.get("_health")) && void 0 !== MW ? MW : null,
        maxHealth: null !== (wW = NW.d.get("_totalMaxHealth")) && void 0 !== wW ? wW : null,
        creative: !0 === NW.d.get("creative"),
        heldSlot: tR,
        slots: BW,
        nearby: WW.nearby(),
        droppedItems: WW.droppedItems()
      })
    }
  },
  37022: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      e: () => yR,
      i: () => NW
    });
    var wW = MW(1053),
      CW = MW(860),
      zR = MW(35047),
      AW = MW(33);

    function bR(WW) {
      let {
        lobbyName: RW,
        gameNameWithVariation: MW
      } = WW;
      return !(0, wW.F)(RW) || null !== MW && (MW.startsWith("testGym") || (0, CW.k)(MW))
    }

    function yR(WW) {
      return WW.yV === zR.d.Leave || WW.yV === zR.d.Cursor
    }

    function NW(WW) {
      AW.k.Sz("codeCollab", {
        type: WW.yV,
        docKey: WW.tV,
        version: WW.iV,
        editorCount: WW.ND,
        peers: WW.eD,
        updates: WW.lE,
        playerId: WW.lD,
        playerName: WW.fD,
        colour: WW.dD,
        anchor: WW.FE,
        head: WW.QE,
        existingCursors: WW.pD,
        files: WW.mq,
        engineSettings: WW.KD
      })
    }
  },
  38247: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadIcons: () => jR,
      setIconFileOverrides: () => kR,
      wasmIconLookups: () => mR,
      wasmIconQueries: () => VW
    });
    var wW = MW(3536),
      CW = MW(3507),
      zR = MW(38252),
      AW = MW(1553),
      bR = MW(3520),
      yR = MW(1544),
      NW = MW(2410),
      eW = MW(2415);
    let BW = null,
      tR = null;

    function TW(WW) {
      const RW = WW.startsWith(eW.k),
        [MW, wW = MW, CW = MW] = (RW ? WW.slice(eW.k.length) : WW).split(eW.h);
      return {
        top: MW,
        left: wW,
        right: CW,
        half: RW
      }
    }

    function gR(WW) {
      const RW = null === BW ? void 0 : (0, NW.e)(WW),
        MW = void 0 === RW ? 0 : BW.codes[RW];
      return 0 === MW ? void 0 : BW.pool[MW - 1]
    }
    var iR = MW(2405),
      YW = MW(3491),
      JW = MW(3532),
      PW = MW(38256);
    const IW = "item:";
    let oW = null,
      lW = null,
      FW = null,
      fW = null,
      QW = null,
      rR = !1,
      cR = null,
      XW = 0;

    function jR() {
      return rR || (rR = !0, (0, JW.j)().then((WW => {
        WW && (0, AW.e)()
      }))), fW ??= Promise.all([(0, iR.d)(), (tR ??= MW.e(1).then((() => MW(40056))).then((WW => {
        let {
          BLOCK_FACE_RUNS: RW,
          BLOCK_FACES: MW,
          MAX_FACE_ITEM_ID: wW
        } = WW;
        BW = {
          codes: (0, eW.z)(RW, wW + 1),
          pool: MW.split(eW.s).map(TW)
        }
      }), (WW => {
        throw tR = null, WW
      })), tR), (0, PW.e)(), MW.e(194).then((() => MW(34920)))]).then((WW => {
        let [, , RW, MW] = WW;
        RW.loadBundledTextures(), oW = RW, lW = MW, (0, AW.e)()
      }), (WW => {
        fW = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", WW)
      })), fW
    }

    function kR(WW) {
      cR = WW, XW++, (0, AW.e)()
    }

    function aR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = cR) || void 0 === MW ? void 0 : MW.itemSprite(WW)) && void 0 !== RW ? RW : oW.itemSpriteUrl(WW)
    }

    function sW(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = cR) || void 0 === MW ? void 0 : MW.blockTexture(WW)) && void 0 !== RW ? RW : oW.blockTextureUrl(WW)
    }

    function dW() {
      return QW ??= MW.e(182).then((() => MW(32670))).then((WW => {
        FW = {
          rotated: WW.rotatedBlockTextures,
          animated: WW.animatedBlockTextures
        }, (0, AW.e)()
      }), (WW => {
        QW = null, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", WW)
      })), QW
    }

    function pW(WW) {
      var RW;
      return null !== (RW = (0, iR.c)(WW)) && void 0 !== RW ? RW : WW
    }

    function hW(WW) {
      var RW, MW;
      const wW = sW(WW);
      return null !== wW ? wW : null === FW ? (dW(), "") : null !== (RW = null !== (MW = FW.rotated[WW]) && void 0 !== MW ? MW : FW.animated[WW]) && void 0 !== RW ? RW : oW.notFoundUrl()
    }

    function UW(WW) {
      return void 0 !== (0, NW.e)(WW) ? WW : /^[1-9][0-9]*$/.test(WW) ? (0, NW.g)(Number(WW)) : void 0
    }

    function EW(WW) {
      var RW;
      if (WW.startsWith(IW)) {
        var MW;
        const RW = (0, iR.c)(WW.slice(5));
        return null !== (MW = void 0 === RW ? null : aR(RW)) && void 0 !== MW ? MW : oW.notFoundUrl()
      }
      return null !== (RW = oW.particleUrl(WW)) && void 0 !== RW ? RW : oW.notFoundUrl()
    }
    const VW = {
        async blockIcon(WW) {
          var RW;
          let {
            name: MW,
            size: wW,
            lineWidth: CW
          } = WW;
          await jR();
          const zR = null !== (RW = UW(MW)) && void 0 !== RW ? RW : MW,
            AW = (0, JW.e)(zR, wW, CW);
          if (null !== AW) return AW;
          const yR = gR(zR),
            eW = (0, NW.e)(zR),
            BW = void 0 === eW || null === lW ? void 0 : lW.itemTypeNameOf(eW);
          if (null === oW || void 0 === yR) return "";
          if ([yR.top, yR.left, yR.right].some((WW => null === sW(WW))) && null === FW && (await dW(), null === FW)) return "";
          const tR = {
              top: hW(yR.top),
              left: hW(yR.left),
              right: hW(yR.right),
              itemType: (0, bR.d)(BW) ? BW : "CubeBlock"
            },
            TW = 0 === XW ? zR : `${zR}#${XW}`;
          return (await (0, YW.d)()).drawBlockIconUrl(TW, wW, CW, (() => tR))
        }
      },
      mR = {
        itemIcon: function(WW) {
          var RW, MW;
          if (null === oW) return jR(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
          if ((0, CW.j)(WW)) return {
            kind: "icon",
            url: null !== (MW = oW.ingameIconUrl(WW)) && void 0 !== MW ? MW : oW.notFoundUrl()
          };
          if (WW.startsWith(CW.d)) return {
            kind: "icon",
            url: EW(WW.slice(CW.d.length))
          };
          if (0 === (0, NW.k)()) return (0, zR.d)(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
          const AW = null !== (RW = UW(WW)) && void 0 !== RW ? RW : WW,
            bR = (0, NW.e)(AW),
            eW = void 0 === bR ? void 0 : lW.itemTypeNameOf(bR),
            BW = gR(AW);
          if (void 0 !== BW) return "StairsBlock" === eW ? {
            kind: "stairs"
          } : {
            kind: "block",
            top: hW(BW.top),
            left: hW(BW.left),
            right: hW(BW.right),
            half: BW.half
          };
          const tR = function(WW) {
            var RW;
            return null !== (RW = aR(pW(WW))) && void 0 !== RW ? RW : oW.notFoundUrl()
          }(AW);
          if ((0, JW.g)(AW) && ! function(WW) {
              return null !== cR && (null !== cR.itemSprite(pW(WW)) || null !== cR.model(WW))
            }(AW)) return {
            kind: "model",
            url: tR
          };
          if ("Gun" === eW) return {
            kind: "gun",
            url: tR
          };
          if (void 0 !== bR && "GrayscaleArmour" === lW.itemTypeOf(bR) || Object.hasOwn(wW.b, AW)) {
            var TW;
            const RW = null !== (TW = (0, wW.d)(WW)) && void 0 !== TW ? TW : (0, wW.d)(AW);
            if (RW) return {
              kind: "item",
              url: tR,
              tint: RW
            }
          }
          return {
            kind: "item",
            url: tR
          }
        },
        hasIcon: function(WW) {
          return void 0 !== UW(WW) || (0, CW.j)(WW) || WW.startsWith(CW.d)
        },
        isItemName: function(WW) {
          return void 0 !== UW(WW)
        }
      }
  },
  38126: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      attachPlayGameSources: () => zC,
      playGameSources: () => Cw
    });
    var wW = MW(1544),
      CW = MW(38134),
      zR = MW(3756),
      AW = MW(38136),
      bR = MW(38141),
      yR = MW(37359),
      NW = MW(33),
      eW = MW(3775),
      BW = MW(3773),
      tR = MW(38143),
      TW = MW(38149);

    function gR() {
      var WW;
      const RW = null === (WW = (0, AW.i)()) || void 0 === WW ? void 0 : WW.api.localId;
      return void 0 === RW || RW === TW.id ? null : String(RW)
    }

    function iR(WW) {
      const RW = (0, AW.i)();
      if (null !== RW) return WW(RW);
      let MW = null;
      const wW = (0, zR.s)((() => {
        const RW = (0, AW.i)();
        null !== RW && null === MW && (wW(), MW = WW(RW))
      }));
      return () => {
        var WW;
        wW(), null === (WW = MW) || void 0 === WW || WW()
      }
    }

    function YW(WW, RW, MW) {
      return {
        current: () => {
          const MW = (0, AW.i)();
          return null === MW ? RW : WW(MW)()
        },
        watch: RW => iR((wW => {
          const CW = WW(wW);
          let zR = CW();
          return RW(zR), MW((() => {
            const WW = CW();
            WW !== zR && (zR = WW, RW(WW))
          }))
        }))
      }
    }
    var JW = MW(38155),
      PW = MW(38178);
    (0, PW.g)(eW.Kb.Chat, (WW => {
      if (WW.payloadKind !== BW.Qb.Msgpack) return;
      const RW = function(WW) {
        if (null === WW || "object" !== typeof WW || !("content" in WW)) return null;
        const {
          chatMsgId: RW,
          content: MW,
          chatterEId: wW
        } = WW;
        return {
          serverChatMsgId: null !== RW && void 0 !== RW ? RW : void 0,
          content: MW,
          chatterEId: void 0 === wW || null === wW ? void 0 : String(wW)
        }
      }((0, tR.e)(WW.payload));
      null !== RW && NW.k.Sz("chat", RW, !0)
    }));
    const IW = {
        chatReceived: (0, yR.h)((function(WW) {
          var RW, MW, wW;
          return {
            id: WW,
            name: null !== (RW = JW.g.getName(WW)) && void 0 !== RW ? RW : null,
            local: gR() === WW,
            profileEffect: null !== (MW = null === (wW = (0, JW.i)(WW)) || void 0 === wW ? void 0 : wW.profileEffect) && void 0 !== MW ? MW : null
          }
        }))
      },
      oW = {
        sendChatMessage(WW) {
          var RW;
          let {
            PA: MW,
            channelName: wW
          } = WW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.clientApi.sendChat(MW, wW)
        }
      };
    var lW = MW(173),
      FW = MW(1558),
      fW = MW(37351);
    const QW = [0, 0, 0],
      rR = {
        codeBlockClickable(WW) {
          var RW;
          const MW = (0, AW.i)();
          if (null === MW || void 0 === MW || !MW.isSessionLive) return !1;
          const wW = MW.api;
          if (0 !== (TW.r.playerFlags(wW.apiView, 0) & TW.Ld.Crouching)) return !1;
          const CW = wW.queries.directorEntity(wW.localId) >= TW.Bb.BYTES ? wW.memoryData(wW.scratch(), TW.Bb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === CW) return !1;
          for (let zR = 0; zR < 3; zR++) QW[zR] = TW.Bb.feet(CW, 0, zR);
          return QW[1] += TW.Bb.eyeHeight(CW, 0), (0, fW.b)(QW, WW, null !== (RW = FW.d.get("blockReach")) && void 0 !== RW ? RW : lW.c.xI)
        }
      },
      cR = {
        clickCodeBlock(WW) {
          var RW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.clickCodeBlock(WW)
        }
      };
    var XW = MW(38188),
      jR = MW(38160),
      kR = MW(38195),
      aR = MW(38164);

    function sW(WW) {
      var RW, MW;
      const wW = (0, AW.i)();
      return wW ? null === (RW = (0, XW.b)(wW.api, WW[0], WW[1], WW[2])) || void 0 === RW || null === (MW = RW.persisted) || void 0 === MW ? void 0 : MW.shared : void 0
    }

    function dW(WW) {
      return `${WW[0]},${WW[1]},${WW[2]}`
    }
    const pW = new Map;
    let hW = null,
      UW = 0;

    function EW() {
      return UW
    }

    function VW(WW) {
      const RW = null !== hW && hW.key === dW(WW.pos) ? hW.type : null;
      if (null === RW) return WW;
      let MW = null;
      if ("Iron" === RW) {
        const {
          cachedPasskey: RW,
          ...wW
        } = mR(WW.pos);
        MW = {
          Wy: null !== RW && void 0 !== RW ? RW : [0, 0, 0, 0],
          ...wW
        }
      }
      return {
        ...WW,
        type: RW,
        ironChest: MW
      }
    }

    function mR(WW) {
      const RW = sW(WW),
        MW = null === RW || void 0 === RW ? void 0 : RW.ownerDbId,
        wW = function(WW) {
          var RW;
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sW(WW);
          const wW = dW(WW),
            CW = pW.get(wW);
          return CW ? CW.lastOpened < (null !== (RW = null === MW || void 0 === MW ? void 0 : MW.passkeyLastUpdated) && void 0 !== RW ? RW : 0) ? (pW.delete(wW), null) : [...CW.Wy] : null
        }(WW, RW);
      return void 0 === MW ? {
        cachedPasskey: wW
      } : {
        ownerDbId: MW,
        cachedPasskey: wW
      }
    }(0, PW.g)(jR.c, (WW => {
      const RW = (0, aR.f)(jR.c, WW);
      if (!(0, aR.c)(RW) || RW.iWW) return;
      if (UW++, !RW.bWW || null === RW.bV) return void(hW = null);
      const MW = dW(RW.bV);
      hW = {
        key: MW,
        type: RW.tWW
      }, null !== RW.gWW && pW.set(MW, {
        Wy: [...RW.gWW],
        lastOpened: Date.now()
      })
    })), (0, PW.e)((() => {
      pW.clear(), hW = null, UW++
    }));
    const xR = {
        boardEditRequested: {
          watch: WW => (0, NW.m)("EditBoard", (RW => {
            let {
              pos: MW
            } = RW;
            if (null === MW) return void WW(null);
            const wW = (0, AW.i)(),
              CW = (0, AW.s)();
            wW && CW && WW(CW.readBoardToEdit(wW.api, wW.chunks, MW))
          }))
        },
        ironChestOpenRequested: {
          watch: WW => (0, NW.m)("OpenIronChest", (RW => {
            let {
              pos: MW
            } = RW;
            WW(function(WW) {
              return {
                pos: WW,
                ...mR(WW)
              }
            }(MW))
          }))
        }
      },
      vR = {
        writeOnBoard(WW) {
          var RW;
          let {
            pos: MW,
            text: wW,
            textSize: CW
          } = WW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.UpdateBoard, (0, kR.M)({
            hG: MW,
            nG: wW,
            qL: CW
          }))
        },
        writeBook(WW) {
          var RW;
          let {
            pages: MW,
            title: wW,
            published: CW
          } = WW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.UpdateBook, (0, kR.N)({
            bK: MW,
            Tv: wW,
            iK: CW
          }))
        },
        writeNameTag(WW) {
          var RW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.UpdateNameTag, WW)
        },
        setCustomLobbyBlock(WW) {
          let {
            pos: RW,
            blockName: MW
          } = WW;
          const wW = (0, AW.s)(),
            CW = (0, AW.i)();
          wW && CW && CW.send(kR.c.SetCustomLobbyBlock, (0, kR.z)({
            Iz: wW.blockIdOf(MW),
            Jm: RW
          }))
        }
      };
    var KW = MW(38202),
      uW = MW(860),
      OW = MW(37064),
      nW = MW(3748);

    function GW(WW) {
      if (null === WW) return null;
      const RW = [];
      for (const MW of WW) {
        const WW = Object.keys(MW)[0];
        if ("PU" === WW) {
          const {
            str: WW,
            style: wW,
            clickableUrl: CW
          } = MW.PU, zR = Object.keys(WW)[0], AW = WW[zR];
          "string" !== zR && "styledEntityName" !== zR && "styledTranslatedText" !== zR || RW.push({
            str: AW,
            style: wW,
            clickableUrl: CW
          })
        } else RW.push(MW[WW])
      }
      return RW
    }
    const LW = {
      screenPos(WW) {
        var RW, MW;
        return null !== (RW = null === (MW = (0, AW.i)()) || void 0 === MW ? void 0 : MW.renderFrame.projectWorldPosToScreenPos(WW)) && void 0 !== RW ? RW : {
          x: 0,
          y: 0
        }
      }
    };
    let HW = !1;

    function DW() {
      HW || (HW = !0, (0, PW.g)(eW.Kb.ProgressBarUpdate, (WW => {
        const RW = (0, aR.h)(WW);
        (0, aR.c)(RW) && NW.k.Sz("progressBarUpdate", RW, !0)
      })), (0, PW.g)(jR.u, (WW => {
        const RW = (0, aR.f)(jR.u, WW);
        RW && NW.k.Sz("middleScreenBarInitiate", {
          duration: RW.hq,
          xZ: RW.xZ,
          horizBarRemOffset: RW.uq
        }, !0)
      })), (0, PW.g)(eW.Kb.RemoveMiddleScreenBar, (() => {
        NW.k.Sz("middleScreenBarRemove")
      })), (0, PW.g)(jR.cb, (WW => {
        const RW = (0, aR.f)(jR.cb, WW);
        if (RW) {
          var MW;
          const WW = RW.pE ? null === (MW = (0, AW.i)()) || void 0 === MW ? void 0 : MW.renderFrame.projectDirectionToScreenPos(RW.pE) : void 0;
          NW.k.Sz("sendHitmarker", {
            zWW: RW.zWW,
            screenPos: WW
          }, !0)
        }
      })), (0, PW.g)(jR.gb, (WW => {
        const RW = (0, aR.f)(jR.gb, WW);
        if (RW) {
          const {
            id: WW,
            position: MW,
            style: wW,
            text: CW,
            uZ: zR
          } = RW;
          NW.k.Sz("setDirectionArrow", {
            id: WW,
            position: MW,
            style: wW,
            text: GW(CW),
            uZ: zR
          }, !0)
        }
      })), (0, PW.g)(jR.e, (WW => {
        const RW = (0, aR.f)(jR.e, WW);
        RW && NW.k.Sz("clearDirectionArrow", {
          id: RW.id
        }, !0)
      })), (0, PW.g)(jR.o, (WW => {
        const RW = (0, aR.f)(jR.o, WW);
        RW && NW.k.Sz("flyingMiddleMessage", {
          content: GW(RW.W9),
          N9: RW.N9,
          J9: RW.J9
        }, !0)
      })), (0, PW.g)(eW.Kb.WorldVariation, (WW => {
        const RW = (0, aR.h)(WW);
        if ("string" === typeof RW) {
          const WW = RW === uW.g ? null : {
            message: `Currently loaded as variation: ${RW}`,
            type: "Warning"
          };
          NW.k.Sz("showPermanentBottomMessage", WW, !0)
        }
      })), (0, PW.g)(jR.N, (WW => {
        const RW = (0, aR.f)(jR.N, WW);
        RW && function(WW, RW) {
          const {
            type: MW,
            params: wW
          } = (0, OW.i)(RW), CW = {
            ...wW
          };
          for (const zR of OW.e) CW[zR] && (CW[zR] = GW(CW[zR]));
          nW.e.queueQTE(WW, MW, CW).getResult().then((RW => {
            var MW;
            "boolean" === typeof RW && (null === (MW = (0, AW.i)()) || void 0 === MW || MW.send(kR.c.QteResponse, {
              qteId: WW,
              qteResponse: RW
            }))
          }))
        }(RW.id, RW.e_)
      })), (0, PW.g)(jR.Y, (WW => {
        const RW = (0, aR.f)(jR.Y, WW);
        "number" === typeof RW && nW.e.cancelQTE(RW)
      })), (0, PW.e)((() => {
        nW.e.reset(), NW.k.Sz("showPermanentBottomMessage", null, !0)
      })), (0, PW.g)(eW.Kb.EditItemCraftingRecipes, (WW => {
        const RW = (0, aR.h)(WW);
        (0, aR.c)(RW) && NW.k.Sz("craftingRecipesEdited", {
          itemName: RW.craftingRecipeItemName,
          recipesForItem: RW.recipesForItem
        })
      })), (0, PW.g)(jR.X, (WW => {
        const RW = (0, aR.f)(jR.X, WW);
        RW && NW.k.Sz("craftingRecipesEdited", {
          itemName: RW.aZ,
          recipesForItem: []
        })
      })))
    }
    var qR = MW(37153);
    let ZW = !1,
      SW = !1;

    function WR() {
      const WW = (0, AW.i)();
      if (null === WW || void 0 === WW || !WW.isSessionLive) return void(ZW = !1);
      const RW = 0 !== (TW.r.playerFlags(WW.api.apiView, 0) & TW.Ld.FreeCam);
      RW !== ZW && (ZW = RW, (0, qR.b)(RW))
    }
    var RR = MW(284),
      MR = MW(35196),
      wR = MW(1568);
    var CR = MW(38211),
      zM = MW(38215);

    function AR() {
      var WW, RW;
      return null !== (WW = null === (RW = (0, AW.i)()) || void 0 === RW ? void 0 : RW.itemBridgeSources) && void 0 !== WW ? WW : zM.c
    }

    function bM(WW) {
      return {
        current: () => AR().states[WW].current(),
        watch: RW => iR((MW => {
          const wW = MW.itemBridgeSources.states[WW];
          return RW(wW.current()), wW.watch(RW)
        }))
      }
    }

    function yM(WW) {
      return {
        watch: RW => iR((MW => MW.itemBridgeSources.events[WW].watch(RW)))
      }
    }
    const NR = {
      states: {
        inventory: bM("inventory"),
        hotbar: bM("hotbar"),
        crafting: bM("crafting"),
        heldItemAim: bM("heldItemAim")
      },
      events: {
        hotbarSlotRequested: yM("hotbarSlotRequested"),
        hotbarScrolled: yM("hotbarScrolled"),
        numberKeyPressed: yM("numberKeyPressed"),
        inventoryDropRequested: yM("inventoryDropRequested"),
        chestToggled: yM("chestToggled"),
        chestRefreshed: yM("chestRefreshed"),
        inventorySynced: yM("inventorySynced"),
        enchantingTableOpened: yM("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: WW => AR().commands.selectHotbarSlot(WW),
        removeInventoryItem: WW => AR().commands.removeInventoryItem(WW),
        swapInventorySlots: WW => AR().commands.swapInventorySlots(WW),
        moveInventoryItem: WW => AR().commands.moveInventoryItem(WW),
        quickMoveInventoryItem: WW => AR().commands.quickMoveInventoryItem(WW),
        closeChest: WW => AR().commands.closeChest(WW),
        focusCrafting: WW => AR().commands.focusCrafting(WW),
        craftRecipe: WW => AR().commands.craftRecipe(WW),
        salvageItem: WW => AR().commands.salvageItem(WW),
        enchantItem: WW => AR().commands.enchantItem(WW)
      },
      queries: {
        enchantingOffer: WW => AR().queries.enchantingOffer(WW)
      }
    };
    const eR = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let BR = !1;
    class tM {
      constructor() {
        this.target = eR, this.Iz = TW.ld, this.optionName = null, this.pickaxe = new yR.e
      }
      read(WW) {
        var RW, MW;
        const wW = TW.r.targetBlockId(WW.api.apiView, 0);
        wW !== this.Iz && (this.Iz = wW, this.optionName = wW === TW.ld ? null : `${WW.tables.getMetaInfo(wW).rootName}CrosshairText`);
        const CW = null === this.optionName ? null : null !== (RW = WW.tables.getClientOption(this.optionName)) && void 0 !== RW ? RW : null;
        this.pickaxe.update(function(WW, RW) {
          var MW, wW, CW;
          if (0 === (TW.r.playerFlags(WW.api.apiView, 0) & TW.Ld.Breaking) || RW === TW.ld || 0 === RW) return null;
          const {
            tables: zR
          } = WW;
          if (!0 === zR.getClientOption("creative")) return null;
          const AW = zR.nameOfId(RW),
            bR = null === (MW = WW.items.mM()) || void 0 === MW ? void 0 : MW.name,
            yR = null !== (wW = zR.getItemStat(AW, "harvestLevel")) && void 0 !== wW ? wW : 0;
          return (0, RR.Dc)({
            blockHarvestType: zR.getDefaultItemStat(AW, "harvestType"),
            blockHarvestLevel: zR.getDefaultItemStat(AW, "harvestLevel"),
            harvestLevel: yR,
            heldToolType: void 0 === bR ? void 0 : zR.getDefaultItemStat(bR, "harvests"),
            heldToolLevel: void 0 === bR ? void 0 : zR.getDefaultItemStat(bR, "level")
          }) && null !== (CW = MR.q[yR]) && void 0 !== CW ? CW : null
        }(WW, wW)), WW.watchPromptPick(BR);
        const zR = WW.promptEntity,
          AW = null === zR ? null : {
            label: null !== (MW = (0, CR.d)(zR, "interactionPrompt")) && void 0 !== MW ? MW : null
          };
        return this.target = (0, wR.p)(this.target, {
          interactPrompt: AW,
          blockText: CW,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let TR = null;
    const gM = {
      current: () => {
        var WW, RW;
        return null !== (WW = null === (RW = TR) || void 0 === RW ? void 0 : RW.target) && void 0 !== WW ? WW : eR
      },
      watch: WW => {
        const RW = new tM;
        TR = RW;
        const MW = iR((MW => {
          let wW = RW.read(MW);
          WW(wW);
          const CW = (0, zR.t)((() => {
            const CW = RW.read(MW);
            CW !== wW && (wW = CW, WW(CW))
          }));
          return () => {
            CW(), MW.watchPromptPick(!1)
          }
        }));
        return () => {
          MW(), TR === RW && (TR = null)
        }
      }
    };
    let iM = 0,
      YR = 0;
    const JR = {
        health: yR.k,
        aura: yR.f,
        hotbar: NR.states.hotbar,
        heldItemAim: NR.states.heldItemAim,
        crouching: YW((WW => function(WW) {
          const RW = () => 0 !== (TW.r.playerFlags(WW.apiView, 0) & TW.Ld.Crouching);
          return {
            current: RW,
            watch(WW) {
              let MW = RW();
              return (0, zR.s)((() => {
                const wW = RW();
                wW !== MW && (MW = wW, WW(wW))
              }))
            }
          }
        }(WW.api).current), !1, (WW => (0, zR.s)(WW))),
        flight: YW((WW => () => function(WW) {
          const RW = TW.r.playerFlags(WW.apiView, 0);
          return (0, yR.j)(0 !== (RW & TW.Ld.CanFly), 0 !== (RW & TW.Ld.Flying))
        }(WW.api)), (0, yR.j)(!1, !1), (WW => (0, zR.s)(WW))),
        crosshairTarget: gM
      },
      PR = {
        hotbarSlotRequested: NR.events.hotbarSlotRequested,
        hotbarScrolled: NR.events.hotbarScrolled,
        numberKeyPressed: NR.events.numberKeyPressed,
        shotDamageToShow: (0, yR.n)((WW => !0 === (0, CR.d)(WW, "showDamageAmounts")))
      },
      IR = {
        selectHotbarSlot: NR.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: WW => {
          BR = "off" !== WW
        }
      },
      oR = {
        momentumFrac: function() {
          var WW, RW, MW;
          const wW = (0, AW.i)(),
            CW = performance.now(),
            zR = null === wW || void 0 === wW || null === (WW = wW.items.mM()) || void 0 === WW || null === (RW = WW.attributes) || void 0 === RW || null === (MW = RW.customAttributes) || void 0 === MW ? void 0 : MW.enchantments;
          return iM = null !== wW && null !== zR && void 0 !== zR && zR.Momentum ? 0 !== (TW.r.playerFlags(wW.api.apiView, 0) & TW.Ld.Breaking) ? Math.max(0, TW.r.momentumFrac(wW.api.apiView, 0)) : Math.max(0, iM - (CW - YR) / 1500) : 0, YR = CW, iM
        }
      };
    var lR = MW(37200),
      FR = MW(1053),
      fR = MW(2410),
      QR = MW(34995),
      rM = MW(1148),
      cM = MW(3790),
      XR = MW(1939);
    let jM = null;

    function kM(WW) {
      const RW = new Map,
        MW = MW => {
          if ("string" !== typeof MW) return;
          let wW = RW.get(MW);
          return void 0 === wW && (wW = WW(MW), void 0 !== wW && RW.set(MW, wW)), wW
        };
      return new Proxy({}, {
        get: (WW, RW) => MW(RW),
        has: (WW, RW) => void 0 !== MW(RW)
      })
    }

    function aM(WW) {
      const RW = (0, fR.e)(WW);
      return void 0 !== RW && (0, fR.g)(RW) === WW
    }

    function sR(WW) {
      var RW;
      const MW = null === (RW = (0, AW.i)()) || void 0 === RW ? void 0 : RW.tables;
      if (void 0 === MW || !aM(WW)) return;
      const wW = {
          displayName: MW.getDisplayName(WW)
        },
        CW = MW.getItemStat(WW, "description");
      void 0 !== CW && null !== CW && (wW.description = CW);
      const {
        rootName: zR
      } = MW.getMetaInfo(WW);
      zR !== WW && (wW.rootName = zR);
      const bR = MW.getItemStat(WW, "armourReduction");
      return void 0 !== bR && null !== bR && (wW.armourReduction = bR), wW
    }(0, AW.v)((WW => {
      jM = WW
    }));
    const dR = (0, wR.g)("DisplayName", "Description");

    function pR() {
      return Boolean(FW.d.get("useInventory") && FW.d.get("useFullInventory"))
    }
    let hR = null;
    const UR = {
        inventory: function() {
          const WW = NR.states.inventory;
          let RW = null;
          const MW = WW => {
            var MW;
            return null === WW.chest ? WW : ((null === (MW = RW) || void 0 === MW ? void 0 : MW.from) === WW && RW.chestVersion === EW() || (RW = {
              from: WW,
              chestVersion: EW(),
              view: {
                ...WW,
                chest: VW(WW.chest)
              }
            }), RW.view)
          };
          return {
            current: () => MW(WW.current()),
            watch: RW => WW.watch((WW => {
              RW(MW(WW))
            }))
          }
        }(),
        crafting: NR.states.crafting,
        stationItems: {
          current() {
            var WW;
            return (null === (WW = hR) || void 0 === WW ? void 0 : WW.namesVersion) !== (0, fR.k)() && (hR = {
              namesVersion: (0, fR.k)(),
              items: {
                enchantable: kM((WW => {
                  const RW = (0, fR.e)(WW);
                  return void 0 !== RW && null !== jM && jM.enchantmentPerksOf(RW).length > 0 || void 0
                })),
                salvageable: kM((WW => !(!aM(WW) || null === (0, QR.e)(WW)) || void 0))
              }
            }), hR.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let WW = null;
          const RW = () => {
            var RW;
            return (null === (RW = WW) || void 0 === RW ? void 0 : RW.namesVersion) !== (0, fR.k)() && (WW = {
              namesVersion: (0, fR.k)(),
              infos: kM(sR)
            }), WW.infos
          };
          return {
            current: RW,
            watch: MW => (0, wR.t)((wW => {
              wW.some(dR) && (WW = null, MW(RW()))
            }))
          }
        }(),
        creativeVisibility: (0, wR.n)((function() {
          const WW = {};
          for (const zR of null !== (RW = null === (MW = jM) || void 0 === MW ? void 0 : MW.creativeItemIds()) && void 0 !== RW ? RW : []) {
            var RW, MW, wW, CW;
            const AW = (0, fR.g)(zR);
            if (void 0 === AW) continue;
            const bR = null !== (wW = FW.d.get((0, lR.f)(AW, "showInCreativeInven"))) && void 0 !== wW ? wW : null === (CW = jM) || void 0 === CW ? void 0 : CW.showInCreativeInvenOf(zR);
            "boolean" === typeof bR && (WW[AW] = bR)
          }
          return {
            publicLobby: (0, FR.F)((0, rM.b)().lobbyName),
            shownInGame: WW
          }
        }), ["connectedGameChanged"], (0, wR.g)("ShowInCreativeInven")),
        fullInventory: (0, wR.n)(pR, [], (0, wR.k)("useInventory", "useFullInventory"))
      },
      ER = {
        inventoryDropRequested: NR.events.inventoryDropRequested,
        chestToggled: NR.events.chestToggled,
        chestRefreshed: NR.events.chestRefreshed,
        inventorySynced: NR.events.inventorySynced,
        enchantingTableOpened: NR.events.enchantingTableOpened
      },
      VR = {
        removeInventoryItem: NR.commands.removeInventoryItem,
        swapInventorySlots: NR.commands.swapInventorySlots,
        moveInventoryItem: NR.commands.moveInventoryItem,
        quickMoveInventoryItem: NR.commands.quickMoveInventoryItem,
        closeChest: NR.commands.closeChest,
        setInventoryOpen(WW) {
          (0, cM.j)(XR.z.InventoryOpen, WW ? XR.z.InventoryOpen : 0)
        },
        focusCrafting: NR.commands.focusCrafting,
        craftRecipe: NR.commands.craftRecipe,
        salvageItem: NR.commands.salvageItem,
        enchantItem: NR.commands.enchantItem,
        changeIronChestPasskey(WW) {
          var RW;
          let {
            pos: MW,
            Wy: wW
          } = WW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.ChangeIronChestPasskey, (0, kR.f)({
            bV: MW,
            Wy: wW
          }))
        },
        openIronChest(WW) {
          var RW;
          let {
            pos: MW,
            Wy: wW
          } = WW;
          null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.OpenIronChest, (0, kR.v)({
            bV: MW,
            Wy: wW
          }))
        }
      },
      mM = {
        enchantingOffer: NR.queries.enchantingOffer
      };
    var xM = MW(1066),
      vM = MW(27),
      KR = MW(34716),
      uR = MW(7691),
      OR = MW(1459),
      nR = MW(3777);
    let GR = !1;

    function LR(WW) {
      GR = WW
    }

    function HR() {
      "inGame" !== vM.b.get("gameState") || (0, OR.r)() || NW.k.Sz("ctrlCrouchWithoutFullscreen")
    }
    let DR = !1;
    const qM = {
        OpenEmoteWheel: () => {
          LR(!0), DR = !0, queueMicrotask((() => {
            DR && (DR = !1, NW.k.Sz("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          NW.k.Sz("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, KR.b)() || NW.k.Sz("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, KR.b)() || NW.k.Sz("XKeyPressed")
        },
        CtrlCrouch: HR,
        "primary-fire": () => {
          NW.k.Sz("mouseState", {
            hK: xM.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          NW.k.Sz("mouseState", {
            hK: xM.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          NW.k.Sz("mouseState", {
            hK: xM.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      ZR = {
        OpenEmoteWheel: () => {
          LR(!1), DR ? (DR = !1, (0, uR.d)() || NW.k.Sz("requestEmoteWheelHoldOpen")) : NW.k.Sz("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: HR,
        "primary-fire": () => {
          NW.k.Sz("mouseState", {
            hK: xM.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          NW.k.Sz("mouseState", {
            hK: xM.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          NW.k.Sz("mouseState", {
            hK: xM.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let SR = !1;

    function WM() {
      SR || (SR = !0, (0, nR.l)((WW => {
        if ((0, CW.e)()) return;
        const RW = (0, nR.i)(WW) ? "primary-fire" : WW.action;
        var MW;
        if (WW.down) {
          if (0 === (WW.flags & XR.c.Synthetic)) {
            var wW;
            null === (wW = qM[RW]) || void 0 === wW || wW.call(qM)
          }
        } else null === (MW = ZR[RW]) || void 0 === MW || MW.call(ZR)
      })))
    }
    var RM = MW(232),
      MM = MW(116),
      wM = MW(50),
      CM = MW(38223),
      zw = MW(37022);
    let AM = !1;
    const bw = {
      sendCodeCollab(WW) {
        var RW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.CodeCollab, (0, kR.k)(WW), (0, zw.e)(WW))
      }
    };
    let yw = null,
      NM = !1,
      eM = null;

    function BM() {
      return "inGame" === vM.b.get("gameState") && !(0, KR.b)()
    }
    const tw = {
        OpenInventory: WW => {
          (0, OR.w)(WW, "inventory", pR())
        },
        OpenShop: WW => {
          yw && BM() && (0, OR.u)(WW, RM.t.SHOP, !yw.shopIsEmpty(FW.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: WW => {
          BM() && (0, OR.u)(WW, RM.t.LOBBY_LEADERBOARD, !!FW.d.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: WW => {
          var RW;
          const MW = null === (RW = yw) || void 0 === RW ? void 0 : RW.getClientGameMapKey();
          MW ? (0, OR.y)(WW, !0, MW) : (0, OR.w)(WW, "retentionFeatures", !(!FW.d.get("_tasks") && !FW.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: WW => {
          (0, OR.w)(WW, "inviteLink", MM.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: WW => {
          BM() && function(WW) {
            var RW;
            const MW = (0, AW.i)(),
              wW = null !== MW && void 0 !== MW && MW.isSessionLive ? MW.api : null,
              CW = wW ? wW.yX(wW.localId) : null,
              zR = null !== (RW = null === CW || void 0 === CW ? void 0 : CW.map((WW => Math.floor(WW)))) && void 0 !== RW ? RW : null;
            (0, OR.y)(WW, null !== zR && (0, zw.d)((0, rM.b)()), (() => {
              NW.k.Sz("EditLobbyCode", zR)
            }))
          }(WW)
        },
        HideUi: () => {
          NW.k.Sz("showUi", !1)
        }
      },
      TM = {
        HideUi: () => {
          NW.k.Sz("showUi", !0)
        }
      };

    function gw() {
      NM || (NM = !0, MW.e(140).then((() => MW(40037))).then((WW => {
        yw = WW
      }), (WW => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", WW)
      })), (0, CM.y)((WW => {
        WW || !(0, CM.j)() || (0, MM.isMobile)() || !wM.g.getItem("disableFullscreen") || (0, OR.o)() || vM.b.set({
          openEverythingMenuName: RM.t.SETTINGS
        })
      })), (0, nR.l)((WW => {
        let {
          action: RW,
          down: MW,
          press: wW
        } = WW;
        var zR, AW;
        (0, CW.e)() || (MW ? null === (zR = tw[RW]) || void 0 === zR || zR.call(tw, function(WW) {
          var RW;
          if (0 === WW || (null === (RW = eM) || void 0 === RW ? void 0 : RW.press) !== WW) {
            const RW = {
              press: WW,
              event: new Event("inputAction")
            };
            eM = RW, queueMicrotask((() => {
              eM === RW && (eM = null)
            }))
          }
          return eM.event
        }(wW)) : null === (AW = TM[RW]) || void 0 === AW || AW.call(TM))
      })))
    }
    var iw = MW(37e3),
      YM = MW(37016),
      JM = MW(37009);
    const PM = {
      completeTask(WW) {
        var RW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.CompleteTask, (0, kR.l)(WW))
      },
      setServerCookie(WW) {
        var RW;
        let {
          key: MW,
          value: wW
        } = WW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.GeneralCookieSet, (0, kR.p)({
          HV: MW,
          qm: wW
        }))
      },
      answerUiRequest(WW) {
        var RW;
        let {
          id: MW,
          Qr: wW
        } = WW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.UiRequestResp, (0, kR.K)({
          mp: MW,
          Qp: wW,
          Xp: 5
        }))
      },
      chooseRewardedAd(WW) {
        var RW;
        let {
          id: MW,
          Qr: wW
        } = WW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.UiRequestResponded, (0, kR.H)({
          id: MW,
          Qr: wW
        }))
      },
      requestLeaderboard(WW) {
        var RW;
        let {
          category: MW,
          timeframe: wW,
          seeTop: CW
        } = WW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.LeaderboardRequest, {
          category: MW,
          timeframe: wW,
          seeTop: CW
        })
      }
    };
    let IM = !1;
    const oM = lW.c.bI / 2,
      lM = [oM, -oM, -oM, -oM, oM, oM, -oM, oM],
      FM = [0, 0, 0];

    function fM(WW, RW, MW) {
      for (let wW = 0; wW < WW.length; wW += 2)
        if (WW[wW] === RW && WW[wW + 1] === MW) return !0;
      return !1
    }
    const QM = {
      blocksStandingOn: function() {
        const WW = (0, AW.i)();
        if (null === WW) return [];
        const {
          api: RW,
          chunks: MW,
          tables: wW
        } = WW;
        if (!RW.readPosition(RW.localId, FM)) return [];
        const [CW, zR, bR] = FM, yR = Math.ceil(zR) - 1, NW = [], eW = [];
        for (let AW = 0; AW < lM.length; AW += 2) {
          const WW = CW + lM[AW],
            RW = bR + lM[AW + 1];
          if (Number.isInteger(WW) || Number.isInteger(RW)) continue;
          const zR = Math.floor(WW),
            BW = Math.floor(RW);
          if (fM(eW, zR, BW)) continue;
          const tR = MW.Iz(zR, yR, BW);
          wW.isSolidBlockId(tR) && (eW.push(zR, BW), NW.push(wW.nameOfId(tR)))
        }
        return NW
      }
    };
    var rw = MW(35126),
      cwW = MW(37087),
      XM = MW(1166);
    const jw = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      kw = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function aw() {
      const WW = new Set;
      return {
        add: RW => (WW.add(RW), () => {
          WW.delete(RW)
        }),
        fire() {
          for (const RW of WW) RW()
        }
      }
    }
    const sM = Object.freeze([]);

    function dM(WW, RW) {
      let MW, {
        rereads: wW,
        followLocalId: CW
      } = RW;
      const AW = () => (MW = (0, wR.p)(MW, WW()), MW);
      return {
        current: AW,
        watch(WW) {
          const RW = (0, JW.e)((RW => {
            wW(RW) && WW(AW())
          }));
          if (!CW) return RW;
          let MW = gR();
          const bR = (0, zR.t)((() => {
            const RW = gR();
            RW !== MW && (MW = RW, WW(AW()))
          }));
          return () => {
            RW(), bR()
          }
        }
      }
    }
    const pM = {
        players: dM((function() {
          const WW = JW.g.ids(),
            RW = {};
          for (const zR of WW) {
            var MW, wW, CW;
            RW[zR] = {
              name: null !== (MW = JW.g.getName(zR)) && void 0 !== MW ? MW : null,
              ranks: null !== (wW = JW.g.getSetting(zR, "ranks")) && void 0 !== wW ? wW : sM,
              cosmetics: null !== (CW = (0, JW.i)(zR)) && void 0 !== CW ? CW : null
            }
          }
          return {
            ids: WW,
            byId: RW,
            localId: gR()
          }
        }), {
          rereads: WW => "roster" !== WW.kind || WW.members || WW.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: dM((function() {
          const WW = {};
          for (const CW of JW.g.ids()) {
            var RW, MW, wW;
            WW[CW] = {
              colour: null !== (RW = JW.g.getSetting(CW, "colorInLobbyLeaderboard")) && void 0 !== RW ? RW : null,
              values: null !== (MW = JW.g.getSetting(CW, "lobbyLeaderboardValues")) && void 0 !== MW ? MW : null,
              tags: null !== (wW = JW.g.getSetting(CW, "lobbyLeaderboardTags")) && void 0 !== wW ? wW : null
            }
          }
          return WW
        }), {
          rereads: function(WW) {
            if ("roster" !== WW.kind) return "reset" === WW.kind;
            const {
              members: RW,
              settings: MW
            } = WW;
            return RW || MW.has("colorInLobbyLeaderboard") || MW.has("lobbyLeaderboardValues") || MW.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      hM = {
        cosmeticsUpdated: {
          watch: WW => (0, JW.e)((RW => {
            if ("cosmetics" !== RW.kind) return;
            const MW = gR();
            WW(RW.updates.map((WW => {
              let {
                U3: RW,
                Ur: wW,
                Kr: CW
              } = WW;
              return {
                local: RW === MW,
                Ur: wW,
                Kr: CW
              }
            })))
          }))
        }
      };
    var UM = MW(2202),
      EM = MW(1495),
      VM = MW(932),
      mw = MW(38231);
    let xw = !1,
      vw = null;
    const KM = {
      setShopOpen(WW) {
        var RW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.ShopMenuChanged, (0, kR.C)(WW))
      },
      buyShopItem(WW) {
        var RW;
        let {
          categoryKey: MW,
          itemKey: wW,
          userInput: CW
        } = WW;
        null === (RW = (0, AW.i)()) || void 0 === RW || RW.send(kR.c.ItemBought, {
          categoryKey: MW,
          itemKey: wW,
          shopVersion: FW.d.get("_shopVersion"),
          userInput: CW
        })
      }
    };
    let uM = !1;
    const OM = XR.z.LookFrozen | XR.z.ClicksSuppressed;

    function nM(WW, RW) {
      var MW;
      null !== (MW = (0, AW.i)()) && void 0 !== MW && MW.send(WW, RW) || console.warn(`[bloxd-wasm-client] message ${WW} not sent: no live game or the core's command ring is full`)
    }(0, PW.g)(jR.hb, (WW => {
      const RW = (0, aR.f)(jR.hb, WW);
      void 0 !== RW && NW.k.Sz("setDiscordReportKey", RW)
    }));
    const GM = {
      ignorePlayer(WW) {
        nM(kR.c.IgnoreUser, (0, kR.q)({
          uL: WW
        }))
      },
      reportPlayer(WW) {
        let {
          playerId: RW,
          chatMsgId: MW,
          ew: wW,
          details: CW
        } = WW;
        nM(kR.c.UserReport, (0, kR.S)({
          VK: RW,
          Tu: MW,
          ew: wW,
          KU: CW
        }))
      },
      reportWorldCodeChat(WW) {
        let {
          chatMsgId: RW,
          ew: MW,
          details: wW
        } = WW;
        nM(kR.c.UserReport, (0, kR.S)({
          VK: "",
          Tu: RW,
          ew: MW,
          KU: wW
        }))
      },
      requestDiscordReportKey(WW) {
        nM(kR.c.ReqDiscordReportKey, (0, kR.x)(WW))
      },
      reportLobbyOrGame(WW) {
        let {
          target: RW,
          ew: MW,
          details: wW
        } = WW;
        "customGame" === RW ? nM(kR.c.CustomGameReport, (0, kR.n)({
          ew: MW,
          KU: wW
        })) : nM(kR.c.LobbyReport, (0, kR.r)({
          ew: MW,
          KU: wW
        }))
      },
      updateMyCosmetic(WW) {
        nM(kR.c.UpdateMyCosmetic, (0, kR.R)(WW))
      },
      holdEmoteWheel(WW) {
        !WW || GR ? (0, cM.j)(OM, WW ? OM : 0) : NW.k.Sz("requestEmoteWheelHoldRelease")
      }
    };
    var LM = MW(38236),
      HM = MW(1553),
      DM = MW(38243);

    function qw() {
      const WW = (0, AW.i)();
      return !0 === (null === WW || void 0 === WW ? void 0 : WW.isCoreRunning) ? function(WW) {
        if (WW.queries.drawCensus() < TW.Hb.BYTES) return [];
        const RW = WW.memoryData(WW.scratch(), TW.Hb.BYTES, 4, "the draw census");
        if (null === RW) return [];
        const MW = TW.Hb.terrainOpaque(RW, 0),
          wW = TW.Hb.terrainTransparent(RW, 0),
          CW = TW.Hb.earthSky(RW, 0),
          zR = TW.Hb.skyMeshes(RW, 0),
          AW = TW.Hb.regular(RW, 0),
          bR = TW.Hb.thin(RW, 0),
          yR = TW.Hb.line(RW, 0),
          NW = TW.Hb.text(RW, 0),
          eW = TW.Hb.particles(RW, 0);
        return [{
          label: "Drawn",
          value: `${MW+wW+CW+zR+AW+bR+yR+NW+eW}`
        }, {
          label: "Terrain",
          value: `${MW} opaque / ${wW} transparent (${TW.Hb.terrainPack(RW,0)} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${AW} / ${bR}`
        }, {
          label: "Text / Lines",
          value: `${NW} / ${yR}`
        }, {
          label: "Sky / Particles",
          value: `${CW+zR} / ${eW}`
        }]
      }(WW.api) : []
    }
    var ZM = MW(38247);
    var SM = MW(548),
      Ww = MW(37369);

    function Rw(WW) {
      if (null === WW || void 0 === WW || !WW.isCoreRunning) return null;
      const {
        api: RW,
        chunks: MW,
        items: wW,
        tables: CW
      } = WW;
      return {
        playerFeet() {
          const WW = RW.yX(RW.localId);
          return null !== WW && void 0 !== WW && WW.every(Number.isFinite) ? WW : null
        },
        chunkBlocks: WW => MW.isLoaded(WW[0], WW[1], WW[2]) ? (WW, RW, wW) => MW.Iz(WW, RW, wW) : null,
        blockName: WW => CW.nameOfId(WW),
        inventory: () => ({
          slots: wW.playerItems().map((WW => WW ? {
            name: WW.name,
            amount: WW.amount
          } : null)),
          heldSlot: wW.selectedSlot
        }),
        nearby() {
          const MW = [];
          for (let CW = 0; CW < RW.idStr.length; CW++) {
            var wW;
            const zR = RW.idStr[CW],
              AW = RW.serverIds[CW],
              bR = RW.kinds[CW];
            if (null === zR || RW.isLocal(AW) || bR >>> TW.c !== TW.o.Lifeform) continue;
            const yR = RW.yX(AW),
              NW = SM.i[bR & TW.e];
            yR && void 0 !== NW && MW.push({
              kind: "Player" === NW ? "player" : NW,
              name: null !== (wW = WW.clientApi.getEntityName(zR)) && void 0 !== wW ? wW : null,
              position: yR
            })
          }
          return MW
        },
        droppedItems() {
          let WW = 0;
          for (let MW = 0; MW < RW.idStr.length; MW++) null !== RW.idStr[MW] && RW.kinds[MW] >>> TW.c === TW.o.Item && WW++;
          return WW
        }
      }
    }
    const Mw = {
        worldCodeAiChunk: WW => Promise.resolve((0, Ww.d)(Rw((0, AW.i)()), WW)),
        worldCodeAiGameState: () => Promise.resolve((0, Ww.f)(Rw((0, AW.i)())))
      },
      ww = function(WW) {
        const RW = aw(),
          wW = aw(),
          CW = new Set,
          zR = new Set,
          AW = () => {
            var RW, MW;
            return null !== (RW = null === (MW = WW.runtime()) || void 0 === MW ? void 0 : MW.currentViewer) && void 0 !== RW ? RW : null
          };
        let bR = null,
          yR = null;
        const eW = (WW, RW) => ({
            current: WW,
            watch(MW) {
              let wW = WW();
              return RW.add((() => {
                const RW = WW();
                RW !== wW && (wW = RW, MW(RW))
              }))
            }
          }),
          tR = WW => ({
            watch: RW => (WW.add(RW), () => {
              WW.delete(RW)
            })
          }),
          TW = WW => {
            const RW = AW(),
              MW = null === RW || void 0 === RW ? void 0 : RW.view;
            RW && MW && RW.seek(Math.max(0, Math.min(MW.totalTicks - 1, MW.WR + WW * BW._c)))
          },
          gR = {
            replay: eW((() => {
              var WW;
              const RW = AW(),
                MW = null !== (WW = null === RW || void 0 === RW ? void 0 : RW.view) && void 0 !== WW ? WW : null;
              return null === RW || null === MW || MW.state === BW.Lc.None ? (bR = null, null) : (bR = (0, wR.p)(bR, {
                id: RW.id,
                WR: MW.WR,
                totalTicks: MW.totalTicks,
                FRW: BW._c,
                playing: MW.state === BW.Lc.Playing,
                speed: MW.speed,
                cameraMode: MW.cameraMode,
                freecam: "freecam" === MW.cameraMode
              }), bR)
            }), RW),
            replayEdits: eW((() => {
              var WW;
              const RW = AW(),
                MW = null !== (WW = null === RW || void 0 === RW ? void 0 : RW.view) && void 0 !== WW ? WW : null;
              return null === RW || null === MW || MW.state === BW.Lc.None ? (yR = null, null) : (yR = (0, wR.p)(yR, {
                cameraKeyframes: [...RW.keyframes],
                playbackMark: MW.mark,
                fileName: RW.fileName,
                unsavedChanges: RW.unsavedChanges,
                suggestSaveAs: RW.suggestSaveAs
              }), yR)
            }), RW),
            replayRecorder: eW((() => {
              var RW, MW;
              return null !== (RW = null === (MW = WW.runtime()) || void 0 === MW ? void 0 : MW.recorder.current) && void 0 !== RW ? RW : zM.c.states.replayRecorder.current()
            }), wW),
            replayVideoExporting: {
              current: cwW.b,
              watch: WW => (0, NW.m)("replayViewer|videoExportChanged", (() => {
                WW((0, cwW.b)())
              }))
            }
          },
          iR = {
            replayUiActionRequested: tR(zR),
            replayViewerRequested: tR(CW)
          },
          YW = WW => {
            for (const RW of CW) RW(WW)
          },
          JW = () => {
            var wW;
            !0 === (null === (wW = AW()) || void 0 === wW ? void 0 : wW.isOpen) && Promise.all([MW.e(79), MW.e(55)]).then((() => MW(40044))).then((MW => {
              let {
                startWasmReplayVideoExport: wW
              } = MW;
              return wW({
                viewer: AW,
                canvas: () => {
                  var RW, MW;
                  return null !== (RW = null === (MW = WW.canvas) || void 0 === MW ? void 0 : MW.call(WW)) && void 0 !== RW ? RW : null
                },
                watchViewer: RW.add,
                requestViewer: YW
              })
            }), (WW => {
              console.error("Couldn't load the video export", WW), XM.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((WW => {
              console.error("The video export failed", WW)
            }))
          },
          PW = {
            replayAction(WW) {
              if ((0, cwW.b)()) return;
              const RW = AW();
              switch (WW) {
                case "replaySkipBack":
                  TW(-1);
                  break;
                case "replaySkipForward":
                  TW(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== RW && void 0 !== RW && RW.view && RW.setSpeed((0, rw.g)(RW.view.speed, "replaySpeedUp" === WW ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === RW || void 0 === RW || RW.addKeyframe()
              }
            },
            setReplayPlaying(WW) {
              var RW, MW;
              (0, cwW.b)() || (WW ? null === (RW = AW()) || void 0 === RW || RW.play() : null === (MW = AW()) || void 0 === MW || MW.pause())
            },
            seekReplay(WW) {
              var RW;
              let {
                WR: MW,
                ignorePlaybackMark: wW
              } = WW;
              null === (RW = AW()) || void 0 === RW || RW.seek(MW, null !== wW && void 0 !== wW && wW)
            },
            setReplayCameraMode(WW) {
              var RW;
              null === (RW = AW()) || void 0 === RW || RW.setCameraMode(WW)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(WW) {
              var RW;
              null === (RW = AW()) || void 0 === RW || RW.setKeyframe(WW)
            },
            moveReplayCameraKeyframe(WW) {
              var RW;
              let {
                from: MW,
                to: wW
              } = WW;
              null === (RW = AW()) || void 0 === RW || RW.moveKeyframe(MW, wW)
            },
            deleteReplayCameraKeyframes(WW) {
              var RW;
              let {
                start: MW,
                end: wW
              } = WW;
              null === (RW = AW()) || void 0 === RW || RW.deleteKeyframes(MW, wW)
            },
            setReplayPlaybackMark(WW) {
              var RW;
              null === (RW = AW()) || void 0 === RW || RW.setMark(WW)
            },
            cropReplay(WW) {
              var RW, MW;
              let {
                start: wW,
                end: CW
              } = WW;
              return !(0, cwW.b)() && (null !== (RW = null === (MW = AW()) || void 0 === MW ? void 0 : MW.crop(wW, CW)) && void 0 !== RW && RW)
            },
            holdReplayForShaderPackFailure(WW) {
              const RW = AW();
              RW && (RW.holdForShaderPackFailure(), function(WW) {
                Promise.all([MW.e(115), MW.e(122)]).then((() => MW(37186))).then((RW => {
                  let {
                    shaderPackPage: MW
                  } = RW;
                  MW.block(WW)
                })).catch((WW => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", WW)
                }))
              }(WW))
            },
            exportReplayVideo() {
              JW()
            },
            toggleRecording() {
              var RW;
              null === (RW = WW.runtime()) || void 0 === RW || RW.recorder.toggleRecording()
            },
            saveClip() {
              var RW;
              null === (RW = WW.runtime()) || void 0 === RW || RW.recorder.saveClip()
            },
            setRecorderPrefs(RW) {
              var MW;
              let {
                clipping: wW,
                clipSeconds: CW
              } = RW;
              null === (MW = WW.runtime()) || void 0 === MW || MW.recorder.setPrefs(wW, CW)
            },
            setReplayViewerOpen(RW) {
              var MW;
              (0, KR.f)(RW) && (null === (MW = WW.runtime()) || void 0 === MW || MW.recorder.viewerShown(RW))
            },
            recordFlyingMiddleText(RW) {
              var MW;
              let {
                content: wW,
                N9: CW,
                angle: zR,
                J9: AW
              } = RW;
              null === (MW = WW.runtime()) || void 0 === MW || MW.recorder.recordFlyingText(JSON.stringify(wW), CW, zR, AW)
            },
            dragReplayCamera(RW) {
              var MW;
              let {
                dx: wW,
                dy: CW
              } = RW;
              null === (MW = WW.freecam()) || void 0 === MW || MW.drag(wW, CW)
            },
            moveReplayFreecam(RW) {
              var MW;
              null === (MW = WW.freecam()) || void 0 === MW || MW.move(RW)
            },
            holdReplayFreecamVertical(RW) {
              var MW;
              let {
                action: wW,
                mM: CW
              } = RW;
              null === (MW = WW.freecam()) || void 0 === MW || MW.holdVertical(wW, CW)
            }
          },
          IW = WW => {
            var RW;
            const MW = AW(),
              wW = null !== (RW = null === MW || void 0 === MW ? void 0 : MW.view) && void 0 !== RW ? RW : null;
            jw.has(WW) ? (WW => {
              for (const RW of zR) RW(WW)
            })(WW) : kw.has(WW) ? PW.replayAction(WW) : "replayPlayPause" === WW ? MW && wW && wW.state !== BW.Lc.None && PW.setReplayPlaying(wW.state !== BW.Lc.Playing) : "replayChangeCameraMode" === WW ? null === MW || void 0 === MW || MW.cycleCameraMode() : "replayExit" === WW ? !0 === (null === MW || void 0 === MW ? void 0 : MW.inPlayback) && (0, rM.j)("/") : "replayExportVideo" === WW && JW()
          };
        let oW = !1;
        return {
          states: gR,
          events: iR,
          commands: PW,
          lookups: {
            replayCamera() {
              var RW, MW, wW;
              return !0 !== (null === (RW = AW()) || void 0 === RW ? void 0 : RW.isOpen) ? null : null !== (MW = null === (wW = WW.cameraView) || void 0 === wW ? void 0 : wW.call(WW)) && void 0 !== MW ? MW : null
            },
            leaveGameReloadsPage() {
              var WW;
              return !0 === (null === (WW = AW()) || void 0 === WW ? void 0 : WW.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var WW;
              const MW = !0 === (null === (WW = AW()) || void 0 === WW ? void 0 : WW.inPlayback);
              MW !== oW && (oW = MW, NW.k.Sz("connectedGameChanged")), RW.fire()
            },
            recorderChanged: wW.fire,
            keyDown: WW => {
              var RW;
              switch (WW) {
                case "recordGame":
                  return void PW.toggleRecording();
                case "recordClip":
                  return void((0, KR.b)() || PW.saveClip())
              }(0, cwW.b)() || ("replayViewerOpen" !== WW ? WW.startsWith("replay") && ((0, KR.b)() || !0 === (null === (RW = AW()) || void 0 === RW ? void 0 : RW.inPlayback)) && IW(WW) : YW("toggle"))
            }
          }
        }
      }({
        runtime: CW.m,
        cameraView: () => {
          var WW;
          const RW = null === (WW = (0, AW.i)()) || void 0 === WW ? void 0 : WW.renderFrame;
          if (!RW) return null;
          const [MW, wW, CW] = RW.cameraPosition, [zR, bR, yR] = RW.cameraDirection;
          return {
            position: [MW, wW, CW],
            direction: [zR, bR, yR]
          }
        },
        canvas: () => {
          var WW, RW, MW;
          return null !== (WW = null === (RW = (MW = (0, zR.I)()).canvas) || void 0 === RW ? void 0 : RW.call(MW)) && void 0 !== WW ? WW : null
        },
        freecam: CW.k
      }),
      Cw = {
        states: {
          ...JR,
          ...UR,
          ...ww.states,
          ...pM
        },
        events: {
          ...PR,
          ...IW,
          ...ER,
          ...KW.d,
          ...LM.k,
          ...ww.events,
          ...hM,
          ...xR
        },
        commands: {
          ...cR,
          ...IR,
          ...oW,
          ...VR,
          ...PM,
          ...GM,
          ...vR,
          ...bw,
          ...ww.commands,
          ...KM
        },
        queries: {
          ...mM,
          ...Mw
        },
        lookups: {
          ...oR,
          ...LW,
          ...LM.n,
          ...ww.lookups,
          ...rR,
          ...QM
        }
      };

    function zC() {
      (0, bR.i)(PW.j), (0, CW.q)(ww.feed), (0, KW.g)(), IM || (IM = !0, (0, PW.g)(jR.k, (WW => {
        const RW = (0, aR.f)(jR.k, WW);
        "string" === typeof RW && Promise.resolve().then((() => MW(2727))).then((WW => {
          let {
            onCosmeticPackGranted: MW
          } = WW;
          MW(RW)
        }))
      })), (0, PW.g)(jR.fb, (WW => {
        const RW = (0, aR.f)(jR.fb, WW);
        "number" === typeof RW && NW.k.Sz("serverUpdating", Date.now() + RW, !0)
      })), (0, PW.g)(jR.J, (WW => {
        const RW = (0, aR.f)(jR.J, WW);
        if ((0, aR.c)(RW)) {
          const {
            HWW: WW,
            DWW: MW
          } = RW;
          (0, YM.d)({
            HWW: "string" === typeof WW ? WW : null,
            DWW: "string" === typeof MW ? MW : null
          })
        }
      })), (0, PW.g)(eW.Kb.NewUiRequest, (WW => {
        const RW = (0, aR.h)(WW);
        (0, aR.c)(RW) && "number" === typeof RW.id && (0, aR.c)(RW.clientParameters) && (0, JM.d)(RW.id, RW.clientParameters)
      })), (0, PW.g)(jR.Z, (WW => {
        const RW = (0, aR.f)(jR.Z, WW);
        "number" === typeof RW && (0, JM.h)(RW)
      })), (0, PW.g)(eW.Kb.UiRequestPopup, (WW => {
        const RW = (0, aR.h)(WW);
        if ((0, aR.c)(RW) && "number" === typeof RW.id && "string" === typeof RW.text) {
          const WW = RW.id;
          (0, JM.j)(WW, RW.text, (RW => {
            PM.answerUiRequest({
              id: WW,
              Qr: RW
            })
          }))
        }
      })), (0, PW.g)(eW.Kb.TopRightHelper, (WW => {
        const RW = (0, aR.h)(WW);
        void 0 !== RW && NW.k.Sz("TopRightHelper", RW, !0)
      })), (0, PW.g)(eW.Kb.TaskProgress, (WW => {
        const RW = (0, aR.h)(WW);
        (0, aR.c)(RW) && "string" === typeof RW.taskId && "number" === typeof RW.progress && (0, iw.b)({
          taskId: RW.taskId,
          progress: RW.progress
        })
      }))), uM || (uM = !0, (0, PW.g)(jR.p, (WW => {
        const RW = (0, aR.f)(jR.p, WW);
        (0, aR.c)(RW) && NW.k.Sz("showShopFromServer", {
          toggle: RW.U6,
          b_: RW.b_
        }, !0)
      })), (0, PW.g)(eW.Kb.OverShopInfo, (WW => {
        const RW = (0, aR.h)(WW);
        (0, aR.c)(RW) && NW.k.Sz("overShopInfo", RW.info, !0)
      })), (0, PW.g)(eW.Kb.ShowShopTutorial, (() => {
        NW.k.Sz("showShopTutorial", null, !0)
      }))), xw || (xw = !0, (0, PW.e)((() => {
        var WW;
        (0, UM.J)(), null === (WW = vw) || void 0 === WW || WW(), vw = (0, PW.d)() ? (0, VM.i)(PW.d) : null
      })), (0, PW.g)(eW.Kb.SetCookie, (WW => {
        const RW = (0, aR.h)(WW),
          MW = (0, rM.b)().gameNameWithVariation;
        (0, aR.c)(RW) && "string" === typeof RW.key && null !== MW && (0, EM.setCookie)(MW, RW.key, RW.value)
      })), (0, PW.g)(eW.Kb.LeaveValues, (WW => {
        const RW = (0, aR.h)(WW);
        if ((0, aR.c)(RW) && "string" === typeof RW.leaveEventType) {
          const {
            leaveEventType: WW,
            category: MW,
            subCategory: wW,
            value: CW
          } = RW;
          (0, UM.P)({
            leaveEventType: WW,
            category: MW,
            subCategory: wW,
            value: CW
          })
        }
      })), (0, PW.g)(eW.Kb.CustomAnalyticsEvent, (WW => {
        const RW = (0, aR.h)(WW);
        if ((0, aR.c)(RW) && "string" === typeof RW.cat1) {
          const {
            cat1: WW,
            cat2: MW,
            cat3: wW,
            value: CW
          } = RW;
          (0, UM.s)({
            cat1: WW,
            cat2: MW,
            cat3: wW,
            value: CW
          })
        }
      })), (0, PW.g)(eW.Kb.ProgressionEvent, (WW => {
        const RW = (0, aR.h)(WW);
        if ((0, aR.c)(RW)) {
          const {
            type: WW,
            location1: MW,
            location2: wW,
            location3: CW,
            score: zR
          } = RW;
          (0, UM.y)({
            type: WW,
            location1: MW,
            location2: wW,
            location3: CW,
            score: zR
          })
        }
      })), (0, PW.g)(eW.Kb.ResourceEvent, (WW => {
        const RW = (0, aR.h)(WW);
        if ((0, aR.c)(RW)) {
          const {
            type: WW,
            resourceType: MW,
            amount: wW,
            category: CW,
            itemName: zR
          } = RW;
          (0, UM.B)({
            type: WW,
            resourceType: MW,
            amount: wW,
            category: CW,
            itemName: zR
          })
        }
      })), (0, PW.g)(eW.Kb.LeaderboardResponse, (WW => {
        const RW = (0, aR.h)(WW);
        if ((0, aR.c)(RW)) {
          const {
            category: WW,
            timeframe: MW,
            data: wW
          } = RW;
          NW.k.Sz("leaderboardResponse", {
            category: WW,
            timeframe: MW,
            data: wW
          })
        }
      })), (0, PW.g)(jR.y, (WW => {
        const RW = (0, aR.f)(jR.y, WW);
        "string" === typeof RW && (0, mw.c)(WW.conn, RW)
      })), (0, PW.g)(jR.B, (WW => {
        const RW = (0, aR.f)(jR.B, WW);
        "string" === typeof RW && console.error(`[logErrorToConsole]: ${RW}`)
      }))), DW(), (0, LM.e)(), AM || (AM = !0, (0, PW.g)(jR.h, (WW => {
        const RW = (0, aR.f)(jR.h, WW);
        void 0 !== RW && (0, zw.i)(RW)
      }))), gw(), WM(), SW || (SW = !0, (0, zR.s)(WR)), wW.gameBridge.attach(Cw), (0, wW.installPageSources)({
        commands: {
          ...wW.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: DM.l
        },
        queries: ZM.wasmIconQueries,
        lookups: {
          ...wW.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...ZM.wasmIconLookups,
          zk: DM.e,
          drawCallStats: qw
        }
      }), (0, HM.e)(), (0, ZM.loadIcons)()
    }
  },
  38256: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      e: () => bR
    });
    var wW = MW(38262);
    let CW = null,
      zR = null;

    function AW() {
      return CW ??= MW.e(50).then((() => MW(40059))).catch((WW => {
        throw CW = null, WW
      })), CW
    }

    function bR() {
      return zR ??= Promise.all([AW(), (0, wW.g)()]).then((WW => {
        let [RW] = WW;
        return RW
      }), (WW => {
        throw zR = null, WW
      })), zR
    }
  },
  35221: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = {
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
  37064: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      i: () => CW
    });
    const wW = ["description", "label"];

    function CW(WW) {
      const RW = WW.type;
      return {
        type: RW,
        params: WW[RW]
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);