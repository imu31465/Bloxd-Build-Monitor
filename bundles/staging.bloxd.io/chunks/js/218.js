export const id = 218;
export const ids = [218];
export const modules = {
  39734: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Nd
    });
    const pd = "The world isn't loaded, so no blocks can be seen.",
      Nd = "The world isn't loaded, so nothing in it can be seen."
  },
  39252: (dd, Jd, kd) => {
    function pd(dd) {
      return !(!dd.lobbyLeaderboardInfo && !dd.lobbyManage)
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  36987: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      c: () => Nd
    });
    let pd = () => null;

    function Nd(dd) {
      pd = dd
    }

    function Wd(dd, Jd) {
      return pd(dd, Jd)
    }
  },
  40580: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Od,
      e: () => Gd,
      i: () => Id,
      m: () => ed
    });
    var pd = kd(29),
      Nd = kd(40585),
      Wd = kd(40575),
      Pd = kd(40592),
      Zd = kd(40578),
      gd = kd(40601),
      Cd = kd(40624);

    function Kd(dd) {
      var Jd, kd;
      const pd = (0, Wd.k)();
      return pd ? null === (Jd = (0, Nd.b)(pd.api, dd[0], dd[1], dd[2])) || void 0 === Jd || null === (kd = Jd.persisted) || void 0 === kd ? void 0 : kd.shared : void 0
    }

    function od(dd) {
      return `${dd[0]},${dd[1]},${dd[2]}`
    }
    const ld = new Map;
    let Qd = null,
      Ld = 0;

    function Od() {
      return Ld
    }

    function ed(dd) {
      const Jd = null !== Qd && Qd.key === od(dd.pos) ? Qd.type : null;
      if (null === Jd) return dd;
      let kd = null;
      if ("Iron" === Jd) {
        const {
          cachedPasskey: Jd,
          ...pd
        } = Rd(dd.pos);
        kd = {
          oK: null !== Jd && void 0 !== Jd ? Jd : [0, 0, 0, 0],
          ...pd
        }
      }
      return {
        ...dd,
        type: Jd,
        ironChest: kd
      }
    }

    function Rd(dd) {
      const Jd = Kd(dd),
        kd = null === Jd || void 0 === Jd ? void 0 : Jd.ownerDbId,
        pd = function(dd) {
          var Jd;
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kd(dd);
          const pd = od(dd),
            Nd = ld.get(pd);
          return Nd ? Nd.lastOpened < (null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.passkeyLastUpdated) && void 0 !== Jd ? Jd : 0) ? (ld.delete(pd), null) : [...Nd.oK] : null
        }(dd, Jd);
      return void 0 === kd ? {
        cachedPasskey: pd
      } : {
        ownerDbId: kd,
        cachedPasskey: pd
      }
    }(0, Cd.l)(Pd.e, (dd => {
      const Jd = (0, gd.e)(Pd.e, dd);
      if (!(0, gd.d)(Jd) || Jd.wd) return;
      if (Ld++, !Jd.ud || null === Jd.zd) return void(Qd = null);
      const kd = od(Jd.zd);
      Qd = {
        key: kd,
        type: Jd.Vd
      }, null !== Jd.Hd && ld.set(kd, {
        oK: [...Jd.Hd],
        lastOpened: Date.now()
      })
    })), (0, Cd.f)((() => {
      ld.clear(), Qd = null, Ld++
    })), (0, Cd.h)((() => {
      null !== Qd && (Qd = null, Ld++, pd.j.nO("chestToggleFromServer", !1, !0))
    }));
    const Id = {
        boardEditRequested: {
          watch: dd => (0, pd.n)("EditBoard", (Jd => {
            let {
              pos: kd
            } = Jd;
            if (null === kd) return void dd(null);
            const pd = (0, Wd.k)(),
              Nd = (0, Wd.w)();
            pd && Nd && dd(Nd.readBoardToEdit(pd.api, pd.chunks, kd))
          }))
        },
        ironChestOpenRequested: {
          watch: dd => (0, pd.n)("OpenIronChest", (Jd => {
            let {
              pos: kd
            } = Jd;
            dd(function(dd) {
              return {
                pos: dd,
                ...Rd(dd)
              }
            }(kd))
          }))
        }
      },
      Gd = {
        writeOnBoard(dd) {
          var Jd;
          let {
            pos: kd,
            text: pd,
            textSize: Nd
          } = dd;
          null === (Jd = (0, Wd.k)()) || void 0 === Jd || Jd.send(Zd.e.UpdateBoard, (0, Zd.V)({
            PK: kd,
            ZK: pd,
            gK: Nd
          }))
        },
        writeBook(dd) {
          var Jd;
          let {
            pages: kd,
            title: pd,
            published: Nd
          } = dd;
          null === (Jd = (0, Wd.k)()) || void 0 === Jd || Jd.send(Zd.e.UpdateBook, (0, Zd.X)({
            sC: kd,
            iC: pd,
            aC: Nd
          }))
        },
        writeNameTag(dd) {
          var Jd;
          null === (Jd = (0, Wd.k)()) || void 0 === Jd || Jd.send(Zd.e.UpdateNameTag, dd)
        },
        setCustomLobbyBlock(dd) {
          let {
            pos: Jd,
            blockName: kd
          } = dd;
          const pd = (0, Wd.w)(),
            Nd = (0, Wd.k)();
          pd && Nd && Nd.send(Zd.e.SetCustomLobbyBlock, (0, Zd.G)({
            NC: pd.blockIdOf(kd),
            pC: Jd
          }))
        }
      }
  },
  40645: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gd,
      f: () => Pd,
      h: () => Zd
    });
    var pd = kd(40569),
      Nd = kd(4666),
      Wd = kd(40575);

    function Pd() {
      var dd;
      const Jd = null === (dd = (0, Wd.k)()) || void 0 === dd ? void 0 : dd.api.localId;
      return void 0 === Jd || Jd === pd.gd ? null : String(Jd)
    }

    function Zd(dd) {
      const Jd = (0, Wd.k)();
      if (null !== Jd) return dd(Jd);
      let kd = null;
      const pd = (0, Nd.z)((() => {
        const Jd = (0, Wd.k)();
        null !== Jd && null === kd && (pd(), kd = dd(Jd))
      }));
      return () => {
        var dd;
        pd(), null === (dd = kd) || void 0 === dd || dd()
      }
    }

    function gd(dd, Jd, kd) {
      return {
        current: () => {
          const kd = (0, Wd.k)();
          return null === kd ? Jd : dd(kd)()
        },
        watch: Jd => Zd((pd => {
          const Nd = dd(pd);
          let Wd = Nd();
          return Jd(Wd), kd((() => {
            const dd = Nd();
            dd !== Wd && (Wd = dd, Jd(dd))
          }))
        }))
      }
    }
  },
  40636: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(40575),
      Nd = kd(40645),
      Wd = kd(40650);

    function Pd() {
      var dd, Jd;
      return null !== (dd = null === (Jd = (0, pd.k)()) || void 0 === Jd ? void 0 : Jd.itemBridgeSources) && void 0 !== dd ? dd : Wd.e
    }

    function Zd(dd) {
      return {
        current: () => Pd().states[dd].current(),
        watch: Jd => (0, Nd.h)((kd => {
          const pd = kd.itemBridgeSources.states[dd];
          return Jd(pd.current()), pd.watch(Jd)
        }))
      }
    }

    function gd(dd) {
      return {
        watch: Jd => (0, Nd.h)((kd => kd.itemBridgeSources.events[dd].watch(Jd)))
      }
    }
    const Cd = {
      states: {
        inventory: Zd("inventory"),
        hotbar: Zd("hotbar"),
        crafting: Zd("crafting"),
        heldItemAim: Zd("heldItemAim")
      },
      events: {
        hotbarSlotRequested: gd("hotbarSlotRequested"),
        hotbarScrolled: gd("hotbarScrolled"),
        numberKeyPressed: gd("numberKeyPressed"),
        inventoryDropRequested: gd("inventoryDropRequested"),
        chestToggled: gd("chestToggled"),
        chestRefreshed: gd("chestRefreshed"),
        inventorySynced: gd("inventorySynced"),
        enchantingTableOpened: gd("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: dd => Pd().commands.selectHotbarSlot(dd),
        removeInventoryItem: dd => Pd().commands.removeInventoryItem(dd),
        swapInventorySlots: dd => Pd().commands.swapInventorySlots(dd),
        moveInventoryItem: dd => Pd().commands.moveInventoryItem(dd),
        quickMoveInventoryItem: dd => Pd().commands.quickMoveInventoryItem(dd),
        closeChest: dd => Pd().commands.closeChest(dd),
        focusCrafting: dd => Pd().commands.focusCrafting(dd),
        craftRecipe: dd => Pd().commands.craftRecipe(dd),
        salvageItem: dd => Pd().commands.salvageItem(dd),
        enchantItem: dd => Pd().commands.enchantItem(dd)
      },
      queries: {
        enchantingOffer: dd => Pd().queries.enchantingOffer(dd)
      }
    }
  },
  40650: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd
    });
    var pd = kd(39734);

    function Nd(dd) {
      return {
        current: () => dd,
        watch: () => () => {}
      }
    }

    function Wd() {}
    const Pd = Object.freeze([0, 0, 0]),
      Zd = {
        states: {
          health: Nd({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Nd({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Nd({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Nd({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Nd({}),
          creativeVisibility: Nd({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Nd(null),
          heldItemAim: Nd({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Nd(!1),
          gliderBoostFuel: Nd(0),
          flight: Nd({
            canFly: !1,
            flying: !1
          }),
          crafting: Nd({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Nd({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Nd({}),
          fullInventory: Nd(!1),
          crosshairTarget: Nd({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Nd(!0),
          freeCamera: Nd({
            allowed: !1,
            movesFly: !1
          }),
          replay: Nd(null),
          replayEdits: Nd(null),
          replayRecorder: Nd({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Nd(!1)
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
          selectHotbarSlot: Wd,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Wd,
          setInventoryOpen: Wd,
          changeIronChestPasskey: Wd,
          dragReplayCamera: Wd,
          applyTemporaryThirdPerson: Wd,
          holdEmoteWheel: Wd,
          recordFlyingMiddleText: Wd,
          focusCrafting: Wd,
          craftRecipe: () => ({
            LC: 0,
            wg: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Wd,
          setShopOpen: Wd,
          buyShopItem: Wd,
          lobbyManage: Wd,
          sendChatMessage: Wd,
          ignorePlayer: Wd,
          reportPlayer: Wd,
          reportWorldCodeChat: Wd,
          requestDiscordReportKey: Wd,
          reportLobbyOrGame: Wd,
          playEmote: Wd,
          updateMyCosmetic: Wd,
          writeOnBoard: Wd,
          writeBook: Wd,
          writeNameTag: Wd,
          setCustomLobbyBlock: Wd,
          openIronChest: Wd,
          sendCodeCollab: Wd,
          clickCodeBlock: Wd,
          bindCustomButtonKeys: Wd,
          pressCustomButton: Wd,
          moveReplayFreecam: Wd,
          holdReplayFreecamVertical: Wd,
          respawn: Wd,
          wakeUp: Wd,
          requestLeaderboard: Wd,
          completeTask: Wd,
          setServerCookie: Wd,
          answerUiRequest: Wd,
          chooseRewardedAd: Wd,
          setCameraZoom: Wd,
          setFreeCameraMovesFly: Wd,
          setBlockHighlight: Wd,
          setCrosshairInteractPrompt: Wd,
          setLookSensitivity: Wd,
          replayAction: Wd,
          setReplayPlaying: Wd,
          seekReplay: Wd,
          setReplayCameraMode: Wd,
          syncReplayCameraMode: Wd,
          setReplayCameraKeyframe: Wd,
          moveReplayCameraKeyframe: Wd,
          deleteReplayCameraKeyframes: Wd,
          setReplayPlaybackMark: Wd,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Wd,
          exportReplayVideo: Wd,
          toggleRecording: Wd,
          saveClip: Wd,
          setRecorderPrefs: Wd,
          setReplayViewerOpen: Wd
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => pd.c,
          worldCodeAiGameState: () => pd.f
        },
        lookups: {
          localPos: () => Pd,
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
  40571: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ad,
      e: () => sd,
      g: () => Md,
      k: () => Bd,
      n: () => xd
    });
    var pd = kd(39370),
      Nd = kd(1245),
      Wd = kd(1955),
      Pd = kd(1964),
      Zd = kd(3130),
      gd = kd(36987),
      Cd = kd(1348),
      Kd = kd(40575),
      od = kd(4709),
      ld = kd(2337),
      Qd = kd(40578),
      Ld = kd(40580),
      Od = kd(40636);
    let ed = null;

    function Rd(dd) {
      const Jd = new Map,
        kd = kd => {
          if ("string" !== typeof kd) return;
          let pd = Jd.get(kd);
          return void 0 === pd && (pd = dd(kd), void 0 !== pd && Jd.set(kd, pd)), pd
        };
      return new Proxy({}, {
        get: (dd, Jd) => kd(Jd),
        has: (dd, Jd) => void 0 !== kd(Jd)
      })
    }

    function Id(dd) {
      const Jd = (0, Zd.c)(dd);
      return void 0 !== Jd && (0, Zd.d)(Jd) === dd
    }

    function Gd(dd) {
      var Jd;
      const kd = null === (Jd = (0, Kd.k)()) || void 0 === Jd ? void 0 : Jd.tables;
      if (void 0 === kd || !Id(dd)) return;
      const pd = {
          displayName: kd.getDisplayName(dd)
        },
        Nd = kd.getItemStat(dd, "description");
      void 0 !== Nd && null !== Nd && (pd.description = Nd);
      const {
        rootName: Wd
      } = kd.getMetaInfo(dd);
      Wd !== dd && (pd.rootName = Wd);
      const Pd = kd.getItemStat(dd, "armourReduction");
      return void 0 !== Pd && null !== Pd && (pd.armourReduction = Pd), pd
    }(0, Kd.A)((dd => {
      ed = dd
    }));
    const vd = (0, Pd.k)("DisplayName", "Description");

    function xd() {
      return Boolean(Wd.b.get("useInventory") && Wd.b.get("useFullInventory"))
    }
    let qd = null;
    const Bd = {
        inventory: function() {
          const dd = Od.e.states.inventory;
          let Jd = null;
          const kd = dd => {
            var kd;
            return null === dd.chest ? dd : ((null === (kd = Jd) || void 0 === kd ? void 0 : kd.from) === dd && Jd.chestVersion === (0, Ld.d)() || (Jd = {
              from: dd,
              chestVersion: (0, Ld.d)(),
              view: {
                ...dd,
                chest: (0, Ld.m)(dd.chest)
              }
            }), Jd.view)
          };
          return {
            current: () => kd(dd.current()),
            watch: Jd => dd.watch((dd => {
              Jd(kd(dd))
            }))
          }
        }(),
        crafting: Od.e.states.crafting,
        stationItems: {
          current() {
            var dd;
            return (null === (dd = qd) || void 0 === dd ? void 0 : dd.namesVersion) !== (0, Zd.e)() && (qd = {
              namesVersion: (0, Zd.e)(),
              items: {
                enchantable: Rd((dd => {
                  const Jd = (0, Zd.c)(dd);
                  return void 0 !== Jd && null !== ed && ed.enchantmentPerksOf(Jd).length > 0 || void 0
                })),
                salvageable: Rd((dd => !(!Id(dd) || null === (0, gd.b)(dd)) || void 0))
              }
            }), qd.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let dd = null;
          const Jd = () => {
            var Jd;
            return (null === (Jd = dd) || void 0 === Jd ? void 0 : Jd.namesVersion) !== (0, Zd.e)() && (dd = {
              namesVersion: (0, Zd.e)(),
              infos: Rd(Gd)
            }), dd.infos
          };
          return {
            current: Jd,
            watch: kd => (0, Pd.w)((pd => {
              pd.some(vd) && (dd = null, kd(Jd()))
            }))
          }
        }(),
        creativeVisibility: (0, Pd.q)((function() {
          const dd = {};
          for (const Nd of null !== (Jd = null === (kd = ed) || void 0 === kd ? void 0 : kd.creativeItemIds()) && void 0 !== Jd ? Jd : []) {
            var Jd, kd, Pd, gd;
            const Cd = (0, Zd.d)(Nd);
            if (void 0 === Cd) continue;
            const Kd = null !== (Pd = Wd.b.get((0, pd.e)(Cd, "showInCreativeInven"))) && void 0 !== Pd ? Pd : null === (gd = ed) || void 0 === gd ? void 0 : gd.showInCreativeInvenOf(Nd);
            "boolean" === typeof Kd && (dd[Cd] = Kd)
          }
          return {
            publicLobby: (0, Nd.M)((0, Cd.d)().lobbyName),
            shownInGame: dd
          }
        }), ["connectedGameChanged"], (0, Pd.k)("ShowInCreativeInven")),
        fullInventory: (0, Pd.q)(xd, [], (0, Pd.n)("useInventory", "useFullInventory"))
      },
      sd = {
        inventoryDropRequested: Od.e.events.inventoryDropRequested,
        chestToggled: Od.e.events.chestToggled,
        chestRefreshed: Od.e.events.chestRefreshed,
        inventorySynced: Od.e.events.inventorySynced,
        enchantingTableOpened: Od.e.events.enchantingTableOpened
      },
      ad = {
        removeInventoryItem: Od.e.commands.removeInventoryItem,
        swapInventorySlots: Od.e.commands.swapInventorySlots,
        moveInventoryItem: Od.e.commands.moveInventoryItem,
        quickMoveInventoryItem: Od.e.commands.quickMoveInventoryItem,
        closeChest: Od.e.commands.closeChest,
        setInventoryOpen(dd) {
          (0, od.i)(ld.y.InventoryOpen, dd ? ld.y.InventoryOpen : 0)
        },
        focusCrafting: Od.e.commands.focusCrafting,
        craftRecipe: Od.e.commands.craftRecipe,
        salvageItem: Od.e.commands.salvageItem,
        enchantItem: Od.e.commands.enchantItem,
        changeIronChestPasskey(dd) {
          var Jd;
          let {
            pos: kd,
            oK: pd
          } = dd;
          null === (Jd = (0, Kd.k)()) || void 0 === Jd || Jd.send(Qd.e.ChangeIronChestPasskey, (0, Qd.h)({
            zd: kd,
            oK: pd
          }))
        },
        openIronChest(dd) {
          var Jd;
          let {
            pos: kd,
            oK: pd
          } = dd;
          null === (Jd = (0, Kd.k)()) || void 0 === Jd || Jd.send(Qd.e.OpenIronChest, (0, Qd.y)({
            zd: kd,
            oK: pd
          }))
        }
      },
      Md = {
        enchantingOffer: Od.e.queries.enchantingOffer
      }
  },
  40629: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      f: () => od,
      j: () => Zd,
      n: () => Wd,
      o: () => Nd,
      p: () => gd,
      t: () => Kd
    });
    class pd extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Nd(dd) {
      return dd instanceof RangeError && /call stack/i.test(dd.message) || dd instanceof Error && "InternalError" === dd.name && /recursion/i.test(dd.message)
    }

    function Wd(dd) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(dd))
    }
    const Pd = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Zd(dd) {
      var Jd;
      return dd instanceof WebAssembly.RuntimeError || dd instanceof pd || Nd(dd) && Pd.test(null !== (Jd = dd.stack) && void 0 !== Jd ? Jd : "")
    }

    function gd(dd, Jd) {
      if (Zd(dd)) throw dd;
      console.error(Jd, dd)
    }

    function Cd(dd, Jd, kd, Nd, Wd) {
      if (Jd % Nd !== 0 || Jd + kd > dd.byteLength) throw new pd(`${Wd}: ${kd} bytes at ${Jd}, ${Nd}-aligned, outside ${dd.byteLength} bytes of memory`)
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      return 0 === kd ? null : (Cd(Jd, kd, pd * dd.BYTES_PER_ELEMENT, dd.BYTES_PER_ELEMENT, Nd), new dd(Jd, kd, pd))
    }

    function od(dd, Jd, kd, pd, Nd) {
      return 0 === Jd ? null : (Cd(dd, Jd, kd, pd, Nd), new DataView(dd, Jd, kd))
    }
  },
  40575: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => od,
      B: () => Ld,
      e: () => pd,
      i: () => Rd,
      k: () => Od,
      o: () => ed,
      s: () => ld,
      v: () => Qd,
      w: () => Kd
    });
    class pd extends Error {
      constructor(dd) {
        super(`the join's code did not load: ${dd instanceof Error?dd.message:String(dd)}`, {
          cause: dd
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === dd || void 0 === dd ? void 0 : dd.request
      }
    }
    let Nd = null,
      Wd = null,
      Pd = null;
    const Zd = [];
    let gd = null;

    function Cd(dd, Jd) {
      try {
        dd(Jd)
      } catch (kd) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", kd)
      }
    }

    function Kd() {
      return gd
    }

    function od(dd) {
      Zd.push(dd), null !== gd && Cd(dd, gd)
    }

    function ld(dd) {
      return Nd ??= Promise.all([kd.e(70), kd.e(95), kd.e(216), kd.e(75), kd.e(217), kd.e(190), kd.e(94), kd.e(235), kd.e(261), kd.e(188), kd.e(263), kd.e(200), kd.e(187), kd.e(201), kd.e(137), kd.e(86), kd.e(115), kd.e(239), kd.e(54)]).then((() => kd(42489))).then((Jd => {
        Jd.loadAudio(dd), gd = Jd;
        for (const dd of Zd) Cd(dd, Jd);
        return Jd
      })).catch((dd => {
        throw Nd = null, dd
      })), Nd
    }
    async function Qd(dd, Jd) {
      try {
        const kd = await ld(dd);
        await kd.loadClientGame(Jd)
      } catch (kd) {
        throw new pd(kd)
      }
    }

    function Ld(dd, Jd) {
      Wd = {
        running: dd,
        shell: Jd
      }
    }

    function Od() {
      return Pd
    }
    async function ed(dd) {
      const Jd = Wd;
      if ((null === Jd || void 0 === Jd ? void 0 : Jd.running) !== dd) throw new Error("the core's session has ended");
      const kd = await ld(Jd.shell.audio).catch((dd => {
        throw new pd(dd)
      }));
      if (null !== Pd) return Pd;
      if (Wd !== Jd || dd.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Pd = kd.startGameHost(dd, Jd.shell), null === Pd) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Pd
    }

    function Rd() {
      null !== Pd && (null !== gd ? gd.endGameHost(Pd) : Pd.closeGame()), Pd = null, Wd = null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);