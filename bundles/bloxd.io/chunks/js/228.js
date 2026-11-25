export const id = 228;
export const ids = [228];
export const modules = {
  39933: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      f: () => Uu
    });
    const su = "The world isn't loaded, so no blocks can be seen.",
      Uu = "The world isn't loaded, so nothing in it can be seen."
  },
  39416: (uu, Eu, ju) => {
    function su(uu) {
      return !(!uu.lobbyLeaderboardInfo && !uu.lobbyManage)
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  37208: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      e: () => Uu
    });
    let su = () => null;

    function Uu(uu) {
      su = uu
    }

    function Zu(uu, Eu) {
      return su(uu, Eu)
    }
  },
  40856: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Yu,
      h: () => Mu,
      k: () => gu,
      m: () => hu
    });
    var su = ju(24),
      Uu = ju(40860),
      Zu = ju(40847),
      Xu = ju(40864),
      lu = ju(40854),
      qu = ju(40873),
      fu = ju(40889);

    function Cu(uu) {
      var Eu, ju;
      const su = (0, Zu.l)();
      return su ? null === (Eu = (0, Uu.d)(su.api, uu[0], uu[1], uu[2])) || void 0 === Eu || null === (ju = Eu.persisted) || void 0 === ju ? void 0 : ju.shared : void 0
    }

    function bu(uu) {
      return `${uu[0]},${uu[1]},${uu[2]}`
    }
    const cu = new Map;
    let Nu = null,
      Ou = 0;

    function Yu() {
      return Ou
    }

    function hu(uu) {
      const Eu = null !== Nu && Nu.key === bu(uu.pos) ? Nu.type : null;
      if (null === Eu) return uu;
      let ju = null;
      if ("Iron" === Eu) {
        const {
          cachedPasskey: Eu,
          ...su
        } = Du(uu.pos);
        ju = {
          wl: null !== Eu && void 0 !== Eu ? Eu : [0, 0, 0, 0],
          ...su
        }
      }
      return {
        ...uu,
        type: Eu,
        ironChest: ju
      }
    }

    function Du(uu) {
      const Eu = Cu(uu),
        ju = null === Eu || void 0 === Eu ? void 0 : Eu.ownerDbId,
        su = function(uu) {
          var Eu;
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cu(uu);
          const su = bu(uu),
            Uu = cu.get(su);
          return Uu ? Uu.lastOpened < (null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.passkeyLastUpdated) && void 0 !== Eu ? Eu : 0) ? (cu.delete(su), null) : [...Uu.wl] : null
        }(uu, Eu);
      return void 0 === ju ? {
        cachedPasskey: su
      } : {
        ownerDbId: ju,
        cachedPasskey: su
      }
    }(0, fu.n)(Xu.b, (uu => {
      const Eu = (0, qu.g)(Xu.b, uu);
      if (!(0, qu.e)(Eu) || Eu.EZ) return;
      if (Ou++, !Eu.nU || null === Eu.RU) return void(Nu = null);
      const ju = bu(Eu.RU);
      Nu = {
        key: ju,
        type: Eu.zU
      }, null !== Eu.uZ && cu.set(ju, {
        wl: [...Eu.uZ],
        lastOpened: Date.now()
      })
    })), (0, fu.i)((() => {
      cu.clear(), Nu = null, Ou++
    })), (0, fu.k)((() => {
      null !== Nu && (Nu = null, Ou++, su.h.TY("chestToggleFromServer", !1, !0))
    }));
    const gu = {
        boardEditRequested: {
          watch: uu => (0, su.l)("EditBoard", (Eu => {
            let {
              pos: ju
            } = Eu;
            if (null === ju) return void uu(null);
            const su = (0, Zu.l)(),
              Uu = (0, Zu.w)();
            su && Uu && uu(Uu.readBoardToEdit(su.api, su.chunks, ju))
          }))
        },
        ironChestOpenRequested: {
          watch: uu => (0, su.l)("OpenIronChest", (Eu => {
            let {
              pos: ju
            } = Eu;
            uu(function(uu) {
              return {
                pos: uu,
                ...Du(uu)
              }
            }(ju))
          }))
        }
      },
      Mu = {
        writeOnBoard(uu) {
          var Eu;
          let {
            pos: ju,
            text: su,
            textSize: Uu
          } = uu;
          null === (Eu = (0, Zu.l)()) || void 0 === Eu || Eu.send(lu.c.UpdateBoard, (0, lu.X)({
            eq: ju,
            Gq: su,
            pq: Uu
          }))
        },
        writeBook(uu) {
          var Eu;
          let {
            pages: ju,
            title: su,
            published: Uu
          } = uu;
          null === (Eu = (0, Zu.l)()) || void 0 === Eu || Eu.send(lu.c.UpdateBook, (0, lu._)({
            AX: ju,
            yX: su,
            zX: Uu
          }))
        },
        writeNameTag(uu) {
          var Eu;
          null === (Eu = (0, Zu.l)()) || void 0 === Eu || Eu.send(lu.c.UpdateNameTag, uu)
        },
        setCustomLobbyBlock(uu) {
          let {
            pos: Eu,
            blockName: ju
          } = uu;
          const su = (0, Zu.w)(),
            Uu = (0, Zu.l)();
          su && Uu && Uu.send(lu.c.SetCustomLobbyBlock, (0, lu.H)({
            ul: su.blockIdOf(ju),
            RX: Eu
          }))
        }
      }
  },
  40904: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu,
      e: () => Xu,
      g: () => lu
    });
    var su = ju(40833),
      Uu = ju(4962),
      Zu = ju(40847);

    function Xu() {
      var uu;
      const Eu = null === (uu = (0, Zu.l)()) || void 0 === uu ? void 0 : uu.api.localId;
      return void 0 === Eu || Eu === su.Pc ? null : String(Eu)
    }

    function lu(uu) {
      const Eu = (0, Zu.l)();
      if (null !== Eu) return uu(Eu);
      let ju = null;
      const su = (0, Uu.t)((() => {
        const Eu = (0, Zu.l)();
        null !== Eu && null === ju && (su(), ju = uu(Eu))
      }));
      return () => {
        var uu;
        su(), null === (uu = ju) || void 0 === uu || uu()
      }
    }

    function qu(uu, Eu, ju) {
      return {
        current: () => {
          const ju = (0, Zu.l)();
          return null === ju ? Eu : uu(ju)()
        },
        watch: Eu => lu((su => {
          const Uu = uu(su);
          let Zu = Uu();
          return Eu(Zu), ju((() => {
            const uu = Uu();
            uu !== Zu && (Zu = uu, Eu(uu))
          }))
        }))
      }
    }
  },
  40901: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu
    });
    var su = ju(40847),
      Uu = ju(40904),
      Zu = ju(40912);

    function Xu() {
      var uu, Eu;
      return null !== (uu = null === (Eu = (0, su.l)()) || void 0 === Eu ? void 0 : Eu.itemBridgeSources) && void 0 !== uu ? uu : Zu.d
    }

    function lu(uu) {
      return {
        current: () => Xu().states[uu].current(),
        watch: Eu => (0, Uu.g)((ju => {
          const su = ju.itemBridgeSources.states[uu];
          return Eu(su.current()), su.watch(Eu)
        }))
      }
    }

    function qu(uu) {
      return {
        watch: Eu => (0, Uu.g)((ju => ju.itemBridgeSources.events[uu].watch(Eu)))
      }
    }
    const fu = {
      states: {
        inventory: lu("inventory"),
        hotbar: lu("hotbar"),
        crafting: lu("crafting"),
        heldItemAim: lu("heldItemAim")
      },
      events: {
        hotbarSlotRequested: qu("hotbarSlotRequested"),
        hotbarScrolled: qu("hotbarScrolled"),
        numberKeyPressed: qu("numberKeyPressed"),
        inventoryDropRequested: qu("inventoryDropRequested"),
        chestToggled: qu("chestToggled"),
        chestRefreshed: qu("chestRefreshed"),
        inventorySynced: qu("inventorySynced"),
        enchantingTableOpened: qu("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: uu => Xu().commands.selectHotbarSlot(uu),
        removeInventoryItem: uu => Xu().commands.removeInventoryItem(uu),
        swapInventorySlots: uu => Xu().commands.swapInventorySlots(uu),
        moveInventoryItem: uu => Xu().commands.moveInventoryItem(uu),
        quickMoveInventoryItem: uu => Xu().commands.quickMoveInventoryItem(uu),
        closeChest: uu => Xu().commands.closeChest(uu),
        focusCrafting: uu => Xu().commands.focusCrafting(uu),
        craftRecipe: uu => Xu().commands.craftRecipe(uu),
        salvageItem: uu => Xu().commands.salvageItem(uu),
        enchantItem: uu => Xu().commands.enchantItem(uu)
      },
      queries: {
        enchantingOffer: uu => Xu().queries.enchantingOffer(uu)
      }
    }
  },
  40912: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(39933);

    function Uu(uu) {
      return {
        current: () => uu,
        watch: () => () => {}
      }
    }

    function Zu() {}
    const Xu = Object.freeze([0, 0, 0]),
      lu = {
        states: {
          health: Uu({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Uu({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Uu({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Uu({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Uu({}),
          creativeVisibility: Uu({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Uu(null),
          heldItemAim: Uu({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Uu(!1),
          gliderBoostFuel: Uu(0),
          flight: Uu({
            canFly: !1,
            flying: !1
          }),
          crafting: Uu({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Uu({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Uu({}),
          fullInventory: Uu(!1),
          crosshairTarget: Uu({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Uu(!0),
          freeCamera: Uu({
            allowed: !1,
            movesFly: !1
          }),
          replay: Uu(null),
          replayEdits: Uu(null),
          replayRecorder: Uu({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Uu(!1)
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
          selectHotbarSlot: Zu,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Zu,
          setInventoryOpen: Zu,
          changeIronChestPasskey: Zu,
          dragReplayCamera: Zu,
          applyTemporaryThirdPerson: Zu,
          holdEmoteWheel: Zu,
          recordFlyingMiddleText: Zu,
          focusCrafting: Zu,
          craftRecipe: () => ({
            aC: 0,
            yl: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Zu,
          setShopOpen: Zu,
          buyShopItem: Zu,
          lobbyManage: Zu,
          sendChatMessage: Zu,
          ignorePlayer: Zu,
          reportPlayer: Zu,
          reportWorldCodeChat: Zu,
          requestDiscordReportKey: Zu,
          reportLobbyOrGame: Zu,
          playEmote: Zu,
          updateMyCosmetic: Zu,
          writeOnBoard: Zu,
          writeBook: Zu,
          writeNameTag: Zu,
          setCustomLobbyBlock: Zu,
          openIronChest: Zu,
          sendCodeCollab: Zu,
          clickCodeBlock: Zu,
          bindCustomButtonKeys: Zu,
          pressCustomButton: Zu,
          moveReplayFreecam: Zu,
          holdReplayFreecamVertical: Zu,
          respawn: Zu,
          wakeUp: Zu,
          requestLeaderboard: Zu,
          completeTask: Zu,
          setServerCookie: Zu,
          answerUiRequest: Zu,
          chooseRewardedAd: Zu,
          setCameraZoom: Zu,
          setFreeCameraMovesFly: Zu,
          setBlockHighlight: Zu,
          setCrosshairInteractPrompt: Zu,
          setLookSensitivity: Zu,
          replayAction: Zu,
          setReplayPlaying: Zu,
          seekReplay: Zu,
          setReplayCameraMode: Zu,
          syncReplayCameraMode: Zu,
          setReplayCameraKeyframe: Zu,
          moveReplayCameraKeyframe: Zu,
          deleteReplayCameraKeyframes: Zu,
          setReplayPlaybackMark: Zu,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Zu,
          exportReplayVideo: Zu,
          toggleRecording: Zu,
          saveClip: Zu,
          setRecorderPrefs: Zu,
          setReplayViewerOpen: Zu
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => su.e,
          worldCodeAiGameState: () => su.f
        },
        lookups: {
          localPos: () => Xu,
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
  40840: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => du,
      i: () => Ju,
      j: () => au,
      l: () => wu,
      p: () => Gu
    });
    var su = ju(39547),
      Uu = ju(1278),
      Zu = ju(2011),
      Xu = ju(2019),
      lu = ju(3475),
      qu = ju(37208),
      fu = ju(1369),
      Cu = ju(40847),
      bu = ju(4986),
      cu = ju(2516),
      Nu = ju(40854),
      Ou = ju(40856),
      Yu = ju(40901);
    let hu = null;

    function Du(uu) {
      const Eu = new Map,
        ju = ju => {
          if ("string" !== typeof ju) return;
          let su = Eu.get(ju);
          return void 0 === su && (su = uu(ju), void 0 !== su && Eu.set(ju, su)), su
        };
      return new Proxy({}, {
        get: (uu, Eu) => ju(Eu),
        has: (uu, Eu) => void 0 !== ju(Eu)
      })
    }

    function gu(uu) {
      const Eu = (0, lu.b)(uu);
      return void 0 !== Eu && (0, lu.c)(Eu) === uu
    }

    function Mu(uu) {
      var Eu;
      const ju = null === (Eu = (0, Cu.l)()) || void 0 === Eu ? void 0 : Eu.tables;
      if (void 0 === ju || !gu(uu)) return;
      const su = {
          displayName: ju.getDisplayName(uu)
        },
        Uu = ju.getItemStat(uu, "description");
      void 0 !== Uu && null !== Uu && (su.description = Uu);
      const {
        rootName: Zu
      } = ju.getMetaInfo(uu);
      Zu !== uu && (su.rootName = Zu);
      const Xu = ju.getItemStat(uu, "armourReduction");
      return void 0 !== Xu && null !== Xu && (su.armourReduction = Xu), su
    }(0, Cu.A)((uu => {
      hu = uu
    }));
    const eu = (0, Xu.i)("DisplayName", "Description");

    function Gu() {
      return Boolean(Zu.e.get("useInventory") && Zu.e.get("useFullInventory"))
    }
    let pu = null;
    const wu = {
        inventory: function() {
          const uu = Yu.c.states.inventory;
          let Eu = null;
          const ju = uu => {
            var ju;
            return null === uu.chest ? uu : ((null === (ju = Eu) || void 0 === ju ? void 0 : ju.from) === uu && Eu.chestVersion === (0, Ou.e)() || (Eu = {
              from: uu,
              chestVersion: (0, Ou.e)(),
              view: {
                ...uu,
                chest: (0, Ou.m)(uu.chest)
              }
            }), Eu.view)
          };
          return {
            current: () => ju(uu.current()),
            watch: Eu => uu.watch((uu => {
              Eu(ju(uu))
            }))
          }
        }(),
        crafting: Yu.c.states.crafting,
        stationItems: {
          current() {
            var uu;
            return (null === (uu = pu) || void 0 === uu ? void 0 : uu.namesVersion) !== (0, lu.g)() && (pu = {
              namesVersion: (0, lu.g)(),
              items: {
                enchantable: Du((uu => {
                  const Eu = (0, lu.b)(uu);
                  return void 0 !== Eu && null !== hu && hu.enchantmentPerksOf(Eu).length > 0 || void 0
                })),
                salvageable: Du((uu => !(!gu(uu) || null === (0, qu.d)(uu)) || void 0))
              }
            }), pu.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let uu = null;
          const Eu = () => {
            var Eu;
            return (null === (Eu = uu) || void 0 === Eu ? void 0 : Eu.namesVersion) !== (0, lu.g)() && (uu = {
              namesVersion: (0, lu.g)(),
              infos: Du(Mu)
            }), uu.infos
          };
          return {
            current: Eu,
            watch: ju => (0, Xu.q)((su => {
              su.some(eu) && (uu = null, ju(Eu()))
            }))
          }
        }(),
        creativeVisibility: (0, Xu.l)((function() {
          const uu = {};
          for (const Uu of null !== (Eu = null === (ju = hu) || void 0 === ju ? void 0 : ju.creativeItemIds()) && void 0 !== Eu ? Eu : []) {
            var Eu, ju, Xu, qu;
            const fu = (0, lu.c)(Uu);
            if (void 0 === fu) continue;
            const Cu = null !== (Xu = Zu.e.get((0, su.g)(fu, "showInCreativeInven"))) && void 0 !== Xu ? Xu : null === (qu = hu) || void 0 === qu ? void 0 : qu.showInCreativeInvenOf(Uu);
            "boolean" === typeof Cu && (uu[fu] = Cu)
          }
          return {
            publicLobby: (0, Uu.N)((0, fu.b)().lobbyName),
            shownInGame: uu
          }
        }), ["connectedGameChanged"], (0, Xu.i)("ShowInCreativeInven")),
        fullInventory: (0, Xu.l)(Gu, [], (0, Xu.k)("useInventory", "useFullInventory"))
      },
      Ju = {
        inventoryDropRequested: Yu.c.events.inventoryDropRequested,
        chestToggled: Yu.c.events.chestToggled,
        chestRefreshed: Yu.c.events.chestRefreshed,
        inventorySynced: Yu.c.events.inventorySynced,
        enchantingTableOpened: Yu.c.events.enchantingTableOpened
      },
      du = {
        removeInventoryItem: Yu.c.commands.removeInventoryItem,
        swapInventorySlots: Yu.c.commands.swapInventorySlots,
        moveInventoryItem: Yu.c.commands.moveInventoryItem,
        quickMoveInventoryItem: Yu.c.commands.quickMoveInventoryItem,
        closeChest: Yu.c.commands.closeChest,
        setInventoryOpen(uu) {
          (0, bu.g)(cu.x.InventoryOpen, uu ? cu.x.InventoryOpen : 0)
        },
        focusCrafting: Yu.c.commands.focusCrafting,
        craftRecipe: Yu.c.commands.craftRecipe,
        salvageItem: Yu.c.commands.salvageItem,
        enchantItem: Yu.c.commands.enchantItem,
        changeIronChestPasskey(uu) {
          var Eu;
          let {
            pos: ju,
            wl: su
          } = uu;
          null === (Eu = (0, Cu.l)()) || void 0 === Eu || Eu.send(Nu.c.ChangeIronChestPasskey, (0, Nu.k)({
            RU: ju,
            wl: su
          }))
        },
        openIronChest(uu) {
          var Eu;
          let {
            pos: ju,
            wl: su
          } = uu;
          null === (Eu = (0, Cu.l)()) || void 0 === Eu || Eu.send(Nu.c.OpenIronChest, (0, Nu.B)({
            RU: ju,
            wl: su
          }))
        }
      },
      au = {
        enchantingOffer: Yu.c.queries.enchantingOffer
      }
  },
  40897: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Cu,
      k: () => Xu,
      l: () => Uu,
      p: () => lu,
      r: () => fu
    });
    class su extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Uu(uu) {
      return uu instanceof RangeError && /call stack/i.test(uu.message) || uu instanceof Error && "InternalError" === uu.name && /recursion/i.test(uu.message)
    }
    const Zu = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Xu(uu) {
      var Eu;
      return uu instanceof WebAssembly.RuntimeError || uu instanceof su || Uu(uu) && Zu.test(null !== (Eu = uu.stack) && void 0 !== Eu ? Eu : "")
    }

    function lu(uu, Eu) {
      if (Xu(uu)) throw uu;
      console.error(Eu, uu)
    }

    function qu(uu, Eu, ju, Uu, Zu) {
      if (Eu % Uu !== 0 || Eu + ju > uu.byteLength) throw new su(`${Zu}: ${ju} bytes at ${Eu}, ${Uu}-aligned, outside ${uu.byteLength} bytes of memory`)
    }

    function fu(uu, Eu, ju, su, Uu) {
      return 0 === ju ? null : (qu(Eu, ju, su * uu.BYTES_PER_ELEMENT, uu.BYTES_PER_ELEMENT, Uu), new uu(Eu, ju, su))
    }

    function Cu(uu, Eu, ju, su, Uu) {
      return 0 === Eu ? null : (qu(uu, Eu, ju, su, Uu), new DataView(uu, Eu, ju))
    }
  },
  40847: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => bu,
      B: () => Ou,
      e: () => su,
      i: () => Du,
      l: () => Yu,
      m: () => hu,
      p: () => cu,
      s: () => Nu,
      w: () => Cu
    });
    class su extends Error {
      constructor(uu) {
        super(`the join's code did not load: ${uu instanceof Error?uu.message:String(uu)}`, {
          cause: uu
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === uu || void 0 === uu ? void 0 : uu.request
      }
    }
    let Uu = null,
      Zu = null,
      Xu = null;
    const lu = [];
    let qu = null;

    function fu(uu, Eu) {
      try {
        uu(Eu)
      } catch (ju) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ju)
      }
    }

    function Cu() {
      return qu
    }

    function bu(uu) {
      lu.push(uu), null !== qu && fu(uu, qu)
    }

    function cu(uu) {
      return Uu ??= Promise.all([ju.e(73), ju.e(98), ju.e(226), ju.e(78), ju.e(227), ju.e(201), ju.e(97), ju.e(246), ju.e(273), ju.e(199), ju.e(214), ju.e(191), ju.e(198), ju.e(193), ju.e(144), ju.e(88), ju.e(122), ju.e(252), ju.e(57)]).then((() => ju(42862))).then((Eu => {
        Eu.loadAudio(uu), qu = Eu;
        for (const uu of lu) fu(uu, Eu);
        return Eu
      })).catch((uu => {
        throw Uu = null, uu
      })), Uu
    }
    async function Nu(uu, Eu) {
      try {
        const ju = await cu(uu);
        await ju.loadClientGame(Eu)
      } catch (ju) {
        throw new su(ju)
      }
    }

    function Ou(uu, Eu) {
      Zu = {
        running: uu,
        shell: Eu
      }
    }

    function Yu() {
      return Xu
    }
    async function hu(uu) {
      const Eu = Zu;
      if ((null === Eu || void 0 === Eu ? void 0 : Eu.running) !== uu) throw new Error("the core's session has ended");
      const ju = await cu(Eu.shell.audio).catch((uu => {
        throw new su(uu)
      }));
      if (null !== Xu) return Xu;
      if (Zu !== Eu || uu.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Xu = ju.startGameHost(uu, Eu.shell), null === Xu) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Xu
    }

    function Du() {
      null !== Xu && (null !== qu ? qu.endGameHost(Xu) : Xu.closeGame()), Xu = null, Zu = null
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);