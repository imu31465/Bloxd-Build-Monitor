export const id = 255;
export const ids = [255];
export const modules = {
  41333: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => Wr
    });
    const Zr = "The world isn't loaded, so no blocks can be seen.",
      Wr = "The world isn't loaded, so nothing in it can be seen."
  },
  40670: (rr, Sr, Qr) => {
    function Zr(rr) {
      return !(!rr.lobbyLeaderboardInfo && !rr.lobbyManage)
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  38278: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      d: () => Zr
    });
    const Zr = 3,
      Wr = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  38280: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => Wr
    });
    let Zr = () => null;

    function Wr(rr) {
      Zr = rr
    }

    function ar(rr, Sr) {
      return Zr(rr, Sr)
    }
  },
  42463: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => tr,
      i: () => nr,
      k: () => Yr,
      m: () => hr
    });
    var Zr = Qr(34),
      Wr = Qr(42472),
      ar = Qr(42451),
      jr = Qr(42477),
      Ir = Qr(42456),
      fr = Qr(42479),
      Er = Qr(42495);

    function pr(rr) {
      var Sr, Qr;
      const Zr = (0, ar.f)();
      return Zr ? null === (Sr = (0, Wr.c)(Zr.api, rr[0], rr[1], rr[2])) || void 0 === Sr || null === (Qr = Sr.persisted) || void 0 === Qr ? void 0 : Qr.shared : void 0
    }

    function xr(rr) {
      return `${rr[0]},${rr[1]},${rr[2]}`
    }
    const mr = new Map;
    let Nr = null,
      Ur = 0;

    function tr() {
      return Ur
    }

    function hr(rr) {
      const Sr = null !== Nr && Nr.key === xr(rr.pos) ? Nr.type : null;
      if (null === Sr) return rr;
      let Qr = null;
      if ("Iron" === Sr) {
        const {
          cachedPasskey: Sr,
          ...Zr
        } = zr(rr.pos);
        Qr = {
          DI: null !== Sr && void 0 !== Sr ? Sr : [0, 0, 0, 0],
          ...Zr
        }
      }
      return {
        ...rr,
        type: Sr,
        ironChest: Qr
      }
    }

    function zr(rr) {
      const Sr = pr(rr),
        Qr = null === Sr || void 0 === Sr ? void 0 : Sr.ownerDbId,
        Zr = function(rr) {
          var Sr;
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pr(rr);
          const Zr = xr(rr),
            Wr = mr.get(Zr);
          return Wr ? Wr.lastOpened < (null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.passkeyLastUpdated) && void 0 !== Sr ? Sr : 0) ? (mr.delete(Zr), null) : [...Wr.DI] : null
        }(rr, Sr);
      return void 0 === Qr ? {
        cachedPasskey: Zr
      } : {
        ownerDbId: Qr,
        cachedPasskey: Zr
      }
    }(0, Er.j)(jr.e, (rr => {
      const Sr = (0, fr.d)(jr.e, rr);
      if (!(0, fr.b)(Sr) || Sr.oW) return;
      if (Ur++, !Sr.VW || null === Sr.cW) return void(Nr = null);
      const Qr = xr(Sr.cW);
      Nr = {
        key: Qr,
        type: Sr.wW
      }, null !== Sr.FW && mr.set(Qr, {
        DI: [...Sr.FW],
        lastOpened: Date.now()
      })
    })), (0, Er.d)((() => {
      mr.clear(), Nr = null, Ur++
    })), (0, Er.f)((() => {
      null !== Nr && (Nr = null, Ur++, Zr.i.Jp("chestToggleFromServer", !1, !0))
    }));
    const Yr = {
        boardEditRequested: {
          watch: rr => (0, Zr.j)("EditBoard", (Sr => {
            let {
              pos: Qr
            } = Sr;
            if (null === Qr) return void rr(null);
            const Zr = (0, ar.f)(),
              Wr = (0, ar.l)();
            Zr && Wr && rr(Wr.readBoardToEdit(Zr.api, Zr.chunks, Qr))
          }))
        },
        ironChestOpenRequested: {
          watch: rr => (0, Zr.j)("OpenIronChest", (Sr => {
            let {
              pos: Qr
            } = Sr;
            rr(function(rr) {
              return {
                pos: rr,
                ...zr(rr)
              }
            }(Qr))
          }))
        }
      },
      nr = {
        writeOnBoard(rr) {
          var Sr;
          let {
            pos: Qr,
            text: Zr,
            Sf: Wr,
            textSize: jr
          } = rr;
          null === (Sr = (0, ar.f)()) || void 0 === Sr || Sr.send(Ir.b.UpdateBoard, (0, Ir.T)({
            uI: Qr,
            rf: Zr,
            Sf: Wr,
            Qf: jr
          }))
        },
        writeBook(rr) {
          var Sr;
          let {
            pages: Qr,
            title: Zr,
            published: Wr
          } = rr;
          null === (Sr = (0, ar.f)()) || void 0 === Sr || Sr.send(Ir.b.UpdateBook, (0, Ir.W)({
            Np: Qr,
            Up: Zr,
            tp: Wr
          }))
        },
        writeNameTag(rr) {
          var Sr;
          null === (Sr = (0, ar.f)()) || void 0 === Sr || Sr.send(Ir.b.UpdateNameTag, rr)
        },
        setCustomLobbyBlock(rr) {
          let {
            pos: Sr,
            blockName: Qr
          } = rr;
          const Zr = (0, ar.l)(),
            Wr = (0, ar.f)();
          Zr && Wr && Wr.send(Ir.b.SetCustomLobbyBlock, (0, Ir.K)({
            aI: Zr.blockIdOf(Qr),
            WI: Sr
          }))
        }
      }
  },
  42516: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      c: () => jr,
      f: () => Ir
    });
    var Zr = Qr(42438),
      Wr = Qr(5602),
      ar = Qr(42451);

    function jr() {
      var rr;
      const Sr = null === (rr = (0, ar.f)()) || void 0 === rr ? void 0 : rr.api.localId;
      return void 0 === Sr || Sr === Zr.Nc ? null : String(Sr)
    }

    function Ir(rr) {
      const Sr = (0, ar.f)();
      if (null !== Sr) return rr(Sr);
      let Qr = null;
      const Zr = (0, Wr.w)((() => {
        const Sr = (0, ar.f)();
        null !== Sr && null === Qr && (Zr(), Qr = rr(Sr))
      }));
      return () => {
        var rr;
        Zr(), null === (rr = Qr) || void 0 === rr || rr()
      }
    }

    function fr(rr, Sr, Qr) {
      return {
        current: () => {
          const Qr = (0, ar.f)();
          return null === Qr ? Sr : rr(Qr)()
        },
        watch: Sr => Ir((Zr => {
          const Wr = rr(Zr);
          let ar = Wr();
          return Sr(ar), Qr((() => {
            const rr = Wr();
            rr !== ar && (ar = rr, Sr(rr))
          }))
        }))
      }
    }
  },
  42507: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er
    });
    var Zr = Qr(42451),
      Wr = Qr(42516),
      ar = Qr(42519);

    function jr() {
      var rr, Sr;
      return null !== (rr = null === (Sr = (0, Zr.f)()) || void 0 === Sr ? void 0 : Sr.itemBridgeSources) && void 0 !== rr ? rr : ar.b
    }

    function Ir(rr) {
      return {
        current: () => jr().states[rr].current(),
        watch: Sr => (0, Wr.f)((Qr => {
          const Zr = Qr.itemBridgeSources.states[rr];
          return Sr(Zr.current()), Zr.watch(Sr)
        }))
      }
    }

    function fr(rr) {
      return {
        watch: Sr => (0, Wr.f)((Qr => Qr.itemBridgeSources.events[rr].watch(Sr)))
      }
    }
    const Er = {
      states: {
        inventory: Ir("inventory"),
        hotbar: Ir("hotbar"),
        crafting: Ir("crafting"),
        heldItemAim: Ir("heldItemAim")
      },
      events: {
        hotbarSlotRequested: fr("hotbarSlotRequested"),
        hotbarScrolled: fr("hotbarScrolled"),
        numberKeyPressed: fr("numberKeyPressed"),
        inventoryDropRequested: fr("inventoryDropRequested"),
        chestToggled: fr("chestToggled"),
        chestRefreshed: fr("chestRefreshed"),
        inventorySynced: fr("inventorySynced"),
        enchantingTableOpened: fr("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: rr => jr().commands.selectHotbarSlot(rr),
        removeInventoryItem: rr => jr().commands.removeInventoryItem(rr),
        swapInventorySlots: rr => jr().commands.swapInventorySlots(rr),
        moveInventoryItem: rr => jr().commands.moveInventoryItem(rr),
        quickMoveInventoryItem: rr => jr().commands.quickMoveInventoryItem(rr),
        closeChest: rr => jr().commands.closeChest(rr),
        focusCrafting: rr => jr().commands.focusCrafting(rr),
        craftRecipe: rr => jr().commands.craftRecipe(rr),
        salvageItem: rr => jr().commands.salvageItem(rr),
        enchantItem: rr => jr().commands.enchantItem(rr)
      },
      queries: {
        enchantingOffer: rr => jr().queries.enchantingOffer(rr)
      }
    }
  },
  42519: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(41333),
      Wr = Qr(38278);

    function ar(rr) {
      return {
        current: () => rr,
        watch: () => () => {}
      }
    }

    function jr() {}
    const Ir = Object.freeze([0, 0, 0]),
      fr = {
        states: {
          health: ar({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: ar({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: ar({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: ar({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: ar({}),
          creativeVisibility: ar({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: ar(null),
          heldItemAim: ar({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: ar(!1),
          gliderBoostFuel: ar(0),
          flight: ar({
            canFly: !1,
            flying: !1
          }),
          crafting: ar({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: ar({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: ar({}),
          fullInventory: ar(!1),
          crosshairTarget: ar({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: ar(!0),
          freeCamera: ar({
            allowed: !1,
            movesFly: !1
          }),
          replay: ar(null),
          replayEdits: ar(null),
          replayRecorder: ar(Wr.c),
          replayVideoExporting: ar(!1)
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
          selectHotbarSlot: jr,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: jr,
          setInventoryOpen: jr,
          changeIronChestPasskey: jr,
          dragReplayCamera: jr,
          applyTemporaryThirdPerson: jr,
          holdEmoteWheel: jr,
          recordFlyingMiddleText: jr,
          focusCrafting: jr,
          craftRecipe: () => ({
            NI: 0,
            bp: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: jr,
          setShopOpen: jr,
          buyShopItem: jr,
          lobbyManage: jr,
          sendChatMessage: () => !1,
          ignorePlayer: jr,
          reportPlayer: jr,
          reportWorldCodeChat: jr,
          requestDiscordReportKey: jr,
          reportLobbyOrGame: jr,
          playEmote: jr,
          updateMyCosmetic: jr,
          writeOnBoard: jr,
          writeBook: jr,
          writeNameTag: jr,
          setCustomLobbyBlock: jr,
          openIronChest: jr,
          sendCodeCollab: jr,
          clickCodeBlock: jr,
          bindCustomButtonKeys: jr,
          pressCustomButton: jr,
          moveReplayFreecam: jr,
          holdReplayFreecamVertical: jr,
          respawn: jr,
          wakeUp: jr,
          requestLeaderboard: jr,
          completeTask: jr,
          setServerCookie: jr,
          answerUiRequest: jr,
          chooseRewardedAd: jr,
          setCameraZoom: jr,
          setFreeCameraMovesFly: jr,
          setBlockHighlight: jr,
          setCrosshairInteractPrompt: jr,
          setLookSensitivity: jr,
          replayAction: jr,
          setReplayPlaying: jr,
          seekReplay: jr,
          setReplayCameraMode: jr,
          syncReplayCameraMode: jr,
          setReplayCameraKeyframe: jr,
          moveReplayCameraKeyframe: jr,
          deleteReplayCameraKeyframes: jr,
          setReplayPlaybackMark: jr,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: jr,
          exportReplayVideo: jr,
          toggleRecording: jr,
          saveClip: jr,
          setRecorderPrefs: jr,
          setReplayViewerOpen: jr
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Zr.e,
          worldCodeAiGameState: () => Zr.f
        },
        lookups: {
          localPos: () => Ir,
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
  42445: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => vr,
      e: () => Tr,
      h: () => Or,
      l: () => Br,
      o: () => Kr
    });
    var Zr = Qr(40818),
      Wr = Qr(1279),
      ar = Qr(2114),
      jr = Qr(2119),
      Ir = Qr(4489),
      fr = Qr(38280),
      Er = Qr(1422),
      pr = Qr(42451),
      xr = Qr(5628),
      mr = Qr(3372),
      Nr = Qr(42456),
      Ur = Qr(42463),
      tr = Qr(42507);
    let hr = null;

    function zr(rr) {
      const Sr = new Map,
        Qr = Qr => {
          if ("string" !== typeof Qr) return;
          let Zr = Sr.get(Qr);
          return void 0 === Zr && (Zr = rr(Qr), void 0 !== Zr && Sr.set(Qr, Zr)), Zr
        };
      return new Proxy({}, {
        get: (rr, Sr) => Qr(Sr),
        has: (rr, Sr) => void 0 !== Qr(Sr)
      })
    }

    function Yr(rr) {
      const Sr = (0, Ir.e)(rr);
      return void 0 !== Sr && (0, Ir.g)(Sr) === rr
    }

    function nr(rr) {
      var Sr;
      const Qr = null === (Sr = (0, pr.f)()) || void 0 === Sr ? void 0 : Sr.tables;
      if (void 0 === Qr || !Yr(rr)) return;
      const Zr = {
          displayName: Qr.getDisplayName(rr)
        },
        Wr = Qr.getItemStat(rr, "description");
      void 0 !== Wr && null !== Wr && (Zr.description = Wr);
      const {
        rootName: ar
      } = Qr.getMetaInfo(rr);
      ar !== rr && (Zr.rootName = ar);
      const jr = Qr.getItemStat(rr, "armourReduction");
      return void 0 !== jr && null !== jr && (Zr.armourReduction = jr), Zr
    }(0, pr.n)((rr => {
      hr = rr
    }));
    const er = (0, jr.h)("DisplayName", "Description");

    function Kr() {
      return Boolean(ar.d.get("useInventory") && ar.d.get("useFullInventory"))
    }
    let yr = null;
    const Br = {
        inventory: function() {
          const rr = tr.b.states.inventory;
          let Sr = null;
          const Qr = rr => {
            var Qr;
            return null === rr.chest ? rr : ((null === (Qr = Sr) || void 0 === Qr ? void 0 : Qr.from) === rr && Sr.chestVersion === (0, Ur.e)() || (Sr = {
              from: rr,
              chestVersion: (0, Ur.e)(),
              view: {
                ...rr,
                chest: (0, Ur.m)(rr.chest)
              }
            }), Sr.view)
          };
          return {
            current: () => Qr(rr.current()),
            watch: Sr => rr.watch((rr => {
              Sr(Qr(rr))
            }))
          }
        }(),
        crafting: tr.b.states.crafting,
        stationItems: {
          current() {
            var rr;
            return (null === (rr = yr) || void 0 === rr ? void 0 : rr.namesVersion) !== (0, Ir.k)() && (yr = {
              namesVersion: (0, Ir.k)(),
              items: {
                enchantable: zr((rr => {
                  const Sr = (0, Ir.e)(rr);
                  return void 0 !== Sr && null !== hr && hr.enchantmentPerksOf(Sr).length > 0 || void 0
                })),
                salvageable: zr((rr => !(!Yr(rr) || null === (0, fr.b)(rr)) || void 0))
              }
            }), yr.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let rr = null;
          const Sr = () => {
            var Sr;
            return (null === (Sr = rr) || void 0 === Sr ? void 0 : Sr.namesVersion) !== (0, Ir.k)() && (rr = {
              namesVersion: (0, Ir.k)(),
              infos: zr(nr)
            }), rr.infos
          };
          return {
            current: Sr,
            watch: Qr => (0, jr.p)((Zr => {
              Zr.some(er) && (rr = null, Qr(Sr()))
            }))
          }
        }(),
        creativeVisibility: (0, jr.l)((function() {
          const rr = {};
          for (const Wr of null !== (Sr = null === (Qr = hr) || void 0 === Qr ? void 0 : Qr.creativeItemIds()) && void 0 !== Sr ? Sr : []) {
            var Sr, Qr, jr, fr;
            const Er = (0, Ir.g)(Wr);
            if (void 0 === Er) continue;
            const pr = null !== (jr = ar.d.get((0, Zr.f)(Er, "showInCreativeInven"))) && void 0 !== jr ? jr : null === (fr = hr) || void 0 === fr ? void 0 : fr.showInCreativeInvenOf(Wr);
            "boolean" === typeof pr && (rr[Er] = pr)
          }
          return {
            publicLobby: (0, Wr.M)((0, Er.b)().lobbyName),
            shownInGame: rr
          }
        }), ["connectedGameChanged"], (0, jr.h)("ShowInCreativeInven")),
        fullInventory: (0, jr.l)(Kr, [], (0, jr.j)("useInventory", "useFullInventory"))
      },
      Tr = {
        inventoryDropRequested: tr.b.events.inventoryDropRequested,
        chestToggled: tr.b.events.chestToggled,
        chestRefreshed: tr.b.events.chestRefreshed,
        inventorySynced: tr.b.events.inventorySynced,
        enchantingTableOpened: tr.b.events.enchantingTableOpened
      },
      vr = {
        removeInventoryItem: tr.b.commands.removeInventoryItem,
        swapInventorySlots: tr.b.commands.swapInventorySlots,
        moveInventoryItem: tr.b.commands.moveInventoryItem,
        quickMoveInventoryItem: tr.b.commands.quickMoveInventoryItem,
        closeChest: tr.b.commands.closeChest,
        setInventoryOpen(rr) {
          (0, xr.f)(mr.y.InventoryOpen, rr ? mr.y.InventoryOpen : 0)
        },
        focusCrafting: tr.b.commands.focusCrafting,
        craftRecipe: tr.b.commands.craftRecipe,
        salvageItem: tr.b.commands.salvageItem,
        enchantItem: tr.b.commands.enchantItem,
        changeIronChestPasskey(rr) {
          var Sr;
          let {
            pos: Qr,
            DI: Zr
          } = rr;
          null === (Sr = (0, pr.f)()) || void 0 === Sr || Sr.send(Nr.b.ChangeIronChestPasskey, (0, Nr.g)({
            cW: Qr,
            DI: Zr
          }))
        },
        openIronChest(rr) {
          var Sr;
          let {
            pos: Qr,
            DI: Zr
          } = rr;
          null === (Sr = (0, pr.f)()) || void 0 === Sr || Sr.send(Nr.b.OpenIronChest, (0, Nr.E)({
            cW: Qr,
            DI: Zr
          }))
        }
      },
      Or = {
        enchantingOffer: tr.b.queries.enchantingOffer
      }
  },
  42500: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => pr,
      g: () => jr,
      i: () => Wr,
      k: () => Ir,
      n: () => Er
    });
    class Zr extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Wr(rr) {
      return rr instanceof RangeError && /call stack/i.test(rr.message) || rr instanceof Error && "InternalError" === rr.name && /recursion/i.test(rr.message)
    }
    const ar = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function jr(rr) {
      var Sr;
      return rr instanceof WebAssembly.RuntimeError || rr instanceof Zr || Wr(rr) && ar.test(null !== (Sr = rr.stack) && void 0 !== Sr ? Sr : "")
    }

    function Ir(rr, Sr) {
      if (jr(rr)) throw rr;
      console.error(Sr, rr)
    }

    function fr(rr, Sr, Qr, Wr, ar) {
      if (Sr % Wr !== 0 || Sr + Qr > rr.byteLength) throw new Zr(`${ar}: ${Qr} bytes at ${Sr}, ${Wr}-aligned, outside ${rr.byteLength} bytes of memory`)
    }

    function Er(rr, Sr, Qr, Zr, Wr) {
      return 0 === Qr ? null : (fr(Sr, Qr, Zr * rr.BYTES_PER_ELEMENT, rr.BYTES_PER_ELEMENT, Wr), new rr(Sr, Qr, Zr))
    }

    function pr(rr, Sr, Qr, Zr, Wr) {
      return 0 === Sr ? null : (fr(rr, Sr, Qr, Zr, Wr), new DataView(rr, Sr, Qr))
    }
  },
  42451: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      e: () => zr,
      f: () => tr,
      h: () => hr,
      i: () => mr,
      k: () => Nr,
      l: () => pr,
      n: () => xr,
      o: () => Ur
    });
    class Zr extends Error {
      constructor(rr) {
        super(`the join's code did not load: ${rr instanceof Error?rr.message:String(rr)}`, {
          cause: rr
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === rr || void 0 === rr ? void 0 : rr.request
      }
    }
    let Wr = null,
      ar = null,
      jr = null;
    const Ir = [];
    let fr = null;

    function Er(rr, Sr) {
      try {
        rr(Sr)
      } catch (Qr) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Qr)
      }
    }

    function pr() {
      return fr
    }

    function xr(rr) {
      Ir.push(rr), null !== fr && Er(rr, fr)
    }

    function mr(rr) {
      return Wr ??= Promise.all([Qr.e(85), Qr.e(113), Qr.e(88), Qr.e(177), Qr.e(91), Qr.e(225), Qr.e(253), Qr.e(112), Qr.e(142), Qr.e(246), Qr.e(245), Qr.e(307), Qr.e(244), Qr.e(223), Qr.e(50), Qr.e(224), Qr.e(127), Qr.e(214), Qr.e(281), Qr.e(143), Qr.e(103), Qr.e(69)]).then((() => Qr(55089))).then((Sr => {
        Sr.loadAudio(rr), fr = Sr;
        for (const rr of Ir) Er(rr, Sr);
        return Sr
      })).catch((rr => {
        throw Wr = null, rr
      })), Wr
    }
    async function Nr(rr, Sr) {
      try {
        const Qr = await mr(rr);
        await Qr.loadClientGame(Sr)
      } catch (Qr) {
        throw new Zr(Qr)
      }
    }

    function Ur(rr, Sr) {
      ar = {
        running: rr,
        shell: Sr
      }
    }

    function tr() {
      return jr
    }
    async function hr(rr) {
      const Sr = ar;
      if ((null === Sr || void 0 === Sr ? void 0 : Sr.running) !== rr) throw new Error("the core's session has ended");
      const Qr = await mr(Sr.shell.audio).catch((rr => {
        throw new Zr(rr)
      }));
      if (null !== jr) return jr;
      if (ar !== Sr || rr.isStopped) throw new Error("the core stopped while the game code loaded");
      if (jr = Qr.startGameHost(rr, Sr.shell), null === jr) throw new Error("the core's shared tables didn't read, so the game can't start");
      return jr
    }

    function zr() {
      null !== jr && (null !== fr ? fr.endGameHost(jr) : jr.closeGame()), jr = null, ar = null
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);