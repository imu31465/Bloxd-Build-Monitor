export const id = 211;
export const ids = [211];
export const modules = {
  38927: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      e: () => AY
    });
    const FY = "The world isn't loaded, so no blocks can be seen.",
      AY = "The world isn't loaded, so nothing in it can be seen."
  },
  36187: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      d: () => AY
    });
    let FY = () => null;

    function AY(YY) {
      FY = YY
    }

    function IY(YY, rY) {
      return FY(YY, rY)
    }
  },
  39708: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => QY,
      f: () => mY,
      i: () => EY,
      k: () => oY
    });
    var FY = DY(25),
      AY = DY(39717),
      IY = DY(39693),
      RY = DY(39725),
      OY = DY(39699),
      gY = DY(39728),
      aY = DY(39739);

    function vY(YY) {
      var rY, DY;
      const FY = (0, IY.g)();
      return FY ? null === (rY = (0, AY.d)(FY.api, YY[0], YY[1], YY[2])) || void 0 === rY || null === (DY = rY.persisted) || void 0 === DY ? void 0 : DY.shared : void 0
    }

    function uY(YY) {
      return `${YY[0]},${YY[1]},${YY[2]}`
    }
    const sY = new Map;
    let iY = null,
      yY = 0;

    function QY() {
      return yY
    }

    function oY(YY) {
      const rY = null !== iY && iY.key === uY(YY.pos) ? iY.type : null;
      if (null === rY) return YY;
      let DY = null;
      if ("Iron" === rY) {
        const {
          cachedPasskey: rY,
          ...FY
        } = WY(YY.pos);
        DY = {
          kI: null !== rY && void 0 !== rY ? rY : [0, 0, 0, 0],
          ...FY
        }
      }
      return {
        ...YY,
        type: rY,
        ironChest: DY
      }
    }

    function WY(YY) {
      const rY = vY(YY),
        DY = null === rY || void 0 === rY ? void 0 : rY.ownerDbId,
        FY = function(YY) {
          var rY;
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vY(YY);
          const FY = uY(YY),
            AY = sY.get(FY);
          return AY ? AY.lastOpened < (null !== (rY = null === DY || void 0 === DY ? void 0 : DY.passkeyLastUpdated) && void 0 !== rY ? rY : 0) ? (sY.delete(FY), null) : [...AY.kI] : null
        }(YY, rY);
      return void 0 === DY ? {
        cachedPasskey: FY
      } : {
        ownerDbId: DY,
        cachedPasskey: FY
      }
    }(0, aY.l)(RY.e, (YY => {
      const rY = (0, gY.f)(RY.e, YY);
      if (!(0, gY.c)(rY) || rY.eF) return;
      if (yY++, !rY.mF || null === rY.lF) return void(iY = null);
      const DY = uY(rY.lF);
      iY = {
        key: DY,
        type: rY.SF
      }, null !== rY.TF && sY.set(DY, {
        kI: [...rY.TF],
        lastOpened: Date.now()
      })
    })), (0, aY.g)((() => {
      sY.clear(), iY = null, yY++
    })), (0, aY.h)((() => {
      null !== iY && (iY = null, yY++, FY.g.vo("chestToggleFromServer", !1, !0))
    }));
    const EY = {
        boardEditRequested: {
          watch: YY => (0, FY.j)("EditBoard", (rY => {
            let {
              pos: DY
            } = rY;
            if (null === DY) return void YY(null);
            const FY = (0, IY.g)(),
              AY = (0, IY.v)();
            FY && AY && YY(AY.readBoardToEdit(FY.api, FY.chunks, DY))
          }))
        },
        ironChestOpenRequested: {
          watch: YY => (0, FY.j)("OpenIronChest", (rY => {
            let {
              pos: DY
            } = rY;
            YY(function(YY) {
              return {
                pos: YY,
                ...WY(YY)
              }
            }(DY))
          }))
        }
      },
      mY = {
        writeOnBoard(YY) {
          var rY;
          let {
            pos: DY,
            text: FY,
            textSize: AY
          } = YY;
          null === (rY = (0, IY.g)()) || void 0 === rY || rY.send(OY.d.UpdateBoard, (0, OY.X)({
            DO: DY,
            FO: FY,
            IO: AY
          }))
        },
        writeBook(YY) {
          var rY;
          let {
            pages: DY,
            title: FY,
            published: AY
          } = YY;
          null === (rY = (0, IY.g)()) || void 0 === rY || rY.send(OY.d.UpdateBook, (0, OY.Y)({
            UR: DY,
            LR: FY,
            tR: AY
          }))
        },
        writeNameTag(YY) {
          var rY;
          null === (rY = (0, IY.g)()) || void 0 === rY || rY.send(OY.d.UpdateNameTag, YY)
        },
        setCustomLobbyBlock(YY) {
          let {
            pos: rY,
            blockName: DY
          } = YY;
          const FY = (0, IY.v)(),
            AY = (0, IY.g)();
          FY && AY && AY.send(OY.d.SetCustomLobbyBlock, (0, OY.K)({
            rv: FY.blockIdOf(DY),
            Yv: rY
          }))
        }
      }
  },
  39752: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => gY,
      e: () => RY,
      g: () => OY
    });
    var FY = DY(39683),
      AY = DY(4365),
      IY = DY(39693);

    function RY() {
      var YY;
      const rY = null === (YY = (0, IY.g)()) || void 0 === YY ? void 0 : YY.api.localId;
      return void 0 === rY || rY === FY.Yc ? null : String(rY)
    }

    function OY(YY) {
      const rY = (0, IY.g)();
      if (null !== rY) return YY(rY);
      let DY = null;
      const FY = (0, AY.s)((() => {
        const rY = (0, IY.g)();
        null !== rY && null === DY && (FY(), DY = YY(rY))
      }));
      return () => {
        var YY;
        FY(), null === (YY = DY) || void 0 === YY || YY()
      }
    }

    function gY(YY, rY, DY) {
      return {
        current: () => {
          const DY = (0, IY.g)();
          return null === DY ? rY : YY(DY)()
        },
        watch: rY => OY((FY => {
          const AY = YY(FY);
          let IY = AY();
          return rY(IY), DY((() => {
            const YY = AY();
            YY !== IY && (IY = YY, rY(YY))
          }))
        }))
      }
    }
  },
  39747: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY
    });
    var FY = DY(39693),
      AY = DY(39752),
      IY = DY(39759);

    function RY() {
      var YY, rY;
      return null !== (YY = null === (rY = (0, FY.g)()) || void 0 === rY ? void 0 : rY.itemBridgeSources) && void 0 !== YY ? YY : IY.e
    }

    function OY(YY) {
      return {
        current: () => RY().states[YY].current(),
        watch: rY => (0, AY.g)((DY => {
          const FY = DY.itemBridgeSources.states[YY];
          return rY(FY.current()), FY.watch(rY)
        }))
      }
    }

    function gY(YY) {
      return {
        watch: rY => (0, AY.g)((DY => DY.itemBridgeSources.events[YY].watch(rY)))
      }
    }
    const aY = {
      states: {
        inventory: OY("inventory"),
        hotbar: OY("hotbar"),
        crafting: OY("crafting"),
        heldItemAim: OY("heldItemAim")
      },
      events: {
        hotbarSlotRequested: gY("hotbarSlotRequested"),
        hotbarScrolled: gY("hotbarScrolled"),
        numberKeyPressed: gY("numberKeyPressed"),
        inventoryDropRequested: gY("inventoryDropRequested"),
        chestToggled: gY("chestToggled"),
        chestRefreshed: gY("chestRefreshed"),
        inventorySynced: gY("inventorySynced"),
        enchantingTableOpened: gY("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: YY => RY().commands.selectHotbarSlot(YY),
        removeInventoryItem: YY => RY().commands.removeInventoryItem(YY),
        swapInventorySlots: YY => RY().commands.swapInventorySlots(YY),
        moveInventoryItem: YY => RY().commands.moveInventoryItem(YY),
        quickMoveInventoryItem: YY => RY().commands.quickMoveInventoryItem(YY),
        closeChest: YY => RY().commands.closeChest(YY),
        focusCrafting: YY => RY().commands.focusCrafting(YY),
        craftRecipe: YY => RY().commands.craftRecipe(YY),
        salvageItem: YY => RY().commands.salvageItem(YY),
        enchantItem: YY => RY().commands.enchantItem(YY)
      },
      queries: {
        enchantingOffer: YY => RY().queries.enchantingOffer(YY)
      }
    }
  },
  39759: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = DY(38927);

    function AY(YY) {
      return {
        current: () => YY,
        watch: () => () => {}
      }
    }

    function IY() {}
    const RY = Object.freeze([0, 0, 0]),
      OY = {
        states: {
          health: AY({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: AY({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: AY({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: AY({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: AY({}),
          creativeVisibility: AY({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: AY(null),
          heldItemAim: AY({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: AY(!1),
          gliderBoostFuel: AY(0),
          flight: AY({
            canFly: !1,
            flying: !1
          }),
          crafting: AY({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: AY({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: AY({}),
          fullInventory: AY(!1),
          crosshairTarget: AY({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: AY(!0),
          freeCamera: AY({
            allowed: !1,
            movesFly: !1
          }),
          replay: AY(null),
          replayEdits: AY(null),
          replayRecorder: AY({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: AY(!1)
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
          selectHotbarSlot: IY,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: IY,
          setInventoryOpen: IY,
          changeIronChestPasskey: IY,
          dragReplayCamera: IY,
          applyTemporaryThirdPerson: IY,
          holdEmoteWheel: IY,
          recordFlyingMiddleText: IY,
          focusCrafting: IY,
          craftRecipe: () => ({
            Ev: 0,
            da: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: IY,
          setShopOpen: IY,
          buyShopItem: IY,
          sendChatMessage: IY,
          ignorePlayer: IY,
          reportPlayer: IY,
          reportWorldCodeChat: IY,
          requestDiscordReportKey: IY,
          reportLobbyOrGame: IY,
          playEmote: IY,
          updateMyCosmetic: IY,
          writeOnBoard: IY,
          writeBook: IY,
          writeNameTag: IY,
          setCustomLobbyBlock: IY,
          openIronChest: IY,
          sendCodeCollab: IY,
          clickCodeBlock: IY,
          bindCustomButtonKeys: IY,
          pressCustomButton: IY,
          moveReplayFreecam: IY,
          holdReplayFreecamVertical: IY,
          respawn: IY,
          wakeUp: IY,
          requestLeaderboard: IY,
          completeTask: IY,
          setServerCookie: IY,
          answerUiRequest: IY,
          chooseRewardedAd: IY,
          setCameraZoom: IY,
          setFreeCameraMovesFly: IY,
          setBlockHighlight: IY,
          setCrosshairInteractPrompt: IY,
          setLookSensitivity: IY,
          replayAction: IY,
          setReplayPlaying: IY,
          seekReplay: IY,
          setReplayCameraMode: IY,
          syncReplayCameraMode: IY,
          setReplayCameraKeyframe: IY,
          moveReplayCameraKeyframe: IY,
          deleteReplayCameraKeyframes: IY,
          setReplayPlaybackMark: IY,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: IY,
          exportReplayVideo: IY,
          toggleRecording: IY,
          saveClip: IY,
          setRecorderPrefs: IY,
          setReplayViewerOpen: IY
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => FY.b,
          worldCodeAiGameState: () => FY.e
        },
        lookups: {
          localPos: () => RY,
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
  39686: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => NY,
      e: () => eY,
      h: () => BY,
      i: () => TY,
      j: () => SY
    });
    var FY = DY(38568),
      AY = DY(1231),
      IY = DY(1823),
      RY = DY(1830),
      OY = DY(2864),
      gY = DY(36187),
      aY = DY(1322),
      vY = DY(39693),
      uY = DY(4396),
      sY = DY(2251),
      iY = DY(39699),
      yY = DY(39708),
      QY = DY(39747);
    let oY = null;

    function WY(YY) {
      const rY = new Map,
        DY = DY => {
          if ("string" !== typeof DY) return;
          let FY = rY.get(DY);
          return void 0 === FY && (FY = YY(DY), void 0 !== FY && rY.set(DY, FY)), FY
        };
      return new Proxy({}, {
        get: (YY, rY) => DY(rY),
        has: (YY, rY) => void 0 !== DY(rY)
      })
    }

    function EY(YY) {
      const rY = (0, OY.b)(YY);
      return void 0 !== rY && (0, OY.e)(rY) === YY
    }

    function mY(YY) {
      var rY;
      const DY = null === (rY = (0, vY.g)()) || void 0 === rY ? void 0 : rY.tables;
      if (void 0 === DY || !EY(YY)) return;
      const FY = {
          displayName: DY.getDisplayName(YY)
        },
        AY = DY.getItemStat(YY, "description");
      void 0 !== AY && null !== AY && (FY.description = AY);
      const {
        rootName: IY
      } = DY.getMetaInfo(YY);
      IY !== YY && (FY.rootName = IY);
      const RY = DY.getItemStat(YY, "armourReduction");
      return void 0 !== RY && null !== RY && (FY.armourReduction = RY), FY
    }(0, vY.z)((YY => {
      oY = YY
    }));
    const VY = (0, RY.g)("DisplayName", "Description");

    function SY() {
      return Boolean(IY.b.get("useInventory") && IY.b.get("useFullInventory"))
    }
    let lY = null;
    const TY = {
        inventory: function() {
          const YY = QY.d.states.inventory;
          let rY = null;
          const DY = YY => {
            var DY;
            return null === YY.chest ? YY : ((null === (DY = rY) || void 0 === DY ? void 0 : DY.from) === YY && rY.chestVersion === (0, yY.b)() || (rY = {
              from: YY,
              chestVersion: (0, yY.b)(),
              view: {
                ...YY,
                chest: (0, yY.k)(YY.chest)
              }
            }), rY.view)
          };
          return {
            current: () => DY(YY.current()),
            watch: rY => YY.watch((YY => {
              rY(DY(YY))
            }))
          }
        }(),
        crafting: QY.d.states.crafting,
        stationItems: {
          current() {
            var YY;
            return (null === (YY = lY) || void 0 === YY ? void 0 : YY.namesVersion) !== (0, OY.i)() && (lY = {
              namesVersion: (0, OY.i)(),
              items: {
                enchantable: WY((YY => {
                  const rY = (0, OY.b)(YY);
                  return void 0 !== rY && null !== oY && oY.enchantmentPerksOf(rY).length > 0 || void 0
                })),
                salvageable: WY((YY => !(!EY(YY) || null === (0, gY.b)(YY)) || void 0))
              }
            }), lY.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let YY = null;
          const rY = () => {
            var rY;
            return (null === (rY = YY) || void 0 === rY ? void 0 : rY.namesVersion) !== (0, OY.i)() && (YY = {
              namesVersion: (0, OY.i)(),
              infos: WY(mY)
            }), YY.infos
          };
          return {
            current: rY,
            watch: DY => (0, RY.o)((FY => {
              FY.some(VY) && (YY = null, DY(rY()))
            }))
          }
        }(),
        creativeVisibility: (0, RY.k)((function() {
          const YY = {};
          for (const AY of null !== (rY = null === (DY = oY) || void 0 === DY ? void 0 : DY.creativeItemIds()) && void 0 !== rY ? rY : []) {
            var rY, DY, RY, gY;
            const aY = (0, OY.e)(AY);
            if (void 0 === aY) continue;
            const vY = null !== (RY = IY.b.get((0, FY.f)(aY, "showInCreativeInven"))) && void 0 !== RY ? RY : null === (gY = oY) || void 0 === gY ? void 0 : gY.showInCreativeInvenOf(AY);
            "boolean" === typeof vY && (YY[aY] = vY)
          }
          return {
            publicLobby: (0, AY.P)((0, aY.b)().lobbyName),
            shownInGame: YY
          }
        }), ["connectedGameChanged"], (0, RY.g)("ShowInCreativeInven")),
        fullInventory: (0, RY.k)(SY, [], (0, RY.i)("useInventory", "useFullInventory"))
      },
      eY = {
        inventoryDropRequested: QY.d.events.inventoryDropRequested,
        chestToggled: QY.d.events.chestToggled,
        chestRefreshed: QY.d.events.chestRefreshed,
        inventorySynced: QY.d.events.inventorySynced,
        enchantingTableOpened: QY.d.events.enchantingTableOpened
      },
      NY = {
        removeInventoryItem: QY.d.commands.removeInventoryItem,
        swapInventorySlots: QY.d.commands.swapInventorySlots,
        moveInventoryItem: QY.d.commands.moveInventoryItem,
        quickMoveInventoryItem: QY.d.commands.quickMoveInventoryItem,
        closeChest: QY.d.commands.closeChest,
        setInventoryOpen(YY) {
          (0, uY.k)(sY.w.InventoryOpen, YY ? sY.w.InventoryOpen : 0)
        },
        focusCrafting: QY.d.commands.focusCrafting,
        craftRecipe: QY.d.commands.craftRecipe,
        salvageItem: QY.d.commands.salvageItem,
        enchantItem: QY.d.commands.enchantItem,
        changeIronChestPasskey(YY) {
          var rY;
          let {
            pos: DY,
            kI: FY
          } = YY;
          null === (rY = (0, vY.g)()) || void 0 === rY || rY.send(iY.d.ChangeIronChestPasskey, (0, iY.i)({
            lF: DY,
            kI: FY
          }))
        },
        openIronChest(YY) {
          var rY;
          let {
            pos: DY,
            kI: FY
          } = YY;
          null === (rY = (0, vY.g)()) || void 0 === rY || rY.send(iY.d.OpenIronChest, (0, iY.C)({
            lF: DY,
            kI: FY
          }))
        }
      },
      BY = {
        enchantingOffer: QY.d.queries.enchantingOffer
      }
  },
  39744: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY,
      e: () => uY,
      f: () => OY,
      g: () => IY,
      i: () => AY,
      m: () => gY,
      o: () => vY
    });
    class FY extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function AY(YY) {
      return YY instanceof RangeError && /call stack/i.test(YY.message) || YY instanceof Error && "InternalError" === YY.name && /recursion/i.test(YY.message)
    }

    function IY(YY) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(YY))
    }
    const RY = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function OY(YY) {
      var rY;
      return YY instanceof WebAssembly.RuntimeError || YY instanceof FY || AY(YY) && RY.test(null !== (rY = YY.stack) && void 0 !== rY ? rY : "")
    }

    function gY(YY, rY) {
      if (OY(YY)) throw YY;
      console.error(rY, YY)
    }

    function aY(YY, rY, DY, AY, IY) {
      if (rY % AY !== 0 || rY + DY > YY.byteLength) throw new FY(`${IY}: ${DY} bytes at ${rY}, ${AY}-aligned, outside ${YY.byteLength} bytes of memory`)
    }

    function vY(YY, rY, DY, FY, AY) {
      return 0 === DY ? null : (aY(rY, DY, FY * YY.BYTES_PER_ELEMENT, YY.BYTES_PER_ELEMENT, AY), new YY(rY, DY, FY))
    }

    function uY(YY, rY, DY, FY, AY) {
      return 0 === rY ? null : (aY(YY, rY, DY, FY, AY), new DataView(YY, rY, DY))
    }
  },
  39693: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => yY,
      e: () => FY,
      f: () => WY,
      g: () => QY,
      k: () => oY,
      n: () => sY,
      r: () => iY,
      v: () => vY,
      z: () => uY
    });
    class FY extends Error {
      constructor(YY) {
        super(`the join's code did not load: ${YY instanceof Error?YY.message:String(YY)}`, {
          cause: YY
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === YY || void 0 === YY ? void 0 : YY.request
      }
    }
    let AY = null,
      IY = null,
      RY = null;
    const OY = [];
    let gY = null;

    function aY(YY, rY) {
      try {
        YY(rY)
      } catch (DY) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", DY)
      }
    }

    function vY() {
      return gY
    }

    function uY(YY) {
      OY.push(YY), null !== gY && aY(YY, gY)
    }

    function sY(YY) {
      return AY ??= Promise.all([DY.e(69), DY.e(95), DY.e(209), DY.e(74), DY.e(186), DY.e(230), DY.e(210), DY.e(258), DY.e(92), DY.e(261), DY.e(237), DY.e(185), DY.e(195), DY.e(137), DY.e(85), DY.e(115), DY.e(235), DY.e(53)]).then((() => DY(41621))).then((rY => {
        rY.loadAudio(YY), gY = rY;
        for (const YY of OY) aY(YY, rY);
        return rY
      })).catch((YY => {
        throw AY = null, YY
      })), AY
    }
    async function iY(YY, rY) {
      try {
        const DY = await sY(YY);
        await DY.loadClientGame(rY)
      } catch (DY) {
        throw new FY(DY)
      }
    }

    function yY(YY, rY) {
      IY = {
        running: YY,
        shell: rY
      }
    }

    function QY() {
      return RY
    }
    async function oY(YY) {
      const rY = IY;
      if ((null === rY || void 0 === rY ? void 0 : rY.running) !== YY) throw new Error("the core's session has ended");
      const DY = await sY(rY.shell.audio).catch((YY => {
        throw new FY(YY)
      }));
      if (null !== RY) return RY;
      if (IY !== rY || YY.isStopped) throw new Error("the core stopped while the game code loaded");
      if (RY = DY.startGameHost(YY, rY.shell), null === RY) throw new Error("the core's shared tables didn't read, so the game can't start");
      return RY
    }

    function WY() {
      null !== RY && (null !== gY ? gY.endGameHost(RY) : RY.closeGame()), RY = null, IY = null
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);