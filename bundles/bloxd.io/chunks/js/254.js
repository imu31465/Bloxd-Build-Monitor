export const id = 254;
export const ids = [254];
export const modules = {
  40980: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      e: () => EW
    });
    const mW = "The world isn't loaded, so no blocks can be seen.",
      EW = "The world isn't loaded, so nothing in it can be seen."
  },
  40305: (WW, iW, OW) => {
    function mW(WW) {
      return !(!WW.lobbyLeaderboardInfo && !WW.lobbyManage)
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  37968: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      c: () => mW
    });
    const mW = 3,
      EW = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  37970: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      f: () => EW
    });
    let mW = () => null;

    function EW(WW) {
      mW = WW
    }

    function NW(WW, iW) {
      return mW(WW, iW)
    }
  },
  42118: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => bW,
      g: () => sW,
      k: () => kW,
      m: () => jW
    });
    var mW = OW(27),
      EW = OW(42125),
      NW = OW(42109),
      PW = OW(42131),
      LW = OW(42116),
      cW = OW(42134),
      wW = OW(42149);

    function tW(WW) {
      var iW, OW;
      const mW = (0, NW.f)();
      return mW ? null === (iW = (0, EW.d)(mW.api, WW[0], WW[1], WW[2])) || void 0 === iW || null === (OW = iW.persisted) || void 0 === OW ? void 0 : OW.shared : void 0
    }

    function ZW(WW) {
      return `${WW[0]},${WW[1]},${WW[2]}`
    }
    const xW = new Map;
    let lW = null,
      AW = 0;

    function bW() {
      return AW
    }

    function jW(WW) {
      const iW = null !== lW && lW.key === ZW(WW.pos) ? lW.type : null;
      if (null === iW) return WW;
      let OW = null;
      if ("Iron" === iW) {
        const {
          cachedPasskey: iW,
          ...mW
        } = UW(WW.pos);
        OW = {
          rL: null !== iW && void 0 !== iW ? iW : [0, 0, 0, 0],
          ...mW
        }
      }
      return {
        ...WW,
        type: iW,
        ironChest: OW
      }
    }

    function UW(WW) {
      const iW = tW(WW),
        OW = null === iW || void 0 === iW ? void 0 : iW.ownerDbId,
        mW = function(WW) {
          var iW;
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tW(WW);
          const mW = ZW(WW),
            EW = xW.get(mW);
          return EW ? EW.lastOpened < (null !== (iW = null === OW || void 0 === OW ? void 0 : OW.passkeyLastUpdated) && void 0 !== iW ? iW : 0) ? (xW.delete(mW), null) : [...EW.rL] : null
        }(WW, iW);
      return void 0 === OW ? {
        cachedPasskey: mW
      } : {
        ownerDbId: OW,
        cachedPasskey: mW
      }
    }(0, wW.j)(PW.b, (WW => {
      const iW = (0, cW.g)(PW.b, WW);
      if (!(0, cW.d)(iW) || iW.qE) return;
      if (AW++, !iW.VE || null === iW.CE) return void(lW = null);
      const OW = ZW(iW.CE);
      lW = {
        key: OW,
        type: iW.fE
      }, null !== iW.XE && xW.set(OW, {
        rL: [...iW.XE],
        lastOpened: Date.now()
      })
    })), (0, wW.e)((() => {
      xW.clear(), lW = null, AW++
    })), (0, wW.i)((() => {
      null !== lW && (lW = null, AW++, mW.l.iZ("chestToggleFromServer", !1, !0))
    }));
    const kW = {
        boardEditRequested: {
          watch: WW => (0, mW.n)("EditBoard", (iW => {
            let {
              pos: OW
            } = iW;
            if (null === OW) return void WW(null);
            const mW = (0, NW.f)(),
              EW = (0, NW.p)();
            mW && EW && WW(EW.readBoardToEdit(mW.api, mW.chunks, OW))
          }))
        },
        ironChestOpenRequested: {
          watch: WW => (0, mW.n)("OpenIronChest", (iW => {
            let {
              pos: OW
            } = iW;
            WW(function(WW) {
              return {
                pos: WW,
                ...UW(WW)
              }
            }(OW))
          }))
        }
      },
      sW = {
        writeOnBoard(WW) {
          var iW;
          let {
            pos: OW,
            text: mW,
            Oc: EW,
            textSize: PW
          } = WW;
          null === (iW = (0, NW.f)()) || void 0 === iW || iW.send(LW.e.UpdateBoard, (0, LW.Y)({
            QL: OW,
            Wc: mW,
            Oc: EW,
            mc: PW
          }))
        },
        writeBook(WW) {
          var iW;
          let {
            pages: OW,
            title: mW,
            published: EW
          } = WW;
          null === (iW = (0, NW.f)()) || void 0 === iW || iW.send(LW.e.UpdateBook, (0, LW.$)({
            Ut: OW,
            kt: mW,
            st: EW
          }))
        },
        writeNameTag(WW) {
          var iW;
          null === (iW = (0, NW.f)()) || void 0 === iW || iW.send(LW.e.UpdateNameTag, WW)
        },
        setCustomLobbyBlock(WW) {
          let {
            pos: iW,
            blockName: OW
          } = WW;
          const mW = (0, NW.p)(),
            EW = (0, NW.f)();
          mW && EW && EW.send(LW.e.SetCustomLobbyBlock, (0, LW.N)({
            NL: mW.blockIdOf(OW),
            EL: iW
          }))
        }
      }
  },
  42174: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      g: () => PW,
      k: () => LW
    });
    var mW = OW(42094),
      EW = OW(5533),
      NW = OW(42109);

    function PW() {
      var WW;
      const iW = null === (WW = (0, NW.f)()) || void 0 === WW ? void 0 : WW.api.localId;
      return void 0 === iW || iW === mW.kd ? null : String(iW)
    }

    function LW(WW) {
      const iW = (0, NW.f)();
      if (null !== iW) return WW(iW);
      let OW = null;
      const mW = (0, EW.v)((() => {
        const iW = (0, NW.f)();
        null !== iW && null === OW && (mW(), OW = WW(iW))
      }));
      return () => {
        var WW;
        mW(), null === (WW = OW) || void 0 === WW || WW()
      }
    }

    function cW(WW, iW, OW) {
      return {
        current: () => {
          const OW = (0, NW.f)();
          return null === OW ? iW : WW(OW)()
        },
        watch: iW => LW((mW => {
          const EW = WW(mW);
          let NW = EW();
          return iW(NW), OW((() => {
            const WW = EW();
            WW !== NW && (NW = WW, iW(WW))
          }))
        }))
      }
    }
  },
  42165: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(42109),
      EW = OW(42174),
      NW = OW(42176);

    function PW() {
      var WW, iW;
      return null !== (WW = null === (iW = (0, mW.f)()) || void 0 === iW ? void 0 : iW.itemBridgeSources) && void 0 !== WW ? WW : NW.c
    }

    function LW(WW) {
      return {
        current: () => PW().states[WW].current(),
        watch: iW => (0, EW.k)((OW => {
          const mW = OW.itemBridgeSources.states[WW];
          return iW(mW.current()), mW.watch(iW)
        }))
      }
    }

    function cW(WW) {
      return {
        watch: iW => (0, EW.k)((OW => OW.itemBridgeSources.events[WW].watch(iW)))
      }
    }
    const wW = {
      states: {
        inventory: LW("inventory"),
        hotbar: LW("hotbar"),
        crafting: LW("crafting"),
        heldItemAim: LW("heldItemAim")
      },
      events: {
        hotbarSlotRequested: cW("hotbarSlotRequested"),
        hotbarScrolled: cW("hotbarScrolled"),
        numberKeyPressed: cW("numberKeyPressed"),
        inventoryDropRequested: cW("inventoryDropRequested"),
        chestToggled: cW("chestToggled"),
        chestRefreshed: cW("chestRefreshed"),
        inventorySynced: cW("inventorySynced"),
        enchantingTableOpened: cW("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: WW => PW().commands.selectHotbarSlot(WW),
        removeInventoryItem: WW => PW().commands.removeInventoryItem(WW),
        swapInventorySlots: WW => PW().commands.swapInventorySlots(WW),
        moveInventoryItem: WW => PW().commands.moveInventoryItem(WW),
        quickMoveInventoryItem: WW => PW().commands.quickMoveInventoryItem(WW),
        closeChest: WW => PW().commands.closeChest(WW),
        focusCrafting: WW => PW().commands.focusCrafting(WW),
        craftRecipe: WW => PW().commands.craftRecipe(WW),
        salvageItem: WW => PW().commands.salvageItem(WW),
        enchantItem: WW => PW().commands.enchantItem(WW)
      },
      queries: {
        enchantingOffer: WW => PW().queries.enchantingOffer(WW)
      }
    }
  },
  42176: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW
    });
    var mW = OW(40980),
      EW = OW(37968);

    function NW(WW) {
      return {
        current: () => WW,
        watch: () => () => {}
      }
    }

    function PW() {}
    const LW = Object.freeze([0, 0, 0]),
      cW = {
        states: {
          health: NW({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: NW({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: NW({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: NW({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: NW({}),
          creativeVisibility: NW({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: NW(null),
          heldItemAim: NW({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: NW(!1),
          gliderBoostFuel: NW(0),
          flight: NW({
            canFly: !1,
            flying: !1
          }),
          crafting: NW({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: NW({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: NW({}),
          fullInventory: NW(!1),
          crosshairTarget: NW({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: NW(!0),
          freeCamera: NW({
            allowed: !1,
            movesFly: !1
          }),
          replay: NW(null),
          replayEdits: NW(null),
          replayRecorder: NW(EW.b),
          replayVideoExporting: NW(!1)
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
          selectHotbarSlot: PW,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: PW,
          setInventoryOpen: PW,
          changeIronChestPasskey: PW,
          dragReplayCamera: PW,
          applyTemporaryThirdPerson: PW,
          holdEmoteWheel: PW,
          recordFlyingMiddleText: PW,
          focusCrafting: PW,
          craftRecipe: () => ({
            lL: 0,
            WZ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: PW,
          setShopOpen: PW,
          buyShopItem: PW,
          lobbyManage: PW,
          sendChatMessage: () => !1,
          ignorePlayer: PW,
          reportPlayer: PW,
          reportWorldCodeChat: PW,
          requestDiscordReportKey: PW,
          reportLobbyOrGame: PW,
          playEmote: PW,
          updateMyCosmetic: PW,
          writeOnBoard: PW,
          writeBook: PW,
          writeNameTag: PW,
          setCustomLobbyBlock: PW,
          openIronChest: PW,
          sendCodeCollab: PW,
          clickCodeBlock: PW,
          bindCustomButtonKeys: PW,
          pressCustomButton: PW,
          moveReplayFreecam: PW,
          holdReplayFreecamVertical: PW,
          respawn: PW,
          wakeUp: PW,
          requestLeaderboard: PW,
          completeTask: PW,
          setServerCookie: PW,
          answerUiRequest: PW,
          chooseRewardedAd: PW,
          setCameraZoom: PW,
          setFreeCameraMovesFly: PW,
          setBlockHighlight: PW,
          setCrosshairInteractPrompt: PW,
          setLookSensitivity: PW,
          replayAction: PW,
          setReplayPlaying: PW,
          seekReplay: PW,
          setReplayCameraMode: PW,
          syncReplayCameraMode: PW,
          setReplayCameraKeyframe: PW,
          moveReplayCameraKeyframe: PW,
          deleteReplayCameraKeyframes: PW,
          setReplayPlaybackMark: PW,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: PW,
          exportReplayVideo: PW,
          toggleRecording: PW,
          saveClip: PW,
          setRecorderPrefs: PW,
          setReplayViewerOpen: PW
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => mW.c,
          worldCodeAiGameState: () => mW.e
        },
        lookups: {
          localPos: () => LW,
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
  42103: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => TW,
      d: () => yW,
      e: () => JW,
      f: () => YW,
      h: () => KW
    });
    var mW = OW(40469),
      EW = OW(1217),
      NW = OW(2061),
      PW = OW(2072),
      LW = OW(4454),
      cW = OW(37970),
      wW = OW(1351),
      tW = OW(42109),
      ZW = OW(5575),
      xW = OW(3305),
      lW = OW(42116),
      AW = OW(42118),
      bW = OW(42165);
    let jW = null;

    function UW(WW) {
      const iW = new Map,
        OW = OW => {
          if ("string" !== typeof OW) return;
          let mW = iW.get(OW);
          return void 0 === mW && (mW = WW(OW), void 0 !== mW && iW.set(OW, mW)), mW
        };
      return new Proxy({}, {
        get: (WW, iW) => OW(iW),
        has: (WW, iW) => void 0 !== OW(iW)
      })
    }

    function kW(WW) {
      const iW = (0, LW.b)(WW);
      return void 0 !== iW && (0, LW.d)(iW) === WW
    }

    function sW(WW) {
      var iW;
      const OW = null === (iW = (0, tW.f)()) || void 0 === iW ? void 0 : iW.tables;
      if (void 0 === OW || !kW(WW)) return;
      const mW = {
          displayName: OW.getDisplayName(WW)
        },
        EW = OW.getItemStat(WW, "description");
      void 0 !== EW && null !== EW && (mW.description = EW);
      const {
        rootName: NW
      } = OW.getMetaInfo(WW);
      NW !== WW && (mW.rootName = NW);
      const PW = OW.getItemStat(WW, "armourReduction");
      return void 0 !== PW && null !== PW && (mW.armourReduction = PW), mW
    }(0, tW.t)((WW => {
      jW = WW
    }));
    const MW = (0, PW.k)("DisplayName", "Description");

    function KW() {
      return Boolean(NW.d.get("useInventory") && NW.d.get("useFullInventory"))
    }
    let SW = null;
    const YW = {
        inventory: function() {
          const WW = bW.c.states.inventory;
          let iW = null;
          const OW = WW => {
            var OW;
            return null === WW.chest ? WW : ((null === (OW = iW) || void 0 === OW ? void 0 : OW.from) === WW && iW.chestVersion === (0, AW.e)() || (iW = {
              from: WW,
              chestVersion: (0, AW.e)(),
              view: {
                ...WW,
                chest: (0, AW.m)(WW.chest)
              }
            }), iW.view)
          };
          return {
            current: () => OW(WW.current()),
            watch: iW => WW.watch((WW => {
              iW(OW(WW))
            }))
          }
        }(),
        crafting: bW.c.states.crafting,
        stationItems: {
          current() {
            var WW;
            return (null === (WW = SW) || void 0 === WW ? void 0 : WW.namesVersion) !== (0, LW.f)() && (SW = {
              namesVersion: (0, LW.f)(),
              items: {
                enchantable: UW((WW => {
                  const iW = (0, LW.b)(WW);
                  return void 0 !== iW && null !== jW && jW.enchantmentPerksOf(iW).length > 0 || void 0
                })),
                salvageable: UW((WW => !(!kW(WW) || null === (0, cW.e)(WW)) || void 0))
              }
            }), SW.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let WW = null;
          const iW = () => {
            var iW;
            return (null === (iW = WW) || void 0 === iW ? void 0 : iW.namesVersion) !== (0, LW.f)() && (WW = {
              namesVersion: (0, LW.f)(),
              infos: UW(sW)
            }), WW.infos
          };
          return {
            current: iW,
            watch: OW => (0, PW.w)((mW => {
              mW.some(MW) && (WW = null, OW(iW()))
            }))
          }
        }(),
        creativeVisibility: (0, PW.r)((function() {
          const WW = {};
          for (const EW of null !== (iW = null === (OW = jW) || void 0 === OW ? void 0 : OW.creativeItemIds()) && void 0 !== iW ? iW : []) {
            var iW, OW, PW, cW;
            const wW = (0, LW.d)(EW);
            if (void 0 === wW) continue;
            const tW = null !== (PW = NW.d.get((0, mW.h)(wW, "showInCreativeInven"))) && void 0 !== PW ? PW : null === (cW = jW) || void 0 === cW ? void 0 : cW.showInCreativeInvenOf(EW);
            "boolean" === typeof tW && (WW[wW] = tW)
          }
          return {
            publicLobby: (0, EW.R)((0, wW.d)().lobbyName),
            shownInGame: WW
          }
        }), ["connectedGameChanged"], (0, PW.k)("ShowInCreativeInven")),
        fullInventory: (0, PW.r)(KW, [], (0, PW.o)("useInventory", "useFullInventory"))
      },
      yW = {
        inventoryDropRequested: bW.c.events.inventoryDropRequested,
        chestToggled: bW.c.events.chestToggled,
        chestRefreshed: bW.c.events.chestRefreshed,
        inventorySynced: bW.c.events.inventorySynced,
        enchantingTableOpened: bW.c.events.enchantingTableOpened
      },
      TW = {
        removeInventoryItem: bW.c.commands.removeInventoryItem,
        swapInventorySlots: bW.c.commands.swapInventorySlots,
        moveInventoryItem: bW.c.commands.moveInventoryItem,
        quickMoveInventoryItem: bW.c.commands.quickMoveInventoryItem,
        closeChest: bW.c.commands.closeChest,
        setInventoryOpen(WW) {
          (0, ZW.j)(xW.y.InventoryOpen, WW ? xW.y.InventoryOpen : 0)
        },
        focusCrafting: bW.c.commands.focusCrafting,
        craftRecipe: bW.c.commands.craftRecipe,
        salvageItem: bW.c.commands.salvageItem,
        enchantItem: bW.c.commands.enchantItem,
        changeIronChestPasskey(WW) {
          var iW;
          let {
            pos: OW,
            rL: mW
          } = WW;
          null === (iW = (0, tW.f)()) || void 0 === iW || iW.send(lW.e.ChangeIronChestPasskey, (0, lW.m)({
            CE: OW,
            rL: mW
          }))
        },
        openIronChest(WW) {
          var iW;
          let {
            pos: OW,
            rL: mW
          } = WW;
          null === (iW = (0, tW.f)()) || void 0 === iW || iW.send(lW.e.OpenIronChest, (0, lW.G)({
            CE: OW,
            rL: mW
          }))
        }
      },
      JW = {
        enchantingOffer: bW.c.queries.enchantingOffer
      }
  },
  42158: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      g: () => tW,
      j: () => PW,
      m: () => EW,
      n: () => LW,
      p: () => wW
    });
    class mW extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function EW(WW) {
      return WW instanceof RangeError && /call stack/i.test(WW.message) || WW instanceof Error && "InternalError" === WW.name && /recursion/i.test(WW.message)
    }
    const NW = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function PW(WW) {
      var iW;
      return WW instanceof WebAssembly.RuntimeError || WW instanceof mW || EW(WW) && NW.test(null !== (iW = WW.stack) && void 0 !== iW ? iW : "")
    }

    function LW(WW, iW) {
      if (PW(WW)) throw WW;
      console.error(iW, WW)
    }

    function cW(WW, iW, OW, EW, NW) {
      if (iW % EW !== 0 || iW + OW > WW.byteLength) throw new mW(`${NW}: ${OW} bytes at ${iW}, ${EW}-aligned, outside ${WW.byteLength} bytes of memory`)
    }

    function wW(WW, iW, OW, mW, EW) {
      return 0 === OW ? null : (cW(iW, OW, mW * WW.BYTES_PER_ELEMENT, WW.BYTES_PER_ELEMENT, EW), new WW(iW, OW, mW))
    }

    function tW(WW, iW, OW, mW, EW) {
      return 0 === iW ? null : (cW(WW, iW, OW, mW, EW), new DataView(WW, iW, OW))
    }
  },
  42109: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      e: () => UW,
      f: () => bW,
      h: () => jW,
      l: () => xW,
      o: () => lW,
      p: () => tW,
      t: () => ZW,
      x: () => AW
    });
    class mW extends Error {
      constructor(WW) {
        super(`the join's code did not load: ${WW instanceof Error?WW.message:String(WW)}`, {
          cause: WW
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === WW || void 0 === WW ? void 0 : WW.request
      }
    }
    let EW = null,
      NW = null,
      PW = null;
    const LW = [];
    let cW = null;

    function wW(WW, iW) {
      try {
        WW(iW)
      } catch (OW) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", OW)
      }
    }

    function tW() {
      return cW
    }

    function ZW(WW) {
      LW.push(WW), null !== cW && wW(WW, cW)
    }

    function xW(WW) {
      return EW ??= Promise.all([OW.e(85), OW.e(113), OW.e(88), OW.e(177), OW.e(91), OW.e(224), OW.e(252), OW.e(112), OW.e(142), OW.e(245), OW.e(244), OW.e(306), OW.e(243), OW.e(222), OW.e(50), OW.e(223), OW.e(127), OW.e(214), OW.e(280), OW.e(143), OW.e(103), OW.e(69)]).then((() => OW(54728))).then((iW => {
        iW.loadAudio(WW), cW = iW;
        for (const WW of LW) wW(WW, iW);
        return iW
      })).catch((WW => {
        throw EW = null, WW
      })), EW
    }
    async function lW(WW, iW) {
      try {
        const OW = await xW(WW);
        await OW.loadClientGame(iW)
      } catch (OW) {
        throw new mW(OW)
      }
    }

    function AW(WW, iW) {
      NW = {
        running: WW,
        shell: iW
      }
    }

    function bW() {
      return PW
    }
    async function jW(WW) {
      const iW = NW;
      if ((null === iW || void 0 === iW ? void 0 : iW.running) !== WW) throw new Error("the core's session has ended");
      const OW = await xW(iW.shell.audio).catch((WW => {
        throw new mW(WW)
      }));
      if (null !== PW) return PW;
      if (NW !== iW || WW.isStopped) throw new Error("the core stopped while the game code loaded");
      if (PW = OW.startGameHost(WW, iW.shell), null === PW) throw new Error("the core's shared tables didn't read, so the game can't start");
      return PW
    }

    function UW() {
      null !== PW && (null !== cW ? cW.endGameHost(PW) : PW.closeGame()), PW = null, NW = null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);