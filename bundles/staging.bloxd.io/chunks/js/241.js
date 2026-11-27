export const id = 241;
export const ids = [59, 241];
export const modules = {
  39440: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Me
    });
    const ye = new WeakMap;

    function be(ee, ie) {
      return ye.set(ee, ie), ee
    }

    function Me(ee) {
      var ie;
      return null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : null
    }
  },
  39327: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    class ye {
      constructor(ee, ie, He) {
        this.yR = ee, this.beforeOpen = ie, this.afterClose = He, this.open = !1, this.xf = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.xf && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(ee) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(ee)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.xf = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.xf || (this.snapshot = this.buildSnapshot(), this.yR(this.snapshot))
      }
    }
  },
  39446: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      SkyblockEntityFacing: () => Ue,
      needsSkyblockEntityFacing: () => Ke
    });
    var ye = He(608),
      be = He(4598),
      Me = He(39452);

    function Ke(ee, ie) {
      if (ee.metaInfo === ye.c || "Iron Guardian" === ee.type || "Gold Guardian" === ee.type) return !0;
      if ("Pig" === ee.type) return "sitting" === ee.pose;
      if ("Person" !== ee.meshKind || void 0 === ee.meshOpts) return !1;
      let He = null === ie || void 0 === ie ? void 0 : ie.get(ee.meshOpts);
      if (void 0 === He) {
        var Me, Ke;
        const ye = (0, be.i)(ee);
        He = !1, "pig_napoleon" === (null === ye || void 0 === ye || null === (Me = ye.opts.textures) || void 0 === Me ? void 0 : Me.head) ? He = !0 : "npc_pig_head" === (null === ye || void 0 === ye || null === (Ke = ye.opts.textures) || void 0 === Ke ? void 0 : Ke.head) && (He = "sitting" === ye.opts.pose || "sitting"), ie && (ie.size >= 256 && ie.clear(), ie.set(ee.meshOpts, He))
      }
      return "sitting" === He ? "sitting" === ee.pose : He
    }(0, Me.d)("skyblock", ((ee, ie) => {
      ie.setFacingTolerance(Ke(ee) ? 0 : null)
    }));
    class Ue {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = ee, this.alsoVisit = ie, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = ee => {
          var ie;
          const He = this.api.getEntityInfo(ee);
          He && (Ke(He, this.meshFacingCache) && (this.api.setFacingTolerance(ee, 0), this.nextFacing.add(ee)), null === (ie = this.alsoVisit) || void 0 === ie || ie.call(this, ee, He))
        }
      }
      YR() {
        const {
          api: ee
        } = this, ie = this.nextFacing;
        ee.forEachEntity(this.visit);
        for (const He of this.facing) ie.has(He) || ee.setFacingTolerance(He, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ie
      }
      dispose() {
        for (const ee of this.facing) this.api.setFacingTolerance(ee, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  39318: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => cU
    });
    const ye = "island";
    var be = He(39320);

    function Me(ee, ie, He) {
      const Me = "local" === ie,
        Ue = ee.background,
        Fe = ie => Ue ? (0, be.b)(ie[0] - ee.mapOrigin[0], ie[2] - ee.mapOrigin[2], Ue.bounds) : [50, 50],
        Je = (ee.insideDungeon ? [] : ee.landmarks).map((ee => {
          var ie, ye;
          return {
            id: ee.id,
            name: He(ee.visited && ee.nameKey ? null !== (ie = ee.mapLabelKey) && void 0 !== ie ? ie : ee.nameKey : "skyblockGame:mapUnknown"),
            icon: ee.visited && null !== (ye = ee.icon) && void 0 !== ye ? ye : "unknown",
            visited: ee.visited,
            current: !1,
            position: Fe(ee.position),
            travelKind: "landmark",
            travelId: ee.id
          }
        })),
        oe = ee.zones.map((ie => {
          var ye;
          return {
            id: ie.id,
            name: He(ie.visited && ie.nameKey ? ie.nameKey : "skyblockGame:mapUnknown"),
            icon: ie.visited && null !== (ye = ie.icon) && void 0 !== ye ? ye : "unknown",
            visited: ie.visited,
            current: ie.id === ee.zoneId,
            position: ie.position,
            thumbnail: ie.visited ? ie.id : void 0,
            travelKind: "zone",
            travelId: ie.id
          }
        })),
        Re = ee.insideDungeon || !Ue ? [] : ee.portals.map((ee => {
          var ie;
          return {
            id: ee.id,
            name: He(null !== (ie = ee.nameKey) && void 0 !== ie ? ie : "skyblockGame:mapUnknown"),
            icon: ee.visited ? "dungeons" === ee.destination ? "portal_orange" : "portal" : "unknown",
            visited: ee.visited,
            current: !1,
            position: Fe(ee.position),
            colour: ee.colour,
            travelKind: "zone",
            travelId: ee.destination
          }
        })),
        ke = Me ? Je : oe,
        qe = ke.filter((ee => ee.visited)).length,
        fe = Ue ? (Ue.bounds.mapMaxX - Ue.bounds.mapMinX) / (Ue.bounds.mapMaxZ - Ue.bounds.mapMinZ) : 2,
        Te = Ue ? JSON.stringify([Ue.bounds, ee.mapOrigin]) : "";
      return {
        local: Me,
        points: ke,
        portals: Me ? Re : [],
        progress: ke.length ? He("skyblockGame:mapDiscovered", {
          current: String(qe),
          total: String(ke.length)
        }) : null,
        percent: ke.length ? 100 * qe / ke.length : 0,
        canTravel: [...ke, ...Me ? Re : []].some((ee => ee.visited && !ee.current)),
        noLandmarks: Me && !ee.insideDungeon && 0 === Je.length,
        background: Ue ? {
          imageKey: Ue.imageKey,
          fallbackImageKey: ee.zoneId,
          geometryKey: Te,
          label: He(Ue.labelKey),
          colour: Ue.backgroundColour,
          ratio: fe
        } : null,
        connections: Ke(ee.zones),
        minimap: Ue ? {
          imageKey: Ue.imageKey,
          fallbackImageKey: ee.zoneId,
          geometryKey: Te,
          label: He(Ue.labelKey),
          colour: Ue.backgroundColour,
          caption: He(ee.zoneId === ye ? "skyblockGame:zoneIsland" : Ue.labelKey),
          width: (Ue.bounds.mapMaxX - Ue.bounds.mapMinX) / Ue.minimapSpan * 100 + "%",
          height: (Ue.bounds.mapMaxZ - Ue.bounds.mapMinZ) / Ue.minimapSpan * 100 + "%",
          markers: [...Je, ...Re]
        } : null
      }
    }

    function Ke(ee) {
      const ie = new Set;
      return ee.flatMap((He => He.connections.flatMap((ye => {
        const be = ee.find((ee => ee.id === ye)),
          Me = [He.id, ye].sort().join("|");
        return !be || ie.has(Me) ? [] : (ie.add(Me), [{
          id: `${He.id}-${ye}`,
          start: He.position,
          end: be.position,
          explored: He.visited && be.visited
        }])
      }))))
    }
    var Ue = He(39327);
    class Fe extends Ue.b {}
    const Je = "skyblockMapView";
    class oe extends Fe {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(ee, ye, be), this.requestTravel = ie, this.translate = He, this.now = Me, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = ee => {
          this.tab = ee, this.feedbackKey = "", this.emit()
        }, this.travel = (ee, ie) => {
          if (!this.map || this.pending || this.xf) return;
          const He = ("zone" === ee ? this.map.zones : this.map.landmarks).find((ee => ee.id === ie));
          if (He) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in He && !He.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (He.visited)
              if ("zone" === ee && ie === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const He = ++this.nextRequestId;
                this.pending = {
                  requestId: He,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: ee,
                  id: ie,
                  requestId: He
                })
              }
            else this.feedbackKey = "skyblockGame:mapVisitFirst";
            this.emit()
          }
        }
      }
      getEntities() {
        return this.entities
      }
      setTranslator(ee) {
        this.translate = ee, this.emit()
      }
      DR(ee) {
        var ie;
        if (!this.xf)
          if ("entities" !== ee.kind)
            if ("open" !== ee.kind) {
              var He, ye;
              if ("snapshot" === ee.kind)(null === (He = ee.snapshot) || void 0 === He ? void 0 : He.zoneId) !== (null === (ye = this.map) || void 0 === ye ? void 0 : ye.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = ee.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === ee.kind) {
                var be;
                ee.requestId === (null === (be = this.pending) || void 0 === be ? void 0 : be.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (ee.requestId === (null === (ie = this.pending) || void 0 === ie ? void 0 : ie.requestId)) {
                var Me;
                this.pending = null, this.feedbackKey = null !== (Me = ee.errorKey) && void 0 !== Me ? Me : "", null === ee.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = ee.entities
      }
      YR() {
        this.pending && this.now() >= this.pending.expiresAt && (this.pending = null, this.feedbackKey = "skyblockGame:mapTravelTimeout", this.emit())
      }
      dispose() {
        this.map = null, this.pending = null, super.dispose()
      }
      isEnabled() {
        return null !== this.map
      }
      buildSnapshot() {
        return {
          presentation: this.map ? Me(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    var Re = He(347);
    const ke = 67.5 * Math.PI / 180;

    function qe(ee, ie) {
      const He = Math.abs(ee);
      if (He > ke || ie.trackHalfWidth <= 0) return null;
      const ye = ie.trackHalfWidth,
        be = ie.screenHalfWidth / (ie.tanHalfFovX * Math.max(.5, Math.cos(ie.pitch))),
        Me = Math.min(Math.atan(.6 * ye / be), .75 * ke),
        Ke = be * Math.tan(Me);
      let Ue;
      if (He <= Me) Ue = be * Math.tan(He);
      else {
        const ee = ke - Me,
          ie = Math.max(0, be * ee / (Math.cos(Me) ** 2 * (ye - Ke)) - 1),
          Fe = (He - Me) / ee;
        Ue = Ke + (ye - Ke) * (1 + ie) * Fe / (1 + ie * Fe)
      }
      return 50 + Math.sign(ee) * Ue * 50 / ye
    }
    class fe {
      constructor(ee, ie) {
        this.map = ee, this.visited = ie, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = ie ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const ee = this.map.getSnapshot().map;
        return !ee || ee.insideDungeon ? [] : ee.landmarks.filter((ee => ee.visited === this.visited)).map((ee => {
          var ie, He;
          return {
            id: `landmark:${ee.id}`,
            position: ee.position,
            icon: null !== (ie = ee.icon) && void 0 !== ie ? ie : "unknown",
            nameKey: null !== (He = ee.nameKey) && void 0 !== He ? He : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Te {
      constructor(ee, ie, He, ye) {
        this.map = ee, this.kind = ie, this.position = He, this.alive = ye, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ie, this.range = "enemy" === ie ? 48 : 64, this.limit = 12
      }
      pE(ee) {
        if ("enemy" !== this.kind || this.alive(ee.XH)) return this.position(ee.XH)
      }
      getPoints() {
        const ee = [];
        for (const ye of this.map.getEntities()) {
          if (ye.kind !== this.kind || "enemy" === this.kind && !this.alive(ye.compassEntityId)) continue;
          const be = this.position(ye.compassEntityId);
          var ie, He;
          if (be) ee.push({
            id: `${this.kind}:${ye.compassEntityId}`,
            XH: ye.compassEntityId,
            kind: this.kind,
            icon: null !== (ie = ye.icon) && void 0 !== ie ? ie : ye.npcSkin ? `npc_${ye.npcSkin}` : this.kind,
            displayName: ye.displayName,
            position: be,
            nameKey: null !== (He = ye.nameKey) && void 0 !== He ? He : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return ee
      }
    }
    class pe {
      constructor(ee) {
        this.map = ee, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const ee = this.map.getSnapshot().map;
        return !ee || ee.insideDungeon ? [] : ee.portals.map((ee => {
          var ie;
          return {
            id: "portal:" + ee.id,
            kind: "portal",
            position: ee.position,
            nameKey: null !== (ie = ee.nameKey) && void 0 !== ie ? ie : "skyblockGame:compassUnvisitedZone",
            icon: ee.visited ? "dungeons" === ee.destination ? "portal_orange" : "portal" : "unknown",
            colour: ee.colour
          }
        }))
      }
    }
    class Xe {
      constructor(ee) {
        this.target = ee, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const ee = this.target();
        return ee ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: ee.position,
          nameKey: ee.nameKey
        }] : []
      }
    }

    function ze(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.position;
      const be = ye[0] - ie[0],
        Me = ye[2] - ie[2];
      return {
        ...ee,
        position: ye,
        offset: Re.c.computeShortestRotation(He, (0, Re.Ib)([be, 0, Me])),
        distance: Math.hypot(be, ye[1] - ie[1], Me)
      }
    }
    let Be;

    function Ee(ee, ie) {
      var He;
      return (null === (He = Be) || void 0 === He ? void 0 : He.locale) !== ie && (Be = {
        locale: ie,
        near: new Intl.NumberFormat(ie, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(ie, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (ee < 10 ? Be.near : Be.far).format(ee)
    }
    class ge {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(ee) {
        return this.providers.set(ee.id, ee), this.refreshAt = 0, () => {
          this.providers.get(ee.id) === ee && (this.providers.delete(ee.id), this.refreshAt = 0)
        }
      }
      frame(ee, ie, He) {
        if (He >= this.refreshAt) {
          this.refreshAt = He + 200, this.candidates = [];
          for (const ie of this.providers.values()) {
            if (!ie.enabled) continue;
            const He = ie.getPoints().map((ie => {
              const He = ie.position;
              return {
                point: ie,
                distance: Math.hypot(He[0] - ee[0], He[1] - ee[1], He[2] - ee[2])
              }
            })).filter((ee => ee.distance <= ie.range)).sort(((ee, ie) => ee.distance - ie.distance)).slice(0, ie.limit);
            for (const {
                point: ee
              }
              of He) this.candidates.push({
              provider: ie,
              point: ee
            })
          }
        }
        const ye = [];
        for (const {
            point: be,
            provider: Me
          }
          of this.candidates) {
          if (!Me.enabled) continue;
          const He = Me.pE ? Me.pE(be) : be.position;
          if (He) {
            const Me = ze(be, ee, ie, He);
            Math.abs(Me.offset) <= ke && ye.push(Me)
          }
        }
        return ye
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Oe = He(37427),
      de = He(59);
    const We = [{
        dailyRewardCoins: 1e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 3e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 4e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 5500,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 7e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 9e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 2
        }]
      }, {
        dailyRewardCoins: 25e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 3
        }, {
          dailyRewardItemName: "Diamond",
          dailyRewardItemAmount: 1
        }]
      }],
      te = We.length;

    function Ze(ee) {
      return ee >= te ? 1 : ee + 1
    }
    const we = "skyblockQuests",
      De = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Pe = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Ae(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const He = Math.max(0, Math.floor(ee)),
        ye = Math.floor(He % 1e3 / 100),
        be = Math.floor(He / 1e3),
        Me = be % 60,
        Ke = Math.floor(be / 60),
        Ue = Ke % 60,
        Fe = Math.floor(Ke / 60),
        Je = ee => ee < 10 ? `0${ee}` : String(ee),
        oe = ie ? `.${ye}` : "";
      return Fe > 0 ? `${Fe}:${Je(Ue)}:${Je(Me)}${oe}` : `${Ue}:${Je(Me)}${oe}`
    }
    const Ye = "devquests",
      Ve = "none",
      ae = {
        hub: {
          farming_1: {
            min: [4, 16, 90],
            max: [4, 18, 91],
            unlockedBlock: "Yellow Portal"
          },
          mining_1: {
            min: [95, 16, 2],
            max: [97, 18, 2],
            unlockedBlock: "Cyan Portal"
          },
          combat_1: {
            min: [207, 36, 49],
            max: [208, 38, 49],
            unlockedBlock: "Red Portal"
          },
          fishing_1: {
            min: [6, 20, 149],
            max: [6, 22, 150],
            unlockedBlock: "Blue Portal"
          }
        },
        combat_1: {
          tower_roof: {
            min: [202, 69, 151],
            max: [203, 71, 151],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          },
          tower_exit: {
            min: [202, 80, 133],
            max: [203, 82, 133],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          }
        }
      },
      ce = "Compressed Messy Stone",
      xe = {
        "Grass Block": "Useless Soil",
        "Pine Grass Block": "Useless Soil",
        "Jungle Grass Block": "Useless Soil",
        "Dry Grass Block": "Useless Soil",
        "Overgrown Grass Block": "Useless Soil",
        "Overgrown Pine Grass Block": "Useless Soil",
        "Overgrown Jungle Grass Block": "Useless Soil",
        "Overgrown Dry Grass Block": "Useless Soil",
        Dirt: "Messy Dirt",
        Sand: "Sandstone",
        Gravel: "Smooth Andesite"
      },
      Le = ["Stone", "Diorite", "Andesite", "Granite"],
      Ce = new Set(Le),
      ve = (Object.keys(xe), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const ue = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function me(ee, ie) {
      const He = Math.floor(5 * ee / (2 * ie + 1));
      return Math.min(4, Math.max(0, He))
    }
    var le = He(1189);
    var Se = He(37150);
    var ne = He(37424),
      je = He(27),
      se = He(9609);
    const Ie = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      he = 1e3;

    function Ne(ee) {
      return Math.max(0, ee)
    }

    function Ge(ee) {
      return 1 + .01 * Ne(ee)
    }

    function re(ee) {
      return 1 + .005 * Ne(ee)
    }

    function Qe(ee) {
      return 1 + .005 * Ne(ee)
    }

    function ei(ee) {
      return .01 * Ne(ee)
    }

    function ii(ee) {
      return 150 / (150 + Ne(ee))
    }

    function Hi(ee) {
      return 1 + .002 * Ne(ee)
    }

    function yi(ee) {
      return Math.round(10 * ee) / 10
    }

    function bi(ee, ie) {
      switch (ee) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: yi(100 * (re(ie) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: yi(100 * (Ge(ie) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: yi(100 * (Qe(ie) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: yi(100 * ei(ie))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: yi(100 * (1 - ii(ie)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: yi(100 * (Hi(ie) - 1))
          }
      }
    }

    function Mi(ee) {
      return "farming" === ee ? 200 : 100
    }

    function Ki(ee, ie) {
      if (!Number.isSafeInteger(ee) || ee < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const He = Mi(ie),
        ye = ee => function(ee, ie) {
          return Mi(ee) * ie * (ie + 1) / 2
        }(ie, ee);
      let be = Math.min(he, Math.floor((Math.sqrt(8 * ee / He + 1) - 1) / 2));
      return be < he && ye(be + 1) <= ee ? be++ : ye(be) > ee && be--, {
        totalXp: ee,
        level: be,
        xpIntoLevel: ee - ye(be),
        xpForNextLevel: be === he ? null : He * (be + 1)
      }
    }
    const Ui = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Fi(ee) {
      return Ui.has(ee)
    }
    const Ji = new Set(Re.yb);

    function oi(ee) {
      return Ji.has(ee)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Ri = {
        "Maple Log": 10,
        "Pine Log": 10,
        "Plum Log": 10,
        "Cedar Log": 10,
        "Aspen Log": 10,
        "Jungle Log": 10,
        "Palm Log": 10,
        "Pear Log": 10,
        "Cherry Log": 10,
        "Spectral Log": 10,
        "Mango Log": 10
      },
      ki = {
        Stone: 2,
        Diorite: 18,
        Granite: 18,
        Andesite: 18,
        "Coal Ore": 10,
        "Iron Ore": 15,
        "Gold Ore": 20,
        "Diamond Ore": 30,
        "Moonstone Ore": 40,
        "Block of Coal": 15,
        "Block of Gold": 30
      },
      qi = {
        ...ki,
        ...Object.fromEntries(Object.entries(ve).map((ee => {
          let [ie, He] = ee;
          return [ie, 9 * ki[He]]
        })))
      },
      fi = {
        Watermelon: 10,
        Melon: 10,
        "Wheat|FreshlyGrown": 10,
        "Rice|FreshlyGrown": 10,
        "Corn Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|Lava|FreshlyGrown": 10,
        "Tomato Plant|FreshlyGrown": 10,
        "Tomato Plant|Top|FreshlyGrown": 10,
        "Carrot Plant|FreshlyGrown": 10,
        "Potato Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|Top|FreshlyGrown": 10,
        "Coffee Plant|FreshlyGrown": 10,
        "Lettuce Plant|FreshlyGrown": 10,
        "Cauliflower Plant|FreshlyGrown": 10,
        "Parsnip Plant|FreshlyGrown": 10,
        "Red Cabbage Plant|FreshlyGrown": 10,
        "Beetroot Plant|FreshlyGrown": 10
      },
      Ti = {
        Wheatfish: 25,
        Darter: 25,
        "Sunset Minnow": 25,
        "Root Flounder": 25,
        "Greenfin Loach": 25,
        "Red Strongfish": 30,
        "Green Strongfish": 30,
        "Boomerang Fish": 30,
        Seahorse: 30,
        "Spined Stickleback": 30,
        "Moon Strongfish": 40,
        "Boulder Bass": 40,
        "Grass Snapper": 40,
        "Crystalized Wheatfish": 55,
        "Moonstone Pupfish": 55,
        "Reedglass Minnow": 35,
        "Mangrove Herring": 35,
        "Mudline Perch": 35,
        "Coastal Mullet": 35,
        "Reef Sardine": 35,
        "Root Perch": 40,
        "Aether Minnow": 40,
        "Driftwood Catfish": 45,
        "Tri-Pointed Needlefish": 70,
        "Threadfin Bream": 40,
        "Mudbelly Tilapia": 40,
        "Rotslab Eel": 40,
        "Polarflash Electron": 45,
        Hatchetfish: 45,
        "Mireback Carp": 50,
        "Blackwater Bream": 50,
        "Stone Grouper": 55,
        "Shadeback Ray": 60,
        "Glacial Silverfish": 60,
        "Moonlit Boomerang Fish": 90,
        "Murkborne Ray": 90,
        "Bamboo Catfish": 50,
        "Mossback Arapaima": 60,
        "Murk Stingray": 65,
        "Channel Sawfish": 70,
        "Boned Sturgeon": 75,
        Oarfish: 90,
        Snakehead: 160,
        "Eldertide Leviathan": 250,
        Pithead: 50,
        "Electric Eel": 60,
        "Shadow Darter": 60,
        "Abyss Carp": 65,
        "Nomai Moray": 75,
        "Silver Dragonfish": 80,
        "Giant Moray": 100,
        Coelacanth: 250,
        "Frost Herring": 60,
        "Permafrost Halibut": 70,
        "Glacial Lanternfish": 80,
        "Frozen Grenadier": 85,
        "Blackfin Icefish": 100,
        Moonfish: 120,
        "Alpha Moon Strongfish": 140,
        "Deepwater Lanternfish": 300,
        "Pearlescent Moonfish": 300,
        "Game Dev Fish": 50
      };
    const Xi = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      zi = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Bi(ee) {
      return `rgb(${zi[ee].join(", ")})`
    }

    function Ei(ee, ie, He) {
      if (!He) return ee(ie);
      const ye = {};
      for (const [be, Me] of Object.entries(He)) ye[be] = "string" === typeof Me ? Me : ee(Me.translationKey);
      return ee(ie, ye)
    }
    class gi {
      constructor(ee, ie) {
        this.now = ee, this.getJournal = ie, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.lJ = !1, this.onShown = () => {}
      }
      enqueue(ee) {
        const ie = Oi(ee);
        if (ie) this.pending.push(ee);
        else {
          const ie = this.pending.findIndex(Oi);
          this.pending.splice(-1 === ie ? this.pending.length : ie, 0, ee)
        }
        return (null === this.current || null !== this.followUp && !ie) && (this.advance(), !0)
      }
      setHeld(ee) {
        return this.lJ = ee, !ee && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      YR() {
        const ee = this.getJournal(),
          ie = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === ie ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === ie || void 0 === ie ? void 0 : ie.kind) && ee && ee.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === ie || void 0 === ie ? void 0 : ie.kind)) {
          const ee = this.findFollowUp(this.current);
          if ("step" !== (null === ee || void 0 === ee ? void 0 : ee.kind) || ee.questId !== ie.questId || ee.step.id !== ie.step.id) return this.showFollowUp(ee, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(ee, ie, He) {
        var ye, be, Me, Ke;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, ee, He);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, ee);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, ee, ie);
        const {
          questCompletionKind: Ue,
          questCompletionNameKey: Fe
        } = this.current, Je = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, oe = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Re = "step" === (null === (ye = this.followUp) || void 0 === ye ? void 0 : ye.kind) ? this.followUp : null, ke = "explore" === (null === (be = this.followUp) || void 0 === be ? void 0 : be.kind);
        let qe;
        return qe = ke ? ee("skyblockGame:questExploreTitle") : null !== Re ? "quest" === Ue ? ee("skyblockGame:questNextQuestTitle", {
          quest: ee(Re.questNameKey)
        }) : ee("skyblockGame:questNextStepTitle") : ee("started" === Ue ? "skyblockGame:questStartedTitle" : "quest" === Ue ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Ue : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: qe,
          name: ke ? ie("skyblockGame:questExploreName") : null !== Re ? Ei(ie, Re.step.nameKey, Re.step.nameParams) : Ei(ie, Fe, Je),
          description: ke ? ie("skyblockGame:questExploreDescription") : null === Re ? null : Ei(ie, Re.step.descriptionKey, Re.step.descriptionParams),
          reward: null === this.followUp && oe > 0 ? ie("skyblockGame:questCoinRewardSuffix", {
            amount: oe.toLocaleString(He)
          }) : null,
          iconItem: null !== (Me = null === Re || void 0 === Re ? void 0 : Re.step.questIconItem) && void 0 !== Me ? Me : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Re && (null === (Ke = this.getJournal()) || void 0 === Ke ? void 0 : Ke.trackedQuestId) === Re.questId ? Re.step.nameKey : null
        }
      }
      getSkillLevelView(ee, ie, He) {
        let {
          skill: ye,
          beforeLevel: be,
          level: Me
        } = ee;
        const Ke = bi(ye, be),
          Ue = bi(ye, Me);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: ie(`skyblockGame:${ye}`),
          name: ie("skyblockGame:skillLevelUp", {
            to: Me.toLocaleString(He)
          }),
          description: Ke.percent === Ue.percent ? null : ie(`${Ue.translationKey}Change`, {
            before: Ke.percent.toLocaleString(He),
            after: Ue.percent.toLocaleString(He)
          }),
          reward: null,
          iconItem: Xi[ye],
          accent: Bi(ye),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(ee, ie) {
        let {
          landmarkNameKey: He
        } = ee;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: ie("skyblockGame:landmarkDiscovered"),
          name: ie(He),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(ee, ie, He) {
        let {
          titleKey: ye,
          textKey: be,
          params: Me = {},
          nameKeys: Ke = {},
          iconItem: Ue = null
        } = ee;
        const Fe = {
          ...Me
        };
        for (const [Je, oe] of Object.entries(Ke)) Fe[Je] = ie(oe);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: ie(ye),
          name: He(be, Fe),
          description: null,
          reward: null,
          iconItem: Ue,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var ee;
        if (null !== this.followUp) return 5600;
        switch (null === (ee = this.current) || void 0 === ee ? void 0 : ee.questCompletionKind) {
          case "quest":
            return 4800;
          case "started":
            return 4e3;
          case "skillLevel":
            return 3e3;
          case "landmark":
            return 3500;
          case "npcNote":
            return 8e3;
          default:
            return 2400
        }
      }
      showFollowUp(ee, ie) {
        null === ee || this.lJ ? this.advance() : (this.followUp = ee, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ie && void 0 !== ie ? ie : this.shownAt + this.durationMs())
      }
      findFollowUp(ee) {
        var ie;
        const He = this.getJournal();
        if (!He || this.hasPendingQuestPopup() || Oi(ee)) return null;
        const ye = "started" === ee.questCompletionKind ? He.active.some((ie => ie.id === ee.questCompletionQuestId)) : "quest" === ee.questCompletionKind ? He.completed.some((ie => ie.id === ee.questCompletionQuestId)) : [...He.active, ...He.completed].some((ie => ie.id === ee.questCompletionQuestId && ie.subquests.some((ie => ie.id === ee.questCompletionStepId && "completed" === ie.status))));
        if (!ye) return null;
        if ("quest" === ee.questCompletionKind && 0 === He.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const be = He.active.find((ee => ee.id === He.trackedQuestId)),
          Me = null !== (ie = null === be || void 0 === be ? void 0 : be.subquests.find((ee => "ready" === ee.status))) && void 0 !== ie ? ie : null === be || void 0 === be ? void 0 : be.subquests.find((ee => "active" === ee.status));
        return Me ? {
          kind: "step",
          questId: be.id,
          questNameKey: be.nameKey,
          step: Me
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((ee => !Oi(ee)))
      }
      advance() {
        var ee;
        this.current = this.lJ ? null : null !== (ee = this.pending.shift()) && void 0 !== ee ? ee : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Oi(ee) {
      return di(ee.questCompletionKind)
    }

    function di(ee) {
      return "skillLevel" === ee || "landmark" === ee || "npcNote" === ee
    }
    var Wi = He(39331),
      ti = He(39340),
      Zi = He(39309),
      wi = He(4605);
    const Di = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Pi(ee) {
      const ie = new wi.i(ee);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Di.map((ee => {
          let {
            lobes: He,
            amount: ye
          } = ee;
          return {
            lobes: He[Math.floor(ie.next() * He.length)],
            amount: ye[0] + ie.next() * (ye[1] - ye[0]),
            phase: 2 * ie.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Ai(ee) {
      let {
        radius: ie,
        squareness: He,
        wobbles: ye,
        samples: be
      } = ee;
      const Me = [];
      for (let Ke = 0; Ke < be; Ke++) {
        const ee = 2 * Math.PI * Ke / be,
          Ue = Math.cos(ee),
          Fe = Math.sin(ee),
          Je = ie * (Math.abs(Ue) ** He + Math.abs(Fe) ** He) ** (-1 / He) * ye.reduce(((ie, He) => {
            let {
              lobes: ye,
              amount: be,
              phase: Me
            } = He;
            return ie + be * Math.sin(ye * ee + Me)
          }), 1);
        Me.push(`${(50+Je*Ue).toFixed(2)} ${(50+Je*Fe).toFixed(2)}`)
      }
      return `M${Me.join("L")}Z`
    }
    const Yi = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Vi {
      constructor() {
        this.compassSpacing = 1, this.compassSize = {
          trackHalfWidth: 0,
          screenHalfWidth: 0
        }, this.compass = null, this.terrain = null, this.searchAreaPath = {
          seed: "",
          d: ""
        }, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
          width: 0,
          height: 0
        }, this.waypointInset = {
          x: 8,
          top: 8,
          bottom: 8
        }, this.viewport = {
          width: 0,
          height: 0
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.xf = !1, this.mountCompass = ee => {
          var ie;
          if (null === (ie = this.stopLayout) || void 0 === ie || ie.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !ee || this.xf) return;
          const He = ee.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: ee,
            track: He,
            label: ee.querySelector(".SkyblockCompassLabel")
          }, He.replaceChildren();
          for (let be = 0; be < 4; be++) {
            const ee = document.createElement("span");
            ee.className = "SkyblockCompassCardinal", He.appendChild(ee), this.cardinals.push(ee)
          }
          const ye = (0, Zi.b)(Yi, [ee], this.layout);
          this.stopLayout = () => {
            ye(), He.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = ee => {
          this.terrain = this.xf ? null : ee, this.render(this.frame)
        }, this.mountMinimapSearchArea = ee => {
          this.mountSearchArea("minimap", ee)
        }, this.mountMapSearchArea = ee => {
          this.mountSearchArea("map", ee)
        }, this.mountPlayer = ee => {
          this.player = this.xf ? null : ee, this.render(this.frame)
        }, this.mountWaypoint = ee => {
          var ie, He;
          if (null === (ie = this.stopWaypoint) || void 0 === ie || ie.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !ee || this.xf) return;
          const ye = ee.querySelector(".SkyblockQuestWaypointMarker");
          ye.replaceChildren((0, ti.d)("quest")), this.markerIcon = "quest", this.waypoint = {
            root: ee,
            marker: ye,
            clip: ee.querySelector(".SkyblockQuestWaypointTextClip"),
            text: ee.querySelector(".SkyblockQuestWaypointText"),
            label: ee.querySelector(".SkyblockQuestWaypointLabel"),
            distance: ee.querySelector(".SkyblockQuestWaypointDistance"),
            hint: ee.querySelector(".SkyblockQuestWaypointHint")
          };
          const be = () => {
              this.waypointMarkerSize = {
                width: ye.offsetWidth,
                height: ye.offsetHeight
              }, this.waypointInset = {
                x: ye.offsetWidth / 2 + 8,
                top: ye.offsetHeight + 8,
                bottom: 8
              }
            },
            Me = new ResizeObserver((() => {
              be(), this.render(this.frame)
            }));
          Me.observe(ye, {
            box: "border-box"
          });
          const Ke = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Ke), null === (He = window.visualViewport) || void 0 === He || He.addEventListener("resize", Ke), this.stopWaypoint = () => {
            var ee;
            Me.disconnect(), window.removeEventListener("resize", Ke), null === (ee = window.visualViewport) || void 0 === ee || ee.removeEventListener("resize", Ke)
          }, Ke(), be(), this.render(this.frame)
        }, this.mountWaypointOrigin = ee => {
          var ie;
          if (null === (ie = this.stopWaypointOrigin) || void 0 === ie || ie.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = ee && !this.xf ? Number(ee.dataset.notificationToken) : null, ee && !this.xf && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const ie = {
              nameKey: ee.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = ie;
            const He = () => {
                const He = ee.getBoundingClientRect();
                ie.x = (He.left + He.width / 2) / window.innerWidth * 100, ie.y = (He.top + He.height / 2) / window.innerHeight * 100
              },
              ye = new ResizeObserver(He);
            ye.observe(ee.parentElement), ye.observe(ee), window.addEventListener("resize", He), this.stopWaypointOrigin = () => {
              ye.disconnect(), window.removeEventListener("resize", He)
            }, He()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const ee = this.compass.root,
            ie = getComputedStyle(ee),
            He = getComputedStyle(document.documentElement),
            ye = parseFloat(He.fontSize),
            be = parseFloat(ie.getPropertyValue("--compass-icon-size")) * ye,
            Me = "1" === ie.getPropertyValue("--compass-fit-top").trim(),
            Ke = Me ? 1 : 8,
            Ue = Array.from(document.querySelectorAll(Yi), (ee => {
              var ie;
              return (null !== (ie = ee.querySelector(".MiddleTextTop")) && void 0 !== ie ? ie : ee).getBoundingClientRect()
            })).filter((ee => ee.width > 0 && ee.height > 0));
          let Fe = (parseFloat(He.getPropertyValue("--notchTop")) || 0) + Ke,
            Je = "";
          if (Me) {
            const ie = window.innerWidth / 2,
              He = ee.getBoundingClientRect().height,
              Me = [Fe, ...Ue.map((ee => Math.max(Fe, ee.bottom + Ke)))].sort(((ee, ie) => ee - ie));
            for (const ee of Me) {
              let Me = ie - 8;
              for (const ye of Ue) ye.bottom + Ke <= ee || ye.top >= ee + He + Ke || (Me = Math.min(Me, ye.right <= ie ? ie - ye.right - 8 : ye.left - ie - 8));
              const oe = 2 * Me - be;
              if (oe >= 16 * ye) {
                Je = `${oe}px`, Fe = ee;
                break
              }
            }
          }
          ee.style.maxWidth !== Je && (ee.style.maxWidth = Je);
          const oe = ee.getBoundingClientRect(),
            Re = this.compassSize.trackHalfWidth;
          if (oe.width > 0) {
            const ee = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: ee.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * be / ee.width
          }
          if (!Je)
            for (const ke of Ue) ke.right > oe.left - 8 && ke.left < oe.right + 8 && (Fe = Math.max(Fe, ke.bottom + Ke));
          ee.style.top = `${Fe}px`, this.compassSize.trackHalfWidth !== Re && this.render(this.frame)
        }
      }
      mountSearchArea(ee, ie) {
        this.searchAreas[ee] = this.xf ? null : ie, this.render(this.frame)
      }
      render(ee) {
        if (this.xf) return;
        if (this.frame = ee, this.compass && (ai(this.compass.root, !ee), ee)) {
          const ie = this.compassSize.trackHalfWidth / 50;
          ee.compass.cardinals.forEach(((ee, He) => {
            const ye = this.cardinals[He];
            ye.textContent !== ee.name && (ye.textContent = ee.name), ai(ye, ee.hidden), ye.style.translate = ee.left * ie + "px"
          }));
          const He = new Set;
          ee.compass.markers.forEach(((ye, be) => {
            var Me;
            He.add(ye.id);
            let Ke = this.markers.get(ye.id);
            Ke || (Ke = document.createElement("span"), Ke.className = "SkyblockCompassMarker", this.markers.set(ye.id, Ke), this.compass.track.appendChild(Ke)), Ke.dataset.icon !== ye.icon && (Ke.dataset.icon = ye.icon, Ke.replaceChildren((0, ti.d)(ye.icon))), Ke.style.color = null !== (Me = ye.colour) && void 0 !== Me ? Me : "", Ke.style.translate = ye.left * ie + "px", Ke.style.zIndex = String(ee.compass.markers.length - be), Ke.title !== ye.name && (Ke.title = ye.name)
          }));
          for (const [ee, ye] of this.markers) He.has(ee) || (ye.remove(), this.markers.delete(ee));
          this.compass.label.textContent !== ee.compass.label && (this.compass.label.textContent = ee.compass.label)
        }
        this.terrain && (ai(this.terrain, !(null !== ee && void 0 !== ee && ee.minimap)), null !== ee && void 0 !== ee && ee.minimap && (this.terrain.style.transform = ee.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", ee.minimap.iconRotation)));
        const ie = null === ee || void 0 === ee ? void 0 : ee.searchArea;
        for (const He of [this.searchAreas.minimap, this.searchAreas.map])
          if (He && (ai(He, !ie), ie)) {
            if (this.searchAreaPath.seed !== ie.shapeSeed && (this.searchAreaPath = {
                seed: ie.shapeSeed,
                d: Ai(Pi(ie.shapeSeed))
              }), He.dataset.shapeSeed !== ie.shapeSeed) {
              He.dataset.shapeSeed = ie.shapeSeed;
              for (const ee of He.querySelectorAll("path")) ee.setAttribute("d", this.searchAreaPath.d)
            }
            He.style.left = `${ie.left}%`, He.style.top = `${ie.top}%`, He.style.width = `${ie.width}%`, He.style.height = `${ie.height}%`
          } if (this.player && (ai(this.player, !(null !== ee && void 0 !== ee && ee.player) || ee.player.hidden), null !== ee && void 0 !== ee && ee.player && (this.player.style.left = `${ee.player.left}%`, this.player.style.top = `${ee.player.top}%`, this.player.style.setProperty("--map-player-rotation", ee.player.rotation))), this.waypoint) {
          const {
            root: ie,
            marker: He,
            clip: ye,
            text: be,
            label: Me,
            distance: Ke,
            hint: Ue
          } = this.waypoint, Fe = !(null !== ee && void 0 !== ee && ee.waypoint) || null !== ee.waypoint.popupToken && ee.waypoint.popupToken !== this.waypointOriginToken;
          ai(ie, Fe);
          let Je = 1;
          const oe = this.waypointLaunch;
          if (!Fe && oe && ee.waypoint.nameKey === oe.nameKey) {
            const ee = performance.now();
            oe.startedAt ??= ee, Je = Math.min(1, Math.max(0, (ee - oe.startedAt - 450) / 1e3)), He.style.opacity = String(Math.min(1, (ee - oe.startedAt) / 150)), 1 === Je && (this.waypointLaunch = null)
          } else He.style.opacity = "", oe && null !== oe.startedAt && (this.waypointLaunch = null);
          if (ie.classList.toggle("Launching", Je < 1), null !== ee && void 0 !== ee && ee.waypoint) {
            const ie = this.waypointInset,
              Fe = "quest_talk" === ee.waypoint.markerIcon ? function(ee, ie, He) {
                if (!ee.text || null === ee.blockHeight || 0 === ee.nearness) return ee;
                const ye = ee.blockHeight / 100 * He.height,
                  be = -ee.nearness * (ci * ye + ie.width / 2),
                  Me = ee.nearness * (xi * ye + ie.height / 2);
                return {
                  ...ee,
                  text: {
                    x: ee.text.x + be / He.width * 100,
                    y: ee.text.y + Me / He.height * 100
                  }
                }
              }(ee.waypoint, this.waypointMarkerSize, this.viewport) : ee.waypoint,
              Re = (0, Wi.c)(Fe, ie, this.viewport),
              ke = Je * Je * (3 - 2 * Je),
              qe = Je < 1 ? oe.x + (Re.x - oe.x) * ke : Re.x,
              fe = Je < 1 ? oe.y + (Re.y - oe.y) * ke : Re.y;
            He.style.translate = `${qe}vw ${fe}vh`, ye.style.clipPath = `inset(${ie.top}px ${ie.x}px ${ie.bottom}px)`, ai(be, Je < 1 || !ee.waypoint.text), be.style.opacity = String(1 - ee.waypoint.nearness), ee.waypoint.text && (be.style.translate = `${ee.waypoint.text.x}vw ${ee.waypoint.text.y}vh`), Me.textContent !== ee.waypoint.name && (Me.textContent = ee.waypoint.name), this.markerIcon !== ee.waypoint.markerIcon && (this.markerIcon = ee.waypoint.markerIcon, He.replaceChildren((0, ti.d)(this.markerIcon))), Ke.textContent !== ee.waypoint.distance && (Ke.textContent = ee.waypoint.distance), ai(Ue, null === ee.waypoint.hint), null !== ee.waypoint.hint && Ue.textContent !== ee.waypoint.hint && (Ue.textContent = ee.waypoint.hint)
          }
        }
      }
      dispose() {
        var ee, ie;
        this.mountWaypointOrigin(null), this.render(null), null === (ee = this.stopLayout) || void 0 === ee || ee.call(this), this.stopLayout = null, null === (ie = this.stopWaypoint) || void 0 === ie || ie.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.xf = !0
      }
    }

    function ai(ee, ie) {
      ee.hidden !== ie && (ee.hidden = ie)
    }
    const ci = .55,
      xi = .6;
    var Li = He(39324);
    const Ci = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class vi {
      constructor(ee, ie, He, ye) {
        this.map = ee, this.quests = ie, this.compass = He, this.display = new Vi, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.xf = !1, this.snapshot = null, this.texts = new Map, this.translate = ye
      }
      setTranslator(ee, ie) {
        this.translate = ee, this.locale = ie, this.metresFormat = new Intl.NumberFormat(ie), this.texts.clear()
      }
      translateCached(ee, ie) {
        const He = void 0 === ie ? ee : `${ee} ${ie}`;
        let ye = this.texts.get(He);
        return void 0 === ye && (this.texts.size >= 500 && this.texts.clear(), ye = this.translate(ee, void 0 === ie ? void 0 : {
          distance: ie
        }), this.texts.set(He, ye)), ye
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(ee, ie, He) {
        if (this.xf) return;
        if (!ee) return this.snapshot = null, void this.display.render(null);
        const ye = this.map.getSnapshot().map,
          Me = He.cameraHeading,
          Ke = {
            ...this.display.compassSize,
            tanHalfFovX: He.tanHalfFovX,
            pitch: He.cameraPitch
          },
          Ue = [];
        if (ye)
          for (const be of this.compass.frame(ee, Me, ie)) {
            const ee = qe(be.offset, Ke);
            null !== ee && Ue.push({
              ...be,
              left: ee
            })
          }
        const Fe = function(ee, ie) {
            const He = [],
              ye = ee => "quest" === ee.kind ? ee.distance - 1 : ee.distance,
              be = [...ee].sort(((ee, ie) => ye(ee) - ye(ie) || ee.id.localeCompare(ie.id)));
            for (const Me of be) {
              let ee = !1;
              if ("quest" !== Me.kind)
                for (const ye of He)
                  if (Math.abs(ye.left - Me.left) < ie) {
                    ee = !0;
                    break
                  } ee || He.push(Me)
            }
            return He
          }(Ue, this.display.compassSpacing),
          Je = function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              He = null;
            for (const ye of ee) Math.abs(ye.offset) <= ie && (!He || ye.distance < He.distance || ye.distance === He.distance && Math.abs(ye.offset) < Math.abs(He.offset)) && (He = ye);
            return He
          }(Fe),
          oe = ee => {
            var ie;
            return null !== (ie = ee.displayName) && void 0 !== ie ? ie : this.translateCached(ee.nameKey)
          },
          ke = {
            compass: {
              markers: Fe.map((ee => ({
                id: ee.id,
                icon: ee.icon,
                colour: ee.colour,
                name: oe(ee),
                left: ee.left
              }))),
              cardinals: Li.e.map((ee => {
                let {
                  name: ie,
                  bearing: He
                } = ee;
                const ye = qe(Re.c.computeShortestRotation(Me, He), Ke);
                return {
                  name: ie,
                  left: null !== ye && void 0 !== ye ? ye : 0,
                  hidden: null === ye
                }
              })),
              label: Je ? `${oe(Je)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",Ee(Je.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== ye && void 0 !== ye && ye.background) {
          const ie = ee[0] - ye.mapOrigin[0],
            He = ee[2] - ye.mapOrigin[2],
            {
              rotation: Ke,
              transform: Ue
            } = (0, be.c)(ie, He, Me, ye.background.bounds);
          ke.minimap = {
            transform: Ue,
            iconRotation: -Ke + "rad"
          };
          const [Fe, Je] = (0, be.b)(ie, He, ye.background.bounds);
          ke.player = {
            left: Fe,
            top: Je,
            hidden: Fe < 0 || Je < 0 || Fe > 100 || Je > 100,
            rotation: -Ke + "rad"
          }
        }
        const {
          waypoint: fe
        } = this.quests.getSnapshot();
        if ("search" === (null === fe || void 0 === fe ? void 0 : fe.questMarkerIcon) && null !== ye && void 0 !== ye && ye.background) {
          const {
            bounds: ee
          } = ye.background, [ie, He] = (0, be.b)(fe.position[0] - ye.mapOrigin[0], fe.position[2] - ye.mapOrigin[2], ee);
          ke.searchArea = {
            left: ie,
            top: He,
            width: 6400 / (ee.mapMaxX - ee.mapMinX),
            height: 6400 / (ee.mapMaxZ - ee.mapMinZ),
            shapeSeed: fe.nameKey
          }
        }
        const Te = this.quests.getNotificationSnapshot(),
          pe = "completion" === (null === Te || void 0 === Te ? void 0 : Te.phase) && !di(Te.kind);
        if (fe && !pe) {
          const ie = Math.hypot(...fe.position.map(((ie, He) => ie - ee[He]))),
            ye = Math.round(ie),
            be = "talk" === fe.questMarkerIcon ? Math.min(1, Math.max(0, (10 - ie) / 5)) : 0,
            Me = He.projectWorldPosToViewport(fe.position),
            Ke = Me && He.projectWorldPosToViewport([fe.position[0], fe.position[1] - 1, fe.position[2]]);
          ke.waypoint = {
            ...He.projectWorldPosToScreenPos(fe.position),
            text: Me,
            nearness: be * be * (3 - 2 * be),
            blockHeight: Me && Ke ? Ke.y - Me.y : null,
            name: this.translateCached(fe.nameKey),
            nameKey: fe.nameKey,
            markerIcon: fe.questMarkerIcon ? Ci[fe.questMarkerIcon] : "quest",
            popupToken: (null === Te || void 0 === Te ? void 0 : Te.waypointNameKey) === fe.nameKey ? Te.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(ye)),
            hint: "search" === fe.questMarkerIcon && Math.hypot(fe.position[0] - ee[0], fe.position[2] - ee[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = ke, this.display.render(ke)
      }
      dispose() {
        this.xf = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const ui = "skyblockSkillsView";
    class mi extends Fe {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          He = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee => ee,
          ye = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          be = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ee => ee;
        super(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = ie, this.translate = He, this.locale = ye, this.itemName = be, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = ee => {
          this.selected = ee, this.emit()
        }
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, this.locale = ie, this.itemName = He, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(ee) {
        let ie = this.skillText.get(ee);
        return ie || (ie = {
          label: this.translate(`skyblockGame:${ee}`),
          description: this.translate(`skyblockGame:${ee}Description`)
        }, this.skillText.set(ee, ie)), ie
      }
      sources(ee) {
        if ("mining" === ee || "fishing" === ee) return this.buildSources(ee);
        let ie = this.sourceText.get(ee);
        return ie || (ie = this.buildSources(ee), this.sourceText.set(ee, ie)), ie
      }
      buildSources(ee) {
        const ie = this.translate;
        return "exploration" === ee ? [ie("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), ie("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === ee ? [ie("skyblockGame:logSource", {
          xp: this.number(Ri["Maple Log"])
        })] : "combat" === ee ? [ie("skyblockGame:creatureKillSource"), ie("skyblockGame:noEnvironmentalXp")] : "farming" === ee ? [ie("skyblockGame:cropSource", {
          xp: this.number(fi["Wheat|FreshlyGrown"])
        }), ie("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), ie("skyblockGame:noYoungCropXp")] : Object.entries("mining" === ee ? qi : Ti).map((ee => {
          let [He, ye] = ee;
          return ie("skyblockGame:itemXpSource", {
            item: this.itemName(He),
            xp: this.number(ye)
          })
        }))
      }
      number(ee) {
        return ee.toLocaleString(this.locale)
      }
      benefit(ee, ie) {
        const He = bi(ee, ie);
        return this.translate(He.translationKey, {
          bonus: this.number(He.percent)
        })
      }
      DR(ee) {
        if (!this.xf) {
          if ("snapshot" === ee.kind) this.progress = ee.progress, this.pending.clear(), this.recent = null;
          else if ("award" === ee.kind && this.progress) {
            const {
              award: ie
            } = ee;
            this.progress = {
              ...this.progress,
              [ie.skill]: ie.after
            };
            for (const [ee, ye] of this.pending) ye.skill === ie.skill && this.pending.delete(ee);
            const He = ie.after.level > ie.before.level;
            this.recordGain(ie.skill, ie.amount, He ? ++this.nextLevelUpToken : null), He && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: ie.skill,
              beforeLevel: ie.before.level,
              level: ie.after.level
            })
          } else {
            if ("rejectBlock" === ee.kind) return void this.rejectBlock(ee.position);
            if ("open" === ee.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(ee, ie, He) {
        if (!this.progress || this.xf || He) return;
        const ye = function(ee, ie) {
          const He = ee.split("|")[0];
          return "Air" === ie || ie === `Barkless ${ee}` ? Object.hasOwn(Ri, He) ? {
            skill: "foraging",
            amount: Ri[He]
          } : "Air" !== ie ? null : Object.hasOwn(qi, ee) ? {
            skill: "mining",
            amount: qi[ee]
          } : Fi(ee) ? {
            skill: "farming",
            amount: 10
          } : oi(ee) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(fi, ee) ? {
            skill: "farming",
            amount: fi[ee]
          } : Object.hasOwn(xe, ee) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(ie, "Air");
        if (!ye) return;
        const be = ee.join(",");
        if (this.pending.has(be)) return;
        const Me = this.predictedProgress(ye.skill).totalXp + ye.amount;
        Number.isSafeInteger(Me) && (this.pending.set(be, {
          ...ye,
          expires: this.now() + 2e3
        }), this.recordGain(ye.skill, 0), this.emit())
      }
      rejectBlock(ee) {
        this.pending.delete(ee.join(",")) && this.emit()
      }
      YR() {
        if (this.xf) return;
        let ee = !1;
        for (const [ie, He] of this.pending) He.expires <= this.now() && (this.pending.delete(ie), ee = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, ee = !0), ee && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(ee, ie) {
        var He, ye;
        let be = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Me = (null === (He = this.recent) || void 0 === He ? void 0 : He.skill) === ee && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Ke = (null === (ye = this.recent) || void 0 === ye ? void 0 : ye.skill) === ee && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: ee,
          confirmed: Me + ie,
          expires: this.now() + 3e3,
          levelUpToken: null !== be && void 0 !== be ? be : Ke
        }
      }
      pendingXp(ee) {
        let ie = 0;
        for (const He of this.pending.values()) He.skill === ee && (ie += He.amount);
        return ie
      }
      predictedProgress(ee) {
        const ie = this.progress[ee],
          He = this.pendingXp(ee);
        return He ? Ki(ie.totalXp + He, ee) : ie
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var ee, ie, He;
        const ye = this.progress ? Ie.map((ee => {
            const ie = this.predictedProgress(ee);
            return {
              ...this.text(ee),
              icon: Xi[ee],
              benefit: this.benefit(ee, ie.level),
              sources: this.sources(ee),
              id: ee,
              selected: ee === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(ie.level)
              }),
              xp: null === ie.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(ie.xpIntoLevel),
                target: this.number(ie.xpForNextLevel)
              }),
              percent: null === ie.xpForNextLevel ? 100 : Math.min(100, ie.xpIntoLevel / ie.xpForNextLevel * 100)
            }
          })) : [],
          be = ye.find((ee => {
            var ie;
            return ee.id === (null === (ie = this.recent) || void 0 === ie ? void 0 : ie.skill)
          })),
          Me = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: ye,
          detail: null !== (ee = ye.find((ee => ee.selected))) && void 0 !== ee ? ee : null,
          overallLevel: this.progress ? Ie.reduce(((ee, ie) => ee + this.predictedProgress(ie).level), 0) : null,
          hud: be && Me > 0 ? {
            skill: be,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Me)
            }),
            levelUpToken: null !== (ie = null === (He = this.recent) || void 0 === He ? void 0 : He.levelUpToken) && void 0 !== ie ? ie : null,
            colour: Bi(be.id)
          } : null
        }
      }
    }
    const li = Math.max(1600, 600, 950) + 400,
      Si = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      ni = "skyblockQuestsView",
      ji = "skyblockQuestNotificationView";
    class si extends Fe {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Ke = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(ee, ye, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = ie, this.translate = He, this.now = be, this.locale = Me, this.publishNotification = Ke, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
          enabled: !1,
          open: !1,
          active: [],
          completed: [],
          completedExpanded: !1,
          detail: null,
          tracked: null,
          trackedStepPulse: 0,
          waypoint: null,
          compassTarget: null
        }, this.getNotificationSnapshot = () => this.notificationSnapshot, this.showTracked = () => {
          var ee, ie;
          this.selected = null !== (ee = null === (ie = this.authoritative) || void 0 === ie ? void 0 : ie.trackedQuestId) && void 0 !== ee ? ee : null, this.show()
        }, this.select = ee => {
          this.selected = ee, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const ee = this.snapshot.detail;
          !this.xf && null !== ee && void 0 !== ee && ee.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(ee.id), this.emit())
        }, this.viewDialogue = () => {
          const ee = this.snapshot.detail;
          var ie;
          ee && (null === (ie = this.onViewDialogue) || void 0 === ie || ie.call(this, ee.id))
        }, this.notifications = new gi(be, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var ee, ie;
        return null !== (ee = null === (ie = this.authoritative) || void 0 === ie ? void 0 : ie.trackedQuestId) && void 0 !== ee ? ee : null
      }
      notify(ee) {
        !this.xf && this.notifications.enqueue(ee) && this.emitNotification()
      }
      setNotificationsHeld(ee) {
        (this.notifications.setHeld(ee) || ee) && this.emitNotification()
      }
      YR() {
        var ee, ie;
        if (this.xf) return;
        this.notifications.YR() && this.emitNotification();
        let He = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, He = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, He = !0);
        const ye = Ii(this.authoritative);
        null !== ye && void 0 !== ye && null !== (ee = ye.questClock) && void 0 !== ee && ee.running && this.clockText(ye) !== (null === (ie = this.snapshot.tracked) || void 0 === ie ? void 0 : ie.clock) && (He = !0), He && this.emit()
      }
      setTranslator(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = ee, this.locale = ie, this.emitNotification(), this.emit()
      }
      DR(ee) {
        if (!this.xf)
          if ("completion" === ee.kind) this.notify(ee.questCompletion);
          else if ("landmark" === ee.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: ee.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === ee.kind) {
          var ie, He, ye;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: ee.npcNoteTitleKey,
            textKey: ee.npcNoteTextKey,
            params: null !== (ie = ee.npcNoteParams) && void 0 !== ie ? ie : {},
            nameKeys: null !== (He = ee.npcNoteNameKeys) && void 0 !== He ? He : {},
            iconItem: null !== (ye = ee.npcNoteIconItem) && void 0 !== ye ? ye : null
          })
        } else if ("open" === ee.kind) this.show();
        else if ("guidance" === ee.kind) this.waypoint = ee.waypoint, this.compassTarget = ee.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === ee.kind) {
          this.authoritative = ee.snapshot, this.notifications.YR() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const ie = this.trackedStepPulse;
          this.updateTrackedStepPulse(ee.snapshot), this.emit(), this.trackedStepPulse > ie && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.xf || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var ee;
        return null !== (ee = this.translateWithIcons) && void 0 !== ee ? ee : this.translate
      }
      clockText(ee) {
        const ie = ee.questClock;
        if (!ie) return null;
        const He = ie.elapsedMs + (ie.running ? this.now() - this.receivedAt : 0);
        return void 0 === ie.countdownFromMs ? Ae(He, !1) : Ae(1e3 * Math.ceil(Math.max(0, ie.countdownFromMs - He) / 1e3), !1)
      }
      updateTrackedStepPulse(ee) {
        var ie, He, ye;
        const be = Ii(ee);
        if (!be) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Me = ee => be.subquests.filter((ie => ee(ie.status))).map((ee => ee.id)),
          Ke = Me((ee => "completed" === ee || "skipped" === ee)),
          Ue = Me((ee => "locked" !== ee)),
          Fe = (null === (ie = this.trackedSteps) || void 0 === ie ? void 0 : ie.questId) === be.id && be.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Fe) {
          const ee = Ke.filter((ee => !Fe.finished.has(ee))),
            ie = Me((ee => "active" === ee || "ready" === ee)).filter((ee => !Fe.unlocked.has(ee)));
          ee.length > 0 && this.trackedStepPulse++, (ee.length > 0 || ie.length > 0) && (this.trackedChange = {
            finished: new Set(ee),
            unlocked: new Set(ie),
            expiresAt: this.now() + li
          })
        } else {
          var Je;
          this.trackedStepPulse = (null === (Je = this.trackedSteps) || void 0 === Je ? void 0 : Je.questId) === be.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: be.id,
          progress: be.progress,
          finished: new Set([...null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.finished) && void 0 !== He ? He : [], ...Ke]),
          unlocked: new Set([...null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe.unlocked) && void 0 !== ye ? ye : [], ...Ue])
        }
      }
      entry(ee, ie) {
        var He, ye;
        const be = ee.id === (null === (He = this.authoritative) || void 0 === He ? void 0 : He.trackedQuestId),
          Me = this.now() < this.trackAvailableAt,
          Ke = this.questTextTranslator(),
          Ue = ee.subquests.map((ie => {
            var He, ye, Me, Ue, Fe, Je;
            const oe = null !== (He = ie.handInNpcName) && void 0 !== He ? He : ee.giverName,
              Re = this.translate("skyblockGame:progress", {
                current: ie.progress.toLocaleString(this.locale),
                target: ie.target.toLocaleString(this.locale)
              }),
              ke = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: oe ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [ie.status],
              qe = "active" === ie.status || "ready" === ie.status;
            return {
              id: ie.id,
              name: Ei(Ke, ie.nameKey, ie.nameParams),
              description: Ei(Ke, ie.descriptionKey, ie.descriptionParams),
              progress: Re,
              status: ie.status,
              statusLabel: ke ? this.translate(ke, {
                npc: oe
              }) : Re,
              iconItem: qe && null !== (ye = ie.questIconItem) && void 0 !== ye ? ye : null,
              barPercent: "active" === ie.status && ie.showsProgressBar ? Math.min(100, 100 * ie.progress / ie.target) : null,
              justFinished: be && null !== (Me = null === (Ue = this.trackedChange) || void 0 === Ue ? void 0 : Ue.finished.has(ie.id)) && void 0 !== Me && Me,
              justUnlocked: be && null !== (Fe = null === (Je = this.trackedChange) || void 0 === Je ? void 0 : Je.unlocked.has(ie.id)) && void 0 !== Fe && Fe
            }
          }));
        return {
          id: ee.id,
          name: Ei(Ke, ee.nameKey, ee.nameParams),
          description: Ei(Ke, ee.descriptionKey, ee.descriptionParams),
          progress: ie ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: ee.progress.toLocaleString(this.locale),
            target: ee.target.toLocaleString(this.locale)
          }),
          completed: ie,
          tracked: be,
          selected: ee.id === this.selected,
          canTrack: !ie && !be && !Me,
          trackLabel: this.translate(be ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Me ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== ee.id,
          subquests: Ue,
          focusStep: null !== (ye = Ue.find((ee => null !== ee.barPercent))) && void 0 !== ye ? ye : null,
          clock: this.clockText(ee)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je;
        const oe = [...null !== (ee = null === (ie = this.authoritative) || void 0 === ie ? void 0 : ie.active) && void 0 !== ee ? ee : [], ...null !== (He = null === (ye = this.authoritative) || void 0 === ye ? void 0 : ye.completed) && void 0 !== He ? He : []];
        var Re, ke, qe, fe;
        oe.some((ee => ee.id === this.selected)) || (this.selected = null !== (Re = null !== (ke = null === (qe = this.authoritative) || void 0 === qe ? void 0 : qe.trackedQuestId) && void 0 !== ke ? ke : null === (fe = oe[0]) || void 0 === fe ? void 0 : fe.id) && void 0 !== Re ? Re : null);
        const Te = null !== (be = null === (Me = this.authoritative) || void 0 === Me ? void 0 : Me.active.map((ee => this.entry(ee, !1)))) && void 0 !== be ? be : [];
        Te.sort(((ee, ie) => Number(ie.tracked) - Number(ee.tracked)));
        const pe = null !== (Ke = null === (Ue = this.authoritative) || void 0 === Ue ? void 0 : Ue.completed.map((ee => this.entry(ee, !0)))) && void 0 !== Ke ? Ke : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Te,
          completed: pe,
          completedExpanded: this.completedExpanded,
          detail: null !== (Fe = [...Te, ...pe].find((ee => ee.selected))) && void 0 !== Fe ? Fe : null,
          tracked: null !== (Je = Te.find((ee => ee.tracked))) && void 0 !== Je ? Je : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Ii(ee) {
      var ie;
      return null !== (ie = null === ee || void 0 === ee ? void 0 : ee.active.find((ie => ie.id === ee.trackedQuestId))) && void 0 !== ie ? ie : null
    }
    const Ni = "skyblockDungeonsView";
    class Gi extends Fe {
      constructor(ee, ie) {
        let He = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          ye = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = ie, this.locale = He, this.requestEnter = ye, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = ee => {
          this.selected = ee, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const ee = this.pickerEntry(),
            ie = null === ee || void 0 === ee ? void 0 : ee.difficulties[this.pageIndex];
          void 0 !== ie && null !== ie.unlockedBoss && (this.close(), this.requestEnter(ee.id, ie.difficulty))
        }
      }
      setTranslator(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = ee, this.locale = ie, this.emit()
      }
      DR(ee) {
        var ie, He;
        if (!this.xf) return "open" === ee.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== ee.kind ? "snapshot" === ee.kind && (this.authoritative = ee.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (ie = null === (He = this.pickerEntry()) || void 0 === He ? void 0 : He.difficulties.length) && void 0 !== ie ? ie : 1) - 1)), null === ee.snapshot && this.open ? this.close() : this.emit()) : this.choose(ee.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(ee) {
        var ie;
        const He = null === (ie = this.authoritative) || void 0 === ie ? void 0 : ie.dungeons.find((ie => ie.id === ee));
        void 0 !== He ? this.open && this.pickerDungeonId === ee || (this.pickerDungeonId = ee, this.pageIndex = Math.max(0, He.difficulties.findLastIndex((ee => null !== ee.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${ee}`)
      }
      turnTo(ee) {
        var ie, He;
        const ye = null !== (ie = null === (He = this.pickerEntry()) || void 0 === He ? void 0 : He.difficulties.length) && void 0 !== ie ? ie : 0;
        ee < 0 || ee >= ye || ee === this.pageIndex || (this.pageIndex = ee, this.emit())
      }
      pickerEntry() {
        var ee, ie;
        return null !== (ee = null === (ie = this.authoritative) || void 0 === ie ? void 0 : ie.dungeons.find((ee => ee.id === this.pickerDungeonId))) && void 0 !== ee ? ee : null
      }
      difficulty(ee) {
        const ie = ee.completions > 0,
          He = null === ee.bestMs ? null : Ae(ee.bestMs);
        return {
          difficulty: ee.difficulty,
          label: this.translate(De[ee.difficulty]),
          colour: Pe[ee.difficulty],
          beaten: ie,
          bestTime: He,
          completions: ee.completions,
          summary: ie ? [null === He ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: He
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: ee.completions.toLocaleString(this.locale)
          })].filter((ee => null !== ee)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(ee) {
        const ie = ee.difficulties.map((ee => this.difficulty(ee))),
          He = ie.filter((ee => ee.beaten)).length;
        return {
          id: ee.id,
          name: this.translate(ee.nameKey),
          selected: ee.id === this.selected,
          beatenSummary: `${He} / ${ie.length}`,
          difficulties: ie
        }
      }
      picker() {
        const ee = this.pickerEntry();
        if (null === ee || 0 === ee.difficulties.length) return null;
        const ie = ee.difficulties.map(((ie, He) => {
          var ye, be, Me, Ke;
          const Ue = ie.unlockedBoss,
            Fe = null === Ue ? this.lockedHint(ee, He) : null;
          return {
            ...this.difficulty(ie),
            unlocked: null !== Ue,
            bossName: null === Ue ? null : this.translate(Ue.bossNameKey),
            bossMobType: null !== (ye = null === Ue || void 0 === Ue ? void 0 : Ue.bossMobType) && void 0 !== ye ? ye : null,
            bossMobVariation: null !== (be = null === Ue || void 0 === Ue ? void 0 : Ue.bossMobVariation) && void 0 !== be ? be : null,
            lockedHint: null !== (Me = null === Fe || void 0 === Fe ? void 0 : Fe.text) && void 0 !== Me ? Me : null,
            lockedHintHighlight: null !== (Ke = null === Fe || void 0 === Fe ? void 0 : Fe.highlight) && void 0 !== Ke ? Ke : null,
            current: He === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(ee.nameKey),
          pages: ie,
          page: ie[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < ie.length - 1
        }
      }
      lockedHint(ee, ie) {
        var He, ye, be;
        if (0 === ie && "number" === typeof ee.combatLevelLock) {
          const ie = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: ee.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: ie,
            colour: Bi("combat"),
            icon: Xi.combat
          })
        }
        const Me = null !== (He = null === (ye = this.authoritative) || void 0 === ye ? void 0 : ye.dungeons) && void 0 !== He ? He : [],
          Ke = ie > 0 ? ee : null !== (be = Me[Me.indexOf(ee) - 1]) && void 0 !== be ? be : null,
          Ue = ie > 0 ? ee.difficulties[ie - 1] : null === Ke || void 0 === Ke ? void 0 : Ke.difficulties[0];
        if (null === Ke || void 0 === Ue) return null;
        const Fe = this.translate(Ke.nameKey);
        if (null === Ue.unlockedBoss) return Ke === ee ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Ue.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Fe
        }, Ue.difficulty);
        const Je = this.translate(Ue.unlockedBoss.bossNameKey);
        return Ke === ee ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Je
        }, Ue.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Je,
            dungeon: Fe
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(ee, ie, He) {
        return this.hintHighlighting(ee, ie, "difficulty", {
          name: this.translate(De[He]),
          colour: Pe[He],
          icon: null
        })
      }
      hintHighlighting(ee, ie, He, ye) {
        let {
          name: be,
          colour: Me,
          icon: Ke
        } = ye;
        const Ue = this.translate(ee, {
          ...ie,
          [He]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(ee, {
            ...ie,
            [He]: be
          }),
          highlight: 2 === Ue.length ? {
            before: Ue[0],
            name: be,
            after: Ue[1],
            colour: Me,
            icon: Ke
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var ee, ie, He;
        const ye = null !== (ee = null === (ie = this.authoritative) || void 0 === ie ? void 0 : ie.dungeons) && void 0 !== ee ? ee : [];
        var be, Me;
        ye.some((ee => ee.id === this.selected)) || (this.selected = null !== (be = null === (Me = ye[0]) || void 0 === Me ? void 0 : Me.id) && void 0 !== be ? be : null);
        const Ke = ye.map((ee => this.entry(ee)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Ke,
          detail: null !== (He = Ke.find((ee => ee.selected))) && void 0 !== He ? He : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const ri = ["mining", "farming", "foraging", "fishing", "combat"],
      Qi = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      eH = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function iH() {
      for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
      return ie.map(((ee, ie) => ({
        amount: ee,
        coins: Qi[ie],
        xp: eH[ie]
      })))
    }
    const HH = iH(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      yH = iH(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      bH = iH(50, 100, 250, 500, 1e3, 2500, 5e3),
      MH = iH(25, 50, 100, 250, 500, 1e3),
      KH = iH(10, 25, 50, 100, 250, 500, 1e3),
      UH = iH(1, 5, 10, 25, 50);

    function FH(ee, ie) {
      return {
        id: ee,
        category: "fishing",
        item: ie,
        drops: [ie],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KH
      }
    }
    const JH = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: yH
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: bH
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: bH
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: MH
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: MH
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: yH
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: HH
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: HH
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: HH
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: bH
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: yH
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: yH
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: yH
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: bH
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: bH
      }, FH("wheatfish", "Wheatfish"), FH("darter", "Darter"), FH("sunset_minnow", "Sunset Minnow"), FH("root_flounder", "Root Flounder"), FH("greenfin_loach", "Greenfin Loach"), FH("red_strongfish", "Red Strongfish"), FH("green_strongfish", "Green Strongfish"), FH("boomerang_fish", "Boomerang Fish"), FH("seahorse", "Seahorse"), FH("spined_stickleback", "Spined Stickleback"), FH("moon_strongfish", "Moon Strongfish"), FH("boulder_bass", "Boulder Bass"), FH("grass_snapper", "Grass Snapper"), FH("crystal_wheatfish", "Crystalized Wheatfish", UH), FH("moonstone_pupfish", "Moonstone Pupfish", UH), FH("reedglass_minnow", "Reedglass Minnow"), FH("mangrove_herring", "Mangrove Herring"), FH("mudline_perch", "Mudline Perch"), FH("coastal_mullet", "Coastal Mullet"), FH("reef_sardine", "Reef Sardine"), FH("root_perch", "Root Perch"), FH("driftwood_catfish", "Driftwood Catfish"), FH("aether_minnow", "Aether Minnow"), FH("needlefish", "Tri-Pointed Needlefish"), FH("threadfin_bream", "Threadfin Bream"), FH("mudbelly_tilapia", "Mudbelly Tilapia"), FH("rotslab_eel", "Rotslab Eel"), FH("polarflash_electron", "Polarflash Electron"), FH("mireback_carp", "Mireback Carp"), FH("blackwater_bream", "Blackwater Bream"), FH("stone_grouper", "Stone Grouper"), FH("shadeback_ray", "Shadeback Ray"), FH("glacial_silverfish", "Glacial Silverfish"), FH("hatchetfish", "Hatchetfish"), FH("moonlit_boomerang", "Moonlit Boomerang Fish"), FH("murkborne_ray", "Murkborne Ray"), FH("bamboo_catfish", "Bamboo Catfish"), FH("mossback_arapaima", "Mossback Arapaima"), FH("murk_stingray", "Murk Stingray"), FH("channel_sawfish", "Channel Sawfish"), FH("boned_sturgeon", "Boned Sturgeon"), FH("oarfish", "Oarfish"), FH("snakehead", "Snakehead", UH), FH("eldertide_leviathan", "Eldertide Leviathan", UH), FH("pithead", "Pithead"), FH("electric_eel", "Electric Eel"), FH("shadow_darter", "Shadow Darter"), FH("abyss_carp", "Abyss Carp"), FH("nomai_moray", "Nomai Moray"), FH("silver_dragonfish", "Silver Dragonfish"), FH("giant_moray", "Giant Moray"), FH("coelacanth", "Coelacanth", UH), FH("frost_herring", "Frost Herring"), FH("permafrost_halibut", "Permafrost Halibut"), FH("glacial_lanternfish", "Glacial Lanternfish"), FH("frozen_grenadier", "Frozen Grenadier"), FH("blackfin_icefish", "Blackfin Icefish"), FH("moonfish", "Moonfish"), FH("alpha_strongfish", "Alpha Moon Strongfish"), FH("deep_lanternfish", "Deepwater Lanternfish", UH), FH("pearlescent_moonfish", "Pearlescent Moonfish", UH), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: yH
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: MH
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: MH
      }],
      oH = (new Map(JH.map((ee => [ee.id, ee]))), new Map),
      RH = new Map;
    for (const xU of JH) {
      for (const [ee, ie] of Object.entries(null !== (kH = xU.blocks) && void 0 !== kH ? kH : {})) {
        var kH;
        oH.set(ee, {
          collection: xU,
          amount: ie
        })
      }
      for (const ee of null !== (qH = xU.drops) && void 0 !== qH ? qH : []) {
        var qH;
        RH.set(ee, xU)
      }
    }

    function fH(ee, ie) {
      let He = 0;
      for (; He < ee.tiers.length && ie >= ee.tiers[He].amount;) He++;
      return He
    }
    const TH = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function pH(ee) {
      return TH[ee - 1]
    }
    const XH = "skyblockCollectionsView";
    class zH extends Fe {
      constructor(ee, ie) {
        let He = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          ye = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ee => ee;
        super(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = ie, this.locale = He, this.itemName = ye, this.counts = null, this.category = "mining", this.selected = JH[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = ee => {
          this.category = ee, this.selected = this.inCategory(ee)[0].id, this.emit()
        }, this.select = ee => {
          this.selected = ee, this.emit()
        }
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, this.locale = ie, this.itemName = He, this.emit()
      }
      DR(ee) {
        if (!this.xf)
          if ("collOpen" !== ee.kind) {
            (ee.collFull || null === this.counts) && (this.counts = new Map);
            for (const [ie, He] of ee.collCounts) this.counts.set(ie, He);
            this.emit()
          } else this.show()
      }
      dispose() {
        this.counts = null, super.dispose()
      }
      isEnabled() {
        return null !== this.counts
      }
      buildSnapshot() {
        var ee;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const ie = this.inCategory(this.category).map((ee => this.collectionView(ee))),
          He = JH.reduce(((ee, ie) => ee + this.tierOf(ie)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: ri.map((ee => this.categoryView(ee))),
          collections: ie,
          detail: null !== (ee = ie.find((ee => ee.selected))) && void 0 !== ee ? ee : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(He)
          })
        }
      }
      categoryView(ee) {
        const ie = this.inCategory(ee),
          He = ie.reduce(((ee, ie) => ee + this.tierOf(ie)), 0),
          ye = ie.reduce(((ee, ie) => ee + ie.tiers.length), 0);
        return {
          id: ee,
          label: this.translate(`skyblockGame:${ee}`),
          icon: Xi[ee],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(He),
            target: this.number(ye)
          }),
          selected: ee === this.category
        }
      }
      collectionView(ee) {
        var ie, He;
        const ye = null !== (ie = this.counts.get(ee.id)) && void 0 !== ie ? ie : 0,
          be = fH(ee, ye),
          Me = null !== (He = ee.tiers[be]) && void 0 !== He ? He : null,
          Ke = 0 === be ? 0 : ee.tiers[be - 1].amount;
        return {
          id: ee.id,
          name: this.itemName(ee.item),
          icon: ee.item,
          selected: ee.id === this.selected,
          locked: 0 === ye,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(ye)
          }),
          tier: 0 === be ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(be),
          percent: null === Me ? 100 : Math.min(100, (ye - Ke) / (Me.amount - Ke) * 100),
          progress: null === Me ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(ye),
            target: this.number(Me.amount)
          }),
          nextReward: null === Me ? null : this.reward(ee, Me.coins, Me.xp)
        }
      }
      reward(ee, ie, He) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(ie),
          xp: this.number(He),
          skill: this.translate(`skyblockGame:${ee.category}`)
        })
      }
      tierLabel(ee) {
        return this.translate("skyblockGame:collectionTier", {
          tier: pH(ee)
        })
      }
      tierOf(ee) {
        var ie;
        return fH(ee, null !== (ie = this.counts.get(ee.id)) && void 0 !== ie ? ie : 0)
      }
      inCategory(ee) {
        return JH.filter((ie => ie.category === ee))
      }
      number(ee) {
        return ee.toLocaleString(this.locale)
      }
    }
    const BH = "skyblockPortalTransitView",
      EH = "skyblockPortalArrival";
    class gH {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.yR = ee, this.storage = ie, this.now = He, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      DR(ee) {
        const ie = {
          zoneNameKey: ee.transitZoneNameKey,
          variation: ee.transitZoneVariation,
          colour: ee.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(EH, ie), this.show("departure", ie.zoneNameKey, ie.colour, ee.transitDurationMs, ee.transitDurationMs + 1500, (() => {
          this.storage.removeItem(EH)
        }))
      }
      resumeArrival(ee) {
        const ie = this.storage.getItem(EH);
        this.storage.removeItem(EH), null === ie || ie.variation !== ee || this.now() - ie.departedAt > 3e4 || this.show("arrival", ie.zoneNameKey, ie.colour, 3200, 2e4)
      }
      finishArrival(ee) {
        var ie;
        "arrival" === (null === (ie = this.view) || void 0 === ie ? void 0 : ie.phase) && this.view.token === ee && (this.clearTimer(), this.view = null, this.yR(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(ee, ie, He, ye, be, Me) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: ee,
          zoneNameKey: ie,
          colour: He,
          durationMs: ye
        }, this.yR(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.yR(null), null === Me || void 0 === Me || Me()
        }), be)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const OH = "skyblockDailyRewardView",
      dH = "skyblockDailyRewardCoin";
    class WH {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.yR = ee, this.isBusy = ie, this.holdQuestPopups = He, this.onHeldCoinsChanged = ye, this.onCoinLanded = be, this.onStarted = Me, this.onFinished = Ke, this.onItemLanded = Ue, this.now = Fe, this.lJ = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var ee, ie;
        return null !== (ee = null === (ie = this.playing) || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null
      }
      getHeldCoins() {
        var ee, ie;
        let He = 0;
        for (const ye of this.lJ) He += ye.coins;
        return He - (null !== (ee = null === (ie = this.playing) || void 0 === ie ? void 0 : ie.released) && void 0 !== ee ? ee : 0)
      }
      DR(ee) {
        "dailyRewardClaimed" !== ee.kind ? (this.queue.push(ee), this.YR()) : this.lJ.push({
          coins: ee.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      YR() {
        const ee = this.now();
        if (null === this.playing) return this.releaseUnshown(ee), void this.startNext(ee);
        const ie = this.playing,
          He = ee - ie.startedAt,
          ye = ie.view.flyingCoins,
          be = function(ee, ie) {
            let He = 0;
            for (; He < ie && ZH(He, ie) <= ee;) He++;
            return He
          }(He, ye);
        if (be !== ie.landed) {
          for (let ee = be - ie.landed > 2 ? be - 1 : ie.landed; ee < be; ee++) this.onCoinLanded(ee, ye);
          ie.landed = be, ie.released = Math.round(ie.view.coins * be / ye), this.onHeldCoinsChanged()
        }
        for (; ie.itemsLanded < ie.view.items.length && 2e3 + 160 * ie.itemsLanded + 630 <= He;) this.onItemLanded(ie.itemsLanded), ie.itemsLanded++;
        He >= ie.view.durationMs && (this.finish(), this.startNext(ee))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.lJ = [], this.yR(null)
      }
      startNext(ee) {
        if (0 === this.queue.length || this.isBusy()) return;
        const ie = this.queue.shift();
        this.token++;
        const He = {
          token: this.token,
          day: ie.dailyRewardDay,
          coins: ie.dailyRewardCoins,
          items: ie.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: ie.dailyRewardDay === te ? 24 : 14
        };
        this.playing = {
          view: He,
          startedAt: ee,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.yR(He), this.onStarted(He)
      }
      finish() {
        this.lJ.shift(), this.playing = null, this.holdQuestPopups(!1), this.yR(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(ee) {
        if (this.queue.length > 0 || 0 === this.lJ.length) return;
        const ie = this.lJ.length;
        this.lJ = this.lJ.filter((ie => ee - ie.receivedAt < 6e4)), this.lJ.length !== ie && this.onHeldCoinsChanged()
      }
    }

    function tH(ee, ie) {
      return 450 + 715 * ee / (ie - 1)
    }

    function ZH(ee, ie) {
      return tH(ee, ie) + 650
    }
    const wH = "skyblockMailboxView";
    class DH {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.yR = ee, this.isBusy = ie, this.onStarted = He, this.now = ye, this.waiting = [], this.playing = null, this.token = 0, this.itemName = ee => ee
      }
      getSnapshot() {
        var ee, ie;
        return null !== (ee = null === (ie = this.playing) || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null
      }
      setItemName(ee) {
        this.itemName = ee
      }
      DR(ee) {
        this.waiting.push(...ee.mailLetters), this.YR()
      }
      YR() {
        const ee = this.now();
        null !== this.playing && ee - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.yR(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(ee)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.yR(null)
      }
      start(ee) {
        const ie = this.waiting.slice(0, 3);
        this.token++;
        const He = {
          token: this.token,
          letters: ie.map((ee => this.toView(ee))),
          more: this.waiting.length - ie.length,
          durationMs: 4500 + 700 * ie.length
        };
        this.waiting = [], this.playing = {
          view: He,
          startedAt: ee
        }, this.yR(He), this.onStarted(He)
      }
      toView(ee) {
        return {
          coins: ee.mailCoins,
          items: ee.mailItems.map((ee => {
            var ie;
            return {
              itemName: ee.mailItemName,
              amount: ee.mailItemAmount,
              label: null !== (ie = ee.mailItemLabel) && void 0 !== ie ? ie : this.itemName(ee.mailItemName)
            }
          })),
          reasonKey: ee.mailReasonKey,
          reasonParams: ee.mailReasonParams
        }
      }
    }
    const PH = "skyblockQuestGraphView",
      AH = "skyblockDevQuestJump";

    function YH(ee) {
      if (0 === ee.length) return "";
      const ie = [`M ${ee[0].x} ${ee[0].y}`];
      for (let ye = 1; ye < ee.length - 1; ye++) {
        const He = ee[ye + 1];
        ie.push(`Q ${ee[ye].x} ${ee[ye].y} ${(ee[ye].x+He.x)/2} ${(ee[ye].y+He.y)/2}`)
      }
      const He = ee[ee.length - 1];
      return ie.push(`L ${He.x} ${He.y}`), ie.join(" ")
    }

    function VH(ee, ie) {
      return ee < ie ? `${ee}|${ie}` : `${ie}|${ee}`
    }
    class aH extends Fe {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(ee, He, ye), this.translate = ie, this.requestJump = be, this.requestArrive = Me, this.storage = Ke, this.now = Ue, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = ee => {
          ee !== this.hoveredId && (this.hoveredId = ee, this.emit())
        }, this.jump = ee => {
          this.close(), this.requestJump(ee)
        }
      }
      DR(ee) {
        if (!this.xf)
          if ("graph" !== ee.kind) {
            if ("jumping" === ee.kind) {
              const ie = {
                questId: ee.graphQuestId,
                variation: ee.graphVariation,
                completes: ee.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(AH, ie)
            }
          } else {
            const ie = ++this.graphCount;
            He.e(133).then((() => He(7036))).then((He => {
              let {
                default: ye
              } = He;
              this.xf || ie !== this.graphCount || (this.layout = function(ee, ie, He) {
                var ye, be;
                const Me = new ee.graphlib.Graph;
                Me.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Me.setDefaultEdgeLabel((() => ({})));
                const Ke = new Set;
                for (const oe of ie) Ke.add(oe.graphQuestId), Me.setNode(oe.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Ue = He.filter((ee => Ke.has(ee.graphFromId) && Ke.has(ee.graphToId) && ee.graphFromId !== ee.graphToId)),
                  Fe = new Map;
                for (const oe of [...Ue].sort(((ee, ie) => Number("awaits" === ee.graphEdgeKind) - Number("awaits" === ie.graphEdgeKind)))) {
                  const ee = VH(oe.graphFromId, oe.graphToId);
                  Fe.has(ee) || (Fe.set(ee, oe), Me.setEdge(oe.graphFromId, oe.graphToId))
                }
                ee.layout(Me);
                const Je = Me.graph();
                return {
                  width: Math.ceil(null !== (ye = Je.width) && void 0 !== ye ? ye : 0),
                  height: Math.ceil(null !== (be = Je.height) && void 0 !== be ? be : 0),
                  nodes: ie.map((ee => {
                    var ie, He;
                    const ye = Me.node(ee.graphQuestId);
                    return {
                      node: ee,
                      left: (null !== (ie = ye.x) && void 0 !== ie ? ie : 0) - 95,
                      top: (null !== (He = ye.y) && void 0 !== He ? He : 0) - 26
                    }
                  })),
                  edges: Ue.map((ee => {
                    var ie;
                    const He = Fe.get(VH(ee.graphFromId, ee.graphToId)),
                      ye = null !== (ie = Me.edge(He.graphFromId, He.graphToId).points) && void 0 !== ie ? ie : [];
                    return {
                      edge: ee,
                      key: `${ee.graphFromId}|${ee.graphToId}|${ee.graphEdgeKind}`,
                      path: YH(He.graphFromId === ee.graphFromId ? ye : [...ye].reverse())
                    }
                  })),
                  plans: new Map(ie.map((ee => [ee.graphQuestId, new Set([ee.graphQuestId, ...ee.graphPlanIds])])))
                }
              }(ye, ee.graphNodes, ee.graphEdges), this.show())
            })).catch((ee => {
              console.error("The quest graph could not be laid out", ee)
            }))
          }
      }
      resumeJump(ee) {
        const ie = this.storage.getItem(AH);
        this.storage.removeItem(AH), null === ie || ie.variation !== ee || this.now() - ie.departedAt > 6e4 || this.requestArrive(ie.questId, ie.completes)
      }
      setTranslator(ee) {
        this.translate = ee, this.emit()
      }
      dispose() {
        this.layout = null, this.hoveredId = null, super.dispose()
      }
      onClosed() {
        this.hoveredId = null
      }
      isEnabled() {
        return null !== this.layout
      }
      getPlan() {
        var ee, ie;
        return null !== (ee = null === this.hoveredId || null === (ie = this.layout) || void 0 === ie ? void 0 : ie.plans.get(this.hoveredId)) && void 0 !== ee ? ee : new Set
      }
      buildSnapshot() {
        const ee = this.layout;
        if (null === ee) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const ie = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: ee.width,
          height: ee.height,
          nodes: ee.nodes.map((ee => {
            let {
              node: He,
              left: ye,
              top: be
            } = ee;
            return {
              id: He.graphQuestId,
              name: this.translate(He.graphNameKey),
              detail: null === He.graphGiverName ? He.graphZoneId : `${He.graphGiverName} \xb7 ${He.graphZoneId}`,
              state: He.graphState,
              left: ye,
              top: be,
              inPlan: ie.has(He.graphQuestId),
              hovered: He.graphQuestId === this.hoveredId
            }
          })),
          edges: ee.edges.map((ee => {
            let {
              edge: He,
              key: ye,
              path: be
            } = ee;
            return {
              key: ye,
              kind: He.graphEdgeKind,
              path: be,
              inPlan: ie.has(He.graphFromId) && ie.has(He.graphToId)
            }
          })),
          planning: ie.size > 0
        }
      }
    }
    var cH = He(37890);
    const xH = 250,
      LH = 2150,
      CH = -2.8,
      vH = 2.2,
      uH = -27,
      mH = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      lH = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      SH = Math.round(50 + 1e3 * (lH.delay + lH.period / 2)),
      nH = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      jH = Array.from({
        length: 26
      }, ((ee, ie) => {
        const He = 2.39996 * ie,
          ye = .5 + .618034 * ie % 1 * .23,
          be = ie % 3 !== 2;
        return {
          rune: be ? nH[7 * ie % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(He)*ye).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(He)*ye).toFixed(3)})`,
            "--spin": 40 * (ie % 5 - 2) + "deg",
            "--size": (be ? 1 + ie % 4 * .2 : .3 + ie % 2 * .15) + "rem",
            "--duration": `${(1.8+7*ie%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*ie%3).toFixed(2)}s`
          }
        }
      }));

    function sH(ee, ie) {
      return Array.from({
        length: 30 + 3 * ee + (ie ? 10 : 0)
      }, ((ee, ie) => {
        const He = ie < 4,
          ye = He ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          be = He ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Me = He ? 2.2 : .6 + Math.random(),
          Ke = He ? .3 : Math.random() < .5 ? .16 : .24,
          Ue = He ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": ye,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${be.toFixed(2)}rem`,
          "--length": `${Me.toFixed(2)}rem`,
          "--width": `${Ke}rem`,
          "--duration": `${Math.round(Ue)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function IH(ee) {
      let {
        zeta: ie,
        period: He
      } = ee;
      const ye = 2 * Math.PI / He;
      return {
        w: ye,
        decay: ie * ye / Math.sqrt(1 - ie * ie)
      }
    }
    let hH = !1;

    function NH() {
      if (hH) return;
      hH = !0;
      const ee = document.createElement("style");
      ee.textContent = function() {
        const ee = IH(mH),
          ie = IH(lH),
          He = ie => Math.exp(-ee.decay * ie) * Math.sin(ee.w * ie),
          ye = He(Math.atan(ee.w / ee.decay) / ee.w),
          be = .25,
          Me = 2.15,
          Ke = Math.round(215),
          Ue = [];
        for (let Fe = 0; Fe <= Ke; Fe++) {
          const ee = Fe / Ke * Me;
          let Je = Math.sin(Math.min(ee, be) / be * Math.PI / 2) ** 2,
            oe = 0,
            Re = 1,
            ke = 1 - .2 * Je,
            qe = 1;
          if (ee >= be) {
            const Ke = ee - be,
              Ue = Math.max(0, Ke - .05);
            Je = Math.exp(-Ue / .05), oe = He(Ue + mH.lead * (1 - Math.exp(-Ue / mH.rush))) / ye;
            const Fe = Ue - lH.delay,
              fe = Fe <= 0 ? 0 : 1 - Math.exp(-ie.decay * Fe) * (Math.cos(ie.w * Fe) + ie.decay / ie.w * Math.sin(ie.w * Fe)),
              Te = Math.max(0, (ee - 1.77) / (Me - 1.77));
            Re = (1 + (lH.to - 1) * fe) * (1 + .08 * Te), ke = 1.1 + 1.5 * Math.exp(-Ke / .07) + .3 * Math.exp(-(((1e3 * Ke - SH) / 100) ** 2)) + .8 * Te, qe = 1 - Te ** 1.5
          }
          const fe = .15 * Je + CH * oe,
            Te = -.1 * Je + vH * oe,
            pe = 3 * Je + uH * oe;
          Ue.push(`${(Fe/Ke*100).toFixed(3)}% { opacity: ${qe.toFixed(3)}; transform: translate(${fe.toFixed(3)}rem, ${Te.toFixed(3)}rem) rotate(${pe.toFixed(2)}deg) scale(${Re.toFixed(3)}); filter: brightness(${ke.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Ue.join(" ")} }`
      }(), document.head.append(ee)
    }
    const GH = "skyblockForgeView",
      rH = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class QH extends Fe {
      constructor(ee, ie, He, ye, be) {
        super(ee, He, ye), this.translate = ie, this.requestForge = be, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (ee, ie) => {
          var He, ye;
          null !== this.forging || (null !== (He = this.owned[(0, cH.v)(ie, ee)]) && void 0 !== He ? He : 0) <= 0 || (this.selected[ee] = this.selected[ee] === ie ? null : ie, this.status = null, null === (ye = this.onPartSelected) || void 0 === ye || ye.call(this), this.emit())
        }, this.forge = ee => {
          var ie, He;
          const ye = this.selectedParts();
          if (null === ye || this.isPending() || !this.open) return;
          const be = (0, cH.r)(ye);
          if (null === be || be.coalCost > this.coal) return;
          const Me = this.preview(be),
            Ke = null !== (ie = null === (He = this.onForgeStarted) || void 0 === He ? void 0 : He.call(this, Me.tier, Me.named, ee)) && void 0 !== ie ? ie : () => {};
          if (this.dropArrival(), ee) {
            const ee = {
              id: ++this.forgeId,
              preview: Me,
              timers: [],
              stopSounds: Ke,
              landed: !1,
              reply: null
            };
            ee.timers.push(setTimeout((() => {
              ee.landed = !0, null !== ee.reply && (this.apply(ee.reply), ee.reply = null, this.emit())
            }), xH), setTimeout((() => {
              this.finishForge(ee)
            }), LH)), this.forging = ee
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(ye)
        }, this.snapshot = this.buildSnapshot()
      }
      DR(ee) {
        var ie;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === ee.forgeMessageKind) return this.dropForge(), this.apply(ee), this.status = null, this.show(), void(null === (ie = this.onOpened) || void 0 === ie || ie.call(this));
        const He = this.forging;
        if (null !== He && null !== ee.forgeRefusalKey) this.dropForge();
        else if (null !== He && !He.landed) return void(He.reply = ee);
        this.apply(ee), this.emit()
      }
      apply(ee) {
        if (this.owned = ee.forgeOwnedParts, this.coal = ee.forgeCoalOwned, this.keepSelectionOwned("open" === ee.forgeMessageKind), null !== ee.forgeForgedSwordId) {
          var ie;
          const He = (0, cH.r)(ee.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (ie = null === He || void 0 === He ? void 0 : He.displayName) && void 0 !== ie ? ie : ""
            }
          }
        } else null !== ee.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: ee.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(ee) {
        this.translate = ee, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(ee) {
        var ie;
        this.forging = null;
        const He = this.selectedParts(),
          ye = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: ee.id,
          sameSword: null !== He && (null === (ie = (0, cH.r)(He)) || void 0 === ie ? void 0 : ie.displayName) === ee.preview.name,
          timer: ye
        }, this.emit()
      }
      dropForge() {
        const ee = this.forging;
        if (null !== ee) {
          this.forging = null;
          for (const ie of ee.timers) clearTimeout(ie);
          ee.stopSounds(), null !== ee.reply && this.apply(ee.reply)
        }
      }
      dropArrival() {
        null !== this.arriving && (clearTimeout(this.arriving.timer), this.arriving = null)
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        var ee, ie, He;
        const ye = this.selectedParts(),
          be = null === ye ? null : (0, cH.r)(ye),
          Me = null !== (ee = null === (ie = this.forging) || void 0 === ie ? void 0 : ie.preview) && void 0 !== ee ? ee : null === be ? null : this.preview(be);
        return {
          enabled: this.received,
          open: this.open,
          slots: cH.n.map((ee => ({
            kind: ee,
            label: this.translate(rH[ee]),
            parts: this.partsFor(ee)
          }))),
          coalOwned: this.coal,
          preview: Me,
          unformedSword: cH.k[null !== (He = this.selected.Blade) && void 0 !== He ? He : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((ee => ee > 0)),
          canForge: null !== Me && !Me.coalShort && !this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          forging: null === this.forging ? null : {
            id: this.forging.id,
            preview: this.forging.preview
          },
          arriving: null === this.arriving ? null : {
            id: this.arriving.id,
            sameSword: this.arriving.sameSword
          }
        }
      }
      preview(ee) {
        return {
          name: ee.displayName,
          lore: ee.lore,
          baseSword: ee.baseSword,
          enchantmentTier: ee.enchantmentTier,
          tier: Number(ee.enchantmentTier.slice(-1)),
          named: ee.named,
          stats: this.stats(ee),
          effects: ee.effects,
          coalCost: ee.coalCost,
          coalShort: null === this.forging && ee.coalCost > this.coal
        }
      }
      partsFor(ee) {
        const ie = [];
        for (const ye of cH.g) {
          var He;
          const be = (0, cH.v)(ye, ee),
            Me = null !== (He = this.owned[be]) && void 0 !== He ? He : 0;
          Me > 0 && ie.push({
            material: ye,
            itemName: be,
            owned: Me,
            selected: this.selected[ee] === ye,
            placeholder: !1
          })
        }
        if (0 === ie.length) {
          const He = cH.g[0];
          ie.push({
            material: He,
            itemName: (0, cH.v)(He, ee),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return ie
      }
      stats(ee) {
        const ie = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${ee.powerMultiplier.toFixed(2)}`,
          better: ee.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${ee.damageMultiplier.toFixed(2)}`,
          better: ee.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/ee.cooldownMultiplier).toFixed(2)}`,
          better: ee.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${ee.knockbackMultiplier.toFixed(2)}`,
          better: ee.knockbackMultiplier > 1
        }];
        return ee.reachBonus > 0 && ie.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${ee.reachBonus.toFixed(1)}`,
          better: !0
        }), ee.damageReduction > 0 && ie.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*ee.damageReduction)}%`,
          better: !0
        }), ie
      }
      selectedParts() {
        const {
          Blade: ee,
          Guard: ie,
          Handle: He
        } = this.selected;
        return null === ee || null === ie || null === He ? null : {
          blade: ee,
          guard: ie,
          handle: He
        }
      }
      keepSelectionOwned(ee) {
        for (const He of cH.n) {
          var ie;
          const ye = this.selected[He];
          if (null !== ye && (null !== (ie = this.owned[(0, cH.v)(ye, He)]) && void 0 !== ie ? ie : 0) > 0) continue;
          if (!ee) {
            this.selected[He] = null;
            continue
          }
          const be = [...cH.g].reverse().find((ee => {
            var ie;
            return (null !== (ie = this.owned[(0, cH.v)(ee, He)]) && void 0 !== ie ? ie : 0) > 0
          }));
          this.selected[He] = null !== be && void 0 !== be ? be : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const ey = "skyblockSmugglerView",
      iy = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Hy extends Fe {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(ee, He, ye), this.translate = ie, this.requestBuy = be, this.now = Me, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = ee => ee, this.onBought = null, this.buy = ee => {
          const ie = this.deals[ee];
          void 0 !== ie && !this.isPending() && this.open && !this.soldOut.has(ee) && this.canAfford(ie) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, ee))
        }, this.snapshot = this.buildSnapshot()
      }
      DR(ee) {
        if (this.received = !0, this.day = ee.smugglerDay, this.deals = ee.smugglerDeals, this.rivets = ee.smugglerRivetsOwned, this.crests = ee.smugglerCrestsOwned, this.soldOut = new Set(ee.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + ee.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === ee.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = ee.smugglerBoughtSlot, null !== ee.smugglerBoughtSlot) {
          var ie, He;
          const ye = this.deals[ee.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === ye ? "" : this.dealName(ye),
              amount: String(null !== (ie = null === ye || void 0 === ye ? void 0 : ye.smugglerDealAmount) && void 0 !== ie ? ie : 0)
            }
          }, this.boughtCount++, null === (He = this.onBought) || void 0 === He || He.call(this)
        } else null !== ee.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: ee.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, void 0 !== He && (this.itemName = He), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(ee) {
        if (null !== ee.smugglerDealUniqueName) return ee.smugglerDealUniqueName;
        const ie = iy[ee.smugglerDealItem];
        return void 0 === ie ? this.itemName(ee.smugglerDealItem) : this.translate(ie)
      }
      canAfford(ee) {
        return ee.smugglerDealRivets <= this.rivets && ee.smugglerDealCrests <= this.crests
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      startCountdown() {
        this.stopCountdown(), this.countdown = setInterval((() => {
          this.emit()
        }), 15e3)
      }
      stopCountdown() {
        null !== this.countdown && (clearInterval(this.countdown), this.countdown = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      rotatesText() {
        const ee = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return ee <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : ee < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(ee)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(ee / 60)),
          minutes: String(ee % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((ee, ie) => ({
            slot: ie,
            itemName: ee.smugglerDealItem,
            displayName: this.dealName(ee),
            enchantmentTier: ee.smugglerDealEnchantmentTier,
            amount: ee.smugglerDealAmount,
            rivets: ee.smugglerDealRivets,
            crests: ee.smugglerDealCrests,
            affordable: this.canAfford(ee),
            soldOut: this.soldOut.has(ie),
            justBought: this.boughtSlot === ie
          }))),
          rivetsOwned: this.rivets,
          crestsOwned: this.crests,
          rotatesText: this.received ? this.rotatesText() : "",
          pending: this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          boughtCount: this.boughtCount
        }
      }
      dispose() {
        this.received = !1, this.clearReplyTimeout(), this.stopCountdown(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const yy = "skyblockPassageView",
      by = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function My(ee, ie) {
      return ee(by[ie])
    }

    function Ky(ee, ie, He, ye) {
      const be = Math.ceil((He - ye) / 864e5),
        Me = My(ee, ie);
      return be > 1 ? ee("skyblockGame:passageNextDays", {
        phase: Me,
        days: String(be)
      }) : ee("skyblockGame:passageNextSoon", {
        phase: Me
      })
    }
    class Uy extends Fe {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(ee, He, ye), this.translate = ie, this.now = be, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = ee => ee, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      DR(ee) {
        this.message = ee, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, void 0 !== He && (this.itemName = He), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(ee) {
        return {
          itemName: ee.passageFish,
          displayName: this.itemName(ee.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(ee.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const ee = this.message;
        return null === ee ? {
          enabled: !1,
          open: !1,
          phase: "new",
          phaseName: "",
          visitors: [],
          resting: null,
          nextPhase: "waxing",
          next: ""
        } : {
          enabled: !0,
          open: this.open,
          phase: ee.passagePhase,
          phaseName: My(this.translate, ee.passagePhase),
          visitors: ee.passageVisitors.map((ee => this.describe(ee))),
          resting: this.describe(ee.passageResting),
          nextPhase: ee.passageNextPhase,
          next: Ky(this.translate, ee.passageNextPhase, ee.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Fy = He(39370);
    const Jy = "skyblockKeepersChairView";
    class oy extends Fe {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Fy.e;
        super(ee, He, ye), this.translate = ie, this.requestAim = be, this.now = Me, this.pacer = Ke, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = ee => ee, this.aim = ee => {
          !this.awaitingReply && this.open && this.atChair && ee !== this.favoured && (null === ee || this.islands.some((ie => ie.keepersChairIslandId === ee && ie.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== ee && void 0 !== ee ? ee : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Ke.subscribe((() => {
          this.emit()
        }))
      }
      DR(ee) {
        var ie, He;
        this.received = !0;
        const ye = this.favoured,
          be = this.atChair;
        var Me;
        return this.islands = ee.keepersChairIslands, this.favoured = ee.keepersChairFavoured, this.passage = null !== (ie = ee.keepersChairPassage) && void 0 !== ie ? ie : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (He = ee.keepersChairAtChair) || void 0 === He || He, "place" === ee.keepersChairMessageKind ? (!be && this.atChair && "refused" === (null === (Me = this.status) || void 0 === Me ? void 0 : Me.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === ee.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== ee.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: ee.keepersChairRefusalKey,
          island: null
        } : this.favoured !== ye && (this.status = null === this.favoured ? {
          tone: "aimed",
          key: "skyblockGame:keepersChairRestedStatus",
          island: null
        } : {
          tone: "aimed",
          key: "skyblockGame:keepersChairAimedStatus",
          island: this.favoured
        }, this.aimedCount++), this.emit()) : this.emit()))
      }
      isAtChair() {
        return this.atChair
      }
      receivePassage(ee) {
        this.received && (this.passage = ee, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, void 0 !== He && (this.itemName = He), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.aimedCount = 0
      }
      isPending() {
        return this.awaitingReply || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      islandName(ee) {
        const ie = this.islands.find((ie => ie.keepersChairIslandId === ee));
        return void 0 === ie ? ee : this.translate(ie.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const ee = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          ie = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((ee => {
            const ie = ee.keepersChairFeaturedFish;
            return {
              id: ee.keepersChairIslandId,
              name: this.translate(ee.keepersChairIslandNameKey),
              relit: ee.keepersChairIslandRelit,
              featuredFish: null === ie ? null : {
                itemName: ie,
                displayName: this.itemName(ie)
              },
              favoured: ee.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === ee ? null : {
            tone: ee.tone,
            text: this.translate(ee.key, null === ee.island ? void 0 : {
              island: this.islandName(ee.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === ie ? null : {
            phase: ie.keepersChairPassagePhase,
            phaseName: My(this.translate, ie.keepersChairPassagePhase),
            nextPhase: ie.keepersChairPassageNextPhase,
            next: Ky(this.translate, ie.keepersChairPassageNextPhase, ie.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Ry = "skyblockReachLogView",
      ky = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      qy = "Caught Fish",
      fy = [1, 2, 4];

    function Ty(ee, ie) {
      return ee.map((ee => ({
        ...ee,
        reachLogPageFish: ee.reachLogPageFish.map((ee => ({
          ...ee,
          reachLogFishFresh: ie(ee)
        })))
      })))
    }
    class py extends Fe {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Fy.e;
        super(ee, He, ye), this.translate = ie, this.requestOpen = be, this.pacer = Me, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = ee => ee, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = ee => {
          this.pages.some((ie => ie.reachLogIslandId === ee)) && (this.selected = ee, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Me.subscribe((() => {
          this.emit()
        }))
      }
      DR(ee) {
        if (this.received = !0, "status" === ee.reachLogMessageKind) return !0 === ee.reachLogNews && this.markNews(), this.serverFresh = ee.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const ie = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== ee.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Ty(ee.reachLogPages, (ee => ee.reachLogFishFresh || this.heldFresh.has(ee.reachLogFishItem))), this.letGoShown = ee.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, ie) this.showPages();
          else {
            for (const ee of this.pages)
              for (const ie of ee.reachLogPageFish) ie.reachLogFishFresh && this.heldFresh.add(ie.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, this.pageViews = null, void 0 !== He && (this.itemName = He), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Ty(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var ee, ie, He, ye;
        const be = this.pages.find((ee => ee.reachLogPageFish.some((ee => ee.reachLogFishFresh))));
        if (void 0 !== be) return be.reachLogIslandId;
        if (null !== this.selected && this.pages.some((ee => ee.reachLogIslandId === this.selected))) return this.selected;
        return null !== (ee = null !== (ie = null === (He = this.pages.filter((ee => ee.reachLogIslandAwake)).at(-1)) || void 0 === He ? void 0 : He.reachLogIslandId) && void 0 !== ie ? ie : null === (ye = this.pages[0]) || void 0 === ye ? void 0 : ye.reachLogIslandId) && void 0 !== ee ? ee : null
      }
      markNews() {
        this.newsToken++, this.news = !0, this.clearNewsTimeout(), this.newsTimeout = setTimeout((() => {
          this.newsTimeout = null, this.news = !1, this.emit()
        }), 1200)
      }
      clearNewsTimeout() {
        null !== this.newsTimeout && (clearTimeout(this.newsTimeout), this.newsTimeout = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          pending: this.awaitingReply || this.pacer.isPacing(),
          freshCount: this.serverFresh + this.heldFresh.size,
          news: this.news,
          newsToken: this.newsToken,
          selected: this.selected,
          letGoShown: this.letGoShown,
          pages: this.pageViews ??= this.buildPages()
        }
      }
      buildPages() {
        return this.pages.map((ee => {
          var ie;
          return {
            id: ee.reachLogIslandId,
            name: this.translate(ee.reachLogIslandNameKey),
            awake: ee.reachLogIslandAwake,
            gold: ee.reachLogPageGold,
            caught: ee.reachLogPageFish.filter((ee => ee.reachLogFishCaught && !ee.reachLogFishVisitor)).length,
            total: ee.reachLogPageFish.filter((ee => !ee.reachLogFishVisitor)).length,
            fish: ee.reachLogPageFish.map((ee => {
              const ie = ee.reachLogFishBestKg;
              return {
                itemName: ee.reachLogFishItem,
                name: ee.reachLogFishCaught ? this.itemName(ee.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: ee.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / ee.reachLogFishChance))
                }),
                best: ee.reachLogFishCaught ? null === ie ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: ie.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: ee.reachLogFishMarks,
                ribbons: fy.map((ie => 0 !== (ee.reachLogFishRibbons & ie))),
                glimmer: 0 !== (8 & ee.reachLogFishRibbons),
                halo: 0 !== (32 & ee.reachLogFishRibbons),
                fresh: ee.reachLogFishFresh,
                visitor: ee.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (ie = ee.reachLogPageReturner) && void 0 !== ie ? ie : null)
          }
        }))
      }
      buildReturner(ee) {
        return null === ee ? null : {
          itemName: ee.reachLogReturnerFishItem,
          line: this.translate(ee.reachLogReturnerLineKey, {
            name: this.translate(ee.reachLogReturnerNameKey),
            trinket: this.translate(ee.reachLogReturnerTrinketKey)
          }),
          back: ee.reachLogReturnerBack
        }
      }
      receivePassagePhase(ee) {
        null !== this.passagePhase && this.passagePhase !== ee && (this.pagesCurrent = !1), this.passagePhase = ee
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Xy = "skyblockLampLightView";
    class zy {
      constructor(ee, ie, He, ye) {
        this.yR = ee, this.translate = ie, this.requestCommand = He, this.pacer = ye, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.xf = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = ee => {
          ee ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = ee => {
          this.send(`buy ${ee}`)
        }, this.socket = ee => {
          this.send(`socket ${null!==ee&&void 0!==ee?ee:Ve}`)
        }, this.wearTint = ee => {
          this.send(`tint ${null!==ee&&void 0!==ee?ee:Ve}`)
        }, this.setSituation = ee => {
          this.situation = ee, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ye.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = ye.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      DR(ee) {
        if (this.message = ee, null !== ee.lampLightShop && (this.shop = ee.lampLightShop), "open" === ee.lampLightKind && (this.refusalKey = null), "reply" === ee.lampLightKind) {
          var ie;
          const be = null !== (ie = ee.lampLightReplyTag) && void 0 !== ie ? ie : null,
            Me = null !== be && be === this.offTag;
          var He, ye;
          if (Me ? this.settleOff() : null !== be && be !== this.awaitingTag || this.settleReply(), this.refusalKey = ee.lampLightRefusalKey, null !== ee.lampLightBought && !Me) this.sparkle = {
            id: ee.lampLightBought,
            count: (null !== (He = null === (ye = this.sparkle) || void 0 === ye ? void 0 : ye.count) && void 0 !== He ? He : 0) + 1
          }
        }
        ee.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === ee.lampLightKind && (this.lastGained = ee.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(ee) {
        ee !== this.atChair && (this.atChair = ee, ee && (this.refusalKey = null), this.emit())
      }
      setTranslator(ee, ie) {
        this.translate = ee, this.locale = null !== ie && void 0 !== ie ? ie : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.xf = !0
      }
      send(ee) {
        var ie;
        if (null !== this.awaitingTag || "ready" !== (null === (ie = this.message) || void 0 === ie ? void 0 : ie.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const He = this.nextTag();
        this.awaitingTag = He, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${ee} ${He}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const ee = this.nextTag();
        this.offTag = ee, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${ee}`)
      }
      nextTag() {
        return this.lastTag = this.lastTag % 999999 + 1, this.lastTag
      }
      settleOff() {
        this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, null !== this.offTimeout && (clearTimeout(this.offTimeout), this.offTimeout = null)
      }
      settleReply() {
        this.awaitingTag = null, this.clearReplyTimeout()
      }
      isPending() {
        return null !== this.awaitingTag || this.offQueued || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      emit() {
        this.xf || (this.snapshot = this.buildSnapshot(), this.yR(this.snapshot))
      }
      formatLight(ee) {
        return Math.floor(ee).toLocaleString(this.locale)
      }
      formatPercent(ee) {
        const ie = 100 * ee;
        return ie >= 10 ? Math.round(ie).toLocaleString(this.locale) : ie.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(ee, ie) {
        if ("bite" === ee) return this.translate("skyblockGame:lampLightBite", {
          seconds: (ie.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === ee) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(ie.lampLightRareChance)
        });
        if ("notice" === ee) return null === ie.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(ie.lampLightNoticeChance)
        });
        const He = "meter" === ee ? ie.lampLightMeterCatches : ie.lampLightBloomCatches;
        return null === He ? null : this.translate("meter" === ee ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(He))
        })
      }
      oddsLines(ee, ie) {
        const He = (ee, ie) => {
            var He;
            return null !== (He = {
              bite: ie.lampLightBiteMs,
              rare: ie.lampLightRareChance,
              meter: ie.lampLightMeterCatches,
              bloom: ie.lampLightBloomCatches,
              notice: ie.lampLightNoticeChance
            } [ee]) && void 0 !== He ? He : 0
          },
          ye = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          be = [];
        for (const Me of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Ke = this.formatOdds(Me, ee),
            Ue = this.formatOdds(Me, ie);
          if (null === Ke || null === Ue || "bite" !== Me && "rare" !== Me && Ke === Ue) continue;
          const Fe = He(Me, ie) - He(Me, ee),
            Je = ye[Me] ? Fe < 0 : Fe > 0;
          be.push({
            label: Me,
            before: Ke,
            after: Ue,
            tone: Ke === Ue ? "same" : Je ? "better" : "worse"
          })
        }
        return be
      }
      charmView(ee, ie, He) {
        const ye = ee.lampLightCharmId.charAt(0).toUpperCase() + ee.lampLightCharmId.slice(1),
          be = "bloom" === this.situation;
        return {
          id: ee.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${ye}`),
          effect: this.translate(`skyblockGame:lampLightCharm${ye}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(ee.lampLightCharmCost)
          }),
          owned: ee.lampLightCharmOwned,
          affordable: He >= ee.lampLightCharmCost,
          socketed: ie.lampLightSocketed === ee.lampLightCharmId,
          lines: this.oddsLines(be ? ie.lampLightBareBloom : ie.lampLightBareOpen, be ? ee.lampLightCharmBloom : ee.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var ee, ie, He, ye;
        const be = this.message,
          Me = "ready" === (null === be || void 0 === be ? void 0 : be.lampLightStatus) ? this.shop : null,
          Ke = null !== (ee = null === be || void 0 === be ? void 0 : be.lampLightBalance) && void 0 !== ee ? ee : 0,
          Ue = this.atChair,
          Fe = "loading" === (null === be || void 0 === be ? void 0 : be.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === be || void 0 === be ? void 0 : be.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Je = "ready" !== (null === be || void 0 === be ? void 0 : be.lampLightStatus) || Ue ? null !== (ie = this.refusalKey) && void 0 !== ie ? ie : Fe : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== be && "locked" !== be.lampLightStatus,
          status: null !== (He = null === be || void 0 === be ? void 0 : be.lampLightStatus) && void 0 !== He ? He : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Ke)
          }),
          releasing: null !== (ye = null === be || void 0 === be ? void 0 : be.lampLightReleasing) && void 0 !== ye && ye,
          gained: null === be || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === be || void 0 === be ? void 0 : be.lampLightStatus) && Ue && !this.isPending(),
          situation: this.situation,
          shop: null === Me ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Me.lampLightOddsRod,
              island: this.translate(Me.lampLightIslandNameKey)
            }),
            heldRod: null !== Me.lampLightHeldRod,
            charms: Me.lampLightCharms.map((ee => this.charmView(ee, Me, Ke))),
            tints: Me.lampLightTints.map((ee => {
              const ie = ee.lampLightTintId,
                [He, ye, be] = ee.lampLightTintColour;
              return {
                id: ie,
                name: this.translate(`skyblockGame:lampLightTint${ie.charAt(0).toUpperCase()}${ie.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(ee.lampLightTintCost)
                }),
                owned: ee.lampLightTintOwned,
                affordable: Ke >= ee.lampLightTintCost,
                wearing: Me.lampLightTint === ie,
                colour: `rgb(${He}, ${ye}, ${be})`
              }
            })),
            wearingIslandColours: null === Me.lampLightTint
          },
          notice: null === Je ? null : this.translate(Je),
          sparkle: this.sparkle
        }
      }
    }
    const By = "skyblockMagmawardView";
    class Ey {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.yR = ee, this.now = ie, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = ue.map((() => 0)), this.wornAt = ue.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      DR(ee) {
        var ie, He;
        const ye = ue.map(((ie, He) => !0 === ee.magmawardPiecesWorn[He]));
        if (!ye.includes(!0)) return this.snapshot = null, void this.yR(null);
        const be = this.now(),
          Me = this.snapshot;
        null === Me && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Ke = ee.magmawardFuelCarried,
          Ue = !ye.includes(!1);
        let Fe = null !== (ie = null === Me || void 0 === Me ? void 0 : Me.pulse) && void 0 !== ie ? ie : null,
          Je = null !== (He = null === Me || void 0 === Me ? void 0 : Me.flare) && void 0 !== He ? He : null;
        ee.magmawardFuelBurned ? (Fe = "burn", Je = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = be, this.flareAt = be) : null !== Me && Ke > Me.fuel && (Fe = "gain", this.pulseToken++, this.pulseAt = be), Ue && null !== Me && !Me.fullSet && (Je = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = be, this.setLitAt = be);
        const oe = ue.map(((ee, ie) => (ye[ie] && null !== Me && !Me.pieces[ie].worn && (this.wornTokens[ie]++, this.wornAt[ie] = be), {
          itemName: ee,
          worn: ye[ie],
          wornToken: this.wornTokens[ie],
          justWorn: ye[ie] && this.isPlaying(this.wornAt[ie], be)
        })));
        this.snapshot = {
          pieces: oe,
          wornCount: ye.filter(Boolean).length,
          fullSet: Ue,
          fuel: Ke,
          fuelState: Ke <= 0 ? "empty" : Ke <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, be) ? Fe : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, be) ? Je : null,
          flareToken: this.flareToken,
          setLit: Ue && this.isPlaying(this.setLitAt, be),
          setLitToken: this.setLitToken
        }, this.yR(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.yR(null)
      }
      isPlaying(ee, ie) {
        return ie - ee < 1200
      }
    }
    const gy = "skyblockGlowtideView";
    class Oy {
      constructor(ee) {
        this.yR = ee, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = ee => {
          this.arrow = ee, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      DR(ee) {
        this.bloom = ee.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.yR(null))
      }
      afterRender(ee, ie) {
        const He = this.bloom;
        if (null === He || null === ee) return;
        const ye = He.glowtideBloomX - ee[0],
          be = He.glowtideBloomZ - ee[2],
          Me = Math.hypot(ye, be),
          Ke = this.snapshot,
          Ue = null !== Ke && void 0 !== Ke && Ke.inRange ? 1 : 0,
          Fe = Me <= 12.5 + Ue && ee[1] - He.glowtideBloomY <= 10 + Ue;
        !Fe || null !== Ke && void 0 !== Ke && Ke.inRange || this.inRangeToken++;
        const Je = {
          colour: He.glowtideBloomColour,
          inRange: Fe,
          distance: Math.round(Me),
          inRangeToken: this.inRangeToken
        };
        (null === Ke || Je.colour !== Ke.colour || Je.inRange !== Ke.inRange || !Fe && Je.distance !== Ke.distance) && (this.snapshot = Je, this.yR(Je));
        const oe = Re.c.computeShortestRotation(ie, (0, Re.Ib)([ye, 0, be]));
        null === this.arrow || Math.abs(oe - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${oe}rad)`, this.arrowTurn = oe)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.yR(null)
      }
    }
    const dy = "skyblockGlowMeterView";
    class Wy {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.yR = ee, this.now = ie, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      DR(ee) {
        const ie = this.now(),
          {
            glowMeterFill: He,
            glowMeterCapacity: ye
          } = ee,
          be = He >= ye,
          Me = this.snapshot;
        null !== Me && (be && !Me.full && (this.fullToken++, this.fullAt = ie), Me.full && !be ? (this.burstToken++, this.burstAt = ie) : He > Me.fill && (this.gainToken++, this.gainAt = ie)), this.snapshot = {
          fill: He,
          bk: ye,
          ratio: Math.min(1, Math.max(0, He / ye)),
          full: be,
          rares: ee.glowMeterRares,
          ready: be && this.isPlaying(this.fullAt, ie),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, ie),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, ie),
          gainToken: this.gainToken
        }, this.yR(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.yR(null)
      }
      isPlaying(ee, ie) {
        return ie - ee < 2e3
      }
    }
    const ty = "skyblockHushWaitView";
    class Zy {
      constructor(ee) {
        this.yR = ee, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      DR(ee) {
        let {
          hushWaitMs: ie,
          hushWaitTotalMs: He,
          hushWaitLines: ye
        } = ee;
        if (this.clearTimers(), this.token++, 0 === ye.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (ie <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: ye[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const be = Math.max(null !== He && void 0 !== He ? He : ie, ie),
          Me = be - ie,
          Ke = ee => be * ee / ye.length,
          Ue = ee => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: be,
              elapsedMs: Me,
              line: ye[ee],
              lineIndex: ee
            })
          };
        let Fe = 0;
        for (; Fe + 1 < ye.length && Ke(Fe + 1) <= Me;) Fe++;
        Ue(Fe);
        for (let Je = Fe + 1; Je < ye.length; Je++) this.later(Ke(Je) - Me, (() => {
          Ue(Je)
        }));
        this.later(ie, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(ee) {
        this.snapshot = ee, this.yR(ee)
      }
      later(ee, ie) {
        this.timers.push(setTimeout(ie, ee))
      }
      clearTimers() {
        for (const ee of this.timers) clearTimeout(ee);
        this.timers = []
      }
    }
    const wy = "skyblockTideChartsView",
      Dy = 36e5,
      Py = 864e5;

    function Ay(ee, ie, He) {
      const [ye, be, Me, Ke] = ee.tideChartArea, Ue = Math.floor(ie), Fe = Math.floor(He);
      return Ue >= ye && Ue <= Me && Fe >= be && Fe <= Ke
    }

    function Yy(ee, ie, He) {
      const [ye, be, Me, Ke] = ee.tideChartWater;
      return function(ee, ie, He, ye, be, Me) {
        const Ke = 4 - me(Math.floor(be) - (ee - He), He);
        return 5 * me(Math.floor(Me) - (ie - ye), ye) + Ke
      }(ye, be, Me, Ke, ie, He)
    }

    function Vy(ee, ie, He) {
      const ye = ee.tideCharts;
      for (let be = 0; be < ye.length; be++)
        if (Ay(ye[be], ie, He)) return ye[be];
      return null
    }

    function ay(ee, ie, He) {
      const ye = Math.max(0, ie - He);
      return ye > Py ? ee("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(ye / Py))
      }) : ye > Dy ? ee("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(ye / Dy))
      }) : ee("skyblockGame:tideChartsTurnSoon")
    }
    class cy extends Fe {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(ee, He, ye), this.translate = ie, this.now = be, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.tq = ee => {
          this.picked = ee, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      DR(ee) {
        const ie = this.message;
        if (null !== ie)
          for (const ye of ee.tideCharts) {
            var He;
            const ee = ie.tideCharts.find((ee => ee.tideChartIsland === ye.tideChartIsland)),
              be = ye.tideChartLit & ~(null !== (He = null === ee || void 0 === ee ? void 0 : ee.tideChartLit) && void 0 !== He ? He : 0);
            void 0 !== ee && 0 !== be && (this.pulse = {
              island: ye.tideChartIsland,
              cells: be,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = ee, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(ee, ie) {
        var He;
        const ye = null === this.message || Number.isNaN(ee) ? null : Vy(this.message, ee, ie),
          be = null !== (He = null === ye || void 0 === ye ? void 0 : ye.tideChartIsland) && void 0 !== He ? He : null,
          Me = null === ye ? -1 : function(ee, ie, He) {
            const [ye, be, Me, Ke] = ee.tideChartWater;
            return function(ee, ie, He, ye, be, Me, Ke) {
              return ((be - ee) / (He + Ke)) ** 2 + ((Me - ie) / (ye + Ke)) ** 2 <= 1
            }(ye, be, Me, Ke, ie, He, 2) ? Yy(ee, ie, He) : -1
          }(ye, ee, ie);
        return (be !== this.hereIsland || Me !== this.hereCell) && (this.hereIsland = be, this.hereCell = Me, null !== be && (this.lastIsland = be), !0)
      }
      afterRender(ee) {
        if (null === this.message) return;
        this.lastX = null === ee ? Number.NaN : ee[0], this.lastZ = null === ee ? Number.NaN : ee[2];
        const ie = this.locate(this.lastX, this.lastZ),
          He = this.expirePulses();
        (ie || He || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const ee = this.now();
        return !(!this.open || ee - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = ee, ay(this.translate, this.message.tideChartTurnsInMs, ee - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(ee, ie) {
        const He = null === this.message ? null : Vy(this.message, ee, ie);
        if (null === He) return;
        const ye = Yy(He, ee, ie);
        0 === (He.tideChartPreBlank & 1 << ye) && (this.cast = {
          island: He.tideChartIsland,
          cell: ye,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const ee = this.now();
        let ie = !1;
        return 0 !== this.pulse.cells && ee - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, ie = !0), null !== this.cast && ee - this.cast.atMs >= 1500 && (this.cast = null, ie = !0), ie
      }
      setTranslator(ee) {
        this.translate = ee, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(ee, ie) {
        var He;
        return null !== (He = ee.tideCharts.find((ee => ee.tideChartIsland === ie))) && void 0 !== He ? He : null
      }
      describe(ee) {
        var ie, He, ye;
        const be = ee.tideChartIsland,
          Me = [];
        for (let qe = 0; qe < 25; qe++) {
          const ie = 1 << qe;
          0 !== (ee.tideChartLit & ie) ? Me.push("lit") : 0 !== (ee.tideChartClear & ie) ? Me.push("clear") : 0 !== (ee.tideChartPreBlank & ie) ? Me.push("shore") : Me.push("water")
        }
        const Ke = function(ee) {
            let ie = 0;
            for (let He = ee >>> 0; 0 !== He; He &= He - 1) ie++;
            return ie
          }(ee.tideChartLit),
          Ue = ee.tideChartInkCount,
          Fe = this.translate(ee.tideChartIslandNameKey),
          Je = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Ke),
            ink: String(Ue)
          }),
          oe = null === ee.tideChartPictureNameKey ? null : this.translate(ee.tideChartPictureNameKey),
          Re = this.hereIsland === be && -1 !== this.hereCell ? this.hereCell : null,
          ke = [`${Fe}: ${Je}.`];
        if (null !== oe && ke.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: oe
          })), null !== Re) {
          const ee = Math.floor(Re / 5) + 1,
            ie = Re % 5 + 1;
          ke.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(ee),
            column: String(ie)
          }))
        }
        return {
          island: be,
          islandName: Fe,
          cells: Me,
          hereCell: Re,
          lit: Ke,
          ink: Ue,
          litText: Je,
          pictureName: oe,
          gridLabel: ke.join(" "),
          pulseCells: this.pulse.island === be ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (ie = this.cast) || void 0 === ie ? void 0 : ie.island) === be ? this.cast.cell : null,
          castToken: null !== (He = null === (ye = this.cast) || void 0 === ye ? void 0 : ye.token) && void 0 !== He ? He : 0
        }
      }
      buildSnapshot() {
        var ee, ie, He;
        const ye = this.message;
        if (null === ye || 0 === ye.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const be = this.findChart(ye, this.hereIsland),
          Me = null !== (ee = null !== (ie = null !== (He = this.findChart(ye, this.open ? this.picked : null)) && void 0 !== He ? He : be) && void 0 !== ie ? ie : this.findChart(ye, this.lastIsland)) && void 0 !== ee ? ee : ye.tideCharts[0],
          Ke = null === be ? null : this.describe(be);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Ke,
          card: Me === be ? Ke : this.describe(Me),
          turnsText: ay(this.translate, ye.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(ye.tideChartBookCount)
          }),
          tabs: ye.tideCharts.map((ee => ({
            island: ee.tideChartIsland,
            name: this.translate(ee.tideChartIslandNameKey),
            selected: ee.tideChartIsland === Me.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const xy = "skyblockRegularsView",
      Ly = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Cy = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function vy(ee, ie) {
      return "given" === ee ? ie.given : "owed" === ee ? ie.owed : ie.goal
    }
    class uy extends Fe {
      constructor(ee, ie, He, ye) {
        super(ee, He, ye), this.translate = ie, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = ee => ee, this.openIsland = ee => {
          this.selected = ee, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = ee => {
          this.selected = ee, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      DR(ee) {
        this.message = ee, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const ee = this.openedFromReachLog;
        return this.openedFromReachLog = !1, ee
      }
      setTranslator(ee, ie, He) {
        this.translate = ee, void 0 !== He && (this.itemName = He), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(ee, ie, He) {
        return {
          text: this.translate(vy(ee, ie), He),
          given: "given" === ee
        }
      }
      describeRegular(ee, ie) {
        const He = this.translate,
          ye = null !== ee.regularKg,
          be = ee.regularMeetings,
          Me = ye ? 0 === be ? He("skyblockGame:regularsNotMet") : 1 === be ? He("skyblockGame:regularsMeetingsOne") : He("skyblockGame:regularsMeetings", {
            count: be
          }) : "";
        return {
          id: ee.regularId,
          name: He(ee.regularNameKey),
          line: He(ee.regularLineKey),
          itemName: ee.regularFishItem,
          fishName: this.itemName(ee.regularFishItem),
          tagged: ye,
          size: null === ee.regularKg ? He("skyblockGame:regularsNotTagged") : He("skyblockGame:regularsSize", {
            kg: ee.regularKg.toFixed(1)
          }),
          meetings: Me,
          chance: He("skyblockGame:regularsChance", {
            count: ee.regularOneInCasts
          }),
          resting: ee.regularRestingToday,
          gifts: [{
            text: He("skyblockGame:regularsGiftFlare"),
            given: be >= 3
          }, this.describeGift(ee.regularTintGift, Ly, {
            tint: He(ee.regularTintNameKey)
          })],
          history: [...ee.regularHistory].reverse().map((ee => {
            const ye = ee.regularMeetingKg.toFixed(1),
              be = ie - ee.regularMeetingDay;
            return be <= 0 ? He("skyblockGame:regularsToday", {
              kg: ye
            }) : He("skyblockGame:regularsDaysAgo", {
              days: be,
              kg: ye
            })
          }))
        }
      }
      describeIsland(ee, ie) {
        return {
          id: ee.regularsIslandId,
          name: this.translate(ee.regularsIslandNameKey),
          charm: this.describeGift(ee.regularsCharmGift, Cy, {
            charm: this.translate(ee.regularsCharmNameKey)
          }),
          regulars: ee.regularsList.map((ee => this.describeRegular(ee, ie)))
        }
      }
      buildSnapshot() {
        var ee, ie, He, ye;
        const be = this.message;
        if (null === be) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Me = be.regularsIslands.map((ee => this.describeIsland(ee, be.regularsToday))),
          Ke = null !== (ee = null !== (ie = null === (He = Me.find((ee => ee.id === this.selected))) || void 0 === He ? void 0 : He.id) && void 0 !== ie ? ie : null === (ye = Me[0]) || void 0 === ye ? void 0 : ye.id) && void 0 !== ee ? ee : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Ke,
          islands: Me
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const my = "skyblockHiddenWatersView";
    class ly {
      constructor(ee) {
        this.yR = ee, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      DR(ee) {
        this.snapshot = function(ee) {
          const [ie, He] = ee.hiddenWatersMapSize, ye = (ee, ye) => ({
            left: 1 - ee / ie,
            top: ye / He
          }), be = new Map;
          for (const [Ke, Ue] of ee.hiddenWatersGlimpses) {
            var Me;
            const ee = null !== (Me = be.get(Ke)) && void 0 !== Me ? Me : [];
            ee.push(Ue), be.set(Ke, ee)
          }
          return {
            found: ee.hiddenWatersFound,
            total: ee.hiddenWatersTotal,
            aspect: He / ie,
            pins: ee.hiddenWatersPins.map((ee => {
              let [ie, He] = ee;
              return ye(ie, He)
            })),
            islands: ee.hiddenWatersIslands.map((ee => {
              let [be, Me, Ke, Ue] = ee;
              const {
                left: Fe,
                top: Je
              } = ye(Ke + 1, Me);
              return {
                left: Fe,
                top: Je,
                width: (Ke + 1 - be) / ie,
                height: (Ue + 1 - Me) / He
              }
            })),
            glimpses: be
          }
        }(ee), this.yR(this.snapshot)
      }
    }
    const Sy = "skyblockDialogueView";
    class ny extends Fe {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(ee, He, ye), this.translate = ie, this.requestDialogue = be, this.now = Me, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = ee => {
          this.selection = {
            kind: "quest",
            questId: ee
          }, this.request(), this.show()
        }, this.selectCharacter = ee => {
          this.selection = {
            kind: "character",
            npcId: ee
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      DR(ee) {
        this.received = !0, this.scripts = ee.questDialogueScripts, this.speakers = new Map(ee.questDialogueSpeakers.map((ee => [ee.dialogueSpeakerId, ee]))), this.emit()
      }
      setTranslator(ee) {
        this.translate = ee, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const ee = this.now();
        ee >= this.requestAvailableAt && (this.requestAvailableAt = ee + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var ee;
        const ie = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...ie,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const He = this.selection;
        if ("quest" === He.kind) {
          const ee = this.scripts.find((ee => ee.dialogueQuestId === He.questId));
          return {
            ...ie,
            characters: [],
            questFocus: He.questId,
            conversations: ee ? [this.conversation(ee)] : []
          }
        }
        const ye = [];
        for (let Me = this.scripts.length - 1; Me >= 0; Me--) {
          const ee = this.scripts[Me].dialogueLines;
          for (let ie = ee.length - 1; ie >= 0; ie--) ye.includes(ee[ie].dialogueSpeakerId) || ye.push(ee[ie].dialogueSpeakerId)
        }
        const be = null !== He.npcId && ye.includes(He.npcId) ? He.npcId : null !== (ee = ye[0]) && void 0 !== ee ? ee : null;
        return {
          ...ie,
          characters: ye.map((ee => {
            var ie, He;
            return {
              id: ee,
              styling: null !== (ie = null === (He = this.speakers.get(ee)) || void 0 === He ? void 0 : He.dialogueSpeakerStyling) && void 0 !== ie ? ie : ee,
              selected: ee === be
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((ee => ee.dialogueLines.some((ee => ee.dialogueSpeakerId === be)))).map((ee => this.conversation(ee))).reverse()
        }
      }
      conversation(ee) {
        let ie = null;
        return {
          questId: ee.dialogueQuestId,
          questName: this.translate(ee.dialogueQuestNameKey),
          completed: ee.dialogueQuestCompleted,
          lines: ee.dialogueLines.map(((ee, He) => {
            var ye;
            const be = ee.dialogueSpeakerId === ie || null === (ye = this.speakers.get(ee.dialogueSpeakerId)) || void 0 === ye ? void 0 : ye.dialogueSpeakerStyling;
            return ie = ee.dialogueSpeakerId, {
              key: He,
              display: {
                line: {
                  translationKey: ee.dialogueLineKey,
                  params: this.params(ee.dialogueLineParams)
                },
                speakerName: be,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(ee) {
        if (void 0 !== ee) return Object.fromEntries(Object.entries(ee).map((ee => {
          let [ie, He] = ee;
          return [ie, "string" === typeof He ? He : this.translate(He.translationKey)]
        })))
      }
    }
    var jy = He(602),
      sy = He(1207),
      Iy = He(97);
    const hy = "skyblockAutographsView";

    function Ny(ee) {
      const ie = jy.o[ee];
      return {
        label: ie.chatTag.map((ee => ee.str)).join(""),
        icon: ie.icon,
        colour: ie.mainRGB
      }
    }
    class Gy extends Fe {
      constructor(ee) {
        let ie = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = ie, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      DR(ee) {
        this.signatures = ee.autographSignatures, ee.autographOpen ? this.show() : this.emit()
      }
      setTranslator(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = ie, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var ee;
        const ie = null !== (ee = this.signatures) && void 0 !== ee ? ee : [],
          He = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          ye = [...ie].sort(((ee, ie) => Number(null !== ie.autographRank) - Number(null !== ee.autographRank) || ie.autographSignedAtMs - ee.autographSignedAtMs)).map((ee => ({
            key: `${ee.autographSignedAtMs}|${ee.autographSignerName}`,
            name: (0, sy.e)(ee.autographSignerName, !Iy.featureFlags.canSeeRealPlayerNames),
            rank: null === ee.autographRank ? null : Ny(ee.autographRank),
            signedOn: He.format(ee.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: ye,
          total: ye.length,
          rankTotal: ye.filter((ee => null !== ee.rank)).length
        }
      }
    }
    const ry = "skyblockHudView",
      Qy = () => {},
      eb = {
        getItem: () => null,
        setItem: Qy,
        removeItem: Qy
      };
    class ib {
      constructor(ee) {
        let {
          translate: ie,
          translateWithIcons: He,
          setMenuOpen: ye = Qy,
          dismissMenu: be = () => {
            ye(!1)
          },
          publishSkills: Me = Qy,
          publishQuests: Ke = Qy,
          publishQuestNotification: Ue = Qy,
          publishDungeons: Fe = Qy,
          publishCollections: Je = Qy,
          publishMap: Re = Qy,
          publishHud: ke = Qy,
          publishPortalTransit: qe = Qy,
          publishDailyReward: fe = Qy,
          publishMailbox: Te = Qy,
          publishQuestGraph: pe = Qy,
          publishForge: Xe = Qy,
          publishSmuggler: ze = Qy,
          publishKeepersChair: Be = Qy,
          publishReachLog: Ee = Qy,
          publishLampLight: Oe = Qy,
          publishMagmaward: de = Qy,
          publishGlowtide: We = Qy,
          publishGlowMeter: te = Qy,
          publishHushWait: Ze = Qy,
          publishPassage: we = Qy,
          publishTideCharts: De = Qy,
          publishRegulars: Pe = Qy,
          publishHiddenWaters: Ae = Qy,
          publishDialogue: Ye = Qy,
          publishAutographs: Ve = Qy,
          isLoadingScreenUp: ae = () => !1,
          onDailyRewardCoinLanded: ce = Qy,
          onDailyRewardStarted: xe = Qy,
          onDailyRewardFinished: Le = Qy,
          onDailyRewardItemLanded: Ce = Qy,
          onMailboxStarted: ve = Qy,
          journeyStorage: ue = eb,
          requestTracking: me = Qy,
          requestTravel: le = Qy,
          requestDungeonEnter: Se = Qy,
          requestQuestJump: ne = Qy,
          requestQuestArrive: je = Qy,
          requestForge: se = Qy,
          requestSmuggle: Ie = Qy,
          requestKeepersChairAim: he = Qy,
          requestReachLogOpen: Ne = Qy,
          requestLampLight: Ge = Qy,
          requestDialogue: re = Qy
        } = ee;
        this.navigation = void 0, this.map = void 0, this.compass = new ge, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Fy.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = ee => ee, this.close = () => {
          for (const ee of this.panels) ee.close()
        }, this.setMenuOpen = ye, this.publishHud = ke, this.portalTransit = new gH(qe, ue), this.magmaward = new Ey(de), this.glowtide = new Oy(We), this.glowMeter = new Wy(te), this.hushWait = new Zy(Ze), this.dailyReward = new WH(fe, (() => ae() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (ee => {
          this.quests.setNotificationsHeld(ee)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), ce, xe, Le, Ce);
        const Qe = ee => {
          this.panels.some((ee => ee.isOpen())) || (ee ? be() : this.setMenuOpen(!1))
        };
        this.skills = new mi(Me, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), ie, void 0, void 0, Qe), this.quests = new si(Ke, me, ie, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Qe, Ue), this.dungeons = new Gi(Fe, ie, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Qe, Se), this.collections = new zH(Je, ie, (() => {
          this.beforePanelOpen(this.collections)
        }), Qe), this.map = new oe(Re, le, ie, (() => {
          this.beforePanelOpen(this.map)
        }), Qe), this.questGraph = new aH(pe, ie, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Qe, ne, je, ue), this.forge = new QH(Xe, ie, (() => {
          this.beforePanelOpen(this.forge)
        }), Qe, se), this.smuggler = new Hy(ze, ie, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Qe, Ie), this.lampLight = new zy(Oe, ie, Ge, this.commandPacer), this.keepersChair = new oy(Be, ie, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (ee => {
          this.lampLight.onChairClosed(), Qe(ee)
        }), he, Date.now, this.commandPacer), this.reachLog = new py(Ee, ie, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Qe, Ne, this.commandPacer), this.passage = new Uy(we, ie, (() => {
          this.beforePanelOpen(this.passage)
        }), Qe), this.tideCharts = new cy(De, ie, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Qe), this.regulars = new uy(Pe, ie, (() => {
          this.beforePanelOpen(this.regulars)
        }), (ee => {
          this.regulars.takeReturnToReachLog() && !ee && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Qe(ee)
        })), this.hiddenWaters = new ly(Ae), this.dialogue = new ny(Ye, ie, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Qe, re), this.autographs = new Gy(Ve, (() => {
          this.beforePanelOpen(this.autographs)
        }), Qe), this.mailbox = new DH(Te, (() => ae() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), ve), this.quests.translateWithIcons = null !== He && void 0 !== He ? He : null, this.skills.onLevelUp = ee => {
          this.quests.notify(ee)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new vi(this.map, this.quests, this.compass, ie)
      }
      getHudSnapshot() {
        const ee = this.hudSnapshot,
          ie = this.dailyReward.getHeldCoins();
        return null === ee || ie <= 0 || !("hudPurseCoins" in ee) ? ee : {
          ...ee,
          hudPurseCoins: Math.max(0, ee.hudPurseCoins - ie)
        }
      }
      receiveHud(ee) {
        this.hudSnapshot = ee, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(ee) {
        this.setMenuOpen(!0);
        const ie = ee === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = ee;
        for (const He of this.panels) He === ee || ie && He === this.reachLog || He.close();
        this.openingPanel = null
      }
      setTranslator(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie => this.resolveItemName(ie, ee);
        this.quests.translateWithIcons = null !== He && void 0 !== He ? He : null, this.navigation.setTranslator(ee, ie), this.lampLight.setTranslator(ee, ie), this.mailbox.setItemName(ye);
        for (const be of this.panels) be.setTranslator(ee, ie, ye)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const ee of this.panels) ee.dispose()
      }
    }
    var Hb = He(1053),
      yb = He.n(Hb),
      bb = He(18),
      Mb = He(37420),
      Kb = He(3760),
      Ub = He(1970),
      Fb = He(1956),
      Jb = He(34905),
      ob = He(1127),
      Rb = He(1432),
      kb = He(1228);

    function qb(ee) {
      let {
        controller: ie,
        minimap: He,
        children: ye
      } = ee;
      const be = (0, Rb.j)(ry, ie.getHudSnapshot()),
        [Me, Ke] = (0, de.useState)(ie.skills.getSnapshot().overallLevel);
      (0, Rb.f)(ui, (ee => {
        Ke(ee.overallLevel)
      }));
      const Ue = (0, de.useRef)(null);
      (0, Rb.f)(dH, (ee => {
        ! function(ee, ie) {
          if (null === ee || "function" !== typeof ee.animate) return;
          const He = ie ? 1.35 : 1.15;
          ee.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${He})`
          }, {
            transform: "scale(1)"
          }], {
            duration: ie ? 320 : 160,
            easing: "ease-out"
          }), ee.classList.toggle("Receiving", !ie), ie && (ee.classList.remove("Shine"), ee.offsetWidth, ee.classList.add("Shine"))
        }(Ue.current, ee)
      }));
      const {
        t: Fe
      } = (0, ob.v)(), {
        isTouchScreen: Je
      } = (0, bb.m)(["isTouchScreen"]), [oe, ke] = (0, de.useState)(null);
      return (0, Kb.i)(oe, ".SkyblockRightHud"), null !== be || He ? (0, kb.jsx)(Mb.d, {
        placement: "topRight",
        children: (0, kb.jsxs)("div", {
          className: yb()("SkyblockRightHud", {
            TouchScreen: Je
          }),
          children: [He, null !== be && (0, kb.jsxs)("div", {
            ref: ke,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in be ? (0, kb.jsx)("div", {
              className: "SkyblockHudHelp",
              children: be.hudHelpText
            }) : (0, kb.jsxs)(kb.Fragment, {
              children: [(0, kb.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, kb.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, kb.jsx)("strong", {
                    style: {
                      color: Re.L.cyanUiText
                    },
                    children: Fe(be.hudZoneNameKey)
                  }), null !== Me && (0, kb.jsx)("span", {
                    style: {
                      color: Re.L.goldUiText
                    },
                    children: Fe("skyblockGame:level", {
                      level: (0, Jb.h)(Me)
                    })
                  })]
                }), (0, kb.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Ue,
                  children: [(0, kb.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, kb.jsx)(Ub.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Jb.h)(be.hudPurseCoins)]
                })]
              }), be.hudClockText.length > 0 && (0, kb.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, kb.jsx)(Fb.e, {
                  text: be.hudClockText
                })
              })]
            }), ye, "hudZoneNameKey" in be && (0, kb.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }
    var fb = He(39376);

    function Tb(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)();
      return (0, kb.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: ie.display.mountPlayer,
        title: He("skyblockGame:mapYouAreHere"),
        children: (0, kb.jsx)(fb.b, {
          icon: "player"
        })
      })
    }
    const pb = He(39382),
      Xb = Object.fromEntries(pb.keys().map((ee => [ee.replace(/^\.\/(.*)\.png$/, "$1"), pb(ee)])));

    function zb(ee, ie) {
      var He;
      return null !== (He = Xb[ee]) && void 0 !== He ? He : Xb[ie]
    }

    function Bb(ee) {
      let {
        imageKey: ie,
        fallbackImageKey: He,
        geometryKey: ye,
        alt: be,
        className: Me
      } = ee;
      const [Ke, Ue] = (0, de.useState)((() => function(ee, ie) {
        return [{
          id: 0,
          imageKey: ee,
          geometryKey: ie,
          phase: "shown"
        }]
      }(ie, ye))), Fe = function(ee, ie, He) {
        const ye = ee[ee.length - 1];
        if (ye.imageKey === ie && ye.geometryKey === He) return ee;
        const be = {
          id: ye.id + 1,
          imageKey: ie,
          geometryKey: He,
          phase: "entering"
        };
        return ye.geometryKey === He ? [{
          ...ye,
          phase: "leaving"
        }, be] : [be]
      }(Ke, ie, ye);
      return Fe !== Ke && Ue(Fe), (0, kb.jsx)(kb.Fragment, {
        children: Fe.map((ee => (0, kb.jsx)("img", {
          className: yb()("SkyblockMapTerrainImage", Me, {
            Entering: "entering" === ee.phase,
            Leaving: "leaving" === ee.phase
          }),
          src: zb(ee.imageKey, He),
          alt: "leaving" === ee.phase ? "" : be,
          onAnimationEnd: () => {
            Ue((ie => function(ee, ie) {
              return ee.flatMap((ee => ee.id !== ie ? [ee] : "leaving" === ee.phase ? [] : [{
                ...ee,
                phase: "shown"
              }]))
            }(ie, ee.id)))
          }
        }, ee.id)))
      })
    }
    var Eb = He(4922),
      gb = He(1438);

    function Ob(ee) {
      if ("Tab" !== ee.key) return;
      const ie = Array.from(ee.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        He = ie.indexOf(document.activeElement);
      var ye;
      if (ee.shiftKey && He <= 0) ee.preventDefault(), null === (ye = ie.at(-1)) || void 0 === ye || ye.focus();
      else if (!ee.shiftKey && (-1 === He || He === ie.length - 1)) {
        var be;
        ee.preventDefault(), null === (be = ie[0]) || void 0 === be || be.focus()
      }
    }

    function db() {
      const ee = (0, de.useRef)(null);
      return (0, de.useCallback)((ie => {
        var He;
        ie ? (ee.current = document.activeElement, ie.focus()) : null === (He = ee.current) || void 0 === He || He.focus()
      }), [])
    }

    function Wb(ee) {
      let {
        percent: ie,
        label: He,
        levelUpToken: ye,
        colour: be
      } = ee;
      return (0, kb.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": He,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ie,
        "aria-valuetext": He,
        children: [(0, kb.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${ie/100})`
          }
        }), null !== ye && void 0 !== ye && (0, kb.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": be
          }
        }, ye)]
      })
    }

    function tb(ee) {
      let {
        mount: ie
      } = ee;
      return (0, kb.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: ie,
        hidden: !0,
        children: (0, kb.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, kb.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, kb.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Zb(ee, ie, He, ye) {
      (0, de.useLayoutEffect)((() => {
        const be = ee.current;
        if (!He || null === ie || void 0 === ie || !ie.local || !be) return;
        const Me = Array.from(be.querySelectorAll(".SkyblockMapNode")),
          Ke = [...ie.points, ...ie.portals],
          Ue = () => {
            const ee = be.clientWidth,
              He = be.clientHeight,
              Ue = Me.map(((be, Me) => {
                const Ue = Ke[Me];
                return {
                  id: Ue.id,
                  portal: Me >= ie.points.length,
                  x: Ue.position[0] * ee / 100,
                  y: Ue.position[1] * He / 100,
                  width: be.offsetWidth / ye,
                  height: be.offsetHeight / ye
                }
              })),
              Fe = new Map(Ke.map(((ee, ie) => [ee.id, Me[ie]])));
            for (const ie of function(ee, ie, He) {
                const ye = [],
                  be = [...ee].sort(((ee, ie) => Number(ie.portal) - Number(ee.portal) || ee.id.localeCompare(ie.id)));
                for (const Me of be) {
                  const ee = ee => Math.max(Me.width / 2, Math.min(ie - Me.width / 2, ee)),
                    be = ee => Math.max(Me.height / 2, Math.min(He - Me.height / 2, ee)),
                    Ke = [ee(Me.x)],
                    Ue = [be(Me.y)];
                  for (const ie of ye) Ke.push(ee(ie.x - (ie.width + Me.width) / 2 - 4), ee(ie.x + (ie.width + Me.width) / 2 + 4)), Ue.push(be(ie.y - (ie.height + Me.height) / 2 - 4), be(ie.y + (ie.height + Me.height) / 2 + 4));
                  let Fe = {
                      ...Me,
                      x: Ke[0],
                      y: Ue[0]
                    },
                    Je = 1 / 0,
                    oe = 1 / 0;
                  for (const ie of new Set(Ke))
                    for (const ee of new Set(Ue)) {
                      let He = 0;
                      for (const Ke of ye) He += Math.max(0, (Me.width + Ke.width) / 2 + 4 - Math.abs(ie - Ke.x)) * Math.max(0, (Me.height + Ke.height) / 2 + 4 - Math.abs(ee - Ke.y));
                      const be = (ie - Me.x) ** 2 + (ee - Me.y) ** 2;
                      (He < Je || He === Je && be < oe) && (Fe = {
                        ...Me,
                        x: ie,
                        y: ee
                      }, Je = He, oe = be)
                    }
                  ye.push(Fe)
                }
                return ye
              }(Ue, ee, He)) {
              const ee = Fe.get(ie.id);
              ee.style.left = `${ie.x}px`, ee.style.top = `${ie.y}px`
            }
          };
        Ue();
        const Fe = new ResizeObserver(Ue);
        Fe.observe(be);
        for (const ee of Me) Fe.observe(ee);
        return () => {
          Fe.disconnect()
        }
      }), [ee, ie, He, ye])
    }
    const wb = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Db = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Pb(ee, ie, He) {
      return Math.min(He, Math.max(ie, ee))
    }

    function Ab(ee, ie, He) {
      const ye = Math.min(1, He * ie / ee),
        be = Math.min(1, ee / (He * ie));
      return {
        x0: (1 - ye) / 2,
        y0: (1 - be) / 2,
        x1: (1 + ye) / 2,
        y1: (1 + be) / 2
      }
    }

    function Yb(ee, ie, He, ye) {
      const be = ie * (ye - He);
      if (be <= 1) return .5 - ie * (He + ye) / 2;
      const Me = .45 * Math.min(1, be - 1);
      return Pb(ee, 1 - ie * ye - Me, Me - ie * He)
    }

    function Vb(ee, ie) {
      const He = Pb(ee.zoom, 1, 12);
      return {
        zoom: He,
        x: Yb(ee.x, He, ie.x0, ie.x1),
        y: Yb(ee.y, He, ie.y0, ie.y1)
      }
    }

    function ab(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Db;
      const Me = Pb(ee.zoom * ie, 1, 12),
        Ke = Me / ee.zoom;
      return Vb({
        zoom: Me,
        x: He - (He - ee.x) * Ke,
        y: ye - (ye - ee.y) * Ke
      }, be)
    }

    function cb(ee, ie, He, ye) {
      const [be, Me] = (0, de.useState)(wb);
      (0, de.useEffect)((() => {
        Me(wb)
      }), [He]), (0, de.useEffect)((() => {
        const He = ee.current;
        if (!ie || !He) return;
        const be = () => Ab(He.clientWidth, He.clientHeight, ye),
          Ke = ee => {
            const ie = He.getBoundingClientRect();
            return {
              x: (ee.clientX - ie.left) / ie.width,
              y: (ee.clientY - ie.top) / ie.height
            }
          },
          Ue = new Map;
        let Fe = {
            x: 0,
            y: 0
          },
          Je = !1,
          oe = 0;
        const Re = ee => {
            ee.preventDefault();
            const ie = ee.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * ee.deltaY : ee.deltaY,
              He = Ke(ee);
            Me((ee => ab(ee, Math.exp(.0015 * -ie), He.x, He.y, be())))
          },
          ke = ee => {
            "mouse" === ee.pointerType && 0 !== ee.button || (Ue.set(ee.pointerId, Ke(ee)), 1 === Ue.size && (Fe = {
              x: ee.clientX,
              y: ee.clientY
            }, Je = !1), oe = 0)
          },
          qe = ee => {
            const ie = Ue.get(ee.pointerId);
            if (!ie) return;
            const ye = Ke(ee);
            if (Ue.set(ee.pointerId, ye), 2 === Ue.size) {
              const [ee, ie] = [...Ue.values()], He = Math.hypot(ee.x - ie.x, ee.y - ie.y);
              if (oe > 0) {
                const ye = He / oe;
                Me((He => ab(He, ye, (ee.x + ie.x) / 2, (ee.y + ie.y) / 2, be())))
              }
              return oe = He, void(Je = !0)
            }!Je && Math.hypot(ee.clientX - Fe.x, ee.clientY - Fe.y) < 4 || (Je || (Je = !0, He.setPointerCapture(ee.pointerId)), Me((ee => function(ee, ie, He) {
              let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Db;
              return Vb({
                zoom: ee.zoom,
                x: ee.x + ie,
                y: ee.y + He
              }, ye)
            }(ee, ye.x - ie.x, ye.y - ie.y, be()))))
          },
          fe = ee => {
            Ue.delete(ee.pointerId), oe = 0
          },
          Te = ee => {
            Je && (ee.stopPropagation(), ee.preventDefault(), Je = !1)
          },
          pe = new ResizeObserver((() => {
            Me((ee => Vb(ee, be())))
          }));
        return pe.observe(He), He.addEventListener("wheel", Re, {
          passive: !1
        }), He.addEventListener("pointerdown", ke), He.addEventListener("pointermove", qe), He.addEventListener("pointerup", fe), He.addEventListener("pointercancel", fe), He.addEventListener("click", Te, !0), () => {
          pe.disconnect(), He.removeEventListener("wheel", Re), He.removeEventListener("pointerdown", ke), He.removeEventListener("pointermove", qe), He.removeEventListener("pointerup", fe), He.removeEventListener("pointercancel", fe), He.removeEventListener("click", Te, !0)
        }
      }), [ee, ie, He, ye]);
      return {
        view: be,
        zoomBy: ie => {
          const He = ee.current;
          He && Me((ee => ab(ee, ie, .5, .5, Ab(He.clientWidth, He.clientHeight, ye))))
        }
      }
    }

    function xb(ee) {
      var ie, He, ye, be;
      let {
        controller: Me,
        navigation: Ke
      } = ee;
      const Ue = (0, Rb.j)(Je, Me.getSnapshot()),
        {
          t: Fe
        } = (0, ob.v)(),
        oe = db(),
        Re = Ue.presentation,
        ke = (0, de.useRef)(null),
        qe = (0, de.useRef)(null),
        fe = Boolean(Ue.open && (null === Re || void 0 === Re ? void 0 : Re.local) && Re.background),
        Te = cb(ke, fe, `${Ue.open}|${Ue.tab}|${null===Re||void 0===Re||null===(ie=Re.background)||void 0===ie?void 0:ie.geometryKey}`, null !== (He = null === Re || void 0 === Re || null === (ye = Re.background) || void 0 === ye ? void 0 : ye.ratio) && void 0 !== He ? He : 2);
      if (Zb(qe, Re, Ue.open, Te.view.zoom), !Re || !Ue.open) return null;
      const pe = Re.local ? Re.background : null,
        Xe = {
          "--map-ratio": String(null !== (be = null === pe || void 0 === pe ? void 0 : pe.ratio) && void 0 !== be ? be : 2),
          backgroundColor: null === pe || void 0 === pe ? void 0 : pe.colour
        },
        ze = {
          "--map-zoom": String(Te.view.zoom),
          transform: `translate(${100*Te.view.x}%, ${100*Te.view.y}%) scale(${Te.view.zoom})`
        };
      return (0, kb.jsx)(Eb.e, {
        show: Ue.open,
        close: Me.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: oe,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, kb.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Fe("skyblockGame:map")
              }), Re.minimap && (0, kb.jsx)("p", {
                children: Re.minimap.caption
              })]
            }), (0, kb.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((ee => (0, kb.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": ee === Ue.tab ? "true" : void 0,
                className: yb()({
                  Selected: ee === Ue.tab
                }),
                "aria-pressed": ee === Ue.tab,
                onClick: () => {
                  Me.selectTab(ee)
                },
                children: Fe("local" === ee ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, ee)))
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: Me.dismiss
            })]
          }), (0, kb.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, kb.jsxs)("div", {
              ref: ke,
              className: yb()("SkyblockMapCanvas", {
                Local: Re.local,
                Overview: !Re.local,
                Zoomed: Te.view.zoom > 1
              }),
              style: Xe,
              children: [(0, kb.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: fe ? ze : void 0,
                children: (0, kb.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: qe,
                  children: [pe && (0, kb.jsx)(Bb, {
                    className: "SkyblockMapTerrain",
                    imageKey: pe.imageKey,
                    fallbackImageKey: pe.fallbackImageKey,
                    geometryKey: pe.geometryKey,
                    alt: pe.label
                  }), Re.local && (0, kb.jsx)(tb, {
                    mount: Ke.display.mountMapSearchArea
                  }), !Re.local && (0, kb.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Re.connections.map((ee => (0, kb.jsx)("line", {
                      className: yb()({
                        Explored: ee.explored
                      }),
                      x1: ee.start[0],
                      y1: ee.start[1],
                      x2: ee.end[0],
                      y2: ee.end[1]
                    }, ee.id)))
                  }), Re.points.map((ee => {
                    const ie = !Re.local && ee.thumbnail ? Xb[ee.thumbnail] : void 0;
                    return (0, kb.jsxs)("div", {
                      className: yb()("SkyblockMapNode", {
                        Current: ee.current
                      }),
                      style: {
                        left: `${ee.position[0]}%`,
                        top: `${ee.position[1]}%`
                      },
                      children: [(0, kb.jsxs)(gb.c, {
                        className: yb()("SkyblockMapPin", {
                          Unknown: !ee.visited,
                          Current: ee.current
                        }),
                        disabled: Ue.pending,
                        onClick: () => {
                          Me.travel(ee.travelKind, ee.travelId)
                        },
                        children: [ie && (0, kb.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: ie,
                          alt: ""
                        }), !ie && (0, kb.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, kb.jsx)(fb.b, {
                            icon: ee.icon
                          })
                        }), (0, kb.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: ee.name
                        })]
                      }), ee.current && (0, kb.jsx)("span", {
                        className: yb()("SkyblockMapHereBadge", {
                          Above: ee.position[1] > 50
                        }),
                        children: Fe("skyblockGame:mapYouAreHere")
                      })]
                    }, ee.id)
                  })), Re.portals.map((ee => (0, kb.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${ee.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${ee.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, kb.jsxs)(gb.c, {
                      className: "SkyblockMapPin",
                      disabled: Ue.pending,
                      onClick: () => {
                        Me.travel(ee.travelKind, ee.travelId)
                      },
                      children: [(0, kb.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: ee.colour
                        },
                        "aria-hidden": "true",
                        children: (0, kb.jsx)(fb.b, {
                          icon: ee.icon
                        })
                      }), (0, kb.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: ee.name
                      })]
                    })
                  }, ee.id))), Re.local && (0, kb.jsx)(Tb, {
                    controller: Ke
                  })]
                })
              }), fe && (0, kb.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, kb.jsx)("button", {
                  type: "button",
                  "aria-label": Fe("skyblockGame:mapZoomIn"),
                  disabled: Te.view.zoom >= 12,
                  onClick: () => {
                    Te.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, kb.jsx)("button", {
                  type: "button",
                  "aria-label": Fe("skyblockGame:mapZoomOut"),
                  disabled: Te.view.zoom <= 1,
                  onClick: () => {
                    Te.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, kb.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Ue.feedback
              })]
            })
          }), (0, kb.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Re.progress && (0, kb.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, kb.jsx)("span", {
                children: Re.progress
              }), (0, kb.jsx)(Wb, {
                percent: Re.percent,
                label: Re.progress
              })]
            }), Re.noLandmarks && (0, kb.jsx)("span", {
              children: Fe("skyblockGame:mapNoLandmarks")
            }), Re.canTravel && (0, kb.jsx)("span", {
              className: "SkyblockMapHint",
              children: Fe("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Lb(ee) {
      let {
        view: ie,
        controller: He,
        navigation: ye
      } = ee;
      const {
        t: be
      } = (0, ob.v)(), {
        isTouchScreen: Me
      } = (0, bb.m)(["isTouchScreen"]);
      return (0, kb.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": be("skyblockGame:mapLocal"),
        children: [Me && (0, kb.jsx)(gb.c, {
          className: "SkyblockMinimapOpen",
          onClick: He.showLocal,
          children: be("skyblockGame:map")
        }), (0, kb.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: ie.colour
          },
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: ye.display.mountTerrain,
            style: {
              width: ie.width,
              height: ie.height
            },
            children: [(0, kb.jsx)(Bb, {
              imageKey: ie.imageKey,
              fallbackImageKey: ie.fallbackImageKey,
              geometryKey: ie.geometryKey,
              alt: ie.label
            }), (0, kb.jsx)(tb, {
              mount: ye.display.mountMinimapSearchArea
            }), ie.markers.map((ee => (0, kb.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${ee.position[0]}%`,
                top: `${ee.position[1]}%`,
                color: ee.colour
              },
              title: ee.name,
              children: (0, kb.jsx)(fb.b, {
                icon: ee.icon
              })
            }, ee.id)))]
          }), (0, kb.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: be("skyblockGame:mapYouAreHere"),
            children: (0, kb.jsx)(fb.b, {
              icon: "player"
            })
          })]
        }), (0, kb.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: ie.caption
        })]
      })
    }

    function Cb(ee) {
      let {
        controller: ie
      } = ee;
      return (0, kb.jsxs)("div", {
        className: "SkyblockCompass",
        ref: ie.display.mountCompass,
        children: [(0, kb.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, kb.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, kb.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function vb(ee) {
      let {
        controller: ie,
        surface: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)(), be = (0, Rb.j)(ui, ie.getSnapshot()), Me = db();
      return be.enabled ? (0, kb.jsxs)(kb.Fragment, {
        children: ["hud" === He && (0, kb.jsx)(Mb.d, {
          placement: "statBars",
          children: be.hud && (0, kb.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": be.hud.colour
            },
            children: [(0, kb.jsx)(Wb, {
              percent: be.hud.skill.percent,
              label: be.hud.skill.xp,
              levelUpToken: be.hud.levelUpToken,
              colour: be.hud.colour
            }), (0, kb.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, kb.jsxs)("span", {
                children: [be.hud.skill.label, " \xb7 ", be.hud.skill.level]
              }), (0, kb.jsx)("span", {
                children: be.hud.gain
              })]
            })]
          })
        }), "hud" === He && (0, kb.jsx)(Mb.d, {
          children: be.hud && (0, kb.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, kb.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, kb.jsx)("strong", {
                children: be.hud.skill.label
              }), (0, kb.jsx)("span", {
                children: be.hud.gain
              })]
            }), (0, kb.jsx)(Wb, {
              percent: be.hud.skill.percent,
              label: be.hud.skill.xp,
              levelUpToken: be.hud.levelUpToken,
              colour: be.hud.colour
            }), (0, kb.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, kb.jsx)("span", {
                children: be.hud.skill.level
              }), (0, kb.jsx)("span", {
                children: be.hud.skill.xp
              })]
            })]
          })
        }), "menu" === He && (0, kb.jsx)(Eb.e, {
          show: be.open,
          close: ie.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, kb.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Me,
            onKeyDown: Ob,
            children: [(0, kb.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, kb.jsxs)("div", {
                children: [(0, kb.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: ye("skyblockGame:skills")
                }), (0, kb.jsx)("p", {
                  children: ye("skyblockGame:skillsIntro")
                })]
              }), (0, kb.jsx)(gb.i, {
                padIgnore: !0,
                onClick: ie.dismiss
              })]
            }), (0, kb.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, kb.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: be.skills.map((ee => (0, kb.jsxs)(gb.c, {
                  className: yb()("SkyblockSkillCard", {
                    Selected: ee.selected
                  }),
                  ariaPressed: ee.selected,
                  onClick: () => {
                    ie.select(ee.id)
                  },
                  children: [(0, kb.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, kb.jsx)(Ub.c, {
                      itemName: ee.icon,
                      amount: 0
                    })
                  }), (0, kb.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, kb.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, kb.jsx)("strong", {
                        children: ee.label
                      }), (0, kb.jsx)("span", {
                        children: ee.level
                      })]
                    }), (0, kb.jsx)(Wb, {
                      percent: ee.percent,
                      label: `${ee.label}: ${ee.xp}`
                    }), (0, kb.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: ee.xp
                    })]
                  })]
                }, ee.id)))
              }), be.detail && (0, kb.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, kb.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, kb.jsx)(Ub.c, {
                    itemName: be.detail.icon,
                    amount: 0
                  })
                }), (0, kb.jsx)("h3", {
                  children: be.detail.label
                }), (0, kb.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: be.detail.level
                }), (0, kb.jsx)("p", {
                  children: be.detail.description
                }), (0, kb.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, kb.jsx)("strong", {
                    children: ye("skyblockGame:currentBenefit")
                  }), (0, kb.jsx)("span", {
                    children: be.detail.benefit
                  })]
                }), (0, kb.jsx)(Wb, {
                  percent: be.detail.percent,
                  label: be.detail.xp
                }), (0, kb.jsx)("p", {
                  children: be.detail.xp
                }), (0, kb.jsx)("h4", {
                  children: ye("skyblockGame:earnXp")
                }), (0, kb.jsx)("ul", {
                  children: be.detail.sources.map((ee => (0, kb.jsx)("li", {
                    children: ee
                  }, ee)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ub = He(1351),
      mb = He(5317),
      lb = He(335);

    function Sb(ee) {
      let {
        item: ie
      } = ee;
      return (0, kb.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, kb.jsx)(Ub.c, {
          itemName: ie,
          amount: 0
        })
      })
    }

    function nb(ee) {
      let {
        name: ie,
        percent: He,
        progress: ye
      } = ee;
      return (0, kb.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, kb.jsx)(Wb, {
          percent: He,
          label: `${(0,lb.yb)(ie)}: ${ye}`
        }), (0, kb.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: ye
        })]
      })
    }

    function jb(ee) {
      let {
        subquests: ie,
        showDescriptions: He = !1
      } = ee;
      return (0, kb.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: ie.map((ee => {
          const ie = He && "completed" === ee.status,
            ye = (0, kb.jsxs)("li", {
              className: yb()("SkyblockQuestStep", ee.status, {
                JustFinished: ee.justFinished,
                JustUnlocked: ee.justUnlocked
              }),
              tabIndex: ie ? 0 : void 0,
              children: [null !== ee.iconItem && (0, kb.jsx)(Sb, {
                item: ee.iconItem
              }), null === ee.iconItem && (0, kb.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === ee.status ? "\u2713" : "skipped" === ee.status ? "\u2212" : "\u25cb"
              }), (0, kb.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, kb.jsx)("strong", {
                  children: (0, kb.jsx)(mb.c, {
                    text: ee.name
                  })
                }), He && !ie && (0, kb.jsx)("span", {
                  children: (0, kb.jsx)(mb.c, {
                    text: ee.description
                  })
                }), null !== ee.barPercent && (0, kb.jsx)(nb, {
                  name: ee.name,
                  percent: ee.barPercent,
                  progress: ee.progress
                }), null === ee.barPercent && !ie && (0, kb.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: ee.statusLabel
                })]
              })]
            }, ee.id);
          return ie ? (0, kb.jsx)(ub.g, {
            delayShow: 200,
            tooltipInner: (0, kb.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, kb.jsx)("span", {
                children: (0, kb.jsx)(mb.c, {
                  text: ee.description
                })
              }), (0, kb.jsx)("strong", {
                children: ee.statusLabel
              })]
            }),
            children: ye
          }, ee.id) : ye
        }))
      })
    }

    function sb(ee) {
      let {
        quest: ie,
        select: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)(), be = ie.focusStep;
      return (0, kb.jsxs)(gb.c, {
        className: yb()("SkyblockQuestCard", {
          Selected: ie.selected,
          Tracked: ie.tracked
        }),
        onClick: () => {
          He(ie.id)
        },
        children: [(0, kb.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, kb.jsx)("strong", {
            children: (0, kb.jsx)(mb.c, {
              text: ie.name
            })
          }), ie.tracked && (0, kb.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: ye("skyblockGame:currentQuest")
          })]
        }), be && (0, kb.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== be.iconItem && (0, kb.jsx)(Sb, {
            item: be.iconItem
          }), (0, kb.jsx)(nb, {
            name: be.name,
            percent: be.barPercent,
            progress: be.progress
          })]
        }), (0, kb.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: ie.progress
        })]
      })
    }

    function Ib(ee) {
      let {
        controller: ie,
        surface: He
      } = ee;
      const ye = (0, Rb.j)(ni, ie.getSnapshot()),
        {
          t: be
        } = (0, ob.v)(),
        Me = db();
      return ye.enabled ? (0, kb.jsxs)(kb.Fragment, {
        children: ["hud" === He && (0, kb.jsx)(kb.Fragment, {
          children: ye.tracked && (0, kb.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Si,
            children: (0, kb.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [ye.trackedStepPulse > 0 && (0, kb.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, ye.trackedStepPulse), (0, kb.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: be("skyblockGame:currentQuest")
              }), (0, kb.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, kb.jsx)("strong", {
                  children: (0, kb.jsx)(mb.c, {
                    text: ye.tracked.name
                  })
                }), null !== ye.tracked.clock && (0, kb.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: ye.tracked.clock
                })]
              }), (0, kb.jsx)(jb, {
                subquests: ye.tracked.subquests
              })]
            })
          })
        }), "menu" === He && (0, kb.jsx)(Eb.e, {
          show: ye.open,
          close: ie.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, kb.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Me,
            onKeyDown: Ob,
            children: [(0, kb.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, kb.jsx)("div", {
                children: (0, kb.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: be("skyblockGame:quests")
                })
              }), (0, kb.jsx)(gb.i, {
                padIgnore: !0,
                onClick: ie.dismiss
              })]
            }), (0, kb.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, kb.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, kb.jsx)("h3", {
                  children: be("skyblockGame:current")
                }), 0 === ye.active.length && (0, kb.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: be("skyblockGame:noActiveQuests")
                }), ye.active.map((ee => (0, kb.jsx)(sb, {
                  quest: ee,
                  select: ie.select
                }, ee.id))), (0, kb.jsx)("h3", {
                  children: (0, kb.jsxs)("button", {
                    type: "button",
                    className: yb()("SkyblockQuestSectionToggle", {
                      Expanded: ye.completedExpanded
                    }),
                    "aria-expanded": ye.completedExpanded,
                    onClick: ie.toggleCompleted,
                    children: [(0, kb.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), be("skyblockGame:completed"), (0, kb.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: ye.completed.length
                    })]
                  })
                }), ye.completedExpanded && 0 === ye.completed.length && (0, kb.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: be("skyblockGame:noCompletedQuests")
                }), ye.completedExpanded && ye.completed.map((ee => (0, kb.jsx)(sb, {
                  quest: ee,
                  select: ie.select
                }, ee.id)))]
              }), ye.detail && (0, kb.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [ye.detail.completed && (0, kb.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: be("skyblockGame:completedQuest")
                }), (0, kb.jsx)("h3", {
                  children: (0, kb.jsx)(mb.c, {
                    text: ye.detail.name
                  })
                }), (0, kb.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, kb.jsx)(mb.c, {
                    text: ye.detail.description
                  })
                }), (0, kb.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [ye.detail.progress, null !== ye.detail.clock && (0, kb.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: ye.detail.clock
                  })]
                }), (0, kb.jsx)(jb, {
                  subquests: ye.detail.subquests,
                  showDescriptions: !0
                }), ye.detail.tracked && (0, kb.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: ye.detail.trackLabel
                }), !ye.detail.completed && !ye.detail.tracked && (0, kb.jsx)(gb.m, {
                  onClick: ie.trackSelected,
                  disabled: !ye.detail.canTrack,
                  children: ye.detail.trackLabel
                }), ye.detail.canViewDialogue && (0, kb.jsx)(gb.c, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: ie.viewDialogue,
                  children: be("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var hb = He(1323),
      Nb = He(2777);

    function Gb(ee, ie, He, ye, be) {
      const Me = ee => "linear" === be ? ee : {
          PH: be,
          point: ee
        },
        Ke = {};
      for (const [Ue, Fe] of ye)
        for (const [ie, He] of Object.entries(ee(Ue, Fe, Me))) Ke[ie] ??= {
          timeline: []
        }, Ke[ie].timeline.push(He);
      return {
        WH: ie,
        loop: He,
        ZH: Ke
      }
    }
    const rb = .547,
      Qb = .022,
      eM = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      iM = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function HM(ee, ie, He) {
      const {
        drop: ye = 0,
        shift: be = 0,
        torso: Me = 0,
        nod: Ke = 0,
        tilt: Ue = 0,
        legs: Fe = [0, 0],
        arms: Je = 0,
        spread: oe = 0
      } = ie, Re = rb * Math.cos(Me) - Qb * Math.sin(Me), ke = rb * Math.sin(Me) + Qb * Math.cos(Me), qe = He([0, -ye, be]);
      return {
        LowerBody: {
          timeFraction: ee,
          position: qe,
          rotation: He([0, 0, 0])
        },
        UpperBody: {
          timeFraction: ee,
          position: qe,
          rotation: He([Me, 0, Ue])
        },
        HeadMesh: {
          timeFraction: ee,
          position: He([0, Re - rb - ye, ke - Qb + be]),
          rotation: He([Me + Ke, 0, Ue])
        },
        LegLeftMesh: {
          timeFraction: ee,
          rotation: He([Fe[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: ee,
          rotation: He([Fe[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: ee,
          rotation: He([Je, 0, oe])
        },
        ArmRightMesh: {
          timeFraction: ee,
          rotation: He([Je, 0, -oe])
        }
      }
    }

    function yM(ee, ie, He) {
      return Gb(HM, ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function bM(ee) {
      return "number" === typeof ee ? [ee, ee] : ee
    }

    function MM(ee, ie, He) {
      const {
        rise: ye = 0,
        shift: be = 0,
        torso: Me = 0,
        twist: Ke = 0,
        tilt: Ue = 0,
        nod: Fe = 0,
        cock: Je = 0,
        arms: oe = 0,
        spread: Re = 0
      } = ie, [ke, qe] = bM(oe), [fe, Te] = bM(Re);
      return {
        TorsoNode: {
          timeFraction: ee,
          position: He([0, ye, be]),
          rotation: He([Me, Ke, Ue])
        },
        HeadMesh: {
          timeFraction: ee,
          rotation: He([Fe, 0, Je])
        },
        ArmLeftMesh: {
          timeFraction: ee,
          rotation: He([ke, 0, fe])
        },
        ArmRightMesh: {
          timeFraction: ee,
          rotation: He([qe, 0, -Te])
        }
      }
    }
    const KM = [1.0625, -1, 0];

    function UM(ee) {
      return "number" === typeof ee ? [ee, ee] : ee
    }

    function FM(ee, ie, He) {
      const {
        drop: ye = 0,
        shift: be = 0,
        torso: Me = 0,
        tilt: Ke = 0,
        nod: Ue = 0,
        cock: Fe = 0,
        legs: Je = [0, 0],
        arms: oe = 0,
        spread: Re = 0
      } = ie, [ke, qe] = UM(oe), [fe, Te] = UM(Re), pe = -Me, Xe = -Ke, [ze, Be, Ee] = function(ee, ie) {
        const [He, ye, be] = [-KM[0], KM[1], -KM[2]], Me = He * Math.cos(ie) - ye * Math.sin(ie), Ke = He * Math.sin(ie) + ye * Math.cos(ie);
        return [Me - He, -(Ke * Math.cos(ee) - be * Math.sin(ee) - ye), Ke * Math.sin(ee) + be * Math.cos(ee) - be]
      }(pe, Xe), ge = He([0, -ye, be]);
      return {
        TorsoNode: {
          timeFraction: ee,
          position: He([ze, Be - ye, Ee + be]),
          rotation: He([pe, 0, Xe])
        },
        HeadMesh: {
          timeFraction: ee,
          rotation: He([-Ue, 0, -Fe])
        },
        ArmLeftMesh: {
          timeFraction: ee,
          rotation: He([-ke, 0, -fe])
        },
        ArmRightMesh: {
          timeFraction: ee,
          rotation: He([-qe, 0, Te])
        },
        LegLeftMesh: {
          timeFraction: ee,
          position: ge,
          rotation: He([-Je[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: ee,
          position: ge,
          rotation: He([-Je[1], 0, 0])
        }
      }
    }
    var JM = He(37971),
      oM = He(39259),
      RM = He(39440);

    function kM(ee, ie, He) {
      var ye, be;
      const Me = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return ee + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - ee) * He
        },
        [Ke, Ue] = null !== (ye = ee.legs) && void 0 !== ye ? ye : [0, 0],
        [Fe, Je] = null !== (be = ie.legs) && void 0 !== be ? be : [0, 0];
      return {
        drop: Me(ee.drop, ie.drop),
        shift: Me(ee.shift, ie.shift),
        torso: Me(ee.torso, ie.torso),
        nod: Me(ee.nod, ie.nod),
        tilt: Me(ee.tilt, ie.tilt),
        legs: [Me(Ke, Fe), Me(Ue, Je)],
        arms: Me(ee.arms, ie.arms),
        spread: Me(ee.spread, ie.spread)
      }
    }
    const qM = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      fM = yM(4400, !0, [
        [0, qM],
        [.16, {
          ...qM,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, qM],
        [.44, {
          ...qM,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, kM(qM, eM, .7)],
        [.66, kM(qM, eM, .78)],
        [.74, kM(qM, iM, .65)],
        [.86, {
          ...qM,
          drop: .14
        }],
        [1, qM]
      ], "catmull-rom-spline"),
      TM = {
        ...qM,
        drop: .14,
        torso: .3,
        spread: .4
      },
      pM = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      XM = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      zM = {
        caveGolem: fM,
        magmaGolem: yM(3600, !0, [
          [0, TM],
          [.12, {
            ...TM,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...TM,
            tilt: -.08
          }],
          [.4, {
            ...TM,
            tilt: .06,
            drop: .11
          }],
          [.52, kM(TM, eM, .9)],
          [.62, kM(TM, iM, .8)],
          [.7, kM(TM, iM, .45)],
          [.78, kM(TM, iM, .85)],
          [.9, {
            ...TM,
            drop: .17
          }],
          [1, TM]
        ], "catmull-rom-spline"),
        frostWraith: function(ee, ie, He) {
          return Gb(MM, ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, pM],
          [.14, {
            ...pM,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...pM,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...pM,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...pM,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...pM,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...pM,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...pM,
            rise: .16,
            tilt: -.04
          }],
          [1, pM]
        ], "catmull-rom-spline"),
        tikiTerror: function(ee, ie, He) {
          return Gb(FM, ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, XM],
          [.16, {
            ...XM,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, XM],
          [.44, {
            ...XM,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.56, {
            drop: -.03,
            torso: -.28,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.64, {
            drop: -.03,
            torso: -.32,
            tilt: .05,
            nod: -.52,
            legs: [-.12, .12],
            arms: -1.5,
            spread: 1.2
          }],
          [.72, {
            drop: -.03,
            torso: -.28,
            tilt: -.05,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.86, {
            ...XM,
            drop: .1
          }],
          [1, XM]
        ], "catmull-rom-spline")
      },
      BM = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      EM = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      gM = Object.fromEntries(Object.entries(zM).map((ee => {
        let [ie, He] = ee;
        return [ie, (0, RM.c)((0, JM.e)(He), ie)]
      })));

    function OM(ee) {
      const ie = function(ee) {
        var ie;
        const He = (0, oM.d)(ee).poseRig;
        return null !== (ie = EM[ee]) && void 0 !== ie ? ie : void 0 === He ? null : BM[He]
      }(ee);
      return null === ie ? null : gM[ie]
    }

    function dM(ee) {
      return {
        "--difficulty-colour": ee
      }
    }
    const WM = (0, de.lazy)((() => (0, Nb.e)(He.e(223).then((() => He(44715))), (ee => ee.MobPreview))));

    function tM(ee) {
      var ie, He, ye;
      let {
        picker: be,
        controller: Me
      } = ee;
      const {
        t: Ke
      } = (0, ob.v)(), Ue = db(), {
        page: Fe
      } = be;
      return (0, kb.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Ue,
        onKeyDown: ee => {
          "ArrowLeft" === ee.key ? (ee.preventDefault(), ee.stopPropagation(), Me.previous()) : "ArrowRight" === ee.key ? (ee.preventDefault(), ee.stopPropagation(), Me.next()) : Ob(ee)
        },
        style: dM(Fe.colour),
        children: [(0, kb.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, kb.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: be.dungeonName
          }), (0, kb.jsx)(gb.i, {
            padIgnore: !0,
            onClick: Me.dismiss
          })]
        }), (0, kb.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, kb.jsx)(gb.c, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !be.canPrevious,
              onClick: Me.previous,
              children: (0, kb.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, kb.jsx)(hb.e, {
                  name: "angle-up"
                })
              })
            }), (0, kb.jsxs)("div", {
              className: yb()("SkyblockBossPickerBoss", {
                Locked: !Fe.unlocked
              }),
              children: [null !== Fe.bossMobType && (0, kb.jsx)(de.Suspense, {
                fallback: (0, kb.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, kb.jsx)(WM, {
                  className: "SkyblockBossPickerModel",
                  mobType: Fe.bossMobType,
                  variation: Fe.bossMobVariation,
                  animation: null !== (ie = OM(Fe.bossMobType)) && void 0 !== ie ? ie : void 0
                })
              }), null === Fe.bossMobType && (0, kb.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, kb.jsx)(gb.c, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !be.canNext,
              onClick: Me.next,
              children: (0, kb.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, kb.jsx)(hb.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, kb.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Fe.beaten && (0, kb.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Fe.label]
            }), (0, kb.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (He = Fe.bossName) && void 0 !== He ? He : "???"
            }), (0, kb.jsxs)("span", {
              className: yb()("SkyblockBossPickerRecord", {
                Locked: null !== Fe.lockedHint
              }),
              children: [null !== Fe.lockedHintHighlight && (0, kb.jsxs)(kb.Fragment, {
                children: [Fe.lockedHintHighlight.before, (0, kb.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: dM(Fe.lockedHintHighlight.colour),
                  children: [null !== Fe.lockedHintHighlight.icon && (0, kb.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, kb.jsx)(Ub.c, {
                      itemName: Fe.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Fe.lockedHintHighlight.name]
                }), Fe.lockedHintHighlight.after]
              }), null === Fe.lockedHintHighlight && (null !== (ye = Fe.lockedHint) && void 0 !== ye ? ye : Fe.summary)]
            })]
          }), (0, kb.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: be.pages.map((ee => (0, kb.jsx)("span", {
              className: yb()("SkyblockBossPickerDot", {
                Current: ee.current,
                Locked: !ee.unlocked
              }),
              style: dM(ee.colour)
            }, ee.difficulty)))
          }), (0, kb.jsx)(gb.p, {
            className: "SkyblockBossPickerFight",
            disabled: !Fe.unlocked,
            onClick: Me.enter,
            children: Ke("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function ZM(ee) {
      let {
        dungeon: ie,
        select: He
      } = ee;
      return (0, kb.jsxs)(gb.c, {
        className: yb()("SkyblockDungeonCard", {
          Selected: ie.selected
        }),
        onClick: () => {
          He(ie.id)
        },
        children: [(0, kb.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, kb.jsx)("strong", {
            children: ie.name
          }), (0, kb.jsx)("span", {
            children: ie.beatenSummary
          })]
        }), (0, kb.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: ie.difficulties.map((ee => (0, kb.jsxs)("span", {
            className: yb()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: ee.beaten
            }),
            style: dM(ee.colour),
            title: ee.summary,
            children: [ee.beaten && (0, kb.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), ee.label]
          }, ee.difficulty)))
        })]
      })
    }

    function wM(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(Ni, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db();
      return He.enabled ? (0, kb.jsxs)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [He.picker && (0, kb.jsx)(tM, {
          picker: He.picker,
          controller: ie
        }), !He.picker && (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: ye("skyblockGame:dungeons")
              }), (0, kb.jsx)("p", {
                children: ye("skyblockGame:dungeonsIntro")
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: ie.dismiss
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, kb.jsx)("div", {
              className: "SkyblockDungeonList",
              children: He.dungeons.map((ee => (0, kb.jsx)(ZM, {
                dungeon: ee,
                select: ie.select
              }, ee.id)))
            }), He.detail && (0, kb.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, kb.jsx)("h3", {
                children: He.detail.name
              }), (0, kb.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: He.detail.difficulties.map((ee => (0, kb.jsxs)("li", {
                  className: yb()("SkyblockDungeonRecord", {
                    Beaten: ee.beaten
                  }),
                  children: [(0, kb.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: dM(ee.colour),
                    children: [ee.beaten && (0, kb.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), ee.label]
                  }), (0, kb.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: ee.summary
                  })]
                }, ee.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function DM(ee) {
      let {
        collection: ie,
        select: He
      } = ee;
      return (0, kb.jsxs)(gb.c, {
        className: yb()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: ie.selected,
          Locked: ie.locked
        }),
        ariaPressed: ie.selected,
        onClick: () => {
          He(ie.id)
        },
        children: [(0, kb.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, kb.jsx)(Ub.c, {
            itemName: ie.icon,
            amount: 0
          })
        }), (0, kb.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, kb.jsx)("strong", {
              children: ie.name
            }), (0, kb.jsx)("span", {
              children: ie.tier
            })]
          }), (0, kb.jsx)(Wb, {
            percent: ie.percent,
            label: `${ie.name}: ${ie.progress}`
          }), (0, kb.jsx)("span", {
            className: "SkyblockSkillXp",
            children: ie.progress
          })]
        })]
      })
    }

    function PM(ee) {
      let {
        collection: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)();
      return (0, kb.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, kb.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, kb.jsx)(Ub.c, {
            itemName: ie.icon,
            amount: 0
          })
        }), (0, kb.jsx)("h3", {
          children: ie.name
        }), (0, kb.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: ie.tier
        }), (0, kb.jsx)("p", {
          children: ie.locked ? He("skyblockGame:collectionLocked") : ie.count
        }), null !== ie.nextReward && (0, kb.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, kb.jsx)("strong", {
            children: He("skyblockGame:collectionNextReward")
          }), (0, kb.jsx)("span", {
            children: ie.nextReward
          })]
        }), (0, kb.jsx)(Wb, {
          percent: ie.percent,
          label: ie.progress
        }), (0, kb.jsx)("p", {
          children: ie.progress
        })]
      })
    }

    function AM(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(XH, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db();
      return He.enabled ? (0, kb.jsx)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: ye("skyblockGame:collections")
              }), (0, kb.jsxs)("p", {
                children: [ye("skyblockGame:collectionsIntro"), " ", He.tiersUnlocked]
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: ie.dismiss
            })]
          }), (0, kb.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: He.categories.map((ee => (0, kb.jsxs)(gb.c, {
              className: yb()("SkyblockCollectionCategory", {
                Selected: ee.selected
              }),
              ariaPressed: ee.selected,
              padTabSelected: ee.selected,
              onClick: () => {
                ie.selectCategory(ee.id)
              },
              children: [(0, kb.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, kb.jsx)(Ub.c, {
                  itemName: ee.icon,
                  amount: 0
                })
              }), (0, kb.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, kb.jsx)("strong", {
                  children: ee.label
                }), (0, kb.jsx)("span", {
                  children: ee.tiers
                })]
              })]
            }, ee.id)))
          }), (0, kb.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, kb.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: He.collections.map((ee => (0, kb.jsx)(DM, {
                collection: ee,
                select: ie.select
              }, ee.id)))
            }), He.detail && (0, kb.jsx)(PM, {
              collection: He.detail
            })]
          })]
        })
      }) : null
    }
    const YM = ["completed", "active", "available", "locked"],
      VM = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function aM(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(PH, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db();
      return He.enabled ? (0, kb.jsx)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: ye("skyblockDevQuests:title")
              }), (0, kb.jsx)("p", {
                children: ye("skyblockDevQuests:intro")
              })]
            }), (0, kb.jsx)(gb.i, {
              onClick: ie.dismiss
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [YM.map((ee => (0, kb.jsx)("span", {
              className: yb()("SkyblockQuestGraphLegendState", ee),
              children: ye(`skyblockDevQuests:state_${ee}`)
            }, ee))), VM.map((ee => (0, kb.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, kb.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, kb.jsx)("line", {
                  className: yb()("SkyblockQuestGraphEdge", ee),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), ye(`skyblockDevQuests:edge_${ee}`)]
            }, ee)))]
          }), (0, kb.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, kb.jsxs)("div", {
              className: yb()("SkyblockQuestGraphCanvas", {
                Planning: He.planning
              }),
              style: {
                width: He.width,
                height: He.height
              },
              children: [(0, kb.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: He.width,
                height: He.height,
                "aria-hidden": "true",
                children: [(0, kb.jsx)("defs", {
                  children: (0, kb.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, kb.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), He.edges.map((ee => (0, kb.jsx)("path", {
                  className: yb()("SkyblockQuestGraphEdge", ee.kind, {
                    InPlan: ee.inPlan
                  }),
                  d: ee.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, ee.key)))]
              }), He.nodes.map((ee => (0, kb.jsxs)("button", {
                type: "button",
                className: yb()("SkyblockQuestGraphNode", ee.state, {
                  InPlan: ee.inPlan,
                  Hovered: ee.hovered
                }),
                style: {
                  left: ee.left,
                  top: ee.top,
                  width: 190,
                  height: 52
                },
                title: ee.id,
                onMouseEnter: () => {
                  ie.hover(ee.id)
                },
                onMouseLeave: () => {
                  ie.hover(null)
                },
                onFocus: () => {
                  ie.hover(ee.id)
                },
                onBlur: () => {
                  ie.hover(null)
                },
                onClick: () => {
                  ie.jump(ee.id)
                },
                children: [(0, kb.jsx)("strong", {
                  children: ee.name
                }), (0, kb.jsx)("span", {
                  children: ee.detail
                })]
              }, ee.id)))]
            })
          })]
        })
      }) : null
    }
    const cM = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      xM = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${SH}ms`,
        "--forge-duration": "2150ms"
      },
      LM = Array.from({
        length: 18
      }, ((ee, ie) => ({
        "--ember-left": `${(4+92*(.618034*ie%1)).toFixed(1)}%`,
        "--ember-size": 3 + ie % 3 * 2 + "px",
        "--ember-drift": 14 * (ie % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*ie%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*ie%8).toFixed(2)}s`
      })));

    function CM(ee) {
      if (ee.style.removeProperty("--part-size"), null === ee.parentElement || "wrap" === getComputedStyle(ee.parentElement).flexWrap) return;
      const ie = [...ee.children],
        He = getComputedStyle(ee),
        ye = parseFloat(He.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        be = (ee.clientHeight - parseFloat(He.rowGap) * (ie.length - 1)) / ie.length,
        Me = ie.map((ee => {
          const ie = getComputedStyle(ee),
            He = ee.querySelector("h3"),
            Me = ee.querySelector(".SkyblockForgeParts");
          if (null === He || null === Me) return ye;
          const Ke = be - parseFloat(ie.paddingTop) - parseFloat(ie.paddingBottom) - He.offsetHeight - parseFloat(getComputedStyle(He).marginBottom),
            Ue = parseFloat(getComputedStyle(Me).columnGap),
            Fe = Me.children.length;
          let Je = 0;
          for (let ye = 1; ye <= Fe; ye++) {
            const ee = Math.ceil(Fe / ye);
            Je = Math.max(Je, Math.min((Me.clientWidth - Ue * (ye - 1)) / ye, (Ke - Ue * (ee - 1)) / ee))
          }
          return Je
        }));
      ee.style.setProperty("--part-size", `${Math.floor(Math.max(ye,Math.min(...Me)))}px`)
    }

    function vM(ee) {
      var ie, He, ye, be, Me;
      let {
        controller: Ke
      } = ee;
      const Ue = (0, Rb.j)(GH, Ke.getSnapshot()),
        {
          t: Fe
        } = (0, ob.v)(),
        Je = db(),
        oe = function() {
          const ee = (0, de.useRef)(null),
            ie = (0, de.useRef)(null);
          return (0, de.useLayoutEffect)((() => {
            null !== ee.current && CM(ee.current)
          })), (0, de.useCallback)((He => {
            var ye;
            null === (ye = ie.current) || void 0 === ye || ye.disconnect(), ie.current = null, ee.current = He, null !== He && (ie.current = new ResizeObserver((() => {
              CM(He)
            })), ie.current.observe(He))
          }), [])
        }(),
        ke = function(ee) {
          const ie = (0, de.useRef)(null);
          return (0, de.useLayoutEffect)((() => {
            const ee = ie.current;
            if (null !== ee) {
              ee.style.removeProperty("font-size");
              for (let ie = 1.7; ie > 1.1 && ee.scrollWidth > ee.clientWidth; ie -= .1) ee.style.fontSize = ie - .1 + "rem"
            }
          }), [ee]), (0, de.useCallback)((ee => {
            ie.current = ee
          }), [])
        }(null === (ie = Ue.preview) || void 0 === ie ? void 0 : ie.name),
        qe = (0, de.useRef)(null),
        fe = (0, de.useRef)({}),
        Te = Ue.forging,
        pe = null !== (He = null === Te || void 0 === Te ? void 0 : Te.preview.tier) && void 0 !== He ? He : 0,
        Xe = null !== (ye = null === Te || void 0 === Te ? void 0 : Te.preview.named) && void 0 !== ye && ye,
        ze = (0, de.useMemo)((() => {
          return null === Te ? null : {
            flames: (ee = pe, ie = Xe, Array.from({
              length: 26 + 6 * ee + (ie ? 20 : 0)
            }, ((ee, ie) => {
              const He = ie < 6,
                ye = Math.random() * Math.PI * 2,
                be = He ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Me = Math.cos(ye) * be,
                Ke = Math.sin(ye) * be - 2 - 3 * Math.random(),
                Ue = Math.random(),
                [Fe, Je, oe] = He ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Ue < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Ue < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Ue < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Fe,
                "--x0": `${(.15*Me).toFixed(2)}rem`,
                "--y0": `${(.15*Ke).toFixed(2)}rem`,
                "--x": `${Me.toFixed(2)}rem`,
                "--y": `${Ke.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Je.toFixed(2)}rem`,
                "--duration": `${Math.round(oe)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: sH(pe, Xe)
          };
          var ee, ie
        }), [null === Te || void 0 === Te ? void 0 : Te.id]);
      if (!Ue.enabled) return null;
      const Be = Ue.preview,
        Ee = Ue.arriving,
        ge = null !== Ee && !Ee.sameSword,
        Oe = null !== Be && (0, kb.jsx)(Ub.c, {
          itemName: Be.baseSword,
          amount: 0,
          enchantmentTier: Be.enchantmentTier
        });
      return (0, kb.jsx)(Eb.e, {
        show: Ue.open,
        close: Ke.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Je,
          onKeyDown: Ob,
          children: [(0, kb.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: LM.map(((ee, ie) => (0, kb.jsx)("span", {
              style: ee
            }, ie)))
          }), (0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Fe("skyblockGame:forgeTitle")
              }), (0, kb.jsx)("p", {
                children: Fe("skyblockGame:forgeIntro")
              })]
            }), (0, kb.jsx)(gb.i, {
              onClick: Ke.dismiss
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, kb.jsx)("div", {
              ref: oe,
              className: yb()("SkyblockForgeSlots", {
                Locked: null !== Te
              }),
              children: Ue.slots.map((ee => (0, kb.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, kb.jsx)("h3", {
                  children: ee.label
                }), (0, kb.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: ee.parts.map((ie => (0, kb.jsx)("button", {
                    type: "button",
                    className: yb()("SkyblockForgePart", {
                      Selected: ie.selected,
                      Missing: ie.placeholder
                    }),
                    disabled: ie.placeholder,
                    title: ie.placeholder ? Fe("skyblockGame:forgePickParts") : ie.itemName,
                    "aria-pressed": ie.selected,
                    onClick: () => {
                      Ke.select(ee.kind, ie.material)
                    },
                    children: (0, kb.jsx)(Ub.c, {
                      itemName: ie.itemName,
                      amount: ie.owned
                    })
                  }, ie.material)))
                })]
              }, ee.kind)))
            }), (0, kb.jsxs)("div", {
              className: yb()("SkyblockForgeAnvil", {
                Named: null === Be || void 0 === Be ? void 0 : Be.named
              }),
              style: {
                "--tier": null === Be ? "transparent" : Re.xb[Be.enchantmentTier]
              },
              children: [(0, kb.jsxs)("div", {
                className: yb()("SkyblockForgeAltar", {
                  Forging: null !== Te
                }),
                style: null === Te ? void 0 : xM,
                children: [(0, kb.jsxs)("div", {
                  className: yb()("SkyblockForgeMount", {
                    Arrive: null !== Ee
                  }),
                  children: [null === Be && (0, kb.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, kb.jsx)(Ub.c, {
                      itemName: Ue.unformedSword,
                      amount: 0
                    })
                  }), null !== Be && (0, kb.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Be && null === Te && (0, kb.jsx)("div", {
                    ref: qe,
                    className: "SkyblockForgeFloat",
                    children: (0, kb.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: Oe
                    })
                  }), null !== Be && (0, kb.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: jH.map(((ee, ie) => (0, kb.jsx)("span", {
                      className: yb()({
                        Rune: "" !== ee.rune
                      }),
                      style: ee.style,
                      children: ee.rune
                    }, ie)))
                  }), null !== Te && null !== ze && (0, kb.jsxs)(kb.Fragment, {
                    children: [(0, kb.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, kb.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: ze.flames.map(((ee, ie) => (0, kb.jsx)("span", {
                        style: ee
                      }, ie)))
                    }), (0, kb.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: fe.current,
                      children: (0, kb.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: Oe
                      })
                    }), (0, kb.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, kb.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (pe >= 4 || Xe) && (0, kb.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, kb.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: ze.sparks.map(((ee, ie) => (0, kb.jsx)("span", {
                        style: ee
                      }, ie)))
                    }), (0, kb.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, kb.jsx)("p", {
                  className: yb()("SkyblockForgeStatus", null === (be = Ue.status) || void 0 === be ? void 0 : be.tone),
                  children: null === (Me = Ue.status) || void 0 === Me ? void 0 : Me.text
                })]
              }), null === Be && (0, kb.jsx)("p", {
                className: yb()("SkyblockForgeName Waiting", {
                  ArriveText: ge
                }),
                children: Fe(Ue.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Be && (0, kb.jsx)("h3", {
                ref: ke,
                className: yb()("SkyblockForgeName", {
                  ArriveText: ge
                }),
                title: Be.name,
                children: Be.name
              }), (null === Be || void 0 === Be ? void 0 : Be.named) && (0, kb.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Fe("skyblockGame:forgeSecret")
              }), (0, kb.jsxs)(gb.p, {
                className: "SkyblockForgeButton",
                disabled: !Ue.canForge,
                title: null === Be ? void 0 : Fe("skyblockGame:forgeCoalOwned", {
                  owned: String(Ue.coalOwned)
                }),
                onClick: () => {
                  fe.current = function(ee) {
                    const ie = null === ee ? "none" : getComputedStyle(ee).transform,
                      He = new DOMMatrixReadOnly("none" === ie ? void 0 : ie);
                    return {
                      "--settle-y": `${He.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(He.b,He.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(qe.current), NH(), Ke.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Fe("skyblockGame:forgeButton"), null !== Be && (0, kb.jsxs)("span", {
                  className: yb()("SkyblockForgeCost", {
                    Short: Be.coalShort
                  }),
                  children: [(0, kb.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, kb.jsx)(Ub.c, {
                      itemName: cH.e,
                      amount: 0
                    })
                  }), Be.coalCost]
                })]
              })]
            }), (0, kb.jsxs)("div", {
              className: yb()("SkyblockForgeDetails", {
                Named: null === Be || void 0 === Be ? void 0 : Be.named
              }),
              children: [(0, kb.jsx)("p", {
                className: yb()("SkyblockForgeLore", {
                  ArriveText: ge
                }),
                title: null === Be || void 0 === Be ? void 0 : Be.lore,
                children: null === Be || void 0 === Be ? void 0 : Be.lore
              }), (0, kb.jsxs)("dl", {
                className: yb()("SkyblockForgeStats", {
                  ArriveText: ge
                }),
                children: [null === Be && cM.map((ee => (0, kb.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, kb.jsx)("dt", {
                    children: Fe(ee)
                  }), (0, kb.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, ee))), null === Be || void 0 === Be ? void 0 : Be.stats.map((ee => (0, kb.jsxs)("div", {
                  className: yb()("SkyblockForgeStat", {
                    Better: ee.better
                  }),
                  children: [(0, kb.jsx)("dt", {
                    children: ee.label
                  }), (0, kb.jsx)("dd", {
                    children: ee.value
                  })]
                }, ee.label)))]
              }), (0, kb.jsx)("ul", {
                className: yb()("SkyblockForgeEffects", {
                  ArriveText: ge
                }),
                children: null === Be || void 0 === Be ? void 0 : Be.effects.map((ee => (0, kb.jsx)("li", {
                  children: ee
                }, ee)))
              })]
            })]
          })]
        })
      })
    }
    const uM = "Doom Rivet",
      mM = "Doom Crest";

    function lM(ee) {
      let {
        itemName: ie,
        amount: He,
        owned: ye
      } = ee;
      return (0, kb.jsxs)("span", {
        className: yb()("SkyblockSmugglerPrice", {
          Short: He > ye
        }),
        children: [(0, kb.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, kb.jsx)(Ub.c, {
            itemName: ie,
            amount: 0
          })
        }), (0, kb.jsx)("span", {
          children: He
        })]
      })
    }

    function SM(ee) {
      return ee.justBought ? "skyblockGame:smugglerJustBought" : ee.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function nM(ee) {
      let {
        deal: ie,
        view: He,
        buy: ye
      } = ee;
      const {
        t: be
      } = (0, ob.v)();
      return (0, kb.jsxs)("div", {
        className: yb()("SkyblockSmugglerPocket", {
          Bought: ie.justBought,
          Unaffordable: !ie.affordable,
          SoldOut: ie.soldOut && !ie.justBought
        }),
        children: [(0, kb.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, kb.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, kb.jsx)(Ub.c, {
            itemName: ie.itemName,
            amount: 0,
            enchantmentTier: ie.enchantmentTier
          }), ie.amount > 1 && (0, kb.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: be("skyblockGame:smugglerAmount", {
              amount: ie.amount
            })
          })]
        }), (0, kb.jsx)("h3", {
          children: ie.displayName
        }), (0, kb.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [ie.rivets > 0 && (0, kb.jsx)(lM, {
              itemName: uM,
              amount: ie.rivets,
              owned: He.rivetsOwned
            }), ie.crests > 0 && (0, kb.jsx)(lM, {
              itemName: mM,
              amount: ie.crests,
              owned: He.crestsOwned
            })]
          }), (0, kb.jsx)(gb.c, {
            className: "SkyblockSmugglerBuy",
            disabled: ie.soldOut || !ie.affordable || He.pending,
            onClick: () => {
              ye(ie.slot)
            },
            children: be(SM(ie))
          })]
        })]
      }, ie.justBought ? He.boughtCount : 0)
    }

    function jM(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(ey, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db();
      return He.enabled ? (0, kb.jsx)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, kb.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, kb.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: ye("skyblockGame:smugglerTitle")
              }), (0, kb.jsx)("p", {
                children: ye("skyblockGame:smugglerIntro")
              })]
            }), (0, kb.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, kb.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, kb.jsx)(lM, {
                  itemName: uM,
                  amount: He.rivetsOwned,
                  owned: He.rivetsOwned
                }), (0, kb.jsx)(lM, {
                  itemName: mM,
                  amount: He.crestsOwned,
                  owned: He.crestsOwned
                })]
              }), (0, kb.jsx)(gb.i, {
                onClick: ie.dismiss
              })]
            })]
          }), (0, kb.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: He.deals.map((ee => (0, kb.jsx)(nM, {
              deal: ee,
              view: He,
              buy: ie.buy
            }, ee.slot)))
          }), (0, kb.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, kb.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: He.rotatesText
            }), null !== He.status && (0, kb.jsx)("span", {
              className: yb()("SkyblockSmugglerStatus", He.status.tone),
              children: He.status.text
            })]
          })]
        })
      }) : null
    }

    function sM(ee) {
      let {
        phase: ie,
        className: He
      } = ee;
      return (0, kb.jsx)("span", {
        className: yb()("SkyblockMoon", `Moon-${ie}`, He),
        "aria-hidden": "true"
      })
    }

    function IM(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(yy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)();
      return He.enabled ? (0, kb.jsx)(Mb.d, {
        placement: "statBars",
        children: (0, kb.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: yb()("SkyblockPassageChip", He.open && "Open"),
          "aria-label": ye("skyblockGame:passageChipLabel", {
            phase: He.phaseName
          }),
          title: ye("skyblockGame:passageChipLabel", {
            phase: He.phaseName
          }),
          onMouseDown: ee => {
            ee.preventDefault()
          },
          onClick: ie.toggle,
          children: (0, kb.jsx)(sM, {
            phase: He.phase
          }, He.phase)
        })
      }) : null
    }

    function hM(ee) {
      let {
        fish: ie
      } = ee;
      return (0, kb.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, kb.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, kb.jsx)(Ub.c, {
            itemName: ie.itemName,
            amount: 0
          })
        }), (0, kb.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: ie.displayName
          }), (0, kb.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: ie.where
          })]
        })]
      })
    }

    function NM(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(yy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db();
      return He.enabled ? (0, kb.jsx)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, kb.jsx)(sM, {
              phase: He.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: ye("skyblockGame:passageTitle")
              }), (0, kb.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: He.phaseName
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: ie.dismiss
            })]
          }), (0, kb.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: ye("skyblockGame:passageIntro")
          }), (0, kb.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, kb.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, kb.jsx)("h3", {
                children: ye("skyblockGame:passageVisiting")
              }), (0, kb.jsx)("ul", {
                className: "SkyblockPassageList",
                children: He.visitors.map((ee => (0, kb.jsx)(hM, {
                  fish: ee
                }, ee.itemName)))
              })]
            }), (0, kb.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== He.resting && (0, kb.jsxs)(kb.Fragment, {
                children: [(0, kb.jsx)("h3", {
                  children: ye("skyblockGame:passageResting")
                }), (0, kb.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, kb.jsx)(hM, {
                    fish: He.resting
                  })
                })]
              }), (0, kb.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, kb.jsx)(sM, {
                  phase: He.nextPhase
                }), (0, kb.jsx)("span", {
                  children: He.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function GM() {
      return (0, kb.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((ee => (0, kb.jsx)("i", {
          style: {
            "--sparkle-index": ee
          }
        }, ee)))
      })
    }

    function rM(ee) {
      var ie;
      let {
        charm: He,
        view: ye,
        controller: be
      } = ee;
      const {
        t: Me
      } = (0, ob.v)(), Ke = ye.shop, Ue = (null === (ie = ye.sparkle) || void 0 === ie ? void 0 : ie.id) === He.id;
      return (0, kb.jsxs)("li", {
        className: yb()("SkyblockLampLightCharm", He.owned && "Owned", He.socketed && "Socketed"),
        children: [Ue && (0, kb.jsx)(GM, {}, ye.sparkle.count), (0, kb.jsx)("h4", {
          children: He.name
        }), (0, kb.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: He.effect
        }), (0, kb.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: He.lines.map((ee => (0, kb.jsxs)("li", {
            className: yb()("SkyblockLampLightOddsLine", "better" === ee.tone ? "Better" : "worse" === ee.tone ? "Worse" : "Same"),
            children: [(0, kb.jsx)("span", {
              className: "Before",
              children: ee.before
            }), (0, kb.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, kb.jsx)("span", {
              className: "After",
              children: ee.after
            })]
          }, ee.label)))
        }), (0, kb.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: He.owned ? He.socketed ? (0, kb.jsxs)(kb.Fragment, {
            children: [(0, kb.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Me("skyblockGame:lampLightSocketed")
            }), (0, kb.jsx)(gb.M, {
              disabled: !ye.canCommand,
              ariaLabel: Me("skyblockGame:lampLightRemoveLabel", {
                charm: He.name
              }),
              onClick: () => {
                be.socket(null)
              },
              children: Me("skyblockGame:lampLightRemove")
            })]
          }) : (0, kb.jsx)(gb.c, {
            disabled: !ye.canCommand || !Ke.heldRod,
            ariaLabel: Me("skyblockGame:lampLightSocketLabel", {
              charm: He.name
            }),
            onClick: () => {
              be.socket(He.id)
            },
            children: Me("skyblockGame:lampLightSocket")
          }) : (0, kb.jsx)(gb.c, {
            disabled: !ye.canCommand || !He.affordable,
            ariaLabel: Me("skyblockGame:lampLightBuyLabel", {
              item: He.name,
              cost: He.cost
            }),
            onClick: () => {
              be.buy(He.id)
            },
            children: He.cost
          })
        })]
      })
    }

    function QM(ee) {
      var ie;
      let {
        tint: He,
        view: ye,
        controller: be
      } = ee;
      const {
        t: Me
      } = (0, ob.v)();
      return (0, kb.jsxs)("li", {
        className: yb()("SkyblockLampLightTint", He.wearing && "Wearing"),
        style: {
          "--tint-colour": He.colour
        },
        children: [(null === (ie = ye.sparkle) || void 0 === ie ? void 0 : ie.id) === He.id && (0, kb.jsx)(GM, {}, ye.sparkle.count), (0, kb.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, kb.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: He.name
        }), He.wearing ? (0, kb.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Me("skyblockGame:lampLightWearing")
        }) : (0, kb.jsx)(gb.c, {
          disabled: !ye.canCommand || !He.owned && !He.affordable,
          ariaLabel: He.owned ? Me("skyblockGame:lampLightWearLabel", {
            tint: He.name
          }) : Me("skyblockGame:lampLightBuyLabel", {
            item: He.name,
            cost: He.cost
          }),
          onClick: () => {
            He.owned ? be.wearTint(He.id) : be.buy(He.id)
          },
          children: He.owned ? Me("skyblockGame:lampLightWear") : He.cost
        })]
      })
    }

    function eK(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(Xy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = He.shop;
      return (0, kb.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, kb.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: He.balance
          }), (0, kb.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": He.releasing,
            className: yb()("SkyblockLampLightSwitch", He.releasing && "On"),
            disabled: He.releasing ? "ready" !== He.status : !He.canCommand,
            onClick: () => {
              ie.setRelease(!He.releasing)
            },
            children: [(0, kb.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, kb.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), ye("skyblockGame:lampLightRelease")]
          }), (0, kb.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: ye("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== He.notice && (0, kb.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: He.notice
        }), null !== be && (0, kb.jsxs)(kb.Fragment, {
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, kb.jsx)("h3", {
              children: ye("skyblockGame:lampLightCharms")
            }), (0, kb.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: be.oddsFor
            }), (0, kb.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((ee => (0, kb.jsx)("button", {
                type: "button",
                "aria-pressed": He.situation === ee,
                className: yb()("SkyblockLampLightSituation", He.situation === ee && "Selected"),
                onClick: () => {
                  ie.setSituation(ee)
                },
                children: ye("open" === ee ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, ee)))
            })]
          }), !be.heldRod && (0, kb.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: ye("skyblockGame:lampLightHoldRod")
          }), (0, kb.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: be.charms.map((ee => (0, kb.jsx)(rM, {
              charm: ee,
              view: He,
              controller: ie
            }, ee.id)))
          }), (0, kb.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, kb.jsx)("h3", {
              children: ye("skyblockGame:lampLightTints")
            })
          }), (0, kb.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, kb.jsxs)("li", {
              className: yb()("SkyblockLampLightTint", "Islands", be.wearingIslandColours && "Wearing"),
              children: [(0, kb.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, kb.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: ye("skyblockGame:lampLightIslandColours")
              }), be.wearingIslandColours ? (0, kb.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: ye("skyblockGame:lampLightWearing")
              }) : (0, kb.jsx)(gb.c, {
                disabled: !He.canCommand,
                ariaLabel: ye("skyblockGame:lampLightWearLabel", {
                  tint: ye("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  ie.wearTint(null)
                },
                children: ye("skyblockGame:lampLightWear")
              })]
            }), be.tints.map((ee => (0, kb.jsx)(QM, {
              tint: ee,
              view: He,
              controller: ie
            }, ee.id)))]
          })]
        })]
      })
    }

    function iK(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(Xy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)();
      return He.releasing ? (0, kb.jsx)(Mb.d, {
        children: (0, kb.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            ie.setRelease(!1)
          },
          children: [(0, kb.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, kb.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [ye("skyblockGame:lampLightReleasing"), " \xb7 ", He.balance]
          }), (0, kb.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: ye("skyblockGame:lampLightKeepCatches")
          }), null !== He.gained && (0, kb.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: He.gained.text
          }, He.gained.count)]
        })
      }) : null
    }

    function HK(ee) {
      let {
        island: ie,
        view: He,
        aim: ye
      } = ee;
      const {
        t: be
      } = (0, ob.v)(), Me = ie.featuredFish;
      return (0, kb.jsxs)("li", {
        className: yb()("SkyblockKeepersChairIsland", `Island-${ie.id}`, ie.favoured && "Aimed", !ie.relit && "Dark"),
        children: [(0, kb.jsx)("h3", {
          children: ie.name
        }), ie.relit && null !== Me ? (0, kb.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: be("skyblockGame:keepersChairTideNotice")
          }), (0, kb.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, kb.jsx)(Ub.c, {
              itemName: Me.itemName,
              amount: 0
            })
          }), (0, kb.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Me.displayName
          })]
        }) : (0, kb.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, kb.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: be("skyblockGame:keepersChairDark")
          })
        }), ie.relit && (ie.favoured ? (0, kb.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: be("skyblockGame:keepersChairAimed")
        }) : (0, kb.jsx)(gb.c, {
          className: "SkyblockKeepersChairAim",
          disabled: !He.canAim,
          ariaLabel: be("skyblockGame:keepersChairAimLabel", {
            island: ie.name
          }),
          onClick: () => {
            ye(ie.id)
          },
          children: be("skyblockGame:keepersChairAim")
        }))]
      }, ie.favoured ? He.aimedCount : 0)
    }

    function yK(ee) {
      let {
        controller: ie,
        lampLight: He
      } = ee;
      const ye = (0, Rb.j)(Jy, ie.getSnapshot()),
        be = (0, Rb.j)(Xy, He.getSnapshot()),
        [Me, Ke] = (0, de.useState)("lamp"),
        {
          t: Ue
        } = (0, ob.v)(),
        Fe = db();
      if (!ye.enabled) return null;
      const Je = "light" === Me && be.enabled;
      return (0, kb.jsx)(Eb.e, {
        show: ye.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: yb()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Je && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Fe,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Ue("skyblockGame:keepersChairTitle")
              }), (0, kb.jsx)("p", {
                children: Ue(Je ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              ariaLabel: Ue("skyblockGame:keepersChairClose"),
              onClick: ie.dismiss
            })]
          }), be.enabled && (0, kb.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((ee => (0, kb.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === ee === Je,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === ee === Je ? "true" : void 0,
              className: yb()("SkyblockKeepersChairTab", "light" === ee === Je && "Selected"),
              onClick: () => {
                Ke(ee)
              },
              children: [Ue("lamp" === ee ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === ee && (0, kb.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: be.balance
              })]
            }, ee)))
          }), Je ? (0, kb.jsx)(eK, {
            controller: He
          }) : (0, kb.jsx)(bK, {
            view: ye,
            controller: ie
          })]
        })
      })
    }

    function bK(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)();
      return (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: ie.islands.map((ee => (0, kb.jsx)(HK, {
            island: ee,
            view: ie,
            aim: He.aim
          }, ee.id)))
        }), null !== ie.almanac && (0, kb.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: ye("skyblockGame:passageTitle")
          }), (0, kb.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, kb.jsx)(sM, {
              phase: ie.almanac.phase
            }), ie.almanac.phaseName]
          }), (0, kb.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, kb.jsx)(sM, {
              phase: ie.almanac.nextPhase
            }), ie.almanac.next]
          })]
        }), (0, kb.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: ye("skyblockGame:keepersChairFavour")
          }), ie.aimed && (0, kb.jsx)(gb.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !ie.canAim,
            onClick: () => {
              He.aim(null)
            },
            children: ye("skyblockGame:keepersChairRest")
          })]
        }), null !== ie.status && (0, kb.jsx)("p", {
          className: yb()("SkyblockKeepersChairStatus", "refused" === ie.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: ie.status.text
        })]
      })
    }

    function MK(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, Rb.j)(Ry, ie.getSnapshot());
      if (!ye.enabled) return null;
      const be = ye.freshCount > 0 ? He("skyblockGame:reachLogOpenNews", {
        count: ye.freshCount
      }) : He("skyblockGame:reachLogOpen");
      return (0, kb.jsx)(Mb.d, {
        placement: "statBars",
        children: (0, kb.jsxs)("button", {
          type: "button",
          className: yb()("SkyblockReachLogButton", ye.freshCount > 0 && "HasNews", ye.pending && "Pending"),
          "aria-label": be,
          title: be,
          onClick: ie.ask,
          children: [ye.news && (0, kb.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${ye.newsToken}`), (0, kb.jsx)("span", {
            className: yb()("SkyblockReachLogIcon", ye.news && "Jump"),
            "aria-hidden": "true",
            children: (0, kb.jsx)(Ub.c, {
              itemName: qy,
              amount: 0
            })
          }, `icon:${ye.newsToken}`), ye.freshCount > 0 && (0, kb.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: ye.freshCount
          })]
        })
      })
    }

    function KK(ee) {
      let {
        gift: ie
      } = ee;
      return (0, kb.jsx)("li", {
        className: yb()("SkyblockRegularsGift", ie.given && "Given"),
        children: ie.text
      })
    }

    function UK(ee) {
      let {
        regular: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)();
      return (0, kb.jsxs)("li", {
        className: yb()("SkyblockRegularsCard", ie.tagged ? "Tagged" : "Untagged", ie.resting && "Resting"),
        children: [(0, kb.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: ie.fishName,
            children: (0, kb.jsx)(Ub.c, {
              itemName: ie.itemName,
              amount: 0
            })
          }), (0, kb.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, kb.jsx)("h3", {
              children: ie.name
            }), (0, kb.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: ie.fishName
            })]
          })]
        }), (0, kb.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: ie.line
        }), (0, kb.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: ie.size
          }), ie.tagged && (0, kb.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: ie.resting ? He("skyblockGame:regularsResting") : ie.meetings
          })]
        }), (0, kb.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: ie.chance
        }), (0, kb.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: ie.gifts.map((ee => (0, kb.jsx)(KK, {
            gift: ee
          }, ee.text)))
        }), ie.history.length > 0 && (0, kb.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: ie.history.map(((ee, ie) => (0, kb.jsx)("li", {
            children: ee
          }, ie)))
        })]
      })
    }

    function FK(ee) {
      let {
        controller: ie,
        island: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)(), be = (0, Rb.j)(xy, ie.getSnapshot()), Me = be.islands.find((ee => ee.id === He));
      if (!be.enabled || void 0 === Me) return null;
      const Ke = ye("skyblockGame:regularsOpen");
      return (0, kb.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Ke,
        title: Ke,
        onClick: () => {
          ie.openIsland(He)
        },
        children: [(0, kb.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: ye("skyblockGame:regularsTitle")
        }), Me.regulars.map((ee => (0, kb.jsx)("span", {
          className: yb()("SkyblockRegularsStripIcon", ee.tagged && "Tagged"),
          title: ee.name,
          children: (0, kb.jsx)(Ub.c, {
            itemName: ee.itemName,
            amount: 0
          })
        }, ee.id)))]
      })
    }

    function JK(ee) {
      var ie;
      let {
        controller: He
      } = ee;
      const ye = (0, Rb.j)(xy, He.getSnapshot()),
        {
          t: be
        } = (0, ob.v)(),
        Me = db();
      if (!ye.enabled) return null;
      const Ke = null !== (ie = ye.islands.find((ee => ee.id === ye.selected))) && void 0 !== ie ? ie : null;
      return (0, kb.jsx)(Eb.e, {
        show: ye.open,
        close: He.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Me,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: be("skyblockGame:regularsTitle")
              }), (0, kb.jsx)("p", {
                children: be("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: He.dismiss
            })]
          }), (0, kb.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ye.islands.map((ee => {
              const ie = ee.id === ye.selected;
              return (0, kb.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ie,
                "data-pad-tab": !0,
                "data-pad-selected": ie ? "true" : void 0,
                className: yb()("SkyblockReachLogTab", `Island-${ee.id}`, ie && "Selected", ee.charm.given && "GoldPage"),
                onClick: () => {
                  He.selectIsland(ee.id)
                },
                children: (0, kb.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: ee.name
                })
              }, ee.id)
            }))
          }), (0, kb.jsxs)("div", {
            className: yb()("SkyblockRegularsPage", null !== Ke && `Island-${Ke.id}`),
            role: "tabpanel",
            children: [(0, kb.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: be("skyblockGame:regularsHow")
            }), null !== Ke && (0, kb.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Ke.regulars.map((ee => (0, kb.jsx)(UK, {
                regular: ee
              }, ee.id)))
            })]
          }), null !== Ke && (0, kb.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, kb.jsx)("span", {
              className: yb()("SkyblockRegularsCharm", Ke.charm.given && "Given"),
              children: Ke.charm.text
            })
          })]
        })
      })
    }
    const oK = [{
        "--left": "12%",
        "--tilt": "14deg",
        "--duration": "11s",
        "--delay": "-3s"
      }, {
        "--left": "62%",
        "--tilt": "-10deg",
        "--duration": "14s",
        "--delay": "-9s"
      }],
      RK = Array.from({
        length: 6
      }, ((ee, ie) => ({
        "--x": `${(88*(.618034*ie%1)).toFixed(1)}%`,
        "--y": `${(10+37*ie%70).toFixed(1)}%`,
        "--size": 7 + ie % 3 * 3 + "rem",
        "--drift-x": 3 * (ie % 3 - 1) + "rem",
        "--drift-y": 2 * (ie % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + ie % 4 * 3 + "s",
        "--delay": 2.5 * -ie + "s"
      }))),
      kK = Array.from({
        length: 14
      }, ((ee, ie) => ({
        "--left": `${(3+94*((.618034*ie+.3)%1)).toFixed(1)}%`,
        "--size": 4 + ie % 4 * 2 + "px",
        "--sway": ie % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*ie%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*ie%12).toFixed(2)}s`
      }))),
      qK = (0, de.memo)((function(ee) {
        let {
          island: ie
        } = ee;
        return (0, kb.jsxs)("div", {
          className: yb()("SkyblockReachLogDepths", null !== ie && `Island-${ie}`),
          "aria-hidden": "true",
          children: [oK.map(((ee, ie) => (0, kb.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: ee
          }, `shaft${ie}`))), RK.map(((ee, ie) => (0, kb.jsx)("span", {
            className: yb()("SkyblockReachLogMote", ie % 2 === 1 && "Violet"),
            style: ee
          }, `mote${ie}`))), kK.map(((ee, ie) => (0, kb.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: ee
          }, `bubble${ie}`)))]
        })
      })),
      fK = 100;

    function TK(ee) {
      let {
        view: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)();
      if (null === ie || 0 === ie.total) return null;
      const ye = fK * ie.aspect,
        be = He("skyblockGame:hiddenWatersCount", {
          found: ie.found,
          total: ie.total
        });
      return (0, kb.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${He("skyblockGame:hiddenWatersTitle")}: ${be}`,
        children: [(0, kb.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${ye}`,
          "aria-hidden": "true",
          children: [ie.islands.map(((ee, ie) => (0, kb.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (ee.left + ee.width / 2) * fK,
            cy: (ee.top + ee.height / 2) * ye,
            rx: ee.width / 2 * fK,
            ry: ee.height / 2 * ye
          }, ie))), ie.pins.map(((ee, ie) => (0, kb.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: ee.left * fK,
            cy: ee.top * ye,
            r: 13
          }, ie)))]
        }), (0, kb.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, kb.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: He("skyblockGame:hiddenWatersTitle")
          }), (0, kb.jsx)("span", {
            className: ie.found === ie.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: be
          })]
        })]
      })
    }

    function pK(ee) {
      let {
        view: ie,
        island: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)(), be = null === ie || void 0 === ie ? void 0 : ie.glimpses.get(He);
      return void 0 === be || 0 === be.length ? null : (0, kb.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, kb.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: ye("skyblockGame:hiddenWatersGlimpsed")
        }), (0, kb.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: be.map((ee => (0, kb.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, kb.jsx)(Ub.c, {
              itemName: ee,
              amount: 0
            })
          }, ee)))
        })]
      })
    }
    const XK = ["Bronze", "Silver", "Gold"],
      zK = [{
        className: "Bloom",
        titleKey: "skyblockGame:reachLogRibbonBloomTitle",
        legendKey: "skyblockGame:reachLogLegendBloom"
      }, {
        className: "Chart",
        titleKey: "skyblockGame:reachLogRibbonChartTitle",
        legendKey: "skyblockGame:reachLogLegendChart"
      }, {
        className: "LetGo",
        titleKey: "skyblockGame:reachLogRibbonLetGoTitle",
        legendKey: "skyblockGame:reachLogLegendLetGo"
      }],
      BK = zK.slice(0, 2);

    function EK(ee) {
      return ee ? zK : BK
    }

    function gK(ee) {
      let {
        fish: ie,
        letGoShown: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)();
      return (0, kb.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [XK.map(((ee, He) => {
          const be = He < ie.marks;
          return (0, kb.jsx)("span", {
            className: yb()("SkyblockReachLogPip", ee, be && "Earned", be && ie.fresh && He === ie.marks - 1 && "Newest"),
            title: ye(ky[He])
          }, ee)
        })), (0, kb.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), EK(He).map(((ee, He) => (0, kb.jsx)("span", {
          className: yb()("SkyblockReachLogRibbon", ee.className, !0 === ie.ribbons[He] && "Earned"),
          title: ye(ee.titleKey)
        }, ee.className)))]
      })
    }

    function OK(ee) {
      let {
        letGoShown: ie,
        haloShown: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)();
      return (0, kb.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, kb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ye("skyblockGame:reachLogMarks"),
          children: [(0, kb.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), ye("skyblockGame:reachLogLegendMarks")]
        }), EK(ie).map((ee => (0, kb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ye(ee.titleKey),
          children: [(0, kb.jsx)("span", {
            className: yb()("SkyblockReachLogRibbon", ee.className, "Earned")
          }), ye(ee.legendKey)]
        }, ee.className))), (0, kb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ye("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, kb.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), ye("skyblockGame:reachLogLegendGlimmer")]
        }), He && (0, kb.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: ye("skyblockGame:reachLogHaloTitle"),
          children: [(0, kb.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), ye("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function dK(ee) {
      let {
        returner: ie
      } = ee;
      return (0, kb.jsxs)("div", {
        className: yb()("SkyblockReachLogReturner", ie.back && "Back"),
        children: [(0, kb.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, kb.jsx)(Ub.c, {
            itemName: ie.itemName,
            amount: 0
          })
        }), (0, kb.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: ie.line
        })]
      })
    }

    function WK(ee) {
      let {
        fish: ie,
        letGoShown: He
      } = ee;
      const {
        t: ye
      } = (0, ob.v)();
      return (0, kb.jsxs)("li", {
        className: yb()("SkyblockReachLogCard", ie.caught ? "Caught" : "Unknown", ie.marks >= 3 && "GoldCard", ie.fresh && "Fresh", ie.visitor && "Visitor"),
        children: [ie.visitor && (0, kb.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: ye("skyblockGame:reachLogVisitor")
        }), ie.fresh && Array.from({
          length: 4
        }, ((ee, ie) => (0, kb.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, ie))), (0, kb.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [ie.halo && (0, kb.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: ye("skyblockGame:reachLogHaloTitle")
          }), (0, kb.jsx)(Ub.c, {
            itemName: ie.itemName,
            amount: 0
          }), ie.glimmer && (0, kb.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: ye("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, kb.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: ie.name
        }), (0, kb.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: ie.chance
        }), (0, kb.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: ie.best
        }), (0, kb.jsx)(gK, {
          fish: ie,
          letGoShown: He
        })]
      })
    }

    function tK(ee) {
      let {
        page: ie,
        letGoShown: He,
        hiddenWaters: ye
      } = ee;
      const {
        t: be
      } = (0, ob.v)();
      return ie.awake ? (0, kb.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: ie.fish.map((ee => (0, kb.jsx)(WK, {
          fish: ee,
          letGoShown: He
        }, ee.itemName)))
      }) : (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: be("skyblockGame:reachLogAsleep")
        }), (0, kb.jsx)(pK, {
          view: ye,
          island: ie.id
        })]
      })
    }

    function ZK(ee) {
      var ie, He;
      let {
        controller: ye,
        regulars: be,
        hiddenWaters: Me
      } = ee;
      const Ke = (0, Rb.j)(Ry, ye.getSnapshot()),
        Ue = function(ee) {
          return (0, Rb.j)(my, ee.getSnapshot())
        }(Me),
        Fe = (0, Rb.j)(xy, be.getSnapshot()),
        {
          t: Je
        } = (0, ob.v)(),
        oe = db();
      if (!Ke.enabled) return null;
      const Re = null !== (ie = Ke.pages.find((ee => ee.id === Ke.selected))) && void 0 !== ie ? ie : null;
      return (0, kb.jsx)(Eb.e, {
        show: Ke.open,
        close: ye.dismiss,
        togglePointerLock: !1,
        className: yb()("SkyblockSkillsOverlay", Fe.open && "SkyblockReachLogUnderLedger"),
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: oe,
          onKeyDown: Ob,
          children: [(0, kb.jsx)(qK, {
            island: null !== (He = null === Re || void 0 === Re ? void 0 : Re.id) && void 0 !== He ? He : null
          }), (0, kb.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Je("skyblockGame:reachLogTitle")
              }), (0, kb.jsx)("p", {
                children: Je("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, kb.jsx)(TK, {
              view: Ue
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: ye.dismiss
            })]
          }), (0, kb.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Ke.pages.map((ee => {
              const ie = ee.id === Ke.selected,
                He = ee.fish.some((ee => ee.fresh));
              return (0, kb.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ie,
                "data-pad-tab": !0,
                "data-pad-selected": ie ? "true" : void 0,
                className: yb()("SkyblockReachLogTab", `Island-${ee.id}`, ie && "Selected", !ee.awake && "Asleep", ee.gold && "GoldPage", He && "HasNews"),
                onClick: () => {
                  ye.selectPage(ee.id)
                },
                children: [(0, kb.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: ee.name
                }), ee.awake && (0, kb.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Je("skyblockGame:reachLogCaughtCount", {
                    caught: ee.caught,
                    total: ee.total
                  })
                })]
              }, ee.id)
            }))
          }), (0, kb.jsxs)("div", {
            className: yb()("SkyblockReachLogPage", null !== Re && `Island-${Re.id}`),
            role: "tabpanel",
            children: [null !== Re && (0, kb.jsx)(tK, {
              page: Re,
              letGoShown: Ke.letGoShown,
              hiddenWaters: Ue
            }), !0 === (null === Re || void 0 === Re ? void 0 : Re.awake) && null !== Re.returner && (0, kb.jsx)(dK, {
              returner: Re.returner
            }), !0 === (null === Re || void 0 === Re ? void 0 : Re.awake) && (0, kb.jsx)(FK, {
              controller: be,
              island: Re.id
            })]
          }), (0, kb.jsx)("footer", {
            className: yb()("SkyblockReachLogFooter", null !== Re && `Island-${Re.id}`, !0 === (null === Re || void 0 === Re ? void 0 : Re.gold) && "GoldPage"),
            children: !0 === (null === Re || void 0 === Re ? void 0 : Re.gold) ? (0, kb.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Je("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, kb.jsxs)(kb.Fragment, {
              children: [(0, kb.jsx)(OK, {
                letGoShown: Ke.letGoShown,
                haloShown: !0 === (null === Re || void 0 === Re ? void 0 : Re.fish.some((ee => ee.halo)))
              }), (0, kb.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Je("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var wK = He(5311);

    function DK(ee) {
      let {
        conversation: ie,
        completedLabel: He
      } = ee;
      return (0, kb.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, kb.jsxs)("header", {
          children: [(0, kb.jsx)("h3", {
            children: ie.questName
          }), ie.completed && (0, kb.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: He
          })]
        }), ie.lines.map((ee => (0, kb.jsx)(wK.d, {
          display: ee.display
        }, ee.key)))]
      })
    }

    function PK(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, Rb.j)(Sy, ie.getSnapshot()), be = db();
      if (!ye.enabled) return null;
      const Me = !ye.loading && 0 === ye.conversations.length;
      return (0, kb.jsx)(Eb.e, {
        show: ye.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: He("skyblockDialogue:title")
              }), (0, kb.jsx)("p", {
                children: He("skyblockDialogue:intro")
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: ie.dismiss
            })]
          }), (0, kb.jsxs)("div", {
            className: yb()("SkyblockDialogueBody", {
              SingleColumn: null !== ye.questFocus || 0 === ye.characters.length
            }),
            children: [null === ye.questFocus && ye.characters.length > 0 && (0, kb.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: ye.characters.map((ee => (0, kb.jsx)(gb.c, {
                className: yb()("SkyblockDialogueCharacter", {
                  Selected: ee.selected
                }),
                onClick: () => {
                  ie.selectCharacter(ee.id)
                },
                children: (0, kb.jsx)(Fb.e, {
                  text: ee.styling
                })
              }, ee.id)))
            }), (0, kb.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== ye.questFocus && (0, kb.jsx)(gb.c, {
                className: "SkyblockDialogueBack",
                onClick: ie.showCharacters,
                children: He("skyblockDialogue:allCharacters")
              }), ye.loading && (0, kb.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: He("skyblockDialogue:loading")
              }), Me && (0, kb.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: He(null === ye.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), ye.conversations.map((ee => (0, kb.jsx)(DK, {
                conversation: ee,
                completedLabel: ye.completedLabel
              }, ee.questId)))]
            })]
          })]
        })
      })
    }

    function AK(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(hy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db();
      return He.enabled ? (0, kb.jsx)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: ye("skyblockGame:autographBook")
              }), (0, kb.jsx)("p", {
                children: ye("skyblockGame:autographBookIntro")
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              onClick: ie.dismiss
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, kb.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, kb.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, kb.jsx)("strong", {
                  children: He.total
                }), (0, kb.jsx)("span", {
                  children: ye("skyblockGame:autographTotal")
                })]
              }), (0, kb.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, kb.jsx)("strong", {
                  children: He.rankTotal
                }), (0, kb.jsx)("span", {
                  children: ye("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === He.entries.length ? (0, kb.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: ye("skyblockGame:autographBookEmpty")
            }) : (0, kb.jsx)("ul", {
              className: "SkyblockAutographList",
              children: He.entries.map((ee => (0, kb.jsxs)("li", {
                className: yb()("SkyblockAutograph", {
                  Ranked: null !== ee.rank
                }),
                style: null === ee.rank ? void 0 : {
                  color: ee.rank.colour
                },
                children: [null !== ee.rank && (0, kb.jsx)(hb.e, {
                  className: "SkyblockAutographRankIcon",
                  name: ee.rank.icon,
                  kit: (0, hb.g)(ee.rank.icon)
                }), (0, kb.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, kb.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: ee.name
                  }), (0, kb.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== ee.rank && (0, kb.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: ee.rank.label
                    }), (0, kb.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: ee.signedOn
                    })]
                  })]
                })]
              }, ee.key)))
            })]
          })]
        })
      }) : null
    }
    const YK = (0, de.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        return (0, kb.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: ie.display.mountWaypoint,
          children: [(0, kb.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, kb.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, kb.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, kb.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, kb.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, kb.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      VK = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function aK(ee) {
      return "next" === ee.phase ? "\u2192" : VK[ee.kind]
    }
    const cK = (0, de.memo)((function(ee) {
      let {
        controller: ie,
        display: He
      } = ee;
      const ye = (0, Rb.j)(ji, ie.getNotificationSnapshot()),
        [be, Me] = (0, de.useState)(!1);
      return (0, Rb.f)("qteStateUpdated", (ee => {
        Me(ee.isActive)
      })), (0, kb.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (be ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [ye && (0, kb.jsxs)("div", {
          className: `SkyblockQuestNotification ${ye.kind} ${ye.phase}`,
          style: {
            "--quest-notification-duration": `${ye.durationMs}ms`,
            ...ye.accent && {
              "--quest-notification-accent": ye.accent
            }
          },
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (ye.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, kb.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: aK(ye)
            }), ye.iconItem && (0, kb.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, kb.jsx)(Ub.c, {
                itemName: ye.iconItem,
                amount: 0
              })
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, kb.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: ye.title
            }), (0, kb.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, kb.jsx)(mb.c, {
                text: ye.name
              })
            }), ye.description && (0, kb.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, kb.jsx)(mb.c, {
                text: ye.description
              })
            }), ye.reward && (0, kb.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, kb.jsx)(mb.c, {
                text: ye.reward
              })
            })]
          })]
        }, ye.token), (null === ye || void 0 === ye ? void 0 : ye.waypointNameKey) && (0, kb.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": ye.waypointNameKey,
          "data-notification-token": ye.token,
          ref: He.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${ye.token}`)]
      })
    }));

    function xK(ee) {
      const ie = parseInt(ee.replace("#", ""), 16);
      return `${ie>>16&255}, ${ie>>8&255}, ${255&ie}`
    }
    const LK = (0, de.memo)((function(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, Rb.j)(BH, ie.getSnapshot());
      if (!ye) return null;
      const be = "arrival" === ye.phase;
      return (0, kb.jsxs)("div", {
        className: yb()("SkyblockPortalTransit", {
          Departure: !be,
          Arrival: be
        }),
        style: {
          "--portal-rgb": xK(ye.colour),
          "--portal-duration": `${ye.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, kb.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, kb.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            ie.finishArrival(ye.token)
          }
        }), (0, kb.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, kb.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !be && (0, kb.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: He("skyblockGame:portalTransitHeading")
          }), (0, kb.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: He(ye.zoneNameKey)
          })]
        })]
      }, ye.token)
    }));

    function CK() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function vK() {
      const ee = document.querySelector(".SkyblockHudCoins"),
        ie = null === ee || void 0 === ee ? void 0 : ee.getBoundingClientRect();
      return ie && ie.width > 0 ? {
        x: ie.left + Math.min(ie.width, 24) / 2,
        y: ie.top + ie.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function uK(ee) {
      return {
        x: ee.left + ee.width / 2,
        y: ee.top + ee.height / 2
      }
    }

    function mK() {
      var ee;
      const ie = null === (ee = document.querySelector(".HotBar")) || void 0 === ee ? void 0 : ee.getBoundingClientRect();
      return ie && ie.width > 0 ? uK(ie) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function lK(ee) {
      let {
        items: ie,
        origins: He,
        target: ye
      } = ee;
      return (0, kb.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: ie.map(((ee, ie) => {
          const be = He[ie];
          return (0, kb.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${be.x}px`,
              top: `${be.y}px`,
              "--item-dx": ye.x - be.x + "px",
              "--item-dy": ye.y - be.y + "px",
              "--item-delay": 2e3 + 160 * ie + "ms",
              "--item-flight": "700ms"
            },
            children: (0, kb.jsx)(Ub.c, {
              itemName: ee.dailyRewardItemName,
              amount: 0
            })
          }, ee.dailyRewardItemName)
        }))
      })
    }

    function SK(ee, ie) {
      const He = -Math.PI / 2 + 1.25 * (ee / (ie - 1) * 2 - 1),
        ye = 70 + ee % 3 * 22;
      return {
        x: Math.cos(He) * ye,
        y: Math.sin(He) * ye * .7
      }
    }

    function nK(ee) {
      let {
        origin: ie,
        target: He,
        count: ye
      } = ee;
      const be = [];
      for (let Me = 0; Me < ye; Me++) {
        const ee = SK(Me, ye);
        be.push((0, kb.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${ie.x}px`,
            top: `${ie.y}px`,
            "--coin-bx": `${ee.x}px`,
            "--coin-by": `${ee.y}px`,
            "--coin-dx": He.x - ie.x + "px",
            "--coin-dy": He.y - ie.y + "px",
            "--coin-delay": `${tH(Me,ye)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, kb.jsx)(Ub.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Me))
      }
      return (0, kb.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: be
      })
    }

    function jK(ee) {
      let {
        day: ie
      } = ee;
      const He = We[ie - 1];
      return (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, kb.jsx)(Ub.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Jb.h)(He.dailyRewardCoins)]
        }), He.dailyRewardItems.map((ee => (0, kb.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, kb.jsx)(Ub.c, {
            itemName: ee.dailyRewardItemName,
            amount: 0
          }), "\xd7", ee.dailyRewardItemAmount]
        }, ee.dailyRewardItemName)))]
      })
    }

    function sK(ee) {
      let {
        day: ie
      } = ee;
      const He = Ze(ie);
      return (0, kb.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: We.map(((ee, ye) => {
          const be = ye + 1;
          return (0, kb.jsxs)("li", {
            className: yb()("SkyblockDailyRewardTile", {
              Claimed: be < ie && be !== He,
              Today: be === ie,
              Tomorrow: be === He,
              Jackpot: be === te
            }),
            children: [(0, kb.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: be
            }), (0, kb.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, kb.jsx)(Ub.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Jb.h)(ee.dailyRewardCoins)]
            }), ee.dailyRewardItems.map((ee => (0, kb.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, kb.jsx)(Ub.c, {
                itemName: ee.dailyRewardItemName,
                amount: 0
              }), "\xd7", ee.dailyRewardItemAmount]
            }, ee.dailyRewardItemName)))]
          }, be)
        }))
      })
    }

    function IK(ee) {
      let {
        view: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, de.useRef)(null), be = (0, de.useRef)(null), [Me, Ke] = (0, de.useState)(null);
      (0, de.useLayoutEffect)((() => {
        var ee;
        const ie = null === (ee = ye.current) || void 0 === ee ? void 0 : ee.getBoundingClientRect();
        if (ie) {
          var He, Me;
          const ee = Array.from(null !== (He = null === (Me = be.current) || void 0 === Me ? void 0 : Me.children) && void 0 !== He ? He : [], (ee => uK(ee.getBoundingClientRect())));
          Ke({
            origin: uK(ie),
            target: vK(),
            itemOrigins: ee,
            itemTarget: mK()
          })
        }
      }), []);
      const Ue = Ze(ie.day),
        Fe = function(ee, ie) {
          const [He, ye] = (0, de.useState)((() => CK() ? ee : 0));
          return (0, de.useEffect)((() => {
            if (CK()) return;
            const He = performance.now();
            let be = 0;
            const Me = Ke => {
              const Ue = Math.min(Math.max((Ke - He) / ie, 0), 1);
              ye(Math.round(ee * (1 - (1 - Ue) ** 3))), Ue < 1 && (be = requestAnimationFrame(Me))
            };
            return be = requestAnimationFrame(Me), () => {
              cancelAnimationFrame(be)
            }
          }), [ee, ie]), He
        }(ie.coins, 450);
      return (0, kb.jsxs)("div", {
        className: yb()("SkyblockDailyReward", {
          Jackpot: ie.day === te
        }),
        style: {
          "--daily-duration": `${ie.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, kb.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, kb.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, kb.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: He("skyblockGame:dailyRewardTitle")
            }), (0, kb.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: He("skyblockGame:dailyRewardDay", {
                day: String(ie.day)
              })
            })]
          }), (0, kb.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: ye,
            children: [(0, kb.jsx)(Ub.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, kb.jsxs)("span", {
              children: ["+", (0, Jb.h)(Fe)]
            })]
          }), ie.items.length > 0 && (0, kb.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: be,
            children: ie.items.map((ee => (0, kb.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, kb.jsx)(Ub.c, {
                itemName: ee.dailyRewardItemName,
                amount: 0
              }), "\xd7", ee.dailyRewardItemAmount]
            }, ee.dailyRewardItemName)))
          }), (0, kb.jsx)(sK, {
            day: ie.day
          }), (0, kb.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [He("skyblockGame:dailyRewardComeBack"), (0, kb.jsx)(jK, {
              day: Ue
            })]
          })]
        }), null !== Me && (0, kb.jsx)(nK, {
          origin: Me.origin,
          target: Me.target,
          count: ie.flyingCoins
        }), null !== Me && Me.itemOrigins.length === ie.items.length && (0, kb.jsx)(lK, {
          items: ie.items,
          origins: Me.itemOrigins,
          target: Me.itemTarget
        })]
      })
    }
    const hK = (0, de.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        const He = (0, Rb.j)(OH, ie.getSnapshot());
        return He ? (0, kb.jsx)(IK, {
          view: He
        }, He.token) : null
      })),
      NK = "Gold Coin";

    function GK(ee) {
      return 650 + 220 * ee
    }

    function rK(ee) {
      return {
        "--letter-delay": `${GK(ee)}ms`,
        "--letter-land": `${GK(ee)+300}ms`
      }
    }

    function QK(ee) {
      let {
        letterCount: ie
      } = ee;
      return (0, kb.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, kb.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, kb.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, kb.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: ie
        }, ((ee, ie) => (0, kb.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: rK(ie),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, ie)))]
      })
    }

    function eU(ee) {
      var ie, He, ye;
      let {
        letter: be,
        index: Me
      } = ee;
      const {
        t: Ke
      } = (0, ob.v)(), Ue = null !== (ie = null === (He = be.items[0]) || void 0 === He ? void 0 : He.itemName) && void 0 !== ie ? ie : NK;
      return (0, kb.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: rK(Me),
        children: [(0, kb.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, kb.jsx)(Ub.c, {
            itemName: Ue,
            amount: 0
          })
        }), (0, kb.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Ke(be.reasonKey, null !== (ye = be.reasonParams) && void 0 !== ye ? ye : void 0)
        }), (0, kb.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [be.coins > 0 && (0, kb.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, kb.jsx)(Ub.c, {
              itemName: NK,
              amount: 0
            }), "+", (0, Jb.h)(be.coins)]
          }), be.items.map(((ee, ie) => (0, kb.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, kb.jsx)(Ub.c, {
              itemName: ee.itemName,
              amount: 0
            }), ee.label, " \xd7", ee.amount]
          }, ie)))]
        })]
      })
    }

    function iU(ee) {
      let {
        view: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)();
      return (0, kb.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${ie.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${GK(ie.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, kb.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, kb.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, kb.jsx)(QK, {
              letterCount: ie.letters.length
            }), (0, kb.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: He("skyblockGame:mailboxTitle")
            })]
          }), (0, kb.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: ie.letters.map(((ee, ie) => (0, kb.jsx)(eU, {
              letter: ee,
              index: ie
            }, ie)))
          }), ie.more > 0 && (0, kb.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: He("skyblockGame:mailboxMore", {
              count: String(ie.more)
            })
          })]
        })
      })
    }
    const HU = (0, de.memo)((function(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(wH, ie.getSnapshot());
      return He ? (0, kb.jsx)(iU, {
        view: He
      }, He.token) : null
    }));

    function yU(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, Rb.j)(By, ie.getSnapshot());
      if (null === ye) return null;
      const be = ye.fullSet ? "empty" === ye.fuelState ? {
        text: He("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: He("skyblockGame:magmawardHudFullSet", {
          worn: String(ye.wornCount)
        }),
        tone: "partial"
      };
      return (0, kb.jsx)(Mb.d, {
        placement: "statBars",
        children: (0, kb.jsxs)("div", {
          className: yb()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${ye.fuelState}`, {
            "SkyblockMagmawardHud-partial": !ye.fullSet,
            "SkyblockMagmawardHud-armed": ye.fullSet && "empty" !== ye.fuelState
          }),
          children: [null !== ye.flare && (0, kb.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${ye.flare}`
          }, `flare:${ye.flareToken}`), (0, kb.jsx)("div", {
            className: yb()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: ye.setLit
            }),
            children: ye.pieces.map(((ee, ie) => (0, kb.jsx)("div", {
              className: yb()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: ee.worn,
                SkyblockMagmawardPieceJustWorn: ee.justWorn
              }),
              children: (0, kb.jsx)(Ub.c, {
                itemName: ee.itemName,
                amount: 0
              })
            }, `${ie}:${ee.wornToken}`)))
          }, `pieces:${ye.setLitToken}`), (0, kb.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, kb.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, kb.jsxs)("div", {
              className: yb()("SkyblockMagmawardFuelCounter", ye.pulse && `SkyblockMagmawardFuelCounter-${ye.pulse}`),
              children: [(0, kb.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, kb.jsx)(Ub.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, kb.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: ye.fuel
              })]
            }, `counter:${ye.pulseToken}`), "burn" === ye.pulse && (0, kb.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${ye.pulseToken}`)]
          }), be && (0, kb.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${be.tone} SmallTextBold`,
            children: be.text
          })]
        })
      })
    }

    function bU(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He,
        selectedLanguage: ye
      } = (0, ob.v)(), be = (0, Rb.j)(gy, ie.getSnapshot());
      return null === be ? null : (0, kb.jsx)(Mb.d, {
        placement: "statBars",
        children: (0, kb.jsxs)("div", {
          className: yb()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: be.inRange
          }),
          style: {
            "--glowtide-colour": be.colour
          },
          "aria-label": He("skyblockGame:glowtideChipLabel"),
          children: [(0, kb.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), be.inRange ? (0, kb.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: He("skyblockGame:glowtideChipInRange")
          }, `call:${be.inRangeToken}`) : (0, kb.jsxs)(kb.Fragment, {
            children: [(0, kb.jsx)("div", {
              ref: ie.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, kb.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: He("skyblockGame:waypointDistance", {
                distance: Ee(be.distance, ye.code)
              })
            })]
          })]
        })
      })
    }

    function MU(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, Rb.j)(dy, ie.getSnapshot());
      return null === ye ? null : (0, kb.jsx)(Mb.d, {
        placement: "statBars",
        children: (0, kb.jsxs)("div", {
          className: yb()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: ye.full
          }),
          "aria-label": He("skyblockGame:glowMeterLabel", {
            fill: String(ye.fill),
            bk: String(ye.bk)
          }),
          children: [ye.burst && (0, kb.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${ye.burstToken}`), (0, kb.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, kb.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${ye.ratio})`
              }
            }), ye.gained && (0, kb.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${ye.gainToken}`), ye.full && Array.from({
              length: 5
            }, ((ee, ie) => (0, kb.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, ie)))]
          }), ye.full && ye.rares.map((ee => (0, kb.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, kb.jsx)(Ub.c, {
              itemName: ee,
              amount: 0
            })
          }, ee))), ye.ready && (0, kb.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, kb.jsx)("span", {
              children: He("skyblockGame:glowMeterReady")
            })
          }, `ready:${ye.fullToken}`)]
        })
      })
    }

    function KU(ee) {
      let {
        controller: ie
      } = ee;
      const {
        t: He
      } = (0, ob.v)(), ye = (0, Rb.j)(ty, ie.getSnapshot());
      if (null === ye) return null;
      const be = "waiting" === ye.phase,
        Me = {
          animationDuration: `${ye.waitMs}ms`,
          animationDelay: -ye.elapsedMs + "ms"
        },
        Ke = be ? void 0 : {
          animationDuration: `${ye.waitMs}ms`
        };
      return (0, kb.jsxs)("div", {
        className: be ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [be && (0, kb.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((ee, ie) => (0, kb.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, ie))), (0, kb.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Me
          }), (0, kb.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, kb.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, kb.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Me
            })]
          }), (0, kb.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, kb.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Ke,
          children: He(ye.line)
        }, ye.lineIndex)]
      }, ye.token)
    }

    function UU(ee) {
      let {
        chart: ie,
        showHere: He,
        className: ye
      } = ee;
      return (0, kb.jsx)("div", {
        className: yb()("SkyblockTideChartGrid", ye, null !== ie.pictureName && "Complete"),
        "aria-hidden": "true",
        children: ie.cells.map(((ee, ye) => {
          const be = 0 !== (ie.pulseCells & 1 << ye),
            Me = ie.castCell === ye;
          return (0, kb.jsx)("span", {
            className: yb()("SkyblockTideChartCell", `Cell-${ee}`, be && "Pulse", Me && "Cast", He && ie.hereCell === ye && "Here")
          }, `${ye}:${be?`p${ie.pulseToken}`:""}:${Me?`c${ie.castToken}`:""}`)
        }))
      })
    }

    function FU(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(wy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = He.chip;
      if (!He.enabled || null === be) return null;
      const Me = ye("skyblockGame:tideChartsChipLabel", {
        island: be.islandName,
        lit: String(be.lit),
        ink: String(be.ink)
      });
      return (0, kb.jsx)(Mb.d, {
        placement: "statBars",
        children: (0, kb.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: yb()("SkyblockTideChartsChip", He.open && "Open", null !== be.pictureName && "Complete"),
          "aria-label": Me,
          title: Me,
          onMouseDown: ee => {
            ee.preventDefault()
          },
          onClick: ie.toggle,
          children: [(0, kb.jsx)(UU, {
            chart: be,
            showHere: !1,
            className: "Mini"
          }), (0, kb.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [be.lit, "/", be.ink]
          })]
        })
      })
    }

    function JU(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Rb.j)(wy, ie.getSnapshot()),
        {
          t: ye
        } = (0, ob.v)(),
        be = db(),
        Me = He.card;
      return He.enabled && null !== Me ? (0, kb.jsx)(Eb.e, {
        show: He.open,
        close: ie.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, kb.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: be,
          onKeyDown: Ob,
          children: [(0, kb.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, kb.jsxs)("div", {
              children: [(0, kb.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: ye("skyblockGame:tideChartsTitle")
              }), (0, kb.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: ye("skyblockGame:tideChartsIntro")
              })]
            }), (0, kb.jsx)(gb.i, {
              padIgnore: !0,
              ariaLabel: ye("skyblockGame:tideChartsClose"),
              onClick: ie.dismiss
            })]
          }), He.tabs.length > 1 && (0, kb.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": ye("skyblockGame:tideChartsIslands"),
            children: He.tabs.map((ee => (0, kb.jsx)("button", {
              type: "button",
              className: yb()("SkyblockTideChartsTab", ee.selected && "Selected"),
              "aria-pressed": ee.selected,
              onClick: () => {
                ie.tq(ee.island)
              },
              children: ee.name
            }, ee.island)))
          }), (0, kb.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, kb.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Me.gridLabel,
              children: (0, kb.jsx)(UU, {
                chart: Me,
                showHere: !0,
                className: "Large"
              })
            }), (0, kb.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, kb.jsx)("h3", {
                children: Me.islandName
              }), (0, kb.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Me.litText
              }), null === Me.pictureName ? (0, kb.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: ye("skyblockGame:tideChartsPictureHidden")
              }) : (0, kb.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: ye("skyblockGame:tideChartsPictureRevealed", {
                  picture: Me.pictureName
                })
              }, Me.pictureName), (0, kb.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, kb.jsxs)("li", {
                  children: [(0, kb.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), ye("skyblockGame:tideChartsLegendLit")]
                }), (0, kb.jsxs)("li", {
                  children: [(0, kb.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), ye("skyblockGame:tideChartsLegendClear")]
                }), null !== Me.hereCell && (0, kb.jsxs)("li", {
                  children: [(0, kb.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), ye("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, kb.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, kb.jsx)("span", {
                  children: He.turnsText
                }), (0, kb.jsx)("span", {
                  children: He.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function oU(ee) {
      var ie;
      let {
        controller: He
      } = ee;
      const {
        selectedLanguage: ye
      } = (0, ob.v)(), be = ye.code;
      (0, de.useEffect)((() => {
        He.setTranslator(((ee, ie) => (0, ob.s)(be, ee, ie)), be, ((ee, ie) => (0, ob.o)(be, ee, ie)))
      }), [He, be]);
      const Me = (0, Rb.j)(Je, He.map.getSnapshot()),
        {
          openInGameMenuName: Ke
        } = (0, bb.m)(["openInGameMenuName"]);
      return (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsx)(cK, {
          controller: He.quests,
          display: He.navigation.display
        }), Me.enabled && !Ke && (0, kb.jsx)(Cb, {
          controller: He.navigation
        }), (0, kb.jsx)(qb, {
          controller: He,
          minimap: Me.enabled && (null === (ie = Me.presentation) || void 0 === ie ? void 0 : ie.minimap) && (0, kb.jsx)(Lb, {
            view: Me.presentation.minimap,
            navigation: He.navigation,
            controller: He.map
          }),
          children: (0, kb.jsx)(Ib, {
            controller: He.quests,
            surface: "hud"
          })
        }), (0, kb.jsx)(YK, {
          controller: He.navigation
        }), (0, kb.jsx)(LK, {
          controller: He.portalTransit
        }), (0, kb.jsx)(hK, {
          controller: He.dailyReward
        }), (0, kb.jsx)(HU, {
          controller: He.mailbox
        }), (0, kb.jsx)(yU, {
          controller: He.magmaward
        }), (0, kb.jsx)(bU, {
          controller: He.glowtide
        }), (0, kb.jsx)(IM, {
          controller: He.passage
        }), (0, kb.jsx)(FU, {
          controller: He.tideCharts
        }), (0, kb.jsx)(MU, {
          controller: He.glowMeter
        }), (0, kb.jsx)(MK, {
          controller: He.reachLog
        }), (0, kb.jsx)(KU, {
          controller: He.hushWait
        }), (0, kb.jsx)(iK, {
          controller: He.lampLight
        }), (0, kb.jsx)(vb, {
          controller: He.skills,
          surface: "hud"
        })]
      })
    }

    function RU(ee) {
      let {
        controller: ie
      } = ee;
      return (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsx)(xb, {
          controller: ie.map,
          navigation: ie.navigation
        }), (0, kb.jsx)(vb, {
          controller: ie.skills,
          surface: "menu"
        }), (0, kb.jsx)(Ib, {
          controller: ie.quests,
          surface: "menu"
        }), (0, kb.jsx)(wM, {
          controller: ie.dungeons
        }), (0, kb.jsx)(AM, {
          controller: ie.collections
        }), (0, kb.jsx)(aM, {
          controller: ie.questGraph
        }), (0, kb.jsx)(vM, {
          controller: ie.forge
        }), (0, kb.jsx)(jM, {
          controller: ie.smuggler
        }), (0, kb.jsx)(yK, {
          controller: ie.keepersChair,
          lampLight: ie.lampLight
        }), (0, kb.jsx)(ZK, {
          controller: ie.reachLog,
          regulars: ie.regulars,
          hiddenWaters: ie.hiddenWaters
        }), (0, kb.jsx)(JK, {
          controller: ie.regulars
        }), (0, kb.jsx)(NM, {
          controller: ie.passage
        }), (0, kb.jsx)(JU, {
          controller: ie.tideCharts
        }), (0, kb.jsx)(PK, {
          controller: ie.dialogue
        }), (0, kb.jsx)(AK, {
          controller: ie.autographs
        })]
      })
    }
    var kU = He(37578);
    const qU = xH + SH;

    function fU(ee, ie) {
      const He = [{
        sound: "rpgKnifeSlice1",
        beat: xH,
        lead: 260,
        volume: .5,
        rate: 1
      }, {
        sound: "sweep6",
        beat: xH,
        lead: 140,
        volume: .35,
        rate: .85
      }, {
        sound: "rpgMetalPot1",
        beat: xH,
        lead: 100,
        volume: 1,
        rate: .78 + .04 * Math.random()
      }, {
        sound: "hit1",
        beat: xH,
        lead: 0,
        volume: .8,
        rate: .7
      }, {
        sound: "lowDrum1",
        beat: xH,
        lead: 60,
        volume: .6,
        rate: 1
      }, {
        sound: "zapAccent1",
        beat: 360,
        lead: 60,
        volume: .3,
        rate: 1.3
      }, {
        sound: "firecracker",
        tq: !0,
        beat: 420,
        lead: 160,
        volume: .25,
        rate: 1.4,
        cutAfter: 500
      }, {
        sound: "fireBurn",
        beat: qU + 150,
        lead: 400,
        volume: .6,
        rate: 1.2
      }, {
        sound: "bigDrumSwish",
        tq: !0,
        beat: qU + 80,
        lead: 480,
        volume: .35,
        rate: 1,
        cutAfter: 1400
      }, {
        sound: "magicAccent2",
        beat: qU + 60,
        lead: 180,
        volume: .5 + .06 * ee,
        rate: .82 + .07 * ee
      }];
      return ee >= 4 && He.push({
        sound: "exp_levelup",
        beat: qU + 120,
        lead: 60,
        volume: .35,
        rate: 1
      }), ie && He.push({
        sound: "trumpetFlare",
        beat: qU + 40,
        lead: 20,
        volume: .8,
        rate: 1
      }), He.push({
        sound: "harp_pling",
        beat: LH,
        lead: 40,
        volume: .2,
        rate: 1.5
      }), He
    }
    class TU {
      constructor(ee) {
        this.deps = ee, this.pending = new Map, this.localHook = null
      }
      hookWaiting(ee, ie) {
        this.pending.delete(ee);
        const He = this.deps.now();
        if (null === ie) {
          var ye;
          if ((null === (ye = this.localHook) || void 0 === ye ? void 0 : ye.hookId) === ee) {
            const ee = He >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(ee)
          }
          return
        }
        const be = He + ie;
        this.settle(ee, be) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(ee, {
          untilMs: He + 1e3,
          biteAtMs: be
        }))
      }
      getLocalHook() {
        var ee, ie;
        return null !== (ee = null === (ie = this.localHook) || void 0 === ie ? void 0 : ie.hookId) && void 0 !== ee ? ee : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const ee = this.deps.now();
        for (const [ie, {
            untilMs: He,
            biteAtMs: ye
          }] of this.pending)(this.settle(ie, ye) || ee > He) && this.pending.delete(ie)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(ee, ie) {
        const He = this.deps.getLineOwner(ee);
        if (null === He) return !1;
        if (!this.deps.isLocalPlayer(He)) return !0;
        if (this.localHook = {
            hookId: ee,
            biteAtMs: ie
          }, !this.deps.isHushWaiting()) {
          const [ie, He] = this.deps.getHookPosition(ee);
          this.deps.onCastLanded(ie, He)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var pU = He(4598);
    const XU = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      zU = {
        1: {
          count: 24,
          rise: 2.5,
          colour: [79, 237, 237]
        },
        2: {
          count: 40,
          rise: 3.5,
          colour: [245, 209, 66]
        },
        3: {
          count: 64,
          rise: 5,
          colour: [206, 145, 206]
        }
      };
    class BU {
      constructor(ee) {
        this.deps = ee, this.tell = null
      }
      receiveTell(ee) {
        let {
          biteTellTier: ie
        } = ee;
        this.tell = {
          tier: ie,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(ee) {
        const ie = this.tell;
        if (this.tell = null, !ee) return;
        const He = null !== ie && this.deps.now() - ie.atMs <= 3e3 ? ie.tier : 0;
        this.deps.vibrate(XU[He])
      }
      burstAtHook() {
        const ee = this.tell,
          ie = this.deps.getLocalHookPosition();
        null === ee || ee.burst || null === ie || (ee.burst = !0, this.deps.playParticles(function(ee, ie) {
          let [He, ye, be] = ie;
          const {
            count: Me,
            rise: Ke,
            colour: Ue
          } = zU[ee], [Fe, Je, oe] = Ue;
          return {
            texture: "glint",
            pos1: [He - .3, ye, be - .3],
            pos2: [He + .3, ye + .2, be + .3],
            dir1: [-.6, Ke, -.6],
            dir2: [.6, 1.4 * Ke, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Me,
            gravity: [0, -4, 0],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }, {
              timeFraction: 1,
              factor: .2,
              factor2: .2
            }],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Fe, Je, oe, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Fe, Je, oe, 0],
              maxColor: [Fe, Je, oe, 0]
            }],
            blendMode: pU.e.Add,
            hideDist: 48
          }
        }(ee.tier, ie)))
      }
    }
    var EU = He(1196),
      gU = He(1988),
      OU = He(35),
      dU = He(186);
    const WU = dU.g.UX * dU.g.playerEyeToHeightRatio;
    class tU {
      constructor(ee) {
        this.host = ee, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      DR(ee) {
        this.lava = ee, this.nextUpdateAt = 0
      }
      YR() {
        var ee;
        const ie = this.host.now();
        if (ie < this.nextUpdateAt) return;
        this.nextUpdateAt = ie + 250;
        const He = this.host.playerPosition(),
          ye = He && this.findNearest([He[0], He[1] + WU, He[2]]);
        if (!ye || ye.distance >= 40) return void this.stop();
        const be = .5 * Math.min(1, (40 - ye.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(be) : this.loop = this.host.play("lavaFlow", be, ye.position, 40 + WU, 9, !0), null === (ee = this.loop) || void 0 === ee || ee.setPosition(ye.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var ee;
        null === (ee = this.loop) || void 0 === ee || ee.stop(), this.loop = null
      }
      findNearest(ee) {
        let ie = -1,
          He = 1 / 0;
        for (let ye = 0; ye < this.lava.length; ye += 3) {
          const be = this.lava[ye] - ee[0],
            Me = this.lava[ye + 1] - ee[1],
            Ke = this.lava[ye + 2] - ee[2],
            Ue = be * be + Me * Me + Ke * Ke;
          Ue < He && (He = Ue, ie = ye)
        }
        return ie < 0 ? null : {
          position: [this.lava[ie], this.lava[ie + 1], this.lava[ie + 2]],
          distance: Math.sqrt(He)
        }
      }
    }
    var ZU = He(1965),
      wU = He(39446);
    const DU = {
      "Grey Portal": "Gray"
    };
    for (const xU of Re.Lc) DU[`${xU} Portal`] = xU;
    const PU = Object.keys(DU),
      AU = Object.fromEntries(PU.map((ee => [ee, (0, Re.Y)(Re.L[`${(0,Re.ve)(DU[ee])}Team`])])));
    Object.fromEntries(PU.map((ee => [ee, Re.L[`${(0,Re.ve)(DU[ee])}UiText`]])));
    class YU {
      constructor(ee, ie) {
        this.presentation = ee, this.portal = ie, this.unlocked = void 0
      }
      DR(ee) {
        const ie = !1 === this.unlocked && ee;
        this.unlocked = ee, this.YR();
        const {
          min: He,
          max: ye,
          unlockedBlock: be
        } = this.portal;
        if (ie && this.presentation.hasChunk(...He)) {
          const [ee, ie, Me] = AU[be];
          this.presentation.playParticles({
            pos1: [...He],
            pos2: ye.map((ee => ee + 1)),
            dir1: [-1, 0, -1],
            dir2: [1, 1, 1],
            texture: "glint",
            minLifeTime: .4,
            maxLifeTime: 1.2,
            minEmitPower: .5,
            maxEmitPower: 1.5,
            minSize: .12,
            maxSize: .25,
            manualEmitCount: 80,
            hideDist: 64,
            gravity: [0, .5, 0],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ee, ie, Me, 1],
              maxColor: [Math.min(255, ee + 55), Math.min(255, ie + 55), Math.min(255, Me + 90), 1]
            }],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }],
            blendMode: 1
          })
        }
      }
      YR() {
        var ee;
        const ie = this.unlocked ? this.portal.unlockedBlock : null !== (ee = this.portal.lockedBlock) && void 0 !== ee ? ee : "Light Gray Portal",
          {
            min: He,
            max: ye
          } = this.portal;
        for (let be = He[0]; be <= ye[0]; be++)
          for (let ee = He[1]; ee <= ye[1]; ee++)
            for (let Me = He[2]; Me <= ye[2]; Me++) this.presentation.hasChunk(be, ee, Me) && this.presentation.kE(be, ee, Me) !== ie && this.presentation.RV(be, ee, Me, ie)
      }
    }
    var VU = He(39366);
    He(39345);
    const aU = {
        farming_1: {
          raises: ee => "NPC" === ee.type && "chef" === ee.variation,
          rise: .4
        },
        fishing_1: {
          raises: ee => "Draugr Warper" === ee.type,
          rise: .4
        }
      },
      cU = (ee, ie, He, be) => {
        let {
          localPlayerId: Me
        } = be;
        const Ke = new ib({
          translate: (ee, ie) => (0, ob.s)(EU.f.get().getCurrentLanguageCode(), ee, ie),
          translateWithIcons: (ee, ie) => (0, ob.o)(EU.f.get().getCurrentLanguageCode(), ee, ie),
          setMenuOpen: ee => {
            ee ? (0, ne.s)() : (0, ne.h)()
          },
          dismissMenu: ne.l,
          publishSkills: ee => {
            je.h.yR(ui, ee, !0)
          },
          publishQuests: ee => {
            je.h.yR(ni, ee, !0)
          },
          publishQuestNotification: ee => {
            je.h.yR(ji, ee, !0)
          },
          publishDungeons: ee => {
            je.h.yR(Ni, ee, !0)
          },
          publishCollections: ee => {
            je.h.yR(XH, ee, !0)
          },
          publishMap: ee => {
            je.h.yR(Je, ee, !0)
          },
          publishHud: ee => {
            je.h.yR(ry, ee, !0)
          },
          publishPortalTransit: ee => {
            je.h.yR(BH, ee, !0)
          },
          isLoadingScreenUp: () => bb.e.get("loadingOverlayVisible"),
          publishDailyReward: ee => {
            je.h.yR(OH, ee, !0)
          },
          publishMailbox: ee => {
            je.h.yR(wH, ee, !0)
          },
          publishQuestGraph: ee => {
            je.h.yR(PH, ee, !0)
          },
          publishForge: ee => {
            je.h.yR(GH, ee, !0)
          },
          publishSmuggler: ee => {
            je.h.yR(ey, ee, !0)
          },
          publishKeepersChair: ee => {
            je.h.yR(Jy, ee, !0)
          },
          publishReachLog: ee => {
            je.h.yR(Ry, ee, !0)
          },
          publishLampLight: ee => {
            je.h.yR(Xy, ee, !0)
          },
          publishMagmaward: ee => {
            je.h.yR(By, ee, !0)
          },
          publishGlowtide: ee => {
            je.h.yR(gy, ee, !0)
          },
          publishGlowMeter: ee => {
            je.h.yR(dy, ee, !0)
          },
          publishHushWait: ee => {
            je.h.yR(ty, ee, !0)
          },
          publishPassage: ee => {
            je.h.yR(yy, ee, !0)
          },
          publishTideCharts: ee => {
            je.h.yR(wy, ee, !0)
          },
          publishRegulars: ee => {
            je.h.yR(xy, ee, !0)
          },
          publishHiddenWaters: ee => {
            je.h.yR(my, ee, !0)
          },
          publishDialogue: ee => {
            je.h.yR(Sy, ee, !0)
          },
          publishAutographs: ee => {
            je.h.yR(hy, ee, !0)
          },
          onDailyRewardStarted: ee => {
            Ae.playSound(Me, ee.day === te ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (ee, ie) => {
            Ae.playSound(Me, "exp_collect", .35, 1 + .6 * ee / (ie - 1)), je.h.yR(dH, ee === ie - 1)
          },
          onDailyRewardItemLanded: ee => {
            Ae.playSound(Me, "pickUp", .6, 1 + .15 * ee)
          },
          onMailboxStarted: () => {
            Ae.playSound(Me, "rpgMetalClick", .6, 1), Ae.playSound(Me, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Ae.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: OU.m,
          requestTracking: ee => {
            Ae.sendCommand(`quests track ${ee}`)
          },
          requestDungeonEnter: (ee, ie) => {
            Ae.sendCommand(`dungeonEnter ${ee} ${ie}`)
          },
          requestQuestJump: ee => {
            Ae.sendCommand(`${Ye} jump ${ee}`)
          },
          requestQuestArrive: (ee, ie) => {
            const He = `${Ye} arrive ${ee}`;
            Ae.sendCommand(ie ? `${He} complete` : He)
          },
          requestForge: ee => {
            let {
              blade: ie,
              guard: He,
              handle: ye
            } = ee;
            Ae.sendCommand(`forge ${ie} ${He} ${ye}`)
          },
          requestDialogue: () => {
            Ae.sendCommand("quests dialogue")
          },
          requestSmuggle: (ee, ie) => {
            Ae.sendCommand(`smuggle ${ee} ${ie}`)
          },
          requestKeepersChairAim: ee => {
            Ae.sendCommand(`keeperschair-aim ${ee}`)
          },
          requestReachLogOpen: () => {
            Ae.sendCommand("reachlog-open")
          },
          requestLampLight: ee => {
            Ae.sendCommand(`${ee}`)
          },
          requestTravel: ee => {
            Ae.sendCommand(`map travel ${ee.kind} ${ee.id} ${ee.requestId}`)
          }
        });
        let Ue, Fe, oe, ke, qe, ze, Be, Ee, ge, We, Ze, De, Pe, Ae, Ve = null;
        const Le = aU[null !== He && void 0 !== He ? He : ""],
          ue = (ee, ie) => {
            null !== Le && void 0 !== Le && Le.raises(ie) && Ae.setNametagOffset(ee, Le.rise)
          },
          me = new BU({
            getLocalHookPosition: () => {
              const ee = Ie.getLocalHook();
              return null !== ee && Ae.checkValid(ee) ? Ae.pE(ee) : null
            },
            playParticles: ee => {
              Ae.playParticleEffect(ee)
            },
            vibrate: ee => {
              se.h.play("fishBite", ee)
            },
            now: () => performance.now()
          }),
          Ie = new TU({
            getLineOwner: ee => Ae.checkValid(ee) ? Ae.getLineOwner(ee) : null,
            isLocalPlayer: ee => Ae.isLocalPlayer(ee),
            getHookPosition: ee => {
              const [ie, , He] = Ae.pE(ee);
              return [ie, He]
            },
            isHushWaiting: () => {
              var ee;
              return "waiting" === (null === (ee = Ke.hushWait.getSnapshot()) || void 0 === ee ? void 0 : ee.phase)
            },
            onCastLanded: (ee, ie) => {
              Ke.tideCharts.castLanded(ee, ie)
            },
            onLocalHookSettled: () => {
              me.onLocalHookSettled()
            },
            onLocalWaitEnded: ee => {
              me.onLocalWaitEnded(ee)
            },
            now: () => performance.now()
          }),
          he = new tU({
            now: () => performance.now(),
            playerPosition: () => Ae.checkValid(Me) ? Ae.pE(Me) : null,
            play: (ee, ie, He, ye, be, Ke) => Ae.playSound(Me, ee, ie, 1, {
              mb: He,
              maxHearDist: ye,
              refDistance: be
            }, Ke)
          }),
          Ne = new Map;
        let Ge;
        return {
          onCreate: ee => {
            if (Ae = ee, Ve = new wU.SkyblockEntityFacing(ee, Le ? ue : null), Ke.portalTransit.resumeArrival(null !== He && void 0 !== He ? He : null), (null !== He && void 0 !== He ? He : ye) === ye) {
              let ee = -1 / 0;
              Ge = je.h.subscribe("toggleMenu", (ie => {
                const He = performance.now();
                "inventory|Workbench" !== ie || "cross_to_hub" !== Ke.quests.getTrackedQuestId() || He - ee < 1e4 || (ee = He, Ae.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [ye, be] of Object.entries(null !== (ie = ae[null !== He && void 0 !== He ? He : ""]) && void 0 !== ie ? ie : {})) {
              var ie;
              Ne.set(ye, new YU({
                hasChunk: (ie, He, ye) => ee.isBlockInLoadedChunk(ie, He, ye),
                kE: (ie, He, ye) => ee.blockIdToBlockName(ee.getBlockId(ie, He, ye)),
                RV: (ie, He, ye, be) => {
                  ee.RV(ie, He, ye, be)
                },
                playParticles: ie => {
                  ee.playParticleEffect(ie)
                }
              }, be))
            }
            Pe = (0, ZU.c)((ee => (0, ti.f)(ee) ? (0, ti.d)(ee) : null)), Ke.resolveItemName = (ie, He) => {
              const ye = ee.getItemStat(Me, ie, "displayName");
              return ye && "object" === typeof ye && "translationKey" in ye ? He(ye.translationKey, (0, ob.m)(ye.params, gU.c.shown)) : "string" === typeof ye ? He(ye) : ie
            }, Ke.quests.notifications.onShown = ee => {
              "quest" === ee ? Ae.playSound(Me, "magicAccent1", 1, 1) : "skillLevel" === ee ? Ae.playSound(Me, "magicAccent1", 1, .6) : "landmark" === ee ? Ae.playSound(Me, "trumpetFlare", 1, .6) : "npcNote" === ee ? Ae.playSound(Me, "magicAccent2", .8, 1.1) : "started" === ee ? Ae.playSound(Me, (0, kU.g)("bigDrumSwish"), 1, 1) : Ae.playSound(Me, (0, kU.g)("rpgHandleSmallLeather"), 1, 1)
            }, Ke.forge.onPartSelected = () => {
              Ae.playSound(Me, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Ke.forge.onOpened = () => {
              ! function(ee) {
                ee.preloadSounds(fU(4, !0).map((ee => ee.sound)))
              }(ee)
            }, Ke.forge.onForgeStarted = (ie, He, ye) => function(ee, ie, He, ye, be) {
              const Me = [],
                Ke = [],
                Ue = He => {
                  const ye = ee.playSound(ie, He.tq ? (0, kU.g)(He.sound) : He.sound, He.volume, He.rate);
                  ye && (Ke.push(ye), void 0 !== He.cutAfter && Me.push(setTimeout((() => {
                    ye.fade(ye.getVolume(), 0, 300)
                  }), He.cutAfter)))
                };
              for (const Fe of fU(He, ye)) be ? Me.push(setTimeout((() => {
                Ue(Fe)
              }), Math.max(0, Fe.beat - Fe.lead / Fe.rate))) : Fe.beat !== xH && "magicAccent2" !== Fe.sound && "trumpetFlare" !== Fe.sound || Ue(Fe);
              return () => {
                for (const ee of Me) clearTimeout(ee);
                for (const ee of Ke) ee.fade(ee.getVolume(), 0, 120)
              }
            }(ee, Me, ie, He, ye), Ke.smuggler.onBought = () => {
              Ae.playSound(Me, (0, kU.g)("rpgHandleSmallLeather"), 1, 1), Ae.playSound(Me, "chestOpen", .6, 1)
            }, Ke.compass.register(new fe(Ke.map, !0)), Ke.compass.register(new fe(Ke.map, !1)), Ke.compass.register(new pe(Ke.map)), Ke.compass.register(new Xe((() => Ke.quests.getSnapshot().compassTarget)));
            for (const He of ["enemy", "npc"]) Ke.compass.register(new Te(Ke.map, He, (ie => ee.checkValid(ie) ? ee.pE(ie) : void 0), (ie => ee.isAlive(ie))))
          },
          onAfterRender: (ee, ie) => {
            const He = Ae.checkValid(Me) ? Ae.pE(Me) : null;
            Ke.navigation.afterRender(He, performance.now(), ie), Ke.glowtide.afterRender(He, ie.cameraHeading), Ke.tideCharts.afterRender(He), Ie.afterRender()
          },
          onClose: () => {
            var ee, ie, He, ye, be, Me, Je, Re, fe, Te, pe, Xe, ze, Oe, de;
            Ge && je.h.unsubscribe(Ge), null === (ee = Pe) || void 0 === ee || ee(), he.dispose(), null === (ie = Ve) || void 0 === ie || ie.dispose(), Ie.dispose(), Ke.dispose(), null === (He = Ue) || void 0 === He || He(), null === (ye = Fe) || void 0 === ye || ye(), null === (be = oe) || void 0 === be || be(), null === (Me = ke) || void 0 === Me || Me(), null === (Je = qe) || void 0 === Je || Je(), null === (Re = Be) || void 0 === Re || Re(), null === (fe = undefined) || void 0 === fe || fe(), null === (Te = Ee) || void 0 === Te || Te(), null === (pe = ge) || void 0 === pe || pe(), null === (Xe = We) || void 0 === Xe || Xe(), null === (ze = Ze) || void 0 === ze || ze(), null === (Oe = undefined) || void 0 === Oe || Oe(), null === (de = De) || void 0 === de || de()
          },
          onPlayerChangeBlock: (ee, ie, ye, be, Ue, Fe) => {
            if (ee === Me && "Air" === Fe) {
              const ee = Ae.getClientOption(Me, "creative");
              Ke.skills.predictBlock([ie, ye, be], Ue, ee);
              const Fe = function(ee, ie) {
                  if ("hub" === ie || "farming_1" === ie || "mining_1" === ie) return !Ce.has(ee) || "hub" !== ie && "mining_1" !== ie ? Object.hasOwn(xe, ee) ? xe[ee] : void 0 : ce
                }(Ue, He),
                Je = ("hub" === He || "mining_1" === He) && (Re.vd.some((ee => ee === Ue)) || Object.hasOwn(ve, Ue) || "mining_1" === He && "Block of Coal" === Ue);
              ee || void 0 === Fe && !Je || Ae.RV(ie, ye, be, null !== Fe && void 0 !== Fe ? Fe : ce)
            }
          },
          onPlayerAttackEntity: (ee, ie) => {
            if (ee !== Me || "Player" !== Ae.getEntityType(ie)) return;
            const [He, ye, be] = Ae.pE(ie);
            Ae.burstParticlePreset("critical", [He, ye + 1, be], 10)
          },
          onChangeBlockFail: ee => {
            for (const {
                NM: ie
              }
              of ee) Ke.skills.rejectBlock(ie)
          },
          onReceivedMessageFromServer: (ee, ie) => {
            if ("skyblockGatedPortal" === ee) {
              var He;
              const [ee, ye] = ie;
              return void(null === (He = Ne.get(ee)) || void 0 === He || He.DR(ye))
            }
            if ("skyblockDailyReward" === ee) return void Ke.dailyReward.DR(ie);
            if ("skyblockMailbox" === ee) return void Ke.mailbox.DR(ie);
            if ("skyblockPortalTransit" === ee) return void Ke.portalTransit.DR(ie);
            if ("skyblockLava" === ee) return void he.DR(ie);
            if ("skyblockForge" === ee) return void Ke.forge.DR(ie);
            if ("skyblockMagmaward" === ee) return void Ke.magmaward.DR(ie);
            if ("skyblockGlowtide" === ee) return void Ke.glowtide.DR(ie);
            if ("skyblockGlowMeter" === ee) return void Ke.glowMeter.DR(ie);
            if ("skyblockHushWait" === ee) return void Ke.hushWait.DR(ie);
            if ("skyblockPassage" === ee) {
              const ee = ie;
              return Ke.passage.DR(ee), Ke.reachLog.receivePassagePhase(ee.passagePhase), We ??= (0, Oe.p)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Ke.passage.show
              }), void Ke.keepersChair.receivePassage({
                keepersChairPassagePhase: ee.passagePhase,
                keepersChairPassageNextPhase: ee.passageNextPhase,
                keepersChairPassageTurnsInMs: ee.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === ee) {
              const ee = ie;
              return Ke.tideCharts.DR(ee), void(ee.tideCharts.length > 0 && (Ze ??= (0, Oe.p)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Ke.tideCharts.show
              })))
            }
            if (ee === le.B) {
              var ye;
              const {
                hookId: ee,
                waiting: He
              } = ie;
              return void Ie.hookWaiting(ee, null !== (ye = null === He || void 0 === He ? void 0 : He.remainingMs) && void 0 !== ye ? ye : null)
            }
            if ("skyblockBiteTell" === ee) return void me.receiveTell(ie);
            if ("skyblockSmuggler" === ee) return void Ke.smuggler.DR(ie);
            if ("skyblockKeepersChair" === ee) return Ke.keepersChair.DR(ie), void Ke.lampLight.setAtChair(Ke.keepersChair.isAtChair());
            if ("skyblockLampLight" === ee) {
              const ee = ie;
              var be;
              if (Ke.lampLight.DR(ee), ee.lampLightReleasing) ge ??= (0, Oe.p)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Ke.lampLight.setRelease(!1)
                }
              });
              else null === (be = ge) || void 0 === be || be(), ge = void 0;
              return
            }
            if ("skyblockRegulars" === ee) return void Ke.regulars.DR(ie);
            if ("skyblockHiddenWaters" === ee) return void Ke.hiddenWaters.DR(ie);
            if ("skyblockReachLog" === ee) return Ke.reachLog.DR(ie), void(Ee ??= (0, Oe.p)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: qy
              },
              onClick: Ke.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === ee) {
              for (const [ee, He, ye, be] of ie) Ae.RV(ee, He, ye, be);
              return
            }
            if ("skyblockHud" === ee) Ke.receiveHud(ie);
            else if ("skyblockMap" === ee) Ke.map.DR(ie);
            else if (ee === Se.h) Ke.skills.DR(ie);
            else if (ee === we && "dialogue" === ie.kind) Ke.dialogue.DR(ie);
            else if (ee === we) Ke.quests.DR(ie);
            else if ("skyblockDungeons" === ee) Ke.dungeons.DR(ie);
            else if ("sbCollections" === ee) Ke.collections.DR(ie);
            else if ("skyblockQuestGraph" === ee) Ke.questGraph.DR(ie);
            else {
              if ("skyblockAutographs" !== ee) return;
              Ke.autographs.DR(ie)
            }
            if (!Fe && Ke.map.getSnapshot().enabled) {
              const ee = (0, Oe.p)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Ke.map.show
                }),
                ie = (0, ne.v)(Ke.map.show);
              Fe = () => {
                ee(), ie()
              }
            }!oe && Ke.skills.getSnapshot().enabled && (oe = (0, Oe.p)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Ke.skills.show
            })), !Be && Ke.collections.getSnapshot().enabled && (Be = (0, Oe.p)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Ke.collections.show
            })), !ke && Ke.quests.getSnapshot().enabled && (ke = (0, Oe.p)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Ke.quests.show
            })), !De && Ke.autographs.getSnapshot().enabled && (De = (0, Oe.p)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Ke.autographs.show
            }));
            const Me = Ke.dungeons.getSnapshot().enabled;
            var Je;
            (oe || ke || Me) && ze !== Me && (ze = Me, null === (Je = qe) || void 0 === Je || Je(), qe = (0, Oe.p)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: VU
              },
              disabled: !Me,
              panel: !0,
              onClick: Ke.dungeons.show
            }));
            Ue || (Ue = (0, ne.z)((0, de.createElement)(oU, {
              controller: Ke
            }), {
              content: (0, de.createElement)(RU, {
                controller: Ke
              }),
              onClose: Ke.close
            }))
          },
          YR: () => {
            var ee;
            for (const ie of Ne.values()) ie.YR();
            he.YR(), null === (ee = Ve) || void 0 === ee || ee.YR(), Ke.skills.YR(), Ke.quests.YR(), Ke.dailyReward.YR(), Ke.mailbox.YR(), Ke.map.YR()
          }
        }
      }
  },
  39324: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      i: () => be
    });
    var ye = He(347);
    const be = (0, ye.Ib)([0, 0, -1]),
      Me = [{
        name: "S",
        bearing: (0, ye.Ib)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, ye.Ib)([-1, 0, 0])
      }, {
        name: "N",
        bearing: be
      }, {
        name: "W",
        bearing: (0, ye.Ib)([1, 0, 0])
      }]
  },
  39320: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      c: () => Me
    });
    var ye = He(39324);

    function be(ee, ie, He) {
      return [100 * (He.mapMaxX - ee) / (He.mapMaxX - He.mapMinX), 100 * (ie - He.mapMinZ) / (He.mapMaxZ - He.mapMinZ)]
    }

    function Me(ee, ie, He, Me) {
      const [Ke, Ue] = be(ee, ie, Me), Fe = ye.i - He;
      return {
        rotation: Fe,
        transform: `rotate(${Fe}rad) translate(-${Ke}%, -${Ue}%)`
      }
    }
  },
  37150: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => ye
    });
    const ye = "skyblockSkills",
      be = "skills_test_gym"
  },
  39382: (ee, ie, He) => {
    var ye = {
      "./combat_1.png": 39384,
      "./dungeon_crumbling_crypt.png": 39386,
      "./dungeon_frozen_hollow.png": 39388,
      "./dungeon_wildwood_grove.png": 39393,
      "./dungeons.png": 39397,
      "./farming_1.png": 39406,
      "./fishing_1.png": 39412,
      "./hub.png": 39418,
      "./island.png": 39420,
      "./mining_1.png": 39425,
      "./mining_1_bridge.png": 39427,
      "./mining_1_gallery.png": 39429,
      "./mining_1_hollow.png": 39431,
      "./mining_1_village.png": 39436
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 39382
  },
  39384: (ee, ie, He) => {
    ee.exports = He.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  39386: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  39388: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  39393: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39397: (ee, ie, He) => {
    ee.exports = He.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39406: (ee, ie, He) => {
    ee.exports = He.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39412: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39418: (ee, ie, He) => {
    ee.exports = He.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39420: (ee, ie, He) => {
    ee.exports = He.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39425: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39427: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39429: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39431: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39436: (ee, ie, He) => {
    ee.exports = He.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);