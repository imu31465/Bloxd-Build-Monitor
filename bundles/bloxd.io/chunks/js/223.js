export const id = 223;
export const ids = [223];
export const modules = {
  39690: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      h: () => bS
    });
    const tS = "The world isn't loaded, so no blocks can be seen.",
      bS = "The world isn't loaded, so nothing in it can be seen."
  },
  39127: (SS, HS, gS) => {
    function tS(SS) {
      return !(!SS.lobbyLeaderboardInfo && !SS.lobbyManage)
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  36835: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      d: () => bS
    });
    let tS = () => null;

    function bS(SS) {
      tS = SS
    }

    function XS(SS, HS) {
      return tS(SS, HS)
    }
  },
  40637: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => jS,
      f: () => PS,
      i: () => nS,
      l: () => GS
    });
    var tS = gS(31),
      bS = gS(40643),
      XS = gS(40625),
      xS = gS(40649),
      NS = gS(40632),
      qS = gS(40655),
      uS = gS(40666);

    function IS(SS) {
      var HS, gS;
      const tS = (0, XS.h)();
      return tS ? null === (HS = (0, bS.c)(tS.api, SS[0], SS[1], SS[2])) || void 0 === HS || null === (gS = HS.persisted) || void 0 === gS ? void 0 : gS.shared : void 0
    }

    function fS(SS) {
      return `${SS[0]},${SS[1]},${SS[2]}`
    }
    const kS = new Map;
    let aS = null,
      KS = 0;

    function jS() {
      return KS
    }

    function GS(SS) {
      const HS = null !== aS && aS.key === fS(SS.pos) ? aS.type : null;
      if (null === HS) return SS;
      let gS = null;
      if ("Iron" === HS) {
        const {
          cachedPasskey: HS,
          ...tS
        } = CS(SS.pos);
        gS = {
          Xx: null !== HS && void 0 !== HS ? HS : [0, 0, 0, 0],
          ...tS
        }
      }
      return {
        ...SS,
        type: HS,
        ironChest: gS
      }
    }

    function CS(SS) {
      const HS = IS(SS),
        gS = null === HS || void 0 === HS ? void 0 : HS.ownerDbId,
        tS = function(SS) {
          var HS;
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IS(SS);
          const tS = fS(SS),
            bS = kS.get(tS);
          return bS ? bS.lastOpened < (null !== (HS = null === gS || void 0 === gS ? void 0 : gS.passkeyLastUpdated) && void 0 !== HS ? HS : 0) ? (kS.delete(tS), null) : [...bS.Xx] : null
        }(SS, HS);
      return void 0 === gS ? {
        cachedPasskey: tS
      } : {
        ownerDbId: gS,
        cachedPasskey: tS
      }
    }(0, uS.l)(xS.d, (SS => {
      const HS = (0, qS.e)(xS.d, SS);
      if (!(0, qS.b)(HS) || HS.vt) return;
      if (KS++, !HS.Zt || null === HS.dt) return void(aS = null);
      const gS = fS(HS.dt);
      aS = {
        key: gS,
        type: HS.Ot
      }, null !== HS.ct && kS.set(gS, {
        Xx: [...HS.ct],
        lastOpened: Date.now()
      })
    })), (0, uS.f)((() => {
      kS.clear(), aS = null, KS++
    })), (0, uS.h)((() => {
      null !== aS && (aS = null, KS++, tS.k.cj("chestToggleFromServer", !1, !0))
    }));
    const nS = {
        boardEditRequested: {
          watch: SS => (0, tS.m)("EditBoard", (HS => {
            let {
              pos: gS
            } = HS;
            if (null === gS) return void SS(null);
            const tS = (0, XS.h)(),
              bS = (0, XS.q)();
            tS && bS && SS(bS.readBoardToEdit(tS.api, tS.chunks, gS))
          }))
        },
        ironChestOpenRequested: {
          watch: SS => (0, tS.m)("OpenIronChest", (HS => {
            let {
              pos: gS
            } = HS;
            SS(function(SS) {
              return {
                pos: SS,
                ...CS(SS)
              }
            }(gS))
          }))
        }
      },
      PS = {
        writeOnBoard(SS) {
          var HS;
          let {
            pos: gS,
            text: tS,
            textSize: bS
          } = SS;
          null === (HS = (0, XS.h)()) || void 0 === HS || HS.send(NS.b.UpdateBoard, (0, NS.W)({
            sx: gS,
            Bx: tS,
            Mx: bS
          }))
        },
        writeBook(SS) {
          var HS;
          let {
            pages: gS,
            title: tS,
            published: bS
          } = SS;
          null === (HS = (0, XS.h)()) || void 0 === HS || HS.send(NS.b.UpdateBook, (0, NS._)({
            ju: gS,
            Gu: tS,
            Cu: bS
          }))
        },
        writeNameTag(SS) {
          var HS;
          null === (HS = (0, XS.h)()) || void 0 === HS || HS.send(NS.b.UpdateNameTag, SS)
        },
        setCustomLobbyBlock(SS) {
          let {
            pos: HS,
            blockName: gS
          } = SS;
          const tS = (0, XS.q)(),
            bS = (0, XS.h)();
          tS && bS && bS.send(NS.b.SetCustomLobbyBlock, (0, NS.K)({
            XI: tS.blockIdOf(gS),
            bI: HS
          }))
        }
      }
  },
  40681: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      d: () => xS,
      h: () => NS
    });
    var tS = gS(40612),
      bS = gS(4911),
      XS = gS(40625);

    function xS() {
      var SS;
      const HS = null === (SS = (0, XS.h)()) || void 0 === SS ? void 0 : SS.api.localId;
      return void 0 === HS || HS === tS.Sc ? null : String(HS)
    }

    function NS(SS) {
      const HS = (0, XS.h)();
      if (null !== HS) return SS(HS);
      let gS = null;
      const tS = (0, bS.t)((() => {
        const HS = (0, XS.h)();
        null !== HS && null === gS && (tS(), gS = SS(HS))
      }));
      return () => {
        var SS;
        tS(), null === (SS = gS) || void 0 === SS || SS()
      }
    }

    function qS(SS, HS, gS) {
      return {
        current: () => {
          const gS = (0, XS.h)();
          return null === gS ? HS : SS(gS)()
        },
        watch: HS => NS((tS => {
          const bS = SS(tS);
          let XS = bS();
          return HS(XS), gS((() => {
            const SS = bS();
            SS !== XS && (XS = SS, HS(SS))
          }))
        }))
      }
    }
  },
  40678: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS
    });
    var tS = gS(40625),
      bS = gS(40681),
      XS = gS(40689);

    function xS() {
      var SS, HS;
      return null !== (SS = null === (HS = (0, tS.h)()) || void 0 === HS ? void 0 : HS.itemBridgeSources) && void 0 !== SS ? SS : XS.e
    }

    function NS(SS) {
      return {
        current: () => xS().states[SS].current(),
        watch: HS => (0, bS.h)((gS => {
          const tS = gS.itemBridgeSources.states[SS];
          return HS(tS.current()), tS.watch(HS)
        }))
      }
    }

    function qS(SS) {
      return {
        watch: HS => (0, bS.h)((gS => gS.itemBridgeSources.events[SS].watch(HS)))
      }
    }
    const uS = {
      states: {
        inventory: NS("inventory"),
        hotbar: NS("hotbar"),
        crafting: NS("crafting"),
        heldItemAim: NS("heldItemAim")
      },
      events: {
        hotbarSlotRequested: qS("hotbarSlotRequested"),
        hotbarScrolled: qS("hotbarScrolled"),
        numberKeyPressed: qS("numberKeyPressed"),
        inventoryDropRequested: qS("inventoryDropRequested"),
        chestToggled: qS("chestToggled"),
        chestRefreshed: qS("chestRefreshed"),
        inventorySynced: qS("inventorySynced"),
        enchantingTableOpened: qS("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: SS => xS().commands.selectHotbarSlot(SS),
        removeInventoryItem: SS => xS().commands.removeInventoryItem(SS),
        swapInventorySlots: SS => xS().commands.swapInventorySlots(SS),
        moveInventoryItem: SS => xS().commands.moveInventoryItem(SS),
        quickMoveInventoryItem: SS => xS().commands.quickMoveInventoryItem(SS),
        closeChest: SS => xS().commands.closeChest(SS),
        focusCrafting: SS => xS().commands.focusCrafting(SS),
        craftRecipe: SS => xS().commands.craftRecipe(SS),
        salvageItem: SS => xS().commands.salvageItem(SS),
        enchantItem: SS => xS().commands.enchantItem(SS)
      },
      queries: {
        enchantingOffer: SS => xS().queries.enchantingOffer(SS)
      }
    }
  },
  40689: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS
    });
    var tS = gS(39690);

    function bS(SS) {
      return {
        current: () => SS,
        watch: () => () => {}
      }
    }

    function XS() {}
    const xS = Object.freeze([0, 0, 0]),
      NS = {
        states: {
          health: bS({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: bS({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: bS({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: bS({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: bS({}),
          creativeVisibility: bS({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: bS(null),
          heldItemAim: bS({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: bS(!1),
          gliderBoostFuel: bS(0),
          flight: bS({
            canFly: !1,
            flying: !1
          }),
          crafting: bS({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: bS({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: bS({}),
          fullInventory: bS(!1),
          crosshairTarget: bS({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: bS(!0),
          freeCamera: bS({
            allowed: !1,
            movesFly: !1
          }),
          replay: bS(null),
          replayEdits: bS(null),
          replayRecorder: bS({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: bS(!1)
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
          selectHotbarSlot: XS,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: XS,
          setInventoryOpen: XS,
          changeIronChestPasskey: XS,
          dragReplayCamera: XS,
          applyTemporaryThirdPerson: XS,
          holdEmoteWheel: XS,
          recordFlyingMiddleText: XS,
          focusCrafting: XS,
          craftRecipe: () => ({
            XN: 0,
            jx: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: XS,
          setShopOpen: XS,
          buyShopItem: XS,
          lobbyManage: XS,
          sendChatMessage: XS,
          ignorePlayer: XS,
          reportPlayer: XS,
          reportWorldCodeChat: XS,
          requestDiscordReportKey: XS,
          reportLobbyOrGame: XS,
          playEmote: XS,
          updateMyCosmetic: XS,
          writeOnBoard: XS,
          writeBook: XS,
          writeNameTag: XS,
          setCustomLobbyBlock: XS,
          openIronChest: XS,
          sendCodeCollab: XS,
          clickCodeBlock: XS,
          bindCustomButtonKeys: XS,
          pressCustomButton: XS,
          moveReplayFreecam: XS,
          holdReplayFreecamVertical: XS,
          respawn: XS,
          wakeUp: XS,
          requestLeaderboard: XS,
          completeTask: XS,
          setServerCookie: XS,
          answerUiRequest: XS,
          chooseRewardedAd: XS,
          setCameraZoom: XS,
          setFreeCameraMovesFly: XS,
          setBlockHighlight: XS,
          setCrosshairInteractPrompt: XS,
          setLookSensitivity: XS,
          replayAction: XS,
          setReplayPlaying: XS,
          seekReplay: XS,
          setReplayCameraMode: XS,
          syncReplayCameraMode: XS,
          setReplayCameraKeyframe: XS,
          moveReplayCameraKeyframe: XS,
          deleteReplayCameraKeyframes: XS,
          setReplayPlaybackMark: XS,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: XS,
          exportReplayVideo: XS,
          toggleRecording: XS,
          saveClip: XS,
          setRecorderPrefs: XS,
          setReplayViewerOpen: XS
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => tS.d,
          worldCodeAiGameState: () => tS.h
        },
        lookups: {
          localPos: () => xS,
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
  40616: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => JS,
      i: () => ZS,
      j: () => OS,
      m: () => hS,
      o: () => DS
    });
    var tS = gS(39248),
      bS = gS(1309),
      XS = gS(2083),
      xS = gS(2097),
      NS = gS(3437),
      qS = gS(36835),
      uS = gS(1400),
      IS = gS(40625),
      fS = gS(4954),
      kS = gS(2510),
      aS = gS(40632),
      KS = gS(40637),
      jS = gS(40678);
    let GS = null;

    function CS(SS) {
      const HS = new Map,
        gS = gS => {
          if ("string" !== typeof gS) return;
          let tS = HS.get(gS);
          return void 0 === tS && (tS = SS(gS), void 0 !== tS && HS.set(gS, tS)), tS
        };
      return new Proxy({}, {
        get: (SS, HS) => gS(HS),
        has: (SS, HS) => void 0 !== gS(HS)
      })
    }

    function nS(SS) {
      const HS = (0, NS.d)(SS);
      return void 0 !== HS && (0, NS.e)(HS) === SS
    }

    function PS(SS) {
      var HS;
      const gS = null === (HS = (0, IS.h)()) || void 0 === HS ? void 0 : HS.tables;
      if (void 0 === gS || !nS(SS)) return;
      const tS = {
          displayName: gS.getDisplayName(SS)
        },
        bS = gS.getItemStat(SS, "description");
      void 0 !== bS && null !== bS && (tS.description = bS);
      const {
        rootName: XS
      } = gS.getMetaInfo(SS);
      XS !== SS && (tS.rootName = XS);
      const xS = gS.getItemStat(SS, "armourReduction");
      return void 0 !== xS && null !== xS && (tS.armourReduction = xS), tS
    }(0, IS.t)((SS => {
      GS = SS
    }));
    const QS = (0, xS.j)("DisplayName", "Description");

    function DS() {
      return Boolean(XS.d.get("useInventory") && XS.d.get("useFullInventory"))
    }
    let wS = null;
    const hS = {
        inventory: function() {
          const SS = jS.e.states.inventory;
          let HS = null;
          const gS = SS => {
            var gS;
            return null === SS.chest ? SS : ((null === (gS = HS) || void 0 === gS ? void 0 : gS.from) === SS && HS.chestVersion === (0, KS.c)() || (HS = {
              from: SS,
              chestVersion: (0, KS.c)(),
              view: {
                ...SS,
                chest: (0, KS.l)(SS.chest)
              }
            }), HS.view)
          };
          return {
            current: () => gS(SS.current()),
            watch: HS => SS.watch((SS => {
              HS(gS(SS))
            }))
          }
        }(),
        crafting: jS.e.states.crafting,
        stationItems: {
          current() {
            var SS;
            return (null === (SS = wS) || void 0 === SS ? void 0 : SS.namesVersion) !== (0, NS.g)() && (wS = {
              namesVersion: (0, NS.g)(),
              items: {
                enchantable: CS((SS => {
                  const HS = (0, NS.d)(SS);
                  return void 0 !== HS && null !== GS && GS.enchantmentPerksOf(HS).length > 0 || void 0
                })),
                salvageable: CS((SS => !(!nS(SS) || null === (0, qS.b)(SS)) || void 0))
              }
            }), wS.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let SS = null;
          const HS = () => {
            var HS;
            return (null === (HS = SS) || void 0 === HS ? void 0 : HS.namesVersion) !== (0, NS.g)() && (SS = {
              namesVersion: (0, NS.g)(),
              infos: CS(PS)
            }), SS.infos
          };
          return {
            current: HS,
            watch: gS => (0, xS.w)((tS => {
              tS.some(QS) && (SS = null, gS(HS()))
            }))
          }
        }(),
        creativeVisibility: (0, xS.r)((function() {
          const SS = {};
          for (const bS of null !== (HS = null === (gS = GS) || void 0 === gS ? void 0 : gS.creativeItemIds()) && void 0 !== HS ? HS : []) {
            var HS, gS, xS, qS;
            const uS = (0, NS.e)(bS);
            if (void 0 === uS) continue;
            const IS = null !== (xS = XS.d.get((0, tS.e)(uS, "showInCreativeInven"))) && void 0 !== xS ? xS : null === (qS = GS) || void 0 === qS ? void 0 : qS.showInCreativeInvenOf(bS);
            "boolean" === typeof IS && (SS[uS] = IS)
          }
          return {
            publicLobby: (0, bS.P)((0, uS.e)().lobbyName),
            shownInGame: SS
          }
        }), ["connectedGameChanged"], (0, xS.j)("ShowInCreativeInven")),
        fullInventory: (0, xS.r)(DS, [], (0, xS.n)("useInventory", "useFullInventory"))
      },
      ZS = {
        inventoryDropRequested: jS.e.events.inventoryDropRequested,
        chestToggled: jS.e.events.chestToggled,
        chestRefreshed: jS.e.events.chestRefreshed,
        inventorySynced: jS.e.events.inventorySynced,
        enchantingTableOpened: jS.e.events.enchantingTableOpened
      },
      JS = {
        removeInventoryItem: jS.e.commands.removeInventoryItem,
        swapInventorySlots: jS.e.commands.swapInventorySlots,
        moveInventoryItem: jS.e.commands.moveInventoryItem,
        quickMoveInventoryItem: jS.e.commands.quickMoveInventoryItem,
        closeChest: jS.e.commands.closeChest,
        setInventoryOpen(SS) {
          (0, fS.i)(kS.A.InventoryOpen, SS ? kS.A.InventoryOpen : 0)
        },
        focusCrafting: jS.e.commands.focusCrafting,
        craftRecipe: jS.e.commands.craftRecipe,
        salvageItem: jS.e.commands.salvageItem,
        enchantItem: jS.e.commands.enchantItem,
        changeIronChestPasskey(SS) {
          var HS;
          let {
            pos: gS,
            Xx: tS
          } = SS;
          null === (HS = (0, IS.h)()) || void 0 === HS || HS.send(aS.b.ChangeIronChestPasskey, (0, aS.i)({
            dt: gS,
            Xx: tS
          }))
        },
        openIronChest(SS) {
          var HS;
          let {
            pos: gS,
            Xx: tS
          } = SS;
          null === (HS = (0, IS.h)()) || void 0 === HS || HS.send(aS.b.OpenIronChest, (0, aS.B)({
            dt: gS,
            Xx: tS
          }))
        }
      },
      OS = {
        enchantingOffer: jS.e.queries.enchantingOffer
      }
  },
  40672: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      c: () => IS,
      d: () => xS,
      h: () => bS,
      j: () => NS,
      m: () => uS
    });
    class tS extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function bS(SS) {
      return SS instanceof RangeError && /call stack/i.test(SS.message) || SS instanceof Error && "InternalError" === SS.name && /recursion/i.test(SS.message)
    }
    const XS = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function xS(SS) {
      var HS;
      return SS instanceof WebAssembly.RuntimeError || SS instanceof tS || bS(SS) && XS.test(null !== (HS = SS.stack) && void 0 !== HS ? HS : "")
    }

    function NS(SS, HS) {
      if (xS(SS)) throw SS;
      console.error(HS, SS)
    }

    function qS(SS, HS, gS, bS, XS) {
      if (HS % bS !== 0 || HS + gS > SS.byteLength) throw new tS(`${XS}: ${gS} bytes at ${HS}, ${bS}-aligned, outside ${SS.byteLength} bytes of memory`)
    }

    function uS(SS, HS, gS, tS, bS) {
      return 0 === gS ? null : (qS(HS, gS, tS * SS.BYTES_PER_ELEMENT, SS.BYTES_PER_ELEMENT, bS), new SS(HS, gS, tS))
    }

    function IS(SS, HS, gS, tS, bS) {
      return 0 === HS ? null : (qS(SS, HS, gS, tS, bS), new DataView(SS, HS, gS))
    }
  },
  40625: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      f: () => CS,
      h: () => jS,
      i: () => GS,
      k: () => kS,
      m: () => aS,
      q: () => IS,
      t: () => fS,
      x: () => KS
    });
    class tS extends Error {
      constructor(SS) {
        super(`the join's code did not load: ${SS instanceof Error?SS.message:String(SS)}`, {
          cause: SS
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === SS || void 0 === SS ? void 0 : SS.request
      }
    }
    let bS = null,
      XS = null,
      xS = null;
    const NS = [];
    let qS = null;

    function uS(SS, HS) {
      try {
        SS(HS)
      } catch (gS) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", gS)
      }
    }

    function IS() {
      return qS
    }

    function fS(SS) {
      NS.push(SS), null !== qS && uS(SS, qS)
    }

    function kS(SS) {
      return bS ??= Promise.all([gS.e(72), gS.e(96), gS.e(221), gS.e(77), gS.e(222), gS.e(198), gS.e(95), gS.e(240), gS.e(269), gS.e(197), gS.e(210), gS.e(189), gS.e(196), gS.e(191), gS.e(142), gS.e(87), gS.e(121), gS.e(247), gS.e(56)]).then((() => gS(42593))).then((HS => {
        HS.loadAudio(SS), qS = HS;
        for (const SS of NS) uS(SS, HS);
        return HS
      })).catch((SS => {
        throw bS = null, SS
      })), bS
    }
    async function aS(SS, HS) {
      try {
        const gS = await kS(SS);
        await gS.loadClientGame(HS)
      } catch (gS) {
        throw new tS(gS)
      }
    }

    function KS(SS, HS) {
      XS = {
        running: SS,
        shell: HS
      }
    }

    function jS() {
      return xS
    }
    async function GS(SS) {
      const HS = XS;
      if ((null === HS || void 0 === HS ? void 0 : HS.running) !== SS) throw new Error("the core's session has ended");
      const gS = await kS(HS.shell.audio).catch((SS => {
        throw new tS(SS)
      }));
      if (null !== xS) return xS;
      if (XS !== HS || SS.isStopped) throw new Error("the core stopped while the game code loaded");
      if (xS = gS.startGameHost(SS, HS.shell), null === xS) throw new Error("the core's shared tables didn't read, so the game can't start");
      return xS
    }

    function CS() {
      null !== xS && (null !== qS ? qS.endGameHost(xS) : xS.closeGame()), xS = null, XS = null
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);