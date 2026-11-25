export const id = 246;
export const ids = [246];
export const modules = {
  40765: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => SM
    });
    const OM = "The world isn't loaded, so no blocks can be seen.",
      SM = "The world isn't loaded, so nothing in it can be seen."
  },
  40140: (MM, rM, iM) => {
    function OM(MM) {
      return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  37767: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      f: () => SM
    });
    let OM = () => null;

    function SM(MM) {
      OM = MM
    }

    function jM(MM, rM) {
      return OM(MM, rM)
    }
  },
  41691: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => JM,
      d: () => EM,
      e: () => lM,
      i: () => dM
    });
    var OM = iM(22),
      SM = iM(41695),
      jM = iM(41677),
      aM = iM(41697),
      PM = iM(41682),
      nM = iM(41704),
      QM = iM(41712);

    function zM(MM) {
      var rM, iM;
      const OM = (0, jM.e)();
      return OM ? null === (rM = (0, SM.e)(OM.api, MM[0], MM[1], MM[2])) || void 0 === rM || null === (iM = rM.persisted) || void 0 === iM ? void 0 : iM.shared : void 0
    }

    function LM(MM) {
      return `${MM[0]},${MM[1]},${MM[2]}`
    }
    const mM = new Map;
    let HM = null,
      hM = 0;

    function JM() {
      return hM
    }

    function dM(MM) {
      const rM = null !== HM && HM.key === LM(MM.pos) ? HM.type : null;
      if (null === rM) return MM;
      let iM = null;
      if ("Iron" === rM) {
        const {
          cachedPasskey: rM,
          ...OM
        } = yM(MM.pos);
        iM = {
          oa: null !== rM && void 0 !== rM ? rM : [0, 0, 0, 0],
          ...OM
        }
      }
      return {
        ...MM,
        type: rM,
        ironChest: iM
      }
    }

    function yM(MM) {
      const rM = zM(MM),
        iM = null === rM || void 0 === rM ? void 0 : rM.ownerDbId,
        OM = function(MM) {
          var rM;
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zM(MM);
          const OM = LM(MM),
            SM = mM.get(OM);
          return SM ? SM.lastOpened < (null !== (rM = null === iM || void 0 === iM ? void 0 : iM.passkeyLastUpdated) && void 0 !== rM ? rM : 0) ? (mM.delete(OM), null) : [...SM.oa] : null
        }(MM, rM);
      return void 0 === iM ? {
        cachedPasskey: OM
      } : {
        ownerDbId: iM,
        cachedPasskey: OM
      }
    }(0, QM.h)(aM.b, (MM => {
      const rM = (0, nM.d)(aM.b, MM);
      if (!(0, nM.c)(rM) || rM.ui) return;
      if (hM++, !rM.ei || null === rM.ti) return void(HM = null);
      const iM = LM(rM.ti);
      HM = {
        key: iM,
        type: rM.wi
      }, null !== rM.gi && mM.set(iM, {
        oa: [...rM.gi],
        lastOpened: Date.now()
      })
    })), (0, QM.c)((() => {
      mM.clear(), HM = null, hM++
    })), (0, QM.e)((() => {
      null !== HM && (HM = null, hM++, OM.i.Tz("chestToggleFromServer", !1, !0))
    }));
    const lM = {
        boardEditRequested: {
          watch: MM => (0, OM.j)("EditBoard", (rM => {
            let {
              pos: iM
            } = rM;
            if (null === iM) return void MM(null);
            const OM = (0, jM.e)(),
              SM = (0, jM.p)();
            OM && SM && MM(SM.readBoardToEdit(OM.api, OM.chunks, iM))
          }))
        },
        ironChestOpenRequested: {
          watch: MM => (0, OM.j)("OpenIronChest", (rM => {
            let {
              pos: iM
            } = rM;
            MM(function(MM) {
              return {
                pos: MM,
                ...yM(MM)
              }
            }(iM))
          }))
        }
      },
      EM = {
        writeOnBoard(MM) {
          var rM;
          let {
            pos: iM,
            text: OM,
            textSize: SM
          } = MM;
          null === (rM = (0, jM.e)()) || void 0 === rM || rM.send(PM.d.UpdateBoard, (0, PM.U)({
            mQ: iM,
            hQ: OM,
            JQ: SM
          }))
        },
        writeBook(MM) {
          var rM;
          let {
            pages: iM,
            title: OM,
            published: SM
          } = MM;
          null === (rM = (0, jM.e)()) || void 0 === rM || rM.send(PM.d.UpdateBook, (0, PM.X)({
            aQ: iM,
            nQ: OM,
            QQ: SM
          }))
        },
        writeNameTag(MM) {
          var rM;
          null === (rM = (0, jM.e)()) || void 0 === rM || rM.send(PM.d.UpdateNameTag, MM)
        },
        setCustomLobbyBlock(MM) {
          let {
            pos: rM,
            blockName: iM
          } = MM;
          const OM = (0, jM.p)(),
            SM = (0, jM.e)();
          OM && SM && SM.send(PM.d.SetCustomLobbyBlock, (0, PM.K)({
            jP: OM.blockIdOf(iM),
            SP: rM
          }))
        }
      }
  },
  41728: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM,
      f: () => aM,
      h: () => PM
    });
    var OM = iM(41669),
      SM = iM(5188),
      jM = iM(41677);

    function aM() {
      var MM;
      const rM = null === (MM = (0, jM.e)()) || void 0 === MM ? void 0 : MM.api.localId;
      return void 0 === rM || rM === OM.Nc ? null : String(rM)
    }

    function PM(MM) {
      const rM = (0, jM.e)();
      if (null !== rM) return MM(rM);
      let iM = null;
      const OM = (0, SM.x)((() => {
        const rM = (0, jM.e)();
        null !== rM && null === iM && (OM(), iM = MM(rM))
      }));
      return () => {
        var MM;
        OM(), null === (MM = iM) || void 0 === MM || MM()
      }
    }

    function nM(MM, rM, iM) {
      return {
        current: () => {
          const iM = (0, jM.e)();
          return null === iM ? rM : MM(iM)()
        },
        watch: rM => PM((OM => {
          const SM = MM(OM);
          let jM = SM();
          return rM(jM), iM((() => {
            const MM = SM();
            MM !== jM && (jM = MM, rM(MM))
          }))
        }))
      }
    }
  },
  41723: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM
    });
    var OM = iM(41677),
      SM = iM(41728),
      jM = iM(41734);

    function aM() {
      var MM, rM;
      return null !== (MM = null === (rM = (0, OM.e)()) || void 0 === rM ? void 0 : rM.itemBridgeSources) && void 0 !== MM ? MM : jM.c
    }

    function PM(MM) {
      return {
        current: () => aM().states[MM].current(),
        watch: rM => (0, SM.h)((iM => {
          const OM = iM.itemBridgeSources.states[MM];
          return rM(OM.current()), OM.watch(rM)
        }))
      }
    }

    function nM(MM) {
      return {
        watch: rM => (0, SM.h)((iM => iM.itemBridgeSources.events[MM].watch(rM)))
      }
    }
    const QM = {
      states: {
        inventory: PM("inventory"),
        hotbar: PM("hotbar"),
        crafting: PM("crafting"),
        heldItemAim: PM("heldItemAim")
      },
      events: {
        hotbarSlotRequested: nM("hotbarSlotRequested"),
        hotbarScrolled: nM("hotbarScrolled"),
        numberKeyPressed: nM("numberKeyPressed"),
        inventoryDropRequested: nM("inventoryDropRequested"),
        chestToggled: nM("chestToggled"),
        chestRefreshed: nM("chestRefreshed"),
        inventorySynced: nM("inventorySynced"),
        enchantingTableOpened: nM("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: MM => aM().commands.selectHotbarSlot(MM),
        removeInventoryItem: MM => aM().commands.removeInventoryItem(MM),
        swapInventorySlots: MM => aM().commands.swapInventorySlots(MM),
        moveInventoryItem: MM => aM().commands.moveInventoryItem(MM),
        quickMoveInventoryItem: MM => aM().commands.quickMoveInventoryItem(MM),
        closeChest: MM => aM().commands.closeChest(MM),
        focusCrafting: MM => aM().commands.focusCrafting(MM),
        craftRecipe: MM => aM().commands.craftRecipe(MM),
        salvageItem: MM => aM().commands.salvageItem(MM),
        enchantItem: MM => aM().commands.enchantItem(MM)
      },
      queries: {
        enchantingOffer: MM => aM().queries.enchantingOffer(MM)
      }
    }
  },
  41734: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(40765);

    function SM(MM) {
      return {
        current: () => MM,
        watch: () => () => {}
      }
    }

    function jM() {}
    const aM = Object.freeze([0, 0, 0]),
      PM = {
        states: {
          health: SM({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: SM({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: SM({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: SM({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: SM({}),
          creativeVisibility: SM({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: SM(null),
          heldItemAim: SM({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: SM(!1),
          gliderBoostFuel: SM(0),
          flight: SM({
            canFly: !1,
            flying: !1
          }),
          crafting: SM({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: SM({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: SM({}),
          fullInventory: SM(!1),
          crosshairTarget: SM({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: SM(!0),
          freeCamera: SM({
            allowed: !1,
            movesFly: !1
          }),
          replay: SM(null),
          replayEdits: SM(null),
          replayRecorder: SM({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: SM(!1)
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
          selectHotbarSlot: jM,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: jM,
          setInventoryOpen: jM,
          changeIronChestPasskey: jM,
          dragReplayCamera: jM,
          applyTemporaryThirdPerson: jM,
          holdEmoteWheel: jM,
          recordFlyingMiddleText: jM,
          focusCrafting: jM,
          craftRecipe: () => ({
            Ha: 0,
            Pz: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: jM,
          setShopOpen: jM,
          buyShopItem: jM,
          lobbyManage: jM,
          sendChatMessage: jM,
          ignorePlayer: jM,
          reportPlayer: jM,
          reportWorldCodeChat: jM,
          requestDiscordReportKey: jM,
          reportLobbyOrGame: jM,
          playEmote: jM,
          updateMyCosmetic: jM,
          writeOnBoard: jM,
          writeBook: jM,
          writeNameTag: jM,
          setCustomLobbyBlock: jM,
          openIronChest: jM,
          sendCodeCollab: jM,
          clickCodeBlock: jM,
          bindCustomButtonKeys: jM,
          pressCustomButton: jM,
          moveReplayFreecam: jM,
          holdReplayFreecamVertical: jM,
          respawn: jM,
          wakeUp: jM,
          requestLeaderboard: jM,
          completeTask: jM,
          setServerCookie: jM,
          answerUiRequest: jM,
          chooseRewardedAd: jM,
          setCameraZoom: jM,
          setFreeCameraMovesFly: jM,
          setBlockHighlight: jM,
          setCrosshairInteractPrompt: jM,
          setLookSensitivity: jM,
          replayAction: jM,
          setReplayPlaying: jM,
          seekReplay: jM,
          setReplayCameraMode: jM,
          syncReplayCameraMode: jM,
          setReplayCameraKeyframe: jM,
          moveReplayCameraKeyframe: jM,
          deleteReplayCameraKeyframes: jM,
          setReplayPlaybackMark: jM,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: jM,
          exportReplayVideo: jM,
          toggleRecording: jM,
          saveClip: jM,
          setRecorderPrefs: jM,
          setReplayViewerOpen: jM
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => OM.c,
          worldCodeAiGameState: () => OM.f
        },
        lookups: {
          localPos: () => aM,
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
  41674: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => wM,
      f: () => bM,
      g: () => tM,
      k: () => eM,
      m: () => GM
    });
    var OM = iM(40325),
      SM = iM(1229),
      jM = iM(2067),
      aM = iM(2078),
      PM = iM(3693),
      nM = iM(37767),
      QM = iM(1373),
      zM = iM(41677),
      LM = iM(5214),
      mM = iM(2619),
      HM = iM(41682),
      hM = iM(41691),
      JM = iM(41723);
    let dM = null;

    function yM(MM) {
      const rM = new Map,
        iM = iM => {
          if ("string" !== typeof iM) return;
          let OM = rM.get(iM);
          return void 0 === OM && (OM = MM(iM), void 0 !== OM && rM.set(iM, OM)), OM
        };
      return new Proxy({}, {
        get: (MM, rM) => iM(rM),
        has: (MM, rM) => void 0 !== iM(rM)
      })
    }

    function lM(MM) {
      const rM = (0, PM.d)(MM);
      return void 0 !== rM && (0, PM.g)(rM) === MM
    }

    function EM(MM) {
      var rM;
      const iM = null === (rM = (0, zM.e)()) || void 0 === rM ? void 0 : rM.tables;
      if (void 0 === iM || !lM(MM)) return;
      const OM = {
          displayName: iM.getDisplayName(MM)
        },
        SM = iM.getItemStat(MM, "description");
      void 0 !== SM && null !== SM && (OM.description = SM);
      const {
        rootName: jM
      } = iM.getMetaInfo(MM);
      jM !== MM && (OM.rootName = jM);
      const aM = iM.getItemStat(MM, "armourReduction");
      return void 0 !== aM && null !== aM && (OM.armourReduction = aM), OM
    }(0, zM.r)((MM => {
      dM = MM
    }));
    const UM = (0, aM.l)("DisplayName", "Description");

    function GM() {
      return Boolean(jM.d.get("useInventory") && jM.d.get("useFullInventory"))
    }
    let CM = null;
    const eM = {
        inventory: function() {
          const MM = JM.d.states.inventory;
          let rM = null;
          const iM = MM => {
            var iM;
            return null === MM.chest ? MM : ((null === (iM = rM) || void 0 === iM ? void 0 : iM.from) === MM && rM.chestVersion === (0, hM.b)() || (rM = {
              from: MM,
              chestVersion: (0, hM.b)(),
              view: {
                ...MM,
                chest: (0, hM.i)(MM.chest)
              }
            }), rM.view)
          };
          return {
            current: () => iM(MM.current()),
            watch: rM => MM.watch((MM => {
              rM(iM(MM))
            }))
          }
        }(),
        crafting: JM.d.states.crafting,
        stationItems: {
          current() {
            var MM;
            return (null === (MM = CM) || void 0 === MM ? void 0 : MM.namesVersion) !== (0, PM.h)() && (CM = {
              namesVersion: (0, PM.h)(),
              items: {
                enchantable: yM((MM => {
                  const rM = (0, PM.d)(MM);
                  return void 0 !== rM && null !== dM && dM.enchantmentPerksOf(rM).length > 0 || void 0
                })),
                salvageable: yM((MM => !(!lM(MM) || null === (0, nM.d)(MM)) || void 0))
              }
            }), CM.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let MM = null;
          const rM = () => {
            var rM;
            return (null === (rM = MM) || void 0 === rM ? void 0 : rM.namesVersion) !== (0, PM.h)() && (MM = {
              namesVersion: (0, PM.h)(),
              infos: yM(EM)
            }), MM.infos
          };
          return {
            current: rM,
            watch: iM => (0, aM.u)((OM => {
              OM.some(UM) && (MM = null, iM(rM()))
            }))
          }
        }(),
        creativeVisibility: (0, aM.q)((function() {
          const MM = {};
          for (const SM of null !== (rM = null === (iM = dM) || void 0 === iM ? void 0 : iM.creativeItemIds()) && void 0 !== rM ? rM : []) {
            var rM, iM, aM, nM;
            const QM = (0, PM.g)(SM);
            if (void 0 === QM) continue;
            const zM = null !== (aM = jM.d.get((0, OM.g)(QM, "showInCreativeInven"))) && void 0 !== aM ? aM : null === (nM = dM) || void 0 === nM ? void 0 : nM.showInCreativeInvenOf(SM);
            "boolean" === typeof zM && (MM[QM] = zM)
          }
          return {
            publicLobby: (0, SM.P)((0, QM.e)().lobbyName),
            shownInGame: MM
          }
        }), ["connectedGameChanged"], (0, aM.l)("ShowInCreativeInven")),
        fullInventory: (0, aM.q)(GM, [], (0, aM.p)("useInventory", "useFullInventory"))
      },
      bM = {
        inventoryDropRequested: JM.d.events.inventoryDropRequested,
        chestToggled: JM.d.events.chestToggled,
        chestRefreshed: JM.d.events.chestRefreshed,
        inventorySynced: JM.d.events.inventorySynced,
        enchantingTableOpened: JM.d.events.enchantingTableOpened
      },
      wM = {
        removeInventoryItem: JM.d.commands.removeInventoryItem,
        swapInventorySlots: JM.d.commands.swapInventorySlots,
        moveInventoryItem: JM.d.commands.moveInventoryItem,
        quickMoveInventoryItem: JM.d.commands.quickMoveInventoryItem,
        closeChest: JM.d.commands.closeChest,
        setInventoryOpen(MM) {
          (0, LM.k)(mM.C.InventoryOpen, MM ? mM.C.InventoryOpen : 0)
        },
        focusCrafting: JM.d.commands.focusCrafting,
        craftRecipe: JM.d.commands.craftRecipe,
        salvageItem: JM.d.commands.salvageItem,
        enchantItem: JM.d.commands.enchantItem,
        changeIronChestPasskey(MM) {
          var rM;
          let {
            pos: iM,
            oa: OM
          } = MM;
          null === (rM = (0, zM.e)()) || void 0 === rM || rM.send(HM.d.ChangeIronChestPasskey, (0, HM.j)({
            ti: iM,
            oa: OM
          }))
        },
        openIronChest(MM) {
          var rM;
          let {
            pos: iM,
            oa: OM
          } = MM;
          null === (rM = (0, zM.e)()) || void 0 === rM || rM.send(HM.d.OpenIronChest, (0, HM.B)({
            ti: iM,
            oa: OM
          }))
        }
      },
      tM = {
        enchantingOffer: JM.d.queries.enchantingOffer
      }
  },
  41714: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      g: () => zM,
      h: () => aM,
      i: () => SM,
      k: () => PM,
      l: () => QM
    });
    class OM extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function SM(MM) {
      return MM instanceof RangeError && /call stack/i.test(MM.message) || MM instanceof Error && "InternalError" === MM.name && /recursion/i.test(MM.message)
    }
    const jM = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function aM(MM) {
      var rM;
      return MM instanceof WebAssembly.RuntimeError || MM instanceof OM || SM(MM) && jM.test(null !== (rM = MM.stack) && void 0 !== rM ? rM : "")
    }

    function PM(MM, rM) {
      if (aM(MM)) throw MM;
      console.error(rM, MM)
    }

    function nM(MM, rM, iM, SM, jM) {
      if (rM % SM !== 0 || rM + iM > MM.byteLength) throw new OM(`${jM}: ${iM} bytes at ${rM}, ${SM}-aligned, outside ${MM.byteLength} bytes of memory`)
    }

    function QM(MM, rM, iM, OM, SM) {
      return 0 === iM ? null : (nM(rM, iM, OM * MM.BYTES_PER_ELEMENT, MM.BYTES_PER_ELEMENT, SM), new MM(rM, iM, OM))
    }

    function zM(MM, rM, iM, OM, SM) {
      return 0 === rM ? null : (nM(MM, rM, iM, OM, SM), new DataView(MM, rM, iM))
    }
  },
  41677: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => yM,
      e: () => JM,
      h: () => dM,
      i: () => mM,
      m: () => HM,
      p: () => zM,
      r: () => LM,
      t: () => hM
    });
    class OM extends Error {
      constructor(MM) {
        super(`the join's code did not load: ${MM instanceof Error?MM.message:String(MM)}`, {
          cause: MM
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === MM || void 0 === MM ? void 0 : MM.request
      }
    }
    let SM = null,
      jM = null,
      aM = null;
    const PM = [];
    let nM = null;

    function QM(MM, rM) {
      try {
        MM(rM)
      } catch (iM) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", iM)
      }
    }

    function zM() {
      return nM
    }

    function LM(MM) {
      PM.push(MM), null !== nM && QM(MM, nM)
    }

    function mM(MM) {
      return SM ??= Promise.all([iM.e(84), iM.e(111), iM.e(86), iM.e(244), iM.e(89), iM.e(245), iM.e(224), iM.e(109), iM.e(264), iM.e(296), iM.e(48), iM.e(213), iM.e(232), iM.e(222), iM.e(205), iM.e(206), iM.e(170), iM.e(101), iM.e(134), iM.e(272), iM.e(68)]).then((() => iM(45248))).then((rM => {
        rM.loadAudio(MM), nM = rM;
        for (const MM of PM) QM(MM, rM);
        return rM
      })).catch((MM => {
        throw SM = null, MM
      })), SM
    }
    async function HM(MM, rM) {
      try {
        const iM = await mM(MM);
        await iM.loadClientGame(rM)
      } catch (iM) {
        throw new OM(iM)
      }
    }

    function hM(MM, rM) {
      jM = {
        running: MM,
        shell: rM
      }
    }

    function JM() {
      return aM
    }
    async function dM(MM) {
      const rM = jM;
      if ((null === rM || void 0 === rM ? void 0 : rM.running) !== MM) throw new Error("the core's session has ended");
      const iM = await mM(rM.shell.audio).catch((MM => {
        throw new OM(MM)
      }));
      if (null !== aM) return aM;
      if (jM !== rM || MM.isStopped) throw new Error("the core stopped while the game code loaded");
      if (aM = iM.startGameHost(MM, rM.shell), null === aM) throw new Error("the core's shared tables didn't read, so the game can't start");
      return aM
    }

    function yM() {
      null !== aM && (null !== nM ? nM.endGameHost(aM) : aM.closeGame()), aM = null, jM = null
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);