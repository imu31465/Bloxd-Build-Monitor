export const id = 216;
export const ids = [216];
export const modules = {
  39346: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      e: () => Ku
    });
    const Eu = "The world isn't loaded, so no blocks can be seen.",
      Ku = "The world isn't loaded, so nothing in it can be seen."
  },
  36584: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      i: () => Ku
    });
    let Eu = () => null;

    function Ku(uu) {
      Eu = uu
    }

    function Qu(uu, Ru) {
      return Eu(uu, Ru)
    }
  },
  40185: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => pu,
      h: () => Hu,
      k: () => ju,
      l: () => Tu
    });
    var Eu = yu(34),
      Ku = yu(40191),
      Qu = yu(40173),
      mu = yu(40197),
      Ju = yu(40177),
      Nu = yu(40199),
      Xu = yu(40217);

    function Vu(uu) {
      var Ru, yu;
      const Eu = (0, Qu.i)();
      return Eu ? null === (Ru = (0, Ku.b)(Eu.api, uu[0], uu[1], uu[2])) || void 0 === Ru || null === (yu = Ru.persisted) || void 0 === yu ? void 0 : yu.shared : void 0
    }

    function ru(uu) {
      return `${uu[0]},${uu[1]},${uu[2]}`
    }
    const Bu = new Map;
    let xu = null,
      Su = 0;

    function pu() {
      return Su
    }

    function Tu(uu) {
      const Ru = null !== xu && xu.key === ru(uu.pos) ? xu.type : null;
      if (null === Ru) return uu;
      let yu = null;
      if ("Iron" === Ru) {
        const {
          cachedPasskey: Ru,
          ...Eu
        } = Wu(uu.pos);
        yu = {
          SX: null !== Ru && void 0 !== Ru ? Ru : [0, 0, 0, 0],
          ...Eu
        }
      }
      return {
        ...uu,
        type: Ru,
        ironChest: yu
      }
    }

    function Wu(uu) {
      const Ru = Vu(uu),
        yu = null === Ru || void 0 === Ru ? void 0 : Ru.ownerDbId,
        Eu = function(uu) {
          var Ru;
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vu(uu);
          const Eu = ru(uu),
            Ku = Bu.get(Eu);
          return Ku ? Ku.lastOpened < (null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.passkeyLastUpdated) && void 0 !== Ru ? Ru : 0) ? (Bu.delete(Eu), null) : [...Ku.SX] : null
        }(uu, Ru);
      return void 0 === yu ? {
        cachedPasskey: Eu
      } : {
        ownerDbId: yu,
        cachedPasskey: Eu
      }
    }(0, Xu.m)(mu.d, (uu => {
      const Ru = (0, Nu.f)(mu.d, uu);
      if (!(0, Nu.d)(Ru) || Ru.wQ) return;
      if (Su++, !Ru.gQ || null === Ru.zQ) return void(xu = null);
      const yu = ru(Ru.zQ);
      xu = {
        key: yu,
        type: Ru.LQ
      }, null !== Ru.FQ && Bu.set(yu, {
        SX: [...Ru.FQ],
        lastOpened: Date.now()
      })
    })), (0, Xu.g)((() => {
      Bu.clear(), xu = null, Su++
    })), (0, Xu.i)((() => {
      null !== xu && (xu = null, Su++, Eu.k.Op("chestToggleFromServer", !1, !0))
    }));
    const ju = {
        boardEditRequested: {
          watch: uu => (0, Eu.n)("EditBoard", (Ru => {
            let {
              pos: yu
            } = Ru;
            if (null === yu) return void uu(null);
            const Eu = (0, Qu.i)(),
              Ku = (0, Qu.v)();
            Eu && Ku && uu(Ku.readBoardToEdit(Eu.api, Eu.chunks, yu))
          }))
        },
        ironChestOpenRequested: {
          watch: uu => (0, Eu.n)("OpenIronChest", (Ru => {
            let {
              pos: yu
            } = Ru;
            uu(function(uu) {
              return {
                pos: uu,
                ...Wu(uu)
              }
            }(yu))
          }))
        }
      },
      Hu = {
        writeOnBoard(uu) {
          var Ru;
          let {
            pos: yu,
            text: Eu,
            textSize: Ku
          } = uu;
          null === (Ru = (0, Qu.i)()) || void 0 === Ru || Ru.send(Ju.d.UpdateBoard, (0, Ju.T)({
            Nm: yu,
            Xm: Eu,
            Vm: Ku
          }))
        },
        writeBook(uu) {
          var Ru;
          let {
            pages: yu,
            title: Eu,
            published: Ku
          } = uu;
          null === (Ru = (0, Qu.i)()) || void 0 === Ru || Ru.send(Ju.d.UpdateBook, (0, Ju.U)({
            SJ: yu,
            pJ: Eu,
            TJ: Ku
          }))
        },
        writeNameTag(uu) {
          var Ru;
          null === (Ru = (0, Qu.i)()) || void 0 === Ru || Ru.send(Ju.d.UpdateNameTag, uu)
        },
        setCustomLobbyBlock(uu) {
          let {
            pos: Ru,
            blockName: yu
          } = uu;
          const Eu = (0, Qu.v)(),
            Ku = (0, Qu.i)();
          Eu && Ku && Ku.send(Ju.d.SetCustomLobbyBlock, (0, Ju.E)({
            yV: Eu.blockIdOf(yu),
            RV: Ru
          }))
        }
      }
  },
  40235: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Nu,
      h: () => mu,
      l: () => Ju
    });
    var Eu = yu(40160),
      Ku = yu(4549),
      Qu = yu(40173);

    function mu() {
      var uu;
      const Ru = null === (uu = (0, Qu.i)()) || void 0 === uu ? void 0 : uu.api.localId;
      return void 0 === Ru || Ru === Eu.Zc ? null : String(Ru)
    }

    function Ju(uu) {
      const Ru = (0, Qu.i)();
      if (null !== Ru) return uu(Ru);
      let yu = null;
      const Eu = (0, Ku.v)((() => {
        const Ru = (0, Qu.i)();
        null !== Ru && null === yu && (Eu(), yu = uu(Ru))
      }));
      return () => {
        var uu;
        Eu(), null === (uu = yu) || void 0 === uu || uu()
      }
    }

    function Nu(uu, Ru, yu) {
      return {
        current: () => {
          const yu = (0, Qu.i)();
          return null === yu ? Ru : uu(yu)()
        },
        watch: Ru => Ju((Eu => {
          const Ku = uu(Eu);
          let Qu = Ku();
          return Ru(Qu), yu((() => {
            const uu = Ku();
            uu !== Qu && (Qu = uu, Ru(uu))
          }))
        }))
      }
    }
  },
  40232: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu
    });
    var Eu = yu(40173),
      Ku = yu(40235),
      Qu = yu(40241);

    function mu() {
      var uu, Ru;
      return null !== (uu = null === (Ru = (0, Eu.i)()) || void 0 === Ru ? void 0 : Ru.itemBridgeSources) && void 0 !== uu ? uu : Qu.b
    }

    function Ju(uu) {
      return {
        current: () => mu().states[uu].current(),
        watch: Ru => (0, Ku.l)((yu => {
          const Eu = yu.itemBridgeSources.states[uu];
          return Ru(Eu.current()), Eu.watch(Ru)
        }))
      }
    }

    function Nu(uu) {
      return {
        watch: Ru => (0, Ku.l)((yu => yu.itemBridgeSources.events[uu].watch(Ru)))
      }
    }
    const Xu = {
      states: {
        inventory: Ju("inventory"),
        hotbar: Ju("hotbar"),
        crafting: Ju("crafting"),
        heldItemAim: Ju("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Nu("hotbarSlotRequested"),
        hotbarScrolled: Nu("hotbarScrolled"),
        numberKeyPressed: Nu("numberKeyPressed"),
        inventoryDropRequested: Nu("inventoryDropRequested"),
        chestToggled: Nu("chestToggled"),
        chestRefreshed: Nu("chestRefreshed"),
        inventorySynced: Nu("inventorySynced"),
        enchantingTableOpened: Nu("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: uu => mu().commands.selectHotbarSlot(uu),
        removeInventoryItem: uu => mu().commands.removeInventoryItem(uu),
        swapInventorySlots: uu => mu().commands.swapInventorySlots(uu),
        moveInventoryItem: uu => mu().commands.moveInventoryItem(uu),
        quickMoveInventoryItem: uu => mu().commands.quickMoveInventoryItem(uu),
        closeChest: uu => mu().commands.closeChest(uu),
        focusCrafting: uu => mu().commands.focusCrafting(uu),
        craftRecipe: uu => mu().commands.craftRecipe(uu),
        salvageItem: uu => mu().commands.salvageItem(uu),
        enchantItem: uu => mu().commands.enchantItem(uu)
      },
      queries: {
        enchantingOffer: uu => mu().queries.enchantingOffer(uu)
      }
    }
  },
  40241: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju
    });
    var Eu = yu(39346);

    function Ku(uu) {
      return {
        current: () => uu,
        watch: () => () => {}
      }
    }

    function Qu() {}
    const mu = Object.freeze([0, 0, 0]),
      Ju = {
        states: {
          health: Ku({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Ku({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Ku({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Ku({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Ku({}),
          creativeVisibility: Ku({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Ku(null),
          heldItemAim: Ku({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Ku(!1),
          gliderBoostFuel: Ku(0),
          flight: Ku({
            canFly: !1,
            flying: !1
          }),
          crafting: Ku({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Ku({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Ku({}),
          fullInventory: Ku(!1),
          crosshairTarget: Ku({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Ku(!0),
          freeCamera: Ku({
            allowed: !1,
            movesFly: !1
          }),
          replay: Ku(null),
          replayEdits: Ku(null),
          replayRecorder: Ku({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Ku(!1)
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
          selectHotbarSlot: Qu,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Qu,
          setInventoryOpen: Qu,
          changeIronChestPasskey: Qu,
          dragReplayCamera: Qu,
          applyTemporaryThirdPerson: Qu,
          holdEmoteWheel: Qu,
          recordFlyingMiddleText: Qu,
          focusCrafting: Qu,
          craftRecipe: () => ({
            QV: 0,
            nV: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Qu,
          setShopOpen: Qu,
          buyShopItem: Qu,
          sendChatMessage: Qu,
          ignorePlayer: Qu,
          reportPlayer: Qu,
          reportWorldCodeChat: Qu,
          requestDiscordReportKey: Qu,
          reportLobbyOrGame: Qu,
          playEmote: Qu,
          updateMyCosmetic: Qu,
          writeOnBoard: Qu,
          writeBook: Qu,
          writeNameTag: Qu,
          setCustomLobbyBlock: Qu,
          openIronChest: Qu,
          sendCodeCollab: Qu,
          clickCodeBlock: Qu,
          bindCustomButtonKeys: Qu,
          pressCustomButton: Qu,
          moveReplayFreecam: Qu,
          holdReplayFreecamVertical: Qu,
          respawn: Qu,
          wakeUp: Qu,
          requestLeaderboard: Qu,
          completeTask: Qu,
          setServerCookie: Qu,
          answerUiRequest: Qu,
          chooseRewardedAd: Qu,
          setCameraZoom: Qu,
          setFreeCameraMovesFly: Qu,
          setBlockHighlight: Qu,
          setCrosshairInteractPrompt: Qu,
          setLookSensitivity: Qu,
          replayAction: Qu,
          setReplayPlaying: Qu,
          seekReplay: Qu,
          setReplayCameraMode: Qu,
          syncReplayCameraMode: Qu,
          setReplayCameraKeyframe: Qu,
          moveReplayCameraKeyframe: Qu,
          deleteReplayCameraKeyframes: Qu,
          setReplayPlaybackMark: Qu,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Qu,
          exportReplayVideo: Qu,
          toggleRecording: Qu,
          saveClip: Qu,
          setRecorderPrefs: Qu,
          setReplayViewerOpen: Qu
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Eu.d,
          worldCodeAiGameState: () => Eu.e
        },
        lookups: {
          localPos: () => mu,
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
  40166: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Au,
      f: () => eu,
      h: () => Du,
      i: () => ku,
      k: () => bu
    });
    var Eu = yu(38978),
      Ku = yu(1199),
      Qu = yu(1878),
      mu = yu(1895),
      Ju = yu(3093),
      Nu = yu(36584),
      Xu = yu(1280),
      Vu = yu(40173),
      ru = yu(4586),
      Bu = yu(2306),
      xu = yu(40177),
      Su = yu(40185),
      pu = yu(40232);
    let Tu = null;

    function Wu(uu) {
      const Ru = new Map,
        yu = yu => {
          if ("string" !== typeof yu) return;
          let Eu = Ru.get(yu);
          return void 0 === Eu && (Eu = uu(yu), void 0 !== Eu && Ru.set(yu, Eu)), Eu
        };
      return new Proxy({}, {
        get: (uu, Ru) => yu(Ru),
        has: (uu, Ru) => void 0 !== yu(Ru)
      })
    }

    function ju(uu) {
      const Ru = (0, Ju.b)(uu);
      return void 0 !== Ru && (0, Ju.f)(Ru) === uu
    }

    function Hu(uu) {
      var Ru;
      const yu = null === (Ru = (0, Vu.i)()) || void 0 === Ru ? void 0 : Ru.tables;
      if (void 0 === yu || !ju(uu)) return;
      const Eu = {
          displayName: yu.getDisplayName(uu)
        },
        Ku = yu.getItemStat(uu, "description");
      void 0 !== Ku && null !== Ku && (Eu.description = Ku);
      const {
        rootName: Qu
      } = yu.getMetaInfo(uu);
      Qu !== uu && (Eu.rootName = Qu);
      const mu = yu.getItemStat(uu, "armourReduction");
      return void 0 !== mu && null !== mu && (Eu.armourReduction = mu), Eu
    }(0, Vu.z)((uu => {
      Tu = uu
    }));
    const du = (0, mu.h)("DisplayName", "Description");

    function bu() {
      return Boolean(Qu.b.get("useInventory") && Qu.b.get("useFullInventory"))
    }
    let Cu = null;
    const ku = {
        inventory: function() {
          const uu = pu.e.states.inventory;
          let Ru = null;
          const yu = uu => {
            var yu;
            return null === uu.chest ? uu : ((null === (yu = Ru) || void 0 === yu ? void 0 : yu.from) === uu && Ru.chestVersion === (0, Su.e)() || (Ru = {
              from: uu,
              chestVersion: (0, Su.e)(),
              view: {
                ...uu,
                chest: (0, Su.l)(uu.chest)
              }
            }), Ru.view)
          };
          return {
            current: () => yu(uu.current()),
            watch: Ru => uu.watch((uu => {
              Ru(yu(uu))
            }))
          }
        }(),
        crafting: pu.e.states.crafting,
        stationItems: {
          current() {
            var uu;
            return (null === (uu = Cu) || void 0 === uu ? void 0 : uu.namesVersion) !== (0, Ju.g)() && (Cu = {
              namesVersion: (0, Ju.g)(),
              items: {
                enchantable: Wu((uu => {
                  const Ru = (0, Ju.b)(uu);
                  return void 0 !== Ru && null !== Tu && Tu.enchantmentPerksOf(Ru).length > 0 || void 0
                })),
                salvageable: Wu((uu => !(!ju(uu) || null === (0, Nu.e)(uu)) || void 0))
              }
            }), Cu.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let uu = null;
          const Ru = () => {
            var Ru;
            return (null === (Ru = uu) || void 0 === Ru ? void 0 : Ru.namesVersion) !== (0, Ju.g)() && (uu = {
              namesVersion: (0, Ju.g)(),
              infos: Wu(Hu)
            }), uu.infos
          };
          return {
            current: Ru,
            watch: yu => (0, mu.s)((Eu => {
              Eu.some(du) && (uu = null, yu(Ru()))
            }))
          }
        }(),
        creativeVisibility: (0, mu.l)((function() {
          const uu = {};
          for (const Ku of null !== (Ru = null === (yu = Tu) || void 0 === yu ? void 0 : yu.creativeItemIds()) && void 0 !== Ru ? Ru : []) {
            var Ru, yu, mu, Nu;
            const Xu = (0, Ju.f)(Ku);
            if (void 0 === Xu) continue;
            const Vu = null !== (mu = Qu.b.get((0, Eu.f)(Xu, "showInCreativeInven"))) && void 0 !== mu ? mu : null === (Nu = Tu) || void 0 === Nu ? void 0 : Nu.showInCreativeInvenOf(Ku);
            "boolean" === typeof Vu && (uu[Xu] = Vu)
          }
          return {
            publicLobby: (0, Ku.N)((0, Xu.c)().lobbyName),
            shownInGame: uu
          }
        }), ["connectedGameChanged"], (0, mu.h)("ShowInCreativeInven")),
        fullInventory: (0, mu.l)(bu, [], (0, mu.i)("useInventory", "useFullInventory"))
      },
      eu = {
        inventoryDropRequested: pu.e.events.inventoryDropRequested,
        chestToggled: pu.e.events.chestToggled,
        chestRefreshed: pu.e.events.chestRefreshed,
        inventorySynced: pu.e.events.inventorySynced,
        enchantingTableOpened: pu.e.events.enchantingTableOpened
      },
      Au = {
        removeInventoryItem: pu.e.commands.removeInventoryItem,
        swapInventorySlots: pu.e.commands.swapInventorySlots,
        moveInventoryItem: pu.e.commands.moveInventoryItem,
        quickMoveInventoryItem: pu.e.commands.quickMoveInventoryItem,
        closeChest: pu.e.commands.closeChest,
        setInventoryOpen(uu) {
          (0, ru.h)(Bu.t.InventoryOpen, uu ? Bu.t.InventoryOpen : 0)
        },
        focusCrafting: pu.e.commands.focusCrafting,
        craftRecipe: pu.e.commands.craftRecipe,
        salvageItem: pu.e.commands.salvageItem,
        enchantItem: pu.e.commands.enchantItem,
        changeIronChestPasskey(uu) {
          var Ru;
          let {
            pos: yu,
            SX: Eu
          } = uu;
          null === (Ru = (0, Vu.i)()) || void 0 === Ru || Ru.send(xu.d.ChangeIronChestPasskey, (0, xu.g)({
            zQ: yu,
            SX: Eu
          }))
        },
        openIronChest(uu) {
          var Ru;
          let {
            pos: yu,
            SX: Eu
          } = uu;
          null === (Ru = (0, Vu.i)()) || void 0 === Ru || Ru.send(xu.d.OpenIronChest, (0, xu.x)({
            zQ: yu,
            SX: Eu
          }))
        }
      },
      Du = {
        enchantingOffer: pu.e.queries.enchantingOffer
      }
  },
  40223: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      f: () => ru,
      g: () => Ju,
      j: () => Qu,
      k: () => Ku,
      m: () => Nu,
      p: () => Vu
    });
    class Eu extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Ku(uu) {
      return uu instanceof RangeError && /call stack/i.test(uu.message) || uu instanceof Error && "InternalError" === uu.name && /recursion/i.test(uu.message)
    }

    function Qu(uu) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(uu))
    }
    const mu = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Ju(uu) {
      var Ru;
      return uu instanceof WebAssembly.RuntimeError || uu instanceof Eu || Ku(uu) && mu.test(null !== (Ru = uu.stack) && void 0 !== Ru ? Ru : "")
    }

    function Nu(uu, Ru) {
      if (Ju(uu)) throw uu;
      console.error(Ru, uu)
    }

    function Xu(uu, Ru, yu, Ku, Qu) {
      if (Ru % Ku !== 0 || Ru + yu > uu.byteLength) throw new Eu(`${Qu}: ${yu} bytes at ${Ru}, ${Ku}-aligned, outside ${uu.byteLength} bytes of memory`)
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      return 0 === yu ? null : (Xu(Ru, yu, Eu * uu.BYTES_PER_ELEMENT, uu.BYTES_PER_ELEMENT, Ku), new uu(Ru, yu, Eu))
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      return 0 === Ru ? null : (Xu(uu, Ru, yu, Eu, Ku), new DataView(uu, Ru, yu))
    }
  },
  40173: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Su,
      e: () => Eu,
      g: () => Wu,
      i: () => pu,
      m: () => Tu,
      p: () => Bu,
      t: () => xu,
      v: () => Vu,
      z: () => ru
    });
    class Eu extends Error {
      constructor(uu) {
        super(`the join's code did not load: ${uu instanceof Error?uu.message:String(uu)}`, {
          cause: uu
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === uu || void 0 === uu ? void 0 : uu.request
      }
    }
    let Ku = null,
      Qu = null,
      mu = null;
    const Ju = [];
    let Nu = null;

    function Xu(uu, Ru) {
      try {
        uu(Ru)
      } catch (yu) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", yu)
      }
    }

    function Vu() {
      return Nu
    }

    function ru(uu) {
      Ju.push(uu), null !== Nu && Xu(uu, Nu)
    }

    function Bu(uu) {
      return Ku ??= Promise.all([yu.e(69), yu.e(94), yu.e(214), yu.e(74), yu.e(215), yu.e(189), yu.e(93), yu.e(259), yu.e(187), yu.e(262), yu.e(199), yu.e(186), yu.e(200), yu.e(136), yu.e(85), yu.e(114), yu.e(237), yu.e(53)]).then((() => yu(42130))).then((Ru => {
        Ru.loadAudio(uu), Nu = Ru;
        for (const uu of Ju) Xu(uu, Ru);
        return Ru
      })).catch((uu => {
        throw Ku = null, uu
      })), Ku
    }
    async function xu(uu, Ru) {
      try {
        const yu = await Bu(uu);
        await yu.loadClientGame(Ru)
      } catch (yu) {
        throw new Eu(yu)
      }
    }

    function Su(uu, Ru) {
      Qu = {
        running: uu,
        shell: Ru
      }
    }

    function pu() {
      return mu
    }
    async function Tu(uu) {
      const Ru = Qu;
      if ((null === Ru || void 0 === Ru ? void 0 : Ru.running) !== uu) throw new Error("the core's session has ended");
      const yu = await Bu(Ru.shell.audio).catch((uu => {
        throw new Eu(uu)
      }));
      if (null !== mu) return mu;
      if (Qu !== Ru || uu.isStopped) throw new Error("the core stopped while the game code loaded");
      if (mu = yu.startGameHost(uu, Ru.shell), null === mu) throw new Error("the core's shared tables didn't read, so the game can't start");
      return mu
    }

    function Wu() {
      null !== mu && (null !== Nu ? Nu.endGameHost(mu) : mu.closeGame()), mu = null, Qu = null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);