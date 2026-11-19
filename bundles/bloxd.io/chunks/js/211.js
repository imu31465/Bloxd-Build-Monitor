export const id = 211;
export const ids = [211];
export const modules = {
  38557: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT
    });
    const iT = "The world isn't loaded, so no blocks can be seen.",
      zT = "The world isn't loaded, so nothing in it can be seen."
  },
  35750: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      e: () => zT
    });
    let iT = () => null;

    function zT(TT) {
      iT = TT
    }

    function kT(TT, oT) {
      return iT(TT, oT)
    }
  },
  39383: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => KT,
      f: () => gT,
      i: () => AT,
      j: () => MT
    });
    var iT = IT(16),
      zT = IT(39386),
      kT = IT(39371),
      WT = IT(39392),
      XT = IT(39379),
      BT = IT(39400),
      FT = IT(39415);

    function ST(TT) {
      var oT, IT;
      const iT = (0, kT.i)();
      return iT ? null === (oT = (0, zT.d)(iT.api, TT[0], TT[1], TT[2])) || void 0 === oT || null === (IT = oT.persisted) || void 0 === IT ? void 0 : IT.shared : void 0
    }

    function DT(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }
    const LT = new Map;
    let xT = null,
      cT = 0;

    function KT() {
      return cT
    }

    function MT(TT) {
      const oT = null !== xT && xT.key === DT(TT.pos) ? xT.type : null;
      if (null === oT) return TT;
      let IT = null;
      if ("Iron" === oT) {
        const {
          cachedPasskey: oT,
          ...iT
        } = rT(TT.pos);
        IT = {
          cW: null !== oT && void 0 !== oT ? oT : [0, 0, 0, 0],
          ...iT
        }
      }
      return {
        ...TT,
        type: oT,
        ironChest: IT
      }
    }

    function rT(TT) {
      const oT = ST(TT),
        IT = null === oT || void 0 === oT ? void 0 : oT.ownerDbId,
        iT = function(TT) {
          var oT;
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ST(TT);
          const iT = DT(TT),
            zT = LT.get(iT);
          return zT ? zT.lastOpened < (null !== (oT = null === IT || void 0 === IT ? void 0 : IT.passkeyLastUpdated) && void 0 !== oT ? oT : 0) ? (LT.delete(iT), null) : [...zT.cW] : null
        }(TT, oT);
      return void 0 === IT ? {
        cachedPasskey: iT
      } : {
        ownerDbId: IT,
        cachedPasskey: iT
      }
    }(0, FT.i)(WT.e, (TT => {
      const oT = (0, BT.h)(WT.e, TT);
      if (!(0, BT.d)(oT) || oT.Qi) return;
      if (cT++, !oT.ji || null === oT.ai) return void(xT = null);
      const IT = DT(oT.ai);
      xT = {
        key: IT,
        type: oT.Ui
      }, null !== oT.Yi && LT.set(IT, {
        cW: [...oT.Yi],
        lastOpened: Date.now()
      })
    })), (0, FT.e)((() => {
      LT.clear(), xT = null, cT++
    })), (0, FT.h)((() => {
      null !== xT && (xT = null, cT++, iT.h.XM("chestToggleFromServer", !1, !0))
    }));
    const AT = {
        boardEditRequested: {
          watch: TT => (0, iT.k)("EditBoard", (oT => {
            let {
              pos: IT
            } = oT;
            if (null === IT) return void TT(null);
            const iT = (0, kT.i)(),
              zT = (0, kT.p)();
            iT && zT && TT(zT.readBoardToEdit(iT.api, iT.chunks, IT))
          }))
        },
        ironChestOpenRequested: {
          watch: TT => (0, iT.k)("OpenIronChest", (oT => {
            let {
              pos: IT
            } = oT;
            TT(function(TT) {
              return {
                pos: TT,
                ...rT(TT)
              }
            }(IT))
          }))
        }
      },
      gT = {
        writeOnBoard(TT) {
          var oT;
          let {
            pos: IT,
            text: iT,
            textSize: zT
          } = TT;
          null === (oT = (0, kT.i)()) || void 0 === oT || oT.send(XT.b.UpdateBoard, (0, XT.W)({
            eX: IT,
            RX: iT,
            uX: zT
          }))
        },
        writeBook(TT) {
          var oT;
          let {
            pages: IT,
            title: iT,
            published: zT
          } = TT;
          null === (oT = (0, kT.i)()) || void 0 === oT || oT.send(XT.b.UpdateBook, (0, XT.Z)({
            AX: IT,
            gX: iT,
            hX: zT
          }))
        },
        writeNameTag(TT) {
          var oT;
          null === (oT = (0, kT.i)()) || void 0 === oT || oT.send(XT.b.UpdateNameTag, TT)
        },
        setCustomLobbyBlock(TT) {
          let {
            pos: oT,
            blockName: IT
          } = TT;
          const iT = (0, kT.p)(),
            zT = (0, kT.i)();
          iT && zT && zT.send(XT.b.SetCustomLobbyBlock, (0, XT.L)({
            mS: iT.blockIdOf(IT),
            wS: oT
          }))
        }
      }
  },
  39429: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT,
      h: () => WT,
      k: () => XT
    });
    var iT = IT(39354),
      zT = IT(4269),
      kT = IT(39371);

    function WT() {
      var TT;
      const oT = null === (TT = (0, kT.i)()) || void 0 === TT ? void 0 : TT.api.localId;
      return void 0 === oT || oT === iT.Yc ? null : String(oT)
    }

    function XT(TT) {
      const oT = (0, kT.i)();
      if (null !== oT) return TT(oT);
      let IT = null;
      const iT = (0, zT.u)((() => {
        const oT = (0, kT.i)();
        null !== oT && null === IT && (iT(), IT = TT(oT))
      }));
      return () => {
        var TT;
        iT(), null === (TT = IT) || void 0 === TT || TT()
      }
    }

    function BT(TT, oT, IT) {
      return {
        current: () => {
          const IT = (0, kT.i)();
          return null === IT ? oT : TT(IT)()
        },
        watch: oT => XT((iT => {
          const zT = TT(iT);
          let kT = zT();
          return oT(kT), IT((() => {
            const TT = zT();
            TT !== kT && (kT = TT, oT(TT))
          }))
        }))
      }
    }
  },
  39426: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(39371),
      zT = IT(39429),
      kT = IT(39436);

    function WT() {
      var TT, oT;
      return null !== (TT = null === (oT = (0, iT.i)()) || void 0 === oT ? void 0 : oT.itemBridgeSources) && void 0 !== TT ? TT : kT.c
    }

    function XT(TT) {
      return {
        current: () => WT().states[TT].current(),
        watch: oT => (0, zT.k)((IT => {
          const iT = IT.itemBridgeSources.states[TT];
          return oT(iT.current()), iT.watch(oT)
        }))
      }
    }

    function BT(TT) {
      return {
        watch: oT => (0, zT.k)((IT => IT.itemBridgeSources.events[TT].watch(oT)))
      }
    }
    const FT = {
      states: {
        inventory: XT("inventory"),
        hotbar: XT("hotbar"),
        crafting: XT("crafting"),
        heldItemAim: XT("heldItemAim")
      },
      events: {
        hotbarSlotRequested: BT("hotbarSlotRequested"),
        hotbarScrolled: BT("hotbarScrolled"),
        numberKeyPressed: BT("numberKeyPressed"),
        inventoryDropRequested: BT("inventoryDropRequested"),
        chestToggled: BT("chestToggled"),
        chestRefreshed: BT("chestRefreshed"),
        inventorySynced: BT("inventorySynced"),
        enchantingTableOpened: BT("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: TT => WT().commands.selectHotbarSlot(TT),
        removeInventoryItem: TT => WT().commands.removeInventoryItem(TT),
        swapInventorySlots: TT => WT().commands.swapInventorySlots(TT),
        moveInventoryItem: TT => WT().commands.moveInventoryItem(TT),
        quickMoveInventoryItem: TT => WT().commands.quickMoveInventoryItem(TT),
        closeChest: TT => WT().commands.closeChest(TT),
        focusCrafting: TT => WT().commands.focusCrafting(TT),
        craftRecipe: TT => WT().commands.craftRecipe(TT),
        salvageItem: TT => WT().commands.salvageItem(TT),
        enchantItem: TT => WT().commands.enchantItem(TT)
      },
      queries: {
        enchantingOffer: TT => WT().queries.enchantingOffer(TT)
      }
    }
  },
  39436: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(38557);

    function zT(TT) {
      return {
        current: () => TT,
        watch: () => () => {}
      }
    }

    function kT() {}
    const WT = Object.freeze([0, 0, 0]),
      XT = {
        states: {
          health: zT({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: zT({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: zT({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: zT({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: zT({}),
          creativeVisibility: zT({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: zT(null),
          heldItemAim: zT({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: zT(!1),
          gliderBoostFuel: zT(0),
          flight: zT({
            canFly: !1,
            flying: !1
          }),
          crafting: zT({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: zT({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: zT({}),
          fullInventory: zT(!1),
          crosshairTarget: zT({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: zT(!0),
          freeCamera: zT({
            allowed: !1,
            movesFly: !1
          }),
          replay: zT(null),
          replayEdits: zT(null),
          replayRecorder: zT({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: zT(!1)
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
          selectHotbarSlot: kT,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: kT,
          setInventoryOpen: kT,
          changeIronChestPasskey: kT,
          dragReplayCamera: kT,
          applyTemporaryThirdPerson: kT,
          holdEmoteWheel: kT,
          recordFlyingMiddleText: kT,
          focusCrafting: kT,
          craftRecipe: () => ({
            qS: 0,
            XS: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: kT,
          setShopOpen: kT,
          buyShopItem: kT,
          sendChatMessage: kT,
          ignorePlayer: kT,
          reportPlayer: kT,
          reportWorldCodeChat: kT,
          requestDiscordReportKey: kT,
          reportLobbyOrGame: kT,
          playEmote: kT,
          updateMyCosmetic: kT,
          writeOnBoard: kT,
          writeBook: kT,
          writeNameTag: kT,
          setCustomLobbyBlock: kT,
          openIronChest: kT,
          sendCodeCollab: kT,
          clickCodeBlock: kT,
          bindCustomButtonKeys: kT,
          pressCustomButton: kT,
          moveReplayFreecam: kT,
          holdReplayFreecamVertical: kT,
          respawn: kT,
          wakeUp: kT,
          requestLeaderboard: kT,
          completeTask: kT,
          setServerCookie: kT,
          answerUiRequest: kT,
          chooseRewardedAd: kT,
          setCameraZoom: kT,
          setFreeCameraMovesFly: kT,
          setBlockHighlight: kT,
          setCrosshairInteractPrompt: kT,
          setLookSensitivity: kT,
          replayAction: kT,
          setReplayPlaying: kT,
          seekReplay: kT,
          setReplayCameraMode: kT,
          syncReplayCameraMode: kT,
          setReplayCameraKeyframe: kT,
          moveReplayCameraKeyframe: kT,
          deleteReplayCameraKeyframes: kT,
          setReplayPlaybackMark: kT,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: kT,
          exportReplayVideo: kT,
          toggleRecording: kT,
          saveClip: kT,
          setRecorderPrefs: kT,
          setReplayViewerOpen: kT
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => iT.e,
          worldCodeAiGameState: () => iT.f
        },
        lookups: {
          localPos: () => WT,
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
  39362: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => uT,
      h: () => RT,
      l: () => vT,
      o: () => eT,
      q: () => wT
    });
    var iT = IT(38180),
      zT = IT(1193),
      kT = IT(1770),
      WT = IT(1780),
      XT = IT(2844),
      BT = IT(35750),
      FT = IT(1293),
      ST = IT(39371),
      DT = IT(4299),
      LT = IT(2201),
      xT = IT(39379),
      cT = IT(39383),
      KT = IT(39426);
    let MT = null;

    function rT(TT) {
      const oT = new Map,
        IT = IT => {
          if ("string" !== typeof IT) return;
          let iT = oT.get(IT);
          return void 0 === iT && (iT = TT(IT), void 0 !== iT && oT.set(IT, iT)), iT
        };
      return new Proxy({}, {
        get: (TT, oT) => IT(oT),
        has: (TT, oT) => void 0 !== IT(oT)
      })
    }

    function AT(TT) {
      const oT = (0, XT.d)(TT);
      return void 0 !== oT && (0, XT.g)(oT) === TT
    }

    function gT(TT) {
      var oT;
      const IT = null === (oT = (0, ST.i)()) || void 0 === oT ? void 0 : oT.tables;
      if (void 0 === IT || !AT(TT)) return;
      const iT = {
          displayName: IT.getDisplayName(TT)
        },
        zT = IT.getItemStat(TT, "description");
      void 0 !== zT && null !== zT && (iT.description = zT);
      const {
        rootName: kT
      } = IT.getMetaInfo(TT);
      kT !== TT && (iT.rootName = kT);
      const WT = IT.getItemStat(TT, "armourReduction");
      return void 0 !== WT && null !== WT && (iT.armourReduction = WT), iT
    }(0, ST.s)((TT => {
      MT = TT
    }));
    const hT = (0, WT.g)("DisplayName", "Description");

    function wT() {
      return Boolean(kT.e.get("useInventory") && kT.e.get("useFullInventory"))
    }
    let mT = null;
    const eT = {
        inventory: function() {
          const TT = KT.e.states.inventory;
          let oT = null;
          const IT = TT => {
            var IT;
            return null === TT.chest ? TT : ((null === (IT = oT) || void 0 === IT ? void 0 : IT.from) === TT && oT.chestVersion === (0, cT.d)() || (oT = {
              from: TT,
              chestVersion: (0, cT.d)(),
              view: {
                ...TT,
                chest: (0, cT.j)(TT.chest)
              }
            }), oT.view)
          };
          return {
            current: () => IT(TT.current()),
            watch: oT => TT.watch((TT => {
              oT(IT(TT))
            }))
          }
        }(),
        crafting: KT.e.states.crafting,
        stationItems: {
          current() {
            var TT;
            return (null === (TT = mT) || void 0 === TT ? void 0 : TT.namesVersion) !== (0, XT.h)() && (mT = {
              namesVersion: (0, XT.h)(),
              items: {
                enchantable: rT((TT => {
                  const oT = (0, XT.d)(TT);
                  return void 0 !== oT && null !== MT && MT.enchantmentPerksOf(oT).length > 0 || void 0
                })),
                salvageable: rT((TT => !(!AT(TT) || null === (0, BT.c)(TT)) || void 0))
              }
            }), mT.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let TT = null;
          const oT = () => {
            var oT;
            return (null === (oT = TT) || void 0 === oT ? void 0 : oT.namesVersion) !== (0, XT.h)() && (TT = {
              namesVersion: (0, XT.h)(),
              infos: rT(gT)
            }), TT.infos
          };
          return {
            current: oT,
            watch: IT => (0, WT.p)((iT => {
              iT.some(hT) && (TT = null, IT(oT()))
            }))
          }
        }(),
        creativeVisibility: (0, WT.l)((function() {
          const TT = {};
          for (const zT of null !== (oT = null === (IT = MT) || void 0 === IT ? void 0 : IT.creativeItemIds()) && void 0 !== oT ? oT : []) {
            var oT, IT, WT, BT;
            const FT = (0, XT.g)(zT);
            if (void 0 === FT) continue;
            const ST = null !== (WT = kT.e.get((0, iT.f)(FT, "showInCreativeInven"))) && void 0 !== WT ? WT : null === (BT = MT) || void 0 === BT ? void 0 : BT.showInCreativeInvenOf(zT);
            "boolean" === typeof ST && (TT[FT] = ST)
          }
          return {
            publicLobby: (0, zT.L)((0, FT.e)().lobbyName),
            shownInGame: TT
          }
        }), ["connectedGameChanged"], (0, WT.g)("ShowInCreativeInven")),
        fullInventory: (0, WT.l)(wT, [], (0, WT.i)("useInventory", "useFullInventory"))
      },
      RT = {
        inventoryDropRequested: KT.e.events.inventoryDropRequested,
        chestToggled: KT.e.events.chestToggled,
        chestRefreshed: KT.e.events.chestRefreshed,
        inventorySynced: KT.e.events.inventorySynced,
        enchantingTableOpened: KT.e.events.enchantingTableOpened
      },
      uT = {
        removeInventoryItem: KT.e.commands.removeInventoryItem,
        swapInventorySlots: KT.e.commands.swapInventorySlots,
        moveInventoryItem: KT.e.commands.moveInventoryItem,
        quickMoveInventoryItem: KT.e.commands.quickMoveInventoryItem,
        closeChest: KT.e.commands.closeChest,
        setInventoryOpen(TT) {
          (0, DT.g)(LT.A.InventoryOpen, TT ? LT.A.InventoryOpen : 0)
        },
        focusCrafting: KT.e.commands.focusCrafting,
        craftRecipe: KT.e.commands.craftRecipe,
        salvageItem: KT.e.commands.salvageItem,
        enchantItem: KT.e.commands.enchantItem,
        changeIronChestPasskey(TT) {
          var oT;
          let {
            pos: IT,
            cW: iT
          } = TT;
          null === (oT = (0, ST.i)()) || void 0 === oT || oT.send(xT.b.ChangeIronChestPasskey, (0, xT.g)({
            ai: IT,
            cW: iT
          }))
        },
        openIronChest(TT) {
          var oT;
          let {
            pos: IT,
            cW: iT
          } = TT;
          null === (oT = (0, ST.i)()) || void 0 === oT || oT.send(xT.b.OpenIronChest, (0, xT.z)({
            ai: IT,
            cW: iT
          }))
        }
      },
      vT = {
        enchantingOffer: KT.e.queries.enchantingOffer
      }
  },
  39420: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      c: () => DT,
      f: () => XT,
      i: () => kT,
      j: () => zT,
      m: () => BT,
      q: () => ST
    });
    class iT extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function zT(TT) {
      return TT instanceof RangeError && /call stack/i.test(TT.message) || TT instanceof Error && "InternalError" === TT.name && /recursion/i.test(TT.message)
    }

    function kT(TT) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(TT))
    }
    const WT = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function XT(TT) {
      var oT;
      return TT instanceof WebAssembly.RuntimeError || TT instanceof iT || zT(TT) && WT.test(null !== (oT = TT.stack) && void 0 !== oT ? oT : "")
    }

    function BT(TT, oT) {
      if (XT(TT)) throw TT;
      console.error(oT, TT)
    }

    function FT(TT, oT, IT, zT, kT) {
      if (oT % zT !== 0 || oT + IT > TT.byteLength) throw new iT(`${kT}: ${IT} bytes at ${oT}, ${zT}-aligned, outside ${TT.byteLength} bytes of memory`)
    }

    function ST(TT, oT, IT, iT, zT) {
      return 0 === IT ? null : (FT(oT, IT, iT * TT.BYTES_PER_ELEMENT, TT.BYTES_PER_ELEMENT, zT), new TT(oT, IT, iT))
    }

    function DT(TT, oT, IT, iT, zT) {
      return 0 === oT ? null : (FT(TT, oT, IT, iT, zT), new DataView(TT, oT, IT))
    }
  },
  39371: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      e: () => rT,
      i: () => KT,
      k: () => MT,
      l: () => LT,
      n: () => xT,
      p: () => ST,
      s: () => DT,
      w: () => cT
    });
    class iT extends Error {
      constructor(TT) {
        super(`the join's code did not load: ${TT instanceof Error?TT.message:String(TT)}`, {
          cause: TT
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === TT || void 0 === TT ? void 0 : TT.request
      }
    }
    let zT = null,
      kT = null,
      WT = null;
    const XT = [];
    let BT = null;

    function FT(TT, oT) {
      try {
        TT(oT)
      } catch (IT) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", IT)
      }
    }

    function ST() {
      return BT
    }

    function DT(TT) {
      XT.push(TT), null !== BT && FT(TT, BT)
    }

    function LT(TT) {
      return zT ??= Promise.all([IT.e(69), IT.e(95), IT.e(209), IT.e(74), IT.e(186), IT.e(230), IT.e(210), IT.e(258), IT.e(92), IT.e(261), IT.e(237), IT.e(185), IT.e(195), IT.e(137), IT.e(85), IT.e(115), IT.e(235), IT.e(53)]).then((() => IT(41382))).then((oT => {
        oT.loadAudio(TT), BT = oT;
        for (const TT of XT) FT(TT, oT);
        return oT
      })).catch((TT => {
        throw zT = null, TT
      })), zT
    }
    async function xT(TT, oT) {
      try {
        const IT = await LT(TT);
        await IT.loadClientGame(oT)
      } catch (IT) {
        throw new iT(IT)
      }
    }

    function cT(TT, oT) {
      kT = {
        running: TT,
        shell: oT
      }
    }

    function KT() {
      return WT
    }
    async function MT(TT) {
      const oT = kT;
      if ((null === oT || void 0 === oT ? void 0 : oT.running) !== TT) throw new Error("the core's session has ended");
      const IT = await LT(oT.shell.audio).catch((TT => {
        throw new iT(TT)
      }));
      if (null !== WT) return WT;
      if (kT !== oT || TT.isStopped) throw new Error("the core stopped while the game code loaded");
      if (WT = IT.startGameHost(TT, oT.shell), null === WT) throw new Error("the core's shared tables didn't read, so the game can't start");
      return WT
    }

    function rT() {
      null !== WT && (null !== BT ? BT.endGameHost(WT) : WT.closeGame()), WT = null, kT = null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);