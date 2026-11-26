export const id = 242;
export const ids = [242];
export const modules = {
  40525: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      e: () => yU
    });
    const cU = "The world isn't loaded, so no blocks can be seen.",
      yU = "The world isn't loaded, so nothing in it can be seen."
  },
  39926: (UU, XU, zU) => {
    function cU(UU) {
      return !(!UU.lobbyLeaderboardInfo && !UU.lobbyManage)
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  37535: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => cU
    });
    const cU = 3,
      yU = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  37538: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => yU
    });
    let cU = () => null;

    function yU(UU) {
      cU = UU
    }

    function QU(UU, XU) {
      return cU(UU, XU)
    }
  },
  41670: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => aU,
      h: () => GU,
      i: () => kU,
      k: () => tU
    });
    var cU = zU(31),
      yU = zU(41674),
      QU = zU(41660),
      AU = zU(41676),
      FU = zU(41667),
      oU = zU(41680),
      DU = zU(41695);

    function EU(UU) {
      var XU, zU;
      const cU = (0, QU.f)();
      return cU ? null === (XU = (0, yU.c)(cU.api, UU[0], UU[1], UU[2])) || void 0 === XU || null === (zU = XU.persisted) || void 0 === zU ? void 0 : zU.shared : void 0
    }

    function YU(UU) {
      return `${UU[0]},${UU[1]},${UU[2]}`
    }
    const NU = new Map;
    let IU = null,
      pU = 0;

    function aU() {
      return pU
    }

    function tU(UU) {
      const XU = null !== IU && IU.key === YU(UU.pos) ? IU.type : null;
      if (null === XU) return UU;
      let zU = null;
      if ("Iron" === XU) {
        const {
          cachedPasskey: XU,
          ...cU
        } = gU(UU.pos);
        zU = {
          uA: null !== XU && void 0 !== XU ? XU : [0, 0, 0, 0],
          ...cU
        }
      }
      return {
        ...UU,
        type: XU,
        ironChest: zU
      }
    }

    function gU(UU) {
      const XU = EU(UU),
        zU = null === XU || void 0 === XU ? void 0 : XU.ownerDbId,
        cU = function(UU) {
          var XU;
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EU(UU);
          const cU = YU(UU),
            yU = NU.get(cU);
          return yU ? yU.lastOpened < (null !== (XU = null === zU || void 0 === zU ? void 0 : zU.passkeyLastUpdated) && void 0 !== XU ? XU : 0) ? (NU.delete(cU), null) : [...yU.uA] : null
        }(UU, XU);
      return void 0 === zU ? {
        cachedPasskey: cU
      } : {
        ownerDbId: zU,
        cachedPasskey: cU
      }
    }(0, DU.m)(AU.c, (UU => {
      const XU = (0, oU.d)(AU.c, UU);
      if (!(0, oU.b)(XU) || XU.bU) return;
      if (pU++, !XU.lU || null === XU.jU) return void(IU = null);
      const zU = YU(XU.jU);
      IU = {
        key: zU,
        type: XU.JU
      }, null !== XU.KU && NU.set(zU, {
        uA: [...XU.KU],
        lastOpened: Date.now()
      })
    })), (0, DU.e)((() => {
      NU.clear(), IU = null, pU++
    })), (0, DU.i)((() => {
      null !== IU && (IU = null, pU++, cU.k.UY("chestToggleFromServer", !1, !0))
    }));
    const kU = {
        boardEditRequested: {
          watch: UU => (0, cU.n)("EditBoard", (XU => {
            let {
              pos: zU
            } = XU;
            if (null === zU) return void UU(null);
            const cU = (0, QU.f)(),
              yU = (0, QU.o)();
            cU && yU && UU(yU.readBoardToEdit(cU.api, cU.chunks, zU))
          }))
        },
        ironChestOpenRequested: {
          watch: UU => (0, cU.n)("OpenIronChest", (XU => {
            let {
              pos: zU
            } = XU;
            UU(function(UU) {
              return {
                pos: UU,
                ...gU(UU)
              }
            }(zU))
          }))
        }
      },
      GU = {
        writeOnBoard(UU) {
          var XU;
          let {
            pos: zU,
            text: cU,
            textSize: yU
          } = UU;
          null === (XU = (0, QU.f)()) || void 0 === XU || XU.send(FU.b.UpdateBoard, (0, FU.W)({
            tD: zU,
            gD: cU,
            kD: yU
          }))
        },
        writeBook(UU) {
          var XU;
          let {
            pages: zU,
            title: cU,
            published: yU
          } = UU;
          null === (XU = (0, QU.f)()) || void 0 === XU || XU.send(FU.b.UpdateBook, (0, FU.Y)({
            ED: zU,
            YD: cU,
            ND: yU
          }))
        },
        writeNameTag(UU) {
          var XU;
          null === (XU = (0, QU.f)()) || void 0 === XU || XU.send(FU.b.UpdateNameTag, UU)
        },
        setCustomLobbyBlock(UU) {
          let {
            pos: XU,
            blockName: zU
          } = UU;
          const cU = (0, QU.o)(),
            yU = (0, QU.f)();
          cU && yU && yU.send(FU.b.SetCustomLobbyBlock, (0, FU.J)({
            yF: cU.blockIdOf(zU),
            cF: XU
          }))
        }
      }
  },
  41717: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU,
      d: () => AU,
      e: () => FU
    });
    var cU = zU(41652),
      yU = zU(5312),
      QU = zU(41660);

    function AU() {
      var UU;
      const XU = null === (UU = (0, QU.f)()) || void 0 === UU ? void 0 : UU.api.localId;
      return void 0 === XU || XU === cU.ad ? null : String(XU)
    }

    function FU(UU) {
      const XU = (0, QU.f)();
      if (null !== XU) return UU(XU);
      let zU = null;
      const cU = (0, yU.r)((() => {
        const XU = (0, QU.f)();
        null !== XU && null === zU && (cU(), zU = UU(XU))
      }));
      return () => {
        var UU;
        cU(), null === (UU = zU) || void 0 === UU || UU()
      }
    }

    function oU(UU, XU, zU) {
      return {
        current: () => {
          const zU = (0, QU.f)();
          return null === zU ? XU : UU(zU)()
        },
        watch: XU => FU((cU => {
          const yU = UU(cU);
          let QU = yU();
          return XU(QU), zU((() => {
            const UU = yU();
            UU !== QU && (QU = UU, XU(UU))
          }))
        }))
      }
    }
  },
  41708: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU
    });
    var cU = zU(41660),
      yU = zU(41717),
      QU = zU(41725);

    function AU() {
      var UU, XU;
      return null !== (UU = null === (XU = (0, cU.f)()) || void 0 === XU ? void 0 : XU.itemBridgeSources) && void 0 !== UU ? UU : QU.b
    }

    function FU(UU) {
      return {
        current: () => AU().states[UU].current(),
        watch: XU => (0, yU.e)((zU => {
          const cU = zU.itemBridgeSources.states[UU];
          return XU(cU.current()), cU.watch(XU)
        }))
      }
    }

    function oU(UU) {
      return {
        watch: XU => (0, yU.e)((zU => zU.itemBridgeSources.events[UU].watch(XU)))
      }
    }
    const DU = {
      states: {
        inventory: FU("inventory"),
        hotbar: FU("hotbar"),
        crafting: FU("crafting"),
        heldItemAim: FU("heldItemAim")
      },
      events: {
        hotbarSlotRequested: oU("hotbarSlotRequested"),
        hotbarScrolled: oU("hotbarScrolled"),
        numberKeyPressed: oU("numberKeyPressed"),
        inventoryDropRequested: oU("inventoryDropRequested"),
        chestToggled: oU("chestToggled"),
        chestRefreshed: oU("chestRefreshed"),
        inventorySynced: oU("inventorySynced"),
        enchantingTableOpened: oU("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: UU => AU().commands.selectHotbarSlot(UU),
        removeInventoryItem: UU => AU().commands.removeInventoryItem(UU),
        swapInventorySlots: UU => AU().commands.swapInventorySlots(UU),
        moveInventoryItem: UU => AU().commands.moveInventoryItem(UU),
        quickMoveInventoryItem: UU => AU().commands.quickMoveInventoryItem(UU),
        closeChest: UU => AU().commands.closeChest(UU),
        focusCrafting: UU => AU().commands.focusCrafting(UU),
        craftRecipe: UU => AU().commands.craftRecipe(UU),
        salvageItem: UU => AU().commands.salvageItem(UU),
        enchantItem: UU => AU().commands.enchantItem(UU)
      },
      queries: {
        enchantingOffer: UU => AU().queries.enchantingOffer(UU)
      }
    }
  },
  41725: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU
    });
    var cU = zU(40525),
      yU = zU(37535);

    function QU(UU) {
      return {
        current: () => UU,
        watch: () => () => {}
      }
    }

    function AU() {}
    const FU = Object.freeze([0, 0, 0]),
      oU = {
        states: {
          health: QU({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: QU({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: QU({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: QU({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: QU({}),
          creativeVisibility: QU({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: QU(null),
          heldItemAim: QU({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: QU(!1),
          gliderBoostFuel: QU(0),
          flight: QU({
            canFly: !1,
            flying: !1
          }),
          crafting: QU({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: QU({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: QU({}),
          fullInventory: QU(!1),
          crosshairTarget: QU({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: QU(!0),
          freeCamera: QU({
            allowed: !1,
            movesFly: !1
          }),
          replay: QU(null),
          replayEdits: QU(null),
          replayRecorder: QU(yU.e),
          replayVideoExporting: QU(!1)
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
          selectHotbarSlot: AU,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: AU,
          setInventoryOpen: AU,
          changeIronChestPasskey: AU,
          dragReplayCamera: AU,
          applyTemporaryThirdPerson: AU,
          holdEmoteWheel: AU,
          recordFlyingMiddleText: AU,
          focusCrafting: AU,
          craftRecipe: () => ({
            NA: 0,
            DE: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: AU,
          setShopOpen: AU,
          buyShopItem: AU,
          lobbyManage: AU,
          sendChatMessage: () => !1,
          ignorePlayer: AU,
          reportPlayer: AU,
          reportWorldCodeChat: AU,
          requestDiscordReportKey: AU,
          reportLobbyOrGame: AU,
          playEmote: AU,
          updateMyCosmetic: AU,
          writeOnBoard: AU,
          writeBook: AU,
          writeNameTag: AU,
          setCustomLobbyBlock: AU,
          openIronChest: AU,
          sendCodeCollab: AU,
          clickCodeBlock: AU,
          bindCustomButtonKeys: AU,
          pressCustomButton: AU,
          moveReplayFreecam: AU,
          holdReplayFreecamVertical: AU,
          respawn: AU,
          wakeUp: AU,
          requestLeaderboard: AU,
          completeTask: AU,
          setServerCookie: AU,
          answerUiRequest: AU,
          chooseRewardedAd: AU,
          setCameraZoom: AU,
          setFreeCameraMovesFly: AU,
          setBlockHighlight: AU,
          setCrosshairInteractPrompt: AU,
          setLookSensitivity: AU,
          replayAction: AU,
          setReplayPlaying: AU,
          seekReplay: AU,
          setReplayCameraMode: AU,
          syncReplayCameraMode: AU,
          setReplayCameraKeyframe: AU,
          moveReplayCameraKeyframe: AU,
          deleteReplayCameraKeyframes: AU,
          setReplayPlaybackMark: AU,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: AU,
          exportReplayVideo: AU,
          toggleRecording: AU,
          saveClip: AU,
          setRecorderPrefs: AU,
          setReplayViewerOpen: AU
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => cU.b,
          worldCodeAiGameState: () => cU.e
        },
        lookups: {
          localPos: () => FU,
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
  41657: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => dU,
      h: () => WU,
      j: () => LU,
      l: () => PU,
      n: () => ZU
    });
    var cU = zU(40101),
      yU = zU(1236),
      QU = zU(2032),
      AU = zU(2044),
      FU = zU(3660),
      oU = zU(37538),
      DU = zU(1360),
      EU = zU(41660),
      YU = zU(5342),
      NU = zU(2580),
      IU = zU(41667),
      pU = zU(41670),
      aU = zU(41708);
    let tU = null;

    function gU(UU) {
      const XU = new Map,
        zU = zU => {
          if ("string" !== typeof zU) return;
          let cU = XU.get(zU);
          return void 0 === cU && (cU = UU(zU), void 0 !== cU && XU.set(zU, cU)), cU
        };
      return new Proxy({}, {
        get: (UU, XU) => zU(XU),
        has: (UU, XU) => void 0 !== zU(XU)
      })
    }

    function kU(UU) {
      const XU = (0, FU.c)(UU);
      return void 0 !== XU && (0, FU.f)(XU) === UU
    }

    function GU(UU) {
      var XU;
      const zU = null === (XU = (0, EU.f)()) || void 0 === XU ? void 0 : XU.tables;
      if (void 0 === zU || !kU(UU)) return;
      const cU = {
          displayName: zU.getDisplayName(UU)
        },
        yU = zU.getItemStat(UU, "description");
      void 0 !== yU && null !== yU && (cU.description = yU);
      const {
        rootName: QU
      } = zU.getMetaInfo(UU);
      QU !== UU && (cU.rootName = QU);
      const AU = zU.getItemStat(UU, "armourReduction");
      return void 0 !== AU && null !== AU && (cU.armourReduction = AU), cU
    }(0, EU.s)((UU => {
      tU = UU
    }));
    const BU = (0, AU.m)("DisplayName", "Description");

    function ZU() {
      return Boolean(QU.d.get("useInventory") && QU.d.get("useFullInventory"))
    }
    let RU = null;
    const PU = {
        inventory: function() {
          const UU = aU.e.states.inventory;
          let XU = null;
          const zU = UU => {
            var zU;
            return null === UU.chest ? UU : ((null === (zU = XU) || void 0 === zU ? void 0 : zU.from) === UU && XU.chestVersion === (0, pU.e)() || (XU = {
              from: UU,
              chestVersion: (0, pU.e)(),
              view: {
                ...UU,
                chest: (0, pU.k)(UU.chest)
              }
            }), XU.view)
          };
          return {
            current: () => zU(UU.current()),
            watch: XU => UU.watch((UU => {
              XU(zU(UU))
            }))
          }
        }(),
        crafting: aU.e.states.crafting,
        stationItems: {
          current() {
            var UU;
            return (null === (UU = RU) || void 0 === UU ? void 0 : UU.namesVersion) !== (0, FU.i)() && (RU = {
              namesVersion: (0, FU.i)(),
              items: {
                enchantable: gU((UU => {
                  const XU = (0, FU.c)(UU);
                  return void 0 !== XU && null !== tU && tU.enchantmentPerksOf(XU).length > 0 || void 0
                })),
                salvageable: gU((UU => !(!kU(UU) || null === (0, oU.e)(UU)) || void 0))
              }
            }), RU.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let UU = null;
          const XU = () => {
            var XU;
            return (null === (XU = UU) || void 0 === XU ? void 0 : XU.namesVersion) !== (0, FU.i)() && (UU = {
              namesVersion: (0, FU.i)(),
              infos: gU(GU)
            }), UU.infos
          };
          return {
            current: XU,
            watch: zU => (0, AU.s)((cU => {
              cU.some(BU) && (UU = null, zU(XU()))
            }))
          }
        }(),
        creativeVisibility: (0, AU.p)((function() {
          const UU = {};
          for (const yU of null !== (XU = null === (zU = tU) || void 0 === zU ? void 0 : zU.creativeItemIds()) && void 0 !== XU ? XU : []) {
            var XU, zU, AU, oU;
            const DU = (0, FU.f)(yU);
            if (void 0 === DU) continue;
            const EU = null !== (AU = QU.d.get((0, cU.e)(DU, "showInCreativeInven"))) && void 0 !== AU ? AU : null === (oU = tU) || void 0 === oU ? void 0 : oU.showInCreativeInvenOf(yU);
            "boolean" === typeof EU && (UU[DU] = EU)
          }
          return {
            publicLobby: (0, yU.G)((0, DU.b)().lobbyName),
            shownInGame: UU
          }
        }), ["connectedGameChanged"], (0, AU.m)("ShowInCreativeInven")),
        fullInventory: (0, AU.p)(ZU, [], (0, AU.o)("useInventory", "useFullInventory"))
      },
      WU = {
        inventoryDropRequested: aU.e.events.inventoryDropRequested,
        chestToggled: aU.e.events.chestToggled,
        chestRefreshed: aU.e.events.chestRefreshed,
        inventorySynced: aU.e.events.inventorySynced,
        enchantingTableOpened: aU.e.events.enchantingTableOpened
      },
      dU = {
        removeInventoryItem: aU.e.commands.removeInventoryItem,
        swapInventorySlots: aU.e.commands.swapInventorySlots,
        moveInventoryItem: aU.e.commands.moveInventoryItem,
        quickMoveInventoryItem: aU.e.commands.quickMoveInventoryItem,
        closeChest: aU.e.commands.closeChest,
        setInventoryOpen(UU) {
          (0, YU.f)(NU.F.InventoryOpen, UU ? NU.F.InventoryOpen : 0)
        },
        focusCrafting: aU.e.commands.focusCrafting,
        craftRecipe: aU.e.commands.craftRecipe,
        salvageItem: aU.e.commands.salvageItem,
        enchantItem: aU.e.commands.enchantItem,
        changeIronChestPasskey(UU) {
          var XU;
          let {
            pos: zU,
            uA: cU
          } = UU;
          null === (XU = (0, EU.f)()) || void 0 === XU || XU.send(IU.b.ChangeIronChestPasskey, (0, IU.e)({
            jU: zU,
            uA: cU
          }))
        },
        openIronChest(UU) {
          var XU;
          let {
            pos: zU,
            uA: cU
          } = UU;
          null === (XU = (0, EU.f)()) || void 0 === XU || XU.send(IU.b.OpenIronChest, (0, IU.B)({
            jU: zU,
            uA: cU
          }))
        }
      },
      LU = {
        enchantingOffer: aU.e.queries.enchantingOffer
      }
  },
  41699: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => EU,
      h: () => AU,
      l: () => yU,
      p: () => FU,
      t: () => DU
    });
    class cU extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function yU(UU) {
      return UU instanceof RangeError && /call stack/i.test(UU.message) || UU instanceof Error && "InternalError" === UU.name && /recursion/i.test(UU.message)
    }
    const QU = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function AU(UU) {
      var XU;
      return UU instanceof WebAssembly.RuntimeError || UU instanceof cU || yU(UU) && QU.test(null !== (XU = UU.stack) && void 0 !== XU ? XU : "")
    }

    function FU(UU, XU) {
      if (AU(UU)) throw UU;
      console.error(XU, UU)
    }

    function oU(UU, XU, zU, yU, QU) {
      if (XU % yU !== 0 || XU + zU > UU.byteLength) throw new cU(`${QU}: ${zU} bytes at ${XU}, ${yU}-aligned, outside ${UU.byteLength} bytes of memory`)
    }

    function DU(UU, XU, zU, cU, yU) {
      return 0 === zU ? null : (oU(XU, zU, cU * UU.BYTES_PER_ELEMENT, UU.BYTES_PER_ELEMENT, yU), new UU(XU, zU, cU))
    }

    function EU(UU, XU, zU, cU, yU) {
      return 0 === XU ? null : (oU(UU, XU, zU, cU, yU), new DataView(UU, XU, zU))
    }
  },
  41660: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU,
      d: () => gU,
      f: () => aU,
      j: () => tU,
      l: () => NU,
      n: () => IU,
      o: () => EU,
      s: () => YU,
      u: () => pU
    });
    class cU extends Error {
      constructor(UU) {
        super(`the join's code did not load: ${UU instanceof Error?UU.message:String(UU)}`, {
          cause: UU
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === UU || void 0 === UU ? void 0 : UU.request
      }
    }
    let yU = null,
      QU = null,
      AU = null;
    const FU = [];
    let oU = null;

    function DU(UU, XU) {
      try {
        UU(XU)
      } catch (zU) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", zU)
      }
    }

    function EU() {
      return oU
    }

    function YU(UU) {
      FU.push(UU), null !== oU && DU(UU, oU)
    }

    function NU(UU) {
      return yU ??= Promise.all([zU.e(84), zU.e(111), zU.e(86), zU.e(240), zU.e(89), zU.e(241), zU.e(215), zU.e(109), zU.e(260), zU.e(294), zU.e(49), zU.e(213), zU.e(227), zU.e(212), zU.e(203), zU.e(204), zU.e(168), zU.e(101), zU.e(132), zU.e(268), zU.e(68)]).then((() => zU(45247))).then((XU => {
        XU.loadAudio(UU), oU = XU;
        for (const UU of FU) DU(UU, XU);
        return XU
      })).catch((UU => {
        throw yU = null, UU
      })), yU
    }
    async function IU(UU, XU) {
      try {
        const zU = await NU(UU);
        await zU.loadClientGame(XU)
      } catch (zU) {
        throw new cU(zU)
      }
    }

    function pU(UU, XU) {
      QU = {
        running: UU,
        shell: XU
      }
    }

    function aU() {
      return AU
    }
    async function tU(UU) {
      const XU = QU;
      if ((null === XU || void 0 === XU ? void 0 : XU.running) !== UU) throw new Error("the core's session has ended");
      const zU = await NU(XU.shell.audio).catch((UU => {
        throw new cU(UU)
      }));
      if (null !== AU) return AU;
      if (QU !== XU || UU.isStopped) throw new Error("the core stopped while the game code loaded");
      if (AU = zU.startGameHost(UU, XU.shell), null === AU) throw new Error("the core's shared tables didn't read, so the game can't start");
      return AU
    }

    function gU() {
      null !== AU && (null !== oU ? oU.endGameHost(AU) : AU.closeGame()), AU = null, QU = null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);