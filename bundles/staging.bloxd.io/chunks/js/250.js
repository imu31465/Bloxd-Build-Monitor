export const id = 250;
export const ids = [250];
export const modules = {
  40527: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => be
    });
    const ye = "The world isn't loaded, so no blocks can be seen.",
      be = "The world isn't loaded, so nothing in it can be seen."
  },
  39896: (ee, ie, He) => {
    function ye(ee) {
      return !(!ee.lobbyLeaderboardInfo && !ee.lobbyManage)
    }
    He.d(ie, {
      e: () => ye
    })
  },
  37629: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      d: () => ye
    });
    const ye = 3,
      be = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  37637: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      e: () => be
    });
    let ye = () => null;

    function be(ee) {
      ye = ee
    }

    function Me(ee, ie) {
      return ye(ee, ie)
    }
  },
  41717: (ee, ie, He) => {
    He.d(ie, {
      c: () => Te,
      e: () => Be,
      g: () => ze,
      k: () => pe
    });
    var ye = He(27),
      be = He(41721),
      Me = He(41704),
      Ke = He(41725),
      Ue = He(41712),
      Fe = He(41728),
      Je = He(41739);

    function oe(ee) {
      var ie, He;
      const ye = (0, Me.h)();
      return ye ? null === (ie = (0, be.c)(ye.api, ee[0], ee[1], ee[2])) || void 0 === ie || null === (He = ie.persisted) || void 0 === He ? void 0 : He.shared : void 0
    }

    function Re(ee) {
      return `${ee[0]},${ee[1]},${ee[2]}`
    }
    const ke = new Map;
    let qe = null,
      fe = 0;

    function Te() {
      return fe
    }

    function pe(ee) {
      const ie = null !== qe && qe.key === Re(ee.pos) ? qe.type : null;
      if (null === ie) return ee;
      let He = null;
      if ("Iron" === ie) {
        const {
          cachedPasskey: ie,
          ...ye
        } = Xe(ee.pos);
        He = {
          SF: null !== ie && void 0 !== ie ? ie : [0, 0, 0, 0],
          ...ye
        }
      }
      return {
        ...ee,
        type: ie,
        ironChest: He
      }
    }

    function Xe(ee) {
      const ie = oe(ee),
        He = null === ie || void 0 === ie ? void 0 : ie.ownerDbId,
        ye = function(ee) {
          var ie;
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe(ee);
          const ye = Re(ee),
            be = ke.get(ye);
          return be ? be.lastOpened < (null !== (ie = null === He || void 0 === He ? void 0 : He.passkeyLastUpdated) && void 0 !== ie ? ie : 0) ? (ke.delete(ye), null) : [...be.SF] : null
        }(ee, ie);
      return void 0 === He ? {
        cachedPasskey: ye
      } : {
        ownerDbId: He,
        cachedPasskey: ye
      }
    }(0, Je.j)(Ke.e, (ee => {
      const ie = (0, Fe.g)(Ke.e, ee);
      if (!(0, Fe.c)(ie) || ie.ti) return;
      if (fe++, !ie.Ei || null === ie.di) return void(qe = null);
      const He = Re(ie.di);
      qe = {
        key: He,
        type: ie.Oi
      }, null !== ie.Wi && ke.set(He, {
        SF: [...ie.Wi],
        lastOpened: Date.now()
      })
    })), (0, Je.g)((() => {
      ke.clear(), qe = null, fe++
    })), (0, Je.i)((() => {
      null !== qe && (qe = null, fe++, ye.h.yR("chestToggleFromServer", !1, !0))
    }));
    const ze = {
        boardEditRequested: {
          watch: ee => (0, ye.j)("EditBoard", (ie => {
            let {
              pos: He
            } = ie;
            if (null === He) return void ee(null);
            const ye = (0, Me.h)(),
              be = (0, Me.q)();
            ye && be && ee(be.readBoardToEdit(ye.api, ye.chunks, He))
          }))
        },
        ironChestOpenRequested: {
          watch: ee => (0, ye.j)("OpenIronChest", (ie => {
            let {
              pos: He
            } = ie;
            ee(function(ee) {
              return {
                pos: ee,
                ...Xe(ee)
              }
            }(He))
          }))
        }
      },
      Be = {
        writeOnBoard(ee) {
          var ie;
          let {
            pos: He,
            text: ye,
            textSize: be
          } = ee;
          null === (ie = (0, Me.h)()) || void 0 === ie || ie.send(Ue.e.UpdateBoard, (0, Ue.X)({
            iJ: He,
            HJ: ye,
            yJ: be
          }))
        },
        writeBook(ee) {
          var ie;
          let {
            pages: He,
            title: ye,
            published: be
          } = ee;
          null === (ie = (0, Me.h)()) || void 0 === ie || ie.send(Ue.e.UpdateBook, (0, Ue.$)({
            BJ: He,
            EJ: ye,
            gJ: be
          }))
        },
        writeNameTag(ee) {
          var ie;
          null === (ie = (0, Me.h)()) || void 0 === ie || ie.send(Ue.e.UpdateNameTag, ee)
        },
        setCustomLobbyBlock(ee) {
          let {
            pos: ie,
            blockName: He
          } = ee;
          const ye = (0, Me.q)(),
            be = (0, Me.h)();
          ye && be && be.send(Ue.e.SetCustomLobbyBlock, (0, Ue.I)({
            po: ye.blockIdOf(He),
            fo: ie
          }))
        }
      }
  },
  41751: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      g: () => Ke,
      i: () => Ue
    });
    var ye = He(41694),
      be = He(5262),
      Me = He(41704);

    function Ke() {
      var ee;
      const ie = null === (ee = (0, Me.h)()) || void 0 === ee ? void 0 : ee.api.localId;
      return void 0 === ie || ie === ye.$c ? null : String(ie)
    }

    function Ue(ee) {
      const ie = (0, Me.h)();
      if (null !== ie) return ee(ie);
      let He = null;
      const ye = (0, be.u)((() => {
        const ie = (0, Me.h)();
        null !== ie && null === He && (ye(), He = ee(ie))
      }));
      return () => {
        var ee;
        ye(), null === (ee = He) || void 0 === ee || ee()
      }
    }

    function Fe(ee, ie, He) {
      return {
        current: () => {
          const He = (0, Me.h)();
          return null === He ? ie : ee(He)()
        },
        watch: ie => Ue((ye => {
          const be = ee(ye);
          let Me = be();
          return ie(Me), He((() => {
            const ee = be();
            ee !== Me && (Me = ee, ie(ee))
          }))
        }))
      }
    }
  },
  41747: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je
    });
    var ye = He(41704),
      be = He(41751),
      Me = He(41759);

    function Ke() {
      var ee, ie;
      return null !== (ee = null === (ie = (0, ye.h)()) || void 0 === ie ? void 0 : ie.itemBridgeSources) && void 0 !== ee ? ee : Me.b
    }

    function Ue(ee) {
      return {
        current: () => Ke().states[ee].current(),
        watch: ie => (0, be.i)((He => {
          const ye = He.itemBridgeSources.states[ee];
          return ie(ye.current()), ye.watch(ie)
        }))
      }
    }

    function Fe(ee) {
      return {
        watch: ie => (0, be.i)((He => He.itemBridgeSources.events[ee].watch(ie)))
      }
    }
    const Je = {
      states: {
        inventory: Ue("inventory"),
        hotbar: Ue("hotbar"),
        crafting: Ue("crafting"),
        heldItemAim: Ue("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Fe("hotbarSlotRequested"),
        hotbarScrolled: Fe("hotbarScrolled"),
        numberKeyPressed: Fe("numberKeyPressed"),
        inventoryDropRequested: Fe("inventoryDropRequested"),
        chestToggled: Fe("chestToggled"),
        chestRefreshed: Fe("chestRefreshed"),
        inventorySynced: Fe("inventorySynced"),
        enchantingTableOpened: Fe("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: ee => Ke().commands.selectHotbarSlot(ee),
        removeInventoryItem: ee => Ke().commands.removeInventoryItem(ee),
        swapInventorySlots: ee => Ke().commands.swapInventorySlots(ee),
        moveInventoryItem: ee => Ke().commands.moveInventoryItem(ee),
        quickMoveInventoryItem: ee => Ke().commands.quickMoveInventoryItem(ee),
        closeChest: ee => Ke().commands.closeChest(ee),
        focusCrafting: ee => Ke().commands.focusCrafting(ee),
        craftRecipe: ee => Ke().commands.craftRecipe(ee),
        salvageItem: ee => Ke().commands.salvageItem(ee),
        enchantItem: ee => Ke().commands.enchantItem(ee)
      },
      queries: {
        enchantingOffer: ee => Ke().queries.enchantingOffer(ee)
      }
    }
  },
  41759: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe
    });
    var ye = He(40527),
      be = He(37629);

    function Me(ee) {
      return {
        current: () => ee,
        watch: () => () => {}
      }
    }

    function Ke() {}
    const Ue = Object.freeze([0, 0, 0]),
      Fe = {
        states: {
          health: Me({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Me({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Me({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Me({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Me({}),
          creativeVisibility: Me({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Me(null),
          heldItemAim: Me({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Me(!1),
          gliderBoostFuel: Me(0),
          flight: Me({
            canFly: !1,
            flying: !1
          }),
          crafting: Me({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Me({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Me({}),
          fullInventory: Me(!1),
          crosshairTarget: Me({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Me(!0),
          freeCamera: Me({
            allowed: !1,
            movesFly: !1
          }),
          replay: Me(null),
          replayEdits: Me(null),
          replayRecorder: Me(be.b),
          replayVideoExporting: Me(!1)
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
          selectHotbarSlot: Ke,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Ke,
          setInventoryOpen: Ke,
          changeIronChestPasskey: Ke,
          dragReplayCamera: Ke,
          applyTemporaryThirdPerson: Ke,
          holdEmoteWheel: Ke,
          recordFlyingMiddleText: Ke,
          focusCrafting: Ke,
          craftRecipe: () => ({
            eR: 0,
            RJ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Ke,
          setShopOpen: Ke,
          buyShopItem: Ke,
          lobbyManage: Ke,
          sendChatMessage: () => !1,
          ignorePlayer: Ke,
          reportPlayer: Ke,
          reportWorldCodeChat: Ke,
          requestDiscordReportKey: Ke,
          reportLobbyOrGame: Ke,
          playEmote: Ke,
          updateMyCosmetic: Ke,
          writeOnBoard: Ke,
          writeBook: Ke,
          writeNameTag: Ke,
          setCustomLobbyBlock: Ke,
          openIronChest: Ke,
          sendCodeCollab: Ke,
          clickCodeBlock: Ke,
          bindCustomButtonKeys: Ke,
          pressCustomButton: Ke,
          moveReplayFreecam: Ke,
          holdReplayFreecamVertical: Ke,
          respawn: Ke,
          wakeUp: Ke,
          requestLeaderboard: Ke,
          completeTask: Ke,
          setServerCookie: Ke,
          answerUiRequest: Ke,
          chooseRewardedAd: Ke,
          setCameraZoom: Ke,
          setFreeCameraMovesFly: Ke,
          setBlockHighlight: Ke,
          setCrosshairInteractPrompt: Ke,
          setLookSensitivity: Ke,
          replayAction: Ke,
          setReplayPlaying: Ke,
          seekReplay: Ke,
          setReplayCameraMode: Ke,
          syncReplayCameraMode: Ke,
          setReplayCameraKeyframe: Ke,
          moveReplayCameraKeyframe: Ke,
          deleteReplayCameraKeyframes: Ke,
          setReplayPlaybackMark: Ke,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Ke,
          exportReplayVideo: Ke,
          toggleRecording: Ke,
          saveClip: Ke,
          setRecorderPrefs: Ke,
          setReplayViewerOpen: Ke
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => ye.c,
          worldCodeAiGameState: () => ye.d
        },
        lookups: {
          localPos: () => Ue,
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
  41702: (ee, ie, He) => {
    He.d(ie, {
      b: () => te,
      e: () => We,
      f: () => Ze,
      i: () => de,
      l: () => ge
    });
    var ye = He(40091),
      be = He(1169),
      Me = He(2018),
      Ke = He(2022),
      Ue = He(3608),
      Fe = He(37637),
      Je = He(1305),
      oe = He(41704),
      Re = He(5291),
      ke = He(2492),
      qe = He(41712),
      fe = He(41717),
      Te = He(41747);
    let pe = null;

    function Xe(ee) {
      const ie = new Map,
        He = He => {
          if ("string" !== typeof He) return;
          let ye = ie.get(He);
          return void 0 === ye && (ye = ee(He), void 0 !== ye && ie.set(He, ye)), ye
        };
      return new Proxy({}, {
        get: (ee, ie) => He(ie),
        has: (ee, ie) => void 0 !== He(ie)
      })
    }

    function ze(ee) {
      const ie = (0, Ue.c)(ee);
      return void 0 !== ie && (0, Ue.g)(ie) === ee
    }

    function Be(ee) {
      var ie;
      const He = null === (ie = (0, oe.h)()) || void 0 === ie ? void 0 : ie.tables;
      if (void 0 === He || !ze(ee)) return;
      const ye = {
          displayName: He.getDisplayName(ee)
        },
        be = He.getItemStat(ee, "description");
      void 0 !== be && null !== be && (ye.description = be);
      const {
        rootName: Me
      } = He.getMetaInfo(ee);
      Me !== ee && (ye.rootName = Me);
      const Ke = He.getItemStat(ee, "armourReduction");
      return void 0 !== Ke && null !== Ke && (ye.armourReduction = Ke), ye
    }(0, oe.r)((ee => {
      pe = ee
    }));
    const Ee = (0, Ke.d)("DisplayName", "Description");

    function ge() {
      return Boolean(Me.c.get("useInventory") && Me.c.get("useFullInventory"))
    }
    let Oe = null;
    const de = {
        inventory: function() {
          const ee = Te.b.states.inventory;
          let ie = null;
          const He = ee => {
            var He;
            return null === ee.chest ? ee : ((null === (He = ie) || void 0 === He ? void 0 : He.from) === ee && ie.chestVersion === (0, fe.c)() || (ie = {
              from: ee,
              chestVersion: (0, fe.c)(),
              view: {
                ...ee,
                chest: (0, fe.k)(ee.chest)
              }
            }), ie.view)
          };
          return {
            current: () => He(ee.current()),
            watch: ie => ee.watch((ee => {
              ie(He(ee))
            }))
          }
        }(),
        crafting: Te.b.states.crafting,
        stationItems: {
          current() {
            var ee;
            return (null === (ee = Oe) || void 0 === ee ? void 0 : ee.namesVersion) !== (0, Ue.j)() && (Oe = {
              namesVersion: (0, Ue.j)(),
              items: {
                enchantable: Xe((ee => {
                  const ie = (0, Ue.c)(ee);
                  return void 0 !== ie && null !== pe && pe.enchantmentPerksOf(ie).length > 0 || void 0
                })),
                salvageable: Xe((ee => !(!ze(ee) || null === (0, Fe.d)(ee)) || void 0))
              }
            }), Oe.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let ee = null;
          const ie = () => {
            var ie;
            return (null === (ie = ee) || void 0 === ie ? void 0 : ie.namesVersion) !== (0, Ue.j)() && (ee = {
              namesVersion: (0, Ue.j)(),
              infos: Xe(Be)
            }), ee.infos
          };
          return {
            current: ie,
            watch: He => (0, Ke.l)((ye => {
              ye.some(Ee) && (ee = null, He(ie()))
            }))
          }
        }(),
        creativeVisibility: (0, Ke.i)((function() {
          const ee = {};
          for (const be of null !== (ie = null === (He = pe) || void 0 === He ? void 0 : He.creativeItemIds()) && void 0 !== ie ? ie : []) {
            var ie, He, Ke, Fe;
            const Je = (0, Ue.g)(be);
            if (void 0 === Je) continue;
            const oe = null !== (Ke = Me.c.get((0, ye.h)(Je, "showInCreativeInven"))) && void 0 !== Ke ? Ke : null === (Fe = pe) || void 0 === Fe ? void 0 : Fe.showInCreativeInvenOf(be);
            "boolean" === typeof oe && (ee[Je] = oe)
          }
          return {
            publicLobby: (0, be.K)((0, Je.e)().lobbyName),
            shownInGame: ee
          }
        }), ["connectedGameChanged"], (0, Ke.d)("ShowInCreativeInven")),
        fullInventory: (0, Ke.i)(ge, [], (0, Ke.h)("useInventory", "useFullInventory"))
      },
      We = {
        inventoryDropRequested: Te.b.events.inventoryDropRequested,
        chestToggled: Te.b.events.chestToggled,
        chestRefreshed: Te.b.events.chestRefreshed,
        inventorySynced: Te.b.events.inventorySynced,
        enchantingTableOpened: Te.b.events.enchantingTableOpened
      },
      te = {
        removeInventoryItem: Te.b.commands.removeInventoryItem,
        swapInventorySlots: Te.b.commands.swapInventorySlots,
        moveInventoryItem: Te.b.commands.moveInventoryItem,
        quickMoveInventoryItem: Te.b.commands.quickMoveInventoryItem,
        closeChest: Te.b.commands.closeChest,
        setInventoryOpen(ee) {
          (0, Re.h)(ke.p.InventoryOpen, ee ? ke.p.InventoryOpen : 0)
        },
        focusCrafting: Te.b.commands.focusCrafting,
        craftRecipe: Te.b.commands.craftRecipe,
        salvageItem: Te.b.commands.salvageItem,
        enchantItem: Te.b.commands.enchantItem,
        changeIronChestPasskey(ee) {
          var ie;
          let {
            pos: He,
            SF: ye
          } = ee;
          null === (ie = (0, oe.h)()) || void 0 === ie || ie.send(qe.e.ChangeIronChestPasskey, (0, qe.i)({
            di: He,
            SF: ye
          }))
        },
        openIronChest(ee) {
          var ie;
          let {
            pos: He,
            SF: ye
          } = ee;
          null === (ie = (0, oe.h)()) || void 0 === ie || ie.send(qe.e.OpenIronChest, (0, qe.D)({
            di: He,
            SF: ye
          }))
        }
      },
      Ze = {
        enchantingOffer: Te.b.queries.enchantingOffer
      }
  },
  41743: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => oe,
      g: () => Ke,
      i: () => be,
      j: () => Ue,
      k: () => Je
    });
    class ye extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function be(ee) {
      return ee instanceof RangeError && /call stack/i.test(ee.message) || ee instanceof Error && "InternalError" === ee.name && /recursion/i.test(ee.message)
    }
    const Me = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Ke(ee) {
      var ie;
      return ee instanceof WebAssembly.RuntimeError || ee instanceof ye || be(ee) && Me.test(null !== (ie = ee.stack) && void 0 !== ie ? ie : "")
    }

    function Ue(ee, ie) {
      if (Ke(ee)) throw ee;
      console.error(ie, ee)
    }

    function Fe(ee, ie, He, be, Me) {
      if (ie % be !== 0 || ie + He > ee.byteLength) throw new ye(`${Me}: ${He} bytes at ${ie}, ${be}-aligned, outside ${ee.byteLength} bytes of memory`)
    }

    function Je(ee, ie, He, ye, be) {
      return 0 === He ? null : (Fe(ie, He, ye * ee.BYTES_PER_ELEMENT, ee.BYTES_PER_ELEMENT, be), new ee(ie, He, ye))
    }

    function oe(ee, ie, He, ye, be) {
      return 0 === ie ? null : (Fe(ee, ie, He, ye, be), new DataView(ee, ie, He))
    }
  },
  41704: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Xe,
      h: () => Te,
      l: () => pe,
      n: () => ke,
      o: () => qe,
      q: () => oe,
      r: () => Re,
      u: () => fe
    });
    class ye extends Error {
      constructor(ee) {
        super(`the join's code did not load: ${ee instanceof Error?ee.message:String(ee)}`, {
          cause: ee
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === ee || void 0 === ee ? void 0 : ee.request
      }
    }
    let be = null,
      Me = null,
      Ke = null;
    const Ue = [];
    let Fe = null;

    function Je(ee, ie) {
      try {
        ee(ie)
      } catch (He) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", He)
      }
    }

    function oe() {
      return Fe
    }

    function Re(ee) {
      Ue.push(ee), null !== Fe && Je(ee, Fe)
    }

    function ke(ee) {
      return be ??= Promise.all([He.e(84), He.e(111), He.e(86), He.e(248), He.e(89), He.e(220), He.e(170), He.e(249), He.e(109), He.e(268), He.e(238), He.e(300), He.e(49), He.e(217), He.e(233), He.e(216), He.e(207), He.e(208), He.e(101), He.e(134), He.e(274), He.e(68)]).then((() => He(45791))).then((ie => {
        ie.loadAudio(ee), Fe = ie;
        for (const ee of Ue) Je(ee, ie);
        return ie
      })).catch((ee => {
        throw be = null, ee
      })), be
    }
    async function qe(ee, ie) {
      try {
        const He = await ke(ee);
        await He.loadClientGame(ie)
      } catch (He) {
        throw new ye(He)
      }
    }

    function fe(ee, ie) {
      Me = {
        running: ee,
        shell: ie
      }
    }

    function Te() {
      return Ke
    }
    async function pe(ee) {
      const ie = Me;
      if ((null === ie || void 0 === ie ? void 0 : ie.running) !== ee) throw new Error("the core's session has ended");
      const He = await ke(ie.shell.audio).catch((ee => {
        throw new ye(ee)
      }));
      if (null !== Ke) return Ke;
      if (Me !== ie || ee.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Ke = He.startGameHost(ee, ie.shell), null === Ke) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Ke
    }

    function Xe() {
      null !== Ke && (null !== Fe ? Fe.endGameHost(Ke) : Ke.closeGame()), Ke = null, Me = null
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);