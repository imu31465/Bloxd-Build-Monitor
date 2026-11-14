export const id = 40;
export const ids = [40];
export const modules = {
  37752: (FF, WF, SF) => {
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
  },
  7728: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF
    });
    var CF = SF(11);

    function AF() {
      return !CF.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35423: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      e: () => uF,
      i: () => AF
    });
    const CF = [.25, .5, 1, 2, 4, 8, 16];

    function AF(FF, WF) {
      const SF = CF;
      let AF = SF.indexOf(FF);
      return -1 === AF && (AF = SF.findIndex((WF => WF >= FF)), -1 === AF && (AF = SF.length - 1)), "up" === WF ? SF[Math.min(AF + 1, SF.length - 1)] : SF[Math.max(AF - 1, 0)]
    }

    function uF(FF) {
      return FF <= CF[0]
    }

    function hF(FF) {
      return FF >= CF[CF.length - 1]
    }
  },
  37365: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(20),
      AF = SF(1594);

    function uF(FF) {
      let {
        taskId: WF,
        progress: SF
      } = FF;
      const CF = AF.d.get("_tasks");
      null !== CF && void 0 !== CF && CF[WF] && AF.d.apply({
        _tasks: {
          ...CF,
          [WF]: {
            ...CF[WF],
            progress: SF
          }
        }
      })
    }
    CF.j.subscribe("clientTaskProgress", (FF => {
      uF(FF)
    }))
  },
  37729: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => eF,
      h: () => PF,
      k: () => iW,
      o: () => dF,
      p: () => hF,
      s: () => RF
    });
    var CF = SF(1594),
      AF = SF(20),
      uF = SF(1605);
    const hF = (0, uF.n)((function() {
        var FF, WF, SF, AF;
        return {
          health: null !== (FF = CF.d.get("_health")) && void 0 !== FF ? FF : null,
          maxHealth: null !== (WF = CF.d.get("_totalMaxHealth")) && void 0 !== WF ? WF : null,
          shield: null !== (SF = CF.d.get("_shield")) && void 0 !== SF ? SF : null,
          maxShield: null !== (AF = CF.d.get("maxShield")) && void 0 !== AF ? AF : null
        }
      }), [], (0, uF.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      bW = [{
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

    function dF(FF, WF) {
      return bW[(FF ? 2 : 0) + (WF ? 1 : 0)]
    }
    const PF = (0, uF.n)((function() {
      var FF;
      return null !== (FF = CF.d.get("_aura")) && void 0 !== FF ? FF : null
    }), [], (0, uF.l)("_aura"));

    function RF(FF) {
      return {
        watch: WF => (0, AF.l)("shotPlayer", (SF => {
          let {
            playerId: CF,
            damage: AF,
            wasCrit: uF,
            distance: hF
          } = SF;
          FF(CF) && WF({
            damage: AF,
            wasCrit: uF,
            distance: hF
          })
        }))
      }
    }

    function iW(FF) {
      return (0, uF.e)("chat", (WF => {
        let {
          serverChatMsgId: SF,
          content: CF,
          chatterEId: AF
        } = WF;
        return {
          serverChatMsgId: null !== SF && void 0 !== SF ? SF : null,
          content: CF,
          author: AF ? FF(AF) : null
        }
      }))
    }
    class eF {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const SF = this.shown;
        return FF !== this.needed && (this.needed = FF, this.neededSince = WF, null === FF && (this.shown = null)), this.shown !== this.needed && WF - this.neededSince > 200 && (this.shown = this.needed), this.shown !== SF
      }
    }
  },
  38653: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      c: () => hF
    });
    var CF = SF(2485);
    let AF = null,
      uF = null;

    function hF() {
      return uF ??= SF.e(188).then((() => SF(34926))).then((FF => {
        let {
          ITEM_SPRITES: WF,
          ITEM_SPRITES_WITHOUT_FILE: SF,
          ITEM_FILES_WITHOUT_SPRITE: uF
        } = FF;
        AF = function(FF, WF, SF) {
          const AF = new Set,
            uF = (0, CF.E)(WF);
          let hF = 0;
          for (const [CF, bW] of FF.entries()) CF === uF[hF] ? hF++ : AF.add(bW);
          if ("" !== SF)
            for (const bW of SF.split(CF.w)) AF.add(bW);
          return AF
        }(WF.split(CF.w), SF, uF)
      }), (FF => {
        throw uF = null, FF
      })), uF
    }

    function bW(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = AF) || void 0 === SF ? void 0 : SF.has(FF)) && void 0 !== WF && WF
    }
  },
  35288: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      f: () => AF
    });
    let CF = () => null;

    function AF(FF) {
      CF = FF
    }

    function uF(FF, WF) {
      return CF(FF, WF)
    }
  },
  37723: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      return Math.hypot(FF[0] - WF[0], FF[1] - WF[1], FF[2] - WF[2]) < SF + .5
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  37384: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF
    });
    var CF = SF(1085),
      AF = SF(1392),
      uF = SF(11),
      hF = SF(1168),
      bW = SF(1175),
      dF = SF(1352),
      PF = SF(34993);

    function RF(FF) {
      let {
        Z2: WF,
        W4: SF
      } = FF;
      const RF = null !== WF && void 0 !== WF ? WF : (0, bW.e)().gameNameWithVariation;
      (0, CF.H)(RF) && ((0, PF.i)(), (0, hF.hb)((() => {
        console.log("Received matchmaking order from game server to game", WF), (0, uF.c)("inGameReplay"), (0, dF.navigatePreserveSearch)((0, AF.c)(RF, null !== SF && void 0 !== SF ? SF : void 0))
      }), "video_start"))
    }
  },
  37516: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF
    });
    var CF = SF(20),
      AF = SF(1621);

    function uF(FF) {
      var WF, SF;
      const uF = (0, AF.o)(null !== (WF = null === (SF = AF.z.toggleFreeCam) || void 0 === SF ? void 0 : SF[0]) && void 0 !== WF ? WF : null);
      CF.j.Uu("showBottomMessage", {
        message: `Free Camera ${FF?"Enabled":"Disabled"}${uF?` - Press ${uF} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37368: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      g: () => bW,
      k: () => dF
    });
    var CF = SF(20),
      AF = SF(1189);
    const uF = new Map;

    function hF(FF, WF) {
      CF.j.Uu("newUiRequest", {
        id: FF,
        clientParameters: WF
      }, !0)
    }

    function bW(FF) {
      CF.j.Uu("removeUiRequest", FF, !0);
      const WF = uF.get(FF);
      WF && (WF.tearDownNotification(), uF.delete(FF))
    }

    function dF(FF, WF, SF) {
      const CF = AF.NotificationProvider.showPromptPopup({
        title: WF,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      uF.set(FF, CF), CF.getResult().then((WF => {
        uF.delete(FF), "notificationTornDown" !== WF && SF(WF)
      }))
    }
  },
  37748: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => iW,
      f: () => eF
    });
    var CF = SF(161),
      AF = SF(37752);
    const uF = 20;

    function hF(FF) {
      return FF.map(Math.floor).join(" ")
    }

    function bW(FF) {
      return null === FF.amount || 1 === FF.amount ? FF.name : `${FF.amount} ${FF.name}`
    }
    var dF = SF(37758),
      PF = SF(1594),
      RF = SF(1175);

    function iW(FF, WF) {
      if (!FF) return dF.d;
      const SF = FF.playerFeet();
      if (!SF) return "The player isn't in the world yet, so no blocks can be seen.";
      const uF = CF.h.MC,
        hF = (0, AF.f)(null !== WF && void 0 !== WF ? WF : SF, uF),
        bW = FF.chunkBlocks(hF);
      return bW ? (0, AF.b)(hF, uF, ((WF, SF, CF) => {
        const AF = bW(WF, SF, CF);
        return 0 === AF ? null : FF.blockName(AF).split("|")[0]
      }), SF) : `The chunk from ${hF.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${SF.map(Math.floor).join(" ")}.`
    }

    function eF(FF) {
      var WF, SF, CF;
      if (!FF) return dF.f;
      const AF = FF.playerFeet();
      if (!AF) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: iW,
        heldSlot: eF
      } = FF.inventory();
      return function(FF) {
        const WF = [];
        null !== FF.game && WF.push(`Game: ${FF.game}.`);
        const SF = null === FF.health ? "" : `, health ${Math.round(FF.health)}${null===FF.maxHealth?"":` of ${Math.round(FF.maxHealth)}`}`;
        WF.push(`The player (the creator) stands at ${hF(FF.position)}${SF}, ${FF.creative?"in":"not in"} creative mode.`);
        const CF = FF.slots[FF.heldSlot];
        WF.push(CF ? `Holding (slot ${FF.heldSlot}): ${bW(CF)}.` : `Holding nothing (slot ${FF.heldSlot} is empty).`);
        const AF = FF.slots.flatMap(((FF, WF) => FF ? [`slot ${WF}: ${bW(FF)}`] : []));
        WF.push(AF.length > 0 ? `Inventory: ${AF.join(", ")}.` : "Inventory: empty.");
        const dF = WF => Math.hypot(WF.position[0] - FF.position[0], WF.position[1] - FF.position[1], WF.position[2] - FF.position[2]),
          PF = [...FF.nearby].sort(((FF, WF) => dF(FF) - dF(WF)));
        if (0 === PF.length) WF.push("No other players or mobs are near enough to see.");
        else {
          WF.push("Near them, nearest first:");
          for (const FF of PF.slice(0, uF)) {
            const SF = "player" === FF.kind ? `player "${FF.name||"?"}"` : FF.name && FF.name !== FF.kind ? `${FF.kind} "${FF.name}"` : FF.kind,
              CF = Math.round(dF(FF));
            WF.push(`- ${SF} at ${hF(FF.position)}, ${CF} block${1===CF?"":"s"} away`)
          }
          PF.length > uF && WF.push(`- and ${PF.length-uF} more further away`)
        }
        return FF.droppedItems > 0 && WF.push(`${FF.droppedItems} dropped item${1===FF.droppedItems?" is":"s are"} on the ground nearby.`), WF.join("\n")
      }({
        game: null !== (WF = (0, RF.e)().gameNameWithVariation) && void 0 !== WF ? WF : null,
        position: AF,
        health: null !== (SF = PF.d.get("_health")) && void 0 !== SF ? SF : null,
        maxHealth: null !== (CF = PF.d.get("_totalMaxHealth")) && void 0 !== CF ? CF : null,
        creative: !0 === PF.d.get("creative"),
        heldSlot: eF,
        slots: iW,
        nearby: FF.nearby(),
        droppedItems: FF.droppedItems()
      })
    }
  },
  37392: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => dF,
      e: () => PF
    });
    var CF = SF(1085),
      AF = SF(874),
      uF = SF(35350),
      hF = SF(20);

    function bW(FF) {
      let {
        lobbyName: WF,
        gameNameWithVariation: SF
      } = FF;
      return !(0, CF.L)(WF) || null !== SF && (SF.startsWith("testGym") || (0, AF.j)(SF))
    }

    function dF(FF) {
      return FF.rM === uF.b.Leave || FF.rM === uF.b.Cursor
    }

    function PF(FF) {
      hF.j.Uu("codeCollab", {
        type: FF.rM,
        docKey: FF.gM,
        version: FF.VY,
        editorCount: FF.U3,
        peers: FF.B3,
        updates: FF.ZY,
        playerId: FF.bFF,
        playerName: FF.R6,
        colour: FF.iFF,
        anchor: FF.fY,
        head: FF.wY,
        existingCursors: FF.rFF,
        files: FF.gFF,
        engineSettings: FF.tFF
      })
    }
  },
  38638: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadIcons: () => xW,
      setIconFileOverrides: () => ZF,
      wasmIconLookups: () => yW,
      wasmIconQueries: () => fF
    });
    var CF = SF(3584),
      AF = SF(3559),
      uF = SF(38645),
      hF = SF(1587),
      bW = SF(3566),
      dF = SF(1576),
      PF = SF(2477),
      RF = SF(2485);
    let iW = null,
      eF = null;

    function EF(FF) {
      const WF = FF.startsWith(RF.o),
        [SF, CF = SF, AF = SF] = (WF ? FF.slice(RF.o.length) : FF).split(RF.l);
      return {
        top: SF,
        left: CF,
        right: AF,
        half: WF
      }
    }

    function QF(FF) {
      const WF = null === iW ? void 0 : (0, PF.b)(FF),
        SF = void 0 === WF ? 0 : iW.codes[WF];
      return 0 === SF ? void 0 : iW.pool[SF - 1]
    }
    var rW = SF(2474),
      gW = SF(3548),
      tW = SF(3579),
      TF = SF(38649);
    const aW = "item:";
    let kW = null,
      qW = null,
      VF = null,
      NF = null,
      DF = null,
      LF = !1,
      mW = null,
      OF = 0;

    function xW() {
      return LF || (LF = !0, (0, tW.i)().then((FF => {
        FF && (0, hF.b)()
      }))), NF ??= Promise.all([(0, rW.d)(), (eF ??= SF.e(1).then((() => SF(40478))).then((FF => {
        let {
          BLOCK_FACE_RUNS: WF,
          BLOCK_FACES: SF,
          MAX_FACE_ITEM_ID: CF
        } = FF;
        iW = {
          codes: (0, RF.H)(WF, CF + 1),
          pool: SF.split(RF.w).map(EF)
        }
      }), (FF => {
        throw eF = null, FF
      })), eF), (0, TF.g)(), SF.e(194).then((() => SF(35203)))]).then((FF => {
        let [, , WF, SF] = FF;
        WF.loadBundledTextures(), kW = WF, qW = SF, (0, hF.b)()
      }), (FF => {
        NF = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", FF)
      })), NF
    }

    function ZF(FF) {
      mW = FF, OF++, (0, hF.b)()
    }

    function oF(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = mW) || void 0 === SF ? void 0 : SF.itemSprite(FF)) && void 0 !== WF ? WF : kW.itemSpriteUrl(FF)
    }

    function YF(FF) {
      var WF, SF;
      return null !== (WF = null === (SF = mW) || void 0 === SF ? void 0 : SF.blockTexture(FF)) && void 0 !== WF ? WF : kW.blockTextureUrl(FF)
    }

    function MF() {
      return DF ??= SF.e(182).then((() => SF(32982))).then((FF => {
        VF = {
          rotated: FF.rotatedBlockTextures,
          animated: FF.animatedBlockTextures
        }, (0, hF.b)()
      }), (FF => {
        DF = null, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", FF)
      })), DF
    }

    function cW(FF) {
      var WF;
      return null !== (WF = (0, rW.c)(FF)) && void 0 !== WF ? WF : FF
    }

    function GF(FF) {
      var WF, SF;
      const CF = YF(FF);
      return null !== CF ? CF : null === VF ? (MF(), "") : null !== (WF = null !== (SF = VF.rotated[FF]) && void 0 !== SF ? SF : VF.animated[FF]) && void 0 !== WF ? WF : kW.notFoundUrl()
    }

    function zW(FF) {
      return void 0 !== (0, PF.b)(FF) ? FF : /^[1-9][0-9]*$/.test(FF) ? (0, PF.f)(Number(FF)) : void 0
    }

    function IF(FF) {
      var WF;
      if (FF.startsWith(aW)) {
        var SF;
        const WF = (0, rW.c)(FF.slice(5));
        return null !== (SF = void 0 === WF ? null : oF(WF)) && void 0 !== SF ? SF : kW.notFoundUrl()
      }
      return null !== (WF = kW.particleUrl(FF)) && void 0 !== WF ? WF : kW.notFoundUrl()
    }
    const fF = {
        async blockIcon(FF) {
          var WF;
          let {
            name: SF,
            size: CF,
            lineWidth: AF
          } = FF;
          await xW();
          const uF = null !== (WF = zW(SF)) && void 0 !== WF ? WF : SF,
            hF = (0, tW.c)(uF, CF, AF);
          if (null !== hF) return hF;
          const dF = QF(uF),
            RF = (0, PF.b)(uF),
            iW = void 0 === RF || null === qW ? void 0 : qW.itemTypeNameOf(RF);
          if (null === kW || void 0 === dF) return "";
          if ([dF.top, dF.left, dF.right].some((FF => null === YF(FF))) && null === VF && (await MF(), null === VF)) return "";
          const eF = {
              top: GF(dF.top),
              left: GF(dF.left),
              right: GF(dF.right),
              itemType: (0, bW.e)(iW) ? iW : "CubeBlock"
            },
            EF = 0 === OF ? uF : `${uF}#${OF}`;
          return (await (0, gW.b)()).drawBlockIconUrl(EF, CF, AF, (() => eF))
        }
      },
      yW = {
        itemIcon: function(FF) {
          var WF, SF;
          if (null === kW) return xW(), dF.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(FF);
          if ((0, AF.m)(FF)) return {
            kind: "icon",
            url: null !== (SF = kW.ingameIconUrl(FF)) && void 0 !== SF ? SF : kW.notFoundUrl()
          };
          if (FF.startsWith(AF.e)) return {
            kind: "icon",
            url: IF(FF.slice(AF.e.length))
          };
          if (0 === (0, PF.g)()) return (0, uF.c)(), dF.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(FF);
          const hF = null !== (WF = zW(FF)) && void 0 !== WF ? WF : FF,
            bW = (0, PF.b)(hF),
            RF = void 0 === bW ? void 0 : qW.itemTypeNameOf(bW),
            iW = QF(hF);
          if (void 0 !== iW) return "StairsBlock" === RF ? {
            kind: "stairs"
          } : {
            kind: "block",
            top: GF(iW.top),
            left: GF(iW.left),
            right: GF(iW.right),
            half: iW.half
          };
          const eF = function(FF) {
            var WF;
            return null !== (WF = oF(cW(FF))) && void 0 !== WF ? WF : kW.notFoundUrl()
          }(hF);
          if ((0, tW.g)(hF) && ! function(FF) {
              return null !== mW && (null !== mW.itemSprite(cW(FF)) || null !== mW.model(FF))
            }(hF)) return {
            kind: "model",
            url: eF
          };
          if ("Gun" === RF) return {
            kind: "gun",
            url: eF
          };
          if (void 0 !== bW && "GrayscaleArmour" === qW.itemTypeOf(bW) || Object.hasOwn(CF.c, hF)) {
            var EF;
            const WF = null !== (EF = (0, CF.f)(FF)) && void 0 !== EF ? EF : (0, CF.f)(hF);
            if (WF) return {
              kind: "item",
              url: eF,
              tint: WF
            }
          }
          return {
            kind: "item",
            url: eF
          }
        },
        hasIcon: function(FF) {
          return void 0 !== zW(FF) || (0, AF.m)(FF) || FF.startsWith(AF.e)
        },
        isItemName: function(FF) {
          return void 0 !== zW(FF)
        }
      }
  },
  38511: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      attachPlayGameSources: () => uC,
      playGameSources: () => AC
    });
    var CF = SF(1576),
      AF = SF(38520),
      uF = SF(3773),
      hF = SF(38527),
      bW = SF(38533),
      dF = SF(37729),
      PF = SF(20),
      RF = SF(3793),
      iW = SF(3786),
      eF = SF(38536),
      EF = SF(38544);

    function QF() {
      var FF;
      const WF = null === (FF = (0, hF.j)()) || void 0 === FF ? void 0 : FF.api.localId;
      return void 0 === WF || WF === EF.Oc ? null : String(WF)
    }

    function rW(FF) {
      const WF = (0, hF.j)();
      if (null !== WF) return FF(WF);
      let SF = null;
      const CF = (0, uF.u)((() => {
        const WF = (0, hF.j)();
        null !== WF && null === SF && (CF(), SF = FF(WF))
      }));
      return () => {
        var FF;
        CF(), null === (FF = SF) || void 0 === FF || FF()
      }
    }

    function gW(FF, WF, SF) {
      return {
        current: () => {
          const SF = (0, hF.j)();
          return null === SF ? WF : FF(SF)()
        },
        watch: WF => rW((CF => {
          const AF = FF(CF);
          let uF = AF();
          return WF(uF), SF((() => {
            const FF = AF();
            FF !== uF && (uF = FF, WF(FF))
          }))
        }))
      }
    }
    var tW = SF(38552),
      TF = SF(38577);
    (0, TF.h)(RF.Ob.Chat, (FF => {
      if (FF.payloadKind !== iW.Pb.Msgpack) return;
      const WF = function(FF) {
        if (null === FF || "object" !== typeof FF || !("content" in FF)) return null;
        const {
          chatMsgId: WF,
          content: SF,
          chatterEId: CF
        } = FF;
        return {
          serverChatMsgId: null !== WF && void 0 !== WF ? WF : void 0,
          content: SF,
          chatterEId: void 0 === CF || null === CF ? void 0 : String(CF)
        }
      }((0, eF.b)(FF.payload));
      null !== WF && PF.j.Uu("chat", WF, !0)
    }));
    const aW = {
        chatReceived: (0, dF.k)((function(FF) {
          var WF, SF, CF;
          return {
            id: FF,
            name: null !== (WF = tW.i.getName(FF)) && void 0 !== WF ? WF : null,
            local: QF() === FF,
            profileEffect: null !== (SF = null === (CF = (0, tW.k)(FF)) || void 0 === CF ? void 0 : CF.profileEffect) && void 0 !== SF ? SF : null
          }
        }))
      },
      kW = {
        sendChatMessage(FF) {
          var WF;
          let {
            rb: SF,
            channelName: CF
          } = FF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.clientApi.sendChat(SF, CF)
        }
      };
    var qW = SF(161),
      VF = SF(1594),
      NF = SF(37723);
    const DF = [0, 0, 0],
      LF = {
        codeBlockClickable(FF) {
          var WF;
          const SF = (0, hF.j)();
          if (null === SF || void 0 === SF || !SF.isSessionLive) return !1;
          const CF = SF.api;
          if (0 !== (EF.m.playerFlags(CF.apiView, 0) & EF.ld.Crouching)) return !1;
          const AF = CF.queries.directorEntity(CF.localId) >= EF.kb.BYTES ? CF.memoryData(CF.scratch(), EF.kb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === AF) return !1;
          for (let uF = 0; uF < 3; uF++) DF[uF] = EF.kb.feet(AF, 0, uF);
          return DF[1] += EF.kb.eyeHeight(AF, 0), (0, NF.c)(DF, FF, null !== (WF = VF.d.get("blockReach")) && void 0 !== WF ? WF : qW.h.qN)
        }
      },
      mW = {
        clickCodeBlock(FF) {
          var WF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.clickCodeBlock(FF)
        }
      };
    var OF = SF(38593),
      xW = SF(38561),
      ZF = SF(38596),
      oF = SF(38563);

    function YF(FF) {
      var WF, SF;
      const CF = (0, hF.j)();
      return CF ? null === (WF = (0, OF.d)(CF.api, FF[0], FF[1], FF[2])) || void 0 === WF || null === (SF = WF.persisted) || void 0 === SF ? void 0 : SF.shared : void 0
    }

    function MF(FF) {
      return `${FF[0]},${FF[1]},${FF[2]}`
    }
    const cW = new Map;
    let GF = null,
      zW = 0;

    function IF() {
      return zW
    }

    function fF(FF) {
      const WF = null !== GF && GF.key === MF(FF.pos) ? GF.type : null;
      if (null === WF) return FF;
      let SF = null;
      if ("Iron" === WF) {
        const {
          cachedPasskey: WF,
          ...CF
        } = yW(FF.pos);
        SF = {
          bR: null !== WF && void 0 !== WF ? WF : [0, 0, 0, 0],
          ...CF
        }
      }
      return {
        ...FF,
        type: WF,
        ironChest: SF
      }
    }

    function yW(FF) {
      const WF = YF(FF),
        SF = null === WF || void 0 === WF ? void 0 : WF.ownerDbId,
        CF = function(FF) {
          var WF;
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YF(FF);
          const CF = MF(FF),
            AF = cW.get(CF);
          return AF ? AF.lastOpened < (null !== (WF = null === SF || void 0 === SF ? void 0 : SF.passkeyLastUpdated) && void 0 !== WF ? WF : 0) ? (cW.delete(CF), null) : [...AF.bR] : null
        }(FF, WF);
      return void 0 === SF ? {
        cachedPasskey: CF
      } : {
        ownerDbId: SF,
        cachedPasskey: CF
      }
    }(0, TF.h)(xW.d, (FF => {
      const WF = (0, oF.h)(xW.d, FF);
      if (!(0, oF.d)(WF) || WF.B4) return;
      if (zW++, !WF.A4 || null === WF.vY) return void(GF = null);
      const SF = MF(WF.vY);
      GF = {
        key: SF,
        type: WF.Z4
      }, null !== WF.K4 && cW.set(SF, {
        bR: [...WF.K4],
        lastOpened: Date.now()
      })
    })), (0, TF.f)((() => {
      cW.clear(), GF = null, zW++
    }));
    const sF = {
        boardEditRequested: {
          watch: FF => (0, PF.l)("EditBoard", (WF => {
            let {
              pos: SF
            } = WF;
            if (null === SF) return void FF(null);
            const CF = (0, hF.j)(),
              AF = (0, hF.r)();
            CF && AF && FF(AF.readBoardToEdit(CF.api, CF.chunks, SF))
          }))
        },
        ironChestOpenRequested: {
          watch: FF => (0, PF.l)("OpenIronChest", (WF => {
            let {
              pos: SF
            } = WF;
            FF(function(FF) {
              return {
                pos: FF,
                ...yW(FF)
              }
            }(SF))
          }))
        }
      },
      nF = {
        writeOnBoard(FF) {
          var WF;
          let {
            pos: SF,
            text: CF,
            textSize: AF
          } = FF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.UpdateBoard, (0, ZF.W)({
            MI: SF,
            HI: CF,
            JI: AF
          }))
        },
        writeBook(FF) {
          var WF;
          let {
            pages: SF,
            title: CF,
            published: AF
          } = FF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.UpdateBook, (0, ZF._)({
            bK: SF,
            iK: CF,
            rK: AF
          }))
        },
        writeNameTag(FF) {
          var WF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.UpdateNameTag, FF)
        },
        setCustomLobbyBlock(FF) {
          let {
            pos: WF,
            blockName: SF
          } = FF;
          const CF = (0, hF.r)(),
            AF = (0, hF.j)();
          CF && AF && AF.send(ZF.b.SetCustomLobbyBlock, (0, ZF.E)({
            ah: CF.blockIdOf(SF),
            sK: WF
          }))
        }
      };
    var HF = SF(38603),
      KF = SF(874),
      wF = SF(37435),
      XF = SF(3764);

    function UF(FF) {
      if (null === FF) return null;
      const WF = [];
      for (const SF of FF) {
        const FF = Object.keys(SF)[0];
        if ("eZ" === FF) {
          const {
            str: FF,
            style: CF,
            clickableUrl: AF
          } = SF.eZ, uF = Object.keys(FF)[0], hF = FF[uF];
          "string" !== uF && "styledEntityName" !== uF && "styledTranslatedText" !== uF || WF.push({
            str: hF,
            style: CF,
            clickableUrl: AF
          })
        } else WF.push(SF[FF])
      }
      return WF
    }
    const BF = {
      screenPos(FF) {
        var WF, SF;
        return null !== (WF = null === (SF = (0, hF.j)()) || void 0 === SF ? void 0 : SF.renderFrame.projectWorldPosToScreenPos(FF)) && void 0 !== WF ? WF : {
          x: 0,
          y: 0
        }
      }
    };
    let jW = !1;

    function vW() {
      jW || (jW = !0, (0, TF.h)(RF.Ob.ProgressBarUpdate, (FF => {
        const WF = (0, oF.k)(FF);
        (0, oF.d)(WF) && PF.j.Uu("progressBarUpdate", WF, !0)
      })), (0, TF.h)(xW.t, (FF => {
        const WF = (0, oF.h)(xW.t, FF);
        WF && PF.j.Uu("middleScreenBarInitiate", {
          duration: WF.Q8,
          K8: WF.K8,
          horizBarRemOffset: WF.A7
        }, !0)
      })), (0, TF.h)(RF.Ob.RemoveMiddleScreenBar, (() => {
        PF.j.Uu("middleScreenBarRemove")
      })), (0, TF.h)(xW.R, (FF => {
        const WF = (0, oF.h)(xW.R, FF);
        if (WF) {
          var SF;
          const FF = WF.lY ? null === (SF = (0, hF.j)()) || void 0 === SF ? void 0 : SF.renderFrame.projectDirectionToScreenPos(WF.lY) : void 0;
          PF.j.Uu("sendHitmarker", {
            MJ: WF.MJ,
            screenPos: FF
          }, !0)
        }
      })), (0, TF.h)(xW.W, (FF => {
        const WF = (0, oF.h)(xW.W, FF);
        if (WF) {
          const {
            id: FF,
            position: SF,
            style: CF,
            text: AF,
            o3: uF
          } = WF;
          PF.j.Uu("setDirectionArrow", {
            id: FF,
            position: SF,
            style: CF,
            text: UF(AF),
            o3: uF
          }, !0)
        }
      })), (0, TF.h)(xW.g, (FF => {
        const WF = (0, oF.h)(xW.g, FF);
        WF && PF.j.Uu("clearDirectionArrow", {
          id: WF.id
        }, !0)
      })), (0, TF.h)(xW.m, (FF => {
        const WF = (0, oF.h)(xW.m, FF);
        WF && PF.j.Uu("flyingMiddleMessage", {
          content: UF(WF.GJ),
          zp: WF.zp,
          HJ: WF.HJ
        }, !0)
      })), (0, TF.h)(RF.Ob.WorldVariation, (FF => {
        const WF = (0, oF.k)(FF);
        if ("string" === typeof WF) {
          const FF = WF === KF.f ? null : {
            message: `Currently loaded as variation: ${WF}`,
            type: "Warning"
          };
          PF.j.Uu("showPermanentBottomMessage", FF, !0)
        }
      })), (0, TF.h)(xW.A, (FF => {
        const WF = (0, oF.h)(xW.A, FF);
        WF && function(FF, WF) {
          const {
            type: SF,
            params: CF
          } = (0, wF.h)(WF), AF = {
            ...CF
          };
          for (const uF of wF.d) AF[uF] && (AF[uF] = UF(AF[uF]));
          XF.c.queueQTE(FF, SF, AF).getResult().then((WF => {
            var SF;
            "boolean" === typeof WF && (null === (SF = (0, hF.j)()) || void 0 === SF || SF.send(ZF.b.QteResponse, {
              qteId: FF,
              qteResponse: WF
            }))
          }))
        }(WF.id, WF.Fv)
      })), (0, TF.h)(xW.L, (FF => {
        const WF = (0, oF.h)(xW.L, FF);
        "number" === typeof WF && XF.c.cancelQTE(WF)
      })), (0, TF.f)((() => {
        XF.c.reset(), PF.j.Uu("showPermanentBottomMessage", null, !0)
      })), (0, TF.h)(RF.Ob.EditItemCraftingRecipes, (FF => {
        const WF = (0, oF.k)(FF);
        (0, oF.d)(WF) && PF.j.Uu("craftingRecipesEdited", {
          itemName: WF.craftingRecipeItemName,
          recipesForItem: WF.recipesForItem
        })
      })), (0, TF.h)(xW.J, (FF => {
        const WF = (0, oF.h)(xW.J, FF);
        WF && PF.j.Uu("craftingRecipesEdited", {
          itemName: WF.I3,
          recipesForItem: []
        })
      })))
    }
    var JF = SF(37516);
    let pF = !1,
      lF = !1;

    function FW() {
      const FF = (0, hF.j)();
      if (null === FF || void 0 === FF || !FF.isSessionLive) return void(pF = !1);
      const WF = 0 !== (EF.m.playerFlags(FF.api.apiView, 0) & EF.ld.FreeCam);
      WF !== pF && (pF = WF, (0, JF.e)(WF))
    }
    var WW = SF(271),
      SW = SF(35498),
      CW = SF(1605);
    var AW = SF(38608),
      uW = SF(38615);

    function hW() {
      var FF, WF;
      return null !== (FF = null === (WF = (0, hF.j)()) || void 0 === WF ? void 0 : WF.itemBridgeSources) && void 0 !== FF ? FF : uW.e
    }

    function bS(FF) {
      return {
        current: () => hW().states[FF].current(),
        watch: WF => rW((SF => {
          const CF = SF.itemBridgeSources.states[FF];
          return WF(CF.current()), CF.watch(WF)
        }))
      }
    }

    function dW(FF) {
      return {
        watch: WF => rW((SF => SF.itemBridgeSources.events[FF].watch(WF)))
      }
    }
    const PW = {
      states: {
        inventory: bS("inventory"),
        hotbar: bS("hotbar"),
        crafting: bS("crafting"),
        heldItemAim: bS("heldItemAim")
      },
      events: {
        hotbarSlotRequested: dW("hotbarSlotRequested"),
        hotbarScrolled: dW("hotbarScrolled"),
        numberKeyPressed: dW("numberKeyPressed"),
        inventoryDropRequested: dW("inventoryDropRequested"),
        chestToggled: dW("chestToggled"),
        chestRefreshed: dW("chestRefreshed"),
        inventorySynced: dW("inventorySynced"),
        enchantingTableOpened: dW("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: FF => hW().commands.selectHotbarSlot(FF),
        removeInventoryItem: FF => hW().commands.removeInventoryItem(FF),
        swapInventorySlots: FF => hW().commands.swapInventorySlots(FF),
        moveInventoryItem: FF => hW().commands.moveInventoryItem(FF),
        quickMoveInventoryItem: FF => hW().commands.quickMoveInventoryItem(FF),
        closeChest: FF => hW().commands.closeChest(FF),
        focusCrafting: FF => hW().commands.focusCrafting(FF),
        craftRecipe: FF => hW().commands.craftRecipe(FF),
        salvageItem: FF => hW().commands.salvageItem(FF),
        enchantItem: FF => hW().commands.enchantItem(FF)
      },
      queries: {
        enchantingOffer: FF => hW().queries.enchantingOffer(FF)
      }
    };
    const RW = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let iS = !1;
    class eW {
      constructor() {
        this.target = RW, this.ah = EF.Rc, this.optionName = null, this.pickaxe = new dF.d
      }
      read(FF) {
        var WF, SF;
        const CF = EF.m.targetBlockId(FF.api.apiView, 0);
        CF !== this.ah && (this.ah = CF, this.optionName = CF === EF.Rc ? null : `${FF.tables.getMetaInfo(CF).rootName}CrosshairText`);
        const AF = null === this.optionName ? null : null !== (WF = FF.tables.getClientOption(this.optionName)) && void 0 !== WF ? WF : null;
        this.pickaxe.update(function(FF, WF) {
          var SF, CF, AF;
          if (0 === (EF.m.playerFlags(FF.api.apiView, 0) & EF.ld.Breaking) || WF === EF.Rc || 0 === WF) return null;
          const {
            tables: uF
          } = FF;
          if (!0 === uF.getClientOption("creative")) return null;
          const hF = uF.nameOfId(WF),
            bW = null === (SF = FF.items.yS()) || void 0 === SF ? void 0 : SF.name,
            dF = null !== (CF = uF.getItemStat(hF, "harvestLevel")) && void 0 !== CF ? CF : 0;
          return (0, WW.vc)({
            blockHarvestType: uF.getDefaultItemStat(hF, "harvestType"),
            blockHarvestLevel: uF.getDefaultItemStat(hF, "harvestLevel"),
            harvestLevel: dF,
            heldToolType: void 0 === bW ? void 0 : uF.getDefaultItemStat(bW, "harvests"),
            heldToolLevel: void 0 === bW ? void 0 : uF.getDefaultItemStat(bW, "level")
          }) && null !== (AF = SW.q[dF]) && void 0 !== AF ? AF : null
        }(FF, CF)), FF.watchPromptPick(iS);
        const uF = FF.promptEntity,
          hF = null === uF ? null : {
            label: null !== (SF = (0, AW.d)(uF, "interactionPrompt")) && void 0 !== SF ? SF : null
          };
        return this.target = (0, CW.q)(this.target, {
          interactPrompt: hF,
          blockText: AF,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let EW = null;
    const QW = {
      current: () => {
        var FF, WF;
        return null !== (FF = null === (WF = EW) || void 0 === WF ? void 0 : WF.target) && void 0 !== FF ? FF : RW
      },
      watch: FF => {
        const WF = new eW;
        EW = WF;
        const SF = rW((SF => {
          let CF = WF.read(SF);
          FF(CF);
          const AF = (0, uF.w)((() => {
            const AF = WF.read(SF);
            AF !== CF && (CF = AF, FF(AF))
          }));
          return () => {
            AF(), SF.watchPromptPick(!1)
          }
        }));
        return () => {
          SF(), EW === WF && (EW = null)
        }
      }
    };
    let rS = 0,
      gS = 0;
    const tS = {
        health: dF.p,
        aura: dF.h,
        hotbar: PW.states.hotbar,
        heldItemAim: PW.states.heldItemAim,
        crouching: gW((FF => function(FF) {
          const WF = () => 0 !== (EF.m.playerFlags(FF.apiView, 0) & EF.ld.Crouching);
          return {
            current: WF,
            watch(FF) {
              let SF = WF();
              return (0, uF.u)((() => {
                const CF = WF();
                CF !== SF && (SF = CF, FF(CF))
              }))
            }
          }
        }(FF.api).current), !1, (FF => (0, uF.u)(FF))),
        flight: gW((FF => () => function(FF) {
          const WF = EF.m.playerFlags(FF.apiView, 0);
          return (0, dF.o)(0 !== (WF & EF.ld.CanFly), 0 !== (WF & EF.ld.Flying))
        }(FF.api)), (0, dF.o)(!1, !1), (FF => (0, uF.u)(FF))),
        crosshairTarget: QW
      },
      TW = {
        hotbarSlotRequested: PW.events.hotbarSlotRequested,
        hotbarScrolled: PW.events.hotbarScrolled,
        numberKeyPressed: PW.events.numberKeyPressed,
        shotDamageToShow: (0, dF.s)((FF => !0 === (0, AW.d)(FF, "showDamageAmounts")))
      },
      aS = {
        selectHotbarSlot: PW.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: FF => {
          iS = "off" !== FF
        }
      },
      kS = {
        momentumFrac: function() {
          var FF, WF, SF;
          const CF = (0, hF.j)(),
            AF = performance.now(),
            uF = null === CF || void 0 === CF || null === (FF = CF.items.yS()) || void 0 === FF || null === (WF = FF.attributes) || void 0 === WF || null === (SF = WF.customAttributes) || void 0 === SF ? void 0 : SF.enchantments;
          return rS = null !== CF && null !== uF && void 0 !== uF && uF.Momentum ? 0 !== (EF.m.playerFlags(CF.api.apiView, 0) & EF.ld.Breaking) ? Math.max(0, EF.m.momentumFrac(CF.api.apiView, 0)) : Math.max(0, rS - (AF - gS) / 1500) : 0, gS = AF, rS
        }
      };
    var qS = SF(37558),
      VW = SF(1085),
      NW = SF(2477),
      DW = SF(35288),
      LW = SF(1175),
      mS = SF(3812),
      OW = SF(1939);
    let xS = null;

    function ZW(FF) {
      const WF = new Map,
        SF = SF => {
          if ("string" !== typeof SF) return;
          let CF = WF.get(SF);
          return void 0 === CF && (CF = FF(SF), void 0 !== CF && WF.set(SF, CF)), CF
        };
      return new Proxy({}, {
        get: (FF, WF) => SF(WF),
        has: (FF, WF) => void 0 !== SF(WF)
      })
    }

    function oW(FF) {
      const WF = (0, NW.b)(FF);
      return void 0 !== WF && (0, NW.f)(WF) === FF
    }

    function YW(FF) {
      var WF;
      const SF = null === (WF = (0, hF.j)()) || void 0 === WF ? void 0 : WF.tables;
      if (void 0 === SF || !oW(FF)) return;
      const CF = {
          displayName: SF.getDisplayName(FF)
        },
        AF = SF.getItemStat(FF, "description");
      void 0 !== AF && null !== AF && (CF.description = AF);
      const {
        rootName: uF
      } = SF.getMetaInfo(FF);
      uF !== FF && (CF.rootName = uF);
      const bW = SF.getItemStat(FF, "armourReduction");
      return void 0 !== bW && null !== bW && (CF.armourReduction = bW), CF
    }(0, hF.t)((FF => {
      xS = FF
    }));
    const MW = (0, CW.j)("DisplayName", "Description");

    function cS() {
      return Boolean(VF.d.get("useInventory") && VF.d.get("useFullInventory"))
    }
    let GW = null;
    const zS = {
        inventory: function() {
          const FF = PW.states.inventory;
          let WF = null;
          const SF = FF => {
            var SF;
            return null === FF.chest ? FF : ((null === (SF = WF) || void 0 === SF ? void 0 : SF.from) === FF && WF.chestVersion === IF() || (WF = {
              from: FF,
              chestVersion: IF(),
              view: {
                ...FF,
                chest: fF(FF.chest)
              }
            }), WF.view)
          };
          return {
            current: () => SF(FF.current()),
            watch: WF => FF.watch((FF => {
              WF(SF(FF))
            }))
          }
        }(),
        crafting: PW.states.crafting,
        stationItems: {
          current() {
            var FF;
            return (null === (FF = GW) || void 0 === FF ? void 0 : FF.namesVersion) !== (0, NW.g)() && (GW = {
              namesVersion: (0, NW.g)(),
              items: {
                enchantable: ZW((FF => {
                  const WF = (0, NW.b)(FF);
                  return void 0 !== WF && null !== xS && xS.enchantmentPerksOf(WF).length > 0 || void 0
                })),
                salvageable: ZW((FF => !(!oW(FF) || null === (0, DW.d)(FF)) || void 0))
              }
            }), GW.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let FF = null;
          const WF = () => {
            var WF;
            return (null === (WF = FF) || void 0 === WF ? void 0 : WF.namesVersion) !== (0, NW.g)() && (FF = {
              namesVersion: (0, NW.g)(),
              infos: ZW(YW)
            }), FF.infos
          };
          return {
            current: WF,
            watch: SF => (0, CW.t)((CF => {
              CF.some(MW) && (FF = null, SF(WF()))
            }))
          }
        }(),
        creativeVisibility: (0, CW.n)((function() {
          const FF = {};
          for (const uF of null !== (WF = null === (SF = xS) || void 0 === SF ? void 0 : SF.creativeItemIds()) && void 0 !== WF ? WF : []) {
            var WF, SF, CF, AF;
            const hF = (0, NW.f)(uF);
            if (void 0 === hF) continue;
            const bW = null !== (CF = VF.d.get((0, qS.f)(hF, "showInCreativeInven"))) && void 0 !== CF ? CF : null === (AF = xS) || void 0 === AF ? void 0 : AF.showInCreativeInvenOf(uF);
            "boolean" === typeof bW && (FF[hF] = bW)
          }
          return {
            publicLobby: (0, VW.L)((0, LW.e)().lobbyName),
            shownInGame: FF
          }
        }), ["connectedGameChanged"], (0, CW.j)("ShowInCreativeInven")),
        fullInventory: (0, CW.n)(cS, [], (0, CW.l)("useInventory", "useFullInventory"))
      },
      IW = {
        inventoryDropRequested: PW.events.inventoryDropRequested,
        chestToggled: PW.events.chestToggled,
        chestRefreshed: PW.events.chestRefreshed,
        inventorySynced: PW.events.inventorySynced,
        enchantingTableOpened: PW.events.enchantingTableOpened
      },
      fW = {
        removeInventoryItem: PW.commands.removeInventoryItem,
        swapInventorySlots: PW.commands.swapInventorySlots,
        moveInventoryItem: PW.commands.moveInventoryItem,
        quickMoveInventoryItem: PW.commands.quickMoveInventoryItem,
        closeChest: PW.commands.closeChest,
        setInventoryOpen(FF) {
          (0, mS.h)(OW.z.InventoryOpen, FF ? OW.z.InventoryOpen : 0)
        },
        focusCrafting: PW.commands.focusCrafting,
        craftRecipe: PW.commands.craftRecipe,
        salvageItem: PW.commands.salvageItem,
        enchantItem: PW.commands.enchantItem,
        changeIronChestPasskey(FF) {
          var WF;
          let {
            pos: SF,
            bR: CF
          } = FF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.ChangeIronChestPasskey, (0, ZF.f)({
            vY: SF,
            bR: CF
          }))
        },
        openIronChest(FF) {
          var WF;
          let {
            pos: SF,
            bR: CF
          } = FF;
          null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.OpenIronChest, (0, ZF.y)({
            vY: SF,
            bR: CF
          }))
        }
      },
      yS = {
        enchantingOffer: PW.queries.enchantingOffer
      };
    var sW = SF(1101),
      nW = SF(11),
      HW = SF(35009),
      KW = SF(7728),
      wW = SF(1475),
      XW = SF(3802);
    let UW = !1;

    function BW(FF) {
      UW = FF
    }

    function jS() {
      "inGame" !== nW.b.get("gameState") || (0, wW.n)() || PF.j.Uu("ctrlCrouchWithoutFullscreen")
    }
    let vS = !1;
    const JW = {
        OpenEmoteWheel: () => {
          BW(!0), vS = !0, queueMicrotask((() => {
            vS && (vS = !1, PF.j.Uu("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          PF.j.Uu("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, HW.e)() || PF.j.Uu("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, HW.e)() || PF.j.Uu("XKeyPressed")
        },
        CtrlCrouch: jS,
        "primary-fire": () => {
          PF.j.Uu("mouseState", {
            KU: sW.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          PF.j.Uu("mouseState", {
            KU: sW.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          PF.j.Uu("mouseState", {
            KU: sW.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      pW = {
        OpenEmoteWheel: () => {
          BW(!1), vS ? (vS = !1, (0, KW.c)() || PF.j.Uu("requestEmoteWheelHoldOpen")) : PF.j.Uu("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: jS,
        "primary-fire": () => {
          PF.j.Uu("mouseState", {
            KU: sW.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          PF.j.Uu("mouseState", {
            KU: sW.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          PF.j.Uu("mouseState", {
            KU: sW.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let lW = !1;

    function FS() {
      lW || (lW = !0, (0, XW.h)((FF => {
        if ((0, AF.b)()) return;
        const WF = (0, XW.g)(FF) ? "primary-fire" : FF.action;
        var SF;
        if (FF.down) {
          if (0 === (FF.flags & OW.e.Synthetic)) {
            var CF;
            null === (CF = JW[WF]) || void 0 === CF || CF.call(JW)
          }
        } else null === (SF = pW[WF]) || void 0 === SF || SF.call(pW)
      })))
    }
    var WS = SF(220),
      SS = SF(89),
      CS = SF(33),
      AS = SF(38620),
      uS = SF(37392);
    let hS = !1;
    const bC = {
      sendCodeCollab(FF) {
        var WF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.CodeCollab, (0, ZF.l)(FF), (0, uS.d)(FF))
      }
    };
    let dS = null,
      PS = !1,
      RS = null;

    function iC() {
      return "inGame" === nW.b.get("gameState") && !(0, HW.e)()
    }
    const eS = {
        OpenInventory: FF => {
          (0, wW.s)(FF, "inventory", cS())
        },
        OpenShop: FF => {
          dS && iC() && (0, wW.p)(FF, WS.n.SHOP, !dS.shopIsEmpty(VF.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: FF => {
          iC() && (0, wW.p)(FF, WS.n.LOBBY_LEADERBOARD, !!VF.d.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: FF => {
          var WF;
          const SF = null === (WF = dS) || void 0 === WF ? void 0 : WF.getClientGameMapKey();
          SF ? (0, wW.u)(FF, !0, SF) : (0, wW.s)(FF, "retentionFeatures", !(!VF.d.get("_tasks") && !VF.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: FF => {
          (0, wW.s)(FF, "inviteLink", SS.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: FF => {
          iC() && function(FF) {
            var WF;
            const SF = (0, hF.j)(),
              CF = null !== SF && void 0 !== SF && SF.isSessionLive ? SF.api : null,
              AF = CF ? CF.fD(CF.localId) : null,
              uF = null !== (WF = null === AF || void 0 === AF ? void 0 : AF.map((FF => Math.floor(FF)))) && void 0 !== WF ? WF : null;
            (0, wW.u)(FF, null !== uF && (0, uS.b)((0, LW.e)()), (() => {
              PF.j.Uu("EditLobbyCode", uF)
            }))
          }(FF)
        },
        HideUi: () => {
          PF.j.Uu("showUi", !1)
        }
      },
      ES = {
        HideUi: () => {
          PF.j.Uu("showUi", !0)
        }
      };

    function QS() {
      PS || (PS = !0, SF.e(140).then((() => SF(40460))).then((FF => {
        dS = FF
      }), (FF => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", FF)
      })), (0, AS.A)((FF => {
        FF || !(0, AS.i)() || (0, SS.isMobile)() || !CS.h.getItem("disableFullscreen") || (0, wW.l)() || nW.b.set({
          openEverythingMenuName: WS.n.SETTINGS
        })
      })), (0, XW.h)((FF => {
        let {
          action: WF,
          down: SF,
          press: CF
        } = FF;
        var uF, hF;
        (0, AF.b)() || (SF ? null === (uF = eS[WF]) || void 0 === uF || uF.call(eS, function(FF) {
          var WF;
          if (0 === FF || (null === (WF = RS) || void 0 === WF ? void 0 : WF.press) !== FF) {
            const WF = {
              press: FF,
              event: new Event("inputAction")
            };
            RS = WF, queueMicrotask((() => {
              RS === WF && (RS = null)
            }))
          }
          return RS.event
        }(CF)) : null === (hF = ES[WF]) || void 0 === hF || hF.call(ES))
      })))
    }
    var rC = SF(37365),
      gC = SF(37384),
      tC = SF(37368);
    const TS = {
      completeTask(FF) {
        var WF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.CompleteTask, (0, ZF.n)(FF))
      },
      setServerCookie(FF) {
        var WF;
        let {
          key: SF,
          value: CF
        } = FF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.GeneralCookieSet, (0, ZF.p)({
          nH: SF,
          UH: CF
        }))
      },
      answerUiRequest(FF) {
        var WF;
        let {
          id: SF,
          ND: CF
        } = FF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.UiRequestResp, (0, ZF.S)({
          HO: SF,
          vx: CF,
          iZ: 5
        }))
      },
      chooseRewardedAd(FF) {
        var WF;
        let {
          id: SF,
          ND: CF
        } = FF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.UiRequestResponded, (0, ZF.P)({
          id: SF,
          ND: CF
        }))
      },
      requestLeaderboard(FF) {
        var WF;
        let {
          category: SF,
          timeframe: CF,
          seeTop: AF
        } = FF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.LeaderboardRequest, {
          category: SF,
          timeframe: CF,
          seeTop: AF
        })
      }
    };
    let aC = !1;
    const kC = qW.h.RV / 2,
      qC = [kC, -kC, -kC, -kC, kC, kC, -kC, kC],
      VS = [0, 0, 0];

    function NS(FF, WF, SF) {
      for (let CF = 0; CF < FF.length; CF += 2)
        if (FF[CF] === WF && FF[CF + 1] === SF) return !0;
      return !1
    }
    const DS = {
      blocksStandingOn: function() {
        const FF = (0, hF.j)();
        if (null === FF) return [];
        const {
          api: WF,
          chunks: SF,
          tables: CF
        } = FF;
        if (!WF.readPosition(WF.localId, VS)) return [];
        const [AF, uF, bW] = VS, dF = Math.ceil(uF) - 1, PF = [], RF = [];
        for (let hF = 0; hF < qC.length; hF += 2) {
          const FF = AF + qC[hF],
            WF = bW + qC[hF + 1];
          if (Number.isInteger(FF) || Number.isInteger(WF)) continue;
          const uF = Math.floor(FF),
            iW = Math.floor(WF);
          if (NS(RF, uF, iW)) continue;
          const eF = SF.ah(uF, dF, iW);
          CF.isSolidBlockId(eF) && (RF.push(uF, iW), PF.push(CF.nameOfId(eF)))
        }
        return PF
      }
    };
    var LS = SF(35423),
      mC = SF(37454),
      OS = SF(1189);
    const xC = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      ZS = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function oS() {
      const FF = new Set;
      return {
        add: WF => (FF.add(WF), () => {
          FF.delete(WF)
        }),
        fire() {
          for (const WF of FF) WF()
        }
      }
    }
    const YS = Object.freeze([]);

    function MS(FF, WF) {
      let SF, {
        rereads: CF,
        followLocalId: AF
      } = WF;
      const hF = () => (SF = (0, CW.q)(SF, FF()), SF);
      return {
        current: hF,
        watch(FF) {
          const WF = (0, tW.e)((WF => {
            CF(WF) && FF(hF())
          }));
          if (!AF) return WF;
          let SF = QF();
          const bW = (0, uF.w)((() => {
            const WF = QF();
            WF !== SF && (SF = WF, FF(hF()))
          }));
          return () => {
            WF(), bW()
          }
        }
      }
    }
    const cC = {
        players: MS((function() {
          const FF = tW.i.ids(),
            WF = {};
          for (const uF of FF) {
            var SF, CF, AF;
            WF[uF] = {
              name: null !== (SF = tW.i.getName(uF)) && void 0 !== SF ? SF : null,
              ranks: null !== (CF = tW.i.getSetting(uF, "ranks")) && void 0 !== CF ? CF : YS,
              cosmetics: null !== (AF = (0, tW.k)(uF)) && void 0 !== AF ? AF : null
            }
          }
          return {
            ids: FF,
            byId: WF,
            localId: QF()
          }
        }), {
          rereads: FF => "roster" !== FF.kind || FF.members || FF.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: MS((function() {
          const FF = {};
          for (const AF of tW.i.ids()) {
            var WF, SF, CF;
            FF[AF] = {
              colour: null !== (WF = tW.i.getSetting(AF, "colorInLobbyLeaderboard")) && void 0 !== WF ? WF : null,
              values: null !== (SF = tW.i.getSetting(AF, "lobbyLeaderboardValues")) && void 0 !== SF ? SF : null,
              tags: null !== (CF = tW.i.getSetting(AF, "lobbyLeaderboardTags")) && void 0 !== CF ? CF : null
            }
          }
          return FF
        }), {
          rereads: function(FF) {
            if ("roster" !== FF.kind) return "reset" === FF.kind;
            const {
              members: WF,
              settings: SF
            } = FF;
            return WF || SF.has("colorInLobbyLeaderboard") || SF.has("lobbyLeaderboardValues") || SF.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      GS = {
        cosmeticsUpdated: {
          watch: FF => (0, tW.e)((WF => {
            if ("cosmetics" !== WF.kind) return;
            const SF = QF();
            FF(WF.updates.map((FF => {
              let {
                jFF: WF,
                ZD: CF,
                cL: AF
              } = FF;
              return {
                local: WF === SF,
                ZD: CF,
                cL: AF
              }
            })))
          }))
        }
      };
    var zC = SF(2241),
      IS = SF(1510),
      fS = SF(958),
      yC = SF(38627);
    let sS = !1,
      nS = null;
    const HS = {
      setShopOpen(FF) {
        var WF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.ShopMenuChanged, (0, ZF.H)(FF))
      },
      buyShopItem(FF) {
        var WF;
        let {
          categoryKey: SF,
          itemKey: CF,
          userInput: AF
        } = FF;
        null === (WF = (0, hF.j)()) || void 0 === WF || WF.send(ZF.b.ItemBought, {
          categoryKey: SF,
          itemKey: CF,
          shopVersion: VF.d.get("_shopVersion"),
          userInput: AF
        })
      }
    };
    let KS = !1;
    const wS = OW.z.LookFrozen | OW.z.ClicksSuppressed;

    function XS(FF, WF) {
      var SF;
      null !== (SF = (0, hF.j)()) && void 0 !== SF && SF.send(FF, WF) || console.warn(`[bloxd-wasm-client] message ${FF} not sent: no live game or the core's command ring is full`)
    }(0, TF.h)(xW.Z, (FF => {
      const WF = (0, oF.h)(xW.Z, FF);
      void 0 !== WF && PF.j.Uu("setDiscordReportKey", WF)
    }));
    const US = {
      ignorePlayer(FF) {
        XS(ZF.b.IgnoreUser, (0, ZF.t)({
          vU: FF
        }))
      },
      reportPlayer(FF) {
        let {
          playerId: WF,
          chatMsgId: SF,
          RC: CF,
          details: AF
        } = FF;
        XS(ZF.b.UserReport, (0, ZF.fb)({
          WU: WF,
          hU: SF,
          RC: CF,
          aY: AF
        }))
      },
      reportWorldCodeChat(FF) {
        let {
          chatMsgId: WF,
          RC: SF,
          details: CF
        } = FF;
        XS(ZF.b.UserReport, (0, ZF.fb)({
          WU: "",
          hU: WF,
          RC: SF,
          aY: CF
        }))
      },
      requestDiscordReportKey(FF) {
        XS(ZF.b.ReqDiscordReportKey, (0, ZF.C)(FF))
      },
      reportLobbyOrGame(FF) {
        let {
          target: WF,
          RC: SF,
          details: CF
        } = FF;
        "customGame" === WF ? XS(ZF.b.CustomGameReport, (0, ZF.o)({
          RC: SF,
          aY: CF
        })) : XS(ZF.b.LobbyReport, (0, ZF.w)({
          RC: SF,
          aY: CF
        }))
      },
      updateMyCosmetic(FF) {
        XS(ZF.b.UpdateMyCosmetic, (0, ZF.cb)(FF))
      },
      holdEmoteWheel(FF) {
        !FF || UW ? (0, mS.h)(wS, FF ? wS : 0) : PF.j.Uu("requestEmoteWheelHoldRelease")
      }
    };
    var BS = SF(38633),
      jC = SF(1587),
      vC = SF(38636);

    function JS() {
      const FF = (0, hF.j)();
      return !0 === (null === FF || void 0 === FF ? void 0 : FF.isCoreRunning) ? function(FF) {
        if (FF.queries.drawCensus() < EF.ub.BYTES) return [];
        const WF = FF.memoryData(FF.scratch(), EF.ub.BYTES, 4, "the draw census");
        if (null === WF) return [];
        const SF = EF.ub.terrainOpaque(WF, 0),
          CF = EF.ub.terrainTransparent(WF, 0),
          AF = EF.ub.earthSky(WF, 0),
          uF = EF.ub.skyMeshes(WF, 0),
          hF = EF.ub.regular(WF, 0),
          bW = EF.ub.thin(WF, 0),
          dF = EF.ub.line(WF, 0),
          PF = EF.ub.text(WF, 0),
          RF = EF.ub.particles(WF, 0);
        return [{
          label: "Drawn",
          value: `${SF+CF+AF+uF+hF+bW+dF+PF+RF}`
        }, {
          label: "Terrain",
          value: `${SF} opaque / ${CF} transparent (${EF.ub.terrainPack(WF,0)} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${hF} / ${bW}`
        }, {
          label: "Text / Lines",
          value: `${PF} / ${dF}`
        }, {
          label: "Sky / Particles",
          value: `${AF+uF} / ${RF}`
        }]
      }(FF.api) : []
    }
    var pS = SF(38638);
    var lS = SF(562),
      FC = SF(37748);

    function WC(FF) {
      if (null === FF || void 0 === FF || !FF.isCoreRunning) return null;
      const {
        api: WF,
        chunks: SF,
        items: CF,
        tables: AF
      } = FF;
      return {
        playerFeet() {
          const FF = WF.fD(WF.localId);
          return null !== FF && void 0 !== FF && FF.every(Number.isFinite) ? FF : null
        },
        chunkBlocks: FF => SF.isLoaded(FF[0], FF[1], FF[2]) ? (FF, WF, CF) => SF.ah(FF, WF, CF) : null,
        blockName: FF => AF.nameOfId(FF),
        inventory: () => ({
          slots: CF.playerItems().map((FF => FF ? {
            name: FF.name,
            amount: FF.amount
          } : null)),
          heldSlot: CF.selectedSlot
        }),
        nearby() {
          const SF = [];
          for (let AF = 0; AF < WF.idStr.length; AF++) {
            var CF;
            const uF = WF.idStr[AF],
              hF = WF.serverIds[AF],
              bW = WF.kinds[AF];
            if (null === uF || WF.isLocal(hF) || bW >>> EF.e !== EF.l.Lifeform) continue;
            const dF = WF.fD(hF),
              PF = lS.f[bW & EF.f];
            dF && void 0 !== PF && SF.push({
              kind: "Player" === PF ? "player" : PF,
              name: null !== (CF = FF.clientApi.getEntityName(uF)) && void 0 !== CF ? CF : null,
              position: dF
            })
          }
          return SF
        },
        droppedItems() {
          let FF = 0;
          for (let SF = 0; SF < WF.idStr.length; SF++) null !== WF.idStr[SF] && WF.kinds[SF] >>> EF.e === EF.l.Item && FF++;
          return FF
        }
      }
    }
    const SC = {
        worldCodeAiChunk: FF => Promise.resolve((0, FC.d)(WC((0, hF.j)()), FF)),
        worldCodeAiGameState: () => Promise.resolve((0, FC.f)(WC((0, hF.j)())))
      },
      CC = function(FF) {
        const WF = oS(),
          CF = oS(),
          AF = new Set,
          uF = new Set,
          hF = () => {
            var WF, SF;
            return null !== (WF = null === (SF = FF.runtime()) || void 0 === SF ? void 0 : SF.currentViewer) && void 0 !== WF ? WF : null
          };
        let bW = null,
          dF = null;
        const RF = (FF, WF) => ({
            current: FF,
            watch(SF) {
              let CF = FF();
              return WF.add((() => {
                const WF = FF();
                WF !== CF && (CF = WF, SF(WF))
              }))
            }
          }),
          eF = FF => ({
            watch: WF => (FF.add(WF), () => {
              FF.delete(WF)
            })
          }),
          EF = FF => {
            const WF = hF(),
              SF = null === WF || void 0 === WF ? void 0 : WF.view;
            WF && SF && WF.seek(Math.max(0, Math.min(SF.totalTicks - 1, SF.lF + FF * iW.Xc)))
          },
          QF = {
            replay: RF((() => {
              var FF;
              const WF = hF(),
                SF = null !== (FF = null === WF || void 0 === WF ? void 0 : WF.view) && void 0 !== FF ? FF : null;
              return null === WF || null === SF || SF.state === iW.Lc.None ? (bW = null, null) : (bW = (0, CW.q)(bW, {
                id: WF.id,
                lF: SF.lF,
                totalTicks: SF.totalTicks,
                LWF: iW.Xc,
                playing: SF.state === iW.Lc.Playing,
                speed: SF.speed,
                cameraMode: SF.cameraMode,
                freecam: "freecam" === SF.cameraMode
              }), bW)
            }), WF),
            replayEdits: RF((() => {
              var FF;
              const WF = hF(),
                SF = null !== (FF = null === WF || void 0 === WF ? void 0 : WF.view) && void 0 !== FF ? FF : null;
              return null === WF || null === SF || SF.state === iW.Lc.None ? (dF = null, null) : (dF = (0, CW.q)(dF, {
                cameraKeyframes: [...WF.keyframes],
                playbackMark: SF.mark,
                fileName: WF.fileName,
                unsavedChanges: WF.unsavedChanges,
                suggestSaveAs: WF.suggestSaveAs
              }), dF)
            }), WF),
            replayRecorder: RF((() => {
              var WF, SF;
              return null !== (WF = null === (SF = FF.runtime()) || void 0 === SF ? void 0 : SF.recorder.current) && void 0 !== WF ? WF : uW.e.states.replayRecorder.current()
            }), CF),
            replayVideoExporting: {
              current: mC.c,
              watch: FF => (0, PF.l)("replayViewer|videoExportChanged", (() => {
                FF((0, mC.c)())
              }))
            }
          },
          rW = {
            replayUiActionRequested: eF(uF),
            replayViewerRequested: eF(AF)
          },
          gW = FF => {
            for (const WF of AF) WF(FF)
          },
          tW = () => {
            var CF;
            !0 === (null === (CF = hF()) || void 0 === CF ? void 0 : CF.isOpen) && Promise.all([SF.e(79), SF.e(55)]).then((() => SF(40465))).then((SF => {
              let {
                startWasmReplayVideoExport: CF
              } = SF;
              return CF({
                viewer: hF,
                canvas: () => {
                  var WF, SF;
                  return null !== (WF = null === (SF = FF.canvas) || void 0 === SF ? void 0 : SF.call(FF)) && void 0 !== WF ? WF : null
                },
                watchViewer: WF.add,
                requestViewer: gW
              })
            }), (FF => {
              console.error("Couldn't load the video export", FF), OS.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((FF => {
              console.error("The video export failed", FF)
            }))
          },
          TF = {
            replayAction(FF) {
              if ((0, mC.c)()) return;
              const WF = hF();
              switch (FF) {
                case "replaySkipBack":
                  EF(-1);
                  break;
                case "replaySkipForward":
                  EF(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== WF && void 0 !== WF && WF.view && WF.setSpeed((0, LS.i)(WF.view.speed, "replaySpeedUp" === FF ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === WF || void 0 === WF || WF.addKeyframe()
              }
            },
            setReplayPlaying(FF) {
              var WF, SF;
              (0, mC.c)() || (FF ? null === (WF = hF()) || void 0 === WF || WF.play() : null === (SF = hF()) || void 0 === SF || SF.pause())
            },
            seekReplay(FF) {
              var WF;
              let {
                lF: SF,
                ignorePlaybackMark: CF
              } = FF;
              null === (WF = hF()) || void 0 === WF || WF.seek(SF, null !== CF && void 0 !== CF && CF)
            },
            setReplayCameraMode(FF) {
              var WF;
              null === (WF = hF()) || void 0 === WF || WF.setCameraMode(FF)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(FF) {
              var WF;
              null === (WF = hF()) || void 0 === WF || WF.setKeyframe(FF)
            },
            moveReplayCameraKeyframe(FF) {
              var WF;
              let {
                from: SF,
                to: CF
              } = FF;
              null === (WF = hF()) || void 0 === WF || WF.moveKeyframe(SF, CF)
            },
            deleteReplayCameraKeyframes(FF) {
              var WF;
              let {
                start: SF,
                end: CF
              } = FF;
              null === (WF = hF()) || void 0 === WF || WF.deleteKeyframes(SF, CF)
            },
            setReplayPlaybackMark(FF) {
              var WF;
              null === (WF = hF()) || void 0 === WF || WF.setMark(FF)
            },
            cropReplay(FF) {
              var WF, SF;
              let {
                start: CF,
                end: AF
              } = FF;
              return !(0, mC.c)() && (null !== (WF = null === (SF = hF()) || void 0 === SF ? void 0 : SF.crop(CF, AF)) && void 0 !== WF && WF)
            },
            holdReplayForShaderPackFailure(FF) {
              const WF = hF();
              WF && (WF.holdForShaderPackFailure(), function(FF) {
                Promise.all([SF.e(115), SF.e(122)]).then((() => SF(37547))).then((WF => {
                  let {
                    shaderPackPage: SF
                  } = WF;
                  SF.block(FF)
                })).catch((FF => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", FF)
                }))
              }(FF))
            },
            exportReplayVideo() {
              tW()
            },
            toggleRecording() {
              var WF;
              null === (WF = FF.runtime()) || void 0 === WF || WF.recorder.toggleRecording()
            },
            saveClip() {
              var WF;
              null === (WF = FF.runtime()) || void 0 === WF || WF.recorder.saveClip()
            },
            setRecorderPrefs(WF) {
              var SF;
              let {
                clipping: CF,
                clipSeconds: AF
              } = WF;
              null === (SF = FF.runtime()) || void 0 === SF || SF.recorder.setPrefs(CF, AF)
            },
            setReplayViewerOpen(WF) {
              var SF;
              (0, HW.g)(WF) && (null === (SF = FF.runtime()) || void 0 === SF || SF.recorder.viewerShown(WF))
            },
            recordFlyingMiddleText(WF) {
              var SF;
              let {
                content: CF,
                zp: AF,
                angle: uF,
                HJ: hF
              } = WF;
              null === (SF = FF.runtime()) || void 0 === SF || SF.recorder.recordFlyingText(JSON.stringify(CF), AF, uF, hF)
            },
            dragReplayCamera(WF) {
              var SF;
              let {
                dx: CF,
                dy: AF
              } = WF;
              null === (SF = FF.freecam()) || void 0 === SF || SF.drag(CF, AF)
            },
            moveReplayFreecam(WF) {
              var SF;
              null === (SF = FF.freecam()) || void 0 === SF || SF.move(WF)
            },
            holdReplayFreecamVertical(WF) {
              var SF;
              let {
                action: CF,
                yS: AF
              } = WF;
              null === (SF = FF.freecam()) || void 0 === SF || SF.holdVertical(CF, AF)
            }
          },
          aW = FF => {
            var WF;
            const SF = hF(),
              CF = null !== (WF = null === SF || void 0 === SF ? void 0 : SF.view) && void 0 !== WF ? WF : null;
            xC.has(FF) ? (FF => {
              for (const WF of uF) WF(FF)
            })(FF) : ZS.has(FF) ? TF.replayAction(FF) : "replayPlayPause" === FF ? SF && CF && CF.state !== iW.Lc.None && TF.setReplayPlaying(CF.state !== iW.Lc.Playing) : "replayChangeCameraMode" === FF ? null === SF || void 0 === SF || SF.cycleCameraMode() : "replayExit" === FF ? !0 === (null === SF || void 0 === SF ? void 0 : SF.inPlayback) && (0, LW.q)("/") : "replayExportVideo" === FF && tW()
          };
        let kW = !1;
        return {
          states: QF,
          events: rW,
          commands: TF,
          lookups: {
            replayCamera() {
              var WF, SF, CF;
              return !0 !== (null === (WF = hF()) || void 0 === WF ? void 0 : WF.isOpen) ? null : null !== (SF = null === (CF = FF.cameraView) || void 0 === CF ? void 0 : CF.call(FF)) && void 0 !== SF ? SF : null
            },
            leaveGameReloadsPage() {
              var FF;
              return !0 === (null === (FF = hF()) || void 0 === FF ? void 0 : FF.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var FF;
              const SF = !0 === (null === (FF = hF()) || void 0 === FF ? void 0 : FF.inPlayback);
              SF !== kW && (kW = SF, PF.j.Uu("connectedGameChanged")), WF.fire()
            },
            recorderChanged: CF.fire,
            keyDown: FF => {
              var WF;
              switch (FF) {
                case "recordGame":
                  return void TF.toggleRecording();
                case "recordClip":
                  return void((0, HW.e)() || TF.saveClip())
              }(0, mC.c)() || ("replayViewerOpen" !== FF ? FF.startsWith("replay") && ((0, HW.e)() || !0 === (null === (WF = hF()) || void 0 === WF ? void 0 : WF.inPlayback)) && aW(FF) : gW("toggle"))
            }
          }
        }
      }({
        runtime: AF.l,
        cameraView: () => {
          var FF;
          const WF = null === (FF = (0, hF.j)()) || void 0 === FF ? void 0 : FF.renderFrame;
          if (!WF) return null;
          const [SF, CF, AF] = WF.cameraPosition, [uF, bW, dF] = WF.cameraDirection;
          return {
            position: [SF, CF, AF],
            direction: [uF, bW, dF]
          }
        },
        canvas: () => {
          var FF, WF, SF;
          return null !== (FF = null === (WF = (SF = (0, uF.I)()).canvas) || void 0 === WF ? void 0 : WF.call(SF)) && void 0 !== FF ? FF : null
        },
        freecam: AF.h
      }),
      AC = {
        states: {
          ...tS,
          ...zS,
          ...CC.states,
          ...cC
        },
        events: {
          ...TW,
          ...aW,
          ...IW,
          ...HF.d,
          ...BS.i,
          ...CC.events,
          ...GS,
          ...sF
        },
        commands: {
          ...mW,
          ...aS,
          ...kW,
          ...fW,
          ...TS,
          ...US,
          ...nF,
          ...bC,
          ...CC.commands,
          ...HS
        },
        queries: {
          ...yS,
          ...SC
        },
        lookups: {
          ...kS,
          ...BF,
          ...BS.k,
          ...CC.lookups,
          ...LF,
          ...DS
        }
      };

    function uC() {
      (0, bW.g)(TF.l), (0, AF.p)(CC.feed), (0, HF.g)(), aC || (aC = !0, (0, TF.h)(xW.i, (FF => {
        const WF = (0, oF.h)(xW.i, FF);
        "string" === typeof WF && Promise.resolve().then((() => SF(2836))).then((FF => {
          let {
            onCosmeticPackGranted: SF
          } = FF;
          SF(WF)
        }))
      })), (0, TF.h)(xW.S, (FF => {
        const WF = (0, oF.h)(xW.S, FF);
        "number" === typeof WF && PF.j.Uu("serverUpdating", Date.now() + WF, !0)
      })), (0, TF.h)(xW.y, (FF => {
        const WF = (0, oF.h)(xW.y, FF);
        if ((0, oF.d)(WF)) {
          const {
            Z2: FF,
            W4: SF
          } = WF;
          (0, gC.b)({
            Z2: "string" === typeof FF ? FF : null,
            W4: "string" === typeof SF ? SF : null
          })
        }
      })), (0, TF.h)(RF.Ob.NewUiRequest, (FF => {
        const WF = (0, oF.k)(FF);
        (0, oF.d)(WF) && "number" === typeof WF.id && (0, oF.d)(WF.clientParameters) && (0, tC.c)(WF.id, WF.clientParameters)
      })), (0, TF.h)(xW.M, (FF => {
        const WF = (0, oF.h)(xW.M, FF);
        "number" === typeof WF && (0, tC.g)(WF)
      })), (0, TF.h)(RF.Ob.UiRequestPopup, (FF => {
        const WF = (0, oF.k)(FF);
        if ((0, oF.d)(WF) && "number" === typeof WF.id && "string" === typeof WF.text) {
          const FF = WF.id;
          (0, tC.k)(FF, WF.text, (WF => {
            TS.answerUiRequest({
              id: FF,
              ND: WF
            })
          }))
        }
      })), (0, TF.h)(RF.Ob.TopRightHelper, (FF => {
        const WF = (0, oF.k)(FF);
        void 0 !== WF && PF.j.Uu("TopRightHelper", WF, !0)
      })), (0, TF.h)(RF.Ob.TaskProgress, (FF => {
        const WF = (0, oF.k)(FF);
        (0, oF.d)(WF) && "string" === typeof WF.taskId && "number" === typeof WF.progress && (0, rC.b)({
          taskId: WF.taskId,
          progress: WF.progress
        })
      }))), KS || (KS = !0, (0, TF.h)(xW.n, (FF => {
        const WF = (0, oF.h)(xW.n, FF);
        (0, oF.d)(WF) && PF.j.Uu("showShopFromServer", {
          toggle: WF.aFF,
          kFF: WF.kFF
        }, !0)
      })), (0, TF.h)(RF.Ob.OverShopInfo, (FF => {
        const WF = (0, oF.k)(FF);
        (0, oF.d)(WF) && PF.j.Uu("overShopInfo", WF.info, !0)
      })), (0, TF.h)(RF.Ob.ShowShopTutorial, (() => {
        PF.j.Uu("showShopTutorial", null, !0)
      }))), sS || (sS = !0, (0, TF.f)((() => {
        var FF;
        (0, zC.D)(), null === (FF = nS) || void 0 === FF || FF(), nS = (0, TF.d)() ? (0, fS.c)(TF.d) : null
      })), (0, TF.h)(RF.Ob.SetCookie, (FF => {
        const WF = (0, oF.k)(FF),
          SF = (0, LW.e)().gameNameWithVariation;
        (0, oF.d)(WF) && "string" === typeof WF.key && null !== SF && (0, IS.setCookie)(SF, WF.key, WF.value)
      })), (0, TF.h)(RF.Ob.LeaveValues, (FF => {
        const WF = (0, oF.k)(FF);
        if ((0, oF.d)(WF) && "string" === typeof WF.leaveEventType) {
          const {
            leaveEventType: FF,
            category: SF,
            subCategory: CF,
            value: AF
          } = WF;
          (0, zC.F)({
            leaveEventType: FF,
            category: SF,
            subCategory: CF,
            value: AF
          })
        }
      })), (0, TF.h)(RF.Ob.CustomAnalyticsEvent, (FF => {
        const WF = (0, oF.k)(FF);
        if ((0, oF.d)(WF) && "string" === typeof WF.cat1) {
          const {
            cat1: FF,
            cat2: SF,
            cat3: CF,
            value: AF
          } = WF;
          (0, zC.n)({
            cat1: FF,
            cat2: SF,
            cat3: CF,
            value: AF
          })
        }
      })), (0, TF.h)(RF.Ob.ProgressionEvent, (FF => {
        const WF = (0, oF.k)(FF);
        if ((0, oF.d)(WF)) {
          const {
            type: FF,
            location1: SF,
            location2: CF,
            location3: AF,
            score: uF
          } = WF;
          (0, zC.u)({
            type: FF,
            location1: SF,
            location2: CF,
            location3: AF,
            score: uF
          })
        }
      })), (0, TF.h)(RF.Ob.ResourceEvent, (FF => {
        const WF = (0, oF.k)(FF);
        if ((0, oF.d)(WF)) {
          const {
            type: FF,
            resourceType: SF,
            amount: CF,
            category: AF,
            itemName: uF
          } = WF;
          (0, zC.y)({
            type: FF,
            resourceType: SF,
            amount: CF,
            category: AF,
            itemName: uF
          })
        }
      })), (0, TF.h)(RF.Ob.LeaderboardResponse, (FF => {
        const WF = (0, oF.k)(FF);
        if ((0, oF.d)(WF)) {
          const {
            category: FF,
            timeframe: SF,
            data: CF
          } = WF;
          PF.j.Uu("leaderboardResponse", {
            category: FF,
            timeframe: SF,
            data: CF
          })
        }
      })), (0, TF.h)(xW.u, (FF => {
        const WF = (0, oF.h)(xW.u, FF);
        "string" === typeof WF && (0, yC.b)(FF.conn, WF)
      })), (0, TF.h)(xW.v, (FF => {
        const WF = (0, oF.h)(xW.v, FF);
        "string" === typeof WF && console.error(`[logErrorToConsole]: ${WF}`)
      }))), vW(), (0, BS.c)(), hS || (hS = !0, (0, TF.h)(xW.h, (FF => {
        const WF = (0, oF.h)(xW.h, FF);
        void 0 !== WF && (0, uS.e)(WF)
      }))), QS(), FS(), lF || (lF = !0, (0, uF.u)(FW)), CF.gameBridge.attach(AC), (0, CF.installPageSources)({
        commands: {
          ...CF.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: vC.l
        },
        queries: pS.wasmIconQueries,
        lookups: {
          ...CF.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...pS.wasmIconLookups,
          lD: vC.d,
          drawCallStats: JS
        }
      }), (0, jC.b)(), (0, pS.loadIcons)()
    }
  },
  38649: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      g: () => bW
    });
    var CF = SF(38653);
    let AF = null,
      uF = null;

    function hF() {
      return AF ??= SF.e(50).then((() => SF(40485))).catch((FF => {
        throw AF = null, FF
      })), AF
    }

    function bW() {
      return uF ??= Promise.all([hF(), (0, CF.c)()]).then((FF => {
        let [WF] = FF;
        return WF
      }), (FF => {
        throw uF = null, FF
      })), uF
    }
  },
  35520: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    const CF = {
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
  37435: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      h: () => AF
    });
    const CF = ["description", "label"];

    function AF(FF) {
      const WF = FF.type;
      return {
        type: WF,
        params: FF[WF]
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);