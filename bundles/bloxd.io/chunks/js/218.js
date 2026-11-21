export const id = 218;
export const ids = [218];
export const modules = {
  39168: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => qQ
    });
    const LQ = "The world isn't loaded, so no blocks can be seen.",
      qQ = "The world isn't loaded, so nothing in it can be seen."
  },
  38642: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  36435: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => qQ
    });
    let LQ = () => null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ(QQ, FQ) {
      return LQ(QQ, FQ)
    }
  },
  40023: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => AQ,
      g: () => GQ,
      h: () => MQ,
      j: () => tQ
    });
    var LQ = wQ(22),
      qQ = wQ(40027),
      oQ = wQ(40009),
      DQ = wQ(40031),
      kQ = wQ(40018),
      vQ = wQ(40040),
      mQ = wQ(40056);

    function uQ(QQ) {
      var FQ, wQ;
      const LQ = (0, oQ.k)();
      return LQ ? null === (FQ = (0, qQ.d)(LQ.api, QQ[0], QQ[1], QQ[2])) || void 0 === FQ || null === (wQ = FQ.persisted) || void 0 === wQ ? void 0 : wQ.shared : void 0
    }

    function HQ(QQ) {
      return `${QQ[0]},${QQ[1]},${QQ[2]}`
    }
    const bQ = new Map;
    let YQ = null,
      xQ = 0;

    function AQ() {
      return xQ
    }

    function tQ(QQ) {
      const FQ = null !== YQ && YQ.key === HQ(QQ.pos) ? YQ.type : null;
      if (null === FQ) return QQ;
      let wQ = null;
      if ("Iron" === FQ) {
        const {
          cachedPasskey: FQ,
          ...LQ
        } = eQ(QQ.pos);
        wQ = {
          pu: null !== FQ && void 0 !== FQ ? FQ : [0, 0, 0, 0],
          ...LQ
        }
      }
      return {
        ...QQ,
        type: FQ,
        ironChest: wQ
      }
    }

    function eQ(QQ) {
      const FQ = uQ(QQ),
        wQ = null === FQ || void 0 === FQ ? void 0 : FQ.ownerDbId,
        LQ = function(QQ) {
          var FQ;
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uQ(QQ);
          const LQ = HQ(QQ),
            qQ = bQ.get(LQ);
          return qQ ? qQ.lastOpened < (null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.passkeyLastUpdated) && void 0 !== FQ ? FQ : 0) ? (bQ.delete(LQ), null) : [...qQ.pu] : null
        }(QQ, FQ);
      return void 0 === wQ ? {
        cachedPasskey: LQ
      } : {
        ownerDbId: wQ,
        cachedPasskey: LQ
      }
    }(0, mQ.h)(DQ.d, (QQ => {
      const FQ = (0, vQ.h)(DQ.d, QQ);
      if (!(0, vQ.e)(FQ) || FQ.JQ) return;
      if (xQ++, !FQ.aQ || null === FQ.VQ) return void(YQ = null);
      const wQ = HQ(FQ.VQ);
      YQ = {
        key: wQ,
        type: FQ.fQ
      }, null !== FQ.hQ && bQ.set(wQ, {
        pu: [...FQ.hQ],
        lastOpened: Date.now()
      })
    })), (0, mQ.f)((() => {
      bQ.clear(), YQ = null, xQ++
    })), (0, mQ.g)((() => {
      null !== YQ && (YQ = null, xQ++, LQ.l.GA("chestToggleFromServer", !1, !0))
    }));
    const MQ = {
        boardEditRequested: {
          watch: QQ => (0, LQ.o)("EditBoard", (FQ => {
            let {
              pos: wQ
            } = FQ;
            if (null === wQ) return void QQ(null);
            const LQ = (0, oQ.k)(),
              qQ = (0, oQ.u)();
            LQ && qQ && QQ(qQ.readBoardToEdit(LQ.api, LQ.chunks, wQ))
          }))
        },
        ironChestOpenRequested: {
          watch: QQ => (0, LQ.o)("OpenIronChest", (FQ => {
            let {
              pos: wQ
            } = FQ;
            QQ(function(QQ) {
              return {
                pos: QQ,
                ...eQ(QQ)
              }
            }(wQ))
          }))
        }
      },
      GQ = {
        writeOnBoard(QQ) {
          var FQ;
          let {
            pos: wQ,
            text: LQ,
            textSize: qQ
          } = QQ;
          null === (FQ = (0, oQ.k)()) || void 0 === FQ || FQ.send(kQ.b.UpdateBoard, (0, kQ.W)({
            Au: wQ,
            tu: LQ,
            eu: qQ
          }))
        },
        writeBook(QQ) {
          var FQ;
          let {
            pages: wQ,
            title: LQ,
            published: qQ
          } = QQ;
          null === (FQ = (0, oQ.k)()) || void 0 === FQ || FQ.send(kQ.b.UpdateBook, (0, kQ.Y)({
            Nm: wQ,
            Tm: LQ,
            Km: qQ
          }))
        },
        writeNameTag(QQ) {
          var FQ;
          null === (FQ = (0, oQ.k)()) || void 0 === FQ || FQ.send(kQ.b.UpdateNameTag, QQ)
        },
        setCustomLobbyBlock(QQ) {
          let {
            pos: FQ,
            blockName: wQ
          } = QQ;
          const LQ = (0, oQ.u)(),
            qQ = (0, oQ.k)();
          LQ && qQ && qQ.send(kQ.b.SetCustomLobbyBlock, (0, kQ.K)({
            um: LQ.blockIdOf(wQ),
            km: FQ
          }))
        }
      }
  },
  40074: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ,
      f: () => DQ,
      g: () => kQ
    });
    var LQ = wQ(40003),
      qQ = wQ(4621),
      oQ = wQ(40009);

    function DQ() {
      var QQ;
      const FQ = null === (QQ = (0, oQ.k)()) || void 0 === QQ ? void 0 : QQ.api.localId;
      return void 0 === FQ || FQ === LQ.ad ? null : String(FQ)
    }

    function kQ(QQ) {
      const FQ = (0, oQ.k)();
      if (null !== FQ) return QQ(FQ);
      let wQ = null;
      const LQ = (0, qQ.v)((() => {
        const FQ = (0, oQ.k)();
        null !== FQ && null === wQ && (LQ(), wQ = QQ(FQ))
      }));
      return () => {
        var QQ;
        LQ(), null === (QQ = wQ) || void 0 === QQ || QQ()
      }
    }

    function vQ(QQ, FQ, wQ) {
      return {
        current: () => {
          const wQ = (0, oQ.k)();
          return null === wQ ? FQ : QQ(wQ)()
        },
        watch: FQ => kQ((LQ => {
          const qQ = QQ(LQ);
          let oQ = qQ();
          return FQ(oQ), wQ((() => {
            const QQ = qQ();
            QQ !== oQ && (oQ = QQ, FQ(QQ))
          }))
        }))
      }
    }
  },
  40072: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ
    });
    var LQ = wQ(40009),
      qQ = wQ(40074),
      oQ = wQ(40082);

    function DQ() {
      var QQ, FQ;
      return null !== (QQ = null === (FQ = (0, LQ.k)()) || void 0 === FQ ? void 0 : FQ.itemBridgeSources) && void 0 !== QQ ? QQ : oQ.d
    }

    function kQ(QQ) {
      return {
        current: () => DQ().states[QQ].current(),
        watch: FQ => (0, qQ.g)((wQ => {
          const LQ = wQ.itemBridgeSources.states[QQ];
          return FQ(LQ.current()), LQ.watch(FQ)
        }))
      }
    }

    function vQ(QQ) {
      return {
        watch: FQ => (0, qQ.g)((wQ => wQ.itemBridgeSources.events[QQ].watch(FQ)))
      }
    }
    const mQ = {
      states: {
        inventory: kQ("inventory"),
        hotbar: kQ("hotbar"),
        crafting: kQ("crafting"),
        heldItemAim: kQ("heldItemAim")
      },
      events: {
        hotbarSlotRequested: vQ("hotbarSlotRequested"),
        hotbarScrolled: vQ("hotbarScrolled"),
        numberKeyPressed: vQ("numberKeyPressed"),
        inventoryDropRequested: vQ("inventoryDropRequested"),
        chestToggled: vQ("chestToggled"),
        chestRefreshed: vQ("chestRefreshed"),
        inventorySynced: vQ("inventorySynced"),
        enchantingTableOpened: vQ("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: QQ => DQ().commands.selectHotbarSlot(QQ),
        removeInventoryItem: QQ => DQ().commands.removeInventoryItem(QQ),
        swapInventorySlots: QQ => DQ().commands.swapInventorySlots(QQ),
        moveInventoryItem: QQ => DQ().commands.moveInventoryItem(QQ),
        quickMoveInventoryItem: QQ => DQ().commands.quickMoveInventoryItem(QQ),
        closeChest: QQ => DQ().commands.closeChest(QQ),
        focusCrafting: QQ => DQ().commands.focusCrafting(QQ),
        craftRecipe: QQ => DQ().commands.craftRecipe(QQ),
        salvageItem: QQ => DQ().commands.salvageItem(QQ),
        enchantItem: QQ => DQ().commands.enchantItem(QQ)
      },
      queries: {
        enchantingOffer: QQ => DQ().queries.enchantingOffer(QQ)
      }
    }
  },
  40082: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(39168);

    function qQ(QQ) {
      return {
        current: () => QQ,
        watch: () => () => {}
      }
    }

    function oQ() {}
    const DQ = Object.freeze([0, 0, 0]),
      kQ = {
        states: {
          health: qQ({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: qQ({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: qQ({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: qQ({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: qQ({}),
          creativeVisibility: qQ({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: qQ(null),
          heldItemAim: qQ({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: qQ(!1),
          gliderBoostFuel: qQ(0),
          flight: qQ({
            canFly: !1,
            flying: !1
          }),
          crafting: qQ({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: qQ({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: qQ({}),
          fullInventory: qQ(!1),
          crosshairTarget: qQ({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: qQ(!0),
          freeCamera: qQ({
            allowed: !1,
            movesFly: !1
          }),
          replay: qQ(null),
          replayEdits: qQ(null),
          replayRecorder: qQ({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: qQ(!1)
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
          selectHotbarSlot: oQ,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: oQ,
          setInventoryOpen: oQ,
          changeIronChestPasskey: oQ,
          dragReplayCamera: oQ,
          applyTemporaryThirdPerson: oQ,
          holdEmoteWheel: oQ,
          recordFlyingMiddleText: oQ,
          focusCrafting: oQ,
          craftRecipe: () => ({
            Sm: 0,
            wm: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: oQ,
          setShopOpen: oQ,
          buyShopItem: oQ,
          lobbyManage: oQ,
          sendChatMessage: oQ,
          ignorePlayer: oQ,
          reportPlayer: oQ,
          reportWorldCodeChat: oQ,
          requestDiscordReportKey: oQ,
          reportLobbyOrGame: oQ,
          playEmote: oQ,
          updateMyCosmetic: oQ,
          writeOnBoard: oQ,
          writeBook: oQ,
          writeNameTag: oQ,
          setCustomLobbyBlock: oQ,
          openIronChest: oQ,
          sendCodeCollab: oQ,
          clickCodeBlock: oQ,
          bindCustomButtonKeys: oQ,
          pressCustomButton: oQ,
          moveReplayFreecam: oQ,
          holdReplayFreecamVertical: oQ,
          respawn: oQ,
          wakeUp: oQ,
          requestLeaderboard: oQ,
          completeTask: oQ,
          setServerCookie: oQ,
          answerUiRequest: oQ,
          chooseRewardedAd: oQ,
          setCameraZoom: oQ,
          setFreeCameraMovesFly: oQ,
          setBlockHighlight: oQ,
          setCrosshairInteractPrompt: oQ,
          setLookSensitivity: oQ,
          replayAction: oQ,
          setReplayPlaying: oQ,
          seekReplay: oQ,
          setReplayCameraMode: oQ,
          syncReplayCameraMode: oQ,
          setReplayCameraKeyframe: oQ,
          moveReplayCameraKeyframe: oQ,
          deleteReplayCameraKeyframes: oQ,
          setReplayPlaybackMark: oQ,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: oQ,
          exportReplayVideo: oQ,
          toggleRecording: oQ,
          saveClip: oQ,
          setRecorderPrefs: oQ,
          setReplayViewerOpen: oQ
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => LQ.d,
          worldCodeAiGameState: () => LQ.h
        },
        lookups: {
          localPos: () => DQ,
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
  40005: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => WQ,
      g: () => iQ,
      h: () => RQ,
      j: () => SQ,
      l: () => cQ
    });
    var LQ = wQ(38764),
      qQ = wQ(1237),
      oQ = wQ(1911),
      DQ = wQ(1919),
      kQ = wQ(3149),
      vQ = wQ(36435),
      mQ = wQ(1339),
      uQ = wQ(40009),
      HQ = wQ(4657),
      bQ = wQ(2313),
      YQ = wQ(40018),
      xQ = wQ(40023),
      AQ = wQ(40072);
    let tQ = null;

    function eQ(QQ) {
      const FQ = new Map,
        wQ = wQ => {
          if ("string" !== typeof wQ) return;
          let LQ = FQ.get(wQ);
          return void 0 === LQ && (LQ = QQ(wQ), void 0 !== LQ && FQ.set(wQ, LQ)), LQ
        };
      return new Proxy({}, {
        get: (QQ, FQ) => wQ(FQ),
        has: (QQ, FQ) => void 0 !== wQ(FQ)
      })
    }

    function MQ(QQ) {
      const FQ = (0, kQ.c)(QQ);
      return void 0 !== FQ && (0, kQ.e)(FQ) === QQ
    }

    function GQ(QQ) {
      var FQ;
      const wQ = null === (FQ = (0, uQ.k)()) || void 0 === FQ ? void 0 : FQ.tables;
      if (void 0 === wQ || !MQ(QQ)) return;
      const LQ = {
          displayName: wQ.getDisplayName(QQ)
        },
        qQ = wQ.getItemStat(QQ, "description");
      void 0 !== qQ && null !== qQ && (LQ.description = qQ);
      const {
        rootName: oQ
      } = wQ.getMetaInfo(QQ);
      oQ !== QQ && (LQ.rootName = oQ);
      const DQ = wQ.getItemStat(QQ, "armourReduction");
      return void 0 !== DQ && null !== DQ && (LQ.armourReduction = DQ), LQ
    }(0, uQ.y)((QQ => {
      tQ = QQ
    }));
    const pQ = (0, DQ.g)("DisplayName", "Description");

    function cQ() {
      return Boolean(oQ.b.get("useInventory") && oQ.b.get("useFullInventory"))
    }
    let CQ = null;
    const SQ = {
        inventory: function() {
          const QQ = AQ.d.states.inventory;
          let FQ = null;
          const wQ = QQ => {
            var wQ;
            return null === QQ.chest ? QQ : ((null === (wQ = FQ) || void 0 === wQ ? void 0 : wQ.from) === QQ && FQ.chestVersion === (0, xQ.e)() || (FQ = {
              from: QQ,
              chestVersion: (0, xQ.e)(),
              view: {
                ...QQ,
                chest: (0, xQ.j)(QQ.chest)
              }
            }), FQ.view)
          };
          return {
            current: () => wQ(QQ.current()),
            watch: FQ => QQ.watch((QQ => {
              FQ(wQ(QQ))
            }))
          }
        }(),
        crafting: AQ.d.states.crafting,
        stationItems: {
          current() {
            var QQ;
            return (null === (QQ = CQ) || void 0 === QQ ? void 0 : QQ.namesVersion) !== (0, kQ.f)() && (CQ = {
              namesVersion: (0, kQ.f)(),
              items: {
                enchantable: eQ((QQ => {
                  const FQ = (0, kQ.c)(QQ);
                  return void 0 !== FQ && null !== tQ && tQ.enchantmentPerksOf(FQ).length > 0 || void 0
                })),
                salvageable: eQ((QQ => !(!MQ(QQ) || null === (0, vQ.e)(QQ)) || void 0))
              }
            }), CQ.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let QQ = null;
          const FQ = () => {
            var FQ;
            return (null === (FQ = QQ) || void 0 === FQ ? void 0 : FQ.namesVersion) !== (0, kQ.f)() && (QQ = {
              namesVersion: (0, kQ.f)(),
              infos: eQ(GQ)
            }), QQ.infos
          };
          return {
            current: FQ,
            watch: wQ => (0, DQ.t)((LQ => {
              LQ.some(pQ) && (QQ = null, wQ(FQ()))
            }))
          }
        }(),
        creativeVisibility: (0, DQ.n)((function() {
          const QQ = {};
          for (const qQ of null !== (FQ = null === (wQ = tQ) || void 0 === wQ ? void 0 : wQ.creativeItemIds()) && void 0 !== FQ ? FQ : []) {
            var FQ, wQ, DQ, vQ;
            const mQ = (0, kQ.e)(qQ);
            if (void 0 === mQ) continue;
            const uQ = null !== (DQ = oQ.b.get((0, LQ.i)(mQ, "showInCreativeInven"))) && void 0 !== DQ ? DQ : null === (vQ = tQ) || void 0 === vQ ? void 0 : vQ.showInCreativeInvenOf(qQ);
            "boolean" === typeof uQ && (QQ[mQ] = uQ)
          }
          return {
            publicLobby: (0, qQ.S)((0, mQ.c)().lobbyName),
            shownInGame: QQ
          }
        }), ["connectedGameChanged"], (0, DQ.g)("ShowInCreativeInven")),
        fullInventory: (0, DQ.n)(cQ, [], (0, DQ.k)("useInventory", "useFullInventory"))
      },
      iQ = {
        inventoryDropRequested: AQ.d.events.inventoryDropRequested,
        chestToggled: AQ.d.events.chestToggled,
        chestRefreshed: AQ.d.events.chestRefreshed,
        inventorySynced: AQ.d.events.inventorySynced,
        enchantingTableOpened: AQ.d.events.enchantingTableOpened
      },
      WQ = {
        removeInventoryItem: AQ.d.commands.removeInventoryItem,
        swapInventorySlots: AQ.d.commands.swapInventorySlots,
        moveInventoryItem: AQ.d.commands.moveInventoryItem,
        quickMoveInventoryItem: AQ.d.commands.quickMoveInventoryItem,
        closeChest: AQ.d.commands.closeChest,
        setInventoryOpen(QQ) {
          (0, HQ.i)(bQ.w.InventoryOpen, QQ ? bQ.w.InventoryOpen : 0)
        },
        focusCrafting: AQ.d.commands.focusCrafting,
        craftRecipe: AQ.d.commands.craftRecipe,
        salvageItem: AQ.d.commands.salvageItem,
        enchantItem: AQ.d.commands.enchantItem,
        changeIronChestPasskey(QQ) {
          var FQ;
          let {
            pos: wQ,
            pu: LQ
          } = QQ;
          null === (FQ = (0, uQ.k)()) || void 0 === FQ || FQ.send(YQ.b.ChangeIronChestPasskey, (0, YQ.g)({
            VQ: wQ,
            pu: LQ
          }))
        },
        openIronChest(QQ) {
          var FQ;
          let {
            pos: wQ,
            pu: LQ
          } = QQ;
          null === (FQ = (0, uQ.k)()) || void 0 === FQ || FQ.send(YQ.b.OpenIronChest, (0, YQ.D)({
            VQ: wQ,
            pu: LQ
          }))
        }
      },
      RQ = {
        enchantingOffer: AQ.d.queries.enchantingOffer
      }
  },
  40065: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      d: () => HQ,
      f: () => kQ,
      i: () => oQ,
      k: () => qQ,
      o: () => vQ,
      s: () => uQ
    });
    class LQ extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function qQ(QQ) {
      return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
    }

    function oQ(QQ) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(QQ))
    }
    const DQ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function kQ(QQ) {
      var FQ;
      return QQ instanceof WebAssembly.RuntimeError || QQ instanceof LQ || qQ(QQ) && DQ.test(null !== (FQ = QQ.stack) && void 0 !== FQ ? FQ : "")
    }

    function vQ(QQ, FQ) {
      if (kQ(QQ)) throw QQ;
      console.error(FQ, QQ)
    }

    function mQ(QQ, FQ, wQ, qQ, oQ) {
      if (FQ % qQ !== 0 || FQ + wQ > QQ.byteLength) throw new LQ(`${oQ}: ${wQ} bytes at ${FQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      return 0 === wQ ? null : (mQ(FQ, wQ, LQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(FQ, wQ, LQ))
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      return 0 === FQ ? null : (mQ(QQ, FQ, wQ, LQ, qQ), new DataView(QQ, FQ, wQ))
    }
  },
  40009: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => eQ,
      k: () => AQ,
      o: () => tQ,
      p: () => bQ,
      r: () => YQ,
      u: () => uQ,
      y: () => HQ,
      z: () => xQ
    });
    class LQ extends Error {
      constructor(QQ) {
        super(`the join's code did not load: ${QQ instanceof Error?QQ.message:String(QQ)}`, {
          cause: QQ
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === QQ || void 0 === QQ ? void 0 : QQ.request
      }
    }
    let qQ = null,
      oQ = null,
      DQ = null;
    const kQ = [];
    let vQ = null;

    function mQ(QQ, FQ) {
      try {
        QQ(FQ)
      } catch (wQ) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", wQ)
      }
    }

    function uQ() {
      return vQ
    }

    function HQ(QQ) {
      kQ.push(QQ), null !== vQ && mQ(QQ, vQ)
    }

    function bQ(QQ) {
      return qQ ??= Promise.all([wQ.e(70), wQ.e(95), wQ.e(216), wQ.e(75), wQ.e(217), wQ.e(190), wQ.e(94), wQ.e(235), wQ.e(261), wQ.e(188), wQ.e(263), wQ.e(200), wQ.e(187), wQ.e(201), wQ.e(137), wQ.e(86), wQ.e(115), wQ.e(239), wQ.e(54)]).then((() => wQ(41954))).then((FQ => {
        FQ.loadAudio(QQ), vQ = FQ;
        for (const QQ of kQ) mQ(QQ, FQ);
        return FQ
      })).catch((QQ => {
        throw qQ = null, QQ
      })), qQ
    }
    async function YQ(QQ, FQ) {
      try {
        const wQ = await bQ(QQ);
        await wQ.loadClientGame(FQ)
      } catch (wQ) {
        throw new LQ(wQ)
      }
    }

    function xQ(QQ, FQ) {
      oQ = {
        running: QQ,
        shell: FQ
      }
    }

    function AQ() {
      return DQ
    }
    async function tQ(QQ) {
      const FQ = oQ;
      if ((null === FQ || void 0 === FQ ? void 0 : FQ.running) !== QQ) throw new Error("the core's session has ended");
      const wQ = await bQ(FQ.shell.audio).catch((QQ => {
        throw new LQ(QQ)
      }));
      if (null !== DQ) return DQ;
      if (oQ !== FQ || QQ.isStopped) throw new Error("the core stopped while the game code loaded");
      if (DQ = wQ.startGameHost(QQ, FQ.shell), null === DQ) throw new Error("the core's shared tables didn't read, so the game can't start");
      return DQ
    }

    function eQ() {
      null !== DQ && (null !== vQ ? vQ.endGameHost(DQ) : DQ.closeGame()), DQ = null, oQ = null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);