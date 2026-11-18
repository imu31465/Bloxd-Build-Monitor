export const id = 178;
export const ids = [45, 178];
export const modules = {
  37514: (BB, TB, dB) => {
    var VB = {
      "./combat_1.png": 37519,
      "./dungeon_crumbling_crypt.png": 37522,
      "./dungeon_frozen_hollow.png": 37530,
      "./dungeon_wildwood_grove.png": 37538,
      "./dungeons.png": 37542,
      "./farming_1.png": 37550,
      "./fishing_1.png": 37556,
      "./hub.png": 37558,
      "./island.png": 37566,
      "./mining_1.png": 37573,
      "./mining_1_bridge.png": 37579,
      "./mining_1_gallery.png": 37587,
      "./mining_1_hollow.png": 37591,
      "./mining_1_village.png": 37593
    };

    function yB(BB) {
      var TB = pB(BB);
      return dB(TB)
    }

    function pB(BB) {
      if (!dB.o(VB, BB)) {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }
      return VB[BB]
    }
    yB.keys = function() {
      return Object.keys(VB)
    }, yB.resolve = pB, BB.exports = yB, yB.id = 37514
  },
  37598: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => pB
    });
    const VB = new WeakMap;

    function yB(BB, TB) {
      return VB.set(BB, TB), BB
    }

    function pB(BB) {
      var TB;
      return null !== (TB = VB.get(BB)) && void 0 !== TB ? TB : null
    }
  },
  37488: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      var VB;
      const {
        width: yB,
        height: pB
      } = dB, lB = null !== (VB = BB.text) && void 0 !== VB ? VB : BB, JB = (lB.x / 100 - .5) * yB, YB = (lB.y / 100 - .5) * pB, gB = yB / 2 - TB.x;
      if (null !== BB.text && Math.abs(JB) <= gB && YB >= TB.top - pB / 2 && YB <= pB / 2 - TB.bottom) return {
        x: lB.x,
        y: lB.y
      };
      const oB = Math.min(0 === JB ? 1 / 0 : gB / Math.abs(JB), YB > 0 ? (pB / 2 - TB.bottom) / YB : YB < 0 ? (TB.top - pB / 2) / YB : 1 / 0);
      return !Number.isFinite(oB) || oB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + JB * oB / yB * 100,
        y: 50 + YB * oB / pB * 100
      }
    }
    dB.d(TB, {
      e: () => VB
    })
  },
  37506: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    const VB = 4,
      yB = 12e3,
      pB = 1e3;
    class lB {
      constructor() {
        let {
          limit: BB = VB,
          windowMs: TB = yB,
          spacingMs: dB = pB,
          now: lB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = TB, this.spacingMs = dB, this.now = lB
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const BB of this.priority) BB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const BB = this.now();
        this.sent.push(BB), this.lastSentAt = BB, this.schedule(), this.notify()
      }
      addPriority(BB) {
        return this.priority.add(BB), () => {
          this.priority.delete(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const BB of this.priority)
          if (BB.waiting()) return !0;
        return !1
      }
      prune() {
        const BB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= BB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const BB = this.now(),
          TB = this.lastSentAt + this.spacingMs,
          dB = Math.min(TB > BB ? TB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        dB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, dB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37480: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB, dB) {
        this.yH = BB, this.beforeOpen = TB, this.afterClose = dB, this.open = !1, this.ND = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ND && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(BB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(BB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.ND = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ND || (this.snapshot = this.buildSnapshot(), this.yH(this.snapshot))
      }
    }
  },
  37605: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      SkyblockEntityFacing: () => JB,
      needsSkyblockEntityFacing: () => lB
    });
    var VB = dB(37502),
      yB = dB(3716),
      pB = dB(37614);

    function lB(BB, TB) {
      if (BB.metaInfo === VB.m || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let dB = null === TB || void 0 === TB ? void 0 : TB.get(BB.meshOpts);
      if (void 0 === dB) {
        var pB, lB;
        const VB = (0, yB.g)(BB);
        dB = !1, "pig_napoleon" === (null === VB || void 0 === VB || null === (pB = VB.opts.textures) || void 0 === pB ? void 0 : pB.head) ? dB = !0 : "npc_pig_head" === (null === VB || void 0 === VB || null === (lB = VB.opts.textures) || void 0 === lB ? void 0 : lB.head) && (dB = "sitting" === VB.opts.pose || "sitting"), TB && (TB.size >= 256 && TB.clear(), TB.set(BB.meshOpts, dB))
      }
      return "sitting" === dB ? "sitting" === BB.pose : dB
    }(0, pB.g)("skyblock", ((BB, TB) => {
      TB.setFacingTolerance(lB(BB) ? 0 : null)
    }));
    class JB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = TB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var TB;
          const dB = this.api.getEntityInfo(BB);
          dB && (lB(dB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (TB = this.alsoVisit) || void 0 === TB || TB.call(this, BB, dB))
        }
      }
      dL() {
        const {
          api: BB
        } = this, TB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const dB of this.facing) TB.has(dB) || BB.setFacingTolerance(dB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = TB
      }
      dispose() {
        for (const BB of this.facing) this.api.setFacingTolerance(BB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37474: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => lY
    });
    const VB = "island";
    var yB = dB(279);
    const pB = (0, yB.Fb)([0, 0, -1]),
      lB = [{
        name: "S",
        bearing: (0, yB.Fb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, yB.Fb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: pB
      }, {
        name: "W",
        bearing: (0, yB.Fb)([1, 0, 0])
      }];

    function JB(BB, TB, dB) {
      return [100 * (dB.mapMaxX - BB) / (dB.mapMaxX - dB.mapMinX), 100 * (TB - dB.mapMinZ) / (dB.mapMaxZ - dB.mapMinZ)]
    }

    function YB(BB, TB, dB) {
      const yB = "local" === TB,
        pB = BB.background,
        lB = TB => pB ? JB(TB[0] - BB.mapOrigin[0], TB[2] - BB.mapOrigin[2], pB.bounds) : [50, 50],
        YB = (BB.insideDungeon ? [] : BB.landmarks).map((BB => {
          var TB, VB;
          return {
            id: BB.id,
            name: dB(BB.visited && BB.nameKey ? null !== (TB = BB.mapLabelKey) && void 0 !== TB ? TB : BB.nameKey : "skyblockGame:mapUnknown"),
            icon: BB.visited && null !== (VB = BB.icon) && void 0 !== VB ? VB : "unknown",
            visited: BB.visited,
            current: !1,
            position: lB(BB.position),
            travelKind: "landmark",
            travelId: BB.id
          }
        })),
        oB = BB.zones.map((TB => {
          var VB;
          return {
            id: TB.id,
            name: dB(TB.visited && TB.nameKey ? TB.nameKey : "skyblockGame:mapUnknown"),
            icon: TB.visited && null !== (VB = TB.icon) && void 0 !== VB ? VB : "unknown",
            visited: TB.visited,
            current: TB.id === BB.zoneId,
            position: TB.position,
            thumbnail: TB.visited ? TB.id : void 0,
            travelKind: "zone",
            travelId: TB.id
          }
        })),
        kB = BB.insideDungeon || !pB ? [] : BB.portals.map((BB => {
          var TB;
          return {
            id: BB.id,
            name: dB(null !== (TB = BB.nameKey) && void 0 !== TB ? TB : "skyblockGame:mapUnknown"),
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            visited: BB.visited,
            current: !1,
            position: lB(BB.position),
            colour: BB.colour,
            travelKind: "zone",
            travelId: BB.destination
          }
        })),
        LB = yB ? YB : oB,
        OB = LB.filter((BB => BB.visited)).length,
        DB = pB ? (pB.bounds.mapMaxX - pB.bounds.mapMinX) / (pB.bounds.mapMaxZ - pB.bounds.mapMinZ) : 2,
        uB = pB ? JSON.stringify([pB.bounds, BB.mapOrigin]) : "";
      return {
        local: yB,
        points: LB,
        portals: yB ? kB : [],
        progress: LB.length ? dB("skyblockGame:mapDiscovered", {
          current: String(OB),
          total: String(LB.length)
        }) : null,
        percent: LB.length ? 100 * OB / LB.length : 0,
        canTravel: [...LB, ...yB ? kB : []].some((BB => BB.visited && !BB.current)),
        noLandmarks: yB && !BB.insideDungeon && 0 === YB.length,
        background: pB ? {
          imageKey: pB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: uB,
          label: dB(pB.labelKey),
          colour: pB.backgroundColour,
          ratio: DB
        } : null,
        connections: gB(BB.zones),
        minimap: pB ? {
          imageKey: pB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: uB,
          label: dB(pB.labelKey),
          colour: pB.backgroundColour,
          caption: dB(BB.zoneId === VB ? "skyblockGame:zoneIsland" : pB.labelKey),
          width: (pB.bounds.mapMaxX - pB.bounds.mapMinX) / pB.minimapSpan * 100 + "%",
          height: (pB.bounds.mapMaxZ - pB.bounds.mapMinZ) / pB.minimapSpan * 100 + "%",
          markers: [...YB, ...kB]
        } : null
      }
    }

    function gB(BB) {
      const TB = new Set;
      return BB.flatMap((dB => dB.connections.flatMap((VB => {
        const yB = BB.find((BB => BB.id === VB)),
          pB = [dB.id, VB].sort().join("|");
        return !yB || TB.has(pB) ? [] : (TB.add(pB), [{
          id: `${dB.id}-${VB}`,
          start: dB.position,
          end: yB.position,
          explored: dB.visited && yB.visited
        }])
      }))))
    }
    var oB = dB(37480);
    class kB extends oB.c {}
    const LB = "skyblockMapView";
    class OB extends kB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, VB, yB), this.requestTravel = TB, this.translate = dB, this.now = pB, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = BB => {
          this.tab = BB, this.feedbackKey = "", this.emit()
        }, this.travel = (BB, TB) => {
          if (!this.map || this.pending || this.ND) return;
          const dB = ("zone" === BB ? this.map.zones : this.map.landmarks).find((BB => BB.id === TB));
          if (dB) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in dB && !dB.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (dB.visited)
              if ("zone" === BB && TB === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const dB = ++this.nextRequestId;
                this.pending = {
                  requestId: dB,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: BB,
                  id: TB,
                  requestId: dB
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
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      MD(BB) {
        var TB;
        if (!this.ND)
          if ("entities" !== BB.kind)
            if ("open" !== BB.kind) {
              var dB, VB;
              if ("snapshot" === BB.kind)(null === (dB = BB.snapshot) || void 0 === dB ? void 0 : dB.zoneId) !== (null === (VB = this.map) || void 0 === VB ? void 0 : VB.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = BB.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === BB.kind) {
                var yB;
                BB.requestId === (null === (yB = this.pending) || void 0 === yB ? void 0 : yB.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (BB.requestId === (null === (TB = this.pending) || void 0 === TB ? void 0 : TB.requestId)) {
                var pB;
                this.pending = null, this.feedbackKey = null !== (pB = BB.errorKey) && void 0 !== pB ? pB : "", null === BB.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = BB.entities
      }
      dL() {
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
          presentation: this.map ? YB(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const DB = 67.5 * Math.PI / 180;

    function uB(BB, TB) {
      const dB = Math.abs(BB);
      if (dB > DB || TB.trackHalfWidth <= 0) return null;
      const VB = TB.trackHalfWidth,
        yB = TB.screenHalfWidth / (TB.tanHalfFovX * Math.max(.5, Math.cos(TB.pitch))),
        pB = Math.min(Math.atan(.6 * VB / yB), .75 * DB),
        lB = yB * Math.tan(pB);
      let JB;
      if (dB <= pB) JB = yB * Math.tan(dB);
      else {
        const BB = DB - pB,
          TB = Math.max(0, yB * BB / (Math.cos(pB) ** 2 * (VB - lB)) - 1),
          YB = (dB - pB) / BB;
        JB = lB + (VB - lB) * (1 + TB) * YB / (1 + TB * YB)
      }
      return 50 + Math.sign(BB) * JB * 50 / VB
    }
    class HB {
      constructor(BB, TB) {
        this.map = BB, this.visited = TB, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = TB ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.landmarks.filter((BB => BB.visited === this.visited)).map((BB => {
          var TB, dB;
          return {
            id: `landmark:${BB.id}`,
            position: BB.position,
            icon: null !== (TB = BB.icon) && void 0 !== TB ? TB : "unknown",
            nameKey: null !== (dB = BB.nameKey) && void 0 !== dB ? dB : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class EB {
      constructor(BB, TB, dB, VB) {
        this.map = BB, this.kind = TB, this.position = dB, this.alive = VB, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = TB, this.range = "enemy" === TB ? 48 : 64, this.limit = 12
      }
      Dv(BB) {
        if ("enemy" !== this.kind || this.alive(BB.My)) return this.position(BB.My)
      }
      getPoints() {
        const BB = [];
        for (const VB of this.map.getEntities()) {
          if (VB.kind !== this.kind || "enemy" === this.kind && !this.alive(VB.compassEntityId)) continue;
          const yB = this.position(VB.compassEntityId);
          var TB, dB;
          if (yB) BB.push({
            id: `${this.kind}:${VB.compassEntityId}`,
            My: VB.compassEntityId,
            kind: this.kind,
            icon: null !== (TB = VB.icon) && void 0 !== TB ? TB : VB.npcSkin ? `npc_${VB.npcSkin}` : this.kind,
            displayName: VB.displayName,
            position: yB,
            nameKey: null !== (dB = VB.nameKey) && void 0 !== dB ? dB : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return BB
      }
    }
    class vB {
      constructor(BB) {
        this.map = BB, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.portals.map((BB => {
          var TB;
          return {
            id: "portal:" + BB.id,
            kind: "portal",
            position: BB.position,
            nameKey: null !== (TB = BB.nameKey) && void 0 !== TB ? TB : "skyblockGame:compassUnvisitedZone",
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            colour: BB.colour
          }
        }))
      }
    }
    class mB {
      constructor(BB) {
        this.target = BB, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const BB = this.target();
        return BB ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: BB.position,
          nameKey: BB.nameKey
        }] : []
      }
    }

    function iB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.position;
      const pB = VB[0] - TB[0],
        lB = VB[2] - TB[2];
      return {
        ...BB,
        position: VB,
        offset: yB.e.computeShortestRotation(dB, (0, yB.Fb)([pB, 0, lB])),
        distance: Math.hypot(pB, VB[1] - TB[1], lB)
      }
    }
    let NB;

    function tB(BB, TB) {
      var dB;
      return (null === (dB = NB) || void 0 === dB ? void 0 : dB.locale) !== TB && (NB = {
        locale: TB,
        near: new Intl.NumberFormat(TB, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(TB, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (BB < 10 ? NB.near : NB.far).format(BB)
    }
    class fB {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(BB) {
        return this.providers.set(BB.id, BB), this.refreshAt = 0, () => {
          this.providers.get(BB.id) === BB && (this.providers.delete(BB.id), this.refreshAt = 0)
        }
      }
      frame(BB, TB, dB) {
        if (dB >= this.refreshAt) {
          this.refreshAt = dB + 200, this.candidates = [];
          for (const TB of this.providers.values()) {
            if (!TB.enabled) continue;
            const dB = TB.getPoints().map((TB => {
              const dB = TB.position;
              return {
                point: TB,
                distance: Math.hypot(dB[0] - BB[0], dB[1] - BB[1], dB[2] - BB[2])
              }
            })).filter((BB => BB.distance <= TB.range)).sort(((BB, TB) => BB.distance - TB.distance)).slice(0, TB.limit);
            for (const {
                point: BB
              }
              of dB) this.candidates.push({
              provider: TB,
              point: BB
            })
          }
        }
        const VB = [];
        for (const {
            point: yB,
            provider: pB
          }
          of this.candidates) {
          if (!pB.enabled) continue;
          const dB = pB.Dv ? pB.Dv(yB) : yB.position;
          if (dB) {
            const pB = iB(yB, BB, TB, dB);
            Math.abs(pB.offset) <= DB && VB.push(pB)
          }
        }
        return VB
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var sB = dB(35601),
      MB = dB(62);
    const zB = [{
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
      wB = zB.length;

    function UB(BB) {
      return BB >= wB ? 1 : BB + 1
    }
    const FB = "skyblockQuests";
    var KB = dB(37502);
    const rB = "devquests",
      IB = "none",
      cB = {
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
      SB = "Compressed Messy Stone",
      PB = {
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
      QB = ["Stone", "Diorite", "Andesite", "Granite"],
      RB = new Set(QB),
      aB = (Object.keys(PB), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const ZB = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function XB(BB, TB) {
      const dB = Math.floor(5 * BB / (2 * TB + 1));
      return Math.min(4, Math.max(0, dB))
    }
    var WB = dB(1117);
    var hB = dB(35404);
    var CB = dB(35595),
      GB = dB(24),
      qB = dB(8204);
    const xB = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      jB = 1e3;

    function AB(BB) {
      return Math.max(0, BB)
    }

    function bB(BB) {
      return 1 + .01 * AB(BB)
    }

    function nB(BB) {
      return 1 + .005 * AB(BB)
    }

    function eB(BB) {
      return 1 + .005 * AB(BB)
    }

    function BT(BB) {
      return .01 * AB(BB)
    }

    function TT(BB) {
      return 150 / (150 + AB(BB))
    }

    function dT(BB) {
      return 1 + .002 * AB(BB)
    }

    function VT(BB) {
      return Math.round(10 * BB) / 10
    }

    function yT(BB, TB) {
      switch (BB) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: VT(100 * (nB(TB) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: VT(100 * (bB(TB) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: VT(100 * (eB(TB) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: VT(100 * BT(TB))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: VT(100 * (1 - TT(TB)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: VT(100 * (dT(TB) - 1))
          }
      }
    }

    function pT(BB) {
      return "farming" === BB ? 200 : 100
    }

    function lT(BB, TB) {
      if (!Number.isSafeInteger(BB) || BB < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const dB = pT(TB),
        VB = BB => function(BB, TB) {
          return pT(BB) * TB * (TB + 1) / 2
        }(TB, BB);
      let yB = Math.min(jB, Math.floor((Math.sqrt(8 * BB / dB + 1) - 1) / 2));
      return yB < jB && VB(yB + 1) <= BB ? yB++ : VB(yB) > BB && yB--, {
        totalXp: BB,
        level: yB,
        xpIntoLevel: BB - VB(yB),
        xpForNextLevel: yB === jB ? null : dB * (yB + 1)
      }
    }
    const JT = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function YT(BB) {
      return JT.has(BB)
    }
    const gT = new Set(yB.pb);

    function oT(BB) {
      return gT.has(BB)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const kT = {
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
      LT = {
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
      OT = {
        ...LT,
        ...Object.fromEntries(Object.entries(aB).map((BB => {
          let [TB, dB] = BB;
          return [TB, 9 * LT[dB]]
        })))
      },
      DT = {
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
      uT = {
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
    const HT = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      ET = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function vT(BB) {
      return `rgb(${ET[BB].join(", ")})`
    }

    function mT(BB, TB, dB) {
      if (!dB) return BB(TB);
      const VB = {};
      for (const [yB, pB] of Object.entries(dB)) VB[yB] = "string" === typeof pB ? pB : BB(pB.translationKey);
      return BB(TB, VB)
    }
    class iT {
      constructor(BB, TB) {
        this.now = BB, this.getJournal = TB, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Dg = !1, this.onShown = () => {}
      }
      enqueue(BB) {
        const TB = NT(BB);
        if (TB) this.pending.push(BB);
        else {
          const TB = this.pending.findIndex(NT);
          this.pending.splice(-1 === TB ? this.pending.length : TB, 0, BB)
        }
        return (null === this.current || null !== this.followUp && !TB) && (this.advance(), !0)
      }
      setHeld(BB) {
        return this.Dg = BB, !BB && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      dL() {
        const BB = this.getJournal(),
          TB = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === TB ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === TB || void 0 === TB ? void 0 : TB.kind) && BB && BB.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === TB || void 0 === TB ? void 0 : TB.kind)) {
          const BB = this.findFollowUp(this.current);
          if ("step" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || BB.questId !== TB.questId || BB.step.id !== TB.step.id) return this.showFollowUp(BB, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(BB, TB, dB) {
        var VB, yB, pB, lB;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, BB, dB);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, BB);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, BB, TB);
        const {
          questCompletionKind: JB,
          questCompletionNameKey: YB
        } = this.current, gB = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, oB = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, kB = "step" === (null === (VB = this.followUp) || void 0 === VB ? void 0 : VB.kind) ? this.followUp : null, LB = "explore" === (null === (yB = this.followUp) || void 0 === yB ? void 0 : yB.kind);
        let OB;
        return OB = LB ? BB("skyblockGame:questExploreTitle") : null !== kB ? "quest" === JB ? BB("skyblockGame:questNextQuestTitle", {
          quest: BB(kB.questNameKey)
        }) : BB("skyblockGame:questNextStepTitle") : BB("started" === JB ? "skyblockGame:questStartedTitle" : "quest" === JB ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? JB : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: OB,
          name: LB ? TB("skyblockGame:questExploreName") : null !== kB ? mT(TB, kB.step.nameKey, kB.step.nameParams) : mT(TB, YB, gB),
          description: LB ? TB("skyblockGame:questExploreDescription") : null === kB ? null : mT(TB, kB.step.descriptionKey, kB.step.descriptionParams),
          reward: null === this.followUp && oB > 0 ? TB("skyblockGame:questCoinRewardSuffix", {
            amount: oB.toLocaleString(dB)
          }) : null,
          iconItem: null !== (pB = null === kB || void 0 === kB ? void 0 : kB.step.questIconItem) && void 0 !== pB ? pB : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== kB && (null === (lB = this.getJournal()) || void 0 === lB ? void 0 : lB.trackedQuestId) === kB.questId ? kB.step.nameKey : null
        }
      }
      getSkillLevelView(BB, TB, dB) {
        let {
          skill: VB,
          beforeLevel: yB,
          level: pB
        } = BB;
        const lB = yT(VB, yB),
          JB = yT(VB, pB);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: TB(`skyblockGame:${VB}`),
          name: TB("skyblockGame:skillLevelUp", {
            to: pB.toLocaleString(dB)
          }),
          description: lB.percent === JB.percent ? null : TB(`${JB.translationKey}Change`, {
            before: lB.percent.toLocaleString(dB),
            after: JB.percent.toLocaleString(dB)
          }),
          reward: null,
          iconItem: HT[VB],
          accent: vT(VB),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(BB, TB) {
        let {
          landmarkNameKey: dB
        } = BB;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: TB("skyblockGame:landmarkDiscovered"),
          name: TB(dB),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(BB, TB, dB) {
        let {
          titleKey: VB,
          textKey: yB,
          params: pB = {},
          nameKeys: lB = {},
          iconItem: JB = null
        } = BB;
        const YB = {
          ...pB
        };
        for (const [gB, oB] of Object.entries(lB)) YB[gB] = TB(oB);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: TB(VB),
          name: dB(yB, YB),
          description: null,
          reward: null,
          iconItem: JB,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var BB;
        if (null !== this.followUp) return 5600;
        switch (null === (BB = this.current) || void 0 === BB ? void 0 : BB.questCompletionKind) {
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
      showFollowUp(BB, TB) {
        null === BB || this.Dg ? this.advance() : (this.followUp = BB, this.token++, this.shownAt = this.now(), this.expiresAt = null !== TB && void 0 !== TB ? TB : this.shownAt + this.durationMs())
      }
      findFollowUp(BB) {
        var TB;
        const dB = this.getJournal();
        if (!dB || this.hasPendingQuestPopup() || NT(BB)) return null;
        const VB = "started" === BB.questCompletionKind ? dB.active.some((TB => TB.id === BB.questCompletionQuestId)) : "quest" === BB.questCompletionKind ? dB.completed.some((TB => TB.id === BB.questCompletionQuestId)) : [...dB.active, ...dB.completed].some((TB => TB.id === BB.questCompletionQuestId && TB.subquests.some((TB => TB.id === BB.questCompletionStepId && "completed" === TB.status))));
        if (!VB) return null;
        if ("quest" === BB.questCompletionKind && 0 === dB.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const yB = dB.active.find((BB => BB.id === dB.trackedQuestId)),
          pB = null !== (TB = null === yB || void 0 === yB ? void 0 : yB.subquests.find((BB => "ready" === BB.status))) && void 0 !== TB ? TB : null === yB || void 0 === yB ? void 0 : yB.subquests.find((BB => "active" === BB.status));
        return pB ? {
          kind: "step",
          questId: yB.id,
          questNameKey: yB.nameKey,
          step: pB
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((BB => !NT(BB)))
      }
      advance() {
        var BB;
        this.current = this.Dg ? null : null !== (BB = this.pending.shift()) && void 0 !== BB ? BB : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function NT(BB) {
      return tT(BB.questCompletionKind)
    }

    function tT(BB) {
      return "skillLevel" === BB || "landmark" === BB || "npcNote" === BB
    }
    var fT = dB(37488);
    const sT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      MT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      zT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      wT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      UT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var FT = dB(37493);
    const KT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      rT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const IT = dB.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const cT = dB.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      ST = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var PT = dB(17881),
      QT = dB(19944),
      RT = dB(22266),
      aT = dB(23829),
      ZT = dB(25517);
    const XT = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: PT,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: QT,
      cow: UT,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: dB(25537),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: sT,
      fishing_1: sT,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: MT,
      guardian_iron: zT,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: RT,
      mines: aT,
      mining_1: aT,
      npc: wT,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: UT,
      npc_draugr_warper: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAb0lEQVR4nGNgIBIwIrH/41PDCFPU+/IzVlXF4rxgdSwwgUV33oFpXh42MP35yy+sVv///x9is8GxR2D6gpUcRAEjxGYmZF2nvv/BygYBuNUwk0BASoKHIe38M+wKQZLIAMa/iOZGsDuxehtVDWEAAHwCHXf9ctZjAAAAAElFTkSuQmCC",
      npc_dwarf_blue_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf//51lRMAMWxf/TM0r+/z/AjoLTM0owFENMeSCBirGY+l+r/SpY8OGmBjBGFkNR6DD9FVwRDIPEyFYIVowDkwYAEBZzAwnUgyIAAAAASUVORK5CYII=",
      npc_dwarf_braided_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwX9deRUUzIBFMYYiXIr/h5rqYMUYCr9+/wUWjLE2AGNkMRSF6Q6mcEUwDBLDUIiuCNlkDA/hwKQBAPnYUUW1+JaKAAAAAElFTkSuQmCC",
      npc_dwarf_child: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX8lZeX/6hoaYAxiY1P8f1trHlbMgKb4/5qGDKwYQ+HX77/+q0jKwxWA2CAxDIVEW32gqwRDEUgMq4dwYNIAAP19arcJQ+nsAAAAAElFTkSuQmCC",
      npc_dwarf_forked_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwX91DQ0UzIBFMVhick4EXBGMja74f1tKAFaMofDr91//VSTlwSaBMIgNEsOqEN2NWBWCTFFSVkbBIDGsHsKBSQMAnGRas5Ev2yIAAAAASUVORK5CYII=",
      npc_dwarf_ginger_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIBP8R8NYwf//B9hRMAMWxf//n2f9//+BBCo+z4qh+P/dFd0YGKvCr99//WfQ8/z/dNMUMAaxwWLoCt/umPn/ZaMLCgaJYSgEmfK4wgEFg03G5iEcmDQAAGl2d4woNRHRAAAAAElFTkSuQmCC",
      npc_dwarf_grey_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQklEQVR4nGNgIBP8R8NYwX8vUxsUzIBFMYYiXIr/O+mbYcUYCr9+//VfRVIebhKIDRLDUJiSkoIVk60QrBgHJg0AAIrsWQuZyZ2qAAAAAElFTkSuQmCC",
      npc_dwarf_hair_buns: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVklEQVR4nGNgIBP8R8NYwX8tRXkUzIBF8X81OZn/ilKSYBqZzYCmGCw4JTsarhDGxlD49fsvsOC8omQwRhZDUbisLBOuCIZBYhgK0RUhm4zhIRyYNAAAK2NaB/Me8/sAAAAASUVORK5CYII=",
      npc_dwarf_purple_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8bw8D/LqYRYAxiY1P8/+TEQqyYAU3x/z2tWVgxhsKv33+BBZFNgomhKIS5DR2TrRCsGAcmDQAAxtNi2UvD/ZAAAAAASUVORK5CYII=",
      npc_dwarf_red_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXUlEQVR4nGNgIBP8R8NYwf//DyT+/3cqhOAHElgV/y8urv///zwrCi4ursdQDJEEmYiMz7NiKpxiZvXfUEnr/7npBWAMYoPEsCqEKQLhDdUR/5uNTchXCFaMA5MGAHoVbT+3iic1AAAAAElFTkSuQmCC",
      npc_dwarf_short_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX91DQ0UzIBF8f9trXlYMQOa4v9rGjKwYgyFX7//AgsimwQTQ1F4oKsEw40gMQyFIFOUlJVRMDY3ghXjwKQBAAoPYHs6ybo9AAAAAElFTkSuQmCC",
      npc_farmer_gill: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWUlEQVR4nGNgIBP8R8NYwf+bW0v+b53gD8cMOBT/X2cfgYIZsChEMQmfqf/PXrr1X0Je///rLS1gDGKDxLAq/LS/E67wZF/G/2XrdmFXCFOETyFYMQ5MGgAAx9NujhmsqqEAAAAASUVORK5CYII=",
      npc_fire_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf8jtqZwvNJMH6tiFEX4FP//v5EDK8ZQ+PX7r/8WQuz/1+YFgjGIDRLDULi9LAKuCIZBYhgKJ+nJYcVYPYQDkwYAY/ZlGR1JAIkAAAAASUVORK5CYII=",
      npc_forge_mother: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8x4FRwP+vzy+AJSKd7MEYWQxF4avbJ8EYphDGx1D49fsvTBOhYigKfS0s/l9dPAsFg8SwKpyYkAVXBGLjVPj/POv//x+0Ifg8K1aFYMXEBA9BAACWKnGnkFHGrQAAAABJRU5ErkJggg==",
      npc_goblin_goggles: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNkQAX/0fiMGAyQIhMPGxRVZ3YcgathwqUIBKBi/2Gq//tMzWDw4HBkwAZ2/NjPsCV7Btzq/1+//2LQ1dFkSMgoBQssmNHNcPnKdQZuTjawgXCFTd0zsJpYV5oBVsgCEzj+7wRWhTAA8wwcPNt2A4zRAUrw4DAMWQ1hAADlHCXxWLGl2AAAAABJRU5ErkJggg==",
      npc_goblin_mad_scientist: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAV0lEQVR4nGNgIBP8R8NYwX/PzoT/qpZGYAxiY1P8//8DCayYAU3x/7OXboEFkRXAxFAUfv3+67+SsvL//+dZwRjEBolhKIQpQMcYCkGOx4axeggHJg0AAFKzbFf/ov6kAAAAAElFTkSuQmCC",
      npc_gold_guardian: MT,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: zT,
      npc_jackal_priest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdklEQVR4nGNgQID/UIyVzwQT1NTUZBAWFoYrALFBYjDFjDCF/zdyMGADjP4/wBQLTODVVXkGh8UwCyDgQOw/BgaGmyhWg8GZcxexsjEUmhjpM3z79g2MQWxkALcaBP79/cvAwc4OZyO8gGYiPoDQghqGuNQQBgAoCCX1U3QMRQAAAABJRU5ErkJggg==",
      npc_minotaur: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAaklEQVR4nGNgIAP8R6KR2Sjg/9fnF8AKMgJ8wBhZDEXhq9snwRimEMbHUPj1+6//DBYBCBMtAiBi6ApBkhMTsv5fXTwLjEHsODc37Ar/n2eFKwSxcSp8sGHO//8ftMEYxMamEKwYByYNAABmXHNFjN9ucgAAAABJRU5ErkJggg==",
      npc_minotaur_elder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAg0lEQVR4nGNgIBIwIrH/41PDBFP09fkFMKMuJxWMQQAq9h9ZIcPXLz8ZXt0+CTcGxAaJwQBcIbeMIYOYqjlcAsQGiaG78X9ZajxDvJ01iuMWHjrK0DV7IVgd3EQQ2LMX4k50NgiwIHPy8mczMCiqgdlaOrcYyqdFYVgN9x0WgKyGMAAArq0oYNR0jFIAAAAASUVORK5CYII=",
      npc_minotaur_warrior: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAjUlEQVR4nGNkQAX/0fiMGAyQooWVjiiq4tv3o6th+P/q9sn//z9oo+BXt0/+h9nCgmLE/VuoFvMgmHCF3DKGDIycvxmq3XzA/G137jHwcediKuwLDme4ungWXCKKgYFh3fLtDAcvQ/hMyDbt2XsBKxtF4Y8/vxn8A4wYuHmZwBjEBolhDR5Un2BVQxgAAJW+Nj/Gsfy4AAAAAElFTkSuQmCC",
      npc_monster_hunter_lorenzo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH9NLa3/ru5eYBoZM6AphkvsrU0BY5wKv37/9d/awAauEMQGiWEoPNmaDVcEw7PigjAVIlsHw3gVIrsRm0KwYmKChyAAAIfVZAdaM2LxAAAAAElFTkSuQmCC",
      npc_npc_pig_head: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4/3Lyjv9fe3bCJMHsl5N3YCj+/3/HfQjecAWOX2JVuOHKfwZ1U7giEBunQpB1yBinwkJta7giEBurwrOXbv3/+v0XCgaJYfU5DkwaAADzDIUDTIstKgAAAABJRU5ErkJggg==",
      npc_painter_spencer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR42mNgIBIwovH/45JHVvj/XZc7w+/vfxme3GViYGBgYDBetAuuBqbw/+MKB6xWynYcYGBgYGCEK/z6/ReDsoYpg5OsMAMDAwPDvsdvGe7eOM3AzcmGqjDFyZPh26+fKKZ9+/mDYcPpYwwMDAyMTMT6Gq4Q3TR8wfOfyCDEDwAFFSX0ZxYXtAAAAABJRU5ErkJggg==",
      npc_pig: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARklEQVR4nGNgIAP8x4FRwP/3x87A8ds9R+CYAU0xiiQMP1y0FlOhu7YJhkKQGFYTQSYgY5xWg0yAKYKxyXYjWDExwUMQAABoKIoUBfmEPAAAAABJRU5ErkJggg==",
      npc_pig_napoleon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoAD8h2K84L++ofF/V3dvvIr/gxRtszH9//X7LzCbAYvi///Ps/6Xk5dHwSAxdMX//2+48p9B3RRMw9gvJ+/ArvBrz04UjFNhobY1XBGIjU0hWDEOTBoAAIrnYG/Xae9eAAAAAElFTkSuQmCC",
      npc_pig_worker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIAP8R8NYwf/YhDQ4dnb1xKnhP0gSHesbGmMo/v9/w5X/DOqmYBrGfjl5B3aFhdrW/7/27ARjEBunQpAEOsZQGGLn+L8oKvD/1++/wBjEBolh9RAOTBoAAGcEbivle0KRAAAAAElFTkSuQmCC",
      npc_piggy_banker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXElEQVR4nGNgIBP8R8NYwX9Xd+//2jq6cMyAQ/F/OXn5//8fSPz/f54VzGbAohAsgQ2jK/7/f8OV/wzqpmAaxn45eQd2hV97dqJgnAoLta3hikBsbArBinFg0gAAgophxWZsQvAAAAAASUVORK5CYII=",
      npc_portal_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg==",
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: FT,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: KT,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: IT,
      quest_talk: cT,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: ST,
      watermelon: ZT
    };

    function WT(BB, TB) {
      const dB = document.createElement("img");
      return dB.className = TB, dB.src = BB, dB.alt = "", dB.draggable = !1, dB
    }

    function hT(BB) {
      var TB;
      const dB = null !== (TB = XT[BB]) && void 0 !== TB ? TB : BB.startsWith("npc_") ? wT : ST;
      if ("portal" !== BB) return WT(dB, "SkyblockMapIcon");
      const VB = document.createElement("span");
      VB.className = "SkyblockMapIcon Portal";
      const yB = document.createElement("span");
      return yB.className = "SkyblockMapIconTint", yB.style.maskImage = yB.style.webkitMaskImage = `url("${rT}")`, VB.append(WT(dB, "SkyblockMapIconLayer"), yB, WT(rT, "SkyblockMapIconLayer SkyblockMapIconShade")), VB
    }
    var CT = dB(37463),
      GT = dB(3734);
    const qT = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function xT(BB) {
      const TB = new GT.g(BB);
      return {
        radius: 45,
        squareness: 3,
        wobbles: qT.map((BB => {
          let {
            lobes: dB,
            amount: VB
          } = BB;
          return {
            lobes: dB[Math.floor(TB.next() * dB.length)],
            amount: VB[0] + TB.next() * (VB[1] - VB[0]),
            phase: 2 * TB.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function jT(BB) {
      let {
        radius: TB,
        squareness: dB,
        wobbles: VB,
        samples: yB
      } = BB;
      const pB = [];
      for (let lB = 0; lB < yB; lB++) {
        const BB = 2 * Math.PI * lB / yB,
          JB = Math.cos(BB),
          YB = Math.sin(BB),
          gB = TB * (Math.abs(JB) ** dB + Math.abs(YB) ** dB) ** (-1 / dB) * VB.reduce(((TB, dB) => {
            let {
              lobes: VB,
              amount: yB,
              phase: pB
            } = dB;
            return TB + yB * Math.sin(VB * BB + pB)
          }), 1);
        pB.push(`${(50+gB*JB).toFixed(2)} ${(50+gB*YB).toFixed(2)}`)
      }
      return `M${pB.join("L")}Z`
    }
    const AT = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class bT {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.ND = !1, this.mountCompass = BB => {
          var TB;
          if (null === (TB = this.stopLayout) || void 0 === TB || TB.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !BB || this.ND) return;
          const dB = BB.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: BB,
            track: dB,
            label: BB.querySelector(".SkyblockCompassLabel")
          }, dB.replaceChildren();
          for (let yB = 0; yB < 4; yB++) {
            const BB = document.createElement("span");
            BB.className = "SkyblockCompassCardinal", dB.appendChild(BB), this.cardinals.push(BB)
          }
          const VB = (0, CT.d)(AT, [BB], this.layout);
          this.stopLayout = () => {
            VB(), dB.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = BB => {
          this.terrain = this.ND ? null : BB, this.render(this.frame)
        }, this.mountMinimapSearchArea = BB => {
          this.mountSearchArea("minimap", BB)
        }, this.mountMapSearchArea = BB => {
          this.mountSearchArea("map", BB)
        }, this.mountPlayer = BB => {
          this.player = this.ND ? null : BB, this.render(this.frame)
        }, this.mountWaypoint = BB => {
          var TB, dB;
          if (null === (TB = this.stopWaypoint) || void 0 === TB || TB.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !BB || this.ND) return;
          const VB = BB.querySelector(".SkyblockQuestWaypointMarker");
          VB.replaceChildren(hT("quest")), this.markerIcon = "quest", this.waypoint = {
            root: BB,
            marker: VB,
            clip: BB.querySelector(".SkyblockQuestWaypointTextClip"),
            text: BB.querySelector(".SkyblockQuestWaypointText"),
            label: BB.querySelector(".SkyblockQuestWaypointLabel"),
            distance: BB.querySelector(".SkyblockQuestWaypointDistance"),
            hint: BB.querySelector(".SkyblockQuestWaypointHint")
          };
          const yB = () => {
              this.waypointMarkerSize = {
                width: VB.offsetWidth,
                height: VB.offsetHeight
              }, this.waypointInset = {
                x: VB.offsetWidth / 2 + 8,
                top: VB.offsetHeight + 8,
                bottom: 8
              }
            },
            pB = new ResizeObserver((() => {
              yB(), this.render(this.frame)
            }));
          pB.observe(VB, {
            box: "border-box"
          });
          const lB = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", lB), null === (dB = window.visualViewport) || void 0 === dB || dB.addEventListener("resize", lB), this.stopWaypoint = () => {
            var BB;
            pB.disconnect(), window.removeEventListener("resize", lB), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", lB)
          }, lB(), yB(), this.render(this.frame)
        }, this.mountWaypointOrigin = BB => {
          var TB;
          if (null === (TB = this.stopWaypointOrigin) || void 0 === TB || TB.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = BB && !this.ND ? Number(BB.dataset.notificationToken) : null, BB && !this.ND && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const TB = {
              nameKey: BB.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = TB;
            const dB = () => {
                const dB = BB.getBoundingClientRect();
                TB.x = (dB.left + dB.width / 2) / window.innerWidth * 100, TB.y = (dB.top + dB.height / 2) / window.innerHeight * 100
              },
              VB = new ResizeObserver(dB);
            VB.observe(BB.parentElement), VB.observe(BB), window.addEventListener("resize", dB), this.stopWaypointOrigin = () => {
              VB.disconnect(), window.removeEventListener("resize", dB)
            }, dB()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const BB = this.compass.root,
            TB = getComputedStyle(BB),
            dB = getComputedStyle(document.documentElement),
            VB = parseFloat(dB.fontSize),
            yB = parseFloat(TB.getPropertyValue("--compass-icon-size")) * VB,
            pB = "1" === TB.getPropertyValue("--compass-fit-top").trim(),
            lB = pB ? 1 : 8,
            JB = Array.from(document.querySelectorAll(AT), (BB => {
              var TB;
              return (null !== (TB = BB.querySelector(".MiddleTextTop")) && void 0 !== TB ? TB : BB).getBoundingClientRect()
            })).filter((BB => BB.width > 0 && BB.height > 0));
          let YB = (parseFloat(dB.getPropertyValue("--notchTop")) || 0) + lB,
            gB = "";
          if (pB) {
            const TB = window.innerWidth / 2,
              dB = BB.getBoundingClientRect().height,
              pB = [YB, ...JB.map((BB => Math.max(YB, BB.bottom + lB)))].sort(((BB, TB) => BB - TB));
            for (const BB of pB) {
              let pB = TB - 8;
              for (const VB of JB) VB.bottom + lB <= BB || VB.top >= BB + dB + lB || (pB = Math.min(pB, VB.right <= TB ? TB - VB.right - 8 : VB.left - TB - 8));
              const oB = 2 * pB - yB;
              if (oB >= 16 * VB) {
                gB = `${oB}px`, YB = BB;
                break
              }
            }
          }
          BB.style.maxWidth !== gB && (BB.style.maxWidth = gB);
          const oB = BB.getBoundingClientRect(),
            kB = this.compassSize.trackHalfWidth;
          if (oB.width > 0) {
            const BB = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: BB.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * yB / BB.width
          }
          if (!gB)
            for (const LB of JB) LB.right > oB.left - 8 && LB.left < oB.right + 8 && (YB = Math.max(YB, LB.bottom + lB));
          BB.style.top = `${YB}px`, this.compassSize.trackHalfWidth !== kB && this.render(this.frame)
        }
      }
      mountSearchArea(BB, TB) {
        this.searchAreas[BB] = this.ND ? null : TB, this.render(this.frame)
      }
      render(BB) {
        if (this.ND) return;
        if (this.frame = BB, this.compass && (nT(this.compass.root, !BB), BB)) {
          const TB = this.compassSize.trackHalfWidth / 50;
          BB.compass.cardinals.forEach(((BB, dB) => {
            const VB = this.cardinals[dB];
            VB.textContent !== BB.name && (VB.textContent = BB.name), nT(VB, BB.hidden), VB.style.translate = BB.left * TB + "px"
          }));
          const dB = new Set;
          BB.compass.markers.forEach(((VB, yB) => {
            var pB;
            dB.add(VB.id);
            let lB = this.markers.get(VB.id);
            lB || (lB = document.createElement("span"), lB.className = "SkyblockCompassMarker", this.markers.set(VB.id, lB), this.compass.track.appendChild(lB)), lB.dataset.icon !== VB.icon && (lB.dataset.icon = VB.icon, lB.replaceChildren(hT(VB.icon))), lB.style.color = null !== (pB = VB.colour) && void 0 !== pB ? pB : "", lB.style.translate = VB.left * TB + "px", lB.style.zIndex = String(BB.compass.markers.length - yB), lB.title !== VB.name && (lB.title = VB.name)
          }));
          for (const [BB, VB] of this.markers) dB.has(BB) || (VB.remove(), this.markers.delete(BB));
          this.compass.label.textContent !== BB.compass.label && (this.compass.label.textContent = BB.compass.label)
        }
        this.terrain && (nT(this.terrain, !(null !== BB && void 0 !== BB && BB.minimap)), null !== BB && void 0 !== BB && BB.minimap && (this.terrain.style.transform = BB.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", BB.minimap.iconRotation)));
        const TB = null === BB || void 0 === BB ? void 0 : BB.searchArea;
        for (const dB of [this.searchAreas.minimap, this.searchAreas.map])
          if (dB && (nT(dB, !TB), TB)) {
            if (this.searchAreaPath.seed !== TB.shapeSeed && (this.searchAreaPath = {
                seed: TB.shapeSeed,
                d: jT(xT(TB.shapeSeed))
              }), dB.dataset.shapeSeed !== TB.shapeSeed) {
              dB.dataset.shapeSeed = TB.shapeSeed;
              for (const BB of dB.querySelectorAll("path")) BB.setAttribute("d", this.searchAreaPath.d)
            }
            dB.style.left = `${TB.left}%`, dB.style.top = `${TB.top}%`, dB.style.width = `${TB.width}%`, dB.style.height = `${TB.height}%`
          } if (this.player && (nT(this.player, !(null !== BB && void 0 !== BB && BB.player) || BB.player.hidden), null !== BB && void 0 !== BB && BB.player && (this.player.style.left = `${BB.player.left}%`, this.player.style.top = `${BB.player.top}%`, this.player.style.setProperty("--map-player-rotation", BB.player.rotation))), this.waypoint) {
          const {
            root: TB,
            marker: dB,
            clip: VB,
            text: yB,
            label: pB,
            distance: lB,
            hint: JB
          } = this.waypoint, YB = !(null !== BB && void 0 !== BB && BB.waypoint) || null !== BB.waypoint.popupToken && BB.waypoint.popupToken !== this.waypointOriginToken;
          nT(TB, YB);
          let gB = 1;
          const oB = this.waypointLaunch;
          if (!YB && oB && BB.waypoint.nameKey === oB.nameKey) {
            const BB = performance.now();
            oB.startedAt ??= BB, gB = Math.min(1, Math.max(0, (BB - oB.startedAt - 450) / 1e3)), dB.style.opacity = String(Math.min(1, (BB - oB.startedAt) / 150)), 1 === gB && (this.waypointLaunch = null)
          } else dB.style.opacity = "", oB && null !== oB.startedAt && (this.waypointLaunch = null);
          if (TB.classList.toggle("Launching", gB < 1), null !== BB && void 0 !== BB && BB.waypoint) {
            const TB = this.waypointInset,
              YB = "quest_talk" === BB.waypoint.markerIcon ? function(BB, TB, dB) {
                if (!BB.text || null === BB.blockHeight || 0 === BB.nearness) return BB;
                const VB = BB.blockHeight / 100 * dB.height,
                  yB = -BB.nearness * (eT * VB + TB.width / 2),
                  pB = BB.nearness * (Bd * VB + TB.height / 2);
                return {
                  ...BB,
                  text: {
                    x: BB.text.x + yB / dB.width * 100,
                    y: BB.text.y + pB / dB.height * 100
                  }
                }
              }(BB.waypoint, this.waypointMarkerSize, this.viewport) : BB.waypoint,
              kB = (0, fT.e)(YB, TB, this.viewport),
              LB = gB * gB * (3 - 2 * gB),
              OB = gB < 1 ? oB.x + (kB.x - oB.x) * LB : kB.x,
              DB = gB < 1 ? oB.y + (kB.y - oB.y) * LB : kB.y;
            dB.style.translate = `${OB}vw ${DB}vh`, VB.style.clipPath = `inset(${TB.top}px ${TB.x}px ${TB.bottom}px)`, nT(yB, gB < 1 || !BB.waypoint.text), yB.style.opacity = String(1 - BB.waypoint.nearness), BB.waypoint.text && (yB.style.translate = `${BB.waypoint.text.x}vw ${BB.waypoint.text.y}vh`), pB.textContent !== BB.waypoint.name && (pB.textContent = BB.waypoint.name), this.markerIcon !== BB.waypoint.markerIcon && (this.markerIcon = BB.waypoint.markerIcon, dB.replaceChildren(hT(this.markerIcon))), lB.textContent !== BB.waypoint.distance && (lB.textContent = BB.waypoint.distance), nT(JB, null === BB.waypoint.hint), null !== BB.waypoint.hint && JB.textContent !== BB.waypoint.hint && (JB.textContent = BB.waypoint.hint)
          }
        }
      }
      dispose() {
        var BB, TB;
        this.mountWaypointOrigin(null), this.render(null), null === (BB = this.stopLayout) || void 0 === BB || BB.call(this), this.stopLayout = null, null === (TB = this.stopWaypoint) || void 0 === TB || TB.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.ND = !0
      }
    }

    function nT(BB, TB) {
      BB.hidden !== TB && (BB.hidden = TB)
    }
    const eT = .55,
      Bd = .6;
    const Td = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class dd {
      constructor(BB, TB, dB, VB) {
        this.map = BB, this.quests = TB, this.compass = dB, this.display = new bT, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.ND = !1, this.snapshot = null, this.texts = new Map, this.translate = VB
      }
      setTranslator(BB, TB) {
        this.translate = BB, this.locale = TB, this.metresFormat = new Intl.NumberFormat(TB), this.texts.clear()
      }
      translateCached(BB, TB) {
        const dB = void 0 === TB ? BB : `${BB} ${TB}`;
        let VB = this.texts.get(dB);
        return void 0 === VB && (this.texts.size >= 500 && this.texts.clear(), VB = this.translate(BB, void 0 === TB ? void 0 : {
          distance: TB
        }), this.texts.set(dB, VB)), VB
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(BB, TB, dB) {
        if (this.ND) return;
        if (!BB) return this.snapshot = null, void this.display.render(null);
        const VB = this.map.getSnapshot().map,
          YB = dB.cameraHeading,
          gB = {
            ...this.display.compassSize,
            tanHalfFovX: dB.tanHalfFovX,
            pitch: dB.cameraPitch
          },
          oB = [];
        if (VB)
          for (const yB of this.compass.frame(BB, YB, TB)) {
            const BB = uB(yB.offset, gB);
            null !== BB && oB.push({
              ...yB,
              left: BB
            })
          }
        const kB = function(BB, TB) {
            const dB = [],
              VB = BB => "quest" === BB.kind ? BB.distance - 1 : BB.distance,
              yB = [...BB].sort(((BB, TB) => VB(BB) - VB(TB) || BB.id.localeCompare(TB.id)));
            for (const pB of yB) {
              let BB = !1;
              if ("quest" !== pB.kind)
                for (const VB of dB)
                  if (Math.abs(VB.left - pB.left) < TB) {
                    BB = !0;
                    break
                  } BB || dB.push(pB)
            }
            return dB
          }(oB, this.display.compassSpacing),
          LB = function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              dB = null;
            for (const VB of BB) Math.abs(VB.offset) <= TB && (!dB || VB.distance < dB.distance || VB.distance === dB.distance && Math.abs(VB.offset) < Math.abs(dB.offset)) && (dB = VB);
            return dB
          }(kB),
          OB = BB => {
            var TB;
            return null !== (TB = BB.displayName) && void 0 !== TB ? TB : this.translateCached(BB.nameKey)
          },
          DB = {
            compass: {
              markers: kB.map((BB => ({
                id: BB.id,
                icon: BB.icon,
                colour: BB.colour,
                name: OB(BB),
                left: BB.left
              }))),
              cardinals: lB.map((BB => {
                let {
                  name: TB,
                  bearing: dB
                } = BB;
                const VB = uB(yB.e.computeShortestRotation(YB, dB), gB);
                return {
                  name: TB,
                  left: null !== VB && void 0 !== VB ? VB : 0,
                  hidden: null === VB
                }
              })),
              label: LB ? `${OB(LB)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",tB(LB.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== VB && void 0 !== VB && VB.background) {
          const TB = BB[0] - VB.mapOrigin[0],
            dB = BB[2] - VB.mapOrigin[2],
            {
              rotation: yB,
              transform: lB
            } = function(BB, TB, dB, VB) {
              const [yB, lB] = JB(BB, TB, VB), YB = pB - dB;
              return {
                rotation: YB,
                transform: `rotate(${YB}rad) translate(-${yB}%, -${lB}%)`
              }
            }(TB, dB, YB, VB.background.bounds);
          DB.minimap = {
            transform: lB,
            iconRotation: -yB + "rad"
          };
          const [gB, oB] = JB(TB, dB, VB.background.bounds);
          DB.player = {
            left: gB,
            top: oB,
            hidden: gB < 0 || oB < 0 || gB > 100 || oB > 100,
            rotation: -yB + "rad"
          }
        }
        const {
          waypoint: HB
        } = this.quests.getSnapshot();
        if ("search" === (null === HB || void 0 === HB ? void 0 : HB.questMarkerIcon) && null !== VB && void 0 !== VB && VB.background) {
          const {
            bounds: BB
          } = VB.background, [TB, dB] = JB(HB.position[0] - VB.mapOrigin[0], HB.position[2] - VB.mapOrigin[2], BB);
          DB.searchArea = {
            left: TB,
            top: dB,
            width: 6400 / (BB.mapMaxX - BB.mapMinX),
            height: 6400 / (BB.mapMaxZ - BB.mapMinZ),
            shapeSeed: HB.nameKey
          }
        }
        const EB = this.quests.getNotificationSnapshot(),
          vB = "completion" === (null === EB || void 0 === EB ? void 0 : EB.phase) && !tT(EB.kind);
        if (HB && !vB) {
          const TB = Math.hypot(...HB.position.map(((TB, dB) => TB - BB[dB]))),
            VB = Math.round(TB),
            yB = "talk" === HB.questMarkerIcon ? Math.min(1, Math.max(0, (10 - TB) / 5)) : 0,
            pB = dB.projectWorldPosToViewport(HB.position),
            lB = pB && dB.projectWorldPosToViewport([HB.position[0], HB.position[1] - 1, HB.position[2]]);
          DB.waypoint = {
            ...dB.projectWorldPosToScreenPos(HB.position),
            text: pB,
            nearness: yB * yB * (3 - 2 * yB),
            blockHeight: pB && lB ? lB.y - pB.y : null,
            name: this.translateCached(HB.nameKey),
            nameKey: HB.nameKey,
            markerIcon: HB.questMarkerIcon ? Td[HB.questMarkerIcon] : "quest",
            popupToken: (null === EB || void 0 === EB ? void 0 : EB.waypointNameKey) === HB.nameKey ? EB.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(VB)),
            hint: "search" === HB.questMarkerIcon && Math.hypot(HB.position[0] - BB[0], HB.position[2] - BB[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = DB, this.display.render(DB)
      }
      dispose() {
        this.ND = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Vd = "skyblockSkillsView";
    class yd extends kB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB,
          VB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          yB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = TB, this.translate = dB, this.locale = VB, this.itemName = yB, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, this.locale = TB, this.itemName = dB, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(BB) {
        let TB = this.skillText.get(BB);
        return TB || (TB = {
          label: this.translate(`skyblockGame:${BB}`),
          description: this.translate(`skyblockGame:${BB}Description`)
        }, this.skillText.set(BB, TB)), TB
      }
      sources(BB) {
        if ("mining" === BB || "fishing" === BB) return this.buildSources(BB);
        let TB = this.sourceText.get(BB);
        return TB || (TB = this.buildSources(BB), this.sourceText.set(BB, TB)), TB
      }
      buildSources(BB) {
        const TB = this.translate;
        return "exploration" === BB ? [TB("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), TB("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === BB ? [TB("skyblockGame:logSource", {
          xp: this.number(kT["Maple Log"])
        })] : "combat" === BB ? [TB("skyblockGame:creatureKillSource"), TB("skyblockGame:noEnvironmentalXp")] : "farming" === BB ? [TB("skyblockGame:cropSource", {
          xp: this.number(DT["Wheat|FreshlyGrown"])
        }), TB("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), TB("skyblockGame:noYoungCropXp")] : Object.entries("mining" === BB ? OT : uT).map((BB => {
          let [dB, VB] = BB;
          return TB("skyblockGame:itemXpSource", {
            item: this.itemName(dB),
            xp: this.number(VB)
          })
        }))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
      benefit(BB, TB) {
        const dB = yT(BB, TB);
        return this.translate(dB.translationKey, {
          bonus: this.number(dB.percent)
        })
      }
      MD(BB) {
        if (!this.ND) {
          if ("snapshot" === BB.kind) this.progress = BB.progress, this.pending.clear(), this.recent = null;
          else if ("award" === BB.kind && this.progress) {
            const {
              award: TB
            } = BB;
            this.progress = {
              ...this.progress,
              [TB.skill]: TB.after
            };
            for (const [BB, VB] of this.pending) VB.skill === TB.skill && this.pending.delete(BB);
            const dB = TB.after.level > TB.before.level;
            this.recordGain(TB.skill, TB.amount, dB ? ++this.nextLevelUpToken : null), dB && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: TB.skill,
              beforeLevel: TB.before.level,
              level: TB.after.level
            })
          } else {
            if ("rejectBlock" === BB.kind) return void this.rejectBlock(BB.position);
            if ("open" === BB.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(BB, TB, dB) {
        if (!this.progress || this.ND || dB) return;
        const VB = function(BB, TB) {
          const dB = BB.split("|")[0];
          return "Air" === TB || TB === `Barkless ${BB}` ? Object.hasOwn(kT, dB) ? {
            skill: "foraging",
            amount: kT[dB]
          } : "Air" !== TB ? null : Object.hasOwn(OT, BB) ? {
            skill: "mining",
            amount: OT[BB]
          } : YT(BB) ? {
            skill: "farming",
            amount: 10
          } : oT(BB) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(DT, BB) ? {
            skill: "farming",
            amount: DT[BB]
          } : Object.hasOwn(PB, BB) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(TB, "Air");
        if (!VB) return;
        const yB = BB.join(",");
        if (this.pending.has(yB)) return;
        const pB = this.predictedProgress(VB.skill).totalXp + VB.amount;
        Number.isSafeInteger(pB) && (this.pending.set(yB, {
          ...VB,
          expires: this.now() + 2e3
        }), this.recordGain(VB.skill, 0), this.emit())
      }
      rejectBlock(BB) {
        this.pending.delete(BB.join(",")) && this.emit()
      }
      dL() {
        if (this.ND) return;
        let BB = !1;
        for (const [TB, dB] of this.pending) dB.expires <= this.now() && (this.pending.delete(TB), BB = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, BB = !0), BB && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(BB, TB) {
        var dB, VB;
        let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pB = (null === (dB = this.recent) || void 0 === dB ? void 0 : dB.skill) === BB && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          lB = (null === (VB = this.recent) || void 0 === VB ? void 0 : VB.skill) === BB && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: BB,
          confirmed: pB + TB,
          expires: this.now() + 3e3,
          levelUpToken: null !== yB && void 0 !== yB ? yB : lB
        }
      }
      pendingXp(BB) {
        let TB = 0;
        for (const dB of this.pending.values()) dB.skill === BB && (TB += dB.amount);
        return TB
      }
      predictedProgress(BB) {
        const TB = this.progress[BB],
          dB = this.pendingXp(BB);
        return dB ? lT(TB.totalXp + dB, BB) : TB
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var BB, TB, dB;
        const VB = this.progress ? xB.map((BB => {
            const TB = this.predictedProgress(BB);
            return {
              ...this.text(BB),
              icon: HT[BB],
              benefit: this.benefit(BB, TB.level),
              sources: this.sources(BB),
              id: BB,
              selected: BB === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(TB.level)
              }),
              xp: null === TB.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(TB.xpIntoLevel),
                target: this.number(TB.xpForNextLevel)
              }),
              percent: null === TB.xpForNextLevel ? 100 : Math.min(100, TB.xpIntoLevel / TB.xpForNextLevel * 100)
            }
          })) : [],
          yB = VB.find((BB => {
            var TB;
            return BB.id === (null === (TB = this.recent) || void 0 === TB ? void 0 : TB.skill)
          })),
          pB = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: VB,
          detail: null !== (BB = VB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          overallLevel: this.progress ? xB.reduce(((BB, TB) => BB + this.predictedProgress(TB).level), 0) : null,
          hud: yB && pB > 0 ? {
            skill: yB,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(pB)
            }),
            levelUpToken: null !== (TB = null === (dB = this.recent) || void 0 === dB ? void 0 : dB.levelUpToken) && void 0 !== TB ? TB : null,
            colour: vT(yB.id)
          } : null
        }
      }
    }
    const pd = Math.max(1600, 600, 950) + 400,
      ld = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Jd = "skyblockQuestsView",
      Yd = "skyblockQuestNotificationView";
    class gd extends kB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          lB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(BB, VB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = TB, this.translate = dB, this.now = yB, this.locale = pB, this.publishNotification = lB, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var BB, TB;
          this.selected = null !== (BB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.trackedQuestId) && void 0 !== BB ? BB : null, this.show()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const BB = this.snapshot.detail;
          !this.ND && null !== BB && void 0 !== BB && BB.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(BB.id), this.emit())
        }, this.viewDialogue = () => {
          const BB = this.snapshot.detail;
          var TB;
          BB && (null === (TB = this.onViewDialogue) || void 0 === TB || TB.call(this, BB.id))
        }, this.notifications = new iT(yB, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var BB, TB;
        return null !== (BB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.trackedQuestId) && void 0 !== BB ? BB : null
      }
      notify(BB) {
        !this.ND && this.notifications.enqueue(BB) && this.emitNotification()
      }
      setNotificationsHeld(BB) {
        (this.notifications.setHeld(BB) || BB) && this.emitNotification()
      }
      dL() {
        var BB, TB;
        if (this.ND) return;
        this.notifications.dL() && this.emitNotification();
        let dB = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, dB = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, dB = !0);
        const VB = od(this.authoritative);
        null !== VB && void 0 !== VB && null !== (BB = VB.questClock) && void 0 !== BB && BB.running && this.clockText(VB) !== (null === (TB = this.snapshot.tracked) || void 0 === TB ? void 0 : TB.clock) && (dB = !0), dB && this.emit()
      }
      setTranslator(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = TB, this.emitNotification(), this.emit()
      }
      MD(BB) {
        if (!this.ND)
          if ("completion" === BB.kind) this.notify(BB.questCompletion);
          else if ("landmark" === BB.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: BB.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === BB.kind) {
          var TB, dB, VB;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: BB.npcNoteTitleKey,
            textKey: BB.npcNoteTextKey,
            params: null !== (TB = BB.npcNoteParams) && void 0 !== TB ? TB : {},
            nameKeys: null !== (dB = BB.npcNoteNameKeys) && void 0 !== dB ? dB : {},
            iconItem: null !== (VB = BB.npcNoteIconItem) && void 0 !== VB ? VB : null
          })
        } else if ("open" === BB.kind) this.show();
        else if ("guidance" === BB.kind) this.waypoint = BB.waypoint, this.compassTarget = BB.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === BB.kind) {
          this.authoritative = BB.snapshot, this.notifications.dL() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const TB = this.trackedStepPulse;
          this.updateTrackedStepPulse(BB.snapshot), this.emit(), this.trackedStepPulse > TB && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.ND || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var BB;
        return null !== (BB = this.translateWithIcons) && void 0 !== BB ? BB : this.translate
      }
      clockText(BB) {
        const TB = BB.questClock;
        if (!TB) return null;
        const dB = TB.elapsedMs + (TB.running ? this.now() - this.receivedAt : 0);
        return void 0 === TB.countdownFromMs ? (0, KB.n)(dB, !1) : (0, KB.n)(1e3 * Math.ceil(Math.max(0, TB.countdownFromMs - dB) / 1e3), !1)
      }
      updateTrackedStepPulse(BB) {
        var TB, dB, VB;
        const yB = od(BB);
        if (!yB) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const pB = BB => yB.subquests.filter((TB => BB(TB.status))).map((BB => BB.id)),
          lB = pB((BB => "completed" === BB || "skipped" === BB)),
          JB = pB((BB => "locked" !== BB)),
          YB = (null === (TB = this.trackedSteps) || void 0 === TB ? void 0 : TB.questId) === yB.id && yB.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (YB) {
          const BB = lB.filter((BB => !YB.finished.has(BB))),
            TB = pB((BB => "active" === BB || "ready" === BB)).filter((BB => !YB.unlocked.has(BB)));
          BB.length > 0 && this.trackedStepPulse++, (BB.length > 0 || TB.length > 0) && (this.trackedChange = {
            finished: new Set(BB),
            unlocked: new Set(TB),
            expiresAt: this.now() + pd
          })
        } else {
          var gB;
          this.trackedStepPulse = (null === (gB = this.trackedSteps) || void 0 === gB ? void 0 : gB.questId) === yB.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: yB.id,
          progress: yB.progress,
          finished: new Set([...null !== (dB = null === YB || void 0 === YB ? void 0 : YB.finished) && void 0 !== dB ? dB : [], ...lB]),
          unlocked: new Set([...null !== (VB = null === YB || void 0 === YB ? void 0 : YB.unlocked) && void 0 !== VB ? VB : [], ...JB])
        }
      }
      entry(BB, TB) {
        var dB, VB;
        const yB = BB.id === (null === (dB = this.authoritative) || void 0 === dB ? void 0 : dB.trackedQuestId),
          pB = this.now() < this.trackAvailableAt,
          lB = this.questTextTranslator(),
          JB = BB.subquests.map((TB => {
            var dB, VB, pB, JB, YB, gB;
            const oB = null !== (dB = TB.handInNpcName) && void 0 !== dB ? dB : BB.giverName,
              kB = this.translate("skyblockGame:progress", {
                current: TB.progress.toLocaleString(this.locale),
                target: TB.target.toLocaleString(this.locale)
              }),
              LB = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: oB ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [TB.status],
              OB = "active" === TB.status || "ready" === TB.status;
            return {
              id: TB.id,
              name: mT(lB, TB.nameKey, TB.nameParams),
              description: mT(lB, TB.descriptionKey, TB.descriptionParams),
              progress: kB,
              status: TB.status,
              statusLabel: LB ? this.translate(LB, {
                npc: oB
              }) : kB,
              iconItem: OB && null !== (VB = TB.questIconItem) && void 0 !== VB ? VB : null,
              barPercent: "active" === TB.status && TB.showsProgressBar ? Math.min(100, 100 * TB.progress / TB.target) : null,
              justFinished: yB && null !== (pB = null === (JB = this.trackedChange) || void 0 === JB ? void 0 : JB.finished.has(TB.id)) && void 0 !== pB && pB,
              justUnlocked: yB && null !== (YB = null === (gB = this.trackedChange) || void 0 === gB ? void 0 : gB.unlocked.has(TB.id)) && void 0 !== YB && YB
            }
          }));
        return {
          id: BB.id,
          name: mT(lB, BB.nameKey, BB.nameParams),
          description: mT(lB, BB.descriptionKey, BB.descriptionParams),
          progress: TB ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: BB.progress.toLocaleString(this.locale),
            target: BB.target.toLocaleString(this.locale)
          }),
          completed: TB,
          tracked: yB,
          selected: BB.id === this.selected,
          canTrack: !TB && !yB && !pB,
          trackLabel: this.translate(yB ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : pB ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== BB.id,
          subquests: JB,
          focusStep: null !== (VB = JB.find((BB => null !== BB.barPercent))) && void 0 !== VB ? VB : null,
          clock: this.clockText(BB)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, TB, dB, VB, yB, pB, lB, JB, YB, gB;
        const oB = [...null !== (BB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.active) && void 0 !== BB ? BB : [], ...null !== (dB = null === (VB = this.authoritative) || void 0 === VB ? void 0 : VB.completed) && void 0 !== dB ? dB : []];
        var kB, LB, OB, DB;
        oB.some((BB => BB.id === this.selected)) || (this.selected = null !== (kB = null !== (LB = null === (OB = this.authoritative) || void 0 === OB ? void 0 : OB.trackedQuestId) && void 0 !== LB ? LB : null === (DB = oB[0]) || void 0 === DB ? void 0 : DB.id) && void 0 !== kB ? kB : null);
        const uB = null !== (yB = null === (pB = this.authoritative) || void 0 === pB ? void 0 : pB.active.map((BB => this.entry(BB, !1)))) && void 0 !== yB ? yB : [];
        uB.sort(((BB, TB) => Number(TB.tracked) - Number(BB.tracked)));
        const HB = null !== (lB = null === (JB = this.authoritative) || void 0 === JB ? void 0 : JB.completed.map((BB => this.entry(BB, !0)))) && void 0 !== lB ? lB : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: uB,
          completed: HB,
          completedExpanded: this.completedExpanded,
          detail: null !== (YB = [...uB, ...HB].find((BB => BB.selected))) && void 0 !== YB ? YB : null,
          tracked: null !== (gB = uB.find((BB => BB.tracked))) && void 0 !== gB ? gB : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function od(BB) {
      var TB;
      return null !== (TB = null === BB || void 0 === BB ? void 0 : BB.active.find((TB => TB.id === BB.trackedQuestId))) && void 0 !== TB ? TB : null
    }
    const kd = "skyblockDungeonsView";
    class Ld extends kB {
      constructor(BB, TB) {
        let dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          VB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = TB, this.locale = dB, this.requestEnter = VB, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const BB = this.pickerEntry(),
            TB = null === BB || void 0 === BB ? void 0 : BB.difficulties[this.pageIndex];
          void 0 !== TB && null !== TB.unlockedBoss && (this.close(), this.requestEnter(BB.id, TB.difficulty))
        }
      }
      setTranslator(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = TB, this.emit()
      }
      MD(BB) {
        var TB, dB;
        if (!this.ND) return "open" === BB.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== BB.kind ? "snapshot" === BB.kind && (this.authoritative = BB.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (TB = null === (dB = this.pickerEntry()) || void 0 === dB ? void 0 : dB.difficulties.length) && void 0 !== TB ? TB : 1) - 1)), null === BB.snapshot && this.open ? this.close() : this.emit()) : this.choose(BB.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(BB) {
        var TB;
        const dB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.dungeons.find((TB => TB.id === BB));
        void 0 !== dB ? this.open && this.pickerDungeonId === BB || (this.pickerDungeonId = BB, this.pageIndex = Math.max(0, dB.difficulties.findLastIndex((BB => null !== BB.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${BB}`)
      }
      turnTo(BB) {
        var TB, dB;
        const VB = null !== (TB = null === (dB = this.pickerEntry()) || void 0 === dB ? void 0 : dB.difficulties.length) && void 0 !== TB ? TB : 0;
        BB < 0 || BB >= VB || BB === this.pageIndex || (this.pageIndex = BB, this.emit())
      }
      pickerEntry() {
        var BB, TB;
        return null !== (BB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.dungeons.find((BB => BB.id === this.pickerDungeonId))) && void 0 !== BB ? BB : null
      }
      difficulty(BB) {
        const TB = BB.completions > 0,
          dB = null === BB.bestMs ? null : (0, KB.n)(BB.bestMs);
        return {
          difficulty: BB.difficulty,
          label: this.translate(KB.e[BB.difficulty]),
          colour: KB.i[BB.difficulty],
          beaten: TB,
          bestTime: dB,
          completions: BB.completions,
          summary: TB ? [null === dB ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: dB
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: BB.completions.toLocaleString(this.locale)
          })].filter((BB => null !== BB)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(BB) {
        const TB = BB.difficulties.map((BB => this.difficulty(BB))),
          dB = TB.filter((BB => BB.beaten)).length;
        return {
          id: BB.id,
          name: this.translate(BB.nameKey),
          selected: BB.id === this.selected,
          beatenSummary: `${dB} / ${TB.length}`,
          difficulties: TB
        }
      }
      picker() {
        const BB = this.pickerEntry();
        if (null === BB || 0 === BB.difficulties.length) return null;
        const TB = BB.difficulties.map(((TB, dB) => {
          var VB, yB, pB, lB;
          const JB = TB.unlockedBoss,
            YB = null === JB ? this.lockedHint(BB, dB) : null;
          return {
            ...this.difficulty(TB),
            unlocked: null !== JB,
            bossName: null === JB ? null : this.translate(JB.bossNameKey),
            bossMobType: null !== (VB = null === JB || void 0 === JB ? void 0 : JB.bossMobType) && void 0 !== VB ? VB : null,
            bossMobVariation: null !== (yB = null === JB || void 0 === JB ? void 0 : JB.bossMobVariation) && void 0 !== yB ? yB : null,
            lockedHint: null !== (pB = null === YB || void 0 === YB ? void 0 : YB.text) && void 0 !== pB ? pB : null,
            lockedHintHighlight: null !== (lB = null === YB || void 0 === YB ? void 0 : YB.highlight) && void 0 !== lB ? lB : null,
            current: dB === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(BB.nameKey),
          pages: TB,
          page: TB[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < TB.length - 1
        }
      }
      lockedHint(BB, TB) {
        var dB, VB, yB;
        if (0 === TB && "number" === typeof BB.combatLevelLock) {
          const TB = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: BB.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: TB,
            colour: vT("combat"),
            icon: HT.combat
          })
        }
        const pB = null !== (dB = null === (VB = this.authoritative) || void 0 === VB ? void 0 : VB.dungeons) && void 0 !== dB ? dB : [],
          lB = TB > 0 ? BB : null !== (yB = pB[pB.indexOf(BB) - 1]) && void 0 !== yB ? yB : null,
          JB = TB > 0 ? BB.difficulties[TB - 1] : null === lB || void 0 === lB ? void 0 : lB.difficulties[0];
        if (null === lB || void 0 === JB) return null;
        const YB = this.translate(lB.nameKey);
        if (null === JB.unlockedBoss) return lB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, JB.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: YB
        }, JB.difficulty);
        const gB = this.translate(JB.unlockedBoss.bossNameKey);
        return lB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: gB
        }, JB.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: gB,
            dungeon: YB
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(BB, TB, dB) {
        return this.hintHighlighting(BB, TB, "difficulty", {
          name: this.translate(KB.e[dB]),
          colour: KB.i[dB],
          icon: null
        })
      }
      hintHighlighting(BB, TB, dB, VB) {
        let {
          name: yB,
          colour: pB,
          icon: lB
        } = VB;
        const JB = this.translate(BB, {
          ...TB,
          [dB]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(BB, {
            ...TB,
            [dB]: yB
          }),
          highlight: 2 === JB.length ? {
            before: JB[0],
            name: yB,
            after: JB[1],
            colour: pB,
            icon: lB
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, TB, dB;
        const VB = null !== (BB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.dungeons) && void 0 !== BB ? BB : [];
        var yB, pB;
        VB.some((BB => BB.id === this.selected)) || (this.selected = null !== (yB = null === (pB = VB[0]) || void 0 === pB ? void 0 : pB.id) && void 0 !== yB ? yB : null);
        const lB = VB.map((BB => this.entry(BB)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: lB,
          detail: null !== (dB = lB.find((BB => BB.selected))) && void 0 !== dB ? dB : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Od = ["mining", "farming", "foraging", "fishing", "combat"],
      Dd = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      ud = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Hd() {
      for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
      return TB.map(((BB, TB) => ({
        amount: BB,
        coins: Dd[TB],
        xp: ud[TB]
      })))
    }
    const Ed = Hd(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      vd = Hd(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      md = Hd(50, 100, 250, 500, 1e3, 2500, 5e3),
      Nd = Hd(25, 50, 100, 250, 500, 1e3),
      td = Hd(10, 25, 50, 100, 250, 500, 1e3),
      fd = Hd(1, 5, 10, 25, 50);

    function sd(BB, TB) {
      return {
        id: BB,
        category: "fishing",
        item: TB,
        drops: [TB],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : td
      }
    }
    const Md = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: vd
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: md
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: md
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Nd
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Nd
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: vd
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Ed
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Ed
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Ed
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: md
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: vd
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: vd
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: vd
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: md
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: md
      }, sd("wheatfish", "Wheatfish"), sd("darter", "Darter"), sd("sunset_minnow", "Sunset Minnow"), sd("root_flounder", "Root Flounder"), sd("greenfin_loach", "Greenfin Loach"), sd("red_strongfish", "Red Strongfish"), sd("green_strongfish", "Green Strongfish"), sd("boomerang_fish", "Boomerang Fish"), sd("seahorse", "Seahorse"), sd("spined_stickleback", "Spined Stickleback"), sd("moon_strongfish", "Moon Strongfish"), sd("boulder_bass", "Boulder Bass"), sd("grass_snapper", "Grass Snapper"), sd("crystal_wheatfish", "Crystalized Wheatfish", fd), sd("moonstone_pupfish", "Moonstone Pupfish", fd), sd("reedglass_minnow", "Reedglass Minnow"), sd("mangrove_herring", "Mangrove Herring"), sd("mudline_perch", "Mudline Perch"), sd("coastal_mullet", "Coastal Mullet"), sd("reef_sardine", "Reef Sardine"), sd("root_perch", "Root Perch"), sd("driftwood_catfish", "Driftwood Catfish"), sd("aether_minnow", "Aether Minnow"), sd("needlefish", "Tri-Pointed Needlefish"), sd("threadfin_bream", "Threadfin Bream"), sd("mudbelly_tilapia", "Mudbelly Tilapia"), sd("rotslab_eel", "Rotslab Eel"), sd("polarflash_electron", "Polarflash Electron"), sd("mireback_carp", "Mireback Carp"), sd("blackwater_bream", "Blackwater Bream"), sd("stone_grouper", "Stone Grouper"), sd("shadeback_ray", "Shadeback Ray"), sd("glacial_silverfish", "Glacial Silverfish"), sd("hatchetfish", "Hatchetfish"), sd("moonlit_boomerang", "Moonlit Boomerang Fish"), sd("murkborne_ray", "Murkborne Ray"), sd("bamboo_catfish", "Bamboo Catfish"), sd("mossback_arapaima", "Mossback Arapaima"), sd("murk_stingray", "Murk Stingray"), sd("channel_sawfish", "Channel Sawfish"), sd("boned_sturgeon", "Boned Sturgeon"), sd("oarfish", "Oarfish"), sd("snakehead", "Snakehead", fd), sd("eldertide_leviathan", "Eldertide Leviathan", fd), sd("pithead", "Pithead"), sd("electric_eel", "Electric Eel"), sd("shadow_darter", "Shadow Darter"), sd("abyss_carp", "Abyss Carp"), sd("nomai_moray", "Nomai Moray"), sd("silver_dragonfish", "Silver Dragonfish"), sd("giant_moray", "Giant Moray"), sd("coelacanth", "Coelacanth", fd), sd("frost_herring", "Frost Herring"), sd("permafrost_halibut", "Permafrost Halibut"), sd("glacial_lanternfish", "Glacial Lanternfish"), sd("frozen_grenadier", "Frozen Grenadier"), sd("blackfin_icefish", "Blackfin Icefish"), sd("moonfish", "Moonfish"), sd("alpha_strongfish", "Alpha Moon Strongfish"), sd("deep_lanternfish", "Deepwater Lanternfish", fd), sd("pearlescent_moonfish", "Pearlescent Moonfish", fd), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: vd
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Nd
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Nd
      }],
      zd = (new Map(Md.map((BB => [BB.id, BB]))), new Map),
      wd = new Map;
    for (const JY of Md) {
      for (const [BB, TB] of Object.entries(null !== (Ud = JY.blocks) && void 0 !== Ud ? Ud : {})) {
        var Ud;
        zd.set(BB, {
          collection: JY,
          amount: TB
        })
      }
      for (const BB of null !== (Fd = JY.drops) && void 0 !== Fd ? Fd : []) {
        var Fd;
        wd.set(BB, JY)
      }
    }

    function Kd(BB, TB) {
      let dB = 0;
      for (; dB < BB.tiers.length && TB >= BB.tiers[dB].amount;) dB++;
      return dB
    }
    const rd = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Id(BB) {
      return rd[BB - 1]
    }
    const cd = "skyblockCollectionsView";
    class Sd extends kB {
      constructor(BB, TB) {
        let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          VB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = TB, this.locale = dB, this.itemName = VB, this.counts = null, this.category = "mining", this.selected = Md[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = BB => {
          this.category = BB, this.selected = this.inCategory(BB)[0].id, this.emit()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, this.locale = TB, this.itemName = dB, this.emit()
      }
      MD(BB) {
        if (!this.ND)
          if ("collOpen" !== BB.kind) {
            (BB.collFull || null === this.counts) && (this.counts = new Map);
            for (const [TB, dB] of BB.collCounts) this.counts.set(TB, dB);
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
        var BB;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const TB = this.inCategory(this.category).map((BB => this.collectionView(BB))),
          dB = Md.reduce(((BB, TB) => BB + this.tierOf(TB)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Od.map((BB => this.categoryView(BB))),
          collections: TB,
          detail: null !== (BB = TB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(dB)
          })
        }
      }
      categoryView(BB) {
        const TB = this.inCategory(BB),
          dB = TB.reduce(((BB, TB) => BB + this.tierOf(TB)), 0),
          VB = TB.reduce(((BB, TB) => BB + TB.tiers.length), 0);
        return {
          id: BB,
          label: this.translate(`skyblockGame:${BB}`),
          icon: HT[BB],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(dB),
            target: this.number(VB)
          }),
          selected: BB === this.category
        }
      }
      collectionView(BB) {
        var TB, dB;
        const VB = null !== (TB = this.counts.get(BB.id)) && void 0 !== TB ? TB : 0,
          yB = Kd(BB, VB),
          pB = null !== (dB = BB.tiers[yB]) && void 0 !== dB ? dB : null,
          lB = 0 === yB ? 0 : BB.tiers[yB - 1].amount;
        return {
          id: BB.id,
          name: this.itemName(BB.item),
          icon: BB.item,
          selected: BB.id === this.selected,
          locked: 0 === VB,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(VB)
          }),
          tier: 0 === yB ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(yB),
          percent: null === pB ? 100 : Math.min(100, (VB - lB) / (pB.amount - lB) * 100),
          progress: null === pB ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(VB),
            target: this.number(pB.amount)
          }),
          nextReward: null === pB ? null : this.reward(BB, pB.coins, pB.xp)
        }
      }
      reward(BB, TB, dB) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(TB),
          xp: this.number(dB),
          skill: this.translate(`skyblockGame:${BB.category}`)
        })
      }
      tierLabel(BB) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Id(BB)
        })
      }
      tierOf(BB) {
        var TB;
        return Kd(BB, null !== (TB = this.counts.get(BB.id)) && void 0 !== TB ? TB : 0)
      }
      inCategory(BB) {
        return Md.filter((TB => TB.category === BB))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
    }
    const Pd = "skyblockPortalTransitView",
      Qd = "skyblockPortalArrival";
    class Rd {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.yH = BB, this.storage = TB, this.now = dB, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      MD(BB) {
        const TB = {
          zoneNameKey: BB.transitZoneNameKey,
          variation: BB.transitZoneVariation,
          colour: BB.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Qd, TB), this.show("departure", TB.zoneNameKey, TB.colour, BB.transitDurationMs, BB.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Qd)
        }))
      }
      resumeArrival(BB) {
        const TB = this.storage.getItem(Qd);
        this.storage.removeItem(Qd), null === TB || TB.variation !== BB || this.now() - TB.departedAt > 3e4 || this.show("arrival", TB.zoneNameKey, TB.colour, 3200, 2e4)
      }
      finishArrival(BB) {
        var TB;
        "arrival" === (null === (TB = this.view) || void 0 === TB ? void 0 : TB.phase) && this.view.token === BB && (this.clearTimer(), this.view = null, this.yH(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(BB, TB, dB, VB, yB, pB) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: BB,
          zoneNameKey: TB,
          colour: dB,
          durationMs: VB
        }, this.yH(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.yH(null), null === pB || void 0 === pB || pB()
        }), yB)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const ad = "skyblockDailyRewardView",
      Zd = "skyblockDailyRewardCoin";
    class Xd {
      constructor(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          YB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.yH = BB, this.isBusy = TB, this.holdQuestPopups = dB, this.onHeldCoinsChanged = VB, this.onCoinLanded = yB, this.onStarted = pB, this.onFinished = lB, this.onItemLanded = JB, this.now = YB, this.Dg = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var BB, TB;
        return null !== (BB = null === (TB = this.playing) || void 0 === TB ? void 0 : TB.view) && void 0 !== BB ? BB : null
      }
      getHeldCoins() {
        var BB, TB;
        let dB = 0;
        for (const VB of this.Dg) dB += VB.coins;
        return dB - (null !== (BB = null === (TB = this.playing) || void 0 === TB ? void 0 : TB.released) && void 0 !== BB ? BB : 0)
      }
      MD(BB) {
        "dailyRewardClaimed" !== BB.kind ? (this.queue.push(BB), this.dL()) : this.Dg.push({
          coins: BB.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      dL() {
        const BB = this.now();
        if (null === this.playing) return this.releaseUnshown(BB), void this.startNext(BB);
        const TB = this.playing,
          dB = BB - TB.startedAt,
          VB = TB.view.flyingCoins,
          yB = function(BB, TB) {
            let dB = 0;
            for (; dB < TB && hd(dB, TB) <= BB;) dB++;
            return dB
          }(dB, VB);
        if (yB !== TB.landed) {
          for (let BB = yB - TB.landed > 2 ? yB - 1 : TB.landed; BB < yB; BB++) this.onCoinLanded(BB, VB);
          TB.landed = yB, TB.released = Math.round(TB.view.coins * yB / VB), this.onHeldCoinsChanged()
        }
        for (; TB.itemsLanded < TB.view.items.length && 2e3 + 160 * TB.itemsLanded + 630 <= dB;) this.onItemLanded(TB.itemsLanded), TB.itemsLanded++;
        dB >= TB.view.durationMs && (this.finish(), this.startNext(BB))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Dg = [], this.yH(null)
      }
      startNext(BB) {
        if (0 === this.queue.length || this.isBusy()) return;
        const TB = this.queue.shift();
        this.token++;
        const dB = {
          token: this.token,
          day: TB.dailyRewardDay,
          coins: TB.dailyRewardCoins,
          items: TB.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: TB.dailyRewardDay === wB ? 24 : 14
        };
        this.playing = {
          view: dB,
          startedAt: BB,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.yH(dB), this.onStarted(dB)
      }
      finish() {
        this.Dg.shift(), this.playing = null, this.holdQuestPopups(!1), this.yH(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(BB) {
        if (this.queue.length > 0 || 0 === this.Dg.length) return;
        const TB = this.Dg.length;
        this.Dg = this.Dg.filter((TB => BB - TB.receivedAt < 6e4)), this.Dg.length !== TB && this.onHeldCoinsChanged()
      }
    }

    function Wd(BB, TB) {
      return 450 + 715 * BB / (TB - 1)
    }

    function hd(BB, TB) {
      return Wd(BB, TB) + 650
    }
    const Cd = "skyblockMailboxView";
    class Gd {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.yH = BB, this.isBusy = TB, this.onStarted = dB, this.now = VB, this.waiting = [], this.playing = null, this.token = 0, this.itemName = BB => BB
      }
      getSnapshot() {
        var BB, TB;
        return null !== (BB = null === (TB = this.playing) || void 0 === TB ? void 0 : TB.view) && void 0 !== BB ? BB : null
      }
      setItemName(BB) {
        this.itemName = BB
      }
      MD(BB) {
        this.waiting.push(...BB.mailLetters), this.dL()
      }
      dL() {
        const BB = this.now();
        null !== this.playing && BB - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.yH(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(BB)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.yH(null)
      }
      start(BB) {
        const TB = this.waiting.slice(0, 3);
        this.token++;
        const dB = {
          token: this.token,
          letters: TB.map((BB => this.toView(BB))),
          more: this.waiting.length - TB.length,
          durationMs: 4500 + 700 * TB.length
        };
        this.waiting = [], this.playing = {
          view: dB,
          startedAt: BB
        }, this.yH(dB), this.onStarted(dB)
      }
      toView(BB) {
        return {
          coins: BB.mailCoins,
          items: BB.mailItems.map((BB => {
            var TB;
            return {
              itemName: BB.mailItemName,
              amount: BB.mailItemAmount,
              label: null !== (TB = BB.mailItemLabel) && void 0 !== TB ? TB : this.itemName(BB.mailItemName)
            }
          })),
          reasonKey: BB.mailReasonKey,
          reasonParams: BB.mailReasonParams
        }
      }
    }
    const qd = "skyblockQuestGraphView",
      xd = "skyblockDevQuestJump";

    function jd(BB) {
      if (0 === BB.length) return "";
      const TB = [`M ${BB[0].x} ${BB[0].y}`];
      for (let VB = 1; VB < BB.length - 1; VB++) {
        const dB = BB[VB + 1];
        TB.push(`Q ${BB[VB].x} ${BB[VB].y} ${(BB[VB].x+dB.x)/2} ${(BB[VB].y+dB.y)/2}`)
      }
      const dB = BB[BB.length - 1];
      return TB.push(`L ${dB.x} ${dB.y}`), TB.join(" ")
    }

    function Ad(BB, TB) {
      return BB < TB ? `${BB}|${TB}` : `${TB}|${BB}`
    }
    class bd extends kB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(BB, dB, VB), this.translate = TB, this.requestJump = yB, this.requestArrive = pB, this.storage = lB, this.now = JB, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = BB => {
          BB !== this.hoveredId && (this.hoveredId = BB, this.emit())
        }, this.jump = BB => {
          this.close(), this.requestJump(BB)
        }
      }
      MD(BB) {
        if (!this.ND)
          if ("graph" !== BB.kind) {
            if ("jumping" === BB.kind) {
              const TB = {
                questId: BB.graphQuestId,
                variation: BB.graphVariation,
                completes: BB.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(xd, TB)
            }
          } else {
            const TB = ++this.graphCount;
            dB.e(105).then((() => dB(5798))).then((dB => {
              let {
                default: VB
              } = dB;
              this.ND || TB !== this.graphCount || (this.layout = function(BB, TB, dB) {
                var VB, yB;
                const pB = new BB.graphlib.Graph;
                pB.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), pB.setDefaultEdgeLabel((() => ({})));
                const lB = new Set;
                for (const oB of TB) lB.add(oB.graphQuestId), pB.setNode(oB.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const JB = dB.filter((BB => lB.has(BB.graphFromId) && lB.has(BB.graphToId) && BB.graphFromId !== BB.graphToId)),
                  YB = new Map;
                for (const oB of [...JB].sort(((BB, TB) => Number("awaits" === BB.graphEdgeKind) - Number("awaits" === TB.graphEdgeKind)))) {
                  const BB = Ad(oB.graphFromId, oB.graphToId);
                  YB.has(BB) || (YB.set(BB, oB), pB.setEdge(oB.graphFromId, oB.graphToId))
                }
                BB.layout(pB);
                const gB = pB.graph();
                return {
                  width: Math.ceil(null !== (VB = gB.width) && void 0 !== VB ? VB : 0),
                  height: Math.ceil(null !== (yB = gB.height) && void 0 !== yB ? yB : 0),
                  nodes: TB.map((BB => {
                    var TB, dB;
                    const VB = pB.node(BB.graphQuestId);
                    return {
                      node: BB,
                      left: (null !== (TB = VB.x) && void 0 !== TB ? TB : 0) - 95,
                      top: (null !== (dB = VB.y) && void 0 !== dB ? dB : 0) - 26
                    }
                  })),
                  edges: JB.map((BB => {
                    var TB;
                    const dB = YB.get(Ad(BB.graphFromId, BB.graphToId)),
                      VB = null !== (TB = pB.edge(dB.graphFromId, dB.graphToId).points) && void 0 !== TB ? TB : [];
                    return {
                      edge: BB,
                      key: `${BB.graphFromId}|${BB.graphToId}|${BB.graphEdgeKind}`,
                      path: jd(dB.graphFromId === BB.graphFromId ? VB : [...VB].reverse())
                    }
                  })),
                  plans: new Map(TB.map((BB => [BB.graphQuestId, new Set([BB.graphQuestId, ...BB.graphPlanIds])])))
                }
              }(VB, BB.graphNodes, BB.graphEdges), this.show())
            })).catch((BB => {
              console.error("The quest graph could not be laid out", BB)
            }))
          }
      }
      resumeJump(BB) {
        const TB = this.storage.getItem(xd);
        this.storage.removeItem(xd), null === TB || TB.variation !== BB || this.now() - TB.departedAt > 6e4 || this.requestArrive(TB.questId, TB.completes)
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
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
        var BB, TB;
        return null !== (BB = null === this.hoveredId || null === (TB = this.layout) || void 0 === TB ? void 0 : TB.plans.get(this.hoveredId)) && void 0 !== BB ? BB : new Set
      }
      buildSnapshot() {
        const BB = this.layout;
        if (null === BB) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const TB = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: BB.width,
          height: BB.height,
          nodes: BB.nodes.map((BB => {
            let {
              node: dB,
              left: VB,
              top: yB
            } = BB;
            return {
              id: dB.graphQuestId,
              name: this.translate(dB.graphNameKey),
              detail: null === dB.graphGiverName ? dB.graphZoneId : `${dB.graphGiverName} \xb7 ${dB.graphZoneId}`,
              state: dB.graphState,
              left: VB,
              top: yB,
              inPlan: TB.has(dB.graphQuestId),
              hovered: dB.graphQuestId === this.hoveredId
            }
          })),
          edges: BB.edges.map((BB => {
            let {
              edge: dB,
              key: VB,
              path: yB
            } = BB;
            return {
              key: VB,
              kind: dB.graphEdgeKind,
              path: yB,
              inPlan: TB.has(dB.graphFromId) && TB.has(dB.graphToId)
            }
          })),
          planning: TB.size > 0
        }
      }
    }
    var nd = dB(35996);
    const ed = 250,
      BV = 2150,
      TV = -2.8,
      dV = 2.2,
      VV = -27,
      yV = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      pV = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      lV = Math.round(50 + 1e3 * (pV.delay + pV.period / 2)),
      JV = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      YV = Array.from({
        length: 26
      }, ((BB, TB) => {
        const dB = 2.39996 * TB,
          VB = .5 + .618034 * TB % 1 * .23,
          yB = TB % 3 !== 2;
        return {
          rune: yB ? JV[7 * TB % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(dB)*VB).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(dB)*VB).toFixed(3)})`,
            "--spin": 40 * (TB % 5 - 2) + "deg",
            "--size": (yB ? 1 + TB % 4 * .2 : .3 + TB % 2 * .15) + "rem",
            "--duration": `${(1.8+7*TB%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*TB%3).toFixed(2)}s`
          }
        }
      }));

    function gV(BB, TB) {
      return Array.from({
        length: 30 + 3 * BB + (TB ? 10 : 0)
      }, ((BB, TB) => {
        const dB = TB < 4,
          VB = dB ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          yB = dB ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          pB = dB ? 2.2 : .6 + Math.random(),
          lB = dB ? .3 : Math.random() < .5 ? .16 : .24,
          JB = dB ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": VB,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${yB.toFixed(2)}rem`,
          "--length": `${pB.toFixed(2)}rem`,
          "--width": `${lB}rem`,
          "--duration": `${Math.round(JB)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function oV(BB) {
      let {
        zeta: TB,
        period: dB
      } = BB;
      const VB = 2 * Math.PI / dB;
      return {
        w: VB,
        decay: TB * VB / Math.sqrt(1 - TB * TB)
      }
    }
    let kV = !1;

    function LV() {
      if (kV) return;
      kV = !0;
      const BB = document.createElement("style");
      BB.textContent = function() {
        const BB = oV(yV),
          TB = oV(pV),
          dB = TB => Math.exp(-BB.decay * TB) * Math.sin(BB.w * TB),
          VB = dB(Math.atan(BB.w / BB.decay) / BB.w),
          yB = .25,
          pB = 2.15,
          lB = Math.round(215),
          JB = [];
        for (let YB = 0; YB <= lB; YB++) {
          const BB = YB / lB * pB;
          let gB = Math.sin(Math.min(BB, yB) / yB * Math.PI / 2) ** 2,
            oB = 0,
            kB = 1,
            LB = 1 - .2 * gB,
            OB = 1;
          if (BB >= yB) {
            const lB = BB - yB,
              JB = Math.max(0, lB - .05);
            gB = Math.exp(-JB / .05), oB = dB(JB + yV.lead * (1 - Math.exp(-JB / yV.rush))) / VB;
            const YB = JB - pV.delay,
              DB = YB <= 0 ? 0 : 1 - Math.exp(-TB.decay * YB) * (Math.cos(TB.w * YB) + TB.decay / TB.w * Math.sin(TB.w * YB)),
              uB = Math.max(0, (BB - 1.77) / (pB - 1.77));
            kB = (1 + (pV.to - 1) * DB) * (1 + .08 * uB), LB = 1.1 + 1.5 * Math.exp(-lB / .07) + .3 * Math.exp(-(((1e3 * lB - lV) / 100) ** 2)) + .8 * uB, OB = 1 - uB ** 1.5
          }
          const DB = .15 * gB + TV * oB,
            uB = -.1 * gB + dV * oB,
            HB = 3 * gB + VV * oB;
          JB.push(`${(YB/lB*100).toFixed(3)}% { opacity: ${OB.toFixed(3)}; transform: translate(${DB.toFixed(3)}rem, ${uB.toFixed(3)}rem) rotate(${HB.toFixed(2)}deg) scale(${kB.toFixed(3)}); filter: brightness(${LB.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${JB.join(" ")} }`
      }(), document.head.append(BB)
    }
    const OV = "skyblockForgeView",
      DV = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class uV extends kB {
      constructor(BB, TB, dB, VB, yB) {
        super(BB, dB, VB), this.translate = TB, this.requestForge = yB, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (BB, TB) => {
          var dB, VB;
          null !== this.forging || (null !== (dB = this.owned[(0, nd.p)(TB, BB)]) && void 0 !== dB ? dB : 0) <= 0 || (this.selected[BB] = this.selected[BB] === TB ? null : TB, this.status = null, null === (VB = this.onPartSelected) || void 0 === VB || VB.call(this), this.emit())
        }, this.forge = BB => {
          var TB, dB;
          const VB = this.selectedParts();
          if (null === VB || this.isPending() || !this.open) return;
          const yB = (0, nd.l)(VB);
          if (null === yB || yB.coalCost > this.coal) return;
          const pB = this.preview(yB),
            lB = null !== (TB = null === (dB = this.onForgeStarted) || void 0 === dB ? void 0 : dB.call(this, pB.tier, pB.named, BB)) && void 0 !== TB ? TB : () => {};
          if (this.dropArrival(), BB) {
            const BB = {
              id: ++this.forgeId,
              preview: pB,
              timers: [],
              stopSounds: lB,
              landed: !1,
              reply: null
            };
            BB.timers.push(setTimeout((() => {
              BB.landed = !0, null !== BB.reply && (this.apply(BB.reply), BB.reply = null, this.emit())
            }), ed), setTimeout((() => {
              this.finishForge(BB)
            }), BV)), this.forging = BB
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(VB)
        }, this.snapshot = this.buildSnapshot()
      }
      MD(BB) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.forgeMessageKind) return this.dropForge(), this.apply(BB), this.status = null, void this.show();
        const TB = this.forging;
        if (null !== TB && null !== BB.forgeRefusalKey) this.dropForge();
        else if (null !== TB && !TB.landed) return void(TB.reply = BB);
        this.apply(BB), this.emit()
      }
      apply(BB) {
        if (this.owned = BB.forgeOwnedParts, this.coal = BB.forgeCoalOwned, this.keepSelectionOwned("open" === BB.forgeMessageKind), null !== BB.forgeForgedSwordId) {
          var TB;
          const dB = (0, nd.l)(BB.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (TB = null === dB || void 0 === dB ? void 0 : dB.displayName) && void 0 !== TB ? TB : ""
            }
          }
        } else null !== BB.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: BB.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(BB) {
        var TB;
        this.forging = null;
        const dB = this.selectedParts(),
          VB = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: BB.id,
          sameSword: null !== dB && (null === (TB = (0, nd.l)(dB)) || void 0 === TB ? void 0 : TB.displayName) === BB.preview.name,
          timer: VB
        }, this.emit()
      }
      dropForge() {
        const BB = this.forging;
        if (null !== BB) {
          this.forging = null;
          for (const TB of BB.timers) clearTimeout(TB);
          BB.stopSounds(), null !== BB.reply && this.apply(BB.reply)
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
        var BB, TB, dB;
        const VB = this.selectedParts(),
          yB = null === VB ? null : (0, nd.l)(VB),
          pB = null !== (BB = null === (TB = this.forging) || void 0 === TB ? void 0 : TB.preview) && void 0 !== BB ? BB : null === yB ? null : this.preview(yB);
        return {
          enabled: this.received,
          open: this.open,
          slots: nd.k.map((BB => ({
            kind: BB,
            label: this.translate(DV[BB]),
            parts: this.partsFor(BB)
          }))),
          coalOwned: this.coal,
          preview: pB,
          unformedSword: nd.g[null !== (dB = this.selected.Blade) && void 0 !== dB ? dB : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((BB => BB > 0)),
          canForge: null !== pB && !pB.coalShort && !this.isPending(),
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
      preview(BB) {
        return {
          name: BB.displayName,
          lore: BB.lore,
          baseSword: BB.baseSword,
          enchantmentTier: BB.enchantmentTier,
          tier: Number(BB.enchantmentTier.slice(-1)),
          named: BB.named,
          stats: this.stats(BB),
          effects: BB.effects,
          coalCost: BB.coalCost,
          coalShort: null === this.forging && BB.coalCost > this.coal
        }
      }
      partsFor(BB) {
        const TB = [];
        for (const VB of nd.f) {
          var dB;
          const yB = (0, nd.p)(VB, BB),
            pB = null !== (dB = this.owned[yB]) && void 0 !== dB ? dB : 0;
          pB > 0 && TB.push({
            material: VB,
            itemName: yB,
            owned: pB,
            selected: this.selected[BB] === VB,
            placeholder: !1
          })
        }
        if (0 === TB.length) {
          const dB = nd.f[0];
          TB.push({
            material: dB,
            itemName: (0, nd.p)(dB, BB),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return TB
      }
      stats(BB) {
        const TB = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${BB.powerMultiplier.toFixed(2)}`,
          better: BB.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${BB.damageMultiplier.toFixed(2)}`,
          better: BB.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/BB.cooldownMultiplier).toFixed(2)}`,
          better: BB.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${BB.knockbackMultiplier.toFixed(2)}`,
          better: BB.knockbackMultiplier > 1
        }];
        return BB.reachBonus > 0 && TB.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${BB.reachBonus.toFixed(1)}`,
          better: !0
        }), BB.damageReduction > 0 && TB.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*BB.damageReduction)}%`,
          better: !0
        }), TB
      }
      selectedParts() {
        const {
          Blade: BB,
          Guard: TB,
          Handle: dB
        } = this.selected;
        return null === BB || null === TB || null === dB ? null : {
          blade: BB,
          guard: TB,
          handle: dB
        }
      }
      keepSelectionOwned(BB) {
        for (const dB of nd.k) {
          var TB;
          const VB = this.selected[dB];
          if (null !== VB && (null !== (TB = this.owned[(0, nd.p)(VB, dB)]) && void 0 !== TB ? TB : 0) > 0) continue;
          if (!BB) {
            this.selected[dB] = null;
            continue
          }
          const yB = [...nd.f].reverse().find((BB => {
            var TB;
            return (null !== (TB = this.owned[(0, nd.p)(BB, dB)]) && void 0 !== TB ? TB : 0) > 0
          }));
          this.selected[dB] = null !== yB && void 0 !== yB ? yB : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const HV = "skyblockSmugglerView",
      EV = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class vV extends kB {
      constructor(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, dB, VB), this.translate = TB, this.requestBuy = yB, this.now = pB, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = BB => BB, this.onBought = null, this.buy = BB => {
          const TB = this.deals[BB];
          void 0 !== TB && !this.isPending() && this.open && !this.soldOut.has(BB) && this.canAfford(TB) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, BB))
        }, this.snapshot = this.buildSnapshot()
      }
      MD(BB) {
        if (this.received = !0, this.day = BB.smugglerDay, this.deals = BB.smugglerDeals, this.rivets = BB.smugglerRivetsOwned, this.crests = BB.smugglerCrestsOwned, this.soldOut = new Set(BB.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + BB.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = BB.smugglerBoughtSlot, null !== BB.smugglerBoughtSlot) {
          var TB, dB;
          const VB = this.deals[BB.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === VB ? "" : this.dealName(VB),
              amount: String(null !== (TB = null === VB || void 0 === VB ? void 0 : VB.smugglerDealAmount) && void 0 !== TB ? TB : 0)
            }
          }, this.boughtCount++, null === (dB = this.onBought) || void 0 === dB || dB.call(this)
        } else null !== BB.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: BB.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, void 0 !== dB && (this.itemName = dB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(BB) {
        if (null !== BB.smugglerDealUniqueName) return BB.smugglerDealUniqueName;
        const TB = EV[BB.smugglerDealItem];
        return void 0 === TB ? this.itemName(BB.smugglerDealItem) : this.translate(TB)
      }
      canAfford(BB) {
        return BB.smugglerDealRivets <= this.rivets && BB.smugglerDealCrests <= this.crests
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
        const BB = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return BB <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : BB < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(BB)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(BB / 60)),
          minutes: String(BB % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((BB, TB) => ({
            slot: TB,
            itemName: BB.smugglerDealItem,
            displayName: this.dealName(BB),
            enchantmentTier: BB.smugglerDealEnchantmentTier,
            amount: BB.smugglerDealAmount,
            rivets: BB.smugglerDealRivets,
            crests: BB.smugglerDealCrests,
            affordable: this.canAfford(BB),
            soldOut: this.soldOut.has(TB),
            justBought: this.boughtSlot === TB
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
    const mV = "skyblockPassageView",
      iV = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function NV(BB, TB) {
      return BB(iV[TB])
    }

    function tV(BB, TB, dB, VB) {
      const yB = Math.ceil((dB - VB) / 864e5),
        pB = NV(BB, TB);
      return yB > 1 ? BB("skyblockGame:passageNextDays", {
        phase: pB,
        days: String(yB)
      }) : BB("skyblockGame:passageNextSoon", {
        phase: pB
      })
    }
    class fV extends kB {
      constructor(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, dB, VB), this.translate = TB, this.now = yB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = BB => BB, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      MD(BB) {
        this.message = BB, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, void 0 !== dB && (this.itemName = dB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(BB) {
        return {
          itemName: BB.passageFish,
          displayName: this.itemName(BB.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(BB.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const BB = this.message;
        return null === BB ? {
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
          phase: BB.passagePhase,
          phaseName: NV(this.translate, BB.passagePhase),
          visitors: BB.passageVisitors.map((BB => this.describe(BB))),
          resting: this.describe(BB.passageResting),
          nextPhase: BB.passageNextPhase,
          next: tV(this.translate, BB.passageNextPhase, BB.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var sV = dB(37506);
    const MV = "skyblockKeepersChairView";
    class zV extends kB {
      constructor(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new sV.d;
        super(BB, dB, VB), this.translate = TB, this.requestAim = yB, this.now = pB, this.pacer = lB, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = BB => BB, this.aim = BB => {
          !this.awaitingReply && this.open && this.atChair && BB !== this.favoured && (null === BB || this.islands.some((TB => TB.keepersChairIslandId === BB && TB.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== BB && void 0 !== BB ? BB : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = lB.subscribe((() => {
          this.emit()
        }))
      }
      MD(BB) {
        var TB, dB;
        this.received = !0;
        const VB = this.favoured,
          yB = this.atChair;
        var pB;
        return this.islands = BB.keepersChairIslands, this.favoured = BB.keepersChairFavoured, this.passage = null !== (TB = BB.keepersChairPassage) && void 0 !== TB ? TB : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (dB = BB.keepersChairAtChair) || void 0 === dB || dB, "place" === BB.keepersChairMessageKind ? (!yB && this.atChair && "refused" === (null === (pB = this.status) || void 0 === pB ? void 0 : pB.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== BB.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: BB.keepersChairRefusalKey,
          island: null
        } : this.favoured !== VB && (this.status = null === this.favoured ? {
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
      receivePassage(BB) {
        this.received && (this.passage = BB, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, void 0 !== dB && (this.itemName = dB), this.emit()
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
      islandName(BB) {
        const TB = this.islands.find((TB => TB.keepersChairIslandId === BB));
        return void 0 === TB ? BB : this.translate(TB.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const BB = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          TB = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((BB => {
            const TB = BB.keepersChairFeaturedFish;
            return {
              id: BB.keepersChairIslandId,
              name: this.translate(BB.keepersChairIslandNameKey),
              relit: BB.keepersChairIslandRelit,
              featuredFish: null === TB ? null : {
                itemName: TB,
                displayName: this.itemName(TB)
              },
              favoured: BB.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === BB ? null : {
            tone: BB.tone,
            text: this.translate(BB.key, null === BB.island ? void 0 : {
              island: this.islandName(BB.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === TB ? null : {
            phase: TB.keepersChairPassagePhase,
            phaseName: NV(this.translate, TB.keepersChairPassagePhase),
            nextPhase: TB.keepersChairPassageNextPhase,
            next: tV(this.translate, TB.keepersChairPassageNextPhase, TB.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const wV = "skyblockReachLogView",
      UV = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      FV = "Caught Fish",
      KV = [1, 2, 4];

    function rV(BB, TB) {
      return BB.map((BB => ({
        ...BB,
        reachLogPageFish: BB.reachLogPageFish.map((BB => ({
          ...BB,
          reachLogFishFresh: TB(BB)
        })))
      })))
    }
    class IV extends kB {
      constructor(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new sV.d;
        super(BB, dB, VB), this.translate = TB, this.requestOpen = yB, this.pacer = pB, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = BB => BB, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = BB => {
          this.pages.some((TB => TB.reachLogIslandId === BB)) && (this.selected = BB, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = pB.subscribe((() => {
          this.emit()
        }))
      }
      MD(BB) {
        if (this.received = !0, "status" === BB.reachLogMessageKind) return !0 === BB.reachLogNews && this.markNews(), this.serverFresh = BB.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const TB = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== BB.reachLogMessageKind)
          if (this.pageViews = null, this.pages = rV(BB.reachLogPages, (BB => BB.reachLogFishFresh || this.heldFresh.has(BB.reachLogFishItem))), this.letGoShown = BB.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, TB) this.showPages();
          else {
            for (const BB of this.pages)
              for (const TB of BB.reachLogPageFish) TB.reachLogFishFresh && this.heldFresh.add(TB.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, this.pageViews = null, void 0 !== dB && (this.itemName = dB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = rV(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var BB, TB, dB, VB;
        const yB = this.pages.find((BB => BB.reachLogPageFish.some((BB => BB.reachLogFishFresh))));
        if (void 0 !== yB) return yB.reachLogIslandId;
        if (null !== this.selected && this.pages.some((BB => BB.reachLogIslandId === this.selected))) return this.selected;
        return null !== (BB = null !== (TB = null === (dB = this.pages.filter((BB => BB.reachLogIslandAwake)).at(-1)) || void 0 === dB ? void 0 : dB.reachLogIslandId) && void 0 !== TB ? TB : null === (VB = this.pages[0]) || void 0 === VB ? void 0 : VB.reachLogIslandId) && void 0 !== BB ? BB : null
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
        return this.pages.map((BB => {
          var TB;
          return {
            id: BB.reachLogIslandId,
            name: this.translate(BB.reachLogIslandNameKey),
            awake: BB.reachLogIslandAwake,
            gold: BB.reachLogPageGold,
            caught: BB.reachLogPageFish.filter((BB => BB.reachLogFishCaught && !BB.reachLogFishVisitor)).length,
            total: BB.reachLogPageFish.filter((BB => !BB.reachLogFishVisitor)).length,
            fish: BB.reachLogPageFish.map((BB => {
              const TB = BB.reachLogFishBestKg;
              return {
                itemName: BB.reachLogFishItem,
                name: BB.reachLogFishCaught ? this.itemName(BB.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: BB.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / BB.reachLogFishChance))
                }),
                best: BB.reachLogFishCaught ? null === TB ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: TB.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: BB.reachLogFishMarks,
                ribbons: KV.map((TB => 0 !== (BB.reachLogFishRibbons & TB))),
                glimmer: 0 !== (8 & BB.reachLogFishRibbons),
                halo: 0 !== (32 & BB.reachLogFishRibbons),
                fresh: BB.reachLogFishFresh,
                visitor: BB.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (TB = BB.reachLogPageReturner) && void 0 !== TB ? TB : null)
          }
        }))
      }
      buildReturner(BB) {
        return null === BB ? null : {
          itemName: BB.reachLogReturnerFishItem,
          line: this.translate(BB.reachLogReturnerLineKey, {
            name: this.translate(BB.reachLogReturnerNameKey),
            trinket: this.translate(BB.reachLogReturnerTrinketKey)
          }),
          back: BB.reachLogReturnerBack
        }
      }
      receivePassagePhase(BB) {
        null !== this.passagePhase && this.passagePhase !== BB && (this.pagesCurrent = !1), this.passagePhase = BB
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const cV = "skyblockLampLightView";
    class SV {
      constructor(BB, TB, dB, VB) {
        this.yH = BB, this.translate = TB, this.requestCommand = dB, this.pacer = VB, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.ND = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = BB => {
          BB ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = BB => {
          this.send(`buy ${BB}`)
        }, this.socket = BB => {
          this.send(`socket ${null!==BB&&void 0!==BB?BB:IB}`)
        }, this.wearTint = BB => {
          this.send(`tint ${null!==BB&&void 0!==BB?BB:IB}`)
        }, this.setSituation = BB => {
          this.situation = BB, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = VB.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = VB.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      MD(BB) {
        if (this.message = BB, null !== BB.lampLightShop && (this.shop = BB.lampLightShop), "open" === BB.lampLightKind && (this.refusalKey = null), "reply" === BB.lampLightKind) {
          var TB;
          const yB = null !== (TB = BB.lampLightReplyTag) && void 0 !== TB ? TB : null,
            pB = null !== yB && yB === this.offTag;
          var dB, VB;
          if (pB ? this.settleOff() : null !== yB && yB !== this.awaitingTag || this.settleReply(), this.refusalKey = BB.lampLightRefusalKey, null !== BB.lampLightBought && !pB) this.sparkle = {
            id: BB.lampLightBought,
            count: (null !== (dB = null === (VB = this.sparkle) || void 0 === VB ? void 0 : VB.count) && void 0 !== dB ? dB : 0) + 1
          }
        }
        BB.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === BB.lampLightKind && (this.lastGained = BB.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(BB) {
        BB !== this.atChair && (this.atChair = BB, BB && (this.refusalKey = null), this.emit())
      }
      setTranslator(BB, TB) {
        this.translate = BB, this.locale = null !== TB && void 0 !== TB ? TB : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.ND = !0
      }
      send(BB) {
        var TB;
        if (null !== this.awaitingTag || "ready" !== (null === (TB = this.message) || void 0 === TB ? void 0 : TB.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const dB = this.nextTag();
        this.awaitingTag = dB, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${BB} ${dB}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const BB = this.nextTag();
        this.offTag = BB, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${BB}`)
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
        this.ND || (this.snapshot = this.buildSnapshot(), this.yH(this.snapshot))
      }
      formatLight(BB) {
        return Math.floor(BB).toLocaleString(this.locale)
      }
      formatPercent(BB) {
        const TB = 100 * BB;
        return TB >= 10 ? Math.round(TB).toLocaleString(this.locale) : TB.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(BB, TB) {
        if ("bite" === BB) return this.translate("skyblockGame:lampLightBite", {
          seconds: (TB.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === BB) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(TB.lampLightRareChance)
        });
        if ("notice" === BB) return null === TB.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(TB.lampLightNoticeChance)
        });
        const dB = "meter" === BB ? TB.lampLightMeterCatches : TB.lampLightBloomCatches;
        return null === dB ? null : this.translate("meter" === BB ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(dB))
        })
      }
      oddsLines(BB, TB) {
        const dB = (BB, TB) => {
            var dB;
            return null !== (dB = {
              bite: TB.lampLightBiteMs,
              rare: TB.lampLightRareChance,
              meter: TB.lampLightMeterCatches,
              bloom: TB.lampLightBloomCatches,
              notice: TB.lampLightNoticeChance
            } [BB]) && void 0 !== dB ? dB : 0
          },
          VB = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          yB = [];
        for (const pB of ["bite", "rare", "meter", "bloom", "notice"]) {
          const lB = this.formatOdds(pB, BB),
            JB = this.formatOdds(pB, TB);
          if (null === lB || null === JB || "bite" !== pB && "rare" !== pB && lB === JB) continue;
          const YB = dB(pB, TB) - dB(pB, BB),
            gB = VB[pB] ? YB < 0 : YB > 0;
          yB.push({
            label: pB,
            before: lB,
            after: JB,
            tone: lB === JB ? "same" : gB ? "better" : "worse"
          })
        }
        return yB
      }
      charmView(BB, TB, dB) {
        const VB = BB.lampLightCharmId.charAt(0).toUpperCase() + BB.lampLightCharmId.slice(1),
          yB = "bloom" === this.situation;
        return {
          id: BB.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${VB}`),
          effect: this.translate(`skyblockGame:lampLightCharm${VB}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(BB.lampLightCharmCost)
          }),
          owned: BB.lampLightCharmOwned,
          affordable: dB >= BB.lampLightCharmCost,
          socketed: TB.lampLightSocketed === BB.lampLightCharmId,
          lines: this.oddsLines(yB ? TB.lampLightBareBloom : TB.lampLightBareOpen, yB ? BB.lampLightCharmBloom : BB.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var BB, TB, dB, VB;
        const yB = this.message,
          pB = "ready" === (null === yB || void 0 === yB ? void 0 : yB.lampLightStatus) ? this.shop : null,
          lB = null !== (BB = null === yB || void 0 === yB ? void 0 : yB.lampLightBalance) && void 0 !== BB ? BB : 0,
          JB = this.atChair,
          YB = "loading" === (null === yB || void 0 === yB ? void 0 : yB.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === yB || void 0 === yB ? void 0 : yB.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          gB = "ready" !== (null === yB || void 0 === yB ? void 0 : yB.lampLightStatus) || JB ? null !== (TB = this.refusalKey) && void 0 !== TB ? TB : YB : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== yB && "locked" !== yB.lampLightStatus,
          status: null !== (dB = null === yB || void 0 === yB ? void 0 : yB.lampLightStatus) && void 0 !== dB ? dB : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(lB)
          }),
          releasing: null !== (VB = null === yB || void 0 === yB ? void 0 : yB.lampLightReleasing) && void 0 !== VB && VB,
          gained: null === yB || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === yB || void 0 === yB ? void 0 : yB.lampLightStatus) && JB && !this.isPending(),
          situation: this.situation,
          shop: null === pB ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: pB.lampLightOddsRod,
              island: this.translate(pB.lampLightIslandNameKey)
            }),
            heldRod: null !== pB.lampLightHeldRod,
            charms: pB.lampLightCharms.map((BB => this.charmView(BB, pB, lB))),
            tints: pB.lampLightTints.map((BB => {
              const TB = BB.lampLightTintId,
                [dB, VB, yB] = BB.lampLightTintColour;
              return {
                id: TB,
                name: this.translate(`skyblockGame:lampLightTint${TB.charAt(0).toUpperCase()}${TB.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(BB.lampLightTintCost)
                }),
                owned: BB.lampLightTintOwned,
                affordable: lB >= BB.lampLightTintCost,
                wearing: pB.lampLightTint === TB,
                colour: `rgb(${dB}, ${VB}, ${yB})`
              }
            })),
            wearingIslandColours: null === pB.lampLightTint
          },
          notice: null === gB ? null : this.translate(gB),
          sparkle: this.sparkle
        }
      }
    }
    const PV = "skyblockMagmawardView";
    class QV {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.yH = BB, this.now = TB, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = ZB.map((() => 0)), this.wornAt = ZB.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      MD(BB) {
        var TB, dB;
        const VB = ZB.map(((TB, dB) => !0 === BB.magmawardPiecesWorn[dB]));
        if (!VB.includes(!0)) return this.snapshot = null, void this.yH(null);
        const yB = this.now(),
          pB = this.snapshot;
        null === pB && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const lB = BB.magmawardFuelCarried,
          JB = !VB.includes(!1);
        let YB = null !== (TB = null === pB || void 0 === pB ? void 0 : pB.pulse) && void 0 !== TB ? TB : null,
          gB = null !== (dB = null === pB || void 0 === pB ? void 0 : pB.flare) && void 0 !== dB ? dB : null;
        BB.magmawardFuelBurned ? (YB = "burn", gB = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = yB, this.flareAt = yB) : null !== pB && lB > pB.fuel && (YB = "gain", this.pulseToken++, this.pulseAt = yB), JB && null !== pB && !pB.fullSet && (gB = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = yB, this.setLitAt = yB);
        const oB = ZB.map(((BB, TB) => (VB[TB] && null !== pB && !pB.pieces[TB].worn && (this.wornTokens[TB]++, this.wornAt[TB] = yB), {
          itemName: BB,
          worn: VB[TB],
          wornToken: this.wornTokens[TB],
          justWorn: VB[TB] && this.isPlaying(this.wornAt[TB], yB)
        })));
        this.snapshot = {
          pieces: oB,
          wornCount: VB.filter(Boolean).length,
          fullSet: JB,
          fuel: lB,
          fuelState: lB <= 0 ? "empty" : lB <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, yB) ? YB : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, yB) ? gB : null,
          flareToken: this.flareToken,
          setLit: JB && this.isPlaying(this.setLitAt, yB),
          setLitToken: this.setLitToken
        }, this.yH(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.yH(null)
      }
      isPlaying(BB, TB) {
        return TB - BB < 1200
      }
    }
    const RV = "skyblockGlowtideView";
    class aV {
      constructor(BB) {
        this.yH = BB, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = BB => {
          this.arrow = BB, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      MD(BB) {
        this.bloom = BB.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.yH(null))
      }
      afterRender(BB, TB) {
        const dB = this.bloom;
        if (null === dB || null === BB) return;
        const VB = dB.glowtideBloomX - BB[0],
          pB = dB.glowtideBloomZ - BB[2],
          lB = Math.hypot(VB, pB),
          JB = this.snapshot,
          YB = null !== JB && void 0 !== JB && JB.inRange ? 1 : 0,
          gB = lB <= 12.5 + YB && BB[1] - dB.glowtideBloomY <= 10 + YB;
        !gB || null !== JB && void 0 !== JB && JB.inRange || this.inRangeToken++;
        const oB = {
          colour: dB.glowtideBloomColour,
          inRange: gB,
          distance: Math.round(lB),
          inRangeToken: this.inRangeToken
        };
        (null === JB || oB.colour !== JB.colour || oB.inRange !== JB.inRange || !gB && oB.distance !== JB.distance) && (this.snapshot = oB, this.yH(oB));
        const kB = yB.e.computeShortestRotation(TB, (0, yB.Fb)([VB, 0, pB]));
        null === this.arrow || Math.abs(kB - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${kB}rad)`, this.arrowTurn = kB)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.yH(null)
      }
    }
    const ZV = "skyblockGlowMeterView";
    class XV {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.yH = BB, this.now = TB, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      MD(BB) {
        const TB = this.now(),
          {
            glowMeterFill: dB,
            glowMeterCapacity: VB
          } = BB,
          yB = dB >= VB,
          pB = this.snapshot;
        null !== pB && (yB && !pB.full && (this.fullToken++, this.fullAt = TB), pB.full && !yB ? (this.burstToken++, this.burstAt = TB) : dB > pB.fill && (this.gainToken++, this.gainAt = TB)), this.snapshot = {
          fill: dB,
          Kk: VB,
          ratio: Math.min(1, Math.max(0, dB / VB)),
          full: yB,
          rares: BB.glowMeterRares,
          ready: yB && this.isPlaying(this.fullAt, TB),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, TB),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, TB),
          gainToken: this.gainToken
        }, this.yH(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.yH(null)
      }
      isPlaying(BB, TB) {
        return TB - BB < 2e3
      }
    }
    const WV = "skyblockHushWaitView";
    class hV {
      constructor(BB) {
        this.yH = BB, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      MD(BB) {
        let {
          hushWaitMs: TB,
          hushWaitTotalMs: dB,
          hushWaitLines: VB
        } = BB;
        if (this.clearTimers(), this.token++, 0 === VB.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (TB <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: VB[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const yB = Math.max(null !== dB && void 0 !== dB ? dB : TB, TB),
          pB = yB - TB,
          lB = BB => yB * BB / VB.length,
          JB = BB => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: yB,
              elapsedMs: pB,
              line: VB[BB],
              lineIndex: BB
            })
          };
        let YB = 0;
        for (; YB + 1 < VB.length && lB(YB + 1) <= pB;) YB++;
        JB(YB);
        for (let gB = YB + 1; gB < VB.length; gB++) this.later(lB(gB) - pB, (() => {
          JB(gB)
        }));
        this.later(TB, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(BB) {
        this.snapshot = BB, this.yH(BB)
      }
      later(BB, TB) {
        this.timers.push(setTimeout(TB, BB))
      }
      clearTimers() {
        for (const BB of this.timers) clearTimeout(BB);
        this.timers = []
      }
    }
    const CV = "skyblockTideChartsView",
      GV = 36e5,
      qV = 864e5;

    function xV(BB, TB, dB) {
      const [VB, yB, pB, lB] = BB.tideChartArea, JB = Math.floor(TB), YB = Math.floor(dB);
      return JB >= VB && JB <= pB && YB >= yB && YB <= lB
    }

    function jV(BB, TB, dB) {
      const [VB, yB, pB, lB] = BB.tideChartWater;
      return function(BB, TB, dB, VB, yB, pB) {
        const lB = 4 - XB(Math.floor(yB) - (BB - dB), dB);
        return 5 * XB(Math.floor(pB) - (TB - VB), VB) + lB
      }(VB, yB, pB, lB, TB, dB)
    }

    function AV(BB, TB, dB) {
      const VB = BB.tideCharts;
      for (let yB = 0; yB < VB.length; yB++)
        if (xV(VB[yB], TB, dB)) return VB[yB];
      return null
    }

    function bV(BB, TB, dB) {
      const VB = Math.max(0, TB - dB);
      return VB > qV ? BB("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(VB / qV))
      }) : VB > GV ? BB("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(VB / GV))
      }) : BB("skyblockGame:tideChartsTurnSoon")
    }
    class nV extends kB {
      constructor(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, dB, VB), this.translate = TB, this.now = yB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.dO = BB => {
          this.picked = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      MD(BB) {
        const TB = this.message;
        if (null !== TB)
          for (const VB of BB.tideCharts) {
            var dB;
            const BB = TB.tideCharts.find((BB => BB.tideChartIsland === VB.tideChartIsland)),
              yB = VB.tideChartLit & ~(null !== (dB = null === BB || void 0 === BB ? void 0 : BB.tideChartLit) && void 0 !== dB ? dB : 0);
            void 0 !== BB && 0 !== yB && (this.pulse = {
              island: VB.tideChartIsland,
              cells: yB,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = BB, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(BB, TB) {
        var dB;
        const VB = null === this.message || Number.isNaN(BB) ? null : AV(this.message, BB, TB),
          yB = null !== (dB = null === VB || void 0 === VB ? void 0 : VB.tideChartIsland) && void 0 !== dB ? dB : null,
          pB = null === VB ? -1 : function(BB, TB, dB) {
            const [VB, yB, pB, lB] = BB.tideChartWater;
            return function(BB, TB, dB, VB, yB, pB, lB) {
              return ((yB - BB) / (dB + lB)) ** 2 + ((pB - TB) / (VB + lB)) ** 2 <= 1
            }(VB, yB, pB, lB, TB, dB, 2) ? jV(BB, TB, dB) : -1
          }(VB, BB, TB);
        return (yB !== this.hereIsland || pB !== this.hereCell) && (this.hereIsland = yB, this.hereCell = pB, null !== yB && (this.lastIsland = yB), !0)
      }
      afterRender(BB) {
        if (null === this.message) return;
        this.lastX = null === BB ? Number.NaN : BB[0], this.lastZ = null === BB ? Number.NaN : BB[2];
        const TB = this.locate(this.lastX, this.lastZ),
          dB = this.expirePulses();
        (TB || dB || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const BB = this.now();
        return !(!this.open || BB - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = BB, bV(this.translate, this.message.tideChartTurnsInMs, BB - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(BB, TB) {
        const dB = null === this.message ? null : AV(this.message, BB, TB);
        if (null === dB) return;
        const VB = jV(dB, BB, TB);
        0 === (dB.tideChartPreBlank & 1 << VB) && (this.cast = {
          island: dB.tideChartIsland,
          cell: VB,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const BB = this.now();
        let TB = !1;
        return 0 !== this.pulse.cells && BB - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, TB = !0), null !== this.cast && BB - this.cast.atMs >= 1500 && (this.cast = null, TB = !0), TB
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(BB, TB) {
        var dB;
        return null !== (dB = BB.tideCharts.find((BB => BB.tideChartIsland === TB))) && void 0 !== dB ? dB : null
      }
      describe(BB) {
        var TB, dB, VB;
        const yB = BB.tideChartIsland,
          pB = [];
        for (let OB = 0; OB < 25; OB++) {
          const TB = 1 << OB;
          0 !== (BB.tideChartLit & TB) ? pB.push("lit") : 0 !== (BB.tideChartClear & TB) ? pB.push("clear") : 0 !== (BB.tideChartPreBlank & TB) ? pB.push("shore") : pB.push("water")
        }
        const lB = function(BB) {
            let TB = 0;
            for (let dB = BB >>> 0; 0 !== dB; dB &= dB - 1) TB++;
            return TB
          }(BB.tideChartLit),
          JB = BB.tideChartInkCount,
          YB = this.translate(BB.tideChartIslandNameKey),
          gB = this.translate("skyblockGame:tideChartsLit", {
            lit: String(lB),
            ink: String(JB)
          }),
          oB = null === BB.tideChartPictureNameKey ? null : this.translate(BB.tideChartPictureNameKey),
          kB = this.hereIsland === yB && -1 !== this.hereCell ? this.hereCell : null,
          LB = [`${YB}: ${gB}.`];
        if (null !== oB && LB.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: oB
          })), null !== kB) {
          const BB = Math.floor(kB / 5) + 1,
            TB = kB % 5 + 1;
          LB.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(BB),
            column: String(TB)
          }))
        }
        return {
          island: yB,
          islandName: YB,
          cells: pB,
          hereCell: kB,
          lit: lB,
          ink: JB,
          litText: gB,
          pictureName: oB,
          gridLabel: LB.join(" "),
          pulseCells: this.pulse.island === yB ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (TB = this.cast) || void 0 === TB ? void 0 : TB.island) === yB ? this.cast.cell : null,
          castToken: null !== (dB = null === (VB = this.cast) || void 0 === VB ? void 0 : VB.token) && void 0 !== dB ? dB : 0
        }
      }
      buildSnapshot() {
        var BB, TB, dB;
        const VB = this.message;
        if (null === VB || 0 === VB.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const yB = this.findChart(VB, this.hereIsland),
          pB = null !== (BB = null !== (TB = null !== (dB = this.findChart(VB, this.open ? this.picked : null)) && void 0 !== dB ? dB : yB) && void 0 !== TB ? TB : this.findChart(VB, this.lastIsland)) && void 0 !== BB ? BB : VB.tideCharts[0],
          lB = null === yB ? null : this.describe(yB);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: lB,
          card: pB === yB ? lB : this.describe(pB),
          turnsText: bV(this.translate, VB.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(VB.tideChartBookCount)
          }),
          tabs: VB.tideCharts.map((BB => ({
            island: BB.tideChartIsland,
            name: this.translate(BB.tideChartIslandNameKey),
            selected: BB.tideChartIsland === pB.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const eV = "skyblockRegularsView",
      By = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Ty = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function dy(BB, TB) {
      return "given" === BB ? TB.given : "owed" === BB ? TB.owed : TB.goal
    }
    class Vy extends kB {
      constructor(BB, TB, dB, VB) {
        super(BB, dB, VB), this.translate = TB, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = BB => BB, this.openIsland = BB => {
          this.selected = BB, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = BB => {
          this.selected = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      MD(BB) {
        this.message = BB, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const BB = this.openedFromReachLog;
        return this.openedFromReachLog = !1, BB
      }
      setTranslator(BB, TB, dB) {
        this.translate = BB, void 0 !== dB && (this.itemName = dB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(BB, TB, dB) {
        return {
          text: this.translate(dy(BB, TB), dB),
          given: "given" === BB
        }
      }
      describeRegular(BB, TB) {
        const dB = this.translate,
          VB = null !== BB.regularKg,
          yB = BB.regularMeetings,
          pB = VB ? 0 === yB ? dB("skyblockGame:regularsNotMet") : 1 === yB ? dB("skyblockGame:regularsMeetingsOne") : dB("skyblockGame:regularsMeetings", {
            count: yB
          }) : "";
        return {
          id: BB.regularId,
          name: dB(BB.regularNameKey),
          line: dB(BB.regularLineKey),
          itemName: BB.regularFishItem,
          fishName: this.itemName(BB.regularFishItem),
          tagged: VB,
          size: null === BB.regularKg ? dB("skyblockGame:regularsNotTagged") : dB("skyblockGame:regularsSize", {
            kg: BB.regularKg.toFixed(1)
          }),
          meetings: pB,
          chance: dB("skyblockGame:regularsChance", {
            count: BB.regularOneInCasts
          }),
          resting: BB.regularRestingToday,
          gifts: [{
            text: dB("skyblockGame:regularsGiftFlare"),
            given: yB >= 3
          }, this.describeGift(BB.regularTintGift, By, {
            tint: dB(BB.regularTintNameKey)
          })],
          history: [...BB.regularHistory].reverse().map((BB => {
            const VB = BB.regularMeetingKg.toFixed(1),
              yB = TB - BB.regularMeetingDay;
            return yB <= 0 ? dB("skyblockGame:regularsToday", {
              kg: VB
            }) : dB("skyblockGame:regularsDaysAgo", {
              days: yB,
              kg: VB
            })
          }))
        }
      }
      describeIsland(BB, TB) {
        return {
          id: BB.regularsIslandId,
          name: this.translate(BB.regularsIslandNameKey),
          charm: this.describeGift(BB.regularsCharmGift, Ty, {
            charm: this.translate(BB.regularsCharmNameKey)
          }),
          regulars: BB.regularsList.map((BB => this.describeRegular(BB, TB)))
        }
      }
      buildSnapshot() {
        var BB, TB, dB, VB;
        const yB = this.message;
        if (null === yB) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const pB = yB.regularsIslands.map((BB => this.describeIsland(BB, yB.regularsToday))),
          lB = null !== (BB = null !== (TB = null === (dB = pB.find((BB => BB.id === this.selected))) || void 0 === dB ? void 0 : dB.id) && void 0 !== TB ? TB : null === (VB = pB[0]) || void 0 === VB ? void 0 : VB.id) && void 0 !== BB ? BB : "";
        return {
          enabled: !0,
          open: this.open,
          selected: lB,
          islands: pB
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const yy = "skyblockHiddenWatersView";
    class py {
      constructor(BB) {
        this.yH = BB, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      MD(BB) {
        this.snapshot = function(BB) {
          const [TB, dB] = BB.hiddenWatersMapSize, VB = (BB, VB) => ({
            left: 1 - BB / TB,
            top: VB / dB
          }), yB = new Map;
          for (const [lB, JB] of BB.hiddenWatersGlimpses) {
            var pB;
            const BB = null !== (pB = yB.get(lB)) && void 0 !== pB ? pB : [];
            BB.push(JB), yB.set(lB, BB)
          }
          return {
            found: BB.hiddenWatersFound,
            total: BB.hiddenWatersTotal,
            aspect: dB / TB,
            pins: BB.hiddenWatersPins.map((BB => {
              let [TB, dB] = BB;
              return VB(TB, dB)
            })),
            islands: BB.hiddenWatersIslands.map((BB => {
              let [yB, pB, lB, JB] = BB;
              const {
                left: YB,
                top: gB
              } = VB(lB + 1, pB);
              return {
                left: YB,
                top: gB,
                width: (lB + 1 - yB) / TB,
                height: (JB + 1 - pB) / dB
              }
            })),
            glimpses: yB
          }
        }(BB), this.yH(this.snapshot)
      }
    }
    const ly = "skyblockDialogueView";
    class Jy extends kB {
      constructor(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, dB, VB), this.translate = TB, this.requestDialogue = yB, this.now = pB, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = BB => {
          this.selection = {
            kind: "quest",
            questId: BB
          }, this.request(), this.show()
        }, this.selectCharacter = BB => {
          this.selection = {
            kind: "character",
            npcId: BB
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      MD(BB) {
        this.received = !0, this.scripts = BB.questDialogueScripts, this.speakers = new Map(BB.questDialogueSpeakers.map((BB => [BB.dialogueSpeakerId, BB]))), this.emit()
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const BB = this.now();
        BB >= this.requestAvailableAt && (this.requestAvailableAt = BB + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var BB;
        const TB = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...TB,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const dB = this.selection;
        if ("quest" === dB.kind) {
          const BB = this.scripts.find((BB => BB.dialogueQuestId === dB.questId));
          return {
            ...TB,
            characters: [],
            questFocus: dB.questId,
            conversations: BB ? [this.conversation(BB)] : []
          }
        }
        const VB = [];
        for (let pB = this.scripts.length - 1; pB >= 0; pB--) {
          const BB = this.scripts[pB].dialogueLines;
          for (let TB = BB.length - 1; TB >= 0; TB--) VB.includes(BB[TB].dialogueSpeakerId) || VB.push(BB[TB].dialogueSpeakerId)
        }
        const yB = null !== dB.npcId && VB.includes(dB.npcId) ? dB.npcId : null !== (BB = VB[0]) && void 0 !== BB ? BB : null;
        return {
          ...TB,
          characters: VB.map((BB => {
            var TB, dB;
            return {
              id: BB,
              styling: null !== (TB = null === (dB = this.speakers.get(BB)) || void 0 === dB ? void 0 : dB.dialogueSpeakerStyling) && void 0 !== TB ? TB : BB,
              selected: BB === yB
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((BB => BB.dialogueLines.some((BB => BB.dialogueSpeakerId === yB)))).map((BB => this.conversation(BB))).reverse()
        }
      }
      conversation(BB) {
        let TB = null;
        return {
          questId: BB.dialogueQuestId,
          questName: this.translate(BB.dialogueQuestNameKey),
          completed: BB.dialogueQuestCompleted,
          lines: BB.dialogueLines.map(((BB, dB) => {
            var VB;
            const yB = BB.dialogueSpeakerId === TB || null === (VB = this.speakers.get(BB.dialogueSpeakerId)) || void 0 === VB ? void 0 : VB.dialogueSpeakerStyling;
            return TB = BB.dialogueSpeakerId, {
              key: dB,
              display: {
                line: {
                  translationKey: BB.dialogueLineKey,
                  params: this.params(BB.dialogueLineParams)
                },
                speakerName: yB,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(BB) {
        if (void 0 !== BB) return Object.fromEntries(Object.entries(BB).map((BB => {
          let [TB, dB] = BB;
          return [TB, "string" === typeof dB ? dB : this.translate(dB.translationKey)]
        })))
      }
    }
    var Yy = dB(554),
      gy = dB(1147),
      oy = dB(95);
    const ky = "skyblockAutographsView";

    function Ly(BB) {
      const TB = Yy.n[BB];
      return {
        label: TB.chatTag.map((BB => BB.str)).join(""),
        icon: TB.icon,
        colour: TB.mainRGB
      }
    }
    class Oy extends kB {
      constructor(BB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = TB, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      MD(BB) {
        this.signatures = BB.autographSignatures, BB.autographOpen ? this.show() : this.emit()
      }
      setTranslator(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = TB, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var BB;
        const TB = null !== (BB = this.signatures) && void 0 !== BB ? BB : [],
          dB = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          VB = [...TB].sort(((BB, TB) => Number(null !== TB.autographRank) - Number(null !== BB.autographRank) || TB.autographSignedAtMs - BB.autographSignedAtMs)).map((BB => ({
            key: `${BB.autographSignedAtMs}|${BB.autographSignerName}`,
            name: (0, gy.c)(BB.autographSignerName, !oy.featureFlags.canSeeRealPlayerNames),
            rank: null === BB.autographRank ? null : Ly(BB.autographRank),
            signedOn: dB.format(BB.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: VB,
          total: VB.length,
          rankTotal: VB.filter((BB => null !== BB.rank)).length
        }
      }
    }
    const Dy = "skyblockHudView",
      uy = () => {},
      Hy = {
        getItem: () => null,
        setItem: uy,
        removeItem: uy
      };
    class Ey {
      constructor(BB) {
        let {
          translate: TB,
          translateWithIcons: dB,
          setMenuOpen: VB = uy,
          dismissMenu: yB = () => {
            VB(!1)
          },
          publishSkills: pB = uy,
          publishQuests: lB = uy,
          publishQuestNotification: JB = uy,
          publishDungeons: YB = uy,
          publishCollections: gB = uy,
          publishMap: oB = uy,
          publishHud: kB = uy,
          publishPortalTransit: LB = uy,
          publishDailyReward: DB = uy,
          publishMailbox: uB = uy,
          publishQuestGraph: HB = uy,
          publishForge: EB = uy,
          publishSmuggler: vB = uy,
          publishKeepersChair: mB = uy,
          publishReachLog: iB = uy,
          publishLampLight: NB = uy,
          publishMagmaward: tB = uy,
          publishGlowtide: sB = uy,
          publishGlowMeter: MB = uy,
          publishHushWait: zB = uy,
          publishPassage: wB = uy,
          publishTideCharts: UB = uy,
          publishRegulars: FB = uy,
          publishHiddenWaters: KB = uy,
          publishDialogue: rB = uy,
          publishAutographs: IB = uy,
          isLoadingScreenUp: cB = () => !1,
          onDailyRewardCoinLanded: SB = uy,
          onDailyRewardStarted: PB = uy,
          onDailyRewardFinished: QB = uy,
          onDailyRewardItemLanded: RB = uy,
          onMailboxStarted: aB = uy,
          journeyStorage: ZB = Hy,
          requestTracking: XB = uy,
          requestTravel: WB = uy,
          requestDungeonEnter: hB = uy,
          requestQuestJump: CB = uy,
          requestQuestArrive: GB = uy,
          requestForge: qB = uy,
          requestSmuggle: xB = uy,
          requestKeepersChairAim: jB = uy,
          requestReachLogOpen: AB = uy,
          requestLampLight: bB = uy,
          requestDialogue: nB = uy
        } = BB;
        this.navigation = void 0, this.map = void 0, this.compass = new fB, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new sV.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = BB => BB, this.close = () => {
          for (const BB of this.panels) BB.close()
        }, this.setMenuOpen = VB, this.publishHud = kB, this.portalTransit = new Rd(LB, ZB), this.magmaward = new QV(tB), this.glowtide = new aV(sB), this.glowMeter = new XV(MB), this.hushWait = new hV(zB), this.dailyReward = new Xd(DB, (() => cB() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (BB => {
          this.quests.setNotificationsHeld(BB)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), SB, PB, QB, RB);
        const eB = BB => {
          this.panels.some((BB => BB.isOpen())) || (BB ? yB() : this.setMenuOpen(!1))
        };
        this.skills = new yd(pB, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), TB, void 0, void 0, eB), this.quests = new gd(lB, XB, TB, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, eB, JB), this.dungeons = new Ld(YB, TB, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, eB, hB), this.collections = new Sd(gB, TB, (() => {
          this.beforePanelOpen(this.collections)
        }), eB), this.map = new OB(oB, WB, TB, (() => {
          this.beforePanelOpen(this.map)
        }), eB), this.questGraph = new bd(HB, TB, (() => {
          this.beforePanelOpen(this.questGraph)
        }), eB, CB, GB, ZB), this.forge = new uV(EB, TB, (() => {
          this.beforePanelOpen(this.forge)
        }), eB, qB), this.smuggler = new vV(vB, TB, (() => {
          this.beforePanelOpen(this.smuggler)
        }), eB, xB), this.lampLight = new SV(NB, TB, bB, this.commandPacer), this.keepersChair = new zV(mB, TB, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (BB => {
          this.lampLight.onChairClosed(), eB(BB)
        }), jB, Date.now, this.commandPacer), this.reachLog = new IV(iB, TB, (() => {
          this.beforePanelOpen(this.reachLog)
        }), eB, AB, this.commandPacer), this.passage = new fV(wB, TB, (() => {
          this.beforePanelOpen(this.passage)
        }), eB), this.tideCharts = new nV(UB, TB, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), eB), this.regulars = new Vy(FB, TB, (() => {
          this.beforePanelOpen(this.regulars)
        }), (BB => {
          this.regulars.takeReturnToReachLog() && !BB && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), eB(BB)
        })), this.hiddenWaters = new py(KB), this.dialogue = new Jy(rB, TB, (() => {
          this.beforePanelOpen(this.dialogue)
        }), eB, nB), this.autographs = new Oy(IB, (() => {
          this.beforePanelOpen(this.autographs)
        }), eB), this.mailbox = new Gd(uB, (() => cB() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), aB), this.quests.translateWithIcons = null !== dB && void 0 !== dB ? dB : null, this.skills.onLevelUp = BB => {
          this.quests.notify(BB)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new dd(this.map, this.quests, this.compass, TB)
      }
      getHudSnapshot() {
        const BB = this.hudSnapshot,
          TB = this.dailyReward.getHeldCoins();
        return null === BB || TB <= 0 || !("hudPurseCoins" in BB) ? BB : {
          ...BB,
          hudPurseCoins: Math.max(0, BB.hudPurseCoins - TB)
        }
      }
      receiveHud(BB) {
        this.hudSnapshot = BB, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(BB) {
        this.setMenuOpen(!0);
        const TB = BB === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = BB;
        for (const dB of this.panels) dB === BB || TB && dB === this.reachLog || dB.close();
        this.openingPanel = null
      }
      setTranslator(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TB => this.resolveItemName(TB, BB);
        this.quests.translateWithIcons = null !== dB && void 0 !== dB ? dB : null, this.navigation.setTranslator(BB, TB), this.lampLight.setTranslator(BB, TB), this.mailbox.setItemName(VB);
        for (const yB of this.panels) yB.setTranslator(BB, TB, VB)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const BB of this.panels) BB.dispose()
      }
    }
    var vy = dB(933),
      my = dB.n(vy),
      iy = dB(21),
      Ny = dB(35589),
      ty = dB(2884),
      fy = dB(1666),
      sy = dB(1657),
      My = dB(8594),
      zy = dB(1078),
      wy = dB(1317),
      Uy = dB(980);

    function Fy(BB) {
      let {
        controller: TB,
        minimap: dB,
        children: VB
      } = BB;
      const pB = (0, wy.f)(Dy, TB.getHudSnapshot()),
        [lB, JB] = (0, MB.useState)(TB.skills.getSnapshot().overallLevel);
      (0, wy.e)(Vd, (BB => {
        JB(BB.overallLevel)
      }));
      const YB = (0, MB.useRef)(null);
      (0, wy.e)(Zd, (BB => {
        ! function(BB, TB) {
          if (null === BB || "function" !== typeof BB.animate) return;
          const dB = TB ? 1.35 : 1.15;
          BB.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${dB})`
          }, {
            transform: "scale(1)"
          }], {
            duration: TB ? 320 : 160,
            easing: "ease-out"
          }), BB.classList.toggle("Receiving", !TB), TB && (BB.classList.remove("Shine"), BB.offsetWidth, BB.classList.add("Shine"))
        }(YB.current, BB)
      }));
      const {
        t: gB
      } = (0, zy.z)(), {
        isTouchScreen: oB
      } = (0, iy.m)(["isTouchScreen"]), [kB, LB] = (0, MB.useState)(null);
      return (0, ty.k)(kB, ".SkyblockRightHud"), null !== pB || dB ? (0, Uy.jsx)(Ny.e, {
        placement: "topRight",
        children: (0, Uy.jsxs)("div", {
          className: my()("SkyblockRightHud", {
            TouchScreen: oB
          }),
          children: [dB, null !== pB && (0, Uy.jsxs)("div", {
            ref: LB,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in pB ? (0, Uy.jsx)("div", {
              className: "SkyblockHudHelp",
              children: pB.hudHelpText
            }) : (0, Uy.jsxs)(Uy.Fragment, {
              children: [(0, Uy.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Uy.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Uy.jsx)("strong", {
                    style: {
                      color: yB.L.cyanUiText
                    },
                    children: gB(pB.hudZoneNameKey)
                  }), null !== lB && (0, Uy.jsx)("span", {
                    style: {
                      color: yB.L.goldUiText
                    },
                    children: gB("skyblockGame:level", {
                      level: (0, My.c)(lB)
                    })
                  })]
                }), (0, Uy.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: YB,
                  children: [(0, Uy.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Uy.jsx)(fy.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, My.c)(pB.hudPurseCoins)]
                })]
              }), pB.hudClockText.length > 0 && (0, Uy.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Uy.jsx)(sy.e, {
                  text: pB.hudClockText
                })
              })]
            }), VB, "hudZoneNameKey" in pB && (0, Uy.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Ky(BB) {
      let {
        icon: TB
      } = BB;
      const dB = (0, MB.useCallback)((BB => {
        null === BB || void 0 === BB || BB.replaceChildren(hT(TB))
      }), [TB]);
      return (0, Uy.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: dB
      })
    }

    function ry(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)();
      return (0, Uy.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: TB.display.mountPlayer,
        title: dB("skyblockGame:mapYouAreHere"),
        children: (0, Uy.jsx)(Ky, {
          icon: "player"
        })
      })
    }
    const Iy = dB(37514),
      cy = Object.fromEntries(Iy.keys().map((BB => [BB.replace(/^\.\/(.*)\.png$/, "$1"), Iy(BB)])));

    function Sy(BB, TB) {
      var dB;
      return null !== (dB = cy[BB]) && void 0 !== dB ? dB : cy[TB]
    }

    function Py(BB) {
      let {
        imageKey: TB,
        fallbackImageKey: dB,
        geometryKey: VB,
        alt: yB,
        className: pB
      } = BB;
      const [lB, JB] = (0, MB.useState)((() => function(BB, TB) {
        return [{
          id: 0,
          imageKey: BB,
          geometryKey: TB,
          phase: "shown"
        }]
      }(TB, VB))), YB = function(BB, TB, dB) {
        const VB = BB[BB.length - 1];
        if (VB.imageKey === TB && VB.geometryKey === dB) return BB;
        const yB = {
          id: VB.id + 1,
          imageKey: TB,
          geometryKey: dB,
          phase: "entering"
        };
        return VB.geometryKey === dB ? [{
          ...VB,
          phase: "leaving"
        }, yB] : [yB]
      }(lB, TB, VB);
      return YB !== lB && JB(YB), (0, Uy.jsx)(Uy.Fragment, {
        children: YB.map((BB => (0, Uy.jsx)("img", {
          className: my()("SkyblockMapTerrainImage", pB, {
            Entering: "entering" === BB.phase,
            Leaving: "leaving" === BB.phase
          }),
          src: Sy(BB.imageKey, dB),
          alt: "leaving" === BB.phase ? "" : yB,
          onAnimationEnd: () => {
            JB((TB => function(BB, TB) {
              return BB.flatMap((BB => BB.id !== TB ? [BB] : "leaving" === BB.phase ? [] : [{
                ...BB,
                phase: "shown"
              }]))
            }(TB, BB.id)))
          }
        }, BB.id)))
      })
    }
    var Qy = dB(3942),
      Ry = dB(1324);

    function ay(BB) {
      if ("Tab" !== BB.key) return;
      const TB = Array.from(BB.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        dB = TB.indexOf(document.activeElement);
      var VB;
      if (BB.shiftKey && dB <= 0) BB.preventDefault(), null === (VB = TB.at(-1)) || void 0 === VB || VB.focus();
      else if (!BB.shiftKey && (-1 === dB || dB === TB.length - 1)) {
        var yB;
        BB.preventDefault(), null === (yB = TB[0]) || void 0 === yB || yB.focus()
      }
    }

    function Zy() {
      const BB = (0, MB.useRef)(null);
      return (0, MB.useCallback)((TB => {
        var dB;
        TB ? (BB.current = document.activeElement, TB.focus()) : null === (dB = BB.current) || void 0 === dB || dB.focus()
      }), [])
    }

    function Xy(BB) {
      let {
        percent: TB,
        label: dB,
        levelUpToken: VB,
        colour: yB
      } = BB;
      return (0, Uy.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": dB,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": TB,
        "aria-valuetext": dB,
        children: [(0, Uy.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${TB/100})`
          }
        }), null !== VB && void 0 !== VB && (0, Uy.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": yB
          }
        }, VB)]
      })
    }

    function Wy(BB) {
      let {
        mount: TB
      } = BB;
      return (0, Uy.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: TB,
        hidden: !0,
        children: (0, Uy.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Uy.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Uy.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function hy(BB, TB, dB, VB) {
      (0, MB.useLayoutEffect)((() => {
        const yB = BB.current;
        if (!dB || null === TB || void 0 === TB || !TB.local || !yB) return;
        const pB = Array.from(yB.querySelectorAll(".SkyblockMapNode")),
          lB = [...TB.points, ...TB.portals],
          JB = () => {
            const BB = yB.clientWidth,
              dB = yB.clientHeight,
              JB = pB.map(((yB, pB) => {
                const JB = lB[pB];
                return {
                  id: JB.id,
                  portal: pB >= TB.points.length,
                  x: JB.position[0] * BB / 100,
                  y: JB.position[1] * dB / 100,
                  width: yB.offsetWidth / VB,
                  height: yB.offsetHeight / VB
                }
              })),
              YB = new Map(lB.map(((BB, TB) => [BB.id, pB[TB]])));
            for (const TB of function(BB, TB, dB) {
                const VB = [],
                  yB = [...BB].sort(((BB, TB) => Number(TB.portal) - Number(BB.portal) || BB.id.localeCompare(TB.id)));
                for (const pB of yB) {
                  const BB = BB => Math.max(pB.width / 2, Math.min(TB - pB.width / 2, BB)),
                    yB = BB => Math.max(pB.height / 2, Math.min(dB - pB.height / 2, BB)),
                    lB = [BB(pB.x)],
                    JB = [yB(pB.y)];
                  for (const TB of VB) lB.push(BB(TB.x - (TB.width + pB.width) / 2 - 4), BB(TB.x + (TB.width + pB.width) / 2 + 4)), JB.push(yB(TB.y - (TB.height + pB.height) / 2 - 4), yB(TB.y + (TB.height + pB.height) / 2 + 4));
                  let YB = {
                      ...pB,
                      x: lB[0],
                      y: JB[0]
                    },
                    gB = 1 / 0,
                    oB = 1 / 0;
                  for (const TB of new Set(lB))
                    for (const BB of new Set(JB)) {
                      let dB = 0;
                      for (const lB of VB) dB += Math.max(0, (pB.width + lB.width) / 2 + 4 - Math.abs(TB - lB.x)) * Math.max(0, (pB.height + lB.height) / 2 + 4 - Math.abs(BB - lB.y));
                      const yB = (TB - pB.x) ** 2 + (BB - pB.y) ** 2;
                      (dB < gB || dB === gB && yB < oB) && (YB = {
                        ...pB,
                        x: TB,
                        y: BB
                      }, gB = dB, oB = yB)
                    }
                  VB.push(YB)
                }
                return VB
              }(JB, BB, dB)) {
              const BB = YB.get(TB.id);
              BB.style.left = `${TB.x}px`, BB.style.top = `${TB.y}px`
            }
          };
        JB();
        const YB = new ResizeObserver(JB);
        YB.observe(yB);
        for (const BB of pB) YB.observe(BB);
        return () => {
          YB.disconnect()
        }
      }), [BB, TB, dB, VB])
    }
    const Cy = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Gy = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function qy(BB, TB, dB) {
      return Math.min(dB, Math.max(TB, BB))
    }

    function xy(BB, TB, dB) {
      const VB = Math.min(1, dB * TB / BB),
        yB = Math.min(1, BB / (dB * TB));
      return {
        x0: (1 - VB) / 2,
        y0: (1 - yB) / 2,
        x1: (1 + VB) / 2,
        y1: (1 + yB) / 2
      }
    }

    function jy(BB, TB, dB, VB) {
      const yB = TB * (VB - dB);
      if (yB <= 1) return .5 - TB * (dB + VB) / 2;
      const pB = .45 * Math.min(1, yB - 1);
      return qy(BB, 1 - TB * VB - pB, pB - TB * dB)
    }

    function Ay(BB, TB) {
      const dB = qy(BB.zoom, 1, 12);
      return {
        zoom: dB,
        x: jy(BB.x, dB, TB.x0, TB.x1),
        y: jy(BB.y, dB, TB.y0, TB.y1)
      }
    }

    function by(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Gy;
      const pB = qy(BB.zoom * TB, 1, 12),
        lB = pB / BB.zoom;
      return Ay({
        zoom: pB,
        x: dB - (dB - BB.x) * lB,
        y: VB - (VB - BB.y) * lB
      }, yB)
    }

    function ny(BB, TB, dB, VB) {
      const [yB, pB] = (0, MB.useState)(Cy);
      (0, MB.useEffect)((() => {
        pB(Cy)
      }), [dB]), (0, MB.useEffect)((() => {
        const dB = BB.current;
        if (!TB || !dB) return;
        const yB = () => xy(dB.clientWidth, dB.clientHeight, VB),
          lB = BB => {
            const TB = dB.getBoundingClientRect();
            return {
              x: (BB.clientX - TB.left) / TB.width,
              y: (BB.clientY - TB.top) / TB.height
            }
          },
          JB = new Map;
        let YB = {
            x: 0,
            y: 0
          },
          gB = !1,
          oB = 0;
        const kB = BB => {
            BB.preventDefault();
            const TB = BB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * BB.deltaY : BB.deltaY,
              dB = lB(BB);
            pB((BB => by(BB, Math.exp(.0015 * -TB), dB.x, dB.y, yB())))
          },
          LB = BB => {
            "mouse" === BB.pointerType && 0 !== BB.button || (JB.set(BB.pointerId, lB(BB)), 1 === JB.size && (YB = {
              x: BB.clientX,
              y: BB.clientY
            }, gB = !1), oB = 0)
          },
          OB = BB => {
            const TB = JB.get(BB.pointerId);
            if (!TB) return;
            const VB = lB(BB);
            if (JB.set(BB.pointerId, VB), 2 === JB.size) {
              const [BB, TB] = [...JB.values()], dB = Math.hypot(BB.x - TB.x, BB.y - TB.y);
              if (oB > 0) {
                const VB = dB / oB;
                pB((dB => by(dB, VB, (BB.x + TB.x) / 2, (BB.y + TB.y) / 2, yB())))
              }
              return oB = dB, void(gB = !0)
            }!gB && Math.hypot(BB.clientX - YB.x, BB.clientY - YB.y) < 4 || (gB || (gB = !0, dB.setPointerCapture(BB.pointerId)), pB((BB => function(BB, TB, dB) {
              let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gy;
              return Ay({
                zoom: BB.zoom,
                x: BB.x + TB,
                y: BB.y + dB
              }, VB)
            }(BB, VB.x - TB.x, VB.y - TB.y, yB()))))
          },
          DB = BB => {
            JB.delete(BB.pointerId), oB = 0
          },
          uB = BB => {
            gB && (BB.stopPropagation(), BB.preventDefault(), gB = !1)
          },
          HB = new ResizeObserver((() => {
            pB((BB => Ay(BB, yB())))
          }));
        return HB.observe(dB), dB.addEventListener("wheel", kB, {
          passive: !1
        }), dB.addEventListener("pointerdown", LB), dB.addEventListener("pointermove", OB), dB.addEventListener("pointerup", DB), dB.addEventListener("pointercancel", DB), dB.addEventListener("click", uB, !0), () => {
          HB.disconnect(), dB.removeEventListener("wheel", kB), dB.removeEventListener("pointerdown", LB), dB.removeEventListener("pointermove", OB), dB.removeEventListener("pointerup", DB), dB.removeEventListener("pointercancel", DB), dB.removeEventListener("click", uB, !0)
        }
      }), [BB, TB, dB, VB]);
      return {
        view: yB,
        zoomBy: TB => {
          const dB = BB.current;
          dB && pB((BB => by(BB, TB, .5, .5, xy(dB.clientWidth, dB.clientHeight, VB))))
        }
      }
    }

    function ey(BB) {
      var TB, dB, VB, yB;
      let {
        controller: pB,
        navigation: lB
      } = BB;
      const JB = (0, wy.f)(LB, pB.getSnapshot()),
        {
          t: YB
        } = (0, zy.z)(),
        gB = Zy(),
        oB = JB.presentation,
        kB = (0, MB.useRef)(null),
        OB = (0, MB.useRef)(null),
        DB = Boolean(JB.open && (null === oB || void 0 === oB ? void 0 : oB.local) && oB.background),
        uB = ny(kB, DB, `${JB.open}|${JB.tab}|${null===oB||void 0===oB||null===(TB=oB.background)||void 0===TB?void 0:TB.geometryKey}`, null !== (dB = null === oB || void 0 === oB || null === (VB = oB.background) || void 0 === VB ? void 0 : VB.ratio) && void 0 !== dB ? dB : 2);
      if (hy(OB, oB, JB.open, uB.view.zoom), !oB || !JB.open) return null;
      const HB = oB.local ? oB.background : null,
        EB = {
          "--map-ratio": String(null !== (yB = null === HB || void 0 === HB ? void 0 : HB.ratio) && void 0 !== yB ? yB : 2),
          backgroundColor: null === HB || void 0 === HB ? void 0 : HB.colour
        },
        vB = {
          "--map-zoom": String(uB.view.zoom),
          transform: `translate(${100*uB.view.x}%, ${100*uB.view.y}%) scale(${uB.view.zoom})`
        };
      return (0, Uy.jsx)(Qy.b, {
        show: JB.open,
        close: pB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: gB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockMapTitle",
                children: YB("skyblockGame:map")
              }), oB.minimap && (0, Uy.jsx)("p", {
                children: oB.minimap.caption
              })]
            }), (0, Uy.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((BB => (0, Uy.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": BB === JB.tab ? "true" : void 0,
                className: my()({
                  Selected: BB === JB.tab
                }),
                "aria-pressed": BB === JB.tab,
                onClick: () => {
                  pB.selectTab(BB)
                },
                children: YB("local" === BB ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, BB)))
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: pB.dismiss
            })]
          }), (0, Uy.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Uy.jsxs)("div", {
              ref: kB,
              className: my()("SkyblockMapCanvas", {
                Local: oB.local,
                Overview: !oB.local,
                Zoomed: uB.view.zoom > 1
              }),
              style: EB,
              children: [(0, Uy.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: DB ? vB : void 0,
                children: (0, Uy.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: OB,
                  children: [HB && (0, Uy.jsx)(Py, {
                    className: "SkyblockMapTerrain",
                    imageKey: HB.imageKey,
                    fallbackImageKey: HB.fallbackImageKey,
                    geometryKey: HB.geometryKey,
                    alt: HB.label
                  }), oB.local && (0, Uy.jsx)(Wy, {
                    mount: lB.display.mountMapSearchArea
                  }), !oB.local && (0, Uy.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: oB.connections.map((BB => (0, Uy.jsx)("line", {
                      className: my()({
                        Explored: BB.explored
                      }),
                      x1: BB.start[0],
                      y1: BB.start[1],
                      x2: BB.end[0],
                      y2: BB.end[1]
                    }, BB.id)))
                  }), oB.points.map((BB => {
                    const TB = !oB.local && BB.thumbnail ? cy[BB.thumbnail] : void 0;
                    return (0, Uy.jsxs)("div", {
                      className: my()("SkyblockMapNode", {
                        Current: BB.current
                      }),
                      style: {
                        left: `${BB.position[0]}%`,
                        top: `${BB.position[1]}%`
                      },
                      children: [(0, Uy.jsxs)(Ry.d, {
                        className: my()("SkyblockMapPin", {
                          Unknown: !BB.visited,
                          Current: BB.current
                        }),
                        disabled: JB.pending,
                        onClick: () => {
                          pB.travel(BB.travelKind, BB.travelId)
                        },
                        children: [TB && (0, Uy.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: TB,
                          alt: ""
                        }), !TB && (0, Uy.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Uy.jsx)(Ky, {
                            icon: BB.icon
                          })
                        }), (0, Uy.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: BB.name
                        })]
                      }), BB.current && (0, Uy.jsx)("span", {
                        className: my()("SkyblockMapHereBadge", {
                          Above: BB.position[1] > 50
                        }),
                        children: YB("skyblockGame:mapYouAreHere")
                      })]
                    }, BB.id)
                  })), oB.portals.map((BB => (0, Uy.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${BB.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${BB.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Uy.jsxs)(Ry.d, {
                      className: "SkyblockMapPin",
                      disabled: JB.pending,
                      onClick: () => {
                        pB.travel(BB.travelKind, BB.travelId)
                      },
                      children: [(0, Uy.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: BB.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Uy.jsx)(Ky, {
                          icon: BB.icon
                        })
                      }), (0, Uy.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: BB.name
                      })]
                    })
                  }, BB.id))), oB.local && (0, Uy.jsx)(ry, {
                    controller: lB
                  })]
                })
              }), DB && (0, Uy.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Uy.jsx)("button", {
                  type: "button",
                  "aria-label": YB("skyblockGame:mapZoomIn"),
                  disabled: uB.view.zoom >= 12,
                  onClick: () => {
                    uB.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Uy.jsx)("button", {
                  type: "button",
                  "aria-label": YB("skyblockGame:mapZoomOut"),
                  disabled: uB.view.zoom <= 1,
                  onClick: () => {
                    uB.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Uy.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: JB.feedback
              })]
            })
          }), (0, Uy.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [oB.progress && (0, Uy.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Uy.jsx)("span", {
                children: oB.progress
              }), (0, Uy.jsx)(Xy, {
                percent: oB.percent,
                label: oB.progress
              })]
            }), oB.noLandmarks && (0, Uy.jsx)("span", {
              children: YB("skyblockGame:mapNoLandmarks")
            }), oB.canTravel && (0, Uy.jsx)("span", {
              className: "SkyblockMapHint",
              children: YB("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Bp(BB) {
      let {
        view: TB,
        controller: dB,
        navigation: VB
      } = BB;
      const {
        t: yB
      } = (0, zy.z)(), {
        isTouchScreen: pB
      } = (0, iy.m)(["isTouchScreen"]);
      return (0, Uy.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": yB("skyblockGame:mapLocal"),
        children: [pB && (0, Uy.jsx)(Ry.d, {
          className: "SkyblockMinimapOpen",
          onClick: dB.showLocal,
          children: yB("skyblockGame:map")
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: TB.colour
          },
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: VB.display.mountTerrain,
            style: {
              width: TB.width,
              height: TB.height
            },
            children: [(0, Uy.jsx)(Py, {
              imageKey: TB.imageKey,
              fallbackImageKey: TB.fallbackImageKey,
              geometryKey: TB.geometryKey,
              alt: TB.label
            }), (0, Uy.jsx)(Wy, {
              mount: VB.display.mountMinimapSearchArea
            }), TB.markers.map((BB => (0, Uy.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${BB.position[0]}%`,
                top: `${BB.position[1]}%`,
                color: BB.colour
              },
              title: BB.name,
              children: (0, Uy.jsx)(Ky, {
                icon: BB.icon
              })
            }, BB.id)))]
          }), (0, Uy.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: yB("skyblockGame:mapYouAreHere"),
            children: (0, Uy.jsx)(Ky, {
              icon: "player"
            })
          })]
        }), (0, Uy.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: TB.caption
        })]
      })
    }

    function Tp(BB) {
      let {
        controller: TB
      } = BB;
      return (0, Uy.jsxs)("div", {
        className: "SkyblockCompass",
        ref: TB.display.mountCompass,
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Uy.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Uy.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function dp(BB) {
      let {
        controller: TB,
        surface: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)(), yB = (0, wy.f)(Vd, TB.getSnapshot()), pB = Zy();
      return yB.enabled ? (0, Uy.jsxs)(Uy.Fragment, {
        children: ["hud" === dB && (0, Uy.jsx)(Ny.e, {
          placement: "statBars",
          children: yB.hud && (0, Uy.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": yB.hud.colour
            },
            children: [(0, Uy.jsx)(Xy, {
              percent: yB.hud.skill.percent,
              label: yB.hud.skill.xp,
              levelUpToken: yB.hud.levelUpToken,
              colour: yB.hud.colour
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Uy.jsxs)("span", {
                children: [yB.hud.skill.label, " \xb7 ", yB.hud.skill.level]
              }), (0, Uy.jsx)("span", {
                children: yB.hud.gain
              })]
            })]
          })
        }), "hud" === dB && (0, Uy.jsx)(Ny.e, {
          children: yB.hud && (0, Uy.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Uy.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Uy.jsx)("strong", {
                children: yB.hud.skill.label
              }), (0, Uy.jsx)("span", {
                children: yB.hud.gain
              })]
            }), (0, Uy.jsx)(Xy, {
              percent: yB.hud.skill.percent,
              label: yB.hud.skill.xp,
              levelUpToken: yB.hud.levelUpToken,
              colour: yB.hud.colour
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Uy.jsx)("span", {
                children: yB.hud.skill.level
              }), (0, Uy.jsx)("span", {
                children: yB.hud.skill.xp
              })]
            })]
          })
        }), "menu" === dB && (0, Uy.jsx)(Qy.b, {
          show: yB.open,
          close: TB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Uy.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: pB,
            onKeyDown: ay,
            children: [(0, Uy.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Uy.jsxs)("div", {
                children: [(0, Uy.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: VB("skyblockGame:skills")
                }), (0, Uy.jsx)("p", {
                  children: VB("skyblockGame:skillsIntro")
                })]
              }), (0, Uy.jsx)(Ry.i, {
                padIgnore: !0,
                onClick: TB.dismiss
              })]
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Uy.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: yB.skills.map((BB => (0, Uy.jsxs)(Ry.d, {
                  className: my()("SkyblockSkillCard", {
                    Selected: BB.selected
                  }),
                  ariaPressed: BB.selected,
                  onClick: () => {
                    TB.select(BB.id)
                  },
                  children: [(0, Uy.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Uy.jsx)(fy.c, {
                      itemName: BB.icon,
                      amount: 0
                    })
                  }), (0, Uy.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Uy.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Uy.jsx)("strong", {
                        children: BB.label
                      }), (0, Uy.jsx)("span", {
                        children: BB.level
                      })]
                    }), (0, Uy.jsx)(Xy, {
                      percent: BB.percent,
                      label: `${BB.label}: ${BB.xp}`
                    }), (0, Uy.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: BB.xp
                    })]
                  })]
                }, BB.id)))
              }), yB.detail && (0, Uy.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Uy.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Uy.jsx)(fy.c, {
                    itemName: yB.detail.icon,
                    amount: 0
                  })
                }), (0, Uy.jsx)("h3", {
                  children: yB.detail.label
                }), (0, Uy.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: yB.detail.level
                }), (0, Uy.jsx)("p", {
                  children: yB.detail.description
                }), (0, Uy.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Uy.jsx)("strong", {
                    children: VB("skyblockGame:currentBenefit")
                  }), (0, Uy.jsx)("span", {
                    children: yB.detail.benefit
                  })]
                }), (0, Uy.jsx)(Xy, {
                  percent: yB.detail.percent,
                  label: yB.detail.xp
                }), (0, Uy.jsx)("p", {
                  children: yB.detail.xp
                }), (0, Uy.jsx)("h4", {
                  children: VB("skyblockGame:earnXp")
                }), (0, Uy.jsx)("ul", {
                  children: yB.detail.sources.map((BB => (0, Uy.jsx)("li", {
                    children: BB
                  }, BB)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Vp = dB(1249),
      yp = dB(4232),
      pp = dB(270);

    function lp(BB) {
      let {
        item: TB
      } = BB;
      return (0, Uy.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Uy.jsx)(fy.c, {
          itemName: TB,
          amount: 0
        })
      })
    }

    function Jp(BB) {
      let {
        name: TB,
        percent: dB,
        progress: VB
      } = BB;
      return (0, Uy.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Uy.jsx)(Xy, {
          percent: dB,
          label: `${(0,pp.sb)(TB)}: ${VB}`
        }), (0, Uy.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: VB
        })]
      })
    }

    function Yp(BB) {
      let {
        subquests: TB,
        showDescriptions: dB = !1
      } = BB;
      return (0, Uy.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: TB.map((BB => {
          const TB = dB && "completed" === BB.status,
            VB = (0, Uy.jsxs)("li", {
              className: my()("SkyblockQuestStep", BB.status, {
                JustFinished: BB.justFinished,
                JustUnlocked: BB.justUnlocked
              }),
              tabIndex: TB ? 0 : void 0,
              children: [null !== BB.iconItem && (0, Uy.jsx)(lp, {
                item: BB.iconItem
              }), null === BB.iconItem && (0, Uy.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === BB.status ? "\u2713" : "skipped" === BB.status ? "\u2212" : "\u25cb"
              }), (0, Uy.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Uy.jsx)("strong", {
                  children: (0, Uy.jsx)(yp.d, {
                    text: BB.name
                  })
                }), dB && !TB && (0, Uy.jsx)("span", {
                  children: (0, Uy.jsx)(yp.d, {
                    text: BB.description
                  })
                }), null !== BB.barPercent && (0, Uy.jsx)(Jp, {
                  name: BB.name,
                  percent: BB.barPercent,
                  progress: BB.progress
                }), null === BB.barPercent && !TB && (0, Uy.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: BB.statusLabel
                })]
              })]
            }, BB.id);
          return TB ? (0, Uy.jsx)(Vp.h, {
            delayShow: 200,
            tooltipInner: (0, Uy.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Uy.jsx)("span", {
                children: (0, Uy.jsx)(yp.d, {
                  text: BB.description
                })
              }), (0, Uy.jsx)("strong", {
                children: BB.statusLabel
              })]
            }),
            children: VB
          }, BB.id) : VB
        }))
      })
    }

    function gp(BB) {
      let {
        quest: TB,
        select: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)(), yB = TB.focusStep;
      return (0, Uy.jsxs)(Ry.d, {
        className: my()("SkyblockQuestCard", {
          Selected: TB.selected,
          Tracked: TB.tracked
        }),
        onClick: () => {
          dB(TB.id)
        },
        children: [(0, Uy.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Uy.jsx)("strong", {
            children: (0, Uy.jsx)(yp.d, {
              text: TB.name
            })
          }), TB.tracked && (0, Uy.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: VB("skyblockGame:currentQuest")
          })]
        }), yB && (0, Uy.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== yB.iconItem && (0, Uy.jsx)(lp, {
            item: yB.iconItem
          }), (0, Uy.jsx)(Jp, {
            name: yB.name,
            percent: yB.barPercent,
            progress: yB.progress
          })]
        }), (0, Uy.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: TB.progress
        })]
      })
    }

    function op(BB) {
      let {
        controller: TB,
        surface: dB
      } = BB;
      const VB = (0, wy.f)(Jd, TB.getSnapshot()),
        {
          t: yB
        } = (0, zy.z)(),
        pB = Zy();
      return VB.enabled ? (0, Uy.jsxs)(Uy.Fragment, {
        children: ["hud" === dB && (0, Uy.jsx)(Uy.Fragment, {
          children: VB.tracked && (0, Uy.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: ld,
            children: (0, Uy.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [VB.trackedStepPulse > 0 && (0, Uy.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, VB.trackedStepPulse), (0, Uy.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: yB("skyblockGame:currentQuest")
              }), (0, Uy.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Uy.jsx)("strong", {
                  children: (0, Uy.jsx)(yp.d, {
                    text: VB.tracked.name
                  })
                }), null !== VB.tracked.clock && (0, Uy.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: VB.tracked.clock
                })]
              }), (0, Uy.jsx)(Yp, {
                subquests: VB.tracked.subquests
              })]
            })
          })
        }), "menu" === dB && (0, Uy.jsx)(Qy.b, {
          show: VB.open,
          close: TB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Uy.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: pB,
            onKeyDown: ay,
            children: [(0, Uy.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Uy.jsx)("div", {
                children: (0, Uy.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: yB("skyblockGame:quests")
                })
              }), (0, Uy.jsx)(Ry.i, {
                padIgnore: !0,
                onClick: TB.dismiss
              })]
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Uy.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Uy.jsx)("h3", {
                  children: yB("skyblockGame:current")
                }), 0 === VB.active.length && (0, Uy.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: yB("skyblockGame:noActiveQuests")
                }), VB.active.map((BB => (0, Uy.jsx)(gp, {
                  quest: BB,
                  select: TB.select
                }, BB.id))), (0, Uy.jsx)("h3", {
                  children: (0, Uy.jsxs)("button", {
                    type: "button",
                    className: my()("SkyblockQuestSectionToggle", {
                      Expanded: VB.completedExpanded
                    }),
                    "aria-expanded": VB.completedExpanded,
                    onClick: TB.toggleCompleted,
                    children: [(0, Uy.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), yB("skyblockGame:completed"), (0, Uy.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: VB.completed.length
                    })]
                  })
                }), VB.completedExpanded && 0 === VB.completed.length && (0, Uy.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: yB("skyblockGame:noCompletedQuests")
                }), VB.completedExpanded && VB.completed.map((BB => (0, Uy.jsx)(gp, {
                  quest: BB,
                  select: TB.select
                }, BB.id)))]
              }), VB.detail && (0, Uy.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [VB.detail.completed && (0, Uy.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: yB("skyblockGame:completedQuest")
                }), (0, Uy.jsx)("h3", {
                  children: (0, Uy.jsx)(yp.d, {
                    text: VB.detail.name
                  })
                }), (0, Uy.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Uy.jsx)(yp.d, {
                    text: VB.detail.description
                  })
                }), (0, Uy.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [VB.detail.progress, null !== VB.detail.clock && (0, Uy.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: VB.detail.clock
                  })]
                }), (0, Uy.jsx)(Yp, {
                  subquests: VB.detail.subquests,
                  showDescriptions: !0
                }), VB.detail.tracked && (0, Uy.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: VB.detail.trackLabel
                }), !VB.detail.completed && !VB.detail.tracked && (0, Uy.jsx)(Ry.k, {
                  onClick: TB.trackSelected,
                  disabled: !VB.detail.canTrack,
                  children: VB.detail.trackLabel
                }), VB.detail.canViewDialogue && (0, Uy.jsx)(Ry.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: TB.viewDialogue,
                  children: yB("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var kp = dB(946),
      Lp = dB(2237);

    function Op(BB, TB, dB, VB, yB) {
      const pB = BB => "linear" === yB ? BB : {
          Xy: yB,
          point: BB
        },
        lB = {};
      for (const [JB, YB] of VB)
        for (const [TB, dB] of Object.entries(BB(JB, YB, pB))) lB[TB] ??= {
          timeline: []
        }, lB[TB].timeline.push(dB);
      return {
        Sy: TB,
        loop: dB,
        Qy: lB
      }
    }
    const Dp = .547,
      Hp = .022,
      Ep = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      vp = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function mp(BB, TB, dB) {
      const {
        drop: VB = 0,
        shift: yB = 0,
        torso: pB = 0,
        nod: lB = 0,
        tilt: JB = 0,
        legs: YB = [0, 0],
        arms: gB = 0,
        spread: oB = 0
      } = TB, kB = Dp * Math.cos(pB) - Hp * Math.sin(pB), LB = Dp * Math.sin(pB) + Hp * Math.cos(pB), OB = dB([0, -VB, yB]);
      return {
        LowerBody: {
          timeFraction: BB,
          position: OB,
          rotation: dB([0, 0, 0])
        },
        UpperBody: {
          timeFraction: BB,
          position: OB,
          rotation: dB([pB, 0, JB])
        },
        HeadMesh: {
          timeFraction: BB,
          position: dB([0, kB - Dp - VB, LB - Hp + yB]),
          rotation: dB([pB + lB, 0, JB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          rotation: dB([YB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          rotation: dB([YB[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: dB([gB, 0, oB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: dB([gB, 0, -oB])
        }
      }
    }

    function ip(BB, TB, dB) {
      return Op(mp, BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Np(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function tp(BB, TB, dB) {
      const {
        rise: VB = 0,
        shift: yB = 0,
        torso: pB = 0,
        twist: lB = 0,
        tilt: JB = 0,
        nod: YB = 0,
        cock: gB = 0,
        arms: oB = 0,
        spread: kB = 0
      } = TB, [LB, OB] = Np(oB), [DB, uB] = Np(kB);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: dB([0, VB, yB]),
          rotation: dB([pB, lB, JB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: dB([YB, 0, gB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: dB([LB, 0, DB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: dB([OB, 0, -uB])
        }
      }
    }
    const fp = [1.0625, -1, 0];

    function sp(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function Mp(BB, TB, dB) {
      const {
        drop: VB = 0,
        shift: yB = 0,
        torso: pB = 0,
        tilt: lB = 0,
        nod: JB = 0,
        cock: YB = 0,
        legs: gB = [0, 0],
        arms: oB = 0,
        spread: kB = 0
      } = TB, [LB, OB] = sp(oB), [DB, uB] = sp(kB), HB = -pB, EB = -lB, [vB, mB, iB] = function(BB, TB) {
        const [dB, VB, yB] = [-fp[0], fp[1], -fp[2]], pB = dB * Math.cos(TB) - VB * Math.sin(TB), lB = dB * Math.sin(TB) + VB * Math.cos(TB);
        return [pB - dB, -(lB * Math.cos(BB) - yB * Math.sin(BB) - VB), lB * Math.sin(BB) + yB * Math.cos(BB) - yB]
      }(HB, EB), NB = dB([0, -VB, yB]);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: dB([vB, mB - VB, iB + yB]),
          rotation: dB([HB, 0, EB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: dB([-JB, 0, -YB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: dB([-LB, 0, -DB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: dB([-OB, 0, uB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          position: NB,
          rotation: dB([-gB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          position: NB,
          rotation: dB([-gB[1], 0, 0])
        }
      }
    }
    var zp = dB(36496),
      wp = dB(37420),
      Up = dB(37598);

    function Fp(BB, TB, dB) {
      var VB, yB;
      const pB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return BB + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - BB) * dB
        },
        [lB, JB] = null !== (VB = BB.legs) && void 0 !== VB ? VB : [0, 0],
        [YB, gB] = null !== (yB = TB.legs) && void 0 !== yB ? yB : [0, 0];
      return {
        drop: pB(BB.drop, TB.drop),
        shift: pB(BB.shift, TB.shift),
        torso: pB(BB.torso, TB.torso),
        nod: pB(BB.nod, TB.nod),
        tilt: pB(BB.tilt, TB.tilt),
        legs: [pB(lB, YB), pB(JB, gB)],
        arms: pB(BB.arms, TB.arms),
        spread: pB(BB.spread, TB.spread)
      }
    }
    const Kp = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      rp = ip(4400, !0, [
        [0, Kp],
        [.16, {
          ...Kp,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Kp],
        [.44, {
          ...Kp,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Fp(Kp, Ep, .7)],
        [.66, Fp(Kp, Ep, .78)],
        [.74, Fp(Kp, vp, .65)],
        [.86, {
          ...Kp,
          drop: .14
        }],
        [1, Kp]
      ], "catmull-rom-spline"),
      Ip = {
        ...Kp,
        drop: .14,
        torso: .3,
        spread: .4
      },
      cp = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Sp = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Pp = {
        caveGolem: rp,
        magmaGolem: ip(3600, !0, [
          [0, Ip],
          [.12, {
            ...Ip,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ip,
            tilt: -.08
          }],
          [.4, {
            ...Ip,
            tilt: .06,
            drop: .11
          }],
          [.52, Fp(Ip, Ep, .9)],
          [.62, Fp(Ip, vp, .8)],
          [.7, Fp(Ip, vp, .45)],
          [.78, Fp(Ip, vp, .85)],
          [.9, {
            ...Ip,
            drop: .17
          }],
          [1, Ip]
        ], "catmull-rom-spline"),
        frostWraith: function(BB, TB, dB) {
          return Op(tp, BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, cp],
          [.14, {
            ...cp,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...cp,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...cp,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...cp,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...cp,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...cp,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...cp,
            rise: .16,
            tilt: -.04
          }],
          [1, cp]
        ], "catmull-rom-spline"),
        tikiTerror: function(BB, TB, dB) {
          return Op(Mp, BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Sp],
          [.16, {
            ...Sp,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Sp],
          [.44, {
            ...Sp,
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
            ...Sp,
            drop: .1
          }],
          [1, Sp]
        ], "catmull-rom-spline")
      },
      Qp = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Rp = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      ap = Object.fromEntries(Object.entries(Pp).map((BB => {
        let [TB, dB] = BB;
        return [TB, (0, Up.b)((0, zp.h)(dB), TB)]
      })));

    function Zp(BB) {
      const TB = function(BB) {
        var TB;
        const dB = (0, wp.d)(BB).poseRig;
        return null !== (TB = Rp[BB]) && void 0 !== TB ? TB : void 0 === dB ? null : Qp[dB]
      }(BB);
      return null === TB ? null : ap[TB]
    }

    function Xp(BB) {
      return {
        "--difficulty-colour": BB
      }
    }
    const Wp = (0, MB.lazy)((() => (0, Lp.e)(dB.e(204).then((() => dB(40261))), (BB => BB.MobPreview))));

    function hp(BB) {
      var TB, dB, VB;
      let {
        picker: yB,
        controller: pB
      } = BB;
      const {
        t: lB
      } = (0, zy.z)(), JB = Zy(), {
        page: YB
      } = yB;
      return (0, Uy.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: JB,
        onKeyDown: BB => {
          "ArrowLeft" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), pB.previous()) : "ArrowRight" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), pB.next()) : ay(BB)
        },
        style: Xp(YB.colour),
        children: [(0, Uy.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Uy.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: yB.dungeonName
          }), (0, Uy.jsx)(Ry.i, {
            padIgnore: !0,
            onClick: pB.dismiss
          })]
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Uy.jsx)(Ry.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !yB.canPrevious,
              onClick: pB.previous,
              children: (0, Uy.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Uy.jsx)(kp.e, {
                  name: "angle-up"
                })
              })
            }), (0, Uy.jsxs)("div", {
              className: my()("SkyblockBossPickerBoss", {
                Locked: !YB.unlocked
              }),
              children: [null !== YB.bossMobType && (0, Uy.jsx)(MB.Suspense, {
                fallback: (0, Uy.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Uy.jsx)(Wp, {
                  className: "SkyblockBossPickerModel",
                  mobType: YB.bossMobType,
                  variation: YB.bossMobVariation,
                  animation: null !== (TB = Zp(YB.bossMobType)) && void 0 !== TB ? TB : void 0
                })
              }), null === YB.bossMobType && (0, Uy.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Uy.jsx)(Ry.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !yB.canNext,
              onClick: pB.next,
              children: (0, Uy.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Uy.jsx)(kp.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Uy.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [YB.beaten && (0, Uy.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), YB.label]
            }), (0, Uy.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (dB = YB.bossName) && void 0 !== dB ? dB : "???"
            }), (0, Uy.jsxs)("span", {
              className: my()("SkyblockBossPickerRecord", {
                Locked: null !== YB.lockedHint
              }),
              children: [null !== YB.lockedHintHighlight && (0, Uy.jsxs)(Uy.Fragment, {
                children: [YB.lockedHintHighlight.before, (0, Uy.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Xp(YB.lockedHintHighlight.colour),
                  children: [null !== YB.lockedHintHighlight.icon && (0, Uy.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Uy.jsx)(fy.c, {
                      itemName: YB.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), YB.lockedHintHighlight.name]
                }), YB.lockedHintHighlight.after]
              }), null === YB.lockedHintHighlight && (null !== (VB = YB.lockedHint) && void 0 !== VB ? VB : YB.summary)]
            })]
          }), (0, Uy.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: yB.pages.map((BB => (0, Uy.jsx)("span", {
              className: my()("SkyblockBossPickerDot", {
                Current: BB.current,
                Locked: !BB.unlocked
              }),
              style: Xp(BB.colour)
            }, BB.difficulty)))
          }), (0, Uy.jsx)(Ry.r, {
            className: "SkyblockBossPickerFight",
            disabled: !YB.unlocked,
            onClick: pB.enter,
            children: lB("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Cp(BB) {
      let {
        dungeon: TB,
        select: dB
      } = BB;
      return (0, Uy.jsxs)(Ry.d, {
        className: my()("SkyblockDungeonCard", {
          Selected: TB.selected
        }),
        onClick: () => {
          dB(TB.id)
        },
        children: [(0, Uy.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Uy.jsx)("strong", {
            children: TB.name
          }), (0, Uy.jsx)("span", {
            children: TB.beatenSummary
          })]
        }), (0, Uy.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: TB.difficulties.map((BB => (0, Uy.jsxs)("span", {
            className: my()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: BB.beaten
            }),
            style: Xp(BB.colour),
            title: BB.summary,
            children: [BB.beaten && (0, Uy.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), BB.label]
          }, BB.difficulty)))
        })]
      })
    }

    function Gp(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(kd, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy();
      return dB.enabled ? (0, Uy.jsxs)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [dB.picker && (0, Uy.jsx)(hp, {
          picker: dB.picker,
          controller: TB
        }), !dB.picker && (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: VB("skyblockGame:dungeons")
              }), (0, Uy.jsx)("p", {
                children: VB("skyblockGame:dungeonsIntro")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: TB.dismiss
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Uy.jsx)("div", {
              className: "SkyblockDungeonList",
              children: dB.dungeons.map((BB => (0, Uy.jsx)(Cp, {
                dungeon: BB,
                select: TB.select
              }, BB.id)))
            }), dB.detail && (0, Uy.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Uy.jsx)("h3", {
                children: dB.detail.name
              }), (0, Uy.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: dB.detail.difficulties.map((BB => (0, Uy.jsxs)("li", {
                  className: my()("SkyblockDungeonRecord", {
                    Beaten: BB.beaten
                  }),
                  children: [(0, Uy.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Xp(BB.colour),
                    children: [BB.beaten && (0, Uy.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), BB.label]
                  }), (0, Uy.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: BB.summary
                  })]
                }, BB.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function qp(BB) {
      let {
        collection: TB,
        select: dB
      } = BB;
      return (0, Uy.jsxs)(Ry.d, {
        className: my()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: TB.selected,
          Locked: TB.locked
        }),
        ariaPressed: TB.selected,
        onClick: () => {
          dB(TB.id)
        },
        children: [(0, Uy.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Uy.jsx)(fy.c, {
            itemName: TB.icon,
            amount: 0
          })
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Uy.jsx)("strong", {
              children: TB.name
            }), (0, Uy.jsx)("span", {
              children: TB.tier
            })]
          }), (0, Uy.jsx)(Xy, {
            percent: TB.percent,
            label: `${TB.name}: ${TB.progress}`
          }), (0, Uy.jsx)("span", {
            className: "SkyblockSkillXp",
            children: TB.progress
          })]
        })]
      })
    }

    function xp(BB) {
      let {
        collection: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Uy.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Uy.jsx)(fy.c, {
            itemName: TB.icon,
            amount: 0
          })
        }), (0, Uy.jsx)("h3", {
          children: TB.name
        }), (0, Uy.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: TB.tier
        }), (0, Uy.jsx)("p", {
          children: TB.locked ? dB("skyblockGame:collectionLocked") : TB.count
        }), null !== TB.nextReward && (0, Uy.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Uy.jsx)("strong", {
            children: dB("skyblockGame:collectionNextReward")
          }), (0, Uy.jsx)("span", {
            children: TB.nextReward
          })]
        }), (0, Uy.jsx)(Xy, {
          percent: TB.percent,
          label: TB.progress
        }), (0, Uy.jsx)("p", {
          children: TB.progress
        })]
      })
    }

    function jp(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(cd, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy();
      return dB.enabled ? (0, Uy.jsx)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: VB("skyblockGame:collections")
              }), (0, Uy.jsxs)("p", {
                children: [VB("skyblockGame:collectionsIntro"), " ", dB.tiersUnlocked]
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: TB.dismiss
            })]
          }), (0, Uy.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: dB.categories.map((BB => (0, Uy.jsxs)(Ry.d, {
              className: my()("SkyblockCollectionCategory", {
                Selected: BB.selected
              }),
              ariaPressed: BB.selected,
              padTabSelected: BB.selected,
              onClick: () => {
                TB.selectCategory(BB.id)
              },
              children: [(0, Uy.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Uy.jsx)(fy.c, {
                  itemName: BB.icon,
                  amount: 0
                })
              }), (0, Uy.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Uy.jsx)("strong", {
                  children: BB.label
                }), (0, Uy.jsx)("span", {
                  children: BB.tiers
                })]
              })]
            }, BB.id)))
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Uy.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: dB.collections.map((BB => (0, Uy.jsx)(qp, {
                collection: BB,
                select: TB.select
              }, BB.id)))
            }), dB.detail && (0, Uy.jsx)(xp, {
              collection: dB.detail
            })]
          })]
        })
      }) : null
    }
    const Ap = ["completed", "active", "available", "locked"],
      bp = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function np(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(qd, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy();
      return dB.enabled ? (0, Uy.jsx)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: VB("skyblockDevQuests:title")
              }), (0, Uy.jsx)("p", {
                children: VB("skyblockDevQuests:intro")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              onClick: TB.dismiss
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Ap.map((BB => (0, Uy.jsx)("span", {
              className: my()("SkyblockQuestGraphLegendState", BB),
              children: VB(`skyblockDevQuests:state_${BB}`)
            }, BB))), bp.map((BB => (0, Uy.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Uy.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Uy.jsx)("line", {
                  className: my()("SkyblockQuestGraphEdge", BB),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), VB(`skyblockDevQuests:edge_${BB}`)]
            }, BB)))]
          }), (0, Uy.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Uy.jsxs)("div", {
              className: my()("SkyblockQuestGraphCanvas", {
                Planning: dB.planning
              }),
              style: {
                width: dB.width,
                height: dB.height
              },
              children: [(0, Uy.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: dB.width,
                height: dB.height,
                "aria-hidden": "true",
                children: [(0, Uy.jsx)("defs", {
                  children: (0, Uy.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Uy.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), dB.edges.map((BB => (0, Uy.jsx)("path", {
                  className: my()("SkyblockQuestGraphEdge", BB.kind, {
                    InPlan: BB.inPlan
                  }),
                  d: BB.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, BB.key)))]
              }), dB.nodes.map((BB => (0, Uy.jsxs)("button", {
                type: "button",
                className: my()("SkyblockQuestGraphNode", BB.state, {
                  InPlan: BB.inPlan,
                  Hovered: BB.hovered
                }),
                style: {
                  left: BB.left,
                  top: BB.top,
                  width: 190,
                  height: 52
                },
                title: BB.id,
                onMouseEnter: () => {
                  TB.hover(BB.id)
                },
                onMouseLeave: () => {
                  TB.hover(null)
                },
                onFocus: () => {
                  TB.hover(BB.id)
                },
                onBlur: () => {
                  TB.hover(null)
                },
                onClick: () => {
                  TB.jump(BB.id)
                },
                children: [(0, Uy.jsx)("strong", {
                  children: BB.name
                }), (0, Uy.jsx)("span", {
                  children: BB.detail
                })]
              }, BB.id)))]
            })
          })]
        })
      }) : null
    }
    const ep = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Bl = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${lV}ms`,
        "--forge-duration": "2150ms"
      },
      Tl = Array.from({
        length: 18
      }, ((BB, TB) => ({
        "--ember-left": `${(4+92*(.618034*TB%1)).toFixed(1)}%`,
        "--ember-size": 3 + TB % 3 * 2 + "px",
        "--ember-drift": 14 * (TB % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*TB%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*TB%8).toFixed(2)}s`
      })));

    function dl(BB) {
      if (BB.style.removeProperty("--part-size"), null === BB.parentElement || "wrap" === getComputedStyle(BB.parentElement).flexWrap) return;
      const TB = [...BB.children],
        dB = getComputedStyle(BB),
        VB = parseFloat(dB.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        yB = (BB.clientHeight - parseFloat(dB.rowGap) * (TB.length - 1)) / TB.length,
        pB = TB.map((BB => {
          const TB = getComputedStyle(BB),
            dB = BB.querySelector("h3"),
            pB = BB.querySelector(".SkyblockForgeParts");
          if (null === dB || null === pB) return VB;
          const lB = yB - parseFloat(TB.paddingTop) - parseFloat(TB.paddingBottom) - dB.offsetHeight - parseFloat(getComputedStyle(dB).marginBottom),
            JB = parseFloat(getComputedStyle(pB).columnGap),
            YB = pB.children.length;
          let gB = 0;
          for (let VB = 1; VB <= YB; VB++) {
            const BB = Math.ceil(YB / VB);
            gB = Math.max(gB, Math.min((pB.clientWidth - JB * (VB - 1)) / VB, (lB - JB * (BB - 1)) / BB))
          }
          return gB
        }));
      BB.style.setProperty("--part-size", `${Math.floor(Math.max(VB,Math.min(...pB)))}px`)
    }

    function Vl(BB) {
      var TB, dB, VB, pB, lB;
      let {
        controller: JB
      } = BB;
      const YB = (0, wy.f)(OV, JB.getSnapshot()),
        {
          t: gB
        } = (0, zy.z)(),
        oB = Zy(),
        kB = function() {
          const BB = (0, MB.useRef)(null),
            TB = (0, MB.useRef)(null);
          return (0, MB.useLayoutEffect)((() => {
            null !== BB.current && dl(BB.current)
          })), (0, MB.useCallback)((dB => {
            var VB;
            null === (VB = TB.current) || void 0 === VB || VB.disconnect(), TB.current = null, BB.current = dB, null !== dB && (TB.current = new ResizeObserver((() => {
              dl(dB)
            })), TB.current.observe(dB))
          }), [])
        }(),
        LB = function(BB) {
          const TB = (0, MB.useRef)(null);
          return (0, MB.useLayoutEffect)((() => {
            const BB = TB.current;
            if (null !== BB) {
              BB.style.removeProperty("font-size");
              for (let TB = 1.7; TB > 1.1 && BB.scrollWidth > BB.clientWidth; TB -= .1) BB.style.fontSize = TB - .1 + "rem"
            }
          }), [BB]), (0, MB.useCallback)((BB => {
            TB.current = BB
          }), [])
        }(null === (TB = YB.preview) || void 0 === TB ? void 0 : TB.name),
        OB = (0, MB.useRef)(null),
        DB = (0, MB.useRef)({}),
        uB = YB.forging,
        HB = null !== (dB = null === uB || void 0 === uB ? void 0 : uB.preview.tier) && void 0 !== dB ? dB : 0,
        EB = null !== (VB = null === uB || void 0 === uB ? void 0 : uB.preview.named) && void 0 !== VB && VB,
        vB = (0, MB.useMemo)((() => {
          return null === uB ? null : {
            flames: (BB = HB, TB = EB, Array.from({
              length: 26 + 6 * BB + (TB ? 20 : 0)
            }, ((BB, TB) => {
              const dB = TB < 6,
                VB = Math.random() * Math.PI * 2,
                yB = dB ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                pB = Math.cos(VB) * yB,
                lB = Math.sin(VB) * yB - 2 - 3 * Math.random(),
                JB = Math.random(),
                [YB, gB, oB] = dB ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : JB < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : JB < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [JB < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": YB,
                "--x0": `${(.15*pB).toFixed(2)}rem`,
                "--y0": `${(.15*lB).toFixed(2)}rem`,
                "--x": `${pB.toFixed(2)}rem`,
                "--y": `${lB.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${gB.toFixed(2)}rem`,
                "--duration": `${Math.round(oB)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: gV(HB, EB)
          };
          var BB, TB
        }), [null === uB || void 0 === uB ? void 0 : uB.id]);
      if (!YB.enabled) return null;
      const mB = YB.preview,
        iB = YB.arriving,
        NB = null !== iB && !iB.sameSword,
        tB = null !== mB && (0, Uy.jsx)(fy.c, {
          itemName: mB.baseSword,
          amount: 0,
          enchantmentTier: mB.enchantmentTier
        });
      return (0, Uy.jsx)(Qy.b, {
        show: YB.open,
        close: JB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: oB,
          onKeyDown: ay,
          children: [(0, Uy.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Tl.map(((BB, TB) => (0, Uy.jsx)("span", {
              style: BB
            }, TB)))
          }), (0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: gB("skyblockGame:forgeTitle")
              }), (0, Uy.jsx)("p", {
                children: gB("skyblockGame:forgeIntro")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              onClick: JB.dismiss
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Uy.jsx)("div", {
              ref: kB,
              className: my()("SkyblockForgeSlots", {
                Locked: null !== uB
              }),
              children: YB.slots.map((BB => (0, Uy.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Uy.jsx)("h3", {
                  children: BB.label
                }), (0, Uy.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: BB.parts.map((TB => (0, Uy.jsx)("button", {
                    type: "button",
                    className: my()("SkyblockForgePart", {
                      Selected: TB.selected,
                      Missing: TB.placeholder
                    }),
                    disabled: TB.placeholder,
                    title: TB.placeholder ? gB("skyblockGame:forgePickParts") : TB.itemName,
                    "aria-pressed": TB.selected,
                    onClick: () => {
                      JB.select(BB.kind, TB.material)
                    },
                    children: (0, Uy.jsx)(fy.c, {
                      itemName: TB.itemName,
                      amount: TB.owned
                    })
                  }, TB.material)))
                })]
              }, BB.kind)))
            }), (0, Uy.jsxs)("div", {
              className: my()("SkyblockForgeAnvil", {
                Named: null === mB || void 0 === mB ? void 0 : mB.named
              }),
              style: {
                "--tier": null === mB ? "transparent" : yB.lb[mB.enchantmentTier]
              },
              children: [(0, Uy.jsxs)("div", {
                className: my()("SkyblockForgeAltar", {
                  Forging: null !== uB
                }),
                style: null === uB ? void 0 : Bl,
                children: [(0, Uy.jsxs)("div", {
                  className: my()("SkyblockForgeMount", {
                    Arrive: null !== iB
                  }),
                  children: [null === mB && (0, Uy.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Uy.jsx)(fy.c, {
                      itemName: YB.unformedSword,
                      amount: 0
                    })
                  }), null !== mB && (0, Uy.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== mB && null === uB && (0, Uy.jsx)("div", {
                    ref: OB,
                    className: "SkyblockForgeFloat",
                    children: (0, Uy.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: tB
                    })
                  }), null !== mB && (0, Uy.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: YV.map(((BB, TB) => (0, Uy.jsx)("span", {
                      className: my()({
                        Rune: "" !== BB.rune
                      }),
                      style: BB.style,
                      children: BB.rune
                    }, TB)))
                  }), null !== uB && null !== vB && (0, Uy.jsxs)(Uy.Fragment, {
                    children: [(0, Uy.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Uy.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: vB.flames.map(((BB, TB) => (0, Uy.jsx)("span", {
                        style: BB
                      }, TB)))
                    }), (0, Uy.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: DB.current,
                      children: (0, Uy.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: tB
                      })
                    }), (0, Uy.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Uy.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (HB >= 4 || EB) && (0, Uy.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Uy.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: vB.sparks.map(((BB, TB) => (0, Uy.jsx)("span", {
                        style: BB
                      }, TB)))
                    }), (0, Uy.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Uy.jsx)("p", {
                  className: my()("SkyblockForgeStatus", null === (pB = YB.status) || void 0 === pB ? void 0 : pB.tone),
                  children: null === (lB = YB.status) || void 0 === lB ? void 0 : lB.text
                })]
              }), null === mB && (0, Uy.jsx)("p", {
                className: my()("SkyblockForgeName Waiting", {
                  ArriveText: NB
                }),
                children: gB(YB.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== mB && (0, Uy.jsx)("h3", {
                ref: LB,
                className: my()("SkyblockForgeName", {
                  ArriveText: NB
                }),
                title: mB.name,
                children: mB.name
              }), (null === mB || void 0 === mB ? void 0 : mB.named) && (0, Uy.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: gB("skyblockGame:forgeSecret")
              }), (0, Uy.jsxs)(Ry.r, {
                className: "SkyblockForgeButton",
                disabled: !YB.canForge,
                title: null === mB ? void 0 : gB("skyblockGame:forgeCoalOwned", {
                  owned: String(YB.coalOwned)
                }),
                onClick: () => {
                  DB.current = function(BB) {
                    const TB = null === BB ? "none" : getComputedStyle(BB).transform,
                      dB = new DOMMatrixReadOnly("none" === TB ? void 0 : TB);
                    return {
                      "--settle-y": `${dB.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(dB.b,dB.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(OB.current), LV(), JB.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [gB("skyblockGame:forgeButton"), null !== mB && (0, Uy.jsxs)("span", {
                  className: my()("SkyblockForgeCost", {
                    Short: mB.coalShort
                  }),
                  children: [(0, Uy.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Uy.jsx)(fy.c, {
                      itemName: nd.d,
                      amount: 0
                    })
                  }), mB.coalCost]
                })]
              })]
            }), (0, Uy.jsxs)("div", {
              className: my()("SkyblockForgeDetails", {
                Named: null === mB || void 0 === mB ? void 0 : mB.named
              }),
              children: [(0, Uy.jsx)("p", {
                className: my()("SkyblockForgeLore", {
                  ArriveText: NB
                }),
                title: null === mB || void 0 === mB ? void 0 : mB.lore,
                children: null === mB || void 0 === mB ? void 0 : mB.lore
              }), (0, Uy.jsxs)("dl", {
                className: my()("SkyblockForgeStats", {
                  ArriveText: NB
                }),
                children: [null === mB && ep.map((BB => (0, Uy.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Uy.jsx)("dt", {
                    children: gB(BB)
                  }), (0, Uy.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, BB))), null === mB || void 0 === mB ? void 0 : mB.stats.map((BB => (0, Uy.jsxs)("div", {
                  className: my()("SkyblockForgeStat", {
                    Better: BB.better
                  }),
                  children: [(0, Uy.jsx)("dt", {
                    children: BB.label
                  }), (0, Uy.jsx)("dd", {
                    children: BB.value
                  })]
                }, BB.label)))]
              }), (0, Uy.jsx)("ul", {
                className: my()("SkyblockForgeEffects", {
                  ArriveText: NB
                }),
                children: null === mB || void 0 === mB ? void 0 : mB.effects.map((BB => (0, Uy.jsx)("li", {
                  children: BB
                }, BB)))
              })]
            })]
          })]
        })
      })
    }
    const yl = "Doom Rivet",
      pl = "Doom Crest";

    function ll(BB) {
      let {
        itemName: TB,
        amount: dB,
        owned: VB
      } = BB;
      return (0, Uy.jsxs)("span", {
        className: my()("SkyblockSmugglerPrice", {
          Short: dB > VB
        }),
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Uy.jsx)(fy.c, {
            itemName: TB,
            amount: 0
          })
        }), (0, Uy.jsx)("span", {
          children: dB
        })]
      })
    }

    function Jl(BB) {
      return BB.justBought ? "skyblockGame:smugglerJustBought" : BB.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Yl(BB) {
      let {
        deal: TB,
        view: dB,
        buy: VB
      } = BB;
      const {
        t: yB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("div", {
        className: my()("SkyblockSmugglerPocket", {
          Bought: TB.justBought,
          Unaffordable: !TB.affordable,
          SoldOut: TB.soldOut && !TB.justBought
        }),
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Uy.jsx)(fy.c, {
            itemName: TB.itemName,
            amount: 0,
            enchantmentTier: TB.enchantmentTier
          }), TB.amount > 1 && (0, Uy.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: yB("skyblockGame:smugglerAmount", {
              amount: TB.amount
            })
          })]
        }), (0, Uy.jsx)("h3", {
          children: TB.displayName
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [TB.rivets > 0 && (0, Uy.jsx)(ll, {
              itemName: yl,
              amount: TB.rivets,
              owned: dB.rivetsOwned
            }), TB.crests > 0 && (0, Uy.jsx)(ll, {
              itemName: pl,
              amount: TB.crests,
              owned: dB.crestsOwned
            })]
          }), (0, Uy.jsx)(Ry.d, {
            className: "SkyblockSmugglerBuy",
            disabled: TB.soldOut || !TB.affordable || dB.pending,
            onClick: () => {
              VB(TB.slot)
            },
            children: yB(Jl(TB))
          })]
        })]
      }, TB.justBought ? dB.boughtCount : 0)
    }

    function gl(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(HV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy();
      return dB.enabled ? (0, Uy.jsx)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Uy.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Uy.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: VB("skyblockGame:smugglerTitle")
              }), (0, Uy.jsx)("p", {
                children: VB("skyblockGame:smugglerIntro")
              })]
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Uy.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Uy.jsx)(ll, {
                  itemName: yl,
                  amount: dB.rivetsOwned,
                  owned: dB.rivetsOwned
                }), (0, Uy.jsx)(ll, {
                  itemName: pl,
                  amount: dB.crestsOwned,
                  owned: dB.crestsOwned
                })]
              }), (0, Uy.jsx)(Ry.i, {
                onClick: TB.dismiss
              })]
            })]
          }), (0, Uy.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: dB.deals.map((BB => (0, Uy.jsx)(Yl, {
              deal: BB,
              view: dB,
              buy: TB.buy
            }, BB.slot)))
          }), (0, Uy.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: dB.rotatesText
            }), null !== dB.status && (0, Uy.jsx)("span", {
              className: my()("SkyblockSmugglerStatus", dB.status.tone),
              children: dB.status.text
            })]
          })]
        })
      }) : null
    }

    function ol(BB) {
      let {
        phase: TB,
        className: dB
      } = BB;
      return (0, Uy.jsx)("span", {
        className: my()("SkyblockMoon", `Moon-${TB}`, dB),
        "aria-hidden": "true"
      })
    }

    function kl(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(mV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)();
      return dB.enabled ? (0, Uy.jsx)(Ny.e, {
        placement: "statBars",
        children: (0, Uy.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: my()("SkyblockPassageChip", dB.open && "Open"),
          "aria-label": VB("skyblockGame:passageChipLabel", {
            phase: dB.phaseName
          }),
          title: VB("skyblockGame:passageChipLabel", {
            phase: dB.phaseName
          }),
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: TB.toggle,
          children: (0, Uy.jsx)(ol, {
            phase: dB.phase
          }, dB.phase)
        })
      }) : null
    }

    function Ll(BB) {
      let {
        fish: TB
      } = BB;
      return (0, Uy.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Uy.jsx)(fy.c, {
            itemName: TB.itemName,
            amount: 0
          })
        }), (0, Uy.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: TB.displayName
          }), (0, Uy.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: TB.where
          })]
        })]
      })
    }

    function Ol(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(mV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy();
      return dB.enabled ? (0, Uy.jsx)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Uy.jsx)(ol, {
              phase: dB.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: VB("skyblockGame:passageTitle")
              }), (0, Uy.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: dB.phaseName
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: TB.dismiss
            })]
          }), (0, Uy.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: VB("skyblockGame:passageIntro")
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Uy.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Uy.jsx)("h3", {
                children: VB("skyblockGame:passageVisiting")
              }), (0, Uy.jsx)("ul", {
                className: "SkyblockPassageList",
                children: dB.visitors.map((BB => (0, Uy.jsx)(Ll, {
                  fish: BB
                }, BB.itemName)))
              })]
            }), (0, Uy.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== dB.resting && (0, Uy.jsxs)(Uy.Fragment, {
                children: [(0, Uy.jsx)("h3", {
                  children: VB("skyblockGame:passageResting")
                }), (0, Uy.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Uy.jsx)(Ll, {
                    fish: dB.resting
                  })
                })]
              }), (0, Uy.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Uy.jsx)(ol, {
                  phase: dB.nextPhase
                }), (0, Uy.jsx)("span", {
                  children: dB.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Dl() {
      return (0, Uy.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((BB => (0, Uy.jsx)("i", {
          style: {
            "--sparkle-index": BB
          }
        }, BB)))
      })
    }

    function ul(BB) {
      var TB;
      let {
        charm: dB,
        view: VB,
        controller: yB
      } = BB;
      const {
        t: pB
      } = (0, zy.z)(), lB = VB.shop, JB = (null === (TB = VB.sparkle) || void 0 === TB ? void 0 : TB.id) === dB.id;
      return (0, Uy.jsxs)("li", {
        className: my()("SkyblockLampLightCharm", dB.owned && "Owned", dB.socketed && "Socketed"),
        children: [JB && (0, Uy.jsx)(Dl, {}, VB.sparkle.count), (0, Uy.jsx)("h4", {
          children: dB.name
        }), (0, Uy.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: dB.effect
        }), (0, Uy.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: dB.lines.map((BB => (0, Uy.jsxs)("li", {
            className: my()("SkyblockLampLightOddsLine", "better" === BB.tone ? "Better" : "worse" === BB.tone ? "Worse" : "Same"),
            children: [(0, Uy.jsx)("span", {
              className: "Before",
              children: BB.before
            }), (0, Uy.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Uy.jsx)("span", {
              className: "After",
              children: BB.after
            })]
          }, BB.label)))
        }), (0, Uy.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: dB.owned ? dB.socketed ? (0, Uy.jsxs)(Uy.Fragment, {
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: pB("skyblockGame:lampLightSocketed")
            }), (0, Uy.jsx)(Ry.T, {
              disabled: !VB.canCommand,
              ariaLabel: pB("skyblockGame:lampLightRemoveLabel", {
                charm: dB.name
              }),
              onClick: () => {
                yB.socket(null)
              },
              children: pB("skyblockGame:lampLightRemove")
            })]
          }) : (0, Uy.jsx)(Ry.d, {
            disabled: !VB.canCommand || !lB.heldRod,
            ariaLabel: pB("skyblockGame:lampLightSocketLabel", {
              charm: dB.name
            }),
            onClick: () => {
              yB.socket(dB.id)
            },
            children: pB("skyblockGame:lampLightSocket")
          }) : (0, Uy.jsx)(Ry.d, {
            disabled: !VB.canCommand || !dB.affordable,
            ariaLabel: pB("skyblockGame:lampLightBuyLabel", {
              item: dB.name,
              cost: dB.cost
            }),
            onClick: () => {
              yB.buy(dB.id)
            },
            children: dB.cost
          })
        })]
      })
    }

    function Hl(BB) {
      var TB;
      let {
        tint: dB,
        view: VB,
        controller: yB
      } = BB;
      const {
        t: pB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("li", {
        className: my()("SkyblockLampLightTint", dB.wearing && "Wearing"),
        style: {
          "--tint-colour": dB.colour
        },
        children: [(null === (TB = VB.sparkle) || void 0 === TB ? void 0 : TB.id) === dB.id && (0, Uy.jsx)(Dl, {}, VB.sparkle.count), (0, Uy.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Uy.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: dB.name
        }), dB.wearing ? (0, Uy.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: pB("skyblockGame:lampLightWearing")
        }) : (0, Uy.jsx)(Ry.d, {
          disabled: !VB.canCommand || !dB.owned && !dB.affordable,
          ariaLabel: dB.owned ? pB("skyblockGame:lampLightWearLabel", {
            tint: dB.name
          }) : pB("skyblockGame:lampLightBuyLabel", {
            item: dB.name,
            cost: dB.cost
          }),
          onClick: () => {
            dB.owned ? yB.wearTint(dB.id) : yB.buy(dB.id)
          },
          children: dB.owned ? pB("skyblockGame:lampLightWear") : dB.cost
        })]
      })
    }

    function El(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(cV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = dB.shop;
      return (0, Uy.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Uy.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: dB.balance
          }), (0, Uy.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": dB.releasing,
            className: my()("SkyblockLampLightSwitch", dB.releasing && "On"),
            disabled: dB.releasing ? "ready" !== dB.status : !dB.canCommand,
            onClick: () => {
              TB.setRelease(!dB.releasing)
            },
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Uy.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), VB("skyblockGame:lampLightRelease")]
          }), (0, Uy.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: VB("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== dB.notice && (0, Uy.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: dB.notice
        }), null !== yB && (0, Uy.jsxs)(Uy.Fragment, {
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Uy.jsx)("h3", {
              children: VB("skyblockGame:lampLightCharms")
            }), (0, Uy.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: yB.oddsFor
            }), (0, Uy.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((BB => (0, Uy.jsx)("button", {
                type: "button",
                "aria-pressed": dB.situation === BB,
                className: my()("SkyblockLampLightSituation", dB.situation === BB && "Selected"),
                onClick: () => {
                  TB.setSituation(BB)
                },
                children: VB("open" === BB ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, BB)))
            })]
          }), !yB.heldRod && (0, Uy.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: VB("skyblockGame:lampLightHoldRod")
          }), (0, Uy.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: yB.charms.map((BB => (0, Uy.jsx)(ul, {
              charm: BB,
              view: dB,
              controller: TB
            }, BB.id)))
          }), (0, Uy.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Uy.jsx)("h3", {
              children: VB("skyblockGame:lampLightTints")
            })
          }), (0, Uy.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Uy.jsxs)("li", {
              className: my()("SkyblockLampLightTint", "Islands", yB.wearingIslandColours && "Wearing"),
              children: [(0, Uy.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Uy.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: VB("skyblockGame:lampLightIslandColours")
              }), yB.wearingIslandColours ? (0, Uy.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: VB("skyblockGame:lampLightWearing")
              }) : (0, Uy.jsx)(Ry.d, {
                disabled: !dB.canCommand,
                ariaLabel: VB("skyblockGame:lampLightWearLabel", {
                  tint: VB("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  TB.wearTint(null)
                },
                children: VB("skyblockGame:lampLightWear")
              })]
            }), yB.tints.map((BB => (0, Uy.jsx)(Hl, {
              tint: BB,
              view: dB,
              controller: TB
            }, BB.id)))]
          })]
        })]
      })
    }

    function vl(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(cV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)();
      return dB.releasing ? (0, Uy.jsx)(Ny.e, {
        children: (0, Uy.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            TB.setRelease(!1)
          },
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Uy.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [VB("skyblockGame:lampLightReleasing"), " \xb7 ", dB.balance]
          }), (0, Uy.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: VB("skyblockGame:lampLightKeepCatches")
          }), null !== dB.gained && (0, Uy.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: dB.gained.text
          }, dB.gained.count)]
        })
      }) : null
    }

    function ml(BB) {
      let {
        island: TB,
        view: dB,
        aim: VB
      } = BB;
      const {
        t: yB
      } = (0, zy.z)(), pB = TB.featuredFish;
      return (0, Uy.jsxs)("li", {
        className: my()("SkyblockKeepersChairIsland", `Island-${TB.id}`, TB.favoured && "Aimed", !TB.relit && "Dark"),
        children: [(0, Uy.jsx)("h3", {
          children: TB.name
        }), TB.relit && null !== pB ? (0, Uy.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: yB("skyblockGame:keepersChairTideNotice")
          }), (0, Uy.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Uy.jsx)(fy.c, {
              itemName: pB.itemName,
              amount: 0
            })
          }), (0, Uy.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: pB.displayName
          })]
        }) : (0, Uy.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Uy.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: yB("skyblockGame:keepersChairDark")
          })
        }), TB.relit && (TB.favoured ? (0, Uy.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: yB("skyblockGame:keepersChairAimed")
        }) : (0, Uy.jsx)(Ry.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !dB.canAim,
          ariaLabel: yB("skyblockGame:keepersChairAimLabel", {
            island: TB.name
          }),
          onClick: () => {
            VB(TB.id)
          },
          children: yB("skyblockGame:keepersChairAim")
        }))]
      }, TB.favoured ? dB.aimedCount : 0)
    }

    function il(BB) {
      let {
        controller: TB,
        lampLight: dB
      } = BB;
      const VB = (0, wy.f)(MV, TB.getSnapshot()),
        yB = (0, wy.f)(cV, dB.getSnapshot()),
        [pB, lB] = (0, MB.useState)("lamp"),
        {
          t: JB
        } = (0, zy.z)(),
        YB = Zy();
      if (!VB.enabled) return null;
      const gB = "light" === pB && yB.enabled;
      return (0, Uy.jsx)(Qy.b, {
        show: VB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: my()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", gB && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: YB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: JB("skyblockGame:keepersChairTitle")
              }), (0, Uy.jsx)("p", {
                children: JB(gB ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              ariaLabel: JB("skyblockGame:keepersChairClose"),
              onClick: TB.dismiss
            })]
          }), yB.enabled && (0, Uy.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((BB => (0, Uy.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === BB === gB,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === BB === gB ? "true" : void 0,
              className: my()("SkyblockKeepersChairTab", "light" === BB === gB && "Selected"),
              onClick: () => {
                lB(BB)
              },
              children: [JB("lamp" === BB ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === BB && (0, Uy.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: yB.balance
              })]
            }, BB)))
          }), gB ? (0, Uy.jsx)(El, {
            controller: dB
          }) : (0, Uy.jsx)(Nl, {
            view: VB,
            controller: TB
          })]
        })
      })
    }

    function Nl(BB) {
      let {
        view: TB,
        controller: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)();
      return (0, Uy.jsxs)(Uy.Fragment, {
        children: [(0, Uy.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: TB.islands.map((BB => (0, Uy.jsx)(ml, {
            island: BB,
            view: TB,
            aim: dB.aim
          }, BB.id)))
        }), null !== TB.almanac && (0, Uy.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: VB("skyblockGame:passageTitle")
          }), (0, Uy.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Uy.jsx)(ol, {
              phase: TB.almanac.phase
            }), TB.almanac.phaseName]
          }), (0, Uy.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Uy.jsx)(ol, {
              phase: TB.almanac.nextPhase
            }), TB.almanac.next]
          })]
        }), (0, Uy.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: VB("skyblockGame:keepersChairFavour")
          }), TB.aimed && (0, Uy.jsx)(Ry.T, {
            className: "SkyblockKeepersChairRest",
            disabled: !TB.canAim,
            onClick: () => {
              dB.aim(null)
            },
            children: VB("skyblockGame:keepersChairRest")
          })]
        }), null !== TB.status && (0, Uy.jsx)("p", {
          className: my()("SkyblockKeepersChairStatus", "refused" === TB.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: TB.status.text
        })]
      })
    }

    function tl(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, wy.f)(wV, TB.getSnapshot());
      if (!VB.enabled) return null;
      const yB = VB.freshCount > 0 ? dB("skyblockGame:reachLogOpenNews", {
        count: VB.freshCount
      }) : dB("skyblockGame:reachLogOpen");
      return (0, Uy.jsx)(Ny.e, {
        placement: "statBars",
        children: (0, Uy.jsxs)("button", {
          type: "button",
          className: my()("SkyblockReachLogButton", VB.freshCount > 0 && "HasNews", VB.pending && "Pending"),
          "aria-label": yB,
          title: yB,
          onClick: TB.ask,
          children: [VB.news && (0, Uy.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${VB.newsToken}`), (0, Uy.jsx)("span", {
            className: my()("SkyblockReachLogIcon", VB.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Uy.jsx)(fy.c, {
              itemName: FV,
              amount: 0
            })
          }, `icon:${VB.newsToken}`), VB.freshCount > 0 && (0, Uy.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: VB.freshCount
          })]
        })
      })
    }

    function fl(BB) {
      let {
        gift: TB
      } = BB;
      return (0, Uy.jsx)("li", {
        className: my()("SkyblockRegularsGift", TB.given && "Given"),
        children: TB.text
      })
    }

    function sl(BB) {
      let {
        regular: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("li", {
        className: my()("SkyblockRegularsCard", TB.tagged ? "Tagged" : "Untagged", TB.resting && "Resting"),
        children: [(0, Uy.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: TB.fishName,
            children: (0, Uy.jsx)(fy.c, {
              itemName: TB.itemName,
              amount: 0
            })
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Uy.jsx)("h3", {
              children: TB.name
            }), (0, Uy.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: TB.fishName
            })]
          })]
        }), (0, Uy.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: TB.line
        }), (0, Uy.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: TB.size
          }), TB.tagged && (0, Uy.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: TB.resting ? dB("skyblockGame:regularsResting") : TB.meetings
          })]
        }), (0, Uy.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: TB.chance
        }), (0, Uy.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: TB.gifts.map((BB => (0, Uy.jsx)(fl, {
            gift: BB
          }, BB.text)))
        }), TB.history.length > 0 && (0, Uy.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: TB.history.map(((BB, TB) => (0, Uy.jsx)("li", {
            children: BB
          }, TB)))
        })]
      })
    }

    function Ml(BB) {
      let {
        controller: TB,
        island: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)(), yB = (0, wy.f)(eV, TB.getSnapshot()), pB = yB.islands.find((BB => BB.id === dB));
      if (!yB.enabled || void 0 === pB) return null;
      const lB = VB("skyblockGame:regularsOpen");
      return (0, Uy.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": lB,
        title: lB,
        onClick: () => {
          TB.openIsland(dB)
        },
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: VB("skyblockGame:regularsTitle")
        }), pB.regulars.map((BB => (0, Uy.jsx)("span", {
          className: my()("SkyblockRegularsStripIcon", BB.tagged && "Tagged"),
          title: BB.name,
          children: (0, Uy.jsx)(fy.c, {
            itemName: BB.itemName,
            amount: 0
          })
        }, BB.id)))]
      })
    }

    function zl(BB) {
      var TB;
      let {
        controller: dB
      } = BB;
      const VB = (0, wy.f)(eV, dB.getSnapshot()),
        {
          t: yB
        } = (0, zy.z)(),
        pB = Zy();
      if (!VB.enabled) return null;
      const lB = null !== (TB = VB.islands.find((BB => BB.id === VB.selected))) && void 0 !== TB ? TB : null;
      return (0, Uy.jsx)(Qy.b, {
        show: VB.open,
        close: dB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: pB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: yB("skyblockGame:regularsTitle")
              }), (0, Uy.jsx)("p", {
                children: yB("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: dB.dismiss
            })]
          }), (0, Uy.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: VB.islands.map((BB => {
              const TB = BB.id === VB.selected;
              return (0, Uy.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": TB,
                "data-pad-tab": !0,
                "data-pad-selected": TB ? "true" : void 0,
                className: my()("SkyblockReachLogTab", `Island-${BB.id}`, TB && "Selected", BB.charm.given && "GoldPage"),
                onClick: () => {
                  dB.selectIsland(BB.id)
                },
                children: (0, Uy.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                })
              }, BB.id)
            }))
          }), (0, Uy.jsxs)("div", {
            className: my()("SkyblockRegularsPage", null !== lB && `Island-${lB.id}`),
            role: "tabpanel",
            children: [(0, Uy.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: yB("skyblockGame:regularsHow")
            }), null !== lB && (0, Uy.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: lB.regulars.map((BB => (0, Uy.jsx)(sl, {
                regular: BB
              }, BB.id)))
            })]
          }), null !== lB && (0, Uy.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Uy.jsx)("span", {
              className: my()("SkyblockRegularsCharm", lB.charm.given && "Given"),
              children: lB.charm.text
            })
          })]
        })
      })
    }
    const wl = [{
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
      Ul = Array.from({
        length: 6
      }, ((BB, TB) => ({
        "--x": `${(88*(.618034*TB%1)).toFixed(1)}%`,
        "--y": `${(10+37*TB%70).toFixed(1)}%`,
        "--size": 7 + TB % 3 * 3 + "rem",
        "--drift-x": 3 * (TB % 3 - 1) + "rem",
        "--drift-y": 2 * (TB % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + TB % 4 * 3 + "s",
        "--delay": 2.5 * -TB + "s"
      }))),
      Fl = Array.from({
        length: 14
      }, ((BB, TB) => ({
        "--left": `${(3+94*((.618034*TB+.3)%1)).toFixed(1)}%`,
        "--size": 4 + TB % 4 * 2 + "px",
        "--sway": TB % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*TB%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*TB%12).toFixed(2)}s`
      }))),
      Kl = (0, MB.memo)((function(BB) {
        let {
          island: TB
        } = BB;
        return (0, Uy.jsxs)("div", {
          className: my()("SkyblockReachLogDepths", null !== TB && `Island-${TB}`),
          "aria-hidden": "true",
          children: [wl.map(((BB, TB) => (0, Uy.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: BB
          }, `shaft${TB}`))), Ul.map(((BB, TB) => (0, Uy.jsx)("span", {
            className: my()("SkyblockReachLogMote", TB % 2 === 1 && "Violet"),
            style: BB
          }, `mote${TB}`))), Fl.map(((BB, TB) => (0, Uy.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: BB
          }, `bubble${TB}`)))]
        })
      })),
      rl = 100;

    function Il(BB) {
      let {
        view: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)();
      if (null === TB || 0 === TB.total) return null;
      const VB = rl * TB.aspect,
        yB = dB("skyblockGame:hiddenWatersCount", {
          found: TB.found,
          total: TB.total
        });
      return (0, Uy.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${dB("skyblockGame:hiddenWatersTitle")}: ${yB}`,
        children: [(0, Uy.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${VB}`,
          "aria-hidden": "true",
          children: [TB.islands.map(((BB, TB) => (0, Uy.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (BB.left + BB.width / 2) * rl,
            cy: (BB.top + BB.height / 2) * VB,
            rx: BB.width / 2 * rl,
            ry: BB.height / 2 * VB
          }, TB))), TB.pins.map(((BB, TB) => (0, Uy.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: BB.left * rl,
            cy: BB.top * VB,
            r: 13
          }, TB)))]
        }), (0, Uy.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: dB("skyblockGame:hiddenWatersTitle")
          }), (0, Uy.jsx)("span", {
            className: TB.found === TB.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: yB
          })]
        })]
      })
    }

    function cl(BB) {
      let {
        view: TB,
        island: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)(), yB = null === TB || void 0 === TB ? void 0 : TB.glimpses.get(dB);
      return void 0 === yB || 0 === yB.length ? null : (0, Uy.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: VB("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Uy.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: yB.map((BB => (0, Uy.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Uy.jsx)(fy.c, {
              itemName: BB,
              amount: 0
            })
          }, BB)))
        })]
      })
    }
    const Sl = ["Bronze", "Silver", "Gold"],
      Pl = [{
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
      Ql = Pl.slice(0, 2);

    function Rl(BB) {
      return BB ? Pl : Ql
    }

    function al(BB) {
      let {
        fish: TB,
        letGoShown: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Sl.map(((BB, dB) => {
          const yB = dB < TB.marks;
          return (0, Uy.jsx)("span", {
            className: my()("SkyblockReachLogPip", BB, yB && "Earned", yB && TB.fresh && dB === TB.marks - 1 && "Newest"),
            title: VB(UV[dB])
          }, BB)
        })), (0, Uy.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Rl(dB).map(((BB, dB) => (0, Uy.jsx)("span", {
          className: my()("SkyblockReachLogRibbon", BB.className, !0 === TB.ribbons[dB] && "Earned"),
          title: VB(BB.titleKey)
        }, BB.className)))]
      })
    }

    function Zl(BB) {
      let {
        letGoShown: TB,
        haloShown: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Uy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: VB("skyblockGame:reachLogMarks"),
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), VB("skyblockGame:reachLogLegendMarks")]
        }), Rl(TB).map((BB => (0, Uy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: VB(BB.titleKey),
          children: [(0, Uy.jsx)("span", {
            className: my()("SkyblockReachLogRibbon", BB.className, "Earned")
          }), VB(BB.legendKey)]
        }, BB.className))), (0, Uy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: VB("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), VB("skyblockGame:reachLogLegendGlimmer")]
        }), dB && (0, Uy.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: VB("skyblockGame:reachLogHaloTitle"),
          children: [(0, Uy.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), VB("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Xl(BB) {
      let {
        returner: TB
      } = BB;
      return (0, Uy.jsxs)("div", {
        className: my()("SkyblockReachLogReturner", TB.back && "Back"),
        children: [(0, Uy.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Uy.jsx)(fy.c, {
            itemName: TB.itemName,
            amount: 0
          })
        }), (0, Uy.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: TB.line
        })]
      })
    }

    function Wl(BB) {
      let {
        fish: TB,
        letGoShown: dB
      } = BB;
      const {
        t: VB
      } = (0, zy.z)();
      return (0, Uy.jsxs)("li", {
        className: my()("SkyblockReachLogCard", TB.caught ? "Caught" : "Unknown", TB.marks >= 3 && "GoldCard", TB.fresh && "Fresh", TB.visitor && "Visitor"),
        children: [TB.visitor && (0, Uy.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: VB("skyblockGame:reachLogVisitor")
        }), TB.fresh && Array.from({
          length: 4
        }, ((BB, TB) => (0, Uy.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, TB))), (0, Uy.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [TB.halo && (0, Uy.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: VB("skyblockGame:reachLogHaloTitle")
          }), (0, Uy.jsx)(fy.c, {
            itemName: TB.itemName,
            amount: 0
          }), TB.glimmer && (0, Uy.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: VB("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Uy.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: TB.name
        }), (0, Uy.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: TB.chance
        }), (0, Uy.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: TB.best
        }), (0, Uy.jsx)(al, {
          fish: TB,
          letGoShown: dB
        })]
      })
    }

    function hl(BB) {
      let {
        page: TB,
        letGoShown: dB,
        hiddenWaters: VB
      } = BB;
      const {
        t: yB
      } = (0, zy.z)();
      return TB.awake ? (0, Uy.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: TB.fish.map((BB => (0, Uy.jsx)(Wl, {
          fish: BB,
          letGoShown: dB
        }, BB.itemName)))
      }) : (0, Uy.jsxs)(Uy.Fragment, {
        children: [(0, Uy.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: yB("skyblockGame:reachLogAsleep")
        }), (0, Uy.jsx)(cl, {
          view: VB,
          island: TB.id
        })]
      })
    }

    function Cl(BB) {
      var TB, dB;
      let {
        controller: VB,
        regulars: yB,
        hiddenWaters: pB
      } = BB;
      const lB = (0, wy.f)(wV, VB.getSnapshot()),
        JB = function(BB) {
          return (0, wy.f)(yy, BB.getSnapshot())
        }(pB),
        YB = (0, wy.f)(eV, yB.getSnapshot()),
        {
          t: gB
        } = (0, zy.z)(),
        oB = Zy();
      if (!lB.enabled) return null;
      const kB = null !== (TB = lB.pages.find((BB => BB.id === lB.selected))) && void 0 !== TB ? TB : null;
      return (0, Uy.jsx)(Qy.b, {
        show: lB.open,
        close: VB.dismiss,
        togglePointerLock: !1,
        className: my()("SkyblockSkillsOverlay", YB.open && "SkyblockReachLogUnderLedger"),
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: oB,
          onKeyDown: ay,
          children: [(0, Uy.jsx)(Kl, {
            island: null !== (dB = null === kB || void 0 === kB ? void 0 : kB.id) && void 0 !== dB ? dB : null
          }), (0, Uy.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: gB("skyblockGame:reachLogTitle")
              }), (0, Uy.jsx)("p", {
                children: gB("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Uy.jsx)(Il, {
              view: JB
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: VB.dismiss
            })]
          }), (0, Uy.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: lB.pages.map((BB => {
              const TB = BB.id === lB.selected,
                dB = BB.fish.some((BB => BB.fresh));
              return (0, Uy.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": TB,
                "data-pad-tab": !0,
                "data-pad-selected": TB ? "true" : void 0,
                className: my()("SkyblockReachLogTab", `Island-${BB.id}`, TB && "Selected", !BB.awake && "Asleep", BB.gold && "GoldPage", dB && "HasNews"),
                onClick: () => {
                  VB.selectPage(BB.id)
                },
                children: [(0, Uy.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                }), BB.awake && (0, Uy.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: gB("skyblockGame:reachLogCaughtCount", {
                    caught: BB.caught,
                    total: BB.total
                  })
                })]
              }, BB.id)
            }))
          }), (0, Uy.jsxs)("div", {
            className: my()("SkyblockReachLogPage", null !== kB && `Island-${kB.id}`),
            role: "tabpanel",
            children: [null !== kB && (0, Uy.jsx)(hl, {
              page: kB,
              letGoShown: lB.letGoShown,
              hiddenWaters: JB
            }), !0 === (null === kB || void 0 === kB ? void 0 : kB.awake) && null !== kB.returner && (0, Uy.jsx)(Xl, {
              returner: kB.returner
            }), !0 === (null === kB || void 0 === kB ? void 0 : kB.awake) && (0, Uy.jsx)(Ml, {
              controller: yB,
              island: kB.id
            })]
          }), (0, Uy.jsx)("footer", {
            className: my()("SkyblockReachLogFooter", null !== kB && `Island-${kB.id}`, !0 === (null === kB || void 0 === kB ? void 0 : kB.gold) && "GoldPage"),
            children: !0 === (null === kB || void 0 === kB ? void 0 : kB.gold) ? (0, Uy.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: gB("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Uy.jsxs)(Uy.Fragment, {
              children: [(0, Uy.jsx)(Zl, {
                letGoShown: lB.letGoShown,
                haloShown: !0 === (null === kB || void 0 === kB ? void 0 : kB.fish.some((BB => BB.halo)))
              }), (0, Uy.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: gB("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Gl = dB(4226);

    function ql(BB) {
      let {
        conversation: TB,
        completedLabel: dB
      } = BB;
      return (0, Uy.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Uy.jsxs)("header", {
          children: [(0, Uy.jsx)("h3", {
            children: TB.questName
          }), TB.completed && (0, Uy.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: dB
          })]
        }), TB.lines.map((BB => (0, Uy.jsx)(Gl.e, {
          display: BB.display
        }, BB.key)))]
      })
    }

    function xl(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, wy.f)(ly, TB.getSnapshot()), yB = Zy();
      if (!VB.enabled) return null;
      const pB = !VB.loading && 0 === VB.conversations.length;
      return (0, Uy.jsx)(Qy.b, {
        show: VB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: dB("skyblockDialogue:title")
              }), (0, Uy.jsx)("p", {
                children: dB("skyblockDialogue:intro")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: TB.dismiss
            })]
          }), (0, Uy.jsxs)("div", {
            className: my()("SkyblockDialogueBody", {
              SingleColumn: null !== VB.questFocus || 0 === VB.characters.length
            }),
            children: [null === VB.questFocus && VB.characters.length > 0 && (0, Uy.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: VB.characters.map((BB => (0, Uy.jsx)(Ry.d, {
                className: my()("SkyblockDialogueCharacter", {
                  Selected: BB.selected
                }),
                onClick: () => {
                  TB.selectCharacter(BB.id)
                },
                children: (0, Uy.jsx)(sy.e, {
                  text: BB.styling
                })
              }, BB.id)))
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== VB.questFocus && (0, Uy.jsx)(Ry.d, {
                className: "SkyblockDialogueBack",
                onClick: TB.showCharacters,
                children: dB("skyblockDialogue:allCharacters")
              }), VB.loading && (0, Uy.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: dB("skyblockDialogue:loading")
              }), pB && (0, Uy.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: dB(null === VB.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), VB.conversations.map((BB => (0, Uy.jsx)(ql, {
                conversation: BB,
                completedLabel: VB.completedLabel
              }, BB.questId)))]
            })]
          })]
        })
      })
    }

    function jl(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(ky, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy();
      return dB.enabled ? (0, Uy.jsx)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: VB("skyblockGame:autographBook")
              }), (0, Uy.jsx)("p", {
                children: VB("skyblockGame:autographBookIntro")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              onClick: TB.dismiss
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Uy.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Uy.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Uy.jsx)("strong", {
                  children: dB.total
                }), (0, Uy.jsx)("span", {
                  children: VB("skyblockGame:autographTotal")
                })]
              }), (0, Uy.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Uy.jsx)("strong", {
                  children: dB.rankTotal
                }), (0, Uy.jsx)("span", {
                  children: VB("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === dB.entries.length ? (0, Uy.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: VB("skyblockGame:autographBookEmpty")
            }) : (0, Uy.jsx)("ul", {
              className: "SkyblockAutographList",
              children: dB.entries.map((BB => (0, Uy.jsxs)("li", {
                className: my()("SkyblockAutograph", {
                  Ranked: null !== BB.rank
                }),
                style: null === BB.rank ? void 0 : {
                  color: BB.rank.colour
                },
                children: [null !== BB.rank && (0, Uy.jsx)(kp.e, {
                  className: "SkyblockAutographRankIcon",
                  name: BB.rank.icon,
                  kit: (0, kp.g)(BB.rank.icon)
                }), (0, Uy.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Uy.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: BB.name
                  }), (0, Uy.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== BB.rank && (0, Uy.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: BB.rank.label
                    }), (0, Uy.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: BB.signedOn
                    })]
                  })]
                })]
              }, BB.key)))
            })]
          })]
        })
      }) : null
    }
    const Al = (0, MB.memo)((function(BB) {
        let {
          controller: TB
        } = BB;
        return (0, Uy.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: TB.display.mountWaypoint,
          children: [(0, Uy.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Uy.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Uy.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Uy.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Uy.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Uy.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      bl = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function nl(BB) {
      return "next" === BB.phase ? "\u2192" : bl[BB.kind]
    }
    const el = (0, MB.memo)((function(BB) {
      let {
        controller: TB,
        display: dB
      } = BB;
      const VB = (0, wy.f)(Yd, TB.getNotificationSnapshot()),
        [yB, pB] = (0, MB.useState)(!1);
      return (0, wy.e)("qteStateUpdated", (BB => {
        pB(BB.isActive)
      })), (0, Uy.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (yB ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [VB && (0, Uy.jsxs)("div", {
          className: `SkyblockQuestNotification ${VB.kind} ${VB.phase}`,
          style: {
            "--quest-notification-duration": `${VB.durationMs}ms`,
            ...VB.accent && {
              "--quest-notification-accent": VB.accent
            }
          },
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (VB.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: nl(VB)
            }), VB.iconItem && (0, Uy.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Uy.jsx)(fy.c, {
                itemName: VB.iconItem,
                amount: 0
              })
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: VB.title
            }), (0, Uy.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Uy.jsx)(yp.d, {
                text: VB.name
              })
            }), VB.description && (0, Uy.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Uy.jsx)(yp.d, {
                text: VB.description
              })
            }), VB.reward && (0, Uy.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Uy.jsx)(yp.d, {
                text: VB.reward
              })
            })]
          })]
        }, VB.token), (null === VB || void 0 === VB ? void 0 : VB.waypointNameKey) && (0, Uy.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": VB.waypointNameKey,
          "data-notification-token": VB.token,
          ref: dB.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${VB.token}`)]
      })
    }));

    function BJ(BB) {
      const TB = parseInt(BB.replace("#", ""), 16);
      return `${TB>>16&255}, ${TB>>8&255}, ${255&TB}`
    }
    const TJ = (0, MB.memo)((function(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, wy.f)(Pd, TB.getSnapshot());
      if (!VB) return null;
      const yB = "arrival" === VB.phase;
      return (0, Uy.jsxs)("div", {
        className: my()("SkyblockPortalTransit", {
          Departure: !yB,
          Arrival: yB
        }),
        style: {
          "--portal-rgb": BJ(VB.colour),
          "--portal-duration": `${VB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Uy.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Uy.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            TB.finishArrival(VB.token)
          }
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Uy.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !yB && (0, Uy.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: dB("skyblockGame:portalTransitHeading")
          }), (0, Uy.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: dB(VB.zoneNameKey)
          })]
        })]
      }, VB.token)
    }));

    function dJ() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function VJ() {
      const BB = document.querySelector(".SkyblockHudCoins"),
        TB = null === BB || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return TB && TB.width > 0 ? {
        x: TB.left + Math.min(TB.width, 24) / 2,
        y: TB.top + TB.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function yJ(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }
    }

    function pJ() {
      var BB;
      const TB = null === (BB = document.querySelector(".HotBar")) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return TB && TB.width > 0 ? yJ(TB) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function lJ(BB) {
      let {
        items: TB,
        origins: dB,
        target: VB
      } = BB;
      return (0, Uy.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: TB.map(((BB, TB) => {
          const yB = dB[TB];
          return (0, Uy.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${yB.x}px`,
              top: `${yB.y}px`,
              "--item-dx": VB.x - yB.x + "px",
              "--item-dy": VB.y - yB.y + "px",
              "--item-delay": 2e3 + 160 * TB + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Uy.jsx)(fy.c, {
              itemName: BB.dailyRewardItemName,
              amount: 0
            })
          }, BB.dailyRewardItemName)
        }))
      })
    }

    function JJ(BB, TB) {
      const dB = -Math.PI / 2 + 1.25 * (BB / (TB - 1) * 2 - 1),
        VB = 70 + BB % 3 * 22;
      return {
        x: Math.cos(dB) * VB,
        y: Math.sin(dB) * VB * .7
      }
    }

    function YJ(BB) {
      let {
        origin: TB,
        target: dB,
        count: VB
      } = BB;
      const yB = [];
      for (let pB = 0; pB < VB; pB++) {
        const BB = JJ(pB, VB);
        yB.push((0, Uy.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${TB.x}px`,
            top: `${TB.y}px`,
            "--coin-bx": `${BB.x}px`,
            "--coin-by": `${BB.y}px`,
            "--coin-dx": dB.x - TB.x + "px",
            "--coin-dy": dB.y - TB.y + "px",
            "--coin-delay": `${Wd(pB,VB)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Uy.jsx)(fy.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, pB))
      }
      return (0, Uy.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: yB
      })
    }

    function gJ(BB) {
      let {
        day: TB
      } = BB;
      const dB = zB[TB - 1];
      return (0, Uy.jsxs)(Uy.Fragment, {
        children: [(0, Uy.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Uy.jsx)(fy.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, My.c)(dB.dailyRewardCoins)]
        }), dB.dailyRewardItems.map((BB => (0, Uy.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Uy.jsx)(fy.c, {
            itemName: BB.dailyRewardItemName,
            amount: 0
          }), "\xd7", BB.dailyRewardItemAmount]
        }, BB.dailyRewardItemName)))]
      })
    }

    function oJ(BB) {
      let {
        day: TB
      } = BB;
      const dB = UB(TB);
      return (0, Uy.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: zB.map(((BB, VB) => {
          const yB = VB + 1;
          return (0, Uy.jsxs)("li", {
            className: my()("SkyblockDailyRewardTile", {
              Claimed: yB < TB && yB !== dB,
              Today: yB === TB,
              Tomorrow: yB === dB,
              Jackpot: yB === wB
            }),
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: yB
            }), (0, Uy.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Uy.jsx)(fy.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, My.c)(BB.dailyRewardCoins)]
            }), BB.dailyRewardItems.map((BB => (0, Uy.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Uy.jsx)(fy.c, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))]
          }, yB)
        }))
      })
    }

    function kJ(BB) {
      let {
        view: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, MB.useRef)(null), yB = (0, MB.useRef)(null), [pB, lB] = (0, MB.useState)(null);
      (0, MB.useLayoutEffect)((() => {
        var BB;
        const TB = null === (BB = VB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (TB) {
          var dB, pB;
          const BB = Array.from(null !== (dB = null === (pB = yB.current) || void 0 === pB ? void 0 : pB.children) && void 0 !== dB ? dB : [], (BB => yJ(BB.getBoundingClientRect())));
          lB({
            origin: yJ(TB),
            target: VJ(),
            itemOrigins: BB,
            itemTarget: pJ()
          })
        }
      }), []);
      const JB = UB(TB.day),
        YB = function(BB, TB) {
          const [dB, VB] = (0, MB.useState)((() => dJ() ? BB : 0));
          return (0, MB.useEffect)((() => {
            if (dJ()) return;
            const dB = performance.now();
            let yB = 0;
            const pB = lB => {
              const JB = Math.min(Math.max((lB - dB) / TB, 0), 1);
              VB(Math.round(BB * (1 - (1 - JB) ** 3))), JB < 1 && (yB = requestAnimationFrame(pB))
            };
            return yB = requestAnimationFrame(pB), () => {
              cancelAnimationFrame(yB)
            }
          }), [BB, TB]), dB
        }(TB.coins, 450);
      return (0, Uy.jsxs)("div", {
        className: my()("SkyblockDailyReward", {
          Jackpot: TB.day === wB
        }),
        style: {
          "--daily-duration": `${TB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Uy.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Uy.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: dB("skyblockGame:dailyRewardTitle")
            }), (0, Uy.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: dB("skyblockGame:dailyRewardDay", {
                day: String(TB.day)
              })
            })]
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: VB,
            children: [(0, Uy.jsx)(fy.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Uy.jsxs)("span", {
              children: ["+", (0, My.c)(YB)]
            })]
          }), TB.items.length > 0 && (0, Uy.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: yB,
            children: TB.items.map((BB => (0, Uy.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Uy.jsx)(fy.c, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))
          }), (0, Uy.jsx)(oJ, {
            day: TB.day
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [dB("skyblockGame:dailyRewardComeBack"), (0, Uy.jsx)(gJ, {
              day: JB
            })]
          })]
        }), null !== pB && (0, Uy.jsx)(YJ, {
          origin: pB.origin,
          target: pB.target,
          count: TB.flyingCoins
        }), null !== pB && pB.itemOrigins.length === TB.items.length && (0, Uy.jsx)(lJ, {
          items: TB.items,
          origins: pB.itemOrigins,
          target: pB.itemTarget
        })]
      })
    }
    const LJ = (0, MB.memo)((function(BB) {
        let {
          controller: TB
        } = BB;
        const dB = (0, wy.f)(ad, TB.getSnapshot());
        return dB ? (0, Uy.jsx)(kJ, {
          view: dB
        }, dB.token) : null
      })),
      OJ = "Gold Coin";

    function DJ(BB) {
      return 650 + 220 * BB
    }

    function uJ(BB) {
      return {
        "--letter-delay": `${DJ(BB)}ms`,
        "--letter-land": `${DJ(BB)+300}ms`
      }
    }

    function HJ(BB) {
      let {
        letterCount: TB
      } = BB;
      return (0, Uy.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Uy.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Uy.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Uy.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: TB
        }, ((BB, TB) => (0, Uy.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: uJ(TB),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, TB)))]
      })
    }

    function EJ(BB) {
      var TB, dB, VB;
      let {
        letter: yB,
        index: pB
      } = BB;
      const {
        t: lB
      } = (0, zy.z)(), JB = null !== (TB = null === (dB = yB.items[0]) || void 0 === dB ? void 0 : dB.itemName) && void 0 !== TB ? TB : OJ;
      return (0, Uy.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: uJ(pB),
        children: [(0, Uy.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Uy.jsx)(fy.c, {
            itemName: JB,
            amount: 0
          })
        }), (0, Uy.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: lB(yB.reasonKey, null !== (VB = yB.reasonParams) && void 0 !== VB ? VB : void 0)
        }), (0, Uy.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [yB.coins > 0 && (0, Uy.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Uy.jsx)(fy.c, {
              itemName: OJ,
              amount: 0
            }), "+", (0, My.c)(yB.coins)]
          }), yB.items.map(((BB, TB) => (0, Uy.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Uy.jsx)(fy.c, {
              itemName: BB.itemName,
              amount: 0
            }), BB.label, " \xd7", BB.amount]
          }, TB)))]
        })]
      })
    }

    function vJ(BB) {
      let {
        view: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)();
      return (0, Uy.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${TB.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${DJ(TB.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Uy.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Uy.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Uy.jsx)(HJ, {
              letterCount: TB.letters.length
            }), (0, Uy.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: dB("skyblockGame:mailboxTitle")
            })]
          }), (0, Uy.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: TB.letters.map(((BB, TB) => (0, Uy.jsx)(EJ, {
              letter: BB,
              index: TB
            }, TB)))
          }), TB.more > 0 && (0, Uy.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: dB("skyblockGame:mailboxMore", {
              count: String(TB.more)
            })
          })]
        })
      })
    }
    const mJ = (0, MB.memo)((function(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(Cd, TB.getSnapshot());
      return dB ? (0, Uy.jsx)(vJ, {
        view: dB
      }, dB.token) : null
    }));

    function iJ(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, wy.f)(PV, TB.getSnapshot());
      if (null === VB) return null;
      const yB = VB.fullSet ? "empty" === VB.fuelState ? {
        text: dB("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: dB("skyblockGame:magmawardHudFullSet", {
          worn: String(VB.wornCount)
        }),
        tone: "partial"
      };
      return (0, Uy.jsx)(Ny.e, {
        placement: "statBars",
        children: (0, Uy.jsxs)("div", {
          className: my()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${VB.fuelState}`, {
            "SkyblockMagmawardHud-partial": !VB.fullSet,
            "SkyblockMagmawardHud-armed": VB.fullSet && "empty" !== VB.fuelState
          }),
          children: [null !== VB.flare && (0, Uy.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${VB.flare}`
          }, `flare:${VB.flareToken}`), (0, Uy.jsx)("div", {
            className: my()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: VB.setLit
            }),
            children: VB.pieces.map(((BB, TB) => (0, Uy.jsx)("div", {
              className: my()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: BB.worn,
                SkyblockMagmawardPieceJustWorn: BB.justWorn
              }),
              children: (0, Uy.jsx)(fy.c, {
                itemName: BB.itemName,
                amount: 0
              })
            }, `${TB}:${BB.wornToken}`)))
          }, `pieces:${VB.setLitToken}`), (0, Uy.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Uy.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Uy.jsxs)("div", {
              className: my()("SkyblockMagmawardFuelCounter", VB.pulse && `SkyblockMagmawardFuelCounter-${VB.pulse}`),
              children: [(0, Uy.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Uy.jsx)(fy.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Uy.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: VB.fuel
              })]
            }, `counter:${VB.pulseToken}`), "burn" === VB.pulse && (0, Uy.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${VB.pulseToken}`)]
          }), yB && (0, Uy.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${yB.tone} SmallTextBold`,
            children: yB.text
          })]
        })
      })
    }

    function NJ(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB,
        selectedLanguage: VB
      } = (0, zy.z)(), yB = (0, wy.f)(RV, TB.getSnapshot());
      return null === yB ? null : (0, Uy.jsx)(Ny.e, {
        placement: "statBars",
        children: (0, Uy.jsxs)("div", {
          className: my()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: yB.inRange
          }),
          style: {
            "--glowtide-colour": yB.colour
          },
          "aria-label": dB("skyblockGame:glowtideChipLabel"),
          children: [(0, Uy.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), yB.inRange ? (0, Uy.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: dB("skyblockGame:glowtideChipInRange")
          }, `call:${yB.inRangeToken}`) : (0, Uy.jsxs)(Uy.Fragment, {
            children: [(0, Uy.jsx)("div", {
              ref: TB.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Uy.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: dB("skyblockGame:waypointDistance", {
                distance: tB(yB.distance, VB.code)
              })
            })]
          })]
        })
      })
    }

    function tJ(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, wy.f)(ZV, TB.getSnapshot());
      return null === VB ? null : (0, Uy.jsx)(Ny.e, {
        placement: "statBars",
        children: (0, Uy.jsxs)("div", {
          className: my()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: VB.full
          }),
          "aria-label": dB("skyblockGame:glowMeterLabel", {
            fill: String(VB.fill),
            Kk: String(VB.Kk)
          }),
          children: [VB.burst && (0, Uy.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${VB.burstToken}`), (0, Uy.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Uy.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${VB.ratio})`
              }
            }), VB.gained && (0, Uy.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${VB.gainToken}`), VB.full && Array.from({
              length: 5
            }, ((BB, TB) => (0, Uy.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, TB)))]
          }), VB.full && VB.rares.map((BB => (0, Uy.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Uy.jsx)(fy.c, {
              itemName: BB,
              amount: 0
            })
          }, BB))), VB.ready && (0, Uy.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Uy.jsx)("span", {
              children: dB("skyblockGame:glowMeterReady")
            })
          }, `ready:${VB.fullToken}`)]
        })
      })
    }

    function fJ(BB) {
      let {
        controller: TB
      } = BB;
      const {
        t: dB
      } = (0, zy.z)(), VB = (0, wy.f)(WV, TB.getSnapshot());
      if (null === VB) return null;
      const yB = "waiting" === VB.phase,
        pB = {
          animationDuration: `${VB.waitMs}ms`,
          animationDelay: -VB.elapsedMs + "ms"
        },
        lB = yB ? void 0 : {
          animationDuration: `${VB.waitMs}ms`
        };
      return (0, Uy.jsxs)("div", {
        className: yB ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [yB && (0, Uy.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((BB, TB) => (0, Uy.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, TB))), (0, Uy.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: pB
          }), (0, Uy.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Uy.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Uy.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: pB
            })]
          }), (0, Uy.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Uy.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: lB,
          children: dB(VB.line)
        }, VB.lineIndex)]
      }, VB.token)
    }

    function sJ(BB) {
      let {
        chart: TB,
        showHere: dB,
        className: VB
      } = BB;
      return (0, Uy.jsx)("div", {
        className: my()("SkyblockTideChartGrid", VB, null !== TB.pictureName && "Complete"),
        "aria-hidden": "true",
        children: TB.cells.map(((BB, VB) => {
          const yB = 0 !== (TB.pulseCells & 1 << VB),
            pB = TB.castCell === VB;
          return (0, Uy.jsx)("span", {
            className: my()("SkyblockTideChartCell", `Cell-${BB}`, yB && "Pulse", pB && "Cast", dB && TB.hereCell === VB && "Here")
          }, `${VB}:${yB?`p${TB.pulseToken}`:""}:${pB?`c${TB.castToken}`:""}`)
        }))
      })
    }

    function MJ(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(CV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = dB.chip;
      if (!dB.enabled || null === yB) return null;
      const pB = VB("skyblockGame:tideChartsChipLabel", {
        island: yB.islandName,
        lit: String(yB.lit),
        ink: String(yB.ink)
      });
      return (0, Uy.jsx)(Ny.e, {
        placement: "statBars",
        children: (0, Uy.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: my()("SkyblockTideChartsChip", dB.open && "Open", null !== yB.pictureName && "Complete"),
          "aria-label": pB,
          title: pB,
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: TB.toggle,
          children: [(0, Uy.jsx)(sJ, {
            chart: yB,
            showHere: !1,
            className: "Mini"
          }), (0, Uy.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [yB.lit, "/", yB.ink]
          })]
        })
      })
    }

    function zJ(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, wy.f)(CV, TB.getSnapshot()),
        {
          t: VB
        } = (0, zy.z)(),
        yB = Zy(),
        pB = dB.card;
      return dB.enabled && null !== pB ? (0, Uy.jsx)(Qy.b, {
        show: dB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Uy.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: yB,
          onKeyDown: ay,
          children: [(0, Uy.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Uy.jsxs)("div", {
              children: [(0, Uy.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: VB("skyblockGame:tideChartsTitle")
              }), (0, Uy.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: VB("skyblockGame:tideChartsIntro")
              })]
            }), (0, Uy.jsx)(Ry.i, {
              padIgnore: !0,
              ariaLabel: VB("skyblockGame:tideChartsClose"),
              onClick: TB.dismiss
            })]
          }), dB.tabs.length > 1 && (0, Uy.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": VB("skyblockGame:tideChartsIslands"),
            children: dB.tabs.map((BB => (0, Uy.jsx)("button", {
              type: "button",
              className: my()("SkyblockTideChartsTab", BB.selected && "Selected"),
              "aria-pressed": BB.selected,
              onClick: () => {
                TB.dO(BB.island)
              },
              children: BB.name
            }, BB.island)))
          }), (0, Uy.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Uy.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": pB.gridLabel,
              children: (0, Uy.jsx)(sJ, {
                chart: pB,
                showHere: !0,
                className: "Large"
              })
            }), (0, Uy.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Uy.jsx)("h3", {
                children: pB.islandName
              }), (0, Uy.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: pB.litText
              }), null === pB.pictureName ? (0, Uy.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: VB("skyblockGame:tideChartsPictureHidden")
              }) : (0, Uy.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: VB("skyblockGame:tideChartsPictureRevealed", {
                  picture: pB.pictureName
                })
              }, pB.pictureName), (0, Uy.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Uy.jsxs)("li", {
                  children: [(0, Uy.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), VB("skyblockGame:tideChartsLegendLit")]
                }), (0, Uy.jsxs)("li", {
                  children: [(0, Uy.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), VB("skyblockGame:tideChartsLegendClear")]
                }), null !== pB.hereCell && (0, Uy.jsxs)("li", {
                  children: [(0, Uy.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), VB("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Uy.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Uy.jsx)("span", {
                  children: dB.turnsText
                }), (0, Uy.jsx)("span", {
                  children: dB.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function wJ(BB) {
      var TB;
      let {
        controller: dB
      } = BB;
      const {
        selectedLanguage: VB
      } = (0, zy.z)(), yB = VB.code;
      (0, MB.useEffect)((() => {
        dB.setTranslator(((BB, TB) => (0, zy.v)(yB, BB, TB)), yB, ((BB, TB) => (0, zy.r)(yB, BB, TB)))
      }), [dB, yB]);
      const pB = (0, wy.f)(LB, dB.map.getSnapshot()),
        {
          openInGameMenuName: lB
        } = (0, iy.m)(["openInGameMenuName"]);
      return (0, Uy.jsxs)(Uy.Fragment, {
        children: [(0, Uy.jsx)(el, {
          controller: dB.quests,
          display: dB.navigation.display
        }), pB.enabled && !lB && (0, Uy.jsx)(Tp, {
          controller: dB.navigation
        }), (0, Uy.jsx)(Fy, {
          controller: dB,
          minimap: pB.enabled && (null === (TB = pB.presentation) || void 0 === TB ? void 0 : TB.minimap) && (0, Uy.jsx)(Bp, {
            view: pB.presentation.minimap,
            navigation: dB.navigation,
            controller: dB.map
          }),
          children: (0, Uy.jsx)(op, {
            controller: dB.quests,
            surface: "hud"
          })
        }), (0, Uy.jsx)(Al, {
          controller: dB.navigation
        }), (0, Uy.jsx)(TJ, {
          controller: dB.portalTransit
        }), (0, Uy.jsx)(LJ, {
          controller: dB.dailyReward
        }), (0, Uy.jsx)(mJ, {
          controller: dB.mailbox
        }), (0, Uy.jsx)(iJ, {
          controller: dB.magmaward
        }), (0, Uy.jsx)(NJ, {
          controller: dB.glowtide
        }), (0, Uy.jsx)(kl, {
          controller: dB.passage
        }), (0, Uy.jsx)(MJ, {
          controller: dB.tideCharts
        }), (0, Uy.jsx)(tJ, {
          controller: dB.glowMeter
        }), (0, Uy.jsx)(tl, {
          controller: dB.reachLog
        }), (0, Uy.jsx)(fJ, {
          controller: dB.hushWait
        }), (0, Uy.jsx)(vl, {
          controller: dB.lampLight
        }), (0, Uy.jsx)(dp, {
          controller: dB.skills,
          surface: "hud"
        })]
      })
    }

    function UJ(BB) {
      let {
        controller: TB
      } = BB;
      return (0, Uy.jsxs)(Uy.Fragment, {
        children: [(0, Uy.jsx)(ey, {
          controller: TB.map,
          navigation: TB.navigation
        }), (0, Uy.jsx)(dp, {
          controller: TB.skills,
          surface: "menu"
        }), (0, Uy.jsx)(op, {
          controller: TB.quests,
          surface: "menu"
        }), (0, Uy.jsx)(Gp, {
          controller: TB.dungeons
        }), (0, Uy.jsx)(jp, {
          controller: TB.collections
        }), (0, Uy.jsx)(np, {
          controller: TB.questGraph
        }), (0, Uy.jsx)(Vl, {
          controller: TB.forge
        }), (0, Uy.jsx)(gl, {
          controller: TB.smuggler
        }), (0, Uy.jsx)(il, {
          controller: TB.keepersChair,
          lampLight: TB.lampLight
        }), (0, Uy.jsx)(Cl, {
          controller: TB.reachLog,
          regulars: TB.regulars,
          hiddenWaters: TB.hiddenWaters
        }), (0, Uy.jsx)(zl, {
          controller: TB.regulars
        }), (0, Uy.jsx)(Ol, {
          controller: TB.passage
        }), (0, Uy.jsx)(zJ, {
          controller: TB.tideCharts
        }), (0, Uy.jsx)(xl, {
          controller: TB.dialogue
        }), (0, Uy.jsx)(jl, {
          controller: TB.autographs
        })]
      })
    }
    var FJ = dB(35732);
    const KJ = ed + lV;

    function rJ(BB, TB, dB, VB, yB) {
      const pB = [],
        lB = [],
        JB = dB => {
          const VB = BB.playSound(TB, dB.sound, dB.volume, dB.rate);
          VB && (lB.push(VB), void 0 !== dB.cutAfter && pB.push(setTimeout((() => {
            VB.fade(VB.getVolume(), 0, 300)
          }), dB.cutAfter)))
        };
      for (const YB of function(BB, TB) {
          const dB = [{
            sound: "rpgKnifeSlice1",
            beat: ed,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: ed,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: ed,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: ed,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: ed,
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
            sound: (0, FJ.c)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: KJ + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, FJ.c)("bigDrumSwish"),
            beat: KJ + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: KJ + 60,
            lead: 180,
            volume: .5 + .06 * BB,
            rate: .82 + .07 * BB
          }];
          return BB >= 4 && dB.push({
            sound: "exp_levelup",
            beat: KJ + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), TB && dB.push({
            sound: "trumpetFlare",
            beat: KJ + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), dB.push({
            sound: "harp_pling",
            beat: BV,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), dB
        }(dB, VB)) yB ? pB.push(setTimeout((() => {
        JB(YB)
      }), Math.max(0, YB.beat - YB.lead / YB.rate))) : YB.beat !== ed && "magicAccent2" !== YB.sound && "trumpetFlare" !== YB.sound || JB(YB);
      return () => {
        for (const BB of pB) clearTimeout(BB);
        for (const BB of lB) BB.fade(BB.getVolume(), 0, 120)
      }
    }
    class IJ {
      constructor(BB) {
        this.deps = BB, this.pending = new Map, this.localHook = null
      }
      hookWaiting(BB, TB) {
        this.pending.delete(BB);
        const dB = this.deps.now();
        if (null === TB) {
          var VB;
          if ((null === (VB = this.localHook) || void 0 === VB ? void 0 : VB.hookId) === BB) {
            const BB = dB >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(BB)
          }
          return
        }
        const yB = dB + TB;
        this.settle(BB, yB) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(BB, {
          untilMs: dB + 1e3,
          biteAtMs: yB
        }))
      }
      getLocalHook() {
        var BB, TB;
        return null !== (BB = null === (TB = this.localHook) || void 0 === TB ? void 0 : TB.hookId) && void 0 !== BB ? BB : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const BB = this.deps.now();
        for (const [TB, {
            untilMs: dB,
            biteAtMs: VB
          }] of this.pending)(this.settle(TB, VB) || BB > dB) && this.pending.delete(TB)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(BB, TB) {
        const dB = this.deps.getLineOwner(BB);
        if (null === dB) return !1;
        if (!this.deps.isLocalPlayer(dB)) return !0;
        if (this.localHook = {
            hookId: BB,
            biteAtMs: TB
          }, !this.deps.isHushWaiting()) {
          const [TB, dB] = this.deps.getHookPosition(BB);
          this.deps.onCastLanded(TB, dB)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var cJ = dB(3716);
    const SJ = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      PJ = {
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
    class QJ {
      constructor(BB) {
        this.deps = BB, this.tell = null
      }
      receiveTell(BB) {
        let {
          biteTellTier: TB
        } = BB;
        this.tell = {
          tier: TB,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(BB) {
        const TB = this.tell;
        if (this.tell = null, !BB) return;
        const dB = null !== TB && this.deps.now() - TB.atMs <= 3e3 ? TB.tier : 0;
        this.deps.vibrate(SJ[dB])
      }
      burstAtHook() {
        const BB = this.tell,
          TB = this.deps.getLocalHookPosition();
        null === BB || BB.burst || null === TB || (BB.burst = !0, this.deps.playParticles(function(BB, TB) {
          let [dB, VB, yB] = TB;
          const {
            count: pB,
            rise: lB,
            colour: JB
          } = PJ[BB], [YB, gB, oB] = JB;
          return {
            texture: "glint",
            pos1: [dB - .3, VB, yB - .3],
            pos2: [dB + .3, VB + .2, yB + .3],
            dir1: [-.6, lB, -.6],
            dir2: [.6, 1.4 * lB, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: pB,
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
              minColor: [YB, gB, oB, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [YB, gB, oB, 0],
              maxColor: [YB, gB, oB, 0]
            }],
            blendMode: cJ.e.Add,
            hideDist: 48
          }
        }(BB.tier, TB)))
      }
    }
    var RJ = dB(1133),
      aJ = dB(1685),
      ZJ = dB(33);

    function XJ(BB, TB) {
      return [{
        timeFraction: 0,
        minColor: [255 * BB[0], 255 * BB[1], 255 * BB[2], 1],
        maxColor: [255 * TB[0], 255 * TB[1], 255 * TB[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const WJ = [0, 0, 0],
      hJ = {
        texture: "glint",
        mipmaps: !1,
        Kk: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: WJ,
        dir2: WJ,
        blendMode: cJ.e.OneOne
      },
      CJ = {
        ...hJ,
        colorGradients: XJ([1, .88, .38], [1, .65, .15])
      },
      GJ = {
        ...hJ,
        colorGradients: XJ([.55, .95, 1], [.9, 1, 1])
      },
      qJ = [.5, .5, .5],
      xJ = {
        texture: "glint",
        mipmaps: !1,
        Kk: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: XJ([1, .12, .12], [1, .35, .2]),
        blendMode: cJ.e.OneOne
      };
    class jJ {
      constructor() {
        this.drops = new Map
      }
      MD(BB, TB) {
        if ("overflowFlash" === TB.kind) {
          const [dB, VB, yB] = TB.position, pB = BB.createParticles(xJ, {
            pos: [dB, VB, yB],
            half: qJ
          });
          return pB.emit(18), void pB.stop()
        }
        this.drops.has(TB.itemId) || this.drops.set(TB.itemId, {
          owner: TB.owner,
          cosmetic: TB.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      dL(BB) {
        if (0 === this.drops.size) return;
        const TB = performance.now(),
          dB = BB.getCameraPosition();
        let VB = 0;
        for (const pB of this.drops.values()) null !== pB.particles && VB++;
        for (const [pB, lB] of this.drops) {
          const JB = BB.getPositionView(pB);
          if (null === JB) {
            var yB;
            if (lB.seen || TB - lB.markedAt > 5e3) null !== lB.particles && VB--, null === (yB = lB.particles) || void 0 === yB || yB.stop(), this.drops.delete(pB);
            continue
          }
          lB.cosmetic || !BB.isLocalPlayer(lB.owner) || lB.pickupDelayCleared || (BB.clearPickupDelay(pB), lB.pickupDelayCleared = !0);
          const YB = lB.lastPosition,
            gB = lB.seen && (JB[0] - YB[0]) ** 2 + (JB[1] - YB[1]) ** 2 + (JB[2] - YB[2]) ** 2 > 4e-4,
            oB = (JB[0] - dB[0]) ** 2 + (JB[1] - dB[1]) ** 2 + (JB[2] - dB[2]) ** 2 < 2025;
          lB.seen = !0, YB[0] = JB[0], YB[1] = JB[1], YB[2] = JB[2], gB && (lB.lastMovingAt = TB), null !== lB.particles && (!oB || TB - lB.lastMovingAt > 500) && (lB.particles.stop(), lB.particles = null, VB--), gB && oB && null === lB.particles && VB < 32 && (lB.particles = BB.createParticles(lB.cosmetic ? GJ : CJ, {
            pos: JB
          }), VB++), null !== lB.particles && (lB.particles.moveTo(JB), lB.particles.setEmitRate(gB ? 12 : 0)), !gB && null === lB.particles && TB - Math.max(lB.lastMovingAt, lB.markedAt) > 2e3 && this.drops.delete(pB)
        }
      }
      dispose() {
        for (const TB of this.drops.values()) {
          var BB;
          null === (BB = TB.particles) || void 0 === BB || BB.stop()
        }
        this.drops.clear()
      }
    }
    var AJ = dB(184);
    const bJ = AJ.c.kE * AJ.c.playerEyeToHeightRatio;
    class nJ {
      constructor(BB) {
        this.host = BB, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      MD(BB) {
        this.lava = BB, this.nextUpdateAt = 0
      }
      dL() {
        var BB;
        const TB = this.host.now();
        if (TB < this.nextUpdateAt) return;
        this.nextUpdateAt = TB + 250;
        const dB = this.host.playerPosition(),
          VB = dB && this.findNearest([dB[0], dB[1] + bJ, dB[2]]);
        if (!VB || VB.distance >= 40) return void this.stop();
        const yB = .5 * Math.min(1, (40 - VB.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(yB) : this.loop = this.host.play("lavaFlow", yB, VB.position, 40 + bJ, 9, !0), null === (BB = this.loop) || void 0 === BB || BB.setPosition(VB.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var BB;
        null === (BB = this.loop) || void 0 === BB || BB.stop(), this.loop = null
      }
      findNearest(BB) {
        let TB = -1,
          dB = 1 / 0;
        for (let VB = 0; VB < this.lava.length; VB += 3) {
          const yB = this.lava[VB] - BB[0],
            pB = this.lava[VB + 1] - BB[1],
            lB = this.lava[VB + 2] - BB[2],
            JB = yB * yB + pB * pB + lB * lB;
          JB < dB && (dB = JB, TB = VB)
        }
        return TB < 0 ? null : {
          position: [this.lava[TB], this.lava[TB + 1], this.lava[TB + 2]],
          distance: Math.sqrt(dB)
        }
      }
    }
    var eJ = dB(1662),
      BY = dB(37605);
    const TY = {
      "Grey Portal": "Gray"
    };
    for (const JY of yB.Gc) TY[`${JY} Portal`] = JY;
    const dY = Object.keys(TY),
      VY = Object.fromEntries(dY.map((BB => [BB, (0, yB.Z)(yB.L[`${(0,yB.qe)(TY[BB])}Team`])])));
    Object.fromEntries(dY.map((BB => [BB, yB.L[`${(0,yB.qe)(TY[BB])}UiText`]])));
    class yY {
      constructor(BB, TB) {
        this.presentation = BB, this.portal = TB, this.unlocked = void 0
      }
      MD(BB) {
        const TB = !1 === this.unlocked && BB;
        this.unlocked = BB, this.dL();
        const {
          min: dB,
          max: VB,
          unlockedBlock: yB
        } = this.portal;
        if (TB && this.presentation.hasChunk(...dB)) {
          const [BB, TB, pB] = VY[yB];
          this.presentation.playParticles({
            pos1: [...dB],
            pos2: VB.map((BB => BB + 1)),
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
              minColor: [BB, TB, pB, 1],
              maxColor: [Math.min(255, BB + 55), Math.min(255, TB + 55), Math.min(255, pB + 90), 1]
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
      dL() {
        var BB;
        const TB = this.unlocked ? this.portal.unlockedBlock : null !== (BB = this.portal.lockedBlock) && void 0 !== BB ? BB : "Light Gray Portal",
          {
            min: dB,
            max: VB
          } = this.portal;
        for (let yB = dB[0]; yB <= VB[0]; yB++)
          for (let BB = dB[1]; BB <= VB[1]; BB++)
            for (let pB = dB[2]; pB <= VB[2]; pB++) this.presentation.hasChunk(yB, BB, pB) && this.presentation.XE(yB, BB, pB) !== TB && this.presentation.Cw(yB, BB, pB, TB)
      }
    }
    const pY = {
        farming_1: {
          raises: BB => "NPC" === BB.type && "chef" === BB.variation,
          rise: .4
        },
        fishing_1: {
          raises: BB => "Draugr Warper" === BB.type,
          rise: .4
        }
      },
      lY = (BB, TB, dB, pB) => {
        let {
          localPlayerId: lB
        } = pB;
        const JB = new Ey({
          translate: (BB, TB) => (0, zy.v)(RJ.f.get().getCurrentLanguageCode(), BB, TB),
          translateWithIcons: (BB, TB) => (0, zy.r)(RJ.f.get().getCurrentLanguageCode(), BB, TB),
          setMenuOpen: BB => {
            BB ? (0, CB.o)() : (0, CB.g)()
          },
          dismissMenu: CB.h,
          publishSkills: BB => {
            GB.h.yH(Vd, BB, !0)
          },
          publishQuests: BB => {
            GB.h.yH(Jd, BB, !0)
          },
          publishQuestNotification: BB => {
            GB.h.yH(Yd, BB, !0)
          },
          publishDungeons: BB => {
            GB.h.yH(kd, BB, !0)
          },
          publishCollections: BB => {
            GB.h.yH(cd, BB, !0)
          },
          publishMap: BB => {
            GB.h.yH(LB, BB, !0)
          },
          publishHud: BB => {
            GB.h.yH(Dy, BB, !0)
          },
          publishPortalTransit: BB => {
            GB.h.yH(Pd, BB, !0)
          },
          isLoadingScreenUp: () => iy.d.get("loadingOverlayVisible"),
          publishDailyReward: BB => {
            GB.h.yH(ad, BB, !0)
          },
          publishMailbox: BB => {
            GB.h.yH(Cd, BB, !0)
          },
          publishQuestGraph: BB => {
            GB.h.yH(qd, BB, !0)
          },
          publishForge: BB => {
            GB.h.yH(OV, BB, !0)
          },
          publishSmuggler: BB => {
            GB.h.yH(HV, BB, !0)
          },
          publishKeepersChair: BB => {
            GB.h.yH(MV, BB, !0)
          },
          publishReachLog: BB => {
            GB.h.yH(wV, BB, !0)
          },
          publishLampLight: BB => {
            GB.h.yH(cV, BB, !0)
          },
          publishMagmaward: BB => {
            GB.h.yH(PV, BB, !0)
          },
          publishGlowtide: BB => {
            GB.h.yH(RV, BB, !0)
          },
          publishGlowMeter: BB => {
            GB.h.yH(ZV, BB, !0)
          },
          publishHushWait: BB => {
            GB.h.yH(WV, BB, !0)
          },
          publishPassage: BB => {
            GB.h.yH(mV, BB, !0)
          },
          publishTideCharts: BB => {
            GB.h.yH(CV, BB, !0)
          },
          publishRegulars: BB => {
            GB.h.yH(eV, BB, !0)
          },
          publishHiddenWaters: BB => {
            GB.h.yH(yy, BB, !0)
          },
          publishDialogue: BB => {
            GB.h.yH(ly, BB, !0)
          },
          publishAutographs: BB => {
            GB.h.yH(ky, BB, !0)
          },
          onDailyRewardStarted: BB => {
            QB.playSound(lB, BB.day === wB ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (BB, TB) => {
            QB.playSound(lB, "exp_collect", .35, 1 + .6 * BB / (TB - 1)), GB.h.yH(Zd, BB === TB - 1)
          },
          onDailyRewardItemLanded: BB => {
            QB.playSound(lB, "pickUp", .6, 1 + .15 * BB)
          },
          onMailboxStarted: () => {
            QB.playSound(lB, "rpgMetalClick", .6, 1), QB.playSound(lB, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            QB.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: ZJ.m,
          requestTracking: BB => {
            QB.sendCommand(`quests track ${BB}`)
          },
          requestDungeonEnter: (BB, TB) => {
            QB.sendCommand(`${KB.l}${BB} ${TB}`)
          },
          requestQuestJump: BB => {
            QB.sendCommand(`${rB} jump ${BB}`)
          },
          requestQuestArrive: (BB, TB) => {
            const dB = `${rB} arrive ${BB}`;
            QB.sendCommand(TB ? `${dB} complete` : dB)
          },
          requestForge: BB => {
            let {
              blade: TB,
              guard: dB,
              handle: VB
            } = BB;
            QB.sendCommand(`forge ${TB} ${dB} ${VB}`)
          },
          requestDialogue: () => {
            QB.sendCommand("quests dialogue")
          },
          requestSmuggle: (BB, TB) => {
            QB.sendCommand(`smuggle ${BB} ${TB}`)
          },
          requestKeepersChairAim: BB => {
            QB.sendCommand(`keeperschair-aim ${BB}`)
          },
          requestReachLogOpen: () => {
            QB.sendCommand("reachlog-open")
          },
          requestLampLight: BB => {
            QB.sendCommand(`${BB}`)
          },
          requestTravel: BB => {
            QB.sendCommand(`map travel ${BB.kind} ${BB.id} ${BB.requestId}`)
          }
        });
        let YB, gB, oB, kB, OB, DB, uB, iB, NB, tB, fB, zB, UB;
        const IB = new jJ;
        let QB, ZB = null;
        const XB = pY[null !== dB && void 0 !== dB ? dB : ""],
          xB = (BB, TB) => {
            null !== XB && void 0 !== XB && XB.raises(TB) && QB.setNametagOffset(BB, XB.rise)
          },
          jB = new QJ({
            getLocalHookPosition: () => {
              const BB = AB.getLocalHook();
              return null !== BB && QB.checkValid(BB) ? QB.Dv(BB) : null
            },
            playParticles: BB => {
              QB.playParticleEffect(BB)
            },
            vibrate: BB => {
              qB.f.play("fishBite", BB)
            },
            now: () => performance.now()
          }),
          AB = new IJ({
            getLineOwner: BB => QB.checkValid(BB) ? QB.getLineOwner(BB) : null,
            isLocalPlayer: BB => QB.isLocalPlayer(BB),
            getHookPosition: BB => {
              const [TB, , dB] = QB.Dv(BB);
              return [TB, dB]
            },
            isHushWaiting: () => {
              var BB;
              return "waiting" === (null === (BB = JB.hushWait.getSnapshot()) || void 0 === BB ? void 0 : BB.phase)
            },
            onCastLanded: (BB, TB) => {
              JB.tideCharts.castLanded(BB, TB)
            },
            onLocalHookSettled: () => {
              jB.onLocalHookSettled()
            },
            onLocalWaitEnded: BB => {
              jB.onLocalWaitEnded(BB)
            },
            now: () => performance.now()
          }),
          bB = new nJ({
            now: () => performance.now(),
            playerPosition: () => QB.checkValid(lB) ? QB.Dv(lB) : null,
            play: (BB, TB, dB, VB, yB, pB) => QB.playSound(lB, BB, TB, 1, {
              xp: dB,
              maxHearDist: VB,
              refDistance: yB
            }, pB)
          }),
          nB = new Map;
        let eB;
        return {
          onCreate: BB => {
            if (QB = BB, ZB = new BY.SkyblockEntityFacing(BB, XB ? xB : null), JB.portalTransit.resumeArrival(null !== dB && void 0 !== dB ? dB : null), (null !== dB && void 0 !== dB ? dB : VB) === VB) {
              let BB = -1 / 0;
              eB = GB.h.subscribe("toggleMenu", (TB => {
                const dB = performance.now();
                "inventory|Workbench" !== TB || "cross_to_hub" !== JB.quests.getTrackedQuestId() || dB - BB < 1e4 || (BB = dB, QB.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [VB, yB] of Object.entries(null !== (TB = cB[null !== dB && void 0 !== dB ? dB : ""]) && void 0 !== TB ? TB : {})) {
              var TB;
              nB.set(VB, new yY({
                hasChunk: (TB, dB, VB) => BB.isBlockInLoadedChunk(TB, dB, VB),
                XE: (TB, dB, VB) => BB.blockIdToBlockName(BB.getBlockId(TB, dB, VB)),
                Cw: (TB, dB, VB, yB) => {
                  BB.Cw(TB, dB, VB, yB)
                },
                playParticles: TB => {
                  BB.playParticleEffect(TB)
                }
              }, yB))
            }
            UB = (0, eJ.f)((BB => function(BB) {
              return Object.hasOwn(XT, BB) || BB.startsWith("npc_")
            }(BB) ? hT(BB) : null)), JB.resolveItemName = (TB, dB) => {
              const VB = BB.getItemStat(lB, TB, "displayName");
              return VB && "object" === typeof VB && "translationKey" in VB ? dB(VB.translationKey, (0, zy.o)(VB.params, aJ.c.shown)) : "string" === typeof VB ? dB(VB) : TB
            }, JB.quests.notifications.onShown = BB => {
              "quest" === BB ? QB.playSound(lB, "magicAccent1", 1, 1) : "skillLevel" === BB ? QB.playSound(lB, "magicAccent1", 1, .6) : "landmark" === BB ? QB.playSound(lB, "trumpetFlare", 1, .6) : "npcNote" === BB ? QB.playSound(lB, "magicAccent2", .8, 1.1) : "started" === BB ? QB.playSound(lB, (0, FJ.c)("bigDrumSwish"), 1, 1) : QB.playSound(lB, (0, FJ.c)("rpgHandleSmallLeather"), 1, 1)
            }, JB.forge.onPartSelected = () => {
              QB.playSound(lB, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, JB.forge.onForgeStarted = (TB, dB, VB) => rJ(BB, lB, TB, dB, VB), JB.smuggler.onBought = () => {
              QB.playSound(lB, (0, FJ.c)("rpgHandleSmallLeather"), 1, 1), QB.playSound(lB, "chestOpen", .6, 1)
            }, JB.compass.register(new HB(JB.map, !0)), JB.compass.register(new HB(JB.map, !1)), JB.compass.register(new vB(JB.map)), JB.compass.register(new mB((() => JB.quests.getSnapshot().compassTarget)));
            for (const dB of ["enemy", "npc"]) JB.compass.register(new EB(JB.map, dB, (TB => BB.checkValid(TB) ? BB.Dv(TB) : void 0), (TB => BB.isAlive(TB))))
          },
          onAfterRender: (BB, TB) => {
            const dB = QB.checkValid(lB) ? QB.Dv(lB) : null;
            JB.navigation.afterRender(dB, performance.now(), TB), JB.glowtide.afterRender(dB, TB.cameraHeading), JB.tideCharts.afterRender(dB), AB.afterRender()
          },
          onClose: () => {
            var BB, TB, dB, VB, yB, pB, lB, LB, DB, HB, EB, vB, mB, sB, MB;
            eB && GB.h.unsubscribe(eB), null === (BB = UB) || void 0 === BB || BB(), IB.dispose(), bB.dispose(), null === (TB = ZB) || void 0 === TB || TB.dispose(), AB.dispose(), JB.dispose(), null === (dB = YB) || void 0 === dB || dB(), null === (VB = gB) || void 0 === VB || VB(), null === (yB = oB) || void 0 === yB || yB(), null === (pB = kB) || void 0 === pB || pB(), null === (lB = OB) || void 0 === lB || lB(), null === (LB = uB) || void 0 === LB || LB(), null === (DB = undefined) || void 0 === DB || DB(), null === (HB = iB) || void 0 === HB || HB(), null === (EB = NB) || void 0 === EB || EB(), null === (vB = tB) || void 0 === vB || vB(), null === (mB = fB) || void 0 === mB || mB(), null === (sB = undefined) || void 0 === sB || sB(), null === (MB = zB) || void 0 === MB || MB()
          },
          onPlayerChangeBlock: (BB, TB, VB, pB, YB, gB) => {
            if (BB === lB && "Air" === gB) {
              const BB = QB.getClientOption(lB, "creative");
              JB.skills.predictBlock([TB, VB, pB], YB, BB);
              const gB = function(BB, TB) {
                  if ("hub" === TB || "farming_1" === TB || "mining_1" === TB) return !RB.has(BB) || "hub" !== TB && "mining_1" !== TB ? Object.hasOwn(PB, BB) ? PB[BB] : void 0 : SB
                }(YB, dB),
                oB = ("hub" === dB || "mining_1" === dB) && (yB.sd.some((BB => BB === YB)) || Object.hasOwn(aB, YB) || "mining_1" === dB && "Block of Coal" === YB);
              BB || void 0 === gB && !oB || QB.Cw(TB, VB, pB, null !== gB && void 0 !== gB ? gB : SB)
            }
          },
          onPlayerAttackEntity: (BB, TB) => {
            if (BB !== lB || "Player" !== QB.getEntityType(TB)) return;
            const [dB, VB, yB] = QB.Dv(TB);
            QB.burstParticlePreset("critical", [dB, VB + 1, yB], 10)
          },
          onChangeBlockFail: BB => {
            for (const {
                BB: TB
              }
              of BB) JB.skills.rejectBlock(TB)
          },
          onReceivedMessageFromServer: (BB, TB) => {
            if ("skyblockGatedPortal" === BB) {
              var dB;
              const [BB, VB] = TB;
              return void(null === (dB = nB.get(BB)) || void 0 === dB || dB.MD(VB))
            }
            if ("skyblockDailyReward" === BB) return void JB.dailyReward.MD(TB);
            if ("skyblockMailbox" === BB) return void JB.mailbox.MD(TB);
            if ("skyblockPortalTransit" === BB) return void JB.portalTransit.MD(TB);
            if ("skyblockLoot" === BB) return void IB.MD(QB, TB);
            if ("skyblockLava" === BB) return void bB.MD(TB);
            if ("skyblockForge" === BB) return void JB.forge.MD(TB);
            if ("skyblockMagmaward" === BB) return void JB.magmaward.MD(TB);
            if ("skyblockGlowtide" === BB) return void JB.glowtide.MD(TB);
            if ("skyblockGlowMeter" === BB) return void JB.glowMeter.MD(TB);
            if ("skyblockHushWait" === BB) return void JB.hushWait.MD(TB);
            if ("skyblockPassage" === BB) {
              const BB = TB;
              return JB.passage.MD(BB), JB.reachLog.receivePassagePhase(BB.passagePhase), tB ??= (0, sB.v)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: JB.passage.show
              }), void JB.keepersChair.receivePassage({
                keepersChairPassagePhase: BB.passagePhase,
                keepersChairPassageNextPhase: BB.passageNextPhase,
                keepersChairPassageTurnsInMs: BB.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === BB) {
              const BB = TB;
              return JB.tideCharts.MD(BB), void(BB.tideCharts.length > 0 && (fB ??= (0, sB.v)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: JB.tideCharts.show
              })))
            }
            if (BB === WB.t) {
              var VB;
              const {
                hookId: BB,
                waiting: dB
              } = TB;
              return void AB.hookWaiting(BB, null !== (VB = null === dB || void 0 === dB ? void 0 : dB.remainingMs) && void 0 !== VB ? VB : null)
            }
            if ("skyblockBiteTell" === BB) return void jB.receiveTell(TB);
            if ("skyblockSmuggler" === BB) return void JB.smuggler.MD(TB);
            if ("skyblockKeepersChair" === BB) return JB.keepersChair.MD(TB), void JB.lampLight.setAtChair(JB.keepersChair.isAtChair());
            if ("skyblockLampLight" === BB) {
              const BB = TB;
              var yB;
              if (JB.lampLight.MD(BB), BB.lampLightReleasing) NB ??= (0, sB.v)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  JB.lampLight.setRelease(!1)
                }
              });
              else null === (yB = NB) || void 0 === yB || yB(), NB = void 0;
              return
            }
            if ("skyblockRegulars" === BB) return void JB.regulars.MD(TB);
            if ("skyblockHiddenWaters" === BB) return void JB.hiddenWaters.MD(TB);
            if ("skyblockReachLog" === BB) return JB.reachLog.MD(TB), void(iB ??= (0, sB.v)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: FV
              },
              onClick: JB.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === BB) {
              for (const [BB, dB, VB, yB] of TB) QB.Cw(BB, dB, VB, yB);
              return
            }
            if ("skyblockHud" === BB) JB.receiveHud(TB);
            else if ("skyblockMap" === BB) JB.map.MD(TB);
            else if (BB === hB.f) JB.skills.MD(TB);
            else if (BB === FB && "dialogue" === TB.kind) JB.dialogue.MD(TB);
            else if (BB === FB) JB.quests.MD(TB);
            else if (BB === KB.j) JB.dungeons.MD(TB);
            else if ("sbCollections" === BB) JB.collections.MD(TB);
            else if ("skyblockQuestGraph" === BB) JB.questGraph.MD(TB);
            else {
              if ("skyblockAutographs" !== BB) return;
              JB.autographs.MD(TB)
            }
            if (!gB && JB.map.getSnapshot().enabled) {
              const BB = (0, sB.v)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: JB.map.show
                }),
                TB = (0, CB.p)(JB.map.show);
              gB = () => {
                BB(), TB()
              }
            }!oB && JB.skills.getSnapshot().enabled && (oB = (0, sB.v)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: JB.skills.show
            })), !uB && JB.collections.getSnapshot().enabled && (uB = (0, sB.v)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: JB.collections.show
            })), !kB && JB.quests.getSnapshot().enabled && (kB = (0, sB.v)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: JB.quests.show
            })), !zB && JB.autographs.getSnapshot().enabled && (zB = (0, sB.v)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: JB.autographs.show
            }));
            const pB = JB.dungeons.getSnapshot().enabled;
            var lB;
            (oB || kB || pB) && DB !== pB && (DB = pB, null === (lB = OB) || void 0 === lB || lB(), OB = (0, sB.v)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: KT
              },
              disabled: !pB,
              panel: !0,
              onClick: JB.dungeons.show
            }));
            YB || (YB = (0, CB.r)((0, MB.createElement)(wJ, {
              controller: JB
            }), {
              content: (0, MB.createElement)(UJ, {
                controller: JB
              }),
              onClose: JB.close
            }))
          },
          dL: () => {
            var BB;
            for (const TB of nB.values()) TB.dL();
            IB.dL(QB), bB.dL(), null === (BB = ZB) || void 0 === BB || BB.dL(), JB.skills.dL(), JB.quests.dL(), JB.dailyReward.dL(), JB.mailbox.dL(), JB.map.dL()
          }
        }
      }
  },
  37502: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      i: () => JB,
      j: () => VB,
      l: () => pB,
      m: () => yB,
      n: () => YB
    });
    const VB = "skyblockDungeons",
      yB = "skyblockHeldBoss",
      pB = "dungeonEnter ",
      lB = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      JB = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function YB(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const dB = Math.max(0, Math.floor(BB)),
        VB = Math.floor(dB % 1e3 / 100),
        yB = Math.floor(dB / 1e3),
        pB = yB % 60,
        lB = Math.floor(yB / 60),
        JB = lB % 60,
        YB = Math.floor(lB / 60),
        gB = BB => BB < 10 ? `0${BB}` : String(BB),
        oB = TB ? `.${VB}` : "";
      return YB > 0 ? `${YB}:${gB(JB)}:${gB(pB)}${oB}` : `${JB}:${gB(pB)}${oB}`
    }
  },
  35404: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      f: () => VB
    });
    const VB = "skyblockSkills",
      yB = "skills_test_gym"
  },
  8594: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => lB
    });
    const VB = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function yB(BB) {
      let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const TB = BB < 0 ? "-" : "",
            dB = Math.abs(BB);
          return dB >= 10 ? `${TB}${dB.toFixed(1).replace(/\.0$/,"")}` : `${TB}${dB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        TB = BigInt(Math.floor(BB))
      } else TB = BB;
      const yB = TB < 0n ? -TB : TB,
        pB = TB < 0n ? "-" : "",
        lB = yB.toString();
      if (lB.length <= dB) return `${pB}${lB}`;
      const JB = 3 * Math.floor((lB.length - 1) / 3);
      if (JB < 3) return `${pB}${lB}`;
      if (JB > 3 * VB.length) {
        const BB = lB[0],
          TB = lB.slice(1, 3).replace(/0+$/, "");
        return `${pB}${TB?`${BB}.${TB}`:BB}e${lB.length-1}`
      }
      const {
        threshold: YB,
        suffix: gB
      } = VB[VB.length - JB / 3], oB = yB / YB, kB = Number(1000n * (yB % YB) / YB), LB = Number(oB) + kB / 1e3;
      let OB;
      return OB = LB >= 100 ? Math.floor(LB).toString() : LB >= 10 ? LB.toFixed(1).replace(/\.0$/, "") : LB.toFixed(2).replace(/\.?0+$/, ""), `${pB}${OB}${gB}`
    }
    const pB = VB.map((BB => {
      let {
        threshold: TB,
        suffix: dB
      } = BB;
      return {
        threshold: Number(TB),
        suffix: dB
      }
    })).filter((BB => {
      let {
        threshold: TB
      } = BB;
      return Number.isFinite(TB)
    }));

    function lB(BB) {
      const TB = Math.abs(BB),
        dB = BB < 0 ? "-" : "";
      for (const {
          threshold: VB,
          suffix: yB
        }
        of pB)
        if (TB >= VB) {
          const BB = TB / VB;
          if (BB >= 1e3) return `${dB}${TB.toExponential(2).replace("e+","e")}`;
          let pB;
          return pB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${dB}${pB}${yB}`
        } return `${dB}${TB}`
    }
  },
  37519: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37522: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37530: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37538: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37542: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37550: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37556: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37558: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37566: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37573: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37579: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37587: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37591: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37593: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  17881: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19944: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22266: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23829: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25517: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25537: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37493: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);