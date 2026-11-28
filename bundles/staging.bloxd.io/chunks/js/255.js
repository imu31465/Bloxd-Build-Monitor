export const id = 255;
export const ids = [255];
export const modules = {
  41340: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      f: () => Fd
    });
    const Wd = "The world isn't loaded, so no blocks can be seen.",
      Fd = "The world isn't loaded, so nothing in it can be seen."
  },
  40676: (dd, Od, md) => {
    function Wd(dd) {
      return !(!dd.lobbyLeaderboardInfo && !dd.lobbyManage)
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  38359: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      f: () => Wd
    });
    const Wd = 3,
      Fd = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  38367: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      e: () => Fd
    });
    let Wd = () => null;

    function Fd(dd) {
      Wd = dd
    }

    function Rd(dd, Od) {
      return Wd(dd, Od)
    }
  },
  42560: (dd, Od, md) => {
    md.d(Od, {
      b: () => Hd,
      e: () => pd,
      h: () => Td,
      l: () => yd
    });
    var Wd = md(32),
      Fd = md(42567),
      Rd = md(42552),
      Xd = md(42573),
      Kd = md(42555),
      hd = md(42578),
      vd = md(42602);

    function Qd(dd) {
      var Od, md;
      const Wd = (0, Rd.l)();
      return Wd ? null === (Od = (0, Fd.c)(Wd.api, dd[0], dd[1], dd[2])) || void 0 === Od || null === (md = Od.persisted) || void 0 === md ? void 0 : md.shared : void 0
    }

    function td(dd) {
      return `${dd[0]},${dd[1]},${dd[2]}`
    }
    const od = new Map;
    let Nd = null,
      qd = 0;

    function Hd() {
      return qd
    }

    function yd(dd) {
      const Od = null !== Nd && Nd.key === td(dd.pos) ? Nd.type : null;
      if (null === Od) return dd;
      let md = null;
      if ("Iron" === Od) {
        const {
          cachedPasskey: Od,
          ...Wd
        } = bd(dd.pos);
        md = {
          ZK: null !== Od && void 0 !== Od ? Od : [0, 0, 0, 0],
          ...Wd
        }
      }
      return {
        ...dd,
        type: Od,
        ironChest: md
      }
    }

    function bd(dd) {
      const Od = Qd(dd),
        md = null === Od || void 0 === Od ? void 0 : Od.ownerDbId,
        Wd = function(dd) {
          var Od;
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qd(dd);
          const Wd = td(dd),
            Fd = od.get(Wd);
          return Fd ? Fd.lastOpened < (null !== (Od = null === md || void 0 === md ? void 0 : md.passkeyLastUpdated) && void 0 !== Od ? Od : 0) ? (od.delete(Wd), null) : [...Fd.ZK] : null
        }(dd, Od);
      return void 0 === md ? {
        cachedPasskey: Wd
      } : {
        ownerDbId: md,
        cachedPasskey: Wd
      }
    }(0, vd.k)(Xd.b, (dd => {
      const Od = (0, hd.h)(Xd.b, dd);
      if (!(0, hd.d)(Od) || Od.DF) return;
      if (qd++, !Od.LF || null === Od.cF) return void(Nd = null);
      const md = td(Od.cF);
      Nd = {
        key: md,
        type: Od.zF
      }, null !== Od.jF && od.set(md, {
        ZK: [...Od.jF],
        lastOpened: Date.now()
      })
    })), (0, vd.g)((() => {
      od.clear(), Nd = null, qd++
    })), (0, vd.i)((() => {
      null !== Nd && (Nd = null, qd++, Wd.j.lQ("chestToggleFromServer", !1, !0))
    }));
    const Td = {
        boardEditRequested: {
          watch: dd => (0, Wd.l)("EditBoard", (Od => {
            let {
              pos: md
            } = Od;
            if (null === md) return void dd(null);
            const Wd = (0, Rd.l)(),
              Fd = (0, Rd.u)();
            Wd && Fd && dd(Fd.readBoardToEdit(Wd.api, Wd.chunks, md))
          }))
        },
        ironChestOpenRequested: {
          watch: dd => (0, Wd.l)("OpenIronChest", (Od => {
            let {
              pos: md
            } = Od;
            dd(function(dd) {
              return {
                pos: dd,
                ...bd(dd)
              }
            }(md))
          }))
        }
      },
      pd = {
        writeOnBoard(dd) {
          var Od;
          let {
            pos: md,
            text: Wd,
            Oh: Fd,
            textSize: Xd
          } = dd;
          null === (Od = (0, Rd.l)()) || void 0 === Od || Od.send(Kd.c.UpdateBoard, (0, Kd.Y)({
            MK: md,
            dh: Wd,
            Oh: Fd,
            mh: Xd
          }))
        },
        writeBook(dd) {
          var Od;
          let {
            pages: md,
            title: Wd,
            published: Fd
          } = dd;
          null === (Od = (0, Rd.l)()) || void 0 === Od || Od.send(Kd.c.UpdateBook, (0, Kd.$)({
            oQ: md,
            NQ: Wd,
            qQ: Fd
          }))
        },
        writeNameTag(dd) {
          var Od;
          null === (Od = (0, Rd.l)()) || void 0 === Od || Od.send(Kd.c.UpdateNameTag, dd)
        },
        setCustomLobbyBlock(dd) {
          let {
            pos: Od,
            blockName: md
          } = dd;
          const Wd = (0, Rd.u)(),
            Fd = (0, Rd.l)();
          Wd && Fd && Fd.send(Kd.c.SetCustomLobbyBlock, (0, Kd.M)({
            XK: Wd.blockIdOf(md),
            RK: Od
          }))
        }
      }
  },
  42614: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      h: () => Xd,
      l: () => Kd
    });
    var Wd = md(42540),
      Fd = md(5558),
      Rd = md(42552);

    function Xd() {
      var dd;
      const Od = null === (dd = (0, Rd.l)()) || void 0 === dd ? void 0 : dd.api.localId;
      return void 0 === Od || Od === Wd.$c ? null : String(Od)
    }

    function Kd(dd) {
      const Od = (0, Rd.l)();
      if (null !== Od) return dd(Od);
      let md = null;
      const Wd = (0, Fd.x)((() => {
        const Od = (0, Rd.l)();
        null !== Od && null === md && (Wd(), md = dd(Od))
      }));
      return () => {
        var dd;
        Wd(), null === (dd = md) || void 0 === dd || dd()
      }
    }

    function hd(dd, Od, md) {
      return {
        current: () => {
          const md = (0, Rd.l)();
          return null === md ? Od : dd(md)()
        },
        watch: Od => Kd((Wd => {
          const Fd = dd(Wd);
          let Rd = Fd();
          return Od(Rd), md((() => {
            const dd = Fd();
            dd !== Rd && (Rd = dd, Od(dd))
          }))
        }))
      }
    }
  },
  42612: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd
    });
    var Wd = md(42552),
      Fd = md(42614),
      Rd = md(42623);

    function Xd() {
      var dd, Od;
      return null !== (dd = null === (Od = (0, Wd.l)()) || void 0 === Od ? void 0 : Od.itemBridgeSources) && void 0 !== dd ? dd : Rd.b
    }

    function Kd(dd) {
      return {
        current: () => Xd().states[dd].current(),
        watch: Od => (0, Fd.l)((md => {
          const Wd = md.itemBridgeSources.states[dd];
          return Od(Wd.current()), Wd.watch(Od)
        }))
      }
    }

    function hd(dd) {
      return {
        watch: Od => (0, Fd.l)((md => md.itemBridgeSources.events[dd].watch(Od)))
      }
    }
    const vd = {
      states: {
        inventory: Kd("inventory"),
        hotbar: Kd("hotbar"),
        crafting: Kd("crafting"),
        heldItemAim: Kd("heldItemAim")
      },
      events: {
        hotbarSlotRequested: hd("hotbarSlotRequested"),
        hotbarScrolled: hd("hotbarScrolled"),
        numberKeyPressed: hd("numberKeyPressed"),
        inventoryDropRequested: hd("inventoryDropRequested"),
        chestToggled: hd("chestToggled"),
        chestRefreshed: hd("chestRefreshed"),
        inventorySynced: hd("inventorySynced"),
        enchantingTableOpened: hd("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: dd => Xd().commands.selectHotbarSlot(dd),
        removeInventoryItem: dd => Xd().commands.removeInventoryItem(dd),
        swapInventorySlots: dd => Xd().commands.swapInventorySlots(dd),
        moveInventoryItem: dd => Xd().commands.moveInventoryItem(dd),
        quickMoveInventoryItem: dd => Xd().commands.quickMoveInventoryItem(dd),
        closeChest: dd => Xd().commands.closeChest(dd),
        focusCrafting: dd => Xd().commands.focusCrafting(dd),
        craftRecipe: dd => Xd().commands.craftRecipe(dd),
        salvageItem: dd => Xd().commands.salvageItem(dd),
        enchantItem: dd => Xd().commands.enchantItem(dd)
      },
      queries: {
        enchantingOffer: dd => Xd().queries.enchantingOffer(dd)
      }
    }
  },
  42623: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(41340),
      Fd = md(38359);

    function Rd(dd) {
      return {
        current: () => dd,
        watch: () => () => {}
      }
    }

    function Xd() {}
    const Kd = Object.freeze([0, 0, 0]),
      hd = {
        states: {
          health: Rd({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Rd({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Rd({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Rd({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Rd({}),
          creativeVisibility: Rd({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Rd(null),
          heldItemAim: Rd({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Rd(!1),
          gliderBoostFuel: Rd(0),
          flight: Rd({
            canFly: !1,
            flying: !1
          }),
          crafting: Rd({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Rd({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Rd({}),
          fullInventory: Rd(!1),
          crosshairTarget: Rd({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Rd(!0),
          freeCamera: Rd({
            allowed: !1,
            movesFly: !1
          }),
          replay: Rd(null),
          replayEdits: Rd(null),
          replayRecorder: Rd(Fd.c),
          replayVideoExporting: Rd(!1)
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
          selectHotbarSlot: Xd,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Xd,
          setInventoryOpen: Xd,
          changeIronChestPasskey: Xd,
          dragReplayCamera: Xd,
          applyTemporaryThirdPerson: Xd,
          holdEmoteWheel: Xd,
          recordFlyingMiddleText: Xd,
          focusCrafting: Xd,
          craftRecipe: () => ({
            qK: 0,
            IQ: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Xd,
          setShopOpen: Xd,
          buyShopItem: Xd,
          lobbyManage: Xd,
          sendChatMessage: () => !1,
          ignorePlayer: Xd,
          reportPlayer: Xd,
          reportWorldCodeChat: Xd,
          requestDiscordReportKey: Xd,
          reportLobbyOrGame: Xd,
          playEmote: Xd,
          updateMyCosmetic: Xd,
          writeOnBoard: Xd,
          writeBook: Xd,
          writeNameTag: Xd,
          setCustomLobbyBlock: Xd,
          openIronChest: Xd,
          sendCodeCollab: Xd,
          clickCodeBlock: Xd,
          bindCustomButtonKeys: Xd,
          pressCustomButton: Xd,
          moveReplayFreecam: Xd,
          holdReplayFreecamVertical: Xd,
          respawn: Xd,
          wakeUp: Xd,
          requestLeaderboard: Xd,
          completeTask: Xd,
          setServerCookie: Xd,
          answerUiRequest: Xd,
          chooseRewardedAd: Xd,
          setCameraZoom: Xd,
          setFreeCameraMovesFly: Xd,
          setBlockHighlight: Xd,
          setCrosshairInteractPrompt: Xd,
          setLookSensitivity: Xd,
          replayAction: Xd,
          setReplayPlaying: Xd,
          seekReplay: Xd,
          setReplayCameraMode: Xd,
          syncReplayCameraMode: Xd,
          setReplayCameraKeyframe: Xd,
          moveReplayCameraKeyframe: Xd,
          deleteReplayCameraKeyframes: Xd,
          setReplayPlaybackMark: Xd,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Xd,
          exportReplayVideo: Xd,
          toggleRecording: Xd,
          saveClip: Xd,
          setRecorderPrefs: Xd,
          setReplayViewerOpen: Xd
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Wd.e,
          worldCodeAiGameState: () => Wd.f
        },
        lookups: {
          localPos: () => Kd,
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
  42544: (dd, Od, md) => {
    md.d(Od, {
      e: () => Ud,
      f: () => Jd,
      h: () => xd,
      i: () => Ed,
      l: () => gd
    });
    var Wd = md(40849),
      Fd = md(1286),
      Rd = md(2116),
      Xd = md(2121),
      Kd = md(4509),
      hd = md(38367),
      vd = md(1415),
      Qd = md(42552),
      td = md(5590),
      od = md(3372),
      Nd = md(42555),
      qd = md(42560),
      Hd = md(42612);
    let yd = null;

    function bd(dd) {
      const Od = new Map,
        md = md => {
          if ("string" !== typeof md) return;
          let Wd = Od.get(md);
          return void 0 === Wd && (Wd = dd(md), void 0 !== Wd && Od.set(md, Wd)), Wd
        };
      return new Proxy({}, {
        get: (dd, Od) => md(Od),
        has: (dd, Od) => void 0 !== md(Od)
      })
    }

    function Td(dd) {
      const Od = (0, Kd.d)(dd);
      return void 0 !== Od && (0, Kd.h)(Od) === dd
    }

    function pd(dd) {
      var Od;
      const md = null === (Od = (0, Qd.l)()) || void 0 === Od ? void 0 : Od.tables;
      if (void 0 === md || !Td(dd)) return;
      const Wd = {
          displayName: md.getDisplayName(dd)
        },
        Fd = md.getItemStat(dd, "description");
      void 0 !== Fd && null !== Fd && (Wd.description = Fd);
      const {
        rootName: Rd
      } = md.getMetaInfo(dd);
      Rd !== dd && (Wd.rootName = Rd);
      const Xd = md.getItemStat(dd, "armourReduction");
      return void 0 !== Xd && null !== Xd && (Wd.armourReduction = Xd), Wd
    }(0, Qd.w)((dd => {
      yd = dd
    }));
    const Yd = (0, Xd.f)("DisplayName", "Description");

    function gd() {
      return Boolean(Rd.e.get("useInventory") && Rd.e.get("useFullInventory"))
    }
    let wd = null;
    const Ed = {
        inventory: function() {
          const dd = Hd.e.states.inventory;
          let Od = null;
          const md = dd => {
            var md;
            return null === dd.chest ? dd : ((null === (md = Od) || void 0 === md ? void 0 : md.from) === dd && Od.chestVersion === (0, qd.b)() || (Od = {
              from: dd,
              chestVersion: (0, qd.b)(),
              view: {
                ...dd,
                chest: (0, qd.l)(dd.chest)
              }
            }), Od.view)
          };
          return {
            current: () => md(dd.current()),
            watch: Od => dd.watch((dd => {
              Od(md(dd))
            }))
          }
        }(),
        crafting: Hd.e.states.crafting,
        stationItems: {
          current() {
            var dd;
            return (null === (dd = wd) || void 0 === dd ? void 0 : dd.namesVersion) !== (0, Kd.i)() && (wd = {
              namesVersion: (0, Kd.i)(),
              items: {
                enchantable: bd((dd => {
                  const Od = (0, Kd.d)(dd);
                  return void 0 !== Od && null !== yd && yd.enchantmentPerksOf(Od).length > 0 || void 0
                })),
                salvageable: bd((dd => !(!Td(dd) || null === (0, hd.b)(dd)) || void 0))
              }
            }), wd.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let dd = null;
          const Od = () => {
            var Od;
            return (null === (Od = dd) || void 0 === Od ? void 0 : Od.namesVersion) !== (0, Kd.i)() && (dd = {
              namesVersion: (0, Kd.i)(),
              infos: bd(pd)
            }), dd.infos
          };
          return {
            current: Od,
            watch: md => (0, Xd.o)((Wd => {
              Wd.some(Yd) && (dd = null, md(Od()))
            }))
          }
        }(),
        creativeVisibility: (0, Xd.k)((function() {
          const dd = {};
          for (const Fd of null !== (Od = null === (md = yd) || void 0 === md ? void 0 : md.creativeItemIds()) && void 0 !== Od ? Od : []) {
            var Od, md, Xd, hd;
            const vd = (0, Kd.h)(Fd);
            if (void 0 === vd) continue;
            const Qd = null !== (Xd = Rd.e.get((0, Wd.d)(vd, "showInCreativeInven"))) && void 0 !== Xd ? Xd : null === (hd = yd) || void 0 === hd ? void 0 : hd.showInCreativeInvenOf(Fd);
            "boolean" === typeof Qd && (dd[vd] = Qd)
          }
          return {
            publicLobby: (0, Fd.K)((0, vd.b)().lobbyName),
            shownInGame: dd
          }
        }), ["connectedGameChanged"], (0, Xd.f)("ShowInCreativeInven")),
        fullInventory: (0, Xd.k)(gd, [], (0, Xd.h)("useInventory", "useFullInventory"))
      },
      Jd = {
        inventoryDropRequested: Hd.e.events.inventoryDropRequested,
        chestToggled: Hd.e.events.chestToggled,
        chestRefreshed: Hd.e.events.chestRefreshed,
        inventorySynced: Hd.e.events.inventorySynced,
        enchantingTableOpened: Hd.e.events.enchantingTableOpened
      },
      Ud = {
        removeInventoryItem: Hd.e.commands.removeInventoryItem,
        swapInventorySlots: Hd.e.commands.swapInventorySlots,
        moveInventoryItem: Hd.e.commands.moveInventoryItem,
        quickMoveInventoryItem: Hd.e.commands.quickMoveInventoryItem,
        closeChest: Hd.e.commands.closeChest,
        setInventoryOpen(dd) {
          (0, td.i)(od.w.InventoryOpen, dd ? od.w.InventoryOpen : 0)
        },
        focusCrafting: Hd.e.commands.focusCrafting,
        craftRecipe: Hd.e.commands.craftRecipe,
        salvageItem: Hd.e.commands.salvageItem,
        enchantItem: Hd.e.commands.enchantItem,
        changeIronChestPasskey(dd) {
          var Od;
          let {
            pos: md,
            ZK: Wd
          } = dd;
          null === (Od = (0, Qd.l)()) || void 0 === Od || Od.send(Nd.c.ChangeIronChestPasskey, (0, Nd.j)({
            cF: md,
            ZK: Wd
          }))
        },
        openIronChest(dd) {
          var Od;
          let {
            pos: md,
            ZK: Wd
          } = dd;
          null === (Od = (0, Qd.l)()) || void 0 === Od || Od.send(Nd.c.OpenIronChest, (0, Nd.E)({
            cF: md,
            ZK: Wd
          }))
        }
      },
      xd = {
        enchantingOffer: Hd.e.queries.enchantingOffer
      }
  },
  42609: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      f: () => Qd,
      j: () => Xd,
      n: () => Fd,
      p: () => Kd,
      t: () => vd
    });
    class Wd extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Fd(dd) {
      return dd instanceof RangeError && /call stack/i.test(dd.message) || dd instanceof Error && "InternalError" === dd.name && /recursion/i.test(dd.message)
    }
    const Rd = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Xd(dd) {
      var Od;
      return dd instanceof WebAssembly.RuntimeError || dd instanceof Wd || Fd(dd) && Rd.test(null !== (Od = dd.stack) && void 0 !== Od ? Od : "")
    }

    function Kd(dd, Od) {
      if (Xd(dd)) throw dd;
      console.error(Od, dd)
    }

    function hd(dd, Od, md, Fd, Rd) {
      if (Od % Fd !== 0 || Od + md > dd.byteLength) throw new Wd(`${Rd}: ${md} bytes at ${Od}, ${Fd}-aligned, outside ${dd.byteLength} bytes of memory`)
    }

    function vd(dd, Od, md, Wd, Fd) {
      return 0 === md ? null : (hd(Od, md, Wd * dd.BYTES_PER_ELEMENT, dd.BYTES_PER_ELEMENT, Fd), new dd(Od, md, Wd))
    }

    function Qd(dd, Od, md, Wd, Fd) {
      return 0 === Od ? null : (hd(dd, Od, md, Wd, Fd), new DataView(dd, Od, md))
    }
  },
  42552: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      h: () => bd,
      l: () => Hd,
      p: () => yd,
      q: () => od,
      t: () => Nd,
      u: () => Qd,
      w: () => td,
      x: () => qd
    });
    class Wd extends Error {
      constructor(dd) {
        super(`the join's code did not load: ${dd instanceof Error?dd.message:String(dd)}`, {
          cause: dd
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === dd || void 0 === dd ? void 0 : dd.request
      }
    }
    let Fd = null,
      Rd = null,
      Xd = null;
    const Kd = [];
    let hd = null;

    function vd(dd, Od) {
      try {
        dd(Od)
      } catch (md) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", md)
      }
    }

    function Qd() {
      return hd
    }

    function td(dd) {
      Kd.push(dd), null !== hd && vd(dd, hd)
    }

    function od(dd) {
      return Fd ??= Promise.all([md.e(85), md.e(113), md.e(88), md.e(177), md.e(91), md.e(225), md.e(253), md.e(112), md.e(142), md.e(246), md.e(245), md.e(307), md.e(244), md.e(223), md.e(50), md.e(224), md.e(127), md.e(214), md.e(281), md.e(143), md.e(103), md.e(69)]).then((() => md(55013))).then((Od => {
        Od.loadAudio(dd), hd = Od;
        for (const dd of Kd) vd(dd, Od);
        return Od
      })).catch((dd => {
        throw Fd = null, dd
      })), Fd
    }
    async function Nd(dd, Od) {
      try {
        const md = await od(dd);
        await md.loadClientGame(Od)
      } catch (md) {
        throw new Wd(md)
      }
    }

    function qd(dd, Od) {
      Rd = {
        running: dd,
        shell: Od
      }
    }

    function Hd() {
      return Xd
    }
    async function yd(dd) {
      const Od = Rd;
      if ((null === Od || void 0 === Od ? void 0 : Od.running) !== dd) throw new Error("the core's session has ended");
      const md = await od(Od.shell.audio).catch((dd => {
        throw new Wd(dd)
      }));
      if (null !== Xd) return Xd;
      if (Rd !== Od || dd.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Xd = md.startGameHost(dd, Od.shell), null === Xd) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Xd
    }

    function bd() {
      null !== Xd && (null !== hd ? hd.endGameHost(Xd) : Xd.closeGame()), Xd = null, Rd = null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);