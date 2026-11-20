export const id = 216;
export const ids = [216];
export const modules = {
  39171: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => pU
    });
    const tU = "The world isn't loaded, so no blocks can be seen.",
      pU = "The world isn't loaded, so nothing in it can be seen."
  },
  36345: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => pU
    });
    let tU = () => null;

    function pU(UU) {
      tU = UU
    }

    function EU(UU, RU) {
      return tU(UU, RU)
    }
  },
  39982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => hU,
      h: () => fU,
      i: () => WU,
      j: () => QU
    });
    var tU = gU(24),
      pU = gU(39984),
      EU = gU(39971),
      PU = gU(39991),
      TU = gU(39974),
      qU = gU(39994),
      KU = gU(40016);

    function cU(UU) {
      var RU, gU;
      const tU = (0, EU.i)();
      return tU ? null === (RU = (0, pU.b)(tU.api, UU[0], UU[1], UU[2])) || void 0 === RU || null === (gU = RU.persisted) || void 0 === gU ? void 0 : gU.shared : void 0
    }

    function GU(UU) {
      return `${UU[0]},${UU[1]},${UU[2]}`
    }
    const jU = new Map;
    let uU = null,
      CU = 0;

    function hU() {
      return CU
    }

    function QU(UU) {
      const RU = null !== uU && uU.key === GU(UU.pos) ? uU.type : null;
      if (null === RU) return UU;
      let gU = null;
      if ("Iron" === RU) {
        const {
          cachedPasskey: RU,
          ...tU
        } = eU(UU.pos);
        gU = {
          CK: null !== RU && void 0 !== RU ? RU : [0, 0, 0, 0],
          ...tU
        }
      }
      return {
        ...UU,
        type: RU,
        ironChest: gU
      }
    }

    function eU(UU) {
      const RU = cU(UU),
        gU = null === RU || void 0 === RU ? void 0 : RU.ownerDbId,
        tU = function(UU) {
          var RU;
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU(UU);
          const tU = GU(UU),
            pU = jU.get(tU);
          return pU ? pU.lastOpened < (null !== (RU = null === gU || void 0 === gU ? void 0 : gU.passkeyLastUpdated) && void 0 !== RU ? RU : 0) ? (jU.delete(tU), null) : [...pU.CK] : null
        }(UU, RU);
      return void 0 === gU ? {
        cachedPasskey: tU
      } : {
        ownerDbId: gU,
        cachedPasskey: tU
      }
    }(0, KU.h)(PU.b, (UU => {
      const RU = (0, qU.e)(PU.b, UU);
      if (!(0, qU.c)(RU) || RU.zE) return;
      if (CU++, !RU.yE || null === RU.iE) return void(uU = null);
      const gU = GU(RU.iE);
      uU = {
        key: gU,
        type: RU.FE
      }, null !== RU.AE && jU.set(gU, {
        CK: [...RU.AE],
        lastOpened: Date.now()
      })
    })), (0, KU.f)((() => {
      jU.clear(), uU = null, CU++
    })), (0, KU.g)((() => {
      null !== uU && (uU = null, CU++, tU.p.yh("chestToggleFromServer", !1, !0))
    }));
    const WU = {
        boardEditRequested: {
          watch: UU => (0, tU.t)("EditBoard", (RU => {
            let {
              pos: gU
            } = RU;
            if (null === gU) return void UU(null);
            const tU = (0, EU.i)(),
              pU = (0, EU.q)();
            tU && pU && UU(pU.readBoardToEdit(tU.api, tU.chunks, gU))
          }))
        },
        ironChestOpenRequested: {
          watch: UU => (0, tU.t)("OpenIronChest", (RU => {
            let {
              pos: gU
            } = RU;
            UU(function(UU) {
              return {
                pos: UU,
                ...eU(UU)
              }
            }(gU))
          }))
        }
      },
      fU = {
        writeOnBoard(UU) {
          var RU;
          let {
            pos: gU,
            text: tU,
            textSize: pU
          } = UU;
          null === (RU = (0, EU.i)()) || void 0 === RU || RU.send(TU.e.UpdateBoard, (0, TU.$)({
            jP: gU,
            uP: tU,
            CP: pU
          }))
        },
        writeBook(UU) {
          var RU;
          let {
            pages: gU,
            title: tU,
            published: pU
          } = UU;
          null === (RU = (0, EU.i)()) || void 0 === RU || RU.send(TU.e.UpdateBook, (0, TU.db)({
            CT: gU,
            hT: tU,
            QT: pU
          }))
        },
        writeNameTag(UU) {
          var RU;
          null === (RU = (0, EU.i)()) || void 0 === RU || RU.send(TU.e.UpdateNameTag, UU)
        },
        setCustomLobbyBlock(UU) {
          let {
            pos: RU,
            blockName: gU
          } = UU;
          const tU = (0, EU.q)(),
            pU = (0, EU.i)();
          tU && pU && pU.send(TU.e.SetCustomLobbyBlock, (0, TU.Q)({
            gc: tU.blockIdOf(gU),
            Rc: RU
          }))
        }
      }
  },
  40039: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      e: () => PU,
      f: () => TU
    });
    var tU = gU(39955),
      pU = gU(4443),
      EU = gU(39971);

    function PU() {
      var UU;
      const RU = null === (UU = (0, EU.i)()) || void 0 === UU ? void 0 : UU.api.localId;
      return void 0 === RU || RU === tU.dd ? null : String(RU)
    }

    function TU(UU) {
      const RU = (0, EU.i)();
      if (null !== RU) return UU(RU);
      let gU = null;
      const tU = (0, pU.u)((() => {
        const RU = (0, EU.i)();
        null !== RU && null === gU && (tU(), gU = UU(RU))
      }));
      return () => {
        var UU;
        tU(), null === (UU = gU) || void 0 === UU || UU()
      }
    }

    function qU(UU, RU, gU) {
      return {
        current: () => {
          const gU = (0, EU.i)();
          return null === gU ? RU : UU(gU)()
        },
        watch: RU => TU((tU => {
          const pU = UU(tU);
          let EU = pU();
          return RU(EU), gU((() => {
            const UU = pU();
            UU !== EU && (EU = UU, RU(UU))
          }))
        }))
      }
    }
  },
  40030: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU
    });
    var tU = gU(39971),
      pU = gU(40039),
      EU = gU(40047);

    function PU() {
      var UU, RU;
      return null !== (UU = null === (RU = (0, tU.i)()) || void 0 === RU ? void 0 : RU.itemBridgeSources) && void 0 !== UU ? UU : EU.b
    }

    function TU(UU) {
      return {
        current: () => PU().states[UU].current(),
        watch: RU => (0, pU.f)((gU => {
          const tU = gU.itemBridgeSources.states[UU];
          return RU(tU.current()), tU.watch(RU)
        }))
      }
    }

    function qU(UU) {
      return {
        watch: RU => (0, pU.f)((gU => gU.itemBridgeSources.events[UU].watch(RU)))
      }
    }
    const KU = {
      states: {
        inventory: TU("inventory"),
        hotbar: TU("hotbar"),
        crafting: TU("crafting"),
        heldItemAim: TU("heldItemAim")
      },
      events: {
        hotbarSlotRequested: qU("hotbarSlotRequested"),
        hotbarScrolled: qU("hotbarScrolled"),
        numberKeyPressed: qU("numberKeyPressed"),
        inventoryDropRequested: qU("inventoryDropRequested"),
        chestToggled: qU("chestToggled"),
        chestRefreshed: qU("chestRefreshed"),
        inventorySynced: qU("inventorySynced"),
        enchantingTableOpened: qU("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: UU => PU().commands.selectHotbarSlot(UU),
        removeInventoryItem: UU => PU().commands.removeInventoryItem(UU),
        swapInventorySlots: UU => PU().commands.swapInventorySlots(UU),
        moveInventoryItem: UU => PU().commands.moveInventoryItem(UU),
        quickMoveInventoryItem: UU => PU().commands.quickMoveInventoryItem(UU),
        closeChest: UU => PU().commands.closeChest(UU),
        focusCrafting: UU => PU().commands.focusCrafting(UU),
        craftRecipe: UU => PU().commands.craftRecipe(UU),
        salvageItem: UU => PU().commands.salvageItem(UU),
        enchantItem: UU => PU().commands.enchantItem(UU)
      },
      queries: {
        enchantingOffer: UU => PU().queries.enchantingOffer(UU)
      }
    }
  },
  40047: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU
    });
    var tU = gU(39171);

    function pU(UU) {
      return {
        current: () => UU,
        watch: () => () => {}
      }
    }

    function EU() {}
    const PU = Object.freeze([0, 0, 0]),
      TU = {
        states: {
          health: pU({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: pU({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: pU({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: pU({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: pU({}),
          creativeVisibility: pU({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: pU(null),
          heldItemAim: pU({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: pU(!1),
          gliderBoostFuel: pU(0),
          flight: pU({
            canFly: !1,
            flying: !1
          }),
          crafting: pU({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: pU({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: pU({}),
          fullInventory: pU(!1),
          crosshairTarget: pU({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: pU(!0),
          freeCamera: pU({
            allowed: !1,
            movesFly: !1
          }),
          replay: pU(null),
          replayEdits: pU(null),
          replayRecorder: pU({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: pU(!1)
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
          selectHotbarSlot: EU,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: EU,
          setInventoryOpen: EU,
          changeIronChestPasskey: EU,
          dragReplayCamera: EU,
          applyTemporaryThirdPerson: EU,
          holdEmoteWheel: EU,
          recordFlyingMiddleText: EU,
          focusCrafting: EU,
          craftRecipe: () => ({
            Pc: 0,
            dc: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: EU,
          setShopOpen: EU,
          buyShopItem: EU,
          sendChatMessage: EU,
          ignorePlayer: EU,
          reportPlayer: EU,
          reportWorldCodeChat: EU,
          requestDiscordReportKey: EU,
          reportLobbyOrGame: EU,
          playEmote: EU,
          updateMyCosmetic: EU,
          writeOnBoard: EU,
          writeBook: EU,
          writeNameTag: EU,
          setCustomLobbyBlock: EU,
          openIronChest: EU,
          sendCodeCollab: EU,
          clickCodeBlock: EU,
          bindCustomButtonKeys: EU,
          pressCustomButton: EU,
          moveReplayFreecam: EU,
          holdReplayFreecamVertical: EU,
          respawn: EU,
          wakeUp: EU,
          requestLeaderboard: EU,
          completeTask: EU,
          setServerCookie: EU,
          answerUiRequest: EU,
          chooseRewardedAd: EU,
          setCameraZoom: EU,
          setFreeCameraMovesFly: EU,
          setBlockHighlight: EU,
          setCrosshairInteractPrompt: EU,
          setLookSensitivity: EU,
          replayAction: EU,
          setReplayPlaying: EU,
          seekReplay: EU,
          setReplayCameraMode: EU,
          syncReplayCameraMode: EU,
          setReplayCameraKeyframe: EU,
          moveReplayCameraKeyframe: EU,
          deleteReplayCameraKeyframes: EU,
          setReplayPlaybackMark: EU,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: EU,
          exportReplayVideo: EU,
          toggleRecording: EU,
          saveClip: EU,
          setRecorderPrefs: EU,
          setReplayViewerOpen: EU
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => tU.b,
          worldCodeAiGameState: () => tU.f
        },
        lookups: {
          localPos: () => PU,
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
  39962: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => nU,
      f: () => wU,
      j: () => bU,
      m: () => JU,
      n: () => mU
    });
    var tU = gU(38766),
      pU = gU(1217),
      EU = gU(1821),
      PU = gU(1829),
      TU = gU(2969),
      qU = gU(36345),
      KU = gU(1316),
      cU = gU(39971),
      GU = gU(4477),
      jU = gU(2233),
      uU = gU(39974),
      CU = gU(39982),
      hU = gU(40030);
    let QU = null;

    function eU(UU) {
      const RU = new Map,
        gU = gU => {
          if ("string" !== typeof gU) return;
          let tU = RU.get(gU);
          return void 0 === tU && (tU = UU(gU), void 0 !== tU && RU.set(gU, tU)), tU
        };
      return new Proxy({}, {
        get: (UU, RU) => gU(RU),
        has: (UU, RU) => void 0 !== gU(RU)
      })
    }

    function WU(UU) {
      const RU = (0, TU.c)(UU);
      return void 0 !== RU && (0, TU.f)(RU) === UU
    }

    function fU(UU) {
      var RU;
      const gU = null === (RU = (0, cU.i)()) || void 0 === RU ? void 0 : RU.tables;
      if (void 0 === gU || !WU(UU)) return;
      const tU = {
          displayName: gU.getDisplayName(UU)
        },
        pU = gU.getItemStat(UU, "description");
      void 0 !== pU && null !== pU && (tU.description = pU);
      const {
        rootName: EU
      } = gU.getMetaInfo(UU);
      EU !== UU && (tU.rootName = EU);
      const PU = gU.getItemStat(UU, "armourReduction");
      return void 0 !== PU && null !== PU && (tU.armourReduction = PU), tU
    }(0, cU.r)((UU => {
      QU = UU
    }));
    const xU = (0, PU.i)("DisplayName", "Description");

    function mU() {
      return Boolean(EU.b.get("useInventory") && EU.b.get("useFullInventory"))
    }
    let IU = null;
    const JU = {
        inventory: function() {
          const UU = hU.b.states.inventory;
          let RU = null;
          const gU = UU => {
            var gU;
            return null === UU.chest ? UU : ((null === (gU = RU) || void 0 === gU ? void 0 : gU.from) === UU && RU.chestVersion === (0, CU.d)() || (RU = {
              from: UU,
              chestVersion: (0, CU.d)(),
              view: {
                ...UU,
                chest: (0, CU.j)(UU.chest)
              }
            }), RU.view)
          };
          return {
            current: () => gU(UU.current()),
            watch: RU => UU.watch((UU => {
              RU(gU(UU))
            }))
          }
        }(),
        crafting: hU.b.states.crafting,
        stationItems: {
          current() {
            var UU;
            return (null === (UU = IU) || void 0 === UU ? void 0 : UU.namesVersion) !== (0, TU.g)() && (IU = {
              namesVersion: (0, TU.g)(),
              items: {
                enchantable: eU((UU => {
                  const RU = (0, TU.c)(UU);
                  return void 0 !== RU && null !== QU && QU.enchantmentPerksOf(RU).length > 0 || void 0
                })),
                salvageable: eU((UU => !(!WU(UU) || null === (0, qU.c)(UU)) || void 0))
              }
            }), IU.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let UU = null;
          const RU = () => {
            var RU;
            return (null === (RU = UU) || void 0 === RU ? void 0 : RU.namesVersion) !== (0, TU.g)() && (UU = {
              namesVersion: (0, TU.g)(),
              infos: eU(fU)
            }), UU.infos
          };
          return {
            current: RU,
            watch: gU => (0, PU.s)((tU => {
              tU.some(xU) && (UU = null, gU(RU()))
            }))
          }
        }(),
        creativeVisibility: (0, PU.n)((function() {
          const UU = {};
          for (const pU of null !== (RU = null === (gU = QU) || void 0 === gU ? void 0 : gU.creativeItemIds()) && void 0 !== RU ? RU : []) {
            var RU, gU, PU, qU;
            const KU = (0, TU.f)(pU);
            if (void 0 === KU) continue;
            const cU = null !== (PU = EU.b.get((0, tU.f)(KU, "showInCreativeInven"))) && void 0 !== PU ? PU : null === (qU = QU) || void 0 === qU ? void 0 : qU.showInCreativeInvenOf(pU);
            "boolean" === typeof cU && (UU[KU] = cU)
          }
          return {
            publicLobby: (0, pU.P)((0, KU.d)().lobbyName),
            shownInGame: UU
          }
        }), ["connectedGameChanged"], (0, PU.i)("ShowInCreativeInven")),
        fullInventory: (0, PU.n)(mU, [], (0, PU.k)("useInventory", "useFullInventory"))
      },
      wU = {
        inventoryDropRequested: hU.b.events.inventoryDropRequested,
        chestToggled: hU.b.events.chestToggled,
        chestRefreshed: hU.b.events.chestRefreshed,
        inventorySynced: hU.b.events.inventorySynced,
        enchantingTableOpened: hU.b.events.enchantingTableOpened
      },
      nU = {
        removeInventoryItem: hU.b.commands.removeInventoryItem,
        swapInventorySlots: hU.b.commands.swapInventorySlots,
        moveInventoryItem: hU.b.commands.moveInventoryItem,
        quickMoveInventoryItem: hU.b.commands.quickMoveInventoryItem,
        closeChest: hU.b.commands.closeChest,
        setInventoryOpen(UU) {
          (0, GU.f)(jU.z.InventoryOpen, UU ? jU.z.InventoryOpen : 0)
        },
        focusCrafting: hU.b.commands.focusCrafting,
        craftRecipe: hU.b.commands.craftRecipe,
        salvageItem: hU.b.commands.salvageItem,
        enchantItem: hU.b.commands.enchantItem,
        changeIronChestPasskey(UU) {
          var RU;
          let {
            pos: gU,
            CK: tU
          } = UU;
          null === (RU = (0, cU.i)()) || void 0 === RU || RU.send(uU.e.ChangeIronChestPasskey, (0, uU.h)({
            iE: gU,
            CK: tU
          }))
        },
        openIronChest(UU) {
          var RU;
          let {
            pos: gU,
            CK: tU
          } = UU;
          null === (RU = (0, cU.i)()) || void 0 === RU || RU.send(uU.e.OpenIronChest, (0, uU.H)({
            iE: gU,
            CK: tU
          }))
        }
      },
      bU = {
        enchantingOffer: hU.b.queries.enchantingOffer
      }
  },
  40022: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      f: () => GU,
      g: () => TU,
      h: () => EU,
      k: () => pU,
      o: () => qU,
      r: () => cU
    });
    class tU extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function pU(UU) {
      return UU instanceof RangeError && /call stack/i.test(UU.message) || UU instanceof Error && "InternalError" === UU.name && /recursion/i.test(UU.message)
    }

    function EU(UU) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(UU))
    }
    const PU = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function TU(UU) {
      var RU;
      return UU instanceof WebAssembly.RuntimeError || UU instanceof tU || pU(UU) && PU.test(null !== (RU = UU.stack) && void 0 !== RU ? RU : "")
    }

    function qU(UU, RU) {
      if (TU(UU)) throw UU;
      console.error(RU, UU)
    }

    function KU(UU, RU, gU, pU, EU) {
      if (RU % pU !== 0 || RU + gU > UU.byteLength) throw new tU(`${EU}: ${gU} bytes at ${RU}, ${pU}-aligned, outside ${UU.byteLength} bytes of memory`)
    }

    function cU(UU, RU, gU, tU, pU) {
      return 0 === gU ? null : (KU(RU, gU, tU * UU.BYTES_PER_ELEMENT, UU.BYTES_PER_ELEMENT, pU), new UU(RU, gU, tU))
    }

    function GU(UU, RU, gU, tU, pU) {
      return 0 === RU ? null : (KU(UU, RU, gU, tU, pU), new DataView(UU, RU, gU))
    }
  },
  39971: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => eU,
      i: () => hU,
      j: () => QU,
      m: () => jU,
      p: () => uU,
      q: () => cU,
      r: () => GU,
      s: () => CU
    });
    class tU extends Error {
      constructor(UU) {
        super(`the join's code did not load: ${UU instanceof Error?UU.message:String(UU)}`, {
          cause: UU
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === UU || void 0 === UU ? void 0 : UU.request
      }
    }
    let pU = null,
      EU = null,
      PU = null;
    const TU = [];
    let qU = null;

    function KU(UU, RU) {
      try {
        UU(RU)
      } catch (gU) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", gU)
      }
    }

    function cU() {
      return qU
    }

    function GU(UU) {
      TU.push(UU), null !== qU && KU(UU, qU)
    }

    function jU(UU) {
      return pU ??= Promise.all([gU.e(69), gU.e(94), gU.e(214), gU.e(74), gU.e(215), gU.e(189), gU.e(93), gU.e(259), gU.e(187), gU.e(262), gU.e(199), gU.e(186), gU.e(200), gU.e(136), gU.e(85), gU.e(114), gU.e(237), gU.e(53)]).then((() => gU(41917))).then((RU => {
        RU.loadAudio(UU), qU = RU;
        for (const UU of TU) KU(UU, RU);
        return RU
      })).catch((UU => {
        throw pU = null, UU
      })), pU
    }
    async function uU(UU, RU) {
      try {
        const gU = await jU(UU);
        await gU.loadClientGame(RU)
      } catch (gU) {
        throw new tU(gU)
      }
    }

    function CU(UU, RU) {
      EU = {
        running: UU,
        shell: RU
      }
    }

    function hU() {
      return PU
    }
    async function QU(UU) {
      const RU = EU;
      if ((null === RU || void 0 === RU ? void 0 : RU.running) !== UU) throw new Error("the core's session has ended");
      const gU = await jU(RU.shell.audio).catch((UU => {
        throw new tU(UU)
      }));
      if (null !== PU) return PU;
      if (EU !== RU || UU.isStopped) throw new Error("the core stopped while the game code loaded");
      if (PU = gU.startGameHost(UU, RU.shell), null === PU) throw new Error("the core's shared tables didn't read, so the game can't start");
      return PU
    }

    function eU() {
      null !== PU && (null !== qU ? qU.endGameHost(PU) : PU.closeGame()), PU = null, EU = null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);