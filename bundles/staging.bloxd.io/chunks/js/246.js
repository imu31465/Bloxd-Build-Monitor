export const id = 246;
export const ids = [246];
export const modules = {
  40916: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      f: () => YV
    });
    const JV = "The world isn't loaded, so no blocks can be seen.",
      YV = "The world isn't loaded, so nothing in it can be seen."
  },
  40310: (VV, eV, xV) => {
    function JV(VV) {
      return !(!VV.lobbyLeaderboardInfo && !VV.lobbyManage)
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  38003: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      g: () => YV
    });
    let JV = () => null;

    function YV(VV) {
      JV = VV
    }

    function UV(VV, eV) {
      return JV(VV, eV)
    }
  },
  41872: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => bV,
      h: () => qV,
      l: () => jV,
      n: () => EV
    });
    var JV = xV(32),
      YV = xV(41876),
      UV = xV(41861),
      yV = xV(41880),
      pV = xV(41867),
      QV = xV(41885),
      nV = xV(41909);

    function wV(VV) {
      var eV, xV;
      const JV = (0, UV.k)();
      return JV ? null === (eV = (0, YV.c)(JV.api, VV[0], VV[1], VV[2])) || void 0 === eV || null === (xV = eV.persisted) || void 0 === xV ? void 0 : xV.shared : void 0
    }

    function ZV(VV) {
      return `${VV[0]},${VV[1]},${VV[2]}`
    }
    const vV = new Map;
    let rV = null,
      kV = 0;

    function bV() {
      return kV
    }

    function EV(VV) {
      const eV = null !== rV && rV.key === ZV(VV.pos) ? rV.type : null;
      if (null === eV) return VV;
      let xV = null;
      if ("Iron" === eV) {
        const {
          cachedPasskey: eV,
          ...JV
        } = BV(VV.pos);
        xV = {
          ly: null !== eV && void 0 !== eV ? eV : [0, 0, 0, 0],
          ...JV
        }
      }
      return {
        ...VV,
        type: eV,
        ironChest: xV
      }
    }

    function BV(VV) {
      const eV = wV(VV),
        xV = null === eV || void 0 === eV ? void 0 : eV.ownerDbId,
        JV = function(VV) {
          var eV;
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wV(VV);
          const JV = ZV(VV),
            YV = vV.get(JV);
          return YV ? YV.lastOpened < (null !== (eV = null === xV || void 0 === xV ? void 0 : xV.passkeyLastUpdated) && void 0 !== eV ? eV : 0) ? (vV.delete(JV), null) : [...YV.ly] : null
        }(VV, eV);
      return void 0 === xV ? {
        cachedPasskey: JV
      } : {
        ownerDbId: xV,
        cachedPasskey: JV
      }
    }(0, nV.l)(yV.c, (VV => {
      const eV = (0, QV.i)(yV.c, VV);
      if (!(0, QV.e)(eV) || eV.ox) return;
      if (kV++, !eV.Rx || null === eV.ix) return void(rV = null);
      const xV = ZV(eV.ix);
      rV = {
        key: xV,
        type: eV.Dx
      }, null !== eV.Cx && vV.set(xV, {
        ly: [...eV.Cx],
        lastOpened: Date.now()
      })
    })), (0, nV.f)((() => {
      vV.clear(), rV = null, kV++
    })), (0, nV.h)((() => {
      null !== rV && (rV = null, kV++, JV.h.QZ("chestToggleFromServer", !1, !0))
    }));
    const jV = {
        boardEditRequested: {
          watch: VV => (0, JV.i)("EditBoard", (eV => {
            let {
              pos: xV
            } = eV;
            if (null === xV) return void VV(null);
            const JV = (0, UV.k)(),
              YV = (0, UV.v)();
            JV && YV && VV(YV.readBoardToEdit(JV.api, JV.chunks, xV))
          }))
        },
        ironChestOpenRequested: {
          watch: VV => (0, JV.i)("OpenIronChest", (eV => {
            let {
              pos: xV
            } = eV;
            VV(function(VV) {
              return {
                pos: VV,
                ...BV(VV)
              }
            }(xV))
          }))
        }
      },
      qV = {
        writeOnBoard(VV) {
          var eV;
          let {
            pos: xV,
            text: JV,
            textSize: YV
          } = VV;
          null === (eV = (0, UV.k)()) || void 0 === eV || eV.send(pV.d.UpdateBoard, (0, pV.W)({
            En: xV,
            Bn: JV,
            jn: YV
          }))
        },
        writeBook(VV) {
          var eV;
          let {
            pages: xV,
            title: JV,
            published: YV
          } = VV;
          null === (eV = (0, UV.k)()) || void 0 === eV || eV.send(pV.d.UpdateBook, (0, pV.Y)({
            Zn: xV,
            vn: JV,
            rn: YV
          }))
        },
        writeNameTag(VV) {
          var eV;
          null === (eV = (0, UV.k)()) || void 0 === eV || eV.send(pV.d.UpdateNameTag, VV)
        },
        setCustomLobbyBlock(VV) {
          let {
            pos: eV,
            blockName: xV
          } = VV;
          const JV = (0, UV.v)(),
            YV = (0, UV.k)();
          JV && YV && YV.send(pV.d.SetCustomLobbyBlock, (0, pV.J)({
            vp: JV.blockIdOf(xV),
            Zp: eV
          }))
        }
      }
  },
  41932: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      f: () => yV,
      i: () => pV
    });
    var JV = xV(41852),
      YV = xV(5281),
      UV = xV(41861);

    function yV() {
      var VV;
      const eV = null === (VV = (0, UV.k)()) || void 0 === VV ? void 0 : VV.api.localId;
      return void 0 === eV || eV === JV.Uc ? null : String(eV)
    }

    function pV(VV) {
      const eV = (0, UV.k)();
      if (null !== eV) return VV(eV);
      let xV = null;
      const JV = (0, YV.s)((() => {
        const eV = (0, UV.k)();
        null !== eV && null === xV && (JV(), xV = VV(eV))
      }));
      return () => {
        var VV;
        JV(), null === (VV = xV) || void 0 === VV || VV()
      }
    }

    function QV(VV, eV, xV) {
      return {
        current: () => {
          const xV = (0, UV.k)();
          return null === xV ? eV : VV(xV)()
        },
        watch: eV => pV((JV => {
          const YV = VV(JV);
          let UV = YV();
          return eV(UV), xV((() => {
            const VV = YV();
            VV !== UV && (UV = VV, eV(VV))
          }))
        }))
      }
    }
  },
  41923: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(41861),
      YV = xV(41932),
      UV = xV(41936);

    function yV() {
      var VV, eV;
      return null !== (VV = null === (eV = (0, JV.k)()) || void 0 === eV ? void 0 : eV.itemBridgeSources) && void 0 !== VV ? VV : UV.e
    }

    function pV(VV) {
      return {
        current: () => yV().states[VV].current(),
        watch: eV => (0, YV.i)((xV => {
          const JV = xV.itemBridgeSources.states[VV];
          return eV(JV.current()), JV.watch(eV)
        }))
      }
    }

    function QV(VV) {
      return {
        watch: eV => (0, YV.i)((xV => xV.itemBridgeSources.events[VV].watch(eV)))
      }
    }
    const nV = {
      states: {
        inventory: pV("inventory"),
        hotbar: pV("hotbar"),
        crafting: pV("crafting"),
        heldItemAim: pV("heldItemAim")
      },
      events: {
        hotbarSlotRequested: QV("hotbarSlotRequested"),
        hotbarScrolled: QV("hotbarScrolled"),
        numberKeyPressed: QV("numberKeyPressed"),
        inventoryDropRequested: QV("inventoryDropRequested"),
        chestToggled: QV("chestToggled"),
        chestRefreshed: QV("chestRefreshed"),
        inventorySynced: QV("inventorySynced"),
        enchantingTableOpened: QV("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: VV => yV().commands.selectHotbarSlot(VV),
        removeInventoryItem: VV => yV().commands.removeInventoryItem(VV),
        swapInventorySlots: VV => yV().commands.swapInventorySlots(VV),
        moveInventoryItem: VV => yV().commands.moveInventoryItem(VV),
        quickMoveInventoryItem: VV => yV().commands.quickMoveInventoryItem(VV),
        closeChest: VV => yV().commands.closeChest(VV),
        focusCrafting: VV => yV().commands.focusCrafting(VV),
        craftRecipe: VV => yV().commands.craftRecipe(VV),
        salvageItem: VV => yV().commands.salvageItem(VV),
        enchantItem: VV => yV().commands.enchantItem(VV)
      },
      queries: {
        enchantingOffer: VV => yV().queries.enchantingOffer(VV)
      }
    }
  },
  41936: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(40916);

    function YV(VV) {
      return {
        current: () => VV,
        watch: () => () => {}
      }
    }

    function UV() {}
    const yV = Object.freeze([0, 0, 0]),
      pV = {
        states: {
          health: YV({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: YV({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: YV({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: YV({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: YV({}),
          creativeVisibility: YV({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: YV(null),
          heldItemAim: YV({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: YV(!1),
          gliderBoostFuel: YV(0),
          flight: YV({
            canFly: !1,
            flying: !1
          }),
          crafting: YV({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: YV({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: YV({}),
          fullInventory: YV(!1),
          crosshairTarget: YV({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: YV(!0),
          freeCamera: YV({
            allowed: !1,
            movesFly: !1
          }),
          replay: YV(null),
          replayEdits: YV(null),
          replayRecorder: YV({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: YV(!1)
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
          selectHotbarSlot: UV,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: UV,
          setInventoryOpen: UV,
          changeIronChestPasskey: UV,
          dragReplayCamera: UV,
          applyTemporaryThirdPerson: UV,
          holdEmoteWheel: UV,
          recordFlyingMiddleText: UV,
          focusCrafting: UV,
          craftRecipe: () => ({
            Ey: 0,
            Bw: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: UV,
          setShopOpen: UV,
          buyShopItem: UV,
          lobbyManage: UV,
          sendChatMessage: UV,
          ignorePlayer: UV,
          reportPlayer: UV,
          reportWorldCodeChat: UV,
          requestDiscordReportKey: UV,
          reportLobbyOrGame: UV,
          playEmote: UV,
          updateMyCosmetic: UV,
          writeOnBoard: UV,
          writeBook: UV,
          writeNameTag: UV,
          setCustomLobbyBlock: UV,
          openIronChest: UV,
          sendCodeCollab: UV,
          clickCodeBlock: UV,
          bindCustomButtonKeys: UV,
          pressCustomButton: UV,
          moveReplayFreecam: UV,
          holdReplayFreecamVertical: UV,
          respawn: UV,
          wakeUp: UV,
          requestLeaderboard: UV,
          completeTask: UV,
          setServerCookie: UV,
          answerUiRequest: UV,
          chooseRewardedAd: UV,
          setCameraZoom: UV,
          setFreeCameraMovesFly: UV,
          setBlockHighlight: UV,
          setCrosshairInteractPrompt: UV,
          setLookSensitivity: UV,
          replayAction: UV,
          setReplayPlaying: UV,
          seekReplay: UV,
          setReplayCameraMode: UV,
          syncReplayCameraMode: UV,
          setReplayCameraKeyframe: UV,
          moveReplayCameraKeyframe: UV,
          deleteReplayCameraKeyframes: UV,
          setReplayPlaybackMark: UV,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: UV,
          exportReplayVideo: UV,
          toggleRecording: UV,
          saveClip: UV,
          setRecorderPrefs: UV,
          setReplayViewerOpen: UV
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => JV.e,
          worldCodeAiGameState: () => JV.f
        },
        lookups: {
          localPos: () => yV,
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
  41856: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => NV,
      e: () => AV,
      f: () => XV,
      i: () => PV,
      j: () => FV
    });
    var JV = xV(40472),
      YV = xV(1252),
      UV = xV(2080),
      yV = xV(2094),
      pV = xV(3719),
      QV = xV(38003),
      nV = xV(1391),
      wV = xV(41861),
      ZV = xV(5319),
      vV = xV(2660),
      rV = xV(41867),
      kV = xV(41872),
      bV = xV(41923);
    let EV = null;

    function BV(VV) {
      const eV = new Map,
        xV = xV => {
          if ("string" !== typeof xV) return;
          let JV = eV.get(xV);
          return void 0 === JV && (JV = VV(xV), void 0 !== JV && eV.set(xV, JV)), JV
        };
      return new Proxy({}, {
        get: (VV, eV) => xV(eV),
        has: (VV, eV) => void 0 !== xV(eV)
      })
    }

    function jV(VV) {
      const eV = (0, pV.d)(VV);
      return void 0 !== eV && (0, pV.g)(eV) === VV
    }

    function qV(VV) {
      var eV;
      const xV = null === (eV = (0, wV.k)()) || void 0 === eV ? void 0 : eV.tables;
      if (void 0 === xV || !jV(VV)) return;
      const JV = {
          displayName: xV.getDisplayName(VV)
        },
        YV = xV.getItemStat(VV, "description");
      void 0 !== YV && null !== YV && (JV.description = YV);
      const {
        rootName: UV
      } = xV.getMetaInfo(VV);
      UV !== VV && (JV.rootName = UV);
      const yV = xV.getItemStat(VV, "armourReduction");
      return void 0 !== yV && null !== yV && (JV.armourReduction = yV), JV
    }(0, wV.z)((VV => {
      EV = VV
    }));
    const tV = (0, yV.h)("DisplayName", "Description");

    function FV() {
      return Boolean(UV.c.get("useInventory") && UV.c.get("useFullInventory"))
    }
    let TV = null;
    const PV = {
        inventory: function() {
          const VV = bV.b.states.inventory;
          let eV = null;
          const xV = VV => {
            var xV;
            return null === VV.chest ? VV : ((null === (xV = eV) || void 0 === xV ? void 0 : xV.from) === VV && eV.chestVersion === (0, kV.e)() || (eV = {
              from: VV,
              chestVersion: (0, kV.e)(),
              view: {
                ...VV,
                chest: (0, kV.n)(VV.chest)
              }
            }), eV.view)
          };
          return {
            current: () => xV(VV.current()),
            watch: eV => VV.watch((VV => {
              eV(xV(VV))
            }))
          }
        }(),
        crafting: bV.b.states.crafting,
        stationItems: {
          current() {
            var VV;
            return (null === (VV = TV) || void 0 === VV ? void 0 : VV.namesVersion) !== (0, pV.k)() && (TV = {
              namesVersion: (0, pV.k)(),
              items: {
                enchantable: BV((VV => {
                  const eV = (0, pV.d)(VV);
                  return void 0 !== eV && null !== EV && EV.enchantmentPerksOf(eV).length > 0 || void 0
                })),
                salvageable: BV((VV => !(!jV(VV) || null === (0, QV.e)(VV)) || void 0))
              }
            }), TV.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let VV = null;
          const eV = () => {
            var eV;
            return (null === (eV = VV) || void 0 === eV ? void 0 : eV.namesVersion) !== (0, pV.k)() && (VV = {
              namesVersion: (0, pV.k)(),
              infos: BV(qV)
            }), VV.infos
          };
          return {
            current: eV,
            watch: xV => (0, yV.q)((JV => {
              JV.some(tV) && (VV = null, xV(eV()))
            }))
          }
        }(),
        creativeVisibility: (0, yV.l)((function() {
          const VV = {};
          for (const YV of null !== (eV = null === (xV = EV) || void 0 === xV ? void 0 : xV.creativeItemIds()) && void 0 !== eV ? eV : []) {
            var eV, xV, yV, QV;
            const nV = (0, pV.g)(YV);
            if (void 0 === nV) continue;
            const wV = null !== (yV = UV.c.get((0, JV.h)(nV, "showInCreativeInven"))) && void 0 !== yV ? yV : null === (QV = EV) || void 0 === QV ? void 0 : QV.showInCreativeInvenOf(YV);
            "boolean" === typeof wV && (VV[nV] = wV)
          }
          return {
            publicLobby: (0, YV.I)((0, nV.e)().lobbyName),
            shownInGame: VV
          }
        }), ["connectedGameChanged"], (0, yV.h)("ShowInCreativeInven")),
        fullInventory: (0, yV.l)(FV, [], (0, yV.i)("useInventory", "useFullInventory"))
      },
      AV = {
        inventoryDropRequested: bV.b.events.inventoryDropRequested,
        chestToggled: bV.b.events.chestToggled,
        chestRefreshed: bV.b.events.chestRefreshed,
        inventorySynced: bV.b.events.inventorySynced,
        enchantingTableOpened: bV.b.events.enchantingTableOpened
      },
      NV = {
        removeInventoryItem: bV.b.commands.removeInventoryItem,
        swapInventorySlots: bV.b.commands.swapInventorySlots,
        moveInventoryItem: bV.b.commands.moveInventoryItem,
        quickMoveInventoryItem: bV.b.commands.quickMoveInventoryItem,
        closeChest: bV.b.commands.closeChest,
        setInventoryOpen(VV) {
          (0, ZV.h)(vV.y.InventoryOpen, VV ? vV.y.InventoryOpen : 0)
        },
        focusCrafting: bV.b.commands.focusCrafting,
        craftRecipe: bV.b.commands.craftRecipe,
        salvageItem: bV.b.commands.salvageItem,
        enchantItem: bV.b.commands.enchantItem,
        changeIronChestPasskey(VV) {
          var eV;
          let {
            pos: xV,
            ly: JV
          } = VV;
          null === (eV = (0, wV.k)()) || void 0 === eV || eV.send(rV.d.ChangeIronChestPasskey, (0, rV.k)({
            ix: xV,
            ly: JV
          }))
        },
        openIronChest(VV) {
          var eV;
          let {
            pos: xV,
            ly: JV
          } = VV;
          null === (eV = (0, wV.k)()) || void 0 === eV || eV.send(rV.d.OpenIronChest, (0, rV.C)({
            ix: xV,
            ly: JV
          }))
        }
      },
      XV = {
        enchantingOffer: bV.b.queries.enchantingOffer
      }
  },
  41914: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      g: () => wV,
      j: () => yV,
      k: () => YV,
      o: () => pV,
      r: () => nV
    });
    class JV extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function YV(VV) {
      return VV instanceof RangeError && /call stack/i.test(VV.message) || VV instanceof Error && "InternalError" === VV.name && /recursion/i.test(VV.message)
    }
    const UV = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yV(VV) {
      var eV;
      return VV instanceof WebAssembly.RuntimeError || VV instanceof JV || YV(VV) && UV.test(null !== (eV = VV.stack) && void 0 !== eV ? eV : "")
    }

    function pV(VV, eV) {
      if (yV(VV)) throw VV;
      console.error(eV, VV)
    }

    function QV(VV, eV, xV, YV, UV) {
      if (eV % YV !== 0 || eV + xV > VV.byteLength) throw new JV(`${UV}: ${xV} bytes at ${eV}, ${YV}-aligned, outside ${VV.byteLength} bytes of memory`)
    }

    function nV(VV, eV, xV, JV, YV) {
      return 0 === xV ? null : (QV(eV, xV, JV * VV.BYTES_PER_ELEMENT, VV.BYTES_PER_ELEMENT, YV), new VV(eV, xV, JV))
    }

    function wV(VV, eV, xV, JV, YV) {
      return 0 === eV ? null : (QV(VV, eV, xV, JV, YV), new DataView(VV, eV, xV))
    }
  },
  41861: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => kV,
      e: () => JV,
      i: () => BV,
      k: () => bV,
      n: () => EV,
      p: () => vV,
      t: () => rV,
      v: () => wV,
      z: () => ZV
    });
    class JV extends Error {
      constructor(VV) {
        super(`the join's code did not load: ${VV instanceof Error?VV.message:String(VV)}`, {
          cause: VV
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === VV || void 0 === VV ? void 0 : VV.request
      }
    }
    let YV = null,
      UV = null,
      yV = null;
    const pV = [];
    let QV = null;

    function nV(VV, eV) {
      try {
        VV(eV)
      } catch (xV) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", xV)
      }
    }

    function wV() {
      return QV
    }

    function ZV(VV) {
      pV.push(VV), null !== QV && nV(VV, QV)
    }

    function vV(VV) {
      return YV ??= Promise.all([xV.e(84), xV.e(111), xV.e(86), xV.e(244), xV.e(89), xV.e(245), xV.e(224), xV.e(109), xV.e(264), xV.e(296), xV.e(48), xV.e(213), xV.e(232), xV.e(222), xV.e(205), xV.e(206), xV.e(170), xV.e(101), xV.e(134), xV.e(272), xV.e(68)]).then((() => xV(45460))).then((eV => {
        eV.loadAudio(VV), QV = eV;
        for (const VV of pV) nV(VV, eV);
        return eV
      })).catch((VV => {
        throw YV = null, VV
      })), YV
    }
    async function rV(VV, eV) {
      try {
        const xV = await vV(VV);
        await xV.loadClientGame(eV)
      } catch (xV) {
        throw new JV(xV)
      }
    }

    function kV(VV, eV) {
      UV = {
        running: VV,
        shell: eV
      }
    }

    function bV() {
      return yV
    }
    async function EV(VV) {
      const eV = UV;
      if ((null === eV || void 0 === eV ? void 0 : eV.running) !== VV) throw new Error("the core's session has ended");
      const xV = await vV(eV.shell.audio).catch((VV => {
        throw new JV(VV)
      }));
      if (null !== yV) return yV;
      if (UV !== eV || VV.isStopped) throw new Error("the core stopped while the game code loaded");
      if (yV = xV.startGameHost(VV, eV.shell), null === yV) throw new Error("the core's shared tables didn't read, so the game can't start");
      return yV
    }

    function BV() {
      null !== yV && (null !== QV ? QV.endGameHost(yV) : yV.closeGame()), yV = null, UV = null
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);