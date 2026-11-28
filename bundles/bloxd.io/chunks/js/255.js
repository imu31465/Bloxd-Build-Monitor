export const id = 255;
export const ids = [255];
export const modules = {
  41112: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => Hb
    });
    const eb = "The world isn't loaded, so no blocks can be seen.",
      Hb = "The world isn't loaded, so nothing in it can be seen."
  },
  40427: (bb, wb, Mb) => {
    function eb(bb) {
      return !(!bb.lobbyLeaderboardInfo && !bb.lobbyManage)
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  38019: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => eb
    });
    const eb = 3,
      Hb = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  38024: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = () => null;

    function Hb(bb) {
      eb = bb
    }

    function pb(bb, wb) {
      return eb(bb, wb)
    }
  },
  42270: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Eb,
      g: () => mb,
      k: () => sb,
      o: () => Fb
    });
    var eb = Mb(29),
      Hb = Mb(42272),
      pb = Mb(42263),
      Vb = Mb(42274),
      gb = Mb(42266),
      lb = Mb(42277),
      Lb = Mb(42295);

    function Ib(bb) {
      var wb, Mb;
      const eb = (0, pb.m)();
      return eb ? null === (wb = (0, Hb.e)(eb.api, bb[0], bb[1], bb[2])) || void 0 === wb || null === (Mb = wb.persisted) || void 0 === Mb ? void 0 : Mb.shared : void 0
    }

    function Ob(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    const Ub = new Map;
    let tb = null,
      Cb = 0;

    function Eb() {
      return Cb
    }

    function Fb(bb) {
      const wb = null !== tb && tb.key === Ob(bb.pos) ? tb.type : null;
      if (null === wb) return bb;
      let Mb = null;
      if ("Iron" === wb) {
        const {
          cachedPasskey: wb,
          ...eb
        } = Bb(bb.pos);
        Mb = {
          kg: null !== wb && void 0 !== wb ? wb : [0, 0, 0, 0],
          ...eb
        }
      }
      return {
        ...bb,
        type: wb,
        ironChest: Mb
      }
    }

    function Bb(bb) {
      const wb = Ib(bb),
        Mb = null === wb || void 0 === wb ? void 0 : wb.ownerDbId,
        eb = function(bb) {
          var wb;
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ib(bb);
          const eb = Ob(bb),
            Hb = Ub.get(eb);
          return Hb ? Hb.lastOpened < (null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.passkeyLastUpdated) && void 0 !== wb ? wb : 0) ? (Ub.delete(eb), null) : [...Hb.kg] : null
        }(bb, wb);
      return void 0 === Mb ? {
        cachedPasskey: eb
      } : {
        ownerDbId: Mb,
        cachedPasskey: eb
      }
    }(0, Lb.m)(Vb.b, (bb => {
      const wb = (0, lb.d)(Vb.b, bb);
      if (!(0, lb.c)(wb) || wb.uH) return;
      if (Cb++, !wb.QH || null === wb.aH) return void(tb = null);
      const Mb = Ob(wb.aH);
      tb = {
        key: Mb,
        type: wb.qH
      }, null !== wb.iH && Ub.set(Mb, {
        kg: [...wb.iH],
        lastOpened: Date.now()
      })
    })), (0, Lb.f)((() => {
      Ub.clear(), tb = null, Cb++
    })), (0, Lb.i)((() => {
      null !== tb && (tb = null, Cb++, eb.k.iI("chestToggleFromServer", !1, !0))
    }));
    const sb = {
        boardEditRequested: {
          watch: bb => (0, eb.o)("EditBoard", (wb => {
            let {
              pos: Mb
            } = wb;
            if (null === Mb) return void bb(null);
            const eb = (0, pb.m)(),
              Hb = (0, pb.z)();
            eb && Hb && bb(Hb.readBoardToEdit(eb.api, eb.chunks, Mb))
          }))
        },
        ironChestOpenRequested: {
          watch: bb => (0, eb.o)("OpenIronChest", (wb => {
            let {
              pos: Mb
            } = wb;
            bb(function(bb) {
              return {
                pos: bb,
                ...Bb(bb)
              }
            }(Mb))
          }))
        }
      },
      mb = {
        writeOnBoard(bb) {
          var wb;
          let {
            pos: Mb,
            text: eb,
            Hl: Hb,
            textSize: Vb
          } = bb;
          null === (wb = (0, pb.m)()) || void 0 === wb || wb.send(gb.c.UpdateBoard, (0, gb.X)({
            Ml: Mb,
            el: eb,
            Hl: Hb,
            pl: Vb
          }))
        },
        writeBook(bb) {
          var wb;
          let {
            pages: Mb,
            title: eb,
            published: Hb
          } = bb;
          null === (wb = (0, pb.m)()) || void 0 === wb || wb.send(gb.c.UpdateBook, (0, gb.Z)({
            OI: Mb,
            UI: eb,
            tI: Hb
          }))
        },
        writeNameTag(bb) {
          var wb;
          null === (wb = (0, pb.m)()) || void 0 === wb || wb.send(gb.c.UpdateNameTag, bb)
        },
        setCustomLobbyBlock(bb) {
          let {
            pos: wb,
            blockName: Mb
          } = bb;
          const eb = (0, pb.z)(),
            Hb = (0, pb.m)();
          eb && Hb && Hb.send(gb.c.SetCustomLobbyBlock, (0, gb.K)({
            Lg: eb.blockIdOf(Mb),
            lg: wb
          }))
        }
      }
  },
  42316: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      d: () => Vb,
      h: () => gb
    });
    var eb = Mb(42253),
      Hb = Mb(5672),
      pb = Mb(42263);

    function Vb() {
      var bb;
      const wb = null === (bb = (0, pb.m)()) || void 0 === bb ? void 0 : bb.api.localId;
      return void 0 === wb || wb === eb.Sc ? null : String(wb)
    }

    function gb(bb) {
      const wb = (0, pb.m)();
      if (null !== wb) return bb(wb);
      let Mb = null;
      const eb = (0, Hb.w)((() => {
        const wb = (0, pb.m)();
        null !== wb && null === Mb && (eb(), Mb = bb(wb))
      }));
      return () => {
        var bb;
        eb(), null === (bb = Mb) || void 0 === bb || bb()
      }
    }

    function lb(bb, wb, Mb) {
      return {
        current: () => {
          const Mb = (0, pb.m)();
          return null === Mb ? wb : bb(Mb)()
        },
        watch: wb => gb((eb => {
          const Hb = bb(eb);
          let pb = Hb();
          return wb(pb), Mb((() => {
            const bb = Hb();
            bb !== pb && (pb = bb, wb(bb))
          }))
        }))
      }
    }
  },
  42307: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(42263),
      Hb = Mb(42316),
      pb = Mb(42324);

    function Vb() {
      var bb, wb;
      return null !== (bb = null === (wb = (0, eb.m)()) || void 0 === wb ? void 0 : wb.itemBridgeSources) && void 0 !== bb ? bb : pb.e
    }

    function gb(bb) {
      return {
        current: () => Vb().states[bb].current(),
        watch: wb => (0, Hb.h)((Mb => {
          const eb = Mb.itemBridgeSources.states[bb];
          return wb(eb.current()), eb.watch(wb)
        }))
      }
    }

    function lb(bb) {
      return {
        watch: wb => (0, Hb.h)((Mb => Mb.itemBridgeSources.events[bb].watch(wb)))
      }
    }
    const Lb = {
      states: {
        inventory: gb("inventory"),
        hotbar: gb("hotbar"),
        crafting: gb("crafting"),
        heldItemAim: gb("heldItemAim")
      },
      events: {
        hotbarSlotRequested: lb("hotbarSlotRequested"),
        hotbarScrolled: lb("hotbarScrolled"),
        numberKeyPressed: lb("numberKeyPressed"),
        inventoryDropRequested: lb("inventoryDropRequested"),
        chestToggled: lb("chestToggled"),
        chestRefreshed: lb("chestRefreshed"),
        inventorySynced: lb("inventorySynced"),
        enchantingTableOpened: lb("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: bb => Vb().commands.selectHotbarSlot(bb),
        removeInventoryItem: bb => Vb().commands.removeInventoryItem(bb),
        swapInventorySlots: bb => Vb().commands.swapInventorySlots(bb),
        moveInventoryItem: bb => Vb().commands.moveInventoryItem(bb),
        quickMoveInventoryItem: bb => Vb().commands.quickMoveInventoryItem(bb),
        closeChest: bb => Vb().commands.closeChest(bb),
        focusCrafting: bb => Vb().commands.focusCrafting(bb),
        craftRecipe: bb => Vb().commands.craftRecipe(bb),
        salvageItem: bb => Vb().commands.salvageItem(bb),
        enchantItem: bb => Vb().commands.enchantItem(bb)
      },
      queries: {
        enchantingOffer: bb => Vb().queries.enchantingOffer(bb)
      }
    }
  },
  42324: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb
    });
    var eb = Mb(41112),
      Hb = Mb(38019);

    function pb(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function Vb() {}
    const gb = Object.freeze([0, 0, 0]),
      lb = {
        states: {
          health: pb({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: pb({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: pb({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: pb({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: pb({}),
          creativeVisibility: pb({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: pb(null),
          heldItemAim: pb({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: pb(!1),
          gliderBoostFuel: pb(0),
          flight: pb({
            canFly: !1,
            flying: !1
          }),
          crafting: pb({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: pb({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: pb({}),
          fullInventory: pb(!1),
          crosshairTarget: pb({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: pb(!0),
          freeCamera: pb({
            allowed: !1,
            movesFly: !1
          }),
          replay: pb(null),
          replayEdits: pb(null),
          replayRecorder: pb(Hb.c),
          replayVideoExporting: pb(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          chatRemoved: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: Vb,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Vb,
          setInventoryOpen: Vb,
          changeIronChestPasskey: Vb,
          dragReplayCamera: Vb,
          applyTemporaryThirdPerson: Vb,
          holdEmoteWheel: Vb,
          recordFlyingMiddleText: Vb,
          focusCrafting: Vb,
          craftRecipe: () => ({
            Bg: 0,
            aI: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Vb,
          setShopOpen: Vb,
          buyShopItem: Vb,
          lobbyManage: Vb,
          sendChatMessage: () => !1,
          ignorePlayer: Vb,
          reportPlayer: Vb,
          reportWorldCodeChat: Vb,
          requestDiscordReportKey: Vb,
          reportLobbyOrGame: Vb,
          playEmote: Vb,
          updateMyCosmetic: Vb,
          writeOnBoard: Vb,
          writeBook: Vb,
          writeNameTag: Vb,
          setCustomLobbyBlock: Vb,
          openIronChest: Vb,
          sendCodeCollab: Vb,
          clickCodeBlock: Vb,
          bindCustomButtonKeys: Vb,
          pressCustomButton: Vb,
          moveReplayFreecam: Vb,
          holdReplayFreecamVertical: Vb,
          respawn: Vb,
          wakeUp: Vb,
          requestLeaderboard: Vb,
          completeTask: Vb,
          setServerCookie: Vb,
          answerUiRequest: Vb,
          chooseRewardedAd: Vb,
          setCameraZoom: Vb,
          setFreeCameraMovesFly: Vb,
          setBlockHighlight: Vb,
          setCrosshairInteractPrompt: Vb,
          setLookSensitivity: Vb,
          replayAction: Vb,
          setReplayPlaying: Vb,
          seekReplay: Vb,
          setReplayCameraMode: Vb,
          syncReplayCameraMode: Vb,
          setReplayCameraKeyframe: Vb,
          moveReplayCameraKeyframe: Vb,
          deleteReplayCameraKeyframes: Vb,
          setReplayPlaybackMark: Vb,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Vb,
          exportReplayVideo: Vb,
          toggleRecording: Vb,
          saveClip: Vb,
          setRecorderPrefs: Vb,
          setReplayViewerOpen: Vb
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => eb.d,
          worldCodeAiGameState: () => eb.e
        },
        lookups: {
          localPos: () => gb,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  42258: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Kb,
      f: () => jb,
      j: () => rb,
      m: () => xb,
      n: () => zb
    });
    var eb = Mb(40602),
      Hb = Mb(1301),
      pb = Mb(2167),
      Vb = Mb(2175),
      gb = Mb(4659),
      lb = Mb(38024),
      Lb = Mb(1447),
      Ib = Mb(42263),
      Ob = Mb(5706),
      Ub = Mb(3470),
      tb = Mb(42266),
      Cb = Mb(42270),
      Eb = Mb(42307);
    let Fb = null;

    function Bb(bb) {
      const wb = new Map,
        Mb = Mb => {
          if ("string" !== typeof Mb) return;
          let eb = wb.get(Mb);
          return void 0 === eb && (eb = bb(Mb), void 0 !== eb && wb.set(Mb, eb)), eb
        };
      return new Proxy({}, {
        get: (bb, wb) => Mb(wb),
        has: (bb, wb) => void 0 !== Mb(wb)
      })
    }

    function sb(bb) {
      const wb = (0, gb.c)(bb);
      return void 0 !== wb && (0, gb.g)(wb) === bb
    }

    function mb(bb) {
      var wb;
      const Mb = null === (wb = (0, Ib.m)()) || void 0 === wb ? void 0 : wb.tables;
      if (void 0 === Mb || !sb(bb)) return;
      const eb = {
          displayName: Mb.getDisplayName(bb)
        },
        Hb = Mb.getItemStat(bb, "description");
      void 0 !== Hb && null !== Hb && (eb.description = Hb);
      const {
        rootName: pb
      } = Mb.getMetaInfo(bb);
      pb !== bb && (eb.rootName = pb);
      const Vb = Mb.getItemStat(bb, "armourReduction");
      return void 0 !== Vb && null !== Vb && (eb.armourReduction = Vb), eb
    }(0, Ib.D)((bb => {
      Fb = bb
    }));
    const hb = (0, Vb.e)("DisplayName", "Description");

    function zb() {
      return Boolean(pb.c.get("useInventory") && pb.c.get("useFullInventory"))
    }
    let Xb = null;
    const xb = {
        inventory: function() {
          const bb = Eb.d.states.inventory;
          let wb = null;
          const Mb = bb => {
            var Mb;
            return null === bb.chest ? bb : ((null === (Mb = wb) || void 0 === Mb ? void 0 : Mb.from) === bb && wb.chestVersion === (0, Cb.e)() || (wb = {
              from: bb,
              chestVersion: (0, Cb.e)(),
              view: {
                ...bb,
                chest: (0, Cb.o)(bb.chest)
              }
            }), wb.view)
          };
          return {
            current: () => Mb(bb.current()),
            watch: wb => bb.watch((bb => {
              wb(Mb(bb))
            }))
          }
        }(),
        crafting: Eb.d.states.crafting,
        stationItems: {
          current() {
            var bb;
            return (null === (bb = Xb) || void 0 === bb ? void 0 : bb.namesVersion) !== (0, gb.i)() && (Xb = {
              namesVersion: (0, gb.i)(),
              items: {
                enchantable: Bb((bb => {
                  const wb = (0, gb.c)(bb);
                  return void 0 !== wb && null !== Fb && Fb.enchantmentPerksOf(wb).length > 0 || void 0
                })),
                salvageable: Bb((bb => !(!sb(bb) || null === (0, lb.d)(bb)) || void 0))
              }
            }), Xb.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let bb = null;
          const wb = () => {
            var wb;
            return (null === (wb = bb) || void 0 === wb ? void 0 : wb.namesVersion) !== (0, gb.i)() && (bb = {
              namesVersion: (0, gb.i)(),
              infos: Bb(mb)
            }), bb.infos
          };
          return {
            current: wb,
            watch: Mb => (0, Vb.o)((eb => {
              eb.some(hb) && (bb = null, Mb(wb()))
            }))
          }
        }(),
        creativeVisibility: (0, Vb.l)((function() {
          const bb = {};
          for (const Hb of null !== (wb = null === (Mb = Fb) || void 0 === Mb ? void 0 : Mb.creativeItemIds()) && void 0 !== wb ? wb : []) {
            var wb, Mb, Vb, lb;
            const Lb = (0, gb.g)(Hb);
            if (void 0 === Lb) continue;
            const Ib = null !== (Vb = pb.c.get((0, eb.f)(Lb, "showInCreativeInven"))) && void 0 !== Vb ? Vb : null === (lb = Fb) || void 0 === lb ? void 0 : lb.showInCreativeInvenOf(Hb);
            "boolean" === typeof Ib && (bb[Lb] = Ib)
          }
          return {
            publicLobby: (0, Hb.E)((0, Lb.e)().lobbyName),
            shownInGame: bb
          }
        }), ["connectedGameChanged"], (0, Vb.e)("ShowInCreativeInven")),
        fullInventory: (0, Vb.l)(zb, [], (0, Vb.i)("useInventory", "useFullInventory"))
      },
      jb = {
        inventoryDropRequested: Eb.d.events.inventoryDropRequested,
        chestToggled: Eb.d.events.chestToggled,
        chestRefreshed: Eb.d.events.chestRefreshed,
        inventorySynced: Eb.d.events.inventorySynced,
        enchantingTableOpened: Eb.d.events.enchantingTableOpened
      },
      Kb = {
        removeInventoryItem: Eb.d.commands.removeInventoryItem,
        swapInventorySlots: Eb.d.commands.swapInventorySlots,
        moveInventoryItem: Eb.d.commands.moveInventoryItem,
        quickMoveInventoryItem: Eb.d.commands.quickMoveInventoryItem,
        closeChest: Eb.d.commands.closeChest,
        setInventoryOpen(bb) {
          (0, Ob.h)(Ub.y.InventoryOpen, bb ? Ub.y.InventoryOpen : 0)
        },
        focusCrafting: Eb.d.commands.focusCrafting,
        craftRecipe: Eb.d.commands.craftRecipe,
        salvageItem: Eb.d.commands.salvageItem,
        enchantItem: Eb.d.commands.enchantItem,
        changeIronChestPasskey(bb) {
          var wb;
          let {
            pos: Mb,
            kg: eb
          } = bb;
          null === (wb = (0, Ib.m)()) || void 0 === wb || wb.send(tb.c.ChangeIronChestPasskey, (0, tb.g)({
            aH: Mb,
            kg: eb
          }))
        },
        openIronChest(bb) {
          var wb;
          let {
            pos: Mb,
            kg: eb
          } = bb;
          null === (wb = (0, Ib.m)()) || void 0 === wb || wb.send(tb.c.OpenIronChest, (0, tb.E)({
            aH: Mb,
            kg: eb
          }))
        }
      },
      rb = {
        enchantingOffer: Eb.d.queries.enchantingOffer
      }
  },
  42303: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => Ib,
      i: () => Vb,
      j: () => Hb,
      m: () => gb,
      o: () => Lb
    });
    class eb extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Hb(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }
    const pb = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Vb(bb) {
      var wb;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof eb || Hb(bb) && pb.test(null !== (wb = bb.stack) && void 0 !== wb ? wb : "")
    }

    function gb(bb, wb) {
      if (Vb(bb)) throw bb;
      console.error(wb, bb)
    }

    function lb(bb, wb, Mb, Hb, pb) {
      if (wb % Hb !== 0 || wb + Mb > bb.byteLength) throw new eb(`${pb}: ${Mb} bytes at ${wb}, ${Hb}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function Lb(bb, wb, Mb, eb, Hb) {
      return 0 === Mb ? null : (lb(wb, Mb, eb * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Hb), new bb(wb, Mb, eb))
    }

    function Ib(bb, wb, Mb, eb, Hb) {
      return 0 === wb ? null : (lb(bb, wb, Mb, eb, Hb), new DataView(bb, wb, Mb))
    }
  },
  42263: (bb, wb, Mb) => {
    Mb.d(wb, {
      D: () => Ob,
      F: () => Cb,
      e: () => eb,
      i: () => Bb,
      m: () => Eb,
      p: () => Fb,
      s: () => Ub,
      w: () => tb,
      z: () => Ib
    });
    class eb extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Hb = null,
      pb = null,
      Vb = null;
    const gb = [];
    let lb = null;

    function Lb(bb, wb) {
      try {
        bb(wb)
      } catch (Mb) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Mb)
      }
    }

    function Ib() {
      return lb
    }

    function Ob(bb) {
      gb.push(bb), null !== lb && Lb(bb, lb)
    }

    function Ub(bb) {
      return Hb ??= Promise.all([Mb.e(85), Mb.e(113), Mb.e(88), Mb.e(177), Mb.e(91), Mb.e(225), Mb.e(253), Mb.e(112), Mb.e(142), Mb.e(246), Mb.e(245), Mb.e(307), Mb.e(244), Mb.e(223), Mb.e(50), Mb.e(224), Mb.e(127), Mb.e(214), Mb.e(281), Mb.e(143), Mb.e(103), Mb.e(69)]).then((() => Mb(54811))).then((wb => {
        wb.loadAudio(bb), lb = wb;
        for (const bb of gb) Lb(bb, wb);
        return wb
      })).catch((bb => {
        throw Hb = null, bb
      })), Hb
    }
    async function tb(bb, wb) {
      try {
        const Mb = await Ub(bb);
        await Mb.loadClientGame(wb)
      } catch (Mb) {
        throw new eb(Mb)
      }
    }

    function Cb(bb, wb) {
      pb = {
        running: bb,
        shell: wb
      }
    }

    function Eb() {
      return Vb
    }
    async function Fb(bb) {
      const wb = pb;
      if ((null === wb || void 0 === wb ? void 0 : wb.running) !== bb) throw new Error("the core's session has ended");
      const Mb = await Ub(wb.shell.audio).catch((bb => {
        throw new eb(bb)
      }));
      if (null !== Vb) return Vb;
      if (pb !== wb || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Vb = Mb.startGameHost(bb, wb.shell), null === Vb) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Vb
    }

    function Bb() {
      null !== Vb && (null !== lb ? lb.endGameHost(Vb) : Vb.closeGame()), Vb = null, pb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);